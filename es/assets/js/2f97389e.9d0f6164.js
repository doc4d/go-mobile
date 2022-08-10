"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[793],{65293:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const i={id:"testing-on-your-device",title:"Instalar en su dispositivo iOS"},o=void 0,l={unversionedId:"tutorials/deploying-in-house/testing-on-your-device",id:"version-19-R5/tutorials/deploying-in-house/testing-on-your-device",title:"Instalar en su dispositivo iOS",description:"Puede instalar y probar su aplicaci\xf3n m\xf3vil en un dispositivo conectado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R5/tutorials/deploying-in-house/testing-on-your-device.md",sourceDirName:"tutorials/deploying-in-house",slug:"/tutorials/deploying-in-house/testing-on-your-device",permalink:"/es/19-R5/tutorials/deploying-in-house/testing-on-your-device",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/deploying-in-house/testing-on-your-device.md",tags:[],version:"19-R5",frontMatter:{id:"testing-on-your-device",title:"Instalar en su dispositivo iOS"},sidebar:"tutorials",previous:{title:"Seleccionar un Apple Developer Program",permalink:"/es/19-R5/tutorials/developer-program/selecting-your-developer-program"},next:{title:"Archivar y exportar un proyecto",permalink:"/es/19-R5/tutorials/deploying-in-house/deployment-in-house-archive-and-export"}},p={},s=[{value:"Requisitos",id:"requisitos",level:2},{value:"PASO 1. Crear cuenta",id:"paso-1-crear-cuenta",level:2},{value:"PASO 2. Configuraci\xf3n Xcode",id:"paso-2-configuraci\xf3n-xcode",level:2},{value:"PASO 3. Obtenga su Team ID",id:"paso-3-obtenga-su-team-id",level:2},{value:"PASO 4. Team ID para una cuenta gratuita",id:"paso-4-team-id-para-una-cuenta-gratuita",level:2},{value:"Deje que Xcode genere su perfil y certificado",id:"deje-que-xcode-genere-su-perfil-y-certificado",level:3},{value:"Creaci\xf3n del proyecto con Xcode",id:"creaci\xf3n-del-proyecto-con-xcode",level:3},{value:"PASO 5. Team ID para una cuenta paga",id:"paso-5-team-id-para-una-cuenta-paga",level:2},{value:"PASO 6. Instalaci\xf3n",id:"paso-6-instalaci\xf3n",level:2},{value:"Instalaci\xf3n autom\xe1tica con Apple Configurator 2",id:"instalaci\xf3n-autom\xe1tica-con-apple-configurator-2",level:3},{value:"Instalaci\xf3n manual con Xcode",id:"instalaci\xf3n-manual-con-xcode",level:3}],c={toc:s};function u(e){let{components:a,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Puede instalar y probar su aplicaci\xf3n m\xf3vil en un dispositivo conectado."),(0,r.kt)("h2",{id:"requisitos"},"Requisitos"),(0,r.kt)("p",null,"Tiene que suscribirse a un programa de desarrolladores de Apple. Dependiendo de sus objetivos y de sus preferencias, puede optar por inscribirse en uno de los siguientes programas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Free Apple Developer Program: For testing only"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.apple.com/programs/enroll/"},"Apple Developer Program for organization or individual"),": For an App Store Deployment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.apple.com/programs/enterprise/"},"Apple Enterprise Developer Program"),": To deploy your app in-house")),(0,r.kt)("p",null,":::nota"),(0,r.kt)("p",null,"Necesita ",(0,r.kt)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/apple-configurator-2/id1037126344"},"Apple configurator 2")," instalado en su Mac para automatizar la instalaci\xf3n de la aplicaci\xf3n (opcional)."),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"paso-1-crear-cuenta"},"PASO 1. Crear cuenta"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Identificador Apple"),": cree su identificador Apple. Si no tienen uno, haga clic ",(0,r.kt)("a",{parentName:"p",href:"https://appleid.apple.com/account#!&page=create"},"aqu\xed"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Developer Account"),": elija un Apple Developer Program (para empresas o individuos) para desplegar en la App Store o el Apple Developer Enterprise Program (para despliegue interno)."))),(0,r.kt)("h2",{id:"paso-2-configuraci\xf3n-xcode"},"PASO 2. Configuraci\xf3n Xcode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Developer Account"),": En Xcode > Preferences > Accounts, a\xf1ada su Apple ID. ",(0,r.kt)("img",{alt:"Developer Account",src:t(12493).Z,width:"768",height:"557"}))),(0,r.kt)("h2",{id:"paso-3-obtenga-su-team-id"},"PASO 3. Obtenga su Team ID"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If your are using a Free Apple Developer Program, go to ",(0,r.kt)("a",{parentName:"li",href:"#step-4-team-id-for-free-account"},"step 4"),"."),(0,r.kt)("li",{parentName:"ul"},"Si est\xe1 utilizando un ",(0,r.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-organization"},"Apple Developer Program para empresas"),", ",(0,r.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-individual"}," para particulares ")," o un ",(0,r.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program")," vaya al ",(0,r.kt)("a",{parentName:"li",href:"#step-5-team-id-for-paid-subscription-account"},"paso 5"),".")),(0,r.kt)("h2",{id:"paso-4-team-id-para-una-cuenta-gratuita"},"PASO 4. Team ID para una cuenta gratuita"),(0,r.kt)("h3",{id:"deje-que-xcode-genere-su-perfil-y-certificado"},"Deje que Xcode genere su perfil y certificado"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Abra su proyecto actual desde la pesta\xf1a BUILD.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Build tab",src:t(36598).Z,width:"1033",height:"994"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verify that the ",(0,r.kt)("strong",{parentName:"li"},"Automatically manage signing")," option is checked and select the account you added, from the Team dropdown list.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Account-Selection",src:t(51781).Z,width:"1106",height:"877"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Conecte su dispositivo a su ordenador y selecci\xf3nelo en el men\xfa superior de Xcode.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select your device",src:t(34621).Z,width:"1106",height:"877"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Xcode genera autom\xe1ticamente los perfiles y certificados de aprovisionamiento necesarios para crear su aplicaci\xf3n.")),(0,r.kt)("h3",{id:"creaci\xf3n-del-proyecto-con-xcode"},"Creaci\xf3n del proyecto con Xcode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xa1Presione el bot\xf3n Build and run Button en Xcode!")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Build and Run",src:t(61034).Z,width:"1106",height:"877"})),(0,r.kt)("h2",{id:"paso-5-team-id-para-una-cuenta-paga"},"PASO 5. Team ID para una cuenta paga"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Team ID"),": Haga clic en Developer Account > Membership y obtenga su Team ID. ",(0,r.kt)("img",{alt:"Developer Account membership",src:t(69424).Z,width:"768",height:"739"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"4D for iOS"),": Lance 4D for iOS en Sections > General e introduzca su Team ID. ",(0,r.kt)("img",{alt:"General section",src:t(58544).Z,width:"768",height:"739"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Vaya al PASO 6 para ejecutar su proyecto en su dispositivo."))),(0,r.kt)("h2",{id:"paso-6-instalaci\xf3n"},"PASO 6. Instalaci\xf3n"),(0,r.kt)("h3",{id:"instalaci\xf3n-autom\xe1tica-con-apple-configurator-2"},"Instalaci\xf3n autom\xe1tica con Apple Configurator 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cuando su aplicaci\xf3n est\xe9 lista, abra la pesta\xf1a CREAR."),(0,r.kt)("li",{parentName:"ul"},"Conecte su dispositivo a su ordenador con un cable USB."),(0,r.kt)("li",{parentName:"ul"},"Desde la pesta\xf1a CREAR, haga clic en ",(0,r.kt)("strong",{parentName:"li"},"Instalador"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Install button",src:t(94610).Z,width:"768",height:"739"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xa1La aplicaci\xf3n se est\xe1 instalando en su dispositivo!")),(0,r.kt)("h3",{id:"instalaci\xf3n-manual-con-xcode"},"Instalaci\xf3n manual con Xcode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cuando su aplicaci\xf3n est\xe9 lista, abra la pesta\xf1a CREAR."),(0,r.kt)("li",{parentName:"ul"},"Conecte su dispositivo a su ordenador con un cable USB."),(0,r.kt)("li",{parentName:"ul"},"Desde la pesta\xf1a CREAR, haga clic en ",(0,r.kt)("strong",{parentName:"li"},"Instalador"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Manual installation",src:t(61123).Z,width:"2164",height:"1988"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Se crea un archivo de su proyecto")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Archive creation",src:t(72174).Z,width:"2164",height:"1988"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Indique el archivo generado en Finder")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Reveal archive in Finder",src:t(23688).Z,width:"1168",height:"734"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Abra Xcode y vaya a Menu > Window > Devices and Simulator y arrastre y suelte el archivo ipa generado en la secci\xf3n Installed Apps.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Devices and Simulators",src:t(93758).Z,width:"2346",height:"1636"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xa1La aplicaci\xf3n se est\xe1 instalando en su dispositivo!")))}u.isMDXComponent=!0},3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return t?n.createElement(g,o(o({ref:a},c),{},{components:t})):n.createElement(g,o({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72174:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Archive-creation-9ab385bb6618d380e6fc13d1ada6826e.png"},61034:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Build-Run-Free-Account-4f72d3ebb3da13613714397dd364d052.png"},12493:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Developer-Account-4D-for-iOS-f06e7c698bebae35b2bd3f9b15ef0133.png"},93758:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Devices-and-Simulators-4D-for-iOS-46caf0993b3ec613d8f50b45f0012a7e.png"},94610:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Install-button-build-tab-4D-for-iOS-732c21e87c69c937de9d3aa5092cd8cc.png"},61123:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Manual-installation-4D-for-iOS-006bdd55a7e8b00af0031a276978929e.png"},36598:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},23688:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Reveal-archive-in-Finder-b56d3aef33e96abfa44e8a31910abc6f.png"},69424:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"},58544:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Team-ID-General-Section-4D-for-iOS-98b22260cf98f8460a432cce293eec36.png"},51781:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/account-Selection-Free-Account-70391ce3982e842639ee60d9c60ee5ae.png"},34621:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/select-device-Free-Account-7ef38cd1f2bd6ccee926b372f8704cdb.png"}}]);