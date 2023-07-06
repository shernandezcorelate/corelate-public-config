package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.dto.CarouselSlideDto;
import com.beacon.corelate.cms.resource.base.BasePublishableResource;
import com.beacon.corelate.cms.service.CarouselSlideService;
import com.beacon.corelate.commons.app.resource.BaseFileRepositoryResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author ddevera
 */
@RestController
@RequestMapping("carousel-slide")
public class CarouselSlideResource extends BasePublishableResource<CarouselSlideDto, Long, CarouselSlideService> {

    public CarouselSlideResource() {
        super(CarouselSlideResource.class);
    }
}
