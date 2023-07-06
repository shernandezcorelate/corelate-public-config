package com.beacon.corelate.workflow.service;

import com.activiti.model.runtime.ProcessInstanceRepresentation;
import com.beacon.corelate.workflow.dto.ProcessDto;

/**
 * @author ddevera
 */
public interface ProcessService {

    ProcessInstanceRepresentation create(ProcessDto processDto);

    void cancel(String processInstanceId);
}
