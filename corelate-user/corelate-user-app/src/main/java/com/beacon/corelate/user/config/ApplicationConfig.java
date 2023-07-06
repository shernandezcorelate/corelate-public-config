package com.beacon.corelate.user.config;

import com.beacon.corelate.commons.app.config.BaseApplicationConfig;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * @author ddevera
 */
@Configuration
@EnableJpaRepositories(
        basePackages = "com.beacon.corelate.user.repository.jpa",
        repositoryImplementationPostfix = "CustomImpl")
@EntityScan(basePackages = {
        "com.beacon.corelate.commons.app.config",
        "com.beacon.corelate.commons.data",
        "com.beacon.corelate.user"})
public class ApplicationConfig extends BaseApplicationConfig {


}
