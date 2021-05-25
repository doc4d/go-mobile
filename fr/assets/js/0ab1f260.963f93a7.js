(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{204:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),f=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=f(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=f(r),p=n,b=m["".concat(a,".").concat(p)]||m[p]||u[p]||i;return r?o.a.createElement(b,l(l({ref:t},c),{},{components:r})):o.a.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return f}));var n=r(3),o=r(7),i=(r(0),r(204)),a={id:"list-form-manifest",title:"About the Manifest.json File"},l={unversionedId:"tutorials/creating-list-forms/list-form-manifest",id:"tutorials/creating-list-forms/list-form-manifest",isDocsHomePage:!1,title:"About the Manifest.json File",description:"The manifest file includes information about your list form template, such as the Storyboard type (list form or detail form), name and number of fields per cell.",source:"@site/docs/tutorials/creating-list-forms/list-form-manifest.md",slug:"/tutorials/creating-list-forms/list-form-manifest",permalink:"/go-mobile/fr/docs/tutorials/creating-list-forms/list-form-manifest",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/creating-list-forms/list-form-manifest.md",version:"current",sidebar:"tutorials",previous:{title:"List form icon",permalink:"/go-mobile/fr/docs/tutorials/creating-list-forms/list-form-icon"},next:{title:"About the Template.svg File",permalink:"/go-mobile/fr/docs/tutorials/creating-list-forms/list-form-svg-file"}},s=[],c={toc:s};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The manifest file includes information about your list form template, such as the ",Object(i.b)("strong",{parentName:"p"},"Storyboard type")," (list form or detail form), ",Object(i.b)("strong",{parentName:"p"},"name")," and ",Object(i.b)("strong",{parentName:"p"},"number of fields per cell"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "listform",\n\n  "name": "Custom List form",\n\n  "fields": {\n    "count": 3\n  }\n}\n\n')),Object(i.b)("p",null,"For example, the manifest file for the above list form template  includes the following information:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Storyboard type:")," listform"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Template Name:")," Custom List form"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Field number:")," Three fields in each cell (profile image, title, and subtitle)")))}f.isMDXComponent=!0}}]);