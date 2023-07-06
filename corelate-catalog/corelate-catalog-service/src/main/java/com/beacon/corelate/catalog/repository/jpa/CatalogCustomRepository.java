package com.beacon.corelate.catalog.repository.jpa;

import com.beacon.corelate.catalog.dto.CatalogDto;
import com.beacon.corelate.catalog.dto.CatalogFilterDto;
import com.beacon.corelate.catalog.model.Catalog;
import com.beacon.corelate.commons.data.dto.PageDto;
import org.apache.lucene.queryparser.classic.ParseException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * Created by epadolina on 8/2/17.
 */
public interface CatalogCustomRepository {
    Page<Catalog> getCatalogs(CatalogFilterDto filter, Pageable pageable);
    Page<Catalog> getCatalogsByLuceneQueryString(String filter, Pageable pageable) throws ParseException;
    /*List<String> getCatalogHeaders(String key);*/
}
