package com.beacon.corelate.cms.service;

import com.beacon.corelate.cms.dto.ColorConfigDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.ColorConfig;
import com.beacon.corelate.cms.repository.jpa.ColorConfigRepository;
import com.beacon.corelate.commons.service.BaseService;

/**
 * Created by jlava on 09/26/17
 */

public interface ColorConfigService extends BaseService<ColorConfig, ColorConfigDto, ColorConfigRepository, Long, CmsBeanMapper> {

}