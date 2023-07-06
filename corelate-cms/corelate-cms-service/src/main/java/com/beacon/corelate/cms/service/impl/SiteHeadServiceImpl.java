package com.beacon.corelate.cms.service.impl;

import com.beacon.corelate.cms.dto.SiteHeadDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.SiteHead;
import com.beacon.corelate.cms.repository.jpa.SiteHeadRepository;
import com.beacon.corelate.cms.service.SiteHeadService;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.file.repository.FileRepository;
import com.beacon.corelate.commons.service.impl.BaseFileRepositoryServiceImpl;
import io.minio.errors.*;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.xmlpull.v1.XmlPullParserException;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

@Service
public class SiteHeadServiceImpl extends BaseFileRepositoryServiceImpl<SiteHead, SiteHeadDto, SiteHeadRepository, Long, CmsBeanMapper>
        implements SiteHeadService {
    @Autowired
    private FileRepository fileRepository;

    @Autowired
    private CmsBeanMapper mapper;

    @Autowired
    private SiteHeadRepository repository;

    public SiteHeadServiceImpl() {
        super(SiteHead.class, SiteHeadDto.class);
    }

    @Override
    public SiteHeadDto uploadImage(String prefix, MultipartFile file) throws IOException, XmlPullParserException, NoSuchAlgorithmException, InvalidKeyException, InvalidArgumentException, InvalidBucketNameException, ErrorResponseException, InputSizeMismatchException, NoResponseException, InsufficientDataException, InternalException, EntityDoesNotExistException {
        SiteHead model = fetchModelFirstEntry();

        model.getFiles().clear();

        String objectName = "head-favicon.ico";

        fileRepository.putObject(objectName, file.getInputStream(), file.getSize());

        model.getFiles().add(objectName);

        return postProcessDTO(mapper.map(repository.save(model), dtoClass));
    }
}
