package com.beacon.corelate.cms.service.impl;

import com.beacon.corelate.cms.dto.ColorConfigDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.ColorConfig;
import com.beacon.corelate.cms.repository.jpa.ColorConfigRepository;
import com.beacon.corelate.cms.service.ColorConfigService;
import com.beacon.corelate.commons.service.impl.BaseServiceImpl;
import org.springframework.stereotype.Service;

/**
 * Created by jlava on 09/26/17
 */

@Service
public class ColorConfigServiceImpl
        extends BaseServiceImpl<ColorConfig, ColorConfigDto, ColorConfigRepository, Long, CmsBeanMapper>
        implements ColorConfigService {

    public ColorConfigServiceImpl() { super(ColorConfig.class, ColorConfigDto.class); }
}