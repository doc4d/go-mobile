"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5478],{30456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=a(87462),o=(a(67294),a(3905));const r={id:"detail-form-template-storyboard",title:"iOS Storyboard"},n=void 0,s={unversionedId:"tutorials/creating-detail-forms/detail-form-template-storyboard",id:"version-19-R5/tutorials/creating-detail-forms/detail-form-template-storyboard",title:"iOS Storyboard",description:"Agora \xe9 o momento de criar sua interface iOS de formul\xe1rio detalhado com Xcode.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R5/tutorials/creating-detail-forms/detail-form-template-storyboard.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-storyboard",permalink:"/pt/docs/19-R5/tutorials/creating-detail-forms/detail-form-template-storyboard",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/creating-detail-forms/detail-form-template-storyboard.md",tags:[],version:"19-R5",frontMatter:{id:"detail-form-template-storyboard",title:"iOS Storyboard"},sidebar:"tutorials",previous:{title:"Template.svg",permalink:"/pt/docs/19-R5/tutorials/creating-detail-forms/detail-form-template-svg"},next:{title:"Layout Android",permalink:"/pt/docs/19-R5/tutorials/creating-detail-forms/detail-form-template-layout"}},l={},d=[{value:"Abrir o arquivo storyboard com Xcode",id:"abrir-o-arquivo-storyboard-com-xcode",level:2},{value:"Adicione um &quot;Scroll view&quot;",id:"adicione-um-scroll-view",level:2},{value:"Adicionar uma &quot;Vertical Stack View&quot;",id:"adicionar-uma-vertical-stack-view",level:2},{value:"Adicione vistas para o Stack Views",id:"adicione-vistas-para-o-stack-views",level:2},{value:"Adicione uma Image View ao Field View 1.",id:"adicione-uma-image-view-ao-field-view-1",level:2},{value:"Adicione Etiquetas para Field View 2",id:"adicione-etiquetas-para-field-view-2",level:2},{value:"Etiqueta de T\xedtulo",id:"etiqueta-de-t\xedtulo",level:3},{value:"Etiqueta de conte\xfado",id:"etiqueta-de-conte\xfado",level:3},{value:"Como entrar os dados em suas c\xe9lulas",id:"como-entrar-os-dados-em-suas-c\xe9lulas",level:2},{value:"Image View",id:"image-view",level:3},{value:"Etiquetas",id:"etiquetas",level:3},{value:"Adicionar TAGS \xe0s c\xe9lulas a duplicar.",id:"adicionar-tags-\xe0s-c\xe9lulas-a-duplicar",level:2},{value:"Field View 2",id:"field-view-2",level:3},{value:"Primeira etiqueta",id:"primeira-etiqueta",level:3},{value:"Segunda etiqueta",id:"segunda-etiqueta",level:3},{value:"Restri\xe7\xf5es",id:"restri\xe7\xf5es",level:3},{value:"Personalize seu app",id:"personalize-seu-app",level:3},{value:"O que fazer agora?",id:"o-que-fazer-agora",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Agora \xe9 o momento de criar sua interface iOS de formul\xe1rio detalhado com Xcode."),(0,o.kt)("p",null,"Aqui est\xe1 o resultado que queremos atingir:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Storyboard custom detailform",src:a(69218).Z,width:"1377",height:"761"})),(0,o.kt)("p",null,"Para este modelo, vamos adicionar:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Foto de perfil no cabe\xe7alho"),(0,o.kt)("li",{parentName:"ul"},"Um campo a duplicar")),(0,o.kt)("h2",{id:"abrir-o-arquivo-storyboard-com-xcode"},"Abrir o arquivo storyboard com Xcode"),(0,o.kt)("p",null,"Primeiro, abra seu arquivo storyboard em Xcode."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Empty storyboard custom template",src:a(7155).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Est\xe1 vazio, ent\xe3o vamos adicionar conte\xfado!"),(0,o.kt)("h2",{id:"adicione-um-scroll-view"},'Adicione um "Scroll view"'),(0,o.kt)("p",null,'Para que nosso formul\xe1rio detalhado seja rol\xe1vel, o primeiro passo \xe9 arrastar e soltar um "Scroll View" da ',(0,o.kt)("strong",{parentName:"p"},"Biblioteca de Objetos"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Scroll View Storyboard",src:a(30082).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Desde o ",(0,o.kt)("strong",{parentName:"p"},"painel de tamanho")," (do lado direito da janela de Interface Builder), defina o valor de Scroll View em 359 para largura e 667 para altura. Depois estabele\xe7a o valor X para 8 e valor Y para 0."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Scroll View position height and width",src:a(23275).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Depois, adicione quatro restri\xe7\xf5es clicando no bot\xe3o ",(0,o.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 8, Leading: 8, Top: 0, and Bottom: 0) como mostrado abaixo:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Scrollview Constraints",src:a(13974).Z,width:"1164",height:"1092"})),(0,o.kt)("h2",{id:"adicionar-uma-vertical-stack-view"},'Adicionar uma "Vertical Stack View"'),(0,o.kt)("p",null,'Arraste e solte uma "Vertical Stack View" desde a ',(0,o.kt)("strong",{parentName:"p"},"biblioteca de objetos"),' \xe0 "Scroll view". Desde o ',(0,o.kt)("strong",{parentName:"p"},"Size inspector")," (do lado direito do Interface Builder), defina o valor de largura em 359 e o valor de altura em 202. Finalmente, estabele\xe7a o valor X para 0, e o valor Y para 8."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add stackview Storyboard",src:a(2296).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,'J\xe1 que a largura e altura do "Stack View" est\xe3o definidas pelos elementos dentro dele, vamos configurar o tamanho e restri\xe7\xf5es depois.'),(0,o.kt)("h2",{id:"adicione-vistas-para-o-stack-views"},"Adicione vistas para o Stack Views"),(0,o.kt)("p",null,"Arraste e solte uma vista da  ",(0,o.kt)("strong",{parentName:"p"},"biblioteca de objetos")," para o Stack View que acabou de agregar ao storyboard. Vamos chamar de ",(0,o.kt)("strong",{parentName:"p"},"Field View 1"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Field View 1",src:a(29086).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Depois arraste e largue outra vista da ",(0,o.kt)("strong",{parentName:"p"},"Biblioteca de objetos")," diretamente no Document Outline no mesmo n\xedvel que Field View 1 (para integr\xe1-la na Stack View) e cham\xe1-la ",(0,o.kt)("strong",{parentName:"p"},"Field View 2"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Field View 2",src:a(99672).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Para agregar espa\xe7o entre as vistas, selecione seu Stack View e defina o valor de espa\xe7amento em 8 (no Attributes Inspector)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Stackview spacing",src:a(9987).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Selecione ",(0,o.kt)("strong",{parentName:"p"},"Field View 1")," e ",(0,o.kt)("strong",{parentName:"p"},"Field View 2")," e defina, no ",(0,o.kt)("strong",{parentName:"p"},"Size inspector")," (\xe0 direita do Interface Builder), o valor de largura em 359 e de altura em 97."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"views position height and width",src:a(15410).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Selecione ",(0,o.kt)("strong",{parentName:"p"},"Field View 1")," e adicione tr\xeas restri\xe7\xf5es clicando no bot\xe3o ",(0,o.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 0, Leading: 0 e Top: 0):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Field Views constraints",src:a(79924).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,'Para que o "Stock View" tenha a mesma largura que o Scroll View, precisa adicionar uma restri\xe7\xe3o:'),(0,o.kt)("p",null,"Pressione ",(0,o.kt)("strong",{parentName:"p"},"Ctrl"),' e arraste a vista Pilha a vista Deslocamento. Quando soltar o bot\xe3o do mouse, a Interface Builder mostra um menu com uma lista de poss\xedveis restri\xe7\xf5es. Selecione "Equal Width".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Stack View Equal Width",src:a(12911).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Depois, agregue quatro restri\xe7\xf5es com a Stack View  clicando em ",(0,o.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 0, Leading: 0, Top: 8, e Bottom: 0) como mostrado abaixo :"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Stackview constraints",src:a(35632).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Isto \xe9 o que ver\xe1 quando agregar restri\xe7\xf5es:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Stackview final constraints",src:a(47015).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Agora que tem duas vistas em seu Stack View e tiver definido restri\xe7\xf5es, vamos nos concentrar em Field View 1."),(0,o.kt)("h2",{id:"adicione-uma-image-view-ao-field-view-1"},"Adicione uma Image View ao Field View 1."),(0,o.kt)("p",null,"A partir da ",(0,o.kt)("strong",{parentName:"p"},"Object library"),", arraste e solte uma ",(0,o.kt)("strong",{parentName:"p"},"Image View")," em Field View 1."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Image View storyboard",src:a(60170).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Desde o ",(0,o.kt)("strong",{parentName:"p"},"Size inspector")," (do lado direito do Interface Builder), defina o valor da largura do Image View em 359 e sua altura em 97. Depois estabele\xe7a o valor X para 0 e o valor y para 0."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image View position height and width",src:a(71252).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Agora adicione quatro restri\xe7\xf5es clicando no bot\xe3o  ",(0,o.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing:0, Leading:0, Top:0, e Bottom:0) como mostrado abaixo:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image View constraints",src:a(38666).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"No ",(0,o.kt)("strong",{parentName:"p"},"Size inspector")," mude o valor",(0,o.kt)("strong",{parentName:"p"},"Default")," do Tamanho Intr\xednseco por um ",(0,o.kt)("strong",{parentName:"p"},"Placeholder"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Intrinsic size Image View",src:a(44299).Z,width:"1164",height:"1092"})),(0,o.kt)("h2",{id:"adicione-etiquetas-para-field-view-2"},"Adicione Etiquetas para Field View 2"),(0,o.kt)("h3",{id:"etiqueta-de-t\xedtulo"},"Etiqueta de T\xedtulo"),(0,o.kt)("p",null,"Na ",(0,o.kt)("strong",{parentName:"p"},"Biblioteca de Objetos"),", arraste e solte uma  ",(0,o.kt)("strong",{parentName:"p"},"Etiqueta")," em Field View 2 e estabele\xe7a o valor de Largura para 343 e a Altura para 22. Depois estabele\xe7a o valor de X para 8 e Y para 8"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add label",src:a(58601).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,'D\xea duplo clique na etiqueta e coloque o nome "',(0,o.kt)("inlineCode",{parentName:"p"},"___FIELD_LABEL___"),'". Depois no ',(0,o.kt)("strong",{parentName:"p"},"attribute inspector")," selecione a fonte como ",(0,o.kt)("strong",{parentName:"p"},"Helvetica Neue Light 18.0")," e a cor ",(0,o.kt)("strong",{parentName:"p"},"BackgroundColor"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Title label font and color",src:a(76768).Z,width:"1164",height:"1092"})),(0,o.kt)("h3",{id:"etiqueta-de-conte\xfado"},"Etiqueta de conte\xfado"),(0,o.kt)("p",null,"Duplique a etiqueta T\xedtulo e defina a largura  de etiqueta duplicada em 339 e o valor de altura em 44. Depois defina o valor X como 12 e o valor de Y como 37."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add label",src:a(1617).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,'D\xea duplo clique na etiqueta e coloque o nome "',(0,o.kt)("inlineCode",{parentName:"p"},"<___FIELD_LABEL___>"),'". Depois, no ',(0,o.kt)("strong",{parentName:"p"},"attribute inspector"),", selecione a fonte ",(0,o.kt)("strong",{parentName:"p"},"Helvetica Neue Light 20.0")," e a cor ",(0,o.kt)("strong",{parentName:"p"},"Back Color"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Content label font and color",src:a(2925).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Selecione as etiquetas Conte\xfado e T\xedtulo e adicione quatro restri\xe7\xf5es clicando em ",(0,o.kt)("strong",{parentName:"p"},"Add New Constraints button")," (trailing 8, Leading: Multiple, Top: Multiple, e Bottom: Multiple) como mostrado abaixo:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Title and Content labels constraints",src:a(17023).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Terminamos os elementos gr\xe1ficos! Todas as suas restri\xe7\xf5es est\xe3o bem definidas."),(0,o.kt)("h2",{id:"como-entrar-os-dados-em-suas-c\xe9lulas"},"Como entrar os dados em suas c\xe9lulas"),(0,o.kt)("h3",{id:"image-view"},"Image View"),(0,o.kt)("p",null,"Selecione sua Image View e v\xe1 para ",(0,o.kt)("strong",{parentName:"p"},"Identity inspector")," > User Defined Runtime Attributes. Clique no ",(0,o.kt)("strong",{parentName:"p"}," bot\xe3o+")," para adicionar uma linha."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"User defined runtime attributes",src:a(20606).Z,width:"1164",height:"1092"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Key Path"),": comece com bindTo para ativar a uni\xe3o do componente. Introduza ",(0,o.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_1___"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Type"),": siempre ",(0,o.kt)("inlineCode",{parentName:"p"},"String"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Value"),": nome do atributo. Introduza ",(0,o.kt)("inlineCode",{parentName:"p"},"___FIELD_1_BINDING_TYPE___")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Identity inspector storyboard",src:a(31226).Z,width:"1164",height:"1092"})),(0,o.kt)("h3",{id:"etiquetas"},"Etiquetas"),(0,o.kt)("p",null,"Para a ",(0,o.kt)("strong",{parentName:"p"},"primeira etiqueta"),", vamos agregar v\xe1rias linhas principalmente para mostrar \xedcones:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Label1 User Defined Runtime Attributes",src:a(70331).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Tamb\xe9m \xe9 preciso definir a Classe como ",(0,o.kt)("inlineCode",{parentName:"p"},"IconLabel")," e verificar as caixas de sele\xe7\xe3o ",(0,o.kt)("strong",{parentName:"p"},"Inherit Module From Target")," como podemos ver a continua\xe7\xe3o:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Label1 Custom Class",src:a(37506).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Selecione a",(0,o.kt)("strong",{parentName:"p"}," segunda etiqueta")," e adicione uma linha na \xe1rea Defined Runtime Attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD___"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Type"),": siempre ",(0,o.kt)("inlineCode",{parentName:"p"},"String"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Valor"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"___FIELD_BINDING_TYPE___")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Label2 User Defined Runtime Attributes",src:a(84126).Z,width:"1164",height:"1092"})),(0,o.kt)("h2",{id:"adicionar-tags-\xe0s-c\xe9lulas-a-duplicar"},"Adicionar TAGS \xe0s c\xe9lulas a duplicar."),(0,o.kt)("p",null,"Field View 2 inclui elementos que ser\xe3o duplicados para que possa ter tantos campos quantos definir no editor de projeto."),(0,o.kt)("p",null,"Cada elemento de storyboard tem um identificador de Objeto. Por exemplo, se selecionar Field View 2 e for a",(0,o.kt)("strong",{parentName:"p"}," identity Inspector"),", ver\xe1 seus identificadores de objetos:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Object ID Storyboard",src:a(36113).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Para indicar ao editor de projeto que todos os elementos inclu\xeddos na vista ser\xe3o duplicados, precisamos adicionar uma TAG a cada elemento e restri\xe7\xe3o."),(0,o.kt)("p",null,"O processo \xe9 um pouco complicado.... Vamos come\xe7ar abrindo o arquivo Storyboard com seu editor de c\xf3digo favorito"),(0,o.kt)("h3",{id:"field-view-2"},"Field View 2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Selecione ",(0,o.kt)("strong",{parentName:"p"},"Field View 2")," e obtenha seus identificadores de objeto do Identity Inspector (no lado direito da janela de Interface Builder). Em nosso projeto, Field View 2 ID \xe9: ",(0,o.kt)("strong",{parentName:"p"},"SiX-3H-lNB"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pesquise por esta ID no c\xf3digo xml do storyboard e substitua com ",(0,o.kt)("strong",{parentName:"p"},"TAG-FD-001")," toda vez que aparecer. Como pode ver, este ID de objeto \xe9 mencionado v\xe1rias vezes, por isso precisa ser cuidadoso."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Storyboard xml",src:a(38149).Z,width:"922",height:"227"})),(0,o.kt)("p",null,"Salve o arquivo xml storyboard. Como pode ver, o ID de objeto de Field View 2 mudou no seu storyboard em Xcode:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Field View 2 Object ID",src:a(78803).Z,width:"1164",height:"1092"})),(0,o.kt)("h3",{id:"primeira-etiqueta"},"Primeira etiqueta"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Agora, obtenha a ID de objeto ",(0,o.kt)("strong",{parentName:"li"}," primeira etiqueta ")," de Identity Inspector e a substitua por ",(0,o.kt)("strong",{parentName:"li"}," TAG-FD-002 ")," cada vez que apare\xe7a no c\xf3digo xml do storyboard.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Label 1 Object ID",src:a(23001).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Pronto com a primeira etiqueta."),(0,o.kt)("h3",{id:"segunda-etiqueta"},"Segunda etiqueta"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Depois, obtenha a  ID do objeto da ",(0,o.kt)("strong",{parentName:"li"},"segunda etiqueta")," do Identity Inspector e substitua-a com ",(0,o.kt)("strong",{parentName:"li"},"TAG-FD-003")," toda vez que aparecer no c\xf3digo xml do storyboard.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Label 2 Object ID",src:a(53965).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Pronto!"),(0,o.kt)("h3",{id:"restri\xe7\xf5es"},"Restri\xe7\xf5es"),(0,o.kt)("p",null,"Ambas as etiquetas t\xeam restri\xe7\xf5es que tamb\xe9m necessitamos identificar:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tag constraints",src:a(50467).Z,width:"1164",height:"1092"})),(0,o.kt)("p",null,"Do mesmo jeito que com View Field 2 e etiquetas, obtenha todas as ID de Objeto de  ",(0,o.kt)("strong",{parentName:"p"},"7 Constraints")," do  Identity Inspector e substitua-as com: ",(0,o.kt)("strong",{parentName:"p"},"TAG-FD-004"),", ",(0,o.kt)("strong",{parentName:"p"},"TAG-FD-005"),", ",(0,o.kt)("strong",{parentName:"p"},"TAG-FD-006"),", ",(0,o.kt)("strong",{parentName:"p"},"TAG-FD-007"),", ",(0,o.kt)("strong",{parentName:"p"},"TAG-FD-008"),", ",(0,o.kt)("strong",{parentName:"p"},"TAG-FD-009")," e ",(0,o.kt)("strong",{parentName:"p"},"TAG-FD-010"),"."),(0,o.kt)("p",null,"V\xe1 para o editor de projeto e selecione o modelo detalhado na se\xe7\xe3o Formul\xe1rios, e clique em Criar."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom detail template forms",src:a(59312).Z,width:"1072",height:"994"})),(0,o.kt)("p",null,"N\xe3o est\xe1 mal para a primeira tentativa!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iPhone Demo",src:a(19916).Z,width:"1417",height:"907"})),(0,o.kt)("p",null,"Field View 2 foi duplicado Field View 2 foi duplicado Field View 2 foi duplicado Vamos ver se podemos tornar o app um pouco mais interessante!"),(0,o.kt)("h3",{id:"personalize-seu-app"},"Personalize seu app"),(0,o.kt)("p",null,"Vamos adicionar uma borda arredondada \xe0 Imagem View, assim como um Field View 2."),(0,o.kt)("p",null,"Selecione seu Image View e adicione as duas linhas abaixo noa \xe1rea User Defined Runtime Attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Number"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Value"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"12")))),(0,o.kt)("p",null,"e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Value"),": selecione a caixa de op\xe7\xe3o"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iPhone Demo",src:a(68110).Z,width:"1163",height:"1092"})),(0,o.kt)("p",null,"Agora selecione Field View 2 e adicione o abaixo:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Number"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Value"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"12")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iPhone Demo",src:a(26016).Z,width:"1163",height:"1092"})),(0,o.kt)("p",null,"Agora pode construir seu projeto no editor de projetos!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom template final result",src:a(20763).Z,width:"1417",height:"907"})),(0,o.kt)("h2",{id:"o-que-fazer-agora"},"O que fazer agora?"),(0,o.kt)("p",null,"Neste tutorial cobrimos os conceitos b\xe1sicos para criar seu modelo de formul\xe1rio detalhado. Agora pode criar modelos simples usando os recursos do Starter Project."),(0,o.kt)("p",null,"Baixe a pasta do modelo de formatador completo:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-for-mobile/tutorial-CustomDetailForm/releases/latest/download/tutorial-CustomDetailForm.zip"},"Baixar")))}c.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var i=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),u=o,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return a?i.createElement(g,n(n({ref:t},p),{},{components:a})):i.createElement(g,n({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,n=new Array(r);n[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var d=2;d<r;d++)n[d]=a[d];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},60170:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-imageview-storyboard-36f330915569e2a93221ba660b12fc84.png"},58601:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-label1-storyboard-2f01d0c254f4d97ec20d2d367ce9ec7c.png"},1617:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-label2-storyboard-1d6fb91ee892c6a65f5729d5e69f1922.png"},30082:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-scrollview-storyboard-d7dd2eaccc7c0e1d6b6c3f285820a0e2.png"},2296:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-vertical-stackview-storyboard-a77bb45fa7e07b3619466f619b841b77.png"},29086:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-view1-storyboard-68249fe33e687b426e62861ca27ff8aa.png"},99672:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-view2-storyboard-942c491dd7876b288072a8c9434d74a4.png"},2925:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/content-label-font-and-color-9f0854306427144fa1cdb46b3c69516b.png"},59312:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-detail-template-forms-684c7bdb81de3eaeca8c536798cd6eaf.png"},20763:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-template-final-result-d109ed2a561d41dce81b348dccb0f103.png"},50467:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/duplicated-constraints-e5ad96e2db402d7d9ce95a4285aa2034.png"},7155:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/empty-storyboard-custom-detailform-template-6663206b95888c7e8076b79411d1dad0.png"},78803:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/field-view-2-object-id-759b7dbf8ae041559a2f14eddbb125ff.png"},79924:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/fieldView-1-Field-View-2-constraints-b66c9774eeed9b15c785284409b4ccd9.png"},26016:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/fieldview2-corner-radius-c046e0a0aa9c45aeba49938d136f845d.png"},31226:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/identity-inspector-storyboard-da973e42db19cb35ee04896412de0835.png"},38666:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/imageview-constraints-d4d21829a4dcbbc8c329e9f1ceb55c51.png"},68110:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/imageview-corner-radius-6f9074bb95a961c9de553615ef39c9bb.png"},71252:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/imageview-position-height-width-72bfd675675801086b3b20155f2fd2ef.png"},44299:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/intrinsic-size-imageview-06259dc83255bf6351d83b809f7c8195.png"},19916:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/iphone-demo-509341fbe6b31946a3e285a1866fc8d0.png"},37506:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label1-custom-class-cfb751c3fe37927606ba3dbaf73ec1b9.png"},23001:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label1-object-id-eeee639d97b719fd4170fe964594f2ae.png"},70331:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label1-user-defined-runtime-attributes-9262fc5ad84234a215d9f428136af325.png"},53965:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label2-object-id-d52688b0242fd4f68acb10c26a9ed30b.png"},84126:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label2-user-defined-runtime-attributes-e720b43c31f49e75bc6a439759eae1ca.png"},36113:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/object-id-storyboard-a9e935f6d3b13ff7d8b0c025088706a8.png"},13974:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/scrollview-constraints-908908fa94ba80c536f2a29b1132be48.png"},23275:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/scrollview-position-height-width-83ed32ba7d8dcd47f59156425e6dd2be.png"},47015:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/stackview-constraints-final-de9eeaf65adf27f5518a3ee54de1c2d1.png"},35632:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/stackview-constraints-61be8a6fc102ebd539cef110925f845c.png"},12911:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/stackview-equal-width-scrollview-d51d69a40f4b666ff1ce4c157c655bf6.png"},9987:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/stackview-spacing-1f1af4566bed1dce74e795fb62b70a75.png"},69218:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/storyboard-custom-detailform-69ea8fc4d8450ae06e61e29c8d2accdb.png"},38149:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/storyboard-xml-351649fe451c881ec0ee4cecc6b04b6e.png"},76768:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/title-label-font-and-color-2eb7fa3157128aba53a61bd450808e31.png"},17023:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/titlelabel-contentlabel-contraints-3f2e5158dd059a5d55a87a169a376e9c.png"},20606:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/user-defined-runtime-attributes-272f5431507eb1c173d5fed464335378.png"},15410:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/views-position-height-width-storyboard-678bc297732275201501516634843860.png"}}]);