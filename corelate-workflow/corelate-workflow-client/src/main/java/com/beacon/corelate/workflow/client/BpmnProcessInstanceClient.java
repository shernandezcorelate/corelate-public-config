package com.beacon.corelate.workflow.client;

import com.activiti.model.runtime.CreateProcessInstanceRepresentation;
import com.activiti.model.runtime.ProcessInstanceRepresentation;
import com.beacon.corelate.commons.data.exception.FeignClientApiException;
import com.beacon.corelate.workflow.config.BpmnFeignConfig;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @author ddevera
 */
@FeignClient(value = "bpmn",
        fallback = BpmnProcessInstanceClient.BpmnProcessInstanceClientFallback.class,
        configuration = BpmnFeignConfig.class)
public interface BpmnProcessInstanceClient {

    @RequestMapping(value = "/api/enterprise/process-instances", method = RequestMethod.POST, consumes = "application/json")
    ProcessInstanceRepresentation startNewProcessInstance(@RequestBody CreateProcessInstanceRepresentation createProcessInstanceRepresentation);

    @RequestMapping(value = "/api/enterprise/process-instances/{processInstanceId}", method = RequestMethod.DELETE, consumes = "application/json")
    void deleteProcessInstance(@PathVariable("processInstanceId") String processInstanceId);

    @Component
    class BpmnProcessInstanceClientFallback implements BpmnProcessInstanceClient {
        @Override
        public ProcessInstanceRepresentation startNewProcessInstance(CreateProcessInstanceRepresentation createProcessInstanceRepresentation) {
            throw new FeignClientApiException();
        }

        @Override
        public void deleteProcessInstance(String processInstanceId) {
            throw new FeignClientApiException();
        }
    }

}
