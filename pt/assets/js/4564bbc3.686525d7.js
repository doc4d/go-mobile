"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6857],{30117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var o=r(87462),n=(r(67294),r(3905));const a={id:"detail-form-template-manifest",title:"Manifest.json"},i=void 0,l={unversionedId:"tutorials/creating-detail-forms/detail-form-template-manifest",id:"version-19-R2/tutorials/creating-detail-forms/detail-form-template-manifest",title:"Manifest.json",description:"O arquivo manifest inclui informa\xe7\xe3o sobre seu modelo de formul\xe1rio detalhe tal como  tipo Storyboard  (formul\xe1rio lista ou formul\xe1rio detalhe), nome, e n\xfamero de campos est\xe1ticos .",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R2/tutorials/creating-detail-forms/detail-form-template-manifest.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-manifest",permalink:"/go-mobile/pt/docs/19-R2/tutorials/creating-detail-forms/detail-form-template-manifest",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/creating-detail-forms/detail-form-template-manifest.md",tags:[],version:"19-R2",frontMatter:{id:"detail-form-template-manifest",title:"Manifest.json"},sidebar:"version-19-R2/tutorials",previous:{title:"\xcdcone de formul\xe1rio detalhado",permalink:"/go-mobile/pt/docs/19-R2/tutorials/creating-detail-forms/detail-form-icon"},next:{title:"Template.svg",permalink:"/go-mobile/pt/docs/19-R2/tutorials/creating-detail-forms/detail-form-template-svg"}},s={},m=[],p={toc:m};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"O arquivo manifest inclui informa\xe7\xe3o sobre seu modelo de formul\xe1rio detalhe tal como  ",(0,n.kt)("strong",{parentName:"p"},"tipo Storyboard ")," (formul\xe1rio lista ou formul\xe1rio detalhe), ",(0,n.kt)("strong",{parentName:"p"},"nome"),", ",(0,n.kt)("strong",{parentName:"p"},"e n\xfamero de campos est\xe1ticos")," ."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "detailform",\n\n  "name": "Custom Detail form",\n  "renderer": 2,  \n  "hOffset": 91, \n  "fields": {\n    "count": 1, \n    "max": 0\n },\n\n  "assets": {\n    "size": {\n      "width": 16,\n      "height": 16\n    }\n  }\n}\n\n')),(0,n.kt)("p",null,"Por exemplo, o arquivo de manifesto acima inclui as informa\xe7\xf5es:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type:"),'tipo storyboard. Nesse exemplo, "detailform"'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"name:"),'nome do modelo. Nesse exemplo, "Custom Detail form"'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"renderer:")," n\xfamero da vers\xe3o"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"hOffset:")," o offset (desclocamento) vertical do primeiro campo que vai ser duplicado. Nesse exemplo, 91 p\xedxels a partir do topo."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fields"),": n\xfamero de campos est\xe1ticos. Nesse exemplo, 1 campo est\xe1tico e 0 para campos infinitos duplicados( uma imagem de cabe\xe7alho e campos duplicados)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Propriedades do \xeccone:")," Largura e altura do \xedcone(16 px)")))}c.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),m=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var m=2;m<a;m++)i[m]=r[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);