package com.beacon.corelate.user.client.standalone;

import com.activiti.model.idm.BulkUserUpdateRepresentation;
import com.activiti.model.idm.UserRepresentation;
import com.beacon.corelate.user.client.BpmnIdmUserClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author ddevera
 */
public class StandaloneBpmnIdmUserClient implements BpmnIdmUserClient {

    private static final Logger LOG = LoggerFactory.getLogger(StandaloneBpmnIdmUserClient.class);

    @Override
    public UserRepresentation create(UserRepresentation userRepresentation) {
        LOG.debug("Creating UserRepresentation instance for userRepresentation={}", userRepresentation);
        userRepresentation.setId(1L);

        return userRepresentation;
    }

    @Override
    public void update(Long userId, UserRepresentation userRepresentation) {

    }

    @Override
    public void bulkUpdate(BulkUserUpdateRepresentation update) {

    }

    @Override
    public void activate(Long userId) {

    }
}
