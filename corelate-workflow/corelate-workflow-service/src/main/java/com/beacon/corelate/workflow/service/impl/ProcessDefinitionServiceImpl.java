package com.beacon.corelate.workflow.service.impl;

import com.beacon.corelate.workflow.client.BpmnProcessDefinitionClient;
import com.beacon.corelate.workflow.dto.ProcessDefinitionDto;
import com.beacon.corelate.workflow.service.ProcessDefinitionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.net.URISyntaxException;
import java.util.List;

/**
 * @author ddevera
 */
@Service
public class ProcessDefinitionServiceImpl implements ProcessDefinitionService {

    @Autowired
    private BpmnProcessDefinitionClient bpmnProcessDefinitionClient;

    @Override
    public List<ProcessDefinitionDto> getList() throws URISyntaxException {
        return bpmnProcessDefinitionClient.getProcessDefinitions().getData();
    }
}
