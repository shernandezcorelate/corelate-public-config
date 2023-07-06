package com.beacon.corelate.cms.service;

import com.beacon.corelate.cms.dto.CarouselSlideDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.CarouselSlide;
import com.beacon.corelate.cms.repository.jpa.CarouselSlideRepository;
import com.beacon.corelate.commons.service.BaseFileRepositoryService;

/**
 * @author ddevera
 */
public interface CarouselSlideService
        extends BasePublishableService<CarouselSlide, CarouselSlideDto, CarouselSlideRepository, Long, CmsBeanMapper> {
}
