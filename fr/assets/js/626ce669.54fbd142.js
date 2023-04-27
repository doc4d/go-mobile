"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7187],{78561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={id:"publishing",title:"Publication"},r=void 0,l={unversionedId:"project-definition/publishing",id:"version-20/project-definition/publishing",title:"Publication",description:"Cette page vous donne acc\xe8s aux param\xe8tres de publication de votre application et aux fonctionnalit\xe9s mobiles sp\xe9ciales :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/project-definition/publishing.md",sourceDirName:"project-definition",slug:"/project-definition/publishing",permalink:"/go-mobile/fr/docs/project-definition/publishing",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-20/project-definition/publishing.md",tags:[],version:"20",frontMatter:{id:"publishing",title:"Publication"},sidebar:"docs",previous:{title:"Formulaires",permalink:"/go-mobile/fr/docs/project-definition/forms"},next:{title:"Build Panel",permalink:"/go-mobile/fr/docs/project-definition/build-panel"}},s={},p=[{value:"URL de production",id:"url-de-production",level:2},{value:"Param\xe8tres du serveur Web",id:"param\xe8tres-du-serveur-web",level:2},{value:"Aper\xe7u sur l&#39;appareil",id:"aper\xe7u-sur-lappareil",level:2},{value:"\xc9cran de param\xe8tres",id:"\xe9cran-de-param\xe8tres",level:3},{value:"Modifier l&#39;url distant",id:"modifier-lurl-distant",level:3},{value:"Authentication",id:"authentication",level:2},{value:"Authentication option",id:"authentication-option",level:3},{value:"Authentication method",id:"authentication-method",level:3},{value:"Login Form",id:"login-form",level:3},{value:"Push notifications",id:"push-notifications",level:2},{value:"Deep Linking",id:"deep-linking",level:2}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cette page vous donne acc\xe8s aux param\xe8tres de publication de votre application et aux fonctionnalit\xe9s mobiles sp\xe9ciales :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Publishing section",src:n(83761).Z,width:"985",height:"505"})),(0,i.kt)("h2",{id:"url-de-production"},"URL de production"),(0,i.kt)("p",null,"URL du serveur Web sur lequel les applications mobiles se connecteront pour lire et \xe9crire des donn\xe9es, dans un contexte de production. Vous pouvez saisir n'importe quelle adresse valide, par exemple :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://my.wesbsite.com\nhttp://my.website.com:9200\nwww.website.com/mobile\n")),(0,i.kt)("p",null,"Pendant la phase de d\xe9veloppement, vous pouvez laisser cette zone vide et d\xe9finir la ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/project-definition/data"},"Source de donn\xe9es")," comme ",(0,i.kt)("strong",{parentName:"p"},"Fichier de donn\xe9es courant"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"L'utilisateur pourra ",(0,i.kt)("a",{parentName:"p",href:"#modify-remote-url"},"modifier l'url du serveur ")," \xe0 partir de l'appareil mobile.")),(0,i.kt)("h2",{id:"param\xe8tres-du-serveur-web"},"Param\xe8tres du serveur Web"),(0,i.kt)("p",null,"Le bouton ",(0,i.kt)("strong",{parentName:"p"},"\xc9diter...")," ouvre la page ",(0,i.kt)("strong",{parentName:"p"},"Web")," de la bo\xeete de dialogue des param\xe8tres 4D. Utilisez cette page pour d\xe9finir les param\xe8tres suivants \xe0 int\xe9grer dans l'application mobile :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"L'option ",(0,i.kt)("strong",{parentName:"li"},"Activer HTTP")," et ",(0,i.kt)("strong",{parentName:"li"},"port HTTP"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enable HTTPS")," option and ",(0,i.kt)("strong",{parentName:"li"},"HTTPS port"),".")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Si HTTP et HTTPS sont tous les deux activ\xe9s, HTTP est utilis\xe9.")),(0,i.kt)("p",null,"L'activation du port HTTPS n\xe9cessite que vous ayez install\xe9 un ",(0,i.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/Admin/tls.html"},"certificat TLS")," valide. Vous pouvez cr\xe9er des certificats d'essai avec 4D."),(0,i.kt)("p",null,"Ces param\xe8tres ne sont pris en compte que si l'",(0,i.kt)("a",{parentName:"p",href:"#production-url"},"URL de production")," est d\xe9finie. Sinon, l'adresse IP locale est utilis\xe9e."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Le simulateur fonctionne toujours localement (127.0.0.1 ou localhost).")),(0,i.kt)("h2",{id:"aper\xe7u-sur-lappareil"},"Aper\xe7u sur l'appareil"),(0,i.kt)("h3",{id:"\xe9cran-de-param\xe8tres"},"\xc9cran de param\xe8tres"),(0,i.kt)("p",null,'Un \xe9cran de param\xe8tres est disponible dans la barre d\u2019onglets. Vous pouvez \xe9galement le trouver sous l\u2019onglet "More" si n\xe9cessaire (',(0,i.kt)("em",{parentName:"p"},"\xe0 savoir"),", votre application contient plus de quatre tables)."),(0,i.kt)("p",null,"L'\xe9cran Param\xe8tres vous permet de :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consultez votre URL distante ainsi que son \xe9tat actuel"),(0,i.kt)("li",{parentName:"ul"},"De vous d\xe9connecter (si vous \xe9tiez connect\xe9 en tant qu'utilisateur autoris\xe9)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Login &amp; Settings screen",src:n(2207).Z,width:"3400",height:"2131"})),(0,i.kt)("h3",{id:"modifier-lurl-distant"},"Modifier l'url distant"),(0,i.kt)("p",null,"Vous pouvez facilement mettre \xe0 jour votre URL distante \xe0 partir des Param\xe8tres de l'iPhone :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Acc\xe9dez aux param\xe8tres de votre iPhone"),(0,i.kt)("li",{parentName:"ul"},"S\xe9lectionnez l'application pour laquelle vous souhaitez que l'URL distante soit mise \xe0 jour"),(0,i.kt)("li",{parentName:"ul"},"Activez l'option \"R\xe9initialiser l'adresse du serveur\"")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Reset remote url",src:n(99376).Z,width:"3400",height:"2131"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Puis red\xe9marrez votre application pour r\xe9initialiser l'adresse du serveur"),(0,i.kt)("li",{parentName:"ul"},"Enfin, d\xe9finissez la nouvelle URL distante")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Update remote url",src:n(96015).Z,width:"3400",height:"2131"})),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"A mobile application can require that the user be authenticated or not."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When authentication is not enabled, mobile users navigate in the application in Guest mode."),(0,i.kt)("li",{parentName:"ul"},"Once authentication is enabled, mobile users are asked to ",(0,i.kt)("strong",{parentName:"li"},"login")," before connecting to the application.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In any cases, when a mobile user connects to the server, a ",(0,i.kt)("a",{parentName:"p",href:"session-management"},"user session")," is created.")),(0,i.kt)("h3",{id:"authentication-option"},"Authentication option"),(0,i.kt)("p",null,"To enable authentication, check the ",(0,i.kt)("strong",{parentName:"p"},"Authentication")," option:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"authentication activation",src:n(7071).Z,width:"351",height:"122"})),(0,i.kt)("p",null,"When this option is selected, a Login form will be displayed to the user at startup. A Default login form is automatically selected in the Login Form menu (see below)."),(0,i.kt)("h3",{id:"authentication-method"},"Authentication method"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Create..."),"/",(0,i.kt)("strong",{parentName:"p"},"Edit...")," button opens the ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/4d/on-mobile-app-authentication"},(0,i.kt)("inlineCode",{parentName:"a"},"On Mobile App Authentication"))," database method in the 4D method editor. A default template code is provided, allowing all users to log as guests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'#DECLARE($request : Object)->$response : Object\n\n/*\n        $request = Informations provided by mobile application\n        $response = Informations returned to mobile application\n*/\n\n$response:=New object\n\n// Check user email\nIf ($request.email=Null)\n    // No email means Guest mode - Allow connection\n    $response.success:=True\nElse \n    // Authenticated mode - Allow or not the connection according to email or other device property\n    $response.success:=True\nEnd if \n\n// Optional message to display on mobile App.\nIf ($response.success)\n    $response.statusText:="You are successfully authenticated"\nElse \n    $response.statusText:="Sorry, you are not authorized to use this application."\nEnd if \n\n')),(0,i.kt)("p",null,"This method handles all incoming requests from the mobile apps and accepts or denies the connection. See the ",(0,i.kt)("a",{parentName:"p",href:"../4d/on-mobile-app-authentication"},"On Mobile App Authentication")," database method page for a full description of the method."),(0,i.kt)("p",null,"The most common and comfortable way to authenticate mobile users is to rely on email authentication. For a detailed example of email-based double authentication, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/tutorials/login-forms/email"},"this tutorial"),"."),(0,i.kt)("h3",{id:"login-form"},"Login Form"),(0,i.kt)("p",null,"The Login Form menu proposes all login forms available in the project, so that you can select the form to use.  ",(0,i.kt)("strong",{parentName:"p"},"Default")," is a basic login form provided by the mobile editor. Its uses the user email as identifier."),(0,i.kt)("p",null,"You can also create or download ",(0,i.kt)("a",{parentName:"p",href:"../tutorials/login-forms/custom-login-form"},"custom login forms"),". Once installed, custom login forms are listed in the Login Form pop up. You can either create or download custom login forms. Custom login forms can be downloaded from the ",(0,i.kt)("a",{parentName:"p",href:"https://4d-go-mobile.github.io/gallery//#/type/form-login"},(0,i.kt)("strong",{parentName:"a"},"Login form Github gallery")),"."),(0,i.kt)("p",null,"A custom login form is associated to a ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," file and (optionally) Swift or Kotlin source code. The custom login form files must be stored into a subfolder at the following location:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"myProject/Resources/Mobile/Form/Login/\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," file contains the following attributes:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'"',(0,i.kt)("strong",{parentName:"td"},"name"),'"'),(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},"login form name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'"',(0,i.kt)("strong",{parentName:"td"},"type"),'"'),(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},'set to "login"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'Optional "',(0,i.kt)("strong",{parentName:"td"},"capabilities"),'"'),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"to add information or options according to needs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'"',(0,i.kt)("strong",{parentName:"td"},"target"),'"'),(0,i.kt)("td",{parentName:"tr",align:null},"text or collection"),(0,i.kt)("td",{parentName:"tr",align:null},"platform(s) supported by your login form")))),(0,i.kt)("h2",{id:"push-notifications"},"Push notifications"),(0,i.kt)("p",null,"This feature is documented in the ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/special-features/push-notification"},"Push notifications")," section."),(0,i.kt)("h2",{id:"deep-linking"},"Deep Linking"),(0,i.kt)("p",null,"This feature is documented in the ",(0,i.kt)("a",{parentName:"p",href:"../special-features/deep-linking"},"Deep linking")," section."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2207:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Login-Settings-screen-Publishing-section-4D-for-iOS-be241cfa7f67de597f8249586991a3ac.png"},99376:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Reset-remote-url-883bc554af33a07cad5c1d9b085528f6.png"},96015:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Update-remote-url-75a80128450b5e1cced832b75d2240fd.png"},7071:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},83761:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/publishing-5ac50899ae51899e2c4bb7f7b24829e0.png"}}]);