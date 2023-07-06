package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.Application;
import com.beacon.corelate.cms.dto.CarouselSlideDto;
import com.beacon.corelate.cms.model.CarouselSlide;
import com.beacon.corelate.cms.reference.LinkTrigger;
import com.beacon.corelate.cms.repository.jpa.CarouselSlideRepository;
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

import java.util.List;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertEquals;
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
 * @author ddevera
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CarouselSlideResourceTest {

    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private CarouselSlideRepository carouselSlideRepository;

    private static final FieldDescriptor[] requestHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("header").description("Carousel slide header label"),
            fieldWithPath("subHeader").description("Carousel slide sub header label"),
            fieldWithPath("link").description("Carousel slide link url"),
            fieldWithPath("linkTrigger").description("Carousel slide link trigger"),
            fieldWithPath("buttonLabel").description("Carousel slide button label"),
            fieldWithPath("published").description("Carousel slide published flag"),
            fieldWithPath("createdBy").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("header").description("Carousel slide header label"),
            fieldWithPath("subHeader").description("Carousel slide sub header label"),
            fieldWithPath("link").description("Carousel slide link url"),
            fieldWithPath("linkTrigger").description("Carousel slide link trigger"),
            fieldWithPath("buttonLabel").description("Carousel slide button label"),
            fieldWithPath("published").description("Carousel slide published flag"),
            fieldWithPath("author").type("String").description("Carousel slide author"),
            fieldWithPath("file").type("String").description("Carousel slide file name"),
            fieldWithPath("files").type("Array").description("Carousel slide file names"),
            fieldWithPath("createdBy").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseHeaderListFields = new FieldDescriptor[]{
            fieldWithPath("currentPage").description("Current page number"),
            fieldWithPath("pageSize").description("Current page size"),
            fieldWithPath("hasNextPage").description("List has another page"),
            fieldWithPath("totalElements").description("Total List size"),
            fieldWithPath("results[].id").optional().ignored(),
            fieldWithPath("results[].header").description("Carousel slide header label"),
            fieldWithPath("results[].subHeader").description("Carousel slide sub header label"),
            fieldWithPath("results[].link").description("Carousel slide link url"),
            fieldWithPath("results[].linkTrigger").description("Carousel slide link trigger"),
            fieldWithPath("results[].buttonLabel").description("Carousel slide button label"),
            fieldWithPath("results[].published").description("Carousel slide published flag"),
            fieldWithPath("results[].author").type("String").description("Carousel slide author"),
            fieldWithPath("results[].file").type("String").description("Carousel slide file name"),
            fieldWithPath("results[].files").type("Array").description("Carousel slide file names"),
            fieldWithPath("results[].createdBy").description("Created By").optional().ignored(),
            fieldWithPath("results[].createdDate").description("Created Date Time").optional().ignored(),
            fieldWithPath("results[].updatedBy").description("Updated By").optional().ignored(),
            fieldWithPath("results[].updatedDate").description("Updated Date Time").optional().ignored()
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
    public void createCarouselSlide() throws Exception {
        CarouselSlideDto carouselSlideDto = getTestCarouselSlideDto();

        this.mockMvc
                .perform(post("/carousel-slide")
                        .content(objectMapper.writeValueAsString(carouselSlideDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.id").isNotEmpty())
                .andExpect(jsonPath("$.buttonLabel", is(carouselSlideDto.getButtonLabel())))
                .andExpect(jsonPath("$.header", is(carouselSlideDto.getHeader())))
                .andExpect(jsonPath("$.linkTrigger", is(carouselSlideDto.getLinkTrigger().toString())))
                .andExpect(jsonPath("$.link", is(carouselSlideDto.getLink())))
                .andExpect(jsonPath("$.subHeader", is(carouselSlideDto.getSubHeader())))
                .andExpect(jsonPath("$.published", is(carouselSlideDto.getPublished())))
                .andDo(document("carouselSlideResource/create",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void updateCarouselSlide() throws Exception {
        CarouselSlide carouselSlide = new CarouselSlide();
        carouselSlide.setHeader("TEST HEADER");

        carouselSlide = carouselSlideRepository.save(carouselSlide);

        CarouselSlideDto updatedCarouselSlideDto = getTestCarouselSlideDto();

        this.mockMvc
                .perform(put("/carousel-slide/{id}", carouselSlide.getId())
                        .content(objectMapper.writeValueAsString(updatedCarouselSlideDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.id").isNotEmpty())
                .andExpect(jsonPath("$.buttonLabel", is(updatedCarouselSlideDto.getButtonLabel())))
                .andExpect(jsonPath("$.header", is(updatedCarouselSlideDto.getHeader())))
                .andExpect(jsonPath("$.linkTrigger", is(updatedCarouselSlideDto.getLinkTrigger().toString())))
                .andExpect(jsonPath("$.link", is(updatedCarouselSlideDto.getLink())))
                .andExpect(jsonPath("$.subHeader", is(updatedCarouselSlideDto.getSubHeader())))
                .andExpect(jsonPath("$.published", is(updatedCarouselSlideDto.getPublished())))
                .andDo(document("carouselSlideResource/update",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Carousel slide id")
                        ),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void getCarouselSlide() throws Exception {
        CarouselSlide carouselSlide = getTestCarouselSlide();

        carouselSlide = carouselSlideRepository.save(carouselSlide);
        this.mockMvc
                .perform(get("/carousel-slide/{id}", carouselSlide.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.id").isNotEmpty())
                .andDo(document("carouselSlideResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Carousel Slide ID")
                        ),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void getCarouselSlideList() throws Exception {
        Integer simulationCount = 5;

        for (Integer counter = 0; counter < simulationCount; counter++) {
            CarouselSlide carouselSlide = getTestCarouselSlide();
            carouselSlide.setHeader(carouselSlide.getHeader() + " " + counter);
            carouselSlide.setSubHeader(carouselSlide.getSubHeader() + " " + counter);

            carouselSlideRepository.save(carouselSlide);
        }


        this.mockMvc
                .perform(get("/carousel-slide?page=0&size=10&sort=id")
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(document("carouselSlideResource/list",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestParameters(
                                parameterWithName("page").optional().description("Page number"),
                                parameterWithName("size").optional().description("Page size"),
                                parameterWithName("sort").optional().description("Page sort")
                        ),
                        responseFields(responseHeaderListFields)));
    }

    @Test
    @Transactional
    public void deleteCarouselSlide() throws Exception {
        CarouselSlide carouselSlide = getTestCarouselSlide();

        carouselSlide = carouselSlideRepository.save(carouselSlide);

        this.mockMvc
                .perform(delete("/carousel-slide/{id}", carouselSlide.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("carouselSlideResource/delete",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Carousel Slide ID")
                        )
                ));

        assertEquals(Boolean.TRUE, carouselSlideRepository.findOneById(carouselSlide.getId()).getDeleted());
    }

    @Test
    @Transactional
    public void uploadImage() throws Exception {
        CarouselSlide carouselSlide = getTestCarouselSlide();
        carouselSlide = carouselSlideRepository.save(carouselSlide);

        this.mockMvc
                .perform(fileUpload("/carousel-slide/{id}/upload/{prefix}", carouselSlide.getId(), "prefix")
                        .file(
                                new MockMultipartFile(
                                        "file",
                                        "corelate-logo.png",
                                        "multipart/form-data",
                                        this.getClass().getClassLoader().getResourceAsStream("files/corelate-logo.png"))))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.header", is(carouselSlide.getHeader())))
                .andDo(document("carouselSlideResource/uploadImage",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Carousel Slide Id"),
                                parameterWithName("prefix").description("Carousel Slide filename additional prefix").optional()
                        ),
                        requestParts(
                                partWithName("file").description("Carousel Slide's image file")
                        ),
                        requestPartBody("file"),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void downloadImage() throws Exception {
        CarouselSlide carouselSlide = getTestCarouselSlide();
        carouselSlide = carouselSlideRepository.save(carouselSlide);

        this.mockMvc
                .perform(fileUpload("/carousel-slide/{id}/upload/{prefix}", carouselSlide.getId(), "prefix")
                        .file(
                                new MockMultipartFile(
                                        "file",
                                        "corelate-logo.png",
                                        "multipart/form-data",
                                        this.getClass().getClassLoader().getResourceAsStream("files/corelate-logo.png"))));

        CarouselSlide withImageCarouselSlide = carouselSlideRepository.findOneById(carouselSlide.getId());

        this.mockMvc
                .perform(get("/carousel-slide/download/{uid}",
                        withImageCarouselSlide
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
                                parameterWithName("uid").description("Carousel Slide filename identifier")
                        )));
    }

    @Test
    @Transactional
    public void getPublished() throws Exception {
        this.mockMvc
                .perform(get("/carousel-slide/published?page=0&size=10&sort=id")
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("carouselSlideResource/getPublished",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestParameters(
                                parameterWithName("page").optional().description("Page number"),
                                parameterWithName("size").optional().description("Page size"),
                                parameterWithName("sort").optional().description("Page sort")
                        ),
                        responseFields(responseHeaderListFields)
                ));
    }

    @Test
    @Transactional
    public void publish() throws Exception {
        CarouselSlide carouselSlide = getTestCarouselSlide();
        carouselSlide = carouselSlideRepository.save(carouselSlide);

        this.mockMvc
                .perform(put("/carousel-slide/{id}/publish", carouselSlide.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("carouselSlideResource/publish",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Carousel Slide ID")
                        ),
                        responseFields(responseHeaderFields)
                ));

        assertTrue(carouselSlideRepository.findOneById(carouselSlide.getId()).getPublished());
    }

    @Test
    @Transactional
    public void unpublish() throws Exception {
        CarouselSlide carouselSlide = getTestCarouselSlide();
        carouselSlide = carouselSlideRepository.save(carouselSlide);

        this.mockMvc
                .perform(put("/carousel-slide/{id}/unpublish", carouselSlide.getId())
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isOk())
                .andDo(document("carouselSlideResource/unpublish",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Carousel Slide ID")
                        ),
                        responseFields(responseHeaderFields)
                ));

        assertFalse(carouselSlideRepository.findOneById(carouselSlide.getId()).getPublished());
    }


    public CarouselSlideDto getTestCarouselSlideDto() {
        CarouselSlideDto carouselSlideDto = new CarouselSlideDto();
        carouselSlideDto.setButtonLabel("Save Button");
        carouselSlideDto.setHeader("Lorem Ipsum");
        carouselSlideDto.setLinkTrigger(LinkTrigger.IMAGE);
        carouselSlideDto.setLink("http://google.com");
        carouselSlideDto.setSubHeader("Lorem Ipsum Sub Header");
        carouselSlideDto.setPublished(Boolean.TRUE);

        return carouselSlideDto;
    }

    public CarouselSlide getTestCarouselSlide() {
        CarouselSlide carouselSlide = new CarouselSlide();
        carouselSlide.setButtonLabel("Save Button");
        carouselSlide.setHeader("Lorem Ipsum");
        carouselSlide.setLinkTrigger(LinkTrigger.IMAGE);
        carouselSlide.setLink("http://google.com");
        carouselSlide.setSubHeader("Lorem Ipsum Sub Header");
        carouselSlide.setPublished(Boolean.TRUE);

        return carouselSlide;
    }
}
