package com.beacon.corelate.cms.service;

import com.beacon.corelate.cms.dto.TextTemplateDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.TextTemplate;
import com.beacon.corelate.cms.repository.jpa.TextTemplateRepository;
import com.beacon.corelate.commons.service.BaseService;

import java.util.Map;

/**
 * @author ddevera
 */
public interface TextTemplateService
        extends BaseService<TextTemplate, TextTemplateDto, TextTemplateRepository, Long, CmsBeanMapper> {

    TextTemplateDto getByKey(String key);

    TextTemplateDto getByKeyAndProcess(String key, Map<String, String> data);
}
