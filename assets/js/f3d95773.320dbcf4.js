"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2315],{68402:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={id:"filter-query-introduction",title:"Filter queries"},o=void 0,l={unversionedId:"tutorials/filter-queries/filter-query-introduction",id:"version-19-R6/tutorials/filter-queries/filter-query-introduction",title:"Filter queries",description:"In this tutorial, we'll show how to create filter queries to display filtered content in the generated mobile app.",source:"@site/versioned_docs/version-19-R6/tutorials/filter-queries/filter-query-introduction.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/filter-query-introduction",permalink:"/go-mobile/docs/19-R6/tutorials/filter-queries/filter-query-introduction",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/filter-queries/filter-query-introduction.md",tags:[],version:"19-R6",frontMatter:{id:"filter-query-introduction",title:"Filter queries"},sidebar:"tutorials",previous:{title:"Create Kotlin formatter",permalink:"/go-mobile/docs/19-R6/tutorials/data-formatter/create-kotlin-formatter"},next:{title:"Getting started",permalink:"/go-mobile/docs/19-R6/tutorials/actions/getting-started"}},s={},p=[{value:"Download the Starter project",id:"download-the-starter-project",level:2},{value:"Define a Filter Query",id:"define-a-filter-query",level:2},{value:"User information query",id:"user-information-query",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this tutorial, we'll show how to create ",(0,n.kt)("a",{parentName:"p",href:"/go-mobile/docs/19-R6/project-definition/data#filter-queries"},(0,n.kt)("strong",{parentName:"a"},"filter queries"))," to display filtered content in the generated mobile app."),(0,n.kt)("p",null,"Imagine you're an account manager and you want to consult your ",(0,n.kt)("em",{parentName:"p"},"In Progress")," contracts simply by connecting to your app with your email address."),(0,n.kt)("p",null,"First, from the Data section we're going define a ",(0,n.kt)("strong",{parentName:"p"},"basic filter query")," to only display ",(0,n.kt)("em",{parentName:"p"},"In Progress")," contracts. Then we're going to apply a ",(0,n.kt)("strong",{parentName:"p"},"user information-based filter")," which will depend on the account manager's email."),(0,n.kt)("h2",{id:"download-the-starter-project"},"Download the Starter project"),(0,n.kt)("p",null,"Before we begin, be sure to download the ",(0,n.kt)("strong",{parentName:"p"},"Starter project")," which includes a ",(0,n.kt)("strong",{parentName:"p"},"4DforiOSQueries.4dbase")," file (a demo database with a ready-to-use mobile app project)"),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip"},"Starter project")),(0,n.kt)("p",null,"The database includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a ",(0,n.kt)("strong",{parentName:"li"},"CRM table")," with all the data we want to display in the generated iOS app"),(0,n.kt)("li",{parentName:"ul"},"an ",(0,n.kt)("strong",{parentName:"li"},"AccountManager table")," with basic information about the account managers (email and name).")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"CRM database",src:a(11075).Z,width:"2226",height:"1834"})),(0,n.kt)("p",null,"You're now ready to define your first filter query. "),(0,n.kt)("p",null,"Open the mobile project by clicking on ",(0,n.kt)("strong",{parentName:"p"},"Open")," > ",(0,n.kt)("strong",{parentName:"p"},"Mobile Project...")," and select ",(0,n.kt)("strong",{parentName:"p"},"CRM app")," > ",(0,n.kt)("strong",{parentName:"p"},"project.4dmobileapp"),"."),(0,n.kt)("h2",{id:"define-a-filter-query"},"Define a Filter Query"),(0,n.kt)("p",null,'For the moment, if you build the Starter project app and enter "',(0,n.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),"\" as the login email (one of the account managers), you'll see ",(0,n.kt)("strong",{parentName:"p"},"all manager contracts and statuses")," (",(0,n.kt)("em",{parentName:"p"},"Closed")," and ",(0,n.kt)("em",{parentName:"p"},"In Progress"),")."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"iOS app without queries",src:a(43117).Z,width:"1559",height:"907"})),(0,n.kt)("p",null,"As we discussed above, we want the account managers to access their ",(0,n.kt)("em",{parentName:"p"},"In Progress")," contracts by logging into their mobile app with their email. To do this:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Data section")),(0,n.kt)("li",{parentName:"ul"},"Right-click in the ",(0,n.kt)("strong",{parentName:"li"},"Filter query")," field to make the ",(0,n.kt)("strong",{parentName:"li"},"Field, Comparators and Operators buttons")," appear."),(0,n.kt)("li",{parentName:"ul"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Fields")," button and select ",(0,n.kt)("strong",{parentName:"li"},"Status"),"."),(0,n.kt)("li",{parentName:"ul"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Comparators")," button and select ",(0,n.kt)("strong",{parentName:"li"},"Equal to"),"."),(0,n.kt)("li",{parentName:"ul"},"Because you want to display ",(0,n.kt)("em",{parentName:"li"},"open")," contracts, enter ",(0,n.kt)("strong",{parentName:"li"},"In progress")),(0,n.kt)("li",{parentName:"ul"},"Remember to validate your query by clicking on the ",(0,n.kt)("strong",{parentName:"li"},"Validate")," button, otherwise you won't be able to build your app.")),(0,n.kt)("p",null,"You should have this result:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"CRM database",src:a(74024).Z,width:"2164",height:"1988"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTES")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"filter")," icon is displayed at the right of each table when a basic filter is applied to it."),(0,n.kt)("li",{parentName:"ul"},"For these kinds of filter queries, you can choose to embed data into the app or to load the data after login by checking the ",(0,n.kt)("strong",{parentName:"li"},"Embed data into the built application")," checkbox."),(0,n.kt)("li",{parentName:"ul"},"Size will be calculated at the first build for you to visualize the ",(0,n.kt)("strong",{parentName:"li"},"size of your data"),"."))),(0,n.kt)("p",null,'If you build your app and enter "',(0,n.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),"\" as the login email, you'll see that all contracts ",(0,n.kt)("em",{parentName:"p"},"In Progress")," are displayed in the Simulator!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"iOS app with basic query",src:a(11230).Z,width:"1559",height:"907"})),(0,n.kt)("p",null,"Not exactly what we expected! What we want now is for each account manager to visualize only their own ",(0,n.kt)("em",{parentName:"p"},"In Progress")," contracts, so let's complete our query."),(0,n.kt)("h2",{id:"user-information-query"},"User information query"),(0,n.kt)("p",null,"Now let's filter our app content ",(0,n.kt)("a",{parentName:"p",href:"/go-mobile/docs/19-R6/project-definition/data#filter-queries-with-user-information"},"depending on a user information"),", in this case, the account manager's login email address. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Data section"),". "),(0,n.kt)("li",{parentName:"ul"},"Right-click in the ",(0,n.kt)("strong",{parentName:"li"},"Filter query")," field to make ",(0,n.kt)("strong",{parentName:"li"},"Field, Comparators and Operators buttons")," appear."),(0,n.kt)("li",{parentName:"ul"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Operators")," button and select ",(0,n.kt)("strong",{parentName:"li"},"AND"),"."),(0,n.kt)("li",{parentName:"ul"},"Now define the user information you want to get from the database method, ",(0,n.kt)("strong",{parentName:"li"},":email"),"."),(0,n.kt)("li",{parentName:"ul"},"Remember to validate the query by clicking on the ",(0,n.kt)("strong",{parentName:"li"},"Validate")," button. If not, you won't be able to build your app.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"User information query",src:a(58807).Z,width:"2164",height:"1988"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},"Status = 'In Progress' & manager.Email = :email \n")),(0,n.kt)("p",null,"The query will filter data depending on the ",(0,n.kt)("strong",{parentName:"p"},"In Progress")," status AND the ",(0,n.kt)("strong",{parentName:"p"},"Account manager's email address")," (accessible from the AccountManager table thanks to the ",(0,n.kt)("em",{parentName:"p"},"Many-to-One")," relation on the manager's name)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTE")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"user icon")," is displayed on the right of each table when a user information filter is applied to it."),(0,n.kt)("li",{parentName:"ul"},"As soon as a query is based on user information and validated, you need to edit the ",(0,n.kt)("a",{parentName:"li",href:"/go-mobile/docs/19-R6/4d/on-mobile-app-authentication"},(0,n.kt)("inlineCode",{parentName:"a"},"On Mobile app authentication method")),". To do so, right-click on the ",(0,n.kt)("strong",{parentName:"li"},"Edit authentication method")," button to open the database method edition window."))),(0,n.kt)("p",null,"Add the following line in the database method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},'$response.userInfo:=New object("email";$request.email)\n')),(0,n.kt)("p",null,"This will allow retrieving the manager's login email address and displaying data depending on that criteria."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"User information query",src:a(78624).Z,width:"1836",height:"1534"})),(0,n.kt)("p",null,'Now if you build your app and enter "',(0,n.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),"\" as login email, you'll find all of Michelle Simpson's ",(0,n.kt)("em",{parentName:"p"},'"In progress"')," contracts."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Final result",src:a(35005).Z,width:"1559",height:"907"})))}c.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},11075:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/CRMDatabase-1b6c6c0179884652d0b0bc4fbe7e0041.png"},78624:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/database-method-user-information-query-e3ed77a2f2afd667702088c08f76a1ce.png"},74024:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/filterquery-7902086c2d1e2bfd8c24d1d16e9fb561.png"},43117:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ios-app-without-queries-3893b9ebd1437a06592cc18393a01e1e.png"},35005:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/restricted-queries-final-result-443b634d42c5ef40c3d6c42d5358884c.png"},11230:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/restrited-queries-basic-query-c48a1a721abebefd5a554dcc7c7580d4.png"},58807:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/user-information-query-2c1db26ac716f0a8504a2b25d2c870ac.png"}}]);