package com.beacon.corelate.cms.model;

import com.beacon.corelate.commons.data.BaseFileRepository;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

/**
 * Created by jlava on 9/17/17.
 */

@Entity(name = "GRID_ITEM")
public class GridItem extends BaseFileRepository implements Comparable<GridItem>{

    @Column(name = "TITLE")
    private String title;

    @Column(name = "EXCERPT", columnDefinition = "TEXT")
    private String excerpt;

    @Column(name = "CONTENT", columnDefinition = "TEXT")
    private String content;

    @Column(name = "POSITION")
    private Integer position;

    @ManyToOne
    private GridLayout gridLayout;

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

    public GridLayout getGridLayout() {
        return gridLayout;
    }

    public void setGridLayout(GridLayout gridLayout) {
        this.gridLayout = gridLayout;
    }

    @Override
    public int compareTo(GridItem nextItem) {
        return Integer.compare(this.position, nextItem.getPosition());
    }
}
