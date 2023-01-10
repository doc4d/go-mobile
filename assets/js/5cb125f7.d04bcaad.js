"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2852],{47690:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={id:"define-first-action",title:"Defining your first action"},r=void 0,s={unversionedId:"tutorials/actions/define-first-action",id:"version-19-R7/tutorials/actions/define-first-action",title:"Defining your first action",description:"In this tutorial, we are going to work on a Tasks iOS app and see how to deal with actions in this app.",source:"@site/versioned_docs/version-19-R7/tutorials/actions/define-first-action.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/define-first-action",permalink:"/go-mobile/docs/19-R7/tutorials/actions/define-first-action",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R7/tutorials/actions/define-first-action.md",tags:[],version:"19-R7",frontMatter:{id:"define-first-action",title:"Defining your first action"},sidebar:"tutorials",previous:{title:"Getting started",permalink:"/go-mobile/docs/19-R7/tutorials/actions/getting-started"},next:{title:"Adding actions in templates",permalink:"/go-mobile/docs/19-R7/tutorials/actions/adding-actions-template"}},l={},c=[{value:"Entity actions",id:"entity-actions",level:2},{value:"STEP 1. Entity action in Action section",id:"step-1-entity-action-in-action-section",level:3},{value:"STEP 2. Create and edit the Action Database Method",id:"step-2-create-and-edit-the-action-database-method",level:3},{value:"STEP 3. Create a &quot;modifyStatus&quot; Method",id:"step-3-create-a-modifystatus-method",level:3},{value:"Table actions",id:"table-actions",level:2},{value:"STEP 1. Table action in Action section",id:"step-1-table-action-in-action-section",level:3},{value:"STEP 2. Edit the Action method",id:"step-2-edit-the-action-method",level:3},{value:"STEP 3. Create a &quot;postponeAll&quot; Method",id:"step-3-create-a-postponeall-method",level:3},{value:"Where to Go From Here?",id:"where-to-go-from-here",level:2}],p={toc:c};function u(t){let{components:e,...i}=t;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we are going to work on a ",(0,o.kt)("strong",{parentName:"p"},"Tasks iOS app")," and see how to deal with actions in this app."),(0,o.kt)("p",null,"Basically what we want to do in a ",(0,o.kt)("strong",{parentName:"p"},"Task app")," is changing the ",(0,o.kt)("strong",{parentName:"p"},"status")," and the ",(0,o.kt)("strong",{parentName:"p"},"percentage of completion")," of a task individually."),(0,o.kt)("p",null,"More globally, we want to ",(0,o.kt)("strong",{parentName:"p"},"change all tasks status")," to postponed or in Progress for example."),(0,o.kt)("p",null,"Download the ",(0,o.kt)("strong",{parentName:"p"},"Starter project")," and go right to the ",(0,o.kt)("strong",{parentName:"p"},"Actions section"),"."),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-Actions/archive/cf16581214a8a6e4e4067bcff43ac1265ec43ff7.zip"},"Download")),(0,o.kt)("p",null,"You can define actions for two levels:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Entity actions"),(0,o.kt)("li",{parentName:"ul"},"Table actions")),(0,o.kt)("p",null,"Let's focus first on Entity actions!"),(0,o.kt)("h2",{id:"entity-actions"},"Entity actions"),(0,o.kt)("h3",{id:"step-1-entity-action-in-action-section"},"STEP 1. Entity action in Action section"),(0,o.kt)("p",null,"In this Actions section, you will be able to define all your actions ",(0,o.kt)("strong",{parentName:"p"},"names"),", ",(0,o.kt)("strong",{parentName:"p"},"icons"),", ",(0,o.kt)("strong",{parentName:"p"},"labels"),", the ",(0,o.kt)("strong",{parentName:"p"},"table")," you want the action to be available in and the ",(0,o.kt)("strong",{parentName:"p"},"scope")," you want actions to be applied on."),(0,o.kt)("p",null,"The action section is quite empty when you open it for the first time, so click on the ",(0,o.kt)("strong",{parentName:"p"},"Plus button")," at the bottom left to add your first action!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create action",src:n(17387).Z,width:"2164",height:"1988"})),(0,o.kt)("p",null,"Let's define first an action that will ",(0,o.kt)("strong",{parentName:"p"},"change a task status"),' to "Complete" and put the ',(0,o.kt)("strong",{parentName:"p"},"percentage of completion")," to 100%."),(0,o.kt)("p",null,"To define this action:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enter ",(0,o.kt)("strong",{parentName:"li"},"taskDone")," in ",(0,o.kt)("strong",{parentName:"li"},"Names field")),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Done icon")," from the icon library"),(0,o.kt)("li",{parentName:"ul"},"Enter ",(0,o.kt)("strong",{parentName:"li"},"Done")," in ",(0,o.kt)("strong",{parentName:"li"},"Short Labels")),(0,o.kt)("li",{parentName:"ul"},"Enter ",(0,o.kt)("strong",{parentName:"li"},"Task Done")," in ",(0,o.kt)("strong",{parentName:"li"},"Long Labels")),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Tasks")," table from ",(0,o.kt)("strong",{parentName:"li"},"Tables")," list"),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Current record")," from ",(0,o.kt)("strong",{parentName:"li"},"Scope")," list")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Done action definition",src:n(97556).Z,width:"2164",height:"1988"})),(0,o.kt)("h3",{id:"step-2-create-and-edit-the-action-database-method"},"STEP 2. Create and edit the Action Database Method"),(0,o.kt)("p",null,"Now that your action is defined in the Project Editor, you have to create the ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/docs/19-R7/4d/on-mobile-app-action"},"On Mobile App Action")," database method."),(0,o.kt)("p",null,"Do to so, click on ",(0,o.kt)("strong",{parentName:"p"},"Create button")," at the bottom right of the action table and enter the following code in the ",(0,o.kt)("strong",{parentName:"p"},"On Mobile App Action")," database method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($o;$context;$request;$result)\n\n$request:=$1  // Informations provided by mobile application\n\n$context:=$request.context\n\nCase of\n\n    : ($request.action="taskDone")\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "CompletePercentage";100)\n\n        $result:=modifyStatus ($o)\n\n    Else\n\n          // Unknown request\n        $result:=New object("success";False)\n\nEnd case\n\n$0:=$result  // Informations returned to mobile application\n\n')),(0,o.kt)("h3",{id:"step-3-create-a-modifystatus-method"},'STEP 3. Create a "modifyStatus" Method'),(0,o.kt)("p",null,"Once your database method has been edited, you have to create a ",(0,o.kt)("strong",{parentName:"p"},"modifyStatus")," Method that will make the job :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    $entity.CompletePercentage:=$in.CompletePercentage\n\n    $entity.Status:=3\n\n    $status:=$entity.save()\n\n    $out:=New object\n\n    If ($status.success)\n\n        $out.success:=True  // notify App that action is successful\n        $out.dataSynchro:=True  // notify App to refresh this entity\n\n    Else\n\n        $out:=$status  // return status to the App\n\n    End if\n\nElse\n\n    $out.success:=False  // notify App that action failed\n\nEnd if\n\n$0:=$out\n\n')),(0,o.kt)("p",null,"Build and Run you app, and there you go! Your ",(0,o.kt)("strong",{parentName:"p"},"Done action")," is available when you swipe left a cell in Listform, as well as when you click on the ",(0,o.kt)("strong",{parentName:"p"},"generic action button")," in the navigation bar of the Detail form."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Done action",src:n(1430).Z,width:"1559",height:"907"})),(0,o.kt)("h2",{id:"table-actions"},"Table actions"),(0,o.kt)("h3",{id:"step-1-table-action-in-action-section"},"STEP 1. Table action in Action section"),(0,o.kt)("p",null,"Now, imagine that you are going on holidays and you want to ",(0,o.kt)("strong",{parentName:"p"},"change all your tasks status"),' to "Postponed".'),(0,o.kt)("p",null,"Let's define this action from the Action section:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enter ",(0,o.kt)("strong",{parentName:"li"},"postponeAll")," in ",(0,o.kt)("strong",{parentName:"li"},"Names field")),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Postponed icon")," from the icon library"),(0,o.kt)("li",{parentName:"ul"},"Enter ",(0,o.kt)("strong",{parentName:"li"},"Postpone All")," in ",(0,o.kt)("strong",{parentName:"li"},"Short Labels")),(0,o.kt)("li",{parentName:"ul"},"Enter ",(0,o.kt)("strong",{parentName:"li"},"Postpone All")," in ",(0,o.kt)("strong",{parentName:"li"},"Long Labels")),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Tasks")," table from ",(0,o.kt)("strong",{parentName:"li"},"Tables")," list"),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Table")," from ",(0,o.kt)("strong",{parentName:"li"},"Scope")," list")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Postponed action definition",src:n(9168).Z,width:"2164",height:"1988"})),(0,o.kt)("h3",{id:"step-2-edit-the-action-method"},"STEP 2. Edit the Action method"),(0,o.kt)("p",null,"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Edit button")," at the bottom right of the action table to complete the ",(0,o.kt)("strong",{parentName:"p"},"On Mobile App Action")," database method :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($o;$context;$request;$result)\n\n$request:=$1  // Informations provided by mobile application\n\n$context:=$request.context\n\nCase of\n\n    : ($request.action="taskDone")\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "CompletePercentage";100)\n\n        $result:=modifyStatus ($o)\n\n    : ($request.action="postponeAll")\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "Status";4)\n\n        $result:= postponeAll ($o)\n    Else\n\n          // Unknown request\n        $result:=New object("success";False)\n\nEnd case\n\n$0:=$result  // Informations returned to mobile application\n\n')),(0,o.kt)("h3",{id:"step-3-create-a-postponeall-method"},'STEP 3. Create a "postponeAll" Method'),(0,o.kt)("p",null,"As you create the ",(0,o.kt)("strong",{parentName:"p"},"modifyStatus")," Method, follow the same process and create a new ",(0,o.kt)("strong",{parentName:"p"},"postponeAll")," Method that will modify all record status:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($entity;$in;$out)\n\n$in:=$1\n\n$out:=New object("success";False)\n\nIf ($in.dataClass#Null)\n\n    For each ($entity;ds[$in.dataClass].all())\n\n        $entity.Status:=$in.Status\n        $entity.save()\n\n    End for each\n\n    $out.success:=True  // notify App that action success\n    $out.dataSynchro:=True  // notify App to refresh the selection\n\nElse\n\n    $out.errors:=New collection("No Selection")\n\nEnd if\n\n$0:=$out\n\n')),(0,o.kt)("p",null,"Build and Run your app! You will find a new ",(0,o.kt)("strong",{parentName:"p"},"generic button")," in the navigation bar of your Lisform. Click on it to trigger the ",(0,o.kt)("strong",{parentName:"p"},"Postpone All")," action."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Final result Postponed Action",src:n(41222).Z,width:"1559",height:"907"})),(0,o.kt)("h2",{id:"where-to-go-from-here"},"Where to Go From Here?"),(0,o.kt)("p",null,"Congratulations! You've just added 2 actions to your iOS app. You are now able to add all actions you need to your Tasks app!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Final result All Action",src:n(16367).Z,width:"1559",height:"907"})),(0,o.kt)("p",null,"Download the completed project that includes various actions:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-Actions/releases/latest/download/tutorial-Actions.zip"},"Download")))}u.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,r(r({ref:e},p),{},{components:n})):a.createElement(h,r({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17387:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Create-action-3f9a1551995b3fc7cecfd5efc767fad7.png"},97556:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Done-action-definition-0ad0618548aacf2461c2dd6cd50fbe5b.png"},1430:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Entity-action-Done-af91a9feef35665a480fd2607f6f58b7.png"},16367:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ListForm-entity-action-tableview-c4ca8838892967fd5df82c8271e4090b.png"},41222:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ListForm-table-action-tableview-tuto-658578b1585c3ebf027a34911111377a.png"},9168:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/PostponedAll-action-definition-fbbbc42bb0a71003e1335f344eb93c0e.png"}}]);