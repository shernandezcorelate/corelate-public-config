package com.beacon.corelate.user.service;

import com.beacon.corelate.commons.data.exception.AccountAlreadyActiveException;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.data.exception.InvalidDataException;
import com.beacon.corelate.commons.data.exception.PasswordValidationException;
import com.beacon.corelate.commons.service.BaseService;
import com.beacon.corelate.user.dto.ChangePasswordDto;
import com.beacon.corelate.user.dto.ResetPasswordDto;
import com.beacon.corelate.user.dto.UserAccountDto;
import com.beacon.corelate.user.dto.UserLoginAccessDto;
import com.beacon.corelate.user.mapper.UserBeanMapper;
import com.beacon.corelate.user.model.UserAccount;
import com.beacon.corelate.user.repository.jpa.UserAccountRepository;

import java.util.List;

/**
 * @author ddevera
 */
public interface UserAccountService
        extends BaseService<UserAccount, UserAccountDto, UserAccountRepository, Long, UserBeanMapper> {

    UserAccountDto mailActivation(Long id, String activationCode) throws EntityDoesNotExistException, AccountAlreadyActiveException, InvalidDataException;

    UserAccountDto mobileActivation(Long id, String activationCode) throws EntityDoesNotExistException, AccountAlreadyActiveException, InvalidDataException;

    void changePassword(Long id, ChangePasswordDto changePasswordDto) throws EntityDoesNotExistException, PasswordValidationException;

    void retrievePassword(String username) throws EntityDoesNotExistException;

    UserAccountDto resetPassword(Long id, ResetPasswordDto resetPasswordDto) throws EntityDoesNotExistException, InvalidDataException;

    UserAccountDto addGroup(Long id, Long groupId) throws EntityDoesNotExistException;

    UserAccountDto addGroup(Long id, List<Long> groupIds) throws EntityDoesNotExistException;

    void removeGroup(Long id, Long groupId) throws EntityDoesNotExistException;

    void removeGroup(Long id, List<Long> groupIds) throws EntityDoesNotExistException;

    UserAccountDto addPermission(Long id, Long permissionId) throws EntityDoesNotExistException;

    UserAccountDto addPermission(Long id, List<Long> permissionIds) throws EntityDoesNotExistException;

    void removePermission(Long id, Long permissionId) throws EntityDoesNotExistException;

    void removePermission(Long id, List<Long> permissionIds) throws EntityDoesNotExistException;

    UserLoginAccessDto getLoginAccess(Long id) throws EntityDoesNotExistException;

    UserLoginAccessDto updateLoginAccess(Long id, UserLoginAccessDto userLoginAccessDto) throws EntityDoesNotExistException;
}
