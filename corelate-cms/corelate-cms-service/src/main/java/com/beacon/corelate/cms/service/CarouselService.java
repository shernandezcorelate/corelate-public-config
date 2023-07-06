package com.beacon.corelate.cms.service;

import com.beacon.corelate.cms.dto.CarouselDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.Carousel;
import com.beacon.corelate.cms.repository.jpa.CarouselRepository;
import com.beacon.corelate.commons.service.BaseService;

/**
 * Created by epadolina on 7/12/17.
 */
public interface CarouselService
        extends BaseService<Carousel, CarouselDto, CarouselRepository, Long, CmsBeanMapper> {
}
