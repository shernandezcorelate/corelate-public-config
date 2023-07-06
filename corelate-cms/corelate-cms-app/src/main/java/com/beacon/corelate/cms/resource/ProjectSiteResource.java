package com.beacon.corelate.cms.resource;

import com.beacon.corelate.cms.dto.ProjectSiteDto;
import com.beacon.corelate.cms.resource.base.BasePublishableResource;
import com.beacon.corelate.cms.service.ProjectSiteService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by jlava on 9/19/17.
 */

@RestController
@RequestMapping("/project-site")
public class ProjectSiteResource extends BasePublishableResource<ProjectSiteDto, Long, ProjectSiteService> {

    public ProjectSiteResource() {
        super(ProjectSiteResource.class);
    }
}
