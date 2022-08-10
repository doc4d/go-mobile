"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8147],{67567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={id:"one-to-many-title-definition",title:"Uno a Muchos - T\xedtulo"},i=void 0,l={unversionedId:"tutorials/relations/one-to-many-title-definition",id:"tutorials/relations/one-to-many-title-definition",title:"Uno a Muchos - T\xedtulo",description:"Definir un t\xedtulo para sus vistas de destino",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/relations/one-to-many-title-definition.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-title-definition",permalink:"/es/next/tutorials/relations/one-to-many-title-definition",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/relations/one-to-many-title-definition.md",tags:[],version:"current",frontMatter:{id:"one-to-many-title-definition",title:"Uno a Muchos - T\xedtulo"},sidebar:"tutorials",previous:{title:"One to Many relations",permalink:"/es/next/tutorials/relations/one-to-many-relations"},next:{title:"Uno a Muchos - Bot\xf3n personalizado",permalink:"/es/next/tutorials/relations/one-to-many-custom-button"}},s={},u=[{value:"Definir un t\xedtulo para sus vistas de destino",id:"definir-un-t\xedtulo-para-sus-vistas-de-destino",level:3}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"definir-un-t\xedtulo-para-sus-vistas-de-destino"},"Definir un t\xedtulo para sus vistas de destino"),(0,o.kt)("p",null,"Para realizar un seguimiento de la vista de la que proviene en su aplicaci\xf3n, 4D for iOS le permite definir un T\xedtulo personalizado."),(0,o.kt)("p",null,"En este tutorial, utilizaremos el siguiente proyecto:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyTitleDefinition/archive/4b831959e7efe4777071af0b2904d458918cfbc2.zip"},"Starter project")),(0,o.kt)("p",null,"Ahora, vaya directamente al ",(0,o.kt)("strong",{parentName:"p"},"men\xfa Abrir > Proyecto m\xf3vil..."),", seleccione ",(0,o.kt)("em",{parentName:"p"},"Time Keeper")," y vaya a la secci\xf3n ",(0,o.kt)("strong",{parentName:"p"},"Etiquetas e iconos"),"."),(0,o.kt)("p",null,"Desde aqu\xed, abra la pesta\xf1a de relaci\xf3n para definir el t\xedtulo de relaci\xf3n ",(0,o.kt)("em",{parentName:"p"},"tasks")," e ingrese la siguiente l\xednea en la columna ",(0,o.kt)("strong",{parentName:"p"},"Titles"),":",(0,o.kt)("inlineCode",{parentName:"p"},"%Name% tasks")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Labels &amp; Icons relation title",src:n(41144).Z,width:"2164",height:"1988"})),(0,o.kt)("p",null,"Como habr\xe1 adivinado, esto le permitir\xe1 mostrar el ",(0,o.kt)("strong",{parentName:"p"},"valor del nombre del empleado")," en la vista de destino, en funci\xf3n del formulario detallado Employee en el que estaba anteriormente."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Labels &amp; Icons relation title",src:n(80659).Z,width:"1701",height:"992"})),(0,o.kt)("p",null,"Esta es una excelente manera de hacer un seguimiento de la vista de donde viene."),(0,o.kt)("p",null,"\xa1Ahora veamos c\xf3mo puede crear y agregar su propio bot\xf3n Relation en el pr\xf3ximo tutorial!"))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41144:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/labels-icons-title-definition-01f641a8df96a63d357603ee2168c179.png"},80659:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/relations-title-definition-985f72bcde6d7ae39dad21fdee77eee5.png"}}]);