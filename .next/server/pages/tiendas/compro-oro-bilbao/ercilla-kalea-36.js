"use strict";
(() => {
var exports = {};
exports.id = 8811;
exports.ids = [8811];
exports.modules = {

/***/ 280:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bilbao),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8874);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _componentes_BreadcrumbsTiendas_Breadcrumbs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(942);
/* harmony import */ var _bradgarropy_next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4579);
/* harmony import */ var _bradgarropy_next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bradgarropy_next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _componentes_BotonLlamarFijo_BotonLamarFijo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7186);
/* harmony import */ var _componentes_BotonesLlamarWT_BotonesLlamar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2911);
/* harmony import */ var _componentes_BannerWallapop_BannerWallapop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3428);
/* harmony import */ var _componentes_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7699);
/* harmony import */ var _componentes_ComponentesPaginasDeTiendas_SeccionUno_SeccionUno__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8609);
/* harmony import */ var _componentes_ComponentesPaginasDeTiendas_seccionDos_SeccionDos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2093);
/* harmony import */ var _componentes_ComponentesPaginasDeTiendas_SeccionTres_SeccionTres__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1643);
/* harmony import */ var _componentes_BannerPromoTiendas_BannerPromoTiendas_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2810);
/* harmony import */ var _componentes_BannerGeneral_BannerPromoGeneral__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7967);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(547);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_script_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3159);
/* harmony import */ var next_script_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_script_js__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_componentes_ComponentesPaginasDeTiendas_SeccionTres_SeccionTres__WEBPACK_IMPORTED_MODULE_10__]);
_componentes_ComponentesPaginasDeTiendas_SeccionTres_SeccionTres__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















function Bilbao({ menu_list , ciudad , tiendaGoogle , general  }) {
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
                item: "https://quickgold.es/tiendas"
            },
            {
                "@type": "ListItem",
                position: 3,
                name: ciudad?.acf?.ciudad_landing,
                item: "https://quickgold.es/tiendas/compro-oro-bilbao"
            },
            {
                "@type": "ListItem",
                position: 4,
                name: "ercilla-kalea-36",
                item: "https://quickgold.es/tiendas/compro-oro-bilbao/ercilla-kalea-36"
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
        image: `/assets/img/${ciudad?.acf?.tienda}.jpg`,
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_bradgarropy_next_seo__WEBPACK_IMPORTED_MODULE_3___default()), {
                title: ciudad?.acf?.titulo_del_meta,
                description: ciudad?.acf?.descripcion_del_meta,
                icon: "/favicon.png",
                facebook: {
                    image: `/assets/img/${ciudad?.acf?.tienda}.jpg`,
                    url: "https://www.facebook.com/quickgold.es/",
                    type: "article"
                },
                twitter: {
                    image: `/assets/img/${ciudad?.acf?.tienda}.jpg`,
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
                    ciudad?.acf?.nonscript_chat,
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script_js__WEBPACK_IMPORTED_MODULE_14___default()), {
                id: "livechat",
                property: "lazyOnload",
                children: ciudad?.acf?.script_chat
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_componentes_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                menu_list: menu_list,
                ciudad: ciudad,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().main),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BreadcrumbsTiendas_Breadcrumbs_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                raiz: "Quickgold",
                                tiendas: "Tiendas",
                                urlNombreCiudad: "https://quickgold.es/tiendas/compro-oro-bilbao/ercilla-kalea-36",
                                urlNombreTienda: "https://quickgold.es/tiendas/compro-oro-bilbao",
                                nombreCiudad: ciudad?.acf?.nombreCiudad,
                                nombreTienda: ciudad?.acf?.ciudad_landing,
                                ubicacionActual: ciudad?.acf?.nombre_tienda,
                                iconoRaiz: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_13___default()), {}),
                                iconoTiendas: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_13___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_ComponentesPaginasDeTiendas_SeccionUno_SeccionUno__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                ciudad: ciudad,
                                tiendaGoogle: tiendaGoogle
                            }),
                            ciudad?.acf?.activar_banner_en_tiendas_y_ciudad && general?.acf?.activar_promo_general ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BannerPromoTiendas_BannerPromoTiendas_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                ciudad: ciudad
                            }) : null,
                            ciudad?.acf?.activar_banner_en_tiendas_y_ciudad == false && general?.acf?.activar_promo_general ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BannerGeneral_BannerPromoGeneral__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                general: general
                            }) : null,
                            general?.acf?.activar_promo_general == false && ciudad?.acf?.activar_banner_en_tiendas_y_ciudad ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BannerPromoTiendas_BannerPromoTiendas_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                ciudad: ciudad
                            }) : null,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().contenedorSeccionUnoDos),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_ComponentesPaginasDeTiendas_seccionDos_SeccionDos__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        ciudad: ciudad
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_ComponentesPaginasDeTiendas_SeccionTres_SeccionTres__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        ciudad: ciudad,
                                        tiendaGoogle: tiendaGoogle
                                    })
                                ]
                            })
                        ]
                    }),
                    ciudad?.acf?.tienda === "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BotonLlamarFijo_BotonLamarFijo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        ciudad: ciudad
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BotonesLlamarWT_BotonesLlamar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        ciudad: ciudad
                    }),
                    ciudad?.acf?.activar_banner_wallapop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BannerWallapop_BannerWallapop__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        ciudad: ciudad
                    }) : null
                ]
            })
        ]
    });
}
const idPaginaWp = "5412";
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
    const tienda = ciudad?.acf?.tienda;
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

module.exports = require("@bradgarropy/next-seo");

/***/ }),

/***/ 765:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowDropDown");

/***/ }),

/***/ 6741:
/***/ ((module) => {

module.exports = require("@mui/icons-material/CheckCircle");

/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 7666:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Facebook");

/***/ }),

/***/ 3281:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Instagram");

/***/ }),

/***/ 4845:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowDown");

/***/ }),

/***/ 547:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowRight");

/***/ }),

/***/ 9881:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowUp");

/***/ }),

/***/ 5939:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LinkedIn");

/***/ }),

/***/ 2906:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Lock");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 8377:
/***/ ((module) => {

module.exports = require("@mui/icons-material/PhoneInTalk");

/***/ }),

/***/ 5631:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Twitter");

/***/ }),

/***/ 2232:
/***/ ((module) => {

module.exports = require("@mui/icons-material/WhatsApp");

/***/ }),

/***/ 9409:
/***/ ((module) => {

module.exports = require("@mui/material/Accordion");

/***/ }),

/***/ 8279:
/***/ ((module) => {

module.exports = require("@mui/material/AccordionDetails");

/***/ }),

/***/ 4604:
/***/ ((module) => {

module.exports = require("@mui/material/AccordionSummary");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 4180:
/***/ ((module) => {

module.exports = require("@mui/material/SwipeableDrawer");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 3159:
/***/ ((module) => {

module.exports = require("next/script.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5337:
/***/ ((module) => {

module.exports = require("react-scroll-to-top");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4009:
/***/ ((module) => {

module.exports = import("react-intersection-observer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,5675,7699,9317,4571,931,7741,2950,5197,7821,5251,8263,5439,2612], () => (__webpack_exec__(280)));
module.exports = __webpack_exports__;

})();