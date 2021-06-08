(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8720],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77846:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={id:"actions-getting-started",title:"Getting started"},c={unversionedId:"project-definition/actions-getting-started",id:"project-definition/actions-getting-started",isDocsHomePage:!1,title:"Getting started",description:"OBJECTIVES",source:"@site/docs/project-definition/actions-getting-started.md",sourceDirName:"project-definition",slug:"/project-definition/actions-getting-started",permalink:"/go-mobile/fr/docs/project-definition/actions-getting-started",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/project-definition/actions-getting-started.md",version:"current",frontMatter:{id:"actions-getting-started",title:"Getting started"}},p=[],s={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,i.kt)("p",{parentName:"blockquote"},"Use actions in the generated iOS app.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,i.kt)("p",{parentName:"blockquote"},"Click ",(0,i.kt)("a",{parentName:"p",href:"../getting-started/requirements"},"here")," to see what you'll need to get started!")),(0,i.kt)("p",null,"In 4D v17 R5, you can ","[define actions]",(0,i.kt)("inlineCode",{parentName:"p"},"(actions.html)")," directly from the Project Editor and execute 4D code from your generated iOS app!"),(0,i.kt)("p",null,"From here, when you build your app from the Project Editor using actions, you can decide to use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"4D for iOS templates")," from the Form section. In this case, actions are already included. You just need to ","[define actions]",(0,i.kt)("inlineCode",{parentName:"p"},"(define-first-action.html)")," in the Actions section and create appropriate methods in 4D.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Your own custom templates")," you developed. An important additional step is required for your actions to work in the generated iOS app. Indeed, it is necessary to manually ","[include action Tags]",(0,i.kt)("inlineCode",{parentName:"p"},"(action-custom-template.html)")," in your Listform and Detailforms templates. "))),(0,i.kt)("p",null,"Now it's time to enjoy building a ",(0,i.kt)("strong",{parentName:"p"},"Tasks app"),", using 4D for iOS actions."))}u.isMDXComponent=!0}}]);