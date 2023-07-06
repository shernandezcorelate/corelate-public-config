package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.Application;
import com.beacon.corelate.cms.dto.BlockDto;
import com.beacon.corelate.cms.dto.BlockPanelContentDto;
import com.beacon.corelate.cms.dto.BlockPanelDto;
import com.beacon.corelate.cms.model.Block;
import com.beacon.corelate.cms.model.BlockPanel;
import com.beacon.corelate.cms.model.BlockPanelContent;
import com.beacon.corelate.cms.reference.BlockTemplate;
import com.beacon.corelate.cms.reference.BlockType;
import com.beacon.corelate.cms.repository.jpa.BlocksRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
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
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
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
 * Created by jlava on 9/14/17.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class BlocksResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private BlocksRepository blocksRepository;

    public static final FieldDescriptor[] requestHeaderFields = new FieldDescriptor[] {
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("blockPanels").description("Block Panels list"),
            fieldWithPath("blockPanels[].id").description("Block Panel id").optional().ignored(),
            fieldWithPath("blockPanels[].template").description("Block Panel template"),
            fieldWithPath("blockPanels[].position").description("Block Panel position"),
            fieldWithPath("blockPanels[].contents").description("Block Panel contents"),
            fieldWithPath("blockPanels[].contents[].position").description("Block Panel content position"),
            fieldWithPath("blockPanels[].contents[].content").description("Block Panel content type"),
            fieldWithPath("blockPanels[].createdBy").description("Block Panel created by").optional().ignored(),
            fieldWithPath("blockPanels[].createdDate").description("Block Panel created date").optional().ignored(),
            fieldWithPath("blockPanels[].updatedBy").description("Block Panel updated by").optional().ignored(),
            fieldWithPath("blockPanels[].updatedDate").description("Block Panel updated date").optional().ignored(),
            fieldWithPath("createdBy").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").description("Updated Date Time").optional().ignored()
    };

    public static final FieldDescriptor[] responseHeaderFields = new FieldDescriptor[] {
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("blockPanels").description("Block Panels list"),
            fieldWithPath("blockPanels[].id").description("Block Panel id").optional().ignored(),
            fieldWithPath("blockPanels[].template").description("Block Panel template"),
            fieldWithPath("blockPanels[].position").description("Block Panel position"),
            fieldWithPath("blockPanels[].contents").description("Block Panel contents"),
            fieldWithPath("blockPanels[].contents[].position").description("Block Panel content position"),
            fieldWithPath("blockPanels[].contents[].content").description("Block Panel content type"),
            fieldWithPath("blockPanels[].createdBy").description("Block Panel created by").optional().ignored(),
            fieldWithPath("blockPanels[].createdDate").description("Block Panel created date").optional().ignored(),
            fieldWithPath("blockPanels[].updatedBy").description("Block Panel updated by").optional().ignored(),
            fieldWithPath("blockPanels[].updatedDate").description("Block Panel updated date").optional().ignored(),
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
    public void getBlocksList() throws Exception {
        this.mockMvc
                .perform(get("/blocks"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.blockPanels").isNotEmpty())
                .andExpect(jsonPath("$.blockPanels[0].position", is(1)))
                .andExpect(jsonPath("$.blockPanels[0].template").isNotEmpty())
                .andExpect(jsonPath("$.blockPanels[0].contents[0].position", is(1)))
                .andExpect(jsonPath("$.blockPanels[0].contents[0].content").isNotEmpty())
                .andDo(print())
                .andDo(document("blocksResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void updateBlock() throws Exception {
        BlockPanelContent blockPanelContent = createBlockPanelContentEntity(1, BlockType.CONTACT_FORM);

        BlockPanel blockPanel1 = createBlockPanelEntity(2, BlockTemplate.ONE_COLUMN);
        BlockPanel blockPanel2 = createBlockPanelEntity(1, BlockTemplate.TAB);
        blockPanel2.getContents().add(blockPanelContent);
        blockPanel2.getContents().add(createBlockPanelContentEntity(2, BlockType.FAQ));

        Block block = new Block();
        block.getBlockPanels().add(blockPanel1);
        block.getBlockPanels().add(blockPanel2);

        blocksRepository.save(block);

        BlockPanelDto blockPanelDto1 = createBlockPanelDto(2, BlockTemplate.ONE_COLUMN);
        blockPanelDto1.setId(blockPanel1.getId());

        BlockPanelDto blockPanelDto4 = createBlockPanelDto(4, BlockTemplate.ONE_COLUMN);

        BlockPanelDto blockPanelDto2 = createBlockPanelDto(3, BlockTemplate.TAB);
        blockPanelDto2.setId(blockPanel2.getId());
        blockPanelDto2.getContents().add(createBlockPanelContentDto(2, BlockType.ANNOUNCEMENTS));
        blockPanelDto2.getContents().add(createBlockPanelContentDto(1, BlockType.CONTACT_INFO));
        blockPanelDto2.getContents()
                    .removeIf(content -> content.getPosition() == 3 && content.getContent() == BlockType.ANNOUNCEMENTS);

        BlockPanelDto blockPanelDto3 = createBlockPanelDto(1, BlockTemplate.TWO_COLUMNS);

        BlockDto blockDto = new BlockDto();
        blockDto.getBlockPanels().add(blockPanelDto2);
        blockDto.getBlockPanels().add(blockPanelDto3);
        blockDto.getBlockPanels().add(blockPanelDto1);
        blockDto.getBlockPanels().add(blockPanelDto4);

        this.mockMvc
                .perform(put("/blocks")
                        .content(objectMapper.writeValueAsString(blockDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.blockPanels", hasSize(4)))
                .andExpect(jsonPath("$.blockPanels[0].template", is(blockPanelDto3.getTemplate().toString())))
                .andExpect(jsonPath("$.blockPanels[0].position", is(blockPanelDto3.getPosition())))
//                .andExpect(jsonPath("$.blockPanels[1].template", is(blockPanelDto2.getTemplate().toString())))
//                .andExpect(jsonPath("$.blockPanels[1].contents", hasSize(2)))
                .andExpect(jsonPath("$.blockPanels[0].contents[0].content", is(BlockType.ANNOUNCEMENTS.toString())))
                .andExpect(jsonPath("$.blockPanels[0].contents[0].position").isNotEmpty())
                .andDo(print())
                .andDo(document("blocksResource/update",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    private BlockPanelDto createBlockPanelDto(int position, BlockTemplate template) {
        BlockPanelContentDto blockPanelContentDto1 = createBlockPanelContentDto(3, BlockType.ANNOUNCEMENTS);

        BlockPanelDto blockPanelDto = new BlockPanelDto();
        blockPanelDto.setTemplate(template);
        blockPanelDto.setPosition(Integer.valueOf(position));
        blockPanelDto.getContents().add(blockPanelContentDto1);

        return blockPanelDto;
    }

    private BlockPanel createBlockPanelEntity(int position, BlockTemplate template) {
        BlockPanelContent blockPanelContent1 = createBlockPanelContentEntity(3, BlockType.ANNOUNCEMENTS);

        BlockPanel blockPanel = new BlockPanel();
        blockPanel.setTemplate(template);
        blockPanel.setPosition(Integer.valueOf(position));
        blockPanel.getContents().add(blockPanelContent1);

        return blockPanel;
    }

    private BlockPanelContent createBlockPanelContentEntity(int position, BlockType content) {
        BlockPanelContent blockContent = new BlockPanelContent();
        blockContent.setContent(content);
        blockContent.setPosition(new Integer(position));

        return blockContent;
    }

    private BlockPanelContentDto createBlockPanelContentDto(int position, BlockType content) {
        BlockPanelContentDto blockPanelContentDto = new BlockPanelContentDto();
        blockPanelContentDto.setContent(content);
        blockPanelContentDto.setPosition(new Integer(position));

        return blockPanelContentDto;
    }
}
