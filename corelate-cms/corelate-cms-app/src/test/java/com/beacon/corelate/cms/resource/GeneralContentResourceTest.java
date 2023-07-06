package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.Application;
import com.beacon.corelate.cms.dto.GeneralContentDto;
import com.beacon.corelate.cms.model.GeneralContent;
import com.beacon.corelate.cms.repository.jpa.GeneralContentRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.assertj.core.util.Lists;
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

import java.time.LocalDateTime;
import java.time.ZoneId;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.delete;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.fileUpload;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
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
import static org.springframework.restdocs.request.RequestDocumentation.requestParameters;
import static org.springframework.restdocs.request.RequestDocumentation.requestParts;
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
public class GeneralContentResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private GeneralContentRepository generalContentRepository;

    private static final FieldDescriptor[] requestHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("title").description("General Content title label"),
            fieldWithPath("content").description("General Content contents"),
            fieldWithPath("excerpt").description("General Content excerpt"),
            fieldWithPath("category").description("General Content category"),
            fieldWithPath("bannerPlaceHolder").description("General Content banner place holder"),
            fieldWithPath("published").description("General Content published flag"),
            fieldWithPath("author").description("General Content author"),
            fieldWithPath("autoPost").description("General Content auto post"),
            fieldWithPath("releaseDate").type("ZonedDateTime").description("General Content release date"),
            fieldWithPath("createdBy").type("String").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("title").description("General Content title label"),
            fieldWithPath("content").description("General Content contents"),
            fieldWithPath("excerpt").description("General Content excerpt"),
            fieldWithPath("category").description("General Content category"),
            fieldWithPath("bannerPlaceHolder").description("General Content banner place holder"),
            fieldWithPath("published").description("General Content published flag"),
            fieldWithPath("author").description("General Content author"),
            fieldWithPath("autoPost").description("General Content auto post"),
            fieldWithPath("releaseDate").type("ZonedDateTime").description("General Content release date"),
            fieldWithPath("file").type("String").description("Header file filename").optional(),
            fieldWithPath("files").type("Array").description("Header files filename").optional(),
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
            fieldWithPath("results[].title").description("General Content title label"),
            fieldWithPath("results[].content").description("General Content contents"),
            fieldWithPath("results[].excerpt").description("General Content excerpt"),
            fieldWithPath("results[].category").description("General Content category"),
            fieldWithPath("results[].bannerPlaceHolder").description("General Content banner place holder"),
            fieldWithPath("results[].published").description("General Content published flag"),
            fieldWithPath("results[].author").description("General Content author"),
            fieldWithPath("results[].autoPost").description("General Content auto post"),
            fieldWithPath("results[].releaseDate").type("ZonedDateTime").description("General Content release date"),
            fieldWithPath("results[].file").type("String").description("Header file filename").optional(),
            fieldWithPath("results[].files").type("Array").description("Header files filename").optional(),
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
    public void createGeneralContent() throws Exception {
        GeneralContentDto generalContentDto = createGeneralContentDto();
        this.mockMvc
                .perform(post("/general-content")
                        .content(objectMapper.writeValueAsString(generalContentDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.bannerPlaceHolder", is(generalContentDto.getBannerPlaceHolder())))
                .andExpect(jsonPath("$.category", is(generalContentDto.getCategory())))
                .andExpect(jsonPath("$.content", is(generalContentDto.getContent())))
                .andExpect(jsonPath("$.excerpt", is(generalContentDto.getExcerpt())))
                .andExpect(jsonPath("$.title", is(generalContentDto.getTitle())))
                .andExpect(jsonPath("$.published", is(generalContentDto.getPublished())))
                .andExpect(jsonPath("$.author", is(generalContentDto.getAuthor())))
                .andExpect(jsonPath("$.autoPost", is(generalContentDto.getAutoPost())))
                .andDo(document("generalContentResource/create",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional(readOnly = true)
    public void getListGeneralContent() throws Exception {
        GeneralContent generalContent1 = createGeneralContentEntity();
        GeneralContent generalContent2 = createGeneralContentEntity();
        generalContent2.setTitle("Another Test Title");

        generalContentRepository.save(Lists.newArrayList(generalContent1, generalContent2));

        this.mockMvc
                .perform(get("/general-content")
                        .param("page", "0")
                        .param("size", "20")
                        .param("sort", "ASC"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.totalElements", is((int) generalContentRepository.count())))
                .andDo(print())
                .andDo(document("generalContentResource/getList",
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
    public void getListGeneralContentByCategory() throws Exception {
        GeneralContent generalContent1 = createGeneralContentEntity();
        generalContent1.setDeleted(Boolean.TRUE);
        generalContent1.setPublished(Boolean.FALSE);
        generalContent1.setCategory("NEWS");
        GeneralContent generalContent2 = createGeneralContentEntity();
        generalContent2.setTitle("Another Test Title");
        GeneralContent generalContent3 = createGeneralContentEntity();
        generalContentRepository.save(Lists.newArrayList(generalContent1, generalContent2, generalContent3));

        this.mockMvc
                .perform(get("/general-content")
                        .param("page", "0")
                        .param("size", "20")
                        .param("sort", "ASC")
                        .param("category", "ANNOUNCEMENT")
                        .param("published", "true"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.totalElements", is(2)))
                .andDo(print())
                .andDo(document("generalContentResource/getListByCategory",
                        preprocessResponse(prettyPrint()),
                        requestParameters(
                                parameterWithName("page").description("Page number"),
                                parameterWithName("size").description("Page size"),
                                parameterWithName("sort").description("Sort option"),
                                parameterWithName("category").description("General Content Category"),
                                parameterWithName("published").description("Published flag")
                        ),
                        responseFields(responseEntityHeaderFields)));
    }

    @Test
    @Transactional(readOnly = true)
    public void getGeneralContent() throws Exception {
        GeneralContent generalContent = generalContentRepository.save(createGeneralContentEntity());

        this.mockMvc
                .perform(get("/general-content/{id}", generalContent.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.category", is(generalContent.getCategory())))
                .andExpect(jsonPath("$.content", is(generalContent.getContent())))
                .andExpect(jsonPath("$.excerpt", is(generalContent.getExcerpt())))
                .andExpect(jsonPath("$.title", is(generalContent.getTitle())))
                .andExpect(jsonPath("$.published", is(generalContent.getPublished())))
                .andExpect(jsonPath("$.author", is(generalContent.getAuthor())))
                .andExpect(jsonPath("$.autoPost", is(generalContent.getAutoPost())))
                .andExpect(jsonPath("$.bannerPlaceHolder", is(generalContent.getBannerPlaceHolder())))
                .andDo(print())
                .andDo(document("generalContentResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("General Content id")
                        ),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional(readOnly = true)
    public void getPublishedGeneralContent() throws Exception {
        GeneralContent generalContent1 = createGeneralContentEntity();
        GeneralContent generalContent2 = createGeneralContentEntity();
        generalContent2.setPublished(Boolean.FALSE);
        generalContent2.setTitle("Another Test Title");

        generalContentRepository.save(Lists.newArrayList(generalContent1, generalContent2));

        this.mockMvc
                .perform(get("/general-content/published")
                        .param("page", "0")
                        .param("size", "20")
                        .param("sort", "ASC"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.totalElements", is((int) generalContentRepository.count() - 1)))
                .andDo(print())
                .andDo(document("generalContentResource/getPublished",
                        preprocessResponse(prettyPrint()),
                        requestParameters(
                                parameterWithName("page").description("Page number"),
                                parameterWithName("size").description("Page size"),
                                parameterWithName("sort").description("Sort option")
                        ),
                        responseFields(responseEntityHeaderFields)));
    }

    @Test
    @Transactional
    public void updateGeneralContent() throws Exception {
        GeneralContent generalContent = generalContentRepository.save(createGeneralContentEntity());

        GeneralContentDto generalContentDto = createGeneralContentDto();
        generalContentDto.setId(generalContent.getId());
        generalContentDto.setCreatedBy(generalContent.getCreatedBy());
        generalContentDto.setCreatedDate(generalContent.getCreatedDate().atZone(ZoneId.systemDefault()));
        generalContentDto.setReleaseDate(generalContent.getReleaseDate().atZone(ZoneId.systemDefault()));

        this.mockMvc
                .perform(put("/general-content/{id}", generalContent.getId())
                        .content(objectMapper.writeValueAsString(generalContentDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.category", is(generalContentDto.getCategory())))
                .andExpect(jsonPath("$.content", is(generalContentDto.getContent())))
                .andExpect(jsonPath("$.excerpt", is(generalContentDto.getExcerpt())))
                .andExpect(jsonPath("$.title", is(generalContentDto.getTitle())))
                .andExpect(jsonPath("$.published", is(generalContentDto.getPublished())))
                .andExpect(jsonPath("$.author", is(generalContentDto.getAuthor())))
                .andExpect(jsonPath("$.bannerPlaceHolder", is(generalContentDto.getBannerPlaceHolder())))
                .andExpect(jsonPath("$.autoPost", is(generalContentDto.getAutoPost())))
                .andDo(print())
                .andDo(document("generalContentResource/update",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("General Content id")
                        ),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void deleteGeneralContent() throws Exception {
        GeneralContent generalContent = generalContentRepository.save(createGeneralContentEntity());
        this.mockMvc
                .perform(delete("/general-content/{id}", generalContent.getId()))
                .andDo(print())
                .andDo(document("generalContentResource/delete",
                        preprocessRequest(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("General Content id")
                        )));
    }

    @Test
    @Transactional
    public void uploadImage() throws Exception {
        GeneralContent generalContent = createGeneralContentEntity();
        generalContent = generalContentRepository.save(generalContent);

        this.mockMvc
                .perform(fileUpload("/general-content/{id}/upload/{prefix}", generalContent.getId(), "prefix")
                        .file(
                                new MockMultipartFile(
                                        "file",
                                        "corelate-logo.png",
                                        "multipart/form-data",
                                        this.getClass().getClassLoader().getResourceAsStream("files/corelate-logo.png"))))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.title", is(generalContent.getTitle())))
                .andDo(document("generalContentResource/uploadImage",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("General Content Id"),
                                parameterWithName("prefix").description("General Content filename additional prefix").optional()
                        ),
                        requestParts(
                                partWithName("file").description("General Content's image file")
                        ),
                        requestPartBody("file"),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void downloadImage() throws Exception {
        GeneralContent generalContent = createGeneralContentEntity();
        generalContent = generalContentRepository.save(generalContent);

        this.mockMvc
                .perform(fileUpload("/general-content/{id}/upload/{prefix}", generalContent.getId(), "prefix")
                        .file(
                                new MockMultipartFile(
                                        "file",
                                        "corelate-logo.png",
                                        "multipart/form-data",
                                        this.getClass().getClassLoader().getResourceAsStream("files/corelate-logo.png"))));

        GeneralContent withImageGeneralContent = generalContentRepository.findOneById(generalContent.getId());

        this.mockMvc
                .perform(get("/general-content/download/{uid}",
                        withImageGeneralContent
                                .getFiles()
                                .stream()
                                .findFirst()
                                .get()))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.IMAGE_PNG))
                .andDo(document("carouselSlideResource/downloadImage",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("uid").description("General Content filename identifier")
                        )));
    }

    @Test
    @Transactional
    public void publish() throws Exception {
        GeneralContent generalContent = createGeneralContentEntity();
        generalContent.setPublished(Boolean.FALSE);

        generalContent = generalContentRepository.save(generalContent);

        this.mockMvc
                .perform(put("/general-content/{id}/publish", generalContent.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("generalContentResource/publish",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("General Content ID")
                        ),
                        responseFields(responseHeaderFields)
                ));

        assertTrue(generalContentRepository.findOneById(generalContent.getId()).getPublished());
    }

    @Test
    @Transactional
    public void unpublish() throws Exception {
        GeneralContent generalContent = createGeneralContentEntity();
        generalContent.setPublished(Boolean.TRUE);

        generalContent = generalContentRepository.save(generalContent);

        this.mockMvc
                .perform(put("/general-content/{id}/unpublish", generalContent.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("generalContentResource/unpublish",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("General Content ID")
                        ),
                        responseFields(responseHeaderFields)
                ));

        assertFalse(generalContentRepository.findOneById(generalContent.getId()).getPublished());
    }

    private GeneralContentDto createGeneralContentDto() {
        GeneralContentDto generalContentDto = new GeneralContentDto();
        generalContentDto.setCategory("NEWS");
        generalContentDto.setContent("<html>Hello World!</html>");
        generalContentDto.setExcerpt("Hello World!");
        generalContentDto.setTitle("Test Title");
        generalContentDto.setBannerPlaceHolder("Test banner placeholder");
        generalContentDto.setPublished(Boolean.TRUE);
        generalContentDto.setAuthor("Sample Author");
        generalContentDto.setAutoPost(Boolean.FALSE);
        generalContentDto.setReleaseDate(LocalDateTime.now().atZone(ZoneId.systemDefault()));
        return generalContentDto;
    }

    private GeneralContent createGeneralContentEntity() {
        GeneralContent generalContent = new GeneralContent();
        generalContent.setCategory("ANNOUNCEMENT");
        generalContent.setContent("<html>Hello World!</html>");
        generalContent.setExcerpt("Hello World!");
        generalContent.setTitle("Test Title");
        generalContent.setBannerPlaceHolder("Banner Placeholder");
        generalContent.setPublished(Boolean.TRUE);
        generalContent.setAuthor("Sample Author");
        generalContent.setAutoPost(Boolean.FALSE);
        generalContent.setReleaseDate(LocalDateTime.now());
        return generalContent;
    }

}
