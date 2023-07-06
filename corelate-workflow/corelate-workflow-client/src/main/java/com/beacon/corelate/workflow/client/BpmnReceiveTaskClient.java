package com.beacon.corelate.workflow.client;

import com.beacon.corelate.commons.data.exception.FeignClientApiException;
import com.beacon.corelate.workflow.config.BpmnFeignConfig;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

/**
 * @author ddevera
 */
@FeignClient(value = "bpmn",
        fallback = BpmnReceiveTaskClient.BpmnReceiveTaskClientFallback.class,
        configuration = BpmnFeignConfig.class)
public interface BpmnReceiveTaskClient {

    @RequestMapping(value = "/api/enterprise/receive-task/{processInstanceId}/{activitiId}", method = POST,
            produces = {"application/json"}, consumes = "application/json")
    void receiveTaskEvent(@PathVariable("processInstanceId") String processInstanceId,
                          @PathVariable("activitiId") String activitiId,
                          @RequestBody Map<String, Object> variables);

    @Component
    class BpmnReceiveTaskClientFallback implements BpmnReceiveTaskClient {
        @Override
        public void receiveTaskEvent(String processInstanceId, String activitiId, Map<String, Object> variables) {
            throw new FeignClientApiException();
        }
    }
}
