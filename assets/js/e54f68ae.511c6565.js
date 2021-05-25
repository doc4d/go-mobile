(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),r=(n(0),n(204)),i={id:"create-contact-app",title:"Contact App"},l={unversionedId:"tutorials/creating-ios-app/create-contact-app",id:"tutorials/creating-ios-app/create-contact-app",isDocsHomePage:!1,title:"Contact App",description:"OBJECTIVES",source:"@site/docs/tutorials/creating-ios-app/create-contact-app.md",slug:"/tutorials/creating-ios-app/create-contact-app",permalink:"/go-mobile/docs/tutorials/creating-ios-app/create-contact-app",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/creating-ios-app/create-contact-app.md",version:"current",sidebar:"tutorials",previous:{title:"First Tutorial Page",permalink:"/go-mobile/docs/tutorials/first-page"},next:{title:"Custom Login Form",permalink:"/go-mobile/docs/tutorials/creating-ios-app/custom-login-form"}},c=[{value:"STEP 1. Getting started",id:"step-1-getting-started",children:[]},{value:"STEP 2. Creating the project",id:"step-2-creating-the-project",children:[]},{value:"STEP 3. Opening the Project Editor",id:"step-3-opening-the-project-editor",children:[]},{value:"STEP 4. Sections - General",id:"step-4-sections---general",children:[]},{value:"STEP 5. Sections - Structure",id:"step-5-sections---structure",children:[]},{value:"STEP 6. Sections - Icons &amp; Labels",id:"step-6-sections---icons--labels",children:[]},{value:"STEP 7. Sections - Main Menu",id:"step-7-sections---main-menu",children:[]},{value:"STEP 8. Sections - Forms",id:"step-8-sections---forms",children:[]},{value:"STEP 9. Build the app",id:"step-9-build-the-app",children:[]},{value:"STEP 10. Where to go from here?",id:"step-10-where-to-go-from-here",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"OBJECTIVES")),Object(r.b)("p",{parentName:"blockquote"},"Create your first app with 4D for iOS")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"PREREQUISITES")),Object(r.b)("p",{parentName:"blockquote"},"Click ",Object(r.b)("inlineCode",{parentName:"p"},"[here](prerequisites.html)")," to see what you'll need to get started!")),Object(r.b)("p",null,"This tutorial will let you dive right into 4D for iOS development. It will allow you to quickly and easily create your first application."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Scenario: You're a commercial business manager and you want to consult your contact information on the go.")),Object(r.b)("p",null,"We're going to create an iPhone directory app to search for contact names from a list and then view the details of each contact. We'll call it \"Contact\". "),Object(r.b)("h2",{id:"step-1-getting-started"},"STEP 1. Getting started"),Object(r.b)("p",null,"Download our Starter project, which contains a database file and project icon, but no mobile project yet:"),Object(r.b)("div",{style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},Object(r.b)("a",{className:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-ContactApp/archive/acbb699c3c9d9edd3a8bbb715e87c17140b7e15f.zip"},"Starter project")),Object(r.b)("h2",{id:"step-2-creating-the-project"},"STEP 2. Creating the project"),Object(r.b)("p",null,"Let's start with a very simple structure using a single table. From 4D, go to ",Object(r.b)("strong",{parentName:"p"},"New > Mobile project"),"."),Object(r.b)("p",null,"Give your project a name and click ",Object(r.b)("strong",{parentName:"p"},"Create"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"![Project Creation](assets/en/contact-app/Project-creation-4D-for-iOS.png)")),Object(r.b)("h2",{id:"step-3-opening-the-project-editor"},"STEP 3. Opening the Project Editor"),Object(r.b)("p",null,"Welcome to 4D for iOS! The Welcome screen displays the main app-creation stages of this magnificent tool. \ud83d\ude42"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"![Welcome Screen](assets/en/contact-app/Welcome-Screen-4D-for-iOS.png)")),Object(r.b)("p",null,"Click ",Object(r.b)("strong",{parentName:"p"},"Continue"),"."),Object(r.b)("h2",{id:"step-4-sections---general"},"STEP 4. Sections - General"),Object(r.b)("p",null,"Here, you'll configure your app's primary information:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Organization:")," Enter the name of your company and the application's identifier (ex. \u201cMy Company\u201d and com.MyCompany)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Product:"),' Enter your app\'s name. Let\u2019s call this one "Contact".'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"ID:")," (Bundle ID) is automatically generated as a composition of your organization identifier and product name."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Version:")," Leave the version as 1.0 and define your app's copyright. It's highly recommended to use the formats provided by 4D for iOS."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Icons:")," Drag and drop an icon for your app into the icon area."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Developer:")," This is automatically filled from the user name on your computer. Copy/paste your developer team reference (from your developer account) into the Team field. You can also leave it empty to build your application on the Simulator only.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"![General](assets/en/contact-app/Contact-app-general-section-4D-for-iOS.png)")),Object(r.b)("h2",{id:"step-5-sections---structure"},"STEP 5. Sections - Structure"),Object(r.b)("p",null,"This is where you'll define a subset of your data (the database tables and fields) to expose to mobile devices."),Object(r.b)("p",null,"For our example, select ",Object(r.b)("strong",{parentName:"p"},"ID"),", ",Object(r.b)("strong",{parentName:"p"},"First Name"),", ",Object(r.b)("strong",{parentName:"p"},"Last Name"),", ",Object(r.b)("strong",{parentName:"p"},"Job"),", ",Object(r.b)("strong",{parentName:"p"},"Company"),", ",Object(r.b)("strong",{parentName:"p"},"Phone"),", ",Object(r.b)("strong",{parentName:"p"},"Notes")," and ",Object(r.b)("strong",{parentName:"p"},"Photo"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"NOTE")),Object(r.b)("p",{parentName:"blockquote"},"We highly recommend publishing your primary key in order to identify each record of your database")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"![Structure](assets/en/contact-app/Contact-app-structure-section-4D-for-iOS.png)")),Object(r.b)("h2",{id:"step-6-sections---icons--labels"},"STEP 6. Sections - Icons & Labels"),Object(r.b)("p",null,"Now it's time to define some labels and icons for the selected tables and fields."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Table Properties:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Define a short and a long label for your Contact table"),Object(r.b)("li",{parentName:"ul"},"Click on the icon field. The icon library will appear and you can select an icon to illustrate the Contacts table.\nYou can also opt to leave the icon field empty. 4D for iOS will generate a default icon for you!")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Field Properties:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Define a short and a long label for your selected fields."),Object(r.b)("li",{parentName:"ul"},"Click on the icon field and select icons for each field. There are several options for field icons:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"You can select an icon for each field,"),Object(r.b)("li",{parentName:"ul"},"If at least one icon has been defined and other fields are left empty, 4D for iOS will generate default icons for you"),Object(r.b)("li",{parentName:"ul"},"You can simply leave them empty to not display any field icons. ")))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"![Icons & Labels](assets/en/contact-app/Contact-app-icons-labels-section-4D-for-iOS.png)")),Object(r.b)("h2",{id:"step-7-sections---main-menu"},"STEP 7. Sections - Main Menu"),Object(r.b)("p",null,"Next up is defining the order of the tables in the app's main menu."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Available Tables:")," Displays the table(s) to be used."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Selected Tables:")," Displays your app's menu items. Even though our example has only one item, you can drag and drop your items to reorder them.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"![Main Menu](assets/en/contact-app/Contact-app-main-menu-section-4D-for-iOS.png)")),Object(r.b)("h2",{id:"step-8-sections---forms"},"STEP 8. Sections - Forms"),Object(r.b)("p",null,"We're almost done, but first we need to decide on the app's layout. There are both List and Details forms to choose from."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Select a list form template to display your table as a list. For our Contact app, let\u2019s use the ",Object(r.b)("strong",{parentName:"li"},"Profile")," template.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"![List form template](assets/en/contact-app/ListformTemplate-form-section-4D-for-iOS.png)")),Object(r.b)("p",null,"At this point, the bottom of the configuration window has changed from template selection to content definition."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Drag and drop the fields you want displayed onto the template, ",Object(r.b)("i",null,"i.e."),", Last Name into the search and Title fields. The Search and Section fields are optional, leave the Section field empty for the moment.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"![List form content](assets/en/contact-app/ListformContent-form-section-4D-for-iOS.png)")),Object(r.b)("p",null,"And finally, we'll define the detail form. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Select a template that is best suited for your app. For our Contact app, let\u2019s use the ",Object(r.b)("strong",{parentName:"li"},"Visual Contact"),"template.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"![Detail form template](assets/en/contact-app/DetailformTemplate-form-section-4D-for-iOS.png)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Drag and drop the content onto the appropriate places on the detail form template, ",Object(r.b)("i",null,"i.e."),", First Name, Last Name, and Photo.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"![Detail form content](assets/en/contact-app/DetailformContent-form-section-4D-for-iOS.png)")),Object(r.b)("h2",{id:"step-9-build-the-app"},"STEP 9. Build the app"),Object(r.b)("p",null,"Now the fun part! It's time to build your app and test it on the Simulator to see the final result!"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click the ",Object(r.b)("strong",{parentName:"li"},"Build")," tab."),Object(r.b)("li",{parentName:"ul"},"Select a device to use as a Simulator by clicking on the device button."),Object(r.b)("li",{parentName:"ul"},"Click  ",Object(r.b)("strong",{parentName:"li"},"Build and Run"),"."),Object(r.b)("li",{parentName:"ul"},"Wait a few seconds and \u2026. voila! Your iOS app is alive!")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"![Build and Run](assets/en/contact-app/Build-the-app-simulator.png)")),Object(r.b)("h2",{id:"step-10-where-to-go-from-here"},"STEP 10. Where to go from here?"),Object(r.b)("p",null,"We've covered basic app creation in this tutorial, and you should now be able to create simple apps on your own. But wait - there\u2019s more! In the next tutorial, you\u2019ll learn how to build an even more complex app.\nClick on ",Object(r.b)("strong",{parentName:"p"},"Final Project")," below to download the final Contact app."),Object(r.b)("div",{style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},Object(r.b)("a",{className:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-ContactApp/releases/latest/download/tutorial-ContactApp.zip"},"FINAL PROJECT")))}s.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||r;return n?o.a.createElement(d,l(l({ref:t},p),{},{components:n})):o.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);