"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[651],{56477:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const l={id:"list-form-storyboard",title:"iOS Storyboard"},o=void 0,r={unversionedId:"tutorials/creating-list-forms/list-form-storyboard",id:"tutorials/creating-list-forms/list-form-storyboard",title:"iOS Storyboard",description:"Now it's time to create your iOS list form interface with Xcode.",source:"@site/docs/tutorials/creating-list-forms/list-form-storyboard.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-storyboard",permalink:"/go-mobile/docs/next/tutorials/creating-list-forms/list-form-storyboard",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/creating-list-forms/list-form-storyboard.md",tags:[],version:"current",frontMatter:{id:"list-form-storyboard",title:"iOS Storyboard"},sidebar:"tutorials",previous:{title:"Multi-criteria Search",permalink:"/go-mobile/docs/next/tutorials/creating-list-forms/multi-criteria-search"},next:{title:"Android Layout",permalink:"/go-mobile/docs/next/tutorials/creating-list-forms/list-form-layout"}},s={},d=[{value:"Open the storyboard file with Xcode",id:"open-the-storyboard-file-with-xcode",level:2},{value:"Add an Image View",id:"add-an-image-view",level:2},{value:"Add title and subtitle labels",id:"add-title-and-subtitle-labels",level:2},{value:"Label customization",id:"label-customization",level:2},{value:"How to get data into your cells",id:"how-to-get-data-into-your-cells",level:2},{value:"Image View",id:"image-view",level:3},{value:"Labels",id:"labels",level:3},{value:"Customize your app",id:"customize-your-app",level:2},{value:"Where to go from here?",id:"where-to-go-from-here",level:2}],p={toc:d};function c(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now it's time to create your iOS list form interface with Xcode."),(0,i.kt)("p",null,"Here's the result we want to achieve:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Storyboard custom listform",src:a(63682).Z,width:"1359",height:"754"})),(0,i.kt)("p",null,"For each cell, we're going to add a:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Profile image"),(0,i.kt)("li",{parentName:"ul"},"Title "),(0,i.kt)("li",{parentName:"ul"},"Subtitle")),(0,i.kt)("h2",{id:"open-the-storyboard-file-with-xcode"},"Open the storyboard file with Xcode"),(0,i.kt)("p",null,"First, open your storyboard file in Xcode."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Empty storyboard custom template",src:a(83077).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"It's quite empty, so let's add some content!"),(0,i.kt)("h2",{id:"add-an-image-view"},"Add an Image View"),(0,i.kt)("p",null,"From the ",(0,i.kt)("strong",{parentName:"p"},"Object library"),", drag and drop an  ",(0,i.kt)("strong",{parentName:"p"},"Image View"),' into a cell. You can search for "Image View" in the search bar at the bottom of the Object Library.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Image View storyboard",src:a(15810).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"From the ",(0,i.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window), set the Image View Width value to 110 and the Height value to 110. Then set the X value to 8 and the Y value to 3."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image View position height and width",src:a(33893).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Next, add a constraint (Leading: 8) by clicking on the ",(0,i.kt)("strong",{parentName:"p"},"Add New Constraints button")," (at the bottom of the Interface Builder window). Add width and height constraints too, as shown:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image View leading space width height",src:a(89394).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Finally, click on the ",(0,i.kt)("strong",{parentName:"p"},"Align button"),' (at the bottom of the Interface Builder window) and check the "Vertically in Container" checkbox.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image View align vertically",src:a(58350).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Your Image View is now well positioned."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image View final",src:a(19826).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Now let's work on the cell's labels."),(0,i.kt)("h2",{id:"add-title-and-subtitle-labels"},"Add title and subtitle labels"),(0,i.kt)("p",null,"Let's begin by ",(0,i.kt)("strong",{parentName:"p"},"adding a View"),'. Search for "View" in the ',(0,i.kt)("strong",{parentName:"p"},"Object library")," and drag it into the cell container."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add View Storyboard",src:a(39352).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"From the ",(0,i.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window), set the View Width value to 277 and the Height value to 94. Then set the X value to 126 and the Y value to 10."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"View position height and width",src:a(23266).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"For the Image View, add four constraints by clicking on the ",(0,i.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 11, Leading: 8, Top: 11, and Bottom: 10.67) for the view to be well positioned, as shown:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"View contraints Storyboard",src:a(29437).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Drag and drop a label into the View you just added from the Object Library."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add label Storyboard",src:a(69697).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"From the ",(0,i.kt)("strong",{parentName:"p"},"Size inspector panel"),", set the Label View Width value to 269 and the Height value to 32. Then set the X value to 8 and the Y value to 8."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Duplicate the label")," and in the ",(0,i.kt)("strong",{parentName:"p"},"Size inspector panel"),", set the X value to 8 and the Y value to 48."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Duplicate the label",src:a(59620).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Select both labels add four constraints by clicking on the ",(0,i.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 0, Leading: 8, Top: 8, and Bottom: Multiple) as shown:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Labels contraints storyboard",src:a(9695).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"With a label selected, double-click on the ",(0,i.kt)("strong",{parentName:"p"},"Height constraint")," to edit it. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Label height constraint edition",src:a(24533).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Change the relation from Equal to ",(0,i.kt)("strong",{parentName:"p"},"Greater Than or Equal")," so it can have a variable height (to handle multiline labels). "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Change relation label height constraint",src:a(17674).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Repeat the process for the second label."),(0,i.kt)("h2",{id:"label-customization"},"Label customization"),(0,i.kt)("p",null,"From the attribute inspector (on the right side of the Interface Builder window),  you can customize your label's font colors. Let's make the second label ",(0,i.kt)("strong",{parentName:"p"},"Dark Grey Color")," :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Label color dark grey",src:a(22565).Z,width:"1296",height:"1006"})),(0,i.kt)("p",null,"You can also select the dominant color for your app:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Label color background color",src:a(89859).Z,width:"1296",height:"1006"})),(0,i.kt)("p",null,"From the attribute inspector, you can also customize the font. Select both labels and select Font > Custom > ",(0,i.kt)("strong",{parentName:"p"},"Helvetica Neue"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Label font custom",src:a(70032).Z,width:"1296",height:"1006"})),(0,i.kt)("p",null,"To complete the customizations, select both labels and ",(0,i.kt)("strong",{parentName:"p"},"enter 0 for Lines")," in the inspector window. This allows the number of lines to be unlimited."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Label lines number",src:a(86701).Z,width:"1169",height:"990"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The provided storyboard is optimized to have a ",(0,i.kt)("strong",{parentName:"p"},"variable cell height")," depending on the contents of each cell.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Row height tableview cell",src:a(64395).Z,width:"1169",height:"990"})),(0,i.kt)("h2",{id:"how-to-get-data-into-your-cells"},"How to get data into your cells"),(0,i.kt)("h3",{id:"image-view"},"Image View"),(0,i.kt)("p",null,"Select your Image View and go to ",(0,i.kt)("strong",{parentName:"p"},"Identity inspector")," > User Defined Runtime Attributes. Click the ",(0,i.kt)("strong",{parentName:"p"},"+ button")," to add a row."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"User defined runtime attributes",src:a(44781).Z,width:"1256",height:"1006"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": Begin with bindTo to activate binding on the component. Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_1___"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": Always ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": The attribute name. Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"___FIELD_1_BINDING_TYPE___")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Identity inspector storyboard",src:a(5057).Z,width:"1169",height:"990"})),(0,i.kt)("h3",{id:"labels"},"Labels"),(0,i.kt)("p",null,"Select the first label and add a row in the Defined Runtime Attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_2___"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"String"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"___FIELD_2_BINDING_TYPE___")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Field 2 Binding",src:a(34600).Z,width:"1164",height:"920"})),(0,i.kt)("p",null,"Select the second label and add a row in the Defined Runtime Attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_3___"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"___FIELD_3_BINDING_TYPE___")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Field 3 Binding",src:a(73253).Z,width:"1164",height:"920"})),(0,i.kt)("p",null,"You can change the ",(0,i.kt)("strong",{parentName:"p"},"storyboard display labels")," to have better visibility: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Double-click the first label to edit it and enter ",(0,i.kt)("inlineCode",{parentName:"li"},"___FIELD_2_LABEL___")),(0,i.kt)("li",{parentName:"ul"},"Double-click the second label to edit it and enter ",(0,i.kt)("inlineCode",{parentName:"li"},"___FIELD_3_LABEL___"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Storyboard label display names",src:a(79737).Z,width:"1171",height:"984"})),(0,i.kt)("p",null,"Go to your project editor, select your list form template from the Forms section, then select Build and Run."),(0,i.kt)("p",null,"Here is the simulator result :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Simulator result",src:a(5842).Z,width:"1417",height:"992"})),(0,i.kt)("h2",{id:"customize-your-app"},"Customize your app"),(0,i.kt)("p",null,"The last step is adding a corner radius to the Image View to have a better design."),(0,i.kt)("p",null,"Select your Image View and add the two following lines in the User Defined Runtime Attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Number")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"12")))),(0,i.kt)("p",null,"and"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Boolean")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": Check the box"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ImageView corner Radius",src:a(19155).Z,width:"1164",height:"920"})),(0,i.kt)("p",null,"You can now build your project from the project editor!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Custom template final result",src:a(48221).Z,width:"1417",height:"992"})),(0,i.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,i.kt)("p",null,"In this tutorial, we've covered the basics for creating list form templates with iOS. You are now able to create simple templates on your own using the Starter project ressources. You can also see how to build ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/docs/next/tutorials/creating-detail-forms/detail-form-template"},"detail form templates"),"."),(0,i.kt)("p",null,"Download the completed template list folder:"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomListForm/archive/53ac1d5f506aa4ca2a8d78760ef799044c5c8bdc.zip"},"Download")))}c.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(a),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15810:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-imageview-storyboard-6f43ae6464ab1ba4de6edcb75fe78e60.png"},69697:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-label-storyboard-66aae622f08c22c41cb9fe966c96eca1.png"},39352:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-view-storyboard-e38daf098a9dbb1b53b5b9c6ad610c74.png"},17674:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/change-relation-label-height-constraint-bfbe7fe2a7f870ff8f82427d5af52685.png"},48221:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom-template-final-result-6b78c23523c6821930c84477c357001b.png"},59620:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/duplicated-label-storyboard-4eb9e34e5f97d750fc26876550e52503.png"},83077:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/empty-storyboard-custom-template-b6da7e9413d17d7f4d35b22740ee9aec.png"},34600:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/field-2-binding-d19d51e02b2d2f6e5977d628c2431eb5.png"},73253:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/field-3-binding-360556030897e3c5441ea693ad21c4f7.png"},5057:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/identity-inspector-storyboard-1fdb7f8f32a72e8fab4f08a2aa73fb66.png"},58350:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/imageview-align-vertically-3d96def110f83c5ef5b3d05eb30c6397.png"},19155:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/imageview-corner-radius-165e3c22c4291235cfe84c3cd3043650.png"},19826:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/imageview-final-9725625c12fb662b39550f7dab0f736b.png"},89394:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/imageview-leading-space-width-height-43716fcee5c0b867a7873ff662d24383.png"},33893:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/imageview-position-height-width-653899c0a319d450cb970d5974e2c070.png"},89859:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/label-color-background-color-35e493b07e26ebd0f2832e7552d92537.png"},22565:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/label-color-dark-grey-8aefee9cb6d28208f0f100f2f08cfbcd.png"},70032:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/label-font-custom-d12892ff084ba6570768abe27f4e89d3.png"},24533:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/label-height-constraint-edition-926a3c50187918b1aa782429b1432676.png"},86701:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/label-lines-number-6e7ead6283c26ed8e7dbd6953e52298e.png"},9695:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/labels-contraints-storyboard-b6d2088d667fe48dace468f59a617201.png"},64395:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/row-height-tableview-cell-89afa0d3b042d869bcf64e58d2ef3505.png"},5842:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/simulator-result-17536424cd18ddce1bc776af9eadf310.png"},63682:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/storyboard-custom-listform-5655a4832218f2bb05bbfaedb2eb27e9.png"},79737:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/storyboard-label-display-name-d0d6e94fff21281e82d9ffa2bf1b7949.png"},44781:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/user-defined-runtime-attributes-2112790bd75c05049e407121e6ec58fe.png"},29437:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/view-constraints-storyboard-63891e58b17a99461c7d70cb33e7d1aa.png"},23266:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/view-position-height-width-6571958e108c0b33997db9dbbeae6120.png"}}]);