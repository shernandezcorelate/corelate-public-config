package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.dto.SimpleLayoutDto;
import com.beacon.corelate.cms.service.SimpleLayoutService;
import com.beacon.corelate.commons.app.resource.BaseResource;
import com.beacon.corelate.commons.app.resource.BaseSingletonResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by jlava on 9/15/17.
 */

@RestController
@RequestMapping("/simple-layout")
public class SimpleLayoutResource
        extends BaseSingletonResource<SimpleLayoutDto, SimpleLayoutService> {

    public SimpleLayoutResource() {
        super(SimpleLayoutResource.class);
    }
}
