/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
		exports["ng2-alfresco-userinfo"] = factory(require("@angular/core"), require("ng2-alfresco-core"), require("rxjs/Rx"), require("@angular/material"));
	else
		root["ng2-alfresco-userinfo"] = factory(root["@angular/core"], root["ng2-alfresco-core"], root["rxjs/Rx"], root["@angular/material"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 829);
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

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var BpmUserService = (function () {
    function BpmUserService(apiService, logService) {
        this.apiService = apiService;
        this.logService = logService;
    }
    BpmUserService.prototype.getCurrentUserInfo = function () {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.apiService.getInstance().activiti.profileApi.getProfile())
            .map(function (data) { return data; })
            .catch(function (err) { return _this.handleError(err); });
    };
    BpmUserService.prototype.getCurrentUserProfileImage = function () {
        return this.apiService.getInstance().activiti.profileApi.getProfilePictureUrl();
    };
    BpmUserService.prototype.handleError = function (error) {
        this.logService.error(error);
        return Rx_1.Observable.throw(error || 'Server error');
    };
    return BpmUserService;
}());
BpmUserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _b || Object])
], BpmUserService);
exports.BpmUserService = BpmUserService;
var _a, _b;


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var EcmUserService = (function () {
    function EcmUserService(apiService, contentService, logService) {
        this.apiService = apiService;
        this.contentService = contentService;
        this.logService = logService;
    }
    EcmUserService.prototype.getUserInfo = function (userName) {
        var _this = this;
        return Rx_1.Observable.fromPromise(this.callApiGetPersonInfo(userName))
            .map(function (data) { return data['entry']; })
            .catch(function (err) { return _this.handleError(err); });
    };
    EcmUserService.prototype.getCurrentUserInfo = function () {
        return this.getUserInfo('-me-');
    };
    EcmUserService.prototype.callApiGetPersonInfo = function (userName, opts) {
        return this.apiService.getInstance().core.peopleApi.getPerson(userName, opts);
    };
    EcmUserService.prototype.getUserProfileImage = function (avatarId) {
        if (avatarId) {
            var nodeObj = { entry: { id: avatarId } };
            return this.contentService.getContentUrl(nodeObj);
        }
    };
    EcmUserService.prototype.handleError = function (error) {
        this.logService.error(error);
        return Rx_1.Observable.throw(error || 'Server error');
    };
    return EcmUserService;
}());
EcmUserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_alfresco_core_1.AlfrescoApiService !== "undefined" && ng2_alfresco_core_1.AlfrescoApiService) === "function" && _a || Object, typeof (_b = typeof ng2_alfresco_core_1.AlfrescoContentService !== "undefined" && ng2_alfresco_core_1.AlfrescoContentService) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _c || Object])
], EcmUserService);
exports.EcmUserService = EcmUserService;
var _a, _b, _c;


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var bpm_user_model_1 = __webpack_require__(479);
var ecm_user_model_1 = __webpack_require__(480);
var bpm_user_service_1 = __webpack_require__(101);
var ecm_user_service_1 = __webpack_require__(102);
var UserInfoComponent = (function () {
    function UserInfoComponent(ecmUserService, bpmUserService, authService) {
        var _this = this;
        this.ecmUserService = ecmUserService;
        this.bpmUserService = bpmUserService;
        this.authService = authService;
        this.ecmBackgroundImage = __webpack_require__(407);
        this.bpmBackgroundImage = __webpack_require__(406);
        this.menuPositionX = 'after';
        this.menuPositionY = 'below';
        this.anonymousImageUrl = __webpack_require__(405);
        authService.onLogin.subscribe(function (response) {
            _this.getUserInfo();
        });
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        this.getUserInfo();
    };
    UserInfoComponent.prototype.getUserInfo = function () {
        this.getEcmUserInfo();
        this.getBpmUserInfo();
    };
    UserInfoComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    UserInfoComponent.prototype.getEcmUserInfo = function () {
        var _this = this;
        if (this.authService.isEcmLoggedIn()) {
            this.ecmUserService.getCurrentUserInfo()
                .subscribe(function (res) {
                _this.ecmUser = new ecm_user_model_1.EcmUserModel(res);
                _this.getEcmAvatar();
            });
        }
        else {
            this.ecmUser = null;
            this.ecmUserImage = null;
        }
    };
    UserInfoComponent.prototype.getBpmUserInfo = function () {
        var _this = this;
        if (this.authService.isBpmLoggedIn()) {
            this.bpmUserService.getCurrentUserInfo()
                .subscribe(function (res) {
                _this.bpmUser = new bpm_user_model_1.BpmUserModel(res);
            });
            this.bpmUserImage = this.bpmUserService.getCurrentUserProfileImage();
        }
        else {
            this.bpmUser = null;
            this.bpmUserImage = null;
        }
    };
    UserInfoComponent.prototype.onImageLoadingError = function (event) {
        if (event) {
            var element = event.target;
            element.src = this.fallBackThumbnailImage || this.anonymousImageUrl;
        }
    };
    UserInfoComponent.prototype.stopClosing = function (event) {
        event.stopPropagation();
    };
    UserInfoComponent.prototype.getEcmAvatar = function () {
        this.ecmUserImage = this.ecmUserService.getUserProfileImage(this.ecmUser.avatarId);
    };
    UserInfoComponent.prototype.getUserAvatar = function () {
        return this.ecmUserImage || this.bpmUserImage;
    };
    UserInfoComponent.prototype.getBpmUserAvatar = function () {
        return this.bpmUserImage;
    };
    UserInfoComponent.prototype.getEcmUserAvatar = function () {
        return this.ecmUserImage;
    };
    return UserInfoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UserInfoComponent.prototype, "ecmBackgroundImage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UserInfoComponent.prototype, "bpmBackgroundImage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UserInfoComponent.prototype, "menuPositionX", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UserInfoComponent.prototype, "menuPositionY", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UserInfoComponent.prototype, "fallBackThumbnailImage", void 0);
UserInfoComponent = __decorate([
    core_1.Component({
        selector: 'adf-userinfo, ng2-alfresco-userinfo',
        styles: [__webpack_require__(795)],
        template: __webpack_require__(626),
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof ecm_user_service_1.EcmUserService !== "undefined" && ecm_user_service_1.EcmUserService) === "function" && _a || Object, typeof (_b = typeof bpm_user_service_1.BpmUserService !== "undefined" && bpm_user_service_1.BpmUserService) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.AlfrescoAuthenticationService !== "undefined" && ng2_alfresco_core_1.AlfrescoAuthenticationService) === "function" && _c || Object])
], UserInfoComponent);
exports.UserInfoComponent = UserInfoComponent;
var _a, _b, _c;


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
        material_1.MdMenuModule,
        material_1.MdTabsModule,
        material_1.MdCardModule
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

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/anonymous.6de44e6eb9dc32187635b13868e6b2fc.gif";

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/bpm-background.ee4a55539eeb9762ca6b7b037664b192.png";

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ecm-background.84de3762880d8e6b7d94ab283b026d3a.png";

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var BpmUserModel = (function () {
    function BpmUserModel(obj) {
        if (obj) {
            this.apps = obj.apps;
            this.capabilities = obj.capabilities;
            this.company = obj.company;
            this.created = obj.created;
            this.email = obj.email;
            this.externalId = obj.externalId;
            this.firstName = obj.firstName;
            this.lastName = obj.lastName;
            this.fullname = obj.fullname;
            this.fullNameDisplay = obj ? this.formatValue(obj.firstName).trim() + ' ' + this.formatValue(obj.lastName).trim() : null;
            this.groups = obj.groups;
            this.id = obj.id;
            this.lastUpdate = obj.lastUpdate;
            this.latestSyncTimeStamp = obj.latestSyncTimeStamp;
            this.password = obj.password;
            this.pictureId = obj.pictureId;
            this.status = obj.status;
            this.tenantId = obj.tenantId;
            this.tenantName = obj.tenantName;
            this.tenantPictureId = obj.tenantPictureId;
            this.type = obj.type;
        }
    }
    BpmUserModel.prototype.formatValue = function (value) {
        return value && value !== 'null' ? value : 'N/A';
    };
    return BpmUserModel;
}());
exports.BpmUserModel = BpmUserModel;


/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var EcmUserModel = (function () {
    function EcmUserModel(obj) {
        this.id = obj && obj.id || null;
        this.firstName = obj && obj.firstName;
        this.lastName = obj && obj.lastName;
        this.fullNameDisplay = obj ? this.formatValue(obj.firstName).trim() + ' ' + this.formatValue(obj.lastName).trim() : null;
        this.description = obj && obj.description || null;
        this.avatarId = obj && obj.avatarId || null;
        this.email = obj && obj.email || null;
        this.skypeId = obj && obj.skypeId;
        this.googleId = obj && obj.googleId;
        this.instantMessageId = obj && obj.instantMessageId;
        this.jobTitle = obj && obj.jobTitle || null;
        this.location = obj && obj.location || null;
        this.company = obj && obj.company;
        this.mobile = obj && obj.mobile;
        this.telephone = obj && obj.telephone;
        this.statusUpdatedAt = obj && obj.statusUpdatedAt;
        this.userStatus = obj && obj.userStatus;
        this.enabled = obj && obj.enabled;
        this.emailNotificationsEnabled = obj && obj.emailNotificationsEnabled;
    }
    EcmUserModel.prototype.formatValue = function (value) {
        return value && value !== 'null' ? value : 'N/A';
    };
    return EcmUserModel;
}());
exports.EcmUserModel = EcmUserModel;


/***/ }),

/***/ 626:
/***/ (function(module, exports) {

module.exports = "<div id=\"userinfo_container\" *ngIf=\"isLoggedIn()\">\n    <button md-button [mdMenuTriggerFor]=\"menu\" class=\"adf-userinfo-menu_button\">\n    <div class=\"adf-userinfo-button-profile\" id=\"user-profile\" data-automation-id=\"user-profile\">\n        <img id=\"logged-user-img\" [src]=\"getUserAvatar()\"\n             alt=\"user-info-profile-button\"\n             (error)=\"onImageLoadingError($event)\" class=\"adf-userinfo-profile-image\"/>\n    </div>\n</button>\n    <md-menu #menu=\"mdMenu\" id=\"user-profile-lists\" [xPosition]=\"menuPositionX\" [yPosition]=\"menuPositionY\" [overlapTrigger]=\"false\" class=\"adf-userinfo-menu\">\n        <md-tab-group id=\"tab-group-env\" (click)=\"stopClosing($event)\"\n            class=\"adf-userinfo-tab\" [class.adf-hide-tab]=\"!bpmUser || !ecmUser\">\n            <md-tab id=\"ecm-panel\" label=\"Content Services\" *ngIf=\"ecmUser\">\n                <md-card class=\"adf-userinfo-card\">\n                    <md-card-header class=\"adf-userinfo-card-header\" [style.background-image]=\"'url(' + ecmBackgroundImage + ')'\">\n                        <img class=\"adf-userinfo-profile-picture\"\n                            id=\"ecm-user-detail-image\"\n                            alt=\"ecm-profile-image\"\n                            (error)=\"onImageLoadingError($event)\"\n                            [src]=\"getEcmUserAvatar()\" />\n                       <h2 class=\"adf-userinfo-title\" id=\"ecm-username\">{{ecmUser.fullNameDisplay}}</h2>\n                    </md-card-header>\n                    <md-card-content>\n                        <div class=\"adf-userinfo-supporting-text\">\n                                <div class=\"adf-userinfo-detail\">\n                                    <span id=\"ecm-full-name\" class=\"adf-userinfo__detail-title\">{{ecmUser.fullNameDisplay}}</span>\n                                    <span class=\"adf-userinfo__detail-profile\" id=\"ecm-email\"> {{ecmUser.email}} </span>\n                                </div>\n                                <div class=\"adf-userinfo-detail\">\n                                    <span class=\"adf-userinfo__secondary-info\">\n                                        {{ 'USER_PROFILE.LABELS.ECM.JOB_TITLE' | translate }}\n                                        <span id=\"ecm-job-title\" class=\"adf-userinfo__detail-profile\"> {{ ecmUser.jobTitle ? ecmUser.jobTitle : 'N/A' }} </span>\n                                    </span>\n                                </div>\n                        </div>\n                    </md-card-content>\n                </md-card>\n            </md-tab>\n            <md-tab label=\"Process Services\" id=\"bpm-panel\" *ngIf=\"bpmUser\">\n            <md-card class=\"adf-userinfo-card\">\n                <md-card-header class=\"adf-userinfo-card-header\" [style.background-image]=\"'url(' + bpmBackgroundImage + ')'\">\n                    <img class=\"adf-userinfo-profile-picture\"\n                        id=\"bpm-user-detail-image\"\n                        alt=\"bpm-profile-image\"\n                        (error)=\"onImageLoadingError($event)\"\n                        [src]=\"getBpmUserAvatar()\"/>\n                   <h2 class=\"adf-userinfo-title\" id=\"bpm-username\">{{bpmUser.fullNameDisplay}}</h2>\n                </md-card-header>\n                <md-card-content>\n                    <div class=\"adf-userinfo-supporting-text\">\n                            <div class=\"adf-userinfo-detail\">\n                                <span id=\"bpm-full-name\" class=\"adf-userinfo__detail-title\">{{ bpmUser.fullNameDisplay }}</span>\n                                <span class=\"adf-userinfo__detail-profile\" id=\"bpm-email\"> {{bpmUser.email}} </span>\n                            </div>\n                            <div class=\"adf-userinfo-detail\">\n                                <span id=\"bpm-tenant\" class=\"adf-userinfo__secondary-info\">\n                                    {{ 'USER_PROFILE.LABELS.BPM.TENANT' | translate }}\n                                    <span class=\"adf-userinfo__detail-profile\">{{ bpmUser.tenantName ? bpmUser.tenantName : 'N/A' }}</span>\n                                </span>\n                            </div>\n                    </div>\n                </md-card-content>\n            </md-card>\n            </md-tab>\n        </md-tab-group>\n    </md-menu>\n</div>\n";

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(712);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
var material_module_1 = __webpack_require__(379);
var user_info_component_1 = __webpack_require__(178);
var bpm_user_service_1 = __webpack_require__(101);
var ecm_user_service_1 = __webpack_require__(102);
__export(__webpack_require__(178));
__export(__webpack_require__(101));
__export(__webpack_require__(102));
exports.USER_INFO_DIRECTIVES = [
    user_info_component_1.UserInfoComponent
];
exports.USER_INFO_PROVIDERS = [
    ecm_user_service_1.EcmUserService,
    bpm_user_service_1.BpmUserService
];
var UserInfoComponentModule = UserInfoComponentModule_1 = (function () {
    function UserInfoComponentModule() {
    }
    UserInfoComponentModule.forRoot = function () {
        return {
            ngModule: UserInfoComponentModule_1,
            providers: exports.USER_INFO_PROVIDERS.slice()
        };
    };
    return UserInfoComponentModule;
}());
UserInfoComponentModule = UserInfoComponentModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            ng2_alfresco_core_1.CoreModule,
            material_module_1.MaterialModule
        ],
        declarations: exports.USER_INFO_DIRECTIVES.slice(),
        providers: exports.USER_INFO_PROVIDERS.concat([
            {
                provide: ng2_alfresco_core_1.TRANSLATION_PROVIDER,
                multi: true,
                useValue: {
                    name: 'ng2-alfresco-userinfo',
                    source: 'assets/ng2-alfresco-userinfo'
                }
            }
        ]),
        exports: exports.USER_INFO_DIRECTIVES.slice()
    })
], UserInfoComponentModule);
exports.UserInfoComponentModule = UserInfoComponentModule;
var UserInfoComponentModule_1;


/***/ })

/******/ });
});
//# sourceMappingURL=ng2-alfresco-userinfo.js.map