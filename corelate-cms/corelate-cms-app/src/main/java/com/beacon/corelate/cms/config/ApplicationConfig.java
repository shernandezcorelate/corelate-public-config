package com.beacon.corelate.cms.config;

import com.beacon.corelate.commons.app.config.BaseApplicationConfig;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * @author ddevera
 */
@Configuration
@EnableJpaRepositories(
        basePackages = "com.beacon.corelate.cms.repository.jpa",
        repositoryImplementationPostfix = "CustomImpl")
@EntityScan(basePackages = {
        "com.beacon.corelate.commons.app.config",
        "com.beacon.corelate.commons.data",
        "com.beacon.corelate.cms"})
public class ApplicationConfig extends BaseApplicationConfig {

}
