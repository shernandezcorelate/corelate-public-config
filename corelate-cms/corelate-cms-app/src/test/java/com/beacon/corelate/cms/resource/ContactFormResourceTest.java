package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.Application;
import com.beacon.corelate.cms.dto.ContactFormDto;
import com.beacon.corelate.cms.model.ContactForm;
import com.beacon.corelate.cms.repository.jpa.ContactFormRepository;
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
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
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
 * Created by jlava on 9/13/17.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ContactFormResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private ContactFormRepository contactFormRepository;

    private static final FieldDescriptor[] requestHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("name").description("Contact Form name"),
            fieldWithPath("email").description("Contact Form email"),
            fieldWithPath("subject").description("Contact Form subject"),
            fieldWithPath("message").description("Contact Form message"),
            fieldWithPath("createdBy").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("name").description("Contact Form name"),
            fieldWithPath("email").description("Contact Form email"),
            fieldWithPath("subject").description("Contact Form subject"),
            fieldWithPath("message").description("Contact Form message"),
            fieldWithPath("createdBy").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseEntityHeaderFields = new FieldDescriptor[] {
            fieldWithPath("hasNextPage").description("Has next page flag"),
            fieldWithPath("totalElements").description("Total elements"),
            fieldWithPath("results").description("Result list"),
            fieldWithPath("results[].id").optional().ignored(),
            fieldWithPath("results[].name").description("Contact Form name"),
            fieldWithPath("results[].email").description("Contact Form email"),
            fieldWithPath("results[].subject").description("Contact Form subject"),
            fieldWithPath("results[].message").description("Contact Form message"),
            fieldWithPath("results[].createdBy").description("Contact Form created by"),
            fieldWithPath("results[].createdDate").description("Contact Form created date"),
            fieldWithPath("results[].updatedBy").description("Contact Form updated by").optional().ignored(),
            fieldWithPath("results[].updatedDate").description("Contact Form updated date").optional().ignored(),
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
    public void createContactForm() throws Exception {
        ContactFormDto contactFormDto = createContactFormDto();
        this.mockMvc
                .perform(post("/contact-form")
                        .content(objectMapper.writeValueAsString(contactFormDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.name", is(contactFormDto.getName())))
                .andExpect(jsonPath("$.email", is(contactFormDto.getEmail())))
                .andExpect(jsonPath("$.subject", is(contactFormDto.getSubject())))
                .andExpect(jsonPath("$.message", is(contactFormDto.getMessage())))
                .andDo(document("contactFormResource/create",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional(readOnly = true)
    public void getListContactForm() throws Exception {
        ContactForm contactForm1 = createContactFormEntity();
        ContactForm contactForm2 = createContactFormEntity();
        contactForm2.setSubject("Another Contact Form Subject");
        contactForm2.setMessage("Another Contact Form Message");
        contactFormRepository.save(Lists.newArrayList(contactForm1, contactForm2));

        this.mockMvc
                .perform(get("/contact-form"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.totalElements", is(2)))
                .andDo(print())
                .andDo(document("contactFormResource/getList",
                        preprocessResponse(prettyPrint()),
                        responseFields(responseEntityHeaderFields)));
    }

    @Test
     @Transactional(readOnly = true)
     public void getContactForm() throws Exception {
        ContactForm contactForm = contactFormRepository.save(createContactFormEntity());
        this.mockMvc
                .perform(get("/contact-form/{id}", contactForm.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is(contactForm.getName())))
                .andExpect(jsonPath("$.email", is(contactForm.getEmail())))
                .andExpect(jsonPath("$.subject", is(contactForm.getSubject())))
                .andExpect(jsonPath("$.message", is(contactForm.getMessage())))
                .andDo(print())
                .andDo(document("contactFormResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Contact Form id")
                        ),
                        responseFields(responseHeaderFields)));
    }

    private ContactFormDto createContactFormDto() {
        ContactFormDto contactFormDto = new ContactFormDto();
        contactFormDto.setName("CONTACT FORM NAME");
        contactFormDto.setEmail("contact@email.com");
        contactFormDto.setSubject("CONTACT FORM SUBJECT");
        contactFormDto.setMessage("CONTACT FORM MESSAGE");

        return contactFormDto;
    }

    private ContactForm createContactFormEntity() {
        ContactForm contactForm = new ContactForm();
        contactForm.setName("CONTACT FORM NAME");
        contactForm.setEmail("contact@email.com");
        contactForm.setSubject("CONTACT FORM SUBJECT");
        contactForm.setMessage("CONTACT FORM MESSAGE");

        return contactForm;
    }
}
