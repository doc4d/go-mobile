"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8630],{68310:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const i={id:"detail-form-template-manifest",title:"Manifest.json"},o=void 0,l={unversionedId:"tutorials/creating-detail-forms/detail-form-template-manifest",id:"version-19-R3/tutorials/creating-detail-forms/detail-form-template-manifest",title:"Manifest.json",description:'The manifest file includes information about your detail form template,  such as the storyboard type ("listform" or "detailform"), name, and number of static fields.',source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R3/tutorials/creating-detail-forms/detail-form-template-manifest.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-manifest",permalink:"/go-mobile/fr/docs/19-R3/tutorials/creating-detail-forms/detail-form-template-manifest",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/creating-detail-forms/detail-form-template-manifest.md",tags:[],version:"19-R3",frontMatter:{id:"detail-form-template-manifest",title:"Manifest.json"},sidebar:"version-19-R3/tutorials",previous:{title:"Ic\xf4nes du formulaire d\xe9taill\xe9",permalink:"/go-mobile/fr/docs/19-R3/tutorials/creating-detail-forms/detail-form-icon"},next:{title:"Template.svg",permalink:"/go-mobile/fr/docs/19-R3/tutorials/creating-detail-forms/detail-form-template-svg"}},s={},m=[],f={toc:m};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The manifest file includes information about your detail form template,  such as the storyboard ",(0,a.kt)("strong",{parentName:"p"},"type"),' ("listform" or "detailform"), ',(0,a.kt)("strong",{parentName:"p"},"name"),", and ",(0,a.kt)("strong",{parentName:"p"},"number of static fields"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "detailform",\n\n  "name": "Custom Detail form",\n  "renderer": 2,  \n  "hOffset": 91, \n  "fields": {\n    "count": 1, \n    "max": 0\n },\n\n  "assets": {\n    "size": {\n      "width": 16,\n      "height": 16\n    }\n  }\n}\n\n')),(0,a.kt)("p",null,"For example, the above manifest file includes the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type:"),'storyboard type. In this example, "detailform"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name:"),'template name. In the this example, "Custom Detail form" below'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Rendu :")," num\xe9ro de version"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hOffset:")," vertical offset of the first field that is going to be duplicated. In this example, 91 pixels from the top."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fields"),": number of static fields. In this example, 1 static field and 0 for infinite duplicated fields (a header image, and duplicated fields)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Icon properties:")," Icon width and height (16 px)")))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),c=m(r),u=a,d=c["".concat(s,".").concat(u)]||c[u]||p[u]||i;return r?n.createElement(d,o(o({ref:t},f),{},{components:r})):n.createElement(d,o({ref:t},f))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"}}]);