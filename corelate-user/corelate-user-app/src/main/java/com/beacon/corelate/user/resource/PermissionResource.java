package com.beacon.corelate.user.resource;

import com.beacon.corelate.commons.app.resource.BaseResource;
import com.beacon.corelate.commons.data.dto.PermissionDto;
import com.beacon.corelate.user.service.PermissionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author ddevera
 */
@RestController
@RequestMapping("/permission")
public class PermissionResource extends BaseResource<PermissionDto, Long, PermissionService> {

    public PermissionResource() {
        super(PermissionResource.class);
    }

    @Override
    public ResponseEntity<PermissionDto> create(PermissionDto dto) throws Exception {
        return new ResponseEntity<>((PermissionDto) null, HttpStatus.METHOD_NOT_ALLOWED);
    }
}
