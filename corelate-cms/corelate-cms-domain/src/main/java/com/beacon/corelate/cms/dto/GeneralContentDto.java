package com.beacon.corelate.cms.dto;

import java.time.ZonedDateTime;

/**
 * Created by epadolina on 7/13/17.
 */
public class GeneralContentDto extends BasePublishableContentDto<Long> {
    private String title;
    private String content;
    private String excerpt;
    private String category;
    private String bannerPlaceHolder;
    private Boolean published;
    private String author;
    private ZonedDateTime releaseDate;
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

    public String getExcerpt() {
        return excerpt;
    }

    public void setExcerpt(String excerpt) {
        this.excerpt = excerpt;
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

    public Boolean getPublished() {
        return published;
    }

    public void setPublished(Boolean published) {
        this.published = published;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public ZonedDateTime getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(ZonedDateTime releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Boolean getAutoPost() {
        return autoPost;
    }

    public void setAutoPost(Boolean autoPost) {
        this.autoPost = autoPost;
    }
}
