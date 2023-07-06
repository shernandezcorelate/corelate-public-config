package com.beacon.corelate.shoppingcart.dto;

import com.beacon.corelate.commons.data.dto.BaseDto;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import java.math.BigDecimal;
import java.util.Set;

/**
 * @author ddevera
 */
public class PaymentDto extends BaseDto<Long> {

    private String receiptNumber;

    private BigDecimal amount;

    private Set<ItemDto> items;

    public String getReceiptNumber() {
        return receiptNumber;
    }

    public void setReceiptNumber(String receiptNumber) {
        this.receiptNumber = receiptNumber;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public Set<ItemDto> getItems() {
        return items;
    }

    public void setItems(Set<ItemDto> items) {
        this.items = items;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.DEFAULT_STYLE)
                .append("id", getId())
                .append("receiptNumber", getReceiptNumber())
                .append("amount", getAmount())
                .append("items", getItems())
                .toString();
    }
}
