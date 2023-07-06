package com.beacon.corelate.cms.service.impl;

import com.beacon.corelate.cms.dto.FaqDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.Faq;
import com.beacon.corelate.cms.repository.jpa.FaqRepository;
import com.beacon.corelate.cms.service.FaqService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * Created by epadolina on 7/12/17.
 */

@Service
public class FaqServiceImpl
        extends BasePublishableServiceImpl<Faq, FaqDto, FaqRepository, Long, CmsBeanMapper>
        implements FaqService {

    private static final Logger LOG = LoggerFactory.getLogger(FaqServiceImpl.class);

    public FaqServiceImpl() {
        super(Faq.class, FaqDto.class);
    }
}