package com.beacon.corelate.catalog.service;

import com.beacon.corelate.catalog.dto.*;
import com.beacon.corelate.catalog.mapper.CatalogBeanMapper;
import com.beacon.corelate.catalog.model.Catalog;
import com.beacon.corelate.catalog.repository.jpa.CatalogRepository;
import com.beacon.corelate.commons.data.dto.PageDto;
import com.beacon.corelate.commons.service.BaseService;
import org.apache.lucene.queryparser.classic.ParseException;
import org.springframework.data.domain.Pageable;

import java.io.IOException;
import java.util.List;

/**
 * Created by epadolina on 8/4/17.
 */
public interface CatalogService extends BaseService<Catalog, CatalogDto, CatalogRepository, Long, CatalogBeanMapper> {
    PageDto<CatalogDto> getCatalogs(CatalogFilterDto filter, Pageable page);
    PageDto<CatalogDto> getCatalogsByLuceneQueryString(String filter, Pageable page) throws ParseException;
    List<CatalogFieldValueDto> getCatalogsFieldValue(CatalogFilterDto filter);
    List<CatalogDto> saveCatalogs(CatalogFormDto catalogFormDto) throws IOException;
    List<CatalogKeysDto> getDistinctCatalogKeys();
    void deleteCatalogByKey(String key);
    /*List<String> getCatalogHeaders(String key);*/
}
