(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8140],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?o.createElement(f,r(r({ref:n},p),{},{components:t})):o.createElement(f,r({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4633:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var o=t(22122),i=t(19756),a=(t(67294),t(3905)),r=["components"],s={id:"session-management",title:"Gestion des sessions"},l=void 0,c={unversionedId:"special-features/session-management",id:"special-features/session-management",isDocsHomePage:!1,title:"Gestion des sessions",description:"Fichier session",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/special-features/session-management.md",sourceDirName:"special-features",slug:"/special-features/session-management",permalink:"/go-mobile/fr/docs/next/special-features/session-management",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/special-features/session-management.md",version:"current",frontMatter:{id:"session-management",title:"Gestion des sessions"},sidebar:"docs",previous:{title:"Authentification",permalink:"/go-mobile/fr/docs/next/special-features/authentication"},next:{title:"Push notifications",permalink:"/go-mobile/fr/docs/next/special-features/push-notification"}},p=[{value:"Fichier session",id:"fichier-session",children:[]},{value:"Composant Mobile Session Management",id:"composant-mobile-session-management",children:[]}],u={toc:p};function m(e){var n=e.components,s=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"fichier-session"},"Fichier session"),(0,a.kt)("p",null,"Lorsqu'un utilisateur ouvre l'application pour la premi\xe8re fois, un fichier session est cr\xe9\xe9 et stock\xe9 avec le fichier de donn\xe9es courant dans le dossier MobileApps."),(0,a.kt)("p",null,"Les fichiers de session sont organis\xe9s et group\xe9s par dossier d'application. Les Team ID et Bundle ID de l'application sont concat\xe9n\xe9s pour cr\xe9er des noms de dossiers d'application."),(0,a.kt)("p",null,"Voici un exemple de fichier de session g\xe9n\xe9r\xe9 par 4D for iOS :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n"application":{\n  "id":"com.contactApp.Contact",\n  "name":"Contact",\n  "version":"1.0.0"\n},\n"team":{\n  "id":"UTT7VDX8W5"\n},\n"language":{\n  "id":"en_US",\n  "code":"en",\n  "region":"US"\n},\n"email":"",\n"device":{\n  "description":"iPhone X",\n  "version":"11.3",\n  "id":"0DC5132E-1EF4-407C-A832-5FE33D818AF3",\n  "simulator":true\n},\n"send":"link",\n"session":{\n  "id":"7023d9205074199d1c16fc00d24354e778137675",\n  "ip":"::ffff:192.168.5.4"\n},\n"status":"accepted",\n"token":"eyJhcHBOYW1lSUQiOiJjb20uY29udGFjdEFwcC5Db250YWN0IiwiaWQiOiI3MDIzZDkyMDUwNzQxOTlkMWMxNmZjMDBkMjQzNTRlNzc4MTM3Njc1IiwidGVhbUlEIjoiVVRUN1ZEWDhXNSJ9"\n}\n\n')),(0,a.kt)("p",null,'Si vous souhaitez pouvoir valider manuellement la premi\xe8re connexion pour chaque session utilisateur, vous devez changer le statut par d\xe9faut "accept\xe9" en "en attente" en ajoutant ',(0,a.kt)("inlineCode",{parentName:"p"},"$response.verify:=True")," \xe0 la m\xe9thode base ",(0,a.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv19/4D/19/On-Mobile-App-Authentication-database-method.301-5392844.en.html"},(0,a.kt)("em",{parentName:"a"},"On Mobile App Authentication")),"."),(0,a.kt)("h2",{id:"composant-mobile-session-management"},"Composant Mobile Session Management"),(0,a.kt)("p",null,"Sessions can be managed by the ",(0,a.kt)("strong",{parentName:"p"},"Mobile Session Management")," component:"),(0,a.kt)("div",null,(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d/Mobile-Session-Management/releases/latest"},"Mobile Session Management component")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download and unzip the zip file"),(0,a.kt)("li",{parentName:"ol"},"Go to Build / Components file and get the MOBILE SESSION MANAGEMENT.4dbase"),(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("strong",{parentName:"li"},"Components")," folder next to the 4D project with the app's data."),(0,a.kt)("li",{parentName:"ol"},"Place the ",(0,a.kt)("strong",{parentName:"li"},"MOBILE SESSION MANAGEMENT")," component in the newly created ",(0,a.kt)("strong",{parentName:"li"},"Components")," folder."),(0,a.kt)("li",{parentName:"ol"},"Restart 4D."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"Execute")," button from the toolbar"),(0,a.kt)("li",{parentName:"ol"},"In the 4D Methods Explorer, select the ",(0,a.kt)("strong",{parentName:"li"},"MOBILE SESSION MANAGEMENT")," method and click on the ",(0,a.kt)("strong",{parentName:"li"},"Execute")," button."),(0,a.kt)("li",{parentName:"ol"},"The Apps window will appear displaying all of your apps:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Session",src:t(57059).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Right click on a session to reveal the session file in the Finder or delete it."),(0,a.kt)("li",{parentName:"ul"},"You can change and define the session status for each device: accepted or pending")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Session selected",src:t(61572).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Push")," button will update the session in memory."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Refresh")," button updates the session list.")))}m.isMDXComponent=!0},61572:function(e,n,t){"use strict";n.Z=t.p+"assets/images/session-management-selected-3cb4acb42fad795985f4399d23f89e40.png"},57059:function(e,n,t){"use strict";n.Z=t.p+"assets/images/session-management-7e6c99c452a30403a179944f2b596999.png"}}]);