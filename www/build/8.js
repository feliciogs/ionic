webpackJsonp([8],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSongPageModule", function() { return AddSongPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_song__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddSongPageModule = /** @class */ (function () {
    function AddSongPageModule() {
    }
    AddSongPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_song__["a" /* AddSongPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_song__["a" /* AddSongPage */]),
            ],
        })
    ], AddSongPageModule);
    return AddSongPageModule;
}());

//# sourceMappingURL=add-song.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSongPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_song_service__ = __webpack_require__(225);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the AddSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddSongPage = /** @class */ (function () {
    function AddSongPage(navCtrl, navParams, songs, regBand, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.songs = songs;
        this.regBand = regBand;
        this.loadingCtrl = loadingCtrl;
        this.song = {
            title: '',
            chords: '',
            band: ''
        };
        this.band = {
            name: ''
        };
    }
    AddSongPage.prototype.ionViewWillLoad = function () {
        var loader = this.loadingCtrl.create({
            content: "Carregando aguarde...",
            duration: 1500
        });
        this.bandsList$ = this.songs.getBandList().snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        loader.present();
    };
    AddSongPage.prototype.addSong = function (song) {
        var _this = this;
        /*this.band.name = this.song.band;
        this.regBand.addBand(this.band).then(ref=>{});*/
        this.songs.addSong(song).then(function (ref) {
            _this.navCtrl.setRoot('HomePage', { key: ref.key });
        });
    };
    AddSongPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-song',template:/*ion-inline-start:"C:\Users\Felicio Gabriel\suaFrase\ionic\src\pages\add-song\add-song.html"*/'<!--\n\n  Generated template for the AddSongPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Adicionar Nova Frase</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>\n\n      <b>Nome do Autor</b>\n\n    </ion-label>\n\n    <ion-input [(ngModel)]="song.band" placeholder="..."></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n      <ion-label>\n\n        <b>Titulo da Frase</b>\n\n      </ion-label>\n\n      <ion-input [(ngModel)]="song.title" placeholder="..."></ion-input>\n\n    </ion-item>\n\n  <ion-item >\n\n      <ion-label>\n\n         <b>Frase</b>\n\n      </ion-label>\n\n      <ion-textarea rows="4" class="frase" [(ngModel)]="song.chords" placeholder="..."></ion-textarea>\n\n  </ion-item>\n\n  <button ion-button block color="secundary" (click)="addSong(song)"><ion-icon ios="ios-add" md="md-add">   Adicionar</ion-icon></button>\n\n  <ion-label color="danger"><h6>Obs: Verifique antes de adicionar a frase <br/> se o autor já está cadastrado</h6></ion-label>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Felicio Gabriel\suaFrase\ionic\src\pages\add-song\add-song.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_song_service__["a" /* SongService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_song_service__["a" /* SongService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_song_service__["a" /* SongService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_song_service__["a" /* SongService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object])
    ], AddSongPage);
    return AddSongPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=add-song.js.map

/***/ })

});
//# sourceMappingURL=8.js.map