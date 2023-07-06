package com.beacon.corelate.rules.resource.dto;

public class RuleUploadResponse {

    private String ruleId;

    public RuleUploadResponse() {
    }

    public RuleUploadResponse(String ruleId) {
        this.ruleId = ruleId;
    }

    public String getRuleId() {
        return ruleId;
    }

    public void setRuleId(String ruleId) {
        this.ruleId = ruleId;
    }
}
