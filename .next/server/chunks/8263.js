exports.id = 8263;
exports.ids = [8263];
exports.modules = {

/***/ 6062:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorAccordion": "accordion_contenedorAccordion__wR88_",
	"tituloServicio": "accordion_tituloServicio__vL3Bl",
	"subTituloServicio": "accordion_subTituloServicio__dP9qv",
	"contenedorTituloServicio": "accordion_contenedorTituloServicio__w0igv",
	"accordionActivo": "accordion_accordionActivo__cFRWZ",
	"details": "accordion_details__I_w_T",
	"rayaAdorno": "accordion_rayaAdorno__XWIyl",
	"textoMenos": "accordion_textoMenos__zJUK8"
};


/***/ }),

/***/ 762:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorBreadcrumbs": "breadcrumbs_contenedorBreadcrumbs__oEfH7",
	"breadcrumbsRaiz": "breadcrumbs_breadcrumbsRaiz__v5kVj",
	"sectionBreadcrumbs": "breadcrumbs_sectionBreadcrumbs__jsGFF"
};


/***/ }),

/***/ 2795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AccordionServicios)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9409);
/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4604);
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8279);
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(765);
/* harmony import */ var _mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _accordion_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6062);
/* harmony import */ var _accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_accordion_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ConversorPlata_CalculadoraOro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5197);
/* harmony import */ var _ConversorDivisa_ConversorDivisa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7239);
/* harmony import */ var _ConversorPlata_BloquePrecioPlata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2950);
/* harmony import */ var _InvertirEnOro_Tabla2Lingotes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5251);
/* harmony import */ var _BloqueInfo_Empenos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7821);
"use client";













const Accordion = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_3___default()), {
        disableGutters: true,
        elevation: 0,
        square: true,
        ...props
    }))(({ theme  })=>({
        border: `1px solid ${theme.palette.divider}`,
        "&:not(:last-child)": {
            borderBottom: 0
        },
        "&:before": {
            display: "none"
        }
    }));
const AccordionSummary = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_4___default()), {
        expandIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6___default()), {
            sx: {
                fontSize: "2.5rem",
                color: "#fff",
                background: "#061B2D",
                borderRadius: "50%"
            }
        }),
        ...props
    }))(({ theme  })=>({
        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded svg": {
            transform: "rotate(360deg)",
            background: "#0692D0"
        },
        "& .MuiAccordionSummary-content": {
            marginLeft: theme.spacing(1)
        }
    }));
const AccordionDetails = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_5___default()))(({ theme  })=>({
        padding: theme.spacing(2)
    }));
function AccordionServicios({ ciudad  }) {
    const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("panel3");
    const handleChange = (panel)=>(event, newExpanded)=>{
            setExpanded(newExpanded ? panel : false);
        };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().contenedorAccordion),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Accordion, {
                    style: {
                        background: "#0F2D45",
                        borderRadius: "8px",
                        border: "none",
                        padding: "10px 20px 0 20px"
                    },
                    className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().contendorAccordion3),
                    expanded: expanded === "panel3",
                    onChange: handleChange("panel3"),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AccordionSummary, {
                            style: {
                                padding: "0",
                                borderBottom: "2px solid #fff"
                            },
                            "aria-controls": "panel3d-content",
                            id: "panel3d-header",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().contenedorTituloServicio),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: expanded === "panel3" ? `${(_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().tituloServicio)} ${(_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().accordionActivo)}` : `${(_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().tituloServicio)}`,
                                        children: "Cambio de divisas"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().subTituloServicio),
                                        children: [
                                            "Somos la ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "casa de cambio"
                                            }),
                                            " preferida por miles de personas al a\xf1o en ",
                                            ciudad?.acf?.ciudad_landing,
                                            ".",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Cambiar divisa"
                                            }),
                                            " en Quickgold siempre es sin comisiones y, f\xe1cil y r\xe1pido."
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AccordionDetails, {
                            className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().details),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ConversorDivisa_ConversorDivisa__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                ciudad: ciudad
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Accordion, {
                    id: "precioOro",
                    style: {
                        background: "#0F2D45",
                        borderRadius: "8px",
                        border: "none",
                        padding: "10px 20px 0 20px"
                    },
                    className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().contendorAccordion1),
                    expanded: expanded === "panel1",
                    onChange: handleChange("panel1"),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AccordionSummary, {
                            style: {
                                padding: "0",
                                borderBottom: "2px solid #fff"
                            },
                            "aria-controls": "panel1d-content",
                            id: "panel1d-header",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().contenedorTituloServicio),
                                children: [
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: expanded === "panel1" ? `${(_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().tituloServicio)} ${(_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().accordionActivo)}` : `${(_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().tituloServicio)}`,
                                        children: "Precio del oro"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().subTituloServicio),
                                        children: [
                                            "Vender ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "oro al mejor precio"
                                            }),
                                            " es f\xe1cil en nuestras tiendas ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Compro oro"
                                            }),
                                            " en",
                                            " ",
                                            ciudad?.acf?.ciudad_landing,
                                            ". M\xe1s de 15 a\xf1os en el sector siendo la empresa referente en las ciudades donde estamos."
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AccordionDetails, {
                            className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().details),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ConversorPlata_CalculadoraOro__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                ciudad: ciudad
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Accordion, {
                    style: {
                        background: "#0F2D45",
                        borderRadius: "8px",
                        border: "none",
                        padding: "10px 20px 0 20px"
                    },
                    className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().contendorAccordion2),
                    expanded: expanded === "panel2",
                    onChange: handleChange("panel2"),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AccordionSummary, {
                            style: {
                                padding: "0",
                                borderBottom: "2px solid #fff"
                            },
                            "aria-controls": "panel2d-content",
                            id: "panel2d-header",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().contenedorTituloServicio),
                                children: [
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: expanded === "panel2" ? `${(_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().tituloServicio)} ${(_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().accordionActivo)}` : `${(_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().tituloServicio)}`,
                                        children: "Precio de la plata"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().subTituloServicio),
                                        children: [
                                            "Compramos ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "plata al mejor precio"
                                            }),
                                            ": joyas, cuberter\xedas, etc. Somos los l\xedderes en la",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "compra de joyas"
                                            }),
                                            " en",
                                            " ",
                                            ciudad?.acf?.ciudad_landing,
                                            "."
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AccordionDetails, {
                            className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().details),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ConversorPlata_BloquePrecioPlata__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                ciudad: ciudad
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Accordion, {
                    style: {
                        background: "#0F2D45",
                        borderRadius: "8px",
                        border: "none",
                        padding: "10px 20px 0 20px"
                    },
                    className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().contendorAccordion4),
                    expanded: expanded === "panel4",
                    onChange: handleChange("panel4"),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AccordionSummary, {
                            style: {
                                padding: "0",
                                borderBottom: "2px solid #fff"
                            },
                            "aria-controls": "panel4d-content",
                            id: "panel4d-header",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().contenedorTituloServicio),
                                children: [
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: expanded === "panel4" ? `${(_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().tituloServicio)} ${(_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().accordionActivo)}` : `${(_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().tituloServicio)}`,
                                        children: "Empe\xf1o de joyas"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().subTituloServicio),
                                        children: [
                                            "Nuestros ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "empe\xf1os sin inter\xe9s el primer mes"
                                            }),
                                            " ",
                                            "hacen que empe\xf1ar oro sea mucho m\xe1s c\xf3modo y f\xe1cil para nuestros clientes."
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AccordionDetails, {
                            className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().details),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BloqueInfo_Empenos__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                ciudad: ciudad
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Accordion, {
                    style: {
                        background: "#0F2D45",
                        borderRadius: "8px",
                        border: "none",
                        padding: "10px 20px 0 20px"
                    },
                    className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().contendorAccordion5),
                    expanded: expanded === "panel5",
                    onChange: handleChange("panel5"),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AccordionSummary, {
                            style: {
                                padding: "0"
                            },
                            "aria-controls": "panel5d-content",
                            id: "panel5d-header",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().contenedorTituloServicio),
                                children: [
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: expanded === "panel5" ? `${(_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().tituloServicio)} ${(_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().accordionActivo)}` : `${(_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().tituloServicio)}`,
                                        children: "Invertir en oro"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().subTituloServicio),
                                        children: "Venta de lingotes de oro con las mejores condiciones. El oro, como valor refugio est\xe1 claramente por encima de otro tipo de inversiones."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AccordionDetails, {
                            style: {
                                border: "none"
                            },
                            className: (_accordion_module_css__WEBPACK_IMPORTED_MODULE_12___default().details),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InvertirEnOro_Tabla2Lingotes__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                ciudad: ciudad
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _breadcrumbs_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(762);
/* harmony import */ var _breadcrumbs_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_breadcrumbs_module_css__WEBPACK_IMPORTED_MODULE_2__);



const Breadcrumbs = ({ raiz , tiendas , nombreCiudad , nombreTienda , ubicacionActual , urlNombreCiudad , urlNombreTienda , iconoRaiz , iconoTiendas , iconoUbiccionActual  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_breadcrumbs_module_css__WEBPACK_IMPORTED_MODULE_2___default().sectionBreadcrumbs),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_breadcrumbs_module_css__WEBPACK_IMPORTED_MODULE_2___default().contenedorBreadcrumbs),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/",
                        title: `Ir a ${raiz}`,
                        children: raiz
                    }),
                    iconoRaiz,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/tiendas",
                        title: `Ir a ${tiendas}`,
                        children: tiendas
                    }),
                    iconoTiendas,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: urlNombreCiudad,
                        title: `Ir a ${nombreCiudad}`,
                        children: nombreCiudad
                    }),
                    iconoUbiccionActual,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: urlNombreTienda,
                        title: `Ir a ${nombreTienda}`,
                        children: nombreTienda
                    }),
                    iconoTiendas
                ]
            }),
            ubicacionActual
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumbs);


/***/ })

};
;