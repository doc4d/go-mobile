(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[740],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76572:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],s={id:"getting-started",title:"Getting started"},c=void 0,u={unversionedId:"tutorials/actions/getting-started",id:"tutorials/actions/getting-started",isDocsHomePage:!1,title:"Getting started",description:"OBJETIVOS",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/tutorials/actions/getting-started.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/getting-started",permalink:"/go-mobile/pt/docs/tutorials/actions/getting-started",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/actions/getting-started.md",version:"current",frontMatter:{id:"getting-started",title:"Getting started"},sidebar:"tutorials",previous:{title:"Filtro de pesquisa usu\xe1rio",permalink:"/go-mobile/pt/docs/tutorials/filter-queries/user-information-query"},next:{title:"Definir sua primeira a\xe7\xe3o",permalink:"/go-mobile/pt/docs/tutorials/actions/define-first-action"}},l=[],p={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,a.kt)("p",{parentName:"blockquote"},"Use actions in the generated iOS app.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"PR\xc9-REQUISITOS")),(0,a.kt)("p",{parentName:"blockquote"},"Clique em",(0,a.kt)("inlineCode",{parentName:"p"},"[here](prerequisites.html)")," para ver o que necessita para  come\xe7ar")),(0,a.kt)("p",null,"In 4D v17 R5, you can ",(0,a.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/tutorials/actions/define-first-action"},"define actions")," directly from the Project Editor and execute 4D code from your generated iOS app!"),(0,a.kt)("p",null,"A partir daqui, pode construir seu app do Editor de Projeto usando a\xe7\xf5es, pode decidir usar:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Modelos 4D for iOS")," da se\xe7\xe3o Formul\xe1rios. Neste caso a\xe7\xf5es j\xe1 s\xe3o inclu\xeddas You just need to ",(0,a.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/tutorials/actions/define-first-action"},"define actions")," in the Actions section and create appropriate methods in 4D.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Seus modelos personalizados")," que criou Um passo importante adicional \xe9 necess\xe1rio para que suas a\xe7\xf5es funcionem na aplica\xe7\xe3o iOS gerada Indeed, it is necessary to manually ",(0,a.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/tutorials/actions/adding-actions-template"},"include action Tags")," in your Listform and Detailforms templates."))),(0,a.kt)("p",null,"Agora \xe9 o momento de desfrutar criando uma aplica\xe7\xe3o ",(0,a.kt)("strong",{parentName:"p"},"Tasks"),", utilizando a\xe7\xf5es de 4D for iOS."))}d.isMDXComponent=!0}}]);