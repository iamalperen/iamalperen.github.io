function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pomodoro_app_pomodoro_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pomodoro-app/pomodoro-app.component */
    "./src/app/pomodoro-app/pomodoro-app.component.ts");

    var routes = [{
      path: '**',
      component: _pomodoro_app_pomodoro_app_component__WEBPACK_IMPORTED_MODULE_2__["PomodoroAppComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angular-pomodoro-app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [[1, "page-container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".page-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHBlcmVuL0Rlc2t0b3AvYW5ndWxhci1wb21vZG9yby1hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG4iLCIucGFnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _timer_timer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./timer/timer.component */
    "./src/app/timer/timer.component.ts");
    /* harmony import */


    var _pomodoro_app_pomodoro_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pomodoro-app/pomodoro-app.component */
    "./src/app/pomodoro-app/pomodoro-app.component.ts");
    /* harmony import */


    var _timer_controls_timer_controls_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./timer-controls/timer-controls.component */
    "./src/app/timer-controls/timer-controls.component.ts");
    /* harmony import */


    var _time_categories_time_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./time-categories/time-categories.component */
    "./src/app/time-categories/time-categories.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _timer_timer_component__WEBPACK_IMPORTED_MODULE_4__["TimerComponent"], _pomodoro_app_pomodoro_app_component__WEBPACK_IMPORTED_MODULE_5__["PomodoroAppComponent"], _timer_controls_timer_controls_component__WEBPACK_IMPORTED_MODULE_6__["TimerControlsComponent"], _time_categories_time_categories_component__WEBPACK_IMPORTED_MODULE_7__["TimeCategoriesComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _timer_timer_component__WEBPACK_IMPORTED_MODULE_4__["TimerComponent"], _pomodoro_app_pomodoro_app_component__WEBPACK_IMPORTED_MODULE_5__["PomodoroAppComponent"], _timer_controls_timer_controls_component__WEBPACK_IMPORTED_MODULE_6__["TimerControlsComponent"], _time_categories_time_categories_component__WEBPACK_IMPORTED_MODULE_7__["TimeCategoriesComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 4,
      vars: 0,
      consts: [[1, "header"], [1, "container"], [1, "header__title"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pomodoro Timer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".header__title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 0 20px 0;\n  font-family: Copperplate, \"Copperplate Gothic Light\", fantasy;\n  font-size: 4rem;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHBlcmVuL0Rlc2t0b3AvYW5ndWxhci1wb21vZG9yby1hcHAvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZEQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX190aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICBmb250LWZhbWlseTogQ29wcGVycGxhdGUsICdDb3BwZXJwbGF0ZSBHb3RoaWMgTGlnaHQnLCBmYW50YXN5O1xuICBmb250LXNpemU6IDRyZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuIiwiLmhlYWRlcl9fdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwIDIwcHggMDtcbiAgZm9udC1mYW1pbHk6IENvcHBlcnBsYXRlLCBcIkNvcHBlcnBsYXRlIEdvdGhpYyBMaWdodFwiLCBmYW50YXN5O1xuICBmb250LXNpemU6IDRyZW07XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pomodoro-app/pomodoro-app.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pomodoro-app/pomodoro-app.component.ts ***!
    \********************************************************/

  /*! exports provided: PomodoroAppComponent */

  /***/
  function srcAppPomodoroAppPomodoroAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PomodoroAppComponent", function () {
      return PomodoroAppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _timer_timer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../timer/timer.component */
    "./src/app/timer/timer.component.ts");
    /* harmony import */


    var _timer_controls_timer_controls_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../timer-controls/timer-controls.component */
    "./src/app/timer-controls/timer-controls.component.ts");
    /* harmony import */


    var _time_categories_time_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../time-categories/time-categories.component */
    "./src/app/time-categories/time-categories.component.ts");

    var PomodoroAppComponent = /*#__PURE__*/function () {
      function PomodoroAppComponent() {
        _classCallCheck(this, PomodoroAppComponent);

        this.appStatus = {
          takenPomodoroNum: 0,
          takenShortBreakNum: 0,
          takenLongBreakNum: 0
        };
      }

      _createClass(PomodoroAppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "receiveAction",
        value: function receiveAction($event) {
          this.timerControlAction = $event;
        }
      }, {
        key: "timerCompletedEvent",
        value: function timerCompletedEvent($event) {
          if ($event === 'pomodoro') {
            this.appStatus.takenPomodoroNum++;
          } else if ($event === 'short-break') {
            this.appStatus.takenShortBreakNum++;
          } else if ($event === 'long-break') {
            this.appStatus.takenLongBreakNum++;
          }
        }
      }]);

      return PomodoroAppComponent;
    }();

    PomodoroAppComponent.ɵfac = function PomodoroAppComponent_Factory(t) {
      return new (t || PomodoroAppComponent)();
    };

    PomodoroAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PomodoroAppComponent,
      selectors: [["app-pomodoro-app"]],
      decls: 5,
      vars: 2,
      consts: [[1, "pomodoro-app"], [3, "timerControlAction", "completedTimer"], [3, "timerControlEvent"], [3, "appStatus", "timerControlEvent"]],
      template: function PomodoroAppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-timer", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("completedTimer", function PomodoroAppComponent_Template_app_timer_completedTimer_2_listener($event) {
            return ctx.timerCompletedEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-timer-controls", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timerControlEvent", function PomodoroAppComponent_Template_app_timer_controls_timerControlEvent_3_listener($event) {
            return ctx.receiveAction($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-time-categories", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timerControlEvent", function PomodoroAppComponent_Template_app_time_categories_timerControlEvent_4_listener($event) {
            return ctx.receiveAction($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timerControlAction", ctx.timerControlAction);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appStatus", ctx.appStatus);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _timer_timer_component__WEBPACK_IMPORTED_MODULE_2__["TimerComponent"], _timer_controls_timer_controls_component__WEBPACK_IMPORTED_MODULE_3__["TimerControlsComponent"], _time_categories_time_categories_component__WEBPACK_IMPORTED_MODULE_4__["TimeCategoriesComponent"]],
      styles: [".pomodoro-app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: green;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: rgba(255, 255, 255, 0.06);\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHBlcmVuL0Rlc2t0b3AvYW5ndWxhci1wb21vZG9yby1hcHAvc3JjL2FwcC9wb21vZG9yby1hcHAvcG9tb2Rvcm8tYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb21vZG9yby1hcHAvcG9tb2Rvcm8tYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BvbW9kb3JvLWFwcC9wb21vZG9yby1hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9tb2Rvcm8tYXBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbiIsIi5wb21vZG9yby1hcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PomodoroAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pomodoro-app',
          templateUrl: './pomodoro-app.component.html',
          styleUrls: ['./pomodoro-app.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/time-categories/time-categories.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/time-categories/time-categories.component.ts ***!
    \**************************************************************/

  /*! exports provided: TimeCategoriesComponent */

  /***/
  function srcAppTimeCategoriesTimeCategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeCategoriesComponent", function () {
      return TimeCategoriesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TimeCategoriesComponent = /*#__PURE__*/function () {
      function TimeCategoriesComponent() {
        _classCallCheck(this, TimeCategoriesComponent);

        this.timerControlEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(TimeCategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "clickEvent",
        value: function clickEvent(timerCategory) {
          this.timerControlEvent.emit(timerCategory);
        }
      }]);

      return TimeCategoriesComponent;
    }();

    TimeCategoriesComponent.ɵfac = function TimeCategoriesComponent_Factory(t) {
      return new (t || TimeCategoriesComponent)();
    };

    TimeCategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimeCategoriesComponent,
      selectors: [["app-time-categories"]],
      inputs: {
        appStatus: "appStatus"
      },
      outputs: {
        timerControlEvent: "timerControlEvent"
      },
      decls: 25,
      vars: 3,
      consts: [[1, "time-categories"], [1, "time-categories__category", 3, "click"], [1, "time-categories__category-stats"], [1, "time-categories__category-title"], [1, "time-categories__category-value"], [1, "time-categories__category-start-button"], [1, "fas", "fa-pizza-slice"], [1, "fas", "fa-coffee"], [1, "far", "fa-hand-spock"]],
      template: function TimeCategoriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeCategoriesComponent_Template_div_click_1_listener() {
            return ctx.clickEvent("pomodoro");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pomodoro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeCategoriesComponent_Template_div_click_9_listener() {
            return ctx.clickEvent("short-break");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Short Break");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeCategoriesComponent_Template_div_click_17_listener() {
            return ctx.clickEvent("long-break");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Long Break");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.appStatus.takenPomodoroNum);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.appStatus.takenShortBreakNum);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.appStatus.takenLongBreakNum);
        }
      },
      styles: [".time-categories[_ngcontent-%COMP%] {\n  display: flex;\n  box-sizing: border-box;\n  margin-top: 10px;\n}\n\n.time-categories__category[_ngcontent-%COMP%] {\n  cursor: pointer;\n  box-sizing: border-box;\n  position: relative;\n  color: #495057;\n  display: flex;\n  flex-direction: row;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 0 solid #f6f6f6;\n  border-radius: 0.25rem;\n  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.25rem;\n  margin: 0 5px;\n  width: 180px;\n}\n\n.time-categories__category-stats[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: left;\n  box-sizing: border-box;\n  flex: 1;\n}\n\n.time-categories__category-title[_ngcontent-%COMP%] {\n  font-family: Poppins, sans-serif;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  text-align: left;\n  box-sizing: border-box;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  color: #74788d !important;\n  font-weight: 500;\n}\n\n.time-categories__category-value[_ngcontent-%COMP%] {\n  font-family: Poppins, sans-serif;\n  text-align: left;\n  box-sizing: border-box;\n  margin-top: 0;\n  font-weight: 500;\n  line-height: 1.2;\n  font-size: 1.21875rem;\n  color: #495057;\n  margin-bottom: 0 !important;\n}\n\n.time-categories__category-start-button[_ngcontent-%COMP%] {\n  font-family: Poppins, sans-serif;\n  font-size: 0.8125rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  box-sizing: border-box;\n  background-color: #556ee6 !important;\n  border-radius: 50% !important;\n  align-self: center !important;\n  height: 3rem;\n  width: 3rem;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.time-categories__category-start-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHBlcmVuL0Rlc2t0b3AvYW5ndWxhci1wb21vZG9yby1hcHAvc3JjL2FwcC90aW1lLWNhdGVnb3JpZXMvdGltZS1jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aW1lLWNhdGVnb3JpZXMvdGltZS1jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbURBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtBQ0FGOztBREdBO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdGltZS1jYXRlZ29yaWVzL3RpbWUtY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRpbWUtY2F0ZWdvcmllcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50aW1lLWNhdGVnb3JpZXNfX2NhdGVnb3J5IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMCBzb2xpZCAjZjZmNmY2O1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIGJveC1zaGFkb3c6IDAgLjc1cmVtIDEuNXJlbSByZ2JhKDE4LDM4LDYzLC4wMyk7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG4gIG1hcmdpbjogMCA1cHg7XG4gIHdpZHRoOiAxODBweDtcbn1cblxuLnRpbWUtY2F0ZWdvcmllc19fY2F0ZWdvcnktc3RhdHMge1xuICBmb250LXNpemU6IC44MTI1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleDogMTtcbn1cblxuLnRpbWUtY2F0ZWdvcmllc19fY2F0ZWdvcnktdGl0bGUge1xuICBmb250LWZhbWlseTogUG9wcGlucyxzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IC44MTI1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogIzc0Nzg4ZCFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50aW1lLWNhdGVnb3JpZXNfX2NhdGVnb3J5LXZhbHVlIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMsc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC1zaXplOiAxLjIxODc1cmVtO1xuICBjb2xvcjogIzQ5NTA1NztcbiAgbWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XG59XG5cbi50aW1lLWNhdGVnb3JpZXNfX2NhdGVnb3J5LXN0YXJ0LWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogLjgxMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU2ZWU2IWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlIWltcG9ydGFudDtcbiAgYWxpZ24tc2VsZjogY2VudGVyIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzcmVtO1xuICB3aWR0aDogM3JlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRpbWUtY2F0ZWdvcmllc19fY2F0ZWdvcnktc3RhcnQtYnV0dG9uIGkge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuIiwiLnRpbWUtY2F0ZWdvcmllcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50aW1lLWNhdGVnb3JpZXNfX2NhdGVnb3J5IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMCBzb2xpZCAjZjZmNmY2O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMS41cmVtIHJnYmEoMTgsIDM4LCA2MywgMC4wMyk7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG4gIG1hcmdpbjogMCA1cHg7XG4gIHdpZHRoOiAxODBweDtcbn1cblxuLnRpbWUtY2F0ZWdvcmllc19fY2F0ZWdvcnktc3RhdHMge1xuICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXg6IDE7XG59XG5cbi50aW1lLWNhdGVnb3JpZXNfX2NhdGVnb3J5LXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogIzc0Nzg4ZCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGltZS1jYXRlZ29yaWVzX19jYXRlZ29yeS12YWx1ZSB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXNpemU6IDEuMjE4NzVyZW07XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lLWNhdGVnb3JpZXNfX2NhdGVnb3J5LXN0YXJ0LWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTZlZTYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiAzcmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGltZS1jYXRlZ29yaWVzX19jYXRlZ29yeS1zdGFydC1idXR0b24gaSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeCategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-time-categories',
          templateUrl: './time-categories.component.html',
          styleUrls: ['./time-categories.component.scss']
        }]
      }], function () {
        return [];
      }, {
        appStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        timerControlEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/timer-controls/timer-controls.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/timer-controls/timer-controls.component.ts ***!
    \************************************************************/

  /*! exports provided: TimerControlsComponent */

  /***/
  function srcAppTimerControlsTimerControlsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimerControlsComponent", function () {
      return TimerControlsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TimerControlsComponent = /*#__PURE__*/function () {
      function TimerControlsComponent() {
        _classCallCheck(this, TimerControlsComponent);

        this.timerControlEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(TimerControlsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "clickEvent",
        value: function clickEvent(action) {
          this.timerControlEvent.emit(action);
        }
      }]);

      return TimerControlsComponent;
    }();

    TimerControlsComponent.ɵfac = function TimerControlsComponent_Factory(t) {
      return new (t || TimerControlsComponent)();
    };

    TimerControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimerControlsComponent,
      selectors: [["app-timer-controls"]],
      outputs: {
        timerControlEvent: "timerControlEvent"
      },
      decls: 7,
      vars: 0,
      consts: [[1, "timer-controls"], ["type", "button", 1, "btn", 3, "click"], [1, "fas", "fa-play"], [1, "fas", "fa-pause"], [1, "fas", "fa-stop"]],
      template: function TimerControlsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerControlsComponent_Template_button_click_1_listener() {
            return ctx.clickEvent("start");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerControlsComponent_Template_button_click_3_listener() {
            return ctx.clickEvent("pause");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerControlsComponent_Template_button_click_5_listener() {
            return ctx.clickEvent("restart");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".timer-controls[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 999;\n}\n\n.btn[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  font-family: inherit;\n  overflow: visible;\n  text-transform: none;\n  -webkit-appearance: button;\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid transparent;\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n  margin-bottom: 0.5rem !important;\n  transition-duration: 400ms;\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 50%;\n  padding: 0;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  margin-right: 4px;\n}\n\n.btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHBlcmVuL0Rlc2t0b3AvYW5ndWxhci1wb21vZG9yby1hcHAvc3JjL2FwcC90aW1lci1jb250cm9scy90aW1lci1jb250cm9scy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGltZXItY29udHJvbHMvdGltZXItY29udHJvbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3RpbWVyLWNvbnRyb2xzL3RpbWVyLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGltZXItY29udHJvbHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmJ0biB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW0gIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLmJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4iLCIudGltZXItY29udHJvbHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmJ0biB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-timer-controls',
          templateUrl: './timer-controls.component.html',
          styleUrls: ['./timer-controls.component.scss']
        }]
      }], function () {
        return [];
      }, {
        timerControlEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/timer/timer.component.ts":
  /*!******************************************!*\
    !*** ./src/app/timer/timer.component.ts ***!
    \******************************************/

  /*! exports provided: TimerComponent */

  /***/
  function srcAppTimerTimerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimerComponent", function () {
      return TimerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var _c0 = ["progressBar"];

    var TimerComponent = /*#__PURE__*/function () {
      function TimerComponent(titleService) {
        var _this = this;

        _classCallCheck(this, TimerComponent);

        this.titleService = titleService;
        this.completedTimer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.time = 25; // initial timer amount in minutes

        this.currentTimer = 'pomodoro';
        this.timerRemaining = this.timerStartValue;
        this.start$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.pageTitle = this.titleService.getTitle();
        this.timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.stop$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function (v) {
          return v >= 0;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["repeatWhen"])(function () {
          return _this.start$;
        })); // 1 second interval
      }

      _createClass(TimerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.timer$.subscribe(function (val) {
            _this2.timerRemaining -= 1; // countdown 1 by 1

            var percentage = (_this2.timerStartValue - _this2.timerRemaining) / _this2.timerStartValue * 100;
            _this2.progressBar.nativeElement.style.width = percentage + '%';

            _this2.titleService.setTitle(_this2.formatLeftTime() + ' | ' + _this2.pageTitle);

            if (percentage === 100) {
              _this2.completeTimer();
            }
          });
          this.stop(); // initially stop
        }
      }, {
        key: "completeTimer",
        value: function completeTimer() {
          this.playAudio();
          this.updateStats();
          this.stop();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.progressBar.nativeElement.style.width = '0%';
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.timerControlAction.currentValue === 'start') {
            this.start();
          } else if (changes.timerControlAction.currentValue === 'pause') {
            this.stop();
          } else if (changes.timerControlAction.currentValue === 'restart') {
            this.restart();
          } else if (changes.timerControlAction.currentValue === 'pomodoro') {
            this.setPomodoroTimer();
          } else if (changes.timerControlAction.currentValue === 'short-break') {
            this.setShortBreakTimer();
          } else if (changes.timerControlAction.currentValue === 'long-break') {
            this.setLongBreakTimer();
          }
        }
      }, {
        key: "start",
        value: function start() {
          this.start$.next();
        }
      }, {
        key: "stop",
        value: function stop() {
          this.stop$.next();
        }
      }, {
        key: "restart",
        value: function restart() {
          this.stop();
          this.timerRemaining = this.timerStartValue;
          this.progressBar.nativeElement.style.width = 0 + '%';
        }
      }, {
        key: "playAudio",
        value: function playAudio() {
          var audio = new Audio('assets/bell.mp3');
          audio.play();
        }
      }, {
        key: "formatLeftTime",
        value: function formatLeftTime() {
          return new Date(this.timerRemaining * 1000).toISOString().substr(14, 5); // mm:ss format
        }
      }, {
        key: "setPomodoroTimer",
        value: function setPomodoroTimer() {
          this.setTimer('pomodoro', 25);
        }
      }, {
        key: "setShortBreakTimer",
        value: function setShortBreakTimer() {
          this.setTimer('short-break', 5);
        }
      }, {
        key: "setLongBreakTimer",
        value: function setLongBreakTimer() {
          this.setTimer('long-break', 10);
        }
      }, {
        key: "setTimer",
        value: function setTimer(timerType, time) {
          this.time = time;
          this.timerRemaining = this.timerStartValue;
          this.currentTimer = timerType;
          this.restart();
        }
      }, {
        key: "updateStats",
        value: function updateStats() {
          this.completedTimer.emit(this.currentTimer);
        }
      }, {
        key: "timerStartValue",
        get: function get() {
          return this.time * 60; // seconds
        }
      }]);

      return TimerComponent;
    }();

    TimerComponent.ɵfac = function TimerComponent_Factory(t) {
      return new (t || TimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]));
    };

    TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimerComponent,
      selectors: [["app-timer"]],
      viewQuery: function TimerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressBar = _t.first);
        }
      },
      inputs: {
        timerControlAction: "timerControlAction"
      },
      outputs: {
        completedTimer: "completedTimer"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 6,
      vars: 1,
      consts: [[1, "pomodoro-timer"], [1, "progress"], [1, "progress-bar", 2, "width", "0%"], ["progressBar", ""], ["id", "pomodoro-timer-label", 1, "pomodoro-timer__label"]],
      template: function TimerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formatLeftTime(), " ");
        }
      },
      styles: [".pomodoro-timer[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  width: 500px;\n  padding-top: 24px;\n}\n\n.pomodoro-timer__label[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 500px;\n  height: 280px;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 120px;\n  color: #ffffff;\n  font-family: Copperplate, \"Copperplate Gothic Light\", fantasy;\n}\n\n.progress[_ngcontent-%COMP%] {\n  line-height: 1.5;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: flex;\n  height: 1.25rem;\n  overflow: hidden;\n  background-color: #e5e9f2;\n  border-radius: 4px;\n  position: relative;\n  width: 400px;\n  margin: 0 auto;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: width 1s linear;\n  background-color: #29B6F6;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px;\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n          animation: progress-bar-stripes 2s linear infinite;\n}\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHBlcmVuL0Rlc2t0b3AvYW5ndWxhci1wb21vZG9yby1hcHAvc3JjL2FwcC90aW1lci90aW1lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGltZXIvdGltZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw2REFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHFNQUFBO0VBQ0EsMEJBQUE7RUFDQSwwREFBQTtVQUFBLGtEQUFBO0FDQUY7O0FER0E7RUFDRTtJQUNFLDJCQUFBO0VDQUY7RURFQTtJQUNFLHdCQUFBO0VDQUY7QUFDRjs7QUROQTtFQUNFO0lBQ0UsMkJBQUE7RUNBRjtFREVBO0lBQ0Usd0JBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdGltZXIvdGltZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9tb2Rvcm8tdGltZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG59XG5cblxuLnBvbW9kb3JvLXRpbWVyX19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDI4MHB4O1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1mYW1pbHk6IENvcHBlcnBsYXRlLCAnQ29wcGVycGxhdGUgR290aGljIExpZ2h0JywgZmFudGFzeTtcbn1cblxuLnByb2dyZXNzIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMS4yNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTlmMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgbGluZWFyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlCNkY2O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MHB4IDQwcHg7XG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3MtYmFyLXN0cmlwZXMgMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHByb2dyZXNzLWJhci1zdHJpcGVzIHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDBweCAwO1xuICB9XG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIH1cbn1cbiIsIi5wb21vZG9yby10aW1lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn1cblxuLnBvbW9kb3JvLXRpbWVyX19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDI4MHB4O1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1mYW1pbHk6IENvcHBlcnBsYXRlLCBcIkNvcHBlcnBsYXRlIEdvdGhpYyBMaWdodFwiLCBmYW50YXN5O1xufVxuXG4ucHJvZ3Jlc3Mge1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxLjI1cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlOWYyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBsaW5lYXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOUI2RjY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwcHggNDBweDtcbiAgYW5pbWF0aW9uOiBwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtYmFyLXN0cmlwZXMge1xuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MHB4IDA7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-timer',
          templateUrl: './timer.component.html',
          styleUrls: ['./timer.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
        }];
      }, {
        progressBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['progressBar']
        }],
        timerControlAction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        completedTimer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/alperen/Desktop/angular-pomodoro-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map