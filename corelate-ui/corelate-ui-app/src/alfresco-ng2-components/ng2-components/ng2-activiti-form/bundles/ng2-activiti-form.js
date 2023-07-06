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
		module.exports = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("@angular/material"), require("@angular/forms"), require("ng2-alfresco-datatable"), require("moment"), require("@angular/http"), require("rxjs/Observable"), require("@angular/animations"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "ng2-alfresco-core", "rxjs/Rx", "@angular/material", "@angular/forms", "ng2-alfresco-datatable", "moment", "@angular/http", "rxjs/Observable", "@angular/animations"], factory);
	else if(typeof exports === 'object')
		exports["ng2-activiti-form"] = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("@angular/material"), require("@angular/forms"), require("ng2-alfresco-datatable"), require("moment"), require("@angular/http"), require("rxjs/Observable"), require("@angular/animations"));
	else
		root["ng2-activiti-form"] = factory(root["@angular/core"], root["ng2-alfresco-core"], root["rxjs/Rx"], root["@angular/material"], root["@angular/forms"], root["ng2-alfresco-datatable"], root["moment"], root["@angular/http"], root["rxjs/Observable"], root["@angular/animations"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_804__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 818);
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

/***/ 108:
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
var FormEvent = (function () {
    function FormEvent(form) {
        this.isDefaultPrevented = false;
        this.form = form;
    }
    Object.defineProperty(FormEvent.prototype, "defaultPrevented", {
        get: function () {
            return this.isDefaultPrevented;
        },
        enumerable: true,
        configurable: true
    });
    FormEvent.prototype.preventDefault = function () {
        this.isDefaultPrevented = true;
    };
    return FormEvent;
}());
exports.FormEvent = FormEvent;


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

/***/ 111:
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
var form_event_1 = __webpack_require__(108);
exports.FormEvent = form_event_1.FormEvent;
var form_error_event_1 = __webpack_require__(458);
exports.FormErrorEvent = form_error_event_1.FormErrorEvent;
var form_field_event_1 = __webpack_require__(341);
exports.FormFieldEvent = form_field_event_1.FormFieldEvent;
var validate_form_field_event_1 = __webpack_require__(459);
exports.ValidateFormFieldEvent = validate_form_field_event_1.ValidateFormFieldEvent;
var validate_form_event_1 = __webpack_require__(460);
exports.ValidateFormEvent = validate_form_event_1.ValidateFormEvent;


/***/ }),

/***/ 124:
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
var form_service_1 = __webpack_require__(4);
var FormListComponent = (function () {
    function FormListComponent(formService) {
        this.formService = formService;
        this.forms = [];
    }
    FormListComponent.prototype.ngOnChanges = function (changes) {
        this.getForms();
    };
    FormListComponent.prototype.isEmpty = function () {
        return this.forms && this.forms.length === 0;
    };
    FormListComponent.prototype.getForms = function () {
        var _this = this;
        this.formService.getForms().subscribe(function (forms) {
            (_a = _this.forms).push.apply(_a, forms);
            var _a;
        });
    };
    return FormListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], FormListComponent.prototype, "forms", void 0);
FormListComponent = __decorate([
    core_1.Component({
        selector: 'adf-form-list',
        template: __webpack_require__(544),
        styles: [__webpack_require__(730)],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _a || Object])
], FormListComponent);
exports.FormListComponent = FormListComponent;
var _a;


/***/ }),

/***/ 125:
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
var Rx_1 = __webpack_require__(2);
var ActivitiContentService = ActivitiContentService_1 = (function () {
    function ActivitiContentService(apiService, logService) {
        this.apiService = apiService;
        this.logService = logService;
    }
    ActivitiContentService.prototype.getFileRawContent = function (contentId) {
        var _this = this;
        var alfrescoApi = this.apiService.getInstance();
        return Rx_1.Observable.fromPromise(alfrescoApi.activiti.contentApi.getRawContent(contentId))
            .catch(function (err) { return _this.handleError(err); });
    };
    ActivitiContentService.prototype.getTaskRelatedContent = function (taskId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.contentApi.getRelatedContentForTask(taskId))
            .catch(function (err) { return _this.handleError(err); });
    };
    ActivitiContentService.prototype.getProcessRelatedContent = function (processId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.contentApi.getRelatedContentForProcessInstance(processId))
            .catch(function (err) { return _this.handleError(err); });
    };
    ActivitiContentService.prototype.deleteRelatedContent = function (contentId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.contentApi.deleteContent(contentId))
            .catch(function (err) { return _this.handleError(err); });
    };
    ActivitiContentService.prototype.createProcessRelatedContent = function (processInstanceId, content, opts) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.contentApi.createRelatedContentOnProcessInstance(processInstanceId, content, opts))
            .catch(function (err) { return _this.handleError(err); });
    };
    ActivitiContentService.prototype.toJson = function (res) {
        if (res) {
            return res || {};
        }
        return {};
    };
    ActivitiContentService.prototype.toJsonArray = function (res) {
        if (res) {
            return res.data || [];
        }
        return [];
    };
    ActivitiContentService.prototype.handleError = function (error) {
        var errMsg = ActivitiContentService_1.UNKNOWN_ERROR_MESSAGE;
        if (error) {
            errMsg = (error.message) ? error.message :
                error.status ? error.status + " - " + error.statusText : ActivitiContentService_1.GENERIC_ERROR_MESSAGE;
        }
        this.logService.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    ActivitiContentService.prototype.createTaskRelatedContent = function (taskId, file, opts) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.contentApi.createRelatedContentOnTask(taskId, file, opts))
            .catch(function (err) { return _this.handleError(err); });
    };
    return ActivitiContentService;
}());
ActivitiContentService.UNKNOWN_ERROR_MESSAGE = 'Unknown error';
ActivitiContentService.GENERIC_ERROR_MESSAGE = 'Server error';
ActivitiContentService = ActivitiContentService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _b || Object])
], ActivitiContentService);
exports.ActivitiContentService = ActivitiContentService;
var ActivitiContentService_1, _a, _b;


/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),

/***/ 190:
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
Object.defineProperty(exports, "__esModule", { value: true });
var form_widget_model_1 = __webpack_require__(67);
var ContainerModel = (function (_super) {
    __extends(ContainerModel, _super);
    function ContainerModel(field) {
        var _this = this;
        if (field) {
            _this = _super.call(this, field.form, field.json) || this;
            _this.field = field;
        }
        return _this;
    }
    Object.defineProperty(ContainerModel.prototype, "isVisible", {
        get: function () {
            return this.field.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    return ContainerModel;
}(form_widget_model_1.FormWidgetModel));
exports.ContainerModel = ContainerModel;


/***/ }),

/***/ 193:
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
var Rx_1 = __webpack_require__(2);
var ActivitiAlfrescoContentService = ActivitiAlfrescoContentService_1 = (function () {
    function ActivitiAlfrescoContentService(apiService, logService) {
        this.apiService = apiService;
        this.logService = logService;
    }
    ActivitiAlfrescoContentService.prototype.getAlfrescoNodes = function (accountId, folderId) {
        var _this = this;
        var apiService = this.apiService.getInstance();
        var accountShortId = accountId.replace('alfresco-', '');
        return Rx_1.Observable.fromPromise(apiService.activiti.alfrescoApi.getContentInFolder(accountShortId, folderId))
            .map(this.toJsonArray)
            .catch(function (err) { return _this.handleError(err); });
    };
    ActivitiAlfrescoContentService.prototype.linkAlfrescoNode = function (accountId, node, siteId) {
        var _this = this;
        var apiService = this.apiService.getInstance();
        return Rx_1.Observable.fromPromise(apiService.activiti.contentApi.createTemporaryRelatedContent({
            link: true,
            name: node.title,
            simpleType: node.simpleType,
            source: accountId,
            sourceId: node.id + '@' + siteId
        })).map(this.toJson).catch(function (err) { return _this.handleError(err); });
    };
    ActivitiAlfrescoContentService.prototype.toJson = function (res) {
        if (res) {
            return res || {};
        }
        return {};
    };
    ActivitiAlfrescoContentService.prototype.toJsonArray = function (res) {
        if (res) {
            return res.data || [];
        }
        return [];
    };
    ActivitiAlfrescoContentService.prototype.handleError = function (error) {
        var errMsg = ActivitiAlfrescoContentService_1.UNKNOWN_ERROR_MESSAGE;
        if (error) {
            errMsg = (error.message) ? error.message :
                error.status ? error.status + " - " + error.statusText : ActivitiAlfrescoContentService_1.GENERIC_ERROR_MESSAGE;
        }
        this.logService.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    return ActivitiAlfrescoContentService;
}());
ActivitiAlfrescoContentService.UNKNOWN_ERROR_MESSAGE = 'Unknown error';
ActivitiAlfrescoContentService.GENERIC_ERROR_MESSAGE = 'Server error';
ActivitiAlfrescoContentService = ActivitiAlfrescoContentService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _b || Object])
], ActivitiAlfrescoContentService);
exports.ActivitiAlfrescoContentService = ActivitiAlfrescoContentService;
var ActivitiAlfrescoContentService_1, _a, _b;


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),

/***/ 25:
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
var moment = __webpack_require__(14);
var ng2_alfresco_core_1 = __webpack_require__(1);
var Rx_1 = __webpack_require__(2);
var WidgetVisibilityService = (function () {
    function WidgetVisibilityService(apiService, logService) {
        this.apiService = apiService;
        this.logService = logService;
    }
    WidgetVisibilityService.prototype.refreshVisibility = function (form) {
        var _this = this;
        if (form && form.tabs && form.tabs.length > 0) {
            form.tabs.map(function (tabModel) { return _this.refreshEntityVisibility(tabModel); });
        }
        if (form) {
            form.getFormFields().map(function (field) { return _this.refreshEntityVisibility(field); });
        }
    };
    WidgetVisibilityService.prototype.refreshEntityVisibility = function (element) {
        var visible = this.evaluateVisibility(element.form, element.visibilityCondition);
        element.isVisible = visible;
    };
    WidgetVisibilityService.prototype.evaluateVisibility = function (form, visibilityObj) {
        var isLeftFieldPresent = visibilityObj && (visibilityObj.leftFormFieldId || visibilityObj.leftRestResponseId);
        if (!isLeftFieldPresent || isLeftFieldPresent === 'null') {
            return true;
        }
        else {
            return this.isFieldVisible(form, visibilityObj);
        }
    };
    WidgetVisibilityService.prototype.isFieldVisible = function (form, visibilityObj) {
        var leftValue = this.getLeftValue(form, visibilityObj);
        var rightValue = this.getRightValue(form, visibilityObj);
        var actualResult = this.evaluateCondition(leftValue, rightValue, visibilityObj.operator);
        if (visibilityObj.nextCondition) {
            return this.evaluateLogicalOperation(visibilityObj.nextConditionOperator, actualResult, this.isFieldVisible(form, visibilityObj.nextCondition));
        }
        else {
            return actualResult;
        }
    };
    WidgetVisibilityService.prototype.getLeftValue = function (form, visibilityObj) {
        var leftValue = '';
        if (visibilityObj.leftRestResponseId && visibilityObj.leftRestResponseId !== 'null') {
            leftValue = this.getVariableValue(form, visibilityObj.leftRestResponseId, this.processVarList);
        }
        else {
            leftValue = this.getFormValue(form, visibilityObj.leftFormFieldId);
            leftValue = leftValue ? leftValue : this.getVariableValue(form, visibilityObj.leftFormFieldId, this.processVarList);
        }
        return leftValue;
    };
    WidgetVisibilityService.prototype.getRightValue = function (form, visibilityObj) {
        var valueFound = '';
        if (visibilityObj.rightRestResponseId) {
            valueFound = this.getVariableValue(form, visibilityObj.rightRestResponseId, this.processVarList);
        }
        else if (visibilityObj.rightFormFieldId) {
            valueFound = this.getFormValue(form, visibilityObj.rightFormFieldId);
        }
        else {
            if (moment(visibilityObj.rightValue, 'YYYY-MM-DD', true).isValid()) {
                valueFound = visibilityObj.rightValue + 'T00:00:00.000Z';
            }
            else {
                valueFound = visibilityObj.rightValue;
            }
        }
        return valueFound;
    };
    WidgetVisibilityService.prototype.getFormValue = function (form, field) {
        var value = this.getFieldValue(form.values, field);
        return value ? value : this.searchForm(form, field);
    };
    WidgetVisibilityService.prototype.getFieldValue = function (valueList, fieldName) {
        var dropDownFilterByName, valueFound = '';
        if (fieldName && fieldName.indexOf('_LABEL') > 0) {
            dropDownFilterByName = fieldName.substring(0, fieldName.length - 6);
            if (valueList[dropDownFilterByName]) {
                valueFound = valueList[dropDownFilterByName].name;
            }
        }
        else if (valueList[fieldName] && valueList[fieldName].id) {
            valueFound = valueList[fieldName].id;
        }
        else {
            valueFound = valueList[fieldName];
        }
        return valueFound;
    };
    WidgetVisibilityService.prototype.searchForm = function (form, name) {
        var _this = this;
        var fieldValue = '';
        form.fields.forEach(function (containerModel) {
            containerModel.field.columns.forEach(function (containerColumnModel) {
                var fieldFound = containerColumnModel.fields.find(function (field) { return _this.isSearchedField(field, name); });
                if (fieldFound) {
                    fieldValue = _this.getObjectValue(fieldFound);
                    if (!fieldValue) {
                        if (fieldFound.value && fieldFound.value.id) {
                            fieldValue = fieldFound.value.id;
                        }
                        else {
                            fieldValue = fieldFound.value;
                        }
                    }
                }
            });
        });
        return fieldValue;
    };
    WidgetVisibilityService.prototype.getObjectValue = function (field) {
        var value = '';
        if (field.value && field.value.name) {
            value = field.value.name;
        }
        else if (field.options) {
            var option = field.options.find(function (opt) { return opt.id === field.value; });
            if (option) {
                value = option.name;
            }
            else {
                value = field.value;
            }
        }
        return value;
    };
    WidgetVisibilityService.prototype.isSearchedField = function (field, fieldToFind) {
        var forrmattedFieldName = this.removeLabel(field, fieldToFind);
        return field.name ? field.name.toUpperCase() === forrmattedFieldName.toUpperCase() : false;
    };
    WidgetVisibilityService.prototype.removeLabel = function (field, fieldToFind) {
        var formattedFieldName = fieldToFind || '';
        if (field.fieldType === 'RestFieldRepresentation' && fieldToFind.indexOf('_LABEL') > 0) {
            formattedFieldName = fieldToFind.substring(0, fieldToFind.length - 6);
        }
        return formattedFieldName;
    };
    WidgetVisibilityService.prototype.getVariableValue = function (form, name, processVarList) {
        return this.getFormVariableValue(form, name) ||
            this.getProcessVariableValue(name, processVarList);
    };
    WidgetVisibilityService.prototype.getFormVariableValue = function (form, name) {
        if (form.json.variables) {
            var formVariable = form.json.variables.find(function (formVar) { return formVar.name === name; });
            return formVariable ? formVariable.value : formVariable;
        }
    };
    WidgetVisibilityService.prototype.getProcessVariableValue = function (name, processVarList) {
        if (this.processVarList) {
            var processVariable = this.processVarList.find(function (variable) { return variable.id === name; });
            return processVariable ? processVariable.value : processVariable;
        }
    };
    WidgetVisibilityService.prototype.evaluateLogicalOperation = function (logicOp, previousValue, newValue) {
        switch (logicOp) {
            case 'and':
                return previousValue && newValue;
            case 'or':
                return previousValue || newValue;
            case 'and-not':
                return previousValue && !newValue;
            case 'or-not':
                return previousValue || !newValue;
            default:
                this.logService.error('NO valid operation! wrong op request : ' + logicOp);
                break;
        }
    };
    WidgetVisibilityService.prototype.evaluateCondition = function (leftValue, rightValue, operator) {
        switch (operator) {
            case '==':
                return leftValue + '' === rightValue + '';
            case '<':
                return leftValue < rightValue;
            case '!=':
                return leftValue + '' !== rightValue + '';
            case '>':
                return leftValue > rightValue;
            case '>=':
                return leftValue >= rightValue;
            case '<=':
                return leftValue <= rightValue;
            case 'empty':
                return leftValue ? leftValue === '' : true;
            case '!empty':
                return leftValue ? leftValue !== '' : false;
            default:
                this.logService.error('NO valid operation!');
                break;
        }
        return;
    };
    WidgetVisibilityService.prototype.cleanProcessVariable = function () {
        this.processVarList = [];
    };
    WidgetVisibilityService.prototype.getTaskProcessVariable = function (taskId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.taskFormsApi.getTaskFormVariables(taskId))
            .map(function (res) {
            var jsonRes = _this.toJson(res);
            _this.processVarList = jsonRes;
            return jsonRes;
        })
            .catch(function (err) { return _this.handleError(err); });
    };
    WidgetVisibilityService.prototype.toJson = function (res) {
        return res || {};
    };
    WidgetVisibilityService.prototype.handleError = function (err) {
        this.logService.error('Error while performing a call');
        return Rx_1.Observable.throw('Error while performing a call - Server error');
    };
    return WidgetVisibilityService;
}());
WidgetVisibilityService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _b || Object])
], WidgetVisibilityService);
exports.WidgetVisibilityService = WidgetVisibilityService;
var _a, _b;


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 30:
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
var index_1 = __webpack_require__(111);
var ecm_model_service_1 = __webpack_require__(72);
var form_service_1 = __webpack_require__(4);
var node_service_1 = __webpack_require__(90);
var index_2 = __webpack_require__(68);
var widget_visibility_service_1 = __webpack_require__(25);
var FormComponent = FormComponent_1 = (function () {
    function FormComponent(formService, visibilityService, ecmModelService, nodeService) {
        this.formService = formService;
        this.visibilityService = visibilityService;
        this.ecmModelService = ecmModelService;
        this.nodeService = nodeService;
        this.saveMetadata = false;
        this.showTitle = true;
        this.showCompleteButton = true;
        this.disableCompleteButton = false;
        this.showSaveButton = true;
        this.showDebugButton = false;
        this.readOnly = false;
        this.showRefreshButton = true;
        this.showValidationIcon = true;
        this.fieldValidators = [];
        this.formSaved = new core_1.EventEmitter();
        this.formCompleted = new core_1.EventEmitter();
        this.formContentClicked = new core_1.EventEmitter();
        this.formLoaded = new core_1.EventEmitter();
        this.formDataRefreshed = new core_1.EventEmitter();
        this.executeOutcome = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.debugMode = false;
    }
    FormComponent.prototype.hasForm = function () {
        return this.form ? true : false;
    };
    FormComponent.prototype.isTitleEnabled = function () {
        if (this.showTitle) {
            if (this.form && this.form.taskName) {
                return true;
            }
        }
        return false;
    };
    FormComponent.prototype.isOutcomeButtonEnabled = function (outcome) {
        if (this.form.readOnly) {
            return false;
        }
        if (outcome) {
            if (outcome.name === index_2.FormOutcomeModel.SAVE_ACTION) {
                return true;
            }
            if (outcome.name === index_2.FormOutcomeModel.COMPLETE_ACTION) {
                return this.disableCompleteButton ? false : this.form.isValid;
            }
            return this.form.isValid;
        }
        return false;
    };
    FormComponent.prototype.isOutcomeButtonVisible = function (outcome, isFormReadOnly) {
        if (outcome && outcome.name) {
            if (outcome.name === index_2.FormOutcomeModel.COMPLETE_ACTION) {
                return this.showCompleteButton;
            }
            if (isFormReadOnly) {
                return outcome.isSelected;
            }
            if (outcome.name === index_2.FormOutcomeModel.SAVE_ACTION) {
                return this.showSaveButton;
            }
            if (outcome.name === index_2.FormOutcomeModel.START_PROCESS_ACTION) {
                return false;
            }
            return true;
        }
        return false;
    };
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formService.formContentClicked.subscribe(function (content) {
            _this.formContentClicked.emit(content);
        });
    };
    FormComponent.prototype.ngOnChanges = function (changes) {
        var taskId = changes['taskId'];
        if (taskId && taskId.currentValue) {
            this.getFormByTaskId(taskId.currentValue);
            return;
        }
        var formId = changes['formId'];
        if (formId && formId.currentValue) {
            this.getFormDefinitionByFormId(formId.currentValue);
            return;
        }
        var formName = changes['formName'];
        if (formName && formName.currentValue) {
            this.getFormDefinitionByFormName(formName.currentValue);
            return;
        }
        var nodeId = changes['nodeId'];
        if (nodeId && nodeId.currentValue) {
            this.loadFormForEcmNode(nodeId.currentValue);
            return;
        }
        var data = changes['data'];
        if (data && data.currentValue) {
            this.refreshFormData();
            return;
        }
    };
    FormComponent.prototype.onOutcomeClicked = function (outcome) {
        if (!this.readOnly && outcome && this.form) {
            if (!this.onExecuteOutcome(outcome)) {
                return false;
            }
            if (outcome.isSystem) {
                if (outcome.id === FormComponent_1.SAVE_OUTCOME_ID) {
                    this.saveTaskForm();
                    return true;
                }
                if (outcome.id === FormComponent_1.COMPLETE_OUTCOME_ID) {
                    this.completeTaskForm();
                    return true;
                }
                if (outcome.id === FormComponent_1.START_PROCESS_OUTCOME_ID) {
                    this.completeTaskForm();
                    return true;
                }
                if (outcome.id === FormComponent_1.CUSTOM_OUTCOME_ID) {
                    this.onTaskSaved(this.form);
                    this.storeFormAsMetadata();
                    return true;
                }
            }
            else {
                if (outcome.name) {
                    this.onTaskSaved(this.form);
                    this.completeTaskForm(outcome.name);
                    return true;
                }
            }
        }
        return false;
    };
    FormComponent.prototype.onRefreshClicked = function () {
        this.loadForm();
    };
    FormComponent.prototype.loadForm = function () {
        if (this.taskId) {
            this.getFormByTaskId(this.taskId);
            return;
        }
        if (this.formId) {
            this.getFormDefinitionByFormId(this.formId);
            return;
        }
        if (this.formName) {
            this.getFormDefinitionByFormName(this.formName);
            return;
        }
    };
    FormComponent.prototype.loadFormProcessVariables = function (taskId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.formService.getTask(taskId).subscribe(function (task) {
                if (_this.isAProcessTask(task)) {
                    _this.visibilityService.getTaskProcessVariable(taskId).subscribe(function (_) {
                        resolve(true);
                    });
                }
                else {
                    resolve(true);
                }
            }, function (error) {
                _this.handleError(error);
                resolve(false);
            });
        });
    };
    FormComponent.prototype.isAProcessTask = function (taskRepresentation) {
        return taskRepresentation.processDefinitionId && taskRepresentation.processDefinitionDeploymentId !== 'null';
    };
    FormComponent.prototype.getFormByTaskId = function (taskId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadFormProcessVariables(_this.taskId).then(function (_) {
                _this.formService
                    .getTaskForm(taskId)
                    .subscribe(function (form) {
                    _this.form = _this.parseForm(form);
                    _this.onFormLoaded(_this.form);
                    resolve(_this.form);
                }, function (error) {
                    _this.handleError(error);
                    resolve(null);
                });
            });
        });
    };
    FormComponent.prototype.getFormDefinitionByFormId = function (formId) {
        var _this = this;
        this.formService
            .getFormDefinitionById(formId)
            .subscribe(function (form) {
            _this.formName = form.name;
            _this.form = _this.parseForm(form);
            _this.onFormLoaded(_this.form);
        }, function (error) {
            _this.handleError(error);
        });
    };
    FormComponent.prototype.getFormDefinitionByFormName = function (formName) {
        var _this = this;
        this.formService
            .getFormDefinitionByName(formName)
            .subscribe(function (id) {
            _this.formService.getFormDefinitionById(id).subscribe(function (form) {
                _this.form = _this.parseForm(form);
                _this.onFormLoaded(_this.form);
            }, function (error) {
                _this.handleError(error);
            });
        }, function (error) {
            _this.handleError(error);
        });
    };
    FormComponent.prototype.saveTaskForm = function () {
        var _this = this;
        if (this.form && this.form.taskId) {
            this.formService
                .saveTaskForm(this.form.taskId, this.form.values)
                .subscribe(function () {
                _this.onTaskSaved(_this.form);
                _this.storeFormAsMetadata();
            }, function (error) { return _this.onTaskSavedError(_this.form, error); });
        }
    };
    FormComponent.prototype.completeTaskForm = function (outcome) {
        var _this = this;
        if (this.form && this.form.taskId) {
            this.formService
                .completeTaskForm(this.form.taskId, this.form.values, outcome)
                .subscribe(function () {
                _this.onTaskCompleted(_this.form);
                _this.storeFormAsMetadata();
            }, function (error) { return _this.onTaskCompletedError(_this.form, error); });
        }
    };
    FormComponent.prototype.handleError = function (err) {
        this.onError.emit(err);
    };
    FormComponent.prototype.parseForm = function (json) {
        if (json) {
            var form = new index_2.FormModel(json, this.data, this.readOnly, this.formService);
            if (!json.fields) {
                form.outcomes = this.getFormDefinitionOutcomes(form);
            }
            if (this.fieldValidators && this.fieldValidators.length > 0) {
                console.log('Applying custom field validators');
                form.fieldValidators = this.fieldValidators;
            }
            return form;
        }
        return null;
    };
    FormComponent.prototype.getFormDefinitionOutcomes = function (form) {
        return [
            new index_2.FormOutcomeModel(form, { id: '$custom', name: index_2.FormOutcomeModel.SAVE_ACTION, isSystem: true })
        ];
    };
    FormComponent.prototype.checkVisibility = function (field) {
        if (field && field.form) {
            this.visibilityService.refreshVisibility(field.form);
        }
    };
    FormComponent.prototype.refreshFormData = function () {
        this.form = this.parseForm(this.form.json);
        this.onFormLoaded(this.form);
        this.onFormDataRefreshed(this.form);
    };
    FormComponent.prototype.loadFormForEcmNode = function (nodeId) {
        var _this = this;
        this.nodeService.getNodeMetadata(nodeId).subscribe(function (data) {
            _this.data = data.metadata;
            _this.loadFormFromActiviti(data.nodeType);
        }, this.handleError);
    };
    FormComponent.prototype.loadFormFromActiviti = function (nodeType) {
        var _this = this;
        this.formService.searchFrom(nodeType).subscribe(function (form) {
            if (!form) {
                _this.formService.createFormFromANode(nodeType).subscribe(function (formMetadata) {
                    _this.loadFormFromFormId(formMetadata.id);
                });
            }
            else {
                _this.loadFormFromFormId(form.id);
            }
        }, function (error) {
            _this.handleError(error);
        });
    };
    FormComponent.prototype.loadFormFromFormId = function (formId) {
        this.formId = formId;
        this.loadForm();
    };
    FormComponent.prototype.storeFormAsMetadata = function () {
        var _this = this;
        if (this.saveMetadata) {
            this.ecmModelService.createEcmTypeForActivitiForm(this.formName, this.form).subscribe(function (type) {
                _this.nodeService.createNodeMetadata(type.nodeType || type.entry.prefixedName, ecm_model_service_1.EcmModelService.MODEL_NAMESPACE, _this.form.values, _this.path, _this.nameNode);
            }, function (error) {
                _this.handleError(error);
            });
        }
    };
    FormComponent.prototype.onFormLoaded = function (form) {
        this.formLoaded.emit(form);
        this.formService.formLoaded.next(new index_1.FormEvent(form));
    };
    FormComponent.prototype.onFormDataRefreshed = function (form) {
        this.formDataRefreshed.emit(form);
        this.formService.formDataRefreshed.next(new index_1.FormEvent(form));
    };
    FormComponent.prototype.onTaskSaved = function (form) {
        this.formSaved.emit(form);
        this.formService.taskSaved.next(new index_1.FormEvent(form));
    };
    FormComponent.prototype.onTaskSavedError = function (form, error) {
        this.handleError(error);
        this.formService.taskSavedError.next(new index_1.FormErrorEvent(form, error));
    };
    FormComponent.prototype.onTaskCompleted = function (form) {
        this.formCompleted.emit(form);
        this.formService.taskCompleted.next(new index_1.FormEvent(form));
    };
    FormComponent.prototype.onTaskCompletedError = function (form, error) {
        this.handleError(error);
        this.formService.taskCompletedError.next(new index_1.FormErrorEvent(form, error));
    };
    FormComponent.prototype.onExecuteOutcome = function (outcome) {
        var args = new index_2.FormOutcomeEvent(outcome);
        this.formService.executeOutcome.next(args);
        if (args.defaultPrevented) {
            return false;
        }
        this.executeOutcome.emit(args);
        if (args.defaultPrevented) {
            return false;
        }
        return true;
    };
    return FormComponent;
}());
FormComponent.SAVE_OUTCOME_ID = '$save';
FormComponent.COMPLETE_OUTCOME_ID = '$complete';
FormComponent.START_PROCESS_OUTCOME_ID = '$startProcess';
FormComponent.CUSTOM_OUTCOME_ID = '$custom';
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof index_2.FormModel !== "undefined" && index_2.FormModel) === "function" && _a || Object)
], FormComponent.prototype, "form", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FormComponent.prototype, "taskId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FormComponent.prototype, "nodeId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FormComponent.prototype, "formId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FormComponent.prototype, "formName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "saveMetadata", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof index_2.FormValues !== "undefined" && index_2.FormValues) === "function" && _b || Object)
], FormComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FormComponent.prototype, "path", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FormComponent.prototype, "nameNode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showCompleteButton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "disableCompleteButton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showSaveButton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showDebugButton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "readOnly", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showRefreshButton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showValidationIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], FormComponent.prototype, "fieldValidators", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], FormComponent.prototype, "formSaved", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], FormComponent.prototype, "formCompleted", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], FormComponent.prototype, "formContentClicked", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_f = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _f || Object)
], FormComponent.prototype, "formLoaded", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_g = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _g || Object)
], FormComponent.prototype, "formDataRefreshed", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_h = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _h || Object)
], FormComponent.prototype, "executeOutcome", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_j = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _j || Object)
], FormComponent.prototype, "onError", void 0);
FormComponent = FormComponent_1 = __decorate([
    core_1.Component({
        selector: 'adf-form, activiti-form',
        template: __webpack_require__(545),
        styles: [__webpack_require__(347)],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_k = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _k || Object, typeof (_l = typeof widget_visibility_service_1.WidgetVisibilityService !== "undefined" && widget_visibility_service_1.WidgetVisibilityService) === "function" && _l || Object, typeof (_m = typeof ecm_model_service_1.EcmModelService !== "undefined" && ecm_model_service_1.EcmModelService) === "function" && _m || Object, typeof (_o = typeof node_service_1.NodeService !== "undefined" && node_service_1.NodeService) === "function" && _o || Object])
], FormComponent);
exports.FormComponent = FormComponent;
var FormComponent_1, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;


/***/ }),

/***/ 310:
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
var form_service_1 = __webpack_require__(4);
var widget_component_1 = __webpack_require__(8);
var AmountWidgetComponent = AmountWidgetComponent_1 = (function (_super) {
    __extends(AmountWidgetComponent, _super);
    function AmountWidgetComponent(formService) {
        var _this = _super.call(this, formService) || this;
        _this.formService = formService;
        _this.currency = AmountWidgetComponent_1.DEFAULT_CURRENCY;
        return _this;
    }
    AmountWidgetComponent.prototype.ngOnInit = function () {
        if (this.field && this.field.currency) {
            this.currency = this.field.currency;
        }
    };
    return AmountWidgetComponent;
}(widget_component_1.WidgetComponent));
AmountWidgetComponent.DEFAULT_CURRENCY = '$';
AmountWidgetComponent = AmountWidgetComponent_1 = __decorate([
    core_1.Component({
        selector: 'amount-widget',
        template: __webpack_require__(547),
        styles: [__webpack_require__(731)],
        host: widget_component_1.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _a || Object])
], AmountWidgetComponent);
exports.AmountWidgetComponent = AmountWidgetComponent;
var AmountWidgetComponent_1, _a;


/***/ }),

/***/ 311:
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
var activiti_alfresco_service_1 = __webpack_require__(193);
var form_service_1 = __webpack_require__(4);
var widget_component_1 = __webpack_require__(8);
var AttachWidgetComponent = (function (_super) {
    __extends(AttachWidgetComponent, _super);
    function AttachWidgetComponent(formService, contentService) {
        var _this = _super.call(this, formService) || this;
        _this.formService = formService;
        _this.contentService = contentService;
        _this.fieldChanged = new core_1.EventEmitter();
        _this.error = new core_1.EventEmitter();
        return _this;
    }
    AttachWidgetComponent.prototype.ngOnInit = function () {
        if (this.field) {
            var params = this.field.params;
            if (params &&
                params.fileSource &&
                params.fileSource.selectedFolder) {
                this.selectedFolderSiteId = params.fileSource.selectedFolder.siteId;
                this.selectedFolderSiteName = params.fileSource.selectedFolder.site;
                this.setupFileBrowser();
                this.getExternalContentNodes();
            }
        }
    };
    AttachWidgetComponent.prototype.setupFileBrowser = function () {
        if (this.field) {
            var params = this.field.params;
            this.selectedFolderPathId = params.fileSource.selectedFolder.pathId;
            this.selectedFolderAccountId = params.fileSource.selectedFolder.accountId;
        }
    };
    AttachWidgetComponent.prototype.getLinkedFileName = function () {
        var result = this.fileName;
        if (this.selectedFile &&
            this.selectedFile.title) {
            result = this.selectedFile.title;
        }
        if (this.field &&
            this.field.value &&
            this.field.value.length > 0 &&
            this.field.value[0].name) {
            result = this.field.value[0].name;
        }
        return result;
    };
    AttachWidgetComponent.prototype.getExternalContentNodes = function () {
        var _this = this;
        this.contentService.getAlfrescoNodes(this.selectedFolderAccountId, this.selectedFolderPathId)
            .subscribe(function (nodes) { return _this.selectedFolderNodes = nodes; }, function (err) {
            _this.error.emit(err);
        });
    };
    AttachWidgetComponent.prototype.selectFile = function (node, $event) {
        var _this = this;
        this.contentService.linkAlfrescoNode(this.selectedFolderAccountId, node, this.selectedFolderSiteId).subscribe(function (link) {
            _this.selectedFile = node;
            _this.field.value = [link];
            _this.field.json.value = [link];
            _this.closeDialog();
            _this.fieldChanged.emit(_this.field);
        });
    };
    AttachWidgetComponent.prototype.selectFolder = function (node, $event) {
        this.selectedFolderPathId = node.id;
        this.getExternalContentNodes();
    };
    AttachWidgetComponent.prototype.showDialog = function () {
        this.setupFileBrowser();
        this.getExternalContentNodes();
        if (this.dialog) {
            if (!this.dialog.nativeElement.showModal) {
                dialogPolyfill.registerDialog(this.dialog.nativeElement);
            }
            this.dialog.nativeElement.showModal();
            return true;
        }
        return false;
    };
    AttachWidgetComponent.prototype.closeDialog = function () {
        if (this.dialog) {
            this.dialog.nativeElement.close();
        }
    };
    AttachWidgetComponent.prototype.cancel = function () {
        this.closeDialog();
    };
    AttachWidgetComponent.prototype.reset = function () {
        this.field.value = null;
        this.field.json.value = null;
    };
    AttachWidgetComponent.prototype.hasFile = function () {
        return this.field && this.field.value;
    };
    return AttachWidgetComponent;
}(widget_component_1.WidgetComponent));
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], AttachWidgetComponent.prototype, "fieldChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], AttachWidgetComponent.prototype, "error", void 0);
__decorate([
    core_1.ViewChild('dialog'),
    __metadata("design:type", Object)
], AttachWidgetComponent.prototype, "dialog", void 0);
AttachWidgetComponent = __decorate([
    core_1.Component({
        selector: 'attach-widget',
        template: __webpack_require__(548),
        styles: [__webpack_require__(428)],
        host: widget_component_1.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _c || Object, typeof (_d = typeof activiti_alfresco_service_1.ActivitiAlfrescoContentService !== "undefined" && activiti_alfresco_service_1.ActivitiAlfrescoContentService) === "function" && _d || Object])
], AttachWidgetComponent);
exports.AttachWidgetComponent = AttachWidgetComponent;
var _a, _b, _c, _d;


/***/ }),

/***/ 312:
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
var widget_visibility_service_1 = __webpack_require__(25);
var form_service_1 = __webpack_require__(4);
var widget_component_1 = __webpack_require__(8);
var CheckboxWidgetComponent = (function (_super) {
    __extends(CheckboxWidgetComponent, _super);
    function CheckboxWidgetComponent(visibilityService, formService) {
        var _this = _super.call(this, formService) || this;
        _this.visibilityService = visibilityService;
        _this.formService = formService;
        return _this;
    }
    CheckboxWidgetComponent.prototype.onChange = function () {
        this.visibilityService.refreshVisibility(this.field.form);
    };
    return CheckboxWidgetComponent;
}(widget_component_1.WidgetComponent));
CheckboxWidgetComponent = __decorate([
    core_1.Component({
        selector: 'checkbox-widget',
        template: __webpack_require__(549),
        host: widget_component_1.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof widget_visibility_service_1.WidgetVisibilityService !== "undefined" && widget_visibility_service_1.WidgetVisibilityService) === "function" && _a || Object, typeof (_b = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _b || Object])
], CheckboxWidgetComponent);
exports.CheckboxWidgetComponent = CheckboxWidgetComponent;
var _a, _b;


/***/ }),

/***/ 313:
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
var form_service_1 = __webpack_require__(4);
var widget_component_1 = __webpack_require__(8);
var container_widget_model_1 = __webpack_require__(451);
var ContainerWidgetComponent = (function (_super) {
    __extends(ContainerWidgetComponent, _super);
    function ContainerWidgetComponent(formService) {
        var _this = _super.call(this, formService) || this;
        _this.formService = formService;
        return _this;
    }
    ContainerWidgetComponent.prototype.onExpanderClicked = function () {
        if (this.content && this.content.isCollapsible()) {
            this.content.isExpanded = !this.content.isExpanded;
        }
    };
    ContainerWidgetComponent.prototype.ngOnInit = function () {
        if (this.field) {
            this.content = new container_widget_model_1.ContainerWidgetComponentModel(this.field);
        }
    };
    Object.defineProperty(ContainerWidgetComponent.prototype, "fields", {
        get: function () {
            var fields = [];
            var rowContainsElement = true, rowIndex = 0;
            while (rowContainsElement) {
                rowContainsElement = false;
                for (var i = 0; i < this.content.columns.length; i++) {
                    var field = this.content.columns[i].fields[rowIndex];
                    if (field) {
                        rowContainsElement = true;
                    }
                    fields.push(field);
                }
                rowIndex++;
            }
            return fields;
        },
        enumerable: true,
        configurable: true
    });
    ContainerWidgetComponent.prototype.getColumnWith = function (field) {
        var colspan = field ? field.colspan : 1;
        return (100 / this.content.json.numberOfColumns) * colspan + '%';
    };
    return ContainerWidgetComponent;
}(widget_component_1.WidgetComponent));
ContainerWidgetComponent = __decorate([
    core_1.Component({
        selector: 'container-widget',
        template: __webpack_require__(550),
        styles: [__webpack_require__(732)],
        host: widget_component_1.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _a || Object])
], ContainerWidgetComponent);
exports.ContainerWidgetComponent = ContainerWidgetComponent;
var _a;


/***/ }),

/***/ 314:
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
var ContainerColumnModel = (function () {
    function ContainerColumnModel() {
        this.size = 12;
        this.fields = [];
        this.colspan = 1;
        this.rowspan = 1;
    }
    ContainerColumnModel.prototype.hasFields = function () {
        return this.fields && this.fields.length > 0;
    };
    return ContainerColumnModel;
}());
exports.ContainerColumnModel = ContainerColumnModel;


/***/ }),

/***/ 315:
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
var ContentLinkModel = (function () {
    function ContentLinkModel(obj) {
        this.contentAvailable = obj && obj.contentAvailable;
        this.created = obj && obj.created;
        this.createdBy = obj && obj.createdBy || {};
        this.id = obj && obj.id;
        this.link = obj && obj.link;
        this.mimeType = obj && obj.mimeType;
        this.name = obj && obj.name;
        this.previewStatus = obj && obj.previewStatus;
        this.relatedContent = obj && obj.relatedContent;
        this.simpleType = obj && obj.simpleType;
        this.thumbnailStatus = obj && obj.thumbnailStatus;
    }
    ContentLinkModel.prototype.hasPreviewStatus = function () {
        return this.previewStatus === 'supported' ? true : false;
    };
    ContentLinkModel.prototype.isTypeImage = function () {
        return this.simpleType === 'image' ? true : false;
    };
    ContentLinkModel.prototype.isTypePdf = function () {
        return this.simpleType === 'pdf' ? true : false;
    };
    ContentLinkModel.prototype.isTypeDoc = function () {
        return this.simpleType === 'word' || this.simpleType === 'content' ? true : false;
    };
    ContentLinkModel.prototype.isThumbnailReady = function () {
        return this.thumbnailStatus === 'created';
    };
    ContentLinkModel.prototype.isThumbnailSupported = function () {
        return this.isTypeImage() || ((this.isTypePdf() || this.isTypeDoc()) && this.isThumbnailReady());
    };
    return ContentLinkModel;
}());
exports.ContentLinkModel = ContentLinkModel;


/***/ }),

/***/ 316:
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
Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(14);
var container_column_model_1 = __webpack_require__(314);
var form_field_types_1 = __webpack_require__(82);
var form_field_validator_1 = __webpack_require__(84);
var form_widget_model_1 = __webpack_require__(67);
var FormFieldModel = (function (_super) {
    __extends(FormFieldModel, _super);
    function FormFieldModel(form, json) {
        var _this = _super.call(this, form, json) || this;
        _this._readOnly = false;
        _this._isValid = true;
        _this._required = false;
        _this.defaultDateFormat = 'D-M-YYYY';
        _this.rowspan = 1;
        _this.colspan = 1;
        _this.placeholder = null;
        _this.minLength = 0;
        _this.maxLength = 0;
        _this.options = [];
        _this.params = {};
        _this.isVisible = true;
        _this.visibilityCondition = null;
        _this.enableFractions = false;
        _this.currency = null;
        _this.dateDisplayFormat = _this.dateDisplayFormat || _this.defaultDateFormat;
        _this.numberOfColumns = 1;
        _this.fields = [];
        _this.columns = [];
        if (json) {
            _this.fieldType = json.fieldType;
            _this.id = json.id;
            _this.name = json.name;
            _this.type = json.type;
            _this._required = json.required;
            _this._readOnly = json.readOnly || json.type === 'readonly';
            _this.overrideId = json.overrideId;
            _this.tab = json.tab;
            _this.restUrl = json.restUrl;
            _this.restResponsePath = json.restResponsePath;
            _this.restIdProperty = json.restIdProperty;
            _this.restLabelProperty = json.restLabelProperty;
            _this.colspan = json.colspan;
            _this.minLength = json.minLength || 0;
            _this.maxLength = json.maxLength || 0;
            _this.minValue = json.minValue;
            _this.maxValue = json.maxValue;
            _this.regexPattern = json.regexPattern;
            _this.options = json.options || [];
            _this.hasEmptyValue = json.hasEmptyValue;
            _this.className = json.className;
            _this.optionType = json.optionType;
            _this.params = json.params || {};
            _this.hyperlinkUrl = json.hyperlinkUrl;
            _this.displayText = json.displayText;
            _this.visibilityCondition = json.visibilityCondition;
            _this.enableFractions = json.enableFractions;
            _this.currency = json.currency;
            _this.dateDisplayFormat = json.dateDisplayFormat || _this.defaultDateFormat;
            _this._value = _this.parseValue(json);
            if (json.placeholder && json.placeholder !== '' && json.placeholder !== 'null') {
                _this.placeholder = json.placeholder;
            }
            if (form_field_types_1.FormFieldTypes.isReadOnlyType(json.type)) {
                if (json.params && json.params.field && json.params.field.responseVariable) {
                    _this.value = _this.getVariablesValue(json.params.field.name, form);
                }
            }
            if (form_field_types_1.FormFieldTypes.isContainerType(json.type)) {
                _this.containerFactory(json, form);
            }
        }
        if (_this.hasEmptyValue && _this.options && _this.options.length > 0) {
            _this.emptyOption = _this.options[0];
        }
        _this.updateForm();
        return _this;
    }
    Object.defineProperty(FormFieldModel.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            this._value = v;
            this.validate();
            this.updateForm();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormFieldModel.prototype, "readOnly", {
        get: function () {
            if (this.form && this.form.readOnly) {
                return true;
            }
            return this._readOnly;
        },
        set: function (readOnly) {
            this._readOnly = readOnly;
            this.updateForm();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormFieldModel.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (value) {
            this._required = value;
            this.updateForm();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormFieldModel.prototype, "isValid", {
        get: function () {
            return this._isValid;
        },
        enumerable: true,
        configurable: true
    });
    FormFieldModel.prototype.validate = function () {
        this.validationSummary = null;
        var validators = this.form.fieldValidators || [];
        for (var _i = 0, validators_1 = validators; _i < validators_1.length; _i++) {
            var validator = validators_1[_i];
            if (!validator.validate(this)) {
                this._isValid = false;
                return this._isValid;
            }
        }
        this._isValid = true;
        return this._isValid;
    };
    FormFieldModel.prototype.getVariablesValue = function (variableName, form) {
        var variable = form.json.variables.find(function (currentVariable) {
            return currentVariable.name === variableName;
        });
        if (variable.type === 'boolean') {
            return JSON.parse(variable.value);
        }
        return variable.value;
    };
    FormFieldModel.prototype.containerFactory = function (json, form) {
        var _this = this;
        this.numberOfColumns = json.numberOfColumns || 1;
        this.fields = json.fields;
        this.rowspan = 1;
        this.colspan = 1;
        if (json.fields) {
            for (var currentField in json.fields) {
                if (json.fields.hasOwnProperty(currentField)) {
                    var col = new container_column_model_1.ContainerColumnModel();
                    var fields = (json.fields[currentField] || []).map(function (f) { return new FormFieldModel(form, f); });
                    col.fields = fields;
                    col.rowspan = json.fields[currentField].length;
                    col.fields.forEach(function (colFields) {
                        _this.colspan = colFields.colspan > _this.colspan ? colFields.colspan : _this.colspan;
                    });
                    this.rowspan = this.rowspan < col.rowspan ? col.rowspan : this.rowspan;
                    this.columns.push(col);
                }
            }
        }
    };
    FormFieldModel.prototype.parseValue = function (json) {
        var value = json.value;
        if (json.type === form_field_types_1.FormFieldTypes.DROPDOWN) {
            if (json.hasEmptyValue && json.options) {
                var options = json.options || [];
                if (options.length > 0) {
                    var emptyOption = json.options[0];
                    if (value === '' || value === emptyOption.id || value === emptyOption.name) {
                        value = emptyOption.id;
                    }
                }
            }
        }
        if (json.type === form_field_types_1.FormFieldTypes.RADIO_BUTTONS) {
            var entry = this.options.filter(function (opt) { return opt.id === value || opt.name === value; });
            if (entry.length > 0) {
                value = entry[0].id;
            }
        }
        if (json.type === form_field_types_1.FormFieldTypes.DATE) {
            if (value) {
                var dateValue = void 0;
                if (form_field_validator_1.NumberFieldValidator.isNumber(value)) {
                    dateValue = moment(value);
                }
                else {
                    dateValue = moment(value.split('T')[0], 'YYYY-M-D');
                }
                if (dateValue && dateValue.isValid()) {
                    value = dateValue.format(this.dateDisplayFormat);
                }
            }
        }
        return value;
    };
    FormFieldModel.prototype.updateForm = function () {
        var _this = this;
        if (!this.form) {
            return;
        }
        switch (this.type) {
            case form_field_types_1.FormFieldTypes.DROPDOWN:
                if (this.value === 'empty' || this.value === '') {
                    this.form.values[this.id] = {};
                }
                else {
                    var entry = this.options.filter(function (opt) { return opt.id === _this.value; });
                    if (entry.length > 0) {
                        this.form.values[this.id] = entry[0];
                    }
                }
                break;
            case form_field_types_1.FormFieldTypes.RADIO_BUTTONS:
                var rbEntry = this.options.filter(function (opt) { return opt.id === _this.value; });
                if (rbEntry.length > 0) {
                    this.form.values[this.id] = rbEntry[0];
                }
                break;
            case form_field_types_1.FormFieldTypes.UPLOAD:
                if (this.value && this.value.length > 0) {
                    this.form.values[this.id] = this.value.map(function (elem) { return elem.id; }).join(',');
                }
                else {
                    this.form.values[this.id] = null;
                }
                break;
            case form_field_types_1.FormFieldTypes.TYPEAHEAD:
                var taEntry = this.options.filter(function (opt) { return opt.id === _this.value; });
                if (taEntry.length > 0) {
                    this.form.values[this.id] = taEntry[0];
                }
                else if (this.options.length > 0) {
                    this.form.values[this.id] = null;
                }
                break;
            case form_field_types_1.FormFieldTypes.DATE:
                var dateValue = moment(this.value, this.dateDisplayFormat, true);
                if (dateValue && dateValue.isValid()) {
                    this.form.values[this.id] = dateValue.format('YYYY-MM-DD') + "T00:00:00.000Z";
                }
                else {
                    this.form.values[this.id] = null;
                    this._value = this.value;
                }
                break;
            case form_field_types_1.FormFieldTypes.NUMBER:
                this.form.values[this.id] = parseInt(this.value, 10);
                break;
            case form_field_types_1.FormFieldTypes.AMOUNT:
                this.form.values[this.id] = this.enableFractions ? parseFloat(this.value) : parseInt(this.value, 10);
                break;
            default:
                if (!form_field_types_1.FormFieldTypes.isReadOnlyType(this.type) && !this.isInvalidFieldType(this.type)) {
                    this.form.values[this.id] = this.value;
                }
        }
        this.form.onFormFieldChanged(this);
    };
    FormFieldModel.prototype.isInvalidFieldType = function (type) {
        if (type === 'container') {
            return true;
        }
        else {
            return false;
        }
    };
    FormFieldModel.prototype.getOptionName = function () {
        var _this = this;
        var option = this.options.find(function (opt) { return opt.id === _this.value; });
        return option ? option.name : null;
    };
    FormFieldModel.prototype.hasOptions = function () {
        return this.options && this.options.length > 0;
    };
    return FormFieldModel;
}(form_widget_model_1.FormWidgetModel));
exports.FormFieldModel = FormFieldModel;


/***/ }),

/***/ 317:
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
Object.defineProperty(exports, "__esModule", { value: true });
var form_widget_model_1 = __webpack_require__(67);
var FormOutcomeModel = (function (_super) {
    __extends(FormOutcomeModel, _super);
    function FormOutcomeModel(form, json) {
        var _this = _super.call(this, form, json) || this;
        _this.isSystem = false;
        _this.isSelected = false;
        if (json) {
            _this.isSystem = json.isSystem ? true : false;
            _this.isSelected = form && json.name === form.selectedOutcome ? true : false;
        }
        return _this;
    }
    return FormOutcomeModel;
}(form_widget_model_1.FormWidgetModel));
FormOutcomeModel.SAVE_ACTION = 'Save';
FormOutcomeModel.COMPLETE_ACTION = 'Complete';
FormOutcomeModel.START_PROCESS_ACTION = 'Start Process';
exports.FormOutcomeModel = FormOutcomeModel;


/***/ }),

/***/ 318:
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
Object.defineProperty(exports, "__esModule", { value: true });
var form_widget_model_1 = __webpack_require__(67);
var TabModel = (function (_super) {
    __extends(TabModel, _super);
    function TabModel(form, json) {
        var _this = _super.call(this, form, json) || this;
        _this.isVisible = true;
        _this.fields = [];
        if (json) {
            _this.title = json.title;
            _this.visibilityCondition = json.visibilityCondition;
        }
        return _this;
    }
    TabModel.prototype.hasContent = function () {
        return this.fields && this.fields.length > 0;
    };
    return TabModel;
}(form_widget_model_1.FormWidgetModel));
exports.TabModel = TabModel;


/***/ }),

/***/ 319:
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
var material_1 = __webpack_require__(3);
var moment = __webpack_require__(14);
var ng2_alfresco_core_1 = __webpack_require__(1);
var form_service_1 = __webpack_require__(4);
var widget_component_1 = __webpack_require__(8);
var DateWidgetComponent = (function (_super) {
    __extends(DateWidgetComponent, _super);
    function DateWidgetComponent(formService, dateAdapter) {
        var _this = _super.call(this, formService) || this;
        _this.formService = formService;
        _this.dateAdapter = dateAdapter;
        return _this;
    }
    DateWidgetComponent.prototype.ngOnInit = function () {
        var momentDateAdapter = this.dateAdapter;
        momentDateAdapter.overrideDisplyaFormat = this.field.dateDisplayFormat;
        if (this.field) {
            if (this.field.minValue) {
                this.minDate = moment(this.field.minValue, this.field.dateDisplayFormat);
            }
            if (this.field.maxValue) {
                this.maxDate = moment(this.field.maxValue, this.field.dateDisplayFormat);
            }
        }
    };
    DateWidgetComponent.prototype.onDateChanged = function (newDateValue) {
        this.field.validationSummary = '';
        if (newDateValue) {
            var momentDate = moment(newDateValue, this.field.dateDisplayFormat, true);
            if (!momentDate.isValid()) {
                this.field.validationSummary = this.field.dateDisplayFormat;
                this.field.value = null;
            }
            else {
                this.field.value = newDateValue;
            }
        }
        else {
            this.field.value = null;
        }
        this.checkVisibility(this.field);
    };
    return DateWidgetComponent;
}(widget_component_1.WidgetComponent));
DateWidgetComponent = __decorate([
    core_1.Component({
        selector: 'date-widget',
        providers: [
            { provide: material_1.DateAdapter, useClass: ng2_alfresco_core_1.MomentDateAdapter },
            { provide: material_1.MD_DATE_FORMATS, useValue: ng2_alfresco_core_1.MOMENT_DATE_FORMATS }
        ],
        template: __webpack_require__(552),
        styles: [__webpack_require__(734)],
        host: widget_component_1.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _a || Object, typeof (_b = typeof material_1.DateAdapter !== "undefined" && material_1.DateAdapter) === "function" && _b || Object])
], DateWidgetComponent);
exports.DateWidgetComponent = DateWidgetComponent;
var _a, _b;


/***/ }),

/***/ 320:
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
var form_service_1 = __webpack_require__(4);
var widget_component_1 = __webpack_require__(8);
var DisplayTextWidgetComponentComponent = (function (_super) {
    __extends(DisplayTextWidgetComponentComponent, _super);
    function DisplayTextWidgetComponentComponent(formService) {
        var _this = _super.call(this, formService) || this;
        _this.formService = formService;
        return _this;
    }
    return DisplayTextWidgetComponentComponent;
}(widget_component_1.WidgetComponent));
DisplayTextWidgetComponentComponent = __decorate([
    core_1.Component({
        selector: 'display-text-widget',
        template: __webpack_require__(553),
        styles: [__webpack_require__(735)],
        host: widget_component_1.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _a || Object])
], DisplayTextWidgetComponentComponent);
exports.DisplayTextWidgetComponentComponent = DisplayTextWidgetComponentComponent;
var _a;


/***/ }),

/***/ 321:
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
var form_service_1 = __webpack_require__(4);
var widget_visibility_service_1 = __webpack_require__(25);
var widget_component_1 = __webpack_require__(8);
var DropdownWidgetComponent = (function (_super) {
    __extends(DropdownWidgetComponent, _super);
    function DropdownWidgetComponent(formService, visibilityService, logService) {
        var _this = _super.call(this, formService) || this;
        _this.formService = formService;
        _this.visibilityService = visibilityService;
        _this.logService = logService;
        return _this;
    }
    DropdownWidgetComponent.prototype.ngOnInit = function () {
        if (this.field && this.field.restUrl) {
            if (this.field.form.taskId) {
                this.getValuesByTaskId();
            }
            else {
                this.getValuesByProcessDefinitionId();
            }
        }
    };
    DropdownWidgetComponent.prototype.getValuesByTaskId = function () {
        var _this = this;
        this.formService
            .getRestFieldValues(this.field.form.taskId, this.field.id)
            .subscribe(function (result) {
            var options = [];
            if (_this.field.emptyOption) {
                options.push(_this.field.emptyOption);
            }
            _this.field.options = options.concat((result || []));
            _this.field.updateForm();
        }, function (err) { return _this.handleError(err); });
    };
    DropdownWidgetComponent.prototype.getValuesByProcessDefinitionId = function () {
        var _this = this;
        this.formService
            .getRestFieldValuesByProcessId(this.field.form.processDefinitionId, this.field.id)
            .subscribe(function (result) {
            var options = [];
            if (_this.field.emptyOption) {
                options.push(_this.field.emptyOption);
            }
            _this.field.options = options.concat((result || []));
            _this.field.updateForm();
        }, function (err) { return _this.handleError(err); });
    };
    DropdownWidgetComponent.prototype.getOptionValue = function (option, fieldValue) {
        var optionValue = '';
        if (option.id === 'empty' || option.name !== fieldValue) {
            optionValue = option.id;
        }
        else {
            optionValue = option.name;
        }
        return optionValue;
    };
    DropdownWidgetComponent.prototype.checkVisibility = function () {
        this.visibilityService.refreshVisibility(this.field.form);
    };
    DropdownWidgetComponent.prototype.handleError = function (error) {
        this.logService.error(error);
    };
    return DropdownWidgetComponent;
}(widget_component_1.WidgetComponent));
DropdownWidgetComponent = __decorate([
    core_1.Component({
        selector: 'dropdown-widget',
        template: __webpack_require__(554),
        styles: [__webpack_require__(736)],
        host: widget_component_1.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _a || Object, typeof (_b = typeof widget_visibility_service_1.WidgetVisibilityService !== "undefined" && widget_visibility_service_1.WidgetVisibilityService) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _c || Object])
], DropdownWidgetComponent);
exports.DropdownWidgetComponent = DropdownWidgetComponent;
var _a, _b, _c;


/***/ }),

/***/ 322:
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
var widget_visibility_service_1 = __webpack_require__(25);
var form_service_1 = __webpack_require__(4);
var widget_component_1 = __webpack_require__(8);
var dynamic_table_widget_model_1 = __webpack_require__(69);
var DynamicTableWidgetComponent = (function (_super) {
    __extends(DynamicTableWidgetComponent, _super);
    function DynamicTableWidgetComponent(formService, elementRef, visibilityService, logService, cd) {
        var _this = _super.call(this, formService) || this;
        _this.formService = formService;
        _this.elementRef = elementRef;
        _this.visibilityService = visibilityService;
        _this.logService = logService;
        _this.cd = cd;
        _this.ERROR_MODEL_NOT_FOUND = 'Table model not found';
        _this.editMode = false;
        _this.editRow = null;
        _this.selectArrayCode = [32, 0, 13];
        return _this;
    }
    DynamicTableWidgetComponent.prototype.ngOnInit = function () {
        if (this.field) {
            this.content = new dynamic_table_widget_model_1.DynamicTableModel(this.field);
            this.visibilityService.refreshVisibility(this.field.form);
        }
    };
    DynamicTableWidgetComponent.prototype.forceFocusOnAddButton = function () {
        if (this.content) {
            this.cd.detectChanges();
            var buttonAddRow = this.elementRef.nativeElement.querySelector('#' + this.content.id + '-add-row');
            if (this.isDynamicTableReady(buttonAddRow)) {
                buttonAddRow.focus();
            }
        }
    };
    DynamicTableWidgetComponent.prototype.isDynamicTableReady = function (buttonAddRow) {
        return this.field && !this.editMode && buttonAddRow;
    };
    DynamicTableWidgetComponent.prototype.isValid = function () {
        var result = true;
        if (this.content && this.content.field) {
            result = this.content.field.isValid;
        }
        return result;
    };
    DynamicTableWidgetComponent.prototype.onRowClicked = function (row) {
        if (this.content) {
            this.content.selectedRow = row;
        }
    };
    DynamicTableWidgetComponent.prototype.onKeyPressed = function ($event, row) {
        if (this.content && this.isEnterOrSpacePressed($event.keyCode)) {
            this.content.selectedRow = row;
        }
    };
    DynamicTableWidgetComponent.prototype.isEnterOrSpacePressed = function (keycode) {
        return this.selectArrayCode.indexOf(keycode) !== -1;
    };
    DynamicTableWidgetComponent.prototype.hasSelection = function () {
        return !!(this.content && this.content.selectedRow);
    };
    DynamicTableWidgetComponent.prototype.moveSelectionUp = function () {
        if (this.content && !this.readOnly) {
            this.content.moveRow(this.content.selectedRow, -1);
            return true;
        }
        return false;
    };
    DynamicTableWidgetComponent.prototype.moveSelectionDown = function () {
        if (this.content && !this.readOnly) {
            this.content.moveRow(this.content.selectedRow, 1);
            return true;
        }
        return false;
    };
    DynamicTableWidgetComponent.prototype.deleteSelection = function () {
        if (this.content && !this.readOnly) {
            this.content.deleteRow(this.content.selectedRow);
            return true;
        }
        return false;
    };
    DynamicTableWidgetComponent.prototype.addNewRow = function () {
        if (this.content && !this.readOnly) {
            this.editRow = {
                isNew: true,
                selected: false,
                value: {}
            };
            this.editMode = true;
            return true;
        }
        return false;
    };
    DynamicTableWidgetComponent.prototype.editSelection = function () {
        if (this.content && !this.readOnly) {
            this.editRow = this.copyRow(this.content.selectedRow);
            this.editMode = true;
            return true;
        }
        return false;
    };
    DynamicTableWidgetComponent.prototype.getCellValue = function (row, column) {
        if (this.content) {
            var result = this.content.getCellValue(row, column);
            if (column.type === 'Amount') {
                return (column.amountCurrency || '$') + ' ' + (result || 0);
            }
            return result;
        }
        return null;
    };
    DynamicTableWidgetComponent.prototype.onSaveChanges = function () {
        if (this.content) {
            if (this.editRow.isNew) {
                var row = this.copyRow(this.editRow);
                this.content.selectedRow = null;
                this.content.addRow(row);
                this.editRow.isNew = false;
            }
            else {
                this.content.selectedRow.value = this.copyObject(this.editRow.value);
            }
            this.content.flushValue();
        }
        else {
            this.logService.error(this.ERROR_MODEL_NOT_FOUND);
        }
        this.editMode = false;
        this.forceFocusOnAddButton();
    };
    DynamicTableWidgetComponent.prototype.onCancelChanges = function () {
        this.editMode = false;
        this.editRow = null;
        this.forceFocusOnAddButton();
    };
    DynamicTableWidgetComponent.prototype.copyRow = function (row) {
        return {
            value: this.copyObject(row.value)
        };
    };
    DynamicTableWidgetComponent.prototype.copyObject = function (obj) {
        var _this = this;
        var result = obj;
        if (typeof obj === 'object' && obj !== null && obj !== undefined) {
            result = Object.assign({}, obj);
            Object.keys(obj).forEach(function (key) {
                if (typeof obj[key] === 'object') {
                    result[key] = _this.copyObject(obj[key]);
                }
            });
        }
        return result;
    };
    return DynamicTableWidgetComponent;
}(widget_component_1.WidgetComponent));
DynamicTableWidgetComponent = __decorate([
    core_1.Component({
        selector: 'dynamic-table-widget',
        template: __webpack_require__(555),
        styles: [__webpack_require__(737)],
        host: widget_component_1.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _a || Object, typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof widget_visibility_service_1.WidgetVisibilityService !== "undefined" && widget_visibility_service_1.WidgetVisibilityService) === "function" && _c || Object, typeof (_d = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _d || Object, typeof (_e = typeof core_1.ChangeDetectorRef !== "undefined" && core_1.ChangeDetectorRef) === "function" && _e || Object])
], DynamicTableWidgetComponent);
exports.DynamicTableWidgetComponent = DynamicTableWidgetComponent;
var _a, _b, _c, _d, _e;


/***/ }),

/***/ 323:
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
var dynamic_table_widget_model_1 = __webpack_require__(69);
var BooleanEditorComponent = (function () {
    function BooleanEditorComponent() {
    }
    BooleanEditorComponent.prototype.onValueChanged = function (row, column, event) {
        var value = event.checked;
        row.value[column.id] = value;
    };
    return BooleanEditorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof dynamic_table_widget_model_1.DynamicTableModel !== "undefined" && dynamic_table_widget_model_1.DynamicTableModel) === "function" && _a || Object)
], BooleanEditorComponent.prototype, "table", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof dynamic_table_widget_model_1.DynamicTableRow !== "undefined" && dynamic_table_widget_model_1.DynamicTableRow) === "function" && _b || Object)
], BooleanEditorComponent.prototype, "row", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_c = typeof dynamic_table_widget_model_1.DynamicTableColumn !== "undefined" && dynamic_table_widget_model_1.DynamicTableColumn) === "function" && _c || Object)
], BooleanEditorComponent.prototype, "column", void 0);
BooleanEditorComponent = __decorate([
    core_1.Component({
        selector: 'adf-boolean-editor',
        template: __webpack_require__(556),
        styles: [__webpack_require__(738)]
    })
], BooleanEditorComponent);
exports.BooleanEditorComponent = BooleanEditorComponent;
var _a, _b, _c;


/***/ }),

/***/ 324:
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
var material_1 = __webpack_require__(3);
var moment = __webpack_require__(14);
var ng2_alfresco_core_1 = __webpack_require__(1);
var dynamic_table_widget_model_1 = __webpack_require__(69);
var DateEditorComponent = (function () {
    function DateEditorComponent(dateAdapter) {
        this.dateAdapter = dateAdapter;
        this.DATE_FORMAT = 'DD-MM-YYYY';
    }
    DateEditorComponent.prototype.ngOnInit = function () {
        var momentDateAdapter = this.dateAdapter;
        momentDateAdapter.overrideDisplyaFormat = this.DATE_FORMAT;
        this.value = moment(this.table.getCellValue(this.row, this.column), this.DATE_FORMAT);
    };
    DateEditorComponent.prototype.onDateChanged = function (newDateValue) {
        if (newDateValue) {
            var momentDate = moment(newDateValue, this.DATE_FORMAT, true);
            if (!momentDate.isValid()) {
                this.row.value[this.column.id] = '';
            }
            else {
                this.row.value[this.column.id] = momentDate.format('YYYY-MM-DD') + "T00:00:00.000Z";
                this.table.flushValue();
            }
        }
    };
    return DateEditorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof dynamic_table_widget_model_1.DynamicTableModel !== "undefined" && dynamic_table_widget_model_1.DynamicTableModel) === "function" && _a || Object)
], DateEditorComponent.prototype, "table", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof dynamic_table_widget_model_1.DynamicTableRow !== "undefined" && dynamic_table_widget_model_1.DynamicTableRow) === "function" && _b || Object)
], DateEditorComponent.prototype, "row", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_c = typeof dynamic_table_widget_model_1.DynamicTableColumn !== "undefined" && dynamic_table_widget_model_1.DynamicTableColumn) === "function" && _c || Object)
], DateEditorComponent.prototype, "column", void 0);
DateEditorComponent = __decorate([
    core_1.Component({
        selector: 'adf-date-editor',
        template: __webpack_require__(557),
        providers: [
            { provide: material_1.DateAdapter, useClass: ng2_alfresco_core_1.MomentDateAdapter },
            { provide: material_1.MD_DATE_FORMATS, useValue: ng2_alfresco_core_1.MOMENT_DATE_FORMATS }
        ],
        styles: [__webpack_require__(739)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof material_1.DateAdapter !== "undefined" && material_1.DateAdapter) === "function" && _d || Object])
], DateEditorComponent);
exports.DateEditorComponent = DateEditorComponent;
var _a, _b, _c, _d;


/***/ }),

/***/ 325:
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
var form_service_1 = __webpack_require__(4);
var dynamic_table_widget_model_1 = __webpack_require__(69);
var DropdownEditorComponent = (function () {
    function DropdownEditorComponent(formService, logService) {
        this.formService = formService;
        this.logService = logService;
        this.value = null;
        this.options = [];
    }
    DropdownEditorComponent.prototype.ngOnInit = function () {
        var field = this.table.field;
        if (field) {
            if (this.column.optionType === 'rest') {
                if (this.table.form && this.table.form.taskId) {
                    this.getValuesByTaskId(field);
                }
                else {
                    this.getValuesByProcessDefinitionId(field);
                }
            }
            else {
                this.options = this.column.options || [];
                this.value = this.table.getCellValue(this.row, this.column);
            }
        }
    };
    DropdownEditorComponent.prototype.getValuesByTaskId = function (field) {
        var _this = this;
        this.formService
            .getRestFieldValuesColumn(field.form.taskId, field.id, this.column.id)
            .subscribe(function (result) {
            _this.column.options = result || [];
            _this.options = _this.column.options;
            _this.value = _this.table.getCellValue(_this.row, _this.column);
        }, function (err) { return _this.handleError(err); });
    };
    DropdownEditorComponent.prototype.getValuesByProcessDefinitionId = function (field) {
        var _this = this;
        this.formService
            .getRestFieldValuesColumnByProcessId(field.form.processDefinitionId, field.id, this.column.id)
            .subscribe(function (result) {
            _this.column.options = result || [];
            _this.options = _this.column.options;
            _this.value = _this.table.getCellValue(_this.row, _this.column);
        }, function (err) { return _this.handleError(err); });
    };
    DropdownEditorComponent.prototype.onValueChanged = function (row, column, event) {
        var value = event.value;
        value = column.options.find(function (opt) { return opt.name === value; });
        row.value[column.id] = value;
    };
    DropdownEditorComponent.prototype.handleError = function (error) {
        this.logService.error(error);
    };
    return DropdownEditorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof dynamic_table_widget_model_1.DynamicTableModel !== "undefined" && dynamic_table_widget_model_1.DynamicTableModel) === "function" && _a || Object)
], DropdownEditorComponent.prototype, "table", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof dynamic_table_widget_model_1.DynamicTableRow !== "undefined" && dynamic_table_widget_model_1.DynamicTableRow) === "function" && _b || Object)
], DropdownEditorComponent.prototype, "row", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_c = typeof dynamic_table_widget_model_1.DynamicTableColumn !== "undefined" && dynamic_table_widget_model_1.DynamicTableColumn) === "function" && _c || Object)
], DropdownEditorComponent.prototype, "column", void 0);
DropdownEditorComponent = __decorate([
    core_1.Component({
        selector: 'adf-dropdown-editor',
        template: __webpack_require__(558),
        styles: [__webpack_require__(740)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _d || Object, typeof (_e = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _e || Object])
], DropdownEditorComponent);
exports.DropdownEditorComponent = DropdownEditorComponent;
var _a, _b, _c, _d, _e;


/***/ }),

/***/ 326:
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
var dynamic_table_widget_model_1 = __webpack_require__(69);
var RowEditorComponent = (function () {
    function RowEditorComponent() {
        this.save = new core_1.EventEmitter();
        this.cancel = new core_1.EventEmitter();
        this.validationSummary = { isValid: true, text: null };
    }
    RowEditorComponent.prototype.onCancelChanges = function () {
        this.cancel.emit({
            table: this.table,
            row: this.row,
            column: this.column
        });
    };
    RowEditorComponent.prototype.onSaveChanges = function () {
        this.validate();
        if (this.isValid()) {
            this.save.emit({
                table: this.table,
                row: this.row,
                column: this.column
            });
        }
    };
    RowEditorComponent.prototype.isValid = function () {
        return this.validationSummary && this.validationSummary.isValid;
    };
    RowEditorComponent.prototype.validate = function () {
        this.validationSummary = this.table.validateRow(this.row);
    };
    return RowEditorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof dynamic_table_widget_model_1.DynamicTableModel !== "undefined" && dynamic_table_widget_model_1.DynamicTableModel) === "function" && _a || Object)
], RowEditorComponent.prototype, "table", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof dynamic_table_widget_model_1.DynamicTableRow !== "undefined" && dynamic_table_widget_model_1.DynamicTableRow) === "function" && _b || Object)
], RowEditorComponent.prototype, "row", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_c = typeof dynamic_table_widget_model_1.DynamicTableColumn !== "undefined" && dynamic_table_widget_model_1.DynamicTableColumn) === "function" && _c || Object)
], RowEditorComponent.prototype, "column", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], RowEditorComponent.prototype, "save", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], RowEditorComponent.prototype, "cancel", void 0);
RowEditorComponent = __decorate([
    core_1.Component({
        selector: 'row-editor',
        template: __webpack_require__(559),
        styles: [__webpack_require__(429)]
    })
], RowEditorComponent);
exports.RowEditorComponent = RowEditorComponent;
var _a, _b, _c, _d, _e;


/***/ }),

/***/ 327:
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
var dynamic_table_widget_model_1 = __webpack_require__(69);
var TextEditorComponent = (function () {
    function TextEditorComponent() {
    }
    TextEditorComponent.prototype.ngOnInit = function () {
        this.displayName = this.table.getDisplayText(this.column);
    };
    TextEditorComponent.prototype.onValueChanged = function (row, column, event) {
        var value = event.target.value;
        row.value[column.id] = value;
    };
    return TextEditorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof dynamic_table_widget_model_1.DynamicTableModel !== "undefined" && dynamic_table_widget_model_1.DynamicTableModel) === "function" && _a || Object)
], TextEditorComponent.prototype, "table", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof dynamic_table_widget_model_1.DynamicTableRow !== "undefined" && dynamic_table_widget_model_1.DynamicTableRow) === "function" && _b || Object)
], TextEditorComponent.prototype, "row", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_c = typeof dynamic_table_widget_model_1.DynamicTableColumn !== "undefined" && dynamic_table_widget_model_1.DynamicTableColumn) === "function" && _c || Object)
], TextEditorComponent.prototype, "column", void 0);
TextEditorComponent = __decorate([
    core_1.Component({
        selector: 'adf-text-editor',
        template: __webpack_require__(560),
        styles: [__webpack_require__(741)]
    })
], TextEditorComponent);
exports.TextEditorComponent = TextEditorComponent;
var _a, _b, _c;


/***/ }),

/***/ 328:
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
var animations_1 = __webpack_require__(804);
var core_1 = __webpack_require__(0);
var form_service_1 = __webpack_require__(4);
var widget_component_1 = __webpack_require__(8);
var ErrorWidgetComponent = (function (_super) {
    __extends(ErrorWidgetComponent, _super);
    function ErrorWidgetComponent(formService) {
        var _this = _super.call(this, formService) || this;
        _this.formService = formService;
        _this._subscriptAnimationState = '';
        return _this;
    }
    ErrorWidgetComponent.prototype.ngAfterViewInit = function () {
        this._subscriptAnimationState = 'enter';
    };
    ErrorWidgetComponent.prototype.ngOnChanges = function (changes) {
        if (changes['required']) {
            this.required = changes.required.currentValue;
            this._subscriptAnimationState = 'enter';
        }
    };
    return ErrorWidgetComponent;
}(widget_component_1.WidgetComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ErrorWidgetComponent.prototype, "error", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ErrorWidgetComponent.prototype, "required", void 0);
ErrorWidgetComponent = __decorate([
    core_1.Component({
        selector: 'error-widget',
        template: __webpack_require__(561),
        styles: [__webpack_require__(742)],
        animations: [
            animations_1.trigger('transitionMessages', [
                animations_1.state('enter', animations_1.style({ opacity: 1, transform: 'translateY(0%)' })),
                animations_1.transition('void => enter', [
                    animations_1.style({ opacity: 0, transform: 'translateY(-100%)' }),
                    animations_1.animate('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')
                ])
            ])
        ],
        host: widget_component_1.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _a || Object])
], ErrorWidgetComponent);
exports.ErrorWidgetComponent = ErrorWidgetComponent;
var _a;


/***/ }),

/***/ 329:
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
var form_service_1 = __webpack_require__(4);
var widget_component_1 = __webpack_require__(8);
var FunctionalGroupWidgetComponent = (function (_super) {
    __extends(FunctionalGroupWidgetComponent, _super);
    function FunctionalGroupWidgetComponent(formService, elementRef) {
        var _this = _super.call(this, formService) || this;
        _this.formService = formService;
        _this.elementRef = elementRef;
        _this.popupVisible = false;
        _this.groups = [];
        _this.minTermLength = 1;
        return _this;
    }
    FunctionalGroupWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.field) {
            var group = this.field.value;
            if (group) {
                this.value = group.name;
            }
            var params = this.field.params;
            if (params && params['restrictWithGroup']) {
                var restrictWithGroup = params['restrictWithGroup'];
                this.groupId = restrictWithGroup.id;
            }
            if (this.value) {
                this.formService
                    .getWorkflowGroups(this.value, this.groupId)
                    .subscribe(function (result) { return _this.groups = result || []; });
            }
        }
    };
    FunctionalGroupWidgetComponent.prototype.onKeyUp = function (event) {
        var _this = this;
        if (this.value && this.value.length >= this.minTermLength) {
            this.formService.getWorkflowGroups(this.value, this.groupId)
                .subscribe(function (result) {
                _this.groups = result || [];
                _this.popupVisible = _this.groups.length > 0;
            });
        }
        else {
            this.popupVisible = false;
        }
    };
    FunctionalGroupWidgetComponent.prototype.onBlur = function () {
        var _this = this;
        setTimeout(function () {
            _this.flushValue();
        }, 200);
    };
    FunctionalGroupWidgetComponent.prototype.flushValue = function () {
        var _this = this;
        this.popupVisible = false;
        var option = this.groups.find(function (item) { return item.name.toLocaleLowerCase() === _this.value.toLocaleLowerCase(); });
        if (option) {
            this.field.value = option;
            this.value = option.name;
        }
        else {
            this.field.value = null;
            this.value = null;
        }
        this.field.updateForm();
    };
    FunctionalGroupWidgetComponent.prototype.onItemClick = function (item, event) {
        if (item) {
            this.field.value = item;
            this.value = item.name;
        }
        if (event) {
            event.preventDefault();
        }
    };
    return FunctionalGroupWidgetComponent;
}(widget_component_1.WidgetComponent));
FunctionalGroupWidgetComponent = __decorate([
    core_1.Component({
        selector: 'functional-group-widget',
        template: __webpack_require__(562),
        styles: [__webpack_require__(743)],
        host: widget_component_1.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _a || Object, typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object])
], FunctionalGroupWidgetComponent);
exports.FunctionalGroupWidgetComponent = FunctionalGroupWidgetComponent;
var _a, _b;


/***/ }),

/***/ 330:
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
var form_service_1 = __webpack_require__(4);
var widget_component_1 = __webpack_require__(8);
var HyperlinkWidgetComponent = (function (_super) {
    __extends(HyperlinkWidgetComponent, _super);
    function HyperlinkWidgetComponent(formService) {
        var _this = _super.call(this, formService) || this;
        _this.formService = formService;
        _this.linkUrl = widget_component_1.WidgetComponent.DEFAULT_HYPERLINK_URL;
        _this.linkText = null;
        return _this;
    }
    HyperlinkWidgetComponent.prototype.ngOnInit = function () {
        if (this.field) {
            this.linkUrl = this.getHyperlinkUrl(this.field);
            this.linkText = this.getHyperlinkText(this.field);
        }
    };
    return HyperlinkWidgetComponent;
}(widget_component_1.WidgetComponent));
HyperlinkWidgetComponent = __decorate([
    core_1.Component({
        selector: 'hyperlink-widget',
        template: __webpack_require__(563),
        styles: [__webpack_require__(744)],
        host: widget_component_1.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _a || Object])
], HyperlinkWidgetComponent);
exports.HyperlinkWidgetComponent = HyperlinkWidgetComponent;
var _a;


/***/ }),

/***/ 331:
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
var form_service_1 = __webpack_require__(4);
var widget_component_1 = __webpack_require__(8);
var MultilineTextWidgetComponentComponent = (function (_super) {
    __extends(MultilineTextWidgetComponentComponent, _super);
    function MultilineTextWidgetComponentComponent(formService) {
        var _this = _super.call(this, formService) || this;
        _this.formService = formService;
        return _this;
    }
    return MultilineTextWidgetComponentComponent;
}(widget_component_1.WidgetComponent));
MultilineTextWidgetComponentComponent = __decorate([
    core_1.Component({
        selector: 'multiline-text-widget',
        template: __webpack_require__(564),
        styles: [__webpack_require__(745)],
        host: widget_component_1.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _a || Object])
], MultilineTextWidgetComponentComponent);
exports.MultilineTextWidgetComponentComponent = MultilineTextWidgetComponentComponent;
var _a;


/***/ }),

/***/ 332:
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
var form_service_1 = __webpack_require__(4);
var widget_component_1 = __webpack_require__(8);
var NumberWidgetComponent = (function (_super) {
    __extends(NumberWidgetComponent, _super);
    function NumberWidgetComponent(formService) {
        var _this = _super.call(this, formService) || this;
        _this.formService = formService;
        return _this;
    }
    return NumberWidgetComponent;
}(widget_component_1.WidgetComponent));
NumberWidgetComponent = __decorate([
    core_1.Component({
        selector: 'number-widget',
        template: __webpack_require__(565),
        styles: [__webpack_require__(746)],
        host: widget_component_1.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _a || Object])
], NumberWidgetComponent);
exports.NumberWidgetComponent = NumberWidgetComponent;
var _a;


/***/ }),

/***/ 333:
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
var Observable_1 = __webpack_require__(23);
var form_service_1 = __webpack_require__(4);
var widget_component_1 = __webpack_require__(8);
var PeopleWidgetComponent = (function (_super) {
    __extends(PeopleWidgetComponent, _super);
    function PeopleWidgetComponent(formService, elementRef) {
        var _this = _super.call(this, formService) || this;
        _this.formService = formService;
        _this.elementRef = elementRef;
        _this.popupVisible = false;
        _this.minTermLength = 1;
        _this.users = [];
        return _this;
    }
    PeopleWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.field) {
            var user = this.field.value;
            if (user) {
                this.value = this.getDisplayName(user);
            }
            var params = this.field.params;
            if (params && params['restrictWithGroup']) {
                var restrictWithGroup = params['restrictWithGroup'];
                this.groupId = restrictWithGroup.id;
            }
            if (this.value) {
                this.formService
                    .getWorkflowUsers(this.value, this.groupId)
                    .subscribe(function (result) { return _this.users = result || []; });
            }
        }
    };
    PeopleWidgetComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var onBlurInputEvent = Observable_1.Observable.fromEvent(this.input.nativeElement, 'blur');
        onBlurInputEvent.debounceTime(200).subscribe(function (event) {
            _this.flushValue();
        });
    };
    PeopleWidgetComponent.prototype.onKeyUp = function (event) {
        var _this = this;
        if (this.value && this.value.length >= this.minTermLength) {
            this.formService.getWorkflowUsers(this.value, this.groupId)
                .subscribe(function (result) {
                _this.users = result || [];
                _this.popupVisible = _this.users.length > 0;
            });
        }
        else {
            this.popupVisible = false;
        }
    };
    PeopleWidgetComponent.prototype.onErrorImageLoad = function (user) {
        if (user.userImage) {
            user.userImage = null;
        }
    };
    PeopleWidgetComponent.prototype.flushValue = function () {
        var _this = this;
        this.popupVisible = false;
        var option = this.users.find(function (item) {
            var fullName = _this.getDisplayName(item).toLocaleLowerCase();
            return (_this.value && fullName === _this.value.toLocaleLowerCase());
        });
        if (option) {
            this.field.value = option;
            this.value = this.getDisplayName(option);
        }
        else {
            this.field.value = null;
            this.value = null;
        }
        this.field.updateForm();
    };
    PeopleWidgetComponent.prototype.getDisplayName = function (model) {
        if (model) {
            var displayName = (model.firstName || '') + " " + (model.lastName || '');
            return displayName.trim();
        }
        return '';
    };
    PeopleWidgetComponent.prototype.onItemClick = function (item, event) {
        if (item) {
            this.field.value = item;
            this.value = this.getDisplayName(item);
        }
        if (event) {
            event.preventDefault();
        }
    };
    return PeopleWidgetComponent;
}(widget_component_1.WidgetComponent));
__decorate([
    core_1.ViewChild('inputValue'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], PeopleWidgetComponent.prototype, "input", void 0);
PeopleWidgetComponent = __decorate([
    core_1.Component({
        selector: 'people-widget',
        template: __webpack_require__(566),
        styles: [__webpack_require__(747)],
        host: widget_component_1.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _b || Object, typeof (_c = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _c || Object])
], PeopleWidgetComponent);
exports.PeopleWidgetComponent = PeopleWidgetComponent;
var _a, _b, _c;


/***/ }),

/***/ 334:
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
var form_service_1 = __webpack_require__(4);
var widget_visibility_service_1 = __webpack_require__(25);
var widget_component_1 = __webpack_require__(8);
var RadioButtonsWidgetComponent = (function (_super) {
    __extends(RadioButtonsWidgetComponent, _super);
    function RadioButtonsWidgetComponent(formService, visibilityService, logService) {
        var _this = _super.call(this, formService) || this;
        _this.formService = formService;
        _this.visibilityService = visibilityService;
        _this.logService = logService;
        return _this;
    }
    RadioButtonsWidgetComponent.prototype.ngOnInit = function () {
        if (this.field && this.field.restUrl) {
            if (this.field.form.taskId) {
                this.getOptionsByTaskId();
            }
            else {
                this.getOptionsByProcessDefinitionId();
            }
        }
    };
    RadioButtonsWidgetComponent.prototype.getOptionsByTaskId = function () {
        var _this = this;
        this.formService
            .getRestFieldValues(this.field.form.taskId, this.field.id)
            .subscribe(function (result) {
            _this.field.options = result || [];
            _this.field.updateForm();
        }, function (err) { return _this.handleError(err); });
    };
    RadioButtonsWidgetComponent.prototype.getOptionsByProcessDefinitionId = function () {
        var _this = this;
        this.formService
            .getRestFieldValuesByProcessId(this.field.form.processDefinitionId, this.field.id)
            .subscribe(function (result) {
            _this.field.options = result || [];
            _this.field.updateForm();
        }, function (err) { return _this.handleError(err); });
    };
    RadioButtonsWidgetComponent.prototype.onOptionClick = function (optionSelected) {
        this.field.value = optionSelected;
        this.checkVisibility();
    };
    RadioButtonsWidgetComponent.prototype.checkVisibility = function () {
        this.visibilityService.refreshVisibility(this.field.form);
    };
    RadioButtonsWidgetComponent.prototype.handleError = function (error) {
        this.logService.error(error);
    };
    return RadioButtonsWidgetComponent;
}(widget_component_1.WidgetComponent));
RadioButtonsWidgetComponent = __decorate([
    core_1.Component({
        selector: 'radio-buttons-widget',
        template: __webpack_require__(567),
        styles: [__webpack_require__(748)],
        host: widget_component_1.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _a || Object, typeof (_b = typeof widget_visibility_service_1.WidgetVisibilityService !== "undefined" && widget_visibility_service_1.WidgetVisibilityService) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _c || Object])
], RadioButtonsWidgetComponent);
exports.RadioButtonsWidgetComponent = RadioButtonsWidgetComponent;
var _a, _b, _c;


/***/ }),

/***/ 335:
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
var TabsWidgetComponent = (function () {
    function TabsWidgetComponent() {
        this.tabs = [];
        this.formTabChanged = new core_1.EventEmitter();
        this.visibleTabs = [];
    }
    TabsWidgetComponent.prototype.hasTabs = function () {
        return this.tabs && this.tabs.length > 0;
    };
    TabsWidgetComponent.prototype.ngAfterContentChecked = function () {
        this.filterVisibleTabs();
    };
    TabsWidgetComponent.prototype.filterVisibleTabs = function () {
        this.visibleTabs = this.tabs.filter(function (tab) {
            return tab.isVisible;
        });
    };
    TabsWidgetComponent.prototype.tabChanged = function (field) {
        this.formTabChanged.emit(field);
    };
    return TabsWidgetComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TabsWidgetComponent.prototype, "tabs", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], TabsWidgetComponent.prototype, "formTabChanged", void 0);
TabsWidgetComponent = __decorate([
    core_1.Component({
        selector: 'tabs-widget',
        template: __webpack_require__(568),
        encapsulation: core_1.ViewEncapsulation.None
    })
], TabsWidgetComponent);
exports.TabsWidgetComponent = TabsWidgetComponent;
var _a;


/***/ }),

/***/ 336:
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
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return InputMaskDirective; }),
    multi: true
};
var InputMaskDirective = (function () {
    function InputMaskDirective(el, render) {
        this.el = el;
        this.render = render;
        this.translationMask = {
            '0': { pattern: /\d/ },
            '9': { pattern: /\d/, optional: true },
            '#': { pattern: /\d/, recursive: true },
            'A': { pattern: /[a-zA-Z0-9]/ },
            'S': { pattern: /[a-zA-Z]/ }
        };
        this.byPassKeys = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91];
        this.invalidCharacters = [];
        this._onChange = function (_) {
        };
        this._onTouched = function () {
        };
    }
    InputMaskDirective.prototype.onTextInput = function (event) {
        if (this.inputMask && this.inputMask.mask) {
            this.maskValue(this.el.nativeElement.value, this.el.nativeElement.selectionStart, this.inputMask.mask, this.inputMask.isReversed, event.keyCode);
        }
        else {
            this._onChange(this.el.nativeElement.value);
        }
    };
    InputMaskDirective.prototype.ngOnChanges = function (changes) {
        if (changes['inputMask'] && changes['inputMask'].currentValue['mask']) {
            this.inputMask = changes['inputMask'].currentValue;
        }
    };
    InputMaskDirective.prototype.writeValue = function (value) {
        this.el.nativeElement.value = value;
    };
    InputMaskDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    InputMaskDirective.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    InputMaskDirective.prototype.maskValue = function (actualValue, startCaret, maskToApply, isMaskReversed, keyCode) {
        if (this.byPassKeys.indexOf(keyCode) === -1) {
            var value = this.getMasked(false, actualValue, maskToApply, isMaskReversed);
            var calculatedCaret = this.calculateCaretPosition(startCaret, actualValue, keyCode);
            this.render.setElementAttribute(this.el.nativeElement, 'value', value);
            this.el.nativeElement.value = value;
            this.setValue(value);
            this._onChange(value);
            this.setCaretPosition(calculatedCaret);
        }
    };
    InputMaskDirective.prototype.setCaretPosition = function (caretPosition) {
        this.el.nativeElement.moveStart = caretPosition;
        this.el.nativeElement.moveEnd = caretPosition;
    };
    InputMaskDirective.prototype.calculateCaretPosition = function (caretPosition, newValue, keyCode) {
        var newValueLength = newValue.length;
        var oldValue = this.getValue() || '';
        var oldValueLength = oldValue.length;
        if (keyCode === 8 && oldValue !== newValue) {
            caretPosition = caretPosition - (newValue.slice(0, caretPosition).length - oldValue.slice(0, caretPosition).length);
        }
        else if (oldValue !== newValue) {
            if (caretPosition >= oldValueLength) {
                caretPosition = newValueLength;
            }
            else {
                caretPosition = caretPosition + (newValue.slice(0, caretPosition).length - oldValue.slice(0, caretPosition).length);
            }
        }
        return caretPosition;
    };
    InputMaskDirective.prototype.getMasked = function (skipMaskChars, val, mask, isReversed) {
        if (isReversed === void 0) { isReversed = false; }
        var buf = [], value = val, maskIndex = 0, maskLen = mask.length, valueIndex = 0, valueLength = value.length, offset = 1, addMethod = 'push', resetPos = -1, lastMaskChar, lastUntranslatedMaskChar, check;
        if (isReversed) {
            addMethod = 'unshift';
            offset = -1;
            lastMaskChar = 0;
            maskIndex = maskLen - 1;
            valueIndex = valueLength - 1;
        }
        else {
            lastMaskChar = maskLen - 1;
        }
        check = this.isToCheck(isReversed, maskIndex, maskLen, valueIndex, valueLength);
        while (check) {
            var maskDigit = mask.charAt(maskIndex), valDigit = value.charAt(valueIndex), translation = this.translationMask[maskDigit];
            if (translation) {
                if (valDigit.match(translation.pattern)) {
                    buf[addMethod](valDigit);
                    if (translation.recursive) {
                        if (resetPos === -1) {
                            resetPos = maskIndex;
                        }
                        else if (maskIndex === lastMaskChar) {
                            maskIndex = resetPos - offset;
                        }
                        if (lastMaskChar === resetPos) {
                            maskIndex -= offset;
                        }
                    }
                    maskIndex += offset;
                }
                else if (valDigit === lastUntranslatedMaskChar) {
                    lastUntranslatedMaskChar = undefined;
                }
                else if (translation.optional) {
                    maskIndex += offset;
                    valueIndex -= offset;
                }
                else {
                    this.invalidCharacters.push({
                        index: valueIndex,
                        digit: valDigit,
                        translated: translation.pattern
                    });
                }
                valueIndex += offset;
            }
            else {
                if (!skipMaskChars) {
                    buf[addMethod](maskDigit);
                }
                if (valDigit === maskDigit) {
                    valueIndex += offset;
                }
                else {
                    lastUntranslatedMaskChar = maskDigit;
                }
                maskIndex += offset;
            }
            check = this.isToCheck(isReversed, maskIndex, maskLen, valueIndex, valueLength);
        }
        var lastMaskCharDigit = mask.charAt(lastMaskChar);
        if (maskLen === valueLength + 1 && !this.translationMask[lastMaskCharDigit]) {
            buf.push(lastMaskCharDigit);
        }
        return buf.join('');
    };
    InputMaskDirective.prototype.isToCheck = function (isReversed, maskIndex, maskLen, valueIndex, valueLength) {
        var check = false;
        if (isReversed) {
            check = (maskIndex > -1) && (valueIndex > -1);
        }
        else {
            check = (maskIndex < maskLen) && (valueIndex < valueLength);
        }
        return check;
    };
    InputMaskDirective.prototype.setValue = function (value) {
        this.value = value;
    };
    InputMaskDirective.prototype.getValue = function () {
        return this.value;
    };
    return InputMaskDirective;
}());
__decorate([
    core_1.Input('textMask'),
    __metadata("design:type", Object)
], InputMaskDirective.prototype, "inputMask", void 0);
__decorate([
    core_1.HostListener('input', ['$event']),
    core_1.HostListener('keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InputMaskDirective.prototype, "onTextInput", null);
InputMaskDirective = __decorate([
    core_1.Directive({
        selector: '[textMask]',
        providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _b || Object])
], InputMaskDirective);
exports.InputMaskDirective = InputMaskDirective;
var _a, _b;


/***/ }),

/***/ 337:
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
var form_service_1 = __webpack_require__(4);
var widget_component_1 = __webpack_require__(8);
var TextWidgetComponent = (function (_super) {
    __extends(TextWidgetComponent, _super);
    function TextWidgetComponent(formService) {
        var _this = _super.call(this, formService) || this;
        _this.formService = formService;
        return _this;
    }
    TextWidgetComponent.prototype.ngOnInit = function () {
        if (this.field.params && this.field.params['inputMask']) {
            this.mask = this.field.params['inputMask'];
            this.isMaskReversed = this.field.params['inputMaskReversed'] ? this.field.params['inputMaskReversed'] : false;
        }
    };
    return TextWidgetComponent;
}(widget_component_1.WidgetComponent));
TextWidgetComponent = __decorate([
    core_1.Component({
        selector: 'text-widget',
        template: __webpack_require__(569),
        styles: [__webpack_require__(749)],
        host: widget_component_1.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _a || Object])
], TextWidgetComponent);
exports.TextWidgetComponent = TextWidgetComponent;
var _a;


/***/ }),

/***/ 338:
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
var widget_visibility_service_1 = __webpack_require__(25);
var form_service_1 = __webpack_require__(4);
var widget_component_1 = __webpack_require__(8);
var TypeaheadWidgetComponent = (function (_super) {
    __extends(TypeaheadWidgetComponent, _super);
    function TypeaheadWidgetComponent(formService, visibilityService, logService) {
        var _this = _super.call(this, formService) || this;
        _this.formService = formService;
        _this.visibilityService = visibilityService;
        _this.logService = logService;
        _this.popupVisible = false;
        _this.minTermLength = 1;
        _this.options = [];
        return _this;
    }
    TypeaheadWidgetComponent.prototype.ngOnInit = function () {
        if (this.field.form.taskId) {
            this.getValuesByTaskId();
        }
        else {
            this.getValuesByProcessDefinitionId();
        }
    };
    TypeaheadWidgetComponent.prototype.getValuesByTaskId = function () {
        var _this = this;
        this.formService
            .getRestFieldValues(this.field.form.taskId, this.field.id)
            .subscribe(function (result) {
            var options = result || [];
            _this.field.options = options;
            var fieldValue = _this.field.value;
            if (fieldValue) {
                var toSelect = options.find(function (item) { return item.id === fieldValue; });
                if (toSelect) {
                    _this.value = toSelect.name;
                }
            }
            _this.field.updateForm();
            _this.visibilityService.refreshEntityVisibility(_this.field);
        }, function (err) { return _this.handleError(err); });
    };
    TypeaheadWidgetComponent.prototype.getValuesByProcessDefinitionId = function () {
        var _this = this;
        this.formService
            .getRestFieldValuesByProcessId(this.field.form.processDefinitionId, this.field.id)
            .subscribe(function (result) {
            var options = result || [];
            _this.field.options = options;
            var fieldValue = _this.field.value;
            if (fieldValue) {
                var toSelect = options.find(function (item) { return item.id === fieldValue; });
                if (toSelect) {
                    _this.value = toSelect.name;
                }
            }
            _this.field.updateForm();
            _this.visibilityService.refreshEntityVisibility(_this.field);
        }, function (err) { return _this.handleError(err); });
    };
    TypeaheadWidgetComponent.prototype.getOptions = function () {
        var val = this.value.toLocaleLowerCase();
        return this.field.options.filter(function (item) {
            var name = item.name.toLocaleLowerCase();
            return name.indexOf(val) > -1;
        });
    };
    TypeaheadWidgetComponent.prototype.onKeyUp = function (event) {
        if (this.value && this.value.length >= this.minTermLength) {
            this.options = this.getOptions();
            this.popupVisible = this.options.length > 0;
        }
        else {
            this.popupVisible = false;
        }
    };
    TypeaheadWidgetComponent.prototype.onBlur = function () {
        var _this = this;
        setTimeout(function () {
            _this.flushValue();
            _this.checkVisibility();
        }, 200);
    };
    TypeaheadWidgetComponent.prototype.flushValue = function () {
        this.popupVisible = false;
        var options = this.field.options || [];
        var lValue = this.value ? this.value.toLocaleLowerCase() : null;
        var field = options.find(function (item) { return item.name && item.name.toLocaleLowerCase() === lValue; });
        if (field) {
            this.field.value = field.id;
            this.value = field.name;
        }
        else {
            this.field.value = null;
            this.value = null;
        }
        this.field.updateForm();
    };
    TypeaheadWidgetComponent.prototype.onItemClick = function (item, event) {
        if (item) {
            this.field.value = item.id;
            this.value = item.name;
            this.checkVisibility();
        }
        if (event) {
            event.preventDefault();
        }
    };
    TypeaheadWidgetComponent.prototype.handleError = function (error) {
        this.logService.error(error);
    };
    TypeaheadWidgetComponent.prototype.checkVisibility = function () {
        this.visibilityService.refreshVisibility(this.field.form);
    };
    return TypeaheadWidgetComponent;
}(widget_component_1.WidgetComponent));
TypeaheadWidgetComponent = __decorate([
    core_1.Component({
        selector: 'typeahead-widget',
        template: __webpack_require__(570),
        styles: [__webpack_require__(750)],
        host: widget_component_1.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _a || Object, typeof (_b = typeof widget_visibility_service_1.WidgetVisibilityService !== "undefined" && widget_visibility_service_1.WidgetVisibilityService) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _c || Object])
], TypeaheadWidgetComponent);
exports.TypeaheadWidgetComponent = TypeaheadWidgetComponent;
var _a, _b, _c;


/***/ }),

/***/ 339:
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
var form_service_1 = __webpack_require__(4);
var widget_component_1 = __webpack_require__(8);
var UnknownWidgetComponent = (function (_super) {
    __extends(UnknownWidgetComponent, _super);
    function UnknownWidgetComponent(formService) {
        var _this = _super.call(this, formService) || this;
        _this.formService = formService;
        return _this;
    }
    return UnknownWidgetComponent;
}(widget_component_1.WidgetComponent));
UnknownWidgetComponent = __decorate([
    core_1.Component({
        selector: 'unknown-widget',
        template: "\n            <md-list class=\"adf-unknown-widget\">\n                <md-list-item>\n                     <md-icon class=\"md-24\">error_outline</md-icon>\n                     <span class=\"adf-unknown-text\">Unknown type: {{field.type}}</span>\n                </md-list-item>\n            </md-list>\n\n    ",
        styles: [__webpack_require__(751)],
        host: widget_component_1.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _a || Object])
], UnknownWidgetComponent);
exports.UnknownWidgetComponent = UnknownWidgetComponent;
var _a;


/***/ }),

/***/ 340:
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
var Rx_1 = __webpack_require__(2);
var form_service_1 = __webpack_require__(4);
var widget_component_1 = __webpack_require__(8);
var UploadWidgetComponent = (function (_super) {
    __extends(UploadWidgetComponent, _super);
    function UploadWidgetComponent(formService, logService, thumbnailService) {
        var _this = _super.call(this, formService) || this;
        _this.formService = formService;
        _this.logService = logService;
        _this.thumbnailService = thumbnailService;
        _this.multipleOption = '';
        return _this;
    }
    UploadWidgetComponent.prototype.ngOnInit = function () {
        if (this.field &&
            this.field.value &&
            this.field.value.length > 0) {
            this.hasFile = true;
        }
        this.getMultipleFileParam();
    };
    UploadWidgetComponent.prototype.reset = function (file) {
        if (this.field) {
            this.removeElementFromList(this.field.value, file);
            this.removeElementFromList(this.field.json.value, file);
            this.hasFile = this.field.value.length > 0;
            this.resetFormValueWithNoFiles();
        }
    };
    UploadWidgetComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        var files = event.target.files;
        var filesSaved = [];
        if (files && files.length > 0) {
            Rx_1.Observable.from(files).
                flatMap(function (file) { return _this.uploadRawContent(file); }).subscribe(function (res) {
                filesSaved.push(res);
            }, function (error) {
                _this.logService.error('Error uploading file. See console output for more details.');
            }, function () {
                _this.field.value = filesSaved;
                _this.field.json.value = filesSaved;
            });
        }
    };
    UploadWidgetComponent.prototype.uploadRawContent = function (file) {
        var _this = this;
        return this.formService.createTemporaryRawRelatedContent(file)
            .map(function (response) {
            _this.logService.info(response);
            return response;
        });
    };
    UploadWidgetComponent.prototype.getMultipleFileParam = function () {
        if (this.field &&
            this.field.params &&
            this.field.params.multiple) {
            this.multipleOption = this.field.params.multiple ? 'multiple' : '';
        }
    };
    UploadWidgetComponent.prototype.decode = function (fileName) {
        return decodeURI(fileName);
    };
    UploadWidgetComponent.prototype.removeElementFromList = function (list, element) {
        var index = list.indexOf(element);
        if (index !== -1) {
            list.splice(index, 1);
        }
    };
    UploadWidgetComponent.prototype.resetFormValueWithNoFiles = function () {
        if (this.field.value.length === 0) {
            this.field.value = null;
            this.field.json.value = null;
        }
    };
    UploadWidgetComponent.prototype.getIcon = function (mimeType) {
        return this.thumbnailService.getMimeTypeIcon(mimeType);
    };
    UploadWidgetComponent.prototype.fileClicked = function (file) {
        var _this = this;
        this.formService.getFileRawContent(file.id).subscribe(function (blob) {
            file.contentBlob = blob;
            _this.formService.formContentClicked.next(file);
        }, function (error) {
            _this.logService.error('Unable to send evento for file ' + file.name);
        });
    };
    return UploadWidgetComponent;
}(widget_component_1.WidgetComponent));
UploadWidgetComponent = __decorate([
    core_1.Component({
        selector: 'upload-widget',
        template: __webpack_require__(571),
        styles: [__webpack_require__(752)],
        host: widget_component_1.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.ThumbnailService !== "undefined" && ng2_alfresco_core_1.ThumbnailService) === "function" && _c || Object])
], UploadWidgetComponent);
exports.UploadWidgetComponent = UploadWidgetComponent;
var _a, _b, _c;


/***/ }),

/***/ 341:
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
Object.defineProperty(exports, "__esModule", { value: true });
var form_event_1 = __webpack_require__(108);
var FormFieldEvent = (function (_super) {
    __extends(FormFieldEvent, _super);
    function FormFieldEvent(form, field) {
        var _this = _super.call(this, form) || this;
        _this.field = field;
        return _this;
    }
    return FormFieldEvent;
}(form_event_1.FormEvent));
exports.FormFieldEvent = FormFieldEvent;


/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(647);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 351:
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
var form_rendering_service_1 = __webpack_require__(89);
var widget_visibility_service_1 = __webpack_require__(25);
var index_1 = __webpack_require__(68);
var FormFieldComponent = (function () {
    function FormFieldComponent(formRenderingService, componentFactoryResolver, visibilityService, compiler) {
        this.formRenderingService = formRenderingService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.visibilityService = visibilityService;
        this.compiler = compiler;
        this.field = null;
        this.focus = false;
    }
    FormFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        var originalField = this.getField();
        if (originalField) {
            var customTemplate = this.field.form.customFieldTemplates[originalField.type];
            if (customTemplate && this.hasController(originalField.type)) {
                var factory = this.getComponentFactorySync(originalField.type, customTemplate);
                this.componentRef = this.container.createComponent(factory);
                var instance = this.componentRef.instance;
                if (instance) {
                    instance.field = originalField;
                }
            }
            else {
                var componentType = this.formRenderingService.resolveComponentType(originalField);
                if (componentType) {
                    var factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
                    this.componentRef = this.container.createComponent(factory);
                    var instance = this.componentRef.instance;
                    instance.field = this.field;
                    instance.fieldChanged.subscribe(function (field) {
                        if (field && _this.field.form) {
                            _this.visibilityService.refreshVisibility(_this.field.form);
                        }
                    });
                }
            }
        }
    };
    FormFieldComponent.prototype.ngOnDestroy = function () {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    };
    FormFieldComponent.prototype.getField = function () {
        return (this.field.params && this.field.params.field) ? this.field.params.field : this.field;
    };
    FormFieldComponent.prototype.hasController = function (type) {
        return (adf && adf.components && adf.components[type]);
    };
    FormFieldComponent.prototype.getComponentFactorySync = function (type, template) {
        var componentInfo = adf.components[type];
        if (componentInfo.factory) {
            return componentInfo.factory;
        }
        var metadata = {
            selector: "runtime-component-" + type,
            template: template
        };
        var factory = this.createComponentFactorySync(this.compiler, metadata, componentInfo.class);
        componentInfo.factory = factory;
        return factory;
    };
    FormFieldComponent.prototype.createComponentFactorySync = function (compiler, metadata, componentClass) {
        var cmpClass = componentClass || (function () {
            function RuntimeComponent() {
            }
            return RuntimeComponent;
        }());
        var decoratedCmp = core_1.Component(metadata)(cmpClass);
        var RuntimeComponentModule = (function () {
            function RuntimeComponentModule() {
            }
            return RuntimeComponentModule;
        }());
        RuntimeComponentModule = __decorate([
            core_1.NgModule({ imports: [ng2_alfresco_core_1.CoreModule], declarations: [decoratedCmp] })
        ], RuntimeComponentModule);
        var module = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
        return module.componentFactories.find(function (x) { return x.componentType === decoratedCmp; });
    };
    FormFieldComponent.prototype.focusToggle = function () {
        this.focus = !this.focus;
    };
    return FormFieldComponent;
}());
__decorate([
    core_1.ViewChild('container', { read: core_1.ViewContainerRef }),
    __metadata("design:type", typeof (_a = typeof core_1.ViewContainerRef !== "undefined" && core_1.ViewContainerRef) === "function" && _a || Object)
], FormFieldComponent.prototype, "container", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof index_1.FormFieldModel !== "undefined" && index_1.FormFieldModel) === "function" && _b || Object)
], FormFieldComponent.prototype, "field", void 0);
FormFieldComponent = __decorate([
    core_1.Component({
        selector: 'adf-form-field, form-field',
        template: "\n        <div [hidden]=\"!field?.isVisible\"\n            [class.adf-focus]=\"focus\"\n            (focusin)=\"focusToggle()\"\n            (focusout)=\"focusToggle()\">\n            <div #container></div>\n        </div>\n    ",
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof form_rendering_service_1.FormRenderingService !== "undefined" && form_rendering_service_1.FormRenderingService) === "function" && _c || Object, typeof (_d = typeof core_1.ComponentFactoryResolver !== "undefined" && core_1.ComponentFactoryResolver) === "function" && _d || Object, typeof (_e = typeof widget_visibility_service_1.WidgetVisibilityService !== "undefined" && widget_visibility_service_1.WidgetVisibilityService) === "function" && _e || Object, typeof (_f = typeof core_1.Compiler !== "undefined" && core_1.Compiler) === "function" && _f || Object])
], FormFieldComponent);
exports.FormFieldComponent = FormFieldComponent;
var _a, _b, _c, _d, _e, _f;


/***/ }),

/***/ 352:
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
        material_1.MdAutocompleteModule, material_1.MdButtonModule, material_1.MdCardModule, material_1.MdCheckboxModule,
        material_1.MdDatepickerModule, material_1.MdGridListModule, material_1.MdIconModule, material_1.MdInputModule, material_1.MdListModule,
        material_1.MdOptionModule, material_1.MdRadioModule, material_1.MdSelectModule, material_1.MdSlideToggleModule, material_1.MdTableModule, material_1.MdTabsModule
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
        providers: [
            { provide: material_1.MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'never' } }
        ],
        imports: modules(),
        exports: modules()
    })
], MaterialModule);
exports.MaterialModule = MaterialModule;


/***/ }),

/***/ 4:
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
var Rx_1 = __webpack_require__(2);
var form_definition_model_1 = __webpack_require__(461);
var index_1 = __webpack_require__(68);
var ecm_model_service_1 = __webpack_require__(72);
var FormService = FormService_1 = (function () {
    function FormService(ecmModelService, apiService, logService) {
        this.ecmModelService = ecmModelService;
        this.apiService = apiService;
        this.logService = logService;
        this.formLoaded = new Rx_1.Subject();
        this.formDataRefreshed = new Rx_1.Subject();
        this.formFieldValueChanged = new Rx_1.Subject();
        this.formEvents = new Rx_1.Subject();
        this.taskCompleted = new Rx_1.Subject();
        this.taskCompletedError = new Rx_1.Subject();
        this.taskSaved = new Rx_1.Subject();
        this.taskSavedError = new Rx_1.Subject();
        this.formContentClicked = new Rx_1.Subject();
        this.validateForm = new Rx_1.Subject();
        this.validateFormField = new Rx_1.Subject();
        this.executeOutcome = new Rx_1.Subject();
    }
    Object.defineProperty(FormService.prototype, "contentApi", {
        get: function () {
            return this.apiService.getInstance().activiti.contentApi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormService.prototype, "taskApi", {
        get: function () {
            return this.apiService.getInstance().activiti.taskApi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormService.prototype, "modelsApi", {
        get: function () {
            return this.apiService.getInstance().activiti.modelsApi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormService.prototype, "editorApi", {
        get: function () {
            return this.apiService.getInstance().activiti.editorApi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormService.prototype, "processApi", {
        get: function () {
            return this.apiService.getInstance().activiti.processApi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormService.prototype, "usersWorkflowApi", {
        get: function () {
            return this.apiService.getInstance().activiti.usersWorkflowApi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormService.prototype, "groupsApi", {
        get: function () {
            return this.apiService.getInstance().activiti.groupsApi;
        },
        enumerable: true,
        configurable: true
    });
    FormService.prototype.parseForm = function (json, data, readOnly) {
        if (readOnly === void 0) { readOnly = false; }
        if (json) {
            var form = new index_1.FormModel(json.formDefinition, data, readOnly, this);
            if (!json.fields) {
                form.outcomes = [
                    new index_1.FormOutcomeModel(form, {
                        id: '$custom',
                        name: index_1.FormOutcomeModel.SAVE_ACTION,
                        isSystem: true
                    })
                ];
            }
            return form;
        }
        return null;
    };
    FormService.prototype.createFormFromANode = function (formName) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            _this.createForm(formName).subscribe(function (form) {
                _this.ecmModelService.searchEcmType(formName, ecm_model_service_1.EcmModelService.MODEL_NAME).subscribe(function (customType) {
                    var formDefinitionModel = new form_definition_model_1.FormDefinitionModel(form.id, form.name, form.lastUpdatedByFullName, form.lastUpdated, customType.entry.properties);
                    _this.addFieldsToAForm(form.id, formDefinitionModel).subscribe(function (formData) {
                        observer.next(formData);
                        observer.complete();
                    }, function (err) { return _this.handleError(err); });
                }, function (err) { return _this.handleError(err); });
            }, function (err) { return _this.handleError(err); });
        });
    };
    FormService.prototype.createForm = function (formName) {
        var dataModel = {
            name: formName,
            description: '',
            modelType: 2,
            stencilSet: 0
        };
        return Rx_1.Observable.fromPromise(this.modelsApi.createModel(dataModel));
    };
    FormService.prototype.saveForm = function (formId, formModel) {
        return Rx_1.Observable.fromPromise(this.editorApi.saveForm(formId, formModel));
    };
    FormService.prototype.addFieldsToAForm = function (formId, formModel) {
        console.log('addFieldsToAForm is deprecated in 1.7.0, use saveForm API instead');
        return Rx_1.Observable.fromPromise(this.editorApi.saveForm(formId, formModel));
    };
    FormService.prototype.searchFrom = function (name) {
        var _this = this;
        var opts = {
            'modelType': 2
        };
        return Rx_1.Observable.fromPromise(this.modelsApi.getModels(opts))
            .map(function (forms) {
            return forms.data.find(function (formdata) { return formdata.name === name; });
        })
            .catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.getForms = function () {
        var _this = this;
        var opts = {
            'modelType': 2
        };
        return Rx_1.Observable.fromPromise(this.modelsApi.getModels(opts))
            .map(this.toJsonArray)
            .catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.getProcessDefinitions = function () {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.processApi.getProcessDefinitions({}))
            .map(this.toJsonArray)
            .catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.getTasks = function () {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.taskApi.listTasks({}))
            .map(this.toJsonArray)
            .catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.getTask = function (taskId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.taskApi.getTask(taskId))
            .map(this.toJson)
            .catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.saveTaskForm = function (taskId, formValues) {
        var _this = this;
        var body = JSON.stringify({ values: formValues });
        return Rx_1.Observable.fromPromise(this.taskApi.saveTaskForm(taskId, body))
            .catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.completeTaskForm = function (taskId, formValues, outcome) {
        var _this = this;
        var data = { values: formValues };
        if (outcome) {
            data.outcome = outcome;
        }
        var body = JSON.stringify(data);
        return Rx_1.Observable.fromPromise(this.taskApi.completeTaskForm(taskId, body))
            .catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.getTaskForm = function (taskId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.taskApi.getTaskForm(taskId))
            .map(this.toJson)
            .catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.getFormDefinitionById = function (formId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.editorApi.getForm(formId))
            .map(this.toJson)
            .catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.getFormDefinitionByName = function (name) {
        var _this = this;
        var opts = {
            'filter': 'myReusableForms',
            'filterText': name,
            'modelType': 2
        };
        return Rx_1.Observable.fromPromise(this.modelsApi.getModels(opts))
            .map(this.getFormId)
            .catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.getStartFormInstance = function (processId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.processApi.getProcessInstanceStartForm(processId))
            .map(this.toJson)
            .catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.getStartFormDefinition = function (processId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.processApi.getProcessDefinitionStartForm(processId))
            .map(this.toJson)
            .catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.createTemporaryRawRelatedContent = function (file) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.contentApi.createTemporaryRawRelatedContent(file)).catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.getFileContent = function (contentId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.contentApi.getContent(contentId)).catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.getFileRawContent = function (contentId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.contentApi.getRawContent(contentId)).catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.getFileRawContentUrl = function (contentId) {
        return this.contentApi.getRawContentUrl(contentId);
    };
    FormService.prototype.getContentThumbnailUrl = function (contentId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.contentApi.getContentThumbnailUrl(contentId)).catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.getRestFieldValues = function (taskId, field) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.taskApi.getRestFieldValues(taskId, field)).catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.getRestFieldValuesByProcessId = function (processDefinitionId, field) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.processApi.getRestFieldValues(processDefinitionId, field)).catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.getRestFieldValuesColumnByProcessId = function (processDefinitionId, field, column) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.processApi.getRestTableFieldValues(processDefinitionId, field, column)).catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.getRestFieldValuesColumn = function (taskId, field, column) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.taskApi.getRestFieldValuesColumn(taskId, field, column)).catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.getUserProfileImageApi = function (userId) {
        return this.apiService.getInstance().activiti.userApi.getUserProfilePictureUrl(userId);
    };
    FormService.prototype.getWorkflowUsers = function (filter, groupId) {
        var _this = this;
        var option = { filter: filter };
        if (groupId) {
            option.groupId = groupId;
        }
        return Rx_1.Observable.fromPromise(this.usersWorkflowApi.getUsers(option))
            .switchMap(function (response) { return response.data || []; })
            .map(function (user) {
            user.userImage = _this.getUserProfileImageApi(user.id);
            return Rx_1.Observable.of(user);
        })
            .combineAll()
            .catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.getWorkflowGroups = function (filter, groupId) {
        var _this = this;
        var option = { filter: filter };
        if (groupId) {
            option.groupId = groupId;
        }
        return Rx_1.Observable.fromPromise(this.groupsApi.getGroups(option))
            .map(function (response) { return response.data || []; })
            .catch(function (err) { return _this.handleError(err); });
    };
    FormService.prototype.getFormId = function (res) {
        var result = null;
        if (res && res.data && res.data.length > 0) {
            result = res.data[0].id;
        }
        return result;
    };
    FormService.prototype.toJson = function (res) {
        if (res) {
            return res || {};
        }
        return {};
    };
    FormService.prototype.toJsonArray = function (res) {
        if (res) {
            return res.data || [];
        }
        return [];
    };
    FormService.prototype.handleError = function (error) {
        var errMsg = FormService_1.UNKNOWN_ERROR_MESSAGE;
        if (error) {
            errMsg = (error.message) ? error.message :
                error.status ? error.status + " - " + error.statusText : FormService_1.GENERIC_ERROR_MESSAGE;
        }
        this.logService.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    return FormService;
}());
FormService.UNKNOWN_ERROR_MESSAGE = 'Unknown error';
FormService.GENERIC_ERROR_MESSAGE = 'Server error';
FormService = FormService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ecm_model_service_1.EcmModelService !== "undefined" && ecm_model_service_1.EcmModelService) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _c || Object])
], FormService);
exports.FormService = FormService;
var FormService_1, _a, _b, _c;


/***/ }),

/***/ 40:
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
var form_service_1 = __webpack_require__(4);
var widget_visibility_service_1 = __webpack_require__(25);
var form_component_1 = __webpack_require__(30);
var index_1 = __webpack_require__(68);
var StartFormComponent = (function (_super) {
    __extends(StartFormComponent, _super);
    function StartFormComponent(formService, visibilityService, logService) {
        var _this = _super.call(this, formService, visibilityService, null, null) || this;
        _this.showOutcomeButtons = true;
        _this.showRefreshButton = true;
        _this.readOnlyForm = false;
        _this.outcomeClick = new core_1.EventEmitter();
        _this.formContentClicked = new core_1.EventEmitter();
        _this.outcomesContainer = null;
        _this.showTitle = false;
        return _this;
    }
    StartFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formService.formContentClicked.subscribe(function (content) {
            _this.formContentClicked.emit(content);
        });
    };
    StartFormComponent.prototype.ngOnChanges = function (changes) {
        var processDefinitionId = changes['processDefinitionId'];
        if (processDefinitionId && processDefinitionId.currentValue) {
            this.visibilityService.cleanProcessVariable();
            this.getStartFormDefinition(processDefinitionId.currentValue);
            return;
        }
        var processId = changes['processId'];
        if (processId && processId.currentValue) {
            this.visibilityService.cleanProcessVariable();
            this.loadStartForm(processId.currentValue);
            return;
        }
    };
    StartFormComponent.prototype.loadStartForm = function (processId) {
        var _this = this;
        this.formService
            .getStartFormInstance(processId)
            .subscribe(function (form) {
            _this.formName = form.name;
            form.processDefinitionId = _this.processDefinitionId;
            _this.form = _this.parseForm(form);
            _this.form.readOnly = _this.readOnlyForm;
            _this.onFormLoaded(_this.form);
        }, function (error) { return _this.handleError(error); });
    };
    StartFormComponent.prototype.getStartFormDefinition = function (processId) {
        var _this = this;
        this.formService
            .getStartFormDefinition(processId)
            .subscribe(function (form) {
            _this.formName = form.processDefinitionName;
            _this.form = _this.parseForm(form);
            _this.form.readOnly = _this.readOnlyForm;
            _this.onFormLoaded(_this.form);
        }, function (error) { return _this.handleError(error); });
    };
    StartFormComponent.prototype.isOutcomeButtonVisible = function (outcome, isFormReadOnly) {
        if (outcome && outcome.isSystem && (outcome.name === index_1.FormOutcomeModel.SAVE_ACTION ||
            outcome.name === index_1.FormOutcomeModel.COMPLETE_ACTION)) {
            return false;
        }
        else if (outcome && outcome.name === index_1.FormOutcomeModel.START_PROCESS_ACTION) {
            return true;
        }
        return _super.prototype.isOutcomeButtonVisible.call(this, outcome, isFormReadOnly);
    };
    StartFormComponent.prototype.saveTaskForm = function () {
    };
    StartFormComponent.prototype.onRefreshClicked = function () {
        if (this.processDefinitionId) {
            this.visibilityService.cleanProcessVariable();
            this.getStartFormDefinition(this.processDefinitionId);
        }
        else if (this.processId) {
            this.visibilityService.cleanProcessVariable();
            this.loadStartForm(this.processId);
        }
    };
    StartFormComponent.prototype.completeTaskForm = function (outcome) {
        this.outcomeClick.emit(outcome);
    };
    return StartFormComponent;
}(form_component_1.FormComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StartFormComponent.prototype, "processDefinitionId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StartFormComponent.prototype, "processId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], StartFormComponent.prototype, "showOutcomeButtons", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], StartFormComponent.prototype, "showRefreshButton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], StartFormComponent.prototype, "readOnlyForm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], StartFormComponent.prototype, "outcomeClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], StartFormComponent.prototype, "formContentClicked", void 0);
__decorate([
    core_1.ViewChild('outcomesContainer', {}),
    __metadata("design:type", typeof (_c = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _c || Object)
], StartFormComponent.prototype, "outcomesContainer", void 0);
StartFormComponent = __decorate([
    core_1.Component({
        selector: 'adf-start-form, activiti-start-form',
        template: __webpack_require__(546),
        styles: [__webpack_require__(347)],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _d || Object, typeof (_e = typeof widget_visibility_service_1.WidgetVisibilityService !== "undefined" && widget_visibility_service_1.WidgetVisibilityService) === "function" && _e || Object, typeof (_f = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _f || Object])
], StartFormComponent);
exports.StartFormComponent = StartFormComponent;
var _a, _b, _c, _d, _e, _f;


/***/ }),

/***/ 41:
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
var content_link_model_1 = __webpack_require__(315);
var form_service_1 = __webpack_require__(4);
var ContentWidgetComponent = (function () {
    function ContentWidgetComponent(formService, logService, contentService) {
        this.formService = formService;
        this.logService = logService;
        this.contentService = contentService;
        this.showDocumentContent = true;
        this.contentClick = new core_1.EventEmitter();
        this.thumbnailLoaded = new core_1.EventEmitter();
        this.contentLoaded = new core_1.EventEmitter();
        this.error = new core_1.EventEmitter();
    }
    ContentWidgetComponent.prototype.ngOnChanges = function (changes) {
        var contentId = changes['id'];
        if (contentId && contentId.currentValue) {
            this.loadContent(contentId.currentValue);
        }
    };
    ContentWidgetComponent.prototype.loadContent = function (id) {
        var _this = this;
        this.formService
            .getFileContent(id)
            .subscribe(function (response) {
            _this.content = new content_link_model_1.ContentLinkModel(response);
            _this.contentLoaded.emit(_this.content);
            _this.loadThumbnailUrl(_this.content);
        }, function (error) {
            _this.error.emit(error);
        });
    };
    ContentWidgetComponent.prototype.loadThumbnailUrl = function (content) {
        var _this = this;
        if (this.content.isThumbnailSupported()) {
            var observable = void 0;
            if (this.content.isTypeImage()) {
                observable = this.formService.getFileRawContent(content.id);
            }
            else {
                observable = this.formService.getContentThumbnailUrl(content.id);
            }
            if (observable) {
                observable.subscribe(function (response) {
                    _this.content.thumbnailUrl = _this.contentService.createTrustedUrl(response);
                    _this.thumbnailLoaded.emit(_this.content.thumbnailUrl);
                }, function (error) {
                    _this.error.emit(error);
                });
            }
        }
    };
    ContentWidgetComponent.prototype.openViewer = function (content) {
        var _this = this;
        this.formService.getFileRawContent(content.id).subscribe(function (blob) {
            content.contentBlob = blob;
            _this.contentClick.emit(content);
            _this.logService.info('Content clicked' + content.id);
            _this.formService.formContentClicked.next(content);
        }, function (error) {
            _this.error.emit(error);
        });
    };
    ContentWidgetComponent.prototype.download = function (content) {
        var _this = this;
        this.formService.getFileRawContent(content.id).subscribe(function (blob) { return _this.contentService.downloadBlob(blob, content.name); }, function (error) {
            _this.error.emit(error);
        });
    };
    return ContentWidgetComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ContentWidgetComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ContentWidgetComponent.prototype, "showDocumentContent", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ContentWidgetComponent.prototype, "contentClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], ContentWidgetComponent.prototype, "thumbnailLoaded", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], ContentWidgetComponent.prototype, "contentLoaded", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], ContentWidgetComponent.prototype, "error", void 0);
ContentWidgetComponent = __decorate([
    core_1.Component({
        selector: 'adf-content, activiti-content',
        template: __webpack_require__(551),
        styles: [__webpack_require__(733)],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _d || Object, typeof (_e = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _e || Object, typeof (_f = typeof ng2_alfresco_core_1.ContentService !== "undefined" && ng2_alfresco_core_1.ContentService) === "function" && _f || Object])
], ContentWidgetComponent);
exports.ContentWidgetComponent = ContentWidgetComponent;
var _a, _b, _c, _d, _e, _f;


/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".attach-widget {\n    width:100%\n}\n\n.attach-widget__icon {\n    float: left;\n}\n\n.attach-widget__file {\n    margin-top: 4px;\n}\n\n.attach-widget__reset {\n    margin-top: 4px;\n}\n", ""]);

// exports


/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".row-editor {\n    padding: 8px;\n}\n\n.row-editor__validation-summary {\n    visibility: hidden;\n}\n\n.row-editor__invalid .row-editor__validation-summary {\n    padding-left: 16px;\n    padding-right: 16px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    color: #d50000;\n    visibility: visible;\n}\n", ""]);

// exports


/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(412);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(413);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 451:
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
Object.defineProperty(exports, "__esModule", { value: true });
var container_model_1 = __webpack_require__(190);
var form_field_types_1 = __webpack_require__(82);
var ContainerWidgetComponentModel = (function (_super) {
    __extends(ContainerWidgetComponentModel, _super);
    function ContainerWidgetComponentModel(field) {
        var _this = _super.call(this, field) || this;
        _this.columns = [];
        _this.isExpanded = true;
        _this.rowspan = 1;
        _this.colspan = 1;
        if (_this.field) {
            _this.columns = _this.field.columns || [];
            _this.isExpanded = !_this.isCollapsedByDefault();
            _this.colspan = field.colspan;
            _this.rowspan = field.rowspan;
        }
        return _this;
    }
    ContainerWidgetComponentModel.prototype.isGroup = function () {
        return this.type === form_field_types_1.FormFieldTypes.GROUP;
    };
    ContainerWidgetComponentModel.prototype.isCollapsible = function () {
        var allowCollapse = false;
        if (this.isGroup() && this.field.params['allowCollapse']) {
            allowCollapse = this.field.params['allowCollapse'];
        }
        return allowCollapse;
    };
    ContainerWidgetComponentModel.prototype.isCollapsedByDefault = function () {
        var collapseByDefault = false;
        if (this.isCollapsible() && this.field.params['collapseByDefault']) {
            collapseByDefault = this.field.params['collapseByDefault'];
        }
        return collapseByDefault;
    };
    return ContainerWidgetComponentModel;
}(container_model_1.ContainerModel));
exports.ContainerWidgetComponentModel = ContainerWidgetComponentModel;


/***/ }),

/***/ 452:
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


/***/ }),

/***/ 453:
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


/***/ }),

/***/ 454:
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


/***/ }),

/***/ 455:
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
var FormOutcomeEvent = (function () {
    function FormOutcomeEvent(outcome) {
        this._defaultPrevented = false;
        this._outcome = outcome;
    }
    Object.defineProperty(FormOutcomeEvent.prototype, "outcome", {
        get: function () {
            return this._outcome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormOutcomeEvent.prototype, "defaultPrevented", {
        get: function () {
            return this._defaultPrevented;
        },
        enumerable: true,
        configurable: true
    });
    FormOutcomeEvent.prototype.preventDefault = function () {
        this._defaultPrevented = true;
    };
    return FormOutcomeEvent;
}());
exports.FormOutcomeEvent = FormOutcomeEvent;


/***/ }),

/***/ 456:
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


/***/ }),

/***/ 457:
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
var index_1 = __webpack_require__(111);
var container_model_1 = __webpack_require__(190);
var form_field_types_1 = __webpack_require__(82);
var form_field_model_1 = __webpack_require__(316);
var form_outcome_model_1 = __webpack_require__(317);
var tab_model_1 = __webpack_require__(318);
var form_field_validator_1 = __webpack_require__(84);
var FormModel = (function () {
    function FormModel(json, data, readOnly, formService) {
        if (readOnly === void 0) { readOnly = false; }
        var _this = this;
        this.formService = formService;
        this.taskName = FormModel.UNSET_TASK_NAME;
        this._isValid = true;
        this.readOnly = false;
        this.tabs = [];
        this.fields = [];
        this.outcomes = [];
        this.customFieldTemplates = {};
        this.fieldValidators = form_field_validator_1.FORM_FIELD_VALIDATORS.slice();
        this.values = {};
        this.readOnly = readOnly;
        if (json) {
            this.json = json;
            this.id = json.id;
            this.name = json.name;
            this.taskId = json.taskId;
            this.taskName = json.taskName || json.name || FormModel.UNSET_TASK_NAME;
            this.processDefinitionId = json.processDefinitionId;
            this.customFieldTemplates = json.customFieldTemplates || {};
            this.selectedOutcome = json.selectedOutcome || {};
            this.className = json.className || '';
            var tabCache_1 = {};
            this.tabs = (json.tabs || []).map(function (t) {
                var model = new tab_model_1.TabModel(_this, t);
                tabCache_1[model.id] = model;
                return model;
            });
            this.fields = this.parseRootFields(json);
            if (data) {
                this.loadData(data);
            }
            for (var i = 0; i < this.fields.length; i++) {
                var field = this.fields[i];
                if (field.tab) {
                    var tab = tabCache_1[field.tab];
                    if (tab) {
                        tab.fields.push(field);
                    }
                }
            }
            if (json.fields) {
                var saveOutcome = new form_outcome_model_1.FormOutcomeModel(this, { id: FormModel.SAVE_OUTCOME, name: 'Save', isSystem: true });
                var completeOutcome = new form_outcome_model_1.FormOutcomeModel(this, { id: FormModel.COMPLETE_OUTCOME, name: 'Complete', isSystem: true });
                var startProcessOutcome = new form_outcome_model_1.FormOutcomeModel(this, { id: FormModel.START_PROCESS_OUTCOME, name: 'Start Process', isSystem: true });
                var customOutcomes = (json.outcomes || []).map(function (obj) { return new form_outcome_model_1.FormOutcomeModel(_this, obj); });
                this.outcomes = [saveOutcome].concat(customOutcomes.length > 0 ? customOutcomes : [completeOutcome, startProcessOutcome]);
            }
        }
        this.validateForm();
    }
    Object.defineProperty(FormModel.prototype, "isValid", {
        get: function () {
            return this._isValid;
        },
        enumerable: true,
        configurable: true
    });
    FormModel.prototype.hasTabs = function () {
        return this.tabs && this.tabs.length > 0;
    };
    FormModel.prototype.hasFields = function () {
        return this.fields && this.fields.length > 0;
    };
    FormModel.prototype.hasOutcomes = function () {
        return this.outcomes && this.outcomes.length > 0;
    };
    FormModel.prototype.onFormFieldChanged = function (field) {
        this.validateField(field);
        if (this.formService) {
            this.formService.formFieldValueChanged.next(new index_1.FormFieldEvent(this, field));
        }
    };
    FormModel.prototype.getFieldById = function (fieldId) {
        return this.getFormFields().find(function (field) { return field.id === fieldId; });
    };
    FormModel.prototype.getFormFields = function () {
        var result = [];
        for (var i = 0; i < this.fields.length; i++) {
            var field = this.fields[i];
            if (field instanceof container_model_1.ContainerModel) {
                var container = field;
                result.push(container.field);
                container.field.columns.forEach(function (column) {
                    result.push.apply(result, column.fields);
                });
            }
        }
        return result;
    };
    FormModel.prototype.validateForm = function () {
        var validateFormEvent = new index_1.ValidateFormEvent(this);
        if (this.formService) {
            this.formService.validateForm.next(validateFormEvent);
        }
        this._isValid = validateFormEvent.isValid;
        if (validateFormEvent.defaultPrevented) {
            return;
        }
        if (validateFormEvent.isValid) {
            var fields = this.getFormFields();
            for (var i = 0; i < fields.length; i++) {
                if (!fields[i].validate()) {
                    this._isValid = false;
                    return;
                }
            }
        }
    };
    FormModel.prototype.validateField = function (field) {
        if (!field) {
            return;
        }
        var validateFieldEvent = new index_1.ValidateFormFieldEvent(this, field);
        if (this.formService) {
            this.formService.validateFormField.next(validateFieldEvent);
        }
        if (!validateFieldEvent.isValid) {
            this._isValid = false;
            return;
        }
        if (validateFieldEvent.defaultPrevented) {
            return;
        }
        if (!field.validate()) {
            this._isValid = false;
            return;
        }
        this.validateForm();
    };
    FormModel.prototype.parseRootFields = function (json) {
        var fields = [];
        if (json.fields) {
            fields = json.fields;
        }
        else if (json.formDefinition && json.formDefinition.fields) {
            fields = json.formDefinition.fields;
        }
        var result = [];
        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
            var field = fields_1[_i];
            if (field.type === form_field_types_1.FormFieldTypes.DISPLAY_VALUE) {
                if (field.params) {
                    var originalField = field.params['field'];
                    if (originalField.type === form_field_types_1.FormFieldTypes.DYNAMIC_TABLE) {
                        result.push(new container_model_1.ContainerModel(new form_field_model_1.FormFieldModel(this, field)));
                    }
                }
            }
            else {
                result.push(new container_model_1.ContainerModel(new form_field_model_1.FormFieldModel(this, field)));
            }
        }
        return result;
    };
    FormModel.prototype.loadData = function (data) {
        for (var _i = 0, _a = this.getFormFields(); _i < _a.length; _i++) {
            var field = _a[_i];
            if (data[field.id]) {
                field.json.value = data[field.id];
                field.value = field.parseValue(field.json);
                if (field.type === form_field_types_1.FormFieldTypes.DROPDOWN ||
                    field.type === form_field_types_1.FormFieldTypes.RADIO_BUTTONS) {
                    field.value = data[field.id].id;
                }
            }
        }
    };
    return FormModel;
}());
FormModel.UNSET_TASK_NAME = 'Nameless task';
FormModel.SAVE_OUTCOME = '$save';
FormModel.COMPLETE_OUTCOME = '$complete';
FormModel.START_PROCESS_OUTCOME = '$startProcess';
exports.FormModel = FormModel;


/***/ }),

/***/ 458:
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
Object.defineProperty(exports, "__esModule", { value: true });
var form_event_1 = __webpack_require__(108);
var FormErrorEvent = (function (_super) {
    __extends(FormErrorEvent, _super);
    function FormErrorEvent(form, error) {
        var _this = _super.call(this, form) || this;
        _this.error = error;
        return _this;
    }
    return FormErrorEvent;
}(form_event_1.FormEvent));
exports.FormErrorEvent = FormErrorEvent;


/***/ }),

/***/ 459:
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
Object.defineProperty(exports, "__esModule", { value: true });
var form_field_event_1 = __webpack_require__(341);
var ValidateFormFieldEvent = (function (_super) {
    __extends(ValidateFormFieldEvent, _super);
    function ValidateFormFieldEvent(form, field) {
        var _this = _super.call(this, form, field) || this;
        _this.isValid = true;
        return _this;
    }
    return ValidateFormFieldEvent;
}(form_field_event_1.FormFieldEvent));
exports.ValidateFormFieldEvent = ValidateFormFieldEvent;


/***/ }),

/***/ 460:
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
Object.defineProperty(exports, "__esModule", { value: true });
var form_event_1 = __webpack_require__(108);
var ValidateFormEvent = (function (_super) {
    __extends(ValidateFormEvent, _super);
    function ValidateFormEvent(form) {
        var _this = _super.call(this, form) || this;
        _this.isValid = true;
        return _this;
    }
    return ValidateFormEvent;
}(form_event_1.FormEvent));
exports.ValidateFormEvent = ValidateFormEvent;


/***/ }),

/***/ 461:
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
var FormDefinitionModel = (function () {
    function FormDefinitionModel(id, name, lastUpdatedByFullName, lastUpdated, metadata) {
        this.reusable = false;
        this.newVersion = false;
        this.formImageBase64 = '';
        this.formRepresentation = {
            id: id,
            name: name,
            description: '',
            version: 1,
            lastUpdatedBy: 1,
            lastUpdatedByFullName: lastUpdatedByFullName,
            lastUpdated: lastUpdated,
            stencilSetId: 0,
            referenceId: null,
            formDefinition: {
                fields: [{
                        name: 'Label',
                        type: 'container',
                        fieldType: 'ContainerRepresentation',
                        numberOfColumns: 2,
                        required: false,
                        readOnly: false,
                        sizeX: 2,
                        sizeY: 1,
                        row: -1,
                        col: -1,
                        fields: { '1': this.metadataToFields(metadata) }
                    }],
                gridsterForm: false,
                javascriptEvents: [],
                metadata: {},
                outcomes: [],
                className: '',
                style: '',
                tabs: [],
                variables: []
            }
        };
    }
    FormDefinitionModel.prototype.metadataToFields = function (metadata) {
        var fields = [];
        if (metadata) {
            metadata.forEach(function (property) {
                if (property) {
                    var field = {
                        type: 'text',
                        id: property.name,
                        name: property.name,
                        required: false,
                        readOnly: false,
                        sizeX: 1,
                        sizeY: 1,
                        row: -1,
                        col: -1,
                        colspan: 1,
                        params: {
                            existingColspan: 1,
                            maxColspan: 2
                        },
                        layout: {
                            colspan: 1,
                            row: -1,
                            column: -1
                        }
                    };
                    fields.push(field);
                }
            });
        }
        return fields;
    };
    return FormDefinitionModel;
}());
exports.FormDefinitionModel = FormDefinitionModel;


/***/ }),

/***/ 462:
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
var NodeMetadata = (function () {
    function NodeMetadata(metadata, nodeType) {
        this.metadata = metadata;
        this.nodeType = nodeType;
    }
    return NodeMetadata;
}());
exports.NodeMetadata = NodeMetadata;


/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports = "<alfresco-datatable *ngIf=\"!isEmpty()\"\n    [rows]=\"forms\">\n    <data-columns>\n        <data-column key=\"name\" type=\"text\" title=\"Name\" class=\"ellipsis-cell\" [sortable]=\"true\"></data-column>\n        <data-column key=\"lastUpdatedByFullName\" type=\"text\" title=\"User\" class=\"ellipsis-cell\" [sortable]=\"true\"></data-column>\n        <data-column key=\"lastUpdated\" type=\"date\" format=\"shortDate\" title=\"Date\"></data-column>\n    </data-columns>\n</alfresco-datatable>\n";

/***/ }),

/***/ 545:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!hasForm()\">\n    <ng-content select=\"[empty-form]\">\n    </ng-content>\n</div>\n<div *ngIf=\"hasForm()\" class=\"{{form.className}}\">\n    <md-card>\n        <md-card-header>\n            <md-card-title>\n                <h4 *ngIf=\"isTitleEnabled()\">\n                    <div *ngIf=\"showRefreshButton\" class=\"adf-form-reload-button\">\n                        <button md-icon-button (click)=\"onRefreshClicked()\">\n                            <md-icon>refresh</md-icon>\n                        </button>\n                    </div>\n                    <md-icon>{{ form.isValid ? 'event_available' : 'event_busy' }}</md-icon>\n                    <span>{{form.taskName}}</span>\n\n                </h4>\n            </md-card-title>\n        </md-card-header>\n        <md-card-content>\n            <div *ngIf=\"form.hasTabs()\">\n                <tabs-widget [tabs]=\"form.tabs\" (formTabChanged)=\"checkVisibility($event);\"></tabs-widget>\n            </div>\n\n            <div *ngIf=\"!form.hasTabs() && form.hasFields()\">\n                <div *ngFor=\"let field of form.fields\">\n                    <form-field [field]=\"field.field\"></form-field>\n                </div>\n            </div>\n        </md-card-content>\n        <md-card-actions *ngIf=\"form.hasOutcomes()\">\n            <!--[class.mdl-button--colored]=\"!outcome.isSystem\"-->\n            <button *ngFor=\"let outcome of form.outcomes\"\n                    md-button\n                    [disabled]=\"!isOutcomeButtonEnabled(outcome)\"\n                    [class.adf-form-hide-button]=\"!isOutcomeButtonVisible(outcome, form.readOnly)\"\n                    (click)=\"onOutcomeClicked(outcome, $event)\">\n                {{outcome.name | uppercase}}\n            </button>\n        </md-card-actions>\n    </md-card>\n</div>\n<!--\nFor debugging and data visualisation purposes,\nwill be removed during future revisions\n-->\n<div *ngIf=\"showDebugButton\" class=\"adf-form-debug-container\">\n    <md-slide-toggle [(ngModel)]=\"debugMode\">Debug mode</md-slide-toggle>\n    <div *ngIf=\"debugMode && hasForm()\">\n        <h4>Values</h4>\n        <pre>{{form.values | json}}</pre>\n\n        <h4>Form</h4>\n        <pre>{{form.json | json}}</pre>\n    </div>\n</div>\n";

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hasForm()\">\n    <md-card>\n        <md-card-header>\n            <md-card-title>\n                <md-icon>{{ form.isValid ? 'event_available' : 'event_busy' }}</md-icon>\n                <h2 *ngIf=\"isTitleEnabled()\" class=\"mdl-card__title-text\">{{form.taskName}}</h2>\n            </md-card-title>\n        </md-card-header>\n        <md-card-content>\n            <div *ngIf=\"form.hasTabs()\">\n                <tabs-widget [tabs]=\"form.tabs\" (formTabChanged)=\"checkVisibility($event);\"></tabs-widget>\n            </div>\n\n            <div *ngIf=\"!form.hasTabs() && form.hasFields()\">\n                <div *ngFor=\"let field of form.fields\">\n                    <form-field [field]=\"field.field\"></form-field>\n                </div>\n            </div>\n        </md-card-content>\n        <md-card-content *ngIf=\"showOutcomeButtons && form.hasOutcomes()\" #outcomesContainer>\n            <button *ngFor=\"let outcome of form.outcomes\"\n                    md-button\n                    [disabled]=\"!isOutcomeButtonEnabled(outcome)\"\n                    [class.mdl-button--colored]=\"!outcome.isSystem\"\n                    [class.adf-form-hide-button]=\"!isOutcomeButtonVisible(outcome, form.readOnly)\"\n                    (click)=\"onOutcomeClicked(outcome, $event)\">\n                {{outcome.name}}\n            </button>\n        </md-card-content>\n        <md-card-actions *ngIf=\"showRefreshButton\">\n            <button md-button\n                    (click)=\"onRefreshClicked()\">\n                <md-icon>refresh</md-icon>\n            </button>\n        </md-card-actions>\n    </md-card>\n</div>\n";

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-amount-widget__container adf-amount-widget {{field.className}}\" [class.adf-invalid]=\"!field.isValid\" [class.adf-readonly]=\"field.readOnly\">\n    <md-input-container floatPlaceholder=\"never\" class=\"adf-amount-widget__input\">\n        <label class=\"adf-label\" [attr.for]=\"field.id\">{{field.name}}<span *ngIf=\"isRequired()\">*</span></label>\n        <span mdPrefix class=\"adf-amount-widget__prefix-spacing\"> {{currency }}</span>\n        <input mdInput\n                class=\"adf-amount-widget\"\n                type=\"text\"\n                [id]=\"field.id\"\n                [required]=\"isRequired()\"\n                [value]=\"field.value\"\n                [(ngModel)]=\"field.value\"\n                (ngModelChange)=\"checkVisibility(field)\"\n                [disabled]=\"field.readOnly\"\n                placeholder=\"{{field.placeholder}}\">\n    </md-input-container>\n    <error-widget [error]=\"field.validationSummary\" ></error-widget>\n    <error-widget *ngIf=\"isInvalidFieldRequired()\" required=\"{{ 'FORM.FIELD.REQUIRED' | translate }}\"></error-widget>\n</div>\n\n";

/***/ }),

/***/ 548:
/***/ (function(module, exports) {

module.exports = "<div class=\"attach-widget {{field.className}}\">\n    <label [attr.for]=\"field.id\">{{field.name}}<span *ngIf=\"isRequired()\">*</span></label>\n    <div>\n        <span *ngIf=\"hasFile()\" class=\"attach-widget__file mdl-chip\"><span class=\"mdl-chip__text\">{{getLinkedFileName()}}</span></span>\n        <button #browseFile [disabled]=\"field.readOnly\" (click)=\"showDialog();\" class=\"mdl-button mdl-jsm-button mdl-js-ripple-effect attach-widget__browser\">\n            <i class=\"material-icons\">image</i>\n            Browse {{selectedFolderSiteName}}\n        </button>\n        <button *ngIf=\"hasFile\" [disabled]=\"field.readOnly\" (click)=\"reset(file);\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect attach-widget__reset\">Clear</button>\n    </div>\n</div>\n\n<dialog class=\"mdl-dialog\" #dialog>\n    <h4 class=\"mdl-dialog__title\">Select content</h4>\n    <div class=\"mdl-dialog__content\">\n        <ul class='mdl-list'>\n            <li class=\"mdl-list__item\" *ngFor=\"let node of selectedFolderNodes\">\n            <span class=\"mdl-list__item-primary-content\" *ngIf=\"node.folder\">\n            <i class=\"material-icons mdl-list__item-icon\">folder</i>\n            <a (click)=\"selectFolder(node, $event)\">{{node.title}}</a>\n            </span>\n            <span class=\"mdl-list__item-primary-content\" *ngIf=\"!node.folder\">\n            <i class=\"material-icons mdl-list__item-icon\">description</i>\n            <a (click)=\"selectFile(node, $event)\">{{node.title}}</a>\n            </span>\n            </li>\n        </ul>\n    </div>\n    <div class=\"mdl-dialog__actions\">\n        <button type=\"button\" (click)=\"cancel()\" class=\"mdl-button close\">Cancel</button>\n    </div>\n</dialog>\n";

/***/ }),

/***/ 549:
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"field.className\">\n    <md-checkbox\n        [id]=\"field.id\"\n        color=\"primary\"\n        [required]=\"field.required\"\n        [disabled]=\"field.readOnly || readOnly\"\n        [(ngModel)]=\"field.value\"\n        (change)=\"onChange()\">\n        {{field.name}}\n        <span *ngIf=\"field.required\">*</span>\n    </md-checkbox>\n</div>\n";

/***/ }),

/***/ 550:
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'hidden':!(content?.isGroup() && content?.isVisible)}\" class=\"container-widget__header\">\n    <h4 class=\"container-widget__header-text\" id=\"container-header\"\n        [class.collapsible]=\"content?.isCollapsible()\">\n        <button *ngIf=\"content?.isCollapsible()\"\n                md-icon-button\n                class=\"mdl-button--icon\"\n                (click)=\"onExpanderClicked()\">\n            <md-icon>{{ content?.isExpanded ? 'expand_less' : 'expand_more' }}</md-icon>\n        </button>\n        <span (click)=\"onExpanderClicked()\" id=\"container-header-label\">{{content.name}}</span>\n    </h4>\n</div>\n\n<section class=\"grid-list\" [ngClass]=\"{'hidden':!(content?.isVisible && content?.isExpanded)}\">\n    <div class=\"grid-list-item\" *ngFor=\"let field of fields\" [style.width]=\"getColumnWith(field)\">\n        <form-field *ngIf=\"field\" [field]=\"field\"></form-field>\n    </div>\n</section>\n\n\n";

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"example-card\" class=\"adf-content-container\" *ngIf=\"content\">\n    <md-card-content *ngIf=\"showDocumentContent\">\n        <div *ngIf=\"content.isThumbnailSupported()\" >\n            <img id=\"thumbnailPreview\" class=\"adf-img-upload-widget\" [src]=\"content.thumbnailUrl\" alt=\"{{content.name}}\">\n        </div>\n        <div *ngIf=\"!content.isThumbnailSupported()\">\n            <i class=\"material-icons\">image</i>\n            <div id=\"unsupported-thumbnail\" class=\"adf-content-widget-preview-text\">{{ 'FORM.PREVIEW.IMAGE_NOT_AVAILABLE' | translate }}\n            </div>\n        </div>\n        <div class=\"mdl-card__supporting-text upload-widget__content-text\">{{content.name}}</div>\n    </md-card-content>\n\n    <md-card-actions>\n        <button md-icon-button id=\"view\" (click)=\"openViewer(content)\">\n            <md-icon class=\"md-24\">zoom_in</md-icon>\n        </button>\n        <button md-icon-button id=\"download\" (click)=\"download(content)\">\n            <md-icon class=\"md-24\">file_download</md-icon>\n        </button>\n    </md-card-actions>\n</md-card>\n";

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

module.exports = "<div class=\"{{field.className}}\" *ngIf=\"field?.isVisible\" id=\"data-widget\" [class.adf-invalid]=\"!field.isValid || field.validationSummary\">\n    <md-input-container class=\"adf-date-widget\">\n        <label class=\"adf-label\" [attr.for]=\"field.id\">{{field.name}} ({{field.dateDisplayFormat}})<span *ngIf=\"isRequired()\">*</span></label>\n        <input mdInput\n               [id]=\"field.id\"\n               [mdDatepicker]=\"datePicker\"\n               [(value)]=\"field.value\"\n               [required]=\"isRequired()\"\n               [disabled]=\"field.readOnly\"\n               [min]=\"minDate\"\n               [max]=\"maxDate\"\n               (focusout)=\"onDateChanged($event.srcElement.value)\"\n               placeholder=\"{{field.placeholder}}\">\n        <button class=\"adf-date-widget-button\" mdSuffix [mdDatepickerToggle]=\"datePicker\"  [disabled]=\"field.readOnly\"></button>\n    </md-input-container>\n    <error-widget [error]=\"field.validationSummary\" ></error-widget>\n    <error-widget *ngIf=\"isInvalidFieldRequired()\" required=\"{{ 'FORM.FIELD.REQUIRED' | translate }}\"></error-widget>\n    <md-datepicker #datePicker [touchUi]=\"true\" [startAt]=\"startAt\" (selectedChanged)=\"onDateChanged($event)\"></md-datepicker>\n</div>\n\n";

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-display-text-widget {{field.className}}\">\n    <span>{{field.value}}</span>\n</div>\n";

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-dropdown-widget {{field.className}}\"\n     [class.adf-invalid]=\"!field.isValid\" [class.adf-readonly]=\"field.readOnly\" *ngIf=\"field?.isVisible\">\n    <label class=\"adf-label\" [attr.for]=\"field.id\">{{field.name}}<span *ngIf=\"isRequired()\">*</span></label>\n    <md-select class=\"adf-select\"\n            [id]=\"field.id\"\n            [(ngModel)]=\"field.value\"\n            [disabled]=\"field.readOnly\"\n            (ngModelChange)=\"checkVisibility(field)\">\n        <md-option *ngFor=\"let opt of field.options\"\n                   [value]=\"getOptionValue(opt, field.value)\"\n                   [id]=\"opt.id\">{{opt.name}}</md-option>\n    </md-select>\n    <error-widget [error]=\"field.validationSummary\" ></error-widget>\n    <error-widget class=\"adf-dropdown-required-message\" *ngIf=\"isInvalidFieldRequired()\" required=\"{{ 'FORM.FIELD.REQUIRED' | translate }}\"></error-widget>\n</div>\n";

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports = "<div class=\"{{field.className}}\"\n    [class.adf-invalid]=\"!isValid()\" *ngIf=\"field?.isVisible\">\n    <div class=\"adf-label\">{{content.name}}<span *ngIf=\"isRequired()\">*</span></div>\n\n    <div *ngIf=\"!editMode\">\n        <div class=\"adf-table-container\">\n            <table class=\"full-width adf-dynamic-table\" id=\"dynamic-table-{{content.id}}\">\n                <thead>\n                    <tr>\n                        <th *ngFor=\"let column of content.visibleColumns\">\n                            {{column.name}}\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let row of content.rows; let idx = index\" tabindex=\"0\" id=\"{{content.id}}-row-{{idx}}\"\n                        [class.adf-dynamic-table-widget__row-selected]=\"row.selected\" (keyup)=\"onKeyPressed($event, row)\">\n                        <td *ngFor=\"let column of content.visibleColumns\"\n                            (click)=\"onRowClicked(row)\">\n                            {{ getCellValue(row, column) }}\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <div *ngIf=\"!readOnly\">\n            <button md-button\n                    [disabled]=\"!hasSelection()\"\n                    (click)=\"moveSelectionUp()\">\n                <i class=\"material-icons\">arrow_upward</i>\n            </button>\n            <button md-button\n                    [disabled]=\"!hasSelection()\"\n                    (click)=\"moveSelectionDown()\">\n                <i class=\"material-icons\">arrow_downward</i>\n            </button>\n            <button md-button\n                    [disabled]=\"field.readOnly\"\n                    id=\"{{content.id}}-add-row\"\n                    (click)=\"addNewRow()\">\n                <i class=\"material-icons\">add_circle_outline</i>\n            </button>\n            <button md-button\n                    [disabled]=\"!hasSelection()\"\n                    (click)=\"deleteSelection()\">\n                <i class=\"material-icons\">remove_circle_outline</i>\n            </button>\n            <button md-button\n                    [disabled]=\"!hasSelection()\"\n                    (click)=\"editSelection()\">\n                <i class=\"material-icons\">edit</i>\n            </button>\n        </div>\n     </div>\n\n     <row-editor *ngIf=\"editMode\"\n        [table]=\"content\"\n        [row]=\"editRow\"\n        [column]=\"column\"\n        (save)=\"onSaveChanges()\"\n        (cancel)=\"onCancelChanges()\">\n     </row-editor>\n    <error-widget [error]=\"field.validationSummary\" ></error-widget>\n    <error-widget *ngIf=\"isInvalidFieldRequired()\" required=\"{{ 'FORM.FIELD.REQUIRED' | translate }}\"></error-widget>\n</div>\n";

/***/ }),

/***/ 556:
/***/ (function(module, exports) {

module.exports = " <label [attr.for]=\"column.id\">\n    <md-checkbox\n        color=\"primary\"\n        [id]=\"column.id\"\n        [checked]=\"table.getCellValue(row, column)\"\n        [required]=\"column.required\"\n        [disabled]=\"!column.editable\"\n        (change)=\"onValueChanged(row, column, $event)\">\n    <span class=\"adf-checkbox-label\">{{column.name}}</span>\n    </md-checkbox>\n</label>\n";

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

module.exports = "<div>\n    <md-input-container class=\"adf-date-editor\">\n        <label [attr.for]=\"column.id\">{{column.name}} (d-M-yyyy)</label>\n        <input mdInput\n            id=\"dateInput\"\n            type=\"text\"\n            [mdDatepicker]=\"datePicker\"\n            [value]=\"value\"\n            [id]=\"column.id\"\n            [required]=\"column.required\"\n            [disabled]=\"!column.editable\"\n           (focusout)=\"onDateChanged($event.srcElement.value)\">\n            <button mdSuffix *ngIf=\"column.editable\"\n            [mdDatepickerToggle]=\"datePicker\" class=\"adf-date-editor-button\"></button>\n    </md-input-container>\n    <md-datepicker #datePicker (selectedChanged)=\"onDateChanged($event)\" [touchUi]=\"true\"></md-datepicker>\n</div>\n";

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown-editor\">\n    <label [attr.for]=\"column.id\">{{column.name}}</label>\n    <md-select\n        floatPlaceholder=\"never\"\n        class=\"adf-dropdown-editor-select\"\n        [id]=\"column.id\"\n        [(ngModel)]=\"value\"\n        [required]=\"column.required\"\n        [disabled]=\"!column.editable\"\n        (change)=\"onValueChanged(row, column, $event)\">\n        <md-option></md-option>\n        <md-option *ngFor=\"let opt of options\" [value]=\"opt.name\" [id]=\"opt.id\">{{opt.name}}</md-option>\n    </md-select>\n</div>\n";

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

module.exports = "<div class=\"row-editor mdl-shadow--2dp\"\n    [class.row-editor__invalid]=\"!validationSummary.isValid\">\n    <div class=\"mdl-grid\" *ngFor=\"let column of table.columns\">\n        <div class=\"mdl-cell mdl-cell--6-col\" [ngSwitch]=\"column.type\">\n            <div *ngSwitchCase=\"'Dropdown'\">\n                <adf-dropdown-editor\n                    [table]=\"table\"\n                    [row]=\"row\"\n                    [column]=\"column\">\n                </adf-dropdown-editor>\n                </div>\n                <div *ngSwitchCase=\"'Date'\">\n                    <adf-date-editor\n                    [table]=\"table\"\n                    [row]=\"row\"\n                    [column]=\"column\">\n                </adf-date-editor>\n                </div>\n\n                <div *ngSwitchCase=\"'Boolean'\">\n                <adf-boolean-editor\n                    [table]=\"table\"\n                    [row]=\"row\"\n                    [column]=\"column\">\n                </adf-boolean-editor>\n                </div>\n                <div *ngSwitchDefault>\n                <adf-text-editor\n                    [table]=\"table\"\n                    [row]=\"row\"\n                    [column]=\"column\">\n                </adf-text-editor>\n            </div>\n        </div>\n    </div>\n    <error-widget [error]=\"validationSummary.text\"></error-widget>\n    <div>\n        <button md-button (click)=\"onCancelChanges()\">Cancel</button>\n        <button md-button (click)=\"onSaveChanges()\">Save</button>\n    </div>\n</div>\n";

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-text-editor\">\n    <md-input-container>\n    <label [attr.for]=\"column.id\">{{displayName}}</label>\n    <input mdInput\n        type=\"text\"\n        [value]=\"table.getCellValue(row, column)\"\n        (keyup)=\"onValueChanged(row, column, $event)\"\n        [required]=\"column.required\"\n        [disabled]=\"!column.editable\"\n        [id]=\"column.id\">\n    </md-input-container>\n</div>\n";

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-error-text-container\">\n    <div *ngIf=\"error\" [@transitionMessages]=\"_subscriptAnimationState\">\n        <div class=\"adf-error-text\">{{error}}</div>\n        <i class=\"material-icons adf-error-icon\">warning</i>\n    </div>\n    <div *ngIf=\"required\" [@transitionMessages]=\"_subscriptAnimationState\">\n            <div class=\"adf-error-text\">{{required}}</div>\n    </div>\n</div>\n";

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-group-widget {{field.className}}\"\n     [class.is-dirty]=\"value\"\n     [class.adf-invalid]=\"!field.isValid\" [class.adf-readonly]=\"field.readOnly\" id=\"functional-group-div\" *ngIf=\"field.isVisible\">\n    <md-input-container>\n        <label class=\"adf-label\" [attr.for]=\"field.id\">{{field.name}}<span *ngIf=\"isRequired()\">*</span></label>\n        <input mdInput\n               class=\"adf-input\"\n               type=\"text\"\n               [id]=\"field.id\"\n               [(ngModel)]=\"value\"\n               (ngModelChange)=\"checkVisibility(field)\"\n               (keyup)=\"onKeyUp($event)\"\n               (blur)=\"onBlur()\"\n               [disabled]=\"field.readOnly\"\n               placeholder=\"{{field.placeholder}}\">\n    </md-input-container>\n    <error-widget [error]=\"field.validationSummary\"></error-widget>\n    <error-widget *ngIf=\"isInvalidFieldRequired()\" required=\"{{ 'FORM.FIELD.REQUIRED' | translate }}\"></error-widget>\n</div>\n<div class=\"adf-group-autocomplete mat-elevation-z2\" *ngIf=\"popupVisible\">\n    <md-option *ngFor=\"let item of groups\"\n               [id]=\"field.id +'-'+item.id\"\n               (click)=\"onItemClick(item, $event)\">\n        <span>{{item.name}}</span>\n    </md-option>\n</div>\n";

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-hyperlink-widget {{field.className}}\">\n    <label class=\"adf-label\" [attr.for]=\"field.id\">{{field.name}}<span *ngIf=\"isRequired()\">*</span></label>\n    <div>\n        <a [href]=\"linkUrl\" target=\"_blank\" rel=\"nofollow\">{{linkText}}</a>\n    </div>\n</div>\n";

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-multiline-text-widget {{field.className}}\"\n     [class.adf-invalid]=\"!field.isValid\" [class.adf-readonly]=\"field.readOnly\">\n    <md-input-container floatPlaceholder=\"never\">\n        <label class=\"adf-label\" [attr.for]=\"field.id\">{{field.name}}<span *ngIf=\"isRequired()\">*</span></label>\n        <textarea mdInput class=\"adf-input\"\n                  md-autosize\n                  type=\"text\"\n                  rows=\"3\"\n                  [maxlength]=\"field.maxLength\"\n                  [id]=\"field.id\"\n                  [required]=\"isRequired()\"\n                  [(ngModel)]=\"field.value\"\n                  (ngModelChange)=\"checkVisibility(field)\"\n                  [disabled]=\"field.readOnly || readOnly\"\n                  placeholder=\"{{field.placeholder}}\">\n        </textarea>\n    </md-input-container>\n    <div *ngIf=\"field.maxLength > 0\" class=\"adf-multiline-word-counter\">\n        <span>{{field?.value?.length || 0}}/{{field.maxLength}}</span>\n    </div>\n    <error-widget [error]=\"field.validationSummary\"></error-widget>\n    <error-widget class=\"adf-multiline-required-message\" *ngIf=\"isInvalidFieldRequired()\" required=\"{{ 'FORM.FIELD.REQUIRED' | translate }}\"></error-widget>\n</div>\n\n";

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-textfield adf-number-widget {{field.className}}\"\n     [class.adf-invalid]=\"!field.isValid\" [class.adf-readonly]=\"field.readOnly\">\n    <md-input-container>\n        <label class=\"adf-label\" [attr.for]=\"field.id\">{{field.name}}<span *ngIf=\"isRequired()\">*</span></label>\n        <input mdInput\n               class=\"adf-input\"\n               type=\"text\"\n               pattern=\"-?[0-9]*(\\.[0-9]+)?\"\n               [id]=\"field.id\"\n               [required]=\"isRequired()\"\n               [value]=\"field.value\"\n               [(ngModel)]=\"field.value\"\n               (ngModelChange)=\"checkVisibility(field)\"\n               [disabled]=\"field.readOnly\"\n               placeholder=\"{{field.placeholder}}\">\n    </md-input-container>\n    <error-widget [error]=\"field.validationSummary\" ></error-widget>\n    <error-widget *ngIf=\"isInvalidFieldRequired()\" required=\"{{ 'FORM.FIELD.REQUIRED' | translate }}\"></error-widget>\n</div>\n";

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-people-widget {{field.className}}\"\n     [class.is-dirty]=\"value\"\n     [class.adf-invalid]=\"!field.isValid\"\n     [class.adf-readonly]=\"field.readOnly\"\n     id=\"people-widget-content\"\n     *ngIf=\"field.isVisible\">\n    <md-input-container>\n        <label class=\"adf-label\" [attr.for]=\"field.id\">{{field.name}}<span *ngIf=\"isRequired()\">*</span></label>\n        <input #inputValue\n               mdInput\n               class=\"adf-input\"\n               type=\"text\"\n               [id]=\"field.id\"\n               [(ngModel)]=\"value\"\n               (ngModelChange)=\"checkVisibility(field)\"\n               (keyup)=\"onKeyUp($event)\"\n               [disabled]=\"field.readOnly\"\n               placeholder=\"{{field.placeholder}}\">\n    </md-input-container>\n    <error-widget [error]=\"field.validationSummary\"></error-widget>\n    <error-widget *ngIf=\"isInvalidFieldRequired()\" required=\"{{ 'FORM.FIELD.REQUIRED' | translate }}\"></error-widget>\n</div>\n<div class=\"adf-people-autocomplete mat-elevation-z2\" [hidden]=\"!popupVisible || users.length === 0\">\n    <md-option *ngFor=\"let user of users\"\n               [id]=\"field.id +'-'+user.id\"\n               (click)=\"onItemClick(user, $event)\">\n        <div class=\"adf-people-widget-row\">\n            <div *ngIf=\"!user.userImage\" class=\"adf-people-widget-pic\">\n                {{user.firstName[0]}} {{user.lastName[0]}}\n            </div>\n            <div *ngIf=\"user.userImage\" class=\"adf-people-widget-image-row\">\n                <img class=\"adf-people-widget-image\"\n                    [src]=\"user.userImage\"\n                    (error)=\"onErrorImageLoad(user)\"/>\n            </div>\n            <span class=\"adf-people-label-name\">{{getDisplayName(user)}}</span>\n        </div>\n    </md-option>\n</div>\n";

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-radio-buttons-widget {{field.className}}\"\n     [class.adf-invalid]=\"!field.isValid\" [class.adf-readonly]=\"field.readOnly\" [id]=\"field.id\" *ngIf=\"field?.isVisible\">\n    <div class=\"adf-radio-button-container\">\n        <label class=\"adf-label\" [attr.for]=\"field.id\">{{field.name}}<span *ngIf=\"isRequired()\">*</span></label>\n        <md-radio-group class=\"adf-radio-group\" [(ngModel)]=\"field.value\">\n            <md-radio-button\n                [id]=\"field.id + '-' + opt.id\"\n                [name]=\"field.id\"\n                [value]=\"opt.id\"\n                [disabled]=\"field.readOnly\"\n                [checked]=\"field.value === opt.id\"\n                (change)=\"onOptionClick(opt.id)\"\n                color=\"primary\"\n                class=\"adf-radio-button\" *ngFor=\"let opt of field.options\" >\n                {{opt.name}}\n            </md-radio-button>\n        </md-radio-group>\n    </div>\n    <error-widget [error]=\"field.validationSummary\" ></error-widget>\n    <error-widget *ngIf=\"isInvalidFieldRequired()\" required=\"{{ 'FORM.FIELD.REQUIRED' | translate }}\"></error-widget>\n</div>\n\n\n";

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hasTabs()\" class=\"alfresco-tabs-widget\">\n    <md-tab-group>\n        <md-tab *ngFor=\"let tab of visibleTabs\" [label]=\"tab.title\">\n            <div *ngFor=\"let field of tab.fields\">\n                <form-field [field]=\"field.field\"></form-field>\n             </div>\n        </md-tab>\n    </md-tab-group>\n</div>\n";

/***/ }),

/***/ 569:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-textfield adf-text-widget {{field.className}}\"\n     [class.adf-invalid]=\"!field.isValid\" [class.adf-readonly]=\"field.readOnly\">\n    <md-input-container>\n        <label class=\"adf-label\" [attr.for]=\"field.id\">{{field.name}}<span *ngIf=\"isRequired()\">*</span></label>\n        <input mdInput\n               class=\"adf-input\"\n               type=\"text\"\n               [id]=\"field.id\"\n               [required]=\"isRequired()\"\n               [value]=\"field.value\"\n               [(ngModel)]=\"field.value\"\n               (ngModelChange)=\"onFieldChanged(field)\"\n               [disabled]=\"field.readOnly || readOnly\"\n               [textMask]=\"{mask: mask, isReversed: isMaskReversed}\"\n               placeholder=\"{{field.placeholder}}\">\n    </md-input-container>\n    <error-widget [error]=\"field.validationSummary\"></error-widget>\n    <error-widget *ngIf=\"isInvalidFieldRequired()\" required=\"{{ 'FORM.FIELD.REQUIRED' | translate }}\"></error-widget>\n</div>\n";

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-typeahead-widget-container\">\n    <div class=\"adf-typeahead-widget {{field.className}}\"\n        [class.is-dirty]=\"value\"\n        [class.adf-invalid]=\"!field.isValid\"\n        [class.adf-readonly]=\"field.readOnly\"\n        id=\"typehead-div\" *ngIf=\"field.isVisible\">\n        <md-input-container>\n            <label class=\"adf-label\" [attr.for]=\"field.id\">{{field.name}}</label>\n            <input mdInput class=\"adf-input\"\n                   type=\"text\"\n                   [id]=\"field.id\"\n                   [(ngModel)]=\"value\"\n                   (keyup)=\"onKeyUp($event)\"\n                   (blur)=\"onBlur()\"\n                   [disabled]=\"field.readOnly\"\n                   placeholder=\"{{field.placeholder}}\">\n        </md-input-container>\n        <error-widget [error]=\"field.validationSummary\"></error-widget>\n        <error-widget *ngIf=\"isInvalidFieldRequired()\" required=\"{{ 'FORM.FIELD.REQUIRED' | translate }}\"></error-widget>\n    </div>\n    <div class=\"adf-typeahead-autocomplete mat-elevation-z2\" [hidden]=\"options.length <= 0 || !popupVisible\">\n        <md-option *ngFor=\"let item of options\" (click)=\"onItemClick(item, $event)\">\n            <span>{{item.name}}</span>\n        </md-option>\n    </div>\n</div>\n";

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-upload-widget {{field.className}}\"\n     [class.adf-invalid]=\"!field.isValid\"\n     [class.adf-readonly]=\"field.readOnly\">\n    <label class=\"adf-label\" [attr.for]=\"field.id\" >{{field.name}}<span *ngIf=\"isRequired()\">*</span></label>\n    <div class=\"adf-upload-widget-container\">\n        <div>\n            <md-list *ngIf=\"hasFile\">\n                <md-list-item class=\"adf-upload-files-row\" *ngFor=\"let file of field.value\">\n                    <img md-list-icon class=\"adf-upload-widget__icon\"\n                            [id]=\"'file-'+file.id+'-icon'\"\n                            [src]=\"getIcon(file.mimeType)\"\n                            [alt]=\"mimeTypeIcon\"\n                            (click)=\"fileClicked(file)\"/>\n                    <span md-line id=\"{{'file-'+file.id}}\" class=\"adf-file\">{{decode(file.name)}}</span>\n                    <button *ngIf=\"!field.readOnly\" md-icon-button [id]=\"'file-'+file.id+'-remove'\" (click)=\"reset(file);\" (keyup.enter)=\"reset(file);\">\n                        <md-icon class=\"md-24\">highlight_off</md-icon>\n                    </button>\n                </md-list-item>\n            </md-list>\n        </div>\n        <input *ngIf=\"!hasFile\"\n               #file\n               type=\"file\"\n               [multiple]=\"multipleOption\"\n               [id]=\"field.id\"\n               [disabled]=\"field.readOnly || readonly\"\n               class=\"adf-file\"\n               (change)=\"onFileChanged($event)\">\n    </div>\n    <error-widget [error]=\"field.validationSummary\" ></error-widget>\n    <error-widget *ngIf=\"isInvalidFieldRequired()\" required=\"{{ 'FORM.FIELD.REQUIRED' | translate }}\"></error-widget>\n</div>\n";

/***/ }),

/***/ 646:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 647:
/***/ (function(module, exports) {

module.exports = ".adf-form-container {\n  width: 100%;\n  min-height: 100px;\n  overflow: visible; }\n\n.adf-form-debug-container {\n  padding: 10px; }\n\n.adf-form-debug-container .debug-toggle-text {\n  padding-left: 15px;\n  cursor: pointer; }\n\n.adf-form-debug-container .debug-toggle-text:hover {\n  font-weight: bold; }\n\n.adf-form-reload-button {\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.adf-form-hide-button {\n  display: none; }\n\n.adf-task-title {\n  text-align: center; }\n\nform-field {\n  width: 100%; }\n"

/***/ }),

/***/ 648:
/***/ (function(module, exports) {

module.exports = "/* ANIMATION */\n/* ANIMATION */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.adf-amount-widget {\n  width: 100%;\n  vertical-align: baseline !important; }\n  .adf-amount-widget .mat-input-element {\n    margin-left: 11px; }\n  .adf-amount-widget .mat-input-prefix {\n    position: absolute;\n    margin-top: 42px; }\n\n.adf-amount-widget__container {\n  max-width: 100%; }\n  .adf-amount-widget__container .mat-input-placeholder-wrapper {\n    top: -6px !important; }\n  .adf-amount-widget__container .mat-input-placeholder-wrapper {\n    top: 0 !important;\n    left: 13px; }\n\n.adf-amount-widget__input .mat-focused {\n  transition: none; }\n\n.adf-amount-widget__prefix-spacing {\n  padding-right: 5px; }\n"

/***/ }),

/***/ 649:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 650:
/***/ (function(module, exports) {

module.exports = ".adf-img-upload-widget {\n  width: 100%;\n  height: 100%;\n  border: 1px solid rgba(117, 117, 117, 0.57);\n  box-shadow: 1px 1px 2px #dddddd;\n  background-color: #ffffff; }\n\n.adf-content-widget-preview-text {\n  word-wrap: break-word;\n  word-break: break-all;\n  text-align: center; }\n"

/***/ }),

/***/ 651:
/***/ (function(module, exports) {

module.exports = "/* ANIMATION */\n/* ANIMATION */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.adf-date-widget .mat-input-suffix {\n  position: absolute;\n  margin-top: 42px;\n  width: 100%; }\n\n.adf-date-widget-button {\n  position: relative;\n  float: right; }\n\n.adf-date-input {\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.adf-grid-date-widget {\n  align-items: center;\n  padding: 0; }\n\n.adf-date-widget-button__cell {\n  margin-top: 0;\n  margin-bottom: 0; }\n"

/***/ }),

/***/ 652:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 653:
/***/ (function(module, exports) {

module.exports = "/* ANIMATION */\n/* ANIMATION */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.adf-dropdown-widget {\n  width: 100%;\n  padding-top: 16px; }\n\n.adf-select {\n  width: 100%; }\n\n.adf-dropdown-required-message .adf-error-text-container {\n  margin-top: 1px !important; }\n"

/***/ }),

/***/ 654:
/***/ (function(module, exports) {

module.exports = "/* ANIMATION */\n"

/***/ }),

/***/ 655:
/***/ (function(module, exports) {

module.exports = "/* ANIMATION */\n/* ANIMATION */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.adf-checkbox-label {\n  position: relative;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 24px;\n  margin: 0; }\n"

/***/ }),

/***/ 656:
/***/ (function(module, exports) {

module.exports = "/* ANIMATION */\n/* ANIMATION */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.adf-date-editor {\n  width: 100%; }\n\n.adf-date-editor-button {\n  position: relative;\n  top: 25px; }\n"

/***/ }),

/***/ 657:
/***/ (function(module, exports) {

module.exports = "/* ANIMATION */\n/* ANIMATION */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.adf-dropdown-editor-select {\n  width: 100%; }\n"

/***/ }),

/***/ 658:
/***/ (function(module, exports) {

module.exports = "/* ANIMATION */\n/* ANIMATION */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.adf-text-editor {\n  width: 100%; }\n"

/***/ }),

/***/ 659:
/***/ (function(module, exports) {

module.exports = ".adf-error-text-container {\n  margin-top: -14px !important;\n  width: 50%; }\n"

/***/ }),

/***/ 660:
/***/ (function(module, exports) {

module.exports = "/* ANIMATION */\n/* ANIMATION */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.adf-group-widget {\n  width: 100%; }\n\n.adf-group-autocomplete {\n  background-color: #fff;\n  position: inherit;\n  max-height: 200px;\n  overflow-y: auto;\n  z-index: 5;\n  width: 100%;\n  color: #555;\n  margin: -15px 0 0 0; }\n  .adf-group-autocomplete > md-option {\n    list-style-type: none;\n    position: static;\n    height: auto;\n    width: auto;\n    min-width: 124px;\n    padding: 8px 0;\n    margin: 0;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n    border-radius: 2px; }\n    .adf-group-autocomplete > md-option > span {\n      opacity: 1; }\n"

/***/ }),

/***/ 661:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 662:
/***/ (function(module, exports) {

module.exports = "/* ANIMATION */\n/* ANIMATION */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.adf-multiline-text-widget {\n  width: 100%; }\n\n.adf-multiline-word-counter {\n  float: right;\n  margin-top: -20px !important;\n  min-height: 24px;\n  min-width: 1px;\n  font-size: 12px;\n  line-height: 14px;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  opacity: 1;\n  margin-top: 0;\n  padding-top: 5px;\n  text-align: right;\n  padding-right: 2px;\n  padding-left: 0; }\n\n.adf-multiline-required-message {\n  display: flex; }\n"

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

module.exports = "/* ANIMATION */\n/* ANIMATION */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.adf-number-widget {\n  width: 100%; }\n"

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = "/* ANIMATION */\n/* ANIMATION */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.adf-people-widget {\n  width: 100%; }\n\n.adf-people-autocomplete {\n  background-color: #fff;\n  position: inherit;\n  max-height: 200px;\n  width: 100%;\n  overflow-y: auto;\n  z-index: 5;\n  border-radius: 3%;\n  color: #555;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n  .adf-people-autocomplete > md-option {\n    list-style-type: none;\n    position: static;\n    height: auto;\n    width: auto;\n    min-width: 124px;\n    padding: 8px 0 0 20px;\n    margin: 0;\n    border-radius: 2px; }\n    .adf-people-autocomplete > md-option > span {\n      opacity: 1; }\n\n.adf-people-widget-pic {\n  background: #ff9800;\n  display: inline-block;\n  width: 30px;\n  padding: 0px 9px;\n  border-radius: 100px;\n  color: #fff;\n  text-align: center;\n  font-weight: bolder;\n  font-size: 18px;\n  font-family: Muli;\n  text-transform: uppercase;\n  vertical-align: middle; }\n\n.adf-people-widget-row {\n  padding-bottom: 10px; }\n\n.adf-people-widget-image {\n  border-radius: 100px;\n  width: 50px;\n  height: 50px;\n  vertical-align: middle;\n  display: inline-block;\n  padding: 0px 0px; }\n\n.adf-people-widget-image-row {\n  display: inline-block; }\n\n.adf-people-label-name {\n  padding-left: 10px; }\n"

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = "/* ANIMATION */\n/* ANIMATION */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.adf-radio-button-container {\n  margin-bottom: 15px; }\n\n.adf-radio-group {\n  display: inline-flex;\n  flex-direction: column; }\n\n.adf-radio-button {\n  margin: 5px; }\n"

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = "/* ANIMATION */\n/* ANIMATION */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.adf-text-widget {\n  width: 100%; }\n"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = "/* ANIMATION */\n/* ANIMATION */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.adf-typeahead-widget-container {\n  position: relative;\n  display: block; }\n\n.adf-typeahead-widget {\n  width: 100%; }\n\n.adf-typeahead-autocomplete {\n  background-color: #fff;\n  position: absolute;\n  max-height: 200px;\n  width: 100%;\n  overflow-y: auto;\n  z-index: 5;\n  color: #555;\n  margin: -10px 0 0 0;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n  .adf-typeahead-autocomplete > md-option {\n    list-style-type: none;\n    position: static;\n    height: auto;\n    width: auto;\n    min-width: 124px;\n    padding: 8px 0;\n    margin: 0;\n    border-radius: 2px; }\n    .adf-typeahead-autocomplete > md-option > span {\n      opacity: 1;\n      padding-left: 23px; }\n"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = ".adf-unknown-text {\n  margin-left: 10px;\n  color: red; }\n\n.adf-unknown-widget {\n  margin: 42px; }\n"

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = ".adf-upload-widget-container {\n  margin-bottom: 15px; }\n\n.adf-upload-widget {\n  width: 100%;\n  word-break: break-all;\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent; }\n\n.adf-upload-widget__icon {\n  padding: 6px;\n  float: left;\n  cursor: pointer; }\n\n.adf-adf-file {\n  float: left;\n  margin-top: 4px; }\n\n.adf-upload-widget__reset {\n  margin-top: -2px; }\n\n.adf-upload-files-row .mat-line {\n  margin-bottom: 0px; }\n"

/***/ }),

/***/ 67:
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
var FormWidgetModel = (function () {
    function FormWidgetModel(form, json) {
        this.form = form;
        this.json = json;
        if (json) {
            this.fieldType = json.fieldType;
            this.id = json.id;
            this.name = json.name;
            this.type = json.type;
            this.tab = json.tab;
        }
    }
    return FormWidgetModel;
}());
exports.FormWidgetModel = FormWidgetModel;


/***/ }),

/***/ 68:
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
__export(__webpack_require__(452));
__export(__webpack_require__(456));
__export(__webpack_require__(82));
__export(__webpack_require__(453));
__export(__webpack_require__(454));
__export(__webpack_require__(67));
__export(__webpack_require__(316));
__export(__webpack_require__(457));
__export(__webpack_require__(190));
__export(__webpack_require__(314));
__export(__webpack_require__(318));
__export(__webpack_require__(317));
__export(__webpack_require__(455));
__export(__webpack_require__(84));
__export(__webpack_require__(315));


/***/ }),

/***/ 69:
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
Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(14);
var form_widget_model_1 = __webpack_require__(67);
var DynamicTableModel = (function (_super) {
    __extends(DynamicTableModel, _super);
    function DynamicTableModel(field) {
        var _this = _super.call(this, field.form, field.json) || this;
        _this.columns = [];
        _this.visibleColumns = [];
        _this.rows = [];
        _this._validators = [];
        _this.field = field;
        if (field.json) {
            var columns = _this.getColumns(field);
            if (columns) {
                _this.columns = columns;
                _this.visibleColumns = _this.columns.filter(function (col) { return col.visible; });
            }
            if (field.json.value) {
                _this.rows = field.json.value.map(function (obj) { return ({ selected: false, value: obj }); });
            }
        }
        _this._validators = [
            new RequiredCellValidator(),
            new DateCellValidator(),
            new NumberCellValidator()
        ];
        return _this;
    }
    Object.defineProperty(DynamicTableModel.prototype, "selectedRow", {
        get: function () {
            return this._selectedRow;
        },
        set: function (value) {
            if (this._selectedRow && this._selectedRow === value) {
                this._selectedRow.selected = false;
                this._selectedRow = null;
                return;
            }
            this.rows.forEach(function (row) { return row.selected = false; });
            this._selectedRow = value;
            if (value) {
                this._selectedRow.selected = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    DynamicTableModel.prototype.getColumns = function (field) {
        if (field && field.json) {
            var definitions = field.json.columnDefinitions;
            if (!definitions && field.json.params && field.json.params.field) {
                definitions = field.json.params.field.columnDefinitions;
            }
            if (definitions) {
                return definitions.map(function (obj) { return obj; });
            }
        }
        return null;
    };
    DynamicTableModel.prototype.flushValue = function () {
        if (this.field) {
            this.field.value = this.rows.map(function (r) { return r.value; });
            this.field.updateForm();
        }
    };
    DynamicTableModel.prototype.moveRow = function (row, offset) {
        var oldIndex = this.rows.indexOf(row);
        if (oldIndex > -1) {
            var newIndex = (oldIndex + offset);
            if (newIndex < 0) {
                newIndex = 0;
            }
            else if (newIndex >= this.rows.length) {
                newIndex = this.rows.length;
            }
            var arr = this.rows.slice();
            arr.splice(oldIndex, 1);
            arr.splice(newIndex, 0, row);
            this.rows = arr;
            this.flushValue();
        }
    };
    DynamicTableModel.prototype.deleteRow = function (row) {
        if (row) {
            if (this.selectedRow === row) {
                this.selectedRow = null;
            }
            var idx = this.rows.indexOf(row);
            if (idx > -1) {
                this.rows.splice(idx, 1);
                this.flushValue();
            }
        }
    };
    DynamicTableModel.prototype.addRow = function (row) {
        if (row) {
            this.rows.push(row);
        }
    };
    DynamicTableModel.prototype.validateRow = function (row) {
        var summary = {
            isValid: true,
            text: null
        };
        if (row) {
            for (var _i = 0, _a = this.columns; _i < _a.length; _i++) {
                var col = _a[_i];
                for (var _b = 0, _c = this._validators; _b < _c.length; _b++) {
                    var validator = _c[_b];
                    if (!validator.validate(row, col, summary)) {
                        return summary;
                    }
                }
            }
        }
        return summary;
    };
    DynamicTableModel.prototype.getCellValue = function (row, column) {
        var result = row.value[column.id];
        if (column.type === 'Dropdown') {
            if (result) {
                return result.name;
            }
        }
        if (column.type === 'Boolean') {
            return result ? true : false;
        }
        if (column.type === 'Date') {
            if (result) {
                return moment(result.split('T')[0], 'YYYY-MM-DD').format('DD-MM-YYYY');
            }
        }
        return result || '';
    };
    DynamicTableModel.prototype.getDisplayText = function (column) {
        var result = column.name;
        if (column.type === 'Amount') {
            var currency = column.amountCurrency || '$';
            result = column.name + " (" + currency + ")";
        }
        return result;
    };
    return DynamicTableModel;
}(form_widget_model_1.FormWidgetModel));
exports.DynamicTableModel = DynamicTableModel;
var RequiredCellValidator = (function () {
    function RequiredCellValidator() {
        this.supportedTypes = [
            'String',
            'Number',
            'Amount',
            'Date',
            'Dropdown'
        ];
    }
    RequiredCellValidator.prototype.isSupported = function (column) {
        return column && column.required && this.supportedTypes.indexOf(column.type) > -1;
    };
    RequiredCellValidator.prototype.validate = function (row, column, summary) {
        if (this.isSupported(column)) {
            var value = row.value[column.id];
            if (column.required) {
                if (value === null || value === undefined || value === '') {
                    if (summary) {
                        summary.isValid = false;
                        summary.text = "Field '" + column.name + "' is required.";
                    }
                    return false;
                }
            }
        }
        return true;
    };
    return RequiredCellValidator;
}());
exports.RequiredCellValidator = RequiredCellValidator;
var DateCellValidator = (function () {
    function DateCellValidator() {
        this.supportedTypes = [
            'Date'
        ];
    }
    DateCellValidator.prototype.isSupported = function (column) {
        return column && column.editable && this.supportedTypes.indexOf(column.type) > -1;
    };
    DateCellValidator.prototype.validate = function (row, column, summary) {
        if (this.isSupported(column)) {
            var value = row.value[column.id];
            var dateValue = moment(value, 'D-M-YYYY');
            if (!dateValue.isValid()) {
                if (summary) {
                    summary.isValid = false;
                    summary.text = "Invalid '" + column.name + "' format.";
                }
                return false;
            }
        }
        return true;
    };
    return DateCellValidator;
}());
exports.DateCellValidator = DateCellValidator;
var NumberCellValidator = (function () {
    function NumberCellValidator() {
        this.supportedTypes = [
            'Number',
            'Amount'
        ];
    }
    NumberCellValidator.prototype.isSupported = function (column) {
        return column && column.required && this.supportedTypes.indexOf(column.type) > -1;
    };
    NumberCellValidator.prototype.isNumber = function (value) {
        if (value === null || value === undefined || value === '') {
            return false;
        }
        return !isNaN(+value);
    };
    NumberCellValidator.prototype.validate = function (row, column, summary) {
        if (this.isSupported(column)) {
            var value = row.value[column.id];
            if (value === null ||
                value === undefined ||
                value === '' ||
                this.isNumber(value)) {
                return true;
            }
            if (summary) {
                summary.isValid = false;
                summary.text = "Field '" + column.name + "' must be a number.";
            }
            return false;
        }
        return true;
    };
    return NumberCellValidator;
}());
exports.NumberCellValidator = NumberCellValidator;


/***/ }),

/***/ 72:
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
var Rx_1 = __webpack_require__(2);
var EcmModelService = EcmModelService_1 = (function () {
    function EcmModelService(apiService, logService) {
        this.apiService = apiService;
        this.logService = logService;
    }
    EcmModelService.prototype.createEcmTypeForActivitiForm = function (formName, form) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            _this.searchActivitiEcmModel().subscribe(function (model) {
                if (!model) {
                    _this.createActivitiEcmModel(formName, form).subscribe(function (typeForm) {
                        observer.next(typeForm);
                        observer.complete();
                    });
                }
                else {
                    _this.saveFomType(formName, form).subscribe(function (typeForm) {
                        observer.next(typeForm);
                        observer.complete();
                    });
                }
            }, function (err) { return _this.handleError(err); });
        });
    };
    EcmModelService.prototype.searchActivitiEcmModel = function () {
        return this.getEcmModels().map(function (ecmModels) {
            return ecmModels.list.entries.find(function (model) { return model.entry.name === EcmModelService_1.MODEL_NAME; });
        });
    };
    EcmModelService.prototype.createActivitiEcmModel = function (formName, form) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            _this.createEcmModel(EcmModelService_1.MODEL_NAME, EcmModelService_1.MODEL_NAMESPACE).subscribe(function (model) {
                _this.logService.info('model created', model);
                _this.activeEcmModel(EcmModelService_1.MODEL_NAME).subscribe(function (modelActive) {
                    _this.logService.info('model active', modelActive);
                    _this.createEcmTypeWithProperties(formName, form).subscribe(function (typeCreated) {
                        observer.next(typeCreated);
                        observer.complete();
                    });
                }, function (err) { return _this.handleError(err); });
            }, function (err) { return _this.handleError(err); });
        });
    };
    EcmModelService.prototype.saveFomType = function (formName, form) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            _this.searchEcmType(formName, EcmModelService_1.MODEL_NAME).subscribe(function (ecmType) {
                _this.logService.info('custom types', ecmType);
                if (!ecmType) {
                    _this.createEcmTypeWithProperties(formName, form).subscribe(function (typeCreated) {
                        observer.next(typeCreated);
                        observer.complete();
                    });
                }
                else {
                    observer.next(ecmType);
                    observer.complete();
                }
            }, function (err) { return _this.handleError(err); });
        });
    };
    EcmModelService.prototype.createEcmTypeWithProperties = function (formName, form) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            _this.createEcmType(formName, EcmModelService_1.MODEL_NAME, EcmModelService_1.TYPE_MODEL).subscribe(function (typeCreated) {
                _this.logService.info('type Created', typeCreated);
                _this.addPropertyToAType(EcmModelService_1.MODEL_NAME, formName, form).subscribe(function (properyAdded) {
                    _this.logService.info('property Added', properyAdded);
                    observer.next(typeCreated);
                    observer.complete();
                }, function (err) { return _this.handleError(err); });
            }, function (err) { return _this.handleError(err); });
        });
    };
    EcmModelService.prototype.searchEcmType = function (typeName, modelName) {
        return this.getEcmType(modelName).map(function (customTypes) {
            return customTypes.list.entries.find(function (type) { return type.entry.prefixedName === typeName || type.entry.title === typeName; });
        });
    };
    EcmModelService.prototype.activeEcmModel = function (modelName) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().core.customModelApi.activateCustomModel(modelName))
            .map(this.toJson)
            .catch(function (err) { return _this.handleError(err); });
    };
    EcmModelService.prototype.createEcmModel = function (modelName, nameSpace) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().core.customModelApi.createCustomModel('DRAFT', '', modelName, modelName, nameSpace))
            .map(this.toJson)
            .catch(function (err) { return _this.handleError(err); });
    };
    EcmModelService.prototype.getEcmModels = function () {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().core.customModelApi.getAllCustomModel())
            .map(this.toJson)
            .catch(function (err) { return _this.handleError(err); });
    };
    EcmModelService.prototype.getEcmType = function (modelName) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().core.customModelApi.getAllCustomType(modelName))
            .map(this.toJson)
            .catch(function (err) { return _this.handleError(err); });
    };
    EcmModelService.prototype.createEcmType = function (typeName, modelName, parentType) {
        var _this = this;
        var name = this.cleanNameType(typeName);
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().core.customModelApi.createCustomType(modelName, name, parentType, typeName, ''))
            .map(this.toJson)
            .catch(function (err) { return _this.handleError(err); });
    };
    EcmModelService.prototype.addPropertyToAType = function (modelName, typeName, formFields) {
        var _this = this;
        var name = this.cleanNameType(typeName);
        var properties = [];
        if (formFields && formFields.values) {
            for (var key in formFields.values) {
                if (key) {
                    properties.push({
                        name: key,
                        title: key,
                        description: key,
                        dataType: 'd:text',
                        multiValued: false,
                        mandatory: false,
                        mandatoryEnforced: false
                    });
                }
            }
        }
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().core.customModelApi.addPropertyToType(modelName, name, properties))
            .map(this.toJson)
            .catch(function (err) { return _this.handleError(err); });
    };
    EcmModelService.prototype.cleanNameType = function (name) {
        var cleanName = name;
        if (name.indexOf(':') !== -1) {
            cleanName = name.split(':')[1];
        }
        return cleanName.replace(/[^a-zA-Z ]/g, '');
    };
    EcmModelService.prototype.toJson = function (res) {
        if (res) {
            return res || {};
        }
        return {};
    };
    EcmModelService.prototype.handleError = function (err) {
        this.logService.error(err);
    };
    return EcmModelService;
}());
EcmModelService.MODEL_NAMESPACE = 'activitiForms';
EcmModelService.MODEL_NAME = 'activitiFormsModel';
EcmModelService.TYPE_MODEL = 'cm:folder';
EcmModelService = EcmModelService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _b || Object])
], EcmModelService);
exports.EcmModelService = EcmModelService;
var EcmModelService_1, _a, _b;


/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(646);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(648);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(649);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(650);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(651);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(652);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(653);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(654);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(655);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(656);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(657);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(658);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(659);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(660);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(661);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(662);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(663);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(664);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(665);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(666);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(667);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(668);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(669);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 8:
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
var form_service_1 = __webpack_require__(4);
var index_1 = __webpack_require__(68);
exports.baseHost = {
    '(click)': 'event($event)',
    '(blur)': 'event($event)',
    '(change)': 'event($event)',
    '(focus)': 'event($event)',
    '(focusin)': 'event($event)',
    '(focusout)': 'event($event)',
    '(input)': 'event($event)',
    '(invalid)': 'event($event)',
    '(select)': 'event($event)'
};
var WidgetComponent = WidgetComponent_1 = (function () {
    function WidgetComponent(formService) {
        this.formService = formService;
        this.readOnly = false;
        this.fieldChanged = new core_1.EventEmitter();
    }
    WidgetComponent.prototype.hasField = function () {
        return this.field ? true : false;
    };
    WidgetComponent.prototype.isRequired = function () {
        if (this.field && this.field.required) {
            return true;
        }
        return null;
    };
    WidgetComponent.prototype.isValid = function () {
        return this.field.validationSummary ? true : false;
    };
    WidgetComponent.prototype.hasValue = function () {
        return this.field &&
            this.field.value !== null &&
            this.field.value !== undefined;
    };
    WidgetComponent.prototype.isInvalidFieldRequired = function () {
        return !this.field.isValid && !this.field.validationSummary && this.isRequired();
    };
    WidgetComponent.prototype.ngAfterViewInit = function () {
        this.fieldChanged.emit(this.field);
    };
    WidgetComponent.prototype.checkVisibility = function (field) {
        console.log('WidgetComponent.checkVisibility was used only to trigger visibility engine, components should do that internally if needed');
        this.fieldChanged.emit(field);
    };
    WidgetComponent.prototype.onFieldChanged = function (field) {
        console.log('WidgetComponent.onFieldChanged was used only to trigger visibility engine, components should do that internally if needed');
        this.fieldChanged.emit(field);
    };
    WidgetComponent.prototype.getHyperlinkUrl = function (field) {
        var url = WidgetComponent_1.DEFAULT_HYPERLINK_URL;
        if (field && field.hyperlinkUrl) {
            url = field.hyperlinkUrl;
            if (!/^https?:\/\//i.test(url)) {
                url = "" + WidgetComponent_1.DEFAULT_HYPERLINK_SCHEME + url;
            }
        }
        return url;
    };
    WidgetComponent.prototype.getHyperlinkText = function (field) {
        if (field) {
            return field.displayText || field.hyperlinkUrl;
        }
        return null;
    };
    WidgetComponent.prototype.event = function (event) {
        console.log(event);
        this.formService.formEvents.next(event);
    };
    return WidgetComponent;
}());
WidgetComponent.DEFAULT_HYPERLINK_URL = '#';
WidgetComponent.DEFAULT_HYPERLINK_SCHEME = 'http://';
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "readOnly", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof index_1.FormFieldModel !== "undefined" && index_1.FormFieldModel) === "function" && _a || Object)
], WidgetComponent.prototype, "field", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], WidgetComponent.prototype, "fieldChanged", void 0);
WidgetComponent = WidgetComponent_1 = __decorate([
    core_1.Component({
        selector: 'base-widget',
        template: '',
        host: exports.baseHost,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof form_service_1.FormService !== "undefined" && form_service_1.FormService) === "function" && _c || Object])
], WidgetComponent);
exports.WidgetComponent = WidgetComponent;
var WidgetComponent_1, _a, _b, _c;


/***/ }),

/***/ 804:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_804__;

/***/ }),

/***/ 818:
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
var http_1 = __webpack_require__(20);
var ng2_alfresco_core_1 = __webpack_require__(1);
var ng2_alfresco_datatable_1 = __webpack_require__(10);
var form_field_component_1 = __webpack_require__(351);
var form_list_component_1 = __webpack_require__(124);
var form_component_1 = __webpack_require__(30);
var material_module_1 = __webpack_require__(352);
var start_form_component_1 = __webpack_require__(40);
var content_widget_1 = __webpack_require__(41);
var index_1 = __webpack_require__(88);
var widget_component_1 = __webpack_require__(8);
var activiti_alfresco_service_1 = __webpack_require__(193);
var activiti_content_service_1 = __webpack_require__(125);
var ecm_model_service_1 = __webpack_require__(72);
var form_rendering_service_1 = __webpack_require__(89);
var form_service_1 = __webpack_require__(4);
var node_service_1 = __webpack_require__(90);
var widget_visibility_service_1 = __webpack_require__(25);
__export(__webpack_require__(30));
__export(__webpack_require__(124));
__export(__webpack_require__(41));
__export(__webpack_require__(40));
__export(__webpack_require__(4));
__export(__webpack_require__(125));
__export(__webpack_require__(88));
__export(__webpack_require__(72));
__export(__webpack_require__(90));
__export(__webpack_require__(89));
__export(__webpack_require__(111));
var form_field_validator_1 = __webpack_require__(84);
exports.FORM_FIELD_VALIDATORS = form_field_validator_1.FORM_FIELD_VALIDATORS;
var form_component_2 = __webpack_require__(30);
var start_form_component_2 = __webpack_require__(40);
var content_widget_2 = __webpack_require__(41);
var form_component_3 = __webpack_require__(30);
exports.ActivitiForm = form_component_3.FormComponent;
var content_widget_3 = __webpack_require__(41);
exports.ActivitiContent = content_widget_3.ContentWidgetComponent;
var start_form_component_3 = __webpack_require__(40);
exports.ActivitiStartForm = start_form_component_3.StartFormComponent;
exports.ACTIVITI_FORM_DIRECTIVES = [
    form_component_1.FormComponent,
    form_list_component_1.FormListComponent,
    content_widget_1.ContentWidgetComponent,
    start_form_component_1.StartFormComponent,
    form_field_component_1.FormFieldComponent
].concat(index_1.WIDGET_DIRECTIVES);
exports.DEPRECATED_FORM_DIRECTIVES = [
    form_component_2.FormComponent,
    content_widget_2.ContentWidgetComponent,
    start_form_component_2.StartFormComponent
];
exports.ACTIVITI_FORM_PROVIDERS = [
    form_service_1.FormService,
    activiti_content_service_1.ActivitiContentService,
    ecm_model_service_1.EcmModelService,
    node_service_1.NodeService,
    widget_visibility_service_1.WidgetVisibilityService,
    activiti_alfresco_service_1.ActivitiAlfrescoContentService,
    form_rendering_service_1.FormRenderingService
];
var ActivitiFormModule = ActivitiFormModule_1 = (function () {
    function ActivitiFormModule() {
    }
    ActivitiFormModule.forRoot = function () {
        return {
            ngModule: ActivitiFormModule_1,
            providers: exports.ACTIVITI_FORM_PROVIDERS.slice()
        };
    };
    return ActivitiFormModule;
}());
ActivitiFormModule = ActivitiFormModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            ng2_alfresco_core_1.CoreModule,
            ng2_alfresco_datatable_1.DataTableModule,
            http_1.HttpModule,
            material_module_1.MaterialModule
        ],
        declarations: exports.ACTIVITI_FORM_DIRECTIVES.concat(exports.DEPRECATED_FORM_DIRECTIVES, index_1.MASK_DIRECTIVE, [
            widget_component_1.WidgetComponent
        ]),
        entryComponents: index_1.WIDGET_DIRECTIVES.slice(),
        providers: exports.ACTIVITI_FORM_PROVIDERS.concat([
            {
                provide: ng2_alfresco_core_1.TRANSLATION_PROVIDER,
                multi: true,
                useValue: {
                    name: 'ng2-activiti-form',
                    source: 'assets/ng2-activiti-form'
                }
            }
        ]),
        exports: exports.ACTIVITI_FORM_DIRECTIVES.concat(exports.DEPRECATED_FORM_DIRECTIVES, [
            material_module_1.MaterialModule
        ])
    })
], ActivitiFormModule);
exports.ActivitiFormModule = ActivitiFormModule;
var ActivitiFormModule_1;


/***/ }),

/***/ 82:
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
var FormFieldTypes = (function () {
    function FormFieldTypes() {
    }
    FormFieldTypes.isReadOnlyType = function (type) {
        return FormFieldTypes.READONLY_TYPES.indexOf(type) > -1;
    };
    FormFieldTypes.isContainerType = function (type) {
        return type === FormFieldTypes.CONTAINER || type === FormFieldTypes.GROUP;
    };
    return FormFieldTypes;
}());
FormFieldTypes.CONTAINER = 'container';
FormFieldTypes.GROUP = 'group';
FormFieldTypes.DYNAMIC_TABLE = 'dynamic-table';
FormFieldTypes.TEXT = 'text';
FormFieldTypes.MULTILINE_TEXT = 'multi-line-text';
FormFieldTypes.DROPDOWN = 'dropdown';
FormFieldTypes.HYPERLINK = 'hyperlink';
FormFieldTypes.RADIO_BUTTONS = 'radio-buttons';
FormFieldTypes.DISPLAY_VALUE = 'readonly';
FormFieldTypes.READONLY_TEXT = 'readonly-text';
FormFieldTypes.UPLOAD = 'upload';
FormFieldTypes.TYPEAHEAD = 'typeahead';
FormFieldTypes.FUNCTIONAL_GROUP = 'functional-group';
FormFieldTypes.PEOPLE = 'people';
FormFieldTypes.BOOLEAN = 'boolean';
FormFieldTypes.NUMBER = 'integer';
FormFieldTypes.DATE = 'date';
FormFieldTypes.AMOUNT = 'amount';
FormFieldTypes.DOCUMENT = 'document';
FormFieldTypes.READONLY_TYPES = [
    FormFieldTypes.HYPERLINK,
    FormFieldTypes.DISPLAY_VALUE,
    FormFieldTypes.READONLY_TEXT
];
exports.FormFieldTypes = FormFieldTypes;


/***/ }),

/***/ 84:
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
var moment = __webpack_require__(14);
var form_field_types_1 = __webpack_require__(82);
var RequiredFieldValidator = (function () {
    function RequiredFieldValidator() {
        this.supportedTypes = [
            form_field_types_1.FormFieldTypes.TEXT,
            form_field_types_1.FormFieldTypes.MULTILINE_TEXT,
            form_field_types_1.FormFieldTypes.NUMBER,
            form_field_types_1.FormFieldTypes.TYPEAHEAD,
            form_field_types_1.FormFieldTypes.DROPDOWN,
            form_field_types_1.FormFieldTypes.PEOPLE,
            form_field_types_1.FormFieldTypes.FUNCTIONAL_GROUP,
            form_field_types_1.FormFieldTypes.RADIO_BUTTONS,
            form_field_types_1.FormFieldTypes.UPLOAD,
            form_field_types_1.FormFieldTypes.AMOUNT,
            form_field_types_1.FormFieldTypes.DYNAMIC_TABLE,
            form_field_types_1.FormFieldTypes.DATE
        ];
    }
    RequiredFieldValidator.prototype.isSupported = function (field) {
        return field &&
            this.supportedTypes.indexOf(field.type) > -1 &&
            field.required;
    };
    RequiredFieldValidator.prototype.validate = function (field) {
        if (this.isSupported(field)) {
            if (field.type === form_field_types_1.FormFieldTypes.DROPDOWN) {
                if (field.hasEmptyValue && field.emptyOption) {
                    if (field.value === field.emptyOption.id) {
                        return false;
                    }
                }
            }
            if (field.type === form_field_types_1.FormFieldTypes.RADIO_BUTTONS) {
                var option = field.options.find(function (opt) { return opt.id === field.value; });
                return !!option;
            }
            if (field.type === form_field_types_1.FormFieldTypes.UPLOAD) {
                return field.value && field.value.length > 0;
            }
            if (field.type === form_field_types_1.FormFieldTypes.DYNAMIC_TABLE) {
                return field.value && field.value instanceof Array && field.value.length > 0;
            }
            if (field.value === null || field.value === undefined || field.value === '') {
                return false;
            }
        }
        return true;
    };
    return RequiredFieldValidator;
}());
exports.RequiredFieldValidator = RequiredFieldValidator;
var NumberFieldValidator = (function () {
    function NumberFieldValidator() {
        this.supportedTypes = [
            form_field_types_1.FormFieldTypes.NUMBER,
            form_field_types_1.FormFieldTypes.AMOUNT
        ];
    }
    NumberFieldValidator.isNumber = function (value) {
        if (value === null || value === undefined || value === '') {
            return false;
        }
        return !isNaN(+value);
    };
    NumberFieldValidator.prototype.isSupported = function (field) {
        return field && this.supportedTypes.indexOf(field.type) > -1;
    };
    NumberFieldValidator.prototype.validate = function (field) {
        if (this.isSupported(field)) {
            if (field.value === null ||
                field.value === undefined ||
                field.value === '') {
                return true;
            }
            var valueStr = '' + field.value;
            var pattern = new RegExp(/^-?\d+$/);
            if (field.enableFractions) {
                pattern = new RegExp(/^-?[0-9]+(\.[0-9]{1,2})?$/);
            }
            if (valueStr.match(pattern)) {
                return true;
            }
            field.validationSummary = 'Incorrect number format';
            return false;
        }
        return true;
    };
    return NumberFieldValidator;
}());
exports.NumberFieldValidator = NumberFieldValidator;
var DateFieldValidator = (function () {
    function DateFieldValidator() {
        this.supportedTypes = [
            form_field_types_1.FormFieldTypes.DATE
        ];
    }
    DateFieldValidator.isValidDate = function (inputDate, dateFormat) {
        if (dateFormat === void 0) { dateFormat = 'D-M-YYYY'; }
        if (inputDate) {
            var d = moment(inputDate, dateFormat, true);
            return d.isValid();
        }
        return false;
    };
    DateFieldValidator.prototype.isSupported = function (field) {
        return field && this.supportedTypes.indexOf(field.type) > -1;
    };
    DateFieldValidator.prototype.validate = function (field) {
        if (this.isSupported(field) && field.value) {
            if (DateFieldValidator.isValidDate(field.value, field.dateDisplayFormat)) {
                return true;
            }
            field.validationSummary = field.dateDisplayFormat;
            return false;
        }
        return true;
    };
    return DateFieldValidator;
}());
exports.DateFieldValidator = DateFieldValidator;
var MinDateFieldValidator = (function () {
    function MinDateFieldValidator() {
        this.supportedTypes = [
            form_field_types_1.FormFieldTypes.DATE
        ];
    }
    MinDateFieldValidator.prototype.isSupported = function (field) {
        return field &&
            this.supportedTypes.indexOf(field.type) > -1 && !!field.minValue;
    };
    MinDateFieldValidator.prototype.validate = function (field) {
        if (this.isSupported(field) && field.value) {
            var dateFormat = field.dateDisplayFormat;
            if (!DateFieldValidator.isValidDate(field.value, dateFormat)) {
                field.validationSummary = 'Invalid date format';
                return false;
            }
            var d = void 0;
            if (typeof field.value === 'string') {
                d = moment(field.value.split('T')[0], dateFormat);
            }
            else {
                d = field.value;
            }
            var min = moment(field.minValue, dateFormat);
            if (d.isBefore(min)) {
                field.validationSummary = "Should not be less than " + field.minValue;
                return false;
            }
        }
        return true;
    };
    return MinDateFieldValidator;
}());
exports.MinDateFieldValidator = MinDateFieldValidator;
var MaxDateFieldValidator = (function () {
    function MaxDateFieldValidator() {
        this.supportedTypes = [
            form_field_types_1.FormFieldTypes.DATE
        ];
    }
    MaxDateFieldValidator.prototype.isSupported = function (field) {
        return field &&
            this.supportedTypes.indexOf(field.type) > -1 && !!field.maxValue;
    };
    MaxDateFieldValidator.prototype.validate = function (field) {
        if (this.isSupported(field) && field.value) {
            var dateFormat = field.dateDisplayFormat;
            if (!DateFieldValidator.isValidDate(field.value, dateFormat)) {
                field.validationSummary = 'Invalid date format';
                return false;
            }
            var d = void 0;
            if (typeof field.value === 'string') {
                d = moment(field.value.split('T')[0], dateFormat);
            }
            else {
                d = field.value;
            }
            var max = moment(field.maxValue, dateFormat);
            if (d.isAfter(max)) {
                field.validationSummary = "Should not be greater than " + field.maxValue;
                return false;
            }
        }
        return true;
    };
    return MaxDateFieldValidator;
}());
exports.MaxDateFieldValidator = MaxDateFieldValidator;
var MinLengthFieldValidator = (function () {
    function MinLengthFieldValidator() {
        this.supportedTypes = [
            form_field_types_1.FormFieldTypes.TEXT,
            form_field_types_1.FormFieldTypes.MULTILINE_TEXT
        ];
    }
    MinLengthFieldValidator.prototype.isSupported = function (field) {
        return field &&
            this.supportedTypes.indexOf(field.type) > -1 &&
            field.minLength > 0;
    };
    MinLengthFieldValidator.prototype.validate = function (field) {
        if (this.isSupported(field) && field.value) {
            if (field.value.length >= field.minLength) {
                return true;
            }
            field.validationSummary = "Should be at least " + field.minLength + " characters long.";
            return false;
        }
        return true;
    };
    return MinLengthFieldValidator;
}());
exports.MinLengthFieldValidator = MinLengthFieldValidator;
var MaxLengthFieldValidator = (function () {
    function MaxLengthFieldValidator() {
        this.supportedTypes = [
            form_field_types_1.FormFieldTypes.TEXT,
            form_field_types_1.FormFieldTypes.MULTILINE_TEXT
        ];
    }
    MaxLengthFieldValidator.prototype.isSupported = function (field) {
        return field &&
            this.supportedTypes.indexOf(field.type) > -1 &&
            field.maxLength > 0;
    };
    MaxLengthFieldValidator.prototype.validate = function (field) {
        if (this.isSupported(field) && field.value) {
            if (field.value.length <= field.maxLength) {
                return true;
            }
            field.validationSummary = "Should be " + field.maxLength + " characters maximum.";
            return false;
        }
        return true;
    };
    return MaxLengthFieldValidator;
}());
exports.MaxLengthFieldValidator = MaxLengthFieldValidator;
var MinValueFieldValidator = (function () {
    function MinValueFieldValidator() {
        this.supportedTypes = [
            form_field_types_1.FormFieldTypes.NUMBER,
            form_field_types_1.FormFieldTypes.AMOUNT
        ];
    }
    MinValueFieldValidator.prototype.isSupported = function (field) {
        return field &&
            this.supportedTypes.indexOf(field.type) > -1 &&
            NumberFieldValidator.isNumber(field.minValue);
    };
    MinValueFieldValidator.prototype.validate = function (field) {
        if (this.isSupported(field) && field.value) {
            var value = +field.value;
            var minValue = +field.minValue;
            if (value >= minValue) {
                return true;
            }
            field.validationSummary = "Should not be less than " + field.minValue;
            return false;
        }
        return true;
    };
    return MinValueFieldValidator;
}());
exports.MinValueFieldValidator = MinValueFieldValidator;
var MaxValueFieldValidator = (function () {
    function MaxValueFieldValidator() {
        this.supportedTypes = [
            form_field_types_1.FormFieldTypes.NUMBER,
            form_field_types_1.FormFieldTypes.AMOUNT
        ];
    }
    MaxValueFieldValidator.prototype.isSupported = function (field) {
        return field &&
            this.supportedTypes.indexOf(field.type) > -1 &&
            NumberFieldValidator.isNumber(field.maxValue);
    };
    MaxValueFieldValidator.prototype.validate = function (field) {
        if (this.isSupported(field) && field.value) {
            var value = +field.value;
            var maxValue = +field.maxValue;
            if (value <= maxValue) {
                return true;
            }
            field.validationSummary = "Should not be greater than " + field.maxValue;
            return false;
        }
        return true;
    };
    return MaxValueFieldValidator;
}());
exports.MaxValueFieldValidator = MaxValueFieldValidator;
var RegExFieldValidator = (function () {
    function RegExFieldValidator() {
        this.supportedTypes = [
            form_field_types_1.FormFieldTypes.TEXT,
            form_field_types_1.FormFieldTypes.MULTILINE_TEXT
        ];
    }
    RegExFieldValidator.prototype.isSupported = function (field) {
        return field &&
            this.supportedTypes.indexOf(field.type) > -1 && !!field.regexPattern;
    };
    RegExFieldValidator.prototype.validate = function (field) {
        if (this.isSupported(field) && field.value) {
            if (field.value.length > 0 && field.value.match(new RegExp('^' + field.regexPattern + '$'))) {
                return true;
            }
            field.validationSummary = 'Invalid value format';
            return false;
        }
        return true;
    };
    return RegExFieldValidator;
}());
exports.RegExFieldValidator = RegExFieldValidator;
exports.FORM_FIELD_VALIDATORS = [
    new RequiredFieldValidator(),
    new NumberFieldValidator(),
    new MinLengthFieldValidator(),
    new MaxLengthFieldValidator(),
    new MinValueFieldValidator(),
    new MaxValueFieldValidator(),
    new RegExFieldValidator(),
    new DateFieldValidator(),
    new MinDateFieldValidator(),
    new MaxDateFieldValidator()
];


/***/ }),

/***/ 88:
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
var container_widget_1 = __webpack_require__(313);
var tabs_widget_1 = __webpack_require__(335);
var unknown_widget_1 = __webpack_require__(339);
var amount_widget_1 = __webpack_require__(310);
var attach_widget_1 = __webpack_require__(311);
var checkbox_widget_1 = __webpack_require__(312);
var date_widget_1 = __webpack_require__(319);
var display_text_widget_1 = __webpack_require__(320);
var dropdown_widget_1 = __webpack_require__(321);
var dynamic_table_widget_1 = __webpack_require__(322);
var boolean_editor_1 = __webpack_require__(323);
var date_editor_1 = __webpack_require__(324);
var dropdown_editor_1 = __webpack_require__(325);
var row_editor_1 = __webpack_require__(326);
var text_editor_1 = __webpack_require__(327);
var error_component_1 = __webpack_require__(328);
var functional_group_widget_1 = __webpack_require__(329);
var hyperlink_widget_1 = __webpack_require__(330);
var multiline_text_widget_1 = __webpack_require__(331);
var number_widget_1 = __webpack_require__(332);
var people_widget_1 = __webpack_require__(333);
var radio_buttons_widget_1 = __webpack_require__(334);
var text_mask_component_1 = __webpack_require__(336);
var text_widget_1 = __webpack_require__(337);
var typeahead_widget_1 = __webpack_require__(338);
var upload_widget_1 = __webpack_require__(340);
var widget_component_1 = __webpack_require__(8);
__export(__webpack_require__(8));
__export(__webpack_require__(68));
__export(__webpack_require__(335));
__export(__webpack_require__(313));
__export(__webpack_require__(339));
__export(__webpack_require__(337));
__export(__webpack_require__(332));
__export(__webpack_require__(312));
__export(__webpack_require__(331));
__export(__webpack_require__(321));
__export(__webpack_require__(330));
__export(__webpack_require__(334));
__export(__webpack_require__(320));
__export(__webpack_require__(340));
__export(__webpack_require__(311));
__export(__webpack_require__(338));
__export(__webpack_require__(329));
__export(__webpack_require__(333));
__export(__webpack_require__(319));
__export(__webpack_require__(310));
__export(__webpack_require__(322));
__export(__webpack_require__(328));
__export(__webpack_require__(326));
__export(__webpack_require__(324));
__export(__webpack_require__(325));
__export(__webpack_require__(323));
__export(__webpack_require__(327));
__export(__webpack_require__(336));
exports.WIDGET_DIRECTIVES = [
    widget_component_1.WidgetComponent,
    unknown_widget_1.UnknownWidgetComponent,
    tabs_widget_1.TabsWidgetComponent,
    container_widget_1.ContainerWidgetComponent,
    text_widget_1.TextWidgetComponent,
    number_widget_1.NumberWidgetComponent,
    checkbox_widget_1.CheckboxWidgetComponent,
    multiline_text_widget_1.MultilineTextWidgetComponentComponent,
    dropdown_widget_1.DropdownWidgetComponent,
    hyperlink_widget_1.HyperlinkWidgetComponent,
    radio_buttons_widget_1.RadioButtonsWidgetComponent,
    display_text_widget_1.DisplayTextWidgetComponentComponent,
    upload_widget_1.UploadWidgetComponent,
    attach_widget_1.AttachWidgetComponent,
    typeahead_widget_1.TypeaheadWidgetComponent,
    functional_group_widget_1.FunctionalGroupWidgetComponent,
    people_widget_1.PeopleWidgetComponent,
    date_widget_1.DateWidgetComponent,
    amount_widget_1.AmountWidgetComponent,
    dynamic_table_widget_1.DynamicTableWidgetComponent,
    date_editor_1.DateEditorComponent,
    dropdown_editor_1.DropdownEditorComponent,
    boolean_editor_1.BooleanEditorComponent,
    text_editor_1.TextEditorComponent,
    row_editor_1.RowEditorComponent,
    error_component_1.ErrorWidgetComponent
];
exports.MASK_DIRECTIVE = [
    text_mask_component_1.InputMaskDirective
];


/***/ }),

/***/ 89:
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
var index_1 = __webpack_require__(88);
var FormRenderingService = (function () {
    function FormRenderingService() {
        this.types = {
            'text': DefaultTypeResolver.fromType(index_1.TextWidgetComponent),
            'integer': DefaultTypeResolver.fromType(index_1.NumberWidgetComponent),
            'multi-line-text': DefaultTypeResolver.fromType(index_1.MultilineTextWidgetComponentComponent),
            'boolean': DefaultTypeResolver.fromType(index_1.CheckboxWidgetComponent),
            'dropdown': DefaultTypeResolver.fromType(index_1.DropdownWidgetComponent),
            'date': DefaultTypeResolver.fromType(index_1.DateWidgetComponent),
            'amount': DefaultTypeResolver.fromType(index_1.AmountWidgetComponent),
            'radio-buttons': DefaultTypeResolver.fromType(index_1.RadioButtonsWidgetComponent),
            'hyperlink': DefaultTypeResolver.fromType(index_1.HyperlinkWidgetComponent),
            'readonly-text': DefaultTypeResolver.fromType(index_1.DisplayTextWidgetComponentComponent),
            'typeahead': DefaultTypeResolver.fromType(index_1.TypeaheadWidgetComponent),
            'people': DefaultTypeResolver.fromType(index_1.PeopleWidgetComponent),
            'functional-group': DefaultTypeResolver.fromType(index_1.FunctionalGroupWidgetComponent),
            'dynamic-table': DefaultTypeResolver.fromType(index_1.DynamicTableWidgetComponent),
            'container': DefaultTypeResolver.fromType(index_1.ContainerWidgetComponent),
            'group': DefaultTypeResolver.fromType(index_1.ContainerWidgetComponent)
        };
        this.types['upload'] = function (field) {
            if (field) {
                var params = field.params;
                if (params && params.link) {
                    return index_1.AttachWidgetComponent;
                }
                return index_1.UploadWidgetComponent;
            }
            return index_1.UnknownWidgetComponent;
        };
    }
    FormRenderingService.prototype.getComponentTypeResolver = function (fieldType, defaultValue) {
        if (defaultValue === void 0) { defaultValue = index_1.UnknownWidgetComponent; }
        if (fieldType) {
            return this.types[fieldType] || DefaultTypeResolver.fromType(defaultValue);
        }
        return DefaultTypeResolver.fromType(defaultValue);
    };
    FormRenderingService.prototype.setComponentTypeResolver = function (fieldType, resolver, override) {
        if (override === void 0) { override = false; }
        if (!fieldType) {
            throw new Error("fieldType is null or not defined");
        }
        if (!resolver) {
            throw new Error("resolver is null or not defined");
        }
        var existing = this.types[fieldType];
        if (existing && !override) {
            throw new Error("already mapped, use override option if you intend replacing existing mapping.");
        }
        this.types[fieldType] = resolver;
    };
    FormRenderingService.prototype.resolveComponentType = function (field, defaultValue) {
        if (defaultValue === void 0) { defaultValue = index_1.UnknownWidgetComponent; }
        if (field) {
            var resolver = this.getComponentTypeResolver(field.type, defaultValue);
            return resolver(field);
        }
        return defaultValue;
    };
    return FormRenderingService;
}());
FormRenderingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], FormRenderingService);
exports.FormRenderingService = FormRenderingService;
var DefaultTypeResolver = (function () {
    function DefaultTypeResolver() {
    }
    DefaultTypeResolver.fromType = function (type) {
        return function (field) {
            return type;
        };
    };
    return DefaultTypeResolver;
}());
exports.DefaultTypeResolver = DefaultTypeResolver;


/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),

/***/ 90:
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
var Rx_1 = __webpack_require__(2);
var node_metadata_model_1 = __webpack_require__(462);
var NodeService = (function () {
    function NodeService(apiService) {
        this.apiService = apiService;
    }
    NodeService.prototype.getNodeMetadata = function (nodeId) {
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().nodes.getNodeInfo(nodeId)).map(this.cleanMetadataFromSemicolon);
    };
    NodeService.prototype.createNodeMetadata = function (nodeType, nameSpace, data, path, name) {
        var properties = {};
        for (var key in data) {
            if (data[key]) {
                properties[nameSpace + ':' + key] = data[key];
            }
        }
        return this.createNode(name || this.generateUuid(), nodeType, properties, path);
    };
    NodeService.prototype.createNode = function (name, nodeType, properties, path) {
        var body = {
            name: name,
            nodeType: nodeType,
            properties: properties,
            relativePath: path
        };
        var apiService = this.apiService.getInstance();
        return Rx_1.Observable.fromPromise(apiService.nodes.addNode('-root-', body, {}));
    };
    NodeService.prototype.generateUuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    NodeService.prototype.cleanMetadataFromSemicolon = function (data) {
        var metadata = {};
        if (data && data.properties) {
            for (var key in data.properties) {
                if (key) {
                    if (key.indexOf(':') !== -1) {
                        metadata[key.split(':')[1]] = data.properties[key];
                    }
                    else {
                        metadata[key] = data.properties[key];
                    }
                }
            }
        }
        return new node_metadata_model_1.NodeMetadata(metadata, data.nodeType);
    };
    return NodeService;
}());
NodeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _a || Object])
], NodeService);
exports.NodeService = NodeService;
var _a;


/***/ })

/******/ });
});
//# sourceMappingURL=ng2-activiti-form.js.map