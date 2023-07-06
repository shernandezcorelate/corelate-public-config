package com.activiti.extension.mongo.domain;

import com.google.common.collect.Maps;
import org.joda.time.LocalDateTime;
import org.springframework.core.style.ToStringCreator;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.*;

@Document(collection = "process_instance")
public class ProcessInstance  {

    @Id
    private String processInstanceId;
    private String processDefinitionId;
    private String name;
    private String description;

    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private Long durationInMillis;
    private String startUser;
    private Map<String, String> stringFields = Maps.newHashMap();
    private Map<String, Object> dynamicFields = Maps.newHashMap();
    private List<Attachment> attachments;
    private List<ActivitiTask> tasks;

    private String status;
    private LocalDateTime updatedDate;

    @Override
    public String toString() {
        return new ToStringCreator(this)
                .append("id", processInstanceId)
                .toString();
    }

    public String getProcessInstanceId() {
        return processInstanceId;
    }

    public void setProcessInstanceId(String processInstanceId) {
        this.processInstanceId = processInstanceId;
    }

    public String getProcessDefinitionId() {
        return processDefinitionId;
    }

    public void setProcessDefinitionId(String processDefinitionId) {
        this.processDefinitionId = processDefinitionId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public Long getDurationInMillis() {
        return durationInMillis;
    }

    public void setDurationInMillis(Long durationInMillis) {
        this.durationInMillis = durationInMillis;
    }

    public String getStartUser() {
        return startUser;
    }

    public void setStartUser(String startUser) {
        this.startUser = startUser;
    }

    public Map<String, String> getStringFields() {
        return stringFields;
    }

    public void setStringFields(Map<String, String> stringFields) {
        this.stringFields = stringFields;
    }

    public Map<String, Object> getDynamicFields() {
        return dynamicFields;
    }

    public void setDynamicFields(Map<String, Object> dynamicFields) {
        this.dynamicFields = dynamicFields;
    }

    public List<Attachment> getAttachments() {
        return attachments;
    }

    public void setAttachments(List<Attachment> attachments) {
        this.attachments = attachments;
    }

    public List<ActivitiTask> getTasks() {
        return tasks;
    }

    public void setTasks(List<ActivitiTask> tasks) {
        this.tasks = tasks;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(LocalDateTime updatedDate) {
        this.updatedDate = updatedDate;
    }
}
