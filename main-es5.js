function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./src/app/SelectivePreloadStrategy.ts":
  /*!*********************************************!*\
    !*** ./src/app/SelectivePreloadStrategy.ts ***!
    \*********************************************/

  /*! exports provided: SelectivePreloadStrategy */

  /***/
  function srcAppSelectivePreloadStrategyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectivePreloadStrategy", function () {
      return SelectivePreloadStrategy;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SelectivePreloadStrategy = /*#__PURE__*/function () {
      function SelectivePreloadStrategy() {
        _classCallCheck(this, SelectivePreloadStrategy);
      }

      _createClass(SelectivePreloadStrategy, [{
        key: "preload",
        value: function preload(route, load) {
          if (route.data && route.data.preload) {
            console.log('preload ' + route.path);
            return load();
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }]);

      return SelectivePreloadStrategy;
    }();

    SelectivePreloadStrategy.ɵfac = function SelectivePreloadStrategy_Factory(t) {
      return new (t || SelectivePreloadStrategy)();
    };

    SelectivePreloadStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SelectivePreloadStrategy,
      factory: SelectivePreloadStrategy.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectivePreloadStrategy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _user_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user/auth.guard */
    "./src/app/user/auth.guard.ts");
    /* harmony import */


    var _SelectivePreloadStrategy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./SelectivePreloadStrategy */
    "./src/app/SelectivePreloadStrategy.ts");
    /* harmony import */


    var _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user/login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _user_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user/register/register.component */
    "./src/app/user/register/register.component.ts");
    /* harmony import */


    var _story_story_list_story_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./story/story-list/story-list.component */
    "./src/app/story/story-list/story-list.component.ts");
    /* harmony import */


    var _story_add_story_add_story_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./story/add-story/add-story.component */
    "./src/app/story/add-story/add-story.component.ts");
    /* harmony import */


    var _story_my_story_list_my_story_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./story/my-story-list/my-story-list.component */
    "./src/app/story/my-story-list/my-story-list.component.ts");
    /* harmony import */


    var _story_story_detail_story_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./story/story-detail/story-detail.component */
    "./src/app/story/story-detail/story-detail.component.ts");
    /* harmony import */


    var _story_StoryResolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./story/StoryResolver */
    "./src/app/story/StoryResolver.ts");
    /* harmony import */


    var _story_favorite_story_list_favorite_story_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./story/favorite-story-list/favorite-story-list.component */
    "./src/app/story/favorite-story-list/favorite-story-list.component.ts");

    var appRoutes = [{
      path: 'login',
      component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'register',
      component: _user_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
    }, {
      path: 'story/list',
      component: _story_story_list_story_list_component__WEBPACK_IMPORTED_MODULE_8__["StoryListComponent"]
    }, {
      path: 'story/myList',
      component: _story_my_story_list_my_story_list_component__WEBPACK_IMPORTED_MODULE_10__["MyStoryListComponent"],
      canActivate: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'story/favoriteList',
      component: _story_favorite_story_list_favorite_story_list_component__WEBPACK_IMPORTED_MODULE_13__["FavoriteStoryListComponent"],
      canActivate: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'story/add',
      component: _story_add_story_add_story_component__WEBPACK_IMPORTED_MODULE_9__["AddStoryComponent"],
      canActivate: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'story/:id',
      component: _story_story_detail_story_detail_component__WEBPACK_IMPORTED_MODULE_11__["StoryDetailComponent"],
      resolve: {
        story: _story_StoryResolver__WEBPACK_IMPORTED_MODULE_12__["StoryResolver"]
      }
    }, {
      path: '',
      redirectTo: 'story/list',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
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
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, {
        preloadingStrategy: _SelectivePreloadStrategy__WEBPACK_IMPORTED_MODULE_5__["SelectivePreloadStrategy"]
      })], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, {
            preloadingStrategy: _SelectivePreloadStrategy__WEBPACK_IMPORTED_MODULE_5__["SelectivePreloadStrategy"]
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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


    var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./main-nav/main-nav.component */
    "./src/app/main-nav/main-nav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'coWrite';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-main-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_1__["MainNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
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


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _story_story_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./story/story.module */
    "./src/app/story/story.module.ts");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./main-nav/main-nav.component */
    "./src/app/main-nav/main-nav.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _user_user_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./user/user.module */
    "./src/app/user/user.module.ts");
    /* harmony import */


    var _interceptors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./interceptors */
    "./src/app/interceptors/index.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_interceptors__WEBPACK_IMPORTED_MODULE_10__["httpInterceptorProviders"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _story_story_module__WEBPACK_IMPORTED_MODULE_3__["StoryModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_9__["UserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"], _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__["MainNavComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _story_story_module__WEBPACK_IMPORTED_MODULE_3__["StoryModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_9__["UserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"], _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__["MainNavComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _story_story_module__WEBPACK_IMPORTED_MODULE_3__["StoryModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_9__["UserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]],
          providers: [_interceptors__WEBPACK_IMPORTED_MODULE_10__["httpInterceptorProviders"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/interceptors/authentication-interceptor.ts":
  /*!************************************************************!*\
    !*** ./src/app/interceptors/authentication-interceptor.ts ***!
    \************************************************************/

  /*! exports provided: AuthenticationInterceptor */

  /***/
  function srcAppInterceptorsAuthenticationInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationInterceptor", function () {
      return AuthenticationInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../user/authentication.service */
    "./src/app/user/authentication.service.ts");

    var AuthenticationInterceptor = /*#__PURE__*/function () {
      function AuthenticationInterceptor(authService) {
        _classCallCheck(this, AuthenticationInterceptor);

        this.authService = authService;
      }

      _createClass(AuthenticationInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          if (this.authService.token.length) {
            var clonedRequest = req.clone({
              headers: req.headers.set('Authorization', "Bearer ".concat(this.authService.token))
            });
            return next.handle(clonedRequest);
          }

          return next.handle(req);
        }
      }]);

      return AuthenticationInterceptor;
    }();

    AuthenticationInterceptor.ɵfac = function AuthenticationInterceptor_Factory(t) {
      return new (t || AuthenticationInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
    };

    AuthenticationInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticationInterceptor,
      factory: AuthenticationInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _user_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/interceptors/index.ts":
  /*!***************************************!*\
    !*** ./src/app/interceptors/index.ts ***!
    \***************************************/

  /*! exports provided: httpInterceptorProviders */

  /***/
  function srcAppInterceptorsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function () {
      return httpInterceptorProviders;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _authentication_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authentication-interceptor */
    "./src/app/interceptors/authentication-interceptor.ts");

    var httpInterceptorProviders = [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
      useClass: _authentication_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthenticationInterceptor"],
      multi: true
    }];
    /***/
  },

  /***/
  "./src/app/main-nav/main-nav.component.ts":
  /*!************************************************!*\
    !*** ./src/app/main-nav/main-nav.component.ts ***!
    \************************************************/

  /*! exports provided: MainNavComponent */

  /***/
  function srcAppMainNavMainNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainNavComponent", function () {
      return MainNavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _user_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user/authentication.service */
    "./src/app/user/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function MainNavComponent_span_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "account_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_span_20_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " logout ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r3 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r3, " ");
      }
    }

    function MainNavComponent_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_ng_template_22_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.login();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["story/list"];
    };

    var _c1 = function _c1() {
      return ["story/myList"];
    };

    var _c2 = function _c2() {
      return ["story/favoriteList"];
    };

    var _c3 = function _c3() {
      return ["story/add"];
    };

    var _c4 = ["*"];

    var MainNavComponent = /*#__PURE__*/function () {
      function MainNavComponent(breakpointObserver, _authenticationService, _router) {
        _classCallCheck(this, MainNavComponent);

        this.breakpointObserver = breakpointObserver;
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.loggedInUser$ = this._authenticationService.user$;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
          return result.matches;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
      }

      _createClass(MainNavComponent, [{
        key: "logout",
        value: function logout() {
          this._authenticationService.logout();
        }
      }, {
        key: "login",
        value: function login() {
          console.log('login');

          this._router.navigate(['/login']);
        }
      }]);

      return MainNavComponent;
    }();

    MainNavComponent.ɵfac = function MainNavComponent_Factory(t) {
      return new (t || MainNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    MainNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainNavComponent,
      selectors: [["app-main-nav"]],
      ngContentSelectors: _c4,
      decls: 25,
      vars: 13,
      consts: [[1, "sidenav-container"], ["color", "primary"], ["src", "../../assets/coWriteLogo.png", "width", "150", "height", "80", "alt", "logo"], ["data-cy", "stories", "mat-list-item", "", 3, "routerLink"], ["data-cy", "myStories", "mat-list-item", "", 3, "routerLink"], ["data-cy", "favStories", "mat-list-item", "", 3, "routerLink"], ["data-cy", "addStory", "mat-list-item", "", 3, "routerLink"], [3, "inline"], ["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "end", "fxHide.xs", ""], [4, "ngIf", "ngIfElse"], ["loginTemplate", ""], ["data-cy", "logout", "mat-flat-button", "", 3, "click"], ["mat-flat-button", "", 3, "click"]],
      template: function MainNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Stories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "My stories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Favorite stories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "add_circle_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " New story");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MainNavComponent_span_20_Template, 6, 2, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MainNavComponent_ng_template_22_Template, 3, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 7, ctx.loggedInUser$))("ngIfElse", _r1);
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultShowHideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]],
      styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0px;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  margin: 0px;\n  width: 200px;\n  background-color: whitesmoke;\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n  padding-top: 10px;\n  margin: 0px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-left: 50px;\n  padding: 0;\n  overflow: hidden;\n}\n\nli[_ngcontent-%COMP%] {\n  float: left;\n  margin-right: 15px;\n  border-left: whitesmoke solid;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 8px;\n  color:  whitesmoke;\n  text-decoration: none;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding-top: 0px;\n  margin-top: 0px;\n  background-color: #173F5F;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  border-radius: 10px;\n}\n\nbody[_ngcontent-%COMP%]{\n  margin:0;\n}\n\nhtml[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uc2lkZW5hdiB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYm9yZGVyLWxlZnQ6IHdoaXRlc21va2Ugc29saWQ7XG59XG5cbmxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOHB4O1xuICBjb2xvcjogIHdoaXRlc21va2U7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm1hdC10b29sYmFyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3M0Y1RjtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5ib2R5e1xuICBtYXJnaW46MDtcbn1cblxuaHRtbCB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-nav',
          templateUrl: './main-nav.component.html',
          styleUrls: ['./main-nav.component.css']
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
        }, {
          type: _user_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"]], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"]],
        exports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"]],
          exports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 2,
      vars: 0,
      consts: [["data-cy", "appError"]],
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 404: page not found\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatError"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/story/StoryResolver.ts":
  /*!****************************************!*\
    !*** ./src/app/story/StoryResolver.ts ***!
    \****************************************/

  /*! exports provided: StoryResolver */

  /***/
  function srcAppStoryStoryResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryResolver", function () {
      return StoryResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _story_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./story-data.service */
    "./src/app/story/story-data.service.ts");

    var StoryResolver = /*#__PURE__*/function () {
      function StoryResolver(storyService) {
        _classCallCheck(this, StoryResolver);

        this.storyService = storyService;
      }

      _createClass(StoryResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.storyService.getStory$(route.params['id']);
        }
      }]);

      return StoryResolver;
    }();

    StoryResolver.ɵfac = function StoryResolver_Factory(t) {
      return new (t || StoryResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_story_data_service__WEBPACK_IMPORTED_MODULE_1__["StoryDataService"]));
    };

    StoryResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StoryResolver,
      factory: StoryResolver.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoryResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _story_data_service__WEBPACK_IMPORTED_MODULE_1__["StoryDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/story/add-story/add-story.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/story/add-story/add-story.component.ts ***!
    \********************************************************/

  /*! exports provided: AddStoryComponent */

  /***/
  function srcAppStoryAddStoryAddStoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddStoryComponent", function () {
      return AddStoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _story_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../story.model */
    "./src/app/story/story.model.ts");
    /* harmony import */


    var _chapter_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../chapter.model */
    "./src/app/story/chapter.model.ts");
    /* harmony import */


    var _story_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../story-data.service */
    "./src/app/story/story-data.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function AddStoryComponent_mat_error_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getErrorMessage(ctx_r0.story.get("storyName")["errors"]), " ");
      }
    }

    function AddStoryComponent_mat_card_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" got an error while adding the story: ", ctx_r1.errorMessage, "\n");
      }
    }

    function AddStoryComponent_mat_card_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.confirmationMessage, "\n");
      }
    }

    var AddStoryComponent = /*#__PURE__*/function () {
      function AddStoryComponent(fb, _storyDataService) {
        _classCallCheck(this, AddStoryComponent);

        this.fb = fb;
        this._storyDataService = _storyDataService;
        this.errorMessage = '';
        this.confirmationMessage = '';
      }

      _createClass(AddStoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.story = this.fb.group({
            storyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            chapterName: [''],
            inhoud: ['']
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          this._storyDataService.addNewStory(new _story_model__WEBPACK_IMPORTED_MODULE_4__["Story"](this.story.value.storyName, 1, "", new Date(), new Array(new _chapter_model__WEBPACK_IMPORTED_MODULE_5__["Chapter"](this.story.value.chapterName, 1, new Date(), this.story.value.inhoud, "")))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            _this.errorMessage = err;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
          })).subscribe(function (rec) {
            _this.confirmationMessage = "a story for ".concat(rec.name, " was successfully added");
          });

          this.story = this.fb.group({
            storyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            chapterName: [''],
            inhoud: ['']
          });
        }
      }, {
        key: "getErrorMessage",
        value: function getErrorMessage(errors) {
          if (!errors) {
            return null;
          }

          if (errors.required) {
            return 'is required';
          } else if (errors.minlength) {
            return "needs at least ".concat(errors.minlength.requiredLength, " characters (got ").concat(errors.minlength.actualLength, ")");
          } else if (errors.amountNoName) {
            return "if amount is set you must set a name";
          }
        }
      }]);

      return AddStoryComponent;
    }();

    AddStoryComponent.ɵfac = function AddStoryComponent_Factory(t) {
      return new (t || AddStoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_story_data_service__WEBPACK_IMPORTED_MODULE_6__["StoryDataService"]));
    };

    AddStoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddStoryComponent,
      selectors: [["app-add-story"]],
      decls: 14,
      vars: 5,
      consts: [[3, "formGroup", "ngSubmit"], ["matInput", "", "type", "text", "aria-label", "storyName", "placeholder", "Name of story", "formControlName", "storyName"], [4, "ngIf"], ["matInput", "", "type", "text", "aria-label", "chapterName", "placeholder", "Name of first chapter", "formControlName", "chapterName"], ["matInput", "", "type", "text", "aria-label", "inhoud", "placeholder", "Text", "formControlName", "inhoud", "rows", "20"], ["data-cy", "create", "mat-raised-button", "", "type", "submit", 3, "disabled"], ["class", "error", "data-cy", "appError", 4, "ngIf"], ["class", "confirmation", "data-cy", "appConfirmation", 4, "ngIf"], ["data-cy", "appError", 1, "error"], ["data-cy", "appConfirmation", 1, "confirmation"]],
      template: function AddStoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddStoryComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddStoryComponent_mat_error_5_Template, 2, 1, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Create story ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddStoryComponent_mat_card_12_Template, 2, 1, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddStoryComponent_mat_card_13_Template, 2, 1, "mat-card", 7);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.story);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.story.get("storyName")["errors"] && ctx.story.get("storyName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.story.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmationMessage);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
      styles: ["mat-form-field[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 200px;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    margin-left: 25%;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    padding-bottom: 20px;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcnkvYWRkLXN0b3J5L2FkZC1zdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3N0b3J5L2FkZC1zdG9yeS9hZGQtc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddStoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-story',
          templateUrl: './add-story.component.html',
          styleUrls: ['./add-story.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _story_data_service__WEBPACK_IMPORTED_MODULE_6__["StoryDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/story/chapter.model.ts":
  /*!****************************************!*\
    !*** ./src/app/story/chapter.model.ts ***!
    \****************************************/

  /*! exports provided: Chapter */

  /***/
  function srcAppStoryChapterModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Chapter", function () {
      return Chapter;
    });

    var Chapter = /*#__PURE__*/function () {
      function Chapter(_name) {
        var _number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        var _dateAdded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();

        var _text = arguments.length > 3 ? arguments[3] : undefined;

        var _author = arguments.length > 4 ? arguments[4] : undefined;

        _classCallCheck(this, Chapter);

        this._name = _name;
        this._number = _number;
        this._dateAdded = _dateAdded;
        this._text = _text;
        this._author = _author;
      }

      _createClass(Chapter, [{
        key: "toJSON",
        value: function toJSON() {
          return {
            name: this.name,
            number: this._number,
            dateAdded: this._dateAdded,
            text: this._text,
            author: this._author
          };
        }
      }, {
        key: "name",
        get: function get() {
          return this._name;
        }
      }, {
        key: "number",
        get: function get() {
          return this._number;
        }
      }, {
        key: "dateAdded",
        get: function get() {
          return this._dateAdded;
        }
      }, {
        key: "text",
        get: function get() {
          return this._text;
        }
      }, {
        key: "author",
        get: function get() {
          return this._author;
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(json) {
          var ing = new Chapter(json.name, json.number, new Date(json.dateAdded), json.text, json.author);
          return ing;
        }
      }, {
        key: "fromJSONCreate",
        value: function fromJSONCreate(json) {
          var ing = new Chapter(json.chapterName, 1, new Date(), json.text, "");
          return ing;
        }
      }]);

      return Chapter;
    }();
    /***/

  },

  /***/
  "./src/app/story/chapter/chapter.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/story/chapter/chapter.component.ts ***!
    \****************************************************/

  /*! exports provided: ChapterComponent */

  /***/
  function srcAppStoryChapterChapterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChapterComponent", function () {
      return ChapterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ChapterComponent = /*#__PURE__*/function () {
      function ChapterComponent() {
        _classCallCheck(this, ChapterComponent);
      }

      _createClass(ChapterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChapterComponent;
    }();

    ChapterComponent.ɵfac = function ChapterComponent_Factory(t) {
      return new (t || ChapterComponent)();
    };

    ChapterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChapterComponent,
      selectors: [["app-chapter"]],
      inputs: {
        chapter: "chapter"
      },
      decls: 11,
      vars: 8,
      template: function ChapterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.chapter.number, ": ", ctx.chapter.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" written by ", ctx.chapter.author, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.chapter.text, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" added on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 5, ctx.chapter.dateAdded, "dd-MM-yyyy"), " ");
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardFooter"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3J5L2NoYXB0ZXIvY2hhcHRlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChapterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chapter',
          templateUrl: './chapter.component.html',
          styleUrls: ['./chapter.component.css']
        }]
      }], function () {
        return [];
      }, {
        chapter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/story/favorite-story-list/favorite-story-list.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/story/favorite-story-list/favorite-story-list.component.ts ***!
    \****************************************************************************/

  /*! exports provided: FavoriteStoryListComponent */

  /***/
  function srcAppStoryFavoriteStoryListFavoriteStoryListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoriteStoryListComponent", function () {
      return FavoriteStoryListComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _story_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../story-data.service */
    "./src/app/story/story-data.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _story_story_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../story/story.component */
    "./src/app/story/story/story.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _story_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../story-filter.pipe */
    "./src/app/story/story-filter.pipe.ts");

    function FavoriteStoryListComponent_mat_card_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" got an error while loading the story list: ", ctx_r0.errorMessage, " ");
      }
    }

    function FavoriteStoryListComponent_div_5_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-story", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var story_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("story", story_r6);
      }
    }

    function FavoriteStoryListComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FavoriteStoryListComponent_div_5_div_2_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "storyFilter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stories_r4 = ctx.ngIf;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, stories_r4, ctx_r1.filterStoryName));
      }
    }

    function FavoriteStoryListComponent_ng_template_7_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
      }
    }

    function FavoriteStoryListComponent_ng_template_7_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    function FavoriteStoryListComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FavoriteStoryListComponent_ng_template_7_span_0_Template, 1, 0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavoriteStoryListComponent_ng_template_7_ng_template_1_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.errorMessage)("ngIfElse", _r8);
      }
    }

    var FavoriteStoryListComponent = /*#__PURE__*/function () {
      function FavoriteStoryListComponent(route, _storyDataService) {
        var _this2 = this;

        _classCallCheck(this, FavoriteStoryListComponent);

        this.route = route;
        this._storyDataService = _storyDataService;
        this.filterStory$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.errorMessage = '';
        this.filterStory$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) {
          return val.toLowerCase();
        })).subscribe(function (val) {
          return _this2.filterStoryName = val;
        });
      }

      _createClass(FavoriteStoryListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this._fetchStories$ = this._storyDataService.favoriteStories$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            _this3.errorMessage = err;
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
          }));
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filter) {
          this.filterStoryName = filter;
        }
      }, {
        key: "stories$",
        get: function get() {
          return this._fetchStories$;
        }
      }]);

      return FavoriteStoryListComponent;
    }();

    FavoriteStoryListComponent.ɵfac = function FavoriteStoryListComponent_Factory(t) {
      return new (t || FavoriteStoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_story_data_service__WEBPACK_IMPORTED_MODULE_4__["StoryDataService"]));
    };

    FavoriteStoryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FavoriteStoryListComponent,
      selectors: [["app-favorite-story-list"]],
      decls: 9,
      vars: 5,
      consts: [["fxLayout", "column", "fxLayoutGap", "2%"], ["matInput", "", "placeholder", "filter", "type", "text", "data-cy", "filterInput", 3, "keyup"], ["class", "error", "data-cy", "appError", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["loadingOrError", ""], ["data-cy", "appError", 1, "error"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start"], ["class", "story", "fxFlex", "0 0 calc(25%-0.5%)", "fxFlex.xs", "100%", 4, "ngFor", "ngForOf"], ["fxFlex", "0 0 calc(25%-0.5%)", "fxFlex.xs", "100%", 1, "story"], [3, "story"], ["loading", ""]],
      template: function FavoriteStoryListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FavoriteStoryListComponent_Template_input_keyup_3_listener($event) {
            return ctx.filterStory$.next($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FavoriteStoryListComponent_mat_card_4_Template, 2, 1, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FavoriteStoryListComponent_div_5_Template, 4, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FavoriteStoryListComponent_ng_template_7_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.stories$))("ngIfElse", _r2);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _story_story_component__WEBPACK_IMPORTED_MODULE_10__["StoryComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _story_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["StoryFilterPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3J5L2Zhdm9yaXRlLXN0b3J5LWxpc3QvZmF2b3JpdGUtc3RvcnktbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoriteStoryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-favorite-story-list',
          templateUrl: './favorite-story-list.component.html',
          styleUrls: ['./favorite-story-list.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _story_data_service__WEBPACK_IMPORTED_MODULE_4__["StoryDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/story/my-story-list/my-story-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/story/my-story-list/my-story-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: MyStoryListComponent */

  /***/
  function srcAppStoryMyStoryListMyStoryListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyStoryListComponent", function () {
      return MyStoryListComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _story_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../story-data.service */
    "./src/app/story/story-data.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _story_story_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../story/story.component */
    "./src/app/story/story/story.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _story_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../story-filter.pipe */
    "./src/app/story/story-filter.pipe.ts");

    function MyStoryListComponent_mat_card_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" got an error while loading the story list: ", ctx_r0.errorMessage, " ");
      }
    }

    function MyStoryListComponent_div_5_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-story", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyStoryListComponent_div_5_div_2_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var story_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.deleteStory(story_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "delete_forever");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var story_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("story", story_r6);
      }
    }

    function MyStoryListComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyStoryListComponent_div_5_div_2_Template, 5, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "storyFilter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stories_r4 = ctx.ngIf;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, stories_r4, ctx_r1.filterStoryName));
      }
    }

    function MyStoryListComponent_ng_template_7_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
      }
    }

    function MyStoryListComponent_ng_template_7_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    function MyStoryListComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyStoryListComponent_ng_template_7_span_0_Template, 1, 0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyStoryListComponent_ng_template_7_ng_template_1_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.errorMessage)("ngIfElse", _r10);
      }
    }

    var MyStoryListComponent = /*#__PURE__*/function () {
      function MyStoryListComponent(route, _storyDataService) {
        var _this4 = this;

        _classCallCheck(this, MyStoryListComponent);

        this.route = route;
        this._storyDataService = _storyDataService;
        this.filterStory$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.errorMessage = '';
        this.filterStory$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) {
          return val.toLowerCase();
        })).subscribe(function (val) {
          return _this4.filterStoryName = val;
        });
      }

      _createClass(MyStoryListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this._fetchStories$ = this._storyDataService.myStories$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            _this5.errorMessage = err;
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
          }));
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filter) {
          this.filterStoryName = filter;
        }
      }, {
        key: "deleteStory",
        value: function deleteStory(story) {
          var _this6 = this;

          if (confirm("Are you sure you want to delete " + story.name)) {
            this._storyDataService.deleteStory(story);

            this._fetchStories$ = this._storyDataService.myStories$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              _this6.errorMessage = err;
              return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
            }));
          }
        }
      }, {
        key: "stories$",
        get: function get() {
          return this._fetchStories$;
        }
      }]);

      return MyStoryListComponent;
    }();

    MyStoryListComponent.ɵfac = function MyStoryListComponent_Factory(t) {
      return new (t || MyStoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_story_data_service__WEBPACK_IMPORTED_MODULE_4__["StoryDataService"]));
    };

    MyStoryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyStoryListComponent,
      selectors: [["app-my-story-list"]],
      decls: 9,
      vars: 5,
      consts: [["fxLayout", "column", "fxLayoutGap", "2%"], ["matInput", "", "placeholder", "filter", "type", "text", "data-cy", "filterInput", 3, "keyup"], ["class", "error", "data-cy", "appError", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["loadingOrError", ""], ["data-cy", "appError", 1, "error"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start"], ["class", "story", "fxFlex", "0 0 calc(25%-0.5%)", "fxFlex.xs", "100%", 4, "ngFor", "ngForOf"], ["fxFlex", "0 0 calc(25%-0.5%)", "fxFlex.xs", "100%", 1, "story"], [3, "story"], ["mat-button", "", 3, "click"], ["loading", ""]],
      template: function MyStoryListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function MyStoryListComponent_Template_input_keyup_3_listener($event) {
            return ctx.filterStory$.next($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyStoryListComponent_mat_card_4_Template, 2, 1, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyStoryListComponent_div_5_Template, 4, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MyStoryListComponent_ng_template_7_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.stories$))("ngIfElse", _r2);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _story_story_component__WEBPACK_IMPORTED_MODULE_10__["StoryComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _story_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["StoryFilterPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3J5L215LXN0b3J5LWxpc3QvbXktc3RvcnktbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyStoryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-story-list',
          templateUrl: './my-story-list.component.html',
          styleUrls: ['./my-story-list.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _story_data_service__WEBPACK_IMPORTED_MODULE_4__["StoryDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/story/story-data.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/story/story-data.service.ts ***!
    \*********************************************/

  /*! exports provided: StoryDataService */

  /***/
  function srcAppStoryStoryDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryDataService", function () {
      return StoryDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _story_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./story.model */
    "./src/app/story/story.model.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _chapter_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chapter.model */
    "./src/app/story/chapter.model.ts");

    var StoryDataService = /*#__PURE__*/function () {
      function StoryDataService(http) {
        var _this7 = this;

        _classCallCheck(this, StoryDataService);

        this.http = http;
        this._stories$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.stories$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
          // temporary fix, while we use the behaviorsubject as a cache stream
          _this7._stories$.error(err);

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
        })).subscribe(function (stories) {
          _this7._stories = stories;

          _this7._stories$.next(_this7._stories);
        });
      }

      _createClass(StoryDataService, [{
        key: "getStory$",
        value: function getStory$(id) {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/stories/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_story_model__WEBPACK_IMPORTED_MODULE_3__["Story"].fromJSON)); // returns just one recipe, as json
        }
      }, {
        key: "getChapters$",
        value: function getChapters$(id) {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/stories/chapters/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (list) {
            return list.map(_chapter_model__WEBPACK_IMPORTED_MODULE_6__["Chapter"].fromJSON);
          }));
        }
      }, {
        key: "isFavorited$",
        value: function isFavorited$(id) {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/author/isFavorited/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "favorite",
        value: function favorite(story) {
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/author/"), story.toJSON()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_story_model__WEBPACK_IMPORTED_MODULE_3__["Story"].fromJSON));
        }
      }, {
        key: "addNewStory",
        value: function addNewStory(story) {
          var _this8 = this;

          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/stories/"), story.toJSON()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_story_model__WEBPACK_IMPORTED_MODULE_3__["Story"].fromJSON)).pipe( // temporary fix, while we use the behaviorsubject as a cache stream
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            _this8._stories$.error(err);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (rec) {
            _this8._stories = [].concat(_toConsumableArray(_this8._stories), [rec]);

            _this8._stories$.next(_this8._stories);
          }));
        }
      }, {
        key: "updateStory",
        value: function updateStory(story) {
          var _this9 = this;

          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/stories/").concat(story.id), story.toJSON()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError)).subscribe(function () {
            _this9._stories = _this9._stories.filter(function (rec) {
              return rec.id != story.id;
            });

            _this9._stories$.next(_this9._stories);
          });
        }
      }, {
        key: "deleteStory",
        value: function deleteStory(story) {
          var _this10 = this;

          return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/stories/").concat(story.id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError)).subscribe(function () {
            _this10._stories = _this10._stories.filter(function (rec) {
              return rec.id != story.id;
            });

            _this10._stories$.next(_this10._stories);
          });
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          var errorMessage;

          if (err.error instanceof ErrorEvent) {
            errorMessage = "An error occurred: ".concat(err.error.message);
          } else if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            console.log(err);
            errorMessage = "'".concat(err.status, " ").concat(err.statusText, "' when accessing '").concat(err.url, "'");
          } else {
            errorMessage = err;
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
        }
      }, {
        key: "allStories$",
        get: function get() {
          return this._stories$;
        }
      }, {
        key: "myStories$",
        get: function get() {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/stories/MyStories")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (list) {
            return list.map(_story_model__WEBPACK_IMPORTED_MODULE_3__["Story"].fromJSON);
          }));
        }
      }, {
        key: "favoriteStories$",
        get: function get() {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/author/favoriteStories")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (list) {
            return list.map(_story_model__WEBPACK_IMPORTED_MODULE_3__["Story"].fromJSON);
          }));
        }
      }, {
        key: "stories$",
        get: function get() {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/stories/")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (list) {
            return list.map(_story_model__WEBPACK_IMPORTED_MODULE_3__["Story"].fromJSON);
          }));
        }
      }]);

      return StoryDataService;
    }();

    StoryDataService.ɵfac = function StoryDataService_Factory(t) {
      return new (t || StoryDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    StoryDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StoryDataService,
      factory: StoryDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoryDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/story/story-detail/story-detail.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/story/story-detail/story-detail.component.ts ***!
    \**************************************************************/

  /*! exports provided: StoryDetailComponent */

  /***/
  function srcAppStoryStoryDetailStoryDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryDetailComponent", function () {
      return StoryDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _chapter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../chapter.model */
    "./src/app/story/chapter.model.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _story_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../story-data.service */
    "./src/app/story/story-data.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _chapter_chapter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../chapter/chapter.component */
    "./src/app/story/chapter/chapter.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    function StoryDetailComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StoryDetailComponent_div_11_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.favoriteStory();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "favorite");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Favorited ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function StoryDetailComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StoryDetailComponent_ng_template_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r11.favoriteStory();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "favorite_border");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Favorite ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function StoryDetailComponent_div_17_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-chapter", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chapter_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chapter", chapter_r15);
      }
    }

    function StoryDetailComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StoryDetailComponent_div_17_div_2_Template, 2, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chapters_r13 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", chapters_r13);
      }
    }

    function StoryDetailComponent_ng_template_19_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span");
      }
    }

    function StoryDetailComponent_ng_template_19_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner");
      }
    }

    function StoryDetailComponent_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, StoryDetailComponent_ng_template_19_span_0_Template, 1, 0, "span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StoryDetailComponent_ng_template_19_ng_template_1_Template, 1, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.errorMessage)("ngIfElse", _r17);
      }
    }

    function StoryDetailComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "textarea", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r20 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r20);
      }
    }

    function StoryDetailComponent_mat_card_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" got an error while adding the story: ", ctx_r7.errorMessage, " ");
      }
    }

    function StoryDetailComponent_mat_card_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r8.confirmationMessage, "\n");
      }
    }

    var StoryDetailComponent = /*#__PURE__*/function () {
      function StoryDetailComponent(route, fb, _storyDataService) {
        _classCallCheck(this, StoryDetailComponent);

        this.route = route;
        this.fb = fb;
        this._storyDataService = _storyDataService;
        this.errorMessage = '';
        this.confirmationMessage = '';
        this._isLoading = true;
      }

      _createClass(StoryDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.route.data.subscribe(function (item) {
            return _this11.story = item['story'];
          });
          this._fetchChapters$ = this._storyDataService.getChapters$(this.story.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            _this11.errorMessage = err;
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
          }));
          this.favorited$ = this._storyDataService.isFavorited$(this.story.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            _this11.errorMessage = err;
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
          }));
          this.chapterfg = this.fb.group({
            chaptersforms: this.fb.array([this.createChapters()])
          });
          this.chaptersforms.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(function (ingList) {
            var lastElement = ingList[ingList.length - 1];

            if (lastElement.chapterName && lastElement.text.length > 2) {
              _this11.chaptersforms.push(_this11.createChapters());
            } else if (ingList.length >= 2) {
              var secondToLast = ingList[ingList.length - 2];

              if (!lastElement.chapterName && !lastElement.text && (!secondToLast.chapterName || secondToLast.text.length < 2)) {
                _this11.chaptersforms.removeAt(_this11.chaptersforms.length - 1);
              }
            }
          });
        }
      }, {
        key: "createChapters",
        value: function createChapters() {
          return this.fb.group({
            chapterName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            text: ['']
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var chapters = this.chapterfg.value.chaptersforms.map(_chapter_model__WEBPACK_IMPORTED_MODULE_3__["Chapter"].fromJSONCreate);
          chapters = chapters.filter(function (ing) {
            return ing.name != "";
          });
          this.story.addChapters(chapters);

          this._storyDataService.updateStory(this.story);

          this.chapterfg = this.fb.group({
            chaptersforms: this.fb.array([this.createChapters()])
          });
        }
      }, {
        key: "getErrorMessage",
        value: function getErrorMessage(errors) {
          if (!errors) {
            return null;
          }

          if (errors.required) {
            return 'is required';
          } else if (errors.minlength) {
            return "needs at least ".concat(errors.minlength.requiredLength, " characters (got ").concat(errors.minlength.actualLength, ")");
          } else if (errors.amountNoName) {
            return "if amount is set you must set a name";
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._isLoading = false;
        }
      }, {
        key: "favoriteStory",
        value: function favoriteStory() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this12 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this._storyDataService.favorite(this.story).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                      _this12.errorMessage = err;
                      return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
                    })).subscribe(function (story) {
                      return _this12.favorited$ = _this12._storyDataService.isFavorited$(_this12.story.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                        _this12.errorMessage = err;
                        return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
                      }));
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "chaptersforms",
        get: function get() {
          return this.chapterfg.get('chaptersforms');
        }
      }, {
        key: "allChapters$",
        get: function get() {
          return this._fetchChapters$;
        }
      }, {
        key: "isLoading",
        get: function get() {
          return this._isLoading;
        }
      }, {
        key: "isFavorited$",
        get: function get() {
          return this.favorited$;
        }
      }]);

      return StoryDetailComponent;
    }();

    StoryDetailComponent.ɵfac = function StoryDetailComponent_Factory(t) {
      return new (t || StoryDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_story_data_service__WEBPACK_IMPORTED_MODULE_7__["StoryDataService"]));
    };

    StoryDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: StoryDetailComponent,
      selectors: [["app-story-detail"]],
      decls: 31,
      vars: 18,
      consts: [[1, "container"], [4, "ngIf", "ngIfElse"], ["favorite", ""], ["mat-subheader", ""], ["loadingOrError", ""], [3, "formGroup", "ngSubmit"], ["formArrayName", "chaptersforms", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "submit"], ["class", "error", "data-cy", "appError", 4, "ngIf"], ["class", "confirmation", "data-cy", "appConfirmation", 4, "ngIf"], ["mat-button", "", 3, "click"], ["fxLayout", "column", "fxLayoutGap", "\u201D32px\u201D", "fxLayoutAlign", "start start"], ["class", "chapter", "fxFlex", "0 0 calc(25%-0.5%)", "fxFlex.xs", "100%", 4, "ngFor", "ngForOf"], ["fxFlex", "0 0 calc(25%-0.5%)", "fxFlex.xs", "100%", 1, "chapter"], [3, "chapter"], ["loading", ""], ["formArrayName", "chaptersforms"], [3, "formGroupName"], ["matInput", "", "type", "text", "aria-label", "chapterName", "placeholder", "Name of chapter", "formControlName", "chapterName"], ["matInput", "", "type", "text", "aria-label", "text", "placeholder", "Chapter", "formControlName", "text", "rows", "10"], ["data-cy", "appError", 1, "error"], ["data-cy", "appConfirmation", 1, "confirmation"]],
      template: function StoryDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "menu_book");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, StoryDetailComponent_div_11_Template, 5, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, StoryDetailComponent_ng_template_13_Template, 4, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Chapters");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, StoryDetailComponent_div_17_Template, 3, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, StoryDetailComponent_ng_template_19_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Add a chapter");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function StoryDetailComponent_Template_form_ngSubmit_25_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, StoryDetailComponent_div_26_Template, 6, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Add chapter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, StoryDetailComponent_mat_card_29_Template, 2, 1, "mat-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, StoryDetailComponent_mat_card_30_Template, 3, 1, "mat-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.story.name, " created by ", ctx.story.author, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" added on ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 11, ctx.story.dateAdded, "dd-MM-yyyy"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 14, ctx.isFavorited$))("ngIfElse", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 16, ctx.allChapters$))("ngIfElse", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.chapterfg);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.chapterfg.get("chaptersforms")["controls"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.confirmationMessage);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListSubheaderCssMatStyler"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _chapter_chapter_component__WEBPACK_IMPORTED_MODULE_14__["ChapterComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
      styles: [".container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n    width:70%;\r\n    margin-left: 15%;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Rvcnkvc3RvcnktZGV0YWlsL3N0b3J5LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zdG9yeS9zdG9yeS1kZXRhaWwvc3RvcnktZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICB3aWR0aDo3MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StoryDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-story-detail',
          templateUrl: './story-detail.component.html',
          styleUrls: ['./story-detail.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _story_data_service__WEBPACK_IMPORTED_MODULE_7__["StoryDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/story/story-filter.pipe.ts":
  /*!********************************************!*\
    !*** ./src/app/story/story-filter.pipe.ts ***!
    \********************************************/

  /*! exports provided: StoryFilterPipe */

  /***/
  function srcAppStoryStoryFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryFilterPipe", function () {
      return StoryFilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StoryFilterPipe = /*#__PURE__*/function () {
      function StoryFilterPipe() {
        _classCallCheck(this, StoryFilterPipe);
      }

      _createClass(StoryFilterPipe, [{
        key: "transform",
        value: function transform(stories, name) {
          if (!name || name.length === 0) {
            return stories;
          }

          return stories.filter(function (rec) {
            return rec.name.toLowerCase().startsWith(name.toLowerCase());
          });
        }
      }]);

      return StoryFilterPipe;
    }();

    StoryFilterPipe.ɵfac = function StoryFilterPipe_Factory(t) {
      return new (t || StoryFilterPipe)();
    };

    StoryFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "storyFilter",
      type: StoryFilterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoryFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'storyFilter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/story/story-list/story-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/story/story-list/story-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: StoryListComponent */

  /***/
  function srcAppStoryStoryListStoryListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryListComponent", function () {
      return StoryListComponent;
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


    var _story_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../story-data.service */
    "./src/app/story/story-data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _story_story_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../story/story.component */
    "./src/app/story/story/story.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _story_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../story-filter.pipe */
    "./src/app/story/story-filter.pipe.ts");

    function StoryListComponent_mat_card_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" got an error while loading the story list: ", ctx_r0.errorMessage, " ");
      }
    }

    function StoryListComponent_div_5_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-story", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoryListComponent_div_5_div_2_Template_app_story_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var story_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.showStory(story_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var story_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("story", story_r6);
      }
    }

    function StoryListComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StoryListComponent_div_5_div_2_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "storyFilter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stories_r4 = ctx.ngIf;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, stories_r4, ctx_r1.filterStoryName));
      }
    }

    function StoryListComponent_ng_template_7_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
      }
    }

    function StoryListComponent_ng_template_7_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    function StoryListComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StoryListComponent_ng_template_7_span_0_Template, 1, 0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoryListComponent_ng_template_7_ng_template_1_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.errorMessage)("ngIfElse", _r10);
      }
    }

    var StoryListComponent = /*#__PURE__*/function () {
      function StoryListComponent(_storyDataService, _router) {
        var _this13 = this;

        _classCallCheck(this, StoryListComponent);

        this._storyDataService = _storyDataService;
        this._router = _router;
        this.filterStory$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.errorMessage = '';
        this.filterStory$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) {
          return val.toLowerCase();
        })).subscribe(function (val) {
          return _this13.filterStoryName = val;
        });
      }

      _createClass(StoryListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this._fetchStories$ = this._storyDataService.allStories$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            _this14.errorMessage = err;
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
          }));
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filter) {
          this.filterStoryName = filter;
        }
      }, {
        key: "showStory",
        value: function showStory(story) {
          this._router.navigateByUrl['/story/' + story.id];
        }
      }, {
        key: "stories$",
        get: function get() {
          return this._fetchStories$;
        }
      }]);

      return StoryListComponent;
    }();

    StoryListComponent.ɵfac = function StoryListComponent_Factory(t) {
      return new (t || StoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_story_data_service__WEBPACK_IMPORTED_MODULE_3__["StoryDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    StoryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StoryListComponent,
      selectors: [["app-story-list"]],
      decls: 9,
      vars: 5,
      consts: [["fxLayout", "column", "fxLayoutGap", "2%"], ["matInput", "", "placeholder", "filter", "type", "text", "data-cy", "filterInput", 3, "keyup"], ["class", "error", "data-cy", "appError", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["loadingOrError", ""], ["data-cy", "appError", 1, "error"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutGap", "0.5%", "fxLayoutAlign", "start start"], ["class", "story", "fxFlex", "0 0 calc(25%-0.5%)", "fxFlex.xs", "100%", 4, "ngFor", "ngForOf"], ["fxFlex", "0 0 calc(25%-0.5%)", "fxFlex.xs", "100%", 1, "story"], [3, "story", "click"], ["loading", ""]],
      template: function StoryListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function StoryListComponent_Template_input_keyup_3_listener($event) {
            return ctx.filterStory$.next($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StoryListComponent_mat_card_4_Template, 2, 1, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StoryListComponent_div_5_Template, 4, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StoryListComponent_ng_template_7_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.stories$))("ngIfElse", _r2);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _story_story_component__WEBPACK_IMPORTED_MODULE_10__["StoryComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _story_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["StoryFilterPipe"]],
      styles: ["mat-card[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Rvcnkvc3RvcnktbGlzdC9zdG9yeS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zdG9yeS9zdG9yeS1saXN0L3N0b3J5LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-story-list',
          templateUrl: './story-list.component.html',
          styleUrls: ['./story-list.component.css']
        }]
      }], function () {
        return [{
          type: _story_data_service__WEBPACK_IMPORTED_MODULE_3__["StoryDataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/story/story.model.ts":
  /*!**************************************!*\
    !*** ./src/app/story/story.model.ts ***!
    \**************************************/

  /*! exports provided: Story */

  /***/
  function srcAppStoryStoryModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Story", function () {
      return Story;
    });
    /* harmony import */


    var _chapter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./chapter.model */
    "./src/app/story/chapter.model.ts");

    var Story = /*#__PURE__*/function () {
      function Story(_name) {
        var _favorites = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        var _author = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

        var _dateAdded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Date();

        var _chapters = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new Array();

        _classCallCheck(this, Story);

        this._name = _name;
        this._favorites = _favorites;
        this._author = _author;
        this._dateAdded = _dateAdded;
        this._chapters = _chapters;
      }

      _createClass(Story, [{
        key: "toJSON",
        value: function toJSON() {
          return {
            id: this.id,
            name: this.name,
            chapters: this.chapters.map(function (ing) {
              return ing.toJSON();
            }),
            favorites: this.favorites,
            dateAdded: this.dateAdded,
            author: this.author
          };
        }
      }, {
        key: "addChapters",
        value: function addChapters(chapterlist) {
          var _this15 = this;

          chapterlist.forEach(function (chapter) {
            _this15._chapters.push(chapter);
          });
        }
      }, {
        key: "addChapter",
        value: function addChapter(name, text, author, number) {
          var currentDate = new Date();

          this._chapters.push(new _chapter_model__WEBPACK_IMPORTED_MODULE_0__["Chapter"](name, number, currentDate, text, author));
        }
      }, {
        key: "name",
        get: function get() {
          return this._name;
        }
      }, {
        key: "chapters",
        get: function get() {
          return this._chapters;
        }
      }, {
        key: "dateAdded",
        get: function get() {
          return this._dateAdded;
        }
      }, {
        key: "favorites",
        get: function get() {
          return this._favorites;
        }
      }, {
        key: "author",
        get: function get() {
          return this._author;
        }
      }, {
        key: "id",
        get: function get() {
          return this._id;
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(json) {
          var rec = new Story(json.name, json.favorites, json.author, new Date(json.dateAdded), json.chapters.map(_chapter_model__WEBPACK_IMPORTED_MODULE_0__["Chapter"].fromJSON));
          rec._id = json.id;
          return rec;
        }
      }]);

      return Story;
    }();
    /***/

  },

  /***/
  "./src/app/story/story.module.ts":
  /*!***************************************!*\
    !*** ./src/app/story/story.module.ts ***!
    \***************************************/

  /*! exports provided: StoryModule */

  /***/
  function srcAppStoryStoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryModule", function () {
      return StoryModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _story_story_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./story/story.component */
    "./src/app/story/story/story.component.ts");
    /* harmony import */


    var _chapter_chapter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chapter/chapter.component */
    "./src/app/story/chapter/chapter.component.ts");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _story_list_story_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./story-list/story-list.component */
    "./src/app/story/story-list/story-list.component.ts");
    /* harmony import */


    var _add_story_add_story_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-story/add-story.component */
    "./src/app/story/add-story/add-story.component.ts");
    /* harmony import */


    var _story_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./story-filter.pipe */
    "./src/app/story/story-filter.pipe.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _my_story_list_my_story_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./my-story-list/my-story-list.component */
    "./src/app/story/my-story-list/my-story-list.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _story_detail_story_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./story-detail/story-detail.component */
    "./src/app/story/story-detail/story-detail.component.ts");
    /* harmony import */


    var _favorite_story_list_favorite_story_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./favorite-story-list/favorite-story-list.component */
    "./src/app/story/favorite-story-list/favorite-story-list.component.ts");

    var routes = [{
      path: 'list',
      component: _story_list_story_list_component__WEBPACK_IMPORTED_MODULE_5__["StoryListComponent"]
    }, {
      path: 'add',
      component: _add_story_add_story_component__WEBPACK_IMPORTED_MODULE_6__["AddStoryComponent"]
    }];

    var StoryModule = function StoryModule() {
      _classCallCheck(this, StoryModule);
    };

    StoryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StoryModule
    });
    StoryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StoryModule_Factory(t) {
        return new (t || StoryModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StoryModule, {
        declarations: [_story_story_component__WEBPACK_IMPORTED_MODULE_2__["StoryComponent"], _chapter_chapter_component__WEBPACK_IMPORTED_MODULE_3__["ChapterComponent"], _story_list_story_list_component__WEBPACK_IMPORTED_MODULE_5__["StoryListComponent"], _story_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["StoryFilterPipe"], _add_story_add_story_component__WEBPACK_IMPORTED_MODULE_6__["AddStoryComponent"], _my_story_list_my_story_list_component__WEBPACK_IMPORTED_MODULE_9__["MyStoryListComponent"], _favorite_story_list_favorite_story_list_component__WEBPACK_IMPORTED_MODULE_12__["FavoriteStoryListComponent"], _story_detail_story_detail_component__WEBPACK_IMPORTED_MODULE_11__["StoryDetailComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]],
        exports: [_story_list_story_list_component__WEBPACK_IMPORTED_MODULE_5__["StoryListComponent"], _add_story_add_story_component__WEBPACK_IMPORTED_MODULE_6__["AddStoryComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_story_story_component__WEBPACK_IMPORTED_MODULE_2__["StoryComponent"], _chapter_chapter_component__WEBPACK_IMPORTED_MODULE_3__["ChapterComponent"], _story_list_story_list_component__WEBPACK_IMPORTED_MODULE_5__["StoryListComponent"], _story_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["StoryFilterPipe"], _add_story_add_story_component__WEBPACK_IMPORTED_MODULE_6__["AddStoryComponent"], _my_story_list_my_story_list_component__WEBPACK_IMPORTED_MODULE_9__["MyStoryListComponent"], _favorite_story_list_favorite_story_list_component__WEBPACK_IMPORTED_MODULE_12__["FavoriteStoryListComponent"], _story_detail_story_detail_component__WEBPACK_IMPORTED_MODULE_11__["StoryDetailComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes)],
          exports: [_story_list_story_list_component__WEBPACK_IMPORTED_MODULE_5__["StoryListComponent"], _add_story_add_story_component__WEBPACK_IMPORTED_MODULE_6__["AddStoryComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/story/story/story.component.ts":
  /*!************************************************!*\
    !*** ./src/app/story/story/story.component.ts ***!
    \************************************************/

  /*! exports provided: StoryComponent */

  /***/
  function srcAppStoryStoryStoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryComponent", function () {
      return StoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _story_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../story-data.service */
    "./src/app/story/story-data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var StoryComponent = /*#__PURE__*/function () {
      function StoryComponent(_storyDataService, _router) {
        _classCallCheck(this, StoryComponent);

        this._storyDataService = _storyDataService;
        this._router = _router;
      }

      _createClass(StoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showStory",
        value: function showStory() {
          this._router.navigate(['/story/' + this.story.id]);
        }
      }]);

      return StoryComponent;
    }();

    StoryComponent.ɵfac = function StoryComponent_Factory(t) {
      return new (t || StoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_story_data_service__WEBPACK_IMPORTED_MODULE_1__["StoryDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    StoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StoryComponent,
      selectors: [["app-story"]],
      inputs: {
        story: "story"
      },
      decls: 14,
      vars: 7,
      consts: [["data-cy", "storyCard", 3, "click"], ["mat-subheader", ""]],
      template: function StoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoryComponent_Template_mat_card_click_0_listener() {
            return ctx.showStory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "favorite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.story.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.story.favorites, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("added on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 4, ctx.story.dateAdded, "dd-MM-yyyy"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.story.chapters.length, " chapter(s)");
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListSubheaderCssMatStyler"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3J5L3N0b3J5L3N0b3J5LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-story',
          templateUrl: './story.component.html',
          styleUrls: ['./story.component.css']
        }]
      }], function () {
        return [{
          type: _story_data_service__WEBPACK_IMPORTED_MODULE_1__["StoryDataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        story: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/user/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppUserAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/user/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authService.user$.getValue()) {
            return true;
          }

          this.authService.redirectUrl = state.url;
          this.router.navigate(['/login']);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/authentication.service.ts":
  /*!************************************************!*\
    !*** ./src/app/user/authentication.service.ts ***!
    \************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppUserAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    function parseJwt(token) {
      if (!token) {
        return null;
      }

      var base64Token = token.split('.')[1];
      var base64 = base64Token.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(window.atob(base64));
    }

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http) {
        var _this16 = this;

        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this._tokenKey = 'currentUser';
        this.redirectUrl = null;

        this.checkUserNameAvailability = function (email) {
          return _this16.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/account/checkusername"), {
            params: {
              email: email
            }
          });
        };

        this.checkNicknameAvailability = function (nickname) {
          return _this16.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/account/checknickname"), {
            params: {
              nickname: nickname
            }
          });
        };

        var parsedToken = parseJwt(localStorage.getItem(this._tokenKey));

        if (parsedToken) {
          var expires = new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();

          if (expires) {
            localStorage.removeItem(this._tokenKey);
            parsedToken = null;
          }
        }

        this._user$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](parsedToken && parsedToken.unique_name);
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(email, password) {
          var _this17 = this;

          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/account"), {
            email: email,
            password: password
          }, {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (token) {
            if (token) {
              localStorage.setItem(_this17._tokenKey, token);

              _this17._user$.next(email);

              return true;
            } else {
              return false;
            }
          }));
        }
      }, {
        key: "register",
        value: function register(nickname, email, password) {
          var _this18 = this;

          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/account/register"), {
            nickname: nickname,
            email: email,
            password: password,
            passwordConfirmation: password
          }, {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (token) {
            if (token) {
              localStorage.setItem(_this18._tokenKey, token);

              _this18._user$.next(email);

              return true;
            } else {
              return false;
            }
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          if (this.user$.getValue()) {
            localStorage.removeItem('currentUser');

            this._user$.next(null);
          }
        }
      }, {
        key: "user$",
        get: function get() {
          return this._user$;
        }
      }, {
        key: "token",
        get: function get() {
          var localToken = localStorage.getItem(this._tokenKey);
          return !!localToken ? localToken : '';
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppUserLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/user/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function LoginComponent_mat_error_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getErrorMessage(ctx_r0.user.get("email")["errors"]), " ");
      }
    }

    function LoginComponent_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getErrorMessage(ctx_r1.user.get("password")["errors"]), " ");
      }
    }

    function LoginComponent_mat_card_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessage, " ");
      }
    }

    var _c0 = function _c0() {
      return ["/register"];
    };

    function comparePasswords(control) {
      var password = control.get('password');
      var confirmPassword = control.get('confirmPassword');
      return password.value === confirmPassword.value ? null : {
        passwordsDiffer: true
      };
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, router, fb) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.errorMessage = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this19 = this;

          this.authService.login(this.user.value.email, this.user.value.password).subscribe(function (val) {
            if (val) {
              if (_this19.authService.redirectUrl) {
                _this19.router.navigateByUrl(_this19.authService.redirectUrl);

                _this19.authService.redirectUrl = undefined;
              } else {
                _this19.router.navigate(['/story/list']);
              }
            }
          }, function (err) {
            console.log(err);

            if (err.error instanceof Error) {
              _this19.errorMessage = "".concat(err.error.message);
            } else {
              _this19.errorMessage = "Er werd geen account gevonden met opgegeven e-mailadres en wachtwoord";
            }
          });
        }
      }, {
        key: "getErrorMessage",
        value: function getErrorMessage(errors) {
          //opvangen van de validators
          if (!errors) {
            return null;
          } else if (errors.required) {
            return 'Dit moet moet ingevuld worden';
          } else if (errors.email) {
            return 'Geen geldige email';
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 21,
      vars: 7,
      consts: [[1, "login-main"], ["data-cy", "login"], [3, "formGroup", "ngSubmit"], [1, "input"], [1, "veld"], ["matInput", "", "type", "email", "placeholder", "email", "aria-label", "email", "data-cy", "login-email", "formControlName", "email", "required", ""], ["data-cy", "email-error", 4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "password", "aria-label", "password", "data-cy", "login-password", "formControlName", "password", "required", ""], ["data-cy", "password-error", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["mat-raised-button", "", "type", "submit", "color", "primary", "data-cy", "login-button", 3, "disabled"], ["mat-raised-button", "", "type", "submit", "color", "secondary", 3, "routerLink"], ["class", "error", "data-cy", "appError", 4, "ngIf"], ["data-cy", "email-error"], ["data-cy", "password-error"], ["data-cy", "appError", 1, "error"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_mat_error_10_Template, 2, 1, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_mat_error_14_Template, 2, 1, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_mat_card_20_Template, 2, 1, "mat-card", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.user);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.get("email").errors && ctx.user.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.get("password").errors && ctx.user.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.user.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
      styles: [".login-main[_ngcontent-%COMP%] {\r\n    margin-top: 100px;\r\n    margin-left: 30%;\r\n    width: 40%;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding-bottom: 5px;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.veld[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.error[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tbWFpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi52ZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgd2lkdGg6IDk1JTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/regels/regels.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/regels/regels.component.ts ***!
    \*************************************************/

  /*! exports provided: RegelsComponent */

  /***/
  function srcAppUserRegelsRegelsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegelsComponent", function () {
      return RegelsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RegelsComponent = /*#__PURE__*/function () {
      function RegelsComponent() {
        _classCallCheck(this, RegelsComponent);
      }

      _createClass(RegelsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegelsComponent;
    }();

    RegelsComponent.ɵfac = function RegelsComponent_Factory(t) {
      return new (t || RegelsComponent)();
    };

    RegelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegelsComponent,
      selectors: [["app-regels"]],
      decls: 9,
      vars: 0,
      template: function RegelsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "At least 8 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "At least 1 lower case letter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "At leest 1 upper case letter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "At least 1 number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["ul[_ngcontent-%COMP%] {\r\n    width: 100%\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: large;\r\n    font-weight: 700;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZWdlbHMvcmVnZWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIseUNBQXlDO0FBQzdDIiwiZmlsZSI6InNyYy9hcHAvdXNlci9yZWdlbHMvcmVnZWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG5saSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegelsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-regels',
          templateUrl: './regels.component.html',
          styleUrls: ['./regels.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/register/register.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/user/register/register.component.ts ***!
    \*****************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppUserRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _regels_regels_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../regels/regels.component */
    "./src/app/user/regels/regels.component.ts");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/user/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function RegisterComponent_mat_error_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getErrorMessage(ctx_r0.user.get("nickname").errors), " ");
      }
    }

    function RegisterComponent_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getErrorMessage(ctx_r1.user.get("email").errors), " ");
      }
    }

    function RegisterComponent_mat_error_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.getErrorMessage(ctx_r2.user.get("passwordGroup").get("password").errors), " ");
      }
    }

    function RegisterComponent_mat_error_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.getErrorMessage(ctx_r3.user.get("passwordGroup").get("confirmPassword").errors), " ");
      }
    }

    function RegisterComponent_mat_error_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.getErrorMessage(ctx_r4.user.get("passwordGroup").errors), " ");
      }
    }

    function RegisterComponent_mat_card_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.errorMessage, " ");
      }
    }

    var _c0 = function _c0() {
      return ["/login"];
    };

    function patternValidator(regex, error) {
      return function (control) {
        if (!control.value) {
          return null;
        } // test the value of the control against the regexp supplied


        var valid = regex.test(control.value); // if true, return no error (no error), else return error passed in the second parameter

        return valid ? null : error;
      };
    }

    function comparePasswords(control) {
      var password = control.get('password');
      var confirmPassword = control.get('confirmPassword');
      return password.value === confirmPassword.value ? null : {
        passwordsDiffer: true
      };
    }

    function serverSideValidateUsername(checkAvailabilityFn) {
      return function (control) {
        return checkAvailabilityFn(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (available) {
          if (available) {
            return null;
          }

          return {
            userAlreadyExists: true
          };
        }));
      };
    }

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(authService, router, fb, _snackBar) {
        _classCallCheck(this, RegisterComponent);

        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this._snackBar = _snackBar;
        this.errorMessage = '';
      }

      _createClass(RegisterComponent, [{
        key: "openRegels",
        value: function openRegels() {
          this._snackBar.openFromComponent(_regels_regels_component__WEBPACK_IMPORTED_MODULE_3__["RegelsComponent"], {
            duration: 3000
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.fb.group({
            nickname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email], serverSideValidateUsername(this.authService.checkUserNameAvailability)],
            passwordGroup: this.fb.group({
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), patternValidator(/\d/, {
                hasNumber: true
              }), patternValidator(/[A-Z]/, {
                hasUpperCase: true
              }), patternValidator(/[a-z]/, {
                hasLowerCase: true
              })]],
              confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }, {
              validator: comparePasswords
            })
          });
        }
      }, {
        key: "getErrorMessage",
        value: function getErrorMessage(errors) {
          if (!errors) {
            return null;
          }

          if (errors.required) {
            return 'is required';
          } else if (errors.minlength) {
            return "needs at least ".concat(errors.minlength.requiredLength, " characters (got ").concat(errors.minlength.actualLength, ")");
          } else if (errors.hasNumber) {
            return "needs at least 1 number";
          } else if (errors.hasUpperCase) {
            return "needs at least 1 upper case letter";
          } else if (errors.hasNumber) {
            return "needs at least 1 lower case letter";
          } else if (errors.userAlreadyExists) {
            return "email already used";
          } else if (errors.email) {
            return "not a valid email address";
          } else if (errors.passwordsDiffer) {
            return "passwords are not the same";
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this20 = this;

          this.authService.register(this.user.value.nickname, this.user.value.email, this.user.value.passwordGroup.password).subscribe(function (val) {
            if (val) {
              if (_this20.authService.redirectUrl) {
                _this20.router.navigateByUrl(_this20.authService.redirectUrl);

                _this20.authService.redirectUrl = undefined;
              } else {
                _this20.router.navigate(['/story/list']);
              }
            } else {
              _this20.errorMessage = "Could not login";
            }
          }, function (err) {
            console.log(err);

            if (err.error instanceof Error) {
              _this20.errorMessage = "Error while trying to login user ".concat(_this20.user.value.email, ": ").concat(err.error.message);
            } else {
              _this20.errorMessage = "\xE9\xE9n of meerdere velden zijn onjuist ingevuld";
            }
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 30,
      vars: 10,
      consts: [[1, "login-main"], ["data-cy", "register"], [3, "formGroup", "ngSubmit"], ["fxLayout", "column"], ["fxLayout", "row", "fxLayoutGap", "2%"], ["matInput", "", "placeholder", "nickname", "aria-label", "nickname", "data-cy", "register-nickname", "formControlName", "nickname"], [4, "ngIf"], ["matInput", "", "placeholder", "email", "aria-label", "email", "data-cy", "register-email", "formControlName", "email"], ["fxLayout", "column", "formGroupName", "passwordGroup"], [1, "rij"], ["type", "button", "mat-stroked-button", "", "aria-label", "Show an example snack-bar", 1, "regels", 3, "click"], [1, "password"], ["type", "password", "matInput", "", "placeholder", "password", "aria-label", "password", "data-cy", "register-password", "formControlName", "password", 1, "password"], ["type", "password", "matInput", "", "placeholder", "confirm password", "aria-label", "confirm password", "data-cy", "register-confirm-password", "formControlName", "confirmPassword"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["mat-raised-button", "", "type", "submit", "color", "primary", "data-cy", "register-button", 3, "disabled"], ["mat-raised-button", "", "type", "submit", "color", "secondary", "data-cy", "login-button", 3, "routerLink"], ["class", "error", "data-cy", "appError", 4, "ngIf"], ["data-cy", "appError", 1, "error"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegisterComponent_mat_error_9_Template, 2, 1, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RegisterComponent_mat_error_12_Template, 2, 1, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_15_listener() {
            return ctx.openRegels();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterComponent_mat_error_19_Template, 2, 1, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegisterComponent_mat_error_22_Template, 2, 1, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegisterComponent_mat_error_23_Template, 2, 1, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-actions", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RegisterComponent_mat_card_29_Template, 2, 1, "mat-card", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.user);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.get("nickname").errors && ctx.user.get("nickname").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.get("email").errors && ctx.user.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.get("passwordGroup").get("password").errors && ctx.user.get("passwordGroup").get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.get("passwordGroup").get("confirmPassword").errors && ctx.user.get("passwordGroup").get("confirmPassword").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.get("passwordGroup").errors && ctx.user.get("passwordGroup").get("confirmPassword").touched && ctx.user.get("passwordGroup").get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.user.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]],
      styles: [".login-main[_ngcontent-%COMP%] {\r\n    margin-top: 100px;\r\n    margin-left: 30%;\r\n    width: 40%;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding-bottom: 5px;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.rij[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.error[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n}\r\n\r\n.regels[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 10%;\r\n}\r\n\r\n.password[_ngcontent-%COMP%] {\r\n    width: 85%;\r\n    float: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLW1haW4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucmlqIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcblxyXG4ucmVnZWxzIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi5wYXNzd29yZCB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [{
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/user/register/register.component.ts");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _regels_regels_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./regels/regels.component */
    "./src/app/user/regels/regels.component.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }];

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserModule
    });
    UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserModule_Factory(t) {
        return new (t || UserModule)();
      },
      providers: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, {
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], _regels_regels_component__WEBPACK_IMPORTED_MODULE_7__["RegelsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], _regels_regels_component__WEBPACK_IMPORTED_MODULE_7__["RegelsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
          providers: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]]
        }]
      }], null, null);
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
      production: false,
      apiUrl: '/api'
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
    /*! C:\Users\Thibo\Desktop\WebApps\1920-c1-fe-ThiboHoffman\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map