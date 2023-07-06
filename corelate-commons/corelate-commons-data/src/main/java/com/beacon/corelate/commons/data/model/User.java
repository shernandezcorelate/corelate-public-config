package com.beacon.corelate.commons.data.model;

import com.beacon.corelate.commons.data.BaseModel;
import com.google.common.collect.Sets;
import org.hibernate.annotations.Type;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.UniqueConstraint;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @author ddevera
 */
@Entity(name = "USERS")
@Inheritance(strategy = InheritanceType.JOINED)
public class User extends BaseModel implements UserDetails {

    @Column(name = "USERNAME", nullable = false, unique = true)
    private String username;

    @Column(name = "PASSWORD", nullable = false)
    private String password;

    @Column(name = "ENABLED", nullable = false)
    @Type(type = "yes_no")
    private Boolean enabled = Boolean.TRUE;

    @Column(name = "ACCOUNT_NON_LOCKED", nullable = false)
    @Type(type = "yes_no")
    private Boolean accountNonLocked = Boolean.TRUE;

    @Column(name = "ACCOUNT_NON_EXPIRED", nullable = false)
    @Type(type = "yes_no")
    private Boolean accountNonExpired = Boolean.TRUE;

    @Column(name = "CREDENTIALS_NON_EXPIRED", nullable = false)
    @Type(type = "yes_no")
    private Boolean credentialsNonExpired = Boolean.TRUE;

    @Column(name = "PASSWORD_RESET_CODE")
    private String passwordResetCode;

    @Column(name = "PASSWORD_RESET_CODE_CREATED_DATE")
    private LocalDateTime passwordResetCodeCreateDate;

    @Column(name = "MAIL_ACTIVATION_CODE")
    private String mailActivationCode;

    @Column(name = "MAIL_ACTIVATION_CODE_CREATED_DATE")
    private LocalDateTime mailActivationCodeCreatedDate;

    @Column(name = "MOBILE_NUMBER")
    private String mobileNumber;

    @Column(name = "MOBILE_ACTIVATION_CODE")
    private String mobileActivationCode;

    @Column(name = "MOBILE_ACTIVATION_CODE_CREATED_DATE")
    private LocalDateTime mobileActivationCodeCreatedDate;

    @Column(name = "EXTERNAL_ID")
    private Long externalId;

    @ManyToMany
    @JoinTable(
            name = "JOIN_USER_X_GROUPS",
            uniqueConstraints = @UniqueConstraint(columnNames = {"USER_ID", "GROUP_ID"}),
            joinColumns = @JoinColumn(name = "USER_ID"),
            inverseJoinColumns = @JoinColumn(name = "GROUP_ID")
    )
    private Set<Group> groups = Sets.newHashSet();

    @ManyToMany
    @JoinTable(
            name = "JOIN_USER_X_PERMISSIONS",
            uniqueConstraints = @UniqueConstraint(columnNames = {"USER_ID", "PERMISSION_ID"}),
            joinColumns = @JoinColumn(name = "USER_ID"),
            inverseJoinColumns = @JoinColumn(name = "PERMISSION_ID")
    )
    private Set<Permission> permissions = Sets.newHashSet();

    @Override
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public Boolean getAccountNonLocked() {
        return accountNonLocked;
    }

    public void setAccountNonLocked(Boolean accountNonLocked) {
        this.accountNonLocked = accountNonLocked;
    }

    public Boolean getAccountNonExpired() {
        return accountNonExpired;
    }

    public void setAccountNonExpired(Boolean accountNonExpired) {
        this.accountNonExpired = accountNonExpired;
    }

    public Boolean getCredentialsNonExpired() {
        return credentialsNonExpired;
    }

    public void setCredentialsNonExpired(Boolean credentialsNonExpired) {
        this.credentialsNonExpired = credentialsNonExpired;
    }

    public String getPasswordResetCode() {
        return passwordResetCode;
    }

    public void setPasswordResetCode(String passwordResetCode) {
        this.passwordResetCode = passwordResetCode;
    }

    public LocalDateTime getPasswordResetCodeCreateDate() {
        return passwordResetCodeCreateDate;
    }

    public void setPasswordResetCodeCreateDate(LocalDateTime passwordResetCodeCreateDate) {
        this.passwordResetCodeCreateDate = passwordResetCodeCreateDate;
    }

    public String getMailActivationCode() {
        return mailActivationCode;
    }

    public void setMailActivationCode(String mailActivationCode) {
        this.mailActivationCode = mailActivationCode;
    }

    public LocalDateTime getMailActivationCodeCreatedDate() {
        return mailActivationCodeCreatedDate;
    }

    public void setMailActivationCodeCreatedDate(LocalDateTime mailActivationCodeCreatedDate) {
        this.mailActivationCodeCreatedDate = mailActivationCodeCreatedDate;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getMobileActivationCode() {
        return mobileActivationCode;
    }

    public void setMobileActivationCode(String mobileActivationCode) {
        this.mobileActivationCode = mobileActivationCode;
    }

    public LocalDateTime getMobileActivationCodeCreatedDate() {
        return mobileActivationCodeCreatedDate;
    }

    public void setMobileActivationCodeCreatedDate(LocalDateTime mobileActivationCodeCreatedDate) {
        this.mobileActivationCodeCreatedDate = mobileActivationCodeCreatedDate;
    }

    public Long getExternalId() {
        return externalId;
    }

    public void setExternalId(Long externalId) {
        this.externalId = externalId;
    }

    public Set<Group> getGroups() {
        return groups;
    }

    public void setGroups(Set<Group> groups) {
        this.groups = groups;
    }

    public Set<Permission> getPermissions() {
        return permissions;
    }

    public void setPermissions(Set<Permission> permissions) {
        this.permissions = permissions;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Set<GrantedAuthority> authorities = Sets.newHashSet();

        authorities
                .addAll(
                        groups
                                .stream()
                                .filter(group -> !group.getDeleted())
                                .collect(Collectors.toList()));

        authorities
                .addAll(
                        permissions
                                .stream()
                                .filter(permission -> !permission.getDeleted())
                                .collect(Collectors.toList()));

        return authorities;
    }

    public boolean hasAuthority(String authority) {
        Collection<? extends GrantedAuthority> grantedAuthorities = getAuthorities();

        for (GrantedAuthority auth : grantedAuthorities) {
            if (auth.getAuthority().equals(authority)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean isAccountNonExpired() {
        return accountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        return accountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return credentialsNonExpired;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }
}
