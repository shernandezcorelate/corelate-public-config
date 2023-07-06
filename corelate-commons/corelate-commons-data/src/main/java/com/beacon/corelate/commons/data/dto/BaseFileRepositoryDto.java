package com.beacon.corelate.commons.data.dto;

import java.util.Set;

/**
 * @author ddevera
 */
public class BaseFileRepositoryDto<ID> extends BaseDto<ID> {

    private String file;

    private Set<String> files;

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    public Set<String> getFiles() {
        return files;
    }

    public void setFiles(Set<String> files) {
        this.files = files;
    }
}
