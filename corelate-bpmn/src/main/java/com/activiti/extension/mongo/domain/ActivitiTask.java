package com.activiti.extension.mongo.domain;

import org.hibernate.annotations.Type;
import org.joda.time.LocalDateTime;
import org.springframework.core.style.ToStringCreator;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.util.Date;


@Embeddable
public class ActivitiTask {

    @Column
    private String taskId;

    @Column
    private String assignee;

    @Column(nullable = false)
    private String description;

    @Column
    private String category;

    @Type(type = "org.jadira.usertype.dateandtime.joda.PersistentLocalDateTime")
    @Column
    private LocalDateTime startTime;

    @Type(type = "org.jadira.usertype.dateandtime.joda.PersistentLocalDateTime")
    @Column
    private LocalDateTime endTime;

    @Type(type = "org.jadira.usertype.dateandtime.joda.PersistentLocalDateTime")
    @Column
    private LocalDateTime updatedTime;

    @Column
    private Long taskLeadTime;

    @Override
    public String toString() {
        return new ToStringCreator(this)
                .append("taskId", taskId)
                .append("assignee", assignee)
                .append("desc", description)
                .append("cat", category)
                .append("start", startTime)
                .append("end", endTime)
                .append("updated", updatedTime)
                .append("taskLeadTime", taskLeadTime)
                .toString();
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public String getAssignee() {
        return assignee;
    }

    public void setAssignee(String assignee) {
        this.assignee = assignee;
    }

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    public LocalDateTime getUpdatedTime() {
        return updatedTime;
    }

    public void setUpdatedTime(LocalDateTime updatedTime) {
        this.updatedTime = updatedTime;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void trySetStartTime(Date startTime) {
        this.startTime = null == startTime ? null : new LocalDateTime(startTime);
    }

    public void trySetEndTime(Date endTime) {
        this.endTime = null == endTime ? null : new LocalDateTime(endTime);
    }

    public Long getTaskLeadTime() {
        return taskLeadTime;
    }

    public void setTaskLeadTime(Long taskLeadTime) {
        this.taskLeadTime = taskLeadTime;
    }
}
