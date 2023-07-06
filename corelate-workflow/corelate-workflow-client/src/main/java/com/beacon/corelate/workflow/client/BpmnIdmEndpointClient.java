package com.beacon.corelate.workflow.client;

import com.activiti.model.idm.CreateEndpointBasicAuthRepresentation;
import com.activiti.model.idm.EndpointConfigurationRepresentation;
import com.beacon.corelate.commons.data.exception.FeignClientApiException;
import com.beacon.corelate.workflow.config.BpmnFeignConfig;
import com.beacon.corelate.workflow.dto.EndpointAuthentication;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * @author ddevera
 */
@FeignClient(value = "bpmn",
        fallback = BpmnIdmEndpointClient.BpmnIdmEndpointClientFallback.class,
        configuration = BpmnFeignConfig.class)
public interface BpmnIdmEndpointClient {

    @RequestMapping(value = "/api/enterprise/admin/basic-auths", method = RequestMethod.POST,
            consumes = "application/json")
    EndpointAuthentication createBasicAuthConfiguration(@RequestBody CreateEndpointBasicAuthRepresentation createEndpointBasicAuthRepresentation);

    @RequestMapping(value = "/api/enterprise/admin/basic-auths?tenantId=1", method = RequestMethod.GET,
            consumes = "application/json")
    List<EndpointAuthentication> getBasicAuthConfigurations();

    @RequestMapping(value = "/api/enterprise/admin/basic-auths/{basicAuthId}?tenantId=1", method = RequestMethod.GET,
            consumes = "application/json")
    EndpointAuthentication getBasicAuthConfiguration(@PathVariable("basicAuthId") Long basicAuthId);

    @RequestMapping(value = "/api/enterprise/admin/basic-auths/{basicAuthId}", method = RequestMethod.PUT,
            consumes = "application/json")
    EndpointAuthentication updateBasicAuthConfiguration(@PathVariable("basicAuthId") Long basicAuthId, @RequestBody CreateEndpointBasicAuthRepresentation createEndpointBasicAuthRepresentation);

    @RequestMapping(value = "/api/enterprise/admin/basic-auths/{basicAuthId}?tenantId=1", method = RequestMethod.DELETE,
            consumes = "application/json")
    void removeBasicAuthConfiguration(@PathVariable("basicAuthId") Long basicAuthId);

    @RequestMapping(value = "/api/enterprise/admin/endpoints", method = RequestMethod.POST,
            consumes = "application/json")
    EndpointConfigurationRepresentation createEndpointConfiguration(@RequestBody EndpointConfigurationRepresentation endpointConfigurationRepresentation);

    @RequestMapping(value = "/api/enterprise/admin/endpoints?tenantId=1", method = RequestMethod.GET,
            consumes = "application/json")
    List<EndpointConfigurationRepresentation> getEndpointConfigurations();

    @RequestMapping(value = "/api/enterprise/admin/endpoints/{endpointConfigurationId}?tenantId=1", method = RequestMethod.GET,
            consumes = "application/json")
    EndpointConfigurationRepresentation getEndpointConfiguration(@PathVariable("endpointConfigurationId") Long endpointConfigurationId);

    @RequestMapping(value = "/api/enterprise/admin/endpoints/{endpointConfigurationId}?tenantId=1", method = RequestMethod.PUT,
            consumes = "application/json")
    EndpointConfigurationRepresentation updateEndpointConfiguration(@PathVariable("endpointConfigurationId") Long endpointConfigurationId, @RequestBody EndpointConfigurationRepresentation endpointConfigurationRepresentation);

    @RequestMapping(value = "/api/enterprise/admin/endpoints/{endpointConfigurationId}?tenantId=1", method = RequestMethod.DELETE,
            consumes = "application/json")
    void deleteEndpointConfiguration(@PathVariable("endpointConfigurationId") Long endpointConfigurationId);

    @Component
    class BpmnIdmEndpointClientFallback implements BpmnIdmEndpointClient {
        @Override
        public EndpointAuthentication createBasicAuthConfiguration(@RequestBody CreateEndpointBasicAuthRepresentation createEndpointBasicAuthRepresentation) {
            throw new FeignClientApiException();
        }

        @Override
        public List<EndpointAuthentication> getBasicAuthConfigurations() {
            throw new FeignClientApiException();
        }

        @Override
        public EndpointAuthentication getBasicAuthConfiguration(@PathVariable Long basicAuthId) {
            throw new FeignClientApiException();
        }

        @Override
        public EndpointAuthentication updateBasicAuthConfiguration(@PathVariable Long basicAuthId, @RequestBody CreateEndpointBasicAuthRepresentation createEndpointBasicAuthRepresentation) {
            throw new FeignClientApiException();
        }

        @Override
        public void removeBasicAuthConfiguration(@PathVariable Long basicAuthId) {
            throw new FeignClientApiException();
        }

        @Override
        public EndpointConfigurationRepresentation createEndpointConfiguration(@RequestBody EndpointConfigurationRepresentation endpointConfigurationRepresentation) {
            throw new FeignClientApiException();
        }

        @Override
        public List<EndpointConfigurationRepresentation> getEndpointConfigurations() {
            throw new FeignClientApiException();
        }

        @Override
        public EndpointConfigurationRepresentation getEndpointConfiguration(@PathVariable Long endpointConfigurationId) {
            throw new FeignClientApiException();
        }

        @Override
        public EndpointConfigurationRepresentation updateEndpointConfiguration(@PathVariable Long endpointConfigurationId, @RequestBody EndpointConfigurationRepresentation endpointConfigurationRepresentation) {
            throw new FeignClientApiException();
        }

        @Override
        public void deleteEndpointConfiguration(@PathVariable Long endpointConfigurationId) {
            throw new FeignClientApiException();
        }
    }
}