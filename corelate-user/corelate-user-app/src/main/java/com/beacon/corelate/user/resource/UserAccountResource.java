package com.beacon.corelate.user.resource;

import com.beacon.corelate.commons.app.resource.BaseResource;
import com.beacon.corelate.commons.data.exception.AccountAlreadyActiveException;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.data.exception.InvalidDataException;
import com.beacon.corelate.commons.data.exception.PasswordValidationException;
import com.beacon.corelate.user.dto.ChangePasswordDto;
import com.beacon.corelate.user.dto.ResetPasswordDto;
import com.beacon.corelate.user.dto.UserAccountDto;
import com.beacon.corelate.user.dto.UserLoginAccessDto;
import com.beacon.corelate.user.service.UserAccountService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

/**
 * @author ddevera
 */
@RestController
@RequestMapping("/user-account")
public class UserAccountResource extends BaseResource<UserAccountDto, Long, UserAccountService> {

    private static final Logger LOG = LoggerFactory.getLogger(UserAccountResource.class);

    @Autowired
    private UserAccountService userAccountService;

    public UserAccountResource() {
        super(UserAccountResource.class);
    }

    @RequestMapping(value = "/{id}/groups/{groupId}", method = RequestMethod.POST)
    public ResponseEntity<UserAccountDto> addGroup(@PathVariable("id") Long id, @PathVariable("groupId") Long groupId) throws EntityDoesNotExistException {
        LOG.debug("Adding groupId={} to userId={}", groupId, id);
        return new ResponseEntity<>(userAccountService.addGroup(id, groupId), OK);
    }

    @RequestMapping(value = "/{id}/groups", method = RequestMethod.POST)
    public ResponseEntity<UserAccountDto> addGroup(@PathVariable("id") Long id, @RequestBody List<Long> groupIds) throws EntityDoesNotExistException {
        LOG.debug("Adding multiple groups with groupIds={} to userId={}", groupIds, id);
        return new ResponseEntity<>(userAccountService.addGroup(id, groupIds), OK);
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/{id}/groups/{groupId}", method = RequestMethod.DELETE)
    public void removeGroup(@PathVariable("id") Long id, @PathVariable("groupId") Long groupId) throws EntityDoesNotExistException {
        LOG.debug("Removing groupId={} to userId={}", groupId, id);
        userAccountService.removeGroup(id, groupId);
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/{id}/groups", method = RequestMethod.DELETE)
    public void removeGroup(@PathVariable("id") Long id, @RequestBody List<Long> groupIds) throws EntityDoesNotExistException {
        LOG.debug("Removing group with groupIds={} to userId={}", groupIds, id);
        userAccountService.removeGroup(id, groupIds);
    }

    @RequestMapping(value = "/{id}/permissions/{permissionId}", method = RequestMethod.POST)
    public ResponseEntity<UserAccountDto> addPermission(@PathVariable("id") Long id, @PathVariable("permissionId") Long permissionId) throws EntityDoesNotExistException {
        LOG.debug("Adding permissionId={} to userId={}", permissionId, id);
        return new ResponseEntity<>(userAccountService.addPermission(id, permissionId), OK);
    }

    @RequestMapping(value = "/{id}/permissions", method = RequestMethod.POST)
    public ResponseEntity<UserAccountDto> addPermission(@PathVariable("id") Long id, @RequestBody List<Long> permissionIds) throws EntityDoesNotExistException {
        LOG.debug("Adding multiple groups with permissionIds={} to userId={}", permissionIds, id);
        return new ResponseEntity<>(userAccountService.addPermission(id, permissionIds), OK);
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/{id}/permissions/{permissionId}", method = RequestMethod.DELETE)
    public void removePermission(@PathVariable("id") Long id, @PathVariable("permissionId") Long permissionId) throws EntityDoesNotExistException {
        LOG.debug("Removing permissionId={} to userId={}", permissionId, id);
        userAccountService.removePermission(id, permissionId);
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/{id}/permissions", method = RequestMethod.DELETE)
    public void removePermission(@PathVariable("id") Long id, @RequestBody List<Long> permissionIds) throws EntityDoesNotExistException {
        LOG.debug("Removing group with permissionIds={} to userId={}", permissionIds, id);
        userAccountService.removePermission(id, permissionIds);
    }

    @RequestMapping(value = "/{id}/mail-activation-code/{activationCode}/activate", method = RequestMethod.PUT)
    public ResponseEntity<UserAccountDto> mailActivation(@PathVariable Long id, @PathVariable String activationCode)
            throws AccountAlreadyActiveException, EntityDoesNotExistException, InvalidDataException {
        LOG.debug("Mail Activation with id={} and activationCode={}", id, activationCode);
        return new ResponseEntity<>(userAccountService.mailActivation(id, activationCode), OK);
    }

    @RequestMapping(value = "/{id}/mobile-activation-code/{activationCode}/activate", method = RequestMethod.PUT)
    public ResponseEntity<UserAccountDto> mobileActivation(@PathVariable Long id, @PathVariable String activationCode)
            throws AccountAlreadyActiveException, EntityDoesNotExistException, InvalidDataException {
        LOG.debug("Mobile Activation with id={} and activationCode={}", id, activationCode);
        return new ResponseEntity<>(userAccountService.mobileActivation(id, activationCode), OK);
    }

    @ResponseStatus(OK)
    @RequestMapping(value = "/{id}/password/change", method = PUT)
    public void changePassword(@PathVariable Long id, @RequestBody ChangePasswordDto changePasswordDto) throws EntityDoesNotExistException, PasswordValidationException {
        LOG.debug("Changing Password for id={} and changePasswordDto={}", id, changePasswordDto);
        userAccountService.changePassword(id, changePasswordDto);
    }

    @ResponseStatus(OK)
    @RequestMapping(value = "/username/{username}/retrieve", method = POST)
    public void retrievePassword(@PathVariable String username) throws EntityDoesNotExistException {
        LOG.debug("Retrieving password for username={}", username);
        userAccountService.retrievePassword(username);
    }

    @RequestMapping(value = "/{id}/password/reset", method = PUT)
    public ResponseEntity<UserAccountDto> resetPassword(@PathVariable Long id, @RequestBody ResetPasswordDto resetPasswordDto) throws EntityDoesNotExistException, InvalidDataException {
        LOG.debug("Reset password for id={} and resetPasswordDto={}", id, resetPasswordDto);
        return new ResponseEntity<>(userAccountService.resetPassword(id, resetPasswordDto), HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/login-access", method = GET)
    public ResponseEntity<UserLoginAccessDto> getLoginAccess(@PathVariable Long id) throws EntityDoesNotExistException {
        LOG.debug("Fetching user login access with id={}", id);
        return new ResponseEntity<>(userAccountService.getLoginAccess(id), HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/login-access", method = PUT)
    public ResponseEntity<UserLoginAccessDto> updateLoginAccess(@PathVariable Long id, @RequestBody UserLoginAccessDto userLoginAccessDto) throws EntityDoesNotExistException {
        LOG.debug("Updating user login access with id={} and data={}", id, userLoginAccessDto);
        return new ResponseEntity<>(userAccountService.updateLoginAccess(id, userLoginAccessDto), HttpStatus.OK);
    }
}
