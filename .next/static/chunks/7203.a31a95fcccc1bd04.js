(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7203],{47203:function(e,o,a){"use strict";a.r(o);var n=a(85893),l=a(67294),i=a(1899),d=a.n(i),r=a(66261),t=a(1123),c=a(33545),s=a(41664),p=a.n(s);let u=e=>{let{markers:o,ciudad:a}=e,i=o.arrayMarker,[s,u]=(0,l.useState)({longitude:o.markerInicial[0].longitude,latitude:o.markerInicial[0].latitude,zoom:o.markerInicial[0].zoom,cooperativeGestures:!0}),m=(0,l.useRef)(),_=()=>{var e;x(!1),null===(e=m.current)||void 0===e||e.flyTo({center:[o.markerInicial[0].longitude,o.markerInicial[0].latitude],duration:2e3,zoom:o.markerInicial[0].zoom})},[f,x]=(0,l.useState)(null),h=()=>{x(!0)},[b,v]=(0,l.useState)({id:"",longitude:"",latitude:"",tienda:"",telefono:"",direccion:"",comoLlegar:"",nombreTienda:"",duration:"",zoom:"",url:""}),[j,C]=(0,l.useState)(""),g=e=>{var o;v({id:e.id,longitude:e.longitude,latitude:e.latitude,tienda:e.tienda,telefono:e.telefono,direccion:e.direccion,comoLlegar:e.comoLlegar,nombreTienda:e.nombreTienda,duration:e.duration,zoom:e.zoom,url:e.url}),null===(o=m.current)||void 0===o||o.flyTo({center:{lng:e.longitude,lat:e.latitude},duration:1500,zoom:e.zoom}),C(e.id)},N=o.arrayMarker[o.arrayMarker.length-1];return(0,n.jsxs)("section",{className:d().contenedorMapa,children:[(0,n.jsxs)("div",{className:d().contenedorbloqueIzq,children:[(0,n.jsx)("div",{className:d().bloqueIzq,children:(0,n.jsxs)("p",{children:["Tiendas: ",(0,n.jsx)("span",{children:null==N?void 0:N.id})]})}),(0,n.jsx)("div",{className:d().contenedorTiendas,children:i.map(e=>(0,n.jsx)(r.rU,{onClick:()=>{h(),g(e)},to:"contenedorMapa2",smooth:!0,offset:-110,spy:!0,duration:500,children:(0,n.jsxs)("div",{onClick:()=>{h(),g(e)},className:j===e.id&&f?"".concat(d().contenedorInfoTiendaMapa," ").concat(d().contenedorInfoTiendaMapaActivo):" ".concat(d().contenedorInfoTiendaMapa),children:[(0,n.jsx)("h3",{children:null==e?void 0:e.nombreTienda}),(0,n.jsxs)("div",{className:d().tienda,children:[(0,n.jsx)("p",{children:null==e?void 0:e.direccion}),(0,n.jsx)("p",{children:null==e?void 0:e.telefono})]})]})},e.id))})]}),(0,n.jsx)("div",{className:d().bloqueDer,id:"contenedorMapa2",children:(0,n.jsxs)(c.ZP,{onStyleLoad:!0,ref:m,...s,onMove:e=>u(e.viewState),className:d().mapa,mapStyle:"mapbox://styles/mapbox/streets-v9?optimize=true",mapboxAccessToken:"pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",children:[(0,n.jsx)(c.ot,{})," ",(0,n.jsx)(c.$j,{})," ",(0,n.jsx)(c.Pv,{}),(0,n.jsx)("button",{className:d().reset_map,onClick:()=>{_()},children:"Reset Map"}),i.map(e=>(0,n.jsx)(c.Jx,{longitude:e.longitude,latitude:e.latitude,onClick:()=>{g(e),h()},children:f?(0,n.jsx)(c.GI,{style:{top:-25,maxWidth:255},longitude:null==b?void 0:b.longitude,className:"popup",latitude:null==b?void 0:b.latitude,closeOnClick:!1,anchor:null,onClose:()=>x(!1),children:(0,n.jsxs)("div",{className:d().contenedor_popuop,children:[(0,n.jsx)("p",{className:d().nombre_ciudad_popup,children:null==b?void 0:b.nombreTienda}),(0,n.jsx)("a",{title:"Direcci\xf3n",href:null==b?void 0:b.comoLlegar,rel:"noreferrer",target:"_blank",className:d().direccion_popup,children:null==b?void 0:b.direccion}),(0,n.jsx)("br",{}),(0,n.jsxs)("a",{href:"tel:".concat(null==b?void 0:b.telefono),className:d().telefono_popup,title:"Tel\xe9fono",children:[(0,n.jsxs)("span",{children:[(0,n.jsx)(t.Z,{})," "]}),null==b?void 0:b.telefono]}),(0,n.jsx)("a",{title:"C\xf3mo llegar",href:null==b?void 0:b.comoLlegar,rel:"noreferrer",className:d().boton_popUp,children:"C\xf3mo llegar"}),(0,n.jsx)("a",{title:"Llamar",href:"tel:".concat(null==b?void 0:b.telefono),rel:"noreferrer",className:d().boton_popUp,children:"Llamar"}),(0,n.jsx)(p(),{title:"C\xf3mo llegar",href:null==b?void 0:b.url,rel:"noreferrer",className:d().boton_popUp,children:"Web"})]})}):null},e.id))]})})]})};o.default=u},1899:function(e){e.exports={contenedorMapa:"mapaCiudades_contenedorMapa__CJxHX",contenedorbloqueIzq:"mapaCiudades_contenedorbloqueIzq__C7w5r",bloqueDer:"mapaCiudades_bloqueDer__gfvdm",bloqueIzq:"mapaCiudades_bloqueIzq__F6C84",linea:"mapaCiudades_linea__x1_5H",reset_map:"mapaCiudades_reset_map__Ng1iQ",contenedorTiendas:"mapaCiudades_contenedorTiendas__UDsMs",tienda:"mapaCiudades_tienda__WrAh5","mapboxgl-popup-close-button":"mapaCiudades_mapboxgl-popup-close-button__WPOTL",nombre_ciudad_popup:"mapaCiudades_nombre_ciudad_popup__pFSKE",direccion_popup:"mapaCiudades_direccion_popup__z58n5",telefono_popup:"mapaCiudades_telefono_popup__S48mb",boton_como_llegar:"mapaCiudades_boton_como_llegar__kffF8",boton_popUp:"mapaCiudades_boton_popUp__AXMcp",contenedorInfoTiendaMapa:"mapaCiudades_contenedorInfoTiendaMapa__grhBO",contenedorInfoTiendaMapaActivo:"mapaCiudades_contenedorInfoTiendaMapaActivo__4ayAo"}}}]);