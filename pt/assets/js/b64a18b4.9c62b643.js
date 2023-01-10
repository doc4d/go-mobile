"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9227],{39968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={id:"publishing",title:"Publishing"},r=void 0,l={unversionedId:"project-definition/publishing",id:"version-19-R8/project-definition/publishing",title:"Publishing",description:"This page gives you access to your app's publishing settings and special mobile features:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R8/project-definition/publishing.md",sourceDirName:"project-definition",slug:"/project-definition/publishing",permalink:"/go-mobile/pt/docs/project-definition/publishing",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R8/project-definition/publishing.md",tags:[],version:"19-R8",frontMatter:{id:"publishing",title:"Publishing"},sidebar:"docs",previous:{title:"Formul\xe1rios",permalink:"/go-mobile/pt/docs/project-definition/forms"},next:{title:"Painel Gera\xe7\xe3o",permalink:"/go-mobile/pt/docs/project-definition/build-panel"}},s={},p=[{value:"Production URL",id:"production-url",level:2},{value:"Web Server Settings",id:"web-server-settings",level:2},{value:"How it looks on a device",id:"how-it-looks-on-a-device",level:2},{value:"Settings screen",id:"settings-screen",level:3},{value:"Modify remote url",id:"modify-remote-url",level:3},{value:"Authentication",id:"authentication",level:2},{value:"Authentication option",id:"authentication-option",level:3},{value:"Authentication method",id:"authentication-method",level:3},{value:"Login Form",id:"login-form",level:3},{value:"Push notifications",id:"push-notifications",level:2},{value:"Deep Linking",id:"deep-linking",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page gives you access to your app's publishing settings and special mobile features:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Publishing section",src:n(51174).Z,width:"985",height:"505"})),(0,i.kt)("h2",{id:"production-url"},"Production URL"),(0,i.kt)("p",null,"URL of the Web Server on which mobile apps will connect to read and write data, in production context. You can enter any valid address, i.e.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://my.wesbsite.com\nhttp://my.website.com:9200\nwww.website.com/mobile\n")),(0,i.kt)("p",null,"During the development phase, you can leave this area empty and set the ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/project-definition/data"},"Data source")," to ",(0,i.kt)("strong",{parentName:"p"},"Current data file"),"."),(0,i.kt)("p",null,":::dica"),(0,i.kt)("p",null,"The user will be able to ",(0,i.kt)("a",{parentName:"p",href:"#modify-remote-url"},"change the server url")," from the mobile device."),(0,i.kt)("p",null,":::"),(0,i.kt)("h2",{id:"web-server-settings"},"Web Server Settings"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Edit...")," button opens the ",(0,i.kt)("strong",{parentName:"p"},"Web")," page of the 4D settings dialog box. Use this page to define the following settings to embed in the mobile app:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enable HTTP")," option and ",(0,i.kt)("strong",{parentName:"li"},"HTTP port"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enable HTTPS")," option and ",(0,i.kt)("strong",{parentName:"li"},"HTTPS port"),".")),(0,i.kt)("p",null,":::nota"),(0,i.kt)("p",null,"If both HTTP and HTTPS are enabled, HTTP is used."),(0,i.kt)("p",null,":::"),(0,i.kt)("p",null,"Activating the HTTPS port requires that you installed a valid ",(0,i.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/Admin/tls.html"},"TLS certificate"),". You can create test certificates with 4D."),(0,i.kt)("p",null,"These settings are taken into account only if the ",(0,i.kt)("a",{parentName:"p",href:"#production-url"},"production URL")," is defined. Otherwise, the local IP address is used."),(0,i.kt)("p",null,":::nota"),(0,i.kt)("p",null,"The Simulator always works locally (127.0.0.1 or localhost)."),(0,i.kt)("p",null,":::"),(0,i.kt)("h2",{id:"how-it-looks-on-a-device"},"How it looks on a device"),(0,i.kt)("h3",{id:"settings-screen"},"Settings screen"),(0,i.kt)("p",null,"A Settings screen is available from the tab bar. You can also find it from the More tab if necessary (",(0,i.kt)("em",{parentName:"p"},"i.e."),", your app has more than four tables)."),(0,i.kt)("p",null,"The Settings screen allows you to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consult your remote URL and its current state"),(0,i.kt)("li",{parentName:"ul"},"Log out (if connected as an Authorized User)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Login &amp; Settings screen",src:n(16830).Z,width:"3400",height:"2131"})),(0,i.kt)("h3",{id:"modify-remote-url"},"Modify remote url"),(0,i.kt)("p",null,"You can easily update your remote url from iPhone Settings :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open your iPhone Settings"),(0,i.kt)("li",{parentName:"ul"},"Select the app you want the remote url to be updated"),(0,i.kt)("li",{parentName:"ul"},'Switch on the "Reset server address" option')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Reset remote url",src:n(50071).Z,width:"3400",height:"2131"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Then restart your app to reset the server address"),(0,i.kt)("li",{parentName:"ul"},"And finally define the new remote url")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Update remote url",src:n(88913).Z,width:"3400",height:"2131"})),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"A mobile application can require that the user be authenticated or not."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When authentication is not enabled, mobile users navigate in the application in Guest mode."),(0,i.kt)("li",{parentName:"ul"},"Once authentication is enabled, mobile users are asked to ",(0,i.kt)("strong",{parentName:"li"},"login")," before connecting to the application.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In any cases, when a mobile user connects to the server, a ",(0,i.kt)("a",{parentName:"p",href:"session-management"},"user session")," is created.")),(0,i.kt)("h3",{id:"authentication-option"},"Authentication option"),(0,i.kt)("p",null,"To enable authentication, check the ",(0,i.kt)("strong",{parentName:"p"},"Authentication")," option:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"authentication activation",src:n(8664).Z,width:"351",height:"122"})),(0,i.kt)("p",null,"When this option is selected, a Login form will be displayed to the user at startup. A Default login form is automatically selected in the Login Form menu (see below)."),(0,i.kt)("h3",{id:"authentication-method"},"Authentication method"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Create..."),"/",(0,i.kt)("strong",{parentName:"p"},"Edit...")," button opens the ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/4d/on-mobile-app-authentication"},(0,i.kt)("inlineCode",{parentName:"a"},"On Mobile App Authentication"))," database method in the 4D method editor. A default template code is provided, allowing all users to log as guests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'#DECLARE($request : Object)->$response : Object\n\n/*\n        $request = Informations provided by mobile application\n        $response = Informations returned to mobile application\n*/\n\n$response:=New object\n\n// Check user email\nIf ($request.email=Null)\n    // No email means Guest mode - Allow connection\n    $response.success:=True\nElse \n    // Authenticated mode - Allow or not the connection according to email or other device property\n    $response.success:=True\nEnd if \n\n// Optional message to display on mobile App.\nIf ($response.success)\n    $response.statusText:="You are successfully authenticated" Else \n    $response.statusText:="Sorry, you are not authorized to use this application."\nEnd if \n\n')),(0,i.kt)("p",null,"This method handles all incoming requests from the mobile apps and accepts or denies the connection. See the ",(0,i.kt)("a",{parentName:"p",href:"../4d/on-mobile-app-authentication"},"On Mobile App Authentication")," database method page for a full description of the method."),(0,i.kt)("p",null,"The most common and comfortable way to authenticate mobile users is to rely on email authentication. For a detailed example of email-based double authentication, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/tutorials/login-forms/email"},"this tutorial"),"."),(0,i.kt)("h3",{id:"login-form"},"Login Form"),(0,i.kt)("p",null,"The Login Form menu proposes all login forms available in the project, so that you can select the form to use.  ",(0,i.kt)("strong",{parentName:"p"},"Default")," is a basic login form provided by the mobile editor. Its uses the user email as identifier."),(0,i.kt)("p",null,"You can also create or download ",(0,i.kt)("a",{parentName:"p",href:"../tutorials/login-forms/custom-login-form"},"custom login forms"),". Once installed, custom login forms are listed in the Login Form pop up. You can either create or download custom login forms. Custom login forms can be downloaded from the ",(0,i.kt)("a",{parentName:"p",href:"https://4d-go-mobile.github.io/gallery//#/type/form-login"},(0,i.kt)("strong",{parentName:"a"},"Login form Github gallery")),"."),(0,i.kt)("p",null,"A custom login form is associated to a ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," file and (optionally) Swift or Kotlin source code. The custom login form files must be stored into a subfolder at the following location:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"myProject/Resources/Mobile/Form/Login/\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," file contains the following attributes:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'"',(0,i.kt)("strong",{parentName:"td"},"name"),'"'),(0,i.kt)("td",{parentName:"tr",align:null},"texto"),(0,i.kt)("td",{parentName:"tr",align:null},"login form name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'"',(0,i.kt)("strong",{parentName:"td"},"type"),'"'),(0,i.kt)("td",{parentName:"tr",align:null},"texto"),(0,i.kt)("td",{parentName:"tr",align:null},'set to "login"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'Optional "',(0,i.kt)("strong",{parentName:"td"},"capabilities"),'"'),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"to add information or options according to needs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'"',(0,i.kt)("strong",{parentName:"td"},"target"),'"'),(0,i.kt)("td",{parentName:"tr",align:null},"text or collection"),(0,i.kt)("td",{parentName:"tr",align:null},"platform(s) supported by your login form")))),(0,i.kt)("h2",{id:"push-notifications"},"Push notifications"),(0,i.kt)("p",null,"This feature is documented in the ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/special-features/push-notification"},"Push notifications")," section."),(0,i.kt)("h2",{id:"deep-linking"},"Deep Linking"),(0,i.kt)("p",null,"This feature is documented in the ",(0,i.kt)("a",{parentName:"p",href:"../special-features/deep-linking"},"Deep linking")," section."))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16830:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Login-Settings-screen-Publishing-section-4D-for-iOS-be241cfa7f67de597f8249586991a3ac.png"},50071:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Reset-remote-url-883bc554af33a07cad5c1d9b085528f6.png"},88913:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Update-remote-url-75a80128450b5e1cced832b75d2240fd.png"},8664:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},51174:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/publishing-5ac50899ae51899e2c4bb7f7b24829e0.png"}}]);