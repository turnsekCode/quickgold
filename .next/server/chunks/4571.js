exports.id = 4571;
exports.ids = [4571];
exports.modules = {

/***/ 9698:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorBannerWallapop": "bannerWallapop_contenedorBannerWallapop__leBAV",
	"bannerWallapopDesktop": "bannerWallapop_bannerWallapopDesktop__RTGQa"
};


/***/ }),

/***/ 9657:
/***/ ((module) => {

// Exports
module.exports = {
	"botonLlamar": "botonLamarFijo_botonLlamar__ywd7X"
};


/***/ }),

/***/ 9911:
/***/ ((module) => {

// Exports
module.exports = {
	"botonLlamar": "botonesLlamar_botonLlamar__c3u_8",
	"botonWhatsapp": "botonesLlamar_botonWhatsapp__2CULg",
	"contenedorBotones": "botonesLlamar_contenedorBotones__oTO56"
};


/***/ }),

/***/ 3428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bannerWallapop_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9698);
/* harmony import */ var _bannerWallapop_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bannerWallapop_module_css__WEBPACK_IMPORTED_MODULE_2__);



const BannerWallapop = ({ ciudad  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_bannerWallapop_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorBannerWallapop),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            target: "_blank",
            href: ciudad?.acf?.url_del_banner_wallapop,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                loading: "lazy",
                className: (_bannerWallapop_module_css__WEBPACK_IMPORTED_MODULE_2___default().bannerWallapopDesktop),
                src: ciudad?.acf?.imagen_del_banner_wallapop,
                alt: "Banner tienda"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerWallapop);


/***/ }),

/***/ 7186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _botonLamarFijo_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9657);
/* harmony import */ var _botonLamarFijo_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_botonLamarFijo_module_css__WEBPACK_IMPORTED_MODULE_2__);



const BotonLamarFijo = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_botonLamarFijo_module_css__WEBPACK_IMPORTED_MODULE_2___default().botonLlamar),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            title: "Tel\xe9fono",
            href: "tel:900373629",
            children: "LLAMA GRATIS"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BotonLamarFijo);


/***/ }),

/***/ 2911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _botonesLlamar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9911);
/* harmony import */ var _botonesLlamar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_botonesLlamar_module_css__WEBPACK_IMPORTED_MODULE_2__);



const BotonesLlamar = ({ ciudad  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_botonesLlamar_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorBotones),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: (_botonesLlamar_module_css__WEBPACK_IMPORTED_MODULE_2___default().botonLlamar),
                href: `tel:${ciudad?.acf?.telefono}`,
                children: "LLAMAR"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: (_botonesLlamar_module_css__WEBPACK_IMPORTED_MODULE_2___default().botonWhatsapp),
                target: "_blank",
                href: `https://wa.me/+34${ciudad?.acf?.mobile?.replace(/\s+/g, "")}`,
                children: "WHATSAPP"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BotonesLlamar);


/***/ })

};
;