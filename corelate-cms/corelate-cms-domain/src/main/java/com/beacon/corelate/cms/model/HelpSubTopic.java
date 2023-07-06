package com.beacon.corelate.cms.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

/**
 * Created by epadolina on 7/14/17.
 */

@Entity(name = "HELP_SUB_TOPIC")
public class HelpSubTopic extends BasePublishableContent {

    @Column(name = "TITLE")
    private String title;

    @Column(name = "CONTENT", columnDefinition = "TEXT")
    private String content;

    @Column(name = "MAIN_TOPIC", columnDefinition = "TEXT")
    private String mainTopic;

    @ManyToOne
    private HelpTopic helpTopic;

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

    public HelpTopic getHelpTopic() {
        return helpTopic;
    }

    public void setHelpTopic(HelpTopic helpTopic) {
        this.helpTopic = helpTopic;
    }
}
