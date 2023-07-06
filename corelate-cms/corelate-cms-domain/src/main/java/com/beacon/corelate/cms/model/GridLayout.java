package com.beacon.corelate.cms.model;

import com.beacon.corelate.commons.data.BaseModel;

import javax.persistence.*;
import java.util.List;
import java.util.SortedSet;
import java.util.TreeSet;

/**
 * Created by jlava on 9/17/17.
 */

@Entity(name = "GRID_LAYOUT")
public class GridLayout extends BaseModel {

    @Column(name = "HEADING")
    private String heading;

    @Column(name = "DESCRIPTION", columnDefinition = "TEXT")
    private String description;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "GRID_LAYOUT_ID")
    @OrderBy("position ASC")
    private SortedSet<GridItem> gridItems = new TreeSet<GridItem>();

    public String getHeading() {
        return heading;
    }

    public void setHeading(String heading) {
        this.heading = heading;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public SortedSet<GridItem> getGridItems() {
        return gridItems;
    }

    public void setGridItems(SortedSet<GridItem> gridItems) {
        this.gridItems = gridItems;
    }
}
