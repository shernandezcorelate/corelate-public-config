package com.beacon.corelate.rules.resource;

import com.beacon.corelate.commons.app.resource.BaseResource;
import com.beacon.corelate.rules.config.support.FileStorageHelper;
import com.beacon.corelate.rules.dto.RuleDto;
import com.beacon.corelate.rules.resource.dto.RuleUploadResponse;
import com.beacon.corelate.rules.services.RulesService;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;

@RestController
@RequestMapping("/rules")
public class RulesResource extends BaseResource<RuleDto, Long, RulesService> {

    private static final Logger LOG = LoggerFactory.getLogger(RulesResource.class);

    @Autowired
    RulesService rulesService;

    @Autowired
    FileStorageHelper fileStorageHelper;

    public RulesResource() {
        super(RulesResource.class);
    }

    @GetMapping("/download/{uid:.+}")
    public void download(@PathVariable("uid") String uid, HttpServletResponse response) throws IOException {

        LOG.debug("Fetching latest rules file with uid={}", uid);

        InputStream stream = rulesService.getRuleFile(uid);

        if (null == stream) {
            response.setContentType("text/html");
            response.getOutputStream().write("Rules not found!".getBytes());
            response.getOutputStream().close();
        } else {
            response.setContentType("text/plain");
            IOUtils.copy(stream, response.getOutputStream());
            response.getOutputStream().close();
            stream.close();
        }
    }

    @PostMapping("/upload")
    public ResponseEntity<RuleUploadResponse> uploadRule(MultipartFile file) throws IOException {
        return ResponseEntity.ok(new RuleUploadResponse(rulesService.saveRulesFile(file)));
    }
}
