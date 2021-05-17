(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(159)),i={id:"mdx-example",title:"MDX syntax example"},c={unversionedId:"4D/mdx-example",id:"4D/mdx-example",isDocsHomePage:!1,title:"MDX syntax example",description:"This page is still in development.",source:"@site/docs/4D/mdx-example.mdx",slug:"/4D/mdx-example",permalink:"/go-mobile/docs/4D/mdx-example",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/4D/mdx-example.mdx",version:"current",sidebar:"mySidebar",previous:{title:"Archive and upload your Project",permalink:"/go-mobile/docs/deployment/deploy-on-app-store-archive-and-upload"},next:{title:"Test Page",permalink:"/go-mobile/docs/4D/test-page"}},l=[{value:"Making the syntax mdx-compatible",id:"making-the-syntax-mdx-compatible",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This page is still in development."))),Object(o.b)("h2",{id:"making-the-syntax-mdx-compatible"},"Making the syntax mdx-compatible"),Object(o.b)("p",null,"The initial html code for the following examples is located in the define-first-action.md file in 4d for iOS."),Object(o.b)("p",null,"For .md files, the following syntax is fine: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px"> \n\n<a class="button"\nhref="https://github.com/4d-for-ios/tutorial-Actions/releases/latest/download/tutorial-Actions.zip">STARTER PROJECT</a>\n\n</div>\n')),Object(o.b)("p",null,"With MDX, html tags are supported but you need to use the JSX syntax. So to get the same result, you would write it like this: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,3}","{1,3}":!0},'<div style= {{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>\n\n<a className="button"\nhref="https://github.com/4d-for-ios/tutorial-Actions/archive/cf16581214a8a6e4e4067bcff43ac1265ec43ff7.zip">STARTER PROJECT</a>\n\n</div>\n')),Object(o.b)("p",null,"Here are the main differences between css and jsx for styling:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"class becomes className"),Object(o.b)("li",{parentName:"ul"},"curly brackets indicate that you're inserting javascript inside html"),Object(o.b)("li",{parentName:"ul"},"use camelCase for property names (text-align becomes textAlign)"),Object(o.b)("li",{parentName:"ul"},'values are strings ("center")')),Object(o.b)("p",null,"Here's the result :"),Object(o.b)("div",{style:{display:"flex",justifyContent:"center",marginTop:"20px",marginBottom:"20px"}},Object(o.b)("a",{class:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-Actions/archive/cf16581214a8a6e4e4067bcff43ac1265ec43ff7.zip"},"Starter Project")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Adding a global customized style instead of writing all the css properties here would probably be more efficient.")),Object(o.b)("p",null,"Here's another example:"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"You can download the ",Object(o.b)("strong",{parentName:"em"},"Final project")," that includes various actions:")),Object(o.b)("div",{style:{display:"flex",justifyContent:"center",marginTop:"20px",marginBottom:"20px"}},Object(o.b)("a",{class:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-Actions/releases/latest/download/tutorial-Actions.zip"},"Final Project")))}p.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,d=m["".concat(i,".").concat(u)]||m[u]||b[u]||o;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);