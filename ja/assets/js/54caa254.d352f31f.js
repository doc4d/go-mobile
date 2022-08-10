"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7567],{64851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={id:"one-to-many-relations",title:"1\u5bfeN\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3"},i=void 0,l={unversionedId:"tutorials/relations/one-to-many-relations",id:"tutorials/relations/one-to-many-relations",title:"1\u5bfeN\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3",description:"This tutorial will show you how easy it can be to include One to Many relations in your mobile project.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/relations/one-to-many-relations.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-relations",permalink:"/ja/next/tutorials/relations/one-to-many-relations",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/relations/one-to-many-relations.md",tags:[],version:"current",frontMatter:{id:"one-to-many-relations",title:"1\u5bfeN\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3"},sidebar:"tutorials",previous:{title:"N\u5bfe1\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3",permalink:"/ja/next/tutorials/relations/many-to-one-relations"},next:{title:"\uff11\u5bfe\uff2e\u30bf\u30a4\u30c8\u30eb\u306e\u8a2d\u5b9a",permalink:"/ja/next/tutorials/relations/one-to-many-title-definition"}},s={},c=[{value:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30bb\u30af\u30b7\u30e7\u30f3",id:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30bb\u30af\u30b7\u30e7\u30f3",level:2},{value:"\u30e9\u30d9\u30eb &amp; \u30a2\u30a4\u30b3\u30f3\u30bb\u30af\u30b7\u30e7\u30f3",id:"\u30e9\u30d9\u30eb--\u30a2\u30a4\u30b3\u30f3\u30bb\u30af\u30b7\u30e7\u30f3",level:2},{value:"Forms section",id:"forms-section",level:2},{value:"\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c",id:"\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial will show you how easy it can be to include One to Many relations in your mobile project."),(0,a.kt)("p",null,"Let's get started by downloading the Starter project:"),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyRelations/archive/c006015afeb0e134d872152f53b8cd5e4dcb59bb.zip"},"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")),(0,a.kt)("p",null,"In this tutorial, we are going to build a colorful ",(0,a.kt)("strong",{parentName:"p"},"Task app")," using 4D for iOS."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Task App Final result",src:n(966).Z,width:"650",height:"650"})),(0,a.kt)("p",null,"But first, let's have a look at the structure of our database:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Select link from structure section",src:n(23086).Z,width:"2152",height:"1666"})),(0,a.kt)("p",null,"As you can see, there is a One to Many link named ",(0,a.kt)("strong",{parentName:"p"},"tasks")," that we will use in our iOS app to display the employees'(",(0,a.kt)("strong",{parentName:"p"},"One"),") tasks(",(0,a.kt)("strong",{parentName:"p"},"to Many"),")."),(0,a.kt)("p",null,"Now, go straight to Open menu > Mobile project... to select ",(0,a.kt)("em",{parentName:"p"},"Time Keeper")," and go to the ",(0,a.kt)("strong",{parentName:"p"},"Structure section"),"."),(0,a.kt)("h2",{id:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30bb\u30af\u30b7\u30e7\u30f3"},"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30bb\u30af\u30b7\u30e7\u30f3"),(0,a.kt)("p",null,"You can see the ",(0,a.kt)("strong",{parentName:"p"},"tasks relation")," we have seen earlier... Publish it !"),(0,a.kt)("p",null,"This will now operate as any other field for the rest of the app creation process."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Structure section Relations properties",src:n(82112).Z,width:"2164",height:"1988"})),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"On mouse over, a tip displays the table name originating the relation."))),(0,a.kt)("h2",{id:"\u30e9\u30d9\u30eb--\u30a2\u30a4\u30b3\u30f3\u30bb\u30af\u30b7\u30e7\u30f3"},"\u30e9\u30d9\u30eb & \u30a2\u30a4\u30b3\u30f3\u30bb\u30af\u30b7\u30e7\u30f3"),(0,a.kt)("p",null,"The One to Many relation is now available in the ",(0,a.kt)("strong",{parentName:"p"},"Labels and Icons")," section."),(0,a.kt)("p",null,"It is important to know that including a One to Many relation will create a button into the genrated iOS app."),(0,a.kt)("p",null,"So, in the Labels & Icons section you will define:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30dc\u30bf\u30f3\u30bf\u30a4\u30c8\u30eb"),(0,a.kt)("li",{parentName:"ul"},"\u30dc\u30bf\u30f3\u30a2\u30a4\u30b3\u30f3"),(0,a.kt)("li",{parentName:"ul"},"a title that will be displayed in the destination view (to indicate where you come from for example).")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Labels &amp; Icons section Relations properties",src:n(61610).Z,width:"2164",height:"1988"})),(0,a.kt)("h2",{id:"forms-section"},"Forms section"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the Forms section and drop the ",(0,a.kt)("em",{parentName:"li"},"tasks")," relation on the Employee Task Detail form.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Related field in Forms section",src:n(27045).Z,width:"2164",height:"1988"})),(0,a.kt)("h2",{id:"\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c"},"\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Employee\u306e\u30ea\u30b9\u30c8\u753b\u9762\u3067\u9069\u5f53\u306a\u5f93\u696d\u54e1\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ol"},"This will open the employee's detail form, where you should see a new ",(0,a.kt)("strong",{parentName:"li"},"Relation button")," !"),(0,a.kt)("li",{parentName:"ol"},"Relation\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\uff0c\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u5f93\u696d\u54e1\u306e\u30bf\u30b9\u30af\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Related field in Forms section",src:n(91574).Z,width:"2268",height:"992"})),(0,a.kt)("p",null,"Well done! You've successfully included One to Many relations in your mobile project."),(0,a.kt)("p",null,"\u5b8c\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyRelations/releases/latest/download/tutorial-OneToManyRelations.zip"},"Download")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27045:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1-to-n-relations-forms-section-eaaf6fc4d1b5e4abc4bdc7b233c9e46b.png"},966:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/4D-for-iOS-dark-mode-card-relation-ios-13-ae79febdfa2739db76aeec303329d6d2.gif"},23086:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Database-1-to-N-relations-4D-for-iOS-e367b692bf24073c368caea6ea463222.png"},91574:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/One-to-n-relations-task-ios-app-e63bb9be3b7cefc054e93c719581324d.png"},61610:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Relations-properties-Labels-icons-section-4D-for-iOS-af246bee86dd0780f38c6c51f7c1cc71.png"},82112:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Structure-section-relations-4D-for-iOS-5d5469663dad4dff95bedeb54f577eb5.png"}}]);