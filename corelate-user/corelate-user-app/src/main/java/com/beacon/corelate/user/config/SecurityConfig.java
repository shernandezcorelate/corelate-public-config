package com.beacon.corelate.user.config;

import com.beacon.corelate.commons.app.config.BaseSecurityConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;

import javax.annotation.PostConstruct;

/**
 * @author ddevera
 */
@Configuration
public class SecurityConfig extends BaseSecurityConfig {

    @Value("${user.register.enabled}")
    private Boolean enableRegisterUser;

    @PostConstruct
    public void SecurityConfig() {
        addHttpExclusion(HttpMethod.POST, new String[]{
                "/user-account/username/{username}/retrieve"
        });

        addHttpExclusion(HttpMethod.PUT, new String[]{
                "/user-account/{id}/mail-activation-code/{activationCode}/activate",
                "/user-account/{id}/mobile-activation-code/{activationCode}/activate",
                "/user-account/{id}/password/reset"
        });

        if (enableRegisterUser) {
            addHttpExclusion(HttpMethod.POST, new String[]{
                    "/user-account",
            });
        }
    }
}
