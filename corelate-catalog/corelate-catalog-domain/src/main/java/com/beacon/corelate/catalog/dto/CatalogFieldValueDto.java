package com.beacon.corelate.catalog.dto;

public class CatalogFieldValueDto {
    private String field;
    private String value;

    public CatalogFieldValueDto(String field, String value) {
        this.field = field;
        this.value = value;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
