webpackJsonp([5],{

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitePageModule", function() { return InvitePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invite__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InvitePageModule = /** @class */ (function () {
    function InvitePageModule() {
    }
    InvitePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__invite__["a" /* InvitePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invite__["a" /* InvitePage */]),
            ],
        })
    ], InvitePageModule);
    return InvitePageModule;
}());

//# sourceMappingURL=invite.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvitePage = /** @class */ (function () {
    function InvitePage(navCtrl, navParams, emailComposer, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.socialSharing = socialSharing;
        this.message = null;
        this.file = null;
        this.link = null;
        this.subject = null;
    }
    InvitePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvitePage');
    };
    InvitePage.prototype.share = function () {
        this.socialSharing.share(this.message, this.subject, this.file, this.link)
            .then(function () {
        }).catch(function () {
        });
    };
    InvitePage.prototype.sendEmail = function () {
        var email = {
            to: '',
            cc: '',
            attachments: [],
            subject: 'Curta essa frase',
            body: 'Verifique esse aplicativo na APPSTORE e GOOGLEPLAY',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    InvitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invite',template:/*ion-inline-start:"C:\Users\A\Documents\faculdade\ionic\src\pages\invite\invite.html"*/'<!--\n\n  Generated template for the InvitePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Convidar Pessoas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n  <button ion-button full (click)="sendEmail()">Convidar amigos via Email!</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\A\Documents\faculdade\ionic\src\pages\invite\invite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], InvitePage);
    return InvitePage;
}());

//# sourceMappingURL=invite.js.map

/***/ })

});
//# sourceMappingURL=5.js.map