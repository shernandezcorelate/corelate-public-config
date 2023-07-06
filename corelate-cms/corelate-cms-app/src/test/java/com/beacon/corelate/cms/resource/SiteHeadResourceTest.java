package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.Application;
import com.beacon.corelate.cms.dto.SiteHeadDto;
import com.beacon.corelate.cms.model.SiteHead;
import com.beacon.corelate.cms.repository.jpa.SiteHeadRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
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
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SiteHeadResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private SiteHeadRepository siteHeadRepository;

    private static final FieldDescriptor[] requestSiteHeadFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("title").description("Site Head title"),
            fieldWithPath("createdBy").type("String").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseSiteHeadFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("title").description("Site Head title"),
            fieldWithPath("file").type("String").description("Site Head favicon file filename").optional(),
            fieldWithPath("files").type("Array").description("Site Head favicon files filename").optional(),
            fieldWithPath("createdBy").type("String").description("Created By"),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time"),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseEntitySiteHeadFields = new FieldDescriptor[]{
            fieldWithPath("hasNextPage").description("Has next page flag"),
            fieldWithPath("totalElements").description("Total elements"),
            fieldWithPath("results").description("Result list"),
            fieldWithPath("results[].id").optional().ignored(),
            fieldWithPath("results[].title").description("Site Head title"),
            fieldWithPath("results[].file").description("Site Head favicon file filename"),
            fieldWithPath("results[].files").description("Site Head favicon file filenames").optional().ignored(),
            fieldWithPath("results[].createdBy").description("Created by"),
            fieldWithPath("results[].createdDate").description("Created date"),
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
    public void getSiteHead() throws Exception {
        siteHeadRepository.deleteAll();

        SiteHead siteHead = siteHeadRepository.save(createSiteHeadEntity());

        this.mockMvc
                .perform(get("/site-head"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title", is(siteHead.getTitle())))
                .andDo(print())
                .andDo(document("siteHeadResource/get",
                        preprocessResponse(prettyPrint()),
                        responseFields(responseSiteHeadFields)));
    }

    @Test
    @Transactional
    public void updateSiteHead() throws Exception {
        siteHeadRepository.deleteAll();

        SiteHead siteHead = siteHeadRepository.save(createSiteHeadEntity());

        SiteHeadDto siteHeadDto = createSiteHeadDto();
        siteHeadDto.setTitle("CORELATE ISV NEW LABEL");
        siteHeadDto.setId(siteHead.getId());

        this.mockMvc
                .perform(put("/site-head", siteHead.getId())
                        .content(objectMapper.writeValueAsString(siteHeadDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.title", is(siteHeadDto.getTitle())))
                .andDo(print())
                .andDo(document("siteHeadResource/update",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(requestSiteHeadFields),
                        responseFields(responseSiteHeadFields)));
    }

    @Test
    @Transactional
    public void uploadImage() throws Exception {
        siteHeadRepository.deleteAll();

        SiteHead defaultSiteHead = createSiteHeadEntity();

        defaultSiteHead
                .getFiles()
                .clear();

        SiteHead siteHead = siteHeadRepository.save(defaultSiteHead);

        this.mockMvc
                .perform(fileUpload("/site-head/upload/{prefix}", "prefix")
                        .file(
                                new MockMultipartFile(
                                        "file",
                                        "favicon.ico",
                                        "multipart/form-data",
                                        this.getClass().getClassLoader().getResourceAsStream("files/favicon.ico"))))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.title", is(siteHead.getTitle())))
                .andDo(document("siteHeadResource/uploadImage",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("prefix").description("Site head favicon additional prefix").optional()
                        ),
                        requestParts(
                                partWithName("file").description("Site head favicon file")
                        ),
                        requestPartBody("file"),
                        responseFields(responseSiteHeadFields)));
    }

    @Test
    @Transactional
    public void downloadImage() throws Exception {
        siteHeadRepository.deleteAll();

        SiteHead siteHead = siteHeadRepository.save(createSiteHeadEntity());

        this.mockMvc
                .perform(fileUpload("/site-head/upload/{prefix}", siteHead.getId(), "prefix")
                        .file(
                                new MockMultipartFile(
                                        "file",
                                        "favicon.ico",
                                        "multipart/form-data",
                                        this.getClass().getClassLoader().getResourceAsStream("files/favicon.ico"))));

        SiteHead savedSiteHead = siteHeadRepository.findOneById(siteHead.getId());

        this.mockMvc
                .perform(get("/site-head/download/{uid}",
                        savedSiteHead
                                .getFiles()
                                .stream()
                                .findFirst()
                                .get()))
                .andExpect(status().isOk())
                .andDo(document("siteHeadResource/downloadImage",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("uid").description("Site Head filename identifier")
                        )));
    }


    private SiteHead createSiteHeadEntity() {
        SiteHead siteHead = new SiteHead();
        siteHead.setTitle("CORELATE ISV");
        siteHead.getFiles().add("favicon.ico");
        return siteHead;
    }

    private SiteHeadDto createSiteHeadDto() {
        SiteHeadDto siteHeadDto = new SiteHeadDto();
        siteHeadDto.setTitle("CORELATE ISV");
        return siteHeadDto;
    }

}
