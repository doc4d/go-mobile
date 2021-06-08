(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2892],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69374:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={id:"deep-linking",title:"Deep Linking"},l={unversionedId:"tutorials/features/deep-linking",id:"tutorials/features/deep-linking",isDocsHomePage:!1,title:"Deep Linking",description:"OBJECTIVES",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/features/deep-linking.md",sourceDirName:"tutorials/features",slug:"/tutorials/features/deep-linking",permalink:"/go-mobile/fr/docs/tutorials/features/deep-linking",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/features/deep-linking.md",version:"current",frontMatter:{id:"deep-linking",title:"Deep Linking"},sidebar:"tutorials",previous:{title:"Push notifications",permalink:"/go-mobile/fr/docs/tutorials/features/push-notifications"}},p=[{value:"URL Scheme",id:"url-scheme",children:[]},{value:"Universal links",id:"universal-links",children:[]},{value:"AN OLD BUT EFFICIENT APPROACH",id:"an-old-but-efficient-approach",children:[]},{value:"CUSTOM URL SCHEME IN THE PROJECT EDITOR",id:"custom-url-scheme-in-the-project-editor",children:[]},{value:"USING URL SCHEMES IN YOUR 4D FOR iOS APP",id:"using-url-schemes-in-your-4d-for-ios-app",children:[]},{value:"A MORE MODERN APPROACH",id:"a-more-modern-approach",children:[]},{value:"UNIVERSAL LINKS IN THE PROJECT EDITOR",id:"universal-links-in-the-project-editor",children:[]},{value:"MobileApps folder",id:"mobileapps-folder",children:[]}],s={toc:p};function u(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,i.kt)("p",{parentName:"blockquote"},"Share iOS app content using Deep Linking.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,i.kt)("p",{parentName:"blockquote"},"Apple Developer account")),(0,i.kt)("p",null,"4D v18 R5 includes a new great feature! You're now able to share the content that you're currently viewing with all of your collegues. How does it work?"),(0,i.kt)("p",null,"Here's an illustration demonstrating deep linking:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deep linking animation",src:n(26345).Z})),(0,i.kt)("p",null,"There are two ways to implement deep linking in iOS: ",(0,i.kt)("strong",{parentName:"p"},"URL scheme")," and ",(0,i.kt)("strong",{parentName:"p"},"Universal Links"),". While URL schemes are a well-known method for deep linking, Universal links are the new way that Apple has implemented to easily connect your webpage and your app under the same link."),(0,i.kt)("p",null,"Here's a comparision between the two options which are available in the project editor:"),(0,i.kt)("h2",{id:"url-scheme"},"URL Scheme"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"PROS"),(0,i.kt)("th",{parentName:"tr",align:null},"CONS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Easy to implement"),(0,i.kt)("td",{parentName:"tr",align:null},"Always requires permission")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"No extra backend required"),(0,i.kt)("td",{parentName:"tr",align:null},"Doesn't work if app isn't installed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Doesn't work in Android")))),(0,i.kt)("h2",{id:"universal-links"},"Universal links"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"PROS"),(0,i.kt)("th",{parentName:"tr",align:null},"CONS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Doesn't require permission"),(0,i.kt)("td",{parentName:"tr",align:null},"Static backend with SSL needed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Doesn't open the browser"),(0,i.kt)("td",{parentName:"tr",align:null},"More complex to implement")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Compatible with Android"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Fallback URL if app isn't installed"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h1",{id:"custom-url-scheme"},"CUSTOM URL SCHEME"),(0,i.kt)("h2",{id:"an-old-but-efficient-approach"},"AN OLD BUT EFFICIENT APPROACH"),(0,i.kt)("p",null,"At the simplest level, URL schemes allow users to open an app from other apps."),(0,i.kt)("p",null,"But the true power of URL schemes is in the ability to perform specific actions as your app opens."),(0,i.kt)("h2",{id:"custom-url-scheme-in-the-project-editor"},"CUSTOM URL SCHEME IN THE PROJECT EDITOR"),(0,i.kt)("p",null,"It's very simple to include an URL scheme to your 4D for iOS app:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Share")," predefined action from the ",(0,i.kt)("strong",{parentName:"li"},"Action")," section and select the scope:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"entity - to share content from a detail form"),(0,i.kt)("li",{parentName:"ul"},"table - to share a list form"))),(0,i.kt)("li",{parentName:"ol"},"Activate the ",(0,i.kt)("strong",{parentName:"li"},"Deep Linking")," feature in the ",(0,i.kt)("strong",{parentName:"li"},"Publishing")," section of the project editor"),(0,i.kt)("li",{parentName:"ol"},"The URL Scheme information is automatically filled in with the app name that you previously defined in the ",(0,i.kt)("strong",{parentName:"li"},"General")," section. However, you can still edit it:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deep linking Project editor",src:n(31605).Z})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Fill in your ",(0,i.kt)("strong",{parentName:"li"},"On Mobile App Action")," method"),(0,i.kt)("li",{parentName:"ol"},"Build your app"),(0,i.kt)("li",{parentName:"ol"},"And thats it!")),(0,i.kt)("p",null,"You're now able to share the content that you're currently viewing (whether it's a list or detail form) with all of your collegues!"),(0,i.kt)("p",null,"Here's an example of the ",(0,i.kt)("strong",{parentName:"p"},"On Mobile App Action")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'\nvar $1 : Object  // Informations provided by mobile application\nvar $0 : Object  // Informations returned to mobile application\n\nvar $action : Object\n$action:=MobileAppServer.Action.new($1)\n\nCase of \n\n    : ($1.action="shareContact")\n\n        $0:=$action.shareContext()\n\n    Else \n\n        $0:=New object("success"; False;"statusText"; "Unknown action send to server")\n\nEnd case \n\n')),(0,i.kt)("h2",{id:"using-url-schemes-in-your-4d-for-ios-app"},"USING URL SCHEMES IN YOUR 4D FOR iOS APP"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Action")," button to display all of your currently available actions"),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Share")," action that you previously defined in the project editor"),(0,i.kt)("li",{parentName:"ol"},"A new view appears to allow you to start sharing content"),(0,i.kt)("li",{parentName:"ol"},"Select the share method you want to use"),(0,i.kt)("li",{parentName:"ol"},"Send it!")),(0,i.kt)("h1",{id:"universal-links-1"},"UNIVERSAL LINKS"),(0,i.kt)("h2",{id:"a-more-modern-approach"},"A MORE MODERN APPROACH"),(0,i.kt)("p",null,"Universal links provide several key benefits that aren't available with custom URL schemes. Specifically, universal links are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Unique"),": Unlike custom URL schemes, universal links can\u2019t be claimed by other apps because they use standard HTTP or HTTPS links to your website.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Secure"),": When users install your app, iOS verifies that your website allows your app to open URLs on its behalf. Only you can create and upload the file granting this permission to your web server, so the association of your website with your app is secure.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Flexible"),": Universal links work even when your app is not installed. In this case, tapping a link to your website opens the content in Safari.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Simple"),": A single URL works for both your website and your app.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Private"),": Other apps can communicate with your app without needing to know if your app is installed."))),(0,i.kt)("h2",{id:"universal-links-in-the-project-editor"},"UNIVERSAL LINKS IN THE PROJECT EDITOR"),(0,i.kt)("p",null,"To include Universal links into your app, the process is quite similiar to the URL Schemes process:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Share")," predefined action from the ",(0,i.kt)("strong",{parentName:"li"},"Action")," section and select the scope:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"entity - to share a content from a detail form"),(0,i.kt)("li",{parentName:"ul"},"table - to share a list form"))),(0,i.kt)("li",{parentName:"ol"},"Activate the ",(0,i.kt)("strong",{parentName:"li"},"Deep Linking")," feature in the ",(0,i.kt)("strong",{parentName:"li"},"Publishing")," section in the project editor"),(0,i.kt)("li",{parentName:"ol"},"Enter your website URL in the ",(0,i.kt)("strong",{parentName:"li"},"Universal links")," field"),(0,i.kt)("li",{parentName:"ol"},"Fill in your ",(0,i.kt)("strong",{parentName:"li"},"On Mobile App Action")," method"),(0,i.kt)("li",{parentName:"ol"},"Build your app"),(0,i.kt)("li",{parentName:"ol"},"Trigger universal inks from the the ",(0,i.kt)("strong",{parentName:"li"},"On Web Connection")," method.")),(0,i.kt)("p",null,"Here's an example of the ",(0,i.kt)("strong",{parentName:"p"},"On Web Connection")," method :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},"\nVar $1; $2; $3; $4; $5; $6 : Text\nVar $handler : Object\n\n$handler:=MobileAppServer.WebHandler.new()\nCase of\n    : ($handler.handle($1; $2; $3; $4; $5; $6))\n        // Managed by default mobile code\n    Else\n        // Your web code\nEnd case\n\n")),(0,i.kt)("h1",{id:"push-notification"},"PUSH NOTIFICATION"),(0,i.kt)("p",null,"A great thing about Deep Linking is that it is completely compatible with ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/tutorials/features/push-notifications"},"push notifications"),". This means that you can send Deep links to your users and lead them directly to the right page."),(0,i.kt)("p",null,"As you can see, this feature open a large range of possibilities for using 4D for iOS with minimal effort."),(0,i.kt)("p",null,"Deep linking is a crucial feature in today\u2019s apps, especially as users consume content faster and faster. This feature brings them directly to the desired location. So I strongly recommend that you use it in your 4D for iOS apps."),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/extra-features/push-notification"},"documentation")," for more information on how to manage your push notifications and Deep linking."),(0,i.kt)("h2",{id:"mobileapps-folder"},"MobileApps folder"),(0,i.kt)("p",null,"Whether you're working on Windows or on macOS, you need to copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"4DBASE/MobileApps/ID.BundleID/manifest.json")," file from your Design database to your production database."))}u.isMDXComponent=!0},26345:function(e,t,n){"use strict";t.Z=n.p+"assets/images/4d-for-ios-deeplinking-c8b6031fa5991c5bfef157b6d39d3ccd.gif"},31605:function(e,t,n){"use strict";t.Z=n.p+"assets/images/deep-linking-project-editor-publishing-section-f55d18b6701cd4898dc2f8a39c4a61fc.png"}}]);