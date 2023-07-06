package com.beacon.corelate.commons.data.model;

import com.beacon.corelate.commons.data.BaseModel;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * @author ddevera
 */
@Entity(name = "USER_CLIENT_DETAILS")
public class UserClientDetail extends BaseModel {

    @Column(name = "USERNAME")
    private String username;

    @Column(name = "BASIC", columnDefinition = "TEXT")
    private String basic;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getBasic() {
        return basic;
    }

    public void setBasic(String basic) {
        this.basic = basic;
    }
}
