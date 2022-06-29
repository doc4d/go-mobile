"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8882],{23026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=r(87462),l=(r(67294),r(3905));const a={id:"detail-form-template",title:"Mod\xe8les de formulaires d\xe9taill\xe9s"},n=void 0,i={unversionedId:"tutorials/creating-detail-forms/detail-form-template",id:"version-19-R3/tutorials/creating-detail-forms/detail-form-template",title:"Mod\xe8les de formulaires d\xe9taill\xe9s",description:"Dans ce tutoriel, nous vous guiderons dans la cr\xe9ation d'un mod\xe8le de formulaire d\xe9taill\xe9. Ce mod\xe8le affichera un en-t\xeate d'image et des champs titre et contenu qui seront dupliqu\xe9s dans les applications iOS et Android qui seront g\xe9n\xe9r\xe9s.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R3/tutorials/creating-detail-forms/detail-form-template.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template",permalink:"/go-mobile/fr/docs/19-R3/tutorials/creating-detail-forms/detail-form-template",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/creating-detail-forms/detail-form-template.md",tags:[],version:"19-R3",frontMatter:{id:"detail-form-template",title:"Mod\xe8les de formulaires d\xe9taill\xe9s"},sidebar:"version-19-R3/tutorials",previous:{title:"Android Layout",permalink:"/go-mobile/fr/docs/19-R3/tutorials/creating-list-forms/list-form-layout"},next:{title:"Ic\xf4nes du formulaire d\xe9taill\xe9",permalink:"/go-mobile/fr/docs/19-R3/tutorials/creating-detail-forms/detail-form-icon"}},s={},d=[{value:"T\xe9l\xe9chargez le projet Starter",id:"t\xe9l\xe9chargez-le-projet-starter",level:2},{value:"Ajoutez un mod\xe8le de formulaire d\xe9taill\xe9 \xe0 votre projet mobile",id:"ajoutez-un-mod\xe8le-de-formulaire-d\xe9taill\xe9-\xe0-votre-projet-mobile",level:2},{value:"Le dossier du mod\xe8le de formulaire d\xe9taill\xe9 et son contenu",id:"le-dossier-du-mod\xe8le-de-formulaire-d\xe9taill\xe9-et-son-contenu",level:2}],u={toc:d};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Dans ce tutoriel, nous vous guiderons dans la cr\xe9ation d'un mod\xe8le de formulaire d\xe9taill\xe9. Ce mod\xe8le affichera un ",(0,l.kt)("strong",{parentName:"p"},"en-t\xeate d'image")," et ",(0,l.kt)("strong",{parentName:"p"},"des champs titre et contenu")," qui seront dupliqu\xe9s dans les applications iOS et Android qui seront g\xe9n\xe9r\xe9s."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Custom template final result",src:r(68879).Z,width:"1417",height:"907"})),(0,l.kt)("h2",{id:"t\xe9l\xe9chargez-le-projet-starter"},"T\xe9l\xe9chargez le projet Starter"),(0,l.kt)("p",null,"Pour commencer, t\xe9l\xe9chargez le ",(0,l.kt)("strong",{parentName:"p"},"Projet Starter"),", qui comprend :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Un dossier ",(0,l.kt)("strong",{parentName:"li"},"Custom Detail form")," (dossier contenant le mod\xe8le personnalis\xe9 du formulaire d\xe9taill\xe9)"),(0,l.kt)("li",{parentName:"ul"},'A demo 4D project ("Contact") with a ready to use mobile app project.')),(0,l.kt)("div",{className:"center-button"},(0,l.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDetailFormStarter/archive/67c9c2f4672083e999a4a592a069d7ca45b3351e.zip"},"Projet Starter")),(0,l.kt)("h2",{id:"ajoutez-un-mod\xe8le-de-formulaire-d\xe9taill\xe9-\xe0-votre-projet-mobile"},"Ajoutez un mod\xe8le de formulaire d\xe9taill\xe9 \xe0 votre projet mobile"),(0,l.kt)("p",null,"Cr\xe9ez d'abord un dossier ",(0,l.kt)("em",{parentName:"p"},"Contact.4dbase/Resources/Mobile/form/detail")," dans lequel vous glisserez et d\xe9poserez le dossier ",(0,l.kt)("strong",{parentName:"p"},"Custom Detail form"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Mobile folder custom template",src:r(25843).Z,width:"1342",height:"367"})),(0,l.kt)("p",null,'Now, launch your 4D application and open the "Contact" 4D project. Then, select the "Contact Demo App" mobile project: ',(0,l.kt)("strong",{parentName:"p"},"File > Open > Mobile Project > Contact Demo App"),"."),(0,l.kt)("p",null,"In the ",(0,l.kt)("strong",{parentName:"p"},"Forms section")," in the project editor, you can see that the Custom Detail form template has been successfully added to the Detail form template list:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Forms section",src:r(29004).Z,width:"1072",height:"994"})),(0,l.kt)("p",null,"Now let's focus on the ",(0,l.kt)("strong",{parentName:"p"},"Custom Detail form")," folder content."),(0,l.kt)("h2",{id:"le-dossier-du-mod\xe8le-de-formulaire-d\xe9taill\xe9-et-son-contenu"},"Le dossier du mod\xe8le de formulaire d\xe9taill\xe9 et son contenu"),(0,l.kt)("p",null,"Dans ce dossier, vous trouverez :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Une ic\xf4ne ",(0,l.kt)("strong",{parentName:"li"},"layoutIconx2.png")," d'une r\xe9solution de 160x160px, qui sera affich\xe9e dans l'\xe9diteur de projet lorsque vous s\xe9lectionnerez votre mod\xe8le personnalis\xe9"),(0,l.kt)("li",{parentName:"ul"},"Un fichier ",(0,l.kt)("strong",{parentName:"li"},"manifest.json"),", qui contient une description simple du mod\xe8le"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"a template.svg")," file: the representation of your template that will be display when you define your detailForm content and where you will drag and drop your fields"),(0,l.kt)("li",{parentName:"ul"},"an ",(0,l.kt)("strong",{parentName:"li"},"ios folder")," that includes the storyboard (graphical interface) and ",(0,l.kt)("strong",{parentName:"li"},"Swift")," file (code for the form) in ",(0,l.kt)("inlineCode",{parentName:"li"},"Source > Forms > Tables 'TABLE'")," folder"),(0,l.kt)("li",{parentName:"ul"},"an ",(0,l.kt)("strong",{parentName:"li"},"android folder")," that includes the layout.xml file (graphical interface) in ",(0,l.kt)("inlineCode",{parentName:"li"},"app > src > main > res > layout")," folder.")),(0,l.kt)("p",null,"These files and folders are detailed in the next sections."))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var o=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,l=function(e,t){if(null==e)return{};var r,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(r),p=l,f=c["".concat(s,".").concat(p)]||c[p]||m[p]||a;return r?o.createElement(f,n(n({ref:t},u),{},{components:r})):o.createElement(f,n({ref:t},u))}));function p(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,n=new Array(a);n[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,n[1]=i;for(var d=2;d<a;d++)n[d]=r[d];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},29004:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/custom-detailform-template-c7ded1eef7b062d26641728c5c18421a.png"},68879:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/custom-template-final-result-d109ed2a561d41dce81b348dccb0f103.png"},25843:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/mobile-folder-custom-template-8c95719ca4d55e7b1b4173e394781365.png"}}]);