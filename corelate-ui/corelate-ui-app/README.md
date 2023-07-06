Quick Start Guide
==========================

### Things you need to install

* [Yarn] (https://yarnpkg.com/en/)
* [Angular CLI] (https://cli.angular.io/)

# Installation

This project uses `yarn` instead of `npm` to manage dependencies.

`yarn install` - install dependencies

`yarn add <package>` - add and install prod dependencies

`yarn add <package> -D` - add and install dev dependencies (i.e. test libs)

# Activiti

Build all alfresco components - this should be done whenever we change something on alfresco components
```
cd alfresco-ng2-components/scripts
./npm-build-all.sh
```

Serve or Build project
```
cd corelate-ui-app
# serve
ng serve --proxy-config proxy.conf.js or npm start (To prevent CORS error)
# build
ng build
```

Since we are directly accessing activiti backend, use google chrome with disabled security to get around CORS error
```
# command to open google chrome with disabled security
google-chrome --disable-web-security --user-data-dir=/tmp
```

Browse activiti `localhost:4200/actitivi`

# Template

## Code scaffolding

Run `ng g c component-name` or `ng generate component component-name` to generate a new component. 
You can also use `ng generate directive|pipe|service|class|module`.

Reusable Generated Components should always be placed on `shared/reusable-components` path.
And add them into `reusable-components.module` at `modules/reusable-components-module`.

## Specify path for generated components

Run `ng g c component-name path/path`.
You can also use `ng generate directive|pipe|service|class|module path/path`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
Run `ng serve -o` to automatically open the app into the browser.
The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 
Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Naming a constant variable

Constant variable should always be written on uppercase ie. `const APP_ROUTES`.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Code Structure
## Import order

1. Angular modules
2. Vendor modules
3. Project modules

i.e.
```
// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

// Vendor modules
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { CarouselModule, AccordionModule } from 'ngx-bootstrap';

// Project modules
// Routes
import { AppRouterModule } from './app.routes';

// Services
import { ContentService } from './services/content.service';

// Components
import { AppComponent } from './app.component';
import { TranslationSwitcherComponent } from './components/translation-switcher/translation-switcher.component';
import { FaqComponent } from './components/faq/faq.component';
```

## Library vs Component way

```
// Library way
import { cloneDeep } from 'lodash';

// Component way
import cloneDeep from 'lodash/cloneDeep';
```

It is highly recommended to import libraries using the component way whenever possible as it greatly reduces the total webpack output size.

For more info on why: https://stackoverflow.com/questions/34239731/how-to-minimize-the-size-of-webpacks-bundle

## Environment Variables

 1. Create new environment setting in `/src/environments` using `environment.ts` as a template and `environment.<name>.ts` as the file name.
 2. Update newly created environment and replace values. You can add new keys but all environments should have the same set of keys.
 3. Open `angular-cli.json` and include new environment
```
"environments": {
      "dev": "environments/environment.ts",
      "prod": "environments/environment.prod.ts",
      "<name>": "environments/environment.<name>.ts"
}
```
 4. Run serve/build and specify environment
```
ng serve --environment=<name>
ng build --environment=<name>
```
 5. Usage
 ```
 // relative import`
 import { environment } '../environment/environment'

 // sample key
 environment.api
 ```

## Suggested HTML attributes order

1. Angular attributes ordered by
    1. Directives
    2. Template directives - *
    3. Two way data binding - [()]
    4. Attribute / Property Binding - []
    5. Event binding - ()
    6. Template variables - #
2. HTML attributes ordered by
    1. type
    2. id
    3. class
    4. name
    5. etc

i.e.
```
<form *ngIf="" [(ngModel)]="" (ngSubmit)="" #sampleForm="ngForm" id="" class="" name="" target>
   ...
</form>
```

Source:
https://softwareengineering.stackexchange.com/questions/305329/is-there-a-standardized-practice-for-ordering-attributes-in-html-tags
