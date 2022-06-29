"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4824],{15947:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={id:"data-formatter",title:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc"},l=void 0,i={unversionedId:"tutorials/data-formatter/data-formatter",id:"version-19-R2/tutorials/data-formatter/data-formatter",title:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",description:"\u300c\u30e9\u30d9\u30eb\uff06\u30a2\u30a4\u30b3\u30f3\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\uff0c\u30c7\u30fc\u30bf\u578b\u306b\u5fdc\u3058\u305f\u65e2\u5b9a\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u304c\u9078\u629e\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R2/tutorials/data-formatter/data-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/",permalink:"/go-mobile/ja/docs/19-R2/tutorials/data-formatter/",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/data-formatter/data-formatter.md",tags:[],version:"19-R2",frontMatter:{id:"data-formatter",title:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc"},sidebar:"version-19-R2/tutorials",previous:{title:"Update a template",permalink:"/go-mobile/ja/docs/19-R2/tutorials/gallery/update-gallery-template"},next:{title:"\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f",permalink:"/go-mobile/ja/docs/19-R2/tutorials/data-formatter/open-mobile-project"}},u={},c=[],m={toc:c};function p(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u300c\u30e9\u30d9\u30eb\uff06\u30a2\u30a4\u30b3\u30f3\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\uff0c\u30c7\u30fc\u30bf\u578b\u306b\u5fdc\u3058\u305f\u65e2\u5b9a\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u304c\u9078\u629e\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Available formats:")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Text"),": Text"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Date"),": Date, Short date, Long date, Full date"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Time"),": Time, Short time, Duration, Integer number"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Boolean"),': "No" or "Yes", "False" or "True"'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Integer"),": Integer number, Decimal number, Real number, Percentage, Ordinal number, Currency $, Currency \u20ac, Currency \xa5, Spell Out"))),(0,n.kt)("p",null,"Let's get started by downloading the Starter project:"),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-DataFormatter/releases/latest/download/tutorial-DataFormatter.zip"},"Download")))}p.isMDXComponent=!0},3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>d});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=a.createContext({}),c=function(t){var e=a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=c(t.components);return a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,u=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=c(r),d=n,f=s["".concat(u,".").concat(d)]||s[d]||p[d]||o;return r?a.createElement(f,l(l({ref:e},m),{},{components:r})):a.createElement(f,l({ref:e},m))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);