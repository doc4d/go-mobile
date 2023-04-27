"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2862],{69408:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var a=o(87462),r=(o(67294),o(3905));const n={id:"one-to-many-relations",title:"One to Many relations"},i=void 0,s={unversionedId:"tutorials/relations/one-to-many-relations",id:"version-20/tutorials/relations/one-to-many-relations",title:"One to Many relations",description:"Este tutorial vai mostrar como \xe9 f\xe1cil incluir rela\xe7\xf5es Um para Muitos em seu projeto m\xf3vel.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/tutorials/relations/one-to-many-relations.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-relations",permalink:"/go-mobile/pt/docs/tutorials/relations/one-to-many-relations",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-20/tutorials/relations/one-to-many-relations.md",tags:[],version:"20",frontMatter:{id:"one-to-many-relations",title:"One to Many relations"},sidebar:"tutorials",previous:{title:"Many to One relations",permalink:"/go-mobile/pt/docs/tutorials/relations/many-to-one-relations"},next:{title:"Um para Muitos - Defini\xe7\xe3o de T\xedtulo",permalink:"/go-mobile/pt/docs/tutorials/relations/one-to-many-title-definition"}},l={},u=[{value:"Structure section",id:"structure-section",level:2},{value:"Labels &amp; Icons section",id:"labels--icons-section",level:2},{value:"Forms section",id:"forms-section",level:2},{value:"Build and Run",id:"build-and-run",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Este tutorial vai mostrar como \xe9 f\xe1cil incluir rela\xe7\xf5es Um para Muitos em seu projeto m\xf3vel."),(0,r.kt)("p",null,"Vamos come\xe7ar baixando o Projeto Starter:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyRelations/archive/c006015afeb0e134d872152f53b8cd5e4dcb59bb.zip"},"Starter project")),(0,r.kt)("p",null,"Neste tutorial, vamos construir um ",(0,r.kt)("strong",{parentName:"p"},"Task app")," colorido usando 4D for iOS."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Task App Final result",src:o(39764).Z,width:"650",height:"650"})),(0,r.kt)("p",null,"Mas primeiro, vamos olhar a estrutura de nosso banco de dados:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select link from structure section",src:o(31194).Z,width:"2152",height:"1666"})),(0,r.kt)("p",null,"Como pode ver, h\xe1 um link  One to Many chamado ",(0,r.kt)("strong",{parentName:"p"},"tasks")," que vamos usar em nosso iOS app para exibir as tasks/tarefas(",(0,r.kt)("strong",{parentName:"p"},"to Many"),").dos funcion\xe1rios'(",(0,r.kt)("strong",{parentName:"p"},"One"),")"),(0,r.kt)("p",null,"Agora v\xe1 direto para o menu Open > Mobile project... selecione ",(0,r.kt)("em",{parentName:"p"},"Time Keeper")," e v\xe1 para a se\xe7\xe3o  ",(0,r.kt)("strong",{parentName:"p"},"Structure"),"."),(0,r.kt)("h2",{id:"structure-section"},"Structure section"),(0,r.kt)("p",null,"Pode ver a ",(0,r.kt)("strong",{parentName:"p"},"rela\xe7\xe3o de tasks/tarefas")," que vimos antes... Publique!"),(0,r.kt)("p",null,"Agora isso vai operar como qualquer outro campo pelo resto do processo de cria\xe7\xe3o do app."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Structure section Relations properties",src:o(41522).Z,width:"2164",height:"1988"})),(0,r.kt)("p",null,":::dica"),(0,r.kt)("p",null,"Quando passar o mouse over, uma dica exibe o nome de tabela originando a rela\xe7\xe3o."),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"labels--icons-section"},"Labels & Icons section"),(0,r.kt)("p",null,"A rela\xe7\xe3o Um para Muitos est\xe1 agora dispon\xedvel na se\xe7\xe3o ",(0,r.kt)("strong",{parentName:"p"},"Etiquetas e \xeccones"),"."),(0,r.kt)("p",null,"\xc9 importante saber que incluindo uma rela\xe7\xe3o Um para Muitos vai criar um bot\xe3o no app iOS gerado."),(0,r.kt)("p",null,"Ent\xe3o, na se\xe7\xe3o Etiquetas & Icones voc\xea vai definir:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"um bot\xe3o Etiqueta"),(0,r.kt)("li",{parentName:"ul"},"um bot\xe3o \xedcone"),(0,r.kt)("li",{parentName:"ul"},"um t\xedtulo ser\xe1 exibido na vista de destino (para indicar de onde vem, por exemplo).")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Labels &amp; Icons section Relations properties",src:o(61422).Z,width:"2164",height:"1988"})),(0,r.kt)("h2",{id:"forms-section"},"Forms section"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"V\xe1 para a se\xe7\xe3o Formul\xe1rios e solte a rela\xe7\xe3o ",(0,r.kt)("em",{parentName:"li"},"tasks")," no formul\xe1rio detalhado Employee Task.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Related field in Forms section",src:o(74081).Z,width:"2164",height:"1988"})),(0,r.kt)("h2",{id:"build-and-run"},"Build and Run"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Do formul\xe1rio Employee List, clique em um empregado."),(0,r.kt)("li",{parentName:"ol"},"Isso vai abrir o formul\xe1rio detalhado employee/empregados, onde voc\xea ver\xe1 um novo bot\xe3o ",(0,r.kt)("strong",{parentName:"li"},"Relation")," !"),(0,r.kt)("li",{parentName:"ol"},"Clique no bot\xe3o Relation para exibir as tarefas dos funcion\xe1rios")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Related field in Forms section",src:o(95553).Z,width:"2268",height:"992"})),(0,r.kt)("p",null,"Muito bem!  Voc\xea incluiu com sucesso as rela\xe7\xf5es Um a Muitos em seu projeto m\xf3vel."),(0,r.kt)("p",null,"Baixe o projeto terminado:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyRelations/releases/latest/download/tutorial-OneToManyRelations.zip"},"Baixar")))}p.isMDXComponent=!0},3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(o),d=r,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||n;return o?a.createElement(b,i(i({ref:t},c),{},{components:o})):a.createElement(b,i({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<n;u++)i[u]=o[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},74081:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/1-to-n-relations-forms-section-eaaf6fc4d1b5e4abc4bdc7b233c9e46b.png"},39764:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/4D-for-iOS-dark-mode-card-relation-ios-13-ae79febdfa2739db76aeec303329d6d2.gif"},31194:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Database-1-to-N-relations-4D-for-iOS-e367b692bf24073c368caea6ea463222.png"},95553:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/One-to-n-relations-task-ios-app-e63bb9be3b7cefc054e93c719581324d.png"},61422:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Relations-properties-Labels-icons-section-4D-for-iOS-af246bee86dd0780f38c6c51f7c1cc71.png"},41522:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Structure-section-relations-4D-for-iOS-5d5469663dad4dff95bedeb54f577eb5.png"}}]);