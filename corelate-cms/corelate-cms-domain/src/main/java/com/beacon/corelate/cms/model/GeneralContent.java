package com.beacon.corelate.cms.model;

import org.hibernate.annotations.Type;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.time.LocalDateTime;

/**
 * Created by epadolina on 7/13/17.
 */

@Entity(name = "GENERAL_CONTENT")
public class GeneralContent extends BasePublishableContent {

    @Column(name = "TITLE")
    private String title;

    @Column(name = "CONTENT", columnDefinition = "TEXT")
    private String content;

    @Column(name = "EXCERPT", columnDefinition = "TEXT")
    private String excerpt;

    @Column(name = "CATEGORY")
    private String category;

    @Column(name = "BANNER_PLACE_HOLDER")
    private String bannerPlaceHolder;

    @Column(name = "RELEASE_DATE")
    private LocalDateTime releaseDate;

    @Column(name = "AUTO_POST")
    @Type(type = "yes_no")
    private Boolean autoPost;

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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getBannerPlaceHolder() {
        return bannerPlaceHolder;
    }

    public void setBannerPlaceHolder(String bannerPlaceHolder) {
        this.bannerPlaceHolder = bannerPlaceHolder;
    }

    public String getExcerpt() {
        return excerpt;
    }

    public void setExcerpt(String excerpt) {
        this.excerpt = excerpt;
    }

    public LocalDateTime getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDateTime releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Boolean getAutoPost() {
        return autoPost;
    }

    public void setAutoPost(Boolean autoPost) {
        this.autoPost = autoPost;
    }
}
