package com.beacon.corelate.user.model;

import com.beacon.corelate.user.reference.Suffix;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.io.Serializable;

/**
 * @author ddevera
 */
@Embeddable
public class Name implements Serializable {

    private static final long serialVersionUID = 2559483558623338403L;

    @Column(name = "FAMILY_NAME")
    private String familyName;

    @Column(name = "GIVEN_NAME")
    private String givenName;

    @Column(name = "MIDDLE_NAME")
    private String middleName;

    @Column(name = "SUFFIX")
    @Enumerated(EnumType.STRING)
    private Suffix suffix;

    @Column(name = "PREFIX")
    private String prefix;

    @Column(name = "DEGREE")
    private String degree;

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

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

    public Suffix getSuffix() {
        return suffix;
    }

    public void setSuffix(Suffix suffix) {
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
}