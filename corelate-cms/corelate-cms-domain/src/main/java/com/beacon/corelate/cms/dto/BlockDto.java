package com.beacon.corelate.cms.dto;

import com.beacon.corelate.commons.data.dto.BaseDto;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.SortedSet;
import java.util.TreeSet;

/**
 * Created by jlava on 9/18/17.
 */
public class BlockDto extends BaseDto<Long> {
    private SortedSet<BlockPanelDto> blockPanels = new TreeSet<BlockPanelDto>();

    public SortedSet<BlockPanelDto> getBlockPanels() {
        return blockPanels;
    }

    public void setBlockPanels(SortedSet<BlockPanelDto> blockPanels) {
        this.blockPanels = blockPanels;
    }

    @Override
    @JsonIgnore
    public Long getId() {
        return super.getId();
    }
}
