(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2456],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72842:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),a=["components"],l={id:"build-panel",title:"Build Panel"},u=void 0,p={unversionedId:"project-definition/build-panel",id:"project-definition/build-panel",isDocsHomePage:!1,title:"Build Panel",description:"Vous pouvez tester votre application \xe0 tout moment lors de la phase de d\xe9veloppement, gr\xe2ce au Simulateur situ\xe9 dans l'onglet GENERATION de l'\xe9diteur de projet.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/project-definition/build-panel.md",sourceDirName:"project-definition",slug:"/project-definition/build-panel",permalink:"/go-mobile/fr/docs/next/project-definition/build-panel",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/project-definition/build-panel.md",version:"current",frontMatter:{id:"build-panel",title:"Build Panel"},sidebar:"docs",previous:{title:"Publishing",permalink:"/go-mobile/fr/docs/next/project-definition/publishing"},next:{title:"Authentification",permalink:"/go-mobile/fr/docs/next/special-features/authentication"}},s=[{value:"Utilisation du simulateur",id:"utilisation-du-simulateur",children:[]}],c={toc:s};function d(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Vous pouvez tester votre application \xe0 tout moment lors de la phase de d\xe9veloppement, gr\xe2ce au Simulateur situ\xe9 dans l'onglet GENERATION de l'\xe9diteur de projet."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"BuildTab",src:n(28509).Z})),(0,o.kt)("p",null,"Voici la description des options de l'onglet G\xe9n\xe9ration :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Cr\xe9er & ex\xe9cuter :")," Lance l'application dans le simulateur.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"iPhone X :")," Le simulateur par d\xe9faut. En cliquant ici, vous afficherez une liste d\xe9roulante des simulateurs disponibles.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Projet :")," Affiche une liste d\xe9roulante vous permettant d'",(0,o.kt)("strong",{parentName:"p"},"ouvrir le dossier du projet")," ou le ",(0,o.kt)("strong",{parentName:"p"},"dossier produit"),", ou ",(0,o.kt)("strong",{parentName:"p"},"d'ouvrir le produit avec Xcode"),". This dropdown list is useful for ",(0,o.kt)("a",{parentName:"p",href:"../debug/from-project-editor"},"debug operations"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Install:")," Installs the application on a connected device (see ",(0,o.kt)("a",{parentName:"p",href:"../deployment/testing-on-your-device"},"Installing on your iOS device"),")."))),(0,o.kt)("h2",{id:"utilisation-du-simulateur"},"Utilisation du simulateur"),(0,o.kt)("p",null,"You can use the Simulator by following these steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"S\xe9lectionnez votre appareil.")),(0,o.kt)("p",null,"In the BUILD tab of  the Project Editor, select an iOS or Android device to use for running your app."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Device selection",src:n(54669).Z})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Cliquez sur le bouton ",(0,o.kt)("strong",{parentName:"li"},"Cr\xe9er & ex\xe9cuter"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Build and Run",src:n(32925).Z})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Testez votre application.")),(0,o.kt)("p",null,"Testez la navigation entre les formulaires Liste et les formulaires d\xe9taill\xe9s dans votre application."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Test in Simulator",src:n(65450).Z})))}d.isMDXComponent=!0},28509:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Build-Tab-4D-for-iOS-75784fd6ecd2cda640e5629ade3a2b62.png"},32925:function(e,t,n){"use strict";t.Z=n.p+"assets/images/build-and-run-4D-for-iOS-ed4ad9b8bfcf45c9bdea9d1e7fd5583f.png"},54669:function(e,t,n){"use strict";t.Z=n.p+"assets/images/device-selection-4D-for-ios-4a18a747115b7bbf07096323fb4ec7d0.png"},65450:function(e,t,n){"use strict";t.Z=n.p+"assets/images/simulator-forms-4D-for-iOS-8f4d554c217379e06138adf23e5cc938.png"}}]);