"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8253],{95220:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"create-kotlin-formatter",title:"Create Kotlin formatter"},i=void 0,l={unversionedId:"tutorials/data-formatter/create-kotlin-formatter",id:"tutorials/data-formatter/create-kotlin-formatter",title:"Create Kotlin formatter",description:"OBJETIVOS",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/tutorials/data-formatter/create-kotlin-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/create-kotlin-formatter",permalink:"/go-mobile/pt/docs/next/tutorials/data-formatter/create-kotlin-formatter",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/data-formatter/create-kotlin-formatter.md",tags:[],version:"current",frontMatter:{id:"create-kotlin-formatter",title:"Create Kotlin formatter"},sidebar:"tutorials",previous:{title:"Create Swift formatter",permalink:"/go-mobile/pt/docs/next/tutorials/data-formatter/create-swift-formatter"},next:{title:"Filter queries",permalink:"/go-mobile/pt/docs/next/tutorials/filter-queries/filter-query-introduction"}},c={},p=[{value:"Object attribute Kotlin formatter",id:"object-attribute-kotlin-formatter",level:2}],u={toc:p};function d(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,a.kt)("p",{parentName:"blockquote"},"Create your first Kotlin formatters.")),(0,a.kt)("p",null,"A formatter can be composed of both Kotlin and ",(0,a.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/next/tutorials/data-formatter/create-swift-formatter"},"Swift")," code."),(0,a.kt)("h2",{id:"object-attribute-kotlin-formatter"},"Object attribute Kotlin formatter"),(0,a.kt)("p",null,"If you want a formatter that will enable you to dial a phone number value on click, we need a ",(0,a.kt)("strong",{parentName:"p"},"manifest.json file")," containing a ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"binding"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," value as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'{\n    "name": "phone",\n    "binding": "phoneAction",\n    "type": "text" \n    "target" : ["ios", "android"]\n}\n\n')),(0,a.kt)("p",null,'Note that the binding value "phoneAction" will be used in the Kotlin file and that the ',(0,a.kt)("inlineCode",{parentName:"p"},"BindingAdapter")," will interact with a specific field in an Android XML layout."),(0,a.kt)("p",null,"Here is the ",(0,a.kt)("inlineCode",{parentName:"p"},"PhoneAction.kt")," file to dial a phone number value on click on Android:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'package ___PACKAGE___\n\nimport android.content.Intent\nimport android.net.Uri\nimport android.widget.TextView\nimport androidx.databinding.BindingAdapter\n\n@BindingAdapter("phoneAction")\nfun phoneAction(view: TextView, phoneAction: String?) {\n    if (phoneAction.isNullOrEmpty()) return\n    view.text = phoneAction\n    view.setOnClickListener {\n        val dialIntent = Intent(Intent.ACTION_DIAL)\n        dialIntent.data = Uri.parse("tel:$phoneAction")\n        view.context.startActivity(dialIntent)\n    }\n}\n')),(0,a.kt)("p",null,"Putting all that together, you can save this formatter as a ",(0,a.kt)("strong",{parentName:"p"},".kt")," file in the formatter folder and use it in your mobile project."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture",src:n(91730).Z,width:"1628",height:"556"})),(0,a.kt)("p",null,"Check out the final result:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Final result",src:n(74205).Z,width:"700",height:"720"})))}d.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},91730:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/phoneAction_dir-4a33175d2cc12f780e091d476ecaa3b0.png"},74205:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/rendu-android-14f71c3c2305115bf53934226b91161e.png"}}]);