package com.beacon.corelate.commons.data.mapper.converter;

import ma.glasnost.orika.MappingContext;
import ma.glasnost.orika.converter.BidirectionalConverter;
import ma.glasnost.orika.metadata.Type;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

/**
 * @author ddevera
 */
public class LocalDateTimeToZonedDateTimeConverter extends BidirectionalConverter<LocalDateTime, ZonedDateTime> {

    @Override
    public ZonedDateTime convertTo(LocalDateTime localDateTime, Type<ZonedDateTime> type, MappingContext mappingContext) {
        return localDateTime.atZone(ZoneId.systemDefault());
    }

    @Override
    public LocalDateTime convertFrom(ZonedDateTime zonedDateTime, Type<LocalDateTime> type, MappingContext mappingContext) {
        return zonedDateTime.toLocalDateTime();
    }
}
