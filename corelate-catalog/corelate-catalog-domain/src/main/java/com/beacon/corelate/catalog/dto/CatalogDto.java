package com.beacon.corelate.catalog.dto;

import com.beacon.corelate.commons.data.dto.BaseDto;

import java.util.LinkedHashSet;
import java.util.Set;
import java.util.TreeSet;

/**
 * Created by epadolina on 8/4/17.
 */
public class CatalogDto extends BaseDto<Long> {
    private String key;
    private String label;
    private Set<CatalogEntryDto> entries = new TreeSet<CatalogEntryDto>();

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

    public Set<CatalogEntryDto> getEntries() {
        return entries;
    }

    public void setEntries(Set<CatalogEntryDto> entries) {
        this.entries = entries;
    }
}
