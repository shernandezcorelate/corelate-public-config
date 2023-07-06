package com.beacon.corelate.cms.service;

import com.beacon.corelate.cms.dto.ProjectSiteDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.ProjectSite;
import com.beacon.corelate.cms.repository.jpa.ProjectSiteRepository;

/**
 * Created by jlava on 9/19/17.
 */
public interface ProjectSiteService
        extends BasePublishableService<ProjectSite, ProjectSiteDto, ProjectSiteRepository, Long, CmsBeanMapper> {
}
