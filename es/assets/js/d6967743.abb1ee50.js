"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1979],{52966:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const n={id:"use-data-formatter",title:"Use formatters"},l=void 0,i={unversionedId:"tutorials/data-formatter/use-data-formatter",id:"version-20/tutorials/data-formatter/use-data-formatter",title:"Use formatters",description:"OBJETIVOS",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/tutorials/data-formatter/use-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/use-data-formatter",permalink:"/go-mobile/es/docs/tutorials/data-formatter/use-data-formatter",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-20/tutorials/data-formatter/use-formatter.md",tags:[],version:"20",frontMatter:{id:"use-data-formatter",title:"Use formatters"},sidebar:"tutorials",previous:{title:"Actualizar una plantilla",permalink:"/go-mobile/es/docs/tutorials/gallery/update-gallery-template"},next:{title:"Create a static formatter",permalink:"/go-mobile/es/docs/tutorials/data-formatter/create-static-data-formatter"}},s={},c=[{value:"Descargue el proyecto Starter",id:"descargue-el-proyecto-starter",level:2},{value:"Abrir un proyecto m\xf3vil",id:"abrir-un-proyecto-m\xf3vil",level:2},{value:"Crear y ejecutar su proyecto",id:"crear-y-ejecutar-su-proyecto",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,o.kt)("p",{parentName:"blockquote"},"Use built-in formatters.")),(0,o.kt)("p",null,"In this tutorial, we'll show you how to apply built-in ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/es/docs/project-definition/labels-and-icons#formatters"},"formatters")," to your fields."),(0,o.kt)("h2",{id:"descargue-el-proyecto-starter"},"Descargue el proyecto Starter"),(0,o.kt)("p",null,"Comencemos descargando el proyecto Starter:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-DataFormatter/releases/latest/download/tutorial-DataFormatter.zip"},"Descargar")),(0,o.kt)("h2",{id:"abrir-un-proyecto-m\xf3vil"},"Abrir un proyecto m\xf3vil"),(0,o.kt)("p",null,"Go to ",(0,o.kt)("strong",{parentName:"p"},"Labels & Icons")," in Sections, you'll see that a Formats column is available in the Field Properties area:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Data formatter labels icons",src:r(47622).Z,width:"1082",height:"994"})),(0,o.kt)("p",null,"From here, you can select specific formats depending on your needs. You can choose between ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/es/docs/project-definition/labels-and-icons#selecting-a-formatter"},"multiple built-in formats"),"."),(0,o.kt)("p",null,"Vamos a definir el campo Available Credit como Currency:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Available credit currency",src:r(15446).Z,width:"1082",height:"994"})),(0,o.kt)("p",null,"Hagamos el mismo proceso para todos los otros campos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Establezca el formato ",(0,o.kt)("strong",{parentName:"li"},"Currency $")," para el campo Current Balance"),(0,o.kt)("li",{parentName:"ul"},"Establezca el formato ",(0,o.kt)("strong",{parentName:"li"},"Porcentaje")," para el campo Percent Used"),(0,o.kt)("li",{parentName:"ul"},"Establezca el formato ",(0,o.kt)("strong",{parentName:"li"},"No o S\xed")," para el campo Credit Limit"),(0,o.kt)("li",{parentName:"ul"},"Defina el formato ",(0,o.kt)("strong",{parentName:"li"},"Fecha corta")," para el campo Credit Date")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select field formatters",src:r(83760).Z,width:"1082",height:"994"})),(0,o.kt)("h2",{id:"crear-y-ejecutar-su-proyecto"},"Crear y ejecutar su proyecto"),(0,o.kt)("p",null,'Aqu\xed est\xe1 el resultado final en su aplicaci\xf3n iOS con un formulario de lista de tareas "Task" y de un formulario detallado "Numbers".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Result data formatter iphone",src:r(49612).Z,width:"1417",height:"992"})),(0,o.kt)("p",null,"\xa1Listo! Your fields are well formatted according to its defined type in ",(0,o.kt)("strong",{parentName:"p"},"Labels & Icons"),"."))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||n;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15446:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/available-credit-currency-fa67ffaa458987fab0788afb0928fcc2.png"},47622:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/data-formatter-labels-icons-c079d865950c70ca0a5b92a05d3b0a8d.png"},49612:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/result-data-formatter-iphone-08af00b5a78df32dd0f7f19d5228cda5.png"},83760:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/select-field-formatters-41a9c6d67a78e82b6b4d736e5d171eb7.png"}}]);