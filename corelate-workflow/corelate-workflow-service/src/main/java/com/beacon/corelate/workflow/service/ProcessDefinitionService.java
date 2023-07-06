package com.beacon.corelate.workflow.service;


import com.beacon.corelate.workflow.dto.ProcessDefinitionDto;

import java.net.URISyntaxException;
import java.util.List;

public interface ProcessDefinitionService {

    List<ProcessDefinitionDto> getList() throws URISyntaxException;
}
