package com.beacon.corelate.rules.mapper;

import com.beacon.corelate.commons.data.mapper.OrikaBeanMapper;
import com.beacon.corelate.commons.data.mapper.converter.LocalDateTimeToZonedDateTimeConverter;
import ma.glasnost.orika.MapperFactory;
import org.springframework.stereotype.Component;

@Component
public class RulesBeanMapper extends OrikaBeanMapper {

    @Override
    protected void configure(MapperFactory factory) {
        this.setFactory(factory);

        this.addAllSpringBeans(super.getApplicationContext());

        this.getFactory().getConverterFactory().registerConverter(new LocalDateTimeToZonedDateTimeConverter());
    }
}
