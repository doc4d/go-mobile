(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4978],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return h}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),h=n,f=m["".concat(s,".").concat(h)]||m[h]||c[h]||l;return a?i.createElement(f,r(r({ref:t},p),{},{components:a})):i.createElement(f,r({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var d=2;d<l;d++)r[d]=a[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37560:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var i=a(22122),n=a(19756),l=(a(67294),a(3905)),r=["components"],o={id:"list-form-svg-file",title:"Template.svg"},s=void 0,d={unversionedId:"tutorials/creating-list-forms/list-form-svg-file",id:"tutorials/creating-list-forms/list-form-svg-file",isDocsHomePage:!1,title:"Template.svg",description:"The template.svg file is a basic visual representation of a template. In this file, you'll need to define areas in order to be able to add fields to your list form template from the project editor.",source:"@site/docs/tutorials/creating-list-forms/list-form-svg-file.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-svg-file",permalink:"/go-mobile/ja/docs/tutorials/creating-list-forms/list-form-svg-file",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/creating-list-forms/list-form-svg-file.md",version:"current",frontMatter:{id:"list-form-svg-file",title:"Template.svg"},sidebar:"tutorials",previous:{title:"Manifest.json",permalink:"/go-mobile/ja/docs/tutorials/creating-list-forms/list-form-manifest"},next:{title:"Multi-criteria Search",permalink:"/go-mobile/ja/docs/tutorials/creating-list-forms/multi-criteria-search"}},p=[{value:"Title",id:"title",children:[]},{value:"ios:values",id:"iosvalues",children:[]},{value:"Area position, height, and width",id:"area-position-height-and-width",children:[{value:"SearchableField area:",id:"searchablefield-area",children:[]},{value:"SectionField area:",id:"sectionfield-area",children:[]},{value:"ImageField area:",id:"imagefield-area",children:[]},{value:"Title Field area:",id:"title-field-area",children:[]},{value:"Subtitle Field area:",id:"subtitle-field-area",children:[]}]},{value:"ios:types",id:"iostypes",children:[]}],c={toc:p};function m(e){var t=e.components,o=(0,n.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"template.svg")," file is a basic visual representation of a template. In this file, you'll need to define areas in order to be able to add fields to your list form template from the project editor."),(0,l.kt)("p",null,"Here's a finished version:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Template svg file",src:a(4789).Z})),(0,l.kt)("p",null,"Let\u2019s focus on the different parts of this svg file and what you'll need to edit."),(0,l.kt)("h2",{id:"title"},"Title"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<title>Custom List form</title>\n")),(0,l.kt)("p",null,"Title of the template."),(0,l.kt)("h2",{id:"iosvalues"},"ios:values"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<text id="cookery" ios:values="search,section,f1,f2,f3"/>\n')),(0,l.kt)("p",null,"Includes IDs which define your form areas:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"search"),": Refers to the search field area. This will allow you to drag and drop a field as the search criteria in your list form (optional)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"section"),": Refers to the section field area. This will allow you drag and drop a field as the sort criteria in your list form (optional)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"f1, f2 and f3"),": Refers to the fields to display in each cell of your list form. This will allow you to drag and drop fields to appear in your list form cells.")),(0,l.kt)("h2",{id:"area-position-height-and-width"},"Area position, height, and width"),(0,l.kt)("p",null,"You can define the position, height and width for:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Searchfield"),(0,l.kt)("li",{parentName:"ul"},"Sectionfield"),(0,l.kt)("li",{parentName:"ul"},"Other general fields that will be displayed in each table cell")),(0,l.kt)("h3",{id:"searchablefield-area"},"SearchableField area:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,60)\u201d>\n\n//2\n<rect class="bg field" x="14" y="12" width="238" height="30\u201d/>\n\n//3\n<path class="magnifyingGlass" transform="translate(20,8) scale(1)\u201d/>\n\n//4\n<textArea id="search.label" class="label" x="14" y="8" width="238"/>\n\n//5\n<rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35"  ios:bind="searchableField"/>\n\n//6\n<use id="search.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Entire area Y position"),(0,l.kt)("li",{parentName:"ol"},"Area background position, height, and width"),(0,l.kt)("li",{parentName:"ol"},"Icon to display a magnifying glass icon into the searchable field"),(0,l.kt)("li",{parentName:"ol"},"Define the text area position and width"),(0,l.kt)("li",{parentName:"ol"},"Define the droppable field position, height and width, as well as accepted ",(0,l.kt)("a",{parentName:"li",href:"#iostypes"},(0,l.kt)("strong",{parentName:"a"},"field types"))),(0,l.kt)("li",{parentName:"ol"},"Define a cancel button that will be displayed to delete the current content")),(0,l.kt)("p",null,"The searchable field is optional."),(0,l.kt)("h3",{id:"sectionfield-area"},"SectionField area:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<rect class="bg field" x="10" y="110" width="246" height="30\u201d/>\n\n//2\n<textArea id="section.label" class="label" x="0" y="118" width="250"/>\n\n//3\n<rect id="section" class="droppable optional" x="10" y="110" width="246" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="sectionField\u201d/>\n\n//4\n<use id="section.cancel" x="224" y="111" xlink:href="#cancel" visibility="hidden"/>\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Area background position, height and width"),(0,l.kt)("li",{parentName:"ol"},"Define the text area position and width"),(0,l.kt)("li",{parentName:"ol"},"Define the droppable field position, height and width as well as accepted ",(0,l.kt)("a",{parentName:"li",href:"#iostypes"},(0,l.kt)("strong",{parentName:"a"},"field types"))),(0,l.kt)("li",{parentName:"ol"},"Define a cancel button that will be displayed to delete the current content")),(0,l.kt)("p",null,"The section field is optional."),(0,l.kt)("h3",{id:"imagefield-area"},"ImageField area:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,162)">\n\n//2\n<rect class="bg field" x="14" y="0" width="60" height="65"/>\n\n//3\n<path class="picture" transform="translate(-60 0) scale(5)"/>\n\n//4\n<textArea id="f1.label" class="label" x="14" y="30" width="60">$4DEVAL(:C991("picture"))</textArea>\n\n//5\n<rect id="f1" class="droppable field" x="14" y="0" width="60" height="65" stroke-dasharray="5,2" ios:type="3" ios:bind="fields[0]"/>\n\n//6\n<use id="f1.cancel" x="47" y="-2" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Entire area Y position"),(0,l.kt)("li",{parentName:"ol"},"Area background position, height and width"),(0,l.kt)("li",{parentName:"ol"},"Icon to display an image in the imageField"),(0,l.kt)("li",{parentName:"ol"},"Define the text area position and width"),(0,l.kt)("li",{parentName:"ol"},"Define the droppable field position, height and width as well as accepted ",(0,l.kt)("a",{parentName:"li",href:"#iostypes"},(0,l.kt)("strong",{parentName:"a"},"field types"))),(0,l.kt)("li",{parentName:"ol"},"Define a cancel button that will be displayed to delete the current content")),(0,l.kt)("h3",{id:"title-field-area"},"Title Field area:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,162)\u201d>\n\n//2\n<rect class="bg field" x="84" y="0" width="168" height="30\u201d/>\n\n//3\n<textArea id="f2.label" class="label" x="84" y="8" width="168">$4DEVAL(:C991("titleField"))</textArea>\n\n//4\n<rect id="f2" class="droppable field" x="84" y="0" width="168" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="fields[1]\u201d/>\n\n//5\n<use id="f2.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Entire area Y position"),(0,l.kt)("li",{parentName:"ol"},"Area background position, height and width"),(0,l.kt)("li",{parentName:"ol"},"Define the text area position and width"),(0,l.kt)("li",{parentName:"ol"},"Define the droppable field position, height and width as well as accepted ",(0,l.kt)("a",{parentName:"li",href:"#iostypes"},(0,l.kt)("strong",{parentName:"a"},"field types"))),(0,l.kt)("li",{parentName:"ol"},"Define a cancel button that will be displayed to delete the current content")),(0,l.kt)("h3",{id:"subtitle-field-area"},"Subtitle Field area:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,198)\u201d>\n\n//2\n<rect class="bg field" x="84" y="0" width="168" height="30\u201d/>\n\n//3\n<textArea id="f3.label" class="label" x="84" y="8" width="168">$4DEVAL(:C991("subtitleField"))</textArea>\n\n//4\n<rect id="f3" class="droppable field" x="84" y="0" width="168" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="fields[2]\u201d/>\n\n//5\n<use id="f3.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Entire area Y position"),(0,l.kt)("li",{parentName:"ol"},"Area background position, height and width"),(0,l.kt)("li",{parentName:"ol"},"Define the text area position and width"),(0,l.kt)("li",{parentName:"ol"},"Define the droppable field position, height and width as well as accepted ",(0,l.kt)("a",{parentName:"li",href:"#iostypes"},(0,l.kt)("strong",{parentName:"a"},"field types"))),(0,l.kt)("li",{parentName:"ol"},"Define a cancel button that will be displayed to delete the current content")),(0,l.kt)("h2",{id:"iostypes"},"ios:types"),(0,l.kt)("p",null,"The following field types are supported:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"alpha")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"real")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"picture")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"longint")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"25"),(0,l.kt)("td",{parentName:"tr",align:null},"integer 64 bit")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"For more information on these field types, refer to ",(0,l.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Concepts/data-types.html"},(0,l.kt)("strong",{parentName:"a"},"this page")),". "))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"To make field type definition easier, 4D for iOS allows you to include field types with ",(0,l.kt)("strong",{parentName:"p"},"positive values")," and also exclude field types with ",(0,l.kt)("strong",{parentName:"p"},"negative values"),". For example, ",(0,l.kt)("inlineCode",{parentName:"p"},'ios:type="-3,-4"')," will allow you to drag and drop every field except images and dates.\nTo include all types, just type ",(0,l.kt)("inlineCode",{parentName:"p"},'ios:type="all"'),"."))))}m.isMDXComponent=!0},4789:function(e,t,a){"use strict";t.Z=a.p+"assets/images/template-svg-file-e14ce32222c51abd644acf29b8a0649e.png"}}]);