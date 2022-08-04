"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2342],{69098:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={id:"filter-query-introduction",title:"Filter queries"},i=void 0,l={unversionedId:"tutorials/filter-queries/filter-query-introduction",id:"tutorials/filter-queries/filter-query-introduction",title:"Filter queries",description:"In this tutorial, we'll show how to create filter queries to display filtered content in the generated mobile app.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/filter-queries/filter-query-introduction.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/filter-query-introduction",permalink:"/go-mobile/es/docs/next/tutorials/filter-queries/filter-query-introduction",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/filter-queries/filter-query-introduction.md",tags:[],version:"current",frontMatter:{id:"filter-query-introduction",title:"Filter queries"},sidebar:"tutorials",previous:{title:"Create Kotlin formatter",permalink:"/go-mobile/es/docs/next/tutorials/data-formatter/create-kotlin-formatter"},next:{title:"Comencemos",permalink:"/go-mobile/es/docs/next/tutorials/actions/getting-started"}},s={},c=[{value:"Descargue el proyecto Starter",id:"descargue-el-proyecto-starter",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we'll show how to create ",(0,o.kt)("strong",{parentName:"p"},"filter queries")," to display filtered content in the generated mobile app."),(0,o.kt)("p",null,"Imagine que es un gestor de cuentas y quiere consultar sus contratos ",(0,o.kt)("em",{parentName:"p"},"En curso")," simplemente conect\xe1ndose a su aplicaci\xf3n con su direcci\xf3n de correo electr\xf3nico."),(0,o.kt)("p",null,"Primero, desde la secci\xf3n Datos definiremos un ",(0,o.kt)("strong",{parentName:"p"},"filtro de b\xfasqueda b\xe1sico")," para mostrar solo los contratos ",(0,o.kt)("em",{parentName:"p"},"En curso"),". Luego, vamos a aplicar un ",(0,o.kt)("strong",{parentName:"p"},"filtro basado en informaci\xf3n del usuario")," que depender\xe1 del correo electr\xf3nico del administrador de la cuenta."),(0,o.kt)("h2",{id:"descargue-el-proyecto-starter"},"Descargue el proyecto Starter"),(0,o.kt)("p",null,"Antes de comenzar, aseg\xfarese de descargar el ",(0,o.kt)("strong",{parentName:"p"},"proyecto Starter")," que incluye un archivo ",(0,o.kt)("strong",{parentName:"p"},"4DforiOSQueries.4dbase")," (una base de datos de demostraci\xf3n y un proyecto de aplicaci\xf3n m\xf3vil listo para usar)"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip"},"Starter project")),(0,o.kt)("p",null,"La base de datos incluye:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"La tabla CRM")," con todos los datos que queremos mostrar en la aplicaci\xf3n iOS generada"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"La tabla AccountManager")," con informaci\xf3n b\xe1sica sobre los administradores de cuentas (correo electr\xf3nico y nombre).")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CRM database",src:r(89570).Z,width:"2226",height:"1834"})),(0,o.kt)("p",null,"Ahora est\xe1 listo para definir su primera b\xfasqueda limitada."),(0,o.kt)("p",null,"Abra el proyecto m\xf3vil haciendo clic en Open > Mobile Project... y seleccione CRM app > ",(0,o.kt)("strong",{parentName:"p"},"project.4dmobileapp"),"."))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89570:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/CRMDatabase-1b6c6c0179884652d0b0bc4fbe7e0041.png"}}]);