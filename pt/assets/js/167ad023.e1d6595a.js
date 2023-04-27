"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3774],{63198:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const i={id:"deep-linking",title:"Deep Linking"},r=void 0,l={unversionedId:"special-features/deep-linking",id:"version-20/special-features/deep-linking",title:"Deep Linking",description:"This feature is currently not available in 4D for Android.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/special-features/deep-linking.md",sourceDirName:"special-features",slug:"/special-features/deep-linking",permalink:"/go-mobile/pt/docs/special-features/deep-linking",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-20/special-features/deep-linking.md",tags:[],version:"20",frontMatter:{id:"deep-linking",title:"Deep Linking"},sidebar:"docs",previous:{title:"Push notifications",permalink:"/go-mobile/pt/docs/special-features/push-notification"},next:{title:"A partir do editor de projeto",permalink:"/go-mobile/pt/docs/debug/from-project-editor"}},s={},p=[{value:"Compara\xe7\xe3o de modos deep linking",id:"compara\xe7\xe3o-de-modos-deep-linking",level:2},{value:"URL Scheme",id:"url-scheme",level:3},{value:"Universal links",id:"universal-links",level:3},{value:"Esquema URL personalizado",id:"esquema-url-personalizado",level:2},{value:"Esquema de URL personalizado no editor de projeto",id:"esquema-de-url-personalizado-no-editor-de-projeto",level:3},{value:"Usar esquemas URL em seu app m\xf3vel",id:"usar-esquemas-url-em-seu-app-m\xf3vel",level:3},{value:"Universal links",id:"universal-links-1",level:2},{value:"Links universais no Editor de Projeto",id:"links-universais-no-editor-de-projeto",level:3},{value:"Deep Linking e notifica\xe7\xf5es Push",id:"deep-linking-e-notifica\xe7\xf5es-push",level:2}],d={toc:p};function m(e){let{components:a,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"rma\xe7\xe3o 4D for Android",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This feature is currently not available in 4D for Android.")),(0,o.kt)("p",null,"Gra\xe7as a funcionalidade ",(0,o.kt)("strong",{parentName:"p"},"deep linking"),', \xe9 poss\xedvel partilhar o conte\xfado que est\xe1 vendo com todos os seus colegas. Aqui h\xe1 uma ilustra\xe7\xe3o que resume o "deep linking":'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Anima\xe7\xe3o Deep Link",src:t(92929).Z,width:"722",height:"450"})),(0,o.kt)("p",null,'H\xe1 duas maneiras de implementar "deep linking" em IOS: ',(0,o.kt)("strong",{parentName:"p"},'"URL scheme"')," e ",(0,o.kt)("strong",{parentName:"p"},'"Universal Links"'),'. Os "URL schemes" s\xe3o um m\xe9todo bem conhecido de "deep linking"  e os "Universal links" s\xe3o o novo m\xe9todo que Apple implementou para conectar facilmente sua p\xe1gina web e sua aplica\xe7\xe3o sob o mesmo link.'),(0,o.kt)("h2",{id:"compara\xe7\xe3o-de-modos-deep-linking"},"Compara\xe7\xe3o de modos deep linking"),(0,o.kt)("h3",{id:"url-scheme"},"URL Scheme"),(0,o.kt)("p",null,"Aqui h\xe1 uma compara\xe7\xe3o entre as duas op\xe7\xf5es que est\xe3o dispon\xedveis no editor de projeto:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"PR\xd3S"),(0,o.kt)("th",{parentName:"tr",align:null},"CONTRAS"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"F\xe1cil de implementar"),(0,o.kt)("td",{parentName:"tr",align:null},"Sempre requer permiss\xe3o")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"N\xe3o precisa de um backend adicional"),(0,o.kt)("td",{parentName:"tr",align:null},"N\xe3o funciona se a aplica\xe7\xe3o n\xe3o estiver instalada")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"N\xe3o funciona em Android")))),(0,o.kt)("h3",{id:"universal-links"},"Universal links"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"PR\xd3S"),(0,o.kt)("th",{parentName:"tr",align:null},"CONTRAS"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"N\xe3o requer permiss\xe3o"),(0,o.kt)("td",{parentName:"tr",align:null},"Se necessita um backend est\xe1tico com SSL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"N\xe3o abre o navegador"),(0,o.kt)("td",{parentName:"tr",align:null},"Mais complexo de implementar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Compat\xedvel com Android"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"URL de fallback se a aplica\xe7\xe3o n\xe3o estiver instalada"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"esquema-url-personalizado"},"Esquema URL personalizado"),(0,o.kt)("p",null,"No n\xedvel mais simples, os esquemas de URL permitem aos usu\xe1rios abrir uma aplica\xe7\xe3o desde outras aplica\xe7\xf5es. Mas o verdadeiro poder dos esquemas URL est\xe1 na capacidade de realizar a\xe7\xf5es espec\xedficas a medida que se abre a aplica\xe7\xe3o."),(0,o.kt)("h3",{id:"esquema-de-url-personalizado-no-editor-de-projeto"},"Esquema de URL personalizado no editor de projeto"),(0,o.kt)("p",null,"\xc9 muito simples incluir um esquema URL a sua aplica\xe7\xe3o m\xf3vel. Vamos ver um exemplo:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Selecione a a\xe7\xe3o predefinida ",(0,o.kt)("strong",{parentName:"li"},"Share")," da p\xe1gina ",(0,o.kt)("a",{parentName:"li",href:"/go-mobile/pt/docs/project-definition/actions"},(0,o.kt)("strong",{parentName:"a"},"Action"))," e selecione o alcance:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"entidade - para compartilhar o conte\xfado de um formul\xe1rio detalhado"),(0,o.kt)("li",{parentName:"ul"},"tabela - para compartilhar um formul\xe1rio lista"))),(0,o.kt)("li",{parentName:"ol"},"Marque a propriedade ",(0,o.kt)("strong",{parentName:"li"},"Deep Linking")," na se\xe7\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Publishing")," do editor de projetos."),(0,o.kt)("li",{parentName:"ol"},"A informa\xe7\xe3o do esquema URL \xe9 preenchido automaticamente com o nome da aplica\xe7\xe3o definida previamente na p\xe1gina ",(0,o.kt)("a",{parentName:"li",href:"/go-mobile/pt/docs/project-definition/general"},(0,o.kt)("strong",{parentName:"a"},"General")),". Entretanto, ainda pode ser editado:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Editor de projeto deep linking",src:t(17304).Z,width:"2164",height:"1988"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Preencha seu m\xe9todo ",(0,o.kt)("strong",{parentName:"li"},"On Mobile App Action"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'\n// On Mobile App Action database method\n\nvar $1 : Object  // Informa\xe7\xe3o fonrecida por aplica\xe7\xe3o m\xf3vel\nvar $0 : Object  // Informa\xe7\xe3o retornada para aplica\xe7\xe3o m\xf3vel\n\nvar $action : Object\n$action:=MobileAppServer. Action.new($1) Case of \n\n    : ($1.action="shareContact")\n\n        $0:=$action.shareContext()\n\n    Else \n\n        $0:=New object("success"; False;"statusText"; "Unknown action send to server") End case \n\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Cria\xe7\xe3o da aplica\xe7\xe3o.")),(0,o.kt)("h3",{id:"usar-esquemas-url-em-seu-app-m\xf3vel"},"Usar esquemas URL em seu app m\xf3vel"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clique no bot\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Action")," para mostrar todas as suas a\xe7\xf5es dispon\xedveis atualmente"),(0,o.kt)("li",{parentName:"ol"},"Selecione a a\xe7\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Share")," que foi previamente definida no editor de projetos"),(0,o.kt)("li",{parentName:"ol"},"Aparece uma nova vista que lhe permite come\xe7ar a compartilhar o conte\xfado"),(0,o.kt)("li",{parentName:"ol"},"Selecione o m\xe9todo de interc\xe2mbio que quiser utilizar"),(0,o.kt)("li",{parentName:"ol"},"Envie.")),(0,o.kt)("h2",{id:"universal-links-1"},"Universal links"),(0,o.kt)("p",null,"Os Universal links oferecem v\xe1rios benef\xedcios chave que n\xe3o est\xe3o dispon\xedveis com os esquemas de URL personalizados. Espec\xedficamente, os links universais s\xe3o:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Unique"),": Diferente de schemes personalizados de  URL , links universais n\xe3o podem ser reclamadas por outros apps porque usam links padr\xe3o  HTTP ou HTTPS para seu website.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Secure"),": quando os usu\xe1rios instalam sua aplica\xe7\xe3o, iOS verifica que seu site web permita que sua aplica\xe7\xe3o abra URLs em seu nome. S\xf3 voc\xea pode criar e subir o arquivo que outorga esta permiss\xe3o a seu servidor web, pelo que a associa\xe7\xe3o de seu website com sua aplica\xe7\xe3o seja segura.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Flexible"),": os links universais funcionam mesmo quando sua aplica\xe7\xe3o n\xe3o estiver instalada. Neste caso, ao pressionar um link a seu site web se abre o conte\xfado em Safari.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Simple"),": uma \xfanica URL funciona tanto para seu site web quanto para sua aplica\xe7\xe3o.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Private"),": outras aplica\xe7\xf5es podem se comunicar com sua aplica\xe7\xe3o sem necessidade de saber se sua aplica\xe7\xe3o estiver instalada."))),(0,o.kt)("h3",{id:"links-universais-no-editor-de-projeto"},"Links universais no Editor de Projeto"),(0,o.kt)("p",null,"Para incluir os links universais em sua aplica\xe7\xe3o, o processo \xe9 bastante similar ao processo dos esquemas URL:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Selecione a a\xe7\xe3o predefinida ",(0,o.kt)("strong",{parentName:"li"},"Share")," da p\xe1gina ",(0,o.kt)("a",{parentName:"li",href:"/go-mobile/pt/docs/project-definition/actions"},(0,o.kt)("strong",{parentName:"a"},"Action"))," e selecione o alcance:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"entidade - para compartilhar um conte\xfado de um formul\xe1rio detalhado"),(0,o.kt)("li",{parentName:"ul"},"tabela - para compartilhar um formul\xe1rio lista"))),(0,o.kt)("li",{parentName:"ol"},"Ativar a funcionalidade ",(0,o.kt)("strong",{parentName:"li"},"Deep Linking")," na se\xe7\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Publishing")," no editor de projetos"),(0,o.kt)("li",{parentName:"ol"},"Introduza a URL de seu site web no campo ",(0,o.kt)("strong",{parentName:"li"},"Universal links")),(0,o.kt)("li",{parentName:"ol"},"Preencha seu m\xe9todo ",(0,o.kt)("strong",{parentName:"li"},"On Mobile App Action"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'\n// On Mobile App Action database method\n\nvar $1 : Object  // Informa\xe7\xe3o fonrecida por aplica\xe7\xe3o m\xf3vel\nvar $0 : Object  // Informa\xe7\xe3o retornada para aplica\xe7\xe3o m\xf3vel\n\nvar $action : Object\n$action:=MobileAppServer. Action.new($1) Case of \n\n    : ($1.action="shareContact")\n\n        $0:=$action.shareContext()\n\n    Else \n\n        $0:=New object("success"; False;"statusText"; "Unknown action send to server") End case \n\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Cria\xe7\xe3o da aplica\xe7\xe3o."),(0,o.kt)("li",{parentName:"ol"},"Ativar os links universais do m\xe9todo ",(0,o.kt)("strong",{parentName:"li"},"On Web Connection"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"// M\xe9todo de banco On Web Connection\n\nvar $1; $2; $3; $4; $5; $6 : Text\nvar $handler : Object\n\n$handler:=MobileAppServer. WebHandler.new()\nCase of\n    : ($handler.handle($1; $2; $3; $4; $5; $6))\n        // Gerenciado por c\xf3digo m\xf3vel normal\n    Else\n        // Seu c\xf3digo web End case\n\n")),(0,o.kt)("p",null,":::nota"),(0,o.kt)("p",null,"To create a universal link, make sure you use standard ports (80 or 443)."),(0,o.kt)("p",null,":::"),(0,o.kt)("h2",{id:"deep-linking-e-notifica\xe7\xf5es-push"},"Deep Linking e notifica\xe7\xf5es Push"),(0,o.kt)("p",null,"Algo genial sobre Deep Linking \xe9 que \xe9 completamente compat\xedvel com ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/special-features/push-notification"},"notifica\xe7\xf5es push"),". Isso significa que pode enviar links Deep a seus usu\xe1rios e lev\xe1-los diretamente \xe0 p\xe1gina correta."),(0,o.kt)("p",null,"Como pode ver, essa funcionalidade abre uma grande gama de possibilidades. Deep linking \xe9 uma funcionalidade crucial nas aplica\xe7\xf5es de hoje em dia, especialmente j\xe1 que os usu\xe1rios consumem o conte\xfado mais rapidamente. Esta funcionalidade leva diretamente ao lugar desejado. Assim \xe9 recomendado que usem isso em seus apps m\xf3veis."),(0,o.kt)("p",null,":::dica"),(0,o.kt)("p",null,"Veja a documenta\xe7\xe3o ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md"},(0,o.kt)("strong",{parentName:"a"},"4D Mobile App Server")," ")," para saber mais sobre como combinar notifica\xe7\xf5es push com  deep linking."),(0,o.kt)("p",null,":::"))}m.isMDXComponent=!0},3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>c});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),c=o,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return t?n.createElement(k,r(r({ref:a},d),{},{components:t})):n.createElement(k,r({ref:a},d))}));function c(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},92929:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/4d-for-ios-deeplinking-c8b6031fa5991c5bfef157b6d39d3ccd.gif"},17304:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/deep-linking-project-editor-publishing-section-f55d18b6701cd4898dc2f8a39c4a61fc.png"}}]);