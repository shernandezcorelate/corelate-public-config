package com.beacon.corelate.cms.service.impl;

import com.beacon.corelate.cms.dto.HeaderDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.Header;
import com.beacon.corelate.cms.repository.jpa.HeaderRepository;
import com.beacon.corelate.cms.service.HeaderService;
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
 * @author ddevera
 */
@Service
public class HeaderServiceImpl extends BaseFileRepositoryServiceImpl<Header, HeaderDto, HeaderRepository, Long, CmsBeanMapper>
        implements HeaderService {

    public HeaderServiceImpl() {
        super(Header.class, HeaderDto.class);
    }

    @Override
    public HeaderDto uploadImage(String prefix, MultipartFile file) throws IOException, XmlPullParserException, NoSuchAlgorithmException, InvalidKeyException, InvalidArgumentException, InvalidBucketNameException, ErrorResponseException, InputSizeMismatchException, NoResponseException, InsufficientDataException, InternalException, EntityDoesNotExistException {
        Header model = fetchModelFirstEntry();

        model.getFiles().clear();

        return super.uploadImage(model.getId(), prefix, file);
    }
}
