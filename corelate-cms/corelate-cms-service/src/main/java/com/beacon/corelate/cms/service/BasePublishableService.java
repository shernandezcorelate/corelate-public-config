package com.beacon.corelate.cms.service;

import com.beacon.corelate.cms.dto.BasePublishableContentDto;
import com.beacon.corelate.cms.model.BasePublishableContent;
import com.beacon.corelate.commons.data.dto.PageDto;
import com.beacon.corelate.commons.data.mapper.OrikaBeanMapper;
import com.beacon.corelate.commons.data.repository.base.BaseJpaRepository;
import com.beacon.corelate.commons.service.BaseFileRepositoryService;
import org.springframework.data.domain.Pageable;

import java.io.Serializable;

/**
 * Created by epadolina on 8/15/17.
 */
public interface BasePublishableService<MODEL extends BasePublishableContent, DTO extends BasePublishableContentDto, REPO extends BaseJpaRepository, ID extends Serializable, MAPPER extends OrikaBeanMapper>
        extends BaseFileRepositoryService<MODEL, DTO, REPO, ID, MAPPER> {

    PageDto<DTO> getPublished(Pageable pageable);

    DTO updatePublishStatus(Long id, Boolean publish);
}
