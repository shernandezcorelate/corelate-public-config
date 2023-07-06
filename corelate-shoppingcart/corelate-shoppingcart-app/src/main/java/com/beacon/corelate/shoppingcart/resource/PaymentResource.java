package com.beacon.corelate.shoppingcart.resource;

import com.beacon.corelate.commons.app.resource.BaseResource;
import com.beacon.corelate.commons.data.exception.DataInconsistencyException;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.shoppingcart.dto.PaymentDto;
import com.beacon.corelate.shoppingcart.service.PaymentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author ddevera
 */
@RestController
@RequestMapping("/payment")
public class PaymentResource extends BaseResource<PaymentDto, Long, PaymentService> {

    private static final Logger LOG = LoggerFactory.getLogger(PaymentResource.class);

    @Autowired
    private PaymentService paymentService;

    public PaymentResource() {
        super(PaymentResource.class);
    }

    @Override
    public ResponseEntity<PaymentDto> create(PaymentDto dto) throws Exception {
        return new ResponseEntity<>((PaymentDto) null, HttpStatus.METHOD_NOT_ALLOWED);
    }

    @Override
    public ResponseEntity<PaymentDto> update(Long aLong, PaymentDto dto) throws EntityDoesNotExistException {
        return new ResponseEntity<>((PaymentDto) null, HttpStatus.METHOD_NOT_ALLOWED);
    }

    @Override
    @ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
    public void delete(Long id) throws EntityDoesNotExistException {
        LOG.debug("Delete method not allowed");
    }

    @RequestMapping(value = "/pay", method = RequestMethod.POST)
    public ResponseEntity<PaymentDto> pay(@RequestBody PaymentDto paymentDto)
            throws DataInconsistencyException, EntityDoesNotExistException {
        LOG.debug("Processing payment for paymentDto={}", paymentDto);
        return new ResponseEntity<>(paymentService.pay(paymentDto), HttpStatus.OK);
    }
}
