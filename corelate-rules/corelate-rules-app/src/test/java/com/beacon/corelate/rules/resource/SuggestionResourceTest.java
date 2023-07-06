package com.beacon.corelate.rules.resource;

import com.beacon.corelate.rules.BaseTest;
import com.beacon.corelate.rules.dto.RuleDto;
import com.beacon.corelate.rules.resource.dto.RuleUploadResponse;
import com.beacon.corelate.rules.resource.dto.SuggestionRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.restdocs.JUnitRestDocumentation;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import javax.ws.rs.core.MediaType;
import java.io.InputStream;
import java.util.HashMap;

import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.documentationConfiguration;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.fileUpload;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
public class SuggestionResourceTest extends BaseTest {

    @Rule
    @Autowired
    public JUnitRestDocumentation restDocumentation;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private WebApplicationContext context;

    private MockMvc mockMvc;

    @Before
    public void setUp() throws Exception {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.context)
                .apply(documentationConfiguration(this.restDocumentation)).build();
    }

    @Test
    @Ignore
    public void evaluateRatings() throws Exception {
        InputStream fileStream = ClassLoader.getSystemResourceAsStream("sample.drl");
        MockMultipartFile mockFile = new MockMultipartFile("file", "sample.drl", "", fileStream);
        MvcResult mvcResult = this.mockMvc.perform(fileUpload("/rules/upload").file(mockFile))
                .andExpect(status().isOk())
                .andReturn();

        RuleUploadResponse ruleUploadResponse = objectMapper.readValue(mvcResult.getResponse().getContentAsString(), RuleUploadResponse.class);

        SuggestionRequest request = new SuggestionRequest();
        request.setRuleId(ruleUploadResponse.getRuleId());
        request.setRatings(new HashMap<String, Integer>() {
            {
                put("math", 9);
                put("software", 9);
                put("electronics", 3);
                put("physics", 9);
                put("arts", 9);
                put("social_studies", 6);
            }
        });

        this.mockMvc.perform(post("/suggestions/evaluate")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andDo(print()).andExpect(status().isOk())
                .andDo(document("suggestions-evaluate",
                        requestFields(
                                fieldWithPath("ruleId").description("Rule ID of the rule file that will evaluate the payload"),
                                subsectionWithPath("ratings").description("Payload that will be evaluated")),
                        responseFields(
                                fieldWithPath("suggestions").type(JsonFieldType.ARRAY).description("List of subject suggestions -- evaluated from the ratings payload")
                        )
                ));

    }

}