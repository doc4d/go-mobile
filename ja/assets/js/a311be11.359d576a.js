"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8538],{51916:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const o={id:"create-static-data-formatter",title:"Create a static data formatter"},l=void 0,i={unversionedId:"tutorials/data-formatter/create-static-data-formatter",id:"version-19-R5/tutorials/data-formatter/create-static-data-formatter",title:"Create a static data formatter",description:"OBJECTIVES",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R5/tutorials/data-formatter/create-static-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/create-static-data-formatter",permalink:"/ja/docs/19-R5/tutorials/data-formatter/create-static-data-formatter",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/data-formatter/create-static-formatter.md",tags:[],version:"19-R5",frontMatter:{id:"create-static-data-formatter",title:"Create a static data formatter"},sidebar:"tutorials",previous:{title:"Update a template",permalink:"/ja/docs/19-R5/tutorials/gallery/update-gallery-template"},next:{title:"Swift \u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f5c\u6210\u3059\u308b",permalink:"/ja/docs/19-R5/tutorials/data-formatter/create-swift-formatter"}},s={},m=[{value:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",id:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",level:2},{value:"formatters \u30d5\u30a9\u30eb\u30c0\u3092\u4f5c\u6210",id:"formatters-\u30d5\u30a9\u30eb\u30c0\u3092\u4f5c\u6210",level:2},{value:"\u6574\u6570\u7528\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",id:"\u6574\u6570\u7528\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",level:2},{value:"\u6574\u6570\u304b\u3089\u6587\u5b57\u5217\u3078",id:"\u6574\u6570\u304b\u3089\u6587\u5b57\u5217\u3078",level:3},{value:"\u6574\u6570\u304b\u3089\u753b\u50cf\u3078",id:"\u6574\u6570\u304b\u3089\u753b\u50cf\u3078",level:3},{value:"\u30c6\u30ad\u30b9\u30c8\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",id:"\u30c6\u30ad\u30b9\u30c8\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",level:2},{value:"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u6587\u5b57\u5217\u3078",id:"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u6587\u5b57\u5217\u3078",level:3},{value:"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u753b\u50cf\u3078",id:"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u753b\u50cf\u3078",level:3},{value:"Dark mode support",id:"dark-mode-support",level:2},{value:"Tintable color",id:"tintable-color",level:3},{value:"Optimized color pictures",id:"optimized-color-pictures",level:3},{value:"\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f",id:"\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f",level:2},{value:"Build your 4D for iOS app",id:"build-your-4d-for-ios-app",level:2}],p={toc:m};function d(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,n.kt)("p",{parentName:"blockquote"},"Create your first data formatters.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,n.kt)("p",{parentName:"blockquote"},"Click ",(0,n.kt)("a",{parentName:"p",href:"requirements.html"},"here")," to see what you'll need to get started!")),(0,n.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u69d8\u3005\u306a\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u306e\u4f8b\u3092\u4f5c\u6210\u3057\u3066\u3044\u304f\u3053\u3068\u3092\u6848\u5185\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"From the ",(0,n.kt)("strong",{parentName:"p"},"Labels & Icons")," section, you can choose pre-packaged formats."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Available formats:")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Text"),": Text"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Date"),": Date, Short date, Long date, Full date"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Time"),": Time, Short time, Duration, Integer number"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Boolean"),': "No" or "Yes", "False" or "True"'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Integer"),": Integer number, Decimal number, Real number, Percentage, Ordinal number, Currency $, Currency \u20ac, Currency \xa5, Spell Out"))),(0,n.kt)("p",null,"Let's get started by downloading the Starter project:"),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-DataFormatter/releases/latest/download/tutorial-DataFormatter.zip"},"Download")),(0,n.kt)("h2",{id:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"},"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,n.kt)("p",null,"To begin, download the ",(0,n.kt)("strong",{parentName:"p"},"Starter project"),", which includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"integerToImage_Images")," and ",(0,n.kt)("strong",{parentName:"li"},"textToImage_Images")," folders that contain images (to use later for formatters that include images)"),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"Task Management.4dbase")," file (with a ready to use mobile app project)")),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/archive/66d7eea49bc3353f73dbf784ee06283b3a332d0b.zip"},"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")),(0,n.kt)("p",null,"\u3053\u308c\u3067\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f5c\u6210\u3059\u308b\u6e96\u5099\u304c\u6574\u3044\u307e\u3057\u305f\uff01"),(0,n.kt)("h2",{id:"formatters-\u30d5\u30a9\u30eb\u30c0\u3092\u4f5c\u6210"},"formatters \u30d5\u30a9\u30eb\u30c0\u3092\u4f5c\u6210"),(0,n.kt)("p",null,"First, create a ",(0,n.kt)("em",{parentName:"p"},"Task Management.4dbase/Resources/Mobile/formatters")," folder."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatter \u30d5\u30a9\u30eb\u30c0\u30fc",src:a(73161).Z,width:"929",height:"367"})),(0,n.kt)("h2",{id:"\u6574\u6570\u7528\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc"},"\u6574\u6570\u7528\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc"),(0,n.kt)("h3",{id:"\u6574\u6570\u304b\u3089\u6587\u5b57\u5217\u3078"},"\u6574\u6570\u304b\u3089\u6587\u5b57\u5217\u3078"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create an ",(0,n.kt)("strong",{parentName:"li"},"integerToString")," folder in the formatters folder you've just created."),(0,n.kt)("li",{parentName:"ul"},"Then create a ",(0,n.kt)("strong",{parentName:"li"},"manifest.json")," file in the ",(0,n.kt)("strong",{parentName:"li"},"integerToString")," folder.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatter \u30d5\u30a9\u30eb\u30c0\u30fc",src:a(92492).Z,width:"1130",height:"367"})),(0,n.kt)("p",null,"Let's look at the contents of the ",(0,n.kt)("strong",{parentName:"p"},"manifest.json")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToString",\n\n   "type": ["integer"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"0":"UX designer","1":"Developer","2":"QA","3":"Product Owner"}\n}\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"name"),": the name of the formatter"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"type"),": the 4D format type you want to use"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"binding"),": can be ",(0,n.kt)("strong",{parentName:"li"},"localized text")," for strings or ",(0,n.kt)("strong",{parentName:"li"},"imageNamed")," for images"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"choiceList"),": mapped values")),(0,n.kt)("h3",{id:"\u6574\u6570\u304b\u3089\u753b\u50cf\u3078"},"\u6574\u6570\u304b\u3089\u753b\u50cf\u3078"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create an ",(0,n.kt)("strong",{parentName:"p"},"integerToImage")," folder in the ",(0,n.kt)("strong",{parentName:"p"},"formatters")," folder you've created.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create a ",(0,n.kt)("strong",{parentName:"p"},"manifest.json")," file in the ",(0,n.kt)("strong",{parentName:"p"},"integerToImage")," folder."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatter \u30d5\u30a9\u30eb\u30c0\u30fc",src:a(78854).Z,width:"966",height:"367"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Then create an ",(0,n.kt)("strong",{parentName:"li"},"Images")," folder in the ",(0,n.kt)("strong",{parentName:"li"},"integerToImage")," folder. You can add the images from the ",(0,n.kt)("strong",{parentName:"li"},"integerToImage_Images")," in the StarterProject.zip to this new folder.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3067\u4f7f\u7528\u3059\u308b\u753b\u50cf",src:a(17761).Z,width:"1119",height:"367"})),(0,n.kt)("p",null,"Let's look at the contents of the ",(0,n.kt)("strong",{parentName:"p"},"manifest.json")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},\n\n   "assets": {\n      "size": {\n         "width": 40, "height": 40\n      }\n   }\n}\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"name"),": the name of the formatter"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"type")," : the 4D format type you want to use"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"binding"),": can be ",(0,n.kt)("strong",{parentName:"li"},"localized text")," for strings or ",(0,n.kt)("strong",{parentName:"li"},"imageNamed")," for images"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"choiceList"),": mapped values"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"assets"),": adjust the display size (width and height)")),(0,n.kt)("h2",{id:"\u30c6\u30ad\u30b9\u30c8\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc"},"\u30c6\u30ad\u30b9\u30c8\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc"),(0,n.kt)("h3",{id:"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u6587\u5b57\u5217\u3078"},"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u6587\u5b57\u5217\u3078"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create a ",(0,n.kt)("strong",{parentName:"p"},"textToString")," folder in the formatters folder you've just created.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create a ",(0,n.kt)("strong",{parentName:"p"},"manifest.json")," file in the ",(0,n.kt)("strong",{parentName:"p"},"textToString")," folder."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatter \u30d5\u30a9\u30eb\u30c0\u30fc",src:a(38567).Z,width:"967",height:"367"})),(0,n.kt)("p",null,"Let's look at the contents of the ",(0,n.kt)("strong",{parentName:"p"},"manifest.json")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToString",\n\n   "type": ["text"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"FRA":"France","MAR":"Morocco","USA":"United States","AUS":"Australia"}\n}\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"name"),": the name of the formatter"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"type"),": the 4D format type you want to use"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"binding"),": can be ",(0,n.kt)("strong",{parentName:"li"},"localized text")," for strings or ",(0,n.kt)("strong",{parentName:"li"},"imageNamed")," for images"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"choiceList"),": mapped values")),(0,n.kt)("h3",{id:"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u753b\u50cf\u3078"},"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u753b\u50cf\u3078"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create a ",(0,n.kt)("strong",{parentName:"p"},"textToImage")," folder in the formatters folder you've just created.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create a ",(0,n.kt)("strong",{parentName:"p"},"manifest.json")," file in the ",(0,n.kt)("strong",{parentName:"p"},"textToImage")," folder."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatter \u30d5\u30a9\u30eb\u30c0\u30fc",src:a(33981).Z,width:"971",height:"367"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Then create an ",(0,n.kt)("strong",{parentName:"li"},"Images")," folder in the ",(0,n.kt)("strong",{parentName:"li"},"textToImage")," folder. You can add the images from the ",(0,n.kt)("strong",{parentName:"li"},"textToImage_Images")," in the StarterProject.zip to this new folder.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3067\u4f7f\u7528\u3059\u308b\u753b\u50cf",src:a(87477).Z,width:"1133",height:"367"})),(0,n.kt)("p",null,"Let's look at the contents of the ",(0,n.kt)("strong",{parentName:"p"},"manifest.json")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": ["image1.png","image2.png","image3.png"],\n\n   "assets": {\n  "size": {\n   "width": 40, "height": 40\n      }\n   }\n}\n\n')),(0,n.kt)("h2",{id:"dark-mode-support"},"Dark mode support"),(0,n.kt)("p",null,"Whether your device is in dark or light mode, whether you're working on iOS or Android, you can easily use the custom data formatters containing images. The pictures will be adapted depending on the phone's color mode."),(0,n.kt)("h3",{id:"tintable-color"},"Tintable color"),(0,n.kt)("p",null,"To optimize the color contrast of your black and white images on your app depending on the color mode (light or dark), you can set the images as follows, with the ",(0,n.kt)("inlineCode",{parentName:"p"},'"tintable": true')," code line:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n   "type": ["text"],\n   "binding": "imageNamed",\n   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},\n   "assets": {\n     "size": 54, \n     "tintable": true\n     }\n}\n')),(0,n.kt)("p",null,"Here is the result in light and dark modes:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Light mode"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Dark mode"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",src:a(79955).Z,width:"231",height:"500"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",src:a(75714).Z,width:"231",height:"500"}))))),(0,n.kt)("h3",{id:"optimized-color-pictures"},"Optimized color pictures"),(0,n.kt)("p",null,"To optimize the color pictures displayed on your app and adapt them to your color mode, you need to have two pictures: one for the light mode, and one for the dark mode suffixed with ",(0,n.kt)("inlineCode",{parentName:"p"},"_dark"),", as follows:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",src:a(6965).Z,width:"1280",height:"720"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n   "type": ["text"],\n   "binding": "imageNamed",\n   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},\n   "assets": {\n     "size": 54\n   }\n}\n')),(0,n.kt)("p",null,"Here is the result in light mode and in dark mode:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Light mode"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Dark mode"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",src:a(23735).Z,width:"1170",height:"2532"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",src:a(27773).Z,width:"1170",height:"2532"}))))),(0,n.kt)("h2",{id:"\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f"},"\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f"),(0,n.kt)("p",null,"Open the Task Management.4dbase with 4D and go to File > open > Mobile Project... to open the ",(0,n.kt)("strong",{parentName:"p"},"Tasks")),(0,n.kt)("p",null,"Next, go to the ",(0,n.kt)("strong",{parentName:"p"},"Labels & Icons section")," in the project editor. All of your formatters are available for the different field types you  previously defined in the different formatter manifest.json files:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"integerToString")," formatter for the ",(0,n.kt)("strong",{parentName:"li"},"Job field")),(0,n.kt)("li",{parentName:"ul"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"textToString")," formatter for the ",(0,n.kt)("strong",{parentName:"li"},"Country field")),(0,n.kt)("li",{parentName:"ul"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"integerToImage")," formatter for the ",(0,n.kt)("strong",{parentName:"li"},"Task Status")),(0,n.kt)("li",{parentName:"ul"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"textToImage")," formatter for the ",(0,n.kt)("strong",{parentName:"li"},"Manager"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Text formatter",src:a(96193).Z,width:"1082",height:"994"})),(0,n.kt)("h2",{id:"build-your-4d-for-ios-app"},"Build your 4D for iOS app"),(0,n.kt)("p",null,"Build your 4D of iOS app and you'll see that your data formatter is well applied depending on the credit limit."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Text formatter",src:a(19401).Z,width:"1417",height:"992"})),(0,n.kt)("p",null,"Download the completed formatter template folder:"),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/releases/latest/download/tutorial-CustomDataFormatter.zip"},"Download")),(0,n.kt)("p",null,"And you're done!"))}d.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),m=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=m(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),g=m(a),c=n,u=g["".concat(s,".").concat(c)]||g[c]||d[c]||o;return a?r.createElement(u,l(l({ref:e},p),{},{components:a})):r.createElement(u,l({ref:e},p))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6965:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/Architecture-9e5ab4ecd6e08492f157b05f20f727c5.jpg"},75714:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/dark-bw-68e482439e9dd8b1f54d5329043a8320.png"},27773:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/dark-color-f03b8c9fe0da0586276cfbb4119d738f.png"},78854:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/formatter-folder-integertoimage-39a0ceecb09f269914d1bcf37777c2df.png"},92492:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/formatter-folder-integertostring-83d572fe95b8bf945181fbe8fae383e0.png"},33981:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/formatter-folder-textToImage-90f9d914f42c5aa4ee25b5c480b31202.png"},38567:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/formatter-folder-texttostring-a86ce7fb9cec79c633d7142ca0c02c68.png"},73161:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/formatter-folder-4de63acd23f172964362bd2e13501739.png"},17761:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/formatter-images-integertoimage-9048c8448868dc1029cf8c7b990a942a.png"},87477:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/formatter-images-textToImage-2ecef0061028f82c44fd23cdabdab308.png"},19401:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/formatters-final-result-69d799b3a619fb518ea7ef3cbf96c8ee.png"},96193:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/formatters-icons-&-labels-3967beccfbcde91e00b7e6ec1a69abfb.png"},79955:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/light-bw-382eb672557f93f18eb64d0dfa5499d5.png"},23735:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/light-color-5b5a9550d2501be2b5ceb9351a104240.png"}}]);