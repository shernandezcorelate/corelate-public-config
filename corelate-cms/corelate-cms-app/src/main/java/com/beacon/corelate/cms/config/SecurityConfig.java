package com.beacon.corelate.cms.config;

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
                "/carousel/**",
                "/carousel-slide/**",
                "/faq/**",
                "/footer/**",
                "/general-content/**",
                "/header/**",
                "/help-topic/**",
                "/text-template/**",
                "/contact-info/**",
                "/blocks/**",
                "/simple-layout/**",
                "/grid-layout/**",
                "/grid-item/**",
                "/project-site/**",
                "/color-config/**",
                "/site-head/**"
        });

        addHttpExclusion(HttpMethod.POST, new String[]{
                "/text-template/key/{key}/process",
                "/contact-form/**"
        });
    }
}
