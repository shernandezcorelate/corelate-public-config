package com.beacon.corelate.cms.config;

import com.beacon.corelate.commons.file.repository.FileRepository;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import io.minio.errors.ErrorResponseException;
import io.minio.errors.InputSizeMismatchException;
import io.minio.errors.InsufficientDataException;
import io.minio.errors.InternalException;
import io.minio.errors.InvalidArgumentException;
import io.minio.errors.InvalidBucketNameException;
import io.minio.errors.NoResponseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.xmlpull.v1.XmlPullParserException;

import javax.annotation.PostConstruct;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

/**
 * @author ddevera
 */
@Configuration
public class TestConfig {

    private static final Logger LOG = LoggerFactory.getLogger(TestConfig.class);

    @Autowired
    private ObjectMapper objectMapper;

    @PostConstruct
    public void objectMapperConfig() {
        this.objectMapper.setSerializationInclusion(JsonInclude.Include.NON_NULL)
                .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
                .configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false)
                .configure(SerializationFeature.WRITE_NULL_MAP_VALUES, false);
    }

    @Bean
    @ConditionalOnProperty(name = "file.storage.enabled", havingValue = "false")
    public FileRepository defaultClient() {
        LOG.info("Initializing default file repository");
        return new FileRepository() {
            @Override
            public void putObject(String objectName, InputStream inputStream, Long size) throws IOException, InvalidKeyException, NoSuchAlgorithmException, InputSizeMismatchException, InsufficientDataException, InvalidArgumentException, InternalException, NoResponseException, InvalidBucketNameException, XmlPullParserException, ErrorResponseException {
                LOG.info("Saving objectName={} to default repository", objectName);
            }

            @Override
            public InputStream getObject(String objectName) throws IOException, InvalidKeyException, NoSuchAlgorithmException, InsufficientDataException, InvalidArgumentException, InternalException, NoResponseException, InvalidBucketNameException, XmlPullParserException, ErrorResponseException {
                LOG.info("Fetching objectName={} to default repository", objectName);
                return this.getClass().getClassLoader().getResourceAsStream("files/corelate-logo.png");
            }
        };
    }
}
