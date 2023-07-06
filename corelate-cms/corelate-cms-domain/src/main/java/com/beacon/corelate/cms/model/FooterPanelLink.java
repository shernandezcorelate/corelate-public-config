package com.beacon.corelate.cms.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * Created by epadolina on 7/18/17.
 */

@Embeddable
public class FooterPanelLink {

    @Column(name = "NAME")
    private String name;

    @Column(name = "SYM_LINK")
    private String symlink;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSymlink() {
        return symlink;
    }

    public void setSymlink(String symlink) {
        this.symlink = symlink;
    }
}
