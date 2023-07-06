package com.beacon.corelate.cms.service.impl;

import com.beacon.corelate.cms.dto.BlockDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.Block;
import com.beacon.corelate.cms.repository.jpa.BlocksRepository;
import com.beacon.corelate.cms.service.BlocksService;
import com.beacon.corelate.commons.service.impl.BaseServiceImpl;
import org.springframework.stereotype.Service;


/**
 * Created by jlava on 9/13/17.
 */

@Service
public class BlocksServiceImpl
        extends BaseServiceImpl<Block, BlockDto, BlocksRepository, Long, CmsBeanMapper>
        implements BlocksService {

    public BlocksServiceImpl() { super(Block.class, BlockDto.class); }
}
