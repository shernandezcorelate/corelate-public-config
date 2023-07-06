package com.beacon.corelate.cms.service;

import com.beacon.corelate.cms.dto.BlockDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.Block;
import com.beacon.corelate.cms.repository.jpa.BlocksRepository;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.service.BaseService;

import java.util.List;

/**
 * Created by jlava on 9/13/17.
 */
public interface BlocksService
        extends BaseService<Block, BlockDto, BlocksRepository, Long, CmsBeanMapper> {
}
