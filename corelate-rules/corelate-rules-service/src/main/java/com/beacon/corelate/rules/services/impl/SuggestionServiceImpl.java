package com.beacon.corelate.rules.services.impl;

import com.beacon.corelate.rules.config.support.FileStorageHelper;
import com.beacon.corelate.rules.dto.SuggestionResponse;
import com.beacon.corelate.rules.facts.SubjectRating;
import com.beacon.corelate.rules.facts.Suggestions;
import com.beacon.corelate.rules.services.SuggestionService;
import com.beacon.corelate.rules.utils.DroolsHelper;
import org.kie.api.runtime.StatelessKieSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import static java.util.stream.Collectors.toList;

@Service
public class SuggestionServiceImpl implements SuggestionService {
    private static Logger LOG = LoggerFactory.getLogger(SuggestionServiceImpl.class);
    private static String RULES_BUCKET = "rules";

    @Autowired
    @SuppressWarnings("SpringJavaAutowiringInspection")
    private FileStorageHelper fsHelper;

    @Override
    public SuggestionResponse getSuggestion(String ruleId, Map<String, Integer> ratings) {
        File rulesFile = fsHelper.getObject(RULES_BUCKET, ruleId);

        try (DroolsHelper dh = new DroolsHelper(rulesFile)) {
            StatelessKieSession ks = dh.newStatelessKieSession();
            SuggestionResponse response = new SuggestionResponse();

            List<Object> facts = ratings.entrySet()
                    .stream()
                    .map(entry -> new SubjectRating(entry.getKey(),
                            entry.getValue()))
                    .collect(toList());

            Suggestions suggestions = new Suggestions();
            ks.setGlobal("suggestions", suggestions);

            ks.execute(facts);

            suggestions.getSuggestedCourseCodes()
                    .forEach(response::addSuggestion);
            return response;
        } catch (IOException e) {
            LOG.error("An error has occured", e);
        } finally {
            rulesFile.delete();
        }
        return null;
    }
}
