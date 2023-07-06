package com.beacon.corelate.cms.resource.client;

import com.beacon.corelate.cms.client.TextTemplateClient;
import com.beacon.corelate.cms.dto.TextTemplateDto;
import com.beacon.corelate.cms.service.TextTemplateService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * @author ddevera
 */
@RestController
public class TextTemplateClientResource implements TextTemplateClient {

    private static final Logger LOG = LoggerFactory.getLogger(TextTemplateClientResource.class);

    @Autowired
    private TextTemplateService textTemplateService;

    @Override
    public ResponseEntity<TextTemplateDto> getByKey(@PathVariable("key") String key) {
        LOG.debug("Fetching template data with key={}", key);
        return new ResponseEntity<>(textTemplateService.getByKey(key), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<TextTemplateDto> getByKeyAndProcess(@PathVariable String key, @RequestBody Map<String, String> data) {
        LOG.debug("Fetching template data with key={} and data={}", key, data);
        return new ResponseEntity<>(textTemplateService.getByKeyAndProcess(key, data), HttpStatus.OK);
    }
}
