package com.beacon.corelate.authentication.config;

import com.beacon.corelate.authentication.client.ConfigServerClient;
import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import javax.annotation.Resource;

/**
 * @author ddevera
 */
@Configuration
@EnableFeignClients(basePackages = {
        "com.beacon.corelate.authentication"})
@ComponentScan(value = {
        "com.beacon.corelate.authentication.client"})
public class FeignConfig {

    @Resource(name = "com.beacon.corelate.authentication.client.ConfigServerClient")
    private ConfigServerClient configServerClient;

    @Bean
    public ConfigServerClient configServerClient() {
        return configServerClient;
    }
}
