package com.beacon.corelate.shoppingcart.config;

import com.beacon.corelate.workflow.client.BpmnReceiveTaskClient;
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

    @Resource(name = "com.beacon.corelate.workflow.client.BpmnReceiveTaskClient")
    private BpmnReceiveTaskClient bpmnReceiveTaskClient;

    @Bean
    public BpmnReceiveTaskClient bpmnReceiveTaskClient() {
        return bpmnReceiveTaskClient;
    }
}
