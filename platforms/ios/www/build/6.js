webpackJsonp([6],{

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]
            ]
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());

//# sourceMappingURL=tutorial.module.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TutorialPage = /** @class */ (function () {
    function TutorialPage(navCtrl, menu, translate, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.platform = platform;
        this.showSkip = true;
        this.dir = 'ltr';
        this.dir = platform.dir();
        translate.get(["TUTORIAL_SLIDE1_TITLE",
            "TUTORIAL_SLIDE1_DESCRIPTION",
            "TUTORIAL_SLIDE2_TITLE",
            "TUTORIAL_SLIDE2_DESCRIPTION",
            "TUTORIAL_SLIDE3_TITLE",
            "TUTORIAL_SLIDE3_DESCRIPTION",
        ]).subscribe(function (values) {
            console.log('Loaded values', values);
            _this.slides = [
                {
                    title: 'Welcome To Qaprofil',
                    description: '',
                    image: 'assets/img/1.jpg',
                },
                {
                    title: 'Slittng Line',
                    description: '',
                    image: 'assets/img/2.jpg',
                },
                {
                    title: 'Gypsum Ceilings & Partions Systems',
                    description: '',
                    image: 'assets/img/3.jpg',
                },
                {
                    title: 'Indoor Aluminum False Ceilings',
                    description: '',
                    image: 'assets/img/4.jpg',
                },
                {
                    title: 'Light Gauge Steel Building',
                    description: '',
                    image: 'assets/img/5.jpg',
                }
            ];
        });
    }
    TutorialPage.prototype.startApp = function () {
        this.navCtrl.setRoot('WelcomePage', {}, {
            animate: true,
            direction: 'forward'
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/tutorial/tutorial.html"*/'\n   <style type="text/css">\n    .myButton {\n	 \n	border-radius:10px;\n	 \n	color:#6E0B14;\n	font-family:Georgia;\n	font-size:20px;\n	font-weight:bold;\n	font-style:italic;\n	padding:12px 37px;\n	text-decoration:none;\n	text-shadow:0px 1px 0px #283966;\n}\n         \n.masters {\n \n   background: url(\'assets/img/steel.jpg\') repeat ;\n}\n \n       .img {\n  width: 90%;\n  height: 90%;\n}\n \n</style>\n\n\n<ion-header no-shadow>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n        <font face="Times New Roman" color="black" size="3"> <b> <button  class="myButton" ion-button (click)="startApp()" color="danger">{{ \'TUTORIAL_SKIP_BUTTON\' | translate}}</button></b></font>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce class="masters">\n  <ion-slides pager="true" dir="{{dir}}" (ionSlideWillChange)="onSlideChangeStart($event)">\n    <ion-slide *ngFor="let slide of slides">\n      <img  [src]="slide.image" class="slide-image" />\n      \n    </ion-slide>\n    <ion-slide>\n       <font face="Times New Roman" color="black" size="2"> <b>    <button class="myButton" ion-button icon-end large clear (click)="startApp()">\n        {{ \'TUTORIAL_CONTINUE_BUTTON\' | translate }}\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n        </b></font>\n        \n        \n      <img class="img" src="assets/img/6.jpg"  />\n    \n    \n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/tutorial/tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ })

});
//# sourceMappingURL=6.js.map