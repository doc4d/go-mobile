"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8383],{25795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={id:"one-to-many-title-definition",title:"Uno a Muchos - T\xedtulo"},a=void 0,l={unversionedId:"tutorials/relations/one-to-many-title-definition",id:"version-19-R4/tutorials/relations/one-to-many-title-definition",title:"Uno a Muchos - T\xedtulo",description:"Definir un t\xedtulo para sus vistas de destino",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R4/tutorials/relations/one-to-many-title-definition.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-title-definition",permalink:"/go-mobile/es/docs/19-R4/tutorials/relations/one-to-many-title-definition",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/tutorials/relations/one-to-many-title-definition.md",tags:[],version:"19-R4",frontMatter:{id:"one-to-many-title-definition",title:"Uno a Muchos - T\xedtulo"},sidebar:"version-19-R4/tutorials",previous:{title:"One to Many relations",permalink:"/go-mobile/es/docs/19-R4/tutorials/relations/one-to-many-relations"},next:{title:"Uno a Muchos - Bot\xf3n personalizado",permalink:"/go-mobile/es/docs/19-R4/tutorials/relations/one-to-many-custom-button"}},s={},u=[{value:"Definir un t\xedtulo para sus vistas de destino",id:"definir-un-t\xedtulo-para-sus-vistas-de-destino",level:3}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"definir-un-t\xedtulo-para-sus-vistas-de-destino"},"Definir un t\xedtulo para sus vistas de destino"),(0,r.kt)("p",null,"Para realizar un seguimiento de la vista de la que proviene en su aplicaci\xf3n, 4D for iOS le permite definir un T\xedtulo personalizado."),(0,r.kt)("p",null,"En este tutorial, utilizaremos el siguiente proyecto:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyTitleDefinition/archive/4b831959e7efe4777071af0b2904d458918cfbc2.zip"},"Starter project")),(0,r.kt)("p",null,"Ahora, vaya directamente al ",(0,r.kt)("strong",{parentName:"p"},"men\xfa Abrir > Proyecto m\xf3vil..."),", seleccione ",(0,r.kt)("em",{parentName:"p"},"Time Keeper")," y vaya a la secci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Etiquetas e iconos"),"."),(0,r.kt)("p",null,"Desde aqu\xed, abra la pesta\xf1a de relaci\xf3n para definir el t\xedtulo de relaci\xf3n ",(0,r.kt)("em",{parentName:"p"},"tasks")," e ingrese la siguiente l\xednea en la columna ",(0,r.kt)("strong",{parentName:"p"},"Titles"),":",(0,r.kt)("inlineCode",{parentName:"p"},"%Name% tasks")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Labels &amp; Icons relation title",src:n(49343).Z,width:"2164",height:"1988"})),(0,r.kt)("p",null,"Como habr\xe1 adivinado, esto le permitir\xe1 mostrar el ",(0,r.kt)("strong",{parentName:"p"},"valor del nombre del empleado")," en la vista de destino, en funci\xf3n del formulario detallado Employee en el que estaba anteriormente."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Labels &amp; Icons relation title",src:n(22572).Z,width:"1701",height:"992"})),(0,r.kt)("p",null,"Esta es una excelente manera de hacer un seguimiento de la vista de donde viene."),(0,r.kt)("p",null,"\xa1Ahora veamos c\xf3mo puede crear y agregar su propio bot\xf3n Relation en el pr\xf3ximo tutorial!"))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49343:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/labels-icons-title-definition-01f641a8df96a63d357603ee2168c179.png"},22572:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/relations-title-definition-985f72bcde6d7ae39dad21fdee77eee5.png"}}]);