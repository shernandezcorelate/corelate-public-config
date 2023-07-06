package com.beacon.corelate.cms.service.impl;

import com.beacon.corelate.cms.dto.CarouselDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.Carousel;
import com.beacon.corelate.cms.repository.jpa.CarouselRepository;
import com.beacon.corelate.cms.service.CarouselService;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.service.impl.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by epadolina on 7/12/17.
 */

@Service
public class CarouselServiceImpl
        extends BaseServiceImpl<Carousel, CarouselDto, CarouselRepository, Long, CmsBeanMapper>
        implements CarouselService {

    public CarouselServiceImpl() {
        super(Carousel.class, CarouselDto.class);
    }
}
