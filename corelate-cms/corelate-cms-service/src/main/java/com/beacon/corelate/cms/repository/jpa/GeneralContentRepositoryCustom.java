package com.beacon.corelate.cms.repository.jpa;

import com.beacon.corelate.cms.model.GeneralContent;
import com.beacon.corelate.cms.model.filter.GeneralContentFilter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @author ddevera
 */
public interface GeneralContentRepositoryCustom {

    Page<GeneralContent> findByFilter(GeneralContentFilter filter, Pageable pageable);
}
