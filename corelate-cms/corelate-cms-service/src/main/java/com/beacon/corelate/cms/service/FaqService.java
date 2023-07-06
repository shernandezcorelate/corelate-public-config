package com.beacon.corelate.cms.service;

import com.beacon.corelate.cms.dto.FaqDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.Faq;
import com.beacon.corelate.cms.repository.jpa.FaqRepository;

/**
 * Created by epadolina on 7/12/17.
 */
public interface FaqService extends BasePublishableService<Faq, FaqDto, FaqRepository, Long, CmsBeanMapper> {
}
