package com.beacon.corelate.catalog.model;

import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Store;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

/**
 * Created by epadolina on 8/2/17.
 */

@Embeddable
public class CatalogEntry implements Serializable, Comparable<CatalogEntry> {

    @Field(store = Store.YES)
    @Column(name = "FIELD_NAME")
    private String fieldName;

    @Field(store = Store.YES)
    @Column(name = "VALUE")
    private String value;

    @Column(name = "INDEX")
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
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }

        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        CatalogEntry that = (CatalogEntry) o;

        return getFieldName().concat(getValue()).equals(that.getFieldName().concat(that.getFieldName()));
    }

    @Override
    public int hashCode() {
        int result = getFieldName() != null ? getFieldName().hashCode() : 0;
        result = 31 * result + (getValue() != null ? getValue().hashCode() : 0);
        return result;
    }

    @Override
    public int compareTo(CatalogEntry nextEntry) {
        return Integer.compare(this.index, nextEntry.getIndex());
    }
}
