package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.dto.ContactInfoDto;
import com.beacon.corelate.cms.service.ContactInfoService;
import com.beacon.corelate.commons.app.resource.BaseResource;
import com.beacon.corelate.commons.app.resource.BaseSingletonResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by jlava on 9/12/17.
 */

@RestController
@RequestMapping("/contact-info")
public class ContactInfoResource
        extends BaseSingletonResource<ContactInfoDto, ContactInfoService> {

    public ContactInfoResource() { super(ContactInfoResource.class); }
}
