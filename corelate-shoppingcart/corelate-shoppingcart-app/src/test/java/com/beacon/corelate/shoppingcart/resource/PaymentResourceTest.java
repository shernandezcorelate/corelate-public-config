package com.beacon.corelate.shoppingcart.resource;

import com.beacon.corelate.shoppingcart.Application;
import com.beacon.corelate.shoppingcart.dto.ItemDto;
import com.beacon.corelate.shoppingcart.dto.PaymentDto;
import com.beacon.corelate.shoppingcart.model.Item;
import com.beacon.corelate.shoppingcart.model.Payment;
import com.beacon.corelate.shoppingcart.repository.jpa.ItemRepository;
import com.beacon.corelate.shoppingcart.repository.jpa.PaymentRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.assertj.core.util.Sets;
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
import java.util.Set;

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
public class PaymentResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    private static final FieldDescriptor[] requestFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("amount").description("Amount to be paid"),
            fieldWithPath("createdBy").type("String").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored(),
            fieldWithPath("items[].id").description("Item ID"),
            fieldWithPath("items[].createdBy").type("String").description("Item Created By").optional().ignored(),
            fieldWithPath("items[].createdDate").type("ZonedDateTime").description("Item Created Date Time").optional().ignored(),
            fieldWithPath("items[].updatedBy").type("String").description("Item Updated By").optional().ignored(),
            fieldWithPath("items[].updatedDate").type("ZonedDateTime").description("Item Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("receiptNumber").description("Amount to be paid"),
            fieldWithPath("amount").description("Amount to be paid"),
            fieldWithPath("createdBy").type("String").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored(),
            fieldWithPath("items[].id").description("Item ID"),
            fieldWithPath("items[].requestor").description("Item Requestor Name"),
            fieldWithPath("items[].name").description("Item Name"),
            fieldWithPath("items[].description").description("Item Description"),
            fieldWithPath("items[].amount").description("Item Amount"),
            fieldWithPath("items[].merchantId").description("Requestor Merchant Id (to be used on payment gateway)"),
            fieldWithPath("items[].processInstanceId").description("Process Instance Id (if item is from bpmn)"),
            fieldWithPath("items[].activityId").description("Activity Id (if item is from bpmn)"),
            fieldWithPath("items[].createdBy").type("String").description("Item Created By").optional().ignored(),
            fieldWithPath("items[].createdDate").type("ZonedDateTime").description("Item Created Date Time").optional().ignored(),
            fieldWithPath("items[].updatedBy").type("String").description("Item Updated By").optional().ignored(),
            fieldWithPath("items[].updatedDate").type("ZonedDateTime").description("Item Updated Date Time").optional().ignored()
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
    public void createPayment() throws Exception {
        this.mockMvc
                .perform(post("/payment")
                        .content(objectMapper.writeValueAsString(new PaymentDto()))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isMethodNotAllowed());
    }

    @Test
    @Transactional
    public void updatePayment() throws Exception {
        Payment payment = new Payment();
        payment = paymentRepository.save(payment);

        this.mockMvc
                .perform(put("/payment/{id}", payment.getId())
                        .content(objectMapper.writeValueAsString(new PaymentDto()))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isMethodNotAllowed());
    }

    @Test
    @Transactional
    public void deletePayment() throws Exception {
        Payment payment = new Payment();
        payment = paymentRepository.save(payment);

        this.mockMvc
                .perform(delete("/payment/{id}", payment.getId())
                        .content(objectMapper.writeValueAsString(new PaymentDto()))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isMethodNotAllowed());
    }

    @Test
    @Transactional
    public void getPayment() throws Exception {
        Item item = new Item();
        item.setRequestor("ISV CORELATE USER");
        item.setName("PLATFORM FEE");
        item.setDescription("CORELATE PLATFORM FEE");
        item.setAmount(new BigDecimal(300));
        item.setMerchantId("1000");
        item.setProcessInstanceId("3000");
        item.setActivityId("ACT-3000");

        item = itemRepository.save(item);

        Payment payment = new Payment();
        payment.setAmount(new BigDecimal(400));
        payment.setReceiptNumber("ABC123");
        payment.getItems().add(item);

        payment = paymentRepository.save(payment);

        this.mockMvc
                .perform(get("/payment/{id}", payment.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.id", is(payment.getId().intValue())))
                .andExpect(jsonPath("$.receiptNumber", is(payment.getReceiptNumber())))
                .andExpect(jsonPath("$.amount", is(payment.getAmount().intValue())))
                .andDo(document("paymentResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Payment's ID")
                        ),
                        responseFields(responseFields)));
    }

    @Test
    @Transactional
    public void pay() throws Exception {

        Item item = new Item();
        item.setRequestor("ISV CORELATE USER");
        item.setName("PLATFORM FEE");
        item.setDescription("CORELATE PLATFORM FEE");
        item.setAmount(new BigDecimal(300));
        item.setMerchantId("1000");
        item.setProcessInstanceId("3000");
        item.setActivityId("ACT-3000");

        item = itemRepository.save(item);

        Item item2 = new Item();
        item2.setRequestor("ISV CORELATE USER");
        item2.setName("PLATFORM SUPPORT FEE");
        item2.setDescription("CORELATE PLATFORM SUPPORT FEE");
        item2.setAmount(new BigDecimal(300));
        item2.setMerchantId("1000");
        item2.setProcessInstanceId("3001");
        item2.setActivityId("ACT-3001");

        item2 = itemRepository.save(item2);

        Set<ItemDto> payableItems = Sets.newHashSet();

        ItemDto itemDto = new ItemDto();
        itemDto.setId(item.getId());

        payableItems.add(itemDto);

        ItemDto itemDto2 = new ItemDto();
        itemDto2.setId(item2.getId());

        payableItems.add(itemDto2);

        PaymentDto paymentDto = new PaymentDto();
        paymentDto.setAmount(new BigDecimal(600));
        paymentDto.setItems(payableItems);

        this.mockMvc
                .perform(post("/payment/pay")
                        .content(objectMapper.writeValueAsString(paymentDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("paymentResource/pay",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(requestFields),
                        responseFields(responseFields)));
    }
}
