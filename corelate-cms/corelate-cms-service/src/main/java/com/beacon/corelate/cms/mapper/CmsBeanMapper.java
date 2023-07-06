package com.beacon.corelate.cms.mapper;

import com.beacon.corelate.cms.dto.*;
import com.beacon.corelate.cms.model.*;
import com.beacon.corelate.commons.data.mapper.OrikaBeanMapper;
import com.beacon.corelate.commons.data.mapper.converter.LocalDateTimeToZonedDateTimeConverter;
import ma.glasnost.orika.MapperFactory;
import org.springframework.stereotype.Component;

/**
 * @author ddevera
 */
@Component
public class CmsBeanMapper extends OrikaBeanMapper {

    @Override
    protected void configure(MapperFactory factory) {
        super.configure(factory);

        this.addAllSpringBeans(super.getApplicationContext());

        this.getFactory().getConverterFactory().registerConverter(new LocalDateTimeToZonedDateTimeConverter());

        this.getFactory().classMap(Header.class, HeaderDto.class)
                .fieldAToB("files", "files")
                .exclude("id")
                .byDefault()
                .register();

        this.getFactory().classMap(SiteHead.class, SiteHeadDto.class)
                .fieldAToB("files", "files")
                .exclude("id")
                .byDefault()
                .register();

        this.getFactory().classMap(HelpSubTopic.class, HelpSubTopicDto.class)
                .fieldAToB("helpTopic.id", "topicId")
                .byDefault()
                .register();

        this.getFactory().classMap(Carousel.class, CarouselDto.class)
                .exclude("id")
                .byDefault()
                .register();

        this.getFactory().classMap(CarouselSlide.class, CarouselSlideDto.class)
                .fieldAToB("files", "files")
                .byDefault()
                .register();

        this.getFactory().classMap(GeneralContent.class, GeneralContentDto.class)
                .fieldAToB("files", "files")
                .byDefault()
                .register();

        this.getFactory().classMap(GridItem.class, GridItemDto.class)
                .field("files", "files")
                .byDefault()
                .register();

        this.getFactory().classMap(Footer.class, FooterDto.class)
                .fieldAToB("files", "files")
                .exclude("id")
                .byDefault()
                .register();

        this.getFactory().classMap(Block.class, BlockDto.class)
                .exclude("id")
                .byDefault()
                .register();

        this.getFactory().classMap(GridLayout.class, GridLayoutDto.class)
                .exclude("id")
                .byDefault()
                .register();

        this.getFactory().classMap(ContactInfo.class, ContactInfoDto.class)
                .exclude("id")
                .byDefault()
                .register();

        this.getFactory().classMap(ColorConfig.class, ColorConfigDto.class)
                .exclude("id")
                .byDefault()
                .register();

        this.getFactory().classMap(SimpleLayout.class, SimpleLayoutDto.class)
                .exclude("id")
                .byDefault()
                .register();
    }
}
