package com.beacon.corelate.rules.config.support;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;

public interface FileStorageHelper {

    void putObject(String bucketName, String objectName, MultipartFile rulesMultipart);

    File getObject(String bucketName, String objectName);
}
