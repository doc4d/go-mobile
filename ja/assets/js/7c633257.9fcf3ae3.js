"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2328],{38650:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const l={id:"from-your-iphone-and-xcode",title:"From your iPhone and Xcode"},a=void 0,i={unversionedId:"debug/from-your-iphone-and-xcode",id:"version-19-R5/debug/from-your-iphone-and-xcode",title:"From your iPhone and Xcode",description:"Debug from Xcode",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R5/debug/from-your-iphone-and-xcode.md",sourceDirName:"debug",slug:"/debug/from-your-iphone-and-xcode",permalink:"/go-mobile/ja/docs/19-R5/debug/from-your-iphone-and-xcode",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/debug/from-your-iphone-and-xcode.md",tags:[],version:"19-R5",frontMatter:{id:"from-your-iphone-and-xcode",title:"From your iPhone and Xcode"},sidebar:"docs",previous:{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u304b\u3089",permalink:"/go-mobile/ja/docs/19-R5/debug/from-project-editor"},next:{title:"From your Android device",permalink:"/go-mobile/ja/docs/19-R5/debug/from-your-android-device-and-android-studio"}},u={},p=[{value:"Debug from Xcode",id:"debug-from-xcode",level:2},{value:"Logger",id:"logger",level:3},{value:"Levels",id:"levels",level:3},{value:"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",id:"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",level:3},{value:"Emoticones",id:"emoticones",level:4},{value:"Circles",id:"circles",level:4},{value:"Debug from your iPhone",id:"debug-from-your-iphone",level:2}],s={toc:p};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"debug-from-xcode"},"Debug from Xcode"),(0,n.kt)("p",null,"If you have issues during the build process, you can open your generated project with Xcode selecting the ",(0,n.kt)("strong",{parentName:"p"},"Open the product with Xcode")," option from the ",(0,n.kt)("strong",{parentName:"p"},"Project")," Menu."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Open the project with Xcode",src:o(42272).Z,width:"2164",height:"1988"})),(0,n.kt)("p",null,"From here you can ",(0,n.kt)("strong",{parentName:"p"},"launch your application")," in the Simulator clicking on the ",(0,n.kt)("strong",{parentName:"p"},"Build button")," and get all the logs at the bottom of the Xcode work space."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Xcode logs",src:o(50734).Z,width:"2502",height:"2144"})),(0,n.kt)("h3",{id:"logger"},"Logger"),(0,n.kt)("p",null,"A logger is an object that will allow you to log and trace."),(0,n.kt)("p",null,"For that we use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/DaveWoodCom/XCGLogger"},"XCGLogger")," framework."),(0,n.kt)("p",null,"You will find the logger settings definition in your Xcode project/Settings/Settings.plist."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Xcode logs",src:o(32567).Z,width:"2414",height:"1410"})),(0,n.kt)("h3",{id:"levels"},"Levels"),(0,n.kt)("p",null,"You can filter and display different log level into your console adding log.level in you Settings.plist file."),(0,n.kt)("p",null,"To do so, add a row Right clicking inside the Settings.plist file and enter:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"log.level as Key"),(0,n.kt)("li",{parentName:"ul"},"Number as Type"),(0,n.kt)("li",{parentName:"ul"},"3 as Value (for example)")),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"available values")," are the following :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"0 for verbose"),(0,n.kt)("li",{parentName:"ul"},"1 for debug"),(0,n.kt)("li",{parentName:"ul"},"2 for info (default value)"),(0,n.kt)("li",{parentName:"ul"},"3 warning"),(0,n.kt)("li",{parentName:"ul"},"4 error"),(0,n.kt)("li",{parentName:"ul"},"5 severe")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Log level",src:o(53103).Z,width:"2414",height:"1410"})),(0,n.kt)("p",null,"So for this example, if you set log.level Value to 3, you will get ",(0,n.kt)("strong",{parentName:"p"},"warning, error and sever")," in your Xcode console."),(0,n.kt)("h3",{id:"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"},"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),(0,n.kt)("p",null,"You can display different visual indicators in the Xcode console to ",(0,n.kt)("strong",{parentName:"p"},"highlight different log types"),"."),(0,n.kt)("p",null,"To do so, you just have to open your Xcode project/Settings/Settings.plist"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Log Format",src:o(36749).Z,width:"2414",height:"1410"})),(0,n.kt)("h4",{id:"emoticones"},"Emoticones"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\uddef"'),(0,n.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd39"'),(0,n.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u2139\ufe0f"'),(0,n.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u26a0\ufe0f"'),(0,n.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\u203c\ufe0f"'),(0,n.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\ud83d\udca3"')),(0,n.kt)("h4",{id:"circles"},"Circles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\udd18"'),(0,n.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd35"'),(0,n.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u26aa"'),(0,n.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u2622\ufe0f"'),(0,n.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\ud83d\udd34"'),(0,n.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\u26ab"')),(0,n.kt)("h2",{id:"debug-from-your-iphone"},"Debug from your iPhone"),(0,n.kt)("p",null,"From your app, if you have a crash, you can display, edit and send feedback."),(0,n.kt)("p",null,"For that:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to your iPhone Settings"),(0,n.kt)("li",{parentName:"ul"},"find your app scrolling down"),(0,n.kt)("li",{parentName:"ul"},"Switch on the feedback")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Activate feedback and logs",src:o(25129).Z,width:"1521",height:"936"})),(0,n.kt)("p",null,"From here, the only thing you have to do is opening again your app. An action sheet will appear to allow you :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sends messages"),(0,n.kt)("li",{parentName:"ul"},"Suggest an improvement"),(0,n.kt)("li",{parentName:"ul"},"Show current log"),(0,n.kt)("li",{parentName:"ul"},"Report a problem")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Display and send logs",src:o(78663).Z,width:"1521",height:"936"})))}d.isMDXComponent=!0},3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>g});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(o),g=n,m=c["".concat(u,".").concat(g)]||c[g]||d[g]||l;return o?r.createElement(m,a(a({ref:t},s),{},{components:o})):r.createElement(m,a({ref:t},s))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<l;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},50734:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Xcode-logs-4da61f66a49075bae70d8c27efe6ef2a.png"},25129:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/activate-feedback-logs-4b68929c4bfb0252dcd30a8b4068b3c9.png"},78663:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/display-send-logs-cb5739ce1531f6aa55fb37b106cdb509.png"},36749:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/log-format-7a7bc7d581178f8d8d371706475c114d.png"},53103:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/log-level-0ec5cad4a8177259b8dfd0f2653d6ce7.png"},42272:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/open-project-Xcode-ed49be9ed186268dd01df3b4562d2092.png"},32567:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/settings-plist-xcode-e29ce6df5f7917d95a1728d11874fd22.png"}}]);