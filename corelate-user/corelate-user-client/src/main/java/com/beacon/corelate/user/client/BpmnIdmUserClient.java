package com.beacon.corelate.user.client;

import com.activiti.model.idm.BulkUserUpdateRepresentation;
import com.activiti.model.idm.UserRepresentation;
import com.beacon.corelate.commons.data.exception.FeignClientApiException;
import com.beacon.corelate.user.config.BpmnFeignConfig;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author ddevera
 */
@Profile("online")
@FeignClient(value = "bpmn",
        fallback = BpmnIdmUserClient.BpmnIdmUserClientFallback.class,
        configuration = BpmnFeignConfig.class)
public interface BpmnIdmUserClient {

    @RequestMapping(value = "/api/enterprise/admin/users", method = RequestMethod.POST,
            consumes = "application/json")
    UserRepresentation create(@RequestBody UserRepresentation userRepresentation);

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = "/api/enterprise/admin/users/{userId}", method = RequestMethod.PUT,
            consumes = "application/json")
    void update(@PathVariable("userId") Long userId, @RequestBody UserRepresentation userRepresentation);

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = {"/api/enterprise/admin/users"}, method = RequestMethod.PUT,
            consumes = "application/json")
    void bulkUpdate(@RequestBody BulkUserUpdateRepresentation update);

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = "/api/enterprise/admin/users/{userId}/status/activate", method = RequestMethod.POST,
            consumes = "application/json")
    void activate(@PathVariable("userId") Long userId);

    @Profile("online")
    @Component
    class BpmnIdmUserClientFallback implements BpmnIdmUserClient {
        @Override
        public UserRepresentation create(UserRepresentation userRepresentation) {
            throw new FeignClientApiException("Endpoint is not available");
        }

        @Override
        public void update(Long userId, UserRepresentation userRepresentation) {
            throw new FeignClientApiException("Endpoint is not available");
        }

        @Override
        public void bulkUpdate(BulkUserUpdateRepresentation update) {
            throw new FeignClientApiException("Endpoint is not available");
        }

        @Override
        public void activate(Long userId) {
            throw new FeignClientApiException("Endpoint is not available");
        }
    }
}
