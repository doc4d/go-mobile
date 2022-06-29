"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6119],{93341:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const l={id:"list-form-svg-file",title:"Template.svg"},r=void 0,o={unversionedId:"tutorials/creating-list-forms/list-form-svg-file",id:"version-19-R3/tutorials/creating-list-forms/list-form-svg-file",title:"Template.svg",description:"The template.svg file is a basic visual representation of a template. Dans ce fichier, vous d\xe9finirez des sections afin d'ajouter des champs \xe0 votre mod\xe8le de formulaire Liste depuis l\u2019\xe9diteur de projet.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R3/tutorials/creating-list-forms/list-form-svg-file.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-svg-file",permalink:"/go-mobile/fr/docs/19-R3/tutorials/creating-list-forms/list-form-svg-file",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/creating-list-forms/list-form-svg-file.md",tags:[],version:"19-R3",frontMatter:{id:"list-form-svg-file",title:"Template.svg"},sidebar:"version-19-R3/tutorials",previous:{title:"Manifest.json",permalink:"/go-mobile/fr/docs/19-R3/tutorials/creating-list-forms/list-form-manifest"},next:{title:"Multi-criteria Search",permalink:"/go-mobile/fr/docs/19-R3/tutorials/creating-list-forms/multi-criteria-search"}},s={},d=[{value:"Title",id:"title",level:2},{value:"ios:values",id:"iosvalues",level:2},{value:"Area position, height, and width",id:"area-position-height-and-width",level:2},{value:"Zone SearchableField :",id:"zone-searchablefield-",level:3},{value:"Zone SectionField :",id:"zone-sectionfield-",level:3},{value:"Zone ImageField\xa0:",id:"zone-imagefield",level:3},{value:"Zone Title Field\xa0:",id:"zone-title-field",level:3},{value:"Zone Subtitle Field\xa0:",id:"zone-subtitle-field",level:3},{value:"ios:types",id:"iostypes",level:2}],p={toc:d};function c(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"template.svg")," file is a basic visual representation of a template. Dans ce fichier, vous d\xe9finirez des sections afin d'ajouter des champs \xe0 votre mod\xe8le de formulaire Liste depuis l\u2019\xe9diteur de projet."),(0,i.kt)("p",null,"Voici une version finale\xa0:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Template svg file",src:a(29793).Z,width:"1072",height:"994"})),(0,i.kt)("p",null,"Let\u2019s focus on the different parts of this svg file and what you'll need to edit."),(0,i.kt)("h2",{id:"title"},"Title"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<title>Custom List form</title>\n")),(0,i.kt)("p",null,"Title of the template."),(0,i.kt)("h2",{id:"iosvalues"},"ios:values"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<text id="cookery" ios:values="search,section,f1,f2,f3"/>\n')),(0,i.kt)("p",null,"Includes IDs which define your form areas:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"search"),": Refers to the search field area. Cela vous permettra de glisser-d\xe9poser un champ comme \xe9tant le crit\xe8re de recherche dans votre formulaire Liste (facultatif)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"section"),": Refers to the section field area. Cela vous permettra de glisser-d\xe9poser un champ comme \xe9tant le crit\xe8re de tri dans votre formulaire Liste (facultatif)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"f1, f2 and f3"),": Refers to the fields to display in each cell of your list form. Cela vous permettra de glisser-d\xe9poser les champs \xe0 faire appara\xeetre dans les cellules de votre formulaire Liste.")),(0,i.kt)("h2",{id:"area-position-height-and-width"},"Area position, height, and width"),(0,i.kt)("p",null,"You can define the position, height and width for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Searchfield"),(0,i.kt)("li",{parentName:"ul"},"Sectionfield"),(0,i.kt)("li",{parentName:"ul"},"D'autres champs qui seront affich\xe9s dans chaque cellule")),(0,i.kt)("h3",{id:"zone-searchablefield-"},"Zone SearchableField :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,60)\u201d>\n\n//2\n<rect class="bg field" x="14" y="12" width="238" height="30\u201d/>\n\n//3\n<path class="magnifyingGlass" transform="translate(20,8) scale(1)\u201d/>\n\n//4\n<textArea id="search.label" class="label" x="14" y="8" width="238"/>\n\n//5\n<rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35"  ios:bind="searchableField"/>\n\n//6\n<use id="search.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Position de toute la zone Y"),(0,i.kt)("li",{parentName:"ol"},"Position, hauteur et largeur de la zone d'arri\xe8re-plan"),(0,i.kt)("li",{parentName:"ol"},'Image affichant l\'ic\xf4ne loupe dans le "searchable field" (champ de recherche)'),(0,i.kt)("li",{parentName:"ol"},"D\xe9finir la position de la zone de texte et la largeur"),(0,i.kt)("li",{parentName:"ol"},"Define the droppable field position, height and width, as well as accepted ",(0,i.kt)("a",{parentName:"li",href:"#iostypes"},(0,i.kt)("strong",{parentName:"a"},"field types"))),(0,i.kt)("li",{parentName:"ol"},'D\xe9finir un bouton "Annuler" qui s\u2019affichera pour effacer le contenu courant')),(0,i.kt)("p",null,"The searchable field is optional."),(0,i.kt)("h3",{id:"zone-sectionfield-"},"Zone SectionField :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<rect class="bg field" x="10" y="110" width="246" height="30\u201d/>\n\n//2\n<textArea id="section.label" class="label" x="0" y="118" width="250"/>\n\n//3\n<rect id="section" class="droppable optional" x="10" y="110" width="246" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="sectionField\u201d/>\n\n//4\n<use id="section.cancel" x="224" y="111" xlink:href="#cancel" visibility="hidden"/>\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Position, hauteur et largeur de la zone d'arri\xe8re-plan"),(0,i.kt)("li",{parentName:"ol"},"D\xe9finir la position de la zone de texte et la largeur"),(0,i.kt)("li",{parentName:"ol"},"Define the droppable field position, height and width as well as accepted ",(0,i.kt)("a",{parentName:"li",href:"#iostypes"},(0,i.kt)("strong",{parentName:"a"},"field types"))),(0,i.kt)("li",{parentName:"ol"},'D\xe9finir un bouton "Annuler" qui s\u2019affichera pour effacer le contenu courant')),(0,i.kt)("p",null,"The section field is optional."),(0,i.kt)("h3",{id:"zone-imagefield"},"Zone ImageField\xa0:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,162)">\n\n//2\n<rect class="bg field" x="14" y="0" width="60" height="65"/>\n\n//3\n<path class="picture" transform="translate(-60 0) scale(5)"/>\n\n//4\n<textArea id="f1.label" class="label" x="14" y="30" width="60">$4DEVAL(:C991("picture"))</textArea>\n\n//5\n<rect id="f1" class="droppable field" x="14" y="0" width="60" height="65" stroke-dasharray="5,2" ios:type="3" ios:bind="fields[0]"/>\n\n//6\n<use id="f1.cancel" x="47" y="-2" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Position de toute la zone Y"),(0,i.kt)("li",{parentName:"ol"},"Position, hauteur et largeur de la zone d'arri\xe8re-plan"),(0,i.kt)("li",{parentName:"ol"},"Ic\xf4ne affichant une image dans imageField"),(0,i.kt)("li",{parentName:"ol"},"D\xe9finir la position de la zone de texte et la largeur"),(0,i.kt)("li",{parentName:"ol"},"Define the droppable field position, height and width as well as accepted ",(0,i.kt)("a",{parentName:"li",href:"#iostypes"},(0,i.kt)("strong",{parentName:"a"},"field types"))),(0,i.kt)("li",{parentName:"ol"},'D\xe9finir un bouton "Annuler" qui s\u2019affichera pour effacer le contenu courant')),(0,i.kt)("h3",{id:"zone-title-field"},"Zone Title Field\xa0:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,162)\u201d>\n\n//2\n<rect class="bg field" x="84" y="0" width="168" height="30\u201d/>\n\n//3\n<textArea id="f2.label" class="label" x="84" y="8" width="168">$4DEVAL(:C991("titleField"))</textArea>\n\n//4\n<rect id="f2" class="droppable field" x="84" y="0" width="168" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="fields[1]\u201d/>\n\n//5\n<use id="f2.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Position de toute la zone Y"),(0,i.kt)("li",{parentName:"ol"},"Position, hauteur et largeur de la zone d'arri\xe8re-plan"),(0,i.kt)("li",{parentName:"ol"},"D\xe9finir la position de la zone de texte et la largeur"),(0,i.kt)("li",{parentName:"ol"},"Define the droppable field position, height and width as well as accepted ",(0,i.kt)("a",{parentName:"li",href:"#iostypes"},(0,i.kt)("strong",{parentName:"a"},"field types"))),(0,i.kt)("li",{parentName:"ol"},'D\xe9finir un bouton "Annuler" qui s\u2019affichera pour effacer le contenu courant')),(0,i.kt)("h3",{id:"zone-subtitle-field"},"Zone Subtitle Field\xa0:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,198)\u201d>\n\n//2\n<rect class="bg field" x="84" y="0" width="168" height="30\u201d/>\n\n//3\n<textArea id="f3.label" class="label" x="84" y="8" width="168">$4DEVAL(:C991("subtitleField"))</textArea>\n\n//4\n<rect id="f3" class="droppable field" x="84" y="0" width="168" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="fields[2]\u201d/>\n\n//5\n<use id="f3.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Position de toute la zone Y"),(0,i.kt)("li",{parentName:"ol"},"Position, hauteur et largeur de la zone d'arri\xe8re-plan"),(0,i.kt)("li",{parentName:"ol"},"D\xe9finir la position de la zone de texte et la largeur"),(0,i.kt)("li",{parentName:"ol"},"Define the droppable field position, height and width as well as accepted ",(0,i.kt)("a",{parentName:"li",href:"#iostypes"},(0,i.kt)("strong",{parentName:"a"},"field types"))),(0,i.kt)("li",{parentName:"ol"},'D\xe9finir un bouton "Annuler" qui s\u2019affichera pour effacer le contenu courant')),(0,i.kt)("h2",{id:"iostypes"},"ios:types"),(0,i.kt)("p",null,"The following field types are supported:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Code"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"alpha")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"real")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"picture")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"date")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"9"),(0,i.kt)("td",{parentName:"tr",align:null},"longint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"11"),(0,i.kt)("td",{parentName:"tr",align:null},"time")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"25"),(0,i.kt)("td",{parentName:"tr",align:null},"integer 64 bit")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For more information on these field types, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Concepts/data-types.html"},(0,i.kt)("strong",{parentName:"a"},"this page")),"."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To make field type definition easier, 4D for iOS allows you to include field types with ",(0,i.kt)("strong",{parentName:"p"},"positive values")," and also exclude field types with ",(0,i.kt)("strong",{parentName:"p"},"negative values"),". For example, ",(0,i.kt)("inlineCode",{parentName:"p"},'ios:type="-3,-4"')," will allow you to drag and drop every field except images and dates. To include all types, just type ",(0,i.kt)("inlineCode",{parentName:"p"},'ios:type="all"'),"."))))}c.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(f,r(r({ref:t},p),{},{components:a})):n.createElement(f,r({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},29793:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/template-svg-file-e14ce32222c51abd644acf29b8a0649e.png"}}]);