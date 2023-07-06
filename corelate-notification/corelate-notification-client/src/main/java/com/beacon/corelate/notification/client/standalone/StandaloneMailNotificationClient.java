package com.beacon.corelate.notification.client.standalone;

import com.beacon.corelate.notification.client.MailNotificationClient;

import java.util.List;

/**
 * @author ddevera
 */
public class StandaloneMailNotificationClient implements MailNotificationClient {
    @Override
    public void sendMail(List<String> recipients, String subject, String body) {
    }

    @Override
    public void sendAsyncMail(List<String> recipients, String subject, String body) {
    }
}
