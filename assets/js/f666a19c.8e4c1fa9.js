(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(204)),i={id:"custom-login-form",title:"Custom Login Form"},s={unversionedId:"tutorials/creating-ios-app/custom-login-form",id:"tutorials/creating-ios-app/custom-login-form",isDocsHomePage:!1,title:"Custom Login Form",description:"OBJECTIVES",source:"@site/docs/tutorials/creating-ios-app/custom-login-form.md",slug:"/tutorials/creating-ios-app/custom-login-form",permalink:"/go-mobile/docs/tutorials/creating-ios-app/custom-login-form",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/creating-ios-app/custom-login-form.md",version:"current",sidebar:"tutorials",previous:{title:"Contact App",permalink:"/go-mobile/docs/tutorials/creating-ios-app/create-contact-app"},next:{title:"Xcode",permalink:"/go-mobile/docs/tutorials/customizing-with-xcode/what-is-xcode"}},l=[{value:"STEP 1. Getting started",id:"step-1-getting-started",children:[]},{value:"STEP 2. Include and use a custom login form",id:"step-2-include-and-use-a-custom-login-form",children:[]},{value:"STEP 3. On Mobile app Authentication database method",id:"step-3-on-mobile-app-authentication-database-method",children:[]},{value:"STEP 4. Project Methods",id:"step-4-project-methods",children:[{value:"Authentication method",id:"authentication-method",children:[]},{value:"GenerateQRCODE method",id:"generateqrcode-method",children:[]}]},{value:"STEP 5. Website",id:"step-5-website",children:[{value:"index.html",id:"indexhtml",children:[]},{value:"createQRCode.html",id:"createqrcodehtml",children:[]},{value:"generatedQRCode.shtml",id:"generatedqrcodeshtml",children:[]}]},{value:"STEP 6. Get the entire senario",id:"step-6-get-the-entire-senario",children:[{value:"Login into your website home page",id:"login-into-your-website-home-page",children:[]},{value:"Generate the QRCode",id:"generate-the-qrcode",children:[]},{value:"Build your app on a real device",id:"build-your-app-on-a-real-device",children:[]}]},{value:"STEP 7. Where to go from here?",id:"step-7-where-to-go-from-here",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"OBJECTIVES")),Object(r.b)("p",{parentName:"blockquote"},"Use a custom login form"),Object(r.b)("p",{parentName:"blockquote"},"Allow authenticated users to login by scanning a QRCode")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"PREREQUISITES")),Object(r.b)("p",{parentName:"blockquote"},"A website with authenticated users"),Object(r.b)("p",{parentName:"blockquote"},"4D 18R6 minimum"),Object(r.b)("p",{parentName:"blockquote"},"Real iOS mobile device (simulator do not simulate camera)")),Object(r.b)("p",null,"This tutorial will allow you to quickly and easily integrate a custom ",Object(r.b)("a",{parentName:"p",href:"https://4d-for-ios.github.io/gallery/#/type/form-login"},"login form"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Scenario: You already have a website with authenticated users and you want then to login into their app just by scanning a QRCode")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"NOTE")),Object(r.b)("p",{parentName:"blockquote"},"Selecting a custom login form from the Project editor is not implemented yet but let's see how to do that manually")),Object(r.b)("h2",{id:"step-1-getting-started"},"STEP 1. Getting started"),Object(r.b)("p",null,"In this tutorial, we're going to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Include a custom login form"),Object(r.b)("li",{parentName:"ul"},"Add the ability for your app users to login just by scanning a QRCode")),Object(r.b)("p",null,"First download our Starter project, which contains a database file and ready to use webpages in the Webfolder folder:"),Object(r.b)("div",{style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},Object(r.b)("a",{className:"button button--primary",href:"https://github.com/4d-for-ios/tutorial-CustomLoginForm/archive/main.zip"},"Starter project")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"NOTE")),Object(r.b)("p",{parentName:"blockquote"},"This project already includes a Users table with a Login and a Password for each authenticated user.")),Object(r.b)("h2",{id:"step-2-include-and-use-a-custom-login-form"},"STEP 2. Include and use a custom login form"),Object(r.b)("p",null,"To use a custom login form, the first thing you'll need to do is creating a ",Object(r.b)("em",{parentName:"p"},"YourDatabase.4dbase/Resources/Mobile/form/login")," folder."),Object(r.b)("p",null,"Download the Sign in With ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mesopelagique/form-login-SignInWithQRCode/archive/master.zip"},"QRCode login form")," and simply drop it in the login folder you've just created."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"![login folder](assets/en/custom-login-form/login-folder.png)")),Object(r.b)("p",null,"Then open the ",Object(r.b)("em",{parentName:"p"},"YourDatabase.4dbase/Mobile Projects/ContactQRCodeLogin/project.4dmobileapp")," file"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"![project.4dmobileapp](assets/en/custom-login-form/4dmobileapp-file.png)")),Object(r.b)("p",null,"With your project closed, and add the following line : ",Object(r.b)("em",{parentName:"p"},'"login": "/SignInWithQRCode",')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{\n    "info": {\n        "version": 5,\n        "target": "iOS",\n        "ideVersion": "1870",\n        "ideBuildVersion": "261295",\n        "componentBuild": ""\n    },\n    "login": "/SignInWithQRCode",\n    ...\n\n')),Object(r.b)("p",null,"This will allow to initialize the custom template and use it during the build process."),Object(r.b)("p",null,"You are done for the custom template int\xe9gration! So quite an easy process :)"),Object(r.b)("h2",{id:"step-3-on-mobile-app-authentication-database-method"},"STEP 3. On Mobile app Authentication database method"),Object(r.b)("p",null,"Open the QRCode mobile project and go right to the Publishing section. "),Object(r.b)("p",null,"From here check the Authentication feature and Create the database method clicking on the Create button."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"![Publishing section](assets/en/custom-login-form/publishing-section.png)")),Object(r.b)("p",null,"This is how it should look to authenticate users :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'var $0 : Object\nvar $1 : Object\n\nvar $request; $response : Object\n\n$request:=$1  // Informations provided by mobile application\n$response:=New object  // Informations returned to mobile application\n\n$entity:=ds.User.query("login = :1"; $request.email)\nIf ($entity.length>0)\n    $password:=$entity.first().password  // Get the password from the table\n    \n    If (Verify password hash($password; $request.parameters.token))\n        // Comparison with what you receive in the request\n        \n        $response.success:=True\n    Else \n        $response.success:=False\n    End if \nElse \n    $response.success:=False\nEnd if \n\n// Optional message to display on mobile App.\nIf ($response.success)\n    $response.statusText:="You are successfully authenticated"\nElse \n    $response.statusText:="Sorry, you are not authorized to use this application."\nEnd if \n\n$0:=$response\n')),Object(r.b)("h2",{id:"step-4-project-methods"},"STEP 4. Project Methods"),Object(r.b)("h3",{id:"authentication-method"},"Authentication method"),Object(r.b)("p",null,"Here we get the variable from the form and check if those values exist in the User table :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'//Retrieve all the variables of the form\nC_TEXT($1)\nARRAY TEXT($arrNames; 0)\nARRAY TEXT($arrVals; 0)\n\n// Get the login and pswd variable from the authentication web page\nWEB GET VARIABLES($arrNames; $arrVals)\n$VLOGIN:=Find in array($arrNames; "VLOGIN")\n$VPASS:=Find in array($arrNames; "VPASS")\n\n// Shared variable creation to access to it in the code\nUse (Storage)\n    Storage.session:=New shared object("login"; ""; "password"; "")\nEnd use \n\n// Search if the login / pswd exist and if the user can be authentified\n$entity:=ds.User.query("login = :1 and password = :2"; $arrVals{$VLOGIN}; $arrVals{$VPASS})\n\n// If the login / pswd exist the login / pswd are initialised in the share variable\nIf ($entity.length>0)\n    Use (Storage.session)\n        Storage.session.login:=$arrVals{$VLOGIN}\n        Storage.session.password:=$arrVals{$VPASS}\n        Storage.session.success:=True\n    End use \n    \n    // Redirection to the web page\n    WEB SEND HTTP REDIRECT("/createQRCode.html")\n    \nElse \n    // Back to the home page\n    Use (Storage.session)\n        Storage.session.success:=False\n    End use \n    WEB SEND HTTP REDIRECT("/")\nEnd if \n')),Object(r.b)("h3",{id:"generateqrcode-method"},"GenerateQRCODE method"),Object(r.b)("p",null,"Here we generated a vqrCodeData that is a json that include the user email and the encrtypted password that are the data that are going to be emebeded in the QRCode."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'// Use storage variable\n$currentUserEmail:=Storage.session.login\n$token:=Storage.session.password\n$options:=New object("algorithm"; "bcrypt"; "cost"; 4)\n$hash:=Generate password hash($token; $options)\n\n// Process variable creation (json value with mail and encrypted pswd)\nvqrCodeData:=JSON Stringify(New object("email"; $currentUserEmail; "token"; $hash))\n\n// Redirection to the QRcode webpage\nWEB SEND HTTP REDIRECT("/generatedQRCode.shtml")\n')),Object(r.b)("h2",{id:"step-5-website"},"STEP 5. Website"),Object(r.b)("p",null,"For this tutorial, three html pages are already available into the WebFolder folder:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The authentication page (index.html)"),Object(r.b)("li",{parentName:"ul"},"The QRcode generation page (createQRCode.html)"),Object(r.b)("li",{parentName:"ul"},"The final page the user will scan from his mobile device (generatedQRCode.shtml)")),Object(r.b)("p",null,"Let's have a focus on those three pages :"),Object(r.b)("h3",{id:"indexhtml"},"index.html"),Object(r.b)("p",null,"Here, we just use a 4DACTION to post login and password to be used in the ",Object(r.b)("em",{parentName:"p"},"Authentication Project Method")," that we are going to see in step 4:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'  <form class="box" ACTION="/4DACTION/Authentication" METHOD=post>\n  <h1>1. Login</h1>\n  <input type="text" id="login" placeholder="Username" name=VLOGIN >\n  <input type="password" id="login" placeholder="Password" name=VPASS>\n  <input type="submit" name="" value="Login">\n  </form>\n')),Object(r.b)("h3",{id:"createqrcodehtml"},"createQRCode.html"),Object(r.b)("p",null,"Here, we use call the ",Object(r.b)("em",{parentName:"p"},"GenerateQRCODE Project Method")," using a 4DACTION:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'<h1>2. GENERATE YOUR QRCODE</h1>\n    <div>\n        <p>Create your QRCode to authenticate clicking <a href="/4DACTION/GenerateQRCODE">Here</a></p>\n    </div>\n')),Object(r.b)("h3",{id:"generatedqrcodeshtml"},"generatedQRCode.shtml"),Object(r.b)("p",null,"In this last page, we use ",Object(r.b)("inlineCode",{parentName:"p"},"[4D tags](https://doc.4d.com/4Dv18R6/4D/18-R6/4D-Transformation-Tags.300-5198150.en.html)")," to get the ",Object(r.b)("em",{parentName:"p"},"data")," value:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'<h1>3. SCAN THE QRCODE FROM YOUR PHONE</h1>\n  <div id="canvas"></div>\n\n  <script type="text/javascript">\n  \n    const qrCode = new QRCodeStyling({\n      width: 300,\n      height: 300,\n      data: \'\x3c!--#4DEVAL vqrCodeData--\x3e\',\n      dotsOptions: {\n        color: "#000",\n        type: "square"\n      },\n      backgroundOptions: {\n        color: "#FFFFFF",\n      }\n    });\n    qrCode.append(document.getElementById("canvas"));\n  <\/script>\n  \n')),Object(r.b)("h2",{id:"step-6-get-the-entire-senario"},"STEP 6. Get the entire senario"),Object(r.b)("h3",{id:"login-into-your-website-home-page"},"Login into your website home page"),Object(r.b)("p",null,"Enter ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"mailto:david@4D.com"},"david@4D.com"))," in the Login field and ",Object(r.b)("strong",{parentName:"p"},"TEST")," in the Password field in your website home page and click Login (Which is an existing record in the User table)."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"![Login form](assets/en/custom-login-form/login-form.png)")),Object(r.b)("h3",{id:"generate-the-qrcode"},"Generate the QRCode"),Object(r.b)("p",null,"Click on the ",Object(r.b)("strong",{parentName:"p"},"HERE")," button to generate the QRCode."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"![Create QRCode](assets/en/custom-login-form/create-QRCode.png)")),Object(r.b)("p",null,"You will be redirected to the final QRCode page."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"![Generated QRCode](assets/en/custom-login-form/generated-QRCode.png)")),Object(r.b)("h3",{id:"build-your-app-on-a-real-device"},"Build your app on a real device"),Object(r.b)("p",null,"Install your mobile app from the project editor on a real device."),Object(r.b)("p",null,"Then the custom login form will appear to allow you scanning the generated QRCode and login into your mobile app."),Object(r.b)("p",null,"Here is the final result :"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"![Sign in with QRCode](assets/en/custom-login-form/sign-in-with-QRCode.gif)")),Object(r.b)("h2",{id:"step-7-where-to-go-from-here"},"STEP 7. Where to go from here?"),Object(r.b)("p",null,"The step 2 covers how to include easily any custom login form in your mobile app. So you should now be able just followin this step, to create your own custom login form and use it on your own.  "),Object(r.b)("p",null,"Reading next steps you are now able to include the Sign In With QRCode login and allow your authenticated users to scan a QRCode to login into their app."))}p.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=o,h=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return n?a.a.createElement(h,s(s({ref:t},c),{},{components:n})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);