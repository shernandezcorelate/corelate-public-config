package com.beacon.corelate.zuul.client;

import com.beacon.corelate.commons.data.exception.FeignClientApiException;
import com.beacon.corelate.zuul.config.ConfigServerFeignConfig;
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

    @RequestMapping(value = "/decrypt", method = RequestMethod.POST,
            consumes = "application/json")
    String decrypt(@RequestBody String data);

    @Component
    class ConfigClientServerClientFallback implements ConfigServerClient {

        @Override
        public String decrypt(String data) {
            throw new FeignClientApiException("Endpoint is not available");
        }
    }
}
