"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1378],{16472:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={id:"create-your-first-app",title:"4D \u3067\u6700\u521d\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046\uff01"},o=void 0,l={unversionedId:"tutorials/create-your-first-app",id:"version-19-R6/tutorials/create-your-first-app",title:"4D \u3067\u6700\u521d\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046\uff01",description:"4D\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d3\u30eb\u30c0\u30fc\u3078\u3088\u3046\u3053\u305d\u3002 \u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u30014D \u3092\u4f7f\u3063\u305f iOS \u304a\u3088\u3073 Android\u5411\u3051\u306e\u30e2\u30d0\u30a4\u30eb\u958b\u767a\u3092\u3059\u3050\u306b\u59cb\u3081\u3089\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R6/tutorials/create-your-first-app.md",sourceDirName:"tutorials",slug:"/tutorials/create-your-first-app",permalink:"/ja/docs/tutorials/create-your-first-app",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/create-your-first-app.md",tags:[],version:"19-R6",frontMatter:{id:"create-your-first-app",title:"4D \u3067\u6700\u521d\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046\uff01"},sidebar:"tutorials",next:{title:"Custom Login Form",permalink:"/ja/docs/tutorials/custom-login-form"}},p={},s=[{value:"\u2488 \u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",id:"-\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",level:2},{value:"\u2489 \u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",id:"-\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",level:2},{value:"\u248a \u4e00\u822c\u30da\u30fc\u30b8",id:"-\u4e00\u822c\u30da\u30fc\u30b8",level:2},{value:"\u248b \u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u30da\u30fc\u30b8",id:"-\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u30da\u30fc\u30b8",level:2},{value:"\u248c \u30e9\u30d9\u30eb &amp; \u30a2\u30a4\u30b3\u30f3\u30da\u30fc\u30b8",id:"-\u30e9\u30d9\u30eb--\u30a2\u30a4\u30b3\u30f3\u30da\u30fc\u30b8",level:2},{value:"\u248d \u30d5\u30a9\u30fc\u30e0",id:"-\u30d5\u30a9\u30fc\u30e0",level:2},{value:"\u248e \u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9",id:"-\u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9",level:2},{value:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f",id:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b",level:2}],c={toc:s};function m(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"4D\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d3\u30eb\u30c0\u30fc\u3078\u3088\u3046\u3053\u305d\u3002 \u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u30014D \u3092\u4f7f\u3063\u305f iOS \u304a\u3088\u3073 Android\u5411\u3051\u306e\u30e2\u30d0\u30a4\u30eb\u958b\u767a\u3092\u3059\u3050\u306b\u59cb\u3081\u3089\u308c\u307e\u3059\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u59cb\u3081\u308b\u524d\u306b\u30014D\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u958b\u767a\u306e\u305f\u3081\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3068\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e ",(0,r.kt)("a",{parentName:"p",href:"/ja/docs/getting-started/requirements"},"\u8981\u4ef6")," \u3092\u6e80\u305f\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30b7\u30ca\u30ea\u30aa:"),' \u3042\u306a\u305f\u306f\u5546\u696d\u7684\u306a\u30d3\u30b8\u30cd\u30b9\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3067\u3001\u9023\u7d61\u5148\u60c5\u5831\u3092\u5916\u51fa\u5148\u3067\u3082\u78ba\u8a8d\u3057\u305f\u3044\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u3001iOS \u3084 Android\u5411\u3051\u306b\u9023\u7d61\u5148\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046\u3002\u30ea\u30b9\u30c8\u753b\u9762\u3067\u9867\u5ba2\u540d\u3092\u691c\u7d22\u3057\u3066\u9078\u629e\u3057\u3001\u305d\u306e\u8a73\u7d30\u3092\u78ba\u8a8d\u3067\u304d\u308b\u3088\u3046\u306a\u30a4\u30e1\u30fc\u30b8\u3067\u3059\u3002 \u30a2\u30d7\u30ea\u540d\u306f "Contact" \u3067\u3059\u3002'),(0,r.kt)("h2",{id:"-\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"},"\u2488 \u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,r.kt)("p",null,"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3001\u89e3\u51cd\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u304a\u3088\u3073\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a2\u30a4\u30b3\u30f3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u307e\u3060\u4f5c\u6210\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ContactApp/archive/acbb699c3c9d9edd3a8bbb715e87c17140b7e15f.zip"},"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")),(0,r.kt)("h2",{id:"-\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"},"\u2489 \u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"),(0,r.kt)("p",null,"4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8d77\u52d5\u3057\u3001\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304d\u307e\u3059\u3002 \u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u3092\u8868\u793a\u3057\u3066\u3001\u30c6\u30fc\u30d6\u30eb\u3092 1\u3064\u3060\u3051\u542b\u3093\u3060\u975e\u5e38\u306b\u30b7\u30f3\u30d7\u30eb\u306a\u3082\u306e\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u4e0a\u90e8\u306e\u30e1\u30cb\u30e5\u30fc\u304b\u3089 ",(0,r.kt)("strong",{parentName:"p"},"\u65b0\u898f \uff1e \u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")," \u3092\u9078\u629e\u3057\u307e\u3059\u3002 \u3088\u3046\u3053\u305d\u753b\u9762\u304c\u958b\u3044\u305f\u3089\u3001\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u540d\u524d\u3092\u3064\u3051\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d",src:a(59455).Z,width:"494",height:"449"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7d9a\u3051\u308b")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"Android\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u958b\u767a\u306b\u306f\u3001\u8ffd\u52a0\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u5fc5\u8981\u3067\u3059\u3002 ",(0,r.kt)("strong",{parentName:"p"},"OK")," \u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android",src:a(98624).Z,width:"434",height:"177"})),(0,r.kt)("h2",{id:"-\u4e00\u822c\u30da\u30fc\u30b8"},"\u248a \u4e00\u822c\u30da\u30fc\u30b8"),(0,r.kt)("p",null,"\u3053\u306e\u753b\u9762\u3067\u306f\u3001\u30a2\u30d7\u30ea\u306e\u57fa\u672c\u7684\u306a\u60c5\u5831\u3092\u5165\u529b\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android",src:a(11287).Z,width:"690",height:"638"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u30bf\u30fc\u30b2\u30c3\u30c8OS:")," \u30d3\u30eb\u30c9\u3059\u308b\u30e2\u30d0\u30a4\u30eb\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Windows \u3067\u306f\u3001",(0,r.kt)("strong",{parentName:"p"},"Android")," \u306e\u307f\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002 macOS \u3067\u306f\u3001",(0,r.kt)("strong",{parentName:"p"},"Android")," \u3068 ",(0,r.kt)("strong",{parentName:"p"},"iOS")," \u306e\u4e21\u65b9\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7d44\u7e54:")," \u958b\u767a\u8005 (\u3042\u306a\u305f) \u306e\u4f1a\u793e\u540d\u3068\u30a2\u30d7\u30ea\u306e\u8b58\u5225\u5b50\u3092\u82f1\u6570\u5b57\u3067\u5165\u529b\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u30d7\u30ed\u30c0\u30af\u30c8:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u540d\u524d:"),' \u30a2\u30d7\u30ea\u306e\u540d\u524d\u3067\u3059\u3002 \u3053\u3053\u3067\u306f "Contact" \u3068\u540d\u4ed8\u3051\u307e\u3057\u3087\u3046\u3002'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ID")," (\u30d0\u30f3\u30c9\u30ebID): \u7d44\u7e54\u306e\u8b58\u5225\u5b50\u3068\u30d7\u30ed\u30c0\u30af\u30c8\u540d\u3092\u7d44\u307f\u5408\u308f\u305b\u308b\u5f62\u3067\u81ea\u52d5\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u30d0\u30fc\u30b8\u30e7\u30f3")," \u3068 ",(0,r.kt)("strong",{parentName:"li"},"Copyright:")," \u3053\u3053\u3067\u306f 1.0 \u306b\u3057\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002\u30b3\u30d4\u30fc\u30e9\u30a4\u30c8\u60c5\u5831\u306f\u3001\u7de8\u96c6\u3057\u3066\u3082\u69cb\u3044\u307e\u305b\u3093\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u30a2\u30a4\u30b3\u30f3:")," \u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u53ce\u9332\u3055\u308c\u3066\u3044\u308b\u753b\u50cf\u30d5\u30a1\u30a4\u30eb (ContactIcon.png) \u3092\u30a8\u30ea\u30a2\u306b\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7\u3057\u307e\u3059\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u540d\u524d:")," \u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30fc\u306e\u30e6\u30fc\u30b6\u30fc\u540d\u304b\u3089\u81ea\u52d5\u5165\u529b\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u90e8\u7f72\u540d:")," Developer \u30a2\u30ab\u30a6\u30f3\u30c8\u306e Team ID \u3067\u3059\u3002 \u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u5411\u3051\u306b\u30d3\u30eb\u30c9\u3059\u308b\u3060\u3051\u3067\u3042\u308c\u3070\u3001\u7a7a\u6b04\u306e\u307e\u307e\u3067\u69cb\u3044\u307e\u305b\u3093\u3002")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u4e00\u822c",src:a(86239).Z,width:"1072",height:"994"})),(0,r.kt)("h2",{id:"-\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u30da\u30fc\u30b8"},"\u248b \u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u30da\u30fc\u30b8"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u30c7\u30d0\u30a4\u30b9\u306b\u5bfe\u3057\u3066\u516c\u958b\u3059\u308b\u30c7\u30fc\u30bf\u306e\u30b5\u30d6\u30bb\u30c3\u30c8 (\u5177\u4f53\u7684\u306b\u306f\u30c6\u30fc\u30d6\u30eb\u3084\u30d5\u30a3\u30fc\u30eb\u30c9) \u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002 \u5de6\u306e\u30a8\u30ea\u30a2\u3067\u30c6\u30fc\u30d6\u30eb\u3092\u3001\u53f3\u306e\u30a8\u30ea\u30a2\u3067\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4eca\u56de\u306f\u3001",(0,r.kt)("strong",{parentName:"p"},"ID"),", ",(0,r.kt)("strong",{parentName:"p"},"First Name"),", ",(0,r.kt)("strong",{parentName:"p"},"Last Name"),", ",(0,r.kt)("strong",{parentName:"p"},"Job"),", ",(0,r.kt)("strong",{parentName:"p"},"Company"),", ",(0,r.kt)("strong",{parentName:"p"},"Phone"),", ",(0,r.kt)("strong",{parentName:"p"},"Notes"),", ",(0,r.kt)("strong",{parentName:"p"},"Photo")," \u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc",src:a(15692).Z,width:"1072",height:"994"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u5404\u30ec\u30b3\u30fc\u30c9\u3092\u8b58\u5225\u3059\u308b\u305f\u3081\u3001\u30d7\u30e9\u30a4\u30de\u30ea\u30fc\u30ad\u30fc (\u3053\u3053\u3067\u306f ID\u30d5\u30a3\u30fc\u30eb\u30c9) \u306f\u9664\u5916\u3057\u306a\u3044\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h2",{id:"-\u30e9\u30d9\u30eb--\u30a2\u30a4\u30b3\u30f3\u30da\u30fc\u30b8"},"\u248c \u30e9\u30d9\u30eb & \u30a2\u30a4\u30b3\u30f3\u30da\u30fc\u30b8"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/ja/docs/project-definition/data"},(0,r.kt)("strong",{parentName:"a"},"\u30c7\u30fc\u30bf"))," \u3068 ",(0,r.kt)("a",{parentName:"p",href:"/ja/docs/project-definition/actions"},(0,r.kt)("strong",{parentName:"a"},"\u30a2\u30af\u30b7\u30e7\u30f3"))," \u30da\u30fc\u30b8\u3067\u306f\u3001\u30a2\u30d7\u30ea\u306e\u30c7\u30fc\u30bf\u3092\u8a2d\u5b9a\u3057\u305f\u308a\u3001\u30b5\u30fc\u30d0\u30fc\u4e0a\u306e\u30b3\u30fc\u30c9\u3092\u30c8\u30ea\u30ac\u30fc\u3057\u305f\u308a\u3067\u304d\u307e\u3059\u3002 \u4eca\u56de\u306f\u3001\u30b7\u30f3\u30d7\u30eb\u306b\u3059\u308b\u305f\u3081\u306b\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u4f5c\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30e9\u30d9\u30eb & \u30a2\u30a4\u30b3\u30f3")," \u30da\u30fc\u30b8\u3092\u9078\u629e\u3057\u307e\u3059\u3002 \u3053\u3053\u3067\u306f\u3001\u30c6\u30fc\u30d6\u30eb\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u3001\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066\u3001\u30a2\u30d7\u30ea\u5185\u3067\u4f7f\u7528\u3055\u308c\u308b\u30e9\u30d9\u30eb\u3084\u30a2\u30a4\u30b3\u30f3\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u77ed\u3044\u30e9\u30d9\u30eb\u3068\u9577\u3044\u30e9\u30d9\u30eb\u306f\u3001\u5229\u7528\u53ef\u80fd\u306a\u30b9\u30da\u30fc\u30b9\u306b\u5fdc\u3058\u3066\u30a2\u30d7\u30ea\u304c\u81ea\u52d5\u7684\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30c6\u30fc\u30d6\u30eb\u30a2\u30a4\u30b3\u30f3\u3092\u5b9a\u7fa9\u3059\u308b\u306b\u306f\u3001\u30c6\u30fc\u30d6\u30eb\u306e ",(0,r.kt)("strong",{parentName:"li"},"\u30a2\u30a4\u30b3\u30f3")," \u30ab\u30e9\u30e0\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002 \u30a2\u30a4\u30b3\u30f3\u30e9\u30a4\u30d6\u30e9\u30ea\u30fc\u304c\u8868\u793a\u3055\u308c\u3001\u30c6\u30fc\u30d6\u30eb\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u8aac\u660e\u3059\u308b\u30a2\u30a4\u30b3\u30f3\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u307e\u305f\u3001\u30a2\u30a4\u30b3\u30f3\u3092\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30a2\u30a4\u30b3\u30f3\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u5c11\u306a\u304f\u3068\u3082 1\u3064\u3092\u9078\u629e\u3057\u307e\u3057\u3087\u3046\u3002\u6b8b\u308a\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u3064\u3044\u3066\u306f\u3001\u30a8\u30c7\u30a3\u30bf\u30fc\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u751f\u6210\u3057\u307e\u3059\u3002 \u307e\u305f\u3001\u3059\u3079\u3066\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u7a7a\u306b\u3059\u308b\u3053\u3068\u3067\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u30a2\u30a4\u30b3\u30f3\u3092\u8868\u793a\u3055\u305b\u306a\u3044\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30e9\u30d9\u30eb\uff06\u30a2\u30a4\u30b3\u30f3",src:a(47876).Z,width:"1082",height:"1002"})),(0,r.kt)("h2",{id:"-\u30d5\u30a9\u30fc\u30e0"},"\u248d \u30d5\u30a9\u30fc\u30e0"),(0,r.kt)("p",null,"\u3042\u3068\u3082\u3046\u5c11\u3057\u3067\u3059\uff01\u3000\u30a2\u30d7\u30ea\u306e\u5916\u89b3\u3092\u6c7a\u3081\u308b\u305f\u3081\u306b\u3001\u30c7\u30b6\u30a4\u30f3\u3092\u9078\u3073\u307e\u3057\u3087\u3046\u3002 \u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u3068\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u3001\u305d\u308c\u305e\u308c\u306e\u30b5\u30f3\u30d7\u30eb\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30ec\u30b3\u30fc\u30c9\u3092\u30ea\u30b9\u30c8\u5f62\u5f0f\u3067\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u3001list\u30d3\u30e5\u30fc\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u9078\u629e\u3057\u307e\u3059\u3002 \u3053\u3053\u3067\u306f\u3001",(0,r.kt)("strong",{parentName:"li"},"Profile")," \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3057\u3087\u3046\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",src:a(90438).Z,width:"1072",height:"994"})),(0,r.kt)("p",null,"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u9078\u629e\u3059\u308b\u3068\u3001\u8a2d\u5b9a\u753b\u9762\u306e\u4e0b\u534a\u5206\u304c\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u30ea\u30b9\u30c8\u304b\u3089\u30c7\u30b6\u30a4\u30f3\u753b\u9762\u306b\u5207\u308a\u66ff\u308f\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'\u8868\u793a\u3055\u305b\u305f\u3044\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7\u3057\u307e\u3059\u3002Last Name \u3092 "\u691c\u7d22\u306b\u4f7f\u7528\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9" \u3068 "\u30bf\u30a4\u30c8\u30eb" \u306b\u30c9\u30ed\u30c3\u30d7\u3057\u307e\u3057\u3087\u3046\u3002 "\u691c\u7d22\u306b\u4f7f\u7528\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9" \u304a\u3088\u3073 "\u30bb\u30af\u30b7\u30e7\u30f3\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9" \u306e\u4f7f\u7528\u306f\u4efb\u610f\u3067\u3059\u3002\u3053\u3053\u3067\u306f\u3001\u30bb\u30af\u30b7\u30e7\u30f3\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u672a\u5b9a\u7fa9\u306e\u307e\u307e\u306b\u3057\u307e\u3059\u3002')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u4e2d\u8eab",src:a(35757).Z,width:"1082",height:"1009"})),(0,r.kt)("p",null,"\u3042\u3068\u306f\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u3092\u6c7a\u3081\u308b\u3060\u3051\u3067\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u306e\u30b3\u30f3\u30bb\u30d7\u30c8\u306b\u3075\u3055\u308f\u3057\u3044\u30c7\u30b6\u30a4\u30f3\u3092\u9078\u3076\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u3053\u3053\u3067\u306f\u3001",(0,r.kt)("strong",{parentName:"li"},"Visual Contact")," \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3057\u3087\u3046\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",src:a(95418).Z,width:"1072",height:"994"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u9069\u5207\u306a\u5834\u6240\u306b\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7\u3057\u307e\u3059: Photo \u306f "\u30d4\u30af\u30c1\u30e3\u30fc"\u3001First Name \u306f "\u30d5\u30a3\u30fc\u30eb\u30c91"\u3001Last Name \u306f "\u30d5\u30a3\u30fc\u30eb\u30c92"\u3002\u305d\u306e\u4e0b\u306e\u7a7a\u767d\u90e8\u306b\u8ffd\u52a0\u3057\u305f\u3044\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u30c9\u30ed\u30c3\u30d7\u3059\u308c\u3070\u3001\u8868\u793a\u9805\u76ee\u3092\u5897\u3084\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u306e\u4e2d\u8eab",src:a(5454).Z,width:"1082",height:"1009"})),(0,r.kt)("h2",{id:"-\u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9"},"\u248e \u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9"),(0,r.kt)("p",null,"\u304a\u3064\u304b\u308c\u3055\u307e\u3067\u3057\u305f\uff01 \u30c7\u30b6\u30a4\u30f3\u3057\u305f\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3057\u3066\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3067\u52d5\u304b\u3057\u3066\u307f\u307e\u3057\u3087\u3046\uff01"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u753b\u9762\u3092 ",(0,r.kt)("strong",{parentName:"li"},"\u30d3\u30eb\u30c9")," \u30bf\u30d6\u306b\u5207\u308a\u66ff\u3048\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6a5f\u7a2e\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3067\u8d77\u52d5\u3059\u308b\u30c7\u30d0\u30a4\u30b9\u306e\u30e2\u30c7\u30eb\u3092\u9078\u3073\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u305d\u306e\u307e\u307e\u5f85\u3063\u3066\u3044\u308b\u3068\u2026 \u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u5b8c\u6210\u3067\u3059\uff01")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c",src:a(60059).Z,width:"1134",height:"1020"})),(0,r.kt)("h2",{id:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b"},"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f"),(0,r.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30a2\u30d7\u30ea\u306e\u57fa\u672c\u7684\u306a\u4f5c\u308a\u65b9\u3092\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002\u307b\u3093\u3068\u3046\u306b\u624b\u8efd\u306b\u4f5c\u308c\u308b\u3001\u3068\u3044\u3046\u624b\u5fdc\u3048\u304c\u5f97\u3089\u308c\u305f\u306e\u3067\u306f\u306a\u3044\u3067\u3057\u3087\u3046\u304b\u3002 \u3082\u3061\u308d\u3093\u3001\u4ed6\u306b\u3082\u3055\u307e\u3056\u307e\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u3084\u6a5f\u80fd\u3092\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002 \u4e0b\u306e ",(0,r.kt)("strong",{parentName:"p"},"\u5b8c\u6210\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")," \u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u5b8c\u6210\u3057\u305f Contact \u30a2\u30d7\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("div",null,(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ContactApp/releases/latest/download/tutorial-ContactApp.zip"},"\u5b8c\u6210\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")))}m.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=s(a),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(k,o(o({ref:e},c),{},{components:a})):n.createElement(k,o({ref:e},c))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},60059:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Build-the-app-simulator-3e333cd7270b3db48d9d13ddc08eca16.png"},86239:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Contact-app-general-section-4D-for-iOS-415929c9b37bd87cad05677393c72379.png"},47876:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Contact-app-icons-labels-section-4D-for-iOS-6304c32db85ce66c2531ef967fadc4e2.png"},15692:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Contact-app-structure-section-4D-for-iOS-db8f77b9d72adb1da7ca60ac395d5e14.png"},5454:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/DetailformContent-form-section-4D-for-iOS-cf5589e87a43cd76af8b2da9e95b7196.png"},95418:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/DetailformTemplate-form-section-4D-for-iOS-bea0d9cad18badd0d39904aeef5c7f12.png"},35757:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/ListformContent-form-section-4D-for-iOS-53751545293f31d01732505adf0da501.png"},90438:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/ListformTemplate-form-section-4D-for-iOS-b4e534d35ca6502c7284f53a90db723e.png"},98624:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/install-android-d1cf84f8b66e0e3a9542a3a690ccd020.png"},11287:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/main-page-2a9d6b072df7c0677fec62be03e01fab.png"},59455:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/new-project-0086ec2255f336ef09eac7d109da09c4.png"}}]);