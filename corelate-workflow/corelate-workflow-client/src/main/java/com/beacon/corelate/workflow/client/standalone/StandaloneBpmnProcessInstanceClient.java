package com.beacon.corelate.workflow.client.standalone;

import com.activiti.model.runtime.CreateProcessInstanceRepresentation;
import com.activiti.model.runtime.ProcessInstanceRepresentation;
import com.beacon.corelate.workflow.client.BpmnProcessInstanceClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author ddevera
 */
public class StandaloneBpmnProcessInstanceClient implements BpmnProcessInstanceClient {

    private static final Logger LOG = LoggerFactory.getLogger(StandaloneBpmnProcessInstanceClient.class);

    @Override
    public ProcessInstanceRepresentation startNewProcessInstance(CreateProcessInstanceRepresentation createProcessInstanceRepresentation) {
        LOG.debug("Starting process instance with createProcessInstanceRepresentation={}", createProcessInstanceRepresentation);
        ProcessInstanceRepresentation processInstanceRepresentation = new ProcessInstanceRepresentation();

        return processInstanceRepresentation;
    }

    @Override
    public void deleteProcessInstance(String processInstanceId) {

    }
}
