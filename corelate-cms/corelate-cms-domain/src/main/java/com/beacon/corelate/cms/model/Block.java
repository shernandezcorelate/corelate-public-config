package com.beacon.corelate.cms.model;

import com.beacon.corelate.commons.data.BaseModel;

import javax.persistence.*;
import java.util.List;
import java.util.SortedSet;
import java.util.TreeSet;

/**
 * Created by jlava on 9/18/17.
 */

@Entity(name = "BLOCK")
public class Block extends BaseModel {

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "BLOCK_ID")
    @OrderBy("position ASC")
    private SortedSet<BlockPanel> blockPanels = new TreeSet<BlockPanel>();

    public SortedSet<BlockPanel> getBlockPanels() {
        return blockPanels;
    }

    public void setBlockPanels(SortedSet<BlockPanel> blockPanels) {
        this.blockPanels = blockPanels;
    }

    @Override
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    public Long getId() {
        return super.getId();
    }

    @Override
    public void setId(Long id) {
        super.setId(id);
    }
}
