package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.Application;
import com.beacon.corelate.cms.model.ColorConfig;
import com.beacon.corelate.cms.dto.ColorConfigDto;
import com.beacon.corelate.cms.repository.jpa.ColorConfigRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Lists;
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

import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.put;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.preprocessRequest;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.preprocessResponse;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.prettyPrint;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestFields;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Created by jlava on 9/26/17.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ColorConfigResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private ColorConfigRepository colorConfigRepository;

    private static final FieldDescriptor[] requestHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("headerBackgroundColor").description("Color Config Header Background Color"),
            fieldWithPath("headerTextColor").description("Color Config Header Text Color"),
            fieldWithPath("navigationBackgroundColor").description("Color Config Navigation Background Color"),
            fieldWithPath("navigationTextColor").description("Color Config Navigation Text Color"),
            fieldWithPath("footerBackgroundColor").description("Color Config Footer Background Color"),
            fieldWithPath("footerTextColor").description("Color Config Footer Text Color"),
            fieldWithPath("buttonsPrimaryColor").description("Color Config Buttons Primary Color"),
            fieldWithPath("buttonsPrimaryTextColor").description("Color Config Buttons Primary Text Color"),
            fieldWithPath("buttonsSecondaryColor").description("Color Config Buttons Secondary Color"),
            fieldWithPath("buttonsSecondaryTextColor").description("Color Config Buttons Secondary Text Color"),
            fieldWithPath("createdBy").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("headerBackgroundColor").description("Color Config Header Background Color"),
            fieldWithPath("headerTextColor").description("Color Config Header Text Color"),
            fieldWithPath("navigationBackgroundColor").description("Color Config Navigation Background Color"),
            fieldWithPath("navigationTextColor").description("Color Config Navigation Text Color"),
            fieldWithPath("footerBackgroundColor").description("Color Config Footer Background Color"),
            fieldWithPath("footerTextColor").description("Color Config Footer Text Color"),
            fieldWithPath("buttonsPrimaryColor").description("Color Config Buttons Primary Color"),
            fieldWithPath("buttonsPrimaryTextColor").description("Color Config Buttons Primary Text Color"),
            fieldWithPath("buttonsSecondaryColor").description("Color Config Buttons Secondary Color"),
            fieldWithPath("buttonsSecondaryTextColor").description("Color Config Buttons Secondary Text Color"),
            fieldWithPath("createdBy").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").description("Created Date Time").optional().ignored(),
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
    public void getColorConfig() throws Exception {
        colorConfigRepository.save(createColorConfigEntity());

        this.mockMvc
                .perform(get("/color-config"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.headerBackgroundColor").isNotEmpty())
                .andExpect(jsonPath("$.headerTextColor").isNotEmpty())
                .andExpect(jsonPath("$.navigationBackgroundColor").isNotEmpty())
                .andExpect(jsonPath("$.navigationTextColor").isNotEmpty())
                .andExpect(jsonPath("$.footerBackgroundColor").isNotEmpty())
                .andExpect(jsonPath("$.footerTextColor").isNotEmpty())
                .andExpect(jsonPath("$.buttonsPrimaryColor").isNotEmpty())
                .andExpect(jsonPath("$.buttonsPrimaryTextColor").isNotEmpty())
                .andExpect(jsonPath("$.buttonsSecondaryColor").isNotEmpty())
                .andExpect(jsonPath("$.buttonsSecondaryTextColor").isNotEmpty())
                .andDo(print())
                .andDo(document("colorConfigResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void updateColorConfig() throws Exception {
        ColorConfig colorConfig = colorConfigRepository.save(createColorConfigEntity());

        ColorConfigDto colorConfigDto = createColorConfigDto();
        colorConfigDto.setId(colorConfig.getId());

        this.mockMvc
                .perform(put("/color-config")
                        .content(objectMapper.writeValueAsString(colorConfigDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.headerBackgroundColor").isNotEmpty())
                .andExpect(jsonPath("$.headerTextColor").isNotEmpty())
                .andExpect(jsonPath("$.navigationBackgroundColor").isNotEmpty())
                .andExpect(jsonPath("$.navigationTextColor").isNotEmpty())
                .andExpect(jsonPath("$.footerBackgroundColor").isNotEmpty())
                .andExpect(jsonPath("$.footerTextColor").isNotEmpty())
                .andExpect(jsonPath("$.buttonsPrimaryColor").isNotEmpty())
                .andExpect(jsonPath("$.buttonsPrimaryTextColor").isNotEmpty())
                .andExpect(jsonPath("$.buttonsSecondaryColor").isNotEmpty())
                .andExpect(jsonPath("$.buttonsSecondaryTextColor").isNotEmpty())
                .andDo(print())
                .andDo(document("colorConfigResource/update",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    private ColorConfigDto createColorConfigDto() {
        ColorConfigDto colorConfigDto = new ColorConfigDto();

        colorConfigDto.setHeaderBackgroundColor("#000");
        colorConfigDto.setHeaderTextColor("#000");
        colorConfigDto.setNavigationBackgroundColor("#000");
        colorConfigDto.setNavigationTextColor("#000");
        colorConfigDto.setFooterBackgroundColor("#000");
        colorConfigDto.setFooterTextColor("#000");
        colorConfigDto.setButtonsPrimaryColor("#000");
        colorConfigDto.setButtonsPrimaryTextColor("#000");
        colorConfigDto.setButtonsSecondaryColor("#000");
        colorConfigDto.setButtonsSecondaryTextColor("#000");

        return colorConfigDto;
    }

    private ColorConfig createColorConfigEntity() {
        ColorConfig colorConfig = new ColorConfig();

        colorConfig.setHeaderBackgroundColor("#000");
        colorConfig.setHeaderTextColor("#000");
        colorConfig.setNavigationBackgroundColor("#000");
        colorConfig.setNavigationTextColor("#000");
        colorConfig.setFooterBackgroundColor("#000");
        colorConfig.setFooterTextColor("#000");
        colorConfig.setButtonsPrimaryColor("#000");
        colorConfig.setButtonsPrimaryTextColor("#000");
        colorConfig.setButtonsSecondaryColor("#000");
        colorConfig.setButtonsSecondaryTextColor("#000");

        return colorConfig;
    }
}