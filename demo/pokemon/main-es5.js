(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"container\">\n    <div class=\"header__logo\">\n      <a routerLink=\"/\" class=\"header__logo-link\" tabindex=\"1\">\n        <img class=\"header__logo-img\" src=\"assets/img/pokeball.png\" alt=\"Pokemon World\"/>\n        <span class=\"header__logo-txt\">Pokemon World</span>\n      </a>\n    </div>\n    <div *ngIf=\"auth.isAuthenticated()\" class=\"header__user-actions\">\n      <div class=\"header__user-welcome\">\n        <div class=\"header__user-hello\">Hi,</div>\n        <div class=\"header__user-name\">{{auth.getUser()?.email}}</div>\n        <a (click)=\"auth.logout()\" class=\"header__user-logout\" title=\"Logout\" tabindex=\"2\">\n          <img class=\"header__logout-img\" src=\"assets/img/compass.png\"/>\n        </a>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <h1 class=\"login__heading\">Please Login</h1>\n  <form class=\"login__form\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n    <div class=\"form-group\">\n      <input class=\"login__input\"\n             type=\"text\"\n             placeholder=\"Email\"\n             name=\"email\"\n             formControlName=\"email\"\n             autocomplete=\"off\"\n             [ngClass]=\"{ 'is-invalid': formErrors.email }\"\n             required>\n      <div *ngIf=\"formErrors.email\" class=\"login__input-invalid-feedback\">\n        {{ formErrors.email }}\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <input class=\"login__input\"\n             type=\"password\"\n             placeholder=\"Password\"\n             name=\"password\"\n             formControlName=\"password\"\n             autocomplete=\"off\"\n             [ngClass]=\"{ 'is-invalid': formErrors.password }\"\n             required>\n      <div *ngIf=\"formErrors.password\" class=\"login__input-invalid-feedback\">\n        {{ formErrors.password }}\n      </div>\n    </div>\n    <div class=\"login__form-actions\">\n      <button [disabled]=\"!loginForm.valid\" class=\"login__submit-btn\">Sign In</button>\n    </div>\n  </form>\n</div>\n<div *ngIf=\"isLoading\" class=\"loading\">Loading&#8230;</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pokemon-detail/pokemon-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pokemon-detail/pokemon-detail.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pokemon-detail\">\n  <div class=\"pokemon-detail__header\" *ngIf=\"!(isLoading$ | async) && (pokemon$ | async)\">\n    <img src=\"{{(pokemon$ | async)?.sprites.front_default}}\"/>\n    <div class=\"kt-subheader__main\">\n      <h1 class=\"kt-subheader__title\">{{(pokemon$ | async)?.name}}</h1>\n      <div class=\"subheader\">\n        <span *ngFor=\"let type of (pokemon$ | async)?.types\">{{type.type.name}}</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"pokemon-detail__body\" *ngIf=\"!(isLoading$ | async) && (pokemon$ | async)\">\n    <div class=\"pokemon-detail__overview-card\">\n      <div class=\"pokemon-detail__card-box\">\n        <div class=\"counter\">\n          <div class=\"counter-label\">Order</div>\n          <div class=\"counter-number-group text-truncate\">\n            <span class=\"counter-number\">{{(pokemon$ | async)?.order}}</span>\n          </div>\n        </div>\n      </div>\n      <div>\n        <div class=\"counter\">\n          <div class=\"counter-label\">Weight</div>\n          <div class=\"counter-number-group text-truncate\">\n            <span class=\"counter-number\">{{(pokemon$ | async)?.weight}}</span>\n          </div>\n        </div>\n      </div>\n      <div>\n        <div class=\"counter\">\n          <div class=\"counter-label\">Height</div>\n          <div class=\"counter-number-group text-truncate\">\n            <span class=\"counter-number\">{{(pokemon$ | async)?.height}}</span>\n          </div>\n        </div>\n      </div>\n      <div>\n        <div class=\"counter\">\n          <div class=\"counter-label\">Base Experience</div>\n          <div class=\"counter-number-group text-truncate\">\n            <span class=\"counter-number\">{{(pokemon$ | async)?.base_experience}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"pokemon-detail__detail-card\">\n      <div class=\"pokemon-detail__detail-card-head\">\n        <h3>Abilities</h3>\n      </div>\n      <div class=\"pokemon-detail__detail-card-body\">\n        <div class=\"pokemon-detail__detail-card-item\" *ngFor=\"let ability of (pokemon$ | async)?.abilities\">\n          {{ability.ability.name}}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"pokemon-detail__detail-card\">\n      <div class=\"pokemon-detail__detail-card-head\">\n        <h3>Stats</h3>\n      </div>\n      <div class=\"pokemon-detail__detail-card-body\">\n        <div class=\"pokemon-detail__detail-card-item\" *ngFor=\"let stat of (pokemon$ | async)?.stats\">\n          {{stat.stat.name}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pokemon-detail__detail-card\" *ngIf=\"!(isLoading$ | async) && (pokemon$ | async)\">\n    <div class=\"pokemon-detail__detail-card-head\">\n      <h3>Moves</h3>\n    </div>\n    <div class=\"pokemon-detail__detail-card-body\">\n      <div class=\"pokemon-detail__detail-card-item\" *ngFor=\"let move of (pokemon$ | async)?.moves\">\n        {{move.move.name}}\n      </div>\n    </div>\n  </div>\n  <div class=\"pokemon-detail__not-found\" *ngIf=\"!(isLoading$ | async) && !(pokemon$ | async) && (isError$ | async)\">\n    Pokemon Not Found :(\n  </div>\n</div>\n<div *ngIf=\"(isLoading$ | async)\" class=\"loading\">Loading&#8230;</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pokemon-list/pokemon-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pokemon-list/pokemon-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pokemon-list\" *ngIf=\"!(isLoading$ | async)\">\n  <h1 class=\"pokemon-list__title\" *ngIf=\"pokemonList$ | async\">Pokemon List</h1>\n  <div class=\"pokemon-list__cards\">\n    <a routerLink=\"/{{pokemon.name}}\" class=\"pokemon-list__card-item\"\n       *ngFor=\"let pokemon of pokemonList$ | async | paginate: { itemsPerPage: ITEMS_PER_PAGE, currentPage: PAGE }\">\n      <img src=\"assets/img/pointer.png\"/>\n      <span>{{pokemon.name}}</span>\n    </a>\n  </div>\n  <p *ngIf=\"pokemonList$ | async\">\n    <pagination-controls (pageChange)=\"PAGE = $event\"></pagination-controls>\n  </p>\n</div>\n<div class=\"pokemon-list\" *ngIf=\"!(isLoading$ | async) && !(pokemonList$ | async) && (isError$ | async)\">\n  <h1 class=\"pokemon-list__title\">There is no pokemon :(</h1>\n</div>\n<div *ngIf=\"isLoading$ | async\" class=\"loading\">Loading&#8230;</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pokemon-list/pokemon-list.component */ "./src/app/components/pokemon-list/pokemon-list.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pokemon-detail/pokemon-detail.component */ "./src/app/components/pokemon-detail/pokemon-detail.component.ts");
/* harmony import */ var _guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth/auth.guard */ "./src/app/guards/auth/auth.guard.ts");







var routes = [
    {
        path: '',
        component: _components_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_3__["PokemonListComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'auth/login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: ':name',
        component: _components_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_5__["PokemonDetailComponent"],
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pokemon';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pokemon-detail/pokemon-detail.component */ "./src/app/components/pokemon-detail/pokemon-detail.component.ts");
/* harmony import */ var _components_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pokemon-list/pokemon-list.component */ "./src/app/components/pokemon-list/pokemon-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _root_store_root_store_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./root-store/root-store.module */ "./src/app/root-store/root-store.module.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_7__["PokemonDetailComponent"],
                _components_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_8__["PokemonListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebaseConfig),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
                _root_store_root_store_module__WEBPACK_IMPORTED_MODULE_18__["RootStoreModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  position: relative;\n  height: 50px;\n  box-shadow: 0px 4px 30px -4px rgba(0, 51, 90, 0.1);\n  background-color: #1e1e2d;\n  font-family: \"Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n@media (min-width: 1200px) {\n  .header {\n    height: 70px;\n  }\n}\n.header > .container {\n  display: flex;\n  height: 100%;\n  padding: 0.75rem 0;\n  justify-content: space-between;\n}\n@media (min-width: 1200px) {\n  .header > .container {\n    padding: 1rem 0;\n  }\n}\n.header__logo {\n  height: 100%;\n}\n.header__logo-link {\n  text-decoration: none;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.header__logo-img {\n  height: 100%;\n  display: inline-block;\n}\n.header__logo-txt {\n  display: inline-block;\n  margin-left: 0.5rem;\n  font-size: 1.25rem;\n  color: #ebebeb;\n  box-sizing: border-box;\n  font-weight: 400;\n  line-height: 24px;\n}\n@media (min-width: 1200px) {\n  .header__logo-txt {\n    font-size: 1.5rem;\n  }\n}\n.header__user-actions {\n  height: 100%;\n}\n.header__user-welcome {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.header__user-hello {\n  font-weight: 500;\n  font-size: 0.8rem;\n  color: #636177;\n}\n@media (min-width: 1200px) {\n  .header__user-hello {\n    font-size: 0.9rem;\n  }\n}\n.header__user-name {\n  margin-left: 0.25rem;\n  font-weight: 500;\n  font-size: 0.9rem;\n  color: #fff;\n}\n@media (min-width: 1200px) {\n  .header__user-name {\n    font-size: 1rem;\n  }\n}\n.header__user-logout {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  text-decoration: none;\n  padding: 0.1rem 0.2rem;\n  cursor: pointer;\n}\n@media (min-width: 1200px) {\n  .header__user-logout {\n    padding: 0.5rem 0.2rem;\n  }\n}\n.header__logout-img {\n  height: 100%;\n}\n.header__user-logout i {\n  font-size: 1.5rem;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHBlcmVuL0Rlc2t0b3AvcG9rZW1vbi9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSx5QkFBQTtFQUNBLDJMQUFBO0FDQ0Y7QURDRTtFQVBGO0lBUUksWUFBQTtFQ0VGO0FBQ0Y7QURDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ0VGO0FEQUU7RUFORjtJQU9JLGVBQUE7RUNHRjtBQUNGO0FEQUE7RUFDRSxZQUFBO0FDR0Y7QURBQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0dGO0FEQUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUNHRjtBREFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0dGO0FEREU7RUFURjtJQVVJLGlCQUFBO0VDSUY7QUFDRjtBRERBO0VBQ0UsWUFBQTtBQ0lGO0FEREE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDSUY7QUREQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSUY7QURGRTtFQUxGO0lBTUksaUJBQUE7RUNLRjtBQUNGO0FERkE7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDS0Y7QURIRTtFQU5GO0lBT0ksZUFBQTtFQ01GO0FBQ0Y7QURIQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ01GO0FESkU7RUFSRjtJQVNJLHNCQUFBO0VDT0Y7QUFDRjtBREpBO0VBQ0UsWUFBQTtBQ09GO0FESkE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAzMHB4IC00cHggcmdiYSgwLCA1MSwgOTAsIDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMmQ7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG59XG5cbi5oZWFkZXIgPiAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwLjc1cmVtIDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICB9XG59XG5cbi5oZWFkZXJfX2xvZ28ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXJfX2xvZ28tbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyX19sb2dvLWltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaGVhZGVyX19sb2dvLXR4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cblxuLmhlYWRlcl9fdXNlci1hY3Rpb25zIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyX191c2VyLXdlbGNvbWUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXJfX3VzZXItaGVsbG8ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6ICM2MzYxNzc7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG59XG5cbi5oZWFkZXJfX3VzZXItbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICNmZmY7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuXG4uaGVhZGVyX191c2VyLWxvZ291dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAuMXJlbSAwLjIwcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIHBhZGRpbmc6IC41cmVtIDAuMnJlbTtcbiAgfVxufVxuXG4uaGVhZGVyX19sb2dvdXQtaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyX191c2VyLWxvZ291dCBpIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiBncmF5O1xufVxuIiwiLmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDMwcHggLTRweCByZ2JhKDAsIDUxLCA5MCwgMC4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUyZDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gIH1cbn1cblxuLmhlYWRlciA+IC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaGVhZGVyID4gLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICB9XG59XG5cbi5oZWFkZXJfX2xvZ28ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXJfX2xvZ28tbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyX19sb2dvLWltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaGVhZGVyX19sb2dvLXR4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogI2ViZWJlYjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5oZWFkZXJfX2xvZ28tdHh0IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuXG4uaGVhZGVyX191c2VyLWFjdGlvbnMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXJfX3VzZXItd2VsY29tZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlcl9fdXNlci1oZWxsbyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzYzNjE3Nztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlYWRlcl9fdXNlci1oZWxsbyB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbn1cblxuLmhlYWRlcl9fdXNlci1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlYWRlcl9fdXNlci1uYW1lIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuLmhlYWRlcl9fdXNlci1sb2dvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMC4xcmVtIDAuMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaGVhZGVyX191c2VyLWxvZ291dCB7XG4gICAgcGFkZGluZzogMC41cmVtIDAuMnJlbTtcbiAgfVxufVxuXG4uaGVhZGVyX19sb2dvdXQtaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyX191c2VyLWxvZ291dCBpIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiBncmF5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  font-family: \"Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  width: 100%;\n  margin-top: 3rem;\n}\n\n.login__heading {\n  font-size: 2rem;\n  color: #67666e;\n  text-align: center;\n}\n\n.login__form {\n  margin: 2rem auto;\n  max-width: 500px;\n}\n\n.login__input {\n  border: none;\n  height: 50px;\n  margin-top: 1.25rem;\n  background-color: rgba(235, 235, 235, 0.6);\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n  width: 100%;\n  border-radius: 0.25rem;\n  outline: 0;\n}\n\n.login__input.is-invalid {\n  border: 1px solid #dc3545;\n}\n\n.login__form-actions {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 3rem 0;\n}\n\n.login__submit-btn {\n  height: 50px;\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n  box-shadow: 0px 4px 16px 0px rgba(88, 103, 221, 0.15);\n  background-color: #5867dd;\n  border-color: #5867dd;\n  color: #ffffff;\n  font-size: 0.8rem;\n  border-radius: 0.25rem;\n  cursor: pointer;\n}\n\n.login__submit-btn:disabled,\n.login__submit-btn[disabled] {\n  background-color: #a7b1ff;\n}\n\n.login__input-invalid-feedback {\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHBlcmVuL0Rlc2t0b3AvcG9rZW1vbi9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyTEFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EscURBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7O0VBRUUseUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbn1cblxuLmxvZ2luX19oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogIzY3NjY2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5fX2Zvcm0ge1xuICBtYXJnaW46IDJyZW0gYXV0bztcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLmxvZ2luX19pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwgMjM1LCAyMzUsIDAuNjApO1xuICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBvdXRsaW5lOiAwO1xufVxuXG4ubG9naW5fX2lucHV0LmlzLWludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGMzNTQ1O1xufVxuXG4ubG9naW5fX2Zvcm0tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogM3JlbSAwO1xufVxuXG4ubG9naW5fX3N1Ym1pdC1idG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTZweCAwcHggcmdiYSg4OCwgMTAzLCAyMjEsIDAuMTUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xuICBib3JkZXItY29sb3I6ICM1ODY3ZGQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9naW5fX3N1Ym1pdC1idG46ZGlzYWJsZWQsXG4ubG9naW5fX3N1Ym1pdC1idG5bZGlzYWJsZWRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E3YjFmZjtcbn1cblxuLmxvZ2luX19pbnB1dC1pbnZhbGlkLWZlZWRiYWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogODAlO1xuICBjb2xvcjogI2RjMzU0NTtcbn1cbiIsIi5sb2dpbiB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDNyZW07XG59XG5cbi5sb2dpbl9faGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICM2NzY2NmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luX19mb3JtIHtcbiAgbWFyZ2luOiAycmVtIGF1dG87XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5sb2dpbl9faW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsIDIzNSwgMjM1LCAwLjYpO1xuICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBvdXRsaW5lOiAwO1xufVxuXG4ubG9naW5fX2lucHV0LmlzLWludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGMzNTQ1O1xufVxuXG4ubG9naW5fX2Zvcm0tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogM3JlbSAwO1xufVxuXG4ubG9naW5fX3N1Ym1pdC1idG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTZweCAwcHggcmdiYSg4OCwgMTAzLCAyMjEsIDAuMTUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xuICBib3JkZXItY29sb3I6ICM1ODY3ZGQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9naW5fX3N1Ym1pdC1idG46ZGlzYWJsZWQsXG4ubG9naW5fX3N1Ym1pdC1idG5bZGlzYWJsZWRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E3YjFmZjtcbn1cblxuLmxvZ2luX19pbnB1dC1pbnZhbGlkLWZlZWRiYWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogODAlO1xuICBjb2xvcjogI2RjMzU0NTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(toastr, auth, router, formBuilder) {
        this.toastr = toastr;
        this.auth = auth;
        this.router = router;
        this.formBuilder = formBuilder;
        this.TIME_OUT = 2900;
        this.isLoading = false;
        this.formErrors = { email: '', password: '' };
        this.validationMessages = {
            email: {
                required: 'Email is required.',
                email: 'Email must be a valid email'
            },
            password: {
                required: 'Password is required.',
                minlength: 'Password must be at least 4 characters long.',
                maxlength: 'Password cannot be more than 40 characters long.',
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Building Form
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]],
        });
        // Binding Form Validator
        this.loginForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
    };
    // Updates validation state on form changes.
    LoginComponent.prototype.onValueChanged = function (data) {
        if (!this.loginForm) {
            return;
        }
        var form = this.loginForm;
        for (var field in this.formErrors) {
            // Clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isLoading = true;
        this.auth.login(this.loginForm.value.email, this.loginForm.value.password)
            .then(function () {
            _this.isLoading = false;
            _this.toastr.success('You\'ll automatically be redirected now.', 'Login Success!', { timeOut: _this.TIME_OUT });
            setTimeout(function () { _this.router.navigate(['']); }, _this.TIME_OUT + 100);
        })
            .catch(function (error) {
            _this.isLoading = false;
            _this.toastr.error(error.message, 'Login Error!', { timeOut: _this.TIME_OUT });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/pokemon-detail/pokemon-detail.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/pokemon-detail/pokemon-detail.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pokemon-detail__header {\n  display: flex;\n}\n.pokemon-detail__header img {\n  height: 100%;\n}\n.pokemon-detail__header h1 {\n  font-family: \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 300;\n  margin: 0.5rem 0;\n}\n.pokemon-detail__body {\n  margin: 1rem 0;\n}\n.pokemon-detail__overview-card {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  padding: 1rem;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  background-color: #fff;\n  border: 1px solid #e4eaec;\n  border-radius: 0.215rem;\n  justify-content: space-between;\n}\n.counter-label {\n  text-align: center;\n  margin: 0;\n  font-family: Roboto, sans-serif;\n  font-size: 0.5rem;\n  font-weight: 300;\n  line-height: 1.571429;\n  color: #76838f;\n  background-color: #fff;\n  margin-bottom: 1rem;\n}\n@media (min-width: 1200px) {\n  .counter-label {\n    font-size: 1rem;\n  }\n}\n.counter-number-group {\n  text-align: center;\n  font-weight: 300;\n  margin-top: 10px;\n  font-family: \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 300;\n  font-size: 32px;\n}\n@media (min-width: 1200px) {\n  .counter-number-group {\n    font-size: 48px;\n  }\n}\n.kt-subheader__title {\n  margin-bottom: 0;\n}\n.kt-subheader__main {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n.subheader span {\n  display: inline-block;\n  background-color: #8f1f24;\n  border-radius: 5px;\n  margin-right: 0.25rem;\n  padding: 0.25rem;\n  font-size: 0.9rem;\n  font-weight: 300;\n  color: #fff;\n  font-family: Roboto, sans-serif;\n  text-transform: capitalize;\n}\n.pokemon-detail__detail-card {\n  box-shadow: 0px 0px 13px 0px rgba(82, 63, 105, 0.05);\n  background-color: #ffffff;\n  margin: 20px 0;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  background-color: #fff;\n  border: 1px solid #e4eaec;\n  border-radius: 0.215rem;\n  padding: 1rem;\n}\n.pokemon-detail__detail-card-head {\n  border-bottom: 1px solid #ebedf2;\n}\n.pokemon-detail__detail-card-head h3 {\n  margin: 0.5rem 0;\n  padding: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: #464457;\n}\n.pokemon-detail__detail-card-item {\n  color: #6c7293;\n  font-size: 1rem;\n  font-weight: 400;\n  padding-right: 1.25rem;\n  flex-grow: 1;\n  transition: color 0.3s ease;\n  padding: 1rem 0;\n  border-bottom: 1px dashed #ebedf2;\n}\n.pokemon-detail__not-found {\n  text-align: center;\n  margin: 2rem;\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHBlcmVuL0Rlc2t0b3AvcG9rZW1vbi9zcmMvYXBwL2NvbXBvbmVudHMvcG9rZW1vbi1kZXRhaWwvcG9rZW1vbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcG9rZW1vbi1kZXRhaWwvcG9rZW1vbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0FDRkY7QURLRTtFQUNFLFlBQUE7QUNISjtBRE1FO0VBQ0UsOEVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSko7QURRQTtFQUNFLGNBQUE7QUNMRjtBRFFBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7QUNMRjtBRFFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0xGO0FET0U7RUFYRjtJQVlJLGVBQUE7RUNKRjtBQUNGO0FET0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4RUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0pGO0FETUU7RUFSRjtJQVNJLGVBQUE7RUNIRjtBQUNGO0FETUE7RUFDRSxnQkFBQTtBQ0hGO0FETUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ0hGO0FET0E7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0FDSkY7QURRQTtFQUNFLG9EQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDTEY7QURRQTtFQUNFLGdDQUFBO0FDTEY7QURPRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTEo7QURTQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQ05GO0FEU0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bva2Vtb24tZGV0YWlsL3Bva2Vtb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBva2Vtb24tZGV0YWlsIHtcbn1cblxuLnBva2Vtb24tZGV0YWlsX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlNWU3O1xuXG4gIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xuICB9XG59XG5cbi5wb2tlbW9uLWRldGFpbF9fYm9keSB7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4ucG9rZW1vbi1kZXRhaWxfX292ZXJ2aWV3LWNhcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMDUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTRlYWVjO1xuICBib3JkZXItcmFkaXVzOiAuMjE1cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb3VudGVyLWxhYmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41NzE0Mjk7XG4gIGNvbG9yOiAjNzY4MzhmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuLmNvdW50ZXItbnVtYmVyLWdyb3VwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDMycHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgfVxufVxuXG4ua3Qtc3ViaGVhZGVyX190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5rdC1zdWJoZWFkZXJfX21haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuXG4uc3ViaGVhZGVyIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZjFmMjQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5cbi5wb2tlbW9uLWRldGFpbF9fZGV0YWlsLWNhcmQge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEzcHggMHB4IHJnYmEoODIsIDYzLCAxMDUsIDAuMDUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDIwcHggMDtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0ZWFlYztcbiAgYm9yZGVyLXJhZGl1czogLjIxNXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLnBva2Vtb24tZGV0YWlsX19kZXRhaWwtY2FyZC1oZWFkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmVkZjI7XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjNDY0NDU3O1xuICB9XG59XG5cbi5wb2tlbW9uLWRldGFpbF9fZGV0YWlsLWNhcmQtaXRlbSB7XG4gIGNvbG9yOiAjNmM3MjkzO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XG4gIGZsZXgtZ3JvdzogMTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2ViZWRmMjtcbn1cblxuLnBva2Vtb24tZGV0YWlsX19ub3QtZm91bmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMnJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuIiwiLnBva2Vtb24tZGV0YWlsX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnBva2Vtb24tZGV0YWlsX19oZWFkZXIgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnBva2Vtb24tZGV0YWlsX19oZWFkZXIgaDEge1xuICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW46IDAuNXJlbSAwO1xufVxuXG4ucG9rZW1vbi1kZXRhaWxfX2JvZHkge1xuICBtYXJnaW46IDFyZW0gMDtcbn1cblxuLnBva2Vtb24tZGV0YWlsX19vdmVydmlldy1jYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGVhZWM7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjE1cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb3VudGVyLWxhYmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41NzE0Mjk7XG4gIGNvbG9yOiAjNzY4MzhmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY291bnRlci1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5cbi5jb3VudGVyLW51bWJlci1ncm91cCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY291bnRlci1udW1iZXItZ3JvdXAge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgfVxufVxuXG4ua3Qtc3ViaGVhZGVyX190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5rdC1zdWJoZWFkZXJfX21haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnN1YmhlYWRlciBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGYxZjI0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnBva2Vtb24tZGV0YWlsX19kZXRhaWwtY2FyZCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTNweCAwcHggcmdiYSg4MiwgNjMsIDEwNSwgMC4wNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogMjBweCAwO1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0ZWFlYztcbiAgYm9yZGVyLXJhZGl1czogMC4yMTVyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5wb2tlbW9uLWRldGFpbF9fZGV0YWlsLWNhcmQtaGVhZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlZGYyO1xufVxuLnBva2Vtb24tZGV0YWlsX19kZXRhaWwtY2FyZC1oZWFkIGgzIHtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNDY0NDU3O1xufVxuXG4ucG9rZW1vbi1kZXRhaWxfX2RldGFpbC1jYXJkLWl0ZW0ge1xuICBjb2xvcjogIzZjNzI5MztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xuICBmbGV4LWdyb3c6IDE7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNlYmVkZjI7XG59XG5cbi5wb2tlbW9uLWRldGFpbF9fbm90LWZvdW5kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/pokemon-detail/pokemon-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/pokemon-detail/pokemon-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: PokemonDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailComponent", function() { return PokemonDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _root_store_pokemon_detail_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../root-store/pokemon-detail-store */ "./src/app/root-store/pokemon-detail-store/index.ts");





var PokemonDetailComponent = /** @class */ (function () {
    function PokemonDetailComponent(store$, route) {
        this.store$ = store$;
        this.route = route;
        // Route Parameter
        var pokemonName = route.snapshot.paramMap.get('name');
        // Selectors
        this.isLoading$ = this.store$.select(_root_store_pokemon_detail_store__WEBPACK_IMPORTED_MODULE_4__["PokemonDetailStoreSelectors"].selectPokemonDetailIsLoading);
        this.isError$ = this.store$.select(_root_store_pokemon_detail_store__WEBPACK_IMPORTED_MODULE_4__["PokemonDetailStoreSelectors"].selectPokemonDetailError);
        this.pokemon$ = this.store$.select(_root_store_pokemon_detail_store__WEBPACK_IMPORTED_MODULE_4__["PokemonDetailStoreSelectors"].selectPokemonDetail);
        // Actions
        this.store$.dispatch(new _root_store_pokemon_detail_store__WEBPACK_IMPORTED_MODULE_4__["PokemonDetailStoreActions"].PokemonDetailLoadRequestAction(pokemonName));
    }
    PokemonDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pokemon-detail',
            template: __webpack_require__(/*! raw-loader!./pokemon-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pokemon-detail/pokemon-detail.component.html"),
            styles: [__webpack_require__(/*! ./pokemon-detail.component.scss */ "./src/app/components/pokemon-detail/pokemon-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PokemonDetailComponent);
    return PokemonDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/pokemon-list/pokemon-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/pokemon-list/pokemon-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pokemon-list__title {\n  font-weight: 400;\n  color: #25364a;\n  font-size: 1.5rem;\n  margin: 24px 0;\n  border-bottom: 1px solid #e2e8ee;\n  padding-bottom: 20px;\n}\n@media (min-width: 1200px) {\n  .pokemon-list__title {\n    font-size: 2rem;\n  }\n}\n.pokemon-list__cards {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n}\n@media (min-width: 600px) {\n  .pokemon-list__cards {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1200px) {\n  .pokemon-list__cards {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.pokemon-list__card-item {\n  margin: 10px;\n  border-radius: 3px;\n  color: #555;\n  position: relative;\n  display: flex;\n  padding: 10px;\n  background-color: #fff;\n  border: 1px solid #e7ecee;\n  cursor: pointer;\n  height: 60px;\n  font-family: \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  align-items: center;\n  text-transform: capitalize;\n  text-decoration: none;\n}\n.pokemon-list__card-item img {\n  height: 100%;\n  margin-right: 1rem;\n}\n.pokemon-list__card-item:hover {\n  background-color: #f6f8f8;\n}\np {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHBlcmVuL0Rlc2t0b3AvcG9rZW1vbi9zcmMvYXBwL2NvbXBvbmVudHMvcG9rZW1vbi1saXN0L3Bva2Vtb24tbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb2tlbW9uLWxpc3QvcG9rZW1vbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ0FGO0FERUU7RUFSRjtJQVNJLGVBQUE7RUNDRjtBQUNGO0FERUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7QUNDRjtBRENFO0VBSkY7SUFLSSxxQ0FBQTtFQ0VGO0FBQ0Y7QURBRTtFQVJGO0lBU0kscUNBQUE7RUNHRjtBQUNGO0FEQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDhFQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDR0Y7QURERTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0dKO0FEQ0E7RUFDRSx5QkFBQTtBQ0VGO0FEQ0E7RUFDRSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb2tlbW9uLWxpc3QvcG9rZW1vbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucG9rZW1vbi1saXN0X190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMjUzNjRhO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luOiAyNHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGVlO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG5cbi5wb2tlbW9uLWxpc3RfX2NhcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIH1cbn1cblxuLnBva2Vtb24tbGlzdF9fY2FyZC1pdGVtIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiAjNTU1O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2VjZWU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgfVxufVxuXG4ucG9rZW1vbi1saXN0X19jYXJkLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGY4O1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiLnBva2Vtb24tbGlzdF9fdGl0bGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzI1MzY0YTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbjogMjRweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThlZTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5wb2tlbW9uLWxpc3RfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cblxuLnBva2Vtb24tbGlzdF9fY2FyZHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5wb2tlbW9uLWxpc3RfX2NhcmRzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5wb2tlbW9uLWxpc3RfX2NhcmRzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICB9XG59XG5cbi5wb2tlbW9uLWxpc3RfX2NhcmQtaXRlbSB7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjogIzU1NTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlY2VlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogNjBweDtcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5wb2tlbW9uLWxpc3RfX2NhcmQtaXRlbSBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLnBva2Vtb24tbGlzdF9fY2FyZC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmODtcbn1cblxucCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/pokemon-list/pokemon-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pokemon-list/pokemon-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: PokemonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonListComponent", function() { return PokemonListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _root_store_pokemon_list_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../root-store/pokemon-list-store */ "./src/app/root-store/pokemon-list-store/index.ts");




var PokemonListComponent = /** @class */ (function () {
    function PokemonListComponent(store$) {
        this.store$ = store$;
        this.PAGE = 1;
        this.ITEMS_PER_PAGE = 18;
        // Selectors
        this.isLoading$ = this.store$.select(_root_store_pokemon_list_store__WEBPACK_IMPORTED_MODULE_3__["PokemonListStoreSelectors"].selectPokemonListError);
        this.isError$ = this.store$.select(_root_store_pokemon_list_store__WEBPACK_IMPORTED_MODULE_3__["PokemonListStoreSelectors"].selectPokemonListIsLoading);
        this.pokemonList$ = this.store$.select(_root_store_pokemon_list_store__WEBPACK_IMPORTED_MODULE_3__["PokemonListStoreSelectors"].selectPokemonList);
        // Actions
        this.store$.dispatch(new _root_store_pokemon_list_store__WEBPACK_IMPORTED_MODULE_3__["PokemonListStoreActions"].PokemonListLoadRequestAction());
    }
    PokemonListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pokemon-list',
            template: __webpack_require__(/*! raw-loader!./pokemon-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pokemon-list/pokemon-list.component.html"),
            styles: [__webpack_require__(/*! ./pokemon-list.component.scss */ "./src/app/components/pokemon-list/pokemon-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], PokemonListComponent);
    return PokemonListComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/auth/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['/auth/login']);
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/root-store/pokemon-detail-store/actions.ts":
/*!************************************************************!*\
  !*** ./src/app/root-store/pokemon-detail-store/actions.ts ***!
  \************************************************************/
/*! exports provided: ActionTypes, PokemonDetailLoadRequestAction, PokemonDetailLoadFailureAction, PokemonDetailLoadSuccessAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailLoadRequestAction", function() { return PokemonDetailLoadRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailLoadFailureAction", function() { return PokemonDetailLoadFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailLoadSuccessAction", function() { return PokemonDetailLoadSuccessAction; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["LOAD_POKEMON_DETAIL_REQUEST"] = "[POKEMON_DETAIL] Load Request";
    ActionTypes["LOAD_POKEMON_DETAIL_FAILURE"] = "[POKEMON_DETAIL] Load Failure";
    ActionTypes["LOAD_POKEMON_DETAIL_SUCCESS"] = "[POKEMON_DETAIL] Load Success";
})(ActionTypes || (ActionTypes = {}));
var PokemonDetailLoadRequestAction = /** @class */ (function () {
    function PokemonDetailLoadRequestAction(pokemonId) {
        this.pokemonId = pokemonId;
        this.type = ActionTypes.LOAD_POKEMON_DETAIL_REQUEST;
    }
    return PokemonDetailLoadRequestAction;
}());

var PokemonDetailLoadFailureAction = /** @class */ (function () {
    function PokemonDetailLoadFailureAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_POKEMON_DETAIL_FAILURE;
    }
    return PokemonDetailLoadFailureAction;
}());

var PokemonDetailLoadSuccessAction = /** @class */ (function () {
    function PokemonDetailLoadSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_POKEMON_DETAIL_SUCCESS;
    }
    return PokemonDetailLoadSuccessAction;
}());



/***/ }),

/***/ "./src/app/root-store/pokemon-detail-store/effects.ts":
/*!************************************************************!*\
  !*** ./src/app/root-store/pokemon-detail-store/effects.ts ***!
  \************************************************************/
/*! exports provided: PokemonDetailEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailEffects", function() { return PokemonDetailEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/app/root-store/pokemon-detail-store/actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/pokemon/pokemon.service */ "./src/app/services/pokemon/pokemon.service.ts");







var PokemonDetailEffects = /** @class */ (function () {
    function PokemonDetailEffects(pokemonService, actions$) {
        var _this = this;
        this.pokemonService = pokemonService;
        this.actions$ = actions$;
        this.loadPokemonDetail$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].LOAD_POKEMON_DETAIL_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            return _this.pokemonService.getPokemonDetail(action.pokemonId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (pokemon) {
                return (new _actions__WEBPACK_IMPORTED_MODULE_3__["PokemonDetailLoadSuccessAction"]({ pokemon_detail: pokemon }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_3__["PokemonDetailLoadFailureAction"](error)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PokemonDetailEffects.prototype, "loadPokemonDetail$", void 0);
    PokemonDetailEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_6__["PokemonService"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], PokemonDetailEffects);
    return PokemonDetailEffects;
}());



/***/ }),

/***/ "./src/app/root-store/pokemon-detail-store/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/root-store/pokemon-detail-store/index.ts ***!
  \**********************************************************/
/*! exports provided: PokemonDetailStoreModule, PokemonDetailStoreActions, PokemonDetailStoreSelectors, PokemonDetailStoreState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/root-store/pokemon-detail-store/actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailStoreActions", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./src/app/root-store/pokemon-detail-store/selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailStoreSelectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/root-store/pokemon-detail-store/state.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailStoreState", function() { return _state__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _pokemon_detail_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokemon-detail-store.module */ "./src/app/root-store/pokemon-detail-store/pokemon-detail-store.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailStoreModule", function() { return _pokemon_detail_store_module__WEBPACK_IMPORTED_MODULE_3__["PokemonDetailStoreModule"]; });








/***/ }),

/***/ "./src/app/root-store/pokemon-detail-store/pokemon-detail-store.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/root-store/pokemon-detail-store/pokemon-detail-store.module.ts ***!
  \********************************************************************************/
/*! exports provided: PokemonDetailStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailStoreModule", function() { return PokemonDetailStoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ "./src/app/root-store/pokemon-detail-store/reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./effects */ "./src/app/root-store/pokemon-detail-store/effects.ts");







var PokemonDetailStoreModule = /** @class */ (function () {
    function PokemonDetailStoreModule() {
    }
    PokemonDetailStoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('pokemon_detail', _reducer__WEBPACK_IMPORTED_MODULE_3__["pokemonDetailReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_effects__WEBPACK_IMPORTED_MODULE_6__["PokemonDetailEffects"]])
            ],
            providers: [_effects__WEBPACK_IMPORTED_MODULE_6__["PokemonDetailEffects"]]
        })
    ], PokemonDetailStoreModule);
    return PokemonDetailStoreModule;
}());



/***/ }),

/***/ "./src/app/root-store/pokemon-detail-store/reducer.ts":
/*!************************************************************!*\
  !*** ./src/app/root-store/pokemon-detail-store/reducer.ts ***!
  \************************************************************/
/*! exports provided: pokemonDetailReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pokemonDetailReducer", function() { return pokemonDetailReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/root-store/pokemon-detail-store/actions.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/root-store/pokemon-detail-store/state.ts");



function pokemonDetailReducer(state, action) {
    if (state === void 0) { state = _state__WEBPACK_IMPORTED_MODULE_2__["initialState"]; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOAD_POKEMON_DETAIL_REQUEST: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoading: true, error: null });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOAD_POKEMON_DETAIL_SUCCESS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { pokemon_detail: action.payload.pokemon_detail, isLoading: false, error: null });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOAD_POKEMON_DETAIL_FAILURE: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoading: false, error: action.payload.error });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/root-store/pokemon-detail-store/selectors.ts":
/*!**************************************************************!*\
  !*** ./src/app/root-store/pokemon-detail-store/selectors.ts ***!
  \**************************************************************/
/*! exports provided: selectPokemonDetailError, selectPokemonDetailIsLoading, selectPokemonDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPokemonDetailError", function() { return selectPokemonDetailError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPokemonDetailIsLoading", function() { return selectPokemonDetailIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPokemonDetail", function() { return selectPokemonDetail; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var getPokemonDetailState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('pokemon_detail');
var getError = function (state) { return state.error; };
var getIsLoading = function (state) { return state.isLoading; };
var getPokemonDetail = function (state) { return state.pokemon_detail; };
var selectPokemonDetailError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPokemonDetailState, getError);
var selectPokemonDetailIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPokemonDetailState, getIsLoading);
var selectPokemonDetail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPokemonDetailState, getPokemonDetail);


/***/ }),

/***/ "./src/app/root-store/pokemon-detail-store/state.ts":
/*!**********************************************************!*\
  !*** ./src/app/root-store/pokemon-detail-store/state.ts ***!
  \**********************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = {
    pokemon_detail: null,
    isLoading: false,
    error: null
};


/***/ }),

/***/ "./src/app/root-store/pokemon-list-store/actions.ts":
/*!**********************************************************!*\
  !*** ./src/app/root-store/pokemon-list-store/actions.ts ***!
  \**********************************************************/
/*! exports provided: ActionTypes, PokemonListLoadRequestAction, PokemonListLoadFailureAction, PokemonListLoadSuccessAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonListLoadRequestAction", function() { return PokemonListLoadRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonListLoadFailureAction", function() { return PokemonListLoadFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonListLoadSuccessAction", function() { return PokemonListLoadSuccessAction; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["LOAD_POKEMON_LIST_REQUEST"] = "[POKEMON_LIST] Load Request";
    ActionTypes["LOAD_POKEMON_LIST_FAILURE"] = "[POKEMON_LIST] Load Failure";
    ActionTypes["LOAD_POKEMON_LIST_SUCCESS"] = "[POKEMON_LIST] Load Success";
})(ActionTypes || (ActionTypes = {}));
var PokemonListLoadRequestAction = /** @class */ (function () {
    function PokemonListLoadRequestAction() {
        this.type = ActionTypes.LOAD_POKEMON_LIST_REQUEST;
    }
    return PokemonListLoadRequestAction;
}());

var PokemonListLoadFailureAction = /** @class */ (function () {
    function PokemonListLoadFailureAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_POKEMON_LIST_FAILURE;
    }
    return PokemonListLoadFailureAction;
}());

var PokemonListLoadSuccessAction = /** @class */ (function () {
    function PokemonListLoadSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_POKEMON_LIST_SUCCESS;
    }
    return PokemonListLoadSuccessAction;
}());



/***/ }),

/***/ "./src/app/root-store/pokemon-list-store/effects.ts":
/*!**********************************************************!*\
  !*** ./src/app/root-store/pokemon-list-store/effects.ts ***!
  \**********************************************************/
/*! exports provided: PokemonListEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonListEffects", function() { return PokemonListEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/app/root-store/pokemon-list-store/actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/pokemon/pokemon.service */ "./src/app/services/pokemon/pokemon.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var PokemonListEffects = /** @class */ (function () {
    function PokemonListEffects(pokemonService, actions$) {
        var _this = this;
        this.pokemonService = pokemonService;
        this.actions$ = actions$;
        this.loadPokemonList$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].LOAD_POKEMON_LIST_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            return _this.pokemonService.getPokemonList()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                var pokemon_list = data.results;
                return (new _actions__WEBPACK_IMPORTED_MODULE_3__["PokemonListLoadSuccessAction"]({ pokemon_list: pokemon_list }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_3__["PokemonListLoadFailureAction"](error)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PokemonListEffects.prototype, "loadPokemonList$", void 0);
    PokemonListEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_5__["PokemonService"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], PokemonListEffects);
    return PokemonListEffects;
}());



/***/ }),

/***/ "./src/app/root-store/pokemon-list-store/index.ts":
/*!********************************************************!*\
  !*** ./src/app/root-store/pokemon-list-store/index.ts ***!
  \********************************************************/
/*! exports provided: PokemonListStoreModule, PokemonListStoreActions, PokemonListStoreSelectors, PokemonListStoreState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/root-store/pokemon-list-store/actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PokemonListStoreActions", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./src/app/root-store/pokemon-list-store/selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PokemonListStoreSelectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/root-store/pokemon-list-store/state.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PokemonListStoreState", function() { return _state__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _pokemon_list_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokemon-list-store.module */ "./src/app/root-store/pokemon-list-store/pokemon-list-store.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PokemonListStoreModule", function() { return _pokemon_list_store_module__WEBPACK_IMPORTED_MODULE_3__["PokemonListStoreModule"]; });








/***/ }),

/***/ "./src/app/root-store/pokemon-list-store/pokemon-list-store.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/root-store/pokemon-list-store/pokemon-list-store.module.ts ***!
  \****************************************************************************/
/*! exports provided: PokemonListStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonListStoreModule", function() { return PokemonListStoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer */ "./src/app/root-store/pokemon-list-store/reducer.ts");
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./effects */ "./src/app/root-store/pokemon-list-store/effects.ts");







var PokemonListStoreModule = /** @class */ (function () {
    function PokemonListStoreModule() {
    }
    PokemonListStoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('pokemon_list', _reducer__WEBPACK_IMPORTED_MODULE_5__["pokemonListReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_effects__WEBPACK_IMPORTED_MODULE_6__["PokemonListEffects"]])
            ],
            providers: [_effects__WEBPACK_IMPORTED_MODULE_6__["PokemonListEffects"]]
        })
    ], PokemonListStoreModule);
    return PokemonListStoreModule;
}());



/***/ }),

/***/ "./src/app/root-store/pokemon-list-store/reducer.ts":
/*!**********************************************************!*\
  !*** ./src/app/root-store/pokemon-list-store/reducer.ts ***!
  \**********************************************************/
/*! exports provided: pokemonListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pokemonListReducer", function() { return pokemonListReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/root-store/pokemon-list-store/actions.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/root-store/pokemon-list-store/state.ts");



function pokemonListReducer(state, action) {
    if (state === void 0) { state = _state__WEBPACK_IMPORTED_MODULE_2__["initialState"]; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOAD_POKEMON_LIST_REQUEST: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoading: true, error: null });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOAD_POKEMON_LIST_SUCCESS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { pokemon_list: action.payload.pokemon_list, isLoading: false, error: null });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOAD_POKEMON_LIST_FAILURE: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoading: false, error: action.payload.error });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/root-store/pokemon-list-store/selectors.ts":
/*!************************************************************!*\
  !*** ./src/app/root-store/pokemon-list-store/selectors.ts ***!
  \************************************************************/
/*! exports provided: selectPokemonListError, selectPokemonListIsLoading, selectPokemonList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPokemonListError", function() { return selectPokemonListError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPokemonListIsLoading", function() { return selectPokemonListIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPokemonList", function() { return selectPokemonList; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var getPokemonListState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('pokemon_list');
var getError = function (state) { return state.error; };
var getIsLoading = function (state) { return state.isLoading; };
var getPokemonList = function (state) { return state.pokemon_list; };
var selectPokemonListError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPokemonListState, getError);
var selectPokemonListIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPokemonListState, getIsLoading);
var selectPokemonList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPokemonListState, getPokemonList);


/***/ }),

/***/ "./src/app/root-store/pokemon-list-store/state.ts":
/*!********************************************************!*\
  !*** ./src/app/root-store/pokemon-list-store/state.ts ***!
  \********************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = {
    pokemon_list: [],
    isLoading: false,
    error: null
};


/***/ }),

/***/ "./src/app/root-store/root-store.module.ts":
/*!*************************************************!*\
  !*** ./src/app/root-store/root-store.module.ts ***!
  \*************************************************/
/*! exports provided: RootStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootStoreModule", function() { return RootStoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pokemon_list_store_pokemon_list_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokemon-list-store/pokemon-list-store.module */ "./src/app/root-store/pokemon-list-store/pokemon-list-store.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _pokemon_detail_store_pokemon_detail_store_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pokemon-detail-store/pokemon-detail-store.module */ "./src/app/root-store/pokemon-detail-store/pokemon-detail-store.module.ts");








var RootStoreModule = /** @class */ (function () {
    function RootStoreModule() {
    }
    RootStoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pokemon_list_store_pokemon_list_store_module__WEBPACK_IMPORTED_MODULE_3__["PokemonListStoreModule"],
                _pokemon_detail_store_pokemon_detail_store_module__WEBPACK_IMPORTED_MODULE_7__["PokemonDetailStoreModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({}),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                })
            ]
        })
    ], RootStoreModule);
    return RootStoreModule;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(router, afAuth) {
        var _this = this;
        this.router = router;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(function (auth) {
            _this.user = auth;
            localStorage.setItem('user', JSON.stringify(_this.user));
        });
    }
    AuthService.prototype.login = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.isAuthenticated = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        return user !== null;
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.logout = function () {
        localStorage.setItem('user', null);
        this.afAuth.auth.signOut();
        this.router.navigate(['/auth/login']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/pokemon/pokemon.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/pokemon/pokemon.service.ts ***!
  \*****************************************************/
/*! exports provided: PokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return PokemonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PokemonService = /** @class */ (function () {
    function PokemonService(http) {
        this.http = http;
    }
    PokemonService.prototype.getPokemonList = function () {
        return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=964');
    };
    PokemonService.prototype.getPokemonDetail = function (name) {
        return this.http.get('https://pokeapi.co/api/v2/pokemon/' + name);
    };
    PokemonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PokemonService);
    return PokemonService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyBxlM9jN3lithVUWFL0x39xZuK9xyzZP4g',
        authDomain: 'pokemon-a87ed.firebaseapp.com',
        databaseURL: 'https://pokemon-a87ed.firebaseio.com',
        projectId: 'pokemon-a87ed',
        storageBucket: 'pokemon-a87ed.appspot.com',
        messagingSenderId: '617933617730',
        appId: '1:617933617730:web:8b2f37069ac3ba65'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alperen/Desktop/pokemon/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map