exports.id = 9317;
exports.ids = [9317];
exports.modules = {

/***/ 3460:
/***/ ((module) => {

// Exports
module.exports = {
	"botonLlamarTienda": "estilosConversor_botonLlamarTienda__OYSNc",
	"botonComprar": "estilosConversor_botonComprar__ha0Zn",
	"botonVender": "estilosConversor_botonVender__0LNLU",
	"botonActivo": "estilosConversor_botonActivo__RAfdw",
	"contenedorBotones": "estilosConversor_contenedorBotones__z4waJ",
	"bloqueCalculadora": "estilosConversor_bloqueCalculadora__mAlFL",
	"select": "estilosConversor_select__qtRpq",
	"select_monedas": "estilosConversor_select_monedas__z_APQ",
	"select_activo": "estilosConversor_select_activo__wy5D2",
	"contenedor_list": "estilosConversor_contenedor_list__ZmsWq",
	"moneda": "estilosConversor_moneda__X78ch",
	"nombre": "estilosConversor_nombre__2qR4i",
	"acronimo": "estilosConversor_acronimo__Q0mn0",
	"bandera": "estilosConversor_bandera__V42nK",
	"contenedorInputs": "estilosConversor_contenedorInputs__kn_tM",
	"inputSuperior": "estilosConversor_inputSuperior__qEHU_",
	"inputInferior": "estilosConversor_inputInferior__cmQCu",
	"contenedorTipoCambio": "estilosConversor_contenedorTipoCambio__geIoK",
	"tipoCambioIzq": "estilosConversor_tipoCambioIzq__5brW9",
	"tipoCambioDer": "estilosConversor_tipoCambioDer__XZ2mN",
	"bloqueCalculadoraTextoSup": "estilosConversor_bloqueCalculadoraTextoSup__mAe6A",
	"bloqueBotonLamar": "estilosConversor_bloqueBotonLamar__UogBa",
	"bloqueBotonLamarTexto": "estilosConversor_bloqueBotonLamarTexto__4TCMR",
	"bloqueDivisaHabitualTexto": "estilosConversor_bloqueDivisaHabitualTexto__dxBcS",
	"bloqueDivisaHabitual": "estilosConversor_bloqueDivisaHabitual__vpT0A",
	"contenedorDivisaHabitual": "estilosConversor_contenedorDivisaHabitual__BWH5C",
	"bloqueDivisaHabitual1": "estilosConversor_bloqueDivisaHabitual1__QdW3u",
	"bloqueDivisaHabitual2": "estilosConversor_bloqueDivisaHabitual2__UDFBc",
	"bloqueDivisaHabitual3": "estilosConversor_bloqueDivisaHabitual3__C_MW_",
	"bloqueDivisaHabitual4": "estilosConversor_bloqueDivisaHabitual4__6H8_N",
	"bloqueDivisaHabitual5": "estilosConversor_bloqueDivisaHabitual5__mwn1B",
	"bloqueDivisaHabitual6": "estilosConversor_bloqueDivisaHabitual6__Wozcb",
	"bloqueIzq": "estilosConversor_bloqueIzq__4N1Ut",
	"bloqueDer": "estilosConversor_bloqueDer__1vasI",
	"acronimoTexto": "estilosConversor_acronimoTexto__BlE4L"
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

/***/ 7239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ConversorDivisa_ConversorDivisa)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/componentes/ConversorDivisa/estilosConversor.module.css
var estilosConversor_module = __webpack_require__(3460);
var estilosConversor_module_default = /*#__PURE__*/__webpack_require__.n(estilosConversor_module);
// EXTERNAL MODULE: external "@mui/icons-material/KeyboardArrowDown"
var KeyboardArrowDown_ = __webpack_require__(4845);
var KeyboardArrowDown_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowDown_);
;// CONCATENATED MODULE: ./src/componentes/ConversorDivisa/Comprar.js




function NuevoConversor2({ ciudad , setSelectDivisa , selectDivisa  }) {
    const nombreCiudad = ciudad?.acf?.ciudad_oro;
    const [currencyOptions, setCurrencyOptions] = (0,external_react_.useState)([]);
    const [fromAcronimo, setFromAcronimo] = (0,external_react_.useState)("");
    const [nombreDivisa, setNombreDivisa] = (0,external_react_.useState)("");
    const [exchangeRate, setExchangeRate] = (0,external_react_.useState)("");
    const [amount, setAmount] = (0,external_react_.useState)("");
    const [amountInFromCurrency, setAmountInFromCurrency] = (0,external_react_.useState)(true);
    const [select, setSelect] = (0,external_react_.useState)(null);
    const precioDividido2 = 1 / exchangeRate;
    let toAmount, fromAmount;
    if (amountInFromCurrency) {
        fromAmount = amount;
        toAmount = (amount * exchangeRate).toFixed(2);
    } else {
        toAmount = amount;
        fromAmount = (amount / exchangeRate).toFixed(2);
    }
    (0,external_react_.useEffect)(()=>{
        fetch(`https://panel.quickgold.es/archivos-cache/Fixing${nombreCiudad}.txt`).then((res)=>res.json()).then((data)=>{
            setCurrencyOptions(data?.result?.Tarifas?.Divisas_Compra.reverse());
        });
    }, []);
    function handleFromAmountChange(e) {
        setAmount(e.target.value);
        setAmountInFromCurrency(true);
    }
    function handleToAmountChange(e) {
        setAmount(e.target.value);
        setAmountInFromCurrency(false);
    }
    function onChangeCurrency2(e) {
        setNombreDivisa(e.target.dataset.nombre);
        setExchangeRate(e.target.dataset.precio);
        setFromAcronimo(e.target.dataset.acronimo);
        setSelectDivisa(false);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (estilosConversor_module_default()).contenedorCalculadora,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (estilosConversor_module_default()).bloqueCalculadora,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (estilosConversor_module_default()).bloqueCalculadoraTextoSup,
                        children: "Selecciona divisa para ver el tipo de cambio"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (estilosConversor_module_default()).select,
                        onClick: ()=>{
                            setSelect(!select);
                        },
                        children: [
                            selectDivisa ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Seleccione Divisa"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((KeyboardArrowDown_default()), {})
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    fromAcronimo,
                                    " | ",
                                    nombreDivisa,
                                    /*#__PURE__*/ jsx_runtime_.jsx((KeyboardArrowDown_default()), {})
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: select ? `${(estilosConversor_module_default()).select_monedas} ${(estilosConversor_module_default()).select_activo}` : `${(estilosConversor_module_default()).select_monedas}`,
                                children: currencyOptions?.filter((currency)=>currency.Name !== "HRK" && currency.Name !== "DKK" && currency.Name !== "RUB" && currency.Name !== "NOK" && currency.Name !== "ILS" && currency.Name !== "SEK").map((data, i)=>select ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (estilosConversor_module_default()).contenedor_list,
                                        "data-acronimo": data?.Productos[0].Acronimo,
                                        "data-nombre": data?.Productos[0].Nombre,
                                        "data-precio": (data?.Productos[0].Precio / 1000).toFixed(4),
                                        onClick: (e)=>{
                                            onChangeCurrency2(e);
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                "data-acronimo": data?.Productos[0].Acronimo,
                                                "data-nombre": data?.Productos[0].Nombre,
                                                "data-precio": (data?.Productos[0].Precio / 1000).toFixed(4),
                                                className: (estilosConversor_module_default()).bandera,
                                                onClick: (e)=>{
                                                    onChangeCurrency2(e);
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    onClick: (e)=>{
                                                        onChangeCurrency2(e);
                                                    },
                                                    width: 35,
                                                    height: 23,
                                                    src: `/assets/img/${data?.Productos[0].Acronimo}.png`,
                                                    "data-acronimo": data?.Productos[0].Acronimo,
                                                    "data-nombre": data?.Productos[0].Nombre,
                                                    "data-precio": (data?.Productos[0].Precio / 1000).toFixed(4),
                                                    alt: data?.Productos[0].Acronimo
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                "data-acronimo": data?.Productos[0].Acronimo,
                                                "data-nombre": data?.Productos[0].Nombre,
                                                "data-precio": (data?.Productos[0].Precio / 1000).toFixed(4),
                                                className: (estilosConversor_module_default()).moneda,
                                                onClick: (e)=>{
                                                    onChangeCurrency2(e);
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: (estilosConversor_module_default()).acronimo,
                                                        onClick: (e)=>{
                                                            onChangeCurrency2(e);
                                                        },
                                                        "data-acronimo": data?.Productos[0].Acronimo,
                                                        "data-nombre": data?.Productos[0].Nombre,
                                                        "data-precio": (data?.Productos[0].Precio / 1000).toFixed(4),
                                                        children: data?.Productos[0].Acronimo
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        onClick: (e)=>{
                                                            onChangeCurrency2(e);
                                                        },
                                                        className: (estilosConversor_module_default()).nombre,
                                                        "data-acronimo": data?.Productos[0].Acronimo,
                                                        "data-nombre": data?.Productos[0].Nombre,
                                                        "data-precio": (data?.Productos[0].Precio / 1000).toFixed(4),
                                                        children: [
                                                            "| ",
                                                            data?.Productos[0].Nombre
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, i) : "")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (estilosConversor_module_default()).contenedorTipoCambio,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (estilosConversor_module_default()).tipoCambioIzq,
                                children: selectDivisa ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "-"
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "1 ",
                                        fromAcronimo,
                                        " = ",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                exchangeRate,
                                                " €"
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (estilosConversor_module_default()).tipoCambioDer,
                                children: selectDivisa ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "-"
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "1 EUR =",
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                precioDividido2.toFixed(4),
                                                " ",
                                                fromAcronimo
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (estilosConversor_module_default()).contenedorInputs,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (estilosConversor_module_default()).contenedorInputSuperior,
                                children: [
                                    selectDivisa ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "-"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (estilosConversor_module_default()).acronimoTexto,
                                        children: fromAcronimo
                                    }),
                                    selectDivisa ? /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "number",
                                        className: (estilosConversor_module_default()).inputSuperior,
                                        value: "",
                                        disabled: true,
                                        placeholder: "Cantidad"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: (estilosConversor_module_default()).inputSuperior,
                                        type: "number",
                                        value: fromAmount,
                                        onChange: handleFromAmountChange,
                                        placeholder: "Cantidad"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (estilosConversor_module_default()).contenedorInputSuperior,
                                children: [
                                    selectDivisa ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "-"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (estilosConversor_module_default()).acronimoTexto,
                                        children: "EUR"
                                    }),
                                    selectDivisa ? /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: (estilosConversor_module_default()).inputInferior,
                                        value: "",
                                        placeholder: "Cantidad",
                                        disabled: true,
                                        type: "number"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "number",
                                        className: (estilosConversor_module_default()).inputInferior,
                                        value: toAmount,
                                        onChange: handleToAmountChange,
                                        placeholder: "Cantidad"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (estilosConversor_module_default()).bloqueBotonLamar,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: (estilosConversor_module_default()).bloqueBotonLamarTexto,
                        children: [
                            "\xbfSab\xedas que hacemos ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "mejoras de precio por cantidad"
                            }),
                            "?.",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "\xa1LL\xc1MANOS!"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        title: `Llamar a Quickgold ${ciudad?.acf?.ciudad_landing}`,
                        href: `tel:${ciudad?.acf?.telefono}`,
                        className: (estilosConversor_module_default()).botonLlamarTienda,
                        children: "LLAMA GRATIS"
                    })
                ]
            }),
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (estilosConversor_module_default()).bloqueDivisaHabitualTexto,
                children: "Cambios de divisa m\xe1s habituales"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (estilosConversor_module_default()).bloqueDivisaHabitual,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (estilosConversor_module_default()).contenedorDivisaHabitual,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                onClick: (e)=>onChangeCurrency2(e),
                                "data-nombre": currencyOptions[0]?.Productos[0].Nombre,
                                "data-acronimo": currencyOptions[0]?.Productos[0].Acronimo,
                                "data-precio": (currencyOptions[0]?.Productos[0].Precio / 1000).toFixed(4),
                                className: (estilosConversor_module_default()).bloqueDivisaHabitual1,
                                children: "Libra a Euro"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                onClick: (e)=>onChangeCurrency2(e),
                                "data-nombre": currencyOptions[1]?.Productos[0].Nombre,
                                "data-acronimo": currencyOptions[1]?.Productos[0].Acronimo,
                                "data-precio": (currencyOptions[1]?.Productos[0].Precio / 1000).toFixed(4),
                                className: (estilosConversor_module_default()).bloqueDivisaHabitual2,
                                children: "D\xf3lar USA a Euro"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                onClick: (e)=>onChangeCurrency2(e),
                                "data-nombre": currencyOptions[5]?.Productos[0].Nombre,
                                "data-acronimo": currencyOptions[5]?.Productos[0].Acronimo,
                                "data-precio": (currencyOptions[5]?.Productos[0].Precio / 1000).toFixed(4),
                                className: (estilosConversor_module_default()).bloqueDivisaHabitual3,
                                children: "Franco Suizo a Euro"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (estilosConversor_module_default()).contenedorDivisaHabitual,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                onClick: (e)=>onChangeCurrency2(e),
                                "data-nombre": currencyOptions[12]?.Productos[0].Nombre,
                                "data-acronimo": currencyOptions[12]?.Productos[0].Acronimo,
                                "data-precio": (currencyOptions[12]?.Productos[0].Precio / 1000).toFixed(4),
                                className: (estilosConversor_module_default()).bloqueDivisaHabitual4,
                                children: "Real brasile\xf1o a Euro"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                onClick: (e)=>onChangeCurrency2(e),
                                "data-nombre": currencyOptions[15]?.Productos[0].Nombre,
                                "data-acronimo": currencyOptions[15]?.Productos[0].Acronimo,
                                "data-precio": (currencyOptions[15]?.Productos[0].Precio / 1000).toFixed(4),
                                className: (estilosConversor_module_default()).bloqueDivisaHabitual5,
                                children: "Corona checa a Euro"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                onClick: (e)=>onChangeCurrency2(e),
                                "data-nombre": currencyOptions[19]?.Productos[0].Nombre,
                                "data-acronimo": currencyOptions[19]?.Productos[0].Acronimo,
                                "data-precio": (currencyOptions[19]?.Productos[0].Precio / 1000).toFixed(4),
                                className: (estilosConversor_module_default()).bloqueDivisaHabitual6,
                                children: "Peso chileno a Euro"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Comprar = (NuevoConversor2);

;// CONCATENATED MODULE: ./src/componentes/ConversorDivisa/Vender.js




function Vender_NuevoConversor2({ ciudad , setSelectDivisa , selectDivisa  }) {
    const nombreCiudad = ciudad?.acf?.ciudad_oro;
    const [currencyOptions, setCurrencyOptions] = (0,external_react_.useState)([]);
    const [fromAcronimo, setFromAcronimo] = (0,external_react_.useState)("");
    const [nombreDivisa, setNombreDivisa] = (0,external_react_.useState)("");
    const [exchangeRate, setExchangeRate] = (0,external_react_.useState)("");
    const [amount, setAmount] = (0,external_react_.useState)("");
    const [amountInFromCurrency, setAmountInFromCurrency] = (0,external_react_.useState)(true);
    const [select, setSelect] = (0,external_react_.useState)(null);
    const precioDividido2 = 1 / exchangeRate;
    let toAmount, fromAmount;
    if (amountInFromCurrency) {
        fromAmount = amount;
        toAmount = (amount * exchangeRate).toFixed(2);
    } else {
        toAmount = amount;
        fromAmount = (amount / exchangeRate).toFixed(2);
    }
    (0,external_react_.useEffect)(()=>{
        fetch(`https://panel.quickgold.es/archivos-cache/Fixing${nombreCiudad}.txt`).then((res)=>res.json()).then((data)=>{
            setCurrencyOptions(data?.result?.Tarifas?.Divisas_Venta.reverse());
        });
    }, []);
    function handleFromAmountChange(e) {
        setAmount(e.target.value);
        setAmountInFromCurrency(true);
    }
    function handleToAmountChange(e) {
        setAmount(e.target.value);
        setAmountInFromCurrency(false);
    }
    function onChangeCurrency2(e) {
        setNombreDivisa(e.target.dataset.nombre);
        setExchangeRate(e.target.dataset.precio);
        setFromAcronimo(e.target.dataset.acronimo);
        setSelectDivisa(false);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (estilosConversor_module_default()).contenedorCalculadora,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (estilosConversor_module_default()).bloqueCalculadora,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (estilosConversor_module_default()).bloqueCalculadoraTextoSup,
                        children: "Selecciona divisa para ver el tipo de cambio"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (estilosConversor_module_default()).select,
                        onClick: ()=>{
                            setSelect(!select);
                        },
                        children: [
                            selectDivisa ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Seleccione Divisa"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((KeyboardArrowDown_default()), {})
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    fromAcronimo,
                                    " | ",
                                    nombreDivisa,
                                    /*#__PURE__*/ jsx_runtime_.jsx((KeyboardArrowDown_default()), {})
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: select ? `${(estilosConversor_module_default()).select_monedas} ${(estilosConversor_module_default()).select_activo}` : `${(estilosConversor_module_default()).select_monedas}`,
                                children: currencyOptions.filter((currency)=>currency.Name !== "HRK" && currency.Name !== "DKK" && currency.Name !== "RUB" && currency.Name !== "NOK" && currency.Name !== "ILS" && currency.Name !== "SEK").map((data, i)=>select ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (estilosConversor_module_default()).contenedor_list,
                                        "data-acronimo": data?.Productos[0].Acronimo,
                                        "data-nombre": data?.Productos[0].Nombre,
                                        "data-precio": (data?.Productos[0].Precio / 1000).toFixed(4),
                                        onClick: (e)=>{
                                            onChangeCurrency2(e);
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                "data-acronimo": data?.Productos[0].Acronimo,
                                                "data-nombre": data?.Productos[0].Nombre,
                                                "data-precio": (data?.Productos[0].Precio / 1000).toFixed(4),
                                                className: (estilosConversor_module_default()).bandera,
                                                onClick: (e)=>{
                                                    onChangeCurrency2(e);
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    onClick: (e)=>{
                                                        onChangeCurrency2(e);
                                                    },
                                                    width: 35,
                                                    height: 23,
                                                    src: `/assets/img/${data?.Productos[0].Acronimo}.png`,
                                                    "data-acronimo": data?.Productos[0].Acronimo,
                                                    "data-nombre": data?.Productos[0].Nombre,
                                                    "data-precio": (data?.Productos[0].Precio / 1000).toFixed(4),
                                                    alt: data?.Productos[0].Acronimo
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                "data-acronimo": data?.Productos[0].Acronimo,
                                                "data-nombre": data?.Productos[0].Nombre,
                                                "data-precio": (data?.Productos[0].Precio / 1000).toFixed(4),
                                                className: (estilosConversor_module_default()).moneda,
                                                onClick: (e)=>{
                                                    onChangeCurrency2(e);
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: (estilosConversor_module_default()).acronimo,
                                                        onClick: (e)=>{
                                                            onChangeCurrency2(e);
                                                        },
                                                        "data-acronimo": data?.Productos[0].Acronimo,
                                                        "data-nombre": data?.Productos[0].Nombre,
                                                        "data-precio": (data?.Productos[0].Precio / 1000).toFixed(4),
                                                        children: data?.Productos[0].Acronimo
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        onClick: (e)=>{
                                                            onChangeCurrency2(e);
                                                        },
                                                        className: (estilosConversor_module_default()).nombre,
                                                        "data-acronimo": data?.Productos[0].Acronimo,
                                                        "data-nombre": data?.Productos[0].Nombre,
                                                        "data-precio": (data?.Productos[0].Precio / 1000).toFixed(4),
                                                        children: [
                                                            "| ",
                                                            data?.Productos[0].Nombre
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, i) : "")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (estilosConversor_module_default()).contenedorTipoCambio,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (estilosConversor_module_default()).tipoCambioIzq,
                                children: selectDivisa ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "-"
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "1 EUR =",
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                precioDividido2.toFixed(4),
                                                " ",
                                                fromAcronimo
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (estilosConversor_module_default()).tipoCambioDer,
                                children: selectDivisa ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "-"
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "1 ",
                                        fromAcronimo,
                                        " =",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                exchangeRate,
                                                "€"
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (estilosConversor_module_default()).contenedorInputs,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (estilosConversor_module_default()).contenedorInputSuperior,
                                children: [
                                    selectDivisa ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "-"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (estilosConversor_module_default()).acronimoTexto,
                                        children: "EUR"
                                    }),
                                    selectDivisa ? /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: (estilosConversor_module_default()).inputSuperior,
                                        value: "",
                                        placeholder: "Cantidad",
                                        disabled: true,
                                        type: "number"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: (estilosConversor_module_default()).inputSuperior,
                                        type: "number",
                                        value: toAmount,
                                        onChange: handleToAmountChange,
                                        placeholder: "Cantidad"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (estilosConversor_module_default()).contenedorInputSuperior,
                                children: [
                                    selectDivisa ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "-"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (estilosConversor_module_default()).acronimoTexto,
                                        children: fromAcronimo
                                    }),
                                    selectDivisa ? /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: (estilosConversor_module_default()).inputInferior,
                                        value: "",
                                        placeholder: "Cantidad",
                                        disabled: true,
                                        type: "number"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "number",
                                        className: (estilosConversor_module_default()).inputInferior,
                                        value: fromAmount,
                                        onChange: handleFromAmountChange,
                                        placeholder: "Cantidad"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (estilosConversor_module_default()).bloqueBotonLamar,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: (estilosConversor_module_default()).bloqueBotonLamarTexto,
                        children: [
                            "\xbfSab\xedas que hacemos ",
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "mejoras de precio por cantidad"
                            }),
                            "?. \xa1LL\xc1MANOS!"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        title: `Llamar a Quickgold ${ciudad?.acf?.ciudad_landing}`,
                        href: `tel:${ciudad?.acf?.telefono}`,
                        className: (estilosConversor_module_default()).botonLlamarTienda,
                        children: "LLAMA GRATIS"
                    })
                ]
            }),
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (estilosConversor_module_default()).bloqueDivisaHabitualTexto,
                children: "Cambios de divisa m\xe1s habituales"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (estilosConversor_module_default()).bloqueDivisaHabitual,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (estilosConversor_module_default()).contenedorDivisaHabitual,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                onClick: (e)=>onChangeCurrency2(e),
                                "data-nombre": currencyOptions[0]?.Productos[0].Nombre,
                                "data-acronimo": currencyOptions[0]?.Productos[0].Acronimo,
                                "data-precio": (currencyOptions[0]?.Productos[0].Precio / 1000).toFixed(4),
                                className: (estilosConversor_module_default()).bloqueDivisaHabitual1,
                                children: "Euro a Libra"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                onClick: (e)=>onChangeCurrency2(e),
                                "data-nombre": currencyOptions[1]?.Productos[0].Nombre,
                                "data-acronimo": currencyOptions[1]?.Productos[0].Acronimo,
                                "data-precio": (currencyOptions[1]?.Productos[0].Precio / 1000).toFixed(4),
                                className: (estilosConversor_module_default()).bloqueDivisaHabitual2,
                                children: "Euro a D\xf3lar USA"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                onClick: (e)=>onChangeCurrency2(e),
                                "data-nombre": currencyOptions[5]?.Productos[0].Nombre,
                                "data-acronimo": currencyOptions[5]?.Productos[0].Acronimo,
                                "data-precio": (currencyOptions[5]?.Productos[0].Precio / 1000).toFixed(4),
                                className: (estilosConversor_module_default()).bloqueDivisaHabitual3,
                                children: "Euro a Franco Suizo"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (estilosConversor_module_default()).contenedorDivisaHabitual,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                onClick: (e)=>onChangeCurrency2(e),
                                "data-nombre": currencyOptions[12]?.Productos[0].Nombre,
                                "data-acronimo": currencyOptions[12]?.Productos[0].Acronimo,
                                "data-precio": (currencyOptions[12]?.Productos[0].Precio / 1000).toFixed(4),
                                className: (estilosConversor_module_default()).bloqueDivisaHabitual4,
                                children: "Euro a Real brasile\xf1o"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                onClick: (e)=>onChangeCurrency2(e),
                                "data-nombre": currencyOptions[15]?.Productos[0].Nombre,
                                "data-acronimo": currencyOptions[15]?.Productos[0].Acronimo,
                                "data-precio": (currencyOptions[15]?.Productos[0].Precio / 1000).toFixed(4),
                                className: (estilosConversor_module_default()).bloqueDivisaHabitual5,
                                children: "Euro a Corona checa"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                onClick: (e)=>onChangeCurrency2(e),
                                "data-nombre": currencyOptions[19]?.Productos[0].Nombre,
                                "data-acronimo": currencyOptions[19]?.Productos[0].Acronimo,
                                "data-precio": (currencyOptions[19]?.Productos[0].Precio / 1000).toFixed(4),
                                className: (estilosConversor_module_default()).bloqueDivisaHabitual6,
                                children: "Euro a Peso chileno"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Vender = (Vender_NuevoConversor2);

;// CONCATENATED MODULE: ./src/componentes/ConversorDivisa/ConversorDivisa.js





const ConversorDivisa = ({ ciudad  })=>{
    const [selectDivisa, setSelectDivisa] = (0,external_react_.useState)(true);
    const [switched, setSwitched] = (0,external_react_.useState)(null);
    const comprar = ciudad?.acf?.vende_divisa;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (estilosConversor_module_default()).contendorSectionDos,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (estilosConversor_module_default()).contendorBloques,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (estilosConversor_module_default()).bloqueIzq,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (estilosConversor_module_default()).contenedorBotones,
                        children: comprar ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: ()=>{
                                        setSwitched(false);
                                        setSelectDivisa(true);
                                    },
                                    className: switched ? `${(estilosConversor_module_default()).botonComprar}` : `${(estilosConversor_module_default()).botonComprar} ${(estilosConversor_module_default()).botonActivo}`,
                                    children: "Vender divisa"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: switched ? `${(estilosConversor_module_default()).botonVender} ${(estilosConversor_module_default()).botonActivo}` : ` ${(estilosConversor_module_default()).botonVender}`,
                                    onClick: ()=>{
                                        setSwitched(true);
                                        setSelectDivisa(true);
                                    },
                                    children: "Comprar divisa"
                                })
                            ]
                        }) : null
                    })
                }),
                switched ? /*#__PURE__*/ jsx_runtime_.jsx(Vender, {
                    ciudad: ciudad,
                    setSelectDivisa: setSelectDivisa,
                    selectDivisa: selectDivisa
                }) : /*#__PURE__*/ jsx_runtime_.jsx(Comprar, {
                    ciudad: ciudad,
                    setSelectDivisa: setSelectDivisa,
                    selectDivisa: selectDivisa
                })
            ]
        })
    });
};
/* harmony default export */ const ConversorDivisa_ConversorDivisa = (ConversorDivisa);


/***/ })

};
;