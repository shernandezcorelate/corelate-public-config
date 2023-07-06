package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.Application;
import com.beacon.corelate.cms.dto.SimpleLayoutDto;
import com.beacon.corelate.cms.model.SimpleLayout;
import com.beacon.corelate.cms.repository.jpa.SimpleLayoutRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
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

import static org.hamcrest.Matchers.is;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.preprocessRequest;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.preprocessResponse;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.prettyPrint;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestFields;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Created by jlava on 9/15/17.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SimpleLayoutResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private SimpleLayoutRepository simpleLayoutRepository;

    public static final FieldDescriptor[] requestHeaderFields = new FieldDescriptor[] {
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("heading").description("Simple Layout heading"),
            fieldWithPath("content").description("Simple Layout heading"),
            fieldWithPath("createdBy").description("Simple Layout Created By").optional().ignored(),
            fieldWithPath("createdDate").description("Simple Layout Created Date").optional().ignored(),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
    };

    public static final FieldDescriptor[] responseHeaderFields = new FieldDescriptor[] {
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("heading").description("Simple Layout heading"),
            fieldWithPath("content").description("Simple Layout heading"),
            fieldWithPath("createdBy").description("Simple Layout Created By").optional().ignored(),
            fieldWithPath("createdDate").description("Simple Layout Created Date").optional().ignored(),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
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
    @Transactional(readOnly = true)
    public void getSimpleLayout() throws Exception {
        SimpleLayout simpleLayout = simpleLayoutRepository.save(createSimpleLayoutEntity());

        this.mockMvc
                .perform(get("/simple-layout", simpleLayout.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.heading", is(simpleLayout.getHeading())))
                .andExpect(jsonPath("$.content", is(simpleLayout.getContent())))
                .andDo(print())
                .andDo(document("simpleLayoutResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void updateSimpleLayout() throws Exception {
        SimpleLayout simpleLayout = simpleLayoutRepository.save(createSimpleLayoutEntity());

        SimpleLayoutDto simpleLayoutDto = createSimpleLayoutDto();
        simpleLayoutDto.setId(simpleLayout.getId());
        simpleLayoutDto.setHeading("New Heading");

        this.mockMvc
                .perform(put("/simple-layout", simpleLayout.getId())
                        .content(objectMapper.writeValueAsString(simpleLayoutDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.heading", is(simpleLayoutDto.getHeading())))
                .andExpect(jsonPath("$.content", is(simpleLayoutDto.getContent())))
                .andDo(print())
                .andDo(document("simpleLayoutResource/update",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    private SimpleLayoutDto createSimpleLayoutDto() {
        SimpleLayoutDto simpleLayoutDto = new SimpleLayoutDto();
        simpleLayoutDto.setHeading("Sample Heading");
        simpleLayoutDto.setContent("Sample Content");

        return simpleLayoutDto;
    }

    private SimpleLayout createSimpleLayoutEntity() {
        SimpleLayout simpleLayout = new SimpleLayout();
        simpleLayout.setHeading("Sample Heading");
        simpleLayout.setContent("Sample Content");

        return simpleLayout;
    }
}