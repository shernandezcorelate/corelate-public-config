package com.activiti.extension.conf;

import org.activiti.engine.delegate.event.ActivitiEvent;
import org.springframework.transaction.annotation.Transactional;

public interface ProcessStatusUpdateService {
    void handleProcessStart(ActivitiEvent activitiEvent);

    @Transactional
    @SuppressWarnings("unchecked")
    void handleTaskCompleted(ActivitiEvent activitiEvent);

    void handleProcessEnd(ActivitiEvent activitiEvent);
}
