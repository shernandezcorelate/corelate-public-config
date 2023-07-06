package com.beacon.corelate.cms.model;

import com.beacon.corelate.cms.reference.BlockType;
import com.beacon.corelate.commons.data.BaseModel;

import javax.persistence.*;

/**
 * Created by jlava on 9/13/17.
 */

@Embeddable
public class BlockPanelContent implements Comparable<BlockPanelContent> {

    @Column(name = "POSITION")
    private Integer position;

    @Column(name = "CONTENT")
    @Enumerated(EnumType.STRING)
    private BlockType content;

    public BlockType getContent() {
        return content;
    }

    public void setContent(BlockType content) {
        this.content = content;
    }

    public Integer getPosition() {
        return position;
    }

    public void setPosition(Integer position) {
        this.position = position;
    }

    @Override
    public int compareTo(BlockPanelContent nextContent) {
        return Integer.compare(this.position, nextContent.getPosition());
    }
}
