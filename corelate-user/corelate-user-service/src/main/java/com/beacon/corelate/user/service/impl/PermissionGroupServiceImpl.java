package com.beacon.corelate.user.service.impl;

import com.beacon.corelate.commons.data.dto.PermissionGroupDto;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.data.model.Permission;
import com.beacon.corelate.commons.data.model.PermissionGroup;
import com.beacon.corelate.commons.service.impl.BaseServiceImpl;
import com.beacon.corelate.user.mapper.UserBeanMapper;
import com.beacon.corelate.user.repository.jpa.PermissionGroupRepository;
import com.beacon.corelate.user.repository.jpa.PermissionRepository;
import com.beacon.corelate.user.service.PermissionGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author ddevera
 */
@Service
public class PermissionGroupServiceImpl
        extends BaseServiceImpl<PermissionGroup, PermissionGroupDto, PermissionGroupRepository, Long, UserBeanMapper>
        implements PermissionGroupService {

    @Autowired
    private PermissionGroupRepository permissionGroupRepository;

    @Autowired
    private PermissionRepository permissionRepository;

    @Autowired
    private UserBeanMapper mapper;

    public PermissionGroupServiceImpl() {
        super(PermissionGroup.class, PermissionGroupDto.class);
    }

    @Override
    public PermissionGroupDto addPermissionActions(Long id, List<String> actions) throws EntityDoesNotExistException {
        PermissionGroup permissionGroup = getPermissionGroup(id);

        actions
                .stream()
                .forEach(
                        action -> {
                            if (!permissionRepository.existsByPermissionGroup_idAndAction(permissionGroup.getId(), action)) {
                                Permission permission = new Permission();
                                permission.setModule(permissionGroup.getModule());
                                permission.setAction(action);
                                permission.setPermissionGroup(permissionGroup);

                                permission = permissionRepository.save(permission);

                                permissionGroup.getPermissions().add(permission);
                            }
                        });

        return mapper.map(permissionGroup, PermissionGroupDto.class);
    }

    private PermissionGroup getPermissionGroup(Long id) throws EntityDoesNotExistException {
        PermissionGroup permissionGroup = permissionGroupRepository.findOneById(id);

        if (permissionGroup == null) {
            throw new EntityDoesNotExistException("Permission Group with id=" + id + " does not exist");
        }

        return permissionGroup;
    }
}
