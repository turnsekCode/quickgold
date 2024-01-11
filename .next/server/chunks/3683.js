exports.id = 3683;
exports.ids = [3683];
exports.modules = {

/***/ 3825:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorBreadcrumbs": "breadcrumbs_contenedorBreadcrumbs__9IhUz",
	"breadcrumbsRaiz": "breadcrumbs_breadcrumbsRaiz__9VpIs",
	"sectionBreadcrumbs": "breadcrumbs_sectionBreadcrumbs__tqruT"
};


/***/ }),

/***/ 3683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _breadcrumbs_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3825);
/* harmony import */ var _breadcrumbs_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_breadcrumbs_module_css__WEBPACK_IMPORTED_MODULE_2__);



const Breadcrumbs = ({ raiz , tiendas , nombreCiudad , nombreTienda , ubicacionActual , urlNombreCiudad , urlNombreTienda , iconoRaiz , iconoTiendas , iconoUbiccionActual , iconotiendasDos , urlNombreServicio  })=>{
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
                    iconoRaiz,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: urlNombreServicio,
                        title: `Ir a ${tiendas}`,
                        children: tiendas
                    }),
                    iconoTiendas,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: urlNombreCiudad,
                        title: `Ir a ${nombreCiudad}`,
                        children: nombreCiudad
                    }),
                    iconoUbiccionActual,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: urlNombreTienda,
                        title: `Ir a ${nombreTienda}`,
                        children: nombreTienda
                    }),
                    iconotiendasDos
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