package com.beacon.corelate.cms.model;

import com.beacon.corelate.cms.reference.LinkTrigger;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

/**
 * Created by epadolina on 7/12/17.
 */

@Entity(name = "CAROUSEL_SLIDE")
public class CarouselSlide extends BasePublishableContent {

    @Column(name = "HEADER")
    private String header;

    @Column(name = "SUB_HEADER")
    private String subHeader;

    @Column(name = "LINK")
    private String link;

    @Column(name = "BUTTON_LABEL")
    private String buttonLabel;

    @Column(name = "PUBLISHED")
    private Boolean published;

    @Column(name = "LINK_TRIGGER")
    @Enumerated(EnumType.STRING)
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
