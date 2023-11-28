exports.id = 6727;
exports.ids = [6727];
exports.modules = {

/***/ 5923:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSectionUno": "section_uno_contenedorSectionUno__20XvF",
	"linea": "section_uno_linea__0lcC2",
	"bloqueIzq": "section_uno_bloqueIzq__QlI3k",
	"bloqueDer": "section_uno_bloqueDer__2R8Xy",
	"madridMobil": "section_uno_madridMobil__VmgRw",
	"botones": "section_uno_botones__L1FKI"
};


/***/ }),

/***/ 7707:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSectionDos": "section_2_contenedorSectionDos__uiBaz",
	"bloqueIzq": "section_2_bloqueIzq__f8APY",
	"bloqueIzqTitulo": "section_2_bloqueIzqTitulo__VsOaE",
	"bloqueIzqTexto": "section_2_bloqueIzqTexto__vurnK",
	"bloqueDer": "section_2_bloqueDer___uubY",
	"ImageAdorno": "section_2_ImageAdorno__WUgu1",
	"bloqueDerUno": "section_2_bloqueDerUno__3ZdEu",
	"bloqueDerDos": "section_2_bloqueDerDos__lh9OS"
};


/***/ }),

/***/ 7720:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSectionTres": "sectionTres_contenedorSectionTres__fi_eA",
	"linea": "sectionTres_linea__4EjPX",
	"bloqueDer": "sectionTres_bloqueDer__B31y0",
	"bloqueIzq": "sectionTres_bloqueIzq__TD30s",
	"contenedorInfoTres": "sectionTres_contenedorInfoTres____VSH",
	"cards": "sectionTres_cards__EicOu"
};


/***/ }),

/***/ 1921:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSectionCuatro": "sectionCuatro_contenedorSectionCuatro__3E8i2",
	"bloqueIzq": "sectionCuatro_bloqueIzq__xfvXP"
};


/***/ }),

/***/ 9692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _section_uno_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5923);
/* harmony import */ var _section_uno_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_section_uno_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_LocationOnOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3804);
/* harmony import */ var _mui_icons_material_LocationOnOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LocationOnOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);






const Section_uno = ({ ciudad  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_section_uno_module_css__WEBPACK_IMPORTED_MODULE_5___default().contenedorSectionUno),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_section_uno_module_css__WEBPACK_IMPORTED_MODULE_5___default().bloqueIzq),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        children: [
                            ciudad?.acf?.h1_sin_la_ciudad,
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_section_uno_module_css__WEBPACK_IMPORTED_MODULE_5___default().linea),
                                children: ciudad?.acf?.ciudad
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: ciudad?.acf?.parrafo_section_uno
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_section_uno_module_css__WEBPACK_IMPORTED_MODULE_5___default().botones),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {
                                to: "contenedorMapa",
                                smooth: true,
                                offset: -110,
                                spy: true,
                                duration: 500,
                                title: "texto",
                                passive: "true",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LocationOnOutlined__WEBPACK_IMPORTED_MODULE_2___default()), {}),
                                    "encuentra tu tienda"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: `tel:${ciudad?.acf?.telefono}`,
                                title: "Tel\xe9fono",
                                children: "Llama gratis"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_section_uno_module_css__WEBPACK_IMPORTED_MODULE_5___default().bloqueDer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: `/assets/img/casa-cambio-${ciudad?.acf?.ciudad_minuscula}.webp`,
                    alt: `Cambiar Dólares a Euros ${ciudad?.acf?.ciudad}`,
                    className: (_section_uno_module_css__WEBPACK_IMPORTED_MODULE_5___default().Image),
                    width: 480,
                    height: 390,
                    priority: true
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section_uno);


/***/ }),

/***/ 5871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _section_2_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7707);
/* harmony import */ var _section_2_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_section_2_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _componentes_ConversorDivisa_ConversorDivisa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7239);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);





const SectionDos = ({ ciudad , comprar  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_section_2_module_css__WEBPACK_IMPORTED_MODULE_4___default().contenedorSectionDos),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_section_2_module_css__WEBPACK_IMPORTED_MODULE_4___default().bloqueIzq),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_section_2_module_css__WEBPACK_IMPORTED_MODULE_4___default().bloqueIzqTitulo),
                        children: "Cambio de divisa"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_section_2_module_css__WEBPACK_IMPORTED_MODULE_4___default().bloqueIzqTexto),
                        children: "Descubre el valor de la moneda que te interesa."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_ConversorDivisa_ConversorDivisa__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        ciudad: ciudad,
                        comprar: comprar
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_section_2_module_css__WEBPACK_IMPORTED_MODULE_4___default().bloqueDer),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_section_2_module_css__WEBPACK_IMPORTED_MODULE_4___default().bloqueDerUno),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                children: [
                                    ciudad?.acf?.texto_section_tres?.titulo_del_bloque_izq,
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_section_2_module_css__WEBPACK_IMPORTED_MODULE_4___default().linea),
                                        children: [
                                            " ",
                                            ciudad?.acf?.ciudad,
                                            "?"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            ciudad?.acf?.texto_section_tres?.texto_bloque_izq,
                                            " "
                                        ]
                                    }),
                                    ciudad?.acf?.texto_section_tres?.texto_bloque_izq_negrita
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_section_2_module_css__WEBPACK_IMPORTED_MODULE_4___default().bloqueDerDos),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: ciudad?.acf?.texto_section_tres?.titulo_bloque_der
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: ciudad?.acf?.texto_section_tres?.texto_bloque_der
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: "/assets/img/adornoCasaCambios.png",
                        alt: "Casa de Cambio",
                        className: (_section_2_module_css__WEBPACK_IMPORTED_MODULE_4___default().ImageAdorno),
                        width: 210,
                        height: 210
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionDos);


/***/ }),

/***/ 5991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sectionTres_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7720);
/* harmony import */ var _sectionTres_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sectionTres_module_css__WEBPACK_IMPORTED_MODULE_2__);



const SectionTres = ({ ciudad  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_sectionTres_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorSectionTres),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                children: [
                    ciudad?.acf?.textos_section_cuatro?.titulo_bloque_cuatro_parte_uno,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_sectionTres_module_css__WEBPACK_IMPORTED_MODULE_2___default().linea),
                        children: ciudad?.acf?.ciudad
                    }),
                    " ",
                    ciudad?.acf?.textos_section_cuatro?.titulo_bloque_cuatro_parte_dos
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_sectionTres_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorInfoTres),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_sectionTres_module_css__WEBPACK_IMPORTED_MODULE_2___default().cards),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "#1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: ciudad?.acf?.textos_section_cuatro?.texto_cuadro_uno
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_sectionTres_module_css__WEBPACK_IMPORTED_MODULE_2___default().cards),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "#2"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: ciudad?.acf?.textos_section_cuatro?.texto_cuadro_dos
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_sectionTres_module_css__WEBPACK_IMPORTED_MODULE_2___default().cards),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "#3"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: ciudad?.acf?.textos_section_cuatro?.texto_cuadro_tres
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTres);


/***/ }),

/***/ 7867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sectionCuatro_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1921);
/* harmony import */ var _sectionCuatro_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sectionCuatro_module_css__WEBPACK_IMPORTED_MODULE_2__);



const SectionCuatro = ({ ciudad  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (_sectionCuatro_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorSectionCuatro),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_sectionCuatro_module_css__WEBPACK_IMPORTED_MODULE_2___default().bloqueIzq),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    children: [
                        ciudad?.acf?.texto_section_con_imagen?.titulo_bloqueizq,
                        " ",
                        "",
                        ciudad?.acf?.ciudad
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: ciudad?.acf?.texto_section_con_imagen?.texto_bloque_izq
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionCuatro);


/***/ })

};
;