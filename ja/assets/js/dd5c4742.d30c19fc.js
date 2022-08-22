"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[416],{10626:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={id:"create-static-data-formatter",title:"\u9759\u7684\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f5c\u6210\u3059\u308b"},l=void 0,o={unversionedId:"tutorials/data-formatter/create-static-data-formatter",id:"version-19-R6/tutorials/data-formatter/create-static-data-formatter",title:"\u9759\u7684\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f5c\u6210\u3059\u308b",description:"\u76ee\u6a19",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R6/tutorials/data-formatter/create-static-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/create-static-data-formatter",permalink:"/go-mobile/ja/docs/tutorials/data-formatter/create-static-data-formatter",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/data-formatter/create-static-formatter.md",tags:[],version:"19-R6",frontMatter:{id:"create-static-data-formatter",title:"\u9759\u7684\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f5c\u6210\u3059\u308b"},sidebar:"tutorials",previous:{title:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f7f\u7528\u3059\u308b",permalink:"/go-mobile/ja/docs/tutorials/data-formatter/use-data-formatter"},next:{title:"Swift \u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f5c\u6210\u3059\u308b",permalink:"/go-mobile/ja/docs/tutorials/data-formatter/create-swift-formatter"}},s={},m=[{value:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",id:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",level:2},{value:"formatters \u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u4f5c\u6210\u3059\u308b",id:"formatters-\u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u6574\u6570\u7528\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",id:"\u6574\u6570\u7528\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",level:2},{value:"\u6574\u6570\u304b\u3089\u6587\u5b57\u5217\u3078",id:"\u6574\u6570\u304b\u3089\u6587\u5b57\u5217\u3078",level:3},{value:"\u6574\u6570\u304b\u3089\u753b\u50cf\u3078",id:"\u6574\u6570\u304b\u3089\u753b\u50cf\u3078",level:3},{value:"\u30c6\u30ad\u30b9\u30c8\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",id:"\u30c6\u30ad\u30b9\u30c8\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",level:2},{value:"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u6587\u5b57\u5217\u3078",id:"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u6587\u5b57\u5217\u3078",level:3},{value:"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u753b\u50cf\u3078",id:"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u753b\u50cf\u3078",level:3},{value:"\u30c0\u30fc\u30af\u30e2\u30fc\u30c9\u5bfe\u5fdc",id:"\u30c0\u30fc\u30af\u30e2\u30fc\u30c9\u5bfe\u5fdc",level:2},{value:"Tintable (\u5f69\u8272\u53ef\u80fd) \u30ab\u30e9\u30fc",id:"tintable-\u5f69\u8272\u53ef\u80fd-\u30ab\u30e9\u30fc",level:3},{value:"Optimized color pictures",id:"optimized-color-pictures",level:3},{value:"\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f",id:"\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f",level:2},{value:"Build your 4D for iOS app",id:"build-your-4d-for-ios-app",level:2}],p={toc:m};function g(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u76ee\u6a19")),(0,r.kt)("p",{parentName:"blockquote"},"\u6700\u521d\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u69d8\u3005\u306a\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u306e\u4f8b\u3092\u4f5c\u6210\u3057\u3066\u3044\u304f\u3053\u3068\u3092\u6848\u5185\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"},"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")," \u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u3082\u306e\u304c\u53ce\u9332\u3055\u308c\u3066\u3044\u307e\u3059:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"integerToImage/Images")," \u304a\u3088\u3073 ",(0,r.kt)("strong",{parentName:"li"},"textToImage/Images")," \u30d5\u30a9\u30eb\u30c0\u30fc\u3068\u3001\u305d\u3053\u306b\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b\u30d4\u30af\u30c1\u30e3\u30fc (\u3042\u3068\u3067\u753b\u50cf\u3092\u4f7f\u3046\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u306b\u4f7f\u7528\u3057\u307e\u3059)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Task Management.4dbase")," \u30d5\u30a1\u30a4\u30eb (\u304a\u3088\u3073\u3059\u3050\u306b\u4f7f\u7528\u3067\u304d\u308b\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30d7\u30ed\u30b8\u30a7\u30af\u30c8)")),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/archive/66d7eea49bc3353f73dbf784ee06283b3a332d0b.zip"},"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")),(0,r.kt)("p",null,"\u3053\u308c\u3067\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3092\u4f5c\u6210\u3059\u308b\u6e96\u5099\u304c\u6574\u3044\u307e\u3057\u305f\uff01"),(0,r.kt)("h2",{id:"formatters-\u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u4f5c\u6210\u3059\u308b"},"formatters \u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u4f5c\u6210\u3059\u308b"),(0,r.kt)("p",null,"\u307e\u305a\u3001",(0,r.kt)("em",{parentName:"p"},"Task Management.4dbase/Resources/Mobile/formatters")," \u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Formatter \u30d5\u30a9\u30eb\u30c0\u30fc",src:a(87824).Z,width:"929",height:"367"})),(0,r.kt)("h2",{id:"\u6574\u6570\u7528\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc"},"\u6574\u6570\u7528\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc"),(0,r.kt)("h3",{id:"\u6574\u6570\u304b\u3089\u6587\u5b57\u5217\u3078"},"\u6574\u6570\u304b\u3089\u6587\u5b57\u5217\u3078"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f5c\u6210\u3057\u305f formatters \u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u306b ",(0,r.kt)("strong",{parentName:"li"},"integerToString")," \u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6b21\u306b\u3001",(0,r.kt)("strong",{parentName:"li"},"integerToString")," \u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u306b ",(0,r.kt)("strong",{parentName:"li"},"manifest.json")," \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Formatter \u30d5\u30a9\u30eb\u30c0\u30fc",src:a(6109).Z,width:"1130",height:"367"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"manifest.json")," \u30d5\u30a1\u30a4\u30eb\u306e\u4e2d\u8eab\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToString",\n\n   "type": ["integer"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"0":"UX designer","1":"Developer","2":"QA","3":"Product Owner"}\n}\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"name"),": \u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u306e\u540d\u524d"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"type"),": \u4f7f\u7528\u3059\u308b 4D\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u578b"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"binding"),": \u6587\u5b57\u5217\u306a\u3089 ",(0,r.kt)("strong",{parentName:"li"},"localized text"),"\u3001\u3042\u308b\u3044\u306f\u753b\u50cf\u306a\u3089 ",(0,r.kt)("strong",{parentName:"li"},"imageNamed")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"choiceList"),": \u30de\u30c3\u30d7\u3055\u308c\u305f\u5024")),(0,r.kt)("h3",{id:"\u6574\u6570\u304b\u3089\u753b\u50cf\u3078"},"\u6574\u6570\u304b\u3089\u753b\u50cf\u3078"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f5c\u6210\u3057\u305f ",(0,r.kt)("strong",{parentName:"p"},"formatters")," \u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u306b ",(0,r.kt)("strong",{parentName:"p"},"integerToImage")," \u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"integerToImage")," \u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u306b ",(0,r.kt)("strong",{parentName:"p"},"manifest.json")," \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Formatter \u30d5\u30a9\u30eb\u30c0\u30fc",src:a(87879).Z,width:"966",height:"367"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6b21\u306b\u3001",(0,r.kt)("strong",{parentName:"li"},"integerToImage")," \u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u306b ",(0,r.kt)("strong",{parentName:"li"},"Images")," \u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e ",(0,r.kt)("strong",{parentName:"li"},"integerToImage/Images")," \u306b\u3042\u308b\u753b\u50cf\u3092\u3053\u3053\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3067\u4f7f\u7528\u3059\u308b\u753b\u50cf",src:a(7914).Z,width:"1119",height:"367"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"manifest.json")," \u30d5\u30a1\u30a4\u30eb\u306e\u4e2d\u8eab\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},\n\n   "assets": {\n      "size": {\n         "width": 40, "height": 40\n      }\n   }\n}\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"name"),": \u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u306e\u540d\u524d"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"type"),": \u4f7f\u7528\u3059\u308b 4D\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u578b"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"binding"),": \u6587\u5b57\u5217\u306a\u3089 ",(0,r.kt)("strong",{parentName:"li"},"localized text"),"\u3001\u3042\u308b\u3044\u306f\u753b\u50cf\u306a\u3089 ",(0,r.kt)("strong",{parentName:"li"},"imageNamed")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"choiceList"),": \u30de\u30c3\u30d7\u3055\u308c\u305f\u5024"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"assets"),": \u8868\u793a\u30b5\u30a4\u30ba\u306e\u8abf\u6574 (\u5e45\u3068\u9ad8\u3055)")),(0,r.kt)("h2",{id:"\u30c6\u30ad\u30b9\u30c8\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc"},"\u30c6\u30ad\u30b9\u30c8\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc"),(0,r.kt)("h3",{id:"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u6587\u5b57\u5217\u3078"},"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u6587\u5b57\u5217\u3078"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f5c\u6210\u3057\u305f formatters \u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u306b ",(0,r.kt)("strong",{parentName:"p"},"textToString")," \u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6b21\u306b\u3001",(0,r.kt)("strong",{parentName:"p"},"textToString")," \u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u306b ",(0,r.kt)("strong",{parentName:"p"},"manifest.json")," \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Formatter \u30d5\u30a9\u30eb\u30c0\u30fc",src:a(36992).Z,width:"967",height:"367"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"manifest.json")," \u30d5\u30a1\u30a4\u30eb\u306e\u4e2d\u8eab\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToString",\n\n   "type": ["text"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"FRA":"France","MAR":"Morocco","USA":"United States","AUS":"Australia"}\n}\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"name"),": \u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u306e\u540d\u524d"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"type"),": \u4f7f\u7528\u3059\u308b 4D\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u578b"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"binding"),": \u6587\u5b57\u5217\u306a\u3089 ",(0,r.kt)("strong",{parentName:"li"},"localized text"),"\u3001\u3042\u308b\u3044\u306f\u753b\u50cf\u306a\u3089 ",(0,r.kt)("strong",{parentName:"li"},"imageNamed")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"choiceList"),": \u30de\u30c3\u30d7\u3055\u308c\u305f\u5024")),(0,r.kt)("h3",{id:"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u753b\u50cf\u3078"},"\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u753b\u50cf\u3078"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f5c\u6210\u3057\u305f formatters \u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u306b ",(0,r.kt)("strong",{parentName:"p"},"textToImage")," \u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"textToImage")," \u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u306b ",(0,r.kt)("strong",{parentName:"p"},"manifest.json")," \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Formatter \u30d5\u30a9\u30eb\u30c0\u30fc",src:a(51013).Z,width:"971",height:"367"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6b21\u306b\u3001",(0,r.kt)("strong",{parentName:"li"},"textToImage")," \u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u306b ",(0,r.kt)("strong",{parentName:"li"},"Images")," \u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e ",(0,r.kt)("strong",{parentName:"li"},"textToImage/Images")," \u306b\u3042\u308b\u753b\u50cf\u3092\u3053\u3053\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc\u3067\u4f7f\u7528\u3059\u308b\u753b\u50cf",src:a(91436).Z,width:"1133",height:"367"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"manifest.json")," \u30d5\u30a1\u30a4\u30eb\u306e\u4e2d\u8eab\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": ["image1.png","image2.png","image3.png"],\n\n   "assets": {\n  "size": {\n   "width": 40, "height": 40\n      }\n   }\n}\n\n')),(0,r.kt)("h2",{id:"\u30c0\u30fc\u30af\u30e2\u30fc\u30c9\u5bfe\u5fdc"},"\u30c0\u30fc\u30af\u30e2\u30fc\u30c9\u5bfe\u5fdc"),(0,r.kt)("p",null,"Whether your device is in dark or light mode, whether you're working on iOS or Android, you can easily use the custom formatters containing images. \u30d4\u30af\u30c1\u30e3\u30fc\u306f\u3001\u30c7\u30d0\u30a4\u30b9\u306e\u30ab\u30e9\u30fc\u30e2\u30fc\u30c9\u306b\u9069\u5fdc\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"tintable-\u5f69\u8272\u53ef\u80fd-\u30ab\u30e9\u30fc"},"Tintable (\u5f69\u8272\u53ef\u80fd) \u30ab\u30e9\u30fc"),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u306e\u30ab\u30e9\u30fc\u30e2\u30fc\u30c9 (\u30e9\u30a4\u30c8\u30fb\u30c0\u30fc\u30af) \u306b\u5fdc\u3058\u3066\u767d\u9ed2\u753b\u50cf\u306e\u30b3\u30f3\u30c8\u30e9\u30b9\u30c8\u3092\u6700\u9069\u5316\u3059\u308b\u306b\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},'"tintable": true')," \u3068\u3044\u3046\u884c\u3092\u8ffd\u52a0\u3057\u307e\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n   "type": ["text"],\n   "binding": "imageNamed",\n   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},\n   "assets": {\n     "size": 54, \n     "tintable": true\n     }\n}\n')),(0,r.kt)("p",null,"Here is the result in light and dark modes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Light mode"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Dark mode"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",src:a(45385).Z,width:"231",height:"500"})),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",src:a(61077).Z,width:"231",height:"500"}))))),(0,r.kt)("h3",{id:"optimized-color-pictures"},"Optimized color pictures"),(0,r.kt)("p",null,"To optimize the color pictures displayed on your app and adapt them to your color mode, you need to have two pictures: one for the light mode, and one for the dark mode suffixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"_dark"),", as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",src:a(39726).Z,width:"1280",height:"720"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n   "type": ["text"],\n   "binding": "imageNamed",\n   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},\n   "assets": {\n     "size": 54\n   }\n}\n')),(0,r.kt)("p",null,"Here is the result in light mode and in dark mode:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Light mode"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Dark mode"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",src:a(10958).Z,width:"1170",height:"2532"})),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u30fc",src:a(63139).Z,width:"1170",height:"2532"}))))),(0,r.kt)("h2",{id:"\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f"},"\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f"),(0,r.kt)("p",null,"Open the Task Management.4dbase with 4D and go to File > Open > Mobile Project... to open the ",(0,r.kt)("strong",{parentName:"p"},"Tasks")),(0,r.kt)("p",null,"Next, go to the ",(0,r.kt)("strong",{parentName:"p"},"Labels & Icons section")," in the project editor. All of your formatters are available for the different field types you  previously defined in the different formatter manifest.json files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"integerToString")," formatter for the ",(0,r.kt)("strong",{parentName:"li"},"Job field")),(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"textToString")," formatter for the ",(0,r.kt)("strong",{parentName:"li"},"Country field")),(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"integerToImage")," formatter for the ",(0,r.kt)("strong",{parentName:"li"},"Task Status")),(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"textToImage")," formatter for the ",(0,r.kt)("strong",{parentName:"li"},"Manager"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Text formatter",src:a(84749).Z,width:"1082",height:"994"})),(0,r.kt)("h2",{id:"build-your-4d-for-ios-app"},"Build your 4D for iOS app"),(0,r.kt)("p",null,"Build your 4D of iOS app and you'll see that your formatter is well applied depending on the credit limit."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Text formatter",src:a(31960).Z,width:"1417",height:"992"})),(0,r.kt)("p",null,"Download the completed formatter template folder:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/releases/latest/download/tutorial-CustomDataFormatter.zip"},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u3067\u3059\uff01"))}g.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),m=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(s.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=m(a),c=r,k=d["".concat(s,".").concat(c)]||d[c]||g[c]||i;return a?n.createElement(k,l(l({ref:e},p),{},{components:a})):n.createElement(k,l({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},39726:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Architecture-9e5ab4ecd6e08492f157b05f20f727c5.jpg"},61077:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/dark-bw-68e482439e9dd8b1f54d5329043a8320.png"},63139:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/dark-color-f03b8c9fe0da0586276cfbb4119d738f.png"},87879:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/formatter-folder-integertoimage-39a0ceecb09f269914d1bcf37777c2df.png"},6109:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/formatter-folder-integertostring-83d572fe95b8bf945181fbe8fae383e0.png"},51013:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/formatter-folder-textToImage-90f9d914f42c5aa4ee25b5c480b31202.png"},36992:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/formatter-folder-texttostring-a86ce7fb9cec79c633d7142ca0c02c68.png"},87824:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/formatter-folder-4de63acd23f172964362bd2e13501739.png"},7914:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/formatter-images-integertoimage-9048c8448868dc1029cf8c7b990a942a.png"},91436:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/formatter-images-textToImage-2ecef0061028f82c44fd23cdabdab308.png"},31960:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/formatters-final-result-69d799b3a619fb518ea7ef3cbf96c8ee.png"},84749:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/formatters-icons-&-labels-3967beccfbcde91e00b7e6ec1a69abfb.png"},45385:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/light-bw-382eb672557f93f18eb64d0dfa5499d5.png"},10958:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/light-color-5b5a9550d2501be2b5ceb9351a104240.png"}}]);