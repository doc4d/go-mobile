(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7854],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92677:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={id:"structure-many-to-one-relations",title:"Many to One relations"},l={unversionedId:"project-definition/structure-many-to-one-relations",id:"project-definition/structure-many-to-one-relations",isDocsHomePage:!1,title:"Many to One relations",description:"4D v17 R5 includes a new concept: Many to One relations",source:"@site/docs/project-definition/structure-many-to-one-relations.md",sourceDirName:"project-definition",slug:"/project-definition/structure-many-to-one-relations",permalink:"/go-mobile/docs/project-definition/structure-many-to-one-relations",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/project-definition/structure-many-to-one-relations.md",version:"current",frontMatter:{id:"structure-many-to-one-relations",title:"Many to One relations"},sidebar:"docs",previous:{title:"Relation interactions",permalink:"/go-mobile/docs/project-definition/structure-relation-interactions"},next:{title:"Data",permalink:"/go-mobile/docs/project-definition/data"}},s=[{value:"Structure section",id:"structure-section",children:[]}],c={toc:s};function u(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"4D v17 R5 includes a new concept: Many to One relations"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE")),(0,a.kt)("p",{parentName:"blockquote"},"In this tutorial, we will use the relation names between your tables."),(0,a.kt)("p",{parentName:"blockquote"},"Giving descriptive relation names can make your project structure definition easier.")),(0,a.kt)("p",null,"Let's get started by downloading the Starter Project:"),(0,a.kt)("div",{markdown:"1",style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},(0,a.kt)("a",{class:"button",href:"https://github.com/4d-for-ios/tutorial-ManyToOneRelations/releases/latest/download/tutorial-ManyToOneRelations.zip"},"MANY TO ONE STARTER PROJECT")),(0,a.kt)("p",null,"Here we want to display the category for each task in the detail form of your generated app. To do so, open the ",(0,a.kt)("strong",{parentName:"p"},"StarteriOSProject")," from ",(0,a.kt)("strong",{parentName:"p"},"Open > Mobile Project...")),(0,a.kt)("p",null,"Then go right to your Structure section and select the ",(0,a.kt)("strong",{parentName:"p"},"Task table"),"."),(0,a.kt)("h3",{id:"structure-section"},"Structure section"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can notice that the ",(0,a.kt)("strong",{parentName:"p"},"TaskCategory relation")," is underlined")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Clicking on it will display available fields through this relation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("strong",{parentName:"p"},"Name field")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Select link from structure section",src:n(86513).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This field will operate as any other field for the rest of the app creation process")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can also filter your app content using related fields from the Data section. To do so enter ",(0,a.kt)("inlineCode",{parentName:"p"},"TaskCategory.Name != 'Personal'")," in the Filter query field to exclude personal tasks."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Related field from Data section",src:n(20019).Z}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can then select an ",(0,a.kt)("strong",{parentName:"p"},"icon")," as well as ",(0,a.kt)("strong",{parentName:"p"},"formatters")," and define ",(0,a.kt)("strong",{parentName:"p"},"short and long labels")," from the Labels and Icons section"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Related field from Labels and Icons section",src:n(79928).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the Forms section and drag the field on the Task Detail form")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Related field in Forms section",src:n(197).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Build and Run")),(0,a.kt)("p",null,"You should see your related field in your app detail form !"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Related field in Forms section",src:n(43769).Z})))}u.isMDXComponent=!0},20019:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Related-field-from-Data-section-40a554492d0efaec1c01d14eebcd16e0.png"},43769:function(e,t,n){"use strict";t.Z=n.p+"assets/images/final-result-n-to-one-relations-181faceaf2f07d2456ffcded59f38a74.png"},197:function(e,t,n){"use strict";t.Z=n.p+"assets/images/related-field-forms-53c7c33a25cc1d3a62987ca4c5b6f8a5.png"},79928:function(e,t,n){"use strict";t.Z=n.p+"assets/images/related-field-from-labels-icons-a6d37898709ae00fd0b014d6c81f464c.png"},86513:function(e,t,n){"use strict";t.Z=n.p+"assets/images/select-link-from-structure-c36a9e632997ff99d1eec350fa485a8e.png"}}]);