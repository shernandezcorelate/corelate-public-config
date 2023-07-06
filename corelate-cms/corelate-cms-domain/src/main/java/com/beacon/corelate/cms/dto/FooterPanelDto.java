package com.beacon.corelate.cms.dto;

import com.beacon.corelate.commons.data.dto.BaseDto;

import java.util.List;

/**
 * Created by epadolina on 7/18/17.
 */
public class FooterPanelDto extends BaseDto<Long> {

    private Integer index;

    private String name;

    private List<FooterPanelLinkDto> links;

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<FooterPanelLinkDto> getLinks() {
        return links;
    }

    public void setLinks(List<FooterPanelLinkDto> links) {
        this.links = links;
    }
}
