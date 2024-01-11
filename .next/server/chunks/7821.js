exports.id = 7821;
exports.ids = [7821];
exports.modules = {

/***/ 5711:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorConversor": "conversor_contenedorConversor__sudjN",
	"contenedor": "conversor_contenedor__Kc3Ij",
	"conversorTitulo": "conversor_conversorTitulo__DnYoj",
	"conversorTexto": "conversor_conversorTexto__1feXN",
	"botonLlamarTienda": "conversor_botonLlamarTienda__WFlVd",
	"contenedorAmbosBloquesEmpeno": "conversor_contenedorAmbosBloquesEmpeno__2Ff6v",
	"contenedorBloqueEmpeno": "conversor_contenedorBloqueEmpeno__AP524",
	"contenedorTresBloques": "conversor_contenedorTresBloques__eWaCW",
	"contenedorBloques": "conversor_contenedorBloques__1UTkI",
	"bloqueIzq": "conversor_bloqueIzq__POe9G",
	"bloqueDer": "conversor_bloqueDer__gSYRU",
	"contenedorImagen": "conversor_contenedorImagen__gU352",
	"contenedorPrecioOro": "conversor_contenedorPrecioOro__BkR0S",
	"contenedorPrecioPlata": "conversor_contenedorPrecioPlata__8zqJ5",
	"contenedorBloqueMasDe": "conversor_contenedorBloqueMasDe__XXUuG",
	"contenedorPrecios": "conversor_contenedorPrecios__GcsBO",
	"precios": "conversor_precios__Urqy5",
	"contenedorInfo": "conversor_contenedorInfo__iAA9p",
	"primerParrafo": "conversor_primerParrafo__8LxhE",
	"segundoParrafo": "conversor_segundoParrafo__yXemb",
	"ejemplo": "conversor_ejemplo__oAhNj",
	"tercerParrafo": "conversor_tercerParrafo__oyUeH",
	"cuartoParrafo": "conversor_cuartoParrafo__jYicw",
	"contenedorBotonLlamar": "conversor_contenedorBotonLlamar__RqtSX",
	"preciosDelOro": "conversor_preciosDelOro__S4PPj",
	"contenedorBotones": "conversor_contenedorBotones__uZmat",
	"botonUno": "conversor_botonUno__Mkcgc",
	"botonDos": "conversor_botonDos__ACxOs",
	"botonActivo": "conversor_botonActivo__v7wGO"
};


/***/ }),

/***/ 7821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Empenos)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _conversor_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5711);
/* harmony import */ var _conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_conversor_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Empenos({ ciudad  }) {
    const nombreCiudad = ciudad?.acf?.ciudad_oro;
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetch(`https://panel.quickgold.es/archivos-cache/Fixing${nombreCiudad}.txt`, {
            cache: "no-cache"
        }).then((response)=>response.json()).then((response)=>{
            setData(response);
        });
    }, []);
    const precio18k = data?.result?.Tarifas?.Oro[2]?.Productos[0]?.Precio / 1000;
    const paraMasOro = ciudad?.acf?.para_mas_de_oro;
    const masDeOro = ciudad?.acf?.precio_mas_de_oro;
    const precioMas18k = (precio18k + parseFloat(masDeOro)).toFixed(2);
    const primerMes = ciudad?.acf?.primer_mes;
    const tasacion = ciudad?.acf?.tasacion;
    const intereStandar = ciudad?.acf?.interes_standard;
    const costeTasacion = ciudad?.acf?.coste_de_tasacion;
    const telefono = ciudad?.acf?.telefono;
    const precio = 100;
    const percibes = precio - costeTasacion;
    const [botonActivo, setBotonActivo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorBotones),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>{
                            setBotonActivo(false);
                        },
                        className: botonActivo ? `${(_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().botonUno)}` : `${(_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().botonUno)} ${(_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().botonActivo)}`,
                        children: "INFO"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>{
                            setBotonActivo(true);
                        },
                        className: botonActivo ? `${(_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().botonUno)} ${(_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().botonActivo)}` : `${(_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().botonUno)} `,
                        children: "EJEMPLO"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedor),
                children: botonActivo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenidoEjemplo),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorInfo),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "PONGAMOS UN EJEMPLO"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().segundoParrafo),
                                children: [
                                    "Para un empe\xf1o con inter\xe9s al",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            intereStandar,
                                            "% mensual y ",
                                            primerMes,
                                            "% de inter\xe9s primer mes:"
                                        ]
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().ejemplo),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().primerParrafo),
                                        children: [
                                            "Con un valor de tus joyas de ",
                                            precio,
                                            "€, recibes ",
                                            percibes,
                                            "€."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().tercerParrafo),
                                        children: [
                                            "Conlleva un peque\xf1o gasto de gesti\xf3n del ",
                                            costeTasacion,
                                            "%"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().cuartoParrafo),
                                children: "Para recuperar las piezas empe\xf1adas pasado el primer mes y finalizar el contrato deber\xedas abonar 100€."
                            })
                        ]
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenidoInfo),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorAmbosBloquesEmpeno),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorBloqueEmpeno),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    children: [
                                        primerMes,
                                        "% inter\xe9s ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "primer mes"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().preciosDelOro),
                                    children: [
                                        "Precio del oro: ",
                                        precioMas18k,
                                        " €/g 18k para m\xe1s de",
                                        " ",
                                        paraMasOro,
                                        "g."
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorTresBloques),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorBloques),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().bloqueIzq),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        children: [
                                                            intereStandar,
                                                            "%"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().bloqueDer),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Inter\xe9s mensual"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorBloques),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().bloqueIzq),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        children: [
                                                            tasacion,
                                                            "%"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().bloqueDer),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Tasaci\xf3n"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorBloques),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().bloqueIzq),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        children: [
                                                            primerMes,
                                                            "%"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().bloqueDer),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Primer mes"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorBotonLlamar),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().botonLlamarTienda),
                    href: `tel:${telefono}`,
                    children: "LLAMA GRATIS"
                })
            })
        ]
    });
}


/***/ })

};
;