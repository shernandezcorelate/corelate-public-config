package com.beacon.corelate.user.resource;

import com.beacon.corelate.user.service.UserClientDetailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 * @author ddevera
 */
@RestController
@RequestMapping("/user-client-detail")
public class UserClientDetailResource {

    private static final Logger LOG = LoggerFactory.getLogger(UserClientDetailResource.class);

    @Autowired
    private UserClientDetailService userClientDetailService;

    @RequestMapping(value = "/basic", produces = "application/json", method = GET)
    public String getBasic(Principal principal) {
        LOG.debug("Fetching user client details for username: {}", principal.getName());

        return userClientDetailService.getBasicByUsername(principal.getName());
    }
}
