package com.beacon.corelate.commons.app.config;

import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.DefaultTokenServices;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;

import java.util.Arrays;
import java.util.List;

import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

/**
 * @author ddevera
 */
@Configuration
@EnableResourceServer
public class BaseSecurityConfig extends ResourceServerConfigurerAdapter {

    protected List<String> httpGetExclusions = Lists.newArrayList("/docs/**", "/info");
    protected List<String> httpPostExclusions = Lists.newArrayList();
    protected List<String> httpPutExclusions = Lists.newArrayList();
    protected List<String> httpDeleteExclusions = Lists.newArrayList();

    @Value("${security.oauth2.resource.jwt.keyValue}")
    private String jwtKey;

    @Override
    public void configure(final HttpSecurity http) throws Exception {
        http
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
                .and()
                .authorizeRequests()
                .antMatchers(
                        GET,
                        httpGetExclusions
                                .stream()
                                .toArray(String[]::new))
                .permitAll()
                .and()
                .authorizeRequests()
                .antMatchers(
                        POST,
                        httpPostExclusions
                                .stream()
                                .toArray(String[]::new))
                .permitAll()
                .and()
                .authorizeRequests()
                .antMatchers(
                        PUT,
                        httpPutExclusions
                                .stream()
                                .toArray(String[]::new))
                .permitAll()
                .and()
                .authorizeRequests()
                .antMatchers(
                        DELETE,
                        httpDeleteExclusions
                                .stream()
                                .toArray(String[]::new))
                .permitAll()
                .and()
                .authorizeRequests()
                .anyRequest()
                .authenticated();
    }

    @Override
    public void configure(final ResourceServerSecurityConfigurer config) {
        config.tokenServices(tokenServices());
    }

    @Bean
    @Primary
    public DefaultTokenServices tokenServices() {
        final DefaultTokenServices defaultTokenServices = new DefaultTokenServices();
        defaultTokenServices.setTokenStore(tokenStore());
        return defaultTokenServices;
    }

    @Bean
    public TokenStore tokenStore() {
        return new JwtTokenStore(accessTokenConverter());
    }

    @Bean
    public JwtAccessTokenConverter accessTokenConverter() {
        final JwtAccessTokenConverter converter = new JwtAccessTokenConverter();
        converter.setVerifierKey(jwtKey);

        return converter;
    }

    protected void addHttpExclusion(HttpMethod httpMethod, String[] exclusions) {
        List<String> exclusionHolder = Lists.newArrayList();

        switch (httpMethod) {
            case GET:
                exclusionHolder = httpGetExclusions;
                break;
            case PUT:
                exclusionHolder = httpPutExclusions;
                break;
            case POST:
                exclusionHolder = httpPostExclusions;
                break;
            case DELETE:
                exclusionHolder = httpDeleteExclusions;
                break;
        }

        exclusionHolder.addAll(Arrays.asList(exclusions));
    }
}
