package com.beacon.corelate.user.config;

import com.beacon.corelate.cms.client.TextTemplateClient;
import com.beacon.corelate.notification.client.MailNotificationClient;
import com.beacon.corelate.notification.client.SmsNotificationClient;
import com.beacon.corelate.user.client.BpmnIdmUserClient;
import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.annotation.Resource;

/**
 * @author ddevera
 */
@Profile("online")
@Configuration
@EnableFeignClients(basePackages = {
        "com.beacon.corelate.cms",
        "com.beacon.corelate.notification",
        "com.beacon.corelate.user"})
@ComponentScan(value = {
        "com.beacon.corelate.cms.client",
        "com.beacon.corelate.notification.client",
        "com.beacon.corelate.user.client"})
public class FeignConfig {

    @Resource(name = "com.beacon.corelate.user.client.BpmnIdmUserClient")
    private BpmnIdmUserClient bpmnIdmUserClient;

    @Resource(name = "com.beacon.corelate.notification.client.MailNotificationClient")
    private MailNotificationClient mailNotificationClient;

    @Resource(name = "com.beacon.corelate.notification.client.SmsNotificationClient")
    private SmsNotificationClient smsNotificationClient;

    @Resource(name = "com.beacon.corelate.cms.client.TextTemplateClient")
    private TextTemplateClient textTemplateClient;

    @Bean
    public BpmnIdmUserClient bpmnIdmUserClient() {
        return bpmnIdmUserClient;
    }

    @Bean
    public MailNotificationClient mailNotificationClient() {
        return mailNotificationClient;
    }

    @Bean
    public SmsNotificationClient smsNotificationClient() {
        return smsNotificationClient;
    }

    @Bean
    public TextTemplateClient textTemplateClient() {
        return textTemplateClient;
    }
}
