package com.beacon.corelate.cms.service;

import com.beacon.corelate.cms.dto.GridLayoutDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.GridLayout;
import com.beacon.corelate.cms.repository.jpa.GridLayoutRepository;
import com.beacon.corelate.commons.service.BaseService;

/**
 * Created by jlava on 9/17/17.
 */
public interface GridLayoutService
        extends BaseService<GridLayout, GridLayoutDto, GridLayoutRepository, Long, CmsBeanMapper> {
}
