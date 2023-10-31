exports.id = 7203;
exports.ids = [7203];
exports.modules = {

/***/ 8936:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorMapa": "mapa_contenedorMapa__69eqi",
	"bloqueDer": "mapa_bloqueDer__C1SfU",
	"bloqueIzq": "mapa_bloqueIzq__CeVcw",
	"linea": "mapa_linea__mec33",
	"reset_map": "mapa_reset_map__SzssR",
	"contenedorTiendas": "mapa_contenedorTiendas__Ao_f_",
	"tienda": "mapa_tienda__QInfe",
	"mapboxgl-popup-close-button": "mapa_mapboxgl-popup-close-button__b80so",
	"nombre_ciudad_popup": "mapa_nombre_ciudad_popup__h6K0L",
	"direccion_popup": "mapa_direccion_popup__WIGd3",
	"contenedor_popuop": "mapa_contenedor_popuop__JIS7I",
	"telefono_popup": "mapa_telefono_popup__TCGRz",
	"boton_como_llegar": "mapa_boton_como_llegar__a0CmU",
	"contenedorInfoTiendaMapa": "mapa_contenedorInfoTiendaMapa__ZFc8g",
	"contenedorInfoTiendaMapaActivo": "mapa_contenedorInfoTiendaMapaActivo___Mbnu"
};


/***/ }),

/***/ 7203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mapa_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8936);
/* harmony import */ var _mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mapa_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5372);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_3__);


//import BloqueTiendas from "../BloqueTiendas/BloqueTiendas";

//import dynamic from "next/dynamic";


/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/ const Mapa = ({ markers , ciudad  })=>{
    const marcador = markers.arrayMarker;
    const [viewState, setViewState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        longitude: markers?.markerInicial[0].longitude,
        latitude: markers?.markerInicial[0].latitude,
        zoom: markers?.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                markers?.markerInicial[0].longitude,
                markers?.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: markers?.markerInicial[0].zoom
        });
    };
    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const toggleTab = ()=>{
        setShowPopup(true);
    };
    const [showInfo, setShowInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        id: "",
        longitude: "",
        latitude: "",
        tienda: "",
        telefono: "",
        direccion: "",
        comoLlegar: "",
        nombreTienda: "",
        duration: "",
        zoom: ""
    });
    const [activeId, setActiveId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
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
            zoom: marker.zoom
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
    const numeroDeTiendas = markers.arrayMarker[markers.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default().contenedorMapa),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default().contenedorbloqueIzq),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default().bloqueIzq),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                children: [
                                    "Casas de cambio en",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default().linea),
                                        children: ciudad?.acf?.ciudad
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Tiendas Quickgold: ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: numeroDeTiendas.id
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default().contenedorTiendas),
                        children: marcador.map((marker)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                onClick: ()=>{
                                    toggleTab();
                                    onSelectMarker(marker);
                                },
                                className: activeId === marker?.id && showPopup ? `${(_mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default().contenedorInfoTiendaMapa)} ${(_mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default().contenedorInfoTiendaMapaActivo)}` : ` ${(_mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default().contenedorInfoTiendaMapa)}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        onClick: ()=>{
                                            toggleTab();
                                            onSelectMarker(marker);
                                        },
                                        to: "contenedorMapa2",
                                        smooth: true,
                                        offset: -110,
                                        spy: true,
                                        duration: 500,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: marker?.nombreTienda
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default().tienda),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: marker?.direccion
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    "Tel\xe9fono: ",
                                                    marker?.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                to: "contenedorMapa2",
                                                smooth: true,
                                                offset: -110,
                                                spy: true,
                                                duration: 500,
                                                className: (_mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default().boton_como_llegar),
                                                children: "Ver M\xe1s"
                                            })
                                        ]
                                    })
                                ]
                            }, marker.id))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default().bloqueDer),
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_map_gl__WEBPACK_IMPORTED_MODULE_3___default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (_mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default().mapa),
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_3__.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_3__.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_3__.NavigationControl, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default().reset_map),
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador.map((marker)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_3__.Marker, {
                                longitude: marker?.longitude,
                                latitude: marker?.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_3__.Popup, {
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
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default().contenedor_popuop),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default().nombre_ciudad_popup),
                                                children: showInfo.nombreTienda
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default().nombre_ciudad_popup),
                                                children: "Contacto:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (_mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default().direccion_popup),
                                                children: showInfo.direccion
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: `tel:${showInfo.telefono}`,
                                                className: (_mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default().telefono_popup),
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Llamar: "
                                                    }),
                                                    showInfo.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo.comoLlegar,
                                                rel: "noreferrer",
                                                ƒ: true,
                                                className: (_mapa_module_css__WEBPACK_IMPORTED_MODULE_4___default().boton_como_llegar),
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                        ]
                                    })
                                }) : null
                            }, marker?.id))
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mapa);


/***/ })

};
;