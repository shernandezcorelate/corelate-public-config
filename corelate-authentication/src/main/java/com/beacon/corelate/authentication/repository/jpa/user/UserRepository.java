package com.beacon.corelate.authentication.repository.jpa.user;

import com.beacon.corelate.commons.data.model.User;
import com.beacon.corelate.commons.data.repository.base.BaseJpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * @author ddevera
 */
public interface UserRepository extends BaseJpaRepository<User, Long> {

    User findByUsername(String username);

    @Query("SELECT u " +
            "FROM com.beacon.corelate.commons.data.model.User u " +
            "LEFT JOIN FETCH u.groups g " +
            "LEFT JOIN FETCH u.permissions " +
            "LEFT JOIN FETCH g.permissions " +
            "WHERE u.username = :username")
    User findByUsernameQuery(@Param("username") String username);
}
