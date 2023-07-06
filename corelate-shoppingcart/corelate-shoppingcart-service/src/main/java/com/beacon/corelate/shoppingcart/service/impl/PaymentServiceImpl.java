package com.beacon.corelate.shoppingcart.service.impl;

import com.beacon.corelate.commons.data.dto.PageDto;
import com.beacon.corelate.commons.data.exception.DataInconsistencyException;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.service.impl.BaseServiceImpl;
import com.beacon.corelate.shoppingcart.dto.ItemDto;
import com.beacon.corelate.shoppingcart.dto.PaymentDto;
import com.beacon.corelate.shoppingcart.mapper.ShoppingCartBeanMapper;
import com.beacon.corelate.shoppingcart.model.Item;
import com.beacon.corelate.shoppingcart.model.Payment;
import com.beacon.corelate.shoppingcart.repository.jpa.ItemRepository;
import com.beacon.corelate.shoppingcart.repository.jpa.PaymentRepository;
import com.beacon.corelate.shoppingcart.service.PaymentService;
import com.beacon.corelate.workflow.client.BpmnReceiveTaskClient;
import com.google.common.collect.Lists;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author ddevera
 */
@Service
public class PaymentServiceImpl
        extends BaseServiceImpl<Payment, PaymentDto, PaymentRepository, Long, ShoppingCartBeanMapper>
        implements PaymentService {

    @Autowired
    private BpmnReceiveTaskClient bpmnReceiveTaskClient;

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private ShoppingCartBeanMapper mapper;

    public PaymentServiceImpl() {
        super(Payment.class, PaymentDto.class);
    }

    @Override
    public PaymentDto pay(PaymentDto paymentDto) throws EntityDoesNotExistException, DataInconsistencyException {
        BigDecimal amountToPay = BigDecimal.ZERO;
        List<Item> paidItems = Lists.newArrayList();

        for (ItemDto payableItem : paymentDto.getItems()) {
            Item item = itemRepository.findOneById(payableItem.getId());

            if (item == null) {
                throw new EntityDoesNotExistException("Item with id=" + payableItem.getId() + " does not exist");
            }

            amountToPay = amountToPay.add(item.getAmount());
            paidItems.add(item);
        }

        if (amountToPay.compareTo(paymentDto.getAmount()) != 0) {
            throw new DataInconsistencyException("Items being paid does not match paid amount");
        }

        Payment payment = new Payment();
        payment.setAmount(paymentDto.getAmount());

        payment = paymentRepository.save(payment);

        payment.setReceiptNumber(
                payment.getId() + RandomStringUtils.randomAlphabetic(10));
        payment.getItems().addAll(paidItems);

        for(Item item : payment.getItems()) {
            item.setPayment(payment);
        }

        paidItems.stream().forEach(paidItem -> {

            // TODO : pass variables to activiti receive task
            if (paidItem.getProcessInstanceId() != null && paidItem.getActivityId() != null) {
                bpmnReceiveTaskClient.receiveTaskEvent(
                        paidItem.getProcessInstanceId(),
                        paidItem.getActivityId(),
                        null);
            }
        });

        return mapper.map(paymentRepository.save(payment), PaymentDto.class);
    }

    @Override
    public PageDto<PaymentDto> list(Pageable pageable) {
        Page<Payment> models = paymentRepository.findByDeleted(Boolean.FALSE, pageable);

        return PageDto
                .newPageInfo(
                        models,
                        models
                            .getContent()
                            .stream()
                            .sorted(Comparator.comparing(Payment::getUpdatedDate, Comparator.nullsLast(Comparator.reverseOrder())))
                            .map(model -> mapper.map(model, PaymentDto.class))
                            .collect(Collectors.toList()));
    }
}
