"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3835],{21770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const s={id:"session-management",title:"Session management"},i=void 0,r={unversionedId:"special-features/session-management",id:"special-features/session-management",title:"Session management",description:"4D for iOS and 4D for Android allow you to manage user sessions, so that you can get information about the connected users and improve their experience on your mobile application.",source:"@site/docs/special-features/session-management.md",sourceDirName:"special-features",slug:"/special-features/session-management",permalink:"/docs/next/special-features/session-management",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/special-features/session-management.md",tags:[],version:"current",frontMatter:{id:"session-management",title:"Session management"},sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/next/special-features/authentication"},next:{title:"Push notifications",permalink:"/docs/next/special-features/push-notification"}},l={},p=[{value:"Session file",id:"session-file",level:2},{value:"Session object",id:"session-object",level:2},{value:"Mobile Session Management Component",id:"mobile-session-management-component",level:2}],c={toc:p};function m(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"4D for iOS and 4D for Android allow you to manage user sessions, so that you can get information about the connected users and improve their experience on your mobile application. "),(0,o.kt)("h2",{id:"session-file"},"Session file"),(0,o.kt)("p",null,"When a user opens the app for the first time, a session file is automatically created and stored next to the current data file in the MobileApps folder. "),(0,o.kt)("p",null,"The session files are organized and grouped by app folder. The Team ID and app bundle ID are concatenated to create the app folder names."),(0,o.kt)("p",null,"Here is an example of a 4D for iOS-generated session file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n"application":{\n  "id":"com.contactApp.Contact",\n  "name":"Contact",\n  "version":"1.0.0"\n},\n"team":{\n  "id":"UTT7VDX8W5"\n},\n"language":{\n  "id":"en_US",\n  "code":"en",\n  "region":"US"\n},\n"email":"",\n"device":{\n  "description":"iPhone X",\n  "version":"11.3",\n  "id":"0DC5132E-1EF4-407C-A832-5FE33D818AF3",\n  "simulator":true\n},\n"send":"link",\n"session":{\n  "id":"7023d9205074199d1c16fc00d24354e778137675",\n  "ip":"::ffff:192.168.5.4"\n},\n"status":"accepted",\n"token":"eyJhcHBOYW1lSUQiOiJjb20uY29udGFjdEFwcC5Db250YWN0IiwiaWQiOiI3MDIzZDkyMDUwNzQxOTlkMWMxNmZjMDBkMjQzNTRlNzc4MTM3Njc1IiwidGVhbUlEIjoiVVRUN1ZEWDhXNSJ9"\n}\n\n')),(0,o.kt)("p",null,'By default, the "status" is automatically set to "accepted" if the session is validated by the ',(0,o.kt)("a",{parentName:"p",href:"/docs/next/4d/on-mobile-app-authentication"},"On Mobile App Authentication")," database method (",(0,o.kt)("inlineCode",{parentName:"p"},"$result.success")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),"). If you want the ability to manually validate the first login for every user session, add ",(0,o.kt)("inlineCode",{parentName:"p"},"$result.verify:=True")," to the object returned by the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/4d/on-mobile-app-authentication"},"On Mobile App Authentication"),' database method. It will change the "accepted" default status to "pending" in the session file. For more information, see ',(0,o.kt)("a",{parentName:"p",href:"/docs/next/special-features/authentication#without-the-component"},"this example"),"."),(0,o.kt)("h2",{id:"session-object"},"Session object"),(0,o.kt)("p",null,"Mobile sessions can take advantage of the powerful ",(0,o.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/WebServer/sessions.html"},"4D user sessions"),", when they are enabled on the server. In this case, information stored in the ",(0,o.kt)("a",{parentName:"p",href:"#session-file"},"mobile session file")," is used to fill the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/API/SessionClass.html"},"Session object")," on the server, so that you could share a cart for the same user between their web and mobile sessions, for example."),(0,o.kt)("p",null,"On the mobile project, the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/API/SessionClass.html"},"Session object")," is automatically available from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/4d/on-mobile-app-authentication"},"On Mobile App Authentication")," database method"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/4d/on-mobile-app-action"},"On Mobile App Action")," database method"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mesopelagique/form-detail-WebArea"},"webareas")," in your forms. ")),(0,o.kt)("p",null,"With user sessions, you can access and display user data through ",(0,o.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Tags/tags.html"},"4D tags")," in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mesopelagique/form-detail-WebArea"},"webareas"),". For example, in a page.shtml form, you can write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<html><body><h1>You use the following address: \x3c!--#4DTEXT Session.info.mobile.email--\x3e </h1></body></html>\n")),(0,o.kt)("h2",{id:"mobile-session-management-component"},"Mobile Session Management Component"),(0,o.kt)("p",null,"Sessions can be managed by the ",(0,o.kt)("strong",{parentName:"p"},"Mobile Session Management")," component:"),(0,o.kt)("div",null,(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d/Mobile-Session-Management/releases/latest"},"Mobile Session Management component")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download and unzip the zip file"),(0,o.kt)("li",{parentName:"ol"},"Go to Build / Components file and get the MOBILE SESSION MANAGEMENT.4dbase"),(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("strong",{parentName:"li"},"Components")," folder next to the 4D project with the app's data. "),(0,o.kt)("li",{parentName:"ol"},"Place the ",(0,o.kt)("strong",{parentName:"li"},"MOBILE SESSION MANAGEMENT")," component in the newly created ",(0,o.kt)("strong",{parentName:"li"},"Components")," folder."),(0,o.kt)("li",{parentName:"ol"},"Restart 4D. "),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Execute")," button from the toolbar"),(0,o.kt)("li",{parentName:"ol"},"In the 4D Methods Explorer, select the ",(0,o.kt)("strong",{parentName:"li"},"MOBILE SESSION MANAGEMENT")," method and click on the ",(0,o.kt)("strong",{parentName:"li"},"Execute")," button. "),(0,o.kt)("li",{parentName:"ol"},"The Apps window will appear displaying all of your apps: ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Session",src:n(58796).Z,width:"2094",height:"866"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Right click on a session to reveal the session file in the Finder or delete it."),(0,o.kt)("li",{parentName:"ul"},"You can change and define the session status for each device: accepted or pending")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Session selected",src:n(82925).Z,width:"2094",height:"866"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"Push")," button will update the session in memory."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"Refresh")," button updates the session list.")))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82925:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/session-management-selected-3e1aa442a1d5652b995fc6b1164093a6.png"},58796:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/session-management-d299039d00316272426dda6038e001a7.png"}}]);