webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#content-container{\r\n  min-height: 450px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main>\r\n    <router-outlet></router-outlet>\r\n</main>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Kalaikumar Thangasamy';
    }
    AppComponent.prototype.ngOnInit = function () {
        //$('#content-container').css('min-height', $( document ).height()-195);
    };
    AppComponent.prototype.getRouteAnimation = function (outlet) {
        return outlet.activatedRouteData.animation;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__testimonial_testimonial_component__ = __webpack_require__("../../../../../src/app/testimonial/testimonial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__education_education_component__ = __webpack_require__("../../../../../src/app/education/education.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__awards_awards_component__ = __webpack_require__("../../../../../src/app/awards/awards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__innovation_innovation_component__ = __webpack_require__("../../../../../src/app/innovation/innovation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_7__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__testimonial_testimonial_component__["a" /* TestimonialComponent */],
            __WEBPACK_IMPORTED_MODULE_12__education_education_component__["a" /* EducationComponent */],
            __WEBPACK_IMPORTED_MODULE_13__awards_awards_component__["a" /* AwardsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__innovation_innovation_component__["a" /* InnovationComponent */],
            __WEBPACK_IMPORTED_MODULE_16__filter_pipe__["a" /* FilterPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_6__main_main_component__["a" /* MainComponent */], data: { animation: '' } },
                { path: 'about-me', component: __WEBPACK_IMPORTED_MODULE_6__main_main_component__["a" /* MainComponent */], data: { animation: 'about-me' } },
                { path: 'education', component: __WEBPACK_IMPORTED_MODULE_12__education_education_component__["a" /* EducationComponent */], data: { animation: 'education' } },
                { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_7__projects_projects_component__["a" /* ProjectsComponent */], data: { animation: 'projects' } },
                { path: 'testimonial', component: __WEBPACK_IMPORTED_MODULE_8__testimonial_testimonial_component__["a" /* TestimonialComponent */], data: { animation: 'testimonial' } },
                { path: 'awards', component: __WEBPACK_IMPORTED_MODULE_13__awards_awards_component__["a" /* AwardsComponent */], data: { animation: 'awards' } },
                { path: 'innovation', component: __WEBPACK_IMPORTED_MODULE_15__innovation_innovation_component__["a" /* InnovationComponent */], data: { animation: 'innovation' } }
            ], { useHash: true })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/awards/awards.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel-item{\r\n  height: auto !important;\r\n}\r\n.carousel-control-next, .carousel-control-prev{\r\n  color: #000;\r\n}\r\n.carousel{\r\n  margin: 0 auto;\r\n}\r\n.awards::before{\r\n  content: \"\\F091\";\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/awards/awards.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-80 mb\">\n  <div class=\"card h-100\">\n    <h4 class=\"card-header awards\">Awards</h4>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div id=\"awards\" class=\"carousel slide\" data-ride=\"carousel\">\n          <div class=\"carousel-inner\">\n            <div class=\"carousel-item \" [ngClass]=\"{'active': i==0}\" *ngFor=\"let award of awards; let i = index;\">\n              <img class=\"d-block w-100\" alt=\"\" src=\"{{award}}\">\n            </div>\n          </div>\n          <a class=\"carousel-control-prev\" href=\"#awards\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"carousel-control-next\" href=\"#awards\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </div>\n      </div>\n      </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/awards/awards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AwardsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AwardsComponent = (function () {
    function AwardsComponent(dataService, http) {
        this.dataService = dataService;
        this.http = http;
        this.awards = [];
    }
    AwardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAwards()
            .subscribe(function (res) {
            _this.awards = res.json();
        });
    };
    return AwardsComponent;
}());
AwardsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-awards',
        template: __webpack_require__("../../../../../src/app/awards/awards.component.html"),
        styles: [__webpack_require__("../../../../../src/app/awards/awards.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* fadeInAnimation */]],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], AwardsComponent);

var _a, _b;
//# sourceMappingURL=awards.component.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.skills = {};
    }
    DataService.prototype.getSkills = function () {
        return this.http.get('./api/skills.json');
    };
    DataService.prototype.getProjects = function () {
        return this.http.get('./api/projects.json');
    };
    DataService.prototype.getInnovations = function () {
        return this.http.get('./api/innovations.json');
    };
    DataService.prototype.getAwards = function () {
        return this.http.get('./api/awards.json');
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/education/education.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ed-pad{padding-left: 1rem;}\r\naddress strong{color: #42AB9E;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/education/education.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-80 mb\">\n    <!-- Portfolio Section -->\n    <h2>Education</h2>\n    <div class=\"card h-100 mb-4\">\n      <h4 class=\"card-header\">Master of Computer Applications (2001 - 2004)</h4>\n      <div class=\"card-body\">\n\n      <div class=\"col-lg-12\">\n        <div class=\"pull-left\">\n          <a target=\"_blank\" href=\"http://www.jawaharsciencecollege.org/\"><img width=\"120\" src=\"https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Adaikalamatha_college_logo.jpg/220px-Adaikalamatha_college_logo.jpg\"/></a>\n        </div>\n        <address class=\"pull-left ed-pad\">\n          <strong>Adaikalamatha College</strong><br>\n          Affiliation: Bharathidasan University<br>\n          Thanjavur, Tamil Nadu 613403, India<br>\n        </address>\n      </div>\n\n    </div>\n    </div>\n    <div class=\"card h-100\">\n      <h4 class=\"card-header\">Bachelor of Arts in Corporate Secretaryship (1998 - 2001)</h4>\n      <div class=\"card-body\">\n        <div class=\"col-lg-12\">\n          <div class=\"pull-left\">\n            <a target=\"_blank\" href=\"http://www.amcvallam.com/\"><img width=\"120\" src=\"https://static-collegedunia.com/public/college_data/images/logos/1453886734logo.jpg\"/></a>\n          </div>\n          <address class=\"pull-left ed-pad\">\n            <strong>Jawahar Science College</strong><br>\n            Affiliation: Madras University<br>\n            Neyveli T.S, Tamil Nadu 607807, India<br>\n          </address>\n        </div>\n      </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/education/education.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EducationComponent = (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    return EducationComponent;
}());
EducationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-education',
        template: __webpack_require__("../../../../../src/app/education/education.component.html"),
        styles: [__webpack_require__("../../../../../src/app/education/education.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* fadeInAnimation */]],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [])
], EducationComponent);

//# sourceMappingURL=education.component.js.map

/***/ }),

/***/ "../../../../../src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.env.toLowerCase().includes(searchText);
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'filter',
        pure: false
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer{\r\n  color: #fff;\r\n  font-size: 1rem;\r\n}\r\nfooter i{\r\n  color: #42AB9E;\r\n  margin-right: 10px;\r\n}\r\n.white{\r\n  color: #fff;\r\n}\r\n.social-icon{\r\n  text-align: right;\r\n  font-size: 2rem;\r\n  display: inline-block;\r\n}\r\n.contact i{ width: 20px; }\r\n.contact{ font-size: 1.5rem; }\r\n.fa-phone-square{font-size: 28px;}\r\n\r\n@media only screen and (max-width:1024px){\r\n  .social-icon{\r\n    text-align: right;\r\n    font-size: 1rem;\r\n    display: inline-block;\r\n  }\r\n  p{\r\n    font-size: .6rem;\r\n  }\r\n  .py-5{\r\n    padding: 1rem 0!important;\r\n  }\r\n  .contact{ font-size: .75rem; }\r\n  .fa-phone-square{font-size: 15px;}\r\n  footer i{\r\n    margin-right: 0;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Footer -->\r\n<footer class=\"py-5 bg-dark\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6 pull-left contact\">\r\n        <a href=\"tel:+15712678749\" class=\"white\"><i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i> +1 571 267 8749</a><br/>\r\n        <a href=\"mailto:kalai@kalaikumar.info\" class=\"white\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>   kalai@kalaikumar.info</a><br/>\r\n      </div>\r\n      <div class=\"col-6 pull-right text-right\">\r\n        <div class=\"social-icon\">\r\n          <a href=\"https://www.linkedin.com/in/kalaikumar-thangasamy/\" target=\"_blank\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a>\r\n          <a href=\"https://github.com/kalaikt\" target=\"_blank\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a>\r\n          <a href=\"https://stackoverflow.com/users/8111455/kalaikumar-thangasamy\" target=\"_blank\"><i class=\"fa fa-stack-overflow\" aria-hidden=\"true\"></i></a>\r\n          <a href=\"https://www.facebook.com/kalai.k.t\" target=\"_blank\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\r\n          <a href=\"https://plus.google.com/+KalaikumarThangasamy\" target=\"_blank\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\r\n        </div>\r\n        <p class=\"m-0 text-right text-white\">Copyright &copy; kalaikumar.info 2017</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- /.container -->\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header{color: gray; padding: 2rem;}\r\n#top-header{display: -webkit-box;display: -ms-flexbox;display: flex;  -webkit-box-pack: center;  -ms-flex-pack: center;  justify-content: center; -webkit-box-align: center; -ms-flex-align: center; align-items: center; line-height: 3vw;}\r\n#top-header h1 {-webkit-box-flex: 1;-ms-flex: 1;flex: 1;\r\n  text-shadow: 1px 0px #165875;\r\n  color: #505c65;\r\n  letter-spacing: 4px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n#top-header h1::before, #logo::before { background-image: url(" + __webpack_require__("../../../../../src/assets/img/kalai.jpg") + ");\r\n  background-size: 100% 100%;\r\n  content: '';\r\n  padding: .7rem 2rem;\r\n  background-repeat: no-repeat;\r\n  border-radius: 50%;\r\n  margin-right: 1rem;}\r\n#top-header nav { text-align: right; -webkit-box-flex: 1; -ms-flex: 1; flex: 1;}\r\n#top-header nav li{display: inline-block; text-align: center; padding: 0 .8rem;}\r\n#top-header nav li:last-child{ padding-right: 0;}\r\n#top-header nav li a{color: gray; text-decoration: none; text-transform: uppercase;}\r\n#top-header nav li a:hover{color: #42AB9E;}\r\n#logo{\r\n  color: #a9a4a4;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n  letter-spacing: 0;\r\n  line-height: 1;\r\n  /*text-shadow: #EDEDED 3px 2px 0;*/\r\n  position: relative;\r\n  padding: 1rem 0;\r\n}\r\n#logo:after {\r\n  background-image: -webkit-linear-gradient(left top, transparent 0%, transparent 25%, #555 25%, #555 50%, transparent 50%, transparent 75%, #555 75%);\r\n  background-size: 4px 4px;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  content: \"KALAIKUMAR\";\r\n  position: absolute;\r\n  left: 82px;\r\n  top: 18px;\r\n}\r\n.role{\r\n}\r\n.role h1{\r\n  color: #42AB9E;\r\n  font-size: 3rem;\r\n  line-height: 3rem;\r\n  margin-top: 60px;\r\n}\r\n#logo-kalai{color: #000; font-size: 2rem; text-transform: uppercase;border-bottom: 1px solid #42AB9E;line-height: 2rem;\r\n    color: #fff;}\r\n.navbar-nav {text-transform: uppercase;\r\n    font-size: 1rem;}\r\n.navbar-brand {padding: 0;}\r\n.navbar-brand a{text-decoration: none;}\r\n.navbar-brand div{\r\n    color: rgba(255,255,255,.75);\r\n    font-size: .52rem;\r\n    letter-spacing: 3px;\r\n    text-align: center;\r\n    line-height: .52rem;\r\n    margin-top: 5px;\r\n}\r\nheader{padding-bottom:0; }\r\n@media only screen and (max-width:1024px){\r\n  .navbar-brand div{\r\n    font-size: .52rem;\r\n    letter-spacing: 3px;\r\n    text-align: center;\r\n    line-height: .52rem;\r\n    margin-top: 5px;\r\n  }\r\n  #logo-kalai{\r\n    font-size: 2rem;\r\n  }\r\n  header{\r\n    padding: 1rem;\r\n  }\r\n  .role{\r\n    padding: 0;\r\n  }\r\n  .role h1{\r\n    font-size: 3rem;\r\n    line-height: 3rem;\r\n    margin-top: 80px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width:850px) {\r\n  .navbar-collapse {\r\n    margin-top: .8rem;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-brand\">\r\n        <a routerLink=\"\" id=\"logo-kalai\">\r\n          <span>{{name}}</span>\r\n          <div>{{logo_slogan}}</div>\r\n        </a>\r\n\r\n    </div>\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n      <ul class=\"navbar-nav ml-auto\" >\r\n        <li class=\"nav-item\" *ngFor=\"let menu of menus\">\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"menu.path\">{{menu.text}}</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<header>\r\n  <div class=\"container role\" [hidden]=\"!showRole\">\r\n    <h1>{{roles}}</h1>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(router) {
        var _this = this;
        this.router = router;
        this.menus = [
            { text: 'About me', path: 'about-me' },
            { text: 'Education', path: 'education' },
            { text: 'Projects', path: 'projects' },
            { text: 'Awards', path: 'awards' },
            { text: 'Innovation', path: 'innovation' },
        ];
        this.name = 'Kalaikumar';
        this.logo_slogan = 'ABOUT ME AS A PROFESSIONAL';
        this.roles = 'UI/Front-end Developer, Oracle PL/SQL Developer and UI Architect.';
        router.events.subscribe(function (url) {
            //console.log(url.url);
            _this.showRole = url.url == '/' || url.url == '/about-me' || url.url == '/contact-me';
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery__('#navbarResponsive li').click(function () {
                var width = __WEBPACK_IMPORTED_MODULE_2_jquery__(document).width();
                console.log(width);
                if (width < 1024)
                    __WEBPACK_IMPORTED_MODULE_2_jquery__('.navbar-toggler').trigger('click');
            });
        }, 500);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/innovation/innovation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/innovation/innovation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-80 mb\">\n  <h2>Innovation</h2>\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-sm-6 portfolio-item\" *ngFor=\"let innnovation of innovations\">\n      <div class=\"card h-100\">\n        <a href=\"{{innnovation.link}}\" target=\"_blank\"><img class=\"card-img-top\" src=\"{{innnovation.image || 'http://placehold.it/700x400'}}\" alt=\"\"></a>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">\n            {{innnovation.title}}\n          </h4>\n          <p class=\"card-text\">{{innnovation.description}}</p>\n          <div *ngIf=\"innnovation.env\"><strong>Environment:</strong> {{innnovation.env}}</div>\n          <div *ngIf=\"innnovation.period\"><strong>Date:</strong> {{innnovation.period}}</div>\n          <div class=\"text-center\">\n            <a href=\"{{innnovation.link}}\" target=\"_blank\" *ngIf=\"innnovation.isAndroidApp\">\n              <img width=\"100\" src=\"assets/img/google-play-badge.png\" alt=\"google-play-badge\">\n            </a>\n            <a href=\"{{innnovation.link}}\" class=\"btn btn-primary\" target=\"_blank\" *ngIf=\"!innnovation.isAndroidApp\">\n              Launch\n            </a>\n        </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/innovation/innovation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InnovationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InnovationComponent = (function () {
    function InnovationComponent(dataService, http) {
        this.dataService = dataService;
        this.http = http;
        this.innovations = [];
    }
    InnovationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getInnovations()
            .subscribe(function (res) {
            _this.innovations = res.json();
        });
    };
    return InnovationComponent;
}());
InnovationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-innovation',
        template: __webpack_require__("../../../../../src/app/innovation/innovation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/innovation/innovation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], InnovationComponent);

var _a, _b;
//# sourceMappingURL=innovation.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".skills{\r\n  font-size: 1rem;\r\n}\r\n\r\nul.card-text{\r\n  padding-left: 15px;\r\n  font-size: 1rem;\r\n}\r\n.kalai{\r\n  width: 60%;\r\n}\r\n.welcome-txt{\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.front-end::before{\r\n  content: \"\\F121\";\r\n}\r\n.server-side::before{\r\n  content: \"{}\";\r\n}\r\n.backEnd::before{\r\n  content: \"\\F1C0\";\r\n}\r\n.tools::before{\r\n  content: \"\\F0AD\";\r\n}\r\n@media (min-width:1000px) and (max-width:1024px){\r\n  .container{\r\n    padding: 0;\r\n  }\r\n  .col-sm-3{width: 50%;}\r\n}\r\n@media (min-width:576px) and (max-width:1024px){\r\n  .col-sm-3{\r\n    -ms-flex: 0 0 50%;\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 50%;\r\n    max-width: 50%;}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\r\n<div class=\"container\">\r\n\r\n  <h1 class=\"my-4\">{{welcome}}</h1>\r\n  <!-- Features Section -->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8\">\r\n      <p class=\"welcome-txt\" [innerHTML] = \"skills.welcomeMsg\"></p>\r\n    </div>\r\n    <div class=\"col-lg-4 text-center\">\r\n      <img class=\"img-fluid rounded\" src=\"assets/img/kalai-1.JPG\" alt=\"\">\r\n    </div>\r\n  </div>\r\n  <!-- /.row -->\r\n\r\n  <!-- Marketing Icons Section -->\r\n  <h1 class=\"my-4\">Technical Experience</h1>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3 mb-4\">\r\n      <div class=\"card h-100\">\r\n        <h4 class=\"card-header front-end\">{{frontEndTile}}</h4>\r\n        <div class=\"card-body\">\r\n          <ul class=\"card-text\">\r\n            <li *ngFor=\"let front of skills.frontEnd\">{{front}}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3 mb-4\">\r\n      <div class=\"card h-100\">\r\n        <h4 class=\"card-header server-side\">{{serverSideTitle}}</h4>\r\n        <div class=\"card-body\">\r\n          <ul class=\"card-text\">\r\n            <li *ngFor=\"let front of skills.serverSide\">{{front}}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3 mb-4\">\r\n      <div class=\"card h-100\">\r\n        <h4 class=\"card-header backEnd\">{{backEndTile}}</h4>\r\n        <div class=\"card-body\">\r\n          <ul class=\"card-text\">\r\n            <li *ngFor=\"let front of skills.backEnd\">{{front}}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3 mb-4\">\r\n      <div class=\"card h-100\">\r\n        <h4 class=\"card-header tools\">{{toolsTile}}</h4>\r\n        <div class=\"card-body\">\r\n          <ul class=\"card-text\">\r\n              <li *ngFor=\"let front of skills.tools\">{{front}}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- /.row -->\r\n  <!-- /.row -->\r\n</div>\r\n<!-- /.container -->\r\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = (function () {
    function MainComponent(dataService, http) {
        this.dataService = dataService;
        this.http = http;
        this.skills = {};
        this.welcome = 'Welcome to Kalai\'s Profile';
        this.frontEndTile = 'User Interface';
        this.backEndTile = 'DB/DB Tools';
        this.serverSideTitle = 'Server Side/CMS';
        this.toolsTile = 'IDE/Tools';
        this.years = new Date().getFullYear() - 2004;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getSkills()
            .subscribe(function (res) {
            _this.skills = res.json();
            _this.skills["welcomeMsg"] = _this.skills["welcomeMsg"].replace("YEARS", _this.years);
        });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* fadeInAnimation */]],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], MainComponent);

var _a, _b;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".project-item{\r\n  position: relative;\r\n}\r\n.project-item .card-body{\r\n  text-align: justify;\r\n}\r\n.card-header h5{\r\n  overflow: hidden;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: #343a40;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 0;\r\n  transition: .5s ease;\r\n  opacity: .9;\r\n}\r\n.project-item:hover .overlay {\r\n  height: 100%;\r\n}\r\n\r\n.text {\r\n  position: relative;\r\n  color: #fff;\r\n  font-size: .9rem;\r\n  padding: 1rem;\r\n  -webkit-transform: translate(0%, 0%);\r\n          transform: translate(0%, 0%);\r\n  -ms-transform: translate(0%, 0%);\r\n}\r\n.text strong{\r\n  font-weight: normal;\r\n  color: #42AB9E;\r\n}\r\n.text .responsibilities{\r\n    padding-left: 1rem;\r\n    height: 200px;\r\n    overflow-y: auto;\r\n    margin-bottom: 1rem;\r\n}\r\n.btn-link{\r\n  color: #343a40;\r\n  text-decoration: none;\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n}\r\n.row{margin: 15px;}\r\n.image-col{\r\n  overflow: hidden;\r\n  padding: 0;\r\n  margin-bottom: 1rem;\r\n}\r\n.response{\r\n  margin-left: 1rem;\r\n  text-align: justify;\r\n}\r\n.response .responsibilities{\r\n  padding-left: 1rem;\r\n}\r\n.project-detail{\r\n  text-align: justify;\r\n}\r\n.project-detail strong, .response strong{\r\n  color: #42AB9E;\r\n}\r\n#accordion button{\r\n  padding: 0;\r\n}\r\n.padding-0{\r\n  padding: 0;\r\n}\r\n.input-group{\r\n  width: 250px;\r\n  float: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-80 mb\">\n    <!-- Portfolio Section -->\n\n    <div class=\"row m-0\">\n      <div class=\"col m-0 p-0\">\n        <h2>Projects</h2>\n      </div>\n      <div class=\"col m-0 p-0\">\n        <div class=\"input-group\">\n          <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control\" placeholder=\"Search by Technology\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-secondary\" type=\"button\">Go!</button>\n          </span>\n        </div>\n      </div>\n    </div>\n    <div id=\"accordion\">\n      <div *ngFor=\"let company of projects; let i = index;\">\n        <div class=\"card\" *ngIf=\"(company.projects | filter:searchText).length\">\n          <div class=\"card-header\" id=\"heading{{i}}\">\n            <h5 class=\"mb-0\">\n              <button class=\"btn btn-link\" data-toggle=\"collapse\" [attr.data-target]=\"'#collapse'+i\" [attr.aria-expanded]=\"!i\" [attr.aria-controls]=\"'collapse'+i\">\n                {{company.companyName}} <span *ngIf=\"company.startDate\">({{(company.startDate | date:\"MMM yyyy\") + ' - ' + ((company.endDate | date:\"MMM yyyy\") || 'Present')}}<span *ngIf=\"company.aStartDate\"> & {{(company.aStartDate | date:\"MMM yyyy\") + ' - ' + (company.aEndDate | date:\"MMM yyyy\")}}</span>)</span>\n              </button>\n            </h5>\n          </div>\n          <div id=\"collapse{{i}}\" class=\"collapse\" [ngClass]=\"{'show':!i}\" [attr.aria-labelledby]=\"'heading'+i\" data-parent=\"#accordion\">\n              <div class=\"container\" *ngIf=\"company.projects.length == 1\">\n                <div class=\"row\" *ngFor=\"let project of company.projects | filter:searchText\">\n                  <div class=\"portfolio-item\">\n                    <div class=\"card h-100\" [attr.data-launchBtn]=\"project.link.length\">\n                      <div class=\"row\">\n                      <div class=\"col-sm-6 pull-left\">\n                        <img class=\"card-img-top image-col\" src=\"{{project.image || 'http://placehold.it/700x400'}}\" alt=\"\">\n                        <div class=\"card-body padding-0\">\n                          <h4 class=\"card-title\">\n                            <a target=\"_blank\" href=\"{{project.link || '#'}}\">{{project.title}}</a>\n                          </h4>\n                          <div class=\"card-text\">\n                            <p>{{project.description}}</p>\n                            <div class=\"project-info\">\n                              <div *ngIf=\"project.role\"><strong>Role:</strong> {{project.role}}</div>\n                              <div *ngIf=\"project.period\"><strong>Period:</strong> {{project.period}}</div>\n                              <div *ngIf=\"project.client\"><strong>Client:</strong> {{project.client}}, {{project.location}}</div>\n                              <div *ngIf=\"project.company\"><strong>Company:</strong> {{project.company}}</div>\n                              <div *ngIf=\"project.env\"><strong>Environment:</strong> {{project.env}}</div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-6 pull-left\">\n                        <div *ngIf=\"project.responsibilities.length\">\n                            <strong>Responsibilities:</strong>\n                            <ul class=\"responsibilities pl-3\">\n                              <li *ngFor=\"let res of project.responsibilities\">{{res}}</li>\n                            </ul>\n                        </div>\n                        <div *ngIf=\"project.link.length\" class=\"text-center mt-3\"><a class=\"btn btn-primary\" target=\"_blank\" href=\"{{project.link}}\">Launch</a></div>\n                      </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\" *ngIf=\"company.projects.length > 1\">\n                <div class=\"col-lg-4 col-sm-6 portfolio-item\" *ngFor=\"let project of company.projects | filter:searchText\">\n                  <div class=\"card h-100 project-item\" [attr.data-launchBtn]=\"project.link.length\">\n                    <img class=\"card-img-top\" src=\"{{project.image || 'http://placehold.it/700x400'}}\" alt=\"\">\n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">\n                        {{project.title}}\n                      </h4>\n                      <p class=\"card-text\">{{ (project.description.length > 200)? (project.description | slice:0:200)+'...':(project.description) }}</p>\n                    </div>\n                    <div class=\"overlay\">\n                      <div class=\"text\">\n                        <div class=\"project-info\">\n                          <div *ngIf=\"project.role\"><strong>Role:</strong> {{project.role}}</div>\n                          <div *ngIf=\"project.period\"><strong>Period:</strong> {{project.period}}</div>\n                          <div *ngIf=\"project.client\"><strong>Client:</strong> {{project.client}}, {{project.location}}</div>\n                          <div *ngIf=\"project.company\"><strong>Company:</strong> {{project.company}}</div>\n                          <div *ngIf=\"project.env\"><strong>Environment:</strong> {{project.env}}</div>\n                        </div>\n                        <div *ngIf=\"project.responsibilities.length\">\n                            <strong>Responsibilities:</strong>\n                            <ul class=\"responsibilities\">\n                              <li *ngFor=\"let res of project.responsibilities\">{{res}}</li>\n                            </ul>\n                        </div>\n                        <div *ngIf=\"project.link.length\" class=\"text-center\"><a class=\"btn btn-primary\" target=\"_blank\" href=\"{{project.link}}\">Launch</a></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectsComponent = (function () {
    function ProjectsComponent(dataService, http) {
        this.dataService = dataService;
        this.http = http;
        this.projects = [];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getProjects()
            .subscribe(function (res) {
            _this.projects = res.json();
        });
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.project-item').mouseover(function () {
                var height = __WEBPACK_IMPORTED_MODULE_3_jquery__(this).height() - __WEBPACK_IMPORTED_MODULE_3_jquery__(this).find('.project-info').height();
                if (__WEBPACK_IMPORTED_MODULE_3_jquery__(this).data('launchbtn'))
                    __WEBPACK_IMPORTED_MODULE_3_jquery__(this).find('.responsibilities').height(height - 110);
                else
                    __WEBPACK_IMPORTED_MODULE_3_jquery__(this).find('.responsibilities').height(height - 60);
            });
        }, 500);
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_4__router_animations__["a" /* fadeInAnimation */]],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], ProjectsComponent);

var _a, _b;
//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAnimation; });

var fadeInAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('fadeInAnimation', [
    // route 'enter' transition
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
        // styles at start of transition
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 }),
        // animation and styles at end of transition
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* animate */])('.3s', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 }))
    ]),
]);
//# sourceMappingURL=router.animations.js.map

/***/ }),

/***/ "../../../../../src/app/testimonial/testimonial.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/testimonial/testimonial.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-80\">\n\n<p>\n  testimonial works!\n</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/testimonial/testimonial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestimonialComponent = (function () {
    function TestimonialComponent() {
    }
    TestimonialComponent.prototype.ngOnInit = function () {
    };
    return TestimonialComponent;
}());
TestimonialComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-testimonial',
        template: __webpack_require__("../../../../../src/app/testimonial/testimonial.component.html"),
        styles: [__webpack_require__("../../../../../src/app/testimonial/testimonial.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* fadeInAnimation */]],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [])
], TestimonialComponent);

//# sourceMappingURL=testimonial.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/kalai.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kalai.806ce33bbec7ebe51654.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map