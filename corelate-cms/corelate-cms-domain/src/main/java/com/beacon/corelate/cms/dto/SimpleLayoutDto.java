package com.beacon.corelate.cms.dto;

import com.beacon.corelate.commons.data.dto.BaseDto;

/**
 * Created by jlava on 9/15/17.
 */
public class SimpleLayoutDto extends BaseDto<Long> {

    private String heading;
    private String content;

    public String getHeading() {
        return heading;
    }

    public void setHeading(String heading) {
        this.heading = heading;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
