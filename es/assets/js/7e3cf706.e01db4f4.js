"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9695],{59146:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=a(87462),i=(a(67294),a(3905));const o={id:"session-management",title:"Gesti\xf3n de sesi\xf3n"},r=void 0,s={unversionedId:"special-features/session-management",id:"version-19-R6/special-features/session-management",title:"Gesti\xf3n de sesi\xf3n",description:"Archivo de sesi\xf3n",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/special-features/session-management.md",sourceDirName:"special-features",slug:"/special-features/session-management",permalink:"/es/docs/special-features/session-management",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/special-features/session-management.md",tags:[],version:"19-R6",frontMatter:{id:"session-management",title:"Gesti\xf3n de sesi\xf3n"},sidebar:"docs",previous:{title:"Authentication",permalink:"/es/docs/special-features/authentication"},next:{title:"Push notifications",permalink:"/es/docs/special-features/push-notification"}},l={},c=[{value:"Archivo de sesi\xf3n",id:"archivo-de-sesi\xf3n",level:2},{value:"Componente Mobile Session Management",id:"componente-mobile-session-management",level:2}],p={toc:c};function m(e){let{components:n,...o}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"archivo-de-sesi\xf3n"},"Archivo de sesi\xf3n"),(0,i.kt)("p",null,"Cuando un usuario abre la aplicaci\xf3n por primera vez, se crea un archivo de sesi\xf3n y se almacena junto al archivo de datos actual en la carpeta MobileApps."),(0,i.kt)("p",null,"Los archivos de sesi\xf3n est\xe1n organizados y agrupados por carpeta de aplicaci\xf3n. Los TeamID y Bundle ID de la aplicaci\xf3n se concatenan para crear los nombres de las carpetas de la aplicaci\xf3n."),(0,i.kt)("p",null,"Este es un ejemplo de un archivo de sesi\xf3n generado para 4D for iOS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n"application":{\n  "id":"com.contactApp.Contact",\n  "name":"Contact",\n  "version":"1.0.0"\n},\n"team":{\n  "id":"UTT7VDX8W5"\n},\n"language":{\n  "id":"en_US",\n  "code":"en",\n  "region":"US"\n},\n"email":"",\n"device":{\n  "description":"iPhone X",\n  "version":"11.3",\n  "id":"0DC5132E-1EF4-407C-A832-5FE33D818AF3",\n  "simulator":true\n},\n"send":"link",\n"session":{\n  "id":"7023d9205074199d1c16fc00d24354e778137675",\n  "ip":"::ffff:192.168.5.4"\n},\n"status":"accepted",\n"token":"eyJhcHBOYW1lSUQiOiJjb20uY29udGFjdEFwcC5Db250YWN0IiwiaWQiOiI3MDIzZDkyMDUwNzQxOTlkMWMxNmZjMDBkMjQzNTRlNzc4MTM3Njc1IiwidGVhbUlEIjoiVVRUN1ZEWDhXNSJ9"\n}\n\n')),(0,i.kt)("p",null,'Si desea la posibilidad de validar manualmente el primer inicio de sesi\xf3n para cada sesi\xf3n usuario, debe cambiar el estado por defecto "aceptado" a "pendiente" a\xf1adiendo ',(0,i.kt)("inlineCode",{parentName:"p"},"$response.verify:=True")," al m\xe9todo base ",(0,i.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv19/4D/19/On-Mobile-App-Authentication-database-method.301-5392844.en.html"},(0,i.kt)("em",{parentName:"a"},"On Mobile App Authentication")),"."),(0,i.kt)("h2",{id:"componente-mobile-session-management"},"Componente Mobile Session Management"),(0,i.kt)("p",null,"Las sesiones pueden ser gestionadas por el componente ",(0,i.kt)("strong",{parentName:"p"},"Gesti\xf3n de sesiones m\xf3viles"),":"),(0,i.kt)("div",null,(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d/Mobile-Session-Management/releases/latest"},"Componente Mobile Session Management")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Descargue y descomprima el archivo zip"),(0,i.kt)("li",{parentName:"ol"},"Vaya al archivo Generar / Componentes y obtenga el archivo MOBILE SESSION MANAGEMENT.4dbase"),(0,i.kt)("li",{parentName:"ol"},"Cree una carpeta ",(0,i.kt)("strong",{parentName:"li"},"Componentes")," junto al proyecto 4D con los datos de la aplicaci\xf3n."),(0,i.kt)("li",{parentName:"ol"},"Coloque el componente ",(0,i.kt)("strong",{parentName:"li"},"MOBILE SESSION MANAGEMENT")," en la carpeta ",(0,i.kt)("strong",{parentName:"li"},"Componentes")," reci\xe9n creada."),(0,i.kt)("li",{parentName:"ol"},"Reinicie 4D."),(0,i.kt)("li",{parentName:"ol"},"Haga clic en el bot\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Ejecutar")," de la barra de herramientas"),(0,i.kt)("li",{parentName:"ol"},"En el explorador de m\xe9todos 4D, seleccione el m\xe9todo ",(0,i.kt)("strong",{parentName:"li"},"MOBILE SESSION MANAGEMENT")," y haga clic en el bot\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Ejecutar"),"."),(0,i.kt)("li",{parentName:"ol"},"La ventana de aplicaciones aparecer\xe1 mostrando todas sus aplicaciones:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Session",src:a(60216).Z,width:"882",height:"368"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Haga clic derecho en una sesi\xf3n para mostrar el archivo sesi\xf3n en el Finder o elim\xednelo."),(0,i.kt)("li",{parentName:"ul"},"Puede cambiar y definir el estado de la sesi\xf3n para cada dispositivo: aceptado o pendiente")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Session selected",src:a(17477).Z,width:"882",height:"368"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"El bot\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Push")," actualizar\xe1 la sesi\xf3n en la memoria."),(0,i.kt)("li",{parentName:"ul"},"El bot\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Refresh")," actualiza la lista de sesiones.")))}m.isMDXComponent=!0},3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>u});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=i,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?t.createElement(f,r(r({ref:n},p),{},{components:a})):t.createElement(f,r({ref:n},p))}));function u(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},17477:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/session-management-selected-3cb4acb42fad795985f4399d23f89e40.png"},60216:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/session-management-7e6c99c452a30403a179944f2b596999.png"}}]);