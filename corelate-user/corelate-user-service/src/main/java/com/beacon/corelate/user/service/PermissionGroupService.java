package com.beacon.corelate.user.service;

import com.beacon.corelate.commons.data.dto.PermissionGroupDto;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.data.model.PermissionGroup;
import com.beacon.corelate.commons.service.BaseService;
import com.beacon.corelate.user.mapper.UserBeanMapper;
import com.beacon.corelate.user.repository.jpa.PermissionGroupRepository;

import java.util.List;

/**
 * @author ddevera
 */
public interface PermissionGroupService
        extends BaseService<PermissionGroup, PermissionGroupDto, PermissionGroupRepository, Long, UserBeanMapper> {

    PermissionGroupDto addPermissionActions(Long id, List<String> actions) throws EntityDoesNotExistException;
}
