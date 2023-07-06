package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.Application;
import com.beacon.corelate.cms.dto.HelpSubTopicDto;
import com.beacon.corelate.cms.dto.HelpTopicDto;
import com.beacon.corelate.cms.model.HelpSubTopic;
import com.beacon.corelate.cms.model.HelpTopic;
import com.beacon.corelate.cms.repository.jpa.HelpTopicRepository;
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

import java.time.ZoneId;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.restdocs.request.RequestDocumentation.requestParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Created by epadolina on 7/31/17.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class HelpTopicResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private HelpTopicRepository helpTopicRepository;

    private static final FieldDescriptor[] requestHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("topic").description("Help topic title label"),
            fieldWithPath("author").description("Help topic file filename"),
            fieldWithPath("file").type("String").description("Help topic file filename").optional(),
            fieldWithPath("files").type("Array").description("Help topic files filename").optional(),
            fieldWithPath("published").description("Help topic published flag"),
            fieldWithPath("subTopics").description("Help sub topics"),
            fieldWithPath("subTopics[].id").optional().ignored(),
            fieldWithPath("subTopics[].topicId").optional().ignored(),
            fieldWithPath("subTopics[].title").description("Help sub topic title"),
            fieldWithPath("subTopics[].content").description("Help sub topic content"),
            fieldWithPath("subTopics[].mainTopic").description("Help sub topic main topic"),
            fieldWithPath("subTopics[].published").description("Help sub topic published flag"),
            fieldWithPath("subTopics[].createdBy").description("Help sub topic Created By").optional().ignored(),
            fieldWithPath("subTopics[].createdDate").description("Help sub topic Created Date Time").optional().ignored(),
            fieldWithPath("subTopics[].updatedBy").description("Help sub topic Updated By").optional().ignored(),
            fieldWithPath("subTopics[].updatedDate").description("Help sub topic Updated Date Time").optional().ignored(),
            fieldWithPath("createdBy").type("String").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("topic").description("Help topic title label"),
            fieldWithPath("author").description("Help topic file filename"),
            fieldWithPath("file").type("String").description("Help topic file filename").optional(),
            fieldWithPath("files").type("Array").description("Help topic files filename").optional(),
            fieldWithPath("published").description("Help topic published flag"),
            fieldWithPath("subTopics").description("Help sub topics"),
            fieldWithPath("subTopics[].id").optional().ignored(),
            fieldWithPath("subTopics[].topicId").optional().ignored(),
            fieldWithPath("subTopics[].title").description("Help sub topic title"),
            fieldWithPath("subTopics[].content").description("Help sub topic content"),
            fieldWithPath("subTopics[].mainTopic").description("Help sub topic main topic"),
            fieldWithPath("subTopics[].published").description("Help sub topic published flag"),
            fieldWithPath("subTopics[].createdBy").description("Help sub topic Created By"),
            fieldWithPath("subTopics[].createdDate").description("Help sub topic Created Date Time"),
            fieldWithPath("subTopics[].updatedBy").description("Help sub topic Updated By").optional().ignored(),
            fieldWithPath("subTopics[].updatedDate").description("Help sub topic Updated Date Time").optional().ignored(),
            fieldWithPath("createdBy").type("String").description("Created By"),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time"),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseEntityHeaderFields = new FieldDescriptor[] {
            fieldWithPath("hasNextPage").description("Has next page flag"),
            fieldWithPath("totalElements").description("Total elements"),
            fieldWithPath("results").description("Result list"),
            fieldWithPath("results[].id").optional().ignored(),
            fieldWithPath("results[].topic").description("Help topic title label"),
            fieldWithPath("results[].author").description("Help topic file filename"),
            fieldWithPath("results[].file").type("String").description("Help topic file filename").optional(),
            fieldWithPath("results[].files").type("Array").description("Help topic files filename").optional(),
            fieldWithPath("results[].published").description("Help topic published flag"),
            fieldWithPath("results[].subTopics").description("Help sub topics"),
            fieldWithPath("results[].subTopics[].id").optional().ignored(),
            fieldWithPath("results[].subTopics[].topicId").optional().ignored(),
            fieldWithPath("results[].subTopics[].title").description("Help sub topic title"),
            fieldWithPath("results[].subTopics[].content").description("Help sub topic content"),
            fieldWithPath("results[].subTopics[].mainTopic").description("Help sub topic main topic"),
            fieldWithPath("results[].subTopics[].published").description("Help sub topic published flag"),
            fieldWithPath("results[].subTopics[].createdBy").description("Help sub topic Created By"),
            fieldWithPath("results[].subTopics[].createdDate").description("Created Date Time"),
            fieldWithPath("results[].subTopics[].updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("results[].subTopics[].updatedDate").description("Updated Date Time").optional().ignored(),
            fieldWithPath("results[].createdBy").type("String").description("Created By"),
            fieldWithPath("results[].createdDate").type("ZonedDateTime").description("Created Date Time"),
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
    public void createHelpTopic() throws Exception {
        HelpTopicDto helpTopicDto = createHelpTopicDto();
        HelpSubTopicDto helpSubTopicDto = helpTopicDto.getSubTopics().get(0);

        this.mockMvc
                .perform(post("/help-topic")
                        .content(objectMapper.writeValueAsString(helpTopicDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.topic", is(helpTopicDto.getTopic())))
                .andExpect(jsonPath("$.published", is(helpTopicDto.getPublished())))
                .andExpect(jsonPath("$.subTopics[0].content", is(helpSubTopicDto.getContent())))
                .andExpect(jsonPath("$.subTopics[0].title", is(helpSubTopicDto.getTitle())))
                .andExpect(jsonPath("$.subTopics[0].mainTopic", is(helpSubTopicDto.getMainTopic())))
                .andExpect(jsonPath("$.subTopics[0].published", is(helpSubTopicDto.getPublished())))
                .andDo(document("helpTopicResource/create",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional(readOnly = true)
    public void getListHelpTopic() throws Exception {
        HelpTopic helpTopic1 = createHelpTopicEntity();
        HelpTopic helpTopic2 = createHelpTopicEntity();
        helpTopic2.setTopic("Lorem Ipsum New Help Topic");
        helpTopicRepository.save(Lists.newArrayList(helpTopic1, helpTopic2));

        this.mockMvc
                .perform(get("/help-topic")
                        .param("page", "0")
                        .param("size", "20")
                        .param("sort", "ASC"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.totalElements", is(2)))
                .andDo(print())
                .andDo(document("helpTopicResource/getList",
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
    public void getPublishedHelpTopic() throws Exception {
        HelpTopic helpTopic1 = createHelpTopicEntity();
        helpTopic1.setPublished(Boolean.FALSE);
        HelpTopic helpTopic2 = createHelpTopicEntity();
        helpTopic2.setTopic("Lorem Ipsum New Help Topic");
        helpTopicRepository.save(Lists.newArrayList(helpTopic1, helpTopic2));

        this.mockMvc
                .perform(get("/help-topic/published")
                        .param("page", "0")
                        .param("size", "20")
                        .param("sort", "ASC"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.totalElements", is(1)))
                .andDo(print())
                .andDo(document("helpTopicResource/getPublishedHelpTopic",
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
    public void getHelpTopic() throws Exception {
        HelpTopic helpTopic = helpTopicRepository.save(createHelpTopicEntity());
        HelpSubTopic helpSubTopic = helpTopic.getSubTopics().get(0);

        this.mockMvc
                .perform(get("/help-topic/{id}", helpTopic.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.topic", is(helpTopic.getTopic())))
                .andExpect(jsonPath("$.published", is(helpTopic.getPublished())))
                .andExpect(jsonPath("$.subTopics[0].content", is(helpSubTopic.getContent())))
                .andExpect(jsonPath("$.subTopics[0].title", is(helpSubTopic.getTitle())))
                .andExpect(jsonPath("$.subTopics[0].mainTopic", is(helpSubTopic.getMainTopic())))
                .andExpect(jsonPath("$.subTopics[0].published", is(helpSubTopic.getPublished())))
                .andDo(print())
                .andDo(document("helpTopicResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Help Topic id")
                        ),
                        responseFields(responseHeaderFields)));

    }

    @Test
    @Transactional
    public void updateHelpTopic() throws Exception {
        HelpTopic helpTopic = helpTopicRepository.save(createHelpTopicEntity());

        HelpTopicDto helpTopicDto = createHelpTopicDto();
        HelpSubTopicDto helpSubTopicDto = helpTopicDto.getSubTopics().get(0);
        helpTopicDto.setTopic("New Help Topic");
        helpTopicDto.setId(helpTopic.getId());
        helpTopicDto.setCreatedBy(helpTopic.getCreatedBy());
        helpTopicDto.setCreatedDate(helpTopic.getCreatedDate().atZone(ZoneId.systemDefault()));

        this.mockMvc
                .perform(put("/help-topic/{id}", helpTopic.getId())
                        .content(objectMapper.writeValueAsString(helpTopicDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.topic", is(helpTopicDto.getTopic())))
                .andExpect(jsonPath("$.published", is(helpTopicDto.getPublished())))
                .andExpect(jsonPath("$.subTopics[0].content", is(helpSubTopicDto.getContent())))
                .andExpect(jsonPath("$.subTopics[0].title", is(helpSubTopicDto.getTitle())))
                .andExpect(jsonPath("$.subTopics[0].mainTopic", is(helpSubTopicDto.getMainTopic())))
                .andExpect(jsonPath("$.subTopics[0].published", is(helpSubTopicDto.getPublished())))
                .andDo(print())
                .andDo(document("helpTopicResource/update",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Help Topic id")
                        ),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));

    }

    @Test
    @Transactional
    public void deleteHelpTopic() throws Exception {
        HelpTopic helpTopic = helpTopicRepository.save(createHelpTopicEntity());
        this.mockMvc
                .perform(delete("/help-topic/{id}", helpTopic.getId()))
                .andDo(print())
                .andDo(document("helpTopicResource/delete",
                        preprocessRequest(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Help Topic id")
                        )));
    }

    @Test
    @Transactional
    public void publish() throws Exception {
        HelpTopic helpTopic = createHelpTopicEntity();
        helpTopic.setPublished(Boolean.FALSE);

        helpTopic = helpTopicRepository.save(helpTopic);

        this.mockMvc
                .perform(put("/help-topic/{id}/publish", helpTopic.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("helpTopicResource/publish",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Help Topic ID")
                        ),
                        responseFields(responseHeaderFields)
                ));

        assertTrue(helpTopicRepository.findOneById(helpTopic.getId()).getPublished());
    }

    @Test
    @Transactional
    public void unpublish() throws Exception {
        HelpTopic helpTopic = createHelpTopicEntity();
        helpTopic.setPublished(Boolean.TRUE);

        helpTopic = helpTopicRepository.save(helpTopic);

        this.mockMvc
                .perform(put("/help-topic/{id}/unpublish", helpTopic.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("helpTopicResource/unpublish",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Help Topic ID")
                        ),
                        responseFields(responseHeaderFields)
                ));

        assertFalse(helpTopicRepository.findOneById(helpTopic.getId()).getPublished());
    }

    private HelpTopicDto createHelpTopicDto() {
        HelpTopicDto helpTopicDto = new HelpTopicDto();
        helpTopicDto.setTopic("Lorem Ipsum Help Topic");
        helpTopicDto.setPublished(Boolean.TRUE);
        helpTopicDto.setAuthor("SYSTEM");

        HelpSubTopicDto helpSubTopicDto = new HelpSubTopicDto();
        helpSubTopicDto.setContent("<html>Hello World</html>");
        helpSubTopicDto.setTitle("Lorem Ipsum Title");
        helpSubTopicDto.setMainTopic("Lorem Ipsum Help Topic");
        helpSubTopicDto.setPublished(Boolean.TRUE);
        helpTopicDto.setSubTopics(Lists.newArrayList(helpSubTopicDto));
        return  helpTopicDto;
    }

    private HelpTopic createHelpTopicEntity() {
        HelpTopic helpTopic = new HelpTopic();
        helpTopic.setTopic("Lorem Ipsum Help Topic");
        helpTopic.setPublished(Boolean.TRUE);
        helpTopic.setAuthor("SYSTEM");

        HelpSubTopic helpSubTopic = new HelpSubTopic();
        helpSubTopic.setContent("<html>Hello World</html>");
        helpSubTopic.setTitle("Lorem Ipsum Title");
        helpSubTopic.setMainTopic("Lorem Ipsum Help Topic");
        helpSubTopic.setPublished(Boolean.TRUE);
        helpTopic.setSubTopics(Lists.newArrayList(helpSubTopic));
        return helpTopic;
    }
}
