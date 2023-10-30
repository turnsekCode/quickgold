"use strict";
(() => {
var exports = {};
exports.id = 8823;
exports.ids = [8823];
exports.modules = {

/***/ 5487:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Alicante),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8874);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _componentes_BreadcrumbsTiendas_Breadcrumbs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(942);
/* harmony import */ var _bradgarropy_next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4579);
/* harmony import */ var _bradgarropy_next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bradgarropy_next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _componentes_BotonLlamarFijo_BotonLamarFijo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7186);
/* harmony import */ var _componentes_BotonesLlamarWT_BotonesLlamar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2911);
/* harmony import */ var _componentes_BannerWallapop_BannerWallapop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3428);
/* harmony import */ var _componentes_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7699);
/* harmony import */ var _componentes_ComponenteHTML_Html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4009);
/* harmony import */ var _componentes_ComponentesPaginasCiudad_SeccionUno_SeccionUno__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6783);
/* harmony import */ var _componentes_ComponentesPaginasCiudad_seccionDos_SeccionDos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6817);
/* harmony import */ var _componentes_BannerGeneral_BannerPromoGeneral__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7967);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(547);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _componentes_MapaCiudades_MapaCiudades_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7319);
/* harmony import */ var _componentes_BannerPromoTiendas_BannerPromoTiendas_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2810);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















function Alicante({ markers , menu_list , ciudad , general  }) {
    const { ref: myRef , inView , entry  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__.useInView)();
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
                item: "https://quickgold.es/tiendas/compro-oro-alicante"
            }
        ]
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
                            __html: JSON.stringify(breadCrumb)
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet preload prefetch",
                        href: "https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css",
                        as: "style"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("noscript", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "stylesheet",
                            href: "https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: ciudad?.acf?.canonical
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_componentes_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                menu_list: menu_list,
                ciudad: ciudad,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        itemScope: true,
                        itemType: "http://schema.org/Organization",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                itemProp: "name",
                                content: "Quickgold"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                itemProp: "url",
                                content: "https://quickgold.es"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                itemProp: "logo",
                                content: "https://quickgold.es/wp-content/uploads/img/logo.jpg"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                itemProp: "image",
                                content: "https://quickgold.es/wp-content/uploads/img/logo.jpg"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                itemProp: "telephone",
                                content: "+34 900 373 629"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                itemProp: "email",
                                content: "info@quickgold.es"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                itemProp: "sameAs",
                                content: "https://www.facebook.com/quickgold.es"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                itemProp: "sameAs",
                                content: "https://twitter.com/quickgoldqg"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                itemProp: "sameAs",
                                content: "https://instagram.com/quickgold.es"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                itemProp: "address",
                                content: "Av. Alfonso El Sabio, 2. Alicante, Provincia de Alicante, 03004"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                itemProp: "address",
                                content: "Calle San Francisco, 38. Alicante, Provincia de Alicante, 03001"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().main),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BreadcrumbsTiendas_Breadcrumbs_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                raiz: "Quickgold",
                                tiendas: "Tiendas",
                                ubicacionActual: ciudad?.acf?.ciudad_landing,
                                iconoRaiz: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_13___default()), {}),
                                iconoUbiccionActual: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_13___default()), {}),
                                urlNombreCiudad: "https://quickgold.es/tiendas/compro-oro-alicante",
                                urlNombreTienda: "https://quickgold.es/tiendas/compro-oro-alicante"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_ComponentesPaginasCiudad_SeccionUno_SeccionUno__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                ciudad: ciudad
                            }),
                            ciudad?.acf?.activar_banner_en_tiendas_y_ciudad && general?.acf?.activar_promo_general ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BannerPromoTiendas_BannerPromoTiendas_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                ciudad: ciudad
                            }) : null,
                            ciudad?.acf?.activar_banner_en_tiendas_y_ciudad == false && general?.acf?.activar_promo_general ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BannerGeneral_BannerPromoGeneral__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                general: general
                            }) : null,
                            general?.acf?.activar_promo_general == false && ciudad?.acf?.activar_banner_en_tiendas_y_ciudad ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BannerPromoTiendas_BannerPromoTiendas_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                ciudad: ciudad
                            }) : null,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().contenedorSeccionUnoDos),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_ComponentesPaginasCiudad_seccionDos_SeccionDos__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        ciudad: ciudad
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().contenedorMapaVisible),
                                        ref: myRef,
                                        children: inView ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_MapaCiudades_MapaCiudades_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            markers: markers,
                                            ciudad: ciudad
                                        }) : null
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_ComponenteHTML_Html__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
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
const idPaginaWp = "4975";
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
    const tienda = ciudad?.acf?.ciudad_oro;
    // datos para las ciudades del mapa
    const marker = await fetch(`https://panel.quickgold.es/markersMapa/markers${tienda}.json`);
    const markers = await marker.json();
    /*const marker = await fetch(`https://quickgold.es/markers${idTienda}.json`);
  const markers = await marker.json();*/ //fin datos para las ciudades del mapa
    const menu = await fetch(`https://panel.quickgold.es/wp-json/menus/v1/menus/2219`);
    const menu_list = await menu.json();
    return {
        props: {
            markers,
            menu_list,
            ciudad,
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

/***/ 2081:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Call");

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

/***/ 5631:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Twitter");

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

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 5372:
/***/ ((module) => {

module.exports = require("react-map-gl");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,5675,3573,676,1664,7699,8626,7404,7319], () => (__webpack_exec__(5487)));
module.exports = __webpack_exports__;

})();