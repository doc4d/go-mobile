"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1369],{53593:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={id:"testing-on-your-device",title:"iOS\u30c7\u30d0\u30a4\u30b9\u3078\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},i=void 0,o={unversionedId:"tutorials/deploying-in-house/testing-on-your-device",id:"version-19-R6/tutorials/deploying-in-house/testing-on-your-device",title:"iOS\u30c7\u30d0\u30a4\u30b9\u3078\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"\u63a5\u7d9a\u3055\u308c\u305f\u30c7\u30d0\u30a4\u30b9\u306b\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3001\u30c6\u30b9\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R6/tutorials/deploying-in-house/testing-on-your-device.md",sourceDirName:"tutorials/deploying-in-house",slug:"/tutorials/deploying-in-house/testing-on-your-device",permalink:"/go-mobile/ja/docs/tutorials/deploying-in-house/testing-on-your-device",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/deploying-in-house/testing-on-your-device.md",tags:[],version:"19-R6",frontMatter:{id:"testing-on-your-device",title:"iOS\u30c7\u30d0\u30a4\u30b9\u3078\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},sidebar:"tutorials",previous:{title:"Apple Developer Program \u306e\u9078\u629e",permalink:"/go-mobile/ja/docs/tutorials/developer-program/selecting-your-developer-program"},next:{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a2\u30fc\u30ab\u30a4\u30d6\u3068\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",permalink:"/go-mobile/ja/docs/tutorials/deploying-in-house/deployment-in-house-archive-and-export"}},p={},s=[{value:"\u8981\u4ef6",id:"\u8981\u4ef6",level:2},{value:"\u2488 \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b",id:"-\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u2489 Xcode \u306e\u8a2d\u5b9a",id:"-xcode-\u306e\u8a2d\u5b9a",level:2},{value:"\u248a Team ID \u3092\u53d6\u5f97\u3059\u308b",id:"-team-id-\u3092\u53d6\u5f97\u3059\u308b",level:2},{value:"\u248b \u7121\u6599\u30a2\u30ab\u30a6\u30f3\u30c8\u306e Team ID",id:"-\u7121\u6599\u30a2\u30ab\u30a6\u30f3\u30c8\u306e-team-id",level:2},{value:"Provisioning Profile \u304a\u3088\u3073\u8a3c\u660e\u66f8\u306f\u3001Xcode \u304c\u81ea\u52d5\u7684\u306b\u751f\u6210\u3057\u307e\u3059\u3002",id:"provisioning-profile-\u304a\u3088\u3073\u8a3c\u660e\u66f8\u306fxcode-\u304c\u81ea\u52d5\u7684\u306b\u751f\u6210\u3057\u307e\u3059",level:3},{value:"\u7121\u6599\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066 Xcode \u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3059\u308b",id:"\u7121\u6599\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066-xcode-\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3059\u308b",level:3},{value:"\u248c \u6709\u6599\u30a2\u30ab\u30a6\u30f3\u30c8\u306e Team ID",id:"-\u6709\u6599\u30a2\u30ab\u30a6\u30f3\u30c8\u306e-team-id",level:2},{value:"\u248d \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"-\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"Apple Configurator 2 \u3067\u81ea\u52d5\u7684\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"apple-configurator-2-\u3067\u81ea\u52d5\u7684\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:3},{value:"Xcode \u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"xcode-\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:3}],c={toc:s};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u63a5\u7d9a\u3055\u308c\u305f\u30c7\u30d0\u30a4\u30b9\u306b\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3001\u30c6\u30b9\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u8981\u4ef6"},"\u8981\u4ef6"),(0,n.kt)("p",null,"Apple Developer Program \u306b\u52a0\u5165\u3057\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u76ee\u7684\u3084\u597d\u307f\u306b\u5fdc\u3058\u3066\u3001\u4ee5\u4e0b\u306e\u3044\u305a\u308c\u304b\u306b\u5165\u4f1a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7121\u6599\u306e Apple Developer Program: \u30c6\u30b9\u30c8\u3060\u3051\u3067\u304d\u308c\u3070\u826f\u3044\u5834\u5408"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/programs/enroll/"},"\u7d44\u7e54\u307e\u305f\u306f\u500b\u4eba\u5411\u3051\u306e Apple Developer Program"),": App Store \u7d4c\u7531\u3067\u914d\u5e03\u3057\u305f\u3044\u5834\u5408"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/programs/enterprise/"},"Apple Enterprise Developer Program"),": App Store \u3092\u7d4c\u7531\u305b\u305a\u306b In-House \u3067\u904b\u7528\u3057\u305f\u3044\u5834\u5408")),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"\u30a2\u30d7\u30ea\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u81ea\u52d5\u5316\u3059\u308b\u305f\u3081\u306b\u306f ",(0,n.kt)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/apple-configurator-2/id1037126344"},"Apple configurator 2")," \u304c macOS \u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059 (\u5fc5\u9808\u3067\u306f\u3042\u308a\u307e\u305b\u3093)"))),(0,n.kt)("h2",{id:"-\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b"},"\u2488 \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Apple ID"),": Apple ID \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u307e\u3060\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u3001",(0,n.kt)("a",{parentName:"p",href:"https://appleid.apple.com/account#!&page=create"},"\u3053\u3053")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8"),": App Store \u7d4c\u7531\u306e\u914d\u5e03\u304c\u76ee\u7684\u3067\u3042\u308c\u3070\u3001Apple Developer Program (\u7d44\u7e54\u307e\u305f\u306f\u500b\u4eba\u5411\u3051)\u3001In-House \u904b\u7528\u304c\u76ee\u7684\u3067\u3042\u308c\u3070\u3001Apple Developer Enterprise Program \u306b\u52a0\u5165\u3057\u307e\u3059\u3002"))),(0,n.kt)("h2",{id:"-xcode-\u306e\u8a2d\u5b9a"},"\u2489 Xcode \u306e\u8a2d\u5b9a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8"),": Xcode\u3092\u8d77\u52d5\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30e1\u30cb\u30e5\u30fc \uff1e Preferences \uff1e Accounts \u3092\u9078\u629e\u3057\u3066 Apple ID \u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002 ",(0,n.kt)("img",{alt:"\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8",src:a(81456).Z,width:"768",height:"557"}))),(0,n.kt)("h2",{id:"-team-id-\u3092\u53d6\u5f97\u3059\u308b"},"\u248a Team ID \u3092\u53d6\u5f97\u3059\u308b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7121\u6599\u306e Apple Developer Program \u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u306e\u3067\u3042\u308c\u3070 ",(0,n.kt)("a",{parentName:"li",href:"#%E7%84%A1%E6%96%99%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%81%AE-team-id"},"\u248b")," \u306b\u9032\u307f\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-organization"},"\u7d44\u7e54")," \u304a\u3088\u3073 ",(0,n.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-individual"},"\u500b\u4eba\u5411\u3051\u306e Apple Developer Program")," \u307e\u305f\u306f ",(0,n.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program")," \u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u306e\u3067\u3042\u308c\u3070 ",(0,n.kt)("a",{parentName:"li",href:"#%E6%9C%89%E6%96%99%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%81%AE-team-id"},"\u248c")," \u306b\u9032\u307f\u307e\u3059\u3002")),(0,n.kt)("h2",{id:"-\u7121\u6599\u30a2\u30ab\u30a6\u30f3\u30c8\u306e-team-id"},"\u248b \u7121\u6599\u30a2\u30ab\u30a6\u30f3\u30c8\u306e Team ID"),(0,n.kt)("h3",{id:"provisioning-profile-\u304a\u3088\u3073\u8a3c\u660e\u66f8\u306fxcode-\u304c\u81ea\u52d5\u7684\u306b\u751f\u6210\u3057\u307e\u3059"},"Provisioning Profile \u304a\u3088\u3073\u8a3c\u660e\u66f8\u306f\u3001Xcode \u304c\u81ea\u52d5\u7684\u306b\u751f\u6210\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u753b\u9762\u3092\u30d3\u30eb\u30c9\u30bf\u30d6\u306b\u5207\u308a\u66ff\u3048\u3066\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092Xcode\u3067\u958b\u304f... \u30e1\u30cb\u30e5\u30fc\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30d3\u30eb\u30c9\u30bf\u30d6",src:a(84288).Z,width:"1033",height:"994"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0b\u56f3\u306e\u3088\u3046\u306b ",(0,n.kt)("strong",{parentName:"li"},"Automatically manage signing")," \u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u30c1\u30a7\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002Team\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u3053\u3053\u3067\u8ffd\u52a0\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u9078\u629e",src:a(38397).Z,width:"1106",height:"877"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30c7\u30d0\u30a4\u30b9\u3092 USB\u30b1\u30fc\u30d6\u30eb\u3067\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30fc\u306b\u63a5\u7d9a\u3057\u3001Xcode \u306e\u30c4\u30fc\u30eb\u30d0\u30fc\u306b\u3042\u308b\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u9078\u629e\u306b\u4f7f\u3046\u30e1\u30cb\u30e5\u30fc (\u56f3\u3092\u53c2\u7167) \u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u63a5\u7d9a\u4e2d\u306e\u30c7\u30d0\u30a4\u30b9\u3082\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30c7\u30d0\u30a4\u30b9\u306e\u9078\u629e",src:a(1247).Z,width:"1106",height:"877"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Xcode \u306f\u3001\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a Provisioning Profile \u3068\u8a3c\u660e\u66f8\u3092\u81ea\u52d5\u7684\u306b\u751f\u6210\u3057\u307e\u3059\u3002")),(0,n.kt)("h3",{id:"\u7121\u6599\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066-xcode-\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3059\u308b"},"\u7121\u6599\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066 Xcode \u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3059\u308b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u3042\u3068\u306f\u3001Xcode \u306e\u5b9f\u884c\u30dc\u30bf\u30f3 (\u56f3\u3092\u53c2\u7167) \u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3060\u3051\u3067\u3059\uff01")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c",src:a(55821).Z,width:"1106",height:"877"})),(0,n.kt)("h2",{id:"-\u6709\u6599\u30a2\u30ab\u30a6\u30f3\u30c8\u306e-team-id"},"\u248c \u6709\u6599\u30a2\u30ab\u30a6\u30f3\u30c8\u306e Team ID"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Team ID"),": Apple Developer \u306b\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002Membership \u30da\u30fc\u30b8\u306b Team ID \u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u306f\u305a\u3067\u3059\u3002 ",(0,n.kt)("img",{alt:"\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30e1\u30f3\u30d0\u30fc\u30b7\u30c3\u30d7",src:a(60548).Z,width:"768",height:"739"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"4D for iOS"),": \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u753b\u9762\u3092\u30bb\u30af\u30b7\u30e7\u30f3\u30bf\u30d6\u306b\u5207\u308a\u66ff\u3048\u3066\u3001\u4e00\u822c\u30da\u30fc\u30b8\u306e\u90e8\u7f72\u540d\u306b Team ID \u3092\u5165\u529b\u3057\u307e\u3059\u3002 ",(0,n.kt)("img",{alt:"General\u753b\u9762",src:a(54931).Z,width:"768",height:"739"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u248d \u306b\u9032\u3093\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a2\u30d7\u30ea\u3092\u30c7\u30d0\u30a4\u30b9\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"))),(0,n.kt)("h2",{id:"-\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u248d \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,n.kt)("h3",{id:"apple-configurator-2-\u3067\u81ea\u52d5\u7684\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"},"Apple Configurator 2 \u3067\u81ea\u52d5\u7684\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u304c\u51fa\u6765\u304c\u3063\u305f\u3089\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u753b\u9762\u3092\u30d3\u30eb\u30c9\u30bf\u30d6\u306b\u5207\u308a\u66ff\u3048\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u30c7\u30d0\u30a4\u30b9\u3092 USB\u30b1\u30fc\u30d6\u30eb\u3067\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30fc\u306b\u63a5\u7d9a\u3057\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u30bf\u30d6\u306e ",(0,n.kt)("strong",{parentName:"li"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb")," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30dc\u30bf\u30f3",src:a(29218).Z,width:"768",height:"739"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30c7\u30d0\u30a4\u30b9\u4e0a\u306b\u30a2\u30d7\u30ea\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u958b\u59cb\u3059\u308b\u306f\u305a\u3067\u3059\uff01")),(0,n.kt)("h3",{id:"xcode-\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"},"Xcode \u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u304c\u51fa\u6765\u304c\u3063\u305f\u3089\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u753b\u9762\u3092\u30d3\u30eb\u30c9\u30bf\u30d6\u306b\u5207\u308a\u66ff\u3048\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u30c7\u30d0\u30a4\u30b9\u3092 USB\u30b1\u30fc\u30d6\u30eb\u3067\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30fc\u306b\u63a5\u7d9a\u3057\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u30bf\u30d6\u306e ",(0,n.kt)("strong",{parentName:"li"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb")," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30de\u30cb\u30e5\u30a2\u30eb\u64cd\u4f5c\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",src:a(76728).Z,width:"2164",height:"1988"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a2\u30fc\u30ab\u30a4\u30d6\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30a2\u30fc\u30ab\u30a4\u30d6\u306e\u4f5c\u6210",src:a(3117).Z,width:"2164",height:"1988"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30a2\u30fc\u30ab\u30a4\u30d6\u306e\u4f5c\u6210\u306b\u6210\u529f\u3057\u3066\u30c0\u30a4\u30a2\u30ed\u30b0\u304c\u8868\u793a\u3055\u308c\u305f\u3089 OK \u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30a2\u30fc\u30ab\u30a4\u30d6\u306e\u5834\u6240\u3092 Finder \u3067\u958b\u304d\u307e\u3059\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30a2\u30fc\u30ab\u30a4\u30d6\u3092Finder\u306b\u8868\u793a",src:a(35315).Z,width:"1168",height:"734"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Xcode \u3092\u8d77\u52d5\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30e1\u30cb\u30e5\u30fc \uff1e Window \uff1e Devices and Simulators \u3092\u9078\u629e\u3057\u3066\u3001\u751f\u6210\u3055\u308c\u305f ipa\u30d5\u30a1\u30a4\u30eb\u3092 Installed Apps \u30bb\u30af\u30b7\u30e7\u30f3\u306b\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7\u3057\u307e\u3059\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30c7\u30d0\u30a4\u30b9\u3068\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc",src:a(12289).Z,width:"2346",height:"1636"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30c7\u30d0\u30a4\u30b9\u4e0a\u306b\u30a2\u30d7\u30ea\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u958b\u59cb\u3059\u308b\u306f\u305a\u3067\u3059\uff01")))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3117:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Archive-creation-9ab385bb6618d380e6fc13d1ada6826e.png"},55821:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Build-Run-Free-Account-4f72d3ebb3da13613714397dd364d052.png"},81456:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Developer-Account-4D-for-iOS-f06e7c698bebae35b2bd3f9b15ef0133.png"},12289:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Devices-and-Simulators-4D-for-iOS-46caf0993b3ec613d8f50b45f0012a7e.png"},29218:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Install-button-build-tab-4D-for-iOS-732c21e87c69c937de9d3aa5092cd8cc.png"},76728:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Manual-installation-4D-for-iOS-006bdd55a7e8b00af0031a276978929e.png"},84288:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},35315:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Reveal-archive-in-Finder-b56d3aef33e96abfa44e8a31910abc6f.png"},60548:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"},54931:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Team-ID-General-Section-4D-for-iOS-98b22260cf98f8460a432cce293eec36.png"},38397:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/account-Selection-Free-Account-70391ce3982e842639ee60d9c60ee5ae.png"},1247:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/select-device-Free-Account-7ef38cd1f2bd6ccee926b372f8704cdb.png"}}]);