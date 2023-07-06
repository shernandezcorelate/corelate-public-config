package com.beacon.corelate.catalog.mapper;

import com.beacon.corelate.catalog.dto.CatalogFormDto;
import com.beacon.corelate.catalog.mapper.custom.CatalogFormConverter;
import com.beacon.corelate.catalog.model.Catalog;
import com.beacon.corelate.commons.data.mapper.OrikaBeanMapper;
import com.beacon.corelate.commons.data.mapper.converter.LocalDateTimeToZonedDateTimeConverter;
import com.google.common.collect.Lists;
import ma.glasnost.orika.CustomMapper;
import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.MappingContext;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by epadolina on 8/2/17.
 */

@Component
public class CatalogBeanMapper extends OrikaBeanMapper {
    @Override
    protected void configure(MapperFactory factory) {
        super.configure(factory);

        this.addAllSpringBeans(super.getApplicationContext());

        this.getFactory().getConverterFactory().registerConverter(new LocalDateTimeToZonedDateTimeConverter());
        this.getFactory().getConverterFactory().registerConverter(new CatalogFormConverter());
    }
}
