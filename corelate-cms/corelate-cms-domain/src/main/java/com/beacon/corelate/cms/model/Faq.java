package com.beacon.corelate.cms.model;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * Created by epadolina on 7/12/17.
 */
@Entity(name = "FAQ")
public class Faq extends BasePublishableContent {

    @Column(name = "QUESTION")
    private String question;

    @Column(name = "ANSWER", columnDefinition = "TEXT")
    private String answer;

    @Column(name = "POSITION")
    private Integer position;

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public Integer getPosition() {
        return position;
    }

    public void setPosition(Integer position) {
        this.position = position;
    }
}
