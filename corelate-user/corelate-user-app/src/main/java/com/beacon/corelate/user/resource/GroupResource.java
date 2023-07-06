package com.beacon.corelate.user.resource;

import com.beacon.corelate.commons.app.resource.BaseResource;
import com.beacon.corelate.commons.data.dto.GroupDto;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.user.service.GroupService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

/**
 * @author ddevera
 */
@RestController
@RequestMapping("/group")
public class GroupResource extends BaseResource<GroupDto, Long, GroupService> {

    private static final Logger LOG = LoggerFactory.getLogger(GroupResource.class);

    @Autowired
    private GroupService groupService;

    public GroupResource() {
        super(GroupResource.class);
    }


    @RequestMapping(value = "/{id}/permissions/{permissionId}", method = RequestMethod.POST)
    public ResponseEntity<GroupDto> addPermission(@PathVariable("id") Long id, @PathVariable("permissionId") Long permissionId) throws EntityDoesNotExistException {
        LOG.debug("Adding permissionId={} to groupId={}", permissionId, id);
        return new ResponseEntity<>(groupService.addPermission(id, permissionId), OK);
    }

    @RequestMapping(value = "/{id}/permissions", method = RequestMethod.POST)
    public ResponseEntity<GroupDto> addPermissions(@PathVariable("id") Long id, @RequestBody List<Long> permissionIds) throws EntityDoesNotExistException {
        LOG.debug("Adding multiple permission with permissionIds={} to groupId={}", permissionIds, id);
        return new ResponseEntity<>(groupService.addPermissions(id, permissionIds), OK);
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/{id}/permissions/{permissionId}", method = RequestMethod.DELETE)
    public void removePermission(@PathVariable("id") Long id, @PathVariable("permissionId") Long permissionId) throws EntityDoesNotExistException {
        LOG.debug("Removing permissionId={} to groupId={}", permissionId, id);
        groupService.removePermission(id, permissionId);
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/{id}/permissions", method = RequestMethod.DELETE)
    public void removePermissions(@PathVariable("id") Long id, @RequestBody List<Long> permissionIds) throws EntityDoesNotExistException {
        LOG.debug("Removing permission with permissionIds={} to groupId={}", permissionIds, id);
        groupService.removePermissions(id, permissionIds);
    }
}
