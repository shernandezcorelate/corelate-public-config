package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.dto.FooterDto;
import com.beacon.corelate.cms.service.FooterService;
import com.beacon.corelate.commons.app.resource.BaseSingletonFileRepositoryResource;
import com.beacon.corelate.commons.app.resource.BaseSingletonResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by epadolina on 7/18/17.
 */

@RestController
@RequestMapping("/footer")
public class FooterResource
        extends BaseSingletonFileRepositoryResource<FooterDto, FooterService> {

    public FooterResource() {
        super(FooterResource.class);
    }
}
