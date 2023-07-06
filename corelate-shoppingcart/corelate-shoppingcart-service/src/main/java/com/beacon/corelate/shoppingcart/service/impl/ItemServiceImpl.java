package com.beacon.corelate.shoppingcart.service.impl;

import com.beacon.corelate.commons.service.impl.BaseServiceImpl;
import com.beacon.corelate.shoppingcart.dto.ItemDto;
import com.beacon.corelate.commons.data.dto.PageDto;
import com.beacon.corelate.shoppingcart.mapper.ShoppingCartBeanMapper;
import com.beacon.corelate.shoppingcart.model.Item;
import com.beacon.corelate.shoppingcart.repository.jpa.ItemRepository;
import com.beacon.corelate.shoppingcart.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Comparator;
import java.util.stream.Collectors;

/**
 * @author ddevera
 */
@Service
public class ItemServiceImpl
        extends BaseServiceImpl<Item, ItemDto, ItemRepository, Long, ShoppingCartBeanMapper>
        implements ItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private ShoppingCartBeanMapper mapper;

    public ItemServiceImpl() {
        super(Item.class, ItemDto.class);
    }


    @Override
    public PageDto<ItemDto> list(Pageable pageable) {
        Page<Item> items = itemRepository.findByPaymentIsNull(pageable);

        return PageDto
                .newPageInfo(
                        items,
                        items
                            .getContent()
                            .stream()
                            .sorted(Comparator.comparing(Item::getUpdatedDate, Comparator.nullsLast(Comparator.reverseOrder())))
                            .map(item -> mapper.map(item, ItemDto.class))
                            .collect(Collectors.toList()));
    }

}
