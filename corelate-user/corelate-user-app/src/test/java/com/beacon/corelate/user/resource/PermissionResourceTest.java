package com.beacon.corelate.user.resource;

import com.beacon.corelate.commons.data.dto.PermissionDto;
import com.beacon.corelate.commons.data.model.Permission;
import com.beacon.corelate.user.Application;
import com.beacon.corelate.user.repository.jpa.PermissionRepository;
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
import static org.junit.Assert.assertNotNull;
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
public class PermissionResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private PermissionRepository permissionRepository;

    @Before
    public void setUp() {
        this.mockMvc =
                MockMvcBuilders
                        .webAppContextSetup(this.context)
                        .apply(MockMvcRestDocumentation.documentationConfiguration(this.restDocumentation))
                        .build();
    }

    private static final FieldDescriptor[] permissionRequestFields = new FieldDescriptor[]{
            fieldWithPath("module").description("Permission module"),
            fieldWithPath("action").description("Permission name")
    };

    private static final FieldDescriptor[] permissionResponseFields = new FieldDescriptor[]{
            fieldWithPath("id").description("Permission id").optional().ignored(),
            fieldWithPath("module").description("Permission module"),
            fieldWithPath("action").description("Permission name"),
            fieldWithPath("createdBy").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] permissionListResponseFields = new FieldDescriptor[]{
            fieldWithPath("results[].id").description("Permission id").optional().ignored(),
            fieldWithPath("results[].module").description("Permission module"),
            fieldWithPath("results[].action").description("Permission name"),
            fieldWithPath("results[].createdBy").description("Created By").optional().ignored(),
            fieldWithPath("results[].createdDate").description("Created Date Time").optional().ignored(),
            fieldWithPath("results[].updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("results[].updatedDate").description("Updated Date Time").optional().ignored()
    };

    @Test
    @Transactional
    public void createPermission() throws Exception {
        PermissionDto permissionDto = new PermissionDto();
        permissionDto.setModule("SAMPLE MODULE");
        permissionDto.setAction("SAMPLE NAME");

        this.mockMvc
                .perform(post("/permission")
                        .content(objectMapper.writeValueAsString(permissionDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isMethodNotAllowed());
    }

    @Test
    @Transactional
    public void updatePermission() throws Exception {
        Permission permission = new Permission();
        permission.setModule("SAMPLE MODULE");
        permission.setAction("SAMPLE NAME");

        permission = permissionRepository.save(permission);

        PermissionDto updatePermission = new PermissionDto();
        updatePermission.setModule("UPDATED PERMISSION");
        updatePermission.setAction("UPDATED NAME");

        this.mockMvc
                .perform(put("/permission/{permissionId}", permission.getId())
                        .content(objectMapper.writeValueAsString(updatePermission))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.id").exists())
                .andExpect(jsonPath("$.module", is(permission.getModule())))
                .andExpect(jsonPath("$.action", is(permission.getAction())))
                .andDo(document("permissionResource/update",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("permissionId").description("Permission's id")
                        ),
                        requestFields(permissionRequestFields),
                        responseFields(permissionResponseFields)));

        assertNotNull(permissionRepository.findOne(permission.getId()));
    }

    @Test
    @Transactional
    public void getPermission() throws Exception {
        Permission permission = new Permission();
        permission.setModule("SAMPLE MODULE");
        permission.setAction("SAMPLE ACTION");

        permission = permissionRepository.save(permission);

        this.mockMvc
                .perform(get("/permission/{permissionId}", permission.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.id", is(permission.getId().intValue())))
                .andExpect(jsonPath("$.module", is(permission.getModule())))
                .andExpect(jsonPath("$.action", is(permission.getAction())))
                .andDo(document("permissionResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("permissionId").description("Permission's ID")
                        ),
                        responseFields(permissionResponseFields)));

    }

    @Test
    @Transactional
    public void getPermissionList() throws Exception {
        Integer simulationCount = 5;

        for (Integer counter = 0; counter < simulationCount; counter++) {
            Permission permission = new Permission();
            permission.setModule("SAMPLE MODULE " + counter);
            permission.setAction("SAMPLE NAME " + counter);

            permissionRepository.save(permission);
        }

        List<FieldDescriptor> responseFields = Lists.newArrayList(permissionListResponseFields);
        responseFields.add(fieldWithPath("currentPage").description("Current page number"));
        responseFields.add(fieldWithPath("pageSize").description("Current page size"));
        responseFields.add(fieldWithPath("hasNextPage").description("List has another page"));
        responseFields.add(fieldWithPath("totalElements").description("Total List size"));

        this.mockMvc
                .perform(get("/permission?page=0&size=10&sort=id")
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.hasNextPage", is(false)))
                .andExpect(jsonPath("$.totalElements", is(simulationCount)))
                .andDo(document("permissionResource/list",
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
    public void deletePermission() throws Exception {
        Permission permission = new Permission();
        permission.setModule("SAMPLE MODULE");
        permission.setAction("SAMPLE NAME");

        permission = permissionRepository.save(permission);

        this.mockMvc
                .perform(delete("/permission/{id}", permission.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("permissionResource/delete",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Permission's ID")
                        )
                ));

        assertEquals(Boolean.TRUE, permissionRepository.findOneById(permission.getId()).getDeleted());
    }
}
