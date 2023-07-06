package com.beacon.corelate.commons.app.resource;

import com.beacon.corelate.commons.data.dto.BaseFileRepositoryDto;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.file.repository.FileRepository;
import com.beacon.corelate.commons.service.BaseFileRepositoryService;
import io.minio.errors.ErrorResponseException;
import io.minio.errors.InputSizeMismatchException;
import io.minio.errors.InsufficientDataException;
import io.minio.errors.InternalException;
import io.minio.errors.InvalidArgumentException;
import io.minio.errors.InvalidBucketNameException;
import io.minio.errors.NoResponseException;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.xmlpull.v1.XmlPullParserException;

import java.io.IOException;
import java.io.InputStream;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 * @author ddevera
 */
@RestController
@ConditionalOnProperty(name = "file.storage.enabled", havingValue = "true")
public abstract class BaseSingletonFileRepositoryResource<DTO extends BaseFileRepositoryDto, SERVICE extends BaseFileRepositoryService>
        extends BaseSingletonResource {

    private static final Logger LOG = LoggerFactory.getLogger(BaseFileRepositoryResource.class);

    @Autowired
    private FileRepository fileRepository;

    @Autowired
    private SERVICE service;

    public BaseSingletonFileRepositoryResource(Class clazz) {
        super(clazz);
    }

    @RequestMapping(value = "/download/{uid:.+}", method = GET)
    public ResponseEntity<byte[]> download(@PathVariable("uid") String uid)
            throws IOException, XmlPullParserException, NoSuchAlgorithmException,
            InvalidKeyException, InvalidArgumentException, ErrorResponseException,
            NoResponseException, InvalidBucketNameException, InsufficientDataException, InternalException {

        LOG.debug("Fetching singleton file with uid={}", uid);

        InputStream stream = fileRepository.getObject(uid);

        HttpHeaders headers = new HttpHeaders();

        headers.add("content-disposition", "attachment; filename; filename=" + uid);
        headers.set("Pragma", "no-cache");
        headers.set("Cache-Control", "no-cache");

        return new ResponseEntity<>(IOUtils.toByteArray(stream), headers, HttpStatus.OK);
    }

    @RequestMapping(value = "/upload/{prefix}", method = RequestMethod.POST)
    public ResponseEntity<DTO> upload(@PathVariable("prefix") String prefix, MultipartFile file)
            throws EntityDoesNotExistException, IOException, InvalidKeyException, NoSuchAlgorithmException,
            XmlPullParserException, InsufficientDataException, InvalidArgumentException, InternalException,
            InputSizeMismatchException, InvalidBucketNameException, NoResponseException, ErrorResponseException {
        LOG.debug("Uploading image to {} with fileName={} and prefix={}", clazz, file.getOriginalFilename(), prefix);
        return new ResponseEntity<>((DTO) service.uploadImage(prefix, file), HttpStatus.OK);
    }
}
