package com.beacon.corelate.cms.service.impl;

import com.beacon.corelate.cms.dto.ProjectSiteDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.ProjectSite;
import com.beacon.corelate.cms.repository.jpa.ProjectSiteRepository;
import com.beacon.corelate.cms.service.ProjectSiteService;
import org.springframework.stereotype.Service;

/**
 * Created by jlava on 9/19/17.
 */

@Service
public class ProjectSiteServiceImpl
        extends BasePublishableServiceImpl<ProjectSite, ProjectSiteDto, ProjectSiteRepository, Long, CmsBeanMapper>
        implements ProjectSiteService {

    public ProjectSiteServiceImpl() {
        super(ProjectSite.class, ProjectSiteDto.class);
    }
}
