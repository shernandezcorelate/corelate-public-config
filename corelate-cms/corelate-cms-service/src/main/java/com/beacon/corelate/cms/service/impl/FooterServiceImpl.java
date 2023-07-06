package com.beacon.corelate.cms.service.impl;

import com.beacon.corelate.cms.dto.FooterDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.Footer;
import com.beacon.corelate.cms.repository.jpa.FooterRepository;
import com.beacon.corelate.cms.service.FooterService;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.service.impl.BaseFileRepositoryServiceImpl;
import io.minio.errors.*;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.xmlpull.v1.XmlPullParserException;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

/**
 * Created by epadolina on 7/18/17.
 */

@Service
public class FooterServiceImpl
        extends BaseFileRepositoryServiceImpl<Footer, FooterDto, FooterRepository, Long, CmsBeanMapper>
        implements FooterService {

    public FooterServiceImpl() {
        super(Footer.class, FooterDto.class);
    }

    @Override
    public FooterDto uploadImage(String prefix, MultipartFile file) throws IOException, XmlPullParserException, NoSuchAlgorithmException, InvalidKeyException, InvalidArgumentException, InvalidBucketNameException, ErrorResponseException, InputSizeMismatchException, NoResponseException, InsufficientDataException, InternalException, EntityDoesNotExistException {
        Footer model = fetchModelFirstEntry();

        model.getFiles().clear();

        return super.uploadImage(model.getId(), prefix, file);
    }
}
