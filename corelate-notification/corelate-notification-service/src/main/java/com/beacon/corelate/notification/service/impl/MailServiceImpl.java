package com.beacon.corelate.notification.service.impl;

import com.beacon.corelate.notification.service.MailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailSender;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.List;

/**
 * @author ddevera
 */
@Service
public class MailServiceImpl implements MailService {

    private static final Logger LOG = LoggerFactory.getLogger(MailServiceImpl.class);

    @Autowired
    private MailSender mailSender;

    @Value("${mail.from.email}")
    private String email;

    @Override
    public void sendEmail(List<String> tempRecipients, String subject, String body) {
        try {
            MimeMessage mimeMailMessage = ((JavaMailSender) mailSender).createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMailMessage, true);

            String mainRecipient = tempRecipients.get(0);
            tempRecipients.remove(0);

            if (tempRecipients.size() != 0) {
                String[] recipients = new String[tempRecipients.size()];
                for (int index = 0; index < tempRecipients.size(); index++) {
                    String tempRecipient = tempRecipients.get(index);
                    recipients[index] = tempRecipient;
                }
                helper.setCc(recipients);
            }

            helper.setFrom(email);
            helper.setSubject(subject);
            helper.setText(body, true);
            helper.setTo(mainRecipient);

            ((JavaMailSender) mailSender).send(mimeMailMessage);
        } catch (MessagingException e) {
            LOG.error(e.getMessage(), e);
        }
    }

    @Async
    @Override
    public void sendAsyncEmail(List<String> recipients, String subject, String body) {
        sendEmail(recipients, subject, body);
    }
}
