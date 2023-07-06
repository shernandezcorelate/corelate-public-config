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
		module.exports = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("@angular/material"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "ng2-alfresco-core", "rxjs/Rx", "@angular/material"], factory);
	else if(typeof exports === 'object')
		exports["ng2-alfresco-tag"] = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("@angular/material"));
	else
		root["ng2-alfresco-tag"] = factory(root["@angular/core"], root["ng2-alfresco-core"], root["rxjs/Rx"], root["@angular/material"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 827);
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

/***/ 172:
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
var tag_service_1 = __webpack_require__(66);
var TagActionsComponent = (function () {
    function TagActionsComponent(tagService, translateService) {
        var _this = this;
        this.tagService = tagService;
        this.translateService = translateService;
        this.successAdd = new core_1.EventEmitter();
        this.error = new core_1.EventEmitter();
        this.result = new core_1.EventEmitter();
        this.disableAddTag = true;
        this.tagService.refresh.subscribe(function () {
            _this.refreshTag();
        });
    }
    TagActionsComponent.prototype.ngOnChanges = function () {
        return this.refreshTag();
    };
    TagActionsComponent.prototype.refreshTag = function () {
        var _this = this;
        this.tagService.getTagsByNodeId(this.nodeId).subscribe(function (data) {
            _this.tagsEntries = data.list.entries;
            _this.disableAddTag = false;
            _this.result.emit(_this.tagsEntries);
        }, function () {
            _this.tagsEntries = null;
            _this.disableAddTag = true;
            _this.result.emit(_this.tagsEntries);
        });
    };
    TagActionsComponent.prototype.addTag = function () {
        var _this = this;
        if (this.searchTag(this.newTagName)) {
            this.translateService.get('TAG.MESSAGES.EXIST').subscribe(function (error) {
                _this.errorMsg = error;
            });
            this.error.emit(this.errorMsg);
        }
        else {
            this.tagService.addTag(this.nodeId, this.newTagName).subscribe(function () {
                _this.newTagName = '';
                _this.successAdd.emit(_this.nodeId);
            });
        }
    };
    TagActionsComponent.prototype.searchTag = function (searchTagName) {
        if (this.tagsEntries) {
            return this.tagsEntries.find(function (currentTag) {
                return (searchTagName === currentTag.entry.tag);
            });
        }
    };
    TagActionsComponent.prototype.cleanErrorMsg = function () {
        this.errorMsg = '';
    };
    TagActionsComponent.prototype.removeTag = function (tag) {
        this.tagService.removeTag(this.nodeId, tag);
    };
    return TagActionsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagActionsComponent.prototype, "nodeId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], TagActionsComponent.prototype, "successAdd", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], TagActionsComponent.prototype, "error", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagActionsComponent.prototype, "result", void 0);
TagActionsComponent = __decorate([
    core_1.Component({
        selector: 'adf-tag-node-actions-list, alfresco-tag-node-actions-list',
        template: __webpack_require__(618),
        styles: [__webpack_require__(788)],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof tag_service_1.TagService !== "undefined" && tag_service_1.TagService) === "function" && _c || Object, typeof (_d = typeof ng2_alfresco_core_1.AlfrescoTranslationService !== "undefined" && ng2_alfresco_core_1.AlfrescoTranslationService) === "function" && _d || Object])
], TagActionsComponent);
exports.TagActionsComponent = TagActionsComponent;
var _a, _b, _c, _d;


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 377:
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
        material_1.MdButtonModule, material_1.MdInputModule, material_1.MdChipsModule, material_1.MdIconModule
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

/***/ 618:
/***/ (function(module, exports) {

module.exports = "<md-list>\n    <md-list-item *ngFor=\"let currentEntry of tagsEntries; let idx = index\">\n        <div class=\"adf-tag-actions-container\" id=\"tag_delete_{{idx}}\" (click)=\"removeTag(currentEntry.entry.id)\">\n            <div class=\"adf-tag-actions-delete-text\" id=\"tag_name_{{idx}}\">\n                {{currentEntry.entry.tag}}\n            </div>\n            <md-icon class=\"adf-tag-actions-delete-icon\">delete</md-icon>\n        </div>\n    </md-list-item>\n</md-list>\n<table class=\"adf-full-width\" cellspacing=\"0\">\n    <tr>\n        <td>\n            <md-input-container class=\"adf-full-width\">\n                <input mdInput placeholder=\"{{'TAG.LABEL.NEWTAG' | translate }}\"\n                       type=\"text\"\n                       (keypress)=\"cleanErrorMsg()\"\n                       [(ngModel)]=\"newTagName\"\n                       id=\"new-tag-text\"/>\n                <md-hint *ngIf=\"error\" [ngStyle]=\"{'color': 'red'}\" align=\"start\">{{errorMsg}}</md-hint>\n            </md-input-container>\n        </td>\n        <td>\n            <button class=\"adf-full-width\" color=\"primary\" id=\"add-tag\" (click)=\"addTag()\" [disabled]=\"disableAddTag\"\n                    md-raised-button>\n                {{'TAG.BUTTON.ADD' | translate }}\n            </button>\n        </td>\n    </tr>\n</table>\n";

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = "<md-list>\n    <md-list-item *ngFor=\"let currentEntry of tagsEntries; let idx = index\">\n        <div class=\"adf-list-tag\" id=\"tag_name_{{idx}}\">{{currentEntry.entry.tag}}</div>\n    </md-list-item>\n</md-list>\n";

/***/ }),

/***/ 62:
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
var tag_service_1 = __webpack_require__(66);
var TagListComponent = (function () {
    function TagListComponent(tagService) {
        var _this = this;
        this.tagService = tagService;
        this.result = new core_1.EventEmitter();
        this.tagService.refresh.subscribe(function () {
            _this.refreshTag();
        });
    }
    TagListComponent.prototype.ngOnInit = function () {
        return this.refreshTag();
    };
    TagListComponent.prototype.refreshTag = function () {
        var _this = this;
        this.tagService.getAllTheTags().subscribe(function (data) {
            _this.tagsEntries = data.list.entries;
            _this.result.emit(_this.tagsEntries);
        });
    };
    return TagListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagListComponent.prototype, "result", void 0);
TagListComponent = __decorate([
    core_1.Component({
        selector: 'adf-tag-list, alfresco-tag-list',
        template: __webpack_require__(619),
        styles: [__webpack_require__(789)],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof tag_service_1.TagService !== "undefined" && tag_service_1.TagService) === "function" && _a || Object])
], TagListComponent);
exports.TagListComponent = TagListComponent;
var _a;


/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = "<md-chip-list>\n    <md-chip class=\"adf-tag-chips adf-primary-background-color\" *ngFor=\"let currentEntry of tagsEntries; let idx = index\">\n        <span id=\"tag_name_{{idx}}\">{{currentEntry.entry.tag}}</span>\n        <button class=\"adf-tag-chips-delete\" id=\"tag_delete_{{idx}}\" type=\"button\" (click)=\"removeTag(currentEntry.entry.id)\">\n            <md-icon class=\"adf-tag-chips-delete-icon adf-primary-contrast-text-color\">cancel</md-icon>\n        </button>\n    </md-chip>\n</md-chip-list>\n";

/***/ }),

/***/ 66:
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
var TagService = (function () {
    function TagService(apiService, logService) {
        this.apiService = apiService;
        this.logService = logService;
        this.refresh = new core_1.EventEmitter();
    }
    TagService.prototype.getTagsByNodeId = function (nodeId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().core.tagsApi.getNodeTags(nodeId))
            .catch(function (err) { return _this.handleError(err); });
    };
    TagService.prototype.getAllTheTags = function () {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().core.tagsApi.getTags())
            .catch(function (err) { return _this.handleError(err); });
    };
    TagService.prototype.addTag = function (nodeId, tagName) {
        var _this = this;
        var alfrescoApi = this.apiService.getInstance();
        var tagBody = new alfrescoApi.core.TagBody();
        tagBody.tag = tagName;
        var promiseAdd = Rx_1.Observable.fromPromise(this.apiService.getInstance().core.tagsApi.addTag(nodeId, tagBody));
        promiseAdd.subscribe(function (data) {
            _this.refresh.emit(data);
        }, function (err) {
            _this.handleError(err);
        });
        return promiseAdd;
    };
    TagService.prototype.removeTag = function (nodeId, tag) {
        var _this = this;
        var promiseRemove = Rx_1.Observable.fromPromise(this.apiService.getInstance().core.tagsApi.removeTag(nodeId, tag));
        promiseRemove.subscribe(function (data) {
            _this.refresh.emit(data);
        }, function (err) {
            _this.handleError(err);
        });
        return promiseRemove;
    };
    TagService.prototype.handleError = function (error) {
        this.logService.error(error);
        return Rx_1.Observable.throw(error || 'Server error');
    };
    return TagService;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagService.prototype, "refresh", void 0);
TagService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _b || Object])
], TagService);
exports.TagService = TagService;
var _a, _b;


/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = ".adf-full-width {\n  width: 100%; }\n\n.adf-tag-actions-delete-icon {\n  float: right;\n  cursor: pointer; }\n\n.adf-tag-actions-delete-text {\n  font-size: 16px;\n  float: left; }\n\n.adf-tag-actions-container {\n  padding: 8px 0 8px 0;\n  height: 20px; }\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = ".adf-list-tag {\n  padding: 16px;\n  font-size: 16px; }\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = ".adf-tag-chips-delete {\n  cursor: pointer;\n  height: 17px;\n  width: 20px;\n  float: right;\n  border: 0;\n  background: none;\n  padding: 0;\n  margin: -1px 0px 0px 10px; }\n\n.adf-tag-chips-delete-icon {\n  font-size: 20px;\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 20px;\n  width: 20px; }\n"

/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(705);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(706);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(707);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 80:
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
var tag_service_1 = __webpack_require__(66);
var TagNodeListComponent = (function () {
    function TagNodeListComponent(tagService) {
        var _this = this;
        this.tagService = tagService;
        this.results = new core_1.EventEmitter();
        this.tagService.refresh.subscribe(function () {
            _this.refreshTag();
        });
    }
    TagNodeListComponent.prototype.ngOnChanges = function () {
        return this.refreshTag();
    };
    TagNodeListComponent.prototype.refreshTag = function () {
        var _this = this;
        this.tagService.getTagsByNodeId(this.nodeId).subscribe(function (data) {
            _this.tagsEntries = data.list.entries;
            _this.results.emit(_this.tagsEntries);
        });
    };
    TagNodeListComponent.prototype.removeTag = function (tag) {
        var _this = this;
        this.tagService.removeTag(this.nodeId, tag).subscribe(function () {
            _this.refreshTag();
        });
    };
    return TagNodeListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TagNodeListComponent.prototype, "nodeId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TagNodeListComponent.prototype, "results", void 0);
TagNodeListComponent = __decorate([
    core_1.Component({
        selector: 'adf-tag-node-list, alfresco-tag-node-list',
        template: __webpack_require__(620),
        styles: [__webpack_require__(790)],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof tag_service_1.TagService !== "undefined" && tag_service_1.TagService) === "function" && _a || Object])
], TagNodeListComponent);
exports.TagNodeListComponent = TagNodeListComponent;
var _a;


/***/ }),

/***/ 827:
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
var ng2_alfresco_core_1 = __webpack_require__(1);
var material_module_1 = __webpack_require__(377);
var tag_actions_component_1 = __webpack_require__(172);
var tag_list_component_1 = __webpack_require__(62);
var tag_node_list_component_1 = __webpack_require__(80);
var tag_service_1 = __webpack_require__(66);
var tag_actions_component_2 = __webpack_require__(172);
exports.TagActionsComponent = tag_actions_component_2.TagActionsComponent;
var tag_list_component_2 = __webpack_require__(62);
exports.TagListComponent = tag_list_component_2.TagListComponent;
var tag_node_list_component_2 = __webpack_require__(80);
exports.TagNodeListComponent = tag_node_list_component_2.TagNodeListComponent;
var tag_service_2 = __webpack_require__(66);
exports.TagService = tag_service_2.TagService;
var tag_list_component_3 = __webpack_require__(62);
var tag_node_list_component_3 = __webpack_require__(80);
exports.TagNodeList = tag_node_list_component_3.TagNodeListComponent;
var tag_list_component_4 = __webpack_require__(62);
exports.TagList = tag_list_component_4.TagListComponent;
exports.TAG_DIRECTIVES = [
    tag_actions_component_1.TagActionsComponent,
    tag_list_component_1.TagListComponent,
    tag_list_component_3.TagListComponent,
    tag_node_list_component_1.TagNodeListComponent
];
exports.TAG_PROVIDERS = [
    tag_service_1.TagService
];
var TagModule = TagModule_1 = (function () {
    function TagModule() {
    }
    TagModule.forRoot = function () {
        return {
            ngModule: TagModule_1,
            providers: exports.TAG_DIRECTIVES.slice()
        };
    };
    return TagModule;
}());
TagModule = TagModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            ng2_alfresco_core_1.CoreModule,
            material_module_1.MaterialModule
        ],
        declarations: exports.TAG_DIRECTIVES.slice(),
        providers: exports.TAG_PROVIDERS.concat([
            {
                provide: ng2_alfresco_core_1.TRANSLATION_PROVIDER,
                multi: true,
                useValue: {
                    name: 'ng2-alfresco-tag',
                    source: 'assets/ng2-alfresco-tag'
                }
            }
        ]),
        exports: exports.TAG_DIRECTIVES.concat([
            material_module_1.MaterialModule
        ])
    })
], TagModule);
exports.TagModule = TagModule;
var TagModule_1;


/***/ })

/******/ });
});
//# sourceMappingURL=ng2-alfresco-tag.js.map