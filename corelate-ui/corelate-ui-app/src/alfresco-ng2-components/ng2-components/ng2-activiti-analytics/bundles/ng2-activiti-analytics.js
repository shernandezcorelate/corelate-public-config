/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("@angular/material"), require("@angular/forms"), require("moment"), require("ng2-activiti-diagrams"), require("ng2-charts"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "ng2-alfresco-core", "rxjs/Rx", "@angular/material", "@angular/forms", "moment", "ng2-activiti-diagrams", "ng2-charts"], factory);
	else if(typeof exports === 'object')
		exports["ng2-activiti-analytics"] = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("@angular/material"), require("@angular/forms"), require("moment"), require("ng2-activiti-diagrams"), require("ng2-charts"));
	else
		root["ng2-activiti-analytics"] = factory(root["@angular/core"], root["ng2-alfresco-core"], root["rxjs/Rx"], root["@angular/material"], root["@angular/forms"], root["moment"], root["ng2-activiti-diagrams"], root["ng2-charts"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_389__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 816);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var Rx_1 = __webpack_require__(2);
var analytics_service_1 = __webpack_require__(38);
var AnalyticsReportListComponent = AnalyticsReportListComponent_1 = (function () {
    function AnalyticsReportListComponent(analyticsService) {
        var _this = this;
        this.analyticsService = analyticsService;
        this.layoutType = AnalyticsReportListComponent_1.LAYOUT_LIST;
        this.selectFirst = false;
        this.reportClick = new core_1.EventEmitter();
        this.onSuccess = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.reports = [];
        this.report$ = new Rx_1.Observable(function (observer) { return _this.reportObserver = observer; }).share();
    }
    AnalyticsReportListComponent.prototype.ngOnInit = function () {
        this.initObserver();
        this.getReportList(this.appId);
    };
    AnalyticsReportListComponent.prototype.initObserver = function () {
        var _this = this;
        this.report$.subscribe(function (report) {
            _this.reports.push(report);
        });
    };
    AnalyticsReportListComponent.prototype.reload = function (reportId) {
        this.reset();
        this.getReportList(this.appId, reportId);
    };
    AnalyticsReportListComponent.prototype.getReportList = function (appId, reportId) {
        var _this = this;
        this.analyticsService.getReportList(appId).subscribe(function (res) {
            if (res && res.length === 0) {
                _this.createDefaultReports();
            }
            else {
                res.forEach(function (report) {
                    _this.reportObserver.next(report);
                });
                if (reportId) {
                    _this.selectReportByReportId(reportId);
                }
                if (_this.selectFirst) {
                    _this.selectFirstReport();
                }
                _this.onSuccess.emit(res);
            }
        }, function (err) {
            _this.onError.emit(err);
        });
    };
    AnalyticsReportListComponent.prototype.createDefaultReports = function () {
        var _this = this;
        this.analyticsService.createDefaultReports().subscribe(function () {
            _this.analyticsService.getReportList(_this.appId).subscribe(function (response) {
                response.forEach(function (report) {
                    _this.reportObserver.next(report);
                });
                _this.onSuccess.emit(response);
            });
        });
    };
    AnalyticsReportListComponent.prototype.isReportsEmpty = function () {
        return this.reports === undefined || (this.reports && this.reports.length === 0);
    };
    AnalyticsReportListComponent.prototype.reset = function () {
        if (!this.isReportsEmpty()) {
            this.reports = [];
        }
    };
    AnalyticsReportListComponent.prototype.selectReport = function (report) {
        this.currentReport = report;
        this.reportClick.emit(report);
    };
    AnalyticsReportListComponent.prototype.selectReportByReportId = function (reportId) {
        var reportFound = this.reports.find(function (report) { return report.id === reportId; });
        if (reportFound) {
            this.currentReport = reportFound;
            this.reportClick.emit(reportFound);
        }
    };
    AnalyticsReportListComponent.prototype.selectFirstReport = function () {
        this.selectReport(this.reports[0]);
        this.selectFirst = false;
    };
    AnalyticsReportListComponent.prototype.isSelected = function (report) {
        return this.currentReport === report ? true : false;
    };
    AnalyticsReportListComponent.prototype.isList = function () {
        return this.layoutType === AnalyticsReportListComponent_1.LAYOUT_LIST;
    };
    AnalyticsReportListComponent.prototype.isGrid = function () {
        return this.layoutType === AnalyticsReportListComponent_1.LAYOUT_GRID;
    };
    return AnalyticsReportListComponent;
}());
AnalyticsReportListComponent.LAYOUT_LIST = 'LIST';
AnalyticsReportListComponent.LAYOUT_GRID = 'GRID';
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AnalyticsReportListComponent.prototype, "layoutType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AnalyticsReportListComponent.prototype, "appId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AnalyticsReportListComponent.prototype, "selectFirst", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], AnalyticsReportListComponent.prototype, "reportClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnalyticsReportListComponent.prototype, "onSuccess", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnalyticsReportListComponent.prototype, "onError", void 0);
AnalyticsReportListComponent = AnalyticsReportListComponent_1 = __decorate([
    core_1.Component({
        selector: ' adf-analytics-report-list, analytics-report-list',
        template: __webpack_require__(483),
        styles: [__webpack_require__(722)],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof analytics_service_1.AnalyticsService !== "undefined" && analytics_service_1.AnalyticsService) === "function" && _b || Object])
], AnalyticsReportListComponent);
exports.AnalyticsReportListComponent = AnalyticsReportListComponent;
var AnalyticsReportListComponent_1, _a, _b;


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(9);
var moment = __webpack_require__(14);
var ng2_activiti_diagrams_1 = __webpack_require__(64);
var ng2_alfresco_core_1 = __webpack_require__(1);
var analytics_service_1 = __webpack_require__(38);
var AnalyticsReportParametersComponent = AnalyticsReportParametersComponent_1 = (function () {
    function AnalyticsReportParametersComponent(analyticsService, formBuilder, logService, contentService) {
        this.analyticsService = analyticsService;
        this.formBuilder = formBuilder;
        this.logService = logService;
        this.contentService = contentService;
        this.hideComponent = false;
        this.onSuccess = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.onEdit = new core_1.EventEmitter();
        this.onFormValueChanged = new core_1.EventEmitter();
        this.saveReportSuccess = new core_1.EventEmitter();
        this.deleteReportSuccess = new core_1.EventEmitter();
        this.onDropdownChanged = new core_1.EventEmitter();
        this.onSuccessReportParams = new core_1.EventEmitter();
        this.onSuccessParamOpt = new core_1.EventEmitter();
        this.isEditable = false;
        this.hideParameters = true;
        this.formValidState = false;
    }
    AnalyticsReportParametersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dropDownSub = this.onDropdownChanged.subscribe(function (field) {
            var paramDependOn = _this.reportParameters.definition.parameters.find(function (p) { return p.dependsOn === field.id; });
            if (paramDependOn) {
                _this.retrieveParameterOptions(_this.reportParameters.definition.parameters, _this.appId, _this.reportId, field.value);
            }
        });
        this.paramOpts = this.onSuccessReportParams.subscribe(function (report) {
            if (report.hasParameters()) {
                _this.retrieveParameterOptions(report.definition.parameters, _this.appId);
                _this.generateFormGroupFromParameter(report.definition.parameters);
            }
        });
    };
    AnalyticsReportParametersComponent.prototype.ngOnChanges = function (changes) {
        this.isEditable = false;
        if (this.reportForm) {
            this.reportForm.reset();
        }
        var reportId = changes['reportId'];
        if (reportId && reportId.currentValue) {
            this.getReportParams(reportId.currentValue);
        }
        var appId = changes['appId'];
        if (appId && (appId.currentValue || appId.currentValue === null)) {
            this.getReportParams(this.reportId);
        }
    };
    AnalyticsReportParametersComponent.prototype.generateFormGroupFromParameter = function (parameters) {
        var _this = this;
        var formBuilderGroup = {};
        parameters.forEach(function (param) {
            switch (param.type) {
                case 'dateRange':
                    formBuilderGroup.dateRange = new forms_1.FormGroup({}, forms_1.Validators.required);
                    break;
                case 'processDefinition':
                    formBuilderGroup.processDefGroup = new forms_1.FormGroup({
                        processDefinitionId: new forms_1.FormControl(null, forms_1.Validators.required, null)
                    }, forms_1.Validators.required);
                    break;
                case 'duration':
                    formBuilderGroup.durationGroup = new forms_1.FormGroup({
                        duration: new forms_1.FormControl(null, forms_1.Validators.required, null)
                    }, forms_1.Validators.required);
                    break;
                case 'dateInterval':
                    formBuilderGroup.dateIntervalGroup = new forms_1.FormGroup({
                        dateRangeInterval: new forms_1.FormControl(null, forms_1.Validators.required, null)
                    }, forms_1.Validators.required);
                    break;
                case 'boolean':
                    formBuilderGroup.typeFilteringGroup = new forms_1.FormGroup({
                        typeFiltering: new forms_1.FormControl(null, forms_1.Validators.required, null)
                    }, forms_1.Validators.required);
                    break;
                case 'task':
                    formBuilderGroup.taskGroup = new forms_1.FormGroup({
                        taskName: new forms_1.FormControl(null, forms_1.Validators.required, null)
                    }, forms_1.Validators.required);
                    break;
                case 'integer':
                    formBuilderGroup.processInstanceGroup = new forms_1.FormGroup({
                        slowProcessInstanceInteger: new forms_1.FormControl(null, forms_1.Validators.required, null)
                    }, forms_1.Validators.required);
                    break;
                case 'status':
                    formBuilderGroup.statusGroup = new forms_1.FormGroup({
                        status: new forms_1.FormControl(null, forms_1.Validators.required, null)
                    }, forms_1.Validators.required);
                    break;
                default:
                    return;
            }
        });
        this.reportForm = this.formBuilder.group(formBuilderGroup);
        this.reportForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.reportForm.statusChanges.subscribe(function (data) { return _this.onStatusChanged(data); });
    };
    AnalyticsReportParametersComponent.prototype.getReportParams = function (reportId) {
        var _this = this;
        this.reportParamsSub = this.analyticsService.getReportParams(reportId).subscribe(function (res) {
            _this.reportParameters = res;
            if (_this.reportParameters.hasParameters()) {
                _this.onSuccessReportParams.emit(res);
            }
            else {
                _this.reportForm = _this.formBuilder.group({});
                _this.onSuccess.emit();
            }
        }, function (err) {
            _this.onError.emit(err);
        });
    };
    AnalyticsReportParametersComponent.prototype.retrieveParameterOptions = function (parameters, appId, reportId, processDefinitionId) {
        var _this = this;
        parameters.forEach(function (param) {
            _this.analyticsService.getParamValuesByType(param.type, appId, reportId, processDefinitionId).subscribe(function (opts) {
                param.options = opts;
                _this.onSuccessParamOpt.emit(opts);
            }, function (err) {
                _this.onError.emit(err);
            });
        });
    };
    AnalyticsReportParametersComponent.prototype.onProcessDefinitionChanges = function (field) {
        if (field.value) {
            this.onDropdownChanged.emit(field);
        }
    };
    AnalyticsReportParametersComponent.prototype.submit = function (values) {
        this.reportParamQuery = this.convertFormValuesToReportParamQuery(values);
        this.onSuccess.emit(this.reportParamQuery);
    };
    AnalyticsReportParametersComponent.prototype.onValueChanged = function (values) {
        this.onFormValueChanged.emit(values);
        if (this.reportForm && this.reportForm.valid) {
            this.submit(values);
        }
    };
    AnalyticsReportParametersComponent.prototype.onStatusChanged = function (status) {
        if (this.reportForm && !this.reportForm.pending && this.reportForm.dirty) {
            this.formValidState = this.reportForm.valid;
        }
    };
    AnalyticsReportParametersComponent.prototype.convertMomentDate = function (date) {
        return moment(date, AnalyticsReportParametersComponent_1.FORMAT_DATE_ACTIVITI, true)
            .format(AnalyticsReportParametersComponent_1.FORMAT_DATE_ACTIVITI) + 'T00:00:00.000Z';
    };
    AnalyticsReportParametersComponent.prototype.getTodayDate = function () {
        return moment().format(AnalyticsReportParametersComponent_1.FORMAT_DATE_ACTIVITI);
    };
    AnalyticsReportParametersComponent.prototype.convertNumber = function (value) {
        return value != null ? parseInt(value, 10) : 0;
    };
    AnalyticsReportParametersComponent.prototype.convertFormValuesToReportParamQuery = function (values) {
        var reportParamQuery = new ng2_activiti_diagrams_1.ReportQuery();
        if (values.dateRange) {
            reportParamQuery.dateRange.startDate = this.convertMomentDate(values.dateRange.startDate);
            reportParamQuery.dateRange.endDate = this.convertMomentDate(values.dateRange.endDate);
        }
        if (values.statusGroup) {
            reportParamQuery.status = values.statusGroup.status;
        }
        if (values.processDefGroup) {
            reportParamQuery.processDefinitionId = values.processDefGroup.processDefinitionId;
        }
        if (values.taskGroup) {
            reportParamQuery.taskName = values.taskGroup.taskName;
        }
        if (values.durationGroup) {
            reportParamQuery.duration = values.durationGroup.duration;
        }
        if (values.dateIntervalGroup) {
            reportParamQuery.dateRangeInterval = values.dateIntervalGroup.dateRangeInterval;
        }
        if (values.processInstanceGroup) {
            reportParamQuery.slowProcessInstanceInteger = this.convertNumber(values.processInstanceGroup.slowProcessInstanceInteger);
        }
        if (values.typeFilteringGroup) {
            reportParamQuery.typeFiltering = values.typeFilteringGroup.typeFiltering;
        }
        return reportParamQuery;
    };
    AnalyticsReportParametersComponent.prototype.ngOnDestroy = function () {
        this.dropDownSub.unsubscribe();
        this.paramOpts.unsubscribe();
        if (this.reportParamsSub) {
            this.reportParamsSub.unsubscribe();
        }
    };
    AnalyticsReportParametersComponent.prototype.editEnable = function () {
        this.isEditable = true;
    };
    AnalyticsReportParametersComponent.prototype.editDisable = function () {
        this.isEditable = false;
    };
    AnalyticsReportParametersComponent.prototype.editTitle = function () {
        var _this = this;
        this.reportParamsSub = this.analyticsService.updateReport(this.reportParameters.id, this.reportParameters.name).subscribe(function (res) {
            _this.editDisable();
            _this.onEdit.emit(_this.reportParameters.name);
        }, function (err) {
            _this.onError.emit(err);
        });
    };
    AnalyticsReportParametersComponent.prototype.showDialog = function (event) {
        if (!this.reportNameDialog.nativeElement.showModal) {
            dialogPolyfill.registerDialog(this.reportNameDialog.nativeElement);
        }
        this.reportNameDialog.nativeElement.showModal();
        this.action = event;
        this.reportName = this.reportParameters.name + ' ( ' + this.getTodayDate() + ' )';
    };
    AnalyticsReportParametersComponent.prototype.closeDialog = function () {
        if (this.reportNameDialog) {
            this.reportNameDialog.nativeElement.close();
        }
    };
    AnalyticsReportParametersComponent.prototype.performAction = function (action, reportParamQuery) {
        reportParamQuery.reportName = this.reportName;
        this.closeDialog();
        if (action === 'Save') {
            this.doSave(reportParamQuery);
        }
        else if (action === 'Export') {
            this.doExport(reportParamQuery);
        }
        this.resetActions();
    };
    AnalyticsReportParametersComponent.prototype.resetActions = function () {
        this.action = '';
        this.reportName = '';
    };
    AnalyticsReportParametersComponent.prototype.isSaveAction = function () {
        return this.action === 'Save';
    };
    AnalyticsReportParametersComponent.prototype.isFormValid = function () {
        return this.reportForm && this.reportForm.dirty && this.reportForm.valid;
    };
    AnalyticsReportParametersComponent.prototype.doExport = function (paramQuery) {
        var _this = this;
        this.analyticsService.exportReportToCsv(this.reportId, paramQuery).subscribe(function (data) {
            var blob = new Blob([data], { type: 'text/csv' });
            _this.contentService.downloadBlob(blob, paramQuery.reportName + '.csv');
        });
    };
    AnalyticsReportParametersComponent.prototype.doSave = function (paramQuery) {
        var _this = this;
        this.analyticsService.saveReport(this.reportId, paramQuery).subscribe(function () {
            _this.saveReportSuccess.emit(_this.reportId);
        });
    };
    AnalyticsReportParametersComponent.prototype.deleteReport = function (reportId) {
        var _this = this;
        this.analyticsService.deleteReport(reportId).subscribe(function () {
            _this.deleteReportSuccess.emit(reportId);
        }, function (error) { return _this.logService.error(error); });
    };
    AnalyticsReportParametersComponent.prototype.ngAfterViewChecked = function () {
        if (componentHandler) {
            componentHandler.upgradeAllRegistered();
        }
    };
    AnalyticsReportParametersComponent.prototype.ngAfterContentChecked = function () {
        if (this.reportForm && this.reportForm.valid) {
            this.reportForm.markAsDirty();
        }
    };
    AnalyticsReportParametersComponent.prototype.toggleParameters = function () {
        this.hideParameters = !this.hideParameters;
    };
    AnalyticsReportParametersComponent.prototype.isParametersHide = function () {
        return this.hideParameters;
    };
    return AnalyticsReportParametersComponent;
}());
AnalyticsReportParametersComponent.FORMAT_DATE_ACTIVITI = 'YYYY-MM-DD';
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AnalyticsReportParametersComponent.prototype, "appId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AnalyticsReportParametersComponent.prototype, "reportId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AnalyticsReportParametersComponent.prototype, "hideComponent", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnalyticsReportParametersComponent.prototype, "onSuccess", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnalyticsReportParametersComponent.prototype, "onError", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnalyticsReportParametersComponent.prototype, "onEdit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnalyticsReportParametersComponent.prototype, "onFormValueChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnalyticsReportParametersComponent.prototype, "saveReportSuccess", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnalyticsReportParametersComponent.prototype, "deleteReportSuccess", void 0);
__decorate([
    core_1.ViewChild('reportNameDialog'),
    __metadata("design:type", Object)
], AnalyticsReportParametersComponent.prototype, "reportNameDialog", void 0);
AnalyticsReportParametersComponent = AnalyticsReportParametersComponent_1 = __decorate([
    core_1.Component({
        selector: 'adf-analytics-report-parameters, analytics-report-parameters',
        template: __webpack_require__(484),
        styles: [__webpack_require__(723)],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof analytics_service_1.AnalyticsService !== "undefined" && analytics_service_1.AnalyticsService) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _c || Object, typeof (_d = typeof ng2_alfresco_core_1.ContentService !== "undefined" && ng2_alfresco_core_1.ContentService) === "function" && _d || Object])
], AnalyticsReportParametersComponent);
exports.AnalyticsReportParametersComponent = AnalyticsReportParametersComponent;
var AnalyticsReportParametersComponent_1, _a, _b, _c, _d;


/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var analytics_generator_component_1 = __webpack_require__(87);
var AnalyticsComponent = (function () {
    function AnalyticsComponent() {
        this.hideParameters = false;
        this.editReport = new core_1.EventEmitter();
        this.reportSaved = new core_1.EventEmitter();
        this.reportDeleted = new core_1.EventEmitter();
    }
    AnalyticsComponent.prototype.ngOnChanges = function (changes) {
        this.analyticsgenerator.reset();
    };
    AnalyticsComponent.prototype.showReport = function ($event) {
        this.analyticsgenerator.generateReport(this.reportId, $event);
    };
    AnalyticsComponent.prototype.reset = function () {
        this.analyticsgenerator.reset();
    };
    AnalyticsComponent.prototype.onEditReport = function (name) {
        this.editReport.emit(name);
    };
    AnalyticsComponent.prototype.onSaveReportSuccess = function (reportId) {
        this.reportSaved.emit(reportId);
    };
    AnalyticsComponent.prototype.onDeleteReportSuccess = function () {
        this.reportDeleted.emit();
    };
    return AnalyticsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AnalyticsComponent.prototype, "appId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AnalyticsComponent.prototype, "reportId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AnalyticsComponent.prototype, "hideParameters", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnalyticsComponent.prototype, "editReport", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnalyticsComponent.prototype, "reportSaved", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnalyticsComponent.prototype, "reportDeleted", void 0);
__decorate([
    core_1.ViewChild('analyticsgenerator'),
    __metadata("design:type", typeof (_a = typeof analytics_generator_component_1.AnalyticsGeneratorComponent !== "undefined" && analytics_generator_component_1.AnalyticsGeneratorComponent) === "function" && _a || Object)
], AnalyticsComponent.prototype, "analyticsgenerator", void 0);
AnalyticsComponent = __decorate([
    core_1.Component({
        selector: 'adf-analytics, activiti-analytics',
        template: __webpack_require__(485),
        styles: [__webpack_require__(724)],
        encapsulation: core_1.ViewEncapsulation.None
    })
], AnalyticsComponent);
exports.AnalyticsComponent = AnalyticsComponent;
var _a;


/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var checkbox_widget_1 = __webpack_require__(219);
var date_range_widget_1 = __webpack_require__(220);
var dropdown_widget_1 = __webpack_require__(221);
var duration_widget_1 = __webpack_require__(222);
var number_widget_1 = __webpack_require__(188);
__export(__webpack_require__(221));
__export(__webpack_require__(188));
__export(__webpack_require__(222));
__export(__webpack_require__(219));
__export(__webpack_require__(220));
exports.WIDGET_DIRECTIVES = [
    dropdown_widget_1.DropdownWidgetComponent,
    number_widget_1.NumberWidgetComponent,
    duration_widget_1.DurationWidgetComponent,
    checkbox_widget_1.CheckboxWidgetComponent,
    date_range_widget_1.DateRangeWidgetComponent
];


/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(9);
var widget_component_1 = __webpack_require__(189);
var NumberWidgetComponent = (function (_super) {
    __extends(NumberWidgetComponent, _super);
    function NumberWidgetComponent(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.required = false;
        return _this;
    }
    NumberWidgetComponent.prototype.ngOnInit = function () {
        if (this.required) {
            this.formGroup.get(this.controllerName).setValidators(forms_1.Validators.required);
        }
    };
    NumberWidgetComponent.prototype.setupMaterialComponents = function (handler) {
        if (handler) {
            handler.upgradeAllRegistered();
            if (this.elementRef && this.hasValue()) {
                var container = this.elementRef.nativeElement.querySelector('.mdl-textfield');
                if (container && container.MaterialTextfield) {
                    container.MaterialTextfield.change(this.field.value.toString());
                }
            }
            return true;
        }
        return false;
    };
    return NumberWidgetComponent;
}(widget_component_1.WidgetComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NumberWidgetComponent.prototype, "field", void 0);
__decorate([
    core_1.Input('group'),
    __metadata("design:type", typeof (_a = typeof forms_1.FormGroup !== "undefined" && forms_1.FormGroup) === "function" && _a || Object)
], NumberWidgetComponent.prototype, "formGroup", void 0);
__decorate([
    core_1.Input('controllerName'),
    __metadata("design:type", String)
], NumberWidgetComponent.prototype, "controllerName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], NumberWidgetComponent.prototype, "required", void 0);
NumberWidgetComponent = __decorate([
    core_1.Component({
        selector: 'number-widget',
        template: __webpack_require__(490),
        styles: [__webpack_require__(728)],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object])
], NumberWidgetComponent);
exports.NumberWidgetComponent = NumberWidgetComponent;
var _a, _b;


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var componentHandler;
var WidgetComponent = (function () {
    function WidgetComponent() {
        this.fieldChanged = new core_1.EventEmitter();
    }
    WidgetComponent.prototype.ngOnChanges = function (changes) {
        var field = changes['field'];
        if (field && field.currentValue) {
            this.fieldChanged.emit(field.currentValue.value);
            return;
        }
    };
    WidgetComponent.prototype.hasField = function () {
        return this.field ? true : false;
    };
    WidgetComponent.prototype.hasValue = function () {
        return this.field &&
            this.field.value !== null &&
            this.field.value !== undefined;
    };
    WidgetComponent.prototype.changeValue = function (field) {
        this.fieldChanged.emit(field);
    };
    WidgetComponent.prototype.ngAfterViewInit = function () {
        this.setupMaterialComponents(componentHandler);
    };
    WidgetComponent.prototype.setupMaterialComponents = function (handler) {
        if (handler) {
            handler.upgradeAllRegistered();
            return true;
        }
        return false;
    };
    return WidgetComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WidgetComponent.prototype, "field", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], WidgetComponent.prototype, "fieldChanged", void 0);
exports.WidgetComponent = WidgetComponent;
var _a;


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(9);
var widget_component_1 = __webpack_require__(189);
var CheckboxWidgetComponent = (function (_super) {
    __extends(CheckboxWidgetComponent, _super);
    function CheckboxWidgetComponent(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        return _this;
    }
    return CheckboxWidgetComponent;
}(widget_component_1.WidgetComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CheckboxWidgetComponent.prototype, "field", void 0);
__decorate([
    core_1.Input('group'),
    __metadata("design:type", typeof (_a = typeof forms_1.FormGroup !== "undefined" && forms_1.FormGroup) === "function" && _a || Object)
], CheckboxWidgetComponent.prototype, "formGroup", void 0);
__decorate([
    core_1.Input('controllerName'),
    __metadata("design:type", String)
], CheckboxWidgetComponent.prototype, "controllerName", void 0);
CheckboxWidgetComponent = __decorate([
    core_1.Component({
        selector: 'checkbox-widget',
        template: __webpack_require__(486),
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object])
], CheckboxWidgetComponent);
exports.CheckboxWidgetComponent = CheckboxWidgetComponent;
var _a, _b;


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(9);
var material_1 = __webpack_require__(3);
var moment = __webpack_require__(14);
var ng2_alfresco_core_1 = __webpack_require__(1);
var DateRangeWidgetComponent = (function () {
    function DateRangeWidgetComponent(dateAdapter) {
        this.dateAdapter = dateAdapter;
        this.FORMAT_DATE_ACTIVITI = 'YYYY-MM-DD';
        this.SHOW_FORMAT = 'DD/MM/YYYY';
        this.dateRangeChanged = new core_1.EventEmitter();
    }
    DateRangeWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        var momentDateAdapter = this.dateAdapter;
        momentDateAdapter.overrideDisplyaFormat = this.SHOW_FORMAT;
        if (this.field) {
            if (this.field.value && this.field.value.startDate) {
                this.startDatePicker = moment(this.field.value.startDate, this.FORMAT_DATE_ACTIVITI);
            }
            if (this.field.value && this.field.value.endDate) {
                this.endDatePicker = moment(this.field.value.endDate, this.FORMAT_DATE_ACTIVITI);
            }
        }
        var startDateControl = new forms_1.FormControl(this.startDatePicker);
        startDateControl.setValidators(forms_1.Validators.required);
        this.dateRange.addControl('startDate', startDateControl);
        var endDateControl = new forms_1.FormControl(this.endDatePicker);
        endDateControl.setValidators(forms_1.Validators.required);
        this.dateRange.addControl('endDate', endDateControl);
        this.dateRange.setValidators(this.dateCheck);
        this.dateRange.valueChanges.subscribe(function () { return _this.onGroupValueChanged(); });
    };
    DateRangeWidgetComponent.prototype.onGroupValueChanged = function () {
        if (this.dateRange.valid) {
            var dateStart = this.convertToMomentDateWithTime(this.dateRange.controls.startDate.value);
            var endStart = this.convertToMomentDateWithTime(this.dateRange.controls.endDate.value);
            this.dateRangeChanged.emit({ startDate: dateStart, endDate: endStart });
        }
    };
    DateRangeWidgetComponent.prototype.convertToMomentDateWithTime = function (date) {
        return moment(date, this.FORMAT_DATE_ACTIVITI, true).format(this.FORMAT_DATE_ACTIVITI) + 'T00:00:00.000Z';
    };
    DateRangeWidgetComponent.prototype.dateCheck = function (formControl) {
        var startDate = moment(formControl.get('startDate').value);
        var endDate = moment(formControl.get('endDate').value);
        var result = startDate.isAfter(endDate);
        return result ? { 'greaterThan': true } : null;
    };
    DateRangeWidgetComponent.prototype.isStartDateGreaterThanEndDate = function () {
        return this.dateRange && this.dateRange.errors && this.dateRange.errors.greaterThan;
    };
    DateRangeWidgetComponent.prototype.isStartDateEmpty = function () {
        return this.dateRange && this.dateRange.controls.startDate && !this.dateRange.controls.startDate.valid;
    };
    return DateRangeWidgetComponent;
}());
__decorate([
    core_1.Input('group'),
    __metadata("design:type", typeof (_a = typeof forms_1.FormGroup !== "undefined" && forms_1.FormGroup) === "function" && _a || Object)
], DateRangeWidgetComponent.prototype, "dateRange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DateRangeWidgetComponent.prototype, "field", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], DateRangeWidgetComponent.prototype, "dateRangeChanged", void 0);
DateRangeWidgetComponent = __decorate([
    core_1.Component({
        selector: 'adf-date-range-widget',
        template: __webpack_require__(487),
        providers: [
            { provide: material_1.DateAdapter, useClass: ng2_alfresco_core_1.MomentDateAdapter },
            { provide: material_1.MD_DATE_FORMATS, useValue: ng2_alfresco_core_1.MOMENT_DATE_FORMATS }
        ],
        styles: [__webpack_require__(725)],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof material_1.DateAdapter !== "undefined" && material_1.DateAdapter) === "function" && _c || Object])
], DateRangeWidgetComponent);
exports.DateRangeWidgetComponent = DateRangeWidgetComponent;
var _a, _b, _c;


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(9);
var widget_component_1 = __webpack_require__(189);
var DropdownWidgetComponent = (function (_super) {
    __extends(DropdownWidgetComponent, _super);
    function DropdownWidgetComponent() {
        var _this = _super.call(this) || this;
        _this.fieldChanged = new core_1.EventEmitter();
        _this.showDefaultOption = true;
        _this.required = false;
        _this.defaultOptionText = 'Choose One';
        return _this;
    }
    DropdownWidgetComponent.prototype.ngOnInit = function () {
        if (this.required) {
            this.formGroup.get(this.controllerName).setValidators(forms_1.Validators.compose(this.buildValidatorList()));
        }
    };
    DropdownWidgetComponent.prototype.validateDropDown = function (controller) {
        return controller.value !== 'null' ? null : { controllerName: false };
    };
    DropdownWidgetComponent.prototype.buildValidatorList = function () {
        var validatorList = [];
        validatorList.push(forms_1.Validators.required);
        if (this.showDefaultOption) {
            validatorList.push(this.validateDropDown);
        }
        return validatorList;
    };
    return DropdownWidgetComponent;
}(widget_component_1.WidgetComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DropdownWidgetComponent.prototype, "field", void 0);
__decorate([
    core_1.Input('group'),
    __metadata("design:type", typeof (_a = typeof forms_1.FormGroup !== "undefined" && forms_1.FormGroup) === "function" && _a || Object)
], DropdownWidgetComponent.prototype, "formGroup", void 0);
__decorate([
    core_1.Input('controllerName'),
    __metadata("design:type", String)
], DropdownWidgetComponent.prototype, "controllerName", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], DropdownWidgetComponent.prototype, "fieldChanged", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DropdownWidgetComponent.prototype, "showDefaultOption", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DropdownWidgetComponent.prototype, "required", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DropdownWidgetComponent.prototype, "defaultOptionText", void 0);
DropdownWidgetComponent = __decorate([
    core_1.Component({
        selector: 'dropdown-widget',
        template: __webpack_require__(488),
        styles: [__webpack_require__(726)],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [])
], DropdownWidgetComponent);
exports.DropdownWidgetComponent = DropdownWidgetComponent;
var _a, _b;


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(9);
var ng2_activiti_diagrams_1 = __webpack_require__(64);
var number_widget_1 = __webpack_require__(188);
var DurationWidgetComponent = (function (_super) {
    __extends(DurationWidgetComponent, _super);
    function DurationWidgetComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.elementRef = elementRef;
        _this.required = false;
        return _this;
    }
    DurationWidgetComponent.prototype.ngOnInit = function () {
        var timeType = new forms_1.FormControl();
        this.formGroup.addControl('timeType', timeType);
        if (this.required) {
            this.formGroup.get(this.controllerName).setValidators(forms_1.Validators.required);
        }
        if (this.field.value === null) {
            this.field.value = 0;
        }
        var paramOptions = [];
        paramOptions.push(new ng2_activiti_diagrams_1.ParameterValueModel({ id: '1', name: 'Seconds' }));
        paramOptions.push(new ng2_activiti_diagrams_1.ParameterValueModel({ id: '60', name: 'Minutes' }));
        paramOptions.push(new ng2_activiti_diagrams_1.ParameterValueModel({ id: '3600', name: 'Hours' }));
        paramOptions.push(new ng2_activiti_diagrams_1.ParameterValueModel({ id: '86400', name: 'Days', selected: true }));
        this.duration = new ng2_activiti_diagrams_1.ReportParameterDetailsModel({ id: 'duration', name: 'duration', options: paramOptions });
        this.duration.value = paramOptions[0].id;
    };
    DurationWidgetComponent.prototype.calculateDuration = function () {
        if (this.field && this.duration.value) {
            this.currentValue = parseInt(this.field.value, 10) * parseInt(this.duration.value, 10);
            this.formGroup.get(this.controllerName).setValue(this.currentValue);
            this.fieldChanged.emit({ value: this.currentValue });
        }
    };
    return DurationWidgetComponent;
}(number_widget_1.NumberWidgetComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DurationWidgetComponent.prototype, "field", void 0);
__decorate([
    core_1.Input('group'),
    __metadata("design:type", typeof (_a = typeof forms_1.FormGroup !== "undefined" && forms_1.FormGroup) === "function" && _a || Object)
], DurationWidgetComponent.prototype, "formGroup", void 0);
__decorate([
    core_1.Input('controllerName'),
    __metadata("design:type", String)
], DurationWidgetComponent.prototype, "controllerName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DurationWidgetComponent.prototype, "required", void 0);
DurationWidgetComponent = __decorate([
    core_1.Component({
        selector: 'duration-widget',
        template: __webpack_require__(489),
        styles: [__webpack_require__(727)],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object])
], DurationWidgetComponent);
exports.DurationWidgetComponent = DurationWidgetComponent;
var _a, _b;


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(9);
var analytics_service_1 = __webpack_require__(38);
var AnalyticsReportHeatMapComponent = (function () {
    function AnalyticsReportHeatMapComponent(analyticsService, formBuilder) {
        this.analyticsService = analyticsService;
        this.formBuilder = formBuilder;
        this.onSuccess = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.field = {};
    }
    AnalyticsReportHeatMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.field.id = 'metrics';
        this.field.value = 'totalCount';
        this.analyticsService.getMetricValues().subscribe(function (opts) {
            _this.field.options = opts;
            _this.onSuccess.emit(opts);
        });
    };
    AnalyticsReportHeatMapComponent.prototype.onMetricChanges = function (field) {
        if (field.value === 'totalCount') {
            this.currentMetric = this.report.totalCountValues;
            this.currentMetricColors = this.report.totalCountsPercentages;
            this.metricType = 'times';
        }
        else if (field.value === 'totalTime') {
            this.currentMetric = this.report.totalTimeValues;
            this.currentMetricColors = this.report.totalTimePercentages;
            this.metricType = 'hours';
        }
        else if (field.value === 'avgTime') {
            this.currentMetric = this.report.avgTimeValues;
            this.currentMetricColors = this.report.avgTimePercentages;
            this.metricType = 'hours';
        }
    };
    AnalyticsReportHeatMapComponent.prototype.initForm = function () {
        this.metricForm = this.formBuilder.group({
            metricGroup: new forms_1.FormGroup({
                metric: new forms_1.FormControl()
            })
        });
    };
    AnalyticsReportHeatMapComponent.prototype.hasMetric = function () {
        return (this.report.totalCountsPercentages ||
            this.report.totalTimePercentages ||
            this.report.avgTimePercentages) ? true : false;
    };
    return AnalyticsReportHeatMapComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AnalyticsReportHeatMapComponent.prototype, "report", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnalyticsReportHeatMapComponent.prototype, "onSuccess", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnalyticsReportHeatMapComponent.prototype, "onError", void 0);
AnalyticsReportHeatMapComponent = __decorate([
    core_1.Component({
        selector: 'adf-analytics-report-heat-map, analytics-report-heat-map',
        template: __webpack_require__(482)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof analytics_service_1.AnalyticsService !== "undefined" && analytics_service_1.AnalyticsService) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object])
], AnalyticsReportHeatMapComponent);
exports.AnalyticsReportHeatMapComponent = AnalyticsReportHeatMapComponent;
var _a, _b;


/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var material_1 = __webpack_require__(3);
function modules() {
    return [
        material_1.MdButtonModule,
        material_1.MdInputModule,
        material_1.MdIconModule,
        material_1.MdTooltipModule,
        material_1.MdNativeDateModule,
        material_1.MdDatepickerModule,
        material_1.MdGridListModule
    ];
}
exports.modules = modules;
var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    core_1.NgModule({
        imports: modules(),
        exports: modules()
    })
], MaterialModule);
exports.MaterialModule = MaterialModule;


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng2_activiti_diagrams_1 = __webpack_require__(64);
var ng2_activiti_diagrams_2 = __webpack_require__(64);
var ng2_alfresco_core_1 = __webpack_require__(1);
var Rx_1 = __webpack_require__(2);
var AnalyticsService = (function () {
    function AnalyticsService(apiService, logService) {
        this.apiService = apiService;
        this.logService = logService;
    }
    AnalyticsService.prototype.getReportList = function (appId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.reportApi.getReportList())
            .map(function (res) {
            var reports = [];
            res.forEach(function (report) {
                var reportModel = new ng2_activiti_diagrams_1.ReportParametersModel(report);
                if (_this.isReportValid(appId, report)) {
                    reports.push(reportModel);
                }
            });
            return reports;
        }).catch(function (err) { return _this.handleError(err); });
    };
    AnalyticsService.prototype.getReportByName = function (reportName) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.reportApi.getReportList())
            .map(function (response) {
            return response.find(function (report) { return report.name === reportName; });
        }).catch(function (err) { return _this.handleError(err); });
    };
    AnalyticsService.prototype.isReportValid = function (appId, report) {
        var isValid = true;
        if (appId && appId !== '0' && report.name.includes('Process definition overview')) {
            isValid = false;
        }
        return isValid;
    };
    AnalyticsService.prototype.getReportParams = function (reportId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.reportApi.getReportParams(reportId))
            .map(function (res) {
            return new ng2_activiti_diagrams_1.ReportParametersModel(res);
        }).catch(function (err) { return _this.handleError(err); });
    };
    AnalyticsService.prototype.getParamValuesByType = function (type, appId, reportId, processDefinitionId) {
        if (type === 'status') {
            return this.getProcessStatusValues();
        }
        else if (type === 'processDefinition') {
            if (appId === null || appId === undefined) {
                return this.getProcessDefinitionsValuesNoApp();
            }
            else {
                return this.getProcessDefinitionsValues(appId);
            }
        }
        else if (type === 'dateInterval') {
            return this.getDateIntervalValues();
        }
        else if (type === 'task' && reportId && processDefinitionId) {
            return this.getTasksByProcessDefinitionId(reportId, processDefinitionId);
        }
        else {
            return Rx_1.Observable.create(function (observer) {
                observer.next(null);
                observer.complete();
            });
        }
    };
    AnalyticsService.prototype.getProcessStatusValues = function () {
        var paramOptions = [];
        paramOptions.push(new ng2_activiti_diagrams_1.ParameterValueModel({ id: 'All', name: 'All' }));
        paramOptions.push(new ng2_activiti_diagrams_1.ParameterValueModel({ id: 'Active', name: 'Active' }));
        paramOptions.push(new ng2_activiti_diagrams_1.ParameterValueModel({ id: 'Complete', name: 'Complete' }));
        return Rx_1.Observable.create(function (observer) {
            observer.next(paramOptions);
            observer.complete();
        });
    };
    AnalyticsService.prototype.getDateIntervalValues = function () {
        var paramOptions = [];
        paramOptions.push(new ng2_activiti_diagrams_1.ParameterValueModel({ id: 'byHour', name: 'By hour' }));
        paramOptions.push(new ng2_activiti_diagrams_1.ParameterValueModel({ id: 'byDay', name: 'By day' }));
        paramOptions.push(new ng2_activiti_diagrams_1.ParameterValueModel({ id: 'byWeek', name: 'By week' }));
        paramOptions.push(new ng2_activiti_diagrams_1.ParameterValueModel({ id: 'byMonth', name: 'By month' }));
        paramOptions.push(new ng2_activiti_diagrams_1.ParameterValueModel({ id: 'byYear', name: 'By year' }));
        return Rx_1.Observable.create(function (observer) {
            observer.next(paramOptions);
            observer.complete();
        });
    };
    AnalyticsService.prototype.getMetricValues = function () {
        var paramOptions = [];
        paramOptions.push(new ng2_activiti_diagrams_1.ParameterValueModel({ id: 'totalCount', name: 'Number of times a step is executed' }));
        paramOptions.push(new ng2_activiti_diagrams_1.ParameterValueModel({ id: 'totalTime', name: 'Total time spent in a process step' }));
        paramOptions.push(new ng2_activiti_diagrams_1.ParameterValueModel({ id: 'avgTime', name: 'Average time spent in a process step' }));
        return Rx_1.Observable.create(function (observer) {
            observer.next(paramOptions);
            observer.complete();
        });
    };
    AnalyticsService.prototype.getProcessDefinitionsValuesNoApp = function () {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.reportApi.getProcessDefinitions())
            .map(function (res) {
            var paramOptions = [];
            res.forEach(function (opt) {
                paramOptions.push(new ng2_activiti_diagrams_1.ParameterValueModel(opt));
            });
            return paramOptions;
        }).catch(function (err) { return _this.handleError(err); });
    };
    AnalyticsService.prototype.getProcessDefinitionsValues = function (appId) {
        var _this = this;
        var options = { 'appDefinitionId': appId };
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.processDefinitionsApi.getProcessDefinitions(options))
            .map(function (res) {
            var paramOptions = [];
            res.data.forEach(function (opt) {
                paramOptions.push(new ng2_activiti_diagrams_1.ParameterValueModel(opt));
            });
            return paramOptions;
        }).catch(function (err) { return _this.handleError(err); });
    };
    AnalyticsService.prototype.getTasksByProcessDefinitionId = function (reportId, processDefinitionId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.reportApi.getTasksByProcessDefinitionId(reportId, processDefinitionId))
            .map(function (res) {
            var paramOptions = [];
            res.forEach(function (opt) {
                paramOptions.push(new ng2_activiti_diagrams_1.ParameterValueModel({ id: opt, name: opt }));
            });
            return paramOptions;
        }).catch(function (err) { return _this.handleError(err); });
    };
    AnalyticsService.prototype.getReportsByParams = function (reportId, paramsQuery) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.reportApi.getReportsByParams(reportId, paramsQuery))
            .map(function (res) {
            var elements = [];
            res.elements.forEach(function (chartData) {
                if (chartData.type === 'pieChart') {
                    elements.push(new ng2_activiti_diagrams_2.PieChart(chartData));
                }
                else if (chartData.type === 'table') {
                    elements.push(new ng2_activiti_diagrams_2.TableChart(chartData));
                }
                else if (chartData.type === 'processDefinitionHeatMap') {
                    elements.push(new ng2_activiti_diagrams_2.HeatMapChart(chartData));
                }
                else if (chartData.type === 'masterDetailTable') {
                    elements.push(new ng2_activiti_diagrams_2.DetailsTableChart(chartData));
                }
                else if (chartData.type === 'barChart') {
                    elements.push(new ng2_activiti_diagrams_2.BarChart(chartData));
                }
                else if (chartData.type === 'multiBarChart') {
                    elements.push(new ng2_activiti_diagrams_2.MultiBarChart(chartData));
                }
            });
            return elements;
        }).catch(function (err) { return _this.handleError(err); });
    };
    AnalyticsService.prototype.createDefaultReports = function () {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.reportApi.createDefaultReports())
            .map(this.toJson)
            .catch(function (err) { return _this.handleError(err); });
    };
    AnalyticsService.prototype.updateReport = function (reportId, name) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.reportApi.updateReport(reportId, name))
            .map(function (res) {
            _this.logService.info('upload');
        }).catch(function (err) { return _this.handleError(err); });
    };
    AnalyticsService.prototype.exportReportToCsv = function (reportId, paramsQuery) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.reportApi.exportToCsv(reportId, paramsQuery))
            .map(function (res) {
            _this.logService.info('export');
            return res;
        }).catch(function (err) { return _this.handleError(err); });
    };
    AnalyticsService.prototype.saveReport = function (reportId, paramsQuery) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.reportApi.saveReport(reportId, paramsQuery))
            .map(function () {
            _this.logService.info('save');
        }).catch(function (err) { return _this.handleError(err); });
    };
    AnalyticsService.prototype.deleteReport = function (reportId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.reportApi.deleteReport(reportId))
            .map(function () {
            _this.logService.info('delete');
        }).catch(function (err) { return _this.handleError(err); });
    };
    AnalyticsService.prototype.handleError = function (error) {
        this.logService.error(error);
        return Rx_1.Observable.throw(error || 'Server error');
    };
    AnalyticsService.prototype.toJson = function (res) {
        return res || {};
    };
    return AnalyticsService;
}());
AnalyticsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _b || Object])
], AnalyticsService);
exports.AnalyticsService = AnalyticsService;
var _a, _b;


/***/ }),

/***/ 389:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_389__;

/***/ }),

/***/ 481:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"reports\">\n    <div class=\"report-icons\">\n        <button md-icon-button\n                *ngFor=\"let report of reports; let idx = index\"\n                [mdTooltip]=\"report.title\"\n                [color]=\"isCurrent(idx) ? 'primary' : null\"\n                (click)=\"selectCurrent(idx)\">\n            <md-icon>{{report.icon}}</md-icon>\n        </button>\n    </div>\n    <div class=\"clear-both\"> </div>\n    <div *ngFor=\"let report of reports; let idx = index\">\n        <div [ngSwitch]=\"report.type\">\n            <div *ngSwitchCase=\"'pie'\">\n                <div class=\"col-md-6\" *ngIf=\"isCurrent(idx)\">\n                    <h4>{{report.title}}</h4>\n                    <div *ngIf=\"!report.hasData()\">{{'ANALYTICS.MESSAGES.NO-DATA-FOUND' | translate}}</div>\n                    <div *ngIf=\"report.hasData()\">\n                        <div *ngIf=\"report.hasZeroValues()\">{{'ANALYTICS.MESSAGES.ZERO-DATA-FOUND' | translate}}</div>\n                        <canvas baseChart *ngIf=\"!report.hasZeroValues()\" class=\"chart\"\n                                [data]=\"report.data\"\n                                [labels]=\"report.labels\"\n                                [chartType]=\"report.type\">\n                        </canvas>\n                    </div>\n                </div>\n            </div>\n            <div *ngSwitchCase=\"'table'\" >\n                <div *ngIf=\"isCurrent(idx)\">\n                    <h4>{{report.title}}</h4>\n                    <div *ngIf=\"!report.hasDatasets()\">{{'ANALYTICS.MESSAGES.NO-DATA-FOUND' | translate}}</div>\n                    <div [attr.id]=\"'chart-table-' + report.id\" *ngIf=\"report.hasDatasets()\">\n                        <table class=\"table table-responsive table-condensed\" class=\"partial-width\">\n                            <tr>\n                                <th *ngFor=\"let label of report.labels\">{{label | translate}}</th>\n                            </tr>\n                            <tr *ngFor=\"let rows of report.datasets\">\n                                <td *ngFor=\"let row of rows\">{{row | translate }}</td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div *ngSwitchCase=\"'masterDetailTable'\" >\n                <div *ngIf=\"isCurrent(idx)\">\n                    <h4>{{report.title}}</h4>\n                    <div *ngIf=\"!report.hasDatasets()\">{{'ANALYTICS.MESSAGES.NO-DATA-FOUND' | translate}}</div>\n                    <div [attr.id]=\"'chart-master-detail-table-' + report.id\" *ngIf=\"report.hasDatasets()\">\n                        <table class=\"table table-responsive table-condensed\" class=\"full-width\">\n                            <tr>\n                                <th *ngFor=\"let label of report.labels\">{{label | translate}}</th>\n                            </tr>\n                            <tr *ngFor=\"let rows of report.datasets\" class=\"analytics-row__entry\">\n                                <td *ngFor=\"let row of rows\" (click)=\"toggleDetailsTable()\">{{row | translate }}</td>\n                            </tr>\n                        </table>\n                    </div>\n                    <div [attr.id]=\"'chart-master-detail-' + report.id\" *ngIf=\"isShowDetails()\">\n                        <table class=\"table table-responsive table-condensed\" class=\"full-width\">\n                            <tr>\n                                <th *ngFor=\"let label of report.detailsTable.labels\">{{label | translate}}</th>\n                            </tr>\n                            <tr *ngFor=\"let rows of report.detailsTable.datasets\">\n                                <td *ngFor=\"let row of rows\">{{row | translate }}</td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div *ngSwitchCase=\"'bar'\">\n                <div class=\"col-md-6\" *ngIf=\"isCurrent(idx)\">\n                    <h4>{{report.title}}</h4>\n                    <div *ngIf=\"!report.hasDatasets()\">{{'ANALYTICS.MESSAGES.NO-DATA-FOUND' | translate}}</div>\n                    <canvas baseChart *ngIf=\"report.hasDatasets()\" class=\"chart\"\n                            [datasets]=\"report.datasets\"\n                            [labels]=\"report.labels\"\n                            [options]=\"report.options\"\n                            [chartType]=\"report.type\">\n                    </canvas>\n                </div>\n            </div>\n            <div *ngSwitchCase=\"'multiBar'\">\n                <div class=\"col-md-6\" *ngIf=\"isCurrent(idx)\">\n                    <h4>{{report.title}}</h4>\n                    <div *ngIf=\"!report.hasDatasets()\">{{'ANALYTICS.MESSAGES.NO-DATA-FOUND' | translate}}</div>\n                    <div *ngIf=\"report.hasDatasets()\">\n                        <label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\" [attr.for]=\"'stacked-id'\">\n                            <input type=\"checkbox\" [attr.id]=\"'stacked-id'\" class=\"mdl-checkbox__input\"\n                                   [checked]=\"report.options.scales.xAxes[0].stacked\"\n                                   [(ngModel)]=\"report.options.scales.xAxes[0].stacked\"\n                                   (change)=\"refresh(report)\">\n                            <span class=\"mdl-checkbox__label\">Stacked</span>\n                        </label>\n                        <canvas baseChart class=\"chart\"\n                                [datasets]=\"report.datasets\"\n                                [labels]=\"report.labels\"\n                                [options]=\"report.options\"\n                                [chartType]=\"'bar'\">\n                        </canvas>\n                    </div>\n                </div>\n            </div>\n            <div *ngSwitchCase=\"'HeatMap'\">\n                <div *ngIf=\"isCurrent(idx)\">\n                    <h4>{{report.title}}</h4>\n                    <analytics-report-heat-map [report]=\"report\"></analytics-report-heat-map>\n                </div>\n            </div>\n            <div *ngSwitchDefault>\n                <span>{{'ANALYTICS.MESSAGES.UNKNOWN-WIDGET-TYPE' | translate}}: {{report.type}}</span>\n            </div>\n        </div>\n    </div>\n</div>\n<br><br><br>\n<div *ngIf=\"!reports\">{{'ANALYTICS.MESSAGES.FILL-PARAMETER' | translate}}</div>\n";

/***/ }),

/***/ 482:
/***/ (function(module, exports) {

module.exports = "<h4>Process Heat map</h4>\n<div *ngIf=\"hasMetric()\">\n    <form [formGroup]=\"metricForm\" novalidate>\n        <dropdown-widget [field]=\"field\" [group]=\"metricForm.controls.metricGroup\" [controllerName]=\"'metric'\"\n                         (fieldChanged)=\"onMetricChanges(field)\" [showDefaultOption]=\"false\"></dropdown-widget>\n    </form>\n    <adf-diagram *ngIf=\"currentMetric\" [processDefinitionId]=\"report.processDefinitionId\" [metricPercentages]=\"currentMetric\" [metricColor]=\"currentMetricColors\" [metricType]=\"metricType\"></adf-diagram>\n</div>\n<div *ngIf=\"!hasMetric()\">No metric found</div>\n";

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-analytics-report-list menu-container\">\n    <ul class='mdl-list' *ngIf=\"isList()\">\n        <li class=\"mdl-list__item activiti-filters__entry\" (click)=\"selectReport(report)\" *ngFor=\"let report of reports; let idx = index\"\n            [class.active]=\"currentReport === report\">\n            <span [attr.id]=\"'report-list-' + idx\" class=\"mdl-list__item-primary-content\">\n            <i class=\"material-icons mdl-list__item-icon activiti-filters__entry-icon\" [attr.data-automation-id]=\"report.name + '_filter'\">assignment</i>\n            <span class=\"text\">{{report.name}}</span>\n            </span>\n        </li>\n    </ul>\n    <div class=\"mdl-grid\" *ngIf=\"isGrid()\">\n        <div (click)=\"selectReport(report)\" [ngClass]=\"['mdl-card mdl-cell', 'theme-1']\" *ngFor=\"let report of reports;\">\n            <div class=\"logo\"><i class=\"material-icons\">equalizer</i></div>\n            <div class=\"mdl-card__title\">\n                <h1 class=\"mdl-card__title-text application-title\">{{report.name}}</h1>\n            </div>\n            <div class=\"mdl-card__supporting-text\">\n                <p>{{report.description}}</p>\n            </div>\n            <div class=\"mdl-card__actions mdl-card--border\">\n                <i class=\"material-icons selectedIcon\" *ngIf=\"isSelected(report)\">done</i>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 484:
/***/ (function(module, exports) {

module.exports = "<div [class.hide]=\"hideComponent\">\n    <div class=\"adf-report-report-container\">\n        <div class=\"col-md-6\">\n            <div *ngIf=\"reportParameters\">\n                <form [formGroup]=\"reportForm\" novalidate>\n                    <adf-toolbar>\n                        <adf-toolbar-title class=\"adf-report-title-container\">\n                            <div *ngIf=\"isEditable\">\n                                <md-input-container class=\"adf-full-width-input\">\n                                    <input\n                                        mdInput\n                                        type=\"text\"\n                                        class=\"adf-edit-report-title\"\n                                        id=\"reportName\"\n                                        autofocus\n                                        data-automation-id=\"reportName\"\n                                        [value]=\"reportParameters.name\"\n                                        (input)=\"reportParameters.name=$event.target.value\"\n                                        (blur)=\"editTitle($event)\"\n                                        (keyup.enter)=\"editTitle($event)\"\n                                    />\n                                </md-input-container>\n                            </div>\n                            <div class=\"adf-report-title\" *ngIf=\"!isEditable\" (click)=\"editEnable()\">\n                                <md-icon class=\"adf-report-icon\" >mode_edit</md-icon>\n                                <h4>{{reportParameters.name}}</h4>\n                            </div>\n                        </adf-toolbar-title>\n                        <div *ngIf=\"!isEditable\">\n                            <button md-button mdTooltip=\"{{'ANALYTICS.MESSAGES.ICON-SETTING' | translate}}\"\n                                    (click)=\"toggleParameters()\">\n                                <md-icon>settings</md-icon>\n                            </button>\n                            <button md-button id=\"delete-button\" (click)=\"deleteReport(reportId)\"\n                                    mdTooltip=\"{{'ANALYTICS.MESSAGES.ICON-DELETE' | translate}}\">\n                                <md-icon>delete</md-icon>\n                            </button>\n                            <span *ngIf=\"isFormValid()\">\n                                <button md-button id=\"export-button\" (click)=\"showDialog('Export')\"\n                                        mdTooltip=\"{{'ANALYTICS.MESSAGES.ICON-EXPORT-CSV' | translate}}\">\n                                    <md-icon>file_download</md-icon>\n                                </button>\n                                <button md-button id=\"save-button\" (click)=\"showDialog('Save')\"\n                                        mdTooltip=\"{{'ANALYTICS.MESSAGES.ICON-SAVE' | translate}}\">\n                                    <md-icon>save</md-icon>\n                                </button>\n                            </span>\n                        </div>\n                    </adf-toolbar>\n                    <div *ngFor=\"let field of reportParameters.definition.parameters\"\n                         [class.is-hide]=\"isParametersHide()\">\n                        <div [ngSwitch]=\"field.type\">\n                            <div *ngSwitchCase=\"'integer'\">\n                                <br>\n                                <number-widget [field]=\"field\" [group]=\"reportForm.controls.processInstanceGroup\"\n                                               [controllerName]=\"'slowProcessInstanceInteger'\"\n                                               [required]=\"true\"></number-widget>\n                            </div>\n                            <div *ngSwitchCase=\"'duration'\">\n                                <br>\n                                <duration-widget [field]=\"field\" [group]=\"reportForm.controls.durationGroup\"\n                                                 [controllerName]=\"'duration'\"></duration-widget>\n                            </div>\n                            <div *ngSwitchCase=\"'boolean'\">\n                                <br>\n                                <checkbox-widget [field]=\"field\" [group]=\"reportForm.controls.typeFilteringGroup\"\n                                                 [controllerName]=\"'typeFiltering'\"></checkbox-widget>\n                            </div>\n                            <div *ngSwitchCase=\"'status'\">\n                                <br>\n                                <dropdown-widget [field]=\"field\" [group]=\"reportForm.controls.statusGroup\"\n                                                 [controllerName]=\"'status'\"\n                                                 [required]=\"true\"></dropdown-widget>\n                            </div>\n                            <div *ngSwitchCase=\"'processDefinition'\">\n                                <br>\n                                <dropdown-widget [field]=\"field\" [group]=\"reportForm.controls.processDefGroup\"\n                                                 [controllerName]=\"'processDefinitionId'\"\n                                                 [required]=\"true\"\n                                                 (fieldChanged)=\"onProcessDefinitionChanges(field)\"></dropdown-widget>\n                            </div>\n                            <div *ngSwitchCase=\"'task'\">\n                                <br>\n                                <dropdown-widget [field]=\"field\" [group]=\"reportForm.controls.taskGroup\"\n                                                 [controllerName]=\"'taskName'\"\n                                                 [required]=\"true\"></dropdown-widget>\n                            </div>\n                            <div *ngSwitchCase=\"'dateRange'\">\n                                <br>\n                                <adf-date-range-widget [field]=\"field\"\n                                                       [group]=\"reportForm.controls.dateRange\"></adf-date-range-widget>\n                            </div>\n                            <div *ngSwitchCase=\"'dateInterval'\">\n                                <br>\n                                <dropdown-widget [field]=\"field\" [group]=\"reportForm.controls.dateIntervalGroup\"\n                                                 [controllerName]=\"'dateRangeInterval'\"\n                                                 [required]=\"true\" [showDefaultOption]=\"false\"></dropdown-widget>\n                            </div>\n                            <div *ngSwitchDefault>\n                                <span>{{'ANALYTICS.MESSAGES.UNKNOWN-WIDGET-TYPE' | translate}}: {{field.type}}</span>\n                            </div>\n                        </div>\n                    </div>\n                    <dialog id=\"report-dialog\" class=\"mdl-dialog options-name-dialog\" #reportNameDialog>\n                        <h5 id=\"report-dialog-title\" class=\"mdl-dialog__title\">{{action}} report</h5>\n                        <div class=\"mdl-dialog__content\">\n                            <div *ngIf=\"isSaveAction()\" id=\"save-title-submessage\" class=\"export-message\">\n                                {{'DIALOG.SAVE_MESSAGE' | translate}}\n                            </div>\n                            <div class=\"mdl-textfield mdl-js-textfield save-export-input\">\n                                <label id=\"report-name-label\" [attr.for]=\"reportName\">Report Name</label>\n                                <input class=\"mdl-textfield__input\"\n                                       type=\"text\"\n                                       id=\"repName\"\n                                       [attr.value]=\"reportName\"\n                                       [(ngModel)]=\"reportName\"\n                                       [ngModelOptions]=\"{standalone: true}\"\n                                       placeholder=\"report name\">\n                            </div>\n                        </div>\n                        <div class=\"mdl-dialog__actions\">\n                            <button type=\"button\" id=\"close-dialog-button\" (click)=\"closeDialog()\"\n                                    class=\"mdl-button close\">Close\n                            </button>\n                            <button type=\"button\" id=\"action-dialog-button\"\n                                    (click)=\"performAction(action, reportParamQuery)\"\n                                    class=\"mdl-button close\">{{action}}\n                            </button>\n                        </div>\n                    </dialog>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 485:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n    <analytics-report-parameters [appId]=\"appId\" [reportId]=\"reportId\"\n                                 [hideComponent]=\"hideParameters\"\n                                 (onFormValueChanged)=\"reset()\"\n                                 (onSuccess)=\"showReport($event)\"\n                                 (saveReportSuccess)=\"onSaveReportSuccess($event)\"\n                                 (deleteReportSuccess)=\"onDeleteReportSuccess()\"\n                                 (onEdit)=\"onEditReport($event)\">\n    </analytics-report-parameters>\n\n    <adf-analytics-generator [reportId]=\"reportId\"\n                                  [reportParamQuery]=\"reportParamQuery\"\n                                  #analyticsgenerator>\n    </adf-analytics-generator>\n</div>\n";

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

module.exports = "<label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\" [attr.for]=\"field.id\" [formGroup]=\"formGroup\">\n    <input formControlName=\"{{controllerName}}\" type=\"checkbox\"\n           [attr.id]=\"field.id\"\n           class=\"mdl-checkbox__input\"\n           [checked]=\"field.value\"\n           [(ngModel)]=\"field.value\"\n           (ngModelChange)=\"changeValue(field)\">\n    <span class=\"mdl-checkbox__label\">{{field.nameKey | translate}}</span>\n</label>\n";

/***/ }),

/***/ 487:
/***/ (function(module, exports) {

module.exports = "<label>{{field.nameKey | translate}}</label><br>\n<div [formGroup]=\"dateRange\">\n    <small *ngIf=\"isStartDateGreaterThanEndDate()\" class=\"adf-text-danger\">\n       {{'DATE-WIDGET.MESSAGES.START-LESS-THAN-END-DATE' | translate}}\n    </small>\n    <small *ngIf=\"isStartDateEmpty()\" class=\"adf-text-danger\">\n       {{'DATE-WIDGET.MESSAGES.START-DATE-REQUIRED' | translate}}\n    </small>\n\n            <md-grid-list cols=\"2\" rowHeight=\"80px\">\n                <md-grid-tile>\n                    <md-input-container>\n                        <input\n                            mdInput\n                            [min]=\"minDate\"\n                            [max]=\"maxDate\"\n                            formControlName=\"startDate\"\n                            [mdDatepicker]=\"startDatePicker\"\n                            [value]=\"startDatePicker\"\n                            (keydown)=\"true\"\n                            placeholder=\"{{'DATE-WIDGET.START-DATE' | translate}}\"\n                            id=\"startDate_id\"\n                            required>\n                        <button mdSuffix [mdDatepickerToggle]=\"startDatePicker\"></button>\n                    </md-input-container>\n                    <md-datepicker\n                        #startDatePicker\n                        [touchUi]=\"true\"\n                        (selectedChanged)=\"onGroupValueChanged()\">\n                    </md-datepicker>\n                </md-grid-tile>\n                <md-grid-tile>\n                    <md-input-container class=\"adf-start-task-input-container\">\n                        <input\n                            mdInput\n                            [min]=\"minDate\"\n                            [max]=\"maxDate\"\n                            formControlName=\"endDate\"\n                            [mdDatepicker]=\"endDatePicker\"\n                            [value]=\"endDatePicker\"\n                            (keydown)=\"true\"\n                            placeholder=\"{{'DATE-WIDGET.END-DATE' | translate}}\"\n                            id=\"endDate_id\"\n                            required>\n                        <button mdSuffix [mdDatepickerToggle]=\"endDatePicker\"></button>\n                    </md-input-container>\n                    <md-datepicker\n                        #endDatePicker\n                        [touchUi]=\"true\"\n                        (selectedChanged)=\"onGroupValueChanged()\">\n                    </md-datepicker>\n                </md-grid-tile>\n            </md-grid-list>\n</div>\n";

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-dropdown-widget\" [formGroup]=\"formGroup\">\n    <label class=\"adf-dropdown-widget__label\" [attr.for]=\"field.id\">{{field.nameKey | translate}}</label>\n    <select [formControlName]=\"controllerName\"\n            [attr.id]=\"'select-' + field.id\"\n            class=\"adf-dropdown-widget__select\"\n            [(ngModel)]=\"field.value\"\n            (ngModelChange)=\"changeValue($event)\">\n        <option *ngIf=\"showDefaultOption\" value=\"null\">{{defaultOptionText}}</option>\n        <option *ngFor=\"let opt of field.options\" [value]=\"opt.id\">{{opt.label}}</option>\n    </select>\n</div>\n";

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n    <div class=\"mdl-cell mdl-cell--6-col\">\n        <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label adf-number-widget\">\n            <input class=\"mdl-textfield__input\"\n                   type=\"text\"\n                   pattern=\"-?[0-9]*(\\.[0-9]+)?\"\n                   [attr.id]=\"field.id\"\n                   [value]=\"field.value\"\n                   [(ngModel)]=\"field.value\"\n                   (ngModelChange)=\"calculateDuration()\">\n            <label class=\"mdl-textfield__label\" [attr.for]=\"field.id\">{{field.nameKey | translate}}</label>\n        </div>\n    </div>\n    <div class=\"mdl-cell mdl-cell--6-col\">\n        <div class=\"dropdown-container\">\n            <dropdown-widget [field]=\"duration\" [group]=\"formGroup\" [controllerName]=\"'timeType'\"\n                             [showDefaultOption]=\"false\"\n                             (fieldChanged)=\"calculateDuration()\"></dropdown-widget>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 490:
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label adf-number-widget\" [formGroup]=\"formGroup\">\n    <input formControlName=\"{{controllerName}}\" class=\"mdl-textfield__input\"\n           type=\"text\"\n           pattern=\"-?[0-9]*(\\.[0-9]+)?\"\n           [attr.id]=\"field.id\"\n           [value]=\"field.value\"\n           [(ngModel)]=\"field.value\"\n           (ngModelChange)=\"changeValue(field)\">\n    <label class=\"mdl-textfield__label\" [attr.for]=\"field.id\">{{field.nameKey | translate}}</label>\n</div>\n";

/***/ }),

/***/ 637:
/***/ (function(module, exports) {

module.exports = ".chart {\n  display: block;\n  width: 100%; }\n\n.analytics-row__entry {\n  cursor: pointer; }\n\n.report-icons {\n  margin: 20px 0;\n  float: left; }\n\n.full-width {\n  width: 100%; }\n\n.partial-width {\n  width: 80%;\n  margin-left: 20px; }\n\n.clear-both {\n  clear: both; }\n"

/***/ }),

/***/ 638:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 639:
/***/ (function(module, exports) {

module.exports = ".dropdown-widget {\n  width: 100%; }\n\n.dropdown-widget__select {\n  width: 100%; }\n\n.dropdown-widget__invalid .dropdown-widget__select {\n  border-color: #d50000; }\n\n.dropdown-widget__invalid .dropdown-widget__label {\n  color: #d50000; }\n\n.dropdown-widget__invalid .dropdown-widget__label:after {\n  background-color: #d50000; }\n\n.dropdown-widget__invalid .mdl-textfield__error {\n  visibility: visible !important; }\n\n.adf-edit-report-title {\n  float: left;\n  font-size: 20px !important;\n  padding-top: 19px; }\n\n.adf-report-icon {\n  float: left;\n  padding: 5px 5px 0 0;\n  visibility: hidden; }\n\n.adf-report-title-container {\n  cursor: pointer;\n  width: 100%;\n  margin-bottom: 12px; }\n  .adf-report-title-container :hover .adf-report-icon {\n    color: #448aff;\n    visibility: visible; }\n\n.adf-report-title {\n  padding-top: 10px; }\n\n.adf-full-width-input {\n  width: 100%; }\n\n.is-hide {\n  height: 0;\n  overflow: hidden;\n  transition: height 0.5s; }\n\n.adf-report-report-container {\n  border-bottom: solid 1px #d4d4d4;\n  padding-top: 10px; }\n  .adf-report-report-container .mat-toolbar {\n    border: 0 !important;\n    padding: 0 !important; }\n\n.report-container-setting {\n  padding-left: 10px; }\n\n.option_button_details {\n  padding-top: 20px; }\n\n.mdl-dialog__title.choose_name {\n  padding: 0px; }\n\n.mdl-dialog.options-name-dialog {\n  width: 30%; }\n\n.export-message {\n  background-color: lightgray; }\n\n.save-export-input {\n  width: 100%; }\n\n.delete-parameter {\n  position: absolute;\n  margin-left: 60%;\n  padding-top: 5px; }\n\n.hide {\n  display: none; }\n"

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ }),

/***/ 640:
/***/ (function(module, exports) {

module.exports = ".chart {\n  display: block;\n  width: 100%; }\n"

/***/ }),

/***/ 641:
/***/ (function(module, exports) {

module.exports = ".adf-text-danger {\n  color: #D8000C; }\n  .adf-text-danger .mat-input-container {\n    width: 80% !important; }\n"

/***/ }),

/***/ 642:
/***/ (function(module, exports) {

module.exports = ".adf-dropdown-widget {\n  width: 100%; }\n\n.adf-dropdown-widget__select {\n  width: 100%; }\n\n.adf-dropdown-widget__invalid .adf-dropdown-widget__select {\n  border-color: #d50000; }\n\n.adf-dropdown-widget__invalid .adf-dropdown-widget__label {\n  color: #d50000; }\n\n.adf-dropdown-widget__invalid .adf-dropdown-widget__label:after {\n  background-color: #d50000; }\n\n.adf-dropdown-widget__invalid .mdl-textfield__error {\n  visibility: visible !important; }\n"

/***/ }),

/***/ 643:
/***/ (function(module, exports) {

module.exports = ".adf-number-widget {\n  width: 100%; }\n\n.adf-number-widget__invalid .mdl-textfield__input {\n  border-color: #d50000; }\n\n.adf-number-widget__invalid .mdl-textfield__label {\n  color: #d50000; }\n  .adf-number-widget__invalid .mdl-textfield__label:after {\n    background-color: #d50000; }\n\n.adf-number-widget__invalid .mdl-textfield__error {\n  visibility: visible !important; }\n\n.dropdown-container {\n  margin-top: 30px; }\n"

/***/ }),

/***/ 644:
/***/ (function(module, exports) {

module.exports = ".adf-number-widget {\n  width: 100%; }\n\n.adf-number-widget__invalid .mdl-textfield__input {\n  border-color: #d50000; }\n\n.adf-number-widget__invalid .mdl-textfield__label {\n  color: #d50000; }\n  .adf-number-widget__invalid .mdl-textfield__label:after {\n    background-color: #d50000; }\n\n.adf-number-widget__invalid .mdl-textfield__error {\n  visibility: visible !important; }\n"

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(637);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(638);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(639);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(640);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(641);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(642);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(643);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(644);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng2_activiti_diagrams_1 = __webpack_require__(64);
var ng2_alfresco_core_1 = __webpack_require__(1);
var ng2_charts_1 = __webpack_require__(389);
var analytics_generator_component_1 = __webpack_require__(87);
var analytics_report_heat_map_component_1 = __webpack_require__(348);
var analytics_report_list_component_1 = __webpack_require__(119);
var analytics_report_parameters_component_1 = __webpack_require__(120);
var analytics_component_1 = __webpack_require__(121);
var index_1 = __webpack_require__(122);
var material_module_1 = __webpack_require__(349);
var analytics_service_1 = __webpack_require__(38);
__export(__webpack_require__(121));
__export(__webpack_require__(87));
__export(__webpack_require__(119));
__export(__webpack_require__(120));
__export(__webpack_require__(38));
__export(__webpack_require__(122));
exports.ANALYTICS_DIRECTIVES = [
    analytics_component_1.AnalyticsComponent,
    analytics_report_list_component_1.AnalyticsReportListComponent,
    analytics_report_parameters_component_1.AnalyticsReportParametersComponent,
    analytics_generator_component_1.AnalyticsGeneratorComponent,
    analytics_report_heat_map_component_1.AnalyticsReportHeatMapComponent,
    index_1.WIDGET_DIRECTIVES
];
exports.ANALYTICS_PROVIDERS = [
    analytics_service_1.AnalyticsService
];
var AnalyticsModule = AnalyticsModule_1 = (function () {
    function AnalyticsModule() {
    }
    AnalyticsModule.forRoot = function () {
        return {
            ngModule: AnalyticsModule_1,
            providers: exports.ANALYTICS_PROVIDERS.slice()
        };
    };
    return AnalyticsModule;
}());
AnalyticsModule = AnalyticsModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            ng2_alfresco_core_1.CoreModule,
            ng2_charts_1.ChartsModule,
            ng2_activiti_diagrams_1.DiagramsModule,
            material_module_1.MaterialModule
        ],
        declarations: exports.ANALYTICS_DIRECTIVES.slice(),
        providers: exports.ANALYTICS_PROVIDERS.concat([
            {
                provide: ng2_alfresco_core_1.TRANSLATION_PROVIDER,
                multi: true,
                useValue: {
                    name: 'ng2-activiti-analytics',
                    source: 'assets/ng2-activiti-analytics'
                }
            }
        ]),
        exports: exports.ANALYTICS_DIRECTIVES.concat([
            material_module_1.MaterialModule
        ])
    })
], AnalyticsModule);
exports.AnalyticsModule = AnalyticsModule;
var AnalyticsModule_1;


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng2_activiti_diagrams_1 = __webpack_require__(64);
var analytics_service_1 = __webpack_require__(38);
var AnalyticsGeneratorComponent = (function () {
    function AnalyticsGeneratorComponent(analyticsService) {
        this.analyticsService = analyticsService;
        this.reportParamQuery = undefined;
        this.onSuccess = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.showDetails = false;
        this.barChartOptions = {
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1
                        }
                    }],
                xAxes: [{
                        ticks: {},
                        stacked: true
                    }]
            }
        };
    }
    AnalyticsGeneratorComponent.prototype.ngOnChanges = function () {
        if (this.reportId && this.reportParamQuery) {
            this.generateReport(this.reportId, this.reportParamQuery);
        }
        else {
            this.reset();
        }
    };
    AnalyticsGeneratorComponent.prototype.generateReport = function (reportId, reportParamQuery) {
        var _this = this;
        if (reportParamQuery === undefined || reportParamQuery === null) {
            reportParamQuery = {};
        }
        this.analyticsService.getReportsByParams(reportId, reportParamQuery).subscribe(function (res) {
            _this.reports = res;
            if (_this.reports) {
                _this.selectFirstReport();
            }
            _this.onSuccess.emit(res);
        }, function (err) {
            _this.onError.emit(err);
        });
    };
    AnalyticsGeneratorComponent.prototype.reset = function () {
        if (this.reports) {
            this.reports = undefined;
        }
    };
    AnalyticsGeneratorComponent.prototype.refresh = function (report) {
        var clone = JSON.parse(JSON.stringify(report));
        report.datasets = clone.datasets;
    };
    AnalyticsGeneratorComponent.prototype.toggleDetailsTable = function () {
        this.showDetails = !this.showDetails;
    };
    AnalyticsGeneratorComponent.prototype.isShowDetails = function () {
        return this.showDetails;
    };
    AnalyticsGeneratorComponent.prototype.isCurrent = function (position) {
        return position === this.currentChartPosition ? true : false;
    };
    AnalyticsGeneratorComponent.prototype.selectCurrent = function (position) {
        this.currentChartPosition = position;
    };
    AnalyticsGeneratorComponent.prototype.selectFirstReport = function () {
        this.selectCurrent(0);
    };
    return AnalyticsGeneratorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AnalyticsGeneratorComponent.prototype, "reportId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof ng2_activiti_diagrams_1.ReportQuery !== "undefined" && ng2_activiti_diagrams_1.ReportQuery) === "function" && _a || Object)
], AnalyticsGeneratorComponent.prototype, "reportParamQuery", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnalyticsGeneratorComponent.prototype, "onSuccess", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnalyticsGeneratorComponent.prototype, "onError", void 0);
AnalyticsGeneratorComponent = __decorate([
    core_1.Component({
        selector: 'adf-analytics-generator, activiti-analytics-generator',
        template: __webpack_require__(481),
        styles: [__webpack_require__(721)],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof analytics_service_1.AnalyticsService !== "undefined" && analytics_service_1.AnalyticsService) === "function" && _b || Object])
], AnalyticsGeneratorComponent);
exports.AnalyticsGeneratorComponent = AnalyticsGeneratorComponent;
var _a, _b;


/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ })

/******/ });
});
//# sourceMappingURL=ng2-activiti-analytics.js.map