package com.beacon.corelate.shoppingcart.resource;

import com.beacon.corelate.shoppingcart.Application;
import com.beacon.corelate.shoppingcart.dto.ItemDto;
import com.beacon.corelate.shoppingcart.model.Item;
import com.beacon.corelate.shoppingcart.repository.jpa.ItemRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.assertj.core.util.Lists;
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

import java.math.BigDecimal;
import java.util.List;

import static org.hamcrest.Matchers.is;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.delete;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.put;
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
 * @author ddevera
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ItemResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private ItemRepository itemRepository;

    private static final FieldDescriptor[] requestHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("requestor").description("Requestor Name"),
            fieldWithPath("name").description("Item Name"),
            fieldWithPath("description").description("Item Description"),
            fieldWithPath("amount").description("Item Amount"),
            fieldWithPath("merchantId").description("Requestor Merchant Id (to be used on payment gateway)"),
            fieldWithPath("processInstanceId").description("Process Instance Id (if item is from bpmn)"),
            fieldWithPath("activityId").description("Activity Id (if item is from bpmn)"),
            fieldWithPath("createdBy").type("String").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("requestor").description("Requestor Name"),
            fieldWithPath("name").description("Item Name"),
            fieldWithPath("description").description("Item Description"),
            fieldWithPath("amount").description("Item Amount"),
            fieldWithPath("merchantId").description("Requestor Merchant Id (to be used on payment gateway)"),
            fieldWithPath("processInstanceId").description("Process Instance Id (if item is from bpmn)"),
            fieldWithPath("activityId").description("Activity Id (if item is from bpmn)"),
            fieldWithPath("createdBy").type("String").description("Created By"),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time"),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseHeaderFieldList = new FieldDescriptor[]{
            fieldWithPath("results[].id").optional().ignored(),
            fieldWithPath("results[].requestor").description("Requestor Name"),
            fieldWithPath("results[].name").description("Item Name"),
            fieldWithPath("results[].description").description("Item Description"),
            fieldWithPath("results[].amount").description("Item Amount"),
            fieldWithPath("results[].merchantId").description("Requestor Merchant Id (to be used on payment gateway)"),
            fieldWithPath("results[].processInstanceId").description("Process Instance Id (if item is from bpmn)"),
            fieldWithPath("results[].activityId").description("Activity Id (if item is from bpmn)"),
            fieldWithPath("results[].createdBy").type("String").description("Created By"),
            fieldWithPath("results[].createdDate").type("ZonedDateTime").description("Created Date Time"),
            fieldWithPath("results[].updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("results[].updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
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
    public void createItem() throws Exception {
        ItemDto itemDto = new ItemDto();
        itemDto.setRequestor("ISV CORELATE USER");
        itemDto.setName("PLATFORM FEE");
        itemDto.setDescription("CORELATE PLATFORM FEE");
        itemDto.setAmount(new BigDecimal(300));
        itemDto.setMerchantId("1000");
        itemDto.setProcessInstanceId("3000");
        itemDto.setActivityId("ACT-3000");

        this.mockMvc
                .perform(post("/item")
                        .content(objectMapper.writeValueAsString(itemDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.requestor", is(itemDto.getRequestor())))
                .andExpect(jsonPath("$.name", is(itemDto.getName())))
                .andExpect(jsonPath("$.description", is(itemDto.getDescription())))
                .andExpect(jsonPath("$.amount", is(itemDto.getAmount().intValue())))
                .andExpect(jsonPath("$.merchantId", is(itemDto.getMerchantId())))
                .andExpect(jsonPath("$.processInstanceId", is(itemDto.getProcessInstanceId())))
                .andExpect(jsonPath("$.activityId", is(itemDto.getActivityId())))
                .andDo(document("itemResource/create",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void updateItem() throws Exception {
        Item item = new Item();
        item.setName("UPDATE ITEM NAME");

        item = itemRepository.save(item);

        this.mockMvc
                .perform(put("/item/{id}", item.getId())
                        .content(objectMapper.writeValueAsString(new ItemDto()))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isMethodNotAllowed());
    }

    @Test
    @Transactional
    public void deleteItem() throws Exception {
        Item item = new Item();
        item.setName("DELETE ITEM NAME");

        item = itemRepository.save(item);

        this.mockMvc
                .perform(delete("/item/{id}", item.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isMethodNotAllowed());
    }

    @Test
    @Transactional
    public void getItem() throws Exception {
        Item item = new Item();
        item.setRequestor("ISV CORELATE USER");
        item.setName("PLATFORM FEE");
        item.setDescription("CORELATE PLATFORM FEE");
        item.setAmount(new BigDecimal(300));
        item.setMerchantId("1000");
        item.setProcessInstanceId("3000");
        item.setActivityId("ACT-3000");

        item = itemRepository.save(item);

        this.mockMvc
                .perform(get("/item/{id}", item.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.id", is(item.getId().intValue())))
                .andExpect(jsonPath("$.name", is(item.getName())))
                .andExpect(jsonPath("$.amount", is(item.getAmount().intValue())))
                .andDo(document("itemResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Item's ID")
                        ),
                        responseFields(responseHeaderFields)));

    }

    @Test
    @Transactional
    public void getItemList() throws Exception {
        Integer simulationCount = 5;

        for (Integer counter = 0; counter < simulationCount; counter++) {
            Item item = new Item();
            item.setRequestor("ISV CORELATE USER");
            item.setName("PLATFORM FEE " + counter);
            item.setDescription("CORELATE PLATFORM FEE " + counter);
            item.setAmount(new BigDecimal(300));
            item.setMerchantId("1000" + counter);
            item.setProcessInstanceId("3000" + counter);
            item.setActivityId("ACT-3000" + counter);

            itemRepository.save(item);
        }

        List<FieldDescriptor> responseFields = Lists.newArrayList(responseHeaderFieldList);
        responseFields.add(fieldWithPath("currentPage").description("Current page number"));
        responseFields.add(fieldWithPath("pageSize").description("Current page size"));
        responseFields.add(fieldWithPath("hasNextPage").description("List has another page"));
        responseFields.add(fieldWithPath("totalElements").description("Total List size"));

        this.mockMvc
                .perform(get("/item")
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.hasNextPage", is(false)))
                .andExpect(jsonPath("$.totalElements").isNotEmpty())
                .andDo(document("itemResource/list",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestParameters(
                                parameterWithName("page").optional().description("Page number"),
                                parameterWithName("size").optional().description("Page size"),
                                parameterWithName("sort").optional().description("Page sort")
                        ),
                        responseFields(responseFields)));

    }
}
