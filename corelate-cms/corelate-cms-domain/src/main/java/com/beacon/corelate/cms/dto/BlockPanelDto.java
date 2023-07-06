package com.beacon.corelate.cms.dto;

import com.beacon.corelate.cms.reference.BlockTemplate;
import com.beacon.corelate.commons.data.dto.BaseDto;

import java.util.*;

/**
 * Created by jlava on 9/13/17.
 */
public class BlockPanelDto extends BaseDto<Long> implements Comparable<BlockPanelDto> {

    private BlockTemplate template;
    private SortedSet<BlockPanelContentDto> contents = new TreeSet<BlockPanelContentDto>();
    private Integer position;

    public BlockTemplate getTemplate() {
        return template;
    }

    public void setTemplate(BlockTemplate template) {
        this.template = template;
    }

    public SortedSet<BlockPanelContentDto> getContents() {
        return contents;
    }

    public void setContents(SortedSet<BlockPanelContentDto> contents) {
        this.contents = contents;
    }

    public Integer getPosition() {
        return position;
    }

    public void setPosition(Integer position) {
        this.position = position;
    }

    @Override
    public int compareTo(BlockPanelDto nextPanel) {
        return Integer.compare(this.position, nextPanel.getPosition());
    }
}
