"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1500],{13584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={id:"deployment-in-house-archive-and-export",title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a2\u30fc\u30ab\u30a4\u30d6\u3068\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"},l=void 0,o={unversionedId:"tutorials/deploying-in-house/deployment-in-house-archive-and-export",id:"version-19-R5/tutorials/deploying-in-house/deployment-in-house-archive-and-export",title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a2\u30fc\u30ab\u30a4\u30d6\u3068\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",description:"\u76ee\u6a19",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R5/tutorials/deploying-in-house/deployment-in-house-archive-and-export.md",sourceDirName:"tutorials/deploying-in-house",slug:"/tutorials/deploying-in-house/deployment-in-house-archive-and-export",permalink:"/go-mobile/ja/docs/19-R5/tutorials/deploying-in-house/deployment-in-house-archive-and-export",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/deploying-in-house/deployment-in-house-archive-and-export.md",tags:[],version:"19-R5",frontMatter:{id:"deployment-in-house-archive-and-export",title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a2\u30fc\u30ab\u30a4\u30d6\u3068\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"},sidebar:"tutorials",previous:{title:"iOS\u30c7\u30d0\u30a4\u30b9\u3078\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/go-mobile/ja/docs/19-R5/tutorials/deploying-in-house/testing-on-your-device"},next:{title:"\u30a2\u30d7\u30ea\u3092 In-House \u3067\u914d\u5e03\u3059\u308b",permalink:"/go-mobile/ja/docs/19-R5/tutorials/deploying-in-house/deployment-in-house-distribute"}},p={},s=[{value:"\u2488 Xcode \u306e\u8a2d\u5b9a",id:"-xcode-\u306e\u8a2d\u5b9a",level:2},{value:"\u2489 Team ID \u3092\u53d6\u5f97\u3059\u308b",id:"-team-id-\u3092\u53d6\u5f97\u3059\u308b",level:2},{value:"\u248a 4D for iOS \u306e\u8a2d\u5b9a",id:"-4d-for-ios-\u306e\u8a2d\u5b9a",level:2},{value:"\u248b \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092 Xcode \u3067\u958b\u304f",id:"-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092-xcode-\u3067\u958b\u304f",level:2},{value:"\u248c Xcode \u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a2\u30fc\u30ab\u30a4\u30d6\u3059\u308b",id:"-xcode-\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a2\u30fc\u30ab\u30a4\u30d6\u3059\u308b",level:2},{value:"\u248d \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b",id:"-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b",level:2},{value:"\u248e \u914d\u5e03\u65b9\u6cd5\u3092\u9078\u629e\u3059\u308b",id:"-\u914d\u5e03\u65b9\u6cd5\u3092\u9078\u629e\u3059\u308b",level:2},{value:"\u248f Enterprise distribution options \u3092\u9078\u629e\u3059\u308b",id:"-enterprise-distribution-options-\u3092\u9078\u629e\u3059\u308b",level:2},{value:"manifest \u3068\u306f\uff1f",id:"manifest-\u3068\u306f",level:4},{value:"\u2490 Distribution manifest information",id:"-distribution-manifest-information",level:2},{value:"10. \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u518d\u7f72\u540d",id:"10-\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u518d\u7f72\u540d",level:2},{value:"11. app.ipa \u306e\u5185\u5bb9\u3092\u78ba\u8a8d\u3059\u308b",id:"11-appipa-\u306e\u5185\u5bb9\u3092\u78ba\u8a8d\u3059\u308b",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u76ee\u6a19")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"4D for iOS \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a2\u30fc\u30ab\u30a4\u30d6\u3057\u3001\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},".ipa\u30d5\u30a1\u30a4\u30eb\u304a\u3088\u3073\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3059\u308b"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u7528\u610f\u3059\u308b\u3082\u306e")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program")),(0,a.kt)("li",{parentName:"ul"},"\u30bb\u30ad\u30e5\u30a2\u306a Web\u30b5\u30fc\u30d0\u30fc"),(0,a.kt)("li",{parentName:"ul"},"57 x 57 px \u306e\u30a2\u30a4\u30b3\u30f3"),(0,a.kt)("li",{parentName:"ul"},"512 x 512 px \u306e\u30a2\u30a4\u30b3\u30f3"))),(0,a.kt)("h2",{id:"-xcode-\u306e\u8a2d\u5b9a"},"\u2488 Xcode \u306e\u8a2d\u5b9a"),(0,a.kt)("p",null,"Apple\u306b\u3088\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u627f\u8a8d\u5f8c\u3001Xcode \u3092\u958b\u304d\u3001Preferences > Accounts \u3067Apple Enterprise Developer \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"Xcode \u306f\u3001\u5fc5\u8981\u306a Provisioning Profile \u3068\u8a3c\u660e\u66f8\u3092\u81ea\u52d5\u7684\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"-team-id-\u3092\u53d6\u5f97\u3059\u308b"},"\u2489 Team ID \u3092\u53d6\u5f97\u3059\u308b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Apple Developer \u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u3002 Team ID \u306f Membership \u306b\u3066\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Team ID \u3092\u53d6\u5f97\u3059\u308b",src:n(43727).Z,width:"768",height:"739"})),(0,a.kt)("h2",{id:"-4d-for-ios-\u306e\u8a2d\u5b9a"},"\u248a 4D for iOS \u306e\u8a2d\u5b9a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"4D for iOS \u3092\u8d77\u52d5\u3057\u307e\u3059\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u30bb\u30af\u30b7\u30e7\u30f3\u30bf\u30d6\u306b\u3066:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e00\u822c: Team ID \u3092\u5165\u529b\u3057\u307e\u3059\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Enterprise-Team-ID",src:n(60672).Z,width:"1082",height:"1009"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u516c\u958b: \u30d7\u30ed\u30c0\u30af\u30b7\u30e7\u30f3URL \u3092\u5165\u529b\u3057\u307e\u3059 (\u904b\u7528\u74b0\u5883\u3067\u306f HTTPS \u304c\u5fc5\u9808\u3067\u3059)\u3002")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u30d3\u30eb\u30c9\u30bf\u30d6\u306b\u3066:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c: \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3057\u307e\u3059\u3002")))),(0,a.kt)("h2",{id:"-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092-xcode-\u3067\u958b\u304f"},"\u248b \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092 Xcode \u3067\u958b\u304f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"4D for iOS \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u30d3\u30eb\u30c9\u30bf\u30d6\u3067\u3001",(0,a.kt)("strong",{parentName:"li"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 > \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092Xcode\u3067\u958b\u304f...")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092Xcode\u3067\u958b\u304f ",src:n(72855).Z,width:"1033",height:"994"})),(0,a.kt)("h2",{id:"-xcode-\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a2\u30fc\u30ab\u30a4\u30d6\u3059\u308b"},"\u248c Xcode \u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a2\u30fc\u30ab\u30a4\u30d6\u3059\u308b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Xcode \u3067\u30c4\u30fc\u30eb\u30d0\u30fc\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u9078\u629e\u30e1\u30cb\u30e5\u30fc\u3092\u958b\u304d\u3001",(0,a.kt)("strong",{parentName:"li"},"Generic iOS Device")," \u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u6c4e\u7528\u7684iOS\u30c7\u30d0\u30a4\u30b9",src:n(60172).Z,width:"318",height:"558"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6b21\u306b\u3001\u4e0a\u90e8\u30e1\u30cb\u30e5\u30fc\u304b\u3089 Product \u3092\u30af\u30ea\u30c3\u30af\u3057\u3001",(0,a.kt)("strong",{parentName:"li"},"Archive")," \u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a2\u30fc\u30ab\u30a4\u30d6",src:n(37374).Z,width:"225",height:"337"})),(0,a.kt)("h2",{id:"-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b"},"\u248d \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u30a2\u30fc\u30ab\u30a4\u30d6\u51e6\u7406\u306e\u6700\u5f8c\u306b\u3001\u4f5c\u6210\u3057\u305f\u30a2\u30fc\u30ab\u30a4\u30d6\u3092\u8868\u793a\u3059\u308b Organizer \u30a6\u30a3\u30f3\u30c9\u30a6\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Export")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b",src:n(11612).Z,width:"1228",height:"667"})),(0,a.kt)("h2",{id:"-\u914d\u5e03\u65b9\u6cd5\u3092\u9078\u629e\u3059\u308b"},"\u248e \u914d\u5e03\u65b9\u6cd5\u3092\u9078\u629e\u3059\u308b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enterprise")," \u3092\u9078\u629e\u3057\u3001",(0,a.kt)("strong",{parentName:"li"},"Next")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u914d\u5e03\u65b9\u6cd5",src:n(49693).Z,width:"737",height:"454"})),(0,a.kt)("h2",{id:"-enterprise-distribution-options-\u3092\u9078\u629e\u3059\u308b"},"\u248f Enterprise distribution options \u3092\u9078\u629e\u3059\u308b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3059\u3079\u3066\u30c1\u30a7\u30c3\u30af\u3057\u305f\u307e\u307e\u3067\u304b\u307e\u3044\u307e\u305b\u3093\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u4f01\u696d\u5411\u3051\u914d\u5e03\u30aa\u30d7\u30b7\u30e7\u30f3",src:n(75036).Z,width:"737",height:"454"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"manifest.plist \u30d5\u30a1\u30a4\u30eb\u306f\u3001Xcode \u306b\u751f\u6210\u3055\u305b\u308b\u304b\u3001\u624b\u52d5\u3067\u751f\u6210\u3059\u308b\u304b\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Next")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"))),(0,a.kt)("h4",{id:"manifest-\u3068\u306f"},"manifest \u3068\u306f\uff1f"),(0,a.kt)("p",null,"manifest \u306f\u3001XML\u30d9\u30fc\u30b9\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u30ea\u30b9\u30c8\u3067\u3042\u308a\u3001\u4ee5\u4e0b\u3092\u542b\u3080\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"URL"),": .ipa \u30d5\u30a1\u30a4\u30eb\u3092\u6307\u3059 URL\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"display-image"),": \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u304a\u3088\u3073\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u6642\u306b\u4f7f\u7528\u3055\u308c\u308b 57 x 57 px (iPad \u3067\u306f 72 x 72 px) \u306e PNG \u30a2\u30a4\u30b3\u30f3\u3092\u6307\u3059 URL\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"full-size-image"),": iTunes \u30a2\u30d7\u30ea\u3092\u8868\u3059 512 x 512 px \u306e PNG\u753b\u50cf\u3092\u6307\u3059 URL\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bundle-identifier"),": \u30a2\u30d7\u30ea\u306e\u8b58\u5225\u5b50 (\u6587\u5b57\u5217)\u3002 \u30a2\u30d7\u30ea\u306e .plist\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bundle-version"),": \u30a2\u30d7\u30ea\u306e\u73fe\u5728\u306e\u30d0\u30f3\u30c9\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3 (\u6587\u5b57\u5217)\u3002 \u30a2\u30d7\u30ea\u306e .plist\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"title"),": \u30a2\u30d7\u30ea\u540d\u3002")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u306f\u3001manifest.plist \u30d5\u30a1\u30a4\u30eb\u306e\u4e00\u4f8b\u3067\u3059:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n    <key>items</key>\n    <array>\n        <dict>\n            <key>assets</key>\n            <array>\n                <dict>\n                    <key>kind</key>\n                    <string>software-package</string>\n                    <key>url</key>\n                    <string>https://...Contact.ipa</string>\n                </dict>\n                <dict>\n                    <key>kind</key>\n                    <string>display-image</string>\n                    <key>url</key>\n                    <string>https://...Contact_icon_57.png</string>\n                </dict>\n                <dict>\n                    <key>kind</key>\n                    <string>full-size-image</string>\n                    <key>url</key>\n                    <string>https://...Contact_icon_512.png</string>\n                </dict>\n            </array>\n            <key>metadata</key>\n            <dict>\n                <key>bundle-identifier</key>\n                <string>com.contactApp.ContactDemoapp</string>\n                <key>bundle-version</key>\n                <string>1.0</string>\n                <key>kind</key>\n                <string>software</string>\n                <key>title</key>\n                <string>Contact Demo app</string>\n            </dict>\n        </dict>\n    </array>\n</dict>\n</plist>\n')),(0,a.kt)("h2",{id:"-distribution-manifest-information"},"\u2490 Distribution manifest information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30eaURL \u3068\u30a2\u30a4\u30b3\u30f3URL \u306e\u5165\u529b\u306f\u3001Xcode \u306b\u4efb\u305b\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002 \u3053\u308c\u3089\u306e URL \u306f\u5f8c\u3067\u5909\u66f4\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Distribution manifest information",src:n(25223).Z,width:"737",height:"454"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Next")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002")),(0,a.kt)("h2",{id:"10-\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u518d\u7f72\u540d"},"10. \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u518d\u7f72\u540d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Automatically manage signing")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u3066\u3001Xcode \u306b\u51e6\u7406\u3057\u3066\u3082\u3089\u3044\u307e\u3057\u3087\u3046\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u518d\u7f72\u540d",src:n(16185).Z,width:"737",height:"454"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Next")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002")),(0,a.kt)("h2",{id:"11-appipa-\u306e\u5185\u5bb9\u3092\u78ba\u8a8d\u3059\u308b"},"11. app.ipa \u306e\u5185\u5bb9\u3092\u78ba\u8a8d\u3059\u308b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u306e\u8b58\u5225\u5b50\u3068 Team ID \u304c\u6b63\u3057\u3044\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"app.ipa \u306e\u5185\u5bb9\u3092\u78ba\u8a8d\u3059\u308b",src:n(56921).Z,width:"737",height:"454"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Export")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30a2\u30d7\u30ea\u30d5\u30a9\u30eb\u30c0\u30fc\u306e\u4fdd\u5b58\u5834\u6240\u3092\u9078\u629e\u3057\u307e\u3059\u3002")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return n?i.createElement(k,l(l({ref:t},u),{},{components:n})):i.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37374:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Archive-your-Project-4ded23cdc25f5f9e463d1fd103dd088a.png"},60172:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Deployment-Generic-iOS-Device-6802ac746895e64a241936d873b1569b.png"},49693:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Distribution-Method-selection-4203f92fd6f07bc095d5da471bdbfe31.png"},25223:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Distribution-manifest-information-7ab8a3fa2a7ddbacdb627ad9a6d290ab.png"},60672:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Enterprise-Team-ID-8de2641becb475e122149a607a22ab2b.png"},75036:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Enterprise-distribution-options-a0d5aa35c0dd9adc40c6e128c6a67b90.png"},72855:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},11612:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Organizer-window-archive-aacf8eecb7c3910074549a45dcf45e32.png"},16185:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Re-sign-your-application-9e11a4678ac11a7bd04df4623a8719d0.png"},56921:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Review-ipa-content-de240a012f798dac5aae762ec059d6bc.png"},43727:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"}}]);