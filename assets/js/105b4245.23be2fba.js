(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{204:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,b=p["".concat(a,".").concat(d)]||p[d]||f[d]||r;return n?i.a.createElement(b,l(l({ref:t},s),{},{components:n})):i.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},271:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/labels-icons-title-definition-01f641a8df96a63d357603ee2168c179.png"},272:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/relations-title-definition-985f72bcde6d7ae39dad21fdee77eee5.png"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),i=n(7),r=(n(0),n(204)),a={id:"structure-relations-one-to-many-relations-title-definition",title:"One to Many - Title definition"},l={unversionedId:"project-definition/structure-relations-one-to-many-relations-title-definition",id:"project-definition/structure-relations-one-to-many-relations-title-definition",isDocsHomePage:!1,title:"One to Many - Title definition",description:"Defining a title for your destination views",source:"@site/docs/project-definition/structure-relations-one-to-many-relations-title-definition.md",slug:"/project-definition/structure-relations-one-to-many-relations-title-definition",permalink:"/go-mobile/docs/project-definition/structure-relations-one-to-many-relations-title-definition",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/project-definition/structure-relations-one-to-many-relations-title-definition.md",version:"current"},c=[{value:"Defining a title for your destination views",id:"defining-a-title-for-your-destination-views",children:[]}],s={toc:c};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"defining-a-title-for-your-destination-views"},"Defining a title for your destination views"),Object(r.b)("p",null,"To keep track of the view you come from in your app, 4D for iOS allows you to define custom Title."),Object(r.b)("p",null,"In this tutorial, we will use the following project:"),Object(r.b)("div",{markdown:"1",style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},Object(r.b)("a",{class:"button",href:"https://github.com/4d-for-ios/tutorial-OneToManyTitleDefinition/archive/4b831959e7efe4777071af0b2904d458918cfbc2.zip"},"TITLE DEFINITION STARTER PROJECT")),Object(r.b)("p",null,"Now go straight to Open menu > Mobile project... select ",Object(r.b)("em",{parentName:"p"},"Time Keeper")," and go to the ",Object(r.b)("strong",{parentName:"p"},"Labels & Icons section"),"."),Object(r.b)("p",null,"From here, open the relation tab to define the ",Object(r.b)("em",{parentName:"p"},"tasks")," relation title and enter the following line in the ",Object(r.b)("strong",{parentName:"p"},"Titles column"),": ",Object(r.b)("inlineCode",{parentName:"p"},"%Name% tasks")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Labels &amp; Icons relation title",src:n(271).default})),Object(r.b)("p",null,"As you may have guessed, it will allow you to display ",Object(r.b)("strong",{parentName:"p"},"Employee's Name value")," on the destination view depending on the Employee detail form you were on previously. "),Object(r.b)("p",null,Object(r.b)("img",{alt:"Labels &amp; Icons relation title",src:n(272).default})),Object(r.b)("p",null,"This is a great way to keep track of the view you come from!"),Object(r.b)("p",null,"Now let's see how you can create and add your own Relation button in the next tutorial!"))}u.isMDXComponent=!0}}]);