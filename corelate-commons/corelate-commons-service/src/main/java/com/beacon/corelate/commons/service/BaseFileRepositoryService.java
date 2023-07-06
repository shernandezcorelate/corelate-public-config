package com.beacon.corelate.commons.service;

import com.beacon.corelate.commons.data.BaseFileRepository;
import com.beacon.corelate.commons.data.dto.BaseFileRepositoryDto;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.data.mapper.OrikaBeanMapper;
import com.beacon.corelate.commons.data.repository.base.BaseJpaRepository;
import io.minio.errors.ErrorResponseException;
import io.minio.errors.InputSizeMismatchException;
import io.minio.errors.InsufficientDataException;
import io.minio.errors.InternalException;
import io.minio.errors.InvalidArgumentException;
import io.minio.errors.InvalidBucketNameException;
import io.minio.errors.NoResponseException;
import org.springframework.web.multipart.MultipartFile;
import org.xmlpull.v1.XmlPullParserException;

import java.io.IOException;
import java.io.Serializable;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

/**
 * @author ddevera
 */
public interface BaseFileRepositoryService<MODEL extends BaseFileRepository, DTO extends BaseFileRepositoryDto, REPO extends BaseJpaRepository, ID extends Serializable, MAPPER extends OrikaBeanMapper>
        extends BaseService<MODEL, DTO, REPO, ID, MAPPER> {

    DTO uploadImage(ID id, String prefix, MultipartFile file) throws IOException, XmlPullParserException, NoSuchAlgorithmException,
            InvalidKeyException, InvalidArgumentException, InvalidBucketNameException, ErrorResponseException,
            InputSizeMismatchException, NoResponseException, InsufficientDataException, InternalException, EntityDoesNotExistException;

    DTO uploadImage(String prefix, MultipartFile file) throws IOException, XmlPullParserException, NoSuchAlgorithmException,
            InvalidKeyException, InvalidArgumentException, InvalidBucketNameException, ErrorResponseException,
            InputSizeMismatchException, NoResponseException, InsufficientDataException, InternalException, EntityDoesNotExistException;
}
