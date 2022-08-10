"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[760],{66336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>n,toc:()=>c});var i=r(87462),a=(r(67294),r(3905));const o={id:"multi-criteria-search",title:"Pesquisa multicrit\xe9rio"},s=void 0,n={unversionedId:"tutorials/creating-list-forms/multi-criteria-search",id:"tutorials/creating-list-forms/multi-criteria-search",title:"Pesquisa multicrit\xe9rio",description:"Esta se\xe7\xe3o mostra como ativar a pesquisa multicrit\xe9rio eu seus modelos.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/tutorials/creating-list-forms/multi-criteria-search.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/multi-criteria-search",permalink:"/pt/docs/next/tutorials/creating-list-forms/multi-criteria-search",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/creating-list-forms/multi-criteria-search.md",tags:[],version:"current",frontMatter:{id:"multi-criteria-search",title:"Pesquisa multicrit\xe9rio"},sidebar:"tutorials",previous:{title:"Template.svg",permalink:"/pt/docs/next/tutorials/creating-list-forms/list-form-svg-file"},next:{title:"iOS Storyboard",permalink:"/pt/docs/next/tutorials/creating-list-forms/list-form-storyboard"}},l={},c=[{value:"Template svg file",id:"template-svg-file",level:2},{value:"Editor de Projeto",id:"editor-de-projeto",level:2}],p={toc:c};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Esta se\xe7\xe3o mostra como ativar ",(0,a.kt)("a",{parentName:"p",href:"../../project-definition/forms#multi-criteria-search"},"a pesquisa multicrit\xe9rio")," eu seus modelos."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"A pesquisa multicrit\xe9rio \xe9 ativada como padr\xe3o em todos os modelos gerados pelo editor m\xf3vel."))),(0,a.kt)("h2",{id:"template-svg-file"},"Template svg file"),(0,a.kt)("p",null,"Para ativar esta propriedade em seus pr\xf3prios modelos, precisa modificar as linhas abaixo em seu arquivo template.svg de"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>\n\n')),(0,a.kt)("p",null,"para:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<rect id="search" class="droppable field optional multi-criteria" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="searchableField"/>\n\n')),(0,a.kt)("p",null,"E pronto! A classe \xe9 a \xfanica coisa que precisa modificar para a pesquisa multicrit\xe9rio ficar ativa."),(0,a.kt)("h2",{id:"editor-de-projeto"},"Editor de Projeto"),(0,a.kt)("p",null,"A seguir, pode ir para o editor de projeto e soltar v\xe1rios campos na \xe1rea de pesquisa de formul\xe1rio lista."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Multi-criteria search in the project editor",src:r(32251).Z,width:"567",height:"497"})),(0,a.kt)("p",null,"Clique no bot\xe3o de eliminar campo de pesquisa para modificar a lista de campos associados."),(0,a.kt)("p",null,"Um menu vai aparecer que permite que ",(0,a.kt)("strong",{parentName:"p"},"remova campos especificos")," ou ",(0,a.kt)("strong",{parentName:"p"},"remova todos os campos"),", dependendo de que crit\xe9rios deseja basear sua pesquisa."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Modify Multi-criteria search fields",src:r(80844).Z,width:"567",height:"497"})),(0,a.kt)("p",null,"Parab\xe9ns! Agora pode basear suas pesquisas em m\xfaltiplos campos em seu app m\xf3vel!"))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?i.createElement(f,s(s({ref:t},p),{},{components:r})):i.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n.mdxType="string"==typeof e?e:a,s[1]=n;for(var c=2;c<o;c++)s[c]=r[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},80844:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/multi-criteria-search-forms-section-remove-fields-2f26827d96d7fff88d89c5e5b94d4817.png"},32251:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/multi-criteria-search-forms-section-7f228461bafbe978f0bfd65a9c697bb2.png"}}]);