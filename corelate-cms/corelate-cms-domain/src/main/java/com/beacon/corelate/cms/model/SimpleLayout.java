package com.beacon.corelate.cms.model;

import com.beacon.corelate.commons.data.BaseModel;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * Created by jlava on 9/15/17.
 */

@Entity(name = "SIMPLE_LAYOUT")
public class SimpleLayout extends BaseModel{

    @Column(name = "HEADING")
    private String heading;

    @Column(name = "CONTENT", columnDefinition = "TEXT")
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
