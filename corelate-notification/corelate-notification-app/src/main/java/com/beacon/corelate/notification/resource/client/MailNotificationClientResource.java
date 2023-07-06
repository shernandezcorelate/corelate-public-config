package com.beacon.corelate.notification.resource.client;

import com.beacon.corelate.notification.client.MailNotificationClient;
import com.beacon.corelate.notification.service.MailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author ddevera
 */
@RestController
public class MailNotificationClientResource implements MailNotificationClient {

    private static final Logger LOG = LoggerFactory.getLogger(MailNotificationClientResource.class);

    @Autowired
    private MailService mailService;

    @Override
    public void sendMail(@RequestParam("recipients") List<String> recipients,
                         @RequestParam("subject") String subject,
                         @RequestParam("body") String body) {
        LOG.debug("Sending Mail to recipient={} with subject={} and body={}", recipients, subject, body);
        mailService.sendEmail(recipients, subject, body);
    }

    @Override
    public void sendAsyncMail(@RequestParam("recipients") List<String> recipients,
                              @RequestParam("subject") String subject,
                              @RequestParam("body") String body) {
        LOG.debug("Sending async Mail to recipient={} with subject={} and body={}", recipients, subject, body);
        mailService.sendAsyncEmail(recipients, subject, body);
    }
}
