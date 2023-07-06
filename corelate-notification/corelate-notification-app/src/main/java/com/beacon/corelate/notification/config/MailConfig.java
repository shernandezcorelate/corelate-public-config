package com.beacon.corelate.notification.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.MailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

/**
 * @author ddevera
 */
@Configuration
public class MailConfig {

    @Value("${mail.from.email}")
    private String email;

    @Value("${mail.host}")
    private String host;

    @Value("${mail.username}")
    private String username;

    @Value("${mail.password}")
    private String password;

    @Value("${mail.port}")
    private String port;

    @Value("${mail.auth.enabled}")
    private String authEnabled;

    @Value("${mail.tls.enabled}")
    private String tlsEnabled;

    @Bean
    public MailSender mailSender() {
        JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();

        javaMailSender.setHost(host);
        javaMailSender.setUsername(username);
        javaMailSender.setPassword(password);
        javaMailSender.setPort(Integer.parseInt(port));

        Properties properties = new Properties();
        properties.put("mail.smtp.auth", Boolean.parseBoolean(authEnabled));
        properties.put("mail.smtp.starttls.enable", Boolean.parseBoolean(tlsEnabled));

        javaMailSender.setJavaMailProperties(properties);

        return javaMailSender;
    }
}
