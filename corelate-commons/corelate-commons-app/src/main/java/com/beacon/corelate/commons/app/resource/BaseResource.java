package com.beacon.corelate.commons.app.resource;

import com.beacon.corelate.commons.data.dto.BaseDto;
import com.beacon.corelate.commons.data.dto.PageDto;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.service.BaseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.io.Serializable;

/**
 * @author ddevera
 */
public abstract class BaseResource<DTO extends BaseDto, ID extends Serializable, SERVICE extends BaseService> {

    private static Logger LOG = null;

    @Autowired
    private SERVICE service;

    public BaseResource(Class clazz) {
        this.LOG = LoggerFactory.getLogger(clazz);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<DTO> get(@PathVariable ID id) throws EntityDoesNotExistException {
        LOG.debug("Fetching data with id={}", id);
        return new ResponseEntity<>((DTO) service.get(id), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<PageDto<DTO>> getList(Pageable pageable) throws EntityDoesNotExistException {
        LOG.debug("Fetching data with pageable={}", pageable);
        return new ResponseEntity(service.list(pageable), HttpStatus.OK);
    }


    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<DTO> create(@RequestBody DTO dto) throws Exception {
        LOG.debug("Creating data with DTO={}", dto);
        return new ResponseEntity<>((DTO) service.create(dto), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<DTO> update(@PathVariable ID id, @RequestBody DTO dto) throws EntityDoesNotExistException {
        LOG.debug("Updating data with id={} and DTO={}", id, dto);
        return new ResponseEntity<>((DTO) service.update(dto, id), HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) throws EntityDoesNotExistException {
        LOG.debug("Deleting data with id={} and DTO={}", id);
        service.delete(id);
    }
}
