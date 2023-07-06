package com.beacon.corelate.user.config;

import com.beacon.corelate.cms.client.TextTemplateClient;
import com.beacon.corelate.cms.client.standalone.StandaloneTextTemplateClient;
import com.beacon.corelate.notification.client.MailNotificationClient;
import com.beacon.corelate.notification.client.SmsNotificationClient;
import com.beacon.corelate.notification.client.standalone.StandaloneMailNotificationClient;
import com.beacon.corelate.notification.client.standalone.StandaloneSmsNotificationClient;
import com.beacon.corelate.user.client.BpmnIdmGroupsClient;
import com.beacon.corelate.user.client.BpmnIdmUserClient;
import com.beacon.corelate.user.client.standalone.StandaloneBpmnIdmGroupsClient;
import com.beacon.corelate.user.client.standalone.StandaloneBpmnIdmUserClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

/**
 * @author ddevera
 */
@Profile("!online")
@Configuration
public class StandaloneConfig {

    @Bean
    public BpmnIdmUserClient bpmnIdmUserClient() {
        return new StandaloneBpmnIdmUserClient();
    }

    @Bean
    public BpmnIdmGroupsClient bpmnIdmGroupsClient() {
        return new StandaloneBpmnIdmGroupsClient();
    }

    @Bean
    public MailNotificationClient mailNotificationClient() {
        return new StandaloneMailNotificationClient();
    }

    @Bean
    public SmsNotificationClient smsNotificationClient() {
        return new StandaloneSmsNotificationClient();
    }

    @Bean
    public TextTemplateClient textTemplateClient() {
        return new StandaloneTextTemplateClient();
    }
}
