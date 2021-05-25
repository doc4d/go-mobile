(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(204)),l={id:"structure",title:"Structure"},i={unversionedId:"project-definition/structure",id:"project-definition/structure",isDocsHomePage:!1,title:"Structure",description:"This section displays all of your database tables and fields exposed by 4D Mobile Service.",source:"@site/docs/project-definition/structure.md",slug:"/project-definition/structure",permalink:"/go-mobile/fr/docs/project-definition/structure",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/project-definition/structure.md",version:"current",sidebar:"docs",previous:{title:"General",permalink:"/go-mobile/fr/docs/project-definition/general"},next:{title:"Deep Linking",permalink:"/go-mobile/fr/docs/extra-features/deep-linking"}},c=[{value:"Many to One relations",id:"many-to-one-relations",children:[]},{value:"One to Many relations",id:"one-to-many-relations",children:[{value:"Deal with One to Many relations from the project editor",id:"deal-with-one-to-many-relations-from-the-project-editor",children:[]},{value:"What will be created in the generated project ?",id:"what-will-be-created-in-the-generated-project-",children:[]}]},{value:"Incremental reload",id:"incremental-reload",children:[{value:"Enable structure adjustments",id:"enable-structure-adjustments",children:[]},{value:"Pull to refresh!",id:"pull-to-refresh",children:[]}]}],s={toc:c};function u(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section displays all of your database tables and fields exposed by 4D Mobile Service."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Structure section",src:a(323).default})),Object(o.b)("p",null,"Here, you can define a subset of your physical structure to replicate for mobile devices by selecting specific tables and fields. The selected:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"tables will be automatically added to the tabs of your app."),Object(o.b)("li",{parentName:"ul"},"fields will be available later when it's time to define your list and detail forms.")),Object(o.b)("h2",{id:"many-to-one-relations"},"Many to One relations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"4D 17R5 allows you to visualize table relations in the generated app publishing them from the Structure section. Then when your related fields are published, they can be used like any other field in the ","[app creation process]",Object(o.b)("inlineCode",{parentName:"li"},"(many-to-one-relations.html)"),".")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Publish related tables",src:a(324).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"4D 18R6 add the ability to publish Many to One and One to Many relations from your Many to One relations in the Structure section.")),Object(o.b)("p",null,"This means that you will be able to display Many to Many relations in your app and move directly from a List form to another List form."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"TIPS")),Object(o.b)("p",{parentName:"blockquote"},"You can publish a selection of fields by pressing the spacebar rather than selecting them one by one."),Object(o.b)("p",{parentName:"blockquote"},"To help you define your app's structure, multiple filters and a search engine are available to make it easy to select your tables and field.")),Object(o.b)("h2",{id:"one-to-many-relations"},"One to Many relations"),Object(o.b)("h3",{id:"deal-with-one-to-many-relations-from-the-project-editor"},"Deal with One to Many relations from the project editor"),Object(o.b)("p",null,"Now, in recent versions of 4D, you can deal with ",Object(o.b)("strong",{parentName:"p"},"One to Many relations")," and display a list of related fields in a new page."),Object(o.b)("p",null,"All you have to do is:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"publishing at least one field of the target (Many) table")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"publishing the relation from the source (One) table"))),Object(o.b)("p",null,Object(o.b)("img",{alt:"Drop relation in detail form",src:a(325).default})),Object(o.b)("p",null,"Then, when your related fields are published, they can be used like any other field. So you will be able to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Define relations properties in the ","[Labels and Icons]",Object(o.b)("inlineCode",{parentName:"p"},"(labels-and-icons.html#relations-properties)")," section.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Drop the One to Many relation in a Detail form from the Forms Section to create a link between a detail form and a related table."))),Object(o.b)("h3",{id:"what-will-be-created-in-the-generated-project-"},"What will be created in the generated project ?"),Object(o.b)("p",null,"Basically a Relation button will be created in detail forms to go straight to the related view."),Object(o.b)("p",null,"[Tutorials]",Object(o.b)("inlineCode",{parentName:"p"},"(one-to-many-relations.html)")," are available to help you use One to Many relation in your 4D for iOS project."),Object(o.b)("h2",{id:"incremental-reload"},"Incremental reload"),Object(o.b)("h3",{id:"enable-structure-adjustments"},"Enable structure adjustments"),Object(o.b)("p",null,"In 4D 17R5, the 4D for iOS reload becomes incremental. This means that only new, modified or deleted data from the database will be updated. This is a great optimisation in terms of loading time!"),Object(o.b)("p",null,"To do so, 4D for iOS needs to make structure optimizations and create:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("inlineCode",{parentName:"li"},"__DeletedRecords")," table to store deleted records"),Object(o.b)("li",{parentName:"ul"},"and ",Object(o.b)("inlineCode",{parentName:"li"},"__GlobalStamp")," fields to store modification stamps for each published table in your mobile application")),Object(o.b)("p",null,"All you need to do is enabling 4D for iOS to make the necessary structure adjustments for an optimised mobile data update. "),Object(o.b)("p",null,"Once authorized, 4D for iOS will do all the work for you, and you will fully benefit from all the advantages of incrememental data reload."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE")),Object(o.b)("p",{parentName:"blockquote"},"These optimizations are required for both local and server databases.")),Object(o.b)("h3",{id:"pull-to-refresh"},"Pull to refresh!"),Object(o.b)("p",null,"iOS app side, your data is updated each time you launch your app and each time your app goes foreground, to get constant updated data."),Object(o.b)("p",null,"In normal use, simply swipe down from any listform to reload your data."),Object(o.b)("p",null,"From iPhone settings, you can now reset your app data and find information about your app. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE")),Object(o.b)("p",{parentName:"blockquote"},"As soon as the admin performs an important maintenance operation, he shall alert 4D for iOS app users that a Full reload is required: Recover by tag / Restoration / Compaction")))}u.isMDXComponent=!0},204:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(a),p=n,m=b["".concat(l,".").concat(p)]||b[p]||d[p]||o;return a?r.a.createElement(m,i(i({ref:t},s),{},{components:a})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},323:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Structure-section-4D-for-iOS-763c904928c3e51324bb61ac9ad014e1.png"},324:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Structure-section-N-to-1-relations-4D-for-iOS-f040aa77b17a5a0d44be6eddfcd336ff.png"},325:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Structure-1-to-N-relations-4D-for-iOS-fb0678a1edb367935e154ab4d46f637a.png"}}]);