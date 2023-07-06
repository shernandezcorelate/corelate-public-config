package com.beacon.corelate.catalog.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * Created by epadolina on 8/8/17.
 */
public class CatalogFormDto {
    private String key;
    private String label;
    private List<CatalogFormRowEntry> rowEntries;
    private MultipartFile file;

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public List<CatalogFormRowEntry> getRowEntries() {
        return rowEntries;
    }

    public void setRowEntries(List<CatalogFormRowEntry> rowEntries) {
        this.rowEntries = rowEntries;
    }

    @JsonIgnore
    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }
}
