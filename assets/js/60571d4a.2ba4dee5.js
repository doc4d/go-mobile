"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3863],{11336:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=o(87462),r=(o(67294),o(3905));const n={id:"deploy-on-app-store-archive-and-upload",title:"Archive and upload your Project"},i=void 0,l={unversionedId:"tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload",id:"version-19-R6/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload",title:"Archive and upload your Project",description:"OBJECTIVES",source:"@site/versioned_docs/version-19-R6/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload.md",sourceDirName:"tutorials/deploying-on-app-store",slug:"/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload",permalink:"/go-mobile/docs/19-R6/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/deploying-on-app-store/deploy-on-app-store-archive-and-upload.md",tags:[],version:"19-R6",frontMatter:{id:"deploy-on-app-store-archive-and-upload",title:"Archive and upload your Project"},sidebar:"tutorials",previous:{title:"Create App Store record",permalink:"/go-mobile/docs/19-R6/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record"}},p={},s=[{value:"STEP 1. Xcode configuration",id:"step-1-xcode-configuration",level:2},{value:"STEP 2. Get your Team ID",id:"step-2-get-your-team-id",level:2},{value:"STEP 3. 4D for iOS configuration",id:"step-3-4d-for-ios-configuration",level:2},{value:"STEP 4. Open your project with Xcode",id:"step-4-open-your-project-with-xcode",level:2},{value:"STEP 5. Archive your project from Xcode",id:"step-5-archive-your-project-from-xcode",level:2},{value:"STEP 6. Validate your project",id:"step-6-validate-your-project",level:2},{value:"STEP 7. Upload to App Store",id:"step-7-upload-to-app-store",level:2},{value:"STEP 8. Select the build for the App Store",id:"step-8-select-the-build-for-the-app-store",level:2},{value:"STEP 9. Submit for Review",id:"step-9-submit-for-review",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,r.kt)("p",{parentName:"blockquote"},"Archive and upload your project to App Store Connect.")),(0,r.kt)("h2",{id:"step-1-xcode-configuration"},"STEP 1. Xcode configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you have chosen an Apple Developer Account as an individual, your account is immediately available. "),(0,r.kt)("li",{parentName:"ul"},"If your have chosen an Apple Developer Account as an organization, you must wait for Apple validation."),(0,r.kt)("li",{parentName:"ul"},"When your account is accessible, add it to Xcode in Preferences > Accounts."),(0,r.kt)("li",{parentName:"ul"},"Xcode will automatically install the necessary provisioning and certificates. ")),(0,r.kt)("h2",{id:"step-2-get-your-team-id"},"STEP 2. Get your Team ID"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Log into your Apple Developer Account. You can find your Team ID in Membership.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Get your Team ID",src:o(88295).Z,width:"768",height:"739"})),(0,r.kt)("h2",{id:"step-3-4d-for-ios-configuration"},"STEP 3. 4D for iOS configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Launch 4D for iOS"),(0,r.kt)("li",{parentName:"ul"},"On the SECTIONS tab:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"General: Enter your Team ID")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Team ID",src:o(71725).Z,width:"1082",height:"1009"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Publishing: Enter your production URL")," "),(0,r.kt)("p",null,"(HTTPS is mandatory for deployment)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Publishing",src:o(44433).Z,width:"1082",height:"1009"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On the BUILD tab:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build and Run: Build your Project")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"BuildTab",src:o(62318).Z,width:"1215",height:"1009"})),(0,r.kt)("h2",{id:"step-4-open-your-project-with-xcode"},"STEP 4. Open your project with Xcode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From the 4D for iOS Project Editor's BUILD tab, click on Project > Open the project with Xcode")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Open your project with Xcode",src:o(79347).Z,width:"1033",height:"994"})),(0,r.kt)("h2",{id:"step-5-archive-your-project-from-xcode"},"STEP 5. Archive your project from Xcode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From Xcode go to the simulator Menu and select ",(0,r.kt)("strong",{parentName:"li"},"Generic iOS Device"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generic iOS Device",src:o(23366).Z,width:"318",height:"558"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Then from the menu, click on Product and select ",(0,r.kt)("strong",{parentName:"li"},"Archive"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Archive your project from Xcode",src:o(71974).Z,width:"225",height:"337"})),(0,r.kt)("h2",{id:"step-6-validate-your-project"},"STEP 6. Validate your project"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"At the end of the archive process, the Organizer window appears with the archive you have just created.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Validate")," button to start the validation process."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Validate your project",src:o(3601).Z,width:"1112",height:"729"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The first step is selecting the App Store distribution options.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"App Store distribution options",src:o(25483).Z,width:"768",height:"485"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Then you need to re-sign your app. Let Xcode manage this by  checking the ",(0,r.kt)("strong",{parentName:"li"},"Automatically manage signing")," option.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Re-sign your app",src:o(23374).Z,width:"768",height:"485"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Review your app's content.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"App review",src:o(7161).Z,width:"768",height:"485"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If your project passes the validation process, you should see this message:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Validation",src:o(64482).Z,width:"768",height:"485"})),(0,r.kt)("p",null,"If an error occurs a message will be displayed. These errors must be resolved before attempting the validation process again."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Done"),". This will return you to the Organizer window.")),(0,r.kt)("h2",{id:"step-7-upload-to-app-store"},"STEP 7. Upload to App Store"),(0,r.kt)("p",null,"Once the validation process has been completed, you're ready to add your app to the App Store.   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Upload to App Store")," button.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Upload to App Store",src:o(79152).Z,width:"1112",height:"729"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When your project has been successfully uploaded, you'll see this window:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Upload successful",src:o(55416).Z,width:"768",height:"485"})),(0,r.kt)("h2",{id:"step-8-select-the-build-for-the-app-store"},"STEP 8. Select the build for the App Store"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From App Store Connect > App Store > iOS App, select your app and click the ",(0,r.kt)("strong",{parentName:"li"},"+")," button that appears in the Build section")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add build",src:o(59327).Z,width:"1101",height:"1162"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select the build you want to submit and click ",(0,r.kt)("strong",{parentName:"li"},"Done"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Build selection",src:o(29274).Z,width:"1101",height:"1162"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finally, click on the ",(0,r.kt)("strong",{parentName:"li"},"Submit for Review")," button.")),(0,r.kt)("h2",{id:"step-9-submit-for-review"},"STEP 9. Submit for Review"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The final step to submitting your app for review is answering a few quick questions about your app. ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Submit for Review",src:o(18244).Z,width:"1160",height:"1101"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When you've finished with the questions, click ",(0,r.kt)("strong",{parentName:"p"},"Submit"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The average App Store review time is around two days!"))))}u.isMDXComponent=!0},3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(o),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||n;return o?a.createElement(h,i(i({ref:t},c),{},{components:o})):a.createElement(h,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<n;s++)i[s]=o[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},59327:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Add-build-app-store-connect-125a6da6dab376c3a5f66a40203ce15e.png"},25483:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/App-Store-Distribution-options-0befe561af0cec5bcd8facf7681a7ae7.png"},64482:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Archive-validation-complete-e48a347ebb3ded597e714c4ab9978703.png"},71974:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Archive-your-Project-4ded23cdc25f5f9e463d1fd103dd088a.png"},62318:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/BuildTab-f3ba903eca74e3a84690a816006f2ab4.png"},23366:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Deployment-Generic-iOS-Device-6802ac746895e64a241936d873b1569b.png"},18244:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Export-Compliance-Content-Rights-Advertising-Identifer-832c4c2a41f4dc0e1c51359d67d8dc28.png"},79347:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},3601:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Organizer-Project-Validation-a9c512fbb5ea5c6d545eef18c703a79b.png"},44433:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Publishing-c0eb8dd37534ce4b32a3e5f02cdfd227.png"},23374:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Re-sign-your-App-7b2992f63c7988ffc2ca830228c867e8.png"},7161:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Review-App-52773662f4a864a3a2f74ad29b59385d.png"},29274:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Select-build-app-store-connect-345cdd0f6ab34d09e3ae6e9fd0ae4a4f.png"},88295:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"},71725:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Team-ID-12c375482f73b79029a2a4e683a8fa4f.png"},79152:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Upload-to-AppStore-a119aac5a70e4144ea441d8a36095171.png"},55416:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/upload-Successful-d2b342725164592071b6dcaaa791c7f8.png"}}]);