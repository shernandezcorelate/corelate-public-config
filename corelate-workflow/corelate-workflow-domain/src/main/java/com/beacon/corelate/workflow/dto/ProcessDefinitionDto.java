package com.beacon.corelate.workflow.dto;

/**
 * @author ddevera
 */
public class ProcessDefinitionDto {

    private String id;

    private String name;

    private String description;

    private String key;

    private String category;

    private int version;

    private String deploymentId;

    private String tenantId;

    private boolean hasStartForm;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    public String getDeploymentId() {
        return deploymentId;
    }

    public void setDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
    }

    public String getTenantId() {
        return tenantId;
    }

    public void setTenantId(String tenantId) {
        this.tenantId = tenantId;
    }

    public boolean isHasStartForm() {
        return hasStartForm;
    }

    public void setHasStartForm(boolean hasStartForm) {
        this.hasStartForm = hasStartForm;
    }
}
