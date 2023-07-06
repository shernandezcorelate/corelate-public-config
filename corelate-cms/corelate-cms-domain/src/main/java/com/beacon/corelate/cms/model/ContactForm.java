package com.beacon.corelate.cms.model;

import com.beacon.corelate.commons.data.BaseModel;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * Created by jlava on 9/13/17.
 */

@Entity(name= "CONTACT_FORM")
public class ContactForm extends BaseModel{

    @Column(name = "NAME")
    private String name;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "SUBJECT")
    private String subject;

    @Column(name = "MESSAGE", columnDefinition = "TEXT")
    private String message;

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }

    public void setEmail(String email) { this.email = email; }

    public String getSubject() { return subject; }

    public void setSubject(String subject) { this.subject = subject; }

    public String getMessage() { return message; }

    public void setMessage(String message) { this.message = message; }
}
