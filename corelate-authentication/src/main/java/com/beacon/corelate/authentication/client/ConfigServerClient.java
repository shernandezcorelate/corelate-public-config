package com.beacon.corelate.authentication.client;

import com.beacon.corelate.authentication.config.ConfigServerFeignConfig;
import com.beacon.corelate.commons.data.exception.FeignClientApiException;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @author ddevera
 */
@FeignClient(value = "config",
        fallback = ConfigServerClient.ConfigClientServerClientFallback.class,
        configuration = ConfigServerFeignConfig.class)
public interface ConfigServerClient {

    @RequestMapping(value = "/encrypt", method = RequestMethod.POST,
            consumes = "application/json")
    String encrypt(@RequestBody String data);

    @Component
    class ConfigClientServerClientFallback implements ConfigServerClient {

        @Override
        public String encrypt(String data) {
            throw new FeignClientApiException("Endpoint is not available");
        }

    }
}
