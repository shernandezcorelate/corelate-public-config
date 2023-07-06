package com.beacon.corelate.catalog.repository.jpa.impl;

import com.beacon.corelate.catalog.dto.CatalogFilterDto;
import com.beacon.corelate.catalog.model.Catalog;
import com.beacon.corelate.catalog.repository.jpa.CatalogCustomRepository;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.Query;
import org.hibernate.Session;
import org.hibernate.search.FullTextQuery;
import org.hibernate.search.FullTextSession;
import org.hibernate.search.Search;
import org.hibernate.search.query.dsl.BooleanJunction;
import org.hibernate.search.query.dsl.QueryBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 * Created by epadolina on 8/2/17.
 */
public class CatalogRepositoryCustomImpl implements CatalogCustomRepository {
    private static Logger LOG = LoggerFactory.getLogger(CatalogRepositoryCustomImpl.class);

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Autowired
    private QueryParser catalogQueryParser;

    private EntityManagerFactory getEntityManagerFactory() {
        return entityManagerFactory;
    }

    @Override
    public Page<Catalog> getCatalogs(CatalogFilterDto filter, Pageable pageable) {
        EntityManager entityManager = getEntityManagerFactory().createEntityManager();
        Session session = entityManager.unwrap(Session.class);
        FullTextSession fullTextSession = Search.getFullTextSession(session);

        QueryBuilder queryBuilder = fullTextSession.getSearchFactory()
                .buildQueryBuilder()
                .forEntity(Catalog.class)
                .get();

        BooleanJunction mustJunction = queryBuilder.bool()
                .must(queryBuilder.keyword()
                        .onField("deleted")
                        .matching(Boolean.FALSE)
                        .createQuery());

        if (filter.getKey() != null && !filter.getKey().isEmpty()) {
            mustJunction = mustJunction.must(queryBuilder
                    .keyword()
                    .onField("key")
                    .matching(filter.getKey())
                    .createQuery());
        }

        if (filter.getFieldName() != null && !filter.getFieldName().isEmpty()) {
            mustJunction = mustJunction.must(
                    queryBuilder.keyword()
                            .onField("entries.fieldName")
                            .matching(filter.getFieldName())
                            .createQuery());
        }

        if (filter.getValue() != null && !filter.getValue().isEmpty()) {
            mustJunction = mustJunction.must(
                    queryBuilder.keyword().wildcard()
                            .onField("entries.value")
                            .matching("*" + filter.getValue().toLowerCase() + "*")
                            .createQuery());
        }

        Query query = queryBuilder.bool()
                .must(mustJunction.createQuery())
                .createQuery();

        FullTextQuery fullTextQuery = fullTextSession.createFullTextQuery(query, Catalog.class);
        fullTextQuery.setFirstResult(pageable.getPageNumber() * pageable.getPageSize());
        fullTextQuery.setMaxResults(pageable.getPageSize());
        return new PageImpl<>(fullTextQuery.list(), pageable, fullTextQuery.getResultSize());
    }

    @Override
    public Page<Catalog> getCatalogsByLuceneQueryString(String filter, Pageable pageable) throws ParseException {
        EntityManager entityManager = getEntityManagerFactory().createEntityManager();
        Session session = entityManager.unwrap(Session.class);
        FullTextSession fullTextSession = Search.getFullTextSession(session);

        Query query = catalogQueryParser.parse(filter);

        FullTextQuery fullTextQuery = fullTextSession.createFullTextQuery(query, Catalog.class);
        fullTextQuery.setFirstResult(pageable.getPageNumber() * pageable.getPageSize());
        fullTextQuery.setMaxResults(pageable.getPageSize());

        return new PageImpl<>(fullTextQuery.list(), pageable, fullTextQuery.getResultSize());
    }

    /*@Override
    public List<String> getCatalogHeaders(String key) {
        EntityManager entityManager = getEntityManagerFactory().createEntityManager();
        javax.persistence.Query query = entityManager.createNativeQuery(" SELECT field_name from( " +
                "SELECT DISTINCT field_name, index FROM catalog_entry ce WHERE EXISTS (SELECT 1 FROM catalog where key=:key " +
                "and ce.catalog_id = id) ORDER by index) headers");
        query.setParameter("key", key);

        List<String> headers = query.getResultList();
        return headers;
    }*/
}
