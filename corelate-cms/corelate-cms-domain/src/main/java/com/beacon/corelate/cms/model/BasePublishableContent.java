package com.beacon.corelate.cms.model;

import com.beacon.corelate.commons.data.BaseFileRepository;
import org.hibernate.annotations.Type;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

/**
 * Created by epadolina on 7/12/17.
 */
@MappedSuperclass
public abstract class BasePublishableContent extends BaseFileRepository {

    @Column(name = "PUBLISHED")
    @Type(type = "yes_no")
    private Boolean published;

    @Column(name = "AUTHOR")
    private String author;

    public Boolean getPublished() {
        return published;
    }

    public void setPublished(Boolean published) {
        this.published = published;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
