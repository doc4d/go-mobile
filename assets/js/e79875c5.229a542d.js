"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8256],{16770:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={id:"define-filter-query",title:"Define a Filter Query"},o=void 0,l={unversionedId:"tutorials/filter-queries/define-filter-query",id:"tutorials/filter-queries/define-filter-query",title:"Define a Filter Query",description:'For the moment, if you build the Starter project app and enter "michelle.simpson@mail.com" as the login email (one of the account managers), you\'ll see all manager contracts and statuses (Closed and In Progress).',source:"@site/docs/tutorials/filter-queries/define-filter-query.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/define-filter-query",permalink:"/next/tutorials/filter-queries/define-filter-query",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/filter-queries/define-filter-query.md",tags:[],version:"current",frontMatter:{id:"define-filter-query",title:"Define a Filter Query"}},s={},u=[],p={toc:u};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'For the moment, if you build the Starter project app and enter "',(0,n.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),"\" as the login email (one of the account managers), you'll see ",(0,n.kt)("strong",{parentName:"p"},"all manager contracts and statuses")," (",(0,n.kt)("em",{parentName:"p"},"Closed")," and ",(0,n.kt)("em",{parentName:"p"},"In Progress"),")."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"iOS app without queries",src:r(77651).Z,width:"1559",height:"907"})),(0,n.kt)("p",null,"As we discussed earlier, we want the account managers to access their ",(0,n.kt)("em",{parentName:"p"},"In Progress")," contracts by logging into their mobile app with their email. To do this:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Data section")),(0,n.kt)("li",{parentName:"ul"},"Right-click in the ",(0,n.kt)("strong",{parentName:"li"},"Filter query")," field to make the ",(0,n.kt)("strong",{parentName:"li"},"Field, Comparators and Operators buttons")," appear."),(0,n.kt)("li",{parentName:"ul"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Fields")," button and select ",(0,n.kt)("strong",{parentName:"li"},"Status"),"."),(0,n.kt)("li",{parentName:"ul"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Comparators")," button and select ",(0,n.kt)("strong",{parentName:"li"},"Equal to"),"."),(0,n.kt)("li",{parentName:"ul"},"Because you want to display ",(0,n.kt)("em",{parentName:"li"},"open")," contracts, enter ",(0,n.kt)("strong",{parentName:"li"},"In progress")),(0,n.kt)("li",{parentName:"ul"},"Remember to validate your query by clicking on the ",(0,n.kt)("strong",{parentName:"li"},"Validate")," button, otherwise you won't be able to build your app.")),(0,n.kt)("p",null,"You should have this result:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"CRM database",src:r(69334).Z,width:"2164",height:"1988"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTE")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"filter")," icon is displayed at the right of each table when a basic filter is applied to it."),(0,n.kt)("li",{parentName:"ul"},"For these kinds of filter queries, you can choose to embed data into the app or to load the data after login by checking the ",(0,n.kt)("strong",{parentName:"li"},"Embed data into the built application")," checkbox."),(0,n.kt)("li",{parentName:"ul"},"Size will be calculated at the first build for you to visualize the ",(0,n.kt)("strong",{parentName:"li"},"size of your data"),"."))),(0,n.kt)("p",null,'If you build your app and enter "',(0,n.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),"\" as the login email, you'll see that all contracts ",(0,n.kt)("em",{parentName:"p"},"In Progress")," are displayed in the Simulator!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"iOS app with basic query",src:r(17973).Z,width:"1559",height:"907"})),(0,n.kt)("p",null,"Not exactly what we expected! What we want now is for each account manager to visualize only their own ",(0,n.kt)("em",{parentName:"p"},"In Progress")," contracts, so let's complete our query!"))}c.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69334:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/filterquery-7902086c2d1e2bfd8c24d1d16e9fb561.png"},77651:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ios-app-without-queries-3893b9ebd1437a06592cc18393a01e1e.png"},17973:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/restrited-queries-basic-query-c48a1a721abebefd5a554dcc7c7580d4.png"}}]);