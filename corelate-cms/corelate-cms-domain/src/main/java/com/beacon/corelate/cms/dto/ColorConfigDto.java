package com.beacon.corelate.cms.dto;

import com.beacon.corelate.commons.data.dto.BaseDto;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Created by jlava on 9/26/17.
 */
public class ColorConfigDto extends BaseDto<Long> {
    private String headerBackgroundColor;
    private String headerTextColor;
    private String navigationBackgroundColor;
    private String navigationTextColor;
    private String footerBackgroundColor;
    private String footerTextColor;
    private String buttonsPrimaryColor;
    private String buttonsPrimaryTextColor;
    private String buttonsSecondaryColor;
    private String buttonsSecondaryTextColor;

    public String getHeaderBackgroundColor() {
        return headerBackgroundColor;
    }

    public void setHeaderBackgroundColor(String headerBackgroundColor) {
        this.headerBackgroundColor = headerBackgroundColor;
    }

    public String getHeaderTextColor() {
        return headerTextColor;
    }

    public void setHeaderTextColor(String headerTextColor) {
        this.headerTextColor = headerTextColor;
    }

    public String getNavigationBackgroundColor() {
        return navigationBackgroundColor;
    }

    public void setNavigationBackgroundColor(String navigationBackgroundColor) {
        this.navigationBackgroundColor = navigationBackgroundColor;
    }

    public String getNavigationTextColor() {
        return navigationTextColor;
    }

    public void setNavigationTextColor(String navigationTextColor) {
        this.navigationTextColor = navigationTextColor;
    }

    public String getFooterBackgroundColor() {
        return footerBackgroundColor;
    }

    public void setFooterBackgroundColor(String footerBackgroundColor) {
        this.footerBackgroundColor = footerBackgroundColor;
    }

    public String getFooterTextColor() {
        return footerTextColor;
    }

    public void setFooterTextColor(String footerTextColor) {
        this.footerTextColor = footerTextColor;
    }

    public String getButtonsPrimaryColor() {
        return buttonsPrimaryColor;
    }

    public void setButtonsPrimaryColor(String buttonsPrimaryColor) {
        this.buttonsPrimaryColor = buttonsPrimaryColor;
    }

    public String getButtonsPrimaryTextColor() {
        return buttonsPrimaryTextColor;
    }

    public void setButtonsPrimaryTextColor(String buttonsPrimaryTextColor) {
        this.buttonsPrimaryTextColor = buttonsPrimaryTextColor;
    }

    public String getButtonsSecondaryColor() {
        return buttonsSecondaryColor;
    }

    public void setButtonsSecondaryColor(String buttonsSecondaryColor) {
        this.buttonsSecondaryColor = buttonsSecondaryColor;
    }

    public String getButtonsSecondaryTextColor() {
        return buttonsSecondaryTextColor;
    }

    public void setButtonsSecondaryTextColor(String buttonsSecondaryTextColor) {
        this.buttonsSecondaryTextColor = buttonsSecondaryTextColor;
    }

    @Override
    @JsonIgnore
    public Long getId() {
        return super.getId();
    }
}