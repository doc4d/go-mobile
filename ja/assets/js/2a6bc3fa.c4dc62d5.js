(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1887],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,l(l({ref:e},p),{},{components:r})):n.createElement(d,l({ref:e},p))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93199:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),l=["components"],i={id:"list-form-template",title:"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"},s=void 0,c={unversionedId:"tutorials/creating-list-forms/list-form-template",id:"tutorials/creating-list-forms/list-form-template",isDocsHomePage:!1,title:"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",description:"In this tutorial, we'll cover nearly all aspects of creating a list form template, including the use of a searchBar, a table displaying an image, a title, and a subtitle for each cell.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/creating-list-forms/list-form-template.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-template",permalink:"/go-mobile/ja/docs/tutorials/creating-list-forms/list-form-template",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/creating-list-forms/list-form-template.md",version:"current",frontMatter:{id:"list-form-template",title:"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"},sidebar:"tutorials",previous:{title:"Custom Login Form",permalink:"/go-mobile/ja/docs/tutorials/custom-login-form"},next:{title:"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30a2\u30a4\u30b3\u30f3",permalink:"/go-mobile/ja/docs/tutorials/creating-list-forms/list-form-icon"}},p=[{value:"Download the Starter project",id:"download-the-starter-project",children:[]},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b",children:[]},{value:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u69cb\u9020",id:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u69cb\u9020",children:[]}],u={toc:p};function m(t){var e=t.components,i=(0,o.Z)(t,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial, we'll cover nearly all aspects of creating a list form template, including the use of a ",(0,a.kt)("strong",{parentName:"p"},"searchBar"),", a table displaying an ",(0,a.kt)("strong",{parentName:"p"},"image"),", a ",(0,a.kt)("strong",{parentName:"p"},"title"),", and a ",(0,a.kt)("strong",{parentName:"p"},"subtitle")," for each cell."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\uff08\u5b8c\u6210\uff09",src:r(45338).Z})),(0,a.kt)("h2",{id:"download-the-starter-project"},"Download the Starter project"),(0,a.kt)("p",null,"Before we begin, be sure to download and unzip the ",(0,a.kt)("strong",{parentName:"p"},"Starter project")," which includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"List form")," folder"),(0,a.kt)("li",{parentName:"ul"},'A demo 4D project ("Contact") with a ready-to-use mobile app project.')),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomListFormStarter/archive/4702619ed628a98f7cba5aacc08b6302d4bb8f86.zip"},"Starter project")),(0,a.kt)("h2",{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b"),(0,a.kt)("p",null,"The first thing you'll need to do is to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," folder in ",(0,a.kt)("em",{parentName:"p"},"Contact.4dbase/Resources/Mobile/form/")," location and drag and drop your ",(0,a.kt)("strong",{parentName:"p"},"list form")," folder into it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Mobile folder list form template",src:r(95769).Z})),(0,a.kt)("p",null,'Now, launch your 4D application and open the "Contact" 4D project.'),(0,a.kt)("p",null,'Then, select the "Contact Demo App" mobile project: ',(0,a.kt)("strong",{parentName:"p"},"File > Open > Mobile Project > Contact Demo App"),"."),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"Forms section")," of the mobile project editor, you can see that your list form template has been successfully added to the list of available list form templates:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Forms section",src:r(83756).Z})),(0,a.kt)("p",null,"Now let's focus on the contents of the ",(0,a.kt)("strong",{parentName:"p"},"Custom List form")," folder."),(0,a.kt)("h2",{id:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u69cb\u9020"},"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u69cb\u9020"),(0,a.kt)("p",null,"In this folder, you will find:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"a layoutIconx2.png")," icon in 160x160px: displayed in the project editor when you select your template"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"a manifest.json file"),": includes a basic description of the template"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"a template.svg file"),": the visual representation of your template displayed when you define your list form content."),(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("strong",{parentName:"li"},"ios folder")," that includes the storyboard (graphical interface) and ",(0,a.kt)("strong",{parentName:"li"},"Swift")," file (code for the form) in ",(0,a.kt)("inlineCode",{parentName:"li"},"Source/Forms/Tables/___TABLE___")," folder"),(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("strong",{parentName:"li"},"android folder")," that includes the layout.xml file (graphical interface) in ",(0,a.kt)("inlineCode",{parentName:"li"},"app/src/main/res/layout")," folder.")),(0,a.kt)("p",null,"These files and folders are detailed in the next sections."))}m.isMDXComponent=!0},83756:function(t,e,r){"use strict";e.Z=r.p+"assets/images/custom-listform-template-e64552beb84fbed90e81bb41b433b1b1.png"},45338:function(t,e,r){"use strict";e.Z=r.p+"assets/images/custom-template-final-result-6b78c23523c6821930c84477c357001b.png"},95769:function(t,e,r){"use strict";e.Z=r.p+"assets/images/mobile-folder-custom-template-e21fc234b1e3af646e51d08a432cb267.png"}}]);