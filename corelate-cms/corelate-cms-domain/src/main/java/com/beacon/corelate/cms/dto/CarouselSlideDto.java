package com.beacon.corelate.cms.dto;

import com.beacon.corelate.cms.reference.LinkTrigger;
import com.beacon.corelate.commons.data.dto.BaseFileRepositoryDto;

/**
 * Created by epadolina on 7/12/17.
 */
public class CarouselSlideDto extends BasePublishableContentDto<Long> {
    private String header;
    private String subHeader;
    private String link;
    private String buttonLabel;
    private Boolean published;
    private LinkTrigger linkTrigger;

    public String getHeader() {
        return header;
    }

    public void setHeader(String header) {
        this.header = header;
    }

    public String getSubHeader() {
        return subHeader;
    }

    public void setSubHeader(String subHeader) {
        this.subHeader = subHeader;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getButtonLabel() {
        return buttonLabel;
    }

    public void setButtonLabel(String buttonLabel) {
        this.buttonLabel = buttonLabel;
    }

    public Boolean getPublished() {
        return published;
    }

    public void setPublished(Boolean published) {
        this.published = published;
    }

    public LinkTrigger getLinkTrigger() {
        return linkTrigger;
    }

    public void setLinkTrigger(LinkTrigger linkTrigger) {
        this.linkTrigger = linkTrigger;
    }
}
