package com.beacon.corelate.user.repository.jpa;

import com.beacon.corelate.commons.data.repository.base.BaseJpaRepository;
import com.beacon.corelate.user.model.UserAccount;

/**
 * @author ddevera
 */
public interface UserAccountRepository extends BaseJpaRepository<UserAccount, Long> {

    UserAccount findByUsername(String username);

    Boolean existsByUsername(String username);
}
