package com.beacon.corelate.workflow.mapper;

import com.activiti.model.runtime.CreateProcessInstanceRepresentation;
import com.beacon.corelate.commons.data.mapper.OrikaBeanMapper;
import com.beacon.corelate.commons.data.mapper.converter.LocalDateTimeToZonedDateTimeConverter;
import com.beacon.corelate.workflow.dto.ProcessDto;
import ma.glasnost.orika.MapperFactory;
import org.springframework.stereotype.Component;

/**
 * @author ddevera
 */
@Component
public class WorkflowBeanMapper extends OrikaBeanMapper {

    @Override
    protected void configure(MapperFactory factory) {
        super.configure(factory);

        this.addAllSpringBeans(super.getApplicationContext());

        this.getFactory().getConverterFactory().registerConverter(new LocalDateTimeToZonedDateTimeConverter());

        this.getFactory().classMap(ProcessDto.class, CreateProcessInstanceRepresentation.class)
                .field("data", "values")
                .byDefault()
                .register();


    }
}
