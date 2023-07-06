package com.beacon.corelate.cms.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import java.util.List;

/**
 * Created by epadolina on 7/14/17.
 */

@Entity(name = "HELP_TOPIC")
public class HelpTopic extends BasePublishableContent {

    @Column(name = "TOPIC", columnDefinition = "TEXT")
    private String topic;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "HELP_TOPIC_ID")
    private List<HelpSubTopic> subTopics;

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public List<HelpSubTopic> getSubTopics() {
        return subTopics;
    }

    public void setSubTopics(List<HelpSubTopic> subTopics) {
        this.subTopics = subTopics;
    }
}
