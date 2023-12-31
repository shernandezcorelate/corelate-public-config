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
		module.exports = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("@angular/material"), require("ng2-alfresco-datatable"), require("@angular/common"), require("rxjs/Observable"), require("alfresco-js-api"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "ng2-alfresco-core", "rxjs/Rx", "@angular/material", "ng2-alfresco-datatable", "@angular/common", "rxjs/Observable", "alfresco-js-api"], factory);
	else if(typeof exports === 'object')
		exports["ng2-alfresco-documentlist"] = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("@angular/material"), require("ng2-alfresco-datatable"), require("@angular/common"), require("rxjs/Observable"), require("alfresco-js-api"));
	else
		root["ng2-alfresco-documentlist"] = factory(root["@angular/core"], root["ng2-alfresco-core"], root["rxjs/Rx"], root["@angular/material"], root["ng2-alfresco-datatable"], root["@angular/common"], root["rxjs/Observable"], root["alfresco-js-api"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_83__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 823);
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

/***/ 116:
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
var common_1 = __webpack_require__(13);
var ng2_alfresco_core_1 = __webpack_require__(1);
var ng2_alfresco_datatable_1 = __webpack_require__(10);
var ShareDataTableAdapter = (function () {
    function ShareDataTableAdapter(documentListService, schema, sorting) {
        if (schema === void 0) { schema = []; }
        this.documentListService = documentListService;
        this.ERR_ROW_NOT_FOUND = 'Row not found';
        this.ERR_COL_NOT_FOUND = 'Column not found';
        this.thumbnails = false;
        this.rows = [];
        this.columns = schema || [];
        this.sorting = sorting;
    }
    ShareDataTableAdapter.prototype.getRows = function () {
        return this.rows;
    };
    ShareDataTableAdapter.prototype.setRows = function (rows) {
        this.rows = rows || [];
        this.sort();
    };
    ShareDataTableAdapter.prototype.getColumns = function () {
        return this.columns;
    };
    ShareDataTableAdapter.prototype.setColumns = function (columns) {
        this.columns = columns || [];
    };
    ShareDataTableAdapter.prototype.getValue = function (row, col) {
        if (!row) {
            throw new Error(this.ERR_ROW_NOT_FOUND);
        }
        if (!col) {
            throw new Error(this.ERR_COL_NOT_FOUND);
        }
        var dataRow = row;
        var value = row.getValue(col.key);
        if (dataRow.cache[col.key] !== undefined) {
            return dataRow.cache[col.key];
        }
        if (col.type === 'date') {
            try {
                var result = this.formatDate(col, value);
                return dataRow.cacheValue(col.key, result);
            }
            catch (err) {
                console.error("Error parsing date " + value + " to format " + col.format);
                return 'Error';
            }
        }
        if (col.type === 'image') {
            if (this.imageResolver) {
                var resolved = this.imageResolver(row, col);
                if (resolved) {
                    return resolved;
                }
            }
            if (col.key === '$thumbnail') {
                var node = row.node;
                if (node.entry.isFolder) {
                    return this.documentListService.getMimeTypeIcon('folder');
                }
                if (node.entry.isFile) {
                    if (this.thumbnails) {
                        return this.documentListService.getDocumentThumbnailUrl(node);
                    }
                }
                if (node.entry.content) {
                    var mimeType = node.entry.content.mimeType;
                    if (mimeType) {
                        return this.documentListService.getMimeTypeIcon(mimeType);
                    }
                }
                return this.documentListService.getDefaultMimeTypeIcon();
            }
        }
        return dataRow.cacheValue(col.key, value);
    };
    ShareDataTableAdapter.prototype.formatDate = function (col, value) {
        if (col.type === 'date') {
            var format = col.format || 'medium';
            if (format === 'timeAgo') {
                var timeAgoPipe = new ng2_alfresco_core_1.TimeAgoPipe();
                return timeAgoPipe.transform(value);
            }
            else {
                var datePipe = new common_1.DatePipe('en-US');
                return datePipe.transform(value, format);
            }
        }
        return value;
    };
    ShareDataTableAdapter.prototype.getSorting = function () {
        return this.sorting;
    };
    ShareDataTableAdapter.prototype.setSorting = function (sorting) {
        this.sorting = sorting;
        this.sortRows(this.rows, this.sorting);
    };
    ShareDataTableAdapter.prototype.sort = function (key, direction) {
        var sorting = this.sorting || new ng2_alfresco_datatable_1.DataSorting();
        if (key) {
            sorting.key = key;
            sorting.direction = direction || 'asc';
        }
        this.setSorting(sorting);
    };
    ShareDataTableAdapter.prototype.setFilter = function (filter) {
        this.filter = filter;
    };
    ShareDataTableAdapter.prototype.setImageResolver = function (resolver) {
        this.imageResolver = resolver;
    };
    ShareDataTableAdapter.prototype.sortRows = function (rows, sorting) {
        if (sorting && sorting.key && rows && rows.length > 0) {
            rows.sort(function (a, b) {
                if (a.node.entry.isFolder !== b.node.entry.isFolder) {
                    return a.node.entry.isFolder ? -1 : 1;
                }
                var left = a.getValue(sorting.key);
                if (left) {
                    left = (left instanceof Date) ? left.valueOf().toString() : left.toString();
                }
                else {
                    left = '';
                }
                var right = b.getValue(sorting.key);
                if (right) {
                    right = (right instanceof Date) ? right.valueOf().toString() : right.toString();
                }
                else {
                    right = '';
                }
                return sorting.direction === 'asc'
                    ? left.localeCompare(right)
                    : right.localeCompare(left);
            });
        }
    };
    ShareDataTableAdapter.prototype.loadPage = function (page) {
        var _this = this;
        this.page = page;
        var rows = [];
        if (page && page.list) {
            var data = page.list.entries;
            if (data && data.length > 0) {
                rows = data.map(function (item) { return new ShareDataRow(item, _this.documentListService, _this.permissionsStyle); });
                if (this.filter) {
                    rows = rows.filter(this.filter);
                }
                if (this.columns && this.columns.length > 0) {
                    var sorting = this.getSorting();
                    if (sorting) {
                        this.sortRows(rows, sorting);
                    }
                    else {
                        var sortable = this.columns.filter(function (c) { return c.sortable; });
                        if (sortable.length > 0) {
                            this.sort(sortable[0].key, 'asc');
                        }
                        else {
                            this.sort(this.columns[0].key, 'asc');
                        }
                    }
                }
            }
        }
        this.rows = rows;
    };
    return ShareDataTableAdapter;
}());
exports.ShareDataTableAdapter = ShareDataTableAdapter;
var ShareDataRow = (function () {
    function ShareDataRow(obj, documentListService, permissionsStyle) {
        this.obj = obj;
        this.documentListService = documentListService;
        this.permissionsStyle = permissionsStyle;
        this.cache = {};
        this.isSelected = false;
        this.cssClass = '';
        if (!obj) {
            throw new Error(ShareDataRow.ERR_OBJECT_NOT_FOUND);
        }
        this.isDropTarget = this.isFolderAndHasPermissionToUpload(obj);
        if (permissionsStyle) {
            this.cssClass = this.getPermissionClass(obj);
        }
    }
    Object.defineProperty(ShareDataRow.prototype, "node", {
        get: function () {
            return this.obj;
        },
        enumerable: true,
        configurable: true
    });
    ShareDataRow.prototype.getPermissionClass = function (nodeEntity) {
        var _this = this;
        var permissionsClasses = '';
        this.permissionsStyle.forEach(function (currentPermissionsStyle) {
            if (_this.applyPermissionStyleToFolder(nodeEntity.entry, currentPermissionsStyle) || _this.applyPermissionStyleToFile(nodeEntity.entry, currentPermissionsStyle)) {
                if (_this.documentListService.hasPermission(nodeEntity.entry, currentPermissionsStyle.permission)) {
                    permissionsClasses += " " + currentPermissionsStyle.css;
                }
            }
        });
        return permissionsClasses;
    };
    ShareDataRow.prototype.applyPermissionStyleToFile = function (node, currentPermissionsStyle) {
        return (currentPermissionsStyle.isFile && node.isFile);
    };
    ShareDataRow.prototype.applyPermissionStyleToFolder = function (node, currentPermissionsStyle) {
        return (currentPermissionsStyle.isFolder && node.isFolder);
    };
    ShareDataRow.prototype.isFolderAndHasPermissionToUpload = function (obj) {
        return this.isFolder(obj) && this.documentListService.hasPermission(obj.entry, 'create');
    };
    ShareDataRow.prototype.isFolder = function (obj) {
        return obj.entry && obj.entry.isFolder;
    };
    ShareDataRow.prototype.cacheValue = function (key, value) {
        this.cache[key] = value;
        return value;
    };
    ShareDataRow.prototype.getValue = function (key) {
        if (this.cache[key] !== undefined) {
            return this.cache[key];
        }
        return ng2_alfresco_core_1.ObjectUtils.getValue(this.obj.entry, key);
    };
    ShareDataRow.prototype.hasValue = function (key) {
        return this.getValue(key) !== undefined;
    };
    return ShareDataRow;
}());
ShareDataRow.ERR_OBJECT_NOT_FOUND = 'Object source not found';
exports.ShareDataRow = ShareDataRow;


/***/ }),

/***/ 117:
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
var ContentActionModel = (function () {
    function ContentActionModel(obj) {
        this.disableWithNoPermission = false;
        this.disabled = false;
        if (obj) {
            this.icon = obj.icon;
            this.title = obj.title;
            this.handler = obj.handler;
            this.execute = obj.execute;
            this.target = obj.target;
            this.permission = obj.permission;
            this.disableWithNoPermission = obj.disableWithNoPermission;
            this.disabled = obj.disabled;
        }
    }
    return ContentActionModel;
}());
exports.ContentActionModel = ContentActionModel;
var DocumentActionModel = (function (_super) {
    __extends(DocumentActionModel, _super);
    function DocumentActionModel(json) {
        var _this = _super.call(this, json) || this;
        _this.target = 'document';
        return _this;
    }
    return DocumentActionModel;
}(ContentActionModel));
exports.DocumentActionModel = DocumentActionModel;
var FolderActionModel = (function (_super) {
    __extends(FolderActionModel, _super);
    function FolderActionModel(json) {
        var _this = _super.call(this, json) || this;
        _this.target = 'folder';
        return _this;
    }
    return FolderActionModel;
}(ContentActionModel));
exports.FolderActionModel = FolderActionModel;


/***/ }),

/***/ 118:
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

/***/ 13:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),

/***/ 163:
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
var document_actions_service_1 = __webpack_require__(98);
var folder_actions_service_1 = __webpack_require__(99);
var content_action_model_1 = __webpack_require__(117);
var content_action_list_component_1 = __webpack_require__(96);
var ContentActionComponent = (function () {
    function ContentActionComponent(list, documentActions, folderActions) {
        this.list = list;
        this.documentActions = documentActions;
        this.folderActions = folderActions;
        this.title = 'Action';
        this.disabled = false;
        this.execute = new core_1.EventEmitter();
        this.permissionEvent = new core_1.EventEmitter();
        this.error = new core_1.EventEmitter();
        this.success = new core_1.EventEmitter();
        this.model = new content_action_model_1.ContentActionModel();
    }
    ContentActionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model = new content_action_model_1.ContentActionModel({
            title: this.title,
            icon: this.icon,
            permission: this.permission,
            disableWithNoPermission: this.disableWithNoPermission,
            target: this.target,
            disabled: this.disabled
        });
        if (this.handler) {
            this.model.handler = this.getSystemHandler(this.target, this.handler);
        }
        if (this.execute) {
            this.model.execute = function (value) {
                _this.execute.emit({ value: value });
            };
        }
        this.register();
    };
    ContentActionComponent.prototype.register = function () {
        if (this.list) {
            return this.list.registerAction(this.model);
        }
        return false;
    };
    ContentActionComponent.prototype.ngOnChanges = function (changes) {
        this.model.title = this.title;
    };
    ContentActionComponent.prototype.getSystemHandler = function (target, name) {
        var _this = this;
        if (target) {
            var ltarget = target.toLowerCase();
            if (ltarget === 'document') {
                if (this.documentActions) {
                    this.documentActions.permissionEvent.subscribe(function (permision) {
                        _this.permissionEvent.emit(permision);
                    });
                    this.documentActions.error.subscribe(function (errors) {
                        _this.error.emit(errors);
                    });
                    this.documentActions.success.subscribe(function (message) {
                        _this.success.emit(message);
                    });
                    return this.documentActions.getHandler(name);
                }
                return null;
            }
            if (ltarget === 'folder') {
                if (this.folderActions) {
                    this.folderActions.permissionEvent.subscribe(function (permision) {
                        _this.permissionEvent.emit(permision);
                    });
                    this.folderActions.error.subscribe(function (errors) {
                        _this.error.emit(errors);
                    });
                    this.folderActions.success.subscribe(function (message) {
                        _this.success.emit(message);
                    });
                    return this.folderActions.getHandler(name);
                }
                return null;
            }
        }
        return null;
    };
    return ContentActionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ContentActionComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ContentActionComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ContentActionComponent.prototype, "handler", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ContentActionComponent.prototype, "target", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ContentActionComponent.prototype, "permission", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ContentActionComponent.prototype, "disableWithNoPermission", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ContentActionComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ContentActionComponent.prototype, "execute", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ContentActionComponent.prototype, "permissionEvent", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ContentActionComponent.prototype, "error", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ContentActionComponent.prototype, "success", void 0);
ContentActionComponent = __decorate([
    core_1.Component({
        selector: 'content-action',
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof content_action_list_component_1.ContentActionListComponent !== "undefined" && content_action_list_component_1.ContentActionListComponent) === "function" && _a || Object, typeof (_b = typeof document_actions_service_1.DocumentActionsService !== "undefined" && document_actions_service_1.DocumentActionsService) === "function" && _b || Object, typeof (_c = typeof folder_actions_service_1.FolderActionsService !== "undefined" && folder_actions_service_1.FolderActionsService) === "function" && _c || Object])
], ContentActionComponent);
exports.ContentActionComponent = ContentActionComponent;
var _a, _b, _c;


/***/ }),

/***/ 164:
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
var content_column_list_component_1 = __webpack_require__(97);
var ContentColumnComponent = (function () {
    function ContentColumnComponent(list) {
        this.list = list;
        this.type = 'text';
        this.sortable = false;
        this.title = '';
        console.log('ContentColumnComponent is deprecated starting with 1.7.0 and may be removed in future versions. Use DataColumnComponent instead.');
    }
    ContentColumnComponent.prototype.ngOnInit = function () {
        if (!this.srTitle && this.key === '$thumbnail') {
            this.srTitle = 'Thumbnail';
        }
    };
    ContentColumnComponent.prototype.ngAfterContentInit = function () {
        this.register();
    };
    ContentColumnComponent.prototype.register = function () {
        if (this.list) {
            return this.list.registerColumn(this);
        }
        return false;
    };
    return ContentColumnComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ContentColumnComponent.prototype, "key", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ContentColumnComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ContentColumnComponent.prototype, "format", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ContentColumnComponent.prototype, "sortable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ContentColumnComponent.prototype, "title", void 0);
__decorate([
    core_1.ContentChild(core_1.TemplateRef),
    __metadata("design:type", Object)
], ContentColumnComponent.prototype, "template", void 0);
__decorate([
    core_1.Input('sr-title'),
    __metadata("design:type", String)
], ContentColumnComponent.prototype, "srTitle", void 0);
__decorate([
    core_1.Input('class'),
    __metadata("design:type", String)
], ContentColumnComponent.prototype, "cssClass", void 0);
ContentColumnComponent = __decorate([
    core_1.Component({
        selector: 'content-column',
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof content_column_list_component_1.ContentColumnListComponent !== "undefined" && content_column_list_component_1.ContentColumnListComponent) === "function" && _a || Object])
], ContentColumnComponent);
exports.ContentColumnComponent = ContentColumnComponent;
var _a;


/***/ }),

/***/ 165:
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
var document_list_component_1 = __webpack_require__(28);
var EmptyFolderContentDirective = (function () {
    function EmptyFolderContentDirective(documentList) {
        this.documentList = documentList;
    }
    EmptyFolderContentDirective.prototype.ngAfterContentInit = function () {
        this.documentList.emptyFolderTemplate = this.template;
        this.documentList.dataTable.noContentTemplate = this.template;
    };
    return EmptyFolderContentDirective;
}());
__decorate([
    core_1.ContentChild(core_1.TemplateRef),
    __metadata("design:type", Object)
], EmptyFolderContentDirective.prototype, "template", void 0);
EmptyFolderContentDirective = __decorate([
    core_1.Directive({
        selector: 'empty-folder-content'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof document_list_component_1.DocumentListComponent !== "undefined" && document_list_component_1.DocumentListComponent) === "function" && _a || Object])
], EmptyFolderContentDirective);
exports.EmptyFolderContentDirective = EmptyFolderContentDirective;
var _a;


/***/ }),

/***/ 166:
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
var DropdownSitesComponent = (function () {
    function DropdownSitesComponent(sitesService) {
        this.sitesService = sitesService;
        this.change = new core_1.EventEmitter();
        this.DEFAULT_VALUE = 'default';
        this.siteList = [];
    }
    DropdownSitesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sitesService.getSites().subscribe(function (result) {
            _this.siteList = result;
        });
    };
    DropdownSitesComponent.prototype.selectedSite = function () {
        var _this = this;
        var siteFound;
        if (this.siteSelected === this.DEFAULT_VALUE) {
            siteFound = new ng2_alfresco_core_1.SiteModel();
        }
        else {
            siteFound = this.siteList.find(function (site) { return site.guid === _this.siteSelected; });
        }
        this.change.emit(siteFound);
    };
    return DropdownSitesComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], DropdownSitesComponent.prototype, "change", void 0);
DropdownSitesComponent = __decorate([
    core_1.Component({
        selector: 'adf-sites-dropdown',
        styles: [__webpack_require__(781)],
        template: __webpack_require__(611)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof ng2_alfresco_core_1.SitesApiService !== "undefined" && ng2_alfresco_core_1.SitesApiService) === "function" && _b || Object])
], DropdownSitesComponent);
exports.DropdownSitesComponent = DropdownSitesComponent;
var _a, _b;


/***/ }),

/***/ 167:
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
var PermissionStyleModel = (function () {
    function PermissionStyleModel(css, permission, isFile, isFolder) {
        if (isFile === void 0) { isFile = true; }
        if (isFolder === void 0) { isFolder = true; }
        this.isFolder = true;
        this.isFile = true;
        this.css = css;
        this.permission = permission;
        this.isFile = isFile;
        this.isFolder = isFolder;
    }
    return PermissionStyleModel;
}());
exports.PermissionStyleModel = PermissionStyleModel;


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 210:
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
var ng2_alfresco_core_1 = __webpack_require__(1);
var share_datatable_adapter_1 = __webpack_require__(116);
var document_list_component_1 = __webpack_require__(28);
var ContentNodeSelectorComponent = (function () {
    function ContentNodeSelectorComponent(searchService, contentService, data, containingDialog) {
        this.searchService = searchService;
        this.contentService = contentService;
        this.containingDialog = containingDialog;
        this.searchTerm = '';
        this.showingSearchResults = false;
        this.inDialog = false;
        this.chosenNode = null;
        this.folderIdToShow = null;
        this.currentFolderId = null;
        this.rowFilter = null;
        this.imageResolver = null;
        this.select = new core_1.EventEmitter();
        if (data) {
            this.title = data.title;
            this.select = data.select;
            this.currentFolderId = data.currentFolderId;
            this.rowFilter = data.rowFilter;
            this.imageResolver = data.imageResolver;
        }
        if (this.containingDialog) {
            this.inDialog = true;
        }
    }
    ContentNodeSelectorComponent.prototype.ngOnInit = function () {
        this.folderIdToShow = this.currentFolderId;
    };
    ContentNodeSelectorComponent.prototype.siteChanged = function (chosenSite) {
        this.siteId = chosenSite.guid;
        this.updateResults();
    };
    ContentNodeSelectorComponent.prototype.search = function (searchTerm) {
        this.searchTerm = searchTerm;
        this.updateResults();
    };
    ContentNodeSelectorComponent.prototype.needBreadcrumbs = function () {
        var whenInFolderNavigation = !this.showingSearchResults, whenInSelectingSearchResult = this.showingSearchResults && this.chosenNode;
        return whenInFolderNavigation || whenInSelectingSearchResult;
    };
    Object.defineProperty(ContentNodeSelectorComponent.prototype, "breadcrumbFolderNode", {
        get: function () {
            if (this.showingSearchResults && this.chosenNode) {
                return this.chosenNode;
            }
            else {
                return this.documentList.folderNode;
            }
        },
        enumerable: true,
        configurable: true
    });
    ContentNodeSelectorComponent.prototype.clear = function () {
        this.searchTerm = '';
        this.nodes = [];
        this.chosenNode = null;
        this.showingSearchResults = false;
        this.folderIdToShow = this.currentFolderId;
    };
    ContentNodeSelectorComponent.prototype.updateResults = function () {
        if (this.searchTerm.length === 0) {
            this.folderIdToShow = this.siteId || this.currentFolderId;
        }
        else {
            this.querySearch();
        }
    };
    ContentNodeSelectorComponent.prototype.querySearch = function () {
        var _this = this;
        if (this.searchTerm.length > 3) {
            this.chosenNode = null;
            var searchTerm = this.searchTerm + '*';
            var searchOpts = {
                include: ['path', 'allowableOperations'],
                skipCount: 0,
                rootNodeId: this.siteId,
                nodeType: 'cm:folder',
                maxItems: 200,
                orderBy: null
            };
            this.searchService.getNodeQueryResults(searchTerm, searchOpts)
                .subscribe(function (results) {
                _this.showingSearchResults = true;
                _this.folderIdToShow = null;
                _this.nodes = results;
                _this.highlight();
            });
        }
    };
    ContentNodeSelectorComponent.prototype.highlight = function () {
        var _this = this;
        setTimeout(function () {
            _this.highlighter.highlight(_this.searchTerm);
        }, 0);
    };
    ContentNodeSelectorComponent.prototype.onNodeSelect = function (event) {
        this.attemptNodeSelection(event.detail.node.entry);
    };
    ContentNodeSelectorComponent.prototype.onFolderChange = function () {
        this.showingSearchResults = false;
    };
    ContentNodeSelectorComponent.prototype.onFolderLoaded = function () {
        this.attemptNodeSelection(this.documentList.folderNode);
    };
    ContentNodeSelectorComponent.prototype.attemptNodeSelection = function (entry) {
        if (this.contentService.hasPermission(entry, 'update')) {
            this.chosenNode = entry;
        }
        else {
            this.resetChosenNode();
        }
    };
    ContentNodeSelectorComponent.prototype.resetChosenNode = function () {
        this.chosenNode = null;
    };
    ContentNodeSelectorComponent.prototype.choose = function () {
        this.select.next([this.chosenNode]);
    };
    ContentNodeSelectorComponent.prototype.close = function () {
        this.containingDialog.close();
    };
    return ContentNodeSelectorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ContentNodeSelectorComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ContentNodeSelectorComponent.prototype, "currentFolderId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof share_datatable_adapter_1.RowFilter !== "undefined" && share_datatable_adapter_1.RowFilter) === "function" && _a || Object)
], ContentNodeSelectorComponent.prototype, "rowFilter", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof share_datatable_adapter_1.ImageResolver !== "undefined" && share_datatable_adapter_1.ImageResolver) === "function" && _b || Object)
], ContentNodeSelectorComponent.prototype, "imageResolver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], ContentNodeSelectorComponent.prototype, "select", void 0);
__decorate([
    core_1.ViewChild(document_list_component_1.DocumentListComponent),
    __metadata("design:type", typeof (_d = typeof document_list_component_1.DocumentListComponent !== "undefined" && document_list_component_1.DocumentListComponent) === "function" && _d || Object)
], ContentNodeSelectorComponent.prototype, "documentList", void 0);
__decorate([
    core_1.ViewChild(ng2_alfresco_core_1.HighlightDirective),
    __metadata("design:type", typeof (_e = typeof ng2_alfresco_core_1.HighlightDirective !== "undefined" && ng2_alfresco_core_1.HighlightDirective) === "function" && _e || Object)
], ContentNodeSelectorComponent.prototype, "highlighter", void 0);
ContentNodeSelectorComponent = __decorate([
    core_1.Component({
        selector: 'adf-content-node-selector',
        styles: [__webpack_require__(779)],
        template: __webpack_require__(609),
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __param(2, core_1.Optional()), __param(2, core_1.Inject(material_1.MD_DIALOG_DATA)),
    __param(3, core_1.Optional()),
    __metadata("design:paramtypes", [typeof (_f = typeof ng2_alfresco_core_1.SearchService !== "undefined" && ng2_alfresco_core_1.SearchService) === "function" && _f || Object, typeof (_g = typeof ng2_alfresco_core_1.AlfrescoContentService !== "undefined" && ng2_alfresco_core_1.AlfrescoContentService) === "function" && _g || Object, Object, typeof (_h = typeof material_1.MdDialogRef !== "undefined" && material_1.MdDialogRef) === "function" && _h || Object])
], ContentNodeSelectorComponent);
exports.ContentNodeSelectorComponent = ContentNodeSelectorComponent;
var _a, _b, _c, _d, _e, _f, _g, _h;


/***/ }),

/***/ 211:
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
var ng2_alfresco_core_1 = __webpack_require__(1);
var NodeEntityEvent = (function (_super) {
    __extends(NodeEntityEvent, _super);
    function NodeEntityEvent(entity) {
        var _this = _super.call(this) || this;
        _this.value = entity;
        return _this;
    }
    return NodeEntityEvent;
}(ng2_alfresco_core_1.BaseEvent));
exports.NodeEntityEvent = NodeEntityEvent;
var NodeEntryEvent = (function (_super) {
    __extends(NodeEntryEvent, _super);
    function NodeEntryEvent(entity) {
        var _this = _super.call(this) || this;
        _this.value = entity;
        return _this;
    }
    return NodeEntryEvent;
}(ng2_alfresco_core_1.BaseEvent));
exports.NodeEntryEvent = NodeEntryEvent;


/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),

/***/ 28:
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
var ng2_alfresco_core_1 = __webpack_require__(1);
var ng2_alfresco_datatable_1 = __webpack_require__(10);
var Rx_1 = __webpack_require__(2);
var share_datatable_adapter_1 = __webpack_require__(116);
var content_action_model_1 = __webpack_require__(117);
var document_list_service_1 = __webpack_require__(39);
var node_event_1 = __webpack_require__(211);
var DocumentListComponent = DocumentListComponent_1 = (function () {
    function DocumentListComponent(documentListService, ngZone, elementRef, apiService) {
        this.documentListService = documentListService;
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.apiService = apiService;
        this.permissionsStyle = [];
        this.locationFormat = '/';
        this.navigate = true;
        this.navigationMode = DocumentListComponent_1.DOUBLE_CLICK_NAVIGATION;
        this.thumbnails = false;
        this.selectionMode = 'single';
        this.multiselect = false;
        this.enablePagination = true;
        this.contentActions = false;
        this.contentActionsPosition = 'right';
        this.contextMenuActions = false;
        this.pageSize = DocumentListComponent_1.DEFAULT_PAGE_SIZE;
        this.emptyFolderImageUrl = __webpack_require__(401);
        this.allowDropFiles = false;
        this.loading = false;
        this.selection = new Array();
        this.skipCount = 0;
        this.rowFilter = null;
        this.imageResolver = null;
        this.currentFolderId = null;
        this.folderNode = null;
        this.node = null;
        this.nodeClick = new core_1.EventEmitter();
        this.nodeDblClick = new core_1.EventEmitter();
        this.folderChange = new core_1.EventEmitter();
        this.preview = new core_1.EventEmitter();
        this.ready = new core_1.EventEmitter();
        this.error = new core_1.EventEmitter();
        this.actions = [];
        this.contextActionHandler = new Rx_1.Subject();
        this.currentNodeAllowableOperations = [];
        this.CREATE_PERMISSION = 'create';
    }
    Object.defineProperty(DocumentListComponent.prototype, "nodesApi", {
        get: function () {
            return this.apiService.getInstance().core.nodesApi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentListComponent.prototype, "sharedLinksApi", {
        get: function () {
            return this.apiService.getInstance().core.sharedlinksApi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentListComponent.prototype, "sitesApi", {
        get: function () {
            return this.apiService.getInstance().core.sitesApi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentListComponent.prototype, "favoritesApi", {
        get: function () {
            return this.apiService.getInstance().core.favoritesApi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentListComponent.prototype, "peopleApi", {
        get: function () {
            return this.apiService.getInstance().core.peopleApi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentListComponent.prototype, "searchApi", {
        get: function () {
            return this.apiService.getInstance().search.searchApi;
        },
        enumerable: true,
        configurable: true
    });
    DocumentListComponent.prototype.getContextActions = function (node) {
        var _this = this;
        if (node && node.entry) {
            var actions = this.getNodeActions(node);
            if (actions && actions.length > 0) {
                return actions.map(function (a) {
                    return {
                        model: a,
                        node: node,
                        subject: _this.contextActionHandler
                    };
                });
            }
        }
        return null;
    };
    DocumentListComponent.prototype.contextActionCallback = function (action) {
        if (action) {
            this.executeContentAction(action.node, action.model);
        }
    };
    Object.defineProperty(DocumentListComponent.prototype, "hasCustomLayout", {
        get: function () {
            return this.columnList && this.columnList.columns && this.columnList.columns.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    DocumentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = new share_datatable_adapter_1.ShareDataTableAdapter(this.documentListService, null, this.getDefaultSorting());
        this.data.thumbnails = this.thumbnails;
        this.data.permissionsStyle = this.permissionsStyle;
        if (this.rowFilter) {
            this.data.setFilter(this.rowFilter);
        }
        if (this.imageResolver) {
            this.data.setImageResolver(this.imageResolver);
        }
        this.contextActionHandler.subscribe(function (val) { return _this.contextActionCallback(val); });
        this.enforceSingleClickNavigationForMobile();
    };
    DocumentListComponent.prototype.ngAfterContentInit = function () {
        var schema = [];
        if (this.hasCustomLayout) {
            schema = this.columnList.columns.map(function (c) { return c; });
        }
        if (!this.data) {
            this.data = new share_datatable_adapter_1.ShareDataTableAdapter(this.documentListService, schema, this.getDefaultSorting());
        }
        else if (schema && schema.length > 0) {
            this.data.setColumns(schema);
        }
        var columns = this.data.getColumns();
        if (!columns || columns.length === 0) {
            this.setupDefaultColumns(this.currentFolderId);
        }
    };
    DocumentListComponent.prototype.ngOnChanges = function (changes) {
        if (changes.folderNode && changes.folderNode.currentValue) {
            this.loadFolder();
        }
        else if (changes.currentFolderId && changes.currentFolderId.currentValue) {
            if (!this.hasCustomLayout) {
                this.setupDefaultColumns(changes.currentFolderId.currentValue);
            }
            this.loadFolderByNodeId(changes.currentFolderId.currentValue);
        }
        else if (this.data) {
            if (changes.node && changes.node.currentValue) {
                this.data.loadPage(changes.node.currentValue);
            }
            else if (changes.rowFilter) {
                this.data.setFilter(changes.rowFilter.currentValue);
                if (this.currentFolderId) {
                    this.loadFolderNodesByFolderNodeId(this.currentFolderId, this.pageSize, this.skipCount);
                }
            }
            else if (changes.imageResolver) {
                this.data.setImageResolver(changes.imageResolver.currentValue);
            }
        }
    };
    DocumentListComponent.prototype.reload = function () {
        var _this = this;
        this.ngZone.run(function () {
            if (_this.folderNode) {
                _this.loadFolder();
            }
            else if (_this.currentFolderId) {
                _this.loadFolderByNodeId(_this.currentFolderId);
            }
            else if (_this.node) {
                _this.data.loadPage(_this.node);
                _this.ready.emit();
            }
        });
    };
    DocumentListComponent.prototype.isEmptyTemplateDefined = function () {
        if (this.dataTable) {
            if (this.emptyFolderTemplate) {
                return true;
            }
        }
        return false;
    };
    DocumentListComponent.prototype.isMobile = function () {
        return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    DocumentListComponent.prototype.isEmpty = function () {
        return !this.data || this.data.getRows().length === 0;
    };
    DocumentListComponent.prototype.isPaginationEnabled = function () {
        return this.enablePagination && !this.isEmpty();
    };
    DocumentListComponent.prototype.getNodeActions = function (node) {
        var _this = this;
        var target = null;
        if (node && node.entry) {
            if (node.entry.isFile) {
                target = 'document';
            }
            if (node.entry.isFolder) {
                target = 'folder';
            }
            if (target) {
                var ltarget_1 = target.toLowerCase();
                var actionsByTarget = this.actions.filter(function (entry) {
                    return entry.target.toLowerCase() === ltarget_1;
                }).map(function (action) { return new content_action_model_1.ContentActionModel(action); });
                actionsByTarget.forEach(function (action) {
                    _this.checkPermission(node, action);
                });
                return actionsByTarget;
            }
        }
        return [];
    };
    DocumentListComponent.prototype.checkPermission = function (node, action) {
        if (action.permission) {
            if (this.hasPermissions(node)) {
                var permissions = node.entry.allowableOperations;
                var findPermission = permissions.find(function (permission) { return permission === action.permission; });
                if (!findPermission && action.disableWithNoPermission === true) {
                    action.disabled = true;
                }
            }
        }
        return action;
    };
    DocumentListComponent.prototype.hasPermissions = function (node) {
        return node.entry.allowableOperations ? true : false;
    };
    DocumentListComponent.prototype.onShowContextMenu = function (e) {
        if (e && this.contextMenuActions) {
            e.preventDefault();
        }
    };
    DocumentListComponent.prototype.performNavigation = function (node) {
        if (this.canNavigateFolder(node)) {
            this.currentFolderId = node.entry.id;
            this.folderNode = node.entry;
            this.skipCount = 0;
            this.currentNodeAllowableOperations = node.entry['allowableOperations'] ? node.entry['allowableOperations'] : [];
            this.loadFolder();
            this.folderChange.emit(new node_event_1.NodeEntryEvent(node.entry));
            return true;
        }
        return false;
    };
    DocumentListComponent.prototype.executeContentAction = function (node, action) {
        if (node && node.entry && action) {
            var handlerSub = void 0;
            if (typeof action.handler === 'function') {
                handlerSub = action.handler(node, this, action.permission);
            }
            else {
                handlerSub = Rx_1.Observable.of(true);
            }
            if (typeof action.execute === 'function') {
                handlerSub.subscribe(function () { action.execute(node); });
            }
        }
    };
    DocumentListComponent.prototype.loadFolder = function () {
        var _this = this;
        this.loading = true;
        var nodeId = this.folderNode ? this.folderNode.id : this.currentFolderId;
        if (nodeId) {
            this.loadFolderNodesByFolderNodeId(nodeId, this.pageSize, this.skipCount).catch(function (err) { return _this.error.emit(err); });
        }
    };
    DocumentListComponent.prototype.loadFolderByNodeId = function (nodeId) {
        var _this = this;
        this.loading = true;
        if (nodeId === '-trashcan-') {
            this.loadTrashcan();
        }
        else if (nodeId === '-sharedlinks-') {
            this.loadSharedLinks();
        }
        else if (nodeId === '-sites-') {
            this.loadSites();
        }
        else if (nodeId === '-favorites-') {
            this.loadFavorites();
        }
        else if (nodeId === '-recent-') {
            this.loadRecent();
        }
        else {
            this.documentListService
                .getFolderNode(nodeId).then(function (node) {
                _this.folderNode = node;
                _this.currentFolderId = node.id;
                _this.skipCount = 0;
                _this.currentNodeAllowableOperations = node['allowableOperations'] ? node['allowableOperations'] : [];
                _this.loadFolderNodesByFolderNodeId(node.id, _this.pageSize, _this.skipCount).catch(function (err) { return _this.error.emit(err); });
            })
                .catch(function (err) { return _this.error.emit(err); });
        }
    };
    DocumentListComponent.prototype.loadFolderNodesByFolderNodeId = function (id, maxItems, skipCount) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.documentListService
                .getFolder(null, {
                maxItems: maxItems,
                skipCount: skipCount,
                rootFolderId: id
            })
                .subscribe(function (val) {
                if (_this.isCurrentPageEmpty(val, skipCount)) {
                    _this.updateSkipCount(skipCount - maxItems);
                    _this.loadFolderNodesByFolderNodeId(id, maxItems, skipCount - maxItems).then(function () { return resolve(true); }, function (error) { return reject(error); });
                }
                else {
                    _this.data.loadPage(val);
                    _this.pagination = val.list.pagination;
                    _this.loading = false;
                    _this.ready.emit();
                    resolve(true);
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    DocumentListComponent.prototype.loadTrashcan = function () {
        var _this = this;
        var options = {
            include: ['path', 'properties'],
            maxItems: this.pageSize,
            skipCount: this.skipCount
        };
        this.nodesApi.getDeletedNodes(options).then(function (page) {
            _this.onPageLoaded(page);
        });
    };
    DocumentListComponent.prototype.loadSharedLinks = function () {
        var _this = this;
        var options = {
            include: ['properties', 'allowableOperations', 'path'],
            maxItems: this.pageSize,
            skipCount: this.skipCount
        };
        this.sharedLinksApi.findSharedLinks(options).then(function (page) {
            _this.onPageLoaded(page);
        });
    };
    DocumentListComponent.prototype.loadSites = function () {
        var _this = this;
        var options = {
            include: ['properties'],
            maxItems: this.pageSize,
            skipCount: this.skipCount
        };
        this.sitesApi.getSites(options).then(function (page) {
            _this.onPageLoaded(page);
        });
    };
    DocumentListComponent.prototype.loadFavorites = function () {
        var _this = this;
        var options = {
            maxItems: this.pageSize,
            skipCount: this.skipCount,
            where: '(EXISTS(target/file) OR EXISTS(target/folder))',
            include: ['properties', 'allowableOperations', 'path']
        };
        this.favoritesApi.getFavorites('-me-', options).then(function (result) {
            var page = {
                list: {
                    entries: result.list.entries
                        .map(function (_a) {
                        var target = _a.entry.target;
                        return ({
                            entry: target.file || target.folder
                        });
                    })
                        .map(function (_a) {
                        var entry = _a.entry;
                        entry.properties = {
                            'cm:title': entry.title,
                            'cm:description': entry.description
                        };
                        return { entry: entry };
                    }),
                    pagination: result.list.pagination
                }
            };
            _this.onPageLoaded(page);
        });
    };
    DocumentListComponent.prototype.loadRecent = function () {
        var _this = this;
        this.peopleApi.getPerson('-me-').then(function (person) {
            var username = person.entry.id;
            var query = {
                query: {
                    query: '*',
                    language: 'afts'
                },
                filterQueries: [
                    { query: "cm:modified:[NOW/DAY-30DAYS TO NOW/DAY+1DAY]" },
                    { query: "cm:modifier:" + username + " OR cm:creator:" + username },
                    { query: "TYPE:\"content\" AND -TYPE:\"app:filelink\" AND -TYPE:\"fm:post\"" }
                ],
                include: ['path', 'properties', 'allowableOperations'],
                sort: [{
                        type: 'FIELD',
                        field: 'cm:modified',
                        ascending: false
                    }],
                paging: {
                    maxItems: _this.pageSize,
                    skipCount: _this.skipCount
                }
            };
            _this.searchApi.search(query).then(function (page) { return _this.onPageLoaded(page); });
        });
    };
    DocumentListComponent.prototype.onPageLoaded = function (page) {
        if (page) {
            this.data.loadPage(page);
            this.pagination = page.list.pagination;
            this.loading = false;
            this.ready.emit();
        }
    };
    DocumentListComponent.prototype.isCurrentPageEmpty = function (node, skipCount) {
        return !this.hasNodeEntries(node) && this.hasPages(skipCount);
    };
    DocumentListComponent.prototype.hasPages = function (skipCount) {
        return skipCount > 0 && this.isPaginationEnabled();
    };
    DocumentListComponent.prototype.hasNodeEntries = function (node) {
        return node && node.list && node.list.entries && node.list.entries.length > 0;
    };
    DocumentListComponent.prototype.setupDefaultColumns = function (preset) {
        if (preset === void 0) { preset = 'default'; }
        if (this.data) {
            var columns = this.getLayoutPreset(preset);
            this.data.setColumns(columns);
        }
    };
    DocumentListComponent.prototype.onPreviewFile = function (node) {
        if (node) {
            this.preview.emit(new node_event_1.NodeEntityEvent(node));
        }
    };
    DocumentListComponent.prototype.onNodeClick = function (node) {
        var domEvent = new CustomEvent('node-click', {
            detail: {
                sender: this,
                node: node
            },
            bubbles: true
        });
        this.elementRef.nativeElement.dispatchEvent(domEvent);
        var event = new node_event_1.NodeEntityEvent(node);
        this.nodeClick.emit(event);
        if (!event.defaultPrevented) {
            if (this.navigate && this.navigationMode === DocumentListComponent_1.SINGLE_CLICK_NAVIGATION) {
                if (node && node.entry) {
                    if (node.entry.isFile) {
                        this.onPreviewFile(node);
                    }
                    if (node.entry.isFolder) {
                        this.performNavigation(node);
                    }
                }
            }
        }
    };
    DocumentListComponent.prototype.onNodeDblClick = function (node) {
        var domEvent = new CustomEvent('node-dblclick', {
            detail: {
                sender: this,
                node: node
            },
            bubbles: true
        });
        this.elementRef.nativeElement.dispatchEvent(domEvent);
        var event = new node_event_1.NodeEntityEvent(node);
        this.nodeDblClick.emit(event);
        if (!event.defaultPrevented) {
            if (this.navigate && this.navigationMode === DocumentListComponent_1.DOUBLE_CLICK_NAVIGATION) {
                if (node && node.entry) {
                    if (node.entry.isFile) {
                        this.onPreviewFile(node);
                    }
                    if (node.entry.isFolder) {
                        this.performNavigation(node);
                    }
                }
            }
        }
    };
    DocumentListComponent.prototype.onNodeSelect = function (event) {
        this.selection = event.selection.map(function (entry) { return entry.node; });
        var domEvent = new CustomEvent('node-select', {
            detail: {
                node: event.row.node,
                selection: this.selection
            },
            bubbles: true
        });
        this.elementRef.nativeElement.dispatchEvent(domEvent);
    };
    DocumentListComponent.prototype.onNodeUnselect = function (event) {
        this.selection = event.selection.map(function (entry) { return entry.node; });
        var domEvent = new CustomEvent('node-unselect', {
            detail: {
                node: event.row.node,
                selection: this.selection
            },
            bubbles: true
        });
        this.elementRef.nativeElement.dispatchEvent(domEvent);
    };
    DocumentListComponent.prototype.onShowRowContextMenu = function (event) {
        if (this.contextMenuActions) {
            var args = event.value;
            var node = args.row.node;
            if (node) {
                args.actions = this.getContextActions(node) || [];
            }
        }
    };
    DocumentListComponent.prototype.onShowRowActionsMenu = function (event) {
        if (this.contentActions) {
            var args = event.value;
            var node = args.row.node;
            if (node) {
                args.actions = this.getNodeActions(node) || [];
            }
        }
    };
    DocumentListComponent.prototype.onExecuteRowAction = function (event) {
        if (this.contentActions) {
            var args = event.value;
            var node = args.row.node;
            var action = args.action;
            this.executeContentAction(node, action);
        }
    };
    DocumentListComponent.prototype.onChangePageSize = function (event) {
        this.pageSize = event.maxItems;
        this.reload();
    };
    DocumentListComponent.prototype.onNextPage = function (event) {
        this.skipCount = event.skipCount;
        this.reload();
    };
    DocumentListComponent.prototype.onPrevPage = function (event) {
        this.skipCount = event.skipCount;
        this.reload();
    };
    DocumentListComponent.prototype.enforceSingleClickNavigationForMobile = function () {
        if (this.isMobile()) {
            this.navigationMode = DocumentListComponent_1.SINGLE_CLICK_NAVIGATION;
        }
    };
    DocumentListComponent.prototype.getDefaultSorting = function () {
        var defaultSorting;
        if (this.sorting) {
            var _a = this.sorting, key = _a[0], direction = _a[1];
            defaultSorting = new ng2_alfresco_datatable_1.DataSorting(key, direction);
        }
        return defaultSorting;
    };
    DocumentListComponent.prototype.canNavigateFolder = function (node) {
        if (this.isCustomSource(this.currentFolderId)) {
            return false;
        }
        if (node && node.entry && node.entry.isFolder) {
            return true;
        }
        return false;
    };
    DocumentListComponent.prototype.isCustomSource = function (folderId) {
        var sources = ['-trashcan-', '-sharedlinks-', '-sites-', '-favorites-', '-recent-'];
        if (sources.indexOf(folderId) > -1) {
            return true;
        }
        return false;
    };
    DocumentListComponent.prototype.updateSkipCount = function (newSkipCount) {
        this.skipCount = newSkipCount;
    };
    DocumentListComponent.prototype.hasCurrentNodePermission = function (permission) {
        var hasPermission = false;
        if (this.currentNodeAllowableOperations.length > 0) {
            var permFound = this.currentNodeAllowableOperations.find(function (element) { return element === permission; });
            hasPermission = permFound ? true : false;
        }
        return hasPermission;
    };
    DocumentListComponent.prototype.hasCreatePermission = function () {
        return this.hasCurrentNodePermission(this.CREATE_PERMISSION);
    };
    DocumentListComponent.prototype.getLayoutPreset = function (name) {
        if (name === void 0) { name = 'default'; }
        var presets = {
            '-trashcan-': [
                {
                    key: '$thumbnail',
                    type: 'image',
                    srTitle: 'ADF-DOCUMENT-LIST.LAYOUT.THUMBNAIL',
                    sortable: false
                },
                {
                    key: 'name',
                    type: 'text',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.NAME',
                    cssClass: 'full-width ellipsis-cell',
                    sortable: true
                },
                {
                    key: 'path',
                    type: 'location',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.LOCATION',
                    format: this.locationFormat,
                    sortable: true
                },
                {
                    key: 'content.sizeInBytes',
                    type: 'fileSize',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.SIZE',
                    sortable: true
                },
                {
                    key: 'archivedAt',
                    type: 'date',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.DELETED_ON',
                    format: 'timeAgo',
                    sortable: true
                },
                {
                    key: 'archivedByUser.displayName',
                    type: 'text',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.DELETED_BY',
                    sortable: true
                }
            ],
            '-sites-': [
                {
                    key: '$thumbnail',
                    type: 'image',
                    srTitle: 'ADF-DOCUMENT-LIST.LAYOUT.THUMBNAIL',
                    sortable: false
                },
                {
                    key: 'title',
                    type: 'text',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.NAME',
                    cssClass: 'full-width ellipsis-cell',
                    sortable: true
                },
                {
                    key: 'visibility',
                    type: 'text',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.STATUS',
                    sortable: true
                }
            ],
            '-favorites-': [
                {
                    key: '$thumbnail',
                    type: 'image',
                    srTitle: 'ADF-DOCUMENT-LIST.LAYOUT.THUMBNAIL',
                    sortable: false
                },
                {
                    key: 'name',
                    type: 'text',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.NAME',
                    cssClass: 'full-width ellipsis-cell',
                    sortable: true
                },
                {
                    key: 'path',
                    type: 'location',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.LOCATION',
                    format: this.locationFormat,
                    sortable: true
                },
                {
                    key: 'content.sizeInBytes',
                    type: 'fileSize',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.SIZE',
                    sortable: true
                },
                {
                    key: 'modifiedAt',
                    type: 'date',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.MODIFIED_ON',
                    format: 'timeAgo',
                    sortable: true
                },
                {
                    key: 'modifiedByUser.displayName',
                    type: 'text',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.MODIFIED_BY',
                    sortable: true
                }
            ],
            '-recent-': [
                {
                    key: '$thumbnail',
                    type: 'image',
                    srTitle: 'ADF-DOCUMENT-LIST.LAYOUT.THUMBNAIL',
                    sortable: false
                },
                {
                    key: 'name',
                    type: 'text',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.NAME',
                    cssClass: 'full-width ellipsis-cell',
                    sortable: true
                },
                {
                    key: 'path',
                    type: 'location',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.LOCATION',
                    cssClass: 'ellipsis-cell',
                    format: this.locationFormat,
                    sortable: true
                },
                {
                    key: 'content.sizeInBytes',
                    type: 'fileSize',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.SIZE',
                    sortable: true
                },
                {
                    key: 'modifiedAt',
                    type: 'date',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.MODIFIED_ON',
                    format: 'timeAgo',
                    sortable: true
                }
            ],
            '-sharedlinks-': [
                {
                    key: '$thumbnail',
                    type: 'image',
                    srTitle: 'ADF-DOCUMENT-LIST.LAYOUT.THUMBNAIL',
                    sortable: false
                },
                {
                    key: 'name',
                    type: 'text',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.NAME',
                    cssClass: 'full-width ellipsis-cell',
                    sortable: true
                },
                {
                    key: 'path',
                    type: 'location',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.LOCATION',
                    cssClass: 'ellipsis-cell',
                    format: this.locationFormat,
                    sortable: true
                },
                {
                    key: 'content.sizeInBytes',
                    type: 'fileSize',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.SIZE',
                    sortable: true
                },
                {
                    key: 'modifiedAt',
                    type: 'date',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.MODIFIED_ON',
                    format: 'timeAgo',
                    sortable: true
                },
                {
                    key: 'modifiedByUser.displayName',
                    type: 'text',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.MODIFIED_BY',
                    sortable: true
                },
                {
                    key: 'sharedByUser.displayName',
                    type: 'text',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.SHARED_BY',
                    sortable: true
                }
            ],
            'default': [
                {
                    key: '$thumbnail',
                    type: 'image',
                    srTitle: 'ADF-DOCUMENT-LIST.LAYOUT.THUMBNAIL',
                    sortable: false
                },
                {
                    key: 'name',
                    type: 'text',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.NAME',
                    cssClass: 'full-width ellipsis-cell',
                    sortable: true
                },
                {
                    key: 'content.sizeInBytes',
                    type: 'fileSize',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.SIZE',
                    sortable: true
                },
                {
                    key: 'modifiedAt',
                    type: 'date',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.MODIFIED_ON',
                    format: 'timeAgo',
                    sortable: true
                },
                {
                    key: 'modifiedByUser.displayName',
                    type: 'text',
                    title: 'ADF-DOCUMENT-LIST.LAYOUT.MODIFIED_BY',
                    sortable: true
                }
            ]
        };
        return (presets[name] || presets['default']).map(function (col) { return new ng2_alfresco_datatable_1.ObjectDataColumn(col); });
    };
    return DocumentListComponent;
}());
DocumentListComponent.SINGLE_CLICK_NAVIGATION = 'click';
DocumentListComponent.DOUBLE_CLICK_NAVIGATION = 'dblclick';
DocumentListComponent.DEFAULT_PAGE_SIZE = 20;
__decorate([
    core_1.ContentChild(ng2_alfresco_core_1.DataColumnListComponent),
    __metadata("design:type", typeof (_a = typeof ng2_alfresco_core_1.DataColumnListComponent !== "undefined" && ng2_alfresco_core_1.DataColumnListComponent) === "function" && _a || Object)
], DocumentListComponent.prototype, "columnList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DocumentListComponent.prototype, "permissionsStyle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DocumentListComponent.prototype, "locationFormat", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DocumentListComponent.prototype, "navigate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DocumentListComponent.prototype, "navigationMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DocumentListComponent.prototype, "thumbnails", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DocumentListComponent.prototype, "selectionMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DocumentListComponent.prototype, "multiselect", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DocumentListComponent.prototype, "enablePagination", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DocumentListComponent.prototype, "contentActions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DocumentListComponent.prototype, "contentActionsPosition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DocumentListComponent.prototype, "contextMenuActions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DocumentListComponent.prototype, "pageSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DocumentListComponent.prototype, "emptyFolderImageUrl", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DocumentListComponent.prototype, "allowDropFiles", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DocumentListComponent.prototype, "sorting", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DocumentListComponent.prototype, "rowStyle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DocumentListComponent.prototype, "rowStyleClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DocumentListComponent.prototype, "loading", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof share_datatable_adapter_1.RowFilter !== "undefined" && share_datatable_adapter_1.RowFilter) === "function" && _b || Object)
], DocumentListComponent.prototype, "rowFilter", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_c = typeof share_datatable_adapter_1.ImageResolver !== "undefined" && share_datatable_adapter_1.ImageResolver) === "function" && _c || Object)
], DocumentListComponent.prototype, "imageResolver", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DocumentListComponent.prototype, "currentFolderId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_d = typeof alfresco_js_api_1.MinimalNodeEntryEntity !== "undefined" && alfresco_js_api_1.MinimalNodeEntryEntity) === "function" && _d || Object)
], DocumentListComponent.prototype, "folderNode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_e = typeof alfresco_js_api_1.NodePaging !== "undefined" && alfresco_js_api_1.NodePaging) === "function" && _e || Object)
], DocumentListComponent.prototype, "node", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_f = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _f || Object)
], DocumentListComponent.prototype, "nodeClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_g = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _g || Object)
], DocumentListComponent.prototype, "nodeDblClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_h = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _h || Object)
], DocumentListComponent.prototype, "folderChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_j = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _j || Object)
], DocumentListComponent.prototype, "preview", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_k = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _k || Object)
], DocumentListComponent.prototype, "ready", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_l = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _l || Object)
], DocumentListComponent.prototype, "error", void 0);
__decorate([
    core_1.ViewChild(ng2_alfresco_datatable_1.DataTableComponent),
    __metadata("design:type", typeof (_m = typeof ng2_alfresco_datatable_1.DataTableComponent !== "undefined" && ng2_alfresco_datatable_1.DataTableComponent) === "function" && _m || Object)
], DocumentListComponent.prototype, "dataTable", void 0);
__decorate([
    core_1.HostListener('contextmenu', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DocumentListComponent.prototype, "onShowContextMenu", null);
DocumentListComponent = DocumentListComponent_1 = __decorate([
    core_1.Component({
        selector: 'adf-document-list, alfresco-document-list',
        styles: [__webpack_require__(780)],
        template: __webpack_require__(610),
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_o = typeof document_list_service_1.DocumentListService !== "undefined" && document_list_service_1.DocumentListService) === "function" && _o || Object, typeof (_p = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _p || Object, typeof (_q = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _q || Object, typeof (_r = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _r || Object])
], DocumentListComponent);
exports.DocumentListComponent = DocumentListComponent;
var DocumentListComponent_1, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 372:
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
var breadcrumb_component_1 = __webpack_require__(95);
var DropdownBreadcrumbComponent = (function (_super) {
    __extends(DropdownBreadcrumbComponent, _super);
    function DropdownBreadcrumbComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownBreadcrumbComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.recalculateNodes();
    };
    DropdownBreadcrumbComponent.prototype.recalculateNodes = function () {
        this.currentNode = this.route[this.route.length - 1];
        this.previousNodes = this.route.slice(0, this.route.length - 1).reverse();
    };
    DropdownBreadcrumbComponent.prototype.open = function () {
        if (this.selectbox) {
            this.selectbox.open();
        }
    };
    DropdownBreadcrumbComponent.prototype.hasPreviousNodes = function () {
        return this.previousNodes.length > 0;
    };
    return DropdownBreadcrumbComponent;
}(breadcrumb_component_1.BreadcrumbComponent));
__decorate([
    core_1.ViewChild(material_1.MdSelect),
    __metadata("design:type", typeof (_a = typeof material_1.MdSelect !== "undefined" && material_1.MdSelect) === "function" && _a || Object)
], DropdownBreadcrumbComponent.prototype, "selectbox", void 0);
DropdownBreadcrumbComponent = __decorate([
    core_1.Component({
        selector: 'adf-dropdown-breadcrumb',
        template: __webpack_require__(608),
        styles: [__webpack_require__(778)],
        encapsulation: core_1.ViewEncapsulation.None,
        host: {
            'class': 'adf-dropdown-breadcrumb'
        }
    })
], DropdownBreadcrumbComponent);
exports.DropdownBreadcrumbComponent = DropdownBreadcrumbComponent;
var _a;


/***/ }),

/***/ 373:
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
        material_1.MdMenuModule,
        material_1.MdDialogModule,
        material_1.MdButtonModule,
        material_1.MdIconModule,
        material_1.MdInputModule,
        material_1.MdProgressSpinnerModule,
        material_1.MdSelectModule,
        material_1.MdRippleModule,
        material_1.MdOptionModule
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

/***/ 374:
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
var NodePaging = (function () {
    function NodePaging() {
    }
    return NodePaging;
}());
exports.NodePaging = NodePaging;
var NodePagingList = (function () {
    function NodePagingList() {
    }
    return NodePagingList;
}());
exports.NodePagingList = NodePagingList;
var NodeMinimalEntry = (function () {
    function NodeMinimalEntry() {
    }
    return NodeMinimalEntry;
}());
exports.NodeMinimalEntry = NodeMinimalEntry;
var Pagination = (function () {
    function Pagination() {
    }
    return Pagination;
}());
exports.Pagination = Pagination;
var NodeMinimal = (function () {
    function NodeMinimal() {
        this.properties = {};
    }
    return NodeMinimal;
}());
exports.NodeMinimal = NodeMinimal;
var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
}());
exports.UserInfo = UserInfo;
var ContentInfo = (function () {
    function ContentInfo() {
    }
    return ContentInfo;
}());
exports.ContentInfo = ContentInfo;
var PathInfoEntity = (function () {
    function PathInfoEntity() {
    }
    return PathInfoEntity;
}());
exports.PathInfoEntity = PathInfoEntity;
var PathElementEntity = (function () {
    function PathElementEntity() {
    }
    return PathElementEntity;
}());
exports.PathElementEntity = PathElementEntity;


/***/ }),

/***/ 39:
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
var DocumentListService = DocumentListService_1 = (function () {
    function DocumentListService(authService, contentService, apiService, logService, thumbnailService) {
        this.contentService = contentService;
        this.apiService = apiService;
        this.logService = logService;
        this.thumbnailService = thumbnailService;
    }
    DocumentListService.prototype.getNodesPromise = function (folder, opts) {
        var rootNodeId = DocumentListService_1.ROOT_ID;
        if (opts && opts.rootFolderId) {
            rootNodeId = opts.rootFolderId;
        }
        var params = {
            includeSource: true,
            include: ['path', 'properties', 'allowableOperations']
        };
        if (folder) {
            params.relativePath = folder;
        }
        if (opts) {
            if (opts.maxItems) {
                params.maxItems = opts.maxItems;
            }
            if (opts.skipCount) {
                params.skipCount = opts.skipCount;
            }
        }
        return this.apiService.getInstance().nodes.getNodeChildren(rootNodeId, params);
    };
    DocumentListService.prototype.deleteNode = function (nodeId) {
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().nodes.deleteNode(nodeId));
    };
    DocumentListService.prototype.copyNode = function (nodeId, targetParentId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().nodes.copyNode(nodeId, { targetParentId: targetParentId }))
            .catch(function (err) { return _this.handleError(err); });
    };
    DocumentListService.prototype.moveNode = function (nodeId, targetParentId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().nodes.moveNode(nodeId, { targetParentId: targetParentId }))
            .catch(function (err) { return _this.handleError(err); });
    };
    DocumentListService.prototype.createFolder = function (name, parentId) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().nodes.createFolder(name, '/', parentId))
            .catch(function (err) { return _this.handleError(err); });
    };
    DocumentListService.prototype.getFolder = function (folder, opts) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.getNodesPromise(folder, opts))
            .map(function (res) { return res; })
            .catch(function (err) { return _this.handleError(err); });
    };
    DocumentListService.prototype.getFolderNode = function (nodeId) {
        var opts = {
            includeSource: true,
            include: ['path', 'properties', 'allowableOperations']
        };
        var nodes = this.apiService.getInstance().nodes;
        return nodes.getNodeInfo(nodeId, opts);
    };
    DocumentListService.prototype.getDocumentThumbnailUrl = function (node) {
        return this.thumbnailService.getDocumentThumbnailUrl(node);
    };
    DocumentListService.prototype.getMimeTypeIcon = function (mimeType) {
        return this.thumbnailService.getMimeTypeIcon(mimeType);
    };
    DocumentListService.prototype.getDefaultMimeTypeIcon = function () {
        return this.thumbnailService.getDefaultMimeTypeIcon();
    };
    DocumentListService.prototype.hasPermission = function (node, permission) {
        return this.contentService.hasPermission(node, permission);
    };
    DocumentListService.prototype.handleError = function (error) {
        this.logService.error(error);
        return Rx_1.Observable.throw(error || 'Server error');
    };
    return DocumentListService;
}());
DocumentListService.ROOT_ID = '-root-';
DocumentListService = DocumentListService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.AlfrescoAuthenticationService !== "undefined" && ng2_alfresco_core_1.AlfrescoAuthenticationService) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.AlfrescoContentService !== "undefined" && ng2_alfresco_core_1.AlfrescoContentService) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _c || Object, typeof (_d = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _d || Object, typeof (_e = typeof ng2_alfresco_core_1.ThumbnailService !== "undefined" && ng2_alfresco_core_1.ThumbnailService) === "function" && _e || Object])
], DocumentListService);
exports.DocumentListService = DocumentListService;
var DocumentListService_1, _a, _b, _c, _d, _e;


/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/empty_doc_lib.a89c064e4edfa54d2e347bf594947219.svg";

/***/ }),

/***/ 607:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"folderNode\" data-automation-id=\"breadcrumb\" class=\"adf-breadcrumb-container\">\n    <li *ngFor=\"let item of route; let last = last\"\n        [class.active]=\"last\"\n        [ngSwitch]=\"last\"\n        title=\"{{ item.name }}\"\n        class=\"adf-breadcrumb-item\">\n\n        <a *ngSwitchDefault href=\"#\" [attr.data-automation-id]=\"'breadcrumb_' + item.name\"\n           class=\"adf-breadcrumb-item-anchor\"\n           (click)=\"onRoutePathClick(item, $event)\">\n            {{ item.name }}\n        </a>\n\n        <div *ngSwitchCase=\"true\" class=\"adf-breadcrumb-item-current\">\n            {{ item.name }}\n        </div>\n\n        <i class=\"material-icons adf-breadcrumb-item-chevron\" *ngIf=\"!last\">\n            chevron_right\n        </i>\n    </li>\n</div>\n<div *ngIf=\"!folderNode && hasRoot\">\n    <li class=\"adf-breadcrumb-item\">\n        <div class=\"adf-breadcrumb-item-current\">\n            {{ root }}\n        </div>\n    </li>\n</div>\n";

/***/ }),

/***/ 608:
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"route.length > 0\">\n\n    <button\n        tabindex=\"0\"\n        class=\"adf-dropdown-breadcumb-trigger\"\n        (click)=\"open()\"\n        data-automation-id=\"dropdown-breadcrumb-trigger\">\n        <md-icon [class.isRoot]=\"!hasPreviousNodes()\">folder</md-icon>\n    </button>\n    <i class=\"material-icons adf-dropddown-breadcrumb-item-chevron\">chevron_right</i>\n\n    <md-select\n        *ngIf=\"hasPreviousNodes()\"\n        class=\"adf-dropdown-breadcrumb-path\"\n        tabindex=\"0\"\n        data-automation-id=\"dropdown-breadcrumb-path\" >\n\n        <md-option\n            *ngFor=\"let node of previousNodes;\"\n            (click)=\"onRoutePathClick(node, $event)\"\n            class=\"adf-dropdown-breadcrumb-path-option\"\n            tabindex=\"0\"\n            data-automation-class=\"dropdown-breadcrumb-path-option\">\n            {{ node.name }}\n        </md-option>\n    </md-select>\n\n    <span\n        class=\"adf-current-folder\"\n        [class.isRoot]=\"!hasPreviousNodes()\"\n        data-automation-id=\"current-folder\">{{ currentNode.name }}</span>\n</ng-container>";

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

module.exports = "<header mdDialogTitle\n    class=\"adf-content-node-selector-title\"\n    data-automation-id=\"content-node-selector-title\">{{title}}</header>\n\n<section mdDialogContent\n    class=\"adf-content-node-selector-content\"\n    (node-select)=\"onNodeSelect($event)\">\n\n    <md-input-container floatPlaceholder=\"never\" class=\"adf-content-node-selector-content-input\">\n        <input #searchInput\n            mdInput\n            placeholder=\"Search\"\n            (input)=\"search(searchInput.value)\"\n            [value]=\"searchTerm\"\n            data-automation-id=\"content-node-selector-search-input\">\n\n        <md-icon *ngIf=\"searchTerm.length > 0\"\n                mdSuffix (click)=\"clear()\"\n                class=\"adf-content-node-selector-content-input-icon\"\n                data-automation-id=\"content-node-selector-search-clear\">clear</md-icon>\n\n        <md-icon *ngIf=\"searchTerm.length === 0\"\n            mdSuffix\n            class=\"adf-content-node-selector-content-input-icon\"\n            data-automation-id=\"content-node-selector-search-icon\">search</md-icon>\n\n    </md-input-container>\n\n    <adf-sites-dropdown\n        (change)=\"siteChanged($event)\"\n        data-automation-id=\"content-node-selector-sites-combo\"></adf-sites-dropdown>\n\n    <adf-toolbar>\n        <adf-toolbar-title>\n            <adf-dropdown-breadcrumb *ngIf=\"needBreadcrumbs()\"\n                class=\"adf-content-node-selector-content-breadcrumb\"\n                [target]=\"documentList\"\n                [folderNode]=\"breadcrumbFolderNode\"\n                data-automation-id=\"content-node-selector-content-breadcrumb\">\n            </adf-dropdown-breadcrumb>\n        </adf-toolbar-title>\n    </adf-toolbar>\n\n    <div class=\"adf-content-node-selector-content-list\" data-automation-id=\"content-node-selector-content-list\">\n        <adf-document-list\n                    #documentList\n                    adf-highlight\n                    adf-highlight-selector=\".cell-value adf-datatable-cell\"\n                    [node]=\"nodes\"\n                    [rowFilter]=\"rowFilter\"\n                    [imageResolver]=\"imageResolver\"\n                    [currentFolderId]=\"folderIdToShow\"\n                    selectionMode=\"single\"\n                    [contextMenuActions]=\"false\"\n                    [contentActions]=\"false\"\n                    [allowDropFiles]=\"false\"\n                    [enablePagination]=\"!showingSearchResults\"\n                    (folderChange)=\"onFolderChange()\"\n                    (ready)=\"onFolderLoaded()\"\n                    data-automation-id=\"content-node-selector-document-list\">\n            <empty-folder-content>\n                <ng-template>\n                    <div>{{ 'NODE_SELECTOR.NO_RESULTS' | translate }}</div>\n                </ng-template>\n            </empty-folder-content>\n        </adf-document-list>\n    </div>\n\n</section>\n\n<footer mdDialogActions class=\"adf-content-node-selector-actions\">\n\n    <button *ngIf=\"inDialog\"\n        md-button\n        class=\"adf-content-node-selector-actions-cancel\"\n        (click)=\"close()\"\n        data-automation-id=\"content-node-selector-actions-cancel\">{{ 'NODE_SELECTOR.CANCEL' | translate }}\n    </button>\n\n    <button md-button\n        [disabled]=\"!chosenNode\"\n        class=\"adf-content-node-selector-actions-choose\"\n        (click)=\"choose()\"\n        data-automation-id=\"content-node-selector-actions-choose\">{{ 'NODE_SELECTOR.CHOOSE' | translate }}\n    </button>\n\n</footer>\n";

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

module.exports = "<adf-datatable\n    [selectionMode]=\"selectionMode\"\n    [data]=\"data\"\n    [actions]=\"contentActions\"\n    [actionsPosition]=\"contentActionsPosition\"\n    [multiselect]=\"multiselect\"\n    [allowDropFiles]=\"allowDropFiles\"\n    [contextMenu]=\"contextMenuActions\"\n    [rowStyle]=\"rowStyle\"\n    [rowStyleClass]=\"rowStyleClass\"\n    [loading]=\"loading\"\n    [showHeader]=\"!isEmpty()\"\n    (showRowContextMenu)=\"onShowRowContextMenu($event)\"\n    (showRowActionsMenu)=\"onShowRowActionsMenu($event)\"\n    (executeRowAction)=\"onExecuteRowAction($event)\"\n    (rowClick)=\"onNodeClick($event.value?.node)\"\n    (rowDblClick)=\"onNodeDblClick($event.value?.node)\"\n    (row-select)=\"onNodeSelect($event.detail)\"\n    (row-unselect)=\"onNodeUnselect($event.detail)\">\n\n    <div *ngIf=\"!isEmptyTemplateDefined()\">\n        <no-content-template>\n            <ng-template>\n                <adf-empty-list>\n                    <div class=\"adf-empty-list_template adf-empty-folder\">\n                        <div class=\"adf-empty-folder-this-space-is-empty\">{{'ADF-DOCUMENT-LIST.EMPTY.HEADER' | translate}}</div>\n                        <div class=\"adf-empty-folder-drag-drop\">{{ 'ADF-DATATABLE.EMPTY.DRAG-AND-DROP.TITLE' | translate }}</div>\n                        <div class=\"adf-empty-folder-any-files-here-to-add\">{{ 'ADF-DATATABLE.EMPTY.DRAG-AND-DROP.SUBTITLE' | translate }}</div>\n                        <img class=\"adf-empty-folder-image\" [src]=\"emptyFolderImageUrl\">\n                    </div>\n                    <!-- <div adf-empty-list-header class=\"adf-empty-list-header\"> {{'ADF-DOCUMENT-LIST.EMPTY.HEADER' | translate}} </div> -->\n                </adf-empty-list>\n            </ng-template>\n        </no-content-template>\n    </div>\n\n    <div>\n        <loading-content-template>\n            <ng-template>\n                <div class=\"adf-document-list-loading-container\">\n                    <md-progress-spinner\n                        id=\"adf-document-list-loading\"\n                        class=\"adf-document-list-loading-margin\"\n                        [color]=\"'primary'\"\n                        [mode]=\"'indeterminate'\">\n                    </md-progress-spinner>\n                </div>\n            </ng-template>\n        </loading-content-template>\n    </div>\n</adf-datatable>\n\n<adf-pagination\n    *ngIf=\"isPaginationEnabled()\"\n    class=\"adf-documentlist-pagination\"\n    (changePageSize)=\"onChangePageSize($event)\"\n    (nextPage)=\"onNextPage($event)\"\n    (prevPage)=\"onPrevPage($event)\"\n    [pagination]=\"pagination\"\n    [supportedPageSizes]=\"[5, 10, 15, 20]\">\n</adf-pagination>\n";

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

module.exports = "<div id=\"site-dropdown-container\" class=\"adf-site-dropdown-container\">\n    <md-select class=\"adf-site-dropdown-list-element\" id=\"site-dropdown\"\n        placeholder=\"{{'DROPDOWN.PLACEHOLDER_LABEL' | translate}}\"\n        floatPlaceholder=\"never\"\n        [(ngModel)]=\"siteSelected\"\n        (ngModelChange)=\"selectedSite()\">\n        <md-option id=\"default_site_option\" [value]=\"DEFAULT_VALUE\">{{'DROPDOWN.DEFAULT_OPTION' | translate}}</md-option>\n        <md-option *ngFor=\"let site of siteList\" [value]=\"site.guid\">\n            {{ site.title }}\n        </md-option>\n    </md-select>\n</div>\n";

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = ".adf-site-dropdown-list-element {\n  width: 300px; }\n"

/***/ }),

/***/ 76:
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
var Rx_1 = __webpack_require__(2);
var content_node_selector_component_1 = __webpack_require__(210);
var document_list_service_1 = __webpack_require__(39);
var NodeActionsService = (function () {
    function NodeActionsService(dialog, documentListService, contentService) {
        this.dialog = dialog;
        this.documentListService = documentListService;
        this.contentService = contentService;
    }
    NodeActionsService.prototype.copyContent = function (contentEntry, permission) {
        return this.doFileOperation('copy', 'content', contentEntry, permission);
    };
    NodeActionsService.prototype.copyFolder = function (contentEntry, permission) {
        return this.doFileOperation('copy', 'folder', contentEntry, permission);
    };
    NodeActionsService.prototype.moveContent = function (contentEntry, permission) {
        return this.doFileOperation('move', 'content', contentEntry, permission);
    };
    NodeActionsService.prototype.moveFolder = function (contentEntry, permission) {
        return this.doFileOperation('move', 'folder', contentEntry, permission);
    };
    NodeActionsService.prototype.doFileOperation = function (action, type, contentEntry, permission) {
        var _this = this;
        var observable = new Rx_1.Subject();
        if (this.contentService.hasPermission(contentEntry, permission)) {
            var data = {
                title: action + " " + contentEntry.name + " to ...",
                currentFolderId: contentEntry.parentId,
                rowFilter: this.rowFilter.bind(this, contentEntry.id),
                imageResolver: this.imageResolver.bind(this),
                select: new core_1.EventEmitter()
            };
            this.dialog.open(content_node_selector_component_1.ContentNodeSelectorComponent, { data: data, panelClass: 'adf-content-node-selector-dialog', width: '630px' });
            data.select.subscribe(function (selections) {
                var selection = selections[0];
                _this.documentListService[action + "Node"].call(_this.documentListService, contentEntry.id, selection.id)
                    .subscribe(observable.next.bind(observable, "OPERATION.SUCCES." + type.toUpperCase() + "." + action.toUpperCase()), observable.error.bind(observable));
                _this.dialog.closeAll();
            });
            return observable;
        }
        else {
            observable.error(new Error(JSON.stringify({ error: { statusCode: 403 } })));
            return observable;
        }
    };
    NodeActionsService.prototype.rowFilter = function (currentNodeId, row) {
        var node = row.node.entry;
        if (node.id === currentNodeId || node.isFile) {
            return false;
        }
        else {
            return true;
        }
    };
    NodeActionsService.prototype.imageResolver = function (row, col) {
        var entry = row.node.entry;
        if (!this.contentService.hasPermission(entry, 'update')) {
            return this.documentListService.getMimeTypeIcon('disable/folder');
        }
        return null;
    };
    return NodeActionsService;
}());
NodeActionsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof material_1.MdDialog !== "undefined" && material_1.MdDialog) === "function" && _a || Object, typeof (_b = typeof document_list_service_1.DocumentListService !== "undefined" && document_list_service_1.DocumentListService) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.AlfrescoContentService !== "undefined" && ng2_alfresco_core_1.AlfrescoContentService) === "function" && _c || Object])
], NodeActionsService);
exports.NodeActionsService = NodeActionsService;
var _a, _b, _c;


/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(694);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(695);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(696);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(697);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(698);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 823:
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
var breadcrumb_component_1 = __webpack_require__(95);
var dropdown_breadcrumb_component_1 = __webpack_require__(372);
var content_action_list_component_1 = __webpack_require__(96);
var content_action_component_1 = __webpack_require__(163);
var content_column_list_component_1 = __webpack_require__(97);
var content_column_component_1 = __webpack_require__(164);
var content_node_selector_component_1 = __webpack_require__(210);
var document_list_component_1 = __webpack_require__(28);
var empty_folder_content_directive_1 = __webpack_require__(165);
var sites_dropdown_component_1 = __webpack_require__(166);
var material_module_1 = __webpack_require__(373);
var document_actions_service_1 = __webpack_require__(98);
var document_list_service_1 = __webpack_require__(39);
var folder_actions_service_1 = __webpack_require__(99);
var node_actions_service_1 = __webpack_require__(76);
__export(__webpack_require__(28));
__export(__webpack_require__(211));
__export(__webpack_require__(164));
__export(__webpack_require__(97));
__export(__webpack_require__(163));
__export(__webpack_require__(96));
__export(__webpack_require__(165));
__export(__webpack_require__(95));
__export(__webpack_require__(166));
__export(__webpack_require__(116));
__export(__webpack_require__(99));
__export(__webpack_require__(98));
__export(__webpack_require__(39));
__export(__webpack_require__(76));
__export(__webpack_require__(117));
__export(__webpack_require__(374));
__export(__webpack_require__(118));
__export(__webpack_require__(167));
__export(__webpack_require__(167));
exports.DOCUMENT_LIST_DIRECTIVES = [
    document_list_component_1.DocumentListComponent,
    content_column_component_1.ContentColumnComponent,
    content_column_list_component_1.ContentColumnListComponent,
    content_action_component_1.ContentActionComponent,
    content_action_list_component_1.ContentActionListComponent,
    empty_folder_content_directive_1.EmptyFolderContentDirective,
    breadcrumb_component_1.BreadcrumbComponent,
    sites_dropdown_component_1.DropdownSitesComponent,
    dropdown_breadcrumb_component_1.DropdownBreadcrumbComponent,
    content_node_selector_component_1.ContentNodeSelectorComponent
];
exports.DOCUMENT_LIST_PROVIDERS = [
    document_list_service_1.DocumentListService,
    folder_actions_service_1.FolderActionsService,
    document_actions_service_1.DocumentActionsService,
    node_actions_service_1.NodeActionsService
];
var DocumentListModule = DocumentListModule_1 = (function () {
    function DocumentListModule() {
    }
    DocumentListModule.forRoot = function () {
        console.log('DocumentListModule.forRoot is deprecated and will be removed in future versions');
        return {
            ngModule: DocumentListModule_1,
            providers: exports.DOCUMENT_LIST_PROVIDERS.slice()
        };
    };
    return DocumentListModule;
}());
DocumentListModule = DocumentListModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            ng2_alfresco_core_1.CoreModule,
            ng2_alfresco_datatable_1.DataTableModule,
            material_module_1.MaterialModule
        ],
        declarations: exports.DOCUMENT_LIST_DIRECTIVES.slice(),
        providers: exports.DOCUMENT_LIST_PROVIDERS.concat([
            {
                provide: ng2_alfresco_core_1.TRANSLATION_PROVIDER,
                multi: true,
                useValue: {
                    name: 'ng2-alfresco-documentlist',
                    source: 'assets/ng2-alfresco-documentlist'
                }
            }
        ]),
        entryComponents: [
            content_node_selector_component_1.ContentNodeSelectorComponent
        ],
        exports: [
            ng2_alfresco_datatable_1.DataTableModule
        ].concat(exports.DOCUMENT_LIST_DIRECTIVES, [
            material_module_1.MaterialModule
        ])
    })
], DocumentListModule);
exports.DocumentListModule = DocumentListModule;
var DocumentListModule_1;


/***/ }),

/***/ 83:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_83__;

/***/ }),

/***/ 95:
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
var document_list_component_1 = __webpack_require__(28);
var BreadcrumbComponent = (function () {
    function BreadcrumbComponent() {
        this.route = [];
        this.navigate = new core_1.EventEmitter();
    }
    Object.defineProperty(BreadcrumbComponent.prototype, "hasRoot", {
        get: function () {
            return !!this.root;
        },
        enumerable: true,
        configurable: true
    });
    BreadcrumbComponent.prototype.ngOnChanges = function (changes) {
        if (changes.folderNode) {
            var node = changes.folderNode.currentValue;
            if (node && node.path) {
                var route = (node.path.elements || []).slice();
                route.push({
                    id: node.id,
                    name: node.name
                });
                if (this.root && route.length > 0) {
                    route[0].name = this.root;
                }
                this.route = route;
            }
        }
    };
    BreadcrumbComponent.prototype.onRoutePathClick = function (route, event) {
        if (event) {
            event.preventDefault();
        }
        if (route) {
            this.navigate.emit(route);
            if (this.target) {
                this.target.loadFolderByNodeId(route.id);
            }
        }
    };
    return BreadcrumbComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof alfresco_js_api_1.MinimalNodeEntryEntity !== "undefined" && alfresco_js_api_1.MinimalNodeEntryEntity) === "function" && _a || Object)
], BreadcrumbComponent.prototype, "folderNode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BreadcrumbComponent.prototype, "root", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof document_list_component_1.DocumentListComponent !== "undefined" && document_list_component_1.DocumentListComponent) === "function" && _b || Object)
], BreadcrumbComponent.prototype, "target", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], BreadcrumbComponent.prototype, "navigate", void 0);
BreadcrumbComponent = __decorate([
    core_1.Component({
        selector: 'adf-breadcrumb, alfresco-document-list-breadcrumb',
        template: __webpack_require__(607),
        styles: [__webpack_require__(777)],
        encapsulation: core_1.ViewEncapsulation.None,
        host: {
            'class': 'adf-breadcrumb'
        }
    })
], BreadcrumbComponent);
exports.BreadcrumbComponent = BreadcrumbComponent;
var _a, _b, _c;


/***/ }),

/***/ 96:
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
var document_list_component_1 = __webpack_require__(28);
var ContentActionListComponent = (function () {
    function ContentActionListComponent(documentList) {
        this.documentList = documentList;
    }
    ContentActionListComponent.prototype.registerAction = function (action) {
        if (this.documentList && action) {
            this.documentList.actions.push(action);
            return true;
        }
        return false;
    };
    return ContentActionListComponent;
}());
ContentActionListComponent = __decorate([
    core_1.Component({
        selector: 'content-actions',
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof document_list_component_1.DocumentListComponent !== "undefined" && document_list_component_1.DocumentListComponent) === "function" && _a || Object])
], ContentActionListComponent);
exports.ContentActionListComponent = ContentActionListComponent;
var _a;


/***/ }),

/***/ 97:
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
var document_list_component_1 = __webpack_require__(28);
var ContentColumnListComponent = (function () {
    function ContentColumnListComponent(documentList) {
        this.documentList = documentList;
        console.log('ContentColumnListComponent is deprecated starting with 1.7.0 and may be removed in future versions. Use DataColumnListComponent instead.');
    }
    ContentColumnListComponent.prototype.registerColumn = function (column) {
        if (this.documentList && column) {
            var columns = this.documentList.data.getColumns();
            columns.push(column);
            return true;
        }
        return false;
    };
    return ContentColumnListComponent;
}());
ContentColumnListComponent = __decorate([
    core_1.Component({
        selector: 'content-columns',
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof document_list_component_1.DocumentListComponent !== "undefined" && document_list_component_1.DocumentListComponent) === "function" && _a || Object])
], ContentColumnListComponent);
exports.ContentColumnListComponent = ContentColumnListComponent;
var _a;


/***/ }),

/***/ 98:
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
var Observable_1 = __webpack_require__(23);
var Rx_1 = __webpack_require__(2);
var permissions_model_1 = __webpack_require__(118);
var document_list_service_1 = __webpack_require__(39);
var node_actions_service_1 = __webpack_require__(76);
var DocumentActionsService = (function () {
    function DocumentActionsService(nodeActionsService, documentListService, contentService) {
        this.nodeActionsService = nodeActionsService;
        this.documentListService = documentListService;
        this.contentService = contentService;
        this.permissionEvent = new Rx_1.Subject();
        this.error = new Rx_1.Subject();
        this.success = new Rx_1.Subject();
        this.handlers = {};
        this.setupActionHandlers();
    }
    DocumentActionsService.prototype.getHandler = function (key) {
        if (key) {
            var lkey = key.toLowerCase();
            return this.handlers[lkey] || null;
        }
        return null;
    };
    DocumentActionsService.prototype.setHandler = function (key, handler) {
        if (key) {
            var lkey = key.toLowerCase();
            this.handlers[lkey] = handler;
            return true;
        }
        return false;
    };
    DocumentActionsService.prototype.canExecuteAction = function (obj) {
        return this.documentListService && obj && obj.entry.isFile === true;
    };
    DocumentActionsService.prototype.setupActionHandlers = function () {
        this.handlers['download'] = this.download.bind(this);
        this.handlers['copy'] = this.copyNode.bind(this);
        this.handlers['move'] = this.moveNode.bind(this);
        this.handlers['delete'] = this.deleteNode.bind(this);
    };
    DocumentActionsService.prototype.download = function (obj) {
        if (this.canExecuteAction(obj) && this.contentService) {
            var link = document.createElement('a');
            document.body.appendChild(link);
            link.setAttribute('download', 'download');
            link.href = this.contentService.getContentUrl(obj);
            link.click();
            document.body.removeChild(link);
            return Observable_1.Observable.of(true);
        }
        return Observable_1.Observable.of(false);
    };
    DocumentActionsService.prototype.copyNode = function (obj, target, permission) {
        var actionObservable = this.nodeActionsService.copyContent(obj.entry, permission);
        this.prepareHandlers(actionObservable, 'content', 'copy', target, permission);
        return actionObservable;
    };
    DocumentActionsService.prototype.moveNode = function (obj, target, permission) {
        var actionObservable = this.nodeActionsService.moveContent(obj.entry, permission);
        this.prepareHandlers(actionObservable, 'content', 'move', target, permission);
        return actionObservable;
    };
    DocumentActionsService.prototype.prepareHandlers = function (actionObservable, type, action, target, permission) {
        var _this = this;
        actionObservable.subscribe(function (fileOperationMessage) {
            if (target && typeof target.reload === 'function') {
                target.reload();
            }
            _this.success.next(fileOperationMessage);
        }, this.error.next.bind(this.error));
    };
    DocumentActionsService.prototype.deleteNode = function (obj, target, permission) {
        var _this = this;
        var handlerObservable;
        if (this.canExecuteAction(obj)) {
            if (this.contentService.hasPermission(obj.entry, permission)) {
                handlerObservable = this.documentListService.deleteNode(obj.entry.id);
                handlerObservable.subscribe(function () {
                    if (target && typeof target.reload === 'function') {
                        target.reload();
                    }
                    _this.success.next(obj.entry.id);
                });
                return handlerObservable;
            }
            else {
                this.permissionEvent.next(new permissions_model_1.PermissionModel({ type: 'content', action: 'delete', permission: permission }));
                return Observable_1.Observable.throw(new Error('No permission to delete'));
            }
        }
    };
    return DocumentActionsService;
}());
DocumentActionsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof node_actions_service_1.NodeActionsService !== "undefined" && node_actions_service_1.NodeActionsService) === "function" && _a || Object, typeof (_b = typeof document_list_service_1.DocumentListService !== "undefined" && document_list_service_1.DocumentListService) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.AlfrescoContentService !== "undefined" && ng2_alfresco_core_1.AlfrescoContentService) === "function" && _c || Object])
], DocumentActionsService);
exports.DocumentActionsService = DocumentActionsService;
var _a, _b, _c;


/***/ }),

/***/ 99:
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
var permissions_model_1 = __webpack_require__(118);
var document_list_service_1 = __webpack_require__(39);
var node_actions_service_1 = __webpack_require__(76);
var FolderActionsService = (function () {
    function FolderActionsService(nodeActionsService, documentListService, contentService) {
        this.nodeActionsService = nodeActionsService;
        this.documentListService = documentListService;
        this.contentService = contentService;
        this.permissionEvent = new Rx_1.Subject();
        this.error = new Rx_1.Subject();
        this.success = new Rx_1.Subject();
        this.handlers = {};
        this.setupActionHandlers();
    }
    FolderActionsService.prototype.getHandler = function (key) {
        if (key) {
            var lkey = key.toLowerCase();
            return this.handlers[lkey] || null;
        }
        return null;
    };
    FolderActionsService.prototype.setHandler = function (key, handler) {
        if (key) {
            var lkey = key.toLowerCase();
            this.handlers[lkey] = handler;
            return true;
        }
        return false;
    };
    FolderActionsService.prototype.canExecuteAction = function (obj) {
        return this.documentListService && obj && obj.entry.isFolder === true;
    };
    FolderActionsService.prototype.setupActionHandlers = function () {
        this.handlers['copy'] = this.copyNode.bind(this);
        this.handlers['move'] = this.moveNode.bind(this);
        this.handlers['delete'] = this.deleteNode.bind(this);
    };
    FolderActionsService.prototype.copyNode = function (obj, target, permission) {
        var actionObservable = this.nodeActionsService.copyFolder(obj.entry, permission);
        this.prepareHandlers(actionObservable, 'folder', 'copy', target, permission);
        return actionObservable;
    };
    FolderActionsService.prototype.moveNode = function (obj, target, permission) {
        var actionObservable = this.nodeActionsService.moveFolder(obj.entry, permission);
        this.prepareHandlers(actionObservable, 'folder', 'move', target, permission);
        return actionObservable;
    };
    FolderActionsService.prototype.prepareHandlers = function (actionObservable, type, action, target, permission) {
        var _this = this;
        actionObservable.subscribe(function (fileOperationMessage) {
            if (target && typeof target.reload === 'function') {
                target.reload();
            }
            _this.success.next(fileOperationMessage);
        }, this.error.next.bind(this.error));
    };
    FolderActionsService.prototype.deleteNode = function (obj, target, permission) {
        var _this = this;
        var handlerObservable;
        if (this.canExecuteAction(obj)) {
            if (this.contentService.hasPermission(obj.entry, permission)) {
                handlerObservable = this.documentListService.deleteNode(obj.entry.id);
                handlerObservable.subscribe(function () {
                    if (target && typeof target.reload === 'function') {
                        target.reload();
                    }
                    _this.success.next(obj.entry.id);
                });
                return handlerObservable;
            }
            else {
                this.permissionEvent.next(new permissions_model_1.PermissionModel({ type: 'folder', action: 'delete', permission: permission }));
                return Rx_1.Observable.throw(new Error('No permission to delete'));
            }
        }
    };
    return FolderActionsService;
}());
FolderActionsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof node_actions_service_1.NodeActionsService !== "undefined" && node_actions_service_1.NodeActionsService) === "function" && _a || Object, typeof (_b = typeof document_list_service_1.DocumentListService !== "undefined" && document_list_service_1.DocumentListService) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.AlfrescoContentService !== "undefined" && ng2_alfresco_core_1.AlfrescoContentService) === "function" && _c || Object])
], FolderActionsService);
exports.FolderActionsService = FolderActionsService;
var _a, _b, _c;


/***/ })

/******/ });
});
//# sourceMappingURL=ng2-alfresco-documentlist.js.map