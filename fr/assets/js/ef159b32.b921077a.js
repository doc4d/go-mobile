(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(112)),o={id:"mdx-example",title:"MDX syntax example"},c={unversionedId:"4D/mdx-example",id:"4D/mdx-example",isDocsHomePage:!1,title:"MDX syntax example",description:"Making the syntax mdx-compatible",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/4D/mdx-example.mdx",slug:"/4D/mdx-example",permalink:"/go-mobile/fr/docs/4D/mdx-example",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/4D/mdx-example.mdx",version:"current",sidebar:"mySidebar",next:{title:"Test Page",permalink:"/go-mobile/fr/docs/4D/test-page"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"This page is still in development. :::")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("h2",{parentName:"div",id:"making-the-syntax-mdx-compatible"},"Making the syntax mdx-compatible"),Object(i.b)("p",{parentName:"div"},"The initial html code for the following examples is located in the define-first-action.md file in 4d for iOS."),Object(i.b)("p",{parentName:"div"},"For .md files, the following syntax is fine:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-html"},'<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px"> \n\n<a class="button"\nhref="https://github.com/4d-for-ios/tutorial-Actions/releases/latest/download/tutorial-Actions.zip">STARTER PROJECT</a>\n\n</div>\n')),Object(i.b)("p",{parentName:"div"},"With MDX, html tags are supported but you need to use the JSX syntax. So to get the same result, you would write it like this:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,3}","{1,3}":!0},'<div style= {{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>\n\n<a className="button"\nhref="https://github.com/4d-for-ios/tutorial-Actions/archive/cf16581214a8a6e4e4067bcff43ac1265ec43ff7.zip">STARTER PROJECT</a>\n\n</div>\n')),Object(i.b)("p",{parentName:"div"},"Here are the main differences between css and jsx for styling:"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"class becomes className"),Object(i.b)("li",{parentName:"ul"},"curly brackets indicate that you're inserting javascript inside html"),Object(i.b)("li",{parentName:"ul"},"use camelCase for property names (text-align becomes textAlign)"),Object(i.b)("li",{parentName:"ul"},'values are strings ("center")')),Object(i.b)("p",{parentName:"div"},"Here's the result :"),Object(i.b)("div",{style:{display:"flex",justifyContent:"center",marginTop:"20px",marginBottom:"20px"}},Object(i.b)("a",{class:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-Actions/archive/cf16581214a8a6e4e4067bcff43ac1265ec43ff7.zip"},"Starter Project")),Object(i.b)("blockquote",{parentName:"div"},Object(i.b)("p",{parentName:"blockquote"},"Adding a global customized style instead of writing all the css properties here would probably be more efficient.")),Object(i.b)("p",{parentName:"div"},"Here's another example:"),Object(i.b)("p",{parentName:"div"},Object(i.b)("em",{parentName:"p"},"You can download the ",Object(i.b)("strong",{parentName:"em"},"Final project")," that includes various actions:")),Object(i.b)("div",{style:{display:"flex",justifyContent:"center",marginTop:"20px",marginBottom:"20px"}},Object(i.b)("a",{class:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-Actions/releases/latest/download/tutorial-Actions.zip"},"Final Project")))))}p.isMDXComponent=!0},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(o,".").concat(d)]||m[d]||b[d]||i;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);