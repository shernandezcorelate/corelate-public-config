package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.dto.TextTemplateDto;
import com.beacon.corelate.cms.service.TextTemplateService;
import com.beacon.corelate.commons.app.resource.BaseResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author ddevera
 */
@RestController
@RequestMapping("/text-template")
public class TextTemplateResource
        extends BaseResource<TextTemplateDto, Long, TextTemplateService> {

    public TextTemplateResource() {
        super(TextTemplateResource.class);
    }
}
