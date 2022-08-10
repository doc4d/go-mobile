"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3387],{42440:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={id:"getting-started",title:"Prise en main"},o=void 0,s={unversionedId:"tutorials/actions/getting-started",id:"version-19-R5/tutorials/actions/getting-started",title:"Prise en main",description:"OBJECTIFS",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R5/tutorials/actions/getting-started.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/getting-started",permalink:"/fr/19-R5/tutorials/actions/getting-started",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/actions/getting-started.md",tags:[],version:"19-R5",frontMatter:{id:"getting-started",title:"Prise en main"},sidebar:"tutorials",previous:{title:"Filtre de recherche utilisateur",permalink:"/fr/19-R5/tutorials/filter-queries/user-information-query"},next:{title:"D\xe9finir une premi\xe8re action",permalink:"/fr/19-R5/tutorials/actions/define-first-action"}},l={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"OBJECTIFS")),(0,i.kt)("p",{parentName:"blockquote"},"Utiliser des actions dans l'application iOS g\xe9n\xe9r\xe9e.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"CONDITIONS PR\xc9ALABLES")),(0,i.kt)("p",{parentName:"blockquote"},"Cliquez ",(0,i.kt)("inlineCode",{parentName:"p"},"[here](requirements.html)")," pour commencer !")),(0,i.kt)("p",null,"Depuis 4D v17 R5, vous pouvez ",(0,i.kt)("a",{parentName:"p",href:"/fr/19-R5/tutorials/actions/define-first-action"},"d\xe9finir des actions")," directement \xe0 partir de l'\xe9diteur de projet et ex\xe9cuter le code 4D \xe0 partir de votre application iOS !"),(0,i.kt)("p",null,"Dans cette section, lorsque vous g\xe9n\xe9rez votre application \xe0 partir de l\u2019\xe9diteur de projet \xe0 l'aide des actions, vous pouvez d\xe9cider d'utiliser :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Des mod\xe8les 4D for iOS")," \xe0 partir de la section Formulaires. Dans ce cas, des actions ont \xe9t\xe9 pr\xe9alablement ins\xe9r\xe9es dans le produit. Il vous suffit de ",(0,i.kt)("a",{parentName:"p",href:"/fr/19-R5/tutorials/actions/define-first-action"},"d\xe9finir des actions")," dans la section Actions et de cr\xe9er des m\xe9thodes appropri\xe9es dans 4D.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Vos propres mod\xe8les personnalis\xe9s")," que vous avez d\xe9velopp\xe9s. Une \xe9tape suppl\xe9mentaire importante est n\xe9cessaire pour que vos actions fonctionnent dans l'application iOS g\xe9n\xe9r\xe9e. En effet, il est n\xe9cessaire d'inclure manuellement des ",(0,i.kt)("a",{parentName:"p",href:"/fr/19-R5/tutorials/actions/adding-actions-template"},"balises d'action")," dans vos mod\xe8les de Formulaires Liste et formulaires d\xe9taill\xe9s."))),(0,i.kt)("p",null,"Il est temps de s'amuser en cr\xe9ant une application ",(0,i.kt)("strong",{parentName:"p"},"Tasks")," \xe0 l'aide des actions de 4D for iOS."))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);