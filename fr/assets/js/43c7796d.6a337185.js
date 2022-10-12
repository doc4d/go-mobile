"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9938],{14059:(t,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var e=n(87462),o=(n(67294),n(3905));const r={id:"detail-form-template-layout",title:"Android Layout"},i=void 0,d={unversionedId:"tutorials/creating-detail-forms/detail-form-template-layout",id:"version-19-R6/tutorials/creating-detail-forms/detail-form-template-layout",title:"Android Layout",description:"In this section you will see how to create your detail form interface with Android Studio.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/tutorials/creating-detail-forms/detail-form-template-layout.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-layout",permalink:"/go-mobile/fr/docs/19-R6/tutorials/creating-detail-forms/detail-form-template-layout",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/creating-detail-forms/detail-form-template-layout.md",tags:[],version:"19-R6",frontMatter:{id:"detail-form-template-layout",title:"Android Layout"},sidebar:"tutorials",previous:{title:"iOS Storyboard",permalink:"/go-mobile/fr/docs/19-R6/tutorials/creating-detail-forms/detail-form-template-storyboard"},next:{title:"Installer un template",permalink:"/go-mobile/fr/docs/19-R6/tutorials/gallery/install-gallery-template"}},l={},p=[{value:"Open the layout file with Android Studio",id:"open-the-layout-file-with-android-studio",level:2},{value:"What is available in this starter project",id:"what-is-available-in-this-starter-project",level:2},{value:"Add an Image View",id:"add-an-image-view",level:2},{value:"How to get data into your detail form",id:"how-to-get-data-into-your-detail-form",level:2},{value:"Image View",id:"image-view",level:3},{value:"Que faire ensuite ?",id:"que-faire-ensuite-",level:2}],u={toc:p};function c(t){let{components:a,...r}=t;return(0,o.kt)("wrapper",(0,e.Z)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section you will see how to create your detail form interface with Android Studio."),(0,o.kt)("p",null,"Voici le r\xe9sultat que nous souhaitons obtenir :"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Storyboard custom detailform",src:n(28500).Z,width:"2654",height:"2014"})),(0,o.kt)("p",null,"For this template, we're going to add a:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Une photo de profil dans l'en-t\xeate"),(0,o.kt)("li",{parentName:"ul"},"Un champ \xe0 dupliquer")),(0,o.kt)("h2",{id:"open-the-layout-file-with-android-studio"},"Open the layout file with Android Studio"),(0,o.kt)("p",null,"The best way to edit or create a template is to :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open Android Studio and create a new empty mobile project clicking on File > New > New Project...")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the Empty Activity template"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Android Studio project creation",src:n(29909).Z,width:"2024",height:"1580"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configure your project and click ",(0,o.kt)("strong",{parentName:"li"},"Finish"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Configure Android project",src:n(15370).Z,width:"2024",height:"1580"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy the layout.xml file in app > res > layout dropping it directly on the project layout folder")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Copy layout.xml file",src:n(25663).Z,width:"1642",height:"610"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You should have that at that point :")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Android project",src:n(43276).Z,width:"2548",height:"1916"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the top right ",(0,o.kt)("strong",{parentName:"li"},"Split")," option to visualize the template preview as well as the xml code.")),(0,o.kt)("p",null,"It's quite empty, so let's add some content!"),(0,o.kt)("h2",{id:"what-is-available-in-this-starter-project"},"What is available in this starter project"),(0,o.kt)("p",null,"For the view to be scrollable, a scrollview is already included in the layout:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'    <androidx.core.widget.NestedScrollView\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"\n        android:fillViewport="true">\n\n')),(0,o.kt)("p",null,"The part that is going to be duplicated:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},' <androidx.cardview.widget.CardView\n                android:layout_width="match_parent"\n                android:layout_height="wrap_content"\n                android:layout_gravity="center"\n                android:layout_marginHorizontal="4dp"\n                android:layout_marginVertical="2dp"\n                card_view:cardCornerRadius="4dp">\n\n                <androidx.constraintlayout.widget.ConstraintLayout\n                    android:layout_width="match_parent"\n                    android:layout_height="wrap_content">\n\n                    <TextView\n                        android:id="@+id/__LABEL_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:scrollbars="none"\n                        android:text="__LABEL__"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n                        android:textColor="?colorPrimary"\n                        app:layout_constraintBottom_toTopOf="@+id/__VALUE_ID__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:text="My label" />\n\n                    \x3c!--IF_IS_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS AN IMAGE --\x3e\n                    <ImageView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:contentDescription="Image"\n                        app:imageUrl="__IMAGE__"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__" />\n\n                    \x3c!--END_IF_IS_IMAGE--\x3e\n                    \x3c!--IF_IS_NOT_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS NOT AN IMAGE, THEN IT WILL BE A TEXT VIEW --\x3e\n\n                    <TextView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:scrollbars="none"\n                        android:text="__TEXT__"\n                        android:textAlignment="textStart"\n                        android:textAllCaps="false"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body2"\n                        android:textColor="?colorOnSurface"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__"\n                        tools:text="My field" />\n                    \x3c!--END_IF_IS_NOT_IMAGE--\x3e\n\n                </androidx.constraintlayout.widget.ConstraintLayout>\n\n            </androidx.cardview.widget.CardView>\n')),(0,o.kt)("h2",{id:"add-an-image-view"},"Add an Image View"),(0,o.kt)("p",null,"In order to have a nice Image view display we are going to use a CardView container again. We want to add a nice corner radius to the ImageView to have a better design."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'    <androidx.cardview.widget.CardView\n                    android:id="@+id/cardview"\n                    android:layout_width="match_parent"\n                    android:layout_height="300dp"\n                    android:layout_gravity="center"\n                    android:layout_marginHorizontal="4dp"\n                    android:layout_marginVertical="6dp"\n                    card_view:cardCornerRadius="12dp"\n                    app:layout_constraintEnd_toEndOf="parent"\n                    app:layout_constraintStart_toStartOf="parent"\n                    app:layout_constraintTop_toTopOf="parent">\n                    <ImageView\n                        android:id="@+id/__SPECIFIC_ID_1__"\n                        android:layout_width="match_parent"\n                        android:layout_height="match_parent"\n                        android:contentDescription="Image"\n                        android:scaleType="centerCrop"\n                        app:imageUrl="__IMAGE_1__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:background="@tools:sample/avatars"/>\n                </androidx.cardview.widget.CardView>\n\n')),(0,o.kt)("p",null,"As you can see the ImageView is embedded into the CardView. That allows to add corner radius to it."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},'app:imageUrl="__IMAGE_1__"')," line will allow to bind image value that is situated in position 1 in the svg file that you previously defined."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},'tools:background="@tools:sample/avatars"')," line simply there to display an ImageView placeholder."),(0,o.kt)("p",null,"Here is the full layout code at this stage :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n\n<layout xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    xmlns:card_view="http://schemas.android.com/apk/res-auto"\n    xmlns:tools="http://schemas.android.com/tools"\n    tools:ignore="DuplicateIds,HardcodedText">\n\n    <data>\n\n        \x3c!--ENTITY_VARIABLE--\x3e\n    </data>\n\n    \x3c!-- Generated with detail form template named "Visual Contact" --\x3e\n\n    <androidx.core.widget.NestedScrollView\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"\n        android:fillViewport="true">\n\n        <LinearLayout\n            android:layout_width="match_parent"\n            android:layout_height="match_parent"\n            android:orientation="vertical">\n\n            \x3c!-- START EDITING HERE --\x3e\n\n            <androidx.constraintlayout.widget.ConstraintLayout\n                android:layout_width="match_parent"\n                android:layout_height="wrap_content">\n\n                <androidx.cardview.widget.CardView\n                    android:id="@+id/cardview"\n                    android:layout_width="match_parent"\n                    android:layout_height="300dp"\n                    android:layout_gravity="center"\n                    android:layout_marginHorizontal="4dp"\n                    android:layout_marginVertical="6dp"\n                    card_view:cardCornerRadius="12dp"\n                    app:layout_constraintEnd_toEndOf="parent"\n                    app:layout_constraintStart_toStartOf="parent"\n                    app:layout_constraintTop_toTopOf="parent">\n\n                    <ImageView\n                        android:id="@+id/__SPECIFIC_ID_1__"\n                        android:layout_width="match_parent"\n                        android:layout_height="match_parent"\n                        android:contentDescription="Image"\n                        android:scaleType="centerCrop"\n                        app:imageUrl="__IMAGE_1__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:background="@tools:sample/avatars"/>\n                </androidx.cardview.widget.CardView>\n\n\n            </androidx.constraintlayout.widget.ConstraintLayout>\n\n            \x3c!--\n            THE FOLLOWING PART WILL BE DUPLICATED CARD VIEWS FOR EVERY FIELD\n            YOU DROP AT THE BOTTOM OF THE TEMPLATE\n            --\x3e\n\n            \x3c!--FOR_EACH_FIELD--\x3e\n            \x3c!-- EVERYTHING BELOW WILL BE DUPLICATED FOR EACH FIELD YOU DROP AT THE BOTTOM OF THE\n                 TEMPLATE IN THE PROJECT EDITOR --\x3e\n            <androidx.cardview.widget.CardView\n                android:layout_width="match_parent"\n                android:layout_height="wrap_content"\n                android:layout_gravity="center"\n                android:layout_marginHorizontal="4dp"\n                android:layout_marginVertical="2dp"\n                card_view:cardCornerRadius="4dp">\n\n                <androidx.constraintlayout.widget.ConstraintLayout\n                    android:layout_width="match_parent"\n                    android:layout_height="wrap_content">\n\n                    <TextView\n                        android:id="@+id/__LABEL_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:scrollbars="none"\n                        android:text="__LABEL__"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n                        android:textColor="?colorPrimary"\n                        app:layout_constraintBottom_toTopOf="@+id/__VALUE_ID__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:text="My label" />\n\n                    \x3c!--IF_IS_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS AN IMAGE --\x3e\n                    <ImageView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:contentDescription="Image"\n                        app:imageUrl="__IMAGE__"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__" />\n                    \x3c!--END_IF_IS_IMAGE--\x3e\n                    \x3c!--IF_IS_NOT_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS NOT AN IMAGE, THEN IT WILL BE A TEXT VIEW --\x3e\n\n                    <TextView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:scrollbars="none"\n                        android:text="__TEXT__"\n                        android:textAlignment="textStart"\n                        android:textAllCaps="false"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body2"\n                        android:textColor="?colorOnSurface"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__"\n                        tools:text="My field" />\n                    \x3c!--END_IF_IS_NOT_IMAGE--\x3e\n\n                </androidx.constraintlayout.widget.ConstraintLayout>\n\n            </androidx.cardview.widget.CardView>\n\n            \x3c!--END_FOR_EACH_FIELD--\x3e\n\n        </LinearLayout>\n\n    </androidx.core.widget.NestedScrollView>\n\n</layout>\n\n')),(0,o.kt)("h2",{id:"how-to-get-data-into-your-detail-form"},"How to get data into your detail form"),(0,o.kt)("h3",{id:"image-view"},"Image View"),(0,o.kt)("p",null,"In our detail form template we used ",(0,o.kt)("inlineCode",{parentName:"p"},'app:imageUrl="__IMAGE_1__"')),(0,o.kt)("p",null,"Here we suppose the ImageView is the first view in the svg, and its view ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_1__"),". If it would be the third view, it would be ",(0,o.kt)("inlineCode",{parentName:"p"},"__IMAGE_3__")," and its view ID would be ",(0,o.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_3__"),"."),(0,o.kt)("h2",{id:"que-faire-ensuite-"},"Que faire ensuite ?"),(0,o.kt)("p",null,"In this tutorial, we've covered the basics for creating detail form templates. You can now create simple templates on your own using the Starter Project resources. Download the completed template folder:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDetailForm/releases/latest/download/tutorial-CustomDetailForm.zip"},"Download")))}c.isMDXComponent=!0},3905:(t,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>s});var e=n(67294);function o(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function r(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function i(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function d(t,a){if(null==t)return{};var n,e,o=function(t,a){if(null==t)return{};var n,e,o={},r=Object.keys(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||(o[n]=t[n]);return o}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=e.createContext({}),p=function(t){var a=e.useContext(l),n=a;return t&&(n="function"==typeof t?t(a):i(i({},a),t)),n},u=function(t){var a=p(t.components);return e.createElement(l.Provider,{value:a},t.children)},c={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},_=e.forwardRef((function(t,a){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),_=p(n),s=o,m=_["".concat(l,".").concat(s)]||_[s]||c[s]||r;return n?e.createElement(m,i(i({ref:a},u),{},{components:n})):e.createElement(m,i({ref:a},u))}));function s(t,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=_;var d={};for(var l in a)hasOwnProperty.call(a,l)&&(d[l]=a[l]);d.originalType=t,d.mdxType="string"==typeof t?t:o,i[1]=d;for(var p=2;p<r;p++)i[p]=n[p];return e.createElement.apply(null,i)}return e.createElement.apply(null,n)}_.displayName="MDXCreateElement"},43276:(t,a,n)=>{n.d(a,{Z:()=>e});const e=n.p+"assets/images/android-project-76fc0d360e0bc11d48b4f623531887a4.png"},15370:(t,a,n)=>{n.d(a,{Z:()=>e});const e=n.p+"assets/images/configure-android-project-60eaff20bb8177e8a4048dc2f3924150.png"},25663:(t,a,n)=>{n.d(a,{Z:()=>e});const e=n.p+"assets/images/copy-layout-f9f127c542c7b554c463f7a7807f2f09.png"},29909:(t,a,n)=>{n.d(a,{Z:()=>e});const e=n.p+"assets/images/template-selection-a3af46be6690c2a62bd9e7ecf5387b6c.png"},28500:(t,a,n)=>{n.d(a,{Z:()=>e});const e=n.p+"assets/images/xml-custom-detailform-dae0bd991a35099fdf18ae3f6a488b56.png"}}]);