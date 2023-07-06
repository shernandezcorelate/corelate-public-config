package com.activiti.extension.conf;

import com.activiti.content.storage.fs.PathConverter;
import com.activiti.domain.idm.User;
import com.activiti.domain.runtime.RelatedContent;
import com.activiti.domain.runtime.SubmittedForm;
import com.activiti.extension.mongo.domain.ActivitiTask;
import com.activiti.extension.mongo.domain.Attachment;
import com.activiti.extension.mongo.domain.ProcessInstance;
import com.activiti.extension.mongo.repo.ProcessInstanceRepo;
import com.activiti.repository.runtime.SubmittedFormRepository;
import com.activiti.service.api.UserService;
import com.activiti.service.runtime.RelatedContentService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.activiti.engine.HistoryService;
import org.activiti.engine.delegate.event.ActivitiEntityEvent;
import org.activiti.engine.delegate.event.ActivitiEntityWithVariablesEvent;
import org.activiti.engine.delegate.event.ActivitiEvent;
import org.activiti.engine.delegate.event.impl.ActivitiEntityWithVariablesEventImpl;
import org.activiti.engine.history.HistoricTaskInstance;
import org.activiti.engine.history.HistoricVariableInstance;
import org.activiti.engine.impl.persistence.entity.ExecutionEntity;
import org.activiti.engine.impl.persistence.entity.HistoricProcessInstanceEntity;
import org.activiti.engine.impl.persistence.entity.TaskEntity;
import org.joda.time.Duration;
import org.joda.time.LocalDateTime;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.math.BigInteger;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

import static org.apache.commons.lang3.StringUtils.isNotBlank;

@Service
public class ProcessStatusUpdateServiceImpl implements ProcessStatusUpdateService {

    private static final Logger LOG = LoggerFactory.getLogger(ProcessStatusUpdateServiceImpl.class);
    private static final int PAGE_SIZE = 50;
    private static final Integer DEFAULT_FS_DEPTH = 4;
    private static final Integer DEFAULT_FS_BLOCK_SIZE = 1024;

    private static final String STRING_FIELDS_KEY = "stringFields";
    private static final String DYNAMIC_FIELDS_KEY = "dynamicFields";

    @Autowired
    private ProcessInstanceRepo processInstanceRepo;
    @Autowired
    private HistoryService historyService;
    @Autowired
    private UserService userService;
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private SubmittedFormRepository submittedFormRepository;
    @Autowired
    private Environment env;
    @Autowired
    private RelatedContentService relatedContentService;
    private PathConverter pathConverter;

    @PostConstruct
    public void init() {
        Integer iterationDepth = env.getProperty("contentstorage.fs.depth", Integer.class, DEFAULT_FS_DEPTH);
        Integer blockSize = env.getProperty("contentstorage.fs.blockSize", Integer.class, DEFAULT_FS_BLOCK_SIZE);

        pathConverter = new PathConverter();
        pathConverter.setBlockSize(blockSize);
        pathConverter.setIterationDepth(iterationDepth);
    }

    @Override
    @Transactional
    public void handleProcessStart(ActivitiEvent activitiEvent) {
        ActivitiEntityEvent event = (ActivitiEntityEvent) activitiEvent;
        Object eventEntity = event.getEntity();
        if (eventEntity instanceof ExecutionEntity) {
            ExecutionEntity executionEntity = (ExecutionEntity) eventEntity;
            executionEntity.setVariable("processId", executionEntity.getProcessInstanceId());
            ProcessInstance processInstance = new ProcessInstance();
            processInstance.setName(executionEntity.getProcessDefinition().getName());
            processInstance.setProcessInstanceId(executionEntity.getProcessInstanceId());
            processInstance.setProcessDefinitionId(executionEntity.getProcessDefinitionId());
            processInstance.setStartTime(LocalDateTime.now());
            processInstance.setStatus("ONGOING");
            processInstanceRepo.save(processInstance);
        }
    }

    @Override
    @Transactional
    @SuppressWarnings("unchecked")
    public void handleTaskCompleted(ActivitiEvent activitiEvent) {
        String processInstanceId = activitiEvent.getProcessInstanceId();
        if (activitiEvent instanceof ActivitiEntityWithVariablesEvent) {
            ActivitiEntityWithVariablesEventImpl aewve =
                    (ActivitiEntityWithVariablesEventImpl) activitiEvent;

            TaskEntity taskEntity = (TaskEntity) aewve.getEntity();
            String outComeKeyString = null;
            if (taskEntity.getFormKey() != null) {
                outComeKeyString = "form" + taskEntity.getFormKey() + "outcome";
            }

            Map<String, String> variablesMap = aewve.getVariables();
            String outcome = null;
            if (variablesMap != null && outComeKeyString != null) {
                outcome = variablesMap.get(outComeKeyString);
            }

            Function<String, String> outcomeKeyBuilder = name -> name.toLowerCase().replaceAll(" ", "") + "outcome";

            ProcessInstance processInstance = processInstanceRepo.findOne(processInstanceId);
            setVariables(processInstance);

            if (outcome != null && processInstance != null) {
                if (CollectionUtils.isEmpty(processInstance.getStringFields())) {
                    processInstance.setStringFields(new HashMap<>());
                }
                Map<String, String> stringFields = processInstance.getStringFields();

                stringFields.put(outcomeKeyBuilder.apply(taskEntity.getName() == null
                        ? taskEntity.getFormKey() : taskEntity.getName()), outcome);

                processInstance.setStringFields(stringFields);
            }
            processInstanceRepo.save(processInstance);
        }
    }

    @Override
    @Transactional
    public void handleProcessEnd(ActivitiEvent activitiEvent) {
        String processInstanceId = activitiEvent.getProcessInstanceId();
        ProcessInstance processInstance = Optional.ofNullable(processInstanceRepo.findOne(processInstanceId)).orElse(new ProcessInstance());
        HistoricProcessInstanceEntity historicProcessInstance = (HistoricProcessInstanceEntity) historyService
                .createHistoricProcessInstanceQuery()
                .processInstanceId(processInstanceId)
                .singleResult();

        processInstance.setProcessDefinitionId(historicProcessInstance.getProcessDefinitionId());
        processInstance.setProcessInstanceId(historicProcessInstance.getProcessInstanceId());
        processInstance.setName(historicProcessInstance.getName());
        processInstance.setDescription(historicProcessInstance.getDescription());

        if (historicProcessInstance.getStartTime() != null) {
            processInstance.setStartTime(new LocalDateTime(historicProcessInstance.getStartTime().getTime()));
        }
        if (historicProcessInstance.getEndTime() != null) {
            processInstance.setEndTime(new LocalDateTime(historicProcessInstance.getEndTime().getTime()));
        } else {
            processInstance.setEndTime(LocalDateTime.now());
        }
        processInstance.setDurationInMillis(historicProcessInstance.getDurationInMillis() == null
                ? new Duration(processInstance.getStartTime().toDateTime(), processInstance.getEndTime().toDateTime()).getMillis()
                : historicProcessInstance.getDurationInMillis());

        User user = userService.getUser(Long.valueOf(historicProcessInstance.getStartUserId()));
        processInstance.setStartUser(user.getEmail());

        setVariables(processInstance);
        processInstance.setAttachments(getAttachments(processInstanceId));

        List<HistoricTaskInstance> historicTasks = historyService.createHistoricTaskInstanceQuery()
                .processInstanceId(processInstanceId).list();
        List<ActivitiTask> tasks = historicTasks.stream()
                .map(historicTask -> {
                    ActivitiTask task = new ActivitiTask();
                    task.setTaskId(UUID.randomUUID().toString());
                    task.setAssignee(historicTask.getAssignee());
                    task.trySetStartTime(historicTask.getStartTime());
                    task.trySetEndTime(historicTask.getEndTime());
                    task.setDescription(historicTask.getDescription());
                    task.setCategory(historicTask.getDescription());
                    task.setUpdatedTime(LocalDateTime.now());

                    return task;
                }).collect(Collectors.toList());
        processInstance.setTasks(tasks);
        processInstance.setUpdatedDate(LocalDateTime.now());
        processInstance.setStatus("ENDED");
        processInstanceRepo.save(processInstance);
    }

    private boolean isLocalStorage() {
        String fsRoot = this.env.getProperty("contentstorage.fs.rootFolder");

        return isNotBlank(fsRoot);
    }

    private List<Attachment> getAttachments(String processInstanceID) {
        List<Attachment> retVal = new ArrayList<>();

        List<RelatedContent> relatedContents = getRelatedContents(processInstanceID);

        boolean isLocalStorage = isLocalStorage();

        for (RelatedContent relatedContent : relatedContents) {
            if (relatedContent.isContentAvailable()) {
                Attachment attachment = new Attachment();

                attachment.setFilename(relatedContent.getName());
                attachment.setSize(relatedContent.getContentSize());
                attachment.setUser(relatedContent.getCreatedBy().getEmail());

                String path = relatedContent.getContentStoreId();
                String repositoryType = "S3";

                if (isLocalStorage) {
                    File file = pathConverter.getPathForId(new BigInteger(relatedContent.getContentStoreId()));
                    path = file.getPath();
                    repositoryType = "Local";
                }

                attachment.setPath(path);
                attachment.setRepositoryType(repositoryType);

                retVal.add(attachment);
            }
        }

        return retVal;
    }

    @SuppressWarnings("unchecked")
    private void setVariables(ProcessInstance processInstance) {
        String processInstanceID = processInstance.getProcessInstanceId();
        Map<String, String> stringFields = Optional.ofNullable(processInstance.getStringFields()).orElse(new HashMap<>());
        Map<String, Object> dynamicFields = Optional.ofNullable(processInstance.getDynamicFields()).orElse(new HashMap<>());


        List<HistoricVariableInstance> variables = historyService
                .createHistoricVariableInstanceQuery()
                .processInstanceId(processInstanceID)
                .list();

        for (HistoricVariableInstance variable : variables) {
            String key = variable.getVariableName();

            if (variable.getValue() != null) {
                stringFields.put(key, variable.getValue().toString());
            }
        }

        List<SubmittedForm> forms = submittedFormRepository.findByProcessIdOrderByIdDesc(processInstanceID);

        try {
            for (SubmittedForm form : forms) {
                String fields = form.getFieldsValueDefinition();

                Map mapValues = (Map) objectMapper.readValue(fields, Map.class).get("values");
                for (Object fieldValue : mapValues.keySet()) {
                    String key = (String) fieldValue;

                    if (mapValues.get(key) != null) {
                        Object objectValue = mapValues.get(key);
                        if (objectValue instanceof String) {
                            stringFields.put(key, (String) objectValue);
                        } else {
                            stringFields.remove(key);
                            dynamicFields.put(key, objectValue);
                        }
                    }
                }
            }
        } catch (IOException e) {
            LOG.error(e.getMessage(), e);
        }

        processInstance.setStringFields(stringFields);
        processInstance.setDynamicFields(dynamicFields);

    }

    private List<RelatedContent> getRelatedContents(String processInstanceID) {
        List<RelatedContent> retVal = new ArrayList<>();

        Page page = null;
        for (int pageNumber = 0; page == null || page.hasNext(); pageNumber++) {
            page = relatedContentService.getAllFieldContentForProcessInstance(processInstanceID, PAGE_SIZE, pageNumber);

            if (page.getTotalElements() > 0) {
                retVal.addAll(page.getContent());
            }
        }

        return retVal;
    }
}
