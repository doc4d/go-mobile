(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return m}));var a=r(3),o=r(7),n=(r(0),r(204)),l={id:"create-detail-form-template",title:"Creating detail form templates"},i={unversionedId:"tutorials/creating-detail-forms/create-detail-form-template",id:"tutorials/creating-detail-forms/create-detail-form-template",isDocsHomePage:!1,title:"Creating detail form templates",description:"OBJECTIVES",source:"@site/docs/tutorials/creating-detail-forms/create-detail-form-template.md",slug:"/tutorials/creating-detail-forms/create-detail-form-template",permalink:"/go-mobile/fr/docs/tutorials/creating-detail-forms/create-detail-form-template",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/creating-detail-forms/create-detail-form-template.md",version:"current",sidebar:"tutorials",previous:{title:"Storyboard",permalink:"/go-mobile/fr/docs/tutorials/creating-list-forms/list-form-storyboard"},next:{title:"Creating detail form icons",permalink:"/go-mobile/fr/docs/tutorials/creating-detail-forms/create-detail-form-icon"}},c=[{value:"Download the Starter project",id:"download-the-starter-project",children:[]},{value:"Add a detail form template to your mobile project",id:"add-a-detail-form-template-to-your-mobile-project",children:[]},{value:"Detail form template folder content",id:"detail-form-template-folder-content",children:[]}],p={toc:c};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"OBJECTIVES")),Object(n.b)("p",{parentName:"blockquote"},"Create your first list form template.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"PREREQUISITES")),Object(n.b)("p",{parentName:"blockquote"},"Click ",Object(n.b)("inlineCode",{parentName:"p"},"[here](prerequisites.html)")," to see what you'll need to get started!")),Object(n.b)("p",null,"In this tutorial, we'll guide you through the creation of a detail form template. It will display an ",Object(n.b)("strong",{parentName:"p"},"image header"),", as well as ",Object(n.b)("strong",{parentName:"p"},"title and content fields")," that will be duplicated in the generated iOS app."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"![Custom template final result](assets/en/custom-detailform/custom-template-final-result.png)")),Object(n.b)("h2",{id:"download-the-starter-project"},"Download the Starter project"),Object(n.b)("p",null,"To begin, download the ",Object(n.b)("strong",{parentName:"p"},"Starter project"),", which includes:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A ",Object(n.b)("strong",{parentName:"li"},"Custom Detail form")," folder (custom Detail form template folder)"),Object(n.b)("li",{parentName:"ul"},"A ",Object(n.b)("strong",{parentName:"li"},"Contact.4dbase")," file (Contact demo database with a ready to use mobile app project)")),Object(n.b)("div",{style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},Object(n.b)("a",{className:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-CustomDetailFormStarter/archive/67c9c2f4672083e999a4a592a069d7ca45b3351e.zip"},"CUSTOM DETAIL FORM Starter project")),Object(n.b)("p",null,"You are now ready to create your first detail form template !"),Object(n.b)("h2",{id:"add-a-detail-form-template-to-your-mobile-project"},"Add a detail form template to your mobile project"),Object(n.b)("p",null,"First, create a ",Object(n.b)("em",{parentName:"p"},"Contact.4dbase/Resources/Mobile/form/detail")," folder and drag and drop the ",Object(n.b)("strong",{parentName:"p"},"Custom Detail form")," folder in it."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"![Mobile folder custom template](assets/en/custom-detailform/mobile-folder-custom-template.png)")),Object(n.b)("p",null,"Then open the Contact.4dbase with 4D. and go to File > open > Mobile Project... to open the ",Object(n.b)("strong",{parentName:"p"},"Contact Demo App")," "),Object(n.b)("p",null,"Finally go to the ",Object(n.b)("strong",{parentName:"p"},"Forms section")," in the project editor. You will see that the Custom Detail form template has been successfully added to the Detail form template list !"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"![Forms section](assets/en/custom-detailform/custom-detailform-template.png)")),Object(n.b)("p",null,"Now let's focus on the ",Object(n.b)("strong",{parentName:"p"},"Custom Detail form")," folder content."),Object(n.b)("h2",{id:"detail-form-template-folder-content"},"Detail form template folder content"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"a layoutIconx2.png")," icon in 160x160px that will be displayed in the project editor when you select your custom template among others"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"a manifest.json")," file that includes a basic description of the template"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"a template.svg")," file that will be the representation of your template that will be display when you define your listForm content and where you will drag and drop your fields"),Object(n.b)("li",{parentName:"ul"},"Source folder that includes the ",Object(n.b)("strong",{parentName:"li"},"storyboard")," (graphical interface) and ",Object(n.b)("strong",{parentName:"li"},"swift")," file (code for the form)")),Object(n.b)("p",null,"What are those files, what it is used for and how to customize it ?"))}m.isMDXComponent=!0},204:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),m=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=m(r),u=a,d=s["".concat(l,".").concat(u)]||s[u]||b[u]||n;return r?o.a.createElement(d,i(i({ref:t},p),{},{components:r})):o.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);