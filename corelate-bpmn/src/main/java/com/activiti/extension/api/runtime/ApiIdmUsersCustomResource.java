package com.activiti.extension.api.runtime;

import com.activiti.domain.idm.User;
import com.activiti.domain.idm.UserStatus;
import com.activiti.repository.idm.UserRepository;
import com.activiti.service.exception.BadRequestException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

/**
 * @author ddevera
 */
@RestController
@RequestMapping({"/enterprise/admin/users"})
public class ApiIdmUsersCustomResource {

    private static final Logger LOG = LoggerFactory.getLogger(ApiIdmUsersCustomResource.class);

    @Autowired
    private UserRepository userRepository;

    @ResponseStatus(OK)
    @RequestMapping(value = "/{id}/status/activate", method = POST, consumes = "application/json")
    public void activateUser(@PathVariable("id") Long id) {
        LOG.debug("Activating user with id={}", id);

        User user = userRepository.findOne(id);

        if(user == null) {
            throw new BadRequestException("User does not exist");
        }

        user.setStatus(UserStatus.ACTIVE);

        userRepository.save(user);
    }
}
