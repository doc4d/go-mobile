(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{120:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return m}));var a=r(3),n=r(7),o=(r(0),r(204)),i={id:"create-data-formatter",title:"Create data formatter"},l={unversionedId:"tutorials/data-formatter/create-data-formatter",id:"tutorials/data-formatter/create-data-formatter",isDocsHomePage:!1,title:"Create data formatter",description:"OBJECTIVES",source:"@site/docs/tutorials/data-formatter/create-data-formatter.md",slug:"/tutorials/data-formatter/create-data-formatter",permalink:"/go-mobile/fr/docs/tutorials/data-formatter/create-data-formatter",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/data-formatter/create-data-formatter.md",version:"current",sidebar:"tutorials",previous:{title:"Build and Run your project",permalink:"/go-mobile/fr/docs/tutorials/data-formatter/build-and-run"},next:{title:"Multi-criteria Search",permalink:"/go-mobile/fr/docs/tutorials/multi-criteria-search/multi-criteria-search"}},b=[{value:"Download the Starter project",id:"download-the-starter-project",children:[]},{value:"Create the formatters folder",id:"create-the-formatters-folder",children:[]},{value:"Integer formatters",id:"integer-formatters",children:[{value:"Integer to string",id:"integer-to-string",children:[]},{value:"Integer to image",id:"integer-to-image",children:[]}]},{value:"Text formatters",id:"text-formatters",children:[{value:"Text to string",id:"text-to-string",children:[]},{value:"Text to image",id:"text-to-image",children:[]}]},{value:"Open mobile project",id:"open-mobile-project",children:[]},{value:"Build your 4D for iOS app",id:"build-your-4d-for-ios-app",children:[]}],c={toc:b};function m(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"OBJECTIVES")),Object(o.b)("p",{parentName:"blockquote"},"Create your first data formatters.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"PREREQUISITES")),Object(o.b)("p",{parentName:"blockquote"},"Click ",Object(o.b)("inlineCode",{parentName:"p"},"[here](prerequisites.html)")," to see what you'll need to get started!")),Object(o.b)("p",null,"In this tutorial, we'll guide you through the creation of various formatter examples."),Object(o.b)("h2",{id:"download-the-starter-project"},"Download the Starter project"),Object(o.b)("p",null,"To begin, download the ",Object(o.b)("strong",{parentName:"p"},"Starter project"),", which includes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"integerToImage_Images")," and ",Object(o.b)("strong",{parentName:"li"},"textToImage_Images")," folders that contain images (to use later for formatters that include images)"),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"Task Management.4dbase")," file (with a ready to use mobile app project)")),Object(o.b)("div",{style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},Object(o.b)("a",{className:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-CustomDataFormatter/archive/66d7eea49bc3353f73dbf784ee06283b3a332d0b.zip"},"CUSTOM FORMATTER Starter project")),Object(o.b)("p",null,"You're now ready to create your first formatters!"),Object(o.b)("h2",{id:"create-the-formatters-folder"},"Create the formatters folder"),Object(o.b)("p",null,"First, create a ",Object(o.b)("em",{parentName:"p"},"Task Management.4dbase/Resources/Mobile/formatters")," folder."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"![Formatter folder](assets/en/custom-formatter/formatter-folder.png)")),Object(o.b)("h2",{id:"integer-formatters"},"Integer formatters"),Object(o.b)("h3",{id:"integer-to-string"},"Integer to string"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create an ",Object(o.b)("strong",{parentName:"li"},"integerToString")," folder in the formatters folder you've just created."),Object(o.b)("li",{parentName:"ul"},"Then create a ",Object(o.b)("strong",{parentName:"li"},"manifest.json")," file in the ",Object(o.b)("strong",{parentName:"li"},"integerToString")," folder.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"![Formatter folder](assets/en/custom-formatter/formatter-folder-integertostring.png)")),Object(o.b)("p",null,"Let's look at the contents of the ",Object(o.b)("strong",{parentName:"p"},"manifest.json")," file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToString",\n\n   "type": ["integer"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"0":"UX designer","1":"Developer","2":"QA","3":"Product Owner"}\n}\n')),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"name"),": the name of the formatter"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"type"),": the 4D format type you want to use"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"binding"),": can be ",Object(o.b)("strong",{parentName:"li"},"localized text")," for strings or ",Object(o.b)("strong",{parentName:"li"},"imageNamed")," for images"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"choiceList"),": mapped values")),Object(o.b)("h3",{id:"integer-to-image"},"Integer to image"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create an ",Object(o.b)("strong",{parentName:"p"},"integerToImage")," folder in the ",Object(o.b)("strong",{parentName:"p"},"formatters")," folder you've created.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create a ",Object(o.b)("strong",{parentName:"p"},"manifest.json")," file in the ",Object(o.b)("strong",{parentName:"p"},"integerToImage")," folder."))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"![Formatter folder](assets/en/custom-formatter/formatter-folder-integertoimage.png)")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Then create an ",Object(o.b)("strong",{parentName:"li"},"Images")," folder in the ",Object(o.b)("strong",{parentName:"li"},"integerToImage")," folder. You can add the images from the ",Object(o.b)("strong",{parentName:"li"},"integerToImage_Images")," in the StarterProject.zip to this new folder.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"![Formatter images](assets/en/custom-formatter/formatter-images-integertoimage.png)")),Object(o.b)("p",null,"Let's look at the contents of the ",Object(o.b)("strong",{parentName:"p"},"manifest.json")," file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "integerToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},\n\n   "assets": {\n      "size": {\n         "width": 40, "height": 40\n      }\n    }\n}\n')),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"name"),": the name of the formatter"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"type")," : the 4D format type you want to use"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"binding"),": can be ",Object(o.b)("strong",{parentName:"li"},"localized text")," for strings or ",Object(o.b)("strong",{parentName:"li"},"imageNamed")," for images"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"choiceList"),": mapped values"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"assets"),": adjust the display size (width and height)")),Object(o.b)("h2",{id:"text-formatters"},"Text formatters"),Object(o.b)("h3",{id:"text-to-string"},"Text to string"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create a ",Object(o.b)("strong",{parentName:"p"},"textToString")," folder in the formatters folder you've just created.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create a ",Object(o.b)("strong",{parentName:"p"},"manifest.json")," file in the ",Object(o.b)("strong",{parentName:"p"},"textToString")," folder."))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"![Formatter folder](assets/en/custom-formatter/formatter-folder-texttostring.png)")),Object(o.b)("p",null,"Let's look at the contents of the ",Object(o.b)("strong",{parentName:"p"},"manifest.json")," file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "textToString",\n\n   "type": ["text"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"FRA":"France","MAR":"Morocco","USA":"United States","AUS":"Australia"}\n}\n')),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"name"),": the name of the formatter"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"type"),": the 4D format type you want to use"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"binding"),": can be ",Object(o.b)("strong",{parentName:"li"},"localized text")," for strings or ",Object(o.b)("strong",{parentName:"li"},"imageNamed")," for images"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"choiceList"),": mapped values")),Object(o.b)("h3",{id:"text-to-image"},"Text to image"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create a ",Object(o.b)("strong",{parentName:"p"},"textToImage")," folder in the formatters folder you've just created.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create a ",Object(o.b)("strong",{parentName:"p"},"manifest.json")," file in the ",Object(o.b)("strong",{parentName:"p"},"textToImage")," folder."))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"![Formatter folder](assets/en/custom-formatter/formatter-folder-textToImage.png)")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Then create an ",Object(o.b)("strong",{parentName:"li"},"Images")," folder in the ",Object(o.b)("strong",{parentName:"li"},"textToImage")," folder. You can add the images from the ",Object(o.b)("strong",{parentName:"li"},"textToImage_Images")," in the StarterProject.zip to this new folder.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"![Formatter images](assets/en/custom-formatter/formatter-images-textToImage.png)")),Object(o.b)("p",null,"Let's look at the contents of the ",Object(o.b)("strong",{parentName:"p"},"manifest.json")," file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "textToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": ["image1.png","image2.png","image3.png"],\n\n   "assets": {\n  "size": {\n   "width": 40, "height": 40\n        }\n    }\n}\n\n')),Object(o.b)("h2",{id:"open-mobile-project"},"Open mobile project"),Object(o.b)("p",null,"Open the Task Management.4dbase with 4D and go to File > open > Mobile Project... to open the ",Object(o.b)("strong",{parentName:"p"},"Tasks")),Object(o.b)("p",null,"Next, go to the ",Object(o.b)("strong",{parentName:"p"},"Labels & Icons section")," in the project editor. All of your formatters are available for the different field types you  previously defined in the different formatter manifest.json files:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Select the ",Object(o.b)("strong",{parentName:"li"},"integerToString")," formatter for the ",Object(o.b)("strong",{parentName:"li"},"Job field")),Object(o.b)("li",{parentName:"ul"},"Select the ",Object(o.b)("strong",{parentName:"li"},"textToString")," formatter for the ",Object(o.b)("strong",{parentName:"li"},"Country field")),Object(o.b)("li",{parentName:"ul"},"Select the ",Object(o.b)("strong",{parentName:"li"},"integerToImage")," formatter for the ",Object(o.b)("strong",{parentName:"li"},"Task Status")),Object(o.b)("li",{parentName:"ul"},"Select the ",Object(o.b)("strong",{parentName:"li"},"textToImage")," formatter for the ",Object(o.b)("strong",{parentName:"li"},"Manager"))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"![Text formatter](assets/en/custom-formatter/formatters-icons-&-labels.png)")),Object(o.b)("h2",{id:"build-your-4d-for-ios-app"},"Build your 4D for iOS app"),Object(o.b)("p",null,"Build your 4D of iOS app and you'll see that your data formatter is well applied depending on the credit limit."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"![Text formatter](assets/en/custom-formatter/formatters-final-result.png)")),Object(o.b)("p",null,"Click on ",Object(o.b)("strong",{parentName:"p"},"FORMATTER FINAL")," below to download the completed formatter template folder."),Object(o.b)("div",{style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},Object(o.b)("a",{className:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-CustomDataFormatter/releases/latest/download/tutorial-CustomDataFormatter.zip"},"FORMATTER FINAL")))}m.isMDXComponent=!0},204:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return g}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),m=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=m(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=m(r),u=a,g=s["".concat(i,".").concat(u)]||s[u]||p[u]||o;return r?n.a.createElement(g,l(l({ref:t},c),{},{components:r})):n.a.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);