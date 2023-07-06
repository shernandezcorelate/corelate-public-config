package com.beacon.corelate.user.dto;

import com.beacon.corelate.commons.data.dto.BaseDto;
import com.beacon.corelate.commons.data.dto.GroupDto;
import com.beacon.corelate.commons.data.dto.PermissionDto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import javax.validation.constraints.NotNull;
import java.util.List;

/**
 * @author ddevera
 */
public class UserAccountDto extends BaseDto<Long> {

    @NotNull
    private String username;

    private String mobileNumber;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @JsonIgnore
    private Boolean generatedPassword = Boolean.FALSE;

    private NameDto name;

    private AddressDto address;

    private List<GroupDto> groups;

    private List<PermissionDto> permissions;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getGeneratedPassword() {
        return generatedPassword;
    }

    public void setGeneratedPassword(Boolean generatedPassword) {
        this.generatedPassword = generatedPassword;
    }

    public NameDto getName() {
        return name;
    }

    public void setName(NameDto name) {
        this.name = name;
    }

    public AddressDto getAddress() {
        return address;
    }

    public void setAddress(AddressDto address) {
        this.address = address;
    }

    public List<GroupDto> getGroups() {
        return groups;
    }

    public void setGroups(List<GroupDto> groups) {
        this.groups = groups;
    }

    public List<PermissionDto> getPermissions() {
        return permissions;
    }

    public void setPermissions(List<PermissionDto> permissions) {
        this.permissions = permissions;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.DEFAULT_STYLE)
                .append("id", getId())
                .append("username", getUsername())
                .append("name", getName())
                .append("address", getAddress())
                .append("groups", getGroups())
                .toString();
    }
}
