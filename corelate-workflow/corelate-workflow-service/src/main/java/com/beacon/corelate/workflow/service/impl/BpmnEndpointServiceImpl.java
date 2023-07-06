package com.beacon.corelate.workflow.service.impl;

import com.activiti.model.idm.CreateEndpointBasicAuthRepresentation;
import com.activiti.model.idm.EndpointConfigurationRepresentation;
import com.beacon.corelate.workflow.client.BpmnIdmEndpointClient;
import com.beacon.corelate.workflow.dto.EndpointAuthentication;
import com.beacon.corelate.workflow.service.BpmnEndpointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author ddevera
 */
@Service
public class BpmnEndpointServiceImpl implements BpmnEndpointService {

    @Autowired
    private BpmnIdmEndpointClient bpmnIdmEndpointClient;

    @Override
    public EndpointAuthentication createBasicAuthConfiguration(CreateEndpointBasicAuthRepresentation createEndpointBasicAuthRepresentation) {
        return bpmnIdmEndpointClient.createBasicAuthConfiguration(createEndpointBasicAuthRepresentation);
    }

    @Override
    public List<EndpointAuthentication> getBasicAuthConfigurations() {
        return bpmnIdmEndpointClient.getBasicAuthConfigurations();
    }

    @Override
    public EndpointAuthentication getBasicAuthConfiguration(Long basicAuthId) {
        return bpmnIdmEndpointClient.getBasicAuthConfiguration(basicAuthId);
    }

    @Override
    public EndpointAuthentication updateBasicAuthConfiguration(Long basicAuthId, CreateEndpointBasicAuthRepresentation createEndpointBasicAuthRepresentation) {
        return bpmnIdmEndpointClient.updateBasicAuthConfiguration(basicAuthId, createEndpointBasicAuthRepresentation);
    }

    @Override
    public void removeBasicAuthConfiguration(Long basicAuthId) {
        bpmnIdmEndpointClient.removeBasicAuthConfiguration(basicAuthId);
    }

    @Override
    public EndpointConfigurationRepresentation createEndpointConfiguration(EndpointConfigurationRepresentation endpointConfigurationRepresentation) {
        return bpmnIdmEndpointClient.createEndpointConfiguration(endpointConfigurationRepresentation);
    }

    @Override
    public List<EndpointConfigurationRepresentation> getEndpointConfigurations() {
        return bpmnIdmEndpointClient.getEndpointConfigurations();
    }

    @Override
    public EndpointConfigurationRepresentation getEndpointConfiguration(Long endpointConfigurationId) {
        return bpmnIdmEndpointClient.getEndpointConfiguration(endpointConfigurationId);
    }

    @Override
    public EndpointConfigurationRepresentation updateEndpointConfiguration(Long endpointConfigurationId, EndpointConfigurationRepresentation endpointConfigurationRepresentation) {
        return bpmnIdmEndpointClient.updateEndpointConfiguration(endpointConfigurationId, endpointConfigurationRepresentation);
    }

    @Override
    public void deleteEndpointConfiguration(Long endpointConfigurationId) {
        bpmnIdmEndpointClient.deleteEndpointConfiguration(endpointConfigurationId);
    }
}
