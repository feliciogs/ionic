webpackJsonp([6],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSongPageModule", function() { return AddSongPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_song__ = __webpack_require__(346);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_song__["a" /* AddSongPage */]),
            ],
        })
    ], AddSongPageModule);
    return AddSongPageModule;
}());

//# sourceMappingURL=add-song.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSongPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_song_service__ = __webpack_require__(225);
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
    function AddSongPage(navCtrl, navParams, songs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.songs = songs;
        this.song = {
            title: '',
            chords: '',
            lyrics: '',
            band: ''
        };
    }
    AddSongPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddSongPage');
    };
    AddSongPage.prototype.addSong = function (song) {
        var _this = this;
        this.songs.addSong(song).then(function (ref) {
            _this.navCtrl.setRoot('HomePage', { key: ref.key });
        });
    };
    AddSongPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-song',template:/*ion-inline-start:"C:\Users\Felicio Gabriel\suaFrase\ionic\src\pages\add-song\add-song.html"*/'<!--\n\n  Generated template for the AddSongPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>AddSongPage</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <button ion-button block clear (click)="addSong(song)">Adicionar</button>\n\n  <ion-item>\n\n    <ion-label>\n\n      Nome do Autor\n\n    </ion-label>\n\n    <ion-input [(ngModel)]="song.band" placeholder="Nome do autor..."></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n      <ion-label>\n\n        Titulo da Frase\n\n      </ion-label>\n\n      <ion-input [(ngModel)]="song.title" placeholder="Tema da frase..."></ion-input>\n\n    </ion-item>\n\n  <ion-item>\n\n      <ion-label>\n\n         Frase\n\n      </ion-label>\n\n      <ion-input [(ngModel)]="song.chords" placeholder="Frase..."></ion-input>\n\n    </ion-item>\n\n  <ion-item>\n\n      <ion-label>\n\n        Palavra chave\n\n      </ion-label>\n\n      <ion-input [(ngModel)]="song.lyrics" placeholder="Palavra Chave..."></ion-input>\n\n  </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Felicio Gabriel\suaFrase\ionic\src\pages\add-song\add-song.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_song_service__["a" /* SongService */]])
    ], AddSongPage);
    return AddSongPage;
}());

//# sourceMappingURL=add-song.js.map

/***/ })

});
//# sourceMappingURL=6.js.map