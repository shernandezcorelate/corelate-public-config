package com.beacon.corelate.cms.service;

import com.beacon.corelate.cms.dto.GridItemDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.GridItem;
import com.beacon.corelate.cms.repository.jpa.GridItemRepository;
import com.beacon.corelate.commons.service.BaseFileRepositoryService;

/**
 * Created by jlava on 9/19/17.
 */
public interface GridItemService
        extends BaseFileRepositoryService<GridItem, GridItemDto, GridItemRepository, Long, CmsBeanMapper> {
}
