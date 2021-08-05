(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9700],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=l,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?a.createElement(f,n(n({ref:t},c),{},{components:r})):a.createElement(f,n({ref:t},c))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,n=new Array(o);n[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,n[1]=i;for(var u=2;u<o;u++)n[u]=r[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15045:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var a=r(22122),l=r(19756),o=(r(67294),r(3905)),n=["components"],i={id:"update-gallery-template",title:"Update a template"},p=void 0,u={unversionedId:"tutorials/gallery/update-gallery-template",id:"tutorials/gallery/update-gallery-template",isDocsHomePage:!1,title:"Update a template",description:"OBJECTIVES",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/gallery/update-gallery-template.md",sourceDirName:"tutorials/gallery",slug:"/tutorials/gallery/update-gallery-template",permalink:"/go-mobile/ja/docs/tutorials/gallery/update-gallery-template",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/gallery/update-gallery-template.md",version:"current",frontMatter:{id:"update-gallery-template",title:"Update a template"},sidebar:"tutorials",previous:{title:"Install a template",permalink:"/go-mobile/ja/docs/tutorials/gallery/install-gallery-template"},next:{title:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",permalink:"/go-mobile/ja/docs/tutorials/data-formatter/data-formatter"}},c=[{value:"Open a template",id:"open-a-template",children:[]},{value:"Update your template",id:"update-your-template",children:[]},{value:"Share your template",id:"share-your-template",children:[]},{value:"Where to go from here?",id:"where-to-go-from-here",children:[]}],s={toc:c};function m(e){var t=e.components,i=(0,l.Z)(e,n);return(0,o.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,o.kt)("p",{parentName:"blockquote"},"Open and update a template from the gallery and improve it")),(0,o.kt)("h2",{id:"open-a-template"},"Open a template"),(0,o.kt)("p",null,"To modify a template that have downloaded from the Gallery :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The first thing you'll need to do is going to your ",(0,o.kt)("em",{parentName:"li"},"YourDatabase.4dbase/Resources/Mobile/form/list")," folder.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Template resources folder",src:r(87093).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"From here, you can see the template you have just downloaded previously is availble."),(0,o.kt)("li",{parentName:"ul"},"Unzip and opent it"),(0,o.kt)("li",{parentName:"ul"},"Then double click on the package.swift file.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open package.swift",src:r(89609).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This will automatically open in Xcode with all sources to allow you modifying your template.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open with Xcode",src:r(32816).Z})),(0,o.kt)("h2",{id:"update-your-template"},"Update your template"),(0,o.kt)("p",null,"From here you will be able to add swift code and optimize your stroybord template."),(0,o.kt)("p",null,"So easy to use !"),(0,o.kt)("p",null,"Let's for example update the FIELD_1_LABEL color and font using the Attributes inspector."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Update with Xcode",src:r(49194).Z})),(0,o.kt)("p",null,"Then after you've done your template improvements, you can use your template selecting it from the Forms template picker in the project editor."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select updated template",src:r(34676).Z})),(0,o.kt)("h2",{id:"share-your-template"},"Share your template"),(0,o.kt)("p",null,"When your template is ready and you added significat improvements, you probably want to share it."),(0,o.kt)("p",null,"A sharing button is directly accessible at the bottom of the template Gallery picker!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Share your template",src:r(6507).Z})),(0,o.kt)("p",null,"All the sharing process is detailed on the contribution page for you to help you in the sharing process and where good proctices are described."),(0,o.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,o.kt)("p",null,"You could try following the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4d-go-mobile/gallery/blob/master/.github/CONTRIBUTING.md#how-do-you-add-a-package"},"contribution guide")," to share your templates in github and make them appear in the project editor."))}m.isMDXComponent=!0},89609:function(e,t,r){"use strict";t.Z=r.p+"assets/images/open-package-swift-7504d7784747f257a70248e2ad22d621.png"},32816:function(e,t,r){"use strict";t.Z=r.p+"assets/images/open-with-xcode-0f2718deab5ee862b8b6ae81b6cf66a5.png"},34676:function(e,t,r){"use strict";t.Z=r.p+"assets/images/selelect-update-template-55bc5d7601e96256b1c3c859c41c712b.png"},6507:function(e,t,r){"use strict";t.Z=r.p+"assets/images/share-template-167a5de60fa2efefcede88333030fbae.png"},87093:function(e,t,r){"use strict";t.Z=r.p+"assets/images/template-resources-folder-e47ff962039b05c371f11bd975e9edf2.png"},49194:function(e,t,r){"use strict";t.Z=r.p+"assets/images/update-template-c1bc27f40c50fdee16d5947dd897df12.png"}}]);