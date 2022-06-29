"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3849],{13562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={id:"filter-query-introduction",title:"\u30d5\u30a3\u30eb\u30bf\u30fc\u30af\u30a8\u30ea"},a=void 0,l={unversionedId:"tutorials/filter-queries/filter-query-introduction",id:"tutorials/filter-queries/filter-query-introduction",title:"\u30d5\u30a3\u30eb\u30bf\u30fc\u30af\u30a8\u30ea",description:"In this tutorial, we'll show how to create filter queries to display filtered content in the generated mobile app.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/filter-queries/filter-query-introduction.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/filter-query-introduction",permalink:"/go-mobile/ja/docs/next/tutorials/filter-queries/filter-query-introduction",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/filter-queries/filter-query-introduction.md",tags:[],version:"current",frontMatter:{id:"filter-query-introduction",title:"\u30d5\u30a3\u30eb\u30bf\u30fc\u30af\u30a8\u30ea"},sidebar:"tutorials",previous:{title:"Create Kotlin formatter",permalink:"/go-mobile/ja/docs/next/tutorials/data-formatter/create-kotlin-formatter"},next:{title:"Define a Filter Query",permalink:"/go-mobile/ja/docs/next/tutorials/filter-queries/define-filter-query"}},u={},s=[{value:"\u2488 \u2488 \u2488 \u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b",id:"---\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b",level:2}],c={toc:s};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we'll show how to create ",(0,o.kt)("strong",{parentName:"p"},"filter queries")," to display filtered content in the generated mobile app."),(0,o.kt)("p",null,"Imagine you're an account manager and you want to consult your ",(0,o.kt)("em",{parentName:"p"},"In Progress")," contracts simply by connecting to your app with your email address."),(0,o.kt)("p",null,"First, from the Data section we're going define a ",(0,o.kt)("strong",{parentName:"p"},"basic filter query")," to only display ",(0,o.kt)("em",{parentName:"p"},"In Progress")," contracts. Then we're going to apply a ",(0,o.kt)("strong",{parentName:"p"},"user information-based filter")," which will depend on the account manager's email."),(0,o.kt)("h2",{id:"---\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b"},"\u2488 \u2488 \u2488 \u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b"),(0,o.kt)("p",null,"Before we begin, be sure to download the ",(0,o.kt)("strong",{parentName:"p"},"Starter project")," which includes a ",(0,o.kt)("strong",{parentName:"p"},"4DforiOSQueries.4dbase")," file (a demo database with a ready-to-use mobile app project)"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip"},"Starter project")),(0,o.kt)("p",null,"The database includes a:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CRM table")," with all the data we want to display in the generated iOS app"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AccountManager table")," with basic information about the account managers (email and name).")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CRM\uff08\u9867\u5ba2\u7ba1\u7406\uff09\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9",src:r(70605).Z,width:"2226",height:"1834"})),(0,o.kt)("p",null,"You're now ready to define your first restricted query."),(0,o.kt)("p",null,"Open the mobile project by clicking on Open > Mobile Project... and select CRM app > ",(0,o.kt)("strong",{parentName:"p"},"project.4dmobileapp"),"."))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70605:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/CRMDatabase-1b6c6c0179884652d0b0bc4fbe7e0041.png"}}]);