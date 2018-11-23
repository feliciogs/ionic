webpackJsonp([5],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSongPageModule", function() { return EditSongPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_song__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditSongPageModule = /** @class */ (function () {
    function EditSongPageModule() {
    }
    EditSongPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_song__["a" /* EditSongPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_song__["a" /* EditSongPage */]),
            ],
        })
    ], EditSongPageModule);
    return EditSongPageModule;
}());

//# sourceMappingURL=edit-song.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSongPage; });
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
 * Generated class for the EditSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditSongPage = /** @class */ (function () {
    function EditSongPage(navCtrl, navParams, songs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.songs = songs;
    }
    EditSongPage.prototype.ionViewWillLoad = function () {
        this.song = this.navParams.get('song');
    };
    EditSongPage.prototype.saveSong = function (song) {
        var _this = this;
        this.songs.editSong(song).then(function () {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    EditSongPage.prototype.deleteSong = function (song) {
        var _this = this;
        this.songs.removeSong(song).then(function () {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    EditSongPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-song',template:/*ion-inline-start:"/home/gabriel/ionic/src/pages/edit-song/edit-song.html"*/'<!--\n  Generated template for the EditSongPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editando: {{song?.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button block clear (click)="saveSong(song)">Salvar</button>\n  <button ion-button block clear (click)="deleteSong(song)">Apagar Frase</button>\n\n  <ion-item>\n    <ion-label>Autor:</ion-label>\n    <ion-input [(ngModel)]="song.band"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Titulo:</ion-label>\n    <ion-input [(ngModel)]="song.title"></ion-input>\n  </ion-item>\n\n  <ion-item class="chords">\n      <ion-label>Frase:</ion-label>\n      <ion-textarea [(ngModel)]="song.chords"></ion-textarea>\n  </ion-item>\n    \n  <ion-item>\n    <ion-label>Palavra Chave:</ion-label>\n    <ion-input [(ngModel)]="song.lyrics"></ion-input>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/home/gabriel/ionic/src/pages/edit-song/edit-song.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_song_service__["a" /* SongService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_song_service__["a" /* SongService */]) === "function" && _c || Object])
    ], EditSongPage);
    return EditSongPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=edit-song.js.map

/***/ })

});
//# sourceMappingURL=5.js.map