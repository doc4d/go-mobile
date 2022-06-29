"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5475],{9530:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(87462),l=(t(67294),t(3905));const r={id:"customize-your-ios-app",title:"Personalizar su aplicaci\xf3n 4D for iOS"},n=void 0,o={unversionedId:"tutorials/customizing-with-xcode/customize-your-ios-app",id:"version-19-R3/tutorials/customizing-with-xcode/customize-your-ios-app",title:"Personalizar su aplicaci\xf3n 4D for iOS",description:"Hagamos algunas modificaciones al storyboard... de simple a complejo.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R3/tutorials/customizing-with-xcode/customize-your-ios-app.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/customize-your-ios-app",permalink:"/go-mobile/es/docs/19-R3/tutorials/customizing-with-xcode/customize-your-ios-app",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/customizing-with-xcode/customize-your-ios-app.md",tags:[],version:"19-R3",frontMatter:{id:"customize-your-ios-app",title:"Personalizar su aplicaci\xf3n 4D for iOS"},sidebar:"version-19-R3/tutorials",previous:{title:"4D for iOS project organization",permalink:"/go-mobile/es/docs/19-R3/tutorials/customizing-with-xcode/4d-for-ios-project-organization"},next:{title:"Seleccionar un Apple Developer Program",permalink:"/go-mobile/es/docs/19-R3/tutorials/developer-program/selecting-your-developer-program"}},s={},c=[{value:"PASO 1. Modificaci\xf3n simple de etiqueta",id:"paso-1-modificaci\xf3n-simple-de-etiqueta",level:2},{value:"PASO 2. Cambiar la posici\xf3n de la foto de perfil",id:"paso-2-cambiar-la-posici\xf3n-de-la-foto-de-perfil",level:2},{value:"PASO 3. Actualizar las limitaciones de foto de perfil",id:"paso-3-actualizar-las-limitaciones-de-foto-de-perfil",level:2},{value:"PASO 4. Actualizar la posici\xf3n y las restricciones de etiquetas",id:"paso-4-actualizar-la-posici\xf3n-y-las-restricciones-de-etiquetas",level:2},{value:"Ahora, vamos a trabajar en la etiqueta de nombre First Name.",id:"ahora-vamos-a-trabajar-en-la-etiqueta-de-nombre-first-name",level:4},{value:"Por \xfaltimo, vamos a trabajar en la etiqueta de nombre Last Name.",id:"por-\xfaltimo-vamos-a-trabajar-en-la-etiqueta-de-nombre-last-name",level:4}],p={toc:c};function d(e){let{components:a,...r}=e;return(0,l.kt)("wrapper",(0,i.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Hagamos algunas modificaciones al storyboard... de simple a complejo."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Resultado final",src:t(37224).Z,width:"1276",height:"1134"})),(0,l.kt)("h2",{id:"paso-1-modificaci\xf3n-simple-de-etiqueta"},"PASO 1. Modificaci\xf3n simple de etiqueta"),(0,l.kt)("p",null,"Comenzaremos por modificar la fuente y el color de una etiqueta:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Abra el archivo ",(0,l.kt)("em",{parentName:"li"},"ContactDetailsForm.storyboard")," desde la pesta\xf1a Navigation."),(0,l.kt)("li",{parentName:"ul"},"Haga clic en la etiqueta de Nombre (tambi\xe9n puede seleccionarla en el generador de interfaces o en el panel izquierdo)."),(0,l.kt)("li",{parentName:"ul"},"Seleccione el panel Attributes inspector (Inspector de atributos) en el \xe1rea Utility (\xe1rea de funcionalidades).")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Attributes inspector",src:t(92450).Z,width:"1117",height:"790"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cambie la fuente de Helvetica Neue Bold a Futura Bold.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Attributes inspector font",src:t(16786).Z,width:"1291",height:"1006"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tambi\xe9n puede cambiar el color de la fuente desde el mismo panel.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Attributes inspector color",src:t(42818).Z,width:"1291",height:"1006"})),(0,l.kt)("h2",{id:"paso-2-cambiar-la-posici\xf3n-de-la-foto-de-perfil"},"PASO 2. Cambiar la posici\xf3n de la foto de perfil"),(0,l.kt)("p",null,"Todas las plantillas de 4D for iOS tienen restricciones de uso para que los elementos de la aplicaci\xf3n se muestren correctamente en todos los dispositivos."),(0,l.kt)("p",null,"En el archivo ",(0,l.kt)("em",{parentName:"p"},"ContactDetailsForm.storyboard"),", las etiquetas First Name, y Last Name est\xe1n todas actualmente alineadas al centro."),(0,l.kt)("p",null,"Vamos a cambiarlo para que se vea as\xed:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Simulator result",src:t(48111).Z,width:"545",height:"964"})),(0,l.kt)("p",null,"En primer lugar, alinee la imagen verticalmente y arrastre las etiquetas First Name y Last Name a la derecha de la imagen."),(0,l.kt)("p",null,"A continuaci\xf3n, seleccione la imagen y vaya al panel de atributos Size desde el \xe1rea Utility. Cambiar el valor de X de 161.67 a 40.67 y el valor de Y de 28 a 79."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Profil picture position",src:t(91676).Z,width:"1072",height:"1034"})),(0,l.kt)("p",null,"Como se puede ver, la posici\xf3n ha cambiado pero Xcode muestra las l\xedneas amarilla... \xbfpor qu\xe9? Estas l\xedneas amarillas representan las restricciones que no son v\xe1lidas."),(0,l.kt)("h2",{id:"paso-3-actualizar-las-limitaciones-de-foto-de-perfil"},"PASO 3. Actualizar las limitaciones de foto de perfil"),(0,l.kt)("p",null,"Para alinear verticalmente la imagen al centro en el Superview (la visiualizaci\xf3n contiene la imagen), tenemos que eliminar las restricciones existentes y a\xf1adir nuevas."),(0,l.kt)("p",null,"La imagen actualmente tiene las restricciones siguientes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Width Equals: un ancho de 78 p\xedxeles."),(0,l.kt)("li",{parentName:"ul"},"Height Equals: una alto de 78 p\xedxeles."),(0,l.kt)("li",{parentName:"ul"},"Align Center X: centra la imagen en un eje horizontal previamente definido."),(0,l.kt)("li",{parentName:"ul"},"Top Space: un espacio entre la parte superior de la imagen hasta la parte superior de la vista."),(0,l.kt)("li",{parentName:"ul"},"Espacio inferior a ",(0,l.kt)("inlineCode",{parentName:"li"},"<First Name>"),": el espacio previamente definido entre la etiqueta del Nombre y la imagen.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Profil picture constraints",src:t(26679).Z,width:"312",height:"397"})),(0,l.kt)("p",null,"Elimine todas las restricciones excepto Width y Height (se modificar\xe1n m\xe1s tarde desde el inspector Size (de tama\xf1o) en la secci\xf3n Constraints (restricciones). El contorno de la imagen debe estar ahora en rojo porque faltan las restricciones."),(0,l.kt)("p",null,"Haga clic en el bot\xf3n Align (en la parte inferior de la ventana Interface Builder) y marque la casilla ",(0,l.kt)("strong",{parentName:"p"},"Vertically in Container"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Profil picture Align",src:t(42097).Z,width:"1072",height:"1034"})),(0,l.kt)("p",null,"A continuaci\xf3n, haga clic en el bot\xf3n ",(0,l.kt)("strong",{parentName:"p"},"Add New Constraints")," y a\xf1ada una nueva restricci\xf3n de espacio principal (la restricci\xf3n de la izquierda)."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Profil picture new constraints",src:t(53008).Z,width:"1072",height:"1034"})),(0,l.kt)("p",null,"En este punto, todas las restricciones de la foto de perfil deben ser azules."),(0,l.kt)("p",null,"\xa1Felicitaciones! \xa1Felicitaciones! \xa1Felicitaciones! Acaba de agregar 2 acciones a su aplicaci\xf3n iOS. \xa1Felicitaciones! Su foto de perfil est\xe1 ahora bien ubicada con las restricciones correctas."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"CONSEJOS")),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Para crear una restricci\xf3n entre dos vistas, presione Ctrl y arrastre una de las vistas a la otra. Cuando suelte el bot\xf3n del rat\xf3n, el Interface Builder muestra un men\xfa con una lista de posibles restricciones.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Puede eliminar las restricciones o seleccionarlas desde el inspector Size o desde el Interface Builder.")))),(0,l.kt)("h2",{id:"paso-4-actualizar-la-posici\xf3n-y-las-restricciones-de-etiquetas"},"PASO 4. Actualizar la posici\xf3n y las restricciones de etiquetas"),(0,l.kt)("h4",{id:"ahora-vamos-a-trabajar-en-la-etiqueta-de-nombre-first-name"},"Ahora, vamos a trabajar en la etiqueta de nombre First Name."),(0,l.kt)("p",null,"Comenzaremos cambiando la posici\xf3n y el ancho:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Seleccione la etiqueta de nombre del Interface Builder."),(0,l.kt)("li",{parentName:"ul"},"A continuaci\xf3n, cambie el ancho de 386 a 267 p\xedxeles."),(0,l.kt)("li",{parentName:"ul"},"Cambie el valor de X de 8 a 127 p\xedxeles y el valor de Y de 28 a 79 p\xedxeles.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"First Name Label position",src:t(97859).Z,width:"1139",height:"1040"})),(0,l.kt)("p",null,"Modifique las restricciones restantes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Elimine las restricciones de leading space y de bottom space desde el inspector de tama\xf1o Size."),(0,l.kt)("li",{parentName:"ul"},"A\xf1ada una restricci\xf3n de leading space haciendo clic en el bot\xf3n ",(0,l.kt)("strong",{parentName:"li"},"Add New Constraints")," para colocar la etiqueta de nombre a la derecha de la foto de perfil."),(0,l.kt)("li",{parentName:"ul"},"Presione la tecla Ctrl y arrastre la etiqueta de nombre a la foto de perfil. Seleccione la restricci\xf3n superior en el men\xfa para alinear ambos elementos en la parte superior.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"First Name Label top constraint",src:t(55032).Z,width:"1139",height:"1040"})),(0,l.kt)("h4",{id:"por-\xfaltimo-vamos-a-trabajar-en-la-etiqueta-de-nombre-last-name"},"Por \xfaltimo, vamos a trabajar en la etiqueta de nombre Last Name."),(0,l.kt)("p",null,"Cambie la posici\xf3n y el ancho:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Seleccione la etiqueta Last Name del Interface Builder."),(0,l.kt)("li",{parentName:"ul"},"Cambie el valor 386 p\xedxeles de ancho por 267 p\xedxeles."),(0,l.kt)("li",{parentName:"ul"},"Cambie el valor de X de 8 a 127 y el valor de Y de 144.33 a 118.33.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Last Name Label position",src:t(77191).Z,width:"1139",height:"1040"})),(0,l.kt)("p",null,"Modifique las restricciones restantes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Elimine las restricciones de leading space desde el inspector de tama\xf1o Size."),(0,l.kt)("li",{parentName:"ul"},"Agregar limitaciones de espacio principal y de espacio superior haciendo clic en el bot\xf3n de agregar nuevas restricciones.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Last Name Label constraint",src:t(94324).Z,width:"1139",height:"1040"})),(0,l.kt)("p",null,"Ahora sus dos etiquetas de nombre son reposicionadas."),(0,l.kt)("p",null,"\xa1Vamos a ver los resultados en el simulador!"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Simulator result",src:t(62270).Z,width:"545",height:"964"})),(0,l.kt)("p",null,"Hmmmm. No es exactamente lo que quer\xedamos..."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Seleccione las etiquetas de First Name y Last Name y cambie la alineaci\xf3n del centro a la izquierda en el inspector de atributos.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Labels Alignment",src:t(61841).Z,width:"1139",height:"1040"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A continuaci\xf3n, seleccione la imagen de perfil y haga doble clic en la restricci\xf3n de leading space."),(0,l.kt)("li",{parentName:"ul"},"Cambie el valor 40.67 p\xedxeles de la constante por 80 p\xedxeles.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Constraints adjustments",src:t(74847).Z,width:"1140",height:"1065"})),(0,l.kt)("p",null,"\xa1Mucho mejor! Ahora todas las restricciones est\xe1n funcionando y las etiquetas no est\xe1n rompiendo otras restricciones."),(0,l.kt)("p",null,"Como puede ver, \xa1Personalizar su aplicaci\xf3n es muy simple!"))}d.isMDXComponent=!0},3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var i=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,i,l=function(e,a){if(null==e)return{};var t,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=i.createContext({}),c=function(e){var a=i.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},p=function(e){var a=c(e.components);return i.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},u=i.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=l,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?i.createElement(f,n(n({ref:a},p),{},{components:t})):i.createElement(f,n({ref:a},p))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,n=new Array(r);n[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,n[1]=o;for(var c=2;c<r;c++)n[c]=t[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},92450:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/Attributes-inspector-Xcode-4D-for-iOS-f340fd4a83c3c2250a0f81455f5a7203.png"},42818:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/Attributes-inspector-color-Xcode-4D-for-iOS-e21d893ce190134448df5e393ba60b8a.png"},16786:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/Attributes-inspector-font-Xcode-4D-for-iOS-59d57a58ae8a261e224e3eaad74446c9.png"},74847:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/Constraints-adjustments-Xcode-4D-for-iOS-8dc49472a1891d4dd26b574c62365f41.png"},97859:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/First-Name-Label-position-Xcode-4D-for-iOS-5cbe6158a70c33967849a75bc651ac3d.png"},55032:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/First-Name-Label-top-constraint-Xcode-4D-for-iOS-e2f98a8f14aa639e46d296c06971f200.png"},61841:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/Labels-Alignment-Xcode-4D-for-iOS-a9e38f0b9f7232c654635a11ed095ea7.png"},94324:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/Last-Name-Label-constraint-Xcode-4D-for-iOS-010bb5c3150ffe7b2d8abeea0d1740c1.png"},77191:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/Last-Name-Label-position-Xcode-4D-for-iOS-0afadb6357c1f471fe6e88495982e3fe.png"},42097:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/Profil-picture-Align-Xcode-4D-for-iOS-53ee2e570cd637a4519f49dae9934ed0.png"},26679:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/Profil-picture-constraints-Xcode-4D-for-iOS-90c8223a67ddd9dec4bc697f4b0f8697.png"},53008:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/Profil-picture-new-constraints-4D-for-iOS-1dcc347bf579a41c8330c3987d302f0e.png"},91676:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/Profil-picture-position-Xcode-4D-for-iOS-67d0fbd9b08ccd484d88e08274bd9f6f.png"},37224:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/Simlator-Before-After-Xcode-4D-for-iOS-0c6f6aea6a2df3bcd86abd46f718cac2.png"},48111:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/Simlator-Final-Xcode-4D-for-iOS-989d65cf9725f55ae7a596dbf23821be.png"},62270:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/Simulator-Xcode-4D-for-iOS-e17f8598fa1241a9c7bf382ef1108795.png"}}]);