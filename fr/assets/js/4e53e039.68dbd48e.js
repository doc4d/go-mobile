"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1546],{99864:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={id:"on-mobile-app-action",title:"On Mobile App Action"},o=void 0,i={unversionedId:"4d/on-mobile-app-action",id:"4d/on-mobile-app-action",title:"On Mobile App Action",description:"On Mobile App Action( mobileInfo Object",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/4d/on-mobile-app-action.md",sourceDirName:"4d",slug:"/4d/on-mobile-app-action",permalink:"/go-mobile/fr/docs/next/4d/on-mobile-app-action",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/4d/on-mobile-app-action.md",tags:[],version:"current",frontMatter:{id:"on-mobile-app-action",title:"On Mobile App Action"},sidebar:"docs",previous:{title:"On Mobile App Authentication",permalink:"/go-mobile/fr/docs/next/4d/on-mobile-app-authentication"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}],d={toc:m};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"On Mobile App Action"),"( ",(0,r.kt)("em",{parentName:"p"},"mobileInfo")," : Object ) -> ",(0,r.kt)("em",{parentName:"p"},"result")," : Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobileInfo"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Information passed by the mobile application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Action status & data synchro")))),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"On Mobile App Action")," 4D database method is in charge of managing actions requested by the mobile application for a specific session."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The mobile application must have been authenticated by the ",(0,r.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/next/4d/on-mobile-app-authentication"},"On Mobile App Authentication")," database method."))),(0,r.kt)("p",null,"This database method is called by 4D when a mobile application sends an action request."),(0,r.kt)("p",null,"The database method receives required information from the mobile application in the ",(0,r.kt)("em",{parentName:"p"},"mobileInfo")," parameter (object), and must return the action status in the ",(0,r.kt)("em",{parentName:"p"},"result")," parameter (object). You must declare and initialize these parameters as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," //On Mobile App Action database method\n#DECLARE ($mobileInfo : Object) -> $result : Object\n  // ...Code for the method\n$result:=New object() //do not forget to create the object to return\n")),(0,r.kt)("p",null,"The following properties are received in the ",(0,r.kt)("em",{parentName:"p"},"mobileInfo")," object parameter:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property name"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Texte"),(0,r.kt)("td",{parentName:"tr",align:null},"Action name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Texte"),(0,r.kt)("td",{parentName:"tr",align:null},"UUID of the ",(0,r.kt)("a",{parentName:"td",href:"https://developer.4d.com/docs/API/SessionClass.html"},"Session")," object on the 4D server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ip"),(0,r.kt)("td",{parentName:"tr",align:null},"Texte"),(0,r.kt)("td",{parentName:"tr",align:null},"Session IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parameters"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Action parameters sent from the mobile application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"context"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Context parameters for the requested action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"dataClass"),(0,r.kt)("td",{parentName:"tr",align:null},"Texte"),(0,r.kt)("td",{parentName:"tr",align:null},"4D dataclass name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"entity.primaryKey"),(0,r.kt)("td",{parentName:"tr",align:null},"Text, Longint"),(0,r.kt)("td",{parentName:"tr",align:null},"(optional, returned if the action is related to a selected entity). Primary key of the entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"entity.relationName"),(0,r.kt)("td",{parentName:"tr",align:null},"Texte"),(0,r.kt)("td",{parentName:"tr",align:null},"(optional, returned if the action is related to a linked entity). Many-to-one relation name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"parent.primaryKey"),(0,r.kt)("td",{parentName:"tr",align:null},"Text, Longint"),(0,r.kt)("td",{parentName:"tr",align:null},"(optional, returned if the action is related to a linked entity). Primary key of the parent entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"parent.relationName"),(0,r.kt)("td",{parentName:"tr",align:null},"Texte"),(0,r.kt)("td",{parentName:"tr",align:null},"(optional, returned if the action is related to a linked entity). One-to-many relation name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"parent.dataClass"),(0,r.kt)("td",{parentName:"tr",align:null},"Texte"),(0,r.kt)("td",{parentName:"tr",align:null},"(optional, returned if the action is related to a linked entity). Name of the parent 4D dataclass.")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can access the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/API/SessionClass.html"},"Session object")," automatically created on the 4D server from this database method. You can use this object to control the mobile session."))),(0,r.kt)("p",null,"After processing information, the database method must return an object with the following properties in ",(0,r.kt)("em",{parentName:"p"},"result"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"success"),(0,r.kt)("td",{parentName:"tr",align:null},"Bool\xe9en"),(0,r.kt)("td",{parentName:"tr",align:null},"True if action has been successfully processed, False otherwise.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"statusText"),(0,r.kt)("td",{parentName:"tr",align:null},"Texte"),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Message to display on the mobile application. If success=true, display message; if success=false, can be used to provide user with an explanation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errors"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection of objects"),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Each object contains a ",(0,r.kt)("a",{parentName:"td",href:"../project-definition/actions#update-pending-tasks-that-failed"},"pair of 'parameter'/'message' keys")," to display in the mobile application for rejected entries.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSynchro"),(0,r.kt)("td",{parentName:"tr",align:null},"Bool\xe9en"),(0,r.kt)("td",{parentName:"tr",align:null},"True if the entity or table selection needs to be refreshed, false otherwise. If True, the mobile application will automatically trigger a data synchronization")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'  // On Mobile App Action\n  // 2 actions are defined: "done" and "postponeAll"\n\n#DECLARE ($request : Object) -> $result : Object\n\nvar $o;$context : Object\n\n $context:=$request.context\n\n Case of\n\n    :($request.action="done")\n       $o:=New object(\\\n       "dataClass";$context.dataClass;\\\n       "ID";$context.entity.primaryKey;\\\n       "CompletePercentage";100)\n\n       $result:=modifyStatus($o) //call your project method to modify the status of the entity\n\n    :($request.action="postponeAll")\n       $o:=New object("dataClass";$context.dataClass)\n\n       $result:=postponeAll($o) //call your project method to postpone all entities of the dataClass\n\n    Else //Unknown request\n       $result:=New object("success";False)\n\n End case\n\n')))}s.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=m(a),u=r,k=c["".concat(p,".").concat(u)]||c[u]||s[u]||l;return a?n.createElement(k,o(o({ref:e},d),{},{components:a})):n.createElement(k,o({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);