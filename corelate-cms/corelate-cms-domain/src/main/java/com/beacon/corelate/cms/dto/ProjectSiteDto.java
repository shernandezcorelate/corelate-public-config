package com.beacon.corelate.cms.dto;

import java.time.ZonedDateTime;
import java.util.List;

/**
 * Created by jlava on 9/19/17.
 */
public class ProjectSiteDto extends BasePublishableContentDto<Long> {

    private String title;
    private String content;
    private String excerpt;
    private ZonedDateTime openingDate;
    private ZonedDateTime closingDate;
    private ZonedDateTime releaseDate;
    private List<ProjectSiteButtonDto> buttons;

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

    public ZonedDateTime getOpeningDate() {
        return openingDate;
    }

    public void setOpeningDate(ZonedDateTime openingDate) {
        this.openingDate = openingDate;
    }

    public ZonedDateTime getClosingDate() {
        return closingDate;
    }

    public void setClosingDate(ZonedDateTime closingDate) {
        this.closingDate = closingDate;
    }

    public ZonedDateTime getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(ZonedDateTime releaseDate) {
        this.releaseDate = releaseDate;
    }

    public List<ProjectSiteButtonDto> getButtons() {
        return buttons;
    }

    public void setButtons(List<ProjectSiteButtonDto> buttons) {
        this.buttons = buttons;
    }
}
