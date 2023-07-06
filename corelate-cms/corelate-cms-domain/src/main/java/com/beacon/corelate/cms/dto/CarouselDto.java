package com.beacon.corelate.cms.dto;

import com.beacon.corelate.cms.reference.LinkTrigger;
import com.beacon.corelate.commons.data.dto.BaseDto;

/**
 * Created by epadolina on 7/12/17.
 */
public class CarouselDto extends BaseDto<Long> {
    private Integer interval;

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
