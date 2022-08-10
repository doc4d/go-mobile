"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7770],{28916:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=i(87462),r=(i(67294),i(3905));const a={id:"deployment-in-house-archive-and-export",title:"Archiver et exporter un projet"},o=void 0,l={unversionedId:"tutorials/deploying-in-house/deployment-in-house-archive-and-export",id:"version-19-R6/tutorials/deploying-in-house/deployment-in-house-archive-and-export",title:"Archiver et exporter un projet",description:"OBJECTIFS",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/tutorials/deploying-in-house/deployment-in-house-archive-and-export.md",sourceDirName:"tutorials/deploying-in-house",slug:"/tutorials/deploying-in-house/deployment-in-house-archive-and-export",permalink:"/fr/tutorials/deploying-in-house/deployment-in-house-archive-and-export",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/deploying-in-house/deployment-in-house-archive-and-export.md",tags:[],version:"19-R6",frontMatter:{id:"deployment-in-house-archive-and-export",title:"Archiver et exporter un projet"},sidebar:"tutorials",previous:{title:"Installation sur votre appareil iOS",permalink:"/fr/tutorials/deploying-in-house/testing-on-your-device"},next:{title:"Distribuer une application interne",permalink:"/fr/tutorials/deploying-in-house/deployment-in-house-distribute"}},p={},s=[{value:"\xc9TAPE 1. Configurer Xcode",id:"\xe9tape-1-configurer-xcode",level:2},{value:"\xc9TAPE 2. Obtenez votre Team ID",id:"\xe9tape-2-obtenez-votre-team-id",level:2},{value:"\xc9TAPE 3. Configurez 4D for iOS",id:"\xe9tape-3-configurez-4d-for-ios",level:2},{value:"\xc9TAPE 4. Ouvrez votre projet avec Xcode",id:"\xe9tape-4-ouvrez-votre-projet-avec-xcode",level:2},{value:"STEP 5. Archivez votre projet \xe0 partir de Xcode",id:"step-5-archivez-votre-projet-\xe0-partir-de-xcode",level:2},{value:"\xc9TAPE 6. Exportez votre projet",id:"\xe9tape-6-exportez-votre-projet",level:2},{value:"\xc9TAPE 7. S\xe9lectionnez votre m\xe9thode de distribution",id:"\xe9tape-7-s\xe9lectionnez-votre-m\xe9thode-de-distribution",level:2},{value:"\xc9TAPE 8. S\xe9lectionnez les options de distribution de votre entreprise",id:"\xe9tape-8-s\xe9lectionnez-les-options-de-distribution-de-votre-entreprise",level:2},{value:"Qu&#39;est-ce qu&#39;un manifest ?",id:"quest-ce-quun-manifest-",level:4},{value:"\xc9TAPE 9. Informations sur la distribution du manifest",id:"\xe9tape-9-informations-sur-la-distribution-du-manifest",level:2},{value:"\xc9TAPE 10. Re-signez votre application",id:"\xe9tape-10-re-signez-votre-application",level:2},{value:"\xc9TAPE 11. V\xe9rifiez le contenu de votre application .ipa",id:"\xe9tape-11-v\xe9rifiez-le-contenu-de-votre-application-ipa",level:2}],u={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"OBJECTIFS")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Archiver et exporter un projet 4D for iOS"),(0,r.kt)("li",{parentName:"ul"},"G\xe9n\xe9rer des fichiers .ipa et des fichiers manifest"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"CONDITIONS PR\xc9ALABLES")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program")),(0,r.kt)("li",{parentName:"ul"},"Un serveur Web s\xe9curis\xe9"),(0,r.kt)("li",{parentName:"ul"},"Une ic\xf4ne de r\xe9solution 57 x 57 px"),(0,r.kt)("li",{parentName:"ul"},"Une ic\xf4ne de r\xe9solution 512 x 512 px"))),(0,r.kt)("h2",{id:"\xe9tape-1-configurer-xcode"},"\xc9TAPE 1. Configurer Xcode"),(0,r.kt)("p",null,"Une fois votre compte valid\xe9 par Apple, ouvrez Xcode et ajoutez votre compte Apple Enterprise Developer dans Preferences > Accounts."),(0,r.kt)("p",null,"Xcode installera automatiquement les certificats et les \xe9l\xe9ments de provisioning n\xe9cessaires."),(0,r.kt)("h2",{id:"\xe9tape-2-obtenez-votre-team-id"},"\xc9TAPE 2. Obtenez votre Team ID"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connectez-vous \xe0 votre compte de d\xe9veloppeur Apple. Vous trouverez votre Team ID dans Membership.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Obtenez votre Team ID",src:i(34964).Z,width:"768",height:"739"})),(0,r.kt)("h2",{id:"\xe9tape-3-configurez-4d-for-ios"},"\xc9TAPE 3. Configurez 4D for iOS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Lancez 4D for iOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dans l\u2019onglet SECTIONS\xa0:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"G\xe9n\xe9ral\xa0: Saisissez votre Team ID."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Enterprise-Team-ID",src:i(87313).Z,width:"1082",height:"1009"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Publication : Entrez votre URL de production (HTTP est obligatoire pour le d\xe9ploiement).")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dans l\u2019onglet G\xc9N\xc9RATION :"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cr\xe9er & ex\xe9cuter\xa0: Cr\xe9ez votre projet.")))),(0,r.kt)("h2",{id:"\xe9tape-4-ouvrez-votre-projet-avec-xcode"},"\xc9TAPE 4. Ouvrez votre projet avec Xcode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xc0 partir de l\u2019onglet G\xc9N\xc9RATION de l'\xe9diteur de projet, cliquez sur ",(0,r.kt)("strong",{parentName:"li"},"Projet > Ouvrir le produit avec Xcode"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pen your project with Xcode ",src:i(22013).Z,width:"1033",height:"994"})),(0,r.kt)("h2",{id:"step-5-archivez-votre-projet-\xe0-partir-de-xcode"},"STEP 5. Archivez votre projet \xe0 partir de Xcode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xc0 partir de Xcode, acc\xe9dez au Menu du simulateur et s\xe9lectionnez ",(0,r.kt)("strong",{parentName:"li"},"Generic iOS Device"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generic iOS Device",src:i(51098).Z,width:"318",height:"558"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Puis, dans le menu, cliquez sur Product et s\xe9lectionnez ",(0,r.kt)("strong",{parentName:"li"},"Archive"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Archive your Project",src:i(72287).Z,width:"225",height:"337"})),(0,r.kt)("h2",{id:"\xe9tape-6-exportez-votre-projet"},"\xc9TAPE 6. Exportez votre projet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\xc0 la fin de l\u2019archivage, la fen\xeatre de l\u2019organisateur appara\xeet avec l\u2019archive que vous venez de cr\xe9er")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Export"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Exportez votre projet",src:i(7273).Z,width:"1228",height:"667"})),(0,r.kt)("h2",{id:"\xe9tape-7-s\xe9lectionnez-votre-m\xe9thode-de-distribution"},"\xc9TAPE 7. S\xe9lectionnez votre m\xe9thode de distribution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"S\xe9lectionnez ",(0,r.kt)("strong",{parentName:"li"},"Enterprise")," et cliquez sur ",(0,r.kt)("strong",{parentName:"li"},"Next"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Distribution Method",src:i(63198).Z,width:"737",height:"454"})),(0,r.kt)("h2",{id:"\xe9tape-8-s\xe9lectionnez-les-options-de-distribution-de-votre-entreprise"},"\xc9TAPE 8. S\xe9lectionnez les options de distribution de votre entreprise"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vous pouvez laisser toutes les options coch\xe9es.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Enterprise distribution options",src:i(31785).Z,width:"737",height:"454"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Vous pouvez laisser Xcode vous g\xe9n\xe9rer un fichier manifest.plist ou bien le g\xe9n\xe9rer manuellement.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Next"),"."))),(0,r.kt)("h4",{id:"quest-ce-quun-manifest-"},"Qu'est-ce qu'un manifest ?"),(0,r.kt)("p",null,"Le manifest est une liste de propri\xe9t\xe9s fond\xe9e sur XML et doit contenir :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL")," : un URL vers le fichier .ipa."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"display-image")," : un URL vers une ic\xf4ne PNG 57 x 57 px (72 x 72 px pour iPad) qui sera utilis\xe9e lors du t\xe9l\xe9chargement et de l'installation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"full-size-image")," : un URL vers une image PNG 512 x 512 px repr\xe9sentant l'application iTunes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bundle-identifier")," : La cha\xeene d'identification de votre application. Vous pouvez l'obtenir \xe0 partir du fichier .plist de votre application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bundle-version")," : La chaine de la version courante du bundle de votre application. Vous pouvez l'obtenir \xe0 partir du fichier .plist de votre application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"title")," : Le nom de votre application.")),(0,r.kt)("p",null,"Voici un exemple de fichier manifest.plist :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n    <key>items</key>\n    <array>\n        <dict>\n            <key>assets</key>\n            <array>\n                <dict>\n                    <key>kind</key>\n                    <string>software-package</string>\n                    <key>url</key>\n                    <string>https://...Contact.ipa</string>\n                </dict>\n                <dict>\n                    <key>kind</key>\n                    <string>display-image</string>\n                    <key>url</key>\n                    <string>https://...Contact_icon_57.png</string>\n                </dict>\n                <dict>\n                    <key>kind</key>\n                    <string>full-size-image</string>\n                    <key>url</key>\n                    <string>https://...Contact_icon_512.png</string>\n                </dict>\n            </array>\n            <key>metadata</key>\n            <dict>\n                <key>bundle-identifier</key>\n                <string>com.contactApp.ContactDemoapp</string>\n                <key>bundle-version</key>\n                <string>1.0</string>\n                <key>kind</key>\n                <string>software</string>\n                <key>title</key>\n                <string>Contact Demo app</string>\n            </dict>\n        </dict>\n    </array>\n</dict>\n</plist>\n')),(0,r.kt)("h2",{id:"\xe9tape-9-informations-sur-la-distribution-du-manifest"},"\xc9TAPE 9. Informations sur la distribution du manifest"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nous vous recommandons de laisser \xe0 Xcode le soin d'entrer l'URL de votre application et les URL des ic\xf4nes. Bien entendu, vous aurez la possibilit\xe9 de changer les URL plus tard.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Informations sur la distribution du manifest",src:i(97282).Z,width:"737",height:"454"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cliquez sur ",(0,r.kt)("strong",{parentName:"li"},"Next"),".")),(0,r.kt)("h2",{id:"\xe9tape-10-re-signez-votre-application"},"\xc9TAPE 10. Re-signez votre application"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Laissez \xe0 Xcode le soin de g\xe9rer l'option ",(0,r.kt)("strong",{parentName:"li"},"Automatically manage signing"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Re-signez votre application",src:i(31603).Z,width:"737",height:"454"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cliquez sur ",(0,r.kt)("strong",{parentName:"li"},"Next"),".")),(0,r.kt)("h2",{id:"\xe9tape-11-v\xe9rifiez-le-contenu-de-votre-application-ipa"},"\xc9TAPE 11. V\xe9rifiez le contenu de votre application .ipa"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vous pouvez v\xe9rifier ici l'exactitude de l'identifiant de votre application et de votre Team ID.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"V\xe9rifiez le contenu de votre application .ipa",src:i(31484).Z,width:"737",height:"454"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cliquez sur ",(0,r.kt)("strong",{parentName:"li"},"Export")," et s\xe9lectionnez l\u2019emplacement dans lequel vous souhaitez enregistrer le dossier de votre application sur votre ordinateur.")))}d.isMDXComponent=!0},3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(i),m=r,v=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return i?n.createElement(v,o(o({ref:t},u),{},{components:i})):n.createElement(v,o({ref:t},u))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},72287:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Archive-your-Project-4ded23cdc25f5f9e463d1fd103dd088a.png"},51098:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Deployment-Generic-iOS-Device-6802ac746895e64a241936d873b1569b.png"},63198:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Distribution-Method-selection-4203f92fd6f07bc095d5da471bdbfe31.png"},97282:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Distribution-manifest-information-7ab8a3fa2a7ddbacdb627ad9a6d290ab.png"},87313:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Enterprise-Team-ID-8de2641becb475e122149a607a22ab2b.png"},31785:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Enterprise-distribution-options-a0d5aa35c0dd9adc40c6e128c6a67b90.png"},22013:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},7273:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Organizer-window-archive-aacf8eecb7c3910074549a45dcf45e32.png"},31603:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Re-sign-your-application-9e11a4678ac11a7bd04df4623a8719d0.png"},31484:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Review-ipa-content-de240a012f798dac5aae762ec059d6bc.png"},34964:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"}}]);