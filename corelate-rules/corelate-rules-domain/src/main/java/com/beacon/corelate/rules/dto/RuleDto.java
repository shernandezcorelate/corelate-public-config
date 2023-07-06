package com.beacon.corelate.rules.dto;

import com.beacon.corelate.commons.data.dto.BaseDto;

public class RuleDto extends BaseDto<Long> {
    private String description;
    private String file;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }
}
