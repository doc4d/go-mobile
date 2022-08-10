"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2237],{76706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"one-to-many-actions",title:"\uff11\u5bfe\uff2e\u3068\u30a2\u30af\u30b7\u30e7\u30f3"},i=void 0,l={unversionedId:"tutorials/relations/one-to-many-actions",id:"version-19-R5/tutorials/relations/one-to-many-actions",title:"\uff11\u5bfe\uff2e\u3068\u30a2\u30af\u30b7\u30e7\u30f3",description:"We are now going to go a little bit further and create a task for a specific employee.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R5/tutorials/relations/one-to-many-actions.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-actions",permalink:"/go-mobile/ja/docs/19-R5/tutorials/relations/one-to-many-actions",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/relations/one-to-many-actions.md",tags:[],version:"19-R5",frontMatter:{id:"one-to-many-actions",title:"\uff11\u5bfe\uff2e\u3068\u30a2\u30af\u30b7\u30e7\u30f3"},sidebar:"tutorials",previous:{title:"\uff11\u5bfe\uff2e\u30ab\u30b9\u30bf\u30e0\u30dc\u30bf\u30f3",permalink:"/go-mobile/ja/docs/19-R5/tutorials/relations/one-to-many-custom-button"},next:{title:"\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u64cd\u4f5c",permalink:"/go-mobile/ja/docs/19-R5/tutorials/relations/relation-interactions"}},s={},c=[{value:"addProject \u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b",id:"addproject-\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"On Mobile App Action \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9",id:"on-mobile-app-action-\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9",level:2},{value:"addProject \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9",id:"addproject-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are now going to go a little bit further and ",(0,a.kt)("strong",{parentName:"p"},"create a task for a specific employee"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u89aa\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3"),"\u3055\u3048\u304d\u3061\u3093\u3068\u7279\u5b9a\u3067\u304d\u3066\u3044\u308c\u3070\uff0c\u5b50\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u4f5c\u6210\u3059\u308b\u306e\u306f\u5c11\u3057\u3082\u96e3\u3057\u3044\u3053\u3068\u306f\u3067\u306f\u3042\u308a\u307e\u305b\u3093\uff01"),(0,a.kt)("p",null,"Let's get started by downloading the Starter project:"),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RelationsActions/archive/6c649733f5efd3c799e4e04c05a85e17eeadf7f0.zip"},"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")),(0,a.kt)("h2",{id:"addproject-\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b"},"addProject \u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u3092\u958b\u3044\u3066\u300c\u30a2\u30af\u30b7\u30e7\u30f3\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add a ",(0,a.kt)("inlineCode",{parentName:"p"},"addProject")," Action"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"addProject \u30e1\u30bd\u30c3\u30c9\u306e\u4f5c\u6210",src:n(67795).Z,width:"2164",height:"2140"})),(0,a.kt)("h2",{id:"on-mobile-app-action-\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9"},"On Mobile App Action \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9"),(0,a.kt)("p",null,"\u3042\u3068\u306f\u4e0b\u8a18\u306e\u3088\u3046\u306b",(0,a.kt)("strong",{parentName:"p"},"On Mobile App Action"),"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u5185\u3067",(0,a.kt)("strong",{parentName:"p"},"addProject")," \u30a2\u30af\u30b7\u30e7\u30f3\u306e\u52d5\u4f5c\u3092\u5b9a\u7fa9\u3059\u308b\u3060\u3051\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},': ($request.action="addProjects")\n\n$o:=New object(\\\n"dataClass";$context.dataClass;\\\n"parent";$context.parent;\\\n"entity";$context.entity;\\\n"parameters";$parameters)\n\n$result:=addProject ($o)\n\n\n')),(0,a.kt)("h2",{id:"addproject-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9"},"addProject \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"addProject"),"\u30e1\u30bd\u30c3\u30c9\u306b\u306f\uff0c\u4e0b\u8a18\u306e\u30b3\u30fc\u30c9\u3092\u5165\u529b\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($entity;$in;$out)\n\n$in:=$1\n$out:=New object("success";False)\n\nIf ($in.dataClass#Null)\n\n    $entity:=ds[$in.dataClass].new()  //\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u4f5c\u6210\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $primaryKey:=$in.parent.primaryKey   //\u89aa\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30d7\u30e9\u30a4\u30de\u30ea\u30fc\u30ad\u30fc\n\n    $parent:=ds[$in.parent.dataClass].get($primaryKey)\n\n  $inverseRelationName:=$in.entity.relationName   //\u89aa\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30ea\u30ec\u30fc\u30b7\u30e7\u30f3\u540d\n\n    $entity[$inverseRelationName]:=$parent\n\n    $status:=$entity.save()  //\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u4fdd\u5b58\n\n    $out.success:=True  //\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u6210\u529f\u3092\u901a\u77e5\n\n    $out.dataSynchro:=True  //\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306b\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u3092\u8981\u6c42\n\n    $out.statusText:="Task added"\n\n    $out.close:=True\n\nElse \n\n    $out.errors:=New collection("No Selection")\n\nEnd if \n\n$0:=$out\n\n')),(0,a.kt)("p",null,"\u89aa\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306b\u3088\u308a\uff0c\u5e7e\u3064\u3067\u3082\u62c5\u5f53\u8005\u306b\u30bf\u30b9\u30af\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\uff01"),(0,a.kt)("p",null,"\u5b8c\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RelationsActions/releases/latest/download/tutorial-RelationsActions.zip"},"Download")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67795:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-addProject-Method-4D-for-iOS-relation-parent-ID-31af12fc8670de1b42388f53fab02fb1.png"}}]);