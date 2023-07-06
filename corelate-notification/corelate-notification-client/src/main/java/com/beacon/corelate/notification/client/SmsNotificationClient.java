package com.beacon.corelate.notification.client;

import com.beacon.corelate.commons.data.exception.FeignClientApiException;
import com.beacon.corelate.notification.config.ApiFeignConfig;
import com.beacon.corelate.notification.dto.SmsDto;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;

/**
 * @author ddevera
 */
@Profile("online")
@FeignClient(value = "notification",
        fallback = SmsNotificationClient.SmsNotificationClientFallback.class,
        configuration = ApiFeignConfig.class)
public interface SmsNotificationClient {

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/endpoint/sms/single", method = RequestMethod.POST)
    void sendSingleSms(@RequestBody SmsDto smsDto);

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/endpoint/sms/single/async", method = RequestMethod.POST)
    void sendAsyncSingleSms(@RequestBody SmsDto smsDto);

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/endpoint/sms/multiple", method = RequestMethod.POST)
    void sendMultipleSms(@RequestParam("mobileNumbers") List<String> mobileNumbers, @RequestParam("message") String message);

    @Component
    class SmsNotificationClientFallback implements SmsNotificationClient {
        @Override
        public void sendSingleSms(@RequestBody SmsDto smsDto) {
            throw new FeignClientApiException();
        }

        @Override
        public void sendAsyncSingleSms(@RequestBody SmsDto smsDto) {

        }

        @Override
        public void sendMultipleSms(@RequestParam("mobileNumbers") List<String> mobileNumbers, @RequestParam("message") String message) {
            throw new FeignClientApiException();
        }
    }
}
