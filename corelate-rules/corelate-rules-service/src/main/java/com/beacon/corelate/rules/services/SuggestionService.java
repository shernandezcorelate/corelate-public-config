package com.beacon.corelate.rules.services;

import com.beacon.corelate.rules.dto.SuggestionResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

public interface SuggestionService {

    SuggestionResponse getSuggestion(String ruleId, Map<String, Integer> ratings);
}
