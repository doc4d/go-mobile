"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7567],{64851:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"one-to-many-relations",title:"1\u5bfeN\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3"},l=void 0,i={unversionedId:"tutorials/relations/one-to-many-relations",id:"tutorials/relations/one-to-many-relations",title:"1\u5bfeN\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067 1\u5bfeN\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u3092\u898b\u3066\u3044\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/relations/one-to-many-relations.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-relations",permalink:"/go-mobile/ja/docs/next/tutorials/relations/one-to-many-relations",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/relations/one-to-many-relations.md",tags:[],version:"current",frontMatter:{id:"one-to-many-relations",title:"1\u5bfeN\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3"},sidebar:"tutorials",previous:{title:"N\u5bfe1\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3",permalink:"/go-mobile/ja/docs/next/tutorials/relations/many-to-one-relations"},next:{title:"1\u5bfeN - \u30bf\u30a4\u30c8\u30eb\u306e\u8a2d\u5b9a",permalink:"/go-mobile/ja/docs/next/tutorials/relations/one-to-many-title-definition"}},s={},p=[{value:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u30bb\u30af\u30b7\u30e7\u30f3",id:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u30bb\u30af\u30b7\u30e7\u30f3",level:2},{value:"\u30e9\u30d9\u30eb &amp; \u30a2\u30a4\u30b3\u30f3\u30bb\u30af\u30b7\u30e7\u30f3",id:"\u30e9\u30d9\u30eb--\u30a2\u30a4\u30b3\u30f3\u30bb\u30af\u30b7\u30e7\u30f3",level:2},{value:"\u30d5\u30a9\u30fc\u30e0\u30bb\u30af\u30b7\u30e7\u30f3",id:"\u30d5\u30a9\u30fc\u30e0\u30bb\u30af\u30b7\u30e7\u30f3",level:2},{value:"\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c",id:"\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c",level:2}],c={toc:p};function u(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067 1\u5bfeN\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u3092\u898b\u3066\u3044\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044:"),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyRelations/archive/c006015afeb0e134d872152f53b8cd5e4dcb59bb.zip"},"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")),(0,a.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30ab\u30e9\u30d5\u30eb\u306a ",(0,a.kt)("strong",{parentName:"p"},"Time Keeper \u30a2\u30d7\u30ea")," \u3092 4D for iOS \u3067\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a2\u30d7\u30ea\u5b8c\u6210\u753b\u9762",src:n(966).Z,width:"650",height:"650"})),(0,a.kt)("p",null,"\u306f\u3058\u3081\u306b\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u3092\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u30ea\u30f3\u30af\u3092\u9078\u629e\u3059\u308b",src:n(23086).Z,width:"2152",height:"1666"})),(0,a.kt)("p",null,"\u5f93\u696d\u54e1 (",(0,a.kt)("strong",{parentName:"p"},"1")," \u30c6\u30fc\u30d6\u30eb) \u304b\u3089\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 (",(0,a.kt)("strong",{parentName:"p"},"N")," \u30c6\u30fc\u30d6\u30eb) \u306b\u5bfe\u3057\u3001",(0,a.kt)("strong",{parentName:"p"},"tasks")," \u3068\u3044\u3046\u540d\u524d\u306e\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u304c\u5f35\u3089\u308c\u3066\u3044\u308b\u3053\u3068\u306b\u6ce8\u76ee\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"\u30d5\u30a1\u30a4\u30eb\u30e1\u30cb\u30e5\u30fc\u306e\u958b\u304f \uff1e \u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8... \u3092\u9078\u629e\u3057\u3001",(0,a.kt)("em",{parentName:"p"},"Time Keeper")," \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u3044\u3066 ",(0,a.kt)("strong",{parentName:"p"},"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc")," \u30bb\u30af\u30b7\u30e7\u30f3\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u30bb\u30af\u30b7\u30e7\u30f3"},"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u30bb\u30af\u30b7\u30e7\u30f3"),(0,a.kt)("p",null,"Employees \u30c6\u30fc\u30d6\u30eb\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u30ea\u30b9\u30c8\u306b ",(0,a.kt)("strong",{parentName:"p"},"tasks")," \u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u306f\u305a\u3067\u3059\u3002 \u3053\u308c\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u3066\u3001\u516c\u958b\u3057\u307e\u3057\u3087\u3046\uff01"),(0,a.kt)("p",null,"\u4ee5\u5f8c\u3001\u3053\u306e\u30ea\u30ec\u30fc\u30c8\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u3001\u901a\u5e38\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3068\u540c\u3058\u3088\u3046\u306b\u6271\u3048\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u30d7\u30ed\u30d1\u30c6\u30a3",src:n(82112).Z,width:"2164",height:"1988"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u540d\u306b\u30de\u30a6\u30b9\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u91cd\u306d\u308b\u3068\u3001\u30d8\u30eb\u30d7Tips \u306b\u30c6\u30fc\u30d6\u30eb\u540d\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,a.kt)("h2",{id:"\u30e9\u30d9\u30eb--\u30a2\u30a4\u30b3\u30f3\u30bb\u30af\u30b7\u30e7\u30f3"},"\u30e9\u30d9\u30eb & \u30a2\u30a4\u30b3\u30f3\u30bb\u30af\u30b7\u30e7\u30f3"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u30e9\u30d9\u30eb\uff06\u30a2\u30a4\u30b3\u30f3")," \u30bb\u30af\u30b7\u30e7\u30f3\u306b 1\u5bfeN\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u304c\u8868\u793a\u3055\u308c\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"1\u5bfeN\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u4f5c\u6210\u3055\u308c\u308b iOS\u30a2\u30d7\u30ea\u306e\u753b\u9762\u306b\u30dc\u30bf\u30f3\u304c\u8ffd\u52a0\u3055\u308c\u308b\u3053\u3068\u306b\u7559\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"\u30e9\u30d9\u30eb\uff06\u30a2\u30a4\u30b3\u30f3\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u4ee5\u4e0b\u306e\u3082\u306e\u3092\u8a2d\u5b9a\u3057\u307e\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30dc\u30bf\u30f3\u30bf\u30a4\u30c8\u30eb"),(0,a.kt)("li",{parentName:"ul"},"\u30dc\u30bf\u30f3\u30a2\u30a4\u30b3\u30f3"),(0,a.kt)("li",{parentName:"ul"},"\u9077\u79fb\u5148\u306e\u753b\u9762\u306b\u8868\u793a\u3055\u308c\u308b\u30bf\u30a4\u30c8\u30eb (\u305f\u3068\u3048\u3070\u3001\u79fb\u52d5\u5143\u3092\u793a\u3059\u305f\u3081\u306b\u4f7f\u7528\u3057\u307e\u3059)\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30e9\u30d9\u30eb\uff06\u30a2\u30a4\u30b3\u30f3\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u30d7\u30ed\u30d1\u30c6\u30a3",src:n(61610).Z,width:"2164",height:"1988"})),(0,a.kt)("h2",{id:"\u30d5\u30a9\u30fc\u30e0\u30bb\u30af\u30b7\u30e7\u30f3"},"\u30d5\u30a9\u30fc\u30e0\u30bb\u30af\u30b7\u30e7\u30f3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30d5\u30a9\u30fc\u30e0\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u79fb\u52d5\u3057\u3066\u3001Employee \u30c6\u30fc\u30d6\u30eb\u306e\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u306b ",(0,a.kt)("em",{parentName:"li"},"tasks")," \u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7\u3057\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30d5\u30a9\u30fc\u30e0\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u8868\u793a\u3055\u308c\u305f\u30ea\u30ec\u30fc\u30c8\u30d5\u30a3\u30fc\u30eb\u30c9",src:n(27045).Z,width:"2164",height:"1988"})),(0,a.kt)("h2",{id:"\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c"},"\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Employee \u306e\u30ea\u30b9\u30c8\u753b\u9762\u3067\u9069\u5f53\u306a\u5f93\u696d\u54e1\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5f93\u696d\u54e1\u306e\u60c5\u5831\u304c\u8a73\u7d30\u753b\u9762\u306b\u8868\u793a\u3055\u308c\u3001",(0,a.kt)("strong",{parentName:"li"},"1\u5bfeN\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3")," \u306e\u30dc\u30bf\u30f3\u3082\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u306f\u305a\u3067\u3059\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u3053\u306e\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u5f93\u696d\u54e1\u306e\u30bf\u30b9\u30af\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30d5\u30a9\u30fc\u30e0\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u8868\u793a\u3055\u308c\u305f\u30ea\u30ec\u30fc\u30c8\u30d5\u30a3\u30fc\u30eb\u30c9",src:n(91574).Z,width:"2268",height:"992"})),(0,a.kt)("p",null,"\u4ee5\u4e0a\u3067\u3059\uff01 \u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b 1\u5bfeN\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u7d44\u307f\u8fbc\u3080\u3053\u3068\u306b\u6210\u529f\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"\u5b8c\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyRelations/releases/latest/download/tutorial-OneToManyRelations.zip"},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9")))}u.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:e},c),{},{components:n})):r.createElement(f,l({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27045:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/1-to-n-relations-forms-section-eaaf6fc4d1b5e4abc4bdc7b233c9e46b.png"},966:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/4D-for-iOS-dark-mode-card-relation-ios-13-ae79febdfa2739db76aeec303329d6d2.gif"},23086:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/Database-1-to-N-relations-4D-for-iOS-e367b692bf24073c368caea6ea463222.png"},91574:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/One-to-n-relations-task-ios-app-e63bb9be3b7cefc054e93c719581324d.png"},61610:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/Relations-properties-Labels-icons-section-4D-for-iOS-af246bee86dd0780f38c6c51f7c1cc71.png"},82112:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/Structure-section-relations-4D-for-iOS-5d5469663dad4dff95bedeb54f577eb5.png"}}]);