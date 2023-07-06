package com.beacon.corelate.user.repository.jpa;

import com.beacon.corelate.commons.data.model.UserClientDetail;
import com.beacon.corelate.commons.data.repository.base.BaseJpaRepository;

/**
 * @author ddevera
 */
public interface UserClientDetailRepository extends BaseJpaRepository<UserClientDetail, Long> {

    UserClientDetail findByUsername(String username);

}
