(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkYYDS"] = self["webpackChunkYYDS"] || []).push([["src_app_tab1_tab1_module_ts"], {
    /***/
    24588: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1PageRoutingModule": function Tab1PageRoutingModule() {
          return (
            /* binding */
            _Tab1PageRoutingModule
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab1.page */
      41028);

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page
      }];

      var _Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      _Tab1PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Tab1PageRoutingModule);
      /***/
    },

    /***/
    39634: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1PageModule": function Tab1PageModule() {
          return (
            /* binding */
            _Tab1PageModule
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab1.page */
      41028);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      74081);
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab1-routing.module */
      24588);

      var _Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      _Tab1PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
      })], _Tab1PageModule);
      /***/
    },

    /***/
    41028: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1Page": function Tab1Page() {
          return (
            /* binding */
            _Tab1Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tab1.page.html */
      5683);
      /* harmony import */


      var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tab1.page.scss */
      99474);
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

      var _Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(router, ionicAuthService) {
          _classCallCheck(this, Tab1Page);

          this.router = router;
          this.ionicAuthService = ionicAuthService;
        }

        _createClass(Tab1Page, [{
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

        return Tab1Page;
      }();

      _Tab1Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _ionic_auth_service__WEBPACK_IMPORTED_MODULE_2__.IonicAuthService
        }];
      };

      _Tab1Page = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Tab1Page);
      /***/
    },

    /***/
    99474: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#home-header {\n  background-color: #fbeab7;\n  margin: 0;\n}\n#home-header ion-searchbar {\n  --placeholder-font-weight: 2;\n  --border-radius:20px;\n}\n#home-header ion-icon {\n  margin: 0 3px 0 0;\n  zoom: 1.3;\n}\nh1 {\n  text-align: center;\n  font-size: 1em;\n  padding-top: 30px;\n  margin: 0 0 15px 0;\n}\nion-searchbar {\n  padding-top: 0;\n  border-radius: 20%;\n  transform: scaleY(0.7);\n  transform: scaleX(0.9);\n}\nion-buttons {\n  margin: auto;\n  padding-bottom: 8px;\n}\nion-buttons button {\n  margin: auto;\n  background-color: rgba(251, 234, 183, 0);\n}\n#home-2 {\n  background-color: #fef7da;\n  margin: 2% 4%;\n  border-radius: 15px;\n}\n#home-2 p {\n  margin: auto;\n  text-align: center;\n}\n#classification-header {\n  font-family: \"Arial Narrow\", Arial, sans-serif;\n  font-size: 1.3em;\n  margin: auto;\n}\n#home-3 {\n  background-color: #dae8c9;\n  border-radius: 15px;\n  margin: 2% 4%;\n}\n#home-3 ion-label {\n  font-size: 0.7em;\n}\n#home-3 ion-icon {\n  margin-left: 0;\n  margin-right: 0;\n  padding: 0;\n}\n#home-3 ion-segment-button {\n  padding: 0 0 0 0;\n  height: 70px;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJBQUE7RUFDQSxTQUFBO0FBQUo7QUFDSTtFQUNJLDRCQUFBO0VBQ0Esb0JBQUE7QUFDUjtBQUNJO0VBQ0ksaUJBQUE7RUFDQSxTQUFBO0FBQ1I7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQUFKO0FBR0E7RUFDSSxZQUFBO0VBS0EsbUJBQUE7QUFKSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLHdDQUFBO0FBRVI7QUFJQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBREo7QUFFSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUFSO0FBSUE7RUFDSSw4Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQURKO0FBS0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUZKO0FBR0k7RUFDSSxnQkFBQTtBQURSO0FBR0c7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFEUDtBQUlHO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0FBRlAiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL3BhcnQgMVxuI2hvbWUtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyMzQsIDE4Myk7XG4gICAgbWFyZ2luOjA7XG4gICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDI7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czoyMHB4O1xuICAgIH1cbiAgICBpb24taWNvbiB7XG4gICAgICAgIG1hcmdpbjowIDNweCAwIDA7XG4gICAgICAgIHpvb206MS4zO1xuICAgIH1cbn1cblxuaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBtYXJnaW46IDAgMCAxNXB4IDA7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuOSk7XG59XG5cbmlvbi1idXR0b25zIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOmF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1MSwgMjM0LCAxODMsMCk7XG4gICAgfVxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi8vcGFydCAyXG4jaG9tZS0yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LCAyNDcsIDIxOCk7XG4gICAgbWFyZ2luOiAyJSA0JTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHAge1xuICAgICAgICBtYXJnaW46YXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuI2NsYXNzaWZpY2F0aW9uLWhlYWRlciB7XG4gICAgZm9udC1mYW1pbHk6J0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4vL3BhcnQgM1xuI2hvbWUtMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjMyLCAyMDEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbWFyZ2luOiAyJSA0JTtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICB9XG4gICBpb24taWNvbiB7XG4gICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgIHBhZGRpbmc6IDA7XG4gICB9XG5cbiAgIGlvbi1zZWdtZW50LWJ1dHRvbntcbiAgICAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgICAgIGhlaWdodDo3MHB4O1xuICAgICAgIG1pbi13aWR0aDpmaXQtY29udGVudDtcbiAgIH1cblxufVxuXG4iXX0= */";
      /***/
    },

    /***/
    5683: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Categories\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n-->\n\n<ion-content>\n  <ion-header translucent>\n    <ion-toolbar color='primary'>\n      <ion-title>Protecter</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <!-- Part1 -->\n  <div id=\"home-header\">\n    <h1>YYDS FOOD PROTECTER</h1>\n    <ion-searchbar placeholder=\"Please enter food name\"></ion-searchbar>\n\n    <ion-buttons>\n      <button >\n        <ion-icon name=\"book-outline\"></ion-icon>\n        <ion-label style=\"zoom:1.1;\">Comparison</ion-label>\n      </button>\n      \n      <button ion-button>\n        <ion-icon name=\"bar-chart-outline\"></ion-icon>\n        <ion-label>Ranking</ion-label>\n      </button>\n     \n      <button ion-button>\n        <ion-icon name=\"bar-chart-outline\"></ion-icon>\n        <ion-label>Burden Sheet</ion-label>\n      </button>\n    </ion-buttons>\n\n  </div>\n\n\n\n\n  <!-- Part2 -->\n  <div id=\"home-2\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <p>Suggest Intake</p>\n          <p>xxx</p>\n        </ion-col>\n        <ion-col>\n          <ion-icon src=\"assets/icon/strawberry.svg\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <p>Intake</p>\n          <p>xxx</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <p>Protein</p>\n          <p>xxxxxx</p>\n        </ion-col>\n        <ion-col>\n          <p>Fats</p>\n          <p>xxxxxx</p>\n        </ion-col>\n        <ion-col>\n          <p>Carbs</p>\n          <p>xxxxx</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n\n\n  <!-- Part3 -->\n  <div id=\"home-3\">\n    <ion-list-header>\n      <div id=\"classification-header\">  \n        <b>Classification of Food</b> \n      </div>\n    </ion-list-header>\n\n    <!-- First row -->\n    <ion-segment color=\"tertiary\" value=\"favorite\">\n      <ion-segment-button value=\"pizza\">\n        <ion-label>Staple</ion-label>\n        <ion-icon src=\"assets/icon/Staple.svg\" style=\"zoom:1.8;\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"fish\">\n        <ion-label>Meats</ion-label>\n        <ion-icon src=\"assets/icon/WechatIMG163.svg\" style=\"zoom:1.8;\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"chicken\">\n        <ion-label>Beans</ion-label>\n        <ion-icon name=\"pin\"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n    \n    <!-- 2nd row -->\n    <ion-segment color=\"tertiary\" value=\"favorite\">\n      <ion-segment-button value=\"nuts\">\n        <ion-label>Vegetables</ion-label>\n        <ion-icon name=\"square\"></ion-icon>\n      </ion-segment-button>\n  <!--<ion-segment-button value=\"vegetable\">\n        <ion-label>Vegetable</ion-label>\n        <ion-icon name=\"leaf\"></ion-icon>\n      </ion-segment-button>     -->\n      <ion-segment-button value=\"fruits\">\n        <ion-label>Fruits</ion-label>\n        <ion-icon name=\"nutrition-outline\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"test\">\n        <ion-label>Dairy</ion-label>\n        <ion-icon src=\"assets/icon/strawberry.svg\"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab1_tab1_module_ts-es5.js.map