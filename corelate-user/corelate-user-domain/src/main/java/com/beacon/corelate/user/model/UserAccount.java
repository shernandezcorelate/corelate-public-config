package com.beacon.corelate.user.model;

import com.beacon.corelate.commons.data.model.User;

import javax.persistence.Embedded;
import javax.persistence.Entity;

/**
 * @author ddevera
 */
@Entity(name = "USER_ACCOUNT")
public class UserAccount extends User {

    @Embedded
    private Name name;

    @Embedded
    private Address address;

    public Name getName() {
        return name;
    }

    public void setName(Name name) {
        this.name = name;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
}
