(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9022],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return c}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(r),c=n,g=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89028:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var a=r(22122),n=r(19756),o=(r(67294),r(3905)),i=["components"],s={id:"create-data-formatter",title:"Cr\xe9er le format de donn\xe9es"},l=void 0,m={unversionedId:"tutorials/data-formatter/create-data-formatter",id:"version-19-R2/tutorials/data-formatter/create-data-formatter",isDocsHomePage:!1,title:"Cr\xe9er le format de donn\xe9es",description:"OBJECTIFS",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R2/tutorials/data-formatter/create-data-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/create-data-formatter",permalink:"/go-mobile/fr/docs/19-R2/tutorials/data-formatter/create-data-formatter",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/data-formatter/create-data-formatter.md",version:"19-R2",frontMatter:{id:"create-data-formatter",title:"Cr\xe9er le format de donn\xe9es"},sidebar:"version-19-R2/tutorials",previous:{title:"Cr\xe9er et ex\xe9cuter votre projet",permalink:"/go-mobile/fr/docs/19-R2/tutorials/data-formatter/build-and-run"},next:{title:"Filter queries",permalink:"/go-mobile/fr/docs/19-R2/tutorials/filter-queries/filter-query-introduction"}},p=[{value:"T\xe9l\xe9chargez le projet Starter",id:"t\xe9l\xe9chargez-le-projet-starter",children:[]},{value:"Cr\xe9ez le dossier formatters",id:"cr\xe9ez-le-dossier-formatters",children:[]},{value:"Formats des entiers",id:"formats-des-entiers",children:[{value:"Nombre entier vers cha\xeene",id:"nombre-entier-vers-cha\xeene",children:[]},{value:"Nombre entier vers image",id:"nombre-entier-vers-image",children:[]}]},{value:"Formats texte",id:"formats-texte",children:[{value:"Texte vers cha\xeene",id:"texte-vers-cha\xeene",children:[]},{value:"Texte vers image",id:"texte-vers-image",children:[]}]},{value:"Dark mode support",id:"dark-mode-support",children:[{value:"Tintable color",id:"tintable-color",children:[]},{value:"Optimized color pictures",id:"optimized-color-pictures",children:[]}]},{value:"Ouvrir un projet mobile",id:"ouvrir-un-projet-mobile",children:[]},{value:"Build your 4D for iOS app",id:"build-your-4d-for-ios-app",children:[]}],u={toc:p};function d(e){var t=e.components,s=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJECTIFS")),(0,o.kt)("p",{parentName:"blockquote"},"Create your first data formatters.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"CONDITIONS PR\xc9ALABLES")),(0,o.kt)("p",{parentName:"blockquote"},"Cliquez ",(0,o.kt)("inlineCode",{parentName:"p"},"[here](prerequisites.html)")," pour commencer !")),(0,o.kt)("p",null,"Dans ce tutoriel, nous vous guiderons dans la cr\xe9ation de divers exemples de formats."),(0,o.kt)("h2",{id:"t\xe9l\xe9chargez-le-projet-starter"},"T\xe9l\xe9chargez le projet Starter"),(0,o.kt)("p",null,"Pour commencer, t\xe9l\xe9chargez le ",(0,o.kt)("strong",{parentName:"p"},"Projet Starter"),", qui comprend :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Les dossiers ",(0,o.kt)("strong",{parentName:"li"},"integerToImage_Images")," et ",(0,o.kt)("strong",{parentName:"li"},"textToImage_Images"),", qui contiennent des images (\xe0 utiliser ult\xe9rieurement pour les formats contenant des images)"),(0,o.kt)("li",{parentName:"ul"},"Un fichier ",(0,o.kt)("strong",{parentName:"li"},"Task Management.4dbase")," (accompagn\xe9 d'une application de projet mobile pr\xeat \xe0 l'emploi)")),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/archive/66d7eea49bc3353f73dbf784ee06283b3a332d0b.zip"},"Starter project")),(0,o.kt)("p",null,"Vous \xeates maintenant pr\xeats \xe0 cr\xe9er vos premiers formats\xa0!"),(0,o.kt)("h2",{id:"cr\xe9ez-le-dossier-formatters"},"Cr\xe9ez le dossier formatters"),(0,o.kt)("p",null,"Cr\xe9ez d'abord un dossuer ",(0,o.kt)("em",{parentName:"p"},"Task Management.4dbase/Resources/Mobile/formatters"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter folder",src:r(89937).Z})),(0,o.kt)("h2",{id:"formats-des-entiers"},"Formats des entiers"),(0,o.kt)("h3",{id:"nombre-entier-vers-cha\xeene"},"Nombre entier vers cha\xeene"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cr\xe9ez un dossier ",(0,o.kt)("strong",{parentName:"li"},"integerToString")," dans le dossier Formats que vous venez de cr\xe9er."),(0,o.kt)("li",{parentName:"ul"},"Cr\xe9ez ensuite un fichier ",(0,o.kt)("strong",{parentName:"li"},"manifest.json")," dans le dossier ",(0,o.kt)("strong",{parentName:"li"},"integerToString"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter folder",src:r(71657).Z})),(0,o.kt)("p",null,"Voici le contenu du fichier ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToString",\n\n   "type": ["integer"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"0":"UX designer","1":"Developer","2":"QA","3":"Product Owner"}\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"name")," : le nom du format"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"type")," : le type de format 4D que vous souhaitez utiliser"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"binding")," : soit ",(0,o.kt)("strong",{parentName:"li"},"localized text")," pour les cha\xeenes soit ",(0,o.kt)("strong",{parentName:"li"},"imageNamed")," pour les images"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"choiceList")," : valeurs mapp\xe9es")),(0,o.kt)("h3",{id:"nombre-entier-vers-image"},"Nombre entier vers image"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Cr\xe9ez un dossier ",(0,o.kt)("strong",{parentName:"p"},"integerToImage")," dans le dossier ",(0,o.kt)("strong",{parentName:"p"},"Formats")," que vous venez de cr\xe9er.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Cr\xe9ez un fichier ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," dans le dossier ",(0,o.kt)("strong",{parentName:"p"},"textToImage"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter folder",src:r(20732).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cr\xe9ez ensuite un dossier ",(0,o.kt)("strong",{parentName:"li"},"Images")," dans le dossier ",(0,o.kt)("strong",{parentName:"li"},"integerToImage"),". Vous pouvez ajouter les images de ",(0,o.kt)("strong",{parentName:"li"},"integerToImage_Images")," (dans StarterProject.zip) dans ce nouveau dossier.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter images",src:r(68184).Z})),(0,o.kt)("p",null,"Voici le contenu du fichier ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "integerToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},\n\n   "assets": {\n      "size": {\n         "width": 40, "height": 40\n      }\n    }\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"name")," : le nom du format"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"type")," : le type de format 4D que vous souhaitez utiliser"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"binding")," : soit ",(0,o.kt)("strong",{parentName:"li"},"localized text")," pour les cha\xeenes soit ",(0,o.kt)("strong",{parentName:"li"},"imageNamed")," pour les images"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"choiceList")," : valeurs mapp\xe9es"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"assets")," : ajuster la taille d'affichage (largeur et hauteur)")),(0,o.kt)("h2",{id:"formats-texte"},"Formats texte"),(0,o.kt)("h3",{id:"texte-vers-cha\xeene"},"Texte vers cha\xeene"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Cr\xe9ez un dossier ",(0,o.kt)("strong",{parentName:"p"},"textToString")," dans le dossier Formats que vous venez de cr\xe9er.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Cr\xe9ez un fichier ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," dans le dossier ",(0,o.kt)("strong",{parentName:"p"},"textToString"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter folder",src:r(86896).Z})),(0,o.kt)("p",null,"Voici le contenu du fichier ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "textToString",\n\n   "type": ["text"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"FRA":"France","MAR":"Morocco","USA":"United States","AUS":"Australia"}\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"name")," : le nom du format"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"type")," : le type de format 4D que vous souhaitez utiliser"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"binding")," : soit ",(0,o.kt)("strong",{parentName:"li"},"localized text")," pour les cha\xeenes soit ",(0,o.kt)("strong",{parentName:"li"},"imageNamed")," pour les images"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"choiceList")," : valeurs mapp\xe9es")),(0,o.kt)("h3",{id:"texte-vers-image"},"Texte vers image"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Cr\xe9ez un dossier ",(0,o.kt)("strong",{parentName:"p"},"textToImage")," dans le dossier Formats que vous venez de cr\xe9er.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Cr\xe9ez un fichier ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," dans le dossier ",(0,o.kt)("strong",{parentName:"p"},"textToImage"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter folder",src:r(28949).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cr\xe9ez ensuite un dossier ",(0,o.kt)("strong",{parentName:"li"},"Images")," dans le dossier ",(0,o.kt)("strong",{parentName:"li"},"textToImage"),". Vous pouvez ajouter les images de ",(0,o.kt)("strong",{parentName:"li"},"textToImage_Images")," (dans StarterProject.zip) dans ce nouveau dossier.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter images",src:r(97311).Z})),(0,o.kt)("p",null,"Voici le contenu du fichier ",(0,o.kt)("strong",{parentName:"p"},"manifest.json")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "textToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": ["image1.png","image2.png","image3.png"],\n\n   "assets": {\n  "size": {\n   "width": 40, "height": 40\n        }\n    }\n}\n\n')),(0,o.kt)("h2",{id:"dark-mode-support"},"Dark mode support"),(0,o.kt)("p",null,"Whether your device is in dark or light mode, whether you're working on iOS or Android, you can easily use the custom data formatters containing images. The pictures will be adapted depending on the phone's color mode."),(0,o.kt)("h3",{id:"tintable-color"},"Tintable color"),(0,o.kt)("p",null,"To optimize the color contrast of your black and white images on your app depending on the color mode (light or dark), you can set the images as follows, with the ",(0,o.kt)("inlineCode",{parentName:"p"},'"tintable": true')," code line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n   "type": ["text"],\n   "binding": "imageNamed",\n   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},\n   "assets": {\n     "size": 54, \n     "tintable": true\n     }\n}\n')),(0,o.kt)("p",null,"Here is the result in light and dark modes:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Light mode"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Dark mode"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{alt:"Format des donn\xe9es",src:r(74344).Z})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{alt:"Format des donn\xe9es",src:r(99202).Z}))))),(0,o.kt)("h3",{id:"optimized-color-pictures"},"Optimized color pictures"),(0,o.kt)("p",null,"To optimize the color pictures displayed on your app and adapt them to your color mode, you need to have two pictures: one for the light mode, and one for the dark mode suffixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"_dark"),", as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Format des donn\xe9es",src:r(97162).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n   "type": ["text"],\n   "binding": "imageNamed",\n   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},\n   "assets": {\n     "size": 54\n   }\n}\n')),(0,o.kt)("p",null,"Here is the result in light mode and in dark mode:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Light mode"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Dark mode"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{alt:"Format des donn\xe9es",src:r(67130).Z})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{alt:"Format des donn\xe9es",src:r(89090).Z}))))),(0,o.kt)("h2",{id:"ouvrir-un-projet-mobile"},"Ouvrir un projet mobile"),(0,o.kt)("p",null,"Open the Task Management.4dbase with 4D and go to File > open > Mobile Project... to open the ",(0,o.kt)("strong",{parentName:"p"},"Tasks")),(0,o.kt)("p",null,"Next, go to the ",(0,o.kt)("strong",{parentName:"p"},"Labels & Icons section")," in the project editor. All of your formatters are available for the different field types you  previously defined in the different formatter manifest.json files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"S\xe9lectionnez le format ",(0,o.kt)("strong",{parentName:"li"},"integerToString")," pour ",(0,o.kt)("strong",{parentName:"li"},"Job field")),(0,o.kt)("li",{parentName:"ul"},"S\xe9lectionnez le format ",(0,o.kt)("strong",{parentName:"li"},"textToString")," pour ",(0,o.kt)("strong",{parentName:"li"},"Country field")),(0,o.kt)("li",{parentName:"ul"},"S\xe9lectionnez le format ",(0,o.kt)("strong",{parentName:"li"},"integerToImage")," pour ",(0,o.kt)("strong",{parentName:"li"},"Task Status")),(0,o.kt)("li",{parentName:"ul"},"S\xe9lectionnez le format ",(0,o.kt)("strong",{parentName:"li"},"textToImage")," pour ",(0,o.kt)("strong",{parentName:"li"},"Manager"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Text formatter",src:r(5242).Z})),(0,o.kt)("h2",{id:"build-your-4d-for-ios-app"},"Build your 4D for iOS app"),(0,o.kt)("p",null,"Build your 4D of iOS app and you'll see that your data formatter is well applied depending on the credit limit."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Text formatter",src:r(36406).Z})),(0,o.kt)("p",null,"Download the completed formatter template folder:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/releases/latest/download/tutorial-CustomDataFormatter.zip"},"Download")))}d.isMDXComponent=!0},97162:function(e,t,r){"use strict";t.Z=r.p+"assets/images/Architecture-9e5ab4ecd6e08492f157b05f20f727c5.jpg"},99202:function(e,t,r){"use strict";t.Z=r.p+"assets/images/dark-bw-68e482439e9dd8b1f54d5329043a8320.png"},89090:function(e,t,r){"use strict";t.Z=r.p+"assets/images/dark-color-f03b8c9fe0da0586276cfbb4119d738f.png"},20732:function(e,t,r){"use strict";t.Z=r.p+"assets/images/formatter-folder-integertoimage-39a0ceecb09f269914d1bcf37777c2df.png"},71657:function(e,t,r){"use strict";t.Z=r.p+"assets/images/formatter-folder-integertostring-83d572fe95b8bf945181fbe8fae383e0.png"},28949:function(e,t,r){"use strict";t.Z=r.p+"assets/images/formatter-folder-textToImage-90f9d914f42c5aa4ee25b5c480b31202.png"},86896:function(e,t,r){"use strict";t.Z=r.p+"assets/images/formatter-folder-texttostring-a86ce7fb9cec79c633d7142ca0c02c68.png"},89937:function(e,t,r){"use strict";t.Z=r.p+"assets/images/formatter-folder-4de63acd23f172964362bd2e13501739.png"},68184:function(e,t,r){"use strict";t.Z=r.p+"assets/images/formatter-images-integertoimage-9048c8448868dc1029cf8c7b990a942a.png"},97311:function(e,t,r){"use strict";t.Z=r.p+"assets/images/formatter-images-textToImage-2ecef0061028f82c44fd23cdabdab308.png"},36406:function(e,t,r){"use strict";t.Z=r.p+"assets/images/formatters-final-result-69d799b3a619fb518ea7ef3cbf96c8ee.png"},5242:function(e,t,r){"use strict";t.Z=r.p+"assets/images/formatters-icons-&-labels-3967beccfbcde91e00b7e6ec1a69abfb.png"},74344:function(e,t,r){"use strict";t.Z=r.p+"assets/images/light-bw-382eb672557f93f18eb64d0dfa5499d5.png"},67130:function(e,t,r){"use strict";t.Z=r.p+"assets/images/light-color-5b5a9550d2501be2b5ceb9351a104240.png"}}]);