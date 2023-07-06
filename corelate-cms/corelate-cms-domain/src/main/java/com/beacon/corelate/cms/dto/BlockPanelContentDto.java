package com.beacon.corelate.cms.dto;

import com.beacon.corelate.cms.reference.BlockType;
import com.beacon.corelate.commons.data.dto.BaseDto;

/**
 * Created by jlava on 9/13/17.
 */
public class BlockPanelContentDto implements Comparable<BlockPanelContentDto> {

    private Integer position;
    private BlockType content;

    public Integer getPosition() { return position; }

    public void setPosition(Integer position) { this.position = position; }

    public BlockType  getContent() { return content; }

    public void setContent(BlockType  content) { this.content = content; }

    @Override
    public int compareTo(BlockPanelContentDto nextContent) {
        return Integer.compare(this.position, nextContent.getPosition());
    }
}
