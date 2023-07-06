package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.dto.SiteHeadDto;
import com.beacon.corelate.cms.service.SiteHeadService;
import com.beacon.corelate.commons.app.resource.BaseSingletonFileRepositoryResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/site-head")
public class SiteHeadResource extends BaseSingletonFileRepositoryResource<SiteHeadDto, SiteHeadService>{

    public SiteHeadResource() {
        super(SiteHeadResource.class);
    }
}
