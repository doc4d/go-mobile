"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5316],{72630:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={id:"filter-query-introduction",title:"Filter queries"},o=void 0,l={unversionedId:"tutorials/filter-queries/filter-query-introduction",id:"tutorials/filter-queries/filter-query-introduction",title:"Filter queries",description:"In this tutorial, we'll show how to create filter queries to display filtered content in the generated mobile app.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/filter-queries/filter-query-introduction.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/filter-query-introduction",permalink:"/fr/docs/next/tutorials/filter-queries/filter-query-introduction",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/filter-queries/filter-query-introduction.md",tags:[],version:"current",frontMatter:{id:"filter-query-introduction",title:"Filter queries"},sidebar:"tutorials",previous:{title:"Create Kotlin formatter",permalink:"/fr/docs/next/tutorials/data-formatter/create-kotlin-formatter"},next:{title:"Prise en main",permalink:"/fr/docs/next/tutorials/actions/getting-started"}},s={},u=[{value:"T\xe9l\xe9chargez le projet Starter",id:"t\xe9l\xe9chargez-le-projet-starter",level:2},{value:"Define a Filter Query",id:"define-a-filter-query",level:2},{value:"Filtre de recherche utilisateur",id:"filtre-de-recherche-utilisateur",level:2}],p={toc:u};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this tutorial, we'll show how to create ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/next/project-definition/data#filter-queries"},(0,n.kt)("strong",{parentName:"a"},"filter queries"))," to display filtered content in the generated mobile app."),(0,n.kt)("p",null,"Imagine you're an account manager and you want to consult your ",(0,n.kt)("em",{parentName:"p"},"In Progress")," contracts simply by connecting to your app with your email address."),(0,n.kt)("p",null,"First, from the Data section we're going define a ",(0,n.kt)("strong",{parentName:"p"},"basic filter query")," to only display ",(0,n.kt)("em",{parentName:"p"},"In Progress")," contracts. Then we're going to apply a ",(0,n.kt)("strong",{parentName:"p"},"user information-based filter")," which will depend on the account manager's email."),(0,n.kt)("h2",{id:"t\xe9l\xe9chargez-le-projet-starter"},"T\xe9l\xe9chargez le projet Starter"),(0,n.kt)("p",null,"Before we begin, be sure to download the ",(0,n.kt)("strong",{parentName:"p"},"Starter project")," which includes a ",(0,n.kt)("strong",{parentName:"p"},"4DforiOSQueries.4dbase")," file (a demo database with a ready-to-use mobile app project)"),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip"},"Projet Starter")),(0,n.kt)("p",null,"The database includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a ",(0,n.kt)("strong",{parentName:"li"},"CRM table")," with all the data we want to display in the generated iOS app"),(0,n.kt)("li",{parentName:"ul"},"an ",(0,n.kt)("strong",{parentName:"li"},"AccountManager table")," with basic information about the account managers (email and name).")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"CRM database",src:r(88836).Z,width:"2226",height:"1834"})),(0,n.kt)("p",null,"You're now ready to define your first filter query."),(0,n.kt)("p",null,"Open the mobile project by clicking on ",(0,n.kt)("strong",{parentName:"p"},"Open")," > ",(0,n.kt)("strong",{parentName:"p"},"Mobile Project...")," and select ",(0,n.kt)("strong",{parentName:"p"},"CRM app")," > ",(0,n.kt)("strong",{parentName:"p"},"project.4dmobileapp"),"."),(0,n.kt)("h2",{id:"define-a-filter-query"},"Define a Filter Query"),(0,n.kt)("p",null,'For the moment, if you build the Starter project app and enter "',(0,n.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),"\" as the login email (one of the account managers), you'll see ",(0,n.kt)("strong",{parentName:"p"},"all manager contracts and statuses")," (",(0,n.kt)("em",{parentName:"p"},"Closed")," and ",(0,n.kt)("em",{parentName:"p"},"In Progress"),")."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"iOS app without queries",src:r(39647).Z,width:"1559",height:"907"})),(0,n.kt)("p",null,"As we discussed above, we want the account managers to access their ",(0,n.kt)("em",{parentName:"p"},"In Progress")," contracts by logging into their mobile app with their email. Pour ce faire\xa0:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Acc\xe9dez \xe0 la ",(0,n.kt)("strong",{parentName:"li"},'section "Donn\xe9es"')),(0,n.kt)("li",{parentName:"ul"},"Faites un clic droit dans le champ ",(0,n.kt)("strong",{parentName:"li"},"filtre de recherche")," pour faire apparaitre les ",(0,n.kt)("strong",{parentName:"li"},"boutons Champs, Comparateurs et Op\xe9rateurs"),"."),(0,n.kt)("li",{parentName:"ul"},"Cliquez sur le bouton ",(0,n.kt)("strong",{parentName:"li"},"Champs")," et s\xe9lectionnez ",(0,n.kt)("strong",{parentName:"li"},"Status"),"."),(0,n.kt)("li",{parentName:"ul"},"Cliquez sur le bouton ",(0,n.kt)("strong",{parentName:"li"},"Comparateurs")," et s\xe9lectionnez ",(0,n.kt)("strong",{parentName:"li"},"\xc9gal \xe0"),"."),(0,n.kt)("li",{parentName:"ul"},"Si vous souhaitez afficher les contrats ",(0,n.kt)("em",{parentName:"li"},"ouverts"),", tapez ",(0,n.kt)("strong",{parentName:"li"},"In progress")),(0,n.kt)("li",{parentName:"ul"},"N\u2019oubliez pas de valider votre recherche en cliquant sur le bouton ",(0,n.kt)("strong",{parentName:"li"},"Valider"),", sinon vous ne pourrez pas cr\xe9er votre application.")),(0,n.kt)("p",null,"Vous devriez avoir ce r\xe9sultat\xa0:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"CRM database",src:r(45099).Z,width:"2164",height:"1988"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTES")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"filter")," icon is displayed at the right of each table when a basic filter is applied to it."),(0,n.kt)("li",{parentName:"ul"},"For these kinds of filter queries, you can choose to embed data into the app or to load the data after login by checking the ",(0,n.kt)("strong",{parentName:"li"},"Embed data into the built application")," checkbox."),(0,n.kt)("li",{parentName:"ul"},"Size will be calculated at the first build for you to visualize the ",(0,n.kt)("strong",{parentName:"li"},"size of your data"),"."))),(0,n.kt)("p",null,"Si vous g\xe9n\xe9rez votre application et que vous tapez \xab\xa0",(0,n.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),"\xa0\xbb comme \xe9tant l\u2019e-mail de connexion, vous verrez que tous les contrats ",(0,n.kt)("em",{parentName:"p"},"In Progress")," s\u2019affichent dans le simulateur\xa0!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"iOS app with basic query",src:r(40275).Z,width:"1559",height:"907"})),(0,n.kt)("p",null,"Cela ne correspond pas tout \xe0 fait \xe0 ce que nous avions pr\xe9vu ! What we want now is for each account manager to visualize only their own ",(0,n.kt)("em",{parentName:"p"},"In Progress")," contracts, so let's complete our query."),(0,n.kt)("h2",{id:"filtre-de-recherche-utilisateur"},"Filtre de recherche utilisateur"),(0,n.kt)("p",null,"Now let's filter our app content ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/next/project-definition/data#filter-queries-with-user-information"},"depending on a user information"),", in this case, the account manager's login email address."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Acc\xe9dez \xe0 la ",(0,n.kt)("strong",{parentName:"li"},'section "Donn\xe9es"'),"."),(0,n.kt)("li",{parentName:"ul"},"Faites un clic droit dans le champ ",(0,n.kt)("strong",{parentName:"li"},"Filtre de recherche")," pour faire appara\xeetre les ",(0,n.kt)("strong",{parentName:"li"},"boutons Champs, Comparateurs et Op\xe9rateurs"),"."),(0,n.kt)("li",{parentName:"ul"},"Cliquez sur le bouton ",(0,n.kt)("strong",{parentName:"li"},"Operators")," et s\xe9lectionnez ",(0,n.kt)("strong",{parentName:"li"},"AND"),"."),(0,n.kt)("li",{parentName:"ul"},"D\xe9finissez maintenant les informations utilisateur (",(0,n.kt)("strong",{parentName:"li"},": email"),") que vous souhaitez obtenir \xe0 partir de la m\xe9thode de base de donn\xe9es."),(0,n.kt)("li",{parentName:"ul"},"Souvenez-vous de valider la recherche en cliquant sur le bouton ",(0,n.kt)("strong",{parentName:"li"},"Valider"),". Sinon, vous ne pourrez plus cr\xe9er votre application.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Filtre de recherche utilisateur",src:r(1311).Z,width:"2164",height:"1988"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},"Status = 'In Progress' & manager.Email = :email \n")),(0,n.kt)("p",null,"La recherche permettra de filtrer les donn\xe9es en fonction du statut ",(0,n.kt)("strong",{parentName:"p"},"In Progress")," ET de ",(0,n.kt)("strong",{parentName:"p"},"l'e-mail du charg\xe9 de client\xe8le")," (accessible depuis la table AccountManager gr\xe2ce au lien ",(0,n.kt)("em",{parentName:"p"},"N vers 1")," qui figure dans le nom du charg\xe9 de client\xe8le)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTE")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"user icon")," is displayed on the right of each table when a user information filter is applied to it."),(0,n.kt)("li",{parentName:"ul"},"As soon as a query is based on user information and validated, you need to edit the ",(0,n.kt)("a",{parentName:"li",href:"/fr/docs/next/4d/on-mobile-app-authentication"},(0,n.kt)("inlineCode",{parentName:"a"},"On Mobile app authentication method")),". To do so, right-click on the ",(0,n.kt)("strong",{parentName:"li"},"Edit authentication method")," button to open the database method edition window."))),(0,n.kt)("p",null,"Ajoutez la ligne suivante dans la m\xe9thode de base de donn\xe9es\xa0:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},'$response.userInfo:=New object("email";$request.email)\n')),(0,n.kt)("p",null,"Cela permettra de r\xe9cup\xe9rer l\u2019adresse mail de connexion du charg\xe9 de client\xe8le et d'afficher les donn\xe9es selon ce crit\xe8re."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Filtre de recherche utilisateur",src:r(11498).Z,width:"1836",height:"1534"})),(0,n.kt)("p",null,"Ainsi, si vous g\xe9n\xe9rez votre application et que vous entrez \xab\xa0",(0,n.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),"\xa0\xbb en tant qu'e-mail de connexion, vous trouverez tous les contrats ",(0,n.kt)("em",{parentName:"p"},'"In progress"')," de Michelle Simpson."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Final result",src:r(16608).Z,width:"1559",height:"907"})))}c.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88836:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/CRMDatabase-1b6c6c0179884652d0b0bc4fbe7e0041.png"},11498:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/database-method-user-information-query-e3ed77a2f2afd667702088c08f76a1ce.png"},45099:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/filterquery-7902086c2d1e2bfd8c24d1d16e9fb561.png"},39647:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ios-app-without-queries-3893b9ebd1437a06592cc18393a01e1e.png"},16608:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/restricted-queries-final-result-443b634d42c5ef40c3d6c42d5358884c.png"},40275:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/restrited-queries-basic-query-c48a1a721abebefd5a554dcc7c7580d4.png"},1311:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/user-information-query-2c1db26ac716f0a8504a2b25d2c870ac.png"}}]);