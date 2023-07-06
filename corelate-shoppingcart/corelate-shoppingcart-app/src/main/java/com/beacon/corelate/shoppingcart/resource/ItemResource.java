package com.beacon.corelate.shoppingcart.resource;

import com.beacon.corelate.commons.app.resource.BaseResource;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.shoppingcart.dto.ItemDto;
import com.beacon.corelate.commons.data.dto.PageDto;
import com.beacon.corelate.shoppingcart.service.ItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @author ddevera
 */
@RestController
@RequestMapping("/item")
public class ItemResource extends BaseResource<ItemDto, Long, ItemService> {

    @Autowired
    private ItemService itemService;

    public ItemResource() {
        super(ItemResource.class);
    }

    @Override
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<PageDto<ItemDto>> getList(Pageable pageable) throws EntityDoesNotExistException {
        return new ResponseEntity(itemService.list(pageable), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<ItemDto> update(Long id, ItemDto itemDto) throws EntityDoesNotExistException {
        return new ResponseEntity<>((ItemDto) null, HttpStatus.METHOD_NOT_ALLOWED);
    }

    @Override
    @ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
    public void delete(Long id) throws EntityDoesNotExistException {
        return;
    }
}
