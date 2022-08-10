"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4489],{98781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=r(87462),a=(r(67294),r(3905));const o={id:"multi-criteria-search",title:"Multi-criteria Search"},n=void 0,l={unversionedId:"tutorials/creating-list-forms/multi-criteria-search",id:"tutorials/creating-list-forms/multi-criteria-search",title:"Multi-criteria Search",description:"This section will show you how to activate the multi-criteria search in your own templates.",source:"@site/docs/tutorials/creating-list-forms/multi-criteria-search.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/multi-criteria-search",permalink:"/next/tutorials/creating-list-forms/multi-criteria-search",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/creating-list-forms/multi-criteria-search.md",tags:[],version:"current",frontMatter:{id:"multi-criteria-search",title:"Multi-criteria Search"},sidebar:"tutorials",previous:{title:"Template.svg",permalink:"/next/tutorials/creating-list-forms/list-form-svg-file"},next:{title:"iOS Storyboard",permalink:"/next/tutorials/creating-list-forms/list-form-storyboard"}},s={},c=[{value:"Template svg file",id:"template-svg-file",level:2},{value:"Project editor",id:"project-editor",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section will show you how to activate the ",(0,a.kt)("a",{parentName:"p",href:"../../project-definition/forms#multi-criteria-search"},"multi-criteria search")," in your own templates."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The multi-criteria search feature is activated by default in all templates generated by the mobile editor."))),(0,a.kt)("h2",{id:"template-svg-file"},"Template svg file"),(0,a.kt)("p",null,"To activate this feature in your own templates, you need to modify the following lines in your template.svg file from:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>\n\n')),(0,a.kt)("p",null,"to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<rect id="search" class="droppable field optional multi-criteria" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>\n\n')),(0,a.kt)("p",null,"There you go! The class is the only thing you need to modify for the multi-search criteria to be active."),(0,a.kt)("h2",{id:"project-editor"},"Project editor"),(0,a.kt)("p",null,"Next, you can go to the project editor and drop several fields into the list form search area."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Multi-criteria search in the project editor",src:r(17804).Z,width:"567",height:"497"})),(0,a.kt)("p",null,"Click on the search field's delete button to modifiy the associated field list."),(0,a.kt)("p",null,"A menu will appear to allow you to ",(0,a.kt)("strong",{parentName:"p"},"remove specific fields")," or ",(0,a.kt)("strong",{parentName:"p"},"remove all fields"),", depending on which criteria you want to base your search(es) on."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Modify Multi-criteria search fields",src:r(83604).Z,width:"567",height:"497"})),(0,a.kt)("p",null,"Congratulations! You can now base your search(es) on multiple fields in your mobile app!"))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?i.createElement(f,n(n({ref:t},p),{},{components:r})):i.createElement(f,n({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,n=new Array(o);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,n[1]=l;for(var c=2;c<o;c++)n[c]=r[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83604:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/multi-criteria-search-forms-section-remove-fields-2f26827d96d7fff88d89c5e5b94d4817.png"},17804:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/multi-criteria-search-forms-section-7f228461bafbe978f0bfd65a9c697bb2.png"}}]);