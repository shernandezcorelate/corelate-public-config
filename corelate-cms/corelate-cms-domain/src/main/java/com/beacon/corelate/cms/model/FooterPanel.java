package com.beacon.corelate.cms.model;

import com.beacon.corelate.commons.data.BaseModel;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.List;

/**
 * Created by epadolina on 7/18/17.
 */

@Entity(name = "FOOTER_PANEL")
public class FooterPanel extends BaseModel {

    @Column(name = "INDEX")
    private Integer index;

    @Column(name = "NAME")
    private String name;

    @ElementCollection
    @CollectionTable(name = "FOOTER_PANEL_LINK", joinColumns = @JoinColumn(name = "FOOTER_PANEL_ID"))
    private List<FooterPanelLink> links;

    @ManyToOne
    private Footer footer;

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<FooterPanelLink> getLinks() {
        return links;
    }

    public void setLinks(List<FooterPanelLink> links) {
        this.links = links;
    }

    public Footer getFooter() {
        return footer;
    }

    public void setFooter(Footer footer) {
        this.footer = footer;
    }
}
