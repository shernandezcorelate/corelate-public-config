package com.beacon.corelate.rules.model;

import com.beacon.corelate.commons.data.BaseFileRepository;
import com.beacon.corelate.commons.data.BaseModel;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity(name = "RULE")
public class Rule extends BaseModel {

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "FILE")
    private String file;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }
}
