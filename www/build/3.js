webpackJsonp([3],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitePageModule", function() { return InvitePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invite__ = __webpack_require__(349);
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

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_umd_util_util__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_umd_util_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_umd_util_util__);
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
 * Generated class for the InvitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvitePage = /** @class */ (function () {
    function InvitePage(navCtrl, navParams, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
    }
    InvitePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvitePage');
    };
    InvitePage.prototype.sendEmail = function () {
        var email = {
            to: '',
            cc: '',
            attachments: [],
            subject: 'Curta essa frase',
            body: 'Verifique esse aplicativo na APPSTORE e GOOGLEPLAY',
            isHtml: __WEBPACK_IMPORTED_MODULE_3_ionic_angular_umd_util_util__["isTrueProperty"]
        };
        this.emailComposer.open(email);
    };
    InvitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invite',template:/*ion-inline-start:"/home/gabriel/ionic/src/pages/invite/invite.html"*/'<!--\n  Generated template for the InvitePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>InvitePage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/gabriel/ionic/src/pages/invite/invite.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */]) === "function" && _c || Object])
    ], InvitePage);
    return InvitePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=invite.js.map

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @hidden
     * Given a min and max, restrict the given number
     * to the range.
     * @param min the minimum
     * @param n the value
     * @param max the maximum
     */
    function clamp(min, n, max) {
        return Math.max(min, Math.min(n, max));
    }
    exports.clamp = clamp;
    /** @hidden */
    function deepCopy(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    exports.deepCopy = deepCopy;
    /** @hidden */
    function deepEqual(a, b) {
        if (a === b) {
            return true;
        }
        return JSON.stringify(a) === JSON.stringify(b);
    }
    exports.deepEqual = deepEqual;
    /** @hidden */
    function debounce(fn, wait, immediate) {
        if (immediate === void 0) { immediate = false; }
        var timeout, args, context, timestamp, result;
        return function () {
            context = this;
            args = arguments;
            timestamp = Date.now();
            var later = function () {
                var last = Date.now() - timestamp;
                if (last < wait) {
                    timeout = setTimeout(later, wait - last);
                }
                else {
                    timeout = null;
                    if (!immediate)
                        result = fn.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            if (callNow)
                result = fn.apply(context, args);
            return result;
        };
    }
    exports.debounce = debounce;
    /**
     * @hidden
     * Rewrites an absolute URL so it works across file and http based engines
     */
    function normalizeURL(url) {
        var ionic = window['Ionic'];
        if (ionic && ionic.normalizeURL) {
            return ionic.normalizeURL(url);
        }
        return url;
    }
    exports.normalizeURL = normalizeURL;
    /**
     * @hidden
     * Apply default arguments if they don't exist in
     * the first object.
     * @param {any} dest the destination to apply defaults to.
     */
    function defaults(dest) {
        var _args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _args[_i - 1] = arguments[_i];
        }
        for (var i = arguments.length - 1; i >= 1; i--) {
            var source = arguments[i];
            if (source) {
                for (var key in source) {
                    if (source.hasOwnProperty(key) && !dest.hasOwnProperty(key)) {
                        dest[key] = source[key];
                    }
                }
            }
        }
        return dest;
    }
    exports.defaults = defaults;
    /** @hidden */
    function isBoolean(val) { return typeof val === 'boolean'; }
    exports.isBoolean = isBoolean;
    /** @hidden */
    function isString(val) { return typeof val === 'string'; }
    exports.isString = isString;
    /** @hidden */
    function isNumber(val) { return typeof val === 'number'; }
    exports.isNumber = isNumber;
    /** @hidden */
    function isFunction(val) { return typeof val === 'function'; }
    exports.isFunction = isFunction;
    /** @hidden */
    function isDefined(val) { return typeof val !== 'undefined'; }
    exports.isDefined = isDefined;
    /** @hidden */
    function isUndefined(val) { return typeof val === 'undefined'; }
    exports.isUndefined = isUndefined;
    /** @hidden */
    function isPresent(val) { return val !== undefined && val !== null; }
    exports.isPresent = isPresent;
    /** @hidden */
    function isBlank(val) { return val === undefined || val === null; }
    exports.isBlank = isBlank;
    /** @hidden */
    function isObject(val) { return typeof val === 'object'; }
    exports.isObject = isObject;
    /** @hidden */
    function isArray(val) { return Array.isArray(val); }
    exports.isArray = isArray;
    /** @hidden */
    function isPrimitive(val) {
        return isString(val) || isBoolean(val) || (isNumber(val) && !isNaN(val));
    }
    exports.isPrimitive = isPrimitive;
    /** @hidden */
    function isTrueProperty(val) {
        if (typeof val === 'string') {
            val = val.toLowerCase().trim();
            return (val === 'true' || val === 'on' || val === '');
        }
        return !!val;
    }
    exports.isTrueProperty = isTrueProperty;
    /** @hidden */
    function isCheckedProperty(a, b) {
        if (a === undefined || a === null || a === '') {
            return (b === undefined || b === null || b === '');
        }
        else if (a === true || a === 'true') {
            return (b === true || b === 'true');
        }
        else if (a === false || a === 'false') {
            return (b === false || b === 'false');
        }
        else if (a === 0 || a === '0') {
            return (b === 0 || b === '0');
        }
        // not using strict comparison on purpose
        return (a == b); // tslint:disable-line
    }
    exports.isCheckedProperty = isCheckedProperty;
    /**
     * @hidden
     * Given a side, return if it should be on the right
     * based on the value of dir
     * @param side the side
     * @param isRTL whether the application dir is rtl
     * @param defaultRight whether the default side is right
     */
    function isRightSide(side, isRTL, defaultRight) {
        if (defaultRight === void 0) { defaultRight = false; }
        switch (side) {
            case 'right': return true;
            case 'left': return false;
            case 'end': return !isRTL;
            case 'start': return isRTL;
            default: return defaultRight ? !isRTL : isRTL;
        }
    }
    exports.isRightSide = isRightSide;
    /** @hidden */
    function reorderArray(array, indexes) {
        var element = array[indexes.from];
        array.splice(indexes.from, 1);
        array.splice(indexes.to, 0, element);
        return array;
    }
    exports.reorderArray = reorderArray;
    /** @hidden */
    function removeArrayItem(array, item) {
        var index = array.indexOf(item);
        return !!~index && !!array.splice(index, 1);
    }
    exports.removeArrayItem = removeArrayItem;
    /** @hidden */
    function swipeShouldReset(isResetDirection, isMovingFast, isOnResetZone) {
        // The logic required to know when the sliding item should close (openAmount=0)
        // depends on three booleans (isCloseDirection, isMovingFast, isOnCloseZone)
        // and it ended up being too complicated to be written manually without errors
        // so the truth table is attached below: (0=false, 1=true)
        // isCloseDirection | isMovingFast | isOnCloseZone || shouldClose
        //         0        |       0      |       0       ||    0
        //         0        |       0      |       1       ||    1
        //         0        |       1      |       0       ||    0
        //         0        |       1      |       1       ||    0
        //         1        |       0      |       0       ||    0
        //         1        |       0      |       1       ||    1
        //         1        |       1      |       0       ||    1
        //         1        |       1      |       1       ||    1
        // The resulting expression was generated by resolving the K-map (Karnaugh map):
        var shouldClose = (!isMovingFast && isOnResetZone) || (isResetDirection && isMovingFast);
        return shouldClose;
    }
    exports.swipeShouldReset = swipeShouldReset;
    /** @hidden */
    var ASSERT_ENABLED = true;
    /** @hidden */
    function _runInDev(fn) {
        if (ASSERT_ENABLED === true) {
            return fn();
        }
    }
    exports.runInDev = _runInDev;
    /** @hidden */
    function _assert(actual, reason) {
        if (!actual && ASSERT_ENABLED === true) {
            var message = 'IONIC ASSERT: ' + reason;
            console.error(message);
            debugger; // tslint:disable-line
            throw new Error(message);
        }
    }
    exports.assert = _assert;
    /** @hidden */
    function requestIonicCallback(functionToLazy) {
        if ('requestIdleCallback' in window) {
            return window.requestIdleCallback(functionToLazy);
        }
        else {
            return setTimeout(functionToLazy, 500);
        }
    }
    exports.requestIonicCallback = requestIonicCallback;
});
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 354;

/***/ })

});
//# sourceMappingURL=3.js.map