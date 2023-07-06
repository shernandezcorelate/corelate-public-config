package com.beacon.corelate.workflow.config;

import feign.Logger;
import feign.auth.BasicAuthRequestInterceptor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;

/**
 * @author ddevera
 */
public class BpmnFeignConfig {

    @Value("${bpmn.username}")
    private String bpmnUsername;

    @Value("${bpmn.password}")
    private String bpmnPassword;

    @Bean
    public BasicAuthRequestInterceptor basicAuthRequestInterceptor() {
        return new BasicAuthRequestInterceptor(bpmnUsername, bpmnPassword);
    }

    @Bean
    Logger.Level feignLoggerLevel() {
        return Logger.Level.FULL;
    }
}
