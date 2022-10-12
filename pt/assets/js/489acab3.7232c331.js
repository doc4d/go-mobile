"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6626],{41882:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const n={id:"testing-on-your-device",title:"Instalar em seu dispositivo iOS"},i=void 0,l={unversionedId:"tutorials/deploying-in-house/testing-on-your-device",id:"tutorials/deploying-in-house/testing-on-your-device",title:"Instalar em seu dispositivo iOS",description:"Pode instalar e testar sua aplica\xe7\xe3o m\xf3vel em um aparelho conectado.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/tutorials/deploying-in-house/testing-on-your-device.md",sourceDirName:"tutorials/deploying-in-house",slug:"/tutorials/deploying-in-house/testing-on-your-device",permalink:"/go-mobile/pt/docs/next/tutorials/deploying-in-house/testing-on-your-device",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/deploying-in-house/testing-on-your-device.md",tags:[],version:"current",frontMatter:{id:"testing-on-your-device",title:"Instalar em seu dispositivo iOS"},sidebar:"tutorials",previous:{title:"Selecionar um Apple Developer Program",permalink:"/go-mobile/pt/docs/next/tutorials/developer-program/selecting-your-developer-program"},next:{title:"Arquive e exporte seu Projeto",permalink:"/go-mobile/pt/docs/next/tutorials/deploying-in-house/deployment-in-house-archive-and-export"}},p={},s=[{value:"Requisitos",id:"requisitos",level:2},{value:"PASSO 1. Cria\xe7\xe3o de uma conta",id:"passo-1-cria\xe7\xe3o-de-uma-conta",level:2},{value:"PASSO 2. Configura\xe7\xe3o Xcode",id:"passo-2-configura\xe7\xe3o-xcode",level:2},{value:"PASSO 3. Obtenha uma ID de Equipe",id:"passo-3-obtenha-uma-id-de-equipe",level:2},{value:"PASSO 4. Team ID para a conta gratuita",id:"passo-4-team-id-para-a-conta-gratuita",level:2},{value:"Deixe que Xcode gere seu perfil provis\xf3rio e certificado",id:"deixe-que-xcode-gere-seu-perfil-provis\xf3rio-e-certificado",level:3},{value:"Construa seu projeto no Xcode usando sua Conta Gratuita",id:"construa-seu-projeto-no-xcode-usando-sua-conta-gratuita",level:3},{value:"PASSO 5. Team ID para contas pagas",id:"passo-5-team-id-para-contas-pagas",level:2},{value:"PASSO 6. Instala\xe7\xe3o",id:"passo-6-instala\xe7\xe3o",level:2},{value:"Instale automaticamente com Apple Configurator 2",id:"instale-automaticamente-com-apple-configurator-2",level:3},{value:"Instale manualmente usando Xcode",id:"instale-manualmente-usando-xcode",level:3}],u={toc:s};function c(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pode instalar e testar sua aplica\xe7\xe3o m\xf3vel em um aparelho conectado."),(0,r.kt)("h2",{id:"requisitos"},"Requisitos"),(0,r.kt)("p",null,"\xc9 preciso se inscrever a um programa de Desenvolvedores Apple. Dependendo de seus objetivos e prefer\xeancias, pode escolher se inscrever em um desses programas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Free Apple Developer Program: For testing only"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.apple.com/programs/enroll/"},"Apple Developer Program for organization or individual"),": For an App Store Deployment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.apple.com/programs/enterprise/"},"Apple Enterprise Developer Program"),": To deploy your app in-house")),(0,r.kt)("p",null,":::nota"),(0,r.kt)("p",null,"\xc9 preciso um ",(0,r.kt)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/apple-configurator-2/id1037126344"},"Apple configurator 2")," instalado em seu Mac para automatizar a instala\xe7\xe3o de app (opcional)."),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"passo-1-cria\xe7\xe3o-de-uma-conta"},"PASSO 1. Cria\xe7\xe3o de uma conta"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Apple ID"),": Crie seu identificador Apple. Se ainda n\xe3o tiver uma, clique em ",(0,r.kt)("a",{parentName:"p",href:"https://appleid.apple.com/account#!&page=create"},"here"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Developer Account"),": Escolha um programa Apple Developer (para empresas ou indiv\xedduos) para lan\xe7amento na App Store ou no Programa Apple Developer Enterprise (para lan\xe7amentos in-house)."))),(0,r.kt)("h2",{id:"passo-2-configura\xe7\xe3o-xcode"},"PASSO 2. Configura\xe7\xe3o Xcode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Developer Account"),": Em Xcode > Preferences > Accounts, adicione sua Apple ID. ",(0,r.kt)("img",{alt:"Developer Account",src:t(97702).Z,width:"768",height:"557"}))),(0,r.kt)("h2",{id:"passo-3-obtenha-uma-id-de-equipe"},"PASSO 3. Obtenha uma ID de Equipe"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If your are using a Free Apple Developer Program, go to ",(0,r.kt)("a",{parentName:"li",href:"#step-4-team-id-for-free-account"},"step 4"),"."),(0,r.kt)("li",{parentName:"ul"},"Se estiver usando um ",(0,r.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-organization"},"Apple Developer Program para organiza\xe7\xf5es"),", ",(0,r.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-individual"},"individual")," ou um ",(0,r.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program")," v\xe1 para ",(0,r.kt)("a",{parentName:"li",href:"#step-5-team-id-for-paid-subscription-account"},"o passo 5"),".")),(0,r.kt)("h2",{id:"passo-4-team-id-para-a-conta-gratuita"},"PASSO 4. Team ID para a conta gratuita"),(0,r.kt)("h3",{id:"deixe-que-xcode-gere-seu-perfil-provis\xf3rio-e-certificado"},"Deixe que Xcode gere seu perfil provis\xf3rio e certificado"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Abra seu projeto atual da aba BUILD")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Build tab",src:t(14470).Z,width:"1033",height:"994"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verify that the ",(0,r.kt)("strong",{parentName:"li"},"Automatically manage signing")," option is checked and select the account you added, from the Team dropdown list.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Account-Selection",src:t(51354).Z,width:"1106",height:"877"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Conecte seu aparelho para seu computador e selecione-o do menu superior em Xcode.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select your device",src:t(65759).Z,width:"1106",height:"877"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Xcode gera automaticamente os perfis e certificados que precisa para construir seu app.")),(0,r.kt)("h3",{id:"construa-seu-projeto-no-xcode-usando-sua-conta-gratuita"},"Construa seu projeto no Xcode usando sua Conta Gratuita"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aperte o bot\xe3o Build and Run de Xcode!")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Build and Run",src:t(23931).Z,width:"1106",height:"877"})),(0,r.kt)("h2",{id:"passo-5-team-id-para-contas-pagas"},"PASSO 5. Team ID para contas pagas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Team ID"),": Clique em Developer Account > Membership e obtenha sua Team ID. ",(0,r.kt)("img",{alt:"Developer Account membership",src:t(96900).Z,width:"768",height:"739"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"4D for iOS"),": Lance 4D for iOS em Sections > General e introduza sua Team ID. ",(0,r.kt)("img",{alt:"General section",src:t(83993).Z,width:"768",height:"739"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"V\xe1 para o Passo 6 para rodar seu projeto no aparelho."))),(0,r.kt)("h2",{id:"passo-6-instala\xe7\xe3o"},"PASSO 6. Instala\xe7\xe3o"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This step requires that you have enabled the ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/requirements.md#apple-device-developer-mode"},"Apple Device Developer Mode"),".")),(0,r.kt)("h3",{id:"instale-automaticamente-com-apple-configurator-2"},"Instale automaticamente com Apple Configurator 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Quando seu app estiver pronto, abra a aba BUILD."),(0,r.kt)("li",{parentName:"ul"},"Conecte seu aparelho para seu computador com um cabo USB."),(0,r.kt)("li",{parentName:"ul"},"Na aba BUILD, clique em ",(0,r.kt)("strong",{parentName:"li"},"Install"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Install button",src:t(58507).Z,width:"768",height:"739"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"O app est\xe1 sendo instalado em seu aparelho!")),(0,r.kt)("h3",{id:"instale-manualmente-usando-xcode"},"Instale manualmente usando Xcode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Quando seu app estiver pronto, abra a aba BUILD."),(0,r.kt)("li",{parentName:"ul"},"Conecte seu aparelho para seu computador com um cabo USB."),(0,r.kt)("li",{parentName:"ul"},"Na aba BUILD, clique em ",(0,r.kt)("strong",{parentName:"li"},"Install"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Manual installation",src:t(4784).Z,width:"2164",height:"1988"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Um arquivo de seu projeto foi criado")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Archive creation",src:t(47046).Z,width:"2164",height:"1988"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Revela o arquivo gerado em Finder")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Reveal archive in Finder",src:t(69173).Z,width:"1168",height:"734"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Abra Xcode e v\xe1 para Menu > Window > Devices e Simulator e arraste o arquivo ipa gerado e solte na se\xe7\xe3o Installed Apps.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Devices and Simulators",src:t(76490).Z,width:"2346",height:"1636"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"O app est\xe1 sendo instalado em seu aparelho.")))}c.isMDXComponent=!0},3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var o=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),s=function(e){var a=o.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=s(e.components);return o.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},d=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||n;return t?o.createElement(g,i(i({ref:a},u),{},{components:t})):o.createElement(g,i({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=d;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<n;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},47046:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Archive-creation-9ab385bb6618d380e6fc13d1ada6826e.png"},23931:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Build-Run-Free-Account-4f72d3ebb3da13613714397dd364d052.png"},97702:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Developer-Account-4D-for-iOS-f06e7c698bebae35b2bd3f9b15ef0133.png"},76490:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Devices-and-Simulators-4D-for-iOS-46caf0993b3ec613d8f50b45f0012a7e.png"},58507:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Install-button-build-tab-4D-for-iOS-732c21e87c69c937de9d3aa5092cd8cc.png"},4784:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Manual-installation-4D-for-iOS-006bdd55a7e8b00af0031a276978929e.png"},14470:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},69173:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Reveal-archive-in-Finder-b56d3aef33e96abfa44e8a31910abc6f.png"},96900:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"},83993:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Team-ID-General-Section-4D-for-iOS-98b22260cf98f8460a432cce293eec36.png"},51354:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/account-Selection-Free-Account-70391ce3982e842639ee60d9c60ee5ae.png"},65759:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/select-device-Free-Account-7ef38cd1f2bd6ccee926b372f8704cdb.png"}}]);