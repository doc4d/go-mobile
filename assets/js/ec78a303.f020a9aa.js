"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7194],{47181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"deep-linking",title:"Deep Linking"},o=void 0,l={unversionedId:"special-features/deep-linking",id:"special-features/deep-linking",title:"Deep Linking",description:"This feature is currently not available in 4D for Android.",source:"@site/docs/special-features/deep-linking.md",sourceDirName:"special-features",slug:"/special-features/deep-linking",permalink:"/docs/next/special-features/deep-linking",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/special-features/deep-linking.md",tags:[],version:"current",frontMatter:{id:"deep-linking",title:"Deep Linking"},sidebar:"docs",previous:{title:"Push notifications",permalink:"/docs/next/special-features/push-notification"},next:{title:"From the Project editor",permalink:"/docs/next/debug/from-project-editor"}},s={},p=[{value:"Comparison of deep linking modes",id:"comparison-of-deep-linking-modes",level:2},{value:"URL Scheme",id:"url-scheme",level:3},{value:"Universal links",id:"universal-links",level:3},{value:"Custom URL Scheme",id:"custom-url-scheme",level:2},{value:"Custom URL scheme in the project editor",id:"custom-url-scheme-in-the-project-editor",level:3},{value:"Using URL Schemes in you mobile app",id:"using-url-schemes-in-you-mobile-app",level:3},{value:"Universal Links",id:"universal-links-1",level:2},{value:"Universal Links in the Project Editor",id:"universal-links-in-the-project-editor",level:3},{value:"Deep Linking and Push notifications",id:"deep-linking-and-push-notifications",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"4D for Android")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This feature is currently not available in 4D for Android."))),(0,i.kt)("p",null,"Thanks to the ",(0,i.kt)("strong",{parentName:"p"},"deep linking")," feature, you can share the content that you're currently viewing with all of your collegues. Here's an illustration demonstrating deep linking:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deep linking animation",src:n(25693).Z,width:"722",height:"450"})),(0,i.kt)("p",null,"There are two ways to implement deep linking in iOS: ",(0,i.kt)("strong",{parentName:"p"},"URL scheme")," and ",(0,i.kt)("strong",{parentName:"p"},"Universal Links"),". While URL schemes are a well-known method for deep linking, Universal links are the new way that Apple has implemented to easily connect your webpage and your app under the same link."),(0,i.kt)("h2",{id:"comparison-of-deep-linking-modes"},"Comparison of deep linking modes"),(0,i.kt)("h3",{id:"url-scheme"},"URL Scheme"),(0,i.kt)("p",null,"Here is a comparison between the two options which are available in the project editor:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"PROS"),(0,i.kt)("th",{parentName:"tr",align:null},"CONS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Easy to implement"),(0,i.kt)("td",{parentName:"tr",align:null},"Always requires permission")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"No extra backend required"),(0,i.kt)("td",{parentName:"tr",align:null},"Doesn't work if app isn't installed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Doesn't work in Android")))),(0,i.kt)("h3",{id:"universal-links"},"Universal links"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"PROS"),(0,i.kt)("th",{parentName:"tr",align:null},"CONS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Doesn't require permission"),(0,i.kt)("td",{parentName:"tr",align:null},"Static backend with SSL needed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Doesn't open the browser"),(0,i.kt)("td",{parentName:"tr",align:null},"More complex to implement")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Compatible with Android"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Fallback URL if app isn't installed"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"custom-url-scheme"},"Custom URL Scheme"),(0,i.kt)("p",null,"At the simplest level, URL schemes allow users to open an app from other apps. But the true power of URL schemes is in the ability to perform specific actions as your app opens."),(0,i.kt)("h3",{id:"custom-url-scheme-in-the-project-editor"},"Custom URL scheme in the project editor"),(0,i.kt)("p",null,"It's very simple to include an URL scheme to your mobile app. Let's see an example:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Share")," predefined action from the ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/project-definition/actions"},(0,i.kt)("strong",{parentName:"a"},"Action")," page")," and select the scope: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"entity - to share content from a detail form  "),(0,i.kt)("li",{parentName:"ul"},"table - to share a list form"))),(0,i.kt)("li",{parentName:"ol"},"Check the ",(0,i.kt)("strong",{parentName:"li"},"Deep Linking")," feature in the ",(0,i.kt)("strong",{parentName:"li"},"Publishing")," section of the project editor"),(0,i.kt)("li",{parentName:"ol"},"The URL Scheme information is automatically filled in with the app name that you previously defined in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/project-definition/general"},(0,i.kt)("strong",{parentName:"a"},"General")," page"),". However, you can still edit it:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deep linking Project editor",src:n(85773).Z,width:"2164",height:"1988"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Fill in your ",(0,i.kt)("strong",{parentName:"li"},"On Mobile App Action")," method, for example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'\n// On Mobile App Action database method\n\nvar $1 : Object  // Information provided by mobile application\nvar $0 : Object  // Information returned to mobile application\n\nvar $action : Object\n$action:=MobileAppServer.Action.new($1)\n\nCase of \n\n    : ($1.action="shareContact")\n        \n        $0:=$action.shareContext()\n\n    Else \n        \n        $0:=New object("success"; False;"statusText"; "Unknown action send to server")\n\nEnd case \n\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Build your app.")),(0,i.kt)("h3",{id:"using-url-schemes-in-you-mobile-app"},"Using URL Schemes in you mobile app"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Action")," button to display all of your currently available actions "),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Share")," action that you previously defined in the project editor"),(0,i.kt)("li",{parentName:"ol"},"A new view appears to allow you to start sharing content"),(0,i.kt)("li",{parentName:"ol"},"Select the share method you want to use "),(0,i.kt)("li",{parentName:"ol"},"Send it.")),(0,i.kt)("h2",{id:"universal-links-1"},"Universal Links"),(0,i.kt)("p",null,"Universal links provide several key benefits that aren't available with custom URL schemes. Specifically, universal links are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Unique"),": Unlike custom URL schemes, universal links can\u2019t be claimed by other apps because they use standard HTTP or HTTPS links to your website.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Secure"),": When users install your app, iOS verifies that your website allows your app to open URLs on its behalf. Only you can create and upload the file granting this permission to your web server, so the association of your website with your app is secure.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Flexible"),": Universal links work even when your app is not installed. In this case, tapping a link to your website opens the content in Safari.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Simple"),": A single URL works for both your website and your app.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Private"),": Other apps can communicate with your app without needing to know if your app is installed."))),(0,i.kt)("h3",{id:"universal-links-in-the-project-editor"},"Universal Links in the Project Editor"),(0,i.kt)("p",null,"To include Universal links into your app, the process is quite similiar to the URL Schemes process:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Share")," predefined action from the ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/project-definition/actions"},(0,i.kt)("strong",{parentName:"a"},"Action")," page")," and select the scope: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"entity - to share a content from a detail form "),(0,i.kt)("li",{parentName:"ul"},"table - to share a list form"))),(0,i.kt)("li",{parentName:"ol"},"Activate the ",(0,i.kt)("strong",{parentName:"li"},"Deep Linking")," feature in the ",(0,i.kt)("strong",{parentName:"li"},"Publishing")," section in the project editor"),(0,i.kt)("li",{parentName:"ol"},"Enter your website URL in the ",(0,i.kt)("strong",{parentName:"li"},"Universal links")," field"),(0,i.kt)("li",{parentName:"ol"},"Fill in your ",(0,i.kt)("strong",{parentName:"li"},"On Mobile App Action")," method, for example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'\n// On Mobile App Action database method\n\nvar $1 : Object  // Information provided by mobile application\nvar $0 : Object  // Information returned to mobile application\n\nvar $action : Object\n$action:=MobileAppServer.Action.new($1)\n\nCase of \n\n    : ($1.action="shareContact")\n        \n        $0:=$action.shareContext()\n\n    Else \n        \n        $0:=New object("success"; False;"statusText"; "Unknown action send to server")\n\nEnd case \n\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Build your app."),(0,i.kt)("li",{parentName:"ol"},"Trigger universal links from the the ",(0,i.kt)("strong",{parentName:"li"},"On Web Connection")," method, for example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},"// On Web Connection database method\n\nvar $1; $2; $3; $4; $5; $6 : Text\nvar $handler : Object\n\n$handler:=MobileAppServer.WebHandler.new()\nCase of\n    : ($handler.handle($1; $2; $3; $4; $5; $6))\n        // Managed by default mobile code\n    Else\n        // Your web code\nEnd case\n\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To create a universal link, make sure you use standard ports (80 or 443)."))),(0,i.kt)("h2",{id:"deep-linking-and-push-notifications"},"Deep Linking and Push notifications"),(0,i.kt)("p",null,"A great thing about Deep Linking is that it is completely compatible with ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/special-features/push-notification"},"push notifications"),". This means that you can send deep links to your users and lead them directly to the right page."),(0,i.kt)("p",null,"As you can see, this feature opens a large range of possibilities. Deep linking is a crucial feature in today\u2019s apps, especially as users consume content faster and faster. This feature brings them directly to the desired location. So we strongly recommend that you use it in your mobile apps."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md"},(0,i.kt)("strong",{parentName:"a"},"4D Mobile App Server")," component documentation")," for more information on how to combine push notifications and deep linking."))))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25693:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4d-for-ios-deeplinking-c8b6031fa5991c5bfef157b6d39d3ccd.gif"},85773:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/deep-linking-project-editor-publishing-section-f55d18b6701cd4898dc2f8a39c4a61fc.png"}}]);