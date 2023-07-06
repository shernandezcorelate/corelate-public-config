package com.beacon.corelate.workflow.resource;

import com.beacon.corelate.workflow.dto.ProcessDefinitionDto;
import com.beacon.corelate.workflow.service.ProcessDefinitionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.net.URISyntaxException;
import java.util.List;

/**
 * @author ddevera
 */
@RestController
@RequestMapping("process-definition")
public class ProcessDefinitionResource {

    private static final Logger LOG = LoggerFactory.getLogger(ProcessResource.class);

    @Autowired
    private ProcessDefinitionService processDefinitionService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<ProcessDefinitionDto>> getList() throws URISyntaxException {
        LOG.debug("Fetching default available process");
        return new ResponseEntity<>(processDefinitionService.getList(), HttpStatus.OK);
    }
}
