"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4060],{25388:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var t=a(87462),i=(a(67294),a(3905));const n={id:"push-notification",title:"Push notifications"},r=void 0,s={unversionedId:"special-features/push-notification",id:"version-19-R5/special-features/push-notification",title:"Push notifications",description:"This section is currently not available in 4D for Android.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R5/special-features/push-notification.md",sourceDirName:"special-features",slug:"/special-features/push-notification",permalink:"/go-mobile/pt/docs/19-R5/special-features/push-notification",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/special-features/push-notification.md",tags:[],version:"19-R5",frontMatter:{id:"push-notification",title:"Push notifications"},sidebar:"docs",previous:{title:"Session management",permalink:"/go-mobile/pt/docs/19-R5/special-features/session-management"},next:{title:"Deep Linking",permalink:"/go-mobile/pt/docs/19-R5/special-features/deep-linking"}},p={},c=[{value:"O que \xe9 uma notifica\xe7\xe3o push?",id:"o-que-\xe9-uma-notifica\xe7\xe3o-push",level:2},{value:"Arquitetura t\xe9cnica",id:"arquitetura-t\xe9cnica",level:2},{value:"Pr\xe9-requisitos",id:"pr\xe9-requisitos",level:2},{value:"Exemplo b\xe1sico para gerenciar suas notifica\xe7\xf5es push",id:"exemplo-b\xe1sico-para-gerenciar-suas-notifica\xe7\xf5es-push",level:2},{value:"Empurrar notifica\xe7\xf5es com sincroniza\xe7\xe3o de dados",id:"empurrar-notifica\xe7\xf5es-com-sincroniza\xe7\xe3o-de-dados",level:2},{value:"Sincroniza\xe7\xe3o de dados com uma notifica\xe7\xe3o e abertura de registro",id:"sincroniza\xe7\xe3o-de-dados-com-uma-notifica\xe7\xe3o-e-abertura-de-registro",level:3},{value:"Sincroniza\xe7\xe3o de dados com uma notifica\xe7\xe3o simples",id:"sincroniza\xe7\xe3o-de-dados-com-uma-notifica\xe7\xe3o-simples",level:3},{value:"Configura\xe7\xe3o Windows",id:"configura\xe7\xe3o-windows",level:2},{value:"Pasta MobileApps",id:"pasta-mobileapps",level:2}],l={toc:c};function u(e){let{components:o,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},l,n,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"rma\xe7\xe3o 4D for Android")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section is currently not available in 4D for Android."))),(0,i.kt)("h2",{id:"o-que-\xe9-uma-notifica\xe7\xe3o-push"},"O que \xe9 uma notifica\xe7\xe3o push?"),(0,i.kt)("p",null,"Em um telefone m\xf3vel, uma notifica\xe7\xe3o Push \xe9 uma mensagem de alerta, recebido atrav\xe9s de uma aplica\xe7\xe3o, que pode abrir, eliminar, autorizar ou bloquear. Pode ser muito \xfatil por exemplo para notificar aos usu\xe1rios da aplica\xe7\xe3o que h\xe1 uma nova vers\xe3o dispon\xedvel."),(0,i.kt)("p",null,"Mas o que acontece com a arquitetura de implementa\xe7\xe3o, para poder integrar essa funcionalidade em uma aplica\xe7\xe3o m\xf3vel? E qual \xe9 o processo de uma notifica\xe7\xe3o push, desde a cria\xe7\xe3o at\xe9 a visualiza\xe7\xe3o no telefone do usu\xe1rio?"),(0,i.kt)("h2",{id:"arquitetura-t\xe9cnica"},"Arquitetura t\xe9cnica"),(0,i.kt)("p",null,"Esses s\xe3o os elementos diferentes necess\xe1rios para criar, enviar e receber uma notifica\xe7\xe3o push m\xf3vel:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Processo de notifica\xe7\xf5es Push",src:a(85813).Z,width:"2317",height:"1600"})),(0,i.kt)("h2",{id:"pr\xe9-requisitos"},"Pr\xe9-requisitos"),(0,i.kt)("p",null,"Para enviar notifica\xe7\xf5es push, \xe9 necess\xe1rio um arquivo de autentica\xe7\xe3o  ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthKey_XXXYYY.p8")," 8 da Apple."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Gerar e baixar um arquivo chave .p8 est\xe1 descrito ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Generate_p8.md"},"nesta documenta\xe7\xe3o"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Na p\xe1gina ",(0,i.kt)("a",{parentName:"p",href:"../project-definition/publishing"},"Publishing")," marque a op\xe7\xe3o ",(0,i.kt)("strong",{parentName:"p"},"Push notifications")," e selecione seu certificado no projeto m\xf3vel."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Publishing section",src:a(63056).Z,width:"2164",height:"1988"})),(0,i.kt)("h2",{id:"exemplo-b\xe1sico-para-gerenciar-suas-notifica\xe7\xf5es-push"},"Exemplo b\xe1sico para gerenciar suas notifica\xe7\xf5es push"),(0,i.kt)("p",null,"O componente ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/tree/master"},"4D Mobile App Server")," fornece m\xe9todos para notifica\xe7\xf5es push para um ou m\xfaltiplos recebedores. Para informa\xe7\xf5es detalhadas, veja a documenta\xe7\xe3o de componente ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md"},"PushNotification "),"."),(0,i.kt)("p",null,"Este \xe9 um exemplo para enviar uma notifica\xe7\xe3o push a ",(0,i.kt)("inlineCode",{parentName:"p"},"test@4d.com"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification:=MobileAppServer. PushNotification.new() \n$notification:=New object \n$notification.title:="Este \xe9 o t\xedtulo" \n$notification.body:="Aqui \xe9 o conte\xfado da notifica\xe7\xe3o" \n$response:=$pushNotification.send($notification;"test@4d.com")\n\n')),(0,i.kt)("p",null,"It's as simple as that!"),(0,i.kt)("p",null,":::dica"),(0,i.kt)("p",null,"Veja a documenta\xe7\xe3o ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md"},(0,i.kt)("strong",{parentName:"a"},"4D Mobile App Server")," "),' para saber mais sobre como adaptar notifica\xe7\xf5es push para suas necessidades. Pode usar e escolher quais os aspectos mais relevantes para sua aplica\xe7\xe3o. Todas as contribui\xe7\xf5es s\xe3o bem vindas a este projeto, seja atrav\xe9s de coment\xe1rios, relat\xf3rios de erros ou ainda melhor: "pull requests".'),(0,i.kt)("p",null,":::"),(0,i.kt)("h2",{id:"empurrar-notifica\xe7\xf5es-com-sincroniza\xe7\xe3o-de-dados"},"Empurrar notifica\xe7\xf5es com sincroniza\xe7\xe3o de dados"),(0,i.kt)("p",null,"Com uma notifica\xe7\xe3o push, pode lan\xe7ar uma sincroniza\xe7\xe3o para atualizar seus dados."),(0,i.kt)("p",null,"Por exemplo se sua aplica\xe7\xe3o tiver uma op\xe7\xe3o de acompanhamento de entrega, a informa\xe7\xe3o de entrega ser\xe1 atualizada no banco de dados gra\xe7as \xe0 notifica\xe7\xe3o enviada ao cliente. Esta notifica\xe7\xe3o, contendo uma peti\xe7\xe3o para sincronizar os dados, vai permitir ao cliente modificar os dados no seu smartphone."),(0,i.kt)("p",null,"Para fazer isso no componente  ",(0,i.kt)("inlineCode",{parentName:"p"},"4D Mobile App Server")," , precisa especificar se vai ou n\xe3o for\xe7ar a sincroniza\xe7\xe3o de dados em suas notifica\xe7\xf5es push/empurrar. Para isso, simplesmente forne\xe7a o valor booleano ",(0,i.kt)("inlineCode",{parentName:"p"},"dataSynchro")," no objeto ",(0,i.kt)("inlineCode",{parentName:"p"},"userInfo"),"."),(0,i.kt)("h3",{id:"sincroniza\xe7\xe3o-de-dados-com-uma-notifica\xe7\xe3o-e-abertura-de-registro"},"Sincroniza\xe7\xe3o de dados com uma notifica\xe7\xe3o e abertura de registro"),(0,i.kt)("p",null,"Como padr\xe3o normal, uma notifica\xe7\xe3o de abertura de registro automaticamente ativa a sincroniza\xe7\xe3o de dados."),(0,i.kt)("p",null,"Por exemplo, em um app Contact, se uma informa\xe7\xe3o espec\xedfica de contato (",(0,i.kt)("em",{parentName:"p"},"ou seja.")," um registro do contato, tal como endere\xe7o ou n\xfamero de telefone) for modificado, o usu\xe1rio recebe uma notifica\xe7\xe3o que automaticamente abre o registro relevante e sincroniza os dados contidos no registro. Quando o usu\xe1rio abrir a notifica\xe7\xe3o, a informa\xe7\xe3o de contato \xe9 totalmente atualizada."),(0,i.kt)("p",null,"Aqui um exemplo do comportamento normal,  uma peti\xe7\xe3o ",(0,i.kt)("inlineCode",{parentName:"p"},"dataSynchro")," com o m\xe9todo ",(0,i.kt)("inlineCode",{parentName:"p"},"open()"),":"),(0,i.kt)("p",null,":::nota"),(0,i.kt)("p",null,"Note que exclusivamente para o m\xe9todo ",(0,i.kt)("inlineCode",{parentName:"p"},"open()"),", esse \xe9 o comportamento padr\xe3o. Como resultado, se n\xe3o especificar o valor booleano ",(0,i.kt)("inlineCode",{parentName:"p"},"dataSynchro")," seu valor por padr\xe3o ser\xe1 ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,":::"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification:=MobileAppServer. PushNotification.new()\n\n$notification:=New object\n$notification.title:="This is title" \n$notification.body:="Here is the content of this notification" \n\n$entity:=ds. Employees.get("456456")\n$response:=$pushNotification.open($entity; $notification; $recipients)\n\n')),(0,i.kt)("p",null,"Entretanto pode escolher n\xe3o for\xe7ar uma sincroniza\xe7\xe3o de dados, para prevenir ",(0,i.kt)("inlineCode",{parentName:"p"},"dataSynchro"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification:=MobileAppServer. PushNotification.new()\n\n$notification:=New object\n$notification.title:="This is title" \n$notification.body:="Here is the content of this notification" \n$notification.userInfo:=New object("dataSynchro"; False)\n\n$entity:=ds. Employees.get("456456")\n$response:=$pushNotification.open($entity; $notification; $recipients)\n\n')),(0,i.kt)("h3",{id:"sincroniza\xe7\xe3o-de-dados-com-uma-notifica\xe7\xe3o-simples"},"Sincroniza\xe7\xe3o de dados com uma notifica\xe7\xe3o simples"),(0,i.kt)("p",null,"Tamb\xe9m pode se pedir uma sincroniza\xe7\xe3o para uma notifica\xe7\xe3o simples, sem abrir um registro espec\xedfico. Por exemplo, algumas novas entradas foram adicionadas. Pode informar ent\xe3o a seu usu\xe1rio e atualizar os dados sem manipula\xe7\xe3o do seu lado."),(0,i.kt)("p",null,"Aqui est\xe1 um exemplo de c\xf3digo que pode usar com outros m\xe9todos, desde que preencha o objeto ",(0,i.kt)("inlineCode",{parentName:"p"},"userInfo")," com o valor ",(0,i.kt)("inlineCode",{parentName:"p"},"dataSynchro"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification:=MobileAppServer. PushNotification.new()\n\n$notification:=New object\n$notification.title:="This is title" \n$notification.body:="Here is the content of this notification" \n$notification.userInfo:=New object("dataSynchro"; True)\n\n$response:=$pushNotification.send($notification; $recipients)\n\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Data synchronization animation",src:a(71230).Z,width:"360",height:"720"})),(0,i.kt)("h2",{id:"configura\xe7\xe3o-windows"},"Configura\xe7\xe3o Windows"),(0,i.kt)("p",null,"Usu\xe1rios de Windows precisam baixar a ",(0,i.kt)("a",{parentName:"p",href:"https://curl.se/download.html"},"\xfaltima vers\xe3o de CURL")," para trabalhar nas vari\xe1veis do ambiente de sua m\xe1quina. Ou podem inserir curl.exe na pasta Resources do banco de dados produ\xe7\xe3o."),(0,i.kt)("h2",{id:"pasta-mobileapps"},"Pasta MobileApps"),(0,i.kt)("p",null,"N\xe3o importa se trabalhar em Windows ou macOS \xe9 preciso copiar os arquivos abaixo de seu proejto de desenvolvimento para seu projeto de produ\xe7\xe3o:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"4DBASE/MobileApps/ID. BundleID/AuthKey_XXXX.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"4DBASE/MobileApps/ID. BundleID/manifest.json"))))}u.isMDXComponent=!0},3905:(e,o,a)=>{a.d(o,{Zo:()=>l,kt:()=>m});var t=a(67294);function i(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function n(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?n(Object(a),!0).forEach((function(o){i(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function s(e,o){if(null==e)return{};var a,t,i=function(e,o){if(null==e)return{};var a,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||(i[a]=e[a]);return i}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=t.createContext({}),c=function(e){var o=t.useContext(p),a=o;return e&&(a="function"==typeof e?e(o):r(r({},o),e)),a},l=function(e){var o=c(e.components);return t.createElement(p.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},d=t.forwardRef((function(e,o){var a=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||n;return a?t.createElement(f,r(r({ref:o},l),{},{components:a})):t.createElement(f,r({ref:o},l))}));function m(e,o){var a=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=d;var s={};for(var p in o)hasOwnProperty.call(o,p)&&(s[p]=o[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<n;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85813:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/4D-for-ios-push-notification-1ba2c9f12090cef619cebe2a419431e3.png"},63056:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/push-notification-publishing-section-f2975b2a01f145baf627056df0614b45.png"},71230:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/pushandSynchro-f7cc0281002b632433be23a623298cd9.gif"}}]);