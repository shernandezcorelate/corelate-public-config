package com.beacon.corelate.catalog.dto;

/**
 * Created by epadolina on 8/10/17.
 */
public class CatalogKeysDto {
    private String name;
    private String label;

    public CatalogKeysDto(String name, String label) {
        this.name = name;
        this.label = label;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }
}
