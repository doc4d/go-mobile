"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[189],{34408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"deployment-in-house-distribute",title:"Distribute your app in-House"},o=void 0,l={unversionedId:"deployment/deployment-in-house-distribute",id:"version-19-R2/deployment/deployment-in-house-distribute",title:"Distribute your app in-House",description:"OBJECTIVES",source:"@site/versioned_docs/version-19-R2/deployment/deployment-in-house-distribute.md",sourceDirName:"deployment",slug:"/deployment/deployment-in-house-distribute",permalink:"/go-mobile/docs/19-R2/deployment/deployment-in-house-distribute",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/deployment/deployment-in-house-distribute.md",tags:[],version:"19-R2",frontMatter:{id:"deployment-in-house-distribute",title:"Distribute your app in-House"},sidebar:"version-19-R2/docs",previous:{title:"Archive and export your Project",permalink:"/go-mobile/docs/19-R2/deployment/deployment-in-house-archive-and-export"},next:{title:"Create App Store record",permalink:"/go-mobile/docs/19-R2/deployment/deploy-on-app-store-create-appstore-record"}},p={},s=[{value:"STEP 1. Upload your app",id:"step-1-upload-your-app",level:2},{value:"STEP 2. Create the installation link",id:"step-2-create-the-installation-link",level:2},{value:"STEP 3. Install your enterprise app on iOS",id:"step-3-install-your-enterprise-app-on-ios",level:2}],u={toc:s};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,r.kt)("p",{parentName:"blockquote"},"Upload your app to a secured server.")),(0,r.kt)("h2",{id:"step-1-upload-your-app"},"STEP 1. Upload your app"),(0,r.kt)("p",null,"Upload your app files to a secured server:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"assets (display-image and full-size-image)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"manifest.plist")," file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".ipa")," file")),(0,r.kt)("p",null,"You can use any cloud storage service to distribute your app as soon as it is secured (Dropbox, Google Drive, etc.)."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Your asset and ipa URLs must match the URLs defined in your ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.plist")," file."))),(0,r.kt)("h2",{id:"step-2-create-the-installation-link"},"STEP 2. Create the installation link"),(0,r.kt)("p",null,"Create an ",(0,r.kt)("strong",{parentName:"p"},"ITMS Serices link")," (iTUnes Music Store) with the full web address of your manifest file as a parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist\n\n")),(0,r.kt)("p",null,"This link can be used when sending emails, embedded in an html page, or even within a QR code."),(0,r.kt)("p",null,"Here is a simple example:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Contact demo app install",src:n(65343).Z,width:"497",height:"625"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The QR Code used for this documentation is not active.")),(0,r.kt)("h2",{id:"step-3-install-your-enterprise-app-on-ios"},"STEP 3. Install your enterprise app on iOS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install the app by clicking on the link or scanning a QR Code")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Scan and install",src:n(18245).Z,width:"2443",height:"2149"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When you first open an enterprise app that you've manually installed, a notification will be displayed stating that the developer of the app isn't trusted on your device. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ignore this message and click ",(0,r.kt)("strong",{parentName:"p"},"Cancel"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'In Settings > General > Profiles or Profiles & Device Management, in the "Enterprise App" heading, the profile for the developer is listed.'))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untrust developer",src:n(9097).Z,width:"2443",height:"2149"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tap the name of the developer profile to establish trust for this developer.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Trust-confirmation",src:n(18381).Z,width:"2443",height:"2149"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can then go to your app and open it.")),(0,r.kt)("p",null,"Congratulations... you can now distribute your app in-house."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},65343:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Contact-demo-app-install-025473814bd8993dc037b8dbaced3e26.png"},18245:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Scan-and-install-b86848f3491e64b031483e4baf8a0a0c.png"},18381:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Trust-confirmation-680259bdd564087ee5a3d3894fc20cf0.png"},9097:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untrust-developer-e6643a88c92fb4e23fb78d2968ea231a.png"}}]);