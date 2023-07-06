package com.beacon.corelate.user.dto;

/**
 * @author ddevera
 */
public class UserSmsActivationDto {

    private String username;

    private String activationCode;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getActivationCode() {
        return activationCode;
    }

    public void setActivationCode(String activationCode) {
        this.activationCode = activationCode;
    }
}
