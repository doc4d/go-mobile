"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8696],{23301:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={id:"using-action-parameters",title:"\u30a2\u30af\u30b7\u30e7\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u7528\u3059\u308b"},l=void 0,i={unversionedId:"tutorials/actions/using-action-parameters",id:"version-19-R6/tutorials/actions/using-action-parameters",title:"\u30a2\u30af\u30b7\u30e7\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u7528\u3059\u308b",description:"\u76ee\u6a19",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R6/tutorials/actions/using-action-parameters.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/using-action-parameters",permalink:"/go-mobile/ja/docs/tutorials/actions/using-action-parameters",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/actions/using-action-parameters.md",tags:[],version:"19-R6",frontMatter:{id:"using-action-parameters",title:"\u30a2\u30af\u30b7\u30e7\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u7528\u3059\u308b"},sidebar:"tutorials",previous:{title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",permalink:"/go-mobile/ja/docs/tutorials/actions/adding-actions-template"},next:{title:"N\u5bfe1\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3",permalink:"/go-mobile/ja/docs/tutorials/relations/many-to-one-relations"}},o={},p=[{value:"\u2488 \u8ffd\u52a0\u30a2\u30af\u30b7\u30e7\u30f3",id:"-\u8ffd\u52a0\u30a2\u30af\u30b7\u30e7\u30f3",level:2},{value:"\u2489 \u7de8\u96c6\u30a2\u30af\u30b7\u30e7\u30f3",id:"-\u7de8\u96c6\u30a2\u30af\u30b7\u30e7\u30f3",level:2},{value:"\u248a \u524a\u9664\u30a2\u30af\u30b7\u30e7\u30f3",id:"-\u524a\u9664\u30a2\u30af\u30b7\u30e7\u30f3",level:2},{value:"\u248b \u30b3\u30e1\u30f3\u30c8\u9001\u4fe1\u30a2\u30af\u30b7\u30e7\u30f3",id:"-\u30b3\u30e1\u30f3\u30c8\u9001\u4fe1\u30a2\u30af\u30b7\u30e7\u30f3",level:2},{value:"\u248c On Mobile App Action \u30e1\u30bd\u30c3\u30c9",id:"-on-mobile-app-action-\u30e1\u30bd\u30c3\u30c9",level:2},{value:"\u248d \u30a2\u30af\u30b7\u30e7\u30f3\u30e1\u30bd\u30c3\u30c9\u3092\u4f5c\u6210\u3059\u308b",id:"-\u30a2\u30af\u30b7\u30e7\u30f3\u30e1\u30bd\u30c3\u30c9\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"addAction",id:"addaction",level:3},{value:"editAction",id:"editaction",level:3},{value:"deleteAction",id:"deleteaction",level:3},{value:"sendMail",id:"sendmail",level:3},{value:"\u248e \u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b",id:"-\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b",level:2},{value:"\u248f \u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f",id:"-\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b",level:2}],c={toc:p};function u(t){let{components:e,...s}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u76ee\u6a19")),(0,r.kt)("p",{parentName:"blockquote"},"\u30a2\u30af\u30b7\u30e7\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u7528\u3057\u3001\u30a2\u30d7\u30ea\u4e0a\u3067\u30c7\u30fc\u30bf\u304c\u66f4\u65b0\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,"\u3072\u3068\u3064\u524d\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30a2\u30af\u30b7\u30e7\u30f3\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001iOS\u30a2\u30d7\u30ea\u5074\u304b\u3089 4D\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3059\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u6b21\u306e\u3088\u3046\u306a\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u898b\u3066\u3044\u304d\u307e\u3059:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65b0\u898f\u30bf\u30b9\u30af\u3092 ",(0,r.kt)("strong",{parentName:"li"},"\u8ffd\u52a0")," \u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u65e2\u5b58\u30bf\u30b9\u30af\u3092 ",(0,r.kt)("strong",{parentName:"li"},"\u7de8\u96c6")," \u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u65e2\u5b58\u30bf\u30b9\u30af\u3092 ",(0,r.kt)("strong",{parentName:"li"},"\u524a\u9664")," \u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u306e\u30bf\u30b9\u30af\u306b\u95a2\u9023\u3057\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092 ",(0,r.kt)("strong",{parentName:"li"},"\u30e1\u30fc\u30eb\u3067\u9001\u4fe1")," \u3059\u308b")),(0,r.kt)("p",null,"\u3053\u3053\u307e\u3067\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u4f5c\u6210\u3057\u305f\u30a2\u30d7\u30ea\u3092\u30d9\u30fc\u30b9\u306b\u3057\u305f ",(0,r.kt)("strong",{parentName:"p"},"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")," \u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/159a7b73bd3556890a205024af42440faf0b277c.zip"},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9")),(0,r.kt)("h2",{id:"-\u8ffd\u52a0\u30a2\u30af\u30b7\u30e7\u30f3"},"\u2488 \u8ffd\u52a0\u30a2\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u3072\u3068\u3064\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b\u3068\u3053\u308d\u304b\u3089\u59cb\u3081\u307e\u3057\u3087\u3046\u3002 \u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304d\u3001",(0,r.kt)("strong",{parentName:"p"},"\u30a2\u30af\u30b7\u30e7\u30f3")," \u30bb\u30af\u30b7\u30e7\u30f3\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30a2\u30af\u30b7\u30e7\u30f3\u30bb\u30af\u30b7\u30e7\u30f3",src:n(92954).Z,width:"2164",height:"2046"})),(0,r.kt)("p",null,"\u3053\u306e\u6642\u70b9\u3067\u306f\u3001\u3059\u3079\u3066\u306e\u9805\u76ee\u304c\u7a7a\u3067\u3059\u3002 iOS \u30a2\u30d7\u30ea\u3067 ",(0,r.kt)("strong",{parentName:"p"},"\u65b0\u898f\u30bf\u30b9\u30af\u3092\u8ffd\u52a0\u3059\u308b")," \u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u306b\u53d6\u308a\u639b\u304b\u308a\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"\u30d7\u30ea\u30bb\u30c3\u30c8\u306e ",(0,r.kt)("strong",{parentName:"p"},"\u8ffd\u52a0")," \u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3001\u65b0\u898f\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30af\u30b7\u30e7\u30f3\u30ea\u30b9\u30c8\u306e\u4e0b\u306b\u3042\u308b ",(0,r.kt)("strong",{parentName:"li"},"\uff0b\u30dc\u30bf\u30f3")," \u306e\u4e09\u89d2\u90e8\u5206\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8ffd\u52a0")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tasks")," \u30c6\u30fc\u30d6\u30eb\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u8ffd\u52a0\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u4f5c\u6210",src:n(79408).Z,width:"2164",height:"2046"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},'"addTasks"')," \u3068\u3044\u3046\u540d\u79f0\u3067 ",(0,r.kt)("em",{parentName:"li"},'"\u8ffd\u52a0..."')," \u3068\u3044\u3046\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30e9\u30d9\u30eb\u30bf\u30a4\u30c8\u30eb\u304c\u8a2d\u5b9a\u3055\u308c\u305f ",(0,r.kt)("strong",{parentName:"li"},"\u65b0\u898f\u30a2\u30af\u30b7\u30e7\u30f3")," \u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8ffd\u52a0\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u5fc5\u8981\u306a ",(0,r.kt)("strong",{parentName:"li"},"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc")," \u304a\u3088\u3073 ",(0,r.kt)("strong",{parentName:"li"},"\u30d7\u30ed\u30d1\u30c6\u30a3")," \u304c ",(0,r.kt)("strong",{parentName:"li"},"\u30a2\u30af\u30b7\u30e7\u30f3\u5f15\u6570")," \u30a8\u30ea\u30a2\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u8ffd\u52a0\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",src:n(16337).Z,width:"2164",height:"2046"})),(0,r.kt)("p",null,"\u8ffd\u52a0\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u5fc5\u8981\u306a ",(0,r.kt)("strong",{parentName:"p"},"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc")," \u306f\u3059\u3079\u3066\u63c3\u3063\u3066\u3044\u308b\u306e\u3067\u3001\u3053\u308c\u3067\u8a2d\u5b9a\u306f\u5b8c\u4e86\u3067\u3059\u3002"),(0,r.kt)("h2",{id:"-\u7de8\u96c6\u30a2\u30af\u30b7\u30e7\u30f3"},"\u2489 \u7de8\u96c6\u30a2\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u4eca\u5ea6\u306f\u3001iOS \u30a2\u30d7\u30ea\u3067 ",(0,r.kt)("strong",{parentName:"p"},"\u65e2\u5b58\u30bf\u30b9\u30af\u3092\u7de8\u96c6\u3059\u308b")," \u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"\u30d7\u30ea\u30bb\u30c3\u30c8\u306e ",(0,r.kt)("strong",{parentName:"p"},"\u7de8\u96c6")," \u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3001\u65b0\u898f\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30af\u30b7\u30e7\u30f3\u30ea\u30b9\u30c8\u306e\u4e0b\u306b\u3042\u308b ",(0,r.kt)("strong",{parentName:"li"},"\uff0b\u30dc\u30bf\u30f3")," \u306e\u4e09\u89d2\u90e8\u5206\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7de8\u96c6")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tasks")," \u30c6\u30fc\u30d6\u30eb\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u7de8\u96c6\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u4f5c\u6210",src:n(83495).Z,width:"2164",height:"2046"})),(0,r.kt)("p",null,"\u3053\u306e\u6642\u70b9\u3067\u3001\u4e0b\u8a18\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u308b\u306f\u305a\u3067\u3059:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},'"editTasks"')," \u3068\u3044\u3046\u540d\u79f0\u3067 ",(0,r.kt)("em",{parentName:"li"},'"\u7de8\u96c6..."')," \u3068\u3044\u3046\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30e9\u30d9\u30eb\u30bf\u30a4\u30c8\u30eb\u304c\u8a2d\u5b9a\u3055\u308c\u305f ",(0,r.kt)("strong",{parentName:"li"},"\u65b0\u898f\u30a2\u30af\u30b7\u30e7\u30f3")," \u304c\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7de8\u96c6\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u5fc5\u8981\u306a ",(0,r.kt)("strong",{parentName:"li"},"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc")," \u304a\u3088\u3073 ",(0,r.kt)("strong",{parentName:"li"},"\u30d7\u30ed\u30d1\u30c6\u30a3")," \u304c ",(0,r.kt)("strong",{parentName:"li"},"\u30a2\u30af\u30b7\u30e7\u30f3\u5f15\u6570")," \u30a8\u30ea\u30a2\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u7de8\u96c6\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",src:n(54225).Z,width:"2164",height:"2046"})),(0,r.kt)("p",null,"\u3054\u5fc3\u914d\u306a\u304f\u3001\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u30e1\u30bd\u30c3\u30c9\u306f\u5f8c\u307b\u3069\u4f5c\u6210\u3057\u307e\u3059\u3002 :-)"),(0,r.kt)("h2",{id:"-\u524a\u9664\u30a2\u30af\u30b7\u30e7\u30f3"},"\u248a \u524a\u9664\u30a2\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u30d7\u30ea\u30bb\u30c3\u30c8\u306e ",(0,r.kt)("strong",{parentName:"p"},"\u524a\u9664")," \u30a2\u30af\u30b7\u30e7\u30f3\u306f\u3001\u7de8\u96c6\u30a2\u30af\u30b7\u30e7\u30f3\u3068\u307b\u3068\u3093\u3069\u4e00\u7dd2\u3067\u3059:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30af\u30b7\u30e7\u30f3\u30ea\u30b9\u30c8\u306e\u4e0b\u306b\u3042\u308b ",(0,r.kt)("strong",{parentName:"li"},"\uff0b\u30dc\u30bf\u30f3")," \u306e\u4e09\u89d2\u90e8\u5206\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u524a\u9664")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tasks")," \u30c6\u30fc\u30d6\u30eb\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u524a\u9664\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u4f5c\u6210",src:n(41119).Z,width:"2164",height:"2046"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},'"deleteTasks"')," \u3068\u3044\u3046\u540d\u79f0\u3067 ",(0,r.kt)("em",{parentName:"p"},'"\u524a\u9664"')," \u3068\u3044\u3046\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30e9\u30d9\u30eb\u30bf\u30a4\u30c8\u30eb\u304c\u8a2d\u5b9a\u3055\u308c\u305f ",(0,r.kt)("strong",{parentName:"p"},"\u65b0\u898f\u30a2\u30af\u30b7\u30e7\u30f3")," \u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u524a\u9664\u30a2\u30af\u30b7\u30e7\u30f3",src:n(10381).Z,width:"2164",height:"2046"})),(0,r.kt)("p",null,"\u524a\u9664\u30a2\u30af\u30b7\u30e7\u30f3\u306f\u3001\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3084\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5fc5\u8981\u3068\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("h2",{id:"-\u30b3\u30e1\u30f3\u30c8\u9001\u4fe1\u30a2\u30af\u30b7\u30e7\u30f3"},"\u248b \u30b3\u30e1\u30f3\u30c8\u9001\u4fe1\u30a2\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u9078\u629e\u3057\u305f\u30bf\u30b9\u30af\u306b\u5bfe\u3057\u3066\u5165\u529b\u3055\u308c\u305f\u30b3\u30e1\u30f3\u30c8\u3092 ",(0,r.kt)("strong",{parentName:"p"},"\u7279\u5b9a\u306e\u30a2\u30c9\u30ec\u30b9")," \u306b ",(0,r.kt)("strong",{parentName:"p"},"\u30e1\u30fc\u30eb\u9001\u4fe1\u3059\u308b")," \u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046\u3002 \uff0b\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001",(0,r.kt)("strong",{parentName:"p"},"sendComment")," \u3068\u3044\u3046\u540d\u79f0\u306e\u65b0\u898f\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u524a\u9664\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u4f5c\u6210",src:n(64706).Z,width:"2164",height:"2046"})),(0,r.kt)("p",null,"\u4f5c\u6210\u3057\u305f\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u5bfe\u3057\u30013\u500b\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc (\u5f15\u6570) \u3092\u5b9a\u7fa9\u3057\u307e\u3059:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f15\u6570\u30a8\u30ea\u30a2\u306e\u4e0b\u306b\u3042\u308b \uff0b\u30dc\u30bf\u30f3\u306e\u4e09\u89d2\u90e8\u5206\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30a2\u30af\u30b7\u30e7\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306e\u30ea\u30b9\u30c8\u304b\u3089",(0,r.kt)("strong",{parentName:"li"},"Title")," \u3092\u9078\u629e\u3057\u307e\u3059\u3002 \u9001\u4fe1\u3059\u308b\u30e1\u30fc\u30eb\u306b\u30bf\u30b9\u30af\u540d\u3092\u542b\u3081\u308b\u305f\u3081\u3067\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\uff0b\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001",(0,r.kt)("strong",{parentName:"li"},"Comment"),' \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u30d5\u30a9\u30fc\u30de\u30c3\u30c8 (\u5165\u529b\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb) \u306f "\u30c6\u30ad\u30b9\u30c8 \uff1e \u30c6\u30ad\u30b9\u30c8\u30a8\u30ea\u30a2" \u3067\u3059\u3002'),(0,r.kt)("li",{parentName:"ul"},"\u540c\u3058\u8981\u9818\u3067 ",(0,r.kt)("strong",{parentName:"li"},"Email"),' \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u8ffd\u52a0\u3057\u3001\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f "\u30c6\u30ad\u30b9\u30c8 \uff1e \u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9" \u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002')),(0,r.kt)("p",null,"\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u5b9a\u7fa9\u304c\u4e0b\u56f3\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u308b\u306e\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30b3\u30e1\u30f3\u30c8\u9001\u4fe1\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u4f5c\u6210",src:n(90908).Z,width:"2164",height:"2046"})),(0,r.kt)("h2",{id:"-on-mobile-app-action-\u30e1\u30bd\u30c3\u30c9"},"\u248c On Mobile App Action \u30e1\u30bd\u30c3\u30c9"),(0,r.kt)("p",null,'\u30a2\u30af\u30b7\u30e7\u30f3\u4e00\u89a7\u306e\u53f3\u4e0b\u306e "\u4f5c\u6210..." \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066 ',(0,r.kt)("em",{parentName:"p"},"On Mobile App Action")," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3092\u958b\u304d\u3001\u5fc5\u8981\u306a\u51e6\u7406\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u5b9a\u7fa9\u3057\u305f\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u540d\u79f0\u306f\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306b\u81ea\u52d5\u633f\u5165\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u5fdc\u3058\u305f\u51e6\u7406\u3092\u8ffd\u52a0\u3057\u3066\u3001\u3053\u308c\u3092\u5b8c\u6210\u3055\u305b\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"On Mobile App Action")," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306e\u5185\u5bb9\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0;$response)\nC_OBJECT($1;$request)\n\nC_OBJECT($o;$context;$request;$result;$parameters)\n\n$request:=$1  // \u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u304b\u3089\u9001\u3089\u308c\u305f\u60c5\u5831\n\n$context:=$request.context\n$parameters:=$request.parameters\n\nCase of \n\n    : ($request.action="addTasks")\n\n          // "\u8ffd\u52a0\u2026\n\n        " \u30a2\u30af\u30b7\u30e7\u30f3\u7528\u306e\u30b3\u30fc\u30c9\u3092\u3053\u3053\u306b\u633f\u5165\u3057\u307e\u3059\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "parameters";$parameters)\n\n        $result:=addAction ($o)\n\n    : ($request.action="editTasks")\n\n          // "\u7de8\u96c6\u2026\n\n        " \u30a2\u30af\u30b7\u30e7\u30f3\u7528\u306e\u30b3\u30fc\u30c9\u3092\u3053\u3053\u306b\u633f\u5165\u3057\u307e\u3059\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "parameters";$parameters)\n\n        $result:=editAction ($o)\n\n\n    : ($request.action="deleteTasks")\n\n          // "\u524a\u9664" \u30a2\u30af\u30b7\u30e7\u30f3\u7528\u306e\u30b3\u30fc\u30c9\u3092\u3053\u3053\u306b\u633f\u5165\u3057\u307e\u3059\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey)\n\n        $result:=deleteAction ($o)\n\n    : ($request.action="sendComment")\n\n          // "\u30b3\u30e1\u30f3\u30c8\u9001\u4fe1" \u30a2\u30af\u30b7\u30e7\u30f3\u7528\u306e\u30b3\u30fc\u30c9\u3092\u3053\u3053\u306b\u633f\u5165\u3057\u307e\u3059\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "parameters";$parameters)\n\n\n        $result:=sendMail ($o)\n\n    Else \n\n          // \u672a\u77e5\u306e\u30a2\u30af\u30b7\u30e7\u30f3\n\nEnd case \n\n$0:=$result\n\n')),(0,r.kt)("h2",{id:"-\u30a2\u30af\u30b7\u30e7\u30f3\u30e1\u30bd\u30c3\u30c9\u3092\u4f5c\u6210\u3059\u308b"},"\u248d \u30a2\u30af\u30b7\u30e7\u30f3\u30e1\u30bd\u30c3\u30c9\u3092\u4f5c\u6210\u3059\u308b"),(0,r.kt)("h3",{id:"addaction"},"addAction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($entity;$in;$out)\n\n$in:=$1\n\n$out:=New object("success";False)\n\nIf ($in.dataClass#Null)\n\n    $entity:=ds.Tasks.new()  // \u65b0\u898f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u53c2\u7167\u3092\u4f5c\u6210\u3057\u307e\u3059\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $entity.save()  // \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u4fdd\u5b58\u3057\u307e\u3059\n\n\n    $out.success:=True  // \u30a2\u30af\u30b7\u30e7\u30f3\u304c\u6210\u529f\u3057\u305f\u3053\u3068\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\u3057\u307e\u3059\n    $out.dataSynchro:=True  // \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u30ea\u30ed\u30fc\u30c9\u3092\u8981\u6c42\u3057\u307e\u3059\n    $out.statusText:="Task added"\n\nElse \n\n    $out.errors:=New collection("No Selection")\n\nEnd if \n\n$0:=$out\n\n\n')),(0,r.kt)("h3",{id:"editaction"},"editAction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $status:=$entity.save()\n\n    $out:=New object\n\n    If ($status.success)\n\n        $out.success:=True  // \u30a2\u30af\u30b7\u30e7\u30f3\u304c\u6210\u529f\u3057\u305f\u3053\u3068\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\u3057\u307e\u3059\n        $out.dataSynchro:=True  // \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30ea\u30ed\u30fc\u30c9\u3092\u8981\u6c42\u3057\u307e\u3059\n        $out.statusText:="Task edited"\n\n    Else \n\n        $out:=$status  // \u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\u3057\u307e\u3059\n\n    End if \n\nElse \n\n    $out.success:=False  // \u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5931\u6557\u3057\u305f\u3053\u3068\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\u3057\u307e\u3059\n\nEnd if \n\n$0:=$out\n\n\n')),(0,r.kt)("h3",{id:"deleteaction"},"deleteAction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'\nC_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection.drop()\n\n    $out:=New object\n\n    If ($entity.length=0)\n\n        $out.success:=True  // \u30a2\u30af\u30b7\u30e7\u30f3\u304c\u6210\u529f\u3057\u305f\u3053\u3068\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\u3057\u307e\u3059\n        $out.dataSynchro:=True  // \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30ea\u30ed\u30fc\u30c9\u3092\u8981\u6c42\u3057\u307e\u3059\n        $out.statusText:="Task deleted"\n\n    Else \n\n        $out:=$status  // \u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\u3057\u307e\u3059\n\n    End if \n\nElse \n\n    $out.success:=False  // \u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5931\u6557\u3057\u305f\u3053\u3068\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\u3057\u307e\u3059\n\nEnd if \n\n$0:=$out\n\n\n')),(0,r.kt)("h3",{id:"sendmail"},"sendMail"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0;$out)\nC_OBJECT($1;$in)\n\nC_OBJECT($dataClass;$entity;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $out:=New object\n\n    $server:=New object\n    $server.host:="smtp.gmail.com"\n    $server.port:=465\n    $server.user:="test@mail.com"\n    $server.password:="yourPassword"\n\n    $transporter:=SMTP New transporter($server)\n\n    $email:=New object\n    $email.subject:="New comment about one of your task"\n    $email.from:="yourEmail"\n    $email.to:=$emailToSend\n    $email.htmlBody:="<h1>Comment from Tasks for iOS</h1>"+"<p><b>Task:</b> "+$taskTitle+"</p><p><b>Comment:</b> "\\\n    +$commentToSend+"</p><br><p><i>Send from my 4D for iOS app</i></p>"\\\n\n    $status:=$transporter.send($email)\n    If ($status.success)\n        $out.success:=True  // \u30a2\u30af\u30b7\u30e7\u30f3\u304c\u6210\u529f\u3057\u305f\u3053\u3068\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\u3057\u307e\u3059\n        $out.statusText:="Mail sent"\n\n    Else \n        $out.success:=False  // \u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5931\u6557\u3057\u305f\u3053\u3068\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\u3057\u307e\u3059\n        $out.statusText:="Mail not sent"\n\n    End if \n\nElse \n\n    $out.success:=False  // \u30a2\u30af\u30b7\u30e7\u30f3\u304c\u5931\u6557\u3057\u305f\u3053\u3068\u3092\u30a2\u30d7\u30ea\u306b\u901a\u77e5\u3057\u307e\u3059\n\nEnd if \n\n$0:=$out\n\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"sendMail")," \u30e1\u30bd\u30c3\u30c9\u3067\u5b9f\u884c\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306f\u3001\u3054\u5229\u7528\u306e\u30e1\u30fc\u30eb\u30b5\u30fc\u30d0\u30fc\u306b\u5408\u308f\u305b\u3066\u5024\u3092\u5909\u66f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"-\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b"},"\u248e \u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b"),(0,r.kt)("p",null,"\u3042\u3068\u306f\u3001\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b\u3060\u3051\u3067\u3059\uff01"),(0,r.kt)("p",null,"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30d0\u30fc\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001",(0,r.kt)("strong",{parentName:"p"},"\u65b0\u898f\u30bf\u30b9\u30af\u3092\u4f5c\u6210\u3059\u308b")," \u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u65b0\u898f\u30bf\u30b9\u30af\u306e\u4f5c\u6210",src:n(59366).Z,width:"1701",height:"992"})),(0,r.kt)("p",null,"\u30ea\u30b9\u30c8\u753b\u9762\u4e0a\u3067\u3001\u4f5c\u6210\u3057\u305f\u3070\u304b\u308a\u306e\u30bf\u30b9\u30af\u306e\u30bb\u30eb\u3092\u9577\u62bc\u3057\u3059\u308b\u3068\u3001\u30a2\u30af\u30b7\u30e7\u30f3\u30ea\u30b9\u30c8\u304c\u8868\u793a\u3055\u308c\u3001",(0,r.kt)("strong",{parentName:"p"},"\u7de8\u96c6...")," \u30a2\u30af\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30bf\u30b9\u30af\u306e\u7de8\u96c6",src:n(83137).Z,width:"1701",height:"992"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30b3\u30e1\u30f3\u30c8\u9001\u4fe1")," \u30a2\u30af\u30b7\u30e7\u30f3\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30bf\u30b9\u30af\u30b3\u30e1\u30f3\u30c8\u9001\u4fe1",src:n(21563).Z,width:"1701",height:"992"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u524a\u9664")," \u30a2\u30af\u30b7\u30e7\u30f3\u3067\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u524a\u9664\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30bf\u30b9\u30af\u306e\u524a\u9664",src:n(1066).Z,width:"1701",height:"992"})),(0,r.kt)("h2",{id:"-\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b"},"\u248f \u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f"),(0,r.kt)("p",null,"\u304a\u3064\u304b\u308c\u3055\u307e\u3067\u3057\u305f\uff01 \u3053\u308c\u3067\u3053\u306e iOS\u30a2\u30d7\u30ea\u304c\u5b8c\u6210\u3057\u307e\u3057\u305f\uff01\u3000\u30c7\u30d0\u30a4\u30b9\u4e0a\u3067\u76f4\u63a5\u30c7\u30fc\u30bf\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u66f4\u65b0\u3057\u305f\u5185\u5bb9\u306f\u30b5\u30fc\u30d0\u30fc\u3068\u30b7\u30f3\u30af\u30ed\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff01"),(0,r.kt)("p",null,"\u5b8c\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/0.0.1.zip"},"\u5b8c\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9")))}u.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,o=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||s;return n?a.createElement(k,l(l({ref:e},c),{},{components:n})):a.createElement(k,l({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59366:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Action-parameters-addAction-ab555a7585002e427fdbe40cc7f313ee.png"},1066:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Action-parameters-deleteAction-bc5b8f70ba39268879c57ae0efb5eb82.png"},83137:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Action-parameters-editAction-9b9ce4f23f7b5a861fe7d24a00eb32cc.png"},21563:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Action-parameters-sendComment-38be2e5b75e0d4d74a51bfcdbb9b9bbe.png"},92954:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Actions-section-cbff48a3e62d88ec605631bbd9ba94ab.png"},79408:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Add-action-creation-0b90971de150764707c792de82bc1274.png"},16337:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Add-action-parameters-6637a821be3f6403d87c129f8e743ae4.png"},41119:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Delete-action-creation-a87770233be15d7fd5e9149b7e7f2b3a.png"},10381:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Delete-action-final-0d1c7e9df3f531e38cf24a36c0817f98.png"},83495:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Edit-action-creation-f689b0deae347fdfb387ea5c00fc948c.png"},54225:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Edit-action-parameters-2a98e90962f2e091508fb5cb07f0969c.png"},64706:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Send-comment-action-creation-b165dabf7bcb94dffad8e3e13a2ac49b.png"},90908:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Send-comment-action-definition-306647a0a7cc4b3e1413dd4013c73d5c.png"}}]);