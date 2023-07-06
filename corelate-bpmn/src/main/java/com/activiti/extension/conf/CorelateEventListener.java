package com.activiti.extension.conf;

import org.activiti.engine.delegate.event.ActivitiEvent;
import org.activiti.engine.delegate.event.ActivitiEventListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CorelateEventListener implements ActivitiEventListener {
    @Autowired
    private ProcessStatusUpdateService processStatusUpdateService;
    @Override
    public void onEvent(ActivitiEvent activitiEvent) {
        switch (activitiEvent.getType()){
            case PROCESS_STARTED:
                processStatusUpdateService.handleProcessStart(activitiEvent);
                break;
            case TASK_COMPLETED:
                processStatusUpdateService.handleTaskCompleted(activitiEvent);
                break;
            case PROCESS_COMPLETED:
                processStatusUpdateService.handleProcessEnd(activitiEvent);
                break;
        }
    }

    @Override
    public boolean isFailOnException() {
        return false;
    }
}
