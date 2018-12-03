webpackJsonp([1],{

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSongPageModule", function() { return ViewSongPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_song__ = __webpack_require__(368);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewSongPageModule = /** @class */ (function () {
    function ViewSongPageModule() {
    }
    ViewSongPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_song__["a" /* ViewSongPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_song__["a" /* ViewSongPage */]),
            ],
        })
    ], ViewSongPageModule);
    return ViewSongPageModule;
}());

//# sourceMappingURL=view-song.module.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSongPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(227);
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
 * Generated class for the ViewSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewSongPage = /** @class */ (function () {
    function ViewSongPage(navCtrl, navParams, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.message = null;
        this.file = null;
        this.link = null;
        this.subject = null;
    }
    ViewSongPage.prototype.ionViewWillLoad = function () {
        this.song = this.navParams.get('song');
    };
    ViewSongPage.prototype.share = function () {
        this.message = this.song.chords;
        this.socialSharing.share(this.message, this.subject, this.file, this.link)
            .then(function () {
        }).catch(function () {
        });
    };
    ViewSongPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-song',template:/*ion-inline-start:"C:\Users\A\Documents\faculdade\backup\ionic\src\pages\view-song\view-song.html"*/'<!--\n\n  Generated template for the ViewSongPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Autor da frase: {{song?.band}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-label>Título da Frase: </ion-label>\n\n    <ion-item class="lyrics">\n\n        <ion-input text-center readonly [(ngModel)]="song.title"></ion-input>\n\n    </ion-item>\n\n    <ion-label>Frase: </ion-label>\n\n    <ion-item class="chords">\n\n      <ion-textarea rows="7" readonly [(ngModel)]="song.chords"></ion-textarea>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-buttons>\n\n      <button ion-button full color="secondary" detail-push navPush="EditSongPage" [navParams]="{song: song}">\n\n        <ion-icon ios="ios-create" md="md-create">  Editar Frase</ion-icon>\n\n      </button>\n\n      <button ion-button full (click)="share()" ><ion-icon ios="ios-share" md="md-share">   Compartilhar</ion-icon></button>\n\n    </ion-buttons>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\A\Documents\faculdade\backup\ionic\src\pages\view-song\view-song.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], ViewSongPage);
    return ViewSongPage;
}());

//# sourceMappingURL=view-song.js.map

/***/ })

});
//# sourceMappingURL=1.js.map