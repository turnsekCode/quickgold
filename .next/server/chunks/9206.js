exports.id = 9206;
exports.ids = [9206];
exports.modules = {

/***/ 4682:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorBreadcrumbs": "breadcrumbs_contenedorBreadcrumbs__SRHxF",
	"breadcrumbsRaiz": "breadcrumbs_breadcrumbsRaiz__Owrdy",
	"sectionBreadcrumbs": "breadcrumbs_sectionBreadcrumbs__YasZl"
};


/***/ }),

/***/ 9206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _breadcrumbs_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4682);
/* harmony import */ var _breadcrumbs_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_breadcrumbs_module_css__WEBPACK_IMPORTED_MODULE_2__);



const Breadcrumbs = ({ raiz , iconoRaiz , urlUbicacionActual , ubicacionActual  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_breadcrumbs_module_css__WEBPACK_IMPORTED_MODULE_2___default().sectionBreadcrumbs),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_breadcrumbs_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorBreadcrumbs),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/",
                        title: `Ir a ${raiz}`,
                        children: raiz
                    }),
                    iconoRaiz
                ]
            }),
            ubicacionActual
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumbs);


/***/ })

};
;