package com.beacon.corelate.rules.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.restdocs.JUnitRestDocumentation;

@Configuration
public class TestApplicationConfig {

    @Bean
    public JUnitRestDocumentation restDocumentation() {
        return new JUnitRestDocumentation();
    }
}