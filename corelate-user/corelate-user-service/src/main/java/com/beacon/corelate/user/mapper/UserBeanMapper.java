package com.beacon.corelate.user.mapper;

import com.activiti.model.idm.UserRepresentation;
import com.beacon.corelate.commons.data.dto.GroupDto;
import com.beacon.corelate.commons.data.mapper.OrikaBeanMapper;
import com.beacon.corelate.commons.data.mapper.converter.LocalDateTimeToZonedDateTimeConverter;
import com.beacon.corelate.commons.data.model.Group;
import com.beacon.corelate.user.dto.BpmnUserRepresentationDto;
import com.beacon.corelate.user.dto.UserAccountDto;
import com.beacon.corelate.user.dto.UserLoginAccessDto;
import com.beacon.corelate.user.dto.UserMailActivationDto;
import com.beacon.corelate.user.dto.UserSmsActivationDto;
import com.beacon.corelate.user.model.UserAccount;
import ma.glasnost.orika.MapperFactory;
import org.springframework.stereotype.Component;

/**
 * @author ddevera
 */
@Component
public class UserBeanMapper extends OrikaBeanMapper {

    @Override
    protected void configure(MapperFactory factory) {
        this.setFactory(factory);

        this.addAllSpringBeans(super.getApplicationContext());

        this.getFactory().getConverterFactory().registerConverter(new LocalDateTimeToZonedDateTimeConverter());

        this.getFactory().classMap(UserAccountDto.class, UserAccount.class)
                .exclude("password")
                .exclude("externalId")
                .byDefault()
                .register();

        this.getFactory().classMap(UserAccount.class, BpmnUserRepresentationDto.class)
                .field("username", "email")
                .field("name.familyName", "lastName")
                .field("name.givenName", "firstName")
                .byDefault()
                .register();

        this.getFactory().classMap(UserAccount.class, UserMailActivationDto.class)
                .field("mailActivationCode", "activationCode")
                .exclude("password")
                .byDefault()
                .register();

        this.getFactory().classMap(UserAccount.class, UserSmsActivationDto.class)
                .field("mobileActivationCode", "activationCode")
                .byDefault()
                .register();

        this.getFactory().classMap(UserRepresentation.class, UserAccount.class)
                .field("firstName", "name.givenName")
                .field("lastName", "name.familyName")
                .field("email", "username")
                .exclude("password")
                .byDefault()
                .register();

        this.getFactory().classMap(Group.class, GroupDto.class)
                .exclude("externalId")
                .byDefault()
                .register();
    }
}
