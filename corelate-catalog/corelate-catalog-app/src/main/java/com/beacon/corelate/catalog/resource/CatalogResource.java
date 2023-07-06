package com.beacon.corelate.catalog.resource;

import com.beacon.corelate.catalog.dto.*;
import com.beacon.corelate.catalog.service.CatalogService;
import com.beacon.corelate.commons.app.resource.BaseResource;
import com.beacon.corelate.commons.data.dto.PageDto;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import org.apache.lucene.queryparser.classic.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

/**
 * Created by epadolina on 8/4/17.
 */

@RestController
@RequestMapping("/catalog")
public class CatalogResource
        extends BaseResource<CatalogDto, Long, CatalogService> {
    private static Logger LOG = LoggerFactory.getLogger(CatalogResource.class);

    @Autowired
    private CatalogService catalogService;

    public CatalogResource() {
        super(CatalogResource.class);
    }

    @RequestMapping(method = RequestMethod.GET, params = {"key", "fieldName", "value"})
    public ResponseEntity<PageDto<CatalogDto>> searchCatalog(CatalogFilterDto filter, Pageable pageable) {
        LOG.debug("Retrieving catalog with key={} fieldName={} value={}", filter.getKey(), filter.getFieldName(), filter.getValue());
        return new ResponseEntity<PageDto<CatalogDto>>(catalogService.getCatalogs(filter, pageable), HttpStatus.OK);
    }

    @RequestMapping(value="/field-value/list", method = RequestMethod.GET, params = {"key", "fieldName", "value"})
    public ResponseEntity<List<CatalogFieldValueDto>> searchCatalogFieldValue(CatalogFilterDto filter) {
        LOG.debug("Retrieving catalog with key={} fieldName={} value={}", filter.getKey(), filter.getFieldName(), filter.getValue());
        return new ResponseEntity<List<CatalogFieldValueDto>>(catalogService.getCatalogsFieldValue(filter), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, params = {"filter"})
    public ResponseEntity<PageDto<CatalogDto>> searchCatalogByLuceneQuery(String filter, Pageable pageable) throws ParseException {
        LOG.debug("Retrieving catalog with filter={}", filter);
        return new ResponseEntity<PageDto<CatalogDto>>(catalogService.getCatalogsByLuceneQueryString(filter, pageable), HttpStatus.OK);
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity<List<CatalogDto>> saveCatalogs(@RequestBody CatalogFormDto catalogFormDto) throws IOException {
        LOG.debug("Saving catalogs with key = {} entries = {}", catalogFormDto.getKey(), catalogFormDto.getRowEntries().size());
        return new ResponseEntity<List<CatalogDto>>(catalogService.saveCatalogs(catalogFormDto), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/keys")
    public ResponseEntity<List<CatalogKeysDto>> getCatalogColumns() {
        LOG.debug("Retrieving distinct catalog keys");
        return new ResponseEntity<List<CatalogKeysDto>>(catalogService.getDistinctCatalogKeys(), HttpStatus.OK);
    }

    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    public ResponseEntity<List<CatalogDto>> upload(CatalogFormDto catalogFormDto) throws IOException {
        LOG.debug("Saving catalogs with key={} file name = {}", catalogFormDto.getKey(), catalogFormDto.getFile().getOriginalFilename());
        return new ResponseEntity<List<CatalogDto>>(catalogService.saveCatalogs(catalogFormDto), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/delete/{key}", method = RequestMethod.DELETE)
    public void deleteCatalog(@PathVariable String key) throws EntityDoesNotExistException {
        LOG.debug("Delete Catalogs with key={}", key);
        catalogService.deleteCatalogByKey(key);
    }

    /*@RequestMapping(value = "/headers/{key}", method = RequestMethod.GET)
    public List<String> getCatalogHeaders(@PathVariable String key) throws EntityDoesNotExistException {
        LOG.debug("Get Catalog headers with key={}", key);
        return catalogService.getCatalogHeaders(key);
    }*/
}