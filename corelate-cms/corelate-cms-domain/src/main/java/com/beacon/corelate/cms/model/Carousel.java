package com.beacon.corelate.cms.model;

import com.beacon.corelate.cms.reference.LinkTrigger;
import com.beacon.corelate.commons.data.BaseModel;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

/**
 * Created by epadolina on 7/12/17.
 */
@Entity(name = "CAROUSEL")
public class Carousel extends BaseModel {

    @Column(name = "INTERVAL")
    private Integer interval;

    @Column(name = "LINK_TRIGGER")
    @Enumerated(EnumType.STRING)
    private LinkTrigger linkTrigger;

    public Integer getInterval() {
        return interval;
    }

    public void setInterval(Integer interval) {
        this.interval = interval;
    }

    public LinkTrigger getLinkTrigger() {
        return linkTrigger;
    }

    public void setLinkTrigger(LinkTrigger linkTrigger) {
        this.linkTrigger = linkTrigger;
    }
}
