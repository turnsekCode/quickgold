(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{48317:function(e,o,n){"use strict";var i=n(64836);o.Z=void 0;var s=i(n(64938)),l=n(85893),a=(0,s.default)((0,l.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");o.Z=a},17202:function(e,o,n){"use strict";var i=n(64836);o.Z=void 0;var s=i(n(64938)),l=n(85893),a=(0,s.default)((0,l.jsx)("path",{d:"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"}),"PhoneInTalk");o.Z=a},84007:function(e,o,n){"use strict";var i=n(64836);o.Z=void 0,function(e,o){if((o||!e||!e.__esModule)&&null!==e&&("object"==typeof e||"function"==typeof e)){var n=a(o);if(n&&n.has(e))return n.get(e);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=s?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(i,l,r):i[l]=e[l]}i.default=e,n&&n.set(e,i)}}(n(67294));var s=i(n(64938)),l=n(85893);function a(e){if("function"!=typeof WeakMap)return null;var o=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:o})(e)}var r=(0,s.default)((0,l.jsx)("path",{d:"M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"}),"WhatsApp");o.Z=r},85179:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/compro-oro/alcala-de-henares",function(){return n(31552)}])},63683:function(e,o,n){"use strict";var i=n(85893);n(67294);var s=n(86007),l=n.n(s);let a=e=>{let{raiz:o,tiendas:n,nombreCiudad:s,nombreTienda:a,ubicacionActual:r,urlNombreCiudad:c,urlNombreTienda:d,iconoRaiz:t,iconoTiendas:u,iconoUbiccionActual:v,iconotiendasDos:_,urlNombreServicio:p}=e;return(0,i.jsxs)("div",{className:l().sectionBreadcrumbs,children:[(0,i.jsxs)("div",{className:l().contenedorBreadcrumbs,children:[(0,i.jsx)("a",{href:"/",title:"Ir a ".concat(o),children:o}),t,(0,i.jsx)("a",{href:p,title:"Ir a ".concat(n),children:n}),u,(0,i.jsx)("a",{href:c,title:"Ir a ".concat(s),children:s}),v,(0,i.jsx)("a",{href:d,title:"Ir a ".concat(a),children:a}),_]}),r]})};o.Z=a},95197:function(e,o,n){"use strict";var i=n(85893),s=n(67294),l=n(47865),a=n.n(l);let r=e=>{var o,n,l,r,c,d,t,u,v,_;let{ciudad:p}=e,m=null==p?void 0:null===(o=p.acf)||void 0===o?void 0:o.ciudad_oro,[g,h]=(0,s.useState)([]),[x,f]=(0,s.useState)(null);(0,s.useEffect)(()=>{fetch("https://panel.quickgold.es/archivos-cache/Fixing".concat(m,".txt"),{cache:"no-cache"}).then(e=>e.json()).then(e=>{h(e),f(!0)})},[]);let[j,b]=(0,s.useState)("0.00"),[N,q]=(0,s.useState)("0.00"),[T,D]=(0,s.useState)(!0),I=(null==g?void 0:null===(n=g.result)||void 0===n?void 0:null===(l=n.Tarifas)||void 0===l?void 0:l.Oro[12].Productos[0].Precio)/1e3,y=(null==g?void 0:null===(r=g.result)||void 0===r?void 0:null===(c=r.Tarifas)||void 0===c?void 0:c.Oro[2].Productos[0].Precio)/1e3,S=(null==g?void 0:null===(d=g.result)||void 0===d?void 0:null===(t=d.Tarifas)||void 0===t?void 0:t.Oro[10].Productos[0].Precio)/1e3,k=null==p?void 0:null===(u=p.acf)||void 0===u?void 0:u.precio_mas_de_oro,w=(I+parseFloat(k)).toFixed(2),G=(y+parseFloat(k)).toFixed(2),R=(S+parseFloat(k)).toFixed(2),C=null==p?void 0:null===(v=p.acf)||void 0===v?void 0:v.para_mas_de_oro,z=parseFloat(N)+parseFloat(k),H=parseFloat(N);return(0,i.jsxs)("div",{className:a().contenedorAmbosBloquesOro,children:[(0,i.jsxs)("div",{className:a().contenedorBloqueSuperior,children:[(0,i.jsxs)("div",{className:a().botones,children:[(0,i.jsxs)("button",{onClick:()=>{D(!0)},className:T?"".concat(a().button," ").concat(a().botonActivo):"".concat(a().button," "),children:["M\xe1s de ",C,"g"]}),(0,i.jsxs)("button",{onClick:()=>{D(!1)},className:T?"".concat(a().button," "):"".concat(a().button," ").concat(a().botonActivo),children:["Menos de ",C,"g"]})]}),T?(0,i.jsxs)("div",{className:a().contenedorPrecios,children:[(0,i.jsx)("div",{className:a().contenedorprecioDestacado,children:(0,i.jsxs)("div",{className:a().precioDestacado,children:[(0,i.jsx)("p",{className:a().kilates,children:"18K"}),x?(0,i.jsxs)("p",{className:a().precio18k,children:[G,(0,i.jsx)("span",{children:"€/g"})]}):(0,i.jsx)("p",{className:a().precio18kCargando,children:"Cargando..."})]})}),(0,i.jsxs)("div",{className:a().contenedorOtrosPrecios,children:[(0,i.jsxs)("div",{className:a().OtrosPrecios,children:[(0,i.jsx)("p",{className:a().preciok,children:"24K"}),x?(0,i.jsxs)("p",{className:a().precio,children:[w," ",(0,i.jsx)("span",{children:"€/g"})]}):(0,i.jsx)("p",{className:a().precioCargando,children:"Cargando.."})]}),(0,i.jsxs)("div",{className:a().OtrosPrecios,children:[(0,i.jsx)("p",{className:a().preciok,children:"14K"}),x?(0,i.jsxs)("p",{className:a().precio,children:[R," ",(0,i.jsx)("span",{children:"€/g"})]}):(0,i.jsx)("p",{className:a().precioCargando,children:"Cargando.."})]})]})]}):(0,i.jsxs)("div",{className:a().contenedorPrecios,children:[(0,i.jsx)("div",{className:a().contenedorprecioDestacado,children:(0,i.jsxs)("div",{className:a().precioDestacado,children:[(0,i.jsx)("p",{className:a().kilates,children:"18K"}),(0,i.jsxs)("p",{className:a().precio18k,children:[y.toFixed(2),(0,i.jsx)("span",{children:"€/g"})]})]})}),(0,i.jsxs)("div",{className:a().contenedorOtrosPrecios,children:[(0,i.jsxs)("div",{className:a().OtrosPrecios,children:[(0,i.jsx)("p",{className:a().preciok,children:"24K"}),(0,i.jsxs)("p",{className:a().precio,children:[I.toFixed(2)," ",(0,i.jsx)("span",{children:"€/g"})]})]}),(0,i.jsxs)("div",{className:a().OtrosPrecios,children:[(0,i.jsx)("p",{className:a().preciok,children:"14K"}),(0,i.jsxs)("p",{className:a().precio,children:[S.toFixed(2)," ",(0,i.jsx)("span",{children:"€/g"})]})]})]})]})]}),(0,i.jsxs)("div",{className:a().contenedorCalculadora,children:[(0,i.jsxs)("h2",{children:["\xbfCu\xe1nto ",(0,i.jsx)("span",{children:"te vamos a dar"})," por tus joyas?"]}),(0,i.jsxs)("div",{className:a().contenedorSelect,children:[(0,i.jsxs)("div",{className:a().Select,children:[(0,i.jsx)("p",{children:"Selecciona kilates"}),(0,i.jsxs)("select",{onChange:e=>{q(e.target.value)},children:[(0,i.jsx)("option",{value:0,children:"---"}),(0,i.jsx)("option",{value:S.toFixed(2),children:"14K"}),(0,i.jsx)("option",{value:y.toFixed(2),children:"18K"}),(0,i.jsx)("option",{value:I.toFixed(2),children:"24K"})]})]}),(0,i.jsxs)("div",{className:a().input,children:[(0,i.jsx)("p",{children:"Introduce gramos"}),(0,i.jsx)("input",{type:"number",placeholder:"Cantidad",onChange:e=>b(e.target.value)}),(0,i.jsx)("span",{children:"g"})]})]}),(0,i.jsx)("p",{className:a().tituloInferior,children:"Te daremos por tu oro"}),(0,i.jsxs)("p",{className:a().precioFinal,children:[j>=parseFloat(C)?(j*z).toLocaleString("es",{style:"currency",currency:"EUR"}):(j*H).toLocaleString("es",{style:"currency",currency:"EUR"}),(0,i.jsx)("span",{})]})]}),(0,i.jsx)("p",{className:a().promocion,children:"Promoci\xf3n Online"}),(0,i.jsx)("a",{title:"Llamar a Quickgold ".concat(null==p?void 0:p.ciudad_landing),className:a().botonLlamarTienda,href:"tel:".concat(null==p?void 0:null===(_=p.acf)||void 0===_?void 0:_.telefono),children:"LLAMA GRATIS"})]})};o.Z=r},85439:function(e,o,n){"use strict";var i=n(85893);n(67294);var s=n(48386),l=n.n(s),a=n(25675),r=n.n(a);let c=e=>{var o,n,s,a;let{tiendaGoogle:c,ciudad:d}=e;return(0,i.jsxs)(i.Fragment,{children:[null==c?void 0:null===(o=c.result)||void 0===o?void 0:null===(n=o.reviews)||void 0===n?void 0:n.map((e,o)=>{if(e.rating>4.7)var n=69;else if(e.rating<4.8&&e.rating<4.3)var n=62;else if(e.rating<4.4&&e.rating<3.7)var n=55;else if(e.rating<3.8&&e.rating<3.3)var n=48;else if(e.rating<3.4&&e.rating<2.7)var n=41;else if(e.rating<2.8&&e.rating<2.3)var n=34;else if(e.rating<2.4&&e.rating<1.7)var n=27;else if(e.rating<1.8&&e.rating<1.3)var n=20;else if(e.rating<1.4&&e.rating<.7)var n=13;return e.rating>=4?(0,i.jsxs)("div",{className:l().contenedorResenasGoogle,children:[(0,i.jsxs)("div",{className:l().contenedorSuperior,children:[" ",(0,i.jsx)("img",{src:e.profile_photo_url,alt:"Imagen rese\xf1a google",className:l().imagenResena,width:70,height:70,loading:"lazy"}),(0,i.jsx)(r(),{src:"/assets/img/GOOGLE.png",alt:"Imagen rese\xf1a google",className:l().imagenGoogle,width:30,height:30}),(0,i.jsxs)("div",{className:l().imagenResena,children:[(0,i.jsx)("p",{className:l().nombreUsuario,children:e.author_name}),(0,i.jsx)("p",{className:l().textoInferior,children:e.relative_time_description})]})]}),(0,i.jsxs)("div",{className:l().contenedorEstrellas,children:[" ",(0,i.jsx)("span",{className:l().img_stars,children:(0,i.jsx)("span",{style:{width:n},className:l().imgValoracion})}),(0,i.jsx)("span",{className:l().valoracionResenas,children:e.rating})," "]}),(0,i.jsx)("div",{className:l().textoContenido,children:e.text})]},o):null}),(0,i.jsx)("div",{className:l().botonVerMas,children:(0,i.jsx)("a",{target:"_blank",href:null==d?void 0:null===(s=d.acf)||void 0===s?void 0:null===(a=s.info_grupo)||void 0===a?void 0:a.enlace_resenas,children:"VER M\xc1S"})})]})};o.Z=c},31552:function(e,o,n){"use strict";n.r(o),n.d(o,{__N_SSG:function(){return L},default:function(){return O}});var i=n(85893),s=n(9008),l=n.n(s),a=n(13915),r=n.n(a),c=n(46531),d=n.n(c),t=n(17186),u=n(92911),v=n(43428),_=n(57699);n(67294);var p=n(23318),m=n.n(p),g=n(25675),h=n.n(g);let x=e=>{let{ciudad:o,tiendaGoogle:n}=e,s=null==n?void 0:null===(l=n.result)||void 0===l?void 0:l.rating;if((null==s?void 0:s.estrellas)>4.7)var l,a,r,c,d,t,u,v,_,p=69;else if((null==s?void 0:s.estrellas)<4.8&&(null==s?void 0:s.estrellas)<4.3)var p=62;else if((null==s?void 0:s.estrellas)<4.4&&(null==s?void 0:s.estrellas)<3.7)var p=55;else if((null==s?void 0:s.estrellas)<3.8&&(null==s?void 0:s.estrellas)<3.3)var p=48;else if((null==s?void 0:s.estrellas)<3.4&&(null==s?void 0:s.estrellas)<2.7)var p=41;else if((null==s?void 0:s.estrellas)<2.8&&(null==s?void 0:s.estrellas)<2.3)var p=34;else if((null==s?void 0:s.estrellas)<2.4&&(null==s?void 0:s.estrellas)<1.7)var p=27;else if((null==s?void 0:s.estrellas)<1.8&&(null==s?void 0:s.estrellas)<1.3)var p=20;else if((null==s?void 0:s.estrellas)<1.4&&(null==s?void 0:s.estrellas)<.7)var p=13;return(0,i.jsxs)("article",{className:m().contenedorSeccionUno,children:[(0,i.jsx)("section",{className:m().bloqueDer,children:(0,i.jsx)("h1",{children:null==o?void 0:null===(a=o.acf)||void 0===a?void 0:null===(r=a.compro_oro_grupo)||void 0===r?void 0:r.title_h1_grupo})}),(0,i.jsx)("section",{className:m().bloqueIzq,children:(0,i.jsxs)("div",{className:m().bloqueResenas,children:[(0,i.jsxs)("div",{className:m().contenedorLogoGoogle,children:[(0,i.jsx)(h(),{src:"/assets/img/GOOGLE.png",width:29,height:30,alt:"Logo google"}),(0,i.jsxs)("div",{className:m().contenedorValoraciones,children:[(0,i.jsxs)("div",{className:m().contenedorResenas,children:[(0,i.jsx)("span",{className:m().img_stars,children:(0,i.jsx)("span",{style:{width:p},className:m().imgValoracion})}),(0,i.jsx)("span",{className:m().valoracionResenas,children:null==n?void 0:null===(c=n.result)||void 0===c?void 0:c.rating}),(0,i.jsx)("div",{className:m().numero_reviews,children:(0,i.jsx)("span",{children:(0,i.jsx)("a",{href:null==o?void 0:null===(d=o.acf)||void 0===d?void 0:null===(t=d.info_grupo)||void 0===t?void 0:t.enlace_resenas,target:"_blank",children:"Ver rese\xf1as"})})})]}),(0,i.jsxs)("div",{className:m().resenasGoogle,children:[null==n?void 0:null===(u=n.result)||void 0===u?void 0:u.user_ratings_total," ",(0,i.jsx)("span",{children:"opiniones en Google"})]})]})]}),(0,i.jsx)("div",{className:m().verResenas,children:(0,i.jsx)("a",{href:null==o?void 0:null===(v=o.acf)||void 0===v?void 0:null===(_=v.info_grupo)||void 0===_?void 0:_.escribir_resenas_landings,target:"_blank",children:"D\xe9janos tu opinion"})})]})})]})};var f=n(37344),j=n.n(f),b=n(17202),N=n(84007),q=n(85439),T=n(97650);let D=e=>{var o,n,s,l,a,r,c,d,t,u,v,_,p,m,g,h,x,f;let{tiendaGoogle:D,ciudad:I}=e,{ref:y,inView:S}=(0,T.YD)(),k=null===(o=null==D?void 0:D.result.opening_hours)||void 0===o?void 0:o.weekday_text[0],w=null===(n=null==D?void 0:D.result.opening_hours)||void 0===n?void 0:n.weekday_text[5],G=null===(s=null==D?void 0:D.result.opening_hours)||void 0===s?void 0:s.weekday_text[6],R=null==k?void 0:k.replace("lunes:",""),C=null==w?void 0:w.replace("s\xe1bado:",""),z=null==G?void 0:G.replace("domingo:","");return(0,i.jsxs)("aside",{className:j().contenedorSeccionTres,children:[(0,i.jsxs)("section",{className:j().contenedorInfoTienda,children:[(0,i.jsxs)("div",{className:j().bloqueIzqInfoTienda,children:[(0,i.jsx)("p",{className:j().bloqueIzqTitulo,children:"Contacto"}),(0,i.jsx)("p",{className:j().bloqueIzqDireccion,children:null==D?void 0:null===(l=D.result)||void 0===l?void 0:l.formatted_address}),(0,i.jsxs)("div",{className:j().iconosTelefono,children:[(0,i.jsx)("a",{title:"Llamar a Quickgold ".concat(null==I?void 0:null===(a=I.acf)||void 0===a?void 0:null===(r=a.info_grupo)||void 0===r?void 0:r.ciudad_landing),href:"tel:".concat(null==I?void 0:null===(c=I.acf)||void 0===c?void 0:null===(d=c.info_grupo)||void 0===d?void 0:d.telefono),children:(0,i.jsx)("span",{className:j().bloqueIzqTel,children:null==I?void 0:null===(t=I.acf)||void 0===t?void 0:null===(u=t.info_grupo)||void 0===u?void 0:u.telefono})}),(0,i.jsxs)("div",{className:j().contenedorIconos,children:[(0,i.jsxs)("a",{title:"Llamar a Quickgold ".concat(null==I?void 0:null===(v=I.acf)||void 0===v?void 0:null===(_=v.info_grupo)||void 0===_?void 0:_.ciudad_landing),className:j().telefonoIcon,href:"tel:".concat(null==I?void 0:null===(p=I.acf)||void 0===p?void 0:null===(m=p.info_grupo)||void 0===m?void 0:m.telefono),children:[(0,i.jsx)(b.Z,{}),(0,i.jsx)("span",{className:j().bloqueIzqTel})]}),(0,i.jsx)("a",{title:"Escribir WhatsApp",className:j().WhatsAppIcon,target:"_blank",href:"https://wa.me/".concat((null==I?void 0:null===(g=I.acf)||void 0===g?void 0:null===(h=g.info_grupo)||void 0===h?void 0:h.mobile).replace(/\s+/g,"")),children:(0,i.jsx)(N.Z,{})})]})]})]}),(0,i.jsxs)("div",{className:j().bloqueDerInfoTienda,children:[(0,i.jsx)("p",{className:j().bloqueDerTitulo,children:"Horario"}),(0,i.jsx)("p",{className:j().bloqueDerHorarioHabitual,children:"Horario Habitual"}),(0,i.jsx)("p",{className:j().bloqueDerdias,children:"Lunes a Viernes:"}),(0,i.jsx)("p",{className:j().bloqueDerHorario,children:R}),(0,i.jsx)("p",{className:j().bloqueDerSabado,children:"S\xe1bado:"}),(0,i.jsx)("p",{className:j().bloqueDerSabadoHorario,children:C}),(0,i.jsx)("p",{className:j().bloqueDerDomingo,children:"Domingo:"}),(0,i.jsx)("p",{className:j().bloqueDerDomingoCerrado,children:z})]})]}),(0,i.jsx)("section",{className:j().contenedorMapa,children:(0,i.jsx)("iframe",{title:"Mapa Tienda",src:null==I?void 0:null===(x=I.acf)||void 0===x?void 0:null===(f=x.info_grupo)||void 0===f?void 0:f.mapa_landing,width:"100%",height:"100%",loading:"lazy"})}),(0,i.jsx)("section",{className:j().contenedorResenasGoogle,ref:y,children:S?(0,i.jsx)(q.Z,{tiendaGoogle:D,ciudad:I}):null})]})};var I=n(62810),y=n(77967),S=n(48317),k=n(4298),w=n.n(k),G=n(63683),R=n(88557),C=n.n(R),z=n(95197);let H=e=>{var o,n;let{ciudad:s}=e;return(0,i.jsxs)("article",{className:C().contenedorSeccionDos,children:[(0,i.jsx)("h1",{className:C().contenedorSeccionDosH2,children:"Precio del oro"}),(0,i.jsxs)("h2",{className:C().subTituloServicio,children:["Vender ",(0,i.jsx)("strong",{children:"oro al mejor precio"})," es f\xe1cil en nuestras tiendas"," ",(0,i.jsx)("strong",{children:"Compro oro"})," en ",null==s?void 0:null===(o=s.acf)||void 0===o?void 0:null===(n=o.info_grupo)||void 0===n?void 0:n.ciudad_landing,". M\xe1s de 15 a\xf1os en el sector siendo la empresa referente en las ciudades donde estamos."]}),(0,i.jsx)(z.Z,{ciudad:s})]})};var L=!0;function O(e){var o,n,s,a,c,p,m,g,h,f,j,b,N,q,T,k,R,C,z,L,O,M,P,V,F,U,Z,A,E,B,K,W,Q,J,X,Y,$,ee;let{menu_list:eo,ciudad:en,tiendaGoogle:ei,general:es}=e,el={"@context":"https://schema.org/","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Quickgold",item:"https://quickgold.es"},{"@type":"ListItem",position:2,name:"Tiendas",item:"https://quickgold.es/compro-oro"},{"@type":"ListItem",position:3,name:null==en?void 0:null===(o=en.acf)||void 0===o?void 0:null===(n=o.info_grupo)||void 0===n?void 0:n.ciudad_landing,item:"https://quickgold.es/compro-oro/alcala-de-henares"}]},ea={"@context":"http://schema.org","@type":"LocalBusiness",name:null==ei?void 0:null===(s=ei.result)||void 0===s?void 0:s.name,aggregateRating:{"@type":"AggregateRating",ratingValue:null==ei?void 0:null===(a=ei.result)||void 0===a?void 0:a.rating,ratingCount:null==ei?void 0:null===(c=ei.result)||void 0===c?void 0:c.user_ratings_total,worstRating:1,bestRating:5},priceRange:"$",image:"/assets/img/".concat(null==en?void 0:null===(p=en.acf)||void 0===p?void 0:null===(m=p.info_grupo)||void 0===m?void 0:m.tienda,".jpg"),telephone:null==ei?void 0:null===(g=ei.result)||void 0===g?void 0:g.formatted_phone_number,address:{"@type":"PostalAddress",addressLocality:null===(h=null==ei?void 0:null===(f=ei.result)||void 0===f?void 0:f.address_components[3])||void 0===h?void 0:h.long_name,addressRegion:null===(j=null==ei?void 0:null===(b=ei.result)||void 0===b?void 0:b.address_components[4])||void 0===j?void 0:j.long_name,streetAddress:null==ei?void 0:null===(N=ei.result)||void 0===N?void 0:N.formatted_address}};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d(),{title:null==en?void 0:null===(q=en.acf)||void 0===q?void 0:null===(T=q.compro_oro_grupo)||void 0===T?void 0:T.title_meta_oro,description:null==en?void 0:null===(k=en.acf)||void 0===k?void 0:null===(R=k.compro_oro_grupo)||void 0===R?void 0:R.description_meta_grupo,icon:"/favicon.png",facebook:{image:"/assets/img/".concat(null==en?void 0:null===(C=en.acf)||void 0===C?void 0:null===(z=C.info_grupo)||void 0===z?void 0:z.tienda,".jpg"),url:"https://www.facebook.com/quickgold.es/",type:"article"},twitter:{image:"/assets/img/".concat(null==en?void 0:null===(L=en.acf)||void 0===L?void 0:null===(O=L.info_grupo)||void 0===O?void 0:O.tienda,".jpg"),site:"@quickgoldQG",card:"summary_large_image"}}),(0,i.jsxs)(l(),{children:[(0,i.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(ea)}}),(0,i.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"http://www.schema.org","@type":"Organization",name:"Quickgold",url:"https://quickgold.es",sameAs:["https://instagram.com/quickgold.es","https://twitter.com/quickgoldqg","https://www.facebook.com/quickgold.es"],logo:"/assets/img/logo.jpg",image:"/assets/img/logo.jpg"})}}),(0,i.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(el)}}),null==en?void 0:null===(M=en.acf)||void 0===M?void 0:null===(P=M.info_grupo)||void 0===P?void 0:P.nonscript_chat,(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"canonical",href:null==en?void 0:null===(V=en.acf)||void 0===V?void 0:null===(F=V.info_grupo)||void 0===F?void 0:F.canonical})]}),(0,i.jsx)(w(),{id:"livechat",property:"lazyOnload",children:null==en?void 0:null===(U=en.acf)||void 0===U?void 0:null===(Z=U.info_grupo)||void 0===Z?void 0:Z.script_chat}),(0,i.jsxs)(_.Z,{menu_list:eo,ciudad:en,children:[(0,i.jsxs)("div",{className:r().main,children:[(0,i.jsx)(G.Z,{raiz:"Quickgold",tiendas:"Compro oro",urlNombreCiudad:"https://quickgold.es/compro-oro/alcala-de-henares",urlNombreTienda:"https://quickgold.es/compro-oro/alcala-de-henares",urlNombreServicio:"/compro-oro",ubicacionActual:null==en?void 0:null===(A=en.acf)||void 0===A?void 0:null===(E=A.info_grupo)||void 0===E?void 0:E.nombre_tienda,iconoRaiz:(0,i.jsx)(S.Z,{}),iconoTiendas:(0,i.jsx)(S.Z,{})}),(0,i.jsx)(x,{ciudad:en,tiendaGoogle:ei}),(null==en?void 0:null===(B=en.acf)||void 0===B?void 0:B.activar_banner_en_tiendas_y_ciudad)&&(null==es?void 0:null===(K=es.acf)||void 0===K?void 0:K.activar_promo_general)?(0,i.jsx)(I.Z,{ciudad:en}):null,(null==en?void 0:null===(W=en.acf)||void 0===W?void 0:W.activar_banner_en_tiendas_y_ciudad)==!1&&(null==es?void 0:null===(Q=es.acf)||void 0===Q?void 0:Q.activar_promo_general)?(0,i.jsx)(y.Z,{general:es}):null,(null==es?void 0:null===(J=es.acf)||void 0===J?void 0:J.activar_promo_general)==!1&&(null==en?void 0:null===(X=en.acf)||void 0===X?void 0:X.activar_banner_en_tiendas_y_ciudad)?(0,i.jsx)(I.Z,{ciudad:en}):null,(0,i.jsxs)("div",{className:r().contenedorSeccionUnoDos,children:[(0,i.jsx)(H,{ciudad:en}),(0,i.jsx)(D,{ciudad:en,tiendaGoogle:ei})]})]}),(null==en?void 0:null===(Y=en.acf)||void 0===Y?void 0:null===($=Y.info_grupo)||void 0===$?void 0:$.tienda)===""?(0,i.jsx)(t.Z,{ciudad:en}):(0,i.jsx)(u.Z,{ciudad:en}),(null==en?void 0:null===(ee=en.acf)||void 0===ee?void 0:ee.activar_banner_wallapop)?(0,i.jsx)(v.Z,{ciudad:en}):null]})]})}},86007:function(e){e.exports={contenedorBreadcrumbs:"breadcrumbs_contenedorBreadcrumbs__9IhUz",breadcrumbsRaiz:"breadcrumbs_breadcrumbsRaiz__9VpIs",sectionBreadcrumbs:"breadcrumbs_sectionBreadcrumbs__tqruT"}},37344:function(e){e.exports={contenedorSeccionTres:"seccionTres_contenedorSeccionTres__gPvIp",contenedorInfoTienda:"seccionTres_contenedorInfoTienda__7Rmtn",bloqueIzqInfoTienda:"seccionTres_bloqueIzqInfoTienda__f876o",bloqueDerInfoTienda:"seccionTres_bloqueDerInfoTienda__myTRl",bloqueIzqTitulo:"seccionTres_bloqueIzqTitulo__uHCZi",bloqueDerTitulo:"seccionTres_bloqueDerTitulo__koJj8",bloqueDerHorarioHabitual:"seccionTres_bloqueDerHorarioHabitual__4yj6S",bloqueIzqDireccion:"seccionTres_bloqueIzqDireccion__dRXqB",bloqueIzqTel:"seccionTres_bloqueIzqTel__fyFxS",iconosTelefono:"seccionTres_iconosTelefono__uA6v3",telefonoIcon:"seccionTres_telefonoIcon__vW4zO",WhatsAppIcon:"seccionTres_WhatsAppIcon__jVKnk",bloqueDerdias:"seccionTres_bloqueDerdias__LYrlG",bloqueDerSabado:"seccionTres_bloqueDerSabado__YtGTe",bloqueDerHorario:"seccionTres_bloqueDerHorario__YWaFP",bloqueDerSabadoHorario:"seccionTres_bloqueDerSabadoHorario__F_F2a",bloqueDerDomingo:"seccionTres_bloqueDerDomingo__fIoBA",bloqueDerDomingoCerrado:"seccionTres_bloqueDerDomingoCerrado__C_ddL",contenedorMapa:"seccionTres_contenedorMapa__hk0YI",contenedorResenasGoogle:"seccionTres_contenedorResenasGoogle__JkG5w",contenedorIconos:"seccionTres_contenedorIconos__aLPjY"}},23318:function(e){e.exports={contenedorSeccionUno:"seccionUno_contenedorSeccionUno__JvG_9",bloqueDer:"seccionUno_bloqueDer__QwTDp",imagenTienda:"seccionUno_imagenTienda__z6nwe",img_stars:"seccionUno_img_stars__dWXua",imgValoracion:"seccionUno_imgValoracion__LFG18",bloqueResenas:"seccionUno_bloqueResenas__cvlJf",contenedorValoraciones:"seccionUno_contenedorValoraciones__iEWfx",valoracionResenas:"seccionUno_valoracionResenas__qyNuz",contenedorResenas:"seccionUno_contenedorResenas__xlSRZ",contenedorLogoGoogle:"seccionUno_contenedorLogoGoogle__w5cY1",numero_reviews:"seccionUno_numero_reviews__wVJEm",resenasGoogle:"seccionUno_resenasGoogle__OGzHl",verResenas:"seccionUno_verResenas__qg1iE"}},88557:function(e){e.exports={contenedorSeccionDos:"seccionDos_contenedorSeccionDos__Fh82G",contenedorSeccionDosH2:"seccionDos_contenedorSeccionDosH2__apMpL",subTituloServicio:"seccionDos_subTituloServicio__a01QF"}},48386:function(e){e.exports={contenedorResenasGoogle:"resenasGoogle_contenedorResenasGoogle__fjEq4",contenedorSuperior:"resenasGoogle_contenedorSuperior__Ul1wH",imagenGoogle:"resenasGoogle_imagenGoogle__Z_YDX",nombreUsuario:"resenasGoogle_nombreUsuario__8hHXX",textoInferior:"resenasGoogle_textoInferior__3Vat3",img_stars:"resenasGoogle_img_stars__vulVK",imgValoracion:"resenasGoogle_imgValoracion__Mdv05",valoracionResenas:"resenasGoogle_valoracionResenas__FR1uU",textoContenido:"resenasGoogle_textoContenido__Df_5a",botonVerMas:"resenasGoogle_botonVerMas__4uIwT"}},13915:function(e){e.exports={main:"Home_main__EtNt2",contenedorMapaVisible:"Home_contenedorMapaVisible__piXgh",contenedorSeccionUnoDos:"Home_contenedorSeccionUnoDos__pegsP",contenedorMapaVisibleCasaCambio:"Home_contenedorMapaVisibleCasaCambio__A5Ti8",contenedorBannerVisible:"Home_contenedorBannerVisible__opy6k",contenedorSecciones:"Home_contenedorSecciones__bMVep"}}},function(e){e.O(0,[5231,7699,7743,9774,2888,179],function(){return e(e.s=85179)}),_N_E=e.O()}]);