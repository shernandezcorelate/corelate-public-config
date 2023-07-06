package com.beacon.corelate.workflow.config;

import com.beacon.corelate.workflow.client.BpmnIdmEndpointClient;
import com.beacon.corelate.workflow.client.BpmnProcessDefinitionClient;
import com.beacon.corelate.workflow.client.BpmnProcessInstanceClient;
import com.beacon.corelate.workflow.client.standalone.StandaloneBpmnIdmEndpointClient;
import com.beacon.corelate.workflow.client.standalone.StandaloneBpmnProcessDefinitionClient;
import com.beacon.corelate.workflow.client.standalone.StandaloneBpmnProcessInstanceClient;
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
    public BpmnIdmEndpointClient bpmnIdmEndpointClient() {
        return new StandaloneBpmnIdmEndpointClient();
    }

    @Bean
    public BpmnProcessDefinitionClient bpmnProcessDefinitionClient() {
        return new StandaloneBpmnProcessDefinitionClient();
    }

    @Bean
    public BpmnProcessInstanceClient bpmnProcessInstanceClient() {
        return new StandaloneBpmnProcessInstanceClient();
    }
}
