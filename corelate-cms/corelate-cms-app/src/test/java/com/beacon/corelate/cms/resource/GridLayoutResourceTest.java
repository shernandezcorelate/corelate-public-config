package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.Application;
import com.beacon.corelate.cms.dto.GridItemDto;
import com.beacon.corelate.cms.dto.GridLayoutDto;
import com.beacon.corelate.cms.model.GridItem;
import com.beacon.corelate.cms.model.GridLayout;
import com.beacon.corelate.cms.repository.jpa.GridLayoutRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Sets;
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

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.junit.Assert.assertEquals;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
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
 * Created by jlava on 9/17/17.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class GridLayoutResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private GridLayoutRepository gridLayoutRepository;

    private static final FieldDescriptor[] requestHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("heading").description("Grid Layout heading"),
            fieldWithPath("description").description("Grid Layout description"),
            fieldWithPath("gridItems").description("Grid Layout grid items"),
            fieldWithPath("gridItems[].id").optional().ignored(),
            fieldWithPath("gridItems[].title").description("Grid Item title"),
            fieldWithPath("gridItems[].excerpt").description("Grid Item excerpt"),
            fieldWithPath("gridItems[].content").description("Grid Item content"),
            fieldWithPath("gridItems[].position").description("Grid Item position"),
            fieldWithPath("gridItems[].file").type("String").description("Grid Item file").optional(),
            fieldWithPath("gridItems[].files").type("Array").description("Grid Item files filename").optional(),
            fieldWithPath("gridItems[].createdBy").description("Grid Layout Created By").optional().ignored(),
            fieldWithPath("gridItems[].createdDate").description("Grid Layout Created Date Time").optional().ignored(),
            fieldWithPath("gridItems[].updatedBy").description("Grid Layout Updated By").optional().ignored(),
            fieldWithPath("gridItems[].updatedDate").description("Grid Layout Updated Date Time").optional().ignored(),
            fieldWithPath("createdBy").type("String").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("heading").description("Grid Layout heading"),
            fieldWithPath("description").description("Grid Layout description"),
            fieldWithPath("gridItems").description("Grid Layout grid items"),
            fieldWithPath("gridItems[].id").optional().ignored(),
            fieldWithPath("gridItems[].title").description("Grid Layout title"),
            fieldWithPath("gridItems[].excerpt").description("Grid Layout excerpt"),
            fieldWithPath("gridItems[].content").description("Grid Layout content"),
            fieldWithPath("gridItems[].position").description("Grid Layout position"),
            fieldWithPath("gridItems[].file").type("String").description("Grid Item file").optional(),
            fieldWithPath("gridItems[].files").type("Array").description("Grid Item files filename").optional(),
            fieldWithPath("gridItems[].createdBy").description("Grid Layout Created By").optional().ignored(),
            fieldWithPath("gridItems[].createdDate").description("Grid Layout Created Date Time").optional().ignored(),
            fieldWithPath("gridItems[].updatedBy").description("Grid Layout Updated By").optional().ignored(),
            fieldWithPath("gridItems[].updatedDate").description("Grid Layout Updated Date Time").optional().ignored(),
            fieldWithPath("createdBy").type("String").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
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
    public void getGridLayout() throws Exception {
        this.mockMvc
                .perform(get("/grid-layout"))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("gridLayoutResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void updateGridLayout() throws Exception {


        GridLayoutDto updatedGridLayoutDto = createGridLayoutDto();
        updatedGridLayoutDto.getGridItems()
                .stream()
                .findFirst()
                .get()
                .setPosition(2);
        updatedGridLayoutDto.getGridItems().add(createGridItemDto("Another Grid Title", 1));
        updatedGridLayoutDto.setHeading("Updated Grid Layout Heading");

        this.mockMvc
                .perform(put("/grid-layout")
                        .content(objectMapper.writeValueAsString(updatedGridLayoutDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.heading", is(updatedGridLayoutDto.getHeading())))
                .andExpect(jsonPath("$.description", is(updatedGridLayoutDto.getDescription())))
                .andExpect(jsonPath("$.gridItems", hasSize(updatedGridLayoutDto.getGridItems().size())))
                .andExpect(jsonPath("$.gridItems[0].position", is(1)))
                .andExpect(jsonPath("$.gridItems[0].title", is("Another Grid Title")))
                .andExpect(jsonPath("$.gridItems[0].files", is(notNullValue())))
                .andDo(document("gridLayoutResource/update",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    private GridLayoutDto createGridLayoutDto() {
        GridLayoutDto gridLayoutDto = new GridLayoutDto();
        gridLayoutDto.setHeading("Sample Heading");
        gridLayoutDto.setDescription("Sample Description");
        gridLayoutDto.getGridItems().add(createGridItemDto("Grid Title 1", 1));

        return gridLayoutDto;
    }

    private GridItemDto createGridItemDto(String title, int position) {
        GridItemDto gridItemDto = new GridItemDto();
        gridItemDto.setPosition(Integer.valueOf(position));
        gridItemDto.setTitle(title);
        gridItemDto.setContent("Grid item content");
        gridItemDto.setExcerpt("Grid item excerpt");
        gridItemDto.setFiles(Sets.newHashSet("FILE_1.png"));

        return gridItemDto;
    }
}
