"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7481],{10430:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={id:"one-to-many-actions",title:"Rela\xe7\xf5es Um para Muitos - A\xe7\xf5es"},i=void 0,s={unversionedId:"tutorials/relations/one-to-many-actions",id:"version-19-R2/tutorials/relations/one-to-many-actions",title:"Rela\xe7\xf5es Um para Muitos - A\xe7\xf5es",description:"Vamos agora  criar uma tarefa para um funcion\xe1rio espec\xedfico.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R2/tutorials/relations/one-to-many-actions.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-actions",permalink:"/go-mobile/pt/docs/19-R2/tutorials/relations/one-to-many-actions",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/relations/one-to-many-actions.md",tags:[],version:"19-R2",frontMatter:{id:"one-to-many-actions",title:"Rela\xe7\xf5es Um para Muitos - A\xe7\xf5es"},sidebar:"version-19-R2/tutorials",previous:{title:"Um para Muitos - bot\xe3o personalizado",permalink:"/go-mobile/pt/docs/19-R2/tutorials/relations/one-to-many-custom-button"},next:{title:"Relation interactions",permalink:"/go-mobile/pt/docs/19-R2/tutorials/relations/relation-interactions"}},l={},c=[{value:"Criar a\xe7\xe3o addProject",id:"criar-a\xe7\xe3o-addproject",level:2},{value:"M\xe9todo On Mobile App Action",id:"m\xe9todo-on-mobile-app-action",level:2},{value:"M\xe9todo addProject",id:"m\xe9todo-addproject",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Vamos agora  ",(0,o.kt)("strong",{parentName:"p"},"criar uma tarefa para um funcion\xe1rio espec\xedfico"),"."),(0,o.kt)("p",null,"\xc9 f\xe1cil criar uma entidade usando ",(0,o.kt)("strong",{parentName:"p"},"parent Entity")," !"),(0,o.kt)("p",null,"Vamos come\xe7ar baixando o Projeto Starter:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RelationsActions/archive/6c649733f5efd3c799e4e04c05a85e17eeadf7f0.zip"},"Starter project")),(0,o.kt)("h2",{id:"criar-a\xe7\xe3o-addproject"},"Criar a\xe7\xe3o addProject"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Abra o editor de projeto e v\xe1 para a se\xe7\xe3o A\xe7\xe3o.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Adicionar uma A\xe7\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"addProject")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create addProject Method",src:a(29763).Z,width:"2164",height:"2140"})),(0,o.kt)("h2",{id:"m\xe9todo-on-mobile-app-action"},"M\xe9todo On Mobile App Action"),(0,o.kt)("p",null,"A \xfanica coisa que precisa fazer \xe9 definir a a\xe7\xe3o ",(0,o.kt)("strong",{parentName:"p"},"addProject")," no m\xe9todo ",(0,o.kt)("strong",{parentName:"p"},"On Mobile App Action")," como abaixo :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},': ($request.action="addProjects")\n\n$o:=New object(\\\n"dataClass";$context.dataClass;\\\n"parent";$context.parent;\\\n"entity";$context.entity;\\\n"parameters";$parameters)\n\n$result:=addProject ($o)\n\n\n')),(0,o.kt)("h2",{id:"m\xe9todo-addproject"},"M\xe9todo addProject"),(0,o.kt)("p",null,"Agora entre estas linhas em seu m\xe9todo ",(0,o.kt)("strong",{parentName:"p"},"addProject"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1) C_OBJECT($entity;$in;$out)\n\n$in:=$1\n$out:=New object("success";False) If ($in.dataClass#Null)\n\n    $entity:=ds[$in.dataClass].new()  //Cria uma refer\xeancia\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $primaryKey:=$in.parent.primaryKey   //Obt\xe9m a chave prim\xe1ria pai\n\n    $parent:=ds[$in.parent.dataClass].get($primaryKey)\n\n  $inverseRelationName:=$in.entity.relationName   //Obt\xe9m o nome de rela\xe7\xe3o pai\n\n    $entity[$inverseRelationName]:=$parent\n\n    $status:=$entity.save()  //salva a entidade\n\n    $out.success:=True  // notififca o App que a a\xe7\xe3o teve sucesso\n\n    $out.dataSynchro:=True  // notifica o App para refrescar a sele\xe7\xe3o\n\n    $out.statusText:="Task added"\n\n    $out.close:=True Else \n\n    $out.errors:=New collection("No Selection") End if \n\n$0:=$out\n\n')),(0,o.kt)("p",null,"E isso \xe9 tudo, agora pode adicionar uma tarefa para seus funcion\xe1rios facilmente usando a Entity pai!"),(0,o.kt)("p",null,"Baixe o projeto terminado:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RelationsActions/releases/latest/download/tutorial-RelationsActions.zip"},"Baixar")))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},29763:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-addProject-Method-4D-for-iOS-relation-parent-ID-31af12fc8670de1b42388f53fab02fb1.png"}}]);