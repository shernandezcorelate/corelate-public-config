package com.beacon.corelate.cms.dto;

/**
 * Created by jlava on 9/19/17.
 */
public class ProjectSiteButtonDto {

    private String label;
    private String link;
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
