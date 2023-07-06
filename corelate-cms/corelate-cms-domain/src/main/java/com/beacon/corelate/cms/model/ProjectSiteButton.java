package com.beacon.corelate.cms.model;

import org.hibernate.annotations.Type;

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * Created by jlava on 9/19/17.
 */

@Embeddable
public class ProjectSiteButton {

    @Column(name = "LABEL")
    private String label;

    @Column(name = "LINK")
    private String link;

    @Column(name = "PUBLIC_ACCESS")
    @Type(type = "yes_no")
    private Boolean publicAccess;

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Boolean getPublicAccess() {
        return publicAccess;
    }

    public void setPublicAccess(Boolean publicAccess) {
        this.publicAccess = publicAccess;
    }
}
