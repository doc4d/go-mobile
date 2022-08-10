"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7119],{28341:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const i={id:"labels-and-icons",title:"Labels & Icons"},r=void 0,l={unversionedId:"project-definition/labels-and-icons",id:"version-19-R5/project-definition/labels-and-icons",title:"Labels & Icons",description:"This page allows you to define display properties for your tables, fields and relations in the mobile app.",source:"@site/versioned_docs/version-19-R5/project-definition/labels-and-icons.md",sourceDirName:"project-definition",slug:"/project-definition/labels-and-icons",permalink:"/docs/19-R5/project-definition/labels-and-icons",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/project-definition/labels-and-icons.md",tags:[],version:"19-R5",frontMatter:{id:"labels-and-icons",title:"Labels & Icons"},sidebar:"docs",previous:{title:"Actions",permalink:"/docs/19-R5/project-definition/actions"},next:{title:"Main Menu",permalink:"/docs/19-R5/project-definition/main-menu"}},s={},d=[{value:"Icons",id:"icons",level:2},{value:"Adding custom icons",id:"adding-custom-icons",level:3},{value:"Short and long labels",id:"short-and-long-labels",level:2},{value:"Formats",id:"formats",level:2},{value:"Data formatters",id:"data-formatters",level:2},{value:"Title",id:"title",level:2}],m={toc:d};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page allows you to define display properties for your tables, fields and relations in the mobile app. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Labels &amp; Icons section",src:a(44589).Z,width:"2835",height:"1988"})),(0,o.kt)("p",null,"Default properties are set. To modify a property, select an element and enter the new value in the appropriate column. "),(0,o.kt)("p",null,"You can define the same properties for tables, fields and relations. Additionally, formats can be defined for fields/relations."),(0,o.kt)("p",null,"These elements will be displayed in detail and list forms, depending on the template in the generated app."),(0,o.kt)("h2",{id:"icons"},"Icons"),(0,o.kt)("p",null,"Icon to associate to the table or field/element in the mobile app each time a template requires an icon."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For relation fields, icons will be displayed at the left of the ",(0,o.kt)("strong",{parentName:"p"},"Relation")," button that allows to open a related table."))),(0,o.kt)("p",null,"The 4D mobile editor provides a large library of icons to meet your needs. These include icons for business, finance, education, government, health, industry, real estate, services, etc. To select an icon, click on the ",(0,o.kt)("strong",{parentName:"p"},"icon")," button and choose an icon from the list: "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Icons select",src:a(53751).Z,width:"1082",height:"994"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To keep everything consistent, ",(0,o.kt)("strong",{parentName:"p"},"default icons")," are generated for blank fields if at least one icon has been defined for a field. "))),(0,o.kt)("p",null,"You can also leave the icon area empty if you don\u2019t want to display icons in your application."),(0,o.kt)("h3",{id:"adding-custom-icons"},"Adding custom icons"),(0,o.kt)("p",null,"You can add your own icons to the library, so that you can select them in your project. You can use any icon format (SVG or PNG is recommended to preserve transparency) and size. It's highly recommended having colored versions of your custom icons to better visualize them in the project editor. "),(0,o.kt)("p",null,"For example, here are a set of custom icons that you can use:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomIcons/releases/latest/download/tutorial-CustomIcons.zip"},"Download custom icons")),(0,o.kt)("p",null,"To include custom icons in your project:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an ",(0,o.kt)("inlineCode",{parentName:"li"},"icons")," folder at the following location:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<my4DProjetFolder>/Resources/Mobile/medias\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You may have to create the ",(0,o.kt)("inlineCode",{parentName:"p"},"medias")," folder."))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Drag and drop your customized icons in the ",(0,o.kt)("inlineCode",{parentName:"li"},"icons")," folder.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Icons select2",src:a(68142).Z,width:"997",height:"367"})),(0,o.kt)("p",null,"Your icons can now be selected for your project, they are listed after the standard icons. "),(0,o.kt)("h2",{id:"short-and-long-labels"},"Short and long labels"),(0,o.kt)("p",null,"You can define custom labels for published tables, fields, and relations. These labels will be automatically used according to the available space in the template to optimize space and avoid overcrowding the tab bar."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For relation fields, labels will be displayed in the ",(0,o.kt)("strong",{parentName:"p"},"Relation")," button that allows to open a related table."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Short labels should have 10 characters or less"),(0,o.kt)("li",{parentName:"ul"},"Long labels can have up to 25 characters"),(0,o.kt)("li",{parentName:"ul"},'You can use characters that are not allowed in structure names, such as "/","@", the space character, etc.')),(0,o.kt)("p",null,"By default, the mobile editor uses the table and field names as defined in the structure as labels in the app, and the same string is used for short and long labels."),(0,o.kt)("h2",{id:"formats"},"Formats"),(0,o.kt)("p",null,"This property allows you to format the data to display in the app. When you click on a field row, a format menu is displayed. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"formats",src:a(7228).Z,width:"200",height:"326"})),(0,o.kt)("p",null,"Available built-in formats depend on the field type:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field type"),(0,o.kt)("th",{parentName:"tr",align:null},"Formats"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Text")),(0,o.kt)("td",{parentName:"tr",align:null},"Text")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Date")),(0,o.kt)("td",{parentName:"tr",align:null},"Date, Short date, Long date, Full date")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Time")),(0,o.kt)("td",{parentName:"tr",align:null},"Time, Short time, Duration, Integer number")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Image")),(0,o.kt)("td",{parentName:"tr",align:null},"Image")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Boolean")),(0,o.kt)("td",{parentName:"tr",align:null},'"No" or "Yes", "False" or "True"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Integer number")),(0,o.kt)("td",{parentName:"tr",align:null},"Integer number, Decimal number, Real number, Percentage, Ordinal number, Currency $, Currency \u20ac, Currency \xa5, Spell Out")))),(0,o.kt)("h2",{id:"data-formatters"},"Data formatters"),(0,o.kt)("p",null,"A data formatter allows you to map a data type from your database to a specific display on the mobile side. For example, you can define emails format, invoice numbers, etc.\nData formatters can also call some code to create smart interfaces. For example, you can attach a data formatter to phone numbers that opens an action menu on the mobile app when the user touches the number (e.g. to call the person or save them in contacts)."),(0,o.kt)("p",null,"To add data formatters to your mobile project, you can either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download and install formatters from the ",(0,o.kt)("a",{parentName:"li",href:"https://4d-go-mobile.github.io/gallery//#/type/formatter"},(0,o.kt)("strong",{parentName:"a"},"go-mobile formatters github repository")),".")),(0,o.kt)("p",null,"To install a data formatter, you just need to drop the formatter folder into the ",(0,o.kt)("inlineCode",{parentName:"p"},"/Resources/Mobile/formatters")," of the 4D project folder. Once installed, a data format can be selected from the Formats menu, just like a built-in formats."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create your own data formatters")),(0,o.kt)("p",null,"Note that there are 2 types of formatters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dynamic data formatters")," with code (identified with the OS logos (",(0,o.kt)("img",{alt:"OS logo",src:a(39299).Z,width:"39",height:"18"}),") in the above-mentioned formatters Github repository)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Static data formatters")," without code.")),(0,o.kt)("p",null,"Your formatter must always be associated with a ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," file containing the following elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name"),": a string containing the name of the formatter. Ex: phone, objectFormatter, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type"),": the 4D format type you want to use. Ex: Text, Integer, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"binding"),": ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For static formatters:",(0,o.kt)("inlineCode",{parentName:"li"},"localizedText")," for strings or ",(0,o.kt)("inlineCode",{parentName:"li"},"imageNamed")," for images. "),(0,o.kt)("li",{parentName:"ul"},"For dynamic formatters: a string that links the code to your app"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"choiceList"),": mapped values depending on the selected type (for static formatters only)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"assets"),": additional formating data for static formatters only, such as dark mode support, tintable, Integer to Image and Text to Image."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"target"),": the platform supported by your formatter (for dynamic formatters only).")),(0,o.kt)("p",null,"Example of a static formatter's manifest file: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},\n\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"for Android")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can add a specific permission to your app, using a ",(0,o.kt)("inlineCode",{parentName:"p"},"capabilities")," block as follows:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'"capabilities" : {\n       "android" : [ "android.permission.WRITE_EXTERNAL_STORAGE" ]\n')))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tutorial")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Visit:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tutorials/data-formatter/create-data-formatter"},(0,o.kt)("strong",{parentName:"a"},"this tutorial"))," to know how to define a static data formatter."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tutorials/data-formatter/create-swift-formatter"},(0,o.kt)("strong",{parentName:"a"},"this tutorial"))," to define a Swift dynamic formatter."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tutorials/data-formatter/create-kotlin-formatter"},(0,o.kt)("strong",{parentName:"a"},"this tutorial"))," to define a Kotlin dynamic formatter.")))),(0,o.kt)("h2",{id:"title"},"Title"),(0,o.kt)("p",null,"This property is only available for Relation fields. The defined title will be displayed on top of the destination view when using a relation. "),(0,o.kt)("p",null,"Use a pair of ",(0,o.kt)("inlineCode",{parentName:"p"},"%")," characters to include the value of the related field in the title. For example, if you want that the title of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Employee.employer")," related field displays the name of the related ",(0,o.kt)("inlineCode",{parentName:"p"},"employee")," field, you can write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"%Name%'s employer\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tutorial")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A ",(0,o.kt)("a",{parentName:"p",href:"../tutorials/relations/one-to-many-title-definition"},(0,o.kt)("strong",{parentName:"a"},"tutorial"))," is available to guide you through the Title definition process."))))}p.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(a),h=o,u=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return a?n.createElement(u,r(r({ref:t},m),{},{components:a})):n.createElement(u,r({ref:t},m))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},44589:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Labels-&-icons-section-4D-for-iOS-e2a7d5f78925808a9618b76a7c71e129.png"},7228:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},53751:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/icon-library-bc268db5fac5bb35d9a614cb110fca01.png"},68142:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mobile-folder-custom-icons-a975a9d1b38d6e46db0f3aae91994349.png"},39299:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAASCAYAAADYFMcrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAJqSURBVEhLY/z249d/hkEKmKA0TrBxyw6Gzr4pUB5x4OfPn1AW8eAHFj14HTdv0XKGDUDH6WhpQEWIAzt272d48uw5lEcYgNTuBOpBBzgdd+PWHYbDx04yyMvJMLi7OEBFiQP+Ph4M7T2ToDzCAKQWpAcd4Exz+w4eYbh15x5DbEQIAzc3F1SUeLB15x4GcVFRBhMjfYY3b9+BPXsTiEFAXU2FQQOIRYSFGM6cu8jw8vVrBm93F7AcMoA7bvX6zQwnTp1lYGVlZdDX1WIQFRFhuHn7DsOTp88ZXrx8xSAhLsZgYWqE1YfYwINHjxmmzVrA8OHjJ4bfv39DRVEByC4Bfj6GrLQEBgU5WagoAoAdV1heBzaEGBAAdBwhB4JCidRMVF6UAw5NZMAEyo3UdNidu/dJdhgIgPSA9CIDpncfPkKZhIGTvQ2UhR2cvXCJobV7IpRHOgDpBZkBA0yvXr2GMvEDUJDz8vJAedgBqAiBARtLM4b5Mybg1QOSA6kBqYUBZDOY+Ph4oUz8gFC5BfIxcrSAMhIoyXz+/AUqgglAciA1ILUwADIDFnpMfARCAwa+fPnKcODwMSgPE1y4eAXKggBQbgUV4IQASA1ILTKAmcXEw80NZhADFi5dxbBo+WqGt+/eQ0UQAJRDqQVgZjG+fvvhf3NnP8NLItOeu4sjQ0SIP5SHAKDooSYAlQrgcm7P/kMMS1eugwrjBuJiogy1FYUM3Fyk1xjkAHDd6uJox6CtqQ4WwAf8vN3p5jAQgFdfoPpv87ZdDJ8+fwZXJfJA/OXrV4anwJwESrCgooTYqotaAGfFP/CAgQEAcAQISXyoclAAAAAASUVORK5CYII="}}]);