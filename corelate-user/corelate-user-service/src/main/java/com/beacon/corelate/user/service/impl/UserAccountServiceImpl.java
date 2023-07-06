package com.beacon.corelate.user.service.impl;

import com.activiti.model.idm.UserRepresentation;
import com.beacon.corelate.cms.client.TextTemplateClient;
import com.beacon.corelate.cms.dto.TextTemplateDto;
import com.beacon.corelate.commons.data.exception.AccountAlreadyActiveException;
import com.beacon.corelate.commons.data.exception.EntityAlreadyExistException;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.data.exception.InvalidDataException;
import com.beacon.corelate.commons.data.exception.PasswordValidationException;
import com.beacon.corelate.commons.data.model.Group;
import com.beacon.corelate.commons.service.impl.BaseServiceImpl;
import com.beacon.corelate.commons.util.EncryptionUtil;
import com.beacon.corelate.notification.client.MailNotificationClient;
import com.beacon.corelate.notification.client.SmsNotificationClient;
import com.beacon.corelate.notification.dto.SmsDto;
import com.beacon.corelate.user.client.BpmnIdmGroupsClient;
import com.beacon.corelate.user.client.BpmnIdmUserClient;
import com.beacon.corelate.user.dto.BpmnUserRepresentationDto;
import com.beacon.corelate.user.dto.ChangePasswordDto;
import com.beacon.corelate.user.dto.ResetPasswordDto;
import com.beacon.corelate.user.dto.UserAccountDto;
import com.beacon.corelate.user.dto.UserLoginAccessDto;
import com.beacon.corelate.user.dto.UserMailActivationDto;
import com.beacon.corelate.user.dto.UserMailResetPasswordDto;
import com.beacon.corelate.user.dto.UserSmsActivationDto;
import com.beacon.corelate.user.mapper.UserBeanMapper;
import com.beacon.corelate.user.model.UserAccount;
import com.beacon.corelate.user.repository.jpa.GroupRepository;
import com.beacon.corelate.user.repository.jpa.PermissionRepository;
import com.beacon.corelate.user.repository.jpa.UserAccountRepository;
import com.beacon.corelate.user.service.UserAccountService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Lists;
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

/**
 * @author ddevera
 */
@Service
public class UserAccountServiceImpl
        extends BaseServiceImpl<UserAccount, UserAccountDto, UserAccountRepository, Long, UserBeanMapper>
        implements UserAccountService {

    private static final Logger LOG = LoggerFactory.getLogger(UserAccountServiceImpl.class);

    @Value("${user.password.random-password-length}")
    private Integer randomPasswordLength;

    @Value("${user.password.reset-code.validity}")
    private Integer resetPasswordValidity;

    @Value("${user.password.reset-code.length}")
    private Integer resetPasswordLength;

    @Value("${user.password.reset-code.template}")
    private String resetPasswordMailTemplateKey;

    @Value("${user.password.reset-code.header}")
    private String resetPasswordMailHeader;

    @Value("${user.activation.mail.enabled}")
    private Boolean enableMailActivation;

    @Value("${user.activation.mail.token-length}")
    private Integer mailActivationLength;

    @Value("${user.activation.mail.template}")
    private String mailActivationTemplateKey;

    @Value("${user.activation.mail.header}")
    private String mailActivationHeader;

    @Value("${user.activation.sms.enabled}")
    private Boolean enableSmsActivation;

    @Value("${user.activation.sms.token-length}")
    private Integer smsActivationLength;

    @Value("${user.activation.sms.template}")
    private String smsActivationTemplateKey;

    @Value("${user.exception.empty-password}")
    private String emptyPasswordExceptionMessage;

    @Autowired
    private UserAccountRepository userAccountRepository;

    @Autowired
    private UserBeanMapper mapper;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private BpmnIdmUserClient bpmnIdmUserClient;

    @Autowired
    private BpmnIdmGroupsClient bpmnIdmGroupsClient;

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private PermissionRepository permissionRepository;

    @Autowired
    private MailNotificationClient mailNotificationClient;

    @Autowired
    private SmsNotificationClient smsNotificationClient;

    @Autowired
    private TextTemplateClient textTemplateClient;

    public UserAccountServiceImpl() {
        super(UserAccount.class, UserAccountDto.class);
    }

    @Override
    @Transactional
    public UserAccountDto create(UserAccountDto dto) throws Exception {

        if (userAccountRepository.existsByUsername(dto.getUsername()) && dto.getId() == null) {
            throw new EntityAlreadyExistException("User with username " + dto.getUsername() + " already exists");
        }

        if (StringUtils.isEmpty(dto.getPassword()) && !enableMailActivation) {
            throw new Exception(emptyPasswordExceptionMessage);
        }

        if (StringUtils.isEmpty(dto.getPassword())) {
            dto.setGeneratedPassword(Boolean.TRUE);
            dto.setPassword(RandomStringUtils.randomAlphabetic(randomPasswordLength));
        }

        UserAccount userAccount = mapper.map(dto, UserAccount.class);
        userAccount.setPassword(EncryptionUtil.encryptPassword(dto.getPassword()));

        userAccount = userAccountRepository.save(userAccount);

        BpmnUserRepresentationDto bpmnUserRepresentationRequest = mapper.map(userAccount, BpmnUserRepresentationDto.class);
        bpmnUserRepresentationRequest.setPassword(dto.getPassword());

        LOG.debug("Creating bpmnUserRepresentationRequest with value={}", bpmnUserRepresentationRequest);

        UserRepresentation bpmnUserRepresentationResponse = bpmnIdmUserClient.create(bpmnUserRepresentationRequest);
        userAccount.setExternalId(bpmnUserRepresentationResponse.getId());

        LOG.debug("Enable mail activation={}", enableMailActivation);

        if (enableMailActivation) {
            userAccount.setMailActivationCodeCreatedDate(LocalDateTime.now());
            userAccount
                    .setMailActivationCode(
                            RandomStringUtils
                                    .randomAlphanumeric(mailActivationLength)
                                    .toUpperCase());

            UserMailActivationDto mailNotificationDto = mapper.map(userAccount, UserMailActivationDto.class);

            if (dto.getGeneratedPassword()) {
                mailNotificationDto.setPassword(dto.getPassword());
            }

            ResponseEntity<TextTemplateDto> mailTemplate =
                    textTemplateClient.getByKeyAndProcess(
                            mailActivationTemplateKey,
                            objectMapper.convertValue(mailNotificationDto, Map.class));

            LOG.debug("Sending message to username={} with message={}", userAccount.getUsername(), mailTemplate.getBody().getTemplate());

            mailNotificationClient.sendMail(
                    Lists.newArrayList(userAccount.getUsername()),
                    mailActivationHeader,
                    mailTemplate.getBody().getTemplate());
        }

        LOG.debug("Enable SMS activation={}", enableSmsActivation);

        if (enableSmsActivation) {
            userAccount.setMobileActivationCodeCreatedDate(LocalDateTime.now());
            userAccount
                    .setMobileActivationCode(
                            RandomStringUtils
                                    .randomAlphanumeric(smsActivationLength));

            UserSmsActivationDto smsNotificationDto = mapper.map(userAccount, UserSmsActivationDto.class);

            ResponseEntity<TextTemplateDto> smsTemplate =
                    textTemplateClient.getByKeyAndProcess(
                            smsActivationTemplateKey,
                            objectMapper.convertValue(smsNotificationDto, Map.class));

            LOG.debug("Sending message to mobileNumber={} with sms={}", userAccount.getMobileNumber(), smsTemplate.getBody().getTemplate());

            smsNotificationClient.sendAsyncSingleSms(new SmsDto(userAccount.getMobileNumber(), smsTemplate.getBody().getTemplate()));
        }


        return mapper.map(userAccountRepository.save(userAccount), UserAccountDto.class);
    }

    @Override
    public UserAccountDto addGroup(Long id, Long groupId) throws EntityDoesNotExistException {
        UserAccount userAccount = getUserAccountById(id);
        Group group = groupRepository.findOneById(groupId);

        bpmnIdmGroupsClient.addMember(group.getExternalId(), userAccount.getExternalId());

        userAccount
                .getGroups()
                .add(group);

        return mapper.map(userAccountRepository.save(userAccount), UserAccountDto.class);
    }

    @Override
    public UserAccountDto addGroup(Long id, List<Long> groupIds) throws EntityDoesNotExistException {
        UserAccount userAccount = getUserAccountById(id);

        groupIds
                .stream()
                .forEach(groupId -> {
                    Group group = groupRepository.findOneById(groupId);

                    bpmnIdmGroupsClient.addMember(group.getExternalId(), userAccount.getExternalId());

                    userAccount
                            .getGroups()
                            .add(group);
                });

        return mapper.map(userAccountRepository.save(userAccount), UserAccountDto.class);
    }

    @Override
    public void removeGroup(Long id, Long groupId) throws EntityDoesNotExistException {
        UserAccount userAccount = getUserAccountById(id);
        Group group = groupRepository.findOneById(groupId);

        bpmnIdmGroupsClient.deleteMember(group.getExternalId(), userAccount.getExternalId());

        userAccount
                .getGroups()
                .remove(group);

        userAccountRepository.save(userAccount);
    }

    @Override
    public void removeGroup(Long id, List<Long> groupIds) throws EntityDoesNotExistException {
        UserAccount userAccount = getUserAccountById(id);

        groupIds
                .stream()
                .forEach(groupId -> {
                    Group group = groupRepository.findOneById(groupId);

                    bpmnIdmGroupsClient.deleteMember(group.getExternalId(), userAccount.getExternalId());

                    userAccount
                            .getGroups()
                            .remove(group);
                });

        userAccountRepository.save(userAccount);
    }

    @Override
    public UserAccountDto addPermission(Long id, Long permissionId) throws EntityDoesNotExistException {
        UserAccount userAccount = getUserAccountById(id);
        userAccount
                .getPermissions()
                .add(
                        permissionRepository
                                .findOneById(permissionId));

        return mapper.map(userAccountRepository.save(userAccount), UserAccountDto.class);
    }

    @Override
    public UserAccountDto addPermission(Long id, List<Long> permissionIds) throws EntityDoesNotExistException {
        UserAccount userAccount = getUserAccountById(id);

        permissionIds
                .stream()
                .forEach(permissionId ->
                        userAccount
                                .getPermissions()
                                .add(permissionRepository.findOneById(permissionId)));

        return mapper.map(userAccountRepository.save(userAccount), UserAccountDto.class);
    }

    @Override
    public void removePermission(Long id, Long permissionId) throws EntityDoesNotExistException {
        UserAccount userAccount = getUserAccountById(id);
        userAccount
                .getPermissions()
                .remove(
                        permissionRepository
                                .findOneById(permissionId));

        userAccountRepository.save(userAccount);
    }

    @Override
    public void removePermission(Long id, List<Long> permissionIds) throws EntityDoesNotExistException {
        UserAccount userAccount = getUserAccountById(id);

        permissionIds
                .stream()
                .forEach(permissionId ->
                        userAccount
                                .getPermissions()
                                .remove(permissionRepository.findOneById(permissionId)));

        userAccountRepository.save(userAccount);
    }

    @Override
    public UserAccountDto mailActivation(Long id, String activationCode) throws EntityDoesNotExistException, AccountAlreadyActiveException, InvalidDataException {
        return activateAccount(id, activationCode, "MAIL");
    }

    @Override
    public UserAccountDto mobileActivation(Long id, String activationCode) throws EntityDoesNotExistException, AccountAlreadyActiveException, InvalidDataException {
        return activateAccount(id, activationCode, "MOBILE");
    }

    @Override
    public void changePassword(Long id, ChangePasswordDto changePasswordDto) throws EntityDoesNotExistException, PasswordValidationException {
        UserAccount userAccount = getUserAccountById(id);

        if (!EncryptionUtil.bCryptPasswordEncoder.matches(changePasswordDto.getOldPassword(), userAccount.getPassword())) {
            throw new PasswordValidationException("Invalid old Password");
        }

        userAccount.setPassword(EncryptionUtil.encryptPassword(changePasswordDto.getNewPassword()));
        userAccount = userAccountRepository.save(userAccount);

        BpmnUserRepresentationDto bpmnUserRepresentationDto = mapper.map(userAccount, BpmnUserRepresentationDto.class);
        bpmnUserRepresentationDto.setPassword(changePasswordDto.getNewPassword());

        bpmnIdmUserClient.update(userAccount.getExternalId(), bpmnUserRepresentationDto);
    }

    @Override
    public void retrievePassword(String username) throws EntityDoesNotExistException {
        UserAccount userAccount = userAccountRepository.findByUsername(username);

        if (userAccount == null) {
            throw new EntityDoesNotExistException("User profile with Username : " + username + " does not exist");
        }

        userAccount.setPasswordResetCode(RandomStringUtils.randomAlphanumeric(resetPasswordLength).toUpperCase());
        userAccount.setPasswordResetCodeCreateDate(LocalDateTime.now());

        userAccount = userAccountRepository.save(userAccount);

        UserMailResetPasswordDto userMailResetPasswordDto = mapper.map(userAccount, UserMailResetPasswordDto.class);

        ResponseEntity<TextTemplateDto> mailTemplate =
                textTemplateClient.getByKeyAndProcess(
                        resetPasswordMailTemplateKey,
                        objectMapper.convertValue(userMailResetPasswordDto, Map.class));

        LOG.debug("Sending message to username={} with message={}", userAccount.getUsername(), mailTemplate.getBody().getTemplate());

        mailNotificationClient.sendMail(
                Lists.newArrayList(userAccount.getUsername()),
                resetPasswordMailHeader,
                mailTemplate.getBody().getTemplate());
    }

    @Override
    public UserAccountDto resetPassword(Long id, ResetPasswordDto resetPasswordDto) throws EntityDoesNotExistException, InvalidDataException {
        UserAccount userAccount = getUserAccountById(id);

        if (LocalDateTime.now().isAfter(userAccount.getPasswordResetCodeCreateDate().plusSeconds(resetPasswordValidity))) {
            throw new InvalidDataException("Reset Code provided has already expired");
        }

        userAccount.setPassword(EncryptionUtil.encryptPassword(resetPasswordDto.getNewPassword()));
        userAccount.setPasswordResetCode(null);
        userAccount.setPasswordResetCodeCreateDate(null);

        userAccount = userAccountRepository.save(userAccount);

        BpmnUserRepresentationDto bpmnUserRepresentationDto = mapper.map(userAccount, BpmnUserRepresentationDto.class);
        bpmnIdmUserClient.update(userAccount.getExternalId(), bpmnUserRepresentationDto);

        return mapper.map(userAccount, UserAccountDto.class);
    }

    @Override
    public UserLoginAccessDto getLoginAccess(Long id) throws EntityDoesNotExistException {
        return mapper.map(getUserAccountById(id), UserLoginAccessDto.class);
    }

    @Override
    public UserLoginAccessDto updateLoginAccess(Long id, UserLoginAccessDto userLoginAccessDto) throws EntityDoesNotExistException {
        UserAccount userAccount = getUserAccountById(id);
        userAccount.setEnabled(userLoginAccessDto.getEnabled());
        userAccount.setAccountNonExpired(userLoginAccessDto.getAccountNonExpired());
        userAccount.setAccountNonLocked(userLoginAccessDto.getAccountNonLocked());
        userAccount.setCredentialsNonExpired(userLoginAccessDto.getCredentialsNonExpired());

        return mapper.map(userAccountRepository.save(userAccount), UserLoginAccessDto.class);
    }

    private UserAccountDto activateAccount(Long id, String activationCode, String activationType) throws EntityDoesNotExistException, AccountAlreadyActiveException, InvalidDataException {
        UserAccount userAccount = userAccountRepository.findOneById(id);
        String systemGeneratedCode = "MAIL".equalsIgnoreCase(activationType) ? userAccount.getMailActivationCode() : userAccount.getMobileActivationCode();

        if (userAccount == null) {
            throw new EntityDoesNotExistException("User with id=" + id + " does not exist");
        }

        if (StringUtils.isEmpty(systemGeneratedCode)) {
            throw new AccountAlreadyActiveException("User with id=" + id + " already active");
        }

        if (!StringUtils.equals(systemGeneratedCode, activationCode)) {
            throw new InvalidDataException("Invalid activation code for id=" + id);
        }

        if ("MAIL".equalsIgnoreCase(activationType)) {
            userAccount.setMailActivationCode(null);
        } else {
            userAccount.setMobileActivationCode(null);
        }

        userAccount = userAccountRepository.save(userAccount);

        if (StringUtils.isEmpty(userAccount.getMailActivationCode()) && StringUtils.isEmpty(userAccount.getMobileActivationCode())) {
            BpmnUserRepresentationDto bpmnUserRepresentationDto = mapper.map(userAccount, BpmnUserRepresentationDto.class);
            bpmnUserRepresentationDto.setStatus("ACTIVE");

            bpmnIdmUserClient.activate(userAccount.getExternalId());

            // TODO : MAIL and SMS Notification
        }

        return mapper.map(userAccount, UserAccountDto.class);
    }

    private UserAccount getUserAccountById(Long id) throws EntityDoesNotExistException {
        UserAccount userAccount = userAccountRepository.findOneById(id);

        if (userAccount == null) {
            throw new EntityDoesNotExistException("User with id=" + id + " does not exist");
        }

        return userAccount;
    }
}
