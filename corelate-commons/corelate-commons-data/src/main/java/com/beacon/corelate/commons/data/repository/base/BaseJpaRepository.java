package com.beacon.corelate.commons.data.repository.base;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.io.Serializable;

@NoRepositoryBean
public interface BaseJpaRepository<T, ID extends Serializable> extends JpaRepository<T, ID>,
        PagingAndSortingRepository<T, ID>,
        QueryDslPredicateExecutor<T> {

    T findOneById(ID id);

    Page<T> findByDeleted(Boolean deleted, Pageable pageable);
}
