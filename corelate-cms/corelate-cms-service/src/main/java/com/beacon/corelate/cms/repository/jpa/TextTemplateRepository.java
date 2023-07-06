package com.beacon.corelate.cms.repository.jpa;

import com.beacon.corelate.cms.model.TextTemplate;
import com.beacon.corelate.commons.data.repository.base.BaseJpaRepository;

/**
 * @author ddevera
 */
public interface TextTemplateRepository extends BaseJpaRepository<TextTemplate, Long> {

    TextTemplate findOneByKey(String key);
}
