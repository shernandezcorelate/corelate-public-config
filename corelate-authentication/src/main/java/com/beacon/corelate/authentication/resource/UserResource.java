package com.beacon.corelate.authentication.resource;

import com.google.common.collect.Maps;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Map;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 * @author ddevera
 */
@RestController
public class UserResource {

    @RequestMapping(value = "/oauth/user", produces = "application/json", method = GET)
    public Map<String, Object> user(OAuth2Authentication user) {
        Map<String, Object> userDetails = Maps.newHashMap();
        userDetails.put("user", user.getUserAuthentication().getPrincipal());
        userDetails.put("authorities",
                AuthorityUtils
                        .authorityListToSet(
                                user
                                        .getUserAuthentication()
                                        .getAuthorities()));

        return userDetails;
    }

    @RequestMapping(value = "/user", produces = "application/json", method = GET)
    public Principal user(Principal user) {
        return user;
    }
}
