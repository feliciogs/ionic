webpackJsonp([2],{

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpwdPageModule", function() { return ResetpwdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetpwd__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResetpwdPageModule = /** @class */ (function () {
    function ResetpwdPageModule() {
    }
    ResetpwdPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__resetpwd__["a" /* ResetpwdPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__resetpwd__["a" /* ResetpwdPage */]),
            ],
        })
    ], ResetpwdPageModule);
    return ResetpwdPageModule;
}());

//# sourceMappingURL=resetpwd.module.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ResetpwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetpwdPage = /** @class */ (function () {
    function ResetpwdPage(navCtrl, navParams, angularFireAuth, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularFireAuth = angularFireAuth;
        this.toastCtrl = toastCtrl;
    }
    ResetpwdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetpwdPage');
    };
    ResetpwdPage.prototype.resetPassword = function (email) {
        var _this = this;
        this.angularFireAuth.auth.sendPasswordResetEmail(email)
            .then(function (user) {
            _this.navCtrl.setRoot('LoginPage');
        })
            .catch(function (erro) {
            if (erro.code === 'auth/weak-password') {
                _this.msgErro = "A senha deve conter no mínimo 6 caracteres";
            }
            else if (erro.code === 'auth/invalid-email') {
                _this.msgErro = "O email informado é invalido";
            }
            else if (erro.code === 'auth/argument-error') {
                _this.msgErro = "Por favor informe um email!";
            }
            else {
                _this.msgErro = "Email não existe ou não está cadastrado";
            }
            _this.exibirToast(_this.msgErro);
        });
    };
    ResetpwdPage.prototype.exibirToast = function (erro) {
        var toast = this.toastCtrl.create({ duration: 3000, position: 'botton' });
        toast.setMessage(erro);
        toast.present();
        console.log(erro);
    };
    ResetpwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resetpwd',template:/*ion-inline-start:"C:\Users\Felicio Gabriel\suaFrase\ionic\src\pages\resetpwd\resetpwd.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  </ion-header>\n\n  <ion-content padding class="bodyApp" [attr.noScroll]="shouldScroll">\n\n    <img class="logoApp" src="../../assets/imgs/logo.png" />\n\n  \n\n    <ion-list >\n\n        <form>\n\n          <ion-label text-center><h4>Resetar Senha</h4></ion-label>\n\n          <ion-item  class="listItem">\n\n            <ion-label>Email: </ion-label>\n\n            <ion-input type="email" [(ngModel)]="email" [ngModelOptions]="{standalone:true}"></ion-input>\n\n          </ion-item>\n\n          <ion-buttons text-center>\n\n            <button ion-button round color="secondary" (click)="resetPassword(email)">Resetar</button>\n\n            <button ion-button round navPush = "LoginPage">Voltar</button>\n\n          </ion-buttons>\n\n        </form>\n\n  </ion-list>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Felicio Gabriel\suaFrase\ionic\src\pages\resetpwd\resetpwd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ResetpwdPage);
    return ResetpwdPage;
}());

//# sourceMappingURL=resetpwd.js.map

/***/ })

});
//# sourceMappingURL=2.js.map