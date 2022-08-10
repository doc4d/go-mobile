"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[561],{23030:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>n,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const p={id:"deploy-on-app-store-create-appstore-record",title:"Criar uma ficha em App Store"},i=void 0,n={unversionedId:"tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record",id:"version-19-R6/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record",title:"Criar uma ficha em App Store",description:"OBJETIVOS",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R6/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record.md",sourceDirName:"tutorials/deploying-on-app-store",slug:"/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record",permalink:"/go-mobile/pt/docs/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record.md",tags:[],version:"19-R6",frontMatter:{id:"deploy-on-app-store-create-appstore-record",title:"Criar uma ficha em App Store"},sidebar:"tutorials",previous:{title:"Distribua seu app in-House",permalink:"/go-mobile/pt/docs/tutorials/deploying-in-house/deployment-in-house-distribute"},next:{title:"Arquive e atualize seu Projeto",permalink:"/go-mobile/pt/docs/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload"}},l={},s=[{value:"PASSO 1. Criar uma ID de aplica\xe7\xe3o",id:"passo-1-criar-uma-id-de-aplica\xe7\xe3o",level:2},{value:"O que \xe9 uma identifica\xe7\xe3o (ID) de aplica\xe7\xe3o?",id:"o-que-\xe9-uma-identifica\xe7\xe3o-id-de-aplica\xe7\xe3o",level:4},{value:"PASSO 2. Inicie a sess\xe3o na App Store Connect",id:"passo-2-inicie-a-sess\xe3o-na-app-store-connect",level:2},{value:"PASSO 3. Crie uma nova aplica\xe7\xe3o iOS",id:"passo-3-crie-uma-nova-aplica\xe7\xe3o-ios",level:2},{value:"PASSO 4. Informa\xe7\xe3o sobre a aplica\xe7\xe3o",id:"passo-4-informa\xe7\xe3o-sobre-a-aplica\xe7\xe3o",level:2},{value:"PASSO 5. Pre\xe7os e disponibilidade",id:"passo-5-pre\xe7os-e-disponibilidade",level:2},{value:"PASSO 6. Prepare para a inscri\xe7\xe3o",id:"passo-6-prepare-para-a-inscri\xe7\xe3o",level:2}],c={toc:s};function u(e){let{components:a,...p}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,p,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Criar um identificador de aplica\xe7\xe3o em sua conta de desenvolvedor"),(0,r.kt)("li",{parentName:"ul"},"Criar sua aplica\xe7\xe3o na App Store Connect"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"PR\xc9-REQUISITOS")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"../tutorials/developer-program/register-apple-developer-program-organization"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-individual"},"Apple Developer Program para particulares")))),(0,r.kt)("h2",{id:"passo-1-criar-uma-id-de-aplica\xe7\xe3o"},"PASSO 1. Criar uma ID de aplica\xe7\xe3o"),(0,r.kt)("h4",{id:"o-que-\xe9-uma-identifica\xe7\xe3o-id-de-aplica\xe7\xe3o"},"O que \xe9 uma identifica\xe7\xe3o (ID) de aplica\xe7\xe3o?"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Uma ID de aplica\xe7\xe3o \xe9 uma string de duas partes usada para identificar um ou mais apps para um \xfanico time de desenvolvimento. Esta string consiste de uma ID de Time e uma ID Bundle, com um ponto(.) que separa as duas partes (exemplo: TimeID. BundleID).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTA")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Se escolher uma Conta Apple Developer como indiv\xedduo, sua conta estar\xe1 dispon\xedvel imediatamente e pode criar sua App ID."),(0,r.kt)("li",{parentName:"ul"},"Se escolher uma conta Apple Developer como uma empresa, tem que esperar at\xe9 a valida\xe7\xe3o de Apple para criar sua App ID."))),(0,r.kt)("p",null,"Para criar sua ID apple, v\xe1 para a conta Desenvolvedor e selecione ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/account/ios/identifier/bundle"},"Certificates, IDs & Profile")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Clique no s\xedmbolo + do lado de ",(0,r.kt)("em",{parentName:"p"},"Register iOS App IDs")," para agregar um novo identificador de aplica\xe7\xe3o.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Defina o nome e Bundle ID de sua aplica\xe7\xe3o."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"App ID",src:t(90916).Z,width:"1134",height:"1206"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Defina os App Services para incluir \xe0 sua aplica\xe7\xe3o")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"App Services",src:t(265).Z,width:"1150",height:"1331"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Confirme a identifica\xe7\xe3o de aplica\xe7\xe3o clicando em ",(0,r.kt)("strong",{parentName:"li"},"Register"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Confirm App ID",src:t(36526).Z,width:"1150",height:"1331"})),(0,r.kt)("h2",{id:"passo-2-inicie-a-sess\xe3o-na-app-store-connect"},"PASSO 2. Inicie a sess\xe3o na App Store Connect"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inicie a sess\xe3o na sua ",(0,r.kt)("a",{parentName:"li",href:"https://appstoreconnect.apple.com"},"Conta App Store Connect")),(0,r.kt)("li",{parentName:"ul"},"Clique em ",(0,r.kt)("strong",{parentName:"li"},"My Apps"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"App Store Connect",src:t(68148).Z,width:"1189",height:"842"})),(0,r.kt)("h2",{id:"passo-3-crie-uma-nova-aplica\xe7\xe3o-ios"},"PASSO 3. Crie uma nova aplica\xe7\xe3o iOS"),(0,r.kt)("p",null,"Clique no sinal ",(0,r.kt)("strong",{parentName:"p"},"+")," no canto esquerdo superior para criar uma nova aplica\xe7\xe3o iOS."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Crie uma nova aplica\xe7\xe3o iOS",src:t(16680).Z,width:"1025",height:"869"})),(0,r.kt)("p",null,"Agregue a informa\xe7\xe3o abaixo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Platforms"),": Selecione iOS."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name"),": o nome da aplica\xe7\xe3o."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Primary language"),": o idioma principal de sua aplica\xe7\xe3o."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bundle ID"),": Selecione a Bundle ID de sua apica\xe7\xe3o a partir da lista suspensa."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SKU"),": Uma identidade \xfanica para sua aplica\xe7\xe3o (isso permanece privado e n\xe3o pode ser visto pelos usu\xe1rios)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Limit User Access (opcional)"),": Permite que limite o acesso \xe0 sua aplica\xe7\xe3o para os usu\xe1rios com fun\xe7\xf5es de Administra\xe7\xe3o, Desenvolvedor, Comercial ou Vendas.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Change BundleID",src:t(21271).Z,width:"1074",height:"861"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTA")),(0,r.kt)("p",{parentName:"blockquote"},"Se seu Bundle ID n\xe3o estiver dispon\xedvel, pode ser que j\xe1 esteja sendo usada por outro app na App Store. Ter\xe1 que mudar a sua no projeto Xcode.")),(0,r.kt)("h2",{id:"passo-4-informa\xe7\xe3o-sobre-a-aplica\xe7\xe3o"},"PASSO 4. Informa\xe7\xe3o sobre a aplica\xe7\xe3o"),(0,r.kt)("p",null,"Em App Store Connect > App Information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Define a Privacy Policy URL de sua aplica\xe7\xe3o (opcional)."),(0,r.kt)("li",{parentName:"ul"},"Introduza uma legenda para seu app. Isso vai aparecer abaixo do nome de sua aplica\xe7\xe3o na App Store em iOS 11."),(0,r.kt)("li",{parentName:"ul"},"Selecione uma categoria prim\xe1ria e secund\xe1ria (opcional) na qual sua aplica\xe7\xe3o vai aparecer.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Informa\xe7\xe3o sobre a aplica\xe7\xe3o",src:t(99879).Z,width:"1300",height:"1182"})),(0,r.kt)("h2",{id:"passo-5-pre\xe7os-e-disponibilidade"},"PASSO 5. Pre\xe7os e disponibilidade"),(0,r.kt)("p",null,"Aqui voc\xea define o pre\xe7o de sua aplica\xe7\xe3o."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"DICAS")),(0,r.kt)("p",{parentName:"blockquote"},"Pode definir descontos por tempo limitado especificando as datas de come\xe7o e fim.")),(0,r.kt)("h2",{id:"passo-6-prepare-para-a-inscri\xe7\xe3o"},"PASSO 6. Prepare para a inscri\xe7\xe3o"),(0,r.kt)("p",null,"Agregue todos os recursos de sua aplica\xe7\xe3o que quiser incluir na App Store em ",(0,r.kt)("strong",{parentName:"p"},"Version Information"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"DICAS")),(0,r.kt)("p",{parentName:"blockquote"},"Pode gerar todas as suas capturas de tela no Simulator (File>New Screen Shot).")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Prepare para a inscri\xe7\xe3o",src:t(32483).Z,width:"1247",height:"1162"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Agregue suas capturas de tela. Capturas de tela para iPhone 5,5" Super Retina Display e iPad 12.9" Retina Display s\xe3o obrigat\xf3rias. Para maiores detalhes, veja ',(0,r.kt)("a",{parentName:"p",href:"https://help.apple.com/app-store-connect/#/devd274dd925"},"Screenshot specifications"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Role a tela para baixo e defina as palavras chaves ",(0,r.kt)("strong",{parentName:"p"},"Keywords")," e complete a ",(0,r.kt)("strong",{parentName:"p"},"Description")," (Isso \xe9 o que os usu\xe1rios ver\xe3o na App Store).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pode compartir atualiza\xe7\xf5es de sua aplica\xe7\xe3o, inclu\xeddas novas promo\xe7\xf5es ou funcionalidades ou conte\xfado, ofertas por tempo limitado, ou outros eventos dentro de sua aplica\xe7\xe3o adicionando um ",(0,r.kt)("strong",{parentName:"p"},"Promotional Text")," que aparece acima da sua descri\xe7\xe3o na App Store (para clientes com dispositivos com iOS 11 ou posterior).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ingresse um ",(0,r.kt)("strong",{parentName:"p"},"Support URL")," que inclua informa\xe7\xe3o sobre compatibilidade para sua aplica\xe7\xe3o. Esta URL estar\xe1 vis\xedvel em App Store.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Marketing URL")," \xe9 opcional. Isso pode dirigir aos usu\xe1rios a um website de marketing para sua aplica\xe7\xe3o."))),(0,r.kt)("p",null,"Na se\xe7\xe3o ",(0,r.kt)("strong",{parentName:"p"},"iOS App"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"iOS App section",src:t(76445).Z,width:"1289",height:"1216"})),(0,r.kt)("p",null,"Localize as vers\xf5es de seu produto em ",(0,r.kt)("strong",{parentName:"p"},"Build"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Na \xe1rea ",(0,r.kt)("strong",{parentName:"li"},"General App Information")," ingresse os direitos de autor, a vers\xe3o e informa\xe7\xe3o de contato de sua aplica\xe7\xe3o."),(0,r.kt)("li",{parentName:"ul"},"O \xedcone de sua aplica\xe7\xe3o \xe9 inclu\xeddo no projeto gerado 4D para iOS."),(0,r.kt)("li",{parentName:"ul"},"A classifica\xe7\xe3o et\xe1ria ou rating \xe9 uma propriedade usada para os controles parentais de App Store. Clique Edit e selecione a faixa et\xe1ria apropriada para sua aplica\xe7\xe3o.")),(0,r.kt)("p",null,"As se\xe7\xf5es ",(0,r.kt)("strong",{parentName:"p"},"App Review Information")," e ",(0,r.kt)("strong",{parentName:"p"},"Version Release")," incluem informa\xe7\xf5es exigidas pela App Store. A informa\xe7\xe3o oferecida a\xed n\xe3o ser\xe1 vista pelos usu\xe1rios."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"App Review Information",src:t(47117).Z,width:"1275",height:"1374"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"App Review Information"),": Informa\xe7\xf5es confidenciais de contato e de seguran\xe7a."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Version Release"),": especifica uma publica\xe7\xe3o autom\xe1tica ou manual."),(0,r.kt)("li",{parentName:"ul"},"Finalmente, clique ",(0,r.kt)("strong",{parentName:"li"},"Save"),".")))}u.isMDXComponent=!0},3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var o=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function n(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},p=Object.keys(e);for(o=0;o<p.length;o++)t=p[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)t=p[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=s(e.components);return o.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},d=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||p;return t?o.createElement(k,i(i({ref:a},c),{},{components:t})):o.createElement(k,i({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=d;var n={};for(var l in a)hasOwnProperty.call(a,l)&&(n[l]=a[l]);n.originalType=e,n.mdxType="string"==typeof e?e:r,i[1]=n;for(var s=2;s<p;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},265:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/App-Services-to-include-6aa83e7c749cb27c8f87e51f0d33483c.png"},99879:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/App-Store-Connect-app-information-05b7e6c549964f84962ec3da5bcd2012.png"},68148:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/App-Store-Connect-home-page-698480bb11d26087c992c3cf7cdd5827.png"},21271:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Change-BundleID-Xcode-Project-89a5b406762fa844cbd901cd20a04da1.png"},36526:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Confirm-App-ID-badc7b63a6b1caa055a9c8bcd346fc3f.png"},16680:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Create-new-iOS-App-9fa88738ec4946ec2eb2fe04f1d0da42.png"},90916:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Developer-account-App-ID-a3e672797d9d37c866ed2fe8928167c1.png"},76445:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Prepare-for-submission-build-icon-331b09ed3c8aa01bc83a19cc0ace2206.png"},47117:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Prepare-for-submission-review-information-677d367b658298c314ebaad942685180.png"},32483:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Prepare-for-submission-screenshot-description-ff47eb1948bf404fa6f88ece1c0410c3.png"}}]);