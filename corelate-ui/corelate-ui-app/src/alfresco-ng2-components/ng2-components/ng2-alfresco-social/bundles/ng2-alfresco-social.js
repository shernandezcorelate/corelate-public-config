/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
		exports["ng2-alfresco-social"] = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("@angular/material"));
	else
		root["ng2-alfresco-social"] = factory(root["@angular/core"], root["ng2-alfresco-core"], root["rxjs/Rx"], root["@angular/material"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 826);
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

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var rating_service_1 = __webpack_require__(77);
var LikeComponent = (function () {
    function LikeComponent(ratingService) {
        this.ratingService = ratingService;
        this.likesCounter = 0;
        this.ratingType = 'likes';
        this.isLike = false;
        this.changeVote = new core_1.EventEmitter();
    }
    LikeComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.clean();
        var ratingObserver = this.ratingService.getRating(this.nodeId, this.ratingType);
        ratingObserver.subscribe(function (data) {
            if (data.entry.aggregate) {
                _this.likesCounter = data.entry.aggregate.numberOfRatings;
                if (data.entry.ratedAt) {
                    _this.isLike = true;
                }
            }
        });
        return ratingObserver;
    };
    LikeComponent.prototype.likeClick = function () {
        var _this = this;
        if (this.isLike) {
            this.ratingService.deleteRating(this.nodeId, this.ratingType).subscribe(function () {
                _this.likesCounter -= 1;
                _this.isLike = false;
            });
        }
        else {
            this.ratingService.postRating(this.nodeId, this.ratingType, true).subscribe(function (data) {
                _this.likesCounter = data.entry.aggregate.numberOfRatings;
                _this.isLike = true;
            });
        }
        this.changeVote.emit(this.likesCounter);
    };
    LikeComponent.prototype.clean = function () {
        this.isLike = false;
        this.likesCounter = 0;
    };
    return LikeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LikeComponent.prototype, "nodeId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LikeComponent.prototype, "changeVote", void 0);
LikeComponent = __decorate([
    core_1.Component({
        selector: 'adf-like',
        styles: [__webpack_require__(786)],
        template: __webpack_require__(616),
        providers: [rating_service_1.RatingService],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof rating_service_1.RatingService !== "undefined" && rating_service_1.RatingService) === "function" && _a || Object])
], LikeComponent);
exports.LikeComponent = LikeComponent;
var _a;


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var rating_service_1 = __webpack_require__(77);
var RatingComponent = (function () {
    function RatingComponent(ratingService) {
        this.ratingService = ratingService;
        this.average = 0;
        this.ratingType = 'fiveStar';
        this.changeVote = new core_1.EventEmitter();
        this.stars = [];
    }
    RatingComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var ratingObserver = this.ratingService.getRating(this.nodeId, this.ratingType);
        ratingObserver.subscribe(function (data) {
            if (data.entry.aggregate) {
                _this.average = data.entry.aggregate.average;
                _this.calculateStars();
            }
        });
        return ratingObserver;
    };
    RatingComponent.prototype.calculateStars = function () {
        this.stars = [];
        for (var i = 0; i < 5; i++) {
            if (i < this.average) {
                this.stars.push({ fill: true });
            }
            else {
                this.stars.push({ fill: false });
            }
        }
        this.changeVote.emit(this.average);
    };
    RatingComponent.prototype.updateVote = function (vote) {
        var _this = this;
        this.ratingService.postRating(this.nodeId, this.ratingType, vote).subscribe(function (data) {
            if (data.entry.aggregate) {
                if (_this.average !== data.entry.aggregate.average) {
                    _this.average = data.entry.aggregate.average;
                    _this.calculateStars();
                }
            }
        });
    };
    return RatingComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RatingComponent.prototype, "nodeId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RatingComponent.prototype, "changeVote", void 0);
RatingComponent = __decorate([
    core_1.Component({
        selector: 'adf-rating',
        styles: [__webpack_require__(787)],
        template: __webpack_require__(617),
        providers: [rating_service_1.RatingService],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof rating_service_1.RatingService !== "undefined" && rating_service_1.RatingService) === "function" && _a || Object])
], RatingComponent);
exports.RatingComponent = RatingComponent;
var _a;


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
        material_1.MdListModule
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

/***/ 616:
/***/ (function(module, exports) {

module.exports = "<div id=\"adf-like-container\" class=\"adf-like-container\">\n    <div class=\"adf-like\">\n        <span id=\"adf-like-{{nodeId}}\" [ngClass]=\"{'adf-like-select': isLike ,'adf-like-grey': !isLike  }\"\n              (click)=\"likeClick()\">\n            <md-icon>thumb_up</md-icon>\n        </span>\n    </div>\n    <div id=\"adf-like-counter\" class=\"adf-like-counter\">{{likesCounter}}</div>\n    <div class=\"adf-left\" *ngIf=\"likesCounter<=1\">Like</div>\n    <div class=\"adf-left\" *ngIf=\"likesCounter>1\">Likes</div>\n</div>\n";

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "<md-list id=\"adf-rating-container\" class=\"adf-rating-container\">\n    <md-list-item class=\"adf-rating-star\" *ngFor=\"let currentRate of stars; let idx = index\">\n            <span id=\"adf-rate-{{idx}}\">\n                <md-icon id=\"adf-grey-star-{{idx}}\" *ngIf=\"currentRate.fill\" class=\"adf-colored-star\"\n                         (click)=\"updateVote(idx + 1)\">star_rate\n                </md-icon>\n                <md-icon id=\"adf-colored-star-{{idx}}\" *ngIf=\"!currentRate.fill\" class=\"adf-grey-star\"\n                         (click)=\"updateVote(idx + 1)\">star_border\n                </md-icon>\n            </span>\n    </md-list-item>\n</md-list>\n";

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = ".adf-like-container {\n  overflow: hidden;\n  width: 100%; }\n  .adf-like-container .adf-like {\n    padding: 5px;\n    cursor: pointer;\n    float: left;\n    margin: 5px 0px 5px 5px; }\n  .adf-like-container .adf-like-select {\n    cursor: pointer;\n    color: #2196f3; }\n  .adf-like-container .adf-like-select:hover {\n    cursor: pointer;\n    color: #808080; }\n  .adf-like-container .adf-like-grey {\n    cursor: pointer;\n    color: #808080; }\n  .adf-like-container .adf-like-grey:hover {\n    cursor: pointer;\n    color: #2196f3; }\n  .adf-like-container .adf-like-counter {\n    float: left;\n    padding: 13px 0 0 0; }\n  .adf-like-container .adf-left {\n    float: left;\n    padding: 13px 0 0 4px; }\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = ".adf-rating-container {\n  overflow: hidden;\n  width: 100%; }\n  .adf-rating-container .adf-rating-star {\n    float: left;\n    transition: all .3s;\n    padding: 1px;\n    cursor: pointer; }\n    .adf-rating-container .adf-rating-star .mat-list-item-content {\n      padding: 0 2px !important; }\n  .adf-rating-container .adf-colored-star {\n    color: #ffe944; }\n  .adf-rating-container .adf-grey-star {\n    color: #808080; }\n  .adf-rating-container .adf-stars-container {\n    padding: 0 !important;\n    margin: 0 !important;\n    display: inline-block; }\n  .adf-rating-container .adf-rating-star:hover {\n    transform: rotate(13deg) scale(1.2); }\n"

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var RatingService = (function () {
    function RatingService(apiService) {
        this.apiService = apiService;
    }
    RatingService.prototype.getRating = function (nodeId, ratingType) {
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().core.ratingsApi.getRating(nodeId, ratingType))
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    RatingService.prototype.postRating = function (nodeId, ratingType, vote) {
        var ratingBody = {
            'id': ratingType,
            'myRating': vote
        };
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().core.ratingsApi.rate(nodeId, ratingBody))
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    RatingService.prototype.deleteRating = function (nodeId, ratingType) {
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().core.ratingsApi.removeRating(nodeId, ratingType))
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    RatingService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error || 'Server error');
    };
    return RatingService;
}());
RatingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _a || Object])
], RatingService);
exports.RatingService = RatingService;
var _a;


/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(703);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(704);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var like_component_1 = __webpack_require__(170);
var rating_component_1 = __webpack_require__(171);
var material_module_1 = __webpack_require__(376);
var rating_service_1 = __webpack_require__(77);
__export(__webpack_require__(171));
__export(__webpack_require__(170));
__export(__webpack_require__(77));
exports.RATING_DIRECTIVES = [
    rating_component_1.RatingComponent,
    like_component_1.LikeComponent
];
exports.RATING_PROVIDERS = [
    rating_service_1.RatingService
];
var SocialModule = SocialModule_1 = (function () {
    function SocialModule() {
    }
    SocialModule.forRoot = function () {
        return {
            ngModule: SocialModule_1,
            providers: exports.RATING_DIRECTIVES.slice()
        };
    };
    return SocialModule;
}());
SocialModule = SocialModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            ng2_alfresco_core_1.CoreModule,
            material_module_1.MaterialModule
        ],
        declarations: exports.RATING_DIRECTIVES.slice(),
        providers: exports.RATING_PROVIDERS.slice(),
        exports: exports.RATING_DIRECTIVES.slice()
    })
], SocialModule);
exports.SocialModule = SocialModule;
var SocialModule_1;


/***/ })

/******/ });
});
//# sourceMappingURL=ng2-alfresco-social.js.map