package com.beacon.corelate.cms.service;

import com.beacon.corelate.cms.dto.SiteHeadDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.SiteHead;
import com.beacon.corelate.cms.repository.jpa.SiteHeadRepository;
import com.beacon.corelate.commons.service.BaseFileRepositoryService;

public interface SiteHeadService  extends BaseFileRepositoryService<SiteHead, SiteHeadDto, SiteHeadRepository, Long, CmsBeanMapper> {
}
