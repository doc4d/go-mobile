"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[809],{38715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=r(87462),a=(r(67294),r(3905));const n={id:"from-xcode",title:"A partir de Xcode"},i=void 0,l={unversionedId:"debug/from-xcode",id:"version-19-R2/debug/from-xcode",title:"A partir de Xcode",description:"Se tiver problemas durante o processo de compila\xe7\xe3o pode abrir seu projeto gerado com Xcode selecionando a op\xe7\xe3o Open the product with Xcode a partir do menu Project.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R2/debug/from-xcode.md",sourceDirName:"debug",slug:"/debug/from-xcode",permalink:"/go-mobile/pt/docs/19-R2/debug/from-xcode",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/debug/from-xcode.md",tags:[],version:"19-R2",frontMatter:{id:"from-xcode",title:"A partir de Xcode"},sidebar:"version-19-R2/docs",previous:{title:"A partir do editor de projeto",permalink:"/go-mobile/pt/docs/19-R2/debug/from-project-editor"},next:{title:"Desde seu iPhone",permalink:"/go-mobile/pt/docs/19-R2/debug/from-iphone"}},s={},p=[{value:"Logger (registrador)",id:"logger-registrador",level:2},{value:"N\xedveis",id:"n\xedveis",level:2},{value:"Formato",id:"formato",level:2},{value:"Emoticons",id:"emoticons",level:3},{value:"C\xedrculos",id:"c\xedrculos",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Se tiver problemas durante o processo de compila\xe7\xe3o pode abrir seu projeto gerado com Xcode selecionando a op\xe7\xe3o ",(0,a.kt)("strong",{parentName:"p"},"Open the product with Xcode")," a partir do menu ",(0,a.kt)("strong",{parentName:"p"},"Project"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Abrir o projeto com Xcode",src:r(43084).Z,width:"2164",height:"1988"})),(0,a.kt)("p",null,"A partir da\xed \xe9 poss\xedvel ",(0,a.kt)("strong",{parentName:"p"},"lan\xe7ar sua aplica\xe7\xe3o")," no Simulator clicando no bot\xe3o ",(0,a.kt)("strong",{parentName:"p"},"Build")," e obter todo o hist\xf3rico no fundo do espa\xe7o de trabalho de Xcode."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hist\xf3ricos de Xcode",src:r(70559).Z,width:"2502",height:"2144"})),(0,a.kt)("h2",{id:"logger-registrador"},"Logger (registrador)"),(0,a.kt)("p",null,"Um logger \xe9 um objeto que permite registrar o log e rastrear."),(0,a.kt)("p",null,"Para isso usamos ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DaveWoodCom/XCGLogger"},"XCGLogger")," ."),(0,a.kt)("p",null,"Vai encontrar a defini\xe7\xe3o dos par\xe2metros do logger em  Xcode project/Settings/Settings.plist."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hist\xf3ricos de Xcode",src:r(67587).Z,width:"2414",height:"1410"})),(0,a.kt)("h2",{id:"n\xedveis"},"N\xedveis"),(0,a.kt)("p",null,"Pode filtrar e exibir diferentes n\xedveis do log em seu console, adicionando o log.level em seu arquivo Settings.plist."),(0,a.kt)("p",null,"Para fazer isso, adicione uma folha dando um clique direito dentro do arquivo Settings.plist e entre:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"log.level como Key"),(0,a.kt)("li",{parentName:"ul"},"Number como Type"),(0,a.kt)("li",{parentName:"ul"},"3 como Value (por exemplo)")),(0,a.kt)("p",null,"Os ",(0,a.kt)("strong",{parentName:"p"},"valores dispon\xedveis")," s\xe3o os abaixo:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0 para verbose"),(0,a.kt)("li",{parentName:"ul"},"1 para debug"),(0,a.kt)("li",{parentName:"ul"},"2 para info (valor normal)"),(0,a.kt)("li",{parentName:"ul"},"3 aviso"),(0,a.kt)("li",{parentName:"ul"},"4 erro"),(0,a.kt)("li",{parentName:"ul"},"5 severo")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"N\xedvel do hist\xf3rico",src:r(73983).Z,width:"2414",height:"1410"})),(0,a.kt)("p",null,"Para este exemplo, se estabelecer o valor de log.level para 3, vai obter ",(0,a.kt)("strong",{parentName:"p"},"um aviso, um erro e severidade")," no console  Xcode."),(0,a.kt)("h2",{id:"formato"},"Formato"),(0,a.kt)("p",null,"Pode exibir indicadores visuais diferentes no console Xcode para ",(0,a.kt)("strong",{parentName:"p"},"ressaltar diferentes tipos de log"),"."),(0,a.kt)("p",null,"Para fazer isso, precisa abrir  Xcode project/Settings/Settings.plist"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Formato do hist\xf3rico",src:r(54335).Z,width:"2414",height:"1410"})),(0,a.kt)("h3",{id:"emoticons"},"Emoticons"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\uddef"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd39"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u2139\ufe0f"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u26a0\ufe0f"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\u203c\ufe0f"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\ud83d\udca3"')),(0,a.kt)("h3",{id:"c\xedrculos"},"C\xedrculos"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\udd18"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd35"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u26aa"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u2622\ufe0f"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\ud83d\udd34"'),(0,a.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\u26ab"')))}c.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||n;return r?o.createElement(g,i(i({ref:t},d),{},{components:r})):o.createElement(g,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},70559:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Xcode-logs-4da61f66a49075bae70d8c27efe6ef2a.png"},54335:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/log-format-7a7bc7d581178f8d8d371706475c114d.png"},73983:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/log-level-0ec5cad4a8177259b8dfd0f2653d6ce7.png"},43084:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/open-project-Xcode-ed49be9ed186268dd01df3b4562d2092.png"},67587:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/settings-plist-xcode-e29ce6df5f7917d95a1728d11874fd22.png"}}]);