package com.beacon.corelate.commons.data.dto;

import org.springframework.data.domain.Page;

import java.io.Serializable;
import java.util.Collections;
import java.util.List;

/**
 * @author ddevera
 */
public class PageDto<T> implements Serializable {

    private static final long serialVersionUID = -5371201158843795779L;

    private boolean hasNextPage;

    private long totalElements;

    private List<T> results;

    private int currentPage;

    private int pageSize;

    public long getCurrentPage() {
        return currentPage;
    }

    public PageDto<T> setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
        return this;
    }

    public int getPageSize() {
        return pageSize;
    }


    public PageDto<T> setPageSize(int pageSize) {
        this.pageSize = pageSize;
        return this;
    }


    public boolean isHasNextPage() {
        return hasNextPage;
    }

    public PageDto<T> setHasNextPage(boolean hasNextPage) {
        this.hasNextPage = hasNextPage;
        return this;
    }

    public long getTotalElements() {
        return totalElements;
    }

    public PageDto<T> setTotalElements(long totalElements) {
        this.totalElements = totalElements;
        return this;
    }

    public List<T> getResults() {
        return results;
    }

    public PageDto<T> setResults(List<T> results) {
        this.results = results;
        return this;
    }

    public static <Y, Z> PageDto<Z> newPageInfo(Page<Y> paged, List<Z> list) {
        return new PageDto<Z>().setResults(list)
                .setCurrentPage(paged.getNumber())
                .setTotalElements(paged.getTotalElements())
                .setHasNextPage(paged.hasNext())
                .setPageSize(paged.getSize());

    }

    public static <Y, Z> PageDto<Z> emptyPageInfo() {
        return new PageDto<Z>().setResults(Collections.emptyList());
    }
}
