package com.beacon.corelate.catalog.mapper.custom;

import com.beacon.corelate.catalog.dto.CatalogEntryDto;
import com.beacon.corelate.catalog.dto.CatalogFormDto;
import com.beacon.corelate.catalog.dto.CatalogFormRowEntry;
import com.beacon.corelate.catalog.model.Catalog;
import com.beacon.corelate.catalog.model.CatalogEntry;
import com.google.common.collect.Lists;
import com.google.common.collect.Sets;
import ma.glasnost.orika.CustomConverter;
import ma.glasnost.orika.MappingContext;
import ma.glasnost.orika.metadata.Type;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

/**
 * Created by epadolina on 8/8/17.
 */
public class CatalogFormConverter extends CustomConverter<CatalogFormDto, List> {

    @Override
    public List convert(CatalogFormDto catalogFormDto, Type<? extends List> type, MappingContext mappingContext) {
        List<Catalog> catalogs = Lists.newArrayList();
        for (CatalogFormRowEntry rowEntry : catalogFormDto.getRowEntries()) {
            Catalog catalog = new Catalog();
            catalog.setKey(catalogFormDto.getKey());
            catalog.setLabel(catalogFormDto.getLabel());
            Set<CatalogEntry> fields = new LinkedHashSet<>();
            for (CatalogEntryDto field : rowEntry.getEntries()) {
                CatalogEntry fieldEntry = new CatalogEntry();
                fieldEntry.setFieldName(field.getFieldName());
                fieldEntry.setValue(field.getValue());
                fieldEntry.setIndex(field.getIndex());
                fields.add(fieldEntry);
            }
            catalog.setEntries(fields);
            catalogs.add(catalog);
        }

        return catalogs;
    }
}
