package com.activiti.extension.conf;

import org.activiti.engine.ProcessEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;

@Configuration
public class EventListenerConfiguration {

    @Autowired
    private ProcessEngine processEngine;

    @Autowired
    private CorelateEventListener corelateEventListener;


    @PostConstruct
    public void init() {
        processEngine.getRuntimeService().addEventListener(corelateEventListener);
    }
}
