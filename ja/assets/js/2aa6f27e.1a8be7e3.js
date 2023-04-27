"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4977],{84008:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var o=r(87462),i=(r(67294),r(3905));const n={id:"4d-for-ios-project-organization",title:"4D for iOS \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u6210"},a=void 0,c={unversionedId:"tutorials/customizing-with-xcode/4d-for-ios-project-organization",id:"version-20/tutorials/customizing-with-xcode/4d-for-ios-project-organization",title:"4D for iOS \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u6210",description:"Navigation tab \u3092\u9078\u629e\u3057\u3001Sources \u3092\u5c55\u958b\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/tutorials/customizing-with-xcode/4d-for-ios-project-organization.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/4d-for-ios-project-organization",permalink:"/go-mobile/ja/docs/tutorials/customizing-with-xcode/4d-for-ios-project-organization",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-20/tutorials/customizing-with-xcode/4d-for-ios-project-organization.md",tags:[],version:"20",frontMatter:{id:"4d-for-ios-project-organization",title:"4D for iOS \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u6210"},sidebar:"tutorials",previous:{title:"Xcode \u306e\u6982\u8981",permalink:"/go-mobile/ja/docs/tutorials/customizing-with-xcode/xcode-overview"},next:{title:"4D for iOS \u30a2\u30d7\u30ea\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",permalink:"/go-mobile/ja/docs/tutorials/customizing-with-xcode/customize-your-ios-app"}},l={},s=[{value:"Swift \u30d5\u30a1\u30a4\u30eb - \u7de8\u96c6\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",id:"swift-\u30d5\u30a1\u30a4\u30eb---\u7de8\u96c6\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059",level:3},{value:"Storyboard \u30d5\u30a1\u30a4\u30eb - \u7de8\u96c6\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u30c7\u30b6\u30a4\u30f3\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",id:"storyboard-\u30d5\u30a1\u30a4\u30eb---\u7de8\u96c6\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u30c7\u30b6\u30a4\u30f3\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059",level:3}],u={toc:s};function p(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Navigation tab \u3092\u9078\u629e\u3057\u3001Sources \u3092\u5c55\u958b\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"Structure \u304a\u3088\u3073 Forms \u3068\u3044\u3046\u30d5\u30a9\u30eb\u30c0\u30fc\u304c\u3042\u308a\u307e\u3059\u3002 \u305d\u308c\u305e\u308c\u306e\u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u306f\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u304a\u3088\u3073\u30d5\u30a9\u30fc\u30e0\u306e\u5b9a\u7fa9\u30d5\u30a1\u30a4\u30eb\u304c\u53ce\u3081\u3089\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Launch screen - \u30a2\u30d7\u30ea\u306e\u8d77\u52d5\u4e2d\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"Login screen - \u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c\u304c\u6709\u52b9\u306b\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"Settings screen - \u30ea\u30ed\u30fc\u30c9\u30dc\u30bf\u30f3\u3068\u30ed\u30b0\u30a2\u30a6\u30c8\u30dc\u30bf\u30f3\u304c\u542b\u307e\u308c\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"All published tables - \u30a2\u30d7\u30ea\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306e\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002")),(0,i.kt)("p",null,"\u30d5\u30a1\u30a4\u30eb\u5f62\u5f0f\u306f Swift \u307e\u305f\u306f Storyboard \u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002 \u305d\u308c\u305e\u308c\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u306f\u4e0b\u8a18\u306e\u3088\u3046\u306a\u7279\u5fb4\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"swift-\u30d5\u30a1\u30a4\u30eb---\u7de8\u96c6\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059"},"Swift \u30d5\u30a1\u30a4\u30eb - \u7de8\u96c6\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Swift \u30d5\u30a1\u30a4\u30eb",src:r(39836).Z,width:"1171",height:"933"})),(0,i.kt)("h3",{id:"storyboard-\u30d5\u30a1\u30a4\u30eb---\u7de8\u96c6\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u30c7\u30b6\u30a4\u30f3\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059"},"Storyboard \u30d5\u30a1\u30a4\u30eb - \u7de8\u96c6\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u30c7\u30b6\u30a4\u30f3\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Storyboard \u30d5\u30a1\u30a4\u30eb",src:r(40675).Z,width:"1171",height:"933"})),(0,i.kt)("p",null,'\u4f8b\u984c\u3067\u4f5c\u6210\u3057\u305f "Contact" \u30a2\u30d7\u30ea\u306e\u8a73\u7d30\u753b\u9762\u3092\u5b9f\u969b\u306b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u3066\u307f\u307e\u3057\u3087\u3046\uff01'))}p.isMDXComponent=!0},3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var o=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,o,i=function(t,e){if(null==t)return{};var r,o,i={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=o.createContext({}),s=function(t){var e=o.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},u=function(t){var e=s(t.components);return o.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var r=t.components,i=t.mdxType,n=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||n;return r?o.createElement(m,a(a({ref:e},u),{},{components:r})):o.createElement(m,a({ref:e},u))}));function f(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=r.length,a=new Array(n);a[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:i,a[1]=c;for(var s=2;s<n;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40675:(t,e,r)=>{r.d(e,{Z:()=>o});const o=r.p+"assets/images/storyboard-file-Xcode-4D-for-iOS-6610533844b748b97b194d879eb81028.png"},39836:(t,e,r)=>{r.d(e,{Z:()=>o});const o=r.p+"assets/images/swift-file-Xcode-4D-for-iOS-9b0b30523c9e70346ddeadf971f64a15.png"}}]);