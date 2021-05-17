(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{126:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return i})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return s}));var o=n(3),a=n(7),r=(n(0),n(159)),c={id:"structure-one-to-many-relations-custom-button",title:"One to Many - Custom button"},i={unversionedId:"project-definition/structure-one-to-many-relations-custom-button",id:"project-definition/structure-one-to-many-relations-custom-button",isDocsHomePage:!1,title:"One to Many - Custom button",description:"As we have seen with all previous tutorials, 4D for iOS give you the freedom to create lots of custom things!",source:"@site/docs/project-definition/structure-one-to-many-relations-custom-button.md",slug:"/project-definition/structure-one-to-many-relations-custom-button",permalink:"/go-mobile/docs/project-definition/structure-one-to-many-relations-custom-button",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/project-definition/structure-one-to-many-relations-custom-button.md",version:"current"},l=[{value:"Include the button",id:"include-the-button",children:[]},{value:"Modify the button",id:"modify-the-button",children:[{value:"Custom colors and fonts",id:"custom-colors-and-fonts",children:[]},{value:"Button round corners",id:"button-round-corners",children:[]},{value:"Size and constraints",id:"size-and-constraints",children:[]},{value:"Add TAGS",id:"add-tags",children:[]}]},{value:"Where to go from here?",id:"where-to-go-from-here",children:[]}],u={toc:l};function s(t){var e=t.components,c=Object(a.a)(t,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,c,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"As we have seen with all previous tutorials, 4D for iOS give you the freedom to create lots of custom things!"),Object(r.b)("p",null,"As for custom templates or custom formatters, you can create custom Relation Buttons."),Object(r.b)("p",null,"To that end, nothing more simple! You just have to drop your custom button in your custom template."),Object(r.b)("p",null,"Let's get started by downloading the Starter Project that includes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"a database with its mobile project"),Object(r.b)("li",{parentName:"ul"},"a standard Relation button")),Object(r.b)("div",{markdown:"1",style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},Object(r.b)("a",{class:"button",href:"https://github.com/4d-for-ios/tutorial-OneToManyCustomButton/archive/c507e764e97e006c6c785dfc468f71f5bd708845.zip"},"STARTER CUSTOM BUTTON")),Object(r.b)("h2",{id:"include-the-button"},"Include the button"),Object(r.b)("p",null,"The first step is including the button.xib button into your custom template so that 4D for iOS can use it."),Object(r.b)("p",null,"To use the button, you just need to drop it in the ",Object(r.b)("inlineCode",{parentName:"p"},"YourDatabase.4dbase/Resources/Mobile/form/detail/BlackVisual Contact")," folder."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Custom button path",src:n(355).default})),Object(r.b)("p",null,"The first step is done!"),Object(r.b)("h2",{id:"modify-the-button"},"Modify the button"),Object(r.b)("p",null,"Open the .xib file with Xcode. "),Object(r.b)("p",null,"It should look like this:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Custom relation button",src:n(356).default})),Object(r.b)("p",null,"And from the attribute inspector, you can change for example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"colors and fonts"),Object(r.b)("li",{parentName:"ul"},"the button style"),Object(r.b)("li",{parentName:"ul"},"the button size...")),Object(r.b)("p",null,"Let's change the button color and the button label font!"),Object(r.b)("h3",{id:"custom-colors-and-fonts"},"Custom colors and fonts"),Object(r.b)("p",null,"Select the button and change the color and font from the attribute inspector."),Object(r.b)("p",null,"For the background, let's select the Label Color to have the best contrast in Light and Dark mode."),Object(r.b)("p",null,"For the font color let's put a System background color with a helvetica Neue Medium font."),Object(r.b)("p",null,"Finally, don't forget to select the System background color Tint to apply this color to the button icon."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Custom relation button",src:n(357).default})),Object(r.b)("p",null,"You should get this result in your Simulator in Dark and in Light mode:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Custom relation color and font",src:n(358).default})),Object(r.b)("h3",{id:"button-round-corners"},"Button round corners"),Object(r.b)("p",null,"Let's add some round corners to the relationButton!"),Object(r.b)("p",null,"To do so, open the Identity Inspector."),Object(r.b)("p",null,"Select your Button and add the two following lines in the User Defined Runtime Attributes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Key Path"),": ",Object(r.b)("inlineCode",{parentName:"p"},"cornerRadius"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"Number")," ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Value"),": ",Object(r.b)("inlineCode",{parentName:"p"},"12")))),Object(r.b)("p",null,"and"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Key Path"),": ",Object(r.b)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"Boolean")," ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Value"),": Check the box"))),Object(r.b)("p",null,Object(r.b)("img",{alt:"Custom relation color and font",src:n(359).default})),Object(r.b)("p",null,"You can now build your project from the project editor!"),Object(r.b)("p",null,"The result should look like this:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Custom relation color and font",src:n(360).default})),Object(r.b)("h3",{id:"size-and-constraints"},"Size and constraints"),Object(r.b)("p",null,"Keep in mind that if you ",Object(r.b)("strong",{parentName:"p"},"add constraints")," into your button, you will also have to modifiy the xib xml file to ",Object(r.b)("strong",{parentName:"p"},"add some TAGS")," as for custom Detail form templates. This allows the button to be well duplicated when several relations are available in the same detail view."),Object(r.b)("p",null,"How convenient, since we plan on adding a few constraints!"),Object(r.b)("h4",{id:"add-constraints"},"Add constraints"),Object(r.b)("p",null,"For this tutorial, we are just going to add a button height because we want it to look bigger on the screen."),Object(r.b)("p",null,"Step 1. First select the view and change the height from 123 to 40"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Button view height",src:n(361).default})),Object(r.b)("p",null,"Step 2. Double click on the ",Object(r.b)("strong",{parentName:"p"},"Top Space Constraint")," and change it from 8 to 0"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Top Space constraint",src:n(362).default})),Object(r.b)("p",null,"Step 3. Do the same thing with ",Object(r.b)("strong",{parentName:"p"},"Bottom Space Constraint")," and change it from 8 to 0"),Object(r.b)("p",null,"You should get this:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Custom  button constraints",src:n(363).default})),Object(r.b)("p",null,"Step 4. Add a height constraint of 40"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Button height constraint",src:n(364).default})),Object(r.b)("p",null,"You should get this:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Horizontal in container",src:n(365).default})),Object(r.b)("p",null,"In order to indicate in the project editor that all of the elements included in this view will be duplicated, we need to add a TAG to each element and constraint."),Object(r.b)("h3",{id:"add-tags"},"Add TAGS"),Object(r.b)("p",null,"Each storyboard element has an Object ID. For example, if you select Field View 2 and go to the ",Object(r.b)("strong",{parentName:"p"},"Identity inspector"),", you'll see its Object ID:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Object ID Storyboard",src:n(366).default})),Object(r.b)("p",null,"The process is a little bit tricky... So let's begin by opening the storyboard file with your favorite code editor!"),Object(r.b)("h4",{id:"add-a-tag-to-the-height-constraint"},"Add a tag to the height constraint"),Object(r.b)("p",null,"Step 1. Select it from the Storyboard to get the Object ID"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Horizontal constraint object ID",src:n(367).default})),Object(r.b)("p",null,"Step 2. Search for this ID in the xml file and put ",Object(r.b)("strong",{parentName:"p"},"TAG-RL-007")," instead (a Tag that is not already used)."),Object(r.b)("p",null,"Step 3. Save the xml file "),Object(r.b)("p",null,Object(r.b)("img",{alt:"Horizontal constraint xml file",src:n(368).default})),Object(r.b)("p",null,"Step 4. Focus on the Storyboard to check if the constraint has been updated correctly"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Horizontal object ID updated",src:n(369).default})),Object(r.b)("p",null,"And that's it! Your button is now fully duplicable if you have more that one relation button to display..."),Object(r.b)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),Object(r.b)("p",null,"In this tutorial, we've covered the basics for creating custom relation buttons. Click on Final Project below to download the custom relation button."),Object(r.b)("div",{markdown:"1",style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},Object(r.b)("a",{class:"button",href:"https://github.com/4d-for-ios/tutorial-OneToManyCustomButton/releases/latest/download/tutorial-OneToManyCustomButton.zip"},"FINAL CUSTOM BUTTON")))}s.isMDXComponent=!0},159:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=a.a.createContext({}),s=function(t){var e=a.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},b=function(t){var e=s(t.components);return a.a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},p=a.a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),b=s(n),p=o,m=b["".concat(c,".").concat(p)]||b[p]||d[p]||r;return n?a.a.createElement(m,i(i({ref:e},u),{},{components:n})):a.a.createElement(m,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,c=new Array(r);c[0]=p;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var u=2;u<r;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},355:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/Relation-custom-button-path-4b5a46bf970d1b8b9584098dfb487207.png"},356:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/Relations-custom-button-relationButton-4D-for-iOS-bf3b14ba27d987ac7235c102f49fe4ed.png"},357:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/Relations-custom-button-relationButton-4D-for-iOS-font-and-Color-e9e95f0e6f490a802c3eab8ef624ea1c.png"},358:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/Custom-relation-button-Light-and-Dark-mode-font-and-color-8b7e6af3f02e9276ec211796dde15673.png"},359:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/Custom-relation-button-Xcode-round-corners-53525e920a1ba2f90b2d7cf855738985.png"},360:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/Custom-relation-button-round-corners-f0571acd6b1aad58fc6264826069ac84.png"},361:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/Button-view-height-4fb63323063ca0f6323d4e500a6c3bac.png"},362:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/Top-Space-constraint-a5c9ae57cc62b79b3acb2ebd5610a8b8.png"},363:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/Custom-button-constraints-f6ed75507bad0479ad3cc739dbd9e605.png"},364:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/Button-height-constraint-cc181760ed0e0e3271203ecbe5a573b6.png"},365:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/Custom-relation-button-constraints-84480a10d62ffba83d171a9e881c9a3e.png"},366:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/Custom-button-object-id-storyboard-40a3a5997a462a031ea8725eef807527.png"},367:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/Horizontal-constraint-object-ID-5faf25ec4a5a4bbda03471754d590079.png"},368:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/Horizontal-constraint-xml-file-bcda2f30b0de3932a74c3920023ff7a8.png"},369:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/Horizontal-object-id-updated-da61e281af6c4a61c678d8b6bde0e94f.png"}}]);