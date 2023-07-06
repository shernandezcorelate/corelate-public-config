package com.beacon.corelate.rules.resource;

import com.beacon.corelate.rules.BaseTest;
import com.beacon.corelate.rules.dto.RuleDto;
import com.beacon.corelate.rules.repository.jpa.RulesRepository;
import com.beacon.corelate.rules.resource.dto.RuleUploadResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Sets;
import org.assertj.core.util.Lists;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.restdocs.JUnitRestDocumentation;
import org.springframework.restdocs.payload.FieldDescriptor;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import java.io.InputStream;
import java.math.BigDecimal;
import java.util.List;

import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.documentationConfiguration;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
public class RulesResourceTest extends BaseTest {

    @Rule
    @Autowired
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private RulesRepository rulesRepository;

    private MockMvc mockMvc;

    private static final FieldDescriptor[] requestHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("description").description("Rule Description"),
            fieldWithPath("file").description("Rule File Name"),
            fieldWithPath("createdBy").type("String").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("description").description("Rule Description"),
            fieldWithPath("file").description("Rule File Name"),
            fieldWithPath("createdBy").type("String").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseHeaderFieldList = new FieldDescriptor[]{
            fieldWithPath("results[].id").optional().ignored(),
            fieldWithPath("results[].description").description("Rule Description"),
            fieldWithPath("results[].file").description("Rule File Name"),
            fieldWithPath("results[].createdBy").type("String").description("Created By"),
            fieldWithPath("results[].createdDate").type("ZonedDateTime").description("Created Date Time"),
            fieldWithPath("results[].updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("results[].updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
    };

    @Before
    public void setUp() throws Exception {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.context)
                .apply(documentationConfiguration(this.restDocumentation)).build();
    }

    @Test
    @org.springframework.transaction.annotation.Transactional
    public void createRule() throws Exception {
        InputStream fileStream = ClassLoader.getSystemResourceAsStream("sample.drl");
        MockMultipartFile mockFile = new MockMultipartFile("file", "sample.drl", "", fileStream);
        MvcResult mvcResult = this.mockMvc.perform(fileUpload("/rules/upload").file(mockFile))
                .andExpect(status().isOk())
                .andReturn();

        RuleUploadResponse ruleUploadResponse = objectMapper.readValue(mvcResult.getResponse().getContentAsString(), RuleUploadResponse.class);

        RuleDto ruleDto = new RuleDto();
        ruleDto.setDescription("Sample Description");
        ruleDto.setFile(ruleUploadResponse.getRuleId());

        this.mockMvc
                .perform(post("/rules")
                        .content(objectMapper.writeValueAsString(ruleDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.file", is(ruleDto.getFile())))
                .andExpect(jsonPath("$.description", is(ruleDto.getDescription())))
                .andDo(document("rulesResource/create",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void getRulesList() throws Exception {
        Integer simulationCount = 5;

        for (Integer counter = 0; counter < simulationCount; counter++) {
            com.beacon.corelate.rules.model.Rule rule = new com.beacon.corelate.rules.model.Rule();
            rule.setFile(counter + "abcd");
            rule.setDescription("Sample Rule Description " + counter);

            rulesRepository.save(rule);
        }

        List<FieldDescriptor> responseFields = Lists.newArrayList(responseHeaderFieldList);
        responseFields.add(fieldWithPath("currentPage").description("Current page number"));
        responseFields.add(fieldWithPath("pageSize").description("Current page size"));
        responseFields.add(fieldWithPath("hasNextPage").description("List has another page"));
        responseFields.add(fieldWithPath("totalElements").description("Total List size"));

        this.mockMvc
                .perform(get("/rules")
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.hasNextPage", is(false)))
                .andExpect(jsonPath("$.totalElements").isNotEmpty())
                .andDo(document("rulesResource/list",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestParameters(
                                parameterWithName("page").optional().description("Page number"),
                                parameterWithName("size").optional().description("Page size"),
                                parameterWithName("sort").optional().description("Page sort")
                        ),
                        responseFields(responseFields)));

    }


    @Test
    @Transactional
    public void uploadRule() throws Exception {
        InputStream fileStream = ClassLoader.getSystemResourceAsStream("sample.drl");
        MockMultipartFile mockFile = new MockMultipartFile("file", "sample.drl", "", fileStream);

        com.beacon.corelate.rules.model.Rule rule = new com.beacon.corelate.rules.model.Rule();
        rule.setDescription("Sample Description");
        rule = rulesRepository.save(rule);

        this.mockMvc
                .perform(fileUpload("/rules/upload")
                            .file(mockFile))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.ruleId", is(notNullValue())))
                .andDo(document("rulesResource/uploadRule",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestParts(
                                partWithName("file").description("Rules file to be uploaded")
                        ),
                        responseFields(
                                subsectionWithPath("ruleId").description("Rule ID")
                        )));
    }

    // download rule
    @Test
    @Transactional
    public void downloadRule() throws Exception {
        InputStream fileStream = ClassLoader.getSystemResourceAsStream("sample.drl");
        MockMultipartFile mockFile = new MockMultipartFile("file", "sample.drl", "", fileStream);
        MvcResult mvcResult = this.mockMvc.perform(fileUpload("/rules/upload").file(mockFile))
                .andExpect(status().isOk())
                .andReturn();

        RuleUploadResponse ruleUploadResponse = objectMapper.readValue(mvcResult.getResponse().getContentAsString(), RuleUploadResponse.class);

        this.mockMvc.perform(get("/rules/download/{uid}", ruleUploadResponse.getRuleId()))
                .andExpect(status().isOk())
                .andDo(document("rulesResource/downloadRule",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("uid").description("Rule filename identifier")
                        )));
    }
}
