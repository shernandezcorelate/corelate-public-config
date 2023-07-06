package com.beacon.corelate.shoppingcart.model;

import com.beacon.corelate.commons.data.BaseModel;
import com.google.common.collect.Sets;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.math.BigDecimal;
import java.util.Set;

/**
 * @author ddevera
 */
@Entity(name = "PAYMENT")
public class Payment extends BaseModel {

    @Column(name = "RECEIPT_NUMBER")
    private String receiptNumber;

    @Column(name = "AMOUNT")
    private BigDecimal amount;

    @OneToMany(mappedBy = "payment")
    private Set<Item> items = Sets.newHashSet();

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

    public Set<Item> getItems() {
        return items;
    }

    public void setItems(Set<Item> items) {
        this.items = items;
    }
}
