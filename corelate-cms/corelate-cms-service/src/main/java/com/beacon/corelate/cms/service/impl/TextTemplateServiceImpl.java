package com.beacon.corelate.cms.service.impl;

import com.beacon.corelate.cms.dto.TextTemplateDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.TextTemplate;
import com.beacon.corelate.cms.repository.jpa.TextTemplateRepository;
import com.beacon.corelate.cms.service.TextTemplateService;
import com.beacon.corelate.commons.data.dto.PageDto;
import com.beacon.corelate.commons.service.impl.BaseServiceImpl;
import com.github.mustachejava.Mustache;
import com.github.mustachejava.MustacheFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.io.StringReader;
import java.io.StringWriter;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * @author ddevera
 */
@Service
public class TextTemplateServiceImpl
        extends BaseServiceImpl<TextTemplate, TextTemplateDto, TextTemplateRepository, Long, CmsBeanMapper>
        implements TextTemplateService {

    @Autowired
    private CmsBeanMapper mapper;

    @Autowired
    private TextTemplateRepository mailTemplateRepository;

    @Autowired
    private MustacheFactory mustacheFactory;

    public TextTemplateServiceImpl() {
        super(TextTemplate.class, TextTemplateDto.class);
    }

    @Override
    public TextTemplateDto getByKey(String key) {
        return mapper.map(mailTemplateRepository.findOneByKey(key), TextTemplateDto.class);
    }

    @Override
    public TextTemplateDto getByKeyAndProcess(String key, Map<String, String> data) {
        TextTemplate textTemplate = mailTemplateRepository.findOneByKey(key);
        Mustache mustache = mustacheFactory.compile(new StringReader(textTemplate.getTemplate()), key);

        StringWriter stringWriter = new StringWriter();

        mustache.execute(stringWriter, data);

        return new TextTemplateDto(key, stringWriter.toString());
    }

    @Override
    public PageDto<TextTemplateDto> list(Pageable pageable) {
        Page<TextTemplate> models = mailTemplateRepository.findByDeleted(Boolean.FALSE, pageable);

        return PageDto
                .newPageInfo(
                        models,
                        models
                                .getContent()
                                .stream()
                                .sorted(Comparator.comparing(TextTemplate::getUpdatedDate, Comparator.nullsLast(Comparator.reverseOrder())))
                                .map(model -> mapper.map(model, TextTemplateDto.class))
                                .collect(Collectors.toList()));
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<TextTemplateDto> list() {
        return (List<TextTemplateDto>) mailTemplateRepository
                .findAll()
                .stream()
                .sorted(Comparator.comparing(TextTemplate::getUpdatedDate, Comparator.nullsLast(Comparator.reverseOrder())))
                .map(model -> mapper.map(model, TextTemplateDto.class))
                .collect(Collectors.toList());
    }
}
