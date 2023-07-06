package com.beacon.corelate.cms.repository.jpa;

import com.beacon.corelate.commons.data.repository.base.BaseJpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.NoRepositoryBean;

import java.io.Serializable;

/**
 * Created by epadolina on 8/15/17.
 */

@NoRepositoryBean
public interface BasePublishableJpaRepository<T, ID extends Serializable> extends BaseJpaRepository<T, ID> {
    Page<T> findByPublished(Boolean published, Pageable pageable);

    Page<T> findByDeletedAndPublished(Boolean deleted, Boolean published, Pageable pageable);
}
