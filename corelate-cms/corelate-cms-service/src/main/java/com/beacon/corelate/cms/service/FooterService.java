package com.beacon.corelate.cms.service;

import com.beacon.corelate.cms.dto.FooterDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.Footer;
import com.beacon.corelate.cms.repository.jpa.FooterRepository;
import com.beacon.corelate.commons.service.BaseFileRepositoryService;
import com.beacon.corelate.commons.service.BaseService;

/**
 * Created by epadolina on 7/18/17.
 */
public interface FooterService extends BaseFileRepositoryService<Footer, FooterDto, FooterRepository, Long, CmsBeanMapper> {

}
