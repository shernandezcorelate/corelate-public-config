package com.beacon.corelate.cms.model;

import com.beacon.corelate.commons.data.BaseFileRepository;

import javax.persistence.*;
import java.util.List;

/**
 * Created by epadolina on 7/18/17.
 */

@Entity(name= "FOOTER")
public class Footer extends BaseFileRepository {

    @Column(name= "DESCRIPTION", columnDefinition = "TEXT")
    private String description;

    @Column(name= "COPYRIGHT", columnDefinition = "TEXT")
    private String copyright;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "FOOTER_ID")
    @OrderColumn(name = "INDEX")
    private List<FooterPanel> panels;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCopyright() {
        return copyright;
    }

    public void setCopyright(String copyright) {
        this.copyright = copyright;
    }

    public List<FooterPanel> getPanels() {
        return panels;
    }

    public void setPanels(List<FooterPanel> panels) {
        this.panels = panels;
    }
}
