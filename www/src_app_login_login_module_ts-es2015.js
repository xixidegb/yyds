(self["webpackChunkYYDS"] = self["webpackChunkYYDS"] || []).push([["src_app_login_login_module_ts"],{

/***/ 90795:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 93721);
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tabs/tabs.page */ 43962);





const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    },
    {
        path: 'tabs',
        component: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 77641:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 90795);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 93721);
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tabs/tabs.page */ 43962);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage, _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_2__.TabsPage]
    })
], LoginPageModule);



/***/ }),

/***/ 93721:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 21339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ionic-auth.service */ 43931);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34595);








let LoginPage = class LoginPage {
    constructor(router, ionicAuthService, fb, navCtrl) {
        this.router = router;
        this.ionicAuthService = ionicAuthService;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.successMsg = '';
        this.errorMsg = '';
        this.error_msg = {
            'email': [
                {
                    type: 'required',
                    message: 'Provide email.'
                },
                {
                    type: 'pattern',
                    message: 'Email is not valid.'
                }
            ],
            'password': [
                {
                    type: 'required',
                    message: 'Password is required.'
                },
                {
                    type: 'minlength',
                    message: 'Password length should be 6 characters long.'
                }
            ]
        };
    }
    ngOnInit() {
        this.userForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required
            ])),
        });
    }
    signIn(value) {
        this.ionicAuthService.signinUser(value)
            .then((response) => {
            console.log(response);
            this.errorMsg = "";
            //this.router.navigateByUrl('test');
            //this.router.navigate(['tabs']);
            this.navCtrl.navigateForward(['tabs/tabs/tab1']);
        }, error => {
            this.errorMsg = error.message;
            this.successMsg = "";
        });
    }
    goToSignup() {
        this.router.navigateByUrl('register');
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_auth_service__WEBPACK_IMPORTED_MODULE_2__.IonicAuthService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 21339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>Log in</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <form>\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"text\" required></ion-input>\n      </ion-item>\n  \n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"password\" required></ion-input>\n      </ion-item>\n  \n      <ion-item lines='none'>\n        <a routerLink='/register'>Create Account</a>\n      </ion-item>\n  \n      <ion-row>\n        <ion-col>\n                                  //routerLink just for testing, should be removed! \n          <ion-button type=\"submit\" routerLink='/tab/tabs/tab1' color=\"dark\" expand=\"block\">LOG IN</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-content>\n\n-->\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form class=\"form\" [formGroup]=\"userForm\" (ngSubmit)=\"signIn(userForm.value)\">\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n    </ion-item>\n    \n    <ng-container *ngFor=\"let error of error_msg.email\">\n      <div *ngIf=\"userForm.get('email').hasError(error.type) && (userForm.get('email').dirty || userForm.get('email').touched)\">\n        {{ error.message }}\n      </div>\n    </ng-container>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\" class=\"form-controll\" required></ion-input>\n    </ion-item>\n    \n    <ng-container *ngFor=\"let error of error_msg.password\">\n        <div *ngIf=\"userForm.get('password').hasError(error.type) && (userForm.get('password').dirty || userForm.get('password').touched)\">\n          {{ error.message }}\n        </div>\n    </ng-container>\n\n    <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!userForm.valid\">Signin</ion-button>\n    \n    <label class=\"ion-text-center\" color=\"danger\">{{errorMsg}}</label>\n  </form>\n  <p class=\"ion-text-center\">Not registered yet? <a (click)=\"goToSignup()\">Register</a></p>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts-es2015.js.map