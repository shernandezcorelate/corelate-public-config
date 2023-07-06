package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.Application;
import com.beacon.corelate.cms.dto.FooterDto;
import com.beacon.corelate.cms.dto.FooterPanelDto;
import com.beacon.corelate.cms.dto.FooterPanelLinkDto;
import com.beacon.corelate.cms.model.Footer;
import com.beacon.corelate.cms.repository.jpa.FooterRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Lists;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
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
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.fileUpload;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.put;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.preprocessRequest;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.preprocessResponse;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.prettyPrint;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
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
public class FooterResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private FooterRepository footerRepository;

    private static final FieldDescriptor[] requestHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("description").description("Footer description"),
            fieldWithPath("copyright").description("Footer copyright"),
            fieldWithPath("panels").description("Footer panels"),
            fieldWithPath("panels[].id").optional().ignored(),
            fieldWithPath("panels[].footerId").optional().ignored(),
            fieldWithPath("panels[].index").description("Footer panel index (used for sorting)"),
            fieldWithPath("panels[].name").description("Footer panel name"),
            fieldWithPath("panels[].links").description("Footer panel links"),
            fieldWithPath("panels[].links[]").description("Footer panel links"),
            fieldWithPath("panels[].links[].name").description("Footer panel link name"),
            fieldWithPath("panels[].links[].symlink").description("Footer panel link symLink"),
            fieldWithPath("panels[].createdBy").description("Footer Panel Created By").optional().ignored(),
            fieldWithPath("panels[].createdDate").description("Footer Panel Created Date Time").optional().ignored(),
            fieldWithPath("panels[].updatedBy").description("Footer Panel Updated By").optional().ignored(),
            fieldWithPath("panels[].updatedDate").description("Footer Panel Updated Date Time").optional().ignored(),
            fieldWithPath("createdBy").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("description").description("Footer description"),
            fieldWithPath("copyright").description("Footer copyright"),
            fieldWithPath("file").type("String").description("Footer file filename").optional(),
            fieldWithPath("files").type("Array").description("Footer files filename").optional(),
            fieldWithPath("panels").description("Footer panels"),
            fieldWithPath("panels[].id").optional().ignored(),
            fieldWithPath("panels[].footerId").optional().ignored(),
            fieldWithPath("panels[].index").description("Footer panel index (used for sorting)"),
            fieldWithPath("panels[].name").description("Footer panel name"),
            fieldWithPath("panels[].links").description("Footer panel links"),
            fieldWithPath("panels[].links[]").description("Footer panel links"),
            fieldWithPath("panels[].links[].name").description("Footer panel link name"),
            fieldWithPath("panels[].links[].symlink").description("Footer panel link symLink"),
            fieldWithPath("panels[].createdBy").description("Footer Panel Created By").optional().ignored(),
            fieldWithPath("panels[].createdDate").description("Footer Panel Created Date Time").optional().ignored(),
            fieldWithPath("panels[].updatedBy").description("Footer Panel Updated By").optional().ignored(),
            fieldWithPath("panels[].updatedDate").description("Footer Panel Updated Date Time").optional().ignored(),
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
    public void getFooter() throws Exception {
        this.mockMvc
                .perform(get("/footer"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.description").isNotEmpty())
                .andExpect(jsonPath("$.copyright").isNotEmpty())
                .andExpect(jsonPath("$.panels[0].name").isNotEmpty())
                .andExpect(jsonPath("$.panels[0].links[0].name").isNotEmpty())
                .andExpect(jsonPath("$.panels[0].links[0].symlink").isNotEmpty())
                .andDo(print())
                .andDo(document("footerResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void updateFooter() throws Exception {
        FooterDto footerDto = createFooterDto();

        this.mockMvc
                .perform(put("/footer")
                        .content(objectMapper.writeValueAsString(footerDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.description").isNotEmpty())
                .andExpect(jsonPath("$.copyright").isNotEmpty())
                .andExpect(jsonPath("$.panels[0].name").isNotEmpty())
                .andExpect(jsonPath("$.panels[0].links[0].name").isNotEmpty())
                .andExpect(jsonPath("$.panels[0].links[0].symlink").isNotEmpty())
                .andDo(print())
                .andDo(document("footerResource/update",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void uploadImage() throws Exception {
        this.mockMvc
            .perform(fileUpload("/footer/upload/{prefix}", "prefix")
                .file(
                    new MockMultipartFile(
                        "file",
                        "corelate-logo.png",
                        "multipart/form-data",
                        this.getClass().getClassLoader().getResourceAsStream("files/corelate-logo.png"))))
            .andDo(print())
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andDo(document("footerResource/uploadImage",
                preprocessRequest(prettyPrint()),
                preprocessResponse(prettyPrint()),
                pathParameters(
                    parameterWithName("prefix").description("Footer filename additional prefix").optional()
                ),
                requestParts(
                    partWithName("file").description("Footer's image file")
                ),
                requestPartBody("file"),
                responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void downloadImage() throws Exception {
        footerRepository.deleteAll();

        Footer footer = footerRepository.save(createFooterEntity());

        this.mockMvc
                .perform(fileUpload("/footer/upload/{prefix}", footer.getId(), "prefix")
                        .file(
                                new MockMultipartFile(
                                        "file",
                                        "corelate-logo.png",
                                        "multipart/form-data",
                                        this.getClass().getClassLoader().getResourceAsStream("files/corelate-logo.png"))));

        Footer savedFooter = footerRepository.findOneById(footer.getId());

        this.mockMvc
                .perform(get("/footer/download/{uid}",
                        savedFooter
                                .getFiles()
                                .stream()
                                .findFirst()
                                .get()))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.IMAGE_PNG))
                .andDo(document("footerResource/downloadImage",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("uid").description("Footer filename identifier")
                        )));
    }

    private Footer createFooterEntity() {
        Footer footer = new Footer();
        footer.setDescription("ISV Footer");
        footer.setCopyright("ISV Copyright");
        footer.getFiles().add("default-logo.png");

        return footer;
    }

    private FooterDto createFooterDto() {
        FooterDto footerDto = new FooterDto();
        footerDto.setDescription("ISV Footer");
        footerDto.setCopyright("ISV Copyright");

        FooterPanelDto footerPanelDto = new FooterPanelDto();
        footerPanelDto.setName("ISV FOOTER PANEL 1");
        footerPanelDto.setIndex(1);

        FooterPanelLinkDto footerPanelLinkDto = new FooterPanelLinkDto();
        footerPanelLinkDto.setName("ISV FOOTER PANEL LINK 1");
        footerPanelLinkDto.setSymlink("http://google.com");

        footerPanelDto.setLinks(Lists.newArrayList(footerPanelLinkDto));
        footerDto.setPanels(Lists.newArrayList(footerPanelDto));
        return footerDto;
    }
}
