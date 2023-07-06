// Deprecated

import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpUtil } from '@corelate/shared/utils';


@Injectable()
export class ActivitiService {
  constructor(private httpUtil: HttpUtil) { }

  // private generateFilter({filterId, filter, appDefinitionId}) {
  //   return {
  //     page:0,
  //     filterId,
  //     filter,
  //     appDefinitionId,
  //   };
  // }
  //
  // public getAppDefinitions() {
  //   return this.httpUtil.request('/app/rest/runtime/app-definitions', {
  //     method: RequestMethod.Get,
  //     bpmn: true
  //   });
  // }
  //
  // public getAppTaskList(appId) {
  //   return this.httpUtil.request(`/app/rest/filters/tasks?appId=${appId}`, {
  //     method: RequestMethod.Get,
  //     bpmn: true
  //   });
  // }
  //
  // public getTask({filterId, filter, appDefinitionId}){
  //   const body = this.generateFilter({filterId, filter, appDefinitionId});
  //
  //   return this.httpUtil.request('/app/rest/filter/tasks', {
  //     method: RequestMethod.Post,
  //     body,
  //     bpmn: true
  //   });
  // }
  //
  // public getProcessDefinitions({appDefinitionId}) {
  //   return this.httpUtil.request(`/app/rest/process-definitions?latest=true&appDefinitionId=${appDefinitionId}`, {
  //     method: RequestMethod.Get,
  //     bpmn: true
  //   });
  // }
  //
  // public getAppProcess({appDefinitionId}) {
  //   return this.httpUtil.request(`/app/rest/filters/processes?appId=${appDefinitionId}`, {
  //     method: RequestMethod.Get,
  //     bpmn: true
  //   });
  // }
  //
  // public getRunningProcess({filterId, appDefinitionId}) {
  //   const body = this.generateFilter({filterId, filter: {'sort':'created-desc','name':'','state':'running'}, appDefinitionId});
  //
  //   return this.httpUtil.request(`/app/rest/filter/process-instances`, {
  //     method: RequestMethod.Post,
  //     body,
  //     bpmn: true
  //   });
  // }
  //
  // public getProcessTaskFormInfo({processInstanceId}) {
  //   return this.httpUtil.request(`/app/rest/query/tasks`, {
  //     method: RequestMethod.Post,
  //     body: {processInstanceId},
  //     bpmn: true
  //   });
  // }
  //
  // public startProcess(body) {
  //   return this.httpUtil.request('/app/rest/process-instances', {
  //     method: RequestMethod.Post,
  //     body,
  //     bpmn: true
  //   });
  // }
}
