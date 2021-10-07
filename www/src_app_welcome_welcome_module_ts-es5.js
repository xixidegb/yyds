(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkYYDS"] = self["webpackChunkYYDS"] || []).push([["src_app_welcome_welcome_module_ts"], {
    /***/
    1934: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WelcomePageRoutingModule": function WelcomePageRoutingModule() {
          return (
            /* binding */
            _WelcomePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./welcome.page */
      87839);

      var routes = [{
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage
      }];

      var _WelcomePageRoutingModule = function WelcomePageRoutingModule() {
        _classCallCheck(this, WelcomePageRoutingModule);
      };

      _WelcomePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _WelcomePageRoutingModule);
      /***/
    },

    /***/
    16720: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WelcomePageModule": function WelcomePageModule() {
          return (
            /* binding */
            _WelcomePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      16274);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./welcome-routing.module */
      1934);
      /* harmony import */


      var _welcome_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./welcome.page */
      87839);

      var _WelcomePageModule = function WelcomePageModule() {
        _classCallCheck(this, WelcomePageModule);
      };

      _WelcomePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomePageRoutingModule],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_1__.WelcomePage]
      })], _WelcomePageModule);
      /***/
    },

    /***/
    87839: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WelcomePage": function WelcomePage() {
          return (
            /* binding */
            _WelcomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./welcome.page.html */
      62553);
      /* harmony import */


      var _welcome_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./welcome.page.scss */
      62447);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);

      var _WelcomePage = /*#__PURE__*/function () {
        function WelcomePage() {
          _classCallCheck(this, WelcomePage);
        }

        _createClass(WelcomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WelcomePage;
      }();

      _WelcomePage.ctorParameters = function () {
        return [];
      };

      _WelcomePage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-welcome',
        template: _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_welcome_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _WelcomePage);
      /***/
    },

    /***/
    62447: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  font-weight: 300;\n}\n\nion-content {\n  --background: #fafafa;\n}\n\nion-text {\n  position: absolute;\n  top: 25%;\n}\n\nh1 {\n  font-size: 42px;\n}\n\np {\n  font-size: 14px;\n  color: #696969;\n}\n\n.actions {\n  position: absolute;\n  width: 90%;\n  bottom: 20px;\n}\n\n.login-btn {\n  width: 45%;\n}\n\n.signup-btn {\n  width: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUFBSjs7QUFJQTtFQUNJLGVBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBREo7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFDSSxVQUFBO0FBRko7O0FBSUE7RUFDSSxVQUFBO0FBREoiLCJmaWxlIjoid2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxuXG5cbmlvbi10ZXh0IHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MjUlO1xufVxuXG5cbmgxIHtcbiAgICBmb250LXNpemU6IDQycHg7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgIGNvbG9yOiM2OTY5Njk7XG59XG5cblxuLmFjdGlvbnMge1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHdpZHRoOjkwJTtcbiAgICBib3R0b206MjBweDtcbn1cblxuLmxvZ2luLWJ0biB7XG4gICAgd2lkdGg6NDUlO1xufVxuLnNpZ251cC1idG4ge1xuICAgIHdpZHRoOjQ1JTtcbn0iXX0= */";
      /***/
    },

    /***/
    62553: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>welcome</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n  <ion-text>\n    <h1>Welcome</h1>\n    <p>Get started by logging into <br>your account</p>\n  </ion-text>\n  <div class=\"actions\">\n    <ion-button class=\"login-btn\" color=\"light\" routerLink='/login'>LOG IN</ion-button>\n    <ion-button class=\"signup-btn\" color=\"dark\" routerLink='/register'>REGISTER</ion-button>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_welcome_welcome_module_ts-es5.js.map