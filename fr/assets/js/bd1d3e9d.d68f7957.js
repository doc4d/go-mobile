(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7599],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=l,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(f,n(n({ref:t},s),{},{components:r})):a.createElement(f,n({ref:t},s))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,n=new Array(o);n[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,n[1]=i;for(var u=2;u<o;u++)n[u]=r[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35552:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return n},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var a=r(22122),l=r(19756),o=(r(67294),r(3905)),n={id:"update-gallery-template",title:"Update a template"},i={unversionedId:"tutorials/gallery/update-gallery-template",id:"tutorials/gallery/update-gallery-template",isDocsHomePage:!1,title:"Update a template",description:"OBJECTIVES",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/gallery/update-gallery-template.md",sourceDirName:"tutorials/gallery",slug:"/tutorials/gallery/update-gallery-template",permalink:"/go-mobile/fr/docs/tutorials/gallery/update-gallery-template",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/gallery/update-gallery-template.md",version:"current",frontMatter:{id:"update-gallery-template",title:"Update a template"},sidebar:"tutorials",previous:{title:"Install a template",permalink:"/go-mobile/fr/docs/tutorials/gallery/install-gallery-template"},next:{title:"Using icons",permalink:"/go-mobile/fr/docs/tutorials/using-icons/using-icons"}},p=[{value:"Open a template",id:"open-a-template",children:[]},{value:"Update your template",id:"update-your-template",children:[]},{value:"Share your template",id:"share-your-template",children:[]},{value:"Where to go from here?",id:"where-to-go-from-here",children:[]}],u={toc:p};function s(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,o.kt)("p",{parentName:"blockquote"},"Open and update a template from the gallery and improve it")),(0,o.kt)("h2",{id:"open-a-template"},"Open a template"),(0,o.kt)("p",null,"To modify a template that have downloaded from the Gallery :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The first thing you'll need to do is going to your ",(0,o.kt)("em",{parentName:"li"},"YourDatabase.4dbase/Resources/Mobile/form/list")," folder.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Template resources folder",src:r(84870).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"From here, you can see the template you have just downloaded previously is availble."),(0,o.kt)("li",{parentName:"ul"},"Unzip and opent it"),(0,o.kt)("li",{parentName:"ul"},"Then double click on the package.swift file.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open package.swift",src:r(71408).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This will automatically open in Xcode with all sources to allow you modifying your template.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open with Xcode",src:r(72210).Z})),(0,o.kt)("h2",{id:"update-your-template"},"Update your template"),(0,o.kt)("p",null,"From here you will be able to add swift code and optimize your stroybord template."),(0,o.kt)("p",null,"So easy to use !"),(0,o.kt)("p",null,"Let's for example update the FIELD_1_LABEL color and font using the Attributes inspector."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Update with Xcode",src:r(85885).Z})),(0,o.kt)("p",null,"Then after you've done your template improvements, you can use your template selecting it from the Forms template picker in the project editor."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select updated template",src:r(95295).Z})),(0,o.kt)("h2",{id:"share-your-template"},"Share your template"),(0,o.kt)("p",null,"When your template is ready and you added significat improvements, you probably want to share it."),(0,o.kt)("p",null,"A sharing button is directly accessible at the bottom of the template Gallery picker!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Share your template",src:r(26461).Z})),(0,o.kt)("p",null,"All the sharing process is detailed on the contribution page for you to help you in the sharing process and where good proctices are described."),(0,o.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,o.kt)("p",null,"You could try following the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/gallery/blob/master/.github/CONTRIBUTING.md#how-do-you-add-a-package"},"contribution guide")," to share your templates in github and make them appear in the project editor."))}s.isMDXComponent=!0},71408:function(e,t,r){"use strict";t.Z=r.p+"assets/images/open-package-swift-7504d7784747f257a70248e2ad22d621.png"},72210:function(e,t,r){"use strict";t.Z=r.p+"assets/images/open-with-xcode-0f2718deab5ee862b8b6ae81b6cf66a5.png"},95295:function(e,t,r){"use strict";t.Z=r.p+"assets/images/selelect-update-template-55bc5d7601e96256b1c3c859c41c712b.png"},26461:function(e,t,r){"use strict";t.Z=r.p+"assets/images/share-template-167a5de60fa2efefcede88333030fbae.png"},84870:function(e,t,r){"use strict";t.Z=r.p+"assets/images/template-resources-folder-e47ff962039b05c371f11bd975e9edf2.png"},85885:function(e,t,r){"use strict";t.Z=r.p+"assets/images/update-template-c1bc27f40c50fdee16d5947dd897df12.png"}}]);