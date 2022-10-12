"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1288],{3:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=a(87462),n=(a(67294),a(3905));const r={id:"labels-and-icons",title:"Etiquetas e iconos"},i=void 0,l={unversionedId:"project-definition/labels-and-icons",id:"version-19-R7/project-definition/labels-and-icons",title:"Etiquetas e iconos",description:"Esta p\xe1gina le permite definir las propiedades de visualizaci\xf3n de sus tablas, campos y relaciones en la aplicaci\xf3n m\xf3vil.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R7/project-definition/labels-and-icons.md",sourceDirName:"project-definition",slug:"/project-definition/labels-and-icons",permalink:"/go-mobile/es/docs/project-definition/labels-and-icons",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R7/project-definition/labels-and-icons.md",tags:[],version:"19-R7",frontMatter:{id:"labels-and-icons",title:"Etiquetas e iconos"},sidebar:"docs",previous:{title:"Actions",permalink:"/go-mobile/es/docs/project-definition/actions"},next:{title:"Main Menu",permalink:"/go-mobile/es/docs/project-definition/main-menu"}},s={},p=[{value:"Iconos",id:"iconos",level:2},{value:"A\xf1adir iconos personalizados",id:"a\xf1adir-iconos-personalizados",level:3},{value:"Etiquetas cortas y largas",id:"etiquetas-cortas-y-largas",level:2},{value:"Formatos",id:"formatos",level:2},{value:"Selecting a formatter",id:"selecting-a-formatter",level:3},{value:"Adding custom formatters",id:"adding-custom-formatters",level:3},{value:"Downloading formatters",id:"downloading-formatters",level:4},{value:"Creating formatters",id:"creating-formatters",level:4},{value:"Installing custom formatters",id:"installing-custom-formatters",level:4},{value:"T\xedtulo",id:"t\xedtulo",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Esta p\xe1gina le permite definir las propiedades de visualizaci\xf3n de sus tablas, campos y relaciones en la aplicaci\xf3n m\xf3vil."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Labels &amp; Icons section",src:a(43782).Z,width:"2835",height:"1988"})),(0,n.kt)("p",null,"Se definen las propiedades por defecto. Para modificar una propiedad, seleccione un elemento e introduzca el nuevo valor en la columna correspondiente."),(0,n.kt)("p",null,"Puede definir las mismas propiedades para las tablas, los campos y las relaciones. Adem\xe1s, se pueden definir formatos para los campos/relaciones."),(0,n.kt)("p",null,"Estos elementos se mostrar\xe1n en formularios detallados y en formularios listados, dependiendo de la plantilla en la aplicaci\xf3n generada."),(0,n.kt)("h2",{id:"iconos"},"Iconos"),(0,n.kt)("p",null,"Icono para asociar a la tabla o campo/elemento en la aplicaci\xf3n m\xf3vil cada vez que una plantilla requiera un icono."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Para los campos de relaci\xf3n, se mostrar\xe1n iconos a la izquierda del bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Relaci\xf3n")," que permite abrir una tabla relacionada.")),(0,n.kt)("p",null,"El editor de 4D mobile ofrece una amplia librer\xeda de iconos para satisfacer sus necesidades. Estos incluyen iconos para negocios, finanzas, educaci\xf3n, gobierno, salud, industria, bienes ra\xedces, servicios, etc. Para seleccionar un icono, haga clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"icono")," y elija un icono de la lista:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Icons select",src:a(18072).Z,width:"1082",height:"994"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Para mantener todo consistente, los ",(0,n.kt)("strong",{parentName:"p"},"iconos predeterminados")," se generan para los campos vac\xedos, si se ha definido al menos un icono para un campo.")),(0,n.kt)("p",null,"Tambi\xe9n puede dejar el \xe1rea de iconos vac\xeda si no desea mostrar los iconos en su aplicaci\xf3n."),(0,n.kt)("h3",{id:"a\xf1adir-iconos-personalizados"},"A\xf1adir iconos personalizados"),(0,n.kt)("p",null,"Puede a\xf1adir sus propios iconos a la librer\xeda, para poder seleccionarlos en su proyecto. Puede utilizar cualquier formato de icono (se recomienda SVG o PNG para conservar la transparencia) y tama\xf1o. Es muy recomendable tener iconos de colores personalizados para visualizarlos mejor en el editor de proyectos."),(0,n.kt)("p",null,"Por ejemplo, aqu\xed tiene un conjunto de iconos personalizados que puede utilizar:"),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomIcons/releases/latest/download/tutorial-CustomIcons.zip"},"Descargar iconos personalizados")),(0,n.kt)("p",null,"Para incluir iconos personalizados en su proyecto:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Cree una carpeta ",(0,n.kt)("inlineCode",{parentName:"li"},"iconos")," en la siguiente ubicaci\xf3n:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<my4DProjetFolder>/Resources/Mobile/medias\n")),(0,n.kt)("p",null,":::nota"),(0,n.kt)("p",null,"Puede que tenga que crear la carpeta ",(0,n.kt)("inlineCode",{parentName:"p"},"medias"),"."),(0,n.kt)("p",null,":::"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Arrastre y suelte sus iconos personalizados en la carpeta ",(0,n.kt)("inlineCode",{parentName:"li"},"iconos"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Icons select2",src:a(7616).Z,width:"997",height:"367"})),(0,n.kt)("p",null,"Ahora puede seleccionar sus iconos para su proyecto, que aparecen despu\xe9s de los iconos est\xe1ndar."),(0,n.kt)("h2",{id:"etiquetas-cortas-y-largas"},"Etiquetas cortas y largas"),(0,n.kt)("p",null,"Puede definir etiquetas personalizadas para tablas, campos y relaciones publicadas. Estas etiquetas se utilizar\xe1n de acuerdo con el espacio disponible en la plantilla para optimizar espacio y evitar congestionamiento en la barra de pesta\xf1as."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Para los campos de relaci\xf3n, se mostrar\xe1n etiquetas en el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},"Relaci\xf3n")," que permite abrir una tabla relacionada.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Las etiquetas cortas deben tener 10 caracteres o menos"),(0,n.kt)("li",{parentName:"ul"},"Las etiquetas largas pueden tener hasta 25 caracteres"),(0,n.kt)("li",{parentName:"ul"},'Puede utilizar caracteres no permitidos en los nombres de estructuras, como "/", "@", el caracter de espacio, etc.')),(0,n.kt)("p",null,"Por defecto, el editor m\xf3vil utiliza los nombres de tablas y campos definidos en la estructura como etiquetas en la aplicaci\xf3n, y se utiliza la misma cadena para las etiquetas cortas y largas."),(0,n.kt)("h2",{id:"formatos"},"Formatos"),(0,n.kt)("p",null,"This property allows you to select a ",(0,n.kt)("strong",{parentName:"p"},"formatter")," for your field."),(0,n.kt)("p",null,"Basically, a formatter allows you to map a data type from your database to a specific display on the mobile side. For example, you can define emails format, invoice numbers, etc."),(0,n.kt)("p",null,"However, formatters can call some code to create smart interfaces. For example, you can attach a data formatter to phone numbers that opens an action menu on the mobile app when the user touches the number (e.g. to call the person or save them in contacts)."),(0,n.kt)("h3",{id:"selecting-a-formatter"},"Selecting a formatter"),(0,n.kt)("p",null,"When you click on a field row in the Formats column, the formatter menu is displayed. By default, the 4D mobile editor provides several built-in formatters:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"formats",src:a(53902).Z,width:"200",height:"326"})),(0,n.kt)("p",null,"Available built-in formatters depend on the field type:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Tipo de campo"),(0,n.kt)("th",{parentName:"tr",align:null},"Formatos"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Texto")),(0,n.kt)("td",{parentName:"tr",align:null},"Texto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Fecha")),(0,n.kt)("td",{parentName:"tr",align:null},"Fecha, Fecha corta, Fecha larga, Fecha completa")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Hora")),(0,n.kt)("td",{parentName:"tr",align:null},"Fecha, Fecha corta, Duraci\xf3n, N\xfamero entero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Imagen")),(0,n.kt)("td",{parentName:"tr",align:null},"Imagen")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Booleano")),(0,n.kt)("td",{parentName:"tr",align:null},'"No" o "Yes", "False" o "True"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"N\xfamero entero")),(0,n.kt)("td",{parentName:"tr",align:null},"N\xfamero entero, n\xfamero decimal, n\xfamero real, porcentaje, n\xfamero ordinal, moneda $, moneda \u20ac, moneda \xa5, n\xfamero en letras")))),(0,n.kt)("p",null,"For an example of use of built-in formatters, see ",(0,n.kt)("a",{parentName:"p",href:"/go-mobile/es/docs/tutorials/data-formatter/use-data-formatter"},"this tutorial"),"."),(0,n.kt)("p",null,"If you have downloaded or created additional formatters (see below), they are also listed in this menu so you can select them."),(0,n.kt)("h3",{id:"adding-custom-formatters"},"Adding custom formatters"),(0,n.kt)("p",null,"You can add custom formatters to your mobile project to highly customize its interface. You can either ",(0,n.kt)("a",{parentName:"p",href:"#downloading-formatters"},"download")," existing formatters from the ",(0,n.kt)("a",{parentName:"p",href:"https://4d-go-mobile.github.io/gallery//#/type/formatter"},"go-mobile formatters repository"),", or ",(0,n.kt)("a",{parentName:"p",href:"#creating-formatters"},"create")," your own formatters."),(0,n.kt)("p",null,"You need then to ",(0,n.kt)("a",{parentName:"p",href:"#installing-custom-formatters"},"install them in your project"),"."),(0,n.kt)("p",null,":::nota"),(0,n.kt)("p",null,"There are two types of additional formatters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Dynamic formatters")," with code (identified with the OS logos (",(0,n.kt)("img",{alt:"OS logo",src:a(29042).Z,width:"39",height:"18"}),") in the  go-mobile formatters Github repository)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Static formatters")," without code.")),(0,n.kt)("p",null,":::"),(0,n.kt)("h4",{id:"downloading-formatters"},"Downloading formatters"),(0,n.kt)("p",null,"You can download formatters from the ",(0,n.kt)("a",{parentName:"p",href:"https://4d-go-mobile.github.io/gallery//#/type/formatter"},(0,n.kt)("strong",{parentName:"a"},"go-mobile formatters github repository")),". You can click on the ",(0,n.kt)("strong",{parentName:"p"},"Download more formats")," link in the 4D mobile editor to access this repository."),(0,n.kt)("h4",{id:"creating-formatters"},"Creating formatters"),(0,n.kt)("p",null,"A custom formatter is always associated with a ",(0,n.kt)("strong",{parentName:"p"},"manifest.json")," file containing the following elements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"name"),": a string containing the name of the formatter. Ex: phone, objectFormatter, etc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type"),": the 4D format type you want to use. Ex: Text, Integer, etc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"binding"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For static formatters: ",(0,n.kt)("inlineCode",{parentName:"li"},"localizedText")," for strings or ",(0,n.kt)("inlineCode",{parentName:"li"},"imageNamed")," for images."),(0,n.kt)("li",{parentName:"ul"},"For dynamic formatters: a string that links the code to your app"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"choiceList"),": mapped values depending on the selected type (for static formatters only)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"assets"),": additional formating data for static formatters only, such as dark mode support, tintable, Integer to Image and Text to Image."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"target"),": the platform supported by your formatter (for dynamic formatters only).")),(0,n.kt)("p",null,"Example of a static formatter's manifest file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},\n\n}\n')),(0,n.kt)("p",null,"Several tutorial pages detail how to create formatters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../tutorials/data-formatter/create-static-data-formatter"},(0,n.kt)("strong",{parentName:"a"},"Creating a static formatter"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../tutorials/data-formatter/create-swift-formatter"},(0,n.kt)("strong",{parentName:"a"},"Creating a Swift dynamic formatter"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../tutorials/data-formatter/create-kotlin-formatter"},(0,n.kt)("strong",{parentName:"a"},"Creating a Kotlin dynamic formatter")))),(0,n.kt)("admonition",{title:"for Android",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You can add a specific permission to your app, using a ",(0,n.kt)("inlineCode",{parentName:"p"},"capabilities")," block as follows:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-4d"},' "capabilities" : {\n        "android" : [ "android.permission.WRITE_EXTERNAL_STORAGE" ]\n'))),(0,n.kt)("h4",{id:"installing-custom-formatters"},"Installing custom formatters"),(0,n.kt)("p",null,"To install a custom formatter, you just need to drop the custom formatter folder into the ",(0,n.kt)("inlineCode",{parentName:"p"},"/Resources/Mobile/formatters")," of the 4D project folder. Once installed, a formatter can be selected from the ",(0,n.kt)("strong",{parentName:"p"},"Formats")," menu, just like a built-in format."),(0,n.kt)("h2",{id:"t\xedtulo"},"T\xedtulo"),(0,n.kt)("p",null,"Esta propiedad s\xf3lo est\xe1 disponible para los campos Relaci\xf3n. El t\xedtulo definido se mostrar\xe1 en la parte superior de la vista de destino al usar una relaci\xf3n."),(0,n.kt)("p",null,"Utilice un par de caracteres ",(0,n.kt)("inlineCode",{parentName:"p"},"%")," para incluir el valor del campo relacionado en el t\xedtulo. Por ejemplo, si quiere que el t\xedtulo del campo relacionado ",(0,n.kt)("inlineCode",{parentName:"p"},"Employee.employer")," muestre el nombre del campo relacionado ",(0,n.kt)("inlineCode",{parentName:"p"},"employee"),", puede escribir:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"%Name%'s employer\n")),(0,n.kt)("admonition",{title:"tutorial",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Un ",(0,n.kt)("a",{parentName:"p",href:"../tutorials/relations/one-to-many-title-definition"},(0,n.kt)("strong",{parentName:"a"},"tutorial"))," est\xe1 disponible para guiarlo a trav\xe9s del proceso de definici\xf3n de un t\xedtulo.")))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return a?o.createElement(g,i(i({ref:t},c),{},{components:a})):o.createElement(g,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},43782:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Labels-&-icons-section-4D-for-iOS-e2a7d5f78925808a9618b76a7c71e129.png"},53902:(e,t,a)=>{a.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAFGCAIAAACg90fVAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABGcSURBVHhe7Z3PixzHFccX608yNjEKueWcnOJDRGAPPpggotwDwRDCEmwjfIgRe0gsQmBhBD44BCMQPsTYIgaFHNYIKycLVlhYsoIJvjnfVz9fd1f39I7qzU5Nfz8U0pvXr6rb+z6qHrPTuwffEGIAxSImUCxiAsUiJlAsYgLFIiZQLGLCTLE+vvF65o33vwhpQkaYL9YWdNrOWcg2oFjEhOcQ64v33wj3xtdvfOxTUnbjBtJIuCkfhxq8TuVpIVQEZH5+5V7m1ePipCU2eY/lOi2Z0HJxwNsiyeiNm5LTMa/mRZBKdWo2hWqZTXcskSl3Pmqgy2bECAM+ow65DSvNIc1xcWLlFRD5o7pMcHap05B22Pg9FjKx5VmRkkBjccrJdB/pskCSjrRFlTfv6VBJoNE4zpe3++EojgmwNESAG1aTzBSLkPNBsYgJFIuYQLGICRSLmECxiAkUi5hAsYgJB5dOvuXgeM4RbFJwxyLPS1ms72fw0UcfhYiQLnCIYpH6wCGKReoDhygWqQ8colikPnCIYpH6wCGKReoDhygWqQ8colikPnCIYpH6wKEKYh1fPuhy+fiBP0IWChyqt2PduXZw7U6I1/Pg+DL921vgEMUi9YFDRmLhhbotwqJ4DAcuH9/Jd89zuEgukrt374ZIUUwCOGQhllIsbkzh73yEO1ZLPHv27MqVK7du3QqvHXiJJA6F1wo4ZCCW7E8anY3CUazW6Lk1YRWAQzZilZzBcYrVNMmtaasAHDK6FWaDPMGjXEOxmsS7NW0VgEM2b96hjbsLCkhm0+SAFyqU9AQkOw+UmrYKwKF6YhESgUMUi9QHDlEsUh84RLFIfeAQxSL1gUMUi9QHDlEsUh84RLFIfeAQxSL1gUMUi9QHDlEsUh84RLFIfeAQxSL1gUNlsc6++37tgFi9DAeHH3CIYnHUH3CIYnHUH3CIYnHUH3CIYnHUH3CIYnHUH3CIYnHUH3CIYnHUH3CIYnHUH3CIYnHUH3CoilgP3nzl8pun+VCD485rB9dW/STHhgMObUOs1dWD1z7sJ3dsUKyaAw5RLD8oVs0Bh+qK5YIPj19yz9a/9O4DHIVVgVeOP0HxaTh6kBuJpobMm+9e9rPcUiEbpPzw2sHVY0n6dcIonFFOkWpSLNPvhIu5eiddRjydEws1naTPe8K/HPlH8q7MVTWLGH//x91eBqOYxIBD1cXSAgV18o6lW+467aeo7vo4LeiTbh3p+nBfLJ1RnyXFThp3GcWLdALJ9fjYnyie2le6KaJmWnwx44uvnr368yt/Ormlk3iJJA7ppB9wyGDHCr3PcRYrbgkB6ZBq3nfffxJ2LNfmjFsniBgq4yidcUysOD1fTz576TJEO40UqLnLGj23JqzCgENbF6snh5agI1ZucxgXIpa6Nj8WKxZGcmvaKgw4tF2xZA9IBX6gTLc53QoHb2LmiyXrhCQUCXeu9WLpZFqnr9GSxcLwbk1bhQGHtiGWNBWkBkeCOmKbR795l6YGBmaoUT6j+OR46eq1+TvWa/H/M7I6+drCO7CFi4UBpaatwoBDVcSqNti2/RhwaJfEku1h8NaKo8EBhy5eLOxSkXRT42h7wKHduhVy7MeAQxSLo/6AQxSLo/6AQxSLo/6AQxSLo/6AQxSLo/6AQxSLo/6AQxSLo/6AQxSLo/6AQxSLo/6AQ2Wxws/PmgRifUbIALgBh55XrP8SoqBYxITKYl3/9H/POcKZFX5l0hYUi5hAsYgJXolHjx5d+uvTJ0+ePH36NLTTQbHIhkCJ+/fvn56eXvrz2ePHjykWqQOU+OCDD27fvn3pj/fPzs6waYV2OigW2RAocXx8fHJycun6vx4+fLhVsX67+ncvgxHOrPArR1aHB4erEDcK/hNeProXXuwrUOL69es3b9689NZnX3755ddffx3a6TAU62e//M2LL774u7/9p5cPZ1b4lSPTYjXRs6WI9fbbb7/33nsvvPXP7Ynlrbp6fdXLY4QzK/zKEYrVBuZi4X7Xu+VNWIURzqzwK0eSWK49R4f+eTHXKGQivuTe0cud1znjZsbu9stk5cND5LTBw9PFZFAkxS5YhTWxRFq+MysWpPnzLqMZzMX66eGvfvDDHyW3pq3CCGdW+JUj+HKnr7tqgWrGoNMSuijXuSb6o+WymEpIct7pXOUg7M6KWbmOVBoKEbpIymKqPczF+sOdr378k1e9W2utwghnVviVI/hyTzc1JvMG4MAkZHKjYuWwrLNyYt3p1iR1rJPyQs459zKawVwsDO8WlFprFUY4s8KvHAmN6H7dU6yS0ipfGRkVq1vWWTmx7nRrkjrWyXj6uZfRDNsQC8O7tdYqjHBmhV85gi/3PLEk7nVGMn6y9DFPGZZ1E0JvZR8rHfIyxUod51K1gEoG9Nz22JJY80c4s8KvHMGXe0Is159wKwn6BHL7hJE37+e9FeYFDw4PY3KkMscSuHflbp67LmHWZTRDc2JVQu01xIKFioXdoOXtoAEWJdbw1kisWOiORayhWMQEikVMoFjEhMpihXlV8SuTtqBYxASKRUygWMQEikVMoFjEhObEku/yJc737T75js7G3yA0/axB2x9kKNKiWKkHTrItfdOPYp2PpsXa5qdfKNb5aFwsbVb+7EJSrZdKc10w9SCNVATCYsPeu8wFPbfjDu80eyOWyoenXOSQLlU1CGIDVeji4FFET+ku5memjqvexzI9d/p0KpuvOk2X0EVSFlO7zh6I5V7mf9wO9Cspl0lz9SIjMcLAcIqnOHF+Usc6KS/kuof/Rd2yHadxsZI9Q42eR6w8F9Fwiqe4yPykjnUynnvq+hugabEQp6+9xN2vunSmm0lze4sM4pTLa+gyT3ERpQNyhbnFOJeqBVQyoOfuOi2Kleh+laUlEdVbj0ukxugOFeO4lrxXHk7xjCyC0LPs53aaE4u0AcUiJlAsYgLFIiZQLGICxSImUCxiAsUiJlAsYgLFIiZQLGICxSImUCxiQnNirdSnG9QHAdZj+tGAlj53sB1aFCu2UBybrxbF2ioti3W+dlKsrdL4jpW6mT8TF/YwHAzkRK/3LsNfj2NDi2JFcneSARLmvgrpkKoJuKVSx1XvY5meG31RYXdWzIpMqTQUInSRlMXUntPsjiX9i2bljcGheu0YtDmgMymen9SxTsoLuYTCVXXK9ptmxXKNy1GSzJMzqWrYVJ1J8fykjnUynnt4VZ2yPadhsbp97XYsHZHupppOychSSoe8arFSx7lULaCSAT13z2laLKWNRJG4XQh8zOaCaE4s0gYUi5hAsYgJFIuYQLGICRSLmECxiAkUi5hAsYgJFIuY0IBYn5Om8CZwxyImUCxiAsUiJlAsYgLFIiZQLGICxSImUCxiAsUiJjQn1io+6gCW8mBCi7QoVvApP6JjxYIeqqlOw2LZN55ibc6+iJWf4EsPi+ofv9E/XKzv/oAQZCKuJL8OS+RF3MyxK1koDYslHQxhTiJMWuhWx9hTrs+Oadv0PCElc51zKSV7Ky+UFsVKxC0hbxIOSasGy9FY6Zmuz7FO6jO7JBbJB2NlYeWF0vCOlRmqo8vKYo3X57i4CCKXjH87YmVh5YWyF2JJspfVZdLtwdGJ+hSrZArzYrJIck3dCtOcRbMfYoXeBqTbvTLptyfsJ1P1OQ7TpCBOyD9lJK868uY9nWyJNCfWTiIyLViiEhSrArJz6f2RUKzngPe8KSgWMYFiERMoFjGBYhETKBYxgWIREygWMYFiERMoFjGBYhET2hQrfqwAzPgeXfy0gnwP5lzf0osTTTBd/OJpUKzOt3znyLJxCynW5jQn1uATKus/skKxLoDWxCpohJTvkLQqP5kjlf5emT6Fl3rpgv4v7ZVsIJxh2PviRF2WYhcs+Lf9NihWboJHWuG+6uiBbltoheuUanYIVOP6PdNlvZMVJ+oyPVedNl1YZ1bMyiWm0lCI0EVSFlMtsW87VmhBygkpPwy6McLAsMxTnDg/qWOdlBfyX+X+EWQk1SlriNbEGpqVE6oHG4iV10mTdZmnNPEcSR3rZDx3voaELmuJ5sRyX+r81ZcX8Quve5CLpFn9XvYqXZxyMmFY5ilN1DogV5hbjHOpWkAlA3puSzQoFpCvf0D9A+/2INaMvnkPlSl2BsqE9BxOd0GhONGFHv6230ibYpGdh2IREygWMYFiERMoFjGBYhETKBYxgWIREygWMYFiERMaECv8RljSCN4E7ljEBIpFTKBYxASKRUygWMQEikVMoFjEBIpFTKBYVbl3dJQ/g79oGhVLPXKwO48arOIjFU0+/VCZBsVyUunHWnZjk4BWhyt3MfdWK4rVnFj5GbzdAteFjYq3wkhrYo16pZ+/S7EE8Sdq6Dhsew6/mpsy+DEh3bruufUJBbw+ODyiWIEGxeq0M6H7nGJpdsz24hy6SI5mx0IkJsU6Bw5Fs1SYcIsM04tk/3esQVJvQw5Zr1RZOBcO+czIL3zGrfAwebloWhNr1KyiQ8XkmDGDytKpkMMx/2dIadx7LMynWc2J5fqu94TwfllZIAW+7yVdQpxfOIqVsma3zJuVfriDwl+G/Dlq3aJoUCwgHY9oHzzrfzJHdwXxcawyLZpVllRhR8orqtMslzbFulAgVsErT9g+CcU6L7zRzYNizcff7KjVLCgWMYFiERMoFjGBYhETKBYxgWIREygWMYFiERMoFjGBYhETGhVLfThhp77FEj8Mwe/7NCiWkyp/vmB3PlAgFzb6uYel0ZxYu9u9qY/TLI/WxBr1Cm1N958US7Cdp3RyHeCNsEmxym3TfU4xgpTtxTl0kRzNjoVIbIl1DhyKZqnQo9YkS9ixBsne9uItKlUWzoVDPtN/SqezZPfQMmlNrFGzig4Vk2PGDCpLp0IOx/yfIRXBtNKFLZTmxHINjPcqYUee0gF6jcXToFhAOh7RPngu5ikdIVWrMy2UNsW6UGDPiFckQ7HOidwKF78dzYBizcffPqnVLCgWMYFiERMoFjGBYhETKBYxgWIREygWMYFiERMoFjGBYhETGhVLfThhF77FIpeTvjHdebFYGhTLSZU7txtP6eCiguH88IOjObF2dj/wQmXBFk5rYo16hb6mjqZYgu08pQPEqZd5Fww0KFZ5R9B9TjGClO3FOXSRHM2OhUhMinUOHIreqBC46RnKtYAda5DU25BD1itVFs6FQz5T/F066SjZn/dYJTPKyTFjBpWlUyGHY/7PkBIwRUO92hMrNDG3bnee0pGJVCrQoFhAOh7RPngu7CkdHKFYgTbFulCozxwo1jmRW2He+MgYFGs+/vZJrWZBsYgJFIuYQLGICRSLmECxiAkUi5hAsYgJDYj1OWkKbwJ3LGICxSImUCxiAsUiJlAsYgLFIiZQLGICxSImUCxiQoNiFZ5vmAOm+Q9/pqBLXpYfEq1Aa2LJx4OjT+f7cSCTYolVKSnnmHRrRE2iaE2szXs6IZa21TFIdKFY62lNLGlqr6uuzSv3oIM+5B99ELwi42IVNEJqWOxj/BmZcG/xNCcWCMrEtrpO++7LkYEQ+cd+DA55kkWZ5JouHl+BDGhRLIeza9B7eSHJ4F5EUuNaJIsyyTVdPL4CGdCsWNkH3eaYK7gyocWgOid08cQKpE9rYq2OYkel+a69aHPsc0eIXvMntZDypJaeq5zL6dIKpEtzO5a0N5Ab7n9Un8oBUSIi2WTDiBbDhT0pn3/WSMx16kiH5sQaMiIKuVAoFjGBYhET9kAssos0IBZpC28CxSKV8SZQLFIZb0JlsQjxUCxiwhqxLp18O2dgFUJ6vPCLoxd+/ZeyWOHvc/Lw4UOse3Jy8s477xwdHf2eLBJ0Hw7ABPjw5MmTIIdjQ7EePXp0enp6+/ZtrHvz5k3sh2SBoPtwACacnZ3VEevx48fY/bAibP2ULBV0Hw7ABPjw9OnTIIdjQ7GgJ9aCp9gDsS5ZJug+7l0wAT7UEQurACwH8K6NLBMvgJchmBHZUCxCpqFYxASKRUygWMQEikVMoFjEgG+++T+J07PzEbQ/HAAAAABJRU5ErkJggg=="},18072:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/icon-library-bc268db5fac5bb35d9a614cb110fca01.png"},7616:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/mobile-folder-custom-icons-a975a9d1b38d6e46db0f3aae91994349.png"},29042:(e,t,a)=>{a.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAASCAYAAADYFMcrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAJqSURBVEhLY/z249d/hkEKmKA0TrBxyw6Gzr4pUB5x4OfPn1AW8eAHFj14HTdv0XKGDUDH6WhpQEWIAzt272d48uw5lEcYgNTuBOpBBzgdd+PWHYbDx04yyMvJMLi7OEBFiQP+Ph4M7T2ToDzCAKQWpAcd4Exz+w4eYbh15x5DbEQIAzc3F1SUeLB15x4GcVFRBhMjfYY3b9+BPXsTiEFAXU2FQQOIRYSFGM6cu8jw8vVrBm93F7AcMoA7bvX6zQwnTp1lYGVlZdDX1WIQFRFhuHn7DsOTp88ZXrx8xSAhLsZgYWqE1YfYwINHjxmmzVrA8OHjJ4bfv39DRVEByC4Bfj6GrLQEBgU5WagoAoAdV1heBzaEGBAAdBwhB4JCidRMVF6UAw5NZMAEyo3UdNidu/dJdhgIgPSA9CIDpncfPkKZhIGTvQ2UhR2cvXCJobV7IpRHOgDpBZkBA0yvXr2GMvEDUJDz8vJAedgBqAiBARtLM4b5Mybg1QOSA6kBqYUBZDOY+Ph4oUz8gFC5BfIxcrSAMhIoyXz+/AUqgglAciA1ILUwADIDFnpMfARCAwa+fPnKcODwMSgPE1y4eAXKggBQbgUV4IQASA1ILTKAmcXEw80NZhADFi5dxbBo+WqGt+/eQ0UQAJRDqQVgZjG+fvvhf3NnP8NLItOeu4sjQ0SIP5SHAKDooSYAlQrgcm7P/kMMS1eugwrjBuJiogy1FYUM3Fyk1xjkAHDd6uJox6CtqQ4WwAf8vN3p5jAQgFdfoPpv87ZdDJ8+fwZXJfJA/OXrV4anwJwESrCgooTYqotaAGfFP/CAgQEAcAQISXyoclAAAAAASUVORK5CYII="}}]);