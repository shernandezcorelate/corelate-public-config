package com.beacon.corelate.commons.service.impl;

import com.beacon.corelate.commons.data.BaseFileRepository;
import com.beacon.corelate.commons.data.dto.BaseFileRepositoryDto;
import com.beacon.corelate.commons.data.dto.PageDto;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.data.mapper.OrikaBeanMapper;
import com.beacon.corelate.commons.data.repository.base.BaseJpaRepository;
import com.beacon.corelate.commons.file.repository.FileRepository;
import com.beacon.corelate.commons.service.BaseFileRepositoryService;
import io.minio.errors.ErrorResponseException;
import io.minio.errors.InputSizeMismatchException;
import io.minio.errors.InsufficientDataException;
import io.minio.errors.InternalException;
import io.minio.errors.InvalidArgumentException;
import io.minio.errors.InvalidBucketNameException;
import io.minio.errors.NoResponseException;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;
import org.xmlpull.v1.XmlPullParserException;

import java.io.IOException;
import java.io.Serializable;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author ddevera
 */
public abstract class BaseFileRepositoryServiceImpl<MODEL extends BaseFileRepository, DTO extends BaseFileRepositoryDto, REPO extends BaseJpaRepository, ID extends Serializable, MAPPER extends OrikaBeanMapper>
        extends BaseServiceImpl<MODEL, DTO, REPO, ID, MAPPER>
        implements BaseFileRepositoryService<MODEL, DTO, REPO, ID, MAPPER> {

    @Autowired
    private FileRepository fileRepository;

    @Autowired
    private REPO repository;

    @Autowired
    private MAPPER mapper;

    public BaseFileRepositoryServiceImpl(Class<MODEL> modelClass, Class<DTO> dtoClass) {
        super(modelClass, dtoClass);
    }

    @Override
    public DTO uploadImage(ID id, String prefix, MultipartFile file) throws IOException, XmlPullParserException, NoSuchAlgorithmException, InvalidKeyException, InvalidArgumentException, InvalidBucketNameException, ErrorResponseException, InputSizeMismatchException, NoResponseException, InsufficientDataException, InternalException, EntityDoesNotExistException {
        MODEL model = fetchModelById(id);

        StringBuilder builder = new StringBuilder();
        builder
                .append(modelClass.getSimpleName())
                .append("-")
                .append(id.toString());

        if (StringUtils.isNotEmpty(prefix)) {
            builder
                    .append("-")
                    .append(prefix)
                    .append("-");
        }

        builder.append(file.getOriginalFilename());

        String objectName = builder.toString();

        fileRepository.putObject(objectName, file.getInputStream(), file.getSize());

        model.getFiles().add(objectName);

        return postProcessDTO(mapper.map(repository.save(model), dtoClass));
    }

    @Override
    public DTO uploadImage(String prefix, MultipartFile file) throws IOException, XmlPullParserException, NoSuchAlgorithmException, InvalidKeyException, InvalidArgumentException, InvalidBucketNameException, ErrorResponseException, InputSizeMismatchException, NoResponseException, InsufficientDataException, InternalException, EntityDoesNotExistException {
        MODEL model = fetchModelFirstEntry();

        return uploadImage((ID) model.getId(), prefix, file);
    }

    @Override
    public DTO create(DTO dto) throws Exception {
        return postProcessDTO(super.create(dto));
    }

    @Override
    public DTO update(DTO dto) throws EntityDoesNotExistException {
        return postProcessDTO(super.update(dto));
    }

    @Override
    public DTO update(DTO dto, ID id) throws EntityDoesNotExistException {
        return postProcessDTO(super.update(dto, id));
    }

    @Override
    public DTO get() throws EntityDoesNotExistException {
        return postProcessDTO(super.get());
    }

    @Override
    public DTO get(ID id) throws EntityDoesNotExistException {
        return postProcessDTO(super.get(id));
    }

    @Override
    public PageDto<DTO> list(Pageable pageable) {
        PageDto<DTO> list = super.list(pageable);

        list
                .getResults()
                .stream()
                .forEach(dto -> postProcessDTO(dto));

        return list;
    }

    @Override
    public List<DTO> list() {
        return super
                .list()
                .stream()
                .map(dto -> postProcessDTO(dto))
                .collect(Collectors.toList());
    }

    protected DTO postProcessDTO(DTO dto) {
        if (CollectionUtils.isNotEmpty(dto.getFiles())) {
            if (dto.getFiles().size() == 1) {
                dto
                        .setFile(
                                (String) dto
                                        .getFiles()
                                        .stream()
                                        .findFirst()
                                        .get());
                dto.setFiles(null);
            }
        }

        return dto;
    }
}
