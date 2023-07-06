package com.beacon.corelate.notification.resource.client;

import com.beacon.corelate.notification.client.SmsNotificationClient;
import com.beacon.corelate.notification.dto.SmsDto;
import com.beacon.corelate.notification.service.SmsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author ddevera
 */
@RestController
public class SmsNotificationClientResource implements SmsNotificationClient {

    private static final Logger LOG = LoggerFactory.getLogger(SmsNotificationClientResource.class);

    @Autowired
    private SmsService smsService;

    @Override
    public void sendSingleSms(@RequestBody SmsDto smsDto) {
        LOG.debug("Sending SMS Message with smsDto : {}", smsDto);
        smsService.sendMessage(smsDto);
    }

    @Override
    public void sendAsyncSingleSms(@RequestBody SmsDto smsDto) {
        LOG.debug("Sending async SMS Message with smsDto : {}", smsDto);
        smsService.sendAsyncMessage(smsDto);
    }

    @Override
    public void sendMultipleSms(@RequestParam("mobileNumber") List<String> mobileNumber, @RequestParam("message") String message) {
        LOG.debug("Sending multiple SMS Message to: {} with message : {}", mobileNumber, message);
        smsService.sendMessage(mobileNumber, message);
    }
}
