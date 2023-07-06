package com.beacon.corelate.authentication.model.authentication;

import com.beacon.corelate.commons.data.BaseModel;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * @author ddevera
 */
@Entity(name = "OAUTH_CLIENT_DETAILS")
public class OauthClientDetail extends BaseModel {

    @Column(name = "CLIENT_ID")
    private String clientId;

    @Column(name = "RESOURCE_IDS")
    private String resourceId;

    @Column(name = "CLIENT_SECRET")
    private String clientSecret;

    @Column(name = "SCOPE")
    private String scope;

    @Column(name = "AUTHORIZED_GRANT_TYPES")
    private String authorizedGrantType;

    @Column(name = "WEB_SERVER_REDIRECT_URI")
    private String redirectUri;

    @Column(name = "AUTHORITIES")
    private String authorities;

    @Column(name = "ACCESS_TOKEN_VALIDITY")
    private Integer accessTokenValidity;

    @Column(name = "REFRESH_TOKEN_VALIDITY")
    private Integer refreshTokenValidity;

    @Column(name = "ADDITIONAL_INFORMATION")
    private String additionalInformation;

    @Column(name = "AUTOAPPROVE")
    private String autoApprove;

    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }

    public String getResourceId() {
        return resourceId;
    }

    public void setResourceId(String resourceId) {
        this.resourceId = resourceId;
    }

    public String getClientSecret() {
        return clientSecret;
    }

    public void setClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
    }

    public String getScope() {
        return scope;
    }

    public void setScope(String scope) {
        this.scope = scope;
    }

    public String getAuthorizedGrantType() {
        return authorizedGrantType;
    }

    public void setAuthorizedGrantType(String authorizedGrantType) {
        this.authorizedGrantType = authorizedGrantType;
    }

    public String getRedirectUri() {
        return redirectUri;
    }

    public void setRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
    }

    public String getAuthorities() {
        return authorities;
    }

    public void setAuthorities(String authorities) {
        this.authorities = authorities;
    }

    public Integer getAccessTokenValidity() {
        return accessTokenValidity;
    }

    public void setAccessTokenValidity(Integer accessTokenValidity) {
        this.accessTokenValidity = accessTokenValidity;
    }

    public Integer getRefreshTokenValidity() {
        return refreshTokenValidity;
    }

    public void setRefreshTokenValidity(Integer refreshTokenValidity) {
        this.refreshTokenValidity = refreshTokenValidity;
    }

    public String getAdditionalInformation() {
        return additionalInformation;
    }

    public void setAdditionalInformation(String additionalInformation) {
        this.additionalInformation = additionalInformation;
    }

    public String getAutoApprove() {
        return autoApprove;
    }

    public void setAutoApprove(String autoApprove) {
        this.autoApprove = autoApprove;
    }
}
