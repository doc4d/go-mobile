(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(204)),i={id:"getting-started",title:"Getting started"},c={unversionedId:"tutorials/actions/getting-started",id:"tutorials/actions/getting-started",isDocsHomePage:!1,title:"Getting started",description:"OBJECTIVES",source:"@site/docs/tutorials/actions/getting-started.md",slug:"/tutorials/actions/getting-started",permalink:"/go-mobile/fr/docs/tutorials/actions/getting-started",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/actions/getting-started.md",version:"current",sidebar:"tutorials",previous:{title:"User information query",permalink:"/go-mobile/fr/docs/tutorials/restricted-queries/user-information-query"},next:{title:"Defining your first action",permalink:"/go-mobile/fr/docs/tutorials/actions/define-first-action"}},s=[],u={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"OBJECTIVES")),Object(a.b)("p",{parentName:"blockquote"},"Use actions in the generated iOS app.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"PREREQUISITES")),Object(a.b)("p",{parentName:"blockquote"},"Click ",Object(a.b)("inlineCode",{parentName:"p"},"[here](prerequisites.html)")," to see what you'll need to get started!")),Object(a.b)("p",null,"In 4D v17 R5, you can ",Object(a.b)("inlineCode",{parentName:"p"},"[define actions](actions.html)")," directly from the Project Editor and execute 4D code from your generated iOS app!"),Object(a.b)("p",null,"From here, when you build your app from the Project Editor using actions, you can decide to use:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"4D for iOS templates")," from the Form section. In this case, actions are already included. You just need to ",Object(a.b)("inlineCode",{parentName:"p"},"[define actions](define-first-action.html)")," in the Actions section and create appropriate methods in 4D.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Your own custom templates")," you developed. An important additional step is required for your actions to work in the generated iOS app. Indeed, it is necessary to manually ",Object(a.b)("inlineCode",{parentName:"p"},"[include action Tags](action-custom-template.html)")," in your Listform and Detailforms templates. "))),Object(a.b)("p",null,"Now it's time to enjoy building a ",Object(a.b)("strong",{parentName:"p"},"Tasks app"),", using 4D for iOS actions."))}l.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);