package com.beacon.corelate.rules.resource.dto;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

import java.util.HashMap;
import java.util.Map;

public class SuggestionRequest {
    private String ruleId;
    private Map<String, Integer> ratings = new HashMap<>();

    public String getRuleId() {
        return ruleId;
    }

    public void setRuleId(String ruleId) {
        this.ruleId = ruleId;
    }

    public Map<String, Integer> getRatings() {
        return ratings;
    }

    public void setRatings(Map<String, Integer> ratings) {
        this.ratings = ratings;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;

        if (o == null || getClass() != o.getClass()) return false;

        SuggestionRequest that = (SuggestionRequest) o;

        return new EqualsBuilder()
                .append(ruleId, that.ruleId)
                .append(ratings, that.ratings)
                .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37)
                .append(ruleId)
                .append(ratings)
                .toHashCode();
    }
}
