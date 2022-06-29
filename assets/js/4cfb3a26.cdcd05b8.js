"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2759],{22687:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={id:"getting-started",title:"Getting started"},a=void 0,s={unversionedId:"tutorials/actions/getting-started",id:"version-19-R2/tutorials/actions/getting-started",title:"Getting started",description:"OBJECTIVES",source:"@site/versioned_docs/version-19-R2/tutorials/actions/getting-started.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/getting-started",permalink:"/go-mobile/docs/19-R2/tutorials/actions/getting-started",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/actions/getting-started.md",tags:[],version:"19-R2",frontMatter:{id:"getting-started",title:"Getting started"},sidebar:"version-19-R2/tutorials",previous:{title:"User information query",permalink:"/go-mobile/docs/19-R2/tutorials/filter-queries/user-information-query"},next:{title:"Defining your first action",permalink:"/go-mobile/docs/19-R2/tutorials/actions/define-first-action"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,o.kt)("p",{parentName:"blockquote"},"Use actions in the generated iOS app.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,o.kt)("p",{parentName:"blockquote"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"[here](prerequisites.html)")," to see what you'll need to get started!")),(0,o.kt)("p",null,"In 4D v17 R5, you can ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/docs/19-R2/tutorials/actions/define-first-action"},"define actions")," directly from the Project Editor and execute 4D code from your generated iOS app!"),(0,o.kt)("p",null,"From here, when you build your app from the Project Editor using actions, you can decide to use:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"4D for iOS templates")," from the Form section. In this case, actions are already included. You just need to ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/docs/19-R2/tutorials/actions/define-first-action"},"define actions")," in the Actions section and create appropriate methods in 4D.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Your own custom templates")," you developed. An important additional step is required for your actions to work in the generated iOS app. Indeed, it is necessary to manually ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/docs/19-R2/tutorials/actions/adding-actions-template"},"include action Tags")," in your Listform and Detailforms templates. "))),(0,o.kt)("p",null,"Now it's time to enjoy building a ",(0,o.kt)("strong",{parentName:"p"},"Tasks app"),", using 4D for iOS actions."))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);