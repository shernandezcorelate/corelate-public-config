package com.beacon.corelate.catalog.dto;

import java.util.LinkedHashSet;
import java.util.Set;
import java.util.TreeSet;

/**
 * Created by epadolina on 8/8/17.
 */
public class CatalogFormRowEntry {
    private Set<CatalogEntryDto> entries = new TreeSet<>();

    public Set<CatalogEntryDto> getEntries() {
        return entries;
    }

    public void setEntries(Set<CatalogEntryDto> entries) {
        this.entries = entries;
    }
}
