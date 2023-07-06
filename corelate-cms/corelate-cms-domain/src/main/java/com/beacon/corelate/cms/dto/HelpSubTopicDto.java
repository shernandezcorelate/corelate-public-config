package com.beacon.corelate.cms.dto;

import com.beacon.corelate.commons.data.dto.BaseDto;

/**
 * Created by epadolina on 7/14/17.
 */
public class HelpSubTopicDto extends BaseDto<Long> {
    private String title;
    private String content;
    private String mainTopic;
    private Long topicId;
    private Boolean published;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getMainTopic() {
        return mainTopic;
    }

    public void setMainTopic(String mainTopic) {
        this.mainTopic = mainTopic;
    }

    public Long getTopicId() {
        return topicId;
    }

    public void setTopicId(Long topicId) {
        this.topicId = topicId;
    }

    public Boolean getPublished() {
        return published;
    }

    public void setPublished(Boolean published) {
        this.published = published;
    }
}
