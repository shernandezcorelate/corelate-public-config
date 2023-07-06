package com.beacon.corelate.commons.data.model;

import com.beacon.corelate.commons.data.BaseModel;
import com.google.common.collect.Sets;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.Set;

/**
 * @author ddevera
 */
@Entity(name = "PERMISSION_GROUP")
public class PermissionGroup extends BaseModel {

    @Column(name = "MODULE")
    private String module;

    @Column(name = "DESCRIPTION")
    private String description;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "permissionGroup")
    private Set<Permission> permissions = Sets.newHashSet();

    public String getModule() {
        return module;
    }

    public void setModule(String module) {
        this.module = module;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<Permission> getPermissions() {
        return permissions;
    }

    public void setPermissions(Set<Permission> permissions) {
        this.permissions = permissions;
    }
}
