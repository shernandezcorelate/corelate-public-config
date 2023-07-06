package com.beacon.corelate.workflow.model;

import com.beacon.corelate.commons.data.BaseModel;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * @author ddevera
 */
@Entity(name = "PROCESS_INSTANCE")
public class ProcessInstance extends BaseModel {

    @Column(name = "PROCESS_INSTANCE_ID", unique = true)
    private Long processInstanceId;

    @Column(name = "PROCESS_DEFINITION_ID")
    private String processDefinitionId;

    public Long getProcessInstanceId() {
        return processInstanceId;
    }

    public void setProcessInstanceId(Long processInstanceId) {
        this.processInstanceId = processInstanceId;
    }

    public String getProcessDefinitionId() {
        return processDefinitionId;
    }

    public void setProcessDefinitionId(String processDefinitionId) {
        this.processDefinitionId = processDefinitionId;
    }
}
