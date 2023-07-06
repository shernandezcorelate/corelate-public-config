package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.dto.FaqDto;
import com.beacon.corelate.cms.resource.base.BasePublishableResource;
import com.beacon.corelate.cms.service.FaqService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by epadolina on 7/12/17.
 */
@RestController
@RequestMapping({"/faq"})
public class FaqResource
        extends BasePublishableResource<FaqDto, Long, FaqService> {

    private static final Logger LOG = LoggerFactory.getLogger(FaqResource.class);

    public FaqResource() {
        super(FaqResource.class);
    }
}
