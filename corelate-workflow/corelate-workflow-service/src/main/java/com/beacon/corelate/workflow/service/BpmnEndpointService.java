package com.beacon.corelate.workflow.service;

import com.activiti.model.idm.CreateEndpointBasicAuthRepresentation;
import com.activiti.model.idm.EndpointConfigurationRepresentation;
import com.beacon.corelate.workflow.dto.EndpointAuthentication;

import java.util.List;

/**
 * @author ddevera
 */
public interface BpmnEndpointService {

    EndpointAuthentication createBasicAuthConfiguration(CreateEndpointBasicAuthRepresentation createEndpointBasicAuthRepresentation);

    List<EndpointAuthentication> getBasicAuthConfigurations();

    EndpointAuthentication getBasicAuthConfiguration(Long basicAuthId);

    EndpointAuthentication updateBasicAuthConfiguration(Long basicAuthId, CreateEndpointBasicAuthRepresentation createEndpointBasicAuthRepresentation);

    void removeBasicAuthConfiguration(Long basicAuthId);

    EndpointConfigurationRepresentation createEndpointConfiguration(EndpointConfigurationRepresentation endpointConfigurationRepresentation);

    List<EndpointConfigurationRepresentation> getEndpointConfigurations();

    EndpointConfigurationRepresentation getEndpointConfiguration(Long endpointConfigurationId);

    EndpointConfigurationRepresentation updateEndpointConfiguration(Long endpointConfigurationId, EndpointConfigurationRepresentation endpointConfigurationRepresentation);

    void deleteEndpointConfiguration(Long endpointConfigurationId);
}
