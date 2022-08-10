"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2342],{69098:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={id:"filter-query-introduction",title:"Filter queries"},i=void 0,l={unversionedId:"tutorials/filter-queries/filter-query-introduction",id:"tutorials/filter-queries/filter-query-introduction",title:"Filter queries",description:"In this tutorial, we'll show how to create filter queries to display filtered content in the generated mobile app.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/filter-queries/filter-query-introduction.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/filter-query-introduction",permalink:"/es/docs/next/tutorials/filter-queries/filter-query-introduction",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/filter-queries/filter-query-introduction.md",tags:[],version:"current",frontMatter:{id:"filter-query-introduction",title:"Filter queries"},sidebar:"tutorials",previous:{title:"Create Kotlin formatter",permalink:"/es/docs/next/tutorials/data-formatter/create-kotlin-formatter"},next:{title:"Comencemos",permalink:"/es/docs/next/tutorials/actions/getting-started"}},s={},c=[{value:"Descargue el proyecto Starter",id:"descargue-el-proyecto-starter",level:2},{value:"Definir un Filter Query",id:"definir-un-filter-query",level:2},{value:"Filtro de b\xfasqueda usuario",id:"filtro-de-b\xfasqueda-usuario",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this tutorial, we'll show how to create ",(0,n.kt)("a",{parentName:"p",href:"/es/docs/next/project-definition/data#filter-queries"},(0,n.kt)("strong",{parentName:"a"},"filter queries"))," to display filtered content in the generated mobile app."),(0,n.kt)("p",null,"Imagine que es un gestor de cuentas y quiere consultar sus contratos ",(0,n.kt)("em",{parentName:"p"},"En curso")," simplemente conect\xe1ndose a su aplicaci\xf3n con su direcci\xf3n de correo electr\xf3nico."),(0,n.kt)("p",null,"Primero, desde la secci\xf3n Datos definiremos un ",(0,n.kt)("strong",{parentName:"p"},"filtro de b\xfasqueda b\xe1sico")," para mostrar solo los contratos ",(0,n.kt)("em",{parentName:"p"},"En curso"),". Luego, vamos a aplicar un ",(0,n.kt)("strong",{parentName:"p"},"filtro basado en informaci\xf3n del usuario")," que depender\xe1 del correo electr\xf3nico del administrador de la cuenta."),(0,n.kt)("h2",{id:"descargue-el-proyecto-starter"},"Descargue el proyecto Starter"),(0,n.kt)("p",null,"Antes de comenzar, aseg\xfarese de descargar el ",(0,n.kt)("strong",{parentName:"p"},"proyecto Starter")," que incluye un archivo ",(0,n.kt)("strong",{parentName:"p"},"4DforiOSQueries.4dbase")," (una base de datos de demostraci\xf3n y un proyecto de aplicaci\xf3n m\xf3vil listo para usar)"),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip"},"Starter project")),(0,n.kt)("p",null,"The database includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a ",(0,n.kt)("strong",{parentName:"li"},"CRM table")," with all the data we want to display in the generated iOS app"),(0,n.kt)("li",{parentName:"ul"},"an ",(0,n.kt)("strong",{parentName:"li"},"AccountManager table")," with basic information about the account managers (email and name).")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"CRM database",src:a(89570).Z,width:"2226",height:"1834"})),(0,n.kt)("p",null,"You're now ready to define your first filter query."),(0,n.kt)("p",null,"Open the mobile project by clicking on ",(0,n.kt)("strong",{parentName:"p"},"Open")," > ",(0,n.kt)("strong",{parentName:"p"},"Mobile Project...")," and select ",(0,n.kt)("strong",{parentName:"p"},"CRM app")," > ",(0,n.kt)("strong",{parentName:"p"},"project.4dmobileapp"),"."),(0,n.kt)("h2",{id:"definir-un-filter-query"},"Definir un Filter Query"),(0,n.kt)("p",null,'Por el momento, si genera la aplicaci\xf3n del proyecto Starter e introduce "',(0,n.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),'" como correo electr\xf3nico de inicio de sesi\xf3n (uno de los administradores de cuentas), ver\xe1 ',(0,n.kt)("strong",{parentName:"p"},"todos los contratos y estados de los administradores")," (",(0,n.kt)("em",{parentName:"p"},"Closed")," y ",(0,n.kt)("em",{parentName:"p"},"In Progress"),")."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"iOS app without queries",src:a(21612).Z,width:"1559",height:"907"})),(0,n.kt)("p",null,"As we discussed above, we want the account managers to access their ",(0,n.kt)("em",{parentName:"p"},"In Progress")," contracts by logging into their mobile app with their email. Para hacer esto:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Acceda a la ",(0,n.kt)("strong",{parentName:"li"},'secci\xf3n "Datos"')),(0,n.kt)("li",{parentName:"ul"},"Haga clic derecho en el campo ",(0,n.kt)("strong",{parentName:"li"},"Filtro de b\xfasqueda")," para que aparezcan los ",(0,n.kt)("strong",{parentName:"li"},"botones Campos, Comparadores y Operadores"),"."),(0,n.kt)("li",{parentName:"ul"},"Haga clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"li"},"Campos")," y seleccione ",(0,n.kt)("strong",{parentName:"li"},"Estado"),"."),(0,n.kt)("li",{parentName:"ul"},"Haga clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"li"},"Comparadores")," y seleccione ",(0,n.kt)("strong",{parentName:"li"},"Igual a"),"."),(0,n.kt)("li",{parentName:"ul"},"Como desea mostrar los contratos ",(0,n.kt)("em",{parentName:"li"},"abiertos"),", ingrese ",(0,n.kt)("strong",{parentName:"li"},"En progreso")),(0,n.kt)("li",{parentName:"ul"},"Recuerde validar su b\xfasqueda haciendo clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"li"},"Validar"),", de lo contrario no podr\xe1 crear su aplicaci\xf3n.")),(0,n.kt)("p",null,"Deber\xeda obtener este resultado:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"CRM database",src:a(22853).Z,width:"2164",height:"1988"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTES")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Se muestra un icono de ",(0,n.kt)("strong",{parentName:"li"},"filtro")," a la derecha de cada tabla cuando se le aplica un filtro b\xe1sico."),(0,n.kt)("li",{parentName:"ul"},"Para este tipo de filtros de b\xfasqueda, puede optar por integrar los datos en la aplicaci\xf3n o cargar los datos despu\xe9s de iniciar sesi\xf3n marcando la casilla de verificaci\xf3n ",(0,n.kt)("strong",{parentName:"li"},"Integrar los datos en la aplicaci\xf3n"),"."),(0,n.kt)("li",{parentName:"ul"},"El tama\xf1o se calcular\xe1 en la primera generaci\xf3n para que pueda visualizar el ",(0,n.kt)("strong",{parentName:"li"},"tama\xf1o de sus datos"),"."))),(0,n.kt)("p",null,'Si genera su aplicaci\xf3n e ingresa "',(0,n.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),'" como correo electr\xf3nico de inicio de sesi\xf3n, ver\xe1 que todos los contratos ',(0,n.kt)("em",{parentName:"p"},"In Progress")," se muestran en el simulador."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"aplicaci\xf3n iOS con consulta b\xe1sica",src:a(6867).Z,width:"1559",height:"907"})),(0,n.kt)("p",null,"\xa1No es exactamente lo que esper\xe1bamos! What we want now is for each account manager to visualize only their own ",(0,n.kt)("em",{parentName:"p"},"In Progress")," contracts, so let's complete our query."),(0,n.kt)("h2",{id:"filtro-de-b\xfasqueda-usuario"},"Filtro de b\xfasqueda usuario"),(0,n.kt)("p",null,"Now let's filter our app content ",(0,n.kt)("a",{parentName:"p",href:"/es/docs/next/project-definition/data#filter-queries-with-user-information"},"depending on a user information"),", in this case, the account manager's login email address."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Acceda a la ",(0,n.kt)("strong",{parentName:"li"},'secci\xf3n "Datos"'),"."),(0,n.kt)("li",{parentName:"ul"},"Haga clic derecho en el campo ",(0,n.kt)("strong",{parentName:"li"},"Filtro de b\xfasqueda")," para que aparezcan los ",(0,n.kt)("strong",{parentName:"li"},"botones Campos, Comparadores y Operadores"),"."),(0,n.kt)("li",{parentName:"ul"},"Haga clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"li"},"Operadores")," y seleccione ",(0,n.kt)("strong",{parentName:"li"},"AND"),"."),(0,n.kt)("li",{parentName:"ul"},"Ahora defina la informaci\xf3n del usuario que desea obtener del m\xe9todo de base de datos, ",(0,n.kt)("strong",{parentName:"li"},":email"),"."),(0,n.kt)("li",{parentName:"ul"},"Recuerde validar la consulta haciendo clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"li"},"Validar"),". De lo contrario, no podr\xe1 crear su aplicaci\xf3n.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Filtro de b\xfasqueda usuario",src:a(51011).Z,width:"2164",height:"1988"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},"Status = 'In Progress' & manager. Email = :email \n")),(0,n.kt)("p",null,"La b\xfasqueda filtrar\xe1 los datos en funci\xf3n del estado ",(0,n.kt)("strong",{parentName:"p"},"In Progress")," Y de la ",(0,n.kt)("strong",{parentName:"p"},"direcci\xf3n de correo electr\xf3nico del administrador de cuentas")," (accesible desde la tabla AccountManager gracias a la relaci\xf3n ",(0,n.kt)("em",{parentName:"p"},"Muchos a Uno")," en el nombre del gerente)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTA")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Se muestra un ",(0,n.kt)("strong",{parentName:"li"},"icono usuario")," a la derecha de cada tabla cuando se le aplica un filtro de informaci\xf3n de usuario."),(0,n.kt)("li",{parentName:"ul"},"As soon as a query is based on user information and validated, you need to edit the ",(0,n.kt)("a",{parentName:"li",href:"/es/docs/next/4d/on-mobile-app-authentication"},(0,n.kt)("inlineCode",{parentName:"a"},"On Mobile app authentication method")),". Para hacerlo, haga clic con el bot\xf3n derecho en el bot\xf3n ",(0,n.kt)("strong",{parentName:"li"},"Edit authentication method")," para abrir la ventana de edici\xf3n del m\xe9todo de base de datos."))),(0,n.kt)("p",null,"Agregue la siguiente l\xednea en el m\xe9todo de base de datos:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-4d"},'$response.userInfo:=New object("email";$request.email)\n')),(0,n.kt)("p",null,"Esto permitir\xe1 recuperar la direcci\xf3n de correo electr\xf3nico de inicio de sesi\xf3n del administrador y mostrar los datos seg\xfan ese criterio."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Filtro de b\xfasqueda usuario",src:a(76147).Z,width:"1836",height:"1534"})),(0,n.kt)("p",null,'Ahora, si crea su aplicaci\xf3n e ingresa "',(0,n.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),'" como correo electr\xf3nico de inicio de sesi\xf3n, encontrar\xe1 todos los contratos ',(0,n.kt)("em",{parentName:"p"},'"In progress"')," de Michelle Simpson."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Resultado final",src:a(67894).Z,width:"1559",height:"907"})))}p.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},89570:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/CRMDatabase-1b6c6c0179884652d0b0bc4fbe7e0041.png"},76147:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/database-method-user-information-query-e3ed77a2f2afd667702088c08f76a1ce.png"},22853:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/filterquery-7902086c2d1e2bfd8c24d1d16e9fb561.png"},21612:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ios-app-without-queries-3893b9ebd1437a06592cc18393a01e1e.png"},67894:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/restricted-queries-final-result-443b634d42c5ef40c3d6c42d5358884c.png"},6867:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/restrited-queries-basic-query-c48a1a721abebefd5a554dcc7c7580d4.png"},51011:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/user-information-query-2c1db26ac716f0a8504a2b25d2c870ac.png"}}]);