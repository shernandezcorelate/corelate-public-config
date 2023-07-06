package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.dto.ContactFormDto;
import com.beacon.corelate.cms.service.ContactFormService;
import com.beacon.corelate.commons.app.resource.BaseResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by jlava on 9/13/17.
 */

@RestController
@RequestMapping("/contact-form")
public class ContactFormResource
        extends BaseResource<ContactFormDto, Long, ContactFormService>{

    public ContactFormResource() { super(ContactFormResource.class); }
}
