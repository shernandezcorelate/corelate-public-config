package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.dto.GridItemDto;
import com.beacon.corelate.cms.service.GridItemService;
import com.beacon.corelate.commons.app.resource.BaseFileRepositoryResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by jlava on 9/19/17.
 */

@RestController
@RequestMapping("/grid-item")
public class GridItemResource extends BaseFileRepositoryResource<GridItemDto, Long, GridItemService> {

    public GridItemResource() {
        super(GridItemResource.class);
    }
}
