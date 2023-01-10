"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1686],{91538:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var l=t(87462),n=(t(67294),t(3905));const i={id:"adding-actions-template",title:"A\xf1adir acciones a las plantillas"},r=void 0,s={unversionedId:"tutorials/actions/adding-actions-template",id:"version-19-R7/tutorials/actions/adding-actions-template",title:"A\xf1adir acciones a las plantillas",description:"OBJETIVOS",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/tutorials/actions/adding-actions-template.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/adding-actions-template",permalink:"/go-mobile/es/docs/19-R7/tutorials/actions/adding-actions-template",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R7/tutorials/actions/adding-actions-template.md",tags:[],version:"19-R7",frontMatter:{id:"adding-actions-template",title:"A\xf1adir acciones a las plantillas"},sidebar:"tutorials",previous:{title:"Definir una primera acci\xf3n",permalink:"/go-mobile/es/docs/19-R7/tutorials/actions/define-first-action"},next:{title:"Utilizar par\xe1metros de acci\xf3n",permalink:"/go-mobile/es/docs/19-R7/tutorials/actions/using-action-parameters"}},o={},c=[{value:"PASO 1. Descargue el proyecto Starter",id:"paso-1-descargue-el-proyecto-starter",level:2},{value:"PASO 2. Agregar plantillas personalizadas al proyecto 4D for iOS",id:"paso-2-agregar-plantillas-personalizadas-al-proyecto-4d-for-ios",level:2},{value:"PASO 3. A\xf1adir las acciones en los formularios Lista",id:"paso-3-a\xf1adir-las-acciones-en-los-formularios-lista",level:2},{value:"A\xf1adir las acciones a la plantilla personalizada TasksList",id:"a\xf1adir-las-acciones-a-la-plantilla-personalizada-taskslist",level:3},{value:"A. A\xf1adir un Tag de acci\xf3n de tabla",id:"a-a\xf1adir-un-tag-de-acci\xf3n-de-tabla",level:4},{value:"B. A\xf1adir un Tag de acci\xf3n de entidad",id:"b-a\xf1adir-un-tag-de-acci\xf3n-de-entidad",level:4},{value:"A\xf1adir las acciones a la plantilla personalizada TasksCollection",id:"a\xf1adir-las-acciones-a-la-plantilla-personalizada-taskscollection",level:3},{value:"A. A\xf1adir un Tag de acci\xf3n de tabla",id:"a-a\xf1adir-un-tag-de-acci\xf3n-de-tabla-1",level:4},{value:"B. A\xf1adir un Tag de acci\xf3n de entidad",id:"b-a\xf1adir-un-tag-de-acci\xf3n-de-entidad-1",level:4},{value:"PASO 4. A\xf1adir las acciones en los formularios detallados",id:"paso-4-a\xf1adir-las-acciones-en-los-formularios-detallados",level:2}],d={toc:c};function p(e){let{components:a,...i}=e;return(0,n.kt)("wrapper",(0,l.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,n.kt)("p",{parentName:"blockquote"},"Agregue acciones a plantillas de formularios de Lista y formularios detallados.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"REQUISITOS PREVIOS")),(0,n.kt)("p",{parentName:"blockquote"},"Click ",(0,n.kt)("inlineCode",{parentName:"p"},"[here](requirements.html)")," to see what you'll need to get started!")),(0,n.kt)("p",null,"En este tutorial, veremos lo f\xe1cil que puede ser ",(0,n.kt)("strong",{parentName:"p"},"agregar acciones a plantillas personalizadas"),"."),(0,n.kt)("h2",{id:"paso-1-descargue-el-proyecto-starter"},"PASO 1. Descargue el proyecto Starter"),(0,n.kt)("p",null,"Para comenzar, descargue el ",(0,n.kt)("strong",{parentName:"p"},"proyecto Starter"),", que incluye:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"dos plantillas de formularios Lista personalizadas (TasksList y TasksCollection)"),(0,n.kt)("li",{parentName:"ul"},"una plantilla de formulario detallado personalizada (TasksDetail)"),(0,n.kt)("li",{parentName:"ul"},"un archivo Tasks.4dbase")),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{class:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/archive/1dc5aecfbea62a9999d571cb1a956f1ef6983111.zip"},"Descargar")),(0,n.kt)("h2",{id:"paso-2-agregar-plantillas-personalizadas-al-proyecto-4d-for-ios"},"PASO 2. Agregar plantillas personalizadas al proyecto 4D for iOS"),(0,n.kt)("p",null,"Primero, suelte:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"las carpetas de plantillas ",(0,n.kt)("strong",{parentName:"li"},"TasksList")," y ",(0,n.kt)("strong",{parentName:"li"},"TasksCollection")," en la carpeta ",(0,n.kt)("em",{parentName:"li"},"Tasks.4dbase/Resources/Mobile/form/list"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Listform templates",src:t(23126).Z,width:"2274",height:"734"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"las carpetas del modelo ",(0,n.kt)("strong",{parentName:"li"},"TasksDetail")," en ",(0,n.kt)("em",{parentName:"li"},"Tasks.4dbase/Resources/Mobile/form/detail folder"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Detailform template",src:t(57578).Z,width:"2274",height:"734"})),(0,n.kt)("h2",{id:"paso-3-a\xf1adir-las-acciones-en-los-formularios-lista"},"PASO 3. A\xf1adir las acciones en los formularios Lista"),(0,n.kt)("p",null,"Hay dos tipos de acciones disponibles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"acciones tabla"),(0,n.kt)("li",{parentName:"ul"},"acciones entidad")),(0,n.kt)("p",null,"Primero abramos el archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"list/TasksList/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard"),"."),(0,n.kt)("h3",{id:"a\xf1adir-las-acciones-a-la-plantilla-personalizada-taskslist"},"A\xf1adir las acciones a la plantilla personalizada TasksList"),(0,n.kt)("h4",{id:"a-a\xf1adir-un-tag-de-acci\xf3n-de-tabla"},"A. A\xf1adir un Tag de acci\xf3n de tabla"),(0,n.kt)("p",null,"Seleccione el ",(0,n.kt)("strong",{parentName:"p"},"List form Controller")," y a\xf1ada esta l\xednea en el ",(0,n.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Key Path: ",(0,n.kt)("inlineCode",{parentName:"li"},"actions")),(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"String")),(0,n.kt)("li",{parentName:"ul"},"Value: ",(0,n.kt)("inlineCode",{parentName:"li"},"___TABLE_ACTIONS___"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add table action tag",src:t(31213).Z,width:"2530",height:"1932"})),(0,n.kt)("h4",{id:"b-a\xf1adir-un-tag-de-acci\xf3n-de-entidad"},"B. A\xf1adir un Tag de acci\xf3n de entidad"),(0,n.kt)("p",null,"Seleccione la vista Animatable Table y a\xf1ada esta l\xednea en el ",(0,n.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Key Path: ",(0,n.kt)("inlineCode",{parentName:"li"},"actions")),(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"String")),(0,n.kt)("li",{parentName:"ul"},"Value: ",(0,n.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add entity action tag",src:t(34025).Z,width:"2530",height:"1932"})),(0,n.kt)("p",null,"\xa1Su plantilla personalizada est\xe1 lista para mostrar las acciones!"),(0,n.kt)("p",null,"Puede seleccionar la plantilla personalizada TaskList en la ",(0,n.kt)("strong",{parentName:"p"},"secci\xf3n Formularios")," y agregar los siguientes campos:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Taskslist Forms section",src:t(83359).Z,width:"2164",height:"1988"})),(0,n.kt)("p",null,"Ahora agreguemos las etiquetas de acci\xf3n a la plantilla personalizada TasksCollection"),(0,n.kt)("h3",{id:"a\xf1adir-las-acciones-a-la-plantilla-personalizada-taskscollection"},"A\xf1adir las acciones a la plantilla personalizada TasksCollection"),(0,n.kt)("p",null,"Para hacerlo, abra el archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"list/TasksCollection/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard"),"."),(0,n.kt)("h4",{id:"a-a\xf1adir-un-tag-de-acci\xf3n-de-tabla-1"},"A. A\xf1adir un Tag de acci\xf3n de tabla"),(0,n.kt)("p",null,"El proceso es bastante similar al proceso de la plantilla personalizada TasksList."),(0,n.kt)("p",null,"Seleccione el ",(0,n.kt)("strong",{parentName:"p"},"List form Controller")," y a\xf1ada esta l\xednea en el ",(0,n.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Key Path: ",(0,n.kt)("inlineCode",{parentName:"li"},"actions")),(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"String")),(0,n.kt)("li",{parentName:"ul"},"Value: ",(0,n.kt)("inlineCode",{parentName:"li"},"___TABLE_ACTIONS___"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add collection table action tag",src:t(80510).Z,width:"2530",height:"1932"})),(0,n.kt)("h4",{id:"b-a\xf1adir-un-tag-de-acci\xf3n-de-entidad-1"},"B. A\xf1adir un Tag de acci\xf3n de entidad"),(0,n.kt)("p",null,"Para las entidades, la forma de mostrar las acciones es bastante diferente de TableView: la acci\xf3n de deslizar no est\xe1 realmente adaptada a CollectionViews."),(0,n.kt)("p",null,"Entonces, con las vistas de colecci\xf3n, la mejor manera de mostrar las acciones es utilizar un gesto de ",(0,n.kt)("strong",{parentName:"p"},"presi\xf3n largo")," en las celdas con las que desea interactuar."),(0,n.kt)("p",null,"Para eso, seleccione la celda collectionView y agregue esta l\xednea en el ",(0,n.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Key Path: ",(0,n.kt)("inlineCode",{parentName:"li"},"actions")),(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"String")),(0,n.kt)("li",{parentName:"ul"},"Value: ",(0,n.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add collection entity action tag",src:t(61178).Z,width:"2530",height:"1932"})),(0,n.kt)("p",null,"Para optimizar la interacci\xf3n, puede agregar un efecto escalar con una retroalimentaci\xf3n h\xe1ptica agregando la siguiente l\xednea en el ",(0,n.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Key Path: ",(0,n.kt)("inlineCode",{parentName:"li"},"touch.zoomScale")),(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"Number")),(0,n.kt)("li",{parentName:"ul"},"Value: ",(0,n.kt)("inlineCode",{parentName:"li"},"0,96")," (adapte la relaci\xf3n de escala seg\xfan el resultado que desee obtener)")),(0,n.kt)("p",null,"Puede seleccionar la plantilla personalizada TasksCollection en la ",(0,n.kt)("strong",{parentName:"p"},"secci\xf3n Formularios")," y agregar los siguientes campos:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"TasksCollection Forms section",src:t(89619).Z,width:"2164",height:"1988"})),(0,n.kt)("h2",{id:"paso-4-a\xf1adir-las-acciones-en-los-formularios-detallados"},"PASO 4. A\xf1adir las acciones en los formularios detallados"),(0,n.kt)("p",null,"En los formularios detallados, puede utilizar el ",(0,n.kt)("strong",{parentName:"p"},"bot\xf3n gen\xe9rico")," en la barra de navegaci\xf3n o ",(0,n.kt)("strong",{parentName:"p"},"crear f\xe1cilmente su propio bot\xf3n de acci\xf3n personalizado"),". En ambos casos, debe agregar etiquetas."),(0,n.kt)("p",null,"Para el bot\xf3n gen\xe9rico integrado en la barra de navegaci\xf3n, seleccione el Controlador y a\xf1ada esta l\xednea en el ",(0,n.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Key Path: ",(0,n.kt)("inlineCode",{parentName:"li"},"actions")),(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"String")),(0,n.kt)("li",{parentName:"ul"},"Value: ",(0,n.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add detailform entity action tag",src:t(8525).Z,width:"2530",height:"1932"})),(0,n.kt)("p",null,"En nuestro tutorial, queremos crear nuestro propio bot\xf3n gen\xe9rico. Para eso, abra el archivo Storyboard ",(0,n.kt)("inlineCode",{parentName:"p"},"detail/TasksDetail/Sources/Forms/Tables/___TABLE___/___TABLE___DetailsForm.storyboard"),"."),(0,n.kt)("p",null,"\xc1bralo, seleccione el bot\xf3n en la parte inferior derecha y agregue esta l\xednea en el ",(0,n.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Key Path: ",(0,n.kt)("inlineCode",{parentName:"li"},"actions")),(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"String")),(0,n.kt)("li",{parentName:"ul"},"Value: ",(0,n.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add detailform entity action tag custom action button",src:t(79868).Z,width:"2530",height:"1932"})),(0,n.kt)("p",null,"Como puede ver, faltan algunos botones visuales en el archivo Storyboard. Puede encontrar esas im\xe1genes en la plantilla ",(0,n.kt)("strong",{parentName:"p"},"carpeta Resources"),". Se incluir\xe1n en el proyecto durante el proceso de generaci\xf3n."),(0,n.kt)("p",null,"Por ejemplo, para el ",(0,n.kt)("strong",{parentName:"p"},"moreButton.imageset"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Template ressources",src:t(8156).Z,width:"1522",height:"766"})),(0,n.kt)("p",null,"Puede seleccionar la plantilla personalizada TasksDetail en la ",(0,n.kt)("strong",{parentName:"p"},"secci\xf3n Formularios")," y agregar los siguientes campos:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"TasksDetail Forms section",src:t(3812).Z,width:"2164",height:"1988"})),(0,n.kt)("p",null,"\xa1Felicitaciones!, su aplicaci\xf3n iOS Tasks ahora est\xe1 completa e incluye acciones en los formularios Lista y detallados."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Template ressources",src:t(65385).Z,width:"1559",height:"907"})),(0,n.kt)("p",null,"Descargar el proyecto terminado:"),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/releases/latest/download/tutorial-AddingActionToTemplates.zip"},"Descargar")))}p.isMDXComponent=!0},3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var l=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=l.createContext({}),c=function(e){var a=l.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=c(e.components);return l.createElement(o.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},u=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=n,k=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return t?l.createElement(k,r(r({ref:a},d),{},{components:t})):l.createElement(k,r({ref:a},d))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},61178:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/Add-collection-entity-tag-taskslist-3f04e0602db0b304b72fb6ccfcb19b4e.png"},80510:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/Add-collection-table-tag-taskslist-36f6728e233cbadd86070781b08e978b.png"},34025:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/Add-entity-tag-taskslist-f451a9760f86a118e99afc27fc80edf3.png"},31213:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/Add-table-tag-taskslist-8d2cbcb005e17c5e11ebc6fad5c21655.png"},79868:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/Detail-form-action-custom-action-Button-dce7734160980e4471815a31dde1720e.png"},8525:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/Detail-form-action-navigationBar-7ff5b86ac2040d091e2bc18a51d41c62.png"},57578:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/Detailform-template-12ade6ee5a4eb693cbf014faf59c56a5.png"},65385:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/ListForm-entity-action-tableview-c4ca8838892967fd5df82c8271e4090b.png"},23126:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/Listform-templates-09ed1c5a3ff901a807ff3ead04d0ada7.png"},8156:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/Template-Ressources-db10d9e26011ee4ab1652752eedb6b32.png"},3812:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/detailform-forms-section-8159e555c94e2e4d36da5d27329ec148.png"},89619:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/listform-taskscollection-forms-section-09fa057f109a221cd927c4c4496e308c.png"},83359:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/listform-taskslist-forms-section-c3786fcf5144780d2bc741888fd62dc1.png"}}]);