(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2980],{3905:function(e,n,a){"use strict";a.d(n,{Zo:function(){return p},kt:function(){return m}});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),l=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(a),m=i,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?t.createElement(k,o(o({ref:n},p),{},{components:a})):t.createElement(k,o({ref:n},p))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},12773:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var t=a(22122),i=a(19756),r=(a(67294),a(3905)),o=["components"],c={id:"using-action-parameters",title:"Utilizar par\xe1metros de acci\xf3n"},s=void 0,l={unversionedId:"tutorials/actions/using-action-parameters",id:"tutorials/actions/using-action-parameters",isDocsHomePage:!1,title:"Utilizar par\xe1metros de acci\xf3n",description:"OBJETIVOS",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/actions/using-action-parameters.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/using-action-parameters",permalink:"/go-mobile/es/docs/next/tutorials/actions/using-action-parameters",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/actions/using-action-parameters.md",version:"current",frontMatter:{id:"using-action-parameters",title:"Utilizar par\xe1metros de acci\xf3n"},sidebar:"tutorials",previous:{title:"A\xf1adir acciones a las plantillas",permalink:"/go-mobile/es/docs/next/tutorials/actions/adding-actions-template"},next:{title:"Many to One relations",permalink:"/go-mobile/es/docs/next/tutorials/relations/many-to-one-relations"}},p=[{value:"PASO 1. A\xf1adir acci\xf3n",id:"paso-1-a\xf1adir-acci\xf3n",children:[]},{value:"PASO 2. Acci\xf3n de edici\xf3n",id:"paso-2-acci\xf3n-de-edici\xf3n",children:[]},{value:"PASO 3. Acci\xf3n de eliminaci\xf3n",id:"paso-3-acci\xf3n-de-eliminaci\xf3n",children:[]},{value:"PASO 4. Acci\xf3n de env\xedo de comentario",id:"paso-4-acci\xf3n-de-env\xedo-de-comentario",children:[]},{value:"PASO 5. Creaci\xf3n del m\xe9todo base On Mobile App Action",id:"paso-5-creaci\xf3n-del-m\xe9todo-base-on-mobile-app-action",children:[]},{value:"PASO 6. Creaci\xf3n de todos los m\xe9todos necesarios",id:"paso-6-creaci\xf3n-de-todos-los-m\xe9todos-necesarios",children:[{value:"addAction",id:"addaction",children:[]},{value:"editAction",id:"editaction",children:[]},{value:"deleteAction",id:"deleteaction",children:[]},{value:"sendEmail",id:"sendemail",children:[]}]},{value:"PASO 7. Creaci\xf3n de la aplicaci\xf3n",id:"paso-7-creaci\xf3n-de-la-aplicaci\xf3n",children:[]},{value:"PASO 8. \xbfQu\xe9 hacer ahora?",id:"paso-8-\xbfqu\xe9-hacer-ahora",children:[]}],u={toc:p};function d(e){var n=e.components,c=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,t.Z)({},u,c,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,r.kt)("p",{parentName:"blockquote"},"Definir par\xe1metros de acci\xf3n para editar el contenido de su aplicaci\xf3n.")),(0,r.kt)("p",null,"En el tutorial al definir acciones, descubrimos c\xf3mo ejecutar c\xf3digo 4D desde una aplicaci\xf3n iOS definiendo acciones en la secci\xf3n acciones."),(0,r.kt)("p",null,"En este tutorial, iremos m\xe1s all\xe1 y crearemos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"una acci\xf3n de adici\xf3n para ",(0,r.kt)("strong",{parentName:"li"},"crear una nueva tarea"),","),(0,r.kt)("li",{parentName:"ul"},"una acci\xf3n de edici\xf3n que le permitir\xe1 ",(0,r.kt)("strong",{parentName:"li"},"editar las tareas existentes")," desde la aplicaci\xf3n iOS,"),(0,r.kt)("li",{parentName:"ul"},"una acci\xf3n de eliminaci\xf3n para ",(0,r.kt)("strong",{parentName:"li"},"eliminar una entidad"),", y"),(0,r.kt)("li",{parentName:"ul"},"una acci\xf3n que le permitir\xe1 ",(0,r.kt)("strong",{parentName:"li"},"enviar un comentario por correo electr\xf3nico para una tarea espec\xedfica"),".")),(0,r.kt)("p",null,"Para comenzar, primero descarguemos el ",(0,r.kt)("strong",{parentName:"p"},"proyecto Starter")," basado en nuestra aplicaci\xf3n iOS Tasks:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/159a7b73bd3556890a205024af42440faf0b277c.zip"},"Descargar")),(0,r.kt)("h2",{id:"paso-1-a\xf1adir-acci\xf3n"},"PASO 1. A\xf1adir acci\xf3n"),(0,r.kt)("p",null,"Comencemos por una tarea simple. Abra el proyecto m\xf3vil Tasks y vaya directamente a la ",(0,r.kt)("strong",{parentName:"p"},"secci\xf3n Actions"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Action section",src:a(30311).Z})),(0,r.kt)("p",null,"Est\xe1 bastante vac\xedo por el momento... Esto es lo que queremos: ",(0,r.kt)("strong",{parentName:"p"},"crear una nueva tarea desde la aplicaci\xf3n iOS"),"."),(0,r.kt)("p",null,"Para esto, creemos una acci\xf3n utilizando una acci\xf3n preestablecida ",(0,r.kt)("strong",{parentName:"p"},"Agregar"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Haga clic en la flecha en el ",(0,r.kt)("strong",{parentName:"li"},"bot\xf3n +"),", en la parte inferior de la tabla Acciones."),(0,r.kt)("li",{parentName:"ul"},"Seleccione la opci\xf3n ",(0,r.kt)("strong",{parentName:"li"},"acci\xf3n de a\xf1adir"),"."),(0,r.kt)("li",{parentName:"ul"},"Seleccione la ",(0,r.kt)("strong",{parentName:"li"},"tabla Task"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add action creation",src:a(74379).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Se muestra una ",(0,r.kt)("strong",{parentName:"li"},"nueva acci\xf3n")," llamada ",(0,r.kt)("em",{parentName:"li"},'"addTasks"')," con ",(0,r.kt)("em",{parentName:"li"},'"Add..."')," como etiqueta predeterminada."),(0,r.kt)("li",{parentName:"ul"},"Todos los ",(0,r.kt)("strong",{parentName:"li"},"par\xe1metros"),"disponibles y sus ",(0,r.kt)("strong",{parentName:"li"},"propiedades")," se muestran en la secci\xf3n ",(0,r.kt)("strong",{parentName:"li"},"Par\xe1metros de las acciones"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add action parameters",src:a(48509).Z})),(0,r.kt)("p",null,"En este punto, todos los ",(0,r.kt)("strong",{parentName:"p"},"par\xe1metros de las acciones de adici\xf3n")," se crean autom\xe1ticamente y est\xe1n listos para usar."),(0,r.kt)("h2",{id:"paso-2-acci\xf3n-de-edici\xf3n"},"PASO 2. Acci\xf3n de edici\xf3n"),(0,r.kt)("p",null,"Ahora creemos una acci\xf3n que le permitir\xe1 ",(0,r.kt)("strong",{parentName:"p"},"editar el contenido de su aplicaci\xf3n"),"."),(0,r.kt)("p",null,"Para esto, creemos una acci\xf3n utilizando una acci\xf3n preestablecida de ",(0,r.kt)("strong",{parentName:"p"},"edici\xf3n"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Haga clic en la flecha en el ",(0,r.kt)("strong",{parentName:"li"},"bot\xf3n +"),", en la parte inferior de la tabla Acciones."),(0,r.kt)("li",{parentName:"ul"},"Seleccione la opci\xf3n ",(0,r.kt)("strong",{parentName:"li"},"acci\xf3n de edici\xf3n"),"."),(0,r.kt)("li",{parentName:"ul"},"Seleccione la tabla Tasks.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edit action creation",src:a(98452).Z})),(0,r.kt)("p",null,"En este punto ver\xe1:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Se muestra ",(0,r.kt)("strong",{parentName:"li"},"Una nueva acci\xf3n")," llamada ",(0,r.kt)("em",{parentName:"li"},'"editTasks"')," con ",(0,r.kt)("em",{parentName:"li"},'"Add..."')," como etiqueta predeterminada."),(0,r.kt)("li",{parentName:"ul"},"Todos los ",(0,r.kt)("strong",{parentName:"li"},"par\xe1metros"),"disponibles y sus ",(0,r.kt)("strong",{parentName:"li"},"propiedades")," se muestran en la secci\xf3n ",(0,r.kt)("strong",{parentName:"li"},"Par\xe1metros de las acciones"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edit action parameters",src:a(18413).Z})),(0,r.kt)("p",null,"No se preocupe, manejaremos el c\xf3digo 4D para estas acciones m\xe1s adelante. :-)"),(0,r.kt)("h2",{id:"paso-3-acci\xf3n-de-eliminaci\xf3n"},"PASO 3. Acci\xf3n de eliminaci\xf3n"),(0,r.kt)("p",null,"El proceso de creaci\xf3n de la acci\xf3n predefinido ",(0,r.kt)("strong",{parentName:"p"},"Eliminar")," es casi el mismo que la acci\xf3n Editar:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Haga clic en la flecha en el ",(0,r.kt)("strong",{parentName:"li"},"bot\xf3n +"),", en la parte inferior de la tabla Acciones."),(0,r.kt)("li",{parentName:"ul"},"Seleccione la opci\xf3n ",(0,r.kt)("strong",{parentName:"li"},"acci\xf3n de eliminaci\xf3n"),"."),(0,r.kt)("li",{parentName:"ul"},"Seleccione la tabla Tasks.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Delete action creation",src:a(92248).Z})),(0,r.kt)("p",null,"En este punto, ver\xe1 una ",(0,r.kt)("strong",{parentName:"p"},"nueva acci\xf3n")," llamada ",(0,r.kt)("em",{parentName:"p"},'"deleteTasks"')," con ",(0,r.kt)("em",{parentName:"p"},'"Remove"')," como la etiqueta predeterminada."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Acci\xf3n de eliminaci\xf3n",src:a(52491).Z})),(0,r.kt)("p",null,"No necesita preocuparse por los par\xe1metros o propiedades de este tipo de acci\xf3n."),(0,r.kt)("h2",{id:"paso-4-acci\xf3n-de-env\xedo-de-comentario"},"PASO 4. Acci\xf3n de env\xedo de comentario"),(0,r.kt)("p",null,"Ahora queremos ",(0,r.kt)("strong",{parentName:"p"},"enviar un comentario")," a un ",(0,r.kt)("strong",{parentName:"p"},"correo electr\xf3nico espec\xedfico")," dependiendo de una tarea espec\xedfica. Para hacerlo, haga clic en el bot\xf3n + y cree una nueva acci\xf3n llamada ",(0,r.kt)("strong",{parentName:"p"},"sendComment"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Delete action creation",src:a(16940).Z})),(0,r.kt)("p",null,"Ahora creemos tres par\xe1metros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Haga clic en el bot\xf3n + y seleccione ",(0,r.kt)("strong",{parentName:"li"},"Title")," en la lista de par\xe1metros de las acciones, para incluirlo en el correo electr\xf3nico que va a enviar."),(0,r.kt)("li",{parentName:"ul"},"Cree un par\xe1metro ",(0,r.kt)("strong",{parentName:"li"},"Comment")," y seleccione el formato \xc1rea de texto."),(0,r.kt)("li",{parentName:"ul"},"Cree un par\xe1metro ",(0,r.kt)("strong",{parentName:"li"},"email")," y seleccione el formato Email address.")),(0,r.kt)("p",null,"Su secci\xf3n Actions deber\xeda verse as\xed:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Send comment action creation",src:a(83325).Z})),(0,r.kt)("h2",{id:"paso-5-creaci\xf3n-del-m\xe9todo-base-on-mobile-app-action"},"PASO 5. Creaci\xf3n del m\xe9todo base On Mobile App Action"),(0,r.kt)("p",null,"Haga clic en el bot\xf3n Crear para crear el m\xe9todo base ",(0,r.kt)("em",{parentName:"p"},"On Mobile App Action"),"."),(0,r.kt)("p",null,"Todas sus acciones se incluir\xe1n autom\xe1ticamente en el m\xe9todo base."),(0,r.kt)("p",null,"Lo \xfanico que debe hacer es agregar una referencia a su(s) m\xe9todo(s) para el (los) escenario(s) que desea manejar."),(0,r.kt)("p",null,"Aqu\xed el m\xe9todo base ",(0,r.kt)("em",{parentName:"p"},"On Mobile App Action")," final:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0;$response)\nC_OBJECT($1;$request)\n\nC_OBJECT($o;$context;$request;$result;$parameters)\n\n$request:=$1  // Informaci\xf3n ofrecida por la aplicaci\xf3n m\xf3vil\n\n$context:=$request.context\n$parameters:=$request.parameters\n\nCase of \n\n    : ($request.action="addTasks")\n\n          // Insertar aqu\xed el c\xf3digo para la acci\xf3n "Add\u2026"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "parameters";$parameters)\n\n        $result:=addAction ($o)\n\n    : ($request.action="editTasks")\n\n          // Insertar aqu\xed el c\xf3digo para la acci\xf3n "Edit\u2026"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "parameters";$parameters)\n\n        $result:=editAction ($o)\n\n\n    : ($request.action="deleteTasks")\n\n          // Insertar aqu\xed el c\xf3digo para la acci\xf3n "Remove"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey)\n\n        $result:=deleteAction ($o)\n\n    : ($request.action="sendComment")\n\n          // Insertar aqu\xed el c\xf3digo para la acci\xf3n "Send Comment"\n\n        $o:=New object(\\\n        "dataClass";$context.dataClass;\\\n        "ID";$context.entity.primaryKey;\\\n        "parameters";$parameters)\n\n\n        $result:=sendMail ($o)\n\n    Else \n\n          // Acci\xf3n desconocida\nEnd case \n\n$0:=$result\n\n')),(0,r.kt)("h2",{id:"paso-6-creaci\xf3n-de-todos-los-m\xe9todos-necesarios"},"PASO 6. Creaci\xf3n de todos los m\xe9todos necesarios"),(0,r.kt)("h3",{id:"addaction"},"addAction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($entity;$in;$out)\n\n$in:=$1\n\n$out:=New object("success";False)\n\nIf ($in.dataClass#Null)\n\n    $entity:=ds.Tasks.new()  //create a reference\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $entity.save()  //save the entity\n\n\n    $out.success:=True  // notify App that action success\n    $out.dataSynchro:=True  // notify App to refresh the selection\n    $out.statusText:="Task added"\n\nElse \n\n    $out.errors:=New collection("No Selection")\n\nEnd if \n\n$0:=$out\n\n\n')),(0,r.kt)("h3",{id:"editaction"},"editAction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $status:=$entity.save()\n\n    $out:=New object\n\n    If ($status.success)\n\n        $out.success:=True  // notificar la App que la acci\xf3n es exitosa\n        $out.dataSynchro:=True  // notificar la App para refrescar esta entidad\n        $out.statusText:="Task edited"\n\n    Else \n\n        $out:=$status  // devolver estado a la App\n\n    End if \n\nElse \n\n    $out.success:=False  // notificar la App que la acci\xf3n fall\xf3\n\nEnd if \n\n$0:=$out\n\n\n')),(0,r.kt)("h3",{id:"deleteaction"},"deleteAction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'\nC_OBJECT($0)\nC_OBJECT($1)\n\nC_OBJECT($dataClass;$entity;$in;$out;$status;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection.drop()\n\n    $out:=New object\n\n    If ($entity.length=0)\n\n        $out.success:=True  // notificar a la App que la acci\xf3n es exitosa\n        $out.dataSynchro:=True  // notificar a la App refrescar esta entidad\n        $out.statusText:="Task deleted"\n\n    Else \n\n        $out:=$status  // devolver estado a la App\n\n    End if \n\nElse \n\n    $out.success:=False  // notificar a la App que la acci\xf3n fall\xf3\n\nEnd if \n\n$0:=$out\n\n\n')),(0,r.kt)("h3",{id:"sendemail"},"sendEmail"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0;$out)\nC_OBJECT($1;$in)\n\nC_OBJECT($dataClass;$entity;$selection)\n\n$in:=$1\n\n$selection:=ds[$in.dataClass].query("ID = :1";String($in.ID))\n\nIf ($selection.length=1)\n\n    $entity:=$selection[0]\n\n    For each ($key;$in.parameters)\n\n        $entity[$key]:=$in.parameters[$key]\n\n    End for each \n\n    $out:=New object\n\n    $server:=New object\n    $server.host:="smtp.gmail.com"\n    $server.port:=465\n    $server.user:="test@mail.com"\n    $server.password:="yourPassword"\n\n    $transporter:=SMTP New transporter($server)\n\n    $email:=New object\n    $email.subject:="New comment about one of your task"\n    $email.from:="yourEmail"\n    $email.to:=$emailToSend\n    $email.htmlBody:="<h1>Comment from Tasks for iOS</h1>"+"<p><b>Task:</b> "+$taskTitle+"</p><p><b>Comment:</b> "\\\n    +$commentToSend+"</p><br><p><i>Send from my 4D for iOS app</i></p>"\\\n\n    $status:=$transporter.send($email)\n    If ($status.success)\n        $out.success:=True  // notificar a la App que la acci\xf3n fue exitosa\n        $out.statusText:="Mail sent"\n\n    Else \n        $out.success:=False  // notificar a la App que la acci\xf3n fall\xf3\n        $out.statusText:="Mail not sent"\n\n    End if \n\nElse \n\n    $out.success:=False  // notificar a la App que la acci\xf3n fall\xf3\n\nEnd if \n\n$0:=$out\n\n\n')),(0,r.kt)("p",null,"No olvide agregar sus propios valores para la acci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"sendEmail"),"."),(0,r.kt)("h2",{id:"paso-7-creaci\xf3n-de-la-aplicaci\xf3n"},"PASO 7. Creaci\xf3n de la aplicaci\xf3n"),(0,r.kt)("p",null,"\xa1Es hora de generar su aplicaci\xf3n!"),(0,r.kt)("p",null,"Ahora, si hace clic en el bot\xf3n Action de la barra de navegaci\xf3n, podr\xe1 ",(0,r.kt)("strong",{parentName:"p"},"crear una nueva tarea"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create new task",src:a(23801).Z})),(0,r.kt)("p",null,"Si mantiene la presi\xf3n sobre su nueva celda de tareas en el Formulario Lista, se mostrar\xe1 una acci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Editar...")," en la lista de acciones."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edit task",src:a(5729).Z})),(0,r.kt)("p",null,"Env\xede un comentario utilizando la acci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Send comment"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Send task comment",src:a(25497).Z})),(0,r.kt)("p",null,"Y finalmente puede eliminar una entidad utilizando la acci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Eliminar... "),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Delete task",src:a(75644).Z})),(0,r.kt)("h2",{id:"paso-8-\xbfqu\xe9-hacer-ahora"},"PASO 8. \xbfQu\xe9 hacer ahora?"),(0,r.kt)("p",null,"\xa1Felicitaciones! \xa1Felicitaciones! \xa1Felicitaciones! Acaba de agregar 2 acciones a su aplicaci\xf3n iOS. \xa1Felicitaciones! \xa1Felicitaciones! \xa1Felicitaciones! Su aplicaci\xf3n iOS Tasks ahora est\xe1 completa y ahora puede modificar los datos de su aplicaci\xf3n directamente desde su dispositivo y sincronizarlos con su servidor."),(0,r.kt)("p",null,"Descargar el proyecto terminado:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ActionParameters/archive/0.0.1.zip"},"Descargar el proyecto completo")))}d.isMDXComponent=!0},23801:function(e,n,a){"use strict";n.Z=a.p+"assets/images/Action-parameters-addAction-ab555a7585002e427fdbe40cc7f313ee.png"},75644:function(e,n,a){"use strict";n.Z=a.p+"assets/images/Action-parameters-deleteAction-bc5b8f70ba39268879c57ae0efb5eb82.png"},5729:function(e,n,a){"use strict";n.Z=a.p+"assets/images/Action-parameters-editAction-9b9ce4f23f7b5a861fe7d24a00eb32cc.png"},25497:function(e,n,a){"use strict";n.Z=a.p+"assets/images/Action-parameters-sendComment-38be2e5b75e0d4d74a51bfcdbb9b9bbe.png"},30311:function(e,n,a){"use strict";n.Z=a.p+"assets/images/Actions-section-cbff48a3e62d88ec605631bbd9ba94ab.png"},74379:function(e,n,a){"use strict";n.Z=a.p+"assets/images/Add-action-creation-0b90971de150764707c792de82bc1274.png"},48509:function(e,n,a){"use strict";n.Z=a.p+"assets/images/Add-action-parameters-6637a821be3f6403d87c129f8e743ae4.png"},92248:function(e,n,a){"use strict";n.Z=a.p+"assets/images/Delete-action-creation-a87770233be15d7fd5e9149b7e7f2b3a.png"},52491:function(e,n,a){"use strict";n.Z=a.p+"assets/images/Delete-action-final-0d1c7e9df3f531e38cf24a36c0817f98.png"},98452:function(e,n,a){"use strict";n.Z=a.p+"assets/images/Edit-action-creation-f689b0deae347fdfb387ea5c00fc948c.png"},18413:function(e,n,a){"use strict";n.Z=a.p+"assets/images/Edit-action-parameters-2a98e90962f2e091508fb5cb07f0969c.png"},16940:function(e,n,a){"use strict";n.Z=a.p+"assets/images/Send-comment-action-creation-b165dabf7bcb94dffad8e3e13a2ac49b.png"},83325:function(e,n,a){"use strict";n.Z=a.p+"assets/images/Send-comment-action-definition-306647a0a7cc4b3e1413dd4013c73d5c.png"}}]);