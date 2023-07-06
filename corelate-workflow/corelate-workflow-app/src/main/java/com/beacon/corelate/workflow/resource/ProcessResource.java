package com.beacon.corelate.workflow.resource;

import com.activiti.model.runtime.ProcessInstanceRepresentation;
import com.beacon.corelate.workflow.dto.ProcessDto;
import com.beacon.corelate.workflow.service.ProcessService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author ddevera
 */
@RestController
@RequestMapping("/process")
public class ProcessResource {

    private static final Logger LOG = LoggerFactory.getLogger(ProcessResource.class);

    @Autowired
    private ProcessService processService;

    @RequestMapping(value = "/start", method = RequestMethod.POST)
    public ResponseEntity<ProcessInstanceRepresentation> start(@RequestBody ProcessDto processDto) {
        LOG.debug("Creating process with processDto={}", processDto);
        return new ResponseEntity<>(processService.create(processDto), HttpStatus.OK);
    }
}
