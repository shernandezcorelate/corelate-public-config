package com.beacon.corelate.zuul.config;

import com.beacon.corelate.zuul.client.ConfigServerClient;
import com.beacon.corelate.zuul.client.UserClient;
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
        "com.beacon.corelate.zuul"})
@ComponentScan(value = {
        "com.beacon.corelate.zuul.client"})
public class FeignConfig {

    @Resource(name = "com.beacon.corelate.zuul.client.ConfigServerClient")
    private ConfigServerClient configServerClient;

    @Resource(name = "com.beacon.corelate.zuul.client.UserClient")
    private UserClient userClient;

    @Bean
    public UserClient userClient() {
        return userClient;
    }

    @Bean
    public ConfigServerClient configServerClient() {
        return configServerClient;
    }
}
