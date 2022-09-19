"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6856],{5714:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:"create-kotlin-formatter",title:"Kotlin \u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f5c\u6210\u3059\u308b"},i=void 0,l={unversionedId:"tutorials/data-formatter/create-kotlin-formatter",id:"version-19-R5/tutorials/data-formatter/create-kotlin-formatter",title:"Kotlin \u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f5c\u6210\u3059\u308b",description:"\u76ee\u6a19",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R5/tutorials/data-formatter/create-kotlin-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/create-kotlin-formatter",permalink:"/go-mobile/ja/docs/19-R5/tutorials/data-formatter/create-kotlin-formatter",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/data-formatter/create-kotlin-formatter.md",tags:[],version:"19-R5",frontMatter:{id:"create-kotlin-formatter",title:"Kotlin \u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f5c\u6210\u3059\u308b"},sidebar:"tutorials",previous:{title:"Swift \u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f5c\u6210\u3059\u308b",permalink:"/go-mobile/ja/docs/19-R5/tutorials/data-formatter/create-swift-formatter"},next:{title:"\u30d5\u30a3\u30eb\u30bf\u30fc\u30af\u30a8\u30ea",permalink:"/go-mobile/ja/docs/19-R5/tutorials/filter-queries/filter-query-introduction"}},p={},c=[{value:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u7528 Kotlin \u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",id:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u7528-kotlin-\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",level:2}],d={toc:c};function s(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u76ee\u6a19")),(0,o.kt)("p",{parentName:"blockquote"},"\u6700\u521d\u306e Kotlin \u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),(0,o.kt)("p",null,"\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u306f\u3001Kotlin \u3068 ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/ja/docs/19-R5/tutorials/data-formatter/create-swift-formatter"},"Swift")," \u4e21\u65b9\u306e\u30b3\u30fc\u30c9\u3067\u69cb\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u7528-kotlin-\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc"},"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u7528 Kotlin \u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc"),(0,o.kt)("p",null,"\u30af\u30ea\u30c3\u30af\u6642\u306b\u96fb\u8a71\u756a\u53f7\u3092\u30c0\u30a4\u30e4\u30eb\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"binding"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"type"),"\u3001\u304a\u3088\u3073 ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," \u306e\u5024\u3092\u542b\u3080 ",(0,o.kt)("strong",{parentName:"p"},"manifest.json file")," \u304c\u5fc5\u8981\u3067\u3059:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'{\n    "name": "phone",\n    "binding": "phoneAction",\n    "type": "text" \n    "target" : ["ios", "android"]\n}\n\n')),(0,o.kt)("p",null,'binding \u306e\u5024 "phoneAction" \u306f Kotlin\u30d5\u30a1\u30a4\u30eb\u3067\u4f7f\u7528\u3055\u308c\u3001',(0,o.kt)("inlineCode",{parentName:"p"},"BindingAdapter")," \u304c Android XML \u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u7279\u5b9a\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3068\u5bfe\u8a71\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"Android \u3067\u96fb\u8a71\u756a\u53f7\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30c0\u30a4\u30e4\u30eb\u3059\u308b\u305f\u3081\u306e ",(0,o.kt)("inlineCode",{parentName:"p"},"PhoneAction.kt")," \u30d5\u30a1\u30a4\u30eb\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'package ___PACKAGE___\n\nimport android.content.Intent\nimport android.net.Uri\nimport android.widget.TextView\nimport androidx.databinding.BindingAdapter\n\n@BindingAdapter("phoneAction")\nfun phoneAction(view: TextView, phoneAction: String?) {\n    if (phoneAction.isNullOrEmpty()) return\n    view.text = phoneAction\n    view.setOnClickListener {\n        val dialIntent = Intent(Intent.ACTION_DIAL)\n        dialIntent.data = Uri.parse("tel:$phoneAction")\n        view.context.startActivity(dialIntent)\n    }\n}\n')),(0,o.kt)("p",null,"\u3053\u308c\u3089\u3092\u307e\u3068\u3081\u3066\u3001\u3053\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092 ",(0,o.kt)("strong",{parentName:"p"},".kt")," \u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u4fdd\u5b58\u3059\u308c\u3070\u3001\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u30fc",src:n(97051).Z,width:"1628",height:"556"})),(0,o.kt)("p",null,"\u3053\u306e\u3088\u3046\u306a\u7d50\u679c\u306b\u306a\u308a\u307e\u3059:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u6700\u7d42\u7d50\u679c",src:n(2149).Z,width:"700",height:"720"})))}s.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(f,i(i({ref:e},d),{},{components:n})):r.createElement(f,i({ref:e},d))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97051:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/phoneAction_dir-4a33175d2cc12f780e091d476ecaa3b0.png"},2149:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/rendu-android-14f71c3c2305115bf53934226b91161e.png"}}]);