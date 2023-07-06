package com.beacon.corelate.authentication.repository.jpa.user;

import com.beacon.corelate.commons.data.model.UserClientDetail;
import com.beacon.corelate.commons.data.repository.base.BaseJpaRepository;

/**
 * @author ddevera
 */
public interface UserClientDetailRepository extends BaseJpaRepository<UserClientDetail, Long> {

    UserClientDetail findByUsername(String username);

}
