"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3291],{57022:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={id:"getting-started",title:"Prise en main"},a=void 0,s={unversionedId:"tutorials/actions/getting-started",id:"version-19-R3/tutorials/actions/getting-started",title:"Prise en main",description:"OBJECTIFS",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R3/tutorials/actions/getting-started.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/getting-started",permalink:"/go-mobile/fr/docs/19-R3/tutorials/actions/getting-started",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/actions/getting-started.md",tags:[],version:"19-R3",frontMatter:{id:"getting-started",title:"Prise en main"},sidebar:"version-19-R3/tutorials",previous:{title:"Filtre de recherche utilisateur",permalink:"/go-mobile/fr/docs/19-R3/tutorials/filter-queries/user-information-query"},next:{title:"D\xe9finir une premi\xe8re action",permalink:"/go-mobile/fr/docs/19-R3/tutorials/actions/define-first-action"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJECTIFS")),(0,o.kt)("p",{parentName:"blockquote"},"Utiliser des actions dans l'application iOS g\xe9n\xe9r\xe9e.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"CONDITIONS PR\xc9ALABLES")),(0,o.kt)("p",{parentName:"blockquote"},"Cliquez ",(0,o.kt)("inlineCode",{parentName:"p"},"[here](prerequisites.html)")," pour commencer !")),(0,o.kt)("p",null,"Depuis 4D v17 R5, vous pouvez ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/19-R3/tutorials/actions/define-first-action"},"d\xe9finir des actions")," directement \xe0 partir de l'\xe9diteur de projet et ex\xe9cuter le code 4D \xe0 partir de votre application iOS !"),(0,o.kt)("p",null,"Dans cette section, lorsque vous g\xe9n\xe9rez votre application \xe0 partir de l\u2019\xe9diteur de projet \xe0 l'aide des actions, vous pouvez d\xe9cider d'utiliser :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Des mod\xe8les 4D for iOS")," \xe0 partir de la section Formulaires. Dans ce cas, des actions ont \xe9t\xe9 pr\xe9alablement ins\xe9r\xe9es dans le produit. Il vous suffit de ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/19-R3/tutorials/actions/define-first-action"},"d\xe9finir des actions")," dans la section Actions et de cr\xe9er des m\xe9thodes appropri\xe9es dans 4D.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Vos propres mod\xe8les personnalis\xe9s")," que vous avez d\xe9velopp\xe9s. Une \xe9tape suppl\xe9mentaire importante est n\xe9cessaire pour que vos actions fonctionnent dans l'application iOS g\xe9n\xe9r\xe9e. En effet, il est n\xe9cessaire d'inclure manuellement des ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/19-R3/tutorials/actions/adding-actions-template"},"balises d'action")," dans vos mod\xe8les de Formulaires Liste et formulaires d\xe9taill\xe9s."))),(0,o.kt)("p",null,"Il est temps de s'amuser en cr\xe9ant une application ",(0,o.kt)("strong",{parentName:"p"},"Tasks")," \xe0 l'aide des actions de 4D for iOS."))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);