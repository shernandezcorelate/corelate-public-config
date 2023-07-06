package com.beacon.corelate.commons.data.repository.base;

import org.springframework.data.repository.NoRepositoryBean;

import java.io.Serializable;
import java.util.List;

/**
 * @author ddevera
 */
@NoRepositoryBean
public interface BaseLookupJpaRepository<T extends Serializable, ID extends Serializable>
        extends BaseJpaRepository<T, ID> {

    List<T> findAllByActiveTrue();
}
