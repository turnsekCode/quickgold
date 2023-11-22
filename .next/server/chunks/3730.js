exports.id = 3730;
exports.ids = [3730];
exports.modules = {

/***/ 8410:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSelector": "SelectorCiudades_contenedorSelector__3WJdv",
	"contenedorSelectorUl": "SelectorCiudades_contenedorSelectorUl__LJDct",
	"contenedorSelectorUlActivo": "SelectorCiudades_contenedorSelectorUlActivo__beYh_",
	"contenedorSelectorListado": "SelectorCiudades_contenedorSelectorListado__jd_aw"
};


/***/ }),

/***/ 8874:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__EtNt2",
	"contenedorMapaVisible": "Home_contenedorMapaVisible__piXgh",
	"contenedorSeccionUnoDos": "Home_contenedorSeccionUnoDos__pegsP",
	"contenedorMapaVisibleCasaCambio": "Home_contenedorMapaVisibleCasaCambio__A5Ti8",
	"contenedorBannerVisible": "Home_contenedorBannerVisible__opy6k"
};


/***/ }),

/***/ 5709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SelectorCiudades_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8410);
/* harmony import */ var _SelectorCiudades_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SelectorCiudades_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4845);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_2__);




const SelectorCiudadesServicio = ({ listadoCiudadesServicios  })=>{
    const listadoCiudades = listadoCiudadesServicios?.arrayMarker;
    const [selectOpen, setSelectOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_SelectorCiudades_module_css__WEBPACK_IMPORTED_MODULE_3___default().contenedorSelector),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                onClick: ()=>{
                    setSelectOpen(!selectOpen);
                },
                children: [
                    "Selecciona tienda ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_2___default()), {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: selectOpen ? `${(_SelectorCiudades_module_css__WEBPACK_IMPORTED_MODULE_3___default().contenedorSelectorUl)} ${(_SelectorCiudades_module_css__WEBPACK_IMPORTED_MODULE_3___default().contenedorSelectorUlActivo)}` : `${(_SelectorCiudades_module_css__WEBPACK_IMPORTED_MODULE_3___default().contenedorSelectorUl)}`,
                children: listadoCiudades?.map((ciudad, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        onClick: ()=>{
                            setSelectOpen(false);
                        },
                        href: ciudad.url,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: (_SelectorCiudades_module_css__WEBPACK_IMPORTED_MODULE_3___default().contenedorSelectorListado),
                            children: ciudad.ciudad
                        })
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectorCiudadesServicio);


/***/ })

};
;