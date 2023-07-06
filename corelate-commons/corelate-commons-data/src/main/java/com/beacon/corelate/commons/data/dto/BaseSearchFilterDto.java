package com.beacon.corelate.commons.data.dto;

import org.apache.commons.lang3.builder.ToStringBuilder;

/**
 * Created by epadolina on 8/15/17.
 */
public class BaseSearchFilterDto {
    private Boolean deleted;

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("deleted", deleted)
                .toString();
    }
}
