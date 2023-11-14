"use strict";
(() => {
var exports = {};
exports.id = 4977;
exports.ids = [4977];
exports.modules = {

/***/ 7770:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CasaCambioValencia),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8874);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _componentes_BreadcrumbsRaiz_Breadcrumbs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9206);
/* harmony import */ var _componentes_casasDeCambioDivisasCiudades_Section_1_Section_uno_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9692);
/* harmony import */ var _componentes_casasDeCambioDivisasCiudades_Section_2_SectionDos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5871);
/* harmony import */ var _componentes_casasDeCambioDivisasCiudades_Section_3_SectionTres__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5991);
/* harmony import */ var _componentes_casasDeCambioDivisasCiudades_Section_4_SectionCuatro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7867);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(547);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _bradgarropy_next_seo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4579);
/* harmony import */ var _bradgarropy_next_seo__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_bradgarropy_next_seo__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _componentes_Layout_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7699);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4009);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_11__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const DynamicMapa = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(676), __webpack_require__.e(1664), __webpack_require__.e(7203)]).then(__webpack_require__.bind(__webpack_require__, 7203)), {
    loadableGenerated: {
        modules: [
            "casa-cambio-benidorm\\index.js -> " + "../../componentes/casasDeCambioDivisasCiudades/Mapa/Mapa.js"
        ]
    }
});
function CasaCambioValencia({ markers , menu_list , ciudad , general  }) {
    const schema = {
        "@context": "http://www.schema.org",
        "@type": "Organization",
        name: "Quickgold",
        url: `https://quickgold.es/casa-cambio-${ciudad?.acf?.ciudad_minuscula}/`,
        sameAs: [
            "https://instagram.com/quickgold.es",
            "https://twitter.com/quickgoldqg",
            "https://www.facebook.com/quickgold.es"
        ],
        logo: "https://quickgold.es/assets/logo-peque\xf1o.jpg",
        image: "https://quickgold.es/assets/logo-peque\xf1o.jpg",
        description: ciudad?.acf?.description_del_meta,
        address: {
            "@type": "PostalAddress",
            addressLocality: ciudad?.acf?.ciudad,
            addressRegion: ciudad?.acf?.ciudad,
            addressCountry: "Espa\xf1a"
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: `+34 ${ciudad?.acf?.telefono}`,
            contactType: "info@quickgold.es"
        }
    };
    const { ref: myRef , inView , entry  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_11__.useInView)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_12___default()), {
                id: "livechat",
                property: "lazyOnload",
                children: ciudad?.acf?.script_chat
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_bradgarropy_next_seo__WEBPACK_IMPORTED_MODULE_9___default()), {
                title: ciudad?.acf?.titulo_del_meta,
                description: ciudad?.acf?.description_del_meta,
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
                    ciudad?.acf?.nonscript_chat,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(schema)
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet preload prefetch",
                        href: "https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css",
                        as: "style"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_Layout_Layout__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                menu_list: menu_list,
                ciudad: ciudad,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_13___default().main),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_BreadcrumbsRaiz_Breadcrumbs_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            raiz: "Quickgold",
                            iconoRaiz: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8___default()), {}),
                            urlUbicacionActual: `/casas-cambio-${ciudad?.acf?.ciudad_minuscula}`,
                            iconoUbiccionActual: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8___default()), {}),
                            ubicacionActual: `Casas de Cambio ${ciudad?.acf?.ciudad}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_casasDeCambioDivisasCiudades_Section_1_Section_uno_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            ciudad: ciudad,
                            general: general
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_casasDeCambioDivisasCiudades_Section_2_SectionDos__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            ciudad: ciudad,
                            comprar: ciudad?.acf?.vende_divisa,
                            general: general
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_casasDeCambioDivisasCiudades_Section_3_SectionTres__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            ciudad: ciudad,
                            general: general
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componentes_casasDeCambioDivisasCiudades_Section_4_SectionCuatro__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            ciudad: ciudad,
                            general: general
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: "contenedorMapa",
                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_13___default().contenedorMapaVisibleCasaCambio),
                            ref: myRef,
                            children: inView ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicMapa, {
                                markers: markers,
                                ciudad: ciudad
                            }) : null
                        })
                    ]
                })
            })
        ]
    });
}
const idPaginaWp = "16218";
const apiGeneral = "13848";
//const idWp = "13848";
async function getStaticProps() {
    //datos de los campos personalizados de la ciudad
    const ciudad1 = await fetch(`https://panel.quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`);
    const ciudad = await ciudad1.json();
    //fin datos de los campos personalizados de la ciudad
    const res = await fetch(`https://panel.quickgold.es/wp-json/acf/v3/pages/${apiGeneral}`);
    const general = await res.json();
    /*const response = await fetch(
    `https://quickgold.es/wp-json/wp/v2/pages/${idWp}`
  );
  const dataIdWp = await response.json();*/ const nombreCiudad = ciudad?.acf?.ciudad_minuscula;
    const marker = await fetch(`https://panel.quickgold.es/markersMapa/markers${nombreCiudad}.json`);
    const markers = await marker.json();
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

/***/ 3804:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LocationOnOutlined");

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

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 4180:
/***/ ((module) => {

module.exports = require("@mui/material/SwipeableDrawer");

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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,5675,3573,5152,7699,9317,9206,2150], () => (__webpack_exec__(7770)));
module.exports = __webpack_exports__;

})();