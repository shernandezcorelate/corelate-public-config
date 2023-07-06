package com.activiti.extension.mongo.repo;

import com.activiti.extension.mongo.domain.ProcessInstance;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface ProcessInstanceRepo extends MongoRepository<ProcessInstance, String> {
}
