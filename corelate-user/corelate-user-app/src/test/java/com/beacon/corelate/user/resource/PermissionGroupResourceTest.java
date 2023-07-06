package com.beacon.corelate.user.resource;

import com.beacon.corelate.commons.data.dto.PermissionGroupDto;
import com.beacon.corelate.commons.data.model.Permission;
import com.beacon.corelate.commons.data.model.PermissionGroup;
import com.beacon.corelate.user.Application;
import com.beacon.corelate.user.repository.jpa.PermissionGroupRepository;
import com.beacon.corelate.user.repository.jpa.PermissionRepository;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.assertj.core.util.Lists;
import org.assertj.core.util.Sets;
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

import java.util.List;
import java.util.Set;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertEquals;
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
public class PermissionGroupResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private PermissionGroupRepository permissionGroupRepository;

    @Autowired
    private PermissionRepository permissionRepository;

    private static final FieldDescriptor[] permissionGroupRequestFields = new FieldDescriptor[]{
            fieldWithPath("module").description("Permission Group Module Name"),
            fieldWithPath("description").description("Permission Group Description")
    };

    private static final FieldDescriptor[] permissionGroupResponseFields = new FieldDescriptor[]{
            fieldWithPath("id").description("Permission Group ID"),
            fieldWithPath("module").description("Permission Group Module Name"),
            fieldWithPath("description").description("Permission Group Description"),
            fieldWithPath("createdBy").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").description("Updated Date Time").optional().ignored(),
            fieldWithPath("permissions").type("Array").description("Array of permissions").optional(),
            fieldWithPath("permissions[].id").type("Number").description("Permission ID").optional(),
            fieldWithPath("permissions[].createdBy").description("Permission Created By").optional().ignored(),
            fieldWithPath("permissions[].createdDate").description("Permission Created Date Time").optional().ignored(),
            fieldWithPath("permissions[].updatedBy").description("Permission Updated By").optional().ignored(),
            fieldWithPath("permissions[].updatedDate").description("Permission Updated Date Time").optional().ignored(),
            fieldWithPath("permissions[].module").type("String").description("Permission Module").optional(),
            fieldWithPath("permissions[].action").type("String").description("Permission Name").optional()
    };

    private static final FieldDescriptor[] permissionGroupListResponseFields = new FieldDescriptor[]{
            fieldWithPath("results[].id").description("Permission Group ID").optional().ignored(),
            fieldWithPath("results[].module").description("Permission Group Module Name"),
            fieldWithPath("results[].description").description("Permission Group Description"),
            fieldWithPath("results[].createdBy").description("Created By").optional().ignored(),
            fieldWithPath("results[].createdDate").description("Created Date Time").optional().ignored(),
            fieldWithPath("results[].updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("results[].updatedDate").description("Updated Date Time").optional().ignored(),
            fieldWithPath("results[].permissions").type("Array").description("Array of permissions").optional(),
            fieldWithPath("results[].permissions[].id").type("Number").description("Permission ID").optional(),
            fieldWithPath("results[].permissions[].createdBy").description("Permission Created By").optional().ignored(),
            fieldWithPath("results[].permissions[].createdDate").description("Permission Created Date Time").optional().ignored(),
            fieldWithPath("results[].permissions[].updatedBy").description("Permission Updated By").optional().ignored(),
            fieldWithPath("results[].permissions[].updatedDate").description("Permission Updated Date Time").optional().ignored(),
            fieldWithPath("results[].permissions[].module").type("String").description("Permission Module").optional(),
            fieldWithPath("results[].permissions[].action").type("String").description("Permission Name").optional()
    };


    @Before
    public void setUp() {
        this.mockMvc =
                MockMvcBuilders
                        .webAppContextSetup(this.context)
                        .apply(MockMvcRestDocumentation.documentationConfiguration(this.restDocumentation))
                        .build();

        this.objectMapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
    }

    @Test
    @Transactional
    public void createPermissionGroup() throws Exception {
        PermissionGroupDto permissionGroupDto = new PermissionGroupDto();
        permissionGroupDto.setModule("MODULE NAME");
        permissionGroupDto.setDescription("MODULE DESCRIPTION");

        this.mockMvc
                .perform(post("/permission-group")
                        .content(objectMapper.writeValueAsString(permissionGroupDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.module", is(permissionGroupDto.getModule())))
                .andExpect(jsonPath("$.description", is(permissionGroupDto.getDescription())))
                .andDo(document("permissionGroupResource/create",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(permissionGroupRequestFields),
                        responseFields(permissionGroupResponseFields)));
    }

    @Test
    @Transactional
    public void updatePermissionGroup() throws Exception {
        PermissionGroup permissionGroup = new PermissionGroup();
        permissionGroup.setModule("EXISTING MODULE NAME");
        permissionGroup.setDescription("EXISTING MODULE DESCRIPTION");

        permissionGroup = permissionGroupRepository.save(permissionGroup);

        PermissionGroupDto permissionGroupDto = new PermissionGroupDto();
        permissionGroupDto.setModule("UPDATED MODULE NAME");
        permissionGroupDto.setDescription("UPDATED MODULE DESCRIPTION");

        this.mockMvc
                .perform(put("/permission-group/{id}", permissionGroup.getId())
                        .content(objectMapper.writeValueAsString(permissionGroupDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.module", is(permissionGroupDto.getModule())))
                .andExpect(jsonPath("$.description", is(permissionGroupDto.getDescription())))
                .andDo(document("permissionGroupResource/update",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Permission Group's id")
                        ),
                        requestFields(permissionGroupRequestFields),
                        responseFields(permissionGroupResponseFields)));
    }

    @Test
    @Transactional
    public void getPermissionGroup() throws Exception {
        Permission permission = new Permission();
        permission.setModule("MODULE NAME");
        permission.setAction("MODULE ACTION");

        permission = permissionRepository.save(permission);

        Set<Permission> permissions = Sets.newHashSet();
        permissions.add(permission);

        PermissionGroup permissionGroup = new PermissionGroup();
        permissionGroup.setModule("MODULE NAME");
        permissionGroup.setDescription("MODULE DESCRIPTION");
        permissionGroup.setPermissions(permissions);

        permissionGroup = permissionGroupRepository.save(permissionGroup);

        this.mockMvc
                .perform(get("/permission-group/{id}", permissionGroup.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.id", is(permissionGroup.getId().intValue())))
                .andExpect(jsonPath("$.module", is(permissionGroup.getModule())))
                .andExpect(jsonPath("$.description", is(permissionGroup.getDescription())))
                .andDo(document("permissionGroupResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Permission Group ID")
                        ),
                        responseFields(permissionGroupResponseFields)));
    }

    @Test
    @Transactional
    public void getPermissionGroupList() throws Exception {
        Integer simulationCount = 5;

        for (Integer counter = 0; counter < simulationCount; counter++) {
            Permission permission = new Permission();
            permission.setModule("MODULE NAME " + counter);
            permission.setAction("MODULE ACTION " + counter);

            permission = permissionRepository.save(permission);

            Set<Permission> permissions = Sets.newHashSet();
            permissions.add(permission);

            PermissionGroup permissionGroup = new PermissionGroup();
            permissionGroup.setModule("MODULE NAME " + counter);
            permissionGroup.setDescription("MODULE DESCRIPTION " + counter);
            permissionGroup.setPermissions(permissions);

            permissionGroup = permissionGroupRepository.save(permissionGroup);
        }

        List<FieldDescriptor> responseFields = Lists.newArrayList(permissionGroupListResponseFields);
        responseFields.add(fieldWithPath("currentPage").description("Current page number"));
        responseFields.add(fieldWithPath("pageSize").description("Current page size"));
        responseFields.add(fieldWithPath("hasNextPage").description("List has another page"));
        responseFields.add(fieldWithPath("totalElements").description("Total List size"));

        this.mockMvc
                .perform(get("/permission-group?page=0&size=10&sort=id")
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.hasNextPage", is(false)))
                .andExpect(jsonPath("$.totalElements", is(simulationCount)))
                .andDo(document("permissionGroupResource/list",
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
    public void deletePermissionGroup() throws Exception {
        Permission permission = new Permission();
        permission.setModule("MODULE NAME");
        permission.setAction("MODULE ACTION");

        permission = permissionRepository.save(permission);

        Set<Permission> permissions = Sets.newHashSet();
        permissions.add(permission);

        PermissionGroup permissionGroup = new PermissionGroup();
        permissionGroup.setModule("MODULE NAME");
        permissionGroup.setDescription("MODULE DESCRIPTION");
        permissionGroup.setPermissions(permissions);

        permissionGroup = permissionGroupRepository.save(permissionGroup);

        this.mockMvc
                .perform(delete("/permission-group/{id}", permissionGroup.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("permissionGroupResource/delete",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Permission Group's ID")
                        )
                ));

        assertEquals(Boolean.TRUE, permissionGroupRepository.findOneById(permissionGroup.getId()).getDeleted());
    }

    @Test
    @Transactional
    public void addPermissionActions() throws Exception {
        PermissionGroup permissionGroup = new PermissionGroup();
        permissionGroup.setModule("MODULE NAME");
        permissionGroup.setDescription("MODULE DESCRIPTION");

        permissionGroup = permissionGroupRepository.save(permissionGroup);

        assertTrue(permissionGroup.getPermissions().isEmpty());

        List<String> permissionActions = Lists.newArrayList("CREATE", "READ", "UPDATE", "DELETE");

        this.mockMvc
                .perform(post(
                        "/permission-group/{permissionGroupId}/permissions/actions",
                        permissionGroup.getId())
                        .content(objectMapper.writeValueAsString(permissionActions))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.id", is(permissionGroup.getId().intValue())))
                .andExpect(jsonPath("$.module", is(permissionGroup.getModule())))
                .andExpect(jsonPath("$.description", is(permissionGroup.getDescription())))
                .andExpect(jsonPath("$.permissions").exists())
                .andDo(document("permissionGroupResource/addPermissionActions",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("permissionGroupId").description("Permission Group's id")
                        ), requestFields(
                                fieldWithPath("[]").description("List of permission actions")
                        ),
                        responseFields(permissionGroupResponseFields)));

        assertEquals(4, permissionGroupRepository.findOneById(permissionGroup.getId()).getPermissions().size());
    }
}
