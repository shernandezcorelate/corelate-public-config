package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.Application;
import com.beacon.corelate.cms.dto.ContactInfoDto;
import com.beacon.corelate.cms.dto.ContactDetailsDto;
import com.beacon.corelate.cms.repository.jpa.ContactInfoRepository;
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

import static org.hamcrest.Matchers.is;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.restdocs.request.RequestDocumentation.requestParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Created by jlava on 9/12/17.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ContactInfoResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private ContactInfoRepository contactInfoRepository;

    public static final FieldDescriptor[] requestHeaderFields = new FieldDescriptor[] {
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("address").description("Contact Information address"),
            fieldWithPath("contactDetails").type("Array").description("Contact Information contact details list"),
            fieldWithPath("contactDetails[].id").description("Contact details id").optional().ignored(),
            fieldWithPath("contactDetails[].contactType").description("Contact details contact type"),
            fieldWithPath("contactDetails[].contactDetails").description("Contact details number"),
            fieldWithPath("contactDetails[].createdBy").description("Contact details created by").optional().ignored(),
            fieldWithPath("contactDetails[].createdDate").description("Contact details created date").optional().ignored(),
            fieldWithPath("contactDetails[].updatedBy").description("Contact details updated by").optional().ignored(),
            fieldWithPath("contactDetails[].updatedDate").description("Contact details updated date").optional().ignored(),
            fieldWithPath("longitude").description("Contact Information longitude"),
            fieldWithPath("latitude").description("Contact Information latitude"),
            fieldWithPath("createdBy").type("String").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").description("Updated Date Time").optional().ignored()
    };

    public static final FieldDescriptor[] responseHeaderFields = new FieldDescriptor[] {
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("address").description("Contact Information address"),
            fieldWithPath("contactDetails").type("Array").description("Contact Information contact details list"),
            fieldWithPath("contactDetails[].id").description("Contact details id").optional().ignored(),
            fieldWithPath("contactDetails[].contactType").description("Contact details contact type"),
            fieldWithPath("contactDetails[].contactDetails").description("Contact details number"),
            fieldWithPath("contactDetails[].createdBy").description("Contact details created by").optional().ignored(),
            fieldWithPath("contactDetails[].createdDate").description("Contact details created date").optional().ignored(),
            fieldWithPath("contactDetails[].updatedBy").description("Contact details updated by").optional().ignored(),
            fieldWithPath("contactDetails[].updatedDate").description("Contact details updated date").optional().ignored(),
            fieldWithPath("longitude").description("Contact Information longitude"),
            fieldWithPath("latitude").description("Contact Information latitude"),
            fieldWithPath("createdBy").type("String").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").description("Updated Date Time").optional().ignored()
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
    public void getContactInfo() throws Exception {
        this.mockMvc
                .perform(get("/contact-info"))
                .andExpect(status().isOk())
                .andDo(print())
                .andDo(document("contactInfoResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void updateContactInfo() throws Exception {
        ContactDetailsDto contactDetailsDto = new ContactDetailsDto();
        contactDetailsDto.setContactType("Email");
        contactDetailsDto.setContactDetails("admin@isv.corelate.net");

        ContactInfoDto contactInfoDto = createContactInfoDto();
        contactInfoDto.setAddress("New Address");
        contactInfoDto.getContactDetails().add(contactDetailsDto);

        this.mockMvc
                .perform(put("/contact-info")
                        .content(objectMapper.writeValueAsString(contactInfoDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.address", is(contactInfoDto.getAddress())))
                .andExpect(jsonPath("$.contactDetails").isNotEmpty())
                .andExpect(jsonPath("$.longitude", is(contactInfoDto.getLongitude())))
                .andExpect(jsonPath("$.latitude", is(contactInfoDto.getLatitude())))
                .andDo(print())
                .andDo(document("contactInfoResource/update",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    private ContactInfoDto createContactInfoDto() {
        ContactDetailsDto contactDetailsDto = new ContactDetailsDto();
        contactDetailsDto.setContactType("Mobile No.");
        contactDetailsDto.setContactDetails("+639234567890");

        ContactInfoDto contactInfoDto = new ContactInfoDto();
        contactInfoDto.setAddress("314 Corporate 101 Mother Ignacia Ave., QC");
        contactInfoDto.setContactDetails(Lists.newArrayList(contactDetailsDto));
        contactInfoDto.setLongitude("121.055641");
        contactInfoDto.setLatitude("14.587580");

        return contactInfoDto;
    }
}
