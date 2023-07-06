package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.dto.CarouselDto;
import com.beacon.corelate.cms.service.CarouselService;
import com.beacon.corelate.commons.app.resource.BaseSingletonResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by epadolina on 7/12/17.
 */

@RestController
@RequestMapping("/carousel")
public class CarouselResource
        extends BaseSingletonResource<CarouselDto, CarouselService> {

    public CarouselResource() {
        super(CarouselResource.class);
    }
}
