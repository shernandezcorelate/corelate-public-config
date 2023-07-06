package com.beacon.corelate.user.reference;

import com.google.common.collect.Maps;

import java.util.Map;

/**
 * @author ddevera
 */
public enum  Suffix {

    JR("JR", "Jr."),
    SR("SR", "Sr."),
    I("I", "I"),
    II("II", "II"),
    III("III", "III"),
    IV("IV", "IV"),
    V("V", "V"),
    VI("VI", "VI"),
    VII("VII", "VII"),
    VIII("VIII", "VIII"),
    IX("IX", "IX"),
    X("X", "X"),
    XI("XI", "XI"),
    XII("XII", "XII"),
    XIII("XIII", "XIII"),
    XIV("XIV", "XIV"),
    XV("XV", "XV"),
    XVI("XVI", "XVI");

    private String value;

    private String description;

    private static final Map<String, Suffix> LOOKUP = Maps.newHashMap();

    Suffix(String value, String description) {
        this.value = value;
        this.description = description;
    }

    static {
        for (Suffix suffix : Suffix.values()) {
            LOOKUP.put(suffix.value.toLowerCase(), suffix);
        }
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return description;
    }

    /**
     * Lookup method to retrieve Suffix object by code.
     *
     * @param value - the code of the Suffix object.
     * @return Suffix - the Suffix object.
     */
    public static Suffix get(String value) {
        return LOOKUP.get(value.toLowerCase());
    }
}
