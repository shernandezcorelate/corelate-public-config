package com.beacon.corelate.cms.service;

import com.beacon.corelate.cms.dto.ContactInfoDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.ContactInfo;
import com.beacon.corelate.cms.repository.jpa.ContactInfoRepository;
import com.beacon.corelate.commons.service.BaseService;

/**
 * Created by jlava on 9/12/17.
 */
public interface ContactInfoService extends BaseService<ContactInfo, ContactInfoDto, ContactInfoRepository, Long, CmsBeanMapper>{

}
