package com.beacon.corelate.user.service.impl;

import com.beacon.corelate.commons.data.dto.PermissionDto;
import com.beacon.corelate.commons.data.model.Permission;
import com.beacon.corelate.commons.service.impl.BaseServiceImpl;
import com.beacon.corelate.user.mapper.UserBeanMapper;
import com.beacon.corelate.user.repository.jpa.PermissionRepository;
import com.beacon.corelate.user.service.PermissionService;
import org.springframework.stereotype.Service;

/**
 * @author ddevera
 */
@Service
public class PermissionServiceImpl
        extends BaseServiceImpl<Permission, PermissionDto, PermissionRepository, Long, UserBeanMapper>
        implements PermissionService {

    public PermissionServiceImpl() {
        super(Permission.class, PermissionDto.class);
    }
}
