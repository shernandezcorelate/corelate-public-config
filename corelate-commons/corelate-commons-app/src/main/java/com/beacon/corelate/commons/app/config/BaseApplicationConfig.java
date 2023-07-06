package com.beacon.corelate.commons.app.config;

import com.beacon.corelate.commons.data.util.UserUtil;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.apache.commons.lang3.StringUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.http.converter.ByteArrayHttpMessageConverter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.util.List;

/**
 * @author ddevera
 */
@Configuration
@EnableTransactionManagement
@ComponentScan(value = {"com.beacon.corelate.commons"})
@EnableJpaAuditing(auditorAwareRef = "auditorProvider")
public class BaseApplicationConfig extends WebMvcConfigurerAdapter {

    private static final String SYSTEM_USER = "system";

    @Bean
    public AuditorAware<String> auditorProvider() {
        return () -> {
            try {
                return StringUtils
                        .defaultString(
                                UserUtil.getCurrentUserName(),
                                SYSTEM_USER);
            } catch (Exception e) {
                return SYSTEM_USER;
            }
        };
    }

    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        converters.add(jsonConverter());
        converters.add(byteArrayConverter());
    }

    @Bean
    public ByteArrayHttpMessageConverter byteArrayConverter() {
        return new ByteArrayHttpMessageConverter();
    }

    @Bean
    public MappingJackson2HttpMessageConverter jsonConverter() {
        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
        converter.getObjectMapper()
                .registerModule(new JavaTimeModule())
                .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
                .configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false)
                .configure(SerializationFeature.WRITE_NULL_MAP_VALUES, false);
        return converter;
    }
}
