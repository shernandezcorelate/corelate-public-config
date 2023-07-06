package com.beacon.corelate.cms.service;

import com.beacon.corelate.cms.dto.SimpleLayoutDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.SimpleLayout;
import com.beacon.corelate.cms.repository.jpa.SimpleLayoutRepository;
import com.beacon.corelate.commons.service.BaseService;

/**
 * Created by jlava on 9/15/17.
 */
public interface SimpleLayoutService extends BaseService<SimpleLayout, SimpleLayoutDto, SimpleLayoutRepository, Long, CmsBeanMapper> {
}
