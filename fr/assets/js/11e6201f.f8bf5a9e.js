(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[704],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return p},kt:function(){return f}});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=o.createContext({}),c=function(t){var e=o.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=c(t.components);return o.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=c(r),f=n,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return r?o.createElement(d,l(l({ref:e},p),{},{components:r})):o.createElement(d,l({ref:e},p))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},31767:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var o=r(22122),n=r(19756),a=(r(67294),r(3905)),l=["components"],i={id:"list-form-template",title:"List form templates"},s=void 0,c={unversionedId:"tutorials/creating-list-forms/list-form-template",id:"tutorials/creating-list-forms/list-form-template",isDocsHomePage:!1,title:"List form templates",description:"In this tutorial, we'll cover nearly all aspects of creating a list form template, including the use of a searchBar, a table displaying an image, a title, and a subtitle for each cell.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/creating-list-forms/list-form-template.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-template",permalink:"/go-mobile/fr/docs/tutorials/creating-list-forms/list-form-template",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/creating-list-forms/list-form-template.md",version:"current",frontMatter:{id:"list-form-template",title:"List form templates"},sidebar:"tutorials",previous:{title:"Custom Login Form",permalink:"/go-mobile/fr/docs/tutorials/custom-login-form"},next:{title:"List form icon",permalink:"/go-mobile/fr/docs/tutorials/creating-list-forms/list-form-icon"}},p=[{value:"Download the Starter project",id:"download-the-starter-project",children:[]},{value:"Add a list form template to your mobile project",id:"add-a-list-form-template-to-your-mobile-project",children:[]},{value:"List form template content",id:"list-form-template-content",children:[]}],m={toc:p};function u(t){var e=t.components,i=(0,n.Z)(t,l);return(0,a.kt)("wrapper",(0,o.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial, we'll cover nearly all aspects of creating a list form template, including the use of a ",(0,a.kt)("strong",{parentName:"p"},"searchBar"),", a table displaying an ",(0,a.kt)("strong",{parentName:"p"},"image"),", a ",(0,a.kt)("strong",{parentName:"p"},"title"),", and a ",(0,a.kt)("strong",{parentName:"p"},"subtitle")," for each cell."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"List form template final result",src:r(26823).Z})),(0,a.kt)("h2",{id:"download-the-starter-project"},"Download the Starter project"),(0,a.kt)("p",null,"Before we begin, be sure to download and unzip the ",(0,a.kt)("strong",{parentName:"p"},"Starter project")," which includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"List form")," folder"),(0,a.kt)("li",{parentName:"ul"},'A demo 4D project ("Contact") with a ready-to-use mobile app project.')),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-CustomListFormStarter/archive/4702619ed628a98f7cba5aacc08b6302d4bb8f86.zip"},"Starter project")),(0,a.kt)("h2",{id:"add-a-list-form-template-to-your-mobile-project"},"Add a list form template to your mobile project"),(0,a.kt)("p",null,"The first thing you'll need to do is to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," folder in ",(0,a.kt)("em",{parentName:"p"},"Contact.4dbase/Resources/Mobile/form/")," location and drag and drop your ",(0,a.kt)("strong",{parentName:"p"},"list form")," folder into it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Mobile folder list form template",src:r(48322).Z})),(0,a.kt)("p",null,'Now, launch your 4D application and open the "Contact" 4D project.'),(0,a.kt)("p",null,'Then, select the "Contact Demo App" mobile project: ',(0,a.kt)("strong",{parentName:"p"},"File > Open > Mobile Project > Contact Demo App"),"."),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"Forms section")," of the mobile project editor, you can see that your list form template has been successfully added to the list of available list form templates:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Forms section",src:r(33903).Z})),(0,a.kt)("p",null,"Now let's focus on the contents of the ",(0,a.kt)("strong",{parentName:"p"},"Custom List form")," folder."),(0,a.kt)("h2",{id:"list-form-template-content"},"List form template content"),(0,a.kt)("p",null,"In this folder, you will find:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"a layoutIconx2.png")," icon in 160x160px: displayed in the project editor when you select your template"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"a manifest.json file"),": includes a basic description of the template"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"a template.svg file"),": the visual representation of your template displayed when you define your list form content."),(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("strong",{parentName:"li"},"ios folder")," that includes the storyboard (graphical interface) and ",(0,a.kt)("strong",{parentName:"li"},"Swift")," file (code for the form) in ",(0,a.kt)("inlineCode",{parentName:"li"},"Source/Forms/Tables/___TABLE___")," folder"),(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("strong",{parentName:"li"},"android folder")," that includes the layout.xml file (graphical interface) in ",(0,a.kt)("inlineCode",{parentName:"li"},"app/src/main/res/layout")," folder.")),(0,a.kt)("p",null,"These files and folders are detailed in the next sections."))}u.isMDXComponent=!0},33903:function(t,e,r){"use strict";e.Z=r.p+"assets/images/custom-listform-template-e64552beb84fbed90e81bb41b433b1b1.png"},26823:function(t,e,r){"use strict";e.Z=r.p+"assets/images/custom-template-final-result-6b78c23523c6821930c84477c357001b.png"},48322:function(t,e,r){"use strict";e.Z=r.p+"assets/images/mobile-folder-custom-template-e21fc234b1e3af646e51d08a432cb267.png"}}]);