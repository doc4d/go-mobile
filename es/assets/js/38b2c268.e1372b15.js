"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4790],{81553:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=r(87462),o=(r(67294),r(3905));const a={id:"detail-form-template-manifest",title:"Manifest.json"},i=void 0,l={unversionedId:"tutorials/creating-detail-forms/detail-form-template-manifest",id:"version-19-R6/tutorials/creating-detail-forms/detail-form-template-manifest",title:"Manifest.json",description:"El archivo de manifiesto incluye informaci\xf3n sobre la plantilla de formulario detallado, como el tipo Storyboard (formulario listado o formulario detallado), el nombre y el n\xfamero de campos est\xe1ticos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/tutorials/creating-detail-forms/detail-form-template-manifest.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-manifest",permalink:"/go-mobile/es/docs/19-R6/tutorials/creating-detail-forms/detail-form-template-manifest",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/creating-detail-forms/detail-form-template-manifest.md",tags:[],version:"19-R6",frontMatter:{id:"detail-form-template-manifest",title:"Manifest.json"},sidebar:"tutorials",previous:{title:"Iconos de formulario detallado",permalink:"/go-mobile/es/docs/19-R6/tutorials/creating-detail-forms/detail-form-icon"},next:{title:"Template.svg",permalink:"/go-mobile/es/docs/19-R6/tutorials/creating-detail-forms/detail-form-template-svg"}},s={},m=[],p={toc:m};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"El archivo de manifiesto incluye informaci\xf3n sobre la plantilla de formulario detallado, como el ",(0,o.kt)("strong",{parentName:"p"},"tipo")," Storyboard (formulario listado o formulario detallado), ",(0,o.kt)("strong",{parentName:"p"},"el nombre")," y ",(0,o.kt)("strong",{parentName:"p"},"el n\xfamero de campos est\xe1ticos"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "detailform",\n\n  "name": "Custom Detail form",\n  "renderer": 2,  \n  "hOffset": 91, \n  "fields": {\n    "count": 1, \n    "max": 0\n },\n\n  "assets": {\n    "size": {\n      "width": 16,\n      "height": 16\n    }\n  }\n}\n\n')),(0,o.kt)("p",null,"Por ejemplo, el archivo de manifiesto anterior incluye la siguiente informaci\xf3n:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"tipo:"),'tipo storyboard. En este ejemplo, "detailform"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"nombre:"),'nombre de la plantilla. En este ejemplo, "Formulario detallado personalizado" a continuaci\xf3n'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"renderer:")," n\xfamero de versi\xf3n"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hOffset:")," desplazamiento vertical del primer campo que se va a duplicar. En este ejemplo, 91 p\xedxeles desde la parte superior."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"campos"),": n\xfamero de campos est\xe1ticos. En este ejemplo, 1 campo est\xe1tico y 0 para un infinito de campos duplicados (una imagen de encabezado y los campos duplicados)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Propiedades del icono: "),"ancho y alto del icono (16 px)")))}c.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(r),u=o,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);