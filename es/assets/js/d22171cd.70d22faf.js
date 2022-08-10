"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5306],{28486:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=i(87462),a=(i(67294),i(3905));const o={id:"push-notification",title:"Push notifications"},r=void 0,s={unversionedId:"special-features/push-notification",id:"version-19-R5/special-features/push-notification",title:"Push notifications",description:"Esta secci\xf3n no est\xe1 disponible actualmente en 4D for Android.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R5/special-features/push-notification.md",sourceDirName:"special-features",slug:"/special-features/push-notification",permalink:"/es/19-R5/special-features/push-notification",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/special-features/push-notification.md",tags:[],version:"19-R5",frontMatter:{id:"push-notification",title:"Push notifications"},sidebar:"docs",previous:{title:"Gesti\xf3n de sesi\xf3n",permalink:"/es/19-R5/special-features/session-management"},next:{title:"Deep Linking",permalink:"/es/19-R5/special-features/deep-linking"}},c={},l=[{value:"\xbfQu\xe9 es una notificaci\xf3n push?",id:"qu\xe9-es-una-notificaci\xf3n-push",level:2},{value:"Arquitectura t\xe9cnica",id:"arquitectura-t\xe9cnica",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:2},{value:"Ejemplo b\xe1sico para gestionar sus notificaciones push",id:"ejemplo-b\xe1sico-para-gestionar-sus-notificaciones-push",level:2},{value:"Notificaci\xf3n push con sincronizaci\xf3n de datos",id:"notificaci\xf3n-push-con-sincronizaci\xf3n-de-datos",level:2},{value:"Sincronizaci\xf3n de datos con una notificaci\xf3n que abre un registro",id:"sincronizaci\xf3n-de-datos-con-una-notificaci\xf3n-que-abre-un-registro",level:3},{value:"Sincronizaci\xf3n de datos con una simple notificaci\xf3n",id:"sincronizaci\xf3n-de-datos-con-una-simple-notificaci\xf3n",level:3},{value:"Configuraci\xf3n Windows",id:"configuraci\xf3n-windows",level:2},{value:"Carpeta MobileApps",id:"carpeta-mobileapps",level:2}],p={toc:l};function u(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"rmaci\xf3n 4D for Android")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Esta secci\xf3n no est\xe1 disponible actualmente en 4D for Android."))),(0,a.kt)("h2",{id:"qu\xe9-es-una-notificaci\xf3n-push"},"\xbfQu\xe9 es una notificaci\xf3n push?"),(0,a.kt)("p",null,"En un tel\xe9fono m\xf3vil, una notificaci\xf3n Push es un mensaje de alerta, recibido a trav\xe9s de una aplicaci\xf3n, que puede abrir, eliminar, autorizar o bloquear. Puede ser muy \xfatil por ejemplo para notificar a los usuarios de la aplicaci\xf3n que hay una nueva versi\xf3n disponible."),(0,a.kt)("p",null,"Pero, \xbfqu\xe9 pasa con la arquitectura a implementar, para integrar esta funcionalidad en una aplicaci\xf3n m\xf3vil? Y \xbfCu\xe1l es el proceso de una notificaci\xf3n push, desde la creaci\xf3n hasta la visualizaci\xf3n en el tel\xe9fono del usuario?"),(0,a.kt)("h2",{id:"arquitectura-t\xe9cnica"},"Arquitectura t\xe9cnica"),(0,a.kt)("p",null,"Estos son los diferentes elementos necesarios para crear, enviar y recibir una notificaci\xf3n push m\xf3vil:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Push notification process",src:i(97830).Z,width:"2317",height:"1600"})),(0,a.kt)("h2",{id:"prerrequisitos"},"Prerrequisitos"),(0,a.kt)("p",null,"Para enviar notificaciones push, se requiere un archivo de autenticaci\xf3n ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthKey_XXXYYY.p8")," de Apple."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Genere y descargue un archivo de llave .p8 como se describe en ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Generate_p8.md"},"esta documentaci\xf3n"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"En la p\xe1gina ",(0,a.kt)("a",{parentName:"p",href:"../project-definition/publishing"},"Publishing"),", marque la opci\xf3n ",(0,a.kt)("strong",{parentName:"p"},"Notificaciones push")," y seleccione su certificado en el proyecto m\xf3vil."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Publishing section",src:i(80442).Z,width:"2164",height:"1988"})),(0,a.kt)("h2",{id:"ejemplo-b\xe1sico-para-gestionar-sus-notificaciones-push"},"Ejemplo b\xe1sico para gestionar sus notificaciones push"),(0,a.kt)("p",null,"El componente ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/tree/master"},"4D Mobile App Server")," ofrece m\xe9todos para enviar notificaciones push a uno o varios destinatarios. Para obtener informaci\xf3n detallada, consulte la documentaci\xf3n del componente ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md"},"PushNotification"),"."),(0,a.kt)("p",null,"Este es un ejemplo simple para enviar una notificaci\xf3n push a ",(0,a.kt)("inlineCode",{parentName:"p"},"test@4d.com"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification:=MobileAppServer.PushNotification.new() \n$notification:=New object \n$notification.title:="Este es el t\xedtulo" \n$notification.body:="Este es el contenido de esta notificaci\xf3n" \n$response:=$pushNotification.send($notification;"test@4d.com")\n\n')),(0,a.kt)("p",null,"It's as simple as that!"),(0,a.kt)("p",null,":::consejo"),(0,a.kt)("p",null,"Utilice el componente ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md"},(0,a.kt)("strong",{parentName:"a"},"4D Mobile App Server")),' para adaptar f\xe1cilmente notificaciones push a sus propias necesidades. Si\xe9ntase libre de usarlo y elegir los aspectos m\xe1s relevantes para su aplicaci\xf3n. Y por supuesto, todas las contribuciones son bienvenidos a este proyecto, a trav\xe9s de comentarios, informes de errores y a\xfan mejor: "pull requests".'),(0,a.kt)("p",null,":::"),(0,a.kt)("h2",{id:"notificaci\xf3n-push-con-sincronizaci\xf3n-de-datos"},"Notificaci\xf3n push con sincronizaci\xf3n de datos"),(0,a.kt)("p",null,"Con una notificaci\xf3n push, tambi\xe9n puede lanzar una sincronizaci\xf3n para actualizar sus datos."),(0,a.kt)("p",null,"Por ejemplo, si su aplicaci\xf3n tiene una opci\xf3n de seguimiento de la entrega, la informaci\xf3n sobre la entrega se actualizar\xe1 en la base de datos gracias a una notificaci\xf3n enviada al cliente. Esta notificaci\xf3n, que contiene una solicitud de sincronizaci\xf3n de los datos, permitir\xe1 al cliente obtener los datos modificados en su tel\xe9fono inteligente."),(0,a.kt)("p",null,"Para ello utilizando el componente ",(0,a.kt)("inlineCode",{parentName:"p"},"4D Mobile App Server"),", es necesario especificar si se desea forzar la sincronizaci\xf3n de los datos en la notificaci\xf3n push. Por lo tanto, simplemente suministre el valor booleano ",(0,a.kt)("inlineCode",{parentName:"p"},"dataSynchro")," en el objeto ",(0,a.kt)("inlineCode",{parentName:"p"},"userInfo"),"."),(0,a.kt)("h3",{id:"sincronizaci\xf3n-de-datos-con-una-notificaci\xf3n-que-abre-un-registro"},"Sincronizaci\xf3n de datos con una notificaci\xf3n que abre un registro"),(0,a.kt)("p",null,"Por defecto, una notificaci\xf3n que abre un registro activa autom\xe1ticamente una sincronizaci\xf3n de datos."),(0,a.kt)("p",null,"Por ejemplo, en una aplicaci\xf3n Contact, si se ha modificado la informaci\xf3n espec\xedfica de un contacto (",(0,a.kt)("em",{parentName:"p"},"es decir.")," el registro de un contacto, como la direcci\xf3n o el n\xfamero de tel\xe9fono), el usuario recibe una notificaci\xf3n que abre autom\xe1ticamente el registro correspondiente y sincroniza los datos contenidos en el mismo. Cuando el usuario abre la notificaci\xf3n, la informaci\xf3n del contacto se actualiza completamente."),(0,a.kt)("p",null,"Este es un ejemplo del comportamiento por defecto, una petici\xf3n ",(0,a.kt)("inlineCode",{parentName:"p"},"dataSynchro")," con el m\xe9todo ",(0,a.kt)("inlineCode",{parentName:"p"},"open()"),":"),(0,a.kt)("p",null,":::nota"),(0,a.kt)("p",null,"Para el m\xe9todo ",(0,a.kt)("inlineCode",{parentName:"p"},"open()")," exclusivamente, este es el comportamiento por defecto. Como resultado, si no especifica el valor booleano ",(0,a.kt)("inlineCode",{parentName:"p"},"dataSynchro"),", es ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," por defecto."),(0,a.kt)("p",null,":::"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification:=MobileAppServer.PushNotification.new()\n\n$notification:=New object\n$notification.title:="This is title" \n$notification.body:="Este es el contenido de esta notificaci\xf3n" \n\n$entity:=ds.Employees.get("456456")\n$response:=$pushNotification.open($entity; $notification; $recipients)\n\n')),(0,a.kt)("p",null,"Sin embargo, tambi\xe9n se puede optar por no forzar una sincronizaci\xf3n de datos, evitando ",(0,a.kt)("inlineCode",{parentName:"p"},"dataSynchro"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification:=MobileAppServer.PushNotification.new()\n\n$notification:=New object\n$notification.title:="Este es el t\xedtulo" \n$notification.body:="Este es el contenido de esta notificaci\xf3n" \n$notification.userInfo:=New object("dataSynchro"; False)\n\n$entity:=ds.Employees.get("456456")\n$response:=$pushNotification.open($entity; $notification; $recipients)\n\n')),(0,a.kt)("h3",{id:"sincronizaci\xf3n-de-datos-con-una-simple-notificaci\xf3n"},"Sincronizaci\xf3n de datos con una simple notificaci\xf3n"),(0,a.kt)("p",null,"Tambi\xe9n puede solicitar una sincronizaci\xf3n para una simple notificaci\xf3n sin abrir un registro espec\xedfico. Por ejemplo, se han a\xf1adido algunas entradas nuevas. Entonces puede informar a su usuario y actualizar los datos sin ninguna manipulaci\xf3n por su parte."),(0,a.kt)("p",null,"Aqu\xed hay un ejemplo de c\xf3digo que tambi\xe9n puede utilizar con otros m\xe9todos, siempre y cuando llene el objeto ",(0,a.kt)("inlineCode",{parentName:"p"},"userInfo")," con el valor ",(0,a.kt)("inlineCode",{parentName:"p"},"dataSynchro"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification:=MobileAppServer.PushNotification.new()\n\n$notification:=New object\n$notification.title:="Este es el t\xedtulo" \n$notification.body:="Este es el contenido de esta notificaci\xf3n" \n$notification.userInfo:=New object("dataSynchro"; True)\n\n$response:=$pushNotification.send($notification; $recipients)\n\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Data synchronization animation",src:i(22106).Z,width:"360",height:"720"})),(0,a.kt)("h2",{id:"configuraci\xf3n-windows"},"Configuraci\xf3n Windows"),(0,a.kt)("p",null,"Los usuarios de Windows necesitan descargar la ",(0,a.kt)("a",{parentName:"p",href:"https://curl.se/download.html"},"\xfaltima versi\xf3n de CURL")," para trabajar en las variables del entorno de su m\xe1quina. O pueden insertar curl.exe en la carpeta Resources de su base de producci\xf3n."),(0,a.kt)("h2",{id:"carpeta-mobileapps"},"Carpeta MobileApps"),(0,a.kt)("p",null,"Tanto si trabaja en Windows como en macOS, tiene que copiar los siguientes archivos de su proyecto de desarrollo a su proyecto de producci\xf3n:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"4DBASE/MobileApps/ID.BundleID/AuthKey_XXXX.P8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"4DBASE/MobileApps/ID.BundleID/manifest.json"))))}u.isMDXComponent=!0},3905:(e,n,i)=>{i.d(n,{Zo:()=>p,kt:()=>m});var t=i(67294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(i),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return i?t.createElement(f,r(r({ref:n},p),{},{components:i})):t.createElement(f,r({ref:n},p))}));function m(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=i[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}d.displayName="MDXCreateElement"},97830:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/4D-for-ios-push-notification-1ba2c9f12090cef619cebe2a419431e3.png"},80442:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/push-notification-publishing-section-f2975b2a01f145baf627056df0614b45.png"},22106:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/pushandSynchro-f7cc0281002b632433be23a623298cd9.gif"}}]);