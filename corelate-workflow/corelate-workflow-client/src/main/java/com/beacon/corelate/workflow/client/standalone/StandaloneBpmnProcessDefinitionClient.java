package com.beacon.corelate.workflow.client.standalone;

import com.beacon.corelate.workflow.client.BpmnProcessDefinitionClient;
import com.beacon.corelate.workflow.dto.DataResponseDto;
import com.beacon.corelate.workflow.dto.ProcessDefinitionDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author ddevera
 */
public class StandaloneBpmnProcessDefinitionClient implements BpmnProcessDefinitionClient {

    private static final Logger LOG = LoggerFactory.getLogger(StandaloneBpmnProcessDefinitionClient.class);
    @Override
    public DataResponseDto<ProcessDefinitionDto> getProcessDefinitions() {
        LOG.debug("Fetching available process definition");
        return null;
    }
}
