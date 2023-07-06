package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.dto.GridLayoutDto;
import com.beacon.corelate.cms.service.GridLayoutService;
import com.beacon.corelate.commons.app.resource.BaseResource;
import com.beacon.corelate.commons.app.resource.BaseSingletonResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by jlava on 9/17/17.
 */

@RestController
@RequestMapping("/grid-layout")
public class GridLayoutResource
        extends BaseSingletonResource<GridLayoutDto, GridLayoutService> {

    public GridLayoutResource() {
        super(GridLayoutResource.class);
    }
}
