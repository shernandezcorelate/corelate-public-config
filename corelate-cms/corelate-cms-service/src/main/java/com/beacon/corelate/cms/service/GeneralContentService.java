package com.beacon.corelate.cms.service;

import com.beacon.corelate.cms.dto.GeneralContentDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.GeneralContent;
import com.beacon.corelate.cms.model.filter.GeneralContentFilter;
import com.beacon.corelate.cms.repository.jpa.GeneralContentRepository;
import com.beacon.corelate.commons.data.dto.PageDto;
import org.springframework.data.domain.Pageable;

/**
 * Created by epadolina on 7/13/17.
 */
public interface GeneralContentService extends BasePublishableService<GeneralContent, GeneralContentDto, GeneralContentRepository, Long, CmsBeanMapper> {

    PageDto<GeneralContentDto> list(GeneralContentFilter filter, Pageable pageable);
}
