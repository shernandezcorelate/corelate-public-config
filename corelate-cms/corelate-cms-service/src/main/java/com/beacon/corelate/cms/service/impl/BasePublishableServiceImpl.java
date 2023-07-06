package com.beacon.corelate.cms.service.impl;

import com.beacon.corelate.cms.dto.BasePublishableContentDto;
import com.beacon.corelate.cms.model.BasePublishableContent;
import com.beacon.corelate.cms.repository.jpa.BasePublishableJpaRepository;
import com.beacon.corelate.cms.service.BasePublishableService;
import com.beacon.corelate.commons.data.dto.PageDto;
import com.beacon.corelate.commons.data.mapper.OrikaBeanMapper;
import com.beacon.corelate.commons.service.impl.BaseFileRepositoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.io.Serializable;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by epadolina on 8/15/17.
 */
public abstract class BasePublishableServiceImpl<MODEL extends BasePublishableContent, DTO extends BasePublishableContentDto, REPO extends BasePublishableJpaRepository, ID extends Serializable, MAPPER extends OrikaBeanMapper>
        extends BaseFileRepositoryServiceImpl<MODEL, DTO, REPO, ID, MAPPER>
        implements BasePublishableService<MODEL, DTO, REPO, ID, MAPPER> {

    @Autowired
    private REPO repository;

    @Autowired
    private MAPPER mapper;

    private Class<DTO> dtoClass;

    public BasePublishableServiceImpl(Class<MODEL> modelClass, Class<DTO> dtoClass) {
        super(modelClass, dtoClass);
        this.modelClass = modelClass;
        this.dtoClass = dtoClass;
    }

    @Override
    public PageDto<DTO> getPublished(Pageable pageable) {
        Page<MODEL> models = repository.findByDeletedAndPublished(Boolean.FALSE, Boolean.TRUE, pageable);

        return PageDto
                .newPageInfo(
                        models,
                        models
                                .getContent()
                                .stream()
                                .map(model -> postProcessDTO(mapper.map(model, dtoClass)))
                                .collect(Collectors.toList()));
    }

    @Override
    public PageDto<DTO> list(Pageable pageable) {
        Page<MODEL> models = repository.findByDeleted(Boolean.FALSE, pageable);

        return PageDto
                .newPageInfo(
                        models,
                        models
                                .getContent()
                                .stream()
                                .sorted(Comparator.comparing(MODEL::getUpdatedDate, Comparator.nullsLast(Comparator.reverseOrder())))
                                .map(model -> mapper.map(model, dtoClass))
                                .collect(Collectors.toList()));
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<DTO> list() {
        return (List<DTO>) repository
                .findAll()
                .stream()
                .sorted(Comparator.comparing(MODEL::getUpdatedDate, Comparator.nullsLast(Comparator.reverseOrder())))
                .map(model -> mapper.map(model, dtoClass))
                .collect(Collectors.toList());
    }

    @Override
    public DTO updatePublishStatus(Long id, Boolean publish) {
        MODEL model = (MODEL) repository.findOneById(id);

        model.setPublished(publish);

        return mapper.map(repository.save(model), dtoClass);
    }
}
