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
		module.exports = factory(require("@angular/core"), require("rxjs/Rx"), require("@angular/material"), require("@angular/forms"), require("@angular/common"), require("moment"), require("@angular/http"), require("rxjs/Observable"), require("@angular/router"), require("alfresco-js-api"), require("@angular/platform-browser/animations"), require("@angular/platform-browser"), require("rxjs/Subject"), require("rxjs/add/observable/of"), require("rxjs/add/operator/concat"), require("rxjs/add/operator/map"), require("rxjs/add/operator/merge"), require("rxjs/add/operator/share"), require("rxjs/add/operator/switchMap"), require("rxjs/add/operator/take"), require("rxjs/add/operator/toArray"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "rxjs/Rx", "@angular/material", "@angular/forms", "@angular/common", "moment", "@angular/http", "rxjs/Observable", "@angular/router", "alfresco-js-api", "@angular/platform-browser/animations", "@angular/platform-browser", "rxjs/Subject", "rxjs/add/observable/of", "rxjs/add/operator/concat", "rxjs/add/operator/map", "rxjs/add/operator/merge", "rxjs/add/operator/share", "rxjs/add/operator/switchMap", "rxjs/add/operator/take", "rxjs/add/operator/toArray"], factory);
	else if(typeof exports === 'object')
		exports["ng2-alfresco-core"] = factory(require("@angular/core"), require("rxjs/Rx"), require("@angular/material"), require("@angular/forms"), require("@angular/common"), require("moment"), require("@angular/http"), require("rxjs/Observable"), require("@angular/router"), require("alfresco-js-api"), require("@angular/platform-browser/animations"), require("@angular/platform-browser"), require("rxjs/Subject"), require("rxjs/add/observable/of"), require("rxjs/add/operator/concat"), require("rxjs/add/operator/map"), require("rxjs/add/operator/merge"), require("rxjs/add/operator/share"), require("rxjs/add/operator/switchMap"), require("rxjs/add/operator/take"), require("rxjs/add/operator/toArray"));
	else
		root["ng2-alfresco-core"] = factory(root["@angular/core"], root["rxjs/Rx"], root["@angular/material"], root["@angular/forms"], root["@angular/common"], root["moment"], root["@angular/http"], root["rxjs/Observable"], root["@angular/router"], root["alfresco-js-api"], root["@angular/platform-browser/animations"], root["@angular/platform-browser"], root["rxjs/Subject"], root["rxjs/add/observable/of"], root["rxjs/add/operator/concat"], root["rxjs/add/operator/map"], root["rxjs/add/operator/merge"], root["rxjs/add/operator/share"], root["rxjs/add/operator/switchMap"], root["rxjs/add/operator/take"], root["rxjs/add/operator/toArray"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_83__, __WEBPACK_EXTERNAL_MODULE_387__, __WEBPACK_EXTERNAL_MODULE_805__, __WEBPACK_EXTERNAL_MODULE_806__, __WEBPACK_EXTERNAL_MODULE_807__, __WEBPACK_EXTERNAL_MODULE_808__, __WEBPACK_EXTERNAL_MODULE_809__, __WEBPACK_EXTERNAL_MODULE_810__, __WEBPACK_EXTERNAL_MODULE_811__, __WEBPACK_EXTERNAL_MODULE_812__, __WEBPACK_EXTERNAL_MODULE_813__, __WEBPACK_EXTERNAL_MODULE_814__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 821);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ft_ic_document.43d9bfb2ccae054a56e2ca40c4e6d77e.svg";

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ft_ic_ms_powerpoint.cb1eb5f9ba7cdac57b995b819cb966eb.svg";

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = equals;
/* harmony export (immutable) */ __webpack_exports__["b"] = isDefined;
/* unused harmony export isObject */
/* harmony export (immutable) */ __webpack_exports__["c"] = mergeDeep;
/* tslint:disable */
/**
 * @name equals
 *
 * @description
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param {*} o1 Object or value to compare.
 * @param {*} o2 Object or value to compare.
 * @returns {boolean} True if arguments are equal.
 */
/* tslint:disable */ function equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
    if (t1 == t2 && t1 == 'object') {
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2))
                return false;
            if ((length = o1.length) == o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key]))
                        return false;
                }
                return true;
            }
        }
        else {
            if (Array.isArray(o2)) {
                return false;
            }
            keySet = Object.create(null);
            for (key in o1) {
                if (!equals(o1[key], o2[key])) {
                    return false;
                }
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
/* tslint:enable */
function isDefined(value) {
    return typeof value !== 'undefined' && value !== null;
}
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
function mergeDeep(target, source) {
    target = JSON.parse(JSON.stringify(target));
    source = JSON.parse(JSON.stringify(source));
    var output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(function (key) {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, (_a = {}, _a[key] = source[key], _a));
                }
                else {
                    output[key] = mergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, (_b = {}, _b[key] = source[key], _b));
            }
            var _a, _b;
        });
    }
    return output;
}


/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_translate_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_translate_pipe__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_translate_store__ = __webpack_require__(218);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateLoader", function() { return __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateFakeLoader", function() { return __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "USE_STORE", function() { return __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MissingTranslationHandler", function() { return __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FakeMissingTranslationHandler", function() { return __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateParser", function() { return __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateDefaultParser", function() { return __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateDirective", function() { return __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return __WEBPACK_IMPORTED_MODULE_6__src_translate_pipe__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateModule", function() { return TranslateModule; });















var TranslateModule = (function () {
    function TranslateModule() {
    }
    /**
     * Use this method in your root module to provide the TranslateService
     * @param {TranslateModuleConfig} config
     * @returns {ModuleWithProviders}
     */
    TranslateModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["a" /* TranslateLoader */], useClass: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["b" /* TranslateFakeLoader */] },
                config.parser || { provide: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["a" /* TranslateParser */], useClass: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["b" /* TranslateDefaultParser */] },
                config.missingTranslationHandler || { provide: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["a" /* MissingTranslationHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["b" /* FakeMissingTranslationHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__src_translate_store__["a" /* TranslateStore */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["a" /* USE_STORE */], useValue: config.isolate },
                __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["b" /* TranslateService */]
            ]
        };
    };
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {TranslateModuleConfig} config
     * @returns {ModuleWithProviders}
     */
    TranslateModule.forChild = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["a" /* TranslateLoader */], useClass: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["b" /* TranslateFakeLoader */] },
                config.parser || { provide: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["a" /* TranslateParser */], useClass: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["b" /* TranslateDefaultParser */] },
                config.missingTranslationHandler || { provide: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["a" /* MissingTranslationHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["b" /* FakeMissingTranslationHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["a" /* USE_STORE */], useValue: config.isolate },
                __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["b" /* TranslateService */]
            ]
        };
    };
    return TranslateModule;
}());

TranslateModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_6__src_translate_pipe__["a" /* TranslatePipe */],
                    __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__["a" /* TranslateDirective */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_6__src_translate_pipe__["a" /* TranslatePipe */],
                    __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__["a" /* TranslateDirective */]
                ]
            },] },
];
/** @nocollapse */
TranslateModule.ctorParameters = function () { return []; };


/***/ }),

/***/ 115:
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
var FileUploadStatus;
(function (FileUploadStatus) {
    FileUploadStatus[FileUploadStatus["Pending"] = 0] = "Pending";
    FileUploadStatus[FileUploadStatus["Complete"] = 1] = "Complete";
    FileUploadStatus[FileUploadStatus["Starting"] = 2] = "Starting";
    FileUploadStatus[FileUploadStatus["Progress"] = 3] = "Progress";
    FileUploadStatus[FileUploadStatus["Cancelled"] = 4] = "Cancelled";
    FileUploadStatus[FileUploadStatus["Aborted"] = 5] = "Aborted";
    FileUploadStatus[FileUploadStatus["Error"] = 6] = "Error";
    FileUploadStatus[FileUploadStatus["Deleted"] = 7] = "Deleted";
})(FileUploadStatus = exports.FileUploadStatus || (exports.FileUploadStatus = {}));
var FileModel = (function () {
    function FileModel(file, options) {
        this.status = FileUploadStatus.Pending;
        this.file = file;
        this.id = this.generateId();
        this.name = file.name;
        this.size = file.size;
        this.data = null;
        this.progress = {
            loaded: 0,
            total: 0,
            percent: 0
        };
        this.options = Object.assign({}, {
            newVersion: false
        }, options);
    }
    FileModel.prototype.generateId = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    Object.defineProperty(FileModel.prototype, "extension", {
        get: function () {
            return this.name.slice((Math.max(0, this.name.lastIndexOf('.')) || Infinity) + 1);
        },
        enumerable: true,
        configurable: true
    });
    return FileModel;
}());
exports.FileModel = FileModel;


/***/ }),

/***/ 12:
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
var alfrescoApi = __webpack_require__(83);
var app_config_service_1 = __webpack_require__(17);
var storage_service_1 = __webpack_require__(65);
var AlfrescoApiService = (function () {
    function AlfrescoApiService(appConfig, storage) {
        this.appConfig = appConfig;
        this.storage = storage;
        this.reset();
    }
    AlfrescoApiService.prototype.getInstance = function () {
        return this.alfrescoApi;
    };
    AlfrescoApiService.prototype.reset = function () {
        this.alfrescoApi = new alfrescoApi({
            provider: this.storage.getItem('AUTH_TYPE'),
            ticketEcm: this.storage.getItem('ticket-ECM'),
            ticketBpm: this.storage.getItem('ticket-BPM'),
            hostEcm: this.appConfig.get('ecmHost'),
            hostBpm: this.appConfig.get('bpmHost'),
            contextRoot: 'alfresco',
            disableCsrf: this.storage.getItem('DISABLE_CSRF') === 'true'
        });
    };
    return AlfrescoApiService;
}());
AlfrescoApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_config_service_1.AppConfigService !== "undefined" && app_config_service_1.AppConfigService) === "function" && _a || Object, typeof (_b = typeof storage_service_1.StorageService !== "undefined" && storage_service_1.StorageService) === "function" && _b || Object])
], AlfrescoApiService);
exports.AlfrescoApiService = AlfrescoApiService;
var _a, _b;


/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),

/***/ 132:
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
var common_1 = __webpack_require__(13);
var core_1 = __webpack_require__(0);
var accordion_group_component_1 = __webpack_require__(464);
var accordion_component_1 = __webpack_require__(342);
var CollapsableModule = (function () {
    function CollapsableModule() {
    }
    return CollapsableModule;
}());
CollapsableModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            accordion_component_1.AccordionComponent,
            accordion_group_component_1.AccordionGroupComponent
        ],
        exports: [
            accordion_component_1.AccordionComponent,
            accordion_group_component_1.AccordionGroupComponent
        ]
    })
], CollapsableModule);
exports.CollapsableModule = CollapsableModule;


/***/ }),

/***/ 133:
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
var common_1 = __webpack_require__(13);
var core_1 = __webpack_require__(0);
var context_menu_holder_component_1 = __webpack_require__(465);
var context_menu_directive_1 = __webpack_require__(466);
var context_menu_service_1 = __webpack_require__(191);
var ContextMenuModule = (function () {
    function ContextMenuModule() {
    }
    return ContextMenuModule;
}());
ContextMenuModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            context_menu_holder_component_1.ContextMenuHolderComponent,
            context_menu_directive_1.ContextMenuDirective
        ],
        exports: [
            context_menu_holder_component_1.ContextMenuHolderComponent,
            context_menu_directive_1.ContextMenuDirective
        ],
        providers: [
            context_menu_service_1.ContextMenuService
        ]
    })
], ContextMenuModule);
exports.ContextMenuModule = ContextMenuModule;


/***/ }),

/***/ 134:
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
var data_column_component_1 = __webpack_require__(91);
var DataColumnListComponent = (function () {
    function DataColumnListComponent() {
    }
    return DataColumnListComponent;
}());
__decorate([
    core_1.ContentChildren(data_column_component_1.DataColumnComponent),
    __metadata("design:type", typeof (_a = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _a || Object)
], DataColumnListComponent.prototype, "columns", void 0);
DataColumnListComponent = __decorate([
    core_1.Component({
        selector: 'data-columns',
        template: ''
    })
], DataColumnListComponent);
exports.DataColumnListComponent = DataColumnListComponent;
var _a;


/***/ }),

/***/ 135:
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
var InfoDrawerTabComponent = (function () {
    function InfoDrawerTabComponent() {
        this.label = 'Main tab';
    }
    return InfoDrawerTabComponent;
}());
__decorate([
    core_1.Input('label'),
    __metadata("design:type", String)
], InfoDrawerTabComponent.prototype, "label", void 0);
__decorate([
    core_1.ViewChild(core_1.TemplateRef),
    __metadata("design:type", typeof (_a = typeof core_1.TemplateRef !== "undefined" && core_1.TemplateRef) === "function" && _a || Object)
], InfoDrawerTabComponent.prototype, "content", void 0);
InfoDrawerTabComponent = __decorate([
    core_1.Component({
        selector: 'adf-info-drawer-tab',
        template: '<ng-template><ng-content></ng-content></ng-template>'
    })
], InfoDrawerTabComponent);
exports.InfoDrawerTabComponent = InfoDrawerTabComponent;
var InfoDrawerComponent = (function () {
    function InfoDrawerComponent() {
        this.title = null;
    }
    InfoDrawerComponent.prototype.showTabLayout = function () {
        return this.contentBlocks.length > 0;
    };
    return InfoDrawerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InfoDrawerComponent.prototype, "title", void 0);
__decorate([
    core_1.ContentChildren(InfoDrawerTabComponent),
    __metadata("design:type", typeof (_b = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _b || Object)
], InfoDrawerComponent.prototype, "contentBlocks", void 0);
InfoDrawerComponent = __decorate([
    core_1.Component({
        selector: 'adf-info-drawer',
        template: __webpack_require__(598),
        styles: [__webpack_require__(768)],
        encapsulation: core_1.ViewEncapsulation.None,
        host: { 'class': 'adf-info-drawer' }
    })
], InfoDrawerComponent);
exports.InfoDrawerComponent = InfoDrawerComponent;
var _a, _b;


/***/ }),

/***/ 136:
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
var common_1 = __webpack_require__(13);
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(9);
var material_1 = __webpack_require__(3);
var card_view_content_proxy_directive_1 = __webpack_require__(343);
var card_view_dateitem_component_1 = __webpack_require__(471);
var card_view_item_dispatcher_component_1 = __webpack_require__(472);
var card_view_mapitem_component_1 = __webpack_require__(473);
var card_view_textitem_component_1 = __webpack_require__(474);
var card_view_component_1 = __webpack_require__(475);
var CardViewModule = (function () {
    function CardViewModule() {
    }
    return CardViewModule;
}());
CardViewModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            material_1.MdDatepickerModule,
            material_1.MdNativeDateModule,
            material_1.MdInputModule,
            material_1.MdIconModule,
            material_1.MdButtonModule,
            forms_1.FormsModule
        ],
        declarations: [
            card_view_component_1.CardViewComponent,
            card_view_item_dispatcher_component_1.CardViewItemDispatcherComponent,
            card_view_content_proxy_directive_1.CardViewContentProxyDirective,
            card_view_textitem_component_1.CardViewTextItemComponent,
            card_view_mapitem_component_1.CardViewMapItemComponent,
            card_view_dateitem_component_1.CardViewDateItemComponent
        ],
        entryComponents: [
            card_view_textitem_component_1.CardViewTextItemComponent,
            card_view_mapitem_component_1.CardViewMapItemComponent,
            card_view_dateitem_component_1.CardViewDateItemComponent
        ],
        exports: [
            card_view_component_1.CardViewComponent
        ]
    })
], CardViewModule);
exports.CardViewModule = CardViewModule;


/***/ }),

/***/ 137:
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
var CreateFolderDialogComponent = (function () {
    function CreateFolderDialogComponent() {
        this.value = '';
    }
    return CreateFolderDialogComponent;
}());
CreateFolderDialogComponent = __decorate([
    core_1.Component({
        selector: 'adf-create-folder-dialog',
        template: "\n        <h1 md-dialog-title>Create a new folder</h1>\n        <div md-dialog-content>\n            <md-input-container class=\"create-folder--name\">\n                <input mdInput placeholder=\"Folder name\" [(ngModel)]=\"value\">\n            </md-input-container>\n        </div>\n        <div md-dialog-actions>\n            <button md-button md-dialog-close>Cancel</button>\n            <button md-button [md-dialog-close]=\"value\">Create</button>\n        </div>\n    ",
        styles: [
            "\n        .create-folder--name {\n            width: 100%;\n        }\n        "
        ],
        encapsulation: core_1.ViewEncapsulation.None
    })
], CreateFolderDialogComponent);
exports.CreateFolderDialogComponent = CreateFolderDialogComponent;


/***/ }),

/***/ 138:
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var material_1 = __webpack_require__(3);
var alfresco_api_service_1 = __webpack_require__(12);
var DownloadZipDialogComponent = (function () {
    function DownloadZipDialogComponent(apiService, dialogRef, data) {
        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.cancelled = false;
    }
    Object.defineProperty(DownloadZipDialogComponent.prototype, "downloadsApi", {
        get: function () {
            return this.apiService.getInstance().core.downloadsApi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DownloadZipDialogComponent.prototype, "nodesApi", {
        get: function () {
            return this.apiService.getInstance().core.nodesApi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DownloadZipDialogComponent.prototype, "contentApi", {
        get: function () {
            return this.apiService.getInstance().content;
        },
        enumerable: true,
        configurable: true
    });
    DownloadZipDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data && this.data.nodeIds && this.data.nodeIds.length > 0) {
            setTimeout(function () {
                if (!_this.cancelled) {
                    _this.downloadZip(_this.data.nodeIds);
                }
                else {
                    console.log('Cancelled');
                }
            }, 0);
        }
    };
    DownloadZipDialogComponent.prototype.cancelDownload = function () {
        this.cancelled = true;
        this.dialogRef.close(false);
    };
    DownloadZipDialogComponent.prototype.downloadZip = function (nodeIds) {
        var _this = this;
        if (nodeIds && nodeIds.length > 0) {
            var promise = this.downloadsApi.createDownload({ nodeIds: nodeIds });
            promise.on('progress', function (progress) { return console.log('Progress', progress); });
            promise.on('error', function (error) { return console.log('Error', error); });
            promise.on('abort', function (data) { return console.log('Abort', data); });
            promise.on('success', function (data) {
                console.log('Success', data);
                if (data && data.entry && data.entry.id) {
                    var url_1 = _this.contentApi.getContentUrl(data.entry.id, true);
                    _this.nodesApi.getNode(data.entry.id).then(function (downloadNode) {
                        console.log(downloadNode);
                        var fileName = downloadNode.entry.name;
                        _this.waitAndDownload(data.entry.id, url_1, fileName);
                    });
                }
            });
        }
    };
    DownloadZipDialogComponent.prototype.waitAndDownload = function (downloadId, url, fileName) {
        var _this = this;
        if (this.cancelled) {
            return;
        }
        this.downloadsApi.getDownload(downloadId).then(function (d) {
            if (d.entry) {
                if (d.entry.status === 'DONE') {
                    _this.download(url, fileName);
                }
                else {
                    setTimeout(function () {
                        _this.waitAndDownload(downloadId, url, fileName);
                    }, 1000);
                }
            }
        });
    };
    DownloadZipDialogComponent.prototype.download = function (url, fileName) {
        if (url && fileName) {
            var link = document.createElement('a');
            link.style.display = 'none';
            link.download = fileName;
            link.href = url;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        this.dialogRef.close(true);
    };
    return DownloadZipDialogComponent;
}());
DownloadZipDialogComponent = __decorate([
    core_1.Component({
        selector: 'adf-download-zip-dialog',
        template: "\n        <h1 md-dialog-title>Download as ZIP</h1>\n        <div md-dialog-content>\n            <md-progress-bar color=\"primary\" mode=\"indeterminate\"></md-progress-bar>\n        </div>\n        <div md-dialog-actions>\n            <span class=\"spacer\"></span>\n            <button md-button color=\"primary\" (click)=\"cancelDownload()\">Cancel</button>\n        </div>\n    ",
        styles: ["\n        .spacer { flex: 1 1 auto; }\n\n        .adf-download-zip-dialog .mat-dialog-actions .mat-button-wrapper {\n            text-transform: uppercase;\n        }\n    "],
        host: { 'class': 'adf-download-zip-dialog' },
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __param(2, core_1.Inject(material_1.MD_DIALOG_DATA)),
    __metadata("design:paramtypes", [typeof (_a = typeof alfresco_api_service_1.AlfrescoApiService !== "undefined" && alfresco_api_service_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof material_1.MdDialogRef !== "undefined" && material_1.MdDialogRef) === "function" && _b || Object, Object])
], DownloadZipDialogComponent);
exports.DownloadZipDialogComponent = DownloadZipDialogComponent;
var _a, _b;


/***/ }),

/***/ 139:
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
var highlight_transform_service_1 = __webpack_require__(74);
var HighlightDirective = (function () {
    function HighlightDirective(el, renderer, highlightTransformService) {
        this.el = el;
        this.renderer = renderer;
        this.highlightTransformService = highlightTransformService;
        this.selector = '';
        this.search = '';
        this.classToApply = 'adf-highlight';
    }
    HighlightDirective.prototype.highlight = function (search, selector, classToApply) {
        var _this = this;
        if (search === void 0) { search = this.search; }
        if (selector === void 0) { selector = this.selector; }
        if (classToApply === void 0) { classToApply = this.classToApply; }
        if (search && selector) {
            var elements = this.el.nativeElement.querySelectorAll(selector);
            elements.forEach(function (element) {
                var result = _this.highlightTransformService.highlight(element.innerHTML, search, classToApply);
                if (result.changed) {
                    _this.renderer.setElementProperty(element, 'innerHTML', result.text);
                }
            });
        }
    };
    return HighlightDirective;
}());
__decorate([
    core_1.Input('adf-highlight-selector'),
    __metadata("design:type", String)
], HighlightDirective.prototype, "selector", void 0);
__decorate([
    core_1.Input('adf-highlight'),
    __metadata("design:type", String)
], HighlightDirective.prototype, "search", void 0);
__decorate([
    core_1.Input('adf-highlight-class'),
    __metadata("design:type", String)
], HighlightDirective.prototype, "classToApply", void 0);
HighlightDirective = __decorate([
    core_1.Directive({
        selector: '[adf-highlight]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _b || Object, typeof (_c = typeof highlight_transform_service_1.HighlightTransformService !== "undefined" && highlight_transform_service_1.HighlightTransformService) === "function" && _c || Object])
], HighlightDirective);
exports.HighlightDirective = HighlightDirective;
var _a, _b, _c;


/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),

/***/ 140:
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var injection_tokens_1 = __webpack_require__(202);
var alfresco_content_service_1 = __webpack_require__(73);
var NodePermissionDirective = (function () {
    function NodePermissionDirective(elementRef, renderer, contentService, parentComponent) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.contentService = contentService;
        this.parentComponent = parentComponent;
        this.permission = null;
        this.nodes = [];
    }
    NodePermissionDirective.prototype.ngAfterViewInit = function () {
        this.updateElement();
    };
    NodePermissionDirective.prototype.ngOnChanges = function (changes) {
        if (changes.nodes && !changes.nodes.firstChange) {
            this.updateElement();
        }
    };
    NodePermissionDirective.prototype.updateElement = function () {
        var enable = this.hasPermission(this.nodes, this.permission);
        if (enable) {
            this.enable();
        }
        else {
            this.disable();
        }
        return enable;
    };
    NodePermissionDirective.prototype.enable = function () {
        if (this.parentComponent) {
            this.parentComponent.disabled = false;
        }
        else {
            this.enableElement();
        }
    };
    NodePermissionDirective.prototype.disable = function () {
        if (this.parentComponent) {
            this.parentComponent.disabled = true;
        }
        else {
            this.disableElement();
        }
    };
    NodePermissionDirective.prototype.enableElement = function () {
        this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
    };
    NodePermissionDirective.prototype.disableElement = function () {
        this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'true');
    };
    NodePermissionDirective.prototype.hasPermission = function (nodes, permission) {
        var _this = this;
        if (nodes && nodes.length > 0) {
            return nodes.every(function (node) { return _this.contentService.hasPermission(node.entry, permission); });
        }
        return false;
    };
    return NodePermissionDirective;
}());
__decorate([
    core_1.Input('adf-node-permission'),
    __metadata("design:type", String)
], NodePermissionDirective.prototype, "permission", void 0);
__decorate([
    core_1.Input('adf-nodes'),
    __metadata("design:type", Array)
], NodePermissionDirective.prototype, "nodes", void 0);
NodePermissionDirective = __decorate([
    core_1.Directive({
        selector: '[adf-node-permission]'
    }),
    __param(3, core_1.Host()),
    __param(3, core_1.Optional()),
    __param(3, core_1.Inject(injection_tokens_1.EXTENDIBLE_COMPONENT)),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof core_1.Renderer2 !== "undefined" && core_1.Renderer2) === "function" && _b || Object, typeof (_c = typeof alfresco_content_service_1.AlfrescoContentService !== "undefined" && alfresco_content_service_1.AlfrescoContentService) === "function" && _c || Object, Object])
], NodePermissionDirective);
exports.NodePermissionDirective = NodePermissionDirective;
var _a, _b, _c;


/***/ }),

/***/ 141:
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
var file_utils_1 = __webpack_require__(344);
var UploadDirective = (function () {
    function UploadDirective(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.enabled = true;
        this.mode = ['drop'];
        this.isDragging = false;
        this.cssClassName = 'adf-upload__dragging';
        this.element = el.nativeElement;
    }
    UploadDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isClickMode() && this.renderer) {
            this.upload = this.renderer.createElement(this.el.nativeElement.parentNode, 'input');
            this.upload.type = 'file';
            this.upload.style.display = 'none';
            this.upload.addEventListener('change', function (e) { return _this.onSelectFiles(e); });
            if (this.multiple) {
                this.upload.setAttribute('multiple', '');
            }
            if (this.accept) {
                this.upload.setAttribute('accept', this.accept);
            }
            if (this.directory) {
                this.upload.setAttribute('webkitdirectory', '');
            }
        }
        if (this.isDropMode()) {
            this.ngZone.runOutsideAngular(function () {
                _this.element.addEventListener('dragenter', _this.onDragEnter.bind(_this));
                _this.element.addEventListener('dragover', _this.onDragOver.bind(_this));
                _this.element.addEventListener('dragleave', _this.onDragLeave.bind(_this));
                _this.element.addEventListener('drop', _this.onDrop.bind(_this));
            });
        }
    };
    UploadDirective.prototype.ngOnDestroy = function () {
        this.element.removeEventListener('dragenter', this.onDragEnter);
        this.element.removeEventListener('dragover', this.onDragOver);
        this.element.removeEventListener('dragleave', this.onDragLeave);
        this.element.removeEventListener('drop', this.onDrop);
    };
    UploadDirective.prototype.onClick = function (event) {
        if (this.isClickMode() && this.upload) {
            event.preventDefault();
            this.upload.click();
        }
    };
    UploadDirective.prototype.onDragEnter = function (event) {
        if (this.isDropMode()) {
            this.element.classList.add(this.cssClassName);
            this.isDragging = true;
        }
    };
    UploadDirective.prototype.onDragOver = function (event) {
        event.preventDefault();
        if (this.isDropMode()) {
            this.element.classList.add(this.cssClassName);
            this.isDragging = true;
        }
        return false;
    };
    UploadDirective.prototype.onDragLeave = function (event) {
        if (this.isDropMode()) {
            this.element.classList.remove(this.cssClassName);
            this.isDragging = false;
        }
    };
    UploadDirective.prototype.onDrop = function (event) {
        var _this = this;
        if (this.isDropMode()) {
            event.stopPropagation();
            event.preventDefault();
            this.element.classList.remove(this.cssClassName);
            this.isDragging = false;
            var dataTranfer = this.getDataTransfer(event);
            if (dataTranfer) {
                this.getFilesDropped(dataTranfer).then(function (files) {
                    _this.onUploadFiles(files);
                });
            }
        }
        return false;
    };
    UploadDirective.prototype.onUploadFiles = function (files) {
        if (this.enabled && files.length > 0) {
            var e = new CustomEvent('upload-files', {
                detail: {
                    sender: this,
                    data: this.data,
                    files: files
                },
                bubbles: true
            });
            this.el.nativeElement.dispatchEvent(e);
        }
    };
    UploadDirective.prototype.hasMode = function (mode) {
        return this.enabled && mode && this.mode && this.mode.indexOf(mode) > -1;
    };
    UploadDirective.prototype.isDropMode = function () {
        return this.hasMode('drop');
    };
    UploadDirective.prototype.isClickMode = function () {
        return this.hasMode('click');
    };
    UploadDirective.prototype.getDataTransfer = function (event) {
        if (event && event.dataTransfer) {
            return event.dataTransfer;
        }
        if (event && event.originalEvent && event.originalEvent.dataTransfer) {
            return event.originalEvent.dataTransfer;
        }
        return null;
    };
    UploadDirective.prototype.getFilesDropped = function (dataTransfer) {
        return new Promise(function (resolve) {
            var iterations = [];
            if (dataTransfer) {
                var items = dataTransfer.items;
                if (items) {
                    var _loop_1 = function (i) {
                        if (typeof items[i].webkitGetAsEntry !== 'undefined') {
                            var item_1 = items[i].webkitGetAsEntry();
                            if (item_1) {
                                if (item_1.isFile) {
                                    iterations.push(Promise.resolve({
                                        entry: item_1,
                                        file: items[i].getAsFile(),
                                        relativeFolder: '/'
                                    }));
                                }
                                else if (item_1.isDirectory) {
                                    iterations.push(new Promise(function (resolveFolder) {
                                        file_utils_1.FileUtils.flattern(item_1).then(function (files) { return resolveFolder(files); });
                                    }));
                                }
                            }
                        }
                        else {
                            iterations.push(Promise.resolve({
                                entry: null,
                                file: items[i].getAsFile(),
                                relativeFolder: '/'
                            }));
                        }
                    };
                    for (var i = 0; i < items.length; i++) {
                        _loop_1(i);
                    }
                }
                else {
                    var files = file_utils_1.FileUtils
                        .toFileArray(dataTransfer.files)
                        .map(function (file) { return ({
                        entry: null,
                        file: file,
                        relativeFolder: '/'
                    }); });
                    iterations.push(Promise.resolve(files));
                }
            }
            Promise.all(iterations).then(function (result) {
                resolve(result.reduce(function (a, b) { return a.concat(b); }, []));
            });
        });
    };
    UploadDirective.prototype.onSelectFiles = function (e) {
        if (this.isClickMode()) {
            var input = e.currentTarget;
            var files = file_utils_1.FileUtils.toFileArray(input.files);
            this.onUploadFiles(files.map(function (file) { return ({
                entry: null,
                file: file,
                relativeFolder: '/'
            }); }));
        }
    };
    return UploadDirective;
}());
__decorate([
    core_1.Input('adf-upload'),
    __metadata("design:type", Boolean)
], UploadDirective.prototype, "enabled", void 0);
__decorate([
    core_1.Input('adf-upload-data'),
    __metadata("design:type", Object)
], UploadDirective.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], UploadDirective.prototype, "mode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UploadDirective.prototype, "multiple", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UploadDirective.prototype, "accept", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UploadDirective.prototype, "directory", void 0);
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadDirective.prototype, "onClick", null);
UploadDirective = __decorate([
    core_1.Directive({
        selector: '[adf-upload]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _b || Object, typeof (_c = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _c || Object])
], UploadDirective);
exports.UploadDirective = UploadDirective;
var _a, _b, _c;


/***/ }),

/***/ 142:
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
var moment = __webpack_require__(14);
var core_1 = __webpack_require__(0);
var TimeAgoPipe = (function () {
    function TimeAgoPipe() {
    }
    TimeAgoPipe.prototype.transform = function (value) {
        if (value !== null && value !== undefined) {
            var then = moment(value);
            var diff = moment().diff(then, 'days');
            return diff > 7 ? then.format('DD/MM/YYYY HH:mm') : then.fromNow();
        }
        return '';
    };
    return TimeAgoPipe;
}());
TimeAgoPipe = __decorate([
    core_1.Pipe({
        name: 'adfTimeAgo'
    })
], TimeAgoPipe);
exports.TimeAgoPipe = TimeAgoPipe;


/***/ }),

/***/ 143:
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
var app_config_service_1 = __webpack_require__(17);
var user_preferences_service_1 = __webpack_require__(24);
var AlfrescoSettingsService = (function () {
    function AlfrescoSettingsService(appConfig, preferences) {
        this.appConfig = appConfig;
        this.preferences = preferences;
    }
    Object.defineProperty(AlfrescoSettingsService.prototype, "ecmHost", {
        get: function () {
            console.log('AlfrescoSettingsService.ecmHost is deprecated. Use AppConfigService instead.');
            return this.appConfig.get('ecmHost');
        },
        set: function (ecmHostUrl) {
            console.log('AlfrescoSettingsService.ecmHost is deprecated. Use AppConfigService instead.');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlfrescoSettingsService.prototype, "csrfDisabled", {
        set: function (csrfDisabled) {
            console.log("AlfrescoSettingsService.csrfDisabled is deprecated. Use UserPreferencesService.disableCSRF instead.");
            this.preferences.disableCSRF = csrfDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlfrescoSettingsService.prototype, "bpmHost", {
        get: function () {
            console.log('AlfrescoSettingsService.bpmHost is deprecated. Use AppConfigService instead.');
            return this.appConfig.get('bpmHost');
        },
        set: function (bpmHostUrl) {
            console.log('AlfrescoSettingsService.bpmHost is deprecated. Use AppConfigService instead.');
        },
        enumerable: true,
        configurable: true
    });
    AlfrescoSettingsService.prototype.getBPMApiBaseUrl = function () {
        console.log('AlfrescoSettingsService.getBPMApiBaseUrl is deprecated.');
        return this.bpmHost + '/activiti-app';
    };
    AlfrescoSettingsService.prototype.getProviders = function () {
        console.log("AlfrescoSettingsService.getProviders is deprecated. Use UserPreferencesService.authType instead.");
        return this.preferences.authType;
    };
    AlfrescoSettingsService.prototype.setProviders = function (providers) {
        console.log("AlfrescoSettingsService.getProviders is deprecated. Use UserPreferencesService.authType instead.");
        this.preferences.authType = providers;
    };
    return AlfrescoSettingsService;
}());
AlfrescoSettingsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_config_service_1.AppConfigService !== "undefined" && app_config_service_1.AppConfigService) === "function" && _a || Object, typeof (_b = typeof user_preferences_service_1.UserPreferencesService !== "undefined" && user_preferences_service_1.UserPreferencesService) === "function" && _b || Object])
], AlfrescoSettingsService);
exports.AlfrescoSettingsService = AlfrescoSettingsService;
var _a, _b;


/***/ }),

/***/ 144:
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
var router_1 = __webpack_require__(37);
var authentication_service_1 = __webpack_require__(19);
var AuthGuardBpm = (function () {
    function AuthGuardBpm(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardBpm.prototype.canActivate = function (route, state) {
        return this.checkLogin();
    };
    AuthGuardBpm.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuardBpm.prototype.checkLogin = function () {
        if (this.authService.isBpmLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuardBpm;
}());
AuthGuardBpm = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AuthGuardBpm);
exports.AuthGuardBpm = AuthGuardBpm;
var _a, _b;


/***/ }),

/***/ 145:
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
var router_1 = __webpack_require__(37);
var authentication_service_1 = __webpack_require__(19);
var AuthGuardEcm = (function () {
    function AuthGuardEcm(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardEcm.prototype.canActivate = function (route, state) {
        return this.checkLogin();
    };
    AuthGuardEcm.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuardEcm.prototype.checkLogin = function () {
        if (this.authService.isEcmLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuardEcm;
}());
AuthGuardEcm = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AuthGuardEcm);
exports.AuthGuardEcm = AuthGuardEcm;
var _a, _b;


/***/ }),

/***/ 146:
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
var router_1 = __webpack_require__(37);
var authentication_service_1 = __webpack_require__(19);
var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.checkLogin();
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.checkLogin = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AuthGuard);
exports.AuthGuard = AuthGuard;
var _a, _b;


/***/ }),

/***/ 147:
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
var platform_browser_1 = __webpack_require__(805);
var ContentService = (function () {
    function ContentService(sanitizer) {
        this.sanitizer = sanitizer;
        this.saveData = (function () {
            var a = document.createElement('a');
            document.body.appendChild(a);
            a.style.display = 'none';
            return function (data, format, fileName) {
                var blob = null;
                if (format === 'blob' || format === 'data') {
                    blob = new Blob([data], { type: 'octet/stream' });
                }
                if (format === 'object' || format === 'json') {
                    var json = JSON.stringify(data);
                    blob = new Blob([json], { type: 'octet/stream' });
                }
                if (blob) {
                    var url = window.URL.createObjectURL(blob);
                    a.href = url;
                    a.download = fileName;
                    a.click();
                    window.URL.revokeObjectURL(url);
                }
            };
        }());
    }
    ContentService.prototype.downloadBlob = function (blob, fileName) {
        this.saveData(blob, 'blob', fileName);
    };
    ContentService.prototype.downloadData = function (data, fileName) {
        this.saveData(data, 'data', fileName);
    };
    ContentService.prototype.downloadJSON = function (json, fileName) {
        this.saveData(json, 'json', fileName);
    };
    ContentService.prototype.createTrustedUrl = function (blob) {
        var url = window.URL.createObjectURL(blob);
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    return ContentService;
}());
ContentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof platform_browser_1.DomSanitizer !== "undefined" && platform_browser_1.DomSanitizer) === "function" && _a || Object])
], ContentService);
exports.ContentService = ContentService;
var _a;


/***/ }),

/***/ 148:
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
var alfresco_api_service_1 = __webpack_require__(12);
var user_preferences_service_1 = __webpack_require__(24);
var DeletedNodesApiService = (function () {
    function DeletedNodesApiService(apiService, preferences) {
        this.apiService = apiService;
        this.preferences = preferences;
    }
    Object.defineProperty(DeletedNodesApiService.prototype, "nodesApi", {
        get: function () {
            return this.apiService.getInstance().core.nodesApi;
        },
        enumerable: true,
        configurable: true
    });
    DeletedNodesApiService.prototype.getDeletedNodes = function (options) {
        var _a = this, nodesApi = _a.nodesApi, handleError = _a.handleError;
        var defaultOptions = {
            include: ['path', 'properties'],
            maxItems: this.preferences.paginationSize,
            skipCount: 0
        };
        var queryOptions = Object.assign(defaultOptions, options);
        var promise = nodesApi.getDeletedNodes(queryOptions);
        return Rx_1.Observable
            .fromPromise(promise)
            .catch(handleError);
    };
    DeletedNodesApiService.prototype.handleError = function (error) {
        return Rx_1.Observable.of(error);
    };
    return DeletedNodesApiService;
}());
DeletedNodesApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof alfresco_api_service_1.AlfrescoApiService !== "undefined" && alfresco_api_service_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof user_preferences_service_1.UserPreferencesService !== "undefined" && user_preferences_service_1.UserPreferencesService) === "function" && _b || Object])
], DeletedNodesApiService);
exports.DeletedNodesApiService = DeletedNodesApiService;
var _a, _b;


/***/ }),

/***/ 149:
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
var product_version_model_1 = __webpack_require__(206);
var alfresco_api_service_1 = __webpack_require__(12);
var DiscoveryApiService = (function () {
    function DiscoveryApiService(apiService) {
        this.apiService = apiService;
    }
    DiscoveryApiService.prototype.getEcmProductInfo = function () {
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().discovery.discoveryApi.getRepositoryInformation())
            .map(function (res) { return new product_version_model_1.EcmProductVersionModel(res); })
            .catch(this.handleError);
    };
    DiscoveryApiService.prototype.getBpmProductInfo = function () {
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.aboutApi.getAppVersion())
            .map(function (res) { return new product_version_model_1.BpmProductVersionModel(res); })
            .catch(this.handleError);
    };
    DiscoveryApiService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error);
    };
    return DiscoveryApiService;
}());
DiscoveryApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof alfresco_api_service_1.AlfrescoApiService !== "undefined" && alfresco_api_service_1.AlfrescoApiService) === "function" && _a || Object])
], DiscoveryApiService);
exports.DiscoveryApiService = DiscoveryApiService;
var _a;


/***/ }),

/***/ 150:
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
var alfresco_api_service_1 = __webpack_require__(12);
var user_preferences_service_1 = __webpack_require__(24);
var FavoritesApiService = FavoritesApiService_1 = (function () {
    function FavoritesApiService(apiService, preferences) {
        this.apiService = apiService;
        this.preferences = preferences;
    }
    FavoritesApiService.remapFavoritesData = function (data) {
        if (data === void 0) { data = {}; }
        var list = (data.list || {});
        var pagination = (list.pagination || {});
        var entries = FavoritesApiService_1
            .remapFavoriteEntries(list.entries || []);
        return {
            list: { entries: entries, pagination: pagination }
        };
    };
    FavoritesApiService.remapEntry = function (_a) {
        var entry = _a.entry;
        entry.properties = {
            'cm:title': entry.title,
            'cm:description': entry.description
        };
        return { entry: entry };
    };
    FavoritesApiService.remapFavoriteEntries = function (entries) {
        return entries
            .map(function (_a) {
            var target = _a.entry.target;
            return ({
                entry: target.file || target.folder
            });
        })
            .filter(function (_a) {
            var entry = _a.entry;
            return (!!entry);
        })
            .map(FavoritesApiService_1.remapEntry);
    };
    Object.defineProperty(FavoritesApiService.prototype, "favoritesApi", {
        get: function () {
            return this.apiService.getInstance().core.favoritesApi;
        },
        enumerable: true,
        configurable: true
    });
    FavoritesApiService.prototype.getFavorites = function (personId, options) {
        var _a = this, favoritesApi = _a.favoritesApi, handleError = _a.handleError;
        var defaultOptions = {
            maxItems: this.preferences.paginationSize,
            skipCount: 0,
            where: '(EXISTS(target/file) OR EXISTS(target/folder))',
            include: ['properties', 'allowableOperations']
        };
        var queryOptions = Object.assign(defaultOptions, options);
        var promise = favoritesApi
            .getFavorites(personId, queryOptions)
            .then(FavoritesApiService_1.remapFavoritesData);
        return Rx_1.Observable
            .fromPromise(promise)
            .catch(handleError);
    };
    FavoritesApiService.prototype.handleError = function (error) {
        return Rx_1.Observable.of(error);
    };
    return FavoritesApiService;
}());
FavoritesApiService = FavoritesApiService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof alfresco_api_service_1.AlfrescoApiService !== "undefined" && alfresco_api_service_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof user_preferences_service_1.UserPreferencesService !== "undefined" && user_preferences_service_1.UserPreferencesService) === "function" && _b || Object])
], FavoritesApiService);
exports.FavoritesApiService = FavoritesApiService;
var FavoritesApiService_1, _a, _b;


/***/ }),

/***/ 151:
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
var alfresco_api_service_1 = __webpack_require__(12);
var user_preferences_service_1 = __webpack_require__(24);
var NodesApiService = (function () {
    function NodesApiService(api, preferences) {
        this.api = api;
        this.preferences = preferences;
    }
    Object.defineProperty(NodesApiService.prototype, "nodesApi", {
        get: function () {
            return this.api.getInstance().core.nodesApi;
        },
        enumerable: true,
        configurable: true
    });
    NodesApiService.prototype.getEntryFromEntity = function (entity) {
        return entity.entry;
    };
    NodesApiService.prototype.getNode = function (nodeId, options) {
        if (options === void 0) { options = {}; }
        var _a = this, nodesApi = _a.nodesApi, handleError = _a.handleError, getEntryFromEntity = _a.getEntryFromEntity;
        var defaults = {
            include: ['path', 'properties', 'allowableOperations']
        };
        var queryOptions = Object.assign(defaults, options);
        var promise = nodesApi
            .getNode(nodeId, queryOptions)
            .then(getEntryFromEntity);
        return Rx_1.Observable
            .fromPromise(promise)
            .catch(handleError);
    };
    NodesApiService.prototype.getNodeChildren = function (nodeId, options) {
        if (options === void 0) { options = {}; }
        var _a = this, nodesApi = _a.nodesApi, handleError = _a.handleError;
        var defaults = {
            maxItems: this.preferences.paginationSize,
            skipCount: 0,
            include: ['path', 'properties', 'allowableOperations']
        };
        var queryOptions = Object.assign(defaults, options);
        var promise = nodesApi
            .getNodeChildren(nodeId, queryOptions);
        return Rx_1.Observable
            .fromPromise(promise)
            .catch(handleError);
    };
    NodesApiService.prototype.createNode = function (parentNodeId, nodeBody, options) {
        if (options === void 0) { options = {}; }
        var _a = this, nodesApi = _a.nodesApi, handleError = _a.handleError, getEntryFromEntity = _a.getEntryFromEntity;
        var promise = nodesApi
            .addNode(parentNodeId, nodeBody, options)
            .then(getEntryFromEntity);
        return Rx_1.Observable.fromPromise(promise).catch(handleError);
    };
    NodesApiService.prototype.createFolder = function (parentNodeId, nodeBody, options) {
        if (options === void 0) { options = {}; }
        var body = Object.assign({ nodeType: 'cm:folder' }, nodeBody);
        return this.createNode(parentNodeId, body, options);
    };
    NodesApiService.prototype.updateNode = function (nodeId, nodeBody, options) {
        if (options === void 0) { options = {}; }
        var _a = this, nodesApi = _a.nodesApi, handleError = _a.handleError, getEntryFromEntity = _a.getEntryFromEntity;
        var promise = nodesApi
            .updateNode(nodeId, nodeBody, options)
            .then(getEntryFromEntity);
        return Rx_1.Observable.fromPromise(promise).catch(handleError);
    };
    NodesApiService.prototype.deleteNode = function (nodeId, options) {
        if (options === void 0) { options = {}; }
        var _a = this, nodesApi = _a.nodesApi, handleError = _a.handleError;
        var promise = nodesApi
            .deleteNode(nodeId, options);
        return Rx_1.Observable
            .fromPromise(promise)
            .catch(handleError);
    };
    NodesApiService.prototype.restoreNode = function (nodeId) {
        var _a = this, nodesApi = _a.nodesApi, handleError = _a.handleError, getEntryFromEntity = _a.getEntryFromEntity;
        var promise = nodesApi
            .restoreNode(nodeId)
            .then(getEntryFromEntity);
        return Rx_1.Observable
            .fromPromise(promise)
            .catch(handleError);
    };
    NodesApiService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error);
    };
    return NodesApiService;
}());
NodesApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof alfresco_api_service_1.AlfrescoApiService !== "undefined" && alfresco_api_service_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof user_preferences_service_1.UserPreferencesService !== "undefined" && user_preferences_service_1.UserPreferencesService) === "function" && _b || Object])
], NodesApiService);
exports.NodesApiService = NodesApiService;
var _a, _b;


/***/ }),

/***/ 152:
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
var NotificationService = NotificationService_1 = (function () {
    function NotificationService(snackbar) {
        this.snackbar = snackbar;
    }
    NotificationService.prototype.openSnackMessage = function (message, millisecondsDuration) {
        return this.snackbar.open(message, null, {
            duration: millisecondsDuration || NotificationService_1.DEFAULT_DURATION_MESSAGE
        });
    };
    NotificationService.prototype.openSnackMessageAction = function (message, action, millisecondsDuration) {
        return this.snackbar.open(message, action, {
            duration: millisecondsDuration || NotificationService_1.DEFAULT_DURATION_MESSAGE
        });
    };
    return NotificationService;
}());
NotificationService.DEFAULT_DURATION_MESSAGE = 5000;
NotificationService = NotificationService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof material_1.MdSnackBar !== "undefined" && material_1.MdSnackBar) === "function" && _a || Object])
], NotificationService);
exports.NotificationService = NotificationService;
var NotificationService_1, _a;


/***/ }),

/***/ 153:
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
var alfresco_api_service_1 = __webpack_require__(12);
var PeopleApiService = (function () {
    function PeopleApiService(apiService) {
        this.apiService = apiService;
    }
    Object.defineProperty(PeopleApiService.prototype, "peopleApi", {
        get: function () {
            return this.apiService.getInstance().core.peopleApi;
        },
        enumerable: true,
        configurable: true
    });
    PeopleApiService.prototype.getPerson = function (personId) {
        var _a = this, peopleApi = _a.peopleApi, handleError = _a.handleError;
        var promise = peopleApi.getPerson(personId);
        return Rx_1.Observable
            .fromPromise(promise)
            .catch(handleError);
    };
    PeopleApiService.prototype.getCurrentPerson = function () {
        return this.getPerson('-me-');
    };
    PeopleApiService.prototype.handleError = function (error) {
        return Rx_1.Observable.of(error);
    };
    return PeopleApiService;
}());
PeopleApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof alfresco_api_service_1.AlfrescoApiService !== "undefined" && alfresco_api_service_1.AlfrescoApiService) === "function" && _a || Object])
], PeopleApiService);
exports.PeopleApiService = PeopleApiService;
var _a;


/***/ }),

/***/ 154:
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
var alfresco_api_service_1 = __webpack_require__(12);
var log_service_1 = __webpack_require__(22);
var RenditionsService = (function () {
    function RenditionsService(apiService, logService) {
        this.apiService = apiService;
        this.logService = logService;
    }
    RenditionsService.prototype.isRenditionAvailable = function (nodeId, encoding) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            _this.getRendition(nodeId, encoding).subscribe(function (res) {
                var isAvailable = true;
                if (res.entry.status === 'NOT_CREATED') {
                    isAvailable = false;
                }
                observer.next(isAvailable);
                observer.complete();
            }, function () {
                observer.next(false);
                observer.complete();
            });
        });
    };
    RenditionsService.prototype.isConversionPossible = function (nodeId, encoding) {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            _this.getRendition(nodeId, encoding).subscribe(function () {
                observer.next(true);
                observer.complete();
            }, function () {
                observer.next(false);
                observer.complete();
            });
        });
    };
    RenditionsService.prototype.getRendition = function (nodeId, encoding) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().core.renditionsApi.getRendition(nodeId, encoding))
            .catch(function (err) { return _this.handleError(err); });
    };
    RenditionsService.prototype.getRenditionsListByNodeId = function (nodeId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().core.renditionsApi.getRenditions(nodeId))
            .catch(function (err) { return _this.handleError(err); });
    };
    RenditionsService.prototype.createRendition = function (nodeId, encoding) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().core.renditionsApi.createRendition(nodeId, { id: encoding }))
            .catch(function (err) { return _this.handleError(err); });
    };
    RenditionsService.prototype.convert = function (nodeId, encoding, pollingInterval) {
        var _this = this;
        if (pollingInterval === void 0) { pollingInterval = 1000; }
        return this.createRendition(nodeId, encoding)
            .concatMap(function () { return _this.pollRendition(nodeId, encoding, pollingInterval); });
    };
    RenditionsService.prototype.pollRendition = function (nodeId, encoding, interval) {
        var _this = this;
        if (interval === void 0) { interval = 1000; }
        return Rx_1.Observable.interval(interval)
            .switchMap(function () { return _this.getRendition(nodeId, encoding); })
            .takeWhile(function (data) {
            return (data.entry.status !== 'CREATED');
        });
    };
    RenditionsService.prototype.handleError = function (error) {
        this.logService.error(error);
        return Rx_1.Observable.throw(error || 'Server error');
    };
    return RenditionsService;
}());
RenditionsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof alfresco_api_service_1.AlfrescoApiService !== "undefined" && alfresco_api_service_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof log_service_1.LogService !== "undefined" && log_service_1.LogService) === "function" && _b || Object])
], RenditionsService);
exports.RenditionsService = RenditionsService;
var _a, _b;


/***/ }),

/***/ 155:
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
var alfresco_api_service_1 = __webpack_require__(12);
var SearchApiService = (function () {
    function SearchApiService(apiService) {
        this.apiService = apiService;
    }
    Object.defineProperty(SearchApiService.prototype, "searchApi", {
        get: function () {
            return this.apiService.getInstance().search.searchApi;
        },
        enumerable: true,
        configurable: true
    });
    SearchApiService.prototype.search = function (query) {
        var _a = this, searchApi = _a.searchApi, handleError = _a.handleError;
        var searchQuery = Object.assign(query);
        var promise = searchApi.search(searchQuery);
        return Rx_1.Observable
            .fromPromise(promise)
            .catch(handleError);
    };
    SearchApiService.prototype.handleError = function (error) {
        return Rx_1.Observable.of(error);
    };
    return SearchApiService;
}());
SearchApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof alfresco_api_service_1.AlfrescoApiService !== "undefined" && alfresco_api_service_1.AlfrescoApiService) === "function" && _a || Object])
], SearchApiService);
exports.SearchApiService = SearchApiService;
var _a;


/***/ }),

/***/ 156:
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
var alfresco_api_service_1 = __webpack_require__(12);
var authentication_service_1 = __webpack_require__(19);
var SearchService = (function () {
    function SearchService(authService, apiService) {
        this.authService = authService;
        this.apiService = apiService;
    }
    SearchService.prototype.getNodeQueryResults = function (term, options) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.getQueryNodesPromise(term, options))
            .map(function (res) { return res; })
            .catch(function (err) { return _this.handleError(err); });
    };
    SearchService.prototype.getQueryNodesPromise = function (term, opts) {
        return this.apiService.getInstance().core.queriesApi.findNodes(term, opts);
    };
    SearchService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error || 'Server error');
    };
    return SearchService;
}());
SearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" && _a || Object, typeof (_b = typeof alfresco_api_service_1.AlfrescoApiService !== "undefined" && alfresco_api_service_1.AlfrescoApiService) === "function" && _b || Object])
], SearchService);
exports.SearchService = SearchService;
var _a, _b;


/***/ }),

/***/ 157:
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
var alfresco_api_service_1 = __webpack_require__(12);
var user_preferences_service_1 = __webpack_require__(24);
var SharedLinksApiService = (function () {
    function SharedLinksApiService(apiService, preferences) {
        this.apiService = apiService;
        this.preferences = preferences;
    }
    Object.defineProperty(SharedLinksApiService.prototype, "sharedLinksApi", {
        get: function () {
            return this.apiService.getInstance().core.sharedlinksApi;
        },
        enumerable: true,
        configurable: true
    });
    SharedLinksApiService.prototype.getSharedLinks = function (options) {
        if (options === void 0) { options = {}; }
        var _a = this, sharedLinksApi = _a.sharedLinksApi, handleError = _a.handleError;
        var defaultOptions = {
            maxItems: this.preferences.paginationSize,
            skipCount: 0,
            include: ['properties', 'allowableOperations']
        };
        var queryOptions = Object.assign({}, defaultOptions, options);
        var promise = sharedLinksApi
            .findSharedLinks(queryOptions);
        return Rx_1.Observable
            .fromPromise(promise)
            .catch(handleError);
    };
    SharedLinksApiService.prototype.handleError = function (error) {
        return Rx_1.Observable.of(error);
    };
    return SharedLinksApiService;
}());
SharedLinksApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof alfresco_api_service_1.AlfrescoApiService !== "undefined" && alfresco_api_service_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof user_preferences_service_1.UserPreferencesService !== "undefined" && user_preferences_service_1.UserPreferencesService) === "function" && _b || Object])
], SharedLinksApiService);
exports.SharedLinksApiService = SharedLinksApiService;
var _a, _b;


/***/ }),

/***/ 158:
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
var site_model_1 = __webpack_require__(207);
var alfresco_api_service_1 = __webpack_require__(12);
var user_preferences_service_1 = __webpack_require__(24);
var SitesApiService = (function () {
    function SitesApiService(apiService, preferences) {
        this.apiService = apiService;
        this.preferences = preferences;
    }
    SitesApiService.prototype.getSites = function (opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        var defaultOptions = {
            maxItems: this.preferences.paginationSize,
            skipCount: 0,
            include: ['properties']
        };
        var queryOptions = Object.assign({}, defaultOptions, opts);
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().core.sitesApi.getSites(queryOptions))
            .map(function (res) { return _this.convertToModel(res); })
            .catch(this.handleError);
    };
    SitesApiService.prototype.getSite = function (siteId, opts) {
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().core.sitesApi.getSite(siteId, opts))
            .map(function (res) { return new site_model_1.SiteModel(res); })
            .catch(this.handleError);
    };
    SitesApiService.prototype.deleteSite = function (siteId, permanentFlag) {
        if (permanentFlag === void 0) { permanentFlag = true; }
        var options = {};
        options.permanent = permanentFlag;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().core.sitesApi.deleteSite(siteId, options)
            .catch(this.handleError));
    };
    SitesApiService.prototype.getSiteContent = function (siteId) {
        return this.getSite(siteId, { relations: ['containers'] });
    };
    SitesApiService.prototype.getSiteMembers = function (siteId) {
        return this.getSite(siteId, { relations: ['members'] });
    };
    SitesApiService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error || 'Server error');
    };
    SitesApiService.prototype.convertToModel = function (response) {
        var convertedList = [];
        if (response &&
            response.list &&
            response.list.entries &&
            response.list.entries.length > 0) {
            response.list.entries.forEach(function (element) {
                element.pagination = response.list.pagination;
                convertedList.push(new site_model_1.SiteModel(element));
            });
        }
        return convertedList;
    };
    return SitesApiService;
}());
SitesApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof alfresco_api_service_1.AlfrescoApiService !== "undefined" && alfresco_api_service_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof user_preferences_service_1.UserPreferencesService !== "undefined" && user_preferences_service_1.UserPreferencesService) === "function" && _b || Object])
], SitesApiService);
exports.SitesApiService = SitesApiService;
var _a, _b;


/***/ }),

/***/ 159:
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
var alfresco_content_service_1 = __webpack_require__(73);
var ThumbnailService = (function () {
    function ThumbnailService(contentService) {
        this.contentService = contentService;
        this.DEFAULT_ICON = __webpack_require__(394);
        this.mimeTypeIcons = {
            'image/png': __webpack_require__(184),
            'image/jpeg': __webpack_require__(184),
            'image/gif': __webpack_require__(184),
            'application/pdf': __webpack_require__(395),
            'application/vnd.ms-excel': __webpack_require__(182),
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': __webpack_require__(182),
            'application/vnd.openxmlformats-officedocument.spreadsheetml.template': __webpack_require__(182),
            'application/msword': __webpack_require__(183),
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': __webpack_require__(183),
            'application/vnd.openxmlformats-officedocument.wordprocessingml.template': __webpack_require__(183),
            'application/vnd.ms-powerpoint': __webpack_require__(106),
            'application/vnd.openxmlformats-officedocument.presentationml.presentation': __webpack_require__(106),
            'application/vnd.openxmlformats-officedocument.presentationml.template': __webpack_require__(106),
            'application/vnd.openxmlformats-officedocument.presentationml.slideshow': __webpack_require__(106),
            'video/mp4': __webpack_require__(399),
            'text/plain': __webpack_require__(105),
            'application/x-javascript': __webpack_require__(105),
            'application/json': __webpack_require__(105),
            'image/svg+xml': __webpack_require__(398),
            'text/html': __webpack_require__(400),
            'application/x-compressed': __webpack_require__(181),
            'application/x-zip-compressed': __webpack_require__(181),
            'application/zip': __webpack_require__(181),
            'application/vnd.apple.keynote': __webpack_require__(396),
            'application/vnd.apple.pages': __webpack_require__(105),
            'application/vnd.apple.numbers': __webpack_require__(397),
            'folder': __webpack_require__(392),
            'disable/folder': __webpack_require__(393)
        };
    }
    ThumbnailService.prototype.getDocumentThumbnailUrl = function (document) {
        var thumbnail = this.contentService.getDocumentThumbnailUrl(document);
        return thumbnail || this.DEFAULT_ICON;
    };
    ThumbnailService.prototype.getMimeTypeIcon = function (mimeType) {
        var icon = this.mimeTypeIcons[mimeType];
        return (icon || this.DEFAULT_ICON);
    };
    ThumbnailService.prototype.getDefaultMimeTypeIcon = function () {
        return this.DEFAULT_ICON;
    };
    return ThumbnailService;
}());
ThumbnailService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof alfresco_content_service_1.AlfrescoContentService !== "undefined" && alfresco_content_service_1.AlfrescoContentService) === "function" && _a || Object])
], ThumbnailService);
exports.ThumbnailService = ThumbnailService;
var _a;


/***/ }),

/***/ 160:
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
var http_1 = __webpack_require__(20);
var Rx_1 = __webpack_require__(2);
var component_model_1 = __webpack_require__(476);
var log_service_1 = __webpack_require__(22);
var AlfrescoTranslateLoader = (function () {
    function AlfrescoTranslateLoader(http, logService) {
        this.http = http;
        this.logService = logService;
        this.prefix = 'i18n';
        this.suffix = '.json';
        this.providers = [];
        this.queue = [];
    }
    AlfrescoTranslateLoader.prototype.registerProvider = function (name, path) {
        var registered = this.providers.find(function (provider) { return provider.name === name; });
        if (registered) {
            registered.path = path;
        }
        else {
            this.providers.push(new component_model_1.ComponentTranslationModel({ name: name, path: path }));
        }
    };
    AlfrescoTranslateLoader.prototype.providerRegistered = function (name) {
        return this.providers.find(function (x) { return x.name === name; }) ? true : false;
    };
    AlfrescoTranslateLoader.prototype.getComponentToFetch = function (lang) {
        var _this = this;
        var observableBatch = [];
        if (!this.queue[lang]) {
            this.queue[lang] = [];
        }
        this.providers.forEach(function (component) {
            if (!_this.isComponentInQueue(lang, component.name)) {
                _this.queue[lang].push(component.name);
                observableBatch.push(_this.http.get(component.path + "/" + _this.prefix + "/" + lang + _this.suffix)
                    .map(function (res) {
                    component.json[lang] = res.json();
                })
                    .catch(function () {
                    return Rx_1.Observable.of('');
                }));
            }
        });
        return observableBatch;
    };
    AlfrescoTranslateLoader.prototype.init = function (lang) {
        if (this.queue[lang] === undefined) {
            this.queue[lang] = [];
        }
    };
    AlfrescoTranslateLoader.prototype.isComponentInQueue = function (lang, name) {
        return (this.queue[lang] || []).find(function (x) { return x === name; }) ? true : false;
    };
    AlfrescoTranslateLoader.prototype.getFullTranslationJSON = function (lang) {
        var fullTranslation = '';
        var cloneList = this.providers.slice(0);
        cloneList.reverse().forEach(function (component) {
            if (component.json && component.json[lang]) {
                fullTranslation += JSON.stringify(component.json[lang]);
            }
        });
        if (fullTranslation !== '') {
            return JSON.parse(fullTranslation.replace(/}{/g, ','));
        }
    };
    AlfrescoTranslateLoader.prototype.getTranslation = function (lang) {
        var _this = this;
        var observableBatch = this.getComponentToFetch(lang);
        return Rx_1.Observable.create(function (observer) {
            if (observableBatch.length > 0) {
                Rx_1.Observable.forkJoin(observableBatch).subscribe(function () {
                    var fullTranslation = _this.getFullTranslationJSON(lang);
                    if (fullTranslation) {
                        observer.next(fullTranslation);
                    }
                    observer.complete();
                }, function (err) {
                    _this.logService.error(err);
                });
            }
            else {
                var fullTranslation = _this.getFullTranslationJSON(lang);
                if (fullTranslation) {
                    observer.next(fullTranslation);
                }
            }
        });
    };
    return AlfrescoTranslateLoader;
}());
AlfrescoTranslateLoader = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof log_service_1.LogService !== "undefined" && log_service_1.LogService) === "function" && _b || Object])
], AlfrescoTranslateLoader);
exports.AlfrescoTranslateLoader = AlfrescoTranslateLoader;
var _a, _b;


/***/ }),

/***/ 161:
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
var minimatch = __webpack_require__(634);
var Rx_1 = __webpack_require__(2);
var file_event_1 = __webpack_require__(200);
var file_model_1 = __webpack_require__(115);
var alfresco_api_service_1 = __webpack_require__(12);
var app_config_service_1 = __webpack_require__(17);
var UploadService = (function () {
    function UploadService(apiService, appConfigService) {
        this.apiService = apiService;
        this.appConfigService = appConfigService;
        this.queue = [];
        this.cache = {};
        this.totalComplete = 0;
        this.totalAborted = 0;
        this.totalError = 0;
        this.activeTask = null;
        this.excludedFileList = [];
        this.queueChanged = new Rx_1.Subject();
        this.fileUpload = new Rx_1.Subject();
        this.fileUploadStarting = new Rx_1.Subject();
        this.fileUploadCancelled = new Rx_1.Subject();
        this.fileUploadProgress = new Rx_1.Subject();
        this.fileUploadAborted = new Rx_1.Subject();
        this.fileUploadError = new Rx_1.Subject();
        this.fileUploadComplete = new Rx_1.Subject();
        this.fileUploadDeleted = new Rx_1.Subject();
        this.fileDeleted = new Rx_1.Subject();
        this.excludedFileList = this.appConfigService.get('files.excluded');
    }
    UploadService.prototype.isUploading = function () {
        return this.activeTask ? true : false;
    };
    UploadService.prototype.getQueue = function () {
        return this.queue;
    };
    UploadService.prototype.addToQueue = function () {
        var _this = this;
        var files = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            files[_i] = arguments[_i];
        }
        var allowedFiles = files.filter(function (f) { return _this.filterElement(f); });
        this.queue = this.queue.concat(allowedFiles);
        this.queueChanged.next(this.queue);
        return allowedFiles;
    };
    UploadService.prototype.filterElement = function (file) {
        var isAllowed = true;
        if (this.excludedFileList) {
            isAllowed = this.excludedFileList.filter(function (expr) { return minimatch(file.name, expr); }).length === 0;
        }
        return isAllowed;
    };
    UploadService.prototype.uploadFilesInTheQueue = function (emitter) {
        var _this = this;
        if (!this.activeTask) {
            var file = this.queue.find(function (f) { return f.status === file_model_1.FileUploadStatus.Pending; });
            if (file) {
                this.onUploadStarting(file);
                var promise = this.beginUpload(file, emitter);
                this.activeTask = promise;
                this.cache[file.id] = promise;
                var next_1 = function () {
                    _this.activeTask = null;
                    setTimeout(function () { return _this.uploadFilesInTheQueue(emitter); }, 100);
                };
                promise.next = next_1;
                promise.then(function () { return next_1(); }, function () { return next_1(); });
            }
        }
    };
    UploadService.prototype.cancelUpload = function () {
        var _this = this;
        var files = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            files[_i] = arguments[_i];
        }
        files.forEach(function (file) {
            var promise = _this.cache[file.id];
            if (promise) {
                promise.abort();
                delete _this.cache[file.id];
            }
            else {
                var performAction = _this.getAction(file);
                performAction();
            }
        });
    };
    UploadService.prototype.clearQueue = function () {
        this.queue = [];
        this.totalComplete = 0;
        this.totalAborted = 0;
        this.totalError = 0;
    };
    UploadService.prototype.getUploadPromise = function (file) {
        var opts = {
            renditions: 'doclib'
        };
        if (file.options.newVersion === true) {
            opts.overwrite = true;
            opts.majorVersion = true;
        }
        else {
            opts.autoRename = true;
        }
        return this.apiService.getInstance().upload.uploadFile(file.file, file.options.path, file.options.parentId, null, opts);
    };
    UploadService.prototype.beginUpload = function (file, emitter) {
        var _this = this;
        var promise = this.getUploadPromise(file);
        promise.on('progress', function (progress) {
            _this.onUploadProgress(file, progress);
        })
            .on('abort', function () {
            _this.onUploadAborted(file);
            emitter.emit({ value: 'File aborted' });
        })
            .on('error', function (err) {
            _this.onUploadError(file, err);
            emitter.emit({ value: 'Error file uploaded' });
        })
            .on('success', function (data) {
            _this.onUploadComplete(file, data);
            emitter.emit({ value: data });
        })
            .catch(function (err) {
            throw err;
        });
        return promise;
    };
    UploadService.prototype.onUploadStarting = function (file) {
        if (file) {
            file.status = file_model_1.FileUploadStatus.Starting;
            var event = new file_event_1.FileUploadEvent(file, file_model_1.FileUploadStatus.Starting);
            this.fileUpload.next(event);
            this.fileUploadStarting.next(event);
        }
    };
    UploadService.prototype.onUploadProgress = function (file, progress) {
        if (file) {
            file.progress = progress;
            file.status = file_model_1.FileUploadStatus.Progress;
            var event = new file_event_1.FileUploadEvent(file, file_model_1.FileUploadStatus.Progress);
            this.fileUpload.next(event);
            this.fileUploadProgress.next(event);
        }
    };
    UploadService.prototype.onUploadError = function (file, error) {
        if (file) {
            file.status = file_model_1.FileUploadStatus.Error;
            this.totalError++;
            var promise = this.cache[file.id];
            if (promise) {
                delete this.cache[file.id];
            }
            var event = new file_event_1.FileUploadErrorEvent(file, error, this.totalError);
            this.fileUpload.next(event);
            this.fileUploadError.next(event);
        }
    };
    UploadService.prototype.onUploadComplete = function (file, data) {
        if (file) {
            file.status = file_model_1.FileUploadStatus.Complete;
            file.data = data;
            this.totalComplete++;
            var promise = this.cache[file.id];
            if (promise) {
                delete this.cache[file.id];
            }
            var event = new file_event_1.FileUploadCompleteEvent(file, this.totalComplete, data, this.totalAborted);
            this.fileUpload.next(event);
            this.fileUploadComplete.next(event);
        }
    };
    UploadService.prototype.onUploadAborted = function (file) {
        if (file) {
            file.status = file_model_1.FileUploadStatus.Aborted;
            this.totalAborted++;
            var promise = this.cache[file.id];
            if (promise) {
                delete this.cache[file.id];
            }
            var event = new file_event_1.FileUploadEvent(file, file_model_1.FileUploadStatus.Aborted);
            this.fileUpload.next(event);
            this.fileUploadAborted.next(event);
            promise.next();
        }
    };
    UploadService.prototype.onUploadCancelled = function (file) {
        if (file) {
            file.status = file_model_1.FileUploadStatus.Cancelled;
            var event = new file_event_1.FileUploadEvent(file, file_model_1.FileUploadStatus.Cancelled);
            this.fileUpload.next(event);
            this.fileUploadCancelled.next(event);
        }
    };
    UploadService.prototype.onUploadDeleted = function (file) {
        if (file) {
            file.status = file_model_1.FileUploadStatus.Deleted;
            this.totalComplete--;
            var event = new file_event_1.FileUploadDeleteEvent(file, this.totalComplete);
            this.fileUpload.next(event);
            this.fileUploadDeleted.next(event);
        }
    };
    UploadService.prototype.getAction = function (file) {
        var _this = this;
        var actions = (_a = {},
            _a[file_model_1.FileUploadStatus.Pending] = function () { return _this.onUploadCancelled(file); },
            _a[file_model_1.FileUploadStatus.Deleted] = function () { return _this.onUploadDeleted(file); },
            _a[file_model_1.FileUploadStatus.Error] = function () { return _this.onUploadError(file, null); },
            _a);
        return actions[file.status];
        var _a;
    };
    return UploadService;
}());
UploadService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof alfresco_api_service_1.AlfrescoApiService !== "undefined" && alfresco_api_service_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof app_config_service_1.AppConfigService !== "undefined" && app_config_service_1.AppConfigService) === "function" && _b || Object])
], UploadService);
exports.UploadService = UploadService;
var _a, _b;


/***/ }),

/***/ 17:
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
var http_1 = __webpack_require__(20);
var object_utils_1 = __webpack_require__(345);
var AppConfigService = (function () {
    function AppConfigService(http) {
        this.http = http;
        this.config = {
            'ecmHost': 'http://{hostname}:{port}/ecm',
            'bpmHost': 'http://{hostname}:{port}/bpm'
        };
        this.configFile = null;
    }
    AppConfigService.prototype.get = function (key, defaultValue) {
        var result = object_utils_1.ObjectUtils.getValue(this.config, key);
        if (typeof result === 'string') {
            var map = new Map();
            map.set('hostname', location.hostname);
            map.set('port', location.port);
            result = this.formatString(result, map);
        }
        if (result === undefined) {
            return defaultValue;
        }
        return result;
    };
    AppConfigService.prototype.load = function (resource, values) {
        var _this = this;
        if (resource === void 0) { resource = 'app.config.json'; }
        this.configFile = resource;
        return new Promise(function (resolve) {
            _this.config = Object.assign({}, values || {});
            _this.http.get(resource).subscribe(function (data) {
                _this.config = Object.assign({}, _this.config, data.json() || {});
                resolve(_this.config);
            }, function () {
                var errorMessage = "Error loading " + resource;
                console.log(errorMessage);
                resolve(_this.config);
            });
        });
    };
    AppConfigService.prototype.formatString = function (str, map) {
        var result = str;
        map.forEach(function (value, key) {
            var expr = new RegExp('{' + key + '}', 'gm');
            result = result.replace(expr, value);
        });
        return result;
    };
    return AppConfigService;
}());
AppConfigService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], AppConfigService);
exports.AppConfigService = AppConfigService;
function InitAppConfigServiceProvider(resource, values) {
    return {
        provide: core_1.APP_INITIALIZER,
        useFactory: function (configService) {
            return function () { return configService.load(resource, values); };
        },
        deps: [
            AppConfigService
        ],
        multi: true
    };
}
exports.InitAppConfigServiceProvider = InitAppConfigServiceProvider;
var AppConfigModule = AppConfigModule_1 = (function () {
    function AppConfigModule() {
    }
    AppConfigModule.forRoot = function (resource, values) {
        return {
            ngModule: AppConfigModule_1,
            providers: [
                AppConfigService,
                InitAppConfigServiceProvider(resource, values)
            ]
        };
    };
    return AppConfigModule;
}());
AppConfigModule = AppConfigModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule
        ],
        providers: [
            AppConfigService
        ]
    })
], AppConfigModule);
exports.AppConfigModule = AppConfigModule;
var _a, AppConfigModule_1;


/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ft_ic_archive.52c6fbd59da7367b8d80838bb540ed53.svg";

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ft_ic_ms_excel.ff0b4c431df45a024b88f16be849a4a8.svg";

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ft_ic_ms_word.03b957812273e6e731c8b759a4b479b9.svg";

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ft_ic_raster_image.a2a29ea444a70beddb38e4897ea76a0f.svg";

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FakeMissingTranslationHandler; });

var MissingTranslationHandler = (function () {
    function MissingTranslationHandler() {
    }
    return MissingTranslationHandler;
}());

/**
 * This handler is just a placeholder that does nothing, in case you don't need a missing translation handler at all
 */
var FakeMissingTranslationHandler = (function () {
    function FakeMissingTranslationHandler() {
    }
    FakeMissingTranslationHandler.prototype.handle = function (params) {
        return params.key;
    };
    return FakeMissingTranslationHandler;
}());

FakeMissingTranslationHandler.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
FakeMissingTranslationHandler.ctorParameters = function () { return []; };


/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslateFakeLoader; });
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


var TranslateLoader = (function () {
    function TranslateLoader() {
    }
    return TranslateLoader;
}());

/**
 * This loader is just a placeholder that does nothing, in case you don't need a loader at all
 */
var TranslateFakeLoader = (function (_super) {
    __extends(TranslateFakeLoader, _super);
    function TranslateFakeLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TranslateFakeLoader.prototype.getTranslation = function (lang) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of({});
    };
    return TranslateFakeLoader;
}(TranslateLoader));

TranslateFakeLoader.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/** @nocollapse */
TranslateFakeLoader.ctorParameters = function () { return []; };


/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslateDefaultParser; });
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


var TranslateParser = (function () {
    function TranslateParser() {
    }
    return TranslateParser;
}());

var TranslateDefaultParser = (function (_super) {
    __extends(TranslateDefaultParser, _super);
    function TranslateDefaultParser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
        return _this;
    }
    TranslateDefaultParser.prototype.interpolate = function (expr, params) {
        var _this = this;
        if (typeof expr !== 'string' || !params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, function (substring, b) {
            var r = _this.getValue(params, b);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(r) ? r : substring;
        });
    };
    TranslateDefaultParser.prototype.getValue = function (target, key) {
        var keys = key.split('.');
        key = '';
        do {
            key += keys.shift();
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(target) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
                target = target[key];
                key = '';
            }
            else if (!keys.length) {
                target = undefined;
            }
            else {
                key += '.';
            }
        } while (keys.length);
        return target;
    };
    return TranslateDefaultParser;
}(TranslateParser));

TranslateDefaultParser.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
TranslateDefaultParser.ctorParameters = function () { return []; };


/***/ }),

/***/ 19:
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
var alfresco_api_service_1 = __webpack_require__(12);
var cookie_service_1 = __webpack_require__(92);
var log_service_1 = __webpack_require__(22);
var storage_service_1 = __webpack_require__(65);
var user_preferences_service_1 = __webpack_require__(24);
var REMEMBER_ME_COOKIE_KEY = 'ALFRESCO_REMEMBER_ME';
var REMEMBER_ME_UNTIL = 1000 * 60 * 60 * 24 * 30;
var AuthenticationService = (function () {
    function AuthenticationService(preferences, alfrescoApi, storage, cookie, logService) {
        this.preferences = preferences;
        this.alfrescoApi = alfrescoApi;
        this.storage = storage;
        this.cookie = cookie;
        this.logService = logService;
        this.onLogin = new Rx_1.Subject();
        this.onLogout = new Rx_1.Subject();
    }
    AuthenticationService.prototype.isLoggedIn = function () {
        return !!this.alfrescoApi.getInstance().isLoggedIn();
    };
    AuthenticationService.prototype.login = function (username, password, rememberMe) {
        var _this = this;
        if (rememberMe === void 0) { rememberMe = false; }
        this.removeTicket();
        return Rx_1.Observable.fromPromise(this.callApiLogin(username, password))
            .map(function (response) {
            _this.saveRememberMeCookie(rememberMe);
            _this.saveTickets();
            _this.onLogin.next(response);
            return {
                type: _this.preferences.authType,
                ticket: response
            };
        })
            .catch(function (err) { return _this.handleError(err); });
    };
    AuthenticationService.prototype.saveRememberMeCookie = function (rememberMe) {
        var expiration = null;
        if (rememberMe) {
            expiration = new Date();
            var time = expiration.getTime();
            var expireTime = time + REMEMBER_ME_UNTIL;
            expiration.setTime(expireTime);
        }
        this.cookie.setItem(REMEMBER_ME_COOKIE_KEY, '1', expiration, null);
    };
    AuthenticationService.prototype.isRememberMeSet = function () {
        return (this.cookie.getItem(REMEMBER_ME_COOKIE_KEY) === null) ? false : true;
    };
    AuthenticationService.prototype.callApiLogin = function (username, password) {
        return this.alfrescoApi.getInstance().login(username, password);
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.callApiLogout())
            .do(function (response) {
            _this.removeTicket();
            _this.onLogout.next(response);
            return response;
        })
            .catch(function (err) { return _this.handleError(err); });
    };
    AuthenticationService.prototype.callApiLogout = function () {
        if (this.alfrescoApi.getInstance()) {
            return this.alfrescoApi.getInstance().logout();
        }
    };
    AuthenticationService.prototype.removeTicket = function () {
        this.storage.removeItem('ticket-ECM');
        this.storage.removeItem('ticket-BPM');
        this.alfrescoApi.getInstance().setTicket(undefined, undefined);
    };
    AuthenticationService.prototype.getTicketEcm = function () {
        return this.storage.getItem('ticket-ECM');
    };
    AuthenticationService.prototype.getTicketBpm = function () {
        return this.storage.getItem('ticket-BPM');
    };
    AuthenticationService.prototype.getTicketEcmBase64 = function () {
        var ticket = this.storage.getItem('ticket-ECM');
        if (ticket) {
            return 'Basic ' + btoa(ticket);
        }
        return null;
    };
    AuthenticationService.prototype.saveTickets = function () {
        this.saveTicketEcm();
        this.saveTicketBpm();
    };
    AuthenticationService.prototype.saveTicketEcm = function () {
        if (this.alfrescoApi.getInstance() && this.alfrescoApi.getInstance().getTicketEcm()) {
            this.storage.setItem('ticket-ECM', this.alfrescoApi.getInstance().getTicketEcm());
        }
    };
    AuthenticationService.prototype.saveTicketBpm = function () {
        if (this.alfrescoApi.getInstance() && this.alfrescoApi.getInstance().getTicketBpm()) {
            this.storage.setItem('ticket-BPM', this.alfrescoApi.getInstance().getTicketBpm());
        }
    };
    AuthenticationService.prototype.isEcmLoggedIn = function () {
        return this.isRememberMeSet() && this.alfrescoApi.getInstance().ecmAuth && !!this.alfrescoApi.getInstance().ecmAuth.isLoggedIn();
    };
    AuthenticationService.prototype.isBpmLoggedIn = function () {
        return this.isRememberMeSet() && this.alfrescoApi.getInstance().bpmAuth && !!this.alfrescoApi.getInstance().bpmAuth.isLoggedIn();
    };
    AuthenticationService.prototype.getEcmUsername = function () {
        return this.alfrescoApi.getInstance().ecmAuth.username;
    };
    AuthenticationService.prototype.getBpmUsername = function () {
        return this.alfrescoApi.getInstance().bpmAuth.username;
    };
    AuthenticationService.prototype.handleError = function (error) {
        this.logService.error('Error when logging in', error);
        return Rx_1.Observable.throw(error || 'Server error');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_preferences_service_1.UserPreferencesService !== "undefined" && user_preferences_service_1.UserPreferencesService) === "function" && _a || Object, typeof (_b = typeof alfresco_api_service_1.AlfrescoApiService !== "undefined" && alfresco_api_service_1.AlfrescoApiService) === "function" && _b || Object, typeof (_c = typeof storage_service_1.StorageService !== "undefined" && storage_service_1.StorageService) === "function" && _c || Object, typeof (_d = typeof cookie_service_1.CookieService !== "undefined" && cookie_service_1.CookieService) === "function" && _d || Object, typeof (_e = typeof log_service_1.LogService !== "undefined" && log_service_1.LogService) === "function" && _e || Object])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
var _a, _b, _c, _d, _e;


/***/ }),

/***/ 191:
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
var Rx_1 = __webpack_require__(2);
var ContextMenuService = (function () {
    function ContextMenuService() {
        this.show = new Rx_1.Subject();
    }
    return ContextMenuService;
}());
ContextMenuService = __decorate([
    core_1.Injectable()
], ContextMenuService);
exports.ContextMenuService = ContextMenuService;


/***/ }),

/***/ 192:
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
var CardViewBaseItemModel = (function () {
    function CardViewBaseItemModel(obj) {
        this.label = obj.label || '';
        this.value = obj.value;
        this.key = obj.key;
        this.default = obj.default;
        this.editable = !!obj.editable;
        this.clickable = !!obj.clickable;
    }
    return CardViewBaseItemModel;
}());
exports.CardViewBaseItemModel = CardViewBaseItemModel;


/***/ }),

/***/ 199:
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
var BaseEvent = (function () {
    function BaseEvent() {
        this.isDefaultPrevented = false;
    }
    Object.defineProperty(BaseEvent.prototype, "defaultPrevented", {
        get: function () {
            return this.isDefaultPrevented;
        },
        enumerable: true,
        configurable: true
    });
    BaseEvent.prototype.preventDefault = function () {
        this.isDefaultPrevented = true;
    };
    return BaseEvent;
}());
exports.BaseEvent = BaseEvent;


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),

/***/ 200:
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
var file_model_1 = __webpack_require__(115);
var FileUploadEvent = (function () {
    function FileUploadEvent(file, status, error) {
        if (status === void 0) { status = file_model_1.FileUploadStatus.Pending; }
        if (error === void 0) { error = null; }
        this.file = file;
        this.status = status;
        this.error = error;
    }
    return FileUploadEvent;
}());
exports.FileUploadEvent = FileUploadEvent;
var FileUploadCompleteEvent = (function (_super) {
    __extends(FileUploadCompleteEvent, _super);
    function FileUploadCompleteEvent(file, totalComplete, data, totalAborted) {
        if (totalComplete === void 0) { totalComplete = 0; }
        if (totalAborted === void 0) { totalAborted = 0; }
        var _this = _super.call(this, file, file_model_1.FileUploadStatus.Complete) || this;
        _this.totalComplete = totalComplete;
        _this.data = data;
        _this.totalAborted = totalAborted;
        return _this;
    }
    return FileUploadCompleteEvent;
}(FileUploadEvent));
exports.FileUploadCompleteEvent = FileUploadCompleteEvent;
var FileUploadDeleteEvent = (function (_super) {
    __extends(FileUploadDeleteEvent, _super);
    function FileUploadDeleteEvent(file, totalComplete) {
        if (totalComplete === void 0) { totalComplete = 0; }
        var _this = _super.call(this, file, file_model_1.FileUploadStatus.Deleted) || this;
        _this.totalComplete = totalComplete;
        return _this;
    }
    return FileUploadDeleteEvent;
}(FileUploadEvent));
exports.FileUploadDeleteEvent = FileUploadDeleteEvent;
var FileUploadErrorEvent = (function (_super) {
    __extends(FileUploadErrorEvent, _super);
    function FileUploadErrorEvent(file, error, totalError) {
        if (totalError === void 0) { totalError = 0; }
        var _this = _super.call(this, file, file_model_1.FileUploadStatus.Error) || this;
        _this.error = error;
        _this.totalError = totalError;
        return _this;
    }
    return FileUploadErrorEvent;
}(FileUploadEvent));
exports.FileUploadErrorEvent = FileUploadErrorEvent;


/***/ }),

/***/ 201:
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

/***/ 202:
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
var core_1 = __webpack_require__(0);
exports.EXTENDIBLE_COMPONENT = new core_1.InjectionToken('extendible.component');


/***/ }),

/***/ 203:
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
var card_view_baseitem_model_1 = __webpack_require__(192);
var CardViewDateItemModel = (function (_super) {
    __extends(CardViewDateItemModel, _super);
    function CardViewDateItemModel(obj) {
        var _this = _super.call(this, obj) || this;
        _this.type = 'date';
        _this.format = obj.format || 'MMM DD YYYY';
        return _this;
    }
    Object.defineProperty(CardViewDateItemModel.prototype, "displayValue", {
        get: function () {
            if (!this.value) {
                return this.default;
            }
            else {
                return moment(this.value).format(this.format);
            }
        },
        enumerable: true,
        configurable: true
    });
    return CardViewDateItemModel;
}(card_view_baseitem_model_1.CardViewBaseItemModel));
exports.CardViewDateItemModel = CardViewDateItemModel;


/***/ }),

/***/ 204:
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
var card_view_baseitem_model_1 = __webpack_require__(192);
var CardViewMapItemModel = (function (_super) {
    __extends(CardViewMapItemModel, _super);
    function CardViewMapItemModel(obj) {
        var _this = _super.call(this, obj) || this;
        _this.type = 'map';
        return _this;
    }
    Object.defineProperty(CardViewMapItemModel.prototype, "displayValue", {
        get: function () {
            if (this.value && this.value.size > 0) {
                return this.value.values().next().value;
            }
            else {
                return this.default;
            }
        },
        enumerable: true,
        configurable: true
    });
    return CardViewMapItemModel;
}(card_view_baseitem_model_1.CardViewBaseItemModel));
exports.CardViewMapItemModel = CardViewMapItemModel;


/***/ }),

/***/ 205:
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
var card_view_baseitem_model_1 = __webpack_require__(192);
var CardViewTextItemModel = (function (_super) {
    __extends(CardViewTextItemModel, _super);
    function CardViewTextItemModel(obj) {
        var _this = _super.call(this, obj) || this;
        _this.type = 'text';
        _this.multiline = !!obj.multiline;
        return _this;
    }
    Object.defineProperty(CardViewTextItemModel.prototype, "displayValue", {
        get: function () {
            return this.value || this.default;
        },
        enumerable: true,
        configurable: true
    });
    return CardViewTextItemModel;
}(card_view_baseitem_model_1.CardViewBaseItemModel));
exports.CardViewTextItemModel = CardViewTextItemModel;


/***/ }),

/***/ 206:
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
var BpmProductVersionModel = (function () {
    function BpmProductVersionModel(obj) {
        if (obj) {
            this.edition = obj.edition || null;
            this.majorVersion = obj.majorVersion || null;
            this.revisionVersion = obj.revisionVersion || null;
            this.minorVersion = obj.minorVersion || null;
            this.type = obj.type || null;
        }
    }
    return BpmProductVersionModel;
}());
exports.BpmProductVersionModel = BpmProductVersionModel;
var EcmProductVersionModel = (function () {
    function EcmProductVersionModel(obj) {
        var _this = this;
        this.modules = [];
        if (obj && obj.entry && obj.entry.repository) {
            this.edition = obj.entry.repository.edition || null;
            this.version = new VersionModel(obj.entry.repository.version);
            this.license = new LicenseModel(obj.entry.repository.license);
            this.status = new VersionStatusModel(obj.entry.repository.status);
            if (obj.entry.repository.modules) {
                obj.entry.repository.modules.forEach(function (module) {
                    _this.modules.push(new VersionModuleModel(module));
                });
            }
        }
    }
    return EcmProductVersionModel;
}());
exports.EcmProductVersionModel = EcmProductVersionModel;
var VersionModel = (function () {
    function VersionModel(obj) {
        if (obj) {
            this.major = obj.major || null;
            this.minor = obj.minor || null;
            this.patch = obj.patch || null;
            this.hotfix = obj.hotfix || null;
            this.schema = obj.schema || null;
            this.label = obj.label || null;
            this.display = obj.display || null;
        }
    }
    return VersionModel;
}());
exports.VersionModel = VersionModel;
var LicenseModel = (function () {
    function LicenseModel(obj) {
        if (obj) {
            this.issuedAt = obj.issuedAt || null;
            this.expiresAt = obj.expiresAt || null;
            this.remainingDays = obj.remainingDays || null;
            this.holder = obj.holder || null;
            this.mode = obj.mode || null;
            this.isClusterEnabled = obj.isClusterEnabled ? true : false;
            this.isCryptodocEnabled = obj.isCryptodocEnabled ? true : false;
        }
    }
    return LicenseModel;
}());
exports.LicenseModel = LicenseModel;
var VersionStatusModel = (function () {
    function VersionStatusModel(obj) {
        if (obj) {
            this.isReadOnly = obj.isReadOnly ? true : false;
            this.isAuditEnabled = obj.isAuditEnabled ? true : false;
            this.isQuickShareEnabled = obj.isQuickShareEnabled ? true : false;
            this.isThumbnailGenerationEnabled = obj.isThumbnailGenerationEnabled ? true : false;
        }
    }
    return VersionStatusModel;
}());
exports.VersionStatusModel = VersionStatusModel;
var VersionModuleModel = (function () {
    function VersionModuleModel(obj) {
        if (obj) {
            this.id = obj.id || null;
            this.title = obj.title || null;
            this.description = obj.description || null;
            this.version = obj.version || null;
            this.installDate = obj.installDate || null;
            this.installState = obj.installState || null;
            this.versionMin = obj.versionMin || null;
            this.versionMax = obj.versionMax || null;
        }
    }
    return VersionModuleModel;
}());
exports.VersionModuleModel = VersionModuleModel;


/***/ }),

/***/ 207:
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
var SiteModel = (function () {
    function SiteModel(obj) {
        var _this = this;
        this.contents = [];
        this.members = [];
        if (obj && obj.entry) {
            this.role = obj.entry.role || null;
            this.visibility = obj.entry.visibility || null;
            this.guid = obj.entry.guid || null;
            this.description = obj.entry.description || null;
            this.id = obj.entry.id || null;
            this.preset = obj.entry.preset;
            this.title = obj.entry.title;
            this.pagination = obj.pagination || null;
            if (obj.relations && obj.relations.containers) {
                obj.relations.containers.list.entries.forEach(function (content) {
                    _this.contents.push(new SiteContentsModel(content.entry));
                });
            }
            if (obj.relations && obj.relations.members) {
                obj.relations.members.list.entries.forEach(function (member) {
                    _this.members.push(new SiteMembersModel(member.entry));
                });
            }
        }
    }
    return SiteModel;
}());
exports.SiteModel = SiteModel;
var SiteContentsModel = (function () {
    function SiteContentsModel(obj) {
        if (obj) {
            this.id = obj.id || null;
            this.folderId = obj.folderId || null;
        }
    }
    return SiteContentsModel;
}());
exports.SiteContentsModel = SiteContentsModel;
var SiteMembersModel = (function () {
    function SiteMembersModel(obj) {
        this.emailNotificationsEnabled = false;
        this.enable = false;
        if (obj) {
            this.role = obj.role;
            this.firstName = obj.firstName || null;
            this.emailNotificationsEnabled = obj.emailNotificationsEnabled;
            this.company = obj.company || null;
            this.id = obj.id || null;
            this.enable = obj.enable;
            this.email = obj.email;
        }
    }
    return SiteMembersModel;
}());
exports.SiteMembersModel = SiteMembersModel;


/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_service__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateDirective; });



var TranslateDirective = (function () {
    function TranslateDirective(translateService, element, _ref) {
        var _this = this;
        this.translateService = translateService;
        this.element = element;
        this._ref = _ref;
        // subscribe to onTranslationChange event, in case the translations of the current lang change
        if (!this.onTranslationChangeSub) {
            this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe(function (event) {
                if (event.lang === _this.translateService.currentLang) {
                    _this.checkNodes(true, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChangeSub) {
            this.onLangChangeSub = this.translateService.onLangChange.subscribe(function (event) {
                _this.checkNodes(true, event.translations);
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe(function (event) {
                _this.checkNodes(true);
            });
        }
    }
    Object.defineProperty(TranslateDirective.prototype, "translate", {
        set: function (key) {
            if (key) {
                this.key = key;
                this.checkNodes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateDirective.prototype, "translateParams", {
        set: function (params) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* equals */])(this.currentParams, params)) {
                this.currentParams = params;
                this.checkNodes(true);
            }
        },
        enumerable: true,
        configurable: true
    });
    TranslateDirective.prototype.ngAfterViewChecked = function () {
        this.checkNodes();
    };
    TranslateDirective.prototype.checkNodes = function (forceUpdate, translations) {
        if (forceUpdate === void 0) { forceUpdate = false; }
        var nodes = this.element.nativeElement.childNodes;
        // if the element is empty
        if (!nodes.length) {
            // we add the key as content
            this.setContent(this.element.nativeElement, this.key);
            nodes = this.element.nativeElement.childNodes;
        }
        for (var i = 0; i < nodes.length; ++i) {
            var node = nodes[i];
            if (node.nodeType === 3) {
                var key = void 0;
                if (this.key) {
                    key = this.key;
                    if (forceUpdate) {
                        node.lastKey = null;
                    }
                }
                else {
                    var content = this.getContent(node).trim();
                    if (content.length) {
                        // we want to use the content as a key, not the translation value
                        if (content !== node.currentValue) {
                            key = content;
                            // the content was changed from the user, we'll use it as a reference if needed
                            node.originalContent = this.getContent(node);
                        }
                        else if (node.originalContent && forceUpdate) {
                            node.lastKey = null;
                            // the current content is the translation, not the key, use the last real content as key
                            key = node.originalContent.trim();
                        }
                    }
                }
                this.updateValue(key, node, translations);
            }
        }
    };
    TranslateDirective.prototype.updateValue = function (key, node, translations) {
        var _this = this;
        if (key) {
            if (node.lastKey === key && this.lastParams === this.currentParams) {
                return;
            }
            this.lastParams = this.currentParams;
            var onTranslation = function (res) {
                if (res !== key) {
                    node.lastKey = key;
                }
                if (!node.originalContent) {
                    node.originalContent = _this.getContent(node);
                }
                node.currentValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(res) ? res : (node.originalContent || key);
                // we replace in the original content to preserve spaces that we might have trimmed
                _this.setContent(node, _this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));
                _this._ref.markForCheck();
            };
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(translations)) {
                var res = this.translateService.getParsedResult(translations, key, this.currentParams);
                if (typeof res.subscribe === "function") {
                    res.subscribe(onTranslation);
                }
                else {
                    onTranslation(res);
                }
            }
            else {
                this.translateService.get(key, this.currentParams).subscribe(onTranslation);
            }
        }
    };
    TranslateDirective.prototype.getContent = function (node) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(node.textContent) ? node.textContent : node.data;
    };
    TranslateDirective.prototype.setContent = function (node, content) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(node.textContent)) {
            node.textContent = content;
        }
        else {
            node.data = content;
        }
    };
    TranslateDirective.prototype.ngOnDestroy = function () {
        if (this.onLangChangeSub) {
            this.onLangChangeSub.unsubscribe();
        }
        if (this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub.unsubscribe();
        }
        if (this.onTranslationChangeSub) {
            this.onTranslationChangeSub.unsubscribe();
        }
    };
    return TranslateDirective;
}());

TranslateDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[translate],[ngx-translate]'
            },] },
];
/** @nocollapse */
TranslateDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__translate_service__["b" /* TranslateService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
TranslateDirective.propDecorators = {
    'translate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'translateParams': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};


/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatePipe; });



var TranslatePipe = (function () {
    function TranslatePipe(translate, _ref) {
        this.translate = translate;
        this._ref = _ref;
        this.value = '';
    }
    TranslatePipe.prototype.updateValue = function (key, interpolateParams, translations) {
        var _this = this;
        var onTranslation = function (res) {
            _this.value = res !== undefined ? res : key;
            _this.lastKey = key;
            _this._ref.markForCheck();
        };
        if (translations) {
            var res = this.translate.getParsedResult(translations, key, interpolateParams);
            if (typeof res.subscribe === 'function') {
                res.subscribe(onTranslation);
            }
            else {
                onTranslation(res);
            }
        }
        this.translate.get(key, interpolateParams).subscribe(onTranslation);
    };
    TranslatePipe.prototype.transform = function (query) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!query || query.length === 0) {
            return query;
        }
        // if we ask another time for the same key, return the last value
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* equals */])(query, this.lastKey) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* equals */])(args, this.lastParams)) {
            return this.value;
        }
        var interpolateParams;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* isDefined */])(args[0]) && args.length) {
            if (typeof args[0] === 'string' && args[0].length) {
                // we accept objects written in the template such as {n:1}, {'n':1}, {n:'v'}
                // which is why we might need to change it to real JSON objects such as {"n":1} or {"n":"v"}
                var validArgs = args[0]
                    .replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":')
                    .replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                try {
                    interpolateParams = JSON.parse(validArgs);
                }
                catch (e) {
                    throw new SyntaxError("Wrong parameter in TranslatePipe. Expected a valid Object, received: " + args[0]);
                }
            }
            else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
                interpolateParams = args[0];
            }
        }
        // store the query, in case it changes
        this.lastKey = query;
        // store the params, in case they change
        this.lastParams = args;
        // set the value
        this.updateValue(query, interpolateParams);
        // if there is a subscription to onLangChange, clean it
        this._dispose();
        // subscribe to onTranslationChange event, in case the translations change
        if (!this.onTranslationChange) {
            this.onTranslationChange = this.translate.onTranslationChange.subscribe(function (event) {
                if (_this.lastKey && event.lang === _this.translate.currentLang) {
                    _this.lastKey = null;
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChange) {
            this.onLangChange = this.translate.onLangChange.subscribe(function (event) {
                if (_this.lastKey) {
                    _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChange) {
            this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(function () {
                if (_this.lastKey) {
                    _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    _this.updateValue(query, interpolateParams);
                }
            });
        }
        return this.value;
    };
    /**
     * Clean any existing subscription to change events
     * @private
     */
    TranslatePipe.prototype._dispose = function () {
        if (typeof this.onTranslationChange !== 'undefined') {
            this.onTranslationChange.unsubscribe();
            this.onTranslationChange = undefined;
        }
        if (typeof this.onLangChange !== 'undefined') {
            this.onLangChange.unsubscribe();
            this.onLangChange = undefined;
        }
        if (typeof this.onDefaultLangChange !== 'undefined') {
            this.onDefaultLangChange.unsubscribe();
            this.onDefaultLangChange = undefined;
        }
    };
    TranslatePipe.prototype.ngOnDestroy = function () {
        this._dispose();
    };
    return TranslatePipe;
}());

TranslatePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'translate',
                pure: false // required to update the value when the promise is resolved
            },] },
];
/** @nocollapse */
TranslatePipe.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__translate_service__["b" /* TranslateService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };


/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateStore; });

var TranslateStore = (function () {
    function TranslateStore() {
        /**
         * The lang currently used
         * @type {string}
         */
        this.currentLang = this.defaultLang;
        /**
         * a list of translations per lang
         * @type {{}}
         */
        this.translations = {};
        /**
         * an array of langs
         * @type {Array}
         */
        this.langs = [];
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<TranslationChangeEvent>}
         */
        this.onTranslationChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<LangChangeEvent>}
         */
        this.onLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<DefaultLangChangeEvent>}
         */
        this.onDefaultLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return TranslateStore;
}());



/***/ }),

/***/ 22:
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
var LogService = (function () {
    function LogService() {
    }
    Object.defineProperty(LogService.prototype, "assert", {
        get: function () {
            return console.assert.bind(console);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogService.prototype, "error", {
        get: function () {
            return console.error.bind(console);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogService.prototype, "group", {
        get: function () {
            return console.group.bind(console);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogService.prototype, "groupEnd", {
        get: function () {
            return console.groupEnd.bind(console);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogService.prototype, "info", {
        get: function () {
            return console.info.bind(console);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogService.prototype, "log", {
        get: function () {
            return console.log.bind(console);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogService.prototype, "warn", {
        get: function () {
            return console.warn.bind(console);
        },
        enumerable: true,
        configurable: true
    });
    return LogService;
}());
LogService = __decorate([
    core_1.Injectable()
], LogService);
exports.LogService = LogService;
var LogServiceMock = (function () {
    function LogServiceMock() {
    }
    LogServiceMock.prototype.assert = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
    };
    LogServiceMock.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
    };
    LogServiceMock.prototype.group = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
    };
    LogServiceMock.prototype.groupEnd = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
    };
    LogServiceMock.prototype.info = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
    };
    LogServiceMock.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
    };
    LogServiceMock.prototype.warn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
    };
    return LogServiceMock;
}());
exports.LogServiceMock = LogServiceMock;


/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),

/***/ 24:
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
var alfresco_api_service_1 = __webpack_require__(12);
var app_config_service_1 = __webpack_require__(17);
var storage_service_1 = __webpack_require__(65);
var UserPreferencesService = (function () {
    function UserPreferencesService(appConfig, storage, apiService) {
        this.storage = storage;
        this.apiService = apiService;
        this.defaults = {
            paginationSize: 25
        };
        this.defaults.paginationSize = appConfig.get('pagination.size', 25);
    }
    UserPreferencesService.prototype.getStoragePrefix = function () {
        return this.storage.getItem('USER_PROFILE') || 'GUEST';
    };
    UserPreferencesService.prototype.setStoragePrefix = function (value) {
        this.storage.setItem('USER_PROFILE', value || 'GUEST');
    };
    UserPreferencesService.prototype.getPropertyKey = function (property) {
        return this.getStoragePrefix() + "__" + property;
    };
    UserPreferencesService.prototype.set = function (property, value) {
        if (!property) {
            return;
        }
        this.storage.setItem(this.getPropertyKey(property), value);
    };
    UserPreferencesService.prototype.get = function (property, defaultValue) {
        var key = this.getPropertyKey(property);
        var value = this.storage.getItem(key);
        if (value === undefined) {
            return defaultValue;
        }
        return value;
    };
    Object.defineProperty(UserPreferencesService.prototype, "authType", {
        get: function () {
            return this.storage.getItem('AUTH_TYPE') || 'ALL';
        },
        set: function (value) {
            this.storage.setItem('AUTH_TYPE', value);
            this.apiService.reset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPreferencesService.prototype, "disableCSRF", {
        get: function () {
            return this.get('DISABLE_CSRF') === 'true';
        },
        set: function (value) {
            this.set('DISABLE_CSRF', value);
            this.apiService.reset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPreferencesService.prototype, "paginationSize", {
        get: function () {
            return Number(this.get('PAGINATION_SIZE')) || this.defaults.paginationSize;
        },
        set: function (value) {
            this.set('PAGINATION_SIZE', value);
        },
        enumerable: true,
        configurable: true
    });
    return UserPreferencesService;
}());
UserPreferencesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_config_service_1.AppConfigService !== "undefined" && app_config_service_1.AppConfigService) === "function" && _a || Object, typeof (_b = typeof storage_service_1.StorageService !== "undefined" && storage_service_1.StorageService) === "function" && _b || Object, typeof (_c = typeof alfresco_api_service_1.AlfrescoApiService !== "undefined" && alfresco_api_service_1.AlfrescoApiService) === "function" && _c || Object])
], UserPreferencesService);
exports.UserPreferencesService = UserPreferencesService;
var _a, _b, _c;


/***/ }),

/***/ 29:
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
var Subject_1 = __webpack_require__(806);
var CardViewUpdateService = (function () {
    function CardViewUpdateService() {
        this.itemUpdatedSource = new Subject_1.Subject();
        this.itemUpdated$ = this.itemUpdatedSource.asObservable();
        this.itemClicked$ = new Subject_1.Subject();
    }
    CardViewUpdateService.prototype.update = function (property, changed) {
        this.itemUpdatedSource.next({
            target: property,
            changed: changed
        });
    };
    CardViewUpdateService.prototype.clicked = function (property) {
        this.itemClicked$.next({
            target: property
        });
    };
    return CardViewUpdateService;
}());
CardViewUpdateService = __decorate([
    core_1.Injectable()
], CardViewUpdateService);
exports.CardViewUpdateService = CardViewUpdateService;


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 342:
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
var AccordionComponent = (function () {
    function AccordionComponent() {
        this.groups = [];
    }
    AccordionComponent.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    AccordionComponent.prototype.closeOthers = function (openGroup) {
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    AccordionComponent.prototype.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    return AccordionComponent;
}());
AccordionComponent = __decorate([
    core_1.Component({
        selector: 'adf-accordion',
        template: "\n        <ng-content></ng-content>\n    ",
        host: {
            'class': 'panel-group'
        },
        encapsulation: core_1.ViewEncapsulation.None
    })
], AccordionComponent);
exports.AccordionComponent = AccordionComponent;


/***/ }),

/***/ 343:
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
var CardViewContentProxyDirective = (function () {
    function CardViewContentProxyDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    return CardViewContentProxyDirective;
}());
CardViewContentProxyDirective = __decorate([
    core_1.Directive({
        selector: '[adf-card-view-content-proxy]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ViewContainerRef !== "undefined" && core_1.ViewContainerRef) === "function" && _a || Object])
], CardViewContentProxyDirective);
exports.CardViewContentProxyDirective = CardViewContentProxyDirective;
var _a;


/***/ }),

/***/ 344:
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
var FileUtils = (function () {
    function FileUtils() {
    }
    FileUtils.flattern = function (folder) {
        var reader = folder.createReader();
        var files = [];
        return new Promise(function (resolve) {
            var iterations = [];
            (function traverse() {
                reader.readEntries(function (entries) {
                    if (!entries.length) {
                        Promise.all(iterations).then(function (result) { return resolve(files); });
                    }
                    else {
                        iterations.push(Promise.all(entries.map(function (entry) {
                            if (entry.isFile) {
                                return new Promise(function (resolveFile) {
                                    entry.file(function (f) {
                                        files.push({
                                            entry: entry,
                                            file: f,
                                            relativeFolder: entry.fullPath.replace(/\/[^\/]*$/, '')
                                        });
                                        resolveFile();
                                    });
                                });
                            }
                            else {
                                return FileUtils.flattern(entry).then(function (result) {
                                    files.push.apply(files, result);
                                });
                            }
                        })));
                        traverse();
                    }
                });
            })();
        });
    };
    FileUtils.toFileArray = function (fileList) {
        var result = [];
        if (fileList && fileList.length > 0) {
            for (var i = 0; i < fileList.length; i++) {
                result.push(fileList[i]);
            }
        }
        return result;
    };
    return FileUtils;
}());
exports.FileUtils = FileUtils;


/***/ }),

/***/ 345:
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
var ObjectUtils = (function () {
    function ObjectUtils() {
    }
    ObjectUtils.getValue = function (target, key) {
        if (!target) {
            return undefined;
        }
        var keys = key.split('.');
        key = '';
        do {
            key += keys.shift();
            var value = target[key];
            if (value !== undefined && (typeof value === 'object' || !keys.length)) {
                target = value;
                key = '';
            }
            else if (!keys.length) {
                target = undefined;
            }
            else {
                key += '.';
            }
        } while (keys.length);
        return target;
    };
    return ObjectUtils;
}());
exports.ObjectUtils = ObjectUtils;


/***/ }),

/***/ 35:
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var core_2 = __webpack_require__(110);
exports.TRANSLATION_PROVIDER = new core_1.OpaqueToken('Injection token for translation providers.');
var TranslationService = (function () {
    function TranslationService(translate, providers) {
        this.translate = translate;
        this.defaultLang = 'en';
        this.userLang = 'en';
        this.userLang = translate.getBrowserLang() || this.defaultLang;
        translate.setDefaultLang(this.defaultLang);
        this.customLoader = this.translate.currentLoader;
        this.use(this.userLang);
        if (providers && providers.length > 0) {
            for (var _i = 0, providers_1 = providers; _i < providers_1.length; _i++) {
                var provider = providers_1[_i];
                this.addTranslationFolder(provider.name, provider.source);
            }
        }
    }
    TranslationService.prototype.addTranslationFolder = function (name, path) {
        var _this = this;
        if (name === void 0) { name = ''; }
        if (path === void 0) { path = ''; }
        if (!this.customLoader.providerRegistered(name)) {
            this.customLoader.registerProvider(name, path);
            if (this.userLang !== this.defaultLang) {
                this.translate.getTranslation(this.defaultLang).subscribe(function () {
                    _this.translate.getTranslation(_this.userLang).subscribe(function () {
                        _this.translate.use(_this.userLang);
                    });
                });
            }
            else {
                this.translate.getTranslation(this.userLang).subscribe(function () {
                    _this.translate.use(_this.userLang);
                });
            }
        }
    };
    TranslationService.prototype.use = function (lang) {
        this.customLoader.init(lang);
        return this.translate.use(lang);
    };
    TranslationService.prototype.get = function (key, interpolateParams) {
        return this.translate.get(key, interpolateParams);
    };
    return TranslationService;
}());
TranslationService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(exports.TRANSLATION_PROVIDER)),
    __metadata("design:paramtypes", [typeof (_a = typeof core_2.TranslateService !== "undefined" && core_2.TranslateService) === "function" && _a || Object, Array])
], TranslationService);
exports.TranslationService = TranslationService;
var _a;


/***/ }),

/***/ 354:
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
var InfoDrawerLayoutComponent = (function () {
    function InfoDrawerLayoutComponent() {
    }
    return InfoDrawerLayoutComponent;
}());
InfoDrawerLayoutComponent = __decorate([
    core_1.Component({
        selector: 'adf-info-drawer-layout',
        template: __webpack_require__(597),
        styles: [__webpack_require__(767)],
        encapsulation: core_1.ViewEncapsulation.None,
        host: { 'class': 'adf-info-drawer-layout' }
    })
], InfoDrawerLayoutComponent);
exports.InfoDrawerLayoutComponent = InfoDrawerLayoutComponent;
var InfoDrawerTitleDirective = (function () {
    function InfoDrawerTitleDirective() {
    }
    return InfoDrawerTitleDirective;
}());
InfoDrawerTitleDirective = __decorate([
    core_1.Directive({ selector: '[info-drawer-title]' })
], InfoDrawerTitleDirective);
exports.InfoDrawerTitleDirective = InfoDrawerTitleDirective;
var InfoDrawerButtonsDirective = (function () {
    function InfoDrawerButtonsDirective() {
    }
    return InfoDrawerButtonsDirective;
}());
InfoDrawerButtonsDirective = __decorate([
    core_1.Directive({ selector: '[info-drawer-buttons]' })
], InfoDrawerButtonsDirective);
exports.InfoDrawerButtonsDirective = InfoDrawerButtonsDirective;
var InfoDrawerContentDirective = (function () {
    function InfoDrawerContentDirective() {
    }
    return InfoDrawerContentDirective;
}());
InfoDrawerContentDirective = __decorate([
    core_1.Directive({ selector: '[info-drawer-content]' })
], InfoDrawerContentDirective);
exports.InfoDrawerContentDirective = InfoDrawerContentDirective;


/***/ }),

/***/ 355:
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
var AlfrescoMdlMenuDirective = (function () {
    function AlfrescoMdlMenuDirective(element) {
        this.element = element;
    }
    AlfrescoMdlMenuDirective.prototype.ngAfterViewInit = function () {
        if (componentHandler) {
            var el = this.element.nativeElement;
            el.classList.add('mdl-menu');
            el.classList.add('mdl-js-menu');
            el.classList.add('mdl-js-ripple-effect');
            componentHandler.upgradeElement(el, 'MaterialMenu');
        }
    };
    return AlfrescoMdlMenuDirective;
}());
AlfrescoMdlMenuDirective = __decorate([
    core_1.Directive({
        selector: '[adf-mdl-menu], [alfresco-mdl-menu]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], AlfrescoMdlMenuDirective);
exports.AlfrescoMdlMenuDirective = AlfrescoMdlMenuDirective;
var _a;


/***/ }),

/***/ 356:
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
var AlfrescoMdlTextFieldDirective = (function () {
    function AlfrescoMdlTextFieldDirective(element) {
        this.element = element;
    }
    AlfrescoMdlTextFieldDirective.prototype.ngAfterViewInit = function () {
        if (componentHandler) {
            var el = this.element.nativeElement;
            el.classList.add('mdl-textfield');
            el.classList.add('mdl-js-textfield');
            el.classList.add('mdl-textfield--floating-label');
            componentHandler.upgradeElement(el, 'MaterialTextfield');
        }
    };
    return AlfrescoMdlTextFieldDirective;
}());
AlfrescoMdlTextFieldDirective = __decorate([
    core_1.Directive({
        selector: '[adf-mdl-textfield]], [alfresco-mdl-textfield]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], AlfrescoMdlTextFieldDirective);
exports.AlfrescoMdlTextFieldDirective = AlfrescoMdlTextFieldDirective;
var _a;


/***/ }),

/***/ 357:
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
var MDLDirective = (function () {
    function MDLDirective() {
        console.log('MDLDirective is deprecated and should not be used.');
    }
    MDLDirective.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeAllRegistered();
    };
    return MDLDirective;
}());
MDLDirective = __decorate([
    core_1.Directive({
        selector: '[mdl]'
    }),
    __metadata("design:paramtypes", [])
], MDLDirective);
exports.MDLDirective = MDLDirective;


/***/ }),

/***/ 358:
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
var common_1 = __webpack_require__(13);
var core_1 = __webpack_require__(0);
var material_1 = __webpack_require__(3);
var core_2 = __webpack_require__(110);
var pagination_component_1 = __webpack_require__(467);
var PaginationModule = (function () {
    function PaginationModule() {
    }
    return PaginationModule;
}());
PaginationModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            core_2.TranslateModule,
            material_1.MaterialModule
        ],
        declarations: [
            pagination_component_1.PaginationComponent
        ],
        exports: [
            pagination_component_1.PaginationComponent
        ]
    })
], PaginationModule);
exports.PaginationModule = PaginationModule;


/***/ }),

/***/ 359:
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
var common_1 = __webpack_require__(13);
var core_1 = __webpack_require__(0);
var material_1 = __webpack_require__(3);
var toolbar_divider_component_1 = __webpack_require__(468);
var toolbar_title_component_1 = __webpack_require__(469);
var toolbar_component_1 = __webpack_require__(470);
var ToolbarModule = (function () {
    function ToolbarModule() {
    }
    return ToolbarModule;
}());
ToolbarModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            material_1.MdToolbarModule
        ],
        declarations: [
            toolbar_component_1.ToolbarComponent,
            toolbar_title_component_1.ToolbarTitleComponent,
            toolbar_divider_component_1.ToolbarDividerComponent
        ],
        exports: [
            material_1.MdToolbarModule,
            toolbar_component_1.ToolbarComponent,
            toolbar_title_component_1.ToolbarTitleComponent,
            toolbar_divider_component_1.ToolbarDividerComponent
        ]
    })
], ToolbarModule);
exports.ToolbarModule = ToolbarModule;


/***/ }),

/***/ 360:
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
var base_event_1 = __webpack_require__(199);
var BaseUIEvent = (function (_super) {
    __extends(BaseUIEvent, _super);
    function BaseUIEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BaseUIEvent;
}(base_event_1.BaseEvent));
exports.BaseUIEvent = BaseUIEvent;


/***/ }),

/***/ 361:
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

/***/ 362:
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
        material_1.MdDialogModule,
        material_1.MdInputModule,
        material_1.MdProgressBarModule,
        material_1.MdSnackBarModule,
        material_1.MdToolbarModule,
        material_1.MdTabsModule
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

/***/ 363:
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
var PermissionsEnum = (function (_super) {
    __extends(PermissionsEnum, _super);
    function PermissionsEnum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PermissionsEnum;
}(String));
PermissionsEnum.DELETE = 'delete';
PermissionsEnum.UPDATE = 'update';
PermissionsEnum.CREATE = 'create';
PermissionsEnum.UPDATEPERMISSIONS = 'updatePermissions';
PermissionsEnum.NOT_DELETE = '!delete';
PermissionsEnum.NOT_UPDATE = '!update';
PermissionsEnum.NOT_CREATE = '!create';
PermissionsEnum.NOT_UPDATEPERMISSIONS = '!updatePermissions';
exports.PermissionsEnum = PermissionsEnum;


/***/ }),

/***/ 364:
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
var FileSizePipe = (function () {
    function FileSizePipe() {
    }
    FileSizePipe.prototype.transform = function (bytes, decimals) {
        if (decimals === void 0) { decimals = 2; }
        if (bytes == null || bytes === undefined) {
            return '';
        }
        if (bytes === 0) {
            return '0 Bytes';
        }
        var k = 1024, dm = decimals || 2, sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    return FileSizePipe;
}());
FileSizePipe = __decorate([
    core_1.Pipe({
        name: 'adfFileSize'
    })
], FileSizePipe);
exports.FileSizePipe = FileSizePipe;


/***/ }),

/***/ 365:
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
var highlight_transform_service_1 = __webpack_require__(74);
var HighlightPipe = (function () {
    function HighlightPipe(highlightTransformService) {
        this.highlightTransformService = highlightTransformService;
    }
    HighlightPipe.prototype.transform = function (text, search) {
        var result = this.highlightTransformService.highlight(text, search);
        return result.text;
    };
    return HighlightPipe;
}());
HighlightPipe = __decorate([
    core_1.Pipe({
        name: 'highlight'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof highlight_transform_service_1.HighlightTransformService !== "undefined" && highlight_transform_service_1.HighlightTransformService) === "function" && _a || Object])
], HighlightPipe);
exports.HighlightPipe = HighlightPipe;
var _a;


/***/ }),

/***/ 366:
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
__export(__webpack_require__(345));
__export(__webpack_require__(344));
__export(__webpack_require__(93));


/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_387__;

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ft_ic_folder.1ece9230c256a6ebeeca193cb0fd860e.svg";

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ft_ic_folder_disable.06441910956c575688822a09b0566784.svg";

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ft_ic_miscellaneous.e4862994d43932202b2a996180153e51.svg";

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ft_ic_pdf.16544c01efcb040787005ead12b0bc3e.svg";

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ft_ic_presentation.9290474661f7afba546d50b9fbed90f1.svg";

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ft_ic_spreadsheet.844b9d5f795485f82ce8e8c5a59a498e.svg";

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ft_ic_vector_image.e1a2da09c969362955bdcec518b44ec3.svg";

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ft_ic_video.7c067349a7712caaee3957a5abd132c5.svg";

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ft_ic_website.188ff3afc07c9fb4f751ce4ccfcba147.svg";

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

var concatMap = __webpack_require__(410);
var balanced = __webpack_require__(408);

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function identity(e) {
  return e;
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m || /\$$/.test(m.pre)) return [str];

  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
  var isSequence = isNumericSequence || isAlphaSequence;
  var isOptions = m.body.indexOf(',') >= 0;
  if (!isSequence && !isOptions) {
    // {a},b}
    if (m.post.match(/,.*\}/)) {
      str = m.pre + '{' + m.body + escClose + m.post;
      return expand(str);
    }
    return [str];
  }

  var n;
  if (isSequence) {
    n = m.body.split(/\.\./);
  } else {
    n = parseCommaParts(m.body);
    if (n.length === 1) {
      // x{{a,b}}y ==> x{a}y x{b}y
      n = expand(n[0], false).map(embrace);
      if (n.length === 1) {
        var post = m.post.length
          ? expand(m.post, false)
          : [''];
        return post.map(function(p) {
          return m.pre + n[0] + p;
        });
      }
    }
  }

  // at this point, n is the parts, and we know it's not a comma set
  // with a single entry.

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  var N;

  if (isSequence) {
    var x = numeric(n[0]);
    var y = numeric(n[1]);
    var width = Math.max(n[0].length, n[1].length)
    var incr = n.length == 3
      ? Math.abs(numeric(n[2]))
      : 1;
    var test = lte;
    var reverse = y < x;
    if (reverse) {
      incr *= -1;
      test = gte;
    }
    var pad = n.some(isPadded);

    N = [];

    for (var i = x; test(i, y); i += incr) {
      var c;
      if (isAlphaSequence) {
        c = String.fromCharCode(i);
        if (c === '\\')
          c = '';
      } else {
        c = String(i);
        if (pad) {
          var need = width - c.length;
          if (need > 0) {
            var z = new Array(need + 1).join('0');
            if (i < 0)
              c = '-' + z + c.slice(1);
            else
              c = z + c;
          }
        }
      }
      N.push(c);
    }
  } else {
    N = concatMap(n, function(el) { return expand(el, false) });
  }

  for (var j = 0; j < N.length; j++) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + N[j] + post[k];
      if (!isTop || isSequence || expansion)
        expansions.push(expansion);
    }
  }

  return expansions;
}



/***/ }),

/***/ 410:
/***/ (function(module, exports) {

module.exports = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ 464:
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
var accordion_component_1 = __webpack_require__(342);
var AccordionGroupComponent = (function () {
    function AccordionGroupComponent(accordion) {
        this.accordion = accordion;
        this._isOpen = false;
        this._isSelected = false;
        this.hasAccordionIcon = true;
        this.headingClick = new core_1.EventEmitter();
        this.accordion.addGroup(this);
    }
    Object.defineProperty(AccordionGroupComponent.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            this._isOpen = value;
            if (value) {
                this.accordion.closeOthers(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionGroupComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        set: function (value) {
            this._isSelected = value;
        },
        enumerable: true,
        configurable: true
    });
    AccordionGroupComponent.prototype.ngOnDestroy = function () {
        this.accordion.removeGroup(this);
    };
    AccordionGroupComponent.prototype.hasHeadingIcon = function () {
        return this.headingIcon ? true : false;
    };
    AccordionGroupComponent.prototype.toggleOpen = function (event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
        this.headingClick.emit(this.heading);
    };
    AccordionGroupComponent.prototype.getAccordionIcon = function () {
        return this.isOpen ? 'expand_less' : 'expand_more';
    };
    return AccordionGroupComponent;
}());
__decorate([
    core_1.ViewChild('contentWrapper'),
    __metadata("design:type", Object)
], AccordionGroupComponent.prototype, "contentWrapper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AccordionGroupComponent.prototype, "heading", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AccordionGroupComponent.prototype, "headingIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AccordionGroupComponent.prototype, "hasAccordionIcon", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], AccordionGroupComponent.prototype, "headingClick", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AccordionGroupComponent.prototype, "isOpen", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AccordionGroupComponent.prototype, "isSelected", null);
AccordionGroupComponent = __decorate([
    core_1.Component({
        selector: 'adf-accordion-group',
        template: __webpack_require__(596),
        styles: [__webpack_require__(766)],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof accordion_component_1.AccordionComponent !== "undefined" && accordion_component_1.AccordionComponent) === "function" && _b || Object])
], AccordionGroupComponent);
exports.AccordionGroupComponent = AccordionGroupComponent;
var _a, _b;


/***/ }),

/***/ 465:
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
var context_menu_service_1 = __webpack_require__(191);
var ContextMenuHolderComponent = (function () {
    function ContextMenuHolderComponent(contextMenuService) {
        var _this = this;
        this.links = [];
        this.isShown = false;
        this.mouseLocation = { left: 0, top: 0 };
        contextMenuService.show.subscribe(function (e) { return _this.showMenu(e.event, e.obj); });
    }
    Object.defineProperty(ContextMenuHolderComponent.prototype, "locationCss", {
        get: function () {
            return {
                position: 'fixed',
                display: this.isShown ? 'block' : 'none',
                left: this.mouseLocation.left + 'px',
                top: this.mouseLocation.top + 'px'
            };
        },
        enumerable: true,
        configurable: true
    });
    ContextMenuHolderComponent.prototype.clickedOutside = function () {
        this.isShown = false;
    };
    ContextMenuHolderComponent.prototype.onMenuItemClick = function (event, menuItem) {
        if (menuItem && menuItem.model && menuItem.model.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return;
        }
        menuItem.subject.next(menuItem);
    };
    ContextMenuHolderComponent.prototype.showMenu = function (e, links) {
        this.isShown = true;
        this.links = links;
        if (e) {
            this.mouseLocation = {
                left: e.clientX,
                top: e.clientY
            };
        }
    };
    ContextMenuHolderComponent.prototype.onShowContextMenu = function (event) {
        if (event) {
            event.preventDefault();
        }
    };
    return ContextMenuHolderComponent;
}());
__decorate([
    core_1.HostListener('document:click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContextMenuHolderComponent.prototype, "clickedOutside", null);
__decorate([
    core_1.HostListener('contextmenu', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ContextMenuHolderComponent.prototype, "onShowContextMenu", null);
ContextMenuHolderComponent = __decorate([
    core_1.Component({
        selector: 'adf-context-menu-holder, context-menu-holder',
        styles: [
            "\n        .menu-container {\n            background: #fff;\n            display: block;\n            margin: 0;\n            padding: 0;\n            border: none;\n            overflow: visible;\n            z-index: 9999;\n        }\n\n        .context-menu {\n            list-style-type: none;\n            position: static;\n            height: auto;\n            width: auto;\n            min-width: 124px;\n            padding: 8px 0;\n            margin: 0;\n            box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);\n            border-radius: 2px;\n        }\n\n        .context-menu .link {\n            opacity: 1;\n        }\n        "
        ],
        template: "\n        <div [ngStyle]=\"locationCss\" class=\"menu-container\">\n            <ul class=\"context-menu\">\n                <li *ngFor=\"let link of links\"\n                    class=\"mdl-menu__item link\"\n                    (click)=\"onMenuItemClick($event, link)\"\n                    [attr.disabled]=\"link.model?.disabled || undefined\">\n                    {{link.title || link.model?.title}}\n                </li>\n            </ul>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof context_menu_service_1.ContextMenuService !== "undefined" && context_menu_service_1.ContextMenuService) === "function" && _a || Object])
], ContextMenuHolderComponent);
exports.ContextMenuHolderComponent = ContextMenuHolderComponent;
var _a;


/***/ }),

/***/ 466:
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
var context_menu_service_1 = __webpack_require__(191);
var ContextMenuDirective = (function () {
    function ContextMenuDirective(_contextMenuService) {
        this._contextMenuService = _contextMenuService;
        this.enabled = false;
    }
    ContextMenuDirective.prototype.onShowContextMenu = function (event) {
        if (this.enabled) {
            if (event) {
                event.preventDefault();
            }
            if (this.links && this.links.length > 0) {
                if (this._contextMenuService) {
                    this._contextMenuService.show.next({ event: event, obj: this.links });
                }
            }
        }
    };
    return ContextMenuDirective;
}());
__decorate([
    core_1.Input('context-menu'),
    __metadata("design:type", Array)
], ContextMenuDirective.prototype, "links", void 0);
__decorate([
    core_1.Input('context-menu-enabled'),
    __metadata("design:type", Boolean)
], ContextMenuDirective.prototype, "enabled", void 0);
__decorate([
    core_1.HostListener('contextmenu', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ContextMenuDirective.prototype, "onShowContextMenu", null);
ContextMenuDirective = __decorate([
    core_1.Directive({
        selector: '[adf-context-menu], [context-menu]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof context_menu_service_1.ContextMenuService !== "undefined" && context_menu_service_1.ContextMenuService) === "function" && _a || Object])
], ContextMenuDirective);
exports.ContextMenuDirective = ContextMenuDirective;
var _a;


/***/ }),

/***/ 467:
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
var alfresco_js_api_1 = __webpack_require__(83);
var translation_service_1 = __webpack_require__(35);
var PaginationComponent = PaginationComponent_1 = (function () {
    function PaginationComponent(translationService) {
        this.supportedPageSizes = [25, 50, 100];
        this.maxItems = PaginationComponent_1.DEFAULT_PAGE_SIZE;
        this.onChange = new core_1.EventEmitter();
        this.onChangePageNumber = new core_1.EventEmitter();
        this.onChangePageSize = new core_1.EventEmitter();
        this.onNextPage = new core_1.EventEmitter();
        this.onPrevPage = new core_1.EventEmitter();
        if (translationService) {
            translationService.addTranslationFolder('ng2-alfresco-core', 'assets/ng2-alfresco-core');
        }
    }
    PaginationComponent.prototype.ngOnInit = function () {
        if (!this.pagination) {
            this.pagination = PaginationComponent_1.DEFAULT_PAGINATION;
        }
    };
    Object.defineProperty(PaginationComponent.prototype, "lastPage", {
        get: function () {
            var _a = this.pagination, maxItems = _a.maxItems, totalItems = _a.totalItems;
            return (totalItems && maxItems)
                ? Math.ceil(totalItems / maxItems)
                : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "current", {
        get: function () {
            var _a = this.pagination, maxItems = _a.maxItems, skipCount = _a.skipCount;
            return (skipCount && maxItems)
                ? Math.floor(skipCount / maxItems) + 1
                : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "isLastPage", {
        get: function () {
            var _a = this, current = _a.current, lastPage = _a.lastPage;
            return current === lastPage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "isFirstPage", {
        get: function () {
            return this.current === 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "next", {
        get: function () {
            var _a = this, isLastPage = _a.isLastPage, current = _a.current;
            return isLastPage ? current : current + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "previous", {
        get: function () {
            var _a = this, isFirstPage = _a.isFirstPage, current = _a.current;
            return isFirstPage ? 1 : current - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "range", {
        get: function () {
            var _a = this.pagination, skipCount = _a.skipCount, maxItems = _a.maxItems, totalItems = _a.totalItems;
            var isLastPage = this.isLastPage;
            var start = totalItems ? skipCount + 1 : 0;
            var end = isLastPage ? totalItems : skipCount + maxItems;
            return [start, end];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "pages", {
        get: function () {
            return Array(this.lastPage)
                .fill('n')
                .map(function (item, index) { return (index + 1); });
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.goNext = function () {
        var _a = this, next = _a.next, maxItems = _a.pagination.maxItems;
        this.handlePaginationEvent(PaginationComponent_1.ACTIONS.NEXT_PAGE, {
            skipCount: (next - 1) * maxItems,
            maxItems: maxItems
        });
    };
    PaginationComponent.prototype.goPrevious = function () {
        var _a = this, previous = _a.previous, maxItems = _a.pagination.maxItems;
        this.handlePaginationEvent(PaginationComponent_1.ACTIONS.PREV_PAGE, {
            skipCount: (previous - 1) * maxItems,
            maxItems: maxItems
        });
    };
    PaginationComponent.prototype.changePageNumber = function (pageNumber) {
        var maxItems = this.pagination.maxItems;
        this.handlePaginationEvent(PaginationComponent_1.ACTIONS.CHANGE_PAGE_NUMBER, {
            skipCount: (pageNumber - 1) * maxItems,
            maxItems: maxItems
        });
    };
    PaginationComponent.prototype.changePageSize = function (maxItems) {
        this.handlePaginationEvent(PaginationComponent_1.ACTIONS.CHANGE_PAGE_SIZE, {
            skipCount: 0,
            maxItems: maxItems
        });
    };
    PaginationComponent.prototype.handlePaginationEvent = function (action, params) {
        var _a = PaginationComponent_1.ACTIONS, NEXT_PAGE = _a.NEXT_PAGE, PREV_PAGE = _a.PREV_PAGE, CHANGE_PAGE_NUMBER = _a.CHANGE_PAGE_NUMBER, CHANGE_PAGE_SIZE = _a.CHANGE_PAGE_SIZE;
        var _b = this, onChange = _b.onChange, onChangePageNumber = _b.onChangePageNumber, onChangePageSize = _b.onChangePageSize, onNextPage = _b.onNextPage, onPrevPage = _b.onPrevPage, pagination = _b.pagination;
        var data = Object.assign({}, pagination, params);
        if (action === NEXT_PAGE) {
            onNextPage.emit(data);
        }
        if (action === PREV_PAGE) {
            onPrevPage.emit(data);
        }
        if (action === CHANGE_PAGE_NUMBER) {
            onChangePageNumber.emit(data);
        }
        if (action === CHANGE_PAGE_SIZE) {
            onChangePageSize.emit(data);
        }
        onChange.emit(params);
    };
    return PaginationComponent;
}());
PaginationComponent.DEFAULT_PAGE_SIZE = 25;
PaginationComponent.DEFAULT_PAGINATION = {
    skipCount: 0,
    maxItems: PaginationComponent_1.DEFAULT_PAGE_SIZE,
    totalItems: 0
};
PaginationComponent.ACTIONS = {
    NEXT_PAGE: 'NEXT_PAGE',
    PREV_PAGE: 'PREV_PAGE',
    CHANGE_PAGE_SIZE: 'CHANGE_PAGE_SIZE',
    CHANGE_PAGE_NUMBER: 'CHANGE_PAGE_NUMBER'
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PaginationComponent.prototype, "supportedPageSizes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "maxItems", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof alfresco_js_api_1.Pagination !== "undefined" && alfresco_js_api_1.Pagination) === "function" && _a || Object)
], PaginationComponent.prototype, "pagination", void 0);
__decorate([
    core_1.Output('change'),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], PaginationComponent.prototype, "onChange", void 0);
__decorate([
    core_1.Output('changePageNumber'),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], PaginationComponent.prototype, "onChangePageNumber", void 0);
__decorate([
    core_1.Output('changePageSize'),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], PaginationComponent.prototype, "onChangePageSize", void 0);
__decorate([
    core_1.Output('nextPage'),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], PaginationComponent.prototype, "onNextPage", void 0);
__decorate([
    core_1.Output('prevPage'),
    __metadata("design:type", typeof (_f = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _f || Object)
], PaginationComponent.prototype, "onPrevPage", void 0);
PaginationComponent = PaginationComponent_1 = __decorate([
    core_1.Component({
        selector: 'adf-pagination, alfresco-pagination',
        host: { 'class': 'adf-pagination' },
        template: __webpack_require__(599),
        styles: [__webpack_require__(769)],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof translation_service_1.TranslationService !== "undefined" && translation_service_1.TranslationService) === "function" && _g || Object])
], PaginationComponent);
exports.PaginationComponent = PaginationComponent;
var PaginationComponent_1, _a, _b, _c, _d, _e, _f, _g;


/***/ }),

/***/ 468:
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
var ToolbarDividerComponent = (function () {
    function ToolbarDividerComponent() {
    }
    return ToolbarDividerComponent;
}());
ToolbarDividerComponent = __decorate([
    core_1.Component({
        selector: 'adf-toolbar-divider',
        template: '<div></div>',
        host: { 'class': 'adf-toolbar-divider' },
        styles: ["\n        .adf-toolbar-divider > div {\n            height: 24px;\n            width: 1px;\n            background: rgba(0, 0, 0, 0.26);\n            margin-left: 5px;\n            margin-right: 5px;\n        }\n    "],
        encapsulation: core_1.ViewEncapsulation.None
    })
], ToolbarDividerComponent);
exports.ToolbarDividerComponent = ToolbarDividerComponent;


/***/ }),

/***/ 469:
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
var ToolbarTitleComponent = (function () {
    function ToolbarTitleComponent() {
    }
    return ToolbarTitleComponent;
}());
ToolbarTitleComponent = __decorate([
    core_1.Component({
        selector: 'adf-toolbar-title',
        template: '<ng-content></ng-content>',
        host: { 'class': 'adf-toolbar-title' }
    })
], ToolbarTitleComponent);
exports.ToolbarTitleComponent = ToolbarTitleComponent;


/***/ }),

/***/ 470:
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
var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.title = '';
    }
    return ToolbarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ToolbarComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ToolbarComponent.prototype, "color", void 0);
ToolbarComponent = __decorate([
    core_1.Component({
        selector: 'adf-toolbar',
        template: __webpack_require__(600),
        styles: [__webpack_require__(770)],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        encapsulation: core_1.ViewEncapsulation.None,
        host: { 'class': 'adf-toolbar' }
    })
], ToolbarComponent);
exports.ToolbarComponent = ToolbarComponent;


/***/ }),

/***/ 471:
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
var card_view_dateitem_model_1 = __webpack_require__(203);
var card_view_update_service_1 = __webpack_require__(29);
var CardViewDateItemComponent = (function () {
    function CardViewDateItemComponent(cardViewUpdateService) {
        this.cardViewUpdateService = cardViewUpdateService;
    }
    CardViewDateItemComponent.prototype.isEditble = function () {
        return this.editable && this.property.editable;
    };
    CardViewDateItemComponent.prototype.showDatePicker = function () {
        this.datepicker.open();
    };
    CardViewDateItemComponent.prototype.dateChanged = function (changed) {
        this.cardViewUpdateService.update(this.property, (_a = {}, _a[this.property.key] = changed, _a));
        var _a;
    };
    return CardViewDateItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof card_view_dateitem_model_1.CardViewDateItemModel !== "undefined" && card_view_dateitem_model_1.CardViewDateItemModel) === "function" && _a || Object)
], CardViewDateItemComponent.prototype, "property", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CardViewDateItemComponent.prototype, "editable", void 0);
__decorate([
    core_1.ViewChild(material_1.MdDatepicker),
    __metadata("design:type", typeof (_b = typeof material_1.MdDatepicker !== "undefined" && material_1.MdDatepicker) === "function" && _b || Object)
], CardViewDateItemComponent.prototype, "datepicker", void 0);
CardViewDateItemComponent = __decorate([
    core_1.Component({
        selector: 'adf-card-view-dateitem',
        template: __webpack_require__(601),
        styles: [__webpack_require__(771)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof card_view_update_service_1.CardViewUpdateService !== "undefined" && card_view_update_service_1.CardViewUpdateService) === "function" && _c || Object])
], CardViewDateItemComponent);
exports.CardViewDateItemComponent = CardViewDateItemComponent;
var _a, _b, _c;


/***/ }),

/***/ 472:
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
var card_view_item_interface_1 = __webpack_require__(201);
var card_view_content_proxy_directive_1 = __webpack_require__(343);
var CardViewItemDispatcherComponent = (function () {
    function CardViewItemDispatcherComponent(resolver) {
        var _this = this;
        this.resolver = resolver;
        this.loaded = false;
        this.componentReference = null;
        var dynamicLifecycleMethods = [
            'ngOnInit',
            'ngDoCheck',
            'ngAfterContentInit',
            'ngAfterContentChecked',
            'ngAfterViewInit',
            'ngAfterViewChecked',
            'ngOnDestroy'
        ];
        dynamicLifecycleMethods.forEach(function (dynamicLifecycleMethod) {
            _this[dynamicLifecycleMethod] = _this.proxy.bind(_this, dynamicLifecycleMethod);
        });
    }
    CardViewItemDispatcherComponent.prototype.ngOnChanges = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.loaded) {
            this.loadComponent();
            this.loaded = true;
        }
        this.proxy.apply(this, ['ngOnChanges'].concat(args));
    };
    CardViewItemDispatcherComponent.prototype.loadComponent = function () {
        var upperCamelCasedType = this.getUpperCamelCase(this.property.type), className = "CardView" + upperCamelCasedType + "ItemComponent";
        var factories = Array.from(this.resolver['_factories'].keys());
        var factoryClass = factories.find(function (x) { return x.name === className; });
        var factory = this.resolver.resolveComponentFactory(factoryClass);
        this.componentReference = this.content.viewContainerRef.createComponent(factory);
        this.componentReference.instance.editable = this.editable;
        this.componentReference.instance.property = this.property;
    };
    CardViewItemDispatcherComponent.prototype.getUpperCamelCase = function (type) {
        var camelCasedType = type.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
        return camelCasedType[0].toUpperCase() + camelCasedType.substr(1);
    };
    CardViewItemDispatcherComponent.prototype.proxy = function (methodName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.componentReference.instance[methodName]) {
            this.componentReference.instance[methodName].apply(this.componentReference.instance, args);
        }
    };
    return CardViewItemDispatcherComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof card_view_item_interface_1.CardViewItem !== "undefined" && card_view_item_interface_1.CardViewItem) === "function" && _a || Object)
], CardViewItemDispatcherComponent.prototype, "property", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CardViewItemDispatcherComponent.prototype, "editable", void 0);
__decorate([
    core_1.ViewChild(card_view_content_proxy_directive_1.CardViewContentProxyDirective),
    __metadata("design:type", typeof (_b = typeof card_view_content_proxy_directive_1.CardViewContentProxyDirective !== "undefined" && card_view_content_proxy_directive_1.CardViewContentProxyDirective) === "function" && _b || Object)
], CardViewItemDispatcherComponent.prototype, "content", void 0);
CardViewItemDispatcherComponent = __decorate([
    core_1.Component({
        selector: 'adf-card-view-item-dispatcher',
        template: '<ng-template adf-card-view-content-proxy></ng-template>'
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof core_1.ComponentFactoryResolver !== "undefined" && core_1.ComponentFactoryResolver) === "function" && _c || Object])
], CardViewItemDispatcherComponent);
exports.CardViewItemDispatcherComponent = CardViewItemDispatcherComponent;
var _a, _b, _c;


/***/ }),

/***/ 473:
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
var card_view_mapitem_model_1 = __webpack_require__(204);
var card_view_update_service_1 = __webpack_require__(29);
var CardViewMapItemComponent = (function () {
    function CardViewMapItemComponent(cardViewUpdateService) {
        this.cardViewUpdateService = cardViewUpdateService;
    }
    CardViewMapItemComponent.prototype.ngOnChanges = function () {
        console.log();
    };
    CardViewMapItemComponent.prototype.isClickable = function () {
        return this.property.clickable;
    };
    CardViewMapItemComponent.prototype.clicked = function () {
        this.cardViewUpdateService.clicked(this.property);
    };
    return CardViewMapItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof card_view_mapitem_model_1.CardViewMapItemModel !== "undefined" && card_view_mapitem_model_1.CardViewMapItemModel) === "function" && _a || Object)
], CardViewMapItemComponent.prototype, "property", void 0);
CardViewMapItemComponent = __decorate([
    core_1.Component({
        selector: 'adf-card-view-mapitem',
        template: __webpack_require__(602),
        styles: [__webpack_require__(772)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof card_view_update_service_1.CardViewUpdateService !== "undefined" && card_view_update_service_1.CardViewUpdateService) === "function" && _b || Object])
], CardViewMapItemComponent);
exports.CardViewMapItemComponent = CardViewMapItemComponent;
var _a, _b;


/***/ }),

/***/ 474:
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
var card_view_textitem_model_1 = __webpack_require__(205);
var card_view_update_service_1 = __webpack_require__(29);
var CardViewTextItemComponent = (function () {
    function CardViewTextItemComponent(cardViewUpdateService) {
        this.cardViewUpdateService = cardViewUpdateService;
        this.inEdit = false;
    }
    CardViewTextItemComponent.prototype.ngOnChanges = function () {
        this.editedValue = this.property.value;
    };
    CardViewTextItemComponent.prototype.isEditble = function () {
        return this.editable && this.property.editable;
    };
    CardViewTextItemComponent.prototype.isClickable = function () {
        return this.property.clickable;
    };
    CardViewTextItemComponent.prototype.setEditMode = function (editStatus) {
        var _this = this;
        this.inEdit = editStatus;
        setTimeout(function () {
            _this.editorInput.nativeElement.click();
        }, 0);
    };
    CardViewTextItemComponent.prototype.reset = function () {
        this.editedValue = this.property.value;
        this.setEditMode(false);
    };
    CardViewTextItemComponent.prototype.update = function () {
        this.cardViewUpdateService.update(this.property, (_a = {}, _a[this.property.key] = this.editedValue, _a));
        var _a;
    };
    CardViewTextItemComponent.prototype.clicked = function () {
        this.cardViewUpdateService.clicked(this.property);
    };
    return CardViewTextItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof card_view_textitem_model_1.CardViewTextItemModel !== "undefined" && card_view_textitem_model_1.CardViewTextItemModel) === "function" && _a || Object)
], CardViewTextItemComponent.prototype, "property", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CardViewTextItemComponent.prototype, "editable", void 0);
__decorate([
    core_1.ViewChild('editorInput'),
    __metadata("design:type", Object)
], CardViewTextItemComponent.prototype, "editorInput", void 0);
CardViewTextItemComponent = __decorate([
    core_1.Component({
        selector: 'adf-card-view-textitem',
        template: __webpack_require__(603),
        styles: [__webpack_require__(773)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof card_view_update_service_1.CardViewUpdateService !== "undefined" && card_view_update_service_1.CardViewUpdateService) === "function" && _b || Object])
], CardViewTextItemComponent);
exports.CardViewTextItemComponent = CardViewTextItemComponent;
var _a, _b;


/***/ }),

/***/ 475:
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
var CardViewComponent = (function () {
    function CardViewComponent() {
    }
    return CardViewComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CardViewComponent.prototype, "properties", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CardViewComponent.prototype, "editable", void 0);
CardViewComponent = __decorate([
    core_1.Component({
        selector: 'adf-card-view',
        template: __webpack_require__(604),
        styles: [__webpack_require__(774)]
    })
], CardViewComponent);
exports.CardViewComponent = CardViewComponent;


/***/ }),

/***/ 476:
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
var ComponentTranslationModel = (function () {
    function ComponentTranslationModel(obj) {
        this.name = obj && obj.name;
        this.path = obj && obj.path;
        this.json = obj && obj.json || [];
    }
    return ComponentTranslationModel;
}());
exports.ComponentTranslationModel = ComponentTranslationModel;


/***/ }),

/***/ 596:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-panel adf-panel-default\" [ngClass]=\"{'adf-panel-open': isOpen}\">\n    <div class=\"adf-panel-heading\" [ngClass]=\"{'adf-panel-heading-selected': isSelected}\" (click)=\"toggleOpen($event)\">\n        <div id=\"heading-icon\" *ngIf=\"hasHeadingIcon()\" class=\"adf-panel-heading-icon\">\n            <i class=\"material-icons\">{{headingIcon}}</i>\n        </div>\n        <div id=\"heading-text\" class=\"adf-panel-heading-text\">{{heading}}</div>\n        <div id=\"accordion-button\" *ngIf=\"hasAccordionIcon\" class=\"adf-panel-heading-toggle\">\n            <i class=\"material-icons\">{{getAccordionIcon()}}</i>\n        </div>\n    </div>\n    <div class=\"adf-panel-collapse\" [hidden]=\"!isOpen\">\n        <div class=\"adf-panel-body\" #contentWrapper>\n            <ng-content></ng-content>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 597:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-info-drawer-layout-header\">\n    <div class=\"adf-info-drawer-layout-header-title\">\n        <ng-content select=\"[info-drawer-title]\"></ng-content>\n    </div>\n    <div class=\"adf-info-drawer-layout-header-buttons\">\n        <ng-content select=\"[info-drawer-buttons]\"></ng-content>\n    </div>\n</div>\n<div class=\"adf-info-drawer-layout-content\">\n    <ng-content select=\"[info-drawer-content]\"></ng-content>\n</div>";

/***/ }),

/***/ 598:
/***/ (function(module, exports) {

module.exports = "<adf-info-drawer-layout>\n    <div *ngIf=\"title\" info-drawer-title>Activities</div>\n    <ng-content *ngIf=\"!title\" info-drawer-title select=\"[info-drawer-title]\"></ng-content>\n\n    <ng-content info-drawer-buttons select=\"[info-drawer-buttons]\"></ng-content>\n\n    <ng-container info-drawer-content *ngIf=\"showTabLayout(); then tabLayout else singleLayout\"></ng-container>\n\n    <ng-template #tabLayout>\n        <md-tab-group class=\"adf-info-drawer-tabs\">\n            <ng-container *ngFor=\"let contentBlock of contentBlocks\">\n                <md-tab [label]=\"contentBlock.label\" class=\"adf-info-drawer-tab\">\n                    <ng-container *ngTemplateOutlet=\"contentBlock.content\"></ng-container>\n                </md-tab>\n            </ng-container>\n        </md-tab-group>\n    </ng-template>\n\n    <ng-template #singleLayout>\n        <ng-content select=\"[info-drawer-content]\"></ng-content>\n    </ng-template>\n</adf-info-drawer-layout>";

/***/ }),

/***/ 599:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-pagination__block\">\n    <span class=\"adf-pagination__range\">\n        {{\n            'CORE.PAGINATION.ITEMS_RANGE' | translate: {\n                range: range.join('-'),\n                total: pagination.totalItems\n            }\n        }}\n    </span>\n</div>\n\n<div class=\"adf-pagination__block\">\n    <span>\n        {{ 'CORE.PAGINATION.ITEMS_PER_PAGE' | translate }}\n    </span>\n\n    <span class=\"adf-pagination__max-items\">\n        {{ pagination.maxItems }}\n    </span>\n\n    <button md-icon-button [mdMenuTriggerFor]=\"pageSizeMenu\">\n        <md-icon>arrow_drop_down</md-icon>\n    </button>\n\n    <md-menu #pageSizeMenu=\"mdMenu\">\n        <button\n            md-menu-item\n            *ngFor=\"let pageSize of supportedPageSizes\"\n            (click)=\"changePageSize(pageSize)\">\n            {{ pageSize }}\n        </button>\n    </md-menu>\n</div>\n\n<div class=\"adf-pagination__block\">\n    <span class=\"adf-pagination__current-page\">\n        {{ 'CORE.PAGINATION.CURRENT_PAGE' | translate: { number: current } }}\n    </span>\n\n    <button\n        md-icon-button\n        [mdMenuTriggerFor]=\"pagesMenu\"\n        *ngIf=\"pages.length > 1\">\n        <md-icon>arrow_drop_down</md-icon>\n    </button>\n\n    <span class=\"adf-pagination__total-pages\">\n        {{ 'CORE.PAGINATION.TOTAL_PAGES' | translate: { total: pages.length } }}\n    </span>\n\n    <md-menu #pagesMenu=\"mdMenu\">\n        <button\n            md-menu-item\n            *ngFor=\"let pageNumber of pages\"\n            (click)=\"changePageNumber(pageNumber)\">\n            {{ pageNumber }}\n        </button>\n    </md-menu>\n</div>\n\n<div class=\"adf-pagination__block\">\n    <button\n        class=\"adf-pagination__previous-button\"\n        md-icon-button\n        [disabled]=\"isFirstPage\"\n        (click)=\"goPrevious()\">\n        <md-icon>keyboard_arrow_left</md-icon>\n    </button>\n\n    <button\n        class=\"adf-pagination__next-button\"\n        md-icon-button\n        [disabled]=\"isLastPage\"\n        (click)=\"goNext()\">\n        <md-icon>keyboard_arrow_right</md-icon>\n    </button>\n</div>\n";

/***/ }),

/***/ 600:
/***/ (function(module, exports) {

module.exports = "<md-toolbar [color]=\"color\">\n    <span *ngIf=\"title\">{{ title }}</span>\n    <ng-content select=\"adf-toolbar-title\"></ng-content>\n    <span class=\"adf-toolbar--spacer\"></span>\n    <ng-content></ng-content>\n</md-toolbar>\n";

/***/ }),

/***/ 601:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-property-label\">{{ property.label }}</div>\n<div class=\"adf-property-value\">\n    <span *ngIf=\"!isEditble()\">\n        <span [attr.data-automation-id]=\"'card-dateitem-' + property.key\">{{ property.displayValue }}</span>\n    </span>\n    <span *ngIf=\"isEditble()\" class=\"adf-dateitem-editable\">\n        <input class=\"adf-invisible-date-input\" [mdDatepicker]=\"picker\" value=\"{{property.value}}\">\n        <span\n            class=\"adf-datepicker-toggle\"\n            [attr.data-automation-id]=\"'datepicker-label-toggle-' + property.key\"\n            (click)=\"showDatePicker($event)\">{{ property.displayValue }}\n        </span>\n        <button\n            [attr.data-automation-id]=\"'datepickertoggle-' + property.key\"\n            [mdDatepickerToggle]=\"picker\">\n        </button>\n        <md-datepicker #picker\n            [attr.data-automation-id]=\"'datepicker-' + property.key\"\n            (selectedChanged)=\"dateChanged($event)\"\n            [startAt]=\"property.value\"\n            [touchUi]=\"true\">\n        </md-datepicker>\n    </span>\n</div>\n";

/***/ }),

/***/ 602:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-property-label\">{{ property.label }}</div>\n<div class=\"adf-property-value\">\n    <div>\n        <span *ngIf=\"!isClickable(); else elseBlock\" [attr.data-automation-id]=\"'card-mapitem-value-' + property.key\">{{ property.displayValue }}</span>\n        <ng-template #elseBlock>\n            <span class=\"adf-mapitem-clickable-value\" (click)=\"clicked()\" [attr.data-automation-id]=\"'card-mapitem-value-' + property.key\">{{ property.displayValue }}</span>\n        </ng-template>\n    </div>\n</div>\n";

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-property-label\">{{ property.label }}</div>\n<div class=\"adf-property-value\">\n    <span *ngIf=\"!isEditble()\">\n        <span *ngIf=\"!isClickable(); else elseBlock\" [attr.data-automation-id]=\"'card-textitem-value-' + property.key\">{{ property.displayValue }}</span>\n        <ng-template #elseBlock>\n            <span class=\"adf-textitem-clickable-value\" (click)=\"clicked()\" [attr.data-automation-id]=\"'card-textitem-value-' + property.key\">{{ property.displayValue }}</span>\n        </ng-template>\n    </span>\n    <span *ngIf=\"isEditble()\">\n        <div *ngIf=\"!inEdit\" (click)=\"setEditMode(true)\" class=\"adf-textitem-readonly\" [attr.data-automation-id]=\"'card-textitem-edit-toggle-' + property.key\">\n            <span [attr.data-automation-id]=\"'card-textitem-value-' + property.key\">{{ property.displayValue }}</span>\n            <md-icon [attr.data-automation-id]=\"'card-textitem-edit-icon-' + property.key\" class=\"adf-textitem-icon\">create</md-icon>\n        </div>\n        <div *ngIf=\"inEdit\" class=\"adf-textitem-editable\">\n            <md-input-container floatPlaceholder=\"never\" class=\"adf-input-container\">\n                <input *ngIf=\"!property.multiline\" #editorInput\n                    mdInput\n                    class=\"adf-input\"\n                    [placeholder]=\"property.default\"\n                    [(ngModel)]=\"editedValue\"\n                    [attr.data-automation-id]=\"'card-textitem-editinput-' + property.key\">\n                <textarea *ngIf=\"property.multiline\" #editorInput\n                    mdInput\n                    mdTextareaAutosize\n                    mdAutosizeMaxRows=\"1\"\n                    mdAutosizeMaxRows=\"5\"\n                    class=\"adf-textarea\"\n                    [placeholder]=\"property.default\"\n                    [(ngModel)]=\"editedValue\"\n                    [attr.data-automation-id]=\"'card-textitem-edittextarea-' + property.key\"></textarea>\n            </md-input-container>\n            <md-icon\n                class=\"adf-textitem-icon adf-update-icon\"\n                (click)=\"update()\"\n                [attr.data-automation-id]=\"'card-textitem-update-' + property.key\">done</md-icon>\n            <md-icon\n                class=\"adf-textitem-icon adf-reset-icon\"\n                (click)=\"reset()\"\n                [attr.data-automation-id]=\"'card-textitem-reset-' + property.key\">clear</md-icon>\n        </div>\n    </span>\n</div>\n";

/***/ }),

/***/ 604:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-property-list\">\n    <ng-container *ngFor=\"let property of properties\">\n        <div [attr.data-automation-id]=\"'header-'+property.key\" class=\"adf-property\">\n            <adf-card-view-item-dispatcher [property]=\"property\" [editable]=\"editable\"></adf-card-view-item-dispatcher>\n        </div>\n    </ng-container>\n</div>\n";

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

module.exports = minimatch
minimatch.Minimatch = Minimatch

var path = { sep: '/' }
try {
  path = __webpack_require__(635)
} catch (er) {}

var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
var expand = __webpack_require__(409)

var plTypes = {
  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
  '?': { open: '(?:', close: ')?' },
  '+': { open: '(?:', close: ')+' },
  '*': { open: '(?:', close: ')*' },
  '@': { open: '(?:', close: ')' }
}

// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = '[^/]'

// * => any number of characters
var star = qmark + '*?'

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'

// characters that need to be escaped in RegExp.
var reSpecials = charSet('().*{}+?[]^$\\!')

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split('').reduce(function (set, c) {
    set[c] = true
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/

minimatch.filter = filter
function filter (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  a = a || {}
  b = b || {}
  var t = {}
  Object.keys(b).forEach(function (k) {
    t[k] = b[k]
  })
  Object.keys(a).forEach(function (k) {
    t[k] = a[k]
  })
  return t
}

minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return minimatch

  var orig = minimatch

  var m = function minimatch (p, pattern, options) {
    return orig.minimatch(p, pattern, ext(def, options))
  }

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  }

  return m
}

Minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return Minimatch
  return minimatch.defaults(def).Minimatch
}

function minimatch (p, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  // "" only matches ""
  if (pattern.trim() === '') return p === ''

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options)
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}
  pattern = pattern.trim()

  // windows support: need to use /, not \
  if (path.sep !== '/') {
    pattern = pattern.split(path.sep).join('/')
  }

  this.options = options
  this.set = []
  this.pattern = pattern
  this.regexp = null
  this.negate = false
  this.comment = false
  this.empty = false

  // make the set of regexps etc.
  this.make()
}

Minimatch.prototype.debug = function () {}

Minimatch.prototype.make = make
function make () {
  // don't do it more than once.
  if (this._made) return

  var pattern = this.pattern
  var options = this.options

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    this.comment = true
    return
  }
  if (!pattern) {
    this.empty = true
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate()

  // step 2: expand braces
  var set = this.globSet = this.braceExpand()

  if (options.debug) this.debug = console.error

  this.debug(this.pattern, set)

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  })

  this.debug(this.pattern, set)

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this)

  this.debug(this.pattern, set)

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return s.indexOf(false) === -1
  })

  this.debug(this.pattern, set)

  this.set = set
}

Minimatch.prototype.parseNegate = parseNegate
function parseNegate () {
  var pattern = this.pattern
  var negate = false
  var options = this.options
  var negateOffset = 0

  if (options.nonegate) return

  for (var i = 0, l = pattern.length
    ; i < l && pattern.charAt(i) === '!'
    ; i++) {
    negate = !negate
    negateOffset++
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset)
  this.negate = negate
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return braceExpand(pattern, options)
}

Minimatch.prototype.braceExpand = braceExpand

function braceExpand (pattern, options) {
  if (!options) {
    if (this instanceof Minimatch) {
      options = this.options
    } else {
      options = {}
    }
  }

  pattern = typeof pattern === 'undefined'
    ? this.pattern : pattern

  if (typeof pattern === 'undefined') {
    throw new TypeError('undefined pattern')
  }

  if (options.nobrace ||
    !pattern.match(/\{.*\}/)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern)
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse
var SUBPARSE = {}
function parse (pattern, isSub) {
  if (pattern.length > 1024 * 64) {
    throw new TypeError('pattern is too long')
  }

  var options = this.options

  // shortcuts
  if (!options.noglobstar && pattern === '**') return GLOBSTAR
  if (pattern === '') return ''

  var re = ''
  var hasMagic = !!options.nocase
  var escaping = false
  // ? => one single character
  var patternListStack = []
  var negativeLists = []
  var stateChar
  var inClass = false
  var reClassStart = -1
  var classStart = -1
  // . and .. never match anything that doesn't start with .,
  // even when options.dot is set.
  var patternStart = pattern.charAt(0) === '.' ? '' // anything
  // not (start or / followed by . or .. followed by / or end)
  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
  : '(?!\\.)'
  var self = this

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case '*':
          re += star
          hasMagic = true
        break
        case '?':
          re += qmark
          hasMagic = true
        break
        default:
          re += '\\' + stateChar
        break
      }
      self.debug('clearStateChar %j %j', stateChar, re)
      stateChar = false
    }
  }

  for (var i = 0, len = pattern.length, c
    ; (i < len) && (c = pattern.charAt(i))
    ; i++) {
    this.debug('%s\t%s %s %j', pattern, i, re, c)

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += '\\' + c
      escaping = false
      continue
    }

    switch (c) {
      case '/':
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false

      case '\\':
        clearStateChar()
        escaping = true
      continue

      // the various stateChar values
      // for the "extglob" stuff.
      case '?':
      case '*':
      case '+':
      case '@':
      case '!':
        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class')
          if (c === '!' && i === classStart + 1) c = '^'
          re += c
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar)
        clearStateChar()
        stateChar = c
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar()
      continue

      case '(':
        if (inClass) {
          re += '('
          continue
        }

        if (!stateChar) {
          re += '\\('
          continue
        }

        patternListStack.push({
          type: stateChar,
          start: i - 1,
          reStart: re.length,
          open: plTypes[stateChar].open,
          close: plTypes[stateChar].close
        })
        // negation is (?:(?!js)[^/]*)
        re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
        this.debug('plType %j %j', stateChar, re)
        stateChar = false
      continue

      case ')':
        if (inClass || !patternListStack.length) {
          re += '\\)'
          continue
        }

        clearStateChar()
        hasMagic = true
        var pl = patternListStack.pop()
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        re += pl.close
        if (pl.type === '!') {
          negativeLists.push(pl)
        }
        pl.reEnd = re.length
      continue

      case '|':
        if (inClass || !patternListStack.length || escaping) {
          re += '\\|'
          escaping = false
          continue
        }

        clearStateChar()
        re += '|'
      continue

      // these are mostly the same in regexp and glob
      case '[':
        // swallow any state-tracking char before the [
        clearStateChar()

        if (inClass) {
          re += '\\' + c
          continue
        }

        inClass = true
        classStart = i
        reClassStart = re.length
        re += c
      continue

      case ']':
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += '\\' + c
          escaping = false
          continue
        }

        // handle the case where we left a class open.
        // "[z-a]" is valid, equivalent to "\[z-a\]"
        if (inClass) {
          // split where the last [ was, make sure we don't have
          // an invalid re. if so, re-walk the contents of the
          // would-be class to re-translate any characters that
          // were passed through as-is
          // TODO: It would probably be faster to determine this
          // without a try/catch and a new RegExp, but it's tricky
          // to do safely.  For now, this is safe and works.
          var cs = pattern.substring(classStart + 1, i)
          try {
            RegExp('[' + cs + ']')
          } catch (er) {
            // not a valid class!
            var sp = this.parse(cs, SUBPARSE)
            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]'
            hasMagic = hasMagic || sp[1]
            inClass = false
            continue
          }
        }

        // finish up the class.
        hasMagic = true
        inClass = false
        re += c
      continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials[c]
          && !(c === '^' && inClass)) {
          re += '\\'
        }

        re += c

    } // switch
  } // for

  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    cs = pattern.substr(classStart + 1)
    sp = this.parse(cs, SUBPARSE)
    re = re.substr(0, reClassStart) + '\\[' + sp[0]
    hasMagic = hasMagic || sp[1]
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + pl.open.length)
    this.debug('setting tail', re, pl)
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = '\\'
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + '|'
    })

    this.debug('tail=%j\n   %s', tail, tail, pl, re)
    var t = pl.type === '*' ? star
      : pl.type === '?' ? qmark
      : '\\' + pl.type

    hasMagic = true
    re = re.slice(0, pl.reStart) + t + '\\(' + tail
  }

  // handle trailing things that only matter at the very end.
  clearStateChar()
  if (escaping) {
    // trailing \\
    re += '\\\\'
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false
  switch (re.charAt(0)) {
    case '.':
    case '[':
    case '(': addPatternStart = true
  }

  // Hack to work around lack of negative lookbehind in JS
  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
  // like 'a.xyz.yz' doesn't match.  So, the first negative
  // lookahead, has to look ALL the way ahead, to the end of
  // the pattern.
  for (var n = negativeLists.length - 1; n > -1; n--) {
    var nl = negativeLists[n]

    var nlBefore = re.slice(0, nl.reStart)
    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd)
    var nlAfter = re.slice(nl.reEnd)

    nlLast += nlAfter

    // Handle nested stuff like *(*.js|!(*.json)), where open parens
    // mean that we should *not* include the ) in the bit that is considered
    // "after" the negated section.
    var openParensBefore = nlBefore.split('(').length - 1
    var cleanAfter = nlAfter
    for (i = 0; i < openParensBefore; i++) {
      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
    }
    nlAfter = cleanAfter

    var dollar = ''
    if (nlAfter === '' && isSub !== SUBPARSE) {
      dollar = '$'
    }
    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast
    re = newRe
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== '' && hasMagic) {
    re = '(?=.)' + re
  }

  if (addPatternStart) {
    re = patternStart + re
  }

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [re, hasMagic]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? 'i' : ''
  try {
    var regExp = new RegExp('^' + re + '$', flags)
  } catch (er) {
    // If it was an invalid regular expression, then it can't match
    // anything.  This trick looks for a character after the end of
    // the string, which is of course impossible, except in multi-line
    // mode, but it's not a /m regex.
    return new RegExp('$.')
  }

  regExp._glob = pattern
  regExp._src = re

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
}

Minimatch.prototype.makeRe = makeRe
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set

  if (!set.length) {
    this.regexp = false
    return this.regexp
  }
  var options = this.options

  var twoStar = options.noglobstar ? star
    : options.dot ? twoStarDot
    : twoStarNoDot
  var flags = options.nocase ? 'i' : ''

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
      : (typeof p === 'string') ? regExpEscape(p)
      : p._src
    }).join('\\\/')
  }).join('|')

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = '^(?:' + re + ')$'

  // can match anything, as long as it's not this.
  if (this.negate) re = '^(?!' + re + ').*$'

  try {
    this.regexp = new RegExp(re, flags)
  } catch (ex) {
    this.regexp = false
  }
  return this.regexp
}

minimatch.match = function (list, pattern, options) {
  options = options || {}
  var mm = new Minimatch(pattern, options)
  list = list.filter(function (f) {
    return mm.match(f)
  })
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

Minimatch.prototype.match = match
function match (f, partial) {
  this.debug('match', f, this.pattern)
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ''

  if (f === '/' && partial) return true

  var options = this.options

  // windows: need to use /, not \
  if (path.sep !== '/') {
    f = f.split(path.sep).join('/')
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit)
  this.debug(this.pattern, 'split', f)

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set
  this.debug(this.pattern, 'set', set)

  // Find the basename of the path by looking for the last non-empty segment
  var filename
  var i
  for (i = f.length - 1; i >= 0; i--) {
    filename = f[i]
    if (filename) break
  }

  for (i = 0; i < set.length; i++) {
    var pattern = set[i]
    var file = f
    if (options.matchBase && pattern.length === 1) {
      file = [filename]
    }
    var hit = this.matchOne(file, pattern, partial)
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options

  this.debug('matchOne',
    { 'this': this, file: file, pattern: pattern })

  this.debug('matchOne', file.length, pattern.length)

  for (var fi = 0,
      pi = 0,
      fl = file.length,
      pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi++, pi++) {
    this.debug('matchOne loop')
    var p = pattern[pi]
    var f = file[fi]

    this.debug(pattern, p, f)

    // should be impossible.
    // some invalid regexp stuff in the set.
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f])

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi
      var pr = pi + 1
      if (pr === pl) {
        this.debug('** at the end')
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for (; fi < fl; fi++) {
          if (file[fi] === '.' || file[fi] === '..' ||
            (!options.dot && file[fi].charAt(0) === '.')) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      while (fr < fl) {
        var swallowee = file[fr]

        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee)
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === '.' || swallowee === '..' ||
            (!options.dot && swallowee.charAt(0) === '.')) {
            this.debug('dot detected!', file, fr, pattern, pr)
            break
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue')
          fr++
        }
      }

      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      if (partial) {
        // ran out of file
        this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit
    if (typeof p === 'string') {
      if (options.nocase) {
        hit = f.toLowerCase() === p.toLowerCase()
      } else {
        hit = f === p
      }
      this.debug('string match', p, f, hit)
    } else {
      hit = f.match(p)
      this.debug('pattern match', p, f, hit)
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    var emptyFileEnd = (fi === fl - 1) && (file[fi] === '')
    return emptyFileEnd
  }

  // should be unreachable.
  throw new Error('wtf?')
}

// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, '$1')
}

function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}


/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(636)))

/***/ }),

/***/ 636:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 65:
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
var StorageService = (function () {
    function StorageService() {
        this.memoryStore = {};
        this.useLocalStorage = false;
        this.useLocalStorage = this.storageAvailable('localStorage');
    }
    StorageService.prototype.getItem = function (key) {
        if (this.useLocalStorage) {
            return localStorage.getItem(key);
        }
        else {
            return this.memoryStore.hasOwnProperty(key) ? this.memoryStore[key] : null;
        }
    };
    StorageService.prototype.setItem = function (key, data) {
        if (this.useLocalStorage) {
            localStorage.setItem(key, data);
        }
        else {
            this.memoryStore[key] = data.toString();
        }
    };
    StorageService.prototype.clear = function () {
        if (this.useLocalStorage) {
            localStorage.clear();
        }
        else {
            this.memoryStore = {};
        }
    };
    StorageService.prototype.removeItem = function (key) {
        if (this.useLocalStorage) {
            localStorage.removeItem(key);
        }
        else {
            delete this.memoryStore[key];
        }
    };
    StorageService.prototype.hasItem = function (key) {
        if (this.useLocalStorage) {
            return localStorage.getItem(key) ? true : false;
        }
        else {
            return this.memoryStore.hasOwnProperty(key);
        }
    };
    StorageService.prototype.storageAvailable = function (type) {
        try {
            var storage = window[type];
            var key = '__storage_test__';
            storage.setItem(key, key);
            storage.removeItem(key, key);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    return StorageService;
}());
StorageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], StorageService);
exports.StorageService = StorageService;


/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ".adf-info-drawer {\n  display: block; }\n  .adf-info-drawer .adf-info-drawer-layout-content {\n    padding: 0; }\n    .adf-info-drawer .adf-info-drawer-layout-content > :not(.adf-info-drawer-tabs) {\n      padding: 10px; }\n      .adf-info-drawer .adf-info-drawer-layout-content > :not(.adf-info-drawer-tabs) > * {\n        margin-bottom: 20px;\n        display: block; }\n    .adf-info-drawer .adf-info-drawer-layout-content .adf-info-drawer-tabs .mat-tab-body-content > * {\n      margin-bottom: 20px;\n      display: block; }\n    .adf-info-drawer .adf-info-drawer-layout-content .adf-info-drawer-tabs .mat-tab-body-content > *:last-child {\n      margin-bottom: 0; }\n    .adf-info-drawer .adf-info-drawer-layout-content .adf-info-drawer-tabs .mat-tab-label {\n      flex-grow: 1; }\n    .adf-info-drawer .adf-info-drawer-layout-content .adf-info-drawer-tabs .mat-ink-bar {\n      height: 4px; }\n    .adf-info-drawer .adf-info-drawer-layout-content .adf-info-drawer-tabs .mat-tab-body {\n      padding: 10px; }\n    .adf-info-drawer .adf-info-drawer-layout-content .adf-info-drawer-tabs .mat-tab-body-content {\n      overflow: initial; }\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ".adf-mapitem-clickable-value {\n  cursor: pointer; }\n"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 73:
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
var alfresco_api_service_1 = __webpack_require__(12);
var authentication_service_1 = __webpack_require__(19);
var log_service_1 = __webpack_require__(22);
var AlfrescoContentService = (function () {
    function AlfrescoContentService(authService, apiService, logService) {
        this.authService = authService;
        this.apiService = apiService;
        this.logService = logService;
        this.folderCreated = new Rx_1.Subject();
    }
    Object.defineProperty(AlfrescoContentService.prototype, "contentApi", {
        get: function () {
            return this.apiService.getInstance().content;
        },
        enumerable: true,
        configurable: true
    });
    AlfrescoContentService.prototype.getDocumentThumbnailUrl = function (nodeId, attachment, ticket) {
        if (nodeId && nodeId.entry) {
            nodeId = nodeId.entry.id;
        }
        return this.contentApi.getDocumentThumbnailUrl(nodeId, attachment, ticket);
    };
    AlfrescoContentService.prototype.getContentUrl = function (nodeId, attachment, ticket) {
        if (nodeId && nodeId.entry) {
            nodeId = nodeId.entry.id;
        }
        return this.contentApi.getContentUrl(nodeId, attachment, ticket);
    };
    AlfrescoContentService.prototype.getNodeContent = function (nodeId) {
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().core.nodesApi.getFileContent(nodeId).then(function (dataContent) {
            return dataContent;
        })).catch(this.handleError);
    };
    AlfrescoContentService.prototype.createFolder = function (relativePath, name, parentId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().nodes.createFolder(name, relativePath, parentId))
            .do(function (data) {
            _this.folderCreated.next({
                relativePath: relativePath,
                name: name,
                parentId: parentId,
                node: data
            });
        })
            .catch(function (err) { return _this.handleError(err); });
    };
    AlfrescoContentService.prototype.hasPermission = function (node, permission) {
        var hasPermission = false;
        if (this.hasAllowableOperations(node)) {
            if (permission && permission.startsWith('!')) {
                hasPermission = node.allowableOperations.find(function (currentPermission) { return currentPermission === permission.replace('!', ''); }) ? false : true;
            }
            else {
                hasPermission = node.allowableOperations.find(function (currentPermission) { return currentPermission === permission; }) ? true : false;
            }
        }
        else {
            if (permission && permission.startsWith('!')) {
                hasPermission = true;
            }
        }
        return hasPermission;
    };
    AlfrescoContentService.prototype.hasAllowableOperations = function (node) {
        return node && node.allowableOperations ? true : false;
    };
    AlfrescoContentService.prototype.handleError = function (error) {
        this.logService.error(error);
        return Rx_1.Observable.throw(error || 'Server error');
    };
    return AlfrescoContentService;
}());
AlfrescoContentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" && _a || Object, typeof (_b = typeof alfresco_api_service_1.AlfrescoApiService !== "undefined" && alfresco_api_service_1.AlfrescoApiService) === "function" && _b || Object, typeof (_c = typeof log_service_1.LogService !== "undefined" && log_service_1.LogService) === "function" && _c || Object])
], AlfrescoContentService);
exports.AlfrescoContentService = AlfrescoContentService;
var _a, _b, _c;


/***/ }),

/***/ 74:
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
var HighlightTransformService = (function () {
    function HighlightTransformService() {
    }
    HighlightTransformService.prototype.highlight = function (text, search, wrapperClass) {
        if (wrapperClass === void 0) { wrapperClass = 'highlight'; }
        var isMatching = false, result = text;
        if (search && text) {
            var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            pattern = pattern.split(' ').filter(function (t) {
                return t.length > 0;
            }).join('|');
            var regex = new RegExp(pattern, 'gi');
            result = text.replace(regex, function (match) {
                isMatching = true;
                return "<span class=\"" + wrapperClass + "\">" + match + "</span>";
            });
            return { text: result, changed: isMatching };
        }
        else {
            return { text: result, changed: isMatching };
        }
    };
    return HighlightTransformService;
}());
exports.HighlightTransformService = HighlightTransformService;


/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(683);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(684);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(685);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(686);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(687);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(688);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(689);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(690);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(691);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 805:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_805__;

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_806__;

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_807__;

/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_808__;

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_809__;

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concat__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_merge__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toArray__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__translate_store__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__translate_loader__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__missing_translation_handler__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__translate_parser__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__util__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USE_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslateService; });















var USE_STORE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('USE_STORE');
var TranslateService = (function () {
    /**
     *
     * @param store an instance of the store (that is supposed to be unique)
     * @param currentLoader An instance of the loader currently used
     * @param parser An instance of the parser currently used
     * @param missingTranslationHandler A handler for missing translations.
     * @param isolate whether this service should use the store or not
     */
    function TranslateService(store, currentLoader, parser, missingTranslationHandler, isolate) {
        if (isolate === void 0) { isolate = false; }
        this.store = store;
        this.currentLoader = currentLoader;
        this.parser = parser;
        this.missingTranslationHandler = missingTranslationHandler;
        this.isolate = isolate;
        this.pending = false;
        this._onTranslationChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._onLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._onDefaultLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._langs = [];
        this._translations = {};
        this._translationRequests = {};
    }
    Object.defineProperty(TranslateService.prototype, "onTranslationChange", {
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<TranslationChangeEvent>}
         */
        get: function () {
            return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "onLangChange", {
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<LangChangeEvent>}
         */
        get: function () {
            return this.isolate ? this._onLangChange : this.store.onLangChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "onDefaultLangChange", {
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<DefaultLangChangeEvent>}
         */
        get: function () {
            return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "defaultLang", {
        /**
         * The default lang to fallback when translations are missing on the current lang
         */
        get: function () {
            return this.isolate ? this._defaultLang : this.store.defaultLang;
        },
        set: function (defaultLang) {
            if (this.isolate) {
                this._defaultLang = defaultLang;
            }
            else {
                this.store.defaultLang = defaultLang;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        /**
         * The lang currently used
         * @type {string}
         */
        get: function () {
            return this.isolate ? this._currentLang : this.store.currentLang;
        },
        set: function (currentLang) {
            if (this.isolate) {
                this._currentLang = currentLang;
            }
            else {
                this.store.currentLang = currentLang;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "langs", {
        /**
         * an array of langs
         * @type {Array}
         */
        get: function () {
            return this.isolate ? this._langs : this.store.langs;
        },
        set: function (langs) {
            if (this.isolate) {
                this._langs = langs;
            }
            else {
                this.store.langs = langs;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "translations", {
        /**
         * a list of translations per lang
         * @type {{}}
         */
        get: function () {
            return this.isolate ? this._translations : this.store.translations;
        },
        set: function (translations) {
            if (this.isolate) {
                this._currentLang = translations;
            }
            else {
                this.store.translations = translations;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the default language to use as a fallback
     * @param lang
     */
    TranslateService.prototype.setDefaultLang = function (lang) {
        var _this = this;
        if (lang === this.defaultLang) {
            return;
        }
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the defaultLang immediately
            if (!this.defaultLang) {
                this.defaultLang = lang;
            }
            pending.take(1)
                .subscribe(function (res) {
                _this.changeDefaultLang(lang);
            });
        }
        else {
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Gets the default language used
     * @returns string
     */
    TranslateService.prototype.getDefaultLang = function () {
        return this.defaultLang;
    };
    /**
     * Changes the lang currently used
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.use = function (lang) {
        var _this = this;
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the currentLang immediately
            if (!this.currentLang) {
                this.currentLang = lang;
            }
            pending.take(1)
                .subscribe(function (res) {
                _this.changeLang(lang);
            });
            return pending;
        }
        else {
            this.changeLang(lang);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.translations[lang]);
        }
    };
    /**
     * Retrieves the given translations
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.retrieveTranslations = function (lang) {
        var pending;
        // if this language is unavailable, ask for it
        if (typeof this.translations[lang] === "undefined") {
            this._translationRequests[lang] = this._translationRequests[lang] || this.getTranslation(lang);
            pending = this._translationRequests[lang];
        }
        return pending;
    };
    /**
     * Gets an object of translations for a given language with the current loader
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.getTranslation = function (lang) {
        var _this = this;
        this.pending = true;
        this.loadingTranslations = this.currentLoader.getTranslation(lang).share();
        this.loadingTranslations.take(1)
            .subscribe(function (res) {
            _this.translations[lang] = res;
            _this.updateLangs();
            _this.pending = false;
        }, function (err) {
            _this.pending = false;
        });
        return this.loadingTranslations;
    };
    /**
     * Manually sets an object of translations for a given language
     * @param lang
     * @param translations
     * @param shouldMerge
     */
    TranslateService.prototype.setTranslation = function (lang, translations, shouldMerge) {
        if (shouldMerge === void 0) { shouldMerge = false; }
        if (shouldMerge && this.translations[lang]) {
            this.translations[lang] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__util__["c" /* mergeDeep */])(this.translations[lang], translations);
        }
        else {
            this.translations[lang] = translations;
        }
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Returns an array of currently available langs
     * @returns {any}
     */
    TranslateService.prototype.getLangs = function () {
        return this.langs;
    };
    /**
     * @param langs
     * Add available langs
     */
    TranslateService.prototype.addLangs = function (langs) {
        var _this = this;
        langs.forEach(function (lang) {
            if (_this.langs.indexOf(lang) === -1) {
                _this.langs.push(lang);
            }
        });
    };
    /**
     * Update the list of available langs
     */
    TranslateService.prototype.updateLangs = function () {
        this.addLangs(Object.keys(this.translations));
    };
    /**
     * Returns the parsed result of the translations
     * @param translations
     * @param key
     * @param interpolateParams
     * @returns {any}
     */
    TranslateService.prototype.getParsedResult = function (translations, key, interpolateParams) {
        var res;
        if (key instanceof Array) {
            var result = {}, observables = false;
            for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
                var k = key_1[_i];
                result[k] = this.getParsedResult(translations, k, interpolateParams);
                if (typeof result[k].subscribe === "function") {
                    observables = true;
                }
            }
            if (observables) {
                var mergedObs = void 0;
                for (var _a = 0, key_2 = key; _a < key_2.length; _a++) {
                    var k = key_2[_a];
                    var obs = typeof result[k].subscribe === "function" ? result[k] : __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(result[k]);
                    if (typeof mergedObs === "undefined") {
                        mergedObs = obs;
                    }
                    else {
                        mergedObs = mergedObs.merge(obs);
                    }
                }
                return mergedObs.toArray().map(function (arr) {
                    var obj = {};
                    arr.forEach(function (value, index) {
                        obj[key[index]] = value;
                    });
                    return obj;
                });
            }
            return result;
        }
        if (translations) {
            res = this.parser.interpolate(this.parser.getValue(translations, key), interpolateParams);
        }
        if (typeof res === "undefined" && this.defaultLang && this.defaultLang !== this.currentLang) {
            res = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], key), interpolateParams);
        }
        if (typeof res === "undefined") {
            var params = { key: key, translateService: this };
            if (typeof interpolateParams !== 'undefined') {
                params.interpolateParams = interpolateParams;
            }
            res = this.missingTranslationHandler.handle(params);
        }
        return typeof res !== "undefined" ? res : key;
    };
    /**
     * Gets the translated value of a key (or an array of keys)
     * @param key
     * @param interpolateParams
     * @returns {any} the translated key, or an object of translated keys
     */
    TranslateService.prototype.get = function (key, interpolateParams) {
        var _this = this;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__util__["b" /* isDefined */])(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        // check if we are loading a new translation to use
        if (this.pending) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                var onComplete = function (res) {
                    observer.next(res);
                    observer.complete();
                };
                var onError = function (err) {
                    observer.error(err);
                };
                _this.loadingTranslations.subscribe(function (res) {
                    res = _this.getParsedResult(res, key, interpolateParams);
                    if (typeof res.subscribe === "function") {
                        res.subscribe(onComplete, onError);
                    }
                    else {
                        onComplete(res);
                    }
                }, onError);
            });
        }
        else {
            var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
            if (typeof res.subscribe === "function") {
                return res;
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(res);
            }
        }
    };
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @param key
     * @param interpolateParams
     * @returns {any} A stream of the translated key, or an object of translated keys
     */
    TranslateService.prototype.stream = function (key, interpolateParams) {
        var _this = this;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__util__["b" /* isDefined */])(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        return this
            .get(key, interpolateParams)
            .concat(this.onLangChange.switchMap(function (event) {
            var res = _this.getParsedResult(event.translations, key, interpolateParams);
            if (typeof res.subscribe === "function") {
                return res;
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(res);
            }
        }));
    };
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     * @param key
     * @param interpolateParams
     * @returns {string}
     */
    TranslateService.prototype.instant = function (key, interpolateParams) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__util__["b" /* isDefined */])(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
        if (typeof res.subscribe !== "undefined") {
            if (key instanceof Array) {
                var obj_1 = {};
                key.forEach(function (value, index) {
                    obj_1[key[index]] = key[index];
                });
                return obj_1;
            }
            return key;
        }
        else {
            return res;
        }
    };
    /**
     * Sets the translated value of a key
     * @param key
     * @param value
     * @param lang
     */
    TranslateService.prototype.set = function (key, value, lang) {
        if (lang === void 0) { lang = this.currentLang; }
        this.translations[lang][key] = value;
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Changes the current lang
     * @param lang
     */
    TranslateService.prototype.changeLang = function (lang) {
        this.currentLang = lang;
        this.onLangChange.emit({ lang: lang, translations: this.translations[lang] });
        // if there is no default lang, use the one that we just set
        if (!this.defaultLang) {
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Changes the default lang
     * @param lang
     */
    TranslateService.prototype.changeDefaultLang = function (lang) {
        this.defaultLang = lang;
        this.onDefaultLangChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Allows to reload the lang file from the file
     * @param lang
     * @returns {Observable<any>}
     */
    TranslateService.prototype.reloadLang = function (lang) {
        this.resetLang(lang);
        return this.getTranslation(lang);
    };
    /**
     * Deletes inner translation
     * @param lang
     */
    TranslateService.prototype.resetLang = function (lang) {
        this._translationRequests[lang] = undefined;
        this.translations[lang] = undefined;
    };
    /**
     * Returns the language code name from the browser, e.g. "de"
     *
     * @returns string
     */
    TranslateService.prototype.getBrowserLang = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        var browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        if (browserLang.indexOf('-') !== -1) {
            browserLang = browserLang.split('-')[0];
        }
        if (browserLang.indexOf('_') !== -1) {
            browserLang = browserLang.split('_')[0];
        }
        return browserLang;
    };
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     *
     * @returns string
     */
    TranslateService.prototype.getBrowserCultureLang = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        var browserCultureLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        return browserCultureLang;
    };
    return TranslateService;
}());

TranslateService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
TranslateService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_10__translate_store__["a" /* TranslateStore */], },
    { type: __WEBPACK_IMPORTED_MODULE_11__translate_loader__["a" /* TranslateLoader */], },
    { type: __WEBPACK_IMPORTED_MODULE_13__translate_parser__["a" /* TranslateParser */], },
    { type: __WEBPACK_IMPORTED_MODULE_12__missing_translation_handler__["a" /* MissingTranslationHandler */], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [USE_STORE,] },] },
]; };


/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_810__;

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_811__;

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_812__;

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_813__;

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_814__;

/***/ }),

/***/ 821:
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
var common_1 = __webpack_require__(13);
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(9);
var http_1 = __webpack_require__(20);
var animations_1 = __webpack_require__(387);
var core_2 = __webpack_require__(110);
var collapsable_module_1 = __webpack_require__(132);
var context_menu_module_1 = __webpack_require__(133);
var pagination_module_1 = __webpack_require__(358);
var toolbar_module_1 = __webpack_require__(359);
var card_view_module_1 = __webpack_require__(136);
var material_module_1 = __webpack_require__(362);
var app_config_service_1 = __webpack_require__(17);
var create_folder_dialog_1 = __webpack_require__(137);
var download_zip_dialog_1 = __webpack_require__(138);
var alfresco_api_service_1 = __webpack_require__(12);
var alfresco_content_service_1 = __webpack_require__(73);
var alfresco_settings_service_1 = __webpack_require__(143);
var app_config_service_2 = __webpack_require__(17);
var app_config_service_3 = __webpack_require__(17);
var auth_guard_bpm_service_1 = __webpack_require__(144);
var auth_guard_ecm_service_1 = __webpack_require__(145);
var auth_guard_service_1 = __webpack_require__(146);
var authentication_service_1 = __webpack_require__(19);
var content_service_1 = __webpack_require__(147);
var cookie_service_1 = __webpack_require__(92);
var log_service_1 = __webpack_require__(22);
var log_service_2 = __webpack_require__(22);
var notification_service_1 = __webpack_require__(152);
var renditions_service_1 = __webpack_require__(154);
var storage_service_1 = __webpack_require__(65);
var thumbnail_service_1 = __webpack_require__(159);
var translate_loader_service_1 = __webpack_require__(160);
var translation_service_1 = __webpack_require__(35);
var upload_service_1 = __webpack_require__(161);
var user_preferences_service_1 = __webpack_require__(24);
var highlight_directive_1 = __webpack_require__(139);
var deleted_nodes_api_service_1 = __webpack_require__(148);
var discovery_api_service_1 = __webpack_require__(149);
var favorites_api_service_1 = __webpack_require__(150);
var highlight_transform_service_1 = __webpack_require__(74);
var nodes_api_service_1 = __webpack_require__(151);
var people_api_service_1 = __webpack_require__(153);
var search_api_service_1 = __webpack_require__(155);
var search_service_1 = __webpack_require__(156);
var shared_links_api_service_1 = __webpack_require__(157);
var sites_api_service_1 = __webpack_require__(158);
var momentDateAdapter_1 = __webpack_require__(93);
exports.MomentDateAdapter = momentDateAdapter_1.MomentDateAdapter;
exports.MOMENT_DATE_FORMATS = momentDateAdapter_1.MOMENT_DATE_FORMATS;
var momentDateAdapter_2 = __webpack_require__(93);
var create_folder_dialog_2 = __webpack_require__(137);
exports.CreateFolderDialogComponent = create_folder_dialog_2.CreateFolderDialogComponent;
var download_zip_dialog_2 = __webpack_require__(138);
exports.DownloadZipDialogComponent = download_zip_dialog_2.DownloadZipDialogComponent;
var content_service_2 = __webpack_require__(147);
exports.ContentService = content_service_2.ContentService;
var storage_service_2 = __webpack_require__(65);
exports.StorageService = storage_service_2.StorageService;
var cookie_service_2 = __webpack_require__(92);
exports.CookieService = cookie_service_2.CookieService;
var alfresco_api_service_2 = __webpack_require__(12);
exports.AlfrescoApiService = alfresco_api_service_2.AlfrescoApiService;
var alfresco_settings_service_2 = __webpack_require__(143);
exports.AlfrescoSettingsService = alfresco_settings_service_2.AlfrescoSettingsService;
var alfresco_content_service_2 = __webpack_require__(73);
exports.AlfrescoContentService = alfresco_content_service_2.AlfrescoContentService;
var renditions_service_2 = __webpack_require__(154);
exports.RenditionsService = renditions_service_2.RenditionsService;
var auth_guard_service_2 = __webpack_require__(146);
exports.AuthGuard = auth_guard_service_2.AuthGuard;
var auth_guard_ecm_service_2 = __webpack_require__(145);
exports.AuthGuardEcm = auth_guard_ecm_service_2.AuthGuardEcm;
var auth_guard_bpm_service_2 = __webpack_require__(144);
exports.AuthGuardBpm = auth_guard_bpm_service_2.AuthGuardBpm;
var notification_service_2 = __webpack_require__(152);
exports.NotificationService = notification_service_2.NotificationService;
var log_service_3 = __webpack_require__(22);
exports.LogService = log_service_3.LogService;
var log_service_4 = __webpack_require__(22);
exports.LogServiceMock = log_service_4.LogServiceMock;
var authentication_service_2 = __webpack_require__(19);
exports.AuthenticationService = authentication_service_2.AuthenticationService;
var translation_service_2 = __webpack_require__(35);
exports.TranslationService = translation_service_2.TranslationService;
exports.TRANSLATION_PROVIDER = translation_service_2.TRANSLATION_PROVIDER;
exports.TranslationProvider = translation_service_2.TranslationProvider;
var translate_loader_service_2 = __webpack_require__(160);
exports.AlfrescoTranslateLoader = translate_loader_service_2.AlfrescoTranslateLoader;
var app_config_service_4 = __webpack_require__(17);
exports.AppConfigService = app_config_service_4.AppConfigService;
var app_config_service_5 = __webpack_require__(17);
exports.InitAppConfigServiceProvider = app_config_service_5.InitAppConfigServiceProvider;
var thumbnail_service_2 = __webpack_require__(159);
exports.ThumbnailService = thumbnail_service_2.ThumbnailService;
var upload_service_2 = __webpack_require__(161);
exports.UploadService = upload_service_2.UploadService;
var card_view_update_service_1 = __webpack_require__(29);
exports.CardViewUpdateService = card_view_update_service_1.CardViewUpdateService;
var card_view_update_service_2 = __webpack_require__(29);
exports.UpdateNotification = card_view_update_service_2.UpdateNotification;
var card_view_update_service_3 = __webpack_require__(29);
exports.ClickNotification = card_view_update_service_3.ClickNotification;
var app_config_service_6 = __webpack_require__(17);
exports.AppConfigModule = app_config_service_6.AppConfigModule;
var user_preferences_service_2 = __webpack_require__(24);
exports.UserPreferencesService = user_preferences_service_2.UserPreferencesService;
var highlight_transform_service_2 = __webpack_require__(74);
exports.HighlightTransformService = highlight_transform_service_2.HighlightTransformService;
exports.HightlightTransformResult = highlight_transform_service_2.HightlightTransformResult;
var deleted_nodes_api_service_2 = __webpack_require__(148);
exports.DeletedNodesApiService = deleted_nodes_api_service_2.DeletedNodesApiService;
var favorites_api_service_2 = __webpack_require__(150);
exports.FavoritesApiService = favorites_api_service_2.FavoritesApiService;
var nodes_api_service_2 = __webpack_require__(151);
exports.NodesApiService = nodes_api_service_2.NodesApiService;
var people_api_service_2 = __webpack_require__(153);
exports.PeopleApiService = people_api_service_2.PeopleApiService;
var search_api_service_2 = __webpack_require__(155);
exports.SearchApiService = search_api_service_2.SearchApiService;
var shared_links_api_service_2 = __webpack_require__(157);
exports.SharedLinksApiService = shared_links_api_service_2.SharedLinksApiService;
var sites_api_service_2 = __webpack_require__(158);
exports.SitesApiService = sites_api_service_2.SitesApiService;
var discovery_api_service_2 = __webpack_require__(149);
exports.DiscoveryApiService = discovery_api_service_2.DiscoveryApiService;
var data_column_list_component_1 = __webpack_require__(134);
var data_column_component_1 = __webpack_require__(91);
var info_drawer_layout_component_1 = __webpack_require__(354);
var info_drawer_component_1 = __webpack_require__(135);
var node_permission_directive_1 = __webpack_require__(140);
var upload_directive_1 = __webpack_require__(141);
var file_size_pipe_1 = __webpack_require__(364);
var text_highlight_pipe_1 = __webpack_require__(365);
var time_ago_pipe_1 = __webpack_require__(142);
var mdl_menu_directive_1 = __webpack_require__(355);
var mdl_textfield_directive_1 = __webpack_require__(356);
var mdl_upgrade_element_directive_1 = __webpack_require__(357);
var context_menu_module_2 = __webpack_require__(133);
exports.ContextMenuModule = context_menu_module_2.ContextMenuModule;
var card_view_module_2 = __webpack_require__(136);
exports.CardViewModule = card_view_module_2.CardViewModule;
var collapsable_module_2 = __webpack_require__(132);
exports.CollapsableModule = collapsable_module_2.CollapsableModule;
var card_view_item_interface_1 = __webpack_require__(201);
exports.CardViewItem = card_view_item_interface_1.CardViewItem;
var time_ago_pipe_2 = __webpack_require__(142);
exports.TimeAgoPipe = time_ago_pipe_2.TimeAgoPipe;
var injection_tokens_1 = __webpack_require__(202);
exports.EXTENDIBLE_COMPONENT = injection_tokens_1.EXTENDIBLE_COMPONENT;
__export(__webpack_require__(91));
__export(__webpack_require__(134));
__export(__webpack_require__(135));
__export(__webpack_require__(141));
__export(__webpack_require__(139));
__export(__webpack_require__(140));
__export(__webpack_require__(366));
__export(__webpack_require__(199));
__export(__webpack_require__(360));
__export(__webpack_require__(361));
__export(__webpack_require__(200));
__export(__webpack_require__(205));
__export(__webpack_require__(204));
__export(__webpack_require__(203));
__export(__webpack_require__(115));
__export(__webpack_require__(363));
__export(__webpack_require__(207));
__export(__webpack_require__(206));
var authentication_service_3 = __webpack_require__(19);
var translation_service_3 = __webpack_require__(35);
var authentication_service_4 = __webpack_require__(19);
exports.AlfrescoAuthenticationService = authentication_service_4.AuthenticationService;
var translation_service_4 = __webpack_require__(35);
exports.AlfrescoTranslationService = translation_service_4.TranslationService;
__export(__webpack_require__(156));
function providers() {
    return [
        user_preferences_service_1.UserPreferencesService,
        notification_service_1.NotificationService,
        log_service_1.LogService,
        log_service_2.LogServiceMock,
        authentication_service_1.AuthenticationService,
        alfresco_content_service_1.AlfrescoContentService,
        alfresco_settings_service_1.AlfrescoSettingsService,
        storage_service_1.StorageService,
        cookie_service_1.CookieService,
        alfresco_api_service_1.AlfrescoApiService,
        translate_loader_service_1.AlfrescoTranslateLoader,
        translation_service_1.TranslationService,
        renditions_service_1.RenditionsService,
        content_service_1.ContentService,
        auth_guard_service_1.AuthGuard,
        auth_guard_ecm_service_1.AuthGuardEcm,
        auth_guard_bpm_service_1.AuthGuardBpm,
        thumbnail_service_1.ThumbnailService,
        upload_service_1.UploadService,
        search_service_1.SearchService,
        deleted_nodes_api_service_1.DeletedNodesApiService,
        favorites_api_service_1.FavoritesApiService,
        nodes_api_service_1.NodesApiService,
        people_api_service_1.PeopleApiService,
        search_api_service_1.SearchApiService,
        shared_links_api_service_1.SharedLinksApiService,
        sites_api_service_1.SitesApiService,
        discovery_api_service_1.DiscoveryApiService,
        highlight_transform_service_1.HighlightTransformService
    ];
}
exports.providers = providers;
function deprecatedProviders() {
    return [
        translation_service_3.TranslationService,
        authentication_service_3.AuthenticationService
    ];
}
exports.deprecatedProviders = deprecatedProviders;
function obsoleteMdlDirectives() {
    return [
        mdl_upgrade_element_directive_1.MDLDirective,
        mdl_menu_directive_1.AlfrescoMdlMenuDirective,
        mdl_textfield_directive_1.AlfrescoMdlTextFieldDirective
    ];
}
exports.obsoleteMdlDirectives = obsoleteMdlDirectives;
function createTranslateLoader(http, logService) {
    return new translate_loader_service_1.AlfrescoTranslateLoader(http, logService);
}
exports.createTranslateLoader = createTranslateLoader;
var CoreModule = CoreModule_1 = (function () {
    function CoreModule() {
    }
    CoreModule.forRoot = function (opts) {
        if (opts === void 0) { opts = {}; }
        var appConfigFile = opts.appConfigFile || 'app.config.json';
        return {
            ngModule: CoreModule_1,
            providers: providers().concat([
                app_config_service_2.AppConfigService,
                app_config_service_3.InitAppConfigServiceProvider(appConfigFile)
            ])
        };
    };
    return CoreModule;
}());
CoreModule = CoreModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            animations_1.BrowserAnimationsModule,
            core_2.TranslateModule.forRoot({
                loader: {
                    provide: core_2.TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [http_1.Http, log_service_1.LogService]
                }
            }),
            material_module_1.MaterialModule,
            app_config_service_1.AppConfigModule,
            pagination_module_1.PaginationModule,
            toolbar_module_1.ToolbarModule,
            context_menu_module_1.ContextMenuModule,
            card_view_module_1.CardViewModule,
            collapsable_module_1.CollapsableModule
        ],
        declarations: obsoleteMdlDirectives().concat([
            upload_directive_1.UploadDirective,
            node_permission_directive_1.NodePermissionDirective,
            highlight_directive_1.HighlightDirective,
            data_column_component_1.DataColumnComponent,
            data_column_list_component_1.DataColumnListComponent,
            info_drawer_component_1.InfoDrawerComponent,
            info_drawer_component_1.InfoDrawerTabComponent,
            info_drawer_layout_component_1.InfoDrawerLayoutComponent,
            info_drawer_layout_component_1.InfoDrawerTitleDirective,
            info_drawer_layout_component_1.InfoDrawerButtonsDirective,
            info_drawer_layout_component_1.InfoDrawerContentDirective,
            file_size_pipe_1.FileSizePipe,
            text_highlight_pipe_1.HighlightPipe,
            time_ago_pipe_1.TimeAgoPipe,
            create_folder_dialog_1.CreateFolderDialogComponent,
            download_zip_dialog_1.DownloadZipDialogComponent
        ]),
        providers: providers().concat(deprecatedProviders(), [
            momentDateAdapter_2.MomentDateAdapter,
            {
                provide: translation_service_1.TRANSLATION_PROVIDER,
                multi: true,
                useValue: {
                    name: 'ng2-alfresco-core',
                    source: 'assets/ng2-alfresco-core'
                }
            }
        ]),
        exports: [
            animations_1.BrowserAnimationsModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            core_2.TranslateModule,
            material_module_1.MaterialModule,
            context_menu_module_1.ContextMenuModule,
            card_view_module_1.CardViewModule,
            collapsable_module_1.CollapsableModule,
            pagination_module_1.PaginationModule,
            toolbar_module_1.ToolbarModule
        ].concat(obsoleteMdlDirectives(), [
            upload_directive_1.UploadDirective,
            node_permission_directive_1.NodePermissionDirective,
            highlight_directive_1.HighlightDirective,
            data_column_component_1.DataColumnComponent,
            data_column_list_component_1.DataColumnListComponent,
            file_size_pipe_1.FileSizePipe,
            text_highlight_pipe_1.HighlightPipe,
            time_ago_pipe_1.TimeAgoPipe,
            create_folder_dialog_1.CreateFolderDialogComponent,
            download_zip_dialog_1.DownloadZipDialogComponent,
            info_drawer_component_1.InfoDrawerComponent,
            info_drawer_component_1.InfoDrawerTabComponent,
            info_drawer_layout_component_1.InfoDrawerLayoutComponent,
            info_drawer_layout_component_1.InfoDrawerTitleDirective,
            info_drawer_layout_component_1.InfoDrawerButtonsDirective,
            info_drawer_layout_component_1.InfoDrawerContentDirective
        ]),
        entryComponents: [
            create_folder_dialog_1.CreateFolderDialogComponent,
            download_zip_dialog_1.DownloadZipDialogComponent
        ]
    })
], CoreModule);
exports.CoreModule = CoreModule;
var CoreModule_1;


/***/ }),

/***/ 83:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_83__;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),

/***/ 91:
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
var DataColumnComponent = (function () {
    function DataColumnComponent() {
        this.type = 'text';
        this.sortable = true;
        this.title = '';
    }
    DataColumnComponent.prototype.ngOnInit = function () {
        if (!this.srTitle && this.key === '$thumbnail') {
            this.srTitle = 'Thumbnail';
        }
    };
    return DataColumnComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataColumnComponent.prototype, "key", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataColumnComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataColumnComponent.prototype, "format", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataColumnComponent.prototype, "sortable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataColumnComponent.prototype, "title", void 0);
__decorate([
    core_1.ContentChild(core_1.TemplateRef),
    __metadata("design:type", Object)
], DataColumnComponent.prototype, "template", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataColumnComponent.prototype, "formatTooltip", void 0);
__decorate([
    core_1.Input('sr-title'),
    __metadata("design:type", String)
], DataColumnComponent.prototype, "srTitle", void 0);
__decorate([
    core_1.Input('class'),
    __metadata("design:type", String)
], DataColumnComponent.prototype, "cssClass", void 0);
DataColumnComponent = __decorate([
    core_1.Component({
        selector: 'data-column',
        template: ''
    })
], DataColumnComponent);
exports.DataColumnComponent = DataColumnComponent;


/***/ }),

/***/ 92:
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
var CookieService = (function () {
    function CookieService() {
    }
    CookieService.prototype.getItem = function (key) {
        var regexp = new RegExp('(?:' + key + '|;\s*' + key + ')=(.*?)(?:;|$)', 'g');
        var result = regexp.exec(document.cookie);
        return (result === null) ? null : result[1];
    };
    CookieService.prototype.setItem = function (key, data, expiration, path) {
        document.cookie = key + "=" + data +
            (expiration ? ';expires=' + expiration.toUTCString() : '') +
            (path ? ";path=" + path : ';path=/');
    };
    return CookieService;
}());
CookieService = __decorate([
    core_1.Injectable()
], CookieService);
exports.CookieService = CookieService;


/***/ }),

/***/ 93:
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
var material_1 = __webpack_require__(3);
var moment_1 = __webpack_require__(14);
var moment = __webpack_require__(14);
exports.MOMENT_DATE_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY'
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMMM Y',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM Y'
    }
};
var dateNames = [];
for (var date = 1; date <= 31; date++) {
    dateNames.push(String(date));
}
var MomentDateAdapter = (function (_super) {
    __extends(MomentDateAdapter, _super);
    function MomentDateAdapter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.localeData = moment.localeData();
        return _this;
    }
    MomentDateAdapter.prototype.getYear = function (date) {
        return date.year();
    };
    MomentDateAdapter.prototype.getMonth = function (date) {
        return date.month();
    };
    MomentDateAdapter.prototype.getDate = function (date) {
        return date.date();
    };
    MomentDateAdapter.prototype.getDayOfWeek = function (date) {
        return date.day();
    };
    MomentDateAdapter.prototype.getMonthNames = function (style) {
        switch (style) {
            case 'long':
                return this.localeData.months();
            case 'short':
                return this.localeData.monthsShort();
            case 'narrow':
                return this.localeData.monthsShort().map(function (month) { return month[0]; });
            default:
                return;
        }
    };
    MomentDateAdapter.prototype.getDateNames = function () {
        return dateNames;
    };
    MomentDateAdapter.prototype.getDayOfWeekNames = function (style) {
        switch (style) {
            case 'long':
                return this.localeData.weekdays();
            case 'short':
                return this.localeData.weekdaysShort();
            case 'narrow':
                return this.localeData.weekdaysShort();
            default:
                return;
        }
    };
    MomentDateAdapter.prototype.getYearName = function (date) {
        return String(date.year());
    };
    MomentDateAdapter.prototype.getFirstDayOfWeek = function () {
        return this.localeData.firstDayOfWeek();
    };
    MomentDateAdapter.prototype.getNumDaysInMonth = function (date) {
        return date.daysInMonth();
    };
    MomentDateAdapter.prototype.clone = function (date) {
        return date.clone();
    };
    MomentDateAdapter.prototype.createDate = function (year, month, date) {
        return moment([year, month, date]);
    };
    MomentDateAdapter.prototype.today = function () {
        return moment();
    };
    MomentDateAdapter.prototype.parse = function (value, parseFormat) {
        var m = moment(value, parseFormat, true);
        if (!m.isValid()) {
            m = moment(value);
        }
        if (m.isValid()) {
            if (m.year() === 2001 && value.indexOf('2001') === -1) {
                var currentYear = new Date().getFullYear();
                m.set('year', currentYear);
                if (m.isAfter(moment())) {
                    m.set('year', currentYear - 1);
                }
            }
            return m;
        }
        else {
            return null;
        }
    };
    MomentDateAdapter.prototype.format = function (date, displayFormat) {
        displayFormat = this.overrideDisplyaFormat ? this.overrideDisplyaFormat : displayFormat;
        if (date && date.format) {
            return date.format(displayFormat);
        }
        else {
            return '';
        }
    };
    MomentDateAdapter.prototype.addCalendarYears = function (date, years) {
        return date.clone().add(years, 'y');
    };
    MomentDateAdapter.prototype.addCalendarMonths = function (date, months) {
        return date.clone().add(months, 'M');
    };
    MomentDateAdapter.prototype.addCalendarDays = function (date, days) {
        return date.clone().add(days, 'd');
    };
    MomentDateAdapter.prototype.getISODateString = function (date) {
        return date.toISOString();
    };
    MomentDateAdapter.prototype.setLocale = function (locale) {
        this.localeData = moment.localeData(locale);
    };
    MomentDateAdapter.prototype.compareDate = function (first, second) {
        return first.diff(second, 'seconds', true);
    };
    MomentDateAdapter.prototype.sameDate = function (first, second) {
        if (first == null) {
            return second == null;
        }
        else if (moment_1.isMoment(first)) {
            return first.isSame(second);
        }
        else {
            var isSame = _super.prototype.sameDate.call(this, first, second);
            return isSame;
        }
    };
    MomentDateAdapter.prototype.clampDate = function (date, min, max) {
        if (min && date.isBefore(min)) {
            return min;
        }
        else if (max && date.isAfter(max)) {
            return max;
        }
        else {
            return date;
        }
    };
    return MomentDateAdapter;
}(material_1.DateAdapter));
exports.MomentDateAdapter = MomentDateAdapter;


/***/ })

/******/ });
});
//# sourceMappingURL=ng2-alfresco-core.js.map