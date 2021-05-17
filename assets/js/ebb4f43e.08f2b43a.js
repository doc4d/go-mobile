(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(159)),o={id:"deep-linking",title:"Deep Linking"},l={unversionedId:"extra-features/deep-linking",id:"extra-features/deep-linking",isDocsHomePage:!1,title:"Deep Linking",description:"OBJECTIVES",source:"@site/docs/extra-features/deep-linking.md",slug:"/extra-features/deep-linking",permalink:"/go-mobile/docs/extra-features/deep-linking",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/extra-features/deep-linking.md",version:"current",sidebar:"mySidebar",previous:{title:"Structure",permalink:"/go-mobile/docs/project-definition/structure"},next:{title:"Email authentication",permalink:"/go-mobile/docs/extra-features/email-authentication"}},c=[{value:"URL Scheme",id:"url-scheme",children:[]},{value:"Universal links",id:"universal-links",children:[]},{value:"AN OLD BUT EFFICIENT APPROACH",id:"an-old-but-efficient-approach",children:[]},{value:"CUSTOM URL SCHEME IN THE PROJECT EDITOR",id:"custom-url-scheme-in-the-project-editor",children:[]},{value:"USING URL SCHEMES IN YOUR 4D FOR iOS APP",id:"using-url-schemes-in-your-4d-for-ios-app",children:[]},{value:"A MORE MODERN APPROACH",id:"a-more-modern-approach",children:[]},{value:"UNIVERSAL LINKS IN THE PROJECT EDITOR",id:"universal-links-in-the-project-editor",children:[]},{value:"MobileApps folder",id:"mobileapps-folder",children:[]}],b={toc:c};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"OBJECTIVES")),Object(i.b)("p",{parentName:"blockquote"},"Share iOS app content using Deep Linking.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"PREREQUISITES")),Object(i.b)("p",{parentName:"blockquote"},"Apple Developer account")),Object(i.b)("p",null,"4D v18 R5 includes a new great feature! You're now able to share the content that you're currently viewing with all of your collegues. How does it work?"),Object(i.b)("p",null,"Here's an illustration demonstrating deep linking:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Deep linking animation",src:n(424).default})),Object(i.b)("p",null,"There are two ways to implement deep linking in iOS: ",Object(i.b)("strong",{parentName:"p"},"URL scheme")," and ",Object(i.b)("strong",{parentName:"p"},"Universal Links"),". While URL schemes are a well-known method for deep linking, Universal links are the new way that Apple has implemented to easily connect your webpage and your app under the same link."),Object(i.b)("p",null,"Here's a comparision between the two options which are available in the project editor:"),Object(i.b)("h2",{id:"url-scheme"},"URL Scheme"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"PROS"),Object(i.b)("th",{parentName:"tr",align:null},"CONS"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Easy to implement"),Object(i.b)("td",{parentName:"tr",align:null},"Always requires permission")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"No extra backend required"),Object(i.b)("td",{parentName:"tr",align:null},"Doesn't work if app isn't installed")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Doesn't work in Android")))),Object(i.b)("h2",{id:"universal-links"},"Universal links"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"PROS"),Object(i.b)("th",{parentName:"tr",align:null},"CONS"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Doesn't require permission"),Object(i.b)("td",{parentName:"tr",align:null},"Static backend with SSL needed")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Doesn't open the browser"),Object(i.b)("td",{parentName:"tr",align:null},"More complex to implement")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Compatible with Android"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Fallback URL if app isn't installed"),Object(i.b)("td",{parentName:"tr",align:null})))),Object(i.b)("h1",{id:"custom-url-scheme"},"CUSTOM URL SCHEME"),Object(i.b)("h2",{id:"an-old-but-efficient-approach"},"AN OLD BUT EFFICIENT APPROACH"),Object(i.b)("p",null,"At the simplest level, URL schemes allow users to open an app from other apps. "),Object(i.b)("p",null,"But the true power of URL schemes is in the ability to perform specific actions as your app opens."),Object(i.b)("h2",{id:"custom-url-scheme-in-the-project-editor"},"CUSTOM URL SCHEME IN THE PROJECT EDITOR"),Object(i.b)("p",null,"It's very simple to include an URL scheme to your 4D for iOS app:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Select the ",Object(i.b)("strong",{parentName:"li"},"Share")," predefined action from the ",Object(i.b)("strong",{parentName:"li"},"Action")," section and select the scope: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"entity - to share content from a detail form  "),Object(i.b)("li",{parentName:"ul"},"table - to share a list form"))),Object(i.b)("li",{parentName:"ol"},"Activate the ",Object(i.b)("strong",{parentName:"li"},"Deep Linking")," feature in the ",Object(i.b)("strong",{parentName:"li"},"Publishing")," section of the project editor"),Object(i.b)("li",{parentName:"ol"},"The URL Scheme information is automatically filled in with the app name that you previously defined in the ",Object(i.b)("strong",{parentName:"li"},"General")," section. However, you can still edit it:")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Deep linking Project editor",src:n(425).default})),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Fill in your ",Object(i.b)("strong",{parentName:"li"},"On Mobile App Action")," method "),Object(i.b)("li",{parentName:"ol"},"Build your app"),Object(i.b)("li",{parentName:"ol"},"And thats it!")),Object(i.b)("p",null,"You're now able to share the content that you're currently viewing (whether it's a list or detail form) with all of your collegues!"),Object(i.b)("p",null,"Here's an example of the ",Object(i.b)("strong",{parentName:"p"},"On Mobile App Action")," method:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-4d"},'\nvar $1 : Object  // Informations provided by mobile application\nvar $0 : Object  // Informations returned to mobile application\n\nvar $action : Object\n$action:=MobileAppServer.Action.new($1)\n\nCase of \n\n    : ($1.action="shareContact")\n        \n        $0:=$action.shareContext()\n\n    Else \n        \n        $0:=New object("success"; False;"statusText"; "Unknown action send to server")\n\nEnd case \n\n')),Object(i.b)("h2",{id:"using-url-schemes-in-your-4d-for-ios-app"},"USING URL SCHEMES IN YOUR 4D FOR iOS APP"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Click on the ",Object(i.b)("strong",{parentName:"li"},"Action")," button to display all of your currently available actions "),Object(i.b)("li",{parentName:"ol"},"Select the ",Object(i.b)("strong",{parentName:"li"},"Share")," action that you previously defined in the project editor"),Object(i.b)("li",{parentName:"ol"},"A new view appears to allow you to start sharing content"),Object(i.b)("li",{parentName:"ol"},"Select the share method you want to use "),Object(i.b)("li",{parentName:"ol"},"Send it!")),Object(i.b)("h1",{id:"universal-links-1"},"UNIVERSAL LINKS"),Object(i.b)("h2",{id:"a-more-modern-approach"},"A MORE MODERN APPROACH"),Object(i.b)("p",null,"Universal links provide several key benefits that aren't available with custom URL schemes. Specifically, universal links are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Unique"),": Unlike custom URL schemes, universal links can\u2019t be claimed by other apps because they use standard HTTP or HTTPS links to your website.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Secure"),": When users install your app, iOS verifies that your website allows your app to open URLs on its behalf. Only you can create and upload the file granting this permission to your web server, so the association of your website with your app is secure.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Flexible"),": Universal links work even when your app is not installed. In this case, tapping a link to your website opens the content in Safari.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Simple"),": A single URL works for both your website and your app.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Private"),": Other apps can communicate with your app without needing to know if your app is installed."))),Object(i.b)("h2",{id:"universal-links-in-the-project-editor"},"UNIVERSAL LINKS IN THE PROJECT EDITOR"),Object(i.b)("p",null,"To include Universal links into your app, the process is quite similiar to the URL Schemes process:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Select the ",Object(i.b)("strong",{parentName:"li"},"Share")," predefined action from the ",Object(i.b)("strong",{parentName:"li"},"Action")," section and select the scope: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"entity - to share a content from a detail form "),Object(i.b)("li",{parentName:"ul"},"table - to share a list form"))),Object(i.b)("li",{parentName:"ol"},"Activate the ",Object(i.b)("strong",{parentName:"li"},"Deep Linking")," feature in the ",Object(i.b)("strong",{parentName:"li"},"Publishing")," section in the project editor"),Object(i.b)("li",{parentName:"ol"},"Enter your website URL in the ",Object(i.b)("strong",{parentName:"li"},"Universal links")," field"),Object(i.b)("li",{parentName:"ol"},"Fill in your ",Object(i.b)("strong",{parentName:"li"},"On Mobile App Action")," method "),Object(i.b)("li",{parentName:"ol"},"Build your app"),Object(i.b)("li",{parentName:"ol"},"Trigger universal inks from the the ",Object(i.b)("strong",{parentName:"li"},"On Web Connection")," method.")),Object(i.b)("p",null,"Here's an example of the ",Object(i.b)("strong",{parentName:"p"},"On Web Connection")," method :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-4d"},"\nVar $1; $2; $3; $4; $5; $6 : Text\nVar $handler : Object\n\n$handler:=MobileAppServer.WebHandler.new()\nCase of\n    : ($handler.handle($1; $2; $3; $4; $5; $6))\n        // Managed by default mobile code\n    Else\n        // Your web code\nEnd case\n\n")),Object(i.b)("h1",{id:"push-notification"},"PUSH NOTIFICATION"),Object(i.b)("p",null,"A great thing about Deep Linking is that it is completely compatible with ","[push notifications]",Object(i.b)("inlineCode",{parentName:"p"},"(features-push-notification.html)"),". This means that you can send Deep links to your users and lead them directly to the right page."),Object(i.b)("p",null,"As you can see, this feature open a large range of possibilities for using 4D for iOS with minimal effort."),Object(i.b)("p",null,"Deep linking is a crucial feature in today\u2019s apps, especially as users consume content faster and faster. This feature brings them directly to the desired location. So I strongly recommend that you use it in your 4D for iOS apps."),Object(i.b)("p",null,"The documentation is ",Object(i.b)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/18R4/Documentation/Classes/PushNotification.md"},"here")," to help you manage your push notifications and Deep linking."),Object(i.b)("h2",{id:"mobileapps-folder"},"MobileApps folder"),Object(i.b)("p",null,"Whether you're working on Windows or on macOS, you need to copy the 4DBASE/MobileApps/ID.BundleID/manifest.json file from your Design database to your production database.  "))}p.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return n?r.a.createElement(d,l(l({ref:t},b),{},{components:n})):r.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},424:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/4d-for-ios-deeplinking-c8b6031fa5991c5bfef157b6d39d3ccd.gif"},425:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/deep-linking-project-editor-publishing-section-f55d18b6701cd4898dc2f8a39c4a61fc.png"}}]);