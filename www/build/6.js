webpackJsonp([6],{

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_song_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(58);
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





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, songsService, loadingCtrl, firebaseauth, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.songsService = songsService;
        this.loadingCtrl = loadingCtrl;
        this.firebaseauth = firebaseauth;
        this.toastCtrl = toastCtrl;
        this.band = {
            name: ''
        };
        this.songsList$ = this.songsService.getSongsList().snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.user = firebaseauth.auth.currentUser;
    }
    HomePage.prototype.loadingEffect = function () {
        var loader = this.loadingCtrl.create({
            content: "Carregando aguarde...",
            duration: 900
        });
        loader.present();
    };
    HomePage.prototype.ionViewWillLoad = function () {
        this.loadingEffect();
        if (this.user != null) {
            this.identifacao = this.user.displayName;
            this.fotoPerfil = this.user.photoURL;
            console.log(this.fotoPerfil);
        }
        this.bandsList$ = this.songsService.getBandList().snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    HomePage.prototype.onContextChange = function (ctxt) {
        this.loadingEffect();
        this.songsList$ = this.songsService.assembleBandFilteredList(ctxt).snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    HomePage.prototype.showAllSongs = function () {
        this.loadingEffect();
        this.songsList$ = this.songsService.getSongsList().snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    HomePage.prototype.sair = function () {
        var _this = this;
        this.loadingEffect();
        this.firebaseauth.auth.signOut()
            .then(function () {
            _this.navCtrl.setRoot('LoginPage');
        })
            .catch(function (erro) {
            _this.exibirToast(erro);
        });
    };
    HomePage.prototype.exibirToast = function (mensagem) {
        var toast = this.toastCtrl.create({ duration: 3000, position: 'botton' });
        toast.setMessage(mensagem);
        toast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\A\Documents\faculdade\backup\ionic\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-menu [content]="content">\n\n  <ion-content padding  class="menuApp">\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-thumbnail item-start>\n\n              <img src="`{{fotoPerfil}}">\n\n            </ion-thumbnail>\n\n            <h3>{{identifacao}}</h3>\n\n        </ion-item>\n\n        <ion-buttons >\n\n          <button class="menuApp" ion-item navPush = "AddSongPage"><ion-icon name="ios-add-circle-outline"></ion-icon>  Adicionar Frase</button>\n\n          <button class="menuApp" ion-item navPush = "RegisterPage"><ion-icon name="md-add-circle"></ion-icon>  Adicionar Autor</button>\n\n          <button class="menuApp" ion-item navPush="InvitePage"><ion-icon name="md-share"></ion-icon>  Convidar</button>\n\n          <button class="menuApp" ion-item (click)="sair()"><ion-icon name="md-exit"></ion-icon>   Sair</button>\n\n      </ion-buttons>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n\n<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-buttons start>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Meu Caderno de Frases</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>Frases do Autor:</ion-label>\n\n      <ion-select (ionChange)="onContextChange($event)" [(ngModel)]="bands" multiple="false" okText="Mostrar frases" cancelText="Cancelar" >\n\n        <ion-option selected="true">Todos</ion-option>\n\n        <ion-option *ngFor="let band of bandsList$ | async" detail-push>{{band.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-label>Frases:</ion-label>\n\n      <ion-item *ngFor="let song of songsList$ | async" detail-push navPush="ViewSongPage" [navParams]="{song:song}">\n\n      <h2>{{song.chords}}</h2>\n\n      <p>{{song.band}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <button ion-button full selected="true"(click)="showAllSongs()">Mostrar Todas as Frases</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\A\Documents\faculdade\backup\ionic\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_song_service__["a" /* SongService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=6.js.map