"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5378],{31278:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var r=o(87462),a=(o(67294),o(3905));const n={id:"working-with-xcode",title:"Trabajar con Xcode"},i=void 0,c={unversionedId:"tutorials/customizing-with-xcode/working-with-xcode",id:"version-19-R7/tutorials/customizing-with-xcode/working-with-xcode",title:"Trabajar con Xcode",description:"OBJETIVOS",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/tutorials/customizing-with-xcode/working-with-xcode.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/working-with-xcode",permalink:"/go-mobile/es/docs/tutorials/customizing-with-xcode/working-with-xcode",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R7/tutorials/customizing-with-xcode/working-with-xcode.md",tags:[],version:"19-R7",frontMatter:{id:"working-with-xcode",title:"Trabajar con Xcode"},sidebar:"tutorials",previous:{title:"Interacciones entre relaciones",permalink:"/go-mobile/es/docs/tutorials/relations/relation-interactions"},next:{title:"Presentaci\xf3n de Xcode",permalink:"/go-mobile/es/docs/tutorials/customizing-with-xcode/xcode-overview"}},l={},s=[{value:"\xbfQu\xe9 es Xcode?",id:"qu\xe9-es-xcode",level:2},{value:"Descargar",id:"descargar",level:2},{value:"PASO 1. Genere su proyecto iOS",id:"paso-1-genere-su-proyecto-ios",level:2},{value:"PASO 2. Cree su proyecto",id:"paso-2-cree-su-proyecto",level:2},{value:"PASO 3. Abra su proyecto con Xcode",id:"paso-3-abra-su-proyecto-con-xcode",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Abra un proyecto 4D for iOS desde el Editor de proyectos."),(0,a.kt)("li",{parentName:"ul"},"Personalizar la aplicaci\xf3n 4D for iOS generada."))),(0,a.kt)("p",null,"4D for iOS genera una aplicaci\xf3n iOS nativa modificable y personalizable con Xcode. \xa1Miremos el proceso!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTA")),(0,a.kt)("p",{parentName:"blockquote"},"Si personaliza su proyecto en Xcode y lo reconstruye desde el Editor de proyecto, todas sus modificaciones se perder\xe1n!")),(0,a.kt)("h2",{id:"qu\xe9-es-xcode"},"\xbfQu\xe9 es Xcode?"),(0,a.kt)("p",null,"Xcode es un entorno de desarrollo integrado(IDE) y un conjunto de herramientas de desarrollo para macOS que se utilizan para crear aplicaciones para iPad, iPod, iPhone y Mac."),(0,a.kt)("h2",{id:"descargar"},"Descargar"),(0,a.kt)("p",null,"Para descargar la \xfaltima versi\xf3n de Xcode vaya a la App Store."),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"macappstore://itunes.apple.com/app/id497799835?mt=12"},"Ver in Mac App Store ")),(0,a.kt)("p",null,"Los desarrolladores registrados pueden descargar las versiones previas y las versiones anteriores de la suite a trav\xe9s del sitio web de desarrolladores de Apple."),(0,a.kt)("p",null,"Utilizaremos la ",(0,a.kt)("a",{parentName:"p",href:"../crear-su-primera-app"},"aplicaci\xf3n contact")," que hemos creado."),(0,a.kt)("p",null,"Descargue el proyecto Starter:"),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"#"},"Descargar")),(0,a.kt)("h2",{id:"paso-1-genere-su-proyecto-ios"},"PASO 1. Genere su proyecto iOS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Si no ha construido su proyecto, vaya al paso 2."),(0,a.kt)("li",{parentName:"ul"},"Si ya ha construido su proyecto, vaya al paso 3.")),(0,a.kt)("h2",{id:"paso-2-cree-su-proyecto"},"PASO 2. Cree su proyecto"),(0,a.kt)("p",null,"En la pesta\xf1a BUILD del Editor de proyectos:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Seleccione el dispositivo a utilizar como Simulador haciendo clic en el bot\xf3n del dispositivo."),(0,a.kt)("li",{parentName:"ul"},"Haga clic en el bot\xf3n ",(0,a.kt)("strong",{parentName:"li"},"Crear y ejecutar"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Build and Run",src:o(75789).Z,width:"768",height:"739"})),(0,a.kt)("h2",{id:"paso-3-abra-su-proyecto-con-xcode"},"PASO 3. Abra su proyecto con Xcode"),(0,a.kt)("p",null,"En la pesta\xf1a BUILD del Editor de proyectos:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Haga clic en Proyecto > Abrir el proyecto con Xcode")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Abra su proyecto con Xcode",src:o(68766).Z,width:"1033",height:"994"})),(0,a.kt)("p",null,"Ahora est\xe1 listo para empezar a trabajar en su proyecto 4D for iOS en Xcode."))}u.isMDXComponent=!0},3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(o),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||n;return o?r.createElement(y,i(i({ref:t},p),{},{components:o})):r.createElement(y,i({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<n;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},68766:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-6fbba90ad139fdb4bc2e436c061c0106.png"},75789:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/build-and-run-dfc802f164eab0d00808ff57bd0e3c3c.png"}}]);