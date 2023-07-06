package com.beacon.corelate.rules.utils;

import org.kie.api.KieBase;
import org.kie.api.KieServices;
import org.kie.api.builder.KieFileSystem;
import org.kie.api.builder.KieRepository;
import org.kie.api.io.Resource;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.StatelessKieSession;
import org.kie.internal.io.ResourceFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.Closeable;
import java.io.File;
import java.io.IOException;

public class DroolsHelper implements AutoCloseable {
    private static final Logger LOG = LoggerFactory.getLogger(DroolsHelper.class);

    private KieContainer kieContainer;

    public DroolsHelper(File rulesFile) {
        this(ResourceFactory.newFileResource(rulesFile));
    }

    public DroolsHelper(Resource ruleResource) {
        final KieRepository kieRepository = this.getKieServices().getRepository();
        kieRepository.addKieModule(kieRepository::getDefaultReleaseId);
        this.getKieServices().newKieBuilder(buildKfs(ruleResource)).buildAll();
        kieContainer = this.getKieServices().newKieContainer(kieRepository.getDefaultReleaseId());
    }

    public KieBase getKieBase() {
        return kieContainer.getKieBase();
    }

    public KieSession newKieSession() {
        return kieContainer.newKieSession();
    }

    public StatelessKieSession newStatelessKieSession() {
        return kieContainer.newStatelessKieSession();
    }

    private KieFileSystem buildKfs(Resource ruleFile) {
        KieFileSystem kfs = this.getKieServices().newKieFileSystem();
        kfs.write(ruleFile);
        return kfs;
    }

    private KieServices getKieServices() {
        return KieServices.Factory.get();
    }

    @Override
    public void close() throws IOException {
        try {
            kieContainer.dispose();
        } catch (NullPointerException ex) {
            LOG.debug("Kie Container might not have been initialized", ex);
        }
    }
}
