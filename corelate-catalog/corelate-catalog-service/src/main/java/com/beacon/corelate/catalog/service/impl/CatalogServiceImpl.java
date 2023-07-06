package com.beacon.corelate.catalog.service.impl;

import com.beacon.corelate.catalog.dto.*;
import com.beacon.corelate.catalog.mapper.CatalogBeanMapper;
import com.beacon.corelate.catalog.model.Catalog;
import com.beacon.corelate.catalog.model.CatalogEntry;
import com.beacon.corelate.catalog.repository.jpa.CatalogRepository;
import com.beacon.corelate.catalog.service.CatalogService;
import com.beacon.corelate.commons.data.dto.PageDto;
import com.beacon.corelate.commons.service.impl.BaseServiceImpl;
import com.google.common.collect.Lists;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.lucene.queryparser.classic.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

/**
 * Created by epadolina on 8/4/17.
 */
@Service
public class CatalogServiceImpl
        extends BaseServiceImpl<Catalog, CatalogDto, CatalogRepository, Long, CatalogBeanMapper>
        implements CatalogService {

    @Autowired
    private CatalogRepository catalogRepository;

    @Autowired
    private CatalogBeanMapper mapper;

    public CatalogServiceImpl() {
        super(Catalog.class, CatalogDto.class);
    }

    @Override
    public PageDto<CatalogDto> getCatalogs(CatalogFilterDto filter, Pageable page) {
        Page<Catalog> catalogs = catalogRepository.getCatalogs(filter, page);

        return PageDto.newPageInfo(catalogs,
                catalogs.getContent()
                        .stream()
                        .map(catalog -> mapper.map(catalog, CatalogDto.class))
                        .collect(Collectors.toList()));
    }



    @Override
    public PageDto<CatalogDto> getCatalogsByLuceneQueryString(String filter, Pageable page) throws ParseException {
        Page<Catalog> catalogs = catalogRepository.getCatalogsByLuceneQueryString(filter, page);

        return PageDto.newPageInfo(catalogs,
                catalogs.getContent()
                        .stream()
                        .map(catalog -> mapper.map(catalog, CatalogDto.class))
                        .collect(Collectors.toList()));
    }

    @Override
    @Transactional
    public List<CatalogDto> saveCatalogs(CatalogFormDto catalogFormDto) throws IOException {
        if (catalogFormDto.getFile() != null) {
            catalogFormDto = convertFromFile(catalogFormDto);
        }

        List<Catalog> catalogs = mapper.map(catalogFormDto, List.class);
        catalogs = catalogRepository.save(catalogs);

        return catalogs.stream()
                .map(catalog -> mapper.map(catalog, CatalogDto.class))
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public List<CatalogKeysDto> getDistinctCatalogKeys() {
        return catalogRepository.findDistinctCatalogKeys();
    }

    private CatalogFormDto convertFromFile(CatalogFormDto catalogFormDto) throws IOException {
        CSVParser records = CSVFormat.DEFAULT.withHeader().parse(new InputStreamReader(catalogFormDto.getFile().getInputStream()));
        List<CatalogFormRowEntry> rowEntries = Lists.newArrayList();
        List<String> headers = records.getHeaderMap()
                .entrySet()
                .stream()
                .map(header -> header.getKey())
                .collect(Collectors.toList());

        records.getRecords()
                .forEach(record -> {
                    CatalogFormRowEntry formRowEntry = new CatalogFormRowEntry();
                    IntStream.range(0, headers.size())
                        .forEach(index -> {
                            CatalogEntryDto entry = new CatalogEntryDto();
                            entry.setFieldName(headers.get(index));
                            entry.setValue(record.get(headers.get(index)));
                            entry.setIndex(index);
                            formRowEntry.getEntries().add(entry);
                        });
                    rowEntries.add(formRowEntry);
                });

        catalogFormDto.setRowEntries(rowEntries);
        return catalogFormDto;
    }

    @Override
    @Transactional
    public void deleteCatalogByKey(String key) {
        //catalogRepository.deleteCatalogByKey(key);
        List<Catalog> catalogs = catalogRepository.findByKeyAndDeleted(key, Boolean.FALSE);

        catalogs.forEach(catalog -> {
            catalog.setDeleted(Boolean.TRUE);
            catalogRepository.save(catalog);
        });

        catalogRepository.flush();
    }

    @Override
    @Transactional
    public List<CatalogFieldValueDto> getCatalogsFieldValue(CatalogFilterDto filter) {
        List<Catalog> catalogs = catalogRepository.findByKeyAndDeleted(filter.getKey(), Boolean.FALSE);
        List<CatalogFieldValueDto> catalogFieldValueDtos = new ArrayList<>();

        catalogs.forEach(catalog -> {
            catalogFieldValueDtos.add(new CatalogFieldValueDto(getFieldValue(
                    catalog.getEntries(), filter.getFieldName()), getFieldValue(catalog.getEntries(), filter.getValue())));
        });

        return catalogFieldValueDtos;
    }

    public String getFieldValue(Set<CatalogEntry> entries, String fieldName) {
        return entries
            .stream()
            .filter(entry -> entry.getFieldName().equals(fieldName))
            .findFirst()
            .map(entry -> entry.getValue())
            .orElse(null);
    }

    /*@Override
    @Transactional
    public List<String> getCatalogHeaders(String key) {
        return catalogRepository.getCatalogHeaders(key);
    }*/
}
