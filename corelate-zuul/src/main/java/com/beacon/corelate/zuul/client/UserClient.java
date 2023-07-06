package com.beacon.corelate.zuul.client;

import com.beacon.corelate.commons.data.exception.FeignClientApiException;
import com.beacon.corelate.zuul.config.ApiFeignConfig;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @author ddevera
 */
@FeignClient(value = "user",
        fallback = UserClient.UserClientClientFallback.class,
        configuration = ApiFeignConfig.class)
public interface UserClient {

    @RequestMapping(value = "/user-client-detail/basic", method = RequestMethod.GET,
            consumes = "application/json")
    String getBasicAuth(@RequestHeader("Authorization") String token);

    @Component
    class UserClientClientFallback implements UserClient {

        @Override
        public String getBasicAuth(String username) {
            throw new FeignClientApiException("Endpoint is not available");
        }
    }
}
