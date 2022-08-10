"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4569],{42490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"many-to-one-relations",title:"Liens N vers 1"},i=void 0,l={unversionedId:"tutorials/relations/many-to-one-relations",id:"tutorials/relations/many-to-one-relations",title:"Liens N vers 1",description:"Gr\xe2ce \xe0 ce tutoriel, vous pourrez facilement inclure des liens N vers 1 dans vos projets mobiles.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/relations/many-to-one-relations.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/many-to-one-relations",permalink:"/fr/next/tutorials/relations/many-to-one-relations",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/relations/many-to-one-relations.md",tags:[],version:"current",frontMatter:{id:"many-to-one-relations",title:"Liens N vers 1"},sidebar:"tutorials",previous:{title:"Utiliser des param\xe8tres d'action",permalink:"/fr/next/tutorials/actions/using-action-parameters"},next:{title:"Liens 1 vers N",permalink:"/fr/next/tutorials/relations/one-to-many-relations"}},s={},c=[{value:"Structure section",id:"structure-section",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Gr\xe2ce \xe0 ce tutoriel, vous pourrez facilement inclure des liens N vers 1 dans vos projets mobiles."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Dans ce tutoriel, nous allons utiliser les noms des liens reliant vos tables. En attribuant des noms de liens descriptifs, vous simplifierez la structure de votre projet."))),(0,a.kt)("p",null,"Commen\xe7ons par t\xe9l\xe9charger le Projet Starter :"),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ManyToOneRelations/releases/latest/download/tutorial-ManyToOneRelations.zip"},"Projet Starter")),(0,a.kt)("p",null,"Here we want to display the category for each task in the detail form of your generated app. To do so, open the ",(0,a.kt)("strong",{parentName:"p"},"StarteriOSProject")," from ",(0,a.kt)("strong",{parentName:"p"},"Open > Mobile Project...")),(0,a.kt)("p",null,"Acc\xe9dez directement \xe0 la section Structure, puis s\xe9lectionnez la ",(0,a.kt)("strong",{parentName:"p"},"table Tasks"),"."),(0,a.kt)("h3",{id:"structure-section"},"Structure section"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Vous pouvez constater que le ",(0,a.kt)("strong",{parentName:"p"},"lien TaskCategory")," est soulign\xe9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"En cliquant dessus, vous afficherez les champs disponibles \xe0 travers ce lien")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"S\xe9lectionnez le ",(0,a.kt)("strong",{parentName:"p"},"champ Name")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"S\xe9lectionnez le lien \xe0 partir de la section Structure",src:n(33389).Z,width:"2164",height:"1988"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ce champ aura le m\xeame fonctionnement que n\u2019importe quel autre champ pour la suite de la cr\xe9ation de l\u2019application")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Vous pouvez \xe9galement filtrer le contenu de votre application \xe0 l\u2019aide des champs li\xe9s, \xe0 partir de la section Donn\xe9es. To do so enter ",(0,a.kt)("inlineCode",{parentName:"p"},"TaskCategory.Name != 'Personal'")," in the Filter query field to exclude personal tasks."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Champs li\xe9s depuis la section Donn\xe9es",src:n(66949).Z,width:"2164",height:"1988"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Vous pouvez ensuite s\xe9lectionner une ",(0,a.kt)("strong",{parentName:"p"},"ic\xf4ne")," et des ",(0,a.kt)("strong",{parentName:"p"},"formats")," et d\xe9finir des ",(0,a.kt)("strong",{parentName:"p"},"libell\xe9s courts et longs")," dans la section Libell\xe9s et ic\xf4nes"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Related field from Labels and Icons section",src:n(22813).Z,width:"2164",height:"1988"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cliquez sur la section Formulaires et faites glisser le champ dans le formulaire d\xe9taill\xe9 Tasks")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Related field in Forms section",src:n(90753).Z,width:"2164",height:"1988"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Build and Run")),(0,a.kt)("p",null,"Votre champ li\xe9 devrait apparaitre dans le formulaire d\xe9taill\xe9 de votre application\xa0!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Related field in Forms section",src:n(3615).Z,width:"1559",height:"907"})))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66949:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Related-field-from-Data-section-40a554492d0efaec1c01d14eebcd16e0.png"},3615:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/final-result-n-to-one-relations-181faceaf2f07d2456ffcded59f38a74.png"},90753:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/related-field-forms-53c7c33a25cc1d3a62987ca4c5b6f8a5.png"},22813:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/related-field-from-labels-icons-a6d37898709ae00fd0b014d6c81f464c.png"},33389:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/select-link-from-structure-c36a9e632997ff99d1eec350fa485a8e.png"}}]);