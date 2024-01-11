exports.id = 5439;
exports.ids = [5439];
exports.modules = {

/***/ 4704:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorResenasGoogle": "resenasGoogle_contenedorResenasGoogle__fjEq4",
	"contenedorSuperior": "resenasGoogle_contenedorSuperior__Ul1wH",
	"imagenGoogle": "resenasGoogle_imagenGoogle__Z_YDX",
	"nombreUsuario": "resenasGoogle_nombreUsuario__8hHXX",
	"textoInferior": "resenasGoogle_textoInferior__3Vat3",
	"img_stars": "resenasGoogle_img_stars__vulVK",
	"imgValoracion": "resenasGoogle_imgValoracion__Mdv05",
	"valoracionResenas": "resenasGoogle_valoracionResenas__FR1uU",
	"textoContenido": "resenasGoogle_textoContenido__Df_5a",
	"botonVerMas": "resenasGoogle_botonVerMas__4uIwT"
};


/***/ }),

/***/ 5439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resenasGoogle_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4704);
/* harmony import */ var _resenasGoogle_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resenasGoogle_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);




const ResenasGoogle = ({ tiendaGoogle , ciudad  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            tiendaGoogle?.result?.reviews?.map((resena, index)=>{
                if (resena.rating > 4.7) {
                    var img_valoracion = 69;
                } else if (resena.rating < 4.8 && resena.rating < 4.3) {
                    var img_valoracion = 62;
                } else if (resena.rating < 4.4 && resena.rating < 3.7) {
                    var img_valoracion = 55;
                } else if (resena.rating < 3.8 && resena.rating < 3.3) {
                    var img_valoracion = 48;
                } else if (resena.rating < 3.4 && resena.rating < 2.7) {
                    var img_valoracion = 41;
                } else if (resena.rating < 2.8 && resena.rating < 2.3) {
                    var img_valoracion = 34;
                } else if (resena.rating < 2.4 && resena.rating < 1.7) {
                    var img_valoracion = 27;
                } else if (resena.rating < 1.8 && resena.rating < 1.3) {
                    var img_valoracion = 20;
                } else if (resena.rating < 1.4 && resena.rating < 0.7) {
                    var img_valoracion = 13;
                }
                return resena.rating >= 4 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_resenasGoogle_module_css__WEBPACK_IMPORTED_MODULE_3___default().contenedorResenasGoogle),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_resenasGoogle_module_css__WEBPACK_IMPORTED_MODULE_3___default().contenedorSuperior),
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: resena.profile_photo_url,
                                    alt: "Imagen rese\xf1a google",
                                    className: (_resenasGoogle_module_css__WEBPACK_IMPORTED_MODULE_3___default().imagenResena),
                                    width: 70,
                                    height: 70,
                                    loading: "lazy"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: "/assets/img/GOOGLE.png",
                                    alt: "Imagen rese\xf1a google",
                                    className: (_resenasGoogle_module_css__WEBPACK_IMPORTED_MODULE_3___default().imagenGoogle),
                                    width: 30,
                                    height: 30
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_resenasGoogle_module_css__WEBPACK_IMPORTED_MODULE_3___default().imagenResena),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_resenasGoogle_module_css__WEBPACK_IMPORTED_MODULE_3___default().nombreUsuario),
                                            children: resena.author_name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_resenasGoogle_module_css__WEBPACK_IMPORTED_MODULE_3___default().textoInferior),
                                            children: resena.relative_time_description
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_resenasGoogle_module_css__WEBPACK_IMPORTED_MODULE_3___default().contenedorEstrellas),
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_resenasGoogle_module_css__WEBPACK_IMPORTED_MODULE_3___default().img_stars),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: {
                                            width: img_valoracion
                                        },
                                        className: (_resenasGoogle_module_css__WEBPACK_IMPORTED_MODULE_3___default().imgValoracion)
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_resenasGoogle_module_css__WEBPACK_IMPORTED_MODULE_3___default().valoracionResenas),
                                    children: resena.rating
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_resenasGoogle_module_css__WEBPACK_IMPORTED_MODULE_3___default().textoContenido),
                            children: resena.text
                        })
                    ]
                }, index) : null;
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_resenasGoogle_module_css__WEBPACK_IMPORTED_MODULE_3___default().botonVerMas),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    target: "_blank",
                    href: ciudad?.acf?.info_grupo?.enlace_resenas,
                    children: "VER M\xc1S"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResenasGoogle);


/***/ })

};
;