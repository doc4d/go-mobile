(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3832],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23287:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o={},l={unversionedId:"deployment/deployment-in-house-distribute",id:"deployment/deployment-in-house-distribute",isDocsHomePage:!1,title:"deployment-in-house-distribute",description:"img/--- id: deployment-in-house-distribute",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/deployment/deployment-in-house-distribute.md",sourceDirName:"deployment",slug:"/deployment/deployment-in-house-distribute",permalink:"/go-mobile/fr/docs/deployment/deployment-in-house-distribute",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/deployment/deployment-in-house-distribute.md",version:"current",frontMatter:{}},p=[{value:"title: Distribute your app in-House",id:"title-distribute-your-app-in-house",children:[]},{value:"STEP 1. Upload your app",id:"step-1-upload-your-app",children:[]},{value:"STEP 2. Create the installation link",id:"step-2-create-the-installation-link",children:[]},{value:"STEP 3. Install your enterprise app on iOS",id:"step-3-install-your-enterprise-app-on-ios",children:[]}],s={toc:p};function u(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"img/--- id: deployment-in-house-distribute"),(0,a.kt)("h2",{id:"title-distribute-your-app-in-house"},"title: Distribute your app in-House"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,a.kt)("p",{parentName:"blockquote"},"Upload your app to a secured server.")),(0,a.kt)("h2",{id:"step-1-upload-your-app"},"STEP 1. Upload your app"),(0,a.kt)("p",null,"Upload your app files to a secured server:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"assets (display-image and full-size-image)"),(0,a.kt)("li",{parentName:"ul"},"manifest.plist file"),(0,a.kt)("li",{parentName:"ul"},".ipa file")),(0,a.kt)("p",null,"You can use any cloud storage service to distribute your app as soon as it is secured (Dropbox, Google Drive, etc.)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE")),(0,a.kt)("p",{parentName:"blockquote"},"Your asset and ipa URLs must match the URLs defined in your manifest.plist file.")),(0,a.kt)("h2",{id:"step-2-create-the-installation-link"},"STEP 2. Create the installation link"),(0,a.kt)("p",null,"Create an ",(0,a.kt)("strong",{parentName:"p"},"ITMS Serices link")," (iTUnes Music Store) with the full web address of your manifest file as a parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist\n\n")),(0,a.kt)("p",null,"This link can be used when sending emails, embedded in an html page, or even within a QR code."),(0,a.kt)("p",null,"Here is a simple example:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Contact demo app install",src:n(92440).Z})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The QR Code used for this documentation is not active.")),(0,a.kt)("h2",{id:"step-3-install-your-enterprise-app-on-ios"},"STEP 3. Install your enterprise app on iOS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install the app by clicking on the link or scanning a QR Code")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Scan and install",src:n(42593).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When you first open an enterprise app that you've manually installed, a notification will be displayed stating that the developer of the app isn't trusted on your device.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ignore this message and click ",(0,a.kt)("strong",{parentName:"p"},"Cancel"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'In Settings > General > Profiles or Profiles & Device Management, in the "Enterprise App" heading, the profile for the developer is listed.'))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untrust developer",src:n(65777).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tap the name of the developer profile to establish trust for this developer.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Trust-confirmation",src:n(62413).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can then go to your app and open it.")),(0,a.kt)("p",null,"Congratulations ... you can now distribute your first app in-house!"))}u.isMDXComponent=!0},92440:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Contact-demo-app-install-025473814bd8993dc037b8dbaced3e26.png"},42593:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Scan-and-install-b86848f3491e64b031483e4baf8a0a0c.png"},62413:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Trust-confirmation-680259bdd564087ee5a3d3894fc20cf0.png"},65777:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Untrust-developer-e6643a88c92fb4e23fb78d2968ea231a.png"}}]);