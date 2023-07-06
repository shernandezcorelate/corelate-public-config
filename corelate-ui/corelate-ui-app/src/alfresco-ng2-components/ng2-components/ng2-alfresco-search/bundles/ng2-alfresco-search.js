/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
		module.exports = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("@angular/forms"), require("@angular/router"), require("ng2-alfresco-documentlist"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "ng2-alfresco-core", "rxjs/Rx", "@angular/forms", "@angular/router", "ng2-alfresco-documentlist"], factory);
	else if(typeof exports === 'object')
		exports["ng2-alfresco-search"] = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("@angular/forms"), require("@angular/router"), require("ng2-alfresco-documentlist"));
	else
		root["ng2-alfresco-search"] = factory(root["@angular/core"], root["ng2-alfresco-core"], root["rxjs/Rx"], root["@angular/forms"], root["@angular/router"], root["ng2-alfresco-documentlist"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_388__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 825);
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var SearchAutocompleteComponent = (function () {
    function SearchAutocompleteComponent(searchService, thumbnailService) {
        this.searchService = searchService;
        this.thumbnailService = thumbnailService;
        this.searchTerm = '';
        this.results = null;
        this.maxResults = 5;
        this.resultSort = null;
        this.rootNodeId = '-root';
        this.resultType = null;
        this.highlight = false;
        this.fileSelect = new core_1.EventEmitter();
        this.searchFocus = new core_1.EventEmitter();
        this.cancel = new core_1.EventEmitter();
        this.resultsLoad = new core_1.EventEmitter();
        this.scrollBack = new core_1.EventEmitter();
    }
    SearchAutocompleteComponent.prototype.ngOnChanges = function (changes) {
        if (changes.searchTerm) {
            this.results = null;
            this.errorMessage = null;
            this.displaySearchResults(changes.searchTerm.currentValue);
        }
    };
    SearchAutocompleteComponent.prototype.displaySearchResults = function (searchTerm) {
        var _this = this;
        var searchOpts = {
            include: ['path'],
            rootNodeId: this.rootNodeId,
            nodeType: this.resultType,
            maxItems: this.maxResults,
            orderBy: this.resultSort
        };
        if (searchTerm !== null && searchTerm !== '') {
            searchTerm = searchTerm + '*';
            this.searchService
                .getNodeQueryResults(searchTerm, searchOpts)
                .subscribe(function (results) {
                _this.results = results.list.entries.slice(0, _this.maxResults);
                _this.errorMessage = null;
                _this.resultsLoad.emit(_this.results);
            }, function (error) {
                _this.results = null;
                _this.errorMessage = error;
                _this.resultsLoad.error(error);
            });
        }
    };
    SearchAutocompleteComponent.prototype.getMimeTypeIcon = function (node) {
        var mimeType;
        if (node.entry.content && node.entry.content.mimeType) {
            mimeType = node.entry.content.mimeType;
        }
        if (node.entry.isFolder) {
            mimeType = 'folder';
        }
        return this.thumbnailService.getMimeTypeIcon(mimeType);
    };
    SearchAutocompleteComponent.prototype.focusResult = function () {
        var firstResult = this.resultsTableBody.nativeElement.querySelector('tr');
        firstResult.focus();
    };
    SearchAutocompleteComponent.prototype.onItemClick = function (node) {
        if (node && node.entry) {
            this.fileSelect.emit(node);
        }
    };
    SearchAutocompleteComponent.prototype.onRowFocus = function ($event) {
        this.searchFocus.emit($event);
    };
    SearchAutocompleteComponent.prototype.onRowBlur = function ($event) {
        this.searchFocus.emit($event);
    };
    SearchAutocompleteComponent.prototype.onRowEnter = function (node) {
        if (node && node.entry) {
            if (node.entry.isFile) {
                this.fileSelect.emit(node);
            }
        }
    };
    SearchAutocompleteComponent.prototype.getNextElementSibling = function (node) {
        return node.nextElementSibling;
    };
    SearchAutocompleteComponent.prototype.getPreviousElementSibling = function (node) {
        return node.previousElementSibling;
    };
    SearchAutocompleteComponent.prototype.onRowArrowDown = function ($event) {
        var nextElement = this.getNextElementSibling($event.target);
        if (nextElement) {
            nextElement.focus();
        }
    };
    SearchAutocompleteComponent.prototype.onRowArrowUp = function ($event) {
        var previousElement = this.getPreviousElementSibling($event.target);
        if (previousElement) {
            previousElement.focus();
        }
        else {
            this.scrollBack.emit($event);
        }
    };
    SearchAutocompleteComponent.prototype.onRowEscape = function ($event) {
        this.cancel.emit($event);
    };
    return SearchAutocompleteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchAutocompleteComponent.prototype, "searchTerm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SearchAutocompleteComponent.prototype, "ngClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SearchAutocompleteComponent.prototype, "maxResults", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchAutocompleteComponent.prototype, "resultSort", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchAutocompleteComponent.prototype, "rootNodeId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchAutocompleteComponent.prototype, "resultType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SearchAutocompleteComponent.prototype, "highlight", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], SearchAutocompleteComponent.prototype, "fileSelect", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], SearchAutocompleteComponent.prototype, "searchFocus", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SearchAutocompleteComponent.prototype, "cancel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SearchAutocompleteComponent.prototype, "resultsLoad", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SearchAutocompleteComponent.prototype, "scrollBack", void 0);
__decorate([
    core_1.ViewChild('resultsTableBody', {}),
    __metadata("design:type", typeof (_c = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _c || Object)
], SearchAutocompleteComponent.prototype, "resultsTableBody", void 0);
SearchAutocompleteComponent = __decorate([
    core_1.Component({
        selector: 'adf-search-autocomplete, alfresco-search-autocomplete',
        template: __webpack_require__(613),
        styles: [__webpack_require__(783)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof ng2_alfresco_core_1.SearchService !== "undefined" && ng2_alfresco_core_1.SearchService) === "function" && _d || Object, typeof (_e = typeof ng2_alfresco_core_2.ThumbnailService !== "undefined" && ng2_alfresco_core_2.ThumbnailService) === "function" && _e || Object])
], SearchAutocompleteComponent);
exports.SearchAutocompleteComponent = SearchAutocompleteComponent;
var _a, _b, _c, _d, _e;


/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_388__;

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/empty_doc_lib.a89c064e4edfa54d2e347bf594947219.svg";

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var SearchTermValidator = (function () {
    function SearchTermValidator() {
    }
    SearchTermValidator.minAlphanumericChars = function (minChars) {
        return function (control) {
            return ('' + control.value).replace(/[^0-9a-zA-Z]+/g, '').length >= minChars ? null : {
                hasMinAlphanumericChars: false
            };
        };
    };
    return SearchTermValidator;
}());
exports.SearchTermValidator = SearchTermValidator;


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var Rx_1 = __webpack_require__(2);
var search_term_validator_1 = __webpack_require__(478);
var search_autocomplete_component_1 = __webpack_require__(36);
var SearchControlComponent = (function () {
    function SearchControlComponent() {
        this.searchTerm = '';
        this.inputType = 'text';
        this.autocomplete = false;
        this.expandable = true;
        this.highlight = false;
        this.searchChange = new core_1.EventEmitter();
        this.searchSubmit = new core_1.EventEmitter();
        this.fileSelect = new core_1.EventEmitter();
        this.expand = new core_1.EventEmitter();
        this.liveSearchEnabled = true;
        this.liveSearchTerm = '';
        this.liveSearchRoot = '-root-';
        this.liveSearchResultType = null;
        this.liveSearchResultSort = null;
        this.liveSearchMaxResults = 5;
        this.searchActive = false;
        this.searchValid = false;
        this.focusSubject = new Rx_1.Subject();
        this.searchControl = new forms_1.FormControl(this.searchTerm, forms_1.Validators.compose([forms_1.Validators.required, search_term_validator_1.SearchTermValidator.minAlphanumericChars(3)]));
    }
    SearchControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl.valueChanges.debounceTime(400).distinctUntilChanged()
            .subscribe(function (value) {
            _this.onSearchTermChange(value);
        });
        this.setupFocusEventHandlers();
    };
    SearchControlComponent.prototype.ngOnDestroy = function () {
        this.focusSubject.unsubscribe();
    };
    SearchControlComponent.prototype.onSearchTermChange = function (value) {
        this.searchValid = this.searchControl.valid;
        this.liveSearchTerm = this.searchValid ? value : '';
        this.searchControl.setValue(value);
        this.searchChange.emit({
            value: value,
            valid: this.searchValid
        });
    };
    SearchControlComponent.prototype.setupFocusEventHandlers = function () {
        var _this = this;
        var focusEvents = this.focusSubject.asObservable().debounceTime(50);
        focusEvents.filter(function ($event) {
            return $event.type === 'focusin' || $event.type === 'focus';
        }).subscribe(function ($event) {
            _this.onSearchFocus($event);
        });
        focusEvents.filter(function ($event) {
            return $event.type === 'focusout' || $event.type === 'blur';
        }).subscribe(function ($event) {
            _this.onSearchBlur($event);
        });
    };
    SearchControlComponent.prototype.getTextFieldClassName = function () {
        return 'mdl-textfield mdl-js-textfield' + (this.expandable ? ' mdl-textfield--expandable' : '');
    };
    SearchControlComponent.prototype.getTextFieldHolderClassName = function () {
        return this.expandable ? 'search-field mdl-textfield__expandable-holder' : 'search-field';
    };
    SearchControlComponent.prototype.getAutoComplete = function () {
        return this.autocomplete ? 'on' : 'off';
    };
    SearchControlComponent.prototype.onSearch = function (event) {
        this.searchControl.setValue(this.searchTerm);
        if (this.searchControl.valid) {
            this.searchSubmit.emit({
                value: this.searchTerm
            });
            this.searchInput.nativeElement.blur();
        }
    };
    SearchControlComponent.prototype.isAutoCompleteDisplayed = function () {
        return this.searchActive;
    };
    SearchControlComponent.prototype.setAutoCompleteDisplayed = function (display) {
        this.searchActive = display;
    };
    SearchControlComponent.prototype.onFileClicked = function (event) {
        this.setAutoCompleteDisplayed(false);
        this.fileSelect.emit(event);
    };
    SearchControlComponent.prototype.onSearchFocus = function ($event) {
        this.setAutoCompleteDisplayed(true);
    };
    SearchControlComponent.prototype.onSearchBlur = function ($event) {
        this.setAutoCompleteDisplayed(false);
    };
    SearchControlComponent.prototype.onFocus = function ($event) {
        if (this.expandable) {
            this.expand.emit({
                expanded: true
            });
        }
        this.focusSubject.next($event);
    };
    SearchControlComponent.prototype.onBlur = function ($event) {
        if (this.expandable && (this.searchControl.value === '' || this.searchControl.value === undefined)) {
            this.expand.emit({
                expanded: false
            });
        }
        this.focusSubject.next($event);
    };
    SearchControlComponent.prototype.onEscape = function () {
        this.setAutoCompleteDisplayed(false);
    };
    SearchControlComponent.prototype.onArrowDown = function () {
        if (this.isAutoCompleteDisplayed()) {
            this.liveSearchComponent.focusResult();
        }
        else {
            this.setAutoCompleteDisplayed(true);
        }
    };
    SearchControlComponent.prototype.onAutoCompleteFocus = function ($event) {
        this.focusSubject.next($event);
    };
    SearchControlComponent.prototype.onAutoCompleteReturn = function ($event) {
        if (this.searchInput) {
            this.searchInput.nativeElement.focus();
        }
    };
    SearchControlComponent.prototype.onAutoCompleteCancel = function ($event) {
        if (this.searchInput) {
            this.searchInput.nativeElement.focus();
        }
        this.setAutoCompleteDisplayed(false);
    };
    return SearchControlComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SearchControlComponent.prototype, "searchTerm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SearchControlComponent.prototype, "inputType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SearchControlComponent.prototype, "autocomplete", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SearchControlComponent.prototype, "expandable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SearchControlComponent.prototype, "highlight", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SearchControlComponent.prototype, "searchChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SearchControlComponent.prototype, "searchSubmit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SearchControlComponent.prototype, "fileSelect", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SearchControlComponent.prototype, "expand", void 0);
__decorate([
    core_1.ViewChild('searchInput', {}),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], SearchControlComponent.prototype, "searchInput", void 0);
__decorate([
    core_1.ViewChild(search_autocomplete_component_1.SearchAutocompleteComponent),
    __metadata("design:type", typeof (_b = typeof search_autocomplete_component_1.SearchAutocompleteComponent !== "undefined" && search_autocomplete_component_1.SearchAutocompleteComponent) === "function" && _b || Object)
], SearchControlComponent.prototype, "liveSearchComponent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SearchControlComponent.prototype, "liveSearchEnabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchControlComponent.prototype, "liveSearchTerm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchControlComponent.prototype, "liveSearchRoot", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchControlComponent.prototype, "liveSearchResultType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchControlComponent.prototype, "liveSearchResultSort", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SearchControlComponent.prototype, "liveSearchMaxResults", void 0);
SearchControlComponent = __decorate([
    core_1.Component({
        selector: 'adf-search-control, alfresco-search-control',
        template: __webpack_require__(614),
        styles: [__webpack_require__(784)]
    }),
    __metadata("design:paramtypes", [])
], SearchControlComponent);
exports.SearchControlComponent = SearchControlComponent;
var _a, _b;


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var router_1 = __webpack_require__(37);
var ng2_alfresco_core_1 = __webpack_require__(1);
var SearchComponent = SearchComponent_1 = (function () {
    function SearchComponent(searchService, translateService, notificationService, route) {
        this.searchService = searchService;
        this.translateService = translateService;
        this.notificationService = notificationService;
        this.route = route;
        this.searchTerm = '';
        this.maxResults = 20;
        this.resultSort = null;
        this.rootNodeId = '-root-';
        this.resultType = null;
        this.navigationMode = SearchComponent_1.DOUBLE_CLICK_NAVIGATION;
        this.navigate = true;
        this.emptyFolderImageUrl = __webpack_require__(404);
        this.resultsLoad = new core_1.EventEmitter();
        this.preview = new core_1.EventEmitter();
        this.nodeDbClick = new core_1.EventEmitter();
        this.queryParamName = 'q';
        this.skipCount = 0;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route) {
            this.route.params.forEach(function (params) {
                _this.searchTerm = params.hasOwnProperty(_this.queryParamName) ? params[_this.queryParamName] : null;
                _this.displaySearchResults(_this.searchTerm);
            });
        }
        else {
            this.displaySearchResults(this.searchTerm);
        }
    };
    SearchComponent.prototype.ngOnChanges = function (changes) {
        if (changes['searchTerm']) {
            this.searchTerm = changes['searchTerm'].currentValue;
            this.skipCount = 0;
            this.displaySearchResults(this.searchTerm);
        }
    };
    SearchComponent.prototype.onDoubleClick = function ($event) {
        if (!this.navigate && $event.value) {
            this.nodeDbClick.emit({ value: $event.value });
        }
    };
    SearchComponent.prototype.onPreviewFile = function (event) {
        if (event.value) {
            this.preview.emit({ value: event.value });
        }
    };
    SearchComponent.prototype.displaySearchResults = function (searchTerm) {
        var _this = this;
        if (searchTerm && this.searchService) {
            searchTerm = searchTerm + '*';
            var searchOpts = {
                include: ['path', 'allowableOperations'],
                skipCount: this.skipCount,
                rootNodeId: this.rootNodeId,
                nodeType: this.resultType,
                maxItems: this.maxResults,
                orderBy: this.resultSort
            };
            this.searchService
                .getNodeQueryResults(searchTerm, searchOpts)
                .subscribe(function (results) {
                _this.nodeResults = results;
                _this.pagination = results.list.pagination;
                _this.resultsLoad.emit(results.list.entries);
                _this.errorMessage = null;
            }, function (error) {
                if (error.status !== 400) {
                    _this.errorMessage = error;
                    _this.resultsLoad.error(error);
                }
            });
        }
    };
    SearchComponent.prototype.onChangePageSize = function (event) {
        this.maxResults = event.maxItems;
        this.displaySearchResults(this.searchTerm);
    };
    SearchComponent.prototype.onNextPage = function (event) {
        this.skipCount = event.skipCount;
        this.displaySearchResults(this.searchTerm);
    };
    SearchComponent.prototype.onPrevPage = function (event) {
        this.skipCount = event.skipCount;
        this.displaySearchResults(this.searchTerm);
    };
    SearchComponent.prototype.onContentDelete = function (entry) {
        this.displaySearchResults(this.searchTerm);
    };
    SearchComponent.prototype.handlePermission = function (permission) {
        var permissionErrorMessage = this.translateService.get('PERMISSON.LACKOF', permission);
        this.notificationService.openSnackMessage(permissionErrorMessage.value, 3000);
    };
    return SearchComponent;
}());
SearchComponent.SINGLE_CLICK_NAVIGATION = 'click';
SearchComponent.DOUBLE_CLICK_NAVIGATION = 'dblclick';
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchComponent.prototype, "searchTerm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SearchComponent.prototype, "maxResults", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchComponent.prototype, "resultSort", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchComponent.prototype, "rootNodeId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchComponent.prototype, "resultType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchComponent.prototype, "navigationMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SearchComponent.prototype, "navigate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchComponent.prototype, "emptyFolderImageUrl", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SearchComponent.prototype, "resultsLoad", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], SearchComponent.prototype, "preview", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], SearchComponent.prototype, "nodeDbClick", void 0);
SearchComponent = SearchComponent_1 = __decorate([
    core_1.Component({
        selector: 'adf-search, alfresco-search',
        styles: [__webpack_require__(785)],
        template: __webpack_require__(615)
    }),
    __param(3, core_1.Optional()),
    __metadata("design:paramtypes", [typeof (_c = typeof ng2_alfresco_core_1.SearchService !== "undefined" && ng2_alfresco_core_1.SearchService) === "function" && _c || Object, typeof (_d = typeof ng2_alfresco_core_1.AlfrescoTranslationService !== "undefined" && ng2_alfresco_core_1.AlfrescoTranslationService) === "function" && _d || Object, typeof (_e = typeof ng2_alfresco_core_1.NotificationService !== "undefined" && ng2_alfresco_core_1.NotificationService) === "function" && _e || Object, typeof (_f = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _f || Object])
], SearchComponent);
exports.SearchComponent = SearchComponent;
var SearchComponent_1, _a, _b, _c, _d, _e, _f;


/***/ }),

/***/ 613:
/***/ (function(module, exports) {

module.exports = "<table data-automation-id=\"autocomplete_results\" *ngIf=\"results && results.length && searchTerm\"\n       class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp full-width\">\n    <tbody #resultsTableBody>\n    <tr id=\"result_row_{{idx}}\" *ngFor=\"let result of results; let idx = index\" tabindex=\"0\"\n            (blur)=\"onRowBlur($event)\" (focus)=\"onRowFocus($event)\"\n            (click)=\"onItemClick(result)\"\n            (keyup.enter)=\"onRowEnter(result)\"\n            (keyup.arrowdown)=\"onRowArrowDown($event)\"\n            (keyup.arrowup)=\"onRowArrowUp($event)\"\n            (keyup.escape)=\"onRowEscape($event)\"\n            attr.data-automation-id=\"autocomplete_result_for_{{result.entry.name}}\">\n        <td class=\"img-td\"><img src=\"{{getMimeTypeIcon(result)}}\" alt=\"{{result.entry.name}}\"/></td>\n        <td>\n            <div id=\"result_name_{{idx}}\" *ngIf=\"highlight; else elseBlock\" class=\"truncate\" [innerHtml]=\"result.entry.name | highlight: searchTerm\"></div>\n            <ng-template #elseBlock>\n                <div id=\"result_name_{{idx}}\" class=\"truncate\" [innerHtml]=\"result.entry.name\"></div>\n            </ng-template>\n            <div id=\"result_user_{{idx}}\"  class=\"truncate\">{{result.entry.createdByUser.displayName}}</div>\n        </td>\n    </tr>\n    </tbody>\n</table>\n\n<table id=\"search_no_result\" data-automation-id=\"search_no_result_found\" *ngIf=\"results && results.length === 0\"\n       class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp full-width\">\n    <tbody>\n    <tr>\n        <td>\n            <div class=\"truncate\"><b> {{ 'SEARCH.RESULTS.NONE' | translate:{searchTerm: searchTerm} }}</b></div>\n        </td>\n    </tr>\n    </tbody>\n</table>\n\n<table data-automation-id=\"autocomplete_error_message\" *ngIf=\"errorMessage\"\n       class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp full-width\">\n    <tbody>\n    <tr>\n        <td>{{ 'SEARCH.RESULTS.ERROR' | translate:{errorMessage: errorMessage} }}</td>\n    </tr>\n    </tbody>\n</table>\n";

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"onSearch(f.value)\">\n    <div [class]=\"getTextFieldClassName()\">\n        <label *ngIf=\"expandable\" class=\"mdl-button mdl-js-button mdl-button--icon\" for=\"searchControl\">\n            <i mdl-upgrade class=\"material-icons\">search</i>\n        </label>\n        <div [class]=\"getTextFieldHolderClassName()\">\n            <input\n                mdl\n                class=\"mdl-textfield__input\"\n                [type]=\"inputType\"\n                [autocomplete]=\"getAutoComplete()\"\n                data-automation-id=\"search_input\"\n                #searchInput\n                id=\"searchControl\"\n                [formControl]=\"searchControl\"\n                [(ngModel)]=\"searchTerm\"\n                (focus)=\"onFocus($event)\"\n                (blur)=\"onBlur($event)\"\n                (keyup.escape)=\"onEscape()\"\n                (keyup.arrowdown)=\"onArrowDown()\"\n                aria-labelledby=\"searchLabel\">\n            <label id=\"searchLabel\" class=\"mdl-textfield__label\" for=\"searchControl\">{{'SEARCH.CONTROL.LABEL' | translate}}</label>\n        </div>\n    </div>\n</form>\n<adf-search-autocomplete\n    #autocomplete\n    *ngIf=\"liveSearchEnabled\"\n    [searchTerm]=\"liveSearchTerm\"\n    [rootNodeId]=\"liveSearchRoot\"\n    [resultType]=\"liveSearchResultType\"\n    [resultSort]=\"liveSearchResultSort\"\n    [maxResults]=\"liveSearchMaxResults\"\n    [highlight]=\"highlight\"\n    [ngClass]=\"{active: searchActive, valid: searchValid}\"\n    (fileSelect)=\"onFileClicked($event)\"\n    (searchFocus)=\"onAutoCompleteFocus($event)\"\n    (scrollBack)=\"onAutoCompleteReturn($event)\"\n    (cancel)=\"onAutoCompleteCancel($event)\">\n</adf-search-autocomplete>\n";

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

module.exports = "<div data-automation-id=\"search_result_table\"\n     class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp full-width\">\n    <p data-automation-id=\"search_error_message\" *ngIf=\"errorMessage\">{{ 'SEARCH.RESULTS.ERROR' | translate:{errorMessage: errorMessage} }}</p>\n    <div class=\"container\">\n        <adf-document-list\n            [node]=\"nodeResults\"\n            [contextMenuActions]=\"true\"\n            [contentActions]=\"true\"\n            [navigationMode]=\"navigationMode\"\n            [navigate]=\"navigate\"\n            [enablePagination]=\"false\"\n            (nodeDblClick)=\"onDoubleClick($event)\"\n            (preview)=\"onPreviewFile($event)\">\n            <empty-folder-content>\n                <ng-template>\n                    <div class=\"empty_template\">\n                        <div class=\"no-result-message\">{{ 'SEARCH.RESULTS.NONE' | translate:{searchTerm: searchTerm} }}</div>\n                        <img [src]=\"emptyFolderImageUrl\" class=\"no-result__empty_doc_lib\">\n                    </div>\n                </ng-template>\n            </empty-folder-content>\n\n            <content-columns>\n                <content-column key=\"$thumbnail\" type=\"image\"></content-column>\n                <content-column\n                    title=\"{{'SEARCH.DOCUMENT_LIST.COLUMNS.DISPLAY_NAME' | translate}}\"\n                    key=\"name\"\n                    sortable=\"true\"\n                    class=\"full-width ellipsis-cell\">\n                </content-column>\n                <content-column\n                    title=\"{{'SEARCH.DOCUMENT_LIST.COLUMNS.CREATED_BY' | translate}}\"\n                    key=\"createdByUser.displayName\"\n                    sortable=\"true\"\n                    class=\"desktop-only\">\n                </content-column>\n                <content-column\n                    title=\"{{'SEARCH.DOCUMENT_LIST.COLUMNS.CREATED_ON' | translate}}\"\n                    key=\"createdAt\"\n                    type=\"date\"\n                    format=\"medium\"\n                    sortable=\"true\"\n                    class=\"desktop-only\">\n                </content-column>\n            </content-columns>\n\n            <content-actions>\n                <!-- folder actions -->\n                <content-action\n                    target=\"folder\"\n                    title=\"{{'SEARCH.DOCUMENT_LIST.ACTIONS.FOLDER.DELETE' | translate}}\"\n                    permission=\"delete\"\n                    handler=\"delete\"\n                    (permissionEvent)=\"handlePermission($event)\">\n                </content-action>\n                <!-- document actions -->\n                <content-action\n                    target=\"document\"\n                    title=\"{{'SEARCH.DOCUMENT_LIST.ACTIONS.DOCUMENT.DOWNLOAD' | translate}}\"\n                    handler=\"download\">\n                </content-action>\n                <content-action\n                    target=\"document\"\n                    title=\"{{'SEARCH.DOCUMENT_LIST.ACTIONS.DOCUMENT.DELETE' | translate}}\"\n                    permission=\"delete\"\n                    handler=\"delete\"\n                    (execute)=\"onContentDelete($event)\"\n                    (permissionEvent)=\"handlePermission($event)\">\n                </content-action>\n            </content-actions>\n        </adf-document-list>\n\n        <adf-pagination\n            (changePageSize)=\"onChangePageSize($event)\"\n            (nextPage)=\"onNextPage($event)\"\n            (prevPage)=\"onPrevPage($event)\"\n            [pagination]=\"pagination\"\n            [maxItems]=\"maxResults\"\n            [supportedPageSizes]=\"[5, 10, 15, 20]\">\n        </adf-pagination>\n    </div>\n</div>\n";

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  z-index: 5;\n  display: none;\n  color: #555;\n  margin: -21px 0px 0px 0px; }\n\n:host a {\n  color: #555;\n  text-decoration: none; }\n\n:host table {\n  width: 300px; }\n\n:host .mdl-data-table tbody tr {\n  height: 32px; }\n\n:host .mdl-data-table td {\n  height: 32px;\n  padding: 8px;\n  text-align: left;\n  border-top: none;\n  border-bottom: none; }\n\n:host.active.valid {\n  display: block; }\n\n.img-td {\n  width: 30px; }\n\n.truncate {\n  width: 240px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n:host /deep/ .highlight {\n  color: #33afdf; }\n\n@media screen and (max-width: 400px) {\n  :host {\n    right: 0; }\n  .truncate {\n    width: 200px; } }\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = ".search-field {\n  width: 267px; }\n\n@media only screen and (max-width: 400px) {\n  .search-field {\n    width: 200px; } }\n\n@media only screen and (max-width: 320px) {\n  .search-field {\n    width: 160px; } }\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = ":host .mdl-data-table caption {\n  margin: 0 0 16px 0;\n  text-align: left; }\n\n:host .mdl-data-table td {\n  white-space: nowrap; }\n\n:host .mdl-data-table td.col-mimetype-icon {\n  width: 24px; }\n\n:host .col-display-name {\n  min-width: 250px;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.no-result-message {\n  height: 32px;\n  opacity: 0.26;\n  font-family: Muli, Helvetica, Arial, sans-serif;\n  font-size: 24px;\n  line-height: 1.33;\n  letter-spacing: -1px;\n  color: #000000; }\n\n.no-result__empty_doc_lib {\n  width: 565px;\n  height: 161px;\n  object-fit: contain;\n  margin-top: 17px; }\n\n.empty_template {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px; }\n"

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(700);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(701);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(702);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var forms_1 = __webpack_require__(9);
var ng2_alfresco_core_1 = __webpack_require__(1);
var ng2_alfresco_documentlist_1 = __webpack_require__(388);
var search_autocomplete_component_1 = __webpack_require__(36);
var search_control_component_1 = __webpack_require__(60);
var search_component_1 = __webpack_require__(61);
var ng2_alfresco_core_2 = __webpack_require__(1);
exports.SearchOptions = ng2_alfresco_core_2.SearchOptions;
exports.SearchService = ng2_alfresco_core_2.SearchService;
__export(__webpack_require__(61));
__export(__webpack_require__(60));
__export(__webpack_require__(36));
var ng2_alfresco_core_3 = __webpack_require__(1);
var search_autocomplete_component_2 = __webpack_require__(36);
var search_control_component_2 = __webpack_require__(60);
var search_component_2 = __webpack_require__(61);
var ng2_alfresco_core_4 = __webpack_require__(1);
exports.AlfrescoSearchService = ng2_alfresco_core_4.SearchService;
var search_component_3 = __webpack_require__(61);
exports.AlfrescoSearchComponent = search_component_3.SearchComponent;
var search_control_component_3 = __webpack_require__(60);
exports.AlfrescoSearchControlComponent = search_control_component_3.SearchControlComponent;
var search_autocomplete_component_3 = __webpack_require__(36);
exports.AlfrescoSearchAutocompleteComponent = search_autocomplete_component_3.SearchAutocompleteComponent;
exports.ALFRESCO_SEARCH_DIRECTIVES = [
    search_component_1.SearchComponent,
    search_control_component_1.SearchControlComponent,
    search_autocomplete_component_1.SearchAutocompleteComponent,
    search_component_2.SearchComponent,
    search_control_component_2.SearchControlComponent,
    search_autocomplete_component_2.SearchAutocompleteComponent
];
exports.ALFRESCO_SEARCH_PROVIDERS = [
    ng2_alfresco_core_1.SearchService,
    ng2_alfresco_core_3.SearchService
];
var SearchModule = SearchModule_1 = (function () {
    function SearchModule() {
    }
    SearchModule.forRoot = function () {
        return {
            ngModule: SearchModule_1,
            providers: exports.ALFRESCO_SEARCH_PROVIDERS.slice()
        };
    };
    return SearchModule;
}());
SearchModule = SearchModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            ng2_alfresco_documentlist_1.DocumentListModule,
            ng2_alfresco_core_1.CoreModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: exports.ALFRESCO_SEARCH_DIRECTIVES.slice(),
        providers: exports.ALFRESCO_SEARCH_PROVIDERS.concat([
            {
                provide: ng2_alfresco_core_1.TRANSLATION_PROVIDER,
                multi: true,
                useValue: {
                    name: 'ng2-alfresco-search',
                    source: 'assets/ng2-alfresco-search'
                }
            }
        ]),
        exports: exports.ALFRESCO_SEARCH_DIRECTIVES.slice()
    })
], SearchModule);
exports.SearchModule = SearchModule;
var SearchModule_1;


/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ })

/******/ });
});
//# sourceMappingURL=ng2-alfresco-search.js.map