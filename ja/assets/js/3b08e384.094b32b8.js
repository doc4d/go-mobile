(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8590],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(f,i(i({ref:e},u),{},{components:n})):a.createElement(f,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74477:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i=["components"],s={id:"define-first-action",title:"\u306f\u3058\u3081\u3066\u306e\u30a2\u30af\u30b7\u30e7\u30f3"},l=void 0,c={unversionedId:"tutorials/actions/define-first-action",id:"tutorials/actions/define-first-action",isDocsHomePage:!1,title:"\u306f\u3058\u3081\u3066\u306e\u30a2\u30af\u30b7\u30e7\u30f3",description:"In this tutorial, we are going to work on a Tasks iOS app and see how to deal with actions in this app.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/actions/define-first-action.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/define-first-action",permalink:"/go-mobile/ja/docs/next/tutorials/actions/define-first-action",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/actions/define-first-action.md",version:"current",frontMatter:{id:"define-first-action",title:"\u306f\u3058\u3081\u3066\u306e\u30a2\u30af\u30b7\u30e7\u30f3"},sidebar:"tutorials",previous:{title:"\u306f\u3058\u3081\u3066\u306e\u30a2\u30af\u30b7\u30e7\u30f3",permalink:"/go-mobile/ja/docs/next/tutorials/actions/getting-started"},next:{title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b",permalink:"/go-mobile/ja/docs/next/tutorials/actions/adding-actions-template"}},u=[{value:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u5bfe\u3059\u308b\u30a2\u30af\u30b7\u30e7\u30f3",id:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u5bfe\u3059\u308b\u30a2\u30af\u30b7\u30e7\u30f3",children:[{value:"\u2488 \u2488 \u300c\u30a2\u30af\u30b7\u30e7\u30f3\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8a2d\u5b9a\u3059\u308b\u3053\u3068",id:"\u2488-\u2488-\u300c\u30a2\u30af\u30b7\u30e7\u30f3\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8a2d\u5b9a\u3059\u308b\u3053\u3068",children:[]},{value:"\u2489 \u2489 \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306e\u4f5c\u6210\u3068\u7de8\u96c6",id:"\u2489-\u2489-\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306e\u4f5c\u6210\u3068\u7de8\u96c6",children:[]},{value:"\u248a \u248a &quot;modifyStatus&quot; \u30e1\u30bd\u30c3\u30c9\u306e\u4f5c\u6210",id:"\u248a-\u248a-modifystatus-\u30e1\u30bd\u30c3\u30c9\u306e\u4f5c\u6210",children:[]}]},{value:"\u30c6\u30fc\u30d6\u30eb\u306b\u5bfe\u3059\u308b\u30a2\u30af\u30b7\u30e7\u30f3",id:"\u30c6\u30fc\u30d6\u30eb\u306b\u5bfe\u3059\u308b\u30a2\u30af\u30b7\u30e7\u30f3",children:[{value:"\u2488 \u300c\u30a2\u30af\u30b7\u30e7\u30f3\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8a2d\u5b9a\u3059\u308b\u3053\u3068",id:"\u2488-\u300c\u30a2\u30af\u30b7\u30e7\u30f3\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8a2d\u5b9a\u3059\u308b\u3053\u3068",children:[]},{value:"\u2489 \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306e\u7de8\u96c6",id:"\u2489-\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306e\u7de8\u96c6",children:[]},{value:"\u248a \u248a &quot;postponeAll&quot; \u30e1\u30bd\u30c3\u30c9\u306e\u4f5c\u6210",id:"\u248a-\u248a-postponeall-\u30e1\u30bd\u30c3\u30c9\u306e\u4f5c\u6210",children:[]}]},{value:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f",id:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f",children:[]}],p={toc:u};function d(t){var e=t.components,s=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, we are going to work on a ",(0,r.kt)("strong",{parentName:"p"},"Tasks iOS app")," and see how to deal with actions in this app."),(0,r.kt)("p",null,"Basically what we want to do in a ",(0,r.kt)("strong",{parentName:"p"},"Task app")," is changing the ",(0,r.kt)("strong",{parentName:"p"},"status")," and the ",(0,r.kt)("strong",{parentName:"p"},"percentage of completion")," of a task individually."),(0,r.kt)("p",null,"More globally, we want to ",(0,r.kt)("strong",{parentName:"p"},"change all tasks status")," to postponed or in Progress for example."),(0,r.kt)("p",null,"Download the ",(0,r.kt)("strong",{parentName:"p"},"Starter project")," and go right to the ",(0,r.kt)("strong",{parentName:"p"},"Actions section"),"."),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-Actions/archive/cf16581214a8a6e4e4067bcff43ac1265ec43ff7.zip"},"Download")),(0,r.kt)("p",null,"You can define actions for two levels:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u5bfe\u3059\u308b\u30a2\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("li",{parentName:"ul"},"\u30c6\u30fc\u30d6\u30eb\u306b\u5bfe\u3059\u308b\u30a2\u30af\u30b7\u30e7\u30f3")),(0,r.kt)("p",null,"\u307e\u305a\u306f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u5bfe\u3059\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u304b\u3089\u59cb\u3081\u307e\u3057\u3087\u3046\uff01"),(0,r.kt)("h2",{id:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u5bfe\u3059\u308b\u30a2\u30af\u30b7\u30e7\u30f3"},"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u5bfe\u3059\u308b\u30a2\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("h3",{id:"\u2488-\u2488-\u300c\u30a2\u30af\u30b7\u30e7\u30f3\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8a2d\u5b9a\u3059\u308b\u3053\u3068"},"\u2488 \u2488 \u300c\u30a2\u30af\u30b7\u30e7\u30f3\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8a2d\u5b9a\u3059\u308b\u3053\u3068"),(0,r.kt)("p",null,"In this Actions section, you will be able to define all your actions ",(0,r.kt)("strong",{parentName:"p"},"names"),", ",(0,r.kt)("strong",{parentName:"p"},"icons"),", ",(0,r.kt)("strong",{parentName:"p"},"labels"),", the ",(0,r.kt)("strong",{parentName:"p"},"table")," you want the action to be available in and the ",(0,r.kt)("strong",{parentName:"p"},"scope")," you want actions to be applied on."),(0,r.kt)("p",null,"The action section is quite empty when you open it for the first time, so click on the ",(0,r.kt)("strong",{parentName:"p"},"Plus button")," at the bottom left to add your first action!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u8ffd\u52a0",src:n(33462).Z})),(0,r.kt)("p",null,"Let's define first an action that will ",(0,r.kt)("strong",{parentName:"p"},"change a task status"),' to "Complete" and put the ',(0,r.kt)("strong",{parentName:"p"},"percentage of completion")," to 100%."),(0,r.kt)("p",null,"\u4e0b\u8a18\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u5b9f\u73fe\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enter ",(0,r.kt)("strong",{parentName:"li"},"taskDone")," in ",(0,r.kt)("strong",{parentName:"li"},"Names field")),(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"Done icon")," from the icon library"),(0,r.kt)("li",{parentName:"ul"},"Enter ",(0,r.kt)("strong",{parentName:"li"},"Done")," in ",(0,r.kt)("strong",{parentName:"li"},"Short Labels")),(0,r.kt)("li",{parentName:"ul"},"Enter ",(0,r.kt)("strong",{parentName:"li"},"Task Done")," in ",(0,r.kt)("strong",{parentName:"li"},"Long Labels")),(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"Tasks")," table from ",(0,r.kt)("strong",{parentName:"li"},"Tables")," list"),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Current record")," from ",(0,r.kt)("strong",{parentName:"li"},"Scope")," list")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5b8c\u4e86\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u8a2d\u5b9a",src:n(67828).Z})),(0,r.kt)("h3",{id:"\u2489-\u2489-\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306e\u4f5c\u6210\u3068\u7de8\u96c6"},"\u2489 \u2489 \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306e\u4f5c\u6210\u3068\u7de8\u96c6"),(0,r.kt)("p",null,"Now that your action is defined in the Project Editor, you have to create the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html"},"On Mobile App Action"))," database Method."),(0,r.kt)("p",null,"Do to so, click on ",(0,r.kt)("strong",{parentName:"p"},"Create button")," at the bottom right of the action table and enter the following code in the ",(0,r.kt)("strong",{parentName:"p"},"On Mobile App Action")," database method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($o;$context;$request;$result)\n\n$request:=$1  // \u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u304b\u3089\u9001\u3089\u308c\u305f\u60c5\u5831\n\n$context:=$request.context\n\nCase of\n\n    : ($request.action="taskDone")\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "CompletePercentage";100)\n\n        $result:=modifyStatus ($o)\n\n    Else\n\n          // Unknown request\n        $result:=New object("success";False)\n\nEnd case\n\n$0:=$result  // \u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306b\u8fd4\u3055\u308c\u308b\u60c5\u5831\n\n')),(0,r.kt)("h3",{id:"\u248a-\u248a-modifystatus-\u30e1\u30bd\u30c3\u30c9\u306e\u4f5c\u6210"},'\u248a \u248a "modifyStatus" \u30e1\u30bd\u30c3\u30c9\u306e\u4f5c\u6210'),(0,r.kt)("p",null,"Once your database method has been edited, you have to create a ",(0,r.kt)("strong",{parentName:"p"},"modifyStatus")," Method that will make the job :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    $entity.CompletePercentage:=$in.CompletePercentage\n\n    $entity.Status:=3\n\n    $status:=$entity.save()\n\n    $out:=New object\n\n    If ($status.success)\n\n        $out.success:=True  // \u30a2\u30af\u30b7\u30e7\u30f3\u306e\u6210\u529f\u3092\u901a\u77e5\n        $out.dataSynchro:=True  // \u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u66f4\u65b0\u3092\u8981\u6c42\n\n    Else\n\n        $out:=$status  // \u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306b\u8fd4\u3055\u308c\u308b\u60c5\u5831\n\n    End if\n\nElse\n\n    $out.success:=False  // \u30a2\u30af\u30b7\u30e7\u30f3\u306e\u5931\u6557\u3092\u901a\u77e5\n\nEnd if\n\n$0:=$out\n\n')),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c\u3057\u307e\u3057\u3087\u3046\uff01 Your ",(0,r.kt)("strong",{parentName:"p"},"Done action")," is available when you swipe left a cell in Listform, as well as when you click on the ",(0,r.kt)("strong",{parentName:"p"},"generic action button")," in the navigation bar of the Detail form."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5b8c\u4e86\u30a2\u30af\u30b7\u30e7\u30f3",src:n(13491).Z})),(0,r.kt)("h2",{id:"\u30c6\u30fc\u30d6\u30eb\u306b\u5bfe\u3059\u308b\u30a2\u30af\u30b7\u30e7\u30f3"},"\u30c6\u30fc\u30d6\u30eb\u306b\u5bfe\u3059\u308b\u30a2\u30af\u30b7\u30e7\u30f3"),(0,r.kt)("h3",{id:"\u2488-\u300c\u30a2\u30af\u30b7\u30e7\u30f3\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8a2d\u5b9a\u3059\u308b\u3053\u3068"},"\u2488 \u300c\u30a2\u30af\u30b7\u30e7\u30f3\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8a2d\u5b9a\u3059\u308b\u3053\u3068"),(0,r.kt)("p",null,"Now, imagine that you are going on holidays and you want to ",(0,r.kt)("strong",{parentName:"p"},"change all your tasks status"),' to "Postponed".'),(0,r.kt)("p",null,"\u4e0b\u8a18\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u5b9f\u73fe\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enter ",(0,r.kt)("strong",{parentName:"li"},"postponeAll")," in ",(0,r.kt)("strong",{parentName:"li"},"Names field")),(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"Postponed icon")," from the icon library"),(0,r.kt)("li",{parentName:"ul"},"Enter ",(0,r.kt)("strong",{parentName:"li"},"Postpone All")," in ",(0,r.kt)("strong",{parentName:"li"},"Short Labels")),(0,r.kt)("li",{parentName:"ul"},"Enter ",(0,r.kt)("strong",{parentName:"li"},"Postpone All")," in ",(0,r.kt)("strong",{parentName:"li"},"Long Labels")),(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"Tasks")," table from ",(0,r.kt)("strong",{parentName:"li"},"Tables")," list"),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Table")," from ",(0,r.kt)("strong",{parentName:"li"},"Scope")," list")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5ef6\u671f\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u8a2d\u5b9a",src:n(98761).Z})),(0,r.kt)("h3",{id:"\u2489-\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306e\u7de8\u96c6"},"\u2489 \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306e\u7de8\u96c6"),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Edit button")," at the bottom right of the action table to complete the ",(0,r.kt)("strong",{parentName:"p"},"On Mobile App Action")," database method :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($o;$context;$request;$result)\n\n$request:=$1  // \u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u304b\u3089\u9001\u3089\u308c\u305f\u60c5\u5831\n\n$context:=$request.context\n\nCase of\n\n    : ($request.action="taskDone")\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "CompletePercentage";100)\n\n        $result:=modifyStatus ($o)\n\n    : ($request.action="postponeAll")\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "Status";4)\n\n        $result:= postponeAll ($o)\n    Else\n\n          // Unknown request\n        $result:=New object("success";False)\n\nEnd case\n\n$0:=$result  // \u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u306b\u8fd4\u3055\u308c\u308b\u60c5\u5831\n\n')),(0,r.kt)("h3",{id:"\u248a-\u248a-postponeall-\u30e1\u30bd\u30c3\u30c9\u306e\u4f5c\u6210"},'\u248a \u248a "postponeAll" \u30e1\u30bd\u30c3\u30c9\u306e\u4f5c\u6210'),(0,r.kt)("p",null,"As you create the ",(0,r.kt)("strong",{parentName:"p"},"modifyStatus")," Method, follow the same process and create a new ",(0,r.kt)("strong",{parentName:"p"},"postponeAll")," Method that will modify all record status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($entity;$in;$out)\n\n$in:=$1\n\n$out:=New object("success";False)\n\nIf ($in.dataClass#Null)\n\n    For each ($entity;ds[$in.dataClass].all())\n\n        $entity.Status:=$in.Status\n        $entity.save()\n\n    End for each\n\n    $out.success:=True  // \u30a2\u30af\u30b7\u30e7\u30f3\u306e\u6210\u529f\u3092\u901a\u77e5\n    $out.dataSynchro:=True  // \u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u66f4\u65b0\u3092\u8981\u6c42\n\nElse\n\n    $out.errors:=New collection("No Selection")\n\nEnd if\n\n$0:=$out\n\n')),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c\u3057\u307e\u3057\u3087\u3046\uff01 You will find a new ",(0,r.kt)("strong",{parentName:"p"},"generic button")," in the navigation bar of your Lisform. Click on it to trigger the ",(0,r.kt)("strong",{parentName:"p"},"Postpone All")," action."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5ef6\u671f\u30a2\u30af\u30b7\u30e7\u30f3\uff08\u5b8c\u6210\uff09",src:n(95773).Z})),(0,r.kt)("h2",{id:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f"},"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f"),(0,r.kt)("p",null,"\u304a\u3064\u304b\u308c\u3055\u307e\u3067\u3057\u305f\uff01 You've just added 2 actions to your iOS app. You are now able to add all actions you need to your Tasks app!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u307e\u3068\u3081\u3066\u8a2d\u5b9a\u30a2\u30af\u30b7\u30e7\u30f3\uff08\u5b8c\u6210\uff09",src:n(46316).Z})),(0,r.kt)("p",null,"Download the completed project that includes various actions:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-Actions/releases/latest/download/tutorial-Actions.zip"},"Download")))}d.isMDXComponent=!0},33462:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Create-action-3f9a1551995b3fc7cecfd5efc767fad7.png"},67828:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Done-action-definition-0ad0618548aacf2461c2dd6cd50fbe5b.png"},13491:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Entity-action-Done-af91a9feef35665a480fd2607f6f58b7.png"},46316:function(t,e,n){"use strict";e.Z=n.p+"assets/images/ListForm-entity-action-tableview-c4ca8838892967fd5df82c8271e4090b.png"},95773:function(t,e,n){"use strict";e.Z=n.p+"assets/images/ListForm-table-action-tableview-tuto-658578b1585c3ebf027a34911111377a.png"},98761:function(t,e,n){"use strict";e.Z=n.p+"assets/images/PostponedAll-action-definition-fbbbc42bb0a71003e1335f344eb93c0e.png"}}]);