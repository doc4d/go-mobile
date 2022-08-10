"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1360],{65771:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var o=t(87462),a=(t(67294),t(3905));const n={id:"from-your-iphone-and-xcode",title:"From your iPhone and Xcode"},l=void 0,i={unversionedId:"debug/from-your-iphone-and-xcode",id:"version-19-R5/debug/from-your-iphone-and-xcode",title:"From your iPhone and Xcode",description:"Debug from Xcode",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R5/debug/from-your-iphone-and-xcode.md",sourceDirName:"debug",slug:"/debug/from-your-iphone-and-xcode",permalink:"/es/19-R5/debug/from-your-iphone-and-xcode",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/debug/from-your-iphone-and-xcode.md",tags:[],version:"19-R5",frontMatter:{id:"from-your-iphone-and-xcode",title:"From your iPhone and Xcode"},sidebar:"docs",previous:{title:"Desde el editor del proyecto",permalink:"/es/19-R5/debug/from-project-editor"},next:{title:"From your Android device",permalink:"/es/19-R5/debug/from-your-android-device-and-android-studio"}},s={},d=[{value:"Debug from Xcode",id:"debug-from-xcode",level:2},{value:"Logger (registrador)",id:"logger-registrador",level:3},{value:"Niveles",id:"niveles",level:3},{value:"Formato",id:"formato",level:3},{value:"Emoticones",id:"emoticones",level:4},{value:"C\xedrculos",id:"c\xedrculos",level:4},{value:"Debug from your iPhone",id:"debug-from-your-iphone",level:2}],u={toc:d};function c(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"debug-from-xcode"},"Debug from Xcode"),(0,a.kt)("p",null,"Si tiene problemas durante el proceso de creaci\xf3n, puede abrir su proyecto generado con Xcode seleccionando la opci\xf3n ",(0,a.kt)("strong",{parentName:"p"}," Abrir el producto con Xcode ")," en el men\xfa ",(0,a.kt)("strong",{parentName:"p"},"Project"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Abra el proyecto con Xcode",src:t(7504).Z,width:"2164",height:"1988"})),(0,a.kt)("p",null,"Desde aqu\xed puede ",(0,a.kt)("strong",{parentName:"p"}," lanzar su aplicaci\xf3n ")," en el simulador haciendo clic en el ",(0,a.kt)("strong",{parentName:"p"},"bot\xf3n Generar")," y obtener todos los historiales en la parte inferior del espacio de trabajo Xcode."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Historiales Xcode",src:t(32507).Z,width:"2502",height:"2144"})),(0,a.kt)("h3",{id:"logger-registrador"},"Logger (registrador)"),(0,a.kt)("p",null,"Un registrador es un objeto que le permitir\xe1 registrar y rastrear."),(0,a.kt)("p",null,"Para eso utilizamos ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DaveWoodCom/XCGLogger"},"XCGLogger"),"."),(0,a.kt)("p",null,"Encontrar\xe1 la definici\xf3n de los par\xe1metros del registrador en su proyecto Xcode/Settings/Settings.plist."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Historiales Xcode",src:t(52279).Z,width:"2414",height:"1410"})),(0,a.kt)("h3",{id:"niveles"},"Niveles"),(0,a.kt)("p",null,"Puede filtrar y mostrar diferentes niveles de registro en su consola agregando log.level en su archivo Settings.plist."),(0,a.kt)("p",null,"Para hacerlo, agregue una l\xednea haciendo clic derecho en el archivo Settings.plist e ingrese:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"log.level como llave"),(0,a.kt)("li",{parentName:"ul"},"N\xfamero como tipo"),(0,a.kt)("li",{parentName:"ul"},"3 como valor (por ejemplo)")),(0,a.kt)("p",null,"Los ",(0,a.kt)("strong",{parentName:"p"},"valores disponibles")," son los siguientes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0 para verbose"),(0,a.kt)("li",{parentName:"ul"},"1 para la depuraci\xf3n"),(0,a.kt)("li",{parentName:"ul"},"2 para info (valor por defecto)"),(0,a.kt)("li",{parentName:"ul"},"3 advertencia"),(0,a.kt)("li",{parentName:"ul"},"4 error"),(0,a.kt)("li",{parentName:"ul"},"5 severo")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Nivel del historial",src:t(20393).Z,width:"2414",height:"1410"})),(0,a.kt)("p",null,"Entonces, para este ejemplo, si define el valor log.level Value en 3, obtendr\xe1 una ",(0,a.kt)("strong",{parentName:"p"},"advertencia, un error y un severo ")," en su consola Xcode."),(0,a.kt)("h3",{id:"formato"},"Formato"),(0,a.kt)("p",null,"Puede mostrar diferentes indicadores visuales en la consola Xcode para ",(0,a.kt)("strong",{parentName:"p"},"resaltar diferentes tipos de historiales"),"."),(0,a.kt)("p",null,"Para hacerlo, solo tiene que abrir su proyecto Xcode/Settings/Settings.plist"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Formato del historial",src:t(45653).Z,width:"2414",height:"1410"})),(0,a.kt)("h4",{id:"emoticones"},"Emoticones"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\uddef"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd39"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u2139\ufe0f"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u26a0\ufe0f"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\u203c\ufe0f"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\ud83d\udca3"')),(0,a.kt)("h4",{id:"c\xedrculos"},"C\xedrculos"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\udd18"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd35"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u26aa"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u2622\ufe0f"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\ud83d\udd34"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\u26ab"')),(0,a.kt)("h2",{id:"debug-from-your-iphone"},"Debug from your iPhone"),(0,a.kt)("p",null,"From your app, if you have a crash, you can display, edit and send feedback."),(0,a.kt)("p",null,"Para eso:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vaya a la configuraci\xf3n de su iPhone"),(0,a.kt)("li",{parentName:"ul"},"encuentre su aplicaci\xf3n desplaz\xe1ndose hacia abajo"),(0,a.kt)("li",{parentName:"ul"},"Active los comentarios")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Activate feedback and logs",src:t(44345).Z,width:"1521",height:"936"})),(0,a.kt)("p",null,"A partir de aqu\xed, lo \xfanico que tiene que hacer es volver a abrir su aplicaci\xf3n. Aparecer\xe1 una hoja de acci\xf3n que le permitir\xe1:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enviar mensajes"),(0,a.kt)("li",{parentName:"ul"},"Sugerir una mejora"),(0,a.kt)("li",{parentName:"ul"},"Mostrar el historial actual"),(0,a.kt)("li",{parentName:"ul"},"Reportar un problema")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Mostrar y enviar los historiales",src:t(39577).Z,width:"1521",height:"936"})))}c.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var o=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),d=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=d(e.components);return o.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||n;return t?o.createElement(g,l(l({ref:r},u),{},{components:t})):o.createElement(g,l({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,l=new Array(n);l[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<n;d++)l[d]=t[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},32507:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/Xcode-logs-4da61f66a49075bae70d8c27efe6ef2a.png"},44345:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/activate-feedback-logs-4b68929c4bfb0252dcd30a8b4068b3c9.png"},39577:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/display-send-logs-cb5739ce1531f6aa55fb37b106cdb509.png"},45653:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/log-format-7a7bc7d581178f8d8d371706475c114d.png"},20393:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/log-level-0ec5cad4a8177259b8dfd0f2653d6ce7.png"},7504:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/open-project-Xcode-ed49be9ed186268dd01df3b4562d2092.png"},52279:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/settings-plist-xcode-e29ce6df5f7917d95a1728d11874fd22.png"}}]);