"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1461],{3315:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const o={id:"adding-actions-template",title:"Adding actions in templates"},l=void 0,s={unversionedId:"tutorials/actions/adding-actions-template",id:"version-19-R6/tutorials/actions/adding-actions-template",title:"Adding actions in templates",description:"OBJECTIVES",source:"@site/versioned_docs/version-19-R6/tutorials/actions/adding-actions-template.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/adding-actions-template",permalink:"/docs/tutorials/actions/adding-actions-template",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/actions/adding-actions-template.md",tags:[],version:"19-R6",frontMatter:{id:"adding-actions-template",title:"Adding actions in templates"},sidebar:"tutorials",previous:{title:"Defining your first action",permalink:"/docs/tutorials/actions/define-first-action"},next:{title:"Using action parameters",permalink:"/docs/tutorials/actions/using-action-parameters"}},r={},d=[{value:"STEP 1. Download the Starter project",id:"step-1-download-the-starter-project",level:2},{value:"STEP 2. Add custom templates to 4D for iOS Project",id:"step-2-add-custom-templates-to-4d-for-ios-project",level:2},{value:"STEP 3. Add actions in List forms",id:"step-3-add-actions-in-list-forms",level:2},{value:"Add actions to TasksList custom template",id:"add-actions-to-taskslist-custom-template",level:3},{value:"A. Add Table action Tag",id:"a-add-table-action-tag",level:4},{value:"B. Add Entity action Tag",id:"b-add-entity-action-tag",level:4},{value:"Add actions to TasksCollection custom template",id:"add-actions-to-taskscollection-custom-template",level:3},{value:"A. Add Table action Tag",id:"a-add-table-action-tag-1",level:4},{value:"B. Add Entity action Tag",id:"b-add-entity-action-tag-1",level:4},{value:"STEP 4. Add actions in Detail forms",id:"step-4-add-actions-in-detail-forms",level:2}],c={toc:d};function p(t){let{components:e,...o}=t;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,i.kt)("p",{parentName:"blockquote"},"Add actions to custom List and Detail forms templates.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,i.kt)("p",{parentName:"blockquote"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"[here](requirements.html)")," to see what you'll need to get started!")),(0,i.kt)("p",null,"In this tutorial, we are going to see how easy it can be to ",(0,i.kt)("strong",{parentName:"p"},"add actions to custom templates"),"."),(0,i.kt)("h2",{id:"step-1-download-the-starter-project"},"STEP 1. Download the Starter project"),(0,i.kt)("p",null,"To begin, download the ",(0,i.kt)("strong",{parentName:"p"},"Starter project"),", which includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"two custom List form templates (TasksList and TasksCollection)"),(0,i.kt)("li",{parentName:"ul"},"a custom Detail form template (TasksDetail)"),(0,i.kt)("li",{parentName:"ul"},"a Tasks.4dbase file")),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{class:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/archive/1dc5aecfbea62a9999d571cb1a956f1ef6983111.zip"},"Download")),(0,i.kt)("h2",{id:"step-2-add-custom-templates-to-4d-for-ios-project"},"STEP 2. Add custom templates to 4D for iOS Project"),(0,i.kt)("p",null,"First, drop:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TasksList")," and ",(0,i.kt)("strong",{parentName:"li"},"TasksCollection")," template folders in ",(0,i.kt)("em",{parentName:"li"},"Tasks.4dbase/Resources/Mobile/form/list")," folder ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Listform templates",src:a(57651).Z,width:"2274",height:"734"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TasksDetail")," template folders in ",(0,i.kt)("em",{parentName:"li"},"Tasks.4dbase/Resources/Mobile/form/detail folder"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Detailform template",src:a(48755).Z,width:"2274",height:"734"})),(0,i.kt)("h2",{id:"step-3-add-actions-in-list-forms"},"STEP 3. Add actions in List forms"),(0,i.kt)("p",null,"Two types of actions are available: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"table actions"),(0,i.kt)("li",{parentName:"ul"},"entity actions ")),(0,i.kt)("p",null,"Let's first open the ",(0,i.kt)("inlineCode",{parentName:"p"},"list/TasksList/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard")," file."),(0,i.kt)("h3",{id:"add-actions-to-taskslist-custom-template"},"Add actions to TasksList custom template"),(0,i.kt)("h4",{id:"a-add-table-action-tag"},"A. Add Table action Tag"),(0,i.kt)("p",null,"Select the ",(0,i.kt)("strong",{parentName:"p"},"List form Controller")," and add this line in the ",(0,i.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Key Path: ",(0,i.kt)("inlineCode",{parentName:"li"},"actions")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String")),(0,i.kt)("li",{parentName:"ul"},"Value: ",(0,i.kt)("inlineCode",{parentName:"li"},"___TABLE_ACTIONS___"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add table action tag",src:a(42134).Z,width:"2530",height:"1932"})),(0,i.kt)("h4",{id:"b-add-entity-action-tag"},"B. Add Entity action Tag"),(0,i.kt)("p",null,"Select the Animatable Table View and add this line in the ",(0,i.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Key Path: ",(0,i.kt)("inlineCode",{parentName:"li"},"actions")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String")),(0,i.kt)("li",{parentName:"ul"},"Value: ",(0,i.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add entity action tag",src:a(72528).Z,width:"2530",height:"1932"})),(0,i.kt)("p",null,"Your custom template is ready to display actions! "),(0,i.kt)("p",null,"You can select the TaskList custom template from the ",(0,i.kt)("strong",{parentName:"p"},"Forms section")," and add the following fields:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Taskslist Forms section",src:a(57677).Z,width:"2164",height:"1988"})),(0,i.kt)("p",null,"Now let's add action tags to the TasksCollection custom template"),(0,i.kt)("h3",{id:"add-actions-to-taskscollection-custom-template"},"Add actions to TasksCollection custom template"),(0,i.kt)("p",null,"To do so, open the ",(0,i.kt)("inlineCode",{parentName:"p"},"list/TasksCollection/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard")," file."),(0,i.kt)("h4",{id:"a-add-table-action-tag-1"},"A. Add Table action Tag"),(0,i.kt)("p",null,"The process is quite as similar as TasksList custom template's process."),(0,i.kt)("p",null,"Select the ",(0,i.kt)("strong",{parentName:"p"},"List form Controller")," and add this line in the ",(0,i.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Key Path: ",(0,i.kt)("inlineCode",{parentName:"li"},"actions")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String")),(0,i.kt)("li",{parentName:"ul"},"Value: ",(0,i.kt)("inlineCode",{parentName:"li"},"___TABLE_ACTIONS___"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add collection table action tag",src:a(27773).Z,width:"2530",height:"1932"})),(0,i.kt)("h4",{id:"b-add-entity-action-tag-1"},"B. Add Entity action Tag"),(0,i.kt)("p",null,"For entity, the way you display actions is quite different than TableView: swipe action are not really adapted to CollectionViews."),(0,i.kt)("p",null,"So with collection views, the best way to display actions is to use a ",(0,i.kt)("strong",{parentName:"p"},"long pressure")," gesture on the cells you want to interact with."),(0,i.kt)("p",null,"For that, select the collectionView cell and add this line in the ",(0,i.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Key Path: ",(0,i.kt)("inlineCode",{parentName:"li"},"actions")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String")),(0,i.kt)("li",{parentName:"ul"},"Value: ",(0,i.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add collection entity action tag",src:a(80262).Z,width:"2530",height:"1932"})),(0,i.kt)("p",null,"To optimize the interaction rendering, you can add a scale effect with a haptic feedback adding the following line in the ",(0,i.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Key Path: ",(0,i.kt)("inlineCode",{parentName:"li"},"touch.zoomScale")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Number")),(0,i.kt)("li",{parentName:"ul"},"Value: ",(0,i.kt)("inlineCode",{parentName:"li"},"0,96")," (adapt the scale ratio depending on the result you want to get)")),(0,i.kt)("p",null,"You can select the TasksCollection custom template from the ",(0,i.kt)("strong",{parentName:"p"},"Forms section")," and add the following fields:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TasksCollection Forms section",src:a(66769).Z,width:"2164",height:"1988"})),(0,i.kt)("h2",{id:"step-4-add-actions-in-detail-forms"},"STEP 4. Add actions in Detail forms"),(0,i.kt)("p",null,"In Detail forms, you can use the ",(0,i.kt)("strong",{parentName:"p"},"generic button")," in the navigation bar or ",(0,i.kt)("strong",{parentName:"p"},"create easily your own custom action button"),". In both cases, you have to add tags."),(0,i.kt)("p",null,"For generic button embedded in the navigation bar, select the Controller and add this line in the ",(0,i.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Key Path: ",(0,i.kt)("inlineCode",{parentName:"li"},"actions")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String")),(0,i.kt)("li",{parentName:"ul"},"Value: ",(0,i.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add detailform entity action tag",src:a(72986).Z,width:"2530",height:"1932"})),(0,i.kt)("p",null,"In our tutorial, we want to build our own generic button. For that, open the ",(0,i.kt)("inlineCode",{parentName:"p"},"detail/TasksDetail/Sources/Forms/Tables/___TABLE___/___TABLE___DetailsForm.storyboard")," file."),(0,i.kt)("p",null,"Open it, select the button at bottom right and add this line in the ",(0,i.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Key Path: ",(0,i.kt)("inlineCode",{parentName:"li"},"actions")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String")),(0,i.kt)("li",{parentName:"ul"},"Value: ",(0,i.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add detailform entity action tag custom action button",src:a(12308).Z,width:"2530",height:"1932"})),(0,i.kt)("p",null,"As you can see, a few visual buttons are missing in the Storyboard file. You can actually find those visuals in the  ",(0,i.kt)("strong",{parentName:"p"},"Resources folder")," template. They will be included in the project during the build process."),(0,i.kt)("p",null,"For example for the ",(0,i.kt)("strong",{parentName:"p"},"moreButton.imageset"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Template ressources",src:a(50486).Z,width:"1522",height:"766"})),(0,i.kt)("p",null,"You can select the TasksDetail custom template from the ",(0,i.kt)("strong",{parentName:"p"},"Forms section")," and add the following fields:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TasksDetail Forms section",src:a(86419).Z,width:"2164",height:"1988"})),(0,i.kt)("p",null,"Congratulations, your Tasks iOS app is now complete and includes actions in List form and Detail form !"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Template ressources",src:a(29311).Z,width:"1559",height:"907"})),(0,i.kt)("p",null,"Download the completed project: "),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/releases/latest/download/tutorial-AddingActionToTemplates.zip"},"Download")))}p.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>u});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var r=n.createContext({}),d=function(t){var e=n.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=d(t.components);return n.createElement(r.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,o=t.originalType,r=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=d(a),u=i,k=m["".concat(r,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(k,l(l({ref:e},c),{},{components:a})):n.createElement(k,l({ref:e},c))}));function u(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var r in e)hasOwnProperty.call(e,r)&&(s[r]=e[r]);s.originalType=t,s.mdxType="string"==typeof t?t:i,l[1]=s;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80262:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Add-collection-entity-tag-taskslist-3f04e0602db0b304b72fb6ccfcb19b4e.png"},27773:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Add-collection-table-tag-taskslist-36f6728e233cbadd86070781b08e978b.png"},72528:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Add-entity-tag-taskslist-f451a9760f86a118e99afc27fc80edf3.png"},42134:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Add-table-tag-taskslist-8d2cbcb005e17c5e11ebc6fad5c21655.png"},12308:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Detail-form-action-custom-action-Button-dce7734160980e4471815a31dde1720e.png"},72986:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Detail-form-action-navigationBar-7ff5b86ac2040d091e2bc18a51d41c62.png"},48755:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Detailform-template-12ade6ee5a4eb693cbf014faf59c56a5.png"},29311:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/ListForm-entity-action-tableview-c4ca8838892967fd5df82c8271e4090b.png"},57651:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Listform-templates-09ed1c5a3ff901a807ff3ead04d0ada7.png"},50486:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Template-Ressources-db10d9e26011ee4ab1652752eedb6b32.png"},86419:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/detailform-forms-section-8159e555c94e2e4d36da5d27329ec148.png"},66769:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/listform-taskscollection-forms-section-09fa057f109a221cd927c4c4496e308c.png"},57677:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/listform-taskslist-forms-section-c3786fcf5144780d2bc741888fd62dc1.png"}}]);