(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1184],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return m}});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=l.createContext({}),c=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return l.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=r(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?l.createElement(k,o(o({ref:e},u),{},{components:n})):l.createElement(k,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r.mdxType="string"==typeof t?t:a,o[1]=r;for(var c=2;c<i;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30679:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return r},toc:function(){return s},default:function(){return u}});var l=n(22122),a=n(19756),i=(n(67294),n(3905)),o={id:"actions",title:"Actions"},r={unversionedId:"project-definition/actions",id:"project-definition/actions",isDocsHomePage:!1,title:"Actions",description:"This section allows you to:",source:"@site/docs/project-definition/actions.md",sourceDirName:"project-definition",slug:"/project-definition/actions",permalink:"/go-mobile/fr/docs/project-definition/actions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/project-definition/actions.md",version:"current",frontMatter:{id:"actions",title:"Actions"}},s=[{value:"Project Editor Side",id:"project-editor-side",children:[{value:"Create your action",id:"create-your-action",children:[]},{value:"Add parameters to your action",id:"add-parameters-to-your-action",children:[]},{value:"Preset actions",id:"preset-actions",children:[]},{value:"On Mobile App Action",id:"on-mobile-app-action",children:[]},{value:"Offline mode actions",id:"offline-mode-actions",children:[]}]},{value:"iOS app Side",id:"ios-app-side",children:[{value:"Table List forms",id:"table-list-forms",children:[]},{value:"Collection List forms",id:"collection-list-forms",children:[]},{value:"Detail forms",id:"detail-forms",children:[]},{value:"Edition forms",id:"edition-forms",children:[]}]},{value:"Where to go from here?",id:"where-to-go-from-here",children:[]}],c={toc:s};function u(t){var e=t.components,o=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,l.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section allows you to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create actions to execute 4D code from your iOS app."),(0,i.kt)("li",{parentName:"ul"},"define and add parameters to your actions.")),(0,i.kt)("h2",{id:"project-editor-side"},"Project Editor Side"),(0,i.kt)("h3",{id:"create-your-action"},"Create your action"),(0,i.kt)("p",null,"You can create a new action by clicking on the + button at the bottom of the Actions table. A new line will appear in the Actions table."),(0,i.kt)("p",null,"Next you'll need to define the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Names:")," The action name to use in the ","[On Mobile App Action]",(0,i.kt)("inlineCode",{parentName:"li"},"(https://developer.4d.com/4d-for-ios/docs/en/actions.html#on-mobile-app-action)")," database method to trigger your 4D code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Icons:")," The icon to choose from your icon library. You can also add your own icon by following this ","[tutorial]",(0,i.kt)("inlineCode",{parentName:"li"},"(using-icons.html)"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Short and long Labels:")," The labels for the actions to display in your app."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Table:")," The table on which you want to apply the action."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Scope:")," Where to use the action, an ",(0,i.kt)("strong",{parentName:"li"},"entity")," or a ",(0,i.kt)("strong",{parentName:"li"},"table"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Action section",src:n(86412).Z})),(0,i.kt)("h3",{id:"add-parameters-to-your-action"},"Add parameters to your action"),(0,i.kt)("p",null,"As of ",(0,i.kt)("strong",{parentName:"p"},"4D v17R6"),", you can add ",(0,i.kt)("strong",{parentName:"p"},"action parameters")," and ",(0,i.kt)("strong",{parentName:"p"},"edit")," data directly from your app."),(0,i.kt)("p",null,"For each parameter, you can edit the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name"),(0,i.kt)("li",{parentName:"ul"},"Long label"),(0,i.kt)("li",{parentName:"ul"},"Short label"),(0,i.kt)("li",{parentName:"ul"},"Format"),(0,i.kt)("li",{parentName:"ul"},"Input constraints (define minimum or maximum values)"),(0,i.kt)("li",{parentName:"ul"},"Placeholder"),(0,i.kt)("li",{parentName:"ul"},"Mandatory field definition"),(0,i.kt)("li",{parentName:"ul"},"Default value")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Action parameters",src:n(33646).Z})),(0,i.kt)("p",null,"You are free to change the order of parameters using drag and drop."),(0,i.kt)("p",null,"Here are the different ",(0,i.kt)("strong",{parentName:"p"},"Formats")," you can select for a parameter:"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colspan:"2",style:{textAlign:"center"}},"TEXT")),(0,i.kt)("tr",{style:{textAlign:"center"}},(0,i.kt)("th",null,"Format"),(0,i.kt)("th",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Text"),(0,i.kt)("td",null,"Capitalize the first letter of a string")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Email Address"),(0,i.kt)("td",null,"Optimized iOS keyboard for email entry")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Phone Number"),(0,i.kt)("td",null,"iOS keypad for entering telephone numbers.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Account"),(0,i.kt)("td",null,"Optimized iOS keyboard for username entry")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Password"),(0,i.kt)("td",null,"Optimized to handle passwords")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"URL"),(0,i.kt)("td",null,"Optimized iOS keyboard for URL entry")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Zip Code"),(0,i.kt)("td",null,"Optimized iOS keyboard for zip code entry")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Text area"),(0,i.kt)("td",null,"Includes multiple lines of text in a single field")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Barcode"),(0,i.kt)("td",null,"Extract barcode associated value. Supported formats : EAN8, EAN13, Code 39, Code 93, Code 128, QR Code, UPC, PDF417")),(0,i.kt)("tr",null,(0,i.kt)("td",{colspan:"2"})),(0,i.kt)("tr",null,(0,i.kt)("th",{colspan:"2",style:{textAlign:"center"}},"NUMBER")),(0,i.kt)("tr",{style:{textAlign:"center"}},(0,i.kt)("th",null,"Format"),(0,i.kt)("th",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Number"),(0,i.kt)("td",null,"Numbers with decimals")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Integer"),(0,i.kt)("td",null,"Numbers without decimals")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Scientific"),(0,i.kt)("td",null,"Scientific Notation")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Percentage"),(0,i.kt)("td",null,"Percent Notation")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Spell Out"),(0,i.kt)("td",null,"Convert numbers into strings")),(0,i.kt)("tr",null,(0,i.kt)("td",{colspan:"2"})),(0,i.kt)("tr",null,(0,i.kt)("th",{colspan:"2",style:{textAlign:"center"}},"DATE")),(0,i.kt)("tr",{style:{textAlign:"center"}},(0,i.kt)("th",null,"Format"),(0,i.kt)("th",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Date"),(0,i.kt)("td",null,"Nov 23, 1937")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Short Date"),(0,i.kt)("td",null," 11/23/37")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Long Date"),(0,i.kt)("td",null,"November 23, 1937")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Full Date"),(0,i.kt)("td",null,"Tuesday, November 23, 1937")),(0,i.kt)("tr",null,(0,i.kt)("td",{colspan:"2"})),(0,i.kt)("tr",null,(0,i.kt)("th",{colspan:"2",style:{textAlign:"center"}},"TIME")),(0,i.kt)("tr",{style:{textAlign:"center"}},(0,i.kt)("th",null,"Format"),(0,i.kt)("th",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Time"),(0,i.kt)("td",null,"3:30 PM")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Duration"),(0,i.kt)("td",null,"2 hours 30 minutes")),(0,i.kt)("tr",null,(0,i.kt)("td",{colspan:"2"})),(0,i.kt)("tr",null,(0,i.kt)("th",{colspan:"2",style:{textAlign:"center"}},"BOOLEAN")),(0,i.kt)("tr",{style:{textAlign:"center"}},(0,i.kt)("th",null,"Format"),(0,i.kt)("th",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Boolean"),(0,i.kt)("td",null,(0,i.kt)("img",{src:"https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/switch.png?raw=true"}))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Check mark"),(0,i.kt)("td",null,(0,i.kt)("img",{src:"https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/check.png?raw=true"}))),(0,i.kt)("tr",null,(0,i.kt)("td",{colspan:"2"})),(0,i.kt)("tr",null,(0,i.kt)("th",{colspan:"2",style:{textAlign:"center"}},"IMAGES")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Signature"),(0,i.kt)("td",null,"Allow to sign with the finger"))),(0,i.kt)("h3",{id:"preset-actions"},"Preset actions"),(0,i.kt)("p",null,"4D for iOS includes three preset (predefined) actions to manage your app content:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Edit "),(0,i.kt)("li",{parentName:"ul"},"Add "),(0,i.kt)("li",{parentName:"ul"},"Delete ")),(0,i.kt)("h4",{id:"1-add-action"},"1. Add action"),(0,i.kt)("p",null,"4D for iOS makes the ",(0,i.kt)("strong",{parentName:"p"},"Add actions")," creation process very simple."),(0,i.kt)("p",null,"The only thing you need to do is select the ",(0,i.kt)("strong",{parentName:"p"},"Add action for")," option, accessible from the ",(0,i.kt)("strong",{parentName:"p"},"+ button")," at the bottom of the Actions table. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add actions",src:n(99452).Z})),(0,i.kt)("p",null,"Then just ",(0,i.kt)("strong",{parentName:"p"},"select the table")," you want to link to this add action. And this is it! "),(0,i.kt)("p",null,"This will ",(0,i.kt)("strong",{parentName:"p"},"automatically create")," all the parameters for you in the Project Editor. In the generated app, this will allow you to edit each field value."),(0,i.kt)("p",null,"For those kind of action, you will see that all ",(0,i.kt)("strong",{parentName:"p"},"properties")," are already filled in for your convenience at the right side of the parameter's list."),(0,i.kt)("h4",{id:"2-edit-action"},"2. Edit action"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Edit actions")," creation follows the same process as the Add actions, with the exception that you will not be able to define default values from the Actions section."),(0,i.kt)("h4",{id:"3-delete-action"},"3. Delete action"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Delete action")," creation follows the same process as the Edit action. The only difference is that this action allows you to remove an entity."),(0,i.kt)("p",null,"To create a Delete action, select the ",(0,i.kt)("strong",{parentName:"p"},"Delete action for")," option accessible from the ",(0,i.kt)("strong",{parentName:"p"},"+ button")," at the bottom of the Actions table."),(0,i.kt)("p",null,"This type of action should be used with caution."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Delete actions",src:n(50359).Z})),(0,i.kt)("p",null,"For Edit and Add actions you are free to modify the:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters by adding or removing a parameter using the ",(0,i.kt)("strong",{parentName:"li"},"+ and - buttons")," at the bottom of the Action parameters list."),(0,i.kt)("li",{parentName:"ul"},"properties by defining them as you wish. ")),(0,i.kt)("h3",{id:"on-mobile-app-action"},"On Mobile App Action"),(0,i.kt)("p",null,"The ","[On Mobile App Action]",(0,i.kt)("inlineCode",{parentName:"p"},"(https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html)")," database method is available to call all of your 4D methods. "),(0,i.kt)("p",null,"After creating all of your actions, just click on the Create button from the Actions table to automatically generate a ",(0,i.kt)("em",{parentName:"p"},"Case of")," code block that includes all your action names in the ",(0,i.kt)("em",{parentName:"p"},"On Mobile App Action")," method."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"You can refresh the selection after executing an action using ",(0,i.kt)("inlineCode",{parentName:"li"},"$out.dataSynchro:=True"),"."),(0,i.kt)("li",{parentName:"ul"},"You can notify the app user when action has been executed using ",(0,i.kt)("inlineCode",{parentName:"li"},'$out.statusText:="Message you want to display"'),"."),(0,i.kt)("li",{parentName:"ul"},"You can also decide to force close the Edition form using ",(0,i.kt)("inlineCode",{parentName:"li"},"$out.close:=True"),"."))),(0,i.kt)("h3",{id:"offline-mode-actions"},"Offline mode actions"),(0,i.kt)("p",null,"The user of an iOS app can draft, store and queue action requests, even if he\u2019s working offline (adding a customer's phone number, uploading a picture, printing an invoice or a quote, deleting an address, etc.).  All these tasks are placed in the Pending actions list until the network is accessible. Once the user is online, all pending actions are consistently synchronized, executed and then visible in the Completed actions list."),(0,i.kt)("p",null,"Pending tasks can be visualized and opened from:"),(0,i.kt)("p",null,"\u2022\t",(0,i.kt)("em",{parentName:"p"},"The Settings screen")),(0,i.kt)("p",null,"It displays a summary and a history of all pending and completed tasks."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Action section",src:n(9266).Z})),(0,i.kt)("p",null,"\u2022\t",(0,i.kt)("em",{parentName:"p"},"The List & Detail forms")),(0,i.kt)("p",null,"They display all the tasks related to the table or to the entity that you are currently viewing."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Action section",src:n(33586).Z})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Notes")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},'The "Share" predefined action is only executable online.'),(0,i.kt)("li",{parentName:"ul"},'Actions are editable while pending, but they can no longer be modified once they switch to the "Completed" mode.'))),(0,i.kt)("h2",{id:"ios-app-side"},"iOS app Side"),(0,i.kt)("p",null,"In your iOS app, actions are available in different ways in your List and Detail forms, depending on the templates you select in the Forms section. "),(0,i.kt)("h3",{id:"table-list-forms"},"Table List forms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Entity action:"),' Swipe left on a cell to display the available actions in a List form. A "More" button is displayed if you\'ve defined more than three actions per entity.')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Entity Lisform Tableview",src:n(58157).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Table actions:")," A generic actions button is available in the navigation bar to display a list of available table actions.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Table Listform Tableview",src:n(5895).Z})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"TIPS")),(0,i.kt)("p",{parentName:"blockquote"},"Actions will be displayed in the same order as defined in the Action section.")),(0,i.kt)("h3",{id:"collection-list-forms"},"Collection List forms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Entity action:")," Depending on the template, actions are displayed by clicking on a generic button or by maintaing the pressure on a cell.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Entity Listform Collectionview",src:n(23755).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Table actions:")," Like the Table List forms, a generic Actions button is available in the navigation bar to display a list of availble table actions.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Table Listform Collectionview",src:n(33888).Z})),(0,i.kt)("h3",{id:"detail-forms"},"Detail forms"),(0,i.kt)("p",null,"As with Table actions in List forms, a generic Actions button is available in the navigation bar to display all your entity actions in a list. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Entity Detailform",src:n(57906).Z})),(0,i.kt)("h3",{id:"edition-forms"},"Edition forms"),(0,i.kt)("p",null,"If you have created an Edit or an Add action, as soon as you select it from the action list, an ",(0,i.kt)("strong",{parentName:"p"},"Edition form")," will appear."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Send task comment",src:n(42497).Z})),(0,i.kt)("p",null,"From here, you can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"edit all of your fields by selecting them, and"),(0,i.kt)("li",{parentName:"ul"},"validate or cancel your modifications using the ",(0,i.kt)("strong",{parentName:"li"},"Done")," or ",(0,i.kt)("strong",{parentName:"li"},"Cancel")," buttons (available in the navigation bar).")),(0,i.kt)("p",null,"For your convenience, the Edition form includes a few ",(0,i.kt)("strong",{parentName:"p"},"special features"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The keyboard type depends on the selected parameter type in the Action section."),(0,i.kt)("li",{parentName:"ul"},"You can go to the next or previous field using the arrow on top of the keyboard."),(0,i.kt)("li",{parentName:"ul"},"The iOS keyboard can be closed by touching anywhere outside of a field."),(0,i.kt)("li",{parentName:"ul"},"Indication is given to the user when a value is not valid."),(0,i.kt)("li",{parentName:"ul"},"The view focuses on empty mandatory fields when the user clicks the Done button.")),(0,i.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A ","[tutorial]",(0,i.kt)("inlineCode",{parentName:"p"},"(actions-getting-started.html)")," is available to guide you through the ",(0,i.kt)("strong",{parentName:"p"},"action definition process"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Another ","[tutorial]",(0,i.kt)("inlineCode",{parentName:"p"},"(action-custom-template.html)")," will guide you through the ",(0,i.kt)("strong",{parentName:"p"},"action TAG integration")," for custom templates.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A final ","[tutorial]",(0,i.kt)("inlineCode",{parentName:"p"},"(action-parameters.html)")," will guide you through the ",(0,i.kt)("strong",{parentName:"p"},"action parameters definition"),"."))))}u.isMDXComponent=!0},42497:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Action-parameters-sendComment-38be2e5b75e0d4d74a51bfcdbb9b9bbe.png"},99452:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Actions-Add-action-4D-for-iOS-08fe1b9cfcbd3583ca3e77f98060e961.png"},50359:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Actions-Delete-action-4D-for-iOS-0817713a52602d04998f2761657066c3.png"},33646:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Actions-parameters-4D-for-iOS-79cf5153d9958b5909e510342bd01f56.png"},86412:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Actions-section-4D-for-iOS-303741c316ee6c799d6eba28d1658de9.png"},57906:function(t,e,n){"use strict";e.Z=n.p+"assets/images/Detailform-final-c18c89abec9db7c4b6d2b65f6460b755.png"},23755:function(t,e,n){"use strict";e.Z=n.p+"assets/images/ListForm-entity-action-collectionview-62cf2694a13944829d3423e57266e843.png"},58157:function(t,e,n){"use strict";e.Z=n.p+"assets/images/ListForm-entity-action-tableview-c4ca8838892967fd5df82c8271e4090b.png"},33888:function(t,e,n){"use strict";e.Z=n.p+"assets/images/ListForm-table-action-collectionview-7ff726ee7d870dbfbd4cc0273e391b98.png"},5895:function(t,e,n){"use strict";e.Z=n.p+"assets/images/ListForm-table-action-tableview-2a4b105d4215b5d9391c2cc2b6928b44.png"},9266:function(t,e,n){"use strict";e.Z=n.p+"assets/images/screen1-1420674684277595e3ebeb3d8b17b032.png"},33586:function(t,e,n){"use strict";e.Z=n.p+"assets/images/screen2-2085af1eac75672e8d71ca91df39eb37.png"}}]);