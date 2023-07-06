package com.activiti.extension.conf;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories("com.activiti.extension.mongo.repo")
public class MongoConfiguration extends AbstractMongoConfiguration {
    @Autowired
    private Environment env;

    @Override
    protected String getDatabaseName() {
        return env.getProperty("mongo.archive.db");
    }

    @Override
    public Mongo mongo() throws Exception {
        String host = env.getProperty("mongo.archive.host");
        int port = env.getProperty("mongo.archive.port", Integer.class);
        return new MongoClient(host, port);
    }
}
