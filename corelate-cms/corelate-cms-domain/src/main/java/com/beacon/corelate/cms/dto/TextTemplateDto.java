package com.beacon.corelate.cms.dto;

import com.beacon.corelate.commons.data.dto.BaseDto;

/**
 * @author ddevera
 */
public class TextTemplateDto extends BaseDto<Long> {

    public TextTemplateDto() {
    }

    public TextTemplateDto(String key, String template) {
        this.key = key;
        this.template = template;
    }

    private String key;

    private String template;

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getTemplate() {
        return template;
    }

    public void setTemplate(String template) {
        this.template = template;
    }
}
