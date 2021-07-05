(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8140],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4633:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),r=["components"],s={id:"session-management",title:"Session management"},l=void 0,c={unversionedId:"special-features/session-management",id:"special-features/session-management",isDocsHomePage:!1,title:"Session management",description:"Session file",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/special-features/session-management.md",sourceDirName:"special-features",slug:"/special-features/session-management",permalink:"/go-mobile/fr/docs/special-features/session-management",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/special-features/session-management.md",version:"current",frontMatter:{id:"session-management",title:"Session management"},sidebar:"docs",previous:{title:"Authentication",permalink:"/go-mobile/fr/docs/special-features/authentication"},next:{title:"Push notifications",permalink:"/go-mobile/fr/docs/special-features/push-notification"}},p=[{value:"Session file",id:"session-file",children:[]},{value:"Mobile Session Management Component",id:"mobile-session-management-component",children:[]}],u={toc:p};function m(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"session-file"},"Session file"),(0,i.kt)("p",null,"When a user opens the app for the first time, a session file is created and stored next to the current data file in the MobileApps folder."),(0,i.kt)("p",null,"The session files are organized and grouped by app folder. The Team ID and app bundle ID are concatenated to create the app folder names."),(0,i.kt)("p",null,"Here is an example of a 4D for iOS-generated session file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n"application":{\n  "id":"com.contactApp.Contact",\n  "name":"Contact",\n  "version":"1.0.0"\n},\n"team":{\n  "id":"UTT7VDX8W5"\n},\n"language":{\n  "id":"en_US",\n  "code":"en",\n  "region":"US"\n},\n"email":"",\n"device":{\n  "description":"iPhone X",\n  "version":"11.3",\n  "id":"0DC5132E-1EF4-407C-A832-5FE33D818AF3",\n  "simulator":true\n},\n"send":"link",\n"session":{\n  "id":"7023d9205074199d1c16fc00d24354e778137675",\n  "ip":"::ffff:192.168.5.4"\n},\n"status":"accepted",\n"token":"eyJhcHBOYW1lSUQiOiJjb20uY29udGFjdEFwcC5Db250YWN0IiwiaWQiOiI3MDIzZDkyMDUwNzQxOTlkMWMxNmZjMDBkMjQzNTRlNzc4MTM3Njc1IiwidGVhbUlEIjoiVVRUN1ZEWDhXNSJ9"\n}\n\n')),(0,i.kt)("p",null,'If you want the ability to manually validate the first login for every user session, you must change the "accepted" default status to "pending" by adding ',(0,i.kt)("inlineCode",{parentName:"p"},"$response.verify:=True")," to the ",(0,i.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv19/4D/19/On-Mobile-App-Authentication-database-method.301-5392844.en.html"},(0,i.kt)("em",{parentName:"a"},"On Mobile App Authentication"))," database method."),(0,i.kt)("h2",{id:"mobile-session-management-component"},"Mobile Session Management Component"),(0,i.kt)("p",null,"Sessions can be managed by the ",(0,i.kt)("strong",{parentName:"p"},"Mobile Session Management")," component:"),(0,i.kt)("div",null,(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d/Mobile-Session-Management/releases/latest"},"Mobile Session Management component")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download and unzip the zip file"),(0,i.kt)("li",{parentName:"ol"},"Go to Build / Components file and get the MOBILE SESSION MANAGEMENT.4dbase"),(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("strong",{parentName:"li"},"Components")," folder next to the 4D project with the app's data."),(0,i.kt)("li",{parentName:"ol"},"Place the ",(0,i.kt)("strong",{parentName:"li"},"MOBILE SESSION MANAGEMENT")," component in the newly created ",(0,i.kt)("strong",{parentName:"li"},"Components")," folder."),(0,i.kt)("li",{parentName:"ol"},"Restart 4D."),(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Execute")," button from the toolbar"),(0,i.kt)("li",{parentName:"ol"},"In the 4D Methods Explorer, select the ",(0,i.kt)("strong",{parentName:"li"},"MOBILE SESSION MANAGEMENT")," method and click on the ",(0,i.kt)("strong",{parentName:"li"},"Execute")," button."),(0,i.kt)("li",{parentName:"ol"},"The Apps window will appear displaying all of your apps:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Session",src:n(57059).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Right click on a session to reveal the session file in the Finder or delete it."),(0,i.kt)("li",{parentName:"ul"},"You can change and define the session status for each device: accepted or pending")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Session selected",src:n(61572).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Push")," button will update the session in memory."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Refresh")," button updates the session list.")))}m.isMDXComponent=!0},61572:function(e,t,n){"use strict";t.Z=n.p+"assets/images/session-management-selected-3cb4acb42fad795985f4399d23f89e40.png"},57059:function(e,t,n){"use strict";t.Z=n.p+"assets/images/session-management-7e6c99c452a30403a179944f2b596999.png"}}]);