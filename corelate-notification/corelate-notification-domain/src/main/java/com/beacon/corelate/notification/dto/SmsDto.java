package com.beacon.corelate.notification.dto;

import java.util.List;

/**
 * @author ddevera
 */
public class SmsDto {

    private String mobileNumber;

    private List<String> mobileNumbers;

    private String text;

    public SmsDto() {}

    public SmsDto(String mobileNumber, String text) {
        this.mobileNumber = mobileNumber;
        this.text = text;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public List<String> getMobileNumbers() {
        return mobileNumbers;
    }

    public void setMobileNumbers(List<String> mobileNumbers) {
        this.mobileNumbers = mobileNumbers;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
