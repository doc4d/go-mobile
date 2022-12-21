"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1424],{56124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={id:"custom-login-form",title:"Custom Login Form"},i=void 0,s={unversionedId:"tutorials/login-forms/custom-login-form",id:"tutorials/login-forms/custom-login-form",title:"Custom Login Form",description:"This tutorial will show you how to:",source:"@site/docs/tutorials/login-forms/custom-login-form.md",sourceDirName:"tutorials/login-forms",slug:"/tutorials/login-forms/custom-login-form",permalink:"/go-mobile/docs/next/tutorials/login-forms/custom-login-form",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/tutorials/login-forms/custom-login-form.md",tags:[],version:"current",frontMatter:{id:"custom-login-form",title:"Custom Login Form"},sidebar:"tutorials",previous:{title:"Email authentication example",permalink:"/go-mobile/docs/next/tutorials/login-forms/email"},next:{title:"Install a template",permalink:"/go-mobile/docs/next/tutorials/gallery/install-gallery-template"}},l={},d=[{value:"STEP 1. Getting started",id:"step-1-getting-started",level:2},{value:"STEP 2. Include and use a custom login form",id:"step-2-include-and-use-a-custom-login-form",level:2},{value:"STEP 3. On Mobile app Authentication database method",id:"step-3-on-mobile-app-authentication-database-method",level:2},{value:"STEP 4. Project Methods",id:"step-4-project-methods",level:2},{value:"Authentication method",id:"authentication-method",level:3},{value:"GenerateQRCODE method",id:"generateqrcode-method",level:3},{value:"STEP 5. Website",id:"step-5-website",level:2},{value:"index.html",id:"indexhtml",level:3},{value:"createQRCode.html",id:"createqrcodehtml",level:3},{value:"generatedQRCode.shtml",id:"generatedqrcodeshtml",level:3},{value:"STEP 6. Get the entire scenario",id:"step-6-get-the-entire-scenario",level:2},{value:"Login into your website home page",id:"login-into-your-website-home-page",level:3},{value:"Generate the QR Code",id:"generate-the-qr-code",level:3},{value:"Build your app on a real device",id:"build-your-app-on-a-real-device",level:3}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial will show you how to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create and use a ",(0,o.kt)("a",{parentName:"li",href:"/go-mobile/docs/next/project-definition/publishing#login-form"},"custom login form"),". "),(0,o.kt)("li",{parentName:"ul"},"Allow authenticated users to login by scanning a QRCode.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To complete this tutorial, you need a real mobile device (simulators do not simulate camera).")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Scenario: You already have a website with authenticated users and you want them to login into their app just by scanning a QRCode with their device")),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://4d-go-mobile.github.io/gallery//#/type/form-login"},(0,o.kt)("strong",{parentName:"a"},"download this custom login form from the 4D go mobile gallery")),". "),(0,o.kt)("h2",{id:"step-1-getting-started"},"STEP 1. Getting started"),(0,o.kt)("p",null,"In this tutorial, we're going to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Include a custom login form"),(0,o.kt)("li",{parentName:"ul"},"Add the ability for your app users to login just by scanning a QRCode")),(0,o.kt)("p",null,"First download our Starter project, which contains a database file and ready to use webpages in the Webfolder folder:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomLoginForm/archive/main.zip"},"Starter project")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This project already includes a Users table with a Login and a Password for each authenticated user.")),(0,o.kt)("h2",{id:"step-2-include-and-use-a-custom-login-form"},"STEP 2. Include and use a custom login form"),(0,o.kt)("p",null,"To use a custom login form, the first thing you'll need to do is creating a ",(0,o.kt)("em",{parentName:"p"},"YourDatabase.4dbase/Resources/Mobile/form/login")," folder."),(0,o.kt)("p",null,"Download the Sign in With ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mesopelagique/form-login-SignInWithQRCode/archive/master.zip"},"QRCode login form")," and simply drop it in the login folder you've just created."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"login folder",src:n(29182).Z,width:"2020",height:"814"})),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/docs/next/project-definition/publishing#authentication-option"},"Publishing page")," of the project editor, click ",(0,o.kt)("strong",{parentName:"p"},"Authentication")," and select the ",(0,o.kt)("strong",{parentName:"p"},"SignInWithQRCode")," form. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"authentication activation",src:n(21626).Z,width:"400",height:"134"})),(0,o.kt)("h2",{id:"step-3-on-mobile-app-authentication-database-method"},"STEP 3. On Mobile app Authentication database method"),(0,o.kt)("p",null,"In the Publishing page, click on the ",(0,o.kt)("strong",{parentName:"p"},"Create...")," button to create and open the ",(0,o.kt)("inlineCode",{parentName:"p"},"On Mobile app Authentication")," database method for your project. This is how it should look to authenticated users :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'var $0 : Object\nvar $1 : Object\n\nvar $request; $response : Object\n\n$request:=$1  // Information provided by mobile application\n$response:=New object  // Information returned to mobile application\n\n$entity:=ds.User.query("login = :1"; $request.email)\nIf ($entity.length>0)\n    $password:=$entity.first().password  // Get the password from the table\n    \n    If (Verify password hash($password; $request.parameters.token))\n        // Comparison with what you receive in the request\n        \n        $response.success:=True\n    Else \n        $response.success:=False\n    End if \nElse \n    $response.success:=False\nEnd if \n\n// Optional message to display on mobile App.\nIf ($response.success)\n    $response.statusText:="You are successfully authenticated"\nElse \n    $response.statusText:="Sorry, you are not authorized to use this application."\nEnd if \n\n$0:=$response\n')),(0,o.kt)("h2",{id:"step-4-project-methods"},"STEP 4. Project Methods"),(0,o.kt)("h3",{id:"authentication-method"},"Authentication method"),(0,o.kt)("p",null,"Here we get the variable from the form and check if those values exist in the User table :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'//Retrieve all the variables of the form\nC_TEXT($1)\nARRAY TEXT($arrNames; 0)\nARRAY TEXT($arrVals; 0)\n\n// Get the login and pswd variable from the authentication web page\nWEB GET VARIABLES($arrNames; $arrVals)\n$VLOGIN:=Find in array($arrNames; "VLOGIN")\n$VPASS:=Find in array($arrNames; "VPASS")\n\n// Shared variable creation to access to it in the code\nUse (Storage)\n    Storage.session:=New shared object("login"; ""; "password"; "")\nEnd use \n\n// Search if the login / pswd exist and if the user can be authentified\n$entity:=ds.User.query("login = :1 and password = :2"; $arrVals{$VLOGIN}; $arrVals{$VPASS})\n\n// If the login / pswd exist the login / pswd are initialised in the share variable\nIf ($entity.length>0)\n    Use (Storage.session)\n        Storage.session.login:=$arrVals{$VLOGIN}\n        Storage.session.password:=$arrVals{$VPASS}\n        Storage.session.success:=True\n    End use \n    \n    // Redirection to the web page\n    WEB SEND HTTP REDIRECT("/createQRCode.html")\n    \nElse \n    // Back to the home page\n    Use (Storage.session)\n        Storage.session.success:=False\n    End use \n    WEB SEND HTTP REDIRECT("/")\nEnd if \n')),(0,o.kt)("h3",{id:"generateqrcode-method"},"GenerateQRCODE method"),(0,o.kt)("p",null,"Here we generate a ",(0,o.kt)("em",{parentName:"p"},"vqrCodeData")," process variable which is a json including the user email and the encrypted password. These data  are going to be embedded in the QRCode."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'// Use storage variable\n$currentUserEmail:=Storage.session.login\n$token:=Storage.session.password\n$options:=New object("algorithm"; "bcrypt"; "cost"; 4)\n$hash:=Generate password hash($token; $options)\n\n// Process variable creation (json value with mail and encrypted pswd)\nvqrCodeData:=JSON Stringify(New object("email"; $currentUserEmail; "token"; $hash))\n\n// Redirection to the QRcode webpage\nWEB SEND HTTP REDIRECT("/generatedQRCode.shtml")\n')),(0,o.kt)("h2",{id:"step-5-website"},"STEP 5. Website"),(0,o.kt)("p",null,"For this tutorial, three html pages are already available into the WebFolder folder:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The authentication page (index.html)"),(0,o.kt)("li",{parentName:"ul"},"The QRcode generation page (createQRCode.html)"),(0,o.kt)("li",{parentName:"ul"},"The final page the user will scan from his mobile device (generatedQRCode.shtml)")),(0,o.kt)("p",null,"Let's have a focus on those three pages :"),(0,o.kt)("h3",{id:"indexhtml"},"index.html"),(0,o.kt)("p",null,"Here, we just use a 4DACTION to post login and password to be used in the ",(0,o.kt)("em",{parentName:"p"},"Authentication Project Method")," that we are going to see in step 4:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'  <form class="box" ACTION="/4DACTION/Authentication" METHOD=post>\n  <h1>1. Login</h1>\n  <input type="text" id="login" placeholder="Username" name=VLOGIN >\n  <input type="password" id="login" placeholder="Password" name=VPASS>\n  <input type="submit" name="" value="Login">\n  </form>\n')),(0,o.kt)("h3",{id:"createqrcodehtml"},"createQRCode.html"),(0,o.kt)("p",null,"Here, we use call the ",(0,o.kt)("em",{parentName:"p"},"GenerateQRCODE Project Method")," using a 4DACTION:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<h1>2. GENERATE YOUR QRCODE</h1>\n    <div>\n        <p>Create your QRCode to authenticate clicking <a href="/4DACTION/GenerateQRCODE">Here</a></p>\n    </div>\n')),(0,o.kt)("h3",{id:"generatedqrcodeshtml"},"generatedQRCode.shtml"),(0,o.kt)("p",null,"In this last page, we use ",(0,o.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/Tags/tags.html"},"4D tags")," to get the ",(0,o.kt)("em",{parentName:"p"},"data")," value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<h1>3. SCAN THE QRCODE FROM YOUR PHONE</h1>\n  <div id="canvas"></div>\n\n  <script type="text/javascript">\n  \n    const qrCode = new QRCodeStyling({\n      width: 300,\n      height: 300,\n      data: \'\x3c!--#4DEVAL vqrCodeData--\x3e\',\n      dotsOptions: {\n        color: "#000",\n        type: "square"\n      },\n      backgroundOptions: {\n        color: "#FFFFFF",\n      }\n    });\n    qrCode.append(document.getElementById("canvas"));\n  <\/script>\n  \n')),(0,o.kt)("h2",{id:"step-6-get-the-entire-scenario"},"STEP 6. Get the entire scenario"),(0,o.kt)("h3",{id:"login-into-your-website-home-page"},"Login into your website home page"),(0,o.kt)("p",null,"Enter ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"mailto:david@4D.com"},"david@4D.com"))," in the Login field and ",(0,o.kt)("strong",{parentName:"p"},"TEST")," in the Password field in your website home page and click Login (Which is an existing record in the User table)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Login form",src:n(79189).Z,width:"2330",height:"1418"})),(0,o.kt)("h3",{id:"generate-the-qr-code"},"Generate the QR Code"),(0,o.kt)("p",null,"Click on the ",(0,o.kt)("strong",{parentName:"p"},"HERE")," button to generate the QR Code."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create QR Code",src:n(19847).Z,width:"2330",height:"1418"})),(0,o.kt)("p",null,"You will be redirected to the final QR Code page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Generated QR Code",src:n(1764).Z,width:"2554",height:"1594"})),(0,o.kt)("h3",{id:"build-your-app-on-a-real-device"},"Build your app on a real device"),(0,o.kt)("p",null,"Install your mobile app from the project editor on a real device."),(0,o.kt)("p",null,"Then the custom login form will appear to allow you scanning the generated QRCode and login into your mobile app."),(0,o.kt)("p",null,"Here is the final result :"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sign in with QR Code",src:n(99055).Z,width:"900",height:"563"})))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21626:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/authentication-custom-7d5e75e73e9d9861f5cde7bc8cf1a755.png"},19847:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-qr-code-92fb34962678fd5aec2c78c3975485e2.png"},1764:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/generated-qr-code-b8adf3b5a3147675e82e1c11828bfe16.png"},29182:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/login-folder-5b1131cc505b021c9991c73d79d626b2.png"},79189:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/login-form-503af282635c8c852d6ec6ff0697d820.png"},99055:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sign-in-with-qr-code-f835be625ce5eece635c10088e55430c.gif"}}]);