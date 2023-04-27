"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7491],{4763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={id:"one-to-many-actions",title:"Relaciones Uno a Muchos - Acciones"},i=void 0,c={unversionedId:"tutorials/relations/one-to-many-actions",id:"version-20/tutorials/relations/one-to-many-actions",title:"Relaciones Uno a Muchos - Acciones",description:"Ahora vamos a ir un poco m\xe1s lejos y crear una tarea para un empleado espec\xedfico.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/tutorials/relations/one-to-many-actions.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-actions",permalink:"/go-mobile/es/docs/tutorials/relations/one-to-many-actions",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-20/tutorials/relations/one-to-many-actions.md",tags:[],version:"20",frontMatter:{id:"one-to-many-actions",title:"Relaciones Uno a Muchos - Acciones"},sidebar:"tutorials",previous:{title:"Uno a Muchos - Bot\xf3n personalizado",permalink:"/go-mobile/es/docs/tutorials/relations/one-to-many-custom-button"},next:{title:"Interacciones entre relaciones",permalink:"/go-mobile/es/docs/tutorials/relations/relation-interactions"}},s={},l=[{value:"Crear una acci\xf3n addProject",id:"crear-una-acci\xf3n-addproject",level:2},{value:"M\xe9todo On Mobile App Action",id:"m\xe9todo-on-mobile-app-action",level:2},{value:"M\xe9todo addProject",id:"m\xe9todo-addproject",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ahora vamos a ir un poco m\xe1s lejos y ",(0,o.kt)("strong",{parentName:"p"},"crear una tarea para un empleado espec\xedfico"),"."),(0,o.kt)("p",null,"\xa1Es muy f\xe1cil crear una entidad utilizando una ",(0,o.kt)("strong",{parentName:"p"},"Entidad padre"),"!"),(0,o.kt)("p",null,"Comencemos descargando el proyecto Starter:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RelationsActions/archive/6c649733f5efd3c799e4e04c05a85e17eeadf7f0.zip"},"Starter project")),(0,o.kt)("h2",{id:"crear-una-acci\xf3n-addproject"},"Crear una acci\xf3n addProject"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Abra el editor del proyecto y vaya a la secci\xf3n Action.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A\xf1adir una acci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"addProject")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create addProject Method",src:n(26795).Z,width:"2164",height:"2140"})),(0,o.kt)("h2",{id:"m\xe9todo-on-mobile-app-action"},"M\xe9todo On Mobile App Action"),(0,o.kt)("p",null,"Lo \xfanico que debe hacer es definir la acci\xf3n ",(0,o.kt)("strong",{parentName:"p"},"addProject")," en el ",(0,o.kt)("strong",{parentName:"p"},"m\xe9todo On Mobile App Action")," de la siguiente manera:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},': ($request.action="addProjects")\n\n$o:=New object(\\\n"dataClass";$context.dataClass;\\\n"parent";$context.parent;\\\n"entity";$context.entity;\\\n"parameters";$parameters)\n\n$result:=addProject ($o)\n\n\n')),(0,o.kt)("h2",{id:"m\xe9todo-addproject"},"M\xe9todo addProject"),(0,o.kt)("p",null,"Luego introduzca esas l\xedneas de c\xf3digo en su ",(0,o.kt)("strong",{parentName:"p"},"addProject Method"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($entity;$in;$out)\n\n$in:=$1\n$out:=New object("success";False)\n\nIf ($in.dataClass#Null)\n\n    $entity:=ds[$in.dataClass].new()  //Crear una referencia\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $primaryKey:=$in.parent.primaryKey   //Get parent primary key\n\n    $parent:=ds[$in.parent.dataClass].get($primaryKey)\n\n  $inverseRelationName:=$in.entity.relationName   //Obtener nombre de la relaci\xf3n padre\n\n    $entity[$inverseRelationName]:=$parent\n\n    $status:=$entity.save()  //guardar la entidad\n\n    $out.success:=True  // notificar App que la acci\xf3n es exitosa\n\n    $out.dataSynchro:=True  // notificar App para refrescar la selecci\xf3n\n\n    $out.statusText:="Task added"\n\n    $out.close:=True\n\nElse \n\n    $out.errors:=New collection("No Selection")\n\nEnd if \n\n$0:=$out\n\n')),(0,o.kt)("p",null,"\xa1Y eso es todo, puede agregar alguna tarea a sus empleados f\xe1cilmente usando la entidad padre!"),(0,o.kt)("p",null,"Descargar el proyecto terminado:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RelationsActions/releases/latest/download/tutorial-RelationsActions.zip"},"Descargar")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26795:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-addProject-Method-4D-for-iOS-relation-parent-ID-31af12fc8670de1b42388f53fab02fb1.png"}}]);