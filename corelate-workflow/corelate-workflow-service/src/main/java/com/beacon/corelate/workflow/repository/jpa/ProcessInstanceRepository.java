package com.beacon.corelate.workflow.repository.jpa;

import com.beacon.corelate.commons.data.repository.base.BaseJpaRepository;
import com.beacon.corelate.workflow.model.ProcessInstance;

/**
 * @author ddevera
 */
public interface ProcessInstanceRepository extends BaseJpaRepository<ProcessInstance, Long> {

    ProcessInstance findByProcessInstanceId(Long processInstanceId);
}
