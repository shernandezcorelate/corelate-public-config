package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.Application;
import com.beacon.corelate.cms.dto.FaqDto;
import com.beacon.corelate.cms.model.Faq;
import com.beacon.corelate.cms.repository.jpa.FaqRepository;
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

import java.time.ZoneId;

import static org.hamcrest.Matchers.is;
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
 * Created by epadolina on 7/31/17.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class FaqResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private FaqRepository faqRepository;

    private static final FieldDescriptor[] requestHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("question").description("Faq question"),
            fieldWithPath("answer").description("Faq answer"),
            fieldWithPath("position").description("Faq position"),
            fieldWithPath("author").description("Faq author"),
            fieldWithPath("published").description("Faq published flag"),
            fieldWithPath("createdBy").type("String").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("question").description("Faq question"),
            fieldWithPath("answer").description("Faq answer"),
            fieldWithPath("position").description("Faq position"),
            fieldWithPath("author").description("Faq author"),
            fieldWithPath("published").description("Faq published flag"),
            fieldWithPath("file").type("String").description("Faq file filename").optional(),
            fieldWithPath("files").type("Array").description("Faq files filename").optional(),
            fieldWithPath("createdBy").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseEntityHeaderFields = new FieldDescriptor[]{
            fieldWithPath("hasNextPage").description("Has next page flag"),
            fieldWithPath("totalElements").description("Total elements"),
            fieldWithPath("results").description("Result list"),
            fieldWithPath("results[].id").optional().ignored(),
            fieldWithPath("results[].question").description("Faq question label"),
            fieldWithPath("results[].answer").description("Faq answer label"),
            fieldWithPath("results[].author").description("Faq author"),
            fieldWithPath("results[].position").description("Faq position"),
            fieldWithPath("results[].published").description("Faq published flag"),
            fieldWithPath("results[].file").type("String").description("Faq file filename").optional(),
            fieldWithPath("results[].files").type("Array").description("Faq files filename").optional(),
            fieldWithPath("results[].createdBy").description("Created By").optional().ignored(),
            fieldWithPath("results[].createdDate").description("Created Date Time").optional().ignored(),
            fieldWithPath("results[].updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("results[].updatedDate").description("Updated Date Time").optional().ignored(),
            fieldWithPath("currentPage").description("Current page"),
            fieldWithPath("pageSize").description("Page size")
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
    public void createFaq() throws Exception {
        FaqDto faqDto = createFaqDto();
        this.mockMvc
                .perform(post("/faq")
                        .content(objectMapper.writeValueAsString(faqDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.question", is(faqDto.getQuestion())))
                .andExpect(jsonPath("$.answer", is(faqDto.getAnswer())))
                .andExpect(jsonPath("$.position", is(faqDto.getPosition())))
                .andExpect(jsonPath("$.published", is(faqDto.getPublished())))
                .andDo(document("faqResource/create",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional(readOnly = true)
    public void getListFaq() throws Exception {
        Faq faq1 = createFaqEntity();
        Faq faq2 = createFaqEntity();
        faq2.setQuestion("What is the square root of 4?");
        faq2.setAnswer("2");
        faqRepository.save(Lists.newArrayList(faq1, faq2));

        this.mockMvc
                .perform(get("/faq")
                        .param("page", "0")
                        .param("size", "20")
                        .param("sort", "ASC"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.totalElements", is(2)))
                .andDo(print())
                .andDo(document("faqResource/getList",
                        preprocessResponse(prettyPrint()),
                        requestParameters(
                                parameterWithName("page").description("Page number"),
                                parameterWithName("size").description("Page size"),
                                parameterWithName("sort").description("Sort option")
                        ),
                        responseFields(responseEntityHeaderFields)));
    }

    @Test
    @Transactional(readOnly = true)
    public void getPublishedFaq() throws Exception {
        Faq faq1 = createFaqEntity();
        faq1.setDeleted(Boolean.TRUE);
        Faq faq2 = createFaqEntity();
        faq2.setDeleted(Boolean.FALSE);
        faq2.setQuestion("What is the square root of 4?");
        faq2.setAnswer("2");
        faqRepository.save(Lists.newArrayList(faq1, faq2));

        this.mockMvc
                .perform(get("/faq/published")
                        .param("page", "0")
                        .param("size", "20")
                        .param("sort", "ASC"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.totalElements", is(1)))
                .andExpect(jsonPath("$.results[0].question", is(faq2.getQuestion())))
                .andExpect(jsonPath("$.results[0].answer", is(faq2.getAnswer())))
                .andDo(print())
                .andDo(document("faqResource/getPublishedFaq",
                        preprocessResponse(prettyPrint()),
                        requestParameters(
                                parameterWithName("page").description("Page number"),
                                parameterWithName("size").description("Page size"),
                                parameterWithName("sort").description("Sort option")
                        ),
                        responseFields(responseEntityHeaderFields)));
    }

    @Test
    @Transactional(readOnly = true)
    public void getFaq() throws Exception {
        Faq faq = faqRepository.save(createFaqEntity());
        this.mockMvc
                .perform(get("/faq/{id}", faq.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.question", is(faq.getQuestion())))
                .andExpect(jsonPath("$.answer", is(faq.getAnswer())))
                .andExpect(jsonPath("$.position", is(faq.getPosition())))
                .andExpect(jsonPath("$.published", is(faq.getPublished())))
                .andDo(print())
                .andDo(document("faqResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Faq id")
                        ),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void updateFaq() throws Exception {
        Faq faq = faqRepository.save(createFaqEntity());

        FaqDto faqDto = createFaqDto();
        faqDto.setId(faq.getId());
        faqDto.setCreatedBy(faq.getCreatedBy());
        faqDto.setCreatedDate(faq.getCreatedDate().atZone(ZoneId.systemDefault()));

        this.mockMvc
                .perform(put("/faq/{id}", faq.getId())
                        .content(objectMapper.writeValueAsString(faqDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.question", is(faqDto.getQuestion())))
                .andExpect(jsonPath("$.answer", is(faqDto.getAnswer())))
                .andExpect(jsonPath("$.position", is(faqDto.getPosition())))
                .andExpect(jsonPath("$.published", is(faqDto.getPublished())))
                .andDo(print())
                .andDo(document("faqResource/update",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Faq id")
                        ),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void deleteFaq() throws Exception {
        Faq faq = faqRepository.save(createFaqEntity());
        this.mockMvc
                .perform(delete("/faq/{id}", faq.getId()))
                .andDo(print())
                .andDo(document("faqResource/delete",
                        preprocessRequest(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Faq id")
                        )));
    }

    @Test
    @Transactional
    public void publish() throws Exception {
        Faq faq = createFaqEntity();
        faq.setPublished(Boolean.FALSE);

        faq = faqRepository.save(faq);

        this.mockMvc
                .perform(put("/faq/{id}/publish", faq.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("faqResource/publish",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Faq ID")
                        ),
                        responseFields(responseHeaderFields)
                ));

        assertTrue(faqRepository.findOneById(faq.getId()).getPublished());
    }

    @Test
    @Transactional
    public void unpublish() throws Exception {
        Faq faq = createFaqEntity();
        faq.setPublished(Boolean.TRUE);

        faq = faqRepository.save(faq);

        this.mockMvc
                .perform(put("/faq/{id}/unpublish", faq.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("faqResource/unpublish",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Faq ID")
                        ),
                        responseFields(responseHeaderFields)
                ));

        assertFalse(faqRepository.findOneById(faq.getId()).getPublished());
    }


    private FaqDto createFaqDto() {
        FaqDto faqDto = new FaqDto();
        faqDto.setQuestion("What is the sqaure root of 25?");
        faqDto.setAnswer("5");
        faqDto.setPosition(1);
        faqDto.setAuthor("SYSTEM");
        faqDto.setPublished(Boolean.TRUE);
        return faqDto;
    }

    private Faq createFaqEntity() {
        Faq faq = new Faq();
        faq.setQuestion("What is the sqaure root of 36?");
        faq.setAuthor("SYSTEM");
        faq.setAnswer("6");
        faq.setPosition(1);
        faq.setPublished(Boolean.TRUE);
        return faq;
    }
}
