package com.beacon.corelate.notification.service;

import java.util.List;

/**
 * @author ddevera
 */
public interface MailService {

    void sendEmail(List<String> recipients, String subject, String body);

    void sendAsyncEmail(List<String> recipients, String subject, String body);
}
