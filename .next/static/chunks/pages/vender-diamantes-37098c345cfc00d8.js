(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3670],{23508:function(e,a,o){"use strict";var n=o(64836);a.Z=void 0;var s=n(o(64938)),i=o(85893),r=(0,s.default)((0,i.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");a.Z=r},42411:function(e,a,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vender-diamantes",function(){return o(67276)}])},54564:function(e,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.suspense=function(){let e=Error(n.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=n.NEXT_DYNAMIC_NO_SSR_CODE,e},a.NoSSR=function(e){let{children:a}=e;return a},(0,o(92648).Z)(o(67294));var n=o(92983)},37645:function(e,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){let o=i.default,s={loading:e=>{let{error:a,isLoading:o,pastDelay:n}=e;return null}};e instanceof Promise?s.loader=()=>e:"function"==typeof e?s.loader=e:"object"==typeof e&&(s=n({},s,e)),s=n({},s,a);let t=s.loader,l=()=>null!=t?t().then(r):Promise.resolve(r(()=>null));return s.loadableGenerated&&delete(s=n({},s,s.loadableGenerated)).loadableGenerated,"boolean"!=typeof s.ssr||s.ssr||(delete s.webpack,delete s.modules),o(n({},s,{loader:l}))};var n=o(6495).Z,s=o(92648).Z;s(o(67294));var i=s(o(14588));function r(e){return{default:(null==e?void 0:e.default)||e}}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},33644:function(e,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.LoadableContext=void 0;var n=(0,o(92648).Z)(o(67294));let s=n.default.createContext(null);a.LoadableContext=s},14588:function(e,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(60932).Z,s=o(6495).Z,i=(0,o(92648).Z)(o(67294)),r=o(54564),t=o(33644);let l=[],c=[],d=!1;function u(e){let a=e(),o={loading:!0,loaded:null,error:null};return o.promise=a.then(e=>(o.loading=!1,o.loaded=e,e)).catch(e=>{throw o.loading=!1,o.error=e,e}),o}class m{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:a}=this;e.loading&&("number"==typeof a.delay&&(0===a.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},a.delay)),"number"==typeof a.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},a.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,a){this._loadFn=e,this._opts=a,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function p(e){return function(e,a){let o=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,ssr:!0},a),s=null;function l(){if(!s){let a=new m(e,o);s={getCurrentValue:a.getCurrentValue.bind(a),subscribe:a.subscribe.bind(a),retry:a.retry.bind(a),promise:a.promise.bind(a)}}return s.promise()}if(o.lazy=i.default.lazy(n(function*(){if(o.ssr&&s){let e=s.getCurrentValue(),a=yield e.loaded;if(a)return a}return yield o.loader()})),!d){let e=o.webpack?o.webpack():o.modules;e&&c.push(a=>{for(let o of e)if(-1!==a.indexOf(o))return l()})}function u(e){!function(){l();let e=i.default.useContext(t.LoadableContext);e&&Array.isArray(o.modules)&&o.modules.forEach(a=>{e(a)})}();let a=o.loading,n=i.default.createElement(a,{isLoading:!0,pastDelay:!0,error:null}),s=o.ssr?i.default.Fragment:r.NoSSR,c=o.lazy;return i.default.createElement(i.default.Suspense,{fallback:n},i.default.createElement(s,null,i.default.createElement(c,Object.assign({},e))))}return u.preload=()=>l(),u.displayName="LoadableComponent",u}(u,e)}function x(e,a){let o=[];for(;e.length;){let n=e.pop();o.push(n(a))}return Promise.all(o).then(()=>{if(e.length)return x(e,a)})}p.preloadAll=()=>new Promise((e,a)=>{x(l).then(e,a)}),p.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(a=>{let o=()=>(d=!0,a());x(c,e).then(o,o)})},window.__NEXT_PRELOADREADY=p.preloadReady,a.default=p},17186:function(e,a,o){"use strict";var n=o(85893);o(67294);var s=o(35966),i=o.n(s);let r=()=>(0,n.jsx)("div",{className:i().botonLlamar,children:(0,n.jsx)("a",{title:"Tel\xe9fono",href:"tel:900 373 629",children:"LLAMAR A 900 373 629"})});a.Z=r},68100:function(e,a,o){"use strict";var n=o(85893);o(67294);var s=o(66546),i=o.n(s),r=o(11163);let t=e=>{let{listadoUrlCiudad:a}=e,o=null==a?void 0:a.arrayMarker,s=(0,r.useRouter)();return(0,n.jsxs)("select",{className:i().botonIrUrl,onChange:e=>{var a;a=e.target.value,s.push("/tiendas/compro-oro-".concat(a))},children:[(0,n.jsx)("option",{children:"CONOCE EL PRECIO DEL ORO"}),null==o?void 0:o.filter(e=>0!==e.id).map((e,a)=>(0,n.jsx)("option",{value:e.nombreMinusculas,children:e.nombre},a))]})};a.Z=t},79206:function(e,a,o){"use strict";var n=o(85893);o(67294);var s=o(3615),i=o.n(s);let r=e=>{let{raiz:a,iconoRaiz:o,urlUbicacionActual:s,ubicacionActual:r}=e;return(0,n.jsxs)("div",{className:i().sectionBreadcrumbs,children:[(0,n.jsxs)("div",{className:i().contenedorBreadcrumbs,children:[(0,n.jsx)("a",{href:"/",title:"Ir a ".concat(a),children:a}),o]}),r]})};a.Z=r},67276:function(e,a,o){"use strict";o.r(a),o.d(a,{__N_SSG:function(){return R},default:function(){return U}});var n=o(85893),s=o(9008),i=o.n(s);o(5152),o(67294);var r=o(79206),t=o(48317),l=o(13915),c=o.n(l),d=o(57699),u=o(46531),m=o.n(u),p=o(28665),x=o.n(p),h=o(25675),j=o.n(h),_=o(68100);let f=e=>{var a;let{ciudad:o,listadoUrlCiudad:s}=e;return(0,n.jsxs)("section",{className:x().contenedorSectionUno,children:[(0,n.jsxs)("div",{className:x().bloqueIzq,children:[(0,n.jsx)("h1",{children:"Compramos diamantes al mejor precio"}),(0,n.jsx)("p",{children:"Si est\xe1s pensando en vender o empe\xf1ar diamantes para obtener ingresos extra, en quickgold te ofrecemos las mejores condiciones con toda la seguridad que ofrece nuestra marca desde hace m\xe1s de 15 a\xf1os."}),(0,n.jsxs)("div",{className:x().botones,children:[(0,n.jsx)(_.Z,{listadoUrlCiudad:s}),(0,n.jsx)("a",{className:x().botonLlamar,href:"tel:".concat(null==o?void 0:null===(a=o.acf)||void 0===a?void 0:a.telefono),title:"Tel\xe9fono",children:"llama gratis"})]})]}),(0,n.jsx)("div",{className:x().bloqueDer,children:(0,n.jsx)(j(),{src:"/assets/img/imagenVenderDiamantes.png",alt:"Compra de diamantes",className:x().imagenDiamantes,width:480,height:364,priority:!0})})]})};var g=o(89423),v=o.n(g);let b=e=>{var a,o;let{ciudad:s}=e;return(0,n.jsxs)("section",{className:v().contenedorSectionCinco,children:[(0,n.jsxs)("div",{className:v().contenedorSectionCincoMargen,children:[(0,n.jsxs)("h4",{children:["Vender diamantes en ",(0,n.jsx)("span",{className:v().linea,children:"quickgold?"})," ","es f\xe1cil"," "]}),(0,n.jsxs)("p",{className:v().parrafoVenderDiamantes,children:[(0,n.jsx)("strong",{children:"IMPORTANTE"}),(0,n.jsx)("br",{}),"Para vender diamantes es necesario cita previa llamando al"," ",(0,n.jsxs)("a",{href:"tel:".concat(null==s?void 0:null===(a=s.acf)||void 0===a?void 0:a.telefono),children:[null==s?void 0:null===(o=s.acf)||void 0===o?void 0:o.telefono,"."]})]})]}),(0,n.jsxs)("div",{className:v().sectionCincoContenido,children:[(0,n.jsxs)("div",{className:v().contenidoCard,children:[(0,n.jsx)("p",{children:"#1"}),(0,n.jsx)("p",{children:"Comprobaci\xf3n"}),(0,n.jsx)("p",{children:"Los diamantes son comprobados con el tester para verificar su autenticidad."})]}),(0,n.jsxs)("div",{className:v().contenidoCard,children:[(0,n.jsx)("p",{children:"#2"}),(0,n.jsx)("p",{children:"Medici\xf3n"}),(0,n.jsx)("p",{children:"Tras la comprobaci\xf3n, los diamantes engastados son medidos con el calibre o mediante balanza de precisi\xf3n (quilatero) si est\xe1 suelto, para la obtenci\xf3n de los quilates."})]}),(0,n.jsxs)("div",{className:v().contenidoCard,children:[(0,n.jsx)("p",{children:"#3"}),(0,n.jsx)("p",{children:"Caracter\xedsticas diamantes"}),(0,n.jsx)("p",{children:"Comprobados y medidos los diamantes, trabajamos todas las calidades, desde VVS hasta Piqu\xe9, teniendo en cuenta las 4 C\xb4s: Quilates (carat), color (color), pureza (clarity) y talla (cut)."})]}),(0,n.jsxs)("div",{className:v().contenidoCard,children:[(0,n.jsx)("p",{children:"#4"}),(0,n.jsx)("p",{children:"Tasaci\xf3n y pago"}),(0,n.jsx)("p",{children:"Tras todas estas comprobaciones, se proceder\xe1 a la tasaci\xf3n de las piezas y al pago en el momento. As\xed mismo, en cumplimiento con la legislaci\xf3n vigente, se requerir\xe1 el DNI del cliente para dejar constancia de la venta y ser propietario de la pieza. Es recomendable aportar el certificado del brillante"})]})]})]})};var C=o(47712),N=o.n(C);let y=e=>{var a,o;let{ciudad:s}=e;return(0,n.jsxs)("section",{className:N().contenedorSectionSeis,children:[(0,n.jsxs)("div",{className:N().contenedorBloqueSuperior,children:[(0,n.jsxs)("h3",{children:["\xbfQu\xe9 diamantes compramos en"," ",(0,n.jsx)("span",{className:N().linea,children:"quickgold?"})]}),(0,n.jsx)("p",{children:"Para realizar una venta de diamantes es necesario ser mayor de edad y aportar tu DNI en vigor. Si tienes un brillante, contacta con nosotros para poder tasarlo."}),(0,n.jsx)("p",{children:"Para que podamos comprar un diamante es necesario que tengas las siguientes caracter\xedsticas:"})]}),(0,n.jsxs)("div",{className:N().contenedorBloqueInferior,children:[(0,n.jsx)("div",{className:N().BloqueIzq,children:(0,n.jsxs)("ol",{children:[(0,n.jsx)("li",{children:"Compramos talla brillante moderna."}),(0,n.jsx)("li",{children:"Aquellos que est\xe9n catalogados como Escala de color hasta la letra J."}),(0,n.jsx)("li",{children:"La pureza debe estar por encima de P (Sl2). "}),(0,n.jsxs)("li",{children:["Compramos brillantes con un quilataje mayor a 0,10 ct (a partir de 10 puntos, consultar para menos)."," "]}),(0,n.jsx)("li",{children:"No importa si no tienes certificado, est\xe1n sueltos o engastados. Te mantenemos informado de la mejor oferta por tu brillante en ct m\xe1s altos, de manera particular."}),(0,n.jsx)("li",{children:"No compramos las tallas no brillante: princesa, pera, esmeraldo, marquesa, oval..."})]})}),(0,n.jsxs)("div",{className:N().BloqueDer,children:[(0,n.jsx)(j(),{src:"/assets/img/imagenAdornoSectionTres.png",alt:"Vender Diamantes",className:N().imagenAdornoSectionTres,width:210,height:204}),(0,n.jsxs)("p",{children:["El precio final depender\xe1 de las caracter\xedsticas de los diamantes y del valor en el marcado. Nuestros precios son muy competitivos. Estaremos encantados de atenderte. Pide cita en nuestro n\xfamero gratuito"," ",(0,n.jsx)("a",{href:"tel:".concat(null==s?void 0:null===(a=s.acf)||void 0===a?void 0:a.telefono),children:(0,n.jsx)("strong",{children:null==s?void 0:null===(o=s.acf)||void 0===o?void 0:o.telefono})}),"."]})]})]})]})};var q=o(82138),D=o.n(q);let S=e=>{let{ciudad:a}=e;return(0,n.jsxs)("section",{className:D().contenedorSectionCinco,children:[(0,n.jsx)("div",{className:D().bloqueSuperior,children:(0,n.jsx)("h3",{children:"\xbfPor qu\xe9 elegirnos?"})}),(0,n.jsxs)("div",{className:D().bloqueInferior,children:[(0,n.jsx)("div",{className:D().contenedorVentajas1,children:(0,n.jsx)("p",{children:"Recibo de compra con el precio y el peso desglosado"})}),(0,n.jsx)("div",{className:D().contenedorVentajas2,children:(0,n.jsx)("p",{children:"Cumplimos la normativa de seguridad privada garantizando una custodia segura"})}),(0,n.jsx)("div",{className:D().contenedorVentajas3,children:(0,n.jsx)("p",{children:"Precios publicados reales y actualizados cada 3 horas"})}),(0,n.jsx)("div",{className:D().contenedorVentajas4,children:(0,n.jsx)("p",{children:"Protecci\xf3n de sus piezas mediante normas de seguridad exigidas por la jefatura de polic\xeda"})}),(0,n.jsx)("div",{className:D().contenedorVentajas5,children:(0,n.jsx)("p",{children:"Comprobaci\xf3n y pesaje a la vista del cliente"})}),(0,n.jsx)("div",{className:D().contenedorVentajas6,children:(0,n.jsx)("p",{children:"B\xe1sculas homologadas por el ministerio de industria"})}),(0,n.jsx)("div",{className:D().contenedorVentajas7,children:(0,n.jsx)("p",{children:"Profesionales formados y en constante formaci\xf3n"})}),(0,n.jsx)("div",{className:D().contenedorVentajas8,children:(0,n.jsx)("p",{children:"Descartes seg\xfan cat\xe1logo de gemas"})}),(0,n.jsx)("div",{className:D().contenedorVentajas9,children:(0,n.jsx)("p",{children:"Registro de todas las operaciones"})})]})]})};var T=o(1178),M=o.n(T),V=o(82280),E=o(38895),w=o(22797),P=o(23508),I=o(62089),Z=o.n(I);function A(){return(0,n.jsxs)("div",{className:Z().contenedorAccordion,children:[(0,n.jsxs)(V.Z,{className:Z().contenedorContenidoAccordion,children:[(0,n.jsx)(E.Z,{className:Z().fondoTitulo,expandIcon:(0,n.jsx)(P.Z,{}),"aria-controls":"panel5a-content",id:"panel5a-header",children:(0,n.jsx)("p",{children:"Talla brillante moderna"})}),(0,n.jsxs)(w.Z,{className:Z().accordionDetails,children:[(0,n.jsx)(j(),{src:"/assets/img/diamanteBrillante.png",alt:"Compra de diamantes",className:Z().imagenDiamantesBrillante,width:82,height:98}),(0,n.jsx)("p",{className:Z().textoContenido,children:"Seg\xfan el IGE (Instituto de Gemolog\xeda Espa\xf1ol): La talla brillante moderna se estructur\xf3 definitivamente despu\xe9s de la publicaci\xf3n en 1919 de un estudio te\xf3rico realizado por Marcel Tolkowsky. En \xe9l se fijaban los \xe1ngulos correctos que hab\xeda que dar a las facetas de la corona y de la culata con respecto al plano del filet\xedn, y las proporciones adecuadas para que un diamante de esa talla presentara el m\xe1ximo brillo y dispersi\xf3n. Como la casi totalidad de las tallas, la talla brillante est\xe1 constituida por dos partes principales, una superior denominada corona y otra inferior llamada culata. Ambas est\xe1n separadas, o si se prefiere unidas, por una banda irregular llamada filet\xedn, el cual puede quedar en su estado natural o ser pulido o facetado. El v\xe9rtice de la culata por lo general se termina en punta. A veces puede estar ligeramente truncado, sobre todo en piedras grandes, tall\xe1ndole una diminuta faceta que se denomina “culet”, con lo que el v\xe9rtice queda mejor protegido de posibles golpes."}),(0,n.jsx)("iframe",{loading:"lazy",className:Z().iframeVideo,src:"http://players.brightcove.net/1799386198001/B1rweqatG_default/index.html?videoId=2890384735001"}),(0,n.jsx)("p",{children:(0,n.jsxs)("strong",{children:[" ","Gu\xeda de tallas de GIA"," ",(0,n.jsx)("a",{href:"https://4cs.gia.edu/en-us/blog/gia-diamond-grading-scales/",target:"_blank",children:"(Gemological Institute of America Inc.)"})]})})]})]}),(0,n.jsxs)(V.Z,{className:Z().contenedorContenidoAccordion,children:[(0,n.jsx)(E.Z,{className:Z().fondoTitulo,expandIcon:(0,n.jsx)(P.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,n.jsx)("p",{children:"Color"})}),(0,n.jsxs)(w.Z,{className:Z().accordionDetails,children:[(0,n.jsx)("p",{className:Z().textoContenido,children:"Las diferencias sutiles en el color pueden hacer que el valor del brillante cambie considerablemente. En el rango del color normal, cuanto m\xe1s se acerque a un diamante incoloro, mayor es su precio por quilate. Esta clasificaci\xf3n por color se realiza en condiciones controladas compar\xe1ndolos con las llamadas “piedras muestras”."}),(0,n.jsx)(j(),{src:"/assets/img/diamantes-guia-color-.jpg",alt:"Compra de diamantes",className:Z().imagenDiamantes,width:6e3,height:240})]})]}),(0,n.jsxs)(V.Z,{className:Z().contenedorContenidoAccordion,children:[(0,n.jsx)(E.Z,{className:Z().fondoTitulo,expandIcon:(0,n.jsx)(P.Z,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:(0,n.jsx)("p",{children:"Claridad"})}),(0,n.jsxs)(w.Z,{className:Z().accordionDetails,children:[(0,n.jsx)("p",{className:Z().textoContenido,children:"Un diamante tiene caracter\xedsticas internas, llamadas inclusiones e irregularidades en la superficie, llamadas imperfecciones. A esta combinaci\xf3n se le llama claridad. Cuanto menos inclusiones y manchas tengan los brillantes, mayor ser\xe1 su valor. La claridad ayuda a distinguir imitaciones de diamantes reales y est\xe1 directamente relacionada con el concepto de rareza. Los diamantes sin defectos son los menos vistos."}),(0,n.jsx)(j(),{src:"/assets/img/diamantes-claridad.jpg",alt:"Compra de diamantes",className:Z().imagenDiamantes,width:1e3,height:280})]})]}),(0,n.jsxs)(V.Z,{className:Z().contenedorContenidoAccordion,children:[(0,n.jsx)(E.Z,{className:Z().fondoTitulo,expandIcon:(0,n.jsx)(P.Z,{}),"aria-controls":"panel3a-content",id:"panel3a-header",children:(0,n.jsx)("p",{children:"Corte (Talla)"})}),(0,n.jsxs)(w.Z,{className:Z().accordionDetails,children:[(0,n.jsx)("p",{className:Z().textoContenido,children:"Un brillante terminado es deslumbrante y depende de la habilidad y del cuidado puesto por el artesano. Cuando un diamante interact\xfaa con la luz, cada \xe1ngulo, cada faceta afecta a la cantidad de luz devuelta al ojo, por eso es muy importante la proporci\xf3n que tenga \xe9ste. Un diamante bien cortado muestra la belleza que los consumidores esperan ver en \xe9l. El brillo, el color y las \xe1reas de luz y oscuridad son los aspectos esenciales que nos aportan informaci\xf3n sobre su belleza. Por regla general, cuanto mayor sea el grado de corte, m\xe1s brillante ser\xe1 el diamante. El t\xe9rmino corte tambi\xe9n describe la forma que tiene el brillante. Los m\xe1s conocidos son el corte marquesa, princesa, pera, \xf3valo, coraz\xf3n y esmeralda."}),(0,n.jsx)(j(),{src:"/assets/img/tallas-diamantes.jpg",alt:"Compra de diamantes",className:Z().imagenDiamantes,width:1e3,height:320})]})]}),(0,n.jsxs)(V.Z,{className:Z().contenedorContenidoAccordion,children:[(0,n.jsx)(E.Z,{className:Z().fondoTitulo,expandIcon:(0,n.jsx)(P.Z,{}),"aria-controls":"panel4a-content",id:"panel4a-header",children:(0,n.jsx)("p",{children:"Peso en quilates"})}),(0,n.jsx)(w.Z,{className:Z().accordionDetails,children:(0,n.jsx)("p",{className:Z().textoContenido,children:"Para pesar un diamante se necesita mucha precisi\xf3n. Los pesos de \xe9stos se expresan en quilates m\xe9tricos (ct). Un quilate m\xe9trico es dos d\xe9cimas de un gramo (0,2) o lo que es lo mismo y poco m\xe1s de siete mil\xe9simas de una onza (0,007). Los diamantes grandes son m\xe1s raros que los diamantes peque\xf1os. Por lo tanto, es un factor muy importante para determinar su valor."})})]})]})}let z=e=>{var a,o;let{ciudad:s}=e;return(0,n.jsx)("section",{className:M().contenedorSectionSeis,children:(0,n.jsxs)("div",{className:M().contenedorSectionSeisMargen,children:[(0,n.jsx)("div",{className:M().contenedorTexto,children:(0,n.jsx)("h5",{children:"\xbfD\xf3nde vender diamantes?"})}),(0,n.jsx)("div",{className:M().contenedorTiposDivisas,children:(0,n.jsx)("div",{className:M().contenedorTiposDivisasCard1,children:(0,n.jsxs)("p",{className:M().contenedorTiposDivisasCard1Texto,children:["A la hora de vender brillantes es necesario acudir a un experto gem\xf3logo que te sepa tasar con total profesionalidad la pieza.Por eso, en quickgold, contamos con profesionales que te ayudar\xe1n a valorar los diamantes que quieras vender. Es necesario que concretes una cita previa con nosotros a trav\xe9s del tel\xe9fono gratuito"," ",(0,n.jsx)("a",{href:"tel:".concat(null==s?void 0:null===(a=s.acf)||void 0===a?void 0:a.telefono),children:(0,n.jsx)("strong",{children:null==s?void 0:null===(o=s.acf)||void 0===o?void 0:o.telefono})}),".",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Acordaremos una reuni\xf3n con un experto gem\xf3logo para que realice todas las mediciones y comprobaciones delante de ti. Queremos que est\xe9s presente en todo el procedimiento."]})})}),(0,n.jsx)("div",{className:M().contenedorTexto,children:(0,n.jsx)("h5",{children:"\xbfQu\xe9 caracter\xedsticas tiene un diamante?"})}),(0,n.jsx)("div",{className:M().contenedorTiposDivisas,children:(0,n.jsxs)("div",{className:M().contenedorTiposDivisasCard1,children:[(0,n.jsxs)("p",{className:M().contenedorTiposDivisasCard1Texto,children:["Cada diamante es \xfanico, tiene muchos tama\xf1os, formas, colores y caracter\xedsticas internas. Su valor se basa es una combinaci\xf3n de factores como la rareza. Cuanto m\xe1s raros m\xe1s valiosos. Los profesionales de la joyer\xeda nos basamos en un sistema desarrollado por GIA para establecer de forma sistem\xe1tica, los factores m\xe1s importantes para clasificar los diamantes: claridad, color, corte y peso en quilates. Se conocen como las 4Cs y nos sirve para valorar un diamante.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," Los profesionales de la joyer\xeda nos basamos en un sistema desarrollado por GIA para establecer de forma sistem\xe1tica, los factores m\xe1s importantes para clasificar los diamantes:",(0,n.jsx)("strong",{children:" claridad, color, corte y peso"})," en quilates. Se conocen como las 4Cs y nos sirve para valorar un diamante."]}),(0,n.jsx)("div",{className:M().contenedorAccordionDiamantes,children:(0,n.jsx)(A,{})})]})})]})})};var k=o(43881),B=o.n(k);let O=e=>{let{ciudad:a}=e;return(0,n.jsxs)("section",{className:B().contenedorSectionCincoMobil,children:[(0,n.jsx)("div",{className:B().bloqueSuperior,children:(0,n.jsx)("h2",{children:"\xbfPor qu\xe9 elegirnos?"})}),(0,n.jsxs)("div",{className:B().bloqueInferior,children:[(0,n.jsxs)("div",{className:B().contenedorVentajas,children:[(0,n.jsx)("div",{className:B().imagenventaja1,children:(0,n.jsx)(j(),{src:"/assets/img/imagenPorqueElegirnosMovil1.png",alt:"Mejor servicio y precio",width:56,height:56})}),(0,n.jsx)("p",{children:"Recibo de compra con el precio y el peso desglosado."})]}),(0,n.jsxs)("div",{className:B().contenedorVentajas,children:[(0,n.jsx)("div",{className:B().imagenventaja1,children:(0,n.jsx)(j(),{src:"/assets/img/imagenPorqueElegirnosMovil2.png",alt:"Mejor servicio y precio",width:56,height:56})}),(0,n.jsx)("p",{children:"Cumplimos la normativa de seguridad privada garantizando una custodia segura."})]}),(0,n.jsxs)("div",{className:B().contenedorVentajas,children:[(0,n.jsx)("div",{className:B().imagenventaja1,children:(0,n.jsx)(j(),{src:"/assets/img/imagenPorqueElegirnosMovil3.png",alt:"Mejor servicio y precio",width:56,height:56})}),(0,n.jsx)("p",{children:"Precios publicados reales y actualizados cada 3 horas."})]}),(0,n.jsxs)("div",{className:B().contenedorVentajas,children:[(0,n.jsx)("div",{className:B().imagenventaja1,children:(0,n.jsx)(j(),{src:"/assets/img/imagenPorqueElegirnosMovil4.png",alt:"Mejor servicio y precio",width:56,height:56})}),(0,n.jsx)("p",{children:"Protecci\xf3n de sus piezas mediante normas de seguridad exigidas por la jefatura de polic\xeda."})]}),(0,n.jsxs)("div",{className:B().contenedorVentajas,children:[(0,n.jsx)("div",{className:B().imagenventaja1,children:(0,n.jsx)(j(),{src:"/assets/img/imagenPorqueElegirnosMovil5.png",alt:"Mejor servicio y precio",width:56,height:56})}),(0,n.jsx)("p",{children:"Comprobaciones y pesaje a la vista del cliente."})]}),(0,n.jsxs)("div",{className:B().contenedorVentajas,children:[(0,n.jsx)("div",{className:B().imagenventaja1,children:(0,n.jsx)(j(),{src:"/assets/img/imagenPorqueElegirnosMovil6.png",alt:"Mejor servicio y precio",width:56,height:56})}),(0,n.jsx)("p",{children:"B\xe1sculas homologadas por el ministerio de industria."})]}),(0,n.jsxs)("div",{className:B().contenedorVentajas,children:[(0,n.jsx)("div",{className:B().imagenventaja1,children:(0,n.jsx)(j(),{src:"/assets/img/imagenPorqueElegirnosMovil7.png",alt:"Mejor servicio y precio",width:56,height:56})}),(0,n.jsx)("p",{children:"Profesionales formados y en constante formaci\xf3n."})]}),(0,n.jsxs)("div",{className:B().contenedorVentajas,children:[(0,n.jsx)("div",{className:B().imagenventaja1,children:(0,n.jsx)(j(),{src:"/assets/img/imagenPorqueElegirnosMovil8.png",alt:"Mejor servicio y precio",width:56,height:56})}),(0,n.jsx)("p",{children:"Descartes seg\xfan cat\xe1logo de gemas."})]}),(0,n.jsxs)("div",{className:B().contenedorVentajas,children:[(0,n.jsx)("div",{className:B().imagenventaja1,children:(0,n.jsx)(j(),{src:"/assets/img/imagenPorqueElegirnosMovil9.png",alt:"Mejor servicio y precio",width:56,height:56})}),(0,n.jsx)("p",{children:"Registro de todas las operaciones."})]})]}),(0,n.jsx)("p",{className:B().texto,children:"Informaci\xf3n de inter\xe9s"})]})};var L=o(17186),R=!0;function U(e){var a,o;let{menu_list:s,ciudad:l,listadoUrlCiudad:u}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m(),{title:null==l?void 0:null===(a=l.acf)||void 0===a?void 0:a.titulo_del_meta,description:null==l?void 0:null===(o=l.acf)||void 0===o?void 0:o.descripcion_del_meta,icon:"/favicon.png",facebook:{image:"/facebook.png",url:"https://www.facebook.com/quickgold.es/",type:"article"},twitter:{image:"/twitter.png",site:"@quickgoldQG",card:"summary_large_image"}}),(0,n.jsxs)(i(),{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"stylesheet preload prefetch",href:"https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css",as:"style"}),(0,n.jsx)("noscript",{children:(0,n.jsx)("link",{rel:"stylesheet",href:"https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"})})]}),(0,n.jsxs)(d.Z,{menu_list:s,ciudad:l,children:[(0,n.jsxs)("div",{className:c().main,children:[(0,n.jsx)(r.Z,{raiz:"Quickgold",iconoRaiz:(0,n.jsx)(t.Z,{}),urlUbicacionActual:"/vender-diamantes/",iconoUbiccionActual:(0,n.jsx)(t.Z,{}),ubicacionActual:"Compra de diamantes"}),(0,n.jsx)(f,{ciudad:l,listadoUrlCiudad:u}),(0,n.jsx)(b,{ciudad:l})]}),(0,n.jsx)(y,{ciudad:l}),(0,n.jsx)(S,{ciudad:l}),(0,n.jsx)(O,{ciudad:l}),(0,n.jsx)(z,{ciudad:l}),(0,n.jsx)(L.Z,{ciudad:l})]})]})}},35966:function(e){e.exports={botonLlamar:"botonLamarFijo_botonLlamar__ywd7X"}},66546:function(e){e.exports={botonIrUrl:"selectorCiudades_botonIrUrl__Hwbic"}},3615:function(e){e.exports={contenedorBreadcrumbs:"breadcrumbs_contenedorBreadcrumbs__SRHxF",breadcrumbsRaiz:"breadcrumbs_breadcrumbsRaiz__Owrdy",sectionBreadcrumbs:"breadcrumbs_sectionBreadcrumbs__YasZl"}},62089:function(e){e.exports={fondoTitulo:"accordionDiamantes_fondoTitulo___DIZv",contenedorContenidoAccordion:"accordionDiamantes_contenedorContenidoAccordion__BUqwm",textoContenido:"accordionDiamantes_textoContenido__nAH2R",accordionDetails:"accordionDiamantes_accordionDetails__UF0PB",imagenDiamantes:"accordionDiamantes_imagenDiamantes__TOSTq",imagenDiamantesBrillante:"accordionDiamantes_imagenDiamantesBrillante___OLxw",iframeVideo:"accordionDiamantes_iframeVideo__9lpPX"}},28665:function(e){e.exports={contenedorSectionUno:"section_uno_contenedorSectionUno__HZ9Su",linea:"section_uno_linea__ZM1Rk",bloqueIzq:"section_uno_bloqueIzq__JSJUI",bloqueDer:"section_uno_bloqueDer__4ZD19",madridMobil:"section_uno_madridMobil__MuNj9",botones:"section_uno_botones__MZ_rs",botonPopUp:"section_uno_botonPopUp__m1G0O"}},89423:function(e){e.exports={contenedorSectionCinco:"sectionDos_contenedorSectionCinco__QVgau",sectionCincoContenido:"sectionDos_sectionCincoContenido__urKuj",contenedorSectionCincoMargen:"sectionDos_contenedorSectionCincoMargen__txJGY",linea:"sectionDos_linea__Jyhlh",contenidoCard:"sectionDos_contenidoCard__tcfK7",parrafoVenderDiamantes:"sectionDos_parrafoVenderDiamantes__zHVf0"}},47712:function(e){e.exports={contenedorBloqueSuperior:"sectioTres_contenedorBloqueSuperior__BDhnz",contenedorSectionSeis:"sectioTres_contenedorSectionSeis__0GoNe",linea:"sectioTres_linea__0N5_J",contenedorBloqueInferior:"sectioTres_contenedorBloqueInferior__mCCVw",BloqueDer:"sectioTres_BloqueDer__MdB2H",BloqueIzq:"sectioTres_BloqueIzq__ksDun",imagenAdornoSectionTres:"sectioTres_imagenAdornoSectionTres__AfWpl"}},82138:function(e){e.exports={contenedorSectionCinco:"sectionCuatro_contenedorSectionCinco__soMGU",bloqueInferior:"sectionCuatro_bloqueInferior__wXTM3",bloqueSuperior:"sectionCuatro_bloqueSuperior__vkycJ",contenedorVentajas1:"sectionCuatro_contenedorVentajas1__Dq8Kd",contenedorVentajas2:"sectionCuatro_contenedorVentajas2__ZMmt3",contenedorVentajas3:"sectionCuatro_contenedorVentajas3__vqwW6",contenedorVentajas4:"sectionCuatro_contenedorVentajas4__8B_bW",contenedorVentajas5:"sectionCuatro_contenedorVentajas5__gOSib",contenedorVentajas6:"sectionCuatro_contenedorVentajas6__NIKSY",contenedorVentajas7:"sectionCuatro_contenedorVentajas7__WEbK0",contenedorVentajas8:"sectionCuatro_contenedorVentajas8__IelaV",contenedorVentajas9:"sectionCuatro_contenedorVentajas9__ohsK3",linea:"sectionCuatro_linea__tzyEI"}},43881:function(e){e.exports={contenedorSectionCincoMobil:"sectionCuatroMobil_contenedorSectionCincoMobil__fXg_D",bloqueInferior:"sectionCuatroMobil_bloqueInferior__CFn6u",bloqueSuperior:"sectionCuatroMobil_bloqueSuperior__552bt",imagenventaja1:"sectionCuatroMobil_imagenventaja1__8pV9a",contenedorVentajas:"sectionCuatroMobil_contenedorVentajas__YOK84",linea:"sectionCuatroMobil_linea__XpaE8",botones:"sectionCuatroMobil_botones__RLITu",botonPopUp:"sectionCuatroMobil_botonPopUp__GBR7b",texto:"sectionCuatroMobil_texto__miebP"}},1178:function(e){e.exports={contenedorSectionSeis:"sectionCinco_contenedorSectionSeis__JVHyM",contenedorSectionSeisMargen:"sectionCinco_contenedorSectionSeisMargen__xJTTU",contenedorTexto:"sectionCinco_contenedorTexto__YG0_h",contenedorTiposDivisas:"sectionCinco_contenedorTiposDivisas__o__5C",contenedorTiposDivisasCard1:"sectionCinco_contenedorTiposDivisasCard1__3iCE4",contenedorTiposDivisasCard1Texto:"sectionCinco_contenedorTiposDivisasCard1Texto__Hk8ma",contenedorAccordionDiamantes:"sectionCinco_contenedorAccordionDiamantes__bSVOF"}},13915:function(e){e.exports={main:"Home_main__EtNt2",contenedorMapaVisible:"Home_contenedorMapaVisible__piXgh",contenedorSeccionUnoDos:"Home_contenedorSeccionUnoDos__pegsP",contenedorMapaVisibleCasaCambio:"Home_contenedorMapaVisibleCasaCambio__A5Ti8"}},5152:function(e,a,o){e.exports=o(37645)},11163:function(e,a,o){e.exports=o(80880)}},function(e){e.O(0,[5231,404,7699,9774,2888,179],function(){return e(e.s=42411)}),_N_E=e.O()}]);