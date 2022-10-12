"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[294],{72289:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={id:"create-swift-formatter",title:"Create Swift formatter"},i=void 0,l={unversionedId:"tutorials/data-formatter/create-swift-formatter",id:"version-19-R6/tutorials/data-formatter/create-swift-formatter",title:"Create Swift formatter",description:"OBJETIVOS",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R6/tutorials/data-formatter/create-swift-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/create-swift-formatter",permalink:"/go-mobile/es/docs/19-R6/tutorials/data-formatter/create-swift-formatter",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/data-formatter/create-swift-formatter.md",tags:[],version:"19-R6",frontMatter:{id:"create-swift-formatter",title:"Create Swift formatter"},sidebar:"tutorials",previous:{title:"Create a static formatter",permalink:"/go-mobile/es/docs/19-R6/tutorials/data-formatter/create-static-data-formatter"},next:{title:"Create Kotlin formatter",permalink:"/go-mobile/es/docs/19-R6/tutorials/data-formatter/create-kotlin-formatter"}},s={},c=[{value:"Object attribute Swift formatter",id:"object-attribute-swift-formatter",level:3}],u={toc:c};function f(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,n.kt)("p",{parentName:"blockquote"},"Create your first Swift formatters.")),(0,n.kt)("p",null,"A formatter can be composed of both Swift and ",(0,n.kt)("a",{parentName:"p",href:"/go-mobile/es/docs/19-R6/tutorials/data-formatter/create-kotlin-formatter"},"Kotlin")," code."),(0,n.kt)("h3",{id:"object-attribute-swift-formatter"},"Object attribute Swift formatter"),(0,n.kt)("p",null,"In the following example, we want to display an address getting only relevant values that are available in the following object using a Swift formatter"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},'$Obj:=New object \n$Obj.name:="4D SAS" \n$Obj.address1:="66 rue de Sartrouville" \n$Obj.address2:="Parc les Erables, b\xe2timent 4" \n$Obj.zipCode:="78230" \n$Obj.city:="Le Pecq" \n$Obj.country:="France" \n$Obj.phoneNumber:="+33 1 30 53 92 00" \n$Obj.website:="fr.4d.com"\n\n$Ent:=ds.Employees.get(4)\n$Ent.Object_Attribute:=$Obj\n$Ent.save()\n\n')),(0,n.kt)("p",null,"Here is the ",(0,n.kt)("strong",{parentName:"p"},"manifest.json file"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},'{\n    "name": "objectFormatter",\n    "binding": "objectAddress",\n    "type": "object",\n    "target" : ["ios", "android"]\n\n}\n\n')),(0,n.kt)("p",null,"To get the number, the street, and the city, let\u2019s build a custom ",(0,n.kt)("strong",{parentName:"p"},"Swift formatter"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},'import UIKit\nimport QMobileUI\n\nextension UILabel {\n    @objc dynamic var objectAddress: [String: Any]? {\n        get {\n            return nil\n        }\n        set {\n            if let newValue = newValue {\n                guard let value1 = newValue["name"] as? String,\n                      let value2 = newValue["address1"] as? String,\n                      let value3 = newValue["zipCode"] as? String,\n                      let value4 = newValue["city"] as? String else {\n                          return\n                      }\n                self.text = "\\(value1) - \\(value2) - \\(value3) \\(value4)"\n            } else {\n                self.text = ""\n            }\n        }\n    }\n}\n')),(0,n.kt)("p",null,"Putting all that together, you can save this formatter as a ",(0,n.kt)("strong",{parentName:"p"},".swift")," file in the formatter folder and use it in your mobile project."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Architecture",src:r(26861).Z,width:"3182",height:"882"})),(0,n.kt)("p",null,"Check out the final result:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Resultado final",src:r(85134).Z,width:"478",height:"705"})))}f.isMDXComponent=!0},3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>p});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),c=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=c(r),p=n,d=m["".concat(s,".").concat(p)]||m[p]||f[p]||o;return r?a.createElement(d,i(i({ref:e},u),{},{components:r})):a.createElement(d,i({ref:e},u))}));function p(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26861:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/architecture-swift-ab960317b73c273ef484bdd5fbeefe26.png"},85134:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/rendu-c0879a0279c62c981a36dc86b5a0ed85.png"}}]);