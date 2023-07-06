package com.beacon.corelate.cms.config;

import com.beacon.corelate.commons.file.repository.FileRepository;
import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.io.File;
import java.net.URL;

/**
 * @author ddevera
 */
@Component
public class DataLoaderConfig implements ApplicationRunner {

    private static final Logger LOG = LoggerFactory.getLogger(DataLoaderConfig.class);

    @Autowired
    private FileRepository fileRepository;

    @Override
    public void run(ApplicationArguments applicationArguments) throws Exception {
        LOG.debug("Running data loader");

        URL imageUrl = this.getClass().getResource("/default/images/");

        if (imageUrl != null) {
            for (File file : new File(imageUrl.toURI()).listFiles()) {
                LOG.debug("Saving file with filename={}", file.getAbsoluteFile());
                fileRepository.putObject(file.getName(), FileUtils.openInputStream(file), FileUtils.sizeOf(file));
            }
        }
    }
}
