package com.beacon.corelate.cms.service;

import com.beacon.corelate.cms.dto.ContactFormDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.ContactForm;
import com.beacon.corelate.cms.repository.jpa.ContactFormRepository;
import com.beacon.corelate.commons.service.BaseService;

/**
 * Created by jlava on 9/13/17.
 */
public interface ContactFormService extends BaseService<ContactForm, ContactFormDto, ContactFormRepository, Long, CmsBeanMapper>{
}
