(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9597],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,l=t.originalType,s=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),d=c(n),m=i,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(k,o(o({ref:e},p),{},{components:n})):a.createElement(k,o({ref:e},p))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=n.length,o=new Array(l);o[0]=d;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r.mdxType="string"==typeof t?t:i,o[1]=r;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36505:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(22122),i=n(19756),l=(n(67294),n(3905)),o=["components"],r={id:"adding-actions-template",title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"},s=void 0,c={unversionedId:"tutorials/actions/adding-actions-template",id:"tutorials/actions/adding-actions-template",isDocsHomePage:!1,title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",description:"OBJECTIVES",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/actions/adding-actions-template.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/adding-actions-template",permalink:"/go-mobile/ja/docs/next/tutorials/actions/adding-actions-template",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/actions/adding-actions-template.md",version:"current",frontMatter:{id:"adding-actions-template",title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"},sidebar:"tutorials",previous:{title:"\u306f\u3058\u3081\u3066\u306e\u30a2\u30af\u30b7\u30e7\u30f3",permalink:"/go-mobile/ja/docs/next/tutorials/actions/define-first-action"},next:{title:"\u30a2\u30af\u30b7\u30e7\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u7528\u3059\u308b",permalink:"/go-mobile/ja/docs/next/tutorials/actions/using-action-parameters"}},p=[{value:"\u2488 \u2488 Download the Starter project",id:"\u2488-\u2488-download-the-starter-project",children:[]},{value:"\u2489 \u2489 4D for iOS \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b",id:"\u2489-\u2489-4d-for-ios-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b",children:[]},{value:"\u248a \u248a \u30ea\u30b9\u30c8\u753b\u9762\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",id:"\u248a-\u248a-\u30ea\u30b9\u30c8\u753b\u9762\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",children:[{value:"TasksList \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",id:"taskslist-\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",children:[]},{value:"TasksCollection \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",id:"taskscollection-\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",children:[]}]},{value:"\u248b \u248b \u8a73\u7d30\u753b\u9762\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",id:"\u248b-\u248b-\u8a73\u7d30\u753b\u9762\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",children:[]}],u={toc:p};function d(t){var e=t.components,r=(0,i.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,l.kt)("p",{parentName:"blockquote"},"Add actions to custom List and Detail forms templates.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,l.kt)("p",{parentName:"blockquote"},"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"[here](prerequisites.html)")," to see what you'll need to get started!")),(0,l.kt)("p",null,"In this tutorial, we are going to see how easy it can be to ",(0,l.kt)("strong",{parentName:"p"},"add actions to custom templates"),"."),(0,l.kt)("h2",{id:"\u2488-\u2488-download-the-starter-project"},"\u2488 \u2488 Download the Starter project"),(0,l.kt)("p",null,"To begin, download the ",(0,l.kt)("strong",{parentName:"p"},"Starter project"),", which includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"two custom List form templates (TasksList and TasksCollection)"),(0,l.kt)("li",{parentName:"ul"},"a custom Detail form template (TasksDetail)"),(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\uff08Tasks.4dbase\uff09")),(0,l.kt)("div",{className:"center-button"},(0,l.kt)("a",{class:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/archive/1dc5aecfbea62a9999d571cb1a956f1ef6983111.zip"},"Download")),(0,l.kt)("h2",{id:"\u2489-\u2489-4d-for-ios-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b"},"\u2489 \u2489 4D for iOS \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("p",null,"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"TasksList")," and ",(0,l.kt)("strong",{parentName:"li"},"TasksCollection")," template folders in ",(0,l.kt)("em",{parentName:"li"},"Tasks.4dbase/Resources/Mobile/form/list")," folder")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30ea\u30b9\u30c8\u753b\u9762\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",src:n(21286).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"TasksDetail")," template folders in ",(0,l.kt)("em",{parentName:"li"},"Tasks.4dbase/Resources/Mobile/form/detail folder"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u8a73\u7d30\u753b\u9762\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",src:n(9708).Z})),(0,l.kt)("h2",{id:"\u248a-\u248a-\u30ea\u30b9\u30c8\u753b\u9762\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"},"\u248a \u248a \u30ea\u30b9\u30c8\u753b\u9762\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("p",null,"Two types of actions are available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"table actions"),(0,l.kt)("li",{parentName:"ul"},"entity actions")),(0,l.kt)("p",null,"Let's first open the ",(0,l.kt)("inlineCode",{parentName:"p"},"list/TasksList/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard")," file."),(0,l.kt)("h3",{id:"taskslist-\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"},"TasksList \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("h4",{id:"\uff41-\uff41-\u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b"},"\uff21 \uff21 \u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("p",null,"Select the ",(0,l.kt)("strong",{parentName:"p"},"List form Controller")," and add this line in the ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___TABLE_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u306e\u8ffd\u52a0",src:n(93264).Z})),(0,l.kt)("h4",{id:"\uff42-\uff42-\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b"},"\uff22 \uff22 \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("p",null,"Select the Animatable Table View and add this line in the ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u306e\u8ffd\u52a0",src:n(23753).Z})),(0,l.kt)("p",null,"\u3053\u308c\u3067\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u30a2\u30af\u30b7\u30e7\u30f3\u5bfe\u5fdc\u306b\u306a\u308a\u307e\u3057\u305f\uff01"),(0,l.kt)("p",null,"You can select the TaskList custom template from the ",(0,l.kt)("strong",{parentName:"p"},"Forms section")," and add the following fields:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u300c\u30d5\u30a9\u30fc\u30e0\u300d\u30bb\u30af\u30b7\u30e7\u30f3\uff08Taskslist\uff09",src:n(91853).Z})),(0,l.kt)("p",null,"\u7d9a\u3051\u3066 TasksCollection \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u3082\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3057\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("h3",{id:"taskscollection-\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"},"TasksCollection \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("p",null,"To do so, open the ",(0,l.kt)("inlineCode",{parentName:"p"},"list/TasksCollection/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard")," file."),(0,l.kt)("h4",{id:"\uff41-\uff41-\u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b-1"},"\uff21 \uff21 \u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("p",null,"\u4f5c\u696d\u306f TasksList \u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u5834\u5408\u306b\u3088\u304f\u4f3c\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"Select the ",(0,l.kt)("strong",{parentName:"p"},"List form Controller")," and add this line in the ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___TABLE_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30ea\u30b9\u30c8\u753b\u9762\u306b\u30c6\u30fc\u30d6\u30eb\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0",src:n(2929).Z})),(0,l.kt)("h4",{id:"\uff42-\uff42-\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b-1"},"\uff22 \uff22 \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("p",null,"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8868\u793a\u3059\u308b\u65b9\u6cd5\u306f\u30ea\u30b9\u30c8\u5f62\u5f0f\u306e TableView \u3068\u30b0\u30ea\u30c3\u30c9\u5f62\u5f0f\u306e CollectionViews \u3067\u306f\u7570\u306a\u308a\u307e\u3059\u3002 \u5f8c\u8005\u306f\u30b9\u30ef\u30a4\u30d7\u64cd\u4f5c\u306b\u4e0d\u5411\u304d\u3067\u3059\u3002"),(0,l.kt)("p",null,"So with collection views, the best way to display actions is to use a ",(0,l.kt)("strong",{parentName:"p"},"long pressure")," gesture on the cells you want to interact with."),(0,l.kt)("p",null,"For that, select the collectionView cell and add this line in the ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30ea\u30b9\u30c8\u753b\u9762\u306b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0",src:n(6837).Z})),(0,l.kt)("p",null,"To optimize the interaction rendering, you can add a scale effect with a haptic feedback adding the following line in the ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"touch.zoomScale")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"Number")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"0,96")," (adapt the scale ratio depending on the result you want to get)")),(0,l.kt)("p",null,"You can select the TasksCollection custom template from the ",(0,l.kt)("strong",{parentName:"p"},"Forms section")," and add the following fields:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u300c\u30d5\u30a9\u30fc\u30e0\u300d\u30bb\u30af\u30b7\u30e7\u30f3\uff08TasksCollection\uff09",src:n(36037).Z})),(0,l.kt)("h2",{id:"\u248b-\u248b-\u8a73\u7d30\u753b\u9762\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"},"\u248b \u248b \u8a73\u7d30\u753b\u9762\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b"),(0,l.kt)("p",null,"In Detail forms, you can use the ",(0,l.kt)("strong",{parentName:"p"},"generic button")," in the navigation bar or ",(0,l.kt)("strong",{parentName:"p"},"create easily your own custom action button"),". \u3069\u3061\u3089\u3082\u30bf\u30b0\u3092\u633f\u5165\u3059\u308b\u3060\u3051\u3067\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"For generic button embedded in the navigation bar, select the Controller and add this line in the ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u8a73\u7d30\u753b\u9762\u306b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a2\u30af\u30b7\u30e7\u30f3\u30bf\u30b0\u3092\u8ffd\u52a0",src:n(34522).Z})),(0,l.kt)("p",null,"In our tutorial, we want to build our own generic button. For that, open the ",(0,l.kt)("inlineCode",{parentName:"p"},"detail/TasksDetail/Sources/Forms/Tables/___TABLE___/___TABLE___DetailsForm.storyboard")," file."),(0,l.kt)("p",null,"Open it, select the button at bottom right and add this line in the ",(0,l.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key Path: ",(0,l.kt)("inlineCode",{parentName:"li"},"actions")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"String")),(0,l.kt)("li",{parentName:"ul"},"Value: ",(0,l.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u8a73\u7d30\u753b\u9762\u306b\u30ab\u30b9\u30bf\u30e0\u30a2\u30af\u30b7\u30e7\u30f3\u30dc\u30bf\u30f3\u3092\u8ffd\u52a0",src:n(84536).Z})),(0,l.kt)("p",null,"\u753b\u9762\u306b\u300c\u306f\u3066\u306a\u30de\u30fc\u30af\u300d\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304b\u3089\u660e\u3089\u304b\u306a\u3088\u3046\u306b\uff0c\u3053\u306e\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u306b\u306f\u30dc\u30bf\u30f3\u306e\u753b\u50cf\u304c\u4e0d\u8db3\u3057\u3066\u3044\u307e\u3059\u3002 You can actually find those visuals in the  ",(0,l.kt)("strong",{parentName:"p"},"Resources folder")," template. \u3053\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u306f\uff0c\u30d3\u30eb\u30c9\u3092\u5b9f\u884c\u3059\u308c\u3070\uff0c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30b3\u30d4\u30fc\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"For example for the ",(0,l.kt)("strong",{parentName:"p"},"moreButton.imageset"),":"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u95a2\u9023\u30d5\u30a1\u30a4\u30eb",src:n(8305).Z})),(0,l.kt)("p",null,"You can select the TasksDetail custom template from the ",(0,l.kt)("strong",{parentName:"p"},"Forms section")," and add the following fields:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u300c\u30d5\u30a9\u30fc\u30e0\u300d\u30bb\u30af\u30b7\u30e7\u30f3\uff08TasksDetail\uff09",src:n(387).Z})),(0,l.kt)("p",null,"\u5b8c\u6210\u3057\u305fiOS\u30a2\u30d7\u30ea\u306f\uff0c\u30ea\u30b9\u30c8\u753b\u9762\u3068\u8a73\u7d30\u753b\u9762\u304c\u4e21\u65b9\u3068\u3082\u30a2\u30af\u30b7\u30e7\u30f3\u5bfe\u5fdc\u306b\u306a\u308a\u307e\u3057\u305f\uff01"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u95a2\u9023\u30d5\u30a1\u30a4\u30eb",src:n(46316).Z})),(0,l.kt)("p",null,"Download the completed project:"),(0,l.kt)("div",{className:"center-button"},(0,l.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/releases/latest/download/tutorial-AddingActionToTemplates.zip"},"Download")))}d.isMDXComponent=!0},6837:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Add-collection-entity-tag-taskslist-3f04e0602db0b304b72fb6ccfcb19b4e.png"},2929:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Add-collection-table-tag-taskslist-36f6728e233cbadd86070781b08e978b.png"},23753:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Add-entity-tag-taskslist-f451a9760f86a118e99afc27fc80edf3.png"},93264:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Add-table-tag-taskslist-8d2cbcb005e17c5e11ebc6fad5c21655.png"},84536:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Detail-form-action-custom-action-Button-dce7734160980e4471815a31dde1720e.png"},34522:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Detail-form-action-navigationBar-7ff5b86ac2040d091e2bc18a51d41c62.png"},9708:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Detailform-template-12ade6ee5a4eb693cbf014faf59c56a5.png"},46316:function(t,e,n){"use strict";e.Z=n.p+"assets/images/ListForm-entity-action-tableview-c4ca8838892967fd5df82c8271e4090b.png"},21286:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Listform-templates-09ed1c5a3ff901a807ff3ead04d0ada7.png"},8305:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Template-Ressources-db10d9e26011ee4ab1652752eedb6b32.png"},387:function(t,e,n){"use strict";e.Z=n.p+"assets/images/detailform-forms-section-8159e555c94e2e4d36da5d27329ec148.png"},36037:function(t,e,n){"use strict";e.Z=n.p+"assets/images/listform-taskscollection-forms-section-09fa057f109a221cd927c4c4496e308c.png"},91853:function(t,e,n){"use strict";e.Z=n.p+"assets/images/listform-taskslist-forms-section-c3786fcf5144780d2bc741888fd62dc1.png"}}]);