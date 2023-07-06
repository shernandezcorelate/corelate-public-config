package com.beacon.corelate.cms.service.impl;

import com.beacon.corelate.cms.dto.GeneralContentDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.GeneralContent;
import com.beacon.corelate.cms.model.filter.GeneralContentFilter;
import com.beacon.corelate.cms.repository.jpa.GeneralContentRepository;
import com.beacon.corelate.cms.service.GeneralContentService;
import com.beacon.corelate.commons.data.dto.PageDto;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import io.minio.errors.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.xmlpull.v1.XmlPullParserException;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.stream.Collectors;

/**
 * Created by epadolina on 7/13/17.
 */

@Service
public class GeneralContentServiceImpl
        extends BasePublishableServiceImpl<GeneralContent, GeneralContentDto, GeneralContentRepository, Long, CmsBeanMapper>
        implements GeneralContentService {

    @Autowired
    private GeneralContentRepository generalContentRepository;

    @Autowired
    private CmsBeanMapper mapper;

    public GeneralContentServiceImpl() {
        super(GeneralContent.class, GeneralContentDto.class);
    }

    @Override
    public PageDto<GeneralContentDto> list(GeneralContentFilter filter, Pageable pageable) {
        Page<GeneralContent> generalContentPage = generalContentRepository.findByFilter(filter, pageable);

        return PageDto
                .newPageInfo(
                        generalContentPage,
                        generalContentPage
                                .getContent()
                                .stream()
                                .map(generalContent -> postProcessDTO(mapper.map(generalContent, GeneralContentDto.class)))
                                .collect(Collectors.toList()));
    }

    @Override
    public GeneralContentDto uploadImage(Long id, String prefix, MultipartFile file) throws IOException, XmlPullParserException, NoSuchAlgorithmException, InvalidKeyException, InvalidArgumentException, InvalidBucketNameException, ErrorResponseException, InputSizeMismatchException, NoResponseException, InsufficientDataException, InternalException, EntityDoesNotExistException {
        fetchModelById(id).getFiles().clear();

        return super.uploadImage(id, prefix, file);
    }
}
