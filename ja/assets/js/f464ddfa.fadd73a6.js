"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3616],{54461:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const i={id:"list-form-layout",title:"Android Layout"},r=void 0,d={unversionedId:"tutorials/creating-list-forms/list-form-layout",id:"version-19-R5/tutorials/creating-list-forms/list-form-layout",title:"Android Layout",description:"In this section you will see how to create your Android list form interface with Android Studio.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R5/tutorials/creating-list-forms/list-form-layout.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-layout",permalink:"/ja/docs/19-R5/tutorials/creating-list-forms/list-form-layout",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/creating-list-forms/list-form-layout.md",tags:[],version:"19-R5",frontMatter:{id:"list-form-layout",title:"Android Layout"},sidebar:"tutorials",previous:{title:"iOS Storyboard",permalink:"/ja/docs/19-R5/tutorials/creating-list-forms/list-form-storyboard"},next:{title:"Detail form templates",permalink:"/ja/docs/19-R5/tutorials/creating-detail-forms/detail-form-template"}},l={},p=[{value:"Open the layout file with Android Studio",id:"open-the-layout-file-with-android-studio",level:2},{value:"Add a CardView container",id:"add-a-cardview-container",level:2},{value:"Add an ImageView",id:"add-an-imageview",level:2},{value:"Add a title",id:"add-a-title",level:2},{value:"Add a subtitle",id:"add-a-subtitle",level:2},{value:"Label customization",id:"label-customization",level:2},{value:"\u30bb\u30eb\u306b\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b",id:"\u30bb\u30eb\u306b\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b",level:2},{value:"Image View",id:"image-view",level:3},{value:"\u30e9\u30d9\u30eb",id:"\u30e9\u30d9\u30eb",level:3},{value:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f",id:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b",level:2}],s={toc:p};function u(t){let{components:e,...i}=t;return(0,o.kt)("wrapper",(0,n.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section you will see how to create your Android list form interface with Android Studio."),(0,o.kt)("p",null,"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u30ab\u30b9\u30bf\u30e0\u30ea\u30b9\u30c8\u753b\u9762\u306e\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9",src:a(10060).Z,width:"2600",height:"1792"})),(0,o.kt)("p",null,"\u30bb\u30eb\u5185\u306b\u8868\u793a\u3055\u308c\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u30c7\u30b6\u30a4\u30f3\u3057\u307e\u3057\u3087\u3046\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30a2\u30a4\u30b3\u30f3"),(0,o.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30c8\u30eb"),(0,o.kt)("li",{parentName:"ul"},"\u30b5\u30d6\u30bf\u30a4\u30c8\u30eb")),(0,o.kt)("h2",{id:"open-the-layout-file-with-android-studio"},"Open the layout file with Android Studio"),(0,o.kt)("p",null,"The best way to edit or create a template is to :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open Android Studio and create a new empty mobile project clicking on File > New > New Project...")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the Empty Activity template"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Android Studio project creation",src:a(53565).Z,width:"2024",height:"1580"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configure your project and click ",(0,o.kt)("strong",{parentName:"li"},"Finish"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Configure Android project",src:a(98830).Z,width:"2024",height:"1580"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy the layout.xml file in app > res > layout dropping it directly on the project layout folder")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Copy layout.xml file",src:a(14820).Z,width:"1642",height:"610"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You should have that at that point :")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Android project",src:a(31670).Z,width:"2798",height:"2030"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the top right ",(0,o.kt)("strong",{parentName:"li"},"Split")," option to visualize the template preview as well as the xml code.")),(0,o.kt)("p",null,"It's quite empty, so let's add some content!"),(0,o.kt)("h2",{id:"add-a-cardview-container"},"Add a CardView container"),(0,o.kt)("p",null,"To have a better rendering of your cells we are going to add a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/layout/cardview"},"CardView"),"."),(0,o.kt)("p",null,"Adding a CardView container will allow you to display your list form cells as nice cards and gives you the ability to add shadow, elevation, corner radius, background color..."),(0,o.kt)("p",null,"So let's add it to your layout file. Don't forget to close the container adding ",(0,o.kt)("inlineCode",{parentName:"p"},"</androidx.cardview.widget.CardView>")," just before ",(0,o.kt)("inlineCode",{parentName:"p"},"</layout>"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'   <androidx.cardview.widget.CardView\n        android:id="@+id/mainCardview" \n        android:layout_width="match_parent" \n        android:layout_height="wrap_content"\n        android:layout_marginStart="8dp"\n        android:layout_marginTop="8dp"\n        android:layout_marginEnd="8dp"\n        android:layout_marginBottom="8dp"\n        app:cardBackgroundColor="#FFFFFF"\n        app:cardCornerRadius="25dp"\n        app:layout_constraintBottom_toBottomOf="parent"\n        app:layout_constraintEnd_toEndOf="parent"\n        app:layout_constraintStart_toStartOf="parent"\n        app:layout_constraintTop_toTopOf="parent">\n\n        ...\n\n        </androidx.cardview.widget.CardView>\n\n')),(0,o.kt)("p",null,"It is crucial to ",(0,o.kt)("strong",{parentName:"p"},"give ids to your layout elements")," to refer to it later and positioning them among themselves."),(0,o.kt)("p",null,"Define the ",(0,o.kt)("strong",{parentName:"p"},"width")," and ",(0,o.kt)("strong",{parentName:"p"},"height")," of your container, the ",(0,o.kt)("strong",{parentName:"p"},"margins")," and as we want the content to take all the parent space (minus the margins) we just have to ",(0,o.kt)("strong",{parentName:"p"},"add constraints"),"."),(0,o.kt)("p",null,"Here is the full layout code at this stage :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n\n<layout xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    xmlns:tools="http://schemas.android.com/tools"\n    tools:ignore="HardcodedText">\n\n    <data>\n        \x3c!--ENTITY_VARIABLE--\x3e\n    </data>\n\n    <androidx.cardview.widget.CardView\n        android:id="@+id/mainCardview"\n        android:layout_width="match_parent"\n        android:layout_height="wrap_content"\n        android:layout_marginStart="8dp"\n        android:layout_marginTop="8dp"\n        android:layout_marginEnd="8dp"\n        android:layout_marginBottom="8dp"\n        app:cardBackgroundColor="#FFFFFF"\n        app:cardCornerRadius="25dp"\n        app:layout_constraintBottom_toBottomOf="parent"\n        app:layout_constraintEnd_toEndOf="parent"\n        app:layout_constraintStart_toStartOf="parent"\n        app:layout_constraintTop_toTopOf="parent">\n\n        <androidx.constraintlayout.widget.ConstraintLayout\n        android:layout_width="match_parent"\n            android:layout_height="wrap_content">\n\n        </androidx.constraintlayout.widget.ConstraintLayout>\n\n    </androidx.cardview.widget.CardView>\n\n\n</layout>\n\n')),(0,o.kt)("p",null,"And here is the preview result you are supposed to get :"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add CardView container",src:a(35164).Z,width:"2928",height:"2066"})),(0,o.kt)("h2",{id:"add-an-imageview"},"Add an ImageView"),(0,o.kt)("p",null,"In order to have a nice Image view display we are going to use agin a CardView container again as we want to add a nice corner radius to the ImageView to have a better design."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'            <androidx.cardview.widget.CardView\n                android:id="@+id/cardView"\n                android:layout_width="wrap_content"\n                android:layout_height="wrap_content"\n                android:layout_marginStart="8dp"\n                app:cardCornerRadius="20dp"\n                app:layout_constraintStart_toStartOf="parent"\n\n            <ImageView\n                android:id="@+id/__SPECIFIC_ID_1__"\n                android:layout_width="100dp"\n                android:layout_height="100dp"\n                android:contentDescription="Image"\n                app:imageUrl="__IMAGE_1__"\n                tools:background="@tools:sample/avatars" /> \n\n            </androidx.cardview.widget.CardView>\n')),(0,o.kt)("p",null,"As you can see the ImageView is embedded into the CardView. That allows to add corner radius to it."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},'app:imageUrl="__IMAGE_1__"')," line will allow to bind image value that is situated in position 1 in the svg file that you previously defined."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},'tools:background="@tools:sample/avatars"')," line simply there to display an ImageView placeholder."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add ImageView",src:a(44995).Z,width:"2928",height:"2066"})),(0,o.kt)("h2",{id:"add-a-title"},"Add a title"),(0,o.kt)("p",null,"Here we want to add a title at the right of the CardView that contains an ImageView."),(0,o.kt)("p",null,"To do so we are going to add a TextView :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},' <TextView\n                android:id="@+id/__SPECIFIC_ID_2__"\n                android:layout_width="0dp"\n                android:layout_height="wrap_content"\n                android:layout_marginStart="12dp"\n                android:layout_marginTop="20dp"\n                android:layout_marginEnd="12dp"\n                android:layout_marginBottom="6dp"\n                android:scrollbars="none"\n                android:text="__TEXT_2__"\n                android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n                android:textColor="@color/black"\n                android:textStyle="bold"\n                app:layout_constraintEnd_toEndOf="parent"\n                app:layout_constraintStart_toEndOf="@+id/cardView"\n                app:layout_constraintTop_toTopOf="parent"\n                tools:text="My field 2" />\n\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},'app: text="__TEXT_2__"')," line will allow to bind text value that is situated in position 2 in the svg file that you previously defined."),(0,o.kt)("p",null,"We want to ImageView and the TextView to be top aligned. To do so, we are going to use the TextView id. You just have to add this line to the CardView that include the profile picture :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'app:layout_constraintTop_toTopOf="@id/__SPECIFIC_ID_2__"\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Title",src:a(2633).Z,width:"2616",height:"2042"})),(0,o.kt)("h2",{id:"add-a-subtitle"},"Add a subtitle"),(0,o.kt)("p",null,"We want to add a subtitle to this cell. For that you just have to add quite the same block as the title one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'\n<TextView\n                android:id="@+id/__SPECIFIC_ID_3__"\n                android:layout_width="0dp"\n                android:layout_height="wrap_content"\n                android:layout_marginStart="12dp"\n                android:layout_marginTop="8dp"\n                android:layout_marginEnd="12dp"\n                android:layout_marginBottom="50dp"\n                android:scrollbars="none"\n                android:text="__TEXT_3__"\n                android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n                   android:textColor="?colorPrimary"\n                app:layout_constraintBottom_toBottomOf="parent"\n                app:layout_constraintEnd_toEndOf="parent"\n                app:layout_constraintStart_toEndOf="@+id/cardView"\n                app:layout_constraintTop_toBottomOf="@+id/__SPECIFIC_ID_2__"\n                tools:text="My field 3" />\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},'app: text="__TEXT_3__"')," line will allow to bind text value that is situated in position 2 in the svg file that you previously defined."),(0,o.kt)("p",null,"We want to the subtitle to be at the bottom of the title. To do so, we are going to use the title TextView id. You just have to add this line to title TextView :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'app:layout_constraintBottom_toTopOf="@+id/__SPECIFIC_ID_3__"\n')),(0,o.kt)("p",null,"Your first list form template:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Final list form template",src:a(25829).Z,width:"2616",height:"2042"})),(0,o.kt)("p",null,"Here is the full layout code at this stage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n\n<layout xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    xmlns:tools="http://schemas.android.com/tools"\n    tools:ignore="HardcodedText">\n\n    <data>\n\n        \x3c!--ENTITY_VARIABLE--\x3e\n    </data>\n\n    <androidx.cardview.widget.CardView\n        android:id="@+id/mainCardview"\n        android:layout_width="match_parent"\n        android:layout_height="wrap_content"\n        android:layout_marginStart="8dp"\n        android:layout_marginTop="8dp"\n        android:layout_marginEnd="8dp"\n        android:layout_marginBottom="8dp"\n        app:cardBackgroundColor="#FFFFFF"\n        app:cardCornerRadius="25dp"\n        app:layout_constraintBottom_toBottomOf="parent"\n        app:layout_constraintEnd_toEndOf="parent"\n        app:layout_constraintStart_toStartOf="parent"\n        app:layout_constraintTop_toTopOf="parent">\n\n    <androidx.constraintlayout.widget.ConstraintLayout\n        android:layout_width="match_parent"\n        android:layout_height="wrap_content">\n\n        <androidx.cardview.widget.CardView\n            android:id="@+id/cardView"\n            android:layout_width="wrap_content"\n            android:layout_height="wrap_content"\n            android:layout_marginLeft="8dp"\n            app:cardCornerRadius="20dp"\n            app:layout_constraintStart_toStartOf="parent"\n            app:layout_constraintTop_toTopOf="@id/__SPECIFIC_ID_2__">\n\n        <ImageView\n                android:id="@+id/__SPECIFIC_ID_1__"\n                android:layout_width="100dp"\n                android:layout_height="100dp"\n                android:contentDescription="Image"\n                app:imageUrl="__IMAGE_1__"\n                tools:background="@tools:sample/avatars" />\n\n        </androidx.cardview.widget.CardView>\n\n        <TextView\n            android:id="@+id/__SPECIFIC_ID_2__"\n            android:layout_width="0dp"\n            android:layout_height="wrap_content"\n            android:layout_marginStart="12dp"\n            android:layout_marginTop="20dp"\n            android:layout_marginEnd="12dp"\n            android:layout_marginBottom="6dp"\n            android:scrollbars="none"\n            android:text="__TEXT_2__"\n            android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n            android:textColor="@color/black"\n            android:textStyle="bold"\n            app:layout_constraintEnd_toEndOf="parent"\n            app:layout_constraintStart_toEndOf="@+id/cardView"\n            app:layout_constraintTop_toTopOf="parent"\n            app:layout_constraintBottom_toTopOf="@+id/__SPECIFIC_ID_3__"\n            tools:text="My field 2" />\n\n        <TextView\n            android:id="@+id/__SPECIFIC_ID_3__"\n            android:layout_width="0dp"\n            android:layout_height="wrap_content"\n            android:layout_marginStart="12dp"\n            android:layout_marginTop="8dp"\n            android:layout_marginEnd="12dp"\n            android:layout_marginBottom="50dp"\n            android:scrollbars="none"\n            android:text="__TEXT_3__"\n            android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n            android:textColor="?colorPrimary"\n            app:layout_constraintBottom_toBottomOf="parent"\n            app:layout_constraintEnd_toEndOf="parent"\n            app:layout_constraintStart_toEndOf="@+id/cardView"\n            app:layout_constraintTop_toBottomOf="@+id/__SPECIFIC_ID_2__"\n            tools:text="My field 3" />\n\n    </androidx.constraintlayout.widget.ConstraintLayout>\n\n    </androidx.cardview.widget.CardView>\n\n</layout>\n\n')),(0,o.kt)("h2",{id:"label-customization"},"Label customization"),(0,o.kt)("p",null,"From here you can customize your label's :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"color => android:textColor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"weight => android:textStyle with ",(0,o.kt)("strong",{parentName:"p"},"normal"),", ",(0,o.kt)("strong",{parentName:"p"},"bold")," or ",(0,o.kt)("strong",{parentName:"p"},"italic")," possible values")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"appearance of your font => android:textAppearance"))),(0,o.kt)("p",null,"Try to keep consistency in your layout text sizes with appearance. The best way to achieve that is to follow the ",(0,o.kt)("a",{parentName:"p",href:"https://material.io/design/typography/the-type-system.html#type-scale"},"Material Design type"),"."),(0,o.kt)("p",null,"For example, a basic TextView should be in ",(0,o.kt)("inlineCode",{parentName:"p"},"@Body1@")," scale."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'android:textAppearance="@style/TextAppearance.MaterialComponents.Body1"\n')),(0,o.kt)("h2",{id:"\u30bb\u30eb\u306b\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b"},"\u30bb\u30eb\u306b\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b"),(0,o.kt)("h3",{id:"image-view"},"Image View"),(0,o.kt)("p",null,"In our list form template we used ",(0,o.kt)("inlineCode",{parentName:"p"},'app:imageUrl="__IMAGE_1__"')),(0,o.kt)("p",null,"Here we suppose the ImageView is the first view in the svg, and its view ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_1__"),". If it would be the third view, it would be ",(0,o.kt)("inlineCode",{parentName:"p"},"__IMAGE_3__")," and its view ID would be ",(0,o.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_3__"),"."),(0,o.kt)("h3",{id:"\u30e9\u30d9\u30eb"},"\u30e9\u30d9\u30eb"),(0,o.kt)("p",null,"In our list form template we used ",(0,o.kt)("inlineCode",{parentName:"p"},'android:text="__TEXT_2__"')," for the title."),(0,o.kt)("p",null,"Here we suppose the title is the second view in the svg, and its view ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"__SPECIFIC_ID_2__"),"."),(0,o.kt)("h2",{id:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b"},"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f"),(0,o.kt)("p",null,"In this tutorial, we've covered the basics for creating Android list form templates. You are now able to create simple templates on your own using the Starter Project ressources. But wait - there\u2019s more! In the next tutorial, you\u2019ll learn how to build Android detail form templates!"),(0,o.kt)("p",null,"Download the completed template list folder:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomListForm/releases/latest/download/tutorial-CustomListForm.zip"},"Download")))}u.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>m});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),c=p(a),m=o,_=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(_,r(r({ref:e},s),{},{components:a})):n.createElement(_,r({ref:e},s))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,r=new Array(i);r[0]=c;var d={};for(var l in e)hasOwnProperty.call(e,l)&&(d[l]=e[l]);d.originalType=t,d.mdxType="string"==typeof t?t:o,r[1]=d;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},35164:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/add-cardView-container-7fc2f2332d7b0138d7dd5c4b411dc8c7.png"},44995:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/add-imageview-ac7290078a1a81764e844d6da968eca4.png"},2633:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/add-title-b8dc18cabfd6a681f41597bf77cebf88.png"},31670:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/android-project-2ed7a2cd6d171f4f13b3fca26acf7ccd.png"},98830:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/configure-android-project-60eaff20bb8177e8a4048dc2f3924150.png"},14820:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/copy-layout-f9f127c542c7b554c463f7a7807f2f09.png"},25829:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/final-list-form-template-c85056531c4702d0d8a0359ddff282ec.png"},53565:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/template-selection-a3af46be6690c2a62bd9e7ecf5387b6c.png"},10060:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/xml-custom-listform-4bdc73ac881a40402406953495d5eaea.png"}}]);