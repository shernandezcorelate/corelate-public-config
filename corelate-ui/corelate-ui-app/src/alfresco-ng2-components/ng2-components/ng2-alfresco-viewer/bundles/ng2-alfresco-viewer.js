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
		module.exports = factory(require("@angular/core"), require("ng2-alfresco-core"), require("@angular/material"), require("@angular/http"), require("rxjs/add/operator/toPromise"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "ng2-alfresco-core", "@angular/material", "@angular/http", "rxjs/add/operator/toPromise"], factory);
	else if(typeof exports === 'object')
		exports["ng2-alfresco-viewer"] = factory(require("@angular/core"), require("ng2-alfresco-core"), require("@angular/material"), require("@angular/http"), require("rxjs/add/operator/toPromise"));
	else
		root["ng2-alfresco-viewer"] = factory(root["@angular/core"], root["ng2-alfresco-core"], root["@angular/material"], root["@angular/http"], root["rxjs/add/operator/toPromise"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_815__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 830);
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

/***/ 103:
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
var http_1 = __webpack_require__(20);
var material_1 = __webpack_require__(3);
var viewer_dialog_settings_1 = __webpack_require__(213);
var ViewerDialogComponent = (function () {
    function ViewerDialogComponent(dialogRef, settings, http) {
        this.dialogRef = dialogRef;
        this.http = http;
        this.fileName = 'Unknown file';
        this.fileUrl = null;
        this.fileMimeType = null;
        this.downloadUrl = null;
        this.allowInfoDrawer = false;
        this.showInfoDrawer = false;
        this.unknownFormatIcon = 'wifi_tethering';
        this.unknownFormatText = 'Document preview could not be loaded.';
        this.viewerType = null;
        this.types = [
            { mimeType: 'application/x-javascript', type: 'text' },
            { mimeType: 'application/pdf', type: 'pdf' }
        ];
        this.fileUrl = settings.fileUrl;
        this.fileName = settings.fileName;
        this.fileMimeType = settings.fileMimeType;
        this.downloadUrl = settings.downloadUrl;
    }
    ViewerDialogComponent.prototype.ngOnInit = function () {
        this.viewerType = this.detectViewerType(this.fileMimeType);
        this.asText = this.getAsText();
        if (this.viewerType !== 'unknown') {
            this.allowInfoDrawer = true;
        }
    };
    ViewerDialogComponent.prototype.detectViewerType = function (mimeType) {
        if (mimeType) {
            mimeType = mimeType.toLowerCase();
            if (mimeType.startsWith('image/')) {
                return 'image';
            }
            if (mimeType.startsWith('text/')) {
                return 'text';
            }
            if (mimeType.startsWith('video/')) {
                return 'video';
            }
            if (mimeType.startsWith('audio/')) {
                return 'audio';
            }
            var registered = this.types.find(function (t) { return t.mimeType === mimeType; });
            if (registered) {
                return registered.type;
            }
        }
        return 'unknown';
    };
    ViewerDialogComponent.prototype.download = function () {
        if (this.downloadUrl && this.fileName) {
            var link = document.createElement('a');
            link.style.display = 'none';
            link.download = this.fileName;
            link.href = this.downloadUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    ViewerDialogComponent.prototype.getAsText = function () {
        return this.http.get(this.fileUrl).map(function (res) { return res.text(); });
    };
    ViewerDialogComponent.prototype.close = function () {
        this.dialogRef.close(true);
    };
    return ViewerDialogComponent;
}());
ViewerDialogComponent = __decorate([
    core_1.Component({
        selector: 'adf-viewer-dialog',
        template: __webpack_require__(632),
        styles: [__webpack_require__(802)],
        encapsulation: core_1.ViewEncapsulation.None,
        host: { 'class': 'adf-viewer-dialog' }
    }),
    __param(1, core_1.Inject(material_1.MD_DIALOG_DATA)),
    __metadata("design:paramtypes", [typeof (_a = typeof material_1.MdDialogRef !== "undefined" && material_1.MdDialogRef) === "function" && _a || Object, typeof (_b = typeof viewer_dialog_settings_1.ViewerDialogSettings !== "undefined" && viewer_dialog_settings_1.ViewerDialogSettings) === "function" && _b || Object, typeof (_c = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _c || Object])
], ViewerDialogComponent);
exports.ViewerDialogComponent = ViewerDialogComponent;
var _a, _b, _c;


/***/ }),

/***/ 104:
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
var ViewerComponent = (function () {
    function ViewerComponent(apiService, logService) {
        this.apiService = apiService;
        this.logService = logService;
        this.urlFile = '';
        this.fileNodeId = null;
        this.overlayMode = false;
        this.showViewer = true;
        this.showToolbar = true;
        this.showViewerChange = new core_1.EventEmitter();
        this.extensionChange = new core_1.EventEmitter();
        this.extensionTemplates = [];
        this.externalExtensions = [];
        this.loaded = false;
    }
    ViewerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.showViewer) {
            if (!this.urlFile && !this.blobFile && !this.fileNodeId) {
                throw new Error('Attribute urlFile or fileNodeId or blobFile is required');
            }
            return new Promise(function (resolve, reject) {
                if (_this.blobFile) {
                    _this.mimeType = _this.blobFile.type;
                    _this.extensionChange.emit(_this.mimeType);
                    resolve();
                }
                else if (_this.urlFile) {
                    var filenameFromUrl = _this.getFilenameFromUrl(_this.urlFile);
                    _this.displayName = filenameFromUrl ? filenameFromUrl : '';
                    _this.extension = _this.getFileExtension(filenameFromUrl);
                    _this.extensionChange.emit(_this.extension);
                    _this.urlFileContent = _this.urlFile;
                    resolve();
                }
                else if (_this.fileNodeId) {
                    _this.apiService.getInstance().nodes.getNodeInfo(_this.fileNodeId).then(function (data) {
                        _this.mimeType = data.content.mimeType;
                        _this.displayName = data.name;
                        _this.urlFileContent = _this.apiService.getInstance().content.getContentUrl(data.id);
                        _this.extension = _this.getFileExtension(data.name);
                        _this.extensionChange.emit(_this.extension);
                        _this.loaded = true;
                        resolve();
                    }, function (error) {
                        reject(error);
                        _this.logService.error('This node does not exist');
                    });
                }
            });
        }
    };
    ViewerComponent.prototype.close = function () {
        if (this.otherMenu) {
            this.otherMenu.hidden = false;
        }
        this.cleanup();
        this.showViewer = false;
        this.showViewerChange.emit(this.showViewer);
    };
    ViewerComponent.prototype.cleanup = function () {
        this.urlFileContent = '';
        this.displayName = '';
        this.fileNodeId = null;
        this.loaded = false;
        this.extension = null;
        this.mimeType = null;
    };
    ViewerComponent.prototype.ngOnDestroy = function () {
        this.cleanup();
    };
    ViewerComponent.prototype.getFilenameFromUrl = function (url) {
        var anchor = url.indexOf('#');
        var query = url.indexOf('?');
        var end = Math.min(anchor > 0 ? anchor : url.length, query > 0 ? query : url.length);
        return url.substring(url.lastIndexOf('/', end) + 1, end);
    };
    ViewerComponent.prototype.getFileExtension = function (fileName) {
        return fileName.split('.').pop().toLowerCase();
    };
    ViewerComponent.prototype.isImage = function () {
        return this.isImageExtension() || this.isImageMimeType();
    };
    ViewerComponent.prototype.isMedia = function () {
        return this.isMediaExtension(this.extension) || this.isMediaMimeType();
    };
    ViewerComponent.prototype.isImageExtension = function () {
        return this.extension === 'png' || this.extension === 'jpg' ||
            this.extension === 'jpeg' || this.extension === 'gif' || this.extension === 'bmp';
    };
    ViewerComponent.prototype.isMediaMimeType = function () {
        var mimeExtension;
        if (this.mimeType && this.mimeType.indexOf('/')) {
            mimeExtension = this.mimeType.substr(this.mimeType.indexOf('/') + 1, this.mimeType.length);
        }
        return (this.mimeType && (this.mimeType.indexOf('video/') === 0 || this.mimeType.indexOf('audio/') === 0)) && this.isMediaExtension(mimeExtension);
    };
    ViewerComponent.prototype.isMediaExtension = function (extension) {
        return extension === 'wav' || extension === 'mp4' || extension === 'mp3' || extension === 'WebM' || extension === 'Ogg';
    };
    ViewerComponent.prototype.isImageMimeType = function () {
        return this.mimeType && this.mimeType.indexOf('image/') === 0;
    };
    ViewerComponent.prototype.isPdf = function () {
        return this.extension === 'pdf' || this.mimeType === 'application/pdf';
    };
    ViewerComponent.prototype.isText = function () {
        return this.extension === 'txt' || this.mimeType === 'text/txt' || this.mimeType === 'text/plain';
    };
    ViewerComponent.prototype.supportedExtension = function () {
        return this.isImage() || this.isPdf() || this.isMedia() || this.isText() || this.isExternalSupportedExtension();
    };
    ViewerComponent.prototype.isExternalSupportedExtension = function () {
        var _this = this;
        var externalType;
        if (this.externalExtensions && (this.externalExtensions instanceof Array)) {
            externalType = this.externalExtensions.find(function (externalExtension) {
                return externalExtension.toLowerCase() === _this.extension;
            });
        }
        return !!externalType;
    };
    ViewerComponent.prototype.handleKeyboardEvent = function (event) {
        var key = event.keyCode;
        if (key === 27 && this.overlayMode) {
            this.close();
        }
    };
    ViewerComponent.prototype.isLoaded = function () {
        return this.fileNodeId ? this.loaded : true;
    };
    return ViewerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ViewerComponent.prototype, "urlFile", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ViewerComponent.prototype, "blobFile", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ViewerComponent.prototype, "fileNodeId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ViewerComponent.prototype, "overlayMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ViewerComponent.prototype, "showViewer", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ViewerComponent.prototype, "showToolbar", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ViewerComponent.prototype, "displayName", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], ViewerComponent.prototype, "showViewerChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], ViewerComponent.prototype, "extensionChange", void 0);
__decorate([
    core_1.HostListener('document:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ViewerComponent.prototype, "handleKeyboardEvent", null);
ViewerComponent = __decorate([
    core_1.Component({
        selector: 'adf-viewer, alfresco-viewer',
        template: __webpack_require__(633),
        styles: [__webpack_require__(803)],
        host: { 'class': 'adf-viewer' },
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _c || Object, typeof (_d = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _d || Object])
], ViewerComponent);
exports.ViewerComponent = ViewerComponent;
var _a, _b, _c, _d;


/***/ }),

/***/ 179:
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
var ng2_alfresco_core_1 = __webpack_require__(1);
var viewer_dialog_component_1 = __webpack_require__(103);
var ViewerService = (function () {
    function ViewerService(dialog, apiService) {
        this.dialog = dialog;
        this.apiService = apiService;
    }
    Object.defineProperty(ViewerService.prototype, "contentApi", {
        get: function () {
            return this.apiService.getInstance().content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerService.prototype, "nodesApi", {
        get: function () {
            return this.apiService.getInstance().nodes;
        },
        enumerable: true,
        configurable: true
    });
    ViewerService.prototype.showViewerForNode = function (node) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var settings = {
                fileName: node.name,
                fileMimeType: node.content.mimeType,
                fileUrl: _this.contentApi.getContentUrl(node.id, false),
                downloadUrl: _this.contentApi.getContentUrl(node.id, true)
            };
            var dialogRef = _this.dialog.open(viewer_dialog_component_1.ViewerDialogComponent, {
                panelClass: 'adf-viewer-dialog-panel',
                data: settings
            });
            dialogRef.afterClosed().subscribe(function (result) {
                resolve(result);
            });
        });
    };
    ViewerService.prototype.showViewerForNodeId = function (nodeId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.nodesApi.getNode(nodeId).then(function (node) {
                if (node && node.entry && node.entry.isFile) {
                    return _this.showViewerForNode(node.entry);
                }
                else {
                    resolve(false);
                }
            });
        });
    };
    return ViewerService;
}());
ViewerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof material_1.MdDialog !== "undefined" && material_1.MdDialog) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _b || Object])
], ViewerService);
exports.ViewerService = ViewerService;
var _a, _b;


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),

/***/ 213:
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

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var RenderingQueueServices = (function () {
    function RenderingQueueServices() {
        this.renderingStates = {
            INITIAL: 0,
            RUNNING: 1,
            PAUSED: 2,
            FINISHED: 3
        };
        this.CLEANUP_TIMEOUT = 30000;
        this.pdfViewer = null;
        this.pdfThumbnailViewer = null;
        this.onIdle = null;
        this.highestPriorityPage = null;
        this.idleTimeout = null;
        this.printing = false;
        this.isThumbnailViewEnabled = false;
    }
    RenderingQueueServices.prototype.setViewer = function (pdfViewer) {
        this.pdfViewer = pdfViewer;
    };
    RenderingQueueServices.prototype.setThumbnailViewer = function (pdfThumbnailViewer) {
        this.pdfThumbnailViewer = pdfThumbnailViewer;
    };
    RenderingQueueServices.prototype.isHighestPriority = function (view) {
        return this.highestPriorityPage === view.renderingId;
    };
    RenderingQueueServices.prototype.renderHighestPriority = function (currentlyVisiblePages) {
        if (this.idleTimeout) {
            clearTimeout(this.idleTimeout);
            this.idleTimeout = null;
        }
        if (this.pdfViewer.forceRendering(currentlyVisiblePages)) {
            return;
        }
        if (this.pdfThumbnailViewer && this.isThumbnailViewEnabled) {
            if (this.pdfThumbnailViewer.forceRendering()) {
                return;
            }
        }
        if (this.printing) {
            return;
        }
        if (this.onIdle) {
            this.idleTimeout = setTimeout(this.onIdle.bind(this), this.CLEANUP_TIMEOUT);
        }
    };
    RenderingQueueServices.prototype.getHighestPriority = function (visible, views, scrolledDown) {
        var visibleViews = visible.views;
        var numVisible = visibleViews.length;
        if (numVisible === 0) {
            return false;
        }
        for (var i = 0; i < numVisible; ++i) {
            var view = visibleViews[i].view;
            if (!this.isViewFinished(view)) {
                return view;
            }
        }
        if (scrolledDown) {
            var nextPageIndex = visible.last.id;
            if (views[nextPageIndex] && !this.isViewFinished(views[nextPageIndex])) {
                return views[nextPageIndex];
            }
        }
        else {
            var previousPageIndex = visible.first.id - 2;
            if (views[previousPageIndex] && !this.isViewFinished(views[previousPageIndex])) {
                return views[previousPageIndex];
            }
        }
        return null;
    };
    RenderingQueueServices.prototype.isViewFinished = function (view) {
        return view.renderingState === this.renderingStates.FINISHED;
    };
    RenderingQueueServices.prototype.renderView = function (view) {
        var state = view.renderingState;
        switch (state) {
            case this.renderingStates.FINISHED:
                return false;
            case this.renderingStates.PAUSED:
                this.highestPriorityPage = view.renderingId;
                view.resume();
                break;
            case this.renderingStates.RUNNING:
                this.highestPriorityPage = view.renderingId;
                break;
            case this.renderingStates.INITIAL:
                this.highestPriorityPage = view.renderingId;
                var continueRendering = function () {
                    this.renderHighestPriority();
                }.bind(this);
                view.draw().then(continueRendering, continueRendering);
                break;
            default:
                break;
        }
        return true;
    };
    return RenderingQueueServices;
}());
RenderingQueueServices = __decorate([
    core_1.Injectable()
], RenderingQueueServices);
exports.RenderingQueueServices = RenderingQueueServices;


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 380:
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
var ImgViewerComponent = (function () {
    function ImgViewerComponent(contentService) {
        this.contentService = contentService;
    }
    ImgViewerComponent.prototype.ngOnChanges = function (changes) {
        var blobFile = changes['blobFile'];
        if (blobFile && blobFile.currentValue) {
            this.urlFile = this.contentService.createTrustedUrl(this.blobFile);
            return;
        }
        if (!this.urlFile && !this.blobFile) {
            throw new Error('Attribute urlFile or blobFile is required');
        }
    };
    return ImgViewerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ImgViewerComponent.prototype, "urlFile", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ImgViewerComponent.prototype, "blobFile", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ImgViewerComponent.prototype, "nameFile", void 0);
ImgViewerComponent = __decorate([
    core_1.Component({
        selector: 'adf-img-viewer',
        template: __webpack_require__(627),
        styles: [__webpack_require__(796)],
        host: { 'class': 'adf-img-viewer' },
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.ContentService !== "undefined" && ng2_alfresco_core_1.ContentService) === "function" && _a || Object])
], ImgViewerComponent);
exports.ImgViewerComponent = ImgViewerComponent;
var _a;


/***/ }),

/***/ 381:
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
var MediaPlayerComponent = (function () {
    function MediaPlayerComponent(contentService) {
        this.contentService = contentService;
    }
    MediaPlayerComponent.prototype.ngOnChanges = function (changes) {
        var blobFile = changes['blobFile'];
        if (blobFile && blobFile.currentValue) {
            this.urlFile = this.contentService.createTrustedUrl(this.blobFile);
            return;
        }
        if (!this.urlFile && !this.blobFile) {
            throw new Error('Attribute urlFile or blobFile is required');
        }
    };
    return MediaPlayerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MediaPlayerComponent.prototype, "urlFile", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MediaPlayerComponent.prototype, "blobFile", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MediaPlayerComponent.prototype, "mimeType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MediaPlayerComponent.prototype, "nameFile", void 0);
MediaPlayerComponent = __decorate([
    core_1.Component({
        selector: 'adf-media-player',
        template: __webpack_require__(628),
        styles: [__webpack_require__(797)],
        host: { 'class': 'adf-media-player' },
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.ContentService !== "undefined" && ng2_alfresco_core_1.ContentService) === "function" && _a || Object])
], MediaPlayerComponent);
exports.MediaPlayerComponent = MediaPlayerComponent;
var _a;


/***/ }),

/***/ 382:
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
var ng2_alfresco_core_2 = __webpack_require__(1);
var DEFAULT_CONVERSION_ENCODING = 'pdf';
var NotSupportedFormatComponent = (function () {
    function NotSupportedFormatComponent(contentService, renditionsService, apiService) {
        this.contentService = contentService;
        this.renditionsService = renditionsService;
        this.apiService = apiService;
        this.nodeId = null;
        this.showToolbar = true;
        this.convertible = false;
        this.displayable = false;
        this.isConversionStarted = false;
        this.isConversionFinished = false;
        this.renditionUrl = null;
        this.conversionsubscription = null;
    }
    NotSupportedFormatComponent.prototype.ngOnInit = function () {
        if (this.nodeId) {
            this.checkRendition();
        }
    };
    NotSupportedFormatComponent.prototype.download = function () {
        if (this.urlFile) {
            window.open(this.urlFile);
        }
        else {
            this.contentService.downloadBlob(this.blobFile, this.nameFile);
        }
    };
    NotSupportedFormatComponent.prototype.checkRendition = function (encoding) {
        var _this = this;
        if (encoding === void 0) { encoding = DEFAULT_CONVERSION_ENCODING; }
        this.renditionsService.getRendition(this.nodeId, encoding)
            .subscribe(function (response) {
            if (response.entry.status === 'NOT_CREATED') {
                _this.convertible = true;
                _this.displayable = false;
            }
            else if (response.entry.status === 'CREATED') {
                _this.convertible = false;
                _this.displayable = true;
            }
        }, function () {
            _this.convertible = false;
            _this.displayable = false;
        });
    };
    NotSupportedFormatComponent.prototype.convertToPdf = function () {
        var _this = this;
        this.isConversionStarted = true;
        this.conversionsubscription = this.renditionsService.convert(this.nodeId, DEFAULT_CONVERSION_ENCODING)
            .subscribe({
            error: function (error) { _this.isConversionStarted = false; },
            complete: function () { _this.showPDF(); }
        });
    };
    NotSupportedFormatComponent.prototype.showPDF = function () {
        this.renditionUrl = this.apiService.getInstance().content.getRenditionUrl(this.nodeId, DEFAULT_CONVERSION_ENCODING);
        this.isConversionStarted = false;
        this.isConversionFinished = true;
    };
    NotSupportedFormatComponent.prototype.ngOnDestroy = function () {
        if (this.isConversionStarted) {
            this.conversionsubscription.unsubscribe();
        }
    };
    return NotSupportedFormatComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NotSupportedFormatComponent.prototype, "nameFile", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NotSupportedFormatComponent.prototype, "urlFile", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NotSupportedFormatComponent.prototype, "blobFile", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NotSupportedFormatComponent.prototype, "nodeId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], NotSupportedFormatComponent.prototype, "showToolbar", void 0);
NotSupportedFormatComponent = __decorate([
    core_1.Component({
        selector: 'adf-not-supported-format',
        template: __webpack_require__(629),
        styles: [__webpack_require__(798)],
        host: { 'class': 'adf-not-supported-format' },
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.ContentService !== "undefined" && ng2_alfresco_core_1.ContentService) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.RenditionsService !== "undefined" && ng2_alfresco_core_1.RenditionsService) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_2.AlfrescoApiService !== "undefined" && ng2_alfresco_core_2.AlfrescoApiService) === "function" && _c || Object])
], NotSupportedFormatComponent);
exports.NotSupportedFormatComponent = NotSupportedFormatComponent;
var _a, _b, _c;


/***/ }),

/***/ 383:
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
var rendering_queue_services_1 = __webpack_require__(214);
var PdfViewerComponent = (function () {
    function PdfViewerComponent(renderingQueueServices, logService) {
        this.renderingQueueServices = renderingQueueServices;
        this.logService = logService;
        this.showToolbar = true;
        this.currentScaleMode = 'auto';
        this.MAX_AUTO_SCALE = 1.25;
        this.DEFAULT_SCALE_DELTA = 1.1;
        this.MIN_SCALE = 0.25;
        this.MAX_SCALE = 10.0;
    }
    PdfViewerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (!this.urlFile && !this.blobFile) {
            throw new Error('Attribute urlFile or blobFile is required');
        }
        if (this.urlFile) {
            return new Promise(function (resolve, reject) {
                _this.executePdf(_this.urlFile, resolve, reject);
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                var reader = new FileReader();
                reader.onload = function () {
                    _this.executePdf(reader.result, resolve, reject);
                };
                reader.readAsArrayBuffer(_this.blobFile);
            });
        }
    };
    PdfViewerComponent.prototype.executePdf = function (src, resolve, reject) {
        var _this = this;
        var loadingTask = this.getPDFJS().getDocument(src);
        loadingTask.onProgress = function (progressData) {
            var level = progressData.loaded / progressData.total;
            _this.loadingPercent = Math.round(level * 100);
        };
        loadingTask.then(function (pdfDocument) {
            _this.currentPdfDocument = pdfDocument;
            _this.totalPages = pdfDocument.numPages;
            _this.page = 1;
            _this.displayPage = 1;
            _this.initPDFViewer(_this.currentPdfDocument);
            _this.currentPdfDocument.getPage(1).then(function () {
                _this.scalePage('auto');
                resolve();
            }, function (error) {
                reject(error);
            });
        }, function (error) {
            reject(error);
        });
    };
    PdfViewerComponent.prototype.getPDFJS = function () {
        return PDFJS;
    };
    PdfViewerComponent.prototype.initPDFViewer = function (pdfDocument) {
        var _this = this;
        PDFJS.verbosity = 1;
        PDFJS.disableWorker = false;
        var documentContainer = document.getElementById('viewer-pdf-container');
        var viewer = document.getElementById('viewer-viewerPdf');
        window.document.addEventListener('scroll', function (event) {
            _this.watchScroll(event.target);
        }, true);
        this.pdfViewer = new PDFJS.PDFViewer({
            container: documentContainer,
            viewer: viewer,
            renderingQueue: this.renderingQueueServices
        });
        this.renderingQueueServices.setViewer(this.pdfViewer);
        this.pdfViewer.setDocument(pdfDocument);
    };
    PdfViewerComponent.prototype.scalePage = function (scaleMode) {
        this.currentScaleMode = scaleMode;
        if (this.pdfViewer) {
            var viewerContainer = document.getElementById('viewer-main-container');
            var documentContainer = document.getElementById('viewer-pdf-container');
            var widthContainer = void 0;
            var heigthContainer = void 0;
            if (viewerContainer && viewerContainer.clientWidth <= documentContainer.clientWidth) {
                widthContainer = viewerContainer.clientWidth;
                heigthContainer = viewerContainer.clientHeight;
            }
            else {
                widthContainer = documentContainer.clientWidth;
                heigthContainer = documentContainer.clientHeight;
            }
            var currentPage = this.pdfViewer._pages[this.pdfViewer._currentPageNumber - 1];
            var padding = 20;
            var pageWidthScale = (widthContainer - padding) / currentPage.width * currentPage.scale;
            var pageHeightScale = (heigthContainer - padding) / currentPage.width * currentPage.scale;
            var scale = void 0;
            switch (this.currentScaleMode) {
                case 'page-actual':
                    scale = 1;
                    break;
                case 'page-width':
                    scale = pageWidthScale;
                    break;
                case 'page-height':
                    scale = pageHeightScale;
                    break;
                case 'page-fit':
                    scale = Math.min(pageWidthScale, pageHeightScale);
                    break;
                case 'auto':
                    var horizontalScale = void 0;
                    if (this.isLandscape) {
                        horizontalScale = Math.min(pageHeightScale, pageWidthScale);
                    }
                    else {
                        horizontalScale = pageWidthScale;
                    }
                    scale = Math.min(this.MAX_AUTO_SCALE, horizontalScale);
                    break;
                default:
                    this.logService.error('pdfViewSetScale: \'' + scaleMode + '\' is an unknown zoom value.');
                    return;
            }
            this.setScaleUpdatePages(scale);
        }
    };
    PdfViewerComponent.prototype.setScaleUpdatePages = function (newScale) {
        if (!this.isSameScale(this.currentScale, newScale)) {
            this.currentScale = newScale;
            this.pdfViewer._pages.forEach(function (currentPage) {
                currentPage.update(newScale);
            });
            this.pdfViewer.update();
        }
    };
    PdfViewerComponent.prototype.isSameScale = function (oldScale, newScale) {
        return (newScale === oldScale);
    };
    PdfViewerComponent.prototype.isLandscape = function (width, height) {
        return (width > height);
    };
    PdfViewerComponent.prototype.onResize = function () {
        this.scalePage(this.currentScaleMode);
    };
    PdfViewerComponent.prototype.pageFit = function () {
        if (this.currentScaleMode !== 'page-fit') {
            this.scalePage('page-fit');
        }
        else {
            this.scalePage('auto');
        }
    };
    PdfViewerComponent.prototype.zoomIn = function (ticks) {
        var newScale = this.currentScale;
        do {
            newScale = (newScale * this.DEFAULT_SCALE_DELTA).toFixed(2);
            newScale = Math.ceil(newScale * 10) / 10;
            newScale = Math.min(this.MAX_SCALE, newScale);
        } while (--ticks > 0 && newScale < this.MAX_SCALE);
        this.currentScaleMode = 'auto';
        this.setScaleUpdatePages(newScale);
    };
    PdfViewerComponent.prototype.zoomOut = function (ticks) {
        var newScale = this.currentScale;
        do {
            newScale = (newScale / this.DEFAULT_SCALE_DELTA).toFixed(2);
            newScale = Math.floor(newScale * 10) / 10;
            newScale = Math.max(this.MIN_SCALE, newScale);
        } while (--ticks > 0 && newScale > this.MIN_SCALE);
        this.currentScaleMode = 'auto';
        this.setScaleUpdatePages(newScale);
    };
    PdfViewerComponent.prototype.previousPage = function () {
        if (this.pdfViewer && this.page > 1) {
            this.page--;
            this.displayPage = this.page;
            this.pdfViewer.currentPageNumber = this.page;
        }
    };
    PdfViewerComponent.prototype.nextPage = function () {
        if (this.pdfViewer && this.page < this.totalPages) {
            this.page++;
            this.displayPage = this.page;
            this.pdfViewer.currentPageNumber = this.page;
        }
    };
    PdfViewerComponent.prototype.inputPage = function (page) {
        var pageInput = parseInt(page, 10);
        if (!isNaN(pageInput) && pageInput > 0 && pageInput <= this.totalPages) {
            this.page = pageInput;
            this.displayPage = this.page;
            this.pdfViewer.currentPageNumber = this.page;
        }
        else {
            this.displayPage = this.page;
        }
    };
    PdfViewerComponent.prototype.watchScroll = function (target) {
        var outputPage = this.getVisibleElement(target);
        if (outputPage) {
            this.page = outputPage.id;
            this.displayPage = this.page;
        }
    };
    PdfViewerComponent.prototype.getVisibleElement = function (target) {
        var _this = this;
        return this.pdfViewer._pages.find(function (page) {
            return _this.isOnScreen(page, target);
        });
    };
    PdfViewerComponent.prototype.isOnScreen = function (page, target) {
        var viewport = {};
        viewport.top = target.scrollTop;
        viewport.bottom = viewport.top + target.scrollHeight;
        var bounds = {};
        bounds.top = page.div.offsetTop;
        bounds.bottom = bounds.top + page.viewport.height;
        return ((bounds.top <= viewport.bottom) && (bounds.bottom >= viewport.top));
    };
    PdfViewerComponent.prototype.handleKeyboardEvent = function (event) {
        var key = event.keyCode;
        if (key === 39) {
            this.nextPage();
        }
        else if (key === 37) {
            this.previousPage();
        }
    };
    return PdfViewerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PdfViewerComponent.prototype, "urlFile", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PdfViewerComponent.prototype, "blobFile", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PdfViewerComponent.prototype, "nameFile", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PdfViewerComponent.prototype, "showToolbar", void 0);
__decorate([
    core_1.HostListener('document:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PdfViewerComponent.prototype, "handleKeyboardEvent", null);
PdfViewerComponent = __decorate([
    core_1.Component({
        selector: 'adf-pdf-viewer',
        template: __webpack_require__(630),
        styles: [
            __webpack_require__(799),
            __webpack_require__(800)
        ],
        providers: [rendering_queue_services_1.RenderingQueueServices],
        host: { 'class': 'adf-pdf-viewer' },
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof rendering_queue_services_1.RenderingQueueServices !== "undefined" && rendering_queue_services_1.RenderingQueueServices) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _b || Object])
], PdfViewerComponent);
exports.PdfViewerComponent = PdfViewerComponent;
var _a, _b;


/***/ }),

/***/ 384:
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
__webpack_require__(815);
var TxtViewerComponent = (function () {
    function TxtViewerComponent(http) {
        this.http = http;
    }
    TxtViewerComponent.prototype.ngOnChanges = function (changes) {
        var blobFile = changes['blobFile'];
        if (blobFile && blobFile.currentValue) {
            return this.readBlob(blobFile.currentValue);
        }
        var urlFile = changes['urlFile'];
        if (urlFile && urlFile.currentValue) {
            return this.getUrlContent(urlFile.currentValue);
        }
        if (!this.urlFile && !this.blobFile) {
            throw new Error('Attribute urlFile or blobFile is required');
        }
    };
    TxtViewerComponent.prototype.getUrlContent = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(url, new http_1.RequestOptions({
                responseType: http_1.ResponseContentType.Text
            })).toPromise().then(function (res) {
                _this.content = res.text();
                resolve();
            }, function (event) {
                reject(event);
            });
        });
    };
    TxtViewerComponent.prototype.readBlob = function (blob) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function () {
                _this.content = reader.result;
                resolve();
            };
            reader.onerror = function (error) {
                reject(error);
            };
            reader.readAsText(blob);
        });
    };
    return TxtViewerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TxtViewerComponent.prototype, "urlFile", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TxtViewerComponent.prototype, "blobFile", void 0);
TxtViewerComponent = __decorate([
    core_1.Component({
        selector: 'adf-txt-viewer',
        template: __webpack_require__(631),
        styles: [__webpack_require__(801)],
        host: { 'class': 'adf-txt-viewer' },
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], TxtViewerComponent);
exports.TxtViewerComponent = TxtViewerComponent;
var _a;


/***/ }),

/***/ 385:
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
var viewer_component_1 = __webpack_require__(104);
var ExtensionViewerDirective = (function () {
    function ExtensionViewerDirective(viewerComponent) {
        this.viewerComponent = viewerComponent;
    }
    ExtensionViewerDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templateModel = { template: this.template, isVisible: false };
        this.viewerComponent.extensionTemplates.push(this.templateModel);
        this.viewerComponent.extensionChange.subscribe(function (fileExtension) {
            _this.templateModel.isVisible = _this.isVisible(fileExtension);
        });
        if (this.supportedExtensions instanceof Array) {
            this.supportedExtensions.forEach(function (extension) {
                _this.viewerComponent.externalExtensions.push(extension);
            });
        }
    };
    ExtensionViewerDirective.prototype.isVisible = function (fileExtension) {
        var supportedExtension;
        if (this.supportedExtensions && (this.supportedExtensions instanceof Array)) {
            supportedExtension = this.supportedExtensions.find(function (extension) {
                return extension.toLowerCase() === fileExtension;
            });
        }
        return !!supportedExtension;
    };
    return ExtensionViewerDirective;
}());
__decorate([
    core_1.ContentChild(core_1.TemplateRef),
    __metadata("design:type", Object)
], ExtensionViewerDirective.prototype, "template", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ExtensionViewerDirective.prototype, "urlFileContent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ExtensionViewerDirective.prototype, "extension", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ExtensionViewerDirective.prototype, "supportedExtensions", void 0);
ExtensionViewerDirective = __decorate([
    core_1.Directive({
        selector: 'extension-viewer'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof viewer_component_1.ViewerComponent !== "undefined" && viewer_component_1.ViewerComponent) === "function" && _a || Object])
], ExtensionViewerDirective);
exports.ExtensionViewerDirective = ExtensionViewerDirective;
var _a;


/***/ }),

/***/ 386:
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
        material_1.MdCardModule,
        material_1.MdDialogModule,
        material_1.MdIconModule,
        material_1.MdMenuModule,
        material_1.MdProgressBarModule,
        material_1.MdProgressSpinnerModule,
        material_1.MdTabsModule,
        material_1.MdTooltipModule
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

/***/ 627:
/***/ (function(module, exports) {

module.exports = "<div class=\"image-container\">\n    <img id=\"viewer-image\" [src]=\"urlFile\" [alt]=\"nameFile\" />\n</div>\n";

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

module.exports = "<video controls>\n    <source [src]=\"urlFile\" [type]=\"mimeType\" />\n</video>\n";

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = "<md-card *ngIf=\"!isConversionFinished\">\n    <md-card-title>\n        Unknown format\n    </md-card-title>\n    <md-card-content>\n        <h4>File '<span>{{nameFile}}</span>' is of an unsupported format</h4>\n        <md-progress-bar\n            *ngIf=\"isConversionStarted\"\n            mode=\"indeterminate\"\n            data-automation-id=\"viewer-conversion-spinner\">\n        </md-progress-bar>\n    </md-card-content>\n    <md-card-actions>\n        <button\n            md-button\n            data-automation-id=\"viewer-download-button\"\n            (click)=\"download()\">\n            <md-icon>cloud_download</md-icon>\n            Download\n        </button>\n        <button\n            md-button\n            *ngIf=\"convertible\"\n            [disabled]=\"isConversionStarted\"\n            data-automation-id=\"viewer-convert-button\"\n            (click)=\"convertToPdf()\">\n            <md-icon>insert_drive_file</md-icon>\n            Convert to PDF\n        </button>\n        <button\n            md-button\n            *ngIf=\"displayable\"\n            data-automation-id=\"viewer-display-button\"\n            (click)=\"showPDF()\">\n            <md-icon>insert_drive_file</md-icon>\n            Show PDF\n        </button>\n    </md-card-actions>\n</md-card>\n\n<adf-pdf-viewer\n    *ngIf=\"isConversionFinished\"\n    [showToolbar]=\"showToolbar\"\n    [urlFile]=\"renditionUrl\"\n    [nameFile]=\"nameFile\"\n    data-automation-id=\"pdf-rendition-viewer\">\n</adf-pdf-viewer>\n";

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports = "<!-- Start Pdf Canvas -->\n<div id=\"viewer-pdf-container\" class=\"viewer-pdf-container\" (window:resize)=\"onResize()\">\n    <div id=\"viewer-viewerPdf\" class=\"pdfViewer\">\n        <div id=\"loader-container\" class=\"loader-container\">\n            <div class=\"loader-item\">\n                <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n            </div >\n        </div>\n    </div>\n</div>\n<!-- End Pdf Canvas -->\n\n\n<!-- Pagination toolbar start -->\n<div *ngIf=\"showToolbar\" class=\"viewer-toolbar-pagination\">\n    <div\n        id=\"viewer-previous-page-button\"\n        aria-label=\"arrow left\"\n        class=\"button-page left\"\n        tabindex=\"0\"\n        (click)=\"previousPage()\">\n        <md-icon>keyboard_arrow_left</md-icon>\n    </div>\n\n    <div class=\"viewer-page-counter left\" >\n        <input #page\n            class=\"viewer-pagenumber-input left\"\n            type=\"text\"\n            pattern=\"-?[0-9]*(\\.[0-9]+)?\"\n            value=\"{{ displayPage }}\"\n            (keyup.enter)=\"inputPage(page.value)\">\n        <div class=\"left viewer-total-pages\">/ {{ totalPages }}</div>\n    </div>\n\n    <div\n        id=\"viewer-next-page-button\"\n        aria-label=\"arrow right\"\n        class=\"button-page left\"\n        tabindex=\"0\"\n        (click)=\"nextPage()\">\n        <md-icon>keyboard_arrow_right</md-icon>\n    </div>\n</div>\n<!-- Pagination toolbar end -->\n\n<!-- Command toolbar start -->\n<div *ngIf=\"showToolbar\" class=\"viewer-toolbar-command\">\n    <div\n        id=\"viewer-scale-page-button\"\n        aria-label=\"zoom out map\"\n        class=\"button-page left\"\n        tabindex=\"0\"\n        (click)=\"pageFit()\">\n        <md-icon>zoom_out_map</md-icon>\n    </div>\n    <div\n        id=\"viewer-zoom-in-button\"\n        aria-label=\"zoom in\"\n        class=\"button-page left\"\n        tabindex=\"0\"\n        (click)=\"zoomIn()\">\n        <md-icon>zoom_in</md-icon>\n    </div>\n    <div\n        id=\"viewer-zoom-out-button\"\n        aria-label=\"zoom out\"\n        class=\"button-page left\"\n        tabindex=\"0\"\n        (click)=\"zoomOut()\">\n        <md-icon>zoom_out</md-icon>\n    </div>\n</div>\n<!-- Command toolbar end -->\n";

/***/ }),

/***/ 631:
/***/ (function(module, exports) {

module.exports = "<pre class=\"adf-txt-viewer-content\">\n    {{content}}\n</pre>\n";

/***/ }),

/***/ 632:
/***/ (function(module, exports) {

module.exports = "<adf-toolbar color=\"default\">\n    <adf-toolbar-title>\n        <button md-icon-button [md-dialog-close]=\"true\" mdTooltip=\"Close and go back\">\n            <md-icon>arrow_back</md-icon>\n        </button>\n        <span>{{ fileName }}</span>\n    </adf-toolbar-title>\n\n    <button md-button [mdMenuTriggerFor]=\"mnuOpenWith\">\n        Open with\n        <md-icon>arrow_drop_down</md-icon>\n    </button>\n    <md-menu #mnuOpenWith=\"mdMenu\" [overlapTrigger]=\"false\">\n        <button md-menu-item>\n            <md-icon>dialpad</md-icon>\n            <span>Option 1</span>\n        </button>\n        <button md-menu-item disabled>\n            <md-icon>voicemail</md-icon>\n            <span>Option 2</span>\n        </button>\n        <button md-menu-item>\n            <md-icon>notifications_off</md-icon>\n            <span>Option 3</span>\n        </button>\n    </md-menu>\n\n    <adf-toolbar-divider></adf-toolbar-divider>\n\n    <button\n        *ngIf=\"downloadUrl\"\n        md-icon-button\n        mdTooltip=\"Download\"\n        (click)=\"download()\">\n        <md-icon>file_download</md-icon>\n    </button>\n\n    <button md-icon-button mdTooltip=\"Print\">\n        <md-icon>print</md-icon>\n    </button>\n\n    <button md-icon-button mdTooltip=\"Share\">\n        <md-icon>share</md-icon>\n    </button>\n\n    <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n        <md-icon>more_vert</md-icon>\n    </button>\n    <md-menu #menu=\"mdMenu\">\n        <button md-menu-item>\n            <md-icon>dialpad</md-icon>\n            <span>Redial</span>\n        </button>\n        <button md-menu-item disabled>\n            <md-icon>voicemail</md-icon>\n            <span>Check voicemail</span>\n        </button>\n        <button md-menu-item>\n            <md-icon>notifications_off</md-icon>\n            <span>Disable alerts</span>\n        </button>\n    </md-menu>\n\n    <ng-container *ngIf=\"allowInfoDrawer\">\n        <adf-toolbar-divider></adf-toolbar-divider>\n\n        <button md-icon-button mdTooltip=\"Info\"\n            [color]=\"showInfoDrawer ? 'accent' : 'default'\"\n            (click)=\"showInfoDrawer = !showInfoDrawer\">\n            <md-icon>info_outline</md-icon>\n        </button>\n    </ng-container>\n\n</adf-toolbar>\n\n <md-dialog-content>\n    <ng-container [ngSwitch]=\"viewerType\">\n\n        <ng-container *ngSwitchCase=\"'image'\">\n            <div class=\"adf-viewer-dialog__image-view\">\n                <img *ngIf=\"fileUrl\" [src]=\"fileUrl\">\n            </div>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"'text'\">\n            <div class=\"adf-viewer-dialog__text-view\">\n                <pre>{{ asText | async }}</pre>\n            </div>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"'pdf'\">\n            <adf-pdf-viewer class=\"adf-viewer-dialog__pdf-view\"\n                [showToolbar]=\"true\"\n                [urlFile]=\"fileUrl\">\n            </adf-pdf-viewer>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"'video'\">\n            <div class=\"adf-viewer-dialog__video-view\">\n                <video controls>\n                    <source [src]=\"fileUrl\" [type]=\"fileMimeType\">\n                </video>\n            </div>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"'audio'\">\n            <div class=\"adf-viewer-dialog__audio-view\">\n                <video controls>\n                    <source [src]=\"fileUrl\" [type]=\"fileMimeType\">\n                </video>\n            </div>\n        </ng-container>\n\n        <ng-container *ngSwitchDefault>\n            <div class=\"adf-viewer-dialog-unknown-view\">\n                <div>\n                    <md-icon class=\"icon\">{{ unknownFormatIcon }}</md-icon>\n                    <div class=\"label\">{{ unknownFormatText | translate }}</div>\n                </div>\n            </div>\n        </ng-container>\n\n    </ng-container>\n\n    <ng-container *ngIf=\"showInfoDrawer\">\n        <div class=\"adf-viewer-dialog__info-drawer\">\n            <md-tab-group md-stretch-tabs>\n                <md-tab label=\"Details\">\n                    <md-card>\n                        DETAILS\n                    </md-card>\n                </md-tab>\n                <md-tab label=\"Activity\">\n                    <md-card>\n                        Activity\n                    </md-card>\n                </md-tab>\n            </md-tab-group>\n        </div>\n    </ng-container>\n\n </md-dialog-content>\n";

/***/ }),

/***/ 633:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showViewer\"\n    class=\"adf-viewer-container\"\n    [class.adf-viewer-overlay-container]=\"overlayMode\"\n    [class.adf-viewer-inline-container]=\"!overlayMode\">\n\n    <div class=\"adf-viewer-content\">\n        <ng-container *ngIf=\"overlayMode\">\n            <adf-toolbar color=\"default\" class=\"adf-viewer-toolbar\">\n                <adf-toolbar-title>\n                    <span class=\"adf-viewer-filename\">{{ displayName }}</span>\n                </adf-toolbar-title>\n                <button\n                    md-icon-button\n                    class=\"adf-viewer-close-button\"\n                    mdTooltip=\"Close and go back\"\n                    mdTooltipPosition=\"before\"\n                    (click)=\"close()\"\n                    aria-label=\"Close\">\n                    <md-icon>close</md-icon>\n                </button>\n            </adf-toolbar>\n        </ng-container>\n\n        <div class=\"adf-viewer-layout\">\n            <div class=\"adf-viewer-layout-content\">\n                <div *ngIf=\"isLoaded()\">\n                    <div class=\"adf-viewer-content-container\">\n\n                        <ng-container *ngIf=\"isPdf()\">\n                            <adf-pdf-viewer\n                                [showToolbar]=\"showToolbar\"\n                                [blobFile]=\"blobFile\"\n                                [urlFile]=\"urlFileContent\"\n                                [nameFile]=\"displayName\">\n                            </adf-pdf-viewer>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"isImage()\">\n                            <adf-img-viewer\n                                [urlFile]=\"urlFileContent\"\n                                [nameFile]=\"displayName\"\n                                [blobFile]=\"blobFile\">\n                            </adf-img-viewer>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"isMedia()\">\n                            <adf-media-player\n                                [urlFile]=\"urlFileContent\"\n                                [mimeType]=\"mimeType\"\n                                [blobFile]=\"blobFile\"\n                                [nameFile]=\"displayName\">\n                            </adf-media-player>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"isText()\">\n                            <adf-txt-viewer [urlFile]=\"urlFileContent\" [blobFile]=\"blobFile\" ></adf-txt-viewer>\n                        </ng-container>\n\n                         <span *ngFor=\"let extensionTemplate of extensionTemplates\">\n                            <ng-template\n                                *ngIf=\"extensionTemplate.isVisible\"\n                                [ngTemplateOutlet]=\"extensionTemplate.template\"\n                                [ngOutletContext]=\"{ urlFileContent: urlFileContent, extension:extension }\">\n                            </ng-template>\n                         </span>\n\n                        <div *ngIf=\"!supportedExtension()\" class=\"adf-viewer-unknown-content\">\n                            <adf-not-supported-format\n                                *ngIf=\"!extensionTemplate\"\n                                [urlFile]=\"urlFileContent\"\n                                [blobFile]=\"blobFile\"\n                                [nameFile]=\"displayName\"\n                                [showToolbar]=\"showToolbar\"\n                                [nodeId]=\"fileNodeId\">\n                            </adf-not-supported-format>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = ".adf-img-viewer .image-container {\n  display: flex;\n  flex: 1;\n  text-align: center;\n  flex-direction: row;\n  justify-content: center;\n  height: 90vh; }\n  .adf-img-viewer .image-container img {\n    object-fit: contain; }\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = ".adf-media-player video {\n  display: flex;\n  flex: 1;\n  max-height: 90vh; }\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = ".adf-not-supported-format .mat-card {\n  max-width: 400px; }\n"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = ".adf-pdf-viewer .loader-container {\n  display: -webkit-box;\n  /* OLD - iOS 6-, Safari 3.1-6 */\n  display: -moz-box;\n  /* OLD - Firefox 19- (buggy but mostly works) */\n  display: -webkit-flex;\n  /* NEW - Chrome */\n  display: flex;\n  /* NEW, Spec - Opera 12.1, Firefox 20+ */\n  -webkit-box-flex-direction: row;\n  -moz-box-flex-direction: row;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  height: 100%; }\n\n.adf-pdf-viewer .loader-item {\n  margin: auto;\n  max-height: 100px;\n  max-width: 300px; }\n\n.adf-pdf-viewer .left {\n  float: left; }\n\n.adf-pdf-viewer .viewer-toolbar-pagination {\n  padding-top: 4px;\n  top: 80px;\n  right: 35px;\n  width: auto;\n  position: absolute;\n  border-radius: 10px;\n  background: #3E3E3E;\n  color: white; }\n\n.adf-pdf-viewer .viewer-toolbar-command {\n  height: 30px;\n  padding-top: 4px;\n  top: 80px;\n  left: 35px;\n  width: auto;\n  position: absolute;\n  border-radius: 10px;\n  background: #3E3E3E;\n  color: white; }\n\n.adf-pdf-viewer .viewer-pagenumber-input {\n  border: none;\n  display: block;\n  font-size: 16px;\n  padding: 4px 0;\n  background: 0 0;\n  text-align: right;\n  color: inherit;\n  width: 33px;\n  margin-right: 4px;\n  height: 20px; }\n\n.adf-pdf-viewer .viewer-total-pages {\n  border: medium none;\n  display: flex;\n  font-size: 16px;\n  padding: 4px 0px;\n  background: transparent none repeat scroll 0px 0px;\n  text-align: right;\n  color: inherit;\n  margin-right: 4px;\n  height: 20px;\n  align-items: center;\n  justify-content: center; }\n\n.adf-pdf-viewer .viewer-page-counter {\n  margin-right: 20px; }\n\n.adf-pdf-viewer .button-page {\n  margin-right: 4px;\n  height: 24px;\n  width: 24px;\n  margin-left: 4px;\n  cursor: pointer; }\n\n.adf-pdf-viewer .button-page:hover {\n  cursor: pointer;\n  background: grey;\n  border-radius: 24px; }\n"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = ".adf-pdf-viewer .textLayer {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  opacity: 0.2;\n  line-height: 1.0; }\n  .adf-pdf-viewer .textLayer > div {\n    color: transparent;\n    position: absolute;\n    white-space: pre;\n    cursor: text;\n    -webkit-transform-origin: 0% 0%;\n    -moz-transform-origin: 0% 0%;\n    -o-transform-origin: 0% 0%;\n    -ms-transform-origin: 0% 0%;\n    transform-origin: 0% 0%; }\n  .adf-pdf-viewer .textLayer .highlight {\n    margin: -1px;\n    padding: 1px;\n    background-color: #b400aa;\n    border-radius: 4px; }\n    .adf-pdf-viewer .textLayer .highlight.begin {\n      border-radius: 4px 0px 0px 4px; }\n    .adf-pdf-viewer .textLayer .highlight.end {\n      border-radius: 0px 4px 4px 0px; }\n    .adf-pdf-viewer .textLayer .highlight.middle {\n      border-radius: 0px; }\n    .adf-pdf-viewer .textLayer .highlight.selected {\n      background-color: darkgreen; }\n  .adf-pdf-viewer .textLayer::selection {\n    background: blue; }\n  .adf-pdf-viewer .textLayer::-moz-selection {\n    background: blue; }\n  .adf-pdf-viewer .textLayer .endOfContent {\n    display: block;\n    position: absolute;\n    left: 0px;\n    top: 100%;\n    right: 0px;\n    bottom: 0px;\n    z-index: -1;\n    cursor: default;\n    user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    -moz-user-select: none; }\n    .adf-pdf-viewer .textLayer .endOfContent.active {\n      top: 0px; }\n\n.adf-pdf-viewer .annotationLayer section {\n  position: absolute; }\n\n.adf-pdf-viewer .annotationLayer .linkAnnotation > a {\n  position: absolute;\n  font-size: 1em;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\") 0 0 repeat; }\n  .adf-pdf-viewer .annotationLayer .linkAnnotation > a:hover {\n    opacity: 0.2;\n    background: #ff0;\n    box-shadow: 0px 2px 10px #ff0; }\n\n.adf-pdf-viewer .annotationLayer .textAnnotation img {\n  position: absolute;\n  cursor: pointer; }\n\n.adf-pdf-viewer .annotationLayer .popupWrapper {\n  position: absolute;\n  width: 20em; }\n\n.adf-pdf-viewer .annotationLayer .popup {\n  position: absolute;\n  z-index: 200;\n  max-width: 20em;\n  background-color: #FFFF99;\n  box-shadow: 0px 2px 5px #333;\n  border-radius: 2px;\n  padding: 0.6em;\n  margin-left: 5px;\n  cursor: pointer;\n  word-wrap: break-word; }\n  .adf-pdf-viewer .annotationLayer .popup h1 {\n    font-size: 1em;\n    border-bottom: 1px solid #000000;\n    padding-bottom: 0.2em; }\n  .adf-pdf-viewer .annotationLayer .popup p {\n    padding-top: 0.2em; }\n\n.adf-pdf-viewer .annotationLayer .highlightAnnotation,\n.adf-pdf-viewer .annotationLayer .underlineAnnotation,\n.adf-pdf-viewer .annotationLayer .squigglyAnnotation,\n.adf-pdf-viewer .annotationLayer .strikeoutAnnotation,\n.adf-pdf-viewer .annotationLayer .fileAttachmentAnnotation {\n  cursor: pointer; }\n\n.adf-pdf-viewer .pdfViewer canvasWrapper {\n  overflow: hidden; }\n\n.adf-pdf-viewer .pdfViewer .page {\n  direction: ltr;\n  width: 816px;\n  height: 1056px;\n  margin: 1px auto -8px auto;\n  position: relative;\n  overflow: visible;\n  border: 9px solid transparent;\n  background-clip: content-box;\n  background-color: white; }\n  .adf-pdf-viewer .pdfViewer .page canvas {\n    margin: 0;\n    display: block; }\n  .adf-pdf-viewer .pdfViewer .page .loadingIcon {\n    position: absolute;\n    display: block;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0; }\n\n.adf-pdf-viewer .pdfViewer.removePageBorders .page {\n  margin: 0px auto 10px auto;\n  border: none; }\n\n.adf-pdf-viewer .pdfViewer .loadingIcon {\n  width: 100px;\n  height: 100px;\n  left: 50% !important;\n  top: 50% !important;\n  margin-top: -50px;\n  margin-left: -50px;\n  font-size: 5px;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(3, 0, 2, 0.2);\n  border-right: 1.1em solid rgba(3, 0, 2, 0.2);\n  border-bottom: 1.1em solid rgba(3, 0, 2, 0.2);\n  border-left: 1.1em solid #030002;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n  border-radius: 50%; }\n  .adf-pdf-viewer .pdfViewer .loadingIcon:after {\n    border-radius: 50%; }\n\n.adf-pdf-viewer * {\n  padding: 0;\n  margin: 0; }\n\n.adf-pdf-viewer .hidden, .adf-pdf-viewer [hidden] {\n  display: none !important; }\n\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.viewer-pdf-container {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  position: absolute;\n  top: 32px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  outline: none; }\n\nhtml[dir='ltr'] .viewer-pdf-container {\n  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.05); }\n\nhtml[dir='rtl'] .viewer-pdf-container {\n  box-shadow: inset -1px 0 0 rgba(255, 255, 255, 0.05); }\n"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = ".adf-txt-viewer {\n  background-color: white;\n  width: 100vw;\n  overflow: hidden;\n  overflow-y: scroll;\n  margin-bottom: 42px; }\n"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = ".adf-viewer-dialog-panel .mat-dialog-container {\n  padding: 0;\n  max-width: none;\n  width: 99vw;\n  height: 99vh; }\n\n.adf-viewer-dialog .mat-dialog-content {\n  display: flex;\n  max-height: 90vh;\n  justify-content: center; }\n\n.adf-viewer-dialog__info-drawer {\n  width: 350px;\n  display: block;\n  padding: 8px 0;\n  background-color: #FAFAFA;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.27); }\n  .adf-viewer-dialog__info-drawer .mat-tab-label {\n    text-transform: uppercase; }\n  .adf-viewer-dialog__info-drawer .mat-card {\n    margin: 6px; }\n\n.adf-viewer-dialog-unknown-view {\n  height: 90vh;\n  text-align: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center; }\n\n.adf-viewer-dialog__image-view {\n  display: flex;\n  flex: 1;\n  text-align: center;\n  flex-direction: row;\n  justify-content: center;\n  height: 90vh; }\n  .adf-viewer-dialog__image-view img {\n    max-width: 100%;\n    object-fit: contain; }\n\n.adf-viewer-dialog__text-view {\n  display: flex;\n  background-color: white;\n  width: 100vw;\n  overflow: hidden; }\n  .adf-viewer-dialog__text-view > pre {\n    overflow: auto;\n    width: 100%; }\n\n.adf-viewer-dialog__video-view video {\n  display: flex;\n  flex: 1;\n  max-height: 90vh; }\n\n.adf-viewer-dialog__audio-view video {\n  display: flex;\n  flex: 1;\n  max-height: 90vh; }\n\n.adf-viewer-dialog__pdf-view .viewer-pdf-container {\n  top: 52px;\n  left: 7px;\n  right: 7px;\n  border: 1px solid lightgray;\n  background-color: lightgray; }\n"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = ".adf-viewer-container .adf-viewer-layout-content {\n  width: 100%;\n  height: 100%;\n  background-color: #515151;\n  position: relative;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  flex: 1; }\n  .adf-viewer-container .adf-viewer-layout-content > div {\n    display: flex;\n    flex-flow: row wrap;\n    margin: 0 auto;\n    align-items: stretch; }\n\n.adf-viewer-container .adf-viewer-layout {\n  width: 100%;\n  height: 100%;\n  background-color: #515151;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative; }\n\n.adf-viewer-container .adf-viewer-content {\n  width: 100%;\n  height: 100%;\n  background-color: #515151; }\n\n.adf-viewer-overlay-container .adf-viewer-content {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  z-index: 1000; }\n\n.adf-viewer-inline-container {\n  width: 100%;\n  height: 100%;\n  background-color: #515151; }\n\n.adf-viewer-content-container {\n  display: flex;\n  justify-content: center; }\n\n.adf-viewer-unknown-content {\n  align-items: center;\n  display: flex; }\n"

/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(713);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(714);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(715);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(716);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(717);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(718);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(719);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(720);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_815__;

/***/ }),

/***/ 830:
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
var material_module_1 = __webpack_require__(386);
var viewer_component_1 = __webpack_require__(104);
exports.ViewerComponent = viewer_component_1.ViewerComponent;
var imgViewer_component_1 = __webpack_require__(380);
var mediaPlayer_component_1 = __webpack_require__(381);
var notSupportedFormat_component_1 = __webpack_require__(382);
var pdfViewer_component_1 = __webpack_require__(383);
var txtViewer_component_1 = __webpack_require__(384);
var viewer_dialog_component_1 = __webpack_require__(103);
var viewer_component_2 = __webpack_require__(104);
var extension_viewer_directive_1 = __webpack_require__(385);
var rendering_queue_services_1 = __webpack_require__(214);
var viewer_service_1 = __webpack_require__(179);
var viewer_dialog_component_2 = __webpack_require__(103);
exports.ViewerDialogComponent = viewer_dialog_component_2.ViewerDialogComponent;
var viewer_dialog_settings_1 = __webpack_require__(213);
exports.ViewerDialogSettings = viewer_dialog_settings_1.ViewerDialogSettings;
var viewer_service_2 = __webpack_require__(179);
exports.ViewerService = viewer_service_2.ViewerService;
exports.VIEWER_DIRECTIVES = [
    viewer_component_2.ViewerComponent,
    imgViewer_component_1.ImgViewerComponent,
    txtViewer_component_1.TxtViewerComponent,
    mediaPlayer_component_1.MediaPlayerComponent,
    notSupportedFormat_component_1.NotSupportedFormatComponent,
    pdfViewer_component_1.PdfViewerComponent,
    extension_viewer_directive_1.ExtensionViewerDirective,
    viewer_dialog_component_1.ViewerDialogComponent
];
var ViewerModule = ViewerModule_1 = (function () {
    function ViewerModule() {
    }
    ViewerModule.forRoot = function () {
        console.log('ViewerModule.forRoot is deprecated and will be removed in future versions');
        return {
            ngModule: ViewerModule_1,
            providers: [
                rendering_queue_services_1.RenderingQueueServices,
                viewer_service_1.ViewerService
            ]
        };
    };
    return ViewerModule;
}());
ViewerModule = ViewerModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            ng2_alfresco_core_1.CoreModule,
            material_module_1.MaterialModule
        ],
        declarations: exports.VIEWER_DIRECTIVES.slice(),
        providers: [
            rendering_queue_services_1.RenderingQueueServices,
            viewer_service_1.ViewerService
        ],
        exports: exports.VIEWER_DIRECTIVES.slice(),
        entryComponents: [
            viewer_dialog_component_1.ViewerDialogComponent
        ]
    })
], ViewerModule);
exports.ViewerModule = ViewerModule;
var ViewerModule_1;


/***/ })

/******/ });
});
//# sourceMappingURL=ng2-alfresco-viewer.js.map