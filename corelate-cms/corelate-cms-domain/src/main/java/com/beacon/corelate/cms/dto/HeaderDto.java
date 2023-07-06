package com.beacon.corelate.cms.dto;

import com.beacon.corelate.commons.data.dto.BaseFileRepositoryDto;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * @author ddevera
 */
public class HeaderDto extends BaseFileRepositoryDto<Long> {

    private String label;
    private String subLabel;
    private Boolean showImage;
    private Boolean showLabel;

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getSubLabel() {
        return subLabel;
    }

    public void setSubLabel(String subLabel) {
        this.subLabel = subLabel;
    }

    public Boolean getShowImage() {
        return showImage;
    }

    public void setShowImage(Boolean showImage) {
        this.showImage = showImage;
    }

    public Boolean getShowLabel() {
        return showLabel;
    }

    public void setShowLabel(Boolean showLabel) {
        this.showLabel = showLabel;
    }

    @Override
    @JsonIgnore
    public Long getId() {
        return super.getId();
    }
}
