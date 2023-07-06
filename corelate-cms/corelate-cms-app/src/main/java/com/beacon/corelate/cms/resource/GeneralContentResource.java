package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.dto.GeneralContentDto;
import com.beacon.corelate.cms.model.filter.GeneralContentFilter;
import com.beacon.corelate.cms.resource.base.BasePublishableResource;
import com.beacon.corelate.cms.service.GeneralContentService;
import com.beacon.corelate.commons.data.dto.PageDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 * Created by epadolina on 7/13/17.
 */

@RestController
@RequestMapping("/general-content")
public class GeneralContentResource extends BasePublishableResource<GeneralContentDto, Long, GeneralContentService> {

    private static Logger LOG = LoggerFactory.getLogger(GeneralContentResource.class);

    @Autowired
    private GeneralContentService generalContentService;

    public GeneralContentResource() {
        super(GeneralContentResource.class);
    }


    @RequestMapping(method = GET, params = {"category", "published"})
    public ResponseEntity<PageDto<GeneralContentDto>> getByCategory(GeneralContentFilter filter, Pageable pageable) {
        LOG.debug("Fetching general content with filter={} and pageable={}", filter, pageable);
        return new ResponseEntity<>(generalContentService.list(filter, pageable), HttpStatus.OK);
    }
}
