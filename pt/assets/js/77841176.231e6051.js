(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5010],{3905:function(e,o,r){"use strict";r.d(o,{Zo:function(){return p},kt:function(){return f}});var t=r(67294);function i(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function a(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function n(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?a(Object(r),!0).forEach((function(o){i(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function s(e,o){if(null==e)return{};var r,t,i=function(e,o){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||(i[r]=e[r]);return i}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),c=function(e){var o=t.useContext(u),r=o;return e&&(r="function"==typeof e?e(o):n(n({},o),e)),r},p=function(e){var o=c(e.components);return t.createElement(u.Provider,{value:o},e.children)},l={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},d=t.forwardRef((function(e,o){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||a;return r?t.createElement(m,n(n({ref:o},p),{},{components:r})):t.createElement(m,n({ref:o},p))}));function f(e,o){var r=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=d;var s={};for(var u in o)hasOwnProperty.call(o,u)&&(s[u]=o[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var c=2;c<a;c++)n[c]=r[c];return t.createElement.apply(null,n)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95220:function(e,o,r){"use strict";r.r(o),r.d(o,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var t=r(22122),i=r(19756),a=(r(67294),r(3905)),n=["components"],s={id:"4d-for-ios-project-organization",title:"4D for iOS project organization"},u=void 0,c={unversionedId:"tutorials/customizing-with-xcode/4d-for-ios-project-organization",id:"tutorials/customizing-with-xcode/4d-for-ios-project-organization",isDocsHomePage:!1,title:"4D for iOS project organization",description:"A partir da guia de Navega\xe7\xe3o, v\xe1 para Fontes (sources).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/tutorials/customizing-with-xcode/4d-for-ios-project-organization.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/4d-for-ios-project-organization",permalink:"/go-mobile/pt/docs/tutorials/customizing-with-xcode/4d-for-ios-project-organization",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/customizing-with-xcode/4d-for-ios-project-organization.md",version:"current",frontMatter:{id:"4d-for-ios-project-organization",title:"4D for iOS project organization"},sidebar:"tutorials",previous:{title:"Apresenta\xe7\xe3o do Xcode",permalink:"/go-mobile/pt/docs/tutorials/customizing-with-xcode/xcode-overview"},next:{title:"Personalizar seu app 4D for iOS",permalink:"/go-mobile/pt/docs/tutorials/customizing-with-xcode/customize-your-ios-app"}},p=[{value:"Um arquivo Swift - o qual pode ser usado para adicionar um c\xf3digo personalizado.",id:"um-arquivo-swift---o-qual-pode-ser-usado-para-adicionar-um-c\xf3digo-personalizado",children:[]},{value:"Arquivo de storyboard - permite personalizar o seu projeto de app.",id:"arquivo-de-storyboard---permite-personalizar-o-seu-projeto-de-app",children:[]}],l={toc:p};function d(e){var o=e.components,s=(0,i.Z)(e,n);return(0,a.kt)("wrapper",(0,t.Z)({},l,s,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A partir da guia de Navega\xe7\xe3o, v\xe1 para Fontes (sources)."),(0,a.kt)("p",null,"Aqui voc\xea vai encontrar as pastas de estrutura e formul\xe1rios. Eles cont\xeam todos os arquivos para seu banco de dados estruturas e formul\xe1rios definidos, incluindo:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tela de lan\xe7amento - aparece quando o aplicativo \xe9 iniciado."),(0,a.kt)("li",{parentName:"ul"},"Tela de login - aparece quando a autentica\xe7\xe3o \xe9 ativada."),(0,a.kt)("li",{parentName:"ul"},"Tela de configura\xe7\xf5es - inclui os bot\xf5es de recarregar e logout."),(0,a.kt)("li",{parentName:"ul"},"Todas as tabelas publicadas - arquivos correspondentes aos dados autorizados.")),(0,a.kt)("p",null,"Voc\xea vai encontrar um arquivo Swift e um arquivo Storyboard. Estes arquivos est\xe3o descritos abaixo."),(0,a.kt)("h3",{id:"um-arquivo-swift---o-qual-pode-ser-usado-para-adicionar-um-c\xf3digo-personalizado"},"Um arquivo Swift - o qual pode ser usado para adicionar um c\xf3digo personalizado."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Swift file",src:r(45247).Z})),(0,a.kt)("h3",{id:"arquivo-de-storyboard---permite-personalizar-o-seu-projeto-de-app"},"Arquivo de storyboard - permite personalizar o seu projeto de app."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Archivo Storyboard",src:r(72994).Z})),(0,a.kt)("p",null,"Em seguida, vamos examinar como personalizar a visualiza\xe7\xe3o de detalhes do aplicativo contatos!"))}d.isMDXComponent=!0},72994:function(e,o,r){"use strict";o.Z=r.p+"assets/images/storyboard-file-Xcode-4D-for-iOS-6610533844b748b97b194d879eb81028.png"},45247:function(e,o,r){"use strict";o.Z=r.p+"assets/images/swift-file-Xcode-4D-for-iOS-9b0b30523c9e70346ddeadf971f64a15.png"}}]);