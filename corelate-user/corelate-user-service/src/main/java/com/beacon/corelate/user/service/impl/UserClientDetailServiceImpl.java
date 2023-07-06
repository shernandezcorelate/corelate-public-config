package com.beacon.corelate.user.service.impl;

import com.beacon.corelate.user.repository.jpa.UserClientDetailRepository;
import com.beacon.corelate.user.service.UserClientDetailService;
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
    public String getBasicByUsername(String username) {
        return userClientDetailRepository.findByUsername(username).getBasic();
    }
}
