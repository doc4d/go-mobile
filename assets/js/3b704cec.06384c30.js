"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6976],{37560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={id:"one-to-many-actions",title:"One to Many - Actions"},i=void 0,s={unversionedId:"tutorials/relations/one-to-many-actions",id:"version-19-R6/tutorials/relations/one-to-many-actions",title:"One to Many - Actions",description:"We are now going to go a little bit further and create a task for a specific employee.",source:"@site/versioned_docs/version-19-R6/tutorials/relations/one-to-many-actions.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-actions",permalink:"/tutorials/relations/one-to-many-actions",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/relations/one-to-many-actions.md",tags:[],version:"19-R6",frontMatter:{id:"one-to-many-actions",title:"One to Many - Actions"},sidebar:"tutorials",previous:{title:"One to Many - Custom button",permalink:"/tutorials/relations/one-to-many-custom-button"},next:{title:"Relation interactions",permalink:"/tutorials/relations/relation-interactions"}},l={},c=[{value:"Create addProject action",id:"create-addproject-action",level:2},{value:"On Mobile App Action method",id:"on-mobile-app-action-method",level:2},{value:"addProject Method",id:"addproject-method",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are now going to go a little bit further and ",(0,a.kt)("strong",{parentName:"p"},"create a task for a specific employee"),"."),(0,a.kt)("p",null,"It is very easy to create an entity using ",(0,a.kt)("strong",{parentName:"p"},"parent Entity")," !"),(0,a.kt)("p",null,"Let's get started by downloading the Starter project:"),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RelationsActions/archive/6c649733f5efd3c799e4e04c05a85e17eeadf7f0.zip"},"Starter project")),(0,a.kt)("h2",{id:"create-addproject-action"},"Create addProject action"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open the project editor and go to the Action section.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add a ",(0,a.kt)("inlineCode",{parentName:"p"},"addProject")," Action"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create addProject Method",src:n(91084).Z,width:"2164",height:"2140"})),(0,a.kt)("h2",{id:"on-mobile-app-action-method"},"On Mobile App Action method"),(0,a.kt)("p",null,"The only thing you have to do is defining the ",(0,a.kt)("strong",{parentName:"p"},"addProject")," action in the ",(0,a.kt)("strong",{parentName:"p"},"On Mobile App Action method")," as follows :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},': ($request.action="addProjects")\n        \n$o:=New object(\\\n"dataClass";$context.dataClass;\\\n"parent";$context.parent;\\\n"entity";$context.entity;\\\n"parameters";$parameters)\n\n$result:=addProject ($o)\n\n\n')),(0,a.kt)("h2",{id:"addproject-method"},"addProject Method"),(0,a.kt)("p",null,"Then enter thoses lines in your ",(0,a.kt)("strong",{parentName:"p"},"addProject Method"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($entity;$in;$out)\n\n$in:=$1\n$out:=New object("success";False)\n\nIf ($in.dataClass#Null)\n    \n    $entity:=ds[$in.dataClass].new()  //Create a reference\n    \n    For each ($key;$in.parameters)\n        \n        $entity[$key]:=$in.parameters[$key]\n        \n    End for each \n    \n    $primaryKey:=$in.parent.primaryKey   //Get parent primary key\n        \n    $parent:=ds[$in.parent.dataClass].get($primaryKey)\n  \n  $inverseRelationName:=$in.entity.relationName   //Get parent relation name\n\n    $entity[$inverseRelationName]:=$parent\n    \n    $status:=$entity.save()  //save the entity\n    \n    $out.success:=True  // notify App that action success\n    \n    $out.dataSynchro:=True  // notify App to refresh the selection\n    \n    $out.statusText:="Task added"\n    \n    $out.close:=True\n    \nElse \n    \n    $out.errors:=New collection("No Selection")\n    \nEnd if \n\n$0:=$out\n\n')),(0,a.kt)("p",null,"And that's it you can then add some task to your employees easily using the parent Entity !"),(0,a.kt)("p",null,"Download the completed project: "),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RelationsActions/releases/latest/download/tutorial-RelationsActions.zip"},"Download")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(y,i(i({ref:t},p),{},{components:n})):o.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91084:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/create-addProject-Method-4D-for-iOS-relation-parent-ID-31af12fc8670de1b42388f53fab02fb1.png"}}]);