package com.beacon.corelate.commons.service;

import com.beacon.corelate.commons.data.BaseModel;
import com.beacon.corelate.commons.data.dto.BaseDto;
import com.beacon.corelate.commons.data.dto.PageDto;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.data.mapper.OrikaBeanMapper;
import com.beacon.corelate.commons.data.repository.base.BaseJpaRepository;
import org.springframework.data.domain.Pageable;

import java.io.Serializable;
import java.util.List;

/**
 * @author ddevera
 */
public interface BaseService<MODEL extends BaseModel, DTO extends BaseDto, REPO extends BaseJpaRepository, ID extends Serializable, MAPPER extends OrikaBeanMapper> {

    DTO create(DTO dto) throws Exception;

    DTO update(DTO dto, ID id) throws EntityDoesNotExistException;

    DTO update(DTO dto) throws EntityDoesNotExistException;

    DTO get(ID id) throws EntityDoesNotExistException;

    DTO get() throws EntityDoesNotExistException;

    PageDto<DTO> list(Pageable pageable);

    List<DTO> list();

    void delete(ID id) throws EntityDoesNotExistException;
}
