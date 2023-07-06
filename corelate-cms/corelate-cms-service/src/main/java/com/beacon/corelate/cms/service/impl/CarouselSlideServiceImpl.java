package com.beacon.corelate.cms.service.impl;

import com.beacon.corelate.cms.dto.CarouselSlideDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.CarouselSlide;
import com.beacon.corelate.cms.repository.jpa.CarouselSlideRepository;
import com.beacon.corelate.cms.service.CarouselSlideService;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
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
public class CarouselSlideServiceImpl
        extends BasePublishableServiceImpl<CarouselSlide, CarouselSlideDto, CarouselSlideRepository, Long, CmsBeanMapper>
        implements CarouselSlideService {

    public CarouselSlideServiceImpl() {
        super(CarouselSlide.class, CarouselSlideDto.class);
    }

    @Override
    public CarouselSlideDto uploadImage(Long id, String prefix, MultipartFile file) throws IOException, XmlPullParserException, NoSuchAlgorithmException, InvalidKeyException, InvalidArgumentException, InvalidBucketNameException, ErrorResponseException, InputSizeMismatchException, NoResponseException, InsufficientDataException, InternalException, EntityDoesNotExistException {
        fetchModelById(id).getFiles().clear();

        return super.uploadImage(id, prefix, file);
    }
}
