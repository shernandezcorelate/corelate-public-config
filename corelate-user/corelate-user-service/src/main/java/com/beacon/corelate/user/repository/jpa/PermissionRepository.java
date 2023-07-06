package com.beacon.corelate.user.repository.jpa;

import com.beacon.corelate.commons.data.model.Permission;
import com.beacon.corelate.commons.data.repository.base.BaseJpaRepository;

/**
 * @author ddevera
 */
public interface PermissionRepository extends BaseJpaRepository<Permission, Long> {

    Boolean existsByPermissionGroup_idAndAction(Long permissionGroupId, String action);
}
