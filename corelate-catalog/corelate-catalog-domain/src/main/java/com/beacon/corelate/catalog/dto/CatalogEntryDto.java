package com.beacon.corelate.catalog.dto;

/**
 * Created by epadolina on 8/4/17.
 */
public class CatalogEntryDto implements Comparable<CatalogEntryDto> {
    private String fieldName;
    private String value;
    private Integer index;

    public String getFieldName() {
        return fieldName;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    @Override
    public int compareTo(CatalogEntryDto nextEntry) {
        return Integer.compare(this.index, nextEntry.getIndex());
    }
}
