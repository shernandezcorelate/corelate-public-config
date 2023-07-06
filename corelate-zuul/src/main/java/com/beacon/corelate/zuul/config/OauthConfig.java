package com.beacon.corelate.zuul.config;

import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * @author ddevera
 */
@Configuration
@EnableOAuth2Sso
public class OauthConfig extends WebSecurityConfigurerAdapter {

    // TODO : Move this to config file

    @Override
    public void configure(final HttpSecurity http) throws Exception {
        http
                .antMatcher("/**/docs/*.html")
                .headers()
                .frameOptions()
                .disable()
                .and()
                .authorizeRequests()
                .antMatchers("/**/docs/*.html")
                .permitAll()
                .and()
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, httpGetExclusions())
                .permitAll()
                .and()
                .authorizeRequests()
                .antMatchers(HttpMethod.POST, httpPostExclusions())
                .permitAll()
                .and()
                .authorizeRequests()
                .antMatchers(HttpMethod.PUT, httpPutExclusions())
                .permitAll()
                .and()
                .authorizeRequests()
                .antMatchers(HttpMethod.DELETE, httpDeleteExclusions())
                .permitAll()
                .and()
                .authorizeRequests()
                .anyRequest()
                .authenticated();
    }

    protected String[] httpGetExclusions() {
        return new String[]{
                "/carousel/**",
                "/faq/**",
                "/footer/**",
                "/general-content/**",
                "/header/**",
                "/help-topic/**"
        };
    }

    protected String[] httpPostExclusions() {
        return new String[]{
                "/user-account/username/{username:[\\d+]}/retrieve",
                "/user-account/{id:[\\d+]}/password/reset"
        };
    }

    protected String[] httpPutExclusions() {
        return new String[]{
        };
    }

    protected String[] httpDeleteExclusions() {
        return new String[]{
        };
    }
}
