package com.beacon.corelate.cms.client;

import com.beacon.corelate.cms.config.ApiFeignConfig;
import com.beacon.corelate.cms.dto.TextTemplateDto;
import com.beacon.corelate.commons.data.exception.FeignClientApiException;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.context.annotation.Profile;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Map;

/**
 * @author ddevera
 */
@Profile("online")
@FeignClient(value = "cms",
        fallback = TextTemplateClient.TextTemplateClientFallback.class,
        configuration = ApiFeignConfig.class)
public interface TextTemplateClient {

    @RequestMapping(value = "/text-template/key/{key}", method = RequestMethod.GET)
    ResponseEntity<TextTemplateDto> getByKey(@PathVariable("key") String key);

    @RequestMapping(value = "/text-template/key/{key}/process", method = RequestMethod.POST)
    ResponseEntity<TextTemplateDto> getByKeyAndProcess(@PathVariable("key") String key, @RequestBody Map<String, String> data);

    @Profile("online")
    @Component
    class TextTemplateClientFallback implements TextTemplateClient {
        @Override
        public ResponseEntity<TextTemplateDto> getByKey(String key) {
            throw new FeignClientApiException("Endpoint is not available");
        }

        @Override
        public ResponseEntity<TextTemplateDto> getByKeyAndProcess(String key, Map<String, String> data) {
            throw new FeignClientApiException("Endpoint is not available");
        }
    }

}
