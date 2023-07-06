package com.beacon.corelate.user.resource;

import com.beacon.corelate.commons.app.resource.BaseResource;
import com.beacon.corelate.commons.data.dto.PermissionGroupDto;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.user.service.PermissionGroupService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

/**
 * @author ddevera
 */
@RestController
@RequestMapping("/permission-group")
public class PermissionGroupResource extends BaseResource<PermissionGroupDto, Long, PermissionGroupService> {

    private static final Logger LOG = LoggerFactory.getLogger(PermissionGroupResource.class);

    @Autowired
    private PermissionGroupService permissionGroupService;

    public PermissionGroupResource() {
        super(PermissionGroupResource.class);
    }

    @RequestMapping(value = "/{id}/permissions/actions", method = RequestMethod.POST)
    public ResponseEntity<PermissionGroupDto> addPermissionActions(@PathVariable("id") Long id, @RequestBody List<String> actions) throws EntityDoesNotExistException {
        LOG.debug("Adding multiple permission with actions={} to permissionGroupId={}", actions, id);
        return new ResponseEntity<>(permissionGroupService.addPermissionActions(id, actions), OK);
    }
}
