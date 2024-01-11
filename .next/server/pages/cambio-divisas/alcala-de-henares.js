(() => {
var exports = {};
exports.id = 7001;
exports.ids = [7001];
exports.modules = {

/***/ 6061:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSeccionTres": "seccionTres_contenedorSeccionTres__FwSDm",
	"contenedorInfoTienda": "seccionTres_contenedorInfoTienda__02to2",
	"bloqueIzqInfoTienda": "seccionTres_bloqueIzqInfoTienda__dvHy4",
	"bloqueDerInfoTienda": "seccionTres_bloqueDerInfoTienda__lHP4z",
	"bloqueIzqTitulo": "seccionTres_bloqueIzqTitulo__K7hN8",
	"bloqueDerTitulo": "seccionTres_bloqueDerTitulo__rKnTg",
	"bloqueDerHorarioHabitual": "seccionTres_bloqueDerHorarioHabitual__uGgMs",
	"bloqueIzqDireccion": "seccionTres_bloqueIzqDireccion__toUXu",
	"bloqueIzqTel": "seccionTres_bloqueIzqTel__s94K6",
	"iconosTelefono": "seccionTres_iconosTelefono__RtPV6",
	"telefonoIcon": "seccionTres_telefonoIcon__Br2LT",
	"WhatsAppIcon": "seccionTres_WhatsAppIcon__ofZ1f",
	"bloqueDerdias": "seccionTres_bloqueDerdias__iEL_z",
	"bloqueDerSabado": "seccionTres_bloqueDerSabado__InxZG",
	"bloqueDerHorario": "seccionTres_bloqueDerHorario__q92cv",
	"bloqueDerSabadoHorario": "seccionTres_bloqueDerSabadoHorario__oWXaF",
	"bloqueDerDomingo": "seccionTres_bloqueDerDomingo__D4LPW",
	"bloqueDerDomingoCerrado": "seccionTres_bloqueDerDomingoCerrado__j6nCS",
	"contenedorMapa": "seccionTres_contenedorMapa__MF5uN",
	"contenedorResenasGoogle": "seccionTres_contenedorResenasGoogle__ehA9p",
	"contenedorIconos": "seccionTres_contenedorIconos__0wFKb"
};


/***/ }),

/***/ 6950:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSeccionUno": "seccionUno_contenedorSeccionUno__oEQri",
	"bloqueDer": "seccionUno_bloqueDer__QMs_M",
	"imagenTienda": "seccionUno_imagenTienda__2orkX",
	"img_stars": "seccionUno_img_stars__ySeV_",
	"imgValoracion": "seccionUno_imgValoracion__zzx2K",
	"bloqueResenas": "seccionUno_bloqueResenas__LwIdh",
	"contenedorValoraciones": "seccionUno_contenedorValoraciones__OEtRX",
	"valoracionResenas": "seccionUno_valoracionResenas__i_Fdz",
	"contenedorResenas": "seccionUno_contenedorResenas__avn2R",
	"contenedorLogoGoogle": "seccionUno_contenedorLogoGoogle__dYD_o",
	"numero_reviews": "seccionUno_numero_reviews__EmY2w",
	"resenasGoogle": "seccionUno_resenasGoogle__V3DiT",
	"verResenas": "seccionUno_verResenas__rpXe_"
};


/***/ }),

/***/ 6895:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSeccionDos": "seccionDos_contenedorSeccionDos__lHzCh",
	"contenedorSeccionDosH2": "seccionDos_contenedorSeccionDosH2__Ib1i5",
	"subTituloServicio": "seccionDos_subTituloServicio__QviRH"
};


/***/ }),

/***/ 7364:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6061);
/* harmony import */ var _seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_PhoneInTalk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8377);
/* harmony import */ var _mui_icons_material_PhoneInTalk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PhoneInTalk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_WhatsApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2232);
/* harmony import */ var _mui_icons_material_WhatsApp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_WhatsApp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _componentes_ResenasGoogle_ResenasGoogle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5439);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4009);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const SeccionTres = ({ tiendaGoogle , ciudad  })=>{
    const { ref: myRef , inView  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)();
    const diaSemana = tiendaGoogle?.result.opening_hours?.weekday_text[0];
    const diaSabado = tiendaGoogle?.result.opening_hours?.weekday_text[5];
    const diaDomingo = tiendaGoogle?.result.opening_hours?.weekday_text[6];
    const diaSemanaReemplazo = diaSemana?.replace("lunes:", "");
    const diaSabadoReemplazo = diaSabado?.replace("s\xe1bado:", "");
    const diaDomingoReemplazo = diaDomingo?.replace("domingo:", "");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
        className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().contenedorSeccionTres),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().contenedorInfoTienda),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().bloqueIzqInfoTienda),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().bloqueIzqTitulo),
                                children: "Contacto"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().bloqueIzqDireccion),
                                children: tiendaGoogle?.result?.formatted_address
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().iconosTelefono),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        title: `Llamar a Quickgold ${ciudad?.acf?.ciudad_landing}`,
                                        href: `tel:${ciudad?.acf?.telefono}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().bloqueIzqTel),
                                            children: ciudad?.acf?.telefono
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().contenedorIconos),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                title: `Llamar a Quickgold ${ciudad?.acf?.ciudad_landing}`,
                                                className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().telefonoIcon),
                                                href: `tel:${ciudad?.acf?.telefono}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PhoneInTalk__WEBPACK_IMPORTED_MODULE_2___default()), {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().bloqueIzqTel)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                title: "Escribir WhatsApp",
                                                className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().WhatsAppIcon),
                                                target: "_blank",
                                                href: `https://wa.me/${(ciudad?.acf?.mobile).replace(/\s+/g, "")}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_WhatsApp__WEBPACK_IMPORTED_MODULE_3___default()), {})
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().bloqueDerInfoTienda),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().bloqueDerTitulo),
                                children: "Horario"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().bloqueDerHorarioHabitual),
                                children: "Horario Habitual"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().bloqueDerdias),
                                children: "Lunes a Viernes:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().bloqueDerHorario),
                                children: diaSemanaReemplazo
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().bloqueDerSabado),
                                children: "S\xe1bado:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().bloqueDerSabadoHorario),
                                children: diaSabadoReemplazo
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().bloqueDerDomingo),
                                children: "Domingo:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().bloqueDerDomingoCerrado),
                                children: diaDomingoReemplazo
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().contenedorMapa),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                    title: "Mapa Tienda",
                    src: ciudad?.acf?.mapa_landing,
                    width: "100%",
                    height: "100%",
                    loading: "lazy"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_seccionTres_module_css__WEBPACK_IMPORTED_MODULE_6___default().contenedorResenasGoogle),
                ref: myRef,
                children: inView ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_ResenasGoogle_ResenasGoogle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    tiendaGoogle: tiendaGoogle,
                    ciudad: ciudad
                }) : null
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeccionTres);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6950);
/* harmony import */ var _seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



//import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

//import FsLightbox from "fslightbox-react";
const SeccionUno = ({ ciudad , tiendaGoogle  })=>{
    //const [toggler, setToggler] = useState(false);
    const tienda = tiendaGoogle?.result?.rating;
    if (tienda?.estrellas > 4.7) {
        var img_valoracion = 69;
    } else if (tienda?.estrellas < 4.8 && tienda?.estrellas < 4.3) {
        var img_valoracion = 62;
    } else if (tienda?.estrellas < 4.4 && tienda?.estrellas < 3.7) {
        var img_valoracion = 55;
    } else if (tienda?.estrellas < 3.8 && tienda?.estrellas < 3.3) {
        var img_valoracion = 48;
    } else if (tienda?.estrellas < 3.4 && tienda?.estrellas < 2.7) {
        var img_valoracion = 41;
    } else if (tienda?.estrellas < 2.8 && tienda?.estrellas < 2.3) {
        var img_valoracion = 34;
    } else if (tienda?.estrellas < 2.4 && tienda?.estrellas < 1.7) {
        var img_valoracion = 27;
    } else if (tienda?.estrellas < 1.8 && tienda?.estrellas < 1.3) {
        var img_valoracion = 20;
    } else if (tienda?.estrellas < 1.4 && tienda?.estrellas < 0.7) {
        var img_valoracion = 13;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3___default().contenedorSeccionUno),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3___default().bloqueDer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: ciudad?.acf?.divisa_grupo?.title_h1_grupo
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3___default().bloqueIzq),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3___default().bloqueResenas),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3___default().contenedorLogoGoogle),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: "/assets/img/GOOGLE.png",
                                    width: 29,
                                    height: 30,
                                    alt: "Logo google"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3___default().contenedorValoraciones),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3___default().contenedorResenas),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3___default().img_stars),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        style: {
                                                            width: img_valoracion
                                                        },
                                                        className: (_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3___default().imgValoracion)
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3___default().valoracionResenas),
                                                    children: tiendaGoogle?.result?.rating
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3___default().numero_reviews),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: ciudad?.acf?.info_grupo?.enlace_resenas,
                                                            target: "_blank",
                                                            children: "Ver rese\xf1as"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3___default().resenasGoogle),
                                            children: [
                                                tiendaGoogle?.result?.user_ratings_total,
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "opiniones en Google"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3___default().verResenas),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: ciudad?.acf?.info_grupo?.escribir_resenas_landings,
                                target: "_blank",
                                children: "D\xe9janos tu opinion"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeccionUno);


/***/ }),

/***/ 2490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _seccionDos_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6895);
/* harmony import */ var _seccionDos_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_seccionDos_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _componentes_ConversorDivisa_ConversorDivisa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7239);




const SeccionDos = ({ ciudad  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_seccionDos_module_css__WEBPACK_IMPORTED_MODULE_3___default().contenedorSeccionDos),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_seccionDos_module_css__WEBPACK_IMPORTED_MODULE_3___default().contenedorSeccionDosH2),
                children: "Cambio de divisa"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                className: (_seccionDos_module_css__WEBPACK_IMPORTED_MODULE_3___default().subTituloServicio),
                children: [
                    "Somos la ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                        children: "casa de cambio"
                    }),
                    " preferida por miles de personas al a\xf1o en ",
                    ciudad?.acf?.ciudad_landing,
                    ". ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                        children: "Cambiar divisa"
                    }),
                    " ",
                    "en Quickgold siempre es sin comisiones y, f\xe1cil y r\xe1pido."
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_ConversorDivisa_ConversorDivisa__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                ciudad: ciudad
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeccionDos);


/***/ }),

/***/ 4731:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Plazadeespana2locala8),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8874);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _bradgarropy_next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4579);
/* harmony import */ var _bradgarropy_next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bradgarropy_next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _componentes_BotonLlamarFijo_BotonLamarFijo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7186);
/* harmony import */ var _componentes_BotonesLlamarWT_BotonesLlamar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2911);
/* harmony import */ var _componentes_BannerWallapop_BannerWallapop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3428);
/* harmony import */ var _componentes_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7699);
/* harmony import */ var _componentes_ComponentesTiendaIndividualDivisa_SeccionUno_SeccionUno__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7631);
/* harmony import */ var _componentes_ComponentesTiendaIndividualDivisa_SeccionTres_SeccionTres__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7364);
/* harmony import */ var _componentes_BannerPromoTiendas_BannerPromoTiendas_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2810);
/* harmony import */ var _componentes_BannerGeneral_BannerPromoGeneral__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7967);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(547);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_script_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3159);
/* harmony import */ var next_script_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_script_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _componentes_BreadcrumbsServicioTienda_Breadcrumbs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3683);
/* harmony import */ var _componentes_ComponentesTiendaIndividualDivisa_seccionDos_SeccionDos__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2490);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_componentes_ComponentesTiendaIndividualDivisa_SeccionTres_SeccionTres__WEBPACK_IMPORTED_MODULE_8__]);
_componentes_ComponentesTiendaIndividualDivisa_SeccionTres_SeccionTres__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















function Plazadeespana2locala8({ menu_list , ciudad , tiendaGoogle , general  }) {
    const breadCrumb = {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Quickgold",
                item: "https://quickgold.es"
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Tiendas",
                item: "https://quickgold.es/cambio-divisas"
            },
            {
                "@type": "ListItem",
                position: 3,
                name: ciudad?.acf?.info_grupo?.ciudad_landing,
                item: "https://quickgold.es/cambio-divisas/alcala-de-henares"
            }
        ]
    };
    const schema = {
        "@context": "http://www.schema.org",
        "@type": "Organization",
        name: "Quickgold",
        url: "https://quickgold.es",
        sameAs: [
            "https://instagram.com/quickgold.es",
            "https://twitter.com/quickgoldqg",
            "https://www.facebook.com/quickgold.es"
        ],
        logo: "/assets/img/logo.jpg",
        image: "/assets/img/logo.jpg"
    };
    const schema_resenas = {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        name: tiendaGoogle?.result?.name,
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: tiendaGoogle?.result?.rating,
            ratingCount: tiendaGoogle?.result?.user_ratings_total,
            worstRating: 1,
            bestRating: 5
        },
        priceRange: "$",
        image: `/assets/img/${ciudad?.acf?.info_grupo?.tienda}.jpg`,
        telephone: tiendaGoogle?.result?.formatted_phone_number,
        address: {
            "@type": "PostalAddress",
            addressLocality: tiendaGoogle?.result?.address_components[3]?.long_name,
            addressRegion: tiendaGoogle?.result?.address_components[4]?.long_name,
            streetAddress: tiendaGoogle?.result?.formatted_address
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_bradgarropy_next_seo__WEBPACK_IMPORTED_MODULE_2___default()), {
                title: ciudad?.acf?.divisa_grupo?.title_meta_divisa,
                description: ciudad?.acf?.divisa_grupo?.description_meta_divisa,
                icon: "/favicon.png",
                facebook: {
                    image: `/assets/img/${ciudad?.acf?.info_grupo?.tienda}.jpg`,
                    url: "https://www.facebook.com/quickgold.es/",
                    type: "article"
                },
                twitter: {
                    image: `/assets/img/${ciudad?.acf?.info_grupo?.tienda}.jpg`,
                    site: "@quickgoldQG",
                    card: "summary_large_image"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(schema_resenas)
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(schema)
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(breadCrumb)
                        }
                    }),
                    ciudad?.acf?.info_grupo?.nonscript_chat,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: ciudad?.acf?.canonical
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script_js__WEBPACK_IMPORTED_MODULE_12___default()), {
                id: "livechat",
                property: "lazyOnload",
                children: ciudad?.acf?.info_grupo?.script_chat
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_componentes_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                menu_list: menu_list,
                ciudad: ciudad,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().main),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BreadcrumbsServicioTienda_Breadcrumbs__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                raiz: "Quickgold",
                                tiendas: "Cambio Divisa",
                                urlNombreServicio: "/cambio-divisas",
                                ubicacionActual: ciudad?.acf?.info_grupo?.nombre_tienda,
                                iconoRaiz: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_11___default()), {}),
                                iconoTiendas: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_11___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_ComponentesTiendaIndividualDivisa_SeccionUno_SeccionUno__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                ciudad: ciudad,
                                tiendaGoogle: tiendaGoogle
                            }),
                            ciudad?.acf?.activar_banner_en_tiendas_y_ciudad && general?.acf?.activar_promo_general ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BannerPromoTiendas_BannerPromoTiendas_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                ciudad: ciudad
                            }) : null,
                            ciudad?.acf?.activar_banner_en_tiendas_y_ciudad == false && general?.acf?.activar_promo_general ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BannerGeneral_BannerPromoGeneral__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                general: general
                            }) : null,
                            general?.acf?.activar_promo_general == false && ciudad?.acf?.activar_banner_en_tiendas_y_ciudad ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BannerPromoTiendas_BannerPromoTiendas_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                ciudad: ciudad
                            }) : null,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().contenedorSeccionUnoDos),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_ComponentesTiendaIndividualDivisa_seccionDos_SeccionDos__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        ciudad: ciudad
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_ComponentesTiendaIndividualDivisa_SeccionTres_SeccionTres__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        ciudad: ciudad,
                                        tiendaGoogle: tiendaGoogle
                                    })
                                ]
                            })
                        ]
                    }),
                    ciudad?.acf?.info_grupo?.tienda === "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BotonLlamarFijo_BotonLamarFijo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        ciudad: ciudad
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BotonesLlamarWT_BotonesLlamar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        ciudad: ciudad
                    }),
                    ciudad?.acf?.activar_banner_wallapop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BannerWallapop_BannerWallapop__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        ciudad: ciudad
                    }) : null
                ]
            })
        ]
    });
}
const idPaginaWp = "6686";
const apiGeneral = "13848";
//datos de los campos personalizados de la ciudad
//const idWp = "13848";
async function getStaticProps() {
    const ciudad1 = await fetch(`https://panel.quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`);
    const ciudad = await ciudad1.json();
    //fin datos de los campos personalizados de la ciudad
    // general para imagenes o promociones banner
    const general1 = await fetch(`https://panel.quickgold.es/wp-json/acf/v3/pages/${apiGeneral}`);
    const general = await general1.json();
    //fin general para imagenes o promociones banner
    const tienda = ciudad?.acf?.info_grupo?.tienda;
    const menu = await fetch(`https://panel.quickgold.es/wp-json/menus/v1/menus/2219`);
    const menu_list = await menu.json();
    //datos de google
    const google = await fetch(`https://panel.quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda}.txt`);
    const tiendaGoogle = await google.json();
    return {
        props: {
            menu_list,
            ciudad,
            tiendaGoogle,
            general
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

/***/ 547:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/KeyboardArrowRight");

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

/***/ 8377:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/PhoneInTalk");

/***/ }),

/***/ 5631:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Twitter");

/***/ }),

/***/ 2232:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/WhatsApp");

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

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

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

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

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

/***/ 3159:
/***/ ((module) => {

"use strict";
module.exports = require("next/script.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,5675,7699,9317,2060,5439,3683], () => (__webpack_exec__(4731)));
module.exports = __webpack_exports__;

})();