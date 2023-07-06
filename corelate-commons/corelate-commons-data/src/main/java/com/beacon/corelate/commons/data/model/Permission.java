package com.beacon.corelate.commons.data.model;

import com.beacon.corelate.commons.data.BaseModel;
import com.fasterxml.jackson.annotation.JsonBackReference;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 * @author ddevera
 */
@Entity(name = "PERMISSION")
public class Permission extends BaseModel implements GrantedAuthority {

    @Column(name = "MODULE")
    private String module;

    @Column(name = "ACTION")
    private String action;

    @ManyToOne
    @JoinColumn(name = "PERMISSION_GROUP_ID")
    @JsonBackReference
    private PermissionGroup permissionGroup;

    public String getModule() {
        return module;
    }

    public void setModule(String module) {
        this.module = module;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public PermissionGroup getPermissionGroup() {
        return permissionGroup;
    }

    public void setPermissionGroup(PermissionGroup permissionGroup) {
        this.permissionGroup = permissionGroup;
    }

    @Override
    public String getAuthority() {
        return module + "_" + action;
    }

    @Override
    protected String printDebug() {
        return module + "_" + action;
    }
}
