exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 9605:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorBannerUno": "bannerPromoDos_contenedorBannerUno__xsmnM",
	"bannerDesktop": "bannerPromoDos_bannerDesktop__4ie_G",
	"bannerMobil": "bannerPromoDos_bannerMobil__potrp"
};


/***/ }),

/***/ 9086:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorBannerUno": "bannerPromoUno_contenedorBannerUno__DQlbR",
	"bannerDesktop": "bannerPromoUno_bannerDesktop__Bxbu8",
	"bannerMobil": "bannerPromoUno_bannerMobil__t7iWc"
};


/***/ }),

/***/ 7967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bannerPromoDos_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9605);
/* harmony import */ var _bannerPromoDos_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bannerPromoDos_module_css__WEBPACK_IMPORTED_MODULE_2__);



const BannerPromoGeneral = ({ general  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_bannerPromoDos_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorBannerUno),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: (_bannerPromoDos_module_css__WEBPACK_IMPORTED_MODULE_2___default().bannerDesktop),
                src: general?.acf?.imagen_general_desktop,
                alt: "Banner general"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: (_bannerPromoDos_module_css__WEBPACK_IMPORTED_MODULE_2___default().bannerMobil),
                src: general?.acf?.imagen_general_mobil,
                alt: "Banner general mobil"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerPromoGeneral);


/***/ }),

/***/ 2810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bannerPromoUno_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9086);
/* harmony import */ var _bannerPromoUno_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bannerPromoUno_module_css__WEBPACK_IMPORTED_MODULE_2__);



const BannerPromoTiendas = ({ ciudad  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_bannerPromoUno_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorBannerUno),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: (_bannerPromoUno_module_css__WEBPACK_IMPORTED_MODULE_2___default().bannerDesktop),
                src: ciudad?.acf?.foto_1,
                alt: "Banner tienda"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: (_bannerPromoUno_module_css__WEBPACK_IMPORTED_MODULE_2___default().bannerMobil),
                src: ciudad?.acf?.foto_2,
                alt: "Banner tienda mobil"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerPromoTiendas);


/***/ })

};
;