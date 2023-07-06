package com.beacon.corelate.commons.data;

import com.google.common.collect.Sets;

import javax.persistence.ElementCollection;
import javax.persistence.MappedSuperclass;
import java.util.Set;

/**
 * @author ddevera
 */
@MappedSuperclass
public class BaseFileRepository extends BaseModel {

    @ElementCollection
    private Set<String> files = Sets.newHashSet();

    public Set<String> getFiles() {
        return files;
    }

    public void setFiles(Set<String> files) {
        this.files = files;
    }
}
