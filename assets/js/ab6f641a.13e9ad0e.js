"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2884],{95804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const r={id:"one-to-many-title-definition",title:"One to Many - Title definition"},a=void 0,l={unversionedId:"tutorials/relations/one-to-many-title-definition",id:"version-19-R6/tutorials/relations/one-to-many-title-definition",title:"One to Many - Title definition",description:"Defining a title for your destination views",source:"@site/versioned_docs/version-19-R6/tutorials/relations/one-to-many-title-definition.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-title-definition",permalink:"/docs/tutorials/relations/one-to-many-title-definition",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/relations/one-to-many-title-definition.md",tags:[],version:"19-R6",frontMatter:{id:"one-to-many-title-definition",title:"One to Many - Title definition"},sidebar:"tutorials",previous:{title:"One to Many relations",permalink:"/docs/tutorials/relations/one-to-many-relations"},next:{title:"One to Many - Custom button",permalink:"/docs/tutorials/relations/one-to-many-custom-button"}},s={},p=[{value:"Defining a title for your destination views",id:"defining-a-title-for-your-destination-views",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"defining-a-title-for-your-destination-views"},"Defining a title for your destination views"),(0,i.kt)("p",null,"To keep track of the view you come from in your app, 4D for iOS allows you to define custom Title."),(0,i.kt)("p",null,"In this tutorial, we will use the following project:"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyTitleDefinition/archive/4b831959e7efe4777071af0b2904d458918cfbc2.zip"},"Starter project")),(0,i.kt)("p",null,"Now go straight to ",(0,i.kt)("strong",{parentName:"p"},"Open menu > Mobile project..."),", select ",(0,i.kt)("em",{parentName:"p"},"Time Keeper")," and go to the ",(0,i.kt)("strong",{parentName:"p"},"Labels & Icons section"),"."),(0,i.kt)("p",null,"From here, open the relation tab to define the ",(0,i.kt)("em",{parentName:"p"},"tasks")," relation title and enter the following line in the ",(0,i.kt)("strong",{parentName:"p"},"Titles column"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"%Name% tasks")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Labels &amp; Icons relation title",src:n(23694).Z,width:"2164",height:"1988"})),(0,i.kt)("p",null,"As you may have guessed, it will allow you to display ",(0,i.kt)("strong",{parentName:"p"},"Employee's Name value")," on the destination view depending on the Employee detail form you were on previously. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Labels &amp; Icons relation title",src:n(93697).Z,width:"1701",height:"992"})),(0,i.kt)("p",null,"This is a great way to keep track of the view you come from!"),(0,i.kt)("p",null,"Now let's see how you can create and add your own Relation button in the next tutorial!"))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||r;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23694:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/labels-icons-title-definition-01f641a8df96a63d357603ee2168c179.png"},93697:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/relations-title-definition-985f72bcde6d7ae39dad21fdee77eee5.png"}}]);