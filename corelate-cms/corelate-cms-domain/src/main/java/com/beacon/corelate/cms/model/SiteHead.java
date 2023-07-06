package com.beacon.corelate.cms.model;

import com.beacon.corelate.commons.data.BaseFileRepository;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class SiteHead extends BaseFileRepository{

    @Column(name = "TITLE")
    private String title;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
