package com.beacon.corelate.cms.repository.jpa.impl;

import com.beacon.corelate.cms.model.GeneralContent;
import com.beacon.corelate.cms.model.QGeneralContent;
import com.beacon.corelate.cms.model.filter.GeneralContentFilter;
import com.beacon.corelate.cms.repository.jpa.GeneralContentRepositoryCustom;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * @author ddevera
 */
public class GeneralContentRepositoryCustomImpl implements GeneralContentRepositoryCustom {

    private static final Logger LOG = LoggerFactory.getLogger(GeneralContentRepositoryCustomImpl.class);

    @PersistenceContext
    private EntityManager em;

    @Override
    public Page<GeneralContent> findByFilter(GeneralContentFilter filter, Pageable pageable) {
        LOG.debug("Fetching generalContent in custom impl");

        BooleanBuilder booleanBuilder = new BooleanBuilder();
        QGeneralContent generalContent = QGeneralContent.generalContent;

        booleanBuilder.and(generalContent.deleted.isFalse());

        if (StringUtils.isNotEmpty(filter.getCategory())) {
            booleanBuilder.and(generalContent.category.eq(filter.getCategory()));
        }

        if (filter.getPublished() != null) {
            booleanBuilder.and(generalContent.published.eq(filter.getPublished()));
        }

        JPAQuery query = new JPAQueryFactory(em)
                .from(generalContent)
                .where(booleanBuilder)
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize());

        List<GeneralContent> generalContentList = query.fetch();

        return new PageImpl<>(generalContentList, pageable, query.fetchCount());
    }
}
