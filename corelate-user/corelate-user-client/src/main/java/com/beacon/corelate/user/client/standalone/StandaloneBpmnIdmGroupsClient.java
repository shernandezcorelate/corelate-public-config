package com.beacon.corelate.user.client.standalone;

import com.activiti.model.idm.GroupCapabilityRepresentation;
import com.activiti.model.idm.GroupRepresentation;
import com.beacon.corelate.user.client.BpmnIdmGroupsClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

/**
 * @author ddevera
 */
public class StandaloneBpmnIdmGroupsClient implements BpmnIdmGroupsClient {

    private static final Logger LOG = LoggerFactory.getLogger(StandaloneBpmnIdmGroupsClient.class);

    @Override
    public GroupRepresentation create(GroupRepresentation groupRepresentation) {
        LOG.debug("Creating GroupRepresentation instance for groupRepresentation={}", groupRepresentation);
        groupRepresentation.setId(1L);

        return groupRepresentation;
    }

    @Override
    public GroupRepresentation update(Long groupId, GroupRepresentation groupRepresentation) {
        return null;
    }

    @Override
    public void delete(Long groupId) {

    }

    @Override
    public void activate(Long groupId) {

    }

    @Override
    public void addMember(Long groupId, Long userId) {
        LOG.debug("Adding groupId={} to userId={}", groupId, userId);
    }

    @Override
    public void deleteMember(Long groupId, Long userId) {
        LOG.debug("Deleting groupId={} to userId={}", groupId, userId);
    }

    @Override
    public List<GroupCapabilityRepresentation> getCapabilities(Long groupId) {
        return null;
    }

    @Override
    public void addSystemGroupCapability(Long groupId, GroupRepresentation groupRepresentation) {

    }

    @Override
    public void addRelatedGroup(Long groupId, Long relatedGroupId, String type) {

    }

    @Override
    public void deleteRelatedGroup(Long groupId, Long relatedGroupId) {

    }
}
