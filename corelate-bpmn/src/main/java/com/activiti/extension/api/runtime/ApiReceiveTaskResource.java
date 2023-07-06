package com.activiti.extension.api.runtime;

import org.activiti.engine.ActivitiObjectNotFoundException;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.runtime.Execution;
import org.activiti.engine.runtime.ProcessInstance;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

/**
 * @author ddevera
 */
@RestController
@RequestMapping({"/enterprise"})
public class ApiReceiveTaskResource {

    private static final Logger LOG = LoggerFactory.getLogger(ApiReceiveTaskResource.class);

    @Autowired
    protected RuntimeService runtimeService;

    @ResponseStatus(OK)
    @RequestMapping(value = "/receive-task/{processInstanceId}/{activitiId}", method = POST, produces = {
            "application/json"}, consumes = "application/json")
    public void receiveTaskEvent(@PathVariable("processInstanceId") String processInstanceId,
                                 @PathVariable("activitiId") String activitiId,
                                 @RequestBody Map<String, Object> variables) {
        LOG.info("Signalling process {} with {}", processInstanceId, activitiId);

        Execution execution = runtimeService
                .createExecutionQuery()
                .processInstanceId(processInstanceId)
                .activityId(activitiId)
                .singleResult();

        if (execution == null) {
            throw new ActivitiObjectNotFoundException("Could not find a process instance with id \'" + processInstanceId + "\'.",
                    ProcessInstance.class);
        }

        LOG.info("Processing execution {}", execution);

        runtimeService.signal(execution.getId(), variables);
        LOG.info("Signalled process {} with {}", execution.getId(), variables);
    }
}
