(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[651],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},65241:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(22122),i=a(19756),r=(a(67294),a(3905)),o=["components"],l={id:"list-form-storyboard",title:"iOS Storyboard"},s=void 0,p={unversionedId:"tutorials/creating-list-forms/list-form-storyboard",id:"tutorials/creating-list-forms/list-form-storyboard",isDocsHomePage:!1,title:"iOS Storyboard",description:"Now it's time to create your iOS list form interface with Xcode.",source:"@site/docs/tutorials/creating-list-forms/list-form-storyboard.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-storyboard",permalink:"/go-mobile/docs/tutorials/creating-list-forms/list-form-storyboard",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/creating-list-forms/list-form-storyboard.md",version:"current",frontMatter:{id:"list-form-storyboard",title:"iOS Storyboard"},sidebar:"tutorials",previous:{title:"Multi-criteria Search",permalink:"/go-mobile/docs/tutorials/creating-list-forms/multi-criteria-search"},next:{title:"Android Layout",permalink:"/go-mobile/docs/tutorials/creating-list-forms/list-form-layout"}},d=[{value:"Open the storyboard file with Xcode",id:"open-the-storyboard-file-with-xcode",children:[]},{value:"Add an Image View",id:"add-an-image-view",children:[]},{value:"Add title and subtitle labels",id:"add-title-and-subtitle-labels",children:[]},{value:"Label customization",id:"label-customization",children:[]}],c={toc:d};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now it's time to create your iOS list form interface with Xcode."),(0,r.kt)("p",null,"Here's the result we want to achieve:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Storyboard custom listform",src:a(94850).Z})),(0,r.kt)("p",null,"For each cell, we're going to add a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Profile image"),(0,r.kt)("li",{parentName:"ul"},"Title "),(0,r.kt)("li",{parentName:"ul"},"Subtitle")),(0,r.kt)("h2",{id:"open-the-storyboard-file-with-xcode"},"Open the storyboard file with Xcode"),(0,r.kt)("p",null,"First, open your storyboard file in Xcode."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Empty storyboard custom template",src:a(32096).Z})),(0,r.kt)("p",null,"It's quite empty, so let's add some content!"),(0,r.kt)("h2",{id:"add-an-image-view"},"Add an Image View"),(0,r.kt)("p",null,"From the ",(0,r.kt)("strong",{parentName:"p"},"Object library"),", drag and drop an  ",(0,r.kt)("strong",{parentName:"p"},"Image View"),' into a cell. You can search for "Image View" in the search bar at the bottom of the Object Library.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add Image View storyboard",src:a(98983).Z})),(0,r.kt)("p",null,"From the ",(0,r.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window), set the Image View Width value to 110 and the Height value to 110. Then set the X value to 8 and the Y value to 3."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image View position height and width",src:a(43849).Z})),(0,r.kt)("p",null,"Next, add a constraint (Leading: 8) by clicking on the ",(0,r.kt)("strong",{parentName:"p"},"Add New Constraints button")," (at the bottom of the Interface Builder window). Add width and height constraints too, as shown:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image View leading space width height",src:a(16794).Z})),(0,r.kt)("p",null,"Finally, click on the ",(0,r.kt)("strong",{parentName:"p"},"Align button"),' (at the bottom of the Interface Builder window) and check the "Vertically in Container" checkbox.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image View align vertically",src:a(43334).Z})),(0,r.kt)("p",null,"Your Image View is now well positioned."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image View final",src:a(96632).Z})),(0,r.kt)("p",null,"Now let's work on the cell's labels."),(0,r.kt)("h2",{id:"add-title-and-subtitle-labels"},"Add title and subtitle labels"),(0,r.kt)("p",null,"Let's begin by ",(0,r.kt)("strong",{parentName:"p"},"adding a View"),'. Search for "View" in the ',(0,r.kt)("strong",{parentName:"p"},"Object library")," and drag it into the cell container."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add View Storyboard",src:a(4999).Z})),(0,r.kt)("p",null,"From the ",(0,r.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window), set the View Width value to 277 and the Height value to 94. Then set the X value to 126 and the Y value to 10."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"View position height and width",src:a(46108).Z})),(0,r.kt)("p",null,"For the Image View, add four constraints by clicking on the ",(0,r.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 11, Leading: 8, Top: 11, and Bottom: 10.67) for the view to be well positioned, as shown:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"View contraints Storyboard",src:a(14492).Z})),(0,r.kt)("p",null,"Drag and drop a label into the View you just added from the Object Library."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add label Storyboard",src:a(70839).Z})),(0,r.kt)("p",null,"From the ",(0,r.kt)("strong",{parentName:"p"},"Size inspector panel"),", set the Label View Width value to 269 and the Height value to 32. Then set the X value to 8 and the Y value to 8."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Duplicate the label")," and in the ",(0,r.kt)("strong",{parentName:"p"},"Size inspector panel"),", set the X value to 8 and the Y value to 48."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Duplicate the label",src:a(4316).Z})),(0,r.kt)("p",null,"Select both labels add four constraints by clicking on the ",(0,r.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 0, Leading: 8, Top: 8, and Bottom: Multiple) as shown:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Labels contraints storyboard",src:a(78452).Z})),(0,r.kt)("p",null,"With a label selected, double-click on the ",(0,r.kt)("strong",{parentName:"p"},"Height constraint")," to edit it. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Label height constraint edition",src:a(7863).Z})),(0,r.kt)("p",null,"Change the relation from Equal to ",(0,r.kt)("strong",{parentName:"p"},"Greater Than or Equal")," so it can have a variable height (to handle multiline labels). "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Change relation label height constraint",src:a(19678).Z})),(0,r.kt)("p",null,"Repeat the process for the second label."),(0,r.kt)("h2",{id:"label-customization"},"Label customization"),(0,r.kt)("p",null,"From the attribute inspector (on the right side of the Interface Builder window),  you can customize your label's font colors. Let's make the second label ",(0,r.kt)("strong",{parentName:"p"},"Dark Grey Color")," :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Label color dark grey",src:a(82219).Z})),(0,r.kt)("p",null,"You can also select the dominant color for your app:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Label color background color",src:a(72787).Z})),(0,r.kt)("p",null,"From the attribute inspector, you can also customize the font. Select both labels and select Font > Custom > ",(0,r.kt)("strong",{parentName:"p"},"Helvetica Neue"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Label font custom",src:a(1371).Z})),(0,r.kt)("p",null,"To complete the customizations, select both labels and ",(0,r.kt)("strong",{parentName:"p"},"enter 0 for Lines")," in the inspector window. This allows the number of lines to be unlimited."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Label lines number",src:a(99082).Z})),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The provided storyboard is optimized to have a ",(0,r.kt)("strong",{parentName:"p"},"variable cell height")," depending on the contents of each cell."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Row height tableview cell",src:a(8609).Z})),(0,r.kt)("h2",{parentName:"div",id:"how-to-get-data-into-your-cells"},"How to get data into your cells"),(0,r.kt)("h3",{parentName:"div",id:"image-view"},"Image View"),(0,r.kt)("p",{parentName:"div"},"Select your Image View and go to ",(0,r.kt)("strong",{parentName:"p"},"Identity inspector")," > User Defined Runtime Attributes. Click the ",(0,r.kt)("strong",{parentName:"p"},"+ button")," to add a row."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"User defined runtime attributes",src:a(28465).Z})),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key Path"),": Begin with bindTo to activate binding on the component. Enter ",(0,r.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_1___"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Type"),": Always ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Value"),": The attribute name. Enter ",(0,r.kt)("inlineCode",{parentName:"p"},"___FIELD_1_BINDING_TYPE___")))),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Identity inspector storyboard",src:a(24014).Z})),(0,r.kt)("h3",{parentName:"div",id:"labels"},"Labels"),(0,r.kt)("p",{parentName:"div"},"Select the first label and add a row in the Defined Runtime Attributes:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_2___"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"String"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"___FIELD_2_BINDING_TYPE___")))),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Field 2 Binding",src:a(43168).Z})),(0,r.kt)("p",{parentName:"div"},"Select the second label and add a row in the Defined Runtime Attributes:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_3___"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"___FIELD_3_BINDING_TYPE___")))),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Field 3 Binding",src:a(66487).Z})),(0,r.kt)("p",{parentName:"div"},"You can change the ",(0,r.kt)("strong",{parentName:"p"},"storyboard display labels")," to have better visibility: "),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Double-click the first label to edit it and enter ",(0,r.kt)("inlineCode",{parentName:"li"},"___FIELD_2_LABEL___")),(0,r.kt)("li",{parentName:"ul"},"Double-click the second label to edit it and enter ",(0,r.kt)("inlineCode",{parentName:"li"},"___FIELD_3_LABEL___"))),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Storyboard label display names",src:a(47320).Z})),(0,r.kt)("p",{parentName:"div"},"Go to your project editor, select your list form template from the Forms section, then select Build and Run."),(0,r.kt)("p",{parentName:"div"},"Here is the simulator result :"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Simulator result",src:a(37055).Z})),(0,r.kt)("h2",{parentName:"div",id:"customize-your-app"},"Customize your app"),(0,r.kt)("p",{parentName:"div"},"The last step is adding a corner radius to the Image View to have a better design."),(0,r.kt)("p",{parentName:"div"},"Select your Image View and add the two following lines in the User Defined Runtime Attributes:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Number")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"12")))),(0,r.kt)("p",{parentName:"div"},"and"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Value"),": Check the box"))),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"ImageView corner Radius",src:a(35614).Z})),(0,r.kt)("p",{parentName:"div"},"You can now build your project from the project editor!"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Custom template final result",src:a(46128).Z})),(0,r.kt)("h2",{parentName:"div",id:"where-to-go-from-here"},"Where to go from here?"),(0,r.kt)("p",{parentName:"div"},"In this tutorial, we've covered the basics for creating list form templates with iOS. You are now able to create simple templates on your own using the Starter project ressources. You can also see how to build ",(0,r.kt)("a",{parentName:"p",href:"/go-mobile/docs/tutorials/creating-detail-forms/detail-form-template"},"detail form templates"),"."),(0,r.kt)("p",{parentName:"div"},"Download the completed template list folder:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-CustomListForm/archive/53ac1d5f506aa4ca2a8d78760ef799044c5c8bdc.zip"},"Download")))))}m.isMDXComponent=!0},98983:function(e,t,a){"use strict";t.Z=a.p+"assets/images/add-imageview-storyboard-6f43ae6464ab1ba4de6edcb75fe78e60.png"},70839:function(e,t,a){"use strict";t.Z=a.p+"assets/images/add-label-storyboard-66aae622f08c22c41cb9fe966c96eca1.png"},4999:function(e,t,a){"use strict";t.Z=a.p+"assets/images/add-view-storyboard-e38daf098a9dbb1b53b5b9c6ad610c74.png"},19678:function(e,t,a){"use strict";t.Z=a.p+"assets/images/change-relation-label-height-constraint-bfbe7fe2a7f870ff8f82427d5af52685.png"},46128:function(e,t,a){"use strict";t.Z=a.p+"assets/images/custom-template-final-result-6b78c23523c6821930c84477c357001b.png"},4316:function(e,t,a){"use strict";t.Z=a.p+"assets/images/duplicated-label-storyboard-4eb9e34e5f97d750fc26876550e52503.png"},32096:function(e,t,a){"use strict";t.Z=a.p+"assets/images/empty-storyboard-custom-template-b6da7e9413d17d7f4d35b22740ee9aec.png"},43168:function(e,t,a){"use strict";t.Z=a.p+"assets/images/field-2-binding-d19d51e02b2d2f6e5977d628c2431eb5.png"},66487:function(e,t,a){"use strict";t.Z=a.p+"assets/images/field-3-binding-360556030897e3c5441ea693ad21c4f7.png"},24014:function(e,t,a){"use strict";t.Z=a.p+"assets/images/identity-inspector-storyboard-1fdb7f8f32a72e8fab4f08a2aa73fb66.png"},43334:function(e,t,a){"use strict";t.Z=a.p+"assets/images/imageview-align-vertically-3d96def110f83c5ef5b3d05eb30c6397.png"},35614:function(e,t,a){"use strict";t.Z=a.p+"assets/images/imageview-corner-radius-165e3c22c4291235cfe84c3cd3043650.png"},96632:function(e,t,a){"use strict";t.Z=a.p+"assets/images/imageview-final-9725625c12fb662b39550f7dab0f736b.png"},16794:function(e,t,a){"use strict";t.Z=a.p+"assets/images/imageview-leading-space-width-height-43716fcee5c0b867a7873ff662d24383.png"},43849:function(e,t,a){"use strict";t.Z=a.p+"assets/images/imageview-position-height-width-653899c0a319d450cb970d5974e2c070.png"},72787:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label-color-background-color-35e493b07e26ebd0f2832e7552d92537.png"},82219:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label-color-dark-grey-8aefee9cb6d28208f0f100f2f08cfbcd.png"},1371:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label-font-custom-d12892ff084ba6570768abe27f4e89d3.png"},7863:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label-height-constraint-edition-926a3c50187918b1aa782429b1432676.png"},99082:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label-lines-number-6e7ead6283c26ed8e7dbd6953e52298e.png"},78452:function(e,t,a){"use strict";t.Z=a.p+"assets/images/labels-contraints-storyboard-b6d2088d667fe48dace468f59a617201.png"},8609:function(e,t,a){"use strict";t.Z=a.p+"assets/images/row-height-tableview-cell-89afa0d3b042d869bcf64e58d2ef3505.png"},37055:function(e,t,a){"use strict";t.Z=a.p+"assets/images/simulator-result-17536424cd18ddce1bc776af9eadf310.png"},94850:function(e,t,a){"use strict";t.Z=a.p+"assets/images/storyboard-custom-listform-5655a4832218f2bb05bbfaedb2eb27e9.png"},47320:function(e,t,a){"use strict";t.Z=a.p+"assets/images/storyboard-label-display-name-d0d6e94fff21281e82d9ffa2bf1b7949.png"},28465:function(e,t,a){"use strict";t.Z=a.p+"assets/images/user-defined-runtime-attributes-2112790bd75c05049e407121e6ec58fe.png"},14492:function(e,t,a){"use strict";t.Z=a.p+"assets/images/view-constraints-storyboard-63891e58b17a99461c7d70cb33e7d1aa.png"},46108:function(e,t,a){"use strict";t.Z=a.p+"assets/images/view-position-height-width-6571958e108c0b33997db9dbbeae6120.png"}}]);