"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3040],{37761:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const s={id:"authentication",title:"\u8a8d\u8a3c"},o=void 0,r={unversionedId:"special-features/authentication",id:"version-19-R6/special-features/authentication",title:"\u8a8d\u8a3c",description:"\u8a8d\u8a3c\u3092\u6709\u52b9\u5316\u3059\u308b",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R6/special-features/authentication.md",sourceDirName:"special-features",slug:"/special-features/authentication",permalink:"/go-mobile/ja/docs/special-features/authentication",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/special-features/authentication.md",tags:[],version:"19-R6",frontMatter:{id:"authentication",title:"\u8a8d\u8a3c"},sidebar:"docs",previous:{title:"\u30d3\u30eb\u30c9\u30d1\u30cd\u30eb",permalink:"/go-mobile/ja/docs/project-definition/build-panel"},next:{title:"\u30bb\u30c3\u30b7\u30e7\u30f3\u7ba1\u7406",permalink:"/go-mobile/ja/docs/special-features/session-management"}},l={},p=[{value:"\u8a8d\u8a3c\u3092\u6709\u52b9\u5316\u3059\u308b",id:"\u8a8d\u8a3c\u3092\u6709\u52b9\u5316\u3059\u308b",level:2},{value:"On Mobile App Authentication \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9",id:"on-mobile-app-authentication-\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9",level:3},{value:"\u30e1\u30fc\u30eb\u8a8d\u8a3c",id:"\u30e1\u30fc\u30eb\u8a8d\u8a3c",level:2},{value:"\u6982\u8981",id:"\u6982\u8981",level:3},{value:"1. \u8a8d\u8a3c\u3092\u6709\u52b9\u5316\u3059\u308b",id:"1-\u8a8d\u8a3c\u3092\u6709\u52b9\u5316\u3059\u308b",level:4},{value:"2. \u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3059\u308b",id:"2-\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3059\u308b",level:4},{value:"3. \u30e1\u30fc\u30eb\u30dc\u30c3\u30af\u30b9\u3092\u78ba\u8a8d\u3057\u3066\u30014. \u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b",id:"3-\u30e1\u30fc\u30eb\u30dc\u30c3\u30af\u30b9\u3092\u78ba\u8a8d\u3057\u30664-\u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b",level:4},{value:"5. \u304a\u3088\u3073 6. \u30a2\u30d7\u30ea\u306b\u623b\u308b",id:"5-\u304a\u3088\u3073-6-\u30a2\u30d7\u30ea\u306b\u623b\u308b",level:4},{value:"4D Mobile App Server \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4f7f\u7528",id:"4d-mobile-app-server-\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4f7f\u7528",level:3},{value:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408",id:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408",level:3},{value:"\u30ea\u30e2\u30fc\u30c8URL\u306e\u5b9a\u7fa9",id:"\u30ea\u30e2\u30fc\u30c8url\u306e\u5b9a\u7fa9",level:3}],c={toc:p};function u(e){let{components:n,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u8a8d\u8a3c\u3092\u6709\u52b9\u5316\u3059\u308b"},"\u8a8d\u8a3c\u3092\u6709\u52b9\u5316\u3059\u308b"),(0,i.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c\u3092\u8981\u6c42\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8a8d\u8a3c\u304c\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u30e2\u30d0\u30a4\u30eb\u30e6\u30fc\u30b6\u30fc\u306f\u30b2\u30b9\u30c8\u30e2\u30fc\u30c9\u3067\u30a2\u30d7\u30ea\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8a8d\u8a3c\u304c\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u308b\u3068\u3001\u30e2\u30d0\u30a4\u30eb\u30e6\u30fc\u30b6\u30fc\u306f\u30a2\u30d7\u30ea\u63a5\u7d9a\u524d\u306b\u30ed\u30b0\u30a4\u30f3\u3092\u6c42\u3081\u3089\u308c\u307e\u3059\u3002")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u3044\u305a\u308c\u306e\u5834\u5408\u3082\u3001\u30e2\u30d0\u30a4\u30eb\u30e6\u30fc\u30b6\u30fc\u304c\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u3059\u308b\u3068\u3001",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/ja/docs/special-features/session-management"},"\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3")," \u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"))),(0,i.kt)("p",null,"\u8a8d\u8a3c\u3092\u6709\u52b9\u5316\u3059\u308b\u306b\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/ja/docs/project-definition/publishing"},"\u516c\u958b")," \u30da\u30fc\u30b8\u306e ",(0,i.kt)("strong",{parentName:"p"},"\u8a8d\u8a3c")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u8a8d\u8a3c",src:t(66787).Z,width:"235",height:"61"})),(0,i.kt)("p",null,"\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306f\u958b\u59cb\u6642\u306b","[\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0]"," \u3092\u8868\u793a\u3057\u307e\u3059\u3002 \u30e2\u30d0\u30a4\u30eb\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u30ab\u30b9\u30bf\u30e0\u306e\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0\u3092\u30c7\u30b6\u30a4\u30f3\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4f5c\u6210...")," / ",(0,i.kt)("strong",{parentName:"p"},"\u7de8\u96c6...")," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30014D\u30e1\u30bd\u30c3\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u3067 ",(0,i.kt)("inlineCode",{parentName:"p"},"On Mobile App Authentication")," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3092\u958b\u304d\u307e\u3059 (\u4ee5\u4e0b\u53c2\u7167)\u3002"),(0,i.kt)("h3",{id:"on-mobile-app-authentication-\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9"},"On Mobile App Authentication \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9"),(0,i.kt)("p",null,"\u7279\u5b9a\u306eE\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3084\u30c7\u30d0\u30a4\u30b9\u3092\u8a8d\u8a3c\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u305f\u3068\u3048\u30b2\u30b9\u30c8\u30e2\u30fc\u30c9\u3067\u3082",(0,i.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv19/4D/19/On-Mobile-App-Authentication-database-method.301-5392844.en.html"},(0,i.kt)("em",{parentName:"a"},"On Mobile App Authentication"))," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306e\u4f7f\u7528\u304c\u5fc5\u9808\u3068\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u5fc5\u8981\u306a\u30bb\u30c3\u30b7\u30e7\u30f3\u60c5\u5831\u304a\u3088\u3073\u30e6\u30fc\u30b6\u30fc\u60c5\u5831 (\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3001\u30a2\u30d7\u30ea\u60c5\u5831\u3001\u30c7\u30d0\u30a4\u30b9\u3001\u30c1\u30fc\u30e0ID\u3001\u7b49) \u3092\u3059\u3079\u3066\u53d6\u5f97\u3059\u308b\u306e\u306b\u4f7f\u3048\u308b\u30e1\u30bd\u30c3\u30c9\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u81ea\u5206\u306e\u7528\u9014\u306b\u5408\u308f\u305b\u3066\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"On Mobile App Authentication")," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'// \u30e2On Mobile App Authentication \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\n// \u30c7\u30d5\u30a9\u30eb\u30c8\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\n\nvar $0 : Object\nvar $1 : Object\n\nvar $request; $response : Object\n\n$request:=$1 // \u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u304b\u3089\u63d0\u4f9b\u3055\u308c\u308b\u60c5\u5831\n$response:=New object // \u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306b\u8fd4\u3055\u308c\u308b\u60c5\u5831\n\n// \u30e6\u30fc\u30b6\u30fc\u306e\u30e1\u30fc\u30eb\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\nIf ($request.email=Null)\n    // \u30e1\u30fc\u30eb\u306a\u3057\u306e\u5834\u5408\u306f\u30b2\u30b9\u30c8\u30e2\u30fc\u30c9\u3067\u63a5\u7d9a\u3092\u8a31\u53ef\u3057\u307e\u3059\n    $response.success:=True\nElse \n    // \u8a8d\u8a3c\u30e2\u30fc\u30c9\u3067\u306f\u3001\u30e1\u30fc\u30eb\u3084\u30c7\u30d0\u30a4\u30b9\u306b\u5fdc\u3058\u3066\u63a5\u7d9a\u3092\u8a31\u53ef/\u62d2\u5426\u3057\u307e\u3059\n    $response.success:=True // \u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\n    //\u30a2\u30af\u30bb\u30b9\u3092\u62d2\u5426 :\n    // $response.success:=False \nEnd if \n\n// \u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306b\u8868\u793a\u3059\u308b\u4efb\u610f\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\nIf ($response.success)\n    $response.statusText:="\u8a8d\u8a3c\u306b\u6210\u529f\u3057\u307e\u3057\u305f"\nElse \n    $response.statusText:="\u3053\u306e\u30a2\u30d7\u30ea\u3092\u4f7f\u7528\u3059\u308b\u6a29\u9650\u304c\u3042\u308a\u307e\u305b\u3093"\nEnd if \n\n$0:=$response\n')),(0,i.kt)("h2",{id:"\u30e1\u30fc\u30eb\u8a8d\u8a3c"},"\u30e1\u30fc\u30eb\u8a8d\u8a3c"),(0,i.kt)("p",null,"\u30e2\u30d0\u30a4\u30eb\u30e6\u30fc\u30b6\u30fc\u3092\u8a8d\u8a3c\u3059\u308b\u6700\u3082\u4e00\u822c\u7684\u306a\u65b9\u6cd5\u306f\u3001\u30e1\u30fc\u30eb\u8a8d\u8a3c\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3059\u3002"),(0,i.kt)("p",null,"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306e\u6240\u6709\u8005\u3092\u78ba\u8a8d\u3057\u3001\u4e0d\u6b63\u306a\u30e1\u30fc\u30eb\u306e\u4f7f\u7528\u3092\u56de\u907f\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"\u6982\u8981"},"\u6982\u8981"),(0,i.kt)("p",null,"\u3053\u306e\u65b9\u6cd5\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u6a5f\u80fd\u3057\u307e\u3059:"),(0,i.kt)("h4",{id:"1-\u8a8d\u8a3c\u3092\u6709\u52b9\u5316\u3059\u308b"},"1. \u8a8d\u8a3c\u3092\u6709\u52b9\u5316\u3059\u308b"),(0,i.kt)("p",null,"\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0\u3092\u30a2\u30d7\u30ea\u3067\u4f7f\u7528\u3059\u308b\u305f\u3081\u3001\u516c\u958b\u30da\u30fc\u30b8\u306e ",(0,i.kt)("strong",{parentName:"p"},"\u8a8d\u8a3c")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ed\u30b0\u30a4\u30f3\u30da\u30fc\u30b8\u3092\u4f7f\u7528\u3059\u308b\u304b\u3001\u30ab\u30b9\u30bf\u30e0\u306e\u30ed\u30b0\u30a4\u30f3\u30da\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u8a8d\u8a3c",src:t(66787).Z,width:"235",height:"61"})),(0,i.kt)("h4",{id:"2-\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3059\u308b"},"2. \u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3059\u308b"),(0,i.kt)("p",null,"\u30a2\u30d7\u30ea\u958b\u59cb\u6642\u306b\u30e1\u30fc\u30eb\u3092\u8981\u6c42\u3055\u308c\u307e\u3059\u3002 \u30e6\u30fc\u30b6\u30fc\u304c\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066 ",(0,i.kt)("strong",{parentName:"p"},"Login")," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"On Mobile App Authentication"),' \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u304c\u547c\u3073\u51fa\u3055\u308c\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u30b9\u30c6\u30fc\u30bf\u30b9\u304c "pending" (\u4fdd\u7559) \u306b\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002 \u305d\u306e\u5f8c\u3001\u30e6\u30fc\u30b6\u30fc\u306b\u8a8d\u8a3c\u30e1\u30fc\u30eb\u304c\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002'),(0,i.kt)("h4",{id:"3-\u30e1\u30fc\u30eb\u30dc\u30c3\u30af\u30b9\u3092\u78ba\u8a8d\u3057\u30664-\u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b"},"3. \u30e1\u30fc\u30eb\u30dc\u30c3\u30af\u30b9\u3092\u78ba\u8a8d\u3057\u3066\u30014. \u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b"),(0,i.kt)("p",null,"\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u53d7\u4fe1\u3057\u305f\u8a8d\u8a3c\u30e1\u30fc\u30eb\u306e\u8a8d\u8a3c\u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001",(0,i.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv19/4D/19/On-Web-Connection-database-method.301-5392847.ja.html"},(0,i.kt)("inlineCode",{parentName:"a"},"On Web Connection"))," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u304c\u547c\u3073\u51fa\u3055\u308c\u3001",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/ja/docs/special-features/session-management"},"\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3"),' \u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u304c "pending" \u304b\u3089 "accepted" \u306b\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002'),(0,i.kt)("h4",{id:"5-\u304a\u3088\u3073-6-\u30a2\u30d7\u30ea\u306b\u623b\u308b"},"5. \u304a\u3088\u3073 6. \u30a2\u30d7\u30ea\u306b\u623b\u308b"),(0,i.kt)("p",null,"\u8a8d\u8a3c\u5b8c\u4e86\u5f8c\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u30a2\u30d7\u30ea\u306b\u623b\u3063\u3066 ",(0,i.kt)("strong",{parentName:"p"},"Login")," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"On Mobile App Authentication"),' \u30e1\u30bd\u30c3\u30c9\u304c\u518d\u5ea6\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u304c\u3001\u4eca\u56de\u306f\u30e6\u30fc\u30b6\u30fc\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u72b6\u614b\u304c "accepted" \u306a\u305f\u3081\u3001\u30a2\u30af\u30bb\u30b9\u304c\u8a31\u53ef\u3055\u308c\u307e\u3059\u3002'),(0,i.kt)("p",null,"\u4e00\u9023\u306e\u6d41\u308c\u3092\u56f3\u306b\u8868\u3057\u307e\u3057\u305f:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u8a8d\u8a3c",src:t(11672).Z,width:"1812",height:"1238"})),(0,i.kt)("p",null,"\u3053\u306e\u624b\u9806\u306b\u306f\u3001\u7279\u5225\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u304b\u3001\u624b\u52d5\u3067\u51e6\u7406\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"4d-mobile-app-server-\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4f7f\u7528"},"4D Mobile App Server \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4f7f\u7528"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/tree/master"},"4D Mobile App Server")," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u4e00\u822c\u7684\u306a\u30e2\u30d0\u30a4\u30eb\u6a5f\u80fd\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306b\u958b\u767a\u3055\u308c\u305f\u30c4\u30fc\u30eb\u30dc\u30c3\u30af\u30b9\u30fb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002 \u3053\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u30e1\u30fc\u30eb\u8a8d\u8a3c\u30ed\u30b0\u30a4\u30f3\u7528\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"On Mobile App Authentication")," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u304b\u3089\u6e21\u3055\u308c\u305f\u60c5\u5831\u3068\u3068\u3082\u306b ",(0,i.kt)("inlineCode",{parentName:"li"},"Mobile App Email Checker")," \u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3057\u307e\u3059:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},"// On Mobile App Authentication \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c9\u30aa\nC_OBJECT($0)\nC_OBJECT($1)\n$0:= Mobile App Email Checker($1)\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"On Web Connection")," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u3001URL \u3088\u308a\u53d6\u5f97\u3057\u305f ",(0,i.kt)("inlineCode",{parentName:"li"},"Session")," ID\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u6307\u5b9a\u3057\u3066\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"Mobile App Active Session")," \u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3057\u307e\u3059:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},"// On Web Connection \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\n\nC_TEXT($1)\nCase of \n: (Mobile App Active Session($1).success)\n    // \u5fc5\u8981\u306b\u5fdc\u3058\u3066\u30ed\u30b0\u3092\u8ffd\u52a0\u3057\u307e\u3059\nEnd case \n\n")),(0,i.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u3001\u3068\u3066\u3082\u7c21\u5358\u3067\u3059\u3002"),(0,i.kt)("p",null,"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Methods/Mobile%20App%20Email%20Checker.md"},"Email Checker \u30e1\u30bd\u30c3\u30c9\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h3",{id:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408"),(0,i.kt)("p",null,"4D Mobile App Server \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u305b\u305a\u306b\u3001\u72ec\u81ea\u306e\u30e1\u30fc\u30eb\u8a8d\u8a3c\u3092\u5b9f\u88c5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u57fa\u672c\u7684\u306a\u4f8b:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"On Mobile App Authentication")," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306b\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092\u66f8\u304d\u307e\u3059:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'// On Mobile App Authentication \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\n\n\nC_OBJECT($0;$1;$response;$request;$email;$status)\n\n  // \u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u304b\u3089\u6765\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u8a2d\u5b9a\n$request:=$1\n\n  // \u8a8d\u8a3c\u7528\u306e URL \u3092\u6301\u3064\u30e1\u30fc\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\n$mail:=New object\n$mail.from:="myapplication@gmail.com"\n$mail.to:=$request.email // \u30e6\u30fc\u30b6\u30fc\u304c\u5165\u529b\u3057\u305f\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\n$mail.subject:="\u30ed\u30b0\u30a4\u30f3\u78ba\u8a8d"\n$mail.htmlBody:="<a href=\\"https://myserverapplication/activation/"+$request.session.id \\\n+"\\">\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u3001\u3053\u3053\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002</a>\\"<br>"\n\n  // \u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3057\u307e\u3059\n$smtp:=New object("host"; "smtp.gmail.com"; "user"; "myapplication@gmail.com"; "password"; "xxx")\n$transporter:=SMTP New transporter($smtp)\n$status:=$transporter.send($mail)\n\n  // \u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8a2d\u5b9a\u3057\u307e\u3059\n$response:=New object\n\n  // \u30ab\u30ec\u30f3\u30c8\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u691c\u8a3c\u4e2d\u3067\u3042\u308b\u3053\u3068\u3092\u5ba3\u8a00\u3057\u307e\u3059\n$response.verify:=True\n\n  // \u30e1\u30fc\u30eb\u9001\u4fe1\u306b\u6210\u529f\u3057\u305f\u304b\u78ba\u8a8d\u3057\u307e\u3059\nIf ($status.success)\n      // \u5168\u30d7\u30ed\u30bb\u30b9\u304b\u3089\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u306a\u5171\u6709\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u3001\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u683c\u7d0d\u3057\u307e\u3059\n    If (Storage.pendingSessions=Null)\n        Use (Storage)\n            Storage.pendingSessions:=New shared object\n        End use \n    End if \n\n    Use (Storage.pendingSessions)\n          // \u30bb\u30c3\u30b7\u30e7\u30f3\u30ea\u30b9\u30c8\u306b\u3053\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3057\u307e\u3059\n        Storage.pendingSessions[$request.session.id]:=$request.team.id+". "+$request.application.id\n    End use \n\n    $response.success:=True\n    $response.statusText:="\u30e1\u30fc\u30eb\u30dc\u30c3\u30af\u30b9\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"\nElse \n      // \u30b9\u30de\u30fc\u30c8\u30d5\u30a9\u30f3\u306b\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\u3057\u307e\u3059\n    $response.statusText:="\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u6642\u9593\u3092\u304a\u3044\u3066\u518d\u9001\u4fe1\u3057\u3066\u304f\u3060\u3055\u3044\u3002"\n    $response.success:=False\nEnd if \n\n$0:=$response\n\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"On Web Connection")," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306b\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u78ba\u8a8d\u30e1\u30fc\u30eb\u306e\u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af\u3057\u305f\u5f8c\u306b\u3001\u8a72\u5f53\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b\u305f\u3081\u306e\u30b3\u30fc\u30c9\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'// On Web Connection \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\n\nC_TEXT($1;$2;$3;$4;$5;$6)\n\nC_TEXT($token;$session)\nC_OBJECT($sessionFile;$sessionObject)\n\nIf ($1="/activation/@")\n    $token:=Substring($1;13)\nEnd if \n\n\n  // URL \u304b\u3089\u53d7\u3051\u53d6\u3063\u305f ID \u3067\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u53d6\u5f97\u3057\u307e\u3059\nIf (Storage.PendingSessions#Null)pendingSessions#Null)\n    $session:=Storage.pendingSessions[$token]\nEnd if \n\nIf ($session#"")\n      // \u30bb\u30c3\u30b7\u30e7\u30f3\u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u53d6\u5f97\u3057\u307e\u3059\n    $sessionFile:=Folder(fk mobileApps folder).folder($session).file($token)\n    $sessionObject:=JSON Parse($sessionFile.getText())\n      // \u30b9\u30c6\u30fc\u30bf\u30b9\u5024\u3092\u66f4\u65b0\u3057\u307e\u3059\n    $sessionObject.status:="accepted"\n    $sessionFile.setText(JSON Stringify($sessionObject) )\n\n        Use (Storage.pendingSessions)\n          // \u4fdd\u7559\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u524a\u9664\u3057\u307e\u3059\n        OB REMOVE(Storage.pendingSessions;$token)\n    End use \n\n    /*\n        MOBILE APP REFRESH SESSIONS \u30b3\u30de\u30f3\u30c9\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u306e MobileApps \u30d5\u30a9\u30eb\u30c0\u30fc\u306b\n        \u3042\u308b\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u30d5\u30a1\u30a4\u30eb\u3092\u3059\u3079\u3066\u30c1\u30a7\u30c3\u30af\u3057\u3001 \n        \u7de8\u96c6\u6e08\u307f\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u3064\u3044\u3066\u306f\u30e1\u30e2\u30ea\u5185\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002\n    */\n\n    MOBILE APP REFRESH SESSIONS\n\n    WEB SEND TEXT("\u8a8d\u8a3c\u306b\u6210\u529f\u3057\u307e\u3057\u305f")\nElse \n    WEB SEND TEXT("\u7121\u52b9\u306a\u30bb\u30c3\u30b7\u30e7\u30f3\u3067\u3059")\nEnd if \n')),(0,i.kt)("h3",{id:"\u30ea\u30e2\u30fc\u30c8url\u306e\u5b9a\u7fa9"},"\u30ea\u30e2\u30fc\u30c8URL\u306e\u5b9a\u7fa9"),(0,i.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30ea\u30e2\u30fc\u30c8\u30b5\u30fc\u30d0\u30fc\u306e URL \u306f Android \u30a2\u30d7\u30ea\u306b\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u3059\u3002 URL \u304c\u6b63\u3057\u304f\u306a\u3044\u5834\u5408\u3001\u30b5\u30fc\u30d0\u30fc\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u304f\u306a\u308a\u307e\u3059\u3002 \u3053\u306e URL \u3092\u4fee\u6b63\u30fb\u66f4\u65b0\u3057\u305f\u3044\u5834\u5408\u306b\u306f\u3001\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u9577\u62bc\u3057\u3059\u308b\u304b\u3001\u8a2d\u5b9a\u30bf\u30d6\u304b\u3089\u304a\u3053\u306a\u3044\u307e\u3059\u3002 \u30a2\u30a4\u30b3\u30f3\u3092\u9577\u62bc\u3057\u3059\u308b\u3068\u3001\u30ea\u30e2\u30fc\u30c8URL \u306e\u30a2\u30c9\u30ec\u30b9\u3068\u30b5\u30fc\u30d0\u30fc\u306e\u30a2\u30af\u30bb\u30b9\u72b6\u6cc1\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002 URL \u3092\u7de8\u96c6\u3057\u3066\u3001\u8a8d\u8a3c\u306b\u6210\u529f\u3059\u308b\u3068\u3001\u30b5\u30fc\u30d0\u30fc\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,'iOS \u306e\u5834\u5408\u3001iOS\u30c7\u30d0\u30a4\u30b9\u306e\u8a2d\u5b9a\u753b\u9762\u304b\u3089\u30ea\u30e2\u30fc\u30c8\u30b5\u30fc\u30d0\u30fc\u306e URL \u3092\u7de8\u96c6\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u306b\u306f\u3001"\u30b5\u30fc\u30d0\u30fc\u30a2\u30c9\u30ec\u30b9\u3092\u30ea\u30bb\u30c3\u30c8" \u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u3066\u3001\u6b63\u3057\u3044\u30b5\u30fc\u30d0\u30fc\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u307e\u3059\u3002'))}u.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=d;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var p=2;p<s;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11672:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/4D-for-iOS-email-auth-6e5d979a255eb468fc5d777636c9f442.png"},66787:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAAA9CAYAAABMbZ7nAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAABMxJREFUeF7tnc9x+jwQQOmJJlIDLaQIUgQFcPQl9ww37tTATFJBTrnq88qIrGSt/2F/WPk9z7zBsqSNbPTQmsyYzff3twOA9YOsAIWArACFgKwAhYCsAIWArACFgKwAhYCsAIXQknW73Y4mjQEA85OVdcyGrAD/D4vKeqne3Ft1ydYN4+Kqt4M7XXN1M3A9ucNc8eeMBZBhkqxfX1/u5eXFfXx82LLK5D1UrjqMmcCpnHPLOme8hT9IABJGyxpEfX19dT8/P6as19PBHU7X+2uuTRtkBbAYJWsqqmx5Wa/uFFZUv8Ke3PVeZwkpr3XaHPDp863uIilmczwS36eeoU/lLjreqbrHavp0xL+PRcb926a6NMd9Ot/qlzumYkVj+41ljy/UA+TJyirprUgpcoYtJ6psWVkjQZW4vpwKosu5unpCh1gXmeCJlKFtXRdJGe6Vu/pE5UbUbnF0+65Ysq8E9eLGdfnxAdhkZRUZRcogrCWqbDlZ09RXyvfJ2TvJrbqknKxcntwKNzS+j2dI44UKf2daLFmdG3k7+qn2AClmGqyFtUSVrS2rTD4l0J0hq1vfRFZlU66J8a140XGdJYyLhazwKJ33rEFYS1TZWrLKKhTdowpNitlMVr1f41etAQK0yrKfS1v7+lh1Rhqsz8dLOCSW7Kdp8JAPKwCbUV8w5bZUVllBcvd9USqs08qqiibr/cuc3pS2xktwaz+wT3/833j6w8UfS/4V1RkrGps9nnYZIM/ssgLAMmRlHUsaAwDmpyUrAKwTZAUoBGQFKARkBSgEZAUoBGQFKARkBSgEZAUoBGQFKARkBSgEZAUoBGSFVfH+/v5PkDv3PpAVVoVM5M/Pzz8NssKfAFltkBVWBbLaICusCmS1eaqs/rEo4VEvk1j4kSjRM5ceZM5YizHX9ZweZ7qsR7fbbNxGsTta7bZuf673z3u3DfutdstRnqwyefl5jSez1PWcHucxWYeIZ7Ub2v9xipOVn9dYA0tdz+lxkNXmSbKq5+/6FZaf17g/ttQcX6hP2qlzlxj+KZK5fq1r0THGQddTjzmuO5xO8bmOYBFZfbrbpMbb/V61C33kVaXQu2M7xoyUJau8sfy8xu9k9xM9rsuPT3NrF527Gt/ga5GOset6do851DUfGDrucB6TVQm32bmjOh7uX8/7bV2XypruL0tRsqapr39zw+TMTiA9Kay6pJysAp7cCjc0vo+Xk6bmJkrDtFiyOjeTvaOfat/fLv176joIvdciF8MYs9R1ZkfDmX1llVV1u3fnbDtk7UHeyGTieIxVICp31SVlU66J8a140XGdJYyLtbysY69FUu4as9Qh62DKkVVWoeiNFZoUs5mser/Gr1rhjR8xufx+Lm3t62PVGWmwPh8/oYfEkn11jpEIXf00fe10WfbHXou03MSwx/xb97w0OCebHJ+QBvv73Fsqbe1PpBhZ5dO4PWmSVFinlfy8RlK2jveUs9fikeup29Wo9+x5XzDpe1b5Munc1B136ljuC6YmxnF36ytfMCErQDfTZS0HZIU/AbLaICusCmS1QVZYFchqg6ywKpDVBllhVchE/hfInXsfyApQCMgKUAjIClAIyApQCMgKUAjIClAIyApQCMgKUAjIClAE3+4/c/9TxdVONH4AAAAASUVORK5CYII="}}]);