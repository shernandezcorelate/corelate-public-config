package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.dto.ColorConfigDto;
import com.beacon.corelate.cms.service.ColorConfigService;
import com.beacon.corelate.commons.app.resource.BaseSingletonResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by jlava on 09/26/17
 */

@RestController
@RequestMapping("/color-config")
public class ColorConfigResource
        extends BaseSingletonResource<ColorConfigDto, ColorConfigService> {

    public ColorConfigResource() {
        super(ColorConfigResource.class);
    }
}