"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2328],{19074:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=r(87462),a=(r(67294),r(3905));const n={id:"list-form-template",title:"List form templates"},l=void 0,i={unversionedId:"tutorials/creating-list-forms/list-form-template",id:"tutorials/creating-list-forms/list-form-template",title:"List form templates",description:"In this tutorial, we'll cover nearly all aspects of creating a list form template, including the use of a searchBar, a table displaying an image, a title, and a subtitle for each cell.",source:"@site/docs/tutorials/creating-list-forms/list-form-template.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-template",permalink:"/docs/next/tutorials/creating-list-forms/list-form-template",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/creating-list-forms/list-form-template.md",tags:[],version:"current",frontMatter:{id:"list-form-template",title:"List form templates"},sidebar:"tutorials",previous:{title:"Custom Login Form",permalink:"/docs/next/tutorials/custom-login-form"},next:{title:"List form icon",permalink:"/docs/next/tutorials/creating-list-forms/list-form-icon"}},s={},p=[{value:"Download the Starter project",id:"download-the-starter-project",level:2},{value:"Add a list form template to your mobile project",id:"add-a-list-form-template-to-your-mobile-project",level:2},{value:"List form template content",id:"list-form-template-content",level:2}],m={toc:p};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial, we'll cover nearly all aspects of creating a list form template, including the use of a ",(0,a.kt)("strong",{parentName:"p"},"searchBar"),", a table displaying an ",(0,a.kt)("strong",{parentName:"p"},"image"),", a ",(0,a.kt)("strong",{parentName:"p"},"title"),", and a ",(0,a.kt)("strong",{parentName:"p"},"subtitle")," for each cell."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"List form template final result",src:r(48221).Z,width:"1417",height:"992"})),(0,a.kt)("h2",{id:"download-the-starter-project"},"Download the Starter project"),(0,a.kt)("p",null,"Before we begin, be sure to download and unzip the ",(0,a.kt)("strong",{parentName:"p"},"Starter project")," which includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"List form")," folder "),(0,a.kt)("li",{parentName:"ul"},'A demo 4D project ("Contact") with a ready-to-use mobile app project.')),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomListFormStarter/archive/4702619ed628a98f7cba5aacc08b6302d4bb8f86.zip"},"Starter project")),(0,a.kt)("h2",{id:"add-a-list-form-template-to-your-mobile-project"},"Add a list form template to your mobile project"),(0,a.kt)("p",null,"The first thing you'll need to do is to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," folder in ",(0,a.kt)("em",{parentName:"p"},"Contact.4dbase/Resources/Mobile/form/")," location and drag and drop your ",(0,a.kt)("strong",{parentName:"p"},"list form")," folder into it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Mobile folder list form template",src:r(66806).Z,width:"1301",height:"367"})),(0,a.kt)("p",null,'Now, launch your 4D application and open the "Contact" 4D project. '),(0,a.kt)("p",null,'Then, select the "Contact Demo App" mobile project: ',(0,a.kt)("strong",{parentName:"p"},"File > Open > Mobile Project > Contact Demo App"),". "),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"Forms section")," of the mobile project editor, you can see that your list form template has been successfully added to the list of available list form templates:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Forms section",src:r(27154).Z,width:"1072",height:"994"})),(0,a.kt)("p",null,"Now let's focus on the contents of the ",(0,a.kt)("strong",{parentName:"p"},"Custom List form")," folder."),(0,a.kt)("h2",{id:"list-form-template-content"},"List form template content"),(0,a.kt)("p",null,"In this folder, you will find:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"a layoutIconx2.png")," icon in 160x160px: displayed in the project editor when you select your template"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"a manifest.json file"),": includes a basic description of the template"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"a template.svg file"),": the visual representation of your template displayed when you define your list form content."),(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("strong",{parentName:"li"},"ios folder")," that includes the storyboard (graphical interface) and ",(0,a.kt)("strong",{parentName:"li"},"Swift")," file (code for the form) in ",(0,a.kt)("inlineCode",{parentName:"li"},"Source/Forms/Tables/___TABLE___")," folder"),(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("strong",{parentName:"li"},"android folder")," that includes the layout.xml file (graphical interface) in ",(0,a.kt)("inlineCode",{parentName:"li"},"app/src/main/res/layout")," folder.")),(0,a.kt)("p",null,"These files and folders are detailed in the next sections."))}c.isMDXComponent=!0},3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>f});var o=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,o,a=function(t,e){if(null==t)return{};var r,o,a={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=o.createContext({}),p=function(t){var e=o.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=p(t.components);return o.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var r=t.components,a=t.mdxType,n=t.originalType,s=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=p(r),f=a,d=u["".concat(s,".").concat(f)]||u[f]||c[f]||n;return r?o.createElement(d,l(l({ref:e},m),{},{components:r})):o.createElement(d,l({ref:e},m))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=r.length,l=new Array(n);l[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},27154:(t,e,r)=>{r.d(e,{Z:()=>o});const o=r.p+"assets/images/custom-listform-template-e64552beb84fbed90e81bb41b433b1b1.png"},48221:(t,e,r)=>{r.d(e,{Z:()=>o});const o=r.p+"assets/images/custom-template-final-result-6b78c23523c6821930c84477c357001b.png"},66806:(t,e,r)=>{r.d(e,{Z:()=>o});const o=r.p+"assets/images/mobile-folder-custom-template-e21fc234b1e3af646e51d08a432cb267.png"}}]);