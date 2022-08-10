"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1118],{80620:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=i(87462),a=(i(67294),i(3905));const o={id:"customize-your-ios-app",title:"Customize your 4D for iOS App"},l=void 0,r={unversionedId:"tutorials/customizing-with-xcode/customize-your-ios-app",id:"version-19-R6/tutorials/customizing-with-xcode/customize-your-ios-app",title:"Customize your 4D for iOS App",description:"Now, let's do some storyboard modification ... from simple to complex.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R6/tutorials/customizing-with-xcode/customize-your-ios-app.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/customize-your-ios-app",permalink:"/ja/docs/tutorials/customizing-with-xcode/customize-your-ios-app",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/customizing-with-xcode/customize-your-ios-app.md",tags:[],version:"19-R6",frontMatter:{id:"customize-your-ios-app",title:"Customize your 4D for iOS App"},sidebar:"tutorials",previous:{title:"4D for iOS \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u6210",permalink:"/ja/docs/tutorials/customizing-with-xcode/4d-for-ios-project-organization"},next:{title:"Selecting your Apple Developer Program",permalink:"/ja/docs/tutorials/developer-program/selecting-your-developer-program"}},s={},c=[{value:"\u2488 \u2488 \u2488 \u2488 Simple label modification",id:"----simple-label-modification",level:2},{value:"\u2489 \u2489 \u2489 \u2489 Change profile picture position",id:"----change-profile-picture-position",level:2},{value:"\u248a \u248a \u248a \u248a Update profile picture constraints",id:"----update-profile-picture-constraints",level:2},{value:"\u248b \u248b \u248b \u248b Update label positions and constraints",id:"----update-label-positions-and-constraints",level:2},{value:"Now, let&#39;s work on the First Name label.",id:"now-lets-work-on-the-first-name-label",level:4},{value:"Finally, we&#39;ll work on the Last Name label.",id:"finally-well-work-on-the-last-name-label",level:4}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now, let's do some storyboard modification ... from simple to complex."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Final result",src:i(11800).Z,width:"1276",height:"1134"})),(0,a.kt)("h2",{id:"----simple-label-modification"},"\u2488 \u2488 \u2488 \u2488 Simple label modification"),(0,a.kt)("p",null,"We'll start by modifying a label's font and color:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the ",(0,a.kt)("em",{parentName:"li"},"ContactDetailsForm.storyboard")," file from the Navigation tab."),(0,a.kt)("li",{parentName:"ul"},"Click on the First Name label (you can also select it from the interface builder or the left pane)."),(0,a.kt)("li",{parentName:"ul"},"Select the Attributes inspector pane from the Utility area.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Attributes inspector",src:i(80092).Z,width:"1117",height:"790"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change the font from Helvetica Neue Bold to Futura Bold.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Attributes inspector font",src:i(96501).Z,width:"1291",height:"1006"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can also change the color of the font from the same pane.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Attributes inspector color",src:i(80159).Z,width:"1291",height:"1006"})),(0,a.kt)("h2",{id:"----change-profile-picture-position"},"\u2489 \u2489 \u2489 \u2489 Change profile picture position"),(0,a.kt)("p",null,"All 4D for iOS templates use constraints for the app's elements to be well displayed on all devices."),(0,a.kt)("p",null,"In the ",(0,a.kt)("em",{parentName:"p"},"ContactDetailsForm.storyboard")," file, the picture, First Name, and Last Name labels are all currently center aligned."),(0,a.kt)("p",null,"Let's change it to appear like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simulator result",src:i(60790).Z,width:"545",height:"964"})),(0,a.kt)("p",null,"First, vertically align the picture and drag the First Name and Last Name labels to the right of the picture."),(0,a.kt)("p",null,"Next, select the image and go to the Size attributes pane from the Utility area. Change the X value from 161.67 to 40.67 and the Y value from 28 to 79."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Profil picture position",src:i(645).Z,width:"1072",height:"1034"})),(0,a.kt)("p",null,"As you can see, the position has changed but Xcode is displaying yellow lines...why? These yellow lines represent constraints which are no longer valid."),(0,a.kt)("h2",{id:"----update-profile-picture-constraints"},"\u248a \u248a \u248a \u248a Update profile picture constraints"),(0,a.kt)("p",null,"To vertically align the picture in the center in the Superview (the view which contains it), we need to delete the existing constraints and add new ones."),(0,a.kt)("p",null,"The image currently has the following constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Width Equals: A width of 78 pixels."),(0,a.kt)("li",{parentName:"ul"},"Height Equals: A height of 78 pixels."),(0,a.kt)("li",{parentName:"ul"},"Align Center X: Centers the image on a previously defined horizontal axis."),(0,a.kt)("li",{parentName:"ul"},"Top Space: An amount of space from the top of the image to the top of the view."),(0,a.kt)("li",{parentName:"ul"},"Bottom space to ",(0,a.kt)("inlineCode",{parentName:"li"},"<First Name>"),": The previously defined space between the First Name label and the image.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Profil picture constraints",src:i(12426).Z,width:"312",height:"397"})),(0,a.kt)("p",null,"Delete all of the constraints except Width and Height (you'll modify these later from the Size inspector in the Constraints section). The picture outline should be now in red because the constraints are missing."),(0,a.kt)("p",null,"Click on the Align button (at the bottom of the Interface Builder window) and check the ",(0,a.kt)("strong",{parentName:"p"},"Vertically in Container")," checkbox."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Profil picture Align",src:i(52043).Z,width:"1072",height:"1034"})),(0,a.kt)("p",null,"Next, click on the ",(0,a.kt)("strong",{parentName:"p"},"Add New Constraints")," button and add a leading space constraint (the left constraint)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Profil picture new constraints",src:i(76075).Z,width:"1072",height:"1034"})),(0,a.kt)("p",null,"At this point, all the profile picture constraints should be blue."),(0,a.kt)("p",null,"\u304a\u3064\u304b\u308c\u3055\u307e\u3067\u3057\u305f\uff01 Your profile picture is now well positioned with the correct constraints."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"TIPS")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To create a constraint between two views, press Ctrl and drag one of the views to the other. \u30de\u30a6\u30b9\u30dc\u30bf\u30f3\u3092\u96e2\u3059\u3068\u540c\u6642\u306b\uff0c\u3053\u3053\u3067\u8a2d\u5b9a\u3067\u304d\u308b\u5236\u7d04\u306e\u9078\u629e\u80a2\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can delete constraints by either selecting them from the Size inspector or from the Interface Builder.")))),(0,a.kt)("h2",{id:"----update-label-positions-and-constraints"},"\u248b \u248b \u248b \u248b Update label positions and constraints"),(0,a.kt)("h4",{id:"now-lets-work-on-the-first-name-label"},"Now, let's work on the First Name label."),(0,a.kt)("p",null,"We'll begin by changing the position and width:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the First Name label from the Interface Builder."),(0,a.kt)("li",{parentName:"ul"},"Next, change the Width from 386 to 267 pixels."),(0,a.kt)("li",{parentName:"ul"},"Change the X value from 8 to 127 pixels and the Y value from 28 to 79 pixels.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"First Name Label position",src:i(17648).Z,width:"1139",height:"1040"})),(0,a.kt)("p",null,"Modify the remaining constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Delete the leading and the bottom space constraints from the Size inspector."),(0,a.kt)("li",{parentName:"ul"},"Add a leading space constraint by clicking on the ",(0,a.kt)("strong",{parentName:"li"},"Add New Constraints")," button to position the First Name label to the right of the Profile picture."),(0,a.kt)("li",{parentName:"ul"},"Press Ctrl and drag the First Name label to the Profile picture. Select the top constraint in the menu to top align both elements.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"First Name Label top constraint",src:i(23857).Z,width:"1139",height:"1040"})),(0,a.kt)("h4",{id:"finally-well-work-on-the-last-name-label"},"Finally, we'll work on the Last Name label."),(0,a.kt)("p",null,"Change the position and width:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the Last Name label from the Interface Builder."),(0,a.kt)("li",{parentName:"ul"},"Change the width from 386 to 267 pixels."),(0,a.kt)("li",{parentName:"ul"},"Change the X value from 8 to 127 pixels and the Y value from 144.33 to 118.33 pixels.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Last Name Label position",src:i(72290).Z,width:"1139",height:"1040"})),(0,a.kt)("p",null,"Modify the remaining constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Delete the leading space constraints from the Size inspector."),(0,a.kt)("li",{parentName:"ul"},"Add a leading space and top space constraints by clicking on the Add New Constraints button.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Last Name Label constraint",src:i(78693).Z,width:"1139",height:"1040"})),(0,a.kt)("p",null,"Both of your name labels are now repostioned."),(0,a.kt)("p",null,"Let's see the results in the Simulator !"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simulator result",src:i(38209).Z,width:"545",height:"964"})),(0,a.kt)("p",null,"Hmmmm. That's not exactly the result we wanted ..."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the First Name and Last Name labels and change the alignment from center to left in the Attributes inspector.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Labels Alignment",src:i(56430).Z,width:"1139",height:"1040"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Next, select the Profile picture and double click on the leading space constraint."),(0,a.kt)("li",{parentName:"ul"},"Change the Constant value from 40.67 to 80 pixels.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Constraints adjustments",src:i(56714).Z,width:"1140",height:"1065"})),(0,a.kt)("p",null,"Much better! Now all constraints are working and the labels aren't breaking other constraints."),(0,a.kt)("p",null,"As you can see, customizing your app is very simple!"))}u.isMDXComponent=!0},3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(i),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return i?n.createElement(h,l(l({ref:t},p),{},{components:i})):n.createElement(h,l({ref:t},p))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,l=new Array(o);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<o;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},80092:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Attributes-inspector-Xcode-4D-for-iOS-f340fd4a83c3c2250a0f81455f5a7203.png"},80159:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Attributes-inspector-color-Xcode-4D-for-iOS-e21d893ce190134448df5e393ba60b8a.png"},96501:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Attributes-inspector-font-Xcode-4D-for-iOS-59d57a58ae8a261e224e3eaad74446c9.png"},56714:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Constraints-adjustments-Xcode-4D-for-iOS-8dc49472a1891d4dd26b574c62365f41.png"},17648:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/First-Name-Label-position-Xcode-4D-for-iOS-5cbe6158a70c33967849a75bc651ac3d.png"},23857:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/First-Name-Label-top-constraint-Xcode-4D-for-iOS-e2f98a8f14aa639e46d296c06971f200.png"},56430:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Labels-Alignment-Xcode-4D-for-iOS-a9e38f0b9f7232c654635a11ed095ea7.png"},78693:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Last-Name-Label-constraint-Xcode-4D-for-iOS-010bb5c3150ffe7b2d8abeea0d1740c1.png"},72290:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Last-Name-Label-position-Xcode-4D-for-iOS-0afadb6357c1f471fe6e88495982e3fe.png"},52043:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Profil-picture-Align-Xcode-4D-for-iOS-53ee2e570cd637a4519f49dae9934ed0.png"},12426:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Profil-picture-constraints-Xcode-4D-for-iOS-90c8223a67ddd9dec4bc697f4b0f8697.png"},76075:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Profil-picture-new-constraints-4D-for-iOS-1dcc347bf579a41c8330c3987d302f0e.png"},645:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Profil-picture-position-Xcode-4D-for-iOS-67d0fbd9b08ccd484d88e08274bd9f6f.png"},11800:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Simlator-Before-After-Xcode-4D-for-iOS-0c6f6aea6a2df3bcd86abd46f718cac2.png"},60790:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Simlator-Final-Xcode-4D-for-iOS-989d65cf9725f55ae7a596dbf23821be.png"},38209:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Simulator-Xcode-4D-for-iOS-e17f8598fa1241a9c7bf382ef1108795.png"}}]);