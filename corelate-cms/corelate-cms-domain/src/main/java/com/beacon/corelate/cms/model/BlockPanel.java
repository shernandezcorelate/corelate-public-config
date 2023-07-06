package com.beacon.corelate.cms.model;

import com.beacon.corelate.cms.reference.BlockTemplate;
import com.beacon.corelate.commons.data.BaseModel;

import javax.persistence.*;
import java.util.*;

/**
 * Created by jlava on 9/13/17.
 */

@Entity(name = "BLOCK_PANEL")
public class BlockPanel extends BaseModel implements Comparable<BlockPanel> {

    @Column(name = "TEMPLATE")
    @Enumerated(EnumType.STRING)
    private BlockTemplate template;

    @ElementCollection
    @CollectionTable(name = "BLOCK_PANEL_CONTENT", joinColumns = @JoinColumn(name = "BLOCK_PANEL_ID"))
    @OrderBy("position ASC")
    private SortedSet<BlockPanelContent> contents = new TreeSet<BlockPanelContent>();

    @Column(name = "POSITION")
    private Integer position;

    @ManyToOne
    private Block block;

    public BlockTemplate getTemplate() {
        return template;
    }

    public void setTemplate(BlockTemplate template) {
        this.template = template;
    }

    public SortedSet<BlockPanelContent> getContents() {
        return contents;
    }

    public void setContents(SortedSet<BlockPanelContent> contents) {
        this.contents = contents;
    }

    public Integer getPosition() {
        return position;
    }

    public void setPosition(Integer position) {
        this.position = position;
    }

    public Block getBlock() {
        return block;
    }

    public void setBlock(Block block) {
        this.block = block;
    }

    @Override
    public int compareTo(BlockPanel nextPanel) {
        return Integer.compare(this.position, nextPanel.getPosition());
    }
}
