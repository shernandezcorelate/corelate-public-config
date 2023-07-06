package com.beacon.corelate.catalog.dto;

/**
 * Created by epadolina on 8/4/17.
 */
public class CatalogFilterDto {
    private String key;
    private String fieldName;
    private String value;

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

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
}
