package com.beacon.corelate.commons.service.impl;

import com.beacon.corelate.commons.data.BaseModel;
import com.beacon.corelate.commons.data.dto.BaseDto;
import com.beacon.corelate.commons.data.dto.PageDto;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.data.mapper.OrikaBeanMapper;
import com.beacon.corelate.commons.data.repository.base.BaseJpaRepository;
import com.beacon.corelate.commons.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * @author ddevera
 */
public abstract class BaseServiceImpl<MODEL extends BaseModel, DTO extends BaseDto, REPO extends BaseJpaRepository, ID extends Serializable, MAPPER extends OrikaBeanMapper> implements BaseService<MODEL, DTO, REPO, ID, MAPPER> {

    @Autowired
    private REPO repository;

    @Autowired
    private MAPPER mapper;

    protected Class<DTO> dtoClass;

    protected Class<MODEL> modelClass;

    protected BaseServiceImpl(Class<MODEL> modelClass, Class<DTO> dtoClass) {
        this.modelClass = modelClass;
        this.dtoClass = dtoClass;
    }

    @Override
    public DTO create(DTO dto) throws Exception {
        MODEL model = mapper.map(dto, modelClass);

        return mapper.map(repository.save(model), dtoClass);
    }

    @Override
    public DTO update(DTO dto) throws EntityDoesNotExistException {
        MODEL model = fetchModelFirstEntry();

        mapper.map(dto, model);

        return mapper.map(repository.save(model), dtoClass);
    }

    @Override
    public DTO update(DTO dto, ID id) throws EntityDoesNotExistException {
        MODEL model = fetchModelById(id);

        dto.setId(id);

        mapper.map(dto, model);

        return mapper.map(repository.save(model), dtoClass);
    }

    @Override
    public DTO get() throws EntityDoesNotExistException {
        return mapper.map(fetchModelFirstEntry(), dtoClass);
    }

    @Override
    public DTO get(ID id) throws EntityDoesNotExistException {
        return mapper.map(fetchModelById(id), dtoClass);
    }

    protected MODEL fetchModelById(ID id) throws EntityDoesNotExistException {
        MODEL model = (MODEL) repository.findOneById(id);

        if (model == null) {
            throw new EntityDoesNotExistException("Entity with ID=" + id + " does not exist");
        }

        return model;
    }

    protected MODEL fetchModelFirstEntry() throws EntityDoesNotExistException {
        Optional<MODEL> model = repository.findAll().stream().findFirst();

        if (!model.isPresent()) {
            throw new EntityDoesNotExistException("No entity found for model=" + modelClass + "!");
        }

        return model.get();
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
                                .map(model -> mapper.map(model, dtoClass))
                                .collect(Collectors.toList()));
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<DTO> list() {
        return (List<DTO>) repository
                .findAll()
                .stream()
                .map(model -> mapper.map(model, dtoClass))
                .collect(Collectors.toList());
    }

    @Override
    public void delete(ID id) throws EntityDoesNotExistException {
        MODEL model = fetchModelById(id);

        model.setDeleted(Boolean.TRUE);

        repository.saveAndFlush(model);
    }
}

