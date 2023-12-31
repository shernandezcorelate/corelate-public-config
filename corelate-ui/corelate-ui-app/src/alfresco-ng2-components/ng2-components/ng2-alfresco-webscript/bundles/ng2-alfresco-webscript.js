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
		module.exports = factory(require("@angular/core"), require("ng2-alfresco-core"), require("ng2-alfresco-datatable"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "ng2-alfresco-core", "ng2-alfresco-datatable"], factory);
	else if(typeof exports === 'object')
		exports["ng2-alfresco-webscript"] = factory(require("@angular/core"), require("ng2-alfresco-core"), require("ng2-alfresco-datatable"));
	else
		root["ng2-alfresco-webscript"] = factory(root["@angular/core"], root["ng2-alfresco-core"], root["ng2-alfresco-datatable"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_10__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 831);
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

/***/ 180:
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
var ng2_alfresco_datatable_1 = __webpack_require__(10);
var WebscriptComponent = (function () {
    function WebscriptComponent(apiService, logService) {
        this.apiService = apiService;
        this.logService = logService;
        this.showData = true;
        this.contextRoot = 'alfresco';
        this.servicePath = 'service';
        this.contentType = 'TEXT';
        this.onSuccess = new core_1.EventEmitter();
        this.data = undefined;
        this.showError = false;
    }
    WebscriptComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.showData) {
            this.clean();
        }
        return new Promise(function (resolve, reject) {
            _this.apiService.getInstance().webScript.executeWebScript('GET', _this.scriptPath, _this.scriptArgs, _this.contextRoot, _this.servicePath).then(function (webScriptdata) {
                _this.data = webScriptdata;
                if (_this.showData) {
                    if (_this.contentType === 'DATATABLE') {
                        _this.data = _this.showDataAsDataTable(webScriptdata);
                    }
                }
                _this.onSuccess.emit(_this.data);
                resolve();
            }, function (error) {
                _this.logService.log('Error' + error);
                reject();
            });
        });
    };
    WebscriptComponent.prototype.showDataAsDataTable = function (data) {
        var datatableData = null;
        try {
            if (!data.schema) {
                data.schema = ng2_alfresco_datatable_1.ObjectDataTableAdapter.generateSchema(data.data);
            }
            if (data.schema && data.schema.length > 0) {
                this.data = new ng2_alfresco_datatable_1.ObjectDataTableAdapter(data.data, data.schema);
            }
        }
        catch (e) {
            this.logService.error('error during the cast as datatable');
        }
        return datatableData;
    };
    WebscriptComponent.prototype.clean = function () {
        this.data = undefined;
    };
    WebscriptComponent.prototype.isDataTableContent = function () {
        return this.contentType === 'DATATABLE';
    };
    return WebscriptComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WebscriptComponent.prototype, "scriptPath", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WebscriptComponent.prototype, "scriptArgs", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WebscriptComponent.prototype, "showData", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WebscriptComponent.prototype, "contextRoot", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WebscriptComponent.prototype, "servicePath", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WebscriptComponent.prototype, "contentType", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WebscriptComponent.prototype, "onSuccess", void 0);
WebscriptComponent = __decorate([
    core_1.Component({
        selector: 'adf-webscript-get, alfresco-webscript-get',
        template: "\n        <div *ngIf=\"showData\">\n            <div *ngIf=\"contentType === 'JSON'\" id=\"webscript-data-JSON\">{{data | json}}</div>\n            <div *ngIf=\"contentType === 'HTML'\" id=\"webscript-data-HTML\" [innerHTML]=\"data\"></div>\n            <div *ngIf=\"contentType === 'TEXT'\" id=\"webscript-data-TEXT\" >{{data}}</div>\n            <div *ngIf=\"isDataTableContent()\"><alfresco-datatable id=\"webscript-datatable-wrapper\" [data]=\"data\"></alfresco-datatable><div>\n            <div *ngIf=\"showError\" id=\"error\">Error during the deserialization of {{data}} as {{contentType}}</div>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _b || Object])
], WebscriptComponent);
exports.WebscriptComponent = WebscriptComponent;
var _a, _b;


/***/ }),

/***/ 831:
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
var ng2_alfresco_core_1 = __webpack_require__(1);
var ng2_alfresco_datatable_1 = __webpack_require__(10);
var webscript_component_1 = __webpack_require__(180);
__export(__webpack_require__(180));
exports.WEBSCRIPT_DIRECTIVES = [
    webscript_component_1.WebscriptComponent
];
var WebScriptModule = WebScriptModule_1 = (function () {
    function WebScriptModule() {
    }
    WebScriptModule.forRoot = function () {
        return {
            ngModule: WebScriptModule_1
        };
    };
    return WebScriptModule;
}());
WebScriptModule = WebScriptModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            ng2_alfresco_core_1.CoreModule,
            ng2_alfresco_datatable_1.DataTableModule
        ],
        declarations: exports.WEBSCRIPT_DIRECTIVES.slice(),
        exports: exports.WEBSCRIPT_DIRECTIVES.slice()
    })
], WebScriptModule);
exports.WebScriptModule = WebScriptModule;
var WebScriptModule_1;


/***/ })

/******/ });
});
//# sourceMappingURL=ng2-alfresco-webscript.js.map