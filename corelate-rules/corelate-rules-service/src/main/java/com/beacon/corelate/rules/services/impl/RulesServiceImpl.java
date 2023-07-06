package com.beacon.corelate.rules.services.impl;

import com.beacon.corelate.commons.data.dto.PageDto;
import com.beacon.corelate.commons.service.impl.BaseServiceImpl;
import com.beacon.corelate.rules.config.support.FileStorageHelper;
import com.beacon.corelate.rules.dto.RuleDto;
import com.beacon.corelate.rules.mapper.RulesBeanMapper;
import com.beacon.corelate.rules.model.Rule;
import com.beacon.corelate.rules.repository.jpa.RulesRepository;
import com.beacon.corelate.rules.services.RulesService;
import org.apache.commons.lang3.RandomStringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.Comparator;
import java.util.stream.Collectors;

@Service
public class RulesServiceImpl
        extends BaseServiceImpl<Rule, RuleDto, RulesRepository, Long, RulesBeanMapper>
        implements RulesService {
    private static Logger LOG = LoggerFactory.getLogger(SuggestionServiceImpl.class);
    private static String RULES_BUCKET = "rules";

    @Autowired
    @SuppressWarnings("SpringJavaAutowiringInspection")
    private FileStorageHelper fsHelper;

    @Autowired
    private RulesRepository rulesRepository;

    @Autowired RulesBeanMapper mapper;

    public RulesServiceImpl() {
        super(Rule.class, RuleDto.class);
    }

    @Override
    public String saveRulesFile(MultipartFile rulesFile) {
        String id = RandomStringUtils.randomAlphanumeric(5) + "_" + rulesFile.getOriginalFilename();
        fsHelper.putObject(RULES_BUCKET, id, rulesFile);
        return id;
    }

    @Override
    public InputStream getRuleFile(String uid) throws FileNotFoundException {
        File ruleFile = fsHelper.getObject(RULES_BUCKET, uid);
        return new FileInputStream(ruleFile);
    }

    @Override
    public PageDto<RuleDto> list(Pageable pageable) {
        Page<Rule> models = rulesRepository.findByDeleted(Boolean.FALSE, pageable);

        return PageDto
                .newPageInfo(
                        models,
                        models
                                .getContent()
                                .stream()
                                .sorted(Comparator.comparing(Rule::getUpdatedDate, Comparator.nullsLast(Comparator.reverseOrder())))
                                .map(model -> mapper.map(model, RuleDto.class))
                                .collect(Collectors.toList()));
    }
}
