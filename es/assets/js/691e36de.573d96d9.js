(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4647],{3905:function(t,a,n){"use strict";n.d(a,{Zo:function(){return u},kt:function(){return _}});var e=n(67294);function o(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function r(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function i(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function d(t,a){if(null==t)return{};var n,e,o=function(t,a){if(null==t)return{};var n,e,o={},r=Object.keys(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||(o[n]=t[n]);return o}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=e.createContext({}),p=function(t){var a=e.useContext(l),n=a;return t&&(n="function"==typeof t?t(a):i(i({},a),t)),n},u=function(t){var a=p(t.components);return e.createElement(l.Provider,{value:a},t.children)},c={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},s=e.forwardRef((function(t,a){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),s=p(n),_=o,m=s["".concat(l,".").concat(_)]||s[_]||c[_]||r;return n?e.createElement(m,i(i({ref:a},u),{},{components:n})):e.createElement(m,i({ref:a},u))}));function _(t,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=s;var d={};for(var l in a)hasOwnProperty.call(a,l)&&(d[l]=a[l]);d.originalType=t,d.mdxType="string"==typeof t?t:o,i[1]=d;for(var p=2;p<r;p++)i[p]=n[p];return e.createElement.apply(null,i)}return e.createElement.apply(null,n)}s.displayName="MDXCreateElement"},89418:function(t,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var e=n(22122),o=n(19756),r=(n(67294),n(3905)),i=["components"],d={id:"detail-form-template-layout",title:"Android Layout"},l=void 0,p={unversionedId:"tutorials/creating-detail-forms/detail-form-template-layout",id:"tutorials/creating-detail-forms/detail-form-template-layout",isDocsHomePage:!1,title:"Android Layout",description:"In this section you will see how to create your detail form interface with Android Studio.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorials/creating-detail-forms/detail-form-template-layout.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-layout",permalink:"/go-mobile/es/docs/tutorials/creating-detail-forms/detail-form-template-layout",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/creating-detail-forms/detail-form-template-layout.md",version:"current",frontMatter:{id:"detail-form-template-layout",title:"Android Layout"},sidebar:"tutorials",previous:{title:"iOS Storyboard",permalink:"/go-mobile/es/docs/tutorials/creating-detail-forms/detail-form-template-storyboard"},next:{title:"Instalar una plantilla",permalink:"/go-mobile/es/docs/tutorials/gallery/install-gallery-template"}},u=[{value:"Open the layout file with Android Studio",id:"open-the-layout-file-with-android-studio",children:[]},{value:"What is available in this starter project",id:"what-is-available-in-this-starter-project",children:[]},{value:"Add an Image View",id:"add-an-image-view",children:[]},{value:"C\xf3mo obtener datos en su formulario detallado",id:"c\xf3mo-obtener-datos-en-su-formulario-detallado",children:[{value:"Image View",id:"image-view",children:[]}]},{value:"\xbfQu\xe9 hacer ahora?",id:"\xbfqu\xe9-hacer-ahora",children:[]}],c={toc:u};function s(t){var a=t.components,d=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,e.Z)({},c,d,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this section you will see how to create your detail form interface with Android Studio."),(0,r.kt)("p",null,"Este es el resultado que queremos lograr:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Storyboard custom detailform",src:n(83342).Z})),(0,r.kt)("p",null,"For this template, we're going to add a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Una foto de perfil en el encabezado"),(0,r.kt)("li",{parentName:"ul"},"Un campo a duplicar")),(0,r.kt)("h2",{id:"open-the-layout-file-with-android-studio"},"Open the layout file with Android Studio"),(0,r.kt)("p",null,"The best way to edit or create a template is to :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open Android Studio and create a new empty mobile project clicking on File > New > New Project...")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select the Empty Activity template"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android Studio project creation",src:n(7808).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configure your project and click ",(0,r.kt)("strong",{parentName:"li"},"Finish"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configure Android project",src:n(14299).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy the layout.xml file in app > res > layout dropping it directly on the project layout folder")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Copy layout.xml file",src:n(67800).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You should have that at that point :")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android project",src:n(68673).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on the top right ",(0,r.kt)("strong",{parentName:"li"},"Split")," option to visualize the template preview as well as the xml code.")),(0,r.kt)("p",null,"It's quite empty, so let's add some content!"),(0,r.kt)("h2",{id:"what-is-available-in-this-starter-project"},"What is available in this starter project"),(0,r.kt)("p",null,"For the view to be scrollable, a scrollview is already included in the layout:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'    <androidx.core.widget.NestedScrollView\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"\n        android:fillViewport="true">\n\n')),(0,r.kt)("p",null,"The part that is going to be duplicated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},' <androidx.cardview.widget.CardView\n                android:layout_width="match_parent"\n                android:layout_height="wrap_content"\n                android:layout_gravity="center"\n                android:layout_marginHorizontal="4dp"\n                android:layout_marginVertical="2dp"\n                card_view:cardCornerRadius="4dp">\n\n                <androidx.constraintlayout.widget.ConstraintLayout\n                    android:layout_width="match_parent"\n                    android:layout_height="wrap_content">\n\n                    <TextView\n                        android:id="@+id/__LABEL_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:scrollbars="none"\n                        android:text="__LABEL__"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n                        android:textColor="?colorPrimary"\n                        app:layout_constraintBottom_toTopOf="@+id/__VALUE_ID__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:text="My label" />\n\n                    \x3c!--IF_IS_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS AN IMAGE --\x3e\n                    <ImageView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:contentDescription="Image"\n                        app:imageUrl="__IMAGE__"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__" />\n\n                    \x3c!--END_IF_IS_IMAGE--\x3e\n                    \x3c!--IF_IS_NOT_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS NOT AN IMAGE, THEN IT WILL BE A TEXT VIEW --\x3e\n\n                    <TextView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:scrollbars="none"\n                        android:text="__TEXT__"\n                        android:textAlignment="textStart"\n                        android:textAllCaps="false"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body2"\n                        android:textColor="?colorOnSurface"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__"\n                        tools:text="My field" />\n                    \x3c!--END_IF_IS_NOT_IMAGE--\x3e\n\n                </androidx.constraintlayout.widget.ConstraintLayout>\n\n            </androidx.cardview.widget.CardView>\n')),(0,r.kt)("h2",{id:"add-an-image-view"},"Add an Image View"),(0,r.kt)("p",null,"In order to have a nice Image view display we are going to use a CardView container again. We want to add a nice corner radius to the ImageView to have a better design."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'    <androidx.cardview.widget.CardView\n                    android:id="@+id/cardview"\n                    android:layout_width="match_parent"\n                    android:layout_height="300dp"\n                    android:layout_gravity="center"\n                    android:layout_marginHorizontal="4dp"\n                    android:layout_marginVertical="6dp"\n                    card_view:cardCornerRadius="12dp"\n                    app:layout_constraintEnd_toEndOf="parent"\n                    app:layout_constraintStart_toStartOf="parent"\n                    app:layout_constraintTop_toTopOf="parent">\n                    <ImageView\n                        android:id="@+id/__SPECIFIC_ID_1__"\n                        android:layout_width="match_parent"\n                        android:layout_height="match_parent"\n                        android:contentDescription="Image"\n                        android:scaleType="centerCrop"\n                        app:imageUrl="__IMAGE_1__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:background="@tools:sample/avatars"/>\n                </androidx.cardview.widget.CardView>\n\n')),(0,r.kt)("p",null,"As you can see the ImageView is embedded into the CardView. That allows to add corner radius to it."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},'app:imageUrl="__IMAGE_1__"')," line will allow to bind image value that is situated in position 1 in the svg file that you previously defined."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},'tools:background="@tools:sample/avatars"')," line simply there to display an ImageView placeholder."),(0,r.kt)("p",null,"Here is the full layout code at this stage :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n\n<layout xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    xmlns:card_view="http://schemas.android.com/apk/res-auto"\n    xmlns:tools="http://schemas.android.com/tools"\n    tools:ignore="DuplicateIds,HardcodedText">\n\n    <data>\n\n        \x3c!--ENTITY_VARIABLE--\x3e\n    </data>\n\n    \x3c!-- Generated with detail form template named "Visual Contact" --\x3e\n\n    <androidx.core.widget.NestedScrollView\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"\n        android:fillViewport="true">\n\n        <LinearLayout\n            android:layout_width="match_parent"\n            android:layout_height="match_parent"\n            android:orientation="vertical">\n\n            \x3c!-- START EDITING HERE --\x3e\n\n            <androidx.constraintlayout.widget.ConstraintLayout\n                android:layout_width="match_parent"\n                android:layout_height="wrap_content">\n\n                <androidx.cardview.widget.CardView\n                    android:id="@+id/cardview"\n                    android:layout_width="match_parent"\n                    android:layout_height="300dp"\n                    android:layout_gravity="center"\n                    android:layout_marginHorizontal="4dp"\n                    android:layout_marginVertical="6dp"\n                    card_view:cardCornerRadius="12dp"\n                    app:layout_constraintEnd_toEndOf="parent"\n                    app:layout_constraintStart_toStartOf="parent"\n                    app:layout_constraintTop_toTopOf="parent">\n\n                    <ImageView\n                        android:id="@+id/__SPECIFIC_ID_1__"\n                        android:layout_width="match_parent"\n                        android:layout_height="match_parent"\n                        android:contentDescription="Image"\n                        android:scaleType="centerCrop"\n                        app:imageUrl="__IMAGE_1__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:background="@tools:sample/avatars"/>\n                </androidx.cardview.widget.CardView>\n\n\n            </androidx.constraintlayout.widget.ConstraintLayout>\n\n            \x3c!--\n            THE FOLLOWING PART WILL BE DUPLICATED CARD VIEWS FOR EVERY FIELD\n            YOU DROP AT THE BOTTOM OF THE TEMPLATE\n            --\x3e\n\n            \x3c!--FOR_EACH_FIELD--\x3e\n            \x3c!-- EVERYTHING BELOW WILL BE DUPLICATED FOR EACH FIELD YOU DROP AT THE BOTTOM OF THE\n                 TEMPLATE IN THE PROJECT EDITOR --\x3e\n            <androidx.cardview.widget.CardView\n                android:layout_width="match_parent"\n                android:layout_height="wrap_content"\n                android:layout_gravity="center"\n                android:layout_marginHorizontal="4dp"\n                android:layout_marginVertical="2dp"\n                card_view:cardCornerRadius="4dp">\n\n                <androidx.constraintlayout.widget.ConstraintLayout\n                    android:layout_width="match_parent"\n                    android:layout_height="wrap_content">\n\n                    <TextView\n                        android:id="@+id/__LABEL_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:scrollbars="none"\n                        android:text="__LABEL__"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n                        android:textColor="?colorPrimary"\n                        app:layout_constraintBottom_toTopOf="@+id/__VALUE_ID__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:text="My label" />\n\n                    \x3c!--IF_IS_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS AN IMAGE --\x3e\n                    <ImageView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:contentDescription="Image"\n                        app:imageUrl="__IMAGE__"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__" />\n                    \x3c!--END_IF_IS_IMAGE--\x3e\n                    \x3c!--IF_IS_NOT_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS NOT AN IMAGE, THEN IT WILL BE A TEXT VIEW --\x3e\n\n                    <TextView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:scrollbars="none"\n                        android:text="__TEXT__"\n                        android:textAlignment="textStart"\n                        android:textAllCaps="false"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body2"\n                        android:textColor="?colorOnSurface"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__"\n                        tools:text="My field" />\n                    \x3c!--END_IF_IS_NOT_IMAGE--\x3e\n\n                </androidx.constraintlayout.widget.ConstraintLayout>\n\n            </androidx.cardview.widget.CardView>\n\n            \x3c!--END_FOR_EACH_FIELD--\x3e\n\n        </LinearLayout>\n\n    </androidx.core.widget.NestedScrollView>\n\n</layout>\n\n')),(0,r.kt)("h2",{id:"c\xf3mo-obtener-datos-en-su-formulario-detallado"},"C\xf3mo obtener datos en su formulario detallado"),(0,r.kt)("h3",{id:"image-view"},"Image View"),(0,r.kt)("p",null,"En nuestra plantilla de formulario detallado hemos utilizado ",(0,r.kt)("inlineCode",{parentName:"p"},'app:imageUrl="__IMAGE_1__"')),(0,r.kt)("p",null,"Aqu\xed suponemos que la ImageView es la primera vista del svg, y su ID de vista es ",(0,r.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_1__"),". Si fuera la tercera vista, ser\xeda ",(0,r.kt)("inlineCode",{parentName:"p"},"__IMAGE_3__")," y su ID de vista ser\xeda ",(0,r.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_3__"),"."),(0,r.kt)("h2",{id:"\xbfqu\xe9-hacer-ahora"},"\xbfQu\xe9 hacer ahora?"),(0,r.kt)("p",null,"En este tutorial, hemos cubierto los conceptos b\xe1sicos para crear plantillas de formularios detallados. Ahora puede crear plantillas simples por su cuenta utilizando los recursos del Proyecto Starter. Descargue la carpeta de la plantilla terminada:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDetailForm/releases/latest/download/tutorial-CustomDetailForm.zip"},"Download")))}s.isMDXComponent=!0},68673:function(t,a,n){"use strict";a.Z=n.p+"assets/images/android-project-76fc0d360e0bc11d48b4f623531887a4.png"},14299:function(t,a,n){"use strict";a.Z=n.p+"assets/images/configure-android-project-60eaff20bb8177e8a4048dc2f3924150.png"},67800:function(t,a,n){"use strict";a.Z=n.p+"assets/images/copy-layout-f9f127c542c7b554c463f7a7807f2f09.png"},7808:function(t,a,n){"use strict";a.Z=n.p+"assets/images/template-selection-a3af46be6690c2a62bd9e7ecf5387b6c.png"},83342:function(t,a,n){"use strict";a.Z=n.p+"assets/images/xml-custom-detailform-dae0bd991a35099fdf18ae3f6a488b56.png"}}]);