package com.beacon.corelate.cms.service.impl;

import com.beacon.corelate.cms.dto.HelpTopicDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.HelpTopic;
import com.beacon.corelate.cms.repository.jpa.HelpTopicRepository;
import com.beacon.corelate.cms.service.HelpTopicService;
import org.springframework.stereotype.Service;

/**
 * Created by epadolina on 7/14/17.
 */
@Service
public class HelpTopicServiceImpl
        extends BasePublishableServiceImpl<HelpTopic, HelpTopicDto, HelpTopicRepository, Long, CmsBeanMapper>
        implements HelpTopicService {

    public HelpTopicServiceImpl() {
        super(HelpTopic.class, HelpTopicDto.class);
    }

}
