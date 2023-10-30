exports.id = 4049;
exports.ids = [4049];
exports.modules = {

/***/ 3658:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSeccionTres": "seccionTres_contenedorSeccionTres__m07P_",
	"contenedorInfoTienda": "seccionTres_contenedorInfoTienda__WtmlZ",
	"bloqueIzqInfoTienda": "seccionTres_bloqueIzqInfoTienda__zCado",
	"bloqueDerInfoTienda": "seccionTres_bloqueDerInfoTienda__8g_tv",
	"bloqueIzqTitulo": "seccionTres_bloqueIzqTitulo__vhLRG",
	"bloqueDerTitulo": "seccionTres_bloqueDerTitulo__pxDXE",
	"bloqueDerHorarioHabitual": "seccionTres_bloqueDerHorarioHabitual__Ll7wV",
	"bloqueIzqDireccion": "seccionTres_bloqueIzqDireccion__ioFMQ",
	"bloqueIzqTel": "seccionTres_bloqueIzqTel__k2pe2",
	"iconosTelefono": "seccionTres_iconosTelefono__LZAjh",
	"telefonoIcon": "seccionTres_telefonoIcon__m7GhU",
	"WhatsAppIcon": "seccionTres_WhatsAppIcon__nQzku",
	"bloqueDerdias": "seccionTres_bloqueDerdias__b2Yeb",
	"bloqueDerSabado": "seccionTres_bloqueDerSabado__dfj0g",
	"bloqueDerHorario": "seccionTres_bloqueDerHorario__EiZPl",
	"bloqueDerSabadoHorario": "seccionTres_bloqueDerSabadoHorario__YKQwb",
	"bloqueDerDomingo": "seccionTres_bloqueDerDomingo__WFEVc",
	"bloqueDerDomingoCerrado": "seccionTres_bloqueDerDomingoCerrado__cVRuq",
	"contenedorMapa": "seccionTres_contenedorMapa__aown6",
	"contenedorResenasGoogle": "seccionTres_contenedorResenasGoogle__okNR4",
	"contenedorIconos": "seccionTres_contenedorIconos__T0BK1"
};


/***/ }),

/***/ 2217:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSeccionUno": "seccionUno_contenedorSeccionUno__Qs6t4",
	"bloqueDer": "seccionUno_bloqueDer__Vt2Gn",
	"imagenTienda": "seccionUno_imagenTienda__YsHj0",
	"img_stars": "seccionUno_img_stars__lSgAw",
	"imgValoracion": "seccionUno_imgValoracion__va2_j",
	"bloqueResenas": "seccionUno_bloqueResenas__uXqg9",
	"contenedorValoraciones": "seccionUno_contenedorValoraciones___nMN3",
	"valoracionResenas": "seccionUno_valoracionResenas__wu0Zv",
	"contenedorResenas": "seccionUno_contenedorResenas__JM8Ae",
	"contenedorLogoGoogle": "seccionUno_contenedorLogoGoogle__P9OZh",
	"numero_reviews": "seccionUno_numero_reviews__0AGLQ",
	"resenasGoogle": "seccionUno_resenasGoogle__IAn5I",
	"verResenas": "seccionUno_verResenas__9sPsG"
};


/***/ }),

/***/ 6551:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSeccionDos": "seccionDos_contenedorSeccionDos__v5D8j"
};


/***/ }),

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

/***/ 8799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SeccionTres_SeccionTres)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/componentes/ComponentesPaginasDeTiendas/SeccionTres/seccionTres.module.css
var seccionTres_module = __webpack_require__(3658);
var seccionTres_module_default = /*#__PURE__*/__webpack_require__.n(seccionTres_module);
// EXTERNAL MODULE: external "@mui/icons-material/PhoneInTalk"
var PhoneInTalk_ = __webpack_require__(8377);
var PhoneInTalk_default = /*#__PURE__*/__webpack_require__.n(PhoneInTalk_);
// EXTERNAL MODULE: external "@mui/icons-material/WhatsApp"
var WhatsApp_ = __webpack_require__(2232);
var WhatsApp_default = /*#__PURE__*/__webpack_require__.n(WhatsApp_);
// EXTERNAL MODULE: ./src/componentes/ResenasGoogle/resenasGoogle.module.css
var resenasGoogle_module = __webpack_require__(4704);
var resenasGoogle_module_default = /*#__PURE__*/__webpack_require__.n(resenasGoogle_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/componentes/ResenasGoogle/ResenasGoogle.js




const ResenasGoogle = ({ tiendaGoogle , ciudad  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            tiendaGoogle?.result?.reviews.map((resena, index)=>{
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
                return resena.rating >= 4 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (resenasGoogle_module_default()).contenedorResenasGoogle,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (resenasGoogle_module_default()).contenedorSuperior,
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: resena.profile_photo_url,
                                    alt: "Imagen rese\xf1a google",
                                    className: (resenasGoogle_module_default()).imagenResena,
                                    width: 70,
                                    height: 70,
                                    loading: "lazy"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/assets/img/GOOGLE.png",
                                    alt: "Imagen rese\xf1a google",
                                    className: (resenasGoogle_module_default()).imagenGoogle,
                                    width: 30,
                                    height: 30
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (resenasGoogle_module_default()).imagenResena,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (resenasGoogle_module_default()).nombreUsuario,
                                            children: resena.author_name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (resenasGoogle_module_default()).textoInferior,
                                            children: resena.relative_time_description
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (resenasGoogle_module_default()).contenedorEstrellas,
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (resenasGoogle_module_default()).img_stars,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        style: {
                                            width: img_valoracion
                                        },
                                        className: (resenasGoogle_module_default()).imgValoracion
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (resenasGoogle_module_default()).valoracionResenas,
                                    children: resena.rating
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (resenasGoogle_module_default()).textoContenido,
                            children: resena.text
                        })
                    ]
                }, index) : null;
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (resenasGoogle_module_default()).botonVerMas,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    target: "_blank",
                    href: ciudad?.acf?.enlace_resenas,
                    children: "VER M\xc1S"
                })
            })
        ]
    });
};
/* harmony default export */ const ResenasGoogle_ResenasGoogle = (ResenasGoogle);

;// CONCATENATED MODULE: ./src/componentes/ComponentesPaginasDeTiendas/SeccionTres/SeccionTres.js






const SeccionTres = ({ tiendaGoogle , ciudad  })=>{
    const diaSemana = tiendaGoogle?.result.opening_hours?.weekday_text[0];
    const diaSabado = tiendaGoogle?.result.opening_hours?.weekday_text[5];
    const diaDomingo = tiendaGoogle?.result.opening_hours?.weekday_text[6];
    const diaSemanaReemplazo = diaSemana?.replace("lunes:", "");
    const diaSabadoReemplazo = diaSabado?.replace("s\xe1bado:", "");
    const diaDomingoReemplazo = diaDomingo?.replace("domingo:", "");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: (seccionTres_module_default()).contenedorSeccionTres,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (seccionTres_module_default()).contenedorInfoTienda,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (seccionTres_module_default()).bloqueIzqInfoTienda,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (seccionTres_module_default()).bloqueIzqTitulo,
                                children: "Contacto"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (seccionTres_module_default()).bloqueIzqDireccion,
                                children: tiendaGoogle?.result?.formatted_address
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (seccionTres_module_default()).iconosTelefono,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        "aria-label": "Llamar a fijo",
                                        href: `tel:${ciudad?.acf?.telefono}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (seccionTres_module_default()).bloqueIzqTel,
                                            children: ciudad?.acf?.telefono
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (seccionTres_module_default()).contenedorIconos,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                "aria-label": "Llamar a fijo",
                                                className: (seccionTres_module_default()).telefonoIcon,
                                                href: `tel:${ciudad?.acf?.telefono}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((PhoneInTalk_default()), {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: (seccionTres_module_default()).bloqueIzqTel
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                "aria-label": "Llamar a whatsapp",
                                                className: (seccionTres_module_default()).WhatsAppIcon,
                                                target: "_blank",
                                                href: `https://wa.me/${(ciudad?.acf?.mobile).replace(/\s+/g, "")}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((WhatsApp_default()), {})
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (seccionTres_module_default()).bloqueDerInfoTienda,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (seccionTres_module_default()).bloqueDerTitulo,
                                children: "Horario"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (seccionTres_module_default()).bloqueDerHorarioHabitual,
                                children: "Horario Habitual"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (seccionTres_module_default()).bloqueDerdias,
                                children: "Lunes a Viernes:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (seccionTres_module_default()).bloqueDerHorario,
                                children: diaSemanaReemplazo
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (seccionTres_module_default()).bloqueDerSabado,
                                children: "S\xe1bado:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (seccionTres_module_default()).bloqueDerSabadoHorario,
                                children: diaSabadoReemplazo
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (seccionTres_module_default()).bloqueDerDomingo,
                                children: "Domingo:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (seccionTres_module_default()).bloqueDerDomingoCerrado,
                                children: diaDomingoReemplazo
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: (seccionTres_module_default()).contenedorMapa,
                children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                    title: "Mapa Tienda",
                    src: ciudad?.acf?.mapa_landing,
                    width: "100%",
                    height: "100%",
                    loading: "lazy"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: (seccionTres_module_default()).contenedorResenasGoogle,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ResenasGoogle_ResenasGoogle, {
                    tiendaGoogle: tiendaGoogle,
                    ciudad: ciudad
                })
            })
        ]
    });
};
/* harmony default export */ const SeccionTres_SeccionTres = (SeccionTres);


/***/ }),

/***/ 8609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2217);
/* harmony import */ var _seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);




//import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
//import Image from "next/image";
//import FsLightbox from "fslightbox-react";
const SeccionUno = ({ ciudad , tiendaGoogle  })=>{
    //const [toggler, setToggler] = useState(false);
    const tienda = tiendaGoogle?.result?.rating;
    if (tienda.estrellas > 4.7) {
        var img_valoracion = 69;
    } else if (tienda.estrellas < 4.8 && tienda.estrellas < 4.3) {
        var img_valoracion = 62;
    } else if (tienda.estrellas < 4.4 && tienda.estrellas < 3.7) {
        var img_valoracion = 55;
    } else if (tienda.estrellas < 3.8 && tienda.estrellas < 3.3) {
        var img_valoracion = 48;
    } else if (tienda.estrellas < 3.4 && tienda.estrellas < 2.7) {
        var img_valoracion = 41;
    } else if (tienda.estrellas < 2.8 && tienda.estrellas < 2.3) {
        var img_valoracion = 34;
    } else if (tienda.estrellas < 2.4 && tienda.estrellas < 1.7) {
        var img_valoracion = 27;
    } else if (tienda.estrellas < 1.8 && tienda.estrellas < 1.3) {
        var img_valoracion = 20;
    } else if (tienda.estrellas < 1.4 && tienda.estrellas < 0.7) {
        var img_valoracion = 13;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3___default().contenedorSeccionUno),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_seccionUno_module_css__WEBPACK_IMPORTED_MODULE_3___default().bloqueDer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: ciudad?.acf?.titulo_del_h1
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
                                                            href: ciudad?.acf?.enlace_resenas,
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
                                href: ciudad?.acf?.escribir_resenas_landings,
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

/***/ 2093:
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
/* harmony import */ var _seccionDos_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6551);
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