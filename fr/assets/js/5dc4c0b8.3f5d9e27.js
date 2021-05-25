(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{126:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return a})),o.d(t,"toc",(function(){return u})),o.d(t,"default",(function(){return p}));var r=o(3),n=o(7),i=(o(0),o(204)),c={id:"working-with-xcode",title:"Working with Xcode"},a={unversionedId:"tutorials/customizing-with-xcode/working-with-xcode",id:"tutorials/customizing-with-xcode/working-with-xcode",isDocsHomePage:!1,title:"Working with Xcode",description:"OBJECTIVES",source:"@site/docs/tutorials/customizing-with-xcode/working-with-xcode.md",slug:"/tutorials/customizing-with-xcode/working-with-xcode",permalink:"/go-mobile/fr/docs/tutorials/customizing-with-xcode/working-with-xcode",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/customizing-with-xcode/working-with-xcode.md",version:"current",sidebar:"tutorials",previous:{title:"Xcode",permalink:"/go-mobile/fr/docs/tutorials/customizing-with-xcode/what-is-xcode"},next:{title:"Xcode Overview",permalink:"/go-mobile/fr/docs/tutorials/customizing-with-xcode/xcode-overview"}},u=[{value:"STEP 1. Generate your iOS Project",id:"step-1-generate-your-ios-project",children:[]},{value:"STEP 2. Build your Project",id:"step-2-build-your-project",children:[]},{value:"STEP 3. Open your Project with Xcode",id:"step-3-open-your-project-with-xcode",children:[]}],l={toc:u};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"OBJECTIVES")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"Open a 4D for iOS project from the Project Editor."),Object(i.b)("li",{parentName:"ul"},"Customize the generated 4D for iOS app."))),Object(i.b)("p",null,"4D for iOS generates a native iOS app for you which you can modify and customize with Xcode. Let's take a look at the process!"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"NOTE")),Object(i.b)("p",{parentName:"blockquote"},"If you customize your project on Xcode and rebuild it from the Project Editor All of your modifications will be lost!")),Object(i.b)("p",null,"We'll use the Contact application we created ",Object(i.b)("inlineCode",{parentName:"p"},"[here](contact-app.html)"),".\nDownload the Starter project:\n",Object(i.b)("inlineCode",{parentName:"p"},"Button commented to avoid broken link")),Object(i.b)("h2",{id:"step-1-generate-your-ios-project"},"STEP 1. Generate your iOS Project"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If your haven't built your project yet, go to step 2."),Object(i.b)("li",{parentName:"ul"},"If you've already built your project, go to step 3.")),Object(i.b)("h2",{id:"step-2-build-your-project"},"STEP 2. Build your Project"),Object(i.b)("p",null,"From the Project Editor BUILD tab:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Select the device to use as a Simulator by clicking on the device button."),Object(i.b)("li",{parentName:"ul"},"Click the ",Object(i.b)("strong",{parentName:"li"},"Build and Run")," button.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"![Build and Run](assets/en/customize-with-xcode/build-and-run-4D-for-iOS.png)")),Object(i.b)("h2",{id:"step-3-open-your-project-with-xcode"},"STEP 3. Open your Project with Xcode"),Object(i.b)("p",null,"From the Project Editor BUILD tab:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click on Project > Open the project with Xcode")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"![Open your Project with Xcode](assets/en/customize-with-xcode/Open-your-project-Xcode-4D-for-iOS.png)")),Object(i.b)("p",null,"Now you're ready to start working on your 4D for iOS project in Xcode, keep reading to learn how!"))}p.isMDXComponent=!0},204:function(e,t,o){"use strict";o.d(t,"a",(function(){return b})),o.d(t,"b",(function(){return m}));var r=o(0),n=o.n(r);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},b=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=p(o),s=r,m=b["".concat(c,".").concat(s)]||b[s]||d[s]||i;return o?n.a.createElement(m,a(a({ref:t},l),{},{components:o})):n.a.createElement(m,a({ref:t},l))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,c=new Array(i);c[0]=s;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=o[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,o)}s.displayName="MDXCreateElement"}}]);