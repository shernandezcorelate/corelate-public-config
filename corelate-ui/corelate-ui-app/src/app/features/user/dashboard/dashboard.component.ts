import { Component, OnInit } from '@angular/core';
import { SweetAlertService } from 'ngx-sweetalert2';
import { Subject } from 'rxjs/Subject';

import { AlfrescoApiService } from 'ng2-alfresco-core';
import { ShoppingCartService } from '@corelate/core/services';
import { DataTable, CartItem, TableParams } from '@corelate/shared/models';
import { Footer } from "@corelate/shared/models";
import { FooterService } from "@corelate/core/services";
import { environment as env } from 'environments/environment';

declare var require: any;

var moment = require('moment');


@Component({
  selector: 'corelate-ui-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public activitiAppDefinitions: any = [];
  public activitiOpenTask: any = {};
  public activitiCompletedTask: any = {};
  public activitiQueuedTask: any = {};
  public activitiInvolvedTask: any = {};
  public activitiProcessDefinitions: any = {};
  public activitiRunningProcessTaskForms: any = {}
  public footer: Footer;
  public imageSourceUrl = env.imageSourceUrl;

  public cartParams = new TableParams();
  private destroy$: Subject<boolean> = new Subject<boolean>();

  // Bar Graph
  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55], label: 'Team A'},
    {data: [28, 48, 40, 19, 86, 27], label: 'Team B'},
    {data: [80, 43, 19, 89, 56, 54], label: 'Team C'}
  ];

  public chartLabels: Array<any> = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(76,175,80,0.2)',
      borderColor: 'rgba(76,175,80,1)',
      borderWidth: 1,
      pointBackgroundColor: 'rgba(76,175,80,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(76,175,80,1)'
    },
    {
      backgroundColor: 'rgba(151,187,205,0.2)',
      borderColor: 'rgba(151,187,205,1)',
      borderWidth: 1,
      pointBackgroundColor: 'rgba(151,187,205,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(151,187,205,1)'
    },
    {
      backgroundColor: 'rgba(223,30,90,0.2)',
      borderColor: 'rgba(223,30,90,1)',
      borderWidth: 1,
      pointBackgroundColor: 'rgba(223,30,90,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(223,30,90,1)'
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  constructor(
    private shoppingCartService: ShoppingCartService,
    private alert: SweetAlertService,
    private apiService: AlfrescoApiService,
    private footerService: FooterService
  ) { }

  ngOnInit() {
    this.apiService.getInstance().activiti.appsApi.getAppDefinitions().then((appDefinitions) => {
      this.activitiAppDefinitions = appDefinitions.data.filter(app => app.id !== null);

      this.getProcess();
      this.getTask();
      this.getRunningProcessTaskForms();
    }).catch((err) => {
      console.log(err);
    })

    this.getShoppingCartItems();

    this.footerService.get()
      .takeUntil(this.destroy$)
      .subscribe(
        (footer: Footer) => this.footer = footer,
        (error) => console.log(error)
      );
  }

  private getProcess() {
    this.activitiAppDefinitions.map(app => {
      this.apiService.getInstance().activiti.processApi.getProcessDefinitions({latest: true, appDefinitionId: app.id})
        .then((processInfoList) => {
          this.activitiProcessDefinitions[app.id] = processInfoList.data;
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  private getTask() {
    this.activitiAppDefinitions.map(app => {
      this.apiService.getInstance().activiti.taskApi.getAppTaskList(app.id)
        .then(taskInfoList => {
          taskInfoList.data.map(taskInfo => {
            this.apiService.getInstance().activiti.taskApi.getTaskInfo({filterId: taskInfo.id, filter: taskInfo.filter, appId: app.id})
              .then(task => {
                // assign task to individual list
                switch(taskInfo.name) {
                  case "My Tasks":
                    this.activitiOpenTask[app.id] = task.data;
                    break;
                  case "Queued Tasks":
                    this.activitiQueuedTask[app.id] = task.data;
                    break;
                  case "Involved Tasks":
                    this.activitiInvolvedTask[app.id] = task.data;
                    break;
                  case "Completed Tasks":
                    this.activitiCompletedTask[app.id] = task.data;
                    break;
                  default:
                    break;
                }
              })
              .catch(err => {
                console.log(err);
              })
          });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  private getRunningProcessTaskForms() {
    this.activitiAppDefinitions.map(app => {
      this.activitiRunningProcessTaskForms[app.id] = []
      this.apiService.getInstance().activiti.processApi.getAppProcess(app.id)
        .then(processTypeList => {
          processTypeList.data.map(processType => {
            // console.log(processType);
            if (processType.name === 'Running') {
              this.apiService.getInstance().activiti.processApi.getRunningProcess(processType.id, app.id)
                .then(runningProcessList => {
                  runningProcessList.data.map(runningProcess => {
                    this.apiService.getInstance().activiti.processApi.getProcessTaskFormInfo(runningProcess.id)
                      .then(taskFormInfo => {
                        runningProcess.taskFormId = taskFormInfo.data[0].id;
                        this.activitiRunningProcessTaskForms[app.id].push(runningProcess);
                      })
                      .catch(err => console.log(err));
                  });
                })
                .catch(err => console.log(err))
            }
          });
        })
        .catch(err => console.log(err))
    });
  }

  public startProcess(id, name) {
    const date = moment().format('D MMM, YYYY');
    const body = {
      'processDefinitionId': id,
      name: `${name} - ${date}`
    };

    this.apiService.getInstance().activiti.processApi.startNewProcessInstance(body)
      .then(resp => {
        this.alert.success({ text: 'Process started.' })
        this.getRunningProcessTaskForms();
      })
      .catch(err => console.log(err));
  }


  public timeSince(date) {
    const today: any = new Date();
    const previousDate: any = new Date(date);

    let seconds = Math.floor((today - previousDate) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + ' years';
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + ' months';
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + ' days';
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + ' hours';
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + ' minutes';
    }
    return Math.floor(seconds) + ' seconds';
  }

  getShoppingCartItems(): void {
    this.shoppingCartService.getAll(this.cartParams)
      .takeUntil(this.destroy$)
      .subscribe(
        (pageData: DataTable) => {
          this.cartParams.totalElements = pageData.totalElements;
        },
        (error) => console.log(error)
      );
  }
}

// back up - might revert to previous version
// ngOnInit() {
//   this.activitiService.getAppDefinitions().subscribe(
//     appDefinitions => {
//       this.activitiAppDefinitions = appDefinitions.data.filter(app => app.id !== null);
//       this.getTask();
//       this.getProcess();
//       this.getRunningProcessTaskForms();
//     },
//     error => console.log(error)
//   );
// }
// private getTask() {;
//   this.activitiAppDefinitions.map(app => {
//     this.activitiService.getAppTaskList(app.id).subscribe(
//       taskInfoList => {
//         taskInfoList.data.map(taskInfo => {
//           this.activitiService.getTask({filterId: taskInfo.id, filter: taskInfo.filter, appDefinitionId: app.id})
//             .subscribe(
//               task => {
//                 // assign task to individual list
//                 switch(taskInfo.name) {
//                   case "My Tasks":
//                     this.activitiOpenTask[app.id] = task.data;
//                     break;
//                   case "Queued Tasks":
//                     this.activitiQueuedTask[app.id] = task.data;
//                     break;
//                   case "Involved Tasks":
//                     this.activitiInvolvedTask[app.id] = task.data;
//                     break;
//                   case "Completed Tasks":
//                     this.activitiCompletedTask[app.id] = task.data;
//                     break;
//                   default:
//                     break;
//                 }
//               },
//               error => console.log(error)
//             );
//         });
//       },
//       error => console.log(error)
//     );
//   });
// }
//
// private getProcess() {
//   this.activitiAppDefinitions.map(app => {
//     this.activitiService.getProcessDefinitions({appDefinitionId: app.id}).subscribe(
//       processInfoList => {
//         this.activitiProcessDefinitions[app.id] = processInfoList.data;
//       },
//       error => console.log(error)
//     )
//   });
// }
//
// private getRunningProcessTaskForms() {
//   this.activitiAppDefinitions.map(app => {
//     this.activitiRunningProcessTaskForms[app.id] = []
//
//     this.activitiService.getAppProcess({appDefinitionId: app.id}).subscribe(
//       processTypeList => {
//         processTypeList.data.map(processType => {
//           // we only need running processes
//           if (processType.name === 'Running') {
//             this.activitiService.getRunningProcess({filterId: processType.id, appDefinitionId: app.id}).subscribe(
//               runningProcessList => {
//                 runningProcessList.data.map(runningProcess => {
//                   this.activitiService.getProcessTaskFormInfo({processInstanceId: runningProcess.id}).subscribe(
//                     taskFormInfo => {
//                       runningProcess.taskFormId = taskFormInfo.data[0].id;
//                       this.activitiRunningProcessTaskForms[app.id].push(runningProcess);
//                     },
//                     error => console.log(error)
//                   );
//                 });
//               },
//               error => console.log(error)
//             )
//           }
//         })
//       },
//       error => console.log(error)
//     );
//   });
// }
//
// public startProcess(id, name) {
//   const date = moment().format('D MMM, YYYY');
//   const body = {
//     'processDefinitionId': id,
//     name: `${name} - ${date}`
//   };
//   // this.activitiService.startProcess(body).subscribe(
//   //   resp => {
//   //     this.alert.success({ text: 'Process started.' })
//   //     this.getRunningProcessTaskForms();
//   //   },
//   //   error => console.log(error)
//   // );
// }
