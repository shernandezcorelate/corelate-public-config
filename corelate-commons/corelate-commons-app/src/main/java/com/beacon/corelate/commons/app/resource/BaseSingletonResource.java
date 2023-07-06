package com.beacon.corelate.commons.app.resource;

import com.beacon.corelate.commons.data.dto.BaseDto;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.service.BaseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @author ddevera
 */
public class BaseSingletonResource<DTO extends BaseDto, SERVICE extends BaseService> {

    private static Logger LOG = null;

    protected Class clazz;

    @Autowired
    private SERVICE service;

    public BaseSingletonResource(Class clazz) {
        this.clazz = clazz;
        this.LOG = LoggerFactory.getLogger(clazz);
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<DTO> get() throws EntityDoesNotExistException {
        LOG.debug("Fetching data with for class={}", clazz);
        return new ResponseEntity<>((DTO) service.get(), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<DTO> update(@RequestBody DTO dto) throws EntityDoesNotExistException {
        LOG.debug("Updating data with DTO={}", dto);
        return new ResponseEntity<>((DTO) service.update(dto), HttpStatus.OK);
    }
}
