package com.beacon.corelate.workflow.client.standalone;

import com.activiti.model.idm.CreateEndpointBasicAuthRepresentation;
import com.activiti.model.idm.EndpointConfigurationRepresentation;
import com.beacon.corelate.workflow.client.BpmnIdmEndpointClient;
import com.beacon.corelate.workflow.dto.EndpointAuthentication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

/**
 * @author ddevera
 */
public class StandaloneBpmnIdmEndpointClient implements BpmnIdmEndpointClient {

    private static final Logger LOG = LoggerFactory.getLogger(StandaloneBpmnIdmEndpointClient.class);

    @Override
    public EndpointAuthentication createBasicAuthConfiguration(CreateEndpointBasicAuthRepresentation createEndpointBasicAuthRepresentation) {
        return null;
    }

    @Override
    public List<EndpointAuthentication> getBasicAuthConfigurations() {
        return null;
    }

    @Override
    public EndpointAuthentication getBasicAuthConfiguration(Long basicAuthId) {
        return null;
    }

    @Override
    public EndpointAuthentication updateBasicAuthConfiguration(Long basicAuthId, CreateEndpointBasicAuthRepresentation createEndpointBasicAuthRepresentation) {
        return null;
    }

    @Override
    public void removeBasicAuthConfiguration(Long basicAuthId) {

    }

    @Override
    public EndpointConfigurationRepresentation createEndpointConfiguration(EndpointConfigurationRepresentation endpointConfigurationRepresentation) {
        return null;
    }

    @Override
    public List<EndpointConfigurationRepresentation> getEndpointConfigurations() {
        return null;
    }

    @Override
    public EndpointConfigurationRepresentation getEndpointConfiguration(Long endpointConfigurationId) {
        return null;
    }

    @Override
    public EndpointConfigurationRepresentation updateEndpointConfiguration(Long endpointConfigurationId, EndpointConfigurationRepresentation endpointConfigurationRepresentation) {
        return null;
    }

    @Override
    public void deleteEndpointConfiguration(Long endpointConfigurationId) {

    }
}
