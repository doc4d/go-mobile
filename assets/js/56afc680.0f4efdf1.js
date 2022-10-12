"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9417],{72512:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));const r={id:"forms",title:"Forms"},o=void 0,l={unversionedId:"project-definition/forms",id:"project-definition/forms",title:"Forms",description:"The Forms page allows you to select both list and detail forms for each published table. You can select one list form and one detail form per published table.",source:"@site/docs/project-definition/forms.md",sourceDirName:"project-definition",slug:"/project-definition/forms",permalink:"/go-mobile/docs/next/project-definition/forms",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/project-definition/forms.md",tags:[],version:"current",frontMatter:{id:"forms",title:"Forms"},sidebar:"docs",previous:{title:"Main Menu",permalink:"/go-mobile/docs/next/project-definition/main-menu"},next:{title:"Publishing",permalink:"/go-mobile/docs/next/project-definition/publishing"}},s={},d=[{value:"List forms",id:"list-forms",level:2},{value:"Search",id:"search",level:3},{value:"Multi-criteria search",id:"multi-criteria-search",level:4},{value:"Section",id:"section",level:3},{value:"Barcode Scanner",id:"barcode-scanner",level:3},{value:"Detail forms",id:"detail-forms",level:2},{value:"Gallery",id:"gallery",level:2},{value:"Creating your own templates",id:"creating-your-own-templates",level:2}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Forms page allows you to select both list and detail forms for each published table. You can select one list form and one detail form per published table.  "),(0,n.kt)("p",null,"The 4D mobile editor provides various templates with custom transition effects to build fresh and modern mobile applications. Simple, empty templates are used by default for an app's list and detail forms. "),(0,n.kt)("p",null,"Here's the breakdown of this screen, from top to bottom:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"List Forms / Detail Forms:")," Allows switching between list and detail form definitions for each table."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Published tables:")," Displays all tables published in the ",(0,n.kt)("a",{parentName:"li",href:"/go-mobile/docs/next/project-definition/structure"},"Structure")," section. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Forms:")," List of available forms. Allows switching between template selection and content definition. In the content definition area, you can display tips that provide additional information on form fields. ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"List form template selection",src:a(30227).Z,width:"768",height:"568"})),(0,n.kt)("h2",{id:"list-forms"},"List forms"),(0,n.kt)("p",null,"When you select a list form template for a table, the content definition screen appears. You can then drag and drop the fields from the Fields list directly onto the model displayed on the right."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"List form content definition",src:a(20168).Z,width:"768",height:"526"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"In list forms, you cannot add more fields than those included in the template.")),(0,n.kt)("p",null,"Most of the list forms include optional ",(0,n.kt)("strong",{parentName:"p"},"Search")," and ",(0,n.kt)("strong",{parentName:"p"},"Section")," fields. You can also enable the ",(0,n.kt)("strong",{parentName:"p"},"barcode scanner"),". "),(0,n.kt)("h3",{id:"search"},"Search"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"search")," field allows to filters dynamically the list contents depending on entered characters. "),(0,n.kt)("h4",{id:"multi-criteria-search"},"Multi-criteria search"),(0,n.kt)("p",null,'You can drop more than one field to the search field, in which case the field displays "Multi-criteria Search":'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"multi-criteria",src:a(30951).Z,width:"244",height:"39"})),(0,n.kt)("p",null,'In this case, the app will search for entered characters in all the fields using the "OR" operator. To remove a field from the list, click on the search field\'s delete button to select the field(s) to remove:'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"multi-criteria remove",src:a(63827).Z,width:"567",height:"497"})),(0,n.kt)("h3",{id:"section"},"Section"),(0,n.kt)("p",null,"A section field will group and order entities in the list depending on their value for this field."),(0,n.kt)("h3",{id:"barcode-scanner"},"Barcode Scanner"),(0,n.kt)("p",null,"To activate the Barcode search, click on the magnifying glass next to the search field and select ",(0,n.kt)("strong",{parentName:"p"},"Enable barcode scanner")," option."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Barcode Search activation",src:a(27779).Z,width:"600",height:"541"})),(0,n.kt)("p",null,"The Barcode search allows two features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Filtering the list form by scanning a barcode that contains a text value. It fills the Search Bar and opens the detail form if there is only one value left after filtering."),(0,n.kt)("li",{parentName:"ul"},"Displaying specific list and detail forms just by scanning a barcode whose values are ",(0,n.kt)("strong",{parentName:"li"},"URL Schemes")," or ",(0,n.kt)("strong",{parentName:"li"},"Universal Links")," when the ",(0,n.kt)("a",{parentName:"li",href:"/go-mobile/docs/next/special-features/deep-linking"},(0,n.kt)("strong",{parentName:"a"},"deep linking"))," feature is enabled.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Barcode Search app",src:a(74171).Z,width:"1000",height:"833"})),(0,n.kt)("admonition",{title:"4D for Android",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This feature is currently not available in 4D for Android.")),(0,n.kt)("h2",{id:"detail-forms"},"Detail forms"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Detail form template selection",src:a(87107).Z,width:"1333",height:"994"})),(0,n.kt)("p",null,"As with the List Form definition, select a template and configure the fields. In detail forms, you can add as many fields as you want onto your detail form. "),(0,n.kt)("p",null,"You have several ways to add your fields in Detail forms:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Drag and drop a field anywhere into the rightmost view to add it and display it just after the last field added or between any other fields that are already displayed.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Double-click on a field. Your field will be added at the end of the list.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Right-click on an available field in the Fields table at the left and select ",(0,n.kt)("strong",{parentName:"p"},"Add missing fields")," from the contextual menu."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Detail form content definition",src:a(63900).Z,width:"1433",height:"994"})),(0,n.kt)("p",null,"You can reorder your fields at any moment using drag and drop in the detail form."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you want to try another template after dispatching your fields, just select it: previously selected fields are automatically moved for you to the new template in appropriate areas, according to the template and field types.")),(0,n.kt)("h2",{id:"gallery"},"Gallery"),(0,n.kt)("p",null,'When you select a template in the form section, a "More" icon is available for both list and detail forms.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"More template button",src:a(46586).Z,width:"124",height:"131"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"More template button",src:a(63217).Z,width:"2164",height:"1988"})),(0,n.kt)("p",null,"Just click on that icon to display a list of additional templates from the 4D mobile Gallery: "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Template picker more button",src:a(60427).Z,width:"2164",height:"1988"})),(0,n.kt)("p",null,"Then, the only thing you have to do is selecting the template that suits your needs and the mobile editor will handle all the installation process. So you can directly start working on the template, as it is ready-to-use."),(0,n.kt)("p",null,"A github icon is displayed at the top left of a template icon in the Forms template picker to indicate that it comes from Github:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add template from gallery",src:a(88135).Z,width:"2164",height:"1988"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The Gallery is also directly available on Github."),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://4d-for-ios.github.io/gallery/#/type/list-detail/picker/0"},(0,n.kt)("strong",{parentName:"a"},"gallery of list form templates"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://4d-for-ios.github.io/gallery/#/type/form-detail/picker/0"},(0,n.kt)("strong",{parentName:"a"},"gallery of detail form templates"))))),(0,n.kt)("h2",{id:"creating-your-own-templates"},"Creating your own templates"),(0,n.kt)("p",null,"If you want to customize a downloaded template or create your own templates, ",(0,n.kt)("strong",{parentName:"p"},"several tutorials")," can guide you through these tasks:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/go-mobile/docs/next/tutorials/gallery/update-gallery-template"},(0,n.kt)("strong",{parentName:"a"},"Customizing a template form"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/go-mobile/docs/next/tutorials/creating-list-forms/list-form-template"},(0,n.kt)("strong",{parentName:"a"},"Creating list forms"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/go-mobile/docs/next/tutorials/creating-detail-forms/detail-form-template"},(0,n.kt)("strong",{parentName:"a"},"Creating details forms")))))}p.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(a),f=n,u=m["".concat(s,".").concat(f)]||m[f]||p[f]||r;return a?i.createElement(u,o(o({ref:t},c),{},{components:a})):i.createElement(u,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},63217:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Forms-more-button-2c79b8df6a570d05a312700dc012f22b.png"},20168:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Forms-section-content-definition-4D-for-iOS-89c75970628c5ff5b54242928cfc6b3d.png"},63900:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Forms-section-detail-form-content-definition-4D-for-iOS-d65b41e54854295172d4a11965f7852d.png"},87107:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Forms-section-detail-form-templates-selection-4D-for-iOS-723ca6e678f3e3a4878250dd52a157aa.png"},30227:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Forms-section-templates-selection-4D-for-iOS-7367fd8d7bd642a194deac8eee2aa20b.png"},60427:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Forms-template-gallery-efcab3e0fc2210f1e5ad9ce05c3a8ed5.png"},88135:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/indicator-template-github-dfec846ee86f5837be2769c124773e9b.png"},46586:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,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"},63827:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/multi-criteria-search-forms-section-remove-fields-2f26827d96d7fff88d89c5e5b94d4817.png"},30951:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,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"},27779:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/project-editor-Qrcode-barcode-search-4D-for-iOS-fc6a8819a12e467bb3e84596b6be2f8c.gif"},74171:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/text-Qrcode-barcode-search-4D-for-iOS-fea31da22bf6b9bddc9081ba237bcc1c.gif"}}]);