package com.beacon.corelate.authentication.service.impl;

import com.beacon.corelate.authentication.repository.jpa.user.UserRepository;
import com.beacon.corelate.authentication.service.UserService;
import com.beacon.corelate.commons.data.model.User;
import com.beacon.corelate.commons.util.EncryptionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * @author ddevera
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsernameQuery(username);
    }
}
