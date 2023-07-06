package com.beacon.corelate.user.dto;

import org.apache.commons.lang3.StringUtils;

/**
 * @author ddevera
 */
public class AddressDto {

    private String address;

    private String address2;

    private String province;

    private String city;

    private String country;

    private String zipCode;

    private String countryName;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public String toFullCountryAddress() {
        StringBuilder addressSb = new StringBuilder();

        if (StringUtils.isNotEmpty(address)) {
            addressSb = addressSb.append(address);
        }
        if (StringUtils.isNotEmpty(address2)) {
            addressSb = addressSb.append(" ").append(address2);
        }

        if (StringUtils.isNotEmpty(city)) {
            addressSb = addressSb.append(", ").append(city);
        }

        if (StringUtils.isNotEmpty(province)) {
            addressSb = addressSb.append(", ").append(province);
        }

        if (StringUtils.isNotEmpty(countryName)) {
            addressSb = addressSb.append(", ").append(countryName);
        } else if (StringUtils.isNotEmpty(country)) {
            addressSb = addressSb.append(", ").append(country);
        }


        if (StringUtils.isNotEmpty(zipCode)) {
            addressSb = addressSb.append(", ").append(zipCode);
        }

        return addressSb.toString();
    }

    @Override
    public String toString() {
        return toFullCountryAddress();
    }
}
