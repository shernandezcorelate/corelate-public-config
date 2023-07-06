package com.beacon.corelate.cms.dto;

/**
 * Created by epadolina on 7/12/17.
 */
public class FaqDto extends BasePublishableContentDto<Long> {
    private Boolean published;
    private String question;
    private String answer;
    private Integer position;

    public Boolean getPublished() {
        return published;
    }

    public void setPublished(Boolean published) {
        this.published = published;
    }

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
