package com.beacon.corelate.rules.config.support;

import io.minio.MinioClient;
import io.minio.errors.MinioException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;
import org.xmlpull.v1.XmlPullParserException;

import java.io.File;
import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;

public class RemoteFSHelper implements FileStorageHelper {

    private static final Logger LOG = LoggerFactory.getLogger(RemoteFSHelper.class);

    private MinioClient mc;

    public RemoteFSHelper(MinioClient mc) {
        this.mc = mc;
    }

    @Override
    public void putObject(String bucketName, String objectName, MultipartFile rulesMultipart) {
        try {
            File tempFile = new File(System.getProperty("java.io.tmpdir"),
                    "rules_" + java.time.LocalDateTime.now().toString() + rulesMultipart.getOriginalFilename());
            rulesMultipart.transferTo(tempFile);

            boolean bucketExists = mc.bucketExists(bucketName);
            if (!bucketExists) {
                mc.makeBucket(bucketName);
            }

            mc.putObject(bucketName, objectName, tempFile.getAbsolutePath());
        } catch (IOException | InvalidKeyException | XmlPullParserException |
                NoSuchAlgorithmException | MinioException ex) {
            throw new RuntimeException("An error has occurred", ex);
        }
    }

    @Override
    public File getObject(String bucketName, String objectName) {
        try {
            mc.statObject(bucketName, objectName);

            File ruleFile = new File(System.getProperty("java.io.tmpdir"), "rules_" + LocalDateTime.now().toString() + objectName);

            mc.getObject(bucketName, objectName, ruleFile.getAbsolutePath());

            return ruleFile;
        } catch (NoSuchAlgorithmException | XmlPullParserException | MinioException | InvalidKeyException | IOException ex) {
            throw new RuntimeException("An error has occurred", ex);
        }
    }
}
