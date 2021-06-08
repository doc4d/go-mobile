(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4952],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||r;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89052:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var o=n(22122),i=n(19756),r=(n(67294),n(3905)),a={id:"structure-one-to-many-relations-title-definition",title:"One to Many - Title definition"},l={unversionedId:"project-definition/structure-one-to-many-relations-title-definition",id:"project-definition/structure-one-to-many-relations-title-definition",isDocsHomePage:!1,title:"One to Many - Title definition",description:"Defining a title for your destination views",source:"@site/docs/project-definition/structure-one-to-many-relations-title-definition.md",sourceDirName:"project-definition",slug:"/project-definition/structure-one-to-many-relations-title-definition",permalink:"/go-mobile/fr/docs/project-definition/structure-one-to-many-relations-title-definition",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/project-definition/structure-one-to-many-relations-title-definition.md",version:"current",frontMatter:{id:"structure-one-to-many-relations-title-definition",title:"One to Many - Title definition"},sidebar:"docs",previous:{title:"One to Many - Custom button",permalink:"/go-mobile/fr/docs/project-definition/structure-one-to-many-relations-custom-button"},next:{title:"Relation interactions",permalink:"/go-mobile/fr/docs/project-definition/structure-relation-interactions"}},s=[{value:"Defining a title for your destination views",id:"defining-a-title-for-your-destination-views",children:[]}],c={toc:s};function u(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"defining-a-title-for-your-destination-views"},"Defining a title for your destination views"),(0,r.kt)("p",null,"To keep track of the view you come from in your app, 4D for iOS allows you to define custom Title."),(0,r.kt)("p",null,"In this tutorial, we will use the following project:"),(0,r.kt)("div",{markdown:"1",style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},(0,r.kt)("a",{class:"button",href:"https://github.com/4d-for-ios/tutorial-OneToManyTitleDefinition/archive/4b831959e7efe4777071af0b2904d458918cfbc2.zip"},"TITLE DEFINITION STARTER PROJECT")),(0,r.kt)("p",null,"Now go straight to Open menu > Mobile project... select ",(0,r.kt)("em",{parentName:"p"},"Time Keeper")," and go to the ",(0,r.kt)("strong",{parentName:"p"},"Labels & Icons section"),"."),(0,r.kt)("p",null,"From here, open the relation tab to define the ",(0,r.kt)("em",{parentName:"p"},"tasks")," relation title and enter the following line in the ",(0,r.kt)("strong",{parentName:"p"},"Titles column"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"%Name% tasks")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Labels &amp; Icons relation title",src:n(83949).Z})),(0,r.kt)("p",null,"As you may have guessed, it will allow you to display ",(0,r.kt)("strong",{parentName:"p"},"Employee's Name value")," on the destination view depending on the Employee detail form you were on previously. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Labels &amp; Icons relation title",src:n(99757).Z})),(0,r.kt)("p",null,"This is a great way to keep track of the view you come from!"),(0,r.kt)("p",null,"Now let's see how you can create and add your own Relation button in the next tutorial!"))}u.isMDXComponent=!0},83949:function(e,t,n){"use strict";t.Z=n.p+"assets/images/labels-icons-title-definition-01f641a8df96a63d357603ee2168c179.png"},99757:function(e,t,n){"use strict";t.Z=n.p+"assets/images/relations-title-definition-985f72bcde6d7ae39dad21fdee77eee5.png"}}]);