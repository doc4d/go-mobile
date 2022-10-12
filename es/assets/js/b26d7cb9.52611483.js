"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[634],{18170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const i={id:"on-mobile-app-authentication",title:"On Mobile App Authentication"},r=void 0,o={unversionedId:"4d/on-mobile-app-authentication",id:"4d/on-mobile-app-authentication",title:"On Mobile App Authentication",description:"On Mobile App Authentication( mobileInfo Object",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/4d/on-mobile-app-authentication.md",sourceDirName:"4d",slug:"/4d/on-mobile-app-authentication",permalink:"/go-mobile/es/docs/next/4d/on-mobile-app-authentication",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/4d/on-mobile-app-authentication.md",tags:[],version:"current",frontMatter:{id:"on-mobile-app-authentication",title:"On Mobile App Authentication"},sidebar:"docs",previous:{title:"From your Android device",permalink:"/go-mobile/es/docs/next/debug/from-your-android-device-and-android-studio"},next:{title:"On Mobile App Action",permalink:"/go-mobile/es/docs/next/4d/on-mobile-app-action"}},p={},s=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Authenticating a mobile request",id:"authenticating-a-mobile-request",level:2},{value:"Guest access",id:"guest-access",level:3},{value:"Example",id:"example",level:2}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"On Mobile App Authentication"),"( ",(0,l.kt)("em",{parentName:"p"},"mobileInfo")," : Object ) -> ",(0,l.kt)("em",{parentName:"p"},"result")," : Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mobileInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Information passed by the mobile application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"Authentication status")))),(0,l.kt)("h2",{id:"descripci\xf3n"},"Descripci\xf3n"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"On Mobile App Authentication")," 4D database method is in charge of managing mobile app authentication to 4D Server or 4D. It is automatically called by 4D when a user agent sends a login request to 4D Server or 4D for the first time."),(0,l.kt)("p",null,":::nota"),(0,l.kt)("p",null,"A user agent is defined by an application ID, a device ID, and a team ID. These ids are passed to the ",(0,l.kt)("inlineCode",{parentName:"p"},"On Mobile App Authentication")," database method (see below). :::"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"On Mobile App Authentication")," database method is always called for a first connection, even if the mobile application was built in Guest mode."),(0,l.kt)("p",null,"The method receives all necessary information from the mobile application in the ",(0,l.kt)("em",{parentName:"p"},"mobileInfo")," parameter (object), and must return an authentication status in the ",(0,l.kt)("em",{parentName:"p"},"result")," parameter (object). You must declare and initialize these parameters as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"\n  //On Mobile App Authentication database method\n#DECLARE ($mobileInfo : Object) -> $result : Object\n\n  // ...Code for the method\n$result:=New object() //do not forget to create the object to return\n\n")),(0,l.kt)("p",null,"The following properties are received in the ",(0,l.kt)("em",{parentName:"p"},"mobileInfo")," object parameter:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Propiedad"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Texto"),(0,l.kt)("td",{parentName:"tr",align:null},"User email. Not mandatory, can be empty for guest access")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"application"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Information about the mobile application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"Texto"),(0,l.kt)("td",{parentName:"tr",align:null},"Mobile application id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"Texto"),(0,l.kt)("td",{parentName:"tr",align:null},"Mobile application name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"Texto"),(0,l.kt)("td",{parentName:"tr",align:null},"Mobile application version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"device"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Information about the mobile device (usually, a mobile phone)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"Texto"),(0,l.kt)("td",{parentName:"tr",align:null},"Generated unique device id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"Texto"),(0,l.kt)("td",{parentName:"tr",align:null},"System version of the device")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"Texto"),(0,l.kt)("td",{parentName:"tr",align:null},"Description of the device")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"simulator"),(0,l.kt)("td",{parentName:"tr",align:null},"Booleano"),(0,l.kt)("td",{parentName:"tr",align:null},"True if the device is a simulator")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"team"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Apple Developer Team information")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"Texto"),(0,l.kt)("td",{parentName:"tr",align:null},"Team id (allows developers to use the Xcode project Build and Run functionality)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"language"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Language settings of the user device")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"Texto"),(0,l.kt)("td",{parentName:"tr",align:null},"User device current language id, ex: en_US")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"region"),(0,l.kt)("td",{parentName:"tr",align:null},"Texto"),(0,l.kt)("td",{parentName:"tr",align:null},"User device current region, ex: US")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"Texto"),(0,l.kt)("td",{parentName:"tr",align:null},"User device current language, ex: en")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parameters"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Any additional information that could be added by the mobile app for custom use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"session"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Session information")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"Texto"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID of the ",(0,l.kt)("a",{parentName:"td",href:"https://developer.4d.com/docs/API/SessionClass.html"},"Session")," object on the 4D server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ip"),(0,l.kt)("td",{parentName:"tr",align:null},"Texto"),(0,l.kt)("td",{parentName:"tr",align:null},"Client IP address")))),(0,l.kt)("p",null,":::nota"),(0,l.kt)("p",null,"You can access the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/API/SessionClass.html"},"Session object")," automatically created on the 4D server from this database method. You can use this object to control the mobile session. If the server is restarted, the id and privileges of existing mobile sessions are automatically restored. Other session properties such as ",(0,l.kt)("inlineCode",{parentName:"p"},"Storage"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"expirationDate")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"idleTimeout")," are reset."),(0,l.kt)("p",null,":::"),(0,l.kt)("p",null,"After processing information, the database method should return a ",(0,l.kt)("em",{parentName:"p"},"result")," object with the following properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Propiedad"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"User values to filter queries.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},"Booleano"),(0,l.kt)("td",{parentName:"tr",align:null},"True if authentication is successful, False otherwise. If success=False, the connection is denied.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statusText"),(0,l.kt)("td",{parentName:"tr",align:null},"Texto"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Message to display on the mobile application. If success=true, welcome message; if success=false, can be used to provide user with an explanation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"verify"),(0,l.kt)("td",{parentName:"tr",align:null},"Booleano"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) True if you want to validate the first login of the ",(0,l.kt)("a",{parentName:"td",href:"/go-mobile/es/docs/next/special-features/session-management"},"user session"),", False otherwise. Default is False")))),(0,l.kt)("p",null,"The connection is automatically rejected if:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"no value is set to ",(0,l.kt)("em",{parentName:"li"},"result")," or ",(0,l.kt)("em",{parentName:"li"},"result")," is not defined,"),(0,l.kt)("li",{parentName:"ul"},"an invalid value is set to ",(0,l.kt)("em",{parentName:"li"},"result"),","),(0,l.kt)("li",{parentName:"ul"},"the ",(0,l.kt)("inlineCode",{parentName:"li"},"On Mobile App Authentication")," database method is not defined in the application.")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},'The connection is automatically accepted if it comes from "localhost" since it is considered a developer testing connection.')),(0,l.kt)("h2",{id:"authenticating-a-mobile-request"},"Authenticating a mobile request"),(0,l.kt)("p",null,"Basically, authenticating a mobile application connection request is based upon the provided email. For example, if you want to grant access only to connections from emails at 4d.com domain, you can write in the ",(0,l.kt)("inlineCode",{parentName:"p"},"On Mobile App Authentication")," database method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},' #DECLARE ($mobileInfo : Object) -> $result : Object  \n\n If($mobileInfo.email="@"+Char(At sign)+"4d.com")\n    $result.success:=True\n End if\n')),(0,l.kt)("p",null,"You can also identify the user agent using the ",(0,l.kt)("inlineCode",{parentName:"p"},"application.id"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"device.id"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"team.id")," from the ",(0,l.kt)("inlineCode",{parentName:"p"},"$mobileInfo")," object, and decide to allow or deny access."),(0,l.kt)("p",null,"If you want to validate emails afterwards, return ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"$result.verify"),"."),(0,l.kt)("h3",{id:"guest-access"},"Guest access"),(0,l.kt)("p",null,'If the mobile application has been built with the "Requires an email to connect" option ',(0,l.kt)("strong",{parentName:"p"},"unchecked"),', it is a "guest mode" application. Then, the ',(0,l.kt)("inlineCode",{parentName:"p"},"$mobileInfo.email")," string will be provided empty. In this case, you can:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"allow access to guests by returning ",(0,l.kt)("inlineCode",{parentName:"li"},"True")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"$result.success"),". If you want to validate access afterwards, return ",(0,l.kt)("inlineCode",{parentName:"li"},"True")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"$result.verify"),"."),(0,l.kt)("li",{parentName:"ul"},"identify and evaluate guest access using the user agent information, the decide to allow or deny access."),(0,l.kt)("li",{parentName:"ul"},"deny access to guests by returning ",(0,l.kt)("inlineCode",{parentName:"li"},"False")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"$result.success"),". This can be done for example if the server is in maintenance mode. In this case, an error will be displayed on the mobile app if the user clicks on the ",(0,l.kt)("strong",{parentName:"li"},"Reload")," button.")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Here is a template example for a ",(0,l.kt)("inlineCode",{parentName:"p"},"On Mobile App Authentication")," database method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'\n  //On Mobile App Authentication database method\n #DECLARE ($mobileInfo : Object) -> $status : Object\n\n\n var $Boo_simulator : Boolean\n var $Txt_appID;$Txt_appName;$Txt_appVersion;$Txt_device;$Txt_deviceID;$Txt_email : Text\n var $Txt_IP;$Txt_languageCode;$Txt_languageId;$Txt_languageRegion;$Txt_osVersion;$Txt_sessionId : Text\n var $Txt_teamID : Text\n\n  //Get user email\n $Txt_email:=String($mobileInfo.email)\n\n If(Length($Txt_email)=0) //no email was provided\n  // Guest mode - allow or deny connection\n    $status.success:=True\n  // $status.success:=False if you want to deny guest access\n\n  // Optional welcome message to display on mobile App.\n    $status.statusText:="Welcome to my application"\n\n Else\n  // Authenticated mode -  Allow or not the connection\n    If(Is compiled mode) // Deployment version\n\n  //Allow, for example, emails from the 4D.com domain\n       $status.success:=($mobileInfo.email=("@"+Char(At sign)+"4d.com"))\n\n    Else //Development version\n\n  //Allow all adress for testing purposes\n       $status.success:=True\n\n    End if\n\n    If($status.success)\n\n\n  //Optional welcome message to display on mobile App.\n       $status.statusText:="Authentication successful"\n\n    Else\n\n       $status.statusText:=$mobileInfo.email+" is not an authorized email address."\n\n    End if\n End if\n\n  // Get App information if identification is needed (optional)\n If($mobileInfo.application#Null)\n    $Txt_appID:=$mobileInfo.application.id // App Id\n    $Txt_appName:=$mobileInfo.application.name //App Name\n    $Txt_appVersion:=$mobileInfo.application.version // App Version\n End if\n\n  //Get Device information if identification is needed (optional)\n If($mobileInfo.device#Null)\n    $Txt_device:=$mobileInfo.device.description //Device Description\n    $Txt_deviceID:=$mobileInfo.device.id //Device Id\n    $Txt_osVersion:=$mobileInfo.device.version //System Version\n    $Boo_simulator:=$mobileInfo.device.simulator //True if device is a Simulator\n End if\n\n  //Get the Team information if needed (optional)\n If($mobileInfo.team#Null)\n    $Txt_teamID:=$mobileInfo.team.id //Team Id\n End if\n\n  //Get the User Language information (optional)\n If($mobileInfo.language#Null)\n    $Txt_languageCode:=$mobileInfo.language.Code\n    $Txt_languageId:=$mobileInfo.language.id\n    $Txt_languageRegion:=$mobileInfo.language.region\n End if\n\n  //Get the session information\n If($mobileInfo.session#Null)\n  //Could be stored for future use.\n    $Txt_sessionId:=$mobileInfo.session.id //UUID created for this authentication\n    $Txt_IP:=$mobileInfo.session.ip //IP address\n End if\n\n  //Get the App parameters\n If($mobileInfo.parameters#Null)\n  //Any additional information that could be added by mobile app for custom use (object)\n End if\n\n\n')))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=l,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);