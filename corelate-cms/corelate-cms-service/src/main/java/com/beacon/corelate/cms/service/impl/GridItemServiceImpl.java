package com.beacon.corelate.cms.service.impl;

import com.beacon.corelate.cms.dto.GridItemDto;
import com.beacon.corelate.cms.mapper.CmsBeanMapper;
import com.beacon.corelate.cms.model.GridItem;
import com.beacon.corelate.cms.repository.jpa.GridItemRepository;
import com.beacon.corelate.cms.service.GridItemService;
import com.beacon.corelate.commons.data.exception.EntityDoesNotExistException;
import com.beacon.corelate.commons.service.impl.BaseFileRepositoryServiceImpl;
import io.minio.errors.*;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.xmlpull.v1.XmlPullParserException;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

/**
 * Created by jlava on 9/19/17.
 */

@Service
public class GridItemServiceImpl
        extends BaseFileRepositoryServiceImpl<GridItem, GridItemDto, GridItemRepository, Long, CmsBeanMapper>
        implements GridItemService {

    public GridItemServiceImpl() {
        super(GridItem.class, GridItemDto.class);
    }

    @Override
    public GridItemDto uploadImage(Long id, String prefix, MultipartFile file) throws IOException, XmlPullParserException, NoSuchAlgorithmException, InvalidKeyException, InvalidArgumentException, InvalidBucketNameException, ErrorResponseException, InputSizeMismatchException, NoResponseException, InsufficientDataException, InternalException, EntityDoesNotExistException {
        fetchModelById(id).getFiles().clear();

        return super.uploadImage(id, prefix, file);
    }
}
