package com.beacon.corelate.catalog.config;

import com.beacon.corelate.catalog.model.Catalog;
import com.beacon.corelate.commons.app.config.BaseApplicationConfig;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * @author ddevera
 */
@Configuration
@EnableJpaRepositories(
        basePackages = "com.beacon.corelate.catalog.repository.jpa",
        repositoryImplementationPostfix = "CustomImpl")
@EntityScan(basePackages = {
        "com.beacon.corelate.commons.app.config",
        "com.beacon.corelate.commons.data",
        "com.beacon.corelate.catalog"})
public class ApplicationConfig extends BaseApplicationConfig {

    @Value("${lucene.queryParser.leadingWildcard}")
    private String allowLeadingWildcard;

    @Bean
    public QueryParser catalogQueryParser() {
        QueryParser queryParser = new QueryParser(Catalog.DEFAULT_QUERY_FIELD_NAME, new StandardAnalyzer());

        // Allows leading wildcards such as * or ?
        queryParser.setAllowLeadingWildcard(Boolean.valueOf(allowLeadingWildcard));

        return queryParser;
    }

}
