(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 3368:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSectionTres": "section_dos_contenedorSectionTres__hkX_t",
	"bloqueInferior": "section_dos_bloqueInferior__wfOzk",
	"bloqueInferiorCard": "section_dos_bloqueInferiorCard__Of_DA",
	"bloqueSuperior": "section_dos_bloqueSuperior__qTrTJ",
	"bloqueInferiorTexto": "section_dos_bloqueInferiorTexto__MeDpQ",
	"bloqueInferiorImagen": "section_dos_bloqueInferiorImagen__DIo5c",
	"imagenHome": "section_dos_imagenHome__zr5rT"
};


/***/ }),

/***/ 4708:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSectionUnoMargen": "section_uno_contenedorSectionUnoMargen__eEV9W",
	"contenedorSectionUno": "section_uno_contenedorSectionUno__SDv1T"
};


/***/ }),

/***/ 5790:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSectionTres": "section_tres_contenedorSectionTres__mtTfp",
	"contenedorSectionTresMargen": "section_tres_contenedorSectionTresMargen__J_bdg"
};


/***/ }),

/***/ 8869:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSelect": "selectCiudadHome_contenedorSelect__rlHsj",
	"select": "selectCiudadHome_select__mJNsy"
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
	"contenedorBannerVisible": "Home_contenedorBannerVisible__opy6k",
	"contenedorSecciones": "Home_contenedorSecciones__bMVep"
};


/***/ }),

/***/ 1702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Section_2_Section_dos)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/componentes/ComponentesHome/Section_2/section_dos.module.css
var section_dos_module = __webpack_require__(3368);
var section_dos_module_default = /*#__PURE__*/__webpack_require__.n(section_dos_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/componentes/SelectCiudadHome/selectCiudadHome.module.css
var selectCiudadHome_module = __webpack_require__(8869);
var selectCiudadHome_module_default = /*#__PURE__*/__webpack_require__.n(selectCiudadHome_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/componentes/SelectCiudadHome/SelectCiudadHome.js




const SelectCiudadHome = ({ listadoUrlCiudad  })=>{
    const listadoCiudades = listadoUrlCiudad?.arrayMarker;
    const router = (0,router_.useRouter)();
    function IrUrl(e) {
        router.push(`/tiendas/compro-oro-${e}`);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (selectCiudadHome_module_default()).contenedorSelect,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
            "aria-label": "quickgold",
            onChange: (e)=>{
                IrUrl(e.target.value);
            },
            className: (selectCiudadHome_module_default()).select,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                    children: "Selecciona Ciudad"
                }),
                listadoCiudades?.filter((url)=>url.id !== 0).map((ciudad, i)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: ciudad.nombreMinusculas,
                        children: ciudad.nombre
                    }, i))
            ]
        })
    });
};
/* harmony default export */ const SelectCiudadHome_SelectCiudadHome = (SelectCiudadHome);

;// CONCATENATED MODULE: ./src/componentes/ComponentesHome/Section_2/Section_dos.js






const Section_dos = ({ listadoUrlCiudad  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (section_dos_module_default()).contenedorSectionTres,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (section_dos_module_default()).bloqueSuperior,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "Nuestros Servicios"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (section_dos_module_default()).bloqueInferior,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (section_dos_module_default()).bloqueInferiorCard,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (section_dos_module_default()).bloqueInferiorImagen,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/compro-oro",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/assets/img/imagenComproOroHome.png",
                                            alt: "COMPRA DE ORO",
                                            className: (section_dos_module_default()).imagenHome,
                                            width: 257,
                                            height: 257
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SelectCiudadHome_SelectCiudadHome, {
                                        listadoUrlCiudad: listadoUrlCiudad
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (section_dos_module_default()).bloqueInferiorTexto,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/compro-oro",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "COMPRA DE ORO"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "En quickgold encontrar\xe1s nuestro principal servicio de Compro Oro, con el que tasamos todas las piezas a la vista para garantizarte una operaci\xf3n segura y un precio justo para todo el oro que quieras vender. No importa si est\xe1n desemparejadas o rotas.Accede a toda la informaci\xf3n para vender oro."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (section_dos_module_default()).bloqueInferiorCard,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (section_dos_module_default()).bloqueInferiorImagen,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/empeno-de-joyas",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/assets/img/imagenEmpenoJoyasHome.png",
                                            alt: "EMPE\xd1O DE JOYAS",
                                            className: (section_dos_module_default()).imagenHome,
                                            width: 257,
                                            height: 257
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SelectCiudadHome_SelectCiudadHome, {
                                        listadoUrlCiudad: listadoUrlCiudad
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (section_dos_module_default()).bloqueInferiorTexto,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/empeno-de-joyas",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "EMPE\xd1O DE JOYAS"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Tr\xe1enos tus joyas y emp\xe9\xf1alas al momento con las mejores condiciones adaptadas a ti. Podr\xe1s recuperarlas c\xf3modamente y con total facilidad. Disfruta de empe\xf1os sin intereses durante el primer mes y obt\xe9n el dinero que necesitas al instante.Inf\xf3rmate aqu\xed de c\xf3mo tasamos tus joyas."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (section_dos_module_default()).bloqueInferiorCard,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (section_dos_module_default()).bloqueInferiorImagen,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/cambio-divisas",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/assets/img/imagenDivisaHome.png",
                                            alt: "CAMBIO DIVISAS ",
                                            className: (section_dos_module_default()).imagenHome,
                                            width: 257,
                                            height: 257
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SelectCiudadHome_SelectCiudadHome, {
                                        listadoUrlCiudad: listadoUrlCiudad
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (section_dos_module_default()).bloqueInferiorTexto,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/cambio-divisas",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "CAMBIO DIVISAS"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Realiza en quickgold tu cambio de moneda extranjera sin comisiones para siempre. M\xe1s de 25 divisas disponibles al instante para que puedas fijar tu precio de cambio. Consulta la cotizaci\xf3n de la moneda que quieras con nuestro conversor online.Inf\xf3rmate sobre nuestro servicio de cambio de divisa."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (section_dos_module_default()).bloqueInferiorCard,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (section_dos_module_default()).bloqueInferiorImagen,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/compro-plata",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/assets/img/imagenComproPlataHome.png",
                                            alt: "COMPRA DE PLATA ",
                                            className: (section_dos_module_default()).imagenHome,
                                            width: 257,
                                            height: 257
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SelectCiudadHome_SelectCiudadHome, {
                                        listadoUrlCiudad: listadoUrlCiudad
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (section_dos_module_default()).bloqueInferiorTexto,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/compro-plata",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: "COMPRA DE PLATA"
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (section_dos_module_default()).bloqueInferiorCard,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (section_dos_module_default()).bloqueInferiorImagen,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/joyeria-de-ocasion",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/assets/img/imagenJoyeriaHome.png",
                                            alt: "VENTA DE JOYER\xcdA ",
                                            className: (section_dos_module_default()).imagenHome,
                                            width: 257,
                                            height: 257
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SelectCiudadHome_SelectCiudadHome, {
                                        listadoUrlCiudad: listadoUrlCiudad
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (section_dos_module_default()).bloqueInferiorTexto,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/empeno-de-joyas",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: "VENTA DE JOYER\xcdA"
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (section_dos_module_default()).bloqueInferiorCard,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (section_dos_module_default()).bloqueInferiorImagen,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/invertir-en-oro",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/assets/img/imagenInversionHome.png",
                                            alt: "ORO DE INVERSI\xd3N",
                                            className: (section_dos_module_default()).imagenHome,
                                            width: 257,
                                            height: 257
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SelectCiudadHome_SelectCiudadHome, {
                                        listadoUrlCiudad: listadoUrlCiudad
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (section_dos_module_default()).bloqueInferiorTexto,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/invertir-en-oro",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: "ORO DE INVERSI\xd3N"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Section_2_Section_dos = (Section_dos);


/***/ }),

/***/ 9089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _section_uno_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4708);
/* harmony import */ var _section_uno_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_section_uno_module_css__WEBPACK_IMPORTED_MODULE_2__);



const Section_uno = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (_section_uno_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorSectionUno),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_section_uno_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorSectionUnoMargen),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: "Empresa de compraventa de metales preciosos, empe\xf1os y cambio de divisa."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Totalmente diferentes a lo que conoc\xedas."
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section_uno);


/***/ }),

/***/ 590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _section_tres_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5790);
/* harmony import */ var _section_tres_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_section_tres_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




const Section_tres = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (_section_tres_module_css__WEBPACK_IMPORTED_MODULE_3___default().contenedorSectionTres),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_section_tres_module_css__WEBPACK_IMPORTED_MODULE_3___default().contenedorSectionTresMargen),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    children: "Quiero abrir una tienda quickgold"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "En quickgold queremos seguir creciendo contigo, y para ello contamos con las mejores condiciones para que puedas emprender. Si siempre has querido tener tu propio negocio y compartes nuestros mismos valores recibe, a continuaci\xf3n, toda la informaci\xf3n."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/expansion",
                    children: "RECIBIR M\xc1S INFORMACI\xd3N"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section_tres);


/***/ }),

/***/ 8287:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8874);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _componentes_ComponentesHome_section_1_Section_uno_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9089);
/* harmony import */ var _bradgarropy_next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4579);
/* harmony import */ var _bradgarropy_next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bradgarropy_next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _componentes_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7699);
/* harmony import */ var _componentes_ComponentesHome_Section_2_Section_dos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1702);
/* harmony import */ var _componentes_ComponentesHome_section_3_Section_tres__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(590);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4009);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



//import Breadcrumbs from "@/componentes/BreadcrumbsRaiz/Breadcrumbs.js";

//import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";





function Home({ menu_list , ciudad , general , listadoUrlCiudad  }) {
    const { ref: myRef , inView  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__.useInView)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_bradgarropy_next_seo__WEBPACK_IMPORTED_MODULE_3___default()), {
                title: ciudad?.acf?.titulo_del_meta,
                description: ciudad?.acf?.descripcion_del_meta,
                icon: "/favicon.png",
                facebook: {
                    image: "/facebook.png",
                    url: "https://www.facebook.com/quickgold.es/",
                    type: "article"
                },
                twitter: {
                    image: "/twitter.png",
                    site: "@quickgoldQG",
                    card: "summary_large_image"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.png"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_componentes_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                menu_list: menu_list,
                ciudad: ciudad,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().main)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_ComponentesHome_section_1_Section_uno_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_ComponentesHome_Section_2_Section_dos__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        listadoUrlCiudad: listadoUrlCiudad
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            height: "346px"
                        },
                        ref: myRef,
                        children: inView ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_ComponentesHome_section_3_Section_tres__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}) : null
                    })
                ]
            })
        ]
    });
}
const idPaginaWp = "5934";
const apiGeneral = "13848";
//const idWp = "13848";
async function getStaticProps() {
    //datos de los campos personalizados de la ciudad
    const ciudad1 = await fetch(`https://panel.quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`);
    const ciudad = await ciudad1.json();
    //fin datos de los campos personalizados de la ciudad
    const res = await fetch(`https://panel.quickgold.es/wp-json/acf/v3/pages/${apiGeneral}`);
    const general = await res.json();
    const menu = await fetch(`https://panel.quickgold.es/wp-json/menus/v1/menus/2219`);
    const menu_list = await menu.json();
    const Listado = await fetch(`https://panel.quickgold.es/ListadoDeUrlDeCiudad/listadoUrlCiudad.json`);
    const listadoUrlCiudad = await Listado.json();
    return {
        props: {
            menu_list,
            ciudad,
            general,
            listadoUrlCiudad
        },
        revalidate: 1
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4579:
/***/ ((module) => {

"use strict";
module.exports = require("@bradgarropy/next-seo");

/***/ }),

/***/ 6741:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/CheckCircle");

/***/ }),

/***/ 4173:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 7666:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Facebook");

/***/ }),

/***/ 3281:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Instagram");

/***/ }),

/***/ 4845:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/KeyboardArrowDown");

/***/ }),

/***/ 9881:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/KeyboardArrowUp");

/***/ }),

/***/ 5939:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/LinkedIn");

/***/ }),

/***/ 2906:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Lock");

/***/ }),

/***/ 3365:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 5631:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Twitter");

/***/ }),

/***/ 3819:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ 4180:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/SwipeableDrawer");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 5337:
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll-to-top");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4009:
/***/ ((module) => {

"use strict";
module.exports = import("react-intersection-observer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,5675,3573,676,1664,7699], () => (__webpack_exec__(8287)));
module.exports = __webpack_exports__;

})();