package com.beacon.corelate.workflow.config;

import com.beacon.corelate.workflow.client.BpmnIdmEndpointClient;
import com.beacon.corelate.workflow.client.BpmnProcessDefinitionClient;
import com.beacon.corelate.workflow.client.BpmnProcessInstanceClient;
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
        "com.beacon.corelate.workflow"})
@ComponentScan(value = {
        "com.beacon.corelate.workflow.client"})
public class FeignConfig {

    @Resource(name = "com.beacon.corelate.workflow.client.BpmnIdmEndpointClient")
    private BpmnIdmEndpointClient bpmnIdmEndpointClient;

    @Resource(name = "com.beacon.corelate.workflow.client.BpmnProcessDefinitionClient")
    private BpmnProcessDefinitionClient bpmnProcessDefinitionClient;

    @Resource(name = "com.beacon.corelate.workflow.client.BpmnProcessInstanceClient")
    private BpmnProcessInstanceClient bpmnProcessInstanceClient;

    @Bean
    public BpmnIdmEndpointClient bpmnIdmEndpointClient() {
        return bpmnIdmEndpointClient;
    }

    @Bean
    public BpmnProcessDefinitionClient bpmnProcessDefinitionClient() {
        return bpmnProcessDefinitionClient;
    }

    @Bean
    public BpmnProcessInstanceClient bpmnProcessInstanceClient() {
        return bpmnProcessInstanceClient;
    }
}
