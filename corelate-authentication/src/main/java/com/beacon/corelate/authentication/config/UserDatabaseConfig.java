package com.beacon.corelate.authentication.config;

import com.google.common.collect.Maps;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.Map;

/**
 * @author ddevera
 */
@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(
        entityManagerFactoryRef = "userLocalContainerEntityManagerFactoryBean",
        basePackages = "com.beacon.corelate.authentication.repository.jpa.user",
        transactionManagerRef = "userTransactionManagerBean"
)
@EntityScan(basePackages = "com.beacon.corelate.commons.data")
public class UserDatabaseConfig {

    @Bean
    public LocalContainerEntityManagerFactoryBean userLocalContainerEntityManagerFactoryBean(EntityManagerFactoryBuilder builder) {
        Map<String, Object> configuration = Maps.newHashMap();
        configuration.put("hibernate.hbm2ddl.auto", "update");

        return builder
                .dataSource(userDataSource())
                .packages(
                        "com.beacon.corelate.authentication.model.user",
                        "com.beacon.corelate.commons.data.model")
                .persistenceUnit("user")
                .properties(configuration)
                .build();
    }

    @Bean
    @ConfigurationProperties("user.datasource")
    public DataSourceProperties userDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean
    @ConfigurationProperties("user.datasource")
    public DataSource userDataSource() {
        return userDataSourceProperties().initializeDataSourceBuilder().build();
    }

    @Bean(name = "userTransactionManagerBean")
    public PlatformTransactionManager userTransactionManagerBean(EntityManagerFactoryBuilder builder) {
        JpaTransactionManager userTransactionManager = new JpaTransactionManager();

        userTransactionManager.setEntityManagerFactory(userLocalContainerEntityManagerFactoryBean(builder).getObject());
        userTransactionManager.setDataSource(userDataSource());

        return userTransactionManager;
    }
}
