"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5642],{42391:(t,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var o=a(87462),e=(a(67294),a(3905));const r={id:"detail-form-template-layout",title:"Android \u30ec\u30a4\u30a2\u30a6\u30c8"},i=void 0,d={unversionedId:"tutorials/creating-detail-forms/detail-form-template-layout",id:"tutorials/creating-detail-forms/detail-form-template-layout",title:"Android \u30ec\u30a4\u30a2\u30a6\u30c8",description:"\u3053\u3053\u3067\u306f\u3001Android Studio \u3092\u4f7f\u7528\u3057\u3066\u30ab\u30b9\u30bf\u30e0\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/creating-detail-forms/detail-form-template-layout.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-layout",permalink:"/go-mobile/ja/docs/next/tutorials/creating-detail-forms/detail-form-template-layout",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/creating-detail-forms/detail-form-template-layout.md",tags:[],version:"current",frontMatter:{id:"detail-form-template-layout",title:"Android \u30ec\u30a4\u30a2\u30a6\u30c8"},sidebar:"tutorials",previous:{title:"iOS \u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9",permalink:"/go-mobile/ja/docs/next/tutorials/creating-detail-forms/detail-form-template-storyboard"},next:{title:"\u30e1\u30fc\u30eb\u8a8d\u8a3c\u306e\u4f8b\u984c",permalink:"/go-mobile/ja/docs/next/tutorials/login-forms/email"}},l={},p=[{value:"\u30ec\u30a4\u30a2\u30a6\u30c8\u30d5\u30a1\u30a4\u30eb\u3092 Android Studio \u3067\u958b\u304f",id:"\u30ec\u30a4\u30a2\u30a6\u30c8\u30d5\u30a1\u30a4\u30eb\u3092-android-studio-\u3067\u958b\u304f",level:2},{value:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u3082\u306e",id:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u3082\u306e",level:2},{value:"Image View \u3092\u8ffd\u52a0\u3059\u308b",id:"image-view-\u3092\u8ffd\u52a0\u3059\u308b",level:2},{value:"\u30bb\u30eb\u3068\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u95a2\u9023\u4ed8\u3051\u308b",id:"\u30bb\u30eb\u3068\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u95a2\u9023\u4ed8\u3051\u308b",level:2},{value:"Image View",id:"image-view",level:3},{value:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f",id:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b",level:2}],_={toc:p};function c(t){let{components:n,...r}=t;return(0,e.kt)("wrapper",(0,o.Z)({},_,r,{components:n,mdxType:"MDXLayout"}),(0,e.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001Android Studio \u3092\u4f7f\u7528\u3057\u3066\u30ab\u30b9\u30bf\u30e0\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,e.kt)("p",null,"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8"),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"\u30ab\u30b9\u30bf\u30e0\u8a73\u7d30\u753b\u9762\u306e\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9",src:a(15168).Z,width:"2654",height:"2014"})),(0,e.kt)("p",null,"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u8868\u793a\u3059\u308b\u6b21\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u30c7\u30b6\u30a4\u30f3\u3057\u307e\u3059:"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u306e\u30d8\u30c3\u30c0\u30fc\u753b\u50cf"),(0,e.kt)("li",{parentName:"ul"},"\u7e70\u308a\u8fd4\u3055\u308c\u308b\u30d5\u30a3\u30fc\u30eb\u30c9")),(0,e.kt)("h2",{id:"\u30ec\u30a4\u30a2\u30a6\u30c8\u30d5\u30a1\u30a4\u30eb\u3092-android-studio-\u3067\u958b\u304f"},"\u30ec\u30a4\u30a2\u30a6\u30c8\u30d5\u30a1\u30a4\u30eb\u3092 Android Studio \u3067\u958b\u304f"),(0,e.kt)("p",null,"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u7de8\u96c6\u30fb\u4f5c\u6210\u306b\u3042\u305f\u3063\u3066\u6700\u9069\u306a\u65b9\u6cd5\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059:"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("p",{parentName:"li"},"Android Studio \u3092\u958b\u304d\u3001File > New > New Project... \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u7a7a\u306e\u30e2\u30d0\u30a4\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u65b0\u898f\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002")),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("p",{parentName:"li"},"Empty Activity \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u9078\u629e\u3057\u307e\u3059\u3002"))),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"Android Studio\u3067\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210",src:a(40734).Z,width:"2024",height:"1580"})),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8a2d\u5b9a\u3092\u304a\u3053\u306a\u3044\u3001",(0,e.kt)("strong",{parentName:"li"},"Finish")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002")),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"Android\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8a2d\u5b9a",src:a(47434).Z,width:"2024",height:"1580"})),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},"app > res > layout \u306b\u3042\u308b layout.xml \u30d5\u30a1\u30a4\u30eb\u3092\u3001Android Studio \u306e\u65b0\u898f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e layout \u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u3001alt\u30ad\u30fc\u3092\u62bc\u3057\u306a\u304c\u3089\u76f4\u63a5\u30c9\u30ed\u30c3\u30d7\u3059\u308b\u3053\u3068\u3067\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002")),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"layout.xml\u30d5\u30a1\u30a4\u30eb\u306e\u30b3\u30d4\u30fc",src:a(7e4).Z,width:"1642",height:"610"})),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},"\u4e0b\u56f3\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044:")),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"Android\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",src:a(82268).Z,width:"2548",height:"1916"})),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},"\u53f3\u4e0a\u306e ",(0,e.kt)("strong",{parentName:"li"},"Split")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u30d7\u30ec\u30d3\u30e5\u30fc\u3068\u540c\u6642\u306b xml \u30b3\u30fc\u30c9\u3082\u8868\u793a\u3055\u308c\u307e\u3059\u3002")),(0,e.kt)("p",null,"\u307b\u3068\u3093\u3069\u767d\u7d19\u306e\u72b6\u614b\u3067\u3059\u3002\u65e9\u901f\u3001\u4e2d\u8eab\u3092\u8ffd\u52a0\u3057\u307e\u3057\u3087\u3046\uff01"),(0,e.kt)("h2",{id:"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u3082\u306e"},"\u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u3082\u306e"),(0,e.kt)("p",null,"\u30d3\u30e5\u30fc\u3092\u30b9\u30af\u30ed\u30fc\u30eb\u53ef\u80fd\u306b\u3059\u308b\u305f\u3081\u3001\u30ec\u30a4\u30a2\u30a6\u30c8\u306b\u306f ScrollView \u304c\u3059\u3067\u306b\u542b\u307e\u308c\u3066\u3044\u307e\u3059:"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-xml"},'    <androidx.core.widget.NestedScrollView\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"\n        android:fillViewport="true">\n\n')),(0,e.kt)("p",null,"\u8907\u88fd\u3055\u308c\u308b\u90e8\u5206:"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-xml"},' <androidx.cardview.widget.CardView\n                android:layout_width="match_parent"\n                android:layout_height="wrap_content"\n                android:layout_gravity="center"\n                android:layout_marginHorizontal="4dp"\n                android:layout_marginVertical="2dp"\n                card_view:cardCornerRadius="4dp">\n\n                <androidx.constraintlayout.widget.ConstraintLayout\n                    android:layout_width="match_parent"\n                    android:layout_height="wrap_content">\n\n                    <TextView\n                        android:id="@+id/__LABEL_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:scrollbars="none"\n                        android:text="__LABEL__"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n                        android:textColor="?colorPrimary"\n                        app:layout_constraintBottom_toTopOf="@+id/__VALUE_ID__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:text="My label" />\n\n                    \x3c!--IF_IS_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS AN IMAGE --\x3e\n                    <ImageView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:contentDescription="Image"\n                        app:imageUrl="__IMAGE__"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__" />\n\n                    \x3c!--END_IF_IS_IMAGE--\x3e\n                    \x3c!--IF_IS_NOT_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS NOT AN IMAGE, THEN IT WILL BE A TEXT VIEW --\x3e\n\n                    <TextView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:scrollbars="none"\n                        android:text="__TEXT__"\n                        android:textAlignment="textStart"\n                        android:textAllCaps="false"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body2"\n                        android:textColor="?colorOnSurface"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__"\n                        tools:text="My field" />\n                    \x3c!--END_IF_IS_NOT_IMAGE--\x3e\n\n                </androidx.constraintlayout.widget.ConstraintLayout>\n\n            </androidx.cardview.widget.CardView>\n')),(0,e.kt)("h2",{id:"image-view-\u3092\u8ffd\u52a0\u3059\u308b"},"Image View \u3092\u8ffd\u52a0\u3059\u308b"),(0,e.kt)("p",null,"ImageView \u3092\u898b\u6804\u3048\u3088\u304f\u8868\u793a\u3059\u308b\u305f\u3081\u3001CardView \u30b3\u30f3\u30c6\u30ca\u3092\u518d\u5ea6\u4f7f\u7528\u3057\u307e\u3059\u3002 ImageView \u306e\u89d2\u306e\u4e38\u307f\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u3066\u3001\u30c7\u30b6\u30a4\u30f3\u306b\u500b\u6027\u3092\u6301\u305f\u305b\u307e\u3057\u3087\u3046\u3002"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-xml"},'    <androidx.cardview.widget.CardView\n                    android:id="@+id/cardview"\n                    android:layout_width="match_parent"\n                    android:layout_height="300dp"\n                    android:layout_gravity="center"\n                    android:layout_marginHorizontal="4dp"\n                    android:layout_marginVertical="6dp"\n                    card_view:cardCornerRadius="12dp"\n                    app:layout_constraintEnd_toEndOf="parent"\n                    app:layout_constraintStart_toStartOf="parent"\n                    app:layout_constraintTop_toTopOf="parent">\n                    <ImageView\n                        android:id="@+id/__SPECIFIC_ID_1__"\n                        android:layout_width="match_parent"\n                        android:layout_height="match_parent"\n                        android:contentDescription="Image"\n                        android:scaleType="centerCrop"\n                        app:imageUrl="__IMAGE_1__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:background="@tools:sample/avatars"/>\n                </androidx.cardview.widget.CardView>\n\n')),(0,e.kt)("p",null,"\u4e0a\u306e\u3068\u304a\u308a\u3001ImageView \u306f CardView \u306b\u57cb\u3081\u8fbc\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u89d2\u306e\u4e38\u307f\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,e.kt)("p",null,(0,e.kt)("inlineCode",{parentName:"p"},'app:imageUrl="__IMAGE_1__"')," \u306e\u884c\u306f\u3001\u5148\u306b\u5b9a\u7fa9\u3057\u305f svg\u30d5\u30a1\u30a4\u30eb\u306e 1\u756a\u76ee\u306e\u4f4d\u7f6e\u306b\u3042\u308b\u30d4\u30af\u30c1\u30e3\u30fc\u5024\u3092\u30d0\u30a4\u30f3\u30c9\u3059\u308b\u305f\u3081\u306e\u3082\u306e\u3067\u3059\u3002"),(0,e.kt)("p",null,(0,e.kt)("inlineCode",{parentName:"p"},'tools:background="@tools:sample/avatars"')," \u306e\u884c\u306f\u3001\u5358\u306b ImageView \u306e\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,e.kt)("p",null,"\u73fe\u6642\u70b9\u3067\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u306e\u30b3\u30fc\u30c9\u306e\u5168\u5bb9\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059:"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n\n<layout xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    xmlns:card_view="http://schemas.android.com/apk/res-auto"\n    xmlns:tools="http://schemas.android.com/tools"\n    tools:ignore="DuplicateIds,HardcodedText">\n\n    <data>\n\n        \x3c!--ENTITY_VARIABLE--\x3e\n    </data>\n\n    \x3c!-- Generated with detail form template named "Visual Contact" --\x3e\n\n    <androidx.core.widget.NestedScrollView\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"\n        android:fillViewport="true">\n\n        <LinearLayout\n            android:layout_width="match_parent"\n            android:layout_height="match_parent"\n            android:orientation="vertical">\n\n            \x3c!-- START EDITING HERE --\x3e\n\n            <androidx.constraintlayout.widget.ConstraintLayout\n                android:layout_width="match_parent"\n                android:layout_height="wrap_content">\n\n                <androidx.cardview.widget.CardView\n                    android:id="@+id/cardview"\n                    android:layout_width="match_parent"\n                    android:layout_height="300dp"\n                    android:layout_gravity="center"\n                    android:layout_marginHorizontal="4dp"\n                    android:layout_marginVertical="6dp"\n                    card_view:cardCornerRadius="12dp"\n                    app:layout_constraintEnd_toEndOf="parent"\n                    app:layout_constraintStart_toStartOf="parent"\n                    app:layout_constraintTop_toTopOf="parent">\n\n                    <ImageView\n                        android:id="@+id/__SPECIFIC_ID_1__"\n                        android:layout_width="match_parent"\n                        android:layout_height="match_parent"\n                        android:contentDescription="Image"\n                        android:scaleType="centerCrop"\n                        app:imageUrl="__IMAGE_1__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:background="@tools:sample/avatars"/>\n                </androidx.cardview.widget.CardView>\n\n\n            </androidx.constraintlayout.widget.ConstraintLayout>\n\n            \x3c!--\n            THE FOLLOWING PART WILL BE DUPLICATED CARD VIEWS FOR EVERY FIELD\n            YOU DROP AT THE BOTTOM OF THE TEMPLATE\n            --\x3e\n\n            \x3c!--FOR_EACH_FIELD--\x3e\n            \x3c!-- EVERYTHING BELOW WILL BE DUPLICATED FOR EACH FIELD YOU DROP AT THE BOTTOM OF THE\n                 TEMPLATE IN THE PROJECT EDITOR --\x3e\n            <androidx.cardview.widget.CardView\n                android:layout_width="match_parent"\n                android:layout_height="wrap_content"\n                android:layout_gravity="center"\n                android:layout_marginHorizontal="4dp"\n                android:layout_marginVertical="2dp"\n                card_view:cardCornerRadius="4dp">\n\n                <androidx.constraintlayout.widget.ConstraintLayout\n                    android:layout_width="match_parent"\n                    android:layout_height="wrap_content">\n\n                    <TextView\n                        android:id="@+id/__LABEL_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:scrollbars="none"\n                        android:text="__LABEL__"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n                        android:textColor="?colorPrimary"\n                        app:layout_constraintBottom_toTopOf="@+id/__VALUE_ID__"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toTopOf="parent"\n                        tools:text="My label" />\n\n                    \x3c!--IF_IS_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS AN IMAGE --\x3e\n                    <ImageView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginTop="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:contentDescription="Image"\n                        app:imageUrl="__IMAGE__"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__" />\n                    \x3c!--END_IF_IS_IMAGE--\x3e\n                    \x3c!--IF_IS_NOT_IMAGE--\x3e\n                    \x3c!-- IF THE DROPPED FIELD IS NOT AN IMAGE, THEN IT WILL BE A TEXT VIEW --\x3e\n\n                    <TextView\n                        android:id="@+id/__VALUE_ID__"\n                        android:layout_width="0dp"\n                        android:layout_height="wrap_content"\n                        android:layout_marginStart="8dp"\n                        android:layout_marginEnd="8dp"\n                        android:layout_marginBottom="8dp"\n                        android:scrollbars="none"\n                        android:text="__TEXT__"\n                        android:textAlignment="textStart"\n                        android:textAllCaps="false"\n                        android:textAppearance="@style/TextAppearance.MaterialComponents.Body2"\n                        android:textColor="?colorOnSurface"\n                        app:layout_constraintBottom_toBottomOf="parent"\n                        app:layout_constraintEnd_toEndOf="parent"\n                        app:layout_constraintStart_toStartOf="parent"\n                        app:layout_constraintTop_toBottomOf="@+id/__LABEL_ID__"\n                        tools:text="My field" />\n                    \x3c!--END_IF_IS_NOT_IMAGE--\x3e\n\n                </androidx.constraintlayout.widget.ConstraintLayout>\n\n            </androidx.cardview.widget.CardView>\n\n            \x3c!--END_FOR_EACH_FIELD--\x3e\n\n        </LinearLayout>\n\n    </androidx.core.widget.NestedScrollView>\n\n</layout>\n\n')),(0,e.kt)("h2",{id:"\u30bb\u30eb\u3068\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u95a2\u9023\u4ed8\u3051\u308b"},"\u30bb\u30eb\u3068\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u95a2\u9023\u4ed8\u3051\u308b"),(0,e.kt)("h3",{id:"image-view"},"Image View"),(0,e.kt)("p",null,"\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067\u306f\u3001",(0,e.kt)("inlineCode",{parentName:"p"},'app:imageUrl="__IMAGE_1__"')," \u3092\u4f7f\u7528\u3057\u307e\u3057\u305f\u3002"),(0,e.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001ImageView \u304c svg \u306e\u6700\u521d\u306e\u30d3\u30e5\u30fc\u3067\u3042\u308a\u3001\u305d\u306e\u30d3\u30e5\u30fcID \u304c ",(0,e.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_1__")," \u3067\u3042\u308b\u3068\u4eee\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002 3\u756a\u76ee\u306e\u30d3\u30e5\u30fc\u3067\u3042\u308c\u3070\u3001",(0,e.kt)("inlineCode",{parentName:"p"},"__IMAGE_3__")," \u3001\u5bfe\u5fdc\u3059\u308b\u30d3\u30e5\u30fcID \u306f ",(0,e.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_3__")," \u3068\u306a\u308a\u307e\u3059\u3002"),(0,e.kt)("h2",{id:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b"},"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f"),(0,e.kt)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u306e\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002 \u30b9\u30bf\u30fc\u30bf\u30fc\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u53c2\u8003\u306b\u3001\u30b7\u30f3\u30d7\u30eb\u306a\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u7c21\u5358\u306b\u81ea\u4f5c\u3067\u304d\u308b\u3001\u3068\u3044\u3046\u624b\u5fdc\u3048\u304c\u5f97\u3089\u308c\u305f\u306e\u3067\u306f\u306a\u3044\u3067\u3057\u3087\u3046\u304b\u3002 \u5b8c\u6210\u3057\u305f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u5165\u308a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8:"),(0,e.kt)("div",{className:"center-button"},(0,e.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDetailForm/releases/latest/download/tutorial-CustomDetailForm.zip"},"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9")))}c.isMDXComponent=!0},3905:(t,n,a)=>{a.d(n,{Zo:()=>_,kt:()=>s});var o=a(67294);function e(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function r(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,o)}return a}function i(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){e(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function d(t,n){if(null==t)return{};var a,o,e=function(t,n){if(null==t)return{};var a,o,e={},r=Object.keys(t);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(e[a]=t[a]);return e}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(e[a]=t[a])}return e}var l=o.createContext({}),p=function(t){var n=o.useContext(l),a=n;return t&&(a="function"==typeof t?t(n):i(i({},n),t)),a},_=function(t){var n=p(t.components);return o.createElement(l.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(t,n){var a=t.components,e=t.mdxType,r=t.originalType,l=t.parentName,_=d(t,["components","mdxType","originalType","parentName"]),u=p(a),s=e,m=u["".concat(l,".").concat(s)]||u[s]||c[s]||r;return a?o.createElement(m,i(i({ref:n},_),{},{components:a})):o.createElement(m,i({ref:n},_))}));function s(t,n){var a=arguments,e=n&&n.mdxType;if("string"==typeof t||e){var r=a.length,i=new Array(r);i[0]=u;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=t,d.mdxType="string"==typeof t?t:e,i[1]=d;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},82268:(t,n,a)=>{a.d(n,{Z:()=>o});const o=a.p+"assets/images/android-project-76fc0d360e0bc11d48b4f623531887a4.png"},47434:(t,n,a)=>{a.d(n,{Z:()=>o});const o=a.p+"assets/images/configure-android-project-60eaff20bb8177e8a4048dc2f3924150.png"},7e4:(t,n,a)=>{a.d(n,{Z:()=>o});const o=a.p+"assets/images/copy-layout-f9f127c542c7b554c463f7a7807f2f09.png"},40734:(t,n,a)=>{a.d(n,{Z:()=>o});const o=a.p+"assets/images/template-selection-a3af46be6690c2a62bd9e7ecf5387b6c.png"},15168:(t,n,a)=>{a.d(n,{Z:()=>o});const o=a.p+"assets/images/xml-custom-detailform-dae0bd991a35099fdf18ae3f6a488b56.png"}}]);