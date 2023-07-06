package com.beacon.corelate.cms.model;

import com.beacon.corelate.commons.data.BaseModel;

import javax.persistence.*;
import java.util.List;

/**
 * Created by jlava on 9/12/17.
 */

@Entity(name = "CONTACT_INFO")
public class ContactInfo extends BaseModel {

    @Column(name= "ADDRESS")
    private String address;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "CONTACT_INFO_ID")
    private List<ContactDetails> contactDetails;

    @Column(name= "LONGITUDE")
    private String longitude;

    @Column(name = "LATITUDE")
    private String latitude;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<ContactDetails> getContactDetails() {
        return contactDetails;
    }

    public void setContactDetails(List<ContactDetails> contactDetails) {
        this.contactDetails = contactDetails;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }
}
