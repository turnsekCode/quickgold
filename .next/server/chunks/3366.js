exports.id = 3366;
exports.ids = [3366];
exports.modules = {

/***/ 9657:
/***/ ((module) => {

// Exports
module.exports = {
	"botonLlamar": "botonLamarFijo_botonLlamar__ywd7X"
};


/***/ }),

/***/ 8620:
/***/ ((module) => {

// Exports
module.exports = {
	"botonIrUrl": "selectorCiudades_botonIrUrl__Hwbic"
};


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
            href: "tel:900 373 629",
            children: "LLAMAR A 900 373 629"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BotonLamarFijo);


/***/ }),

/***/ 8100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _selectorCiudades_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8620);
/* harmony import */ var _selectorCiudades_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_selectorCiudades_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);




const SelectorCiudades = ({ listadoUrlCiudad  })=>{
    const listadoCiudades = listadoUrlCiudad?.arrayMarker;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    function IrUrl(e) {
        router.push(`/tiendas/compro-oro-${e}`);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
        className: (_selectorCiudades_module_css__WEBPACK_IMPORTED_MODULE_3___default().botonIrUrl),
        onChange: (e)=>{
            IrUrl(e.target.value);
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                children: "CONOCE EL PRECIO DEL ORO"
            }),
            listadoCiudades?.filter((url)=>url.id !== 0).map((ciudad, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                    value: ciudad.nombreMinusculas,
                    children: ciudad.nombre
                }, i))
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectorCiudades);


/***/ })

};
;