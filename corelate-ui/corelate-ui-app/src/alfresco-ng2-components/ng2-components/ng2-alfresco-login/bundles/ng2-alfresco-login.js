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
		module.exports = factory(require("@angular/core"), require("ng2-alfresco-core"), require("@angular/material"), require("@angular/forms"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "ng2-alfresco-core", "@angular/material", "@angular/forms"], factory);
	else if(typeof exports === 'object')
		exports["ng2-alfresco-login"] = factory(require("@angular/core"), require("ng2-alfresco-core"), require("@angular/material"), require("@angular/forms"));
	else
		root["ng2-alfresco-login"] = factory(root["@angular/core"], root["ng2-alfresco-core"], root["@angular/material"], root["@angular/forms"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_9__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 824);
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

/***/ 168:
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
var login_component_1 = __webpack_require__(27);
var LoginFooterDirective = (function () {
    function LoginFooterDirective(alfrescoLoginComponent) {
        this.alfrescoLoginComponent = alfrescoLoginComponent;
    }
    LoginFooterDirective.prototype.ngAfterContentInit = function () {
        this.alfrescoLoginComponent.footerTemplate = this.template;
    };
    return LoginFooterDirective;
}());
__decorate([
    core_1.ContentChild(core_1.TemplateRef),
    __metadata("design:type", Object)
], LoginFooterDirective.prototype, "template", void 0);
LoginFooterDirective = __decorate([
    core_1.Directive({
        selector: 'login-footer'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof login_component_1.LoginComponent !== "undefined" && login_component_1.LoginComponent) === "function" && _a || Object])
], LoginFooterDirective);
exports.LoginFooterDirective = LoginFooterDirective;
var _a;


/***/ }),

/***/ 169:
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
var login_component_1 = __webpack_require__(27);
var LoginHeaderDirective = (function () {
    function LoginHeaderDirective(alfrescoLoginComponent) {
        this.alfrescoLoginComponent = alfrescoLoginComponent;
    }
    LoginHeaderDirective.prototype.ngAfterContentInit = function () {
        this.alfrescoLoginComponent.headerTemplate = this.template;
    };
    return LoginHeaderDirective;
}());
__decorate([
    core_1.ContentChild(core_1.TemplateRef),
    __metadata("design:type", Object)
], LoginHeaderDirective.prototype, "template", void 0);
LoginHeaderDirective = __decorate([
    core_1.Directive({
        selector: 'login-header'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof login_component_1.LoginComponent !== "undefined" && login_component_1.LoginComponent) === "function" && _a || Object])
], LoginHeaderDirective);
exports.LoginHeaderDirective = LoginHeaderDirective;
var _a;


/***/ }),

/***/ 27:
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
var ng2_alfresco_core_1 = __webpack_require__(1);
var form_submit_event_model_1 = __webpack_require__(477);
var LoginSteps;
(function (LoginSteps) {
    LoginSteps[LoginSteps["Landing"] = 0] = "Landing";
    LoginSteps[LoginSteps["Checking"] = 1] = "Checking";
    LoginSteps[LoginSteps["Welcome"] = 2] = "Welcome";
})(LoginSteps || (LoginSteps = {}));
var LoginComponent = (function () {
    function LoginComponent(_fb, authService, settingsService, translateService, logService, elementRef) {
        this._fb = _fb;
        this.authService = authService;
        this.settingsService = settingsService;
        this.translateService = translateService;
        this.logService = logService;
        this.elementRef = elementRef;
        this.isPasswordShow = false;
        this.showRememberMe = true;
        this.showLoginActions = true;
        this.needHelpLink = '';
        this.registerLink = '';
        this.logoImageUrl = __webpack_require__(402);
        this.backgroundImageUrl = __webpack_require__(403);
        this.copyrightText = '&#169; 2016 Alfresco Software, Inc. All Rights Reserved.';
        this.onSuccess = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.executeSubmit = new core_1.EventEmitter();
        this.error = false;
        this.success = false;
        this.actualLoginStep = LoginSteps.Landing;
        this.LoginSteps = LoginSteps;
        this.rememberMe = true;
        this.minLength = 2;
        this.initFormError();
        this.initFormFieldsMessages();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.hasCustomFiledsValidation()) {
            this.form = this._fb.group(this.fieldsValidation);
        }
        else {
            this.initFormFieldsDefault();
            this.initFormFieldsMessagesDefault();
        }
        this.form.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
    };
    LoginComponent.prototype.onSubmit = function (values) {
        if (!this.checkRequiredParams()) {
            return false;
        }
        this.settingsService.setProviders(this.providers);
        this.settingsService.csrfDisabled = this.disableCsrf;
        this.disableError();
        var args = new form_submit_event_model_1.FormSubmitEvent(this.form);
        this.executeSubmit.emit(args);
        if (args.defaultPrevented) {
            return false;
        }
        else {
            this.performLogin(values);
        }
    };
    LoginComponent.prototype.onValueChanged = function (data) {
        this.success = false;
        this.disableError();
        for (var field in this.formError) {
            if (field) {
                this.formError[field] = '';
                var hasError = (this.form.controls[field].errors && data[field] !== '') ||
                    (this.form.controls[field].dirty && !this.form.controls[field].valid);
                if (hasError) {
                    for (var key in this.form.controls[field].errors) {
                        if (key) {
                            this.formError[field] += this._message[field][key] + '';
                        }
                    }
                }
            }
        }
    };
    LoginComponent.prototype.performLogin = function (values) {
        var _this = this;
        this.actualLoginStep = LoginSteps.Checking;
        this.authService.login(values.username, values.password, this.rememberMe)
            .subscribe(function (token) {
            _this.actualLoginStep = LoginSteps.Welcome;
            _this.success = true;
            _this.onSuccess.emit({ token: token, username: values.username, password: values.password });
        }, function (err) {
            _this.actualLoginStep = LoginSteps.Landing;
            _this.displayErrorMessage(err);
            _this.enableError();
            _this.onError.emit(err);
        }, function () { return _this.logService.info('Login done'); });
    };
    LoginComponent.prototype.displayErrorMessage = function (err) {
        if (err.error && err.error.crossDomain && err.error.message.indexOf('Access-Control-Allow-Origin') !== -1) {
            this.errorMsg = err.error.message;
            return;
        }
        if (err.status === 403 && err.message.indexOf('Invalid CSRF-token') !== -1) {
            this.errorMsg = 'LOGIN.MESSAGES.LOGIN-ERROR-CSRF';
            return;
        }
        if (err.status === 403 && err.message.indexOf('The system is currently in read-only mode') !== -1) {
            this.errorMsg = 'LOGIN.MESSAGES.LOGIN-ECM-LICENSE';
            return;
        }
        this.errorMsg = 'LOGIN.MESSAGES.LOGIN-ERROR-CREDENTIALS';
    };
    LoginComponent.prototype.checkRequiredParams = function () {
        if (this.providers === undefined || this.providers === null || this.providers === '') {
            this.errorMsg = 'LOGIN.MESSAGES.LOGIN-ERROR-PROVIDERS';
            this.enableError();
            var messageProviders = void 0;
            messageProviders = this.translateService.get(this.errorMsg);
            this.onError.emit(messageProviders.value);
            return false;
        }
        return true;
    };
    LoginComponent.prototype.addCustomFormError = function (field, msg) {
        this.formError[field] += msg;
    };
    LoginComponent.prototype.addCustomValidationError = function (field, ruleId, msg, params) {
        var _this = this;
        if (params) {
            this.translateService.get(msg, params).subscribe(function (res) {
                _this._message[field][ruleId] = res;
            });
        }
        else {
            this._message[field][ruleId] = msg;
        }
    };
    LoginComponent.prototype.toggleShowPassword = function () {
        this.isPasswordShow = !this.isPasswordShow;
        this.elementRef.nativeElement.querySelector('#password').type = this.isPasswordShow ? 'text' : 'password';
    };
    LoginComponent.prototype.isErrorStyle = function (field) {
        return !field.valid && field.dirty && !field.pristine;
    };
    LoginComponent.prototype.trimUsername = function (event) {
        event.target.value = event.target.value.trim();
    };
    LoginComponent.prototype.initFormError = function () {
        this.formError = {
            'username': '',
            'password': ''
        };
    };
    LoginComponent.prototype.initFormFieldsMessages = function () {
        this._message = {
            'username': {},
            'password': {}
        };
    };
    LoginComponent.prototype.initFormFieldsMessagesDefault = function () {
        var _this = this;
        this._message = {
            'username': {
                'required': 'LOGIN.MESSAGES.USERNAME-REQUIRED'
            },
            'password': {
                'required': 'LOGIN.MESSAGES.PASSWORD-REQUIRED'
            }
        };
        this.translateService.get('LOGIN.MESSAGES.USERNAME-MIN', { minLength: this.minLength }).subscribe(function (res) {
            _this._message['username']['minlength'] = res;
        });
    };
    LoginComponent.prototype.initFormFieldsDefault = function () {
        this.form = this._fb.group({
            username: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(this.minLength)])],
            password: ['', forms_1.Validators.required]
        });
    };
    LoginComponent.prototype.disableError = function () {
        this.error = false;
        this.initFormError();
    };
    LoginComponent.prototype.enableError = function () {
        this.error = true;
    };
    LoginComponent.prototype.hasCustomFiledsValidation = function () {
        return this.fieldsValidation !== undefined;
    };
    return LoginComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], LoginComponent.prototype, "showRememberMe", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], LoginComponent.prototype, "showLoginActions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LoginComponent.prototype, "needHelpLink", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LoginComponent.prototype, "registerLink", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LoginComponent.prototype, "logoImageUrl", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LoginComponent.prototype, "backgroundImageUrl", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LoginComponent.prototype, "copyrightText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LoginComponent.prototype, "providers", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "fieldsValidation", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], LoginComponent.prototype, "disableCsrf", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "onSuccess", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "onError", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], LoginComponent.prototype, "executeSubmit", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: 'adf-login, alfresco-login',
        template: __webpack_require__(612),
        styles: [__webpack_require__(782)],
        host: { '(blur)': 'onBlur($event)' },
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof ng2_alfresco_core_1.AlfrescoAuthenticationService !== "undefined" && ng2_alfresco_core_1.AlfrescoAuthenticationService) === "function" && _c || Object, typeof (_d = typeof ng2_alfresco_core_1.AlfrescoSettingsService !== "undefined" && ng2_alfresco_core_1.AlfrescoSettingsService) === "function" && _d || Object, typeof (_e = typeof ng2_alfresco_core_1.AlfrescoTranslationService !== "undefined" && ng2_alfresco_core_1.AlfrescoTranslationService) === "function" && _e || Object, typeof (_f = typeof ng2_alfresco_core_1.LogService !== "undefined" && ng2_alfresco_core_1.LogService) === "function" && _f || Object, typeof (_g = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _g || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b, _c, _d, _e, _f, _g;


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 375:
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
        material_1.MdIconModule,
        material_1.MdInputModule,
        material_1.MdProgressSpinnerModule
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

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/alfresco-logo.2db246e1d7e6fca3effb566e92e51f42.svg";

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/background.fa3544aac8d4255bcb78b25374bd0fe4.svg";

/***/ }),

/***/ 477:
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
var FormSubmitEvent = (function () {
    function FormSubmitEvent(_values) {
        this._defaultPrevented = false;
        this._values = _values;
    }
    Object.defineProperty(FormSubmitEvent.prototype, "values", {
        get: function () {
            return this._values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormSubmitEvent.prototype, "defaultPrevented", {
        get: function () {
            return this._defaultPrevented;
        },
        enumerable: true,
        configurable: true
    });
    FormSubmitEvent.prototype.preventDefault = function () {
        this._defaultPrevented = true;
    };
    return FormSubmitEvent;
}());
exports.FormSubmitEvent = FormSubmitEvent;


/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = "<div class=\"adf-login-content\"\n     [style.background-image]=\"'url(' + backgroundImageUrl + ')'\">\n    <md-card class=\"adf-login-card-wide\">\n        <form [formGroup]=\"form\" (submit)=\"onSubmit(form.value)\">\n\n            <md-card-header>\n                <md-card-title>\n                    <div class=\"adf-alfresco-logo\">\n                        <!--HEADER TEMPLATE-->\n                        <ng-template *ngIf=\"headerTemplate\"\n                                     ngFor [ngForOf]=\"[data]\"\n                                     [ngForTemplate]=\"headerTemplate\">\n                        </ng-template>\n                        <img *ngIf=\"!headerTemplate\" class=\"adf-img-logo\" [src]=\"logoImageUrl\"\n                             alt=\"{{'LOGIN.LOGO' | translate }}\">\n                    </div>\n                </md-card-title>\n            </md-card-header>\n\n            <md-card-content class=\"adf-login-controls\">\n\n                <!--ERRORS AREA-->\n                <div>\n                    <div *ngIf=\"error\" id=\"login-error\" data-automation-id=\"login-error\"\n                         class=\"error  adf-error-message\">\n                        <md-icon class=\"error-icon\">warning</md-icon>\n                        <span class=\"login-error-message\">{{errorMsg | translate }}</span>\n                    </div>\n                    <div *ngIf=\"success\" id=\"login-success\" data-automation-id=\"login-success\"\n                         class=\"adf-login-message\">\n                        {{'LOGIN.MESSAGES.LOGIN-SUCCESS' | translate }}\n                    </div>\n                </div>\n\n                <!--USERNAME FIELD-->\n                <div class=\"adf-login__field\" [ngClass]=\"{'is-invalid': isErrorStyle(form.controls.username)}\">\n                    <md-input-container class=\"adf-full-width\" floatPlaceholder=\"never\" color=\"primary\">\n                        <input mdInput placeholder=\"{{'LOGIN.LABEL.USERNAME' | translate }}\"\n                               type=\"text\"\n                               class=\"adf-full-width\"\n                               [formControl]=\"form.controls['username']\"\n                               autocapitalize=\"none\"\n                               id=\"username\"\n                               data-automation-id=\"username\"\n                               (blur)=\"trimUsername($event)\"\n                               tabindex=\"1\">\n                    </md-input-container>\n\n                    <span class=\"adf-login-validation\" for=\"username\" *ngIf=\"formError.username\">\n                        <span id=\"username-error\" class=\"adf-login-error\" data-automation-id=\"username-error\">{{formError.username | translate }}</span>\n                    </span>\n                </div>\n\n                <!--PASSWORD FIELD-->\n                <div class=\"adf-login__field alfresco-login__password\">\n                    <md-input-container class=\"adf-full-width\" floatPlaceholder=\"never\" color=\"primary\">\n                        <input mdInput placeholder=\"{{'LOGIN.LABEL.PASSWORD' | translate }}\"\n                               type=\"password\"\n                               [formControl]=\"form.controls['password']\"\n                               id=\"password\"\n                               data-automation-id=\"password\"\n                               tabindex=\"2\">\n                        <md-icon *ngIf=\"isPasswordShow\" mdSuffix class=\"adf-login-password-icon\"\n                                 data-automation-id=\"hide_password\" (click)=\"toggleShowPassword()\">visibility\n                        </md-icon>\n                        <md-icon *ngIf=\"!isPasswordShow\" mdSuffix class=\"adf-login-password-icon\"\n                                 data-automation-id=\"show_password\" (click)=\"toggleShowPassword()\">visibility_off\n                        </md-icon>\n                    </md-input-container>\n                    <span class=\"adf-login-validation\" for=\"password\" *ngIf=\"formError.password\">\n                        <span id=\"password-required\" class=\"adf-login-error\"\n                              data-automation-id=\"password-required\">{{formError.password | translate }}</span>\n                    </span>\n                </div>\n\n                <!--CUSTOM CONTENT-->\n                <ng-content></ng-content>\n\n                <br>\n                <button type=\"submit\" id=\"login-button\" tabindex=\"3\"\n                        class=\"adf-login-button\"\n                        md-raised-button color=\"primary\"\n                        [class.isChecking]=\"actualLoginStep === LoginSteps.Checking\"\n                        [class.isWelcome]=\"actualLoginStep === LoginSteps.Welcome\"\n                        data-automation-id=\"login-button\" [disabled]=\"!form.valid\">\n\n                    <span *ngIf=\"actualLoginStep === LoginSteps.Landing\" class=\"adf-login-button-label\">{{ 'LOGIN.BUTTON.LOGIN' | translate }}</span>\n\n                    <div *ngIf=\"actualLoginStep === LoginSteps.Checking\" class=\"adf-interactive-login-label\">\n                        <span class=\"adf-login-button-label\">{{ 'LOGIN.BUTTON.CHECKING' | translate }}</span>\n                        <md-spinner id=\"checking-spinner\" class=\"adf-login-checking-spinner\"></md-spinner>\n                    </div>\n\n                    <div *ngIf=\"actualLoginStep === LoginSteps.Welcome\" class=\"adf-interactive-login-label\">\n                        <span class=\"adf-login-button-label\">{{ 'LOGIN.BUTTON.WELCOME' | translate }}</span>\n                        <md-icon class=\"welcome-icon\">done</md-icon>\n                    </div>\n\n                </button>\n                <div *ngIf=\"showRememberMe\" class=\"adf-login__remember-me\" id=\"login-remember\">\n                    <md-checkbox color=\"primary\" class=\"rememberme-cb\" [checked]=\"rememberMe\"\n                                 (change)=\"rememberMe = !rememberMe\">{{ 'LOGIN.LABEL.REMEMBER' | translate }}\n                    </md-checkbox>\n                </div>\n            </md-card-content>\n            <md-card-actions *ngIf=\"footerTemplate || showLoginActions\">\n\n                <div class=\"adf-login-action-container\">\n                    <!--FOOTER TEMPLATE-->\n                    <ng-template *ngIf=\"footerTemplate\"\n                                 ngFor [ngForOf]=\"[data]\"\n                                 [ngForTemplate]=\"footerTemplate\">\n                    </ng-template>\n                    <div class=\"adf-login-action\" *ngIf=\"!footerTemplate && showLoginActions\">\n                        <div id=\"adf-login-action-left\" class=\"adf-login-action-left\">\n                            <a href=\"{{needHelpLink}}\">{{'LOGIN.ACTION.HELP' | translate }}</a>\n                        </div>\n                        <div id=\"adf-login-action-right\" class=\"adf-login-action-right\">\n                            <a href=\"{{registerLink}}\">{{'LOGIN.ACTION.REGISTER' | translate }}</a>\n                        </div>\n                    </div>\n                </div>\n            </md-card-actions>\n\n        </form>\n    </md-card>\n\n    <div class=\"copyright\" data-automation-id=\"login-copyright\">\n        {{ copyrightText }}\n    </div>\n</div>\n";

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(699);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 824:
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
var login_component_1 = __webpack_require__(27);
var login_footer_directive_1 = __webpack_require__(168);
var login_header_directive_1 = __webpack_require__(169);
var material_module_1 = __webpack_require__(375);
var login_header_directive_2 = __webpack_require__(169);
exports.LoginHeaderDirective = login_header_directive_2.LoginHeaderDirective;
var login_footer_directive_2 = __webpack_require__(168);
exports.LoginFooterDirective = login_footer_directive_2.LoginFooterDirective;
var login_component_2 = __webpack_require__(27);
exports.LoginComponent = login_component_2.LoginComponent;
var login_component_3 = __webpack_require__(27);
var login_component_4 = __webpack_require__(27);
exports.AlfrescoLoginComponent = login_component_4.LoginComponent;
exports.ALFRESCO_LOGIN_DIRECTIVES = [
    login_component_1.LoginComponent,
    login_footer_directive_1.LoginFooterDirective,
    login_header_directive_1.LoginHeaderDirective,
    login_component_3.LoginComponent
];
var LoginModule = LoginModule_1 = (function () {
    function LoginModule() {
    }
    LoginModule.forRoot = function () {
        return {
            ngModule: LoginModule_1
        };
    };
    return LoginModule;
}());
LoginModule = LoginModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            ng2_alfresco_core_1.CoreModule,
            material_module_1.MaterialModule
        ],
        declarations: exports.ALFRESCO_LOGIN_DIRECTIVES.slice(),
        providers: [
            {
                provide: ng2_alfresco_core_1.TRANSLATION_PROVIDER,
                multi: true,
                useValue: {
                    name: 'ng2-alfresco-login',
                    source: 'assets/ng2-alfresco-login'
                }
            }
        ],
        exports: exports.ALFRESCO_LOGIN_DIRECTIVES.concat([
            material_module_1.MaterialModule
        ])
    })
], LoginModule);
exports.LoginModule = LoginModule;
var LoginModule_1;


/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ })

/******/ });
});
//# sourceMappingURL=ng2-alfresco-login.js.map