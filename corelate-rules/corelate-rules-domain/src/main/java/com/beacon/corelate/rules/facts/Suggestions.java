package com.beacon.corelate.rules.facts;

import java.util.ArrayList;
import java.util.List;

public class Suggestions {

    private List<String> suggestedCourseCode = new ArrayList<>();

    public List<String> getSuggestedCourseCodes() {
        return suggestedCourseCode;
    }

    public void addSuggestedCourseCode(String suggestion) {
        suggestedCourseCode.add(suggestion);
    }
}
