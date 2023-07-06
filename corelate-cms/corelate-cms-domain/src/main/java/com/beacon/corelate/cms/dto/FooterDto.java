package com.beacon.corelate.cms.dto;

import com.beacon.corelate.commons.data.dto.BaseFileRepositoryDto;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

/**
 * Created by epadolina on 7/18/17.
 */
public class FooterDto extends BaseFileRepositoryDto<Long> {
    private String description;
    private String copyright;
    private List<FooterPanelDto> panels;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCopyright() {
        return copyright;
    }

    public void setCopyright(String copyright) {
        this.copyright = copyright;
    }

    public List<FooterPanelDto> getPanels() {
        return panels;
    }

    public void setPanels(List<FooterPanelDto> panels) {
        this.panels = panels;
    }

    @Override
    @JsonIgnore
    public Long getId() {
        return super.getId();
    }
}
