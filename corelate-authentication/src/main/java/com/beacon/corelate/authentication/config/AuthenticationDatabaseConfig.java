package com.beacon.corelate.authentication.config;

import com.google.common.collect.Maps;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.Map;

/**
 * @author ddevera
 */
@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(
        entityManagerFactoryRef = "authenticationLocalContainerEntityManagerFactoryBean",
        basePackages = "com.beacon.corelate.authentication.repository.jpa.authentication"
)
public class AuthenticationDatabaseConfig {

    @Bean
    @Primary
    public LocalContainerEntityManagerFactoryBean authenticationLocalContainerEntityManagerFactoryBean(EntityManagerFactoryBuilder builder) {
        Map<String, Object> configuration = Maps.newHashMap();
        configuration.put("hibernate.hbm2ddl.auto", "update");

        return builder
                .dataSource(authenticationDataSource())
                .packages("com.beacon.corelate.authentication.model.authentication")
                .persistenceUnit("authentication")
                .properties(configuration)
                .build();
    }

    @Bean
    @Primary
    @ConfigurationProperties("authentication.datasource")
    public DataSourceProperties authenticationDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean
    @Primary
    @ConfigurationProperties("authentication.datasource")
    public DataSource authenticationDataSource() {
        return authenticationDataSourceProperties().initializeDataSourceBuilder().build();
    }
}
