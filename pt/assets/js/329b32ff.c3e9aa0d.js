(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[290],{3905:function(t,a,n){"use strict";n.d(a,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function e(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function r(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){e(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function d(t,a){if(null==t)return{};var n,o,e=function(t,a){if(null==t)return{};var n,o,e={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||(e[n]=t[n]);return e}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(e[n]=t[n])}return e}var l=o.createContext({}),p=function(t){var a=o.useContext(l),n=a;return t&&(n="function"==typeof t?t(a):i(i({},a),t)),n},u=function(t){var a=p(t.components);return o.createElement(l.Provider,{value:a},t.children)},c={inlineCode:"code",wrapper:function(t){var a=t.children;return o.createElement(o.Fragment,{},a)}},s=o.forwardRef((function(t,a){var n=t.components,e=t.mdxType,r=t.originalType,l=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),s=p(n),m=e,_=s["".concat(l,".").concat(m)]||s[m]||c[m]||r;return n?o.createElement(_,i(i({ref:a},u),{},{components:n})):o.createElement(_,i({ref:a},u))}));function m(t,a){var n=arguments,e=a&&a.mdxType;if("string"==typeof t||e){var r=n.length,i=new Array(r);i[0]=s;var d={};for(var l in a)hasOwnProperty.call(a,l)&&(d[l]=a[l]);d.originalType=t,d.mdxType="string"==typeof t?t:e,i[1]=d;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},50378:function(t,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var o=n(22122),e=n(19756),r=(n(67294),n(3905)),i=["components"],d={id:"detail-form-template-layout",title:"Layout Android"},l=void 0,p={unversionedId:"tutorials/creating-detail-forms/detail-form-template-layout",id:"tutorials/creating-detail-forms/detail-form-template-layout",isDocsHomePage:!1,title:"Layout Android",description:"Nessa se\xe7\xe3o veremos como criar sua interface de formul\xe1rio detallhado com Android Studio.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/tutorials/creating-detail-forms/detail-form-template-layout.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-layout",permalink:"/go-mobile/pt/docs/tutorials/creating-detail-forms/detail-form-template-layout",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/creating-detail-forms/detail-form-template-layout.md",version:"current",frontMatter:{id:"detail-form-template-layout",title:"Layout Android"},sidebar:"tutorials",previous:{title:"iOS Storyboard",permalink:"/go-mobile/pt/docs/tutorials/creating-detail-forms/detail-form-template-storyboard"},next:{title:"Instalar um modelo",permalink:"/go-mobile/pt/docs/tutorials/gallery/install-gallery-template"}},u=[{value:"Abrir um arquivo layout com Android Studio",id:"abrir-um-arquivo-layout-com-android-studio",children:[]},{value:"O que est\xe1 dispon\xedvel no projeto starter",id:"o-que-est\xe1-dispon\xedvel-no-projeto-starter",children:[]},{value:"Adicione uma &quot;Image View&quot;",id:"adicione-uma-image-view",children:[]},{value:"Como obter dados em seus formul\xe1rios detalhe",id:"como-obter-dados-em-seus-formul\xe1rios-detalhe",children:[{value:"Image View",id:"image-view",children:[]}]},{value:"Where to go from here?",id:"where-to-go-from-here",children:[]}],c={toc:u};function s(t){var a=t.components,d=(0,e.Z)(t,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,d,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nessa se\xe7\xe3o veremos como criar sua interface de formul\xe1rio detallhado com Android Studio."),(0,r.kt)("p",null,"Aqui est\xe1 o resultado que queremos atingir:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Storyboard custom detailform",src:n(70966).Z})),(0,r.kt)("p",null,"Para este modelo, vamos adicionar:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Foto de perfil no cabe\xe7alho"),(0,r.kt)("li",{parentName:"ul"},"Um campo a duplicar")),(0,r.kt)("h2",{id:"abrir-um-arquivo-layout-com-android-studio"},"Abrir um arquivo layout com Android Studio"),(0,r.kt)("p",null,"A melhor forma de editar ou criar um modelo \xe9:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Abrir o Studio Android e criar um novo projeto m\xf3vel vazio clicando no Arquivo > New > New Project...")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Selecionar o modelo Empty Activity"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android Studio project creation",src:n(17786).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configure seu projeto e clique em  ",(0,r.kt)("strong",{parentName:"li"},"Finish"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configure Android project",src:n(47416).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copie o arquivo layout.xml no layout app > res > soltando diretamente na pasta de layout de projeto")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Copy layout.xml file",src:n(69968).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nesse ponto deve ter:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android project",src:n(45042).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clique na op\xe7\xe3o direita superior",(0,r.kt)("strong",{parentName:"li"},"Split")," para visualizar a visualiza\xe7\xe3o do modeloassim como c\xf3digo xml.")),(0,r.kt)("p",null,"Est\xe1 vazio, ent\xe3o vamos adicionar conte\xfado!"),(0,r.kt)("h2",{id:"o-que-est\xe1-dispon\xedvel-no-projeto-starter"},"O que est\xe1 dispon\xedvel no projeto starter"),(0,r.kt)("p",null,"Para que a vista seja rol\xe1vel, uma scrollview j\xe1 \xe9 inclu\xedda no layout:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'    <androidx.core.widget.NestedScrollView\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"\n        android:fillViewport="true">\n\n')),(0,r.kt)("p",null,"A parte que vai ser duplicada:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},' <androidx.cardview.widget.CardView\n                android:layout_width="match_parent"\n                android:layout_height="wrap_content"\n                android:layout_gravity="center"\n                android:layout_marginHorizontal="4dp"\n                android:layout_marginVertical="2dp"\n                card_view:cardCornerRadius="4dp">\n\n                <androidx.constraintlayout.widget.ConstraintLayout\n                    android:layout_width="match_parent"\n                    android:layout_height="wrap_content">\n\n                    <TextView\n                        android:id="@+id/__LABEL_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:scrollbars="none"\n                        android:text="__LABEL__"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n                        android:textColor="?colorPrimary"\n                        app:layout_constraintBottom_toTopOf="@+id/__VALUE_ID__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:text="My label" />\n\n                    \x3c!--IF_IS_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS AN IMAGE --\x3e\n                    <ImageView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:contentDescription="Image"\n                        app:imageUrl="__IMAGE__"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__" />\n\n                    \x3c!--END_IF_IS_IMAGE--\x3e\n                    \x3c!--IF_IS_NOT_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS NOT AN IMAGE, THEN IT WILL BE A TEXT VIEW --\x3e\n\n                    <TextView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:scrollbars="none"\n                        android:text="__TEXT__"\n                        android:textAlignment="textStart"\n                        android:textAllCaps="false"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body2"\n                        android:textColor="?colorOnSurface"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__"\n                        tools:text="My field" />\n                    \x3c!--END_IF_IS_NOT_IMAGE--\x3e\n\n                </androidx.constraintlayout.widget.ConstraintLayout>\n\n            </androidx.cardview.widget.CardView>\n')),(0,r.kt)("h2",{id:"adicione-uma-image-view"},'Adicione uma "Image View"'),(0,r.kt)("p",null,"Para ter uma boa exibi\xe7\xe3o de Imagem vamos usar um container CardView. O \xfaltimo passo \xe9 agregar uma borda arredondada para a Image View para ter um melhor design"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'    <androidx.cardview.widget.CardView\n                    android:id="@+id/cardview"\n                    android:layout_width="match_parent"\n                    android:layout_height="300dp"\n                    android:layout_gravity="center"\n                    android:layout_marginHorizontal="4dp"\n                    android:layout_marginVertical="6dp"\n                    card_view:cardCornerRadius="12dp"\n                    app:layout_constraintEnd_toEndOf="parent"\n                    app:layout_constraintStart_toStartOf="parent"\n                    app:layout_constraintTop_toTopOf="parent">\n                    <ImageView\n                        android:id="@+id/__SPECIFIC_ID_1__"\n                        android:layout_width="match_parent"\n                        android:layout_height="match_parent"\n                        android:contentDescription="Image"\n                        android:scaleType="centerCrop"\n                        app:imageUrl="__IMAGE_1__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:background="@tools:sample/avatars"/>\n                </androidx.cardview.widget.CardView>\n\n')),(0,r.kt)("p",null,"Como pode ver ImageView est\xe1 embebido no CardView. Isso permite adicionar bordas arrendondadas."),(0,r.kt)("p",null,"A linha ",(0,r.kt)("inlineCode",{parentName:"p"},'app:imageUrl="__IMAGE_1__"')," permite fixar, bind o valor de imagem que est\xe1 situado na posi\xe7\xe3o 1 do arquivo svg definido previamente."),(0,r.kt)("p",null,"A linha ",(0,r.kt)("inlineCode",{parentName:"p"},'tools:background="@tools:sample/avatars"')," est\xe1 simplesmente para exibir um valor provis\xf3rio para ImageView."),(0,r.kt)("p",null,"Aqui est\xe1 o c\xf3digo de layout completo nesse est\xe1gio:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n\n<layout xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    xmlns:card_view="http://schemas.android.com/apk/res-auto"\n    xmlns:tools="http://schemas.android.com/tools"\n    tools:ignore="DuplicateIds,HardcodedText">\n\n    <data>\n\n        \x3c!--ENTITY_VARIABLE--\x3e\n    </data>\n\n    \x3c!-- Generated with detail form template named "Visual Contact" --\x3e\n\n    <androidx.core.widget.NestedScrollView\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"\n        android:fillViewport="true">\n\n        <LinearLayout\n            android:layout_width="match_parent"\n            android:layout_height="match_parent"\n            android:orientation="vertical">\n\n            \x3c!-- START EDITING HERE --\x3e\n\n            <androidx.constraintlayout.widget.ConstraintLayout\n                android:layout_width="match_parent"\n                android:layout_height="wrap_content">\n\n                <androidx.cardview.widget.CardView\n                    android:id="@+id/cardview"\n                    android:layout_width="match_parent"\n                    android:layout_height="300dp"\n                    android:layout_gravity="center"\n                    android:layout_marginHorizontal="4dp"\n                    android:layout_marginVertical="6dp"\n                    card_view:cardCornerRadius="12dp"\n                    app:layout_constraintEnd_toEndOf="parent"\n                    app:layout_constraintStart_toStartOf="parent"\n                    app:layout_constraintTop_toTopOf="parent">\n\n                    <ImageView\n                        android:id="@+id/__SPECIFIC_ID_1__"\n                        android:layout_width="match_parent"\n                        android:layout_height="match_parent"\n                        android:contentDescription="Image"\n                        android:scaleType="centerCrop"\n                        app:imageUrl="__IMAGE_1__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:background="@tools:sample/avatars"/>\n                </androidx.cardview.widget.CardView>\n\n\n            </androidx.constraintlayout.widget.ConstraintLayout>\n\n            \x3c!--\n            THE FOLLOWING PART WILL BE DUPLICATED CARD VIEWS FOR EVERY FIELD\n            YOU DROP AT THE BOTTOM OF THE TEMPLATE\n            --\x3e\n\n            \x3c!--FOR_EACH_FIELD--\x3e\n            \x3c!-- EVERYTHING BELOW WILL BE DUPLICATED FOR EACH FIELD YOU DROP AT THE BOTTOM OF THE\n                 TEMPLATE IN THE PROJECT EDITOR --\x3e\n            <androidx.cardview.widget.CardView\n                android:layout_width="match_parent"\n                android:layout_height="wrap_content"\n                android:layout_gravity="center"\n                android:layout_marginHorizontal="4dp"\n                android:layout_marginVertical="2dp"\n                card_view:cardCornerRadius="4dp">\n\n                <androidx.constraintlayout.widget.ConstraintLayout\n                    android:layout_width="match_parent"\n                    android:layout_height="wrap_content">\n\n                    <TextView\n                        android:id="@+id/__LABEL_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:scrollbars="none"\n                        android:text="__LABEL__"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n                        android:textColor="?colorPrimary"\n                        app:layout_constraintBottom_toTopOf="@+id/__VALUE_ID__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:text="My label" />\n\n                    \x3c!--IF_IS_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS AN IMAGE --\x3e\n                    <ImageView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:contentDescription="Image"\n                        app:imageUrl="__IMAGE__"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__" />\n                    \x3c!--END_IF_IS_IMAGE--\x3e\n                    \x3c!--IF_IS_NOT_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS NOT AN IMAGE, THEN IT WILL BE A TEXT VIEW --\x3e\n\n                    <TextView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:scrollbars="none"\n                        android:text="__TEXT__"\n                        android:textAlignment="textStart"\n                        android:textAllCaps="false"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body2"\n                        android:textColor="?colorOnSurface"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__"\n                        tools:text="My field" />\n                    \x3c!--END_IF_IS_NOT_IMAGE--\x3e\n\n                </androidx.constraintlayout.widget.ConstraintLayout>\n\n            </androidx.cardview.widget.CardView>\n\n            \x3c!--END_FOR_EACH_FIELD--\x3e\n\n        </LinearLayout>\n\n    </androidx.core.widget.NestedScrollView>\n\n</layout>\n\n')),(0,r.kt)("h2",{id:"como-obter-dados-em-seus-formul\xe1rios-detalhe"},"Como obter dados em seus formul\xe1rios detalhe"),(0,r.kt)("h3",{id:"image-view"},"Image View"),(0,r.kt)("p",null,"Em nosso modelo de formul\xe1rio detalhe usamos ",(0,r.kt)("inlineCode",{parentName:"p"},'app:imageUrl="__IMAGE_1__"')),(0,r.kt)("p",null,"Aqui supomos que a  ImageView seja a primeira vsita no svg, e sua ID de vista \xe9  ",(0,r.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_1__"),". Se fosse a terceira vista, seria ",(0,r.kt)("inlineCode",{parentName:"p"},"__IMAGE_3__")," e sua vista de ID seria ",(0,r.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_3__"),"."),(0,r.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,r.kt)("p",null,"Neste tutorial cobrimos os conceitos b\xe1sicos para criar seu modelo de formul\xe1rio detalhado. Agora pode criar modelos simples usando os recursos do Starter Project. Baixe a pasta do modelo de formatador completo:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDetailForm/releases/latest/download/tutorial-CustomDetailForm.zip"},"Download")))}s.isMDXComponent=!0},45042:function(t,a,n){"use strict";a.Z=n.p+"assets/images/android-project-76fc0d360e0bc11d48b4f623531887a4.png"},47416:function(t,a,n){"use strict";a.Z=n.p+"assets/images/configure-android-project-60eaff20bb8177e8a4048dc2f3924150.png"},69968:function(t,a,n){"use strict";a.Z=n.p+"assets/images/copy-layout-f9f127c542c7b554c463f7a7807f2f09.png"},17786:function(t,a,n){"use strict";a.Z=n.p+"assets/images/template-selection-a3af46be6690c2a62bd9e7ecf5387b6c.png"},70966:function(t,a,n){"use strict";a.Z=n.p+"assets/images/xml-custom-detailform-dae0bd991a35099fdf18ae3f6a488b56.png"}}]);