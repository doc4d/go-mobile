"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9403],{44269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"custom-login-form",title:"\u30ab\u30b9\u30bf\u30e0\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0"},l=void 0,i={unversionedId:"tutorials/custom-login-form",id:"version-19-R7/tutorials/custom-login-form",title:"\u30ab\u30b9\u30bf\u30e0\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0",description:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u6b21\u306e\u3053\u3068\u3092\u7d39\u4ecb\u3057\u307e\u3059:",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R7/tutorials/custom-login-form.md",sourceDirName:"tutorials",slug:"/tutorials/custom-login-form",permalink:"/go-mobile/ja/docs/19-R7/tutorials/custom-login-form",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R7/tutorials/custom-login-form.md",tags:[],version:"19-R7",frontMatter:{id:"custom-login-form",title:"\u30ab\u30b9\u30bf\u30e0\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0"},sidebar:"tutorials",previous:{title:"4D \u3067\u6700\u521d\u306e\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046\uff01",permalink:"/go-mobile/ja/docs/19-R7/tutorials/create-your-first-app"},next:{title:"\u30ea\u30b9\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",permalink:"/go-mobile/ja/docs/19-R7/tutorials/creating-list-forms/list-form-template"}},s={},p=[{value:"\u2488 \u306f\u3058\u3081\u306b",id:"-\u306f\u3058\u3081\u306b",level:2},{value:"\u2489 \u30ab\u30b9\u30bf\u30e0\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0\u3092\u8ffd\u52a0\u3059\u308b",id:"-\u30ab\u30b9\u30bf\u30e0\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0\u3092\u8ffd\u52a0\u3059\u308b",level:2},{value:"\u248a On Mobile App Authentication \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9",id:"-on-mobile-app-authentication-\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9",level:2},{value:"\u248b \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9",id:"-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9",level:2},{value:"Authentication \u30e1\u30bd\u30c3\u30c9",id:"authentication-\u30e1\u30bd\u30c3\u30c9",level:3},{value:"GenerateQRCODE \u30e1\u30bd\u30c3\u30c9",id:"generateqrcode-\u30e1\u30bd\u30c3\u30c9",level:3},{value:"\u248c Web\u30b5\u30a4\u30c8",id:"-web\u30b5\u30a4\u30c8",level:2},{value:"index.html",id:"indexhtml",level:3},{value:"createQRCode.html",id:"createqrcodehtml",level:3},{value:"generatedQRCode.shtml",id:"generatedqrcodeshtml",level:3},{value:"\u248d \u30c6\u30b9\u30c8\u3057\u307e\u3057\u3087\u3046",id:"-\u30c6\u30b9\u30c8\u3057\u307e\u3057\u3087\u3046",level:2},{value:"Web\u30b5\u30a4\u30c8\u306e\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b",id:"web\u30b5\u30a4\u30c8\u306e\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b",level:3},{value:"QR\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3059\u308b",id:"qr\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3059\u308b",level:3},{value:"\u5b9f\u6a5f\u3067\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b",id:"\u5b9f\u6a5f\u3067\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b",level:3},{value:"\u248e \u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f",id:"-\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u6b21\u306e\u3053\u3068\u3092\u7d39\u4ecb\u3057\u307e\u3059:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30ab\u30b9\u30bf\u30e0 ",(0,r.kt)("a",{parentName:"li",href:"https://4d-for-ios.github.io/gallery/#/type/form-login"},"\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0")," \u306e\u4f5c\u6210\u3068\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"QR\u30b3\u30fc\u30c9\u306e\u30b9\u30ad\u30e3\u30f3\u306b\u3088\u308b\u8a8d\u8a3c\u6e08\u307f\u30e6\u30fc\u30b6\u30fc\u306e\u30ed\u30b0\u30a4\u30f3",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u7528\u610f\u3059\u308b\u3082\u306e")),(0,r.kt)("p",{parentName:"blockquote"},"\u8a8d\u8a3c\u6e08\u307f\u30e6\u30fc\u30b6\u30fc\u3092\u3082\u3064 Web\u30b5\u30a4\u30c8"),(0,r.kt)("p",{parentName:"blockquote"},"4D v18R6 \u4ee5\u4e0a"),(0,r.kt)("p",{parentName:"blockquote"},"iOS\u30e2\u30d0\u30a4\u30eb\u30c7\u30d0\u30a4\u30b9\u306e\u5b9f\u6a5f (\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u306f\u30ab\u30e1\u30e9\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30c8\u3057\u306a\u3044\u305f\u3081)")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u30b7\u30ca\u30ea\u30aa: \u8a8d\u8a3c\u6e08\u307f\u30e6\u30fc\u30b6\u30fc\u3092\u3082\u3064 Web\u30b5\u30a4\u30c8\u304c\u3059\u3067\u306b\u3042\u308a\u3001QR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3059\u308b\u3060\u3051\u3067\u305d\u308c\u3089\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u30a2\u30d7\u30ea\u306b\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3002")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u304b\u3089\u30ab\u30b9\u30bf\u30e0\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0\u3092\u9078\u629e\u3059\u308b\u6a5f\u80fd\u306f\u307e\u3060\u5b9f\u88c5\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u304c\u3001\u624b\u52d5\u3067\u304a\u3053\u306a\u3046\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002")),(0,r.kt)("h2",{id:"-\u306f\u3058\u3081\u306b"},"\u2488 \u306f\u3058\u3081\u306b"),(0,r.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u6b21\u306e\u3053\u3068\u3092\u304a\u3053\u306a\u3044\u307e\u3059:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30ab\u30b9\u30bf\u30e0\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0\u3092\u8ffd\u52a0\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},"QR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3059\u308b\u3060\u3051\u3067\u3001\u30a2\u30d7\u30ea\u30e6\u30fc\u30b6\u30fc\u304c\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u308b\u6a5f\u80fd\u3092\u5b9f\u88c5\u3059\u308b")),(0,r.kt)("p",null,"\u307e\u305a\u3001\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u306f\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u306e\u307b\u304b\u306b\u3001\u3059\u3050\u306b\u4f7f\u3048\u308b Web\u30da\u30fc\u30b8\u304c WebFolder\u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u683c\u7d0d\u3055\u308c\u3066\u3044\u307e\u3059:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomLoginForm/archive/main.zip"},"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u306f\u3001\u5404\u8a8d\u8a3c\u6e08\u307f\u30e6\u30fc\u30b6\u30fc\u306b\u3064\u3044\u3066\u30ed\u30b0\u30a4\u30f3ID \u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u683c\u7d0d\u3057\u305f Users \u30c6\u30fc\u30d6\u30eb\u304c\u3042\u3089\u304b\u3058\u3081\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)("h2",{id:"-\u30ab\u30b9\u30bf\u30e0\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0\u3092\u8ffd\u52a0\u3059\u308b"},"\u2489 \u30ab\u30b9\u30bf\u30e0\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0\u3092\u8ffd\u52a0\u3059\u308b"),(0,r.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0\u3092\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001\u307e\u305a ",(0,r.kt)("em",{parentName:"p"},"YourDatabase.4dbase/Resources/Mobile/form/login")," \u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mesopelagique/form-login-SignInWithQRCode/archive/master.zip"},"QR\u30b3\u30fc\u30c9\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0")," \u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3001\u5148\u307b\u3069\u4f5c\u6210\u3057\u305f login \u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u30c9\u30ed\u30c3\u30d7\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"login \u30d5\u30a9\u30eb\u30c0\u30fc",src:n(97134).Z,width:"2020",height:"814"})),(0,r.kt)("p",null,"\u6b21\u306b\u3001",(0,r.kt)("em",{parentName:"p"},"YourDatabase.4dbase/Mobile Projects/ContactQRCodeLogin/project.4dmobileapp")," \u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"project.4dmobileapp",src:n(98086).Z,width:"2020",height:"814"})),(0,r.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u9589\u3058\u305f\u72b6\u614b\u3067\u3001\u4ee5\u4e0b\u306e\u884c\u3092\u8ffd\u52a0\u3057\u307e\u3059: ",(0,r.kt)("em",{parentName:"p"},'"login":"/SignInWithQRCode",')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "info": {\n        "version": 5,\n        "target": "iOS",\n        "ideVersion": "1870",\n        "ideBuildVersion": "261295",\n        "componentBuild": ""\n    },\n    "login": "/SignInWithQRCode",\n    ...\n\n')),(0,r.kt)("p",null,"\u3053\u308c\u306b\u3088\u308a\u3001\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u521d\u671f\u5316\u3057\u3001\u30d3\u30eb\u30c9\u30d7\u30ed\u30bb\u30b9\u4e2d\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u3067\u3001\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u8ffd\u52a0\u306f\u5b8c\u4e86\u3067\u3059\u3002 \u7c21\u5358\u3067\u3057\u305f\u306d!"),(0,r.kt)("h2",{id:"-on-mobile-app-authentication-\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9"},"\u248a On Mobile App Authentication \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9"),(0,r.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304d\u3001ContactQRCodeLogin \u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u3044\u3066\u3001\u516c\u958b\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u3001\u8a8d\u8a3c\u6a5f\u80fd\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u3001\u4f5c\u6210\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3092\u4f5c\u6210\u3057\u307e\u3059 (\u3059\u3067\u306b\u4f5c\u6210\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u7de8\u96c6\u30dc\u30bf\u30f3\u306b\u5909\u5316\u3057\u307e\u3059)\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u516c\u958b\u30bb\u30af\u30b7\u30e7\u30f3",src:n(20136).Z,width:"2164",height:"2000"})),(0,r.kt)("p",null,"\u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c\u306e\u305f\u3081\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a18\u8ff0\u3057\u307e\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'var $0 : Object\nvar $1 : Object\n\nvar $request; $response : Object\n\n$request:=$1  // \u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u304b\u3089\u63d0\u4f9b\u3055\u308c\u308b\u60c5\u5831\n$response:=New object  // \u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306b\u8fd4\u3055\u308c\u308b\u60c5\u5831\n\n$entity:=ds.User.query("login = :1"; $request.email)\nIf ($entity.length>0)\n    $password:=$entity.first().password  // \u30c6\u30fc\u30d6\u30eb\u304b\u3089\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u53d6\u5f97\u3057\u307e\u3059\n\n    If (Verify password hash($password; $request.parameters.token))\n        // \u30ea\u30af\u30a8\u30b9\u30c8\u304b\u3089\u53d7\u3051\u53d6\u3063\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u3068\u6bd4\u8f03\u3057\u307e\u3059\n\n        $response.success:=True\n    Else \n        $response.success:=False\n    End if \nElse \n    $response.success:=False\nEnd if \n\n// \u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306b\u8868\u793a\u3059\u308b\u4efb\u610f\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\nIf ($response.success)\n    $response.statusText:="\u8a8d\u8a3c\u306b\u6210\u529f\u3057\u307e\u3057\u305f"\nElse \n    $response.statusText:="\u3053\u306e\u30a2\u30d7\u30ea\u3092\u4f7f\u7528\u3059\u308b\u6a29\u9650\u304c\u3042\u308a\u307e\u305b\u3093"\nEnd if \n\n$0:=$response\n')),(0,r.kt)("h2",{id:"-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9"},"\u248b \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9"),(0,r.kt)("h3",{id:"authentication-\u30e1\u30bd\u30c3\u30c9"},"Authentication \u30e1\u30bd\u30c3\u30c9"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u30d5\u30a9\u30fc\u30e0\u304b\u3089\u5909\u6570\u3092\u53d6\u5f97\u3057\u3001\u305d\u308c\u3089\u306e\u5024\u304c User\u30c6\u30fc\u30d6\u30eb\u306b\u5b58\u5728\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3057\u307e\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'// \u30d5\u30a9\u30fc\u30e0\u306e\u5909\u6570\u3092\u3059\u3079\u3066\u53d6\u5f97\u3057\u307e\u3059\nC_TEXT($1)\nARRAY TEXT($arrNames; 0)\nARRAY TEXT($arrVals; 0)\n\n// \u8a8d\u8a3c Web\u30da\u30fc\u30b8\u306e\u5909\u6570\u306e\u3046\u3061\u3001\u30ed\u30b0\u30a4\u30f3ID \u304a\u3088\u3073\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u53d6\u5f97\u3057\u307e\u3059\nWEB GET VARIABLES($arrNames; $arrVals)\n$VLOGIN:=Find in array($arrNames; "VLOGIN")\n$VPASS:=Find in array($arrNames; "VPASS")\n\n// \u30b3\u30fc\u30c9\u304b\u3089\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u3001\u5171\u6709\u5909\u6570\u3092\u4f5c\u6210\u3057\u307e\u3059\nUse (Storage)\n    Storage.session:=New shared object("login"; ""; "password"; "")\nEnd use \n\n// \u30e6\u30fc\u30b6\u30fc\u3092\u8a8d\u8a3c\u3057\u3066\u3088\u3044\u304b\u78ba\u8a8d\u3059\u308b\u305f\u3081\u3001\u30ed\u30b0\u30a4\u30f3\u60c5\u5831\u304c\u5b58\u5728\u3059\u308b\u304b\u691c\u7d22\u3057\u307e\u3059\n$entity:=ds.User.query("login = :1 and password = :2"; $arrVals{$VLOGIN}; $arrVals{$VPASS})\n\n// \u898b\u3064\u304b\u3063\u305f\u5834\u5408\u306f\u3001\u30ed\u30b0\u30a4\u30f3\u60c5\u5831\u3092\u5171\u6709\u5909\u6570\u306b\u4ee3\u5165\u3057\u307e\u3059\nIf ($entity.length>0)\n    Use (Storage.session)\n        Storage.session.login:=$arrVals{$VLOGIN}\n        Storage.session.password:=$arrVals{$VPASS}\n        Storage.session.success:=True\n    End use \n\n    // Web\u30da\u30fc\u30b8\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3057\u307e\u3059\n    WEB SEND HTTP REDIRECT("/createQRCode.html")\n\nElse \n    // \u30db\u30fc\u30e0\u30da\u30fc\u30b8\u306b\u623b\u308a\u307e\u3059\n    Use (Storage.session)\n        Storage.session.success:=False\n    End use \n    WEB SEND HTTP REDIRECT("/")\nEnd if \n')),(0,r.kt)("h3",{id:"generateqrcode-\u30e1\u30bd\u30c3\u30c9"},"GenerateQRCODE \u30e1\u30bd\u30c3\u30c9"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u3001vqrCodeData \u3092\u751f\u6210\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3068\u6697\u53f7\u5316\u3055\u308c\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u542b\u3080 json \u3067\u3001QR\u30b3\u30fc\u30c9\u306b\u57cb\u3081\u8fbc\u307e\u308c\u308b\u3053\u3068\u306b\u306a\u308b\u30c7\u30fc\u30bf\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'// Storage \u5909\u6570\u3092\u4f7f\u3044\u307e\u3059\n$currentUserEmail:=Storage.session.login\n$token:=Storage.session.password\n$options:=New object("algorithm"; "bcrypt"; "cost"; 4)\n$hash:=Generate password hash($token; $options)\n\n// vqrCodeData \u5909\u6570\u3092\u751f\u6210\u3057\u307e\u3059 (\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3068\u6697\u53f7\u5316\u3055\u308c\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u306e json \u5024)\nvqrCodeData:=JSON Stringify(New object("email"; $currentUserEmail; "token"; $hash))\n\n// QR\u30b3\u30fc\u30c9 Web\u30da\u30fc\u30b8\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3057\u307e\u3059\nWEB SEND HTTP REDIRECT("/generatedQRCode.shtml")\n')),(0,r.kt)("h2",{id:"-web\u30b5\u30a4\u30c8"},"\u248c Web\u30b5\u30a4\u30c8"),(0,r.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001WebFolder \u30d5\u30a9\u30eb\u30c0\u30fc\u306b 3\u3064\u306e html\u30da\u30fc\u30b8\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8a8d\u8a3c\u30da\u30fc\u30b8 (index.html)"),(0,r.kt)("li",{parentName:"ul"},"QR\u30b3\u30fc\u30c9\u751f\u6210\u30da\u30fc\u30b8 (createQRCode.html)"),(0,r.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u30fc\u304c\u30e2\u30d0\u30a4\u30eb\u30c7\u30d0\u30a4\u30b9\u3067\u30b9\u30ad\u30e3\u30f3\u3059\u308b\u6700\u7d42\u30da\u30fc\u30b8 (generatedQRCode.shtml)")),(0,r.kt)("p",null,"\u3053\u308c\u3089 3\u3064\u306e\u30da\u30fc\u30b8\u3092\u898b\u3066\u3044\u304d\u307e\u3057\u3087\u3046:"),(0,r.kt)("h3",{id:"indexhtml"},"index.html"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f 4DACTION \u3092\u4f7f\u3063\u3066\u3001\u30b9\u30c6\u30c3\u30d74 \u3067\u78ba\u8a8d\u3057\u305f ",(0,r.kt)("em",{parentName:"p"},"Authentication \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9")," \u3067\u4f7f\u7528\u3059\u308b\u30ed\u30b0\u30a4\u30f3\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092 POST \u3057\u307e\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'  <form class="box" ACTION="/4DACTION/Authentication" METHOD=post>\n  <h1>1. Login</h1>\n  <input type="text" id="login" placeholder="Username" name=VLOGIN >\n  <input type="password" id="login" placeholder="Password" name=VPASS>\n  <input type="submit" name="" value="Login">\n  </form>\n')),(0,r.kt)("h3",{id:"createqrcodehtml"},"createQRCode.html"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f 4DACTION \u3092\u4f7f\u7528\u3057\u3066\u3001",(0,r.kt)("em",{parentName:"p"},"GenerateQRCODE \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9")," \u3092\u547c\u3073\u51fa\u3057\u3066\u3044\u307e\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<h1>2. GENERATE YOUR QRCODE</h1>\n    <div>\n        <p>Create your QRCode to authenticate clicking <a href="/4DACTION/GenerateQRCODE">Here</a></p>\n    </div>\n')),(0,r.kt)("h3",{id:"generatedqrcodeshtml"},"generatedQRCode.shtml"),(0,r.kt)("p",null,"\u3053\u306e\u6700\u5f8c\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/ja/Tags/tags/"},"4D\u30bf\u30b0")," \u3092\u4f7f\u3063\u3066\u3001",(0,r.kt)("em",{parentName:"p"},"data")," \u306e\u5024\u3092\u53d6\u5f97\u3057\u3066\u3044\u307e\u3059:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<h1>3. SCAN THE QRCODE FROM YOUR PHONE</h1>\n  <div id="canvas"></div>\n\n  <script type="text/javascript">\n\n    const qrCode = new QRCodeStyling({\n      width: 300,\n      height: 300,\n      data: \'\x3c!--#4DEVAL vqrCodeData--\x3e\',\n      dotsOptions: {\n        color: "#000",\n        type: "square"\n      },\n      backgroundOptions: {\n        color: "#FFFFFF",\n      }\n    });\n    qrCode.append(document.getElementById("canvas"));\n  <\/script>\n\n')),(0,r.kt)("h2",{id:"-\u30c6\u30b9\u30c8\u3057\u307e\u3057\u3087\u3046"},"\u248d \u30c6\u30b9\u30c8\u3057\u307e\u3057\u3087\u3046"),(0,r.kt)("h3",{id:"web\u30b5\u30a4\u30c8\u306e\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b"},"Web\u30b5\u30a4\u30c8\u306e\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b"),(0,r.kt)("p",null,'\u5b9f\u884c\u30e1\u30cb\u30e5\u30fc\u304b\u3089 "Web \u30b5\u30fc\u30d0\u30fc\u30c6\u30b9\u30c8" \u3092\u9078\u629e\u3057\u3066 Web\u30b5\u30a4\u30c8\u306e\u30db\u30fc\u30e0\u30da\u30fc\u30b8\u3092\u958b\u304d\u3001Username \u6b04\u306b ',(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"mailto:david@4D.com"},"david@4D.com")),"\u3001Password \u30d5\u30a3\u30fc\u30eb\u30c9\u306b ",(0,r.kt)("strong",{parentName:"p"},"TEST")," \u3068\u5165\u529b\u3057\u3001Login \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059 (\u3053\u308c\u306f User \u30c6\u30fc\u30d6\u30eb\u306b\u5b58\u5728\u3059\u308b\u30ec\u30b3\u30fc\u30c9\u3067\u3059)\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Login \u30d5\u30a9\u30fc\u30e0",src:n(1269).Z,width:"2330",height:"1418"})),(0,r.kt)("h3",{id:"qr\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3059\u308b"},"QR\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3059\u308b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HERE")," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001QR\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"QR\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3059\u308b",src:n(2459).Z,width:"2330",height:"1418"})),(0,r.kt)("p",null,"\u6700\u5f8c\u306e QR\u30b3\u30fc\u30c9\u306e\u30da\u30fc\u30b8\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u751f\u6210\u3055\u308c\u305f QR\u30b3\u30fc\u30c9",src:n(68042).Z,width:"2554",height:"1594"})),(0,r.kt)("h3",{id:"\u5b9f\u6a5f\u3067\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b"},"\u5b9f\u6a5f\u3067\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b"),(0,r.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u304b\u3089\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u5b9f\u6a5f\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3059\u308b\u3068\u3001\u30ab\u30b9\u30bf\u30e0\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u3053\u3053\u3067\u3001\u3055\u304d\u307b\u3069\u751f\u6210\u3057\u305f QR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3059\u308b\u3053\u3068\u3067\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306b\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u3088\u3046\u306a\u7d50\u679c\u306b\u306a\u308a\u307e\u3059:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"QR\u30b3\u30fc\u30c9\u3067\u30b5\u30a4\u30f3\u30a4\u30f3",src:n(42344).Z,width:"900",height:"563"})),(0,r.kt)("h2",{id:"-\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b"},"\u248e \u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f"),(0,r.kt)("p",null,"\u30b9\u30c6\u30c3\u30d72 \u3067\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306b\u4efb\u610f\u306e\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0\u3092\u7c21\u5358\u306b\u8ffd\u52a0\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002 \u540c\u69d8\u306b\u3001\u4f5c\u6210\u3057\u305f\u72ec\u81ea\u306e\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0\u3092\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306b\u8ffd\u52a0\u3057\u3066\u3001\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u307e\u305f\u3001\u305d\u306e\u5f8c\u306e\u624b\u9806\u3067\u306f\u3001Sign In With QRCode \u30ed\u30b0\u30a4\u30f3\u306e\u5b9f\u88c5\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3092\u4f7f\u3046\u3068\u3001\u8a8d\u8a3c\u6e08\u307f\u30e6\u30fc\u30b6\u30fc\u304c QR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3057\u3066\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306b\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98086:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4dmobileapp-file-7cfeb3ed913af5e2efd4e5648fa04fb8.png"},2459:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-qr-code-92fb34962678fd5aec2c78c3975485e2.png"},68042:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/generated-qr-code-b8adf3b5a3147675e82e1c11828bfe16.png"},97134:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/login-folder-5b1131cc505b021c9991c73d79d626b2.png"},1269:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/login-form-503af282635c8c852d6ec6ff0697d820.png"},20136:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/publishing-section-88709c4b88a53b4c808e536eaa85a51f.png"},42344:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sign-in-with-qr-code-f835be625ce5eece635c10088e55430c.gif"}}]);