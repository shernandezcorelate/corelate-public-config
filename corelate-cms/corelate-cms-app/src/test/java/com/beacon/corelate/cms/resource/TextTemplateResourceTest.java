package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.Application;
import com.beacon.corelate.cms.dto.TextTemplateDto;
import com.beacon.corelate.cms.model.TextTemplate;
import com.beacon.corelate.cms.repository.jpa.TextTemplateRepository;
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
public class TextTemplateResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private TextTemplateRepository textTemplateRepository;

    @Before
    public void setUp() {
        this.mockMvc =
                MockMvcBuilders
                        .webAppContextSetup(this.context)
                        .apply(MockMvcRestDocumentation.documentationConfiguration(this.restDocumentation))
                        .build();
    }

    private static final FieldDescriptor[] textTemplateRequestFields = new FieldDescriptor[]{
            fieldWithPath("key").description("Text Template Key"),
            fieldWithPath("template").description("Text Template")
    };

    private static final FieldDescriptor[] textTemplateResponseFields = new FieldDescriptor[]{
            fieldWithPath("id").description("Text Template ID").optional(),
            fieldWithPath("key").description("Text Template Key"),
            fieldWithPath("template").description("Text Template"),
            fieldWithPath("createdBy").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] textTemplateListResponseFields = new FieldDescriptor[]{
            fieldWithPath("results[].id").description("Text Template ID").optional(),
            fieldWithPath("results[].key").description("Text Template Key"),
            fieldWithPath("results[].template").description("Text Template"),
            fieldWithPath("results[].createdBy").description("Created By").optional().ignored(),
            fieldWithPath("results[].createdDate").description("Created Date Time").optional().ignored(),
            fieldWithPath("results[].updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("results[].updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
    };

    @Test
    @Transactional
    public void createTextTemplate() throws Exception {
        TextTemplateDto textTemplateDto = new TextTemplateDto();
        textTemplateDto.setKey("TEXT_TEMPLATE_KEY");
        textTemplateDto.setTemplate("Hello {{username}}");

        this.mockMvc
                .perform(post("/text-template")
                        .content(objectMapper.writeValueAsString(textTemplateDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.id").exists())
                .andExpect(jsonPath("$.key", is(textTemplateDto.getKey())))
                .andExpect(jsonPath("$.template", is(textTemplateDto.getTemplate())))
                .andDo(document("textTemplateResource/create",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(textTemplateRequestFields),
                        responseFields(textTemplateResponseFields)));

    }

    @Test
    @Transactional
    public void updateTextTemplate() throws Exception {
        TextTemplate textTemplate = new TextTemplate();
        textTemplate.setKey("KEY");
        textTemplate.setTemplate("TEMPLATE");

        textTemplate = textTemplateRepository.save(textTemplate);

        TextTemplateDto textTemplateDto = new TextTemplateDto();
        textTemplateDto.setKey("UPDATE KEY");
        textTemplateDto.setTemplate("UPDATE TEMPLATE");

        this.mockMvc
                .perform(put("/text-template/{textTemplateId}", textTemplate.getId())
                        .content(objectMapper.writeValueAsString(textTemplateDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.id").exists())
                .andExpect(jsonPath("$.key", is(textTemplateDto.getKey())))
                .andExpect(jsonPath("$.template", is(textTemplateDto.getTemplate())))
                .andDo(document("textTemplateResource/update",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("textTemplateId").description("Text Template ID")
                        ),
                        requestFields(textTemplateRequestFields),
                        responseFields(textTemplateResponseFields)));

        assertNotNull(textTemplateRepository.findOne(textTemplate.getId()));
        assertEquals(textTemplateDto.getKey(), textTemplateRepository.findOne(textTemplate.getId()).getKey());
        assertEquals(textTemplateDto.getTemplate(), textTemplateRepository.findOne(textTemplate.getId()).getTemplate());
    }

    @Test
    @Transactional
    public void getTextTemplate() throws Exception {
        TextTemplate textTemplate = new TextTemplate();
        textTemplate.setKey("TEMPLATE KEY");
        textTemplate.setTemplate("TEMPLATE");

        textTemplate = textTemplateRepository.save(textTemplate);

        this.mockMvc
                .perform(get("/text-template/{textTemplateId}", textTemplate.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.id", is(textTemplate.getId().intValue())))
                .andExpect(jsonPath("$.key", is(textTemplate.getKey())))
                .andExpect(jsonPath("$.template", is(textTemplate.getTemplate())))
                .andDo(document("textTemplateResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("textTemplateId").description("Text Template ID")
                        ),
                        responseFields(textTemplateResponseFields)));

    }

    @Test
    @Transactional
    public void getTextTemplateList() throws Exception {
        textTemplateRepository.deleteAll();

        Integer simulationCount = 5;

        for (Integer counter = 0; counter < simulationCount; counter++) {
            TextTemplate textTemplate = new TextTemplate();
            textTemplate.setKey("TEMPLATE KEY " + counter);
            textTemplate.setTemplate("TEMPLATE " + counter);

            textTemplateRepository.save(textTemplate);
        }

        List<FieldDescriptor> responseFields = Lists.newArrayList(textTemplateListResponseFields);
        responseFields.add(fieldWithPath("currentPage").description("Current page number"));
        responseFields.add(fieldWithPath("pageSize").description("Current page size"));
        responseFields.add(fieldWithPath("hasNextPage").description("List has another page"));
        responseFields.add(fieldWithPath("totalElements").description("Total List size"));

        this.mockMvc
                .perform(get("/text-template?page=0&size=10&sort=id")
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.hasNextPage", is(false)))
                .andExpect(jsonPath("$.totalElements", is(simulationCount)))
                .andDo(document("textTemplateResource/list",
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
    public void deleteTextTemplate() throws Exception {
        TextTemplate textTemplate = new TextTemplate();
        textTemplate.setKey("TEMPLATE KEY");
        textTemplate.setKey("TEMPLATE");

        textTemplate = textTemplateRepository.save(textTemplate);

        this.mockMvc
                .perform(delete("/text-template/{id}", textTemplate.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("textTemplateResource/delete",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Text Template ID")
                        )
                ));

        assertEquals(Boolean.TRUE, textTemplateRepository.findOneById(textTemplate.getId()).getDeleted());
    }
}
