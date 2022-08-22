"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1339],{46063:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={id:"getting-started",title:"\u306f\u3058\u3081\u306b"},i=void 0,s={unversionedId:"tutorials/actions/getting-started",id:"tutorials/actions/getting-started",title:"\u306f\u3058\u3081\u306b",description:"\u76ee\u6a19",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/actions/getting-started.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/getting-started",permalink:"/go-mobile/ja/docs/next/tutorials/actions/getting-started",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/actions/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"\u306f\u3058\u3081\u306b"},sidebar:"tutorials",previous:{title:"\u30d5\u30a3\u30eb\u30bf\u30fc\u30af\u30a8\u30ea",permalink:"/go-mobile/ja/docs/next/tutorials/filter-queries/filter-query-introduction"},next:{title:"\u306f\u3058\u3081\u3066\u306e\u30a2\u30af\u30b7\u30e7\u30f3",permalink:"/go-mobile/ja/docs/next/tutorials/actions/define-first-action"}},c={},l=[],p={toc:l};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u76ee\u6a19")),(0,o.kt)("p",{parentName:"blockquote"},"Use actions in the generated iOS app.")),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/ja/docs/next/tutorials/actions/define-first-action"},"define actions")," directly from the Project Editor and execute 4D code from your generated mobile app!"),(0,o.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u3069\u3061\u3089\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u9078\u629e\u3057\u3066\u3082\uff0c\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u5bfe\u5fdc\u3057\u305f\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"4D for iOS templates")," from the Form section. \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u5bfe\u5fdc\u6e08\u3067\u3059\u3002 You just need to ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/ja/docs/next/tutorials/actions/define-first-action"},"define actions")," in the Actions section and create appropriate methods in 4D.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Your own custom templates")," you developed. An important additional step is required for your actions to work in the generated iOS app. Indeed, it is necessary to manually ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/ja/docs/next/tutorials/actions/adding-actions-template"},"include action Tags")," in your Listform and Detailforms templates."))),(0,o.kt)("p",null,"Now it's time to enjoy building a ",(0,o.kt)("strong",{parentName:"p"},"Tasks app"),", using 4D for iOS actions."))}u.isMDXComponent=!0},3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:e},p),{},{components:r})):n.createElement(f,i({ref:e},p))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);