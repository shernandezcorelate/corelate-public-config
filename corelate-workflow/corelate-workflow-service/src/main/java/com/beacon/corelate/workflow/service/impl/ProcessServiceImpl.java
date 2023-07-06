package com.beacon.corelate.workflow.service.impl;

import com.activiti.model.runtime.CreateProcessInstanceRepresentation;
import com.activiti.model.runtime.ProcessInstanceRepresentation;
import com.beacon.corelate.workflow.client.BpmnProcessInstanceClient;
import com.beacon.corelate.workflow.dto.ProcessDto;
import com.beacon.corelate.workflow.mapper.WorkflowBeanMapper;
import com.beacon.corelate.workflow.service.ProcessService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author ddevera
 */
@Service
public class ProcessServiceImpl implements ProcessService {

    private static final Logger LOG = LoggerFactory.getLogger(ProcessServiceImpl.class);

    @Autowired
    private BpmnProcessInstanceClient bpmnProcessInstanceClient;

    @Autowired
    private WorkflowBeanMapper mapper;

    @Override
    public ProcessInstanceRepresentation create(ProcessDto processDto) {
        LOG.debug("Creating processInstance with processDto={}", processDto);
        CreateProcessInstanceRepresentation createProcessInstanceRepresentation = mapper.map(processDto, CreateProcessInstanceRepresentation.class);
        return bpmnProcessInstanceClient.startNewProcessInstance(createProcessInstanceRepresentation);
    }

    @Override
    public void cancel(String processInstanceId) {
        LOG.debug("Cancelling processInstance with processInstanceId={}", processInstanceId);
        bpmnProcessInstanceClient.deleteProcessInstance(processInstanceId);
    }
}
