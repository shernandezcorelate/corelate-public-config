package com.beacon.corelate.user.service.impl;

import com.activiti.model.idm.GroupRepresentation;
import com.beacon.corelate.commons.data.dto.GroupDto;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.data.model.Group;
import com.beacon.corelate.commons.data.model.Permission;
import com.beacon.corelate.commons.service.impl.BaseServiceImpl;
import com.beacon.corelate.user.client.BpmnIdmGroupsClient;
import com.beacon.corelate.user.dto.BpmnGroupRepresentationDto;
import com.beacon.corelate.user.mapper.UserBeanMapper;
import com.beacon.corelate.user.repository.jpa.GroupRepository;
import com.beacon.corelate.user.repository.jpa.PermissionRepository;
import com.beacon.corelate.user.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.lang.Boolean.TRUE;

/**
 * @author ddevera
 */
@Service
public class GroupServiceImpl
        extends BaseServiceImpl<Group, GroupDto, GroupRepository, Long, UserBeanMapper>
        implements GroupService {

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private PermissionRepository permissionRepository;

    @Autowired
    private BpmnIdmGroupsClient bpmnIdmGroupsClient;

    @Autowired
    private UserBeanMapper mapper;

    public GroupServiceImpl() {
        super(Group.class, GroupDto.class);
    }

    @Override
    public GroupDto create(GroupDto dto) throws Exception {
        Group group = mapper.map(dto, Group.class);

        BpmnGroupRepresentationDto bpmnGroupRepresentationDto = mapper.map(group, BpmnGroupRepresentationDto.class);
        GroupRepresentation groupRepresentation = bpmnIdmGroupsClient.create(bpmnGroupRepresentationDto);

        group.setExternalId(groupRepresentation.getId());

        return mapper.map(groupRepository.save(group), GroupDto.class);
    }

    @Override
    public GroupDto update(GroupDto dto, Long id) throws EntityDoesNotExistException {
        dto.setId(id);

        Group group = getGroup(id);

        mapper.map(dto, group);

        BpmnGroupRepresentationDto bpmnGroupRepresentationDto = mapper.map(group, BpmnGroupRepresentationDto.class);
        bpmnIdmGroupsClient.update(group.getExternalId(), bpmnGroupRepresentationDto);

        return mapper.map(groupRepository.save(group), GroupDto.class);
    }

    @Override
    public void delete(Long id) throws EntityDoesNotExistException {
        Group group = getGroup(id);
        group.setDeleted(TRUE);

        bpmnIdmGroupsClient.delete(group.getExternalId());

        groupRepository.save(group);
    }

    @Override
    public GroupDto addPermission(Long id, Long permissionId) throws EntityDoesNotExistException {
        Group group = getGroup(id);
        group
                .getPermissions()
                .add(permissionRepository.findOneById(permissionId));

        return mapper.map(groupRepository.save(group), GroupDto.class);
    }

    @Override
    public GroupDto addPermissions(Long id, List<Long> permissionIds) throws EntityDoesNotExistException {
        Group group = getGroup(id);
        group
                .getPermissions()
                .clear();

        permissionIds
                .stream()
                .forEach(permissionId ->
                        group
                                .getPermissions()
                                .add(permissionRepository.findOneById(permissionId)));

        return mapper.map(groupRepository.save(group), GroupDto.class);
    }

    @Override
    public void removePermission(Long id, Long permissionId) throws EntityDoesNotExistException {
        Group group = getGroup(id);

        Permission permission = permissionRepository.findOneById(permissionId);

        group
                .getPermissions()
                .remove(permission);

        groupRepository.save(group);
    }

    @Override
    public void removePermissions(Long id, List<Long> permissionIds) throws EntityDoesNotExistException {
        Group group = getGroup(id);

        permissionIds
                .stream()
                .forEach(permissionId -> {
                    Permission permission = permissionRepository.findOneById(permissionId);

                    group
                            .getPermissions()
                            .remove(permission);
                });

        groupRepository.save(group);
    }

    private Group getGroup(Long id) throws EntityDoesNotExistException {
        Group group = groupRepository.findOneById(id);

        if (group == null) {
            throw new EntityDoesNotExistException("Group with id=" + id + " does not exist");
        }

        return group;
    }
}
