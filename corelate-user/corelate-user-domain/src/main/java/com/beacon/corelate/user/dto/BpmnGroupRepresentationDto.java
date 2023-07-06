package com.beacon.corelate.user.dto;

import com.activiti.model.idm.GroupRepresentation;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * @author ddevera
 */
public class BpmnGroupRepresentationDto extends GroupRepresentation {

    public BpmnGroupRepresentationDto() {
        this.type = 1;
        this.tenantId = 1L;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.DEFAULT_STYLE)
                .append("id", getId())
                .append("name", getName())
                .append("type", getType())
                .append("tenantId", getTenantId())
                .toString();
    }
}
