package com.beacon.corelate.user.service;

import com.beacon.corelate.commons.data.dto.GroupDto;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.data.model.Group;
import com.beacon.corelate.commons.service.BaseService;
import com.beacon.corelate.user.mapper.UserBeanMapper;
import com.beacon.corelate.user.repository.jpa.GroupRepository;

import java.util.List;

/**
 * @author ddevera
 */
public interface GroupService
        extends BaseService<Group, GroupDto, GroupRepository, Long, UserBeanMapper> {

    GroupDto addPermission(Long id, Long permissionId) throws EntityDoesNotExistException;

    GroupDto addPermissions(Long id, List<Long> permissionIds) throws EntityDoesNotExistException;

    void removePermission(Long id, Long permissionId) throws EntityDoesNotExistException;

    void removePermissions(Long id, List<Long> permissionIds) throws EntityDoesNotExistException;
}
