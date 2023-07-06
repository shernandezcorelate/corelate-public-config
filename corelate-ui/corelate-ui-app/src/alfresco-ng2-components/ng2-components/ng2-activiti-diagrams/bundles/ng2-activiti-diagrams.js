/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
		module.exports = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("moment"), require("@angular/http"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "ng2-alfresco-core", "rxjs/Rx", "moment", "@angular/http"], factory);
	else if(typeof exports === 'object')
		exports["ng2-activiti-diagrams"] = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("moment"), require("@angular/http"));
	else
		root["ng2-activiti-diagrams"] = factory(root["@angular/core"], root["ng2-alfresco-core"], root["rxjs/Rx"], root["moment"], root["@angular/http"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_20__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 817);
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

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var index_1 = __webpack_require__(238);
var index_2 = __webpack_require__(241);
var diagram_sequence_flow_component_1 = __webpack_require__(242);
var diagram_component_1 = __webpack_require__(243);
var index_3 = __webpack_require__(247);
var index_4 = __webpack_require__(443);
var index_5 = __webpack_require__(271);
var index_6 = __webpack_require__(273);
var index_7 = __webpack_require__(303);
var index_8 = __webpack_require__(308);
var index_9 = __webpack_require__(447);
var diagram_color_service_1 = __webpack_require__(18);
var diagrams_service_1 = __webpack_require__(309);
__export(__webpack_require__(243));
__export(__webpack_require__(247));
__export(__webpack_require__(238));
__export(__webpack_require__(271));
__export(__webpack_require__(242));
__export(__webpack_require__(241));
__export(__webpack_require__(273));
__export(__webpack_require__(303));
__export(__webpack_require__(308));
exports.DIAGRAM_DIRECTIVES = [
    diagram_component_1.DiagramComponent,
    index_3.DIAGRAM_EVENTS_DIRECTIVES,
    index_1.DIAGRAM_ACTIVITIES_DIRECTIVES,
    diagram_sequence_flow_component_1.DiagramSequenceFlowComponent,
    index_4.DIAGRAM_GATEWAY_DIRECTIVES,
    index_5.DIAGRAM_ICONS_DIRECTIVES,
    index_2.DIAGRAM_BOUNDARY_EVENTS_DIRECTIVES,
    index_6.DIAGRAM_INTERMEDIATE_EVENTS_DIRECTIVES,
    index_7.DIAGRAM_STRUCTURAL_DIRECTIVES,
    index_8.DIAGRAM_SWIMLANES_DIRECTIVES,
    index_9.DiagramTooltipComponent
];
exports.DIAGRAM_PROVIDERS = [
    diagrams_service_1.DiagramsService,
    diagram_color_service_1.DiagramColorService
];


/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramColorService = DiagramColorService_1 = (function () {
    function DiagramColorService() {
    }
    DiagramColorService.prototype.setTotalColors = function (totalColors) {
        this.totalColors = totalColors;
    };
    DiagramColorService.prototype.getFillOpacity = function () {
        return '0.6';
    };
    DiagramColorService.prototype.getFillColour = function (key) {
        if (this.totalColors && this.totalColors.hasOwnProperty(key)) {
            var colorPercentage = this.totalColors[key];
            return this.convertColorToHsb(colorPercentage);
        }
        else {
            return DiagramColorService_1.ACTIVITY_FILL_COLOR;
        }
    };
    DiagramColorService.prototype.getBpmnColor = function (data, defaultColor) {
        if (data.current) {
            return DiagramColorService_1.CURRENT_COLOR;
        }
        else if (data.completed) {
            return DiagramColorService_1.COMPLETED_COLOR;
        }
        else {
            return defaultColor;
        }
    };
    DiagramColorService.prototype.getBpmnStrokeWidth = function (data) {
        if (data.current || data.completed) {
            return DiagramColorService_1.TASK_HIGHLIGHT_STROKE;
        }
        else {
            return DiagramColorService_1.TASK_STROKE;
        }
    };
    DiagramColorService.prototype.convertColorToHsb = function (colorPercentage) {
        var hue = (120.0 - (colorPercentage * 1.2)) / 360.0;
        return 'hsb(' + hue + ', 1, 1)';
    };
    return DiagramColorService;
}());
DiagramColorService.CURRENT_COLOR = '#017501';
DiagramColorService.COMPLETED_COLOR = '#2632aa';
DiagramColorService.ACTIVITY_STROKE_COLOR = '#bbbbbb';
DiagramColorService.MAIN_STROKE_COLOR = '#585858';
DiagramColorService.ACTIVITY_FILL_COLOR = '#f9f9f9';
DiagramColorService.TASK_STROKE = 1;
DiagramColorService.TASK_HIGHLIGHT_STROKE = 2;
DiagramColorService.CALL_ACTIVITY_STROKE = 2;
DiagramColorService = DiagramColorService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DiagramColorService);
exports.DiagramColorService = DiagramColorService;
var DiagramColorService_1;


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramAlfrescoPublishTaskComponent = (function () {
    function DiagramAlfrescoPublishTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
    }
    DiagramAlfrescoPublishTaskComponent.prototype.ngOnInit = function () {
    };
    return DiagramAlfrescoPublishTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramAlfrescoPublishTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramAlfrescoPublishTaskComponent.prototype, "onError", void 0);
DiagramAlfrescoPublishTaskComponent = __decorate([
    core_1.Component({
        selector: 'adf-diagram-publish-task, diagram-alfresco-publish-task',
        template: __webpack_require__(491)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramAlfrescoPublishTaskComponent);
exports.DiagramAlfrescoPublishTaskComponent = DiagramAlfrescoPublishTaskComponent;
var _a;


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramBoxPublishTaskComponent = (function () {
    function DiagramBoxPublishTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
    }
    DiagramBoxPublishTaskComponent.prototype.ngOnInit = function () {
    };
    return DiagramBoxPublishTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramBoxPublishTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramBoxPublishTaskComponent.prototype, "onError", void 0);
DiagramBoxPublishTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-box-publish-task',
        template: __webpack_require__(492)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramBoxPublishTaskComponent);
exports.DiagramBoxPublishTaskComponent = DiagramBoxPublishTaskComponent;
var _a;


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramBusinessRuleTaskComponent = (function () {
    function DiagramBusinessRuleTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
    }
    return DiagramBusinessRuleTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramBusinessRuleTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramBusinessRuleTaskComponent.prototype, "onError", void 0);
DiagramBusinessRuleTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-business-rule-task',
        template: __webpack_require__(493)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramBusinessRuleTaskComponent);
exports.DiagramBusinessRuleTaskComponent = DiagramBusinessRuleTaskComponent;
var _a;


/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramCamelTaskComponent = (function () {
    function DiagramCamelTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
    }
    DiagramCamelTaskComponent.prototype.ngOnInit = function () {
    };
    return DiagramCamelTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramCamelTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramCamelTaskComponent.prototype, "onError", void 0);
DiagramCamelTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-camel-task',
        template: __webpack_require__(494)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramCamelTaskComponent);
exports.DiagramCamelTaskComponent = DiagramCamelTaskComponent;
var _a;


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramContainerServiceTaskComponent = (function () {
    function DiagramContainerServiceTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
    }
    DiagramContainerServiceTaskComponent.prototype.ngOnInit = function () {
    };
    return DiagramContainerServiceTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramContainerServiceTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramContainerServiceTaskComponent.prototype, "onError", void 0);
DiagramContainerServiceTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-container-service-task',
        template: __webpack_require__(495)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramContainerServiceTaskComponent);
exports.DiagramContainerServiceTaskComponent = DiagramContainerServiceTaskComponent;
var _a;


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramGoogleDrivePublishTaskComponent = (function () {
    function DiagramGoogleDrivePublishTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
    }
    DiagramGoogleDrivePublishTaskComponent.prototype.ngOnInit = function () {
    };
    return DiagramGoogleDrivePublishTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramGoogleDrivePublishTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramGoogleDrivePublishTaskComponent.prototype, "onError", void 0);
DiagramGoogleDrivePublishTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-google-drive-publish-task',
        template: __webpack_require__(496)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramGoogleDrivePublishTaskComponent);
exports.DiagramGoogleDrivePublishTaskComponent = DiagramGoogleDrivePublishTaskComponent;
var _a;


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramManualTaskComponent = (function () {
    function DiagramManualTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
    }
    return DiagramManualTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramManualTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramManualTaskComponent.prototype, "onError", void 0);
DiagramManualTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-manual-task',
        template: __webpack_require__(497)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramManualTaskComponent);
exports.DiagramManualTaskComponent = DiagramManualTaskComponent;
var _a;


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramMuleTaskComponent = (function () {
    function DiagramMuleTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
    }
    DiagramMuleTaskComponent.prototype.ngOnInit = function () {
    };
    return DiagramMuleTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramMuleTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramMuleTaskComponent.prototype, "onError", void 0);
DiagramMuleTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-mule-task',
        template: __webpack_require__(498)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramMuleTaskComponent);
exports.DiagramMuleTaskComponent = DiagramMuleTaskComponent;
var _a;


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramReceiveTaskComponent = (function () {
    function DiagramReceiveTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
    }
    return DiagramReceiveTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramReceiveTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramReceiveTaskComponent.prototype, "onError", void 0);
DiagramReceiveTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-receive-task',
        template: __webpack_require__(499)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramReceiveTaskComponent);
exports.DiagramReceiveTaskComponent = DiagramReceiveTaskComponent;
var _a;


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramRestCallTaskComponent = (function () {
    function DiagramRestCallTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
    }
    DiagramRestCallTaskComponent.prototype.ngOnInit = function () {
    };
    return DiagramRestCallTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramRestCallTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramRestCallTaskComponent.prototype, "onError", void 0);
DiagramRestCallTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-rest-call-task',
        template: __webpack_require__(500)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramRestCallTaskComponent);
exports.DiagramRestCallTaskComponent = DiagramRestCallTaskComponent;
var _a;


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramScriptTaskComponent = (function () {
    function DiagramScriptTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
    }
    return DiagramScriptTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramScriptTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramScriptTaskComponent.prototype, "onError", void 0);
DiagramScriptTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-script-task',
        template: __webpack_require__(501)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramScriptTaskComponent);
exports.DiagramScriptTaskComponent = DiagramScriptTaskComponent;
var _a;


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramSendTaskComponent = (function () {
    function DiagramSendTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
    }
    DiagramSendTaskComponent.prototype.ngOnInit = function () {
    };
    return DiagramSendTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramSendTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramSendTaskComponent.prototype, "onError", void 0);
DiagramSendTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-send-task',
        template: __webpack_require__(502)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramSendTaskComponent);
exports.DiagramSendTaskComponent = DiagramSendTaskComponent;
var _a;


/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramServiceTaskComponent = (function () {
    function DiagramServiceTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
    }
    return DiagramServiceTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramServiceTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramServiceTaskComponent.prototype, "onError", void 0);
DiagramServiceTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-service-task',
        template: __webpack_require__(503)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramServiceTaskComponent);
exports.DiagramServiceTaskComponent = DiagramServiceTaskComponent;
var _a;


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_color_service_1 = __webpack_require__(18);
var DiagramTaskComponent = (function () {
    function DiagramTaskComponent(elementRef, diagramColorService) {
        this.elementRef = elementRef;
        this.diagramColorService = diagramColorService;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '', radius: 4 };
    }
    DiagramTaskComponent.prototype.ngOnInit = function () {
        this.rectLeftCorner = { x: this.data.x, y: this.data.y };
        this.textPosition = { x: this.data.x + (this.data.width / 2), y: this.data.y + (this.data.height / 2) };
        this.options.fillColors = this.diagramColorService.getFillColour(this.data.id);
        this.options.stroke = this.diagramColorService.getBpmnColor(this.data, diagram_color_service_1.DiagramColorService.ACTIVITY_STROKE_COLOR);
        this.options.strokeWidth = this.diagramColorService.getBpmnStrokeWidth(this.data);
        this.options.fillOpacity = this.diagramColorService.getFillOpacity();
    };
    return DiagramTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramTaskComponent.prototype, "onError", void 0);
DiagramTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-task',
        template: __webpack_require__(504)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof diagram_color_service_1.DiagramColorService !== "undefined" && diagram_color_service_1.DiagramColorService) === "function" && _b || Object])
], DiagramTaskComponent);
exports.DiagramTaskComponent = DiagramTaskComponent;
var _a, _b;


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramUserTaskComponent = (function () {
    function DiagramUserTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
    }
    return DiagramUserTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramUserTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramUserTaskComponent.prototype, "onError", void 0);
DiagramUserTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-user-task',
        template: __webpack_require__(505)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramUserTaskComponent);
exports.DiagramUserTaskComponent = DiagramUserTaskComponent;
var _a;


/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_alfresco_publish_task_component_1 = __webpack_require__(223);
var diagram_box_publish_task_component_1 = __webpack_require__(224);
var diagram_business_rule_task_component_1 = __webpack_require__(225);
var diagram_camel_task_component_1 = __webpack_require__(226);
var diagram_container_service_task_component_1 = __webpack_require__(227);
var diagram_google_drive_publish_task_component_1 = __webpack_require__(228);
var diagram_manual_task_component_1 = __webpack_require__(229);
var diagram_mule_task_component_1 = __webpack_require__(230);
var diagram_receive_task_component_1 = __webpack_require__(231);
var diagram_rest_call_task_component_1 = __webpack_require__(232);
var diagram_script_task_component_1 = __webpack_require__(233);
var diagram_send_task_component_1 = __webpack_require__(234);
var diagram_service_task_component_1 = __webpack_require__(235);
var diagram_task_component_1 = __webpack_require__(236);
var diagram_user_task_component_1 = __webpack_require__(237);
__export(__webpack_require__(227));
__export(__webpack_require__(236));
__export(__webpack_require__(235));
__export(__webpack_require__(234));
__export(__webpack_require__(237));
__export(__webpack_require__(229));
__export(__webpack_require__(226));
__export(__webpack_require__(230));
__export(__webpack_require__(223));
__export(__webpack_require__(232));
__export(__webpack_require__(228));
__export(__webpack_require__(224));
__export(__webpack_require__(231));
__export(__webpack_require__(233));
__export(__webpack_require__(225));
exports.DIAGRAM_ACTIVITIES_DIRECTIVES = [
    diagram_container_service_task_component_1.DiagramContainerServiceTaskComponent,
    diagram_task_component_1.DiagramTaskComponent,
    diagram_service_task_component_1.DiagramServiceTaskComponent,
    diagram_send_task_component_1.DiagramSendTaskComponent,
    diagram_user_task_component_1.DiagramUserTaskComponent,
    diagram_manual_task_component_1.DiagramManualTaskComponent,
    diagram_camel_task_component_1.DiagramCamelTaskComponent,
    diagram_mule_task_component_1.DiagramMuleTaskComponent,
    diagram_alfresco_publish_task_component_1.DiagramAlfrescoPublishTaskComponent,
    diagram_rest_call_task_component_1.DiagramRestCallTaskComponent,
    diagram_google_drive_publish_task_component_1.DiagramGoogleDrivePublishTaskComponent,
    diagram_box_publish_task_component_1.DiagramBoxPublishTaskComponent,
    diagram_receive_task_component_1.DiagramReceiveTaskComponent,
    diagram_script_task_component_1.DiagramScriptTaskComponent,
    diagram_business_rule_task_component_1.DiagramBusinessRuleTaskComponent
];


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_color_service_1 = __webpack_require__(18);
var DiagramBoundaryEventComponent = (function () {
    function DiagramBoundaryEventComponent(elementRef, diagramColorService) {
        this.elementRef = elementRef;
        this.diagramColorService = diagramColorService;
        this.onError = new core_1.EventEmitter();
        this.center = {};
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: 1 };
    }
    DiagramBoundaryEventComponent.prototype.ngOnInit = function () {
        this.center.x = this.data.x + (this.data.width / 2);
        this.center.y = this.data.y + (this.data.height / 2);
        this.circleRadiusInner = 12;
        this.circleRadiusOuter = 15;
        this.options.stroke = this.diagramColorService.getBpmnColor(this.data, diagram_color_service_1.DiagramColorService.MAIN_STROKE_COLOR);
        this.options.fillColors = this.diagramColorService.getFillColour(this.data.id);
        this.options.fillOpacity = this.diagramColorService.getFillOpacity();
        this.signalFillColor = 'none';
    };
    return DiagramBoundaryEventComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramBoundaryEventComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramBoundaryEventComponent.prototype, "onError", void 0);
DiagramBoundaryEventComponent = __decorate([
    core_1.Component({
        selector: 'diagram-boundary-event',
        template: __webpack_require__(506)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof diagram_color_service_1.DiagramColorService !== "undefined" && diagram_color_service_1.DiagramColorService) === "function" && _b || Object])
], DiagramBoundaryEventComponent);
exports.DiagramBoundaryEventComponent = DiagramBoundaryEventComponent;
var _a, _b;


/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_color_service_1 = __webpack_require__(18);
var DiagramThrowEventComponent = (function () {
    function DiagramThrowEventComponent(elementRef, diagramColorService) {
        this.elementRef = elementRef;
        this.diagramColorService = diagramColorService;
        this.onError = new core_1.EventEmitter();
        this.center = {};
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: 1 };
    }
    DiagramThrowEventComponent.prototype.ngOnInit = function () {
        this.center.x = this.data.x + (this.data.width / 2);
        this.center.y = this.data.y + (this.data.height / 2);
        this.circleRadiusInner = 12;
        this.circleRadiusOuter = 15;
        this.options.stroke = this.diagramColorService.getBpmnColor(this.data, diagram_color_service_1.DiagramColorService.MAIN_STROKE_COLOR);
        this.options.fillColors = this.diagramColorService.getFillColour(this.data.id);
        this.options.fillOpacity = this.diagramColorService.getFillOpacity();
        this.signalFillColor = 'black';
    };
    return DiagramThrowEventComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramThrowEventComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramThrowEventComponent.prototype, "onError", void 0);
DiagramThrowEventComponent = __decorate([
    core_1.Component({
        selector: 'diagram-throw-event',
        template: __webpack_require__(507)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof diagram_color_service_1.DiagramColorService !== "undefined" && diagram_color_service_1.DiagramColorService) === "function" && _b || Object])
], DiagramThrowEventComponent);
exports.DiagramThrowEventComponent = DiagramThrowEventComponent;
var _a, _b;


/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_boundary_event_component_1 = __webpack_require__(239);
var diagram_throw_event_component_1 = __webpack_require__(240);
__export(__webpack_require__(239));
__export(__webpack_require__(240));
exports.DIAGRAM_BOUNDARY_EVENTS_DIRECTIVES = [
    diagram_boundary_event_component_1.DiagramBoundaryEventComponent,
    diagram_throw_event_component_1.DiagramThrowEventComponent
];


/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramSequenceFlowComponent = (function () {
    function DiagramSequenceFlowComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
    }
    DiagramSequenceFlowComponent.prototype.ngOnInit = function () {
    };
    return DiagramSequenceFlowComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramSequenceFlowComponent.prototype, "flow", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramSequenceFlowComponent.prototype, "onError", void 0);
DiagramSequenceFlowComponent = __decorate([
    core_1.Component({
        selector: 'adf-diagram-sequence-flow, diagram-sequence-flow',
        template: __webpack_require__(508)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramSequenceFlowComponent);
exports.DiagramSequenceFlowComponent = DiagramSequenceFlowComponent;
var _a;


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_model_1 = __webpack_require__(449);
var diagram_color_service_1 = __webpack_require__(18);
var diagrams_service_1 = __webpack_require__(309);
var raphael_service_1 = __webpack_require__(5);
var DiagramComponent = (function () {
    function DiagramComponent(diagramColorService, raphaelService, diagramsService) {
        this.diagramColorService = diagramColorService;
        this.raphaelService = raphaelService;
        this.diagramsService = diagramsService;
        this.metricType = '';
        this.width = 1000;
        this.height = 500;
        this.onSuccess = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.PADDING_WIDTH = 60;
        this.PADDING_HEIGHT = 60;
    }
    DiagramComponent.prototype.ngOnChanges = function (changes) {
        this.reset();
        this.diagramColorService.setTotalColors(this.metricColor);
        if (this.processDefinitionId) {
            this.getProcessDefinitionModel(this.processDefinitionId);
        }
        else {
            this.getRunningProcessDefinitionModel(this.processInstanceId);
        }
    };
    DiagramComponent.prototype.getRunningProcessDefinitionModel = function (processInstanceId) {
        var _this = this;
        this.diagramsService.getRunningProcessDefinitionModel(processInstanceId).subscribe(function (res) {
            _this.diagram = new diagram_model_1.DiagramModel(res);
            _this.raphaelService.setting(_this.diagram.diagramWidth + _this.PADDING_WIDTH, _this.diagram.diagramHeight + _this.PADDING_HEIGHT);
            _this.setMetricValueToDiagramElement(_this.diagram, _this.metricPercentages, _this.metricType);
            _this.onSuccess.emit(res);
        }, function (err) {
            _this.onError.emit(err);
        });
    };
    DiagramComponent.prototype.getProcessDefinitionModel = function (processDefinitionId) {
        var _this = this;
        this.diagramsService.getProcessDefinitionModel(processDefinitionId).subscribe(function (res) {
            _this.diagram = new diagram_model_1.DiagramModel(res);
            _this.raphaelService.setting(_this.diagram.diagramWidth + _this.PADDING_WIDTH, _this.diagram.diagramHeight + _this.PADDING_HEIGHT);
            _this.setMetricValueToDiagramElement(_this.diagram, _this.metricPercentages, _this.metricType);
            _this.onSuccess.emit(res);
        }, function (err) {
            _this.onError.emit(err);
        });
    };
    DiagramComponent.prototype.setMetricValueToDiagramElement = function (diagram, metrics, metricType) {
        var _loop_1 = function (key) {
            if (metrics.hasOwnProperty(key)) {
                var foundElement = diagram.elements.find(function (element) { return element.id === key; });
                if (foundElement) {
                    foundElement.value = metrics[key];
                    foundElement.dataType = metricType;
                }
            }
        };
        for (var key in metrics) {
            _loop_1(key);
        }
    };
    DiagramComponent.prototype.reset = function () {
        this.raphaelService.reset();
    };
    return DiagramComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramComponent.prototype, "processDefinitionId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramComponent.prototype, "processInstanceId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramComponent.prototype, "metricPercentages", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramComponent.prototype, "metricColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DiagramComponent.prototype, "metricType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DiagramComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DiagramComponent.prototype, "height", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramComponent.prototype, "onSuccess", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramComponent.prototype, "onError", void 0);
DiagramComponent = __decorate([
    core_1.Component({
        selector: 'adf-diagram, activiti-diagram',
        styles: [__webpack_require__(427)],
        template: __webpack_require__(509)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof diagram_color_service_1.DiagramColorService !== "undefined" && diagram_color_service_1.DiagramColorService) === "function" && _a || Object, typeof (_b = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _b || Object, typeof (_c = typeof diagrams_service_1.DiagramsService !== "undefined" && diagrams_service_1.DiagramsService) === "function" && _c || Object])
], DiagramComponent);
exports.DiagramComponent = DiagramComponent;
var _a, _b, _c;


/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_color_service_1 = __webpack_require__(18);
var DiagramEndEventComponent = (function () {
    function DiagramEndEventComponent(elementRef, diagramColorService) {
        this.elementRef = elementRef;
        this.diagramColorService = diagramColorService;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '', radius: '' };
    }
    DiagramEndEventComponent.prototype.ngOnInit = function () {
        this.options.radius = 14;
        this.options.strokeWidth = 4;
        this.options.stroke = this.diagramColorService.getBpmnColor(this.data, diagram_color_service_1.DiagramColorService.MAIN_STROKE_COLOR);
        this.options.fillColors = this.diagramColorService.getFillColour(this.data.id);
        this.options.fillOpacity = this.diagramColorService.getFillOpacity();
        this.iconFillColor = 'black';
    };
    return DiagramEndEventComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramEndEventComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramEndEventComponent.prototype, "onError", void 0);
DiagramEndEventComponent = __decorate([
    core_1.Component({
        selector: 'diagram-end-event',
        template: __webpack_require__(510)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof diagram_color_service_1.DiagramColorService !== "undefined" && diagram_color_service_1.DiagramColorService) === "function" && _b || Object])
], DiagramEndEventComponent);
exports.DiagramEndEventComponent = DiagramEndEventComponent;
var _a, _b;


/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramEventComponent = (function () {
    function DiagramEventComponent(elementRef) {
        this.elementRef = elementRef;
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '', radius: '' };
        this.onError = new core_1.EventEmitter();
        this.center = {};
    }
    DiagramEventComponent.prototype.ngOnInit = function () {
        this.center.x = this.data.x + (this.data.width / 2);
        this.center.y = this.data.y + (this.data.height / 2);
    };
    return DiagramEventComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramEventComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramEventComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramEventComponent.prototype, "iconFillColor", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramEventComponent.prototype, "onError", void 0);
DiagramEventComponent = __decorate([
    core_1.Component({
        selector: 'diagram-event',
        template: __webpack_require__(511)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramEventComponent);
exports.DiagramEventComponent = DiagramEventComponent;
var _a;


/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_color_service_1 = __webpack_require__(18);
var DiagramStartEventComponent = (function () {
    function DiagramStartEventComponent(elementRef, diagramColorService) {
        this.elementRef = elementRef;
        this.diagramColorService = diagramColorService;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '', radius: '' };
    }
    DiagramStartEventComponent.prototype.ngOnInit = function () {
        this.options.radius = 15;
        this.options.strokeWidth = 1;
        this.options.stroke = this.diagramColorService.getBpmnColor(this.data, diagram_color_service_1.DiagramColorService.MAIN_STROKE_COLOR);
        this.options.fillColors = this.diagramColorService.getFillColour(this.data.id);
        this.options.fillOpacity = this.diagramColorService.getFillOpacity();
        this.iconFillColor = 'none';
    };
    return DiagramStartEventComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramStartEventComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramStartEventComponent.prototype, "onError", void 0);
DiagramStartEventComponent = __decorate([
    core_1.Component({
        selector: 'diagram-start-event',
        template: __webpack_require__(512)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof diagram_color_service_1.DiagramColorService !== "undefined" && diagram_color_service_1.DiagramColorService) === "function" && _b || Object])
], DiagramStartEventComponent);
exports.DiagramStartEventComponent = DiagramStartEventComponent;
var _a, _b;


/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_end_event_component_1 = __webpack_require__(244);
var diagram_event_component_1 = __webpack_require__(245);
var diagram_start_event_component_1 = __webpack_require__(246);
__export(__webpack_require__(245));
__export(__webpack_require__(246));
__export(__webpack_require__(244));
exports.DIAGRAM_EVENTS_DIRECTIVES = [
    diagram_event_component_1.DiagramEventComponent,
    diagram_start_event_component_1.DiagramStartEventComponent,
    diagram_end_event_component_1.DiagramEndEventComponent
];


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_color_service_1 = __webpack_require__(18);
var DiagramEventGatewayComponent = (function () {
    function DiagramEventGatewayComponent(elementRef, diagramColorService) {
        this.elementRef = elementRef;
        this.diagramColorService = diagramColorService;
        this.onError = new core_1.EventEmitter();
        this.center = {};
        this.centerPentagon = {};
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: 0.5 };
        this.circleRadiusInner = 10.4;
        this.circleRadiusOuter = 11.7;
        this.pentaStrokeWidth = 1.39999998;
    }
    DiagramEventGatewayComponent.prototype.ngOnInit = function () {
        this.center.x = this.data.x + (this.data.width / 2);
        this.center.y = this.data.y + (this.data.height / 2);
        this.centerPentagon.x = this.data.x;
        this.centerPentagon.y = this.data.y;
        this.options.stroke = this.diagramColorService.getBpmnColor(this.data, diagram_color_service_1.DiagramColorService.MAIN_STROKE_COLOR);
        this.options.fillColors = this.diagramColorService.getFillColour(this.data.id);
        this.options.fillOpacity = this.diagramColorService.getFillOpacity();
    };
    return DiagramEventGatewayComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramEventGatewayComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramEventGatewayComponent.prototype, "onError", void 0);
DiagramEventGatewayComponent = __decorate([
    core_1.Component({
        selector: 'diagram-event-gateway',
        template: __webpack_require__(513)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof diagram_color_service_1.DiagramColorService !== "undefined" && diagram_color_service_1.DiagramColorService) === "function" && _b || Object])
], DiagramEventGatewayComponent);
exports.DiagramEventGatewayComponent = DiagramEventGatewayComponent;
var _a, _b;


/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_color_service_1 = __webpack_require__(18);
var DiagramExclusiveGatewayComponent = (function () {
    function DiagramExclusiveGatewayComponent(elementRef, diagramColorService) {
        this.elementRef = elementRef;
        this.diagramColorService = diagramColorService;
        this.onError = new core_1.EventEmitter();
        this.center = {};
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: 3 };
    }
    DiagramExclusiveGatewayComponent.prototype.ngOnInit = function () {
        this.center.x = this.data.x;
        this.center.y = this.data.y;
        this.width = this.data.width;
        this.height = this.data.height;
        this.options.stroke = this.diagramColorService.getBpmnColor(this.data, diagram_color_service_1.DiagramColorService.MAIN_STROKE_COLOR);
        this.options.fillColors = this.diagramColorService.getFillColour(this.data.id);
        this.options.fillOpacity = this.diagramColorService.getFillOpacity();
    };
    return DiagramExclusiveGatewayComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramExclusiveGatewayComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramExclusiveGatewayComponent.prototype, "onError", void 0);
DiagramExclusiveGatewayComponent = __decorate([
    core_1.Component({
        selector: 'diagram-exclusive-gateway',
        template: __webpack_require__(514)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof diagram_color_service_1.DiagramColorService !== "undefined" && diagram_color_service_1.DiagramColorService) === "function" && _b || Object])
], DiagramExclusiveGatewayComponent);
exports.DiagramExclusiveGatewayComponent = DiagramExclusiveGatewayComponent;
var _a, _b;


/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_color_service_1 = __webpack_require__(18);
var DiagramGatewayComponent = (function () {
    function DiagramGatewayComponent(elementRef, diagramColorService) {
        this.elementRef = elementRef;
        this.diagramColorService = diagramColorService;
        this.onError = new core_1.EventEmitter();
        this.center = {};
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: 2 };
    }
    DiagramGatewayComponent.prototype.ngOnInit = function () {
        this.center.x = this.data.x;
        this.center.y = this.data.y;
        this.width = this.data.width;
        this.height = this.data.height;
        this.options.stroke = this.diagramColorService.getBpmnColor(this.data, diagram_color_service_1.DiagramColorService.MAIN_STROKE_COLOR);
        this.options.fillColors = this.diagramColorService.getFillColour(this.data.id);
        this.options.fillOpacity = this.diagramColorService.getFillOpacity();
    };
    return DiagramGatewayComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramGatewayComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramGatewayComponent.prototype, "onError", void 0);
DiagramGatewayComponent = __decorate([
    core_1.Component({
        selector: 'diagram-gateway',
        template: __webpack_require__(515)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof diagram_color_service_1.DiagramColorService !== "undefined" && diagram_color_service_1.DiagramColorService) === "function" && _b || Object])
], DiagramGatewayComponent);
exports.DiagramGatewayComponent = DiagramGatewayComponent;
var _a, _b;


/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_color_service_1 = __webpack_require__(18);
var DiagramInclusiveGatewayComponent = (function () {
    function DiagramInclusiveGatewayComponent(elementRef, diagramColorService) {
        this.elementRef = elementRef;
        this.diagramColorService = diagramColorService;
        this.onError = new core_1.EventEmitter();
        this.center = {};
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: 2.5, radius: 9.75 };
    }
    DiagramInclusiveGatewayComponent.prototype.ngOnInit = function () {
        this.center.x = this.data.x + (this.data.width / 2);
        this.center.y = this.data.y + (this.data.height / 2);
        this.options.stroke = this.diagramColorService.getBpmnColor(this.data, diagram_color_service_1.DiagramColorService.MAIN_STROKE_COLOR);
        this.options.fillColors = this.diagramColorService.getFillColour(this.data.id);
        this.options.fillOpacity = this.diagramColorService.getFillOpacity();
    };
    return DiagramInclusiveGatewayComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramInclusiveGatewayComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramInclusiveGatewayComponent.prototype, "onError", void 0);
DiagramInclusiveGatewayComponent = __decorate([
    core_1.Component({
        selector: 'diagram-inclusive-gateway',
        template: __webpack_require__(516)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof diagram_color_service_1.DiagramColorService !== "undefined" && diagram_color_service_1.DiagramColorService) === "function" && _b || Object])
], DiagramInclusiveGatewayComponent);
exports.DiagramInclusiveGatewayComponent = DiagramInclusiveGatewayComponent;
var _a, _b;


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_color_service_1 = __webpack_require__(18);
var DiagramParallelGatewayComponent = (function () {
    function DiagramParallelGatewayComponent(elementRef, diagramColorService) {
        this.elementRef = elementRef;
        this.diagramColorService = diagramColorService;
        this.onError = new core_1.EventEmitter();
        this.center = {};
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: 3 };
    }
    DiagramParallelGatewayComponent.prototype.ngOnInit = function () {
        this.center.x = this.data.x;
        this.center.y = this.data.y;
        this.width = this.data.width;
        this.height = this.data.height;
        this.options.stroke = this.diagramColorService.getBpmnColor(this.data, diagram_color_service_1.DiagramColorService.MAIN_STROKE_COLOR);
        this.options.fillColors = this.diagramColorService.getFillColour(this.data.id);
        this.options.fillOpacity = this.diagramColorService.getFillOpacity();
    };
    return DiagramParallelGatewayComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramParallelGatewayComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramParallelGatewayComponent.prototype, "onError", void 0);
DiagramParallelGatewayComponent = __decorate([
    core_1.Component({
        selector: 'diagram-parallel-gateway',
        template: __webpack_require__(517)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof diagram_color_service_1.DiagramColorService !== "undefined" && diagram_color_service_1.DiagramColorService) === "function" && _b || Object])
], DiagramParallelGatewayComponent);
exports.DiagramParallelGatewayComponent = DiagramParallelGatewayComponent;
var _a, _b;


/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramContainerIconEventTaskComponent = (function () {
    function DiagramContainerIconEventTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
    }
    return DiagramContainerIconEventTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramContainerIconEventTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DiagramContainerIconEventTaskComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DiagramContainerIconEventTaskComponent.prototype, "fillColor", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramContainerIconEventTaskComponent.prototype, "onError", void 0);
DiagramContainerIconEventTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-container-icon-event',
        template: __webpack_require__(518)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramContainerIconEventTaskComponent);
exports.DiagramContainerIconEventTaskComponent = DiagramContainerIconEventTaskComponent;
var _a;


/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramIconAlfrescoPublishTaskComponent = (function () {
    function DiagramIconAlfrescoPublishTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '' };
    }
    DiagramIconAlfrescoPublishTaskComponent.prototype.ngOnInit = function () {
        this.position = { x: this.data.x + 4, y: this.data.y + 4 };
        this.options.stroke = 'none';
        this.options.fillColors = '#87C040';
    };
    return DiagramIconAlfrescoPublishTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramIconAlfrescoPublishTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramIconAlfrescoPublishTaskComponent.prototype, "onError", void 0);
DiagramIconAlfrescoPublishTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-icon-alfresco-publish-task',
        template: __webpack_require__(519)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramIconAlfrescoPublishTaskComponent);
exports.DiagramIconAlfrescoPublishTaskComponent = DiagramIconAlfrescoPublishTaskComponent;
var _a;


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramIconBoxPublishTaskComponent = (function () {
    function DiagramIconBoxPublishTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '' };
    }
    DiagramIconBoxPublishTaskComponent.prototype.ngOnInit = function () {
        this.position = { x: this.data.x + 6, y: this.data.y + 6 };
    };
    return DiagramIconBoxPublishTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramIconBoxPublishTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramIconBoxPublishTaskComponent.prototype, "onError", void 0);
DiagramIconBoxPublishTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-icon-box-publish-task',
        template: __webpack_require__(520)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramIconBoxPublishTaskComponent);
exports.DiagramIconBoxPublishTaskComponent = DiagramIconBoxPublishTaskComponent;
var _a;


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramIconBusinessRuleTaskComponent = (function () {
    function DiagramIconBusinessRuleTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '' };
    }
    DiagramIconBusinessRuleTaskComponent.prototype.ngOnInit = function () {
        this.position = { x: this.data.x + 4, y: this.data.y + 4 };
        this.options.stroke = 'none';
        this.options.fillColors = '#72a7d0';
    };
    return DiagramIconBusinessRuleTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramIconBusinessRuleTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramIconBusinessRuleTaskComponent.prototype, "onError", void 0);
DiagramIconBusinessRuleTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-icon-business-rule-task',
        template: __webpack_require__(521)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramIconBusinessRuleTaskComponent);
exports.DiagramIconBusinessRuleTaskComponent = DiagramIconBusinessRuleTaskComponent;
var _a;


/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramIconCamelTaskComponent = (function () {
    function DiagramIconCamelTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '' };
    }
    DiagramIconCamelTaskComponent.prototype.ngOnInit = function () {
        this.position = { x: this.data.x + 8, y: this.data.y + 6 };
        this.options.stroke = 'none';
        this.options.fillColors = '#bd4848';
    };
    return DiagramIconCamelTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramIconCamelTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramIconCamelTaskComponent.prototype, "onError", void 0);
DiagramIconCamelTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-icon-camel-task',
        template: __webpack_require__(522)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramIconCamelTaskComponent);
exports.DiagramIconCamelTaskComponent = DiagramIconCamelTaskComponent;
var _a;


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramIconErrorComponent = (function () {
    function DiagramIconErrorComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '' };
    }
    DiagramIconErrorComponent.prototype.ngOnInit = function () {
        this.position = { x: this.data.x - 1, y: this.data.y - 1 };
        this.options.stroke = 'black';
        this.options.fillColors = this.fillColor;
        this.options.strokeWidth = 1;
    };
    return DiagramIconErrorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramIconErrorComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DiagramIconErrorComponent.prototype, "fillColor", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramIconErrorComponent.prototype, "onError", void 0);
DiagramIconErrorComponent = __decorate([
    core_1.Component({
        selector: 'diagram-icon-error',
        template: __webpack_require__(523)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramIconErrorComponent);
exports.DiagramIconErrorComponent = DiagramIconErrorComponent;
var _a;


/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramIconGoogleDrivePublishTaskComponent = (function () {
    function DiagramIconGoogleDrivePublishTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '' };
    }
    DiagramIconGoogleDrivePublishTaskComponent.prototype.ngOnInit = function () {
        this.position = { x: this.data.x + 6, y: this.data.y + 6 };
    };
    return DiagramIconGoogleDrivePublishTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramIconGoogleDrivePublishTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramIconGoogleDrivePublishTaskComponent.prototype, "onError", void 0);
DiagramIconGoogleDrivePublishTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-icon-google-drive-publish-task',
        template: __webpack_require__(524)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramIconGoogleDrivePublishTaskComponent);
exports.DiagramIconGoogleDrivePublishTaskComponent = DiagramIconGoogleDrivePublishTaskComponent;
var _a;


/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramIconManualTaskComponent = (function () {
    function DiagramIconManualTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '' };
    }
    DiagramIconManualTaskComponent.prototype.ngOnInit = function () {
        this.position = { x: this.data.x + 4, y: this.data.y + 4 };
        this.options.stroke = 'none';
        this.options.fillColors = '#d1b575';
    };
    return DiagramIconManualTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramIconManualTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramIconManualTaskComponent.prototype, "onError", void 0);
DiagramIconManualTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-icon-manual-task',
        template: __webpack_require__(525)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramIconManualTaskComponent);
exports.DiagramIconManualTaskComponent = DiagramIconManualTaskComponent;
var _a;


/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramIconMessageComponent = (function () {
    function DiagramIconMessageComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '' };
    }
    DiagramIconMessageComponent.prototype.ngOnInit = function () {
        this.position = { x: this.data.x + 6, y: this.data.y + 6 };
        this.options.stroke = 'none';
        this.options.fillColors = '#585858';
        this.options.strokeWidth = 1;
    };
    return DiagramIconMessageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramIconMessageComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramIconMessageComponent.prototype, "onError", void 0);
DiagramIconMessageComponent = __decorate([
    core_1.Component({
        selector: 'diagram-icon-message',
        template: __webpack_require__(526)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramIconMessageComponent);
exports.DiagramIconMessageComponent = DiagramIconMessageComponent;
var _a;


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramIconMuleTaskComponent = (function () {
    function DiagramIconMuleTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '' };
    }
    DiagramIconMuleTaskComponent.prototype.ngOnInit = function () {
        this.position = { x: this.data.x + 2, y: this.data.y + 2 };
        this.options.stroke = 'none';
        this.options.fillColors = '#bd4848';
    };
    return DiagramIconMuleTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramIconMuleTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramIconMuleTaskComponent.prototype, "onError", void 0);
DiagramIconMuleTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-icon-mule-task',
        template: __webpack_require__(527)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramIconMuleTaskComponent);
exports.DiagramIconMuleTaskComponent = DiagramIconMuleTaskComponent;
var _a;


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramIconReceiveTaskComponent = (function () {
    function DiagramIconReceiveTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '' };
    }
    DiagramIconReceiveTaskComponent.prototype.ngOnInit = function () {
        this.position = { x: this.data.x + 4, y: this.data.y + 2 };
        this.options.stroke = 'none';
        this.options.fillColors = '#16964d';
    };
    return DiagramIconReceiveTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramIconReceiveTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramIconReceiveTaskComponent.prototype, "onError", void 0);
DiagramIconReceiveTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-icon-receive-task',
        template: __webpack_require__(528)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramIconReceiveTaskComponent);
exports.DiagramIconReceiveTaskComponent = DiagramIconReceiveTaskComponent;
var _a;


/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramIconRestCallTaskComponent = (function () {
    function DiagramIconRestCallTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '' };
    }
    DiagramIconRestCallTaskComponent.prototype.ngOnInit = function () {
        this.position = { x: this.data.x + 2, y: this.data.y + 2 };
        this.options.stroke = 'none';
        this.options.fillColors = '#bd4848';
    };
    return DiagramIconRestCallTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramIconRestCallTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramIconRestCallTaskComponent.prototype, "onError", void 0);
DiagramIconRestCallTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-icon-rest-call-task',
        template: __webpack_require__(529)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramIconRestCallTaskComponent);
exports.DiagramIconRestCallTaskComponent = DiagramIconRestCallTaskComponent;
var _a;


/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramIconScriptTaskComponent = (function () {
    function DiagramIconScriptTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '' };
    }
    DiagramIconScriptTaskComponent.prototype.ngOnInit = function () {
        this.position = { x: this.data.x + 4, y: this.data.y + 4 };
        this.options.stroke = 'none';
        this.options.fillColors = '#72a7d0';
    };
    return DiagramIconScriptTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramIconScriptTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramIconScriptTaskComponent.prototype, "onError", void 0);
DiagramIconScriptTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-icon-script-task',
        template: __webpack_require__(530)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramIconScriptTaskComponent);
exports.DiagramIconScriptTaskComponent = DiagramIconScriptTaskComponent;
var _a;


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramIconSendTaskComponent = (function () {
    function DiagramIconSendTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '' };
    }
    DiagramIconSendTaskComponent.prototype.ngOnInit = function () {
        this.position = { x: this.data.x + 4, y: this.data.y + 4 };
        this.options.stroke = 'none';
        this.options.fillColors = '#16964d';
    };
    return DiagramIconSendTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramIconSendTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramIconSendTaskComponent.prototype, "onError", void 0);
DiagramIconSendTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-icon-send-task',
        template: __webpack_require__(531)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramIconSendTaskComponent);
exports.DiagramIconSendTaskComponent = DiagramIconSendTaskComponent;
var _a;


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramIconServiceTaskComponent = (function () {
    function DiagramIconServiceTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '' };
    }
    DiagramIconServiceTaskComponent.prototype.ngOnInit = function () {
        this.position = { x: this.data.x + 4, y: this.data.y + 4 };
        this.options.stroke = 'none';
        this.options.fillColors = '#72a7d0';
    };
    return DiagramIconServiceTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramIconServiceTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramIconServiceTaskComponent.prototype, "onError", void 0);
DiagramIconServiceTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-icon-service-task',
        template: __webpack_require__(532)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramIconServiceTaskComponent);
exports.DiagramIconServiceTaskComponent = DiagramIconServiceTaskComponent;
var _a;


/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramIconSignalComponent = (function () {
    function DiagramIconSignalComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '' };
    }
    DiagramIconSignalComponent.prototype.ngOnInit = function () {
        this.position = { x: this.data.x - 1, y: this.data.y - 1 };
        this.options.stroke = 'black';
        this.options.fillColors = this.fillColor;
        this.options.strokeWidth = 1;
    };
    return DiagramIconSignalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramIconSignalComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DiagramIconSignalComponent.prototype, "fillColor", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramIconSignalComponent.prototype, "onError", void 0);
DiagramIconSignalComponent = __decorate([
    core_1.Component({
        selector: 'diagram-icon-signal',
        template: __webpack_require__(533)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramIconSignalComponent);
exports.DiagramIconSignalComponent = DiagramIconSignalComponent;
var _a;


/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramIconTimerComponent = (function () {
    function DiagramIconTimerComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
        this.center = {};
        this.circleOptions = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '' };
        this.timerOptions = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '' };
    }
    DiagramIconTimerComponent.prototype.ngOnInit = function () {
        this.center.x = this.data.x + (this.data.width / 2);
        this.center.y = this.data.y + (this.data.height / 2);
        this.circleRadius = 10;
        this.position = { x: this.data.x + 5, y: this.data.y + 5 };
        this.circleOptions.stroke = 'black';
        this.circleOptions.fillColors = 'none';
        this.timerOptions.stroke = 'none';
        this.timerOptions.fillColors = '#585858';
    };
    return DiagramIconTimerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramIconTimerComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramIconTimerComponent.prototype, "onError", void 0);
DiagramIconTimerComponent = __decorate([
    core_1.Component({
        selector: 'diagram-icon-timer',
        template: __webpack_require__(534)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramIconTimerComponent);
exports.DiagramIconTimerComponent = DiagramIconTimerComponent;
var _a;


/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramIconUserTaskComponent = (function () {
    function DiagramIconUserTaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '' };
    }
    DiagramIconUserTaskComponent.prototype.ngOnInit = function () {
        this.position = { x: this.data.x + 4, y: this.data.y + 4 };
        this.options.stroke = 'none';
        this.options.fillColors = '#d1b575';
    };
    return DiagramIconUserTaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramIconUserTaskComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramIconUserTaskComponent.prototype, "onError", void 0);
DiagramIconUserTaskComponent = __decorate([
    core_1.Component({
        selector: 'diagram-icon-user-task',
        template: __webpack_require__(535)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramIconUserTaskComponent);
exports.DiagramIconUserTaskComponent = DiagramIconUserTaskComponent;
var _a;


/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_container_icon_event_component_1 = __webpack_require__(253);
var diagram_icon_alfresco_publish_task_component_1 = __webpack_require__(254);
var diagram_icon_box_publish_task_component_1 = __webpack_require__(255);
var diagram_icon_business_rule_task_component_1 = __webpack_require__(256);
var diagram_icon_camel_task_component_1 = __webpack_require__(257);
var diagram_icon_error_component_1 = __webpack_require__(258);
var diagram_icon_google_drive_publish_task_component_1 = __webpack_require__(259);
var diagram_icon_manual_task_component_1 = __webpack_require__(260);
var diagram_icon_message_component_1 = __webpack_require__(261);
var diagram_icon_mule_task_component_1 = __webpack_require__(262);
var diagram_icon_receive_task_component_1 = __webpack_require__(263);
var diagram_icon_rest_call_task_component_1 = __webpack_require__(264);
var diagram_icon_script_task_component_1 = __webpack_require__(265);
var diagram_icon_send_task_component_1 = __webpack_require__(266);
var diagram_icon_service_task_component_1 = __webpack_require__(267);
var diagram_icon_signal_component_1 = __webpack_require__(268);
var diagram_icon_timer_component_1 = __webpack_require__(269);
var diagram_icon_user_task_component_1 = __webpack_require__(270);
__export(__webpack_require__(267));
__export(__webpack_require__(266));
__export(__webpack_require__(270));
__export(__webpack_require__(260));
__export(__webpack_require__(257));
__export(__webpack_require__(262));
__export(__webpack_require__(254));
__export(__webpack_require__(264));
__export(__webpack_require__(259));
__export(__webpack_require__(255));
__export(__webpack_require__(263));
__export(__webpack_require__(265));
__export(__webpack_require__(256));
__export(__webpack_require__(253));
__export(__webpack_require__(269));
__export(__webpack_require__(258));
__export(__webpack_require__(268));
__export(__webpack_require__(261));
exports.DIAGRAM_ICONS_DIRECTIVES = [
    diagram_icon_service_task_component_1.DiagramIconServiceTaskComponent,
    diagram_icon_send_task_component_1.DiagramIconSendTaskComponent,
    diagram_icon_user_task_component_1.DiagramIconUserTaskComponent,
    diagram_icon_manual_task_component_1.DiagramIconManualTaskComponent,
    diagram_icon_camel_task_component_1.DiagramIconCamelTaskComponent,
    diagram_icon_mule_task_component_1.DiagramIconMuleTaskComponent,
    diagram_icon_alfresco_publish_task_component_1.DiagramIconAlfrescoPublishTaskComponent,
    diagram_icon_rest_call_task_component_1.DiagramIconRestCallTaskComponent,
    diagram_icon_google_drive_publish_task_component_1.DiagramIconGoogleDrivePublishTaskComponent,
    diagram_icon_box_publish_task_component_1.DiagramIconBoxPublishTaskComponent,
    diagram_icon_receive_task_component_1.DiagramIconReceiveTaskComponent,
    diagram_icon_script_task_component_1.DiagramIconScriptTaskComponent,
    diagram_icon_business_rule_task_component_1.DiagramIconBusinessRuleTaskComponent,
    diagram_container_icon_event_component_1.DiagramContainerIconEventTaskComponent,
    diagram_icon_timer_component_1.DiagramIconTimerComponent,
    diagram_icon_error_component_1.DiagramIconErrorComponent,
    diagram_icon_signal_component_1.DiagramIconSignalComponent,
    diagram_icon_message_component_1.DiagramIconMessageComponent
];


/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_color_service_1 = __webpack_require__(18);
var DiagramIntermediateCatchingEventComponent = (function () {
    function DiagramIntermediateCatchingEventComponent(elementRef, diagramColorService) {
        this.elementRef = elementRef;
        this.diagramColorService = diagramColorService;
        this.onError = new core_1.EventEmitter();
        this.center = {};
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: 1 };
    }
    DiagramIntermediateCatchingEventComponent.prototype.ngOnInit = function () {
        this.center.x = this.data.x + (this.data.width / 2);
        this.center.y = this.data.y + (this.data.height / 2);
        this.circleRadiusInner = 12;
        this.circleRadiusOuter = 15;
        this.options.stroke = this.diagramColorService.getBpmnColor(this.data, diagram_color_service_1.DiagramColorService.MAIN_STROKE_COLOR);
        this.options.fillColors = this.diagramColorService.getFillColour(this.data.id);
        this.options.fillOpacity = this.diagramColorService.getFillOpacity();
    };
    return DiagramIntermediateCatchingEventComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramIntermediateCatchingEventComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramIntermediateCatchingEventComponent.prototype, "onError", void 0);
DiagramIntermediateCatchingEventComponent = __decorate([
    core_1.Component({
        selector: 'diagram-intermediate-catching-event',
        template: __webpack_require__(536)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof diagram_color_service_1.DiagramColorService !== "undefined" && diagram_color_service_1.DiagramColorService) === "function" && _b || Object])
], DiagramIntermediateCatchingEventComponent);
exports.DiagramIntermediateCatchingEventComponent = DiagramIntermediateCatchingEventComponent;
var _a, _b;


/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_intermediate_catching_event_component_1 = __webpack_require__(272);
__export(__webpack_require__(272));
exports.DIAGRAM_INTERMEDIATE_EVENTS_DIRECTIVES = [
    diagram_intermediate_catching_event_component_1.DiagramIntermediateCatchingEventComponent
];


/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var raphael_icon_alfresco_publish_component_1 = __webpack_require__(275);
var raphael_icon_box_publish_component_1 = __webpack_require__(276);
var raphael_icon_business_rule_component_1 = __webpack_require__(277);
var raphael_icon_camel_component_1 = __webpack_require__(278);
var raphael_icon_error_component_1 = __webpack_require__(279);
var raphael_icon_google_drive_publish_component_1 = __webpack_require__(280);
var raphael_icon_manual_component_1 = __webpack_require__(281);
var raphael_icon_message_component_1 = __webpack_require__(282);
var raphael_icon_mule_component_1 = __webpack_require__(283);
var raphael_icon_receive_component_1 = __webpack_require__(284);
var raphael_icon_rest_call_component_1 = __webpack_require__(285);
var raphael_icon_script_component_1 = __webpack_require__(286);
var raphael_icon_send_component_1 = __webpack_require__(287);
var raphael_icon_service_component_1 = __webpack_require__(288);
var raphael_icon_signal_component_1 = __webpack_require__(289);
var raphael_icon_timer_component_1 = __webpack_require__(290);
var raphael_icon_user_component_1 = __webpack_require__(291);
__export(__webpack_require__(288));
__export(__webpack_require__(287));
__export(__webpack_require__(291));
__export(__webpack_require__(281));
__export(__webpack_require__(278));
__export(__webpack_require__(283));
__export(__webpack_require__(275));
__export(__webpack_require__(285));
__export(__webpack_require__(280));
__export(__webpack_require__(276));
__export(__webpack_require__(284));
__export(__webpack_require__(286));
__export(__webpack_require__(277));
__export(__webpack_require__(290));
__export(__webpack_require__(279));
__export(__webpack_require__(289));
__export(__webpack_require__(282));
exports.RAPHAEL_ICONS_DIRECTIVES = [
    raphael_icon_service_component_1.RaphaelIconServiceDirective,
    raphael_icon_send_component_1.RaphaelIconSendDirective,
    raphael_icon_user_component_1.RaphaelIconUserDirective,
    raphael_icon_manual_component_1.RaphaelIconManualDirective,
    raphael_icon_camel_component_1.RaphaelIconCamelDirective,
    raphael_icon_mule_component_1.RaphaelIconMuleDirective,
    raphael_icon_alfresco_publish_component_1.RaphaelIconAlfrescoPublishDirective,
    raphael_icon_rest_call_component_1.RaphaelIconRestCallDirective,
    raphael_icon_google_drive_publish_component_1.RaphaelIconGoogleDrivePublishDirective,
    raphael_icon_box_publish_component_1.RaphaelIconBoxPublishDirective,
    raphael_icon_receive_component_1.RaphaelIconReceiveDirective,
    raphael_icon_script_component_1.RaphaelIconScriptDirective,
    raphael_icon_business_rule_component_1.RaphaelIconBusinessRuleDirective,
    raphael_icon_timer_component_1.RaphaelIconTimerDirective,
    raphael_icon_error_component_1.RaphaelIconErrorDirective,
    raphael_icon_signal_component_1.RaphaelIconSignalDirective,
    raphael_icon_message_component_1.RaphaelIconMessageDirective
];


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelIconAlfrescoPublishDirective = (function (_super) {
    __extends(RaphaelIconAlfrescoPublishDirective, _super);
    function RaphaelIconAlfrescoPublishDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelIconAlfrescoPublishDirective.prototype.ngOnInit = function () {
        this.draw(this.position);
    };
    RaphaelIconAlfrescoPublishDirective.prototype.draw = function (position) {
        var startX = position.x + 2;
        var startY = position.y + 2;
        var path1 = this.paper.path("M4.11870968,2.12890323 L6.12954839,0.117935484 L3.10993548,0.118064516 L3.10270968,0.118064516\n         C1.42941935,0.118064516 0.0729032258,1.47458065 0.0729032258,3.14774194 C0.0729032258,4.82116129 1.42929032,6.17754839\n         3.10258065,6.17754839 C3.22967742,6.17754839 3.35470968,6.16877419 3.47767742,6.15354839 C2.8163871,4.85083871\n         3.02954839,3.21793548 4.11870968,2.12890323M6.57032258,3.144 L6.57032258,0.300258065 L4.43522581,2.4356129 L4.43006452,2.44064516\n         C3.24683871,3.62387097 3.24683871,5.54219355 4.43006452,6.72541935 C5.61329032,7.90864516 7.5316129,7.90864516\n         8.71483871,6.72541935 C8.80464516,6.6356129 8.88529032,6.54025806 8.96154839,6.44270968 C7.57341935,5.98864516\n         6.57045161,4.68387097 6.57032258,3.144").attr({
            'stroke': this.stroke,
            'fill': '#87C040',
            'stroke-width': this.strokeWidth
        });
        var startX1 = startX + 1.419355;
        var startY1 = startY + 8.387097;
        path1.transform('T' + startX1 + ',' + startY1);
        path1 = this.paper.path("M10.4411613,10.5153548 L8.43032258,8.50451613 L8.43032258,11.5313548 C8.43032258,13.2047742 9.78683871,\n        14.5611613 11.460129,14.5611613 C13.1334194,14.5611613 14.4899355,13.2047742 14.4899355,11.5314839 C14.4899355,11.4043871\n        14.4811613,11.2793548 14.4659355,11.1563871 C13.1632258,11.8178065 11.5303226,11.6045161 10.4411613,10.5153548M15.0376774,\n        5.91935484 C14.947871,5.82954839 14.8526452,5.74890323 14.7550968,5.67264516 C14.3010323,7.06064516 12.996129,8.06374194\n        11.4563871,8.06374194 L8.61277419,8.06374194 L10.7529032,10.204 C11.936129,11.3872258 13.8545806,11.3872258 15.0376774,10.204\n        C16.2209032,9.02077419 16.2209032,7.10245161 15.0376774,5.91935484").attr({
            'stroke': this.stroke,
            'fill': '#87C040',
            'stroke-width': this.strokeWidth
        });
        path1.transform('T' + startX + ',' + startY);
        path1 = this.paper.path("M5.9083871,1.5636129 C5.78129032,1.5636129 5.65625806,1.57225806 5.53329032,1.58748387\n         C6.19458065,2.89032258 5.98141935,4.52309677 4.89225806,5.61225806 L2.88154839,7.62309677 L5.9083871,7.62309677\n         C7.58154839,7.62309677 8.93806452,6.26658065 8.93806452,4.59329032 C8.93819355,2.92 7.58167742,1.5636129\n         5.9083871,1.5636129").attr({
            'stroke': this.stroke,
            'fill': '#ED9A2D',
            'stroke-width': this.strokeWidth
        });
        var startX2 = startX + 5.548387;
        path1.transform('T' + startX2 + ',' + startY);
        path1 = this.paper.path("M4.58090323,1.0156129 C3.39767742,-0.167483871 1.47935484,-0.167483871 0.296129032,1.01574194\n         C0.206451613,1.10554839 0.125806452,1.20077419 0.0495483871,1.29845161 C1.43754839,1.75251613 2.44064516,3.05729032\n         2.44064516,4.59703226 L2.44064516,7.44077419 L4.57574194,5.30554839 L4.58090323,5.30051613 C5.76412903,4.11729032\n         5.76412903,2.19896774 4.58090323,1.0156129").attr({
            'stroke': this.stroke,
            'fill': '#5698C6',
            'stroke-width': this.strokeWidth
        });
        path1.transform('T' + startX2 + ',' + startY);
        path1 = this.paper.path("M5.54051613,5.61432258 L5.62670968,5.70425806 L7.54632258,7.62387097 L7.5483871,7.62387097\n         L7.5483871,4.604 L7.5483871,4.59677419 C7.5483871,2.92348387 6.19187097,1.56696774 4.51858065,1.56696774 C2.84529032,1.56696774\n         1.48877419,2.92335484 1.48890323,4.59664516 C1.48890323,4.72348387 1.49754839,4.84812903 1.51264516,4.97083871\n         C2.81625806,4.30993548 4.45122581,4.52503226 5.54051613,5.61432258M1.23251613,10.4292903 C1.25625806,10.3588387\n         1.28180645,10.2894194 1.30980645,10.2210323 C1.31329032,10.2123871 1.3163871,10.2036129 1.32,10.1952258 C1.35070968,10.1216774\n         1.38451613,10.0500645 1.42,9.97935484 C1.42774194,9.96374194 1.43574194,9.9483871 1.44387097,9.93277419 C1.4803871,9.86258065\n         1.51883871,9.79354839 1.55987097,9.72632258 C1.56425806,9.71909677 1.56903226,9.71225806 1.57341935,9.70529032\n         C1.6123871,9.64245161 1.65354839,9.58141935 1.6963871,9.52141935 C1.70516129,9.50903226 1.71380645,9.49651613\n         1.72283871,9.48425806 C1.76890323,9.42154839 1.81690323,9.36064516 1.86683871,9.30129032 C1.87703226,9.28916129\n         1.88735484,9.27741935 1.89780645,9.26567742 C1.94658065,9.20916129 1.99690323,9.15406452 2.04916129,9.10090323\n         C2.05380645,9.09625806 2.05806452,9.09135484 2.06270968,9.08670968 C2.11832258,9.03083871 2.17625806,8.97741935\n         2.23548387,8.92554839 C2.2483871,8.91419355 2.26129032,8.90296774 2.27432258,8.89187097 C2.33393548,8.84103226\n         2.39496774,8.79212903 2.45780645,8.74529032 C2.46606452,8.73922581 2.47470968,8.73354839 2.48296774,8.7276129\n         C2.54167742,8.68490323 2.60180645,8.64412903 2.66322581,8.60503226 C2.67535484,8.59729032 2.68735484,8.58929032\n         2.6996129,8.58167742 C2.76593548,8.54064516 2.83380645,8.50206452 2.90296774,8.46541935 C2.91754839,8.45780645\n         2.93225806,8.45045161 2.94696774,8.44296774 C3.016,8.40774194 3.08593548,8.37406452 3.15741935,8.34348387 C3.16090323,8.34206452\n         3.16425806,8.3403871 3.16774194,8.33883871 C3.24167742,8.30748387 3.31729032,8.27948387 3.39380645,8.25316129\n         C3.41032258,8.24748387 3.42670968,8.24180645 3.44335484,8.2363871 C3.51909677,8.21174194 3.59587097,8.18903226\n         3.67380645,8.16929032 C3.68567742,8.16645161 3.69793548,8.16387097 3.70980645,8.16116129 C3.78206452,8.14374194\n         3.85509677,8.12877419 3.92890323,8.116 C3.94270968,8.11367742 3.9563871,8.11083871 3.97019355,8.10877419 C4.05032258,8.09587097\n         4.13148387,8.08619355 4.21329032,8.07896774 C4.23096774,8.07741935 4.24877419,8.07625806 4.26645161,8.07483871\n         C4.35109677,8.06877419 4.43612903,8.06451613 4.52232258,8.06451613 L7.36606452,8.0643871 L5.22580645,5.92412903\n         C4.04258065,4.74103226 2.12412903,4.74090323 0.941032258,5.92412903 C-0.242193548,7.10735484 -0.242193548,9.02567742\n         0.941032258,10.2089032 C1.03070968,10.2985806 1.12464516,10.3814194 1.22206452,10.4575484 C1.22529032,10.448 1.22929032,10.4388387\n         1.23251613,10.4292903").attr({
            'stroke': this.stroke,
            'fill': '#5698C6',
            'stroke-width': this.strokeWidth
        });
        path1.transform('T' + startX + ',' + startY);
        path1 = this.paper.path("M5.23290323,5.92412903 L6.92748387,7.61870968 L4.64980645,7.61870968 L4.52064516,7.62141935\n         C3.13354839,7.62141935 1.96425806,6.68929032 1.60477419,5.41729032 C2.75870968,4.77019355 4.24619355,4.93754839\n         5.22787097,5.91909677 L5.23290323,5.92412903M7.54722581,4.59612903 L7.54722581,6.99264516 L5.93664516,5.38206452\n         L5.84348387,5.29264516 C4.86258065,4.31187097 4.69483871,2.82580645 5.34012903,1.67225806 C6.61367742,2.03070968\n         7.54722581,3.20090323 7.54722581,4.58890323 L7.54722581,4.59612903M10.1385806,5.29819355 L8.444,6.99290323 L8.444,4.71522581\n         L8.44129032,4.58606452 C8.44129032,3.19896774 9.37341935,2.02954839 10.6454194,1.67019355 C11.2925161,2.82412903\n         11.1251613,4.3116129 10.1436129,5.29316129 L10.1385806,5.29819355").attr({
            'stroke': this.stroke,
            'fill': '#446BA5',
            'stroke-width': this.strokeWidth
        });
        path1.transform('T' + startX + ',' + startY);
        path1 = this.paper.path("M11.4548387,7.61677419 L9.05832258,7.61677419 L10.6689032,6.00619355 L10.7583226,5.91303226\n         C11.7390968,4.93212903 13.2251613,4.7643871 14.3787097,5.40967742 C14.0202581,6.68322581 12.8500645,7.61677419\n         11.4620645,7.61677419 L11.4548387,7.61677419").attr({
            'stroke': this.stroke,
            'fill': '#FFF101',
            'stroke-width': this.strokeWidth
        });
        path1.transform('T' + startX + ',' + startY);
        path1 = this.paper.path("M10.7470968,10.192 L9.05251613,8.49741935 L11.3301935,8.49741935 L11.4593548,8.49470968\n         C12.8464516,8.49483871 14.0157419,9.42696774 14.3752258,10.6989677 C13.2211613,11.3459355 11.7338065,11.1787097\n         10.752129,10.1970323 L10.7470968,10.192M8.43729032,11.5174194 L8.43729032,9.12090323 L10.047871,10.7314839 L10.1411613,10.8209032\n         C11.1219355,11.8018065 11.2896774,13.2876129 10.6443871,14.4412903 C9.37083871,14.0828387 8.43729032,12.9127742\n         8.43729032,11.5245161 L8.43729032,11.5174194M5.86193548,10.8296774 L7.55651613,9.13496774 L7.55651613,11.4126452\n         L7.55922581,11.5418065 C7.55922581,12.9289032 6.62709677,14.0983226 5.35509677,14.4578065 C4.708,13.3036129 4.87535484,11.8162581\n         5.85690323,10.8347097 L5.86193548,10.8296774M4.53251613,8.50993548 L6.92903226,8.50993548 L5.31845161,10.1205161\n         L5.22903226,10.2136774 C4.24812903,11.1945806 2.76219355,11.3623226 1.60851613,10.7170323 C1.96709677,9.44335484\n         3.13716129,8.50993548 4.52529032,8.50993548 L4.53251613,8.50993548").attr({
            'stroke': this.stroke,
            'fill': '#45AB47',
            'stroke-width': this.strokeWidth
        });
        path1.transform('T' + startX + ',' + startY);
    };
    return RaphaelIconAlfrescoPublishDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconAlfrescoPublishDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelIconAlfrescoPublishDirective.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelIconAlfrescoPublishDirective.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelIconAlfrescoPublishDirective.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelIconAlfrescoPublishDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconAlfrescoPublishDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconAlfrescoPublishDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconAlfrescoPublishDirective.prototype, "fillOpacity", void 0);
RaphaelIconAlfrescoPublishDirective = __decorate([
    core_1.Directive({ selector: 'raphael-icon-alfresco-publish' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelIconAlfrescoPublishDirective);
exports.RaphaelIconAlfrescoPublishDirective = RaphaelIconAlfrescoPublishDirective;
var _a, _b, _c;


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelIconBoxPublishDirective = (function (_super) {
    __extends(RaphaelIconBoxPublishDirective, _super);
    function RaphaelIconBoxPublishDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelIconBoxPublishDirective.prototype.ngOnInit = function () {
        this.draw(this.position);
    };
    RaphaelIconBoxPublishDirective.prototype.draw = function (position) {
        var image = this.paper.image();
        image.attr({ 'x': position.x });
        image.attr({ 'y': position.y });
        image.attr({ 'id': 'image3398' });
        image.attr({ 'preserveAspectRatio': 'none' });
        image.attr({ 'height': '16' });
        image.attr({ 'width': '17' });
        image.attr({ 'src': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAADxG9hnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBI WXMAAA7DAAAO\n        wwHHb6hkAAAAB3RJTUUH3wQXDxwCFNe28AAACsdJREFUWMOVmGmMXtV5x3/POfe+ y2yeGc/mwbMZG9tDMGBTKC5GCU4pbYmSRlmowlIFJWnUprSiy4dI/UA/9EsVifZDmy\n        ZIxEpo1Cql UKICqbABG+x4X4M9iz2bxzOefXnfee+95zz9cN9Z7NqVeqSje3XPec/5n/Ns//8rAAd6xvj0lmYA VJWTI9fN2d5BikslrDEYY0ABIX0aUBUUUJS1TZB0HZS\n        lUsz8fBHF09neKnFU0t964B5trcoqwA8O fsI3HtmW/u7Hx3p5+oHNqCr7DpzLX3dh1+xC4Z7p2dnGKE7UGmOsNTYFIuXtUlQqsgJkGSdrgBRL 8dLCYlRUUTa1NrYXiqWZ\n        jqb6q/vPDHz43S/vXHika0Phr984yUufv5/llfnJ0f473z9/7c+P9E8+ 3zdRCAuJR8SU1zUpBhFWL0BATAqhvIqIlCEIqK65JfDOIHgqpUT3HesW9mxreOWejfUvPfPrm6\n        de fu8Sgary2sm+5v84NvT9d85P7Z1zhkwmTyZD+dSAKFI2jyAgqQEMkoJFQR1ZC1W5gMowxAgkzlOI HPMlh3ceFUtCjuPXtap3cuSFL9ybdKrq10RkMfi7Nz42g/P+2YP\n        9i3sjm6E6a8snS0+ogBcwIki5 g2AkPXGAsqk+z/YNVWxuyLBxXZ66XIbQQimOmSgkDM9G9IwVODda5OpcEc0YYs3xbs/C73z39VMv Ai8FP/rlqG1vafjLGZenusKn121W\n        7jr1TxFE0tsQI/iyibbVBTzZvZ6H22vY1lJDQ0WW27Vrs4uc G5vj/d453jw7yWQxomQqwiODs59T1X1yaHh+17dfPXxswuXAWlTBiCcbQmANiVOiRMBabGgJ8YiB xzqre\n        W5nM/e31pALLKjiEXTVZW5oxnjAML2UcGJoin86PMbxy9Osr8n3/enu9q8HxVLcsCBVhLkM m+vgs1tquW9DDY1VGUJrSBLPeCHh+Ng8H12Z4+oiPHlXNd9+cANNFVkExTm\n        HUvYVuCmg0+a9AVXW ZSyfvrORtroKXj6YZf/lJekfnzNB7EPfWak8/UgLj29dzzoLYRAgxiCSRoDz8FBHFc/c18CV2ZjN 9TmachY0wavBi8Gs2V3XRMvab6Lg1QHQWV/J\n        d/ZspCE3zPTEJHJqaPpJE9j/3Lo+g8Ou5AK95QWv 5gu5jS/oTUBuNc+veU4Xo/5LvUPPB1XJXKmtaQOJBy+G5Xwp3L7pmsXkFmM3g+Y2cwxQH0J3SwVB oF5iNXhA8MwWI\n        2bmCzTWVJLPhssZ/fZgbtpJ1jirQpqHuPUcRfHe4zwYZy0JDu89onDw3AB/9f23 OdU/jqriVHH+f3fvFbyCu7FrecyV328eT+c4vDq8ehwCJiRQ9ah68EKMUIqU2FuKCTi\n        nGFG8rta7 /09bk+XT5Kg3FUgRvFdUlQA1OA9oeiPOe6JE8R7EeMQYAgSngHN4XWN5gdAYjKRm8gqJdxgVQptG W+I9qecp1gjGGiLn0nKhgvfg1BMYsXgVVD1GhSRRojiB\n        QBgan2N4bIal2FNRmWFLWwP1VXmiOCaw lmKUcGHkOlOzi6gIrfXVbG5vpFhIOHplmNb6dWxsqsEliljPxGLCJ5eHufuuNirCEJzHe/B4AqVs V1VUDbFXPCH/fbSPn5c8Y\n        9MFlhzks8qm5jy/vauL3Xd3cunqJG8e6uHc0CKzxRIiSktVhvs6a7l3 +0b+4d9PcO+2dp7bu536qiyJwr53z3Csd5pvSciD3R2oJqh6BJMC8d7jUcQrSRnUsb4ZjFvioe2\n        t 1FXn6RuZ5YPTE4xMR4xMFjk7MMGBs9fobKzm4a2NJAkcPj/I5fEi50fnaaqv5t2TA7TUZXjqM3fz swOXOHB+nHwIHRvW45wDPIpHRctA1OMUrNG0dMdKpS3ywlceYEdH\n        E3nxLMbCW0f6eW1/H+NjPRSi iIe33sFzn+2mqTbE43li9xb+9tX36BldYPeWOhpmS7x+qJ/J2QJHL00zO1/gxT94lLqqLN4nqfNq enADoF5RlEQdcaLMLSh7793KrrZGq\n        oMAE+aorgj4zQc6aGsMGC0uEeQse3dtoLU5AyHYTEBbfZ4v fuY+xq8vMF8SvvToVqbmIn52ZJSe0SmeeqybHe1VpJGaRov3HlQxKCu5QhWcV6J4kfaWPCYTgkaI i1CvZM\n        XQsq6G+SWhtrKC9ZWWRAOs8+ASrEvYvqGK+WKJycWYXXc1cc+mJuYWCmxsruOJnW3ENkS9 T3ORLqcEg1FNP3hVRIR8JsCZkMtjBeKlmIiQJbEk4lmMPSMTc+Airs8sMDn\n        nMV6JsSQIkVF6xhZA IGOFU73XOXFpDGOy9A5e54MLw5jYk6zsCd4L6srZ22uaDb1Tupqr6Wqs4Y0PL3Cy9xoLhRgflZiZ KfLeyUGOX54jlw0Znlzg5ycG6RufphTHRMUS\n        V8aK7Hv7LLlcnqxVXnnnIpE37OluoKaqgu/962nO DU0ABvW+nIU9Xj32j1/4sztNmH0mNY1j/boKioWYD341wcELw0wvRPSPFXj98BV+8ovztDXV8IXf 6MAay9tHB+i7O\n        svkfMzRnkl++NYZLo4ssq1jHQtFz/GeCb766Cb+5Ev3Uygucax3itN9E+zZ0UJF NkiTo+q0c8mbAWVeqmVfMVb53T2bSIzjv45d46f7L7EQRdRVV7Jz60Z+b3c7TzzYydm\n        +KSozliMX J/no7AmMtWxsruTzezr5te1NvPTKIR75VCuf29NFzsJTj22l7+oivzh2hV8NTdF4d2vqqGXaKZcu Dz1uK6reiZYLFoKx6ZVdHJpm4FqBQqLUVgTc1VpDZ2sd\n        LooIg4Dx2QIXBme5PlPEWENLXYYdXQ0k GA6dHqSjtZbu9lqS2GMtXJ4ocubSKA99qp3mKluWSaaf0tLzcrF/4PFMde07S7HDeY9XA+IRlMBa UmmTclH1CbEvs3hVjBGsT\n        TWPR1Dv8c6hCJkgIFGfyohyBbTWYIwldh4rihXBCv2+VHw+ACFOkrI+ AVUHKB5wSZKWt7U0UFZ5qfdpkVzhHivVVSlG0YosWZayPnGIeIwIxhhCa7CizJWWMKoq10avYa1\n        d ob5ry7X+HyzNAQkpZ7m5xC9vrrcYMyiBKNnQEEURx48fwyg6MHBlgFwuR2ADjLHp7SzTK13loemp pdxZUX6p8DJrWOqNXcQgRhBjMNZggpBcGOCimJ6+y766pt7Zjs3d\n        s9bIsyC1dzTXpYuLsLyskbL2 Lj9FTDpuZGVsZW5ZKouk7+k/CZKaQiAwQmgt+UAIrGFgZJSPD//y9Lee/vL3gj0P7XRDV6/9zcGD B39obEBXexvWeJwX3HJNuNFJVo0js\n        sJPV+XoKpsTkbJUNRj1ZeAGj/JJ/xAffvD+bPuGxn8TkUUB +MdX9mUix99fm5r7eldXV9jR3ka+IpdGg9eyxExt4ctJR8vMWVbASJmHKcYuy1NTHhdEPOphYXGR viuDjA\n        4Nz9XlzasvfucPXwCQH+z7Kd949il6e3qCt97d/xdjUzNfyVTUbAyy2bwxqWwymBuqpV/z XMtlRTXVyUawYjDWrgDxeESdxHFpJi4sjqyvrXntxT/65ssAR06dSw/zzz/6\n        F7753O8D8NHHR9rO nL+wZ2pqYl0cxyoIoqsm0LK49ehKKLNGp3gE1JRF+9qoU3JBIDVVuZGvffWLZ2oa7rgCcPLMBe7f 0c3/APbD8KaWhlC3AAAAAElFTkSuQmCC" });
    };
    return RaphaelIconBoxPublishDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconBoxPublishDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelIconBoxPublishDirective.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelIconBoxPublishDirective.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelIconBoxPublishDirective.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelIconBoxPublishDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconBoxPublishDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconBoxPublishDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconBoxPublishDirective.prototype, "fillOpacity", void 0);
RaphaelIconBoxPublishDirective = __decorate([
    core_1.Directive({ selector: 'raphael-icon-box-publish' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelIconBoxPublishDirective);
exports.RaphaelIconBoxPublishDirective = RaphaelIconBoxPublishDirective;
var _a, _b, _c;


/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelIconBusinessRuleDirective = (function (_super) {
    __extends(RaphaelIconBusinessRuleDirective, _super);
    function RaphaelIconBusinessRuleDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelIconBusinessRuleDirective.prototype.ngOnInit = function () {
        this.draw(this.position);
    };
    RaphaelIconBusinessRuleDirective.prototype.draw = function (position) {
        var path1 = this.paper.path("m 1,2 0,14 16,0 0,-14 z m 1.45458,5.6000386 2.90906,0 0,2.7999224 -2.90906,0 z m 4.36364,0 8.72718,0\n         0,2.7999224 -8.72718,0 z m -4.36364,4.1998844 2.90906,0 0,2.800116 -2.90906,0 z m\n         4.36364,0 8.72718,0 0,2.800116 -8.72718,0 z").attr({
            'stroke': this.stroke,
            'fill': this.fillColors
        });
        return path1.transform('T' + position.x + ',' + position.y);
    };
    return RaphaelIconBusinessRuleDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconBusinessRuleDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelIconBusinessRuleDirective.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelIconBusinessRuleDirective.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelIconBusinessRuleDirective.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelIconBusinessRuleDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconBusinessRuleDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconBusinessRuleDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconBusinessRuleDirective.prototype, "fillOpacity", void 0);
RaphaelIconBusinessRuleDirective = __decorate([
    core_1.Directive({ selector: 'raphael-icon-business-rule' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelIconBusinessRuleDirective);
exports.RaphaelIconBusinessRuleDirective = RaphaelIconBusinessRuleDirective;
var _a, _b, _c;


/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelIconCamelDirective = (function (_super) {
    __extends(RaphaelIconCamelDirective, _super);
    function RaphaelIconCamelDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelIconCamelDirective.prototype.ngOnInit = function () {
        this.draw(this.position);
    };
    RaphaelIconCamelDirective.prototype.draw = function (position) {
        var path1 = this.paper.path("m 8.1878027,15.383782 c -0.824818,-0.3427 0.375093,-1.1925 0.404055,-1.7743 0.230509,-0.8159\n         -0.217173,-1.5329 -0.550642,-2.2283 -0.106244,-0.5273 -0.03299,-1.8886005 -0.747194,-1.7818005 -0.712355,0.3776 -0.9225,1.2309005\n         -1.253911,1.9055005 -0.175574,1.0874 -0.630353,2.114 -0.775834,3.2123 -0.244009,0.4224 -1.741203,0.3888 -1.554386,-0.1397\n         0.651324,-0.3302 1.13227,-0.9222 1.180246,-1.6705 0.0082,-0.7042 -0.133578,-1.3681 0.302178,-2.0083 0.08617,-0.3202\n         0.356348,-1.0224005 -0.218996,-0.8051 -0.694517,0.2372 -1.651062,0.6128 -2.057645,-0.2959005 -0.696769,0.3057005 -1.102947,-0.611\n         -1.393127,-1.0565 -0.231079,-0.6218 -0.437041,-1.3041 -0.202103,-1.9476 -0.185217,-0.7514 -0.39751099,-1.5209 -0.35214999,-2.301\n         -0.243425,-0.7796 0.86000899,-1.2456 0.08581,-1.8855 -0.76078999,0.1964 -1.41630099,-0.7569 -0.79351899,-1.2877 0.58743,-0.52829998\n         1.49031699,-0.242 2.09856399,-0.77049998 0.816875,-0.3212 1.256619,0.65019998 1.923119,0.71939998 0.01194,0.7333 -0.0031,1.5042\n         -0.18417,2.2232 -0.194069,0.564 -0.811196,1.6968 0.06669,1.9398 0.738382,-0.173 1.095723,-0.9364 1.659041,-1.3729 0.727298,-0.3962\n         1.093982,-1.117 1.344137,-1.8675 0.400558,-0.8287 1.697676,-0.6854 1.955367,0.1758 0.103564,0.5511 0.9073983,1.7538\n         1.2472763,0.6846 0.121868,-0.6687 0.785541,-1.4454 1.518183,-1.0431 0.813587,0.4875 0.658233,1.6033 1.285504,2.2454\n         0.768715,0.8117 1.745394,1.4801 2.196633,2.5469 0.313781,0.8074 0.568552,1.707 0.496624,2.5733 -0.35485,0.8576005 -1.224508,-0.216\n         -0.64725,-0.7284 0.01868,-0.3794 -0.01834,-1.3264 -0.370249,-1.3272 -0.123187,0.7586 -0.152778,1.547 -0.10869,2.3154\n         0.270285,0.6662005 1.310741,0.7653005 1.060553,1.6763005 -0.03493,0.9801 0.294343,1.9505 0.148048,2.9272 -0.320479,0.2406\n         -0.79575,0.097 -1.185062,0.1512 -0.165725,0.3657 -0.40138,0.921 -1.020848,0.6744 -0.564671,0.1141 -1.246404,-0.266\n         -0.578559,-0.7715 0.679736,-0.5602 0.898618,-1.5362 0.687058,-2.3673 -0.529674,-1.108 -1.275984,-2.0954005 -1.839206,-3.1831005\n         -0.634619,-0.1004 -1.251945,0.6779 -1.956789,0.7408 -0.6065893,-0.038 -1.0354363,-0.06 -0.8495673,0.6969005 0.01681,0.711\n         0.152396,1.3997 0.157345,2.1104 0.07947,0.7464 0.171287,1.4944 0.238271,2.2351 0.237411,1.0076 -0.687542,1.1488 -1.414811,0.8598\n         z m 6.8675483,-1.8379 c 0.114364,-0.3658 0.206751,-1.2704 -0.114466,-1.3553 -0.152626,0.5835 -0.225018,1.1888 -0.227537,1.7919\n         0.147087,-0.1166 0.265559,-0.2643 0.342003,-0.4366 z").attr({
            'stroke': this.stroke,
            'fill': this.fillColors
        });
        return path1.transform('T' + position.x + ',' + position.y);
    };
    return RaphaelIconCamelDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconCamelDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelIconCamelDirective.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelIconCamelDirective.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelIconCamelDirective.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelIconCamelDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconCamelDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconCamelDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconCamelDirective.prototype, "fillOpacity", void 0);
RaphaelIconCamelDirective = __decorate([
    core_1.Directive({ selector: 'raphael-icon-camel' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelIconCamelDirective);
exports.RaphaelIconCamelDirective = RaphaelIconCamelDirective;
var _a, _b, _c;


/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelIconErrorDirective = (function (_super) {
    __extends(RaphaelIconErrorDirective, _super);
    function RaphaelIconErrorDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelIconErrorDirective.prototype.ngOnInit = function () {
        this.draw(this.position);
    };
    RaphaelIconErrorDirective.prototype.draw = function (position) {
        var path1 = this.paper.path("M 22.820839,11.171502 L 19.36734,24.58992 L 13.54138,14.281819 L 9.3386512,20.071607\n        L 13.048949,6.8323057 L 18.996148,16.132659 L 22.820839,11.171502 z").attr({
            'opacity': 1,
            'stroke': this.stroke,
            'fill': this.fillColors
        });
        return path1.transform('T' + position.x + ',' + position.y);
    };
    return RaphaelIconErrorDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconErrorDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelIconErrorDirective.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelIconErrorDirective.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelIconErrorDirective.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelIconErrorDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconErrorDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconErrorDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconErrorDirective.prototype, "fillOpacity", void 0);
RaphaelIconErrorDirective = __decorate([
    core_1.Directive({ selector: 'raphael-icon-error' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelIconErrorDirective);
exports.RaphaelIconErrorDirective = RaphaelIconErrorDirective;
var _a, _b, _c;


/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelIconGoogleDrivePublishDirective = (function (_super) {
    __extends(RaphaelIconGoogleDrivePublishDirective, _super);
    function RaphaelIconGoogleDrivePublishDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelIconGoogleDrivePublishDirective.prototype.ngOnInit = function () {
        this.draw(this.position);
    };
    RaphaelIconGoogleDrivePublishDirective.prototype.draw = function (position) {
        var image = this.paper.image();
        image.attr({ 'x': position.x });
        image.attr({ 'y': position.y });
        image.attr({ 'id': 'image3398' });
        image.attr({ 'preserveAspectRatio': 'none' });
        image.attr({ 'height': '16' });
        image.attr({ 'width': '17' });
        image.attr({ 'src': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBA\n        JqcGAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIHSURBVDiNpVI7a1RREP7mzLl3d+9mScxaiBLFwohxQcXCwjwao/gqFAQhRGOphQgmgs9oGxaV\n        gFhpYPUPGMFCCzEqCgETg0uK4CuFoLhZyWNf994zFrqy9xJWwQ+mOB8z33wzZ4D/BIWJppG+plstc+mjK9yttbzALHExcoDaRxdqeRUWcFkGBz7G1s152CCQ7dUAqNOLuZf\n        qOmi439MmhifF86e6uLj4MFXoCuVXWPkp2vZkZlkHYvRNAJYwtz79oXdMLfFMSMD2Dd9YdoSGTO9hQLoBQBESQvLpUNaZD1sGsN8d390dFBjpiwooHVBW6tvXCr2H4EFo6L\n        wR97pkj9h/BByWfgDrA4lRTWDvHIPOAihVaWO8txCkygu50wBAsbsnWpT2pwHEA/sgXC30Zq4BwJfHHRdY0R4nxp5mbFGEJIB5l2SjVtoMhYsBfC5EikPVh7Z4uFyqnKq43\n        hoQFrXCIydCjZbWlyl+79gzCDprq1dPnnyhS8nNZDmvRVmbAIDhKyL5/e2kjKi4pbwxLQZniDAOgAHAybW90aXmncp2xoSsvdVDMWBAAi69sqsvqsLxzARB7vxaMHvJDwcT\n        ZCVeClnhIwqC5Pb08Kp3CgBUxT4PINc4u+u54uY8FLfXLQa+sx0dRNV2eXSi6OzryK2c7Wkl0msB5OuG0JVsOvnqL03+DT8BxkC5RkIpSlIAAAAASUVORK5CYII=" });
    };
    return RaphaelIconGoogleDrivePublishDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconGoogleDrivePublishDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelIconGoogleDrivePublishDirective.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelIconGoogleDrivePublishDirective.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelIconGoogleDrivePublishDirective.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelIconGoogleDrivePublishDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconGoogleDrivePublishDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconGoogleDrivePublishDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconGoogleDrivePublishDirective.prototype, "fillOpacity", void 0);
RaphaelIconGoogleDrivePublishDirective = __decorate([
    core_1.Directive({ selector: 'raphael-icon-google-drive-publish' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelIconGoogleDrivePublishDirective);
exports.RaphaelIconGoogleDrivePublishDirective = RaphaelIconGoogleDrivePublishDirective;
var _a, _b, _c;


/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelIconManualDirective = (function (_super) {
    __extends(RaphaelIconManualDirective, _super);
    function RaphaelIconManualDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelIconManualDirective.prototype.ngOnInit = function () {
        this.draw(this.position);
    };
    RaphaelIconManualDirective.prototype.draw = function (position) {
        var path1 = this.paper.path("m 17,9.3290326 c -0.0069,0.5512461 -0.455166,1.0455894 -0.940778,1.0376604 l -5.792746,0 c\n        0.0053,0.119381 0.0026,0.237107 0.0061,0.355965 l 5.154918,0 c 0.482032,-0.0096 0.925529,0.49051 0.919525,1.037574 -0.0078,0.537128\n        -0.446283,1.017531 -0.919521,1.007683 l -5.245273,0 c -0.01507,0.104484 -0.03389,0.204081 -0.05316,0.301591 l 2.630175,0\n        c 0.454137,-0.0096 0.872112,0.461754 0.866386,0.977186 C 13.619526,14.554106 13.206293,15.009498 12.75924,15 L 3.7753054,15\n        C 3.6045812,15 3.433552,14.94423 3.2916363,14.837136 c -0.00174,0 -0.00436,0 -0.00609,0 C 1.7212035,14.367801\n        0.99998255,11.458641 1,11.458641 L 1,7.4588393 c 0,0 0.6623144,-1.316333 1.8390583,-2.0872584 1.1767614,-0.7711868\n        6.8053358,-2.40497 7.2587847,-2.8052901 0.453484,-0.40032 1.660213,1.4859942 0.04775,2.4010487 C 8.5332315,5.882394\n        8.507351,5.7996113 8.4370292,5.7936859 l 6.3569748,-0.00871 c 0.497046,-0.00958 0.952273,0.5097676 0.94612,1.0738232\n        -0.0053,0.556126 -0.456176,1.0566566 -0.94612,1.0496854 l -4.72435,0 c 0.01307,0.1149374 0.0244,0.2281319 0.03721,0.3498661\n        l 5.952195,0 c 0.494517,-0.00871 0.947906,0.5066305 0.940795,1.0679848 z").attr({
            'opacity': 1,
            'stroke': this.stroke,
            'fill': this.fillColors
        });
        return path1.transform('T' + position.x + ',' + position.y);
    };
    return RaphaelIconManualDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconManualDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelIconManualDirective.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelIconManualDirective.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelIconManualDirective.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelIconManualDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconManualDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconManualDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconManualDirective.prototype, "fillOpacity", void 0);
RaphaelIconManualDirective = __decorate([
    core_1.Directive({ selector: 'raphael-icon-manual' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelIconManualDirective);
exports.RaphaelIconManualDirective = RaphaelIconManualDirective;
var _a, _b, _c;


/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelIconMessageDirective = (function (_super) {
    __extends(RaphaelIconMessageDirective, _super);
    function RaphaelIconMessageDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelIconMessageDirective.prototype.ngOnInit = function () {
        this.draw(this.position);
    };
    RaphaelIconMessageDirective.prototype.draw = function (position) {
        var path1 = this.paper.path("M 1 3 L 9 11 L 17 3 L 1 3 z M 1 5 L 1 13 L 5 9 L 1 5 z M 17 5 L 13 9 L 17 13 L 17 5 z M 6 10 L 1 15\n        L 17 15 L 12 10 L 9 13 L 6 10 z").attr({
            'opacity': this.fillOpacity,
            'stroke': this.stroke,
            'strokeWidth': this.strokeWidth,
            'fill': this.fillColors
        });
        return path1.transform('T' + position.x + ',' + position.y);
    };
    return RaphaelIconMessageDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconMessageDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelIconMessageDirective.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelIconMessageDirective.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelIconMessageDirective.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelIconMessageDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconMessageDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconMessageDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconMessageDirective.prototype, "fillOpacity", void 0);
RaphaelIconMessageDirective = __decorate([
    core_1.Directive({ selector: 'raphael-icon-message' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelIconMessageDirective);
exports.RaphaelIconMessageDirective = RaphaelIconMessageDirective;
var _a, _b, _c;


/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelIconMuleDirective = (function (_super) {
    __extends(RaphaelIconMuleDirective, _super);
    function RaphaelIconMuleDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelIconMuleDirective.prototype.ngOnInit = function () {
        this.draw(this.position);
    };
    RaphaelIconMuleDirective.prototype.draw = function (position) {
        var path1 = this.paper.path("M 8,0 C 3.581722,0 0,3.5817 0,8 c 0,4.4183 3.581722,8 8,8 4.418278,0 8,-3.5817 8,-8 L 16,7.6562\n         C 15.813571,3.3775 12.282847,0 8,0 z M 5.1875,2.7812 8,7.3437 10.8125,2.7812 c 1.323522,0.4299 2.329453,1.5645 2.8125,2.8438\n         1.136151,2.8609 -0.380702,6.4569 -3.25,7.5937 -0.217837,-0.6102 -0.438416,-1.2022 -0.65625,-1.8125 0.701032,-0.2274\n         1.313373,-0.6949 1.71875,-1.3125 0.73624,-1.2317 0.939877,-2.6305 -0.03125,-4.3125 l -2.75,4.0625 -0.65625,0 -0.65625,0 -2.75,-4\n         C 3.5268433,7.6916 3.82626,8.862 4.5625,10.0937 4.967877,10.7113 5.580218,11.1788 6.28125,11.4062 6.063416,12.0165 5.842837,12.6085\n         5.625,13.2187 2.755702,12.0819 1.238849,8.4858 2.375,5.625 2.858047,4.3457 3.863978,3.2112 5.1875,2.7812 z").attr({
            'stroke': this.stroke,
            'fill': this.fillColors
        });
        return path1.transform('T' + position.x + ',' + position.y);
    };
    return RaphaelIconMuleDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconMuleDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelIconMuleDirective.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelIconMuleDirective.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelIconMuleDirective.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelIconMuleDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconMuleDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconMuleDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconMuleDirective.prototype, "fillOpacity", void 0);
RaphaelIconMuleDirective = __decorate([
    core_1.Directive({ selector: 'raphael-icon-mule' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelIconMuleDirective);
exports.RaphaelIconMuleDirective = RaphaelIconMuleDirective;
var _a, _b, _c;


/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelIconReceiveDirective = (function (_super) {
    __extends(RaphaelIconReceiveDirective, _super);
    function RaphaelIconReceiveDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelIconReceiveDirective.prototype.ngOnInit = function () {
        this.draw(this.position);
    };
    RaphaelIconReceiveDirective.prototype.draw = function (position) {
        var path1 = this.paper.path("m 0.5,2.5 0,13 17,0 0,-13 z M 2,4 6.5,8.5 2,13 z M 4,4 14,4 9,9 z m 12,0 0,9 -4.5,-4.5 z\n         M 7.5,9.5 9,11 10.5,9.5 15,14 3,14 z").attr({
            'stroke': this.stroke,
            'fill': this.fillColors
        });
        return path1.transform('T' + position.x + ',' + position.y);
    };
    return RaphaelIconReceiveDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconReceiveDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelIconReceiveDirective.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelIconReceiveDirective.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelIconReceiveDirective.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelIconReceiveDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconReceiveDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconReceiveDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconReceiveDirective.prototype, "fillOpacity", void 0);
RaphaelIconReceiveDirective = __decorate([
    core_1.Directive({ selector: 'raphael-icon-receive' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelIconReceiveDirective);
exports.RaphaelIconReceiveDirective = RaphaelIconReceiveDirective;
var _a, _b, _c;


/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelIconRestCallDirective = (function (_super) {
    __extends(RaphaelIconRestCallDirective, _super);
    function RaphaelIconRestCallDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelIconRestCallDirective.prototype.ngOnInit = function () {
        this.draw(this.position);
    };
    RaphaelIconRestCallDirective.prototype.draw = function (position) {
        var path1 = this.paper.path("m 16.704699,5.9229055 q 0.358098,0 0.608767,0.2506681 0.250669,0.250668 0.250669,0.6087677 0,0.3580997\n         -0.250669,0.6087677 -0.250669,0.2506679 -0.608767,0.2506679 -0.358098,0 -0.608767,-0.2506679 -0.250669,-0.250668\n         -0.250669,-0.6087677 0,-0.3580997 0.250669,-0.6087677 0.250669,-0.2506681 0.608767,-0.2506681 z m 2.578308,-2.0053502 q\n         -2.229162,0 -3.854034,0.6759125 -1.624871,0.6759067 -3.227361,2.2694472 -0.716197,0.725146 -1.575633,1.7457293 L\n         7.2329969,8.7876913 Q 7.0897576,8.8055849 7.000233,8.9309334 L 4.9948821,12.368677 q -0.035811,0.06267 -0.035811,0.143242\n         0,0.107426 0.080572,0.205905 l 0.5729577,0.572957 q 0.125334,0.116384 0.2864786,0.07162 l 2.4708789,-0.760963 2.5156417,2.515645\n         -0.76096,2.470876 q -0.009,0.02687 -0.009,0.08057 0,0.125338 0.08058,0.205905 l 0.572957,0.572958 q 0.170096,0.152194\n         0.349146,0.04476 l 3.437744,-2.005351 q 0.125335,-0.08953 0.143239,-0.232763 l 0.17905,-3.392986 q 1.02058,-0.859435\n         1.745729,-1.575629 1.67411,-1.6830612 2.309735,-3.2049805 0.635625,-1.5219191 0.635625,-3.8585111 0,-0.1253369 -0.08505,-0.2148575\n         -0.08505,-0.089526 -0.201431,-0.089526 z").attr({
            'stroke': this.stroke,
            'fill': this.fillColors
        });
        return path1.transform('T' + position.x + ',' + position.y);
    };
    return RaphaelIconRestCallDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconRestCallDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelIconRestCallDirective.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelIconRestCallDirective.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelIconRestCallDirective.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelIconRestCallDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconRestCallDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconRestCallDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconRestCallDirective.prototype, "fillOpacity", void 0);
RaphaelIconRestCallDirective = __decorate([
    core_1.Directive({ selector: 'raphael-icon-rest-call' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelIconRestCallDirective);
exports.RaphaelIconRestCallDirective = RaphaelIconRestCallDirective;
var _a, _b, _c;


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelIconScriptDirective = (function (_super) {
    __extends(RaphaelIconScriptDirective, _super);
    function RaphaelIconScriptDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelIconScriptDirective.prototype.ngOnInit = function () {
        this.draw(this.position);
    };
    RaphaelIconScriptDirective.prototype.draw = function (position) {
        var path1 = this.paper.path("m 5,2 0,0.094 c 0.23706,0.064 0.53189,0.1645 0.8125,0.375 0.5582,0.4186 1.05109,1.228 1.15625,2.5312\n        l 8.03125,0 1,0 1,0 c 0,-3 -2,-3 -2,-3 l -10,0 z M 4,3 4,13 2,13 c 0,3 2,3 2,3 l 9,0 c 0,0 2,0 2,-3 L 15,6 6,6 6,5.5 C 6,4.1111\n        5.5595,3.529 5.1875,3.25 4.8155,2.971 4.5,3 4.5,3 L 4,3 z").attr({
            'stroke': this.stroke,
            'fill': this.fillColors
        });
        return path1.transform('T' + position.x + ',' + position.y);
    };
    return RaphaelIconScriptDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconScriptDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelIconScriptDirective.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelIconScriptDirective.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelIconScriptDirective.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelIconScriptDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconScriptDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconScriptDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconScriptDirective.prototype, "fillOpacity", void 0);
RaphaelIconScriptDirective = __decorate([
    core_1.Directive({ selector: 'raphael-icon-script' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelIconScriptDirective);
exports.RaphaelIconScriptDirective = RaphaelIconScriptDirective;
var _a, _b, _c;


/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelIconSendDirective = (function (_super) {
    __extends(RaphaelIconSendDirective, _super);
    function RaphaelIconSendDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelIconSendDirective.prototype.ngOnInit = function () {
        this.draw(this.position);
    };
    RaphaelIconSendDirective.prototype.draw = function (position) {
        var path1 = this.paper.path("M 1 3 L 9 11 L 17 3 L 1 3 z M 1 5 L 1 13 L 5 9 L 1 5 z M 17 5 L 13 9 L 17 13 L 17 5 z M 6 10 L 1 15\n            L 17 15 L 12 10 L 9 13 L 6 10 z").attr({
            'stroke': this.stroke,
            'fill': this.fillColors
        });
        return path1.transform('T' + position.x + ',' + position.y);
    };
    return RaphaelIconSendDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconSendDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelIconSendDirective.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelIconSendDirective.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelIconSendDirective.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelIconSendDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconSendDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconSendDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconSendDirective.prototype, "fillOpacity", void 0);
RaphaelIconSendDirective = __decorate([
    core_1.Directive({ selector: 'raphael-icon-send' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelIconSendDirective);
exports.RaphaelIconSendDirective = RaphaelIconSendDirective;
var _a, _b, _c;


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelIconServiceDirective = (function (_super) {
    __extends(RaphaelIconServiceDirective, _super);
    function RaphaelIconServiceDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelIconServiceDirective.prototype.ngOnInit = function () {
        this.draw(this.position);
    };
    RaphaelIconServiceDirective.prototype.draw = function (position) {
        var path1 = this.paper.path('M 8,1 7.5,2.875 c 0,0 -0.02438,0.250763 -0.40625,0.4375 C 7.05724,3.330353 7.04387,3.358818 7,3.375' +
            ' 6.6676654,3.4929791 6.3336971,3.6092802 6.03125,3.78125 6.02349,3.78566 6.007733,3.77681 6,3.78125 5.8811373,3.761018' +
            ' 5.8125,3.71875 5.8125,3.71875 l -1.6875,-1 -1.40625,1.4375 0.96875,1.65625 c 0,0 0.065705,0.068637 0.09375,0.1875' +
            ' 0.002,0.00849 -0.00169,0.022138 0,0.03125 C 3.6092802,6.3336971 3.4929791,6.6676654 3.375,7 3.3629836,7.0338489' +
            ' 3.3239228,7.0596246 3.3125,7.09375 3.125763,7.4756184 2.875,7.5 2.875,7.5 L 1,8 l 0,2 1.875,0.5 c 0,0 0.250763,0.02438' +
            ' 0.4375,0.40625 0.017853,0.03651 0.046318,0.04988 0.0625,0.09375 0.1129372,0.318132 0.2124732,0.646641 0.375,0.9375' +
            ' -0.00302,0.215512 -0.09375,0.34375 -0.09375,0.34375 L 2.6875,13.9375 4.09375,15.34375 5.78125,14.375 c 0,0' +
            ' 0.1229911,-0.09744 0.34375,-0.09375 0.2720511,0.147787 0.5795915,0.23888 0.875,0.34375 0.033849,0.01202 0.059625,0.05108' +
            ' 0.09375,0.0625 C 7.4756199,14.874237 7.5,15.125 7.5,15.125 L 8,17 l 2,0 0.5,-1.875 c 0,0 0.02438,-0.250763 0.40625,-0.4375' +
            ' 0.03651,-0.01785 0.04988,-0.04632 0.09375,-0.0625 0.332335,-0.117979 0.666303,-0.23428 0.96875,-0.40625 0.177303,0.0173' +
            ' 0.28125,0.09375 0.28125,0.09375 l 1.65625,0.96875 1.40625,-1.40625 -0.96875,-1.65625 c 0,0 -0.07645,-0.103947' +
            ' -0.09375,-0.28125 0.162527,-0.290859 0.262063,-0.619368 0.375,-0.9375 0.01618,-0.04387 0.04465,-0.05724 0.0625,-0.09375 C' +
            ' 14.874237,10.52438 15.125,10.5 15.125,10.5 L 17,10 17,8 15.125,7.5 c 0,0 -0.250763,-0.024382 -0.4375,-0.40625 C' +
            ' 14.669647,7.0572406 14.641181,7.0438697 14.625,7 14.55912,6.8144282 14.520616,6.6141566 14.4375,6.4375 c -0.224363,-0.4866' +
            ' 0,-0.71875 0,-0.71875 L 15.40625,4.0625 14,2.625 l -1.65625,1 c 0,0 -0.253337,0.1695664 -0.71875,-0.03125 l -0.03125,0 C' +
            ' 11.405359,3.5035185 11.198648,3.4455201 11,3.375 10.95613,3.3588185 10.942759,3.3303534 10.90625,3.3125 10.524382,3.125763' +
            ' 10.5,2.875 10.5,2.875 L 10,1 8,1 z m 1,5 c 1.656854,0 3,1.3431458 3,3 0,1.656854 -1.343146,3 -3,3 C 7.3431458,12' +
            ' 6,10.656854 6,9 6,7.3431458 7.3431458,6 9,6 z').attr({
            'opacity': 1,
            'stroke': this.stroke,
            'fill': this.fillColors
        });
        return path1.transform('T' + position.x + ',' + position.y);
    };
    return RaphaelIconServiceDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconServiceDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelIconServiceDirective.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelIconServiceDirective.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelIconServiceDirective.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelIconServiceDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconServiceDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconServiceDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconServiceDirective.prototype, "fillOpacity", void 0);
RaphaelIconServiceDirective = __decorate([
    core_1.Directive({ selector: 'raphael-icon-service' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelIconServiceDirective);
exports.RaphaelIconServiceDirective = RaphaelIconServiceDirective;
var _a, _b, _c;


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelIconSignalDirective = (function (_super) {
    __extends(RaphaelIconSignalDirective, _super);
    function RaphaelIconSignalDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelIconSignalDirective.prototype.ngOnInit = function () {
        this.draw(this.position);
    };
    RaphaelIconSignalDirective.prototype.draw = function (position) {
        var path1 = this.paper.path("M 8.7124971,21.247342 L 23.333334,21.247342 L 16.022915,8.5759512 L 8.7124971,21.247342 z").attr({
            'opacity': this.fillOpacity,
            'stroke': this.stroke,
            'strokeWidth': this.strokeWidth,
            'fill': this.fillColors
        });
        return path1.transform('T' + position.x + ',' + position.y);
    };
    return RaphaelIconSignalDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconSignalDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelIconSignalDirective.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelIconSignalDirective.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelIconSignalDirective.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelIconSignalDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconSignalDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconSignalDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconSignalDirective.prototype, "fillOpacity", void 0);
RaphaelIconSignalDirective = __decorate([
    core_1.Directive({ selector: 'raphael-icon-signal' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelIconSignalDirective);
exports.RaphaelIconSignalDirective = RaphaelIconSignalDirective;
var _a, _b, _c;


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelIconTimerDirective = (function (_super) {
    __extends(RaphaelIconTimerDirective, _super);
    function RaphaelIconTimerDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelIconTimerDirective.prototype.ngOnInit = function () {
        this.draw(this.position);
    };
    RaphaelIconTimerDirective.prototype.draw = function (position) {
        var path1 = this.paper.path("M 10 0 C 4.4771525 0 0 4.4771525 0 10 C 0 15.522847 4.4771525 20 10 20 C 15.522847 20 20 15.522847 20\n        10 C 20 4.4771525 15.522847 1.1842379e-15 10 0 z M 9.09375 1.03125 C 9.2292164 1.0174926 9.362825 1.0389311 9.5 1.03125 L 9.5 3.5\n        L 10.5 3.5 L 10.5 1.03125 C 15.063526 1.2867831 18.713217 4.9364738 18.96875 9.5 L 16.5 9.5 L 16.5 10.5 L 18.96875 10.5 C 18.713217\n        15.063526 15.063526 18.713217 10.5 18.96875 L 10.5 16.5 L 9.5 16.5 L 9.5 18.96875 C 4.9364738 18.713217 1.2867831 15.063526 1.03125\n        10.5 L 3.5 10.5 L 3.5 9.5 L 1.03125 9.5 C 1.279102 5.0736488 4.7225326 1.4751713 9.09375 1.03125 z M 9.5 5 L 9.5 8.0625 C 8.6373007\n        8.2844627 8 9.0680195 8 10 C 8 11.104569 8.8954305 12 10 12 C 10.931981 12 11.715537 11.362699 11.9375 10.5 L 14 10.5 L 14 9.5\n        L 11.9375 9.5 C 11.756642 8.7970599 11.20294 8.2433585 10.5 8.0625 L 10.5 5 L 9.5 5 z").attr({
            'stroke': this.stroke,
            'fill': this.fillColors
        });
        return path1.transform('T' + position.x + ',' + position.y);
    };
    return RaphaelIconTimerDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconTimerDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelIconTimerDirective.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelIconTimerDirective.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelIconTimerDirective.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelIconTimerDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconTimerDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconTimerDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconTimerDirective.prototype, "fillOpacity", void 0);
RaphaelIconTimerDirective = __decorate([
    core_1.Directive({ selector: 'raphael-icon-timer' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelIconTimerDirective);
exports.RaphaelIconTimerDirective = RaphaelIconTimerDirective;
var _a, _b, _c;


/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelIconUserDirective = (function (_super) {
    __extends(RaphaelIconUserDirective, _super);
    function RaphaelIconUserDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelIconUserDirective.prototype.ngOnInit = function () {
        this.draw(this.position);
    };
    RaphaelIconUserDirective.prototype.draw = function (position) {
        var path1 = this.paper.path("m 1,17 16,0 0,-1.7778 -5.333332,-3.5555 0,-1.7778 c 1.244444,0 1.244444,-2.3111 1.244444,-2.3111\n        l 0,-3.0222 C 12.555557,0.8221 9.0000001,1.0001 9.0000001,1.0001 c 0,0 -3.5555556,-0.178 -3.9111111,3.5555 l 0,3.0222 c\n        0,0 0,2.3111 1.2444443,2.3111 l 0,1.7778 L 1,15.2222 1,17 17,17").attr({
            'opacity': 1,
            'stroke': this.stroke,
            'fill': this.fillColors
        });
        return path1.transform('T' + position.x + ',' + position.y);
    };
    return RaphaelIconUserDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconUserDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelIconUserDirective.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelIconUserDirective.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelIconUserDirective.prototype, "onError", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelIconUserDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconUserDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconUserDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelIconUserDirective.prototype, "fillOpacity", void 0);
RaphaelIconUserDirective = __decorate([
    core_1.Directive({ selector: 'raphael-icon-user' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelIconUserDirective);
exports.RaphaelIconUserDirective = RaphaelIconUserDirective;
var _a, _b, _c;


/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelCircleDirective = (function (_super) {
    __extends(RaphaelCircleDirective, _super);
    function RaphaelCircleDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelCircleDirective.prototype.ngOnInit = function () {
        var opts = { 'stroke-width': this.strokeWidth, 'fill': this.fillColors, 'stroke': this.stroke, 'fill-opacity': this.fillOpacity };
        var drawElement = this.draw(this.center, this.radius, opts);
        drawElement.node.id = this.elementId;
    };
    RaphaelCircleDirective.prototype.draw = function (center, radius, opts) {
        var circle = this.paper.circle(center.x, center.y, radius).attr(opts);
        return circle;
    };
    return RaphaelCircleDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelCircleDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelCircleDirective.prototype, "center", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelCircleDirective.prototype, "radius", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelCircleDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelCircleDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelCircleDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelCircleDirective.prototype, "fillOpacity", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelCircleDirective.prototype, "elementId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelCircleDirective.prototype, "onError", void 0);
RaphaelCircleDirective = __decorate([
    core_1.Directive({ selector: 'raphael-circle' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelCircleDirective);
exports.RaphaelCircleDirective = RaphaelCircleDirective;
var _a, _b, _c;


/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelCrossDirective = (function (_super) {
    __extends(RaphaelCrossDirective, _super);
    function RaphaelCrossDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelCrossDirective.prototype.ngOnInit = function () {
        var opts = { 'stroke-width': this.strokeWidth, 'fill': this.fillColors, 'stroke': this.stroke, 'fill-opacity': this.fillOpacity };
        this.draw(this.center, this.width, this.height, opts);
    };
    RaphaelCrossDirective.prototype.draw = function (center, width, height, opts) {
        var quarterWidth = width / 4;
        var quarterHeight = height / 4;
        return this.paper.path('M' + (center.x + quarterWidth + 3) + ' ' + (center.y + quarterHeight + 3) +
            'L' + (center.x + 3 * quarterWidth - 3) + ' ' + (center.y + 3 * quarterHeight - 3) +
            'M' + (center.x + quarterWidth + 3) + ' ' + (center.y + 3 * quarterHeight - 3) +
            'L' + (center.x + 3 * quarterWidth - 3) + ' ' + (center.y + quarterHeight + 3)).attr(opts);
    };
    return RaphaelCrossDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelCrossDirective.prototype, "center", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelCrossDirective.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelCrossDirective.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelCrossDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelCrossDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelCrossDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelCrossDirective.prototype, "fillOpacity", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelCrossDirective.prototype, "onError", void 0);
RaphaelCrossDirective = __decorate([
    core_1.Directive({ selector: 'raphael-cross' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelCrossDirective);
exports.RaphaelCrossDirective = RaphaelCrossDirective;
var _a, _b, _c;


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var polyline_1 = __webpack_require__(445);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelFlowArrowDirective = (function (_super) {
    __extends(RaphaelFlowArrowDirective, _super);
    function RaphaelFlowArrowDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        _this.ARROW_WIDTH = 4;
        _this.SEQUENCEFLOW_STROKE = 1.5;
        return _this;
    }
    RaphaelFlowArrowDirective.prototype.ngOnInit = function () {
        this.draw(this.flow);
    };
    RaphaelFlowArrowDirective.prototype.draw = function (flow) {
        var line = this.drawLine(flow);
        this.drawArrow(line);
    };
    RaphaelFlowArrowDirective.prototype.drawLine = function (flow) {
        var polyline = new polyline_1.Polyline(flow.id, flow.waypoints, this.SEQUENCEFLOW_STROKE, this.paper);
        polyline.element = this.paper.path(polyline.path);
        polyline.element.attr({ 'stroke-width': this.SEQUENCEFLOW_STROKE });
        polyline.element.attr({ 'stroke': '#585858' });
        polyline.element.node.id = this.flow.id;
        var lastLineIndex = polyline.getLinesCount() - 1;
        var line = polyline.getLine(lastLineIndex);
        return line;
    };
    RaphaelFlowArrowDirective.prototype.drawArrow = function (line) {
        var doubleArrowWidth = 2 * this.ARROW_WIDTH;
        var width = this.ARROW_WIDTH / 2 + .5;
        var arrowHead = this.paper.path('M0 0L-' + width + '-' + doubleArrowWidth + 'L' + width + ' -' + doubleArrowWidth + 'z');
        arrowHead.transform('t' + line.x2 + ',' + line.y2);
        var angle = Raphael.deg(line.angle - Math.PI / 2);
        arrowHead.transform('...r' + angle + ' 0 0');
        arrowHead.attr('fill', '#585858');
        arrowHead.attr('stroke-width', this.SEQUENCEFLOW_STROKE);
        arrowHead.attr('stroke', '#585858');
    };
    return RaphaelFlowArrowDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelFlowArrowDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelFlowArrowDirective.prototype, "flow", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelFlowArrowDirective.prototype, "onError", void 0);
RaphaelFlowArrowDirective = __decorate([
    core_1.Directive({ selector: 'raphael-flow-arrow' }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _b || Object])
], RaphaelFlowArrowDirective);
exports.RaphaelFlowArrowDirective = RaphaelFlowArrowDirective;
var _a, _b;


/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelMultilineTextDirective = (function (_super) {
    __extends(RaphaelMultilineTextDirective, _super);
    function RaphaelMultilineTextDirective(elementRef, raphaelService, logService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.logService = logService;
        _this.onError = new core_1.EventEmitter();
        _this.TEXT_PADDING = 3;
        return _this;
    }
    RaphaelMultilineTextDirective.prototype.ngOnInit = function () {
        this.logService.log(this.elementRef);
        if (this.text === null || this.text === undefined) {
            this.text = '';
        }
        this.draw(this.position, this.text);
    };
    RaphaelMultilineTextDirective.prototype.draw = function (position, text) {
        var textPaper = this.paper.text(position.x + this.TEXT_PADDING, position.y + this.TEXT_PADDING, text).attr({
            'text-anchor': 'middle',
            'font-family': 'Arial',
            'font-size': '11',
            'fill': '#373e48'
        });
        var formattedText = this.formatText(textPaper, text, this.elementWidth);
        textPaper.attr({
            'text': formattedText
        });
        textPaper.transform(this.transform);
        return textPaper;
    };
    RaphaelMultilineTextDirective.prototype.formatText = function (textPaper, text, elementWidth) {
        var pText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        textPaper.attr({
            'text': pText
        });
        var letterWidth = textPaper.getBBox().width / text.length;
        var removedLineBreaks = text.split('\n');
        var actualRowLength = 0, formattedText = [];
        removedLineBreaks.forEach(function (senteces) {
            var words = senteces.split(' ');
            words.forEach(function (word) {
                var length = word.length;
                if (actualRowLength + (length * letterWidth) > elementWidth) {
                    formattedText.push('\n');
                    actualRowLength = 0;
                }
                actualRowLength += length * letterWidth;
                formattedText.push(word + ' ');
            });
            formattedText.push('\n');
            actualRowLength = 0;
        });
        return formattedText.join('');
    };
    return RaphaelMultilineTextDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelMultilineTextDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelMultilineTextDirective.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelMultilineTextDirective.prototype, "transform", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelMultilineTextDirective.prototype, "text", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelMultilineTextDirective.prototype, "elementWidth", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelMultilineTextDirective.prototype, "onError", void 0);
RaphaelMultilineTextDirective = __decorate([
    core_1.Directive({ selector: 'raphael-multiline-text' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object, typeof (_d = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _d || Object])
], RaphaelMultilineTextDirective);
exports.RaphaelMultilineTextDirective = RaphaelMultilineTextDirective;
var _a, _b, _c, _d;


/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelPentagonDirective = (function (_super) {
    __extends(RaphaelPentagonDirective, _super);
    function RaphaelPentagonDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelPentagonDirective.prototype.ngOnInit = function () {
        var opts = {
            'stroke-width': this.strokeWidth,
            'fill': this.fillColors,
            'stroke': this.stroke,
            'fill-opacity': this.fillOpacity,
            'stroke-linejoin': 'bevel'
        };
        this.draw(this.center, opts);
    };
    RaphaelPentagonDirective.prototype.draw = function (center, opts) {
        var penta = this.paper.path('M 20.327514,22.344972 L 11.259248,22.344216 L 8.4577203,13.719549' +
            ' L 15.794545,8.389969 L 23.130481,13.720774 L 20.327514,22.344972 z').attr(opts);
        penta.transform('T' + (center.x + 4) + ',' + (center.y + 4));
    };
    return RaphaelPentagonDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelPentagonDirective.prototype, "center", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelPentagonDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelPentagonDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelPentagonDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelPentagonDirective.prototype, "fillOpacity", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelPentagonDirective.prototype, "strokeLinejoin", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelPentagonDirective.prototype, "onError", void 0);
RaphaelPentagonDirective = __decorate([
    core_1.Directive({ selector: 'raphael-pentagon' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelPentagonDirective);
exports.RaphaelPentagonDirective = RaphaelPentagonDirective;
var _a, _b, _c;


/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelPlusDirective = (function (_super) {
    __extends(RaphaelPlusDirective, _super);
    function RaphaelPlusDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelPlusDirective.prototype.ngOnInit = function () {
        var opts = { 'stroke-width': this.strokeWidth, 'fill': this.fillColors, 'stroke': this.stroke, 'fill-opacity': this.fillOpacity };
        this.draw(this.center, opts);
    };
    RaphaelPlusDirective.prototype.draw = function (center, opts) {
        var path = this.paper.path('M 6.75,16 L 25.75,16 M 16,6.75 L 16,25.75').attr(opts);
        return path.transform('T' + (center.x + 4) + ',' + (center.y + 4));
    };
    return RaphaelPlusDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelPlusDirective.prototype, "center", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelPlusDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelPlusDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelPlusDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelPlusDirective.prototype, "fillOpacity", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelPlusDirective.prototype, "onError", void 0);
RaphaelPlusDirective = __decorate([
    core_1.Directive({ selector: 'raphael-plus' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelPlusDirective);
exports.RaphaelPlusDirective = RaphaelPlusDirective;
var _a, _b, _c;


/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelRectDirective = (function (_super) {
    __extends(RaphaelRectDirective, _super);
    function RaphaelRectDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.radius = 0;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelRectDirective.prototype.ngOnInit = function () {
        var opts = {
            'stroke-width': this.strokeWidth,
            'fill': this.fillColors,
            'stroke': this.stroke,
            'fill-opacity': this.fillOpacity
        };
        var elementDraw = this.draw(this.leftCorner, this.width, this.height, this.radius, opts);
        elementDraw.node.id = this.elementId;
    };
    RaphaelRectDirective.prototype.draw = function (leftCorner, width, height, radius, opts) {
        return this.paper.rect(leftCorner.x, leftCorner.y, width, height, radius).attr(opts);
    };
    return RaphaelRectDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelRectDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelRectDirective.prototype, "leftCorner", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelRectDirective.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelRectDirective.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelRectDirective.prototype, "radius", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelRectDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelRectDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelRectDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelRectDirective.prototype, "fillOpacity", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelRectDirective.prototype, "elementId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelRectDirective.prototype, "onError", void 0);
RaphaelRectDirective = __decorate([
    core_1.Directive({ selector: 'raphael-rect' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelRectDirective);
exports.RaphaelRectDirective = RaphaelRectDirective;
var _a, _b, _c;


/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelRhombusDirective = (function (_super) {
    __extends(RaphaelRhombusDirective, _super);
    function RaphaelRhombusDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelRhombusDirective.prototype.ngOnInit = function () {
        var opts = { 'stroke-width': this.strokeWidth, 'fill': this.fillColors, 'stroke': this.stroke, 'fill-opacity': this.fillOpacity };
        var elementDraw = this.draw(this.center, this.width, this.height, opts);
        elementDraw.node.id = this.elementId;
    };
    RaphaelRhombusDirective.prototype.draw = function (center, width, height, opts) {
        return this.paper.path('M' + center.x + ' ' + (center.y + (height / 2)) +
            'L' + (center.x + (width / 2)) + ' ' + (center.y + height) +
            'L' + (center.x + width) + ' ' + (center.y + (height / 2)) +
            'L' + (center.x + (width / 2)) + ' ' + center.y + 'z').attr(opts);
    };
    return RaphaelRhombusDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelRhombusDirective.prototype, "center", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelRhombusDirective.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RaphaelRhombusDirective.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelRhombusDirective.prototype, "fillColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelRhombusDirective.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelRhombusDirective.prototype, "strokeWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelRhombusDirective.prototype, "fillOpacity", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelRhombusDirective.prototype, "elementId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelRhombusDirective.prototype, "onError", void 0);
RaphaelRhombusDirective = __decorate([
    core_1.Directive({ selector: 'raphael-rhombus' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelRhombusDirective);
exports.RaphaelRhombusDirective = RaphaelRhombusDirective;
var _a, _b, _c;


/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var point_1 = __webpack_require__(7);
var raphael_base_1 = __webpack_require__(6);
var raphael_service_1 = __webpack_require__(5);
var RaphaelTextDirective = (function (_super) {
    __extends(RaphaelTextDirective, _super);
    function RaphaelTextDirective(elementRef, raphaelService) {
        var _this = _super.call(this, elementRef, raphaelService) || this;
        _this.elementRef = elementRef;
        _this.onError = new core_1.EventEmitter();
        return _this;
    }
    RaphaelTextDirective.prototype.ngOnInit = function () {
        if (this.text === null || this.text === undefined) {
            this.text = '';
        }
        this.draw(this.position, this.text);
    };
    RaphaelTextDirective.prototype.draw = function (position, text) {
        var textPaper = this.paper.text(position.x, position.y, text).attr({
            'text-anchor': 'middle',
            'font-family': 'Arial',
            'font-size': '11',
            'fill': '#373e48'
        });
        textPaper.transform(this.transform);
        return textPaper;
    };
    return RaphaelTextDirective;
}(raphael_base_1.RaphaelBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RaphaelTextDirective.prototype, "paper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof point_1.Point !== "undefined" && point_1.Point) === "function" && _a || Object)
], RaphaelTextDirective.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelTextDirective.prototype, "transform", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RaphaelTextDirective.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RaphaelTextDirective.prototype, "onError", void 0);
RaphaelTextDirective = __decorate([
    core_1.Directive({ selector: 'raphael-text' }),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof raphael_service_1.RaphaelService !== "undefined" && raphael_service_1.RaphaelService) === "function" && _c || Object])
], RaphaelTextDirective);
exports.RaphaelTextDirective = RaphaelTextDirective;
var _a, _b, _c;


/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_color_service_1 = __webpack_require__(18);
var DiagramEventSubprocessComponent = (function () {
    function DiagramEventSubprocessComponent(elementRef, diagramColorService) {
        this.elementRef = elementRef;
        this.diagramColorService = diagramColorService;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '', radius: 4 };
    }
    DiagramEventSubprocessComponent.prototype.ngOnInit = function () {
        this.rectLeftCorner = { x: this.data.x, y: this.data.y };
        this.width = this.data.width;
        this.height = this.data.height;
        this.options.fillColors = 'none';
        this.options.stroke = this.diagramColorService.getBpmnColor(this.data, diagram_color_service_1.DiagramColorService.MAIN_STROKE_COLOR);
        this.options.strokeWidth = 1;
    };
    return DiagramEventSubprocessComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramEventSubprocessComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramEventSubprocessComponent.prototype, "onError", void 0);
DiagramEventSubprocessComponent = __decorate([
    core_1.Component({
        selector: 'diagram-event-subprocess',
        template: __webpack_require__(537)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof diagram_color_service_1.DiagramColorService !== "undefined" && diagram_color_service_1.DiagramColorService) === "function" && _b || Object])
], DiagramEventSubprocessComponent);
exports.DiagramEventSubprocessComponent = DiagramEventSubprocessComponent;
var _a, _b;


/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_color_service_1 = __webpack_require__(18);
var DiagramSubprocessComponent = (function () {
    function DiagramSubprocessComponent(elementRef, diagramColorService) {
        this.elementRef = elementRef;
        this.diagramColorService = diagramColorService;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '', fillColors: '', fillOpacity: '', strokeWidth: '', radius: 4 };
    }
    DiagramSubprocessComponent.prototype.ngOnInit = function () {
        this.rectLeftCorner = { x: this.data.x, y: this.data.y };
        this.width = this.data.width;
        this.height = this.data.height;
        this.options.fillColors = 'none';
        this.options.stroke = this.diagramColorService.getBpmnColor(this.data, diagram_color_service_1.DiagramColorService.MAIN_STROKE_COLOR);
        this.options.strokeWidth = 1;
    };
    return DiagramSubprocessComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramSubprocessComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramSubprocessComponent.prototype, "onError", void 0);
DiagramSubprocessComponent = __decorate([
    core_1.Component({
        selector: 'diagram-subprocess',
        template: __webpack_require__(538)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof diagram_color_service_1.DiagramColorService !== "undefined" && diagram_color_service_1.DiagramColorService) === "function" && _b || Object])
], DiagramSubprocessComponent);
exports.DiagramSubprocessComponent = DiagramSubprocessComponent;
var _a, _b;


/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_event_subprocess_component_1 = __webpack_require__(301);
var diagram_subprocess_component_1 = __webpack_require__(302);
__export(__webpack_require__(302));
__export(__webpack_require__(301));
exports.DIAGRAM_STRUCTURAL_DIRECTIVES = [
    diagram_subprocess_component_1.DiagramSubprocessComponent,
    diagram_event_subprocess_component_1.DiagramEventSubprocessComponent
];


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramLaneComponent = (function () {
    function DiagramLaneComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '#000000', fillColors: 'none', fillOpacity: '', strokeWidth: '1', radius: 0 };
    }
    DiagramLaneComponent.prototype.ngOnInit = function () {
        this.rectLeftCorner = { x: this.lane.x, y: this.lane.y };
        this.width = this.lane.width;
        this.height = this.lane.height;
        this.textPosition = { x: this.lane.x + 10, y: this.lane.y + (this.lane.height / 2) };
        this.text = this.lane.name;
        this.textTransform = 'r270';
    };
    return DiagramLaneComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramLaneComponent.prototype, "lane", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramLaneComponent.prototype, "onError", void 0);
DiagramLaneComponent = __decorate([
    core_1.Component({
        selector: 'diagram-lane',
        template: __webpack_require__(539)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramLaneComponent);
exports.DiagramLaneComponent = DiagramLaneComponent;
var _a;


/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramLanesComponent = (function () {
    function DiagramLanesComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
    }
    DiagramLanesComponent.prototype.ngOnInit = function () {
    };
    return DiagramLanesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DiagramLanesComponent.prototype, "lanes", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramLanesComponent.prototype, "onError", void 0);
DiagramLanesComponent = __decorate([
    core_1.Component({
        selector: 'diagram-lanes',
        template: __webpack_require__(540)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramLanesComponent);
exports.DiagramLanesComponent = DiagramLanesComponent;
var _a;


/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramPoolComponent = (function () {
    function DiagramPoolComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
        this.options = { stroke: '#000000', fillColors: 'none', fillOpacity: '', strokeWidth: '1', radius: 0 };
    }
    DiagramPoolComponent.prototype.ngOnInit = function () {
        this.rectLeftCorner = { x: this.pool.x, y: this.pool.y };
        this.width = this.pool.width;
        this.height = this.pool.height;
        this.textPosition = { x: this.pool.x + 14, y: this.pool.y + (this.pool.height / 2) };
        this.text = this.pool.name;
        this.textTransform = 'r270';
    };
    return DiagramPoolComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramPoolComponent.prototype, "pool", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramPoolComponent.prototype, "onError", void 0);
DiagramPoolComponent = __decorate([
    core_1.Component({
        selector: 'diagram-pool',
        template: __webpack_require__(541)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramPoolComponent);
exports.DiagramPoolComponent = DiagramPoolComponent;
var _a;


/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramPoolsComponent = (function () {
    function DiagramPoolsComponent(elementRef) {
        this.elementRef = elementRef;
        this.onError = new core_1.EventEmitter();
    }
    DiagramPoolsComponent.prototype.ngOnInit = function () {
    };
    return DiagramPoolsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DiagramPoolsComponent.prototype, "pools", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DiagramPoolsComponent.prototype, "onError", void 0);
DiagramPoolsComponent = __decorate([
    core_1.Component({
        selector: 'diagram-pools',
        template: __webpack_require__(542)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], DiagramPoolsComponent);
exports.DiagramPoolsComponent = DiagramPoolsComponent;
var _a;


/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_pool_component_1 = __webpack_require__(306);
var diagram_pools_component_1 = __webpack_require__(307);
var diagram_lane_component_1 = __webpack_require__(304);
var diagram_lanes_component_1 = __webpack_require__(305);
__export(__webpack_require__(307));
__export(__webpack_require__(306));
__export(__webpack_require__(305));
__export(__webpack_require__(304));
exports.DIAGRAM_SWIMLANES_DIRECTIVES = [
    diagram_pools_component_1.DiagramPoolsComponent,
    diagram_pool_component_1.DiagramPoolComponent,
    diagram_lanes_component_1.DiagramLanesComponent,
    diagram_lane_component_1.DiagramLaneComponent
];


/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var ng2_alfresco_core_1 = __webpack_require__(1);
var Rx_1 = __webpack_require__(2);
var DiagramsService = (function () {
    function DiagramsService(authService, http, settingsService, logService) {
        this.authService = authService;
        this.http = http;
        this.settingsService = settingsService;
        this.logService = logService;
    }
    DiagramsService.prototype.getProcessDefinitionModel = function (processDefinitionId) {
        var _this = this;
        var url = this.settingsService.bpmHost + "/activiti-app/app/rest/process-definitions/" + processDefinitionId + "/model-json";
        var options = this.getRequestOptions();
        return this.http
            .get(url, options)
            .map(function (res) {
            var body = res.json();
            return body;
        }).catch(function (err) { return _this.handleError(err); });
    };
    DiagramsService.prototype.getRunningProcessDefinitionModel = function (processInstanceId) {
        var _this = this;
        var url = this.settingsService.bpmHost + "/activiti-app/app/rest/process-instances/" + processInstanceId + "/model-json";
        var options = this.getRequestOptions();
        return this.http
            .get(url, options)
            .map(function (res) {
            var body = res.json();
            return body;
        }).catch(function (err) { return _this.handleError(err); });
    };
    DiagramsService.prototype.getHeaders = function () {
        return new http_1.Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': this.authService.getTicketBpm()
        });
    };
    DiagramsService.prototype.getRequestOptions = function (param) {
        var headers = this.getHeaders();
        return new http_1.RequestOptions({ headers: headers, withCredentials: true, search: param });
    };
    DiagramsService.prototype.handleError = function (error) {
        this.logService.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    return DiagramsService;
}());
DiagramsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.AlfrescoAuthenticationService !== "undefined" && ng2_alfresco_core_1.AlfrescoAuthenticationService) === "function" && _a || Object, typeof (_b = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.AlfrescoSettingsService !== "undefined" && ng2_alfresco_core_1.AlfrescoSettingsService) === "function" && _c || Object, typeof (_d = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _d || Object])
], DiagramsService);
exports.DiagramsService = DiagramsService;
var _a, _b, _c, _d;


/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
__export(__webpack_require__(448));
__export(__webpack_require__(450));


/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".diagram {\n    border: 1px solid lightgray; overflow:auto\n}", ""]);

// exports


/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(411);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var diagram_event_gateway_component_1 = __webpack_require__(248);
var diagram_exclusive_gateway_component_1 = __webpack_require__(249);
var diagram_gateway_component_1 = __webpack_require__(250);
var diagram_inclusive_gateway_component_1 = __webpack_require__(251);
var diagram_parallel_gateway_component_1 = __webpack_require__(252);
__export(__webpack_require__(250));
__export(__webpack_require__(249));
__export(__webpack_require__(251));
__export(__webpack_require__(252));
__export(__webpack_require__(248));
exports.DIAGRAM_GATEWAY_DIRECTIVES = [
    diagram_gateway_component_1.DiagramGatewayComponent,
    diagram_exclusive_gateway_component_1.DiagramExclusiveGatewayComponent,
    diagram_inclusive_gateway_component_1.DiagramInclusiveGatewayComponent,
    diagram_parallel_gateway_component_1.DiagramParallelGatewayComponent,
    diagram_event_gateway_component_1.DiagramEventGatewayComponent
];


/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var Anchor = (function () {
    function Anchor(uuid, type, x, y) {
        this.uuid = null;
        this.x = 0;
        this.y = 0;
        this.isFirst = false;
        this.isLast = false;
        this.typeIndex = 0;
        this.type = Anchor.ANCHOR_TYPE.main;
        this.uuid = uuid;
        this.x = x;
        this.y = y;
        this.type = (type === Anchor.ANCHOR_TYPE.middle) ? Anchor.ANCHOR_TYPE.middle : Anchor.ANCHOR_TYPE.main;
    }
    return Anchor;
}());
Anchor.ANCHOR_TYPE = {
    main: 'main',
    middle: 'middle',
    first: 'first',
    last: 'last'
};
exports.Anchor = Anchor;


/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var anchor_1 = __webpack_require__(444);
var Polyline = (function () {
    function Polyline(uuid, points, strokeWidth, paper) {
        this.id = null;
        this.points = [];
        this.path = [];
        this.anchors = [];
        this.strokeWidth = 1;
        this.radius = 1;
        this.showDetails = false;
        this.paper = null;
        this.element = null;
        this.isDefaultConditionAvailable = false;
        this.closePath = false;
        this.points = points;
        this.path = [];
        this.anchors = [];
        if (strokeWidth) {
            this.strokeWidth = strokeWidth;
        }
        this.paper = paper;
        this.closePath = false;
        this.init();
    }
    Polyline.prototype.init = function () {
        var linesCount = this.getLinesCount();
        if (linesCount < 1) {
            return;
        }
        this.normalizeCoordinates();
        this.pushAnchor(anchor_1.Anchor.ANCHOR_TYPE.first, this.getLine(0).x1, this.getLine(0).y1);
        for (var i = 1; i < linesCount; i++) {
            var line1 = this.getLine(i - 1);
            this.pushAnchor(anchor_1.Anchor.ANCHOR_TYPE.main, line1.x2, line1.y2);
        }
        this.pushAnchor(anchor_1.Anchor.ANCHOR_TYPE.last, this.getLine(linesCount - 1).x2, this.getLine(linesCount - 1).y2);
        this.rebuildPath();
    };
    Polyline.prototype.normalizeCoordinates = function () {
        for (var i = 0; i < this.points.length; i++) {
            this.points[i].x = parseFloat(this.points[i].x);
            this.points[i].y = parseFloat(this.points[i].y);
        }
    };
    Polyline.prototype.getLinesCount = function () {
        return this.points.length - 1;
    };
    Polyline.prototype._getLine = function (i) {
        if (this.points.length > i && this.points[i]) {
            return { x1: this.points[i].x, y1: this.points[i].y, x2: this.points[i + 1].x, y2: this.points[i + 1].y };
        }
        else {
            return undefined;
        }
    };
    Polyline.prototype.getLine = function (i) {
        var line = this._getLine(i);
        if (line !== undefined) {
            line.angle = this.getLineAngle(i);
        }
        return line;
    };
    Polyline.prototype.getLineAngle = function (i) {
        var line = this._getLine(i);
        return Math.atan2(line.y2 - line.y1, line.x2 - line.x1);
    };
    Polyline.prototype.getLineLengthX = function (i) {
        var line = this.getLine(i);
        return (line.x2 - line.x1);
    };
    Polyline.prototype.getLineLengthY = function (i) {
        var line = this.getLine(i);
        return (line.y2 - line.y1);
    };
    Polyline.prototype.getLineLength = function (i) {
        return Math.sqrt(Math.pow(this.getLineLengthX(i), 2) + Math.pow(this.getLineLengthY(i), 2));
    };
    Polyline.prototype.getAnchors = function () {
        return this.anchors;
    };
    Polyline.prototype.getAnchorsCount = function (type) {
        if (type === void 0) { type = null; }
        if (!type) {
            return this.anchors.length;
        }
        else {
            var count = 0;
            for (var i = 0; i < this.getAnchorsCount(null); i++) {
                var anchor = this.anchors[i];
                if (anchor.getType() === type) {
                    count++;
                }
            }
            return count;
        }
    };
    Polyline.prototype.pushAnchor = function (type, x, y) {
        var index, typeIndex;
        if (type === anchor_1.Anchor.ANCHOR_TYPE.first) {
            index = 0;
            typeIndex = 0;
        }
        else if (type === anchor_1.Anchor.ANCHOR_TYPE.last) {
            index = this.getAnchorsCount();
            typeIndex = 0;
        }
        else if (!index) {
            index = this.anchors.length;
        }
        else {
            for (var i = 0; i < this.getAnchorsCount(); i++) {
                var anchor = this.anchors[i];
                if (anchor.index > index) {
                    anchor.index++;
                    anchor.typeIndex++;
                }
            }
        }
        var anchor = new anchor_1.Anchor(this.id, anchor_1.Anchor.ANCHOR_TYPE.main, x, y);
        this.anchors.push(anchor);
    };
    Polyline.prototype.getAnchor = function (position) {
        return this.anchors[position];
    };
    Polyline.prototype.getAnchorByType = function (type, position) {
        if (type === anchor_1.Anchor.ANCHOR_TYPE.first) {
            return this.anchors[0];
        }
        if (type === anchor_1.Anchor.ANCHOR_TYPE.last) {
            return this.anchors[this.getAnchorsCount() - 1];
        }
        for (var i = 0; i < this.getAnchorsCount(); i++) {
            var anchor = this.anchors[i];
            if (anchor.type === type) {
                if (position === anchor.position) {
                    return anchor;
                }
            }
        }
        return null;
    };
    Polyline.prototype.addNewPoint = function (position, x, y) {
        for (var i = 0; i < this.getLinesCount(); i++) {
            var line = this.getLine(i);
            if (x > line.x1 && x < line.x2 && y > line.y1 && y < line.y2) {
                this.points.splice(i + 1, 0, { x: x, y: y });
                break;
            }
        }
        this.rebuildPath();
    };
    Polyline.prototype.rebuildPath = function () {
        var path = [];
        for (var i = 0; i < this.getAnchorsCount(); i++) {
            var anchor = this.getAnchor(i);
            var pathType = '';
            if (i === 0) {
                pathType = 'M';
            }
            else {
                pathType = 'L';
            }
            var targetX = anchor.x, targetY = anchor.y;
            if (i > 0 && i < this.getAnchorsCount() - 1) {
                var cx = anchor.x, cy = anchor.y;
                var AO = this.getLineLength(i - 1);
                if (AO < this.radius) {
                    AO = this.radius;
                }
                this.isDefaultConditionAvailable = (this.isDefaultConditionAvailable || (i === 1 && AO > 10));
                var ED = this.getLineLengthY(i - 1) * this.radius / AO;
                var OD = this.getLineLengthX(i - 1) * this.radius / AO;
                targetX = anchor.x - OD;
                targetY = anchor.y - ED;
                if (AO < 2 * this.radius && i > 1) {
                    targetX = anchor.x - this.getLineLengthX(i - 1) / 2;
                    targetY = anchor.y - this.getLineLengthY(i - 1) / 2;
                }
                var AO = this.getLineLength(i);
                if (AO < this.radius) {
                    AO = this.radius;
                }
                var ED = this.getLineLengthY(i) * this.radius / AO;
                var OD = this.getLineLengthX(i) * this.radius / AO;
                var nextSrcX = anchor.x + OD;
                var nextSrcY = anchor.y + ED;
                if (AO < 2 * this.radius && i < this.getAnchorsCount() - 2) {
                    nextSrcX = anchor.x + this.getLineLengthX(i) / 2;
                    nextSrcY = anchor.y + this.getLineLengthY(i) / 2;
                    ;
                }
                var dx0 = (cx - targetX) / 3, dy0 = (cy - targetY) / 3, ax = cx - dx0, ay = cy - dy0, dx1 = (cx - nextSrcX) / 3, dy1 = (cy - nextSrcY) / 3, bx = cx - dx1, by = cy - dy1, zx = nextSrcX, zy = nextSrcY;
            }
            else if (i === 1 && this.getAnchorsCount() === 2) {
                var AO = this.getLineLength(i - 1);
                if (AO < this.radius) {
                    AO = this.radius;
                }
                this.isDefaultConditionAvailable = (this.isDefaultConditionAvailable || (i === 1 && AO > 10));
            }
            if (this.strokeWidth % 2 === 1) {
                targetX += 0.5;
                targetY += 0.5;
            }
            path.push([pathType, targetX, targetY]);
            if (i > 0 && i < this.getAnchorsCount() - 1) {
                path.push(['C', ax, ay, bx, by, zx, zy]);
            }
        }
        if (this.closePath) {
            path.push(['Z']);
        }
        this.path = path;
    };
    Polyline.prototype.transform = function (transformation) {
        this.element.transform(transformation);
    };
    Polyline.prototype.function = function (attrs) {
        this.element.attr(attrs);
    };
    return Polyline;
}());
exports.Polyline = Polyline;


/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var POSITION = { BOTTOM: 'bottom', LEFT: 'left', RIGHT: 'right', TOP: 'top' };
var STRATEGY = { CURSOR: 'cursor', ELEMENT: 'element' };
var IS_ACTIVE_CLASS = 'is-active';
var DiagramTooltipComponent = (function () {
    function DiagramTooltipComponent() {
        this.adf = 'adf';
        this.position = 'bottom';
        this.strategy = 'cursor';
    }
    DiagramTooltipComponent.prototype.ngAfterViewInit = function () {
        this.tooltipElement = this.tooltipContent.nativeElement;
        if (this.data.id) {
            this.targetElement = document.getElementById(this.data.id);
        }
        if (this.targetElement) {
            if (!this.targetElement.hasAttribute('tabindex')) {
                this.targetElement.setAttribute('tabindex', '0');
            }
            this.boundMouseEnterHandler = this.handleMouseEnter.bind(this);
            this.boundMouseLeaveAndScrollHandler = this.hideTooltip.bind(this);
            this.targetElement.addEventListener('mouseenter', this.boundMouseEnterHandler, false);
            this.targetElement.addEventListener('touchend', this.boundMouseEnterHandler, false);
            this.targetElement.addEventListener('mouseleave', this.boundMouseLeaveAndScrollHandler, false);
            window.addEventListener('scroll', this.boundMouseLeaveAndScrollHandler, true);
            window.addEventListener('touchstart', this.boundMouseLeaveAndScrollHandler);
        }
    };
    DiagramTooltipComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener('scroll', this.boundMouseLeaveAndScrollHandler, true);
        window.removeEventListener('touchstart', this.boundMouseLeaveAndScrollHandler);
    };
    DiagramTooltipComponent.prototype.hideTooltip = function () {
        this.tooltipElement.classList.remove(IS_ACTIVE_CLASS);
    };
    DiagramTooltipComponent.prototype.showTooltip = function () {
        this.tooltipElement.classList.add(IS_ACTIVE_CLASS);
    };
    DiagramTooltipComponent.prototype.handleMouseEnter = function (event) {
        var props;
        if (this.strategy === STRATEGY.ELEMENT) {
            props = event.target.getBoundingClientRect();
        }
        else {
            props = { top: (event.pageY - 150), left: event.pageX, width: event.layerX, height: 50 };
        }
        var top = props.top + (props.height / 2);
        var marginLeft = -1 * (this.tooltipElement.offsetWidth / 2);
        var marginTop = -1 * (this.tooltipElement.offsetHeight / 2);
        var left = props.left + (props.width / 2);
        if (this.position === POSITION.LEFT || this.position === POSITION.RIGHT) {
            left = (props.width / 2);
            if (top + marginTop < 0) {
                this.tooltipElement.style.top = '0';
                this.tooltipElement.style.marginTop = '0';
            }
            else {
                this.tooltipElement.style.top = top + 'px';
                this.tooltipElement.style.marginTop = marginTop + 'px';
            }
        }
        else {
            if (left + marginLeft < 0) {
                this.tooltipElement.style.left = '0';
                this.tooltipElement.style.marginLeft = '0';
            }
            else {
                this.tooltipElement.style.left = left + 'px';
                this.tooltipElement.style.marginLeft = marginLeft + 'px';
            }
        }
        if (this.position === POSITION.TOP) {
            this.tooltipElement.style.top = props.top - this.tooltipElement.offsetHeight - 10 + 'px';
        }
        else if (this.position === POSITION.RIGHT) {
            this.tooltipElement.style.left = props.left + props.width + 10 + 'px';
        }
        else if (this.position === POSITION.LEFT) {
            this.tooltipElement.style.left = props.left - this.tooltipElement.offsetWidth - 10 + 'px';
        }
        else {
            this.tooltipElement.style.top = props.top + props.height + 10 + 'px';
        }
        this.showTooltip();
    };
    return DiagramTooltipComponent;
}());
__decorate([
    core_1.ViewChild('tooltipContent'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], DiagramTooltipComponent.prototype, "tooltipContent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DiagramTooltipComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DiagramTooltipComponent.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DiagramTooltipComponent.prototype, "strategy", void 0);
DiagramTooltipComponent = __decorate([
    core_1.Component({
        selector: 'diagram-tooltip',
        template: __webpack_require__(543),
        styles: [__webpack_require__(729)]
    })
], DiagramTooltipComponent);
exports.DiagramTooltipComponent = DiagramTooltipComponent;
var _a;


/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
__export(__webpack_require__(446));


/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var Chart = (function () {
    function Chart(obj) {
        this.id = obj && obj.id || null;
        if (obj && obj.type) {
            this.type = this.convertType(obj.type);
            this.icon = this.getIconType(this.type);
        }
    }
    Chart.prototype.convertType = function (type) {
        var chartType = '';
        switch (type) {
            case 'pieChart':
                chartType = 'pie';
                break;
            case 'table':
                chartType = 'table';
                break;
            case 'line':
                chartType = 'line';
                break;
            case 'barChart':
                chartType = 'bar';
                break;
            case 'multiBarChart':
                chartType = 'multiBar';
                break;
            case 'processDefinitionHeatMap':
                chartType = 'HeatMap';
                break;
            case 'masterDetailTable':
                chartType = 'masterDetailTable';
                break;
            default:
                chartType = 'table';
                break;
        }
        return chartType;
    };
    Chart.prototype.getIconType = function (type) {
        var typeIcon = '';
        switch (type) {
            case 'pie':
                typeIcon = 'pie_chart';
                break;
            case 'table':
                typeIcon = 'web';
                break;
            case 'line':
                typeIcon = 'show_chart';
                break;
            case 'bar':
                typeIcon = 'equalizer';
                break;
            case 'multiBar':
                typeIcon = 'poll';
                break;
            case 'HeatMap':
                typeIcon = 'share';
                break;
            case 'masterDetailTable':
                typeIcon = 'subtitles';
                break;
            default:
                typeIcon = 'web';
                break;
        }
        return typeIcon;
    };
    return Chart;
}());
exports.Chart = Chart;
var LineChart = (function (_super) {
    __extends(LineChart, _super);
    function LineChart(obj) {
        var _this = _super.call(this, obj) || this;
        _this.labels = [];
        _this.datasets = [];
        _this.title = obj && obj.title || null;
        _this.titleKey = obj && obj.titleKey || null;
        _this.labels = obj && obj.columnNames.slice(1, obj.columnNames.length);
        obj.rows.forEach(function (value) {
            _this.datasets.push({ data: value.slice(1, value.length), label: value[0] });
        });
        return _this;
    }
    return LineChart;
}(Chart));
exports.LineChart = LineChart;
var BarChart = (function (_super) {
    __extends(BarChart, _super);
    function BarChart(obj) {
        var _this = _super.call(this, obj) || this;
        _this.labels = [];
        _this.datasets = [];
        _this.data = [];
        _this.options = {
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1
                        }
                    }],
                xAxes: [{
                        ticks: {},
                        stacked: false
                    }]
            }
        };
        _this.xAxisTickFormatFunction = function (xAxisType) {
            return function (value) {
                if (xAxisType !== null && xAxisType !== undefined) {
                    if ('date_day' === xAxisType) {
                        return moment(new Date(value)).format('DD');
                    }
                    else if ('date_month' === xAxisType) {
                        return moment(new Date(value)).format('MMMM');
                    }
                    else if ('date_year' === xAxisType) {
                        return moment(new Date(value)).format('YYYY');
                    }
                }
                return value;
            };
        };
        _this.yAxisTickFormatFunction = function (yAxisType) {
            return function (value) {
                if (yAxisType !== null && yAxisType !== undefined) {
                    if ('count' === yAxisType) {
                        var label = '' + value;
                        if (label.indexOf('.') !== -1) {
                            return '';
                        }
                    }
                }
                return value;
            };
        };
        _this.title = obj && obj.title || null;
        _this.titleKey = obj && obj.titleKey || null;
        _this.xAxisType = obj && obj.xAxisType || null;
        _this.yAxisType = obj && obj.yAxisType || null;
        _this.options.scales.xAxes[0].ticks.callback = _this.xAxisTickFormatFunction(_this.xAxisType);
        _this.options.scales.yAxes[0].ticks.callback = _this.yAxisTickFormatFunction(_this.yAxisType);
        if (obj.values) {
            obj.values.forEach(function (params) {
                var dataValue = [];
                params.values.forEach(function (info) {
                    info.forEach(function (value, index) {
                        if (index % 2 === 0) {
                            if (!_this.labels.includes(value)) {
                                _this.labels.push(value);
                            }
                        }
                        else {
                            dataValue.push(value);
                        }
                    });
                });
                if (dataValue && dataValue.length > 0) {
                    _this.datasets.push({ data: dataValue, label: params.key });
                }
            });
        }
        return _this;
    }
    BarChart.prototype.hasDatasets = function () {
        return this.datasets && this.datasets.length > 0 ? true : false;
    };
    return BarChart;
}(Chart));
exports.BarChart = BarChart;
var MultiBarChart = (function (_super) {
    __extends(MultiBarChart, _super);
    function MultiBarChart(obj) {
        return _super.call(this, obj) || this;
    }
    return MultiBarChart;
}(BarChart));
exports.MultiBarChart = MultiBarChart;
var TableChart = (function (_super) {
    __extends(TableChart, _super);
    function TableChart(obj) {
        var _this = _super.call(this, obj) || this;
        _this.labels = [];
        _this.datasets = [];
        _this.title = obj && obj.title || null;
        _this.titleKey = obj && obj.titleKey || null;
        _this.labels = obj && obj.columnNames;
        if (obj.rows) {
            _this.datasets = obj && obj.rows;
        }
        return _this;
    }
    TableChart.prototype.hasDatasets = function () {
        return this.datasets && this.datasets.length > 0 ? true : false;
    };
    return TableChart;
}(Chart));
exports.TableChart = TableChart;
var DetailsTableChart = (function (_super) {
    __extends(DetailsTableChart, _super);
    function DetailsTableChart(obj) {
        var _this = _super.call(this, obj) || this;
        _this.showDetails = false;
        if (obj.detailTables) {
            _this.detailsTable = new TableChart(obj.detailTables[0]);
        }
        return _this;
    }
    DetailsTableChart.prototype.hasDetailsTable = function () {
        return this.detailsTable ? true : false;
    };
    return DetailsTableChart;
}(TableChart));
exports.DetailsTableChart = DetailsTableChart;
var HeatMapChart = (function (_super) {
    __extends(HeatMapChart, _super);
    function HeatMapChart(obj) {
        var _this = _super.call(this, obj) || this;
        _this.avgTimePercentages = obj && obj.avgTimePercentages || null;
        _this.avgTimeValues = obj && obj.avgTimeValues || null;
        _this.processDefinitionId = obj && obj.processDefinitionId || null;
        _this.totalCountValues = obj && obj.totalCountValues || null;
        _this.titleKey = obj && obj.titleKey || null;
        _this.totalCountsPercentages = obj && obj.totalCountsPercentages || null;
        _this.totalTimePercentages = obj && obj.totalTimePercentages || null;
        _this.totalTimeValues = obj && obj.totalTimeValues || null;
        return _this;
    }
    return HeatMapChart;
}(Chart));
exports.HeatMapChart = HeatMapChart;
var PieChart = (function (_super) {
    __extends(PieChart, _super);
    function PieChart(obj) {
        var _this = _super.call(this, obj) || this;
        _this.labels = [];
        _this.data = [];
        _this.title = obj && obj.title || null;
        _this.titleKey = obj && obj.titleKey || null;
        if (obj.values) {
            obj.values.forEach(function (value) {
                _this.add(value.key, value.y);
            });
        }
        return _this;
    }
    PieChart.prototype.add = function (label, data) {
        this.labels.push(label);
        this.data.push(data);
    };
    PieChart.prototype.hasData = function () {
        return this.data && this.data.length > 0 ? true : false;
    };
    PieChart.prototype.hasZeroValues = function () {
        var isZeroValues = false;
        if (this.hasData()) {
            isZeroValues = true;
            this.data.forEach(function (value) {
                if (value.toString() !== '0') {
                    isZeroValues = false;
                }
            });
        }
        return isZeroValues;
    };
    return PieChart;
}(Chart));
exports.PieChart = PieChart;


/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var DiagramModel = (function () {
    function DiagramModel(obj) {
        var _this = this;
        this.elements = [];
        this.flows = [];
        this.pools = [];
        if (obj) {
            this.diagramBeginX = obj.diagramBeginX;
            this.diagramBeginY = obj.diagramBeginY;
            this.diagramHeight = obj.diagramHeight;
            this.diagramWidth = obj.diagramWidth;
            if (obj.elements) {
                obj.elements.forEach(function (element) {
                    _this.elements.push(new DiagramElementModel(element));
                });
            }
            if (obj.flows) {
                obj.flows.forEach(function (flow) {
                    _this.flows.push(new DiagramFlowElementModel(flow));
                });
            }
            if (obj.pools) {
                obj.pools.forEach(function (pool) {
                    _this.pools.push(new DiagramPoolElementModel(pool));
                });
            }
        }
    }
    return DiagramModel;
}());
exports.DiagramModel = DiagramModel;
var DiagramElementModel = (function () {
    function DiagramElementModel(obj) {
        var _this = this;
        this.properties = [];
        this.dataType = '';
        this.taskType = '';
        if (obj) {
            this.completed = !!obj.completed;
            this.current = !!obj.current;
            this.height = obj.height || '';
            this.id = obj.id || '';
            this.name = obj.name || '';
            this.type = obj.type || '';
            this.width = obj.width || '';
            this.value = obj.value || '';
            this.x = obj.x || '';
            this.y = obj.y || '';
            this.taskType = obj.taskType || '';
            if (obj.properties) {
                obj.properties.forEach(function (property) {
                    _this.properties.push(new DiagramElementPropertyModel(property));
                });
            }
            this.dataType = obj.dataType || '';
            if (obj.eventDefinition) {
                this.eventDefinition = new DiagramEventDefinitionModel(obj.eventDefinition);
            }
        }
    }
    return DiagramElementModel;
}());
exports.DiagramElementModel = DiagramElementModel;
var DiagramElementPropertyModel = (function () {
    function DiagramElementPropertyModel(obj) {
        if (obj) {
            this.name = obj.name;
            this.type = obj.type;
            this.value = obj.value;
        }
    }
    return DiagramElementPropertyModel;
}());
exports.DiagramElementPropertyModel = DiagramElementPropertyModel;
var DiagramFlowElementModel = (function () {
    function DiagramFlowElementModel(obj) {
        var _this = this;
        this.properties = [];
        this.waypoints = [];
        if (obj) {
            this.completed = !!obj.completed;
            this.current = !!obj.current;
            this.id = obj.id;
            this.properties = obj.properties;
            this.sourceRef = obj.sourceRef;
            this.targetRef = obj.targetRef;
            this.type = obj.type;
            if (obj.waypoints) {
                obj.waypoints.forEach(function (waypoint) {
                    _this.waypoints.push(new DiagramWayPointModel(waypoint));
                });
            }
        }
    }
    return DiagramFlowElementModel;
}());
exports.DiagramFlowElementModel = DiagramFlowElementModel;
var DiagramWayPointModel = (function () {
    function DiagramWayPointModel(obj) {
        if (obj) {
            this.x = obj.x;
            this.y = obj.y;
        }
    }
    return DiagramWayPointModel;
}());
exports.DiagramWayPointModel = DiagramWayPointModel;
var DiagramEventDefinitionModel = (function () {
    function DiagramEventDefinitionModel(obj) {
        if (obj) {
            this.timeCycle = obj.timeCycle;
            this.type = obj.type;
        }
    }
    return DiagramEventDefinitionModel;
}());
exports.DiagramEventDefinitionModel = DiagramEventDefinitionModel;
var DiagramPoolElementModel = (function () {
    function DiagramPoolElementModel(obj) {
        var _this = this;
        this.lanes = [];
        if (obj) {
            this.height = obj.height;
            this.id = obj.id;
            this.name = obj.name;
            this.properties = obj.properties;
            this.width = obj.width;
            this.x = obj.x;
            this.y = obj.y;
            if (obj.lanes) {
                obj.lanes.forEach(function (lane) {
                    _this.lanes.push(new DiagramLaneElementModel(lane));
                });
            }
        }
    }
    return DiagramPoolElementModel;
}());
exports.DiagramPoolElementModel = DiagramPoolElementModel;
var DiagramLaneElementModel = (function () {
    function DiagramLaneElementModel(obj) {
        if (obj) {
            this.height = obj.height;
            this.id = obj.id;
            this.name = obj.name;
            this.width = obj.width;
            this.x = obj.x;
            this.y = obj.y;
        }
    }
    return DiagramLaneElementModel;
}());
exports.DiagramLaneElementModel = DiagramLaneElementModel;


/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var ReportParametersModel = (function () {
    function ReportParametersModel(obj) {
        this.id = obj && obj.id;
        this.name = obj && obj.name || null;
        if (obj && obj.definition) {
            this.definition = new ReportDefinitionModel(JSON.parse(obj.definition));
        }
        this.created = obj && obj.created || null;
    }
    ReportParametersModel.prototype.hasParameters = function () {
        return (this.definition && this.definition.parameters && this.definition.parameters.length > 0) ? true : false;
    };
    return ReportParametersModel;
}());
exports.ReportParametersModel = ReportParametersModel;
var ReportDefinitionModel = (function () {
    function ReportDefinitionModel(obj) {
        var _this = this;
        this.parameters = [];
        obj.parameters.forEach(function (params) {
            var reportParamsModel = new ReportParameterDetailsModel(params);
            _this.parameters.push(reportParamsModel);
        });
    }
    ReportDefinitionModel.prototype.findParam = function (name) {
        this.parameters.forEach(function (param) {
            return param.type === name ? param : null;
        });
        return null;
    };
    return ReportDefinitionModel;
}());
exports.ReportDefinitionModel = ReportDefinitionModel;
var ReportParameterDetailsModel = (function () {
    function ReportParameterDetailsModel(obj) {
        this.id = obj && obj.id;
        this.name = obj && obj.name || null;
        this.nameKey = obj && obj.nameKey || null;
        this.type = obj && obj.type || null;
        this.value = obj && obj.value || null;
        this.options = obj && obj.options || null;
        this.dependsOn = obj && obj.dependsOn || null;
    }
    return ReportParameterDetailsModel;
}());
exports.ReportParameterDetailsModel = ReportParameterDetailsModel;
var ParameterValueModel = (function () {
    function ParameterValueModel(obj) {
        this.id = obj && obj.id;
        this.name = obj && obj.name || null;
        this.value = obj && obj.value || null;
        this.version = obj && obj.version || null;
    }
    Object.defineProperty(ParameterValueModel.prototype, "label", {
        get: function () {
            return this.version ? this.name + " (v " + this.version + ") " : this.name;
        },
        enumerable: true,
        configurable: true
    });
    return ParameterValueModel;
}());
exports.ParameterValueModel = ParameterValueModel;
var ReportQuery = (function () {
    function ReportQuery(obj) {
        this.reportName = obj && obj.reportName || null;
        this.processDefinitionId = obj && obj.processDefinitionId || null;
        this.status = obj && obj.status || null;
        this.taskName = obj && obj.taskName || null;
        this.dateRangeInterval = obj && obj.dateRangeInterval || null;
        this.typeFiltering = obj && (typeof obj.typeFiltering !== 'undefined') ? obj.typeFiltering : true;
        this.slowProcessInstanceInteger = obj && obj.slowProcessInstanceInteger || 0;
        this.duration = obj && obj.duration || 0;
        this.dateRange = new ReportDateRange(obj);
    }
    return ReportQuery;
}());
exports.ReportQuery = ReportQuery;
var ReportDateRange = (function () {
    function ReportDateRange(obj) {
        this.startDate = obj && obj.startDate || null;
        this.endDate = obj && obj.endDate || null;
        this.rangeId = obj && obj.rangeId || null;
    }
    return ReportDateRange;
}());
exports.ReportDateRange = ReportDateRange;


/***/ }),

/***/ 491:
/***/ (function(module, exports) {

module.exports = "<diagram-task [data]=\"data\"></diagram-task>\n<diagram-icon-alfresco-publish-task [data]=\"data\"></diagram-icon-alfresco-publish-task>";

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

module.exports = "<diagram-task [data]=\"data\"></diagram-task>\n<diagram-icon-box-publish-task [data]=\"data\"></diagram-icon-box-publish-task>";

/***/ }),

/***/ 493:
/***/ (function(module, exports) {

module.exports = "<diagram-task [data]=\"data\"></diagram-task>\n<diagram-icon-business-rule-task [data]=\"data\"></diagram-icon-business-rule-task>";

/***/ }),

/***/ 494:
/***/ (function(module, exports) {

module.exports = "<diagram-task [data]=\"data\"></diagram-task>\n<diagram-icon-camel-task [data]=\"data\"></diagram-icon-camel-task>";

/***/ }),

/***/ 495:
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"data.taskType\">\n    <div *ngSwitchCase=\"'mail'\">\n        <diagram-send-task [data]=\"data\"></diagram-send-task>\n    </div>\n    <div *ngSwitchCase=\"'camel'\">\n        <diagram-camel-task [data]=\"data\"></diagram-camel-task>\n    </div>\n    <div *ngSwitchCase=\"'mule'\">\n        <diagram-mule-task [data]=\"data\"></diagram-mule-task>\n    </div>\n    <div *ngSwitchCase=\"'alfresco_publish'\">\n        <adf-diagram-publish-task [data]=\"data\"></adf-diagram-publish-task>\n    </div>\n    <div *ngSwitchCase=\"'rest_call'\">\n        <diagram-rest-call-task [data]=\"data\"></diagram-rest-call-task>\n    </div>\n    <div *ngSwitchCase=\"'google_drive_publish'\">\n        <diagram-google-drive-publish-task [data]=\"data\"></diagram-google-drive-publish-task>\n    </div>\n    <div *ngSwitchCase=\"'box_publish'\">\n        <diagram-box-publish-task [data]=\"data\"></diagram-box-publish-task>\n    </div>\n    <div *ngSwitchDefault>\n        <diagram-service-task [data]=\"data\"></diagram-service-task>\n    </div>\n</div>\n";

/***/ }),

/***/ 496:
/***/ (function(module, exports) {

module.exports = "<diagram-task [data]=\"data\"></diagram-task>\n<diagram-icon-google-drive-publish-task [data]=\"data\"></diagram-icon-google-drive-publish-task>";

/***/ }),

/***/ 497:
/***/ (function(module, exports) {

module.exports = "<diagram-task [data]=\"data\"></diagram-task>\n<diagram-icon-manual-task [data]=\"data\"></diagram-icon-manual-task>";

/***/ }),

/***/ 498:
/***/ (function(module, exports) {

module.exports = "<diagram-task [data]=\"data\"></diagram-task>\n<diagram-icon-mule-task [data]=\"data\"></diagram-icon-mule-task>";

/***/ }),

/***/ 499:
/***/ (function(module, exports) {

module.exports = "<diagram-task [data]=\"data\"></diagram-task>\n<diagram-icon-receive-task [data]=\"data\"></diagram-icon-receive-task>";

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var RaphaelService = (function () {
    function RaphaelService() {
        this.width = 300;
        this.height = 400;
    }
    RaphaelService.prototype.getInstance = function (element) {
        if (!this.paper) {
            this.ctx = element.nativeElement;
            this.refresh();
        }
        return this.paper;
    };
    RaphaelService.prototype.refresh = function () {
        this.ngOnDestroy();
        this.paper = this.getPaperBuilder(this.ctx);
    };
    RaphaelService.prototype.getPaperBuilder = function (ctx) {
        if (typeof Raphael === 'undefined') {
            throw new Error('ng2-charts configuration issue: Embedding Chart.js lib is mandatory');
        }
        var paper = new Raphael(ctx, this.width, this.height);
        return paper;
    };
    RaphaelService.prototype.ngOnDestroy = function () {
        if (this.paper) {
            this.paper.clear();
            this.paper = void 0;
        }
    };
    RaphaelService.prototype.setting = function (width, height) {
        this.width = width;
        this.height = height;
    };
    RaphaelService.prototype.reset = function () {
        this.ngOnDestroy();
    };
    return RaphaelService;
}());
RaphaelService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], RaphaelService);
exports.RaphaelService = RaphaelService;


/***/ }),

/***/ 500:
/***/ (function(module, exports) {

module.exports = "<diagram-task [data]=\"data\"></diagram-task>\n<diagram-icon-rest-call-task [data]=\"data\"></diagram-icon-rest-call-task>";

/***/ }),

/***/ 501:
/***/ (function(module, exports) {

module.exports = "<diagram-task [data]=\"data\"></diagram-task>\n<diagram-icon-script-task [data]=\"data\"></diagram-icon-script-task>";

/***/ }),

/***/ 502:
/***/ (function(module, exports) {

module.exports = "<diagram-task [data]=\"data\"></diagram-task>\n<diagram-icon-send-task [data]=\"data\"></diagram-icon-send-task>";

/***/ }),

/***/ 503:
/***/ (function(module, exports) {

module.exports = "<diagram-task [data]=\"data\"></diagram-task>\n<diagram-icon-service-task [data]=\"data\"></diagram-icon-service-task>";

/***/ }),

/***/ 504:
/***/ (function(module, exports) {

module.exports = "<raphael-rect [elementId]=\"data.id\" [leftCorner]=\"rectLeftCorner\" [width]=\"data.width\" [height]=\"data.height\" [radius]=\"options.radius\"\n              [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n              [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-rect>\n<raphael-multiline-text [text]=\"data.name\" [position]=\"textPosition\" [elementWidth]=\"data.width\"></raphael-multiline-text>\n<diagram-tooltip [data]=\"data\"></diagram-tooltip>\n";

/***/ }),

/***/ 505:
/***/ (function(module, exports) {

module.exports = "<diagram-task [data]=\"data\"></diagram-task>\n<diagram-icon-user-task [data]=\"data\"></diagram-icon-user-task>";

/***/ }),

/***/ 506:
/***/ (function(module, exports) {

module.exports = "<raphael-circle [center]=\"center\" [radius]=\"circleRadiusInner\" [strokeWidth]=\"options.strokeWidth\" [stroke]=\"options.stroke\"\n                [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-circle>\n<raphael-circle [elementId]=\"data.id\" [center]=\"center\" [radius]=\"circleRadiusOuter\" [strokeWidth]=\"options.strokeWidth\" [stroke]=\"options.stroke\"\n                [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-circle>\n<diagram-container-icon-event [data]=\"data\" [type]=\"data.eventDefinition.type\" [fillColor]=\"signalFillColor\"></diagram-container-icon-event>\n<diagram-tooltip [data]=\"data\"></diagram-tooltip>\n";

/***/ }),

/***/ 507:
/***/ (function(module, exports) {

module.exports = "<raphael-circle [center]=\"center\" [radius]=\"circleRadiusInner\" [strokeWidth]=\"options.strokeWidth\" [stroke]=\"options.stroke\"\n                [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-circle>\n<raphael-circle [elementId]=\"data.id\" [center]=\"center\" [radius]=\"circleRadiusOuter\" [strokeWidth]=\"options.strokeWidth\" [stroke]=\"options.stroke\"\n                [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-circle>\n<diagram-container-icon-event [data]=\"data\" [type]=\"data.eventDefinition && data.eventDefinition.type\"\n                              [fillColor]=\"signalFillColor\"></diagram-container-icon-event>\n<diagram-tooltip [data]=\"data\"></diagram-tooltip>\n";

/***/ }),

/***/ 508:
/***/ (function(module, exports) {

module.exports = "<raphael-flow-arrow [flow]=\"flow\"></raphael-flow-arrow>\n<diagram-tooltip [data]=\"flow\"></diagram-tooltip>\n";

/***/ }),

/***/ 509:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"diagram\" class=\"diagram\">\n    <div *ngFor=\"let element of diagram.elements\">\n        <div [ngSwitch]=\"element.type\">\n            <div *ngSwitchCase=\"'StartEvent'\">\n                <diagram-start-event [data]=\"element\"></diagram-start-event>\n            </div>\n            <div *ngSwitchCase=\"'ExclusiveGateway'\">\n                <diagram-exclusive-gateway [data]=\"element\"></diagram-exclusive-gateway>\n            </div>\n            <div *ngSwitchCase=\"'InclusiveGateway'\">\n                <diagram-inclusive-gateway [data]=\"element\"></diagram-inclusive-gateway>\n            </div>\n            <div *ngSwitchCase=\"'EventGateway'\">\n                <diagram-event-gateway [data]=\"element\"></diagram-event-gateway>\n            </div>\n            <div *ngSwitchCase=\"'ParallelGateway'\">\n                <diagram-parallel-gateway [data]=\"element\"></diagram-parallel-gateway>\n            </div>\n            <div *ngSwitchCase=\"'EndEvent'\">\n                <diagram-end-event [data]=\"element\"></diagram-end-event>\n            </div>\n            <div *ngSwitchCase=\"'UserTask'\">\n                <diagram-user-task [data]=\"element\"></diagram-user-task>\n            </div>\n            <div *ngSwitchCase=\"'ManualTask'\">\n                <diagram-manual-task [data]=\"element\"></diagram-manual-task>\n            </div>\n            <div *ngSwitchCase=\"'ServiceTask'\">\n                <diagram-container-service-task [data]=\"element\"></diagram-container-service-task>\n            </div>\n            <div *ngSwitchCase=\"'ReceiveTask'\">\n                <diagram-receive-task [data]=\"element\"></diagram-receive-task>\n            </div>\n            <div *ngSwitchCase=\"'ScriptTask'\">\n                <diagram-script-task [data]=\"element\"></diagram-script-task>\n            </div>\n            <div *ngSwitchCase=\"'BusinessRuleTask'\">\n                <diagram-business-rule-task [data]=\"element\"></diagram-business-rule-task>\n            </div>\n            <div *ngSwitchCase=\"'BoundaryEvent'\">\n                <diagram-boundary-event [data]=\"element\"></diagram-boundary-event>\n            </div>\n            <div *ngSwitchCase=\"'ThrowEvent'\">\n                <diagram-throw-event [data]=\"element\"></diagram-throw-event>\n            </div>\n            <div *ngSwitchCase=\"'IntermediateCatchEvent'\">\n                <diagram-intermediate-catching-event [data]=\"element\"></diagram-intermediate-catching-event>\n            </div>\n            <div *ngSwitchCase=\"'SubProcess'\">\n                <diagram-subprocess [data]=\"element\"></diagram-subprocess>\n            </div>\n            <div *ngSwitchCase=\"'EventSubProcess'\">\n                <diagram-event-subprocess [data]=\"element\"></diagram-event-subprocess>\n            </div>\n        </div>\n    </div>\n    <div *ngFor=\"let flow of diagram.flows\">\n        <div [ngSwitch]=\"flow.type\">\n            <div *ngSwitchCase=\"'sequenceFlow'\">\n                <diagram-sequence-flow [flow]=\"flow\"></diagram-sequence-flow>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"diagram.pools\">\n        <diagram-pools [pools]=\"diagram.pools\"></diagram-pools>\n    </div>\n</div>\n";

/***/ }),

/***/ 510:
/***/ (function(module, exports) {

module.exports = "<diagram-event [data]=\"data\" [options]=\"options\" [iconFillColor]=\"iconFillColor\"></diagram-event>";

/***/ }),

/***/ 511:
/***/ (function(module, exports) {

module.exports = "<raphael-circle [elementId]=\"data.id\" [center]=\"center\" [radius]=\"options.radius\" [strokeWidth]=\"options.strokeWidth\" [stroke]=\"options.stroke\"\n                [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-circle>\n<diagram-container-icon-event [data]=\"data\" [type]=\"data.eventDefinition && data.eventDefinition.type\"\n                              [fillColor]=\"iconFillColor\"></diagram-container-icon-event>\n<diagram-tooltip [data]=\"data\"></diagram-tooltip>\n";

/***/ }),

/***/ 512:
/***/ (function(module, exports) {

module.exports = "<diagram-event [data]=\"data\" [options]=\"options\" [iconFillColor]=\"iconFillColor\"></diagram-event>";

/***/ }),

/***/ 513:
/***/ (function(module, exports) {

module.exports = "<diagram-gateway [data]=\"data\"></diagram-gateway>\n<raphael-circle [center]=\"center\" [radius]=\"circleRadiusInner\" [strokeWidth]=\"options.strokeWidth\" [stroke]=\"options.stroke\"\n                [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-circle>\n<raphael-circle [center]=\"center\" [radius]=\"circleRadiusOuter\" [strokeWidth]=\"options.strokeWidth\" [stroke]=\"options.stroke\"\n                [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-circle>\n<raphael-pentagon [center]=\"centerPentagon\" [strokeWidth]=\"pentaStrokeWidth\" [stroke]=\"options.stroke\"\n                  [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-pentagon>";

/***/ }),

/***/ 514:
/***/ (function(module, exports) {

module.exports = "<diagram-gateway [data]=\"data\"></diagram-gateway>\n<raphael-cross [center]=\"center\" [width]=\"width\" [height]=\"height\" [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n               [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-cross>";

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

module.exports = "<raphael-rhombus [elementId]=\"data.id\" [center]=\"center\" [width]=\"width\" [height]=\"height\" [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n                 [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-rhombus>\n<diagram-tooltip [data]=\"data\"></diagram-tooltip>\n";

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

module.exports = "<diagram-gateway [data]=\"data\"></diagram-gateway>\n<raphael-circle [center]=\"center\" [radius]=\"options.radius\" [strokeWidth]=\"options.strokeWidth\" [stroke]=\"options.stroke\"\n                [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-circle>";

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "<diagram-gateway [data]=\"data\"></diagram-gateway>\n<raphael-plus [center]=\"center\" [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n                 [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-plus>";

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"type\">\n    <div *ngSwitchCase=\"'timer'\">\n        <diagram-icon-timer [data]=\"data\"></diagram-icon-timer>\n    </div>\n    <div *ngSwitchCase=\"'error'\">\n        <diagram-icon-error [data]=\"data\" [fillColor]=\"fillColor\"></diagram-icon-error>\n    </div>\n    <div *ngSwitchCase=\"'signal'\">\n        <diagram-icon-signal [data]=\"data\" [fillColor]=\"fillColor\"></diagram-icon-signal>\n    </div>\n    <div *ngSwitchCase=\"'message'\">\n        <diagram-icon-message [data]=\"data\"></diagram-icon-message>\n    </div>\n</div>";

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

module.exports = "<raphael-icon-alfresco-publish [position]=\"position\" [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n                   [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-icon-alfresco-publish>";

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

module.exports = "<raphael-icon-box-publish [position]=\"position\" [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n                   [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-icon-box-publish>";

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

module.exports = "<raphael-icon-business-rule [position]=\"position\" [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n                   [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-icon-business-rule>";

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

module.exports = "<raphael-icon-camel [position]=\"position\" [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n                   [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-icon-camel>";

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

module.exports = "<raphael-icon-error [position]=\"position\" [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n                   [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-icon-error>";

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

module.exports = "<raphael-icon-google-drive-publish [position]=\"position\" [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n                   [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-icon-google-drive-publish>";

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "<raphael-icon-manual [position]=\"position\" [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n                   [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-icon-manual>";

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports = "<raphael-icon-message [position]=\"position\" [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n                   [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-icon-message>";

/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports = "<raphael-icon-mule [position]=\"position\" [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n                   [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-icon-mule>";

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

module.exports = "<raphael-icon-receive [position]=\"position\" [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n                   [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-icon-receive>";

/***/ }),

/***/ 529:
/***/ (function(module, exports) {

module.exports = "<raphael-icon-rest-call [position]=\"position\" [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n                   [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-icon-rest-call>";

/***/ }),

/***/ 530:
/***/ (function(module, exports) {

module.exports = "<raphael-icon-script [position]=\"position\" [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n                   [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-icon-script>";

/***/ }),

/***/ 531:
/***/ (function(module, exports) {

module.exports = "<raphael-icon-send [position]=\"position\" [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n                   [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-icon-send>\n<diagram-tooltip [data]=\"data\"></diagram-tooltip>\n";

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

module.exports = "<raphael-icon-service [position]=\"position\" [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n                      [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-icon-service>";

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports = "<raphael-icon-signal [position]=\"position\" [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n                   [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-icon-signal>";

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports = "<raphael-circle [center]=\"center\" [radius]=\"circleRadius\" [strokeWidth]=\"circleOptions.strokeWidth\" [stroke]=\"circleOptions.stroke\"\n                [fillColors]=\"circleOptions.fillColors\" [fillOpacity]=\"circleOptions.fillOpacity\"></raphael-circle>\n<raphael-icon-timer [position]=\"position\" [stroke]=\"timerOptions.stroke\" [strokeWidth]=\"timerOptions.strokeWidth\"\n                      [fillColors]=\"timerOptions.fillColors\" [fillOpacity]=\"timerOptions.fillOpacity\"></raphael-icon-timer>\n<diagram-tooltip [data]=\"data\"></diagram-tooltip>\n";

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<raphael-icon-user [position]=\"position\" [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n                   [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-icon-user>";

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "<raphael-circle [center]=\"center\" [radius]=\"circleRadiusInner\" [strokeWidth]=\"options.strokeWidth\" [stroke]=\"options.stroke\"\n                [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-circle>\n<raphael-circle [elementId]=\"data.id\" [center]=\"center\" [radius]=\"circleRadiusOuter\" [strokeWidth]=\"options.strokeWidth\" [stroke]=\"options.stroke\"\n                [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-circle>\n<diagram-container-icon-event [data]=\"data\" [type]=\"data.eventDefinition.type\"></diagram-container-icon-event>\n<diagram-tooltip [data]=\"data\"></diagram-tooltip>\n";

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = "<raphael-rect [leftCorner]=\"rectLeftCorner\" [width]=\"width\" [height]=\"height\" [radius]=\"options.radius\"\n              [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n              [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-rect>\n<diagram-tooltip [data]=\"data\"></diagram-tooltip>\n";

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = "<raphael-rect [leftCorner]=\"rectLeftCorner\" [width]=\"width\" [height]=\"height\" [radius]=\"options.radius\"\n              [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n              [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-rect>\n<diagram-tooltip [data]=\"data\"></diagram-tooltip>\n";

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = "<raphael-rect [leftCorner]=\"rectLeftCorner\" [width]=\"width\" [height]=\"height\" [radius]=\"options.radius\"\n              [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n              [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-rect>\n<raphael-text [text]=\"text\" [position]=\"textPosition\" [transform]=\"textTransform\"></raphael-text>";

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"lanes\">\n    <div *ngFor=\"let lane of lanes\">\n        <diagram-lane [lane]=\"lane\"></diagram-lane>\n    </div>\n</div>\n";

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "<raphael-rect [leftCorner]=\"rectLeftCorner\" [width]=\"width\" [height]=\"height\" [radius]=\"options.radius\"\n              [stroke]=\"options.stroke\" [strokeWidth]=\"options.strokeWidth\"\n              [fillColors]=\"options.fillColors\" [fillOpacity]=\"options.fillOpacity\"></raphael-rect>\n<raphael-text [text]=\"text\" [position]=\"textPosition\" [transform]=\"textTransform\"></raphael-text>";

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pools\">\n    <div *ngFor=\"let pool of pools\">\n        <diagram-pool [pool]=\"pool\"></diagram-pool>\n        <diagram-lanes [lanes]=\"pool.lanes\"></diagram-lanes>\n    </div>\n</div>\n";

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports = "<div #tooltipContent class=\"{{adf}}-diagram-tooltip\">\n    <div class=\"{{adf}}-diagram-tooltip-header\">{{ data.type }} {{ data.name || data.id }}</div>\n    <div class=\"{{adf}}-diagram-tooltip-body\">\n        <div *ngIf=\"data.name\" class=\"{{adf}}-diagram-name-property\">\n            <span class=\"{{adf}}-diagram-propertyName\">Name:</span>\n            <span class=\"{{adf}}-diagram-propertyValue\">{{ data.name }}</span>\n        </div>\n        <div *ngFor=\"let property of data.properties\" class=\"{{adf}}-diagram-general-property\">\n            <span class=\"{{adf}}-diagram-propertyName\">{{ property.name }}:</span>\n            <span class=\"{{adf}}-diagram-propertyValue\">{{ property.value }}</span>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var RaphaelBase = (function () {
    function RaphaelBase(element, raphaelService) {
        this.raphaelService = raphaelService;
        this.element = element;
        this.paper = this.raphaelService.getInstance(element);
    }
    return RaphaelBase;
}());
exports.RaphaelBase = RaphaelBase;


/***/ }),

/***/ 645:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var Point = (function () {
    function Point(obj) {
        this.x = obj && obj.x || 0;
        this.y = obj && obj.y || 0;
    }
    return Point;
}());
exports.Point = Point;


/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(645);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var raphael_circle_component_1 = __webpack_require__(292);
var raphael_cross_component_1 = __webpack_require__(293);
var raphael_flow_arrow_component_1 = __webpack_require__(294);
var raphael_multiline_text_component_1 = __webpack_require__(295);
var raphael_pentagon_component_1 = __webpack_require__(296);
var raphael_plus_component_1 = __webpack_require__(297);
var raphael_rect_component_1 = __webpack_require__(298);
var raphael_rhombus_component_1 = __webpack_require__(299);
var raphael_text_component_1 = __webpack_require__(300);
var raphael_service_1 = __webpack_require__(5);
var index_1 = __webpack_require__(274);
__export(__webpack_require__(292));
__export(__webpack_require__(298));
__export(__webpack_require__(300));
__export(__webpack_require__(295));
__export(__webpack_require__(294));
__export(__webpack_require__(293));
__export(__webpack_require__(297));
__export(__webpack_require__(299));
__export(__webpack_require__(296));
__export(__webpack_require__(274));
exports.RAPHAEL_DIRECTIVES = [
    raphael_circle_component_1.RaphaelCircleDirective,
    raphael_rect_component_1.RaphaelRectDirective,
    raphael_text_component_1.RaphaelTextDirective,
    raphael_multiline_text_component_1.RaphaelMultilineTextDirective,
    raphael_flow_arrow_component_1.RaphaelFlowArrowDirective,
    raphael_cross_component_1.RaphaelCrossDirective,
    raphael_plus_component_1.RaphaelPlusDirective,
    raphael_rhombus_component_1.RaphaelRhombusDirective,
    raphael_pentagon_component_1.RaphaelPentagonDirective,
    index_1.RAPHAEL_ICONS_DIRECTIVES
];
exports.RAPHAEL_PROVIDERS = [
    raphael_service_1.RaphaelService
];


/***/ }),

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var index_1 = __webpack_require__(123);
var index_2 = __webpack_require__(78);
var index_3 = __webpack_require__(78);
__export(__webpack_require__(123));
__export(__webpack_require__(78));
__export(__webpack_require__(350));
var DiagramsModule = DiagramsModule_1 = (function () {
    function DiagramsModule() {
    }
    DiagramsModule.forRoot = function () {
        return {
            ngModule: DiagramsModule_1,
            providers: index_1.DIAGRAM_PROVIDERS.concat(index_3.RAPHAEL_PROVIDERS)
        };
    };
    return DiagramsModule;
}());
DiagramsModule = DiagramsModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            ng2_alfresco_core_1.CoreModule
        ],
        declarations: index_1.DIAGRAM_DIRECTIVES.concat(index_2.RAPHAEL_DIRECTIVES),
        providers: index_1.DIAGRAM_PROVIDERS.concat(index_3.RAPHAEL_PROVIDERS, [
            {
                provide: ng2_alfresco_core_1.TRANSLATION_PROVIDER,
                multi: true,
                useValue: {
                    name: 'ng2-activiti-diagrams',
                    source: 'assets/ng2-activiti-diagrams'
                }
            }
        ]),
        exports: index_1.DIAGRAM_DIRECTIVES.slice()
    })
], DiagramsModule);
exports.DiagramsModule = DiagramsModule;
var DiagramsModule_1;


/***/ })

/******/ });
});
//# sourceMappingURL=ng2-activiti-diagrams.js.map