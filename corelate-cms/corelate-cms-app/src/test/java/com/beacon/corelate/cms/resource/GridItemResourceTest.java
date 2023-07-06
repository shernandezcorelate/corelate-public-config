package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.Application;
import com.beacon.corelate.cms.model.GridItem;
import com.beacon.corelate.cms.repository.jpa.GridItemRepository;
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
import static org.springframework.restdocs.operation.preprocess.Preprocessors.preprocessRequest;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.preprocessResponse;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.prettyPrint;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestPartBody;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Created by jlava on 9/19/17.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class GridItemResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private GridItemRepository gridItemRepository;

    private static final FieldDescriptor[] responseHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("title").description("Grid item title"),
            fieldWithPath("excerpt").description("Grid item excerpt"),
            fieldWithPath("content").description("Grid item content"),
            fieldWithPath("position").description("Grid item position"),
            fieldWithPath("file").type("String").description("Grid item file name"),
            fieldWithPath("files").type("Array").description("Grid item file names"),
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
    @Transactional
    public void uploadImage() throws Exception {
        GridItem gridItem = createGridItemEntity("Grid Item title", 1);
        gridItem = gridItemRepository.save(gridItem);

        this.mockMvc
                .perform(fileUpload("/grid-item/{id}/upload/{prefix}", gridItem.getId(), "prefix")
                        .file(
                                new MockMultipartFile(
                                        "file",
                                        "corelate-logo.png",
                                        "multipart/form-data",
                                        this.getClass().getClassLoader().getResourceAsStream("files/corelate-logo.png"))))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.title", is(gridItem.getTitle())))
                .andDo(document("gridItemResource/uploadImage",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Grid Item Id"),
                                parameterWithName("prefix").description("Grid Item filename additional prefix").optional()
                        ),
                        requestParts(
                                partWithName("file").description("Grid Item's image file")
                        ),
                        requestPartBody("file"),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void downloadImage() throws Exception {
        GridItem gridItem = createGridItemEntity("Grid Item Title", 1);
        gridItem = gridItemRepository.save(gridItem);

        this.mockMvc
                .perform(fileUpload("/grid-item/{id}/upload/{prefix}", gridItem.getId(), "prefix")
                        .file(
                                new MockMultipartFile(
                                        "file",
                                        "corelate-logo.png",
                                        "multipart/form-data",
                                        this.getClass().getClassLoader().getResourceAsStream("files/corelate-logo.png"))));

        GridItem withImageGridItem = gridItemRepository.findOneById(gridItem.getId());

        this.mockMvc
                .perform(get("/grid-item/download/{uid}",
                        withImageGridItem
                                .getFiles()
                                .stream()
                                .findFirst()
                                .get()))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.IMAGE_PNG))
                .andDo(document("gridItemResource/downloadImage",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("uid").description("Grid Item filename identifier")
                        )));
    }

    private GridItem createGridItemEntity(String title, int position) {
        GridItem gridItem = new GridItem();
        gridItem.setPosition(Integer.valueOf(position));
        gridItem.setTitle(title);
        gridItem.setContent("Grid item content");
        gridItem.setExcerpt("Grid item excerpt");

        return gridItem;
    }
}
