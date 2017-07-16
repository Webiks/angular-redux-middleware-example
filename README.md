# Angular-Redux-Middleware

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) 
version 1.2.1 & Angular version 4.3.0


## Starting up with angular/cli and angular-redux

Run `ng new my-project` to create `angular/cli` project. then install 
the following with `npm i <package> --save`:
* flux-standard-action
* [redux](https://github.com/reactjs/redux) Predictable state container for Javascript.
* ?[redux-observable](https://github.com/redux-observable/redux-observable) Side-effect handling with Observables
* [@angular-redux/store](https://github.com/angular-redux/store) Redux + Angular bindings
* ?[@angular-redux/router](https://github.com/angular-redux/router) Time travel with the Angular router
* ?[@angular-redux/form](https://github.com/angular-redux/form) Time travel with Angular forms
* In addition, [Redux DevTools Chrome Extension](https://github.com/zalmoxisus/redux-devtools-extension) is recommanded.

## Let's create a very simple app. 
* all it does is add and delete items,which will be displayed using item-list component. 
* Each item payload will be a simple string value.
* For a more comperhensive example about using angular-redux see [Redux Zoo animals example](https://github.com/angular-redux/example-app)

* `ng generate component list-control`
* `ng generate component list-view`


set view
add component to app


app.module - import NgReduxModule

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
