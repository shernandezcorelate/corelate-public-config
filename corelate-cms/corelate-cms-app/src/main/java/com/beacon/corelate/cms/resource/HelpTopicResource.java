package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.dto.HelpTopicDto;
import com.beacon.corelate.cms.resource.base.BasePublishableResource;
import com.beacon.corelate.cms.service.HelpTopicService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by epadolina on 7/14/17.
 */

@RestController
@RequestMapping("/help-topic")
public class HelpTopicResource
        extends BasePublishableResource<HelpTopicDto, Long, HelpTopicService> {

    public HelpTopicResource() {
        super(HelpTopicResource.class);
    }
}
