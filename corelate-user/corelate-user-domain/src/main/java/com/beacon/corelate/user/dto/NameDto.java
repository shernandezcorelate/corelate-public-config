package com.beacon.corelate.user.dto;

import static org.apache.commons.lang3.StringUtils.isNotEmpty;

/**
 * @author ddevera
 */
public class NameDto {

    private String familyName;

    private String givenName;

    private String middleName;

    private String suffix;

    private String prefix;

    private String degree;

    public String getFamilyName() {
        return familyName;
    }

    public void setFamilyName(String familyName) {
        this.familyName = familyName;
    }

    public String getGivenName() {
        return givenName;
    }

    public void setGivenName(String givenName) {
        this.givenName = givenName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getSuffix() {
        return suffix;
    }

    public void setSuffix(String suffix) {
        this.suffix = suffix;
    }

    public String getPrefix() {
        return prefix;
    }

    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String toFamilyNameFirstFormat() {
        StringBuilder nameAsString = new StringBuilder();
        if (null != familyName) {
            nameAsString.append(familyName);
        }
        if (nameAsString.length() > 0 && (isNotEmpty(givenName) || isNotEmpty(middleName))) {
            nameAsString.append(", ");
        }
        if (isNotEmpty(givenName)) {
            nameAsString.append(givenName);
        }
        if (isNotEmpty(middleName)) {
            nameAsString.append(" ").append(middleName);
        }
        return nameAsString.length() > 0 ? nameAsString.toString() : "No name provided";
    }

    public String toFullNameFormat() {
        return givenName + " " + familyName;
    }

    @Override
    public String toString() {
        return toFullNameFormat();
    }
}
