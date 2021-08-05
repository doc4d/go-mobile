(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[568],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=c(n),f=o,m=s["".concat(l,".").concat(f)]||s[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},71382:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=["components"],d={id:"introduction",title:"Introduction"},l=void 0,c={unversionedId:"getting-started/introduction",id:"getting-started/introduction",isDocsHomePage:!1,title:"Introduction",description:"The 4D go mobile feature includes 4D for iOS and 4D for Android.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/getting-started/introduction",permalink:"/go-mobile/es/docs/getting-started/introduction",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/getting-started/introduction.md",version:"current",frontMatter:{id:"introduction",title:"Introduction"},sidebar:"docs",next:{title:"Requisitos",permalink:"/go-mobile/es/docs/getting-started/requirements"}},u=[{value:"Fully integrated in 4D",id:"fully-integrated-in-4d",children:[]},{value:"Powered by ORDA",id:"powered-by-orda",children:[]},{value:"Creaci\xf3n de aplicaciones nativas",id:"creaci\xf3n-de-aplicaciones-nativas",children:[]},{value:"One database, many apps",id:"one-database-many-apps",children:[]},{value:"Offline mode",id:"offline-mode",children:[]},{value:"Open solution",id:"open-solution",children:[]}],p={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"4D go mobile")," feature includes ",(0,i.kt)("strong",{parentName:"p"},"4D for iOS")," and ",(0,i.kt)("strong",{parentName:"p"},"4D for Android"),"."),(0,i.kt)("p",null,"4D for iOS and 4D for Android allow you to configure, design, build, and deploy native iOS apps and/or Android apps based on a 4D database. Once generated and deployed, mobile clients can connect to 4D Server and interact with new or existing data with no extra requirements."),(0,i.kt)("p",null,"4D for iOS and 4D for Android are included in a single integrated 4D component. You can create a mobile project and decide to built it for iOS, for Android, or for both."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server"},(0,i.kt)("strong",{parentName:"a"},"4D Mobile App Server"))," component is also provided and contains useful methods to handle server-side authentication, push notifications, and much more."),(0,i.kt)("p",null,":::nota"),(0,i.kt)("p",null,"You need to use 4D on macOS to build iOS apps."),(0,i.kt)("p",null,":::"),(0,i.kt)("h2",{id:"fully-integrated-in-4d"},"Fully integrated in 4D"),(0,i.kt)("p",null,"With ",(0,i.kt)("strong",{parentName:"p"},"4D for iOS")," and ",(0,i.kt)("strong",{parentName:"p"},"4D for android"),", you can easily create mobile projects directly from 4D, without needing any prior expertise building native mobile apps."),(0,i.kt)("h2",{id:"powered-by-orda"},"Powered by ORDA"),(0,i.kt)("p",null,"Structure access and data queries benefit from ORDA technology for an object-oriented and optimized server-side code."),(0,i.kt)("h2",{id:"creaci\xf3n-de-aplicaciones-nativas"},"Creaci\xf3n de aplicaciones nativas"),(0,i.kt)("p",null,"4D handles the complexity and generates - in a totally transparent way - an Xcode project in pure Swift with an optimized UI/UX."),(0,i.kt)("h2",{id:"one-database-many-apps"},"One database, many apps"),(0,i.kt)("p",null,"One of the strengths of 4D mobile projects is that you have the opportunity to create an unlimited number of apps from different subsets of a single database, according to your needs and goals."),(0,i.kt)("h2",{id:"offline-mode"},"Offline mode"),(0,i.kt)("p",null,"All of your data is embedded in your app and available without needing an internet connection."),(0,i.kt)("h2",{id:"open-solution"},"Open solution"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Since native projects are generated, you can reopen them with Xcode (macOS) and Android Studio and continue to work on it."),(0,i.kt)("li",{parentName:"ul"},"All tables and forms are embedded into the generated app and are editable.")))}s.isMDXComponent=!0}}]);