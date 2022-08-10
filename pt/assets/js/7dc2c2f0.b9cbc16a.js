"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3400],{84254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),o=(r(67294),r(3905));const i={id:"define-filter-query",title:"Definir un Filter Query"},n=void 0,s={unversionedId:"tutorials/filter-queries/define-filter-query",id:"version-19-R6/tutorials/filter-queries/define-filter-query",title:"Definir un Filter Query",description:'Por agora,  se construir o app Starter Project e digitar "michelle.simpson@mail.com" como o email de login (uma das contas de administrador), ver\xe1 todos os contratos e estados dos administradores (Closed e In Progress).',source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R6/tutorials/filter-queries/define-filter-query.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/define-filter-query",permalink:"/pt/tutorials/filter-queries/define-filter-query",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/filter-queries/define-filter-query.md",tags:[],version:"19-R6",frontMatter:{id:"define-filter-query",title:"Definir un Filter Query"}},l={},p=[],m={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Por agora,  se construir o app Starter Project e digitar "',(0,o.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),'" como o email de login (uma das contas de administrador), ver\xe1 ',(0,o.kt)("strong",{parentName:"p"},"todos os contratos e estados dos administradores")," (",(0,o.kt)("em",{parentName:"p"},"Closed")," e ",(0,o.kt)("em",{parentName:"p"},"In Progress"),")."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iOS app without queries",src:r(45959).Z,width:"1559",height:"907"})),(0,o.kt)("p",null,"Como falamos anteriormente, queremos que os administradores de contas acessem a seus contratos ",(0,o.kt)("em",{parentName:"p"},"Em Progresso")," iniciando a sess\xe3o em seu aplicativo m\xf3vel com seu correio eletr\xf4nico. Para fazer isso:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"V\xe1 para a se\xe7\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Dados")),(0,o.kt)("li",{parentName:"ul"},"D\xea clique direito no campo ",(0,o.kt)("strong",{parentName:"li"},"Filtro de pesquisa")," para fazer com que apare\xe7am os bot\xf5es ",(0,o.kt)("strong",{parentName:"li"},"Campos, Comparadores e Operadores"),"."),(0,o.kt)("li",{parentName:"ul"},"Clique no bot\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Campos")," e selecione ",(0,o.kt)("strong",{parentName:"li"},"Estado"),"."),(0,o.kt)("li",{parentName:"ul"},"Clique no bot\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Comparadores")," e selecione ",(0,o.kt)("strong",{parentName:"li"},"Igual a"),"."),(0,o.kt)("li",{parentName:"ul"},"Como quer mostrar os contratos",(0,o.kt)("em",{parentName:"li"},"abertos"),", ingresse ",(0,o.kt)("strong",{parentName:"li"},"Em progresso")),(0,o.kt)("li",{parentName:"ul"},"Lembre de validar sua pesquisa clicando no bot\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Validar")," do contr\xe1rio n\xe3o poder\xe1 criar sua aplica\xe7\xe3o.")),(0,o.kt)("p",null,"Deve obter este resultado:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CRM database",src:r(29555).Z,width:"2164",height:"1988"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTA")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Um \xedcone ",(0,o.kt)("strong",{parentName:"li"},"filter")," \xe9 exibido \xe0 direita de cada tabela quando um filtro b\xe1sico \xe9 aplicado."),(0,o.kt)("li",{parentName:"ul"},"Para esses tipos de filtros de pesquisa, pode escolher incorporar os dados no app ou carregar os dados depois do login, marcando a checkbox ",(0,o.kt)("strong",{parentName:"li"},"Embed data into the built application")," ."),(0,o.kt)("li",{parentName:"ul"},"O tamanho ser\xe1 calculado na primeira compila\xe7\xe3o para poder visualizar o ",(0,o.kt)("strong",{parentName:"li"},"tamanho de seus dados"),"."))),(0,o.kt)("p",null,'Se construir seu app e digitar "',(0,o.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),'" como o email de login, ver\xe1 que todos os contratos ',(0,o.kt)("em",{parentName:"p"},"Em Progresso")," ser\xe3o exibidos no Simulator!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iOS app with basic query",src:r(16103).Z,width:"1559",height:"907"})),(0,o.kt)("p",null,"N\xe3o \xe9 bem o que esper\xe1vamos! O que queremos agora \xe9 que para cada conta de administrador, possamos visualizar apenas seus pr\xf3prios contratos ",(0,o.kt)("em",{parentName:"p"},"Em Progresso")," , ent\xe3o vamos completar nossa pesquisa!"))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return r?a.createElement(f,n(n({ref:t},m),{},{components:r})):a.createElement(f,n({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var p=2;p<i;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},29555:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/filterquery-7902086c2d1e2bfd8c24d1d16e9fb561.png"},45959:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ios-app-without-queries-3893b9ebd1437a06592cc18393a01e1e.png"},16103:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/restrited-queries-basic-query-c48a1a721abebefd5a554dcc7c7580d4.png"}}]);