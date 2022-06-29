"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6941],{21352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(87462),o=(n(67294),n(3905));const a={id:"push-notification",title:"Push notifications"},r=void 0,s={unversionedId:"special-features/push-notification",id:"version-19-R4/special-features/push-notification",title:"Push notifications",description:"This section is currently not available in 4D for Android.",source:"@site/versioned_docs/version-19-R4/special-features/push-notification.md",sourceDirName:"special-features",slug:"/special-features/push-notification",permalink:"/go-mobile/docs/19-R4/special-features/push-notification",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/special-features/push-notification.md",tags:[],version:"19-R4",frontMatter:{id:"push-notification",title:"Push notifications"},sidebar:"version-19-R4/docs",previous:{title:"Session management",permalink:"/go-mobile/docs/19-R4/special-features/session-management"},next:{title:"Deep Linking",permalink:"/go-mobile/docs/19-R4/special-features/deep-linking"}},c={},l=[{value:"What is a push notification?",id:"what-is-a-push-notification",level:2},{value:"Technical architecture",id:"technical-architecture",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Basic example to manage push notifications",id:"basic-example-to-manage-push-notifications",level:2},{value:"Push notification with data synchronization",id:"push-notification-with-data-synchronization",level:2},{value:"Data synchronization with a notification opening a record",id:"data-synchronization-with-a-notification-opening-a-record",level:3},{value:"Data synchronization with a simple notification",id:"data-synchronization-with-a-simple-notification",level:3},{value:"Windows Configuration",id:"windows-configuration",level:2},{value:"MobileApps folder",id:"mobileapps-folder",level:2}],p={toc:l};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"4D for Android")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This section is currently not available in 4D for Android."))),(0,o.kt)("h2",{id:"what-is-a-push-notification"},"What is a push notification?"),(0,o.kt)("p",null,"On a mobile phone, a push notification is an alert message, received via an application, that you can open, delete, allow or block. It can be very useful for example to notify your app users that a new version is available."),(0,o.kt)("p",null,"But what about the architecture to implement, in order to integrate this functionality into a mobile application? And what is the process of a push notification, from creation to display on the user's mobile?"),(0,o.kt)("h2",{id:"technical-architecture"},"Technical architecture"),(0,o.kt)("p",null,"Here are the different elements needed to create, send and receive a mobile push notification:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Push notification process",src:n(32529).Z,width:"2317",height:"1600"})),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"In order to send push notifications, an ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthKey_XXXYYY.p8")," authentication file from Apple is required. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate and download a .p8 key file as described in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Generate_p8.md"},"this documentation"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("a",{parentName:"p",href:"../project-definition/publishing"},"Publishing")," page, check the ",(0,o.kt)("strong",{parentName:"p"},"Push notifications")," option and select your certificate in the mobile project."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Publishing section",src:n(36656).Z,width:"2164",height:"1988"})),(0,o.kt)("h2",{id:"basic-example-to-manage-push-notifications"},"Basic example to manage push notifications"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/tree/master"},"4D Mobile App Server")," component provides methods to push notifications to one or multiple recipients. For detailed information, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md"},"PushNotification component documentation"),"."),(0,o.kt)("p",null,"Here is a simple example of push notification sent to ",(0,o.kt)("inlineCode",{parentName:"p"},"test@4d.com"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification:=MobileAppServer.PushNotification.new() \n$notification:=New object \n$notification.title:="This is title" \n$notification.body:="Here is the content of this notification" \n$response:=$pushNotification.send($notification;"test@4d.com")\n\n')),(0,o.kt)("p",null,"It's as simple as that!"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md"},(0,o.kt)("strong",{parentName:"a"},"4D Mobile App Server")," component")," to easily adapt the push notifications to your own needs. Feel free to use it and to pick the most relevant aspects for your app. And of course, all contributors are welcome to this project, through feedback, bug reports and even better: pull requests."))),(0,o.kt)("h2",{id:"push-notification-with-data-synchronization"},"Push notification with data synchronization"),(0,o.kt)("p",null,"With a push notification, you can also launch a synchronization to update your data."),(0,o.kt)("p",null,"For example, if your application has a delivery tracking option, the delivery information will be updated in the database thanks to a notification sent to the customer. This notification, containing a request to synchronize the data, will enable the customer to get the modified data on their smartphone."),(0,o.kt)("p",null,"To do so using the ",(0,o.kt)("inlineCode",{parentName:"p"},"4D Mobile App Server")," component, you need to specify whether or not you want to force data synchronization in your push notification. Therefore, simply provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSynchro")," boolean value in the ",(0,o.kt)("inlineCode",{parentName:"p"},"userInfo")," object."),(0,o.kt)("h3",{id:"data-synchronization-with-a-notification-opening-a-record"},"Data synchronization with a notification opening a record"),(0,o.kt)("p",null,"By default, a notification opening a record automatically triggers a data synchronization."),(0,o.kt)("p",null,"For example, in a Contact app, if a contact\u2019s specific information (",(0,o.kt)("em",{parentName:"p"},"i.e.")," a contact\u2019s record, such as the address or the phone number) has been modified, the user receives a notification that automatically opens the relevant record and synchronizes the data contained in the record. When the user opens the notification, the contact\u2019s information is fully updated."),(0,o.kt)("p",null,"Here's an example of the default behaviour, a ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSynchro")," request with the ",(0,o.kt)("inlineCode",{parentName:"p"},"open()")," method:"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For ",(0,o.kt)("inlineCode",{parentName:"p"},"open()")," method exclusively, this is the default behaviour. As a result, if you don't specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSynchro")," boolean value, it is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," by default."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification:=MobileAppServer.PushNotification.new()\n\n$notification:=New object\n$notification.title:="This is title" \n$notification.body:="Here is the content of this notification" \n\n$entity:=ds.Employees.get("456456")\n$response:=$pushNotification.open($entity; $notification; $recipients)\n\n')),(0,o.kt)("p",null,"However, you can also choose not to force a data synchronization, by preventing ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSynchro"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification:=MobileAppServer.PushNotification.new()\n\n$notification:=New object\n$notification.title:="This is title" \n$notification.body:="Here is the content of this notification" \n$notification.userInfo:=New object("dataSynchro"; False)\n\n$entity:=ds.Employees.get("456456")\n$response:=$pushNotification.open($entity; $notification; $recipients)\n\n')),(0,o.kt)("h3",{id:"data-synchronization-with-a-simple-notification"},"Data synchronization with a simple notification"),(0,o.kt)("p",null,"You can also request a synchronization for a simple notification without opening a specific record. For example, some new entries have been added. You can then inform your user and update the data with no manipulation on their part."),(0,o.kt)("p",null,"Here is a code example that you can also use with other methods, as long as you fill the ",(0,o.kt)("inlineCode",{parentName:"p"},"userInfo")," object with ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSynchro")," value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification:=MobileAppServer.PushNotification.new()\n\n$notification:=New object\n$notification.title:="This is title" \n$notification.body:="Here is the content of this notification" \n$notification.userInfo:=New object("dataSynchro"; True)\n\n$response:=$pushNotification.send($notification; $recipients)\n\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Data synchronization animation",src:n(30453).Z,width:"360",height:"720"})),(0,o.kt)("h2",{id:"windows-configuration"},"Windows Configuration"),(0,o.kt)("p",null,"Windows users need to download the ",(0,o.kt)("a",{parentName:"p",href:"https://curl.se/download.html"},"last CURL version")," to work on the variables of the environment of their machine. Or they can insert curl.exe in the Resources folder of their production database."),(0,o.kt)("h2",{id:"mobileapps-folder"},"MobileApps folder"),(0,o.kt)("p",null,"Whether you're working on Windows or on macOS, you need to copy the following files from your development project to your production project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"4DBASE/MobileApps/ID.BundleID/AuthKey_XXXX.P8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"4DBASE/MobileApps/ID.BundleID/manifest.json"))))}h.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,f=d["".concat(c,".").concat(u)]||d[u]||h[u]||a;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32529:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/4D-for-ios-push-notification-1ba2c9f12090cef619cebe2a419431e3.png"},36656:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/push-notification-publishing-section-f2975b2a01f145baf627056df0614b45.png"},30453:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pushandSynchro-f7cc0281002b632433be23a623298cd9.gif"}}]);