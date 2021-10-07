(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkYYDS"] = self["webpackChunkYYDS"] || []).push([["src_app_tab4_tab4_module_ts"], {
    /***/
    54041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab4PageRoutingModule": function Tab4PageRoutingModule() {
          return (
            /* binding */
            _Tab4PageRoutingModule
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


      var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab4.page */
      30897);

      var routes = [{
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page
      }];

      var _Tab4PageRoutingModule = function Tab4PageRoutingModule() {
        _classCallCheck(this, Tab4PageRoutingModule);
      };

      _Tab4PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Tab4PageRoutingModule);
      /***/
    },

    /***/
    39072: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab4PageModule": function Tab4PageModule() {
          return (
            /* binding */
            _Tab4PageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      34595);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      16274);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab4.page */
      30897);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      74081);
      /* harmony import */


      var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab4-routing.module */
      54041);

      var _Tab4PageModule = function Tab4PageModule() {
        _classCallCheck(this, Tab4PageModule);
      };

      _Tab4PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
          path: '',
          component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page
        }]), _tab4_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab4PageRoutingModule],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page]
      })], _Tab4PageModule);
      /***/
    },

    /***/
    30897: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab4Page": function Tab4Page() {
          return (
            /* binding */
            _Tab4Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tab4.page.html */
      28203);
      /* harmony import */


      var _tab4_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tab4.page.scss */
      35300);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _ionic_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../ionic-auth.service */
      43931);

      var _Tab4Page = /*#__PURE__*/function () {
        function Tab4Page(router, ionicAuthService) {
          _classCallCheck(this, Tab4Page);

          this.router = router;
          this.ionicAuthService = ionicAuthService;
        }

        _createClass(Tab4Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.ionicAuthService.userDetails().subscribe(function (response) {
              if (response !== null) {
                _this.userDetail = response.email;
              } else {
                _this.router.navigateByUrl('');
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "signOut",
          value: function signOut() {
            var _this2 = this;

            this.ionicAuthService.signoutUser().then(function (res) {
              _this2.router.navigateByUrl('login');
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }]);

        return Tab4Page;
      }();

      _Tab4Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _ionic_auth_service__WEBPACK_IMPORTED_MODULE_2__.IonicAuthService
        }];
      };

      _Tab4Page = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab4',
        template: _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab4_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Tab4Page);
      /***/
    },

    /***/
    35300: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-row div {\n  margin: 5%;\n  width: 40%;\n  background-color: #dbe8c9;\n  border-radius: 20px;\n}\n\nion-row div:first-child {\n  background-color: #fbeab7;\n}\n\n#tab4-3 {\n  margin: 10% 5%;\n  background-color: #fef7da;\n  border-radius: 20px;\n}\n\n#tab4-3 p {\n  line-height: 0.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFSTtFQUNJLGtCQUFBO0FBQVIiLCJmaWxlIjoidGFiNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcm93IGRpdiB7XG4gICAgbWFyZ2luOjUlO1xuICAgIHdpZHRoOjQwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LDIzMiwyMDEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbmlvbi1yb3cgZGl2OmZpcnN0LWNoaWxke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsMjM0LDE4Myk7XG59XG5cblxuI3RhYjQtM3tcbiAgICBtYXJnaW46IDEwJSA1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LDI0NywgMjE4KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gICAgcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwLjNlbTtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    28203: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-header translucent>\n    <ion-toolbar color='primary'>\n      <ion-title>Personal</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-button color=\"light\" routerLink='/test'>\n    <ion-icon slot=\"icon-only\" size=\"small\" name=\"add-outline\" ></ion-icon>\n  </ion-button>\n\n  <div id=\"tab4-1\">\n    <h6>day/month</h6>\n    <!--<h5>Hi username!</h5>-->\n    <p>User email : <strong>{{ userDetail }}</strong></p>\n    \n    <p>Good morning/afternoon!</p>\n  </div>\n\n\n\n  <div>\n    <ion-grid>\n      <ion-row>\n        <div>\n          <ion-col>\n            <p>Suggest Intake</p>\n            <p>xxx</p>\n          </ion-col>\n        </div>\n\n        <div>\n          <ion-col>\n            <ion-icon src=\"assets/icon/strawberry.svg\"></ion-icon>\n          </ion-col>\n        </div>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div id=\"tab4-3\">\n    <ion-grid>\n      <ion-row>\n          <ion-col>\n            <h6>Summary</h6>\n            <p>Consumed   xxxx</p>\n            <p>Left   xxxx</p>\n            <p>Total   xxxx</p>\n          </ion-col>\n          <ion-col></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col><p>Protein</p></ion-col>\n        <ion-col><p>Protein</p></ion-col>\n        <ion-col><p>Protein</p></ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-button type=\"submit\" color=\"danger\" expand=\"block\" (click)=\"signOut()\">Signout</ion-button>\n\n  </div>\n\n\n\n\n  \n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab4_tab4_module_ts-es5.js.map