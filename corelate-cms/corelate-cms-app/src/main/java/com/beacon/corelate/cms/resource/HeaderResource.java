package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.dto.HeaderDto;
import com.beacon.corelate.cms.service.HeaderService;
import com.beacon.corelate.commons.app.resource.BaseSingletonFileRepositoryResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author ddevera
 */
@RestController
@RequestMapping("/header")
public class HeaderResource
        extends BaseSingletonFileRepositoryResource<HeaderDto, HeaderService> {

    public HeaderResource() {
        super(HeaderResource.class);
    }

}
