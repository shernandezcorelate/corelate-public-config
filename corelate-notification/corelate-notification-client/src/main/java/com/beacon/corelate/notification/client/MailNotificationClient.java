package com.beacon.corelate.notification.client;

import com.beacon.corelate.commons.data.exception.FeignClientApiException;
import com.beacon.corelate.notification.config.ApiFeignConfig;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
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
        fallback = MailNotificationClient.MailNotificationClientFallback.class,
        configuration = ApiFeignConfig.class)
public interface MailNotificationClient {

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/endpoint/mail", method = RequestMethod.POST)
    void sendMail(@RequestParam("recipients") List<String> recipients, @RequestParam("subject") String subject, @RequestParam("body") String body);

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/endpoint/mail/async", method = RequestMethod.POST)
    void sendAsyncMail(@RequestParam("recipients") List<String> recipients, @RequestParam("subject") String subject, @RequestParam("body") String body);

    @Profile("online")
    @Component
    class MailNotificationClientFallback implements MailNotificationClient {
        @Override
        public void sendMail(@RequestParam("recipients") List<String> recipients,
                             @RequestParam("subject") String subject,
                             @RequestParam("body") String body) {
            throw new FeignClientApiException();
        }

        @Override
        public void sendAsyncMail(@RequestParam("recipients") List<String> recipients, @RequestParam("subject") String subject, @RequestParam("body") String body) {
            throw new FeignClientApiException();
        }
    }
}
