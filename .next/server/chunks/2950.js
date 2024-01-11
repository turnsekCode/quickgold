"use strict";
exports.id = 2950;
exports.ids = [2950];
exports.modules = {

/***/ 2950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _conversor_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7741);
/* harmony import */ var _conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_conversor_module_css__WEBPACK_IMPORTED_MODULE_2__);



const CalculadoraOro = ({ ciudad  })=>{
    const nombreCiudad = ciudad?.acf?.ciudad_oro;
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetch(`https://panel.quickgold.es/archivos-cache/Fixing${nombreCiudad}.txt`, {
            cache: "no-cache"
        }).then((response)=>response.json()).then((response)=>{
            setData(response);
            setLoading(true);
        });
    }, []);
    const [valorInput, setValorInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("0.00");
    const [valorSelect, setValorSelect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("0.00");
    const [masDe, setMasDe] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const precio999 = data?.result?.Tarifas?.Plata[3].Productos[0].Precio.toFixed(2);
    const precio925 = data?.result?.Tarifas?.Plata[2].Productos[0].Precio.toFixed(2);
    const precio800 = data?.result?.Tarifas?.Plata[0].Productos[0].Precio.toFixed(2);
    const masDePlata = ciudad?.acf?.para_mas_de_plata;
    const PrecioMasPlata = ciudad?.acf?.precio_mas_de_plata;
    const precio999Suma = (parseFloat(precio999) + parseFloat(PrecioMasPlata)).toFixed(2);
    const precio925Suma = (parseFloat(precio925) + parseFloat(PrecioMasPlata)).toFixed(2);
    const precio800Suma = (parseFloat(precio800) + parseFloat(PrecioMasPlata)).toFixed(2);
    const valorSelectSuma = (parseFloat(valorSelect) + parseFloat(PrecioMasPlata)).toFixed(2);
    const valorSelectNormal = parseFloat(valorSelect).toFixed(2);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorAmbosBloquesOro),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorBloqueSuperior),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().botones),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: ()=>{
                                    setMasDe(true);
                                },
                                className: masDe ? `${(_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().button)} ${(_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().botonActivo)}` : `${(_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().button)} `,
                                children: [
                                    "M\xe1s de ",
                                    masDePlata,
                                    "kg"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: ()=>{
                                    setMasDe(false);
                                },
                                className: masDe ? `${(_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().button)} ` : `${(_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().button)} ${(_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().botonActivo)}`,
                                children: [
                                    "Menos de ",
                                    masDePlata,
                                    "kg"
                                ]
                            })
                        ]
                    }),
                    masDe ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorPrecios),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorprecioDestacado),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().precioDestacado),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().kilates),
                                            children: "999"
                                        }),
                                        !loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().precio18k),
                                            children: "Cargando"
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().precio999),
                                            children: [
                                                precio999Suma,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "€/kg"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorOtrosPrecios),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().OtrosPrecios),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().preciok),
                                                children: "925"
                                            }),
                                            !loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().precio),
                                                children: "Cargando"
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().precio),
                                                children: [
                                                    precio925Suma,
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "€/kg"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().OtrosPrecios),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().preciok),
                                                children: "800"
                                            }),
                                            !loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().precio),
                                                children: "Cargando"
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().precio),
                                                children: [
                                                    precio800Suma,
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "€/kg"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorPrecios),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorprecioDestacado),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().precioDestacado),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().kilates),
                                            children: "999"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().precio999),
                                            children: [
                                                precio999,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "€/kg"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorOtrosPrecios),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().OtrosPrecios),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().preciok),
                                                children: "925"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().precio),
                                                children: [
                                                    precio925,
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "€/kg"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().OtrosPrecios),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().preciok),
                                                children: "800"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().precio),
                                                children: [
                                                    precio800,
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "€/kg"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorCalculadora),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        children: [
                            "\xbfCu\xe1nto ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "te vamos a dar"
                            }),
                            " por tus joyas?"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorSelect),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().Select),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Selecciona pureza"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        onChange: (e)=>{
                                            setValorSelect(e.target.value);
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: 0,
                                                children: "---"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: precio800,
                                                children: "800"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: precio925,
                                                children: "925"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: precio999,
                                                children: "999"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Introduce gramos"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "number",
                                        placeholder: "Cantidad",
                                        onChange: (event)=>setValorInput(event.target.value)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "g"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().tituloInferior),
                        children: "Te daremos por tu plata"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().precioFinal),
                        children: [
                            valorInput >= parseFloat(masDePlata * 1000) ? (valorInput / 1000 * valorSelectSuma).toLocaleString("es", {
                                style: "currency",
                                currency: "EUR"
                            }) : (valorInput / 1000 * valorSelectNormal).toLocaleString("es", {
                                style: "currency",
                                currency: "EUR"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().promocion),
                children: "Promoci\xf3n Online"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                title: `Llamar a Quickgold ${ciudad?.acf?.ciudad_landing}`,
                className: (_conversor_module_css__WEBPACK_IMPORTED_MODULE_2___default().botonLlamarTienda),
                href: `tel:${ciudad?.acf?.telefono}`,
                children: "LLAMA GRATIS"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculadoraOro);


/***/ })

};
;