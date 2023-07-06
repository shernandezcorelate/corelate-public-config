package com.beacon.corelate.cms.dto;

import com.beacon.corelate.commons.data.dto.BaseDto;
import com.beacon.corelate.commons.data.dto.BaseFileRepositoryDto;

/**
 * Created by jlava on 9/17/17.
 */
public class GridItemDto extends BaseFileRepositoryDto<Long> implements Comparable<GridItemDto> {
    private String title;
    private String excerpt;
    private String content;
    private Integer position;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getExcerpt() {
        return excerpt;
    }

    public void setExcerpt(String excerpt) {
        this.excerpt = excerpt;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Integer getPosition() {
        return position;
    }

    public void setPosition(Integer position) {
        this.position = position;
    }

    @Override
    public int compareTo(GridItemDto nextItem) {
        return Integer.compare(this.position, nextItem.getPosition());
    }
}
