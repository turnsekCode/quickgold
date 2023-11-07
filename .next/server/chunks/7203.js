exports.id = 7203;
exports.ids = [7203];
exports.modules = {

/***/ 158:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorMapa": "mapaCiudades_contenedorMapa__CJxHX",
	"contenedorbloqueIzq": "mapaCiudades_contenedorbloqueIzq__C7w5r",
	"bloqueDer": "mapaCiudades_bloqueDer__gfvdm",
	"bloqueIzq": "mapaCiudades_bloqueIzq__F6C84",
	"linea": "mapaCiudades_linea__x1_5H",
	"reset_map": "mapaCiudades_reset_map__Ng1iQ",
	"contenedorTiendas": "mapaCiudades_contenedorTiendas__UDsMs",
	"tienda": "mapaCiudades_tienda__WrAh5",
	"mapboxgl-popup-close-button": "mapaCiudades_mapboxgl-popup-close-button__WPOTL",
	"nombre_ciudad_popup": "mapaCiudades_nombre_ciudad_popup__pFSKE",
	"direccion_popup": "mapaCiudades_direccion_popup__z58n5",
	"telefono_popup": "mapaCiudades_telefono_popup__S48mb",
	"boton_como_llegar": "mapaCiudades_boton_como_llegar__kffF8",
	"boton_popUp": "mapaCiudades_boton_popUp__AXMcp",
	"contenedorInfoTiendaMapa": "mapaCiudades_contenedorInfoTiendaMapa__grhBO",
	"contenedorInfoTiendaMapaActivo": "mapaCiudades_contenedorInfoTiendaMapaActivo__4ayAo"
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
/* harmony import */ var _mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(158);
/* harmony import */ var _mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Call__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2081);
/* harmony import */ var _mui_icons_material_Call__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Call__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5372);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);







const Mapa = ({ markers , ciudad  })=>{
    const marcador = markers.arrayMarker;
    const [viewState, setViewState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        longitude: markers.markerInicial[0].longitude,
        latitude: markers.markerInicial[0].latitude,
        zoom: markers.markerInicial[0].zoom,
        cooperativeGestures: true
    });
    const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const resetMap = ()=>{
        setShowPopup(false);
        mapRef.current?.flyTo({
            center: [
                markers.markerInicial[0].longitude,
                markers.markerInicial[0].latitude
            ],
            duration: 2000,
            zoom: markers.markerInicial[0].zoom
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
        zoom: "",
        url: ""
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
    const numeroDeTiendas = markers.arrayMarker[markers.arrayMarker.length - 1];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6___default().contenedorMapa),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6___default().contenedorbloqueIzq),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6___default().bloqueIzq),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "Tiendas: ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: numeroDeTiendas?.id
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6___default().contenedorTiendas),
                        children: marcador.map((marker)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                onClick: ()=>{
                                    toggleTab();
                                    onSelectMarker(marker);
                                },
                                to: "contenedorMapa2",
                                smooth: true,
                                offset: -110,
                                spy: true,
                                duration: 500,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    onClick: ()=>{
                                        toggleTab();
                                        onSelectMarker(marker);
                                    },
                                    className: activeId === marker.id && showPopup ? `${(_mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6___default().contenedorInfoTiendaMapa)} ${(_mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6___default().contenedorInfoTiendaMapaActivo)}` : ` ${(_mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6___default().contenedorInfoTiendaMapa)}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: marker?.nombreTienda
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6___default().tienda),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: marker?.direccion
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: marker?.telefono
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, marker.id))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6___default().bloqueDer),
                id: "contenedorMapa2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_map_gl__WEBPACK_IMPORTED_MODULE_4___default()), {
                    onStyleLoad: true,
                    ref: mapRef,
                    ...viewState,
                    onMove: (evt)=>setViewState(evt.viewState),
                    className: (_mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6___default().mapa),
                    mapStyle: "mapbox://styles/mapbox/streets-v9?optimize=true",
                    mapboxAccessToken: "pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_4__.FullscreenControl, {}),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_4__.GeolocateControl, {}),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_4__.NavigationControl, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6___default().reset_map),
                            onClick: ()=>{
                                resetMap();
                            },
                            children: "Reset Map"
                        }),
                        marcador.map((marker)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_4__.Marker, {
                                longitude: marker.longitude,
                                latitude: marker.latitude,
                                onClick: ()=>{
                                    onSelectMarker(marker);
                                    toggleTab();
                                },
                                children: showPopup ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_4__.Popup, {
                                    style: {
                                        top: -25,
                                        maxWidth: 255
                                    },
                                    longitude: showInfo?.longitude,
                                    className: "popup",
                                    latitude: showInfo?.latitude,
                                    closeOnClick: false,
                                    anchor: null,
                                    onClose: ()=>setShowPopup(false),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6___default().contenedor_popuop),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6___default().nombre_ciudad_popup),
                                                children: showInfo?.nombreTienda
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                title: "Direcci\xf3n",
                                                href: showInfo?.comoLlegar,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: (_mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6___default().direccion_popup),
                                                children: showInfo?.direccion
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: `tel:${showInfo?.telefono}`,
                                                className: (_mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6___default().telefono_popup),
                                                title: "Tel\xe9fono",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Call__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                                                            " "
                                                        ]
                                                    }),
                                                    showInfo?.telefono
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                title: "C\xf3mo llegar",
                                                href: showInfo?.comoLlegar,
                                                rel: "noreferrer",
                                                className: (_mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6___default().boton_popUp),
                                                children: "C\xf3mo llegar"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                title: "Llamar",
                                                href: `tel:${showInfo?.telefono}`,
                                                rel: "noreferrer",
                                                className: (_mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6___default().boton_popUp),
                                                children: "Llamar"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                title: "C\xf3mo llegar",
                                                href: showInfo?.url,
                                                rel: "noreferrer",
                                                className: (_mapaCiudades_module_css__WEBPACK_IMPORTED_MODULE_6___default().boton_popUp),
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
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mapa);


/***/ })

};
;