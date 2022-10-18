"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[938],{29562:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=t(87462),n=(t(67294),t(3905));const s={id:"session-management",title:"Gest\xe3o da sess\xe3o"},r=void 0,i={unversionedId:"special-features/session-management",id:"special-features/session-management",title:"Gest\xe3o da sess\xe3o",description:"4D para iOS e 4D para Android permitem-lhe gerir sess\xf5es de utilizadores, para que possa obter informa\xe7\xf5es sobre os utilizadores ligados e melhorar a sua experi\xeancia na sua aplica\xe7\xe3o m\xf3vel.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/special-features/session-management.md",sourceDirName:"special-features",slug:"/special-features/session-management",permalink:"/go-mobile/pt/docs/next/special-features/session-management",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/docs/special-features/session-management.md",tags:[],version:"current",frontMatter:{id:"session-management",title:"Gest\xe3o da sess\xe3o"},sidebar:"docs",previous:{title:"Authentication",permalink:"/go-mobile/pt/docs/next/special-features/authentication"},next:{title:"Push notifications",permalink:"/go-mobile/pt/docs/next/special-features/push-notification"}},l={},p=[{value:"Arquivo de sess\xe3o",id:"arquivo-de-sess\xe3o",level:2},{value:"Objecto sess\xe3o",id:"objecto-sess\xe3o",level:2},{value:"Mobile Session Management Component",id:"mobile-session-management-component",level:2}],m={toc:p};function d(e){let{components:a,...s}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"4D para iOS e 4D para Android permitem-lhe gerir sess\xf5es de utilizadores, para que possa obter informa\xe7\xf5es sobre os utilizadores ligados e melhorar a sua experi\xeancia na sua aplica\xe7\xe3o m\xf3vel."),(0,n.kt)("h2",{id:"arquivo-de-sess\xe3o"},"Arquivo de sess\xe3o"),(0,n.kt)("p",null,"Quando um utilizador abre a aplica\xe7\xe3o pela primeira vez, um arquivo de sess\xe3o \xe9 automaticamente criado e armazenado ao lado do arquivo de dados atual na pasta MobileApps."),(0,n.kt)("p",null,"The session files are organized and grouped by app folder. The Team ID and app bundle ID are concatenated to create the app folder names."),(0,n.kt)("p",null,"Here is an example of a 4D for iOS-generated session file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n"application":{\n  "id":"com.contactApp. Contact",\n  "name":"Contact",\n  "version":"1.0.0"\n},\n"team":{\n  "id":"UTT7VDX8W5"\n},\n"language":{\n  "id":"en_US",\n  "code":"en",\n  "region":"US"\n},\n"email":"",\n"device":{\n  "description":"iPhone X",\n  "version":"11.3",\n  "id":"0DC5132E-1EF4-407C-A832-5FE33D818AF3",\n  "simulator":true\n},\n"send":"link",\n"session":{\n  "id":"7023d9205074199d1c16fc00d24354e778137675",\n  "ip":"::ffff:192.168.5.4"\n},\n"status":"accepted",\n"token":"eyJhcHBOYW1lSUQiOiJjb20uY29udGFjdEFwcC5Db250YWN0IiwiaWQiOiI3MDIzZDkyMDUwNzQxOTlkMWMxNmZjMDBkMjQzNTRlNzc4MTM3Njc1IiwidGVhbUlEIjoiVVRUN1ZEWDhXNSJ9"\n}\n\n')),(0,n.kt)("p",null,'Como padr\xe3o, o "estado" se estabelece automaticamente como "aceito" se a sess\xe3o for validada pelo m\xe9todo base',(0,n.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/next/4d/on-mobile-app-authentication"},"On Mobile App Authentication")," (",(0,n.kt)("inlineCode",{parentName:"p"},"$result.success")," definido como",(0,n.kt)("inlineCode",{parentName:"p"},"True"),"). Se quiser a habilidade para validar manualmente o primeiro login de cada sess\xe3o de usu\xe1rio, adicione ",(0,n.kt)("inlineCode",{parentName:"p"},"$result.verify:=True")," ao objeto retornado pelo m\xe9todo de banco de dados ",(0,n.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/next/4d/on-mobile-app-authentication"},"On Mobile App Authentication"),'. Alterar\xe1 o estado padr\xe3o "aceito" para "pendente" no arquivo da sess\xe3o. Para mais informa\xe7\xf5es, ver ',(0,n.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/next/special-features/authentication#without-the-component"},"este exemplo"),"."),(0,n.kt)("h2",{id:"objecto-sess\xe3o"},"Objecto sess\xe3o"),(0,n.kt)("p",null,"As sess\xf5es m\xf3veis podem aproveitar as poderosas sess\xf5es de usu\xe1rio ",(0,n.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/WebServer/sessions.html"},"4D"),", quando s\xe3o ativadas no servidor. Neste caso, a informa\xe7\xe3o armazenada no arquivo de sess\xe3o m\xf3vel ",(0,n.kt)("a",{parentName:"p",href:"#session-file"})," \xe9 utilizada para preencher o objecto de sess\xe3o ",(0,n.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/API/SessionClass.html"})," no servidor, para que possa partilhar um carrinho de compras para o mesmo usu\xe1rio entre as suas sess\xf5es web e m\xf3veis, por exemplo."),(0,n.kt)("p",null,"No projecto m\xf3vel, o objecto de sess\xe3o ",(0,n.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/API/SessionClass.html"})," est\xe1 automaticamente dispon\xedvel a partir de:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"o m\xe9todo base ",(0,n.kt)("a",{parentName:"li",href:"/go-mobile/pt/docs/next/4d/on-mobile-app-authentication"},"On Mobile App Authentication")),(0,n.kt)("li",{parentName:"ul"},"o m\xe9todo banco de dados ",(0,n.kt)("a",{parentName:"li",href:"/go-mobile/pt/docs/next/4d/on-mobile-app-action"},"On Mobile App Action")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mesopelagique/form-detail-WebArea"},"webareas")," nos seus formul\xe1rios.")),(0,n.kt)("p",null,"Com sess\xf5es de usu\xe1rio, pode acessar e exibir dados de usu\xe1rios atrav\xe9s de ",(0,n.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/Tags/tags.html"},"4D tags")," em ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mesopelagique/form-detail-WebArea"},"webareas"),". Por exemplo, numa forma page.shtml, pode escrever:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"<html><body><h1>Utiliza o seguinte endere\xe7o: \x3c!--#4DTEXT Session.info.mobile.email--\x3e </h1></body></html>\n")),(0,n.kt)("h2",{id:"mobile-session-management-component"},"Mobile Session Management Component"),(0,n.kt)("p",null,"Sessions can be managed by the ",(0,n.kt)("strong",{parentName:"p"},"Mobile Session Management")," component:"),(0,n.kt)("div",null,(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d/Mobile-Session-Management/releases/latest"},"Componente Mobile Session Management")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Descarregue e descomprima o arquivo zip"),(0,n.kt)("li",{parentName:"ol"},"V\xe1 para o arquivo Gerar/Componentes e obtenha o arquivo MOBILE SESSION MANAGEMENT.4dbase"),(0,n.kt)("li",{parentName:"ol"},"Crie uma pasta ",(0,n.kt)("strong",{parentName:"li"},"Componentes")," junto ao banco de dados 4D com os dados da aplica\xe7\xe3o."),(0,n.kt)("li",{parentName:"ol"},"Coloque o componente ",(0,n.kt)("strong",{parentName:"li"},"MOBILE SESSION MANAGEMENT")," na pasta ",(0,n.kt)("strong",{parentName:"li"},"Componentes")," rec\xe9m criada."),(0,n.kt)("li",{parentName:"ol"},"Reinicie 4D."),(0,n.kt)("li",{parentName:"ol"},"Clique no bot\xe3o ",(0,n.kt)("strong",{parentName:"li"},"Executar")," a partir da barra de ferramentas"),(0,n.kt)("li",{parentName:"ol"},"No explorador de m\xe9todos 4D, selecione o m\xe9todo ",(0,n.kt)("strong",{parentName:"li"},"MOBILE SESSION MANAGEMENT")," e clique no bot\xe3o ",(0,n.kt)("strong",{parentName:"li"},"Executar"),"."),(0,n.kt)("li",{parentName:"ol"},"A janela de aplica\xe7\xf5es aparecer\xe1 mostrando todas suas aplica\xe7\xf5es:")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Session",src:t(60803).Z,width:"882",height:"368"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Right click on a session to reveal the session file in the Finder or delete it."),(0,n.kt)("li",{parentName:"ul"},"You can change and define the session status for each device: accepted or pending")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Session selected",src:t(51493).Z,width:"882",height:"368"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Push")," button will update the session in memory."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Refresh")," button updates the session list.")))}d.isMDXComponent=!0},3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>u});var o=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),p=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},m=function(e){var a=p(e.components);return o.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},c=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(t),u=n,b=c["".concat(l,".").concat(u)]||c[u]||d[u]||s;return t?o.createElement(b,r(r({ref:a},m),{},{components:t})):o.createElement(b,r({ref:a},m))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,r=new Array(s);r[0]=c;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var p=2;p<s;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},51493:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/session-management-selected-3cb4acb42fad795985f4399d23f89e40.png"},60803:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/session-management-7e6c99c452a30403a179944f2b596999.png"}}]);