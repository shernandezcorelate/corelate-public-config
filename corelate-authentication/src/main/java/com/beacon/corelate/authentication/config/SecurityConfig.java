package com.beacon.corelate.authentication.config;

import com.beacon.corelate.authentication.client.ConfigServerClient;
import com.beacon.corelate.authentication.service.UserClientDetailService;
import com.beacon.corelate.authentication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.security.web.authentication.logout.SimpleUrlLogoutSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author ddevera
 */
@Configuration
@EnableWebSecurity
@EnableOAuth2Client
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserClientDetailService userClientDetailService;

    @Autowired
    private UserService userService;

    @Autowired
    private ConfigServerClient configServerClient;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers(
                        "/login",
                        "/info",
                        "/assets/*",
                        "/styles/**",
                        "/resources/**",
                        "/font/**",
                        "/js/**",
                        "/**/*.html"
                )
                .permitAll()
                .anyRequest()
                .authenticated()
                .and().formLogin().loginPage("/login.html").permitAll()
                .and().logout().logoutSuccessHandler(logoutSuccessHandler())
                .and()
                .csrf().disable();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        CustomDaoAuthenticationProvider customDaoAuthenticationProvider =
                new CustomDaoAuthenticationProvider(configServerClient, userClientDetailService);
        customDaoAuthenticationProvider.setUserDetailsService(userService);

        auth.authenticationProvider(customDaoAuthenticationProvider);
    }

    @Override
    @Bean(name = BeanIds.AUTHENTICATION_MANAGER)
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    private LogoutSuccessHandler logoutSuccessHandler() {
        return new SimpleUrlLogoutSuccessHandler() {
            public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
                response.sendRedirect(request.getParameter("post_logout_redirect_uri"));
            }
        };
    }
}
