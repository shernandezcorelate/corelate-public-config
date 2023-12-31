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
		exports["ng2-alfresco-upload"] = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("@angular/material"));
	else
		root["ng2-alfresco-upload"] = factory(root["@angular/core"], root["ng2-alfresco-core"], root["rxjs/Rx"], root["@angular/material"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 828);
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

/***/ 100:
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
var FileUploadingListComponent = (function () {
    function FileUploadingListComponent(uploadService, nodesApi, notificationService, translateService) {
        this.uploadService = uploadService;
        this.nodesApi = nodesApi;
        this.notificationService = notificationService;
        this.translateService = translateService;
        this.FileUploadStatus = ng2_alfresco_core_1.FileUploadStatus;
        this.files = [];
    }
    FileUploadingListComponent.prototype.cancelFile = function (file) {
        this.uploadService.cancelUpload(file);
    };
    FileUploadingListComponent.prototype.removeFile = function (file) {
        var _this = this;
        this.deleteNode(file)
            .subscribe(function () {
            if (file.status === ng2_alfresco_core_1.FileUploadStatus.Error) {
                _this.notifyError(file);
            }
            _this.uploadService.cancelUpload(file);
        });
    };
    FileUploadingListComponent.prototype.cancelAllFiles = function () {
        var _this = this;
        this.getUploadingFiles()
            .forEach(function (file) { return _this.uploadService.cancelUpload(file); });
        var deletedFiles = this.files
            .filter(function (file) { return file.status === ng2_alfresco_core_1.FileUploadStatus.Complete; })
            .map(function (file) { return _this.deleteNode(file); });
        Rx_1.Observable.forkJoin.apply(Rx_1.Observable, deletedFiles).subscribe(function (files) {
            var errors = files
                .filter(function (file) { return file.status === ng2_alfresco_core_1.FileUploadStatus.Error; });
            if (errors.length) {
                _this.notifyError.apply(_this, errors);
            }
            (_a = _this.uploadService).cancelUpload.apply(_a, files);
            var _a;
        });
    };
    FileUploadingListComponent.prototype.isUploadCompleted = function () {
        return !this.isUploadCancelled() &&
            Boolean(this.files.length) &&
            !this.files
                .some(function (_a) {
                var status = _a.status;
                return status === ng2_alfresco_core_1.FileUploadStatus.Starting ||
                    status === ng2_alfresco_core_1.FileUploadStatus.Progress ||
                    status === ng2_alfresco_core_1.FileUploadStatus.Pending;
            });
    };
    FileUploadingListComponent.prototype.isUploadCancelled = function () {
        return !!this.files.length &&
            this.files
                .every(function (_a) {
                var status = _a.status;
                return status === ng2_alfresco_core_1.FileUploadStatus.Aborted ||
                    status === ng2_alfresco_core_1.FileUploadStatus.Cancelled ||
                    status === ng2_alfresco_core_1.FileUploadStatus.Deleted;
            });
    };
    FileUploadingListComponent.prototype.deleteNode = function (file) {
        var id = file.data.entry.id;
        return this.nodesApi
            .deleteNode(id, { permanent: true })
            .map(function () {
            file.status = ng2_alfresco_core_1.FileUploadStatus.Deleted;
            return file;
        })
            .catch(function (error) {
            file.status = ng2_alfresco_core_1.FileUploadStatus.Error;
            return Rx_1.Observable.of(file);
        });
    };
    FileUploadingListComponent.prototype.notifyError = function () {
        var _this = this;
        var files = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            files[_i] = arguments[_i];
        }
        var translateSubscription = null;
        if (files.length === 1) {
            translateSubscription = this.translateService
                .get('FILE_UPLOAD.MESSAGES.REMOVE_FILE_ERROR', { fileName: files[0].name });
        }
        else {
            translateSubscription = this.translateService
                .get('FILE_UPLOAD.MESSAGES.REMOVE_FILES_ERROR', { total: files.length });
        }
        translateSubscription
            .subscribe(function (message) { return _this.notificationService.openSnackMessage(message, 4000); });
    };
    FileUploadingListComponent.prototype.getUploadingFiles = function () {
        return this.files.filter(function (item) {
            if (item.status === ng2_alfresco_core_1.FileUploadStatus.Pending ||
                item.status === ng2_alfresco_core_1.FileUploadStatus.Progress ||
                item.status === ng2_alfresco_core_1.FileUploadStatus.Starting) {
                return item;
            }
        });
    };
    return FileUploadingListComponent;
}());
__decorate([
    core_1.ContentChild(core_1.TemplateRef),
    __metadata("design:type", Object)
], FileUploadingListComponent.prototype, "template", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], FileUploadingListComponent.prototype, "files", void 0);
FileUploadingListComponent = __decorate([
    core_1.Component({
        selector: 'adf-file-uploading-list, alfresco-file-uploading-list',
        template: __webpack_require__(623),
        styles: [__webpack_require__(793)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.UploadService !== "undefined" && ng2_alfresco_core_1.UploadService) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.NodesApiService !== "undefined" && ng2_alfresco_core_1.NodesApiService) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.NotificationService !== "undefined" && ng2_alfresco_core_1.NotificationService) === "function" && _c || Object, typeof (_d = typeof ng2_alfresco_core_1.AlfrescoTranslationService !== "undefined" && ng2_alfresco_core_1.AlfrescoTranslationService) === "function" && _d || Object])
], FileUploadingListComponent);
exports.FileUploadingListComponent = FileUploadingListComponent;
var _a, _b, _c, _d;


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

/***/ 173:
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
var file_uploading_list_component_1 = __webpack_require__(100);
var FileUploadingDialogComponent = (function () {
    function FileUploadingDialogComponent(uploadService, changeDetecor) {
        this.uploadService = uploadService;
        this.changeDetecor = changeDetecor;
        this.position = 'right';
        this.filesUploadingList = [];
        this.isDialogActive = false;
        this.totalCompleted = 0;
        this.totalErrors = 0;
        this.isDialogMinimized = false;
        this.isConfirmation = false;
    }
    FileUploadingDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listSubscription = this.uploadService
            .queueChanged.subscribe(function (fileList) {
            _this.filesUploadingList = fileList;
            if (_this.filesUploadingList.length) {
                _this.isDialogActive = true;
            }
        });
        this.counterSubscription = Rx_1.Observable
            .merge(this.uploadService.fileUploadComplete, this.uploadService.fileUploadDeleted)
            .subscribe(function (event) {
            _this.totalCompleted = event.totalComplete;
        });
        this.errorSubscription = this.uploadService.fileUploadError
            .subscribe(function (event) {
            _this.totalErrors = event.totalError;
            _this.changeDetecor.detectChanges();
        });
        this.fileUploadSubscription = this.uploadService
            .fileUpload.subscribe(function () {
            _this.changeDetecor.detectChanges();
        });
        this.uploadService.fileDeleted.subscribe(function (objId) {
            if (_this.filesUploadingList) {
                var file = _this.filesUploadingList.find(function (item) {
                    return item.data.entry.id === objId;
                });
                if (file) {
                    file.status = ng2_alfresco_core_1.FileUploadStatus.Cancelled;
                    _this.changeDetecor.detectChanges();
                }
            }
        });
    };
    FileUploadingDialogComponent.prototype.toggleConfirmation = function () {
        this.isConfirmation = !this.isConfirmation;
        if (this.isDialogMinimized) {
            this.isDialogMinimized = false;
        }
    };
    FileUploadingDialogComponent.prototype.cancelAllUploads = function () {
        this.toggleConfirmation();
        this.uploadList.cancelAllFiles();
    };
    FileUploadingDialogComponent.prototype.toggleMinimized = function () {
        this.isDialogMinimized = !this.isDialogMinimized;
        this.changeDetecor.detectChanges();
    };
    FileUploadingDialogComponent.prototype.close = function () {
        this.isConfirmation = false;
        this.totalCompleted = 0;
        this.totalErrors = 0;
        this.filesUploadingList = [];
        this.isDialogActive = false;
        this.isDialogMinimized = false;
        this.uploadService.clearQueue();
        this.changeDetecor.detectChanges();
    };
    FileUploadingDialogComponent.prototype.ngOnDestroy = function () {
        this.uploadService.clearQueue();
        this.listSubscription.unsubscribe();
        this.counterSubscription.unsubscribe();
        this.fileUploadSubscription.unsubscribe();
        this.errorSubscription.unsubscribe();
    };
    return FileUploadingDialogComponent;
}());
__decorate([
    core_1.ViewChild(file_uploading_list_component_1.FileUploadingListComponent),
    __metadata("design:type", typeof (_a = typeof file_uploading_list_component_1.FileUploadingListComponent !== "undefined" && file_uploading_list_component_1.FileUploadingListComponent) === "function" && _a || Object)
], FileUploadingDialogComponent.prototype, "uploadList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FileUploadingDialogComponent.prototype, "position", void 0);
FileUploadingDialogComponent = __decorate([
    core_1.Component({
        selector: 'adf-file-uploading-dialog, file-uploading-dialog',
        template: __webpack_require__(621),
        styles: [__webpack_require__(791)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof ng2_alfresco_core_1.UploadService !== "undefined" && ng2_alfresco_core_1.UploadService) === "function" && _b || Object, typeof (_c = typeof core_1.ChangeDetectorRef !== "undefined" && core_1.ChangeDetectorRef) === "function" && _c || Object])
], FileUploadingDialogComponent);
exports.FileUploadingDialogComponent = FileUploadingDialogComponent;
var _a, _b, _c;


/***/ }),

/***/ 174:
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
var FileUploadingListRowComponent = (function () {
    function FileUploadingListRowComponent() {
        this.cancel = new core_1.EventEmitter();
        this.remove = new core_1.EventEmitter();
        this.FileUploadStatus = ng2_alfresco_core_1.FileUploadStatus;
    }
    FileUploadingListRowComponent.prototype.onCancel = function (file) {
        this.cancel.emit(file);
    };
    FileUploadingListRowComponent.prototype.onRemove = function (file) {
        this.remove.emit(file);
    };
    return FileUploadingListRowComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof ng2_alfresco_core_1.FileModel !== "undefined" && ng2_alfresco_core_1.FileModel) === "function" && _a || Object)
], FileUploadingListRowComponent.prototype, "file", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], FileUploadingListRowComponent.prototype, "cancel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], FileUploadingListRowComponent.prototype, "remove", void 0);
FileUploadingListRowComponent = __decorate([
    core_1.Component({
        selector: 'adf-file-uploading-list-row',
        template: __webpack_require__(622),
        styles: [__webpack_require__(792)]
    })
], FileUploadingListRowComponent);
exports.FileUploadingListRowComponent = FileUploadingListRowComponent;
var _a, _b, _c;


/***/ }),

/***/ 175:
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
var permissions_model_1 = __webpack_require__(212);
var UploadButtonComponent = UploadButtonComponent_1 = (function () {
    function UploadButtonComponent(uploadService, translateService, logService, notificationService, apiService) {
        this.uploadService = uploadService;
        this.translateService = translateService;
        this.logService = logService;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.showNotificationBar = true;
        this.currentFolderPath = '/';
        this.disableWithNoPermission = false;
        this.disabled = false;
        this.uploadFolders = false;
        this.multipleFiles = false;
        this.versioning = false;
        this.acceptedFilesType = '*';
        this.tooltip = null;
        this.rootFolderId = '-root-';
        this.onSuccess = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.createFolder = new core_1.EventEmitter();
        this.permissionEvent = new core_1.EventEmitter();
        this.hasPermission = false;
        this.permissionValue = new Rx_1.Subject();
    }
    UploadButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.permissionValue.subscribe(function (permission) {
            _this.hasPermission = permission;
        });
    };
    UploadButtonComponent.prototype.ngOnChanges = function (changes) {
        var rootFolderId = changes['rootFolderId'];
        if (rootFolderId && rootFolderId.currentValue) {
            this.checkPermission();
        }
    };
    UploadButtonComponent.prototype.isButtonDisabled = function () {
        return this.isForceDisable() || this.isDisableWithNoPermission();
    };
    UploadButtonComponent.prototype.isForceDisable = function () {
        return this.disabled ? true : undefined;
    };
    UploadButtonComponent.prototype.isDisableWithNoPermission = function () {
        return !this.hasPermission && this.disableWithNoPermission ? true : undefined;
    };
    UploadButtonComponent.prototype.onFilesAdded = function ($event) {
        var files = ng2_alfresco_core_1.FileUtils.toFileArray($event.currentTarget.files);
        if (this.hasPermission) {
            this.uploadFiles(files);
        }
        else {
            this.permissionEvent.emit(new permissions_model_1.PermissionModel({ type: 'content', action: 'upload', permission: 'create' }));
        }
        $event.target.value = '';
    };
    UploadButtonComponent.prototype.onDirectoryAdded = function ($event) {
        if (this.hasPermission) {
            var files = ng2_alfresco_core_1.FileUtils.toFileArray($event.currentTarget.files);
            this.uploadFiles(files);
        }
        else {
            this.permissionEvent.emit(new permissions_model_1.PermissionModel({ type: 'content', action: 'upload', permission: 'create' }));
        }
        $event.target.value = '';
    };
    UploadButtonComponent.prototype.uploadFiles = function (files) {
        var latestFilesAdded = files
            .map(this.createFileModel.bind(this))
            .filter(this.isFileAcceptable.bind(this));
        if (latestFilesAdded.length > 0) {
            (_a = this.uploadService).addToQueue.apply(_a, latestFilesAdded);
            this.uploadService.uploadFilesInTheQueue(this.onSuccess);
            if (this.showNotificationBar) {
                this.showUndoNotificationBar(latestFilesAdded);
            }
        }
        var _a;
    };
    UploadButtonComponent.prototype.createFileModel = function (file) {
        return new ng2_alfresco_core_1.FileModel(file, {
            newVersion: this.versioning,
            parentId: this.rootFolderId,
            path: (file.webkitRelativePath || '').replace(/\/[^\/]*$/, '')
        });
    };
    UploadButtonComponent.prototype.isFileAcceptable = function (file) {
        if (this.acceptedFilesType === '*') {
            return true;
        }
        var allowedExtensions = this.acceptedFilesType
            .split(',')
            .map(function (ext) { return ext.replace(/^\./, ''); });
        if (allowedExtensions.indexOf(file.extension) !== -1) {
            return true;
        }
        return false;
    };
    UploadButtonComponent.prototype.showUndoNotificationBar = function (latestFilesAdded) {
        var _this = this;
        var messageTranslate, actionTranslate;
        messageTranslate = this.translateService.get('FILE_UPLOAD.MESSAGES.PROGRESS');
        actionTranslate = this.translateService.get('FILE_UPLOAD.ACTION.UNDO');
        this.notificationService.openSnackMessageAction(messageTranslate.value, actionTranslate.value, 3000).onAction().subscribe(function () {
            (_a = _this.uploadService).cancelUpload.apply(_a, latestFilesAdded);
            var _a;
        });
    };
    UploadButtonComponent.prototype.checkPermission = function () {
        var _this = this;
        if (this.rootFolderId) {
            this.getFolderNode(this.rootFolderId).subscribe(function (res) { return _this.permissionValue.next(_this.hasCreatePermission(res)); }, function (error) { return _this.onError.emit(error); });
        }
    };
    UploadButtonComponent.prototype.getFolderNode = function (nodeId) {
        var _this = this;
        var opts = {
            includeSource: true,
            include: ['allowableOperations']
        };
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().nodes.getNodeInfo(nodeId, opts))
            .catch(function (err) { return _this.handleError(err); });
    };
    UploadButtonComponent.prototype.handleError = function (error) {
        this.logService.error(error);
        return Rx_1.Observable.throw(error || 'Server error');
    };
    UploadButtonComponent.prototype.hasCreatePermission = function (node) {
        if (node && node.allowableOperations) {
            return node.allowableOperations.find(function (permision) { return permision === 'create'; }) ? true : false;
        }
        return false;
    };
    return UploadButtonComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UploadButtonComponent.prototype, "showNotificationBar", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UploadButtonComponent.prototype, "currentFolderPath", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UploadButtonComponent.prototype, "disableWithNoPermission", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UploadButtonComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UploadButtonComponent.prototype, "uploadFolders", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UploadButtonComponent.prototype, "multipleFiles", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UploadButtonComponent.prototype, "versioning", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UploadButtonComponent.prototype, "acceptedFilesType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UploadButtonComponent.prototype, "staticTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UploadButtonComponent.prototype, "tooltip", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UploadButtonComponent.prototype, "rootFolderId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UploadButtonComponent.prototype, "onSuccess", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UploadButtonComponent.prototype, "onError", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UploadButtonComponent.prototype, "createFolder", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], UploadButtonComponent.prototype, "permissionEvent", void 0);
UploadButtonComponent = UploadButtonComponent_1 = __decorate([
    core_1.Component({
        selector: 'adf-upload-button, alfresco-upload-button',
        template: __webpack_require__(624),
        styles: [__webpack_require__(794)],
        providers: [
            { provide: ng2_alfresco_core_1.EXTENDIBLE_COMPONENT, useExisting: core_1.forwardRef(function () { return UploadButtonComponent_1; }) }
        ],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof ng2_alfresco_core_1.UploadService !== "undefined" && ng2_alfresco_core_1.UploadService) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.AlfrescoTranslationService !== "undefined" && ng2_alfresco_core_1.AlfrescoTranslationService) === "function" && _c || Object, typeof (_d = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _d || Object, typeof (_e = typeof ng2_alfresco_core_1.NotificationService !== "undefined" && ng2_alfresco_core_1.NotificationService) === "function" && _e || Object, typeof (_f = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _f || Object])
], UploadButtonComponent);
exports.UploadButtonComponent = UploadButtonComponent;
var UploadButtonComponent_1, _a, _b, _c, _d, _e, _f;


/***/ }),

/***/ 176:
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
var UploadDragAreaComponent = UploadDragAreaComponent_1 = (function () {
    function UploadDragAreaComponent(uploadService, translateService, notificationService) {
        this.uploadService = uploadService;
        this.translateService = translateService;
        this.notificationService = notificationService;
        this.showNotificationBar = true;
        this.currentFolderPath = '/';
        this.rootFolderId = '-root-';
        this.disabled = false;
        this.versioning = false;
        this.onSuccess = new core_1.EventEmitter();
    }
    Object.defineProperty(UploadDragAreaComponent.prototype, "enabled", {
        get: function () {
            console.warn('Deprecated: enabled input property should not be used for UploadDragAreaComponent. Please use disabled instead.');
            return !this.disabled;
        },
        set: function (enabled) {
            console.warn('Deprecated: enabled input property should not be used for UploadDragAreaComponent. Please use disabled instead.');
            this.disabled = !enabled;
        },
        enumerable: true,
        configurable: true
    });
    UploadDragAreaComponent.prototype.onFilesDropped = function (files) {
        var _this = this;
        if (!this.disabled && files.length) {
            var fileModels = files.map(function (file) { return new ng2_alfresco_core_1.FileModel(file, {
                newVersion: _this.versioning,
                path: '/',
                parentId: _this.parentId || _this.rootFolderId
            }); });
            (_a = this.uploadService).addToQueue.apply(_a, fileModels);
            this.uploadService.uploadFilesInTheQueue(this.onSuccess);
            var latestFilesAdded = this.uploadService.getQueue();
            if (this.showNotificationBar) {
                this.showUndoNotificationBar(latestFilesAdded);
            }
        }
        var _a;
    };
    UploadDragAreaComponent.prototype.onFilesEntityDropped = function (item) {
        var _this = this;
        if (!this.disabled) {
            item.file(function (file) {
                var fileModel = new ng2_alfresco_core_1.FileModel(file, {
                    newVersion: _this.versioning,
                    parentId: _this.parentId || _this.rootFolderId,
                    path: item.fullPath.replace(item.name, '')
                });
                _this.uploadService.addToQueue(fileModel);
                _this.uploadService.uploadFilesInTheQueue(_this.onSuccess);
            });
            if (this.showNotificationBar) {
                this.showUndoNotificationBar(item);
            }
        }
    };
    UploadDragAreaComponent.prototype.onFolderEntityDropped = function (folder) {
        var _this = this;
        if (!this.disabled && folder.isDirectory) {
            ng2_alfresco_core_1.FileUtils.flattern(folder).then(function (entries) {
                var files = entries.map(function (entry) {
                    return new ng2_alfresco_core_1.FileModel(entry.file, {
                        newVersion: _this.versioning,
                        parentId: _this.parentId || _this.rootFolderId,
                        path: entry.relativeFolder
                    });
                });
                (_a = _this.uploadService).addToQueue.apply(_a, files);
                if (_this.showNotificationBar) {
                    var latestFilesAdded = _this.uploadService.getQueue();
                    _this.showUndoNotificationBar(latestFilesAdded);
                }
                _this.uploadService.uploadFilesInTheQueue(_this.onSuccess);
                var _a;
            });
        }
    };
    UploadDragAreaComponent.prototype.showUndoNotificationBar = function (latestFilesAdded) {
        var _this = this;
        var messageTranslate, actionTranslate;
        messageTranslate = this.translateService.get('FILE_UPLOAD.MESSAGES.PROGRESS');
        actionTranslate = this.translateService.get('FILE_UPLOAD.ACTION.UNDO');
        this.notificationService.openSnackMessageAction(messageTranslate.value, actionTranslate.value, 3000).onAction().subscribe(function () {
            (_a = _this.uploadService).cancelUpload.apply(_a, latestFilesAdded);
            var _a;
        });
    };
    UploadDragAreaComponent.prototype.showErrorNotificationBar = function (errorMessage) {
        this.notificationService.openSnackMessage(errorMessage, 3000);
    };
    UploadDragAreaComponent.prototype.isDroppable = function () {
        return !this.disabled;
    };
    UploadDragAreaComponent.prototype.onUploadFiles = function (event) {
        var _this = this;
        event.stopPropagation();
        event.preventDefault();
        var isAllowed = this.hasCreatePermission(event.detail.data.obj.entry);
        if (isAllowed) {
            var files = event.detail.files;
            if (files && files.length > 0) {
                var parentId_1 = this.parentId || this.rootFolderId;
                if (event.detail.data && event.detail.data.obj.entry.isFolder) {
                    parentId_1 = event.detail.data.obj.entry.id || this.parentId || this.rootFolderId;
                }
                var fileModels = files.map(function (fileInfo) { return new ng2_alfresco_core_1.FileModel(fileInfo.file, {
                    newVersion: _this.versioning,
                    path: fileInfo.relativeFolder,
                    parentId: parentId_1
                }); });
                this.uploadFiles(fileModels);
            }
        }
    };
    UploadDragAreaComponent.prototype.uploadFiles = function (files) {
        if (files.length) {
            (_a = this.uploadService).addToQueue.apply(_a, files);
            this.uploadService.uploadFilesInTheQueue(this.onSuccess);
            var latestFilesAdded = this.uploadService.getQueue();
            if (this.showNotificationBar) {
                this.showUndoNotificationBar(latestFilesAdded);
            }
        }
        var _a;
    };
    UploadDragAreaComponent.prototype.hasCreatePermission = function (node) {
        var isPermitted = false;
        if (node && node['allowableOperations']) {
            var permFound = node['allowableOperations'].find(function (element) { return element === 'create'; });
            isPermitted = permFound ? true : false;
        }
        return isPermitted;
    };
    return UploadDragAreaComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], UploadDragAreaComponent.prototype, "enabled", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UploadDragAreaComponent.prototype, "showNotificationBar", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UploadDragAreaComponent.prototype, "currentFolderPath", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UploadDragAreaComponent.prototype, "rootFolderId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UploadDragAreaComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], UploadDragAreaComponent.prototype, "versioning", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UploadDragAreaComponent.prototype, "parentId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UploadDragAreaComponent.prototype, "onSuccess", void 0);
UploadDragAreaComponent = UploadDragAreaComponent_1 = __decorate([
    core_1.Component({
        selector: 'adf-upload-drag-area, alfresco-upload-drag-area',
        template: __webpack_require__(625),
        styles: [__webpack_require__(442)],
        providers: [
            { provide: ng2_alfresco_core_1.EXTENDIBLE_COMPONENT, useExisting: core_1.forwardRef(function () { return UploadDragAreaComponent_1; }) }
        ],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.UploadService !== "undefined" && ng2_alfresco_core_1.UploadService) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.AlfrescoTranslationService !== "undefined" && ng2_alfresco_core_1.AlfrescoTranslationService) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.NotificationService !== "undefined" && ng2_alfresco_core_1.NotificationService) === "function" && _c || Object])
], UploadDragAreaComponent);
exports.UploadDragAreaComponent = UploadDragAreaComponent;
var UploadDragAreaComponent_1, _a, _b, _c;


/***/ }),

/***/ 177:
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
var FileDraggableDirective = (function () {
    function FileDraggableDirective(el, ngZone) {
        this.ngZone = ngZone;
        this.enabled = true;
        this.onFilesDropped = new core_1.EventEmitter();
        this.onFilesEntityDropped = new core_1.EventEmitter();
        this.onFolderEntityDropped = new core_1.EventEmitter();
        this.cssClassName = 'file-draggable__input-focus';
        this.element = el.nativeElement;
    }
    FileDraggableDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.element.addEventListener('dragenter', _this.onDragEnter.bind(_this));
            _this.element.addEventListener('dragover', _this.onDragOver.bind(_this));
            _this.element.addEventListener('dragleave', _this.onDragLeave.bind(_this));
            _this.element.addEventListener('drop', _this.onDropFiles.bind(_this));
        });
    };
    FileDraggableDirective.prototype.ngOnDestroy = function () {
        this.element.removeEventListener('dragenter', this.onDragEnter);
        this.element.removeEventListener('dragover', this.onDragOver);
        this.element.removeEventListener('dragleave', this.onDragLeave);
        this.element.removeEventListener('drop', this.onDropFiles);
    };
    FileDraggableDirective.prototype.onDropFiles = function (event) {
        if (this.enabled && !event.defaultPrevented) {
            this.preventDefault(event);
            var items = event.dataTransfer.items;
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    if (typeof items[i].webkitGetAsEntry !== 'undefined') {
                        var item = items[i].webkitGetAsEntry();
                        if (item) {
                            if (item.isFile) {
                                this.onFilesEntityDropped.emit(item);
                            }
                            else if (item.isDirectory) {
                                this.onFolderEntityDropped.emit(item);
                            }
                        }
                    }
                    else {
                        var files = ng2_alfresco_core_1.FileUtils.toFileArray(event.dataTransfer.files);
                        this.onFilesDropped.emit(files);
                    }
                }
            }
            else {
                var files = ng2_alfresco_core_1.FileUtils.toFileArray(event.dataTransfer.files);
                this.onFilesDropped.emit(files);
            }
            this.element.classList.remove(this.cssClassName);
        }
    };
    FileDraggableDirective.prototype.onDragEnter = function (event) {
        if (this.enabled && !event.defaultPrevented) {
            this.preventDefault(event);
            this.element.classList.add(this.cssClassName);
        }
    };
    FileDraggableDirective.prototype.onDragLeave = function (event) {
        if (this.enabled && !event.defaultPrevented) {
            this.preventDefault(event);
            this.element.classList.remove(this.cssClassName);
        }
    };
    FileDraggableDirective.prototype.onDragOver = function (event) {
        if (this.enabled && !event.defaultPrevented) {
            this.preventDefault(event);
            this.element.classList.add(this.cssClassName);
        }
    };
    FileDraggableDirective.prototype.preventDefault = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    return FileDraggableDirective;
}());
__decorate([
    core_1.Input('file-draggable'),
    __metadata("design:type", Boolean)
], FileDraggableDirective.prototype, "enabled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], FileDraggableDirective.prototype, "onFilesDropped", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], FileDraggableDirective.prototype, "onFilesEntityDropped", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], FileDraggableDirective.prototype, "onFolderEntityDropped", void 0);
FileDraggableDirective = __decorate([
    core_1.Directive({
        selector: '[file-draggable]'
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _d || Object, typeof (_e = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _e || Object])
], FileDraggableDirective);
exports.FileDraggableDirective = FileDraggableDirective;
var _a, _b, _c, _d, _e;


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 212:
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
var PermissionModel = (function () {
    function PermissionModel(obj) {
        if (obj) {
            this.type = obj.type || null;
            this.action = obj.action || null;
            this.permission = obj.permission || null;
        }
    }
    return PermissionModel;
}());
exports.PermissionModel = PermissionModel;


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 378:
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
        material_1.MdIconModule,
        material_1.MdProgressSpinnerModule,
        material_1.MdButtonModule
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

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".upload-border {\n    vertical-align: middle;\n    text-align: center;\n}\n\n.file-draggable__input-focus {\n    color: #2196F3;\n    border: 1px dashed #2196F3;\n}\n", ""]);

// exports


/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(426);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isDialogActive\"\n     class=\"upload-dialog\"\n     [class.upload-dialog--minimized]=\"isDialogMinimized\"\n     [class.upload-dialog--position-left]=\"position === 'left'\"\n     [class.upload-dialog--position-right]=\"position === 'right'\">\n    <header class=\"upload-dialog__header\">\n        <button\n            md-button\n            color=\"secondary\"\n            [disabled]=\"isConfirmation\"\n            (click)=\"toggleMinimized()\">\n            <md-icon\n                md-list-icon\n                title=\"{{ (isDialogMinimized ? 'ADF_FILE_UPLOAD.BUTTON.MAXIMIZE': 'ADF_FILE_UPLOAD.BUTTON.MINIMIZE') | translate }}\">\n                    {{ isDialogMinimized ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}\n            </md-icon>\n        </button>\n\n        <span\n            class=\"upload-dialog__title\"\n            *ngIf=\"!uploadList.isUploadCompleted() && !uploadList.isUploadCancelled()\">\n            {{ 'FILE_UPLOAD.MESSAGES.UPLOAD_PROGRESS'\n                | translate: {\n                    completed: totalCompleted,\n                    total: filesUploadingList.length\n                }\n            }}\n        </span>\n\n        <span\n            class=\"upload-dialog__title\"\n            *ngIf=\"uploadList.isUploadCompleted()\">\n            {{ 'FILE_UPLOAD.MESSAGES.UPLOAD_COMPLETED'\n                | translate: {\n                    completed: totalCompleted,\n                    total: filesUploadingList.length\n                }\n            }}\n        </span>\n\n        <span\n            class=\"upload-dialog__title\"\n            *ngIf=\"uploadList.isUploadCancelled()\">\n            {{ 'FILE_UPLOAD.MESSAGES.UPLOAD_CANCELED' | translate }}\n        </span>\n    </header>\n\n    <section\n        class=\"upload-dialog__info\"\n        *ngIf=\"totalErrors\">\n        {{\n            (totalErrors > 1\n                 ? 'FILE_UPLOAD.MESSAGES.UPLOAD_ERRORS'\n                 : 'FILE_UPLOAD.MESSAGES.UPLOAD_ERROR')\n                 | translate: { total: totalErrors }\n        }}\n    </section>\n\n    <section\n        class=\"upload-dialog__content\"\n        [class.upload-dialog--padding]=\"isConfirmation\">\n        <adf-file-uploading-list\n            [class.upload-dialog--hide]=\"isConfirmation\"\n            #uploadList\n            [files]=\"filesUploadingList\">\n                <ng-template let-file=\"$implicit\">\n                     <adf-file-uploading-list-row\n                        [file]=\"file\"\n                        (remove)=\"uploadList.removeFile(file)\"\n                        (cancel)=\"uploadList.cancelFile(file)\">\n                    </adf-file-uploading-list-row>\n                </ng-template>\n        </adf-file-uploading-list>\n\n        <div\n            class=\"upload-dialog__confirmation\"\n            [class.upload-dialog--hide]=\"!isConfirmation\">\n                <p class=\"upload-dialog__confirmation--title\">\n                    {{ 'ADF_FILE_UPLOAD.CONFIRMATION.MESSAGE.TITLE' | translate }}\n                </p>\n\n                <p class=\"upload-dialog__confirmation--text\">\n                    {{ 'ADF_FILE_UPLOAD.CONFIRMATION.MESSAGE.TEXT' | translate }}\n                </p>\n        </div>\n    </section>\n\n    <footer\n        class=\"upload-dialog__actions\"\n        [class.upload-dialog--hide]=\"isConfirmation\">\n        <button\n            color=\"primary\"\n            md-button\n            *ngIf=\"!uploadList.isUploadCompleted() && !uploadList.isUploadCancelled()\"\n            (click)=\"toggleConfirmation()\">\n            {{ 'ADF_FILE_UPLOAD.BUTTON.CANCEL_ALL' | translate }}\n        </button>\n\n        <button\n            *ngIf=\"uploadList.isUploadCompleted() || uploadList.isUploadCancelled()\"\n            md-button\n            color=\"primary\"\n            (click)=\"close($event)\">\n            {{ 'ADF_FILE_UPLOAD.BUTTON.CLOSE' | translate }}\n        </button>\n    </footer>\n\n    <footer\n        class=\"upload-dialog__actions\"\n        [class.upload-dialog--hide]=\"!isConfirmation\">\n        <button\n            color=\"secondary\"\n            md-button\n            (click)=\"cancelAllUploads()\">\n            {{ 'ADF_FILE_UPLOAD.CONFIRMATION.BUTTON.CANCEL' | translate }}\n        </button>\n\n        <button\n            md-button\n            color=\"primary\"\n            (click)=\"toggleConfirmation()\">\n            {{ 'ADF_FILE_UPLOAD.CONFIRMATION.BUTTON.CONTINUE' | translate }}\n        </button>\n    </footer>\n</div>\n";

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-file-uploading-row\">\n    <md-icon\n        md-list-icon\n        class=\"adf-file-uploading-row__type\">\n        insert_drive_file\n    </md-icon>\n\n    <span\n        class=\"adf-file-uploading-row__name\"\n        title=\"{{ file.name }}\">\n        {{ file.name }}\n    </span>\n\n    <div\n        *ngIf=\"file.status === FileUploadStatus.Progress || file.status === FileUploadStatus.Starting\"\n        (click)=\"onCancel(file)\"\n        class=\"adf-file-uploading-row__group adf-file-uploading-row__group--toggle\"\n        title=\"{{ 'ADF_FILE_UPLOAD.BUTTON.CANCEL_FILE' | translate }}\">\n        <span class=\"adf-file-uploading-row__status\">\n            {{ file.progress.loaded | adfFileSize }} / {{ file.progress.total | adfFileSize }}\n        </span>\n\n        <md-icon\n            md-list-icon\n            class=\"adf-file-uploading-row__action adf-file-uploading-row__action--cancel\">\n            clear\n        </md-icon>\n    </div>\n\n    <div\n        *ngIf=\"file.status === FileUploadStatus.Complete\"\n        (click)=\"onRemove(file)\"\n        class=\"adf-file-uploading-row__group adf-file-uploading-row__group--toggle\"\n        title=\"{{ 'ADF_FILE_UPLOAD.BUTTON.REMOVE_FILE' | translate }}\">\n        <md-icon\n            md-list-icon\n            class=\"adf-file-uploading-row__status adf-file-uploading-row__status--done\">\n            check_circle\n        </md-icon>\n\n        <md-icon\n            md-list-icon\n            class=\"adf-file-uploading-row__action adf-file-uploading-row__action--remove\">\n            remove_circle\n        </md-icon>\n    </div>\n\n    <div\n        *ngIf=\"file.status === FileUploadStatus.Pending\"\n        (click)=\"onCancel(file)\"\n        class=\"adf-file-uploading-row__group adf-file-uploading-row__group--toggle\">\n        <md-icon\n            md-list-icon\n            class=\"adf-file-uploading-row__status adf-file-uploading-row__status--pending\">\n            schedule\n        </md-icon>\n\n        <md-icon\n            md-list-icon\n            class=\"adf-file-uploading-row__action adf-file-uploading-row__action--remove\">\n            remove_circle\n        </md-icon>\n    </div>\n\n    <div\n        *ngIf=\"file.status === FileUploadStatus.Error\"\n        class=\"adf-file-uploading-row__block adf-file-uploading-row__status--error\"\n        title=\"{{ file.response }}\">\n        <md-icon md-list-icon>\n            report_problem\n        </md-icon>\n    </div>\n\n    <div\n        *ngIf=\"file.status === FileUploadStatus.Cancelled  ||\n            file.status === FileUploadStatus.Aborted ||\n            file.status === FileUploadStatus.Deleted\"\n        class=\"adf-file-uploading-row__block adf-file-uploading-row__status--cancelled\">\n        {{ 'ADF_FILE_UPLOAD.STATUS.FILE_CANCELED_STATUS' | translate }}\n    </div>\n<div>";

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "<div class=\"upload-list\">\n    <ng-template\n        ngFor\n        [ngForOf]=\"files\"\n        [ngForTemplate]=\"template\">\n    </ng-template>\n</div>\n";

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = "<form class=\"adf-upload-button-file-container\">\n    <!--Files Upload-->\n    <a *ngIf=\"!uploadFolders\"\n        [disabled]=\"isButtonDisabled()\"\n        md-raised-button color=\"primary\">\n        <md-icon>file_upload</md-icon>\n\n        <!--Multiple Files Upload-->\n        <span *ngIf=\"multipleFiles\">\n            <label\n                id=\"upload-multiple-file-label\"\n                *ngIf=\"!staticTitle\"\n                for=\"upload-multiple-files\">{{ 'FILE_UPLOAD.BUTTON.UPLOAD_FILE' | translate }}</label>\n            <label\n                id=\"upload-multiple-file-label-static\"\n                *ngIf=\"staticTitle\"\n                for=\"upload-multiple-files\">{{ staticTitle }}</label>\n            <input #uploadFiles\n                id=\"upload-multiple-files\"\n                data-automation-id=\"upload-multiple-files\"\n                type=\"file\"\n                name=\"uploadFiles\"\n                multiple=\"multiple\"\n                accept=\"{{acceptedFilesType}}\"\n                [attr.disabled]=\"isButtonDisabled()\"\n                [title]=\"tooltip\"\n                (change)=\"onFilesAdded($event)\">\n        </span>\n\n        <!--Single Files Upload-->\n        <span *ngIf=\"!multipleFiles\">\n            <label\n                id=\"upload-single-file-label\"\n                *ngIf=\"!staticTitle\"\n                for=\"upload-single-file\">{{ 'FILE_UPLOAD.BUTTON.UPLOAD_FILE' | translate }}</label>\n            <label\n                id=\"upload-single-file-label-static\"\n                *ngIf=\"staticTitle\"\n                for=\"upload-single-file\">{{ staticTitle }}</label>\n            <input #uploadFiles\n                id=\"upload-single-file\"\n                data-automation-id=\"upload-single-file\"\n                type=\"file\"\n                name=\"uploadFiles\"\n                accept=\"{{acceptedFilesType}}\"\n                [attr.disabled]=\"isButtonDisabled()\"\n                [title]=\"tooltip\"\n                (change)=\"onFilesAdded($event)\">\n        </span>\n    </a>\n\n    <!--Folders Upload-->\n    <a *ngIf=\"uploadFolders\"\n        [disabled]=\"isButtonDisabled()\" md-raised-button color=\"primary\">\n        <md-icon>file_upload</md-icon>\n        <label\n            id=\"uploadFolder-label\"\n            *ngIf=\"!staticTitle\"\n            for=\"uploadFolder\">{{ 'FILE_UPLOAD.BUTTON.UPLOAD_FOLDER' | translate }}</label>\n        <label\n            id=\"uploadFolder-label-static\"\n            *ngIf=\"staticTitle\"\n            for=\"uploadFolder\">{{ staticTitle }}</label>\n        <input #uploadFolders\n            id=\"uploadFolder\"\n            data-automation-id=\"uploadFolder\"\n            type=\"file\"\n            name=\"uploadFiles\"\n            multiple=\"multiple\"\n            accept=\"{{acceptedFilesType}}\"\n            webkitdirectory directory\n            [attr.disabled]=\"isButtonDisabled()\"\n            [title]=\"tooltip\"\n            (change)=\"onDirectoryAdded($event)\">\n    </a>\n</form>\n";

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = "<div [file-draggable]=\"isDroppable()\" id=\"UploadBorder\" class=\"upload-border\"\n     (onFilesDropped)=\"onFilesDropped($event)\"\n     (onFilesEntityDropped)=\"onFilesEntityDropped($event)\"\n     (onFolderEntityDropped)=\"onFolderEntityDropped($event)\"\n     (upload-files)=\"onUploadFiles($event)\"\n     dropzone=\"\" webkitdropzone=\"*\" #droparea>\n    <ng-content></ng-content>\n</div>\n";

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = ".adf-upload-button-file-container input {\n  cursor: pointer;\n  height: 100%;\n  right: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 300px;\n  z-index: 4; }\n"

/***/ }),

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(708);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(709);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(710);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(711);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 828:
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
var material_module_1 = __webpack_require__(378);
var file_uploading_dialog_component_1 = __webpack_require__(173);
var file_uploading_list_row_component_1 = __webpack_require__(174);
var file_uploading_list_component_1 = __webpack_require__(100);
var upload_button_component_1 = __webpack_require__(175);
var upload_drag_area_component_1 = __webpack_require__(176);
var file_draggable_directive_1 = __webpack_require__(177);
__export(__webpack_require__(175));
__export(__webpack_require__(173));
__export(__webpack_require__(176));
__export(__webpack_require__(177));
__export(__webpack_require__(100));
__export(__webpack_require__(174));
__export(__webpack_require__(212));
exports.UPLOAD_DIRECTIVES = [
    file_draggable_directive_1.FileDraggableDirective,
    upload_drag_area_component_1.UploadDragAreaComponent,
    upload_button_component_1.UploadButtonComponent,
    file_uploading_dialog_component_1.FileUploadingDialogComponent,
    file_uploading_list_component_1.FileUploadingListComponent,
    file_uploading_list_row_component_1.FileUploadingListRowComponent
];
var UploadModule = UploadModule_1 = (function () {
    function UploadModule() {
    }
    UploadModule.forRoot = function () {
        return {
            ngModule: UploadModule_1
        };
    };
    return UploadModule;
}());
UploadModule = UploadModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            ng2_alfresco_core_1.CoreModule,
            material_module_1.MaterialModule
        ],
        declarations: exports.UPLOAD_DIRECTIVES.slice(),
        providers: [
            {
                provide: ng2_alfresco_core_1.TRANSLATION_PROVIDER,
                multi: true,
                useValue: {
                    name: 'ng2-alfresco-upload',
                    source: 'assets/ng2-alfresco-upload'
                }
            }
        ],
        exports: exports.UPLOAD_DIRECTIVES.slice()
    })
], UploadModule);
exports.UploadModule = UploadModule;
var UploadModule_1;


/***/ })

/******/ });
});
//# sourceMappingURL=ng2-alfresco-upload.js.map