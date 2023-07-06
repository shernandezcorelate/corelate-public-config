package com.beacon.corelate.cms.service.impl;

import com.beacon.corelate.cms.dto.ContactInfoDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.ContactInfo;
import com.beacon.corelate.cms.repository.jpa.ContactInfoRepository;
import com.beacon.corelate.cms.service.ContactInfoService;
import com.beacon.corelate.commons.service.impl.BaseServiceImpl;
import org.springframework.stereotype.Service;

/**
 * Created by jlava on 9/12/17.
 */

@Service
public class ContactInfoServiceImpl
        extends BaseServiceImpl<ContactInfo, ContactInfoDto, ContactInfoRepository, Long, CmsBeanMapper>
        implements ContactInfoService{

    public ContactInfoServiceImpl() { super(ContactInfo.class, ContactInfoDto.class); }
}
