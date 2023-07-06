package com.beacon.corelate.cms.dto;

import java.util.List;

/**
 * Created by epadolina on 7/14/17.
 */
public class HelpTopicDto extends BasePublishableContentDto<Long> {

    private String topic;

    private Boolean published;

    private List<HelpSubTopicDto> subTopics;

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public Boolean getPublished() {
        return published;
    }

    public void setPublished(Boolean published) {
        this.published = published;
    }

    public List<HelpSubTopicDto> getSubTopics() {
        return subTopics;
    }

    public void setSubTopics(List<HelpSubTopicDto> subTopics) {
        this.subTopics = subTopics;
    }
}
