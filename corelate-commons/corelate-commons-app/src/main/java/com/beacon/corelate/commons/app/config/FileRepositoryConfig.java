package com.beacon.corelate.commons.app.config;

import io.minio.MinioClient;
import io.minio.errors.InvalidEndpointException;
import io.minio.errors.InvalidPortException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author ddevera
 */
@Configuration
public class FileRepositoryConfig {

    private static final Logger LOG = LoggerFactory.getLogger(FileRepositoryConfig.class);

    @Value("${file.storage.domain}")
    private String domain;

    @Value("${file.storage.accessKey}")
    private String accessKey;

    @Value("${file.storage.secretKey}")
    private String secretKey;

    @Bean
    @ConditionalOnProperty(name = "file.storage.enabled", havingValue = "true")
    public MinioClient minioClient() throws InvalidPortException, InvalidEndpointException {
        LOG.info("Initializing connection to FS with domain={}, accessKey={} and secretKey={}", domain, accessKey, secretKey);
        return new MinioClient(domain, accessKey, secretKey);
    }
}
