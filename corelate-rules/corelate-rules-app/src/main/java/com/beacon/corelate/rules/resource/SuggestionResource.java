package com.beacon.corelate.rules.resource;

import com.beacon.corelate.rules.dto.SuggestionResponse;
import com.beacon.corelate.rules.resource.dto.SuggestionRequest;
import com.beacon.corelate.rules.services.SuggestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/suggestions")
public class SuggestionResource {

    @Autowired
    private SuggestionService suggestionService;

    @PostMapping("/evaluate")
    public ResponseEntity<SuggestionResponse> evaluateRatings(@RequestBody SuggestionRequest request) throws IOException {
        return ResponseEntity.ok(suggestionService.getSuggestion(request.getRuleId(), request.getRatings()));
    }

}
