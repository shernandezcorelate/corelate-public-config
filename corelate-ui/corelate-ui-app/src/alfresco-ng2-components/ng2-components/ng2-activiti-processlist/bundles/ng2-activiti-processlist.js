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
		module.exports = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("@angular/material"), require("ng2-alfresco-datatable"), require("@angular/common"), require("rxjs/Observable"), require("ng2-activiti-form"), require("ng2-activiti-tasklist"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "ng2-alfresco-core", "rxjs/Rx", "@angular/material", "ng2-alfresco-datatable", "@angular/common", "rxjs/Observable", "ng2-activiti-form", "ng2-activiti-tasklist"], factory);
	else if(typeof exports === 'object')
		exports["ng2-activiti-processlist"] = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("@angular/material"), require("ng2-alfresco-datatable"), require("@angular/common"), require("rxjs/Observable"), require("ng2-activiti-form"), require("ng2-activiti-tasklist"));
	else
		root["ng2-activiti-processlist"] = factory(root["@angular/core"], root["ng2-alfresco-core"], root["rxjs/Rx"], root["@angular/material"], root["ng2-alfresco-datatable"], root["@angular/common"], root["rxjs/Observable"], root["ng2-activiti-form"], root["ng2-activiti-tasklist"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_86__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 819);
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 112:
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
Object.defineProperty(exports, "__esModule", { value: true });
var FilterProcessRepresentationModel = (function () {
    function FilterProcessRepresentationModel(obj) {
        if (obj) {
            this.id = obj.id || null;
            this.appId = obj.appId || null;
            this.name = obj.name || null;
            this.recent = !!obj.recent;
            this.icon = obj.icon || null;
            this.filter = obj.filter || null;
            this.index = obj.index;
        }
    }
    FilterProcessRepresentationModel.prototype.hasFilter = function () {
        return this.filter ? true : false;
    };
    return FilterProcessRepresentationModel;
}());
exports.FilterProcessRepresentationModel = FilterProcessRepresentationModel;
var FilterParamsModel = (function () {
    function FilterParamsModel(obj) {
        this.id = obj.id || null;
        this.name = obj.name || null;
        this.index = obj.index;
    }
    return FilterParamsModel;
}());
exports.FilterParamsModel = FilterParamsModel;
var ProcessFilterParamRepresentationModel = (function () {
    function ProcessFilterParamRepresentationModel(obj) {
        this.state = obj.state || null;
        this.sort = obj.sort || null;
    }
    return ProcessFilterParamRepresentationModel;
}());
exports.ProcessFilterParamRepresentationModel = ProcessFilterParamRepresentationModel;


/***/ }),

/***/ 113:
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
Object.defineProperty(exports, "__esModule", { value: true });
var ProcessDefinitionRepresentation = (function () {
    function ProcessDefinitionRepresentation(obj) {
        this.id = obj && obj.id || null;
        this.name = obj && obj.name || null;
        this.description = obj && obj.description || null;
        this.key = obj && obj.key || null;
        this.category = obj && obj.category || null;
        this.version = obj && obj.version || 0;
        this.deploymentId = obj && obj.deploymentId || null;
        this.tenantId = obj && obj.tenantId || null;
        this.metaDataValues = obj && obj.metaDataValues || [];
        this.hasStartForm = obj && obj.hasStartForm === true ? true : false;
    }
    return ProcessDefinitionRepresentation;
}());
exports.ProcessDefinitionRepresentation = ProcessDefinitionRepresentation;


/***/ }),

/***/ 114:
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
Object.defineProperty(exports, "__esModule", { value: true });
var ProcessInstanceVariable = (function () {
    function ProcessInstanceVariable(obj) {
        this.name = obj && obj.name !== undefined ? obj.name : null;
        this.scope = obj && obj.scope !== undefined ? obj.scope : null;
        this.value = obj && obj.value !== undefined ? obj.value : null;
    }
    return ProcessInstanceVariable;
}());
exports.ProcessInstanceVariable = ProcessInstanceVariable;


/***/ }),

/***/ 126:
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
var ng2_alfresco_core_1 = __webpack_require__(1);
var process_service_1 = __webpack_require__(16);
var JSON_FORMAT = 'json';
var PDF_FORMAT = 'pdf';
var ProcessAuditDirective = (function () {
    function ProcessAuditDirective(contentService, processListService) {
        this.contentService = contentService;
        this.processListService = processListService;
        this.fileName = 'Audit';
        this.format = 'pdf';
        this.download = true;
        this.clicked = new core_1.EventEmitter();
        this.error = new core_1.EventEmitter();
    }
    ProcessAuditDirective.prototype.ngOnInit = function () {
        console.log('OnInit');
    };
    ProcessAuditDirective.prototype.ngOnChanges = function (changes) {
        if (!this.isValidType()) {
            this.setDefaultFormatType();
        }
    };
    ProcessAuditDirective.prototype.isValidType = function () {
        if (this.format && (this.isJsonFormat() || this.isPdfFormat())) {
            return true;
        }
        return false;
    };
    ProcessAuditDirective.prototype.setDefaultFormatType = function () {
        this.format = PDF_FORMAT;
    };
    ProcessAuditDirective.prototype.fetchAuditInfo = function () {
        var _this = this;
        if (this.isPdfFormat()) {
            this.processListService.fetchProcessAuditPdfById(this.processId).subscribe(function (blob) {
                _this.audit = blob;
                if (_this.download) {
                    _this.contentService.downloadBlob(_this.audit, _this.fileName + '.pdf');
                }
                _this.clicked.emit({ format: _this.format, value: _this.audit, fileName: _this.fileName });
            }, function (err) {
                _this.error.emit(err);
            });
        }
        else {
            this.processListService.fetchProcessAuditJsonById(this.processId).subscribe(function (res) {
                _this.audit = res;
                _this.clicked.emit({ format: _this.format, value: _this.audit, fileName: _this.fileName });
            }, function (err) {
                _this.error.emit(err);
            });
        }
    };
    ProcessAuditDirective.prototype.onClickAudit = function () {
        this.fetchAuditInfo();
    };
    ProcessAuditDirective.prototype.isJsonFormat = function () {
        return this.format === JSON_FORMAT;
    };
    ProcessAuditDirective.prototype.isPdfFormat = function () {
        return this.format === PDF_FORMAT;
    };
    return ProcessAuditDirective;
}());
__decorate([
    core_1.Input('process-id'),
    __metadata("design:type", String)
], ProcessAuditDirective.prototype, "processId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProcessAuditDirective.prototype, "fileName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProcessAuditDirective.prototype, "format", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProcessAuditDirective.prototype, "download", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], ProcessAuditDirective.prototype, "clicked", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], ProcessAuditDirective.prototype, "error", void 0);
ProcessAuditDirective = __decorate([
    core_1.Directive({
        selector: 'button[adf-process-audit]',
        host: {
            'role': 'button',
            '(click)': 'onClickAudit()'
        }
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof ng2_alfresco_core_1.ContentService !== "undefined" && ng2_alfresco_core_1.ContentService) === "function" && _c || Object, typeof (_d = typeof process_service_1.ProcessService !== "undefined" && process_service_1.ProcessService) === "function" && _d || Object])
], ProcessAuditDirective);
exports.ProcessAuditDirective = ProcessAuditDirective;
var _a, _b, _c, _d;


/***/ }),

/***/ 127:
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
var ng2_alfresco_core_1 = __webpack_require__(1);
var ProcessUploadService = (function (_super) {
    __extends(ProcessUploadService, _super);
    function ProcessUploadService(apiService, appConfigService) {
        var _this = _super.call(this, apiService, appConfigService) || this;
        _this.instanceApi = apiService;
        return _this;
    }
    ProcessUploadService.prototype.getUploadPromise = function (file) {
        var opts = {
            isRelatedContent: true
        };
        var processId = file.options.parentId;
        return this.instanceApi.getInstance().activiti.contentApi.createRelatedContentOnProcessInstance(processId, file.file, opts);
    };
    return ProcessUploadService;
}(ng2_alfresco_core_1.UploadService));
ProcessUploadService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.AppConfigService !== "undefined" && ng2_alfresco_core_1.AppConfigService) === "function" && _b || Object])
], ProcessUploadService);
exports.ProcessUploadService = ProcessUploadService;
var _a, _b;


/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),

/***/ 16:
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
var ng2_activiti_tasklist_1 = __webpack_require__(86);
var ng2_alfresco_core_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(23);
var filter_process_model_1 = __webpack_require__(112);
var process_definition_model_1 = __webpack_require__(113);
var process_instance_model_1 = __webpack_require__(85);
var process_instance_variable_model_1 = __webpack_require__(114);
var ProcessService = (function (_super) {
    __extends(ProcessService, _super);
    function ProcessService(alfrescoApiService, processLogService) {
        var _this = _super.call(this, alfrescoApiService, processLogService) || this;
        _this.alfrescoApiService = alfrescoApiService;
        _this.processLogService = processLogService;
        return _this;
    }
    ProcessService.prototype.getProcessInstances = function (requestNode) {
        var _this = this;
        return Observable_1.Observable.fromPromise(this.alfrescoApiService.getInstance().activiti.processApi.getProcessInstances(requestNode))
            .map(function (res) {
            if (requestNode.processDefinitionKey) {
                return res.data.filter(function (process) { return process.processDefinitionKey === requestNode.processDefinitionKey; });
            }
            else {
                return res.data;
            }
        }).catch(function (err) { return _this.handleProcessError(err); });
    };
    ProcessService.prototype.getProcessFilters = function (appId) {
        var _this = this;
        return Observable_1.Observable.fromPromise(this.callApiProcessFilters(appId))
            .map(function (response) {
            var filters = [];
            response.data.forEach(function (filter) {
                var filterModel = new filter_process_model_1.FilterProcessRepresentationModel(filter);
                filters.push(filterModel);
            });
            return filters;
        })
            .catch(function (err) { return _this.handleProcessError(err); });
    };
    ProcessService.prototype.getProcessFilterById = function (filterId, appId) {
        var _this = this;
        return Observable_1.Observable.fromPromise(this.callApiProcessFilters(appId))
            .map(function (response) {
            return response.data.find(function (filter) { return filter.id === filterId; });
        }).catch(function (err) { return _this.handleProcessError(err); });
    };
    ProcessService.prototype.getProcessFilterByName = function (filterName, appId) {
        var _this = this;
        return Observable_1.Observable.fromPromise(this.callApiProcessFilters(appId))
            .map(function (response) {
            return response.data.find(function (filter) { return filter.name === filterName; });
        }).catch(function (err) { return _this.handleProcessError(err); });
    };
    ProcessService.prototype.fetchProcessAuditPdfById = function (processId) {
        var _this = this;
        return Observable_1.Observable.fromPromise(this.alfrescoApiService.getInstance().activiti.processApi.getProcessAuditPdf(processId))
            .catch(function (err) { return _this.handleProcessError(err); });
    };
    ProcessService.prototype.fetchProcessAuditJsonById = function (processId) {
        var _this = this;
        return Observable_1.Observable.fromPromise(this.alfrescoApiService.getInstance().activiti.processApi.getProcessAuditJson(processId))
            .catch(function (err) { return _this.handleProcessError(err); });
    };
    ProcessService.prototype.createDefaultFilters = function (appId) {
        var _this = this;
        var runnintFilter = this.getRunningFilterInstance(appId);
        var runnintObservable = this.addProcessFilter(runnintFilter);
        var completedFilter = this.getCompletedFilterInstance(appId);
        var completedObservable = this.addProcessFilter(completedFilter);
        var allFilter = this.getAllFilterInstance(appId);
        var allObservable = this.addProcessFilter(allFilter);
        return Observable_1.Observable.create(function (observer) {
            Observable_1.Observable.forkJoin(runnintObservable, completedObservable, allObservable).subscribe(function (res) {
                var filters = [];
                res.forEach(function (filter) {
                    if (filter.name === runnintFilter.name) {
                        filters.push(runnintFilter);
                    }
                    else if (filter.name === completedFilter.name) {
                        filters.push(completedFilter);
                    }
                    else if (filter.name === allFilter.name) {
                        filters.push(allFilter);
                    }
                });
                observer.next(filters);
                observer.complete();
            }, function (err) {
                _this.processLogService.error(err);
            });
        });
    };
    ProcessService.prototype.getRunningFilterInstance = function (appId) {
        return new filter_process_model_1.FilterProcessRepresentationModel({
            'name': 'Running',
            'appId': appId,
            'recent': true,
            'icon': 'glyphicon-random',
            'filter': { 'sort': 'created-desc', 'name': '', 'state': 'running' }
        });
    };
    ProcessService.prototype.getCompletedFilterInstance = function (appId) {
        return new filter_process_model_1.FilterProcessRepresentationModel({
            'name': 'Completed',
            'appId': appId,
            'recent': false,
            'icon': 'glyphicon-ok-sign',
            'filter': { 'sort': 'created-desc', 'name': '', 'state': 'completed' }
        });
    };
    ProcessService.prototype.getAllFilterInstance = function (appId) {
        return new filter_process_model_1.FilterProcessRepresentationModel({
            'name': 'All',
            'appId': appId,
            'recent': true,
            'icon': 'glyphicon-th',
            'filter': { 'sort': 'created-desc', 'name': '', 'state': 'all' }
        });
    };
    ProcessService.prototype.addProcessFilter = function (filter) {
        var _this = this;
        return Observable_1.Observable.fromPromise(this.callApiAddProccessFilter(filter))
            .map(function (res) { return res; })
            .map(function (response) {
            return response;
        }).catch(function (err) { return _this.handleProcessError(err); });
    };
    ProcessService.prototype.getProcess = function (id) {
        var _this = this;
        return Observable_1.Observable.fromPromise(this.alfrescoApiService.getInstance().activiti.processApi.getProcessInstance(id))
            .catch(function (err) { return _this.handleProcessError(err); });
    };
    ProcessService.prototype.getProcessTasks = function (id, state) {
        var _this = this;
        var taskOpts = state ? {
            processInstanceId: id,
            state: state
        } : {
            processInstanceId: id
        };
        return Observable_1.Observable.fromPromise(this.alfrescoApiService.getInstance().activiti.taskApi.listTasks(taskOpts))
            .map(this.extractData)
            .map(function (tasks) { return tasks.map(function (task) {
            task.created = moment(task.created, 'YYYY-MM-DD').format();
            return task;
        }); })
            .catch(function (err) { return _this.handleProcessError(err); });
    };
    ProcessService.prototype.getComments = function (id) {
        var _this = this;
        return Observable_1.Observable.fromPromise(this.alfrescoApiService.getInstance().activiti.commentsApi.getProcessInstanceComments(id))
            .map(function (res) { return res; })
            .map(function (response) {
            var comments = [];
            response.data.forEach(function (comment) {
                var user = new ng2_activiti_tasklist_1.User({
                    id: comment.createdBy.id,
                    email: comment.createdBy.email,
                    firstName: comment.createdBy.firstName,
                    lastName: comment.createdBy.lastName
                });
                comments.push(new ng2_activiti_tasklist_1.Comment(comment.id, comment.message, comment.created, user));
            });
            return comments;
        }).catch(function (err) { return _this.handleProcessError(err); });
    };
    ProcessService.prototype.addComment = function (id, message) {
        var _this = this;
        return Observable_1.Observable.fromPromise(this.alfrescoApiService.getInstance().activiti.commentsApi.addProcessInstanceComment({ message: message }, id))
            .map(function (response) {
            return new ng2_activiti_tasklist_1.Comment(response.id, response.message, response.created, response.createdBy);
        }).catch(function (err) { return _this.handleProcessError(err); });
    };
    ProcessService.prototype.getProcessDefinitions = function (appId) {
        var _this = this;
        var opts = appId ? {
            latest: true,
            appDefinitionId: appId
        } : {
            latest: true
        };
        return Observable_1.Observable.fromPromise(this.alfrescoApiService.getInstance().activiti.processApi.getProcessDefinitions(opts))
            .map(this.extractData)
            .map(function (processDefs) { return processDefs.map(function (pd) { return new process_definition_model_1.ProcessDefinitionRepresentation(pd); }); })
            .catch(function (err) { return _this.handleProcessError(err); });
    };
    ProcessService.prototype.startProcess = function (processDefinitionId, name, outcome, startFormValues, variables) {
        var _this = this;
        var startRequest = {
            name: name,
            processDefinitionId: processDefinitionId
        };
        if (outcome) {
            startRequest.outcome = outcome;
        }
        if (startFormValues) {
            startRequest.values = startFormValues;
        }
        if (variables) {
            startRequest.variables = variables;
        }
        return Observable_1.Observable.fromPromise(this.alfrescoApiService.getInstance().activiti.processApi.startNewProcessInstance(startRequest))
            .map(function (pd) { return new process_instance_model_1.ProcessInstance(pd); })
            .catch(function (err) { return _this.handleProcessError(err); });
    };
    ProcessService.prototype.cancelProcess = function (processInstanceId) {
        var _this = this;
        return Observable_1.Observable.fromPromise(this.alfrescoApiService.getInstance().activiti.processApi.deleteProcessInstance(processInstanceId))
            .catch(function (err) { return _this.handleProcessError(err); });
    };
    ProcessService.prototype.getProcessInstanceVariables = function (processDefinitionId) {
        var _this = this;
        return Observable_1.Observable.fromPromise(this.alfrescoApiService.getInstance().activiti.processInstanceVariablesApi.getProcessInstanceVariables(processDefinitionId))
            .map(function (processVars) { return processVars.map(function (pd) { return new process_instance_variable_model_1.ProcessInstanceVariable(pd); }); })
            .catch(function (err) { return _this.handleProcessError(err); });
    };
    ProcessService.prototype.createOrUpdateProcessInstanceVariables = function (processDefinitionId, variables) {
        var _this = this;
        return Observable_1.Observable.fromPromise(this.alfrescoApiService.getInstance().activiti.processInstanceVariablesApi.createOrUpdateProcessInstanceVariables(processDefinitionId, variables))
            .catch(function (err) { return _this.handleProcessError(err); });
    };
    ProcessService.prototype.deleteProcessInstanceVariable = function (processDefinitionId, variableName) {
        var _this = this;
        return Observable_1.Observable.fromPromise(this.alfrescoApiService.getInstance().activiti.processInstanceVariablesApi.deleteProcessInstanceVariable(processDefinitionId, variableName))
            .catch(function (err) { return _this.handleProcessError(err); });
    };
    ProcessService.prototype.callApiAddProccessFilter = function (filter) {
        return this.alfrescoApiService.getInstance().activiti.userFiltersApi.createUserProcessInstanceFilter(filter);
    };
    ProcessService.prototype.callApiProcessFilters = function (appId) {
        if (appId) {
            return this.alfrescoApiService.getInstance().activiti.userFiltersApi.getUserProcessInstanceFilters({ appId: appId });
        }
        else {
            return this.alfrescoApiService.getInstance().activiti.userFiltersApi.getUserProcessInstanceFilters();
        }
    };
    ProcessService.prototype.extractData = function (res) {
        return res.data || {};
    };
    ProcessService.prototype.handleProcessError = function (error) {
        return Observable_1.Observable.throw(error || 'Server error');
    };
    return ProcessService;
}(ng2_activiti_tasklist_1.TaskListService));
ProcessService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _b || Object])
], ProcessService);
exports.ProcessService = ProcessService;
var _a, _b;


/***/ }),

/***/ 194:
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
Object.defineProperty(exports, "__esModule", { value: true });
var ProcessFilterRequestRepresentation = (function () {
    function ProcessFilterRequestRepresentation(obj) {
        this.processDefinitionId = obj && obj.processDefinitionId || null;
        this.processDefinitionKey = obj && obj.processDefinitionKey || null;
        this.appDefinitionId = obj && obj.appDefinitionId || null;
        this.state = obj && obj.state || null;
        this.sort = obj && obj.sort || null;
        this.page = obj && obj.page || 0;
        this.size = obj && obj.size || 25;
    }
    return ProcessFilterRequestRepresentation;
}());
exports.ProcessFilterRequestRepresentation = ProcessFilterRequestRepresentation;


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 31:
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
var ng2_alfresco_core_1 = __webpack_require__(1);
var process_instance_model_1 = __webpack_require__(85);
var ProcessInstanceHeaderComponent = (function () {
    function ProcessInstanceHeaderComponent() {
    }
    ProcessInstanceHeaderComponent.prototype.ngOnChanges = function (changes) {
        this.refreshData();
    };
    ProcessInstanceHeaderComponent.prototype.refreshData = function () {
        if (this.processInstance) {
            this.properties = [
                new ng2_alfresco_core_1.CardViewTextItemModel({ label: 'Status:', value: this.getProcessStatus(), key: 'status' }),
                new ng2_alfresco_core_1.CardViewDateItemModel({ label: 'Due Date:', value: this.processInstance.ended, format: 'MMM DD YYYY', key: 'dueDate', default: 'No date' }),
                new ng2_alfresco_core_1.CardViewTextItemModel({ label: 'Category:', value: this.processInstance.processDefinitionCategory, key: 'category', default: 'No category' }),
                new ng2_alfresco_core_1.CardViewTextItemModel({
                    label: 'Created By:',
                    value: this.getStartedByFullName(),
                    key: 'assignee',
                    default: 'No assignee'
                }),
                new ng2_alfresco_core_1.CardViewDateItemModel({ label: 'Created:', value: this.processInstance.started, format: 'MMM DD YYYY', key: 'created' }),
                new ng2_alfresco_core_1.CardViewTextItemModel({ label: 'Id:', value: this.processInstance.id, key: 'id' }),
                new ng2_alfresco_core_1.CardViewTextItemModel({ label: 'Description:', value: this.processInstance.processDefinitionDescription, key: 'description', default: 'No description' })
            ];
        }
    };
    ProcessInstanceHeaderComponent.prototype.getProcessStatus = function () {
        if (this.processInstance) {
            return this.isRunning() ? 'Running' : 'Completed';
        }
    };
    ProcessInstanceHeaderComponent.prototype.getStartedByFullName = function () {
        var fullName = '';
        if (this.processInstance && this.processInstance.startedBy) {
            fullName += this.processInstance.startedBy.firstName || '';
            fullName += fullName ? ' ' : '';
            fullName += this.processInstance.startedBy.lastName || '';
        }
        return fullName;
    };
    ProcessInstanceHeaderComponent.prototype.isRunning = function () {
        return this.processInstance && !this.processInstance.ended;
    };
    return ProcessInstanceHeaderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof process_instance_model_1.ProcessInstance !== "undefined" && process_instance_model_1.ProcessInstance) === "function" && _a || Object)
], ProcessInstanceHeaderComponent.prototype, "processInstance", void 0);
ProcessInstanceHeaderComponent = __decorate([
    core_1.Component({
        selector: 'adf-process-instance-header, activiti-process-instance-header',
        template: __webpack_require__(577),
        styles: [__webpack_require__(433)]
    })
], ProcessInstanceHeaderComponent);
exports.ProcessInstanceHeaderComponent = ProcessInstanceHeaderComponent;
var _a;


/***/ }),

/***/ 32:
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
var common_1 = __webpack_require__(13);
var core_1 = __webpack_require__(0);
var ng2_activiti_tasklist_1 = __webpack_require__(86);
var ng2_alfresco_core_1 = __webpack_require__(1);
var Rx_1 = __webpack_require__(2);
var process_instance_model_1 = __webpack_require__(85);
var process_service_1 = __webpack_require__(16);
var ProcessInstanceTasksComponent = (function () {
    function ProcessInstanceTasksComponent(activitiProcess, logService) {
        var _this = this;
        this.activitiProcess = activitiProcess;
        this.logService = logService;
        this.showRefreshButton = true;
        this.error = new core_1.EventEmitter();
        this.activeTasks = [];
        this.completedTasks = [];
        this.taskClick = new core_1.EventEmitter();
        this.task$ = new Rx_1.Observable(function (observer) { return _this.taskObserver = observer; }).share();
        this.completedTask$ = new Rx_1.Observable(function (observer) { return _this.completedTaskObserver = observer; }).share();
    }
    ProcessInstanceTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.task$.subscribe(function (task) {
            _this.activeTasks.push(task);
        });
        this.completedTask$.subscribe(function (task) {
            _this.completedTasks.push(task);
        });
    };
    ProcessInstanceTasksComponent.prototype.ngOnChanges = function (changes) {
        var processInstanceDetails = changes['processInstanceDetails'];
        if (processInstanceDetails && processInstanceDetails.currentValue) {
            this.load(processInstanceDetails.currentValue.id);
        }
    };
    ProcessInstanceTasksComponent.prototype.load = function (processId) {
        this.loadActive(processId);
        this.loadCompleted(processId);
    };
    ProcessInstanceTasksComponent.prototype.loadActive = function (processId) {
        var _this = this;
        this.activeTasks = [];
        if (processId) {
            this.activitiProcess.getProcessTasks(processId, null).subscribe(function (res) {
                res.forEach(function (task) {
                    _this.taskObserver.next(task);
                });
            }, function (err) {
                _this.error.emit(err);
            });
        }
        else {
            this.activeTasks = [];
        }
    };
    ProcessInstanceTasksComponent.prototype.loadCompleted = function (processId) {
        var _this = this;
        this.completedTasks = [];
        if (processId) {
            this.activitiProcess.getProcessTasks(processId, 'completed').subscribe(function (res) {
                res.forEach(function (task) {
                    _this.completedTaskObserver.next(task);
                });
            }, function (err) {
                _this.error.emit(err);
            });
        }
        else {
            this.completedTasks = [];
        }
    };
    ProcessInstanceTasksComponent.prototype.hasStartFormDefined = function () {
        return this.processInstanceDetails && this.processInstanceDetails.startFormDefined === true;
    };
    ProcessInstanceTasksComponent.prototype.getUserFullName = function (user) {
        if (user) {
            return (user.firstName && user.firstName !== 'null'
                ? user.firstName + ' ' : '') +
                user.lastName;
        }
        return 'Nobody';
    };
    ProcessInstanceTasksComponent.prototype.getFormatDate = function (value, format) {
        var datePipe = new common_1.DatePipe('en-US');
        try {
            return datePipe.transform(value, format);
        }
        catch (err) {
            this.logService.error("ProcessListInstanceTask: error parsing date " + value + " to format " + format);
        }
    };
    ProcessInstanceTasksComponent.prototype.clickTask = function ($event, task) {
        var args = new ng2_activiti_tasklist_1.TaskDetailsEvent(task);
        this.taskClick.emit(args);
    };
    ProcessInstanceTasksComponent.prototype.clickStartTask = function () {
        this.processId = this.processInstanceDetails.id;
        this.showStartDialog();
    };
    ProcessInstanceTasksComponent.prototype.showStartDialog = function () {
        if (!this.startDialog.nativeElement.showModal) {
            dialogPolyfill.registerDialog(this.startDialog.nativeElement);
        }
        if (this.startDialog) {
            this.startDialog.nativeElement.showModal();
        }
    };
    ProcessInstanceTasksComponent.prototype.closeSartDialog = function () {
        if (this.startDialog) {
            this.startDialog.nativeElement.close();
        }
    };
    ProcessInstanceTasksComponent.prototype.onRefreshClicked = function () {
        this.load(this.processInstanceDetails.id);
    };
    ProcessInstanceTasksComponent.prototype.onFormContentClick = function () {
        if (this.startDialog) {
            this.startDialog.nativeElement.close();
        }
    };
    return ProcessInstanceTasksComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof process_instance_model_1.ProcessInstance !== "undefined" && process_instance_model_1.ProcessInstance) === "function" && _a || Object)
], ProcessInstanceTasksComponent.prototype, "processInstanceDetails", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProcessInstanceTasksComponent.prototype, "showRefreshButton", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], ProcessInstanceTasksComponent.prototype, "error", void 0);
__decorate([
    core_1.ViewChild('dialog'),
    __metadata("design:type", Object)
], ProcessInstanceTasksComponent.prototype, "dialog", void 0);
__decorate([
    core_1.ViewChild('startDialog'),
    __metadata("design:type", Object)
], ProcessInstanceTasksComponent.prototype, "startDialog", void 0);
__decorate([
    core_1.ViewChild('taskdetails'),
    __metadata("design:type", Object)
], ProcessInstanceTasksComponent.prototype, "taskdetails", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], ProcessInstanceTasksComponent.prototype, "taskClick", void 0);
ProcessInstanceTasksComponent = __decorate([
    core_1.Component({
        selector: 'adf-process-instance-tasks, activiti-process-instance-tasks',
        template: __webpack_require__(578),
        styles: [__webpack_require__(434)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof process_service_1.ProcessService !== "undefined" && process_service_1.ProcessService) === "function" && _d || Object, typeof (_e = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _e || Object])
], ProcessInstanceTasksComponent);
exports.ProcessInstanceTasksComponent = ProcessInstanceTasksComponent;
var _a, _b, _c, _d, _e;


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/empty_doc_lib.a89c064e4edfa54d2e347bf594947219.svg";

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".adf-create-attachment {\n    display: inline-block;\n    line-height: 0px;\n    vertical-align: middle;\n}\n", ""]);

// exports


/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ":host {\n    width: 100%;\n}\n\n.activiti-label {\n    font-weight: bolder;\n    vertical-align: top;\n}\n\n.activiti-label.mdl-badge[data-badge]:after {\n    right: -27px;\n    top: -2px;\n}\n\n.activiti-label + .icon {\n    position: relative;\n    top: -2px;\n}\n\n.material-icons {\n    cursor: pointer;\n}\n\n.list-wrap {\n    word-wrap: break-word;\n    word-break: break-all;\n    -moz-hyphens:auto;\n    -webkit-hyphens:auto;\n    -o-hyphens:auto;\n    hyphens:auto;\n}\n\n.hide-long-names {\n    overflow: auto;\n}", ""]);

// exports


/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ":host {\n    width: 100%;\n}\n\n.activiti-process-container {\n    width: 100%;\n    min-height: 100px;\n    overflow: visible;\n    padding: 10px;\n}\n\n.adf-comments-dialog {\n    position: fixed;\n    top: 50%;\n    transform: translate(0, -50%);\n    width: 40%;\n}\n", ""]);

// exports


/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ":host {\n    width: 100%;\n}\n\n.adf-card-container {\n    font-family: inherit;\n}\n", ""]);

// exports


/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ":host {\n    width: 100%;\n}\n\n.activiti-label {\n    font-weight: bolder;\n    vertical-align: top;\n}\n\n.activiti-label.mdl-badge[data-badge]:after {\n    right: -27px;\n    top: -2px;\n}\n\n.activiti-label + .icon {\n    position: relative;\n    top: -2px;\n}\n\n.material-icons:hover {\n    color: rgb(255, 152, 0);\n}\n\n.task-details-dialog {\n    position: fixed;\n    top: 50%;\n    transform: translate(0, -50%);\n    width: 40%;\n}\n\n.process-tasks-refresh {\n    float: right;\n}\n\n.mdl-dialog__content.form__size {\n    height: 400px;\n    overflow-y: auto;\n}\n\n.no-results {\n    margin-left: 9px;\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: 0;\n    line-height: 18px;\n    color: rgba(0, 0, 0, .54);\n    display: block;\n    padding: 12px;\n}\n\n.process-tasks__task-item {\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".adf-variable-list-loading-margin {\n    margin-left: calc((100% - 100px) / 2);\n    margin-right: calc((100% - 100px) / 2);\n}\n\n.no-content-message {\n    font-family: Muli;\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    opacity: 0.54;\n    color: #000;\n}", ""]);

// exports


/***/ }),

/***/ 42:
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
var ng2_activiti_form_1 = __webpack_require__(26);
var ng2_alfresco_core_1 = __webpack_require__(1);
var ProcessAttachmentListComponent = (function () {
    function ProcessAttachmentListComponent(activitiContentService, contentService, thumbnailService) {
        this.activitiContentService = activitiContentService;
        this.contentService = contentService;
        this.thumbnailService = thumbnailService;
        this.disabled = false;
        this.attachmentClick = new core_1.EventEmitter();
        this.success = new core_1.EventEmitter();
        this.error = new core_1.EventEmitter();
        this.emptyListImageUrl = __webpack_require__(390);
        this.attachments = [];
        this.isLoading = true;
    }
    ProcessAttachmentListComponent.prototype.ngOnChanges = function (changes) {
        if (changes['processInstanceId'] && changes['processInstanceId'].currentValue) {
            this.loadAttachmentsByProcessInstanceId(changes['processInstanceId'].currentValue);
        }
    };
    ProcessAttachmentListComponent.prototype.reset = function () {
        this.attachments = [];
    };
    ProcessAttachmentListComponent.prototype.reload = function () {
        this.loadAttachmentsByProcessInstanceId(this.processInstanceId);
    };
    ProcessAttachmentListComponent.prototype.add = function (content) {
        this.attachments.push({
            id: content.id,
            name: content.name,
            created: content.created,
            createdBy: content.createdBy.firstName + ' ' + content.createdBy.lastName,
            icon: this.thumbnailService.getMimeTypeIcon(content.mimeType)
        });
    };
    ProcessAttachmentListComponent.prototype.loadAttachmentsByProcessInstanceId = function (processInstanceId) {
        var _this = this;
        if (processInstanceId) {
            this.reset();
            this.isLoading = true;
            this.activitiContentService.getProcessRelatedContent(processInstanceId).subscribe(function (res) {
                res.data.forEach(function (content) {
                    _this.attachments.push({
                        id: content.id,
                        name: content.name,
                        created: content.created,
                        createdBy: content.createdBy.firstName + ' ' + content.createdBy.lastName,
                        icon: _this.thumbnailService.getMimeTypeIcon(content.mimeType)
                    });
                });
                _this.success.emit(_this.attachments);
                _this.isLoading = false;
            }, function (err) {
                _this.error.emit(err);
                _this.isLoading = false;
            });
        }
    };
    ProcessAttachmentListComponent.prototype.deleteAttachmentById = function (contentId) {
        var _this = this;
        if (contentId) {
            this.activitiContentService.deleteRelatedContent(contentId).subscribe(function (res) {
                _this.attachments = _this.attachments.filter(function (content) {
                    return content.id !== contentId;
                });
            }, function (err) {
                _this.error.emit(err);
            });
        }
    };
    ProcessAttachmentListComponent.prototype.isEmpty = function () {
        return this.attachments && this.attachments.length === 0;
    };
    ProcessAttachmentListComponent.prototype.onShowRowActionsMenu = function (event) {
        var viewAction = {
            title: 'View',
            name: 'view'
        };
        var removeAction = {
            title: 'Remove',
            name: 'remove'
        };
        var downloadAction = {
            title: 'Download',
            name: 'download'
        };
        event.value.actions = [
            viewAction,
            downloadAction
        ];
        if (!this.disabled) {
            event.value.actions.splice(1, 0, removeAction);
        }
    };
    ProcessAttachmentListComponent.prototype.onExecuteRowAction = function (event) {
        var args = event.value;
        var action = args.action;
        if (action.name === 'view') {
            this.emitDocumentContent(args.row.obj);
        }
        else if (action.name === 'remove') {
            this.deleteAttachmentById(args.row.obj.id);
        }
        else if (action.name === 'download') {
            this.downloadContent(args.row.obj);
        }
    };
    ProcessAttachmentListComponent.prototype.openContent = function (event) {
        var content = event.value.obj;
        this.emitDocumentContent(content);
    };
    ProcessAttachmentListComponent.prototype.emitDocumentContent = function (content) {
        var _this = this;
        this.activitiContentService.getFileRawContent(content.id).subscribe(function (blob) {
            content.contentBlob = blob;
            _this.attachmentClick.emit(content);
        }, function (err) {
            _this.error.emit(err);
        });
    };
    ProcessAttachmentListComponent.prototype.downloadContent = function (content) {
        var _this = this;
        this.activitiContentService.getFileRawContent(content.id).subscribe(function (blob) { return _this.contentService.downloadBlob(blob, content.name); }, function (err) {
            _this.error.emit(err);
        });
    };
    ProcessAttachmentListComponent.prototype.isDisabled = function () {
        return this.disabled;
    };
    return ProcessAttachmentListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProcessAttachmentListComponent.prototype, "processInstanceId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProcessAttachmentListComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ProcessAttachmentListComponent.prototype, "attachmentClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ProcessAttachmentListComponent.prototype, "success", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], ProcessAttachmentListComponent.prototype, "error", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProcessAttachmentListComponent.prototype, "emptyListImageUrl", void 0);
ProcessAttachmentListComponent = __decorate([
    core_1.Component({
        selector: 'adf-process-attachment-list',
        styles: [__webpack_require__(753)],
        template: __webpack_require__(573)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof ng2_activiti_form_1.ActivitiContentService !== "undefined" && ng2_activiti_form_1.ActivitiContentService) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.ContentService !== "undefined" && ng2_alfresco_core_1.ContentService) === "function" && _c || Object, typeof (_d = typeof ng2_alfresco_core_1.ThumbnailService !== "undefined" && ng2_alfresco_core_1.ThumbnailService) === "function" && _d || Object])
], ProcessAttachmentListComponent);
exports.ProcessAttachmentListComponent = ProcessAttachmentListComponent;
var _a, _b, _c, _d;


/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "adf-datatable >>> .column-header {\n    color: #232323;\n    font-size: 15px;\n}\n\nadf-datatable >>> .data-cell {\n    cursor: pointer !important;\n}\n\nadf-datatable >>> .cell-value{\n    width: 250px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis\n}\n\n.adf-process-list-loading-margin {\n    margin-left: calc((100% - 100px) / 2);\n    margin-right: calc((100% - 100px) / 2);\n}\n\n.no-content-message {\n    font-family: Muli;\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    opacity: 0.54;\n    color: #000;\n}\n", ""]);

// exports


/***/ }),

/***/ 43:
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
var ng2_activiti_tasklist_1 = __webpack_require__(86);
var process_service_1 = __webpack_require__(16);
var ProcessCommentsComponent = (function () {
    function ProcessCommentsComponent() {
        this.readOnly = true;
        this.error = new core_1.EventEmitter();
    }
    ProcessCommentsComponent.prototype.onError = function (error) {
        this.error.emit(error);
    };
    return ProcessCommentsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProcessCommentsComponent.prototype, "processInstanceId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProcessCommentsComponent.prototype, "readOnly", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], ProcessCommentsComponent.prototype, "error", void 0);
ProcessCommentsComponent = __decorate([
    core_1.Component({
        selector: 'adf-process-instance-comments, activiti-process-instance-comments',
        template: __webpack_require__(574),
        styles: [__webpack_require__(431)],
        providers: [{ provide: ng2_activiti_tasklist_1.TaskListService, useClass: process_service_1.ProcessService }]
    })
], ProcessCommentsComponent);
exports.ProcessCommentsComponent = ProcessCommentsComponent;
var _a;


/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(414);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(415);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(416);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(417);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(418);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(419);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(420);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 44:
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
var filter_process_model_1 = __webpack_require__(112);
var process_service_1 = __webpack_require__(16);
var ProcessFiltersComponent = (function () {
    function ProcessFiltersComponent(activiti) {
        var _this = this;
        this.activiti = activiti;
        this.filterClick = new core_1.EventEmitter();
        this.onSuccess = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.showIcon = true;
        this.filters = [];
        this.filter$ = new Rx_1.Observable(function (observer) { return _this.filterObserver = observer; }).share();
    }
    ProcessFiltersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter$.subscribe(function (filter) {
            _this.filters.push(filter);
        });
    };
    ProcessFiltersComponent.prototype.ngOnChanges = function (changes) {
        var appId = changes['appId'];
        if (appId && (appId.currentValue || appId.currentValue === null)) {
            this.getFiltersByAppId(appId.currentValue);
            return;
        }
        var appName = changes['appName'];
        if (appName && appName.currentValue) {
            this.getFiltersByAppName(appName.currentValue);
            return;
        }
    };
    ProcessFiltersComponent.prototype.getFiltersByAppId = function (appId) {
        var _this = this;
        this.activiti.getProcessFilters(appId).subscribe(function (res) {
            if (res.length === 0 && _this.isFilterListEmpty()) {
                _this.activiti.createDefaultFilters(appId).subscribe(function (resDefault) {
                    _this.resetFilter();
                    resDefault.forEach(function (filter) {
                        _this.filterObserver.next(filter);
                    });
                    _this.selectTaskFilter(_this.filterParam);
                    _this.onSuccess.emit(resDefault);
                }, function (errDefault) {
                    _this.onError.emit(errDefault);
                });
            }
            else {
                _this.resetFilter();
                res.forEach(function (filter) {
                    _this.filterObserver.next(filter);
                });
                _this.selectTaskFilter(_this.filterParam);
                _this.onSuccess.emit(res);
            }
        }, function (err) {
            _this.onError.emit(err);
        });
    };
    ProcessFiltersComponent.prototype.getFiltersByAppName = function (appName) {
        var _this = this;
        this.activiti.getDeployedApplications(appName).subscribe(function (application) {
            _this.getFiltersByAppId(application.id.toString());
            _this.selectTaskFilter(_this.filterParam);
        }, function (err) {
            _this.onError.emit(err);
        });
    };
    ProcessFiltersComponent.prototype.selectFilter = function (filter) {
        this.currentFilter = filter;
        this.filterClick.emit(filter);
    };
    ProcessFiltersComponent.prototype.selectTaskFilter = function (filterParam) {
        var _this = this;
        if (filterParam) {
            this.filters.filter(function (taskFilter, index) {
                if (filterParam.name && filterParam.name.toLowerCase() === taskFilter.name.toLowerCase() ||
                    filterParam.id === taskFilter.id || filterParam.index === index) {
                    _this.currentFilter = taskFilter;
                }
            });
        }
        if (this.isCurrentFilterEmpty()) {
            this.selectDefaultTaskFilter();
        }
    };
    ProcessFiltersComponent.prototype.selectDefaultTaskFilter = function () {
        if (!this.isFilterListEmpty()) {
            this.currentFilter = this.filters[0];
        }
    };
    ProcessFiltersComponent.prototype.getCurrentFilter = function () {
        return this.currentFilter;
    };
    ProcessFiltersComponent.prototype.isFilterListEmpty = function () {
        return this.filters === undefined || (this.filters && this.filters.length === 0);
    };
    ProcessFiltersComponent.prototype.resetFilter = function () {
        this.filters = [];
        this.currentFilter = undefined;
    };
    ProcessFiltersComponent.prototype.isCurrentFilterEmpty = function () {
        return this.currentFilter === undefined || null ? true : false;
    };
    return ProcessFiltersComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof filter_process_model_1.FilterParamsModel !== "undefined" && filter_process_model_1.FilterParamsModel) === "function" && _a || Object)
], ProcessFiltersComponent.prototype, "filterParam", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], ProcessFiltersComponent.prototype, "filterClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], ProcessFiltersComponent.prototype, "onSuccess", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], ProcessFiltersComponent.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ProcessFiltersComponent.prototype, "appId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProcessFiltersComponent.prototype, "appName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProcessFiltersComponent.prototype, "showIcon", void 0);
ProcessFiltersComponent = __decorate([
    core_1.Component({
        selector: 'adf-process-instance-filters, activiti-process-instance-filters',
        template: __webpack_require__(575),
        styles: [__webpack_require__(754)]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof process_service_1.ProcessService !== "undefined" && process_service_1.ProcessService) === "function" && _e || Object])
], ProcessFiltersComponent);
exports.ProcessFiltersComponent = ProcessFiltersComponent;
var _a, _b, _c, _d, _e;


/***/ }),

/***/ 45:
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
var common_1 = __webpack_require__(13);
var core_1 = __webpack_require__(0);
var ng2_alfresco_core_1 = __webpack_require__(1);
var process_service_1 = __webpack_require__(16);
var process_instance_header_component_1 = __webpack_require__(31);
var process_instance_tasks_component_1 = __webpack_require__(32);
var ProcessInstanceDetailsComponent = (function () {
    function ProcessInstanceDetailsComponent(activitiProcess, logService) {
        this.activitiProcess = activitiProcess;
        this.logService = logService;
        this.showTitle = true;
        this.showRefreshButton = true;
        this.processCancelled = new core_1.EventEmitter();
        this.error = new core_1.EventEmitter();
        this.taskClick = new core_1.EventEmitter();
        this.showProcessDiagram = new core_1.EventEmitter();
    }
    ProcessInstanceDetailsComponent.prototype.ngOnChanges = function (changes) {
        var processInstanceId = changes['processInstanceId'];
        if (processInstanceId && !processInstanceId.currentValue) {
            this.reset();
            return;
        }
        if (processInstanceId && processInstanceId.currentValue) {
            this.load(processInstanceId.currentValue);
            return;
        }
    };
    ProcessInstanceDetailsComponent.prototype.reset = function () {
        this.processInstanceDetails = null;
    };
    ProcessInstanceDetailsComponent.prototype.load = function (processId) {
        var _this = this;
        if (processId) {
            this.activitiProcess.getProcess(processId).subscribe(function (res) {
                _this.processInstanceDetails = res;
            });
        }
    };
    ProcessInstanceDetailsComponent.prototype.isRunning = function () {
        return this.processInstanceDetails && !this.processInstanceDetails.ended;
    };
    ProcessInstanceDetailsComponent.prototype.isDiagramDisabled = function () {
        return !this.isRunning() ? true : undefined;
    };
    ProcessInstanceDetailsComponent.prototype.cancelProcess = function () {
        var _this = this;
        this.activitiProcess.cancelProcess(this.processInstanceId).subscribe(function (data) {
            _this.processCancelled.emit(data);
        }, function (err) {
            _this.error.emit(err);
        });
    };
    ProcessInstanceDetailsComponent.prototype.onTaskClicked = function (event) {
        this.taskClick.emit(event);
    };
    ProcessInstanceDetailsComponent.prototype.getProcessNameOrDescription = function (dateFormat) {
        var name = '';
        if (this.processInstanceDetails) {
            name = this.processInstanceDetails.name ||
                this.processInstanceDetails.processDefinitionName + ' - ' + this.getFormatDate(this.processInstanceDetails.started, dateFormat);
        }
        return name;
    };
    ProcessInstanceDetailsComponent.prototype.getFormatDate = function (value, format) {
        var datePipe = new common_1.DatePipe('en-US');
        try {
            return datePipe.transform(value, format);
        }
        catch (err) {
            this.logService.error("ProcessListInstanceHeader: error parsing date " + value + " to format " + format);
        }
    };
    ProcessInstanceDetailsComponent.prototype.onShowProcessDiagram = function (processInstanceId) {
        this.showProcessDiagram.emit({ value: this.processInstanceId });
    };
    return ProcessInstanceDetailsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProcessInstanceDetailsComponent.prototype, "processInstanceId", void 0);
__decorate([
    core_1.ViewChild(process_instance_header_component_1.ProcessInstanceHeaderComponent),
    __metadata("design:type", typeof (_a = typeof process_instance_header_component_1.ProcessInstanceHeaderComponent !== "undefined" && process_instance_header_component_1.ProcessInstanceHeaderComponent) === "function" && _a || Object)
], ProcessInstanceDetailsComponent.prototype, "processInstanceHeader", void 0);
__decorate([
    core_1.ViewChild(process_instance_tasks_component_1.ProcessInstanceTasksComponent),
    __metadata("design:type", typeof (_b = typeof process_instance_tasks_component_1.ProcessInstanceTasksComponent !== "undefined" && process_instance_tasks_component_1.ProcessInstanceTasksComponent) === "function" && _b || Object)
], ProcessInstanceDetailsComponent.prototype, "tasksList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProcessInstanceDetailsComponent.prototype, "showTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProcessInstanceDetailsComponent.prototype, "showRefreshButton", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], ProcessInstanceDetailsComponent.prototype, "processCancelled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], ProcessInstanceDetailsComponent.prototype, "error", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], ProcessInstanceDetailsComponent.prototype, "taskClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_f = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _f || Object)
], ProcessInstanceDetailsComponent.prototype, "showProcessDiagram", void 0);
ProcessInstanceDetailsComponent = __decorate([
    core_1.Component({
        selector: 'adf-process-instance-details, activiti-process-instance-details',
        template: __webpack_require__(576),
        styles: [__webpack_require__(432)]
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof process_service_1.ProcessService !== "undefined" && process_service_1.ProcessService) === "function" && _g || Object, typeof (_h = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _h || Object])
], ProcessInstanceDetailsComponent);
exports.ProcessInstanceDetailsComponent = ProcessInstanceDetailsComponent;
var _a, _b, _c, _d, _e, _f, _g, _h;


/***/ }),

/***/ 46:
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
var ng2_alfresco_datatable_1 = __webpack_require__(10);
var process_instance_variable_model_1 = __webpack_require__(114);
var process_service_1 = __webpack_require__(16);
var ProcessInstanceVariablesComponent = (function () {
    function ProcessInstanceVariablesComponent(activitiProcess) {
        this.activitiProcess = activitiProcess;
        this.error = new core_1.EventEmitter();
        this.defaultSchemaColumn = [
            { type: 'text', key: 'name', title: 'Name', cssClass: 'full-width name-column', sortable: true },
            { type: 'text', key: 'value', title: 'Value', sortable: true },
            { type: 'text', key: 'scope', title: 'Scope', sortable: true }
        ];
        this.isLoading = true;
    }
    ProcessInstanceVariablesComponent.prototype.ngOnInit = function () {
        if (!this.data) {
            this.data = this.initDefaultSchemaColumns();
        }
        if (this.processInstanceId) {
            this.getProcessInstanceVariables(this.processInstanceId);
            return;
        }
    };
    ProcessInstanceVariablesComponent.prototype.ngOnChanges = function (changes) {
        var processInstanceId = changes['processInstanceId'];
        if (processInstanceId) {
            if (processInstanceId.currentValue) {
                this.getProcessInstanceVariables(processInstanceId.currentValue);
            }
            else {
                this.resetVariables();
            }
        }
    };
    ProcessInstanceVariablesComponent.prototype.isListEmpty = function () {
        return this.data === undefined ||
            (this.data && this.data.getRows() && this.data.getRows().length === 0);
    };
    ProcessInstanceVariablesComponent.prototype.initDefaultSchemaColumns = function () {
        return new ng2_alfresco_datatable_1.ObjectDataTableAdapter([], this.defaultSchemaColumn);
    };
    ProcessInstanceVariablesComponent.prototype.createDataRow = function (instances) {
        var instancesRows = [];
        instances.forEach(function (row) {
            instancesRows.push(new ng2_alfresco_datatable_1.ObjectDataRow({
                name: row.name,
                value: row.value,
                scope: row.scope
            }));
        });
        return instancesRows;
    };
    ProcessInstanceVariablesComponent.prototype.renderInstances = function (instances) {
        this.data.setRows(instances);
    };
    ProcessInstanceVariablesComponent.prototype.getProcessInstanceVariables = function (processInstanceId) {
        var _this = this;
        if (processInstanceId) {
            this.isLoading = true;
            this.activitiProcess.getProcessInstanceVariables(processInstanceId).subscribe(function (res) {
                var instancesRow = _this.createDataRow(res);
                _this.renderInstances(instancesRow);
                _this.isLoading = false;
            }, function (err) {
                _this.error.emit(err);
                _this.isLoading = false;
            });
        }
        else {
            this.resetVariables();
        }
    };
    ProcessInstanceVariablesComponent.prototype.resetVariables = function () {
        if (this.data) {
            this.data.setRows([]);
        }
    };
    ProcessInstanceVariablesComponent.prototype.polyfillDialog = function (dialog) {
        if (!dialog.nativeElement.showModal) {
            dialogPolyfill.registerDialog(dialog.nativeElement);
        }
    };
    ProcessInstanceVariablesComponent.prototype.showAddDialog = function () {
        this.resetForm();
        this.polyfillDialog(this.addDialog);
        this.addDialog.nativeElement.showModal();
    };
    ProcessInstanceVariablesComponent.prototype.showEditDialog = function (row) {
        this.variableName = row.getValue('name');
        this.variableValue = row.getValue('value');
        this.variableScope = row.getValue('scope');
        this.polyfillDialog(this.editDialog);
        this.editDialog.nativeElement.showModal();
    };
    ProcessInstanceVariablesComponent.prototype.showErrorDialog = function () {
        this.polyfillDialog(this.errorDialog);
        this.errorDialog.nativeElement.showModal();
    };
    ProcessInstanceVariablesComponent.prototype.add = function () {
        var _this = this;
        this.activitiProcess.createOrUpdateProcessInstanceVariables(this.processInstanceId, [new process_instance_variable_model_1.ProcessInstanceVariable({
                name: this.variableName,
                value: this.variableValue,
                scope: this.variableScope
            })]).subscribe(function (res) {
            _this.getProcessInstanceVariables(_this.processInstanceId);
            _this.resetForm();
        }, function (err) {
            _this.showErrorDialog();
            _this.error.emit(err);
        });
        this.closeAddDialog();
    };
    ProcessInstanceVariablesComponent.prototype.edit = function () {
        var _this = this;
        this.activitiProcess.createOrUpdateProcessInstanceVariables(this.processInstanceId, [new process_instance_variable_model_1.ProcessInstanceVariable({
                name: this.variableName,
                value: this.variableValue,
                scope: this.variableScope
            })]).subscribe(function (res) {
            _this.getProcessInstanceVariables(_this.processInstanceId);
            _this.resetForm();
        }, function (err) {
            _this.showErrorDialog();
            _this.error.emit(err);
        });
        this.closeEditDialog();
    };
    ProcessInstanceVariablesComponent.prototype.closeAddDialog = function () {
        this.addDialog.nativeElement.close();
    };
    ProcessInstanceVariablesComponent.prototype.closeEditDialog = function () {
        this.editDialog.nativeElement.close();
    };
    ProcessInstanceVariablesComponent.prototype.closeErrorDialog = function () {
        this.errorDialog.nativeElement.close();
    };
    ProcessInstanceVariablesComponent.prototype.resetForm = function () {
        this.variableName = '';
        this.variableValue = '';
        this.variableScope = 'global';
    };
    ProcessInstanceVariablesComponent.prototype.onDeleteVariable = function (row) {
        var _this = this;
        this.activitiProcess.deleteProcessInstanceVariable(this.processInstanceId, row.getValue('name')).subscribe(function () {
            _this.getProcessInstanceVariables(_this.processInstanceId);
        }, function (err) {
            _this.showErrorDialog();
            _this.error.emit(err);
        });
    };
    ProcessInstanceVariablesComponent.prototype.onExecuteRowAction = function (event) {
        var row = event.args.row;
        var action = event.args.action;
        if (action && action.id === 'delete') {
            this.onDeleteVariable(row);
        }
        if (action && action.id === 'edit') {
            this.showEditDialog(row);
        }
    };
    ProcessInstanceVariablesComponent.prototype.onShowRowActionsMenu = function (event) {
        event.value.actions = [
            { id: 'delete', title: 'Delete' },
            { id: 'edit', title: 'Edit' }
        ];
    };
    return ProcessInstanceVariablesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProcessInstanceVariablesComponent.prototype, "processInstanceId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof ng2_alfresco_datatable_1.DataTableAdapter !== "undefined" && ng2_alfresco_datatable_1.DataTableAdapter) === "function" && _a || Object)
], ProcessInstanceVariablesComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], ProcessInstanceVariablesComponent.prototype, "error", void 0);
__decorate([
    core_1.ViewChild('addDialog'),
    __metadata("design:type", typeof (_c = typeof core_1.DebugElement !== "undefined" && core_1.DebugElement) === "function" && _c || Object)
], ProcessInstanceVariablesComponent.prototype, "addDialog", void 0);
__decorate([
    core_1.ViewChild('editDialog'),
    __metadata("design:type", typeof (_d = typeof core_1.DebugElement !== "undefined" && core_1.DebugElement) === "function" && _d || Object)
], ProcessInstanceVariablesComponent.prototype, "editDialog", void 0);
__decorate([
    core_1.ViewChild('errorDialog'),
    __metadata("design:type", typeof (_e = typeof core_1.DebugElement !== "undefined" && core_1.DebugElement) === "function" && _e || Object)
], ProcessInstanceVariablesComponent.prototype, "errorDialog", void 0);
ProcessInstanceVariablesComponent = __decorate([
    core_1.Component({
        selector: 'adf-process-instance-variables, activiti-process-instance-variables',
        template: __webpack_require__(579),
        styles: [__webpack_require__(435)],
        providers: [process_service_1.ProcessService]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof process_service_1.ProcessService !== "undefined" && process_service_1.ProcessService) === "function" && _f || Object])
], ProcessInstanceVariablesComponent);
exports.ProcessInstanceVariablesComponent = ProcessInstanceVariablesComponent;
var _a, _b, _c, _d, _e, _f;


/***/ }),

/***/ 47:
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
var common_1 = __webpack_require__(13);
var core_1 = __webpack_require__(0);
var ng2_alfresco_core_1 = __webpack_require__(1);
var ng2_alfresco_datatable_1 = __webpack_require__(10);
var process_instance_filter_model_1 = __webpack_require__(194);
var process_service_1 = __webpack_require__(16);
var ProcessInstanceListComponent = (function () {
    function ProcessInstanceListComponent(processService) {
        this.processService = processService;
        this.rowClick = new core_1.EventEmitter();
        this.onSuccess = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.isLoading = true;
        this.defaultSchema = [
            { type: 'text', key: 'name', title: 'Name', cssClass: 'full-width name-column', sortable: true },
            { type: 'text', key: 'created', title: 'Created', cssClass: 'hidden', sortable: true }
        ];
    }
    ProcessInstanceListComponent.prototype.ngAfterContentInit = function () {
        this.setupSchema();
        if (this.appId) {
            this.reload();
        }
    };
    ProcessInstanceListComponent.prototype.setupSchema = function () {
        var schema = [];
        if (this.columnList && this.columnList.columns && this.columnList.columns.length > 0) {
            schema = this.columnList.columns.map(function (c) { return c; });
        }
        if (!this.data) {
            this.data = new ng2_alfresco_datatable_1.ObjectDataTableAdapter([], schema.length > 0 ? schema : this.defaultSchema);
        }
        else {
            if (schema && schema.length > 0) {
                this.data.setColumns(schema);
            }
            else if (this.data.getColumns().length === 0) {
                this.data.setColumns(this.defaultSchema);
            }
        }
    };
    ProcessInstanceListComponent.prototype.ngOnChanges = function (changes) {
        if (this.isPropertyChanged(changes)) {
            this.reload();
        }
    };
    ProcessInstanceListComponent.prototype.isPropertyChanged = function (changes) {
        var changed = false;
        var appId = changes['appId'];
        var processDefinitionKey = changes['processDefinitionKey'];
        var state = changes['state'];
        var sort = changes['sort'];
        var name = changes['name'];
        if (appId && appId.currentValue) {
            changed = true;
        }
        else if (processDefinitionKey && processDefinitionKey.currentValue) {
            changed = true;
        }
        else if (state && state.currentValue) {
            changed = true;
        }
        else if (sort && sort.currentValue) {
            changed = true;
        }
        else if (name && name.currentValue) {
            changed = true;
        }
        return changed;
    };
    ProcessInstanceListComponent.prototype.reload = function () {
        this.requestNode = this.createRequestNode();
        this.load(this.requestNode);
    };
    ProcessInstanceListComponent.prototype.load = function (requestNode) {
        var _this = this;
        this.isLoading = true;
        this.processService.getProcessInstances(requestNode)
            .subscribe(function (response) {
            var instancesRow = _this.createDataRow(response);
            _this.renderInstances(instancesRow);
            _this.selectFirst();
            _this.onSuccess.emit(response);
            _this.isLoading = false;
        }, function (error) {
            _this.onError.emit(error);
            _this.isLoading = false;
        });
    };
    ProcessInstanceListComponent.prototype.createDataRow = function (instances) {
        var instancesRows = [];
        instances.forEach(function (row) {
            instancesRows.push(new ng2_alfresco_datatable_1.ObjectDataRow(row));
        });
        return instancesRows;
    };
    ProcessInstanceListComponent.prototype.renderInstances = function (instances) {
        instances = this.optimizeNames(instances);
        this.setDatatableSorting();
        this.data.setRows(instances);
    };
    ProcessInstanceListComponent.prototype.setDatatableSorting = function () {
        if (!this.sort) {
            return;
        }
        var sortingParams = this.sort.split('-');
        if (sortingParams.length === 2) {
            var sortColumn = sortingParams[0] === 'created' ? 'started' : sortingParams[0];
            var sortOrder = sortingParams[1];
            this.data.setSorting(new ng2_alfresco_datatable_1.DataSorting(sortColumn, sortOrder));
        }
    };
    ProcessInstanceListComponent.prototype.selectFirst = function () {
        if (!this.isListEmpty()) {
            var row = this.data.getRows()[0];
            this.data.selectedRow = row;
            this.currentInstanceId = row.getValue('id');
        }
        else {
            if (this.data) {
                this.data.selectedRow = null;
            }
            this.currentInstanceId = null;
        }
    };
    ProcessInstanceListComponent.prototype.getCurrentId = function () {
        return this.currentInstanceId;
    };
    ProcessInstanceListComponent.prototype.isListEmpty = function () {
        return this.data === undefined ||
            (this.data && this.data.getRows() && this.data.getRows().length === 0);
    };
    ProcessInstanceListComponent.prototype.onRowClick = function (event) {
        var item = event;
        this.currentInstanceId = item.value.getValue('id');
        this.rowClick.emit(this.currentInstanceId);
    };
    ProcessInstanceListComponent.prototype.optimizeNames = function (instances) {
        var _this = this;
        instances = instances.map(function (t) {
            t.obj.name = _this.getProcessNameOrDescription(t.obj, 'medium');
            return t;
        });
        return instances;
    };
    ProcessInstanceListComponent.prototype.getProcessNameOrDescription = function (processInstance, dateFormat) {
        var name = '';
        if (processInstance) {
            name = processInstance.name ||
                processInstance.processDefinitionName + ' - ' + this.getFormatDate(processInstance.started, dateFormat);
        }
        return name;
    };
    ProcessInstanceListComponent.prototype.getFormatDate = function (value, format) {
        var datePipe = new common_1.DatePipe('en-US');
        try {
            return datePipe.transform(value, format);
        }
        catch (err) {
            return '';
        }
    };
    ProcessInstanceListComponent.prototype.createRequestNode = function () {
        var requestNode = {
            appDefinitionId: this.appId,
            processDefinitionKey: this.processDefinitionKey,
            state: this.state,
            sort: this.sort
        };
        return new process_instance_filter_model_1.ProcessFilterRequestRepresentation(requestNode);
    };
    return ProcessInstanceListComponent;
}());
__decorate([
    core_1.ContentChild(ng2_alfresco_core_1.DataColumnListComponent),
    __metadata("design:type", typeof (_a = typeof ng2_alfresco_core_1.DataColumnListComponent !== "undefined" && ng2_alfresco_core_1.DataColumnListComponent) === "function" && _a || Object)
], ProcessInstanceListComponent.prototype, "columnList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProcessInstanceListComponent.prototype, "appId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProcessInstanceListComponent.prototype, "processDefinitionKey", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProcessInstanceListComponent.prototype, "state", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProcessInstanceListComponent.prototype, "sort", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProcessInstanceListComponent.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof ng2_alfresco_datatable_1.DataTableAdapter !== "undefined" && ng2_alfresco_datatable_1.DataTableAdapter) === "function" && _b || Object)
], ProcessInstanceListComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], ProcessInstanceListComponent.prototype, "rowClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], ProcessInstanceListComponent.prototype, "onSuccess", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], ProcessInstanceListComponent.prototype, "onError", void 0);
ProcessInstanceListComponent = __decorate([
    core_1.Component({
        selector: 'adf-process-instance-list, activiti-process-instance-list',
        styles: [__webpack_require__(436)],
        template: __webpack_require__(580)
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof process_service_1.ProcessService !== "undefined" && process_service_1.ProcessService) === "function" && _f || Object])
], ProcessInstanceListComponent);
exports.ProcessInstanceListComponent = ProcessInstanceListComponent;
var _a, _b, _c, _d, _e, _f;


/***/ }),

/***/ 48:
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
var ng2_activiti_form_1 = __webpack_require__(26);
var process_definition_model_1 = __webpack_require__(113);
var process_service_1 = __webpack_require__(16);
var StartProcessInstanceComponent = (function () {
    function StartProcessInstanceComponent(activitiProcess) {
        this.activitiProcess = activitiProcess;
        this.start = new core_1.EventEmitter();
        this.cancel = new core_1.EventEmitter();
        this.error = new core_1.EventEmitter();
        this.processDefinitions = [];
        this.currentProcessDef = new process_definition_model_1.ProcessDefinitionRepresentation();
        this.errorMessageId = '';
    }
    StartProcessInstanceComponent.prototype.ngOnChanges = function (changes) {
        var appIdChange = changes['appId'];
        var appId = appIdChange ? appIdChange.currentValue : null;
        this.load(appId);
    };
    StartProcessInstanceComponent.prototype.load = function (appId) {
        var _this = this;
        this.resetSelectedProcessDefinition();
        this.resetErrorMessage();
        this.activitiProcess.getProcessDefinitions(appId).subscribe(function (res) {
            _this.processDefinitions = res;
        }, function () {
            _this.errorMessageId = 'START_PROCESS.ERROR.LOAD_PROCESS_DEFS';
        });
    };
    StartProcessInstanceComponent.prototype.startProcess = function (outcome) {
        var _this = this;
        if (this.currentProcessDef.id && this.name) {
            this.resetErrorMessage();
            var formValues = this.startForm ? this.startForm.form.values : undefined;
            this.activitiProcess.startProcess(this.currentProcessDef.id, this.name, outcome, formValues, this.variables).subscribe(function (res) {
                _this.name = '';
                _this.start.emit(res);
            }, function (err) {
                _this.errorMessageId = 'START_PROCESS.ERROR.START';
                _this.error.error(err);
            });
        }
    };
    StartProcessInstanceComponent.prototype.onProcessDefChange = function (processDefinitionId) {
        var processDef = this.processDefinitions.find(function (processDefinition) {
            return processDefinition.id === processDefinitionId;
        });
        if (processDef) {
            this.currentProcessDef = JSON.parse(JSON.stringify(processDef));
        }
        else {
            this.resetSelectedProcessDefinition();
        }
    };
    StartProcessInstanceComponent.prototype.cancelStartProcess = function () {
        this.cancel.emit();
    };
    StartProcessInstanceComponent.prototype.hasStartForm = function () {
        return this.currentProcessDef && this.currentProcessDef.hasStartForm;
    };
    StartProcessInstanceComponent.prototype.isProcessDefinitionEmpty = function () {
        return this.processDefinitions ? (this.processDefinitions.length > 0 || this.errorMessageId) : this.errorMessageId;
    };
    StartProcessInstanceComponent.prototype.isStartFormMissingOrValid = function () {
        if (this.startForm) {
            return this.startForm.form && this.startForm.form.isValid;
        }
        else {
            return true;
        }
    };
    StartProcessInstanceComponent.prototype.validateForm = function () {
        return this.currentProcessDef.id && this.name && this.isStartFormMissingOrValid();
    };
    StartProcessInstanceComponent.prototype.resetSelectedProcessDefinition = function () {
        this.currentProcessDef = new process_definition_model_1.ProcessDefinitionRepresentation();
    };
    StartProcessInstanceComponent.prototype.resetErrorMessage = function () {
        this.errorMessageId = '';
    };
    StartProcessInstanceComponent.prototype.hasErrorMessage = function () {
        return this.processDefinitions.length === 0 && !this.errorMessageId;
    };
    StartProcessInstanceComponent.prototype.onOutcomeClick = function (outcome) {
        this.startProcess(outcome);
    };
    StartProcessInstanceComponent.prototype.reset = function () {
        this.resetSelectedProcessDefinition();
        this.name = '';
        if (this.startForm) {
            this.startForm.data = {};
        }
        this.resetErrorMessage();
    };
    return StartProcessInstanceComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StartProcessInstanceComponent.prototype, "appId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], StartProcessInstanceComponent.prototype, "variables", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], StartProcessInstanceComponent.prototype, "start", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], StartProcessInstanceComponent.prototype, "cancel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], StartProcessInstanceComponent.prototype, "error", void 0);
__decorate([
    core_1.ViewChild(ng2_activiti_form_1.StartFormComponent),
    __metadata("design:type", typeof (_d = typeof ng2_activiti_form_1.StartFormComponent !== "undefined" && ng2_activiti_form_1.StartFormComponent) === "function" && _d || Object)
], StartProcessInstanceComponent.prototype, "startForm", void 0);
StartProcessInstanceComponent = __decorate([
    core_1.Component({
        selector: 'adf-start-process, activiti-start-process',
        template: __webpack_require__(581),
        styles: [__webpack_require__(755)]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof process_service_1.ProcessService !== "undefined" && process_service_1.ProcessService) === "function" && _e || Object])
], StartProcessInstanceComponent);
exports.StartProcessInstanceComponent = StartProcessInstanceComponent;
var _a, _b, _c, _d, _e;


/***/ }),

/***/ 572:
/***/ (function(module, exports) {

module.exports = "<button\n    id=\"add_new_process_content_button\"\n    md-button\n    md-raised-button\n    md-icon-button\n    class=\"adf-create-attachment\"\n    [adf-upload]=\"true\"\n    mode=\"['click']\"\n    [multiple]=\"true\"\n    (upload-files)=\"onFileUpload($event)\">\n    <md-icon>add</md-icon>\n</button>\n";

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

module.exports = "<adf-datatable [rows]=\"attachments\" [actions]=\"true\" [loading]=\"isLoading\" (rowDblClick)=\"openContent($event)\" (showRowActionsMenu)=\"onShowRowActionsMenu($event)\"\n    (executeRowAction)=\"onExecuteRowAction($event)\">\n    <adf-empty-list *ngIf=\"isEmpty()\">\n        <div adf-empty-list-header class=\"adf-empty-list-header\"> {{'PROCESS-ATTACHMENT.EMPTY.HEADER' | translate}} </div>\n        <div adf-empty-list-body *ngIf=\"!isDisabled()\">\n            <div class=\"adf-empty-list-drag_drop\">{{'PROCESS-ATTACHMENT.EMPTY.DRAG-AND-DROP.TITLE' | translate}}</div>\n            <div class=\"adf-empty-list__any-files-here-to-add\"> {{'PROCESS-ATTACHMENT.EMPTY.DRAG-AND-DROP.SUBTITLE' | translate}} </div>\n        </div>\n        <div adf-empty-list-footer *ngIf=\"!isDisabled()\">\n            <img class=\"adf-empty-list__empty_doc_lib\" [src]=\"emptyListImageUrl\">\n        </div>\n    </adf-empty-list>\n    <data-columns>\n        <data-column key=\"icon\" type=\"icon\" srTitle=\"Thumbnail\" [sortable]=\"false\"></data-column>\n        <data-column key=\"name\" type=\"text\" title=\"Name\" class=\"full-width ellipsis-cell\" [sortable]=\"true\"></data-column>\n        <data-column key=\"created\" type=\"date\" format=\"shortDate\" title=\"Created On\"></data-column>\n    </data-columns>\n    <loading-content-template>\n        <ng-template>\n            <!--Add your custom loading template here-->\n            <md-progress-spinner class=\"adf-attachment-list-loading-margin\" [color]=\"'primary'\" [mode]=\"'indeterminate'\">\n            </md-progress-spinner>\n        </ng-template>\n    </loading-content-template>\n</adf-datatable>";

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports = "<adf-comments [readOnly]=\"readOnly\" [taskId]=\"processInstanceId\" (error)=\"onError($event)\" #activiticomments></adf-comments>";

/***/ }),

/***/ 575:
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-container\">\n    <md-list>\n        <md-list-item (click)=\"selectFilter(filter)\" *ngFor=\"let filter of filters\"\n                        class=\"adf-filters__entry\" [class.active]=\"currentFilter === filter\">\n            <md-icon *ngIf=\"hasIcon\" mdListIcon class=\"adf-filters__entry-icon\">assignment</md-icon>\n            <span mdLine [attr.data-automation-id]=\"filter.name + '_filter'\">{{filter.name}}</span>\n        </md-list-item>\n    </md-list>\n</div>\n";

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!processInstanceDetails\">{{ 'DETAILS.MESSAGES.NONE'|translate }}</div>\n<div *ngIf=\"processInstanceDetails\">\n    <h2 class=\"mdl-card__title-text\">{{ getProcessNameOrDescription('medium') }}</h2>\n    <adf-process-instance-header\n        [processInstance]=\"processInstanceDetails\"\n        (showProcessDiagram)=\"onShowProcessDiagram($event)\">\n    </adf-process-instance-header>\n    <div class=\"mdl-cell mdl-cell--4-col\">\n        <button id=\"show-diagram-button\" type=\"button\" md-button md-raised-button [disabled]=\"isDiagramDisabled()\" (click)=\"onShowProcessDiagram(processInstanceId)\">{{ 'DETAILS.BUTTON.SHOW_DIAGRAM' | translate }}</button>\n    </div>\n    <div class=\"mdl-card mdl-shadow--2dp activiti-process-container\">\n        <div class=\"mdl-cell mdl-cell--12-col\">\n            <adf-process-instance-tasks\n                [processInstanceDetails]=\"processInstanceDetails\"\n                (taskClick)=\"onTaskClicked($event)\">\n            </adf-process-instance-tasks>\n        </div>\n    </div>\n    <div class=\"mdl-cell mdl-cell--4-col\" data-automation-id=\"header-status\" *ngIf=\"isRunning()\">\n        <button type=\"button\" (click)=\"cancelProcess()\" class=\"mdl-button\">{{ 'DETAILS.BUTTON.CANCEL' | translate }}</button>\n    </div>\n    <md-card>\n        <md-card-content>\n            <adf-process-instance-comments #activiticomments\n                [readOnly]=\"!isRunning()\"\n                [processInstanceId]=\"processInstanceDetails.id\">\n            </adf-process-instance-comments>\n        </md-card-content>\n    </md-card>\n</div>\n";

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

module.exports = "<md-card *ngIf=\"processInstance\" class=\"adf-card-container\">\n    <md-card-content>\n        <adf-card-view [properties]=\"properties\"></adf-card-view>\n    </md-card-content>\n</md-card>\n";

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"showRefreshButton\" class=\"process-tasks-refresh\" >\n    <button (click)=\"onRefreshClicked()\" class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect\">\n        <i class=\"material-icons\">refresh</i>\n    </button>\n</div>\n\n<!-- ACTIVE FORM -->\n\n<span class=\"activiti-label mdl-badge\"\n      [attr.data-badge]=\"activeTasks?.length\">{{ 'DETAILS.LABELS.TASKS_ACTIVE'|translate }}</span>\n\n<div class=\"menu-container\" *ngIf=\"activeTasks?.length > 0\" data-automation-id=\"active-tasks\">\n    <ul class='mdl-list'>\n        <li class=\"mdl-list__item mdl-list__item--two-line process-tasks__task-item\" *ngFor=\"let task of activeTasks\">\n            <span class=\"mdl-list__item-primary-content\" (click)=\"clickTask($event, task)\">\n                <i class=\"material-icons mdl-list__item-icon\">assignment</i>\n                <span>{{task.name || 'Nameless task'}}</span>\n                <span class=\"mdl-list__item-sub-title\">\n                    {{ 'DETAILS.LABELS.TASK_SUBTITLE' | translate:{user: getUserFullName(task.assignee), created: getFormatDate(task.created, 'mediumDate') } }}\n                </span>\n            </span>\n        </li>\n    </ul>\n</div>\n\n<!-- START FORM -->\n\n<div *ngIf=\"activeTasks?.length === 0\" data-automation-id=\"active-tasks-none\" class=\"no-results\">\n    {{ 'DETAILS.TASKS.NO_ACTIVE' | translate }}\n</div>\n\n<div *ngIf=\"hasStartFormDefined()\">\n    <span class=\"activiti-label\">{{ 'DETAILS.LABELS.START_FORM'|translate }}</span>\n\n    <!--IF START TASK COMPLETED -->\n    <div class=\"menu-container\">\n        <ul class='mdl-list'>\n            <li class=\"mdl-list__item mdl-list__item--two-line process-tasks__task-item\">\n                <span class=\"mdl-list__item-primary-content\" (click)=\"clickStartTask($event)\">\n                    <i class=\"material-icons mdl-list__item-icon\">assignment</i>\n                    <span>{{ 'DETAILS.LABELS.START_FORM'|translate }}</span>\n                    <span class=\"mdl-list__item-sub-title\">\n                        {{ 'DETAILS.LABELS.TASK_SUBTITLE' | translate:{user:getUserFullName(processInstanceDetails.startedBy), created: getFormatDate(processInstanceDetails.started, 'mediumDate') } }}\n                    </span>\n                </span>\n            </li>\n        </ul>\n    </div>\n\n</div>\n\n<!-- COMPLETED FORM -->\n<span class=\"activiti-label mdl-badge\"\n      [attr.data-badge]=\"completedTasks?.length\">{{ 'DETAILS.LABELS.TASKS_COMPLETED'|translate }}</span>\n\n<div class=\"menu-container\" *ngIf=\"completedTasks?.length > 0\" data-automation-id=\"completed-tasks\">\n    <ul class='mdl-list'>\n        <li class=\"mdl-list__item mdl-list__item--two-line process-tasks__task-item\" *ngFor=\"let task of completedTasks\">\n            <span class=\"mdl-list__item-primary-content\" (click)=\"clickTask($event, task)\">\n                <i class=\"material-icons mdl-list__item-icon\">assignment</i>\n                <span>{{task.name || 'Nameless task'}}</span>\n                <span class=\"mdl-list__item-sub-title\">\n                    {{ 'DETAILS.LABELS.TASK_SUBTITLE' | translate:{user:getUserFullName(task.assignee), created: getFormatDate(task.created, 'mediumDate') } }}\n                </span>\n            </span>\n        </li>\n    </ul>\n</div>\n\n<div *ngIf=\"completedTasks?.length === 0\" data-automation-id=\"completed-tasks-none\" class=\"no-results\">\n    {{ 'DETAILS.TASKS.NO_COMPLETED' | translate }}\n</div>\n\n<dialog *ngIf=\"hasStartFormDefined()\" class=\"mdl-dialog task-details-dialog\" #startDialog>\n    <h4 class=\"mdl-dialog__title\">{{ 'DETAILS.LABELS.START_FORM'|translate }}</h4>\n    <div class=\"mdl-dialog__content form__size\">\n        <adf-start-form [processId]=\"processId\" [processDefinitionId]=\"processInstanceDetails?.processDefinitionId\"\n                             [showRefreshButton]=\"false\" [readOnlyForm]=\"true\"\n                             (formContentClicked)='onFormContentClick($event)'>\n        </adf-start-form>\n    </div>\n    <div class=\"mdl-dialog__actions\">\n        <button type=\"button\" (click)=\"closeSartDialog()\" class=\"mdl-button close\">{{ 'DETAILS.TASKS.TASK_CLOSE' | translate }}</button>\n    </div>\n</dialog>\n";

/***/ }),

/***/ 579:
/***/ (function(module, exports) {

module.exports = "<div id=\"setVariableBtn\" (click)=\"showAddDialog()\" class=\"icon material-icons\">add</div>\n<div class=\"mdl-tooltip\" for=\"setVariableBtn\">\n    {{ 'DETAILS.VARIABLES.BUTTON.ADD' |translate }}\n</div>\n\n\n<div>\n    <adf-datatable\n    [data]=\"data\"\n    [actions]=\"true\"\n    [loading]=\"isLoading\"\n    (showRowActionsMenu)=\"onShowRowActionsMenu($event)\"\n    (executeRowAction)=\"onExecuteRowAction($event)\">\n        <loading-content-template>\n            <ng-template>\n                <!--Add your custom loading template here-->\n                <md-spinner\n                    class=\"adf-variable-list-loading-margin\"\n                    [color]=\"'primary'\"\n                    [mode]=\"'indeterminate'\">\n                </md-spinner>\n            </ng-template>\n        </loading-content-template>\n        <no-content-template>\n            <!--Add your custom empty template here-->\n            <ng-template>\n                <div class=\"no-content-message\">\n                    {{ 'DETAILS.VARIABLES.NONE' | translate }}\n                </div>\n            </ng-template>\n        </no-content-template>\n    </adf-datatable>\n</div>\n\n<dialog class=\"mdl-dialog add-dialog\" #addDialog>\n    <h4 class=\"mdl-dialog__title\">{{ 'DETAILS.VARIABLES.ADD_DIALOG.TITLE' |translate }}</h4>\n    <div class=\"mdl-dialog__content\">\n        <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n            <label class=\"mdl-textfield__label\" for=\"addVariableName\">{{ 'DETAILS.VARIABLES.ADD_DIALOG.LABEL.NAME' |translate }}</label>\n            <input class=\"mdl-textfield__input\" type=\"text\" [(ngModel)]=\"variableName\" id=\"addVariableName\" />\n        </div>\n        <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n            <label class=\"mdl-textfield__label\" for=\"addVariableValue\">{{ 'DETAILS.VARIABLES.ADD_DIALOG.LABEL.VALUE' |translate }}</label>\n            <input class=\"mdl-textfield__input\" type=\"text\" [(ngModel)]=\"variableValue\" id=\"addVariableValue\" />\n        </div>\n    </div>\n    <div class=\"mdl-dialog__actions\">\n        <button type=\"button\" (click)=\"add()\" class=\"mdl-button\">{{ 'DETAILS.VARIABLES.DIALOG.BUTTON.SET' |translate }}</button>\n        <button type=\"button\" (click)=\"closeAddDialog()\" class=\"mdl-button close\">{{ 'DETAILS.VARIABLES.DIALOG.BUTTON.CANCEL' |translate }}</button>\n    </div>\n</dialog>\n\n\n<dialog class=\"mdl-dialog edit-dialog\" #editDialog>\n    <h4 class=\"mdl-dialog__title\">{{ 'DETAILS.VARIABLES.EDIT_DIALOG.TITLE' |translate }}</h4>\n    <div class=\"mdl-dialog__content\">\n        <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n            <label class=\"mdl-textfield__label\" for=\"editVariableName\">{{ 'DETAILS.VARIABLES.ADD_DIALOG.LABEL.NAME' |translate }}</label>\n            <input class=\"mdl-textfield__input\" type=\"text\" [(ngModel)]=\"variableName\" id=\"editVariableName\" [readonly]=\"true\" />\n        </div>\n        <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n            <label class=\"mdl-textfield__label\" for=\"editVariableValue\">{{ 'DETAILS.VARIABLES.ADD_DIALOG.LABEL.VALUE' |translate }}</label>\n            <input class=\"mdl-textfield__input\" type=\"text\" [(ngModel)]=\"variableValue\" id=\"editVariableValue\" />\n        </div>\n        <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n            <label class=\"mdl-textfield__label\" for=\"editVariableScope\">{{ 'DETAILS.VARIABLES.ADD_DIALOG.LABEL.SCOPE' |translate }}</label>\n            <input class=\"mdl-textfield__input\" type=\"text\" [(ngModel)]=\"variableName\" id=\"editVariableScope\" [readonly]=\"true\" />\n        </div>\n    </div>\n    <div class=\"mdl-dialog__actions\">\n        <button type=\"button\" (click)=\"edit()\" class=\"mdl-button\">{{ 'DETAILS.VARIABLES.DIALOG.BUTTON.SET' |translate }}</button>\n        <button type=\"button\" (click)=\"closeEditDialog()\" class=\"mdl-button close\">{{ 'DETAILS.VARIABLES.DIALOG.BUTTON.CANCEL' |translate }}</button>\n    </div>\n</dialog>\n\n\n<dialog class=\"mdl-dialog error-dialog\" #errorDialog>\n    <h4 class=\"mdl-dialog__title\">{{ 'DETAILS.VARIABLES.ERROR_DIALOG.TITLE' |translate }}</h4>\n    <div class=\"mdl-dialog__content\">\n        <p>{{ 'DETAILS.VARIABLES.ERROR_DIALOG.DESCRIPTION' |translate }}</p>\n    </div>\n    <div class=\"mdl-dialog__actions\">\n        <button type=\"button\" (click)=\"closeErrorDialog()\" class=\"mdl-button close\">{{ 'DETAILS.VARIABLES.DIALOG.BUTTON.OK' |translate }}</button>\n    </div>\n</dialog>\n";

/***/ }),

/***/ 580:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!requestNode\">{{ 'FILTERS.MESSAGES.NONE' | translate }}</div>\n<div *ngIf=\"requestNode\">\n    <adf-datatable\n        [data]=\"data\"\n        [loading]=\"isLoading\"\n        (rowClick)=\"onRowClick($event)\">\n        <loading-content-template>\n            <ng-template>\n                <!--Add your custom loading template here-->\n                <md-progress-spinner\n                    class=\"adf-process-list-loading-margin\"\n                    [color]=\"'primary'\"\n                    [mode]=\"'indeterminate'\">\n                </md-progress-spinner>\n            </ng-template>\n        </loading-content-template>\n        <no-content-template>\n            <!--Add your custom empty template here-->\n            <ng-template>\n                <div class=\"no-content-message\">\n                    {{ 'PROCESSLIST.NONE' | translate }}\n                </div>\n            </ng-template>\n        </no-content-template>\n    </adf-datatable>\n</div>\n";

/***/ }),

/***/ 581:
/***/ (function(module, exports) {

module.exports = "<md-card>\n\t<md-card-title>{{'START_PROCESS.FORM.TITLE' | translate}}\n\t</md-card-title>\n\t<md-card-content *ngIf=\"isProcessDefinitionEmpty()\">\n\t\t<md-card-subtitle id=\"error-message\" *ngIf=\"errorMessageId\">\n\t\t\t{{errorMessageId|translate}}\n\t\t</md-card-subtitle>\n\t\t<md-input-container>\n\t\t\t<input mdInput placeholder=\"{{'START_PROCESS.FORM.LABEL.NAME'|translate}}\" [(ngModel)]=\"name\" id=\"processName\" required />\n\t\t</md-input-container>\n\t\t<md-select placeholder=\"{{'START_PROCESS.FORM.LABEL.TYPE'|translate}}\" [(ngModel)]=\"currentProcessDef.id\" (ngModelChange)=\"onProcessDefChange($event)\" required>\n\t\t\t<md-option>{{'START_PROCESS.FORM.TYPE_PLACEHOLDER' | translate}}</md-option>\n\t\t\t<md-option *ngFor=\"let processDef of processDefinitions\" [value]=\"processDef.id\">\n\t\t\t\t{{ processDef.name }}\n\t\t\t</md-option>\n\t\t</md-select>\n\t\t<activiti-start-form *ngIf=\"hasStartForm()\" [processDefinitionId]=\"currentProcessDef.id\" (outcomeClick)=\"onOutcomeClick($event)\"></activiti-start-form>\n\t</md-card-content>\n\t<md-card-content *ngIf=\"hasErrorMessage()\">\n\t\t<md-card-subtitle class=\"error-message\" id=\"no-process-message\">\n\t\t\t{{'START_PROCESS.NO_PROCESS_DEFINITIONS' | translate}}\n\t\t</md-card-subtitle>\n\t</md-card-content>\n\t<md-card-actions *ngIf=\"isProcessDefinitionEmpty()\">\n\t\t<button md-button (click)=\"cancelStartProcess()\" id=\"cancle_process\" class=\"\"> {{'START_PROCESS.FORM.ACTION.CANCEL'| translate}} </button>\n\t\t<button md-button *ngIf=\"!hasStartForm()\" [disabled]=\"!validateForm()\" (click)=\"startProcess()\" data-automation-id=\"btn-start\" id=\"button-start\" class=\"btn-start\"> {{'START_PROCESS.FORM.ACTION.START' | translate}} </button>\n\t</md-card-actions>\n";

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "adf-datatable /deep/ th span {\n  color: #232323; }\n\nadf-datatable /deep/ .data-cell {\n  cursor: pointer !important; }\n\n.adf-attachment-list-loading-margin {\n  margin-left: calc((100% - 100px) / 2);\n  margin-right: calc((100% - 100px) / 2); }\n\n.adf-empty-list-header {\n  height: 32px;\n  opacity: 0.26 !important;\n  font-family: Muli, Helvetica, Arial, sans-serif;\n  font-size: 24px;\n  line-height: 1.33;\n  letter-spacing: -1px;\n  color: #000000; }\n\n.adf-empty-list-drag_drop {\n  height: 56px;\n  opacity: 0.54;\n  font-family: Muli, Helvetica, Arial, sans-serif;\n  font-size: 56px;\n  line-height: 1;\n  letter-spacing: -2px;\n  color: #000000;\n  margin-top: 40px !important; }\n\n.adf-empty-list__any-files-here-to-add {\n  height: 24px;\n  opacity: 0.54;\n  font-family: Muli, Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n  margin-top: 17px; }\n\n.adf-empty-list__empty_doc_lib {\n  width: 565px;\n  height: 161px;\n  object-fit: contain;\n  margin-top: 17px; }\n"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "md-card {\n  width: calc(66.6666% - 48px);\n  margin-left: calc(33.3333333333% / 2);\n  margin-right: calc(33.3333333333% / 2);\n  margin-top: 10px; }\n\nmd-input-container {\n  width: 100%; }\n\nmd-select {\n  width: 100%;\n  padding: 16px 0px 0px 0px; }\n\nmd-card-actions {\n  text-align: right; }\n"

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(670);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(671);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(672);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 79:
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
var ng2_activiti_form_1 = __webpack_require__(26);
var CreateProcessAttachmentComponent = (function () {
    function CreateProcessAttachmentComponent(activitiContentService) {
        this.activitiContentService = activitiContentService;
        this.error = new core_1.EventEmitter();
        this.success = new core_1.EventEmitter();
    }
    CreateProcessAttachmentComponent.prototype.ngOnChanges = function (changes) {
        if (changes['processInstanceId'] && changes['processInstanceId'].currentValue) {
            this.processInstanceId = changes['processInstanceId'].currentValue;
        }
    };
    CreateProcessAttachmentComponent.prototype.onFileUpload = function (event) {
        var _this = this;
        var filesList = event.detail.files.map(function (obj) { return obj.file; });
        for (var _i = 0, filesList_1 = filesList; _i < filesList_1.length; _i++) {
            var fileInfoObj = filesList_1[_i];
            var file = fileInfoObj;
            var opts = {
                isRelatedContent: true
            };
            this.activitiContentService.createProcessRelatedContent(this.processInstanceId, file, opts).subscribe(function (res) {
                _this.success.emit(res);
            }, function (err) {
                _this.error.emit(err);
            });
        }
    };
    return CreateProcessAttachmentComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CreateProcessAttachmentComponent.prototype, "processInstanceId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], CreateProcessAttachmentComponent.prototype, "error", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], CreateProcessAttachmentComponent.prototype, "success", void 0);
CreateProcessAttachmentComponent = __decorate([
    core_1.Component({
        selector: 'adf-create-process-attachment',
        styles: [__webpack_require__(430)],
        template: __webpack_require__(572)
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof ng2_activiti_form_1.ActivitiContentService !== "undefined" && ng2_activiti_form_1.ActivitiContentService) === "function" && _c || Object])
], CreateProcessAttachmentComponent);
exports.CreateProcessAttachmentComponent = CreateProcessAttachmentComponent;
var _a, _b, _c;


/***/ }),

/***/ 819:
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
var material_1 = __webpack_require__(3);
var ng2_activiti_form_1 = __webpack_require__(26);
var ng2_activiti_tasklist_1 = __webpack_require__(86);
var ng2_alfresco_core_1 = __webpack_require__(1);
var ng2_alfresco_datatable_1 = __webpack_require__(10);
var create_process_attachment_component_1 = __webpack_require__(79);
var process_attachment_list_component_1 = __webpack_require__(42);
var process_audit_directive_1 = __webpack_require__(126);
var process_comments_component_1 = __webpack_require__(43);
var process_filters_component_1 = __webpack_require__(44);
var process_instance_details_component_1 = __webpack_require__(45);
var process_instance_header_component_1 = __webpack_require__(31);
var process_instance_tasks_component_1 = __webpack_require__(32);
var process_instance_variables_component_1 = __webpack_require__(46);
var processlist_component_1 = __webpack_require__(47);
var start_process_component_1 = __webpack_require__(48);
var process_attachment_list_component_2 = __webpack_require__(42);
exports.ProcessAttachmentListComponent = process_attachment_list_component_2.ProcessAttachmentListComponent;
var process_comments_component_2 = __webpack_require__(43);
exports.ProcessCommentsComponent = process_comments_component_2.ProcessCommentsComponent;
var process_filters_component_2 = __webpack_require__(44);
exports.ProcessFiltersComponent = process_filters_component_2.ProcessFiltersComponent;
var process_instance_details_component_2 = __webpack_require__(45);
exports.ProcessInstanceDetailsComponent = process_instance_details_component_2.ProcessInstanceDetailsComponent;
var process_audit_directive_2 = __webpack_require__(126);
exports.ProcessAuditDirective = process_audit_directive_2.ProcessAuditDirective;
var process_instance_header_component_2 = __webpack_require__(31);
exports.ProcessInstanceHeaderComponent = process_instance_header_component_2.ProcessInstanceHeaderComponent;
var process_instance_tasks_component_2 = __webpack_require__(32);
exports.ProcessInstanceTasksComponent = process_instance_tasks_component_2.ProcessInstanceTasksComponent;
var process_instance_variables_component_2 = __webpack_require__(46);
exports.ProcessInstanceVariablesComponent = process_instance_variables_component_2.ProcessInstanceVariablesComponent;
var processlist_component_2 = __webpack_require__(47);
exports.ProcessInstanceListComponent = processlist_component_2.ProcessInstanceListComponent;
var start_process_component_2 = __webpack_require__(48);
exports.StartProcessInstanceComponent = start_process_component_2.StartProcessInstanceComponent;
var process_upload_service_1 = __webpack_require__(127);
var process_service_1 = __webpack_require__(16);
var process_service_2 = __webpack_require__(16);
exports.ProcessService = process_service_2.ProcessService;
var process_upload_service_2 = __webpack_require__(127);
exports.ProcessUploadService = process_upload_service_2.ProcessUploadService;
__export(__webpack_require__(112));
__export(__webpack_require__(113));
__export(__webpack_require__(85));
__export(__webpack_require__(194));
__export(__webpack_require__(114));
var create_process_attachment_component_2 = __webpack_require__(79);
var process_attachment_list_component_3 = __webpack_require__(42);
var process_comments_component_3 = __webpack_require__(43);
var process_filters_component_3 = __webpack_require__(44);
var process_instance_details_component_3 = __webpack_require__(45);
var process_instance_header_component_3 = __webpack_require__(31);
var process_instance_tasks_component_3 = __webpack_require__(32);
var process_instance_variables_component_3 = __webpack_require__(46);
var processlist_component_3 = __webpack_require__(47);
var start_process_component_3 = __webpack_require__(48);
var process_service_3 = __webpack_require__(16);
var create_process_attachment_component_3 = __webpack_require__(79);
exports.ActivitiCreateProcessAttachmentComponent = create_process_attachment_component_3.CreateProcessAttachmentComponent;
var process_attachment_list_component_4 = __webpack_require__(42);
exports.ActivitiProcessAttachmentListComponent = process_attachment_list_component_4.ProcessAttachmentListComponent;
var process_comments_component_4 = __webpack_require__(43);
exports.ActivitiProcessComments = process_comments_component_4.ProcessCommentsComponent;
var process_filters_component_4 = __webpack_require__(44);
exports.ActivitiProcessFilters = process_filters_component_4.ProcessFiltersComponent;
var process_instance_details_component_4 = __webpack_require__(45);
exports.ActivitiProcessInstanceDetails = process_instance_details_component_4.ProcessInstanceDetailsComponent;
var process_instance_header_component_4 = __webpack_require__(31);
exports.ActivitiProcessInstanceHeader = process_instance_header_component_4.ProcessInstanceHeaderComponent;
var process_instance_tasks_component_4 = __webpack_require__(32);
exports.ActivitiProcessInstanceTasks = process_instance_tasks_component_4.ProcessInstanceTasksComponent;
var process_instance_variables_component_4 = __webpack_require__(46);
exports.ActivitiProcessInstanceVariables = process_instance_variables_component_4.ProcessInstanceVariablesComponent;
var processlist_component_4 = __webpack_require__(47);
exports.ActivitiProcessInstanceListComponent = processlist_component_4.ProcessInstanceListComponent;
var start_process_component_4 = __webpack_require__(48);
exports.ActivitiStartProcessInstance = start_process_component_4.StartProcessInstanceComponent;
var process_service_4 = __webpack_require__(16);
exports.ActivitiProcessService = process_service_4.ProcessService;
exports.ACTIVITI_PROCESSLIST_DIRECTIVES = [
    processlist_component_1.ProcessInstanceListComponent,
    process_filters_component_1.ProcessFiltersComponent,
    process_instance_details_component_1.ProcessInstanceDetailsComponent,
    process_audit_directive_1.ProcessAuditDirective,
    process_instance_header_component_1.ProcessInstanceHeaderComponent,
    process_instance_tasks_component_1.ProcessInstanceTasksComponent,
    process_instance_variables_component_1.ProcessInstanceVariablesComponent,
    process_comments_component_1.ProcessCommentsComponent,
    start_process_component_1.StartProcessInstanceComponent,
    process_attachment_list_component_1.ProcessAttachmentListComponent,
    create_process_attachment_component_1.CreateProcessAttachmentComponent,
    processlist_component_3.ProcessInstanceListComponent,
    process_filters_component_3.ProcessFiltersComponent,
    process_instance_header_component_3.ProcessInstanceHeaderComponent,
    process_instance_tasks_component_3.ProcessInstanceTasksComponent,
    process_instance_variables_component_3.ProcessInstanceVariablesComponent,
    process_comments_component_3.ProcessCommentsComponent,
    process_instance_details_component_3.ProcessInstanceDetailsComponent,
    start_process_component_3.StartProcessInstanceComponent,
    process_attachment_list_component_3.ProcessAttachmentListComponent,
    create_process_attachment_component_2.CreateProcessAttachmentComponent
];
exports.ACTIVITI_PROCESSLIST_PROVIDERS = [
    process_service_1.ProcessService,
    process_upload_service_1.ProcessUploadService,
    ng2_alfresco_core_1.CardViewUpdateService,
    process_service_3.ProcessService
];
var ActivitiProcessListModule = ActivitiProcessListModule_1 = (function () {
    function ActivitiProcessListModule() {
    }
    ActivitiProcessListModule.forRoot = function () {
        return {
            ngModule: ActivitiProcessListModule_1,
            providers: exports.ACTIVITI_PROCESSLIST_PROVIDERS.slice()
        };
    };
    return ActivitiProcessListModule;
}());
ActivitiProcessListModule = ActivitiProcessListModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            ng2_alfresco_core_1.CoreModule,
            ng2_alfresco_datatable_1.DataTableModule,
            ng2_activiti_form_1.ActivitiFormModule,
            ng2_activiti_tasklist_1.ActivitiTaskListModule,
            material_1.MdProgressSpinnerModule,
            material_1.MdButtonModule,
            material_1.MdCardModule,
            material_1.MdInputModule,
            material_1.MdSelectModule
        ],
        declarations: exports.ACTIVITI_PROCESSLIST_DIRECTIVES.slice(),
        providers: exports.ACTIVITI_PROCESSLIST_PROVIDERS.concat([
            {
                provide: ng2_alfresco_core_1.TRANSLATION_PROVIDER,
                multi: true,
                useValue: {
                    name: 'ng2-activiti-processlist',
                    source: 'assets/ng2-activiti-processlist'
                }
            }
        ]),
        exports: exports.ACTIVITI_PROCESSLIST_DIRECTIVES.slice()
    })
], ActivitiProcessListModule);
exports.ActivitiProcessListModule = ActivitiProcessListModule;
var ActivitiProcessListModule_1;


/***/ }),

/***/ 85:
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
Object.defineProperty(exports, "__esModule", { value: true });
var ProcessInstance = (function () {
    function ProcessInstance(data) {
        this.businessKey = data && data.businessKey !== undefined ? data.businessKey : null;
        this.ended = data && data.ended !== undefined ? data.ended : null;
        this.graphicalNotationDefined = data && data.graphicalNotationDefined !== undefined ? data.graphicalNotationDefined : null;
        this.id = data && data.id !== undefined ? data.id : null;
        this.name = data && data.name !== undefined ? data.name : null;
        this.processDefinitionCategory = data && data.processDefinitionCategory !== undefined ? data.processDefinitionCategory : null;
        this.processDefinitionDeploymentId = data && data.processDefinitionDeploymentId !== undefined ? data.processDefinitionDeploymentId : null;
        this.processDefinitionDescription = data && data.processDefinitionDescription !== undefined ? data.processDefinitionDescription : null;
        this.processDefinitionId = data && data.processDefinitionId !== undefined ? data.processDefinitionId : null;
        this.processDefinitionKey = data && data.processDefinitionKey !== undefined ? data.processDefinitionKey : null;
        this.processDefinitionName = data && data.processDefinitionName !== undefined ? data.processDefinitionName : null;
        this.processDefinitionVersion = data && data.processDefinitionVersion !== undefined ? data.processDefinitionVersion : null;
        this.startFormDefined = data && data.startFormDefined !== undefined ? data.startFormDefined : null;
        this.started = data && data.started !== undefined ? data.started : null;
        this.startedBy = data && data.startedBy !== undefined ? data.startedBy : null;
        this.suspended = data && data.suspended !== undefined ? data.suspended : null;
        this.tenantId = data && data.tenantId !== undefined ? data.tenantId : null;
        this.variables = data && data.variables !== undefined ? data.variables : null;
    }
    return ProcessInstance;
}());
exports.ProcessInstance = ProcessInstance;


/***/ }),

/***/ 86:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_86__;

/***/ })

/******/ });
});
//# sourceMappingURL=ng2-activiti-processlist.js.map