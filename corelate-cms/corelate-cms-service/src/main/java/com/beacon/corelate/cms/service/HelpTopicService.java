package com.beacon.corelate.cms.service;

import com.beacon.corelate.cms.dto.HelpTopicDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.HelpTopic;
import com.beacon.corelate.cms.repository.jpa.HelpTopicRepository;

/**
 * Created by epadolina on 7/14/17.
 */
public interface HelpTopicService extends BasePublishableService<HelpTopic, HelpTopicDto, HelpTopicRepository, Long, CmsBeanMapper> {

}
