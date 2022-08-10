"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3358],{82495:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={id:"deployment-in-house-archive-and-export",title:"Archivar y exportar un proyecto"},o=void 0,l={unversionedId:"tutorials/deploying-in-house/deployment-in-house-archive-and-export",id:"tutorials/deploying-in-house/deployment-in-house-archive-and-export",title:"Archivar y exportar un proyecto",description:"OBJETIVOS",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/deploying-in-house/deployment-in-house-archive-and-export.md",sourceDirName:"tutorials/deploying-in-house",slug:"/tutorials/deploying-in-house/deployment-in-house-archive-and-export",permalink:"/go-mobile/es/docs/next/tutorials/deploying-in-house/deployment-in-house-archive-and-export",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/deploying-in-house/deployment-in-house-archive-and-export.md",tags:[],version:"current",frontMatter:{id:"deployment-in-house-archive-and-export",title:"Archivar y exportar un proyecto"},sidebar:"tutorials",previous:{title:"Instalar en su dispositivo iOS",permalink:"/go-mobile/es/docs/next/tutorials/deploying-in-house/testing-on-your-device"},next:{title:"Distribuir una aplicaci\xf3n interna",permalink:"/go-mobile/es/docs/next/tutorials/deploying-in-house/deployment-in-house-distribute"}},s={},c=[{value:"PASO 1. Configuraci\xf3n Xcode",id:"paso-1-configuraci\xf3n-xcode",level:2},{value:"PASO 2. Obtenga su Team ID",id:"paso-2-obtenga-su-team-id",level:2},{value:"PASO 3. Configure 4D for iOS",id:"paso-3-configure-4d-for-ios",level:2},{value:"PASO 4. Abra su proyecto con Xcode",id:"paso-4-abra-su-proyecto-con-xcode",level:2},{value:"PASO 5. Archive su proyecto desde Xcode",id:"paso-5-archive-su-proyecto-desde-xcode",level:2},{value:"PASO 6. Exporte su proyecto",id:"paso-6-exporte-su-proyecto",level:2},{value:"PASO 7. Seleccione su m\xe9todo de distribuci\xf3n",id:"paso-7-seleccione-su-m\xe9todo-de-distribuci\xf3n",level:2},{value:"PASO 8. Seleccione las opciones de distribuci\xf3n de su empresa",id:"paso-8-seleccione-las-opciones-de-distribuci\xf3n-de-su-empresa",level:2},{value:"\xbfQu\xe9 es un manifiesto?",id:"qu\xe9-es-un-manifiesto",level:4},{value:"PASO 9. Informaci\xf3n del manifiesto de distribuci\xf3n",id:"paso-9-informaci\xf3n-del-manifiesto-de-distribuci\xf3n",level:2},{value:"PASO 10. Vuelva a firmar su aplicaci\xf3n",id:"paso-10-vuelva-a-firmar-su-aplicaci\xf3n",level:2},{value:"PASO 11. Verifique el contenido de su aplicaci\xf3n .ipa",id:"paso-11-verifique-el-contenido-de-su-aplicaci\xf3n-ipa",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Archivar y exportar su proyecto 4D for iOS"),(0,i.kt)("li",{parentName:"ul"},"Generar archivos .ipa y manifest"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"REQUISITOS PREVIOS")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Programa Apple Enterprise Developer")),(0,i.kt)("li",{parentName:"ul"},"Un servidor Web seguro"),(0,i.kt)("li",{parentName:"ul"},"Un icono de resoluci\xf3n 57 x 57 px"),(0,i.kt)("li",{parentName:"ul"},"Un icono de resoluci\xf3n 512 x 512 px"))),(0,i.kt)("h2",{id:"paso-1-configuraci\xf3n-xcode"},"PASO 1. Configuraci\xf3n Xcode"),(0,i.kt)("p",null,"Tras la validaci\xf3n de su cuenta por parte de Apple, abra Xcode y a\xf1ada su cuenta de Apple Enterprise Developer en Preferences > Accounts."),(0,i.kt)("p",null,"Xcode instalar\xe1 autom\xe1ticamente los elementos de provisi\xf3n y certificados necesarios."),(0,i.kt)("h2",{id:"paso-2-obtenga-su-team-id"},"PASO 2. Obtenga su Team ID"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inicie sesi\xf3n en su cuenta de desarrollador Apple. Encuentre su ITeam ID en Membership.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Obtenga su Team ID",src:a(10711).Z,width:"768",height:"739"})),(0,i.kt)("h2",{id:"paso-3-configure-4d-for-ios"},"PASO 3. Configure 4D for iOS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Lance 4D for iOS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"En la pesta\xf1a SECTIONS:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"General: introduzca su Team ID."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Enterprise-Team-ID",src:a(75942).Z,width:"1082",height:"1009"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Publicaci\xf3n: ingrese su URL de producci\xf3n (HTTPS es obligatorio para el despliegue).")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"En la pesta\xf1a BUILD:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Crear y ejecutar: cree su proyecto.")))),(0,i.kt)("h2",{id:"paso-4-abra-su-proyecto-con-xcode"},"PASO 4. Abra su proyecto con Xcode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Desde la pesta\xf1a BUILD del editor de proyectos de 4D for iOS, haga clic en ",(0,i.kt)("strong",{parentName:"li"},"Project > Abrir el proyecto con Xcode"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"pen your project with Xcode ",src:a(40490).Z,width:"1033",height:"994"})),(0,i.kt)("h2",{id:"paso-5-archive-su-proyecto-desde-xcode"},"PASO 5. Archive su proyecto desde Xcode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Desde Xcode, vaya al men\xfa del simulador y seleccione ",(0,i.kt)("strong",{parentName:"li"},"Generic iOS Device"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generic iOS Device",src:a(34495).Z,width:"318",height:"558"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Luego desde el men\xfa, haga clic en Product y seleccione ",(0,i.kt)("strong",{parentName:"li"},"Archive"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Archive your Project",src:a(78017).Z,width:"225",height:"337"})),(0,i.kt)("h2",{id:"paso-6-exporte-su-proyecto"},"PASO 6. Exporte su proyecto"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Al final del proceso de archivo, aparece la ventana del Organizador con el archivo que acaba de crear")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Haga clic en ",(0,i.kt)("strong",{parentName:"p"},"Export"),"."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Exporte su proyecto",src:a(24341).Z,width:"1228",height:"667"})),(0,i.kt)("h2",{id:"paso-7-seleccione-su-m\xe9todo-de-distribuci\xf3n"},"PASO 7. Seleccione su m\xe9todo de distribuci\xf3n"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Seleccione ",(0,i.kt)("strong",{parentName:"li"},"Enterprise")," y haga clic en ",(0,i.kt)("strong",{parentName:"li"},"Next"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Distribution Method",src:a(89504).Z,width:"737",height:"454"})),(0,i.kt)("h2",{id:"paso-8-seleccione-las-opciones-de-distribuci\xf3n-de-su-empresa"},"PASO 8. Seleccione las opciones de distribuci\xf3n de su empresa"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Puede dejar todas las casillas de selecci\xf3n marcadas.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Enterprise distribution options",src:a(3852).Z,width:"737",height:"454"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Puede elegir dejar que Xcode genere un archivo manifest.plist por usted o generarlo manualmente.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Haga clic en ",(0,i.kt)("strong",{parentName:"p"},"Next"),"."))),(0,i.kt)("h4",{id:"qu\xe9-es-un-manifiesto"},"\xbfQu\xe9 es un manifiesto?"),(0,i.kt)("p",null,"El manifiesto es una lista de propiedades basada en XML y debe contener:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"URL"),": URL que apunta al archivo .ipa."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"display-image"),": URL que apunta a un icono PNG de 57 x 57 px (72 x 72 px para iPad) utilizado durante la descarga y la instalaci\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"full-size-image"),": URL que apunta a una imagen PNG de 512 x 512 px que representa la aplicaci\xf3n iTunes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"bundle-identifier"),": la cadena de identificaci\xf3n de su aplicaci\xf3n. Puedes obtenerlo desde el archivo .plist de su aplicaci\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"bundle-version"),": la cadena de la versi\xf3n actual del paquete de su aplicaci\xf3n. Puedes obtenerlo desde el archivo .plist de su aplicaci\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title"),": el nombre de su aplicaci\xf3n.")),(0,i.kt)("p",null,"Aqu\xed hay un ejemplo de archivo manifest.plist:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n    <key>items</key>\n    <array>\n        <dict>\n            <key>assets</key>\n            <array>\n                <dict>\n                    <key>kind</key>\n                    <string>software-package</string>\n                    <key>url</key>\n                    <string>https://...Contact.ipa</string>\n                </dict>\n                <dict>\n                    <key>kind</key>\n                    <string>display-image</string>\n                    <key>url</key>\n                    <string>https://...Contact_icon_57.png</string>\n                </dict>\n                <dict>\n                    <key>kind</key>\n                    <string>full-size-image</string>\n                    <key>url</key>\n                    <string>https://...Contact_icon_512.png</string>\n                </dict>\n            </array>\n            <key>metadata</key>\n            <dict>\n                <key>bundle-identifier</key>\n                <string>com.contactApp.ContactDemoapp</string>\n                <key>bundle-version</key>\n                <string>1.0</string>\n                <key>kind</key>\n                <string>software</string>\n                <key>title</key>\n                <string>Contact Demo app</string>\n            </dict>\n        </dict>\n    </array>\n</dict>\n</plist>\n')),(0,i.kt)("h2",{id:"paso-9-informaci\xf3n-del-manifiesto-de-distribuci\xf3n"},"PASO 9. Informaci\xf3n del manifiesto de distribuci\xf3n"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Recomendamos dejar que Xcode haga el trabajo de ingresar la URL de su aplicaci\xf3n, as\xed como tambi\xe9n los URL de los iconos. Por supuesto, tendr\xe1 la opci\xf3n de cambiar los URL m\xe1s adelante.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Informaci\xf3n del manifiesto de distribuci\xf3n",src:a(19057).Z,width:"737",height:"454"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Haga clic en ",(0,i.kt)("strong",{parentName:"li"},"Next"),".")),(0,i.kt)("h2",{id:"paso-10-vuelva-a-firmar-su-aplicaci\xf3n"},"PASO 10. Vuelva a firmar su aplicaci\xf3n"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deje que Xcode administre la opci\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Automatically manage signing"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Vuelva a firmar su aplicaci\xf3n",src:a(326).Z,width:"737",height:"454"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Haga clic en ",(0,i.kt)("strong",{parentName:"li"},"Next"),".")),(0,i.kt)("h2",{id:"paso-11-verifique-el-contenido-de-su-aplicaci\xf3n-ipa"},"PASO 11. Verifique el contenido de su aplicaci\xf3n .ipa"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aqu\xed puede verificar que su identificador de aplicaci\xf3n sea correcto, as\xed como tambi\xe9n su Team ID.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Verifique el contenido de su aplicaci\xf3n .ipa",src:a(75402).Z,width:"737",height:"454"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Haga clic en ",(0,i.kt)("strong",{parentName:"li"},"Export")," y seleccione d\xf3nde guardar la carpeta de su aplicaci\xf3n en su computador.")))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=i,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},78017:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Archive-your-Project-4ded23cdc25f5f9e463d1fd103dd088a.png"},34495:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Deployment-Generic-iOS-Device-6802ac746895e64a241936d873b1569b.png"},89504:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Distribution-Method-selection-4203f92fd6f07bc095d5da471bdbfe31.png"},19057:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Distribution-manifest-information-7ab8a3fa2a7ddbacdb627ad9a6d290ab.png"},75942:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Enterprise-Team-ID-8de2641becb475e122149a607a22ab2b.png"},3852:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Enterprise-distribution-options-a0d5aa35c0dd9adc40c6e128c6a67b90.png"},40490:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},24341:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Organizer-window-archive-aacf8eecb7c3910074549a45dcf45e32.png"},326:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Re-sign-your-application-9e11a4678ac11a7bd04df4623a8719d0.png"},75402:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Review-ipa-content-de240a012f798dac5aae762ec059d6bc.png"},10711:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"}}]);