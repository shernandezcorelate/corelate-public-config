package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.Application;
import com.beacon.corelate.cms.dto.HeaderDto;
import com.beacon.corelate.cms.model.Header;
import com.beacon.corelate.cms.repository.jpa.HeaderRepository;
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
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestFields;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestPartBody;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.partWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.restdocs.request.RequestDocumentation.requestParts;
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
public class HeaderResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private HeaderRepository headerRepository;

    private static final FieldDescriptor[] requestHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("label").description("Header primary label"),
            fieldWithPath("subLabel").description("Header sub label"),
            fieldWithPath("showImage").description("Header show image holder"),
            fieldWithPath("showLabel").description("Header show label holder"),
            fieldWithPath("createdBy").type("String").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("label").description("Header primary label"),
            fieldWithPath("subLabel").description("Header sub label"),
            fieldWithPath("showImage").description("Header show image holder"),
            fieldWithPath("showLabel").description("Header show label holder"),
            fieldWithPath("file").type("String").description("Header file filename").optional(),
            fieldWithPath("files").type("Array").description("Header files filename").optional(),
            fieldWithPath("createdBy").type("String").description("Created By"),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time"),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseEntityHeaderFields = new FieldDescriptor[]{
            fieldWithPath("hasNextPage").description("Has next page flag"),
            fieldWithPath("totalElements").description("Total elements"),
            fieldWithPath("results").description("Result list"),
            fieldWithPath("results[].id").optional().ignored(),
            fieldWithPath("results[].label").description("Header primary label"),
            fieldWithPath("results[].subLabel").description("Header sub label"),
            fieldWithPath("results[].showImage").description("Header show image holder"),
            fieldWithPath("results[].showLabel").description("Header show label holder"),
            fieldWithPath("results[].file").description("Header file filename"),
            fieldWithPath("results[].files").description("Header file filenames").optional().ignored(),
            fieldWithPath("results[].createdBy").description("wHeader created by"),
            fieldWithPath("results[].createdDate").description("Header created date"),
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
    public void getHeader() throws Exception {
        headerRepository.deleteAll();

        Header header = headerRepository.save(createHeaderEntity());

        this.mockMvc
                .perform(get("/header"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.label", is(header.getLabel())))
                .andExpect(jsonPath("$.subLabel", is(header.getSubLabel())))
                .andExpect(jsonPath("$.showImage", is(header.getShowImage())))
                .andExpect(jsonPath("$.showLabel", is(header.getShowLabel())))
                .andDo(print())
                .andDo(document("headerResource/get",
                        preprocessResponse(prettyPrint()),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void updateHeader() throws Exception {
        headerRepository.deleteAll();

        Header header = headerRepository.save(createHeaderEntity());

        HeaderDto headerDto = createHeaderDto();
        headerDto.setLabel("CORELATE ISV NEW LABEL");
        headerDto.setId(header.getId());

        this.mockMvc
                .perform(put("/header", header.getId())
                        .content(objectMapper.writeValueAsString(headerDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.label", is(headerDto.getLabel())))
                .andExpect(jsonPath("$.subLabel", is(headerDto.getSubLabel())))
                .andExpect(jsonPath("$.showImage", is(headerDto.getShowImage())))
                .andExpect(jsonPath("$.showLabel", is(headerDto.getShowLabel())))
                .andDo(print())
                .andDo(document("headerResource/update",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void uploadImage() throws Exception {
        headerRepository.deleteAll();

        Header defaultHeader = createHeaderEntity();

        defaultHeader
                .getFiles()
                .clear();

        Header header = headerRepository.save(defaultHeader);

        this.mockMvc
                .perform(fileUpload("/header/upload/{prefix}", "prefix")
                        .file(
                                new MockMultipartFile(
                                        "file",
                                        "corelate-logo.png",
                                        "multipart/form-data",
                                        this.getClass().getClassLoader().getResourceAsStream("files/corelate-logo.png"))))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.label", is(header.getLabel())))
                .andDo(document("headerResource/uploadImage",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("prefix").description("Header filename additional prefix").optional()
                        ),
                        requestParts(
                                partWithName("file").description("Header's image file")
                        ),
                        requestPartBody("file"),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void downloadImage() throws Exception {
        headerRepository.deleteAll();

        Header header = headerRepository.save(createHeaderEntity());

        this.mockMvc
                .perform(fileUpload("/header/upload/{prefix}", header.getId(), "prefix")
                        .file(
                                new MockMultipartFile(
                                        "file",
                                        "corelate-logo.png",
                                        "multipart/form-data",
                                        this.getClass().getClassLoader().getResourceAsStream("files/corelate-logo.png"))));

        Header savedHeader = headerRepository.findOneById(header.getId());

        this.mockMvc
                .perform(get("/header/download/{uid}",
                        savedHeader
                                .getFiles()
                                .stream()
                                .findFirst()
                                .get()))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.IMAGE_PNG))
                .andDo(document("headerResource/downloadImage",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("uid").description("Header filename identifier")
                        )));
    }


    private Header createHeaderEntity() {
        Header header = new Header();
        header.setLabel("CORELATE ISV LABEL");
        header.setSubLabel("CORELATE ISV SUB LABEL");
        header.setShowImage(Boolean.TRUE);
        header.setShowLabel(Boolean.TRUE);
        header.getFiles().add("sample-file-logo.png");
        return header;
    }

    private HeaderDto createHeaderDto() {
        HeaderDto headerDto = new HeaderDto();
        headerDto.setLabel("CORELATE ISV LABEL");
        headerDto.setSubLabel("CORELATE ISV SUB LABEL");
        headerDto.setShowImage(Boolean.TRUE);
        headerDto.setShowLabel(Boolean.TRUE);
        return headerDto;
    }
}
