package com.beacon.corelate.user.service;

import com.beacon.corelate.commons.data.dto.PermissionDto;
import com.beacon.corelate.commons.data.model.Permission;
import com.beacon.corelate.commons.service.BaseService;
import com.beacon.corelate.user.mapper.UserBeanMapper;
import com.beacon.corelate.user.repository.jpa.PermissionRepository;

/**
 * @author ddevera
 */
public interface PermissionService
        extends BaseService<Permission, PermissionDto, PermissionRepository, Long, UserBeanMapper> {
}
