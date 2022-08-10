"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8292],{57054:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={id:"many-to-one-relations",title:"Many to One relations"},l=void 0,i={unversionedId:"tutorials/relations/many-to-one-relations",id:"tutorials/relations/many-to-one-relations",title:"Many to One relations",description:"Este tutorial le mostrar\xe1 lo f\xe1cil que puede ser incluir relaciones Muchos a uno en proyectos m\xf3viles.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/relations/many-to-one-relations.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/many-to-one-relations",permalink:"/es/docs/next/tutorials/relations/many-to-one-relations",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/relations/many-to-one-relations.md",tags:[],version:"current",frontMatter:{id:"many-to-one-relations",title:"Many to One relations"},sidebar:"tutorials",previous:{title:"Utilizar par\xe1metros de acci\xf3n",permalink:"/es/docs/next/tutorials/actions/using-action-parameters"},next:{title:"One to Many relations",permalink:"/es/docs/next/tutorials/relations/one-to-many-relations"}},s={},c=[{value:"Structure section",id:"structure-section",level:3}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Este tutorial le mostrar\xe1 lo f\xe1cil que puede ser incluir relaciones Muchos a uno en proyectos m\xf3viles."),(0,n.kt)("p",null,":::nota"),(0,n.kt)("p",null,"En este tutorial, utilizaremos los nombres de las relaciones entre sus tablas. Dar nombres de enlaces descriptivos, puede facilitar la definici\xf3n de la estructura de su proyecto."),(0,n.kt)("p",null,":::"),(0,n.kt)("p",null,"Comencemos descargando el proyecto Starter:"),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ManyToOneRelations/releases/latest/download/tutorial-ManyToOneRelations.zip"},"Starter project")),(0,n.kt)("p",null,"Aqu\xed queremos mostrar la categor\xeda de cada tarea en el formulario detallado de su aplicaci\xf3n generada. Para ello, abra el ",(0,n.kt)("strong",{parentName:"p"},"StarteriOSProject")," desde ",(0,n.kt)("strong",{parentName:"p"},"Open > Mobile Project...")),(0,n.kt)("p",null,"Luego dir\xedjase a la secci\xf3n Structure y seleccione la ",(0,n.kt)("strong",{parentName:"p"},"tabla Task "),"."),(0,n.kt)("h3",{id:"structure-section"},"Structure section"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Puede constatar que el ",(0,n.kt)("strong",{parentName:"p"},"enlace TaskCategory")," est\xe1 subrayado")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Al hacer clic en \xe9l, se mostrar\xe1n los campos disponibles a trav\xe9s de esta relaci\xf3n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Seleccione el ",(0,n.kt)("strong",{parentName:"p"},"campo Name")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Select link from structure section",src:a(54223).Z,width:"2164",height:"1988"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Este campo funcionar\xe1 como cualquier otro campo durante el resto del proceso de creaci\xf3n de la aplicaci\xf3n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Tambi\xe9n puede filtrar el contenido de su aplicaci\xf3n utilizando campos relacionados, de la secci\xf3n Datos. Para ello, introduzca ",(0,n.kt)("inlineCode",{parentName:"p"},"TaskCategory.Name != 'Personal'")," en el campo Filter query para excluir las tareas personales."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Related field in Forms section",src:a(84658).Z,width:"2164",height:"1988"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Luego puede seleccionar un ",(0,n.kt)("strong",{parentName:"p"},"\xedcono")," y los ",(0,n.kt)("strong",{parentName:"p"},"formatos")," y definir las ",(0,n.kt)("strong",{parentName:"p"},"etiquetas cortas y largas")," en la secci\xf3n Etiquetas e iconos"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Related field from Labels and Icons section",src:a(91913).Z,width:"2164",height:"1988"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Vaya a la secci\xf3n Formularios y arrastre el campo en el formulario detallado Tasks")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Related field in Forms section",src:a(90934).Z,width:"2164",height:"1988"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Build and Run")),(0,n.kt)("p",null,"\xa1Su campo relacionado debe aparecer en el formulario detallado de su aplicaci\xf3n!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Related field in Forms section",src:a(93889).Z,width:"1559",height:"907"})))}p.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(f,l(l({ref:t},u),{},{components:a})):r.createElement(f,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},84658:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Related-field-from-Data-section-40a554492d0efaec1c01d14eebcd16e0.png"},93889:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/final-result-n-to-one-relations-181faceaf2f07d2456ffcded59f38a74.png"},90934:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/related-field-forms-53c7c33a25cc1d3a62987ca4c5b6f8a5.png"},91913:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/related-field-from-labels-icons-a6d37898709ae00fd0b014d6c81f464c.png"},54223:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/select-link-from-structure-c36a9e632997ff99d1eec350fa485a8e.png"}}]);