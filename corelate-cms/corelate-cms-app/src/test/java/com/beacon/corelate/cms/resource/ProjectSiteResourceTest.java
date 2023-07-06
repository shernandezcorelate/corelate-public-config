package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.Application;
import com.beacon.corelate.cms.dto.ProjectSiteButtonDto;
import com.beacon.corelate.cms.dto.ProjectSiteDto;
import com.beacon.corelate.cms.model.ProjectSite;
import com.beacon.corelate.cms.model.ProjectSiteButton;
import com.beacon.corelate.cms.repository.jpa.ProjectSiteRepository;
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

import java.time.LocalDateTime;
import java.time.Month;
import java.time.ZoneId;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.preprocessRequest;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.preprocessResponse;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.prettyPrint;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
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
public class ProjectSiteResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private ProjectSiteRepository projectSiteRepository;

    private static final FieldDescriptor[] requestHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("title").description("Project Site title"),
            fieldWithPath("content").description("Project Site contents"),
            fieldWithPath("excerpt").description("Project Site excerpt"),
            fieldWithPath("openingDate").description("Project Site opening date"),
            fieldWithPath("closingDate").description("Project Site closing date"),
            fieldWithPath("published").description("Project Site published flag"),
            fieldWithPath("author").description("Project Site author"),
            fieldWithPath("buttons").description("Project Site buttons").optional(),
            fieldWithPath("buttons[].label").description("Project Site button label").optional(),
            fieldWithPath("buttons[].link").description("Project Site button link").optional(),
            fieldWithPath("buttons[].publicAccess").description("Project Site button public access counter").optional(),
            fieldWithPath("file").type("String").description("Project Site filename").optional(),
            fieldWithPath("files").type("Array").description("Project Site filenames").optional(),
            fieldWithPath("releaseDate").type("ZonedDateTime").description("Release Date"),
            fieldWithPath("createdBy").type("String").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("title").description("Project Site title"),
            fieldWithPath("content").description("Project Site contents"),
            fieldWithPath("excerpt").description("Project Site excerpt"),
            fieldWithPath("openingDate").description("Project Site opening date"),
            fieldWithPath("closingDate").description("Project Site closing date"),
            fieldWithPath("published").description("Project Site published flag"),
            fieldWithPath("author").description("Project Site author"),
            fieldWithPath("buttons").description("Project Site buttons").optional(),
            fieldWithPath("buttons[].label").description("Project Site button label").optional(),
            fieldWithPath("buttons[].link").description("Project Site button link").optional(),
            fieldWithPath("buttons[].publicAccess").description("Project Site button public access counter").optional(),
            fieldWithPath("file").type("String").description("Project Site filename").optional(),
            fieldWithPath("files").type("Array").description("Project Site filenames").optional(),
            fieldWithPath("releaseDate").type("ZonedDateTime").description("Release Date"),
            fieldWithPath("createdBy").type("String").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseEntityHeaderFields = new FieldDescriptor[]{
            fieldWithPath("hasNextPage").description("Has next page flag"),
            fieldWithPath("totalElements").description("Total elements"),
            fieldWithPath("results").description("Result list"),
            fieldWithPath("results[].id").optional().ignored(),
            fieldWithPath("results[].title").description("Project Site title"),
            fieldWithPath("results[].content").description("Project Site contents"),
            fieldWithPath("results[].excerpt").description("Project Site excerpt"),
            fieldWithPath("results[].openingDate").description("Project Site opening date"),
            fieldWithPath("results[].closingDate").description("Project Site closing date"),
            fieldWithPath("results[].published").description("Project Site published flag"),
            fieldWithPath("results[].author").description("Project Site author"),
            fieldWithPath("results[].buttons").description("Project Site buttons").optional(),
            fieldWithPath("results[].buttons[].label").description("Project Site button label").optional(),
            fieldWithPath("results[].buttons[].link").description("Project Site button link").optional(),
            fieldWithPath("results[].buttons[].publicAccess").description("Project Site button public access counter").optional(),
            fieldWithPath("results[].file").type("String").description("Project Site filename").optional(),
            fieldWithPath("results[].files").type("Array").description("Project Site filenames").optional(),
            fieldWithPath("results[].releaseDate").type("ZonedDateTime").description("Release Date"),
            fieldWithPath("results[].createdBy").type("String").description("Created By").optional().ignored(),
            fieldWithPath("results[].createdDate").type("ZonedDateTime").description("Created Date Time").optional().ignored(),
            fieldWithPath("results[].updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("results[].updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored(),
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
    public void createProjectSite() throws Exception {
        ProjectSiteDto projectSiteDto = createProjectSiteDto("Sample Title");

        this.mockMvc
                .perform(post("/project-site")
                        .content(objectMapper.writeValueAsString(projectSiteDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.title", is(projectSiteDto.getTitle())))
                .andExpect(jsonPath("$.content", is(projectSiteDto.getContent())))
                .andExpect(jsonPath("$.excerpt", is(projectSiteDto.getExcerpt())))
                .andExpect(jsonPath("$.published", is(projectSiteDto.getPublished())))
                .andExpect(jsonPath("$.author", is(projectSiteDto.getAuthor())))
                .andExpect(jsonPath("$.openingDate").isNotEmpty())
                .andExpect(jsonPath("$.closingDate").isNotEmpty())
                .andExpect(jsonPath("$.buttons", hasSize(projectSiteDto.getButtons().size())))
                .andExpect(jsonPath("$.buttons[0].label", is(projectSiteDto.getButtons().get(0).getLabel())))
                .andExpect(jsonPath("$.buttons[0].link", is(projectSiteDto.getButtons().get(0).getLink())))
                .andExpect(jsonPath("$.buttons[0].publicAccess", is(projectSiteDto.getButtons().get(0).getPublicAccess())))
                .andDo(document("projectSiteResource/create",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void getProjectSite() throws Exception {
        ProjectSite projectSite = projectSiteRepository.save(createProjectSiteEntity("Sample Title"));
        this.mockMvc
                .perform(get("/project-site/{id}", projectSite.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title", is(projectSite.getTitle())))
                .andExpect(jsonPath("$.content", is(projectSite.getContent())))
                .andExpect(jsonPath("$.excerpt", is(projectSite.getExcerpt())))
                .andExpect(jsonPath("$.published", is(projectSite.getPublished())))
                .andExpect(jsonPath("$.author", is(projectSite.getAuthor())))
                .andExpect(jsonPath("$.openingDate").isNotEmpty())
                .andExpect(jsonPath("$.closingDate").isNotEmpty())
                .andExpect(jsonPath("$.buttons", hasSize(projectSite.getButtons().size())))
                .andExpect(jsonPath("$.buttons[0].label", is(projectSite.getButtons().get(0).getLabel())))
                .andExpect(jsonPath("$.buttons[0].link", is(projectSite.getButtons().get(0).getLink())))
                .andExpect(jsonPath("$.buttons[0].publicAccess", is(projectSite.getButtons().get(0).getPublicAccess())))
                .andDo(print())
                .andDo(document("projectSiteResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Project Site id")
                        ),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void getProjectSiteList() throws Exception {
        projectSiteRepository.save(Lists.newArrayList(createProjectSiteEntity("Sample Title 1"), createProjectSiteEntity("Sample Title 2")));

        this.mockMvc
                .perform(get("/project-site")
                        .param("page", "0")
                        .param("size", "20")
                        .param("sort", "ASC"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.totalElements", is((int)projectSiteRepository.count())))
                .andDo(print())
                .andDo(document("projectSiteResource/getList",
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
    public void getPublishedProjectSite() throws Exception {
        ProjectSite projectSite = createProjectSiteEntity("Sample Title 2");
        projectSite.setPublished(Boolean.FALSE);

        projectSiteRepository.save(Lists.newArrayList(createProjectSiteEntity("Sample Title 1"), projectSite));

        this.mockMvc
                .perform(get("/project-site/published")
                        .param("page", "0")
                        .param("size", "20")
                        .param("sort", "ASC"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.totalElements", is((int)projectSiteRepository.count() - 1)))
                .andDo(print())
                .andDo(document("projectSiteResource/getPublishedProjectSite",
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
    public void updateProjectSite() throws Exception {
        ProjectSite projectSite = projectSiteRepository.save(createProjectSiteEntity("Sample Title"));

        ProjectSiteDto projectSiteDto = createProjectSiteDto("New Sample Title");
        projectSiteDto.setId(projectSite.getId());
        projectSiteDto.getButtons().remove(0);
        projectSiteDto.getButtons().add(createProjectSiteButtonDto("LOGIN"));

        this.mockMvc
                .perform(put("/project-site/{id}", projectSite.getId())
                        .content(objectMapper.writeValueAsString(projectSiteDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.title", is(projectSiteDto.getTitle())))
                .andExpect(jsonPath("$.buttons", hasSize(1)))
                .andExpect(jsonPath("$.buttons[0].label", is("LOGIN")))
                .andDo(print())
                .andDo(document("projectSiteResource/update",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Project Site id")
                        ),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void deleteProjectSite() throws Exception {
        ProjectSite projectSite = projectSiteRepository.save(createProjectSiteEntity("Sample Title"));

        this.mockMvc
                .perform(delete("/project-site/{id}", projectSite.getId()))
                .andDo(print())
                .andDo(document("projectSiteResource/delete",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                    parameterWithName("id").description("Project Site id")
                        ))
                );

        assertEquals(Boolean.TRUE, projectSiteRepository.findOneById(projectSite.getId()).getDeleted());
    }



    @Test
    @Transactional
    public void uploadImage() throws Exception {
        ProjectSite projectSite = createProjectSiteEntity("Sample Title");
        projectSite = projectSiteRepository.save(projectSite);

        this.mockMvc
                .perform(fileUpload("/project-site/{id}/upload/{prefix}", projectSite.getId(), "prefix")
                        .file(
                                new MockMultipartFile(
                                        "file",
                                        "corelate-logo.png",
                                        "multipart/form-data",
                                        this.getClass().getClassLoader().getResourceAsStream("files/corelate-logo.png"))))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.title", is(projectSite.getTitle())))
                .andDo(document("projectSiteResource/uploadImage",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Project Site Id"),
                                parameterWithName("prefix").description("Project Site filename additional prefix").optional()
                        ),
                        requestParts(
                                partWithName("file").description("Project Site's image file")
                        ),
                        requestPartBody("file"),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void downloadImage() throws Exception {
        ProjectSite projectSite = createProjectSiteEntity("Sample Title");
        projectSite = projectSiteRepository.save(projectSite);

        this.mockMvc
                .perform(fileUpload("/project-site/{id}/upload/{prefix}", projectSite.getId(), "prefix")
                        .file(
                                new MockMultipartFile(
                                        "file",
                                        "corelate-logo.png",
                                        "multipart/form-data",
                                        this.getClass().getClassLoader().getResourceAsStream("files/corelate-logo.png"))));

        ProjectSite withImageProjectSite = projectSiteRepository.findOneById(projectSite.getId());

        this.mockMvc
                .perform(get("/project-site/download/{uid}",
                        withImageProjectSite
                                .getFiles()
                                .stream()
                                .findFirst()
                                .get()))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.IMAGE_PNG))
                .andDo(document("projectSiteResource/downloadImage",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("uid").description("Project Site filename identifier")
                        )));
    }

    @Test
    @Transactional
    public void publish() throws Exception {
        ProjectSite projectSite = createProjectSiteEntity("Sample Title");
        projectSite.setPublished(Boolean.FALSE);

        projectSite = projectSiteRepository.save(projectSite);

        this.mockMvc
                .perform(put("/project-site/{id}/publish", projectSite.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("projectSiteResource/publish",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Project Site ID")
                        ),
                        responseFields(responseHeaderFields)
                ));

        assertTrue(projectSiteRepository.findOneById(projectSite.getId()).getPublished());
    }

    @Test
    @Transactional
    public void unpublish() throws Exception {
        ProjectSite projectSite = createProjectSiteEntity("Sample Title");
        projectSite.setPublished(Boolean.TRUE);

        projectSite = projectSiteRepository.save(projectSite);

        this.mockMvc
                .perform(put("/project-site/{id}/unpublish", projectSite.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("projectSiteResource/unpublish",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Project Site ID")
                        ),
                        responseFields(responseHeaderFields)
                ));

        assertFalse(projectSiteRepository.findOneById(projectSite.getId()).getPublished());
    }

    private ProjectSiteDto createProjectSiteDto(String title) {
        ProjectSiteDto projectSiteDto = new ProjectSiteDto();
        projectSiteDto.setTitle(title);
        projectSiteDto.setContent("Sample Content");
        projectSiteDto.setExcerpt("Sample Content Summary");
        projectSiteDto.setOpeningDate(LocalDateTime.of(2017, Month.JUNE, 12, 10, 10, 30).atZone(ZoneId.systemDefault()));
        projectSiteDto.setClosingDate(LocalDateTime.of(2017, Month.DECEMBER, 30, 10, 10, 30).atZone(ZoneId.systemDefault()));
        projectSiteDto.setPublished(Boolean.TRUE);
        projectSiteDto.setAuthor("Sample Author");
        projectSiteDto.setReleaseDate(LocalDateTime.now().atZone(ZoneId.systemDefault()));
        projectSiteDto.setButtons(Lists.newArrayList(createProjectSiteButtonDto("HOME")));

        return projectSiteDto;
    }

    private ProjectSiteButtonDto createProjectSiteButtonDto(String label) {
        ProjectSiteButtonDto projectSiteButtonDto = new ProjectSiteButtonDto();
        projectSiteButtonDto.setLabel(label);
        projectSiteButtonDto.setLink("https://isv.corelate.net/");
        projectSiteButtonDto.setPublicAccess(Boolean.TRUE);

        return projectSiteButtonDto;
    }

    private ProjectSite createProjectSiteEntity(String title) {
        ProjectSite projectSite = new ProjectSite();
        projectSite.setTitle(title);
        projectSite.setContent("Sample Content");
        projectSite.setExcerpt("Sample Content Summary");
        projectSite.setOpeningDate(LocalDateTime.of(2017, Month.JUNE, 12, 10, 10, 30));
        projectSite.setClosingDate(LocalDateTime.of(2017, Month.DECEMBER, 30, 10, 10, 30));
        projectSite.setPublished(Boolean.TRUE);
        projectSite.setAuthor("Sample Author");
        projectSite.setReleaseDate(LocalDateTime.now());
        projectSite.setButtons(Lists.newArrayList(createProjectSiteButton("HOME")));

        return projectSite;
    }

    private ProjectSiteButton createProjectSiteButton(String label) {
        ProjectSiteButton projectSiteButton = new ProjectSiteButton();
        projectSiteButton.setLabel(label);
        projectSiteButton.setLink("https://isv.corelate.net/");
        projectSiteButton.setPublicAccess(Boolean.TRUE);

        return projectSiteButton;
    }
}
