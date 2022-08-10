"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7885],{23527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const i={id:"working-with-xcode",title:"Travailler avec Xcode"},a=void 0,l={unversionedId:"tutorials/customizing-with-xcode/working-with-xcode",id:"version-19-R6/tutorials/customizing-with-xcode/working-with-xcode",title:"Travailler avec Xcode",description:"OBJECTIFS",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/tutorials/customizing-with-xcode/working-with-xcode.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/working-with-xcode",permalink:"/fr/docs/tutorials/customizing-with-xcode/working-with-xcode",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/customizing-with-xcode/working-with-xcode.md",tags:[],version:"19-R6",frontMatter:{id:"working-with-xcode",title:"Travailler avec Xcode"},sidebar:"tutorials",previous:{title:"Relation interactions",permalink:"/fr/docs/tutorials/relations/relation-interactions"},next:{title:"Pr\xe9sentation de Xcode",permalink:"/fr/docs/tutorials/customizing-with-xcode/xcode-overview"}},c={},u=[{value:"Qu&#39;est-ce que Xcode\xa0?",id:"quest-ce-que-xcode",level:2},{value:"Download",id:"download",level:2},{value:"\xc9TAPE 1. Cr\xe9ez votre projet iOS",id:"\xe9tape-1-cr\xe9ez-votre-projet-ios",level:2},{value:"\xc9TAPE 2. G\xe9n\xe9rez votre projet",id:"\xe9tape-2-g\xe9n\xe9rez-votre-projet",level:2},{value:"\xc9TAPE 3. Ouvrez votre projet avec Xcode",id:"\xe9tape-3-ouvrez-votre-projet-avec-xcode",level:2}],p={toc:u};function s(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"OBJECTIFS")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Open a 4D for iOS project from the Project Editor."),(0,n.kt)("li",{parentName:"ul"},"Customize the generated 4D for iOS app."))),(0,n.kt)("p",null,"4D for iOS vous g\xe9n\xe8re une application iOS native modifiable et personnalisable avec Xcode. Jetons un \u0153il au processus\xa0!"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTE")),(0,n.kt)("p",{parentName:"blockquote"},"If you customize your project on Xcode and rebuild it from the Project Editor All of your modifications will be lost!")),(0,n.kt)("h2",{id:"quest-ce-que-xcode"},"Qu'est-ce que Xcode\xa0?"),(0,n.kt)("p",null,"Xcode est un environnement de d\xe9veloppement int\xe9gr\xe9 (IDE) et un ensemble d\u2019outils de d\xe9veloppement pour macOS qui permet de cr\xe9er des applications Mac, iPod, iPhone et iPad."),(0,n.kt)("h2",{id:"download"},"Download"),(0,n.kt)("p",null,"Pour t\xe9l\xe9charger la derni\xe8re version de Xcode, rendez-vous dans l\u2019App Store."),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"macappstore://itunes.apple.com/app/id497799835?mt=12"},"View in Mac App Store ")),(0,n.kt)("p",null,"Les d\xe9veloppeurs enregistr\xe9s peuvent t\xe9l\xe9charger des aper\xe7u des sorties ainsi que les versions ant\xe9rieures de la suite 4D via le site Web d'Apple Developer."),(0,n.kt)("p",null,"We'll use the ",(0,n.kt)("a",{parentName:"p",href:"../create-your-first-app"},"contact application")," we created."),(0,n.kt)("p",null,"Download the Starter project:"),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"#"},"Download")),(0,n.kt)("h2",{id:"\xe9tape-1-cr\xe9ez-votre-projet-ios"},"\xc9TAPE 1. Cr\xe9ez votre projet iOS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Si vous n\u2019avez pas encore cr\xe9\xe9 votre projet, passez \xe0 l\u2019\xe9tape 2."),(0,n.kt)("li",{parentName:"ul"},"Si vous avez d\xe9j\xe0 cr\xe9\xe9 votre projet, passez \xe0 l\u2019\xe9tape 3.")),(0,n.kt)("h2",{id:"\xe9tape-2-g\xe9n\xe9rez-votre-projet"},"\xc9TAPE 2. G\xe9n\xe9rez votre projet"),(0,n.kt)("p",null,"From the Project Editor BUILD tab:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'S\xe9lectionnez un appareil \xe0 utiliser en tant que Simulateur en cliquant sur le bouton "appareil".'),(0,n.kt)("li",{parentName:"ul"},"Cliquez sur le bouton ",(0,n.kt)("strong",{parentName:"li"},"Cr\xe9er & ex\xe9cuter"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Build and Run",src:r(40085).Z,width:"768",height:"739"})),(0,n.kt)("h2",{id:"\xe9tape-3-ouvrez-votre-projet-avec-xcode"},"\xc9TAPE 3. Ouvrez votre projet avec Xcode"),(0,n.kt)("p",null,"From the Project Editor BUILD tab:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cliquez sur Projet > Ouvrir le produit avec Xcode")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Ouvrez votre projet avec Xcode",src:r(41246).Z,width:"1033",height:"994"})),(0,n.kt)("p",null,"Now you're ready to start working on your 4D for iOS project in Xcode."))}s.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),v=n,m=d["".concat(c,".").concat(v)]||d[v]||s[v]||i;return r?o.createElement(m,a(a({ref:t},p),{},{components:r})):o.createElement(m,a({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41246:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-6fbba90ad139fdb4bc2e436c061c0106.png"},40085:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/build-and-run-dfc802f164eab0d00808ff57bd0e3c3c.png"}}]);