package com.beacon.corelate.cms.resource.base;

import com.beacon.corelate.cms.dto.BasePublishableContentDto;
import com.beacon.corelate.cms.service.BasePublishableService;
import com.beacon.corelate.commons.app.resource.BaseFileRepositoryResource;
import com.beacon.corelate.commons.data.dto.PageDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.Serializable;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

/**
 * Created by epadolina on 8/15/17.
 */
public abstract class BasePublishableResource<DTO extends BasePublishableContentDto, ID extends Serializable, SERVICE extends BasePublishableService>
        extends BaseFileRepositoryResource<DTO, ID, SERVICE> {

    private static Logger LOG = null;

    private Class clazz;

    @Autowired
    private SERVICE service;

    public BasePublishableResource(Class clazz) {
        super(clazz);

        this.LOG = LoggerFactory.getLogger(clazz);
        this.clazz = clazz;
    }


    @RequestMapping(value = "/published", method = GET)
    public ResponseEntity<PageDto<DTO>> getPublished(Pageable pageable) {
        LOG.debug("Fetching published articles for={}", clazz);
        return new ResponseEntity(service.getPublished(pageable), HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/publish", method = PUT)
    public ResponseEntity<DTO> publish(@PathVariable Long id) {
        LOG.debug("Publishing id={} for={}", id, clazz);
        return new ResponseEntity<>((DTO) service.updatePublishStatus(id, Boolean.TRUE), HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/unpublish", method = PUT)
    public ResponseEntity<DTO> unpublish(@PathVariable Long id) {
        LOG.debug("Publishing id={} for={}", id, clazz);
        return new ResponseEntity<>((DTO) service.updatePublishStatus(id, Boolean.FALSE), HttpStatus.OK);
    }
}
