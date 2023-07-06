package com.beacon.corelate.cms.dto;

import com.beacon.corelate.commons.data.dto.BaseDto;

import java.util.List;
import java.util.SortedSet;
import java.util.TreeSet;

/**
 * Created by jlava on 9/17/17.
 */
public class GridLayoutDto extends BaseDto<Long> {
    private String heading;
    private String description;
    private SortedSet<GridItemDto> gridItems = new TreeSet<GridItemDto>();

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

    public SortedSet<GridItemDto> getGridItems() {
        return gridItems;
    }

    public void setGridItems(SortedSet<GridItemDto> gridItems) {
        this.gridItems = gridItems;
    }
}
