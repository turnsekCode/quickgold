exports.id = 7404;
exports.ids = [7404];
exports.modules = {

/***/ 6562:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSeccionUno": "seccionUno_contenedorSeccionUno__MtPgj",
	"bloqueDer": "seccionUno_bloqueDer__csCt7",
	"linea": "seccionUno_linea__sKg3N"
};


/***/ }),

/***/ 7999:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSeccionDos": "seccionDos_contenedorSeccionDos__33bX9"
};


/***/ }),

/***/ 6783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _seccionUno_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6562);
/* harmony import */ var _seccionUno_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_2__);



//import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
//import Image from "next/image";
//import FsLightbox from "fslightbox-react";
const SeccionUno = ({ ciudad  })=>{
    //const [toggler, setToggler] = useState(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
        className: (_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorSeccionUno),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_2___default().bloqueDer),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: ciudad?.acf?.titulo_del_h1
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeccionUno);


/***/ }),

/***/ 6817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _componentes_AccordionServicios_AccordionServicios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7215);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _seccionDos_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7999);
/* harmony import */ var _seccionDos_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_seccionDos_module_css__WEBPACK_IMPORTED_MODULE_3__);




const SeccionDos = ({ ciudad  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
        className: (_seccionDos_module_css__WEBPACK_IMPORTED_MODULE_3___default().contenedorSeccionDos),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_AccordionServicios_AccordionServicios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            ciudad: ciudad
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeccionDos);


/***/ })

};
;