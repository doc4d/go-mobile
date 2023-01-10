"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9005],{32686:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>m});var r=a(87462),o=(a(67294),a(3905));const n={id:"create-static-data-formatter",title:"Create a static formatter"},i=void 0,s={unversionedId:"tutorials/data-formatter/create-static-data-formatter",id:"version-19-R7/tutorials/data-formatter/create-static-data-formatter",title:"Create a static formatter",description:"OBJETIVOS",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R7/tutorials/data-formatter/create-static-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/create-static-data-formatter",permalink:"/go-mobile/pt/docs/19-R7/tutorials/data-formatter/create-static-data-formatter",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R7/tutorials/data-formatter/create-static-formatter.md",tags:[],version:"19-R7",frontMatter:{id:"create-static-data-formatter",title:"Create a static formatter"},sidebar:"tutorials",previous:{title:"Use formatters",permalink:"/go-mobile/pt/docs/19-R7/tutorials/data-formatter/use-data-formatter"},next:{title:"Create Swift formatter",permalink:"/go-mobile/pt/docs/19-R7/tutorials/data-formatter/create-swift-formatter"}},l={},m=[{value:"Baixe o Starter Project",id:"baixe-o-starter-project",level:2},{value:"Crie a pasta formatadores",id:"crie-a-pasta-formatadores",level:2},{value:"Formatadores de inteiros",id:"formatadores-de-inteiros",level:2},{value:"N\xfamero inteiro para string",id:"n\xfamero-inteiro-para-string",level:3},{value:"Inteiro para imagem",id:"inteiro-para-imagem",level:3},{value:"Formatadores de Texto",id:"formatadores-de-texto",level:2},{value:"Texto para string",id:"texto-para-string",level:3},{value:"Texto para Imagem",id:"texto-para-imagem",level:3},{value:"Compatibilidade modo Escuro",id:"compatibilidade-modo-escuro",level:2},{value:"Cor tintado",id:"cor-tintado",level:3},{value:"Imagens a cor otimizadas",id:"imagens-a-cor-otimizadas",level:3},{value:"Abrir projeto m\xf3vel",id:"abrir-projeto-m\xf3vel",level:2},{value:"Construa seu app 4D for iOS",id:"construa-seu-app-4d-for-ios",level:2}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,o.kt)("p",{parentName:"blockquote"},"Create your first formatters.")),(0,o.kt)("p",null,"Neste tutorial, vamos gui\xe1-lo atrav\xe9s da cria\xe7\xe3o de v\xe1rios exemplos de formatador."),(0,o.kt)("h2",{id:"baixe-o-starter-project"},"Baixe o Starter Project"),(0,o.kt)("p",null,"Para come\xe7ar, baixe o ",(0,o.kt)("strong",{parentName:"p"},"Starter Project"),", que inclui:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pastas",(0,o.kt)("strong",{parentName:"li"},"integerToImage_Images")," e ",(0,o.kt)("strong",{parentName:"li"},"textToImage_Images")," que cont\xeam imagens (para usar mais tarde para formatadores que incluem imagens)"),(0,o.kt)("li",{parentName:"ul"},"Um arquivo de ",(0,o.kt)("strong",{parentName:"li"},"Task Management.4dbase")," (com um projeto de app m\xf3vel pronto para usar)")),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/archive/66d7eea49bc3353f73dbf784ee06283b3a332d0b.zip"},"Starter project")),(0,o.kt)("p",null,"Agora voc\xea j\xe1 est\xe1 pronto para criar seus primeiros formatadores!"),(0,o.kt)("h2",{id:"crie-a-pasta-formatadores"},"Crie a pasta formatadores"),(0,o.kt)("p",null,"Primeiro, crie uma pasta ",(0,o.kt)("em",{parentName:"p"},"Task Management.4dbase/Resources/Mobile/formatters "),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter folder",src:a(33395).Z,width:"929",height:"367"})),(0,o.kt)("h2",{id:"formatadores-de-inteiros"},"Formatadores de inteiros"),(0,o.kt)("h3",{id:"n\xfamero-inteiro-para-string"},"N\xfamero inteiro para string"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Crie uma pasta ",(0,o.kt)("strong",{parentName:"li"}," integerToString "),"na pasta formatadores, que voc\xea acabou de criar."),(0,o.kt)("li",{parentName:"ul"},"Em seguida, crie um arquivo ",(0,o.kt)("strong",{parentName:"li"},"manifest.json ")," na pasta ",(0,o.kt)("strong",{parentName:"li"},"integerToString"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter folder",src:a(13838).Z,width:"1130",height:"367"})),(0,o.kt)("p",null,"Vamos olhar o conte\xfado do arquivo de",(0,o.kt)("strong",{parentName:"p"},"manifest.json "),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToString",\n\n   "type": ["integer"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"0":"UX designer","1":"Developer","2":"QA","3":"Product Owner"}\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"nome"),": o nome do formatador"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"tipo"),": o tipo de formatador 4D voc\xea deseja usar"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"binding"),": pode ser ",(0,o.kt)("strong",{parentName:"li"},"texto localizado")," para strings de caracteres ou ",(0,o.kt)("strong",{parentName:"li"},"imageNamed")," para imagens"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"choiceList"),": valores mapeados")),(0,o.kt)("h3",{id:"inteiro-para-imagem"},"Inteiro para imagem"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Crie uma pasta ",(0,o.kt)("strong",{parentName:"p"}," integerToString "),"na pasta  ",(0,o.kt)("strong",{parentName:"p"},"formatadores "),", que voc\xea acabou de criar.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Em seguida, crie um arquivo de",(0,o.kt)("strong",{parentName:"p"},"manifest.json ")," na pasta ",(0,o.kt)("strong",{parentName:"p"},"integerToImage"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter folder",src:a(28106).Z,width:"966",height:"367"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Em seguida, crie uma pasta",(0,o.kt)("strong",{parentName:"li"}," Imagens")," na pasta ",(0,o.kt)("strong",{parentName:"li"},"IntegerToImage"),". Pode adicionar as imagens de ",(0,o.kt)("strong",{parentName:"li"},"IntegerToImage_Images ")," em StarterProject.zip para a nova pasta.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter images",src:a(56002).Z,width:"1119",height:"367"})),(0,o.kt)("p",null,"Vamos olhar o conte\xfado do arquivo de",(0,o.kt)("strong",{parentName:"p"},"manifest.json "),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},\n\n   "assets": {\n      "size": {\n         "width": 40, "height": 40\n      }\n   }\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"nome"),": o nome do formatador"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"tipo"),": o tipo de formatador 4D voc\xea deseja usar"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"binding"),": pode ser ",(0,o.kt)("strong",{parentName:"li"},"texto localizado")," para strings de caracteres ou ",(0,o.kt)("strong",{parentName:"li"},"imageNamed")," para imagens"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"choiceList"),": valores mapeados"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"assets"),": ajusta o tamanho do display (largura e altura)")),(0,o.kt)("h2",{id:"formatadores-de-texto"},"Formatadores de Texto"),(0,o.kt)("h3",{id:"texto-para-string"},"Texto para string"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Crie uma pasta ",(0,o.kt)("strong",{parentName:"p"}," textToString "),"na pasta formatadores, que voc\xea acabou de criar.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Crie um arquivo de ",(0,o.kt)("strong",{parentName:"p"},"manifest.json ")," na pasta ",(0,o.kt)("strong",{parentName:"p"},"textToString"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter folder",src:a(98500).Z,width:"967",height:"367"})),(0,o.kt)("p",null,"Vamos olhar o conte\xfado do arquivo de",(0,o.kt)("strong",{parentName:"p"},"manifest.json "),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToString",\n\n   "type": ["text"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"FRA":"France","MAR":"Morocco","USA":"United States","AUS":"Australia"}\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"nome"),": o nome do formatador"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"tipo"),": o tipo de formatador 4D voc\xea deseja usar"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"binding"),": pode ser ",(0,o.kt)("strong",{parentName:"li"},"texto localizado")," para strings de caracteres ou ",(0,o.kt)("strong",{parentName:"li"},"imageNamed")," para imagens"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"choiceList"),": valores mapeados")),(0,o.kt)("h3",{id:"texto-para-imagem"},"Texto para Imagem"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Crie uma pasta ",(0,o.kt)("strong",{parentName:"p"}," textToImage "),"na pasta formatadores, que voc\xea acabou de criar.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Crie um arquivo de",(0,o.kt)("strong",{parentName:"p"},"manifest.json ")," na pasta ",(0,o.kt)("strong",{parentName:"p"},"textToImage"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter folder",src:a(85220).Z,width:"971",height:"367"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Em seguida, crie um arquivo de",(0,o.kt)("strong",{parentName:"li"}," Imagens")," na pasta ",(0,o.kt)("strong",{parentName:"li"},"textToImage"),". Pode adicionar as imagens de ",(0,o.kt)("strong",{parentName:"li"},"textToImage_Images ")," em StarterProject.zip para a nova pasta.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatter images",src:a(33949).Z,width:"1133",height:"367"})),(0,o.kt)("p",null,"Vamos olhar o conte\xfado do arquivo de",(0,o.kt)("strong",{parentName:"p"},"manifest.json "),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": ["image1.png","image2.png","image3.png"],\n\n   "assets": {\n  "size": {\n   "width": 40, "height": 40\n      }\n   }\n}\n\n')),(0,o.kt)("h2",{id:"compatibilidade-modo-escuro"},"Compatibilidade modo Escuro"),(0,o.kt)("p",null,"Whether your device is in dark or light mode, whether you're working on iOS or Android, you can easily use the custom formatters containing images. As imagens se adaptar\xe3o dependendo do modo de cor do telefone."),(0,o.kt)("h3",{id:"cor-tintado"},"Cor tintado"),(0,o.kt)("p",null,"Para otimizar o contraste de cores em suas imagens branco e preto em seu app dependendo do modo de cor (claro ou escuro) pode estabelecer as imagens da seguinte forma, com a linha de c\xf3digo ",(0,o.kt)("inlineCode",{parentName:"p"},'"tintable": true')," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n   "type": ["text"],\n   "binding": "imageNamed",\n   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},\n   "assets": {\n     "size": 54, \n     "tintable": true\n     }\n}\n')),(0,o.kt)("p",null,"Este \xe9 o resultado nos modos claro e escuro:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Modo Claro"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Modo Escuro"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{alt:"Formatador de dados",src:a(75950).Z,width:"231",height:"500"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{alt:"Formatador de dados",src:a(49995).Z,width:"231",height:"500"}))))),(0,o.kt)("h3",{id:"imagens-a-cor-otimizadas"},"Imagens a cor otimizadas"),(0,o.kt)("p",null,"Para otimizar as imagens de cor que s\xe3o mostradas em sua aplica\xe7\xe3o e adapt\xe1-las a seu modo de cor, necessita ter duas imagens, uma para o modo claro e outra para o modo escuro com o sufixo ",(0,o.kt)("inlineCode",{parentName:"p"},"_dark"),", como abaixo:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Formatador de dados",src:a(31306).Z,width:"1280",height:"720"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n   "type": ["text"],\n   "binding": "imageNamed",\n   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},\n   "assets": {\n     "size": 54\n   }\n}\n')),(0,o.kt)("p",null,"Este \xe9 o resultado nos modos claro e escuro:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Modo Claro"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Modo Escuro"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{alt:"Formatador de dados",src:a(86484).Z,width:"1170",height:"2532"})),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{alt:"Formatador de dados",src:a(42601).Z,width:"1170",height:"2532"}))))),(0,o.kt)("h2",{id:"abrir-projeto-m\xf3vel"},"Abrir projeto m\xf3vel"),(0,o.kt)("p",null,"Open the Task Management.4dbase with 4D and go to File > Open > Mobile Project... to open the ",(0,o.kt)("strong",{parentName:"p"},"Tasks")),(0,o.kt)("p",null,"Agora, v\xe1 para a se\xe7\xe3o ",(0,o.kt)("strong",{parentName:"p"},"Labels & Icons")," no editor de projetos. Todos os formatadores est\xe3o dispon\xedveis para os tipos de campo diferentes que voc\xea definir previamente nos arquivos manifest.json de diferentes  formatadores:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Selecione o formatador de",(0,o.kt)("strong",{parentName:"li"},"integerToString ")," para o ",(0,o.kt)("strong",{parentName:"li"},"campo Job")),(0,o.kt)("li",{parentName:"ul"},"Selecione o formatador de",(0,o.kt)("strong",{parentName:"li"}," textToString")," para o ",(0,o.kt)("strong",{parentName:"li"},"campo Country")),(0,o.kt)("li",{parentName:"ul"},"Selecione o formatador ",(0,o.kt)("strong",{parentName:"li"}," integerToImage")," para o ",(0,o.kt)("strong",{parentName:"li"},"Task Status")),(0,o.kt)("li",{parentName:"ul"},"Selecione o formatador ",(0,o.kt)("strong",{parentName:"li"}," textToImage")," para o ",(0,o.kt)("strong",{parentName:"li"},"Manager"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Text formatter",src:a(57794).Z,width:"1082",height:"994"})),(0,o.kt)("h2",{id:"construa-seu-app-4d-for-ios"},"Construa seu app 4D for iOS"),(0,o.kt)("p",null,"Build your 4D of iOS app and you'll see that your formatter is well applied depending on the credit limit."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Text formatter",src:a(79640).Z,width:"1417",height:"992"})),(0,o.kt)("p",null,"Baixe a pasta do modelo de formatador completo:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/releases/latest/download/tutorial-CustomDataFormatter.zip"},"Baixar")),(0,o.kt)("p",null,"And you're done!"))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(a),g=o,u=c["".concat(l,".").concat(g)]||c[g]||d[g]||n;return a?r.createElement(u,i(i({ref:t},p),{},{components:a})):r.createElement(u,i({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<n;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},31306:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Architecture-9e5ab4ecd6e08492f157b05f20f727c5.jpg"},49995:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dark-bw-68e482439e9dd8b1f54d5329043a8320.png"},42601:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dark-color-f03b8c9fe0da0586276cfbb4119d738f.png"},28106:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/formatter-folder-integertoimage-39a0ceecb09f269914d1bcf37777c2df.png"},13838:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/formatter-folder-integertostring-83d572fe95b8bf945181fbe8fae383e0.png"},85220:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/formatter-folder-textToImage-90f9d914f42c5aa4ee25b5c480b31202.png"},98500:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/formatter-folder-texttostring-a86ce7fb9cec79c633d7142ca0c02c68.png"},33395:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/formatter-folder-4de63acd23f172964362bd2e13501739.png"},56002:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/formatter-images-integertoimage-9048c8448868dc1029cf8c7b990a942a.png"},33949:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/formatter-images-textToImage-2ecef0061028f82c44fd23cdabdab308.png"},79640:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/formatters-final-result-69d799b3a619fb518ea7ef3cbf96c8ee.png"},57794:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/formatters-icons-&-labels-3967beccfbcde91e00b7e6ec1a69abfb.png"},75950:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/light-bw-382eb672557f93f18eb64d0dfa5499d5.png"},86484:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/light-color-5b5a9550d2501be2b5ceb9351a104240.png"}}]);