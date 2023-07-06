package com.beacon.corelate.cms.service.impl;

import com.beacon.corelate.cms.dto.ContactFormDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.ContactForm;
import com.beacon.corelate.cms.repository.jpa.ContactFormRepository;
import com.beacon.corelate.cms.service.ContactFormService;
import com.beacon.corelate.commons.data.dto.PageDto;
import com.beacon.corelate.commons.service.impl.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by jlava on 9/13/17.
 */
@Service
public class ContactFormServiceImpl
        extends BaseServiceImpl<ContactForm, ContactFormDto, ContactFormRepository, Long, CmsBeanMapper>
        implements ContactFormService{

    @Autowired
    private ContactFormRepository repository;

    @Autowired
    private CmsBeanMapper mapper;

    public ContactFormServiceImpl() { super(ContactForm.class, ContactFormDto.class); }

    @Override
    public PageDto<ContactFormDto> list(Pageable pageable) {
        Page<ContactForm> models = repository.findByDeleted(Boolean.FALSE, pageable);

        return PageDto
                .newPageInfo(
                        models,
                        models
                            .getContent()
                            .stream()
                            .sorted(Comparator.comparing(ContactForm::getUpdatedDate, Comparator.nullsLast(Comparator.reverseOrder())))
                            .map(model -> mapper.map(model, ContactFormDto.class))
                            .collect(Collectors.toList()));
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<ContactFormDto> list() {
        return (List<ContactFormDto>) repository
                .findAll()
                .stream()
                .sorted(Comparator.comparing(ContactForm::getUpdatedDate, Comparator.nullsLast(Comparator.reverseOrder())))
                .map(model -> mapper.map(model, ContactFormDto.class))
                .collect(Collectors.toList());
    }
}
