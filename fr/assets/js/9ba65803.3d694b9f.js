(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8203],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?o.createElement(m,a(a({ref:t},l),{},{components:r})):o.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41310:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var o=r(22122),n=r(19756),i=(r(67294),r(3905)),a=["components"],c={id:"4d-for-ios-project-organization",title:"Organiser un projet 4D for iOS"},s=void 0,u={unversionedId:"tutorials/customizing-with-xcode/4d-for-ios-project-organization",id:"version-19-R2/tutorials/customizing-with-xcode/4d-for-ios-project-organization",isDocsHomePage:!1,title:"Organiser un projet 4D for iOS",description:"Acc\xe9dez aux Sources \xe0 partir de l'onglet Navigation.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R2/tutorials/customizing-with-xcode/4d-for-ios-project-organization.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/4d-for-ios-project-organization",permalink:"/go-mobile/fr/docs/19-R2/tutorials/customizing-with-xcode/4d-for-ios-project-organization",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/customizing-with-xcode/4d-for-ios-project-organization.md",version:"19-R2",frontMatter:{id:"4d-for-ios-project-organization",title:"Organiser un projet 4D for iOS"},sidebar:"version-19-R2/tutorials",previous:{title:"Pr\xe9sentation de Xcode",permalink:"/go-mobile/fr/docs/19-R2/tutorials/customizing-with-xcode/xcode-overview"},next:{title:"Personnaliser son application 4D for iOS",permalink:"/go-mobile/fr/docs/19-R2/tutorials/customizing-with-xcode/customize-your-ios-app"}},l=[{value:"Le fichier Swift - peut \xeatre utilis\xe9 pour ajouter du code personnalis\xe9.",id:"le-fichier-swift---peut-\xeatre-utilis\xe9-pour-ajouter-du-code-personnalis\xe9",children:[]},{value:"Le fichier Storyboard - permet de personnaliser la conception de votre application.",id:"le-fichier-storyboard---permet-de-personnaliser-la-conception-de-votre-application",children:[]}],p={toc:l};function d(e){var t=e.components,c=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Acc\xe9dez aux Sources \xe0 partir de l'onglet Navigation."),(0,i.kt)("p",null,"Vous trouverez ici les dossiers Structure et Formulaires. Ils contiennent tous les fichiers n\xe9cessaires \xe0 la structure et aux formulaires de votre base de donn\xe9es, notamment :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Launch screen (\xe9cran de lancement) - appara\xeet lorsque l\u2019application est lanc\xe9e."),(0,i.kt)("li",{parentName:"ul"},"Login screen (\xe9cran de connexion) - s\u2019affiche lorsque l\u2019authentification est activ\xe9e."),(0,i.kt)("li",{parentName:"ul"},'Settings screen (\xe9cran de param\xe8tres) - inclut les boutons "reload" et "logout".'),(0,i.kt)("li",{parentName:"ul"},"Toutes les tables publi\xe9es - fichiers correspondant aux donn\xe9es autoris\xe9es.")),(0,i.kt)("p",null,"En r\xe8gle g\xe9n\xe9rale, vous trouverez un fichier Swift et un fichier Storyboard. Ces fichiers sont d\xe9crits ci-dessous."),(0,i.kt)("h3",{id:"le-fichier-swift---peut-\xeatre-utilis\xe9-pour-ajouter-du-code-personnalis\xe9"},"Le fichier Swift - peut \xeatre utilis\xe9 pour ajouter du code personnalis\xe9."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Swift file",src:r(97655).Z})),(0,i.kt)("h3",{id:"le-fichier-storyboard---permet-de-personnaliser-la-conception-de-votre-application"},"Le fichier Storyboard - permet de personnaliser la conception de votre application."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Storyboard file",src:r(1312).Z})),(0,i.kt)("p",null,"Voyons ensuite comment personnaliser la vue d\xe9taill\xe9e de l'application Contacts\xa0!"))}d.isMDXComponent=!0},1312:function(e,t,r){"use strict";t.Z=r.p+"assets/images/storyboard-file-Xcode-4D-for-iOS-6610533844b748b97b194d879eb81028.png"},97655:function(e,t,r){"use strict";t.Z=r.p+"assets/images/swift-file-Xcode-4D-for-iOS-9b0b30523c9e70346ddeadf971f64a15.png"}}]);