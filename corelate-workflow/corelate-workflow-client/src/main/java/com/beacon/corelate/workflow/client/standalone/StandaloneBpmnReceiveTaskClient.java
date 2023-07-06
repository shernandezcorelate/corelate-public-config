package com.beacon.corelate.workflow.client.standalone;

import com.beacon.corelate.workflow.client.BpmnReceiveTaskClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

/**
 * @author ddevera
 */
public class StandaloneBpmnReceiveTaskClient implements BpmnReceiveTaskClient {

    private static final Logger LOG = LoggerFactory.getLogger(StandaloneBpmnReceiveTaskClient.class);

    @Override
    public void receiveTaskEvent(String processInstanceId, String activitiId, Map<String, Object> variables) {
        LOG.debug("Receiving task with processInstanceId={} and activitiId={} with variables={}", processInstanceId, activitiId, variables);
    }
}
