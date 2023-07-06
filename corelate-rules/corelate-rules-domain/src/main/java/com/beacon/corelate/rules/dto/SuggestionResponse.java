package com.beacon.corelate.rules.dto;

import java.util.ArrayList;
import java.util.List;

public class SuggestionResponse {

    private List<String> suggestions = new ArrayList<>();

    public List<String> getSuggestions() {
        return suggestions;
    }

    public void addSuggestion(String suggestion) {
        suggestions.add(suggestion);
    }
}
