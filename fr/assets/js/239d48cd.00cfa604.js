"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3486],{45597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={id:"session-management",title:"Gestion des sessions"},s=void 0,r={unversionedId:"special-features/session-management",id:"version-19-R3/special-features/session-management",title:"Gestion des sessions",description:"Fichier session",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R3/special-features/session-management.md",sourceDirName:"special-features",slug:"/special-features/session-management",permalink:"/go-mobile/fr/docs/19-R3/special-features/session-management",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/special-features/session-management.md",tags:[],version:"19-R3",frontMatter:{id:"session-management",title:"Gestion des sessions"},sidebar:"version-19-R3/docs",previous:{title:"Authentication",permalink:"/go-mobile/fr/docs/19-R3/special-features/authentication"},next:{title:"Push notifications",permalink:"/go-mobile/fr/docs/19-R3/special-features/push-notification"}},l={},p=[{value:"Fichier session",id:"fichier-session",level:2},{value:"Composant Mobile Session Management",id:"composant-mobile-session-management",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"fichier-session"},"Fichier session"),(0,i.kt)("p",null,"Lorsqu'un utilisateur ouvre l'application pour la premi\xe8re fois, un fichier session est cr\xe9\xe9 et stock\xe9 avec le fichier de donn\xe9es courant dans le dossier MobileApps."),(0,i.kt)("p",null,"Les fichiers de session sont organis\xe9s et group\xe9s par dossier d'application. Les Team ID et Bundle ID de l'application sont concat\xe9n\xe9s pour cr\xe9er des noms de dossiers d'application."),(0,i.kt)("p",null,"Voici un exemple de fichier de session g\xe9n\xe9r\xe9 par 4D for iOS :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n"application":{\n  "id":"com.contactApp.Contact",\n  "name":"Contact",\n  "version":"1.0.0"\n},\n"team":{\n  "id":"UTT7VDX8W5"\n},\n"language":{\n  "id":"en_US",\n  "code":"en",\n  "region":"US"\n},\n"email":"",\n"device":{\n  "description":"iPhone X",\n  "version":"11.3",\n  "id":"0DC5132E-1EF4-407C-A832-5FE33D818AF3",\n  "simulator":true\n},\n"send":"link",\n"session":{\n  "id":"7023d9205074199d1c16fc00d24354e778137675",\n  "ip":"::ffff:192.168.5.4"\n},\n"status":"accepted",\n"token":"eyJhcHBOYW1lSUQiOiJjb20uY29udGFjdEFwcC5Db250YWN0IiwiaWQiOiI3MDIzZDkyMDUwNzQxOTlkMWMxNmZjMDBkMjQzNTRlNzc4MTM3Njc1IiwidGVhbUlEIjoiVVRUN1ZEWDhXNSJ9"\n}\n\n')),(0,i.kt)("p",null,'Si vous souhaitez pouvoir valider manuellement la premi\xe8re connexion pour chaque session utilisateur, vous devez changer le statut par d\xe9faut "accept\xe9" en "en attente" en ajoutant ',(0,i.kt)("inlineCode",{parentName:"p"},"$response.verify:=True")," \xe0 la m\xe9thode base ",(0,i.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv19/4D/19/On-Mobile-App-Authentication-database-method.301-5392844.en.html"},(0,i.kt)("em",{parentName:"a"},"On Mobile App Authentication")),"."),(0,i.kt)("h2",{id:"composant-mobile-session-management"},"Composant Mobile Session Management"),(0,i.kt)("p",null,"Sessions can be managed by the ",(0,i.kt)("strong",{parentName:"p"},"Mobile Session Management")," component:"),(0,i.kt)("div",null,(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d/Mobile-Session-Management/releases/latest"},"Mobile Session Management component")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download and unzip the zip file"),(0,i.kt)("li",{parentName:"ol"},"Go to Build / Components file and get the MOBILE SESSION MANAGEMENT.4dbase"),(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("strong",{parentName:"li"},"Components")," folder next to the 4D project with the app's data."),(0,i.kt)("li",{parentName:"ol"},"Place the ",(0,i.kt)("strong",{parentName:"li"},"MOBILE SESSION MANAGEMENT")," component in the newly created ",(0,i.kt)("strong",{parentName:"li"},"Components")," folder."),(0,i.kt)("li",{parentName:"ol"},"Restart 4D."),(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Execute")," button from the toolbar"),(0,i.kt)("li",{parentName:"ol"},"In the 4D Methods Explorer, select the ",(0,i.kt)("strong",{parentName:"li"},"MOBILE SESSION MANAGEMENT")," method and click on the ",(0,i.kt)("strong",{parentName:"li"},"Execute")," button."),(0,i.kt)("li",{parentName:"ol"},"The Apps window will appear displaying all of your apps:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Session",src:n(73676).Z,width:"882",height:"368"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Right click on a session to reveal the session file in the Finder or delete it."),(0,i.kt)("li",{parentName:"ul"},"You can change and define the session status for each device: accepted or pending")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Session selected",src:n(53928).Z,width:"882",height:"368"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Push")," button will update the session in memory."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Refresh")," button updates the session list.")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(f,s(s({ref:t},c),{},{components:n})):o.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53928:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/session-management-selected-3cb4acb42fad795985f4399d23f89e40.png"},73676:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/session-management-7e6c99c452a30403a179944f2b596999.png"}}]);