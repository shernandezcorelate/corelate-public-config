package com.beacon.corelate.shoppingcart.service;

import com.beacon.corelate.commons.data.exception.DataInconsistencyException;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.service.BaseService;
import com.beacon.corelate.shoppingcart.dto.PaymentDto;
import com.beacon.corelate.shoppingcart.mapper.ShoppingCartBeanMapper;
import com.beacon.corelate.shoppingcart.model.Payment;
import com.beacon.corelate.shoppingcart.repository.jpa.PaymentRepository;

/**
 * @author ddevera
 */
public interface PaymentService extends BaseService<Payment, PaymentDto, PaymentRepository, Long, ShoppingCartBeanMapper> {

    PaymentDto pay(PaymentDto paymentDto) throws EntityDoesNotExistException, DataInconsistencyException;
}
