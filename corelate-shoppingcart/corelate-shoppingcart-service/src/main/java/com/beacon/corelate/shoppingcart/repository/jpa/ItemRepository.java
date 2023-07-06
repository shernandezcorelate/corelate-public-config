package com.beacon.corelate.shoppingcart.repository.jpa;

import com.beacon.corelate.commons.data.repository.base.BaseJpaRepository;
import com.beacon.corelate.shoppingcart.model.Item;
import com.beacon.corelate.shoppingcart.model.Payment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @author ddevera
 */
public interface ItemRepository extends BaseJpaRepository<Item, Long> {

    Page<Item> findByPaymentIsNull(Pageable pageable);
}
