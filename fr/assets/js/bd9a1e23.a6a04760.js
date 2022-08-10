"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2515],{45953:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var i=a(87462),l=(a(67294),a(3905));const n={id:"detail-form-template-storyboard",title:"iOS Storyboard"},r=void 0,s={unversionedId:"tutorials/creating-detail-forms/detail-form-template-storyboard",id:"version-19-R6/tutorials/creating-detail-forms/detail-form-template-storyboard",title:"iOS Storyboard",description:"Now it's time to create your iOS detail form interface with Xcode.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/tutorials/creating-detail-forms/detail-form-template-storyboard.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-storyboard",permalink:"/fr/docs/tutorials/creating-detail-forms/detail-form-template-storyboard",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/creating-detail-forms/detail-form-template-storyboard.md",tags:[],version:"19-R6",frontMatter:{id:"detail-form-template-storyboard",title:"iOS Storyboard"},sidebar:"tutorials",previous:{title:"Template.svg",permalink:"/fr/docs/tutorials/creating-detail-forms/detail-form-template-svg"},next:{title:"Android Layout",permalink:"/fr/docs/tutorials/creating-detail-forms/detail-form-template-layout"}},o={},d=[{value:"Ouvrir le fichier storyboard avec Xcode",id:"ouvrir-le-fichier-storyboard-avec-xcode",level:2},{value:"Ajouter une &quot;Scroll View&quot;",id:"ajouter-une-scroll-view",level:2},{value:"Ajouter une &quot;Vertical Stack View&quot;",id:"ajouter-une-vertical-stack-view",level:2},{value:"Ajouter des vues au Stack Views",id:"ajouter-des-vues-au-stack-views",level:2},{value:"Ajoutez une Image View au Field View 1",id:"ajoutez-une-image-view-au-field-view-1",level:2},{value:"Ajouter des libell\xe9s au Field View 2",id:"ajouter-des-libell\xe9s-au-field-view-2",level:2},{value:"Libell\xe9 Titre",id:"libell\xe9-titre",level:3},{value:"Libell\xe9 Contenu",id:"libell\xe9-contenu",level:3},{value:"Comment entrer des donn\xe9es dans vos cellules",id:"comment-entrer-des-donn\xe9es-dans-vos-cellules",level:2},{value:"Image View",id:"image-view",level:3},{value:"Libell\xe9s",id:"libell\xe9s",level:3},{value:"Ajouter des TAGS aux cellules dupliqu\xe9es",id:"ajouter-des-tags-aux-cellules-dupliqu\xe9es",level:2},{value:"Field View 2",id:"field-view-2",level:3},{value:"Premier libell\xe9",id:"premier-libell\xe9",level:3},{value:"Deuxi\xe8me libell\xe9",id:"deuxi\xe8me-libell\xe9",level:3},{value:"Contraintes",id:"contraintes",level:3},{value:"Personnaliser votre application",id:"personnaliser-votre-application",level:3},{value:"Que faire ensuite ?",id:"que-faire-ensuite-",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Now it's time to create your iOS detail form interface with Xcode."),(0,l.kt)("p",null,"Voici le r\xe9sultat que nous souhaitons obtenir :"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Storyboard custom detailform",src:a(15736).Z,width:"1377",height:"761"})),(0,l.kt)("p",null,"For this template, we're going to add a:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Une photo de profil dans l'en-t\xeate"),(0,l.kt)("li",{parentName:"ul"},"Un champ \xe0 dupliquer")),(0,l.kt)("h2",{id:"ouvrir-le-fichier-storyboard-avec-xcode"},"Ouvrir le fichier storyboard avec Xcode"),(0,l.kt)("p",null,"Dans un premier temps, ouvrez votre fichier storyboard dans Xcode."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Empty storyboard custom template",src:a(72013).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"It's quite empty, so let's add some content!"),(0,l.kt)("h2",{id:"ajouter-une-scroll-view"},'Ajouter une "Scroll View"'),(0,l.kt)("p",null,"Pour que notre formulaire d\xe9taill\xe9 soit d\xe9roulant, la premi\xe8re \xe9tape consiste \xe0 faire glisser et d\xe9poser une \xab\xa0Scroll View \xbb (vue de d\xe9filement) depuis la ",(0,l.kt)("strong",{parentName:"p"},"Biblioth\xe8que d'objets"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add Scroll View Storyboard",src:a(68463).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"\xc0 partir du ",(0,l.kt)("strong",{parentName:"p"},"Size inspector")," (sur le c\xf4t\xe9 droit de l\u2019Interface Builder), d\xe9finissez la largeur de la Scroll vue \xe0 359 et la valeur de sa hauteur \xe0 667. D\xe9finissez ensuite la valeur de X sur 8 et la valeur de Y sur 0."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Scroll View position height and width",src:a(96569).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Ajoutez ensuite quatre contraintes en cliquant sur le bouton ",(0,l.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 8, Leading: 8, Top: 0, et Bottom: Multiple) comme suit :"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Scrollview Constraints",src:a(43802).Z,width:"1164",height:"1092"})),(0,l.kt)("h2",{id:"ajouter-une-vertical-stack-view"},'Ajouter une "Vertical Stack View"'),(0,l.kt)("p",null,'Glissez et d\xe9posez une "Vertical Stack View" depuis la ',(0,l.kt)("strong",{parentName:"p"},"biblioth\xe8que d'objets"),' vers la "Scroll view". A partir du ',(0,l.kt)("strong",{parentName:"p"},"Size inspector")," (sur le c\xf4t\xe9 droit de l\u2019Interface Builder), d\xe9finissez ensuite la largeur de la vue sur 359 et sa hauteur sur 202. Enfin, d\xe9finissez la valeur de X sur 0 et la valeur de Y sur 8."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add stackview Storyboard",src:a(30910).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,'La hauteur et la largeur de la "Stack View" \xe9tant d\xe9finies par les \xe9l\xe9ments qu\'elle contient, nous allons configurer les dimensions et les contraintes plus tard.'),(0,l.kt)("h2",{id:"ajouter-des-vues-au-stack-views"},"Ajouter des vues au Stack Views"),(0,l.kt)("p",null,"Glissez et d\xe9posez une vue depuis la ",(0,l.kt)("strong",{parentName:"p"},"biblioth\xe8que d'objets")," vers la Stack View que vous venez d\u2019ajouter \xe0 votre Storyboard. Nommons-la ",(0,l.kt)("strong",{parentName:"p"},"Field View 1"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add Field View 1",src:a(86523).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Faites ensuite glisser directement une autre vue depuis la ",(0,l.kt)("strong",{parentName:"p"},"biblioth\xe8que d'objets"),' et d\xe9posez-la dans le "Document Outline" au m\xeame niveau que Field View 1 (pour l\u2019int\xe9grer \xe0 la Stack View) et nommez-la ',(0,l.kt)("strong",{parentName:"p"},"Field View 2"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add Field View 2",src:a(88414).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,'Pour ajouter des espaces entre les vues, s\xe9lectionnez votre "Stack View" et affectez-lui une valeur d\u2019espacement de 8 (dans l\u2019Attributes Inspector).'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Stackview spacing",src:a(12265).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("strong",{parentName:"p"},"Field View 1")," et ",(0,l.kt)("strong",{parentName:"p"},"Field View 2")," et d\xe9finissez, dans le ",(0,l.kt)("strong",{parentName:"p"},"Size inspector")," (\xe0 droite de l'Interface Builder), la valeur de la largeur sur 359 et celle de la hauteur \xe0 97."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"views position height and width",src:a(76061).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"S\xe9lectionnez ",(0,l.kt)("strong",{parentName:"p"},"Field View 1")," et ajoutez trois contraintes en cliquant sur le bouton ",(0,l.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 0, Leading: 0 et Top: 0) :"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Field Views constraints",src:a(79893).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,'Pour que les "Stack View" et "Scroll View" soient de la m\xeame largeur, vous devez ajouter une contrainte :'),(0,l.kt)("p",null,"Press ",(0,l.kt)("strong",{parentName:"p"},"Ctrl"),' and drag the Stack View to the Scroll View. Lorsque vous rel\xe2chez le bouton de la souris, l\u2019Interface Builder affiche un menu avec une liste de contraintes \xe9ventuelles. S\xe9lectionnez "Equal Width" !'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Stack View Equal Width",src:a(55101).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Ajoutez ensuite quatre contraintes avec la Stack View en cliquant sur le bouton ",(0,l.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 0, Leading: 0, Top: 8, et Bottom: 0) comme suit :"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Stackview constraints",src:a(52992).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Voil\xe0 ce qui s'affichera lorsque les contraintes auront \xe9t\xe9 ajout\xe9es :"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Stackview final constraints",src:a(58327).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Maintenant que vous disposez de deux vues dans votre Stack View et que vous avez d\xe9fini les contraintes, concentrons-nous sur Field View 1."),(0,l.kt)("h2",{id:"ajoutez-une-image-view-au-field-view-1"},"Ajoutez une Image View au Field View 1"),(0,l.kt)("p",null,"\xc0 partir de l'",(0,l.kt)("strong",{parentName:"p"},"Object library")," (la bibilioth\xe8que d'objets), glissez-d\xe9posez une  ",(0,l.kt)("strong",{parentName:"p"},"Image View")," (une vue d'image) dans Field View 1."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add Image View storyboard",src:a(31695).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"\xc0 partir du ",(0,l.kt)("strong",{parentName:"p"},"Size inspector")," (\xe0 droite de l\u2019Interface Builder), d\xe9finissez la largeur de l'Image View sur 359 et sa hauteur sur 97. D\xe9finissez ensuite la valeur de X sur 0 et la valeur de Y sur 0."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image View position height and width",src:a(28548).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Ajoutez ensuite quatre contraintes en cliquant sur le bouton ",(0,l.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 0, Leading: 0, Top: 0, et Bottom: 0) comme suit :"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image View constraints",src:a(57265).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Dans le ",(0,l.kt)("strong",{parentName:"p"},"Size inspector"),", remplacez la valeur ",(0,l.kt)("strong",{parentName:"p"},"Default")," de l'Intrinsic Size par ",(0,l.kt)("strong",{parentName:"p"},"Placeholder"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Intrinsic size Image View",src:a(42143).Z,width:"1164",height:"1092"})),(0,l.kt)("h2",{id:"ajouter-des-libell\xe9s-au-field-view-2"},"Ajouter des libell\xe9s au Field View 2"),(0,l.kt)("h3",{id:"libell\xe9-titre"},"Libell\xe9 Titre"),(0,l.kt)("p",null,"Dans la ",(0,l.kt)("strong",{parentName:"p"},"biblioth\xe8que d'objets"),", glissez-d\xe9posez un ",(0,l.kt)("strong",{parentName:"p"},"Libell\xe9")," dans Field View 2 et d\xe9finissez la largeur sur 342 et la hauteur sur 22. D\xe9finissez ensuite la valeur de X sur 8 et la valeur de Y sur 8."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add label",src:a(74932).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,'Double click on the label and name it "',(0,l.kt)("inlineCode",{parentName:"p"},"___FIELD_LABEL___"),"\". Ensuite, \xe0 partir de l'",(0,l.kt)("strong",{parentName:"p"},"attribute inspector"),", s\xe9lectionnez la police ",(0,l.kt)("strong",{parentName:"p"},"Helvetica Neue Light 18.0")," et la couleur ",(0,l.kt)("strong",{parentName:"p"},"BackgroundColor")," :"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Title label font and color",src:a(65733).Z,width:"1164",height:"1092"})),(0,l.kt)("h3",{id:"libell\xe9-contenu"},"Libell\xe9 Contenu"),(0,l.kt)("p",null,"Dupliquez le libell\xe9 Titre et d\xe9finissez la largeur du libell\xe9 dupliqu\xe9 sur 339 et sa hauteur sur 44. D\xe9finissez ensuite la valeur de X sur 12 et la valeur de Y sur 37."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add label",src:a(70757).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,'Double click on the label and name it "',(0,l.kt)("inlineCode",{parentName:"p"},"<___FIELD_LABEL___>"),"\". Ensuite, \xe0 partir de l'",(0,l.kt)("strong",{parentName:"p"},"attribute inspector"),", s\xe9lectionnez la police ",(0,l.kt)("strong",{parentName:"p"},"Helvetica Neue Light 20.0")," et la couleur ",(0,l.kt)("strong",{parentName:"p"},"Black Color")," :"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Content label font and color",src:a(72980).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"S\xe9lectionnez les deux libell\xe9s Contenu et Titre et ajoutez quatre contraintes en cliquant sur le bouton ",(0,l.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 8, Leading: Multiple, Top: Multiple, et Bottom: Multiple) comme suit :"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Title and Content labels constraints",src:a(13562).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"La partie sur les \xe9l\xe9ments graphiques est termin\xe9e ! All of your constraints are well defined."),(0,l.kt)("h2",{id:"comment-entrer-des-donn\xe9es-dans-vos-cellules"},"Comment entrer des donn\xe9es dans vos cellules"),(0,l.kt)("h3",{id:"image-view"},"Image View"),(0,l.kt)("p",null,"S\xe9lectionnez votre Vue Image, cliquez sur ",(0,l.kt)("strong",{parentName:"p"},"Identity inspector")," et allez dans User Defined Runtime Attributes. Cliquez sur le ",(0,l.kt)("strong",{parentName:"p"},"bouton +")," pour ajouter une ligne."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"User defined runtime attributes",src:a(41).Z,width:"1164",height:"1092"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Key Path"),": Start with bindTo to activate binding on the component. Enter ",(0,l.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_1___"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Type"),": Always ",(0,l.kt)("inlineCode",{parentName:"p"},"String"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Value"),": The attribute name. Enter ",(0,l.kt)("inlineCode",{parentName:"p"},"___FIELD_1_BINDING_TYPE___")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Identity inspector storyboard",src:a(63430).Z,width:"1164",height:"1092"})),(0,l.kt)("h3",{id:"libell\xe9s"},"Libell\xe9s"),(0,l.kt)("p",null,"Pour le ",(0,l.kt)("strong",{parentName:"p"},"premier libell\xe9"),", nous allons ajouter plusieurs lignes, principalement pour afficher des ic\xf4nes :"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Label1 User Defined Runtime Attributes",src:a(87270).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"You also need to set the Class to ",(0,l.kt)("inlineCode",{parentName:"p"},"IconLabel")," and check the ",(0,l.kt)("strong",{parentName:"p"},"Inherit Module From Target")," checkbox as we can see below:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Label1 Custom Class",src:a(45823).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Select the ",(0,l.kt)("strong",{parentName:"p"},"second label")," and add a row in the Defined Runtime Attributes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD___"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"String"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Value"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"___FIELD_BINDING_TYPE___")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Label2 User Defined Runtime Attributes",src:a(23348).Z,width:"1164",height:"1092"})),(0,l.kt)("h2",{id:"ajouter-des-tags-aux-cellules-dupliqu\xe9es"},"Ajouter des TAGS aux cellules dupliqu\xe9es"),(0,l.kt)("p",null,"Field View 2 inclut des \xe9l\xe9ments qui seront dupliqu\xe9s, pour vous permettre d'avoir autant de champs que d'\xe9l\xe9ments d\xe9finis dans l\u2019\xe9diteur de projet."),(0,l.kt)("p",null,"Each storyboard element has an Object ID. For example, if you select Field View 2 and go to the ",(0,l.kt)("strong",{parentName:"p"},"Identity inspector"),", you'll see its Object ID:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Object ID Storyboard",src:a(51135).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Pour informer l'\xe9diteur de projet que tous les \xe9l\xe9ments compris dans cette vue seront dupliqu\xe9s, nous devons ajouter TAG \xe0 chaque \xe9l\xe9ment et \xe0 chaque contrainte."),(0,l.kt)("p",null,"Le processus est un peu d\xe9licat... Nous allons commencer par ouvrir le fichier storyboard avec l'\xe9diteur de code de votre choix !"),(0,l.kt)("h3",{id:"field-view-2"},"Field View 2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"S\xe9lectionnez ",(0,l.kt)("strong",{parentName:"p"},"Field View 2")," et obtenez ses identifiants d'objet \xe0 partir de l'Identity Inspector (\xe0 droite de l'Interface Builder). Dans notre projet, l'identifiant de Field View 2 est le suivant : ",(0,l.kt)("strong",{parentName:"p"},"SiX-3H-lNB"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Recherchez cet identifiant dans le code xml du storyboard et remplacez-le par ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-001")," \xe0 chaque fois qu'il apparait. Soyez prudent, car, comme vous pouvez le voir, l'identifiant de cet objet est mentionn\xe9 plusieurs fois\xa0!"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Storyboard xml",src:a(97791).Z,width:"922",height:"227"})),(0,l.kt)("p",null,"Sauvegardez le fichier xml du storyboard. Comme vous pouvez le voir, l'identifiant d'objet de Field View 2 a \xe9t\xe9 modifi\xe9 dans le storyboard dans Xcode :"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Field View 2 Object ID",src:a(87353).Z,width:"1164",height:"1092"})),(0,l.kt)("h3",{id:"premier-libell\xe9"},"Premier libell\xe9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Obtenez l'identifiant d'objet du ",(0,l.kt)("strong",{parentName:"li"},"premier libell\xe9")," \xe0 partir de l'Identity Inspector et remplacez-le par ",(0,l.kt)("strong",{parentName:"li"},"TAG-FD-002")," chaque fois qu\u2019il appara\xeet dans le code xml du storyboard.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Label 1 Object ID",src:a(67003).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Done with the first label."),(0,l.kt)("h3",{id:"deuxi\xe8me-libell\xe9"},"Deuxi\xe8me libell\xe9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Obtenez ensuite l'identifiant d'objet du ",(0,l.kt)("strong",{parentName:"li"},"deuxi\xe8me libell\xe9")," \xe0 partir de l'Identity Inspector et remplacez-le par ",(0,l.kt)("strong",{parentName:"li"},"TAG-FD-003")," chaque fois qu\u2019il appara\xeet dans le code xml du storyboard.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Label 2 Object ID",src:a(6297).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Et voil\xe0 !"),(0,l.kt)("h3",{id:"contraintes"},"Contraintes"),(0,l.kt)("p",null,"Les deux libell\xe9s contiennent des contraintes que nous devons \xe9galement identifier :"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Tag constraints",src:a(47016).Z,width:"1164",height:"1092"})),(0,l.kt)("p",null,"Tout comme pour View Field 2 et le libell\xe9, obtenez tous les identifiants d'objets des ",(0,l.kt)("strong",{parentName:"p"},"7 Contraintes")," depuis l\u2019Identity Inspector et remplacez-les par\xa0: ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-004"),", ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-005"),", ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-006"),", ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-007"),", ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-008"),", ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-009")," and ",(0,l.kt)("strong",{parentName:"p"},"TAG-FD-010"),"."),(0,l.kt)("p",null,"Ouvrez votre \xe9diteur de projet, s\xe9lectionnez votre mod\xe8le de formulaire d\xe9taill\xe9 depuis la section Formulaires, puis cliquez sur Cr\xe9er & ex\xe9cuter."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Custom detail template forms",src:a(34726).Z,width:"1072",height:"994"})),(0,l.kt)("p",null,"Not bad for a first attempt!"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"iPhone Demo",src:a(6795).Z,width:"1417",height:"907"})),(0,l.kt)("p",null,"Field View 2 a bien \xe9t\xe9 dupliqu\xe9 ! Voyons comment rendre cette application un peu plus int\xe9ressante !"),(0,l.kt)("h3",{id:"personnaliser-votre-application"},"Personnaliser votre application"),(0,l.kt)("p",null,"Nous allons ajouter un bord arrondi \xe0 l'Image View et \xe0 Field View 2."),(0,l.kt)("p",null,"S\xe9lectionnez votre Vue Image et ajoutez les deux lignes suivantes dans la zone User Defined Runtime Attributes :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Number"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Value"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"12")))),(0,l.kt)("p",null,"et"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Boolean"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Value"),": Check the box"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"iPhone Demo",src:a(25698).Z,width:"1163",height:"1092"})),(0,l.kt)("p",null,"S\xe9lectionnez ensuite Field View 2 et ajoutez ce qui suit :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Number"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Value"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"12")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"iPhone Demo",src:a(30697).Z,width:"1163",height:"1092"})),(0,l.kt)("p",null,"Vous pouvez d\xe9sormais cr\xe9er votre projet depuis l'\xe9diteur de projet !"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Custom template final result",src:a(3913).Z,width:"1417",height:"907"})),(0,l.kt)("h2",{id:"que-faire-ensuite-"},"Que faire ensuite ?"),(0,l.kt)("p",null,"In this tutorial, we've covered the basics for creating detail form templates. You can now create simple templates on your own using the Starter project resources."),(0,l.kt)("p",null,"Download the completed template folder:"),(0,l.kt)("div",{className:"center-button"},(0,l.kt)("a",{className:"button button--primary",href:"https://github.com/4d-for-mobile/tutorial-CustomDetailForm/releases/latest/download/tutorial-CustomDetailForm.zip"},"Download")))}p.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var i=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,l=function(e,t){if(null==e)return{};var a,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=i.createContext({}),d=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return i.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=l,g=c["".concat(o,".").concat(m)]||c[m]||p[m]||n;return a?i.createElement(g,r(r({ref:t},u),{},{components:a})):i.createElement(g,r({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var d=2;d<n;d++)r[d]=a[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},31695:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-imageview-storyboard-36f330915569e2a93221ba660b12fc84.png"},74932:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-label1-storyboard-2f01d0c254f4d97ec20d2d367ce9ec7c.png"},70757:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-label2-storyboard-1d6fb91ee892c6a65f5729d5e69f1922.png"},68463:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-scrollview-storyboard-d7dd2eaccc7c0e1d6b6c3f285820a0e2.png"},30910:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-vertical-stackview-storyboard-a77bb45fa7e07b3619466f619b841b77.png"},86523:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-view1-storyboard-68249fe33e687b426e62861ca27ff8aa.png"},88414:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-view2-storyboard-942c491dd7876b288072a8c9434d74a4.png"},72980:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/content-label-font-and-color-9f0854306427144fa1cdb46b3c69516b.png"},34726:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-detail-template-forms-684c7bdb81de3eaeca8c536798cd6eaf.png"},3913:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-template-final-result-d109ed2a561d41dce81b348dccb0f103.png"},47016:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/duplicated-constraints-e5ad96e2db402d7d9ce95a4285aa2034.png"},72013:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/empty-storyboard-custom-detailform-template-6663206b95888c7e8076b79411d1dad0.png"},87353:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/field-view-2-object-id-759b7dbf8ae041559a2f14eddbb125ff.png"},79893:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/fieldView-1-Field-View-2-constraints-b66c9774eeed9b15c785284409b4ccd9.png"},30697:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/fieldview2-corner-radius-c046e0a0aa9c45aeba49938d136f845d.png"},63430:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/identity-inspector-storyboard-da973e42db19cb35ee04896412de0835.png"},57265:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/imageview-constraints-d4d21829a4dcbbc8c329e9f1ceb55c51.png"},25698:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/imageview-corner-radius-6f9074bb95a961c9de553615ef39c9bb.png"},28548:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/imageview-position-height-width-72bfd675675801086b3b20155f2fd2ef.png"},42143:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/intrinsic-size-imageview-06259dc83255bf6351d83b809f7c8195.png"},6795:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/iphone-demo-509341fbe6b31946a3e285a1866fc8d0.png"},45823:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label1-custom-class-cfb751c3fe37927606ba3dbaf73ec1b9.png"},67003:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label1-object-id-eeee639d97b719fd4170fe964594f2ae.png"},87270:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label1-user-defined-runtime-attributes-9262fc5ad84234a215d9f428136af325.png"},6297:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label2-object-id-d52688b0242fd4f68acb10c26a9ed30b.png"},23348:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label2-user-defined-runtime-attributes-e720b43c31f49e75bc6a439759eae1ca.png"},51135:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/object-id-storyboard-a9e935f6d3b13ff7d8b0c025088706a8.png"},43802:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/scrollview-constraints-908908fa94ba80c536f2a29b1132be48.png"},96569:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/scrollview-position-height-width-83ed32ba7d8dcd47f59156425e6dd2be.png"},58327:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/stackview-constraints-final-de9eeaf65adf27f5518a3ee54de1c2d1.png"},52992:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/stackview-constraints-61be8a6fc102ebd539cef110925f845c.png"},55101:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/stackview-equal-width-scrollview-d51d69a40f4b666ff1ce4c157c655bf6.png"},12265:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/stackview-spacing-1f1af4566bed1dce74e795fb62b70a75.png"},15736:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/storyboard-custom-detailform-69ea8fc4d8450ae06e61e29c8d2accdb.png"},97791:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/storyboard-xml-351649fe451c881ec0ee4cecc6b04b6e.png"},65733:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/title-label-font-and-color-2eb7fa3157128aba53a61bd450808e31.png"},13562:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/titlelabel-contentlabel-contraints-3f2e5158dd059a5d55a87a169a376e9c.png"},41:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/user-defined-runtime-attributes-272f5431507eb1c173d5fed464335378.png"},76061:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/views-position-height-width-storyboard-678bc297732275201501516634843860.png"}}]);