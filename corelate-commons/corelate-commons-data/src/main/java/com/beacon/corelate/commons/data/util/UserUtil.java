package com.beacon.corelate.commons.data.util;

import com.beacon.corelate.commons.data.model.User;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

/**
 * @author ddevera
 */
public class UserUtil {

    public static User getCurrentUser() {
        SecurityContext ctx = SecurityContextHolder.getContext();
        User user = null;
        if (ctx != null && ctx.getAuthentication() != null) {
            if (ctx.getAuthentication().getPrincipal() instanceof User) {
                user = (User) ctx.getAuthentication().getPrincipal();
            }
        }
        return user;
    }

    public static String getCurrentUserName() {
        SecurityContext ctx = SecurityContextHolder.getContext();
        String username = null;
        if (ctx != null && ctx.getAuthentication() != null) {
            if (ctx.getAuthentication().getPrincipal() instanceof User) {
                User user = (User) ctx.getAuthentication().getPrincipal();
                username = user.getUsername();
            } else if (ctx.getAuthentication().getPrincipal() instanceof UserDetails) {
                UserDetails user = (UserDetails) ctx.getAuthentication().getPrincipal();
                username = user.getUsername();
            }
        }
        return username;
    }

    public static boolean hasPermission(String permission) {
        if (StringUtils.isBlank(permission)) {
            return false;
        }

        SecurityContext context = SecurityContextHolder.getContext();
        Authentication authentication = context.getAuthentication();
        if (authentication == null) {
            return false;
        }

        for (GrantedAuthority grantedAuthority : authentication.getAuthorities()) {
            String authority = grantedAuthority.getAuthority();
            if (StringUtils.equals(authority, permission)) {
                return true;
            }
        }

        return false;
    }

    public static boolean hasPermission(User user, String permission) {
        boolean result = false;

        if (user == null) {
            return result;
        }

        for (GrantedAuthority grantedAuthority : user.getAuthorities()) {
            String authority = grantedAuthority.getAuthority();
            if (StringUtils.equals(authority, permission)) {
                return true;
            }
        }

        return result;
    }
}
