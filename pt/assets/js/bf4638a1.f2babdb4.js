"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7298],{79942:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=r(87462),o=(r(67294),r(3905));const i={id:"list-form-manifest",title:"Manifest.json"},a=void 0,l={unversionedId:"tutorials/creating-list-forms/list-form-manifest",id:"tutorials/creating-list-forms/list-form-manifest",title:"Manifest.json",description:"The manifest file includes information about your list form template, such as the storyboard type (list form or detail form), name and number of fields per cell.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/tutorials/creating-list-forms/list-form-manifest.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-manifest",permalink:"/pt/docs/next/tutorials/creating-list-forms/list-form-manifest",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/creating-list-forms/list-form-manifest.md",tags:[],version:"current",frontMatter:{id:"list-form-manifest",title:"Manifest.json"},sidebar:"tutorials",previous:{title:"\xcccones de formul\xe1rios Lista",permalink:"/pt/docs/next/tutorials/creating-list-forms/list-form-icon"},next:{title:"Template.svg",permalink:"/pt/docs/next/tutorials/creating-list-forms/list-form-svg-file"}},s={},m=[],c={toc:m};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The manifest file includes information about your list form template, such as the storyboard ",(0,o.kt)("strong",{parentName:"p"},"type")," (list form or detail form), ",(0,o.kt)("strong",{parentName:"p"},"name")," and ",(0,o.kt)("strong",{parentName:"p"},"number of fields per cell"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "listform",\n  "name": "Custom List form",\n  "fields": {\n    "count": 3\n  },\n  "tags": {\n    "___LISTFORMTYPE___": "Table"\n  }\n}\n\n')),(0,o.kt)("p",null,"Por exemplo, o arquivo de manifesto acima inclui as informa\xe7\xf5es:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Template type"),": listform"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Template Name"),": Custom List form"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Field number"),": Three fields in each cell (profile image, title, and subtitle)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Tag"),': "',(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"LISTFORMTYPE")),'": "Table" table display')))}f.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(r),u=o,d=p["".concat(s,".").concat(u)]||p[u]||f[u]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var m=2;m<i;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);