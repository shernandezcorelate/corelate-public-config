package com.beacon.corelate.catalog.model;

import com.beacon.corelate.commons.data.BaseModel;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.hibernate.search.annotations.*;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.TreeSet;

/**
 * Created by epadolina on 8/2/17.
 */

@Indexed
@Analyzer(impl = StandardAnalyzer.class)
@Entity(name = "CATALOG")
public class Catalog extends BaseModel {

    public static final String DEFAULT_QUERY_FIELD_NAME = "key";

    @Field(store = Store.YES)
    @Column(name = "KEY")
    private String key;

    @Column(name = "LABEL")
    private String label;

    @IndexedEmbedded
    @ElementCollection
    @CollectionTable(name = "CATALOG_ENTRY", joinColumns = @JoinColumn(name = "CATALOG_ID"))
    @OrderBy("index ASC")
    private Set<CatalogEntry> entries = new TreeSet<CatalogEntry>();

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

    public Set<CatalogEntry> getEntries() {
        return entries;
    }

    public void setEntries(Set<CatalogEntry> entries) {
        this.entries = entries;
    }

    @Override
    @Field(store = Store.YES)
    public Boolean getDeleted() {
        return super.getDeleted();
    }
}
