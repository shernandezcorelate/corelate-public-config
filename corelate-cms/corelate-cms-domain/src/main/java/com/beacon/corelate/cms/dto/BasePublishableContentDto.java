package com.beacon.corelate.cms.dto;

import com.beacon.corelate.commons.data.dto.BaseFileRepositoryDto;

/**
 * @author ddevera
 */
public class BasePublishableContentDto<ID> extends BaseFileRepositoryDto<ID> {

    private Boolean published;

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
