(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2207],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return r?o.createElement(f,a(a({ref:t},c),{},{components:r})):o.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46915:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var o=r(22122),n=r(19756),i=(r(67294),r(3905)),a=["components"],s={id:"filter-query-introduction",title:"Filter queries"},u=void 0,l={unversionedId:"tutorials/filter-queries/filter-query-introduction",id:"tutorials/filter-queries/filter-query-introduction",isDocsHomePage:!1,title:"Filter queries",description:"Nesse tutorial vamos mostrar como criar pesquisas com filtro para exibir conte\xfado filtrado no app m\xf3vel gerado.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/tutorials/filter-queries/filter-query-introduction.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/filter-query-introduction",permalink:"/go-mobile/pt/docs/next/tutorials/filter-queries/filter-query-introduction",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/filter-queries/filter-query-introduction.md",version:"current",frontMatter:{id:"filter-query-introduction",title:"Filter queries"},sidebar:"tutorials",previous:{title:"Criar formato de dados",permalink:"/go-mobile/pt/docs/next/tutorials/data-formatter/create-data-formatter"},next:{title:"Definir un Filter Query",permalink:"/go-mobile/pt/docs/next/tutorials/filter-queries/define-filter-query"}},c=[{value:"Baixe o Starter Project",id:"baixe-o-starter-project",children:[]}],p={toc:c};function m(e){var t=e.components,s=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Nesse tutorial vamos mostrar como criar ",(0,i.kt)("strong",{parentName:"p"},"pesquisas com filtro")," para exibir conte\xfado filtrado no app m\xf3vel gerado."),(0,i.kt)("p",null,"Se voc\xea for um gestor de contas e quiser consultar seus contratos ",(0,i.kt)("em",{parentName:"p"},"Em curso")," simplesmente conectando-se a sua aplica\xe7\xe3o com seu endere\xe7o de correio eletr\xf4nico."),(0,i.kt)("p",null,"Primeiro, a partir da se\xe7\xe3o Dados, vamos definir um ",(0,i.kt)("strong",{parentName:"p"},"filtro de pesquisa b\xe1sico")," para exibir apenas contratos ",(0,i.kt)("em",{parentName:"p"},"Em Progresso"),". Depois vamos aplicar um ",(0,i.kt)("strong",{parentName:"p"},"filtro baseado na informa\xe7\xe3o de usu\xe1rio")," que depende do email do gerente de conta."),(0,i.kt)("h2",{id:"baixe-o-starter-project"},"Baixe o Starter Project"),(0,i.kt)("p",null,"Antes de come\xe7ar, tenha certeza de baixar o ",(0,i.kt)("strong",{parentName:"p"},"Starter Project")," que inclui um arquivo ",(0,i.kt)("strong",{parentName:"p"},"4DforiOSQueries.4dbase")," (um banco de dados demo com um projeto de app m\xf3vel pronto para usar)"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip"},"Starter project")),(0,i.kt)("p",null,"Este banco de dados inclui:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tabela CRM")," com todos os dados que quisermos exibir no app gerado  iOS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tabela AccountManager ")," com informa\xe7\xe3o b\xe1sica sobre os administradores de contas (email e nome).")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"CRM database",src:r(94260).Z})),(0,i.kt)("p",null,"Estamos prontos para definir nossa primeira pesquisa limitada."),(0,i.kt)("p",null,"Abra o projeto m\xf3vel clicando em Open > Mobile Project... e selecione o app CRM  > ",(0,i.kt)("strong",{parentName:"p"},"project.4dmobileapp"),"."))}m.isMDXComponent=!0},94260:function(e,t,r){"use strict";t.Z=r.p+"assets/images/CRMDatabase-1b6c6c0179884652d0b0bc4fbe7e0041.png"}}]);