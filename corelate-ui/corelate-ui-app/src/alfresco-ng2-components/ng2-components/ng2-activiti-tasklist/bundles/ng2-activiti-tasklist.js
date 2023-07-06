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
		module.exports = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("@angular/material"), require("@angular/forms"), require("ng2-alfresco-datatable"), require("@angular/common"), require("moment"), require("rxjs/Observable"), require("ng2-activiti-form"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "ng2-alfresco-core", "rxjs/Rx", "@angular/material", "@angular/forms", "ng2-alfresco-datatable", "@angular/common", "moment", "rxjs/Observable", "ng2-activiti-form"], factory);
	else if(typeof exports === 'object')
		exports["ng2-activiti-tasklist"] = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("@angular/material"), require("@angular/forms"), require("ng2-alfresco-datatable"), require("@angular/common"), require("moment"), require("rxjs/Observable"), require("ng2-activiti-form"));
	else
		root["ng2-activiti-tasklist"] = factory(root["@angular/core"], root["ng2-alfresco-core"], root["rxjs/Rx"], root["@angular/material"], root["@angular/forms"], root["ng2-alfresco-datatable"], root["@angular/common"], root["moment"], root["rxjs/Observable"], root["ng2-activiti-form"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_26__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 820);
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

/***/ 128:
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
var CommentListComponent = (function () {
    function CommentListComponent(datePipe) {
        this.datePipe = datePipe;
        this.clickRow = new core_1.EventEmitter();
    }
    CommentListComponent.prototype.selectComment = function (event) {
        this.selectedComment = event.value.obj;
        this.clickRow.emit(this.selectedComment);
    };
    CommentListComponent.prototype.getUserShortName = function (user) {
        var shortName = '';
        if (user) {
            if (user.firstName) {
                shortName = user.firstName[0].toUpperCase();
            }
            if (user.lastName) {
                shortName += user.lastName[0].toUpperCase();
            }
        }
        return shortName;
    };
    CommentListComponent.prototype.transformDate = function (aDate) {
        var formattedDate;
        var givenDate = Number.parseInt(this.datePipe.transform(aDate, 'yMMdd'));
        var today = Number.parseInt(this.datePipe.transform(Date.now(), 'yMMdd'));
        if (givenDate === today) {
            formattedDate = 'Today, ' + this.datePipe.transform(aDate, 'hh:mm a');
        }
        else {
            var yesterday = Number.parseInt(this.datePipe.transform(Date.now() - 24 * 3600 * 1000, 'yMMdd'));
            if (givenDate === yesterday) {
                formattedDate = 'Yesterday, ' + this.datePipe.transform(aDate, 'hh:mm a');
            }
            else {
                formattedDate = this.datePipe.transform(aDate, 'MMM dd y, hh:mm a');
            }
        }
        return formattedDate;
    };
    CommentListComponent.prototype.hasComments = function () {
        return this.comments && this.comments.length && true;
    };
    CommentListComponent.prototype.onErrorImageLoad = function (user) {
        if (user.userImage) {
            user.userImage = null;
        }
    };
    return CommentListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CommentListComponent.prototype, "comments", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], CommentListComponent.prototype, "clickRow", void 0);
CommentListComponent = __decorate([
    core_1.Component({
        selector: 'adf-comment-list',
        template: __webpack_require__(584),
        styles: [__webpack_require__(756)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof common_1.DatePipe !== "undefined" && common_1.DatePipe) === "function" && _b || Object])
], CommentListComponent);
exports.CommentListComponent = CommentListComponent;
var _a, _b;


/***/ }),

/***/ 129:
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
var TaskAttachmentListComponent = (function () {
    function TaskAttachmentListComponent(activitiContentService, contentService, thumbnailService) {
        this.activitiContentService = activitiContentService;
        this.contentService = contentService;
        this.thumbnailService = thumbnailService;
        this.disabled = false;
        this.attachmentClick = new core_1.EventEmitter();
        this.success = new core_1.EventEmitter();
        this.error = new core_1.EventEmitter();
        this.emptyListImageUrl = __webpack_require__(391);
        this.attachments = [];
        this.isLoading = true;
    }
    TaskAttachmentListComponent.prototype.ngOnChanges = function (changes) {
        if (changes['taskId'] && changes['taskId'].currentValue) {
            this.loadAttachmentsByTaskId(changes['taskId'].currentValue);
        }
    };
    TaskAttachmentListComponent.prototype.reset = function () {
        this.attachments = [];
    };
    TaskAttachmentListComponent.prototype.reload = function () {
        this.loadAttachmentsByTaskId(this.taskId);
    };
    TaskAttachmentListComponent.prototype.add = function (content) {
        this.attachments.push({
            id: content.id,
            name: content.name,
            created: content.created,
            createdBy: content.createdBy.firstName + ' ' + content.createdBy.lastName,
            icon: this.thumbnailService.getMimeTypeIcon(content.mimeType)
        });
    };
    TaskAttachmentListComponent.prototype.loadAttachmentsByTaskId = function (taskId) {
        var _this = this;
        if (taskId) {
            this.isLoading = true;
            this.reset();
            this.activitiContentService.getTaskRelatedContent(taskId).subscribe(function (res) {
                var attachList = [];
                res.data.forEach(function (content) {
                    attachList.push({
                        id: content.id,
                        name: content.name,
                        created: content.created,
                        createdBy: content.createdBy.firstName + ' ' + content.createdBy.lastName,
                        icon: _this.thumbnailService.getMimeTypeIcon(content.mimeType)
                    });
                });
                _this.attachments = attachList;
                _this.success.emit(_this.attachments);
                _this.isLoading = false;
            }, function (err) {
                _this.error.emit(err);
                _this.isLoading = false;
            });
        }
    };
    TaskAttachmentListComponent.prototype.deleteAttachmentById = function (contentId) {
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
    TaskAttachmentListComponent.prototype.isEmpty = function () {
        return this.attachments && this.attachments.length === 0;
    };
    TaskAttachmentListComponent.prototype.onShowRowActionsMenu = function (event) {
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
    TaskAttachmentListComponent.prototype.onExecuteRowAction = function (event) {
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
    TaskAttachmentListComponent.prototype.openContent = function (event) {
        var content = event.value.obj;
        this.emitDocumentContent(content);
    };
    TaskAttachmentListComponent.prototype.emitDocumentContent = function (content) {
        var _this = this;
        this.activitiContentService.getFileRawContent(content.id).subscribe(function (blob) {
            content.contentBlob = blob;
            _this.attachmentClick.emit(content);
        }, function (err) {
            _this.error.emit(err);
        });
    };
    TaskAttachmentListComponent.prototype.downloadContent = function (content) {
        var _this = this;
        this.activitiContentService.getFileRawContent(content.id).subscribe(function (blob) { return _this.contentService.downloadBlob(blob, content.name); }, function (err) {
            _this.error.emit(err);
        });
    };
    TaskAttachmentListComponent.prototype.isDisabled = function () {
        return this.disabled;
    };
    return TaskAttachmentListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskAttachmentListComponent.prototype, "taskId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TaskAttachmentListComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TaskAttachmentListComponent.prototype, "attachmentClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TaskAttachmentListComponent.prototype, "success", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], TaskAttachmentListComponent.prototype, "error", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskAttachmentListComponent.prototype, "emptyListImageUrl", void 0);
TaskAttachmentListComponent = __decorate([
    core_1.Component({
        selector: 'adf-task-attachment-list',
        styles: [__webpack_require__(762)],
        template: __webpack_require__(591)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof ng2_activiti_form_1.ActivitiContentService !== "undefined" && ng2_activiti_form_1.ActivitiContentService) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.ContentService !== "undefined" && ng2_alfresco_core_1.ContentService) === "function" && _c || Object, typeof (_d = typeof ng2_alfresco_core_1.ThumbnailService !== "undefined" && ng2_alfresco_core_1.ThumbnailService) === "function" && _d || Object])
], TaskAttachmentListComponent);
exports.TaskAttachmentListComponent = TaskAttachmentListComponent;
var _a, _b, _c, _d;


/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),

/***/ 130:
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
var tasklist_service_1 = __webpack_require__(15);
var JSON_FORMAT = 'json';
var PDF_FORMAT = 'pdf';
var TaskAuditDirective = (function () {
    function TaskAuditDirective(contentService, taskListService) {
        this.contentService = contentService;
        this.taskListService = taskListService;
        this.fileName = 'Audit';
        this.format = 'pdf';
        this.download = true;
        this.clicked = new core_1.EventEmitter();
        this.error = new core_1.EventEmitter();
    }
    TaskAuditDirective.prototype.ngOnInit = function () {
        console.log('OnInit');
    };
    TaskAuditDirective.prototype.ngOnChanges = function (changes) {
        if (!this.isValidType()) {
            this.setDefaultFormatType();
        }
    };
    TaskAuditDirective.prototype.isValidType = function () {
        if (this.format && (this.isJsonFormat() || this.isPdfFormat())) {
            return true;
        }
        return false;
    };
    TaskAuditDirective.prototype.setDefaultFormatType = function () {
        this.format = PDF_FORMAT;
    };
    TaskAuditDirective.prototype.fetchAuditInfo = function () {
        var _this = this;
        if (this.isPdfFormat()) {
            this.taskListService.fetchTaskAuditPdfById(this.taskId).subscribe(function (blob) {
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
            this.taskListService.fetchTaskAuditJsonById(this.taskId).subscribe(function (res) {
                _this.audit = res;
                _this.clicked.emit({ format: _this.format, value: _this.audit, fileName: _this.fileName });
            }, function (err) {
                _this.error.emit(err);
            });
        }
    };
    TaskAuditDirective.prototype.onClickAudit = function () {
        this.fetchAuditInfo();
    };
    TaskAuditDirective.prototype.isJsonFormat = function () {
        return this.format === JSON_FORMAT;
    };
    TaskAuditDirective.prototype.isPdfFormat = function () {
        return this.format === PDF_FORMAT;
    };
    return TaskAuditDirective;
}());
__decorate([
    core_1.Input('task-id'),
    __metadata("design:type", String)
], TaskAuditDirective.prototype, "taskId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskAuditDirective.prototype, "fileName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskAuditDirective.prototype, "format", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TaskAuditDirective.prototype, "download", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], TaskAuditDirective.prototype, "clicked", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], TaskAuditDirective.prototype, "error", void 0);
TaskAuditDirective = __decorate([
    core_1.Directive({
        selector: 'button[adf-task-audit]',
        host: {
            'role': 'button',
            '(click)': 'onClickAudit()'
        }
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof ng2_alfresco_core_1.ContentService !== "undefined" && ng2_alfresco_core_1.ContentService) === "function" && _c || Object, typeof (_d = typeof tasklist_service_1.TaskListService !== "undefined" && tasklist_service_1.TaskListService) === "function" && _d || Object])
], TaskAuditDirective);
exports.TaskAuditDirective = TaskAuditDirective;
var _a, _b, _c, _d;


/***/ }),

/***/ 131:
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
        var taskId = file.options.parentId;
        return this.instanceApi.getInstance().activiti.contentApi.createRelatedContentOnTask(taskId, file.file, opts);
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

/***/ 14:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),

/***/ 15:
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
var comment_model_1 = __webpack_require__(195);
var filter_model_1 = __webpack_require__(70);
var form_model_1 = __webpack_require__(463);
var task_details_model_1 = __webpack_require__(63);
var user_model_1 = __webpack_require__(71);
var TaskListService = (function () {
    function TaskListService(apiService, logService) {
        this.apiService = apiService;
        this.logService = logService;
        this.tasksListSubject = new Rx_1.Subject();
        this.tasksList$ = this.tasksListSubject.asObservable();
    }
    TaskListService.prototype.getDeployedApplications = function (name) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.appsApi.getAppDefinitions())
            .map(function (response) {
            if (name) {
                return response.data.find(function (app) { return app.name === name; });
            }
            return response.data;
        })
            .catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.getApplicationDetailsById = function (appId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.appsApi.getAppDefinitions())
            .map(function (response) {
            return response.data.find(function (app) { return app.id === appId; });
        })
            .catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.getTaskListFilters = function (appId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.callApiTaskFilters(appId))
            .map(function (response) {
            var filters = [];
            response.data.forEach(function (filter) {
                var filterModel = new filter_model_1.FilterRepresentationModel(filter);
                filters.push(filterModel);
            });
            return filters;
        }).catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.getTaskFilterById = function (filterId, appId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.callApiTaskFilters(appId))
            .map(function (response) {
            return response.data.find(function (filter) { return filter.id === filterId; });
        }).catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.getTaskFilterByName = function (taskName, appId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.callApiTaskFilters(appId))
            .map(function (response) {
            return response.data.find(function (filter) { return filter.name === taskName; });
        }).catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.getFilterForTaskById = function (taskId, filterList) {
        var _this = this;
        return Rx_1.Observable.from(filterList)
            .flatMap(function (filter) { return _this.isTaskRelatedToFilter(taskId, filter); })
            .filter(function (filter) { return filter != null; });
    };
    TaskListService.prototype.generateTaskRequestNodeFromFilter = function (filter) {
        var requestNode = {
            appDefinitionId: filter.appId,
            processDefinitionKey: filter.filter.processDefinitionKey,
            assignment: filter.filter.assignment,
            state: filter.filter.state,
            sort: filter.filter.sort
        };
        return new filter_model_1.TaskQueryRequestRepresentationModel(requestNode);
    };
    TaskListService.prototype.isTaskRelatedToFilter = function (taskId, filter) {
        var _this = this;
        var requestNodeForFilter = this.generateTaskRequestNodeFromFilter(filter);
        return Rx_1.Observable.fromPromise(this.callApiTasksFiltered(requestNodeForFilter))
            .map(function (res) {
            return res.data.find(function (element) { return element.id === taskId; }) ? filter : null;
        }).catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.getTasks = function (requestNode) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.callApiTasksFiltered(requestNode))
            .map(function (res) {
            _this.tasksListSubject.next(res);
            return res;
        }).catch(function (err) { return _this.handleTasksError(err); });
    };
    TaskListService.prototype.findTasksByState = function (requestNode, state) {
        if (state) {
            requestNode.state = state;
        }
        return this.getTasks(requestNode);
    };
    TaskListService.prototype.findAllTaskByState = function (requestNode, state) {
        var _this = this;
        if (state) {
            requestNode.state = state;
        }
        return this.getTotalTasks(requestNode).
            switchMap(function (res) {
            requestNode.size = res.total;
            return _this.getTasks(requestNode);
        });
    };
    TaskListService.prototype.findAllTasksWhitoutState = function (requestNode) {
        return Rx_1.Observable.forkJoin(this.findTasksByState(requestNode, 'open'), this.findAllTaskByState(requestNode, 'completed'), function (activeTasks, completedTasks) {
            var tasks = Object.assign({}, activeTasks);
            tasks.total += completedTasks.total;
            tasks.data = tasks.data.concat(completedTasks.data);
            return tasks;
        });
    };
    TaskListService.prototype.getTaskDetails = function (id) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.callApiTaskDetails(id))
            .map(function (res) { return res; })
            .map(function (details) {
            return new task_details_model_1.TaskDetailsModel(details);
        }).catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.getComments = function (id) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.callApiTaskComments(id))
            .map(function (res) { return res; })
            .map(function (response) {
            var comments = [];
            response.data.forEach(function (comment) {
                var user = new user_model_1.User(comment.createdBy);
                comments.push(new comment_model_1.Comment(comment.id, comment.message, comment.created, user));
            });
            return comments;
        }).catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.getTaskChecklist = function (id) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.callApiTaskChecklist(id))
            .map(function (res) { return res; })
            .map(function (response) {
            var checklists = [];
            response.data.forEach(function (checklist) {
                checklists.push(new task_details_model_1.TaskDetailsModel(checklist));
            });
            return checklists;
        }).catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.getFormList = function () {
        var _this = this;
        var opts = {
            'filter': 'myReusableForms',
            'sort': 'modifiedDesc',
            'modelType': 2
        };
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.modelsApi.getModels(opts)).map(function (res) { return res; })
            .map(function (response) {
            var forms = [];
            response.data.forEach(function (form) {
                forms.push(new form_model_1.Form(form.id, form.name));
            });
            return forms;
        }).catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.attachFormToATask = function (taskId, formId) {
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.taskApi.attachForm(taskId, { 'formId': formId }));
    };
    TaskListService.prototype.createDefaultFilters = function (appId) {
        var _this = this;
        var involvedTasksFilter = this.getInvolvedTasksFilterInstance(appId);
        var involvedObservable = this.addFilter(involvedTasksFilter);
        var myTasksFilter = this.getMyTasksFilterInstance(appId);
        var myTaskObservable = this.addFilter(myTasksFilter);
        var queuedTasksFilter = this.getQueuedTasksFilterInstance(appId);
        var queuedObservable = this.addFilter(queuedTasksFilter);
        var completedTasksFilter = this.getCompletedTasksFilterInstance(appId);
        var completeObservable = this.addFilter(completedTasksFilter);
        return Rx_1.Observable.create(function (observer) {
            Rx_1.Observable.forkJoin(involvedObservable, myTaskObservable, queuedObservable, completeObservable).subscribe(function (res) {
                var filters = [];
                res.forEach(function (filter) {
                    if (filter.name === involvedTasksFilter.name) {
                        filters.push(involvedTasksFilter);
                    }
                    else if (filter.name === myTasksFilter.name) {
                        filters.push(myTasksFilter);
                    }
                    else if (filter.name === queuedTasksFilter.name) {
                        filters.push(queuedTasksFilter);
                    }
                    else if (filter.name === completedTasksFilter.name) {
                        filters.push(completedTasksFilter);
                    }
                });
                observer.next(filters);
                observer.complete();
            }, function (err) {
                _this.logService.error(err);
            });
        });
    };
    TaskListService.prototype.addTask = function (task) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.callApiAddTask(task))
            .map(function (res) { return res; })
            .map(function (response) {
            return new task_details_model_1.TaskDetailsModel(response);
        }).catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.deleteTask = function (taskId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.callApiDeleteTask(taskId))
            .catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.addFilter = function (filter) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.callApiAddFilter(filter))
            .map(function (res) { return res; })
            .map(function (response) {
            return response;
        }).catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.addComment = function (id, message) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.callApiAddTaskComment(id, message))
            .map(function (res) { return res; })
            .map(function (response) {
            return new comment_model_1.Comment(response.id, response.message, response.created, response.createdBy);
        }).catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.completeTask = function (id) {
        return Rx_1.Observable.fromPromise(this.callApiCompleteTask(id))
            .map(function (res) { return res; });
    };
    TaskListService.prototype.getTotalTasks = function (requestNode) {
        var _this = this;
        requestNode.size = 0;
        return Rx_1.Observable.fromPromise(this.callApiTasksFiltered(requestNode))
            .map(function (res) {
            return res;
        }).catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.createNewTask = function (task) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.callApiCreateTask(task))
            .map(function (res) { return res; })
            .map(function (response) {
            return new task_details_model_1.TaskDetailsModel(response);
        }).catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.assignTask = function (taskId, requestNode) {
        var _this = this;
        var assignee = { assignee: requestNode.id };
        return Rx_1.Observable.fromPromise(this.callApiAssignTask(taskId, assignee))
            .map(function (res) { return res; })
            .map(function (response) {
            return new task_details_model_1.TaskDetailsModel(response);
        }).catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.assignTaskByUserId = function (taskId, userId) {
        var _this = this;
        var assignee = { assignee: userId };
        return Rx_1.Observable.fromPromise(this.callApiAssignTask(taskId, assignee))
            .map(function (res) { return res; })
            .map(function (response) {
            return new task_details_model_1.TaskDetailsModel(response);
        }).catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.claimTask = function (taskId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.taskApi.claimTask(taskId))
            .catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.updateTask = function (taskId, updated) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.taskApi.updateTask(taskId, updated))
            .catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.fetchTaskAuditPdfById = function (taskId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.taskApi.getTaskAuditPdf(taskId))
            .catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.fetchTaskAuditJsonById = function (taskId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.taskApi.getTaskAuditJson(taskId))
            .catch(function (err) { return _this.handleError(err); });
    };
    TaskListService.prototype.callApiTasksFiltered = function (requestNode) {
        return this.apiService.getInstance().activiti.taskApi.listTasks(requestNode);
    };
    TaskListService.prototype.callApiTaskFilters = function (appId) {
        if (appId) {
            return this.apiService.getInstance().activiti.userFiltersApi.getUserTaskFilters({ appId: appId });
        }
        else {
            return this.apiService.getInstance().activiti.userFiltersApi.getUserTaskFilters();
        }
    };
    TaskListService.prototype.callApiTaskDetails = function (id) {
        return this.apiService.getInstance().activiti.taskApi.getTask(id);
    };
    TaskListService.prototype.callApiTaskComments = function (id) {
        return this.apiService.getInstance().activiti.taskApi.getTaskComments(id);
    };
    TaskListService.prototype.callApiAddTaskComment = function (id, message) {
        return this.apiService.getInstance().activiti.taskApi.addTaskComment({ message: message }, id);
    };
    TaskListService.prototype.callApiAddTask = function (task) {
        return this.apiService.getInstance().activiti.taskApi.addSubtask(task.parentTaskId, task);
    };
    TaskListService.prototype.callApiDeleteTask = function (taskId) {
        return this.apiService.getInstance().activiti.taskApi.deleteTask(taskId);
    };
    TaskListService.prototype.callApiAddFilter = function (filter) {
        return this.apiService.getInstance().activiti.userFiltersApi.createUserTaskFilter(filter);
    };
    TaskListService.prototype.callApiTaskChecklist = function (id) {
        return this.apiService.getInstance().activiti.taskApi.getChecklist(id);
    };
    TaskListService.prototype.callApiCompleteTask = function (id) {
        return this.apiService.getInstance().activiti.taskApi.completeTask(id);
    };
    TaskListService.prototype.callApiCreateTask = function (task) {
        return this.apiService.getInstance().activiti.taskApi.createNewTask(task);
    };
    TaskListService.prototype.handleError = function (error) {
        this.logService.error(error);
        this.tasksListSubject.error(error);
        return Rx_1.Observable.throw(error || 'Server error');
    };
    TaskListService.prototype.handleTasksError = function (error) {
        this.tasksListSubject.error(error.response.body);
        return this.handleError(error);
    };
    TaskListService.prototype.getInvolvedTasksFilterInstance = function (appId) {
        return new filter_model_1.FilterRepresentationModel({
            'name': 'Involved Tasks',
            'appId': appId,
            'recent': false,
            'icon': 'glyphicon-align-left',
            'filter': { 'sort': 'created-desc', 'name': '', 'state': 'open', 'assignment': 'involved' }
        });
    };
    TaskListService.prototype.getMyTasksFilterInstance = function (appId) {
        return new filter_model_1.FilterRepresentationModel({
            'name': 'My Tasks',
            'appId': appId,
            'recent': false,
            'icon': 'glyphicon-inbox',
            'filter': { 'sort': 'created-desc', 'name': '', 'state': 'open', 'assignment': 'assignee' }
        });
    };
    TaskListService.prototype.getQueuedTasksFilterInstance = function (appId) {
        return new filter_model_1.FilterRepresentationModel({
            'name': 'Queued Tasks',
            'appId': appId,
            'recent': false,
            'icon': 'glyphicon-record',
            'filter': { 'sort': 'created-desc', 'name': '', 'state': 'open', 'assignment': 'candidate' }
        });
    };
    TaskListService.prototype.getCompletedTasksFilterInstance = function (appId) {
        return new filter_model_1.FilterRepresentationModel({
            'name': 'Completed Tasks',
            'appId': appId,
            'recent': true,
            'icon': 'glyphicon-ok-sign',
            'filter': { 'sort': 'created-desc', 'name': '', 'state': 'completed', 'assignment': 'involved' }
        });
    };
    TaskListService.prototype.callApiAssignTask = function (taskId, requestNode) {
        return this.apiService.getInstance().activiti.taskApi.assignTask(taskId, requestNode);
    };
    return TaskListService;
}());
TaskListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _b || Object])
], TaskListService);
exports.TaskListService = TaskListService;
var _a, _b;


/***/ }),

/***/ 195:
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
var Comment = (function () {
    function Comment(id, message, created, createdBy) {
        this.id = id;
        this.message = message;
        this.created = created;
        this.createdBy = createdBy;
    }
    return Comment;
}());
exports.Comment = Comment;


/***/ }),

/***/ 196:
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
var IconModel = (function () {
    function IconModel() {
        this.initIconsMDL();
    }
    IconModel.prototype.mapGlyphiconToMaterialDesignIcons = function (icon) {
        return this.iconsMDL.get(icon) ? this.iconsMDL.get(icon) : IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON;
    };
    IconModel.prototype.initIconsMDL = function () {
        this.iconsMDL = new Map();
        this.iconsMDL.set('glyphicon-asterisk', 'ac_unit');
        this.iconsMDL.set('glyphicon-plus', 'add');
        this.iconsMDL.set('glyphicon-euro', 'euro_symbol');
        this.iconsMDL.set('glyphicon-cloud', 'cloud');
        this.iconsMDL.set('glyphicon-envelope', 'mail');
        this.iconsMDL.set('glyphicon-pencil', 'create');
        this.iconsMDL.set('glyphicon-glass', 'local_bar');
        this.iconsMDL.set('glyphicon-music', 'music_note');
        this.iconsMDL.set('glyphicon-search', 'search');
        this.iconsMDL.set('glyphicon-heart', 'favorite');
        this.iconsMDL.set('glyphicon-heart-empty', 'favorite_border');
        this.iconsMDL.set('glyphicon-star', 'star');
        this.iconsMDL.set('glyphicon-star-empty', 'star_border');
        this.iconsMDL.set('glyphicon-user', 'person');
        this.iconsMDL.set('glyphicon-film', 'movie_creation');
        this.iconsMDL.set('glyphicon-th-large', 'view_comfy');
        this.iconsMDL.set('glyphicon-th', 'view_compact');
        this.iconsMDL.set('glyphicon-th-list', 'list');
        this.iconsMDL.set('glyphicon-ok', 'done');
        this.iconsMDL.set('glyphicon-remove', 'cancel');
        this.iconsMDL.set('glyphicon-zoom-in', 'zoom_in');
        this.iconsMDL.set('glyphicon-zoom-out', 'zoom_out');
        this.iconsMDL.set('glyphicon-off', 'highlight_off');
        this.iconsMDL.set('glyphicon-signal', 'signal_cellular_4_bar');
        this.iconsMDL.set('glyphicon-cog', 'settings');
        this.iconsMDL.set('glyphicon-trash', 'delete');
        this.iconsMDL.set('glyphicon-home', 'home');
        this.iconsMDL.set('glyphicon-file', 'insert_drive_file');
        this.iconsMDL.set('glyphicon-time', 'access_time');
        this.iconsMDL.set('glyphicon-road', 'map');
        this.iconsMDL.set('glyphicon-download-alt', 'file_download');
        this.iconsMDL.set('glyphicon-download', 'file_download');
        this.iconsMDL.set('glyphicon-upload', 'file_upload');
        this.iconsMDL.set('glyphicon-inbox', 'inbox');
        this.iconsMDL.set('glyphicon-play-circle', 'play_circle_outline');
        this.iconsMDL.set('glyphicon-repeat', 'refresh');
        this.iconsMDL.set('glyphicon-refresh', 'sync');
        this.iconsMDL.set('glyphicon-list-alt', 'event_note');
        this.iconsMDL.set('glyphicon-lock', 'lock_outline');
        this.iconsMDL.set('glyphicon-flag', 'assistant_photo');
        this.iconsMDL.set('glyphicon-headphones', 'headset');
        this.iconsMDL.set('glyphicon-volume-up', 'volume_up');
        this.iconsMDL.set('glyphicon-tag', 'local_offer');
        this.iconsMDL.set('glyphicon-tags', 'local_offer');
        this.iconsMDL.set('glyphicon-book', 'library_books');
        this.iconsMDL.set('glyphicon-bookmark', 'collections_bookmark');
        this.iconsMDL.set('glyphicon-print', 'local_printshop');
        this.iconsMDL.set('glyphicon-camera', 'local_see');
        this.iconsMDL.set('glyphicon-list', 'view_list');
        this.iconsMDL.set('glyphicon-facetime-video', 'video_call');
        this.iconsMDL.set('glyphicon-picture', 'photo');
        this.iconsMDL.set('glyphicon-map-marker', 'add_location');
        this.iconsMDL.set('glyphicon-adjust', 'brightness_4');
        this.iconsMDL.set('glyphicon-tint', 'invert_colors');
        this.iconsMDL.set('glyphicon-edit', 'edit');
        this.iconsMDL.set('glyphicon-share', 'share');
        this.iconsMDL.set('glyphicon-check', 'assignment_turned_in');
        this.iconsMDL.set('glyphicon-move', 'open_with');
        this.iconsMDL.set('glyphicon-play', 'play_arrow');
        this.iconsMDL.set('glyphicon-eject', 'eject');
        this.iconsMDL.set('glyphicon-plus-sign', 'add_circle');
        this.iconsMDL.set('glyphicon-minus-sign', 'remove_circle');
        this.iconsMDL.set('glyphicon-remove-sign', 'cancel');
        this.iconsMDL.set('glyphicon-ok-sign', 'check_circle');
        this.iconsMDL.set('glyphicon-question-sign', 'help');
        this.iconsMDL.set('glyphicon-info-sign', 'info');
        this.iconsMDL.set('glyphicon-screenshot', 'flare');
        this.iconsMDL.set('glyphicon-remove-circle', 'cancel');
        this.iconsMDL.set('glyphicon-ok-circle', 'add_circle');
        this.iconsMDL.set('glyphicon-ban-circle', 'block');
        this.iconsMDL.set('glyphicon-share-alt', 'redo');
        this.iconsMDL.set('glyphicon-exclamation-sign', 'error');
        this.iconsMDL.set('glyphicon-gift', 'giftcard');
        this.iconsMDL.set('glyphicon-leaf', 'spa');
        this.iconsMDL.set('glyphicon-fire', 'whatshot');
        this.iconsMDL.set('glyphicon-eye-open', 'remove_red_eye');
        this.iconsMDL.set('glyphicon-eye-close', 'remove_red_eye');
        this.iconsMDL.set('glyphicon-warning-sign', 'warning');
        this.iconsMDL.set('glyphicon-plane', 'airplanemode_active');
        this.iconsMDL.set('glyphicon-calendar', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-random', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-comment', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-magnet', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-retweet', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-shopping-cart', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-folder-close', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-folder-open', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-hdd', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-bullhorn', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-bell', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-certificate', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-thumbs-up', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-thumbs-down', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-hand-left', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-globe', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-wrench', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-tasks', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-filter', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-briefcase', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-dashboard', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-paperclip', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-link', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-phone', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-pushpin', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-usd', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-gbp', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-sort', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-flash', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-record', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-save', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-open', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-saved', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-send', 'send');
        this.iconsMDL.set('glyphicon-floppy-disk', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-credit-card', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-cutlery', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-earphone', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-phone-alt', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-tower', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-stats', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-cloud-download', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-cloud-upload', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-tree-conifer', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
        this.iconsMDL.set('glyphicon-tree-deciduous', IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON);
    };
    return IconModel;
}());
IconModel.DEFAULT_TASKS_APP_MATERIAL_ICON = 'favorite_border';
exports.IconModel = IconModel;


/***/ }),

/***/ 197:
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
var user_model_1 = __webpack_require__(71);
var StartTaskModel = (function () {
    function StartTaskModel(obj) {
        this.name = obj && obj.name || null;
        this.description = obj && obj.description || null;
        this.assignee = obj && obj.assignee ? new user_model_1.User(obj.assignee) : null;
        this.dueDate = obj && obj.dueDate || null;
        this.formKey = obj && obj.formKey || null;
        this.category = obj && obj.category || null;
    }
    return StartTaskModel;
}());
exports.StartTaskModel = StartTaskModel;


/***/ }),

/***/ 198:
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
var UserEventModel = (function () {
    function UserEventModel(obj) {
        this.type = '';
        this.value = {};
        this.type = obj && obj.type;
        this.value = obj && obj.value || {};
    }
    return UserEventModel;
}());
exports.UserEventModel = UserEventModel;


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 21:
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
var PeopleService = (function () {
    function PeopleService(alfrescoJsApi, logService) {
        this.alfrescoJsApi = alfrescoJsApi;
        this.logService = logService;
    }
    PeopleService.prototype.getWorkflowUsers = function (taskId, searchWord) {
        var _this = this;
        var option = { excludeTaskId: taskId, filter: searchWord };
        return Rx_1.Observable.fromPromise(this.getWorkflowUserApi(option))
            .map(function (response) { return response.data || []; })
            .catch(function (err) { return _this.handleError(err); });
    };
    PeopleService.prototype.getWorkflowUsersWithImages = function (taskId, searchWord) {
        var _this = this;
        var option = { excludeTaskId: taskId, filter: searchWord };
        return Rx_1.Observable.fromPromise(this.getWorkflowUserApi(option))
            .switchMap(function (response) { return response.data || []; })
            .map(function (user) { return _this.addImageToUser(user); })
            .combineAll()
            .catch(function (err) { return _this.handleError(err); });
    };
    PeopleService.prototype.getUserImage = function (user) {
        return this.getUserProfileImageApi(user.id + '');
    };
    PeopleService.prototype.addImageToUser = function (user) {
        user.userImage = this.getUserImage(user);
        return Rx_1.Observable.of(user);
    };
    PeopleService.prototype.involveUserWithTask = function (taskId, idToInvolve) {
        var _this = this;
        var node = { userId: idToInvolve };
        return Rx_1.Observable.fromPromise(this.involveUserToTaskApi(taskId, node))
            .catch(function (err) { return _this.handleError(err); });
    };
    PeopleService.prototype.removeInvolvedUser = function (taskId, idToRemove) {
        var _this = this;
        var node = { userId: idToRemove };
        return Rx_1.Observable.fromPromise(this.removeInvolvedUserFromTaskApi(taskId, node))
            .catch(function (err) { return _this.handleError(err); });
    };
    PeopleService.prototype.getWorkflowUserApi = function (options) {
        return this.alfrescoJsApi.getInstance().activiti.usersWorkflowApi.getUsers(options);
    };
    PeopleService.prototype.involveUserToTaskApi = function (taskId, node) {
        return this.alfrescoJsApi.getInstance().activiti.taskActionsApi.involveUser(taskId, node);
    };
    PeopleService.prototype.removeInvolvedUserFromTaskApi = function (taskId, node) {
        return this.alfrescoJsApi.getInstance().activiti.taskActionsApi.removeInvolvedUser(taskId, node);
    };
    PeopleService.prototype.getUserProfileImageApi = function (userId) {
        return this.alfrescoJsApi.getInstance().activiti.userApi.getUserProfilePictureUrl(userId);
    };
    PeopleService.prototype.handleError = function (error) {
        this.logService.error(error);
        return Rx_1.Observable.throw(error || 'Server error');
    };
    return PeopleService;
}());
PeopleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _b || Object])
], PeopleService);
exports.PeopleService = PeopleService;
var _a, _b;


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/user.01b46903dd0c2cb3b0abc908f3095d93.jpg";

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

/***/ 33:
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
var Observable_1 = __webpack_require__(23);
var PeopleSearchComponent = (function () {
    function PeopleSearchComponent() {
        var _this = this;
        this.searchPeople = new core_1.EventEmitter();
        this.success = new core_1.EventEmitter();
        this.closeSearch = new core_1.EventEmitter();
        this.searchUser = new forms_1.FormControl();
        this.users = [];
        this.searchUser
            .valueChanges
            .debounceTime(200)
            .subscribe(function (event) {
            if (event && event.trim()) {
                _this.searchPeople.emit(event);
            }
            else {
                _this.users = [];
            }
        });
    }
    PeopleSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.results.subscribe(function (list) {
            _this.users = list;
        });
    };
    PeopleSearchComponent.prototype.onRowClick = function (user) {
        this.selectedUser = user;
    };
    PeopleSearchComponent.prototype.closeSearchList = function () {
        this.closeSearch.emit();
    };
    PeopleSearchComponent.prototype.involveUserAndClose = function () {
        this.involveUser();
        this.closeSearchList();
    };
    PeopleSearchComponent.prototype.involveUser = function () {
        var _this = this;
        if (this.selectedUser === undefined) {
            return;
        }
        this.success.emit(this.selectedUser);
        this.users = this.users.filter(function (user) {
            _this.searchUser.reset();
            return user.id !== _this.selectedUser.id;
        });
    };
    PeopleSearchComponent.prototype.getDisplayUser = function (firstName, lastName, delimiter) {
        if (delimiter === void 0) { delimiter = '-'; }
        firstName = (firstName !== null ? firstName : '');
        lastName = (lastName !== null ? lastName : '');
        return firstName + delimiter + lastName;
    };
    PeopleSearchComponent.prototype.getInitialUserName = function (firstName, lastName) {
        firstName = (firstName !== null && firstName !== '' ? firstName[0] : '');
        lastName = (lastName !== null && lastName !== '' ? lastName[0] : '');
        return this.getDisplayUser(firstName, lastName, '');
    };
    PeopleSearchComponent.prototype.hasUsers = function () {
        return (this.users && this.users.length > 0);
    };
    PeopleSearchComponent.prototype.onErrorImageLoad = function (user) {
        if (user.userImage) {
            user.userImage = null;
        }
    };
    return PeopleSearchComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof Observable_1.Observable !== "undefined" && Observable_1.Observable) === "function" && _a || Object)
], PeopleSearchComponent.prototype, "results", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], PeopleSearchComponent.prototype, "searchPeople", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], PeopleSearchComponent.prototype, "success", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PeopleSearchComponent.prototype, "closeSearch", void 0);
PeopleSearchComponent = __decorate([
    core_1.Component({
        selector: 'adf-people-search, activiti-people-search',
        template: __webpack_require__(588),
        styles: [__webpack_require__(759)]
    }),
    __metadata("design:paramtypes", [])
], PeopleSearchComponent);
exports.PeopleSearchComponent = PeopleSearchComponent;
var PeopleSearchTitleDirective = (function () {
    function PeopleSearchTitleDirective() {
    }
    return PeopleSearchTitleDirective;
}());
PeopleSearchTitleDirective = __decorate([
    core_1.Directive({ selector: 'people-search-title' })
], PeopleSearchTitleDirective);
exports.PeopleSearchTitleDirective = PeopleSearchTitleDirective;
var PeopleSearchActionLabelDirective = (function () {
    function PeopleSearchActionLabelDirective() {
    }
    return PeopleSearchActionLabelDirective;
}());
PeopleSearchActionLabelDirective = __decorate([
    core_1.Directive({ selector: 'people-search-action-label' })
], PeopleSearchActionLabelDirective);
exports.PeopleSearchActionLabelDirective = PeopleSearchActionLabelDirective;
var _a, _b, _c;


/***/ }),

/***/ 34:
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
var filter_model_1 = __webpack_require__(70);
var task_details_model_1 = __webpack_require__(63);
var user_model_1 = __webpack_require__(71);
var people_service_1 = __webpack_require__(21);
var tasklist_service_1 = __webpack_require__(15);
var TaskDetailsComponent = (function () {
    function TaskDetailsComponent(activitiTaskList, authService, peopleService, logService, cardViewUpdateService) {
        var _this = this;
        this.activitiTaskList = activitiTaskList;
        this.authService = authService;
        this.peopleService = peopleService;
        this.logService = logService;
        this.cardViewUpdateService = cardViewUpdateService;
        this.debugMode = false;
        this.showNextTask = true;
        this.showHeader = true;
        this.showHeaderContent = true;
        this.showInvolvePeople = true;
        this.showComments = true;
        this.showChecklist = true;
        this.showFormTitle = true;
        this.showFormCompleteButton = true;
        this.showFormSaveButton = true;
        this.readOnlyForm = false;
        this.showFormRefreshButton = true;
        this.peopleIconImageUrl = __webpack_require__(215);
        this.fieldValidators = [];
        this.formSaved = new core_1.EventEmitter();
        this.formCompleted = new core_1.EventEmitter();
        this.formContentClicked = new core_1.EventEmitter();
        this.formLoaded = new core_1.EventEmitter();
        this.taskCreated = new core_1.EventEmitter();
        this.taskDeleted = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.executeOutcome = new core_1.EventEmitter();
        this.assignTask = new core_1.EventEmitter();
        this.taskFormName = null;
        this.taskPeople = [];
        this.showAssignee = false;
        this.peopleSearch$ = new Rx_1.Observable(function (observer) { return _this.peopleSearchObserver = observer; }).share();
    }
    TaskDetailsComponent.prototype.ngOnInit = function () {
        if (this.taskId) {
            this.loadDetails(this.taskId);
        }
        this.cardViewUpdateService.itemUpdated$.subscribe(this.updateTaskDetails.bind(this));
        this.cardViewUpdateService.itemClicked$.subscribe(this.clickTaskDetails.bind(this));
    };
    TaskDetailsComponent.prototype.ngOnChanges = function (changes) {
        var taskId = changes.taskId;
        this.showAssignee = false;
        if (taskId && !taskId.currentValue) {
            this.reset();
        }
        else if (taskId && taskId.currentValue) {
            this.taskFormName = null;
            this.loadDetails(taskId.currentValue);
        }
    };
    TaskDetailsComponent.prototype.reset = function () {
        this.taskDetails = null;
    };
    TaskDetailsComponent.prototype.hasFormKey = function () {
        return (this.taskDetails
            && this.taskDetails.formKey
            && this.taskDetails.formKey !== 'null');
    };
    TaskDetailsComponent.prototype.isTaskActive = function () {
        return this.taskDetails && this.taskDetails.duration === null;
    };
    TaskDetailsComponent.prototype.updateTaskDetails = function (updateNotification) {
        var _this = this;
        this.activitiTaskList.updateTask(this.taskId, updateNotification.changed)
            .subscribe(function () {
            _this.loadDetails(_this.taskId);
        });
    };
    TaskDetailsComponent.prototype.clickTaskDetails = function (clickNotification) {
        console.log(clickNotification.target);
        if (clickNotification.target.key === 'assignee') {
            this.showAssignee = true;
        }
    };
    TaskDetailsComponent.prototype.loadDetails = function (taskId) {
        var _this = this;
        this.taskPeople = [];
        this.readOnlyForm = false;
        if (taskId) {
            this.activitiTaskList.getTaskDetails(taskId).subscribe(function (res) {
                _this.taskDetails = res;
                if (_this.taskDetails.name === 'null') {
                    _this.taskDetails.name = 'No name';
                }
                var endDate = res.endDate;
                _this.readOnlyForm = _this.readOnlyForm ? _this.readOnlyForm : !!(endDate && !isNaN(endDate.getTime()));
                if (_this.taskDetails && _this.taskDetails.involvedPeople) {
                    _this.taskDetails.involvedPeople.forEach(function (user) {
                        _this.taskPeople.push(new user_model_1.User(user));
                    });
                }
            });
        }
    };
    TaskDetailsComponent.prototype.isAssigned = function () {
        return this.taskDetails.assignee ? true : false;
    };
    TaskDetailsComponent.prototype.isAssignedToMe = function () {
        return this.taskDetails.assignee.email === this.authService.getBpmUsername();
    };
    TaskDetailsComponent.prototype.loadNextTask = function (processInstanceId, processDefinitionId) {
        var _this = this;
        var requestNode = new filter_model_1.TaskQueryRequestRepresentationModel({
            processInstanceId: processInstanceId,
            processDefinitionId: processDefinitionId
        });
        this.activitiTaskList.getTasks(requestNode).subscribe(function (response) {
            if (response && response.length > 0) {
                _this.taskDetails = new task_details_model_1.TaskDetailsModel(response[0]);
            }
            else {
                _this.reset();
            }
        }, function (error) {
            _this.onError.emit(error);
        });
    };
    TaskDetailsComponent.prototype.onComplete = function () {
        var _this = this;
        this.activitiTaskList.completeTask(this.taskId).subscribe(function (res) { return _this.onFormCompleted(null); });
    };
    TaskDetailsComponent.prototype.onFormContentClick = function (content) {
        this.formContentClicked.emit(content);
    };
    TaskDetailsComponent.prototype.onFormSaved = function (form) {
        this.formSaved.emit(form);
    };
    TaskDetailsComponent.prototype.onFormCompleted = function (form) {
        this.formCompleted.emit(form);
        if (this.showNextTask && (this.taskDetails.processInstanceId || this.taskDetails.processDefinitionId)) {
            this.loadNextTask(this.taskDetails.processInstanceId, this.taskDetails.processDefinitionId);
        }
    };
    TaskDetailsComponent.prototype.onFormLoaded = function (form) {
        this.taskFormName = (form && form.name ? form.name : null);
        this.formLoaded.emit(form);
    };
    TaskDetailsComponent.prototype.onChecklistTaskCreated = function (task) {
        this.taskCreated.emit(task);
    };
    TaskDetailsComponent.prototype.onChecklistTaskDeleted = function (taskId) {
        this.taskDeleted.emit(taskId);
    };
    TaskDetailsComponent.prototype.onFormError = function (error) {
        this.errorDialog.nativeElement.showModal();
        this.onError.emit(error);
    };
    TaskDetailsComponent.prototype.onFormExecuteOutcome = function (event) {
        this.executeOutcome.emit(event);
    };
    TaskDetailsComponent.prototype.closeErrorDialog = function () {
        this.errorDialog.nativeElement.close();
    };
    TaskDetailsComponent.prototype.onClaimTask = function (taskId) {
        this.loadDetails(taskId);
    };
    TaskDetailsComponent.prototype.toggleHeaderContent = function () {
        this.showHeaderContent = !this.showHeaderContent;
    };
    TaskDetailsComponent.prototype.isCompletedTask = function () {
        return this.taskDetails && this.taskDetails.endDate ? true : undefined;
    };
    TaskDetailsComponent.prototype.searchUser = function (searchedWord) {
        var _this = this;
        this.peopleService.getWorkflowUsers(null, searchedWord)
            .subscribe(function (users) {
            users = users.filter(function (user) { return user.id !== _this.taskDetails.assignee.id; });
            _this.peopleSearchObserver.next(users);
        }, function (error) { return _this.logService.error('Could not load users'); });
    };
    TaskDetailsComponent.prototype.onCloseSearch = function () {
        this.showAssignee = false;
        console.log(this.taskDetails.assignee);
    };
    TaskDetailsComponent.prototype.assignTaskToUser = function (selectedUser) {
        var _this = this;
        this.activitiTaskList.assignTask(this.taskDetails.id, selectedUser).subscribe(function (res) {
            _this.logService.info('Task Assigned to ' + selectedUser.email);
            _this.assignTask.emit();
        });
        this.showAssignee = false;
    };
    TaskDetailsComponent.prototype.getTaskHeaderViewClass = function () {
        if (this.showAssignee) {
            return 'assign-edit-view';
        }
        else {
            return 'default-view';
        }
    };
    return TaskDetailsComponent;
}());
__decorate([
    core_1.ViewChild('activiticomments'),
    __metadata("design:type", Object)
], TaskDetailsComponent.prototype, "activiticomments", void 0);
__decorate([
    core_1.ViewChild('activitichecklist'),
    __metadata("design:type", Object)
], TaskDetailsComponent.prototype, "activitichecklist", void 0);
__decorate([
    core_1.ViewChild('errorDialog'),
    __metadata("design:type", typeof (_a = typeof core_1.DebugElement !== "undefined" && core_1.DebugElement) === "function" && _a || Object)
], TaskDetailsComponent.prototype, "errorDialog", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TaskDetailsComponent.prototype, "debugMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskDetailsComponent.prototype, "taskId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TaskDetailsComponent.prototype, "showNextTask", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TaskDetailsComponent.prototype, "showHeader", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TaskDetailsComponent.prototype, "showHeaderContent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TaskDetailsComponent.prototype, "showInvolvePeople", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TaskDetailsComponent.prototype, "showComments", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TaskDetailsComponent.prototype, "showChecklist", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TaskDetailsComponent.prototype, "showFormTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TaskDetailsComponent.prototype, "showFormCompleteButton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TaskDetailsComponent.prototype, "showFormSaveButton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TaskDetailsComponent.prototype, "readOnlyForm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TaskDetailsComponent.prototype, "showFormRefreshButton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskDetailsComponent.prototype, "peopleIconImageUrl", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TaskDetailsComponent.prototype, "fieldValidators", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], TaskDetailsComponent.prototype, "formSaved", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], TaskDetailsComponent.prototype, "formCompleted", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], TaskDetailsComponent.prototype, "formContentClicked", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], TaskDetailsComponent.prototype, "formLoaded", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_f = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _f || Object)
], TaskDetailsComponent.prototype, "taskCreated", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_g = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _g || Object)
], TaskDetailsComponent.prototype, "taskDeleted", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_h = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _h || Object)
], TaskDetailsComponent.prototype, "onError", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_j = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _j || Object)
], TaskDetailsComponent.prototype, "executeOutcome", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_k = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _k || Object)
], TaskDetailsComponent.prototype, "assignTask", void 0);
TaskDetailsComponent = __decorate([
    core_1.Component({
        selector: 'adf-task-details, activiti-task-details',
        template: __webpack_require__(592),
        styles: [__webpack_require__(763)],
        providers: [
            ng2_alfresco_core_1.CardViewUpdateService
        ]
    }),
    __metadata("design:paramtypes", [typeof (_l = typeof tasklist_service_1.TaskListService !== "undefined" && tasklist_service_1.TaskListService) === "function" && _l || Object, typeof (_m = typeof ng2_alfresco_core_1.AlfrescoAuthenticationService !== "undefined" && ng2_alfresco_core_1.AlfrescoAuthenticationService) === "function" && _m || Object, typeof (_o = typeof people_service_1.PeopleService !== "undefined" && people_service_1.PeopleService) === "function" && _o || Object, typeof (_p = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _p || Object, typeof (_q = typeof ng2_alfresco_core_1.CardViewUpdateService !== "undefined" && ng2_alfresco_core_1.CardViewUpdateService) === "function" && _q || Object])
], TaskDetailsComponent);
exports.TaskDetailsComponent = TaskDetailsComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;


/***/ }),

/***/ 353:
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
var TaskDetailsEvent = (function () {
    function TaskDetailsEvent(value) {
        this._defaultPrevented = false;
        this._value = value;
    }
    Object.defineProperty(TaskDetailsEvent.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskDetailsEvent.prototype, "defaultPrevented", {
        get: function () {
            return this._defaultPrevented;
        },
        enumerable: true,
        configurable: true
    });
    TaskDetailsEvent.prototype.preventDefault = function () {
        this._defaultPrevented = true;
    };
    return TaskDetailsEvent;
}());
exports.TaskDetailsEvent = TaskDetailsEvent;


/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/empty_doc_lib.a89c064e4edfa54d2e347bf594947219.svg";

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".mdl-card__media {\n    margin: 0;\n}\n\n.mdl-card__media > img {\n    max-width: 100%;\n}\n\n.mdl-card__actions {\n    display: flex;\n    box-sizing:border-box;\n    align-items: center;\n}\n.mdl-card__actions > .mdl-button--icon {\n    margin-right: 3px;\n    margin-left: 3px;\n}\n\n.mdl-card:hover {\n    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .2);\n    cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ":host {\n    width: 100%;\n}\n\n.application-title {\n    color: white;\n}\n\n.logo {\n    position: absolute;\n    right: 20px;\n    top: 20px;\n}\n.logo i{\n    font-size: 70px;\n}\n.theme-1 {\n    background-color: #269abc;\n}\n.theme-1 .logo i {\n    color: #168aac;\n}\n.theme-1 .mdl-card__actions i {\n    color: #168aac;\n}\n.theme-1 .mdl-card__actions i:hover {\n    color: #b7dfea;\n}\n.theme-2 {\n    background-color: #7da9b0;\n}\n.theme-2 .logo i {\n    color: #6d99a0;\n}\n.theme-2 .mdl-card__actions i {\n    color: #6d99a0;\n}\n.theme-2 .mdl-card__actions i:hover {\n color: #def2f5;\n}\n.theme-3 {\n    background-color: #7689ab;\n}\n.theme-3 .logo i {\n    color: #66799b;\n}\n.theme-3 .mdl-card__actions i {\n    color: #66799b;\n}\n.theme-3 .mdl-card__actions i:hover {\n    color: #a2b4d6;\n}\n.theme-4 {\n    background-color: #c74e3e;\n}\n.theme-4 .logo i {\n    color: #b73e2e;\n}\n.theme-4 .mdl-card__actions i {\n    color: #b73e2e;\n}\n.theme-4 .mdl-card__actions i:hover {\n    color: #de8b80;\n}\n.theme-5 {\n    background-color: #fab96c;\n}\n.theme-5 .logo i {\n    color: #eaa95c;\n}\n.theme-5 .mdl-card__actions i {\n    color: #eaa95c;\n}\n.theme-5 .mdl-card__actions i:hover {\n    color: #fdd9ae;\n}\n.theme-6 {\n    background-color: #759d4c;\n}\n.theme-6 .logo i {\n    color: #658d3c;\n}\n.theme-6 .mdl-card__actions i {\n    color: #658d3c;\n}\n.theme-6 .mdl-card__actions i:hover {\n    color: #a8d07f;\n}\n.theme-7 {\n    background-color: #b1b489;\n}\n.theme-7 .logo i {\n    color: #a1a479;\n}\n.theme-7 .mdl-card__actions i {\n    color: #a1a479;\n}\n.theme-7 .mdl-card__actions i:hover {\n    color: #d9dcb2;\n}\n.theme-8 {\n    background-color: #a17299;\n}\n.theme-8 .logo i {\n    color: #916289;\n}\n.theme-8 .mdl-card__actions i {\n    color: #916289;\n}\n.theme-8 .mdl-card__actions i:hover {\n    color: #d0a8c9;\n}\n.theme-9 {\n    background-color: #696c67;\n}\n.theme-9 .logo i {\n    color: #595c57;\n}\n.theme-9 .mdl-card__actions i {\n    color: #595c57;\n}\n.theme-9 .mdl-card__actions i:hover {\n    color: #a6a9a4;\n}\n.theme-10 {\n    background-color: #cabb33;\n}\n.theme-10 .logo i {\n    color: #baab23;\n}\n.theme-10 .mdl-card__actions i {\n    color: #baab23;\n}\n.theme-10 .mdl-card__actions i:hover {\n    color: #efe79e;\n}\n.selectedIcon{\n    color: #e9f1f3!important;\n}\n", ""]);

// exports


/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ":host {\n    width: 100%;\n}\n\n.activiti-label {\n    font-weight: bolder;\n}\n\n.material-icons:hover {\n    color: rgb(255, 152, 0);\n}\n\n.mdl-tooltip {\n    will-change: unset;\n}\n\n.material-icons {\n    cursor: pointer;\n}\n\n.mat-input-container {\n    width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".adf-comments-container {\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n}\n\n.adf-comments-header {\n    padding: 10px 20px;\n    font-size: 14px;\n    font-family: Muli;\n    font-weight: 600;\n    border-bottom: 1px solid #e1e1e1;\n    color: #a1a1a1;\n}\n\n.adf-comments-input-container {\n    padding: 0 15px;\n    width: calc(100% - 30px);\n    padding-top: 8px;\n    border-bottom: 1px solid #e1e1e1;\n}\n\n.adf-full-width {\n    width: 100%;\n}\n\nadf-comment-list {\n    float: left;\n    overflow: auto;\n    height: calc(100% - 101px);\n    width: 100%;\n}", ""]);

// exports


/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "alfresco-datatable >>> .column-header {\n    color: #232323;\n    font-size: 15px;\n}\n\nalfresco-datatable >>> .data-cell {\n    cursor: pointer !important;\n}\n\nalfresco-datatable >>> .cell-value{\n    width: 250px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis\n}\n\n.adf-task-list-loading-margin {\n    margin-left: calc((100% - 100px) / 2);\n    margin-right: calc((100% - 100px) / 2);\n}\n\n.no-content-message {\n    font-family: Muli;\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    opacity: 0.54;\n    color: #000;\n}", ""]);

// exports


/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(421);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(422);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(423);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(424);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(425);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 463:
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
var Form = (function () {
    function Form(id, name) {
        this.name = name;
        this.id = id;
    }
    return Form;
}());
exports.Form = Form;


/***/ }),

/***/ 49:
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
var Observable_1 = __webpack_require__(23);
var icon_model_1 = __webpack_require__(196);
var tasklist_service_1 = __webpack_require__(15);
var AppsListComponent = AppsListComponent_1 = (function () {
    function AppsListComponent(activitiTaskList) {
        var _this = this;
        this.activitiTaskList = activitiTaskList;
        this.layoutType = AppsListComponent_1.LAYOUT_GRID;
        this.appClick = new core_1.EventEmitter();
        this.error = new core_1.EventEmitter();
        this.appList = [];
        this.apps$ = new Observable_1.Observable(function (observer) { return _this.appsObserver = observer; }).share();
    }
    AppsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.isValidType()) {
            this.setDefaultLayoutType();
        }
        this.apps$.subscribe(function (app) {
            _this.appList.push(app);
        });
        this.iconsMDL = new icon_model_1.IconModel();
        this.load();
    };
    AppsListComponent.prototype.load = function () {
        var _this = this;
        this.activitiTaskList.getDeployedApplications().subscribe(function (res) {
            res = _this.filterApps(res);
            res.forEach(function (app) {
                if (app.defaultAppId === AppsListComponent_1.DEFAULT_TASKS_APP) {
                    app.name = AppsListComponent_1.DEFAULT_TASKS_APP_NAME;
                    app.theme = AppsListComponent_1.DEFAULT_TASKS_APP_THEME;
                    app.icon = AppsListComponent_1.DEFAULT_TASKS_APP_ICON;
                    _this.appsObserver.next(app);
                }
                else if (app.deploymentId) {
                    _this.appsObserver.next(app);
                }
            });
        }, function (err) {
            _this.error.emit(err);
        });
    };
    AppsListComponent.prototype.selectApp = function (app) {
        this.currentApp = app;
        this.appClick.emit(app);
    };
    AppsListComponent.prototype.isSelected = function (appId) {
        return (this.currentApp !== undefined && appId === this.currentApp.id);
    };
    AppsListComponent.prototype.filterApps = function (apps) {
        var _this = this;
        var filteredApps = [];
        if (this.filtersAppId) {
            apps.filter(function (app) {
                _this.filtersAppId.forEach(function (filter) {
                    if (app.defaultAppId === filter.defaultAppId ||
                        app.deploymentId === filter.deploymentId ||
                        app.name === filter.name ||
                        app.id === filter.id ||
                        app.modelId === filter.modelId ||
                        app.tenantId === filter.tenantId) {
                        filteredApps.push(app);
                    }
                });
            });
        }
        else {
            return apps;
        }
        return filteredApps;
    };
    AppsListComponent.prototype.isValidType = function () {
        if (this.layoutType && (this.layoutType === AppsListComponent_1.LAYOUT_LIST || this.layoutType === AppsListComponent_1.LAYOUT_GRID)) {
            return true;
        }
        return false;
    };
    AppsListComponent.prototype.setDefaultLayoutType = function () {
        this.layoutType = AppsListComponent_1.LAYOUT_GRID;
    };
    AppsListComponent.prototype.isList = function () {
        return this.layoutType === AppsListComponent_1.LAYOUT_LIST;
    };
    AppsListComponent.prototype.isGrid = function () {
        return this.layoutType === AppsListComponent_1.LAYOUT_GRID;
    };
    AppsListComponent.prototype.isEmpty = function () {
        return this.appList.length === 0;
    };
    AppsListComponent.prototype.getTheme = function (app) {
        return app.theme ? app.theme : '';
    };
    AppsListComponent.prototype.getBackgroundIcon = function (app) {
        return this.iconsMDL.mapGlyphiconToMaterialDesignIcons(app.icon);
    };
    return AppsListComponent;
}());
AppsListComponent.LAYOUT_LIST = 'LIST';
AppsListComponent.LAYOUT_GRID = 'GRID';
AppsListComponent.DEFAULT_TASKS_APP = 'tasks';
AppsListComponent.DEFAULT_TASKS_APP_NAME = 'Task App';
AppsListComponent.DEFAULT_TASKS_APP_THEME = 'theme-2';
AppsListComponent.DEFAULT_TASKS_APP_ICON = 'glyphicon-asterisk';
AppsListComponent.DEFAULT_TASKS_APP_MATERIAL_ICON = 'favorite_border';
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AppsListComponent.prototype, "layoutType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AppsListComponent.prototype, "filtersAppId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], AppsListComponent.prototype, "appClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], AppsListComponent.prototype, "error", void 0);
AppsListComponent = AppsListComponent_1 = __decorate([
    core_1.Component({
        selector: 'adf-apps, activiti-apps',
        template: __webpack_require__(582),
        styles: [__webpack_require__(438), __webpack_require__(437)],
        providers: [tasklist_service_1.TaskListService]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof tasklist_service_1.TaskListService !== "undefined" && tasklist_service_1.TaskListService) === "function" && _c || Object])
], AppsListComponent);
exports.AppsListComponent = AppsListComponent;
var AppsListComponent_1, _a, _b, _c;


/***/ }),

/***/ 50:
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
var task_details_model_1 = __webpack_require__(63);
var tasklist_service_1 = __webpack_require__(15);
var ChecklistComponent = (function () {
    function ChecklistComponent(activitiTaskList) {
        var _this = this;
        this.activitiTaskList = activitiTaskList;
        this.readOnly = false;
        this.checklistTaskCreated = new core_1.EventEmitter();
        this.checklistTaskDeleted = new core_1.EventEmitter();
        this.error = new core_1.EventEmitter();
        this.checklist = [];
        this.task$ = new Rx_1.Observable(function (observer) { return _this.taskObserver = observer; }).share();
    }
    ChecklistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.task$.subscribe(function (task) {
            _this.checklist.push(task);
        });
    };
    ChecklistComponent.prototype.ngOnChanges = function (changes) {
        var taskId = changes['taskId'];
        if (taskId && taskId.currentValue) {
            this.getTaskChecklist(taskId.currentValue);
            return;
        }
    };
    ChecklistComponent.prototype.getTaskChecklist = function (taskId) {
        var _this = this;
        this.checklist = [];
        if (this.taskId) {
            this.activitiTaskList.getTaskChecklist(this.taskId).subscribe(function (res) {
                res.forEach(function (task) {
                    _this.taskObserver.next(task);
                });
            }, function (error) {
                _this.error.emit(error);
            });
        }
        else {
            this.checklist = [];
        }
    };
    ChecklistComponent.prototype.showDialog = function () {
        if (this.dialog) {
            if (!this.dialog.nativeElement.showModal) {
                dialogPolyfill.registerDialog(this.dialog.nativeElement);
            }
            this.dialog.nativeElement.showModal();
        }
    };
    ChecklistComponent.prototype.add = function () {
        var _this = this;
        var newTask = new task_details_model_1.TaskDetailsModel({
            name: this.taskName,
            parentTaskId: this.taskId,
            assignee: { id: this.assignee }
        });
        this.activitiTaskList.addTask(newTask).subscribe(function (res) {
            _this.checklist.push(res);
            _this.checklistTaskCreated.emit(res);
            _this.taskName = '';
        }, function (error) {
            _this.error.emit(error);
        });
        this.cancel();
    };
    ChecklistComponent.prototype.delete = function (taskId) {
        var _this = this;
        this.activitiTaskList.deleteTask(taskId).subscribe(function () {
            _this.checklist = _this.checklist.filter(function (check) { return check.id !== taskId; });
            _this.checklistTaskDeleted.emit(taskId);
        }, function (error) {
            _this.error.emit(error);
        });
    };
    ChecklistComponent.prototype.cancel = function () {
        if (this.dialog) {
            this.dialog.nativeElement.close();
        }
        this.taskName = '';
    };
    return ChecklistComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChecklistComponent.prototype, "taskId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ChecklistComponent.prototype, "readOnly", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChecklistComponent.prototype, "assignee", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], ChecklistComponent.prototype, "checklistTaskCreated", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], ChecklistComponent.prototype, "checklistTaskDeleted", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], ChecklistComponent.prototype, "error", void 0);
__decorate([
    core_1.ViewChild('dialog'),
    __metadata("design:type", Object)
], ChecklistComponent.prototype, "dialog", void 0);
ChecklistComponent = __decorate([
    core_1.Component({
        selector: 'adf-checklist, activiti-checklist',
        template: __webpack_require__(583),
        styles: [__webpack_require__(439)],
        providers: [tasklist_service_1.TaskListService]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof tasklist_service_1.TaskListService !== "undefined" && tasklist_service_1.TaskListService) === "function" && _d || Object])
], ChecklistComponent);
exports.ChecklistComponent = ChecklistComponent;
var _a, _b, _c, _d;


/***/ }),

/***/ 51:
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
var people_service_1 = __webpack_require__(21);
var tasklist_service_1 = __webpack_require__(15);
var CommentsComponent = (function () {
    function CommentsComponent(activitiTaskList, peopleService) {
        var _this = this;
        this.activitiTaskList = activitiTaskList;
        this.peopleService = peopleService;
        this.readOnly = false;
        this.error = new core_1.EventEmitter();
        this.comments = [];
        this.beingAdded = false;
        this.comment$ = new Rx_1.Observable(function (observer) { return _this.commentObserver = observer; }).share();
        this.comment$.subscribe(function (comment) {
            _this.comments.push(comment);
        });
    }
    CommentsComponent.prototype.ngOnChanges = function (changes) {
        var taskId = changes['taskId'];
        if (taskId) {
            if (taskId.currentValue) {
                this.getTaskComments(taskId.currentValue);
            }
            else {
                this.resetComments();
            }
        }
    };
    CommentsComponent.prototype.getTaskComments = function (taskId) {
        var _this = this;
        this.resetComments();
        if (taskId) {
            this.activitiTaskList.getComments(taskId).subscribe(function (res) {
                res = res.sort(function (comment1, comment2) {
                    var date1 = new Date(comment1.created);
                    var date2 = new Date(comment2.created);
                    return date1 > date2 ? -1 : date1 < date2 ? 1 : 0;
                });
                res.forEach(function (comment) {
                    comment.createdBy.userImage = _this.peopleService.getUserImage(comment.createdBy);
                    _this.commentObserver.next(comment);
                });
            }, function (err) {
                _this.error.emit(err);
            });
        }
    };
    CommentsComponent.prototype.resetComments = function () {
        this.comments = [];
    };
    CommentsComponent.prototype.add = function () {
        var _this = this;
        if (this.message && this.message.trim() && !this.beingAdded) {
            this.beingAdded = true;
            this.activitiTaskList.addComment(this.taskId, this.message)
                .subscribe(function (res) {
                res.createdBy.userImage = _this.peopleService.getUserImage(res.createdBy);
                _this.comments.unshift(res);
                _this.message = '';
                _this.beingAdded = false;
            }, function (err) {
                _this.error.emit(err);
                _this.beingAdded = false;
            });
        }
    };
    CommentsComponent.prototype.clear = function () {
        this.message = '';
    };
    CommentsComponent.prototype.isReadOnly = function () {
        return this.readOnly;
    };
    return CommentsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CommentsComponent.prototype, "taskId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CommentsComponent.prototype, "readOnly", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], CommentsComponent.prototype, "error", void 0);
CommentsComponent = __decorate([
    core_1.Component({
        selector: 'adf-comments, activiti-comments',
        template: __webpack_require__(585),
        styles: [__webpack_require__(440)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof tasklist_service_1.TaskListService !== "undefined" && tasklist_service_1.TaskListService) === "function" && _b || Object, typeof (_c = typeof people_service_1.PeopleService !== "undefined" && people_service_1.PeopleService) === "function" && _c || Object])
], CommentsComponent);
exports.CommentsComponent = CommentsComponent;
var _a, _b, _c;


/***/ }),

/***/ 52:
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
var AttachmentComponent = (function () {
    function AttachmentComponent(activitiContentService) {
        this.activitiContentService = activitiContentService;
        this.error = new core_1.EventEmitter();
        this.success = new core_1.EventEmitter();
    }
    AttachmentComponent.prototype.ngOnChanges = function (changes) {
        if (changes['taskId'] && changes['taskId'].currentValue) {
            this.taskId = changes['taskId'].currentValue;
        }
    };
    AttachmentComponent.prototype.onFileUpload = function (event) {
        var _this = this;
        var filesList = event.detail.files.map(function (obj) { return obj.file; });
        for (var _i = 0, filesList_1 = filesList; _i < filesList_1.length; _i++) {
            var fileInfoObj = filesList_1[_i];
            var file = fileInfoObj;
            var opts = {
                isRelatedContent: true
            };
            this.activitiContentService.createTaskRelatedContent(this.taskId, file, opts).subscribe(function (res) {
                _this.success.emit(res);
            }, function (err) {
                _this.error.emit(err);
            });
        }
    };
    return AttachmentComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AttachmentComponent.prototype, "taskId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], AttachmentComponent.prototype, "error", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], AttachmentComponent.prototype, "success", void 0);
AttachmentComponent = __decorate([
    core_1.Component({
        selector: 'adf-create-task-attachment',
        styles: [__webpack_require__(757)],
        template: __webpack_require__(586)
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof ng2_activiti_form_1.ActivitiContentService !== "undefined" && ng2_activiti_form_1.ActivitiContentService) === "function" && _c || Object])
], AttachmentComponent);
exports.AttachmentComponent = AttachmentComponent;
var _a, _b, _c;


/***/ }),

/***/ 53:
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
var task_details_component_1 = __webpack_require__(34);
var NoTaskDetailsTemplateDirective = (function () {
    function NoTaskDetailsTemplateDirective(activitiTaskDetails) {
        this.activitiTaskDetails = activitiTaskDetails;
    }
    NoTaskDetailsTemplateDirective.prototype.ngAfterContentInit = function () {
        this.activitiTaskDetails.noTaskDetailsTemplateComponent = this.template;
    };
    return NoTaskDetailsTemplateDirective;
}());
__decorate([
    core_1.ContentChild(core_1.TemplateRef),
    __metadata("design:type", Object)
], NoTaskDetailsTemplateDirective.prototype, "template", void 0);
NoTaskDetailsTemplateDirective = __decorate([
    core_1.Directive({
        selector: 'no-task-details-template'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof task_details_component_1.TaskDetailsComponent !== "undefined" && task_details_component_1.TaskDetailsComponent) === "function" && _a || Object])
], NoTaskDetailsTemplateDirective);
exports.NoTaskDetailsTemplateDirective = NoTaskDetailsTemplateDirective;
var _a;


/***/ }),

/***/ 54:
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
var user_event_model_1 = __webpack_require__(198);
var PeopleListComponent = (function () {
    function PeopleListComponent() {
        this.actions = false;
        this.clickRow = new core_1.EventEmitter();
        this.clickAction = new core_1.EventEmitter();
    }
    PeopleListComponent.prototype.ngAfterContentInit = function () {
        this.peopleDataTable.columnList = this.columnList;
    };
    PeopleListComponent.prototype.ngAfterViewInit = function () {
        this.setupMaterialComponents(componentHandler);
    };
    PeopleListComponent.prototype.setupMaterialComponents = function (handler) {
        var isUpgraded = false;
        if (handler) {
            handler.upgradeAllRegistered();
            isUpgraded = true;
        }
        return isUpgraded;
    };
    PeopleListComponent.prototype.selectUser = function (event) {
        this.user = event.value.obj;
        this.clickRow.emit(this.user);
    };
    PeopleListComponent.prototype.hasActions = function () {
        return this.actions;
    };
    PeopleListComponent.prototype.onShowRowActionsMenu = function (event) {
        var removeAction = {
            title: 'Remove',
            name: 'remove'
        };
        event.value.actions = [
            removeAction
        ];
    };
    PeopleListComponent.prototype.onExecuteRowAction = function (event) {
        var args = event.value;
        var action = args.action;
        this.clickAction.emit(new user_event_model_1.UserEventModel({ type: action.name, value: args.row.obj }));
    };
    return PeopleListComponent;
}());
__decorate([
    core_1.ContentChild(ng2_alfresco_core_1.DataColumnListComponent),
    __metadata("design:type", typeof (_a = typeof ng2_alfresco_core_1.DataColumnListComponent !== "undefined" && ng2_alfresco_core_1.DataColumnListComponent) === "function" && _a || Object)
], PeopleListComponent.prototype, "columnList", void 0);
__decorate([
    core_1.ViewChild(ng2_alfresco_datatable_1.DataTableComponent),
    __metadata("design:type", typeof (_b = typeof ng2_alfresco_datatable_1.DataTableComponent !== "undefined" && ng2_alfresco_datatable_1.DataTableComponent) === "function" && _b || Object)
], PeopleListComponent.prototype, "peopleDataTable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PeopleListComponent.prototype, "users", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PeopleListComponent.prototype, "actions", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], PeopleListComponent.prototype, "clickRow", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], PeopleListComponent.prototype, "clickAction", void 0);
PeopleListComponent = __decorate([
    core_1.Component({
        selector: 'adf-people-list',
        template: __webpack_require__(587),
        styles: [__webpack_require__(758)]
    })
], PeopleListComponent);
exports.PeopleListComponent = PeopleListComponent;
var _a, _b, _c, _d;


/***/ }),

/***/ 55:
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
var people_search_component_1 = __webpack_require__(33);
var people_service_1 = __webpack_require__(21);
var PeopleComponent = (function () {
    function PeopleComponent(peopleService, logService) {
        var _this = this;
        this.peopleService = peopleService;
        this.logService = logService;
        this.iconImageUrl = __webpack_require__(215);
        this.people = [];
        this.taskId = '';
        this.readOnly = false;
        this.showAssignment = false;
        this.peopleSearch$ = new Rx_1.Observable(function (observer) { return _this.peopleSearchObserver = observer; }).share();
    }
    PeopleComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.people && this.people.length > 0) {
            this.people.forEach(function (person) {
                person.userImage = _this.peopleService.getUserImage(person);
            });
        }
    };
    PeopleComponent.prototype.ngAfterViewInit = function () {
        this.setupMaterialComponents(componentHandler);
    };
    PeopleComponent.prototype.setupMaterialComponents = function (handler) {
        var isUpgraded = false;
        if (handler) {
            handler.upgradeAllRegistered();
            isUpgraded = true;
        }
        return isUpgraded;
    };
    PeopleComponent.prototype.involveUserAndCloseSearch = function () {
        if (this.peopleSearch) {
            this.peopleSearch.involveUserAndClose();
        }
    };
    PeopleComponent.prototype.involveUserWithoutCloseSearch = function () {
        if (this.peopleSearch) {
            this.peopleSearch.involveUser();
        }
    };
    PeopleComponent.prototype.searchUser = function (searchedWord) {
        var _this = this;
        this.peopleService.getWorkflowUsersWithImages(this.taskId, searchedWord)
            .subscribe(function (users) {
            _this.peopleSearchObserver.next(users);
        }, function (error) { return _this.logService.error(error); });
    };
    PeopleComponent.prototype.involveUser = function (user) {
        var _this = this;
        this.peopleService.involveUserWithTask(this.taskId, user.id.toString())
            .subscribe(function () {
            _this.people = _this.people.concat([user]);
        }, function (error) { return _this.logService.error('Impossible to involve user with task'); });
    };
    PeopleComponent.prototype.removeInvolvedUser = function (user) {
        var _this = this;
        this.peopleService.removeInvolvedUser(this.taskId, user.id.toString())
            .subscribe(function () {
            _this.people = _this.people.filter(function (involvedUser) {
                return involvedUser.id !== user.id;
            });
        }, function (error) { return _this.logService.error('Impossible to remove involved user from task'); });
    };
    PeopleComponent.prototype.getDisplayUser = function (firstName, lastName, delimiter) {
        if (delimiter === void 0) { delimiter = '-'; }
        firstName = (firstName !== null ? firstName : '');
        lastName = (lastName !== null ? lastName : '');
        return firstName + delimiter + lastName;
    };
    PeopleComponent.prototype.getInitialUserName = function (firstName, lastName) {
        firstName = (firstName !== null && firstName !== '' ? firstName[0] : '');
        lastName = (lastName !== null && lastName !== '' ? lastName[0] : '');
        return this.getDisplayUser(firstName, lastName, '');
    };
    PeopleComponent.prototype.onAddAssignement = function () {
        this.showAssignment = true;
    };
    PeopleComponent.prototype.onClickAction = function (event) {
        if (event.type === 'remove') {
            this.removeInvolvedUser(event.value);
        }
    };
    PeopleComponent.prototype.hasPeople = function () {
        return this.people && this.people.length > 0;
    };
    PeopleComponent.prototype.isEditMode = function () {
        return !this.readOnly;
    };
    PeopleComponent.prototype.onCloseSearch = function () {
        this.showAssignment = false;
    };
    PeopleComponent.prototype.onErrorImageLoad = function (user) {
        if (user.userImage) {
            user.userImage = null;
        }
    };
    return PeopleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PeopleComponent.prototype, "iconImageUrl", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PeopleComponent.prototype, "people", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PeopleComponent.prototype, "taskId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PeopleComponent.prototype, "readOnly", void 0);
__decorate([
    core_1.ViewChild(people_search_component_1.PeopleSearchComponent),
    __metadata("design:type", typeof (_a = typeof people_search_component_1.PeopleSearchComponent !== "undefined" && people_search_component_1.PeopleSearchComponent) === "function" && _a || Object)
], PeopleComponent.prototype, "peopleSearch", void 0);
PeopleComponent = __decorate([
    core_1.Component({
        selector: 'adf-people, activiti-people',
        template: __webpack_require__(589),
        styles: [__webpack_require__(760)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof people_service_1.PeopleService !== "undefined" && people_service_1.PeopleService) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _c || Object])
], PeopleComponent);
exports.PeopleComponent = PeopleComponent;
var _a, _b, _c;


/***/ }),

/***/ 56:
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
var ng2_alfresco_core_2 = __webpack_require__(1);
var Rx_1 = __webpack_require__(2);
var start_task_model_1 = __webpack_require__(197);
var task_details_model_1 = __webpack_require__(63);
var people_service_1 = __webpack_require__(21);
var tasklist_service_1 = __webpack_require__(15);
var StartTaskComponent = (function () {
    function StartTaskComponent(taskService, peopleService, logService) {
        this.taskService = taskService;
        this.peopleService = peopleService;
        this.logService = logService;
        this.FORMAT_DATE = 'DD/MM/YYYY';
        this.success = new core_1.EventEmitter();
        this.cancel = new core_1.EventEmitter();
        this.error = new core_1.EventEmitter();
        this.people = [];
        this.startTaskmodel = new start_task_model_1.StartTaskModel();
    }
    StartTaskComponent.prototype.ngOnInit = function () {
        this.loadFormsTask();
        this.getUsers();
    };
    StartTaskComponent.prototype.start = function () {
        var _this = this;
        if (this.startTaskmodel.name) {
            this.startTaskmodel.category = this.appId;
            this.taskService.createNewTask(new task_details_model_1.TaskDetailsModel(this.startTaskmodel))
                .switchMap(function (createRes) {
                return _this.attachForm(createRes.id, _this.formKey).defaultIfEmpty(createRes)
                    .switchMap(function (attachRes) {
                    return _this.assignTaskByUserId(createRes.id, _this.assigneeId).defaultIfEmpty(attachRes ? attachRes : createRes);
                });
            })
                .subscribe(function (res) {
                _this.success.emit(res);
            }, function (err) {
                _this.error.emit(err);
                _this.logService.error('An error occurred while creating new task');
            });
        }
    };
    StartTaskComponent.prototype.attachForm = function (taskId, formKey) {
        var response = Rx_1.Observable.of();
        if (taskId && formKey) {
            response = this.taskService.attachFormToATask(taskId, formKey);
        }
        return response;
    };
    StartTaskComponent.prototype.assignTaskByUserId = function (taskId, userId) {
        var response = Rx_1.Observable.of();
        if (taskId && userId) {
            response = this.taskService.assignTaskByUserId(taskId, userId);
        }
        return response;
    };
    StartTaskComponent.prototype.onCancel = function () {
        this.cancel.emit();
    };
    StartTaskComponent.prototype.loadFormsTask = function () {
        var _this = this;
        this.taskService.getFormList().subscribe(function (res) {
            _this.forms = res;
        }, function (err) {
            _this.error.emit(err);
            _this.logService.error('An error occurred while trying to get the forms');
        });
    };
    StartTaskComponent.prototype.getUsers = function () {
        var _this = this;
        this.peopleService.getWorkflowUsers().subscribe(function (users) {
            _this.people = users;
        }, function (err) {
            _this.error.emit(err);
            _this.logService.error('Could not load users');
        });
    };
    StartTaskComponent.prototype.isUserNameEmpty = function (user) {
        return !user || (this.isEmpty(user.firstName) && this.isEmpty(user.lastName));
    };
    StartTaskComponent.prototype.isEmpty = function (data) {
        return data === undefined || data === null || data.trim().length === 0;
    };
    StartTaskComponent.prototype.getDisplayUser = function (firstName, lastName, delimiter) {
        if (delimiter === void 0) { delimiter = '-'; }
        firstName = (firstName !== null ? firstName : '');
        lastName = (lastName !== null ? lastName : '');
        return firstName + delimiter + lastName;
    };
    StartTaskComponent.prototype.onDateChanged = function (newDateValue) {
        this.dateError = false;
        if (newDateValue) {
            var momentDate = moment(newDateValue, this.FORMAT_DATE, true);
            if (!momentDate.isValid()) {
                this.dateError = true;
            }
        }
    };
    return StartTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StartTaskComponent.prototype, "appId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], StartTaskComponent.prototype, "success", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], StartTaskComponent.prototype, "cancel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], StartTaskComponent.prototype, "error", void 0);
StartTaskComponent = __decorate([
    core_1.Component({
        selector: 'adf-start-task, activiti-start-task',
        template: __webpack_require__(590),
        styles: [__webpack_require__(761)],
        providers: [
            { provide: material_1.DateAdapter, useClass: ng2_alfresco_core_1.MomentDateAdapter },
            { provide: material_1.MD_DATE_FORMATS, useValue: ng2_alfresco_core_1.MOMENT_DATE_FORMATS }
        ],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof tasklist_service_1.TaskListService !== "undefined" && tasklist_service_1.TaskListService) === "function" && _d || Object, typeof (_e = typeof people_service_1.PeopleService !== "undefined" && people_service_1.PeopleService) === "function" && _e || Object, typeof (_f = typeof ng2_alfresco_core_2.LogService !== "undefined" && ng2_alfresco_core_2.LogService) === "function" && _f || Object])
], StartTaskComponent);
exports.StartTaskComponent = StartTaskComponent;
var _a, _b, _c, _d, _e, _f;


/***/ }),

/***/ 57:
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
var filter_model_1 = __webpack_require__(70);
var tasklist_service_1 = __webpack_require__(15);
var TaskFiltersComponent = (function () {
    function TaskFiltersComponent(activiti) {
        var _this = this;
        this.activiti = activiti;
        this.filterClick = new core_1.EventEmitter();
        this.onSuccess = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.hasIcon = true;
        this.filters = [];
        this.filter$ = new Rx_1.Observable(function (observer) { return _this.filterObserver = observer; }).share();
    }
    TaskFiltersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter$.subscribe(function (filter) {
            _this.filters.push(filter);
        });
    };
    TaskFiltersComponent.prototype.ngOnChanges = function (changes) {
        var appId = changes['appId'];
        if (appId && (appId.currentValue || appId.currentValue === null)) {
            this.getFiltersByAppId(appId.currentValue);
            return;
        }
        var appName = changes['appName'];
        if (appName && appName !== null && appName.currentValue) {
            this.getFiltersByAppName(appName.currentValue);
            return;
        }
        this.getFiltersByAppId();
    };
    TaskFiltersComponent.prototype.getFilters = function (appId, appName) {
        if (appName) {
            this.getFiltersByAppName(appName);
        }
        else {
            this.getFiltersByAppId(appId);
        }
    };
    TaskFiltersComponent.prototype.getFiltersByAppId = function (appId) {
        var _this = this;
        this.activiti.getTaskListFilters(appId).subscribe(function (res) {
            if (res.length === 0 && _this.isFilterListEmpty()) {
                _this.activiti.createDefaultFilters(appId).subscribe(function (resDefault) {
                    _this.resetFilter();
                    resDefault.forEach(function (filter) {
                        _this.filterObserver.next(filter);
                    });
                    _this.selectTaskFilter(_this.filterParam, _this.filters);
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
                _this.selectTaskFilter(_this.filterParam, _this.filters);
                _this.onSuccess.emit(res);
            }
        }, function (err) {
            _this.onError.emit(err);
        });
    };
    TaskFiltersComponent.prototype.getFiltersByAppName = function (appName) {
        var _this = this;
        this.activiti.getDeployedApplications(appName).subscribe(function (application) {
            _this.getFiltersByAppId(application.id);
            _this.selectTaskFilter(_this.filterParam, _this.filters);
        }, function (err) {
            _this.onError.emit(err);
        });
    };
    TaskFiltersComponent.prototype.selectFilter = function (filter) {
        this.currentFilter = filter;
        this.filterClick.emit(filter);
    };
    TaskFiltersComponent.prototype.selectFilterWithTask = function (taskId) {
        var _this = this;
        var filteredFilterList = [];
        this.activiti.getFilterForTaskById(taskId, this.filters).subscribe(function (filter) {
            filteredFilterList.push(filter);
        }, function (err) {
            _this.onError.emit(err);
        }, function () {
            if (filteredFilterList.length > 0) {
                _this.selectTaskFilter(new filter_model_1.FilterParamsModel({ name: 'My Tasks' }), filteredFilterList);
                _this.currentFilter.landingTaskId = taskId;
                _this.filterClick.emit(_this.currentFilter);
            }
        });
    };
    TaskFiltersComponent.prototype.selectTaskFilter = function (filterParam, filteredFilterList) {
        var findTaskFilter;
        if (filterParam) {
            filteredFilterList.filter(function (taskFilter, index) {
                if (filterParam.name && filterParam.name.toLowerCase() === taskFilter.name.toLowerCase() ||
                    filterParam.id === taskFilter.id || filterParam.index === index) {
                    findTaskFilter = taskFilter;
                }
            });
        }
        if (findTaskFilter) {
            this.currentFilter = findTaskFilter;
        }
        else {
            this.selectDefaultTaskFilter(filteredFilterList);
        }
    };
    TaskFiltersComponent.prototype.selectDefaultTaskFilter = function (filteredFilterList) {
        if (!this.isFilterListEmpty()) {
            this.currentFilter = this.filters[0];
        }
    };
    TaskFiltersComponent.prototype.getCurrentFilter = function () {
        return this.currentFilter;
    };
    TaskFiltersComponent.prototype.isFilterListEmpty = function () {
        return this.filters === undefined || (this.filters && this.filters.length === 0);
    };
    TaskFiltersComponent.prototype.resetFilter = function () {
        this.filters = [];
        this.currentFilter = undefined;
    };
    return TaskFiltersComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof filter_model_1.FilterParamsModel !== "undefined" && filter_model_1.FilterParamsModel) === "function" && _a || Object)
], TaskFiltersComponent.prototype, "filterParam", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], TaskFiltersComponent.prototype, "filterClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], TaskFiltersComponent.prototype, "onSuccess", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], TaskFiltersComponent.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskFiltersComponent.prototype, "appId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskFiltersComponent.prototype, "appName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TaskFiltersComponent.prototype, "hasIcon", void 0);
TaskFiltersComponent = __decorate([
    core_1.Component({
        selector: 'adf-filters, activiti-filters',
        template: __webpack_require__(593),
        styles: [__webpack_require__(764)]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof tasklist_service_1.TaskListService !== "undefined" && tasklist_service_1.TaskListService) === "function" && _e || Object])
], TaskFiltersComponent);
exports.TaskFiltersComponent = TaskFiltersComponent;
var _a, _b, _c, _d, _e;


/***/ }),

/***/ 58:
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
var task_details_model_1 = __webpack_require__(63);
var tasklist_service_1 = __webpack_require__(15);
var TaskHeaderComponent = (function () {
    function TaskHeaderComponent(activitiTaskService, logService) {
        this.activitiTaskService = activitiTaskService;
        this.logService = logService;
        this.formName = null;
        this.claim = new core_1.EventEmitter();
        this.inEdit = false;
    }
    TaskHeaderComponent.prototype.ngOnChanges = function (changes) {
        this.refreshData();
    };
    TaskHeaderComponent.prototype.refreshData = function () {
        if (this.taskDetails) {
            var valueMap = new Map([[this.taskDetails.processInstanceId, this.taskDetails.processDefinitionName]]);
            this.properties = [
                new ng2_alfresco_core_1.CardViewTextItemModel({ label: 'Assignee', value: this.taskDetails.getFullName(), key: 'assignee', default: 'No assignee', clickable: !this.isCompleted() }),
                new ng2_alfresco_core_1.CardViewTextItemModel({ label: 'Status', value: this.getTaskStatus(), key: 'status' }),
                new ng2_alfresco_core_1.CardViewDateItemModel({ label: 'Due Date', value: this.taskDetails.dueDate, key: 'dueDate', default: 'No date', editable: true }),
                new ng2_alfresco_core_1.CardViewTextItemModel({ label: 'Category', value: this.taskDetails.category, key: 'category', default: 'No category' }),
                new ng2_alfresco_core_1.CardViewMapItemModel({ label: 'Parent name', value: valueMap, key: 'parentName', default: 'No parent name', clickable: true }),
                new ng2_alfresco_core_1.CardViewTextItemModel({ label: 'Created By', value: this.taskDetails.getFullName(), key: 'created-by', default: 'No assignee' }),
                new ng2_alfresco_core_1.CardViewDateItemModel({ label: 'Created', value: this.taskDetails.created, key: 'created' }),
                new ng2_alfresco_core_1.CardViewTextItemModel({ label: 'Id', value: this.taskDetails.id, key: 'id' }),
                new ng2_alfresco_core_1.CardViewTextItemModel({
                    label: 'Description',
                    value: this.taskDetails.description,
                    key: 'description',
                    default: 'No description',
                    multiline: true,
                    editable: true
                }),
                new ng2_alfresco_core_1.CardViewTextItemModel({ label: 'Form name', value: this.formName, key: 'formName', default: 'No form' })
            ];
        }
    };
    TaskHeaderComponent.prototype.hasAssignee = function () {
        return (this.taskDetails && this.taskDetails.assignee) ? true : false;
    };
    TaskHeaderComponent.prototype.isAssignedToMe = function () {
        return this.taskDetails.assignee ? true : false;
    };
    TaskHeaderComponent.prototype.getTaskStatus = function () {
        return this.isCompleted() ? 'Completed' : 'Running';
    };
    TaskHeaderComponent.prototype.claimTask = function (taskId) {
        var _this = this;
        this.activitiTaskService.claimTask(taskId).subscribe(function (res) {
            _this.logService.info('Task claimed');
            _this.claim.emit(taskId);
        });
    };
    TaskHeaderComponent.prototype.isCompleted = function () {
        return !!this.taskDetails.endDate;
    };
    return TaskHeaderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskHeaderComponent.prototype, "formName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof task_details_model_1.TaskDetailsModel !== "undefined" && task_details_model_1.TaskDetailsModel) === "function" && _a || Object)
], TaskHeaderComponent.prototype, "taskDetails", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], TaskHeaderComponent.prototype, "claim", void 0);
TaskHeaderComponent = __decorate([
    core_1.Component({
        selector: 'adf-task-header, activiti-task-header',
        template: __webpack_require__(594),
        styles: [__webpack_require__(765)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof tasklist_service_1.TaskListService !== "undefined" && tasklist_service_1.TaskListService) === "function" && _c || Object, typeof (_d = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _d || Object])
], TaskHeaderComponent);
exports.TaskHeaderComponent = TaskHeaderComponent;
var _a, _b, _c, _d;


/***/ }),

/***/ 582:
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-container\" *ngIf=\"!isEmpty()\">\n    <ul class='mdl-list' *ngIf=\"isList()\">\n        <li class=\"mdl-list__item\" (click)=\"selectApp(app)\" (keyup.enter)=\"selectApp(app)\" *ngFor=\"let app of appList\" tabindex=\"0\" role=\"button\" title=\"{{app.name}}\">\n            <span class=\"mdl-list__item-primary-content\">\n            <i class=\"material-icons mdl-list__item-icon\">touch_app</i>\n            {{app.name}}\n            </span>\n        </li>\n    </ul>\n    <div class=\"mdl-grid\" *ngIf=\"isGrid()\">\n        <div (click)=\"selectApp(app)\" (keyup.enter)=\"selectApp(app)\" [ngClass]=\"['mdl-card mdl-cell',  getTheme(app)]\" *ngFor=\"let app of appList\" tabindex=\"0\" role=\"button\" title=\"{{app.name}}\">\n            <div class=\"logo\"><i class=\"material-icons\">{{getBackgroundIcon(app)}}</i></div>\n            <div class=\"mdl-card__title\">\n                <h1 class=\"mdl-card__title-text application-title\">{{app.name}}</h1>\n            </div>\n            <div class=\"mdl-card__supporting-text\">\n                <p>{{app.description}}</p>\n            </div>\n            <div class=\"mdl-card__actions mdl-card--border\">\n                <i class=\"material-icons selectedIcon\" *ngIf=\"isSelected(app.id)\">done</i>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"menu-container\" *ngIf=\"isEmpty()\">\n    {{ 'APPS.NONE' | translate }}\n</div>\n";

/***/ }),

/***/ 583:
/***/ (function(module, exports) {

module.exports = "<span class=\"activiti-label mdl-badge\" id=\"checklist-label\"\n      [attr.data-badge]=\"checklist?.length\">{{ 'TASK_DETAILS.LABELS.CHECKLIST' | translate }}</span>\n<div *ngIf=\"!readOnly\" id=\"addChecklist\" (click)=\"showDialog()\" id=\"add-checklist\" class=\"icon material-icons\">add</div>\n<div *ngIf=\"!readOnly\" class=\"mdl-tooltip\" for=\"add-checklist\">\n    Add a checklist\n</div>\n<div class=\"menu-container\" *ngIf=\"checklist?.length > 0\">\n    <ul class='mdl-list'>\n        <li class=\"mdl-list__item\" *ngFor=\"let check of checklist\">\n            <span class=\"mdl-chip mdl-chip--deletable\" id=\"check-{{check.id}}\">\n                <span class=\"mdl-chip__text\">{{check.name}}</span>\n                <button type=\"button\" class=\"mdl-chip__action\" (click)=\"delete(check.id)\">\n                    <i id=\"remove-{{check.id}}\" class=\"material-icons\">cancel</i>\n                </button>\n            </span>\n        </li>\n    </ul>\n</div>\n<div *ngIf=\"checklist?.length === 0\" id=\"checklist-none-message\">\n    {{ 'TASK_DETAILS.CHECKLIST.NONE' | translate }}\n</div>\n\n<dialog class=\"mdl-dialog\" id=\"checklist-dialog\" #dialog>\n    <h4 class=\"mdl-dialog__title\" id=\"add-checklist-title\">New Check</h4>\n    <div class=\"mdl-dialog__content\">\n        <md-input-container>\n            <input mdInput placeholder=\"Name\" [(ngModel)]=\"taskName\" id=\"checklist-name\"  data-automation-id=\"checklist-name\">\n        </md-input-container>\n    </div>\n    <div class=\"mdl-dialog__actions\">\n        <button type=\"button\" id=\"add-check\" (click)=\"add()\" class=\"mdl-button\">Add Checklist</button>\n        <button type=\"button\" id=\"close-check-dialog\" (click)=\"cancel()\" class=\"mdl-button close\">Cancel</button>\n    </div>\n</dialog>\n";

/***/ }),

/***/ 584:
/***/ (function(module, exports) {

module.exports = "<adf-datatable\n    [rows]=\"comments\"\n    (rowClick)=\"selectComment($event)\" *ngIf=\"hasComments()\">\n\n    <data-columns>\n        <data-column key=\"createdBy\">\n            <ng-template let-entry=\"$implicit\">\n                <div id=\"comment-user-icon\"\n                class=\"adf-comment-img-container\">\n                    <div\n                        *ngIf=\"!entry.row.obj.createdBy.userImage\" class=\"adf-comment-user-icon\">\n                            {{getUserShortName(entry.row.obj.createdBy)}}</div>\n                    <div>\n                        <img *ngIf=\"entry.row.obj.createdBy.userImage\" class=\"adf-people-img\"\n                            [src]=\"entry.row.obj.createdBy.userImage\"\n                            (error)=\"onErrorImageLoad(entry.row.obj.createdBy)\"/>\n                    </div>\n                </div>\n            </ng-template>\n        </data-column>\n        <data-column key=\"message\">\n            <ng-template let-entry=\"$implicit\">\n                <div class=\"adf-comment-contents\">\n                    <div id=\"comment-user\" class=\"adf-comment-user-name\">\n                        {{entry.row.obj.createdBy?.firstName}} {{entry.row.obj.createdBy?.lastName}}\n                    </div>\n                    <div id=\"comment-message\" class=\"adf-comment-message\">\n                        {{entry.row.obj.message}}\n                    </div>\n                    <div id=\"comment-time\" class=\"adf-comment-message-time\">\n                        {{transformDate(entry.row.obj.created)}}\n                    </div>\n                </div>\n            </ng-template>\n        </data-column>\n    </data-columns>\n\n</adf-datatable>\n";

/***/ }),

/***/ 585:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-comments-container\">\n    <div id=\"comment-header\" class=\"adf-comments-header\">\n        {{'TASK_DETAILS.COMMENTS.HEADER' | translate}}({{comments?.length}})\n    </div>\n    <div class=\"adf-comments-input-container\" *ngIf=\"!isReadOnly()\">\n            <md-input-container class=\"adf-full-width\">\n                <input mdInput id=\"comment-input\" placeholder=\"{{'TASK_DETAILS.COMMENTS.ADD' | translate}}\" [(ngModel)]=\"message\" (keyup.enter)=\"add()\" (keyup.esc)=\"clear()\">\n            </md-input-container>\n    </div>\n\n    <div *ngIf=\"comments.length > 0\">\n        <adf-comment-list [comments]=\"comments\">\n        </adf-comment-list>\n    </div>\n</div>\n";

/***/ }),

/***/ 586:
/***/ (function(module, exports) {

module.exports = "<button\n    md-button\n    md-raised-button\n    md-icon-button\n    class=\"adf-create-attachment\"\n    [adf-upload]=\"true\"\n    mode=\"['click']\"\n    [multiple]=\"true\"\n    (upload-files)=\"onFileUpload($event)\">\n    <md-icon>add</md-icon>\n</button>\n";

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

module.exports = "<adf-datatable\n    [rows]=\"users\"\n    [actions]=\"hasActions()\"\n    (rowClick)=\"selectUser($event)\"\n    (rowDblClick)=\"selectUser($event)\"\n    (showRowActionsMenu)=\"onShowRowActionsMenu($event)\"\n    (executeRowAction)=\"onExecuteRowAction($event)\">\n</adf-datatable>";

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

module.exports = "<div class=\"search-text-header\">\n    <ng-content select=\"[people-search-title]\"></ng-content>\n</div>\n<md-input-container class=\"search-text-container\">\n\t<input mdInput placeholder=\"{{'PEOPLE.SEARCH_USER'|translate}}\" type=\"text\" id=\"userSearchText\" [value]=\"\" [formControl]=\"searchUser\">\n</md-input-container>\n<div class=\"search-list-container\" id=\"search-people-list\" *ngIf=\"hasUsers()\">\n    <adf-people-list\n    [users]=\"users\"\n    (clickRow)=\"onRowClick($event)\">\n        <data-columns>\n            <data-column key=\"firstName\">\n                <ng-template let-entry=\"$implicit\">\n                        <div *ngIf=\"!entry.row.obj.userImage\" class=\"people-pic\">\n                            {{getInitialUserName(entry.row.obj.firstName, entry.row.obj.lastName)}}</div>\n                        <div>\n                            <img *ngIf=\"entry.row.obj.userImage\" class=\"people-img\"\n                                [src]=\"entry.row.obj.userImage\"\n                                (error)=\"onErrorImageLoad(entry.row.obj)\"/>\n                        </div>\n                </ng-template>\n            </data-column>\n            <data-column key=\"email\" class=\"full-width\">\n                <ng-template let-entry=\"$implicit\">\n                    <div class=\"people-full-name\">{{ getDisplayUser(entry.row.obj.firstName, entry.row.obj.lastName, ' ') }}</div>\n                </ng-template>\n            </data-column>\n        </data-columns>\n    </adf-people-list>\n</div>\n<div class=\"search-list-action-container\">\n    <button md-button type=\"button\" id=\"close-people-search\" (click)=\"closeSearchList()\">\n        {{'PEOPLE.DIALOG_CLOSE' | translate }}\n    </button>\n    <button md-button type=\"button\" id=\"add-people\" (click)=\"involveUserAndClose()\">\n        <ng-content select=\"[people-search-action-label]\"></ng-content>\n    </button>\n</div>\n";

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid mdl-shadow--2dp assignment-top-container\">\n    <div class=\"assignment-header\">\n        <div *ngIf=\"hasPeople()\" class=\"assigment-count\" id=\"people-title\">\n            {{ 'TASK_DETAILS.LABELS.PEOPLE' | translate }} {{ ' (' + people.length + ')' }}\n        </div>\n        <div *ngIf=\"!hasPeople()\" class=\"assigment-count\" id=\"no-people-label\">\n            {{ 'TASK_DETAILS.PEOPLE.NONE' | translate }}\n        </div>\n        <div *ngIf=\"isEditMode()\" class=\"add-people\" (click)=\"onAddAssignement()\">\n            <i class=\"material-icons\">person_add</i>\n        </div>\n    </div>\n    <div class=\"assignment-container\" *ngIf=\"showAssignment\">\n        <adf-people-search\n        (searchPeople)=\"searchUser($event)\"\n        (success)=\"involveUser($event)\"\n        (closeSearch)=\"onCloseSearch()\"\n        [results]=\"peopleSearch$\">\n            <ng-container people-search-title>{{ 'TASK_DETAILS.LABELS.ADD_PEOPLE' | translate }}</ng-container>\n            <ng-container people-search-action-label>{{ 'PEOPLE.ADD_USER' | translate }}</ng-container>\n        </adf-people-search>\n    </div>\n    <div class=\"assignment-list-container\" id=\"assignment-people-list\" *ngIf=\"hasPeople()\">\n        <adf-people-list\n        [users]=\"people\"\n        [actions]=\"isEditMode()\"\n        (clickAction)=\"onClickAction($event)\">\n            <data-columns>\n                <data-column key=\"firstName\">\n                    <ng-template let-entry=\"$implicit\">\n                        <div *ngIf=\"!entry.row.obj.userImage\" class=\"people-pic\">\n                            {{getInitialUserName(entry.row.obj.firstName, entry.row.obj.lastName)}}</div>\n                        <div>\n                            <img *ngIf=\"entry.row.obj.userImage\" class=\"people-img\"\n                                [src]=\"entry.row.obj.userImage\"\n                                (error)=\"onErrorImageLoad(entry.row.obj)\"/>\n                        </div>\n                    </ng-template>\n                </data-column>\n                <data-column key=\"email\" class=\"full-width\">\n                    <ng-template let-entry=\"$implicit\">\n                        <div class=\"people-full-name\">{{ getDisplayUser(entry.row.obj.firstName, entry.row.obj.lastName, ' ') }}</div>\n                        <div class=\"people-email\">{{ entry.row.obj.email }}</div>\n                        <div class=\"people-edit-label\">can edit</div>\n                    </ng-template>\n                </data-column>\n            </data-columns>\n        </adf-people-list>\n    </div>\n</div>\n";

/***/ }),

/***/ 59:
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
var filter_model_1 = __webpack_require__(70);
var tasklist_service_1 = __webpack_require__(15);
var DEFAULT_SIZE = 5;
var TaskListComponent = (function () {
    function TaskListComponent(taskListService) {
        this.taskListService = taskListService;
        this.rowClick = new core_1.EventEmitter();
        this.onSuccess = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.page = 0;
        this.size = DEFAULT_SIZE;
        this.isLoading = true;
        this.hasCustomDataSource = false;
        this.defaultSchemaColumn = [
            { type: 'text', key: 'name', title: 'Name', cssClass: 'full-width name-column', sortable: true },
            { type: 'text', key: 'created', title: 'Created', cssClass: 'hidden', sortable: true }
        ];
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data === undefined) {
            this.data = new ng2_alfresco_datatable_1.ObjectDataTableAdapter();
        }
        this.taskListService.tasksList$.subscribe(function (tasks) {
            var instancesRow = _this.createDataRow(tasks.data);
            _this.renderInstances(instancesRow);
            _this.selectTask(_this.landingTaskId);
            _this.onSuccess.emit(tasks);
            _this.isLoading = false;
        }, function (error) {
            _this.onError.emit(error);
            _this.isLoading = false;
        });
    };
    TaskListComponent.prototype.ngAfterContentInit = function () {
        this.setupSchema();
    };
    TaskListComponent.prototype.setupSchema = function () {
        var schema = [];
        if (this.columnList && this.columnList.columns && this.columnList.columns.length > 0) {
            schema = this.columnList.columns.map(function (c) { return c; });
        }
        if (!this.data) {
            this.data = new ng2_alfresco_datatable_1.ObjectDataTableAdapter([], schema.length > 0 ? schema : this.defaultSchemaColumn);
        }
        else {
            if (schema && schema.length > 0) {
                this.data.setColumns(schema);
            }
            else if (this.data.getColumns().length === 0) {
                this.data.setColumns(this.defaultSchemaColumn);
            }
        }
    };
    TaskListComponent.prototype.ngOnChanges = function (changes) {
        if (this.isPropertyChanged(changes)) {
            this.reload();
        }
    };
    TaskListComponent.prototype.setCustomDataSource = function (rows) {
        if (this.data) {
            this.data.setRows(rows);
            this.hasCustomDataSource = true;
        }
    };
    TaskListComponent.prototype.isPropertyChanged = function (changes) {
        var changed = true;
        var landingTaskId = changes['landingTaskId'];
        if (landingTaskId && landingTaskId.currentValue && this.isEqualToCurrentId(landingTaskId.currentValue)) {
            changed = false;
        }
        return changed;
    };
    TaskListComponent.prototype.reload = function () {
        if (!this.hasCustomDataSource) {
            this.requestNode = this.createRequestNode();
            this.load(this.requestNode);
        }
    };
    TaskListComponent.prototype.load = function (requestNode) {
        this.isLoading = true;
        this.loadTasksByState().subscribe();
    };
    TaskListComponent.prototype.loadTasksByState = function () {
        return this.requestNode.state === 'all'
            ? this.taskListService.findAllTasksWhitoutState(this.requestNode)
            : this.taskListService.findTasksByState(this.requestNode);
    };
    TaskListComponent.prototype.createDataRow = function (instances) {
        var instancesRows = [];
        instances.forEach(function (row) {
            instancesRows.push(new ng2_alfresco_datatable_1.ObjectDataRow(row));
        });
        return instancesRows;
    };
    TaskListComponent.prototype.renderInstances = function (instances) {
        instances = this.optimizeNames(instances);
        this.data.setRows(instances);
    };
    TaskListComponent.prototype.selectTask = function (taskIdToSelect) {
        if (!this.isListEmpty()) {
            var rows = this.data.getRows();
            if (rows.length > 0) {
                var dataRow = rows.find(function (row) { return row.getValue('id') === taskIdToSelect; }) || rows[0];
                this.data.selectedRow = dataRow;
                this.currentInstanceId = dataRow.getValue('id');
            }
        }
        else {
            if (this.data) {
                this.data.selectedRow = null;
            }
            this.currentInstanceId = null;
        }
    };
    TaskListComponent.prototype.getCurrentId = function () {
        return this.currentInstanceId;
    };
    TaskListComponent.prototype.isEqualToCurrentId = function (taskId) {
        return this.currentInstanceId === taskId ? true : false;
    };
    TaskListComponent.prototype.isListEmpty = function () {
        return this.data === undefined ||
            (this.data && this.data.getRows() && this.data.getRows().length === 0);
    };
    TaskListComponent.prototype.onRowClick = function (event) {
        var item = event;
        this.currentInstanceId = item.value.getValue('id');
        this.rowClick.emit(this.currentInstanceId);
    };
    TaskListComponent.prototype.optimizeNames = function (istances) {
        istances = istances.map(function (t) {
            t.obj.name = t.obj.name || 'No name';
            return t;
        });
        return istances;
    };
    TaskListComponent.prototype.createRequestNode = function () {
        var requestNode = {
            appDefinitionId: this.appId,
            processInstanceId: this.processInstanceId,
            processDefinitionKey: this.processDefinitionKey,
            text: this.name,
            assignment: this.assignment,
            state: this.state,
            sort: this.sort,
            landingTaskId: this.landingTaskId,
            page: this.page,
            size: this.size,
            start: 0
        };
        return new filter_model_1.TaskQueryRequestRepresentationModel(requestNode);
    };
    return TaskListComponent;
}());
__decorate([
    core_1.ContentChild(ng2_alfresco_core_1.DataColumnListComponent),
    __metadata("design:type", typeof (_a = typeof ng2_alfresco_core_1.DataColumnListComponent !== "undefined" && ng2_alfresco_core_1.DataColumnListComponent) === "function" && _a || Object)
], TaskListComponent.prototype, "columnList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskListComponent.prototype, "appId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskListComponent.prototype, "processInstanceId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskListComponent.prototype, "processDefinitionKey", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskListComponent.prototype, "state", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskListComponent.prototype, "assignment", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskListComponent.prototype, "sort", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskListComponent.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TaskListComponent.prototype, "landingTaskId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof ng2_alfresco_datatable_1.DataTableAdapter !== "undefined" && ng2_alfresco_datatable_1.DataTableAdapter) === "function" && _b || Object)
], TaskListComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], TaskListComponent.prototype, "rowClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], TaskListComponent.prototype, "onSuccess", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], TaskListComponent.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TaskListComponent.prototype, "page", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TaskListComponent.prototype, "size", void 0);
TaskListComponent = __decorate([
    core_1.Component({
        selector: 'adf-tasklist, activiti-tasklist',
        template: __webpack_require__(595),
        styles: [__webpack_require__(441)]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof tasklist_service_1.TaskListService !== "undefined" && tasklist_service_1.TaskListService) === "function" && _f || Object])
], TaskListComponent);
exports.TaskListComponent = TaskListComponent;
var _a, _b, _c, _d, _e, _f;


/***/ }),

/***/ 590:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"adf-new-task-layout-card\">\n    <md-grid-list cols=\"1\" rowHeight=\"60px\">\n        <md-grid-tile>\n            <div class=\"adf-new-task-heading\">{{'START_TASK.FORM.TITLE'|translate}}</div>\n        </md-grid-tile>\n    </md-grid-list>\n    <md-card-content>\n        <md-grid-list cols=\"1\" rowHeight=\"80px\">\n            <md-grid-tile>\n                <md-input-container class=\"adf-new-task-text-width\">\n                    <input mdInput placeholder=\"{{'START_TASK.FORM.LABEL.NAME'|translate}}\"\n                           [(ngModel)]=\"startTaskmodel.name\" required id=\"name_id\">\n                </md-input-container>\n            </md-grid-tile>\n        </md-grid-list>\n        <md-grid-list cols=\"1\" rowHeight=\"80px\">\n            <md-grid-tile>\n                <md-input-container class=\"adf-new-task-text-width\">\n                    <textarea mdInput placeholder=\"{{'START_TASK.FORM.LABEL.DESCRIPTION'|translate}}\"\n                              [(ngModel)]=\"startTaskmodel.description\" id=\"description_id\"></textarea>\n                </md-input-container>\n            </md-grid-tile>\n        </md-grid-list>\n        <md-grid-list cols=\"2\" rowHeight=\"80px\">\n            <md-grid-tile>\n                <md-input-container class=\"adf-start-task-input-container\">\n                    <input mdInput\n                           [mdDatepicker]=\"taskDatePicker\"\n                           (keydown)=\"true\"\n                           (focusout)=\"onDateChanged($event.srcElement.value)\"\n                           placeholder=\"{{'START_TASK.FORM.LABEL.DATE'|translate}}\"\n                           [(ngModel)]=\"startTaskmodel.dueDate\" id=\"date_id\">\n                    <button mdSuffix [mdDatepickerToggle]=\"taskDatePicker\"></button>\n                </md-input-container>\n                <md-datepicker #taskDatePicker [touchUi]=\"true\"\n                               (selectedChanged)=\"onDateChanged($event)\"></md-datepicker>\n                <div class=\"adf-error-text-container\">\n                    <div *ngIf=\"dateError\">\n                        <div class=\"adf-error-text\">{{'START_TASK.FORM.DATE.ERROR'|translate}}</div>\n                        <i class=\"material-icons adf-error-icon\">warning</i>\n                    </div>\n                </div>\n            </md-grid-tile>\n            <md-grid-tile>\n                <md-select placeholder=\"{{'START_TASK.FORM.LABEL.ASSIGNEE'|translate}}\" id=\"assignee_id\"\n                           class=\"adf-start-task-input-container\" [(ngModel)]=\"assigneeId\">\n                    <md-option>{{'START_TASK.FORM.LABEL.NONE'|translate}}</md-option>\n\t\t\t\t\t<span *ngFor=\"let user of people\">\n\t\t\t\t\t\t<md-option [value]=\"user.id\" *ngIf=\"!isUserNameEmpty(user)\">{{ getDisplayUser(user.firstName,\n                            user.lastName, ' ')}}\n                        </md-option>\n\t\t\t\t\t</span>\n                </md-select>\n            </md-grid-tile>\n        </md-grid-list>\n        <md-grid-list cols=\"2\" rowHeight=\"80px\">\n            <md-grid-tile>\n                <md-select placeholder=\"{{'START_TASK.FORM.LABEL.FORM'|translate}}\" id=\"form_id\" [(ngModel)]=\"formKey\"\n                           class=\"adf-start-task-input-container\">\n                    <md-option>{{'START_TASK.FORM.LABEL.NONE'|translate}}</md-option>\n                    <md-option *ngFor=\"let form of forms\" [value]=\"form.id\">{{ form.name }}</md-option>\n                </md-select>\n            </md-grid-tile>\n            <md-grid-tile></md-grid-tile>\n        </md-grid-list>\n    </md-card-content>\n    <md-card-actions>\n        <md-grid-list cols=\"1\" rowHeight=\"60px\">\n            <md-grid-tile>\n                <div class=\"adf-new-task-footer\">\n                    <button md-button (click)=\"onCancel()\" id=\"button-cancle\">\n                        {{'START_TASK.FORM.ACTION.CANCEL'|translate}}\n                    </button>\n                    <button md-button [disabled]=\"!startTaskmodel.name || dateError\" (click)=\"start()\" id=\"button-start\">\n                        {{'START_TASK.FORM.ACTION.START'|translate}}\n                    </button>\n                </div>\n            </md-grid-tile>\n        </md-grid-list>\n    </md-card-actions>\n</md-card>\n\n";

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

module.exports = "<adf-datatable [rows]=\"attachments\" [actions]=\"true\" [loading]=\"isLoading\" (rowDblClick)=\"openContent($event)\" (showRowActionsMenu)=\"onShowRowActionsMenu($event)\"\n    (executeRowAction)=\"onExecuteRowAction($event)\">\n    <adf-empty-list *ngIf=\"isEmpty()\">\n        <div adf-empty-list-header class=\"adf-empty-list-header\"> {{'TASK-ATTACHMENT.EMPTY.HEADER' | translate}} </div>\n        <div adf-empty-list-body *ngIf=\"!isDisabled()\">\n            <div class=\"adf-empty-list-drag_drop\">{{'TASK-ATTACHMENT.EMPTY.DRAG-AND-DROP.TITLE' | translate}}</div>\n            <div class=\"adf-empty-list__any-files-here-to-add\"> {{'TASK-ATTACHMENT.EMPTY.DRAG-AND-DROP.SUBTITLE' | translate}} </div>\n        </div>\n        <div adf-empty-list-footer *ngIf=\"!isDisabled()\">\n            <img class=\"adf-empty-list__empty_doc_lib\" [src]=\"emptyListImageUrl\">\n        </div>\n    </adf-empty-list>\n    <data-columns>\n        <data-column key=\"icon\" type=\"icon\" srTitle=\"Thumbnail\" [sortable]=\"false\"></data-column>\n        <data-column key=\"name\" type=\"text\" title=\"Name\" class=\"full-width ellipsis-cell\" [sortable]=\"true\"></data-column>\n        <data-column key=\"created\" type=\"date\" format=\"shortDate\" title=\"Date\"></data-column>\n    </data-columns>\n    <loading-content-template>\n        <ng-template>\n            <!--Add your custom loading template here-->\n            <md-progress-spinner class=\"adf-attachment-list-loading-margin\" [color]=\"'primary'\" [mode]=\"'indeterminate'\">\n            </md-progress-spinner>\n        </ng-template>\n    </loading-content-template>\n</adf-datatable>";

/***/ }),

/***/ 592:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!taskDetails\">\n    <ng-template *ngIf=\"noTaskDetailsTemplateComponent\" ngFor [ngForOf]=\"[data]\" [ngForTemplate]=\"noTaskDetailsTemplateComponent\">\n        {{ 'TASK_DETAILS.MESSAGES.NONE' | translate }}\n    </ng-template>\n    <div *ngIf=\"!noTaskDetailsTemplateComponent\">\n        {{ 'TASK_DETAILS.MESSAGES.NONE' | translate }}\n    </div>\n</div>\n<div *ngIf=\"taskDetails\" class=\"adf-task-details\">\n\n    <div *ngIf=\"showHeader\" class=\"adf-task-details-header\">\n        <h2 class=\"activiti-task-details__header\" (click)=\"toggleHeaderContent()\">\n            <span>{{taskDetails.name || 'No name'}}</span>\n        </h2>\n        <div md-ripple [mdRippleUnbounded]=\"true\" [mdRippleCentered]=\"true\" class=\"adf-task-details-header-toggle\">\n            <md-icon *ngIf=\"!showHeaderContent\" (click)=\"toggleHeaderContent()\">web</md-icon>\n            <md-icon *ngIf=\"showHeaderContent\" (click)=\"toggleHeaderContent()\">web_asset</md-icon>\n        </div>\n    </div>\n\n    <div class=\"adf-task-details-core\">\n        <div class=\"adf-task-details-core-form\">\n            <div *ngIf=\"isAssigned()\">\n                <adf-form *ngIf=\"hasFormKey()\" #activitiForm\n                    [showDebugButton]=\"debugMode\"\n                    [taskId]=\"taskDetails.id\"\n                    [showTitle]=\"showFormTitle\"\n                    [showRefreshButton]=\"showFormRefreshButton\"\n                    [showCompleteButton]=\"showFormCompleteButton\"\n                    [disableCompleteButton]=\"!isAssignedToMe()\"\n                    [showSaveButton]=\"showFormSaveButton\"\n                    [readOnly]=\"readOnlyForm\"\n                    [fieldValidators]=\"fieldValidators\"\n                    (formSaved)='onFormSaved($event)'\n                    (formCompleted)='onFormCompleted($event)'\n                    (formContentClicked)='onFormContentClick($event)'\n                    (formLoaded)='onFormLoaded($event)'\n                    (onError)='onFormError($event)'\n                    (executeOutcome)='onFormExecuteOutcome($event)'>\n                    <div empty-form ><h3 class=\"adf-task-title\">Please select a Task</h3></div>\n                </adf-form>\n            </div>\n            <div *ngIf=\"!isAssigned()\">\n                {{ 'TASK_DETAILS.MESSAGES.CLAIM' | translate }}\n            </div>\n            <button md-raised-button class=\"activiti-task-details__action-button\" *ngIf=\"!hasFormKey() && isTaskActive()\" (click)=\"onComplete()\">\n                    {{ 'TASK_DETAILS.BUTTON.COMPLETE' | translate }}\n            </button>\n        </div>\n        <div class=\"adf-task-details-core-sidebar\">\n            <adf-info-drawer *ngIf=\"showHeaderContent\" title=\"Activities\" class=\"adf-task-details-core-sidebar-drawer\">\n\n                <div info-drawer-buttons>\n                    <md-icon (click)=\"toggleHeaderContent()\">clear</md-icon>\n                </div>\n\n                <adf-info-drawer-tab label=\"Activity\">\n                    <div class=\"assignment-container\" *ngIf=\"showAssignee\">\n                        <adf-people-search\n                        (searchPeople)=\"searchUser($event)\"\n                        (success)=\"assignTaskToUser($event)\"\n                        (closeSearch)=\"onCloseSearch()\"\n                        [results]=\"peopleSearch$\">\n                            <ng-container people-search-title>{{ 'TASK_DETAILS.LABELS.ADD_ASSIGNEE' | translate }}</ng-container>\n                            <ng-container people-search-action-label>{{ 'PEOPLE.ADD_ASSIGNEE' | translate }}</ng-container>\n                        </adf-people-search>\n                    </div>\n                    <adf-task-header\n                        [class]=\"getTaskHeaderViewClass()\"\n                        [taskDetails]=\"taskDetails\"\n                        [formName]=\"taskFormName\"\n                        (claim)=\"onClaimTask($event)\">\n                    </adf-task-header>\n                    <adf-people *ngIf=\"showInvolvePeople\" #people\n                        [iconImageUrl]=\"peopleIconImageUrl\"\n                        [people]=\"taskPeople\"\n                        [readOnly]=\"readOnlyForm\"\n                        [taskId]=\"taskDetails.id\">\n                    </adf-people>\n                </adf-info-drawer-tab>\n\n                <adf-info-drawer-tab label=\"Details\">\n                    <md-card *ngIf=\"showComments\">\n                        <md-card-content>\n                            <adf-comments #activiticomments\n                                [readOnly]=\"readOnlyForm\"\n                                [taskId]=\"taskDetails.id\">\n                            </adf-comments>\n                            </md-card-content>\n                    </md-card>\n                </adf-info-drawer-tab>\n\n            </adf-info-drawer>\n\n            <div *ngIf=\"showHeaderContent\" class=\"adf-task-details-core-sidebar-checklist\">\n                <div *ngIf=\"showChecklist\">\n                    <adf-checklist #activitichecklist\n                        [readOnly]=\"readOnlyForm\"\n                        [taskId]=\"taskDetails.id\"\n                        [assignee]=\"taskDetails?.assignee?.id\"\n                        (checklistTaskCreated)=\"onChecklistTaskCreated($event)\"\n                        (checklistTaskDeleted)=\"onChecklistTaskDeleted($event)\">\n                    </adf-checklist>\n                </div>\n            </div>\n        </div>\n    </div>\n    <dialog class=\"mdl-dialog error-dialog\" #errorDialog>\n        <div class=\"mdl-dialog__content\">\n            <h3>{{'TASK_DETAILS.ERROR.TITLE'|translate}}</h3>\n            <p>{{'TASK_DETAILS.ERROR.DESCRIPTION'|translate}}</p>\n            <button type=\"button\" class=\"mdl-button\" (click)=\"closeErrorDialog()\">{{'TASK_DETAILS.ERROR.CLOSE'|translate}}</button>\n        </div>\n    </dialog>\n</div>\n";

/***/ }),

/***/ 593:
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-container\">\n    <md-list>\n        <md-list-item (click)=\"selectFilter(filter)\" *ngFor=\"let filter of filters\"\n                      class=\"adf-filters__entry\" [class.active]=\"currentFilter === filter\">\n            <md-icon *ngIf=\"hasIcon\" mdListIcon class=\"adf-filters__entry-icon\">assignment</md-icon>\n            <span mdLine [attr.data-automation-id]=\"filter.name + '_filter'\">{{filter.name}}</span>\n        </md-list-item>\n    </md-list>\n</div>\n";

/***/ }),

/***/ 594:
/***/ (function(module, exports) {

module.exports = "<md-card *ngIf=\"taskDetails\" class=\"adf-card-container\">\n    <md-card-content>\n        <adf-card-view [properties]=\"properties\" [editable]=\"!isCompleted()\"></adf-card-view>\n    </md-card-content>\n\n    <md-card-actions *ngIf=\"!isAssignedToMe()\" class=\"adf-controls\">\n        <button md-button data-automation-id=\"header-claim-button\" id=\"claim-task\" (click)=\"claimTask(taskDetails.id)\" class=\"adf-claim-controls\">{{ 'TASK_DETAILS.BUTTON.CLAIM' | translate }}\n        </button>\n    </md-card-actions>\n</md-card>\n";

/***/ }),

/***/ 595:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!requestNode\">{{ 'TASK_FILTERS.MESSAGES.NONE' | translate }}</div>\n<div *ngIf=\"requestNode\">\n    <div>\n        <adf-datatable\n            [data]=\"data\"\n            [loading]=\"isLoading\"\n            (rowClick)=\"onRowClick($event)\">\n            <loading-content-template>\n                <ng-template>\n                    <!--Add your custom loading template here-->\n                    <md-progress-spinner\n                    class=\"adf-task-list-loading-margin\"\n                    [color]=\"'primary'\"\n                    [mode]=\"'indeterminate'\">\n                    </md-progress-spinner>\n                </ng-template>\n            </loading-content-template>\n            <no-content-template>\n                <!--Add your custom empty template here-->\n                <ng-template>\n                    <div class=\"no-content-message\">\n                        {{ 'TASK_LIST.MESSAGES.NONE' | translate }}\n                    </div>\n                </ng-template>\n            </no-content-template>\n        </adf-datatable>\n    </div>\n</div>\n";

/***/ }),

/***/ 63:
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
var user_model_1 = __webpack_require__(71);
var TaskDetailsModel = (function () {
    function TaskDetailsModel(obj) {
        this.processDefinitionVersion = 0;
        if (obj) {
            this.id = obj.id || null;
            this.name = obj.name || null;
            this.priority = obj.priority;
            this.assignee = obj.assignee ? new user_model_1.User(obj.assignee) : null;
            this.adhocTaskCanBeReassigned = obj.adhocTaskCanBeReassigned;
            this.category = obj.category || null;
            this.created = obj.created || null;
            this.description = obj.description || null;
            this.dueDate = obj.dueDate || null;
            this.duration = obj.duration || null;
            this.endDate = obj.endDate || null;
            this.executionId = obj.executionId || null;
            this.formKey = obj.formKey || null;
            this.initiatorCanCompleteTask = !!obj.initiatorCanCompleteTask;
            this.managerOfCandidateGroup = !!obj.managerOfCandidateGroup;
            this.memberOfCandidateGroup = !!obj.memberOfCandidateGroup;
            this.memberOfCandidateUsers = !!obj.memberOfCandidateUsers;
            this.involvedPeople = obj.involvedPeople;
            this.parentTaskId = obj.parentTaskId || null;
            this.parentTaskName = obj.parentTaskName || null;
            this.processDefinitionCategory = obj.processDefinitionCategory || null;
            this.processDefinitionDeploymentId = obj.processDefinitionDeploymentId || null;
            this.processDefinitionDescription = obj.processDefinitionDescription || null;
            this.processDefinitionId = obj.processDefinitionId || null;
            this.processDefinitionKey = obj.processDefinitionKey || null;
            this.processDefinitionName = obj.processDefinitionName || null;
            this.processDefinitionVersion = obj.processDefinitionVersion || 0;
            this.processInstanceId = obj.processInstanceId || null;
            this.processInstanceName = obj.processInstanceName || null;
            this.processInstanceStartUserId = obj.processInstanceStartUserId || null;
            this.taskDefinitionKey = obj.taskDefinitionKey || null;
        }
    }
    TaskDetailsModel.prototype.getFullName = function () {
        var fullName = '';
        if (this.assignee) {
            var firstName = this.assignee.firstName ? this.assignee.firstName : '';
            var lastName = this.assignee.lastName ? this.assignee.lastName : '';
            fullName = firstName + " " + lastName;
        }
        return fullName.trim();
    };
    return TaskDetailsModel;
}());
exports.TaskDetailsModel = TaskDetailsModel;


/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = ".adf-create-attachment {\n  display: inline-block;\n  line-height: 0px;\n  vertical-align: middle; }\n"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "adf-datatable /deep/ th span {\n  color: #232323; }\n\nadf-datatable /deep/ .data-cell {\n  cursor: pointer !important; }\n\n.adf-attachment-list-loading-margin {\n  margin-left: calc((100% - 100px) / 2);\n  margin-right: calc((100% - 100px) / 2); }\n\n.adf-empty-list-header {\n  height: 32px;\n  opacity: 0.26;\n  font-family: Muli, Helvetica, Arial, sans-serif;\n  font-size: 24px;\n  line-height: 1.33;\n  letter-spacing: -1px;\n  color: #000000; }\n\n.adf-empty-list-drag_drop {\n  height: 56px;\n  opacity: 0.54;\n  font-family: Muli, Helvetica, Arial, sans-serif;\n  font-size: 56px;\n  line-height: 1;\n  letter-spacing: -2px;\n  color: #000000;\n  margin-top: 40px; }\n\n.adf-empty-list__any-files-here-to-add {\n  height: 24px;\n  opacity: 0.54;\n  font-family: Muli, Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n  margin-top: 17px; }\n\n.adf-empty-list__empty_doc_lib {\n  width: 565px;\n  height: 161px;\n  object-fit: contain;\n  margin-top: 17px; }\n"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.error-dialog h3 {\n  margin: 16px 0; }\n\n.activiti-task-details__header {\n  align-self: flex-end;\n  display: flex;\n  font-size: 24px;\n  font-weight: 300;\n  line-height: normal;\n  overflow: hidden;\n  margin: 8px 0 16px 0;\n  cursor: pointer;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none; }\n\n.activiti-task-details__action-button {\n  text-transform: uppercase; }\n\nadf-people > > > .assignment-top-container {\n  background-color: #fff; }\n\n.assignment-container {\n  background: #fff;\n  border: 1px solid #e1e1e1;\n  padding: 10px 20px;\n  width: auto; }\n\nadf-task-header.assign-edit-view /deep/ adf-card-view /deep/ .adf-property[data-automation-id=\"header-assignee\"] {\n  display: none; }\n\n.adf-task-details-header {\n  display: flex;\n  justify-content: space-between; }\n  .adf-task-details-header-toggle {\n    position: relative;\n    top: 10px;\n    margin-right: 2px;\n    height: 23px;\n    cursor: pointer;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none; }\n\n.adf-task-details-core {\n  display: flex;\n  justify-content: space-between; }\n  .adf-task-details-core-sidebar-drawer {\n    margin-left: 10px; }\n  .adf-task-details-core-sidebar-checklist {\n    margin-top: 30px;\n    padding-left: 20px;\n    padding-right: 20px; }\n    .adf-task-details-core-sidebar-checklist /deep/ #checklist-none-message {\n      margin-top: 10px;\n      color: rgba(0, 0, 0, 0.5); }\n    .adf-task-details-core-sidebar-checklist /deep/ .activiti-label.mdl-badge[data-badge]:after {\n      margin-top: 9px;\n      right: -29px; }\n    .adf-task-details-core-sidebar-checklist /deep/ .activiti-label.mdl-badge[data-badge] + div.icon {\n      float: right; }\n    .adf-task-details-core-sidebar-checklist /deep/ .menu-container li.mdl-list {\n      padding: 0; }\n    .adf-task-details-core-sidebar-checklist /deep/ .menu-container li.mdl-list__item {\n      padding: 0;\n      min-height: auto; }\n      .adf-task-details-core-sidebar-checklist /deep/ .menu-container li.mdl-list__item .mdl-chip {\n        width: 100%; }\n        .adf-task-details-core-sidebar-checklist /deep/ .menu-container li.mdl-list__item .mdl-chip button {\n          float: right;\n          position: relative;\n          top: 4px; }\n  .adf-task-details-core-form {\n    flex-grow: 1; }\n    .adf-task-details-core-form /deep/ .adf-form-debug-container {\n      padding: 20px 0 0 0; }\n      .adf-task-details-core-form /deep/ .adf-form-debug-container .mat-slide-toggle {\n        float: right; }\n        .adf-task-details-core-form /deep/ .adf-form-debug-container .mat-slide-toggle + div {\n          background-color: black;\n          padding: 20px;\n          clear: both;\n          margin-top: 30px;\n          color: white; }\n    .adf-task-details-core-form /deep/ .mat-tab-label {\n      flex-grow: 1; }\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 70:
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
var AppDefinitionRepresentationModel = (function () {
    function AppDefinitionRepresentationModel(obj) {
        if (obj) {
            this.defaultAppId = obj.defaultAppId ? obj.defaultAppId : null;
            this.deploymentId = obj.deploymentId ? obj.deploymentId : null;
            this.name = obj.name ? obj.name : null;
            this.description = obj.description ? obj.description : null;
            this.theme = obj.theme ? obj.theme : null;
            this.icon = obj.icon ? obj.icon : null;
            this.id = obj.id ? obj.id : null;
            this.modelId = obj.modelId ? obj.modelId : null;
            this.tenantId = obj.tenantId ? obj.tenantId : null;
        }
    }
    return AppDefinitionRepresentationModel;
}());
exports.AppDefinitionRepresentationModel = AppDefinitionRepresentationModel;
var FilterParamsModel = (function () {
    function FilterParamsModel(obj) {
        if (obj) {
            this.id = obj.id || null;
            this.name = obj.name || null;
            this.index = obj.index;
        }
    }
    return FilterParamsModel;
}());
exports.FilterParamsModel = FilterParamsModel;
var FilterRepresentationModel = (function () {
    function FilterRepresentationModel(obj) {
        if (obj) {
            this.id = obj.id || null;
            this.appId = obj.appId || null;
            this.name = obj.name || null;
            this.recent = !!obj.recent;
            this.icon = obj.icon || null;
            this.filter = new FilterParamRepresentationModel(obj.filter);
            this.index = obj.index;
            this.landingTaskId = obj.landingTaskId;
        }
    }
    FilterRepresentationModel.prototype.hasFilter = function () {
        return this.filter ? true : false;
    };
    return FilterRepresentationModel;
}());
exports.FilterRepresentationModel = FilterRepresentationModel;
var FilterParamRepresentationModel = (function () {
    function FilterParamRepresentationModel(obj) {
        if (obj) {
            this.processDefinitionId = obj.processDefinitionId || null;
            this.processDefinitionKey = obj.processDefinitionKey || null;
            this.name = obj.name || null;
            this.state = obj.state || null;
            this.sort = obj.sort || null;
            this.assignment = obj.assignment || null;
            this.dueAfter = obj.dueAfter || null;
            this.dueBefore = obj.dueBefore || null;
        }
    }
    return FilterParamRepresentationModel;
}());
exports.FilterParamRepresentationModel = FilterParamRepresentationModel;
var TaskQueryRequestRepresentationModel = (function () {
    function TaskQueryRequestRepresentationModel(obj) {
        if (obj) {
            this.appDefinitionId = obj.appDefinitionId || null;
            this.processInstanceId = obj.processInstanceId || null;
            this.processDefinitionId = obj.processDefinitionId || null;
            this.processDefinitionKey = obj.processDefinitionKey || null;
            this.text = obj.text || null;
            this.assignment = obj.assignment || null;
            this.state = obj.state || null;
            this.start = obj.start || null;
            this.sort = obj.sort || null;
            this.page = obj.page || 0;
            this.size = obj.size || 25;
            this.landingTaskId = obj.landingTaskId || '';
        }
    }
    return TaskQueryRequestRepresentationModel;
}());
exports.TaskQueryRequestRepresentationModel = TaskQueryRequestRepresentationModel;


/***/ }),

/***/ 71:
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
var User = (function () {
    function User(obj) {
        if (obj) {
            this.id = obj.id;
            this.email = obj.email || null;
            this.firstName = obj.firstName || null;
            this.lastName = obj.lastName || null;
        }
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(673);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(674);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(675);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(676);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(677);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(678);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(679);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(680);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(681);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(682);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 820:
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
var material_1 = __webpack_require__(3);
var ng2_activiti_form_1 = __webpack_require__(26);
var ng2_alfresco_core_1 = __webpack_require__(1);
var ng2_alfresco_datatable_1 = __webpack_require__(10);
var people_service_1 = __webpack_require__(21);
var process_upload_service_1 = __webpack_require__(131);
var tasklist_service_1 = __webpack_require__(15);
var apps_list_component_1 = __webpack_require__(49);
var checklist_component_1 = __webpack_require__(50);
var comment_list_component_1 = __webpack_require__(128);
var comments_component_1 = __webpack_require__(51);
var create_task_attachment_component_1 = __webpack_require__(52);
var no_task_detail_template_directive_1 = __webpack_require__(53);
var people_list_component_1 = __webpack_require__(54);
var people_search_component_1 = __webpack_require__(33);
var people_component_1 = __webpack_require__(55);
var start_task_component_1 = __webpack_require__(56);
var task_attachment_list_component_1 = __webpack_require__(129);
var task_audit_directive_1 = __webpack_require__(130);
var task_details_component_1 = __webpack_require__(34);
var task_filters_component_1 = __webpack_require__(57);
var task_header_component_1 = __webpack_require__(58);
var tasklist_component_1 = __webpack_require__(59);
var apps_list_component_2 = __webpack_require__(49);
exports.AppsListComponent = apps_list_component_2.AppsListComponent;
var tasklist_component_2 = __webpack_require__(59);
exports.TaskListComponent = tasklist_component_2.TaskListComponent;
var checklist_component_2 = __webpack_require__(50);
exports.ChecklistComponent = checklist_component_2.ChecklistComponent;
var comments_component_2 = __webpack_require__(51);
exports.CommentsComponent = comments_component_2.CommentsComponent;
var task_attachment_list_component_2 = __webpack_require__(129);
exports.TaskAttachmentListComponent = task_attachment_list_component_2.TaskAttachmentListComponent;
var people_component_2 = __webpack_require__(55);
exports.PeopleComponent = people_component_2.PeopleComponent;
var task_header_component_2 = __webpack_require__(58);
exports.TaskHeaderComponent = task_header_component_2.TaskHeaderComponent;
var no_task_detail_template_directive_2 = __webpack_require__(53);
exports.NoTaskDetailsTemplateDirective = no_task_detail_template_directive_2.NoTaskDetailsTemplateDirective;
var task_filters_component_2 = __webpack_require__(57);
exports.TaskFiltersComponent = task_filters_component_2.TaskFiltersComponent;
var task_details_component_2 = __webpack_require__(34);
exports.TaskDetailsComponent = task_details_component_2.TaskDetailsComponent;
var task_audit_directive_2 = __webpack_require__(130);
exports.TaskAuditDirective = task_audit_directive_2.TaskAuditDirective;
var start_task_component_2 = __webpack_require__(56);
exports.StartTaskComponent = start_task_component_2.StartTaskComponent;
var people_search_component_2 = __webpack_require__(33);
exports.PeopleSearchComponent = people_search_component_2.PeopleSearchComponent;
exports.PeopleSearchTitleDirective = people_search_component_2.PeopleSearchTitleDirective;
var create_task_attachment_component_2 = __webpack_require__(52);
exports.AttachmentComponent = create_task_attachment_component_2.AttachmentComponent;
var people_list_component_2 = __webpack_require__(54);
exports.PeopleListComponent = people_list_component_2.PeopleListComponent;
var comment_list_component_2 = __webpack_require__(128);
exports.CommentListComponent = comment_list_component_2.CommentListComponent;
var tasklist_service_2 = __webpack_require__(15);
exports.TaskListService = tasklist_service_2.TaskListService;
var people_service_2 = __webpack_require__(21);
exports.PeopleService = people_service_2.PeopleService;
var process_upload_service_2 = __webpack_require__(131);
exports.ProcessUploadService = process_upload_service_2.ProcessUploadService;
var apps_list_component_3 = __webpack_require__(49);
var checklist_component_3 = __webpack_require__(50);
var comments_component_3 = __webpack_require__(51);
var create_task_attachment_component_3 = __webpack_require__(52);
var no_task_detail_template_directive_3 = __webpack_require__(53);
var people_list_component_3 = __webpack_require__(54);
var people_search_component_3 = __webpack_require__(33);
var people_component_3 = __webpack_require__(55);
var start_task_component_3 = __webpack_require__(56);
var task_details_component_3 = __webpack_require__(34);
var task_filters_component_3 = __webpack_require__(57);
var task_header_component_3 = __webpack_require__(58);
var tasklist_component_3 = __webpack_require__(59);
var people_service_3 = __webpack_require__(21);
var tasklist_service_3 = __webpack_require__(15);
var apps_list_component_4 = __webpack_require__(49);
exports.ActivitiApps = apps_list_component_4.AppsListComponent;
var checklist_component_4 = __webpack_require__(50);
exports.ActivitiChecklist = checklist_component_4.ChecklistComponent;
var comments_component_4 = __webpack_require__(51);
exports.ActivitiComments = comments_component_4.CommentsComponent;
var create_task_attachment_component_4 = __webpack_require__(52);
exports.ActivitiCreateTaskAttachmentComponent = create_task_attachment_component_4.AttachmentComponent;
var no_task_detail_template_directive_4 = __webpack_require__(53);
exports.NoTaskDetailsTemplateComponent = no_task_detail_template_directive_4.NoTaskDetailsTemplateDirective;
var people_list_component_4 = __webpack_require__(54);
exports.PeopleList = people_list_component_4.PeopleListComponent;
var people_search_component_4 = __webpack_require__(33);
exports.ActivitiPeopleSearch = people_search_component_4.PeopleSearchComponent;
var people_component_4 = __webpack_require__(55);
exports.ActivitiPeople = people_component_4.PeopleComponent;
var start_task_component_4 = __webpack_require__(56);
exports.ActivitiStartTaskButton = start_task_component_4.StartTaskComponent;
var task_details_component_4 = __webpack_require__(34);
exports.ActivitiTaskDetails = task_details_component_4.TaskDetailsComponent;
var task_filters_component_4 = __webpack_require__(57);
exports.ActivitiFilters = task_filters_component_4.TaskFiltersComponent;
var task_header_component_4 = __webpack_require__(58);
exports.ActivitiTaskHeader = task_header_component_4.TaskHeaderComponent;
var tasklist_component_4 = __webpack_require__(59);
exports.ActivitiTaskList = tasklist_component_4.TaskListComponent;
var people_service_4 = __webpack_require__(21);
exports.ActivitiPeopleService = people_service_4.PeopleService;
var tasklist_service_4 = __webpack_require__(15);
exports.ActivitiTaskListService = tasklist_service_4.TaskListService;
__export(__webpack_require__(195));
__export(__webpack_require__(70));
__export(__webpack_require__(196));
__export(__webpack_require__(71));
__export(__webpack_require__(63));
__export(__webpack_require__(353));
__export(__webpack_require__(198));
__export(__webpack_require__(197));
exports.ACTIVITI_TASKLIST_DIRECTIVES = [
    no_task_detail_template_directive_1.NoTaskDetailsTemplateDirective,
    apps_list_component_1.AppsListComponent,
    task_filters_component_1.TaskFiltersComponent,
    tasklist_component_1.TaskListComponent,
    task_details_component_1.TaskDetailsComponent,
    task_audit_directive_1.TaskAuditDirective,
    checklist_component_1.ChecklistComponent,
    comments_component_1.CommentsComponent,
    people_component_1.PeopleComponent,
    task_header_component_1.TaskHeaderComponent,
    start_task_component_1.StartTaskComponent,
    people_search_component_1.PeopleSearchComponent,
    people_search_component_1.PeopleSearchTitleDirective,
    people_search_component_1.PeopleSearchActionLabelDirective,
    task_attachment_list_component_1.TaskAttachmentListComponent,
    create_task_attachment_component_1.AttachmentComponent,
    people_list_component_1.PeopleListComponent,
    comment_list_component_1.CommentListComponent,
    apps_list_component_3.AppsListComponent,
    tasklist_component_3.TaskListComponent,
    task_details_component_3.TaskDetailsComponent,
    task_filters_component_3.TaskFiltersComponent,
    no_task_detail_template_directive_3.NoTaskDetailsTemplateDirective,
    checklist_component_3.ChecklistComponent,
    comments_component_3.CommentsComponent,
    people_component_3.PeopleComponent,
    task_header_component_3.TaskHeaderComponent,
    start_task_component_3.StartTaskComponent,
    people_search_component_3.PeopleSearchComponent,
    create_task_attachment_component_3.AttachmentComponent,
    people_list_component_3.PeopleListComponent
];
exports.ACTIVITI_TASKLIST_PROVIDERS = [
    tasklist_service_1.TaskListService,
    people_service_1.PeopleService,
    process_upload_service_1.ProcessUploadService,
    tasklist_service_3.TaskListService,
    people_service_3.PeopleService
];
var ActivitiTaskListModule = ActivitiTaskListModule_1 = (function () {
    function ActivitiTaskListModule() {
    }
    ActivitiTaskListModule.forRoot = function () {
        return {
            ngModule: ActivitiTaskListModule_1,
            providers: exports.ACTIVITI_TASKLIST_PROVIDERS.slice()
        };
    };
    return ActivitiTaskListModule;
}());
ActivitiTaskListModule = ActivitiTaskListModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            ng2_alfresco_core_1.CoreModule,
            ng2_alfresco_datatable_1.DataTableModule,
            ng2_activiti_form_1.ActivitiFormModule,
            material_1.MdIconModule,
            material_1.MdButtonModule,
            material_1.MdInputModule,
            material_1.MdCardModule,
            material_1.MdProgressSpinnerModule,
            material_1.MdDatepickerModule,
            material_1.MdNativeDateModule,
            material_1.MdSelectModule,
            material_1.MdAutocompleteModule,
            material_1.MdGridListModule,
            material_1.MdRippleModule
        ],
        declarations: exports.ACTIVITI_TASKLIST_DIRECTIVES.slice(),
        providers: exports.ACTIVITI_TASKLIST_PROVIDERS.concat([
            common_1.DatePipe,
            {
                provide: ng2_alfresco_core_1.TRANSLATION_PROVIDER,
                multi: true,
                useValue: {
                    name: 'ng2-activiti-tasklist',
                    source: 'assets/ng2-activiti-tasklist'
                }
            }
        ]),
        exports: exports.ACTIVITI_TASKLIST_DIRECTIVES.concat([
            material_1.MdIconModule,
            material_1.MdButtonModule
        ])
    })
], ActivitiTaskListModule);
exports.ActivitiTaskListModule = ActivitiTaskListModule;
var ActivitiTaskListModule_1;


/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ })

/******/ });
});
//# sourceMappingURL=ng2-activiti-tasklist.js.map