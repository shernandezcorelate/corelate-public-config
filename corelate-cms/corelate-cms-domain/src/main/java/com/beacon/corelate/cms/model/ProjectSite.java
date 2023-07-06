package com.beacon.corelate.cms.model;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

/**
 * Created by jlava on 9/19/17.
 */

@Entity(name = "PROJECT_SITE")
public class ProjectSite extends BasePublishableContent {

    @Column(name = "TITLE")
    private String title;

    @Column(name = "CONTENT", columnDefinition = "TEXT")
    private String content;

    @Column(name = "EXCERPT", columnDefinition = "TEXT")
    private String excerpt;

    @Column(name = "OPENING_DATE")
    private LocalDateTime openingDate;

    @Column(name = "CLOSING_DATE")
    private LocalDateTime closingDate;

    @Column(name = "RELEASE_DATE")
    private LocalDateTime releaseDate;

    @ElementCollection
    @CollectionTable(name = "PROJECT_SITE_BUTTON", joinColumns = @JoinColumn(name = "PROJECT_SITE_ID"))
    private List<ProjectSiteButton> buttons;

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

    public String getExcerpt() {
        return excerpt;
    }

    public void setExcerpt(String excerpt) {
        this.excerpt = excerpt;
    }

    public LocalDateTime getOpeningDate() {
        return openingDate;
    }

    public void setOpeningDate(LocalDateTime openingDate) {
        this.openingDate = openingDate;
    }

    public LocalDateTime getClosingDate() {
        return closingDate;
    }

    public void setClosingDate(LocalDateTime closingDate) {
        this.closingDate = closingDate;
    }

    public LocalDateTime getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDateTime releaseDate) {
        this.releaseDate = releaseDate;
    }

    public List<ProjectSiteButton> getButtons() {
        return buttons;
    }

    public void setButtons(List<ProjectSiteButton> buttons) {
        this.buttons = buttons;
    }
}
