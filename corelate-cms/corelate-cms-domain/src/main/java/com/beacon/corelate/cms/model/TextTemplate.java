package com.beacon.corelate.cms.model;

import com.beacon.corelate.commons.data.BaseModel;
import org.hibernate.annotations.Type;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;

/**
 * @author ddevera
 */
@Entity(name = "TEXT_TEMPLATE")
public class TextTemplate extends BaseModel {

    @Column(name = "KEY", unique = true)
    private String key;

    @Lob
    @Column(name = "TEMPLATE")
    @Type(type = "org.hibernate.type.TextType")
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
