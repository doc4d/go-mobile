"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3724],{91537:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={id:"user-information-query",title:"Filtre de recherche utilisateur"},o=void 0,l={unversionedId:"tutorials/filter-queries/user-information-query",id:"version-19-R5/tutorials/filter-queries/user-information-query",title:"Filtre de recherche utilisateur",description:"Nous allons filtrer maintenant le contenu de notre application en fonction de l'e-mail de connexion du charg\xe9 de client\xe8le (information utilisateur) :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R5/tutorials/filter-queries/user-information-query.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/user-information-query",permalink:"/fr/19-R5/tutorials/filter-queries/user-information-query",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/filter-queries/user-information-query.md",tags:[],version:"19-R5",frontMatter:{id:"user-information-query",title:"Filtre de recherche utilisateur"},sidebar:"tutorials",previous:{title:"Define a Filter Query",permalink:"/fr/19-R5/tutorials/filter-queries/define-filter-query"},next:{title:"Prise en main",permalink:"/fr/19-R5/tutorials/actions/getting-started"}},s={},u=[],c={toc:u};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Nous allons filtrer maintenant le contenu de notre application en fonction de l'e-mail de connexion du charg\xe9 de client\xe8le (information utilisateur) :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Acc\xe9dez \xe0 la ",(0,i.kt)("strong",{parentName:"li"},'section "Donn\xe9es"'),"."),(0,i.kt)("li",{parentName:"ul"},"Faites un clic droit dans le champ ",(0,i.kt)("strong",{parentName:"li"},"Filtre de recherche")," pour faire appara\xeetre les ",(0,i.kt)("strong",{parentName:"li"},"boutons Champs, Comparateurs et Op\xe9rateurs"),"."),(0,i.kt)("li",{parentName:"ul"},"Cliquez sur le bouton ",(0,i.kt)("strong",{parentName:"li"},"Operators")," et s\xe9lectionnez ",(0,i.kt)("strong",{parentName:"li"},"AND"),"."),(0,i.kt)("li",{parentName:"ul"},"D\xe9finissez maintenant les informations utilisateur (",(0,i.kt)("strong",{parentName:"li"},": email"),") que vous souhaitez obtenir \xe0 partir de la m\xe9thode de base de donn\xe9es."),(0,i.kt)("li",{parentName:"ul"},"Souvenez-vous de valider la recherche en cliquant sur le bouton ",(0,i.kt)("strong",{parentName:"li"},"Valider"),". Sinon, vous ne pourrez plus cr\xe9er votre application.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Filtre de recherche utilisateur",src:r(65729).Z,width:"2164",height:"1988"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},"Status = 'In Progress' & manager.Email = :email \n")),(0,i.kt)("p",null,"La recherche permettra de filtrer les donn\xe9es en fonction du statut ",(0,i.kt)("strong",{parentName:"p"},"In Progress")," ET de ",(0,i.kt)("strong",{parentName:"p"},"l'e-mail du charg\xe9 de client\xe8le")," (accessible depuis la table AccountManager gr\xe2ce au lien ",(0,i.kt)("em",{parentName:"p"},"N vers 1")," qui figure dans le nom du charg\xe9 de client\xe8le)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},"user icon")," is displayed on the right of each table when a user information filter is applied to it."),(0,i.kt)("li",{parentName:"ul"},"As soon as a query is based on user information and validated, you need to edit the ",(0,i.kt)("strong",{parentName:"li"},"Mobile app authentication method"),". To do so, right-click on the ",(0,i.kt)("strong",{parentName:"li"},"Edit authentication method")," button to open the database method edition window."))),(0,i.kt)("p",null,"Ajoutez la ligne suivante dans la m\xe9thode de base de donn\xe9es\xa0:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'$response.userInfo:=New object("email";$request.email)\n')),(0,i.kt)("p",null,"Cela permettra de r\xe9cup\xe9rer l\u2019adresse mail de connexion du charg\xe9 de client\xe8le et d'afficher les donn\xe9es selon ce crit\xe8re."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Filtre de recherche utilisateur",src:r(96667).Z,width:"1836",height:"1534"})),(0,i.kt)("p",null,"Ainsi, si vous g\xe9n\xe9rez votre application et que vous entrez \xab\xa0",(0,i.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),"\xa0\xbb en tant qu'e-mail de connexion, vous trouverez tous les contrats ",(0,i.kt)("em",{parentName:"p"},'"In progress"')," de Michelle Simpson."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Final result",src:r(2512).Z,width:"1559",height:"907"})))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96667:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/database-method-user-information-query-e3ed77a2f2afd667702088c08f76a1ce.png"},2512:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/restricted-queries-final-result-443b634d42c5ef40c3d6c42d5358884c.png"},65729:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/user-information-query-2c1db26ac716f0a8504a2b25d2c870ac.png"}}]);