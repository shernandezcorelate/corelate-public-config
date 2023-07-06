package com.beacon.corelate.cms.dto;

import com.beacon.corelate.commons.data.dto.BaseFileRepositoryDto;

public class SiteHeadDto extends BaseFileRepositoryDto<Long> {

    private String title;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
