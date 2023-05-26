"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9307],{22565:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=i(87462),n=(i(67294),i(3905));const l={id:"customize-your-ios-app",title:"4D for iOS \u30a2\u30d7\u30ea\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"},r=void 0,o={unversionedId:"tutorials/customizing-with-xcode/customize-your-ios-app",id:"tutorials/customizing-with-xcode/customize-your-ios-app",title:"4D for iOS \u30a2\u30d7\u30ea\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",description:"\u7c21\u5358\u306a\u3082\u306e\u304b\u3089\u8907\u96d1\u306a\u3082\u306e\u307e\u3067\u3001\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u306b\u3055\u307e\u3056\u307e\u306a\u5909\u66f4\u3092\u52a0\u3048\u3066\u307f\u307e\u3057\u3087\u3046\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/customizing-with-xcode/customize-your-ios-app.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/customize-your-ios-app",permalink:"/go-mobile/ja/docs/next/tutorials/customizing-with-xcode/customize-your-ios-app",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/customizing-with-xcode/customize-your-ios-app.md",tags:[],version:"current",frontMatter:{id:"customize-your-ios-app",title:"4D for iOS \u30a2\u30d7\u30ea\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"},sidebar:"tutorials",previous:{title:"4D for iOS \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u6210",permalink:"/go-mobile/ja/docs/next/tutorials/customizing-with-xcode/4d-for-ios-project-organization"},next:{title:"Apple Developer Program \u306e\u9078\u629e",permalink:"/go-mobile/ja/docs/next/tutorials/developer-program/selecting-your-developer-program"}},s={},p=[{value:"\u2488 \u2488 \u7c21\u5358\u306a\u30e9\u30d9\u30eb\u5909\u66f4",id:"--\u7c21\u5358\u306a\u30e9\u30d9\u30eb\u5909\u66f4",level:2},{value:"\u2489 \u2489 \u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u306e\u4f4d\u7f6e\u3092\u5909\u66f4\u3059\u308b",id:"--\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u306e\u4f4d\u7f6e\u3092\u5909\u66f4\u3059\u308b",level:2},{value:"\u248a \u248a \u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u306e\u5236\u7d04\u3092\u4fee\u6b63\u3059\u308b",id:"--\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u306e\u5236\u7d04\u3092\u4fee\u6b63\u3059\u308b",level:2},{value:"\u248b \u248b \u30e9\u30d9\u30eb\u306e\u4f4d\u7f6e\u3068\u5236\u7d04\u3092\u4fee\u6b63\u3059\u308b",id:"--\u30e9\u30d9\u30eb\u306e\u4f4d\u7f6e\u3068\u5236\u7d04\u3092\u4fee\u6b63\u3059\u308b",level:2},{value:"\u4eca\u5ea6\u306f\u3001First Name \u30e9\u30d9\u30eb\u3092\u4fee\u6b63\u3057\u307e\u3057\u3087\u3046\u3002",id:"\u4eca\u5ea6\u306ffirst-name-\u30e9\u30d9\u30eb\u3092\u4fee\u6b63\u3057\u307e\u3057\u3087\u3046",level:4},{value:"\u6700\u5f8c\u306b\u3001Last Name \u30e9\u30d9\u30eb\u3092\u4fee\u6b63\u3057\u307e\u3059\u3002",id:"\u6700\u5f8c\u306blast-name-\u30e9\u30d9\u30eb\u3092\u4fee\u6b63\u3057\u307e\u3059",level:4}],c={toc:p};function u(t){let{components:e,...l}=t;return(0,n.kt)("wrapper",(0,a.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u7c21\u5358\u306a\u3082\u306e\u304b\u3089\u8907\u96d1\u306a\u3082\u306e\u307e\u3067\u3001\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u306b\u3055\u307e\u3056\u307e\u306a\u5909\u66f4\u3092\u52a0\u3048\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u6700\u7d42\u7d50\u679c",src:i(6669).Z,width:"1276",height:"1134"})),(0,n.kt)("h2",{id:"--\u7c21\u5358\u306a\u30e9\u30d9\u30eb\u5909\u66f4"},"\u2488 \u2488 \u7c21\u5358\u306a\u30e9\u30d9\u30eb\u5909\u66f4"),(0,n.kt)("p",null,"\u307e\u305a\u3001\u30e9\u30d9\u30eb\u306e\u30d5\u30a9\u30f3\u30c8\u3068\u30ab\u30e9\u30fc\u3092\u5909\u66f4\u3059\u308b\u3068\u3053\u308d\u304b\u3089\u59cb\u3081\u307e\u3059:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Navigation tab \u304b\u3089 ",(0,n.kt)("em",{parentName:"li"},"ContactDetailsForm.storyboard")," \u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304d\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"First Name \u30e9\u30d9\u30eb\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059 (\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u30d3\u30eb\u30c0\u30fc\u307e\u305f\u306f\u5de6\u30da\u30a4\u30f3\u304b\u3089\u3082\u9078\u629e\u53ef\u80fd\u3067\u3059)\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u30fc\u30a8\u30ea\u30a2\u3067 Attribute inspector \u30da\u30a4\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5c5e\u6027\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc",src:i(75959).Z,width:"1117",height:"790"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30d5\u30a9\u30f3\u30c8\u3092 Helvetica Neue Bold \u304b\u3089 Futura Bold \u306b\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5c5e\u6027\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u306e\u30d5\u30a9\u30f3\u30c8",src:i(78183).Z,width:"1291",height:"1006"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u307e\u305f\u3001\u30d5\u30a9\u30f3\u30c8\u30ab\u30e9\u30fc\u3082\u540c\u3058\u30da\u30a4\u30f3\u3067\u5909\u66f4\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5c5e\u6027\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u306e\u30ab\u30e9\u30fc",src:i(35932).Z,width:"1291",height:"1006"})),(0,n.kt)("h2",{id:"--\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u306e\u4f4d\u7f6e\u3092\u5909\u66f4\u3059\u308b"},"\u2489 \u2489 \u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u306e\u4f4d\u7f6e\u3092\u5909\u66f4\u3059\u308b"),(0,n.kt)("p",null,"4D for iOS \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u3001\u3059\u3079\u3066\u306e\u30c7\u30d0\u30a4\u30b9\u3067\u30a2\u30d7\u30ea\u8981\u7d20\u304c\u3046\u307e\u304f\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u5236\u7d04\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"ContactDetailsForm.storyboard")," \u30d5\u30a1\u30a4\u30eb\u3067\u306f\u3001\u753b\u50cf\u30fb\u30d5\u30a1\u30fc\u30b9\u30c8\u30cd\u30fc\u30e0\u30fb\u30e9\u30b9\u30c8\u30cd\u30fc\u30e0\u306e\u30e9\u30d9\u30eb\u304c\u3059\u3079\u3066\u4e2d\u592e\u63c3\u3048\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u308c\u304c\u4e0b\u306e\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u3001\u5909\u66f4\u3057\u3066\u307f\u307e\u3057\u3087\u3046:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u306e\u7d50\u679c",src:i(74686).Z,width:"545",height:"964"})),(0,n.kt)("p",null,"\u307e\u305a\u3001\u753b\u50cf\u3092\u7e26\u306b\u914d\u7f6e\u3057\u3001\u30d5\u30a1\u30fc\u30b9\u30c8\u30cd\u30fc\u30e0\u3068\u30e9\u30b9\u30c8\u30cd\u30fc\u30e0\u306e\u30e9\u30d9\u30eb\u3092\u753b\u50cf\u306e\u53f3\u5074\u306b\u30c9\u30e9\u30c3\u30b0\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u6b21\u306b\u753b\u50cf\u3092\u9078\u629e\u3057\u3001\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u30fc\u30a8\u30ea\u30a2\u304b\u3089 Size inspector \u30da\u30a4\u30f3\u3092\u958b\u304d\u307e\u3059\u3002 X \u5ea7\u6a19\u3092 161.67 \u304b\u3089 40.67 \u306b\u3001Y \u5ea7\u6a19\u3092 28 \u304b\u3089 79 \u306b\u5909\u66f4\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u306e\u4f4d\u7f6e",src:i(51734).Z,width:"1072",height:"1034"})),(0,n.kt)("p",null,"\u3054\u89a7\u306e\u3088\u3046\u306b\u4f4d\u7f6e\u306f\u5909\u308f\u308a\u307e\u3057\u305f\u304c\u3001Xcode \u306b\u306f\u9ec4\u8272\u3044\u7dda\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u3059...\u306a\u305c\u3067\u3057\u3087\u3046\uff1f \u3053\u306e\u9ec4\u8272\u3044\u7dda\u306f\u3001\u3082\u306f\u3084\u6709\u52b9\u3067\u306a\u3044\u5236\u7d04\u3092\u8868\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"--\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u306e\u5236\u7d04\u3092\u4fee\u6b63\u3059\u308b"},"\u248a \u248a \u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u306e\u5236\u7d04\u3092\u4fee\u6b63\u3059\u308b"),(0,n.kt)("p",null,"\u30b9\u30fc\u30d1\u30fc\u30d3\u30e5\u30fc (\u753b\u50cf\u3092\u542b\u3080\u89aa\u30d3\u30e5\u30fc\u306e\u3053\u3068) \u5185\u3067\u753b\u50cf\u3092\u7e26\u4e2d\u592e\u306b\u914d\u7f6e\u3059\u308b\u306b\u306f\u3001\u65e2\u5b58\u306e\u5236\u7d04\u3092\u524a\u9664\u3057\u3001\u65b0\u3057\u3044\u5236\u7d04\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u306e\u753b\u50cf\u306b\u306f\u73fe\u5728\u3001\u4ee5\u4e0b\u306e\u5236\u7d04\u304c\u3042\u308a\u307e\u3059:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Width Equals: 78 (\u6a2a\u5e45 78 \u30d4\u30af\u30bb\u30eb)"),(0,n.kt)("li",{parentName:"ul"},"Height Equals: 78 (\u9ad8\u3055 78 \u30d4\u30af\u30bb\u30eb)"),(0,n.kt)("li",{parentName:"ul"},"Align Center X to: Superview (\u89aa\u30d3\u30e5\u30fc\u306b\u5bfe\u3057\u3066\u6a2a\u4e2d\u592e\u63c3\u3048)"),(0,n.kt)("li",{parentName:"ul"},"Top Space to: Superview (\u89aa\u30d3\u30e5\u30fc\u306b\u5bfe\u3059\u308b\u4e0a\u90e8\u30b9\u30da\u30fc\u30b9)"),(0,n.kt)("li",{parentName:"ul"},"Bottom space to: ",(0,n.kt)("inlineCode",{parentName:"li"},"<First Name>")," (\u753b\u50cf\u4e0b\u8fba\u304b\u3089 First Name \u30e9\u30d9\u30eb\u307e\u3067\u306e\u9593\u9694)")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u306e\u5236\u7d04",src:i(88402).Z,width:"312",height:"397"})),(0,n.kt)("p",null,"Width \u3068 Height \u4ee5\u5916\u306e\u3059\u3079\u3066\u306e\u5236\u7d04\u3092\u524a\u9664\u3057\u307e\u3059 (Width \u3068 Height \u306f\u5f8c\u3067 Size inspector \u306e Constraints \u30bb\u30af\u30b7\u30e7\u30f3\u3067\u4fee\u6b63\u3057\u307e\u3059)\u3002 \u5236\u7d04\u304c\u306a\u304f\u306a\u3063\u305f\u305f\u3081\u3001\u753b\u50cf\u306e\u5916\u67a0\u304c\u8d64\u8272\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u306f\u305a\u3067\u3059\u3002"),(0,n.kt)("p",null,"Align \u30dc\u30bf\u30f3 (\u30a6\u30a3\u30f3\u30c9\u30a6\u4e0b\u306e\u56db\u89d2\u304c\u5de6\u63c3\u3048\u3055\u308c\u3066\u3044\u308b\u30a2\u30a4\u30b3\u30f3) \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001",(0,n.kt)("strong",{parentName:"p"},"Vertically in Container")," (\u7e26\u4e2d\u592e\u63c3\u3048) \u306e\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u3092\u6709\u52b9\u306b\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u306e\u6574\u5217",src:i(70270).Z,width:"1072",height:"1034"})),(0,n.kt)("p",null,"\u6b21\u306b\u3001",(0,n.kt)("strong",{parentName:"p"},"Add New Constraints")," \u30dc\u30bf\u30f3 (T \u306b\u56f2\u307e\u308c\u305f\u56db\u89d2\u306e\u30a2\u30a4\u30b3\u30f3) \u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u5de6\u5074\u306e\u4f59\u767d (Leading Space) \u306e\u8d64\u3044\u70b9\u7dda\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066 (\u5b9f\u7dda\u306b\u5909\u5316\u3057\u307e\u3059) \u5236\u7d04\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u306e\u65b0\u3057\u3044\u5236\u7d04",src:i(93316).Z,width:"1072",height:"1034"})),(0,n.kt)("p",null,"\u3053\u306e\u6642\u70b9\u3067\u3001\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u306e\u5236\u7d04\u304c\u3059\u3079\u3066\u9752\u8272\u3067\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u306f\u305a\u3067\u3059\u3002"),(0,n.kt)("p",null,"\u304a\u3064\u304b\u308c\u3055\u307e\u3067\u3057\u305f\uff01 \u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u306b\u4f4d\u7f6e\u5236\u7d04\u304c\u8ffd\u52a0\u3055\u308c\u3001\u6b63\u3057\u304f\u914d\u7f6e\u3055\u308c\u307e\u3057\u305f\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"TIPS")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2\u3064\u306e\u30d3\u30e5\u30fc\u306e\u9593\u306b\u5236\u7d04\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001Ctrl\u30ad\u30fc\u3092\u62bc\u3057\u306a\u304c\u3089\u7247\u65b9\u306e\u30d3\u30e5\u30fc\u3092\u3082\u3046\u7247\u65b9\u306e\u30d3\u30e5\u30fc\u306b\u30c9\u30e9\u30c3\u30b0\u3057\u307e\u3059\u3002 \u30de\u30a6\u30b9\u30dc\u30bf\u30f3\u3092\u96e2\u3059\u3068\u540c\u6642\u306b\u3001\u3053\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3067\u8a2d\u5b9a\u53ef\u80fd\u306a\u5236\u7d04\u306e\u9078\u629e\u80a2\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5236\u7d04\u3092\u524a\u9664\u3059\u308b\u306b\u306f\u3001Interface Builder \u307e\u305f\u306f Navigation \u30a8\u30ea\u30a2 \u304b\u3089\u5236\u7d04\u3092\u9078\u629e\u3057\u3001Delete\u30ad\u30fc\u3067\u524a\u9664\u3057\u307e\u3059\u3002")))),(0,n.kt)("h2",{id:"--\u30e9\u30d9\u30eb\u306e\u4f4d\u7f6e\u3068\u5236\u7d04\u3092\u4fee\u6b63\u3059\u308b"},"\u248b \u248b \u30e9\u30d9\u30eb\u306e\u4f4d\u7f6e\u3068\u5236\u7d04\u3092\u4fee\u6b63\u3059\u308b"),(0,n.kt)("h4",{id:"\u4eca\u5ea6\u306ffirst-name-\u30e9\u30d9\u30eb\u3092\u4fee\u6b63\u3057\u307e\u3057\u3087\u3046"},"\u4eca\u5ea6\u306f\u3001First Name \u30e9\u30d9\u30eb\u3092\u4fee\u6b63\u3057\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)("p",null,"\u307e\u305a\u306f\u3001\u4f4d\u7f6e\u3068\u5e45\u3092\u5909\u66f4\u3057\u307e\u3059:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Interface Builder \u3067 First Name \u30e9\u30d9\u30eb\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6b21\u306b\u3001Size inspector \u3067 Width \u3092 386 \u30d4\u30af\u30bb\u30eb\u304b\u3089 267 \u30d4\u30af\u30bb\u30eb\u306b\u5909\u66f4\u3057\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"X \u5ea7\u6a19\u3092 8 \u304b\u3089 127 \u306b\u3001Y \u5ea7\u6a19\u3092 28 \u304b\u3089 79 \u306b\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30d5\u30a1\u30fc\u30b9\u30c8\u30cd\u30fc\u30e0\u30e9\u30d9\u30eb\u306e\u4f4d\u7f6e",src:i(39308).Z,width:"1139",height:"1040"})),(0,n.kt)("p",null,"\u5236\u7d04\u3082\u4fee\u6b63\u3057\u307e\u3057\u3087\u3046:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5de6\u3068\u4e0b\u306e\u4f59\u767d\u306e\u5236\u7d04\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"Control\u30ad\u30fc\u3092\u62bc\u3057\u306a\u304c\u3089 First Name \u30e9\u30d9\u30eb\u3092\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u3078\u3068\u30c9\u30e9\u30c3\u30b0\u3057\u307e\u3059\u3002\u30e1\u30cb\u30e5\u30fc\u304b\u3089 Horizontal Spacing \u3092\u9078\u629e\u3057\u3066\u3001\u9593\u9694\u306e\u5236\u7d04\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"Control\u30ad\u30fc\u3092\u62bc\u3057\u306a\u304c\u3089 First Name \u30e9\u30d9\u30eb\u3092\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u3078\u3068\u30c9\u30e9\u30c3\u30b0\u3057\u307e\u3059\u3002 \u30e1\u30cb\u30e5\u30fc\u304b\u3089 Top \u3092\u9078\u629e\u3057\u3001\u4e21\u65b9\u306e\u8981\u7d20\u304c\u4e0a\u63c3\u3048\u306b\u306a\u308b\u3088\u3046\u3001\u5236\u7d04\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30d5\u30a1\u30fc\u30b9\u30c8\u30cd\u30fc\u30e0\u30e9\u30d9\u30eb\u306e\u4e0a\u90e8\u306e\u5236\u7d04",src:i(51289).Z,width:"1139",height:"1040"})),(0,n.kt)("h4",{id:"\u6700\u5f8c\u306blast-name-\u30e9\u30d9\u30eb\u3092\u4fee\u6b63\u3057\u307e\u3059"},"\u6700\u5f8c\u306b\u3001Last Name \u30e9\u30d9\u30eb\u3092\u4fee\u6b63\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u4f4d\u7f6e\u3068\u5e45\u3092\u5909\u66f4\u3057\u307e\u3059:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Interface Builder \u3067 Last Name \u30e9\u30d9\u30eb\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"Size inspector \u3067 Width \u3092 386 \u30d4\u30af\u30bb\u30eb\u304b\u3089 267 \u30d4\u30af\u30bb\u30eb\u306b\u5909\u66f4\u3057\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"X \u5ea7\u6a19\u3092 8 \u304b\u3089 127 \u306b\u3001Y \u5ea7\u6a19\u3092 144.33 \u304b\u3089 118.33 \u306b\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30e9\u30b9\u30c8\u30cd\u30fc\u30e0\u30e9\u30d9\u30eb\u306e\u4f4d\u7f6e",src:i(70790).Z,width:"1139",height:"1040"})),(0,n.kt)("p",null,"\u5236\u7d04\u3082\u4fee\u6b63\u3057\u307e\u3057\u3087\u3046:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5de6\u306e\u4f59\u767d\u306e\u5236\u7d04\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"Add New Constraints \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u4e0a (Top) \u306e\u4f59\u767d\u306e\u5236\u7d04\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30e9\u30b9\u30c8\u30cd\u30fc\u30e0\u30e9\u30d9\u30eb\u306e\u5236\u7d04",src:i(75875).Z,width:"1139",height:"1040"})),(0,n.kt)("p",null,"2\u3064\u306e\u30e9\u30d9\u30eb\u306e\u4f4d\u7f6e\u304c\u8abf\u6574\u3067\u304d\u307e\u3057\u305f\u3002"),(0,n.kt)("p",null,"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u7d50\u679c\u3092\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046 !"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u306e\u7d50\u679c",src:i(12746).Z,width:"545",height:"964"})),(0,n.kt)("p",null,"\u304a\u3084\u3002 \u671b\u3093\u3060\u3068\u304a\u308a\u306e\u7d50\u679c\u3067\u306f\u3042\u308a\u307e\u305b\u3093...\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"First Name \u3068 Last Name \u306e\u30e9\u30d9\u30eb\u3092\u9078\u629e\u3057\u3001Attributes inspector \u3067 Alignment \u3092\u4e2d\u592e\u304b\u3089\u5de6\u306b\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30e9\u30d9\u30eb\u306e\u6574\u5217",src:i(23105).Z,width:"1139",height:"1040"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6b21\u306b\u3001\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf\u3092\u9078\u629e\u3057\u3066\u3001\u5de6\u306e\u4e88\u7d04\u306e\u5236\u7d04\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5024 \u3092 40.67 \u30d4\u30af\u30bb\u30eb\u304b\u3089 80 \u30d4\u30af\u30bb\u30eb\u306b\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5236\u7d04\u306e\u8abf\u6574",src:i(60242).Z,width:"1140",height:"1065"})),(0,n.kt)("p",null,"\u826f\u3055\u305d\u3046\u3067\u3059\u306d\uff01 \u3053\u308c\u3067\u3001\u3059\u3079\u3066\u306e\u5236\u7d04\u304c\u6a5f\u80fd\u3057\u3001\u6574\u5408\u6027\u3082\u53d6\u308c\u307e\u3057\u305f\u3002"),(0,n.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u3001\u30a2\u30d7\u30ea\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u306f\u3068\u3066\u3082\u7c21\u5358\u3067\u3059\uff01"))}u.isMDXComponent=!0},3905:(t,e,i)=>{i.d(e,{Zo:()=>c,kt:()=>m});var a=i(67294);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e){if(null==t)return{};var i,a,n=function(t,e){if(null==t)return{};var i,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)i=l[a],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)i=l[a],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var s=a.createContext({}),p=function(t){var e=a.useContext(s),i=e;return t&&(i="function"==typeof t?t(e):r(r({},e),t)),i},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var i=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=p(i),m=n,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return i?a.createElement(k,r(r({ref:e},c),{},{components:i})):a.createElement(k,r({ref:e},c))}));function m(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=i.length,r=new Array(l);r[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,r[1]=o;for(var p=2;p<l;p++)r[p]=i[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},75959:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/Attributes-inspector-Xcode-4D-for-iOS-f340fd4a83c3c2250a0f81455f5a7203.png"},35932:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/Attributes-inspector-color-Xcode-4D-for-iOS-e21d893ce190134448df5e393ba60b8a.png"},78183:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/Attributes-inspector-font-Xcode-4D-for-iOS-59d57a58ae8a261e224e3eaad74446c9.png"},60242:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/Constraints-adjustments-Xcode-4D-for-iOS-8dc49472a1891d4dd26b574c62365f41.png"},39308:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/First-Name-Label-position-Xcode-4D-for-iOS-5cbe6158a70c33967849a75bc651ac3d.png"},51289:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/First-Name-Label-top-constraint-Xcode-4D-for-iOS-e2f98a8f14aa639e46d296c06971f200.png"},23105:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/Labels-Alignment-Xcode-4D-for-iOS-a9e38f0b9f7232c654635a11ed095ea7.png"},75875:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/Last-Name-Label-constraint-Xcode-4D-for-iOS-010bb5c3150ffe7b2d8abeea0d1740c1.png"},70790:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/Last-Name-Label-position-Xcode-4D-for-iOS-0afadb6357c1f471fe6e88495982e3fe.png"},70270:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/Profil-picture-Align-Xcode-4D-for-iOS-53ee2e570cd637a4519f49dae9934ed0.png"},88402:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/Profil-picture-constraints-Xcode-4D-for-iOS-90c8223a67ddd9dec4bc697f4b0f8697.png"},93316:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/Profil-picture-new-constraints-4D-for-iOS-1dcc347bf579a41c8330c3987d302f0e.png"},51734:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/Profil-picture-position-Xcode-4D-for-iOS-67d0fbd9b08ccd484d88e08274bd9f6f.png"},6669:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/Simlator-Before-After-Xcode-4D-for-iOS-0c6f6aea6a2df3bcd86abd46f718cac2.png"},74686:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/Simlator-Final-Xcode-4D-for-iOS-989d65cf9725f55ae7a596dbf23821be.png"},12746:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/Simulator-Xcode-4D-for-iOS-e17f8598fa1241a9c7bf382ef1108795.png"}}]);