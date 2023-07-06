package com.beacon.corelate.workflow.config;

import com.beacon.corelate.commons.app.config.BaseApplicationConfig;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * @author ddevera
 */
@Configuration
@EnableJpaRepositories(
        basePackages = "com.beacon.corelate.workflow.repository.jpa",
        repositoryImplementationPostfix = "CustomImpl")
@ComponentScan(value = {
        "com.beacon.corelate.workflow.client"})
public class ApplicationConfig extends BaseApplicationConfig {
}
