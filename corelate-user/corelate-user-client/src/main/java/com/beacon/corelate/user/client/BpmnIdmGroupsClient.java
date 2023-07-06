package com.beacon.corelate.user.client;

import com.activiti.model.idm.GroupCapabilityRepresentation;
import com.activiti.model.idm.GroupRepresentation;
import com.beacon.corelate.commons.data.exception.FeignClientApiException;
import com.beacon.corelate.user.config.BpmnFeignConfig;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;

@FeignClient(value = "bpmn",
        fallback = BpmnIdmGroupsClient.BpmnIdmGroupsClientFallback.class,
        configuration = BpmnFeignConfig.class)
public interface BpmnIdmGroupsClient {

    @RequestMapping(value = "/api/enterprise/admin/groups", method = RequestMethod.POST,
            consumes = "application/json")
    GroupRepresentation create(@RequestBody GroupRepresentation groupRepresentation);

    @RequestMapping(value = "/api/enterprise/admin/groups/{groupId}", method = RequestMethod.PUT,
            consumes = "application/json")
    GroupRepresentation update(@PathVariable("groupId") Long groupId, @RequestBody GroupRepresentation groupRepresentation);

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = {"/api/enterprise/admin/groups/{groupId}"}, method = RequestMethod.DELETE,
            consumes = "application/json")
    void delete(@PathVariable("groupId") Long groupId);

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = {"/api/enterprise/admin/groups/{groupId}/action/activate"}, method = RequestMethod.POST,
            consumes = "application/json")
    void activate(@PathVariable("groupId") Long groupId);

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = {"/api/enterprise/admin/groups/{groupId}/members/{userId}"}, method = RequestMethod.POST,
            consumes = "application/json")
    void addMember(@PathVariable("groupId") Long groupId, @PathVariable("userId") Long userId);

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = {"/api/enterprise/admin/groups/{groupId}/members/{userId}"}, method = RequestMethod.DELETE,
            consumes = "application/json")
    void deleteMember(@PathVariable("groupId") Long groupId, @PathVariable("userId") Long userId);

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = {"api/enterprise/admin/groups/{groupId}/potential-capabilities"}, method = RequestMethod.GET)
    List<GroupCapabilityRepresentation> getCapabilities(@PathVariable("groupId") Long groupId);

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = {"api/enterprise/admin/groups/{groupId}/capabilities"}, method = RequestMethod.POST,
            consumes = "application/json")
    void addSystemGroupCapability(@PathVariable("groupId") Long groupId, @RequestBody GroupRepresentation groupRepresentation);

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = {"/api/enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId}"}, method = RequestMethod.POST)
    void addRelatedGroup(@PathVariable("groupId") Long groupId,
                         @PathVariable("relatedGroupId") Long relatedGroupId,
                         @RequestParam(value = "type") String type);

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = {"/api/enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId}"}, method = RequestMethod.DELETE,
            consumes = "application/json")
    void deleteRelatedGroup(@PathVariable("groupId") Long groupId, @PathVariable("relatedGroupId") Long relatedGroupId);

    @Component
    class BpmnIdmGroupsClientFallback implements BpmnIdmGroupsClient {
        @Override
        public GroupRepresentation create(GroupRepresentation groupRepresentation) {
            throw new FeignClientApiException();
        }

        @Override
        public GroupRepresentation update(Long groupId, GroupRepresentation groupRepresentation) {
            throw new FeignClientApiException();
        }

        @Override
        public void delete(Long groupId) {
            throw new FeignClientApiException();
        }

        @Override
        public void activate(Long groupId) {
            throw new FeignClientApiException();
        }

        @Override
        public void addMember(Long groupId, Long userId) {
            throw new FeignClientApiException();
        }

        @Override
        public void deleteMember(Long groupId, Long userId) {
            throw new FeignClientApiException();
        }

        @Override
        public List<GroupCapabilityRepresentation> getCapabilities(Long groupId) {
            throw new FeignClientApiException();
        }

        @Override
        public void addSystemGroupCapability(Long groupId, GroupRepresentation groupRepresentation) {
            throw new FeignClientApiException();
        }

        @Override
        public void addRelatedGroup(Long groupId, Long relatedGroupId, String type) {
            throw new FeignClientApiException();
        }

        @Override
        public void deleteRelatedGroup(Long groupId, Long relatedGroupId) {
            throw new FeignClientApiException();
        }
    }
}
