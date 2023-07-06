package com.beacon.corelate.shoppingcart.config;

import com.beacon.corelate.workflow.client.BpmnReceiveTaskClient;
import com.beacon.corelate.workflow.client.standalone.StandaloneBpmnReceiveTaskClient;
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
    public BpmnReceiveTaskClient bpmnReceiveTaskClient() {
        return new StandaloneBpmnReceiveTaskClient();
    }
}
