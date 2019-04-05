(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _pages_education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/education/education.component */ "./src/app/pages/education/education.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/project/project.component */ "./src/app/pages/project/project.component.ts");
/* harmony import */ var _task_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task/task-list/task-list.component */ "./src/app/task/task-list/task-list.component.ts");
/* harmony import */ var _task_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task/task-details/task-details.component */ "./src/app/task/task-details/task-details.component.ts");
/* harmony import */ var _task_task_delete_task_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./task/task-delete/task-delete.component */ "./src/app/task/task-delete/task-delete.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");



//calls inputs












var routes = [
    { path: "home", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { title: "Home" } },
    { path: "about", component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], data: { title: "About" } },
    { path: "project", component: _pages_project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"], data: { title: "Project" } },
    {
        path: "services",
        component: _pages_services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"],
        data: { title: "Services" }
    },
    {
        path: "education",
        component: _pages_education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"],
        data: { title: "Education" }
    },
    { path: "contact", component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], data: { title: "Contact" } },
    {
        path: "task/task-list",
        component: _task_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_10__["TaskListComponent"],
        data: { title: "Task-List" }
    },
    {
        path: "task/task-list/add",
        component: _task_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_11__["TaskDetailsComponent"],
        data: { title: "Add Task" }
    },
    {
        path: "task/task-list/edit/:id",
        component: _task_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_11__["TaskDetailsComponent"],
        data: { title: "Edit Task" }
    },
    {
        path: "task/task-list/delete",
        component: _task_task_delete_task_delete_component__WEBPACK_IMPORTED_MODULE_12__["TaskDeleteComponent"],
        data: { title: "Delete Task" }
    },
    {
        path: "register",
        component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
        data: { title: "Register User" }
    },
    { path: "login", component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], data: { title: "Login" } },
    { path: "logout", redirectTo: "/login", pathMatch: "full" },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: jwtTokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtTokenGetter", function() { return jwtTokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _partials_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./partials/header/header.component */ "./src/app/partials/header/header.component.ts");
/* harmony import */ var _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./partials/footer/footer.component */ "./src/app/partials/footer/footer.component.ts");
/* harmony import */ var _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_education_education_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/education/education.component */ "./src/app/pages/education/education.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_project_project_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/project/project.component */ "./src/app/pages/project/project.component.ts");
/* harmony import */ var _task_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./task/task-list/task-list.component */ "./src/app/task/task-list/task-list.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _task_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./task/task-details/task-details.component */ "./src/app/task/task-details/task-details.component.ts");
/* harmony import */ var _task_task_delete_task_delete_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./task/task-delete/task-delete.component */ "./src/app/task/task-delete/task-delete.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");






//components
















//services


function jwtTokenGetter() {
    return localStorage.getItem("id_token");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _partials_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_9__["BasePageComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _pages_services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                _pages_education_education_component__WEBPACK_IMPORTED_MODULE_14__["EducationComponent"],
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
                _pages_project_project_component__WEBPACK_IMPORTED_MODULE_16__["ProjectComponent"],
                _task_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_17__["TaskListComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _task_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_20__["TaskDetailsComponent"],
                _task_task_delete_task_delete_component__WEBPACK_IMPORTED_MODULE_21__["TaskDeleteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_22__["FlashMessagesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_23__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: jwtTokenGetter
                    }
                })
            ],
            providers: [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_22__["FlashMessagesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/task.ts":
/*!********************************!*\
  !*** ./src/app/models/task.ts ***!
  \********************************/
/*! exports provided: ToDoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoList", function() { return ToDoList; });
var ToDoList = /** @class */ (function () {
    function ToDoList() {
    }
    return ToDoList;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <br>\n  <div class=\"jumbotron\">\n    <!-- \nName: Kapilan Santhiramohan\nDate: Feb, 15, 2019\n -->\n\n    <div class=\"container\">\n      <br />\n      <div class=\"jumbotron\">\n        <!-- Creates table with left side having a short description of me that should capture readers attention, and a picture of me to the right\n      Photocredits: Wasey Jahan  -->\n\n        <h1>About</h1>\n        <br />\n        <div class=\"row\">\n          <div class=\"col-8\">\n            <p>\n              Hi I’m Kapilan Santhiramohan, a software engineer with a passion\n              for coding and developing. Currently a centennial college student\n              for software engineering and aspiring to expand my knowledge on\n              all areas of coding. My speciality is object-oriented coding and I\n              am planning to expand my knowledge in all area to eventually be\n              able to co-relate all relevant information into a single project\n              and see the manifestation of my knowledge before me.\n            </p>\n            <br />\n            <p>\n              Through obtaining my diploma in software engineering, I will use\n              that as a base to complete a degree in software engineering at an\n              accredited university. My current phase is to gather a base of\n              fundamental knowledge as well as learning how to learn adapt to\n              new programs and languages efficiently. Throughout the three years\n              at centennial college, I have learnt to build programs in many\n              different programming languages such as: C#, Java, UNIX, SQL,\n              ASP.NET, HTML, JavaScript, as well as CSS styling. I have also\n              written up multiple business proposals for project applications\n              that were built for android devices. The documentation consisted\n              of UML diagrams, excel profit and time management charts.\n            </p>\n          </div>\n          <div class=\"col-4\">\n            <img\n              src=\"assets/images/Personal.jpg\"\n              class=\"img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}\"\n              alt=\"\"\n            />\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <a\n            class=\"nav-link\"\n            href=\"https://bmo.taleo.net/careersection/2/jobdetail.ftl?job=1800023658&tz=GMT-05%3A00\"\n            ><i class=\"fa fa-lg fa-file-link\"></i> BMO Job Page</a\n          >\n          <a class=\"nav-link\" href=\"assets/Resume.pdf\"\n            ><i class=\"fa fa-lg fa-file-pdf-o\"></i> BMO Resume and Cover\n            Letter</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AboutComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AboutComponent, _super);
    function AboutComponent(route) {
        return _super.call(this, route) || this;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AboutComponent);
    return AboutComponent;
}(src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br>\r\n    <div class=\"jumbotron\" id=\"bodycolour\">\r\n        <!--Gives viewer the option to call-->\r\n\r\n        <h1>Contact</h1>\r\n        <br>\r\n        <h4>Call:</h4>\r\n        <p>Mobile: 647-406-2773 <br> Home: 416-754-2851 <br> Email: ksanthi1@my.centennialcollege.ca</p>\r\n        <br>\r\n        <h4>Email:</h4>\r\n        <!--Gives viewer the option to email when they fill out the form which should be redirected to email address at a later point in time-->\r\n        <div class=\"form_size\">\r\n            <form class=\"form\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-3\">\r\n                        <label for=\"first\" class=\"col-form-label\" aria-hidden=\"true\"> First Name: </label>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" class=\"form-control form-control-sm\" required=\"required\" id=\"txt_first\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-3\">\r\n                        <label for=\"last\" class=\"col-form-label\">Last Name: </label>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" class=\"form-control form-control-sm\" required=\"required\" id=\"txt_last\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-3\">\r\n                        <label for=\"email\" class=\"col-form-label\">Email: </label>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n\r\n                        <input type=\"email\" class=\"form-control form-control-sm\" required=\"required\" id=\"txt_email\">\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-3\">\r\n                        <label for=\"number\" class=\"col-form-label\">Phone Number: </label>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"number\" class=\"form-control form-control-sm\" required=\"required\" id=\"txt_number\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-3\">\r\n                        <label for=\"txt_message\" class=\"col-form-label\">Message: </label>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <textarea class=\"form-control\" id=\"txt_message\" required=\"required\" rows=\"3\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n\r\n\r\n                <!--Standard form submit and reset buttons with a cell infornt to centralize buttons with form -->\r\n                <button class=\"btn btn-primary\" id=\"btn_submit\" type=\"submit\">Submit </button>\r\n                <button class=\"btn btn-primary\" type=\"reset\">Reset </button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ContactComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContactComponent, _super);
    function ContactComponent(route) {
        return _super.call(this, route) || this;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ContactComponent);
    return ContactComponent;
}(src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/education/education.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/education/education.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/education/education.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/education/education.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <br />\r\n  <div class=\"jumbotron\">\r\n    <!-- Creates table with current GPA for profile purpose -->\r\n\r\n    <h1>Education</h1>\r\n    <br />\r\n    <div class=\"row\">\r\n      <p>\r\n        <img\r\n          src=\"assets/images/Transcript.PNG\"\r\n          class=\"img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}\"\r\n          alt=\"\"\r\n        />\r\n      </p>\r\n    </div>\r\n    <div class=\"row\">\r\n      <h5>Current Diploma:</h5>\r\n    </div>\r\n    <div class=\"row\">\r\n      <br />\r\n      <br />\r\n      <p>\r\n        Highschool Diploma from Winston Churchill Collegiate Insitute - June\r\n        2015.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/education/education.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/education/education.component.ts ***!
  \********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EducationComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EducationComponent, _super);
    function EducationComponent(route) {
        return _super.call(this, route) || this;
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/pages/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/pages/education/education.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EducationComponent);
    return EducationComponent;
}(src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br />\n\n  <div class=\"jumbotron\">\n    <!--Uses bootstraps design to give a clear border round content which is used throughout all pages for consistancy. Placed a personal quote \n      as it makes the homepage look at more busy than a simple paragraph. -->\n\n    <div class=\"row\">\n      <div class=\"col-lg-7\">\n        <h1 class=\"display-bold\">Welcome to Kapilan's Website</h1>\n      </div>\n      <div class=\"col-3\">\n        <div class=\"right\">\n          <img src=\"assets/images/MainLogo.png\" class=\"right\" alt=\"\" />\n        </div>\n      </div>\n    </div>\n\n    <br />\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Quote\n      </div>\n      <div class=\"card-body\">\n        <blockquote class=\"blockquote mb-0\">\n          <p>Wandering through life stumbling upon new paths.</p>\n          <footer class=\"blockquote-footer\">Kapilan Santhiramohan</footer>\n        </blockquote>\n      </div>\n    </div>\n    <hr class=\"my-2\" />\n    <br />\n    <br />\n    <h4 class=\"display-5\">Mission:</h4>\n    <p>\n      Create and develop applications that will help change the current industry\n      standard in technology. Making applications that will be incorporated with\n      all technology that we currently today to make it more convenient and have\n      luxurious feel.\n    </p>\n    <p class=\"lead\">\n      <a class=\"btn btn-info btn-lg\" routerLink=\"/about\" role=\"button\"\n        >About Me</a\n      >\n      <a class=\"btn btn-info btn-lg\" routerLink=\"/project\" role=\"button\"\n        >Projects</a\n      >\n      <a class=\"btn btn-info btn-lg\" routerLink=\"/services\" role=\"button\"\n        >Services</a\n      >\n      <a class=\"btn btn-info btn-lg\" routerLink=\"/contact\" role=\"button\"\n        >Contact</a\n      >\n      <a\n        class=\"btn btn-primary btn-lg\"\n        routerLink=\"/task/task-list\"\n        role=\"button\"\n        >Task List</a\n      >\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HomeComponent, _super);
    function HomeComponent(route) {
        return _super.call(this, route) || this;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}(src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" id=\"bodycolour\">\n  <div class=\"row\">\n    <div class=\"col-md-offset-4 col-md-4\">\n      <h1>Please Login</h1>\n      <form>\n        <fieldset class=\"form-group\">\n          <label for=\"\">Username: </label>\n          <input\n            type=\"text\"\n            required\n            class=\"form-control\"\n            name=\"username\"\n            autofocus\n          />\n        </fieldset>\n\n        <fieldset class=\"form-group\">\n          <label for=\"\">Password: </label>\n          <input\n            type=\"password\"\n            required\n            class=\"form-control\"\n            name=\"password\"\n          />\n          or\n          <a routerLink=\"/register\">Register Here</a>\n        </fieldset>\n        <fieldset class=\"form-group text-right\">\n          <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" />\n          <a routerLink=\"/home\">\n            <input type=\"button\" class=\"btn btn-warning\" value=\"Cancel\" />\n          </a>\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col col-md-12\">\n      <h1 class=\"display-2\"><strong>Error: 404 </strong> - Page Not found</h1>\n      <a routerLink=\"/home\" class=\"btn btn-primary btn-lg\"><i class=\"fas fa-undo-alt fa-lg\"></i>Return Home</a>\n      <br>\n    </div>\n    <br>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/pages/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/project/project.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/project/project.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/project/project.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/project/project.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <br>\n          <div class=\"jumbotron\">\n       \n              <div>\n              <h1>Projects</h1>\n              <br>    \n              <!-- Created a table to display one side image of application then the other side the description. Having them switch around\n              the website a more pleasing aesthetics -->\n              <h4 class=\"display-bold\"> Workers hub</h4>\n              <br>\n                  <div class=\"row\">\n                    <div class=\"col-9\">\n                     <p>\n                        Workers Hub is an android employee management application that my colleagues and I had developed to help employees stay connected to work and managers efficiently create and post timetables. The manager could login post or delete any content he wanted under news feed. The manager can also create timetable while view employee times and post it as well. Employee can login and view news feed and timetable. If there was an issue, they can message straight through the application.\n                     </p> \n                    </div>\n                  \n                      <div class=\"col-3-centre\">\n                       <img src=\"assets/images/Workershub.PNG\" class=\"img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}\" alt=\"\">\n                      </div>\n                  </div>\n             \n              <br>\n              <br>\n                \n              <h4 class=\"display-bold\"> Toronto Meet-Ups</h4>\n              <br>\n                  <div class=\"row\">\n                    \n                      <div class=\"col-3\">\n                       <img src=\"assets/images/TorontoMeetUp.PNG\" class=\"img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}\" alt=\"\">\n                      </div>\n      \n                      <div class=\"col-8\">\n                     <p>\n                         Toronto Meet-Up is another android application a group of colleagues and I had built. This was a mapping application intended to get the address of a pre-set meetup location and was able to get the address sent to their phone via text. They could also download the address and an image of the map, as well as check out the location’s website.\n                     </p> \n                    </div>\n                  \n                  </div>\n             \n              <br>\n              <br>\n                 \n              <h4 class=\"display-bold\"> OKP Car Shop API</h4>\n              <br>\n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                     <p>\n                       An API that a colleague and I had developed for handling the backend of an online car parts store. The purpose of this API was so that dealers can post their products on this database and users would be able to look through the website which would be connected to the API to buy the product. This would create a reliable network for buying OEM parts and giving best price since there are not any middle parties.\n                     </p> \n                    </div>\n                  \n                      <div class=\"col-4-centre\">\n                       <img src=\"assets/images/API_pres.jpg\" class=\"img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}\" alt=\"\">\n                      </div>\n                  </div>\n             \n             \n              \n      \n          </div>\n      </div>\n      "

/***/ }),

/***/ "./src/app/pages/project/project.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/project/project.component.ts ***!
  \****************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProjectComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProjectComponent, _super);
    function ProjectComponent(route) {
        return _super.call(this, route) || this;
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/pages/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/pages/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProjectComponent);
    return ProjectComponent;
}(src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"row\">\n    <div class=\"col-md-offset-4 col-md-4\">\n      <h1>Please Register</h1>\n      <form autocomplete=\"off\" (submit)=\"onRegisterSubmit()\">\n        <fieldset class=\"form-group\">\n          <label for=\"username\">Username:</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            [(ngModel)]=\"user.username\"\n            name=\"username\"\n            placeholder=\"Enter Username\"\n            id=\"username\"\n            required\n            autocomplete=\"off\"\n          />\n        </fieldset>\n        <fieldset class=\"form-group\">\n          <label for=\"password\">Password:</label>\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            [(ngModel)]=\"user.password\"\n            name=\"password\"\n            placeholder=\"Enter Password\"\n            id=\"password\"\n            required\n            autocomplete=\"off\"\n          />\n        </fieldset>\n        <fieldset class=\"form-group\">\n          <label for=\"email\">Email:</label>\n          <input\n            type=\"email\"\n            class=\"form-control\"\n            [(ngModel)]=\"user.email\"\n            name=\"email\"\n            placeholder=\"Enter Email\"\n            id=\"email\"\n            required\n            autocomplete=\"off\"\n          />\n        </fieldset>\n        <fieldset class=\"form-group\">\n          <label for=\"displayName\">Dispaly Name:</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            [(ngModel)]=\"user.displayName\"\n            name=\"displayName\"\n            placeholder=\"Enter Display Name\"\n            id=\"displayName\"\n            required\n            autocomplete=\"off\"\n          />\n        </fieldset>\n        <fieldset class=\"form-group text-right\">\n          <input type=\"submit\" class=\"btn btn-success\" value=\"Register\" />\n          <a routerLink=\"/home\">\n            <input type=\"button\" class=\"btn btn-warning\" value=\"Cancel\" />\n          </a>\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        // register the user
        this.authService.registerUser(this.user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("You are now registered and can log in", {
                    cssClass: "alert-success",
                    timeOut: 3000
                });
                _this.router.navigate(["/login"]);
            }
            else {
                _this.flashMessage.show("A registration Error occurred", {
                    cssClass: "alert-danger",
                    timeOut: 3000
                });
                _this.router.navigate(["/register"]);
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/services/services.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/services/services.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/services/services.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/services/services.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <br>\r\n          <div class=\"jumbotron\">\r\n      \r\n       \r\n              <div>\r\n              <h3>Services</h3>\r\n              </div>\r\n              <br>\r\n      <!-- Creates table with one side lauguages then the other side an image of codeing for viewers to relate to -->\r\n      <div class=\"row\">\r\n          <div class=\"col-8\">      \r\n                  <table style=\"width:90%\">\r\n              <tr>\r\n                  <th>Languages</th>\r\n                  \r\n              </tr>\r\n              <tr>\r\n                  <td>C#, Java, Unix, Phython, ASP.Net</td>\r\n              </tr>\r\n              <tr>\r\n                  <td>HTML, CSS, JavaScript</td>\r\n              </tr>\r\n              <tr>\r\n                  <td> SQL, SQLite, PLSQL</td>\r\n              </tr>\r\n              <tr>\r\n                  <td> Express Js, Node Js, Angular</td>\r\n              </tr>\r\n      \r\n              <br>\r\n              </table>\r\n          </div>\r\n          <div class=\"col-4\">\r\n          <br>\r\n          <br>\r\n          <img src=\"assets/images/coding.jpg\" class=\"img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}\" alt=\"\">\r\n          </div>\r\n      </div>\r\n              <br>\r\n              <br>\r\n              <!-- Creates table with one side services then the other side an image of development for viewers to relate to -->\r\n      <div class=\"row\">\r\n          <div class=\"col-8\"> \r\n              <table style=\"width:90%\">\r\n              <tr>\r\n                  <th class=\"display-bold\">Services</th>\r\n              </tr>\r\n              <tr>\r\n                  <td>Webdesign</td>\r\n              </tr>\r\n              <tr>\r\n                  <td>Android Developer</td>\r\n              </tr>\r\n              <tr>\r\n                  <td>Database Managaer</td>\r\n              </tr>\r\n              <tr>\r\n                  <td>Client Care</td>\r\n              </tr>\r\n              <tr>\r\n                  <td>Software Developer</td>\r\n              </tr>\r\n              </table>\r\n          </div>\r\n          <div class=\"col-4\">\r\n          <br>\r\n          <br>\r\n          <img src=\"assets/images/dev.jpg\" class=\"img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}\" alt=\"\">\r\n          </div>\r\n      </div>\r\n      \r\n      \r\n          </div>\r\n      </div>\r\n      \r\n      "

/***/ }),

/***/ "./src/app/pages/services/services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ServicesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ServicesComponent, _super);
    function ServicesComponent(route) {
        return _super.call(this, route) || this;
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/pages/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/pages/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ServicesComponent);
    return ServicesComponent;
}(src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/partials/base-page/base-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/partials/base-page/base-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2Jhc2UtcGFnZS9iYXNlLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partials/base-page/base-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/partials/base-page/base-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1 class=\"display-4\">Welcome to {{ title }}</h1>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/partials/base-page/base-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/partials/base-page/base-page.component.ts ***!
  \***********************************************************/
/*! exports provided: BasePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePageComponent", function() { return BasePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BasePageComponent = /** @class */ (function () {
    function BasePageComponent(routes) {
        this.routes = routes;
    }
    BasePageComponent.prototype.ngOnInit = function () {
        this.title = this.routes.snapshot.data.title;
    };
    BasePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-base-page',
            template: __webpack_require__(/*! ./base-page.component.html */ "./src/app/partials/base-page/base-page.component.html"),
            styles: [__webpack_require__(/*! ./base-page.component.css */ "./src/app/partials/base-page/base-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BasePageComponent);
    return BasePageComponent;
}());



/***/ }),

/***/ "./src/app/partials/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <!-- <div class=\"navbar fixed-bottom-dark bg-dark\">\n      <h5>&copy; Copyright 2019. All Rights Reserved</h5>\n    </div> -->\n\n    <nav class=\"navbar fixed-bottom-dark navbar-expand-lg navbar-dark bg-dark\">\n        <p style=\"color: white;\">&copy;Copyright {{year}}. All Rights Reserved</p>\n       </nav>\n \n    \n\n"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        var date = new Date();
        this.year = date.getFullYear();
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/partials/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/partials/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/partials/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partials/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/\">\n    <img src=\"assets/images/KCU_logo.png\" alt=\"\"\n  /></a>\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\"\n          ><i class=\"fa fa-lg fa-home\"></i> Home\n          <span class=\"sr-only\">(current)</span></a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/about\"\n          ><i class=\"fa fa-info-circle\"></i> About</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/project\"\n          ><i class=\"fa fa-code\" aria-hidden=\"true\"></i> Projects</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/services\"\n          ><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i> Services</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/education\"\n          ><i class=\"fa fa-lg fa-book\"></i> Education</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/contact\"\n          ><i class=\"fa fa-lg fa-phone\"></i> Contact</a\n        >\n      </li>\n\n      <!--  <li class=\"navbar-text\"><i class=\"fa fa-user\"></i>\n              Welcome, <%= displayName %> </li>\n              -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/logout\"\n          ><i class=\"fas fa-lg fa-sign-out\"></i> Logout</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/login\"\n          ><i class=\"fas fa-lg fa-sign-in\"></i> Login</a\n        >\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/partials/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/partials/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/partials/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");





var AuthService = /** @class */ (function () {
    function AuthService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
        this.endpoint = "http://localhost:3000/api/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Access-Control-All-Origin": "*",
                "Access-Control-Allows-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            })
        };
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.endpoint + "register", user, this.httpOptions);
    };
    AuthService.prototype.authenticateUser = function (user) {
        return this.http.post(this.endpoint + "login", user, this.httpOptions);
    };
    AuthService.prototype.storeUserDate = function (token, user) {
        localStorage.setItem("id_token", "Bearer" + token);
        localStorage.setItem("user", JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        return this.http.get(this.endpoint + "logout", this.httpOptions);
    };
    AuthService.prototype.loggedIn = function () {
        return !this.jwtService.isTokenExpired(this.authToken);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/task-list.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/task-list.service.ts ***!
  \***********************************************/
/*! exports provided: TaskListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListService", function() { return TaskListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TaskListService = /** @class */ (function () {
    function TaskListService(http) {
        this.http = http;
        this.endpoint = "http://localhost:3000/api/task-list/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Access-Control-All-Origin": "*",
                "Access-Control-Allows-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            })
        };
    }
    TaskListService.prototype.getList = function () {
        return this.http.get(this.endpoint, this.httpOptions);
    };
    TaskListService.prototype.getTask = function (task) {
        return this.http.post(this.endpoint + "edit/" + task._id, this.httpOptions);
    };
    TaskListService.prototype.addTask = function (task) {
        return this.http.post(this.endpoint + "add", this.httpOptions);
    };
    TaskListService.prototype.editTask = function (task) {
        return this.http.post(this.endpoint + "edit/" + task._id, task, this.httpOptions);
    };
    TaskListService.prototype.deleteTask = function (task) {
        return this.http.get(this.endpoint + "delete/" + task._id, this.httpOptions);
    };
    TaskListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskListService);
    return TaskListService;
}());



/***/ }),

/***/ "./src/app/task/task-delete/task-delete.component.css":
/*!************************************************************!*\
  !*** ./src/app/task/task-delete/task-delete.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdGFzay1kZWxldGUvdGFzay1kZWxldGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/task/task-delete/task-delete.component.html":
/*!*************************************************************!*\
  !*** ./src/app/task/task-delete/task-delete.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/task/task-delete/task-delete.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/task/task-delete/task-delete.component.ts ***!
  \***********************************************************/
/*! exports provided: TaskDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDeleteComponent", function() { return TaskDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TaskDeleteComponent = /** @class */ (function () {
    function TaskDeleteComponent() {
    }
    TaskDeleteComponent.prototype.ngOnInit = function () {
    };
    TaskDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-delete',
            template: __webpack_require__(/*! ./task-delete.component.html */ "./src/app/task/task-delete/task-delete.component.html"),
            styles: [__webpack_require__(/*! ./task-delete.component.css */ "./src/app/task/task-delete/task-delete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TaskDeleteComponent);
    return TaskDeleteComponent;
}());



/***/ }),

/***/ "./src/app/task/task-details/task-details.component.css":
/*!**************************************************************!*\
  !*** ./src/app/task/task-details/task-details.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdGFzay1kZXRhaWxzL3Rhc2stZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/task/task-details/task-details.component.html":
/*!***************************************************************!*\
  !*** ./src/app/task/task-details/task-details.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br />\n  <div class=\"jumbotron\" id=\"bodycolour\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-offset-3 col-md-6\">\n          <h1>{{ title }}</h1>\n\n          <form class=\"form\" (submit)=\"onContactDetailsSubmit()\">\n            <div class=\"form-group\">\n              <label for=\"NameTextField\">Name:</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"NameTextField\"\n                name=\"Name\"\n                [(ngModel)]=\"ToDoList.Name\"\n                value=\"{{ ToDoList.Name }}\"\n                required\n              />\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"TaskNameTextField\">Task Name:</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"TaskNameTextField\"\n                placeholder=\"\"\n                name=\"task\"\n                [(ngModel)]=\"ToDoList.task\"\n                value=\"{{ ToDoList.task }}\"\n                required\n              />\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"DescriptionTextField\">Description:</label>\n              <textarea\n                type=\"textarea\"\n                class=\"form-control\"\n                id=\"DescriptionTextField\"\n                rows=\"7\"\n                name=\"Description\"\n                [(ngModel)]=\"ToDoList.Description\"\n                value=\"\"\n                required\n                >{{ ToDoList.Description }}</textarea\n              >\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"DateTextField\">Date:</label>\n              <input\n                type=\"date\"\n                class=\"form-control\"\n                id=\"DateTextField\"\n                placeholder=\"Enter Age\"\n                name=\"Due_date\"\n                [(ngModel)]=\"ToDoList.Due_Date\"\n                value=\"{{ ToDoList.Due_Date }}\"\n                required\n              />\n            </div>\n            <div>\n              <button type=\"submit\" class=\"btn btn-primary\">\n                <i class=\"fas fa-edit\"></i> {{ title }}\n              </button>\n              <a routerLink=\"/contact/contact-list\" class=\"btn btn-warning\">\n                <i class=\"fas fa-undo\"></i> Cancel</a\n              >\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/task/task-details/task-details.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/task/task-details/task-details.component.ts ***!
  \*************************************************************/
/*! exports provided: TaskDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailsComponent", function() { return TaskDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_task_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task-list.service */ "./src/app/services/task-list.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/task */ "./src/app/models/task.ts");






var TaskDetailsComponent = /** @class */ (function () {
    function TaskDetailsComponent(activatedRoute, flashMessage, taskListService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.taskListService = taskListService;
        this.router = router;
    }
    TaskDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.activatedRoute.snapshot.data.title;
        this.Task = new src_app_models_task__WEBPACK_IMPORTED_MODULE_5__["ToDoList"]();
        this.activatedRoute.params.subscribe(function (params) {
            _this.Task._id = params._idl;
        });
        if (this.title === "Edit Task") {
            this.getTask(this.Task);
        }
    };
    TaskDetailsComponent.prototype.getTask = function (task) {
        var _this = this;
        this.taskListService.getTask(task).subscribe(function (data) {
            _this.Task = data.task;
        });
    };
    TaskDetailsComponent.prototype.onDetailsPageSubmit = function () {
        var _this = this;
        switch (this.title) {
            case "Add Task":
                this.taskListService.addTask(this.Task).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show(data.msg, {
                            ccsClass: "alert-success",
                            timeout: 3000
                        });
                        _this.router.navigate(["/task/task-list"]);
                    }
                    else {
                        _this.flashMessage.show("Add Task Failed", {
                            ccsClass: "alert-danger",
                            timeout: 3000
                        });
                        _this.router.navigate(["/task/task-list"]);
                    }
                });
                break;
            case "Edit Task":
                this.taskListService.editTask(this.Task).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show(data.msg, {
                            ccsClass: "alert-success",
                            timeout: 3000
                        });
                        _this.router.navigate(["/task/task-list"]);
                    }
                    else {
                        _this.flashMessage.show("Edit Task Failed", {
                            ccsClass: "alert-danger",
                            timeout: 3000
                        });
                    }
                });
                break;
        }
    };
    TaskDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-task-details",
            template: __webpack_require__(/*! ./task-details.component.html */ "./src/app/task/task-details/task-details.component.html"),
            styles: [__webpack_require__(/*! ./task-details.component.css */ "./src/app/task/task-details/task-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            src_app_services_task_list_service__WEBPACK_IMPORTED_MODULE_2__["TaskListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TaskDetailsComponent);
    return TaskDetailsComponent;
}());



/***/ }),

/***/ "./src/app/task/task-list/task-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/task/task-list/task-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdGFzay1saXN0L3Rhc2stbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/task/task-list/task-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/task/task-list/task-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br />\n  <div class=\"jumbotron\">\n    <div>\n      <div class=\"row\">\n        <div class=\"col-md-offset3 col-md-6\">\n          <h3>Task List</h3>\n          <br />\n          <a\n            class=\"btn btn-primary\"\n            routerLink=\"/task/task-list/add\"\n            role=\"button\"\n          >\n            <i class=\"fa fa-plus-circle\"></i>Add Task</a\n          >\n          <br />\n          <table class=\"table table-bordered table-striped table-hover\">\n            <!--Table Header Row-->\n            <tr>\n              <th class=\"text-center\">ID:</th>\n              <th class=\"text-center\">Person Name:</th>\n              <th class=\"text-center\">Task Name:</th>\n              <th class=\"text-center\">Description:</th>\n              <th class=\"text-center\">End Date:</th>\n              <th class=\"text-center\"></th>\n              <th class=\"text-center\"></th>\n\n              <!--Repeatable Rows for data-->\n            </tr>\n\n            <tr *ngFor=\"let task of tasks\">\n              <td class=\"text-centre\">{{ task._id }}</td>\n              <td class=\"text-centre\">{{ task.Name }}</td>\n              <td class=\"text-centre\">{{ task.task }}</td>\n              <td class=\"text-centre\">{{ task.Description }}</td>\n              <td class=\"text-centre\">{{ task.Due_Date }}</td>\n              <td class=\"text-centre\">\n                <a\n                  routerLink=\"/task/task-list/edit/{{ task._id }}\"\n                  class=\"btn btn-primary\"\n                  ><i class=\"fa fa-pencil\">Edit</i>\n                </a>\n              </td>\n\n              <td class=\"text-centre\">\n                <a\n                  routerLink=\"/task/task-list/delete/{{ task._id }}\"\n                  class=\"btn btn-danger\"\n                  ><i class=\"fa fa-trash\">Delete</i>\n                </a>\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/task/task-list/task-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/task/task-list/task-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_task_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task-list.service */ "./src/app/services/task-list.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(taskListService, flashMessage, router) {
        this.taskListService = taskListService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.tasks = new Array();
        this.displayTaskList();
    };
    TaskListComponent.prototype.displayTaskList = function () {
        var _this = this;
        this.taskListService.getList().subscribe(function (data) {
            if (data.success) {
                console.log(data);
                _this.tasks = data.ToDoList;
            }
            else {
                _this.flashMessage.show("User must be logged-in", {
                    cssClass: "Alert Danger",
                    timeOut: 3000
                });
            }
        });
    };
    TaskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-task-list",
            template: __webpack_require__(/*! ./task-list.component.html */ "./src/app/task/task-list/task-list.component.html"),
            styles: [__webpack_require__(/*! ./task-list.component.css */ "./src/app/task/task-list/task-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_task_list_service__WEBPACK_IMPORTED_MODULE_2__["TaskListService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kapilan\Desktop\COMP308_Assignment2\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map