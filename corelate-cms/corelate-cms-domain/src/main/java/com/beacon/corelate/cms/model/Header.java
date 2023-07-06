package com.beacon.corelate.cms.model;

import com.beacon.corelate.commons.data.BaseFileRepository;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import java.util.Set;

/**
 * @author ddevera
 */
@Entity
public class Header extends BaseFileRepository {

    @Column(name = "LABEL")
    private String label;

    @Column(name = "SUB_LABEL")
    private String subLabel;

    @Column(name = "SHOW_IMAGE")
    private Boolean showImage;

    @Column(name = "SHOW_LABEL")
    private Boolean showLabel;

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getSubLabel() {
        return subLabel;
    }

    public void setSubLabel(String subLabel) {
        this.subLabel = subLabel;
    }

    public Boolean getShowImage() {
        return showImage;
    }

    public void setShowImage(Boolean showImage) {
        this.showImage = showImage;
    }

    public Boolean getShowLabel() {
        return showLabel;
    }

    public void setShowLabel(Boolean showLabel) {
        this.showLabel = showLabel;
    }

    @Override
    @CollectionTable(name = "HEADER_FILES", joinColumns = @JoinColumn(name = "ID"))
    public Set<String> getFiles() {
        return super.getFiles();
    }
}
