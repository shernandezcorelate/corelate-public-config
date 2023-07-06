package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.dto.BlockDto;
import com.beacon.corelate.cms.service.BlocksService;
import com.beacon.corelate.commons.app.resource.BaseSingletonResource;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by jlava on 9/13/17.
 */

@RestController
@RequestMapping("/blocks")
public class BlocksResource
        extends BaseSingletonResource<BlockDto, BlocksService>{

    public BlocksResource() {
        super(BlocksResource.class);
    }
}
