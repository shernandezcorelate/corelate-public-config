package com.beacon.corelate.rules.config;

import com.beacon.corelate.rules.config.support.FileStorageHelper;
import com.beacon.corelate.rules.config.support.FileStorageProperties;
import com.beacon.corelate.rules.config.support.LocalFSHelper;
import com.beacon.corelate.rules.config.support.RemoteFSHelper;
import io.minio.MinioClient;
import io.minio.errors.InvalidEndpointException;
import io.minio.errors.InvalidPortException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FileStorageConfig {

    @Autowired
    private FileStorageProperties fileStorageProperties;

    @Bean
    @ConditionalOnMissingBean(FileStorageHelper.class)
    @ConditionalOnProperty(name = "isv.storage.client-type", havingValue = "REMOTE")
    public FileStorageHelper remoteFSHelper() throws InvalidPortException, InvalidEndpointException {
        FileStorageProperties.RemoteConfig config = fileStorageProperties.getRemote();
        MinioClient mc = new MinioClient(config.getUrl(), config.getAccessKey(), config.getSecretKey());

        return new RemoteFSHelper(mc);
    }
    @Bean
    @ConditionalOnMissingBean(FileStorageHelper.class)
    @ConditionalOnProperty(name = "isv.storage.client-type", havingValue = "LOCAL")
    public FileStorageHelper localFSHelper() {
        return new LocalFSHelper(fileStorageProperties);
    }
}
