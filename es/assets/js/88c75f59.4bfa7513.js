"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1041],{27144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={id:"general",title:"General"},i=void 0,l={unversionedId:"project-definition/general",id:"version-20/project-definition/general",title:"General",description:"This page allows you to define your app's main information.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/project-definition/general.md",sourceDirName:"project-definition",slug:"/project-definition/general",permalink:"/go-mobile/es/docs/project-definition/general",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-20/project-definition/general.md",tags:[],version:"20",frontMatter:{id:"general",title:"General"},sidebar:"docs",previous:{title:"Generalidades",permalink:"/go-mobile/es/docs/project-definition/overview"},next:{title:"Estructura",permalink:"/go-mobile/es/docs/project-definition/structure"}},A={},c=[{value:"Target OS",id:"target-os",level:2},{value:"Organization",id:"organization",level:2},{value:"Product",id:"product",level:2},{value:"Main color",id:"main-color",level:3},{value:"Developer",id:"developer",level:2}],s={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page allows you to define your app's main information."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"General section",src:n(7145).Z,width:"690",height:"638"})),(0,r.kt)("h2",{id:"target-os"},"Target OS"),(0,r.kt)("p",null,"Select the mobile OS for which you want to build the app. This setting will define the available mobile editor options."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On macOS, you can select ",(0,r.kt)("strong",{parentName:"li"},"Android"),", ",(0,r.kt)("strong",{parentName:"li"},"iOS"),", or ",(0,r.kt)("strong",{parentName:"li"},"both targets")),(0,r.kt)("li",{parentName:"ul"},"On Windows, you can only select the ",(0,r.kt)("strong",{parentName:"li"},"Android")," target.")),(0,r.kt)("h2",{id:"organization"},"Organization"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Name:")," Name of your company, or your name."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Identifier:"),' Enter your organization\u2019s bundle identifier. This will be used to identify your application. The product name you enter is concatenated to create the "Bundle ID" using reverse domain name service notation (see ',(0,r.kt)("strong",{parentName:"p"},"ID")," below). This bundle ID must be unique to your app."),(0,r.kt)("p",null,'For example, if your company\u2019s name is "MyCompany" and your app\u2019s name is "MyApp", you could choose "com.MyCompany" as your organization\u2019s bundle identifier and your App bundle ID would be "com.MyCompany.MyApp".'),(0,r.kt)("p",null,":::nota"),(0,r.kt)("p",null,'The Bundle ID name must not contain space or special characters such as "*,%,/". They are automatically filtered and replaced with -.'),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"product"},"Product"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Name:"),' Your app\u2019s name. As described above, the product name is used to create the "Bundle ID". This Bundle ID must be the same as the Bundle ID you created in your Apple Development account.'),(0,r.kt)("p",null,":::nota"),(0,r.kt)("p",null,'The Bundle ID name must not contain space or special characters such as "*,%,/". They are automatically filtered and replaced with -.'),(0,r.kt)("p",null,":::"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Version:")," The version of your app. Add version numbers in ascending, sequential order starting with 1.0."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ID:")," (Bundle ID): This area is automatically generated as a composition of your organization identifier and product name. It is not editable."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Copyright:")," Your app's copyright. The mobile editor suggests a copyright format but you can create your own."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Icons:")," Master icon that will be used in various locations in you app. You just need to designate your icon and the mobile editor generates all of the required formats for you, in accordance with standard mobile guidelines."),(0,r.kt)("p",null,"To select an icon:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Drag and drop a picture directly into the icon area, or"),(0,r.kt)("li",{parentName:"ul"},"Use the image menu to select or copy your picture.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"icon",src:n(94112).Z,width:"375",height:"198"})),(0,r.kt)("p",null,"You can also double-click the area to display the picture selection dialog box."),(0,r.kt)("p",null,":::nota"),(0,r.kt)("p",null,'On Windows, you must use an "image file" (*.public.image).'),(0,r.kt)("p",null,":::"),(0,r.kt)("p",null,"Once the icon is selected, the mobile editor automatically creates all required icons for the app. You can access the generated icon formats by selecting ",(0,r.kt)("strong",{parentName:"p"},"Show the icons folder")," in the image menu."),(0,r.kt)("h3",{id:"main-color"},"Main color"),(0,r.kt)("p",null,"This menu allows you to select how to define the main color of your app. The main color is used to generate a custom color scheme for your app."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"icon",src:n(23478).Z,width:"264",height:"113"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Use the system color selector"),": displays the system color picker in which you can designate the main color"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Use the main color of the icon"),": let the mobile editor determine automatically the main color from your app's icon.")),(0,r.kt)("p",null,'At any time, you can reset the main color and get back to the icon\'s preset main color, by clicking on "Use the main color of the icon".'),(0,r.kt)("h2",{id:"developer"},"Developer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Name:")," This field is automatically prefilled with your user account name. You can enter any name."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Team:")," Your Developer Account Team ID, that will be used during the deployment phase. This ID can be get from your Developer Account."))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A=o.createContext({}),c=function(e){var t=o.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(A.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,A=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(A,".").concat(d)]||p[d]||u[d]||a;return n?o.createElement(m,i(i({ref:t},s),{},{components:n})):o.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var A in t)hasOwnProperty.call(t,A)&&(l[A]=t[A]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},94112:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},23478:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},7145:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/main-page-2a9d6b072df7c0677fec62be03e01fab.png"}}]);