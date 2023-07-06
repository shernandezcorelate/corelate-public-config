package com.beacon.corelate.shoppingcart.dto;

import com.beacon.corelate.commons.data.dto.BaseDto;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import java.math.BigDecimal;

/**
 * @author ddevera
 */
public class ItemDto extends BaseDto<Long> {

    private String requestor;

    private String name;

    private String description;

    private BigDecimal amount;

    private String merchantId;

    private String processInstanceId;

    private String activityId;

    public String getRequestor() {
        return requestor;
    }

    public void setRequestor(String requestor) {
        this.requestor = requestor;
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

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getMerchantId() {
        return merchantId;
    }

    public void setMerchantId(String merchantId) {
        this.merchantId = merchantId;
    }

    public String getProcessInstanceId() {
        return processInstanceId;
    }

    public void setProcessInstanceId(String processInstanceId) {
        this.processInstanceId = processInstanceId;
    }

    public String getActivityId() {
        return activityId;
    }

    public void setActivityId(String activityId) {
        this.activityId = activityId;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.DEFAULT_STYLE)
                .append("id", getId())
                .append("requestor", getRequestor())
                .append("name", getName())
                .append("description", getDescription())
                .append("amount", getAmount())
                .append("merchantId", getMerchantId())
                .append("processInstanceId", getProcessInstanceId())
                .append("activityId", getActivityId())
                .toString();
    }
}
