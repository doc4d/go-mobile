"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7002],{41289:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={id:"use-data-formatter",title:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f7f\u7528\u3059\u308b"},l=void 0,i={unversionedId:"tutorials/data-formatter/use-data-formatter",id:"tutorials/data-formatter/use-data-formatter",title:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f7f\u7528\u3059\u308b",description:"\u76ee\u6a19",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/data-formatter/use-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/use-data-formatter",permalink:"/go-mobile/ja/docs/next/tutorials/data-formatter/use-data-formatter",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/data-formatter/use-formatter.md",tags:[],version:"current",frontMatter:{id:"use-data-formatter",title:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f7f\u7528\u3059\u308b"},sidebar:"tutorials",previous:{title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u7de8\u96c6",permalink:"/go-mobile/ja/docs/next/tutorials/gallery/update-gallery-template"},next:{title:"\u9759\u7684\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f5c\u6210\u3059\u308b",permalink:"/go-mobile/ja/docs/next/tutorials/data-formatter/create-static-data-formatter"}},s={},c=[{value:"\u2488 \u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",id:"-\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",level:2},{value:"\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f",id:"\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c",level:2}],u={toc:c};function p(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u76ee\u6a19")),(0,n.kt)("p",{parentName:"blockquote"},"\u30d3\u30eb\u30c8\u30a4\u30f3\u306e\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002")),(0,n.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30d3\u30eb\u30c8\u30a4\u30f3\u306e ",(0,n.kt)("a",{parentName:"p",href:"/go-mobile/ja/docs/next/project-definition/labels-and-icons#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88"},"\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc")," \u3092\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u9069\u7528\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"-\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"},"\u2488 \u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,n.kt)("p",null,"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044:"),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-DataFormatter/releases/latest/download/tutorial-DataFormatter.zip"},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9")),(0,n.kt)("h2",{id:"\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f"},"\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u30e9\u30d9\u30eb & \u30a2\u30a4\u30b3\u30f3")," \u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u30d7\u30ed\u30d1\u30c6\u30a3\u30a8\u30ea\u30a2\u306b\u304a\u3044\u3066\u3001\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u30ab\u30e9\u30e0\u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u30e9\u30d9\u30eb\u30a2\u30a4\u30b3\u30f3",src:r(89240).Z,width:"1082",height:"994"})),(0,n.kt)("p",null,"\u3053\u3053\u304b\u3089\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u9069\u5207\u306a\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 ",(0,n.kt)("a",{parentName:"p",href:"/go-mobile/ja/docs/next/project-definition/labels-and-icons#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%82%BF%E3%83%BC%E3%82%92%E9%81%B8%E6%8A%9E%E3%81%99%E3%82%8B"},"\u8907\u6570\u306e\u30d3\u30eb\u30c8\u30a4\u30f3\u30d5\u30a9\u30fc\u30de\u30c3\u30c8")," \u304b\u3089\u9078\u629e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"Available Credit \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u3001\u901a\u8ca8\u3068\u3057\u3066\u5b9a\u7fa9\u3057\u3066\u307f\u307e\u3057\u3087\u3046:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5229\u7528\u53ef\u80fd\u306a\u30af\u30ec\u30b8\u30c3\u30c8\u306e\u901a\u8ca8",src:r(95205).Z,width:"1082",height:"994"})),(0,n.kt)("p",null,"\u4ed6\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u5bfe\u3057\u3066\u3082\u3001\u540c\u3058\u3088\u3046\u306b\u51e6\u7406\u3057\u3066\u307f\u307e\u3057\u3087\u3046:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Current Balance \u3092 ",(0,n.kt)("strong",{parentName:"li"},"\u901a\u8ca8 $")," \u306b\u8a2d\u5b9a\u3057\u307e\u3059"),(0,n.kt)("li",{parentName:"ul"},"Percent Used \u3092 ",(0,n.kt)("strong",{parentName:"li"},"\u30d1\u30fc\u30bb\u30f3\u30c8")," \u306b\u8a2d\u5b9a\u3057\u307e\u3059"),(0,n.kt)("li",{parentName:"ul"},"Credit Limit \u3092 ",(0,n.kt)("strong",{parentName:"li"},'"\u3044\u3044\u3048" \u307e\u305f\u306f "\u306f\u3044"')," \u306b\u8a2d\u5b9a\u3057\u307e\u3059"),(0,n.kt)("li",{parentName:"ul"},"Credit Date \u3092 ",(0,n.kt)("strong",{parentName:"li"},"\u77ed\u3044\u65e5\u4ed8")," \u306b\u8a2d\u5b9a\u3057\u307e\u3059")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30d5\u30a3\u30fc\u30eb\u30c9\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u9078\u629e",src:r(10623).Z,width:"1082",height:"994"})),(0,n.kt)("h2",{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c"),(0,n.kt)("p",null,"\u3053\u3061\u3089\u304c\u3001Numbers\u30c6\u30fc\u30d6\u30eb\u306b\u3064\u3044\u3066\u9078\u629e\u3055\u308c\u305f\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u3068\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u306e iOS\u30a2\u30d7\u30ea\u3067\u306e\u6700\u7d42\u7684\u306a\u7d50\u679c\u3067\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"iPhone\u3067\u306e\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u306e\u7d50\u679c",src:r(13297).Z,width:"1417",height:"992"})),(0,n.kt)("p",null,"\u4ee5\u4e0a\u3067\u3059\uff01 ",(0,n.kt)("strong",{parentName:"p"},"\u30e9\u30d9\u30eb& \u30a2\u30a4\u30b3\u30f3")," \u3067\u5b9a\u7fa9\u3055\u308c\u305f\u3068\u304a\u308a\u306b\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3055\u308c\u3066\u3044\u308b\u306e\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"))}p.isMDXComponent=!0},3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),c=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(f,l(l({ref:e},u),{},{components:r})):a.createElement(f,l({ref:e},u))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95205:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/available-credit-currency-fa67ffaa458987fab0788afb0928fcc2.png"},89240:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/data-formatter-labels-icons-c079d865950c70ca0a5b92a05d3b0a8d.png"},13297:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/result-data-formatter-iphone-08af00b5a78df32dd0f7f19d5228cda5.png"},10623:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/select-field-formatters-41a9c6d67a78e82b6b4d736e5d171eb7.png"}}]);