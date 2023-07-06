package com.beacon.corelate.commons.data.model;

import com.beacon.corelate.commons.data.BaseModel;
import com.google.common.collect.Sets;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.UniqueConstraint;
import java.util.Set;

/**
 * @author ddevera
 */
@Entity(name = "GROUPS")
@Inheritance(strategy = InheritanceType.JOINED)
public class Group extends BaseModel implements GrantedAuthority {

    @Column(name = "NAME")
    private String name;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "EXTERNAL_ID")
    private Long externalId;

    @ManyToMany
    @JoinTable(name = "JOIN_GROUP_X_PERMISSIONS",
            uniqueConstraints = @UniqueConstraint(columnNames = {"GROUP_ID", "PERMISSION_ID"}),
            joinColumns = @JoinColumn(name = "GROUP_ID"),
            inverseJoinColumns = @JoinColumn(name = "PERMISSION_ID"))
    private Set<Permission> permissions = Sets.newHashSet();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getExternalId() {
        return externalId;
    }

    public void setExternalId(Long externalId) {
        this.externalId = externalId;
    }

    public Set<Permission> getPermissions() {
        return permissions;
    }

    public void setPermissions(Set<Permission> permissions) {
        this.permissions = permissions;
    }

    @Override
    public String getAuthority() {
        return name;
    }
}
