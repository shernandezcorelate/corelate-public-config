package com.beacon.corelate.catalog.resource;

import com.beacon.corelate.catalog.Application;
import com.beacon.corelate.catalog.dto.CatalogDto;
import com.beacon.corelate.catalog.dto.CatalogEntryDto;
import com.beacon.corelate.catalog.dto.CatalogFormDto;
import com.beacon.corelate.catalog.dto.CatalogFormRowEntry;
import com.beacon.corelate.catalog.model.Catalog;
import com.beacon.corelate.catalog.model.CatalogEntry;
import com.beacon.corelate.catalog.repository.jpa.CatalogRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Lists;
import org.assertj.core.util.Sets;
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

import java.time.ZoneId;
import java.util.Set;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
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
 * Created by epadolina on 8/8/17.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CatalogResourceTest {
    @Rule
    public final JUnitRestDocumentation restDocumentation = new JUnitRestDocumentation("target/generated-snippets");

    private MockMvc mockMvc;

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private CatalogRepository catalogRepository;


    private static final FieldDescriptor[] requestHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("key").description("Catalog key"),
            fieldWithPath("label").description("Catalog label"),
            fieldWithPath("entries").description("Catalog entries"),
            fieldWithPath("entries[].fieldName").description("Catalog entry field name"),
            fieldWithPath("entries[].value").description("Catalog entry field value"),
            fieldWithPath("entries[].index").description("Catalog entry field index"),
            fieldWithPath("createdBy").type("String").description("Created By").optional().ignored(),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time").optional().ignored(),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseHeaderFields = new FieldDescriptor[]{
            fieldWithPath("id").optional().ignored(),
            fieldWithPath("key").description("Catalog key"),
            fieldWithPath("label").description("Catalog label"),
            fieldWithPath("entries").description("Catalog entries"),
            fieldWithPath("entries[].fieldName").description("Catalog entry field name"),
            fieldWithPath("entries[].value").description("Catalog entry field value"),
            fieldWithPath("entries[].index").description("Catalog entry field index"),
            fieldWithPath("createdBy").type("String").description("Created By"),
            fieldWithPath("createdDate").type("ZonedDateTime").description("Created Date Time"),
            fieldWithPath("updatedBy").type("String").description("Updated By").optional().ignored(),
            fieldWithPath("updatedDate").type("ZonedDateTime").description("Updated Date Time").optional().ignored()
    };

    private static final FieldDescriptor[] responseEntityHeaderFields = new FieldDescriptor[] {
            fieldWithPath("results").description("Result list"),
            fieldWithPath("results[].id").optional().ignored(),
            fieldWithPath("results[].key").description("Catalog key"),
            fieldWithPath("results[].label").description("Catalog label"),
            fieldWithPath("results[].entries").description("Catalog entries"),
            fieldWithPath("results[].entries[].fieldName").description("Catalog entry field name"),
            fieldWithPath("results[].entries[].value").description("Catalog entry field value"),
            fieldWithPath("results[].entries[].index").description("Catalog entry field index"),
            fieldWithPath("results[].createdBy").description("Catalog created by"),
            fieldWithPath("results[].createdDate").description("Catalog created date time"),
            fieldWithPath("results[].updatedBy").type("String").description("Catalog updated by").optional().ignored(),
            fieldWithPath("results[].updatedDate").type("ZonedDateTime").description("Catalog updated date time").optional().ignored(),
            fieldWithPath("hasNextPage").description("Has next page flag"),
            fieldWithPath("totalElements").description("Total elements"),
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
    public void createCatalog() throws Exception {
        CatalogDto catalogDto = createCatalogDto("COUNTRY", "Country");
        catalogDto.setEntries(Sets.newHashSet(Lists.newArrayList(
                createCatalogEntryDto("description", "It's more fun in the Philippines", 1),
                createCatalogEntryDto("value", "Philippines", 2),
                createCatalogEntryDto("code", "PH", 3))));

        this.mockMvc
                .perform(post("/catalog")
                        .content(objectMapper.writeValueAsString(catalogDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.key", is(catalogDto.getKey())))
                .andExpect(jsonPath("$.label", is(catalogDto.getLabel())))
                .andExpect(jsonPath("$.entries", hasSize(3)))
                .andDo(document("catalogResource/create",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void saveCatalog() throws Exception {
        CatalogFormDto formDto = new CatalogFormDto();
        formDto.setKey("COUNTRY");
        formDto.setLabel("Country");
        formDto.setRowEntries(Lists.newArrayList(
                createRowEntry(Sets.newHashSet(Lists.newArrayList(
                        createCatalogEntryDto("description", "It's more fun in the Philippines", 1),
                        createCatalogEntryDto("value", "Philippines", 2),
                        createCatalogEntryDto("code", "PH", 3)
                ))),
                createRowEntry(Sets.newHashSet(Lists.newArrayList(
                        createCatalogEntryDto("description", "Amazing Thailand", 1),
                        createCatalogEntryDto("value", "Thailand", 2),
                        createCatalogEntryDto("code", "TH", 3)
                ))),
                createRowEntry(Sets.newHashSet(Lists.newArrayList(
                        createCatalogEntryDto("description", "The place that loves you back", 1),
                        createCatalogEntryDto("value", "Philadelphia", 2),
                        createCatalogEntryDto("code", "PHL", 3)
                )))
        ));

        this.mockMvc
                .perform(post("/catalog/save")
                        .content(objectMapper.writeValueAsString(formDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$", hasSize(3)))
                .andDo(document("catalogResource/save",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestFields(
                                fieldWithPath("key").description("Catalog key"),
                                fieldWithPath("label").description("Catalog label"),
                                fieldWithPath("rowEntries").description("Catalog row entries"),
                                fieldWithPath("rowEntries[].entries").description("Catalog row field entries"),
                                fieldWithPath("rowEntries[].entries[].fieldName").description("Catalog row entry field name"),
                                fieldWithPath("rowEntries[].entries[].value").description("Catalog row entry field value"),
                                fieldWithPath("rowEntries[].entries[].index").description("Catalog row entry field index")
                        ),
                        responseFields(
                                fieldWithPath("[].id").optional().ignored(),
                                fieldWithPath("[].key").description("Catalog key"),
                                fieldWithPath("[].label").description("Catalog label"),
                                fieldWithPath("[].entries").description("Catalog entries"),
                                fieldWithPath("[].entries[].fieldName").description("Catalog entry field name"),
                                fieldWithPath("[].entries[].value").description("Catalog entry field value"),
                                fieldWithPath("[].entries[].index").description("Catalog entry field index"),
                                fieldWithPath("[].createdBy").description("Created by"),
                                fieldWithPath("[].createdDate").description("Created date"),
                                fieldWithPath("[].updatedBy").description("Updated by"),
                                fieldWithPath("[].updatedDate").description("Updated date")
                        )));
    }

    @Test
    @Transactional
    public void saveCatalogFromFile() throws Exception {
        this.mockMvc
                .perform(fileUpload("/catalog/upload")
                .file(new MockMultipartFile("file", "test-file", "multipart/form-data",
                        this.getClass().getClassLoader().getResourceAsStream("catalog/test.csv")))
                .param("key", "BOOKS")
                .param("label", "Books"))
                .andDo(print())
                .andDo(document("catalogResource/upload",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestParts(
                          partWithName("file").description("Catalog file")
                        ),
                        requestPartBody("file"),
                        requestParameters(
                                parameterWithName("key").description("Catalog key"),
                                parameterWithName("label").description("Catalog label")
                        ),
                        responseFields(
                                fieldWithPath("[].id").optional().ignored(),
                                fieldWithPath("[].key").description("Catalog key"),
                                fieldWithPath("[].label").description("Catalog label"),
                                fieldWithPath("[].entries").description("Catalog entries"),
                                fieldWithPath("[].entries[].fieldName").description("Catalog entry field name"),
                                fieldWithPath("[].entries[].value").description("Catalog entry field value"),
                                fieldWithPath("[].entries[].index").description("Catalog entry field index"),
                                fieldWithPath("[].createdBy").description("Created by"),
                                fieldWithPath("[].createdDate").description("Created date"),
                                fieldWithPath("[].updatedBy").description("Updated by"),
                                fieldWithPath("[].updatedDate").description("Updated date")
                        )));
    }

    @Test
    @Transactional(readOnly = true)
    public void getListCatalog() throws Exception {
        Catalog catalog1 = createCatalogEntity("COUNTRY", "Country");
        catalog1.setEntries(Sets.newHashSet(Lists.newArrayList(
                createCatalogEntryEntity("description", "It's more fun in the Philippines", 1),
                createCatalogEntryEntity("value", "Philippines", 2),
                createCatalogEntryEntity("code", "PH", 3))));

        Catalog catalog2 = createCatalogEntity("COUNTRY", "Country");
        catalog2.setEntries(Sets.newHashSet(Lists.newArrayList(
                createCatalogEntryEntity("description", "Amazing Thailand", 1),
                createCatalogEntryEntity("value", "Thailand", 2),
                createCatalogEntryEntity("code", "TH", 3))));

        catalogRepository.save(Lists.newArrayList(catalog1, catalog2));

        this.mockMvc
                .perform(get("/catalog")
                        .param("page", "0")
                        .param("size", "20")
                        .param("sort", "ASC"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.totalElements", is(2)))
                .andExpect(jsonPath("$.results[0].entries", hasSize(3)))
                .andExpect(jsonPath("$.results[1].entries", hasSize(3)))
                .andDo(print())
                .andDo(document("catalogResource/getList",
                        preprocessResponse(prettyPrint()),
                        requestParameters(
                                parameterWithName("page").description("Page number"),
                                parameterWithName("size").description("Page size"),
                                parameterWithName("sort").description("Sort option")
                        ),
                        responseFields(responseEntityHeaderFields)));
    }

    @Test
    public void searchCatalog() throws Exception {
        Catalog catalog1 = createCatalogEntity("BOOKS", "Books");
        catalog1.setEntries(Sets.newHashSet(Lists.newArrayList(
                createCatalogEntryEntity("description", "Book 1", 1),
                createCatalogEntryEntity("value", "Harry Potter", 2),
                createCatalogEntryEntity("code", "BOOK1", 3))));

        Catalog catalog2 = createCatalogEntity("BOOKS", "Books");
        catalog2.setEntries(Sets.newHashSet(Lists.newArrayList(
                createCatalogEntryEntity("description", "Book 2", 1),
                createCatalogEntryEntity("value", "Game of Thrones", 2),
                createCatalogEntryEntity("code", "BOOK2", 3))));

        Catalog catalog3 = createCatalogEntity("BOOKS", "Books");
        catalog3.setEntries(Sets.newHashSet(Lists.newArrayList(
                createCatalogEntryEntity("description", "Book 3", 1),
                createCatalogEntryEntity("value", "A Song of Ice and Fire", 2),
                createCatalogEntryEntity("code", "BOOK3", 3))));

        Catalog catalog4 = createCatalogEntity("HEROES", "Hero");
        catalog4.setEntries(Sets.newHashSet(Lists.newArrayList(
                createCatalogEntryEntity("description", "Dr Jose Rizal", 1),
                createCatalogEntryEntity("value", "Jose Rizal", 2),
                createCatalogEntryEntity("code", "JR", 3))));

        catalogRepository.save(Lists.newArrayList(catalog1, catalog2, catalog3, catalog4));

        this.mockMvc
                .perform(get("/catalog")
                        .param("page", "0")
                        .param("size", "20")
                        .param("sort", "ASC")
                        .param("key", "BOOKS")
                        .param("fieldName", "value")
                        .param("value", "BOOK"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.totalElements", is(3)))
                .andExpect(jsonPath("$.results[0].entries", hasSize(3)))
                .andExpect(jsonPath("$.results[1].entries", hasSize(3)))
                .andExpect(jsonPath("$.results[2].entries", hasSize(3)))
                .andDo(print())
                .andDo(document("catalogResource/searchCatalog",
                        preprocessResponse(prettyPrint()),
                        requestParameters(
                                parameterWithName("page").description("Page number"),
                                parameterWithName("size").description("Page size"),
                                parameterWithName("sort").description("Sort option"),
                                parameterWithName("key").description("Catalog key"),
                                parameterWithName("fieldName").description("Catalog Field/Column Name"),
                                parameterWithName("value").description("Catalog Field/Column Value")
                        ),
                        responseFields(responseEntityHeaderFields)));

        catalogRepository.delete(Lists.newArrayList(catalog1, catalog2, catalog3, catalog4));
    }

    @Test
    public void searchCatalogByLuceneQuery() throws Exception {
        Catalog catalog = createCatalogEntity("CITY", "City");
        catalog.setEntries(Sets.newHashSet(Lists.newArrayList(
                createCatalogEntryEntity("description", "Antipolo City", 1),
                createCatalogEntryEntity("value", "Antipolo", 2),
                createCatalogEntryEntity("code", "ANT", 3))));
        catalogRepository.save(catalog);

        this.mockMvc
                .perform(get("/catalog")
                        .param("page", "0")
                        .param("size", "20")
                        .param("sort", "ASC")
                        .param("filter", "key:CITY"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.totalElements", is(1)))
                .andExpect(jsonPath("$.results[0].entries", hasSize(3)))
                .andDo(print())
                .andDo(document("catalogResource/searchCatalogByLuceneQuery",
                        preprocessResponse(prettyPrint()),
                        requestParameters(
                                parameterWithName("page").description("Page number"),
                                parameterWithName("size").description("Page size"),
                                parameterWithName("sort").description("Sort option"),
                                parameterWithName("filter").description("Lucene query")
                        ),
                        responseFields(responseEntityHeaderFields)));

        catalogRepository.delete(catalog);
    }

    @Test
    @Transactional(readOnly = true)
    public void getCatalog() throws Exception {
        Catalog catalog = createCatalogEntity("COUNTRY", "Country");
        catalog.setEntries(Sets.newHashSet(Lists.newArrayList(
                createCatalogEntryEntity("description", "It's more fun in the Philippines", 1),
                createCatalogEntryEntity("value", "Philippines", 2),
                createCatalogEntryEntity("code", "PH", 3))));
        catalog = catalogRepository.save(catalog);

        this.mockMvc
                .perform(get("/catalog/{id}", catalog.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.key", is(catalog.getKey())))
                .andExpect(jsonPath("$.label", is(catalog.getLabel())))
                .andExpect(jsonPath("$.entries", hasSize(3)))
                .andDo(print())
                .andDo(document("catalogResource/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Catalog id")
                        ),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void updateCatalog() throws Exception {
        Catalog catalog = createCatalogEntity("COUNTRY", "Country");
        catalog.setEntries(Sets.newHashSet(Lists.newArrayList(
                createCatalogEntryEntity("description", "It's more fun in the Philippines", 1),
                createCatalogEntryEntity("value", "Philippines", 2),
                createCatalogEntryEntity("code", "PH", 3))));
        catalog = catalogRepository.save(catalog);

        CatalogDto catalogDto = createCatalogDto("COUNTRY", "Country");
        catalogDto.setId(catalog.getId());
        catalogDto.setCreatedBy(catalog.getCreatedBy());
        catalogDto.setCreatedDate(catalog.getCreatedDate().atZone(ZoneId.systemDefault()));
        catalogDto.setEntries(Sets.newHashSet(Lists.newArrayList(
                createCatalogEntryDto("description", "Amazing Thailand", 1),
                createCatalogEntryDto("value", "Thailand", 2),
                createCatalogEntryDto("location", "Southeast Asia", 3),
                createCatalogEntryDto("code", "TH", 4))));

        this.mockMvc
                .perform(put("/catalog/{id}", catalog.getId())
                        .content(objectMapper.writeValueAsString(catalogDto))
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.key", is(catalog.getKey())))
                .andExpect(jsonPath("$.label", is(catalog.getLabel())))
                .andExpect(jsonPath("$.entries", hasSize(4)))
                .andDo(print())
                .andDo(document("catalogResource/update",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Catalog id")
                        ),
                        requestFields(requestHeaderFields),
                        responseFields(responseHeaderFields)));
    }

    @Test
    @Transactional
    public void deleteCatalog() throws Exception {
        Catalog catalog = createCatalogEntity("COUNTRY", "Country");
        catalog.setEntries(Sets.newHashSet(Lists.newArrayList(
                createCatalogEntryEntity("description", "It's more fun in the Philippines", 1),
                createCatalogEntryEntity("value", "Philippines", 2),
                createCatalogEntryEntity("code", "PH", 3))));
        catalog = catalogRepository.save(catalog);

        this.mockMvc
                .perform(delete("/catalog/{id}", catalog.getId()))
                .andDo(print())
                .andDo(document("catalogResource/delete",
                        preprocessRequest(prettyPrint()),
                        pathParameters(
                                parameterWithName("id").description("Catalog id")
                        )));
    }

    @Test
    @Transactional
    public void deleteCatalogByKey() throws Exception {
        Catalog catalog = createCatalogEntity("COUNTRY", "Country");
        catalog.setEntries(Sets.newHashSet(Lists.newArrayList(
                createCatalogEntryEntity("description", "It's more fun in the Philippines", 1),
                createCatalogEntryEntity("value", "Philippines", 2),
                createCatalogEntryEntity("code", "PH", 3))));
        catalog = catalogRepository.save(catalog);

        this.mockMvc
                .perform(delete("/catalog/delete/{key}", catalog.getKey()))
                .andDo(print())
                .andDo(document("catalogResource/deleteByKey",
                        preprocessRequest(prettyPrint()),
                        pathParameters(
                                parameterWithName("key").description("Catalog key")
                        )));
    }

    @Test
    @Transactional(readOnly = true)
    public void getDistinctCatalogKeys() throws Exception {
        Catalog catalog1 = createCatalogEntity("COUNTRY", "Country");
        catalog1.setEntries(Sets.newHashSet(Lists.newArrayList(
                createCatalogEntryEntity("description", "It's more fun in the Philippines", 1),
                createCatalogEntryEntity("value", "Philippines", 2),
                createCatalogEntryEntity("code", "PH", 3))));

        Catalog catalog2 = createCatalogEntity("PRICE", "Price");
        catalog2.setEntries(Sets.newHashSet(Lists.newArrayList(
                createCatalogEntryEntity("description", "Price of fish", 1),
                createCatalogEntryEntity("value", "1234.00", 2),
                createCatalogEntryEntity("code", "PRICE0001", 3))));

        catalogRepository.save(Lists.newArrayList(catalog1, catalog2));

        this.mockMvc
                .perform(get("/catalog/keys"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andDo(print())
                .andDo(document("catalogResource/getDistinctKeys",
                        preprocessResponse(prettyPrint()),
                        responseFields(
                                fieldWithPath("[].name").description("Catalog key name"),
                                fieldWithPath("[].label").description("Catalog key label")
                        )));
    }

    @Test
    @Transactional(readOnly = true)
    public void getCatalogsFieldValue() throws Exception {
        Catalog catalog1 = createCatalogEntity("COUNTRY", "Country");
        catalog1.setEntries(Sets.newHashSet(Lists.newArrayList(
                createCatalogEntryEntity("description", "It's more fun in the Philippines", 1),
                createCatalogEntryEntity("value", "Philippines", 2),
                createCatalogEntryEntity("code", "PH", 3))));

        Catalog catalog2 = createCatalogEntity("COUNTRY", "Country");
        catalog2.setEntries(Sets.newHashSet(Lists.newArrayList(
                createCatalogEntryEntity("description", "It's more pun in China", 1),
                createCatalogEntryEntity("value", "China", 2),
                createCatalogEntryEntity("code", "CH", 3))));


        catalogRepository.save(Lists.newArrayList(catalog1, catalog2));

        this.mockMvc
                .perform(get("/catalog/field-value/list")
                        .param("key", "COUNTRY")
                        .param("fieldName", "value")
                        .param("value", "code"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].field", is("Philippines")))
                .andExpect(jsonPath("$[0].value", is("PH")))
                .andExpect(jsonPath("$[1].field", is("China")))
                .andExpect(jsonPath("$[1].value", is("CH")))
                .andDo(print())
                .andDo(document("catalogResource/field-value",
                        preprocessResponse(prettyPrint()),
                        requestParameters(
                                parameterWithName("key").description("Catalog key"),
                                parameterWithName("fieldName").description("Catalog Field Name Column"),
                                parameterWithName("value").description("Catalog Field Value Column")
                        ),
                        responseFields(
                                fieldWithPath("[].field").description("Catalog Field Name Column"),
                                fieldWithPath("[].value").description("Catalog Field Value Column")
                        )));
    }

    private CatalogDto createCatalogDto(String key, String label) {
        CatalogDto catalogDto = new CatalogDto();
        catalogDto.setKey(key);
        catalogDto.setLabel(label);
        return catalogDto;
    }

    private Catalog createCatalogEntity(String key, String label) {
        Catalog catalog = new Catalog();
        catalog.setKey(key);
        catalog.setLabel(label);

        return catalog;
    }

    private CatalogEntryDto createCatalogEntryDto(String fieldName, String value, Integer index) {
        CatalogEntryDto fieldEntry = new CatalogEntryDto();
        fieldEntry.setFieldName(fieldName);
        fieldEntry.setValue(value);
        fieldEntry.setIndex(index);
        return fieldEntry;
    }

    private CatalogEntry createCatalogEntryEntity(String fieldName, String value, Integer index) {
        CatalogEntry fieldEntry = new CatalogEntry();
        fieldEntry.setFieldName(fieldName);
        fieldEntry.setValue(value);
        fieldEntry.setIndex(index);
        return fieldEntry;
    }

    private CatalogFormRowEntry createRowEntry(Set<CatalogEntryDto> fieldEntries) {
        CatalogFormRowEntry rowEntry = new CatalogFormRowEntry();
        rowEntry.setEntries(fieldEntries);
        return rowEntry;
    }

}
