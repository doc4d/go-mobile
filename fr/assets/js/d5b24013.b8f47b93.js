"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4554],{16551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={id:"publishing",title:"Publishing"},o=void 0,l={unversionedId:"project-definition/publishing",id:"project-definition/publishing",title:"Publishing",description:"Cette page vous donne acc\xe8s aux param\xe8tres de publication de votre application et aux fonctionnalit\xe9s mobiles sp\xe9ciales :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/project-definition/publishing.md",sourceDirName:"project-definition",slug:"/project-definition/publishing",permalink:"/go-mobile/fr/docs/next/project-definition/publishing",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/project-definition/publishing.md",tags:[],version:"current",frontMatter:{id:"publishing",title:"Publishing"},sidebar:"docs",previous:{title:"Forms",permalink:"/go-mobile/fr/docs/next/project-definition/forms"},next:{title:"Build Panel",permalink:"/go-mobile/fr/docs/next/project-definition/build-panel"}},s={},p=[{value:"URL de production",id:"url-de-production",level:2},{value:"Param\xe8tres du serveur Web",id:"param\xe8tres-du-serveur-web",level:2},{value:"Aper\xe7u sur l&#39;appareil",id:"aper\xe7u-sur-lappareil",level:2},{value:"\xc9cran de param\xe8tres",id:"\xe9cran-de-param\xe8tres",level:3},{value:"Modifier l&#39;url distant",id:"modifier-lurl-distant",level:3},{value:"Fonctionnalit\xe9s",id:"fonctionnalit\xe9s",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cette page vous donne acc\xe8s aux param\xe8tres de publication de votre application et aux fonctionnalit\xe9s mobiles sp\xe9ciales :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Publishing section",src:n(74151).Z,width:"985",height:"505"})),(0,i.kt)("h2",{id:"url-de-production"},"URL de production"),(0,i.kt)("p",null,"URL du serveur Web sur lequel les applications mobiles se connecteront pour lire et \xe9crire des donn\xe9es, dans un contexte de production. Vous pouvez saisir n'importe quelle adresse valide, par exemple :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://my.wesbsite.com\nhttp://my.website.com:9200\nwww.website.com/mobile\n")),(0,i.kt)("p",null,"Pendant la phase de d\xe9veloppement, vous pouvez laisser cette zone vide et d\xe9finir la ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/next/project-definition/data"},"Source de donn\xe9es")," comme ",(0,i.kt)("strong",{parentName:"p"},"Fichier de donn\xe9es courant"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"L'utilisateur pourra ",(0,i.kt)("a",{parentName:"p",href:"#modify-remote-url"},"modifier l'url du serveur ")," \xe0 partir de l'appareil mobile.")),(0,i.kt)("h2",{id:"param\xe8tres-du-serveur-web"},"Param\xe8tres du serveur Web"),(0,i.kt)("p",null,"Le bouton ",(0,i.kt)("strong",{parentName:"p"},"\xc9diter...")," ouvre la page ",(0,i.kt)("strong",{parentName:"p"},"Web")," de la bo\xeete de dialogue des param\xe8tres 4D. Utilisez cette page pour d\xe9finir les param\xe8tres suivants \xe0 int\xe9grer dans l'application mobile :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"L'option ",(0,i.kt)("strong",{parentName:"li"},"Activer HTTP")," et ",(0,i.kt)("strong",{parentName:"li"},"port HTTP"),"."),(0,i.kt)("li",{parentName:"ul"},"L'option ",(0,i.kt)("strong",{parentName:"li"},"Activez HTTPS")," et ",(0,i.kt)("strong",{parentName:"li"},"port HTTP"),".")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Si HTTP et HTTPS sont tous les deux activ\xe9s, HTTP est utilis\xe9.")),(0,i.kt)("p",null,"L'activation du port HTTPS n\xe9cessite que vous ayez install\xe9 un ",(0,i.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/Admin/tls.html"},"certificat TLS")," valide. Vous pouvez cr\xe9er des certificats d'essai avec 4D."),(0,i.kt)("p",null,"Ces param\xe8tres ne sont pris en compte que si l'",(0,i.kt)("a",{parentName:"p",href:"#production-url"},"URL de production")," est d\xe9finie. Sinon, l'adresse IP locale est utilis\xe9e."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Le simulateur fonctionne toujours localement (127.0.0.1 ou localhost).")),(0,i.kt)("h2",{id:"aper\xe7u-sur-lappareil"},"Aper\xe7u sur l'appareil"),(0,i.kt)("h3",{id:"\xe9cran-de-param\xe8tres"},"\xc9cran de param\xe8tres"),(0,i.kt)("p",null,'Un \xe9cran de param\xe8tres est disponible dans la barre d\u2019onglets. Vous pouvez \xe9galement le trouver sous l\u2019onglet "More" si n\xe9cessaire (',(0,i.kt)("em",{parentName:"p"},"\xe0 savoir"),", votre application contient plus de quatre tables)."),(0,i.kt)("p",null,"L'\xe9cran Param\xe8tres vous permet de :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consultez votre URL distante ainsi que son \xe9tat actuel"),(0,i.kt)("li",{parentName:"ul"},"De vous d\xe9connecter (si vous \xe9tiez connect\xe9 en tant qu'utilisateur autoris\xe9)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Login &amp; Settings screen",src:n(70912).Z,width:"3400",height:"2131"})),(0,i.kt)("h3",{id:"modifier-lurl-distant"},"Modifier l'url distant"),(0,i.kt)("p",null,"Vous pouvez facilement mettre \xe0 jour votre URL distante \xe0 partir des Param\xe8tres de l'iPhone :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Acc\xe9dez aux param\xe8tres de votre iPhone"),(0,i.kt)("li",{parentName:"ul"},"S\xe9lectionnez l'application pour laquelle vous souhaitez que l'URL distante soit mise \xe0 jour"),(0,i.kt)("li",{parentName:"ul"},"Activez l'option \"R\xe9initialiser l'adresse du serveur\"")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Reset remote url",src:n(7373).Z,width:"3400",height:"2131"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Puis red\xe9marrez votre application pour r\xe9initialiser l'adresse du serveur"),(0,i.kt)("li",{parentName:"ul"},"Enfin, d\xe9finissez la nouvelle URL distante")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Update remote url",src:n(30299).Z,width:"3400",height:"2131"})),(0,i.kt)("h2",{id:"fonctionnalit\xe9s"},"Fonctionnalit\xe9s"),(0,i.kt)("p",null,"Cette zone vous permet de s\xe9lectionner et de configurer plusieurs fonctionnalit\xe9s sp\xe9ciales de l'application mobile. Ces fonctionnalit\xe9s sont document\xe9es dans des sections d\xe9di\xe9es :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/go-mobile/fr/docs/next/special-features/authentication"},"Authentification")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/go-mobile/fr/docs/next/special-features/push-notification"},"Notifications Push")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../special-features/deep-linking"},"Lien profond"))))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70912:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Login-Settings-screen-Publishing-section-4D-for-iOS-be241cfa7f67de597f8249586991a3ac.png"},7373:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Reset-remote-url-883bc554af33a07cad5c1d9b085528f6.png"},30299:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Update-remote-url-75a80128450b5e1cced832b75d2240fd.png"},74151:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/publishing-5ac50899ae51899e2c4bb7f7b24829e0.png"}}]);