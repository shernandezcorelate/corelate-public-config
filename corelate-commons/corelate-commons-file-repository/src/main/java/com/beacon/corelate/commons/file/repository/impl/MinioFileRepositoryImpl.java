package com.beacon.corelate.commons.file.repository.impl;

import com.beacon.corelate.commons.data.exception.InvalidDataException;
import com.beacon.corelate.commons.file.repository.FileRepository;
import io.minio.MinioClient;
import io.minio.errors.ErrorResponseException;
import io.minio.errors.InputSizeMismatchException;
import io.minio.errors.InsufficientDataException;
import io.minio.errors.InternalException;
import io.minio.errors.InvalidArgumentException;
import io.minio.errors.InvalidBucketNameException;
import io.minio.errors.NoResponseException;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;
import org.xmlpull.v1.XmlPullParserException;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

/**
 * @author ddevera
 */
@Service
@ConditionalOnProperty(name = "file.storage.enabled", havingValue = "true")
public class MinioFileRepositoryImpl implements FileRepository {

    private static final Logger LOG = LoggerFactory.getLogger(MinioFileRepositoryImpl.class);

    @Value("${file.storage.bucketName}")
    private String bucketName;

    @Autowired
    private MinioClient minioClient;

    @PostConstruct
    public void minioFileRepositoryImpl()
            throws InvalidDataException, IOException, InvalidKeyException, NoSuchAlgorithmException, InsufficientDataException, InternalException, NoResponseException, InvalidBucketNameException, XmlPullParserException, ErrorResponseException {
        if (StringUtils.isEmpty(bucketName)) {
            throw new InvalidDataException("Bucket Name should not be empty");
        }

        if (!minioClient.bucketExists(bucketName)) {
            LOG.info("Creating bucket={}", bucketName);
            minioClient.makeBucket(bucketName);
        }
    }

    @Override
    public void putObject(String objectName, InputStream inputStream, Long size)
            throws IOException, InvalidKeyException, NoSuchAlgorithmException, InputSizeMismatchException, InsufficientDataException, InvalidArgumentException, InternalException, NoResponseException, InvalidBucketNameException, XmlPullParserException, ErrorResponseException {
        minioClient.putObject(bucketName, objectName, inputStream, size, null);
    }

    @Override
    public InputStream getObject(String objectName)
            throws IOException, InvalidKeyException, NoSuchAlgorithmException, InsufficientDataException, InvalidArgumentException, InternalException, NoResponseException, InvalidBucketNameException, XmlPullParserException, ErrorResponseException {
        return minioClient.getObject(bucketName, objectName);
    }
}
