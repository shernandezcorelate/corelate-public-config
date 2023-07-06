package com.beacon.corelate.authentication.service.impl;

import com.beacon.corelate.authentication.repository.jpa.user.UserClientDetailRepository;
import com.beacon.corelate.authentication.service.UserClientDetailService;
import com.beacon.corelate.commons.data.model.UserClientDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author ddevera
 */
@Service
public class UserClientDetailServiceImpl implements UserClientDetailService {

    @Autowired
    private UserClientDetailRepository userClientDetailRepository;

    @Override
    public void save(String username, String basic) {
        UserClientDetail userClientDetail = userClientDetailRepository.findByUsername(username);

        if (userClientDetail == null) {
            userClientDetail = new UserClientDetail();
            userClientDetail.setUsername(username);
        }

        userClientDetail.setBasic(basic);

        userClientDetailRepository.save(userClientDetail);
    }
}
