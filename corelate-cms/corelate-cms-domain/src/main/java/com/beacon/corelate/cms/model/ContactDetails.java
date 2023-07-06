package com.beacon.corelate.cms.model;

import com.beacon.corelate.commons.data.BaseModel;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

/**
 * Created by jlava on 9/28/17.
 */

@Entity(name = "CONTACT_DETAILS")
public class ContactDetails extends BaseModel{

    @Column(name = "CONTACT_TYPE")
    private String contactType;

    @Column(name = "CONTACT_DETAILS")
    private String contactDetails;

    @ManyToOne
    private ContactInfo contactInfo;

    public String getContactType() {
        return contactType;
    }

    public void setContactType(String contactType) {
        this.contactType = contactType;
    }

    public String getContactDetails() {
        return contactDetails;
    }

    public void setContactDetails(String contactDetails) {
        this.contactDetails = contactDetails;
    }

    public ContactInfo getContactInfo() {
        return contactInfo;
    }

    public void setContactInfo(ContactInfo contactInfo) {
        this.contactInfo = contactInfo;
    }
}
