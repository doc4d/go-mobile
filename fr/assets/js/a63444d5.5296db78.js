"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5930],{41204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"deep-linking",title:"Deep Linking"},o=void 0,l={unversionedId:"special-features/deep-linking",id:"version-19-R5/special-features/deep-linking",title:"Deep Linking",description:"This feature is currently not available in 4D for Android.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R5/special-features/deep-linking.md",sourceDirName:"special-features",slug:"/special-features/deep-linking",permalink:"/go-mobile/fr/docs/19-R5/special-features/deep-linking",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/special-features/deep-linking.md",tags:[],version:"19-R5",frontMatter:{id:"deep-linking",title:"Deep Linking"},sidebar:"docs",previous:{title:"Push notifications",permalink:"/go-mobile/fr/docs/19-R5/special-features/push-notification"},next:{title:"Depuis l'\xe9diteur de projet",permalink:"/go-mobile/fr/docs/19-R5/debug/from-project-editor"}},s={},p=[{value:"Comparison of deep linking modes",id:"comparison-of-deep-linking-modes",level:2},{value:"URL Scheme",id:"url-scheme",level:3},{value:"Universal links",id:"universal-links",level:3},{value:"Custom URL Scheme",id:"custom-url-scheme",level:2},{value:"Custom URL scheme in the project editor",id:"custom-url-scheme-in-the-project-editor",level:3},{value:"Using URL Schemes in you mobile app",id:"using-url-schemes-in-you-mobile-app",level:3},{value:"Universal Links",id:"universal-links-1",level:2},{value:"Universal Links in the Project Editor",id:"universal-links-in-the-project-editor",level:3},{value:"Deep Linking and Push notifications",id:"deep-linking-and-push-notifications",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"4D for Android",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This feature is currently not available in 4D for Android.")),(0,i.kt)("p",null,"Thanks to the ",(0,i.kt)("strong",{parentName:"p"},"deep linking")," feature, you can share the content that you're currently viewing with all of your collegues. Here's an illustration demonstrating deep linking:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deep linking animation",src:n(56537).Z,width:"722",height:"450"})),(0,i.kt)("p",null,"There are two ways to implement deep linking in iOS: ",(0,i.kt)("strong",{parentName:"p"},"URL scheme")," and ",(0,i.kt)("strong",{parentName:"p"},"Universal Links"),". While URL schemes are a well-known method for deep linking, Universal links are the new way that Apple has implemented to easily connect your webpage and your app under the same link."),(0,i.kt)("h2",{id:"comparison-of-deep-linking-modes"},"Comparison of deep linking modes"),(0,i.kt)("h3",{id:"url-scheme"},"URL Scheme"),(0,i.kt)("p",null,"Here is a comparison between the two options which are available in the project editor:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"AVANTAGES"),(0,i.kt)("th",{parentName:"tr",align:null},"INCONV\xc9NIENTS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Easy to implement"),(0,i.kt)("td",{parentName:"tr",align:null},"Always requires permission")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"No extra backend required"),(0,i.kt)("td",{parentName:"tr",align:null},"Doesn't work if app isn't installed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Doesn't work in Android")))),(0,i.kt)("h3",{id:"universal-links"},"Universal links"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"AVANTAGES"),(0,i.kt)("th",{parentName:"tr",align:null},"INCONV\xc9NIENTS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Doesn't require permission"),(0,i.kt)("td",{parentName:"tr",align:null},"Static backend with SSL needed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Doesn't open the browser"),(0,i.kt)("td",{parentName:"tr",align:null},"More complex to implement")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Compatible with Android"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Fallback URL if app isn't installed"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"custom-url-scheme"},"Custom URL Scheme"),(0,i.kt)("p",null,"At the simplest level, URL schemes allow users to open an app from other apps. But the true power of URL schemes is in the ability to perform specific actions as your app opens."),(0,i.kt)("h3",{id:"custom-url-scheme-in-the-project-editor"},"Custom URL scheme in the project editor"),(0,i.kt)("p",null,"It's very simple to include an URL scheme to your mobile app. Let's see an example:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Share")," predefined action from the ",(0,i.kt)("a",{parentName:"li",href:"/go-mobile/fr/docs/19-R5/project-definition/actions"},(0,i.kt)("strong",{parentName:"a"},"Action")," page")," and select the scope:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"entity - to share content from a detail form"),(0,i.kt)("li",{parentName:"ul"},"table - to share a list form"))),(0,i.kt)("li",{parentName:"ol"},"Check the ",(0,i.kt)("strong",{parentName:"li"},"Deep Linking")," feature in the ",(0,i.kt)("strong",{parentName:"li"},"Publishing")," section of the project editor"),(0,i.kt)("li",{parentName:"ol"},"The URL Scheme information is automatically filled in with the app name that you previously defined in the ",(0,i.kt)("a",{parentName:"li",href:"/go-mobile/fr/docs/19-R5/project-definition/general"},(0,i.kt)("strong",{parentName:"a"},"General")," page"),". However, you can still edit it:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deep linking Project editor",src:n(13862).Z,width:"2164",height:"1988"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Fill in your ",(0,i.kt)("strong",{parentName:"li"},"On Mobile App Action")," method, for example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'\n// On Mobile App Action database method\n\nvar $1 : Object  // Information provided by mobile application\nvar $0 : Object  // Information returned to mobile application\n\nvar $action : Object\n$action:=MobileAppServer.Action.new($1)\n\nCase of \n\n    : ($1.action="shareContact")\n\n        $0:=$action.shareContext()\n\n    Else \n\n        $0:=New object("success"; False;"statusText"; "Unknown action send to server")\n\nEnd case \n\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Build your app.")),(0,i.kt)("h3",{id:"using-url-schemes-in-you-mobile-app"},"Using URL Schemes in you mobile app"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Action")," button to display all of your currently available actions"),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Share")," action that you previously defined in the project editor"),(0,i.kt)("li",{parentName:"ol"},"A new view appears to allow you to start sharing content"),(0,i.kt)("li",{parentName:"ol"},"Select the share method you want to use"),(0,i.kt)("li",{parentName:"ol"},"Send it.")),(0,i.kt)("h2",{id:"universal-links-1"},"Universal Links"),(0,i.kt)("p",null,"Universal links provide several key benefits that aren't available with custom URL schemes. Specifically, universal links are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Unique"),": Unlike custom URL schemes, universal links can\u2019t be claimed by other apps because they use standard HTTP or HTTPS links to your website.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Secure"),": When users install your app, iOS verifies that your website allows your app to open URLs on its behalf. Only you can create and upload the file granting this permission to your web server, so the association of your website with your app is secure.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Flexible"),": Universal links work even when your app is not installed. In this case, tapping a link to your website opens the content in Safari.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Simple"),": A single URL works for both your website and your app.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Private"),": Other apps can communicate with your app without needing to know if your app is installed."))),(0,i.kt)("h3",{id:"universal-links-in-the-project-editor"},"Universal Links in the Project Editor"),(0,i.kt)("p",null,"To include Universal links into your app, the process is quite similiar to the URL Schemes process:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Share")," predefined action from the ",(0,i.kt)("a",{parentName:"li",href:"/go-mobile/fr/docs/19-R5/project-definition/actions"},(0,i.kt)("strong",{parentName:"a"},"Action")," page")," and select the scope:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"entity - to share a content from a detail form"),(0,i.kt)("li",{parentName:"ul"},"table - to share a list form"))),(0,i.kt)("li",{parentName:"ol"},"Activate the ",(0,i.kt)("strong",{parentName:"li"},"Deep Linking")," feature in the ",(0,i.kt)("strong",{parentName:"li"},"Publishing")," section in the project editor"),(0,i.kt)("li",{parentName:"ol"},"Enter your website URL in the ",(0,i.kt)("strong",{parentName:"li"},"Universal links")," field"),(0,i.kt)("li",{parentName:"ol"},"Fill in your ",(0,i.kt)("strong",{parentName:"li"},"On Mobile App Action")," method, for example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'\n// On Mobile App Action database method\n\nvar $1 : Object  // Information provided by mobile application\nvar $0 : Object  // Information returned to mobile application\n\nvar $action : Object\n$action:=MobileAppServer.Action.new($1)\n\nCase of \n\n    : ($1.action="shareContact")\n\n        $0:=$action.shareContext()\n\n    Else \n\n        $0:=New object("success"; False;"statusText"; "Unknown action send to server")\n\nEnd case \n\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Build your app."),(0,i.kt)("li",{parentName:"ol"},"Trigger universal links from the the ",(0,i.kt)("strong",{parentName:"li"},"On Web Connection")," method, for example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},"// On Web Connection database method\n\nvar $1; $2; $3; $4; $5; $6 : Text\nvar $handler : Object\n\n$handler:=MobileAppServer.WebHandler.new()\nCase of\n    : ($handler.handle($1; $2; $3; $4; $5; $6))\n        // Managed by default mobile code\n    Else\n        // Your web code\nEnd case\n\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"To create a universal link, make sure you use standard ports (80 or 443).")),(0,i.kt)("h2",{id:"deep-linking-and-push-notifications"},"Deep Linking and Push notifications"),(0,i.kt)("p",null,"A great thing about Deep Linking is that it is completely compatible with ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/19-R5/special-features/push-notification"},"push notifications"),". This means that you can send deep links to your users and lead them directly to the right page."),(0,i.kt)("p",null,"As you can see, this feature opens a large range of possibilities. Deep linking is a crucial feature in today\u2019s apps, especially as users consume content faster and faster. This feature brings them directly to the desired location. So we strongly recommend that you use it in your mobile apps."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md"},(0,i.kt)("strong",{parentName:"a"},"4D Mobile App Server")," component documentation")," for more information on how to combine push notifications and deep linking.")))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56537:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4d-for-ios-deeplinking-c8b6031fa5991c5bfef157b6d39d3ccd.gif"},13862:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/deep-linking-project-editor-publishing-section-f55d18b6701cd4898dc2f8a39c4a61fc.png"}}]);