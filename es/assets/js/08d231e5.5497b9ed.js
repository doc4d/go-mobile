(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6359],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49905:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],l={id:"user-information-query",title:"Filtro de b\xfasqueda usuario"},s=void 0,c={unversionedId:"tutorials/filter-queries/user-information-query",id:"tutorials/filter-queries/user-information-query",isDocsHomePage:!1,title:"Filtro de b\xfasqueda usuario",description:"Ahora filtremos el contenido de nuestra aplicaci\xf3n seg\xfan la direcci\xf3n de correo electr\xf3nico de inicio de sesi\xf3n del administrador de la cuenta (informaci\xf3n del usuario):",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/filter-queries/user-information-query.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/user-information-query",permalink:"/go-mobile/es/docs/next/tutorials/filter-queries/user-information-query",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/filter-queries/user-information-query.md",version:"current",frontMatter:{id:"user-information-query",title:"Filtro de b\xfasqueda usuario"},sidebar:"tutorials",previous:{title:"Definir un Filter Query",permalink:"/go-mobile/es/docs/next/tutorials/filter-queries/define-filter-query"},next:{title:"Comencemos",permalink:"/go-mobile/es/docs/next/tutorials/actions/getting-started"}},u=[],d={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ahora filtremos el contenido de nuestra aplicaci\xf3n seg\xfan la direcci\xf3n de correo electr\xf3nico de inicio de sesi\xf3n del administrador de la cuenta (informaci\xf3n del usuario):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Acceda a la ",(0,o.kt)("strong",{parentName:"li"},'secci\xf3n "Datos"'),"."),(0,o.kt)("li",{parentName:"ul"},"Haga clic derecho en el campo ",(0,o.kt)("strong",{parentName:"li"},"Filtro de b\xfasqueda")," para que aparezcan los ",(0,o.kt)("strong",{parentName:"li"},"botones Campos, Comparadores y Operadores"),"."),(0,o.kt)("li",{parentName:"ul"},"Haga clic en el bot\xf3n ",(0,o.kt)("strong",{parentName:"li"},"Operadores")," y seleccione ",(0,o.kt)("strong",{parentName:"li"},"AND"),"."),(0,o.kt)("li",{parentName:"ul"},"Ahora defina la informaci\xf3n del usuario que desea obtener del m\xe9todo de base de datos, ",(0,o.kt)("strong",{parentName:"li"},":email"),"."),(0,o.kt)("li",{parentName:"ul"},"Recuerde validar la consulta haciendo clic en el bot\xf3n ",(0,o.kt)("strong",{parentName:"li"},"Validar"),". De lo contrario, no podr\xe1 crear su aplicaci\xf3n.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Filtro de b\xfasqueda usuario",src:r(7797).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"Status = 'In Progress' & manager. Email = :email \n")),(0,o.kt)("p",null,"La b\xfasqueda filtrar\xe1 los datos en funci\xf3n del estado ",(0,o.kt)("strong",{parentName:"p"},"In Progress")," Y de la ",(0,o.kt)("strong",{parentName:"p"},"direcci\xf3n de correo electr\xf3nico del administrador de cuentas")," (accesible desde la tabla AccountManager gracias a la relaci\xf3n ",(0,o.kt)("em",{parentName:"p"},"Muchos a Uno")," en el nombre del gerente)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTA")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Se muestra un ",(0,o.kt)("strong",{parentName:"li"},"icono usuario")," a la derecha de cada tabla cuando se le aplica un filtro de informaci\xf3n de usuario."),(0,o.kt)("li",{parentName:"ul"},"Tan pronto como una b\xfasqueda se base en la informaci\xf3n del usuario y se valide, debe editar el ",(0,o.kt)("strong",{parentName:"li"},"M\xe9todo de autenticaci\xf3n de la aplicaci\xf3n m\xf3vil"),". Para hacerlo, haga clic con el bot\xf3n derecho en el bot\xf3n ",(0,o.kt)("strong",{parentName:"li"},"Edit authentication method")," para abrir la ventana de edici\xf3n del m\xe9todo de base de datos."))),(0,o.kt)("p",null,"Agregue la siguiente l\xednea en el m\xe9todo de base de datos:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'$response.userInfo:=New object("email";$request.email)\n')),(0,o.kt)("p",null,"Esto permitir\xe1 recuperar la direcci\xf3n de correo electr\xf3nico de inicio de sesi\xf3n del administrador y mostrar los datos seg\xfan ese criterio."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Filtro de b\xfasqueda usuario",src:r(72154).Z})),(0,o.kt)("p",null,'Ahora, si crea su aplicaci\xf3n e ingresa "',(0,o.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),'" como correo electr\xf3nico de inicio de sesi\xf3n, encontrar\xe1 todos los contratos ',(0,o.kt)("em",{parentName:"p"},'"In progress"')," de Michelle Simpson."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Resultado final",src:r(57227).Z})))}m.isMDXComponent=!0},72154:function(e,t,r){"use strict";t.Z=r.p+"assets/images/database-method-user-information-query-e3ed77a2f2afd667702088c08f76a1ce.png"},57227:function(e,t,r){"use strict";t.Z=r.p+"assets/images/restricted-queries-final-result-443b634d42c5ef40c3d6c42d5358884c.png"},7797:function(e,t,r){"use strict";t.Z=r.p+"assets/images/user-information-query-2c1db26ac716f0a8504a2b25d2c870ac.png"}}]);