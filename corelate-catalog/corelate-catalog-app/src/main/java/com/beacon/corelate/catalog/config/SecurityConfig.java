package com.beacon.corelate.catalog.config;

import com.beacon.corelate.commons.app.config.BaseSecurityConfig;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;

import javax.annotation.PostConstruct;

/**
 * @author ddevera
 */
@Configuration
public class SecurityConfig extends BaseSecurityConfig {

    @PostConstruct
    public void SecurityConfig() {
        addHttpExclusion(HttpMethod.GET, new String[]{
                "/catalog/**"
        });
    }
}
