"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1379],{19243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const i={id:"custom-login-form",title:"Custom Login Form"},r=void 0,s={unversionedId:"tutorials/custom-login-form",id:"version-19-R5/tutorials/custom-login-form",title:"Custom Login Form",description:"This tutorial will show you how to:",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R5/tutorials/custom-login-form.md",sourceDirName:"tutorials",slug:"/tutorials/custom-login-form",permalink:"/fr/19-R5/tutorials/custom-login-form",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/custom-login-form.md",tags:[],version:"19-R5",frontMatter:{id:"custom-login-form",title:"Custom Login Form"},sidebar:"tutorials",previous:{title:"Cr\xe9ez votre premi\xe8re application mobile avec 4D",permalink:"/fr/19-R5/tutorials/create-your-first-app"},next:{title:"Mod\xe8les de formulaire Liste",permalink:"/fr/19-R5/tutorials/creating-list-forms/list-form-template"}},l={},d=[{value:"\xc9TAPE 1. Prise en main",id:"\xe9tape-1-prise-en-main",level:2},{value:"\xc9TAPE 2. Include and use a custom login form",id:"\xe9tape-2-include-and-use-a-custom-login-form",level:2},{value:"\xc9TAPE 3. On Mobile app Authentication database method",id:"\xe9tape-3-on-mobile-app-authentication-database-method",level:2},{value:"\xc9TAPE 4. Project Methods",id:"\xe9tape-4-project-methods",level:2},{value:"Authentication method",id:"authentication-method",level:3},{value:"GenerateQRCODE method",id:"generateqrcode-method",level:3},{value:"STEP 5. Website",id:"step-5-website",level:2},{value:"index.html",id:"indexhtml",level:3},{value:"createQRCode.html",id:"createqrcodehtml",level:3},{value:"generatedQRCode.shtml",id:"generatedqrcodeshtml",level:3},{value:"\xc9TAPE 6. Get the entire senario",id:"\xe9tape-6-get-the-entire-senario",level:2},{value:"Login into your website home page",id:"login-into-your-website-home-page",level:3},{value:"Generate the QR Code",id:"generate-the-qr-code",level:3},{value:"Build your app on a real device",id:"build-your-app-on-a-real-device",level:3},{value:"\xc9TAPE 7. Que faire ensuite ?",id:"\xe9tape-7-que-faire-ensuite-",level:2}],p={toc:d};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial will show you how to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create and use a custom ",(0,o.kt)("a",{parentName:"li",href:"https://4d-for-ios.github.io/gallery/#/type/form-login"},"login form"),"."),(0,o.kt)("li",{parentName:"ul"},"Allow authenticated users to login by scanning a QRCode.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"CONDITIONS PR\xc9ALABLES")),(0,o.kt)("p",{parentName:"blockquote"},"A website with authenticated users"),(0,o.kt)("p",{parentName:"blockquote"},"4D 18R6 minimum"),(0,o.kt)("p",{parentName:"blockquote"},"Real iOS mobile device (simulator do not simulate camera)")))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Scenario: You already have a website with authenticated users and you want then to login into their app just by scanning a QRCode")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Selecting a custom login form from the Project editor is not implemented yet but let's see how to do that manually"))),(0,o.kt)("h2",{id:"\xe9tape-1-prise-en-main"},"\xc9TAPE 1. Prise en main"),(0,o.kt)("p",null,"In this tutorial, we're going to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Include a custom login form"),(0,o.kt)("li",{parentName:"ul"},"Add the ability for your app users to login just by scanning a QRCode")),(0,o.kt)("p",null,"First download our Starter project, which contains a database file and ready to use webpages in the Webfolder folder:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomLoginForm/archive/main.zip"},"Projet Starter")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This project already includes a Users table with a Login and a Password for each authenticated user."))),(0,o.kt)("h2",{id:"\xe9tape-2-include-and-use-a-custom-login-form"},"\xc9TAPE 2. Include and use a custom login form"),(0,o.kt)("p",null,"To use a custom login form, the first thing you'll need to do is creating a ",(0,o.kt)("em",{parentName:"p"},"YourDatabase.4dbase/Resources/Mobile/form/login")," folder."),(0,o.kt)("p",null,"Download the Sign in With ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mesopelagique/form-login-SignInWithQRCode/archive/master.zip"},"QRCode login form")," and simply drop it in the login folder you've just created."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"login folder",src:n(93102).Z,width:"2020",height:"814"})),(0,o.kt)("p",null,"Then open the ",(0,o.kt)("em",{parentName:"p"},"YourDatabase.4dbase/Mobile Projects/ContactQRCodeLogin/project.4dmobileapp")," file"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"project.4dmobileapp",src:n(18968).Z,width:"2020",height:"814"})),(0,o.kt)("p",null,"With your project closed, and add the following line : ",(0,o.kt)("em",{parentName:"p"},'"login": "/SignInWithQRCode",')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "info": {\n        "version": 5,\n        "target": "iOS",\n        "ideVersion": "1870",\n        "ideBuildVersion": "261295",\n        "componentBuild": ""\n    },\n    "login": "/SignInWithQRCode",\n    ...\n\n')),(0,o.kt)("p",null,"This will allow to initialize the custom template and use it during the build process."),(0,o.kt)("p",null,"You are done for the custom template int\xe9gration! So quite an easy process :)"),(0,o.kt)("h2",{id:"\xe9tape-3-on-mobile-app-authentication-database-method"},"\xc9TAPE 3. On Mobile app Authentication database method"),(0,o.kt)("p",null,"Open the QRCode mobile project and go right to the Publishing section."),(0,o.kt)("p",null,"From here check the Authentication feature and Create the database method clicking on the Create button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Publishing section",src:n(55808).Z,width:"2164",height:"2000"})),(0,o.kt)("p",null,"This is how it should look to authenticate users :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'var $0 : Object\nvar $1 : Object\n\nvar $request; $response : Object\n\n$request:=$1  // Informations provided by mobile application\n$response:=New object  // Informations returned to mobile application\n\n$entity:=ds.User.query("login = :1"; $request.email)\nIf ($entity.length>0)\n    $password:=$entity.first().password  // Get the password from the table\n\n    If (Verify password hash($password; $request.parameters.token))\n        // Comparison with what you receive in the request\n\n        $response.success:=True\n    Else \n        $response.success:=False\n    End if \nElse \n    $response.success:=False\nEnd if \n\n// Optional message to display on mobile App.\nIf ($response.success)\n    $response.statusText:="You are successfully authenticated"\nElse \n    $response.statusText:="Sorry, you are not authorized to use this application."\nEnd if \n\n$0:=$response\n')),(0,o.kt)("h2",{id:"\xe9tape-4-project-methods"},"\xc9TAPE 4. Project Methods"),(0,o.kt)("h3",{id:"authentication-method"},"Authentication method"),(0,o.kt)("p",null,"Here we get the variable from the form and check if those values exist in the User table :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'//Retrieve all the variables of the form\nC_TEXT($1)\nARRAY TEXT($arrNames; 0)\nARRAY TEXT($arrVals; 0)\n\n// Get the login and pswd variable from the authentication web page\nWEB GET VARIABLES($arrNames; $arrVals)\n$VLOGIN:=Find in array($arrNames; "VLOGIN")\n$VPASS:=Find in array($arrNames; "VPASS")\n\n// Shared variable creation to access to it in the code\nUse (Storage)\n    Storage.session:=New shared object("login"; ""; "password"; "")\nEnd use \n\n// Search if the login / pswd exist and if the user can be authentified\n$entity:=ds.User.query("login = :1 and password = :2"; $arrVals{$VLOGIN}; $arrVals{$VPASS})\n\n// If the login / pswd exist the login / pswd are initialised in the share variable\nIf ($entity.length>0)\n    Use (Storage.session)\n        Storage.session.login:=$arrVals{$VLOGIN}\n        Storage.session.password:=$arrVals{$VPASS}\n        Storage.session.success:=True\n    End use \n\n    // Redirection to the web page\n    WEB SEND HTTP REDIRECT("/createQRCode.html")\n\nElse \n    // Back to the home page\n    Use (Storage.session)\n        Storage.session.success:=False\n    End use \n    WEB SEND HTTP REDIRECT("/")\nEnd if \n')),(0,o.kt)("h3",{id:"generateqrcode-method"},"GenerateQRCODE method"),(0,o.kt)("p",null,"Here we generated a vqrCodeData that is a json that include the user email and the encrtypted password that are the data that are going to be emebeded in the QRCode."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'// Use storage variable\n$currentUserEmail:=Storage.session.login\n$token:=Storage.session.password\n$options:=New object("algorithm"; "bcrypt"; "cost"; 4)\n$hash:=Generate password hash($token; $options)\n\n// Process variable creation (json value with mail and encrypted pswd)\nvqrCodeData:=JSON Stringify(New object("email"; $currentUserEmail; "token"; $hash))\n\n// Redirection to the QRcode webpage\nWEB SEND HTTP REDIRECT("/generatedQRCode.shtml")\n')),(0,o.kt)("h2",{id:"step-5-website"},"STEP 5. Website"),(0,o.kt)("p",null,"For this tutorial, three html pages are already available into the WebFolder folder:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The authentication page (index.html)"),(0,o.kt)("li",{parentName:"ul"},"The QRcode generation page (createQRCode.html)"),(0,o.kt)("li",{parentName:"ul"},"The final page the user will scan from his mobile device (generatedQRCode.shtml)")),(0,o.kt)("p",null,"Let's have a focus on those three pages :"),(0,o.kt)("h3",{id:"indexhtml"},"index.html"),(0,o.kt)("p",null,"Here, we just use a 4DACTION to post login and password to be used in the ",(0,o.kt)("em",{parentName:"p"},"Authentication Project Method")," that we are going to see in step 4:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'  <form class="box" ACTION="/4DACTION/Authentication" METHOD=post>\n  <h1>1. Login</h1>\n  <input type="text" id="login" placeholder="Username" name=VLOGIN >\n  <input type="password" id="login" placeholder="Password" name=VPASS>\n  <input type="submit" name="" value="Login">\n  </form>\n')),(0,o.kt)("h3",{id:"createqrcodehtml"},"createQRCode.html"),(0,o.kt)("p",null,"Here, we use call the ",(0,o.kt)("em",{parentName:"p"},"GenerateQRCODE Project Method")," using a 4DACTION:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<h1>2. GENERATE YOUR QRCODE</h1>\n    <div>\n        <p>Create your QRCode to authenticate clicking <a href="/4DACTION/GenerateQRCODE">Here</a></p>\n    </div>\n')),(0,o.kt)("h3",{id:"generatedqrcodeshtml"},"generatedQRCode.shtml"),(0,o.kt)("p",null,"In this last page, we use ",(0,o.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Tags/tags.html"},"4D tags")," to get the ",(0,o.kt)("em",{parentName:"p"},"data")," value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<h1>3. SCAN THE QRCODE FROM YOUR PHONE</h1>\n  <div id="canvas"></div>\n\n  <script type="text/javascript">\n\n    const qrCode = new QRCodeStyling({\n      width: 300,\n      height: 300,\n      data: \'\x3c!--#4DEVAL vqrCodeData--\x3e\',\n      dotsOptions: {\n        color: "#000",\n        type: "square"\n      },\n      backgroundOptions: {\n        color: "#FFFFFF",\n      }\n    });\n    qrCode.append(document.getElementById("canvas"));\n  <\/script>\n\n')),(0,o.kt)("h2",{id:"\xe9tape-6-get-the-entire-senario"},"\xc9TAPE 6. Get the entire senario"),(0,o.kt)("h3",{id:"login-into-your-website-home-page"},"Login into your website home page"),(0,o.kt)("p",null,"Enter ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"mailto:david@4D.com"},"david@4D.com"))," in the Login field and ",(0,o.kt)("strong",{parentName:"p"},"TEST")," in the Password field in your website home page and click Login (Which is an existing record in the User table)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Login form",src:n(33011).Z,width:"2330",height:"1418"})),(0,o.kt)("h3",{id:"generate-the-qr-code"},"Generate the QR Code"),(0,o.kt)("p",null,"Click on the ",(0,o.kt)("strong",{parentName:"p"},"HERE")," button to generate the QR Code."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create QR Code",src:n(76418).Z,width:"2330",height:"1418"})),(0,o.kt)("p",null,"You will be redirected to the final QR Code page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Generated QR Code",src:n(48193).Z,width:"2554",height:"1594"})),(0,o.kt)("h3",{id:"build-your-app-on-a-real-device"},"Build your app on a real device"),(0,o.kt)("p",null,"Install your mobile app from the project editor on a real device."),(0,o.kt)("p",null,"Then the custom login form will appear to allow you scanning the generated QRCode and login into your mobile app."),(0,o.kt)("p",null,"Here is the final result :"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sign in with QR Code",src:n(9118).Z,width:"900",height:"563"})),(0,o.kt)("h2",{id:"\xe9tape-7-que-faire-ensuite-"},"\xc9TAPE 7. Que faire ensuite ?"),(0,o.kt)("p",null,"The step 2 covers how to include easily any custom login form in your mobile app. So you should now be able just followin this step, to create your own custom login form and use it on your own."),(0,o.kt)("p",null,"Reading next steps you are now able to include the Sign In With QRCode login and allow your authenticated users to scan a QRCode to login into their app."))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18968:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4dmobileapp-file-7cfeb3ed913af5e2efd4e5648fa04fb8.png"},76418:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-qr-code-92fb34962678fd5aec2c78c3975485e2.png"},48193:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/generated-qr-code-b8adf3b5a3147675e82e1c11828bfe16.png"},93102:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/login-folder-5b1131cc505b021c9991c73d79d626b2.png"},33011:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/login-form-503af282635c8c852d6ec6ff0697d820.png"},55808:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/publishing-section-88709c4b88a53b4c808e536eaa85a51f.png"},9118:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sign-in-with-qr-code-f835be625ce5eece635c10088e55430c.gif"}}]);