package com.beacon.corelate.cms.service.impl;

import com.beacon.corelate.cms.dto.GridLayoutDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.GridLayout;
import com.beacon.corelate.cms.repository.jpa.GridLayoutRepository;
import com.beacon.corelate.cms.service.GridLayoutService;
import com.beacon.corelate.commons.service.impl.BaseServiceImpl;
import org.springframework.stereotype.Service;

/**
 * Created by jlava on 9/17/17.
 */

@Service
public class GridLayoutServiceImpl
        extends BaseServiceImpl<GridLayout, GridLayoutDto, GridLayoutRepository, Long, CmsBeanMapper>
        implements GridLayoutService {

    public GridLayoutServiceImpl() {
        super(GridLayout.class, GridLayoutDto.class);
    }
}
