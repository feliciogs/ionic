webpackJsonp([4],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, angularFireAuth, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularFireAuth = angularFireAuth;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.messageEmail = "";
        this.messagePassword = "";
        this.errorEmail = false;
        this.errorPassword = false;
        this.loginForm = formBuilder.group({
            emailv: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            passwordv: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function (email, password) {
        var _this = this;
        var _a = this.loginForm.controls, emailv = _a.emailv, passwordv = _a.passwordv;
        if (!this.loginForm.valid) {
            if (!emailv.valid) {
                this.errorEmail = true;
                this.messageEmail = "Ops! Informe seu email corretamente por favor.";
            }
            else {
                this.messageEmail = "";
            }
            if (!passwordv.valid) {
                this.errorPassword = true;
                this.messagePassword = "A senha precisa ter de 6 a 20 caracteres";
            }
            else {
                this.messagePassword = "";
            }
        }
        else {
            this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (user) {
                _this.navCtrl.setRoot('HomePage', { email: email });
            })
                .catch(function (erro) {
                if (erro.code === 'auth/weak-password') {
                    _this.msgErro = "A senha deve conter no mínimo 6 caracteres";
                }
                else if (erro.code === 'auth/invalid-email') {
                    _this.msgErro = "O email informado é invalido";
                }
                else {
                    _this.msgErro = "A senha informada está incorreta!";
                }
                _this.exibirToast(_this.msgErro);
            });
        }
    };
    LoginPage.prototype.exibirToast = function (erro) {
        var toast = this.toastCtrl.create({ duration: 3000, position: 'botton' });
        toast.setMessage(erro);
        toast.present();
        console.log(erro);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\A\Documents\faculdade\ionic\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n</ion-header>\n\n\n\n<ion-content padding class="bodyApp" [attr.noScroll]="shouldScroll">\n\n  <img class="logoApp" src="../../assets/imgs/logo.png" />\n\n\n\n  <ion-list >\n\n      <form [formGroup]="loginForm" (submit)="login(email, password)" novalidate>\n\n        <ion-label text-center><h4>Login</h4></ion-label>\n\n        <ion-item  class="listItem">\n\n          <ion-label>Email: </ion-label>\n\n          <ion-input type="email" [(ngModel)]="email" formControlName="emailv"></ion-input>\n\n        </ion-item>\n\n        <h6 *ngIf="errorEmail" class="error"> {{messageEmail}}</h6>\n\n        <ion-item class="listItem">\n\n          <ion-label>Senha: </ion-label>\n\n          <ion-input type="password" [(ngModel)]="password" formControlName="passwordv"></ion-input>\n\n        </ion-item>\n\n        <h6 *ngIf="errorPassword" class="error"> {{messagePassword}}</h6>\n\n        <div text-center class="btn-config">\n\n          <button ion-button round full large>Login</button>\n\n        </div>\n\n      </form>\n\n      <div text-center>\n\n          <button ion-button color="danger" clear navPush = "NewAcountPage">Não tem conta?Clique e se cadastre.</button>\n\n          <button ion-button color="danger" clear navPush = "ResetpwdPage">Esqueceu sua Senha?</button>\n\n      </div>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\A\Documents\faculdade\ionic\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=4.js.map