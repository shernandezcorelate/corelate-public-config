package com.beacon.corelate.cms.service.impl;

import com.beacon.corelate.cms.dto.SimpleLayoutDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.SimpleLayout;
import com.beacon.corelate.cms.repository.jpa.SimpleLayoutRepository;
import com.beacon.corelate.cms.service.SimpleLayoutService;
import com.beacon.corelate.commons.service.impl.BaseServiceImpl;
import org.springframework.stereotype.Service;

/**
 * Created by jlava on 9/15/17.
 */

@Service
public class SimpleLayoutServiceImpl
        extends BaseServiceImpl<SimpleLayout, SimpleLayoutDto, SimpleLayoutRepository, Long, CmsBeanMapper>
        implements SimpleLayoutService{

    public SimpleLayoutServiceImpl() {
        super(SimpleLayout.class, SimpleLayoutDto.class);
    }
}
