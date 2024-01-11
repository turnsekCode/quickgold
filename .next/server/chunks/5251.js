exports.id = 5251;
exports.ids = [5251];
exports.modules = {

/***/ 7578:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorAmbosTablaLingotes": "Lingotes_contenedorAmbosTablaLingotes__shiHb",
	"botonLlamar": "Lingotes_botonLlamar__GW28P",
	"contenedorBotonLlamar": "Lingotes_contenedorBotonLlamar__z0xKw",
	"contenedorImagen": "Lingotes_contenedorImagen__Vu9yH",
	"nombrePrecio": "Lingotes_nombrePrecio__col3a",
	"oroFino": "Lingotes_oroFino__HDfMs",
	"medidaBlister": "Lingotes_medidaBlister__DM_hB",
	"separador": "Lingotes_separador__PqPwb",
	"contenedorTablas": "Lingotes_contenedorTablas__tr4sr",
	"contenedorConversor": "Lingotes_contenedorConversor__F5MGu",
	"conversorTitulo": "Lingotes_conversorTitulo__uohOh",
	"conversorTexto": "Lingotes_conversorTexto__dwENu",
	"botonLlamarTienda": "Lingotes_botonLlamarTienda__6a7yO"
};


/***/ }),

/***/ 5251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Lingotes_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7578);
/* harmony import */ var _Lingotes_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Lingotes_module_css__WEBPACK_IMPORTED_MODULE_2__);
//import Image from "next/image";



//import imagenMarcaLingotes from "../../../public/assets/imagenMarcaLingote.png";
//import lingote2_5 from "../../../assets/lingote2.5.png";
//import lingote5 from "../../../public/assets/lingote5.png";
//import lingote10 from "../../../public/assets/lingote10.png";
//import lingote20 from "../../../public/assets/lingote20.png";
//import lingote1oz from "../../../public/assets/lingote1oz.png";
//import lingote50 from "../../../public/assets/lingote50.png";
//import lingote100 from "../../../public/assets/lingote100.png";
//import lingote250 from "../../../public/assets/lingote250.png";
//import lingote500 from "../../../public/assets/lingote500.png";
//import lingote1000 from "../../../public/assets/lingote1000.png";
const Tabla2Lingotes = ({ ciudad  })=>{
    const nombreCiudad = ciudad?.acf?.ciudad_oro;
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    //const [loading, setLoading] = useState(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetch(`https://panel.quickgold.es/archivos-cache/Fixing${nombreCiudad}.txt`, {
            cache: "no-cache"
        }).then((response)=>response.json()).then((response)=>{
            setData(response);
        //setLoading(true);
        });
    }, []);
    const precio2_5 = (data?.result?.Tarifas?.Lingotes[4].Productos[0].Precio / 1000).toLocaleString("es", {
        style: "currency",
        currency: "EUR"
    });
    const precio5 = (data?.result?.Tarifas?.Lingotes[5].Productos[0].Precio / 1000).toLocaleString("es", {
        style: "currency",
        currency: "EUR"
    });
    const precio10 = (data?.result?.Tarifas?.Lingotes[10].Productos[0].Precio / 1000).toLocaleString("es", {
        style: "currency",
        currency: "EUR"
    });
    const precio20 = (data?.result?.Tarifas?.Lingotes[11].Productos[0].Precio / 1000).toLocaleString("es", {
        style: "currency",
        currency: "EUR"
    });
    const precio1Oz = (data?.result?.Tarifas?.Lingotes[12].Productos[0].Precio / 1000).toLocaleString("es", {
        style: "currency",
        currency: "EUR"
    });
    const precio50 = (data?.result?.Tarifas?.Lingotes[13].Productos[0].Precio / 1000).toLocaleString("es", {
        style: "currency",
        currency: "EUR"
    });
    const precio100 = (data?.result?.Tarifas?.Lingotes[14].Productos[0].Precio / 1000).toLocaleString("es", {
        style: "currency",
        currency: "EUR"
    });
    const precio250 = (data?.result?.Tarifas?.Lingotes[15].Productos[0].Precio / 1000).toLocaleString("es", {
        style: "currency",
        currency: "EUR"
    });
    const precio500 = (data?.result?.Tarifas?.Lingotes[0].Productos[0].Precio / 1000).toLocaleString("es", {
        style: "currency",
        currency: "EUR"
    });
    const precio1000 = (data?.result?.Tarifas?.Lingotes[16].Productos[0].Precio / 1000).toLocaleString("es", {
        style: "currency",
        currency: "EUR"
    });
    const arrayLingotes = [
        {
            id: 1,
            //imagenLingote: lingote2_5,
            nombreLingote: "Lingote de 2.5gr",
            precioLingote: precio2_5,
            medidaBlister: "17,82 x 10,82 x 1,349mm",
            telefono: ciudad?.acf?.telefono
        },
        {
            id: 2,
            //imagenLingote: lingote5,
            nombreLingote: "Lingote de 5gr",
            precioLingote: precio5,
            medidaBlister: "14,95 x 7,95 x 0,437mm",
            telefono: ciudad?.acf?.telefono
        },
        {
            id: 3,
            //imagenLingote: lingote10,
            nombreLingote: "Lingote de 10gr",
            precioLingote: precio10,
            medidaBlister: "27,82 x 13,82 x 1,358mm",
            telefono: ciudad?.acf?.telefono
        },
        {
            id: 4,
            //imagenLingote: lingote20,
            nombreLingote: "Lingote de 20gr",
            precioLingote: precio20,
            medidaBlister: "31,82 x 15,82 x 2,070mm",
            telefono: ciudad?.acf?.telefono
        },
        {
            id: 5,
            //imagenLingote: lingote1oz,
            nombreLingote: "Lingote de 1oz",
            precioLingote: precio1Oz,
            medidaBlister: "31,82 x 15,82 x 3,219mm",
            telefono: ciudad?.acf?.telefono
        },
        {
            id: 6,
            //imagenLingote: lingote50,
            nombreLingote: "Lingote de 50gr",
            precioLingote: precio50,
            medidaBlister: "41,82 x 23,82 x 2,610pxmm",
            telefono: ciudad?.acf?.telefono
        },
        {
            id: 7,
            //imagenLingote: lingote100,
            nombreLingote: "Lingote de 100gr",
            precioLingote: precio100,
            medidaBlister: "41,82 x 23,82 x 5,220mm",
            telefono: ciudad?.acf?.telefono
        },
        {
            id: 8,
            //imagenLingote: lingote250,
            nombreLingote: "Lingote de 250gr",
            precioLingote: precio250,
            medidaBlister: "sin blister",
            telefono: ciudad?.acf?.telefono
        },
        {
            id: 9,
            //imagenLingote: lingote500,
            nombreLingote: "Lingote de 500gr",
            precioLingote: precio500,
            medidaBlister: "sin blister",
            telefono: ciudad?.acf?.telefono
        },
        {
            id: 10,
            //imagenLingote: lingote1000,
            nombreLingote: "Lingote de 1000gr",
            precioLingote: precio1000,
            medidaBlister: "sin blister",
            telefono: ciudad?.acf?.telefono
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Lingotes_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorAmbosTablaLingotes),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Lingotes_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorTablas),
                    children: arrayLingotes.map((lingote, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Lingotes_module_css__WEBPACK_IMPORTED_MODULE_2___default().contendorDatos),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_Lingotes_module_css__WEBPACK_IMPORTED_MODULE_2___default().nombrePrecio),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: lingote.nombreLingote
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                lingote.precioLingote,
                                                "€"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_Lingotes_module_css__WEBPACK_IMPORTED_MODULE_2___default().oroFino),
                                    children: "Oro fino 999,9"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_Lingotes_module_css__WEBPACK_IMPORTED_MODULE_2___default().medidaBlister),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: "Medidas del blister:"
                                        }),
                                        " ",
                                        lingote.medidaBlister
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_Lingotes_module_css__WEBPACK_IMPORTED_MODULE_2___default().separador)
                                })
                            ]
                        }, index))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Lingotes_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorBotonLlamar),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: (_Lingotes_module_css__WEBPACK_IMPORTED_MODULE_2___default().botonLlamarTienda),
                    href: `tel:${ciudad.acf.telefono}`,
                    children: "LLAMA GRATIS"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabla2Lingotes);


/***/ })

};
;