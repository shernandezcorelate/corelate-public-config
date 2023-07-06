package com.beacon.corelate.zuul.config;

import feign.Logger;
import feign.auth.BasicAuthRequestInterceptor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;

/**
 * @author ddevera
 */
public class ConfigServerFeignConfig {

    @Value("${spring.cloud.config.username}")
    private String configServerUsername;

    @Value("${spring.cloud.config.password}")
    private String configServerPassword;

    @Bean
    public BasicAuthRequestInterceptor basicAuthRequestInterceptor() {
        return new BasicAuthRequestInterceptor(configServerUsername, configServerPassword);
    }

    @Bean
    Logger.Level feignLoggerLevel() {
        return Logger.Level.FULL;
    }
}
