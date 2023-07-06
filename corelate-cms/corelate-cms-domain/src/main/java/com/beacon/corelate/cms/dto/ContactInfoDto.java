package com.beacon.corelate.cms.dto;

import com.beacon.corelate.commons.data.dto.BaseDto;

import java.util.List;

/**
 * Created by jlava on 9/12/17.
 */
public class ContactInfoDto extends BaseDto<Long>{

    private String address;
    private List<ContactDetailsDto> contactDetails;
    private String longitude;
    private String latitude;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<ContactDetailsDto> getContactDetails() {
        return contactDetails;
    }

    public void setContactDetails(List<ContactDetailsDto> contactDetails) {
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
