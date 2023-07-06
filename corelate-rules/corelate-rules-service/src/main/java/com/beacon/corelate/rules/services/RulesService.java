package com.beacon.corelate.rules.services;

import com.beacon.corelate.commons.service.BaseService;
import com.beacon.corelate.rules.dto.RuleDto;
import com.beacon.corelate.rules.mapper.RulesBeanMapper;
import com.beacon.corelate.rules.model.Rule;
import com.beacon.corelate.rules.repository.jpa.RulesRepository;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

public interface RulesService
        extends BaseService<Rule, RuleDto, RulesRepository, Long, RulesBeanMapper> {

    String saveRulesFile(MultipartFile rulesFile) throws IOException;

    InputStream getRuleFile(String uid) throws IOException, FileNotFoundException;

}
