package com.beacon.corelate.user.resource;

import com.beacon.corelate.commons.data.dto.GroupDto;
import com.beacon.corelate.commons.data.model.Group;
import com.beacon.corelate.commons.data.model.Permission;
import com.beacon.corelate.user.Application;
import com.beacon.corelate.user.repository.jpa.GroupRepository;
import com.beacon.corelate.user.repository.jpa.PermissionRepository;
import com.fasterxml.jackson.annotation.JsonInclude;
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

import java.util.List;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
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
public class GroupResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private PermissionRepository permissionRepository;

    private static final FieldDescriptor[] groupRequestFields = new FieldDescriptor[]{
            fieldWithPath("name").description("Group name"),
            fieldWithPath("description").description("Group description")
    };

    private static final FieldDescriptor[] groupResponseFields = new FieldDescriptor[]{
            fieldWithPath("id").description("Group ID"),
            fieldWithPath("name").description("Group name"),
            fieldWithPath("description").description("Group description"),
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

    private static final FieldDescriptor[] groupListResponseFields = new FieldDescriptor[]{
            fieldWithPath("results[].id").description("Group ID"),
            fieldWithPath("results[].name").description("Group name"),
            fieldWithPath("results[].description").description("Group description"),
            fieldWithPath("results[].createdBy").description("Created By").optional().ignored(),
            fieldWithPath("results[].createdDate").description("Created Date Time").optional().ignored(),
            fieldWithPath("results[].updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("results[].updatedDate").description("Updated Date Time").optional().ignored(),
            fieldWithPath("results[].permissions").type("Array").description("Permission List").optional(),
            fieldWithPath("results[].permissions[].id").type("Number").description("Permission ID").optional(),
            fieldWithPath("results[].permissions[].createdBy").description("Permission Created By").optional().ignored(),
            fieldWithPath("results[].permissions[].createdDate").description("Permission Created Date Time").optional().ignored(),
            fieldWithPath("results[].permissions[].updatedBy").description("Permission Updated By").optional().ignored(),
            fieldWithPath("results[].permissions[].updatedDate").description("Permission Updated Date Time").optional().ignored(),
            fieldWithPath("results[].permissions[].module").type("String").description("Permission Module").optional(),
            fieldWithPath("results[].permissions[].action").type("String").description("Permission Name").optional()
    };

    private static final FieldDescriptor[] groupPermissionResponseFields = new FieldDescriptor[]{
            fieldWithPath("id").description("Group ID"),
            fieldWithPath("name").description("Group name"),
            fieldWithPath("description").description("Group description"),
            fieldWithPath("createdBy").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").description("Updated Date Time").optional().ignored(),
            fieldWithPath("permissions").type("Array").description("Permission List").optional(),
            fieldWithPath("permissions[].id").type("Number").description("Permission ID").optional(),
            fieldWithPath("permissions[].createdBy").description("Permission Created By").optional().ignored(),
            fieldWithPath("permissions[].createdDate").description("Permission Created Date Time").optional().ignored(),
            fieldWithPath("permissions[].updatedBy").description("Permission Updated By").optional().ignored(),
            fieldWithPath("permissions[].updatedDate").description("Permission Updated Date Time").optional().ignored(),
            fieldWithPath("permissions[].module").type("String").description("Permission Module").optional(),
            fieldWithPath("permissions[].action").type("String").description("Permission Name").optional()
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
    public void createGroup() throws Exception {
        GroupDto groupDto = new GroupDto();
        groupDto.setName("SAMPLE GROUP NAME");
        groupDto.setDescription("SAMPLE GROUP DESCRIPTION");

        this.mockMvc
                .perform(post("/group")
                        .content(objectMapper.writeValueAsString(groupDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.name", is(groupDto.getName())))
                .andExpect(jsonPath("$.description", is(groupDto.getDescription())))
                .andDo(document("groupResource/create",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(groupRequestFields),
                        responseFields(groupResponseFields)));
    }

    @Test
    @Transactional
    public void updateGroup() throws Exception {
        Group group = new Group();
        group.setName("EXISTING GROUP");
        group.setDescription("EXISTING DESCRIPTION");
        group.setExternalId(200L);

        group = groupRepository.save(group);

        GroupDto groupDto = new GroupDto();
        groupDto.setName("UPDATE GROUP NAME");
        groupDto.setDescription("UPDATE GROUP DESCRIPTION");

        this.mockMvc
                .perform(put("/group/{id}", group.getId())
                        .content(objectMapper.writeValueAsString(groupDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.name", is(groupDto.getName())))
                .andExpect(jsonPath("$.description", is(groupDto.getDescription())))
                .andDo(document("groupResource/update",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Group's id")
                        ),
                        requestFields(groupRequestFields),
                        responseFields(groupPermissionResponseFields)));

        assertEquals(groupRepository.findOneById(group.getId()).getExternalId(), group.getExternalId());
    }

    @Test
    @Transactional
    public void getGroup() throws Exception {
        Group group = new Group();
        group.setName("SAMPLE GROUP NAME");
        group.setDescription("SAMPLE GROUP DESCRIPTION");

        group = groupRepository.save(group);

        this.mockMvc
                .perform(get("/group/{id}", group.getId()).accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.id", is(group.getId().intValue())))
                .andExpect(jsonPath("$.name", is(group.getName())))
                .andExpect(jsonPath("$.description", is(group.getDescription())))
                .andDo(document("groupResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Group ID")
                        ),
                        responseFields(groupPermissionResponseFields)));

    }

    @Test
    @Transactional
    public void getGroupList() throws Exception {
        Integer simulationCount = 5;

        for (Integer counter = 0; counter < simulationCount; counter++) {
            Group group = new Group();
            group.setName("GROUP " + counter);
            group.setDescription("GROUP DESCRIPTION " + counter);

            groupRepository.save(group);
        }

        List<FieldDescriptor> responseFields = Lists.newArrayList(groupListResponseFields);
        responseFields.add(fieldWithPath("currentPage").description("Current page number"));
        responseFields.add(fieldWithPath("pageSize").description("Current page size"));
        responseFields.add(fieldWithPath("hasNextPage").description("List has another page"));
        responseFields.add(fieldWithPath("totalElements").description("Total List size"));


        this.mockMvc
                .perform(get("/group?page=0&size=10&sort=id")
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.hasNextPage", is(false)))
                .andExpect(jsonPath("$.totalElements", is(simulationCount)))
                .andDo(document("groupResource/list",
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
    public void deleteGroup() throws Exception {
        Group group = new Group();
        group.setName("SAMPLE GROUP");

        group = groupRepository.save(group);

        this.mockMvc
                .perform(delete("/group/{id}", group.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("groupResource/delete",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Group ID")
                        )
                ));

        assertEquals(Boolean.TRUE, groupRepository.findOneById(group.getId()).getDeleted());
    }

    @Test
    @Transactional
    public void addPermission() throws Exception {
        Permission permission = new Permission();
        permission.setModule("PERMISSION MODULE");
        permission.setAction("PERMISSION ACTION");

        permission = permissionRepository.save(permission);

        Group group = new Group();
        group.setName("SAMPLE GROUP NAME");
        group.setDescription("SAMPLE GROUP DESCRIPTION");
        group.setExternalId(1L);

        group = groupRepository.save(group);

        assertTrue(group.getPermissions().isEmpty());

        this.mockMvc
                .perform(post(
                        "/group/{groupId}/permissions/{permissionId}",
                        group.getId(),
                        permission.getId()))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.id", is(group.getId().intValue())))
                .andExpect(jsonPath("$.name", is(group.getName())))
                .andExpect(jsonPath("$.permissions").exists())
                .andDo(document("groupResource/addPermission",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("groupId").description("Group's id"),
                                parameterWithName("permissionId").description("Permission's id")
                        ),
                        responseFields(groupPermissionResponseFields)));
    }

    @Test
    @Transactional
    public void addPermissions() throws Exception {
        permissionRepository.deleteAll();

        Integer simulationCount = 5;

        List<Long> permissionIds = Lists.newArrayList();
        for (Integer counter = 1; counter <= simulationCount; counter++) {
            Permission permission = new Permission();
            permission.setModule("SAMPLE MODULE " + counter);
            permission.setAction("SAMPLE ACTION " + counter);

            permission = permissionRepository.save(permission);
            permissionIds.add(permission.getId());
        }

        Group group = new Group();
        group.setName("SAMPLE GROUP NAME");
        group.setDescription("SAMPLE GROUP DESCRIPTION");
        group.setExternalId(1L);

        group = groupRepository.save(group);

        assertTrue(group.getPermissions().isEmpty());

        this.mockMvc
                .perform(post(
                        "/group/{groupId}/permissions",
                        group.getId())
                        .content(objectMapper.writeValueAsString(permissionIds))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.id", is(group.getId().intValue())))
                .andExpect(jsonPath("$.name", is(group.getName())))
                .andExpect(jsonPath("$.permissions").exists())
                .andDo(document("groupResource/addPermissions",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("groupId").description("Group's id")
                        ),
                        requestFields(
                                fieldWithPath("[]").description("List of permission IDs")
                        ),
                        responseFields(groupPermissionResponseFields)));
    }

    @Test
    @Transactional
    public void removePermission() throws Exception {
        Permission permission = new Permission();
        permission.setModule("PERMISSION MODULE");
        permission.setAction("PERMISSION ACTION");

        permission = permissionRepository.save(permission);

        Group group = new Group();
        group.setName("SAMPLE GROUP NAME");
        group.setDescription("SAMPLE GROUP DESCRIPTION");
        group.setExternalId(1L);
        group.getPermissions().add(permission);

        group = groupRepository.save(group);

        assertFalse(group.getPermissions().isEmpty());
        assertTrue(group.getPermissions().contains(permission));

        this.mockMvc
                .perform(delete(
                        "/group/{groupId}/permissions/{permissionId}",
                        group.getId(),
                        permission.getId()))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("groupResource/removePermission",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("groupId").description("Group's id"),
                                parameterWithName("permissionId").description("Permission's id")
                        )));

        assertEquals(0, groupRepository.findOneById(group.getId()).getPermissions().size());
    }

    @Test
    @Transactional
    public void removePermissions() throws Exception {
        permissionRepository.deleteAll();

        Group group = new Group();
        group.setName("SAMPLE GROUP NAME");
        group.setDescription("SAMPLE GROUP DESCRIPTION");
        group.setExternalId(1L);

        Integer simulationCount = 5;

        List<Long> permissionIdToRemove = Lists.newArrayList();

        for (Integer counter = 1; counter <= simulationCount; counter++) {
            Permission permission = new Permission();
            permission.setModule("SAMPLE MODULE " + counter);
            permission.setAction("SAMPLE ACTION " + counter);

            permission = permissionRepository.save(permission);
            group
                    .getPermissions()
                    .add(permission);

            if (counter % 2 == 0) {
                permissionIdToRemove.add(permission.getId());
            }
        }

        group = groupRepository.save(group);

        assertFalse(group.getPermissions().isEmpty());
        assertEquals(5, group.getPermissions().size());


        this.mockMvc
                .perform(delete(
                        "/group/{groupId}/permissions",
                        group.getId())
                        .content(objectMapper.writeValueAsString(permissionIdToRemove))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("groupResource/removePermissions",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("groupId").description("Group's id")
                        ),
                        requestFields(
                                fieldWithPath("[]").description("List of permission IDs")
                        )));

        assertEquals(3, groupRepository.findOneById(group.getId()).getPermissions().size());
    }
}
