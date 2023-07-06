package com.beacon.corelate.cms.service;

import com.beacon.corelate.cms.dto.HeaderDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.Header;
import com.beacon.corelate.cms.repository.jpa.HeaderRepository;
import com.beacon.corelate.commons.service.BaseFileRepositoryService;

/**
 * @author ddevera
 */
public interface HeaderService extends BaseFileRepositoryService<Header, HeaderDto, HeaderRepository, Long, CmsBeanMapper> {

}
