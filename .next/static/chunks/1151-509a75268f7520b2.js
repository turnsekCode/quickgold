(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1151],{45111:function(e,o,n){"use strict";var r=n(64836);o.Z=void 0;var s=r(n(64938)),c=n(85893),i=(0,s.default)((0,c.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");o.Z=i},10527:function(e,o,n){"use strict";n.d(o,{Z:function(){return B}});var r=n(85893),s=n(67294),c=n(11496),i=n(82280),a=n(38895),l=n(22797),d=n(45111),t=n(53486),u=n.n(t),v=n(47865),p=n.n(v);let x=e=>{var o,n,c,i,a,l,d,t,u,v,x;let{ciudad:m}=e,_=null==m?void 0:null===(o=m.acf)||void 0===o?void 0:o.ciudad_oro,[h,j]=(0,s.useState)([]),[b,g]=(0,s.useState)(null);(0,s.useEffect)(()=>{fetch("https://panel.quickgold.es/archivos-cache/Fixing".concat(_,".txt"),{cache:"no-cache"}).then(e=>e.json()).then(e=>{j(e),g(!0)})},[]);let[f,N]=(0,s.useState)("0.00"),[P,L]=(0,s.useState)("0.00"),[S,B]=(0,s.useState)(!0),y=(null==h?void 0:null===(n=h.result)||void 0===n?void 0:null===(c=n.Tarifas)||void 0===c?void 0:c.Oro[12].Productos[0].Precio)/1e3,T=(null==h?void 0:null===(i=h.result)||void 0===i?void 0:null===(a=i.Tarifas)||void 0===a?void 0:a.Oro[2].Productos[0].Precio)/1e3,k=(null==h?void 0:null===(l=h.result)||void 0===l?void 0:null===(d=l.Tarifas)||void 0===d?void 0:d.Oro[10].Productos[0].Precio)/1e3,A=null==m?void 0:null===(t=m.acf)||void 0===t?void 0:t.precio_mas_de_oro,F=(y+parseFloat(A)).toFixed(2),D=(T+parseFloat(A)).toFixed(2),q=(k+parseFloat(A)).toFixed(2),C=null==m?void 0:null===(u=m.acf)||void 0===u?void 0:u.para_mas_de_oro,O=parseFloat(P)+parseFloat(A),E=parseFloat(P);return(0,r.jsxs)("div",{className:p().contenedorAmbosBloquesOro,children:[(0,r.jsxs)("div",{className:p().contenedorBloqueSuperior,children:[(0,r.jsxs)("div",{className:p().botones,children:[(0,r.jsxs)("button",{onClick:()=>{B(!0)},className:S?"".concat(p().button," ").concat(p().botonActivo):"".concat(p().button," "),children:["M\xe1s de ",C,"g"]}),(0,r.jsxs)("button",{onClick:()=>{B(!1)},className:S?"".concat(p().button," "):"".concat(p().button," ").concat(p().botonActivo),children:["Menos de ",C,"g"]})]}),S?(0,r.jsxs)("div",{className:p().contenedorPrecios,children:[(0,r.jsx)("div",{className:p().contenedorprecioDestacado,children:(0,r.jsxs)("div",{className:p().precioDestacado,children:[(0,r.jsx)("p",{className:p().kilates,children:"18K"}),b?(0,r.jsxs)("p",{className:p().precio18k,children:[D,(0,r.jsx)("span",{children:"€/g"})]}):(0,r.jsx)("p",{className:p().precio18k,children:"Cargando"})]})}),(0,r.jsxs)("div",{className:p().contenedorOtrosPrecios,children:[(0,r.jsxs)("div",{className:p().OtrosPrecios,children:[(0,r.jsx)("p",{className:p().preciok,children:"24K"}),b?(0,r.jsxs)("p",{className:p().precio,children:[F," ",(0,r.jsx)("span",{children:"€/g"})]}):(0,r.jsx)("p",{className:p().precio,children:"Cargando"})]}),(0,r.jsxs)("div",{className:p().OtrosPrecios,children:[(0,r.jsx)("p",{className:p().preciok,children:"14K"}),b?(0,r.jsxs)("p",{className:p().precio,children:[q," ",(0,r.jsx)("span",{children:"€/g"})]}):(0,r.jsx)("p",{className:p().precio,children:"Cargando"})]})]})]}):(0,r.jsxs)("div",{className:p().contenedorPrecios,children:[(0,r.jsx)("div",{className:p().contenedorprecioDestacado,children:(0,r.jsxs)("div",{className:p().precioDestacado,children:[(0,r.jsx)("p",{className:p().kilates,children:"18K"}),(0,r.jsxs)("p",{className:p().precio18k,children:[T.toFixed(2),(0,r.jsx)("span",{children:"€/g"})]})]})}),(0,r.jsxs)("div",{className:p().contenedorOtrosPrecios,children:[(0,r.jsxs)("div",{className:p().OtrosPrecios,children:[(0,r.jsx)("p",{className:p().preciok,children:"24K"}),(0,r.jsxs)("p",{className:p().precio,children:[y.toFixed(2)," ",(0,r.jsx)("span",{children:"€/g"})]})]}),(0,r.jsxs)("div",{className:p().OtrosPrecios,children:[(0,r.jsx)("p",{className:p().preciok,children:"14K"}),(0,r.jsxs)("p",{className:p().precio,children:[k.toFixed(2)," ",(0,r.jsx)("span",{children:"€/g"})]})]})]})]})]}),(0,r.jsxs)("div",{className:p().contenedorCalculadora,children:[(0,r.jsxs)("h2",{children:["\xbfCu\xe1nto ",(0,r.jsx)("span",{children:"te vamos a dar"})," por tus joyas?"]}),(0,r.jsxs)("div",{className:p().contenedorSelect,children:[(0,r.jsxs)("div",{className:p().Select,children:[(0,r.jsx)("p",{children:"Selecciona kilates"}),(0,r.jsxs)("select",{onChange:e=>{L(e.target.value)},children:[(0,r.jsx)("option",{value:0,children:"---"}),(0,r.jsx)("option",{value:k.toFixed(2),children:"14K"}),(0,r.jsx)("option",{value:T.toFixed(2),children:"18K"}),(0,r.jsx)("option",{value:y.toFixed(2),children:"24K"})]})]}),(0,r.jsxs)("div",{className:p().input,children:[(0,r.jsx)("p",{children:"Introduce gramos"}),(0,r.jsx)("input",{type:"number",placeholder:"Cantidad",onChange:e=>N(e.target.value)}),(0,r.jsx)("span",{children:"g"})]})]}),(0,r.jsx)("p",{className:p().tituloInferior,children:"Te daremos por tu oro"}),(0,r.jsxs)("p",{className:p().precioFinal,children:[f>=parseFloat(C)?(f*O).toLocaleString("es",{style:"currency",currency:"EUR"}):(f*E).toLocaleString("es",{style:"currency",currency:"EUR"}),(0,r.jsx)("span",{})]})]}),(0,r.jsx)("p",{className:p().promocion,children:"Promoci\xf3n Online"}),(0,r.jsx)("a",{title:"Llamar a Quickgold ".concat(null==m?void 0:null===(v=m.acf)||void 0===v?void 0:v.ciudad_landing),className:p().botonLlamarTienda,href:"tel:".concat(null==m?void 0:null===(x=m.acf)||void 0===x?void 0:x.telefono),children:"LLAMA GRATIS"})]})};var m=n(37239);let _=e=>{var o,n,c,i,a,l,d,t,u,v,x;let{ciudad:m}=e,_=null==m?void 0:null===(o=m.acf)||void 0===o?void 0:o.ciudad_oro,[h,j]=(0,s.useState)([]),[b,g]=(0,s.useState)(null);(0,s.useEffect)(()=>{fetch("https://panel.quickgold.es/archivos-cache/Fixing".concat(_,".txt"),{cache:"no-cache"}).then(e=>e.json()).then(e=>{j(e),g(!0)})},[]);let[f,N]=(0,s.useState)("0.00"),[P,L]=(0,s.useState)("0.00"),[S,B]=(0,s.useState)(!0),y=null==h?void 0:null===(n=h.result)||void 0===n?void 0:null===(c=n.Tarifas)||void 0===c?void 0:c.Plata[3].Productos[0].Precio.toFixed(2),T=null==h?void 0:null===(i=h.result)||void 0===i?void 0:null===(a=i.Tarifas)||void 0===a?void 0:a.Plata[2].Productos[0].Precio.toFixed(2),k=null==h?void 0:null===(l=h.result)||void 0===l?void 0:null===(d=l.Tarifas)||void 0===d?void 0:d.Plata[0].Productos[0].Precio.toFixed(2),A=null==m?void 0:null===(t=m.acf)||void 0===t?void 0:t.para_mas_de_plata,F=null==m?void 0:null===(u=m.acf)||void 0===u?void 0:u.precio_mas_de_plata,D=(parseFloat(y)+parseFloat(F)).toFixed(2),q=(parseFloat(T)+parseFloat(F)).toFixed(2),C=(parseFloat(k)+parseFloat(F)).toFixed(2),O=(parseFloat(P)+parseFloat(F)).toFixed(2),E=parseFloat(P).toFixed(2);return(0,r.jsxs)("div",{className:p().contenedorAmbosBloquesOro,children:[(0,r.jsxs)("div",{className:p().contenedorBloqueSuperior,children:[(0,r.jsxs)("div",{className:p().botones,children:[(0,r.jsxs)("button",{onClick:()=>{B(!0)},className:S?"".concat(p().button," ").concat(p().botonActivo):"".concat(p().button," "),children:["M\xe1s de ",A,"kg"]}),(0,r.jsxs)("button",{onClick:()=>{B(!1)},className:S?"".concat(p().button," "):"".concat(p().button," ").concat(p().botonActivo),children:["Menos de ",A,"kg"]})]}),S?(0,r.jsxs)("div",{className:p().contenedorPrecios,children:[(0,r.jsx)("div",{className:p().contenedorprecioDestacado,children:(0,r.jsxs)("div",{className:p().precioDestacado,children:[(0,r.jsx)("p",{className:p().kilates,children:"999"}),b?(0,r.jsxs)("p",{className:p().precio999,children:[D,(0,r.jsx)("span",{children:"€/kg"})]}):(0,r.jsx)("p",{className:p().precio18k,children:"Cargando"})]})}),(0,r.jsxs)("div",{className:p().contenedorOtrosPrecios,children:[(0,r.jsxs)("div",{className:p().OtrosPrecios,children:[(0,r.jsx)("p",{className:p().preciok,children:"925"}),b?(0,r.jsxs)("p",{className:p().precio,children:[q," ",(0,r.jsx)("span",{children:"€/kg"})]}):(0,r.jsx)("p",{className:p().precio,children:"Cargando"})]}),(0,r.jsxs)("div",{className:p().OtrosPrecios,children:[(0,r.jsx)("p",{className:p().preciok,children:"800"}),b?(0,r.jsxs)("p",{className:p().precio,children:[C," ",(0,r.jsx)("span",{children:"€/kg"})]}):(0,r.jsx)("p",{className:p().precio,children:"Cargando"})]})]})]}):(0,r.jsxs)("div",{className:p().contenedorPrecios,children:[(0,r.jsx)("div",{className:p().contenedorprecioDestacado,children:(0,r.jsxs)("div",{className:p().precioDestacado,children:[(0,r.jsx)("p",{className:p().kilates,children:"999"}),(0,r.jsxs)("p",{className:p().precio999,children:[y,(0,r.jsx)("span",{children:"€/kg"})]})]})}),(0,r.jsxs)("div",{className:p().contenedorOtrosPrecios,children:[(0,r.jsxs)("div",{className:p().OtrosPrecios,children:[(0,r.jsx)("p",{className:p().preciok,children:"925"}),(0,r.jsxs)("p",{className:p().precio,children:[T," ",(0,r.jsx)("span",{children:"€/kg"})]})]}),(0,r.jsxs)("div",{className:p().OtrosPrecios,children:[(0,r.jsx)("p",{className:p().preciok,children:"800"}),(0,r.jsxs)("p",{className:p().precio,children:[k," ",(0,r.jsx)("span",{children:"€/kg"})]})]})]})]})]}),(0,r.jsxs)("div",{className:p().contenedorCalculadora,children:[(0,r.jsxs)("h2",{children:["\xbfCu\xe1nto ",(0,r.jsx)("span",{children:"te vamos a dar"})," por tus joyas?"]}),(0,r.jsxs)("div",{className:p().contenedorSelect,children:[(0,r.jsxs)("div",{className:p().Select,children:[(0,r.jsx)("p",{children:"Selecciona pureza"}),(0,r.jsxs)("select",{onChange:e=>{L(e.target.value)},children:[(0,r.jsx)("option",{value:0,children:"---"}),(0,r.jsx)("option",{value:k,children:"800"}),(0,r.jsx)("option",{value:T,children:"925"}),(0,r.jsx)("option",{value:y,children:"999"})]})]}),(0,r.jsxs)("div",{className:p().input,children:[(0,r.jsx)("p",{children:"Introduce gramos"}),(0,r.jsx)("input",{type:"number",placeholder:"Cantidad",onChange:e=>N(e.target.value)}),(0,r.jsx)("span",{children:"g"})]})]}),(0,r.jsx)("p",{className:p().tituloInferior,children:"Te daremos por tu plata"}),(0,r.jsxs)("p",{className:p().precioFinal,children:[f>=parseFloat(1e3*A)?(f/1e3*O).toLocaleString("es",{style:"currency",currency:"EUR"}):(f/1e3*E).toLocaleString("es",{style:"currency",currency:"EUR"}),(0,r.jsx)("span",{})]})]}),(0,r.jsx)("p",{className:p().promocion,children:"Promoci\xf3n Online"}),(0,r.jsx)("a",{title:"Llamar a Quickgold ".concat(null==m?void 0:null===(v=m.acf)||void 0===v?void 0:v.ciudad_landing),className:p().botonLlamarTienda,href:"tel:".concat(null==m?void 0:null===(x=m.acf)||void 0===x?void 0:x.telefono),children:"LLAMA GRATIS"})]})};var h=n(12093),j=n.n(h);let b=e=>{var o,n,c,i,a,l,d,t,u,v,p,x,m,_,h,b,g,f,N,P,L,S,B,y,T,k,A,F,D,q,C;let{ciudad:O}=e,E=null==O?void 0:null===(o=O.acf)||void 0===o?void 0:o.ciudad_oro,[I,U]=(0,s.useState)([]);(0,s.useEffect)(()=>{fetch("https://panel.quickgold.es/archivos-cache/Fixing".concat(E,".txt"),{cache:"no-cache"}).then(e=>e.json()).then(e=>{U(e)})},[]);let M=((null==I?void 0:null===(n=I.result)||void 0===n?void 0:null===(c=n.Tarifas)||void 0===c?void 0:c.Lingotes[4].Productos[0].Precio)/1e3).toLocaleString("es",{style:"currency",currency:"EUR"}),R=((null==I?void 0:null===(i=I.result)||void 0===i?void 0:null===(a=i.Tarifas)||void 0===a?void 0:a.Lingotes[5].Productos[0].Precio)/1e3).toLocaleString("es",{style:"currency",currency:"EUR"}),W=((null==I?void 0:null===(l=I.result)||void 0===l?void 0:null===(d=l.Tarifas)||void 0===d?void 0:d.Lingotes[10].Productos[0].Precio)/1e3).toLocaleString("es",{style:"currency",currency:"EUR"}),Z=((null==I?void 0:null===(t=I.result)||void 0===t?void 0:null===(u=t.Tarifas)||void 0===u?void 0:u.Lingotes[11].Productos[0].Precio)/1e3).toLocaleString("es",{style:"currency",currency:"EUR"}),w=((null==I?void 0:null===(v=I.result)||void 0===v?void 0:null===(p=v.Tarifas)||void 0===p?void 0:p.Lingotes[12].Productos[0].Precio)/1e3).toLocaleString("es",{style:"currency",currency:"EUR"}),z=((null==I?void 0:null===(x=I.result)||void 0===x?void 0:null===(m=x.Tarifas)||void 0===m?void 0:m.Lingotes[13].Productos[0].Precio)/1e3).toLocaleString("es",{style:"currency",currency:"EUR"}),G=((null==I?void 0:null===(_=I.result)||void 0===_?void 0:null===(h=_.Tarifas)||void 0===h?void 0:h.Lingotes[14].Productos[0].Precio)/1e3).toLocaleString("es",{style:"currency",currency:"EUR"}),K=((null==I?void 0:null===(b=I.result)||void 0===b?void 0:null===(g=b.Tarifas)||void 0===g?void 0:g.Lingotes[15].Productos[0].Precio)/1e3).toLocaleString("es",{style:"currency",currency:"EUR"}),V=((null==I?void 0:null===(f=I.result)||void 0===f?void 0:null===(N=f.Tarifas)||void 0===N?void 0:N.Lingotes[0].Productos[0].Precio)/1e3).toLocaleString("es",{style:"currency",currency:"EUR"}),X=((null==I?void 0:null===(P=I.result)||void 0===P?void 0:null===(L=P.Tarifas)||void 0===L?void 0:L.Lingotes[16].Productos[0].Precio)/1e3).toLocaleString("es",{style:"currency",currency:"EUR"}),H=[{id:1,nombreLingote:"Lingote de 2.5gr",precioLingote:M,medidaBlister:"17,82 x 10,82 x 1,349mm",telefono:null==O?void 0:null===(S=O.acf)||void 0===S?void 0:S.telefono},{id:2,nombreLingote:"Lingote de 5gr",precioLingote:R,medidaBlister:"14,95 x 7,95 x 0,437mm",telefono:null==O?void 0:null===(B=O.acf)||void 0===B?void 0:B.telefono},{id:3,nombreLingote:"Lingote de 10gr",precioLingote:W,medidaBlister:"27,82 x 13,82 x 1,358mm",telefono:null==O?void 0:null===(y=O.acf)||void 0===y?void 0:y.telefono},{id:4,nombreLingote:"Lingote de 20gr",precioLingote:Z,medidaBlister:"31,82 x 15,82 x 2,070mm",telefono:null==O?void 0:null===(T=O.acf)||void 0===T?void 0:T.telefono},{id:5,nombreLingote:"Lingote de 1oz",precioLingote:w,medidaBlister:"31,82 x 15,82 x 3,219mm",telefono:null==O?void 0:null===(k=O.acf)||void 0===k?void 0:k.telefono},{id:6,nombreLingote:"Lingote de 50gr",precioLingote:z,medidaBlister:"41,82 x 23,82 x 2,610pxmm",telefono:null==O?void 0:null===(A=O.acf)||void 0===A?void 0:A.telefono},{id:7,nombreLingote:"Lingote de 100gr",precioLingote:G,medidaBlister:"41,82 x 23,82 x 5,220mm",telefono:null==O?void 0:null===(F=O.acf)||void 0===F?void 0:F.telefono},{id:8,nombreLingote:"Lingote de 250gr",precioLingote:K,medidaBlister:"sin blister",telefono:null==O?void 0:null===(D=O.acf)||void 0===D?void 0:D.telefono},{id:9,nombreLingote:"Lingote de 500gr",precioLingote:V,medidaBlister:"sin blister",telefono:null==O?void 0:null===(q=O.acf)||void 0===q?void 0:q.telefono},{id:10,nombreLingote:"Lingote de 1000gr",precioLingote:X,medidaBlister:"sin blister",telefono:null==O?void 0:null===(C=O.acf)||void 0===C?void 0:C.telefono}];return(0,r.jsx)("div",{className:j().contenedorAmbosTablaLingotes,children:(0,r.jsx)("div",{className:j().contenedorTablas,children:H.map((e,o)=>(0,r.jsxs)("div",{className:j().contendorDatos,children:[(0,r.jsxs)("div",{className:j().nombrePrecio,children:[(0,r.jsx)("p",{children:e.nombreLingote}),(0,r.jsxs)("p",{children:[e.precioLingote,"€"]})]}),(0,r.jsx)("p",{className:j().oroFino,children:"Oro fino 999,9"}),(0,r.jsxs)("p",{className:j().medidaBlister,children:[(0,r.jsx)("strong",{children:"Medidas del blister:"})," ",e.medidaBlister]}),(0,r.jsx)("span",{className:j().separador})]},o))})})};var g=n(42254),f=n.n(g);function N(e){var o,n,c,i,a,l,d,t,u;let{ciudad:v}=e,p=null==v?void 0:null===(o=v.acf)||void 0===o?void 0:o.ciudad_oro,[x,m]=(0,s.useState)([]);(0,s.useEffect)(()=>{fetch("https://panel.quickgold.es/archivos-cache/Fixing".concat(p,".txt"),{cache:"no-cache"}).then(e=>e.json()).then(e=>{m(e)})},[]);let _=(null==x?void 0:null===(n=x.result)||void 0===n?void 0:null===(c=n.Tarifas)||void 0===c?void 0:c.Oro[2].Productos[0].Precio)/1e3,h=null==v?void 0:null===(i=v.acf)||void 0===i?void 0:i.para_mas_de_oro,j=null==v?void 0:null===(a=v.acf)||void 0===a?void 0:a.precio_mas_de_oro,b=(_+parseFloat(j)).toFixed(2),g=null==v?void 0:null===(l=v.acf)||void 0===l?void 0:l.primer_mes,N=null==v?void 0:null===(d=v.acf)||void 0===d?void 0:d.tasacion,P=null==v?void 0:null===(t=v.acf)||void 0===t?void 0:t.interes_standard,L=v.acf.coste_de_tasacion,S=null==v?void 0:null===(u=v.acf)||void 0===u?void 0:u.telefono,[B,y]=(0,s.useState)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:f().contenedorBotones,children:[(0,r.jsx)("button",{onClick:()=>{y(!1)},className:B?"".concat(f().botonUno):"".concat(f().botonUno," ").concat(f().botonActivo),children:"INFO"}),(0,r.jsx)("button",{onClick:()=>{y(!0)},className:B?"".concat(f().botonUno," ").concat(f().botonActivo):"".concat(f().botonUno," "),children:"EJEMPLO"})]}),(0,r.jsx)("div",{className:f().contenedor,children:B?(0,r.jsx)("div",{className:f().contenidoEjemplo,children:(0,r.jsxs)("div",{className:f().contenedorInfo,children:[(0,r.jsx)("h5",{children:"PONGAMOS UN EJEMPLO"}),(0,r.jsxs)("p",{className:f().segundoParrafo,children:["Para un empe\xf1o con inter\xe9s al",(0,r.jsxs)("span",{children:[P,"% mensual y ",g,"% de inter\xe9s primer mes:"]})," "]}),(0,r.jsxs)("div",{className:f().ejemplo,children:[(0,r.jsxs)("p",{className:f().primerParrafo,children:["Con un valor de tus joyas de ",100,"€, recibes ",100-L,"€."]}),(0,r.jsxs)("p",{className:f().tercerParrafo,children:["Conlleva un peque\xf1o gasto de gesti\xf3n del ",L,"%"]})]}),(0,r.jsx)("p",{className:f().cuartoParrafo,children:"Para recuperar las piezas empe\xf1adas pasado el primer mes y finalizar el contrato deber\xedas abonar 100€."})]})}):(0,r.jsx)("div",{className:f().contenidoInfo,children:(0,r.jsx)("div",{className:f().contenedorAmbosBloquesEmpeno,children:(0,r.jsxs)("div",{className:f().contenedorBloqueEmpeno,children:[(0,r.jsxs)("h3",{children:[g,"% inter\xe9s ",(0,r.jsx)("span",{children:"primer mes"})]}),(0,r.jsxs)("p",{className:f().preciosDelOro,children:["Precio del oro: ",b," €/g 18k m\xe1s de ",h,"g."]}),(0,r.jsxs)("div",{className:f().contenedorTresBloques,children:[(0,r.jsxs)("div",{className:f().contenedorBloques,children:[(0,r.jsx)("div",{className:f().bloqueIzq,children:(0,r.jsxs)("p",{children:[P,"%"]})}),(0,r.jsx)("div",{className:f().bloqueDer,children:(0,r.jsx)("p",{children:"Inter\xe9s mensual"})})]}),(0,r.jsxs)("div",{className:f().contenedorBloques,children:[(0,r.jsx)("div",{className:f().bloqueIzq,children:(0,r.jsxs)("p",{children:[N,"%"]})}),(0,r.jsx)("div",{className:f().bloqueDer,children:(0,r.jsx)("p",{children:"Tasaci\xf3n"})})]}),(0,r.jsxs)("div",{className:f().contenedorBloques,children:[(0,r.jsx)("div",{className:f().bloqueIzq,children:(0,r.jsxs)("p",{children:[g,"%"]})}),(0,r.jsx)("div",{className:f().bloqueDer,children:(0,r.jsx)("p",{children:"Primer mes"})})]})]})]})})})}),(0,r.jsx)("div",{className:f().contenedorBotonLlamar,children:(0,r.jsx)("a",{className:f().botonLlamarTienda,href:"tel:".concat(S),children:"LLAMAR A LA TIENDA"})})]})}let P=(0,c.ZP)(e=>(0,r.jsx)(i.Z,{disableGutters:!0,elevation:0,square:!0,...e}))(e=>{let{theme:o}=e;return{border:"1px solid ".concat(o.palette.divider),"&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"}}}),L=(0,c.ZP)(e=>(0,r.jsx)(a.Z,{expandIcon:(0,r.jsx)(d.Z,{sx:{fontSize:"2.5rem",color:"#fff",background:"#061B2D",borderRadius:"50%"}}),...e}))(e=>{let{theme:o}=e;return{"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded svg":{transform:"rotate(360deg)",background:"#0692D0"},"& .MuiAccordionSummary-content":{marginLeft:o.spacing(1)}}}),S=(0,c.ZP)(l.Z)(e=>{let{theme:o}=e;return{padding:o.spacing(2)}});function B(e){var o,n,c;let{ciudad:i}=e,[a,l]=s.useState("panel3"),d=e=>(o,n)=>{l(!!n&&e)};return(0,r.jsxs)("article",{className:u().contenedorAccordion,children:[(0,r.jsx)("section",{children:(0,r.jsxs)(P,{style:{background:"#0F2D45",borderRadius:"8px",border:"none",padding:"10px 20px 0 20px"},className:u().contendorAccordion3,expanded:"panel3"===a,onChange:d("panel3"),children:[(0,r.jsx)(L,{style:{padding:"0",borderBottom:"2px solid #fff"},"aria-controls":"panel3d-content",id:"panel3d-header",children:(0,r.jsxs)("div",{className:u().contenedorTituloServicio,children:[(0,r.jsx)("h1",{className:"panel3"===a?"".concat(u().tituloServicio," ").concat(u().accordionActivo):"".concat(u().tituloServicio),children:"Cambio de divisas"}),(0,r.jsxs)("h2",{className:u().subTituloServicio,children:["Somos la ",(0,r.jsx)("strong",{children:"casa de cambio"})," preferida por miles de personas al a\xf1o en ",null==i?void 0:null===(o=i.acf)||void 0===o?void 0:o.ciudad_landing,"."," ",(0,r.jsx)("strong",{children:"Cambiar divisa"})," en Quickgold siempre es sin comisiones y, f\xe1cil y r\xe1pido."]})]})}),(0,r.jsx)(S,{className:u().details,children:(0,r.jsx)(m.Z,{ciudad:i})})]})}),(0,r.jsx)("section",{children:(0,r.jsxs)(P,{id:"precioOro",style:{background:"#0F2D45",borderRadius:"8px",border:"none",padding:"10px 20px 0 20px"},className:u().contendorAccordion1,expanded:"panel1"===a,onChange:d("panel1"),children:[(0,r.jsx)(L,{style:{padding:"0",borderBottom:"2px solid #fff"},"aria-controls":"panel1d-content",id:"panel1d-header",children:(0,r.jsxs)("div",{className:u().contenedorTituloServicio,children:[" ",(0,r.jsx)("h1",{className:"panel1"===a?"".concat(u().tituloServicio," ").concat(u().accordionActivo):"".concat(u().tituloServicio),children:"Precio del oro"}),(0,r.jsxs)("h2",{className:u().subTituloServicio,children:["Vender ",(0,r.jsx)("strong",{children:"oro al mejor precio"})," es f\xe1cil en nuestras tiendas ",(0,r.jsx)("strong",{children:"Compro oro"})," en"," ",null==i?void 0:null===(n=i.acf)||void 0===n?void 0:n.ciudad_landing,". M\xe1s de 15 a\xf1os en el sector siendo la empresa referente en las ciudades donde estamos."]})]})}),(0,r.jsx)(S,{className:u().details,children:(0,r.jsx)(x,{ciudad:i})})]})}),(0,r.jsx)("section",{children:(0,r.jsxs)(P,{style:{background:"#0F2D45",borderRadius:"8px",border:"none",padding:"10px 20px 0 20px"},className:u().contendorAccordion2,expanded:"panel2"===a,onChange:d("panel2"),children:[(0,r.jsx)(L,{style:{padding:"0",borderBottom:"2px solid #fff"},"aria-controls":"panel2d-content",id:"panel2d-header",children:(0,r.jsxs)("div",{className:u().contenedorTituloServicio,children:[" ",(0,r.jsx)("h1",{className:"panel2"===a?"".concat(u().tituloServicio," ").concat(u().accordionActivo):"".concat(u().tituloServicio),children:"Precio de la plata"}),(0,r.jsxs)("h2",{className:u().subTituloServicio,children:["Compramos ",(0,r.jsx)("strong",{children:"plata al mejor precio"}),": joyas, cuberter\xedas, etc. Somos los l\xedderes en la"," ",(0,r.jsx)("strong",{children:"compra de joyas"})," en"," ",null==i?void 0:null===(c=i.acf)||void 0===c?void 0:c.ciudad_landing,"."]})]})}),(0,r.jsx)(S,{className:u().details,children:(0,r.jsx)(_,{ciudad:i})})]})}),(0,r.jsx)("section",{children:(0,r.jsxs)(P,{style:{background:"#0F2D45",borderRadius:"8px",border:"none",padding:"10px 20px 0 20px"},className:u().contendorAccordion4,expanded:"panel4"===a,onChange:d("panel4"),children:[(0,r.jsx)(L,{style:{padding:"0",borderBottom:"2px solid #fff"},"aria-controls":"panel4d-content",id:"panel4d-header",children:(0,r.jsxs)("div",{className:u().contenedorTituloServicio,children:[" ",(0,r.jsx)("h1",{className:"panel4"===a?"".concat(u().tituloServicio," ").concat(u().accordionActivo):"".concat(u().tituloServicio),children:"Empe\xf1o de joyas"}),(0,r.jsxs)("h2",{className:u().subTituloServicio,children:["Nuestros ",(0,r.jsx)("strong",{children:"empe\xf1os sin inter\xe9s el primer mes"})," ","hacen que empe\xf1ar oro sea mucho m\xe1s c\xf3modo y f\xe1cil para nuestros clientes."]})]})}),(0,r.jsx)(S,{className:u().details,children:(0,r.jsx)(N,{ciudad:i})})]})}),(0,r.jsx)("section",{children:(0,r.jsxs)(P,{style:{background:"#0F2D45",borderRadius:"8px",border:"none",padding:"10px 20px 0 20px"},className:u().contendorAccordion5,expanded:"panel5"===a,onChange:d("panel5"),children:[(0,r.jsx)(L,{style:{padding:"0"},"aria-controls":"panel5d-content",id:"panel5d-header",children:(0,r.jsxs)("div",{className:u().contenedorTituloServicio,children:[" ",(0,r.jsx)("h1",{className:"panel5"===a?"".concat(u().tituloServicio," ").concat(u().accordionActivo):"".concat(u().tituloServicio),children:"Invertir en oro"}),(0,r.jsx)("h2",{className:u().subTituloServicio,children:"Venta de lingotes de oro con las mejores condiciones. El oro, como valor refugio est\xe1 claramente por encima de otro tipo de inversiones."})]})}),(0,r.jsx)(S,{style:{border:"none"},className:u().details,children:(0,r.jsx)(b,{ciudad:i})})]})})]})}},77967:function(e,o,n){"use strict";var r=n(85893);n(67294);var s=n(30740),c=n.n(s);let i=e=>{var o,n;let{general:s}=e;return(0,r.jsxs)("div",{className:c().contenedorBannerUno,children:[(0,r.jsx)("img",{className:c().bannerDesktop,src:null==s?void 0:null===(o=s.acf)||void 0===o?void 0:o.imagen_general_desktop,alt:"Banner general"}),(0,r.jsx)("img",{className:c().bannerMobil,src:null==s?void 0:null===(n=s.acf)||void 0===n?void 0:n.imagen_general_mobil,alt:"Banner general mobil"})]})};o.Z=i},62810:function(e,o,n){"use strict";var r=n(85893);n(67294);var s=n(86567),c=n.n(s);let i=e=>{var o,n;let{ciudad:s}=e;return(0,r.jsxs)("div",{className:c().contenedorBannerUno,children:[(0,r.jsx)("img",{className:c().bannerDesktop,src:null==s?void 0:null===(o=s.acf)||void 0===o?void 0:o.foto_1,alt:"Banner tienda"}),(0,r.jsx)("img",{className:c().bannerMobil,src:null==s?void 0:null===(n=s.acf)||void 0===n?void 0:n.foto_2,alt:"Banner tienda mobil"})]})};o.Z=i},43428:function(e,o,n){"use strict";var r=n(85893);n(67294);var s=n(25),c=n.n(s);let i=e=>{var o,n;let{ciudad:s}=e;return(0,r.jsx)("div",{className:c().contenedorBannerWallapop,children:(0,r.jsx)("a",{target:"_blank",href:null==s?void 0:null===(o=s.acf)||void 0===o?void 0:o.url_del_banner_wallapop,children:(0,r.jsx)("img",{loading:"lazy",className:c().bannerWallapopDesktop,src:null==s?void 0:null===(n=s.acf)||void 0===n?void 0:n.imagen_del_banner_wallapop,alt:"Banner tienda"})})})};o.Z=i},17186:function(e,o,n){"use strict";var r=n(85893);n(67294);var s=n(35966),c=n.n(s);let i=()=>(0,r.jsx)("div",{className:c().botonLlamar,children:(0,r.jsx)("a",{title:"Tel\xe9fono",href:"tel:900 373 629",children:"LLAMA GRATIS"})});o.Z=i},92911:function(e,o,n){"use strict";var r=n(85893);n(67294);var s=n(57086),c=n.n(s);let i=e=>{var o,n,s;let{ciudad:i}=e;return(0,r.jsxs)("div",{className:c().contenedorBotones,children:[(0,r.jsx)("a",{className:c().botonLlamar,href:"tel:".concat(null==i?void 0:null===(o=i.acf)||void 0===o?void 0:o.telefono),children:"LLAMAR"}),(0,r.jsx)("a",{className:c().botonWhatsapp,target:"_blank",href:"https://wa.me/+34".concat(null==i?void 0:null===(n=i.acf)||void 0===n?void 0:null===(s=n.mobile)||void 0===s?void 0:s.replace(/\s+/g,"")),children:"WHATSAPP"})]})};o.Z=i},60942:function(e,o,n){"use strict";var r=n(85893);n(67294);var s=n(14361),c=n.n(s);let i=e=>{let{raiz:o,tiendas:n,nombreCiudad:s,nombreTienda:i,ubicacionActual:a,urlNombreCiudad:l,urlNombreTienda:d,iconoRaiz:t,iconoTiendas:u,iconoUbiccionActual:v}=e;return(0,r.jsxs)("div",{className:c().sectionBreadcrumbs,children:[(0,r.jsxs)("div",{className:c().contenedorBreadcrumbs,children:[(0,r.jsx)("a",{href:"/",title:"Ir a ".concat(o),children:o}),t,(0,r.jsx)("a",{href:"/tiendas",title:"Ir a ".concat(n),children:n}),u,(0,r.jsx)("a",{href:l,title:"Ir a ".concat(s),children:s}),v,(0,r.jsx)("a",{href:d,title:"Ir a ".concat(i),children:i}),u]}),a]})};o.Z=i},20038:function(e,o,n){"use strict";var r=n(85893);n(67294);var s=n(87155),c=n.n(s);let i=e=>{var o;let{ciudad:n}=e;return(0,r.jsx)("div",{className:c().contenedorHtml,dangerouslySetInnerHTML:{__html:null==n?void 0:null===(o=n.acf)||void 0===o?void 0:o.html}})};o.Z=i},53486:function(e){e.exports={contenedorAccordion:"accordion_contenedorAccordion__wR88_",tituloServicio:"accordion_tituloServicio__vL3Bl",subTituloServicio:"accordion_subTituloServicio__dP9qv",contenedorTituloServicio:"accordion_contenedorTituloServicio__w0igv",accordionActivo:"accordion_accordionActivo__cFRWZ",details:"accordion_details__I_w_T",rayaAdorno:"accordion_rayaAdorno__XWIyl",textoMenos:"accordion_textoMenos__zJUK8"}},30740:function(e){e.exports={contenedorBannerUno:"bannerPromoDos_contenedorBannerUno__xsmnM",bannerDesktop:"bannerPromoDos_bannerDesktop__4ie_G",bannerMobil:"bannerPromoDos_bannerMobil__potrp"}},86567:function(e){e.exports={contenedorBannerUno:"bannerPromoUno_contenedorBannerUno__DQlbR",bannerDesktop:"bannerPromoUno_bannerDesktop__Bxbu8",bannerMobil:"bannerPromoUno_bannerMobil__t7iWc"}},25:function(e){e.exports={contenedorBannerWallapop:"bannerWallapop_contenedorBannerWallapop__leBAV",bannerWallapopDesktop:"bannerWallapop_bannerWallapopDesktop__RTGQa"}},42254:function(e){e.exports={contenedorConversor:"conversor_contenedorConversor__sudjN",contenedor:"conversor_contenedor__Kc3Ij",conversorTitulo:"conversor_conversorTitulo__DnYoj",conversorTexto:"conversor_conversorTexto__1feXN",botonLlamarTienda:"conversor_botonLlamarTienda__WFlVd",contenedorAmbosBloquesEmpeno:"conversor_contenedorAmbosBloquesEmpeno__2Ff6v",contenedorBloqueEmpeno:"conversor_contenedorBloqueEmpeno__AP524",contenedorTresBloques:"conversor_contenedorTresBloques__eWaCW",contenedorBloques:"conversor_contenedorBloques__1UTkI",bloqueIzq:"conversor_bloqueIzq__POe9G",bloqueDer:"conversor_bloqueDer__gSYRU",contenedorImagen:"conversor_contenedorImagen__gU352",contenedorPrecioOro:"conversor_contenedorPrecioOro__BkR0S",contenedorPrecioPlata:"conversor_contenedorPrecioPlata__8zqJ5",contenedorBloqueMasDe:"conversor_contenedorBloqueMasDe__XXUuG",contenedorPrecios:"conversor_contenedorPrecios__GcsBO",precios:"conversor_precios__Urqy5",contenedorInfo:"conversor_contenedorInfo__iAA9p",primerParrafo:"conversor_primerParrafo__8LxhE",segundoParrafo:"conversor_segundoParrafo__yXemb",ejemplo:"conversor_ejemplo__oAhNj",tercerParrafo:"conversor_tercerParrafo__oyUeH",cuartoParrafo:"conversor_cuartoParrafo__jYicw",contenedorBotonLlamar:"conversor_contenedorBotonLlamar__RqtSX",preciosDelOro:"conversor_preciosDelOro__S4PPj",contenedorBotones:"conversor_contenedorBotones__uZmat",botonUno:"conversor_botonUno__Mkcgc",botonDos:"conversor_botonDos__ACxOs",botonActivo:"conversor_botonActivo__v7wGO"}},35966:function(e){e.exports={botonLlamar:"botonLamarFijo_botonLlamar__ywd7X"}},57086:function(e){e.exports={botonLlamar:"botonesLlamar_botonLlamar__c3u_8",botonWhatsapp:"botonesLlamar_botonWhatsapp__2CULg",contenedorBotones:"botonesLlamar_contenedorBotones__oTO56"}},14361:function(e){e.exports={contenedorBreadcrumbs:"breadcrumbs_contenedorBreadcrumbs__oEfH7",breadcrumbsRaiz:"breadcrumbs_breadcrumbsRaiz__v5kVj",sectionBreadcrumbs:"breadcrumbs_sectionBreadcrumbs__jsGFF"}},87155:function(e){e.exports={contenedorHtml:"html_contenedorHtml__h65BV"}},47865:function(e){e.exports={contenedorConversor:"conversor_contenedorConversor__CWQNx",conversorTitulo:"conversor_conversorTitulo__e9dzq",conversorTexto:"conversor_conversorTexto__xGwjn",botonLlamarTienda:"conversor_botonLlamarTienda__xJhg1",contenedorAmbosBloquesOro:"conversor_contenedorAmbosBloquesOro__jB1gn",contenedorBloqueSuperior:"conversor_contenedorBloqueSuperior__YnWEZ",contenedorBloqueSuperiorPlata:"conversor_contenedorBloqueSuperiorPlata__EY1JJ",botones:"conversor_botones__FX1Pe",button:"conversor_button__xtM1c",botonActivo:"conversor_botonActivo__GDVtR",contenedorPrecios:"conversor_contenedorPrecios__3a5F_",contenedorPreciosPlata:"conversor_contenedorPreciosPlata__S6k8H",contenedorprecioDestacado:"conversor_contenedorprecioDestacado__qdZZi",precioDestacado:"conversor_precioDestacado___DI6i",contenedorprecioDestacadoPlata:"conversor_contenedorprecioDestacadoPlata__fdj3a",precioDestacadoPlata:"conversor_precioDestacadoPlata__V5zOJ",masde:"conversor_masde__aYJtx",precio18k:"conversor_precio18k__tEwgL",precio999:"conversor_precio999__X6QR3",kilates:"conversor_kilates__9VvK6",contenedorOtrosPrecios:"conversor_contenedorOtrosPrecios__VTwI9",OtrosPrecios:"conversor_OtrosPrecios__wCKTc",precio:"conversor_precio__8VOV7",preciok:"conversor_preciok__pT5WY",contenedorCalculadora:"conversor_contenedorCalculadora__IchYz",contenedorSelect:"conversor_contenedorSelect__DEQ9M",Select:"conversor_Select___Zv_e",input:"conversor_input__z6wsX",tituloInferior:"conversor_tituloInferior__m_q30",precioFinal:"conversor_precioFinal__gXXE0",promocion:"conversor_promocion__O5qwK",linea:"conversor_linea__GME8W",contenedorPrecioPlata:"conversor_contenedorPrecioPlata__PgLDe"}},12093:function(e){e.exports={contenedorAmbosTablaLingotes:"Lingotes_contenedorAmbosTablaLingotes__shiHb",botonLlamar:"Lingotes_botonLlamar__GW28P",contenedorImagen:"Lingotes_contenedorImagen__Vu9yH",nombrePrecio:"Lingotes_nombrePrecio__col3a",oroFino:"Lingotes_oroFino__HDfMs",medidaBlister:"Lingotes_medidaBlister__DM_hB",separador:"Lingotes_separador__PqPwb",contenedorTablas:"Lingotes_contenedorTablas__tr4sr",contenedorConversor:"Lingotes_contenedorConversor__F5MGu",conversorTitulo:"Lingotes_conversorTitulo__uohOh",conversorTexto:"Lingotes_conversorTexto__dwENu",botonLlamarTienda:"Lingotes_botonLlamarTienda__6a7yO"}}}]);