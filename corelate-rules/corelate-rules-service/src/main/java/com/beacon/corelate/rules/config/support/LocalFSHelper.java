package com.beacon.corelate.rules.config.support;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

public class LocalFSHelper implements FileStorageHelper {
    private static final Logger LOG = LoggerFactory.getLogger(LocalFSHelper.class);

    private FileStorageProperties.LocalConfig fsProps;

    public LocalFSHelper(FileStorageProperties fsProps) {
        this.fsProps = fsProps.getLocal();
    }

    @Override
    public void putObject(String bucketName, String objectName, MultipartFile rulesMultipart) {
        try {
            File parentDir = new File(StringUtils.join(
                    new String[]{fsProps.getRootFolder(), bucketName}, File.separatorChar));
            if (!parentDir.exists()) {
                parentDir.mkdir();
            }
            File rulesFile = new File(parentDir.getAbsolutePath(), objectName);

            rulesMultipart.transferTo(rulesFile);
        } catch (IOException ex) {
            throw new RuntimeException("An error has occurred", ex);
        }
    }

    @Override
    public File getObject(String bucketName, String objectName) {
        try {
            File rulesFile = new File(StringUtils.join(new String[]{fsProps.getRootFolder(),
                    bucketName, objectName}, File.separatorChar));

            if (!rulesFile.exists()) {
                throw new IOException("File does not exist");
            }

            if (rulesFile.isDirectory()) {
                throw new IOException("File is a directory");
            }
            return rulesFile;
        } catch (IOException ex) {
            throw new RuntimeException("An error has occurred", ex);
        }
    }
}
