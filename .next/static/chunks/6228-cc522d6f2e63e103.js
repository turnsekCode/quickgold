(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6228],{79206:function(o,e,i){"use strict";var n=i(85893);i(67294);var s=i(3615),d=i.n(s);let r=o=>{let{raiz:e,iconoRaiz:i,urlUbicacionActual:s,ubicacionActual:r}=o;return(0,n.jsxs)("div",{className:d().sectionBreadcrumbs,children:[(0,n.jsxs)("div",{className:d().contenedorBreadcrumbs,children:[(0,n.jsx)("a",{href:"/",title:"Ir a ".concat(e),children:e}),i]}),r]})};e.Z=r},19692:function(o,e,i){"use strict";var n=i(85893);i(67294);var s=i(50268),d=i.n(s),r=i(874),l=i(66261),a=i(25675),c=i.n(a);let t=o=>{var e,i,s,a,t;let{ciudad:u}=o;return(0,n.jsxs)("section",{className:d().contenedorSectionUno,children:[(0,n.jsxs)("div",{className:d().bloqueIzq,children:[(0,n.jsxs)("h1",{children:[null==u?void 0:null===(e=u.acf)||void 0===e?void 0:e.h1_sin_la_ciudad," ",(0,n.jsx)("span",{className:d().linea,children:null==u?void 0:null===(i=u.acf)||void 0===i?void 0:i.ciudad})]}),(0,n.jsx)("p",{children:null==u?void 0:null===(s=u.acf)||void 0===s?void 0:s.parrafo_section_uno}),(0,n.jsxs)("div",{className:d().botones,children:[(0,n.jsxs)(l.rU,{to:"contenedorMapa",smooth:!0,offset:-110,spy:!0,duration:500,title:"texto",passive:"true",children:[(0,n.jsx)(r.Z,{}),"encuentra tu tienda"]}),(0,n.jsx)("a",{href:"tel:".concat(null==u?void 0:null===(a=u.acf)||void 0===a?void 0:a.telefono),title:"Tel\xe9fono",children:"Llama gratis"})]})]}),(0,n.jsx)("div",{className:d().bloqueDer,children:(0,n.jsx)(c(),{src:"/assets/divisa.png",alt:"Casas de cambio ".concat(null==u?void 0:null===(t=u.acf)||void 0===t?void 0:t.ciudad),className:d().madridMobil,width:480,height:364,priority:!0})})]})};e.Z=t},19581:function(o,e,i){"use strict";i.d(e,{Z:function(){return h}});var n=i(85893),s=i(67294),d=i(12677),r=i.n(d),l=i(75503),a=i(85399),c=i(72014),t=i(25675),u=i.n(t);let v=o=>{var e,i,d,t,v,_,m,x,p,h,j,b,P,C,N,f,q,g,I,A,D,S,k,M,B,U,T,y,z,E,Z;let{ciudad:H,setSelectDivisa:F,selectDivisa:R}=o,w=null==H?void 0:null===(e=H.acf)||void 0===e?void 0:e.ciudad_oro,[G,L]=(0,s.useState)([]),[V,O]=(0,s.useState)(null),[K,X]=(0,s.useState)(null);(0,s.useEffect)(()=>{fetch("https://panel.quickgold.es/archivos-cache/Fixing".concat(w,".txt"),{cache:"no-cache"}).then(o=>o.json()).then(o=>{var e,i;L(null==o?void 0:null===(e=o.result)||void 0===e?void 0:null===(i=e.Tarifas)||void 0===i?void 0:i.Divisas_Compra.reverse()),X(!0)})},[]);let[Y,Q]=(0,s.useState)("0"),[J,W]=(0,s.useState)(""),[$,oo]=(0,s.useState)(""),[oe,oi]=(0,s.useState)(null),on=Y/1e3,os=o=>{W(o.target.dataset.acronimo),Q(o.target.dataset.precio)},od=()=>{F(!1)},or=o=>{W(o.target.dataset.acronimo),Q(o.target.dataset.precio),F(!1)};return(0,n.jsxs)("div",{className:r().bloqueDer,children:[(0,n.jsxs)("div",{className:r().bloqueDivHabituales,children:[(0,n.jsxs)("div",{className:r().bloqueTituloSuperior,children:[(0,n.jsxs)("h6",{children:["Conversor ",(0,n.jsx)("span",{})," de divisa"]}),(0,n.jsx)("p",{className:r().tituloDivisaHabitual,children:"Divisas m\xe1s habituales"})]}),(0,n.jsxs)("div",{className:r().divisasHabituales,children:[(0,n.jsxs)("div",{className:r().dolar,onClick:o=>{or(o),O(!1)},"data-acronimo":null===(i=G[1])||void 0===i?void 0:i.Productos[0].Acronimo,"data-precio":null===(d=G[1])||void 0===d?void 0:d.Productos[0].Precio,children:[(0,n.jsxs)("div",{className:r().imgMoneda,onClick:o=>{or(o),O(!1)},"data-acronimo":null===(t=G[1])||void 0===t?void 0:t.Productos[0].Acronimo,"data-precio":null===(v=G[1])||void 0===v?void 0:v.Productos[0].Precio,children:[(0,n.jsx)(u(),{src:"/assets/banderaUSA.png",onClick:o=>{or(o),O(!1)},"data-acronimo":null===(_=G[1])||void 0===_?void 0:_.Productos[0].Acronimo,"data-precio":null===(m=G[1])||void 0===m?void 0:m.Productos[0].Precio,width:40,height:30,alt:"Bandera USA"}),(0,n.jsx)("span",{onClick:o=>{or(o),O(!1)},"data-acronimo":null===(x=G[1])||void 0===x?void 0:x.Productos[0].Acronimo,"data-precio":null===(p=G[1])||void 0===p?void 0:p.Productos[0].Precio,children:"USD"})]}),(0,n.jsxs)("div",{className:r().nombreMoneda,children:[(0,n.jsx)("p",{onClick:o=>{or(o),O(!1)},"data-acronimo":null===(h=G[1])||void 0===h?void 0:h.Productos[0].Acronimo,"data-precio":null===(j=G[1])||void 0===j?void 0:j.Productos[0].Precio,children:"D\xf3lar USA"}),(0,n.jsx)("p",{onClick:o=>{or(o),O(!1)},"data-acronimo":null===(b=G[1])||void 0===b?void 0:b.Productos[0].Acronimo,"data-precio":null===(P=G[1])||void 0===P?void 0:P.Productos[0].Precio,children:(0,n.jsxs)("span",{onClick:o=>{or(o),O(!1)},"data-acronimo":null===(C=G[1])||void 0===C?void 0:C.Productos[0].Acronimo,"data-precio":null===(N=G[1])||void 0===N?void 0:N.Productos[0].Precio,children:[K?(G[1].Productos[0].Precio/1e3).toFixed(4):"Cargando..."," ","€"]})})]})]}),(0,n.jsxs)("div",{className:r().libra,onClick:o=>{or(o),O(!1)},"data-acronimo":null===(f=G[0])||void 0===f?void 0:f.Productos[0].Acronimo,"data-precio":null===(q=G[0])||void 0===q?void 0:q.Productos[0].Precio,children:[(0,n.jsxs)("div",{className:r().imgMoneda,onClick:o=>{or(o),O(!1)},"data-acronimo":null===(g=G[0])||void 0===g?void 0:g.Productos[0].Acronimo,"data-precio":null===(I=G[0])||void 0===I?void 0:I.Productos[0].Precio,children:[(0,n.jsx)(u(),{src:"/assets/banderaGBP.png",onClick:o=>{or(o),O(!1)},"data-acronimo":null===(A=G[0])||void 0===A?void 0:A.Productos[0].Acronimo,"data-precio":null===(D=G[0])||void 0===D?void 0:D.Productos[0].Precio,width:40,height:30,alt:"Bandera GBP"}),(0,n.jsx)("span",{onClick:o=>{or(o),O(!1)},"data-acronimo":null===(S=G[0])||void 0===S?void 0:S.Productos[0].Acronimo,"data-precio":null===(k=G[0])||void 0===k?void 0:k.Productos[0].Precio,children:"GBP"})]}),(0,n.jsxs)("div",{className:r().nombreMoneda,children:[(0,n.jsx)("p",{onClick:o=>{or(o),O(!1)},"data-acronimo":null===(M=G[0])||void 0===M?void 0:M.Productos[0].Acronimo,"data-precio":null===(B=G[0])||void 0===B?void 0:B.Productos[0].Precio,children:"Libra Esterlina"}),(0,n.jsx)("p",{onClick:o=>{or(o),O(!1)},"data-acronimo":null===(U=G[0])||void 0===U?void 0:U.Productos[0].Acronimo,"data-precio":null===(T=G[0])||void 0===T?void 0:T.Productos[0].Precio,children:(0,n.jsxs)("span",{onClick:o=>{or(o),O(!1)},"data-acronimo":null===(y=G[0])||void 0===y?void 0:y.Productos[0].Acronimo,"data-precio":null===(z=G[0])||void 0===z?void 0:z.Productos[0].Precio,children:[K?(G[0].Productos[0].Precio/1e3).toFixed(4):"Cargando..."," ","€"]})})]})]})]})]}),(0,n.jsxs)("div",{className:r().contenedorInputSuperior,children:[(0,n.jsx)("div",{className:r().bloqueIzqInput,children:(0,n.jsxs)("div",{className:r().select,onClick:()=>{O(!V)},children:[R?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Seleccione Divisa"}),(0,n.jsx)(l.Z,{})]}):(0,n.jsxs)(n.Fragment,{children:[J," ",(0,n.jsx)(l.Z,{})]}),(0,n.jsx)("div",{className:V?"".concat(r().select_monedas," ").concat(r().select_activo):"".concat(r().select_monedas),children:G.filter(o=>"HRK"!==o.Name&&"DKK"!==o.Name&&"RUB"!==o.Name&&"NOK"!==o.Name&&"SEK"!==o.Name).map((o,e)=>V?(0,n.jsxs)("div",{className:r().contenedor_list,"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{os(o),od()},children:[(0,n.jsx)("div",{className:r().bandera,children:(0,n.jsx)(u(),{width:35,height:23,src:"/assets/img/".concat(null==o?void 0:o.Productos[0].Acronimo,".png"),"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,alt:null==o?void 0:o.Productos[0].Acronimo})}),(0,n.jsxs)("div",{className:r().moneda,children:[(0,n.jsx)("p",{"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,children:null==o?void 0:o.Productos[0].Acronimo}),(0,n.jsx)("span",{className:r().nombre,"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,children:null==o?void 0:o.Productos[0].Nombre})]})]},e):"")})]})}),(0,n.jsxs)("div",{className:r().bloqueDerInput,children:[R?(0,n.jsx)(a.Z,{}):(0,n.jsxs)("div",{className:r().contenedorInput,children:[oe?(0,n.jsx)("input",{style:{border:"none"},type:"text",pattern:"[0-9]*",placeholder:"0.00",inputMode:"numeric",readOnly:!0,value:($/on).toFixed(2)}):(0,n.jsx)("input",{type:"text",pattern:"[0-9]*",placeholder:"0.00",inputMode:"numeric",className:r().inputInferior,onChange:o=>oo(o.target.value)}),(0,n.jsx)("span",{children:J})]}),R?(0,n.jsx)("p",{}):(0,n.jsxs)("p",{children:["1",J," = ",on.toFixed(4),"EUR"]})]})]}),(0,n.jsx)("div",{className:r().botonSwith,children:(0,n.jsx)(c.Z,{onClick:o=>{oi(!oe)}})}),(0,n.jsxs)("div",{className:r().contenedorInputInferior,children:[R?(0,n.jsx)(a.Z,{}):(0,n.jsx)("div",{className:r().monedaInferior,children:"EUR"}),(0,n.jsxs)("div",{className:r().bloqueDerInput,children:[R?(0,n.jsx)(a.Z,{}):(0,n.jsxs)("div",{className:r().contenedorInput,children:[oe?(0,n.jsx)("input",{type:"text",pattern:"[0-9]*",placeholder:"Cantidad",inputMode:"numeric",className:r().inputInferior,onChange:o=>oo(o.target.value)}):(0,n.jsx)("input",{type:"text",pattern:"[0-9]*",placeholder:"Cantidad",inputMode:"numeric",value:($*on).toFixed(2),readOnly:!0,style:{border:"none"}}),(0,n.jsx)("span",{children:"EUR"})]}),R?(0,n.jsx)("p",{}):(0,n.jsxs)("p",{children:["1EUR = ",(1/on).toFixed(4),J]})]})]}),(0,n.jsxs)("a",{className:r().botonLlamarTienda,href:"tel:".concat(null==H?void 0:null===(E=H.acf)||void 0===E?void 0:E.telefono),children:["LLAMA GRATIS AL ",null==H?void 0:null===(Z=H.acf)||void 0===Z?void 0:Z.telefono]})]})};var _=i(60704),m=i.n(_);let x=o=>{var e,i,d,t,v,_,m,x,p,h,j,b,P,C,N,f,q,g,I,A,D,S,k,M,B,U,T,y,z,E,Z,H,F;let{ciudad:R,setSelectDivisa:w,selectDivisa:G}=o,L=null==R?void 0:null===(e=R.acf)||void 0===e?void 0:e.ciudad_oro,[V,O]=(0,s.useState)([]),[K,X]=(0,s.useState)(null);(0,s.useEffect)(()=>{fetch("https://panel.quickgold.es/archivos-cache/Fixing".concat(L,".txt"),{cache:"no-cache"}).then(o=>o.json()).then(o=>{var e,i;O(null==o?void 0:null===(e=o.result)||void 0===e?void 0:null===(i=e.Tarifas)||void 0===i?void 0:i.Divisas_Venta.reverse()),X(!0)})},[]);let[Y,Q]=(0,s.useState)(null),[J,W]=(0,s.useState)(null),[$,oo]=(0,s.useState)("0"),[oe,oi]=(0,s.useState)((0,n.jsx)(a.Z,{})),[on,os]=(0,s.useState)(""),od=$/1e3,or=o=>{oi(o.target.dataset.acronimo),oo(o.target.dataset.precio)},ol=()=>{w(!1)},oa=o=>{oi(o.target.dataset.acronimo),oo(o.target.dataset.precio),w(!1)};return(0,n.jsxs)("div",{className:r().bloqueDer,children:[(0,n.jsxs)("div",{className:r().bloqueDivHabituales,children:[(0,n.jsxs)("div",{className:r().bloqueTituloSuperior,children:[(0,n.jsxs)("h6",{children:["Conversor ",(0,n.jsx)("span",{})," de divisa"]}),(0,n.jsx)("p",{className:r().tituloDivisaHabitual,children:"Divisas m\xe1s habituales"})]}),(0,n.jsxs)("div",{className:r().divisasHabituales,children:[(0,n.jsxs)("div",{className:r().dolar,onClick:o=>{oa(o),W(!1)},"data-acronimo":null===(i=V[1])||void 0===i?void 0:i.Productos[0].Acronimo,"data-precio":null===(d=V[1])||void 0===d?void 0:d.Productos[0].Precio,children:[(0,n.jsxs)("div",{className:r().imgMoneda,onClick:o=>{oa(o),W(!1)},"data-acronimo":null===(t=V[1])||void 0===t?void 0:t.Productos[0].Acronimo,"data-precio":null===(v=V[1])||void 0===v?void 0:v.Productos[0].Precio,children:[(0,n.jsx)(u(),{src:"/assets/banderaUSA.png",onClick:o=>{oa(o),W(!1)},"data-acronimo":null===(_=V[1])||void 0===_?void 0:_.Productos[0].Acronimo,"data-precio":null===(m=V[1])||void 0===m?void 0:m.Productos[0].Precio,width:40,height:30,alt:"Bandera USA"}),(0,n.jsx)("span",{onClick:o=>{oa(o),W(!1)},"data-acronimo":null===(x=V[1])||void 0===x?void 0:x.Productos[0].Acronimo,"data-precio":null===(p=V[1])||void 0===p?void 0:p.Productos[0].Precio,children:"USD"})]}),(0,n.jsxs)("div",{className:r().nombreMoneda,children:[(0,n.jsx)("p",{onClick:o=>{oa(o),W(!1)},"data-acronimo":null===(h=V[1])||void 0===h?void 0:h.Productos[0].Acronimo,"data-precio":null===(j=V[1])||void 0===j?void 0:j.Productos[0].Precio,children:"D\xf3lar USA"}),(0,n.jsx)("p",{onClick:o=>{oa(o),W(!1)},"data-acronimo":null===(b=V[1])||void 0===b?void 0:b.Productos[0].Acronimo,"data-precio":null===(P=V[1])||void 0===P?void 0:P.Productos[0].Precio,children:(0,n.jsxs)("span",{onClick:o=>{oa(o),W(!1)},"data-acronimo":null===(C=V[1])||void 0===C?void 0:C.Productos[0].Acronimo,"data-precio":null===(N=V[1])||void 0===N?void 0:N.Productos[0].Precio,children:[K?((null===(f=V[1])||void 0===f?void 0:f.Productos[0].Precio)/1e3).toFixed(4):"Cargando..."," ","€"]})})]})]}),(0,n.jsxs)("div",{className:r().libra,onClick:o=>{oa(o),W(!1)},"data-acronimo":null===(q=V[0])||void 0===q?void 0:q.Productos[0].Acronimo,"data-precio":null===(g=V[0])||void 0===g?void 0:g.Productos[0].Precio,children:[(0,n.jsxs)("div",{className:r().imgMoneda,onClick:o=>{oa(o),W(!1)},"data-acronimo":null===(I=V[0])||void 0===I?void 0:I.Productos[0].Acronimo,"data-precio":null===(A=V[0])||void 0===A?void 0:A.Productos[0].Precio,children:[(0,n.jsx)(u(),{src:"/assets/banderaGBP.png",onClick:o=>{oa(o),W(!1)},"data-acronimo":null===(D=V[0])||void 0===D?void 0:D.Productos[0].Acronimo,"data-precio":null===(S=V[0])||void 0===S?void 0:S.Productos[0].Precio,width:40,height:30,alt:"Bandera GBP"}),(0,n.jsx)("span",{onClick:o=>{oa(o),W(!1)},"data-acronimo":null===(k=V[0])||void 0===k?void 0:k.Productos[0].Acronimo,"data-precio":null===(M=V[0])||void 0===M?void 0:M.Productos[0].Precio,children:"GBP"})]}),(0,n.jsxs)("div",{className:r().nombreMoneda,children:[(0,n.jsx)("p",{onClick:o=>{oa(o),W(!1)},"data-acronimo":null===(B=V[0])||void 0===B?void 0:B.Productos[0].Acronimo,"data-precio":null===(U=V[0])||void 0===U?void 0:U.Productos[0].Precio,children:"Libra Esterlina"}),(0,n.jsx)("p",{onClick:o=>{oa(o),W(!1)},"data-acronimo":null===(T=V[0])||void 0===T?void 0:T.Productos[0].Acronimo,"data-precio":null===(y=V[0])||void 0===y?void 0:y.Productos[0].Precio,children:(0,n.jsxs)("span",{onClick:o=>{oa(o),W(!1)},"data-acronimo":null===(z=V[0])||void 0===z?void 0:z.Productos[0].Acronimo,"data-precio":null===(E=V[0])||void 0===E?void 0:E.Productos[0].Precio,children:[K?((null===(Z=V[0])||void 0===Z?void 0:Z.Productos[0].Precio)/1e3).toFixed(4):"Cargando..."," ","€"]})})]})]})]})]}),(0,n.jsxs)("div",{className:r().contenedorInputSuperior,children:[(0,n.jsx)("div",{className:r().bloqueIzqInput,children:(0,n.jsxs)("div",{className:r().select,onClick:()=>{W(!J)},children:[G?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Seleccione Divisa"}),(0,n.jsx)(l.Z,{})]}):(0,n.jsxs)(n.Fragment,{children:[oe," ",(0,n.jsx)(l.Z,{})]}),(0,n.jsx)("div",{className:J?"".concat(r().select_monedas," ").concat(r().select_activo):"".concat(r().select_monedas),children:null==V?void 0:V.filter(o=>"HRK"!==o.Name).map((o,e)=>J?(0,n.jsxs)("div",{className:r().contenedor_list,"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{or(o),ol()},children:[(0,n.jsx)("div",{className:r().bandera,children:(0,n.jsx)(u(),{width:35,height:23,src:"/assets/img/".concat(null==o?void 0:o.Productos[0].Acronimo,".png"),"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,alt:null==o?void 0:o.Productos[0].Acronimo})}),(0,n.jsxs)("div",{className:r().moneda,children:[(0,n.jsx)("p",{"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,children:null==o?void 0:o.Productos[0].Acronimo}),(0,n.jsx)("span",{className:r().nombre,"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,children:null==o?void 0:o.Productos[0].Nombre})]})]},e):"")})]})}),(0,n.jsxs)("div",{className:r().bloqueDerInput,children:[G?(0,n.jsx)(a.Z,{}):(0,n.jsxs)("div",{className:r().contenedorInput,children:[Y?(0,n.jsx)("input",{style:{border:"none"},type:"text",pattern:"[0-9]*",placeholder:"0.00",inputMode:"numeric",readOnly:!0,value:(on*od).toFixed(2)}):(0,n.jsx)("input",{type:"text",pattern:"[0-9]*",placeholder:"0.00",inputMode:"numeric",className:r().inputInferior,onChange:o=>os(o.target.value)}),(0,n.jsx)("span",{children:"EUR"})]}),G?(0,n.jsx)("p",{}):(0,n.jsxs)("p",{children:["1EUR = ",(1/od).toFixed(4),oe]})]})]}),(0,n.jsx)("div",{className:r().botonSwith,children:(0,n.jsx)(c.Z,{onClick:o=>{Q(!Y)}})}),(0,n.jsxs)("div",{className:r().contenedorInputInferior,children:[G?(0,n.jsx)(a.Z,{}):(0,n.jsx)("div",{className:r().monedaInferior,children:oe}),(0,n.jsxs)("div",{className:r().bloqueDerInput,children:[G?(0,n.jsx)(a.Z,{}):(0,n.jsxs)("div",{className:r().contenedorInput,children:[Y?(0,n.jsx)("input",{type:"text",pattern:"[0-9]*",placeholder:"Cantidad",inputMode:"numeric",className:r().inputInferior,onChange:o=>os(o.target.value)}):(0,n.jsx)("input",{type:"text",pattern:"[0-9]*",placeholder:"Cantidad",inputMode:"numeric",value:(on/od).toFixed(2),readOnly:!0,style:{border:"none"}}),(0,n.jsx)("span",{children:oe})]}),G?(0,n.jsx)("p",{}):(0,n.jsxs)("p",{children:["1",oe," = ",od.toFixed(4),"EUR"]})]})]}),(0,n.jsxs)("a",{className:r().botonLlamarTienda,href:"tel:".concat(null==R?void 0:null===(H=R.acf)||void 0===H?void 0:H.telefono),children:["LLAMA GRATIS AL ",null==R?void 0:null===(F=R.acf)||void 0===F?void 0:F.telefono]})]})},p=o=>{var e,i,d;let{ciudad:r,comprar:l}=o,[a,c]=(0,s.useState)(null),[t,_]=(0,s.useState)(!0),p=null==r?void 0:null===(e=r.acf)||void 0===e?void 0:e.ciudad_minuscula;return(0,n.jsxs)("div",{style:{backgroundImage:"url(/assets/degradado".concat(p,".png)")},className:m().contenedorSectionDos,children:[(0,n.jsxs)("div",{className:m().bloqueIzq,children:[(0,n.jsx)("figure",{children:(0,n.jsx)(u(),{src:"/assets/imagen_calc.png",alt:"Logo Divisa",width:80,height:80,priority:!0})}),(0,n.jsxs)("div",{className:m().contenedorInfo,children:[(0,n.jsxs)("h2",{children:["Cambio de Divisas ",null==r?void 0:null===(i=r.acf)||void 0===i?void 0:i.ciudad]}),(0,n.jsxs)("p",{children:["Conoce el tipo de cambio en nuestras",(0,n.jsx)("br",{})," casas de cambio de moneda en ",null==r?void 0:null===(d=r.acf)||void 0===d?void 0:d.ciudad,"."]})]}),(0,n.jsx)("div",{className:m().contenedorBotones,children:l?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)("button",{onClick:()=>{c(!1),_(!0)},className:a?"".concat(m().botonComprar):"".concat(m().botonComprar," ").concat(m().botonActivo),children:"QUIERO EUROS"}),(0,n.jsx)("button",{className:a?"".concat(m().botonVender," ").concat(m().botonActivo):" ".concat(m().botonVender),onClick:()=>{c(!0),_(!0)},children:"TENGO EUROS"})]}):null})]}),a?(0,n.jsx)(x,{ciudad:r,setSelectDivisa:_,selectDivisa:t}):(0,n.jsx)(v,{ciudad:r,setSelectDivisa:_,selectDivisa:t})]})};var h=p},15991:function(o,e,i){"use strict";var n=i(85893);i(67294);var s=i(64907),d=i.n(s);let r=o=>{var e,i,s,r,l,a,c,t,u,v,_,m,x,p,h,j,b,P,C,N,f,q;let{ciudad:g}=o;return(0,n.jsxs)("section",{className:d().contenedorSectionTres,children:[(0,n.jsxs)("div",{className:d().contenedorContenidoUno,children:[(0,n.jsxs)("div",{className:d().bloqueIzq,children:[(0,n.jsxs)("h2",{children:[null==g?void 0:null===(e=g.acf)||void 0===e?void 0:null===(i=e.texto_section_tres)||void 0===i?void 0:i.titulo_del_bloque_izq,(0,n.jsxs)("span",{className:d().linea,children:[" ",null==g?void 0:null===(s=g.acf)||void 0===s?void 0:s.ciudad,"?"]})]}),(0,n.jsxs)("p",{children:[(0,n.jsxs)("span",{children:[null==g?void 0:null===(r=g.acf)||void 0===r?void 0:null===(l=r.texto_section_tres)||void 0===l?void 0:l.texto_bloque_izq," "]}),null==g?void 0:null===(a=g.acf)||void 0===a?void 0:null===(c=a.texto_section_tres)||void 0===c?void 0:c.texto_bloque_izq_negrita]})]}),(0,n.jsxs)("div",{className:d().bloqueDer,children:[(0,n.jsx)("h2",{children:null==g?void 0:null===(t=g.acf)||void 0===t?void 0:null===(u=t.texto_section_tres)||void 0===u?void 0:u.titulo_bloque_der}),(0,n.jsx)("p",{children:null==g?void 0:null===(v=g.acf)||void 0===v?void 0:null===(_=v.texto_section_tres)||void 0===_?void 0:_.texto_bloque_der})]})]}),(0,n.jsxs)("h1",{children:[null==g?void 0:null===(m=g.acf)||void 0===m?void 0:null===(x=m.textos_section_cuatro)||void 0===x?void 0:x.titulo_bloque_cuatro_parte_uno,(0,n.jsx)("span",{className:d().linea,children:null==g?void 0:null===(p=g.acf)||void 0===p?void 0:p.ciudad})," ",null==g?void 0:null===(h=g.acf)||void 0===h?void 0:null===(j=h.textos_section_cuatro)||void 0===j?void 0:j.titulo_bloque_cuatro_parte_dos]}),(0,n.jsxs)("div",{className:d().contenedorInfoTres,children:[(0,n.jsxs)("div",{className:d().cards,children:[(0,n.jsx)("p",{children:"#1"}),(0,n.jsx)("p",{children:null==g?void 0:null===(b=g.acf)||void 0===b?void 0:null===(P=b.textos_section_cuatro)||void 0===P?void 0:P.texto_cuadro_uno})]}),(0,n.jsxs)("div",{className:d().cards,children:[(0,n.jsx)("p",{children:"#2"}),(0,n.jsx)("p",{children:null==g?void 0:null===(C=g.acf)||void 0===C?void 0:null===(N=C.textos_section_cuatro)||void 0===N?void 0:N.texto_cuadro_dos})]}),(0,n.jsxs)("div",{className:d().cards,children:[(0,n.jsx)("p",{children:"#3"}),(0,n.jsx)("p",{children:null==g?void 0:null===(f=g.acf)||void 0===f?void 0:null===(q=f.textos_section_cuatro)||void 0===q?void 0:q.texto_cuadro_tres})]})]})]})};e.Z=r},47867:function(o,e,i){"use strict";var n=i(85893);i(67294);var s=i(30341),d=i.n(s),r=i(25675),l=i.n(r);let a=o=>{var e,i,s,r,a,c,t;let{ciudad:u}=o;return(0,n.jsxs)("section",{className:d().contenedorSectionCuatro,children:[(0,n.jsxs)("div",{className:d().bloqueIzq,children:[(0,n.jsxs)("h2",{children:[null==u?void 0:null===(e=u.acf)||void 0===e?void 0:null===(i=e.texto_section_con_imagen)||void 0===i?void 0:i.titulo_bloqueizq," ","",(0,n.jsx)("span",{className:d().linea,children:null==u?void 0:null===(s=u.acf)||void 0===s?void 0:s.ciudad})]}),(0,n.jsx)("p",{children:null==u?void 0:null===(r=u.acf)||void 0===r?void 0:null===(a=r.texto_section_con_imagen)||void 0===a?void 0:a.texto_bloque_izq})]}),(0,n.jsx)("div",{className:d().bloqueDer,children:(0,n.jsx)(l(),{src:"/assets/casa-cambio-".concat(null==u?void 0:null===(c=u.acf)||void 0===c?void 0:c.ciudad_minuscula,".webp"),alt:"Cambiar D\xf3lares a Euros ".concat(null==u?void 0:null===(t=u.acf)||void 0===t?void 0:t.ciudad),className:d().Image,width:480,height:390})})]})};e.Z=a},3615:function(o){o.exports={contenedorBreadcrumbs:"breadcrumbs_contenedorBreadcrumbs__SRHxF",breadcrumbsRaiz:"breadcrumbs_breadcrumbsRaiz__Owrdy",sectionBreadcrumbs:"breadcrumbs_sectionBreadcrumbs__YasZl"}},12677:function(o){o.exports={bloqueDivHabituales:"estilosConversor_bloqueDivHabituales__qyizk",bloqueTituloSuperior:"estilosConversor_bloqueTituloSuperior__74DMI",tituloDivisaHabitual:"estilosConversor_tituloDivisaHabitual__PGZAm",divisasHabituales:"estilosConversor_divisasHabituales__wvaj_",bloqueDer:"estilosConversor_bloqueDer__1r6FN",bloqueDerInput:"estilosConversor_bloqueDerInput__uyeMl",contenedorInput:"estilosConversor_contenedorInput__CD1eT",dolar:"estilosConversor_dolar__12tBB",libra:"estilosConversor_libra__24Kgr",imgMoneda:"estilosConversor_imgMoneda__HHN3D",nombreMoneda:"estilosConversor_nombreMoneda__uLZQj",contenedorInputSuperior:"estilosConversor_contenedorInputSuperior__BuNfk",contenedorInputInferior:"estilosConversor_contenedorInputInferior__K07c_",bloqueIzqInput:"estilosConversor_bloqueIzqInput__pY5w4",select:"estilosConversor_select__r14rR",select_monedas:"estilosConversor_select_monedas__tU665",contenedor_list:"estilosConversor_contenedor_list__Iv4HH",moneda:"estilosConversor_moneda__e9fmD",nombre:"estilosConversor_nombre__oQa2Z",select_activo:"estilosConversor_select_activo__YC9ym",bandera:"estilosConversor_bandera__CBFAR",botonSwith:"estilosConversor_botonSwith__PZb3B",monedaInferior:"estilosConversor_monedaInferior__SUADS",botonLlamarTienda:"estilosConversor_botonLlamarTienda__Wa2aZ",contenedorDolarGoogle:"estilosConversor_contenedorDolarGoogle__k2s_b",nombreDolarGoogle:"estilosConversor_nombreDolarGoogle__qalvU",contenedorBanderaGoogle:"estilosConversor_contenedorBanderaGoogle___K2IY",contenedorDatosGoogle:"estilosConversor_contenedorDatosGoogle__YcAvc",contendorSectionDos:"estilosConversor_contendorSectionDos__HIxka",contendorBloques:"estilosConversor_contendorBloques__pdSOR",bloqueIzq:"estilosConversor_bloqueIzq__wQobJ",contenedorInfo:"estilosConversor_contenedorInfo__irZOi",botonComprar:"estilosConversor_botonComprar__bauEz",botonVender:"estilosConversor_botonVender__H63uR",botonActivo:"estilosConversor_botonActivo___r_D_",contenedorBotones:"estilosConversor_contenedorBotones__4CKf_",inputInferior:"estilosConversor_inputInferior__cN7AX"}},50268:function(o){o.exports={contenedorSectionUno:"section_uno_contenedorSectionUno__20XvF",linea:"section_uno_linea__0lcC2",bloqueIzq:"section_uno_bloqueIzq__QlI3k",bloqueDer:"section_uno_bloqueDer__2R8Xy",madridMobil:"section_uno_madridMobil__VmgRw",botones:"section_uno_botones__L1FKI"}},60704:function(o){o.exports={contenedorSectionDos:"section_2_contenedorSectionDos__uiBaz",bloqueIzq:"section_2_bloqueIzq__f8APY",bloqueDer:"section_2_bloqueDer___uubY",contenedorInfo:"section_2_contenedorInfo__h9PEy",contenedorBotones:"section_2_contenedorBotones__cGo6k",botonComprar:"section_2_botonComprar__ZFxtL",botonVender:"section_2_botonVender___2y0k",botonActivo:"section_2_botonActivo__X23hE"}},64907:function(o){o.exports={contenedorContenidoUno:"sectionTres_contenedorContenidoUno__5MCgy",contenedorSectionTres:"sectionTres_contenedorSectionTres__fi_eA",linea:"sectionTres_linea__4EjPX",bloqueDer:"sectionTres_bloqueDer__B31y0",bloqueIzq:"sectionTres_bloqueIzq__TD30s",contenedorInfoTres:"sectionTres_contenedorInfoTres____VSH",cards:"sectionTres_cards__EicOu"}},30341:function(o){o.exports={contenedorSectionCuatro:"sectionCuatro_contenedorSectionCuatro__3E8i2",bloqueIzq:"sectionCuatro_bloqueIzq__xfvXP",bloqueDer:"sectionCuatro_bloqueDer__2XMVe",linea:"sectionCuatro_linea__p36EV"}},13915:function(o){o.exports={main:"Home_main__EtNt2",contenedorMapaVisible:"Home_contenedorMapaVisible__piXgh",contenedorSeccionUnoDos:"Home_contenedorSeccionUnoDos__pegsP",contenedorMapaVisibleCasaCambio:"Home_contenedorMapaVisibleCasaCambio__A5Ti8"}}}]);