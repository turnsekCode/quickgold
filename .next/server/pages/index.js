(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 349:
/***/ ((module) => {

// Exports
module.exports = {
	"sectionBreadcrumbs": "breadcrumbs_sectionBreadcrumbs__Dem_8",
	"contenedorBreadcrumbs": "breadcrumbs_contenedorBreadcrumbs__SE9H6"
};


/***/ }),

/***/ 3044:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSectionUno": "section_uno_contenedorSectionUno__swk9H",
	"contenedorTexto": "section_uno_contenedorTexto__fzdam",
	"titulo": "section_uno_titulo___i_X1",
	"texto": "section_uno_texto__t4i3s"
};


/***/ }),

/***/ 239:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSectionDos": "sectionDos_contenedorSectionDos__ggOoo",
	"TituloSectionDos": "sectionDos_TituloSectionDos__m5NkL",
	"textoSectionDos": "sectionDos_textoSectionDos__TgghW",
	"select": "sectionDos_select__F_Njh",
	"lineaAdorno": "sectionDos_lineaAdorno__zyxDZ"
};


/***/ }),

/***/ 3793:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorMapa": "mapa_contenedorMapa__V09TP",
	"contenedorbloqueIzq": "mapa_contenedorbloqueIzq__bt_l6",
	"bloqueDer": "mapa_bloqueDer__2tttk",
	"bloqueIzq": "mapa_bloqueIzq__xEDCv",
	"linea": "mapa_linea__l_1CE",
	"reset_map": "mapa_reset_map__04oFG",
	"contenedorTiendas": "mapa_contenedorTiendas__1o8Cq",
	"tienda": "mapa_tienda__0WwNe",
	"mapboxgl-popup-close-button": "mapa_mapboxgl-popup-close-button__sDg3E",
	"nombre_ciudad_popup": "mapa_nombre_ciudad_popup__tK8wP",
	"direccion_popup": "mapa_direccion_popup__W2FzU",
	"telefono_popup": "mapa_telefono_popup__j50th",
	"boton_como_llegar": "mapa_boton_como_llegar__I_694",
	"contenedorInfoTiendaMapa": "mapa_contenedorInfoTiendaMapa__jCQ8I",
	"contenedorInfoTiendaMapaActivo": "mapa_contenedorInfoTiendaMapaActivo__Yatjb"
};


/***/ }),

/***/ 4021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/styles/Home.module.css
var Home_module = __webpack_require__(8874);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/componentes/Breadcrumbs/breadcrumbs.module.css
var breadcrumbs_module = __webpack_require__(349);
var breadcrumbs_module_default = /*#__PURE__*/__webpack_require__.n(breadcrumbs_module);
// EXTERNAL MODULE: external "@mui/icons-material/KeyboardArrowRight"
var KeyboardArrowRight_ = __webpack_require__(547);
var KeyboardArrowRight_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowRight_);
;// CONCATENATED MODULE: ./src/componentes/Breadcrumbs/Breadcrumbs.js




const Breadcrumbs = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (breadcrumbs_module_default()).sectionBreadcrumbs,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (breadcrumbs_module_default()).contenedorBreadcrumbs,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://quickgold.es",
                        title: "Ir a Quickgold",
                        children: "Quickgold"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((KeyboardArrowRight_default()), {})
                ]
            }),
            "Tiendas"
        ]
    });
};
/* harmony default export */ const Breadcrumbs_Breadcrumbs = (Breadcrumbs);

// EXTERNAL MODULE: ./src/componentes/ComponentePaginaTienda/Section_1/section_uno.module.css
var section_uno_module = __webpack_require__(3044);
var section_uno_module_default = /*#__PURE__*/__webpack_require__.n(section_uno_module);
;// CONCATENATED MODULE: ./src/componentes/ComponentePaginaTienda/Section_1/Section_uno.js



const Section_uno = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (section_uno_module_default()).contenedorSectionUno,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (section_uno_module_default()).contenedorTexto,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: (section_uno_module_default()).titulo,
                    children: "Tiendas quickgold"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: (section_uno_module_default()).texto,
                    children: [
                        "Actualmente contamos con un total de ",
                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                            children: "60"
                        }),
                        " tiendas."
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Section_1_Section_uno = (Section_uno);

// EXTERNAL MODULE: ./src/componentes/Layout/Layout.js + 6 modules
var Layout = __webpack_require__(7699);
// EXTERNAL MODULE: external "@bradgarropy/next-seo"
var next_seo_ = __webpack_require__(4579);
var next_seo_default = /*#__PURE__*/__webpack_require__.n(next_seo_);
// EXTERNAL MODULE: ./src/componentes/ComponentePaginaTienda/Section_2/sectionDos.module.css
var sectionDos_module = __webpack_require__(239);
var sectionDos_module_default = /*#__PURE__*/__webpack_require__.n(sectionDos_module);
;// CONCATENATED MODULE: external "@mui/icons-material/RadioButtonChecked"
const RadioButtonChecked_namespaceObject = require("@mui/icons-material/RadioButtonChecked");
var RadioButtonChecked_default = /*#__PURE__*/__webpack_require__.n(RadioButtonChecked_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/RadioButtonUnchecked"
const RadioButtonUnchecked_namespaceObject = require("@mui/icons-material/RadioButtonUnchecked");
var RadioButtonUnchecked_default = /*#__PURE__*/__webpack_require__.n(RadioButtonUnchecked_namespaceObject);
// EXTERNAL MODULE: ./src/componentes/Mapas/mapa.module.css
var mapa_module = __webpack_require__(3793);
var mapa_module_default = /*#__PURE__*/__webpack_require__.n(mapa_module);
// EXTERNAL MODULE: external "@mui/icons-material/Call"
var Call_ = __webpack_require__(2081);
var Call_default = /*#__PURE__*/__webpack_require__.n(Call_);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3094);
// EXTERNAL MODULE: external "react-map-gl"
var external_react_map_gl_ = __webpack_require__(5372);
var external_react_map_gl_default = /*#__PURE__*/__webpack_require__.n(external_react_map_gl_);
;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaAlcobendas/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaAlcobendas({ alcobendas  }) {
    const marcador = alcobendas?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: alcobendas?.markerInicial[0].longitude,
        latitude: alcobendas?.markerInicial[0].latitude,
        zoom: alcobendas?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                alcobendas.markerInicial[0].longitude,
                alcobendas.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: alcobendas?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker.id,
            longitude: marker.longitude,
            latitude: marker.latitude,
            tienda: marker.tienda,
            telefono: marker.telefono,
            direccion: marker.direccion,
            comoLlegar: marker.comoLlegar,
            nombreTienda: marker.nombreTienda,
            duration: marker.duration,
            zoom: marker.zoom,
            url: marker.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker.longitude,
                lat: marker.latitude
            },
            duration: 1500,
            zoom: marker.zoom
        });
        setActiveId(marker.id);
    };
    const numeroDeTiendas = alcobendas?.arrayMarker[alcobendas.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaAlcorcon/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaAlcorcon({ alcorcon  }) {
    const marcador = alcorcon?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: alcorcon?.markerInicial[0].longitude,
        latitude: alcorcon?.markerInicial[0].latitude,
        zoom: alcorcon?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                alcorcon.markerInicial[0].longitude,
                alcorcon.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: alcorcon?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = alcorcon?.arrayMarker[alcorcon?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaAlicante/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaAlicante({ alicante  }) {
    const marcador = alicante?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: alicante?.markerInicial[0].longitude,
        latitude: alicante?.markerInicial[0].latitude,
        zoom: alicante?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                alicante.markerInicial[0].longitude,
                alicante.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: alicante?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker.id,
            longitude: marker.longitude,
            latitude: marker.latitude,
            tienda: marker.tienda,
            telefono: marker.telefono,
            direccion: marker.direccion,
            comoLlegar: marker.comoLlegar,
            nombreTienda: marker.nombreTienda,
            duration: marker.duration,
            zoom: marker.zoom,
            url: marker.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker.longitude,
                lat: marker.latitude
            },
            duration: 1500,
            zoom: marker.zoom
        });
        setActiveId(marker.id);
    };
    const numeroDeTiendas = alicante?.arrayMarker[alicante.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaAlcaladehenares/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaAlcaladehenares({ alcaladehenares  }) {
    const marcador = alcaladehenares?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: alcaladehenares?.markerInicial[0].longitude,
        latitude: alcaladehenares?.markerInicial[0].latitude,
        zoom: alcaladehenares?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                alcaladehenares?.markerInicial[0].longitude,
                alcaladehenares?.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: alcaladehenares?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker.id,
            longitude: marker.longitude,
            latitude: marker.latitude,
            tienda: marker.tienda,
            telefono: marker.telefono,
            direccion: marker.direccion,
            comoLlegar: marker.comoLlegar,
            nombreTienda: marker.nombreTienda,
            duration: marker.duration,
            zoom: marker.zoom,
            url: marker.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker.longitude,
                lat: marker.latitude
            },
            duration: 1500,
            zoom: marker.zoom
        });
        setActiveId(marker.id);
    };
    const numeroDeTiendas = alcaladehenares?.arrayMarker[alcaladehenares.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 260
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaAlmeria/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaAlmeria({ almeria  }) {
    const marcador = almeria?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: almeria?.markerInicial[0].longitude,
        latitude: almeria?.markerInicial[0].latitude,
        zoom: almeria?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                almeria.markerInicial[0].longitude,
                almeria.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: almeria?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = almeria?.arrayMarker[almeria?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaBarcelona/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaBarcelona({ barcelona  }) {
    const marcador = barcelona?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: barcelona?.markerInicial[0].longitude,
        latitude: barcelona?.markerInicial[0].latitude,
        zoom: barcelona?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                barcelona.markerInicial[0].longitude,
                barcelona.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: barcelona?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = barcelona?.arrayMarker[barcelona?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 260
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaBenidorm/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaBenidorm({ benidorm  }) {
    const marcador = benidorm?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: benidorm?.markerInicial[0].longitude,
        latitude: benidorm?.markerInicial[0].latitude,
        zoom: benidorm?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                benidorm.markerInicial[0].longitude,
                benidorm.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: benidorm?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = benidorm?.arrayMarker[benidorm?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaBilbao/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaBilbao({ bilbao  }) {
    const marcador = bilbao?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: bilbao?.markerInicial[0].longitude,
        latitude: bilbao?.markerInicial[0].latitude,
        zoom: bilbao?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                bilbao.markerInicial[0].longitude,
                bilbao.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: bilbao?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = bilbao?.arrayMarker[bilbao?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaCadiz/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaCadiz({ cadiz  }) {
    const marcador = cadiz?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: cadiz?.markerInicial[0].longitude,
        latitude: cadiz?.markerInicial[0].latitude,
        zoom: cadiz?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                cadiz.markerInicial[0].longitude,
                cadiz.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: cadiz?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = cadiz?.arrayMarker[cadiz?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaCartagena/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaCartagena({ cartagena  }) {
    const marcador = cartagena?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: cartagena?.markerInicial[0].longitude,
        latitude: cartagena?.markerInicial[0].latitude,
        zoom: cartagena?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                cartagena.markerInicial[0].longitude,
                cartagena.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: cartagena?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = cartagena?.arrayMarker[cartagena?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaCastellon/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaCastellon({ castellon  }) {
    const marcador = castellon?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: castellon?.markerInicial[0].longitude,
        latitude: castellon?.markerInicial[0].latitude,
        zoom: castellon?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                castellon.markerInicial[0].longitude,
                castellon.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: castellon?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = castellon?.arrayMarker[castellon?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaCordoba/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaCordoba({ cordoba  }) {
    const marcador = cordoba?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: cordoba?.markerInicial[0].longitude,
        latitude: cordoba?.markerInicial[0].latitude,
        zoom: cordoba?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                cordoba.markerInicial[0].longitude,
                cordoba.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: cordoba?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = cordoba?.arrayMarker[cordoba?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaElche/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaElche({ elche  }) {
    const marcador = elche?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: elche?.markerInicial[0].longitude,
        latitude: elche?.markerInicial[0].latitude,
        zoom: elche?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                elche.markerInicial[0].longitude,
                elche.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: elche?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = elche?.arrayMarker[elche?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaGetafe/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaGetafe({ getafe  }) {
    const marcador = getafe?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: getafe?.markerInicial[0].longitude,
        latitude: getafe?.markerInicial[0].latitude,
        zoom: getafe?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                getafe.markerInicial[0].longitude,
                getafe.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: getafe?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = getafe?.arrayMarker[getafe?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaGijon/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaGijon({ gijon  }) {
    const marcador = gijon?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: gijon?.markerInicial[0].longitude,
        latitude: gijon?.markerInicial[0].latitude,
        zoom: gijon?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                gijon.markerInicial[0].longitude,
                gijon.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: gijon?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = gijon?.arrayMarker[gijon?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaGranada/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaGranada({ granada  }) {
    const marcador = granada?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: granada?.markerInicial[0].longitude,
        latitude: granada?.markerInicial[0].latitude,
        zoom: granada?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                granada.markerInicial[0].longitude,
                granada.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: granada?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = granada?.arrayMarker[granada?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaLaCoruna/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaLaCoruna({ lacoruna  }) {
    const marcador = lacoruna?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: lacoruna?.markerInicial[0].longitude,
        latitude: lacoruna?.markerInicial[0].latitude,
        zoom: lacoruna?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                lacoruna.markerInicial[0].longitude,
                lacoruna.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: lacoruna?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = lacoruna?.arrayMarker[lacoruna?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaLeon/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaLeon({ leon  }) {
    const marcador = leon?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: leon?.markerInicial[0].longitude,
        latitude: leon?.markerInicial[0].latitude,
        zoom: leon?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                leon.markerInicial[0].longitude,
                leon.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: leon?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = leon?.arrayMarker[leon?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaLogrono/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaLogrono({ logrono  }) {
    const marcador = logrono?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: logrono?.markerInicial[0].longitude,
        latitude: logrono?.markerInicial[0].latitude,
        zoom: logrono?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                logrono.markerInicial[0].longitude,
                logrono.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: logrono?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = logrono?.arrayMarker[logrono?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaMadrid/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaMadrid({ madrid  }) {
    const marcador = madrid?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: madrid?.markerInicial[0].longitude,
        latitude: madrid?.markerInicial[0].latitude,
        zoom: madrid?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                madrid.markerInicial[0].longitude,
                madrid.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: madrid?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = madrid?.arrayMarker[madrid?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaMalaga/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaMalaga({ malaga  }) {
    const marcador = malaga?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: malaga?.markerInicial[0].longitude,
        latitude: malaga?.markerInicial[0].latitude,
        zoom: malaga?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                malaga.markerInicial[0].longitude,
                malaga.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: malaga?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = malaga?.arrayMarker[malaga?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaMarbella/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaMarbella({ marbella  }) {
    const marcador = marbella?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: marbella?.markerInicial[0].longitude,
        latitude: marbella?.markerInicial[0].latitude,
        zoom: marbella?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                marbella.markerInicial[0].longitude,
                marbella.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: marbella?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = marbella?.arrayMarker[marbella?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaMurcia/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaMurcia({ murcia  }) {
    const marcador = murcia?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: murcia?.markerInicial[0].longitude,
        latitude: murcia?.markerInicial[0].latitude,
        zoom: murcia?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                murcia.markerInicial[0].longitude,
                murcia.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: murcia?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = murcia?.arrayMarker[murcia?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaOviedo/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaOviedo({ oviedo  }) {
    const marcador = oviedo?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: oviedo?.markerInicial[0].longitude,
        latitude: oviedo?.markerInicial[0].latitude,
        zoom: oviedo?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                oviedo.markerInicial[0].longitude,
                oviedo.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: oviedo?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = oviedo?.arrayMarker[oviedo?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaPalma/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaPalma({ palma  }) {
    const marcador = palma?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: palma?.markerInicial[0].longitude,
        latitude: palma?.markerInicial[0].latitude,
        zoom: palma?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                palma.markerInicial[0].longitude,
                palma.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: palma?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = palma?.arrayMarker[palma?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaReus/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaReus({ reus  }) {
    const marcador = reus?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: reus?.markerInicial[0].longitude,
        latitude: reus?.markerInicial[0].latitude,
        zoom: reus?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                reus.markerInicial[0].longitude,
                reus.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: reus?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = reus?.arrayMarker[reus?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaRoquetasDeMar/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaRoquetasDeMar({ roquetasdemar  }) {
    const marcador = roquetasdemar?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: roquetasdemar?.markerInicial[0].longitude,
        latitude: roquetasdemar?.markerInicial[0].latitude,
        zoom: roquetasdemar?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                roquetasdemar.markerInicial[0].longitude,
                roquetasdemar.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: roquetasdemar?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = roquetasdemar?.arrayMarker[roquetasdemar?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaSantaCruz/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaSantaCruzDeTenerife({ santacruzdetenerife  }) {
    const marcador = santacruzdetenerife?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: santacruzdetenerife?.markerInicial[0].longitude,
        latitude: santacruzdetenerife?.markerInicial[0].latitude,
        zoom: santacruzdetenerife?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                santacruzdetenerife.markerInicial[0].longitude,
                santacruzdetenerife.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: santacruzdetenerife?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = santacruzdetenerife?.arrayMarker[santacruzdetenerife?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaSantander/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaSantander({ santander  }) {
    const marcador = santander?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: santander?.markerInicial[0].longitude,
        latitude: santander?.markerInicial[0].latitude,
        zoom: santander?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                santander.markerInicial[0].longitude,
                santander.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: santander?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = santander?.arrayMarker[santander?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaSantiago/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaSantiago({ santiagodecompostela  }) {
    const marcador = santiagodecompostela?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: santiagodecompostela?.markerInicial[0].longitude,
        latitude: santiagodecompostela?.markerInicial[0].latitude,
        zoom: santiagodecompostela?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                santiagodecompostela.markerInicial[0].longitude,
                santiagodecompostela.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: santiagodecompostela?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = santiagodecompostela?.arrayMarker[santiagodecompostela?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaSevilla/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaSevilla({ sevilla  }) {
    const marcador = sevilla?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: sevilla?.markerInicial[0].longitude,
        latitude: sevilla?.markerInicial[0].latitude,
        zoom: sevilla?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                sevilla.markerInicial[0].longitude,
                sevilla.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: sevilla?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = sevilla?.arrayMarker[sevilla?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaTarragona/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaTarragona({ tarragona  }) {
    const marcador = tarragona?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: tarragona?.markerInicial[0].longitude,
        latitude: tarragona?.markerInicial[0].latitude,
        zoom: tarragona?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                tarragona.markerInicial[0].longitude,
                tarragona.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: tarragona?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = tarragona?.arrayMarker[tarragona?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaValencia/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaValencia({ valencia  }) {
    const marcador = valencia?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: valencia?.markerInicial[0].longitude,
        latitude: valencia?.markerInicial[0].latitude,
        zoom: valencia?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                valencia.markerInicial[0].longitude,
                valencia.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: valencia?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = valencia?.arrayMarker[valencia?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaValladolid/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaValladolid({ valladolid  }) {
    const marcador = valladolid?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: valladolid?.markerInicial[0].longitude,
        latitude: valladolid?.markerInicial[0].latitude,
        zoom: valladolid?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                valladolid.markerInicial[0].longitude,
                valladolid.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: valladolid?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = valladolid?.arrayMarker[valladolid?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaVigo/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaVigo({ vigo  }) {
    const marcador = vigo?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: vigo?.markerInicial[0].longitude,
        latitude: vigo?.markerInicial[0].latitude,
        zoom: vigo?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                vigo.markerInicial[0].longitude,
                vigo.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: vigo?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = vigo?.arrayMarker[vigo?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/Mapas/MapaZaragoza/Mapa.js








/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ function MapaZaragoza({ zaragoza  }) {
    const marcador = zaragoza?.arrayMarker;
    const [viewState, setViewState] = (0,external_react_.useState)({
        longitude: zaragoza?.markerInicial[0].longitude,
        latitude: zaragoza?.markerInicial[0].latitude,
        zoom: zaragoza?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,external_react_.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                zaragoza.markerInicial[0].longitude,
                zaragoza.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: zaragoza?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,external_react_.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,external_react_.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: "",
        url: ""
    });
    const [activeId, setActiveId] = (0,external_react_.useState)("");
    const onSelectMarker = (marker)=>{
        setShowInfo({
            id: marker?.id,
            longitude: marker?.longitude,
            latitude: marker?.latitude,
            tienda: marker?.tienda,
            telefono: marker?.telefono,
            direccion: marker?.direccion,
            comoLlegar: marker?.comoLlegar,
            nombreTienda: marker?.nombreTienda,
            duration: marker?.duration,
            zoom: marker?.zoom,
            url: marker?.url
        });
        mapRef.current?.flyTo({
            center: {
                lng: marker?.longitude,
                lat: marker?.latitude
            },
            duration: 1500,
            zoom: marker?.zoom
        });
        setActiveId(marker?.id);
    };
    const numeroDeTiendas = zaragoza?.arrayMarker[zaragoza?.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (mapa_module_default()).contenedorMapa,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).contenedorbloqueIzq,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (mapa_module_default()).contenedorTiendas,
                    children: marcador?.map((marker)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                toggleTab();
                                onSelectMarker(marker);
                            },
                            className: activeId === marker.id && showPopup ? `${(mapa_module_default()).contenedorInfoTiendaMapa} ${(mapa_module_default()).contenedorInfoTiendaMapaActivo}` : ` ${(mapa_module_default()).contenedorInfoTiendaMapa}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: [
                                        activeId === marker.id && showPopup ? /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonChecked_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((RadioButtonUnchecked_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: marker.nombreTienda
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    to: "contenedorMapa2",
                                    smooth: true,
                                    offset: -110,
                                    spy: true,
                                    duration: 500,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).tienda,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: marker.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker.telefono
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, marker.id))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mapa_module_default()).bloqueDer,
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (mapa_module_default()).mapa,
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (mapa_module_default()).reset_map,
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador?.map((marker)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo.longitude,
                                    className: "popup",
                                    latitude: showInfo.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (mapa_module_default()).contenedor_popuop,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (mapa_module_default()).nombre_ciudad_popup,
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (mapa_module_default()).direccion_popup,
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (mapa_module_default()).telefono_popup,
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {})
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Sitio Web",
                                                href: showInfo.url,
                                                rel: "noreferrer",
                                                className: (mapa_module_default()).boton_como_llegar,
                                                children: "Web"
                                            })
                                        ]
                                    })
                                }) : null
                            }, marker.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/componentes/ComponentePaginaTienda/Section_2/Section_dos.js







































const Section_dos = ({ alcaladehenares , alcobendas , alcorcon , alicante , almeria , barcelona , benidorm , bilbao , cadiz , cartagena , castellon , cordoba , elche , getafe , gijon , granada , lacoruna , leon , logrono , madrid , malaga , marbella , murcia , oviedo , palma , reus , roquetasdemar , santacruzdetenerife , santander , santiagodecompostela , sevilla , tarragona , valencia , valladolid , vigo , zaragoza , ListadoCiudades  })=>{
    const [ciudad, setCiudad] = (0,external_react_.useState)(null);
    let mapa;
    if (ciudad === "alicante") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaAlicante, {
            alicante: alicante
        });
    }
    if (ciudad === "alcobendas") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaAlcobendas, {
            alcobendas: alcobendas
        });
    }
    if (ciudad === "alcorcon") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaAlcorcon, {
            alcorcon: alcorcon
        });
    }
    if (ciudad === "alcaladehenares") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaAlcaladehenares, {
            alcaladehenares: alcaladehenares
        });
    }
    if (ciudad === "almeria") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaAlmeria, {
            almeria: almeria
        });
    }
    if (ciudad === "barcelona") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaBarcelona, {
            barcelona: barcelona
        });
    }
    if (ciudad === "benidorm") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaBenidorm, {
            benidorm: benidorm
        });
    }
    if (ciudad === "bilbao") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaBilbao, {
            bilbao: bilbao
        });
    }
    if (ciudad === "cadiz") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaCadiz, {
            cadiz: cadiz
        });
    }
    if (ciudad === "cartagena") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaCartagena, {
            cartagena: cartagena
        });
    }
    if (ciudad === "castellon") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaCastellon, {
            castellon: castellon
        });
    }
    if (ciudad === "cordoba") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaCordoba, {
            cordoba: cordoba
        });
    }
    if (ciudad === "elche") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaElche, {
            elche: elche
        });
    }
    if (ciudad === "getafe") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaGetafe, {
            getafe: getafe
        });
    }
    if (ciudad === "gijon") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaGijon, {
            gijon: gijon
        });
    }
    if (ciudad === "granada") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaGranada, {
            granada: granada
        });
    }
    if (ciudad === "lacoruna") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaLaCoruna, {
            lacoruna: lacoruna
        });
    }
    if (ciudad === "leon") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaLeon, {
            leon: leon
        });
    }
    if (ciudad === "logrono") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaLogrono, {
            logrono: logrono
        });
    }
    if (ciudad === "madrid") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaMadrid, {
            madrid: madrid
        });
    }
    if (ciudad === "malaga") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaMalaga, {
            malaga: malaga
        });
    }
    if (ciudad === "marbella") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaMarbella, {
            marbella: marbella
        });
    }
    if (ciudad === "murcia") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaMurcia, {
            murcia: murcia
        });
    }
    if (ciudad === "oviedo") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaOviedo, {
            oviedo: oviedo
        });
    }
    if (ciudad === "palma") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaPalma, {
            palma: palma
        });
    }
    if (ciudad === "reus") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaReus, {
            reus: reus
        });
    }
    if (ciudad === "roquetasdemar") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaRoquetasDeMar, {
            roquetasdemar: roquetasdemar
        });
    }
    if (ciudad === "santacruzdetenerife") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaSantaCruzDeTenerife, {
            santacruzdetenerife: santacruzdetenerife
        });
    }
    if (ciudad === "santander") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaSantander, {
            santander: santander
        });
    }
    if (ciudad === "santiagodecompostela") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaSantiago, {
            santiagodecompostela: santiagodecompostela
        });
    }
    if (ciudad === "sevilla") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaSevilla, {
            sevilla: sevilla
        });
    }
    if (ciudad === "tarragona") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaTarragona, {
            tarragona: tarragona
        });
    }
    if (ciudad === "valencia") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaValencia, {
            valencia: valencia
        });
    }
    if (ciudad === "valladolid") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaValladolid, {
            valladolid: valladolid
        });
    }
    if (ciudad === "vigo") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaVigo, {
            vigo: vigo
        });
    }
    if (ciudad === "zaragoza") {
        mapa = /*#__PURE__*/ jsx_runtime_.jsx(MapaZaragoza, {
            zaragoza: zaragoza
        });
    }
    const listadoCiudades = ListadoCiudades?.arrayMarker;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (sectionDos_module_default()).contenedorSectionDos,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (sectionDos_module_default()).contenedorTextoSectionDos,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: (sectionDos_module_default()).TituloSectionDos,
                        children: "Encuentra tu tienda quickgold"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (sectionDos_module_default()).textoSectionDos,
                        children: "Seleccione una ciudad y te mostraremos las tiendas m\xe1s pr\xf3ximas."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("select", {
                className: (sectionDos_module_default()).select,
                onChange: (e)=>{
                    setCiudad(e.target.value);
                },
                children: listadoCiudades?.map((ciudad, i)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: `${ciudad?.nombreMinusculas}`,
                        children: ciudad?.nombre
                    }, i))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (sectionDos_module_default()).lineaAdorno
            }),
            mapa
        ]
    });
};
/* harmony default export */ const Section_2_Section_dos = (Section_dos);

;// CONCATENATED MODULE: ./src/pages/index.js








const schema = {
    "@context": "http://www.schema.org",
    "@type": "Organization",
    name: "Quickgold",
    url: "https://quickgold.es/tiendas/",
    sameAs: [
        "https://instagram.com/quickgold.es",
        "https://twitter.com/quickgoldqg",
        "https://www.facebook.com/quickgold.es"
    ],
    logo: "https://quickgold.es/wp-content/uploads/img/logo.jpg",
    image: "https://quickgold.es/wp-content/uploads/img/logo.jpg",
    description: "Buscador de tiendas Quickgold. Encuentra tu tienda compro oro e inf\xf3rmate de todos los servicios que se prestan en ella. Ubicaci\xf3n, tel\xe9fono, horarios y m\xe1s",
    address: {
        "@type": "PostalAddress",
        addressCountry: "Espa\xf1a"
    },
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+34 900 373 629",
        contactType: "info@quickgold.es"
    }
};
function Home({ menu_list , ListadoCiudades , alcaladehenares , alcobendas , alcorcon , alicante , almeria , barcelona , benidorm , bilbao , cadiz , cartagena , castellon , cordoba , elche , getafe , gijon , granada , lacoruna , leon , logrono , madrid , malaga , marbella , murcia , oviedo , palma , reus , roquetasdemar , santacruzdetenerife , santander , santiagodecompostela , sevilla , tarragona , tenerife , valencia , valladolid , vigo , zaragoza  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((next_seo_default()), {
                title: "Tiendas compro oro Quickgold | M\xe1s de 60 Tiendas en Espa\xf1a",
                description: "Buscador de tiendas Quickgold. Encuentra tu tienda compro oro e inf\xf3rmate de todos los servicios que se prestan en ella. Ubicaci\xf3n, tel\xe9fono, horarios y m\xe1s",
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
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet preload prefetch",
                        href: "https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css",
                        as: "style"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(schema)
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
                menu_list: menu_list,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Home_module_default()).main,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumbs_Breadcrumbs, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Section_1_Section_uno, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Section_2_Section_dos, {
                            alcaladehenares: alcaladehenares,
                            alcobendas: alcobendas,
                            alcorcon: alcorcon,
                            alicante: alicante,
                            almeria: almeria,
                            barcelona: barcelona,
                            benidorm: benidorm,
                            bilbao: bilbao,
                            cadiz: cadiz,
                            cartagena: cartagena,
                            castellon: castellon,
                            cordoba: cordoba,
                            elche: elche,
                            getafe: getafe,
                            gijon: gijon,
                            granada: granada,
                            lacoruna: lacoruna,
                            leon: leon,
                            logrono: logrono,
                            madrid: madrid,
                            malaga: malaga,
                            marbella: marbella,
                            murcia: murcia,
                            oviedo: oviedo,
                            palma: palma,
                            reus: reus,
                            roquetasdemar: roquetasdemar,
                            santacruzdetenerife: santacruzdetenerife,
                            santander: santander,
                            santiagodecompostela: santiagodecompostela,
                            sevilla: sevilla,
                            tarragona: tarragona,
                            tenerife: tenerife,
                            valencia: valencia,
                            valladolid: valladolid,
                            vigo: vigo,
                            zaragoza: zaragoza,
                            ListadoCiudades: ListadoCiudades
                        })
                    ]
                })
            })
        ]
    });
}
//const idWp = "13848";
const idAlcladehenares = "alcaladehenares";
const idAlcobendas = "alcobendas";
const idAlicante = "alicante";
const idAlcorcon = "alcorcon";
const idAlmeria = "almeria";
const idBarcelona = "barcelona";
const idBenidorm = "benidorm";
const idBilbao = "bilbao";
const idCadiz = "cadiz";
const idCartagena = "cartagena";
const idCastellon = "castellon";
const idCordoba = "cordoba";
const idElche = "elche";
const idGetafe = "getafe";
const idGijon = "gijon";
const idGranada = "granada";
const idLaCoruna = "lacoruna";
const idLeon = "leon";
const idLogrono = "logrono";
const idMadrid = "madrid";
const idMalaga = "malaga";
const idMarbella = "marbella";
const idMurcia = "murcia";
const idOviedo = "oviedo";
const idPalma = "palma";
const idReus = "reus";
const idRoquetasDeMar = "roquetasdemar";
const idSantaCruz = "santacruzdetenerife";
const idSantander = "santander";
const idSantiago = "santiagodecompostela";
const idSevilla = "sevilla";
const idTarragona = "tarragona";
const idTenerife = "tenerife";
const idValencia = "valencia";
const idValladolid = "valladolid";
const idVigo = "vigo";
const idZaragoza = "zaragoza";
async function getStaticProps() {
    const Listado = await fetch(`https://quickgold.es/listadoCiudades.json`);
    const ListadoCiudades = await Listado.json();
    const menu = await fetch(`https://admin.quickgold.es/wp-json/menus/v1/menus/2`);
    const menu_list = await menu.json();
    //datos de las tiendas en mapas
    const alcaladehenares_ = await fetch(`https://quickgold.es/markers${idAlcladehenares}.json`);
    const alcaladehenares = await alcaladehenares_.json();
    const alcobendas_ = await fetch(`https://quickgold.es/markers${idAlcobendas}.json`);
    const alcobendas = await alcobendas_.json();
    const alcorcon_ = await fetch(`https://quickgold.es/markers${idAlcorcon}.json`);
    const alcorcon = await alcorcon_.json();
    const alicante_ = await fetch(`https://quickgold.es/markers${idAlicante}.json`);
    const alicante = await alicante_.json();
    const almeria_ = await fetch(`https://quickgold.es/markers${idAlmeria}.json`);
    const almeria = await almeria_.json();
    const barcelona_ = await fetch(`https://quickgold.es/markers${idBarcelona}.json`);
    const barcelona = await barcelona_.json();
    const benidorm_ = await fetch(`https://quickgold.es/markers${idBenidorm}.json`);
    const benidorm = await benidorm_.json();
    const bilbao_ = await fetch(`https://quickgold.es/markers${idBilbao}.json`);
    const bilbao = await bilbao_.json();
    const cadiz_ = await fetch(`https://quickgold.es/markers${idCadiz}.json`);
    const cadiz = await cadiz_.json();
    const cartagena_ = await fetch(`https://quickgold.es/markers${idCartagena}.json`);
    const cartagena = await cartagena_.json();
    const castellon_ = await fetch(`https://quickgold.es/markers${idCastellon}.json`);
    const castellon = await castellon_.json();
    const cordoba_ = await fetch(`https://quickgold.es/markers${idCordoba}.json`);
    const cordoba = await cordoba_.json();
    const elche_ = await fetch(`https://quickgold.es/markers${idElche}.json`);
    const elche = await elche_.json();
    const getafe_ = await fetch(`https://quickgold.es/markers${idGetafe}.json`);
    const getafe = await getafe_.json();
    const gijon_ = await fetch(`https://quickgold.es/markers${idGijon}.json`);
    const gijon = await gijon_.json();
    const granada_ = await fetch(`https://quickgold.es/markers${idGranada}.json`);
    const granada = await granada_.json();
    const lacoruna_ = await fetch(`https://quickgold.es/markers${idLaCoruna}.json`);
    const lacoruna = await lacoruna_.json();
    const leon_ = await fetch(`https://quickgold.es/markers${idLeon}.json`);
    const leon = await leon_.json();
    const logrono_ = await fetch(`https://quickgold.es/markers${idLogrono}.json`);
    const logrono = await logrono_.json();
    const madrid_ = await fetch(`https://quickgold.es/markers${idMadrid}.json`);
    const madrid = await madrid_.json();
    const malaga_ = await fetch(`https://quickgold.es/markers${idMalaga}.json`);
    const malaga = await malaga_.json();
    const marbella_ = await fetch(`https://quickgold.es/markers${idMarbella}.json`);
    const marbella = await marbella_.json();
    const murcia_ = await fetch(`https://quickgold.es/markers${idMurcia}.json`);
    const murcia = await murcia_.json();
    const oviedo_ = await fetch(`https://quickgold.es/markers${idOviedo}.json`);
    const oviedo = await oviedo_.json();
    const palma_ = await fetch(`https://quickgold.es/markers${idPalma}.json`);
    const palma = await palma_.json();
    const roquetasdemar_ = await fetch(`https://quickgold.es/markers${idRoquetasDeMar}.json`);
    const roquetasdemar = await roquetasdemar_.json();
    const reus_ = await fetch(`https://quickgold.es/markers${idReus}.json`);
    const reus = await reus_.json();
    const santacruz_ = await fetch(`https://quickgold.es/markers${idSantaCruz}.json`);
    const santacruzdetenerife = await santacruz_.json();
    const santander_ = await fetch(`https://quickgold.es/markers${idSantander}.json`);
    const santander = await santander_.json();
    const santiago_ = await fetch(`https://quickgold.es/markers${idSantiago}.json`);
    const santiagodecompostela = await santiago_.json();
    const sevilla_ = await fetch(`https://quickgold.es/markers${idSevilla}.json`);
    const sevilla = await sevilla_.json();
    const tarragona_ = await fetch(`https://quickgold.es/markers${idTarragona}.json`);
    const tarragona = await tarragona_.json();
    const tenerife_ = await fetch(`https://quickgold.es/markers${idTenerife}.json`);
    const tenerife = await tenerife_.json();
    const valencia_ = await fetch(`https://quickgold.es/markers${idValencia}.json`);
    const valencia = await valencia_.json();
    const valladolid_ = await fetch(`https://quickgold.es/markers${idValladolid}.json`);
    const valladolid = await valladolid_.json();
    const vigo_ = await fetch(`https://quickgold.es/markers${idVigo}.json`);
    const vigo = await vigo_.json();
    const zaragoza_ = await fetch(`https://quickgold.es/markers${idZaragoza}.json`);
    const zaragoza = await zaragoza_.json();
    // Pass data to the page via props
    return {
        props: {
            menu_list,
            ListadoCiudades,
            alcaladehenares,
            alcobendas,
            alcorcon,
            alicante,
            almeria,
            barcelona,
            benidorm,
            bilbao,
            cadiz,
            cartagena,
            castellon,
            cordoba,
            elche,
            getafe,
            gijon,
            granada,
            lacoruna,
            leon,
            logrono,
            madrid,
            malaga,
            marbella,
            murcia,
            oviedo,
            palma,
            reus,
            roquetasdemar,
            santacruzdetenerife,
            santander,
            santiagodecompostela,
            sevilla,
            tarragona,
            tenerife,
            valencia,
            valladolid,
            vigo,
            zaragoza
        },
        revalidate: 1
    };
}


/***/ }),

/***/ 4579:
/***/ ((module) => {

"use strict";
module.exports = require("@bradgarropy/next-seo");

/***/ }),

/***/ 2081:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Call");

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

/***/ 5631:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Twitter");

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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5372:
/***/ ((module) => {

"use strict";
module.exports = require("react-map-gl");

/***/ }),

/***/ 3094:
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [964], () => (__webpack_exec__(4021)));
module.exports = __webpack_exports__;

})();