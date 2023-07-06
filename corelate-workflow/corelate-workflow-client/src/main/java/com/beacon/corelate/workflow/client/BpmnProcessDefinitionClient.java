package com.beacon.corelate.workflow.client;

import com.beacon.corelate.commons.data.exception.FeignClientApiException;
import com.beacon.corelate.workflow.config.BpmnFeignConfig;
import com.beacon.corelate.workflow.dto.DataResponseDto;
import com.beacon.corelate.workflow.dto.ProcessDefinitionDto;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author ddevera
 */
@FeignClient(value = "bpmn",
        fallback = BpmnProcessDefinitionClient.BpmnProcessDefinitionCLientFallback.class,
        configuration = BpmnFeignConfig.class)
public interface BpmnProcessDefinitionClient {

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = "/api/enterprise/process-definitions", method = RequestMethod.GET, consumes = "application/json")
    DataResponseDto<ProcessDefinitionDto> getProcessDefinitions();

    @Component
    class BpmnProcessDefinitionCLientFallback implements BpmnProcessDefinitionClient {

        @Override
        public DataResponseDto<ProcessDefinitionDto> getProcessDefinitions() {
            throw new FeignClientApiException();
        }
    }
}
