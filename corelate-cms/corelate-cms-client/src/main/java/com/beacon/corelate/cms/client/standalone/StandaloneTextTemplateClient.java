package com.beacon.corelate.cms.client.standalone;

import com.beacon.corelate.cms.client.TextTemplateClient;
import com.beacon.corelate.cms.dto.TextTemplateDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Map;

/**
 * @author ddevera
 */
public class StandaloneTextTemplateClient implements TextTemplateClient {

    private static final Logger LOG = LoggerFactory.getLogger(StandaloneTextTemplateClient.class);

    @Override
    public ResponseEntity<TextTemplateDto> getByKey(String key) {
        LOG.debug("Fetching text template with key={}", key);

        TextTemplateDto textTemplateDto = new TextTemplateDto();
        textTemplateDto.setTemplate(key);

        if ("ACTIVATION_MAIL_TEMPLATE".equalsIgnoreCase(key)) {
            textTemplateDto.setTemplate("Hello {{username}}, Your password is {{password}} and activationCode {{activationCode}}");
        }

        return new ResponseEntity<>(textTemplateDto, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<TextTemplateDto> getByKeyAndProcess(String key, Map<String, String> data) {
        LOG.debug("Processing text template with key={} and data={}", key, data);
        TextTemplateDto textTemplateDto = new TextTemplateDto();
        textTemplateDto.setTemplate(key);

        if ("ACTIVATION_MAIL_TEMPLATE".equalsIgnoreCase(key)) {
            textTemplateDto.setTemplate("Hello " + data.get("username") + ", Your password is " + data.get("password") + " and activationCode " + data.get("activationCode"));
        }

        return new ResponseEntity<>(textTemplateDto, HttpStatus.OK);
    }
}
