(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8252],{32845:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tiendas/compro-oro-cordoba",function(){return n(81268)}])},23467:function(e,o,n){"use strict";var i=n(85893);n(67294);var a=n(51376),t=n.n(a);let l=e=>{var o;let{general:n}=e;return(0,i.jsx)("section",{className:t().contenedorHtml,dangerouslySetInnerHTML:{__html:null==n?void 0:null===(o=n.acf)||void 0===o?void 0:o.html}})};o.Z=l},20038:function(e,o,n){"use strict";var i=n(85893);n(67294);var a=n(87155),t=n.n(a);let l=e=>{var o;let{ciudad:n}=e;return(0,i.jsx)("div",{className:t().contenedorHtml,dangerouslySetInnerHTML:{__html:null==n?void 0:null===(o=n.acf)||void 0===o?void 0:o.html}})};o.Z=l},36783:function(e,o,n){"use strict";var i=n(85893);n(67294);var a=n(98302),t=n.n(a);let l=e=>{var o;let{ciudad:n}=e;return(0,i.jsx)("header",{className:t().contenedorSeccionUno,children:(0,i.jsx)("div",{className:t().bloqueDer,children:(0,i.jsxs)("h1",{children:["Tiendas Quickgold en ",null==n?void 0:null===(o=n.acf)||void 0===o?void 0:o.ciudad_landing,(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:t().textoMenos,children:"Compro oro. Cambio de divisa. Empe\xf1ar oro."})]})})})};o.Z=l},6817:function(e,o,n){"use strict";var i=n(85893),a=n(10527);n(67294);var t=n(58235),l=n.n(t);let d=e=>{let{ciudad:o}=e;return(0,i.jsx)("article",{className:l().contenedorSeccionDos,children:(0,i.jsx)(a.Z,{ciudad:o})})};o.Z=d},17319:function(e,o,n){"use strict";var i=n(85893),a=n(67294),t=n(5362),l=n.n(t),d=n(66261),c=n(1123),r=n(33545),s=n(41664),u=n.n(s);let m=e=>{let{markers:o,ciudad:n}=e,t=o.arrayMarker,[s,m]=(0,a.useState)({longitude:o.markerInicial[0].longitude,latitude:o.markerInicial[0].latitude,zoom:o.markerInicial[0].zoom,cooperativeGestures:!0}),p=(0,a.useRef)(),_=()=>{var e;x(!1),null===(e=p.current)||void 0===e||e.flyTo({center:[o.markerInicial[0].longitude,o.markerInicial[0].latitude],duration:2e3,zoom:o.markerInicial[0].zoom})},[v,x]=(0,a.useState)(null),f=()=>{x(!0)},[h,j]=(0,a.useState)({id:"",longitude:"",latitude:"",tienda:"",telefono:"",direccion:"",comoLlegar:"",nombreTienda:"",duration:"",zoom:"",url:""}),[g,b]=(0,a.useState)(""),k=e=>{var o;j({id:e.id,longitude:e.longitude,latitude:e.latitude,tienda:e.tienda,telefono:e.telefono,direccion:e.direccion,comoLlegar:e.comoLlegar,nombreTienda:e.nombreTienda,duration:e.duration,zoom:e.zoom,url:e.url}),null===(o=p.current)||void 0===o||o.flyTo({center:{lng:e.longitude,lat:e.latitude},duration:1500,zoom:e.zoom}),b(e.id)},N=o.arrayMarker[o.arrayMarker.length-1];return(0,i.jsxs)("section",{className:l().contenedorMapa,children:[(0,i.jsxs)("div",{className:l().contenedorbloqueIzq,children:[(0,i.jsx)("div",{className:l().bloqueIzq,children:(0,i.jsxs)("p",{children:["Tiendas: ",(0,i.jsx)("span",{children:null==N?void 0:N.id})]})}),(0,i.jsx)("div",{className:l().contenedorTiendas,children:t.map(e=>(0,i.jsx)(d.rU,{onClick:()=>{f(),k(e)},to:"contenedorMapa2",smooth:!0,offset:-110,spy:!0,duration:500,children:(0,i.jsxs)("div",{onClick:()=>{f(),k(e)},className:g===e.id&&v?"".concat(l().contenedorInfoTiendaMapa," ").concat(l().contenedorInfoTiendaMapaActivo):" ".concat(l().contenedorInfoTiendaMapa),children:[(0,i.jsx)("h3",{children:null==e?void 0:e.nombreTienda}),(0,i.jsxs)("div",{className:l().tienda,children:[(0,i.jsx)("p",{children:null==e?void 0:e.direccion}),(0,i.jsx)("p",{children:null==e?void 0:e.telefono})]})]})},e.id))})]}),(0,i.jsx)("div",{className:l().bloqueDer,id:"contenedorMapa2",children:(0,i.jsxs)(r.ZP,{onStyleLoad:!0,ref:p,...s,onMove:e=>m(e.viewState),className:l().mapa,mapStyle:"mapbox://styles/mapbox/streets-v9?optimize=true",mapboxAccessToken:"pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",children:[(0,i.jsx)(r.ot,{})," ",(0,i.jsx)(r.$j,{})," ",(0,i.jsx)(r.Pv,{}),(0,i.jsx)("button",{className:l().reset_map,onClick:()=>{_()},children:"Reset Map"}),t.map(e=>(0,i.jsx)(r.Jx,{longitude:e.longitude,latitude:e.latitude,onClick:()=>{k(e),f()},children:v?(0,i.jsx)(r.GI,{style:{top:-25,maxWidth:255},longitude:null==h?void 0:h.longitude,className:"popup",latitude:null==h?void 0:h.latitude,closeOnClick:!1,anchor:null,onClose:()=>x(!1),children:(0,i.jsxs)("div",{className:l().contenedor_popuop,children:[(0,i.jsx)("p",{className:l().nombre_ciudad_popup,children:null==h?void 0:h.nombreTienda}),(0,i.jsx)("a",{title:"Direcci\xf3n",href:null==h?void 0:h.comoLlegar,rel:"noreferrer",target:"_blank",className:l().direccion_popup,children:null==h?void 0:h.direccion}),(0,i.jsx)("br",{}),(0,i.jsxs)("a",{href:"tel:".concat(null==h?void 0:h.telefono),className:l().telefono_popup,title:"Tel\xe9fono",children:[(0,i.jsxs)("span",{children:[(0,i.jsx)(c.Z,{})," "]}),null==h?void 0:h.telefono]}),(0,i.jsx)("a",{title:"C\xf3mo llegar",href:null==h?void 0:h.comoLlegar,rel:"noreferrer",className:l().boton_popUp,children:"C\xf3mo llegar"}),(0,i.jsx)("a",{title:"Llamar",href:"tel:".concat(null==h?void 0:h.telefono),rel:"noreferrer",className:l().boton_popUp,children:"Llamar"}),(0,i.jsx)(u(),{title:"C\xf3mo llegar",href:null==h?void 0:h.url,rel:"noreferrer",className:l().boton_popUp,children:"Web"})]})}):null},e.id))]})})]})};o.Z=m},81268:function(e,o,n){"use strict";n.r(o),n.d(o,{__N_SSG:function(){return C},default:function(){return q}});var i=n(85893),a=n(9008),t=n.n(a),l=n(13915),d=n.n(l),c=n(60942),r=n(46531),s=n.n(r),u=n(17186),m=n(92911),p=n(43428),_=n(57699),v=n(20038),x=n(97650),f=n(36783),h=n(6817),j=n(77967),g=n(48317),b=n(17319),k=n(23467),N=n(62810),C=!0;function q(e){var o,n,a,l,r,C,q,y,T,I,Z,M,w,S,z,L,P;let{markers:D,menu_list:U,ciudad:H,general:A}=e,{ref:E,inView:G,entry:R}=(0,x.YD)(),J={"@context":"https://schema.org/","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Quickgold",item:"https://quickgold.es"},{"@type":"ListItem",position:2,name:"Tiendas",item:"https://quickgold.es/tiendas"},{"@type":"ListItem",position:3,name:null==H?void 0:null===(o=H.acf)||void 0===o?void 0:o.ciudad_landing,item:"https://quickgold.es/tiendas/compro-oro-cordoba"}]};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s(),{title:null==H?void 0:null===(n=H.acf)||void 0===n?void 0:n.titulo_del_meta,description:null==H?void 0:null===(a=H.acf)||void 0===a?void 0:a.descripcion_del_meta,icon:"/favicon.png",facebook:{image:"/assets/img/".concat(null==H?void 0:null===(l=H.acf)||void 0===l?void 0:l.tienda,".jpg"),url:"https://www.facebook.com/quickgold.es/",type:"article"},twitter:{image:"/assets/img/".concat(null==H?void 0:null===(r=H.acf)||void 0===r?void 0:r.tienda,".jpg"),site:"@quickgoldQG",card:"summary_large_image"}}),(0,i.jsxs)(t(),{children:[(0,i.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(J)}}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"stylesheet preload prefetch",href:"https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css",as:"style"}),(0,i.jsx)("link",{rel:"canonical",href:null==H?void 0:null===(C=H.acf)||void 0===C?void 0:C.canonical})]}),(0,i.jsxs)(_.Z,{menu_list:U,ciudad:H,children:[(0,i.jsxs)("div",{itemScope:!0,itemType:"http://schema.org/Organization",children:[(0,i.jsx)("meta",{itemProp:"name",content:"Quickgold"}),(0,i.jsx)("meta",{itemProp:"url",content:"https://quickgold.es"}),(0,i.jsx)("meta",{itemProp:"logo",content:"/assets/img/logo.jpg"}),(0,i.jsx)("meta",{itemProp:"image",content:"/assets/img/logo.jpg"}),(0,i.jsx)("meta",{itemProp:"telephone",content:"+34 900 373 629"}),(0,i.jsx)("meta",{itemProp:"email",content:"info@quickgold.es"}),(0,i.jsx)("meta",{itemProp:"sameAs",content:"https://www.facebook.com/quickgold.es"}),(0,i.jsx)("meta",{itemProp:"sameAs",content:"https://twitter.com/quickgoldqg"}),(0,i.jsx)("meta",{itemProp:"sameAs",content:"https://instagram.com/quickgold.es"}),(0,i.jsx)("meta",{itemProp:"address",content:"Calle Jos\xe9 Cruz Conde 32, local 4. C\xf3rdoba, Provincia de C\xf3rdoba, 14001"})]}),(0,i.jsxs)("div",{className:d().main,children:[(0,i.jsx)(c.Z,{raiz:"Quickgold",tiendas:"Tiendas",ubicacionActual:null==H?void 0:null===(q=H.acf)||void 0===q?void 0:q.ciudad_landing,iconoRaiz:(0,i.jsx)(g.Z,{}),iconoUbiccionActual:(0,i.jsx)(g.Z,{}),urlNombreCiudad:"https://quickgold.es/tiendas/compro-oro-cordoba",urlNombreTienda:"https://quickgold.es/tiendas/compro-oro-cordoba"}),(0,i.jsx)(f.Z,{ciudad:H}),(null==H?void 0:null===(y=H.acf)||void 0===y?void 0:y.activar_banner_en_tiendas_y_ciudad)&&(null==A?void 0:null===(T=A.acf)||void 0===T?void 0:T.activar_promo_general)?(0,i.jsx)(N.Z,{ciudad:H}):null,(null==H?void 0:null===(I=H.acf)||void 0===I?void 0:I.activar_banner_en_tiendas_y_ciudad)==!1&&(null==A?void 0:null===(Z=A.acf)||void 0===Z?void 0:Z.activar_promo_general)?(0,i.jsx)(j.Z,{general:A}):null,(null==A?void 0:null===(M=A.acf)||void 0===M?void 0:M.activar_promo_general)==!1&&(null==H?void 0:null===(w=H.acf)||void 0===w?void 0:w.activar_banner_en_tiendas_y_ciudad)?(0,i.jsx)(N.Z,{ciudad:H}):null,(0,i.jsxs)("div",{className:d().contenedorSeccionUnoDos,children:[(0,i.jsx)(h.Z,{ciudad:H}),(0,i.jsx)("article",{className:d().contenedorMapaVisible,ref:E,children:G?(0,i.jsx)(b.Z,{markers:D,ciudad:H}):null})]}),(null==A?void 0:null===(S=A.acf)||void 0===S?void 0:S.html)===""||(null==H?void 0:null===(z=H.acf)||void 0===z?void 0:z.html)!==""?(0,i.jsx)(v.Z,{ciudad:H}):(0,i.jsx)(k.Z,{general:A})]}),(null==H?void 0:null===(L=H.acf)||void 0===L?void 0:L.tienda)===""?(0,i.jsx)(u.Z,{ciudad:H}):(0,i.jsx)(m.Z,{ciudad:H}),(null==H?void 0:null===(P=H.acf)||void 0===P?void 0:P.activar_banner_wallapop)?(0,i.jsx)(p.Z,{ciudad:H}):null]})]})}},51376:function(e){e.exports={contenedorHtml:"htmlGeneral_contenedorHtml__V4osI"}},87155:function(e){e.exports={contenedorHtml:"html_contenedorHtml__h65BV"}},98302:function(e){e.exports={contenedorSeccionUno:"seccionUno_contenedorSeccionUno__MtPgj",bloqueDer:"seccionUno_bloqueDer__csCt7",linea:"seccionUno_linea__sKg3N",textoMenos:"seccionUno_textoMenos__mLuez"}},58235:function(e){e.exports={contenedorSeccionDos:"seccionDos_contenedorSeccionDos__33bX9"}},5362:function(e){e.exports={contenedorMapa:"mapaCiudades_contenedorMapa__DHLB8",contenedorbloqueIzq:"mapaCiudades_contenedorbloqueIzq__Rp7gq",bloqueDer:"mapaCiudades_bloqueDer__mH701",bloqueIzq:"mapaCiudades_bloqueIzq__DKR5L",linea:"mapaCiudades_linea__O4vPS",reset_map:"mapaCiudades_reset_map__lr2TZ",contenedorTiendas:"mapaCiudades_contenedorTiendas__hZuvd",tienda:"mapaCiudades_tienda__fBGAS","mapboxgl-popup-close-button":"mapaCiudades_mapboxgl-popup-close-button___PgA_",nombre_ciudad_popup:"mapaCiudades_nombre_ciudad_popup__YLhzk",direccion_popup:"mapaCiudades_direccion_popup__IS9wP",telefono_popup:"mapaCiudades_telefono_popup__eqt8Z",boton_como_llegar:"mapaCiudades_boton_como_llegar__8it0V",boton_popUp:"mapaCiudades_boton_popUp__yw3fW",contenedorInfoTiendaMapa:"mapaCiudades_contenedorInfoTiendaMapa__ibqhv",contenedorInfoTiendaMapaActivo:"mapaCiudades_contenedorInfoTiendaMapaActivo__RvQHD"}}},function(e){e.O(0,[5231,404,6261,1664,3010,7699,5340,5954,9774,2888,179],function(){return e(e.s=32845)}),_N_E=e.O()}]);