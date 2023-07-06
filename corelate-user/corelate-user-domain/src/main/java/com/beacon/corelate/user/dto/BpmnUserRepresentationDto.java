package com.beacon.corelate.user.dto;

import com.activiti.model.idm.UserRepresentation;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * @author ddevera
 */
public class BpmnUserRepresentationDto extends UserRepresentation {

    public BpmnUserRepresentationDto() {
        this.status = "pending";
        this.type = "enterprise";
        this.tenantId = 1L;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.DEFAULT_STYLE)
                .append("firstName", getFirstName())
                .append("lastName", getLastName())
                .append("email", getEmail())
                .append("password", getPassword())
                .append("status", getStatus())
                .append("type", getType())
                .append("tenantId", getTenantId())
                .toString();
    }
}
