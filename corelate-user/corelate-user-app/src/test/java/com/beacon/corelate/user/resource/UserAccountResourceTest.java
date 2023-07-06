package com.beacon.corelate.user.resource;

import com.activiti.model.idm.UserRepresentation;
import com.beacon.corelate.commons.data.model.Group;
import com.beacon.corelate.commons.data.model.Permission;
import com.beacon.corelate.commons.util.EncryptionUtil;
import com.beacon.corelate.user.Application;
import com.beacon.corelate.user.dto.ChangePasswordDto;
import com.beacon.corelate.user.dto.ResetPasswordDto;
import com.beacon.corelate.user.dto.UserAccountDto;
import com.beacon.corelate.user.dto.UserLoginAccessDto;
import com.beacon.corelate.user.mapper.UserBeanMapper;
import com.beacon.corelate.user.model.Name;
import com.beacon.corelate.user.model.UserAccount;
import com.beacon.corelate.user.repository.jpa.GroupRepository;
import com.beacon.corelate.user.repository.jpa.PermissionRepository;
import com.beacon.corelate.user.repository.jpa.UserAccountRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.assertj.core.util.Lists;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.restdocs.JUnitRestDocumentation;
import org.springframework.restdocs.mockmvc.MockMvcRestDocumentation;
import org.springframework.restdocs.payload.FieldDescriptor;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import java.time.LocalDateTime;
import java.util.List;

import static com.beacon.corelate.commons.util.EncryptionUtil.bCryptPasswordEncoder;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.delete;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.put;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.preprocessRequest;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.preprocessResponse;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.prettyPrint;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestFields;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.restdocs.request.RequestDocumentation.requestParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * @author ddevera
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserAccountResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private UserBeanMapper userBeanMapper;

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private PermissionRepository permissionRepository;

    @Autowired
    private UserAccountRepository userAccountRepository;

    private static final FieldDescriptor[] userAccountResponseFields = new FieldDescriptor[]{
            fieldWithPath("id").description("The user's id"),
            fieldWithPath("username").description("The user's username"),
            fieldWithPath("createdBy").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").description("Updated Date Time").optional().ignored(),
            fieldWithPath("mobileNumber").type("String").description("The user's mobile number").optional(),
            fieldWithPath("name").type("NameDto").description("The user's name object handler").optional(),
            fieldWithPath("name.familyName").type("String").description("The user's family name").optional(),
            fieldWithPath("name.givenName").type("String").description("The user's given name").optional(),
            fieldWithPath("name.middleName").type("String").description("The user's middle name").optional(),
            fieldWithPath("name.suffix").type("String").description("The user's suffix name").optional(),
            fieldWithPath("name.prefix").type("String").description("The user's prefix name").optional(),
            fieldWithPath("name.degree").type("String").description("The user's degree").optional(),
            fieldWithPath("address").type("AddressDto").description("The user's address object handler").optional(),
            fieldWithPath("address.address").type("String").description("The user's line 1 address").optional(),
            fieldWithPath("address.address2").type("String").description("The user's line 2 address").optional(),
            fieldWithPath("address.province").type("String").description("The user's line 2 address").optional(),
            fieldWithPath("address.city").type("String").description("The user's line 2 address").optional(),
            fieldWithPath("address.country").type("String").description("The user's country code address").optional(),
            fieldWithPath("address.zipCode").type("String").description("The user's zip code address").optional(),
            fieldWithPath("address.countryName").type("String").description("The user's country address").optional(),
            fieldWithPath("groups").type("Array").description("The user's groups").optional(),
            fieldWithPath("groups[].id").type("Number").description("The user's group ID").optional(),
            fieldWithPath("groups[].name").type("String").description("The user's group name").optional(),
            fieldWithPath("groups[].description").type("String").description("The user's group description").optional(),
            fieldWithPath("groups[].permissions").type("Array").description("The user's group permissions").optional(),
            fieldWithPath("groups[].createdBy").description("The user's group Created By").optional().ignored(),
            fieldWithPath("groups[].createdDate").description("The user's group Created Date").optional().ignored(),
            fieldWithPath("groups[].updatedBy").description("The user's group Updated By").optional().ignored(),
            fieldWithPath("groups[].updatedDate").description("The user's group Updated Date Time").optional().ignored(),
            fieldWithPath("permissions").type("Array").description("The user's permissions").optional(),
            fieldWithPath("permissions[].id").type("Number").description("The user's permissions id").optional(),
            fieldWithPath("permissions[].module").type("String").description("The user's permissions module").optional(),
            fieldWithPath("permissions[].action").type("String").description("The user's permissions name").optional(),
            fieldWithPath("permissions[].createdBy").description("The user's permissions Created By").optional().ignored(),
            fieldWithPath("permissions[].createdDate").description("The user's permissions Created Date").optional().ignored(),
            fieldWithPath("permissions[].updatedBy").description("The user's permissions Updated By").optional().ignored(),
            fieldWithPath("permissions[].updatedDate").description("The user's permissions Updated Date Time").optional().ignored()

    };

    private static final FieldDescriptor[] userAccountListResponseFields = new FieldDescriptor[]{
            fieldWithPath("results[].id").description("The user's id"),
            fieldWithPath("results[].username").description("The user's username"),
            fieldWithPath("results[].createdBy").description("Created By"),
            fieldWithPath("results[].createdDate").description("Created Date Time"),
            fieldWithPath("results[].updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("results[].updatedDate").description("Updated Date Time").optional().ignored(),
            fieldWithPath("results[].mobileNumber").type("String").description("The user's mobile number").optional(),
            fieldWithPath("results[].name").type("NameDto").description("The user's name object handler").optional(),
            fieldWithPath("results[].name.familyName").type("String").description("The user's family name").optional(),
            fieldWithPath("results[].name.givenName").type("String").description("The user's given name").optional(),
            fieldWithPath("results[].name.middleName").type("String").description("The user's middle name").optional(),
            fieldWithPath("results[].name.suffix").type("String").description("The user's suffix name").optional(),
            fieldWithPath("results[].name.prefix").type("String").description("The user's prefix name").optional(),
            fieldWithPath("results[].name.degree").type("String").description("The user's degree").optional(),
            fieldWithPath("results[].address").type("AddressDto").description("The user's address object handler").optional(),
            fieldWithPath("results[].address.address").type("String").description("The user's line 1 address").optional(),
            fieldWithPath("results[].address.address2").type("String").description("The user's line 2 address").optional(),
            fieldWithPath("results[].address.province").type("String").description("The user's line 2 address").optional(),
            fieldWithPath("results[].address.city").type("String").description("The user's line 2 address").optional(),
            fieldWithPath("results[].address.country").type("String").description("The user's country code address").optional(),
            fieldWithPath("results[].address.zipCode").type("String").description("The user's zip code address").optional(),
            fieldWithPath("results[].address.countryName").type("String").description("The user's country address").optional(),
            fieldWithPath("results[].groups").type("Array").description("The user's groups").optional(),
            fieldWithPath("results[].permissions").type("Array").description("The user's permissions").optional()
    };

    private static final FieldDescriptor[] userAccountRequestFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("username").description("Unique user email identifier"),
            fieldWithPath("password").type("String").description("User password").optional(),
            fieldWithPath("createdBy").type("String").optional().ignored(),
            fieldWithPath("createdDate").type("String").optional().ignored(),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("String").optional().ignored(),
            fieldWithPath("mobileNumber").type("String").description("The user's mobile number").optional(),
            fieldWithPath("name").type("NameDto").description("The user's name object handler").optional(),
            fieldWithPath("name.familyName").type("String").description("The user's family name").optional(),
            fieldWithPath("name.givenName").type("String").description("The user's given name").optional(),
            fieldWithPath("name.middleName").type("String").description("The user's middle name").optional(),
            fieldWithPath("name.suffix").type("String").description("The user's suffix name").optional(),
            fieldWithPath("name.prefix").type("String").description("The user's prefix name").optional(),
            fieldWithPath("name.degree").type("String").description("The user's degree").optional(),
            fieldWithPath("address").type("AddressDto").description("The user's address object handler").optional(),
            fieldWithPath("address.address").type("String").description("The user's line 1 address").optional(),
            fieldWithPath("address.address2").type("String").description("The user's line 2 address").optional(),
            fieldWithPath("address.province").type("String").description("The user's line 2 address").optional(),
            fieldWithPath("address.city").type("String").description("The user's line 2 address").optional(),
            fieldWithPath("address.country").type("String").description("The user's country code address").optional(),
            fieldWithPath("address.zipCode").type("String").description("The user's zip code address").optional(),
            fieldWithPath("address.countryName").type("String").description("The user's country address").optional(),
            fieldWithPath("groups").type("Array").description("The user's groups").optional().ignored(),
            fieldWithPath("permissions").type("Array").description("The user's permissions").optional().ignored()
    };

    private static final FieldDescriptor[] userLoginAccessFields = new FieldDescriptor[] {
            fieldWithPath("enabled").description("User Login access enabled field"),
            fieldWithPath("accountNonLocked").description("User Login access account non locked field"),
            fieldWithPath("accountNonExpired").description("User Login access account non expired field"),
            fieldWithPath("credentialsNonExpired").description("User Login access account credentials non expired field")
    };

    @Before
    public void setUp() {
        this.mockMvc =
                MockMvcBuilders
                        .webAppContextSetup(this.context)
                        .apply(MockMvcRestDocumentation.documentationConfiguration(this.restDocumentation))
                        .build();
    }

    @Test
    @Transactional
    public void createUserAccount() throws Exception {
        UserAccountDto userAccountDto = new UserAccountDto();
        userAccountDto.setUsername("newUser@isv.corelate.net");

        UserRepresentation userRepresentation = new UserRepresentation();
        userRepresentation.setId(1000L);

        this.mockMvc
                .perform(post("/user-account")
                        .content(objectMapper.writeValueAsString(userAccountDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.username", is(userAccountDto.getUsername())))
                .andExpect(jsonPath("$.password").doesNotExist())
                .andExpect(jsonPath("$.generatedPassword").doesNotExist())
                .andDo(document("userAccountResource/create",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(userAccountRequestFields),
                        responseFields(userAccountResponseFields)));

        assertNotNull(userAccountRepository.findByUsername(userAccountDto.getUsername()));
    }

    @Test
    @Transactional
    public void updateUserAccount() throws Exception {
        Name name = new Name();
        name.setFamilyName("ISV FAMILY NAME");
        name.setGivenName("ISV GIVEN NAME");

        UserAccount userAccount = new UserAccount();
        userAccount.setUsername("newUser@isv.corelate.net");
        userAccount.setPassword("123qwe");
        userAccount.setName(name);

        userAccount = userAccountRepository.save(userAccount);

        UserAccountDto userAccountDto = userBeanMapper.map(userAccount, UserAccountDto.class);

        userAccountDto.setId(null);
        userAccountDto.getName().setFamilyName("NEW ISV FAMILY NAME");
        userAccountDto.setCreatedBy(null);
        userAccountDto.setCreatedDate(null);

        this.mockMvc
                .perform(put("/user-account/{userId}", userAccount.getId())
                        .content(objectMapper.writeValueAsString(userAccountDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.username", is(userAccountDto.getUsername())))
                .andExpect(jsonPath("$.password").doesNotExist())
                .andExpect(jsonPath("$.generatedPassword").doesNotExist())
                .andExpect(jsonPath("$.name.familyName", is(userAccountDto.getName().getFamilyName())))
                .andDo(document("userAccountResource/update",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("userId").description("The user id")
                        ),
                        requestFields(userAccountRequestFields),
                        responseFields(userAccountResponseFields)));

        assertNotNull(userAccountRepository.findByUsername(userAccountDto.getUsername()));
    }

    @Test
    @Transactional
    public void getUserAccount() throws Exception {
        UserAccount userAccount = new UserAccount();
        userAccount.setPassword("123qwe");
        userAccount.setUsername("sample@isv.corelate.net");

        userAccount = userAccountRepository.save(userAccount);

        this.mockMvc
                .perform(get("/user-account/{userId}", userAccount.getId()).accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.id", is(userAccount.getId().intValue())))
                .andExpect(jsonPath("$.username", is(userAccount.getUsername())))
                .andExpect(jsonPath("$.password").doesNotExist())
                .andExpect(jsonPath("$.generatedPassword").doesNotExist())
                .andDo(document("userAccountResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("userId").description("The user id")
                        ),
                        responseFields(userAccountResponseFields)));

    }

    @Test
    @Transactional
    public void getUserAccountList() throws Exception {
        userAccountRepository.deleteAll();

        Integer simulationCount = 5;

        for (Integer counter = 0; counter < simulationCount; counter++) {
            UserAccount userAccount = new UserAccount();
            userAccount.setUsername(counter + "sample@isv.corelate.net");
            userAccount.setPassword("123qwe");

            userAccountRepository.save(userAccount);
        }

        List<FieldDescriptor> responseFields = Lists.newArrayList(userAccountListResponseFields);
        responseFields.add(fieldWithPath("currentPage").description("Current page number"));
        responseFields.add(fieldWithPath("pageSize").description("Current page size"));
        responseFields.add(fieldWithPath("hasNextPage").description("List has another page"));
        responseFields.add(fieldWithPath("totalElements").description("Total List size"));


        this.mockMvc
                .perform(get("/user-account?page=0&size=10&sort=id")
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.hasNextPage", is(false)))
                .andExpect(jsonPath("$.totalElements", is(simulationCount)))
                .andDo(document("userAccountResource/list",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestParameters(
                                parameterWithName("page").optional().description("Page number"),
                                parameterWithName("size").optional().description("Page size"),
                                parameterWithName("sort").optional().description("Page sort")
                        ),
                        responseFields(responseFields)
                ));
    }

    @Test
    @Transactional
    public void deleteUserAccount() throws Exception {
        UserAccount userAccount = new UserAccount();
        userAccount.setUsername("testUser@isv.corelate.net");
        userAccount.setPassword("123qwe");

        userAccount = userAccountRepository.save(userAccount);

        this.mockMvc
                .perform(delete("/user-account/{id}", userAccount.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("userAccountResource/delete",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("User's ID")
                        )
                ));

        assertEquals(Boolean.TRUE, userAccountRepository.findOneById(userAccount.getId()).getDeleted());
    }

    @Test
    @Transactional
    public void mailActivation() throws Exception {
        UserAccount userAccount = new UserAccount();
        userAccount.setUsername("newUser@isv.corelate.net");
        userAccount.setPassword("123qwe");
        userAccount.setMailActivationCode("MAIL_ACTIVATION_CODE");

        userAccount = userAccountRepository.save(userAccount);

        this.mockMvc
                .perform(put("/user-account/{id}/mail-activation-code/{activationCode}/activate", userAccount.getId(), userAccount.getMailActivationCode())
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.username", is(userAccount.getUsername())))
                .andExpect(jsonPath("$.password").doesNotExist())
                .andExpect(jsonPath("$.generatedPassword").doesNotExist())
                .andDo(document("userAccountResource/mailActivation",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("User's ID"),
                                parameterWithName("activationCode").description("User's mail activation code")
                        ),
                        responseFields(userAccountResponseFields)));

        assertNull(userAccountRepository.findOneById(userAccount.getId()).getMailActivationCode());
    }

    @Test
    @Transactional
    public void mobileActivation() throws Exception {
        UserAccount userAccount = new UserAccount();
        userAccount.setUsername("newUser@isv.corelate.net");
        userAccount.setPassword("123qwe");
        userAccount.setMobileActivationCode("MOBILE_ACTIVATION_CODE");

        userAccount = userAccountRepository.save(userAccount);

        this.mockMvc
                .perform(put("/user-account/{id}/mobile-activation-code/{activationCode}/activate", userAccount.getId(), userAccount.getMobileActivationCode())
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.username", is(userAccount.getUsername())))
                .andExpect(jsonPath("$.password").doesNotExist())
                .andExpect(jsonPath("$.generatedPassword").doesNotExist())
                .andDo(document("userAccountResource/mobileActivation",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("User's ID"),
                                parameterWithName("activationCode").description("User's sms activation code")
                        ),
                        responseFields(userAccountResponseFields)));

        assertNull(userAccountRepository.findOneById(userAccount.getId()).getMobileActivationCode());
    }

    @Test
    @Transactional
    public void changePassword() throws Exception {
        String oldPassword = "123qwe";
        String newPassword = "newPassword";

        ChangePasswordDto changePasswordDto = new ChangePasswordDto();
        changePasswordDto.setOldPassword(oldPassword);
        changePasswordDto.setNewPassword(newPassword);

        UserAccount userAccount = new UserAccount();
        userAccount.setUsername("newUser@isv.corelate.net");
        userAccount.setPassword(EncryptionUtil.encryptPassword(oldPassword));

        userAccount = userAccountRepository.save(userAccount);

        this.mockMvc
                .perform(put("/user-account/{id}/password/change", userAccount.getId())
                        .content(objectMapper.writeValueAsString(changePasswordDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("userAccountResource/changePassword",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("User's ID")
                        ),
                        requestFields(
                                fieldWithPath("oldPassword").description("User's old password"),
                                fieldWithPath("newPassword").description("User's new password")
                        )
                ));

        assertTrue(bCryptPasswordEncoder
                .matches(
                        newPassword,
                        userAccountRepository
                                .findOneById(userAccount.getId())
                                .getPassword()));
    }

    @Test
    @Transactional
    public void retrievePassword() throws Exception {
        UserAccount userAccount = new UserAccount();
        userAccount.setUsername("newUser@isv.corelate.net");
        userAccount.setPassword("123qwe");

        userAccount = userAccountRepository.save(userAccount);

        this.mockMvc
                .perform(post("/user-account/username/{username}/retrieve", userAccount.getUsername())
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("userAccountResource/retrievePassword",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("username").description("User's username")
                        )));

        assertNotNull(userAccountRepository.findByUsername(userAccount.getUsername()).getPasswordResetCode());
        assertNotNull(userAccountRepository.findByUsername(userAccount.getUsername()).getPasswordResetCodeCreateDate());
    }

    @Test
    @Transactional
    public void resetPassword() throws Exception {
        String newPassword = "NEW PASSWORD";

        UserAccount userAccount = new UserAccount();
        userAccount.setUsername("newUser@isv.corelate.net");
        userAccount.setPassword("123qwe");
        userAccount.setPasswordResetCode("123ABC");
        userAccount.setPasswordResetCodeCreateDate(LocalDateTime.now());

        userAccount = userAccountRepository.save(userAccount);

        ResetPasswordDto resetPasswordDto = new ResetPasswordDto();
        resetPasswordDto.setResetCode(userAccount.getPasswordResetCode());
        resetPasswordDto.setNewPassword(newPassword);

        this.mockMvc
                .perform(put("/user-account/{id}/password/reset", userAccount.getId())
                        .content(objectMapper.writeValueAsString(resetPasswordDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("userAccountResource/resetPassword",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("User's ID")
                        ),
                        requestFields(
                                fieldWithPath("resetCode").description("Generated reset code"),
                                fieldWithPath("newPassword").description("User's new password")
                        ),
                        responseFields(userAccountResponseFields)
                ));

        UserAccount resultUser = userAccountRepository
                .findOneById(userAccount.getId());

        assertTrue(bCryptPasswordEncoder
                .matches(
                        newPassword,
                        resultUser.getPassword()));
        assertNull(resultUser.getPasswordResetCodeCreateDate());
        assertNull(resultUser.getPasswordResetCode());
    }

    @Test
    @Transactional
    public void addGroup() throws Exception {
        UserAccount userAccount = new UserAccount();
        userAccount.setUsername("newUser@isv.corelate.net");
        userAccount.setPassword("123qwe");
        userAccount.setExternalId(200L);

        userAccount = userAccountRepository.save(userAccount);

        Group group = new Group();
        group.setName("TEST GROUP NAME");
        group.setExternalId(300L);

        group = groupRepository.save(group);

        assertTrue(userAccount.getGroups().isEmpty());

        this.mockMvc
                .perform(post("/user-account/{id}/groups/{groupId}", userAccount.getId(), group.getId())
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("userAccountResource/addGroup",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("User's ID"),
                                parameterWithName("groupId").description("Group's ID")
                        ),
                        responseFields(userAccountResponseFields)
                ));

        assertTrue(!userAccountRepository.findOneById(userAccount.getId()).getGroups().isEmpty());
    }

    @Test
    @Transactional
    public void addGroups() throws Exception {
        groupRepository.deleteAll();

        Integer simulationCount = 5;

        List<Long> groupIds = Lists.newArrayList();
        for (Integer counter = 1; counter <= simulationCount; counter++) {
            Group group = new Group();
            group.setName("GROUP " + counter);
            group.setExternalId(100L + counter);

            group = groupRepository.save(group);
            groupIds.add(group.getId());
        }

        UserAccount userAccount = new UserAccount();
        userAccount.setUsername("newUser@isv.corelate.net");
        userAccount.setPassword("123qwe");
        userAccount.setExternalId(200L);

        userAccount = userAccountRepository.save(userAccount);

        assertTrue(userAccount.getGroups().isEmpty());

        this.mockMvc
                .perform(post("/user-account/{id}/groups", userAccount.getId())
                        .content(objectMapper.writeValueAsString(groupIds))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("userAccountResource/addGroups",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("User's ID")
                        ),
                        requestFields(
                                fieldWithPath("[]").description("List of Group IDs")
                        ),
                        responseFields(userAccountResponseFields)
                ));

        assertTrue(!userAccountRepository.findOneById(userAccount.getId()).getGroups().isEmpty());
        assertEquals(5, userAccountRepository.findOneById(userAccount.getId()).getGroups().size());
    }

    @Test
    @Transactional
    public void removeGroup() throws Exception {
        Group group = new Group();
        group.setExternalId(300L);
        group.setName("TEST GROUP");

        group = groupRepository.save(group);

        UserAccount userAccount = new UserAccount();
        userAccount.setUsername("newUser@isv.corelate.net");
        userAccount.setPassword("123qwe");
        userAccount.setExternalId(200L);
        userAccount
                .getGroups()
                .add(group);

        userAccount = userAccountRepository.save(userAccount);

        assertFalse(userAccount.getGroups().isEmpty());
        assertTrue(userAccount.getGroups().contains(group));

        this.mockMvc
                .perform(delete(
                        "/user-account/{id}/groups/{groupId}",
                        userAccount.getId(),
                        group.getId()))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("userAccountResource/removeGroup",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("User's id"),
                                parameterWithName("groupId").description("Group's id")
                        )));

        assertEquals(0, userAccountRepository.findOneById(userAccount.getId()).getGroups().size());
    }

    @Test
    @Transactional
    public void removeGroups() throws Exception {
        groupRepository.deleteAll();

        UserAccount userAccount = new UserAccount();
        userAccount.setUsername("newUser@isv.corelate.net");
        userAccount.setPassword("123qwe");
        userAccount.setExternalId(200L);

        Integer simulationCount = 5;

        List<Long> groupIdToRemove = Lists.newArrayList();

        for (Integer counter = 1; counter <= simulationCount; counter++) {
            Group group = new Group();
            group.setName("GROUP " + counter);
            group.setExternalId(100L + counter);

            group = groupRepository.save(group);

            userAccount
                    .getGroups()
                    .add(group);

            if (counter % 2 == 0) {
                groupIdToRemove.add(group.getId());
            }
        }

        userAccount = userAccountRepository.save(userAccount);

        assertFalse(userAccount.getGroups().isEmpty());
        assertEquals(5, userAccount.getGroups().size());


        this.mockMvc
                .perform(delete(
                        "/user-account/{userId}/groups", userAccount.getId())
                        .content(objectMapper.writeValueAsString(groupIdToRemove))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("userAccountResource/removeGroups",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("userId").description("User's id")
                        ),
                        requestFields(
                                fieldWithPath("[]").description("List of group IDs")
                        )));

        assertEquals(3, userAccountRepository.findOneById(userAccount.getId()).getGroups().size());
    }

    @Test
    @Transactional
    public void addPermission() throws Exception {
        UserAccount userAccount = new UserAccount();
        userAccount.setUsername("newUser@isv.corelate.net");
        userAccount.setPassword("123qwe");
        userAccount.setExternalId(200L);

        userAccount = userAccountRepository.save(userAccount);

        Permission permission = new Permission();
        permission.setAction("CREATE");
        permission.setModule("USER");

        permission = permissionRepository.save(permission);

        assertTrue(userAccount.getGroups().isEmpty());

        this.mockMvc
                .perform(post("/user-account/{id}/permissions/{permissionId}", userAccount.getId(), permission.getId())
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("userAccountResource/addPermission",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("User's ID"),
                                parameterWithName("permissionId").description("Permission's ID")
                        ),
                        responseFields(userAccountResponseFields)
                ));

        assertTrue(!userAccountRepository.findOneById(userAccount.getId()).getPermissions().isEmpty());
    }

    @Test
    @Transactional
    public void addPermissions() throws Exception {
        permissionRepository.deleteAll();

        Integer simulationCount = 5;

        List<Long> permissionIds = Lists.newArrayList();
        for (Integer counter = 1; counter <= simulationCount; counter++) {
            Permission permission = new Permission();
            permission.setModule("USER_" + counter);
            permission.setAction("CREATE");

            permission = permissionRepository.save(permission);
            permissionIds.add(permission.getId());
        }

        UserAccount userAccount = new UserAccount();
        userAccount.setUsername("newUser@isv.corelate.net");
        userAccount.setPassword("123qwe");
        userAccount.setExternalId(200L);

        userAccount = userAccountRepository.save(userAccount);

        assertTrue(userAccount.getGroups().isEmpty());

        this.mockMvc
                .perform(post("/user-account/{id}/permissions", userAccount.getId())
                        .content(objectMapper.writeValueAsString(permissionIds))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("userAccountResource/addPermissions",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("User's ID")
                        ),
                        requestFields(
                                fieldWithPath("[]").description("List of Permission IDs")
                        ),
                        responseFields(userAccountResponseFields)
                ));

        assertTrue(!userAccountRepository.findOneById(userAccount.getId()).getPermissions().isEmpty());
        assertEquals(5, userAccountRepository.findOneById(userAccount.getId()).getPermissions().size());
    }

    @Test
    @Transactional
    public void removePermission() throws Exception {
        Permission permission = new Permission();
        permission.setModule("USER");
        permission.setAction("CREATE");

        permission = permissionRepository.save(permission);

        UserAccount userAccount = new UserAccount();
        userAccount.setUsername("newUser@isv.corelate.net");
        userAccount.setPassword("123qwe");
        userAccount.setExternalId(200L);
        userAccount
                .getPermissions()
                .add(permission);

        userAccount = userAccountRepository.save(userAccount);

        assertFalse(userAccount.getPermissions().isEmpty());
        assertTrue(userAccount.getPermissions().contains(permission));

        this.mockMvc
                .perform(delete(
                        "/user-account/{id}/permissions/{permissionId}",
                        userAccount.getId(),
                        permission.getId()))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("userAccountResource/removePermission",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("User's id"),
                                parameterWithName("permissionId").description("Permissions's id")
                        )));

        assertEquals(0, userAccountRepository.findOneById(userAccount.getId()).getPermissions().size());
    }

    @Test
    @Transactional
    public void removePermissions() throws Exception {
        permissionRepository.deleteAll();

        UserAccount userAccount = new UserAccount();
        userAccount.setUsername("newUser@isv.corelate.net");
        userAccount.setPassword("123qwe");
        userAccount.setExternalId(200L);

        Integer simulationCount = 5;

        List<Long> permissionIdToRemove = Lists.newArrayList();

        for (Integer counter = 1; counter <= simulationCount; counter++) {
            Permission permission = new Permission();
            permission.setModule("USER_" + counter);
            permission.setAction("CREATE");

            permission = permissionRepository.save(permission);

            userAccount
                    .getPermissions()
                    .add(permission);

            if (counter % 2 == 0) {
                permissionIdToRemove.add(permission.getId());
            }
        }

        userAccount = userAccountRepository.save(userAccount);

        assertFalse(userAccount.getPermissions().isEmpty());
        assertEquals(5, userAccount.getPermissions().size());


        this.mockMvc
                .perform(delete(
                        "/user-account/{userId}/permissions", userAccount.getId())
                        .content(objectMapper.writeValueAsString(permissionIdToRemove))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("userAccountResource/removePermissions",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("userId").description("User's id")
                        ),
                        requestFields(
                                fieldWithPath("[]").description("List of permission IDs")
                        )));

        assertEquals(3, userAccountRepository.findOneById(userAccount.getId()).getPermissions().size());
    }

    @Test
    @Transactional
    public void getLoginAccess() throws Exception {
        UserAccount userAccount = new UserAccount();
        userAccount.setUsername("newUser@isv.corelate.net");
        userAccount.setPassword("123qwe");
        userAccount.setExternalId(200L);

        userAccount = userAccountRepository.save(userAccount);

        this.mockMvc
                .perform(get(
                        "/user-account/{userId}/login-access", userAccount.getId())
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("userAccountResource/getLoginAccess",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("userId").description("User's id")
                        ),
                        responseFields(userLoginAccessFields)));
    }

    @Test
    @Transactional
    public void updateLoginAccess() throws Exception {
        UserAccount userAccount = new UserAccount();
        userAccount.setUsername("newUser@isv.corelate.net");
        userAccount.setPassword("123qwe");
        userAccount.setExternalId(200L);
        userAccount.setAccountNonExpired(Boolean.FALSE);

        userAccount = userAccountRepository.save(userAccount);

        UserLoginAccessDto userLoginAccessDto = new UserLoginAccessDto();
        userLoginAccessDto.setEnabled(Boolean.FALSE);
        userLoginAccessDto.setAccountNonExpired(Boolean.TRUE);
        userLoginAccessDto.setAccountNonLocked(Boolean.TRUE);
        userLoginAccessDto.setCredentialsNonExpired(Boolean.TRUE);

        this.mockMvc
                .perform(put(
                        "/user-account/{userId}/login-access", userAccount.getId())
                        .content(objectMapper.writeValueAsString(userLoginAccessDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.enabled", is(userLoginAccessDto.getEnabled())))
                .andDo(document("userAccountResource/updateLoginAccess",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("userId").description("User's id")
                        ),
                        requestFields(userLoginAccessFields),
                        responseFields(userLoginAccessFields)));
    }
}
