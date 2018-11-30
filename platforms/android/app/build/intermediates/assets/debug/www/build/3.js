webpackJsonp([3],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAcountPageModule", function() { return NewAcountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_acount__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewAcountPageModule = /** @class */ (function () {
    function NewAcountPageModule() {
    }
    NewAcountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_acount__["a" /* NewAcountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_acount__["a" /* NewAcountPage */]),
            ],
        })
    ], NewAcountPageModule);
    return NewAcountPageModule;
}());

//# sourceMappingURL=new-acount.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAcountPage; });
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




/**
 * Generated class for the NewAcountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewAcountPage = /** @class */ (function () {
    function NewAcountPage(navCtrl, navParams, angularFireAuth, formBuilder, toastCtrl) {
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
    NewAcountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewAcountPage');
    };
    NewAcountPage.prototype.register = function (email, password) {
        var _this = this;
        var _a = this.loginForm.controls, emailv = _a.emailv, passwordv = _a.passwordv;
        if (!this.loginForm.valid) {
            if (!emailv.valid) {
                this.errorEmail = true;
                this.messageEmail = "Ops! Email já existe ou é inválido";
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
            this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(function (res) {
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
                    _this.msgErro = "O email informado já está cadastrado";
                }
                _this.exibirToast(_this.msgErro);
            });
        }
    };
    NewAcountPage.prototype.exibirToast = function (erro) {
        var toast = this.toastCtrl.create({ duration: 3000,
            position: 'botton' });
        toast.setMessage(erro);
        toast.present();
        console.log(erro);
    };
    NewAcountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-acount',template:/*ion-inline-start:"C:\Users\A\Documents\faculdade\ionic\src\pages\new-acount\new-acount.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n</ion-header>\n\n<ion-content padding class="bodyApp">\n\n  <img class="logoApp" src="../../assets/imgs/logo.png"/>\n\n\n\n  <ion-list>\n\n    <form [formGroup]="loginForm" (submit)="register(email, password)" novalidate>\n\n      <ion-label text-center><h4>Cadastrar Usuário</h4></ion-label>\n\n      <ion-item class="listItem">\n\n        <ion-label>Email: </ion-label>\n\n        <ion-input [(ngModel)]="email" formControlName="emailv"></ion-input>\n\n      </ion-item>\n\n      <h6 *ngIf="errorEmail" class="error"> {{messageEmail}}</h6>\n\n      <ion-item class="listItem">\n\n        <ion-label>Senha: </ion-label>\n\n        <ion-input round type="password" [(ngModel)]="password" formControlName="passwordv"></ion-input>\n\n      </ion-item>\n\n      <h6 *ngIf="errorPassword" class="error"> {{messagePassword}}</h6>\n\n      <ion-buttons text-center class="btn-config">\n\n        <button ion-button round medium color="secondary">Cadastrar</button>\n\n        <button ion-button round navPush = "LoginPage">Voltar</button>\n\n      </ion-buttons>\n\n    </form>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\A\Documents\faculdade\ionic\src\pages\new-acount\new-acount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], NewAcountPage);
    return NewAcountPage;
}());

//# sourceMappingURL=new-acount.js.map

/***/ })

});
//# sourceMappingURL=3.js.map