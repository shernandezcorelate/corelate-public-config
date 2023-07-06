package com.beacon.corelate.zuul.config;

import feign.Logger;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;

/**
 * @author ddevera
 */
@Configuration
public class ApiFeignConfig {

    @Bean
    Logger.Level feignLoggerLevel() {
        return Logger.Level.FULL;
    }

//    @Bean
//    feign.RequestInterceptor requestInterceptor() {
//        return requestTemplate -> {
//            if (SecurityContextHolder.getContext().getAuthentication().getDetails() instanceof OAuth2AuthenticationDetails) {
//                OAuth2AuthenticationDetails details = (OAuth2AuthenticationDetails)
//                        SecurityContextHolder.getContext().getAuthentication().getDetails();
//
//                requestTemplate.header("Authorization", "bearer " + details.getTokenValue());
//            }
//        };
//    }
}
