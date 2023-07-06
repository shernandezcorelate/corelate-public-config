package com.beacon.corelate.cms.model;

import com.beacon.corelate.commons.data.BaseModel;

import javax.persistence.*;

/**
 * Created by jlava on 9/26/17.
 */

@Entity(name = "COLOR_CONFIG")
public class ColorConfig extends BaseModel {

    @Column(name = "HEADER_BACKGROUND_COLOR")
    private String headerBackgroundColor;

    @Column(name = "HEADER_TEXT_COLOR")
    private String headerTextColor;

    @Column(name = "NAVIGATION_BACKGROUND_COLOR")
    private String navigationBackgroundColor;

    @Column(name = "NAVIGATION_TEXT_COLOR")
    private String navigationTextColor;

    @Column(name = "FOOTER_BACKGROUND_COLOR")
    private String footerBackgroundColor;

    @Column(name = "FOOTER_TEXT_COLOR")
    private String footerTextColor;

    @Column(name = "BUTTONS_PRIMARY_COLOR")
    private String buttonsPrimaryColor;

    @Column(name = "BUTTONS_PRIMARY_TEXT_COLOR")
    private String buttonsPrimaryTextColor;

    @Column(name = "BUTTONS_SECONDARY_COLOR")
    private String buttonsSecondaryColor;

    @Column(name = "BUTTONS_SECONDARY_TEXT_COLOR")
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
}
