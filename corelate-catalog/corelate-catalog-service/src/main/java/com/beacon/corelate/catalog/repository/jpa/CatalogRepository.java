package com.beacon.corelate.catalog.repository.jpa;

import com.beacon.corelate.catalog.dto.CatalogKeysDto;
import com.beacon.corelate.catalog.model.Catalog;
import com.beacon.corelate.commons.data.repository.base.BaseJpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by epadolina on 8/2/17.
 */
public interface CatalogRepository extends BaseJpaRepository<Catalog, Long>, CatalogCustomRepository {

    @Query("SELECT DISTINCT new com.beacon.corelate.catalog.dto.CatalogKeysDto(c.key, c.label)" +
            " FROM com.beacon.corelate.catalog.model.Catalog c where c.deleted = false")
    List<CatalogKeysDto> findDistinctCatalogKeys();

    @Query("UPDATE com.beacon.corelate.catalog.model.Catalog c SET c.deleted = true WHERE c.key = (:key)")
    @Modifying
    void deleteCatalogByKey(@Param("key") String key);

    List<Catalog> findByKeyAndDeleted(String key, Boolean deleted);
}
