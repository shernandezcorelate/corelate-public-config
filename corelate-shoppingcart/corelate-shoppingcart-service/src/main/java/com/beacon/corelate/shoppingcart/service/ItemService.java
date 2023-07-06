package com.beacon.corelate.shoppingcart.service;

import com.beacon.corelate.commons.service.BaseService;
import com.beacon.corelate.shoppingcart.dto.ItemDto;
import com.beacon.corelate.commons.data.dto.PageDto;
import com.beacon.corelate.shoppingcart.mapper.ShoppingCartBeanMapper;
import com.beacon.corelate.shoppingcart.model.Item;
import com.beacon.corelate.shoppingcart.repository.jpa.ItemRepository;
import org.springframework.data.domain.Pageable;

/**
 * @author ddevera
 */
public interface ItemService extends BaseService<Item, ItemDto, ItemRepository, Long, ShoppingCartBeanMapper> {

    PageDto<ItemDto> list(Pageable pageable);
}
