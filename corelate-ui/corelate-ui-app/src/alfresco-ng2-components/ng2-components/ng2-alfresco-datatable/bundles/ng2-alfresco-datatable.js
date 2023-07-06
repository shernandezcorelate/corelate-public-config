/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
		module.exports = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("@angular/material"), require("@angular/common"), require("@angular/router"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "ng2-alfresco-core", "rxjs/Rx", "@angular/material", "@angular/common", "@angular/router"], factory);
	else if(typeof exports === 'object')
		exports["ng2-alfresco-datatable"] = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("@angular/material"), require("@angular/common"), require("@angular/router"));
	else
		root["ng2-alfresco-datatable"] = factory(root["@angular/core"], root["ng2-alfresco-core"], root["rxjs/Rx"], root["@angular/material"], root["@angular/common"], root["@angular/router"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_37__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 822);
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

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DataSorting = (function () {
    function DataSorting(key, direction) {
        this.key = key;
        this.direction = direction;
    }
    return DataSorting;
}());
exports.DataSorting = DataSorting;
var DataRowEvent = (function (_super) {
    __extends(DataRowEvent, _super);
    function DataRowEvent(value, domEvent, sender) {
        var _this = _super.call(this) || this;
        _this.value = value;
        _this.event = domEvent;
        _this.sender = sender;
        return _this;
    }
    return DataRowEvent;
}(ng2_alfresco_core_1.BaseUIEvent));
exports.DataRowEvent = DataRowEvent;


/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var EmptyListComponent = (function () {
    function EmptyListComponent() {
    }
    return EmptyListComponent;
}());
EmptyListComponent = __decorate([
    core_1.Component({
        selector: 'adf-empty-list',
        styles: [__webpack_require__(776)],
        template: __webpack_require__(606)
    })
], EmptyListComponent);
exports.EmptyListComponent = EmptyListComponent;
var EmptyListHeaderDirective = (function () {
    function EmptyListHeaderDirective() {
    }
    return EmptyListHeaderDirective;
}());
EmptyListHeaderDirective = __decorate([
    core_1.Directive({ selector: '[adf-empty-list-header]' })
], EmptyListHeaderDirective);
exports.EmptyListHeaderDirective = EmptyListHeaderDirective;
var EmptyListBodyDirective = (function () {
    function EmptyListBodyDirective() {
    }
    return EmptyListBodyDirective;
}());
EmptyListBodyDirective = __decorate([
    core_1.Directive({ selector: '[adf-empty-list-body]' })
], EmptyListBodyDirective);
exports.EmptyListBodyDirective = EmptyListBodyDirective;
var EmptyListFooterDirective = (function () {
    function EmptyListFooterDirective() {
    }
    return EmptyListFooterDirective;
}());
EmptyListFooterDirective = __decorate([
    core_1.Directive({ selector: '[adf-empty-list-footer]' })
], EmptyListFooterDirective);
exports.EmptyListFooterDirective = EmptyListFooterDirective;


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DataCellEvent = (function (_super) {
    __extends(DataCellEvent, _super);
    function DataCellEvent(row, col, actions) {
        var _this = _super.call(this) || this;
        _this.value = new DataCellEventModel(row, col, actions);
        return _this;
    }
    return DataCellEvent;
}(ng2_alfresco_core_1.BaseEvent));
exports.DataCellEvent = DataCellEvent;
var DataCellEventModel = (function () {
    function DataCellEventModel(row, col, actions) {
        this.row = row;
        this.col = col;
        this.actions = actions || [];
    }
    return DataCellEventModel;
}());
exports.DataCellEventModel = DataCellEventModel;


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DataRowActionEvent = (function (_super) {
    __extends(DataRowActionEvent, _super);
    function DataRowActionEvent(row, action) {
        var _this = _super.call(this) || this;
        _this.value = new DataRowActionModel(row, action);
        return _this;
    }
    Object.defineProperty(DataRowActionEvent.prototype, "args", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    return DataRowActionEvent;
}(ng2_alfresco_core_1.BaseEvent));
exports.DataRowActionEvent = DataRowActionEvent;
var DataRowActionModel = (function () {
    function DataRowActionModel(row, action) {
        this.row = row;
        this.action = action;
    }
    return DataRowActionModel;
}());
exports.DataRowActionModel = DataRowActionModel;


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var datatable_adapter_1 = __webpack_require__(109);
var ObjectDataTableAdapter = (function () {
    function ObjectDataTableAdapter(data, schema) {
        if (data === void 0) { data = []; }
        if (schema === void 0) { schema = []; }
        this._rows = [];
        this._columns = [];
        if (data && data.length > 0) {
            this._rows = data.map(function (item) {
                return new ObjectDataRow(item);
            });
        }
        if (schema && schema.length > 0) {
            this._columns = schema.map(function (item) {
                return new ObjectDataColumn(item);
            });
            var sortable = this._columns.filter(function (c) { return c.sortable; });
            if (sortable.length > 0) {
                this.sort(sortable[0].key, 'asc');
            }
        }
    }
    ObjectDataTableAdapter.generateSchema = function (data) {
        var schema = [];
        if (data && data.length) {
            var rowToExaminate = data[0];
            if (typeof rowToExaminate === 'object') {
                for (var key in rowToExaminate) {
                    if (rowToExaminate.hasOwnProperty(key)) {
                        schema.push({
                            type: 'text',
                            key: key,
                            title: key,
                            sortable: false
                        });
                    }
                }
            }
        }
        return schema;
    };
    ObjectDataTableAdapter.prototype.getRows = function () {
        return this._rows;
    };
    ObjectDataTableAdapter.prototype.setRows = function (rows) {
        this._rows = rows || [];
        this.sort();
    };
    ObjectDataTableAdapter.prototype.getColumns = function () {
        return this._columns;
    };
    ObjectDataTableAdapter.prototype.setColumns = function (columns) {
        this._columns = columns || [];
    };
    ObjectDataTableAdapter.prototype.getValue = function (row, col) {
        if (!row) {
            throw new Error('Row not found');
        }
        if (!col) {
            throw new Error('Column not found');
        }
        var value = row.getValue(col.key);
        if (col.type === 'date') {
            try {
                return this.formatDate(col, value);
            }
            catch (err) {
                console.error("Error parsing date " + value + " to format " + col.format);
            }
        }
        if (col.type === 'icon') {
            var icon = row.getValue(col.key);
            return icon;
        }
        return value;
    };
    ObjectDataTableAdapter.prototype.formatDate = function (col, value) {
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
    ObjectDataTableAdapter.prototype.getSorting = function () {
        return this._sorting;
    };
    ObjectDataTableAdapter.prototype.setSorting = function (sorting) {
        this._sorting = sorting;
        if (sorting && sorting.key) {
            this._rows.sort(function (a, b) {
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
    ObjectDataTableAdapter.prototype.sort = function (key, direction) {
        var sorting = this._sorting || new datatable_adapter_1.DataSorting();
        if (key) {
            sorting.key = key;
            sorting.direction = direction || 'asc';
        }
        this.setSorting(sorting);
    };
    return ObjectDataTableAdapter;
}());
exports.ObjectDataTableAdapter = ObjectDataTableAdapter;
var ObjectDataRow = (function () {
    function ObjectDataRow(obj, isSelected) {
        if (isSelected === void 0) { isSelected = false; }
        this.obj = obj;
        this.isSelected = isSelected;
        if (!obj) {
            throw new Error('Object source not found');
        }
    }
    ObjectDataRow.prototype.getValue = function (key) {
        return ng2_alfresco_core_1.ObjectUtils.getValue(this.obj, key);
    };
    ObjectDataRow.prototype.hasValue = function (key) {
        return this.getValue(key) !== undefined;
    };
    return ObjectDataRow;
}());
exports.ObjectDataRow = ObjectDataRow;
var ObjectDataColumn = (function () {
    function ObjectDataColumn(obj) {
        this.key = obj.key;
        this.type = obj.type || 'text';
        this.format = obj.format;
        this.sortable = obj.sortable;
        this.title = obj.title;
        this.srTitle = obj.srTitle;
        this.cssClass = obj.cssClass;
        this.template = obj.template;
    }
    return ObjectDataColumn;
}());
exports.ObjectDataColumn = ObjectDataColumn;


/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var datatable_cell_component_1 = __webpack_require__(94);
var LocationCellComponent = (function (_super) {
    __extends(LocationCellComponent, _super);
    function LocationCellComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tooltip = '';
        _this.displayText = '';
        return _this;
    }
    LocationCellComponent.prototype.ngOnInit = function () {
        if (!this.value && this.column && this.column.key && this.row && this.data) {
            var path = this.data.getValue(this.row, this.column);
            if (path) {
                this.value = path;
                this.displayText = path.name.split('/').pop();
                this.tooltip = path.name;
                var parent = path.elements[path.elements.length - 1];
                this.link = [this.column.format, parent.id];
            }
        }
    };
    return LocationCellComponent;
}(datatable_cell_component_1.DataTableCellComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LocationCellComponent.prototype, "tooltip", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], LocationCellComponent.prototype, "link", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LocationCellComponent.prototype, "displayText", void 0);
LocationCellComponent = __decorate([
    core_1.Component({
        selector: 'adf-location-cell',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        template: "\n        <ng-container>\n            <a href=\"\" [title]=\"tooltip\" [routerLink]=\"link\">\n                {{ displayText }}\n            </a>\n        </ng-container>\n    ",
        encapsulation: core_1.ViewEncapsulation.None,
        host: { class: 'adf-location-cell' }
    })
], LocationCellComponent);
exports.LocationCellComponent = LocationCellComponent;


/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var datatable_adapter_1 = __webpack_require__(109);
exports.DataColumn = datatable_adapter_1.DataColumn;
exports.DataRow = datatable_adapter_1.DataRow;
exports.DataRowEvent = datatable_adapter_1.DataRowEvent;
exports.DataSorting = datatable_adapter_1.DataSorting;
exports.DataTableAdapter = datatable_adapter_1.DataTableAdapter;
var object_datatable_adapter_1 = __webpack_require__(346);
exports.ObjectDataColumn = object_datatable_adapter_1.ObjectDataColumn;
exports.ObjectDataRow = object_datatable_adapter_1.ObjectDataRow;
exports.ObjectDataTableAdapter = object_datatable_adapter_1.ObjectDataTableAdapter;


/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var datatable_component_1 = __webpack_require__(75);
var LoadingContentTemplateDirective = (function () {
    function LoadingContentTemplateDirective(dataTable) {
        this.dataTable = dataTable;
    }
    LoadingContentTemplateDirective.prototype.ngAfterContentInit = function () {
        if (this.dataTable) {
            this.dataTable.loadingTemplate = this.template;
        }
    };
    return LoadingContentTemplateDirective;
}());
__decorate([
    core_1.ContentChild(core_1.TemplateRef),
    __metadata("design:type", Object)
], LoadingContentTemplateDirective.prototype, "template", void 0);
LoadingContentTemplateDirective = __decorate([
    core_1.Directive({
        selector: 'loading-content-template'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof datatable_component_1.DataTableComponent !== "undefined" && datatable_component_1.DataTableComponent) === "function" && _a || Object])
], LoadingContentTemplateDirective);
exports.LoadingContentTemplateDirective = LoadingContentTemplateDirective;
var _a;


/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var datatable_component_1 = __webpack_require__(75);
var NoContentTemplateDirective = (function () {
    function NoContentTemplateDirective(dataTable) {
        this.dataTable = dataTable;
    }
    NoContentTemplateDirective.prototype.ngAfterContentInit = function () {
        if (this.dataTable) {
            this.dataTable.noContentTemplate = this.template;
        }
    };
    return NoContentTemplateDirective;
}());
__decorate([
    core_1.ContentChild(core_1.TemplateRef),
    __metadata("design:type", Object)
], NoContentTemplateDirective.prototype, "template", void 0);
NoContentTemplateDirective = __decorate([
    core_1.Directive({
        selector: 'no-content-template'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof datatable_component_1.DataTableComponent !== "undefined" && datatable_component_1.DataTableComponent) === "function" && _a || Object])
], NoContentTemplateDirective);
exports.NoContentTemplateDirective = NoContentTemplateDirective;
var _a;


/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
        material_1.MdCheckboxModule,
        material_1.MdMenuModule,
        material_1.MdIconModule,
        material_1.MdButtonModule,
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

/***/ 605:
/***/ (function(module, exports) {

module.exports = "<table\n    *ngIf=\"data\"\n    class=\"full-width adf-data-table\">\n\n    <thead *ngIf=\"showHeader\">\n    <tr>\n        <!-- Actions (left) -->\n        <th *ngIf=\"actions && actionsPosition === 'left'\" class=\"actions-column\">\n            <span class=\"sr-only\">Actions</span>\n        </th>\n        <!-- Columns -->\n        <th *ngIf=\"multiselect\">\n            <md-checkbox [checked]=\"isSelectAllChecked\" (change)=\"onSelectAllClick($event)\"></md-checkbox>\n        </th>\n        <th class=\"adf-data-table-cell--{{col.type || 'text'}} {{col.cssClass}}\"\n            *ngFor=\"let col of data.getColumns()\"\n            [class.sortable]=\"col.sortable\"\n            [attr.data-automation-id]=\"'auto_id_' + col.key\"\n            [class.adf-data-table__header--sorted-asc]=\"isColumnSorted(col, 'asc')\"\n            [class.adf-data-table__header--sorted-desc]=\"isColumnSorted(col, 'desc')\"\n            (click)=\"onColumnHeaderClick(col)\"\n            (keyup.enter)=\"onColumnHeaderClick(col)\"\n            role=\"button\"\n            tabindex=\"0\"\n            title=\"{{ col.title }}\">\n            <span *ngIf=\"col.srTitle\" class=\"sr-only\">{{ col.srTitle | translate }}</span>\n            <span *ngIf=\"col.title\">{{ col.title | translate}}</span>\n        </th>\n        <!-- Actions (right) -->\n        <th *ngIf=\"actions && actionsPosition === 'right'\" class=\"actions-column\">\n            <span class=\"sr-only\">Actions</span>\n        </th>\n    </tr>\n    </thead>\n\n    <tbody>\n    <ng-container *ngIf=\"!loading\">\n        <tr *ngFor=\"let row of data.getRows(); let idx = index\"\n            tabindex=\"0\"\n            role=\"button\"\n            [class.is-selected]=\"row.isSelected\"\n            [adf-upload]=\"allowDropFiles && rowAllowsDrop(row)\" [adf-upload-data]=\"row\"\n            [ngStyle]=\"rowStyle\"\n            [ngClass]=\"getRowStyle(row)\"\n            (keyup.enter)=\"onKeyboardNavigate(row, $event)\">\n\n            <!-- Actions (left) -->\n            <td *ngIf=\"actions && actionsPosition === 'left'\">\n                <button md-icon-button [mdMenuTriggerFor]=\"menu\"\n                    [attr.data-automation-id]=\"'action_menu_' + idx\">\n                    <md-icon>more_vert</md-icon>\n                </button>\n                <md-menu #menu=\"mdMenu\">\n                    <button md-menu-item *ngFor=\"let action of getRowActions(row)\"\n                        [attr.data-automation-id]=\"action.title\"\n                        [disabled]=\"action.disabled\"\n                        (click)=\"onExecuteRowAction(row, action)\">\n                        <md-icon *ngIf=\"action.icon\">{{ action.icon }}</md-icon>\n                        <span>{{ action.title }}</span>\n                    </button>\n                </md-menu>\n            </td>\n\n            <td *ngIf=\"multiselect\">\n                <md-checkbox\n                    [checked]=\"row.isSelected\"\n                    (change)=\"onCheckboxChange(row, $event)\">\n                </md-checkbox>\n            </td>\n            <td *ngFor=\"let col of data.getColumns()\"\n                class=\"adf-data-table-cell adf-data-table-cell--{{col.type || 'text'}} {{col.cssClass}}\"\n                tabindex=\"0\"\n                (click)=\"onRowClick(row, $event)\"\n                [context-menu]=\"getContextMenuActions(row, col)\"\n                [context-menu-enabled]=\"contextMenu\">\n                <div *ngIf=\"!col.template\" class=\"cell-container\">\n                    <ng-container [ngSwitch]=\"col.type\">\n                        <div *ngSwitchCase=\"'image'\" class=\"cell-value\">\n                            <i *ngIf=\"isIconValue(row, col)\" class=\"material-icons\">{{ asIconValue(row, col) }}</i>\n                            <img *ngIf=\"!isIconValue(row, col)\"\n                                 alt=\"{{ iconAltTextKey(data.getValue(row, col)) | translate }}\"\n                                 src=\"{{ data.getValue(row, col) }}\"\n                                 (error)=\"onImageLoadingError($event)\">\n                        </div>\n                        <div *ngSwitchCase=\"'icon'\" class=\"cell-value\">\n                            <img alt=\"{{ iconAltTextKey(data.getValue(row, col)) | translate }}\"\n                                 src=\"{{ data.getValue(row, col) }}\"\n                                 (error)=\"onImageLoadingError($event)\">\n                        </div>\n                        <div *ngSwitchCase=\"'date'\" class=\"cell-value\"\n                            [mdTooltip]=\"getCellTooltip(row, col)\"\n                            [attr.data-automation-id]=\"'date_' + data.getValue(row, col)\">\n                            <adf-datatable-cell [data]=\"data\" [column]=\"col\" [row]=\"row\"></adf-datatable-cell>\n                        </div>\n                        <div *ngSwitchCase=\"'location'\" class=\"cell-value\"\n                            [mdTooltip]=\"getCellTooltip(row, col)\"\n                            [attr.data-automation-id]=\"'location' + data.getValue(row, col)\">\n                            <adf-location-cell [data]=\"data\" [column]=\"col\" [row]=\"row\"></adf-location-cell>\n                        </div>\n                        <div *ngSwitchCase=\"'fileSize'\" class=\"cell-value\"\n                            [mdTooltip]=\"getCellTooltip(row, col)\"\n                            [attr.data-automation-id]=\"'fileSize_' + data.getValue(row, col)\">\n                            <adf-datatable-cell [value]=\"data.getValue(row, col) | adfFileSize\"></adf-datatable-cell>\n                        </div>\n                        <div *ngSwitchCase=\"'text'\" class=\"cell-value\"\n                            [mdTooltip]=\"getCellTooltip(row, col)\"\n                            [attr.data-automation-id]=\"'text_' + data.getValue(row, col)\">\n                            <adf-datatable-cell [data]=\"data\" [column]=\"col\" [row]=\"row\"></adf-datatable-cell>\n                        </div>\n                    <span *ngSwitchDefault class=\"cell-value\">\n                    <!-- empty cell for unknown column type -->\n                    </span>\n                    </ng-container>\n                </div>\n                <div *ngIf=\"col.template\" class=\"cell-container\">\n                    <ng-container\n                        [ngTemplateOutlet]=\"col.template\"\n                        [ngOutletContext]=\"{ $implicit: { data: data, row: row, col: col }, value: data.getValue(row, col) }\">\n                    </ng-container>\n                </div>\n            </td>\n\n            <!-- Actions (right) -->\n            <td *ngIf=\"actions && actionsPosition === 'right'\" class=\"alfresco-datatable__actions-cell\">\n                <button md-icon-button [mdMenuTriggerFor]=\"menu\"\n                    [attr.data-automation-id]=\"'action_menu_' + idx\">\n                    <md-icon>more_vert</md-icon>\n                </button>\n                <md-menu #menu=\"mdMenu\">\n                    <button md-menu-item *ngFor=\"let action of getRowActions(row)\"\n                        [attr.data-automation-id]=\"action.title\"\n                        [disabled]=\"action.disabled\"\n                        (click)=\"onExecuteRowAction(row, action)\">\n                        <md-icon *ngIf=\"action.icon\">{{ action.icon }}</md-icon>\n                        <span>{{ action.title }}</span>\n                    </button>\n                </md-menu>\n            </td>\n\n        </tr>\n        <tr *ngIf=\"data.getRows().length === 0\">\n            <td class=\"adf-no-content-container\"\n                [attr.colspan]=\"1 + data.getColumns().length\">\n                <ng-template *ngIf=\"noContentTemplate\"\n                             ngFor [ngForOf]=\"[data]\"\n                             [ngForTemplate]=\"noContentTemplate\">\n                </ng-template>\n                <ng-content select=\"adf-empty-list\"></ng-content>\n            </td>\n        </tr>\n    </ng-container>\n    <tr *ngIf=\"loading\">\n        <td class=\"adf-loading-content-container\"\n            [attr.colspan]=\"1 + data.getColumns().length\">\n            <ng-template *ngIf=\"loadingTemplate\"\n                         ngFor [ngForOf]=\"[data]\"\n                         [ngForTemplate]=\"loadingTemplate\">\n            </ng-template>\n        </td>\n    </tr>\n    </tbody>\n</table>\n";

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-empty-list_template\">\n    <ng-content select=\"[adf-empty-list-header]\"></ng-content>\n    <ng-content select=\"[adf-empty-list-body]\"></ng-content>\n    <ng-content select=\"[adf-empty-list-footer]\"></ng-content>\n    <ng-content></ng-content>\n</div>";

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ".adf-empty-list_template {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px; }\n"

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var datatable_adapter_1 = __webpack_require__(109);
var object_datatable_adapter_1 = __webpack_require__(346);
var data_cell_event_1 = __webpack_require__(208);
var data_row_action_event_1 = __webpack_require__(209);
var DataTableComponent = (function () {
    function DataTableComponent(elementRef, differs) {
        var _this = this;
        this.elementRef = elementRef;
        this.rows = [];
        this.selectionMode = 'single';
        this.multiselect = false;
        this.actions = false;
        this.actionsPosition = 'right';
        this.contextMenu = false;
        this.allowDropFiles = false;
        this.rowStyleClass = '';
        this.showHeader = true;
        this.rowClick = new core_1.EventEmitter();
        this.rowDblClick = new core_1.EventEmitter();
        this.showRowContextMenu = new core_1.EventEmitter();
        this.showRowActionsMenu = new core_1.EventEmitter();
        this.executeRowAction = new core_1.EventEmitter();
        this.loading = false;
        this.isSelectAllChecked = false;
        this.selection = new Array();
        this.schema = [];
        if (differs) {
            this.differ = differs.find([]).create(null);
        }
        this.click$ = new Rx_1.Observable(function (observer) { return _this.clickObserver = observer; }).share();
    }
    DataTableComponent.prototype.ngAfterContentInit = function () {
        this.setTableSchema();
    };
    DataTableComponent.prototype.ngOnChanges = function (changes) {
        this.initAndSubscribeClickStream();
        if (this.isPropertyChanged(changes['data'])) {
            if (this.isTableEmpty()) {
                this.initTable();
            }
            else {
                this.data = changes['data'].currentValue;
            }
            return;
        }
        if (this.isPropertyChanged(changes['rows'])) {
            if (this.isTableEmpty()) {
                this.initTable();
            }
            else {
                this.setTableRows(changes['rows'].currentValue);
            }
            return;
        }
        if (changes.selectionMode && !changes.selectionMode.isFirstChange()) {
            this.resetSelection();
            this.emitRowSelectionEvent('row-unselect', null);
        }
    };
    DataTableComponent.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.rows);
        if (changes) {
            this.setTableRows(this.rows);
        }
    };
    DataTableComponent.prototype.isPropertyChanged = function (property) {
        return property && property.currentValue ? true : false;
    };
    DataTableComponent.prototype.convertToRowsData = function (rows) {
        return rows.map(function (row) { return new object_datatable_adapter_1.ObjectDataRow(row); });
    };
    DataTableComponent.prototype.initAndSubscribeClickStream = function () {
        var _this = this;
        this.unsubscribeClickStream();
        var singleClickStream = this.click$
            .buffer(this.click$.debounceTime(250))
            .map(function (list) { return list; })
            .filter(function (x) { return x.length === 1; });
        this.singleClickStreamSub = singleClickStream.subscribe(function (obj) {
            var event = obj[0];
            _this.rowClick.emit(event);
            if (!event.defaultPrevented) {
                _this.elementRef.nativeElement.dispatchEvent(new CustomEvent('row-click', {
                    detail: event,
                    bubbles: true
                }));
            }
        });
        var multiClickStream = this.click$
            .buffer(this.click$.debounceTime(250))
            .map(function (list) { return list; })
            .filter(function (x) { return x.length >= 2; });
        this.multiClickStreamSub = multiClickStream.subscribe(function (obj) {
            var event = obj[0];
            _this.rowDblClick.emit(event);
            if (!event.defaultPrevented) {
                _this.elementRef.nativeElement.dispatchEvent(new CustomEvent('row-dblclick', {
                    detail: event,
                    bubbles: true
                }));
            }
        });
    };
    DataTableComponent.prototype.unsubscribeClickStream = function () {
        if (this.singleClickStreamSub) {
            this.singleClickStreamSub.unsubscribe();
        }
        if (this.multiClickStreamSub) {
            this.multiClickStreamSub.unsubscribe();
        }
    };
    DataTableComponent.prototype.initTable = function () {
        this.data = new object_datatable_adapter_1.ObjectDataTableAdapter(this.rows, this.schema);
    };
    DataTableComponent.prototype.isTableEmpty = function () {
        return this.data === undefined || this.data === null;
    };
    DataTableComponent.prototype.setTableRows = function (rows) {
        if (this.data) {
            this.data.setRows(this.convertToRowsData(rows));
        }
    };
    DataTableComponent.prototype.setTableSchema = function () {
        if (this.columnList && this.columnList.columns) {
            this.schema = this.columnList.columns.map(function (c) { return c; });
        }
        if (this.data && this.schema && this.schema.length > 0) {
            this.data.setColumns(this.schema);
        }
    };
    DataTableComponent.prototype.onRowClick = function (row, e) {
        if (e) {
            e.preventDefault();
        }
        if (row) {
            if (this.data) {
                if (this.isSingleSelectionMode()) {
                    this.resetSelection();
                    this.selectRow(row, true);
                    this.emitRowSelectionEvent('row-select', row);
                }
                if (this.isMultiSelectionMode()) {
                    var modifier = e && (e.metaKey || e.ctrlKey);
                    var newValue = modifier ? !row.isSelected : true;
                    var domEventName = newValue ? 'row-select' : 'row-unselect';
                    if (!modifier) {
                        this.resetSelection();
                    }
                    this.selectRow(row, newValue);
                    this.emitRowSelectionEvent(domEventName, row);
                }
            }
            var dataRowEvent = new datatable_adapter_1.DataRowEvent(row, e, this);
            this.clickObserver.next(dataRowEvent);
        }
    };
    DataTableComponent.prototype.resetSelection = function () {
        if (this.data) {
            var rows = this.data.getRows();
            if (rows && rows.length > 0) {
                rows.forEach(function (r) { return r.isSelected = false; });
            }
            this.selection.splice(0);
        }
        this.isSelectAllChecked = false;
    };
    DataTableComponent.prototype.onRowDblClick = function (row, e) {
        if (e) {
            e.preventDefault();
        }
        var dataRowEvent = new datatable_adapter_1.DataRowEvent(row, e, this);
        this.clickObserver.next(dataRowEvent);
    };
    DataTableComponent.prototype.onKeyboardNavigate = function (row, e) {
        if (e) {
            e.preventDefault();
        }
        var event = new datatable_adapter_1.DataRowEvent(row, e, this);
        this.rowDblClick.emit(event);
        this.elementRef.nativeElement.dispatchEvent(new CustomEvent('row-dblclick', {
            detail: event,
            bubbles: true
        }));
    };
    DataTableComponent.prototype.onColumnHeaderClick = function (column) {
        if (column && column.sortable) {
            var current = this.data.getSorting();
            var newDirection = 'asc';
            if (current && column.key === current.key) {
                newDirection = current.direction === 'asc' ? 'desc' : 'asc';
            }
            this.data.setSorting(new datatable_adapter_1.DataSorting(column.key, newDirection));
        }
    };
    DataTableComponent.prototype.onSelectAllClick = function (e) {
        this.isSelectAllChecked = e.checked;
        if (this.multiselect) {
            var rows = this.data.getRows();
            if (rows && rows.length > 0) {
                for (var i = 0; i < rows.length; i++) {
                    this.selectRow(rows[i], e.checked);
                }
            }
            var domEventName = e.checked ? 'row-select' : 'row-unselect';
            var row = this.selection.length > 0 ? this.selection[0] : null;
            this.emitRowSelectionEvent(domEventName, row);
        }
    };
    DataTableComponent.prototype.onCheckboxChange = function (row, event) {
        var newValue = event.checked;
        this.selectRow(row, newValue);
        var domEventName = newValue ? 'row-select' : 'row-unselect';
        this.emitRowSelectionEvent(domEventName, row);
    };
    DataTableComponent.prototype.onImageLoadingError = function (event) {
        if (event && this.fallbackThumbnail) {
            var element = event.target;
            element.src = this.fallbackThumbnail;
        }
    };
    DataTableComponent.prototype.isIconValue = function (row, col) {
        if (row && col) {
            var value = row.getValue(col.key);
            return value && value.startsWith('material-icons://');
        }
        return false;
    };
    DataTableComponent.prototype.asIconValue = function (row, col) {
        if (this.isIconValue(row, col)) {
            var value = row.getValue(col.key) || '';
            return value.replace('material-icons://', '');
        }
        return null;
    };
    DataTableComponent.prototype.iconAltTextKey = function (value) {
        return 'ICONS.' + value.substring(value.lastIndexOf('/') + 1).replace(/\.[a-z]+/, '');
    };
    DataTableComponent.prototype.isColumnSorted = function (col, direction) {
        if (col && direction) {
            var sorting = this.data.getSorting();
            return sorting && sorting.key === col.key && sorting.direction === direction;
        }
        return false;
    };
    DataTableComponent.prototype.getContextMenuActions = function (row, col) {
        var event = new data_cell_event_1.DataCellEvent(row, col, []);
        this.showRowContextMenu.emit(event);
        return event.value.actions;
    };
    DataTableComponent.prototype.getRowActions = function (row, col) {
        var event = new data_cell_event_1.DataCellEvent(row, col, []);
        this.showRowActionsMenu.emit(event);
        return event.value.actions;
    };
    DataTableComponent.prototype.onExecuteRowAction = function (row, action) {
        if (action.disabled || action.disabled) {
            event.stopPropagation();
        }
        else {
            this.executeRowAction.emit(new data_row_action_event_1.DataRowActionEvent(row, action));
        }
    };
    DataTableComponent.prototype.rowAllowsDrop = function (row) {
        return row.isDropTarget === true;
    };
    DataTableComponent.prototype.hasSelectionMode = function () {
        return this.isSingleSelectionMode() || this.isMultiSelectionMode();
    };
    DataTableComponent.prototype.isSingleSelectionMode = function () {
        return this.selectionMode && this.selectionMode.toLowerCase() === 'single';
    };
    DataTableComponent.prototype.isMultiSelectionMode = function () {
        return this.selectionMode && this.selectionMode.toLowerCase() === 'multiple';
    };
    DataTableComponent.prototype.getRowStyle = function (row) {
        row.cssClass = row.cssClass ? row.cssClass : '';
        this.rowStyleClass = this.rowStyleClass ? this.rowStyleClass : '';
        return row.cssClass + " " + this.rowStyleClass;
    };
    DataTableComponent.prototype.selectRow = function (row, value) {
        if (row) {
            row.isSelected = value;
            var idx = this.selection.indexOf(row);
            if (value) {
                if (idx < 0) {
                    this.selection.push(row);
                }
            }
            else {
                if (idx > -1) {
                    this.selection.splice(idx, 1);
                }
            }
        }
    };
    DataTableComponent.prototype.getCellTooltip = function (row, col) {
        if (row && col && col.formatTooltip) {
            var result = col.formatTooltip(row, col);
            if (result) {
                return result;
            }
        }
        return null;
    };
    DataTableComponent.prototype.emitRowSelectionEvent = function (name, row) {
        var domEvent = new CustomEvent(name, {
            detail: {
                row: row,
                selection: this.selection
            },
            bubbles: true
        });
        this.elementRef.nativeElement.dispatchEvent(domEvent);
    };
    return DataTableComponent;
}());
__decorate([
    core_1.ContentChild(ng2_alfresco_core_1.DataColumnListComponent),
    __metadata("design:type", typeof (_a = typeof ng2_alfresco_core_1.DataColumnListComponent !== "undefined" && ng2_alfresco_core_1.DataColumnListComponent) === "function" && _a || Object)
], DataTableComponent.prototype, "columnList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof datatable_adapter_1.DataTableAdapter !== "undefined" && datatable_adapter_1.DataTableAdapter) === "function" && _b || Object)
], DataTableComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DataTableComponent.prototype, "rows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTableComponent.prototype, "selectionMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTableComponent.prototype, "multiselect", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTableComponent.prototype, "actions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTableComponent.prototype, "actionsPosition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTableComponent.prototype, "fallbackThumbnail", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTableComponent.prototype, "contextMenu", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTableComponent.prototype, "allowDropFiles", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTableComponent.prototype, "rowStyle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTableComponent.prototype, "rowStyleClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTableComponent.prototype, "showHeader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], DataTableComponent.prototype, "rowClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], DataTableComponent.prototype, "rowDblClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], DataTableComponent.prototype, "showRowContextMenu", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_f = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _f || Object)
], DataTableComponent.prototype, "showRowActionsMenu", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_g = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _g || Object)
], DataTableComponent.prototype, "executeRowAction", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTableComponent.prototype, "loading", void 0);
DataTableComponent = __decorate([
    core_1.Component({
        selector: 'adf-datatable, alfresco-datatable',
        styles: [__webpack_require__(775)],
        template: __webpack_require__(605)
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _h || Object, typeof (_j = typeof core_1.IterableDiffers !== "undefined" && core_1.IterableDiffers) === "function" && _j || Object])
], DataTableComponent);
exports.DataTableComponent = DataTableComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j;


/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(692);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(693);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var router_1 = __webpack_require__(37);
var ng2_alfresco_core_1 = __webpack_require__(1);
var material_module_1 = __webpack_require__(371);
__export(__webpack_require__(368));
var datatable_cell_component_1 = __webpack_require__(94);
exports.DataTableCellComponent = datatable_cell_component_1.DataTableCellComponent;
var datatable_component_1 = __webpack_require__(75);
exports.DataTableComponent = datatable_component_1.DataTableComponent;
var empty_list_component_1 = __webpack_require__(162);
exports.EmptyListComponent = empty_list_component_1.EmptyListComponent;
var data_cell_event_1 = __webpack_require__(208);
exports.DataCellEvent = data_cell_event_1.DataCellEvent;
exports.DataCellEventModel = data_cell_event_1.DataCellEventModel;
var data_row_action_event_1 = __webpack_require__(209);
exports.DataRowActionEvent = data_row_action_event_1.DataRowActionEvent;
exports.DataRowActionModel = data_row_action_event_1.DataRowActionModel;
var datatable_cell_component_2 = __webpack_require__(94);
var datatable_component_2 = __webpack_require__(75);
var empty_list_component_2 = __webpack_require__(162);
var location_cell_component_1 = __webpack_require__(367);
var loading_template_directive_1 = __webpack_require__(369);
var no_content_template_directive_1 = __webpack_require__(370);
function directives() {
    return [
        datatable_component_2.DataTableComponent,
        empty_list_component_2.EmptyListComponent,
        empty_list_component_2.EmptyListHeaderDirective,
        empty_list_component_2.EmptyListBodyDirective,
        empty_list_component_2.EmptyListFooterDirective,
        datatable_cell_component_2.DataTableCellComponent,
        location_cell_component_1.LocationCellComponent,
        no_content_template_directive_1.NoContentTemplateDirective,
        loading_template_directive_1.LoadingContentTemplateDirective
    ];
}
exports.directives = directives;
var DataTableModule = DataTableModule_1 = (function () {
    function DataTableModule() {
    }
    DataTableModule.forRoot = function () {
        return {
            ngModule: DataTableModule_1
        };
    };
    return DataTableModule;
}());
DataTableModule = DataTableModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule,
            ng2_alfresco_core_1.CoreModule,
            material_module_1.MaterialModule
        ],
        declarations: directives(),
        providers: [
            {
                provide: ng2_alfresco_core_1.TRANSLATION_PROVIDER,
                multi: true,
                useValue: {
                    name: 'ng2-alfresco-datatable',
                    source: 'assets/ng2-alfresco-datatable'
                }
            }
        ],
        exports: directives().concat([
            material_module_1.MaterialModule,
            router_1.RouterModule
        ])
    })
], DataTableModule);
exports.DataTableModule = DataTableModule;
var DataTableModule_1;


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var datatable_adapter_1 = __webpack_require__(109);
var DataTableCellComponent = (function () {
    function DataTableCellComponent() {
    }
    DataTableCellComponent.prototype.ngOnInit = function () {
        if (!this.value && this.column && this.column.key && this.row && this.data) {
            this.value = this.data.getValue(this.row, this.column);
        }
    };
    return DataTableCellComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof datatable_adapter_1.DataTableAdapter !== "undefined" && datatable_adapter_1.DataTableAdapter) === "function" && _a || Object)
], DataTableCellComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof datatable_adapter_1.DataColumn !== "undefined" && datatable_adapter_1.DataColumn) === "function" && _b || Object)
], DataTableCellComponent.prototype, "column", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_c = typeof datatable_adapter_1.DataRow !== "undefined" && datatable_adapter_1.DataRow) === "function" && _c || Object)
], DataTableCellComponent.prototype, "row", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTableCellComponent.prototype, "value", void 0);
DataTableCellComponent = __decorate([
    core_1.Component({
        selector: 'adf-datatable-cell, alfresco-datatable-cell',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        template: '<ng-container>{{value}}</ng-container>'
    })
], DataTableCellComponent);
exports.DataTableCellComponent = DataTableCellComponent;
var _a, _b, _c;


/***/ })

/******/ });
});
//# sourceMappingURL=ng2-alfresco-datatable.js.map