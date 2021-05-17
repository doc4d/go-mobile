(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),o=n(7),a=(n(0),n(159)),s={id:"email-authentication",title:"Email authentication"},r={unversionedId:"extra-features/email-authentication",id:"extra-features/email-authentication",isDocsHomePage:!1,title:"Email authentication",description:"OBJECTIVES",source:"@site/docs/extra-features/email-authentication.md",slug:"/extra-features/email-authentication",permalink:"/go-mobile/docs/extra-features/email-authentication",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/extra-features/email-authentication.md",version:"current",sidebar:"mySidebar",previous:{title:"Deep Linking",permalink:"/go-mobile/docs/extra-features/deep-linking"},next:{title:"Push notifications",permalink:"/go-mobile/docs/extra-features/push-notification"}},l=[{value:"1. Activate the login form",id:"1-activate-the-login-form",children:[]},{value:"2. Enter your email address",id:"2-enter-your-email-address",children:[]},{value:"3. Check your mailbox",id:"3-check-your-mailbox",children:[]},{value:"4. Go back to your app",id:"4-go-back-to-your-app",children:[]},{value:"A component to deal with email authentication",id:"a-component-to-deal-with-email-authentication",children:[]},{value:"On Mobile App Authentification",id:"on-mobile-app-authentification",children:[]},{value:"Mobile App Active Session",id:"mobile-app-active-session",children:[]},{value:"On Mobile App Authentication",id:"on-mobile-app-authentication",children:[]},{value:"On Web connection",id:"on-web-connection",children:[]},{value:"Where to go from here?",id:"where-to-go-from-here",children:[]}],c={toc:l};function p(e){var t=e.components,s=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"OBJECTIVES")),Object(a.b)("p",{parentName:"blockquote"},"Integrate email confirmation to authenticate mobile app users")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"PREREQUISITES")),Object(a.b)("p",{parentName:"blockquote"},"The ",Object(a.b)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server"},"4D Mobile App Server")," component that allows email authentication is integrated in 4D mono and 4D server 18R4.")),Object(a.b)("p",null,"Let your customers and clients feel comfortable logging into their app using the email authentication!"),Object(a.b)("p",null,"It provides a way to verify that an email comes from whom it claims to be from, and will allow to block harmful or fraudulent uses of email."),Object(a.b)("p",null,"In short, the principle is the following:"),Object(a.b)("h3",{id:"1-activate-the-login-form"},"1. Activate the login form"),Object(a.b)("p",null,"You integrate a login form into your app, from the project editor in the Publishing section."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Email authentication activation",src:n(328).default})),Object(a.b)("h3",{id:"2-enter-your-email-address"},"2. Enter your email address"),Object(a.b)("p",null,'An email is required when the app is launched. When a user enters their email and clicks on the Login button, the On Mobile app Authentication is called and the user\'s session status should be updated to a "pending" status. A validation email is then sent to the user.'),Object(a.b)("h3",{id:"3-check-your-mailbox"},"3. Check your mailbox"),Object(a.b)("p",null,'When the validation email is available, the user only needs to click on the validation link. This will call the On Web Connection database method and update the user\'s session status from "pending" to "accepted".'),Object(a.b)("h3",{id:"4-go-back-to-your-app"},"4. Go back to your app"),Object(a.b)("p",null,'Once the validation is done, the user can reopen their app and click on the Login button. The On Mobile App Authentication is called again but this time, the user\'s session status is "accepted", so the access is granted!'),Object(a.b)("p",null,"That\u2019s quite simple, right?"),Object(a.b)("p",null,"So, to make the validation process easier and secure, 4D for iOS handles:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Authentication",src:n(329).default})),Object(a.b)("p",null,"But let's figure out how this works, using our special component!"),Object(a.b)("h1",{id:"using-the-component"},"Using the component"),Object(a.b)("h2",{id:"a-component-to-deal-with-email-authentication"},"A component to deal with email authentication"),Object(a.b)("p",null,"A toolbox component has been developed to help you manage several processes: the 4D Mobile App Server Component."),Object(a.b)("p",null,"Let's see how to use it!"),Object(a.b)("h2",{id:"on-mobile-app-authentification"},"On Mobile App Authentification"),Object(a.b)("p",null,"Call the Mobile ",Object(a.b)("strong",{parentName:"p"},"App Email Checker")," method in the ",Object(a.b)("strong",{parentName:"p"},"On Mobile App Authentification database")," method with the information provided by the mobile application:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-4d"},"C_OBJECT($0)\nC_OBJECT($1)\n$0:= Mobile App Email Checker ($1)\n\n")),Object(a.b)("h2",{id:"mobile-app-active-session"},"Mobile App Active Session"),Object(a.b)("p",null,"Call the ",Object(a.b)("strong",{parentName:"p"},"Activate sessions")," method in the ",Object(a.b)("strong",{parentName:"p"},"On Web Connection")," database method with the Session ID parameter retrieved from the URL:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-4d"},"C_TEXT($1)\nCase of \n: (Mobile App Active Session($1).success)\n    //add log if you want\nEnd case \n\n")),Object(a.b)("p",null,"Its as simple as that!\nYou will find more information about this component in the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Methods/Mobile%20App%20Email%20Checker.md"},"documentation"),", especially about resources you may use, like html templates and settings that you may want to define."),Object(a.b)("h1",{id:"without-the-component"},"Without the component"),Object(a.b)("p",null,"We will see here a basic example without using the component."),Object(a.b)("p",null,"To do so, here is the code you can use:"),Object(a.b)("h2",{id:"on-mobile-app-authentication"},"On Mobile App Authentication"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-4d"},'C_OBJECT($0;$1;$response;$request;$email;$status)\n\n  // parameters settings come from the mobile app\n$request:=$1\n\n  // Create an email with an activation URL\n$mail:=New object\n$mail.from:="myapplication@gmail.com"\n$mail.to:=$request.email  // email entered by the user on their smartphone\n$mail.subject:="Login confirmation"\n$mail.htmlBody:="<a href=\\"https://myserverapplication/activation/"+$request.session.id \\\n+"\\">Click Here to confirm your email.</a>\\"<br>"\n\n  // Send mail\n$smtp:=New object("host";"smtp.gmail.com";"user";"myapplication@gmail.com";"password";"xxx")\n$transporter:=SMTP New transporter($smtp)\n$status:=$transporter.send($mail)\n\n  // Configure response for 4D for iOS\n$response:=New object\n\n  // Declare that the current session is being verified\n$response.verify:=True\n\n  // Check if the email was successsfully sent\nIf ($status.success)\n      //create a share object to contain our sessions, accessible from all processes\n    If (Storage.pendingSessions=Null)\n        Use (Storage)\n            Storage.pendingSessions:=New shared object\n        End use \n    End if \n    \n    Use (Storage.pendingSessions)\n          //Add a session to our session lists\n        Storage.pendingSessions[$request.session.id]:=$request.team.id+"."+$request.application.id\n    End use \n    \n    $response.success:=True\n    $response.statusText:="Please check your mail box"\nElse \n      // Display an error message on the smatphone\n    $response.statusText:="The mail is not sent please try again later"\n    $response.success:=False\nEnd if \n\n$0:=$response\n\n')),Object(a.b)("h2",{id:"on-web-connection"},"On Web connection"),Object(a.b)("p",null,"This method will allow you activate the session after clicking on the link in the confirmation email."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-4d"},'C_TEXT($1;$2;$3;$4;$5;$6)\n\nC_TEXT($token;$session)\nC_OBJECT($sessionFile;$sessionObject)\n\nIf ($1="/activation/@")\n    $token:=Substring($1;13)\nEnd if \n\n\n  //get session from ID received from URL\nIf (Storage.pendingSessions#Null)\n    $session:=Storage.pendingSessions[$token]\nEnd if \n\nIf ($session#"")\n      //get session folder\n    $sessionFile:=Folder(fk mobileApps folder).folder($session).file($token)\n    $sessionObject:=JSON Parse($sessionFile.getText())\n      //update status value\n    $sessionObject.status:="accepted"\n    $sessionFile.setText(JSON Stringify($sessionObject))\n    Use (Storage.pendingSessions)\n          //delete pending session\n        OB REMOVE(Storage.pendingSessions;$token)\n    End use \n    \n    /*\n        The MOBILE APP REFRESH SESSIONS command checks all mobile\n        application session files located in the MobileApps folder of the server, \n        and updates existing session contents in memory for any edited files.\n    */\n\n    MOBILE APP REFRESH SESSIONS\n    \n    WEB SEND TEXT("You are successfully authenticated")\nElse \n    WEB SEND TEXT("Invalid session")\nEnd if \n')),Object(a.b)("p",null,"And that's it !"),Object(a.b)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),Object(a.b)("p",null,"We've covered basic email validation in this tutorial. You should now be able to easily access your 4D for iOS app !"))}p.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,d=u["".concat(s,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(d,r(r({ref:t},c),{},{components:n})):o.a.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<a;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},328:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/email-authentication-publishing-section-da455833e642c84d558a940c75e83953.png"},329:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/4D-for-iOS-email-auth-6e5d979a255eb468fc5d777636c9f442.png"}}]);