package com.beacon.corelate.commons.file.repository;

import io.minio.errors.ErrorResponseException;
import io.minio.errors.InputSizeMismatchException;
import io.minio.errors.InsufficientDataException;
import io.minio.errors.InternalException;
import io.minio.errors.InvalidArgumentException;
import io.minio.errors.InvalidBucketNameException;
import io.minio.errors.NoResponseException;
import org.xmlpull.v1.XmlPullParserException;

import java.io.IOException;
import java.io.InputStream;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

/**
 * @author ddevera
 */
public interface FileRepository {

    void putObject(String objectName, InputStream inputStream, Long size) throws IOException, InvalidKeyException, NoSuchAlgorithmException, InputSizeMismatchException, InsufficientDataException, InvalidArgumentException, InternalException, NoResponseException, InvalidBucketNameException, XmlPullParserException, ErrorResponseException;

    InputStream getObject(String objectName) throws IOException, InvalidKeyException, NoSuchAlgorithmException, InsufficientDataException, InvalidArgumentException, InternalException, NoResponseException, InvalidBucketNameException, XmlPullParserException, ErrorResponseException;
}
